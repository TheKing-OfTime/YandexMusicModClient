(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7301],
  {
    73315: function (e, t, i) {
      "use strict";
      i.d(t, {
        kI: function () {
          return g;
        },
        HD: function () {
          return u;
        },
        XX: function () {
          return c;
        },
      });
      var a,
        n,
        l,
        r,
        o = i(2685);
      let s = (e) => {
          let { id: t, type: i, value: a } = e;
          return (0, o.pj)({
            id: t || null,
            type: i || null,
            value: a || null,
          });
        },
        c = (e) => {
          let { text: t, textColor: i, color: a, action: n } = e;
          return (0, o.pj)({
            text: t || null,
            textColor: i || null,
            color: a || null,
            action: n && s(n),
          });
        };
      ((a = l || (l = {})).CLOSE = "close"),
        (a.LINK = "link"),
        (a.PAYWALL = "paywall");
      let d = o.V5.model("CommunicationButtonAction", {
        id: o.V5.maybeNull(o.V5.string),
        type: o.V5.maybeNull(o.V5.enumeration(Object.values(l))),
        value: o.V5.maybeNull(o.V5.string),
      });
      ((n = r || (r = {})).PRIMARY = "primary"),
        (n.SECONDARY = "secondary"),
        (n.PLUS = "plus");
      let u = o.V5.model("CommunicationButton", {
        text: o.V5.maybeNull(o.V5.string),
        color: o.V5.maybeNull(o.V5.enumeration(Object.values(r))),
        action: o.V5.maybeNull(d),
        textColor: o.V5.maybeNull(o.V5.string),
      });
      var m = i(65301),
        _ = i(9695),
        v = i(96233),
        p = i(91207),
        x = i(78372),
        y = i(81437),
        h = i(58997),
        f = i(55033),
        b = i.n(f);
      let g = (0, v.Pi)((e) => {
        var t;
        let {
            anchorId: i,
            screenId: a,
            button: n,
            buttonSize: r,
            buttonClassName: o,
            textClassName: s,
            hide: c,
          } = e,
          { communication: d } = (0, h.oR4)(),
          u =
            ((null === (t = n.action) || void 0 === t ? void 0 : t.type) ===
              l.LINK &&
              n.action.value) ||
            "",
          { isExternalLink: v } = (0, h.zBm)(u),
          f = (0, h.s0h)(u),
          g = (0, p.useCallback)(() => {
            if (n.action)
              switch (
                (i && a && n.action.id && d.action(i, a, n.action.id),
                n.action.type)
              ) {
                case l.LINK:
                  n.action.value && f(), v || null == c || c();
                  return;
                case l.CLOSE:
                  null == c || c();
                  return;
              }
          }, [i, a, d, n.action, c, f, v]),
          C = (0, p.useMemo)(() => {
            if (n.textColor) return { color: n.textColor };
          }, [n.textColor]);
        return (0, m.jsx)(x.z, {
          className: (0, _.W)(b().root, b()["root_".concat(n.color)], o),
          role: u ? "link" : "button",
          color: n.color ? n.color : void 0,
          radius: "xxxl",
          onClick: g,
          size: r,
          children: (0, m.jsx)(y.Caption, {
            className: (0, _.W)(b().text, s),
            variant: "div",
            type: "text",
            size: "m",
            style: C,
            children: n.text,
          }),
        });
      });
    },
    62178: function (e, t, i) {
      "use strict";
      i.d(t, {
        On: function () {
          return b;
        },
        Xv: function () {
          return d;
        },
        ho: function () {
          return r;
        },
      });
      var a = i(2685),
        n = i(73315);
      let l = (e) => {
          let {
            bgUrl: t,
            bgColor: i,
            title: l,
            text: r,
            titleColor: o,
            textColor: s,
            imageUrl: c,
            buttons: d,
          } = e;
          return (0, a.pj)({
            bgUrl: t || null,
            bgColor: i || null,
            title: l || null,
            text: r || null,
            titleColor: o || null,
            textColor: s || null,
            imageUrl: c || null,
            buttons: d.filter((e) => e.text).map(n.XX),
          });
        },
        r = (e) =>
          (0, a.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: l(e.div),
          });
      var o = i(57916);
      let s = a.V5.model("BarBelowContent", {
          bgUrl: a.V5.maybeNull(a.V5.string),
          bgColor: a.V5.maybeNull(a.V5.string),
          imageUrl: a.V5.maybeNull(a.V5.string),
          title: a.V5.maybeNull(a.V5.string),
          titleColor: a.V5.maybeNull(a.V5.string),
          text: a.V5.maybeNull(a.V5.string),
          textColor: a.V5.maybeNull(a.V5.string),
          buttons: a.V5.array(n.HD),
        }),
        c = a.V5.model("BarBelow", {
          anchorId: a.V5.enumeration(Object.values(o.o)),
          screenId: a.V5.string,
          content: s,
        }),
        d = a.V5.model("BarBelowMain", {
          anchorId: a.V5.maybe(a.V5.string),
          isVisible: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenShown: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenHidden: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenStarted: a.V5.maybe(a.V5.boolean),
          list: a.V5.array(c),
        })
          .views((e) => ({
            get barBelowItem() {
              return e.list.find((t) => t.anchorId === e.anchorId);
            },
            get showWithAnimation() {
              return !e.hasAnimationAlreadyBeenShown && e.isVisible;
            },
            get hideWithAnimation() {
              return (
                e.hasAnimationAlreadyBeenShown &&
                !e.hasAnimationAlreadyBeenHidden &&
                !e.isVisible
              );
            },
          }))
          .actions((e) => ({
            setAnchorId(t) {
              e.anchorId = t;
            },
            show() {
              e.isVisible = !0;
            },
            hide() {
              e.isVisible = !1;
            },
            setAnimationAlreadyBeenShown() {
              e.hasAnimationAlreadyBeenShown = !0;
            },
            setAnimationAlreadyBeenHidden() {
              e.hasAnimationAlreadyBeenHidden = !0;
            },
            setAnimationAlreadyBeenStarted() {
              e.hasAnimationAlreadyBeenStarted = !0;
            },
          }));
      var u = i(65301),
        m = i(9695),
        _ = i(96233),
        v = i(91207),
        p = i(37184),
        x = i(93422),
        y = i(81437),
        h = i(93824),
        f = i.n(h);
      let b = (0, _.Pi)((e) => {
        var t, i, a, l;
        let { className: r, barBelow: o } = e,
          { formatMessage: s } = (0, p.Z)(),
          c = (0, v.useMemo)(() => {
            let e = { title: {}, text: {}, bg: {} };
            if (!o.barBelowItem) return e;
            let {
              titleColor: t,
              textColor: i,
              bgColor: a,
              bgUrl: n,
            } = o.barBelowItem.content;
            return (
              t && (e.title.color = t),
              i && (e.text.color = i),
              a && (e.bg.backgroundColor = a),
              n &&
                (e.bg.backgroundImage = 'url("'.concat(
                  o.barBelowItem.content.bgUrl,
                  '")',
                )),
              e
            );
          }, [o]),
          d = (0, v.useMemo)(() => {
            var e;
            return null === (e = o.barBelowItem) || void 0 === e
              ? void 0
              : e.content.buttons.map((e) => {
                  var t, i;
                  return (0, u.jsx)(
                    n.kI,
                    {
                      anchorId:
                        null === (t = o.barBelowItem) || void 0 === t
                          ? void 0
                          : t.anchorId,
                      screenId:
                        null === (i = o.barBelowItem) || void 0 === i
                          ? void 0
                          : i.screenId,
                      button: e,
                      buttonSize: "l",
                      hide: o.hide,
                    },
                    e.text,
                  );
                });
          }, [o]),
          _ = (0, v.useCallback)(
            (e) => {
              e.animationName.includes("show")
                ? o.setAnimationAlreadyBeenShown()
                : e.animationName.includes("hide") &&
                  o.setAnimationAlreadyBeenHidden();
            },
            [o],
          ),
          h = (0, v.useCallback)(
            (e) => {
              e.animationName.includes("show") &&
                o.setAnimationAlreadyBeenStarted();
            },
            [o],
          );
        return (0, u.jsxs)("section", {
          className: (0, m.W)(
            f().root,
            {
              [f().root_hidden]: !o.isVisible && !o.hideWithAnimation,
              [f().root_show]: o.showWithAnimation,
              [f().root_hide]: o.hideWithAnimation,
            },
            r,
          ),
          style: c.bg,
          onAnimationStart: h,
          onAnimationEnd: _,
          "aria-label": s({ id: "bar-below.section-name" }),
          children: [
            (null === (t = o.barBelowItem) || void 0 === t
              ? void 0
              : t.content.imageUrl) &&
              (0, u.jsx)(x.Image, {
                className: f().image,
                "aria-hidden": !0,
                src:
                  null === (i = o.barBelowItem) || void 0 === i
                    ? void 0
                    : i.content.imageUrl,
                fit: "contain",
                withAvatarReplace: !0,
                withAspectRatio: !0,
              }),
            (0, u.jsxs)("div", {
              className: f().content,
              children: [
                (null === (a = o.barBelowItem) || void 0 === a
                  ? void 0
                  : a.content.title) &&
                  (0, u.jsx)(y.Heading, {
                    className: f().title,
                    variant: "h3",
                    style: c.title,
                    lineClamp: 2,
                    children: o.barBelowItem.content.title,
                  }),
                (null === (l = o.barBelowItem) || void 0 === l
                  ? void 0
                  : l.content.text) &&
                  (0, u.jsx)(y.Heading, {
                    className: f().text,
                    variant: "h4",
                    size: "xs",
                    style: c.text,
                    lineClamp: 2,
                    children: o.barBelowItem.content.text,
                  }),
              ],
            }),
            (0, u.jsx)("div", { className: f().buttons, children: d }),
          ],
        });
      });
    },
    81469: function (e, t, i) {
      "use strict";
      i.d(t, {
        Y: function () {
          return x;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(91207),
        r = i(37184),
        o = i(55975),
        s = i(66055),
        c = i(58997),
        d = i(60704),
        u = i.n(d),
        m = i(81437),
        _ = i(77043),
        v = i.n(_);
      let p = (e) => {
          let { value: t, variant: i, className: l, style } = e,
            r =
              "start" === i
                ? o.bG.changeTimecode.TIMECODE_TIME_START
                : o.bG.changeTimecode.TIMECODE_TIME_END;
          return (0, a.jsx)(m.Caption, {
            className: (0, n.W)(v().root, v()["root_".concat(i)], l),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            style: style,
            ...(0, o.BA)(r),
            children: t,
          });
        },
        x = (e) => {
          var t, i;
          let {
              className: d,
              sliderClassName: m,
              disabled: _,
              isFullscreen: v,
              isMobile: x,
              showThumbVariant: y,
              withTimecode: h = !0,
            } = e,
            f = (0, c.R$C)(),
            b = (v || !x) && h,
            g = (0, l.useRef)(!1),
            [C, N] = (0, l.useState)(0),
            [k, j] = (0, l.useState)(0),
            [I, S] = (0, l.useState)(0),
            { formatMessage: A } = (0, r.Z)(),
            { advert: T } = (0, c.oR4)(),
            P = (0, c.ozq)(),
            w = (0, l.useCallback)(
              (e, t) => {
                T.isAdvertShown ||
                  ((g.current = !t), t ? null == f || f.setProgress(e) : N(e));
              },
              [f, T.isAdvertShown],
            ),
            E = (0, l.useCallback)((e) => {
              e &&
                (e.duration === 1 / 0
                  ? (j(0), N(0), S(0))
                  : (j(e.duration),
                    N((t) => (g.current ? t : e.position)),
                    S(e.loaded)));
            }, []);
          return (
            (0, l.useEffect)(() => {
              var e, t;
              let i =
                  null == P
                    ? void 0
                    : null === (e = P.audioAdvertPlayback) || void 0 === e
                      ? void 0
                      : e.state.playerState.progress.onChange(() => {
                          var e;
                          E(
                            null == P
                              ? void 0
                              : null === (e = P.audioAdvertPlayback) ||
                                  void 0 === e
                                ? void 0
                                : e.state.playerState.progress.value,
                          );
                        }),
                a =
                  null == f
                    ? void 0
                    : null === (t = f.state.playerState) || void 0 === t
                      ? void 0
                      : t.progress.onChange(() => {
                          E(f.state.playerState.progress.value);
                        });
              return () => {
                null == a || a(), null == i || i();
              };
            }, [
              f,
              null == P
                ? void 0
                : null === (i = P.audioAdvertPlayback) || void 0 === i
                  ? void 0
                  : null === (t = i.state) || void 0 === t
                    ? void 0
                    : t.playerState.progress,
              E,
            ]),
            (0, a.jsxs)("div", {
              className: (0, n.W)(
                u().root,
                {
                  [u().root_fullscreen]: v,
                  [u().root_mobile]: x,
                  [u().root_withTimecode]: h,
                },
                d,
              ),
              ...(0, o.BA)(o.bG.changeTimecode.TIMECODE_WRAPPER),
              children: [
                b &&
                  (0, a.jsx)(p, {
                    value: (0, c.gf)(Math.round(C), Math.round(k)),
                    variant: "start",
                    style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS()
                      ? { opacity: 1 }
                      : undefined,
                    className: u().timecode,
                  }),
                (0, a.jsx)(s.i, {
                  className: (0, n.W)(
                    u().slider,
                    { [u()["slider_thumbSize_".concat(x ? "xs" : "m")]]: !0 },
                    m,
                  ),
                  disabled: _,
                  thumbSize: x ? "xs" : "s",
                  trackSize: x ? "xs" : "s",
                  value: Math.round(C),
                  mode: "deferred",
                  secondaryValue: Math.round(I),
                  maxValue: 0 === k ? void 0 : Math.round(k),
                  onChange: w,
                  "aria-label": A({ id: "player-actions.timecode-control" }),
                  showThumbVariant: y,
                  ...(0, o.BA)(o.bG.changeTimecode.TIMECODE_SLIDER),
                }),
                b &&
                  (0, a.jsx)(p, {
                    value: (0, c.gf)(Math.round(k), Math.round(k)),
                    variant: "end",
                    style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS()
                      ? { opacity: 1 }
                      : undefined,
                    className: u().timecode,
                  }),
              ],
            })
          );
        };
    },
    61177: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return x;
        },
        K: function () {
          return l;
        },
      });
      var a = i(91207),
        n = i(58997);
      let l = () => {
        let e = (0, n.uK4)().get(n.V0J),
          t = (0, n.R$C)(),
          { advert: i, sonataState: l } = (0, n.oR4)(),
          r = (0, n.ozq)();
        return (0, a.useCallback)(
          async (a, o) => {
            if (0 !== a)
              e.set(n.BUb.YmPlayerPrevVolume, a, { expires: 365 }),
                await (null == t ? void 0 : t.setVolume(0, o)),
                e.set(n.BUb.YmPlayerVolume, 0, { expires: 365 }),
                i.isAdvertShown &&
                  (null == r || r.audioAdvertPlayback.setVolume(0),
                  l.setVolume(0));
            else {
              var s;
              let a =
                null !== (s = e.get(n.BUb.YmPlayerPrevVolume)) && void 0 !== s
                  ? s
                  : 1;
              e.remove(n.BUb.YmPlayerPrevVolume),
                await (null == t ? void 0 : t.setVolume(a, o)),
                e.set(n.BUb.YmPlayerVolume, a, { expires: 365 }),
                i.isAdvertShown &&
                  (null == r || r.audioAdvertPlayback.setVolume(a),
                  l.setVolume(a));
            }
          },
          [t, e, i, null == r ? void 0 : r.audioAdvertPlayback, l],
        );
      };
      var r = i(65301),
        o = i(9695),
        s = i(96233),
        c = i(37184),
        d = i(55975),
        u = i(78372),
        m = i(82036),
        _ = i(66055),
        v = i(22816),
        p = i.n(v);
      let x = (0, s.Pi)((e) => {
        var t, i;
        let { className: s } = e,
          { formatMessage: v } = (0, c.Z)(),
          x = (0, n.uK4)(),
          y = (0, n.R$C)(),
          { sonataState: h, advert: f } = (0, n.oR4)(),
          b = l(),
          g = (0, n.ozq)(),
          C = x.get(n.V0J),
          N =
            null !==
              (i =
                null !== (t = C.get(n.BUb.YmPlayerVolume)) && void 0 !== t
                  ? t
                  : h.volume) && void 0 !== i
              ? i
              : 1;
        (0, a.useEffect)(() => {
          if (f.isAdvertShown) {
            var e, t;
            null == g ||
              null === (t = g.audioAdvertPlayback) ||
              void 0 === t ||
              null === (e = t.setVolume) ||
              void 0 === e ||
              e.call(t, N);
          }
        }, [f.isAdvertShown, N, null == g ? void 0 : g.audioAdvertPlayback]),
          (0, a.useEffect)(() => {
            f.isAdvertShown || null == y || y.setVolume(N);
          }, [f.isAdvertShown, N, y]);
        let k = (0, a.useCallback)(
            (e) => {
              null == y || y.setVolume(e),
                C.set(n.BUb.YmPlayerVolume, e, { expires: 365 }),
                f.isAdvertShown &&
                  (null == g || g.audioAdvertPlayback.setVolume(e),
                  h.setVolume(e));
            },
            [
              y,
              C,
              h,
              f.isAdvertShown,
              null == g ? void 0 : g.audioAdvertPlayback,
            ],
          ),
          j = (0, a.useCallback)(async () => {
            await b(h.volume);
          }, [b, h.volume]),
          I = 0 === N ? "volumeOff" : "volume",
          S = v(
            0 === N
              ? { id: "player-actions.volume-on" }
              : { id: "player-actions.volume-off" },
          );
        return (0, r.jsxs)("div", {
          className: (0, o.W)(p().root, s),
          children: [
            (0, r.jsx)(u.z, {
              radius: "round",
              size: "xxxs",
              variant: "text",
              withRipple: !1,
              onClick: j,
              "aria-label": S,
              icon: (0, r.jsx)(m.Icon, {
                size: "xs",
                className: p().icon,
                variant: I,
              }),
              className: p().button,
              ...(0, d.BA)(d.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            (0, r.jsx)(_.i, {
              thumbSize: "s",
              trackSize: "s",
              value: N,
              maxValue: 1,
              step: 0.01,
              onChange: k,
              "aria-label": v({ id: "player-actions.volume-control" }),
              ...(0, d.BA)(d.bG.changeVolume.CHANGE_VOLUME_SLIDER),
            }),
          ],
        });
      });
    },
    42363: function (e, t, i) {
      "use strict";
      i.d(t, {
        IP: function () {
          return j;
        },
        FM: function () {
          return m;
        },
        QZ: function () {
          return o;
        },
      });
      var a = i(2685),
        n = i(4520),
        l = i(73315);
      let r = (e) => {
          let {
            isModal: t,
            closeActionId: i,
            bgUrl: r,
            bgUrlLarge: o,
            bgColor: s,
            logoUrl: c,
            title: d,
            text: u,
            titleColor: m,
            textColor: _,
            buttons: v,
            disclaimer: p,
            disclaimerColor: x,
          } = e;
          return (0, a.pj)({
            isModal: (0, n.sw)(t),
            closeActionId: i || null,
            bgUrl: r || null,
            bgUrlLarge: o || null,
            bgColor: s || null,
            logoUrl: c || null,
            title: d || null,
            text: u || null,
            titleColor: m || null,
            textColor: _ || null,
            buttons: v.filter((e) => e.text).map(l.XX),
            disclaimer: p || null,
            disclaimerColor: x || null,
          });
        },
        o = (e) =>
          (0, a.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: r(e.div),
          });
      var s = i(57916),
        c = i(91694);
      let d = a.V5.model("CommunicationModalContentModel", {
          isModal: a.V5.boolean,
          closeActionId: a.V5.maybeNull(a.V5.string),
          bgUrl: a.V5.maybeNull(a.V5.string),
          bgUrlLarge: a.V5.maybeNull(a.V5.string),
          bgColor: a.V5.maybeNull(a.V5.string),
          logoUrl: a.V5.maybeNull(a.V5.string),
          title: a.V5.maybeNull(a.V5.string),
          titleColor: a.V5.maybeNull(a.V5.string),
          text: a.V5.maybeNull(a.V5.string),
          textColor: a.V5.maybeNull(a.V5.string),
          buttons: a.V5.array(l.HD),
          disclaimer: a.V5.maybeNull(a.V5.string),
          disclaimerColor: a.V5.maybeNull(a.V5.string),
        }),
        u = a.V5.model("CommunicationModal", {
          anchorId: a.V5.enumeration(Object.values(s.o)),
          screenId: a.V5.string,
          content: d,
        }),
        m = c.KL.props({
          anchorId: a.V5.maybe(a.V5.enumeration(Object.values(s.o))),
          list: a.V5.array(u),
        })
          .views((e) => ({
            get modalItem() {
              return e.list.find((t) => t.anchorId === e.anchorId);
            },
          }))
          .actions((e) => ({
            setAnchorId(t) {
              e.anchorId = t;
            },
          }));
      var _ = i(65301),
        v = i(9695),
        p = i(96233),
        x = i(91207),
        y = i(37184),
        h = i(93422),
        f = i(14386),
        b = i(81437),
        g = i(58997),
        C = i(29778),
        N = i(83073),
        k = i.n(N);
      let j = (0, p.Pi)((e) => {
        var t, i, a;
        let { modal: n } = e,
          { formatMessage: r } = (0, y.Z)(),
          { communication: o } = (0, g.oR4)(),
          s =
            null === (t = n.modalItem) || void 0 === t
              ? void 0
              : t.content.isModal,
          c = (0, x.useMemo)(() => {
            var e;
            return null === (e = n.modalItem) || void 0 === e
              ? void 0
              : e.content.buttons.map((e) => {
                  var t;
                  return (0, _.jsx)(
                    l.kI,
                    {
                      screenId:
                        null === (t = n.modalItem) || void 0 === t
                          ? void 0
                          : t.screenId,
                      anchorId: n.anchorId,
                      button: e,
                      buttonSize: "default",
                      buttonClassName: k().button,
                      textClassName: k().buttonText,
                      hide: n.close,
                    },
                    e.text,
                  );
                });
          }, [n]),
          d = (0, x.useMemo)(() => {
            let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
            if (!n.modalItem) return e;
            let {
              bgUrl: t,
              bgUrlLarge: i,
              bgColor: a,
              titleColor: l,
              textColor: r,
              disclaimerColor: o,
            } = n.modalItem.content;
            return (
              t && (e.bg["--bg-url"] = 'url("'.concat(t, '")')),
              i && (e.bg["--bg-url-large"] = 'url("'.concat(i, '")')),
              a && (e.bg.backgroundColor = a),
              l && (e.title.color = l),
              r && (e.text.color = r),
              o && (e.disclaimer.color = o),
              e
            );
          }, [n]),
          u = (0, x.useCallback)(() => {
            n.modalItem &&
              n.modalItem.content.closeActionId &&
              o.action(
                n.modalItem.anchorId,
                n.modalItem.screenId,
                n.modalItem.content.closeActionId,
              ),
              n.close();
          }, [n, o]),
          m = (0, x.useMemo)(() => {
            var e;
            if (
              null === (e = n.modalItem) || void 0 === e
                ? void 0
                : e.content.logoUrl
            )
              return (0, _.jsx)(h.Image, {
                className: k().image,
                withAvatarReplace: !0,
                withFallback: !1,
                src: n.modalItem.content.logoUrl,
                withAspectRatio: !0,
                size: 400,
                fit: "cover",
              });
          }, [n]),
          p = (0, x.useMemo)(() => {
            var e;
            return (
              (null === (e = n.modalItem) || void 0 === e
                ? void 0
                : e.content.disclaimer) &&
              (0, g.g78)(n.modalItem.content.disclaimer, C.rU, {
                className: k().disclaimerLink,
                style: d.disclaimer,
                target: "_blank",
              })
            );
          }, [n, d]);
        return (0, _.jsx)(f.u, {
          style: d.bg,
          className: (0, v.W)(
            k().root,
            s ? k().root_modal : k().root_fullscreen,
          ),
          headerClassName: k().modalHeader,
          contentClassName: k().modalContent,
          header:
            m &&
            (0, _.jsx)("div", {
              className: (0, v.W)(k().imageWrapper, k().imageWrapper_header),
              children: m,
            }),
          open: n.isOpened,
          onOpenChange: n.onOpenChange,
          onClose: u,
          closeOnOutsidePress: !1,
          size: s ? "fitContent" : "fullscreen",
          placement: "center",
          labelClose: r({ id: "interface-actions.close" }),
          children: (0, _.jsxs)("div", {
            className: k().container,
            children: [
              (0, _.jsxs)("div", {
                className: k().wrapper,
                children: [
                  m &&
                    (0, _.jsx)("div", {
                      className: (0, v.W)(
                        k().imageWrapper,
                        k().imageWrapper_content,
                      ),
                      children: m,
                    }),
                  (null === (i = n.modalItem) || void 0 === i
                    ? void 0
                    : i.content.title) &&
                    (0, _.jsx)(b.Heading, {
                      className: k().title,
                      style: d.title,
                      size: "xl",
                      weight: "black",
                      variant: "h1",
                      lineClamp: 3,
                      children: n.modalItem.content.title,
                    }),
                  (null === (a = n.modalItem) || void 0 === a
                    ? void 0
                    : a.content.text) &&
                    (0, _.jsx)(b.Heading, {
                      className: k().text,
                      style: d.text,
                      size: "xs",
                      variant: "h2",
                      lineClamp: 4,
                      children: n.modalItem.content.text,
                    }),
                  (0, _.jsx)("div", { className: k().buttons, children: c }),
                ],
              }),
              (0, _.jsx)("div", {
                className: k().disclaimerWrapper,
                children: (0, _.jsx)(b.Caption, {
                  className: k().disclaimer,
                  style: d.disclaimer,
                  type: "text",
                  variant: "div",
                  size: "xs",
                  weight: "medium",
                  children: p,
                }),
              }),
            ],
          }),
        });
      });
    },
    18256: function (e, t, i) {
      "use strict";
      i.d(t, {
        V: function () {
          return Y;
        },
        x: function () {
          return N;
        },
      });
      var a = i(2685),
        n = i(91694),
        l = i(46393),
        r = i(58997);
      let o = (e) => {
          let { variant: t, id: i, title: n, path: l, albumArtistName: r } = e;
          return (0, a.pj)({
            id: i,
            type: t,
            title: n,
            path: l,
            artistName: r,
          });
        },
        s = (e) => {
          let { variant: t, id: i, title: n, path: l } = e;
          return (0, a.pj)({ id: i, type: t, title: n, path: l });
        },
        c = (e) => {
          let {
            variant: t,
            id: i,
            title: n,
            path: l,
            playlistOwnerName: r,
            playlistOwnerLogin: o,
          } = e;
          return (0, a.pj)({
            id: String(i),
            type: t,
            title: null != n ? n : null,
            path: null != l ? l : null,
            ownerName: r,
            ownerLogin: o,
          });
        },
        d = (e) => {
          let { variant: t, id: i, title: n, path: l, trackAlbumId: r } = e;
          return (0, a.pj)({ id: i, type: t, albumId: r, title: n, path: l });
        },
        u = (e) => {
          if (e.variant === r.GGO.TRACK) return d(e);
          if (e.variant === r.GGO.ALBUM) {
            let t = e.id;
            if (void 0 === t) throw new l.y("Missing album ID");
            return o({ ...e, id: t });
          }
          if (e.variant === r.GGO.ARTIST) {
            let t = e.id;
            if (void 0 === t) throw new l.y("Missing artist ID");
            return s({ ...e, id: t });
          }
          if (e.variant === r.GGO.PLAYLIST) return c(e);
          throw new l.y("Unknown variant");
        },
        m = "{lang}",
        _ = (e, t, i) =>
          null === i
            ? '<a href="'.concat(e, '">').concat(t, "</a>")
            : '<a href="'.concat(e, '">').concat(t, "</a> — ").concat(i),
        v = (e) => {
          let { width: t, height: i, iframeUri: a, listenMessage: n } = e,
            l = t.replace("px", ""),
            r = i.replace("px", "");
          return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
            .concat(t, ";height:")
            .concat(i, ';" width="')
            .concat(l, '" height="')
            .concat(r, '" src="')
            .concat(a, '">')
            .concat(n, "</iframe>");
        },
        p = a.V5.model({
          id: a.V5.number,
          type: a.V5.literal(r.GGO.ALBUM),
          title: a.V5.string,
          path: a.V5.string,
          artistName: a.V5.maybeNull(a.V5.string),
          width: a.V5.optional(a.V5.string, "614"),
          height: a.V5.optional(a.V5.string, "556"),
          listenMessage: a.V5.maybeNull(a.V5.string),
        })
          .views((e) => {
            let t = {
              get iframeUri() {
                let { location: t } = (0, a.yj)(e);
                return (0, r.tvw)({ tld: t.tld, id: e.id });
              },
              get entityUri() {
                let { location: t } = (0, a.yj)(e),
                  { config: i } = (0, a.dU)(e);
                return ""
                  .concat(i.iframe.entityBaseUrl.replace(r.MgS, t.tld))
                  .concat(e.path);
              },
              get iframeCode() {
                var i;
                return v({
                  width: e.width,
                  height: e.height,
                  iframeUri: t.iframeUri,
                  listenMessage:
                    null !== (i = e.listenMessage) && void 0 !== i ? i : "",
                });
              },
            };
            return t;
          })
          .actions((e) => ({
            setWidth(t) {
              e.width = t;
            },
            setHeight(t) {
              e.height = t;
            },
            setListenMessage(t) {
              e.listenMessage = t(_(e.entityUri, e.title, e.artistName));
            },
          })),
        x = (e, t) => '<a href="'.concat(e, '">').concat(t, "</a>"),
        y = a.V5.model({
          id: a.V5.string,
          type: a.V5.literal(r.GGO.ARTIST),
          title: a.V5.maybeNull(a.V5.string),
          path: a.V5.maybeNull(a.V5.string),
          width: a.V5.optional(a.V5.string, "614"),
          height: a.V5.optional(a.V5.string, "556"),
          listenMessage: a.V5.maybeNull(a.V5.string),
        })
          .views((e) => {
            let t = {
              get iframeUri() {
                let { location: t } = (0, a.yj)(e);
                return (0, r.arW)({ tld: t.tld, id: e.id });
              },
              get entityUri() {
                var i;
                let { location: t } = (0, a.yj)(e),
                  { config: n } = (0, a.dU)(e);
                return ""
                  .concat(n.iframe.entityBaseUrl.replace(r.MgS, t.tld))
                  .concat(
                    null !== (i = e.path) && void 0 !== i
                      ? i
                      : "/artist/".concat(e.id),
                  );
              },
              get iframeCode() {
                var n;
                return v({
                  width: e.width,
                  height: e.height,
                  iframeUri: t.iframeUri,
                  listenMessage:
                    null !== (n = e.listenMessage) && void 0 !== n ? n : "",
                });
              },
            };
            return t;
          })
          .actions((e) => ({
            setWidth(t) {
              e.width = t;
            },
            setHeight(t) {
              e.height = t;
            },
            setListenMessage(t) {
              if (null === e.title) {
                e.listenMessage = t("");
                return;
              }
              e.listenMessage = t(x(e.entityUri, e.title));
            },
          })),
        h = (e, t, i, a) =>
          '<a href="'
            .concat(e, '">')
            .concat(t, '</a> — <a href="')
            .concat(a, '">')
            .concat(i, "</a>"),
        f = a.V5.model({
          id: a.V5.string,
          type: a.V5.literal(r.GGO.PLAYLIST),
          title: a.V5.maybeNull(a.V5.string),
          path: a.V5.string,
          ownerLogin: a.V5.maybeNull(a.V5.string),
          ownerName: a.V5.maybeNull(a.V5.string),
          width: a.V5.optional(a.V5.string, "614"),
          height: a.V5.optional(a.V5.string, "556"),
          listenMessage: a.V5.maybeNull(a.V5.string),
        })
          .views((e) => {
            let t = {
              get iframeUri() {
                var i;
                let { location: t } = (0, a.yj)(e);
                return (0, r.a7R)({
                  tld: t.tld,
                  ownerLogin:
                    null !== (i = e.ownerLogin) && void 0 !== i ? i : "",
                  id: e.id,
                });
              },
              get entityUri() {
                let { location: t } = (0, a.yj)(e),
                  { config: i } = (0, a.dU)(e);
                return ""
                  .concat(i.iframe.entityBaseUrl.replace(r.MgS, t.tld))
                  .concat(e.path);
              },
              get iframeCode() {
                var n;
                return v({
                  width: e.width,
                  height: e.height,
                  iframeUri: t.iframeUri,
                  listenMessage:
                    null !== (n = e.listenMessage) && void 0 !== n ? n : "",
                });
              },
            };
            return t;
          })
          .actions((e) => ({
            setWidth(t) {
              e.width = t;
            },
            setHeight(t) {
              e.height = t;
            },
            setListenMessage(t) {
              if (
                null === e.title ||
                null === e.ownerName ||
                null === e.ownerLogin
              ) {
                e.listenMessage = t("");
                return;
              }
              let { location: i } = (0, a.yj)(e);
              e.listenMessage = t(
                h(
                  e.entityUri,
                  e.title,
                  e.ownerName,
                  (0, r.D5g)(i.tld, e.ownerLogin),
                ),
              );
            },
          })),
        b = (e, t, i) =>
          null === i
            ? '<a href="'.concat(e, '">').concat(t, "</a>")
            : '<a href="'.concat(e, '">').concat(t, "</a> — ").concat(i),
        g = a.V5.model({
          id: a.V5.string,
          albumId: a.V5.maybeNull(a.V5.number),
          type: a.V5.literal(r.GGO.TRACK),
          title: a.V5.string,
          path: a.V5.string,
          artistName: a.V5.maybeNull(a.V5.string),
          width: a.V5.optional(a.V5.string, "614"),
          height: a.V5.optional(a.V5.string, "244"),
          listenMessage: a.V5.maybeNull(a.V5.string),
        })
          .views((e) => {
            let t = {
              get iframeUri() {
                var i;
                let { location: t } = (0, a.yj)(e);
                return (0, r.r0f)({
                  tld: t.tld,
                  id: e.id,
                  albumId:
                    null !== (i = e.albumId) && void 0 !== i ? i : void 0,
                });
              },
              get entityUri() {
                let { location: t } = (0, a.yj)(e),
                  { config: i } = (0, a.dU)(e);
                return ""
                  .concat(i.iframe.entityBaseUrl.replace(r.MgS, t.tld))
                  .concat(e.path);
              },
              get iframeCode() {
                var n;
                return v({
                  width: e.width,
                  height: e.height,
                  iframeUri: t.iframeUri,
                  listenMessage:
                    null !== (n = e.listenMessage) && void 0 !== n ? n : "",
                });
              },
            };
            return t;
          })
          .actions((e) => ({
            setWidth(t) {
              e.width = t;
            },
            setHeight(t) {
              e.height = t;
            },
            setListenMessage(t) {
              e.listenMessage = t(b(e.entityUri, e.title, e.artistName));
            },
          })),
        C = a.V5.union(g, p, f, y),
        N = a.V5.model({ entity: a.V5.maybeNull(C), modal: n.KL }).actions(
          (e) => ({
            openModal(t) {
              (e.entity = u(t)), e.modal.open();
            },
            closeModal() {
              e.modal.close(), (e.entity = null);
            },
          }),
        );
      var k = i(65301),
        j = i(96233),
        I = i(37184),
        S = i(14386),
        A = i(91207),
        T = i(44729),
        P = i(33387),
        w = i(78372),
        E = i(82036),
        M = i(53569),
        L = i(81437);
      let R = RegExp("(px|%)$"),
        B = (e, t) =>
          R.test(e)
            ? e
            : 0 === e.trim().length
              ? "".concat(t, "px")
              : "".concat(Math.max(Number(e), t), "px");
      var V = i(29778),
        O = i(4347),
        D = i.n(O);
      let z = (e) => {
        let { closeToast: t } = e;
        return (0, k.jsx)(V.Yj, {
          closeToast: t,
          cover: (0, k.jsx)(E.Icon, {
            className: D().icon,
            size: "xs",
            variant: "chain",
          }),
          message: (0, k.jsx)(L.Caption, {
            className: D().message,
            variant: "div",
            type: "controls",
            size: "m",
            children: (0, k.jsx)(T.Z, {
              id: "notifications-info.html-code-copied",
            }),
          }),
        });
      };
      var U = i(34532),
        F = i.n(U);
      let W = (0, j.Pi)((e) => {
        let { entity: t } = e,
          { formatMessage: i } = (0, I.Z)(),
          { language: a } = (0, r.ZSk)(),
          { notify: n } = (0, r.d$W)();
        (0, A.useEffect)(() => {
          t.setListenMessage((e) =>
            i({ id: "share.iframe-listen" }, { html: e }),
          );
        }, [t, i]);
        let l = (0, P.W)((e) => {
            let {
              target: { value: i },
            } = e;
            t.setWidth(i);
          }),
          o = (0, P.W)((e) => {
            let {
              target: { value: i },
            } = e;
            !R.test(i) &&
              (0 === i.length || Number.isNaN(Number(i)) || 220 > Number(i)) &&
              t.setWidth(String(220));
          }),
          s = (0, P.W)((e) => {
            let {
              target: { value: i },
            } = e;
            t.setHeight(i);
          }),
          c = (0, P.W)((e) => {
            let {
              target: { value: i },
            } = e;
            !R.test(i) &&
              (0 === i.length || Number.isNaN(Number(i)) || 88 > Number(i)) &&
              t.setHeight(String(88));
          }),
          d = { width: B(t.width, 220), height: B(t.height, 88) },
          u = t.iframeUri.replace(m, a),
          _ = t.iframeCode.replace(m, a),
          v = (0, P.W)(async () => {
            await window.navigator.clipboard.writeText(_),
              n((0, k.jsx)(z, {}), { containerId: r.W$x.INFO });
          });
        return (0, k.jsxs)("div", {
          className: F().root,
          children: [
            (0, k.jsxs)("form", {
              className: F().controls,
              children: [
                (0, k.jsxs)("div", {
                  className: F().settings,
                  children: [
                    (0, k.jsx)(M.I, {
                      containerClassName: F().sizeInputContainer,
                      size: "xxxs",
                      value: t.width,
                      pattern: "^\\d+(px|%)?$",
                      min: 220,
                      onChange: l,
                      onBlur: o,
                    }),
                    (0, k.jsx)(E.Icon, { size: "xs", variant: "close" }),
                    (0, k.jsx)(M.I, {
                      containerClassName: F().sizeInputContainer,
                      size: "xxxs",
                      value: t.height,
                      pattern: "^\\d+(px|%)?$",
                      min: 88,
                      onChange: s,
                      onBlur: c,
                    }),
                  ],
                }),
                (0, k.jsx)(M.I, {
                  inputClassName: F().iframeCodeInput,
                  containerClassName: F().iframeCodeInputContainer,
                  type: "text",
                  size: "xxxs",
                  value: _,
                  disabled: !0,
                }),
                (0, k.jsx)(w.z, {
                  color: "primary",
                  className: F().copyButton,
                  size: "l",
                  radius: "xxxl",
                  onClick: v,
                  children: (0, k.jsx)(L.Caption, {
                    type: "text",
                    variant: "div",
                    size: "m",
                    weight: "medium",
                    children: (0, k.jsx)(T.Z, { id: "share.iframe-copy" }),
                  }),
                }),
              ],
            }),
            (0, k.jsx)("div", {
              className: F().iframeContainer,
              style: d,
              children: (0, k.jsx)("iframe", { className: F().iframe, src: u }),
            }),
          ],
        });
      });
      var Q = i(39163),
        G = i.n(Q);
      let Y = (0, j.Pi)(() => {
        let { shareIframe: e } = (0, r.oR4)(),
          { formatMessage: t } = (0, I.Z)();
        return e.entity
          ? (0, k.jsx)(S.u, {
              className: G().root,
              contentClassName: G().content,
              open: e.modal.isOpened,
              placement: "center",
              size: "fitContent",
              title: t({ id: "share.iframe-modal-title" }),
              labelClose: t({ id: "interface-actions.close" }),
              onClose: e.closeModal,
              overlayColor: "full",
              children: (0, k.jsx)(W, { entity: e.entity }),
            })
          : null;
      });
    },
    82973: function (e, t, i) {
      "use strict";
      i.d(t, {
        tU: function () {
          return ec;
        },
        uD: function () {
          return c;
        },
      });
      var a,
        n = i(58997),
        l = i(2685),
        r = i(3228),
        o = i(3154),
        s = i(91694);
      let c = l.V5.compose(
        l.V5.model({
          loadingState: l.V5.enumeration(Object.values(n.Gui)),
          meta: l.V5.maybeNull(o.le),
          similarTracks: l.V5.maybeNull(l.V5.array(o.le)),
          prevEntityId: l.V5.maybeNull(l.V5.union(l.V5.string, l.V5.number)),
          trackId: l.V5.maybeNull(l.V5.union(l.V5.string, l.V5.number)),
          albumId: l.V5.maybeNull(l.V5.number),
          isTrackPage: l.V5.optional(l.V5.boolean, !1),
          withAnimation: l.V5.boolean,
        }),
        s.KL,
      )
        .views((e) => ({
          get isLoading() {
            return e.loadingState === n.Gui.PENDING;
          },
          get isRejected() {
            return e.loadingState === n.Gui.REJECT;
          },
          get isResolved() {
            return e.loadingState === n.Gui.RESOLVE;
          },
          get shouldReloadMeta() {
            var t;
            let i = e.trackId && e.albumId && (0, r.i)(e.trackId, e.albumId);
            return (
              i ===
                (null === (t = e.meta) || void 0 === t ? void 0 : t.entityId) ||
              i === e.prevEntityId
            );
          },
          get isShimmerVisible() {
            return this.isLoading || this.isRejected;
          },
          get seeds() {
            var i;
            return [
              "track:".concat(
                null === (i = e.meta) || void 0 === i ? void 0 : i.id,
              ),
            ];
          },
        }))
        .actions((e) => ({
          setTrackInfo(t) {
            (0, l.fh)(e) &&
              ((e.meta = (0, o.Vt)(t.track)),
              (e.similarTracks = (0, l.pj)(
                t.similarTracks.map((e) => (0, o.Vt)(e)),
              )),
              (e.loadingState = n.Gui.RESOLVE));
          },
          setIsTrackPage(t) {
            e.isTrackPage = !!t;
          },
          setAnimationState(t) {
            e.withAnimation = t;
          },
          getData: (0, l.ls)(function* () {
            let { tracksResource: t, modelActionsLogger: i } = (0, l.dU)(e);
            if (
              !e.trackId ||
              e.loadingState === n.Gui.PENDING ||
              e.shouldReloadMeta
            )
              return null;
            try {
              e.loadingState = n.Gui.PENDING;
              let i = yield t.getFullInfoTrack({
                trackId: e.trackId,
                albumId: e.albumId,
              });
              if (!i) return (e.loadingState = n.Gui.REJECT), null;
              (e.meta = (0, o.Vt)(i.track)),
                (e.similarTracks = (0, l.pj)(
                  i.similarTracks.map((e) => (0, o.Vt)(e)),
                )),
                (e.prevEntityId = i.track.id),
                (e.loadingState = n.Gui.RESOLVE);
            } catch (t) {
              i.error(t), (e.loadingState = n.Gui.REJECT);
            }
            return null;
          }),
          open(t) {
            let { trackId: i, albumId: a } = t;
            i && a && ((e.trackId = i), (e.albumId = a), (e.isOpened = !0));
          },
          reset() {
            e.loadingState = n.Gui.IDLE;
          },
        }))
        .named("TrackPage");
      var d = i(65301),
        u = i(96233),
        m = i(91207),
        _ = i.t(m, 2),
        v = i(37184),
        p = i(14386),
        x = i(31015),
        y = i.n(x),
        h = i(78372),
        f = i(82036),
        b = i(29778),
        g = i(33387),
        C = i(81437);
      let N = (e) => (e ? e.replace("-", "_") : null);
      var k = i(59071),
        j = i.n(k),
        I = i(82607),
        S = i(45742),
        A = i.n(S);
      let T = (e) => {
          let { isShimmerActive: t } = e;
          return (0, d.jsxs)("div", {
            className: A().root,
            children: [
              (0, d.jsx)(I.Shimmer, { className: A().title, isActive: t }),
              (0, d.jsxs)("div", {
                className: A().coverBlock,
                children: [
                  (0, d.jsx)(I.Shimmer, { className: A().cover, isActive: t }),
                  (0, d.jsxs)("div", {
                    className: A().linkBlock,
                    children: [
                      (0, d.jsx)(I.Shimmer, {
                        className: A().link,
                        isActive: t,
                      }),
                      (0, d.jsx)(I.Shimmer, {
                        className: A().description,
                        isActive: t,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        P = (0, u.Pi)((e) => {
          var t;
          let { onModalClose: i } = e,
            { formatMessage: a } = (0, v.Z)(),
            {
              settings: { isMobile: l },
              track: r,
              fullscreenPlayer: o,
            } = (0, n.oR4)(),
            s = (0, g.W)(() => {
              o.modal.isOpened && o.modal.close(), l && i();
            }),
            c = null === (t = r.meta) || void 0 === t ? void 0 : t.mainAlbum,
            u = (0, m.useMemo)(() => {
              if (!c) return;
              let e = c.trackCount;
              return c.isAudiobook || c.isFairyTale
                ? a({ id: "entity-names.number-of-chapters" }, { counter: e })
                : c.isPodcast
                  ? a({ id: "entity-names.number-of-episodes" }, { counter: e })
                  : a({ id: "entity-names.number-of-tracks" }, { counter: e });
            }, [c, a]);
          return r.isShimmerVisible
            ? (0, d.jsx)(T, { isShimmerActive: r.isLoading })
            : c
              ? (0, d.jsxs)("div", {
                  className: j().root,
                  children: [
                    (0, d.jsx)(C.Heading, {
                      variant: "h2",
                      size: "m",
                      lineClamp: 1,
                      className: j().title,
                      children: a(
                        { id: "track-modal.album-heading" },
                        { type: N(c.type) },
                      ),
                    }),
                    (0, d.jsx)(b.ti, {
                      title: null == c ? void 0 : c.title,
                      coverUrl: null == c ? void 0 : c.coverUri,
                      description: u,
                      viewAllActionLink: null == c ? void 0 : c.url,
                      onViewAllAction: s,
                      titleLineClamp: 1,
                      available: c.isAvailable,
                      titleSize: "xs",
                      withDescription: !0,
                    }),
                  ],
                })
              : null;
        });
      var w = i(2319),
        E = i(80766),
        M = {
          5881: (e, t, i) => {
            function a() {
              for (var e, t, i = 0, a = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      a,
                      n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (a = e(t[i])) && (n && (n += " "), (n += a));
                      else for (i in t) t[i] && (n && (n += " "), (n += i));
                    }
                    return n;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            i.r(t), i.d(t, { clsx: () => a, default: () => n });
            let n = a;
          },
          8635: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              contentContainer: "JjlbHZ4FaP9EAcR_1DxF",
              contentContainer_block: "iOlzvyUREgDkthkrx7Sf",
              flexIcon: "WsKeF73pWotx9W1tWdYY",
              root: "cpeagBA1_PblpJn8Xgtv",
              root_withoutBorder: "qU2apWBO1yyEK0lZ3lPO",
              root_radius_xs: "MmZbSs387gu2qrJ1lDWd",
              root_radius_s: "mlcrraysn7mW6xrBXSBF",
              root_radius_m: "dgV08FKVLZKFsucuiryn",
              root_radius_l: "S97_5dtzhpxo_amtfYRg",
              root_radius_xl: "nNBJnDHRlyLTniWosJhk",
              root_radius_xxxl: "zIMibMuH7wcqUoW7KH1B",
              root_radius_round: "uwk3hfWzB2VT7kE13SQk",
              root_size: "IlG7b1K0AD7E7AMx6F5p",
              root_size_default: "C_QGmfTz6UFX93vfPt6Z",
              root_size_xxxs: "eQt33MLDiQ6DRSuLaYEp",
              root_size_xxs: "oR11LfCBVqMbUJiAgknd",
              root_size_xs: "j1jXIVckFgZECecFzZMe",
              root_size_s: "WtFdWDF44egSVM_YiMUX",
              root_size_m: "Y2uqxoU7xa_AZ8FUCVOW",
              root_size_l: "SGYcNjvjmMsXeEVGUV2Z",
              root_icon_left: "kc5CjvU5hT9KEj0iTt3C",
              root_icon_right: "et24Jf7pT_X9Fvc7TznR",
              root_primary: "fXlFz1qMkliFUWOkHo8T",
              root_primary_default: "_eTRQi5ADZCUvUKMZqJU",
              ripple: "spMT3NcRD9Yb0ntNaNct",
              root_primary_outline: "fCUSh2B0Ye9kEvceE8zc",
              root_primary_text: "qlPp6CSQQEMVZPqtqLiQ",
              root_primary_withHover: "KZF6_4K1p_Y_GMIAxaAn",
              root_primary_withHover_default: "rWukOKAJh5Ga7JuIp62L",
              root_primary_withHover_outline: "fdwWCJKgUqml5wNqrRcN",
              root_primary_withHover_text: "IgYbZLnYjW0nMahgpkus",
              root_secondary: "_T4p_w41oaq6L4sztSdw",
              root_secondary_default: "iJVAJMgccD4vj4E4o068",
              root_secondary_outline: "pnM3iSP9keZOELI2oohr",
              root_secondary_text: "UDMYhpDjiAFT3xUx268O",
              root_secondary_withHover: "qUbrkhZIOVrvM0roV1QF",
              root_secondary_withHover_default: "nHWc2sto1C6Gm0Dpw_l0",
              root_secondary_withHover_outline: "i5WuBm5mfG0mflk_1jH_",
              root_secondary_withHover_text: "HbaqudSqu7Q3mv3zMPGr",
              root_plus: "ixLRsIJ2FvXO2k04n_QY",
              root_plus_default: "yRHwHzEGfDgRXGzYJqw2",
              root_plus_outline: "e777irPFmyQFFrURLF_U",
              root_plus_text: "vRqDhvmt3gt8TFp45_Zw",
              root_plus_withHover: "TZif6q3I2RwBEYXwK_iA",
              root_plus_withHover_default: "k3DhvmzpnM_Fb9oFdE4q",
              root_plus_withHover_outline: "RiDWYwGIxqbrUPR699DM",
              root_plus_withHover_text: "hC_mMCzWjkTn2j9xZzGc",
              root_accent: "jqD2jMT6n7F0WKyqwMsn",
              root_accent_default: "bDp0r9MtoYECZ8ObMoCh",
              root_accent_outline: "rXNyGp8NBAw2MUjACZNj",
              root_accent_text: "hmV4ERaXWAJc4uPLZL30",
              root_accent_withHover: "uKuxXu1N4TP5cWaEK5Ke",
              root_accent_withHover_default: "t_hequUaUgAMhFuxizLb",
              root_accent_withHover_outline: "Oy9sPFTxNTo1_E29U4aF",
              root_accent_withHover_text: "LcKRSd3DLoh7k60Oqox8",
              root_withActiveSpinner: "nAGvO87rLs15SJgft6Hh",
              block: "BbCxxIjBGupN28bq2lSP",
              icon: "J9wTKytjOWG73QMoN5WP",
              icon_position_left: "elJfazUBui03YWZgHCbW",
              icon_position_right: "RBoEbyJKP5rEtLsXM1ji",
              icon_withButtonSize: "cE17_kCWJgx8kzQEkeVr",
              spinnerContainer: "STbBDGqYjUEcLuNvhu9w",
            };
          },
          560: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "BnN6sQIg6NahNBun6fkP",
              fade: "MM8MKXCw0gMkVvq7C1YS",
              fade_active: "MsLY_qiKofQrwKAr98EC",
              button: "Dp6n_Y0cfUyPQT1Z6uIm",
              text: "bfmUuyonXAK7HKYtDzUK",
            };
          },
          6161: (e, t, i) => {
            var a = i(810),
              n = Symbol.for("react.element"),
              l = Symbol.for("react.fragment"),
              r = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                l = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                r.call(t, a) && !s.hasOwnProperty(a) && (l[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === l[a] && (l[a] = t[a]);
              return {
                $$typeof: n,
                type: e,
                key: c,
                ref: d,
                props: l,
                _owner: o.current,
              };
            }
            (t.Fragment = l), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          4601: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useToggle = void 0);
            let a = i(810);
            t.useToggle = (e) => {
              let [t, i] = (0, a.useState)(e);
              (0, a.useEffect)(() => {
                i(e);
              }, [e]);
              let n = (0, a.useCallback)(() => {
                  i((e) => !e);
                }, []),
                l = (0, a.useCallback)(() => {
                  i(!0);
                }, []),
                r = (0, a.useCallback)(() => {
                  i(!1);
                }, []);
              return {
                state: t,
                toggle: n,
                setState: i,
                toggleTrue: l,
                toggleFalse: r,
              };
            };
          },
          666: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useTruncate = void 0);
            let a = i(352),
              n = i(810),
              l = i(4601);
            t.useTruncate = (e) => {
              let [t, i] = (0, n.useState)(0),
                {
                  state: r,
                  toggleTrue: o,
                  toggleFalse: s,
                } = (0, l.useToggle)(!1),
                c = (0, n.useMemo)(
                  () =>
                    (0, a.throttle)(() => {
                      let { offsetHeight: i, scrollHeight: a } =
                        (null == e ? void 0 : e.current) || {};
                      i && a && t < a ? o() : s();
                    }, 100),
                  [t, e, s, o],
                );
              return (
                (0, n.useEffect)(() => {
                  var a, n;
                  !t &&
                    (null === (a = e.current) || void 0 === a
                      ? void 0
                      : a.offsetHeight) &&
                    i(
                      null === (n = e.current) || void 0 === n
                        ? void 0
                        : n.offsetHeight,
                    );
                }, [t, e]),
                (0, n.useEffect)(
                  () => (
                    c(),
                    window.addEventListener("resize", c),
                    () => {
                      window.removeEventListener("resize", c);
                    }
                  ),
                  [c],
                ),
                { isTruncated: r }
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, i) {
                let a = null != i ? i : e.currentTarget,
                  n = document.createElement("span"),
                  l = Math.max(a.clientWidth, a.clientHeight),
                  r = l / 2,
                  o = a.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(o.width / 2)
                      : e.clientX - o.left,
                  c =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (n.style.width = "".concat(l, "px")),
                  (n.style.height = "".concat(l, "px")),
                  (n.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - r, "px")),
                  (n.style.top = "".concat(c - r, "px")),
                  n.classList.add(t);
                let d = a.getElementsByClassName(t)[0];
                d && d.remove(), a.insertBefore(n, a.firstChild);
              });
          },
          361: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = void 0),
              (t.getElementFromRefOrElement = (e) =>
                void 0 === e
                  ? void 0
                  : null === e || e instanceof HTMLElement
                    ? e
                    : null === e.current || e.current instanceof HTMLElement
                      ? e.current
                      : void 0);
          },
          8216: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = t.createRipple = void 0);
            var a = i(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return a.createRipple;
              },
            });
            var n = i(361);
            Object.defineProperty(t, "getElementFromRefOrElement", {
              enumerable: !0,
              get: function () {
                return n.getElementFromRefOrElement;
              },
            });
          },
          8119: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            let n = i(9541),
              l = i(810),
              r = i(5881),
              o = i(8216),
              s = a(i(8635)),
              c = (e) => {
                let {
                    forwardRef: t,
                    isBlock: i,
                    iconPosition: a = "left",
                    children: c,
                    className: d,
                    color: u = "secondary",
                    flexIcon: m,
                    icon: _,
                    spinner: v,
                    role: p,
                    onClick: x,
                    radius: y = "m",
                    size: h,
                    type: f = "button",
                    variant: b = "default",
                    withRipple: g = !0,
                    withHover: C = !0,
                    withBorder: N = !1,
                    disabled: k,
                    iconClassName: j,
                    contentContainerClassName: I,
                    ...S
                  } = e,
                  A = (0, l.useId)(),
                  T = !l.Children.toArray(c).filter(Boolean).length,
                  P = "left" === a,
                  w = null,
                  E = (0, l.isValidElement)(v);
                if (_) {
                  var M, L;
                  w = (0, l.cloneElement)(_, {
                    className: (0, r.clsx)(
                      s.default.icon,
                      {
                        [s.default["icon_position_".concat(a)]]: a && !T,
                        [s.default.icon_withButtonSize]: !(null ===
                          (M = _.props) || void 0 === M
                          ? void 0
                          : M.size),
                      },
                      null === (L = _.props) || void 0 === L
                        ? void 0
                        : L.className,
                      j,
                    ),
                    key: A,
                  });
                }
                let R = (0, l.useMemo)(
                    () =>
                      E
                        ? (0, n.jsx)("div", {
                            className: s.default.spinnerContainer,
                            children: v,
                          })
                        : null,
                    [E, v],
                  ),
                  B = (0, l.useCallback)(
                    (e) => {
                      E ||
                        (g && (0, o.createRipple)(e, s.default.ripple),
                        null == x || x(e));
                    },
                    [E, x, g],
                  );
                return (0, n.jsx)("button", {
                  ref: t,
                  className: (0, r.clsx)(
                    s.default.root,
                    s.default["root_".concat(u, "_").concat(b)],
                    s.default["root_radius_".concat(y)],
                    s.default.root_size,
                    {
                      [s.default["root_".concat(u, "_withHover_").concat(b)]]:
                        C && !k && !E,
                      [s.default["root_size_".concat(h)]]: h,
                      [s.default.root_withoutBorder]: !N,
                      [s.default.root_withActiveSpinner]: E,
                      [s.default.block]: i,
                      [s.default.flexIcon]: m,
                      [s.default.iconOnly]: T,
                      [s.default.root_icon_left]: _ && !T && P,
                      [s.default.root_icon_right]: _ && !T && !P,
                    },
                    d,
                  ),
                  type: f,
                  role: p,
                  onClick: B,
                  ...S,
                  disabled: k,
                  "aria-live": E ? "polite" : "off",
                  "aria-busy": E,
                  children:
                    _ || E
                      ? (0, n.jsxs)("span", {
                          className: (0, r.clsx)(
                            s.default.contentContainer,
                            { [s.default.contentContainer_block]: i },
                            I,
                          ),
                          children: [_ && P && w, !T && c, _ && !P && w, R],
                        })
                      : c,
                });
              };
            t.Button = (0, l.forwardRef)((e, t) =>
              (0, n.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          217: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CollapsableText = void 0);
            let n = i(9541),
              l = i(5881),
              r = i(810),
              o = i(666),
              s = i(8119),
              c = a(i(560));
            t.CollapsableText = (e) => {
              var t;
              let {
                  className: i,
                  children: a,
                  lineClamp: d,
                  moreText: u,
                  lessText: m,
                  buttonClassName: _,
                  withFade: v,
                  initialOpen: p = !1,
                  open: x,
                  onOpenChange: y,
                  ...h
                } = e,
                [f, b] = (0, r.useState)(p),
                g = (0, r.useRef)(null),
                { isTruncated: C } = (0, o.useTruncate)(g),
                N = null != x ? x : f,
                k = null != y ? y : b,
                j = (0, r.cloneElement)(a, {
                  ref: g,
                  lineClamp: (!N && d) || void 0,
                  className: (0, l.clsx)(
                    null === (t = a.props) || void 0 === t
                      ? void 0
                      : t.className,
                    c.default.text,
                  ),
                }),
                I = (0, r.useMemo)(
                  () =>
                    v
                      ? (0, n.jsx)("div", {
                          className: (0, l.clsx)(c.default.fade, {
                            [c.default.fade_active]: !N,
                          }),
                          children: j,
                        })
                      : j,
                  [N, j, v],
                ),
                S = (0, r.useCallback)(() => {
                  k(!N);
                }, [N, k]),
                A = N ? m : u;
              return (0, n.jsxs)("div", {
                className: (0, l.clsx)(c.default.root, i),
                ...h,
                children: [
                  I,
                  C &&
                    A &&
                    (0, n.jsx)(s.Button, {
                      variant: "text",
                      withRipple: !1,
                      onClick: S,
                      className: (0, l.clsx)(c.default.button, _),
                      color: "primary",
                      children: A,
                    }),
                ],
              });
            };
          },
          352: (e) => {
            e.exports = E;
          },
          810: (e) => {
            e.exports = _;
          },
        },
        L = {};
      function R(e) {
        var t = L[e];
        if (void 0 !== t) return t.exports;
        var i = (L[e] = { exports: {} });
        return M[e].call(i.exports, i, i.exports, R), i.exports;
      }
      (R.d = (e, t) => {
        for (var i in t)
          R.o(t, i) &&
            !R.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (R.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (R.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var B = {};
      Object.defineProperty(B, "X", { value: !0 }),
        (B.f = void 0),
        (a = R(217)),
        Object.defineProperty(B, "f", {
          enumerable: !0,
          get: function () {
            return a.CollapsableText;
          },
        });
      var V = B.f;
      B.X;
      var O = i(14076),
        D = i.n(O),
        z = i(9695),
        U = i(74593),
        F = i.n(U);
      let W = (e) => {
          let { isShimmerActive: t } = e;
          return (0, d.jsxs)("div", {
            className: F().root,
            children: [
              (0, d.jsx)(I.Shimmer, { className: F().title, isActive: t }),
              (0, d.jsx)(b.Yh, {
                className: (0, z.W)(F().lyrics, F().important),
                count: 4,
                isActive: t,
              }),
              (0, d.jsx)(I.Shimmer, { className: F().button, isActive: t }),
            ],
          });
        },
        Q = (0, u.Pi)((e) => {
          var t, i;
          let { track: a } = e,
            { formatMessage: l } = (0, v.Z)(),
            { notify: r } = (0, n.d$W)(),
            { track: s, trackLyrics: c } = (0, n.oR4)(),
            { state: u, setState: _, toggleFalse: p } = (0, w.O)(!1);
          s.trackId &&
            (null === (t = s.meta) || void 0 === t ? void 0 : t.hasLyrics) &&
            s.isResolved &&
            c.getLyrics(s.trackId),
            (0, m.useEffect)(
              () => () => {
                c.reset();
              },
              [c],
            ),
            (0, m.useEffect)(() => {
              c.shouldReloadLyrics || p();
            }, [p, c.shouldReloadLyrics]);
          let x = (0, m.useCallback)(() => {
            c.sendViews({
              trackId: String(null == a ? void 0 : a.id),
              albumId: String(null == a ? void 0 : a.albumId),
            });
          }, [null == a ? void 0 : a.albumId, null == a ? void 0 : a.id, c]);
          c.isRejected &&
            r(
              (0, d.jsx)(b.Q, {
                error: l({ id: "error-messages.error-during-action" }),
              }),
              { containerId: n.W$x.ERROR },
            );
          let y = (0, m.useCallback)(
            (e) => {
              _(e), e && x();
            },
            [x, _],
          );
          return c.isShimmerVisible || !c.lyrics
            ? (0, d.jsx)(W, { isShimmerActive: c.isLoading })
            : (0, d.jsxs)("div", {
                className: D().root,
                children: [
                  (0, d.jsx)(C.Heading, {
                    variant: "h2",
                    size: "m",
                    lineClamp: 1,
                    className: D().title,
                    children: l({ id: "entity-names.text" }),
                  }),
                  (0, d.jsx)(V, {
                    moreText: l({ id: "track-modal.read-more" }),
                    buttonClassName: D().button,
                    open: u,
                    onOpenChange: y,
                    lineClamp: 4,
                    withFade: !0,
                    children: (0, d.jsx)(C.Caption, {
                      variant: "div",
                      className: D().lyrics,
                      size: "l",
                      weight: "medium",
                      children: (0, d.jsx)(o.Zz, {
                        lyrics: c.lyrics,
                        authors: c.writersNames,
                        source:
                          null === (i = c.major) || void 0 === i
                            ? void 0
                            : i.prettyName,
                        isShimmerVisible: c.isShimmerVisible,
                        isShimmerActive: c.isLoading,
                      }),
                    }),
                  }),
                ],
              });
        });
      var G = i(19489),
        Y = i(9604),
        Z = i.n(Y);
      let q = (0, u.Pi)((e) => {
        let {
            tracks: t,
            contextId: i,
            isShimmerVisible: a,
            isShimmerActive: l,
            autoflowSeeds: r,
            shouldResetCarouselScroll: s,
          } = e,
          { formatMessage: c } = (0, v.Z)(),
          { from: u } = (0, n.MhG)({ contextId: i, contextType: G.A.Various }),
          m = (e, i) => ({
            contextData: {
              type: G.A.Various,
              meta: { id: e },
              from: u,
              overrideAutoflowSeeds: r,
            },
            queueParams: { index: i },
            loadContextMeta: !1,
            entitiesData: t.map(o.E5),
          });
        return (0, d.jsx)(b.ad, {
          className: Z().root,
          shimmer: (0, d.jsx)(b.DX, { variant: n.Lxt.PLAYLIST, isActive: l }),
          maxColumnsCount: b.IA.TWO,
          itemsCountPerColumn: 4,
          blockHeaderTitle: c({ id: "track-modal.similar-tracks" }),
          blockHeaderHeadingVariant: "h2",
          isShimmerVisible: a,
          isShimmerActive: l,
          carouselItemClassName: (0, z.W)(Z().item, Z().important),
          blockHeaderClassName: Z().title,
          carouselClassName: Z().tracksContainer,
          shouldResetCarouselScroll: s,
          children: t.map((e, t) =>
            (0, d.jsx)(
              o.O2,
              {
                track: e,
                playContextParams: m(e.entityId, t),
                withDislike: !1,
                withTrailer: !1,
              },
              e.id,
            ),
          ),
        });
      });
      var K = i(30106),
        H = i(9096),
        X = i(44729),
        J = i(26382),
        $ = i(50229),
        ee = i.n($);
      let et = (0, u.Pi)((e) => {
        let { track: t } = e,
          { shouldShowBuySubscriptionModal: i, showBuySubscriptionModal: a } =
            (0, n.vLf)(),
          { from: l, utmLink: r } = (0, n.MhG)({
            contextId: t.id,
            contextType: G.A.Various,
          }),
          {
            settings: { isMobile: s },
          } = (0, n.oR4)(),
          [c, u] = (0, m.useState)(!1),
          { isPlaying: _, togglePlay: v } = (0, n.qmq)({
            playContextParams: {
              contextData: {
                type: G.A.Various,
                meta: { id: t.entityId },
                from: l,
                utmLink: r,
              },
              loadContextMeta: !0,
            },
            entityId: t.entityId,
          }),
          p = (0, o.nD)({ track: t, callback: v }),
          x = (0, m.useCallback)(() => {
            if (i) {
              a();
              return;
            }
            p();
          }, [p, i, a]),
          y = (0, m.useMemo)(() => {
            let e = s ? "l" : "s",
              i = s ? "m" : "xxs";
            return (0, d.jsx)(b.JM, {
              withRipple: !0,
              buttonVariant: "default",
              radius: "xxxl",
              size: e,
              color: "primary",
              iconSize: i,
              isPlaying: _,
              onClick: x,
              disabled: !t.isAvailable,
              children: !s && (0, d.jsx)(X.Z, { id: "player-actions.listen" }),
            });
          }, [s, _, x, t.isAvailable]),
          h = (0, J.SB)(t),
          g = (0, m.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          C = s ? "l" : "s",
          N = s ? "m" : "xxs";
        return (0, d.jsxs)("div", {
          className: ee().root,
          children: [
            y,
            (0, d.jsx)(b.dJ, {
              isLiked: t.isLiked,
              onClick: h,
              variant: "default",
              size: C,
              iconSize: N,
              withRipple: !s,
              disabled: !t.isAvailable,
            }),
            (0, d.jsx)(o.hz, {
              track: t,
              open: c,
              onOpenChange: u,
              size: C,
              icon: (0, d.jsx)(f.Icon, { variant: "more", size: N }),
              className: (0, z.W)(ee().menuButton, {
                [ee().menuButton_active]: c,
              }),
              wrapperClassName: ee().menuWrapper,
              onClick: g,
              withTrailer: !1,
            }),
          ],
        });
      });
      var ei = i(32040),
        ea = i.n(ei),
        en = i(23533),
        el = i.n(en);
      let er = (e) => {
          let { isShimmerActive: t } = e;
          return (0, d.jsxs)("div", {
            className: el().root,
            children: [
              (0, d.jsx)(I.Shimmer, {
                className: el().entityName,
                isActive: t,
              }),
              (0, d.jsx)(I.Shimmer, { className: el().title, isActive: t }),
              (0, d.jsx)(b.Yh, {
                className: (0, z.W)(el().artists, el().important),
                shimmerClassName: el().artist,
                count: 3,
                minWidth: 10,
                maxWidth: 30,
                isActive: t,
              }),
              (0, d.jsxs)("div", {
                className: el().controls,
                children: [
                  (0, d.jsx)(I.Shimmer, {
                    className: el().playButton,
                    isActive: t,
                  }),
                  (0, d.jsx)(I.Shimmer, {
                    className: el().button,
                    isActive: t,
                  }),
                  (0, d.jsx)(I.Shimmer, {
                    className: el().button,
                    isActive: t,
                  }),
                  (0, d.jsx)(I.Shimmer, {
                    className: el().button,
                    isActive: t,
                  }),
                ],
              }),
            ],
          });
        },
        eo = (0, u.Pi)((e) => {
          let {
              track: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              isTrackPage: n,
            } = e,
            { formatMessage: l } = (0, v.Z)(),
            r = null == t ? void 0 : t.isExplicit,
            o = null == t ? void 0 : t.trackExplicitMark,
            s = (0, m.useMemo)(() => {
              if (r && o)
                return (0, d.jsx)(b.$i, {
                  className: (0, z.W)(ea().explicitMark, ea().important),
                  getDescriptionTexts: t.getDescriptionTexts,
                  iconSize: "xxs",
                  variant: o,
                });
            }, [o, r, null == t ? void 0 : t.getDescriptionTexts]);
          return i
            ? (0, d.jsx)(er, { isShimmerActive: a })
            : t
              ? (0, d.jsx)(K.LH, {
                  entityName: l(
                    { id: "entity-names.track-type" },
                    { type: N(t.type) },
                  ),
                  entityNameIcon: s,
                  controls: (0, d.jsx)(et, { track: t }),
                  meta: (0, d.jsx)(H.jO, {
                    className: (0, z.W)(ea().text, ea().important),
                    linkClassName: ea().link,
                    captionClassName: ea().artistCaption,
                    artists: t.artists,
                    variant: "breakWord",
                  }),
                  title: t.title,
                  version: t.version,
                  headingVariant: n ? "h1" : "div",
                  className: (0, z.W)(ea().root, ea().important),
                  metaClassName: (0, z.W)(ea().meta, ea().important),
                  contentClassName: (0, z.W)(ea().content, ea().important),
                })
              : null;
        }),
        es = (0, u.Pi)(() => {
          var e, t, i;
          let { formatMessage: a } = (0, v.Z)(),
            { notify: l } = (0, n.d$W)(),
            { track: r } = (0, n.oR4)(),
            s = (0, m.useCallback)(() => {
              r.setAnimationState(!0), r.close();
            }, [r]),
            c = (0, o.nD)({ track: r.meta, disclaimerRejectHandler: s });
          return (
            (0, m.useEffect)(() => {
              c();
            }, [c]),
            r.isRejected &&
              l(
                (0, d.jsx)(b.Q, {
                  error: a({ id: "error-messages.error-during-action" }),
                }),
                { containerId: n.W$x.ERROR },
              ),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsxs)("header", {
                  className: y().header,
                  children: [
                    (0, d.jsx)(h.z, {
                      radius: "round",
                      color: "secondary",
                      size: "xxs",
                      icon: (0, d.jsx)(f.Icon, {
                        variant: "close",
                        size: "xxs",
                      }),
                      className: y().closeButton,
                      onClick: s,
                      "aria-label": a({ id: "interface-actions.close" }),
                    }),
                    (0, d.jsx)(eo, {
                      track: r.meta,
                      isShimmerVisible: r.isShimmerVisible,
                      isShimmerActive: r.isLoading,
                      isTrackPage: r.isTrackPage,
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  className: y().content,
                  children: [
                    (0, d.jsx)(P, { onModalClose: s }),
                    (null === (e = r.meta) || void 0 === e
                      ? void 0
                      : e.hasLyrics) && (0, d.jsx)(Q, { track: r.meta }),
                    r.similarTracks &&
                      r.similarTracks.length > 0 &&
                      (null === (t = r.meta) || void 0 === t
                        ? void 0
                        : t.isTrackMusic) &&
                      (0, d.jsx)(q, {
                        tracks: r.similarTracks,
                        contextId:
                          null === (i = r.meta) || void 0 === i
                            ? void 0
                            : i.entityId,
                        isShimmerVisible: r.isShimmerVisible,
                        isShimmerActive: r.isLoading,
                        autoflowSeeds: r.seeds,
                        shouldResetCarouselScroll: r.shouldReloadMeta,
                      }),
                  ],
                }),
              ],
            })
          );
        }),
        ec = (0, u.Pi)(() => {
          let { formatMessage: e } = (0, v.Z)(),
            { contentRef: t } = (0, n.$Y6)(),
            {
              track: i,
              fullscreenPlayer: a,
              settings: { isMobile: l },
            } = (0, n.oR4)();
          i.trackId && i.albumId && i.getData(),
            (0, m.useEffect)(
              () => () => {
                i.reset();
              },
              [i],
            ),
            (0, m.useEffect)(() => {
              i.isOpened && i.setAnimationState(!1);
            }, [i]);
          let r = (0, m.useCallback)(
            (e) => {
              var t;
              null === (t = i.onOpenChange) || void 0 === t || t.call(i, e);
            },
            [i],
          );
          return (0, d.jsx)(p.u, {
            size: "fitContent",
            placement: l ? "default" : "right",
            open: i.isOpened,
            onOpenChange: r,
            className: y().root,
            contentClassName: y().modalContent,
            portalNode: l || a.modal.isOpened ? null : t,
            withOverlay: !1,
            showHeader: !1,
            closeOnOutsidePress: !1,
            labelClose: e({ id: "interface-actions.close" }),
            withAnimation: i.withAnimation,
            lockScroll: l,
            children: (0, d.jsx)(es, {}),
          });
        });
    },
    73192: function (e, t, i) {
      "use strict";
      i.d(t, {
        bL: function () {
          return K;
        },
        Z6: function () {
          return x;
        },
        Le: function () {
          return l;
        },
        v0: function () {
          return d;
        },
      }),
        ((n = l || (l = {})).INFO = "INFO"),
        (n.SUCCESS = "SUCCESS");
      var a,
        n,
        l,
        r,
        o = i(91207),
        s = i(58997);
      let c = { INVITE_ID: "invite_id", UTM_MEDIUM: "utm_medium" },
        d = () => {
          let { user: e, experiments: t } = (0, s.oR4)(),
            i = (0, s.m5R)(),
            { inviteIdSearchParam: a, hasNecessarySearchParams: n } = (0,
            o.useMemo)(() => {
              let e = new URL(window.location.href).searchParams,
                t = e.get(c.INVITE_ID),
                i = !!(t && "copy_link" === e.get(c.UTM_MEDIUM));
              return { inviteIdSearchParam: t, hasNecessarySearchParams: i };
            }, []),
            l = (0, o.useCallback)(() => {
              let e = new URL(window.location.href),
                t = e.searchParams;
              t.delete(c.INVITE_ID),
                t.delete(c.UTM_MEDIUM),
                (e.search = t.toString()),
                i(e.toString());
            }, [i]);
          return {
            inviteId: a,
            shouldShowFamilyInvite: !!(
              !e.hasPlus &&
              n &&
              t.checkExperiment(s.peG.WebNextFamilyInvite, "on")
            ),
            clear: l,
          };
        };
      var u = i(2685),
        m = i(49430),
        _ = i(91694);
      let v = (e) => {
        let { name: t, avatarUri: i } = e;
        return (0, u.pj)({ name: t, avatarUri: i });
      };
      ((a = r || (r = {})).SUBSCRIPTION_IS_NOT_AVAILABLE =
        "SUBSCRIPTION_IS_NOT_AVAILABLE"),
        (a.INVITATION_IS_INVALID = "INVITATION_IS_INVALID"),
        (a.UNKNOWN = "UNKNOWN");
      let p = u.V5.model("FamilyInviteInfoModel", {
          name: u.V5.string,
          avatarUri: u.V5.string,
        }),
        x = u.V5.model("FamilyInviteModel", {
          info: u.V5.model({
            loadingState: u.V5.enumeration(Object.values(s.Gui)),
            data: u.V5.maybeNull(p),
          }),
          acceptanceLoadingState: u.V5.enumeration(Object.values(s.Gui)),
          isSuccess: u.V5.maybe(u.V5.boolean),
          modal: _.KL,
          step: u.V5.enumeration("Step", Object.values(l)),
          inviteId: u.V5.maybeNull(u.V5.string),
          error: u.V5.maybeNull(u.V5.enumeration(Object.values(r))),
        })
          .views((e) => ({
            get hasError() {
              return !!e.error;
            },
            get isInfoShimmerVisible() {
              return (
                e.info.loadingState === s.Gui.IDLE ||
                e.info.loadingState === s.Gui.PENDING
              );
            },
            get isInfoShimmerActive() {
              return e.info.loadingState === s.Gui.PENDING;
            },
            get isAcceptanceActive() {
              return e.acceptanceLoadingState === s.Gui.PENDING;
            },
          }))
          .actions((e) => {
            let t = {
              start(i) {
                t.setInviteId(i), e.modal.open(), t.getInviteInfo();
              },
              retry: (0, u.ls)(function* () {
                t.setError(null),
                  t.toggleStepInfo(),
                  e.info.loadingState !== s.Gui.RESOLVE &&
                    (yield t.getInviteInfo());
              }),
              getInviteInfo: (0, u.ls)(function* () {
                let { familyResource: i, modelActionsLogger: a } = (0, u.dU)(e);
                if (e.inviteId && e.info.loadingState !== s.Gui.PENDING)
                  try {
                    e.info.loadingState = s.Gui.PENDING;
                    let a = { inviteId: e.inviteId },
                      n = yield i.getInviteInfo(a);
                    if (!n.hasPlus) {
                      t.setError(r.SUBSCRIPTION_IS_NOT_AVAILABLE),
                        (e.info.loadingState = s.Gui.RESOLVE);
                      return;
                    }
                    (e.info.data = v(n)), (e.info.loadingState = s.Gui.RESOLVE);
                  } catch (i) {
                    if (
                      ((e.info.loadingState = s.Gui.REJECT),
                      a.error(i),
                      i instanceof m.du && i.statusCode === m.CN.BAD_REQUEST)
                    ) {
                      t.setError(r.INVITATION_IS_INVALID);
                      return;
                    }
                    t.setError(r.UNKNOWN);
                  }
              }),
              acceptInvite: (0, u.ls)(function* () {
                let { familyResource: i, modelActionsLogger: a } = (0, u.dU)(e);
                if (e.inviteId && e.acceptanceLoadingState !== s.Gui.PENDING)
                  try {
                    e.acceptanceLoadingState = s.Gui.PENDING;
                    let a = { inviteId: e.inviteId };
                    yield i.acceptInvite(a),
                      (e.acceptanceLoadingState = s.Gui.RESOLVE),
                      t.toggleStateSuccessTrue();
                  } catch (i) {
                    if (
                      ((e.acceptanceLoadingState = s.Gui.REJECT),
                      a.error(i),
                      i instanceof m.du && i.statusCode === m.CN.BAD_REQUEST)
                    ) {
                      t.setError(r.INVITATION_IS_INVALID);
                      return;
                    }
                    t.setError(r.UNKNOWN);
                  }
              }),
              toggleStepInfo() {
                e.step = l.INFO;
              },
              toggleStepSuccess() {
                e.step = l.SUCCESS;
              },
              setError(t) {
                e.error = t;
              },
              setInviteId(t) {
                e.inviteId = t;
              },
              toggleStateSuccessTrue() {
                t.toggleStepSuccess(), (e.isSuccess = !0);
              },
              reset() {
                (e.acceptanceLoadingState = s.Gui.IDLE),
                  (e.error = null),
                  (e.info.loadingState = s.Gui.IDLE),
                  (e.info.data = null),
                  (e.inviteId = null),
                  (e.step = l.INFO),
                  (e.isSuccess = !1);
              },
            };
            return t;
          });
      var y = i(65301),
        h = i(96233),
        f = i(55975),
        b = i(29778);
      let g = () => {
        let {
          familyInvite: { modal: e, isSuccess: t, reset: i },
        } = (0, s.oR4)();
        return (0, o.useCallback)(() => {
          if ((e.close(), t)) {
            window.location.reload();
            return;
          }
          i();
        }, [e, t, i]);
      };
      var C = i(9695),
        N = i(93422),
        k = i(52990),
        j = i.n(k),
        I = i(37184),
        S = i(44729),
        A = i(81437);
      let T = (0, h.Pi)(() => {
          let { formatMessage: e } = (0, I.Z)(),
            {
              settings: { isMobile: t },
            } = (0, s.oR4)(),
            i = g();
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                className: b.GR.text,
                children: [
                  (0, y.jsx)(A.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, f.BA)(
                      f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.invitation-error-title",
                    }),
                  }),
                  (0, y.jsx)(A.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, f.BA)(
                      f.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.invitation-error-description",
                    }),
                  }),
                ],
              }),
              (0, y.jsx)("div", {
                className: b.GR.buttons,
                children: (0, y.jsx)(b.I7, {
                  color: "primary",
                  isMobile: t,
                  text: e({ id: "interface-actions.confirm" }),
                  onClick: i,
                  ...(0, f.BA)(
                    f.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM,
                  ),
                }),
              }),
            ],
          });
        }),
        P = (0, h.Pi)(() => {
          let { formatMessage: e } = (0, I.Z)(),
            {
              settings: { isMobile: t },
              paywall: { modal: i },
            } = (0, s.oR4)(),
            a = g(),
            n = (0, o.useCallback)(() => {
              a(), i.open();
            }, [a, i]);
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                className: b.GR.text,
                children: [
                  (0, y.jsx)(A.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, f.BA)(
                      f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.subscription-error-title",
                    }),
                  }),
                  (0, y.jsx)(A.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, f.BA)(
                      f.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.subscription-error-description",
                    }),
                  }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: b.GR.buttons,
                children: [
                  (0, y.jsx)(b.I7, {
                    color: "primary",
                    isMobile: t,
                    text: e({ id: "family.about1" }),
                    onClick: n,
                    ...(0, f.BA)(
                      f.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT,
                    ),
                  }),
                  (0, y.jsx)(b.I7, {
                    color: "secondary",
                    isMobile: t,
                    text: (0, y.jsx)(S.Z, { id: "family.later" }),
                    onClick: a,
                    ...(0, f.BA)(
                      f.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER,
                    ),
                  }),
                ],
              }),
            ],
          });
        }),
        w = (0, h.Pi)(() => {
          let { formatMessage: e } = (0, I.Z)(),
            {
              familyInvite: { retry: t },
            } = (0, s.oR4)();
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                className: b.GR.text,
                children: [
                  (0, y.jsx)(A.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, f.BA)(
                      f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.unknown-error-title",
                    }),
                  }),
                  (0, y.jsx)(A.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, f.BA)(
                      f.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.unknown-error-description",
                    }),
                  }),
                ],
              }),
              (0, y.jsx)("div", {
                className: b.GR.buttons,
                children: (0, y.jsx)(b.I7, {
                  color: "primary",
                  text: e({ id: "family.retry" }),
                  onClick: t,
                  ...(0, f.BA)(
                    f.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY,
                  ),
                }),
              }),
            ],
          });
        }),
        E = {
          [r.INVITATION_IS_INVALID]: (0, y.jsx)(T, {}),
          [r.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, y.jsx)(P, {}),
          [r.UNKNOWN]: (0, y.jsx)(w, {}),
        },
        M = (0, h.Pi)(() => {
          let {
              familyInvite: { error: e },
              settings: { isMobile: t },
            } = (0, s.oR4)(),
            i = t || e === r.SUBSCRIPTION_IS_NOT_AVAILABLE;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: (0, C.W)(
                  b.GR.growContainer,
                  b.GR.growContainer_withoutPaddings,
                ),
                children: (0, y.jsx)(N.Image, {
                  className: (0, C.W)(j().image, { [j().image_small]: i }),
                  src: "https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig",
                  srcSet:
                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x",
                  fit: "contain",
                  "aria-hidden": !0,
                }),
              }),
              E[null != e ? e : r.UNKNOWN],
            ],
          });
        });
      var L = i(99678),
        R = i(82036),
        B = i(43507),
        V = i(14509),
        O = i.n(V);
      let D = (e) => {
        let { avatarSrc: t, name: i, isMobile: a } = e;
        return (0, y.jsxs)("div", {
          className: (0, C.W)(O().root, { [O().root_mobile]: a }),
          children: [
            (0, y.jsx)(B.tB, {
              className: (0, C.W)(O().icon, O().important),
              avatarSrc: t,
              hasPlus: !0,
              ...(0, f.BA)(
                f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR,
              ),
            }),
            (0, y.jsx)(A.Caption, {
              className: O().name,
              variant: "div",
              size: "m",
              ...(0, f.BA)(
                f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME,
              ),
              children: i,
            }),
          ],
        });
      };
      var z = i(82607);
      let U = (e) => {
        let { isActive: t, isMobile: i } = e;
        return (0, y.jsxs)("div", {
          className: (0, C.W)(O().root, { [O().root_mobile]: i }),
          children: [
            (0, y.jsx)(z.Shimmer, {
              className: O().iconShimmer,
              isActive: t,
              radius: "round",
            }),
            (0, y.jsx)(z.Shimmer, {
              className: O().nameShimmer,
              isActive: t,
              radius: "xs",
            }),
          ],
        });
      };
      var F = i(27952),
        W = i.n(F);
      let Q = (0, h.Pi)(() => {
        let {
            user: e,
            location: t,
            settings: { isMobile: i },
            familyInvite: {
              isInfoShimmerVisible: a,
              isInfoShimmerActive: n,
              isAcceptanceActive: l,
              info: { data: r },
              acceptInvite: c,
            },
          } = (0, s.oR4)(),
          { name: d = "", avatarUri: u = "" } = r || {},
          m = (0, s.uK4)(),
          _ = (0, L.useRouter)(),
          v = m.get(s.xit),
          p = g(),
          x = (0, o.useCallback)(() => {
            if (!e.isAuthorized) {
              v.authorizationUrl && _.push(v.authorizationUrl);
              return;
            }
            c();
          }, [v.authorizationUrl, _, e.isAuthorized, c]),
          h = (0, o.useMemo)(
            () =>
              a
                ? (0, y.jsx)(U, { isActive: n, isMobile: i })
                : (0, y.jsx)(D, { avatarSrc: u, name: d, isMobile: i }),
            [a, n, i, u, d],
          ),
          N = (0, o.useMemo)(
            () =>
              a || l
                ? (0, y.jsx)(b.ZD, { isActive: n || l, isMobile: i })
                : (0, y.jsx)(b.I7, {
                    color: "plus",
                    isMobile: i,
                    text: (0, y.jsx)(S.Z, { id: "family.accept" }),
                    onClick: x,
                    ...(0, f.BA)(
                      f.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT,
                    ),
                  }),
            [a, n, l, i, x],
          );
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)("div", {
              className: (0, C.W)(
                b.GR.growContainer,
                W().growContainer,
                W().important,
              ),
              children: h,
            }),
            (0, y.jsxs)("div", {
              className: b.GR.text,
              children: [
                (0, y.jsx)(A.Heading, {
                  variant: "h1",
                  size: "xl",
                  className: b.GR.title,
                  ...(0, f.BA)(
                    f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE,
                  ),
                  children: (0, y.jsx)(S.Z, {
                    id: "family.info-title",
                    values: { br: "\n" },
                  }),
                }),
                (0, y.jsx)(A.Caption, {
                  variant: "span",
                  size: "m",
                  className: b.GR.description,
                  ...(0, f.BA)(
                    f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION,
                  ),
                  children: (0, y.jsx)(S.Z, {
                    id: "family.info-description",
                    values: { br: "\n" },
                  }),
                }),
                (0, y.jsx)(b.rU, {
                  target: "_blank",
                  href: "https://yandex.".concat(
                    t.tld,
                    "/legal/yandex_plus_conditions/",
                  ),
                  icon: (0, y.jsx)(R.Icon, {
                    variant: "arrowRight",
                    size: "xxxs",
                    className: b.GR.linkArrow,
                  }),
                  iconPosition: "right",
                  className: b.GR.link,
                  containerClassName: b.GR.linkContainer,
                  ...(0, f.BA)(
                    f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS,
                  ),
                  children: (0, y.jsx)(A.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: (0, y.jsx)(S.Z, { id: "family.terms" }),
                  }),
                }),
              ],
            }),
            (0, y.jsxs)("div", {
              className: b.GR.buttons,
              children: [
                N,
                (0, y.jsx)(b.I7, {
                  color: "secondary",
                  isMobile: i,
                  text: (0, y.jsx)(S.Z, { id: "family.reject" }),
                  onClick: p,
                  ...(0, f.BA)(
                    f.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT,
                  ),
                }),
              ],
            }),
          ],
        });
      });
      var G = i(10375),
        Y = i.n(G);
      let Z = (0, h.Pi)(() => {
          let {
              location: e,
              settings: { isMobile: t },
            } = (0, s.oR4)(),
            i = g();
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: b.GR.growContainer,
                children: (0, y.jsx)(N.Image, {
                  className: (0, C.W)(Y().image, { [Y().image_mobile]: t }),
                  src: "https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig",
                  srcSet:
                    "https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x",
                  fit: "contain",
                  "aria-hidden": !0,
                }),
              }),
              (0, y.jsxs)("div", {
                className: b.GR.text,
                children: [
                  (0, y.jsx)(A.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, f.BA)(
                      f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, { id: "family.success-title" }),
                  }),
                  (0, y.jsx)(A.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, f.BA)(
                      f.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.success-description",
                      values: { br: "\n" },
                    }),
                  }),
                  (0, y.jsx)(b.rU, {
                    target: "_blank",
                    href: "https://plus.yandex.".concat(e.tld, "/"),
                    icon: (0, y.jsx)(R.Icon, {
                      variant: "arrowRight",
                      size: "xxxs",
                      className: b.GR.linkArrow,
                    }),
                    iconPosition: "right",
                    className: b.GR.link,
                    containerClassName: b.GR.linkContainer,
                    ...(0, f.BA)(
                      f.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT,
                    ),
                    children: (0, y.jsx)(A.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, y.jsx)(S.Z, { id: "family.about" }),
                    }),
                  }),
                ],
              }),
              (0, y.jsx)("div", {
                className: b.GR.buttons,
                children: (0, y.jsx)(b.I7, {
                  color: "plus",
                  isMobile: t,
                  text: (0, y.jsx)(S.Z, { id: "family.go-to-music" }),
                  onClick: i,
                  ...(0, f.BA)(
                    f.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH,
                  ),
                }),
              }),
            ],
          });
        }),
        q = { [l.INFO]: (0, y.jsx)(Q, {}), [l.SUCCESS]: (0, y.jsx)(Z, {}) },
        K = (0, h.Pi)(() => {
          let {
              familyInvite: { modal: e, step: t, hasError: i },
            } = (0, s.oR4)(),
            a = g(),
            n = (0, o.useCallback)(
              (t) => {
                t || a(), e.onOpenChange(t);
              },
              [a, e],
            ),
            l = (0, o.useMemo)(() => (i ? (0, y.jsx)(M, {}) : q[t]), [i, t]);
          return (0, y.jsx)(b.bf, {
            open: e.isOpened,
            hasError: i,
            onOpenChange: n,
            onClose: a,
            ...(0, f.BA)(f.QM.familyInvite.FAMILY_INVITE_MODAL),
            children: l,
          });
        });
    },
    84597: function (e, t, i) {
      "use strict";
      i.d(t, {
        wp: function () {
          return tS;
        },
        Ko: function () {
          return f;
        },
        Lc: function () {
          return R;
        },
      });
      var a,
        n,
        l,
        r,
        o,
        s,
        c,
        d,
        u,
        m,
        _,
        v,
        p,
        x,
        y,
        h = i(2685);
      let f = h.V5.model("Navbar", {
        isSentOpenedAnalytics: h.V5.boolean,
      }).actions((e) => ({
        setIsSentOpenedAnalytics(t) {
          e.isSentOpenedAnalytics = t;
        },
      }));
      var b = i(27980),
        g = i(48896),
        C = i(9096),
        N = i(50684),
        k = i(90741);
      let j = h.V5.model("PinAlbumItemModel", {
          type: h.V5.literal(b.Q.ALBUM_ITEM),
          data: g.KX,
        }),
        I = h.V5.model("PinArtistItemModel", {
          type: h.V5.literal(b.Q.ARTIST_ITEM),
          data: C.Go,
        }),
        S = h.V5.model("PinPlaylistItemModel", {
          type: h.V5.literal(b.Q.PLAYLIST_ITEM),
          data: N.Cd,
        }),
        A = h.V5.model("PinVibeItemModel", {
          type: h.V5.literal(b.Q.WAVE_ITEM),
          data: k.KW,
        }),
        T = h.V5.union(j, I, S, A);
      var P = i(58997);
      let w = (e) => "object" == typeof e && e && "type" in e;
      var E = i(54709),
        M = i(81706);
      let L = (e) => {
          switch (e.type) {
            case b.Q.WAVE_ITEM:
              return (0, h.pj)({
                type: b.Q.WAVE_ITEM,
                data: (0, k.FF)(e.data),
              });
            case b.Q.PLAYLIST_ITEM:
              return (0, h.pj)({
                type: b.Q.PLAYLIST_ITEM,
                data: (0, M.RE)({ playlist: e.data }),
              });
            case b.Q.ARTIST_ITEM:
              return (0, h.pj)({
                type: b.Q.ARTIST_ITEM,
                data: (0, C.tR)({ artist: e.data }),
              });
            case b.Q.ALBUM_ITEM:
              return (0, h.pj)({
                type: b.Q.ALBUM_ITEM,
                data: (0, E.cO)({ album: e.data }),
              });
          }
        },
        R = h.V5.model("Pins", {
          loadingState: h.V5.enumeration(Object.values(P.Gui)),
          items: h.V5.maybeNull(h.V5.array(T)),
          index: h.V5.map(h.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var i;
                (e.items = (0, h.pj)(
                  null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var i, a, n, l;
                if (
                  (null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.length) === 30
                ) {
                  let t =
                    null === (l = e.items) || void 0 === l ? void 0 : l.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (a = e.items) || void 0 === a || a.unshift(L(t));
                let r =
                  null === (n = e.items) || void 0 === n ? void 0 : n.at(0);
                r && e.index.set(r.data.pinId, !0);
              },
              getData: (0, h.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: i } = (0, h.dU)(e);
                if (e.loadingState !== P.Gui.PENDING)
                  try {
                    var a;
                    e.loadingState = P.Gui.PENDING;
                    let i = yield t.getPins();
                    (e.items = (0, h.pj)(i.pins.map(L))),
                      null === (a = e.items) ||
                        void 0 === a ||
                        a.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = P.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = P.Gui.REJECT), i.error(t);
                  }
              }),
              toggleAlbumPin: (0, h.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, h.dU)(e);
                if (e.loadingState !== P.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinAlbum(i)), t.deletePin(a), l;
                    return (l = yield n.pinAlbum(i)), w(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, h.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, h.dU)(e);
                if (e.loadingState !== P.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinArtist(i)), t.deletePin(a), l;
                    return (l = yield n.pinArtist(i)), w(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, h.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, h.dU)(e);
                if (e.loadingState !== P.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinPlaylist(i)), t.deletePin(a), l;
                    return (l = yield n.pinPlaylist(i)), w(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, h.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, h.dU)(e);
                if (e.loadingState !== P.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinWave(i)), t.deletePin(a), l;
                    return (l = yield n.pinWave(i)), w(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
      var B = i(65301),
        V = i(9695),
        O = i(96233),
        D = i(91207),
        z = i.t(D, 2),
        U = i(55975),
        F = i(3283);
      let W = () => {
        let e = (0, P.z$f)(),
          { hash: t } = (0, P.RQn)(),
          i = (0, P.wLl)(),
          {
            settings: { isMobile: a },
          } = (0, P.oR4)();
        return (0, D.useCallback)(
          (n) => {
            if (!e) return;
            let l = (0, P.KOr)({
              params: {
                hash: t,
                pageId: F.qU.Sidebar,
                sidebarSize: n || a ? F.YR.Small : F.YR.Medium,
              },
              logger: i,
              context: W.name,
            });
            l && (0, F.jZ)(e.evgenInstance, l);
          },
          [e, t, a, i],
        );
      };
      var Q = i(66591);
      let G = (e) => {
          {
            let t = (null == e ? void 0 : e.clientWidth) ? 1920 : 1024;
            return window.innerWidth < t;
          }
        },
        Y = () => {
          let { sideBannerRef: e } = (0, P.$Y6)(),
            [t, i] = (0, D.useState)(() => G(e)),
            a = (0, D.useMemo)(
              () =>
                (0, Q.Z)(
                  () => {
                    i(G(e));
                  },
                  100,
                  { trailing: !1 },
                ),
              [i, e],
            );
          return (
            (0, D.useEffect)(
              () => (
                window.addEventListener("resize", a),
                a(),
                () => {
                  window.removeEventListener("resize", a);
                }
              ),
              [a],
            ),
            t
          );
        };
      var Z = i(5793),
        q = i.n(Z),
        K = i(37184),
        H = i(78372),
        X = i(82036),
        J = i(73057),
        $ = {
          5881: (e, t, i) => {
            function a() {
              for (var e, t, i = 0, a = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      a,
                      n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (a = e(t[i])) && (n && (n += " "), (n += a));
                      else for (i in t) t[i] && (n && (n += " "), (n += i));
                    }
                    return n;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            i.r(t), i.d(t, { clsx: () => a, default: () => n });
            let n = a;
          },
          2329: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          9948: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          8850: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "Bp1d3U6W8Nrbqi3MRQS_",
              root_direction_vertical: "hYfgO_Y8c4rrQsZJWTDZ",
              ripple: "UiZ4QyGEVzfvZ3QfQqqA",
              root_direction_horizontal: "X_Lr5kqrhzMO6kX8v92s",
              root_collapsed: "Q3gGGaIXiJ_oQTiVZBfl",
              root_variant_main: "H4trq_Zx2d9qOnQgxmxr",
              root_animate: "Kr9rXeXGlqHee2euqH0u",
              animation_width: "k8zKIZRDy6LmoaIcEpo8",
              item: "A4bDkbQHkwWNGqxO9qhW",
              item_selected: "mAd9pgMkWVX5ktCgYINQ",
              item_direction_vertical: "Xx9Tg5ugzg1pkf8Zh421",
              item_direction_horizontal: "fQVXazc9HwT3NQ8dywCh",
              iconContainer: "zpkgiiHgDpbBThy6gavq",
              textContainer: "ZrkG6gNYcr4h3hfkhyT1",
              textContainer_selected: "xENlRAFvRskKnt8LUObC",
              textContainer_direction_horizontal: "xE5fIMRnjd8oSm5BOhpI",
            };
          },
          6161: (e, t, i) => {
            var a = i(810),
              n = Symbol.for("react.element"),
              l = Symbol.for("react.fragment"),
              r = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                l = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                r.call(t, a) && !s.hasOwnProperty(a) && (l[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === l[a] && (l[a] = t[a]);
              return {
                $$typeof: n,
                type: e,
                key: c,
                ref: d,
                props: l,
                _owner: o.current,
              };
            }
            (t.Fragment = l), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, i) {
                let a = null != i ? i : e.currentTarget,
                  n = document.createElement("span"),
                  l = Math.max(a.clientWidth, a.clientHeight),
                  r = l / 2,
                  o = a.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(o.width / 2)
                      : e.clientX - o.left,
                  c =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (n.style.width = "".concat(l, "px")),
                  (n.style.height = "".concat(l, "px")),
                  (n.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - r, "px")),
                  (n.style.top = "".concat(c - r, "px")),
                  n.classList.add(t);
                let d = a.getElementsByClassName(t)[0];
                d && d.remove(), a.insertBefore(n, a.firstChild);
              });
          },
          361: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = void 0),
              (t.getElementFromRefOrElement = (e) =>
                void 0 === e
                  ? void 0
                  : null === e || e instanceof HTMLElement
                    ? e
                    : null === e.current || e.current instanceof HTMLElement
                      ? e.current
                      : void 0);
          },
          8216: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = t.createRipple = void 0);
            var a = i(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return a.createRipple;
              },
            });
            var n = i(361);
            Object.defineProperty(t, "getElementFromRefOrElement", {
              enumerable: !0,
              get: function () {
                return n.getElementFromRefOrElement;
              },
            });
          },
          19: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Navigation = void 0);
            let n = i(9541),
              l = i(5881),
              r = i(7786),
              o = a(i(2329));
            t.Navigation = function (e) {
              let {
                className: t,
                children: i,
                collapsed: a = !1,
                direction: s = "vertical",
                ...c
              } = e;
              return (0, n.jsx)(r.NavigationProvider, {
                collapsed: a,
                direction: s,
                children: (0, n.jsx)("nav", {
                  className: (0, l.clsx)(
                    o.default.root,
                    o.default["root_direction_".concat(s)],
                    { [o.default.root_collapsed]: a },
                    t,
                  ),
                  "aria-label": c["aria-label"],
                  ...c,
                  children: i,
                }),
              });
            };
          },
          7786: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationProvider = t.NavigationContext = void 0);
            let a = i(9541),
              n = i(810);
            (t.NavigationContext = (0, n.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = (e) => {
                let { collapsed: i, direction: l, children: r } = e,
                  o = (0, n.useMemo)(
                    () => ({ collapsed: i, direction: l }),
                    [i, l],
                  );
                return (0, a.jsx)(t.NavigationContext.Provider, {
                  value: o,
                  children: r,
                });
              });
          },
          8106: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationGroup = void 0);
            let n = i(9541),
              l = i(810),
              r = i(5881),
              o = i(7786),
              s = a(i(9948));
            t.NavigationGroup = function (e) {
              let { className: t, children: i, ...a } = e,
                c = (0, l.createRef)(),
                { direction: d } = (0, l.useContext)(o.NavigationContext);
              return (0, n.jsx)("ol", {
                ref: c,
                className: (0, r.clsx)(
                  s.default.root,
                  s.default["root_direction_".concat(d)],
                  t,
                ),
                ...a,
                children: i,
              });
            };
          },
          3506: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationItem = t.NavigationItemComponent = void 0);
            let n = i(9541),
              l = i(810),
              r = i(5881),
              o = i(7786),
              s = i(8216),
              c = a(i(8850));
            function d(e) {
              let {
                  className: t = "",
                  forwardRef: i,
                  children: a,
                  selected: d = !1,
                  shownAnimation: u,
                  withRipple: m = !1,
                  variant: _ = "default",
                  ...v
                } = e,
                { collapsed: p, direction: x } = (0, l.useContext)(
                  o.NavigationContext,
                ),
                y = (0, l.useCallback)(
                  (e) => {
                    m && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [m],
                ),
                [h, f] = l.Children.toArray(a.props.children),
                b = (0, l.useMemo)(
                  () =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: c.default.iconContainer,
                          children: h,
                        }),
                        (0, n.jsx)("div", {
                          className: (0, r.clsx)(
                            c.default.textContainer,
                            c.default["textContainer_direction_".concat(x)],
                            { [c.default.textContainer_selected]: d },
                          ),
                          children: f,
                        }),
                      ],
                    }),
                  [h, x, d, f],
                ),
                g = (0, l.cloneElement)(a, {
                  className: (0, r.clsx)(
                    c.default.item,
                    c.default["item_direction_".concat(x)],
                    {
                      [c.default.item_selected]: d,
                      [c.default["item_collapsed_".concat(x)]]: p,
                    },
                    a.props.className,
                  ),
                  children: b,
                });
              return (0, n.jsx)("li", {
                ref: i,
                className: (0, r.clsx)(
                  c.default.root,
                  c.default["root_direction_".concat(x)],
                  c.default["root_variant_".concat(_)],
                  {
                    [c.default.root_animate]: u,
                    [c.default.root_collapsed]: p,
                  },
                  t,
                ),
                "aria-current": !!d && "page",
                onClick: y,
                ...v,
                children: g,
              });
            }
            (t.NavigationItemComponent = d),
              (t.NavigationItem = (0, l.forwardRef)((e, t) =>
                (0, n.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = z;
          },
        },
        ee = {};
      function et(e) {
        var t = ee[e];
        if (void 0 !== t) return t.exports;
        var i = (ee[e] = { exports: {} });
        return $[e].call(i.exports, i, i.exports, et), i.exports;
      }
      (et.d = (e, t) => {
        for (var i in t)
          et.o(t, i) &&
            !et.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (et.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (et.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var ei = {};
      Object.defineProperty(ei, "X$", { value: !0 }),
        (ei.Dx = ei.KB = ei.W_ = void 0),
        (a = et(19)),
        Object.defineProperty(ei, "W_", {
          enumerable: !0,
          get: function () {
            return a.Navigation;
          },
        }),
        (n = et(8106)),
        Object.defineProperty(ei, "KB", {
          enumerable: !0,
          get: function () {
            return n.NavigationGroup;
          },
        }),
        (l = et(3506)),
        Object.defineProperty(ei, "Dx", {
          enumerable: !0,
          get: function () {
            return l.NavigationItem;
          },
        });
      var ea = ei.W_,
        en = ei.KB,
        el = ei.Dx;
      ei.X$;
      var er = i(92249),
        eo = i(81437),
        es = i(29778);
      let ec = () => {
          let e = (0, P.z$f)(),
            { hash: t } = (0, P.RQn)(),
            i = (0, P.wLl)(),
            {
              settings: { isMobile: a },
            } = (0, P.oR4)();
          return (0, D.useCallback)(
            (n, l) => {
              if (!e) return;
              let r = (0, P.KOr)({
                params: {
                  hash: t,
                  pageId: F.qU.Sidebar,
                  sidebarSize: n || a ? F.YR.Small : F.YR.Medium,
                  from: F.qU.Sidebar,
                  to: l,
                },
                logger: i,
                context: ec.name,
              });
              r && (0, F.zx)(e.evgenInstance, r);
            },
            [e, t, a, i],
          );
        },
        ed = (e) => {
          let { padding: t, placement: i } = e;
          return {
            shiftOptions: { padding: t },
            offsetOptions: t,
            flipOptions: { fallbackAxisSideDirection: "start", padding: t },
            placement: i,
          };
        },
        eu = ed({ placement: "right", padding: 8 });
      var em = i(8046),
        e_ = i(52085),
        ev = i(93422),
        ep = i(43998),
        ex = i(60383),
        ey = i(997),
        eh = i.n(ey);
      let ef = (e) => {
          let { children: t, entityUrl: i, ariaLabel: a } = e;
          return i
            ? (0, B.jsx)(es.rU, {
                href: i,
                "aria-label": a,
                className: eh().link,
                children: t,
              })
            : t;
        },
        eb = (e) => {
          let {
              className: t,
              cover: i,
              title: a,
              subtitle: n,
              contextMenu: l,
              isCollapsed: r,
              withCollapseAnimation: o,
              entityUrl: s,
              onDoubleClick: c,
              onClick: d,
              forwardRef: u,
              ariaLabel: m,
            } = e,
            _ = (0, D.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == c || c()
                  : (e.target instanceof HTMLElement &&
                      "IMG" !== e.target.tagName &&
                      (0, ex.m)(e, eh().ripple),
                    null == d || d());
              },
              [d, c],
            );
          return (0, B.jsxs)(es.Md, {
            ref: u,
            onClick: _,
            className: (0, V.W)(eh().root, { [eh().root_withoutLink]: !s }, t),
            role: "listitem",
            ...(0, U.BA)(U.QM.navbar.PIN_ITEM),
            children: [
              (0, B.jsxs)(ef, {
                entityUrl: s,
                ariaLabel: m,
                children: [
                  (0, B.jsx)("div", {
                    className: eh().cover,
                    ...(0, U.BA)(U.QM.navbar.PIN_COVER),
                    children: i,
                  }),
                  (0, B.jsx)("div", {
                    className: eh().meta,
                    children: (0, B.jsxs)("div", {
                      className: (0, V.W)(eh().info, {
                        [eh().info_collapsed]: r,
                        [eh().info_animated]: o,
                        [eh().info_withContextMenu]: (0, D.isValidElement)(l),
                      }),
                      children: [
                        (0, B.jsx)(eo.Caption, {
                          "aria-hidden": !0,
                          className: eh().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          ...(0, U.BA)(U.QM.navbar.PIN_TITLE),
                          children: a,
                        }),
                        (0, B.jsx)(eo.Caption, {
                          "aria-hidden": !0,
                          className: eh().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          ...(0, U.BA)(U.QM.navbar.PIN_SUBTITLE),
                          children: n,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, D.isValidElement)(l) &&
                (0, B.jsx)("div", {
                  className: (0, V.W)(eh().contextMenu, {
                    [eh().contextMenu_hidden]: r,
                  }),
                  ...(0, U.BA)(U.QM.navbar.PIN_CONTEXT_MENU_BUTTON),
                  children: l,
                }),
            ],
          });
        },
        eg = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(eb, { forwardRef: t, ...e }),
        ),
        eC = (0, D.createContext)(null);
      var eN = i(99056),
        ek = i.n(eN),
        ej = i(92154);
      let eI = () => {
          let e = (0, P.z$f)(),
            { hash: t } = (0, P.RQn)(),
            i = (0, P.wLl)(),
            {
              settings: { isMobile: a },
            } = (0, P.oR4)();
          return (0, D.useCallback)(
            (n) => {
              let {
                actionType: l,
                isCollapsed: r,
                mainObjectType: o,
                mainObjectId: s,
              } = n;
              if (!e) return;
              let c = {
                hash: t,
                actionType: l,
                user_interaction_type: F.wt.Tap,
                pageId: F.qU.Sidebar,
                sidebarSize: r || a ? F.YR.Small : F.YR.Medium,
              };
              o && (c.mainObjectType = o), s && (c.mainObjectId = s);
              let d = (0, P.KOr)({ params: c, logger: i, context: eI.name });
              d && (0, F.ro)(e.evgenInstance, d);
            },
            [e, t, a, i],
          );
        },
        eS = (e) => {
          let { onPinClick: t, isPinned: i } = e,
            { isCollapsed: a } = (0, D.useContext)(eC) || {},
            [n, l] = (0, D.useState)(!1),
            r = eI(),
            o = (0, D.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []),
            s = (0, D.useCallback)(() => {
              t(), r({ actionType: F.Us.Unpin, isCollapsed: null != a && a });
            }, [a, t, r]);
          return (
            (0, P.ZP4)(n),
            (0, B.jsx)(ej.v2, {
              className: (0, V.W)(ek().contextMenu, {
                [ek().contextMenu_visible]: n,
              }),
              onClick: o,
              icon: (0, B.jsx)(X.Icon, { size: "xxs", variant: "more" }),
              tabIndex: a ? -1 : 0,
              "aria-hidden": a,
              variant: "text",
              offsetOptions: 3,
              open: n,
              onOpenChange: l,
              containerProps: (0, U.BA)(U.QM.navbar.PIN_CONTEXT_MENU),
              children: (0, B.jsx)(es.Zd, { onClick: s, isPinned: i }),
            })
          );
        },
        eA = (e) => {
          var t;
          let { className: i, album: a, forwardRef: n, tooltipOptions: l } = e,
            { formatMessage: r } = (0, K.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, D.useContext)(eC)) && void 0 !== t ? t : {},
            c = (0, g.BV)(a),
            d = (0, g.H0)(a.type, g.wV.PIN),
            u = ec(),
            m = (0, g.Vt)(a.type),
            _ = (0, D.useCallback)(() => {
              u(null != o && o, m);
            }, [m, o, u]),
            v = (0, D.useMemo)(
              () =>
                (0, B.jsx)(ep.Paper, {
                  className: ek().cover,
                  radius: "xs",
                  children: (0, B.jsxs)(er.u, {
                    ...l,
                    enabled: o,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        className: ek().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: ek().tooltip,
                        children: (0, B.jsx)(eo.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [a.coverUri, a.title, o, l],
            );
          return (0, B.jsx)(eg, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.album-name" },
              { albumName: a.title },
            ),
            className: (0, V.W)(ek().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: d,
            cover: v,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, B.jsx)(eS, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
            onClick: _,
          });
        },
        eT = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(eA, { forwardRef: t, ...e }),
        );
      var eP = i(44729);
      let ew = (e) => {
          var t;
          let { className: i, artist: a, forwardRef: n, tooltipOptions: l } = e,
            { formatMessage: r } = (0, K.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, D.useContext)(eC)) && void 0 !== t ? t : {},
            c = (0, C.BV)(a),
            d = ec(),
            u = (0, D.useCallback)(() => {
              d(null != o && o, F.qU.ArtistScreen);
            }, [o, d]),
            m = (0, D.useMemo)(
              () =>
                (0, B.jsx)(ep.Paper, {
                  className: ek().cover,
                  radius: "round",
                  children: (0, B.jsxs)(er.u, {
                    ...l,
                    enabled: o,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        className: ek().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: ek().tooltip,
                        children: (0, B.jsx)(eo.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.name,
                        }),
                      }),
                    ],
                  }),
                }),
              [a.coverUri, a.name, o, l],
            );
          return (0, B.jsx)(eg, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.artist-name" },
              { artistName: a.name },
            ),
            className: (0, V.W)(ek().root, i),
            title: a.name,
            entityUrl: a.url,
            subtitle: (0, B.jsx)(eP.Z, { id: "entity-names.artist" }),
            cover: m,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, B.jsx)(eS, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
            onClick: u,
          });
        },
        eE = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(ew, { forwardRef: t, ...e }),
        ),
        eM = (e) => {
          var t;
          let {
              className: i,
              playlist: a,
              forwardRef: n,
              tooltipOptions: l,
            } = e,
            { formatMessage: r } = (0, K.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, D.useContext)(eC)) && void 0 !== t ? t : {},
            c = (0, N.BV)(a),
            d = ec(),
            u = (0, D.useCallback)(() => {
              d(null != o && o, F.qU.PlaylistScreen);
            }, [o, d]),
            m = (0, D.useMemo)(
              () =>
                (0, B.jsx)(ep.Paper, {
                  className: ek().cover,
                  radius: "xs",
                  children: (0, B.jsxs)(er.u, {
                    ...l,
                    enabled: o,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        "aria-hidden": !0,
                        className: ek().image,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: ek().tooltip,
                        children: (0, B.jsx)(eo.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [o, a.coverUri, a.title, l],
            );
          return (0, B.jsx)(eg, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.playlist-name" },
              { playlistName: a.title },
            ),
            className: (0, V.W)(ek().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: (0, B.jsx)(eP.Z, { id: "entity-names.playlist" }),
            cover: m,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, B.jsx)(eS, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
            onClick: u,
          });
        },
        eL = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(eM, { forwardRef: t, ...e }),
        ),
        eR = (e) => {
          var t;
          let { className: i, forwardRef: a, tooltipOptions: n } = e,
            { formatMessage: l } = (0, K.Z)(),
            { isCollapsed: r, withCollapseAnimation: o } =
              null !== (t = (0, D.useContext)(eC)) && void 0 !== t ? t : {},
            s = ec(),
            c = (0, D.useCallback)(() => {
              s(null != r && r, F.qU.YearResultsScreen);
            }, [r, s]),
            d = (0, D.useMemo)(
              () =>
                (0, B.jsx)(ep.Paper, {
                  className: ek().cover,
                  radius: "xs",
                  children: (0, B.jsxs)(er.u, {
                    ...n,
                    enabled: r,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        className: ek().image,
                        "aria-hidden": !0,
                        src: "https://avatars.mds.yandex.net/get-music-misc/49997/img.673f3b0111f206691b02092d/%%",
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: ek().tooltip,
                        children: (0, B.jsx)(eo.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: (0, B.jsx)(eP.Z, {
                            id: "sidebar.rewind-title",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              [r, n],
            );
          return (0, B.jsx)(eg, {
            ref: a,
            ariaLabel: l({ id: "sidebar.rewind-title" }),
            className: (0, V.W)(ek().root, i),
            title: (0, B.jsx)(eP.Z, { id: "sidebar.rewind-title" }),
            entityUrl: "/rewind2024",
            subtitle: (0, B.jsx)(eP.Z, { id: "sidebar.rewind-description" }),
            cover: d,
            isCollapsed: !!r,
            withCollapseAnimation: !!o,
            onClick: c,
          });
        },
        eB = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(eR, { forwardRef: t, ...e }),
        );
      var eV = i(33387),
        eO = i(2319);
      let eD = () => {
          let e = (0, P.z$f)(),
            { hash: t } = (0, P.RQn)(),
            i = (0, P.wLl)(),
            {
              settings: { isMobile: a },
            } = (0, P.oR4)();
          return (0, D.useCallback)(
            (n) => {
              let { isCollapsed: l, mainObjectId: r } = n;
              if (!e) return;
              let o = (0, P.KOr)({
                params: {
                  hash: t,
                  pageId: F.qU.Sidebar,
                  sidebarSize: l || a ? F.YR.Small : F.YR.Medium,
                  mainObjectType: F.OB.Wave,
                  mainObjectId: r,
                },
                logger: i,
                context: eD.name,
              });
              o && (0, F.Cm)(e.evgenInstance, o);
            },
            [e, t, a, i],
          );
        },
        ez = (0, O.Pi)((e) => {
          var t, i;
          let { className: a, vibe: n, forwardRef: l, tooltipOptions: r } = e,
            o = (0, D.useId)(),
            { formatMessage: s } = (0, K.Z)(),
            { isCollapsed: c, withCollapseAnimation: d } =
              null !== (i = (0, D.useContext)(eC)) && void 0 !== i ? i : {},
            [u, m] = (0, D.useState)(!1),
            _ = (0, k.BV)(n),
            { isFreemium: v } = (0, P.NMB)(),
            { state: p, setState: x } = (0, eO.O)(!1),
            y = eD(),
            h = eI(),
            {
              isPlaying: f,
              togglePlay: b,
              isCurrent: g,
            } = (0, P.QhE)({
              seeds: n.seeds,
              pageIdForFrom: P.Rhz.SIDEBAR,
              blockIdForFrom: P.aUg.RADIO,
            }),
            C = (0, eV.W)(async () => {
              var e, t;
              if (v) {
                x(!0);
                return;
              }
              return (
                f
                  ? h({
                      actionType: F.Us.Pause,
                      isCollapsed: null != c && c,
                      mainObjectType: F.OB.Wave,
                      mainObjectId:
                        null !== (e = n.seeds[0]) && void 0 !== e ? e : "",
                    })
                  : y({
                      isCollapsed: null != c && c,
                      mainObjectId:
                        null !== (t = n.seeds[0]) && void 0 !== t ? t : "",
                    }),
                b()
              );
            }),
            N = (0, eV.W)(() => {
              m(!0),
                C().finally(() => {
                  m(!1);
                });
            }),
            j = (0, D.useMemo)(
              () =>
                (0, B.jsx)(eo.Caption, {
                  id: o,
                  variant: "span",
                  "aria-label": s(
                    { id: "entity-names.vibe-name" },
                    { vibeName: n.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: n.title,
                }),
              [s, o, n.title],
            ),
            I = (0, D.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = n.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, B.jsxs)(er.u, {
                ...r,
                enabled: c,
                children: [
                  (0, B.jsx)("div", {
                    style: t,
                    className: ek().animation,
                    children: (0, B.jsx)(es.Df, {
                      isCurrent: g,
                      isPlaying: f,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: N,
                      title: n.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: o,
                    }),
                  }),
                  (0, B.jsx)(er._v, {
                    className: ek().tooltip,
                    children: (0, B.jsx)(eo.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: n.title,
                    }),
                  }),
                ],
              });
            }, [
              N,
              c,
              g,
              u,
              f,
              o,
              r,
              null === (t = n.colors) || void 0 === t ? void 0 : t.average,
              n.title,
            ]),
            S = (0, D.useCallback)(
              () =>
                (0, B.jsx)(eg, {
                  ref: l,
                  onDoubleClick: C,
                  className: (0, V.W)(ek().root, a),
                  isCollapsed: !!c,
                  contextMenu: (0, B.jsx)(eS, {
                    onPinClick: _,
                    isPinned: n.isPinned,
                  }),
                  withCollapseAnimation: !!d,
                  title: j,
                  subtitle: (0, B.jsx)(eP.Z, { id: "entity-names.my-vibe" }),
                  cover: I,
                }),
              [a, I, _, c, C, l, j, n.isPinned, d],
            );
          return (0, B.jsx)(es.pl, {
            isEnabled: v,
            isOpened: p,
            onOpenChange: x,
            placement: "right",
            textVariant: "vibe",
            vibeTextVariant: n.type,
            renderChildren: S,
          });
        }),
        eU = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(ez, { forwardRef: t, ...e }),
        );
      var eF = i(39732),
        eW = i.n(eF);
      let eQ = ed({ placement: "right", padding: 20 }),
        eG = {
          enter: eW().pin_enter,
          enterActive: eW().pin_enter_active,
          exit: eW().pin_exit,
          exitActive: eW().pin_exit_active,
        },
        eY = (0, O.Pi)((e) => {
          var t;
          let { className: i, withCollapseAnimation: a, isCollapsed: n } = e,
            { formatMessage: l } = (0, K.Z)(),
            { pinsCollection: r, slides: o } = (0, P.oR4)(),
            s = (0, D.createRef)(),
            c =
              null === (t = r.items) || void 0 === t
                ? void 0
                : t.map(() => (0, D.createRef)()),
            d = (0, D.useMemo)(
              () => ({ withCollapseAnimation: a, isCollapsed: n }),
              [n, a],
            ),
            u = (0, D.useMemo)(() => {
              var e;
              let t = [];
              return (
                o.shouldShowUserSlides &&
                  t.push(
                    (0, B.jsx)(
                      em.Z,
                      {
                        classNames: eG,
                        nodeRef: s,
                        timeout: 270,
                        children: (0, B.jsx)(eB, {
                          className: eW().pin,
                          tooltipOptions: eQ,
                          ref: s,
                        }),
                      },
                      "rewind2024",
                    ),
                  ),
                null === (e = r.items) ||
                  void 0 === e ||
                  e.forEach((e, i) => {
                    switch (e.type) {
                      case b.Q.ALBUM_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == c ? void 0 : c[i],
                              timeout: 270,
                              children: (0, B.jsx)(eT, {
                                className: eW().pin,
                                tooltipOptions: eQ,
                                ref: null == c ? void 0 : c[i],
                                album: e.data,
                              }),
                            },
                            e.data.pinId,
                          ),
                        );
                        return;
                      case b.Q.ARTIST_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == c ? void 0 : c[i],
                              timeout: 270,
                              children: (0, B.jsx)(eE, {
                                className: eW().pin,
                                tooltipOptions: eQ,
                                ref: null == c ? void 0 : c[i],
                                artist: e.data,
                              }),
                            },
                            e.data.pinId,
                          ),
                        );
                        return;
                      case b.Q.PLAYLIST_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == c ? void 0 : c[i],
                              timeout: 270,
                              children: (0, B.jsx)(eL, {
                                className: eW().pin,
                                tooltipOptions: eQ,
                                ref: null == c ? void 0 : c[i],
                                playlist: e.data,
                              }),
                            },
                            e.data.pinId,
                          ),
                        );
                        return;
                      case b.Q.WAVE_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == c ? void 0 : c[i],
                              timeout: 270,
                              children: (0, B.jsx)(eU, {
                                className: eW().pin,
                                tooltipOptions: eQ,
                                ref: null == c ? void 0 : c[i],
                                vibe: e.data,
                              }),
                            },
                            e.data.pinId,
                          ),
                        );
                        return;
                    }
                  }),
                t
              );
            }, [o.shouldShowUserSlides, s, c, r.items]),
            m = u.length > 0,
            _ = u.length >= 3;
          return (0, B.jsx)(eC.Provider, {
            value: d,
            children: (0, B.jsx)("div", {
              className: (0, V.W)(
                eW().root,
                { [eW().root_withScroll]: _, [eW().root_hasPins]: m },
                i,
              ),
              ...(0, U.BA)(U.QM.navbar.PIN_LIST),
              children: (0, B.jsx)("div", {
                role: "list",
                "aria-label": l({ id: "navigation.pins-list" }),
                className: eW().content,
                children: (0, B.jsx)(e_.Z, { component: null, children: u }),
              }),
            }),
          });
        });
      var eZ = i(1646),
        eq = i.n(eZ);
      ((r = o || (o = {})).WINDOWS = "WINDOWS"),
        (r.MACOS = "MACOS"),
        (r.UNKNOWN = "UNKNOWN");
      var eK = i(18306),
        eH = i.n(eK);
      let eX = {
          exit: eH().bar_exit,
          exitActive: eH().bar_exit_active,
          enter: eH().bar_enter,
          enterActive: eH().bar_enter_active,
        },
        eJ = {
          exit: eH().button_exit,
          exitActive: eH().button_exit_active,
          enter: eH().button_enter,
          enterActive: eH().button_enter_active,
        },
        e$ = (e) => {
          let {
              className: t,
              children: i,
              button: a,
              isCollapsed: n,
              barClassName: l,
            } = e,
            r = (0, D.useRef)(null),
            o = (0, D.useRef)(null);
          return (0, B.jsxs)("div", {
            className: (0, V.W)(eH().root, t),
            children: [
              (0, B.jsx)(em.Z, {
                nodeRef: o,
                in: n,
                timeout: 150,
                classNames: eJ,
                unmountOnExit: !0,
                children: (0, B.jsx)("div", {
                  className: (0, V.W)(eH().button),
                  ref: o,
                  children: a,
                }),
              }),
              (0, B.jsx)(em.Z, {
                nodeRef: r,
                in: !n,
                timeout: 150,
                classNames: eX,
                unmountOnExit: !0,
                children: (0, B.jsx)("div", {
                  className: (0, V.W)(eH().bar, l),
                  ref: r,
                  children: i,
                }),
              }),
            ],
          });
        },
        e0 = (e) => {
          switch (e) {
            case o.MACOS:
              return "macos";
            case o.WINDOWS:
              return "windows";
            default:
              return "musicLogo";
          }
        },
        e1 = (e) => {
          let { formatMessage: t } = (0, K.Z)();
          switch (e) {
            case o.MACOS:
              return t({ id: "sidebar.download-macos" });
            case o.WINDOWS:
              return t({ id: "sidebar.download-windows" });
            default:
              return t({ id: "sidebar.download-app" });
          }
        };
      var e5 = i(78545),
        e2 = i.n(e5);
      let e4 = (e) => {
          let {
              variant: t,
              forwardRef: i,
              onDownloadClick: a,
              onCloseClick: n,
            } = e,
            { formatMessage: l } = (0, K.Z)(),
            r = e1(t),
            s = (0, D.useMemo)(() => {
              let e = {
                span: (e) =>
                  (0, B.jsx)("span", {
                    className: e2().textBright,
                    children: e,
                  }),
              };
              switch (t) {
                case o.MACOS:
                  return l({ id: "sidebar.download-macos-formatted" }, e);
                case o.WINDOWS:
                  return l({ id: "sidebar.download-windows-formatted" }, e);
                default:
                  return l({ id: "sidebar.download-app-formatted" }, e);
              }
            }, [l, t]);
          return (0, B.jsx)("section", {
            ref: i,
            "aria-label": r,
            children: (0, B.jsxs)(ep.Paper, {
              className: e2().root,
              children: [
                (0, B.jsx)(H.z, {
                  color: "secondary",
                  radius: "round",
                  variant: "text",
                  size: "xxxs",
                  className: e2().closeButton,
                  icon: (0, B.jsx)(X.Icon, {
                    variant: "close",
                    size: "xxs",
                    className: e2().closeButtonIcon,
                  }),
                  withRipple: !1,
                  onClick: n,
                  "aria-label": l({ id: "interface-actions.close" }),
                }),
                (0, B.jsx)(eo.Caption, {
                  variant: "div",
                  className: e2().text,
                  size: "m",
                  children: s,
                }),
                (0, B.jsx)(H.z, {
                  color: "secondary",
                  radius: "xxxl",
                  size: "xs",
                  variant: "default",
                  role: "link",
                  withRipple: !0,
                  flexIcon: !0,
                  "aria-label": r,
                  onClick: a,
                  icon: (0, B.jsx)(X.Icon, {
                    variant: e0(t),
                    size: "xxs",
                    className: e2().downloadButtonIcon,
                  }),
                  ...(0, U.BA)(U.QM.navbar.DOWNLOAD_APP_BUTTON_ENLARGED),
                  children: (0, B.jsx)(eo.Caption, {
                    variant: "span",
                    className: e2().downloadButtonText,
                    size: "m",
                    children: (0, B.jsx)(eP.Z, { id: "offline.download" }),
                  }),
                }),
              ],
            }),
          });
        },
        e3 = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(e4, { forwardRef: t, ...e }),
        );
      var e9 = i(25456),
        e8 = i.n(e9);
      let e6 = (e) => {
          let { variant: t, onDownloadClick: i } = e,
            a = e1(t),
            n = (0, D.useMemo)(() => e0(t), [t]);
          return (0, B.jsxs)(ep.Paper, {
            className: e8().root,
            children: [
              (0, B.jsx)(X.Icon, {
                variant: n,
                size: "xs",
                className: e8().icon,
              }),
              (0, B.jsxs)(er.u, {
                placement: "left",
                offsetOptions: 4,
                children: [
                  (0, B.jsx)(H.z, {
                    className: e8().button,
                    color: "secondary",
                    radius: "round",
                    size: "xs",
                    variant: "default",
                    role: "link",
                    withRipple: !0,
                    flexIcon: !0,
                    onClick: i,
                    icon: (0, B.jsx)(X.Icon, {
                      variant: "download",
                      size: "xxs",
                      className: e8().buttonIcon,
                    }),
                    "aria-label": a,
                    ...(0, U.BA)(U.QM.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED),
                  }),
                  (0, B.jsx)(er._v, {
                    children: (0, B.jsx)(eo.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: a,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        e7 = (0, O.Pi)((e) => {
          var t;
          let { isCollapsed: i } = e,
            { settings: a } = (0, P.oR4)(),
            n = (0, P.uK4)(),
            l = n.get(P.V0J),
            r = n.get(P.U5t),
            [s, c] = (0, D.useState)(!1),
            d = (0, D.useMemo)(() => {
              var e;
              switch (
                null === (e = a.browserInfo) || void 0 === e
                  ? void 0
                  : e.OSFamily
              ) {
                case "MacOS":
                  return o.MACOS;
                case "Windows":
                  return o.WINDOWS;
                default:
                  return o.UNKNOWN;
              }
            }, [
              null === (t = a.browserInfo) || void 0 === t
                ? void 0
                : t.OSFamily,
            ]),
            u = (0, P.yyu)(r.downloadDesktop.url),
            m = (0, D.useCallback)(() => {
              window.open(u, "_blank", "noreferrer noopener");
            }, [u]),
            _ = (0, D.useCallback)(() => {
              l.set(P.BUb.NavbarDownloadBarIsHidden, !0, { expires: 30 }),
                c(!0);
            }, [l]);
          return s
            ? null
            : (0, B.jsx)(e$, {
                isCollapsed: i,
                button: (0, B.jsx)(e6, { variant: d, onDownloadClick: m }),
                children: (0, B.jsx)(e3, {
                  variant: d,
                  onDownloadClick: m,
                  onCloseClick: _,
                }),
              });
        });
      var te = i(91878),
        tt = i(82607),
        ti = i(87398),
        ta = i(31278);
      function tn() {
        return (tn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tl = function (e) {
          return ta.createElement(
            "svg",
            tn(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            ta.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              ta.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                s ||
                  (s = ta.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                c ||
                  (c = ta.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                d ||
                  (d = ta.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                ta.createElement(
                  "mask",
                  {
                    id: "mask0_2521_25547",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: 33,
                    y: 0,
                    width: 25,
                    height: 24,
                  },
                  u ||
                    (u = ta.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                m ||
                  (m = ta.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                _ ||
                  (_ = ta.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    ta.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    ta.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            v ||
              (v = ta.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                ta.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                ta.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            p ||
              (p = ta.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            x ||
              (x = ta.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            y ||
              (y = ta.createElement(
                "defs",
                null,
                ta.createElement(
                  "radialGradient",
                  {
                    id: "paint0_radial_2521_25547",
                    cx: 0,
                    cy: 0,
                    r: 1,
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(40.7002 3.59937) rotate(45) scale(23.7588)",
                  },
                  ta.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  ta.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                ta.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  ta.createElement("stop", { stopColor: "#FF5C4D" }),
                  ta.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  ta.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                ta.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  ta.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                ta.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  ta.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                ta.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  ta.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                ta.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  ta.createElement("rect", {
                    x: 17.0005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        tr = i(33918),
        to = i.n(tr);
      let ts = "PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID",
        tc = (0, O.Pi)(() => {
          let [e, t] = (0, te.z)(),
            {
              mainText: i,
              isShimmerVisible: a,
              isShimmerActive: n,
              openPaymentWidgetModal: l,
            } = (0, ti.xU)({
              storeName: "music",
              offerElement: { element: e, intersectionPropertyId: ts },
            });
          return a
            ? (0, B.jsx)(tt.Shimmer, {
                className: to().plusButtonShimmer,
                isActive: n,
                radius: "xxxl",
              })
            : (0, B.jsx)(H.z, {
                className: to().button,
                isBlock: !0,
                radius: "xxxl",
                size: "m",
                color: "plus",
                onClick: l,
                ref: t,
                "data-intersection-property-id": ts,
                children: (0, B.jsx)(eo.Caption, {
                  variant: "div",
                  size: "s",
                  lineClamp: 2,
                  children: i,
                }),
              });
        }),
        td = (e) => {
          let { className: t, forwardRef: i } = e,
            {
              paywall: { modal: a },
            } = (0, P.oR4)(),
            { formatMessage: n } = (0, K.Z)();
          return (0, B.jsxs)("section", {
            className: (0, V.W)(to().root, t),
            ref: i,
            "aria-label": n({ id: "plusbar.subscription-activation" }),
            children: [
              (0, B.jsx)(tl, { className: to().logos, "aria-hidden": "true" }),
              (0, B.jsx)(eo.Caption, {
                className: to().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, B.jsx)(eP.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, B.jsx)(eo.Caption, {
                className: to().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, B.jsx)(eP.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, B.jsxs)("div", {
                className: to().buttons,
                children: [
                  (0, B.jsx)(tc, {}),
                  (0, B.jsx)(H.z, {
                    className: to().button,
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    onClick: a.open,
                    children: (0, B.jsx)(eP.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        tu = (0, D.forwardRef)((e, t) =>
          (0, B.jsx)(td, { forwardRef: t, ...e }),
        );
      var tm = i(70523),
        t_ = i.n(tm);
      let tv = (0, O.Pi)((e) => {
        let { isCollapsed: t } = e,
          { formatMessage: i } = (0, K.Z)(),
          {
            paywall: { modal: a },
          } = (0, P.oR4)();
        return (0, B.jsx)(e$, {
          className: t_().root,
          isCollapsed: t,
          button: (0, B.jsxs)(er.u, {
            ...eu,
            enabled: t,
            children: [
              (0, B.jsx)(H.z, {
                variant: "text",
                withRipple: !1,
                size: "xxs",
                icon: (0, B.jsx)(X.Icon, {
                  variant: "plusOutlined",
                  size: "m",
                }),
                className: (0, V.W)(t_().button, t_().important),
                "aria-label": i({ id: "plusbar.subscription-activation" }),
                onClick: a.open,
              }),
              (0, B.jsx)(er._v, {
                children: (0, B.jsx)(eo.Caption, {
                  variant: "span",
                  type: "text",
                  size: "s",
                  weight: "medium",
                  children: (0, B.jsx)(eP.Z, {
                    id: "plusbar.subscription-activation",
                  }),
                }),
              }),
            ],
          }),
          children: (0, B.jsx)(tu, {}),
        });
      });
      var tp = i(43507),
        tx = i(99678),
        ty = i(57363),
        th = i.n(ty);
      let tf = () => {
        let e = (0, tx.useRouter)(),
          t = (0, P.uK4)().get(P.xit),
          i = (0, D.useCallback)(() => {
            t.authorizationUrl && e.push(t.authorizationUrl);
          }, [t.authorizationUrl, e]);
        return (0, B.jsxs)("div", {
          className: th().root,
          children: [
            (0, B.jsx)(D.Suspense, {
              children: (0, B.jsx)(tp.Iw, {
                className: th().userProfile,
                userIdClassName: th().userId,
                variant: "desktop",
              }),
            }),
            (0, B.jsx)(eo.Caption, {
              className: th().title,
              size: "m",
              variant: "div",
              weight: "bold",
              children: (0, B.jsx)(eP.Z, { id: "authorization.enter-title" }),
            }),
            (0, B.jsx)(eo.Caption, {
              className: th().subtitle,
              size: "xs",
              variant: "div",
              weight: "medium",
              children: (0, B.jsx)(eP.Z, {
                id: "authorization.enter-subtitle",
              }),
            }),
            (0, B.jsx)(H.z, {
              onClick: i,
              radius: "xxxl",
              size: "s",
              color: "primary",
              variant: "default",
              isBlock: !0,
              children: (0, B.jsx)(eP.Z, { id: "authorization.enter-button" }),
            }),
          ],
        });
      };
      var tb = i(2819),
        tg = i.n(tb);
      let tC = (0, O.Pi)((e) => {
          let { isCollapsed: t, withUserProfileAnimation: i } = e,
            { user: a } = (0, P.oR4)();
          return a.isAuthorized
            ? (0, B.jsx)("div", {
                className: tg().userProfileContainer,
                children: (0, B.jsx)(tp.Iw, {
                  className: tg().userProfile,
                  userIdClassName: tg().userId,
                  metaClassName: (0, V.W)(tg().userMeta, {
                    [tg().userMeta_withAnimation]: i,
                    [tg().userMeta_collapsed]: t,
                  }),
                  withMeta: !0,
                }),
              })
            : (0, B.jsx)(e$, {
                barClassName: tg().unauthorizedBar,
                isCollapsed: t,
                button: (0, B.jsxs)(er.u, {
                  ...eu,
                  enabled: t,
                  children: [
                    (0, B.jsx)("div", {
                      className: tg().userProfileContainer,
                      children: (0, B.jsx)(tp.Iw, {
                        className: tg().userProfile,
                      }),
                    }),
                    (0, B.jsx)(er._v, {
                      children: (0, B.jsx)(eo.Caption, {
                        variant: "span",
                        type: "text",
                        size: "s",
                        weight: "medium",
                        children: (0, B.jsx)(eP.Z, {
                          id: "authorization.enter-tooltip",
                        }),
                      }),
                    }),
                  ],
                }),
                children: (0, B.jsx)(tf, {}),
              });
        }),
        tN = (0, O.Pi)((e) => {
          var t;
          let {
              className: i,
              isCollapsed: a,
              shownAnimation: n,
              handleClick: l,
            } = e,
            r = Y(),
            o = (0, P.hJm)(),
            { formatMessage: s } = (0, K.Z)(),
            { language: c } = (0, P.ZSk)(),
            { user: d, experiments: u, settings: m } = (0, P.oR4)(),
            _ = (0, P.V$B)(),
            v = (0, P.uK4)().get(P.V0J),
            p = ec(),
            x = u.checkExperiment(P.peG.WebNextDownloadAppButton, "on"),
            y =
              (null === (t = m.browserInfo) || void 0 === t || t.isTouch,
              !v.get(P.BUb.NavbarDownloadBarIsHidden) && x && !1),
            h = (0, D.useMemo)(
              () =>
                d.collectionHue
                  ? { "--logo-color": (0, P.paG)(d.collectionHue) }
                  : null,
              [d.collectionHue],
            ),
            f = (0, D.useMemo)(
              () =>
                a
                  ? s({ id: "sidebar.uncollapse" })
                  : s({ id: "sidebar.collapse" }),
              [a, s],
            ),
            b = u.checkExperiment(
              P.peG.WebNextLandingSkeletonPodcastsAndBooks,
              "on",
            ),
            g = (0, D.useMemo)(
              () =>
                b
                  ? s({ id: "entity-names.podcasts-and-books" })
                  : s({ id: "entity-names.podcasts" }),
              [s, b],
            ),
            C = (0, D.useMemo)(
              () => ({
                search: s({ id: "navigation.search" }),
                main: s({ id: "navigation.page-main" }),
                collection: s({ id: "navigation.page-collection" }),
                non_music: g,
                kids: s({ id: "kids.for-kids" }),
              }),
              [g, s],
            ),
            N = (0, D.useCallback)(
              (e) => () => {
                p(a, e);
              },
              [a, p],
            ),
            k = (0, D.useMemo)(
              () =>
                (0, B.jsx)(
                  en,
                  {
                    children: _.map((e) => {
                      let t = o(e.availablePaths);
                      return (0, B.jsx)(
                        el,
                        {
                          selected: t,
                          shownAnimation: n,
                          variant: "main",
                          children: (0, B.jsxs)(es.rU, {
                            href: e.isEnabled ? e.path : void 0,
                            role: "link",
                            "aria-disabled": !e.isEnabled,
                            tabIndex: e.isEnabled ? 0 : -1,
                            className: (0, V.W)({
                              [eq().disabledNavigationItem]: !e.isEnabled,
                            }),
                            onClick: N(e.analyticsAppScreenName),
                            children: [
                              (0, B.jsxs)(er.u, {
                                ...eu,
                                enabled: a,
                                children: [
                                  (0, B.jsx)(X.Icon, {
                                    variant: t ? e.iconSelected : e.icon,
                                    size: "m",
                                  }),
                                  (0, B.jsx)(er._v, {
                                    children: (0, B.jsx)(eo.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: C[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, B.jsx)(eo.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, V.W)({
                                  [eq().title_animate]: n,
                                  [eq().title_collapsed]: a,
                                }),
                                children: C[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      );
                    }),
                  },
                  "main",
                ),
              [o, a, u, u.loadingState, n, C, _],
            ),
            j = (0, D.useMemo)(
              () =>
                r
                  ? null
                  : (0, D.createElement)(er.u, {
                      ...eu,
                      key: "collapseTooltip",
                      enabled: a,
                      isFocusEnabled: !1,
                      children: [
                        (0, B.jsx)(H.z, {
                          className: eq().collapseButton,
                          "aria-label": f,
                          radius: "round",
                          color: "secondary",
                          size: "xs",
                          icon: (0, B.jsx)(X.Icon, {
                            variant: a ? "arrowRight" : "arrowLeft",
                            size: "xxs",
                          }),
                          onClick: l,
                        }),
                        (0, B.jsx)(er._v, {
                          className: (0, V.W)({
                            [eq().collapseButtonTooltip_hidden]: !a,
                          }),
                          children: f,
                        }),
                      ],
                    }),
              [a, f, l, r],
            );
          return (0, B.jsxs)("div", {
            className: (0, V.W)(eq().root, i),
            children: [
              (0, B.jsxs)("div", {
                className: eq().logoWrapper,
                children: [
                  (0, B.jsx)(es.rU, {
                    href: "/",
                    className: eq().logoLink,
                    "aria-label": s({ id: "navigation.page-main" }),
                    children: (0, B.jsx)(J.TR, {
                      style: h,
                      className: (0, V.W)(eq().logo),
                      collapsed: a,
                      shownAnimation: n,
                      lang: "ru" !== c ? J.o0.EN : J.o0.RU,
                    }),
                  }),
                  j,
                ],
              }),
              (0, B.jsx)("div", {
                className: eq().scrollableContainer,
                children: (0, B.jsxs)("div", {
                  className: eq().scrollableContent,
                  children: [
                    (0, B.jsx)(ea, {
                      className: eq().navigation,
                      collapsed: a,
                      "aria-label": s({ id: "navigation.main-menu" }),
                      children: k,
                    }),
                    (0, B.jsx)(es.FM, {
                      fallback: (0, B.jsx)(eY, {
                        isCollapsed: a,
                        withCollapseAnimation: !!n,
                        className: eq().pinsList,
                      }),
                    }),
                    d.isAuthorized &&
                      !d.hasPlus &&
                      (0, B.jsx)(tv, { isCollapsed: a }),
                    y && (0, B.jsx)(e7, { isCollapsed: a }),
                  ],
                }),
              }),
              (0, B.jsx)(tC, { withUserProfileAnimation: n, isCollapsed: a }),
            ],
          });
        });
      var tk = i(71538),
        tj = i.n(tk);
      let tI = (0, O.Pi)((e) => {
          let { className: t } = e,
            i = (0, P.hJm)(),
            { experiments: a } = (0, P.oR4)(),
            { formatMessage: n } = (0, K.Z)(),
            l = (0, P.V$B)(),
            r = n({ id: "navigation.main-menu" }),
            o = ec(),
            s = a.checkExperiment(
              P.peG.WebNextLandingSkeletonPodcastsAndBooks,
              "on",
            ),
            c = (0, D.useMemo)(
              () =>
                s
                  ? n({ id: "entity-names.podcasts-and-books" })
                  : n({ id: "entity-names.podcasts" }),
              [n, s],
            ),
            d = (0, D.useMemo)(
              () => ({
                search: n({ id: "navigation.search" }),
                main: n({ id: "navigation.page-main" }),
                collection: n({ id: "navigation.page-collection" }),
                non_music: c,
                kids: n({ id: "kids.for-kids" }),
              }),
              [n, c],
            ),
            u = (0, D.useCallback)(
              (e) => () => {
                o(!0, e);
              },
              [o],
            );
          return (0, B.jsx)("div", {
            className: (0, V.W)(tj().root, t),
            children: (0, B.jsx)(ea, {
              collapsed: !0,
              direction: "horizontal",
              "aria-label": r,
              children: (0, B.jsx)(en, {
                children: (0, B.jsxs)(B.Fragment, {
                  children: [
                    l.map((e) => {
                      let t = i(e.availablePaths);
                      return (0, B.jsx)(
                        el,
                        {
                          selected: t,
                          children: (0, B.jsxs)(es.rU, {
                            href: e.isEnabled ? e.path : void 0,
                            role: "link",
                            "aria-disabled": !e.isEnabled,
                            tabIndex: e.isEnabled ? 0 : -1,
                            className: (0, V.W)({
                              [tj().disabledNavigationItem]: !e.isEnabled,
                            }),
                            onClick: u(e.analyticsAppScreenName),
                            children: [
                              (0, B.jsx)(X.Icon, {
                                variant: t ? e.iconSelected : e.icon,
                                size: "m",
                              }),
                              (0, B.jsx)(eo.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                children: d[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      );
                    }),
                    (0, B.jsx)(el, {
                      children: (0, B.jsx)(tp.Iw, {
                        className: tj().user,
                        variant: "mobile",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        tS = (0, O.Pi)((e) => {
          let { className: t } = e,
            i = (0, P.uK4)().get(P.V0J),
            a = Y(),
            {
              settings: { isMobile: n },
              navbar: l,
            } = (0, P.oR4)(),
            [r, o] = (0, D.useState)(i.get(P.BUb.NavbarCollapsed) || !1),
            [s, c] = (0, D.useState)(!1),
            d = W(),
            u = (0, D.useMemo)(() => (n ? tI : tN), [n]),
            m = (0, D.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(P.BUb.NavbarCollapsed, !r, { expires: 180 }),
                  o(!r),
                  c(!0),
                  d(!r);
              },
              [r, d, i],
            );
          return (
            (0, D.useEffect)(() => {
              l.isSentOpenedAnalytics ||
                (l.setIsSentOpenedAnalytics(!0), d(r || a));
            }, [a, r, l, d]),
            (0, B.jsx)("aside", {
              className: (0, V.W)(
                q().root,
                { [q().root_collapsed]: r || a },
                t,
              ),
              ...(0, U.BA)(U.QM.navbar.NAVBAR),
              children: (0, B.jsx)(u, {
                handleClick: m,
                isCollapsed: r || a,
                shownAnimation: s,
              }),
            })
          );
        });
    },
    65829: function (e, t, i) {
      "use strict";
      i.d(t, {
        Tk: function () {
          return S;
        },
        Rt: function () {
          return ii;
        },
        Oe: function () {
          return U;
        },
        ev: function () {
          return iS;
        },
        zC: function () {
          return F;
        },
        BF: function () {
          return iw;
        },
        Y1: function () {
          return o;
        },
      }),
        ((r = o || (o = {})).VIDEO = "video-ad-player"),
        (r.SLOT = "video-ad-container");
      var a,
        n,
        l,
        r,
        o,
        s,
        c,
        d,
        u = i(2685);
      let m = u.V5.model("AdContainer", {
        adTitle: u.V5.maybe(u.V5.string),
        iconSrc: u.V5.maybe(u.V5.string),
        clickThroughUrl: u.V5.maybe(u.V5.string),
        src: u.V5.maybe(u.V5.string),
        clientLegalInfo: u.V5.maybe(u.V5.string),
        advertiserInfoUrl: u.V5.maybe(u.V5.string),
      });
      var _ = i(65301),
        v = i(9695),
        p = i(96233),
        x = i(91207),
        y = i.t(x, 2),
        h = i(44729),
        f = i(78372),
        b = i(93422),
        g = i(81437),
        C = i(58997),
        N = i(29778),
        k = i(84478),
        j = i.n(k),
        electronBridge = i(35308);
      let I = (0, p.Pi)((e) => {
          let { className: t, data: i, mediaContent: a, linkClassName: n } = e,
            {
              settings: { isMobile: l },
            } = (0, C.oR4)(),
            r = (0, C.ozq)(),
            o = (0, x.useMemo)(
              () =>
                (null == r ? void 0 : r.state.clickThrough)
                  ? (0, _.jsx)(f.z, {
                      className: (0, v.W)(j().button, n),
                      variant: "default",
                      radius: "xxxl",
                      onClick: r.state.clickThrough,
                      children: (0, _.jsx)(h.Z, { id: "ads.learn-more" }),
                    })
                  : (null == i ? void 0 : i.clickThroughUrl)
                    ? (0, _.jsx)(N.rU, {
                        target: "_blank",
                        href: i.clickThroughUrl,
                        className: (0, v.W)(j().button, j().linkButton, n),
                        children: (0, _.jsx)(h.Z, { id: "ads.learn-more" }),
                      })
                    : (0, _.jsx)(f.z, {
                        className: (0, v.W)(j().button, n),
                        variant: "default",
                        radius: "xxxl",
                        disabled: !0,
                        children: (0, _.jsx)(h.Z, { id: "ads.learn-more" }),
                      }),
              [
                null == i ? void 0 : i.clickThroughUrl,
                null == r ? void 0 : r.state.clickThrough,
                n,
              ],
            );
          return (0, _.jsxs)("div", {
            className: (0, v.W)(j().root, t),
            children: [
              a,
              (0, _.jsxs)("div", {
                className: j().container,
                children: [
                  (0, _.jsxs)("div", {
                    className: j().info,
                    children: [
                      (0, _.jsx)(b.Image, {
                        className: j().favicon,
                        withAspectRatio: !0,
                        "aria-hidden": !0,
                        fit: "cover",
                        src: (null == i ? void 0 : i.iconSrc) || "",
                        alt: "",
                        fallbackIconVariant: "picture",
                      }),
                      (0, _.jsxs)("div", {
                        className: j().text,
                        children: [
                          (0, _.jsx)(g.Caption, {
                            variant: "div",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            className: j().title,
                            lineClamp: l ? 5 : void 0,
                            children: null == i ? void 0 : i.adTitle,
                          }),
                          (0, _.jsx)(g.Caption, {
                            variant: "div",
                            type: "text",
                            size: "m",
                            weight: "medium",
                            className: j().subtitle,
                            children: (0, _.jsx)(h.Z, { id: "ads.ad" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: j().buttonContainer,
                    children: o,
                  }),
                ],
              }),
            ],
          });
        }),
        S = u.V5.model("Advert", {
          data: u.V5.maybeNull(m),
          isAdvertShown: u.V5.maybe(u.V5.boolean),
          isAdvertPlaying: u.V5.maybe(u.V5.boolean),
          type: u.V5.maybeNull(u.V5.enumeration(Object.values(C.QCf))),
        })
          .views((e) => ({
            get isAudioAdvert() {
              return e.type === C.QCf.AUDIO;
            },
            get isVideoAdvert() {
              return e.type === C.QCf.VIDEO;
            },
          }))
          .actions((e) => ({
            setData: (t) => {
              e.data = (0, u.pj)({
                adTitle: null == t ? void 0 : t.adTitle,
                iconSrc: null == t ? void 0 : t.iconSrc,
                clickThroughUrl: null == t ? void 0 : t.clickThroughUrl,
                clientLegalInfo: null == t ? void 0 : t.clientLegalInfo,
                advertiserInfoUrl: null == t ? void 0 : t.advertiserInfoUrl,
              });
            },
            setType(t) {
              e.type = t;
            },
            setAdvertShown: (t) => {
              e.isAdvertShown = t;
            },
            setAdvertPlaying: (t) => {
              e.isAdvertPlaying = t;
            },
            reset: () => {
              (e.data = null),
                (e.isAdvertPlaying = !0),
                (e.isAdvertShown = !1),
                (e.type = null);
            },
          }));
      var A = i(91694);
      ((a = s || (s = {})).SYNC_LYRICS = "syncLyrics"),
        (a.PLAY_QUEUE = "playQueue");
      var T = i(19489),
        P = i(73054);
      let w = u.V5.model("PlayQueue", {
        isVisible: u.V5.optional(u.V5.boolean, !1),
        beforeTracksIds: u.V5.maybeNull(u.V5.array(u.V5.number)),
        afterTracksIds: u.V5.maybeNull(u.V5.array(u.V5.number)),
        currentIndex: u.V5.optional(u.V5.number, 0),
        trackMap: u.V5.optional(u.V5.map(P.s$), {}),
      })
        .views((e) => ({
          get isVibeBlockShowed() {
            var t;
            let {
              sonataState: { isVibeContext: i },
            } = (0, u.yj)(e);
            return (
              !i &&
              (null === (t = e.afterTracksIds) || void 0 === t
                ? void 0
                : t.length) === 0
            );
          },
          get isContextRepeatBlockShowed() {
            var i;
            let {
              sonataState: { isContextRepeatMode: t },
            } = (0, u.yj)(e);
            return (
              t &&
              (null === (i = e.afterTracksIds) || void 0 === i
                ? void 0
                : i.length) === 0
            );
          },
          get itemsKeys() {
            var a, n, l;
            return null !==
              (l =
                null === (a = e.beforeTracksIds) || void 0 === a
                  ? void 0
                  : a
                      .concat(
                        null !== (n = e.afterTracksIds) && void 0 !== n
                          ? n
                          : [],
                      )
                      .map(String)) && void 0 !== l
              ? l
              : [];
          },
          get isDragAndDropEnabled() {
            let {
              experiments: t,
              sonataState: { isVibeContext: i },
            } = (0, u.yj)(e);
            return t.checkExperiment(C.peG.WebNextPlayQueueDnD, "on") && !i;
          },
        }))
        .actions((e) => {
          let t = (t, i) => {
              let a = t[i];
              if (!a) return null;
              let { entity: n } = a,
                l = (0, P.B5)(n);
              return l
                ? (e.trackMap.has(l.id) || e.trackMap.set(l.id, (0, u.pj)(l)),
                  i)
                : null;
            },
            i = {
              setVisible() {
                e.isVisible = !0;
              },
              setInvisible() {
                e.isVisible = !1;
              },
              updateTracks(e, t, a, n) {
                i.setCurrentTrackId(e, t),
                  i.setBeforeTracksIds(e, a),
                  i.setAfterTracksIds(e, a, n);
              },
              setCurrentTrackId(i, a) {
                (e.currentIndex = a), t(i, a);
              },
              setBeforeTracksIds(i, a) {
                let n = Math.max(0, e.currentIndex - 125) - 1,
                  l = [];
                for (let r = e.currentIndex - 1; r > n; r--) {
                  let e = a[r];
                  if ("number" != typeof e) break;
                  let n = t(i, e);
                  if (null === n) break;
                  l.unshift(n);
                }
                e.beforeTracksIds = (0, u.pj)(l);
              },
              setAfterTracksIds(i, a, n) {
                let l = n === T.A.Vibe ? 1 : i.length - e.currentIndex - 1,
                  r = [];
                for (let n = 0; n < Math.min(l, 125); n++) {
                  let l = a[e.currentIndex + 1 + n];
                  if ("number" != typeof l) break;
                  let o = t(i, l);
                  if (null === o) break;
                  r.push(o);
                }
                e.afterTracksIds = (0, u.pj)(r);
              },
            };
          return i;
        });
      var E = i(10231),
        M = i(67410),
        L = i(3154),
        R = i(26382),
        B = i(10607),
        V = i.n(B);
      let O = (e) => {
          try {
            return (V()(e).scripts || []).map((e) => {
              let { start: t, end: i, text: a } = e;
              return (0, u.pj)({ text: a.trim(), fromSec: t, toSec: i });
            });
          } catch (e) {
            return [];
          }
        },
        D = u.V5.model("SyncLyricsLine", {
          text: u.V5.string,
          fromSec: u.V5.number,
          toSec: u.V5.number,
        }).views((e) => ({
          get key() {
            return "".concat(e.fromSec, ":").concat(e.toSec);
          },
        })),
        z = u.V5.model("SyncLyrics", {
          isVisible: u.V5.optional(u.V5.boolean, !1),
          loadingState: u.V5.enumeration(Object.values(C.Gui)),
          lines: u.V5.maybeNull(u.V5.array(D)),
          major: u.V5.maybeNull(R.bP),
          writers: u.V5.maybeNull(u.V5.array(u.V5.string)),
          lyricId: u.V5.maybeNull(u.V5.number),
          externalLyricId: u.V5.maybeNull(u.V5.string),
          currentTrackId: u.V5.maybeNull(u.V5.union(u.V5.string, u.V5.number)),
          hasLyricsViewed: u.V5.optional(u.V5.boolean, !1),
        })
          .views((e) => ({
            get isLoaded() {
              return e.loadingState === C.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === C.Gui.REJECT;
            },
            get startSec() {
              var t;
              let i = null === (t = e.lines) || void 0 === t ? void 0 : t.at(0);
              return null == i ? void 0 : i.fromSec;
            },
            get endSec() {
              var i;
              let t =
                null === (i = e.lines) || void 0 === i ? void 0 : i.at(-1);
              return null == t ? void 0 : t.toSec;
            },
            get hasWriters() {
              var a;
              return !!(
                e.writers &&
                (null === (a = e.writers) || void 0 === a ? void 0 : a.length) >
                  0
              );
            },
            get hasInvalidLyrics() {
              var n;
              return !!(
                e.loadingState === C.Gui.RESOLVE &&
                (null === (n = e.lines) || void 0 === n ? void 0 : n.length) ===
                  0
              );
            },
          }))
          .actions((e) => {
            let t = {
              setVisible() {
                e.isVisible = !0;
              },
              setInvisible() {
                e.isVisible = !1;
              },
              getActiveLineIndex: (t) => {
                if (
                  (e.startSec && t < e.startSec) ||
                  (e.endSec && t > e.endSec)
                )
                  return null;
                let i = (e.lines || []).findIndex(
                  (e) => t >= e.fromSec && e.toSec >= t,
                );
                return i >= 0 ? i : null;
              },
              getData: (0, u.ls)(function* (i) {
                let { tracksResource: a, modelActionsLogger: n } = (0, u.dU)(e);
                if (i)
                  try {
                    e.loadingState = C.Gui.PENDING;
                    let {
                      downloadUrl: n,
                      major: l,
                      externalLyricId: r,
                      lyricId: o,
                      writers: s,
                    } = yield a.getLyrics((0, L.o)(i, M.y.LRC));
                    (e.major = (0, R.jp)(l)),
                      (e.externalLyricId = r),
                      (e.lyricId = o),
                      (e.writers = (0, u.pj)(s)),
                      (e.currentTrackId = i),
                      (e.hasLyricsViewed = !1),
                      yield t.downloadSyncLyrics(n),
                      (e.loadingState = C.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = C.Gui.REJECT), n.error(t);
                  }
              }),
              downloadSyncLyrics: (0, u.ls)(function* (t) {
                let { prefixlessResource: i } = (0, u.dU)(e),
                  a = yield i.getLyricsText(t);
                e.lines = (0, u.pj)(O(a));
              }),
              sendViews: (0, u.ls)(function* (t) {
                let { contextId: i, contextType: a } = t,
                  { lyricViewsResource: n, modelActionsLogger: l } = (0, u.dU)(
                    e,
                  );
                if (e.loadingState === C.Gui.RESOLVE)
                  try {
                    if (
                      !e.major ||
                      !e.lyricId ||
                      !e.externalLyricId ||
                      !e.currentTrackId
                    )
                      return;
                    yield n.sendViews({
                      lyricViews: [
                        {
                          id: (0, E.Z)(),
                          trackId: e.currentTrackId,
                          majorId: e.major.id,
                          lyricId: e.lyricId,
                          externalLyricId: e.externalLyricId,
                          lyricFormat: M.y.LRC,
                          albumId: a === T.A.Album && i ? i : void 0,
                          playlistId: a === T.A.Playlist && i ? i : void 0,
                        },
                      ],
                    }),
                      (e.hasLyricsViewed = !0);
                  } catch (e) {
                    l.error(e);
                  }
              }),
            };
            return t;
          }),
        U = u.V5.model("FullscreenPlayer", {
          mode: u.V5.maybeNull(u.V5.enumeration(Object.values(s))),
          syncLyrics: z,
          playQueue: w,
          modal: A.KL,
        })
          .views((e) => ({
            get isSplitMode() {
              return this.isPlayQueueMode || this.isSyncLyricsMode;
            },
            get isSyncLyricsMode() {
              var t;
              let { sonataState: i } = (0, u.yj)(e);
              return (
                e.mode === s.SYNC_LYRICS &&
                !!(null == i
                  ? void 0
                  : null === (t = i.entityMeta) || void 0 === t
                    ? void 0
                    : t.isSyncLyricsAvailable)
              );
            },
            get isPlayQueueMode() {
              return e.mode === s.PLAY_QUEUE;
            },
          }))
          .actions((e) => ({
            setMode(t) {
              e.mode = t;
            },
            showFullscreenPlayerModal() {
              e.syncLyrics.setInvisible(), e.modal.open();
            },
            showSyncLyrics() {
              (e.mode = s.SYNC_LYRICS),
                e.syncLyrics.setVisible(),
                e.modal.isOpened || e.modal.open();
            },
            hideSyncLyrics() {
              (e.mode = null), e.syncLyrics.setInvisible();
            },
            showPlayQueue() {
              (e.mode = s.PLAY_QUEUE),
                e.playQueue.setVisible(),
                e.modal.isOpened || e.modal.open();
            },
            hidePlayQueue() {
              (e.mode = null), e.playQueue.setInvisible();
            },
            isModeActive: (t) => e.mode === t,
            reset() {
              e.mode = null;
            },
          })),
        F = u.V5.model("QualitySettings", { modal: A.KL });
      var W = i(37184),
        Q = i(55975),
        G = i(82036),
        Y = i(14386),
        Z = i(89287),
        q = i(48507),
        K = i.n(q),
        H = i(80766),
        X = {
          352: (e) => {
            e.exports = H;
          },
          810: (e) => {
            e.exports = y;
          },
        },
        J = {};
      function $(e) {
        var t = J[e];
        if (void 0 !== t) return t.exports;
        var i = (J[e] = { exports: {} });
        return X[e](i, i.exports, $), i.exports;
      }
      var ee = {};
      (() => {
        Object.defineProperty(ee, "__esModule", { value: !0 }),
          (ee.useDebouncedToggle = void 0);
        let e = $(352),
          t = $(810);
        ee.useDebouncedToggle = (i) => {
          let { delay: a, initialState: n, throttleTimeout: l } = i,
            r = (0, t.useRef)(null),
            [o, s] = (0, t.useState)(!!n),
            c = (0, t.useMemo)(
              () =>
                (0, e.throttle)(() => {
                  s(!n),
                    r.current && window.clearTimeout(r.current),
                    (r.current = window.setTimeout(() => {
                      s(!!n);
                    }, a));
                }, l),
              [a, n, l],
            ),
            d = (0, t.useCallback)(() => {
              s(!!n), r.current && window.clearTimeout(r.current);
            }, [n]);
          return (
            (0, t.useEffect)(
              () => () => {
                r.current && window.clearTimeout(r.current);
              },
              [],
            ),
            { state: o, handleDebouncedToggle: c, reset: d }
          );
        };
      })(),
        ee.__esModule;
      var et = ee.useDebouncedToggle,
        ei = i(2319),
        ea = i(81469);
      let en = () => {
          var e;
          let {
              fullscreenPlayer: {
                playQueue: { updateTracks: t },
              },
            } = (0, C.oR4)(),
            i = (0, C.R$C)(),
            [a, n] = (0, x.useState)(),
            [l, r] = (0, x.useState)(),
            [o, s] = (0, x.useState)(),
            { state: c, handleDebouncedToggle: d } = et({
              delay: 600,
              throttleTimeout: 600,
            }),
            { state: u, handleDebouncedToggle: m } = et({
              delay: 600,
              throttleTimeout: 600,
            }),
            _ = (0, x.useCallback)(() => {
              var e;
              let a = null == i ? void 0 : i.state.queueState.entityList.value,
                n = null == i ? void 0 : i.state.queueState.index.value,
                l = null == i ? void 0 : i.state.queueState.order.value,
                r =
                  null == i
                    ? void 0
                    : null === (e = i.state.currentContext.value) ||
                        void 0 === e
                      ? void 0
                      : e.data.type;
              a && "number" == typeof n && l && r && t(a, n, l, r);
            }, [i, t]),
            v = (0, x.useCallback)(() => {
              var e;
              let t = null == i ? void 0 : i.state.queueState.index.value,
                o =
                  null == i
                    ? void 0
                    : null === (e = i.state.currentContext.value) ||
                        void 0 === e
                      ? void 0
                      : e.data.type;
              if ("number" == typeof t && "number" == typeof a) {
                let e = t - a,
                  i = o !== l;
                e > 0 || i ? (d(), s(i ? 1 : e)) : e < 0 && (m(), s(e));
              }
              n(t), r(o);
            }, [
              m,
              d,
              l,
              a,
              null == i
                ? void 0
                : null === (e = i.state.currentContext.value) || void 0 === e
                  ? void 0
                  : e.data.type,
              null == i ? void 0 : i.state.queueState.index.value,
            ]);
          (0, x.useEffect)(() => {
            let e =
              null == i
                ? void 0
                : i.state.queueState.index.onChange(() => {
                    _(), v();
                  });
            return () => {
              null == e || e();
            };
          }, [v, _, null == i ? void 0 : i.state.queueState.index]),
            (0, x.useEffect)(() => {
              let e =
                  null == i ? void 0 : i.state.queueState.shuffle.onChange(_),
                t =
                  null == i
                    ? void 0
                    : i.state.queueState.entityList.onChange(_),
                a = null == i ? void 0 : i.state.queueState.order.onChange(_);
              return () => {
                null == e || e(), null == t || t(), null == a || a();
              };
            }, [
              _,
              null == i ? void 0 : i.state.queueState.entityList,
              null == i ? void 0 : i.state.queueState.index,
              null == i ? void 0 : i.state.queueState.order,
              null == i ? void 0 : i.state.queueState.shuffle,
            ]);
          let p = (0, x.useMemo)(() => {
              let e = 56 * (o || 1);
              return {
                "--play-queue-transition-duration-s": "".concat(0.6, "s"),
                "--now-playing-title-height-px": "".concat(80, "px"),
                "--next-in-title-height-px": "".concat(52, "px"),
                "--track-height-px": "".concat(56, "px"),
                "--move-to-top-start-position": "".concat(e, "px"),
                "--move-from-top-start-position": "".concat(e - 132, "px"),
                "--move-to-bottom-start-position": "".concat(e, "px"),
                "--move-from-bottom-start-position": "".concat(
                  e + 52 + 80,
                  "px",
                ),
                "--move-from-top-now-playing-block-start-position": "".concat(
                  e - 80,
                  "px",
                ),
                "--move-from-bottom-now-playing-block-start-position":
                  "".concat(e + 52, "px"),
              };
            }, [o]),
            y = 1 === Math.abs(null != o ? o : 0);
          return {
            style: p,
            contextValue: {
              isMovingForward: c,
              isMovingBackward: u,
              difference: null != o ? o : 0,
              isSingleTrackSwitch: y,
            },
          };
        },
        el = (0, x.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
        er = () => (0, x.useContext)(el);
      var eo = i(1991),
        es = i.n(eo),
        ec = i(44006);
      let ed = (0, p.Pi)((e) => {
          let { children: t } = e,
            {
              fullscreenPlayer: {
                playQueue: { itemsKeys: i, isDragAndDropEnabled: a },
              },
            } = (0, C.oR4)();
          return a
            ? (0, _.jsx)(ec.Fo, { items: i, strategy: ec.qw, children: t })
            : t;
        }),
        eu = (e) => {
          let {
              fullscreenPlayer: {
                playQueue: { trackMap: t },
              },
            } = (0, C.oR4)(),
            i = (0, C.R$C)(),
            a = null == i ? void 0 : i.state.queueState.entityList.value,
            n = null == a ? void 0 : a[e];
          if (!n) return null;
          let {
              context: { data: l },
            } = n,
            r = t.get(String(n.entity.data.meta.id));
          return r
            ? {
                track: r,
                playContextParams: {
                  contextData: l,
                  queueParams: { index: e },
                },
              }
            : null;
        };
      var em = i(16384),
        e_ = i.n(em);
      let ev = (0, p.Pi)(
          (0, x.forwardRef)((e, t) => {
            let { children: i, "data-index": a, ...n } = e,
              {
                isDragging: l,
                listeners: r,
                setNodeRef: o,
                transform: s,
                transition: c,
                attributes: d,
              } = (0, ec.nB)({ id: String(a) }),
              u = (0, x.useCallback)(
                (e) => {
                  o(e), "function" == typeof t && t(e);
                },
                [t, o],
              ),
              m = {
                transition: c,
                "--translate-y": s ? "".concat(Math.round(s.y), "px") : void 0,
              };
            return (0, _.jsx)("div", {
              ref: u,
              "data-index": a,
              style: m,
              ...n,
              className: e_().root,
              children: (0, _.jsx)("div", {
                ref: t,
                className: (0, v.W)(e_().inner, { [e_().dragging]: l }),
                ...r,
                ...d,
                children: i,
              }),
            });
          }),
        ),
        ep = (e) => {
          let {
              index: t,
              isDragAndDropEnabled: i,
              className: a,
              isRemoveEnabled: n = !1,
            } = e,
            l = eu(t),
            r = null == l ? void 0 : l.track,
            o = null == l ? void 0 : l.playContextParams,
            s = (0, R.OC)(null != r ? r : null, R.h0.REMOVE, [t]),
            c = (0, x.useMemo)(
              () =>
                r && o
                  ? (0, _.jsx)(L.O2, {
                      track: r,
                      playContextParams: o,
                      className: a,
                      withDNDBlock: i,
                      handleRemove: n ? s : void 0,
                      withSecondaryColor: !0,
                    })
                  : null,
              [a, s, i, n, o, r],
            );
          return c
            ? i
              ? (0, _.jsx)(ev, { "data-index": t, children: c })
              : c
            : null;
        };
      var ex = i(20586),
        ey = i.n(ex),
        eh = i(43998),
        ef = i(1312),
        eb = i.n(ef);
      let eg = () => {
        let { formatMessage: e } = (0, W.Z)();
        return (0, _.jsxs)("div", {
          className: eb().root,
          children: [
            (0, _.jsx)(eh.Paper, {
              className: eb().iconWrapper,
              radius: "xs",
              children: (0, _.jsx)(G.Icon, {
                variant: "repeat",
                size: "xs",
                "aria-label": e({ id: "play-queue.repeat-list" }),
              }),
            }),
            (0, _.jsx)(h.Z, { id: "play-queue.repeat-list" }),
          ],
        });
      };
      var eC = i(60383),
        eN = i(98),
        ek = i(55897),
        ej = i(52416);
      let eI = (e) =>
        !!(
          e &&
          "object" == typeof e &&
          ("playlistUuid" in e || "playlistTitle" in e)
        );
      ((n = c || (c = {})).Artist = "artist"),
        (n.Playlist = "playlist"),
        (n.Album = "album"),
        (n.Track = "track");
      let eS = (e, t) => {
          let i = (0, eN.x)(t)
            ? null == t
              ? void 0
              : t.data.parentContext
            : null;
          if (i)
            switch (e) {
              case c.Artist:
                return "/artist/".concat(null == i ? void 0 : i.data.meta.id);
              case c.Playlist:
                var a;
                if (!eI(null == i ? void 0 : i.data.meta)) return;
                return "/playlists/".concat(
                  null == i
                    ? void 0
                    : null === (a = i.data.meta) || void 0 === a
                      ? void 0
                      : a.playlistUuid,
                );
              case c.Album:
                return "/album/".concat(null == i ? void 0 : i.data.meta.id);
              default:
                return;
            }
        },
        eA = (e, t) =>
          t && e ? t : (0, _.jsx)(h.Z, { id: "entity-names.my-vibe" }),
        eT = (e, t) => {
          let i = (0, eN.x)(t)
            ? null == t
              ? void 0
              : t.data.parentContext
            : null;
          switch (e) {
            case c.Artist:
              return (0, _.jsx)(h.Z, {
                id: "play-queue.now-playing-my-wave-by-artist",
              });
            case c.Playlist:
              return (0, _.jsx)(h.Z, {
                id: "play-queue.now-playing-my-wave-by-playlist",
              });
            case c.Album:
              if ((null == i ? void 0 : i.data.type) === ej.V.PODCAST)
                return (0, _.jsx)(h.Z, {
                  id: "play-queue.now-playing-my-wave-by-podcast",
                });
              return (0, _.jsx)(h.Z, {
                id: "play-queue.now-playing-my-wave-by-album",
              });
            case c.Track:
              return (0, _.jsx)(h.Z, {
                id: "play-queue.now-playing-my-wave-by-track",
              });
            default:
              return (0, _.jsx)(h.Z, { id: "play-queue.now-playing" });
          }
        },
        eP = () => {
          var e, t, i, a, n, l, r, o, s;
          let {
              sonataState: { entityMeta: c },
              vibe: d,
            } = (0, C.oR4)(),
            u = (0, C.R$C)(),
            m = null == u ? void 0 : u.state.currentContext.value,
            v = null == m ? void 0 : m.data.meta,
            p = (0, x.useMemo)(() => {
              var e, t, i;
              switch (null == m ? void 0 : m.data.type) {
                case T.A.Vibe:
                  return eS(
                    null == d
                      ? void 0
                      : null === (e = d.meta) || void 0 === e
                        ? void 0
                        : e.type,
                    m,
                  );
                case T.A.Artist:
                  return "/artist/".concat(
                    null == c
                      ? void 0
                      : null === (t = c.mainArtist) || void 0 === t
                        ? void 0
                        : t.id,
                  );
                case T.A.Playlist:
                  if (!eI(v)) return;
                  return "/playlists/".concat(
                    null == v ? void 0 : v.playlistUuid,
                  );
                case T.A.Album:
                  return "/album/".concat(
                    null == c
                      ? void 0
                      : null === (i = c.mainAlbum) || void 0 === i
                        ? void 0
                        : i.id,
                  );
                default:
                  return;
              }
            }, [
              m,
              v,
              null == c
                ? void 0
                : null === (e = c.mainAlbum) || void 0 === e
                  ? void 0
                  : e.id,
              null == c
                ? void 0
                : null === (t = c.mainArtist) || void 0 === t
                  ? void 0
                  : t.id,
              null == d
                ? void 0
                : null === (i = d.meta) || void 0 === i
                  ? void 0
                  : i.type,
            ]),
            y = (0, x.useMemo)(() => {
              var e, t, i, a, n;
              switch (null == m ? void 0 : m.data.type) {
                case T.A.Vibe:
                  return eA(
                    null == d
                      ? void 0
                      : null === (e = d.meta) || void 0 === e
                        ? void 0
                        : e.type,
                    null == d
                      ? void 0
                      : null === (t = d.meta) || void 0 === t
                        ? void 0
                        : t.title,
                  );
                case T.A.Artist:
                  return (
                    (null === (i = m.data.meta.artist) || void 0 === i
                      ? void 0
                      : i.name) ||
                    (null == c
                      ? void 0
                      : null === (a = c.mainArtist) || void 0 === a
                        ? void 0
                        : a.name)
                  );
                case T.A.Playlist:
                  if (!eI(v)) return;
                  return null == v ? void 0 : v.title;
                case T.A.Album:
                  return null == c
                    ? void 0
                    : null === (n = c.mainAlbum) || void 0 === n
                      ? void 0
                      : n.title;
                case T.A.Various:
                  return (0, _.jsx)(h.Z, { id: "play-queue.now-playing" });
                default:
                  return (0, _.jsx)(h.Z, { id: "entity-names.my-vibe" });
              }
            }, [
              v,
              null == m ? void 0 : m.data.type,
              null === (a = m.data.meta.artist) || void 0 === a
                ? void 0
                : a.name,
              null == c
                ? void 0
                : null === (n = c.mainAlbum) || void 0 === n
                  ? void 0
                  : n.title,
              null == c
                ? void 0
                : null === (l = c.mainArtist) || void 0 === l
                  ? void 0
                  : l.name,
              null == d
                ? void 0
                : null === (r = d.meta) || void 0 === r
                  ? void 0
                  : r.title,
              null == d
                ? void 0
                : null === (o = d.meta) || void 0 === o
                  ? void 0
                  : o.type,
            ]),
            f = (0, x.useMemo)(() => {
              switch (null == m ? void 0 : m.data.type) {
                case T.A.Vibe:
                  var e;
                  return eT(
                    null == d
                      ? void 0
                      : null === (e = d.meta) || void 0 === e
                        ? void 0
                        : e.type,
                    m,
                  );
                case T.A.Artist:
                  return (0, _.jsx)(h.Z, {
                    id: "play-queue.now-playing-from-artist-popular-tracks",
                  });
                case T.A.Playlist:
                  return (0, _.jsx)(h.Z, {
                    id: "play-queue.now-playing-from-playlist",
                  });
                case T.A.Album:
                  if (null == c ? void 0 : c.isPodcast)
                    return (0, _.jsx)(h.Z, {
                      id: "play-queue.now-playing-from-podcast",
                    });
                  return (0, _.jsx)(h.Z, {
                    id: "play-queue.now-playing-from-album",
                  });
                default:
                  return;
              }
            }, [
              m,
              null == c ? void 0 : c.isPodcast,
              null == d
                ? void 0
                : null === (s = d.meta) || void 0 === s
                  ? void 0
                  : s.type,
            ]),
            b = (0, x.useMemo)(
              () =>
                (0, ek.d)(m)
                  ? (0, _.jsx)(h.Z, { id: "entity-names.my-vibe" })
                  : y,
              [y, m],
            );
          return {
            url: p,
            title: y,
            subTitle: f,
            vibeBlockTitle: b,
            vibeBlockSubTitle: (0, x.useMemo)(() => {
              switch (null == m ? void 0 : m.data.type) {
                case T.A.Artist:
                  return (0, _.jsx)(h.Z, {
                    id: "play-queue.my-wave-by-artist",
                  });
                case T.A.Playlist:
                  return (0, _.jsx)(h.Z, {
                    id: "play-queue.my-wave-by-playlist",
                  });
                case T.A.Album:
                  return (0, _.jsx)(h.Z, { id: "play-queue.my-wave-by-album" });
                default:
                  return;
              }
            }, [null == m ? void 0 : m.data.type]),
          };
        };
      var ew = i(97520),
        eE = i.n(ew);
      let eM = (0, p.Pi)(() => {
          let e = (0, C.R$C)(),
            { vibeBlockTitle: t, vibeBlockSubTitle: i } = eP(),
            a = (0, x.useCallback)(
              (t) => {
                (0, eC.m)(t, eE().ripple), null == e || e.moveForward();
              },
              [e],
            );
          return (0, _.jsxs)("div", {
            className: eE().root,
            onClick: a,
            children: [
              (0, _.jsx)(b.Image, {
                src: "/_next/static/media/vibeCover.c55d574d.png",
                className: eE().vibeCover,
                "aria-hidden": !0,
              }),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(g.Caption, {
                    variant: "div",
                    size: "m",
                    className: eE().title,
                    children: t,
                  }),
                  (0, _.jsx)(g.Caption, {
                    variant: "div",
                    size: "m",
                    className: eE().vibeTitle,
                    children: i,
                  }),
                ],
              }),
            ],
          });
        }),
        eL = (0, p.Pi)(() => {
          let {
              fullscreenPlayer: {
                playQueue: {
                  afterTracksIds: e,
                  isVibeBlockShowed: t,
                  isContextRepeatBlockShowed: i,
                  isDragAndDropEnabled: a,
                  currentIndex: n,
                },
              },
              experiments: l,
            } = (0, C.oR4)(),
            r = l.checkExperiment(C.peG.WebNextPlayQueueRemove, "on"),
            {
              isMovingForward: o,
              isMovingBackward: s,
              difference: c,
              isSingleTrackSwitch: d,
            } = er(),
            u = n - c,
            m = (0, x.useId)(),
            p = (0, x.useMemo)(
              () => (i ? (0, _.jsx)(eg, {}) : t ? (0, _.jsx)(eM, {}) : null),
              [i, t],
            );
          return (0, _.jsxs)("div", {
            className: ey().root,
            children: [
              (0, _.jsx)(g.Caption, {
                variant: "div",
                size: "m",
                className: (0, v.W)(ey().title, { [ey().title_withDnD]: a }),
                children: (0, _.jsx)(h.Z, { id: "play-queue.next-in" }),
              }),
              (0, _.jsx)(ed, {
                children: (0, _.jsxs)("div", {
                  className: (0, v.W)(ey().animatedContent, {
                    [ey().animatedContent_moveToTop]: o,
                    [ey().animatedContent_moveFromTop]: s && !d,
                    [ey().animatedContent_moveFromTopSingleTrack]: s && d,
                  }),
                  children: [
                    null == e
                      ? void 0
                      : e.map((e) =>
                          e === u
                            ? (0, _.jsx)(
                                "div",
                                {
                                  className: ey().prevTrack,
                                  children: (0, _.jsx)(
                                    ep,
                                    {
                                      index: e,
                                      isDragAndDropEnabled: a,
                                      isRemoveEnabled: r,
                                    },
                                    e,
                                  ),
                                },
                                m,
                              )
                            : (0, _.jsx)(
                                ep,
                                {
                                  index: e,
                                  isDragAndDropEnabled: a,
                                  className: ey().track,
                                  isRemoveEnabled: r,
                                },
                                e,
                              ),
                        ),
                    p,
                  ],
                }),
              }),
            ],
          });
        });
      var eR = i(27289),
        eB = i.n(eR);
      let eV = (0, p.Pi)((e) => {
          let { forwardRef: t, scrollToNowPlayingBlock: i } = e,
            {
              fullscreenPlayer: {
                playQueue: {
                  beforeTracksIds: a,
                  isDragAndDropEnabled: n,
                  currentIndex: l,
                },
              },
            } = (0, C.oR4)();
          (0, x.useEffect)(() => {
            i();
            let e = new ResizeObserver(() => i());
            return (
              "function" != typeof t &&
                (null == t ? void 0 : t.current) &&
                e.observe(t.current),
              () => {
                e.disconnect();
              }
            );
          }, [t, i]);
          let {
              isMovingForward: r,
              isMovingBackward: o,
              difference: s,
              isSingleTrackSwitch: c,
            } = er(),
            d = l - s,
            u = (0, x.useId)();
          return (0, _.jsx)("div", {
            className: eB().root,
            ref: t,
            children: (0, _.jsx)(ed, {
              children: (0, _.jsx)("div", {
                className: (0, v.W)(eB().animatedContent, {
                  [eB().animatedContent_moveToBottom]: o,
                  [eB().animatedContent_moveFromBottom]: r && !c,
                  [eB().animatedContent_moveFromBottomSingleTrack]: r && c,
                }),
                children:
                  null == a
                    ? void 0
                    : a.map((e) =>
                        e === d
                          ? (0, _.jsx)(
                              "div",
                              {
                                className: eB().prevTrack,
                                children: (0, _.jsx)(
                                  ep,
                                  { index: e, isDragAndDropEnabled: n },
                                  e,
                                ),
                              },
                              u,
                            )
                          : (0, _.jsx)(
                              ep,
                              { index: e, isDragAndDropEnabled: n },
                              e,
                            ),
                      ),
              }),
            }),
          });
        }),
        eO = (0, x.forwardRef)((e, t) =>
          (0, _.jsx)(eV, { forwardRef: t, ...e }),
        );
      var eD = i(71582),
        ez = i(73484),
        eU = i(26670),
        eF = i(63588),
        eW = i.n(eF);
      let eQ = (e) => {
          let { index: t } = e,
            i = eu(t),
            a = null == i ? void 0 : i.track,
            n = null == i ? void 0 : i.playContextParams;
          return a && n
            ? (0, _.jsx)("div", {
                className: eW().root,
                children: (0, _.jsx)(L.O2, {
                  track: a,
                  playContextParams: n,
                  draggingClassName: eW().dots,
                  className: eW().noHoverItem,
                  withDNDBlock: !0,
                  isDragging: !0,
                  withSecondaryColor: !0,
                }),
              })
            : null;
        },
        eG = (0, p.Pi)((e) => {
          let { children: t } = e,
            {
              fullscreenPlayer: {
                playQueue: { isDragAndDropEnabled: i },
              },
            } = (0, C.oR4)(),
            {
              activeId: a,
              handleDragStart: n,
              handleDragCancel: l,
              sensors: r,
            } = (0, C.iMz)(),
            o = (0, x.useCallback)((e) => {
              let { active: t, over: i } = e;
              if (!t.id || !(null == i ? void 0 : i.id)) return;
            }, []),
            s = (0, x.useMemo)(() => {
              if (a)
                return (0, eU.createPortal)(
                  (0, _.jsx)(eD.y9, {
                    dropAnimation: { duration: 0 },
                    children: (0, _.jsx)(eQ, { index: Number(a) }),
                  }),
                  window.document.body,
                );
            }, [a]);
          return i
            ? (0, _.jsxs)(eD.LB, {
                sensors: r,
                collisionDetection: eD.pE,
                onDragStart: n,
                onDragEnd: o,
                onDragCancel: l,
                modifiers: [ez.DL],
                children: [t, s],
              })
            : t;
        });
      var eY = i(9096),
        eZ = i(87281),
        eq = i.n(eZ);
      let eK = (0, p.Pi)(() => {
        let {
            fullscreenPlayer: {
              modal: e,
              playQueue: { isDragAndDropEnabled: t },
            },
          } = (0, C.oR4)(),
          { url: i, title: a, subTitle: n } = eP(),
          l = (0, x.useCallback)(() => {}, []),
          r = (0, x.useCallback)(() => {
            e.close();
          }, [e]),
          o = (0, eY.ik)(l, r),
          s = (0, x.useMemo)(() => {
            let e = (0, _.jsx)(g.Heading, {
              variant: "h2",
              size: "m",
              weight: "bold",
              lineClamp: 1,
              className: (0, v.W)(eq().heading, {
                [eq().heading_withOffset]: !n,
              }),
              children: a,
            });
            return i
              ? (0, _.jsx)(N.rU, {
                  className: eq().title,
                  containerClassName: eq().linkContainer,
                  textClassName: eq().linkText,
                  icon: (0, _.jsx)(G.Icon, {
                    className: eq().titleIcon,
                    size: "xs",
                    variant: "arrowRight",
                  }),
                  iconPosition: "right",
                  href: i,
                  onClick: o,
                  children: e,
                })
              : e;
          }, [o, n, a, i]);
        return (0, _.jsxs)("div", {
          className: (0, v.W)(eq().root, { [eq().root_withDnD]: t }),
          children: [
            (0, _.jsx)(g.Caption, {
              variant: "div",
              size: "m",
              className: eq().subTitle,
              children: n,
            }),
            s,
          ],
        });
      });
      var eH = i(9191),
        eX = i.n(eH);
      let eJ = (0, p.Pi)(() => {
          var e, t;
          let { from: i } = (0, C.MhG)(),
            {
              fullscreenPlayer: {
                playQueue: { currentIndex: a, isDragAndDropEnabled: n },
              },
              sonataState: { entityMeta: l },
            } = (0, C.oR4)(),
            { isMovingForward: r, isMovingBackward: o } = er(),
            s = (0, C.R$C)(),
            c =
              null == s
                ? void 0
                : null === (t = s.state.currentContext) || void 0 === t
                  ? void 0
                  : null === (e = t.value) || void 0 === e
                    ? void 0
                    : e.data;
          if (!c || !l) return null;
          let d = { contextData: { ...c, from: i }, queueParams: { index: a } };
          return (0, _.jsxs)("div", {
            className: eX().root,
            children: [
              (0, _.jsx)(eK, {}),
              (0, _.jsx)(L.O2, {
                track: l,
                playContextParams: d,
                className: (0, v.W)(eX().track, eX().important, {
                  [eX().track_withDnD]: n,
                  [eX().track_moveFromTop]: o,
                  [eX().track_moveFromBottom]: r,
                }),
                withSecondaryColor: !0,
              }),
            ],
          });
        }),
        e$ = () => {
          let { style: e, contextValue: t } = en(),
            i = (0, x.useRef)(null),
            a = (0, x.useRef)(null),
            {
              state: n,
              handleDebouncedToggle: l,
              reset: r,
            } = et({ delay: 1e4, throttleTimeout: 2e3 }),
            o = (0, x.useCallback)(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "instant";
              if (a.current && i.current) {
                let t = a.current.clientHeight;
                i.current.scrollTo({ top: t, behavior: e });
              }
            }, []);
          return (
            (0, x.useEffect)(() => {
              n || (o("smooth"), r());
            }, [n, r, o]),
            (0, x.useEffect)(() => {
              let e = i.current;
              return (
                null == e || e.addEventListener("scroll", l),
                () => {
                  null == e || e.removeEventListener("scroll", l);
                }
              );
            }, [l]),
            (0, _.jsx)(eG, {
              children: (0, _.jsx)(el.Provider, {
                value: t,
                children: (0, _.jsx)("div", {
                  className: es().root,
                  style: e,
                  children: (0, _.jsx)("div", {
                    className: es().content,
                    ref: i,
                    children: (0, _.jsxs)("div", {
                      className: es().scrollContent,
                      children: [
                        (0, _.jsx)(eO, { ref: a, scrollToNowPlayingBlock: o }),
                        (0, _.jsx)(eJ, {}),
                        (0, _.jsx)(eL, {}),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        },
        e0 = (0, x.createContext)({}),
        e1 = () => (0, x.useContext)(e0);
      var e5 = i(60515),
        e2 = i.n(e5),
        e4 = i(4932),
        e3 = i.n(e4);
      let e9 = (e) => (e + 1) * 0.275,
        e8 = (0, p.Pi)((e) => {
          let { className: t, icon: i } = e,
            { sonataState: a } = (0, C.oR4)(),
            n = (0, x.useCallback)(
              (e) => {
                let t = {
                  animationDelay: "".concat(e9(e), "s"),
                  animationDuration: "".concat(1.1, "s, ").concat(1.1, "s"),
                };
                return i
                  ? (0, x.cloneElement)(i, {
                      className: (0, v.W)(e3().element, e3().element_withIcon, {
                        [e3().element_paused]: a.isPaused,
                      }),
                      key: e,
                      style: t,
                    })
                  : (0, _.jsx)(
                      "div",
                      {
                        className: (0, v.W)(
                          e3().element,
                          e3().element_withDefaultElement,
                          { [e3().element_paused]: a.isPaused },
                        ),
                        style: t,
                      },
                      e,
                    );
              },
              [i, a],
            );
          return (0, _.jsx)("div", {
            className: (0, v.W)(e3().root, t),
            children: Array.from({ length: 4 }, (e, t) => n(t)),
          });
        });
      var e6 = i(98192),
        e7 = i(93836);
      ((l = d || (d = {})).INTRO = "intro"),
        (l.PREPARE = "prepare"),
        (l.PLAYING = "playing"),
        (l.OUTRO = "outro");
      let te = () => {
        var e;
        let t = (0, C.R$C)(),
          [i, a] = (0, x.useState)(
            null !==
              (e =
                null == t
                  ? void 0
                  : t.state.playerState.progress.value.position) && void 0 !== e
              ? e
              : 0,
          ),
          n = (0, x.useCallback)((e) => {
            a(e);
          }, []);
        return (
          (0, x.useEffect)(() => {
            let e =
              null == t
                ? void 0
                : t.state.playerState.progress.onChange(() => {
                    a(t.state.playerState.progress.value.position);
                  });
            return () => {
              null == e || e();
            };
          }, [t]),
          { progressPosition: i, setProgressPosition: n }
        );
      };
      var tt = i(86348);
      let ti = (e) => {
          let { onSetProgressEventChange: t } = e,
            i = (0, C.R$C)();
          (0, x.useEffect)(() => {
            let e =
              null == i
                ? void 0
                : i.state.playerState.event.onChange((e) => {
                    e === tt.KX.SET_PROGRESS && t();
                  });
            return () => {
              null == e || e();
            };
          }, [t, i]);
        },
        ta = (e) => {
          let { position: t } = e,
            {
              fullscreenPlayer: { syncLyrics: i },
            } = (0, C.oR4)();
          return {
            state: (0, x.useMemo)(() => {
              let { startSec: e, endSec: a } = i;
              return e && e >= 3 && e - t > 0 && e - t <= 3
                ? d.PREPARE
                : e && e > t
                  ? d.INTRO
                  : a && t > a
                    ? d.OUTRO
                    : d.PLAYING;
            }, [t, i]),
          };
        };
      var tn = i(78805),
        tl = i.n(tn);
      let tr = (0, p.Pi)(() => {
        var e, t, i;
        let { formatMessage: a } = (0, W.Z)(),
          {
            fullscreenPlayer: { syncLyrics: n },
          } = (0, C.oR4)();
        return (0, _.jsxs)("footer", {
          className: tl().root,
          children: [
            n.hasWriters &&
              (0, _.jsx)(g.Caption, {
                className: tl().writers,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.authors" },
                  {
                    authors:
                      null === (e = n.writers) || void 0 === e
                        ? void 0
                        : e.join(", "),
                  },
                ),
              }),
            (null === (t = n.major) || void 0 === t ? void 0 : t.prettyName) &&
              (0, _.jsx)(g.Caption, {
                className: tl().major,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.source" },
                  {
                    source:
                      null === (i = n.major) || void 0 === i
                        ? void 0
                        : i.prettyName,
                  },
                ),
              }),
          ],
        });
      });
      var to = i(18978),
        ts = i.n(to);
      let tc = (e) => {
        let { className: t, text: i } = e;
        return (0, _.jsx)("span", {
          className: (0, v.W)(ts().root, t),
          children: i,
        });
      };
      var td = i(5358),
        tu = i.n(td);
      let tm = (e) => {
          let t = (0, x.useRef)(0),
            {
              fullscreenPlayer: { syncLyrics: i },
              sonataState: { contextId: a, contextType: n },
            } = (0, C.oR4)();
          (0, x.useEffect)(() => {
            !i.hasLyricsViewed &&
              null !== e &&
              "visible" === document.visibilityState &&
              (t.current++,
              t.current >= 2 && i.sendViews({ contextId: a, contextType: n }));
          }, [e, a, n, i]);
        },
        t_ = (0, p.Pi)((e) => {
          var t, i;
          let {
              state: a,
              progressPosition: n,
              shouldShowScrolledLyrics: l,
              setProgressPosition: r,
            } = e,
            o = (0, C.R$C)(),
            s = (0, e7.oc)(),
            {
              fullscreenPlayer: { syncLyrics: c },
            } = (0, C.oR4)(),
            u = (0, x.useCallback)(
              (e) => (t) => {
                l &&
                  (t.stopPropagation(),
                  r(e + 0.01),
                  null == o ||
                    o.setProgress(e + 0.01).catch(() => {
                      r(n);
                    }));
              },
              [n, r, l, o],
            ),
            m = c.getActiveLineIndex(n);
          return (
            tm(m),
            (0, x.useEffect)(() => {
              if (!l) {
                if (
                  ((a === d.INTRO || a === d.PREPARE) && s.slideTo(0),
                  a === d.OUTRO)
                ) {
                  var e;
                  s.slideTo(
                    Number(
                      null === (e = c.lines) || void 0 === e
                        ? void 0
                        : e.length,
                    ),
                  );
                }
                null !== m && s.slideTo(m + 1);
              }
            }, [
              m,
              l,
              a,
              s,
              null === (t = c.lines) || void 0 === t ? void 0 : t.length,
            ]),
            null === (i = c.lines) || void 0 === i
              ? void 0
              : i.map((e, t) => {
                  var i;
                  return (0, _.jsx)(
                    e7.o5,
                    {
                      onClickCapture: u(e.fromSec),
                      className: (0, v.W)(tu().line, {
                        [tu().line_last]:
                          t ===
                            Number(
                              null === (i = c.lines) || void 0 === i
                                ? void 0
                                : i.length,
                            ) -
                              1 && !l,
                        [tu().line_active]: t === m && !l,
                      }),
                      ...(0, Q.BA)(Q.QM.player.SYNC_LYRICS_LINE),
                      children: (0, _.jsx)(tc, { text: e.text }),
                    },
                    e.key,
                  );
                })
          );
        });
      t_.displayName = "SwiperSlide";
      let tv = { forceToAxis: !0 },
        tp = (0, p.Pi)(() => {
          let {
              fullscreenPlayer: { syncLyrics: e },
              settings: { isMobile: t },
            } = (0, C.oR4)(),
            { progressPosition: i, setProgressPosition: a } = te(),
            { state: n } = ta({ position: i }),
            {
              scrollerClassName: l,
              footerClassName: r,
              counterClassName: o,
            } = e1(),
            {
              state: s,
              handleDebouncedToggle: c,
              reset: u,
            } = et({ delay: 3e3, throttleTimeout: 300 }),
            {
              state: m,
              handleDebouncedToggle: p,
              reset: y,
            } = et({ delay: 3e3, throttleTimeout: 300 }),
            h = (0, x.useCallback)(() => {
              m || c();
            }, [c, m]),
            f = (0, x.useCallback)(() => {
              s && u(), p();
            }, [p, u, s]),
            b = (0, x.useCallback)(
              (e) => {
                switch (e.code) {
                  case C.DtV.KEY_L:
                  case C.DtV.KEY_J:
                  case C.DtV.ARROW_LEFT:
                  case C.DtV.ARROW_RIGHT:
                    c();
                }
              },
              [c],
            ),
            g = (0, x.useMemo)(
              () =>
                n === d.PREPARE ? Math.ceil(Number(e.startSec) - i) : null,
              [i, n, e.startSec],
            ),
            N = (0, x.useMemo)(
              () =>
                n === d.PREPARE
                  ? (0, _.jsx)(tc, { className: tu().counterLine, text: g })
                  : n === d.INTRO
                    ? (0, _.jsx)(e8, {})
                    : null,
              [g, n],
            );
          return (
            ti({ onSetProgressEventChange: y }),
            (0, x.useEffect)(
              () => (
                window.addEventListener("keydown", b),
                () => {
                  window.removeEventListener("keydown", b);
                }
              ),
              [b],
            ),
            (0, x.useEffect)(
              () => (
                window.addEventListener("mousemove", h),
                () => {
                  window.removeEventListener("mousemove", h);
                }
              ),
              [h],
            ),
            (0, _.jsxs)(e7.tq, {
              className: (0, v.W)(
                tu().root,
                {
                  [tu()["root_".concat(n)]]: !m,
                  [tu().root_withVisibleUpperLyrics]: s,
                  [tu().root_withVisibleScrolledLyrics]: m,
                },
                l,
              ),
              modules: [e6.Gk, e6.Rv],
              slidesPerView: "auto",
              spaceBetween: 32,
              direction: "vertical",
              mousewheel: tv,
              freeMode: !0,
              onScroll: f,
              onTouchMove: t ? f : void 0,
              allowTouchMove: t,
              children: [
                (0, _.jsx)(e7.o5, {
                  className: (0, v.W)(tu().counter, o),
                  children: N,
                }),
                (0, _.jsx)(t_, {
                  setProgressPosition: a,
                  shouldShowScrolledLyrics: m,
                  state: n,
                  progressPosition: i,
                }),
                (0, _.jsx)(e7.o5, {
                  className: r,
                  children: (0, _.jsx)(tr, {}),
                }),
              ],
            })
          );
        }),
        tx = (0, p.Pi)((e) => {
          let {
              className: t,
              counterClassName: i,
              footerClassName: a,
              scrollerClassName: n,
              contentClassName: l,
              loaderClassName: r,
            } = e,
            o = (0, x.useRef)(null),
            {
              sonataState: { entityMeta: s },
              fullscreenPlayer: { syncLyrics: c, hideSyncLyrics: d },
            } = (0, C.oR4)();
          (0, x.useEffect)(() => {
            c.currentTrackId !== (null == s ? void 0 : s.id) &&
              (null == s ? void 0 : s.isSyncLyricsAvailable) &&
              c.getData(null == s ? void 0 : s.id);
          }, [
            null == s ? void 0 : s.isSyncLyricsAvailable,
            null == s ? void 0 : s.id,
            c,
          ]);
          let u = (0, x.useMemo)(
              () =>
                c.isLoaded
                  ? (0, _.jsx)(tp, {})
                  : ((c.isRejected || c.hasInvalidLyrics) && d(),
                    (0, _.jsx)(e8, { className: r })),
              [c.isLoaded, c.isRejected, c.hasInvalidLyrics, c.setInvisible, r],
            ),
            m = (0, x.useMemo)(
              () => ({
                counterClassName: i,
                scrollerClassName: n,
                footerClassName: a,
              }),
              [i, a, n],
            );
          return (0, _.jsx)(e0.Provider, {
            value: m,
            children: (0, _.jsx)("div", {
              ref: o,
              className: (0, v.W)(e2().root, t),
              children: (0, _.jsx)("div", {
                className: (0, v.W)(e2().content, l),
                ...(0, Q.BA)(Q.QM.player.SYNC_LYRICS_CONTENT),
                children: u,
              }),
            }),
          });
        });
      var ty = i(64809),
        th = i(42089),
        tf = i.n(th);
      let tb = (0, p.Pi)((e) => {
          let {
              className: t,
              variant: i = "text",
              iconSize: a,
              iconClassName: n,
              withRipple: l = !1,
              size: r = "s",
              forwardRef: o,
              children: s,
              color: c,
              disabled: d = !1,
            } = e,
            { formatMessage: u } = (0, W.Z)(),
            {
              fullscreenPlayer: {
                isPlayQueueMode: m,
                hidePlayQueue: p,
                showPlayQueue: y,
              },
            } = (0, C.oR4)(),
            h = (0, x.useCallback)(() => (m ? p() : y()), [p, m, y]),
            {
              scaleAnimation: b,
              unscaleAnimation: g,
              handleAnimationEnd: N,
              handleClick: k,
            } = (0, ty.l)({ shouldStartFromUnscale: m, onClick: h });
          return (0, _.jsx)(f.z, {
            className: (0, v.W)(
              tf().root,
              { [tf().animation_scaled]: b, [tf().animation_unscaled]: g },
              t,
            ),
            color: c,
            onAnimationEnd: N,
            withRipple: l,
            variant: i,
            size: r,
            radius: "xxxl",
            "aria-label": u({ id: "play-queue.title" }),
            "aria-pressed": m,
            onClick: k,
            icon: (0, _.jsx)(G.Icon, {
              size: a,
              className: (0, v.W)(tf().icon, n, { [tf().icon_active]: m }),
              variant: "playQueue",
            }),
            ref: o,
            disabled: d,
            ...(0, Q.BA)(Q.QM.player.FULLSCREEN_PLAYER_QUEUE_BUTTON),
            children: s,
          });
        }),
        tg = (0, x.forwardRef)((e, t) =>
          (0, _.jsx)(tb, { forwardRef: t, ...e }),
        );
      var tC = i(3260),
        tN = i.n(tC);
      let tk = (0, p.Pi)((e) => {
          let {
              className: t,
              variant: i = "text",
              iconSize: a,
              iconClassName: n,
              withRipple: l = !1,
              size: r = "s",
              forwardRef: o,
              children: s,
              color: c,
              disabled: d = !1,
            } = e,
            { formatMessage: u } = (0, W.Z)(),
            {
              fullscreenPlayer: {
                isSyncLyricsMode: m,
                hideSyncLyrics: p,
                showSyncLyrics: y,
              },
            } = (0, C.oR4)(),
            h = (0, x.useCallback)(() => (m ? p() : y()), [p, m, y]),
            {
              scaleAnimation: b,
              unscaleAnimation: g,
              handleAnimationEnd: N,
              handleClick: k,
            } = (0, ty.l)({ shouldStartFromUnscale: m, onClick: h }),
            j = ""
              .concat(u({ id: "interface-actions.open-sync-lyrics" }), " ")
              .concat(u({ id: "warning-messages.can-break-accessibility" }));
          return (0, _.jsx)(f.z, {
            className: (0, v.W)(
              tN().root,
              { [tN().animation_scaled]: b, [tN().animation_unscaled]: g },
              t,
            ),
            color: c,
            onAnimationEnd: N,
            withRipple: l,
            variant: i,
            size: r,
            radius: "xxxl",
            "aria-label": j,
            "aria-pressed": m,
            onClick: k,
            icon: (0, _.jsx)(G.Icon, {
              size: a,
              className: (0, v.W)(tN().icon, n, { [tN().icon_active]: m }),
              variant: "syncLyrics",
            }),
            ref: o,
            disabled: d,
            ...(0, Q.BA)(Q.QM.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
            children: s,
          });
        }),
        tj = (0, x.forwardRef)((e, t) =>
          (0, _.jsx)(tk, { forwardRef: t, ...e }),
        );
      var tI = i(75648),
        tS = i.n(tI);
      let tA = (e) => {
        var t;
        let { isContextMenuVisible: i, setIsContextMenuVisible: a } = e,
          { sonataState: n, user: l, experiments: r } = (0, C.oR4)(),
          { entityMeta: o } = n,
          { handleDebouncedToggle: s } = et({
            delay: 1500,
            throttleTimeout: 300,
          }),
          c =
            n.canSpeed &&
            ((null == o ? void 0 : o.isNonMusic) ||
              (null == o
                ? void 0
                : null === (t = o.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isNonMusic)),
          d = (0, R.SB)(o),
          u = (0, x.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          m = (0, x.useMemo)(() => {
            if (
              !(null == o ? void 0 : o.isRemoved) &&
              (null == o ? void 0 : o.isAvailable)
            )
              return (0, _.jsx)(L.hz, {
                track: o,
                open: i,
                onOpenChange: a,
                placement: "left",
                icon: (0, _.jsx)(G.Icon, { variant: "more", size: "m" }),
                className: (0, v.W)(tS().menuButton, {
                  [tS().menuButton_active]: i,
                }),
                wrapperClassName: tS().menuWrapper,
                onClick: u,
                size: "l",
                ...(0, Q.BA)(Q.QM.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
              });
          }, [o, u, i, a]),
          p = (0, x.useMemo)(() => {
            if (null == o ? void 0 : o.isSyncLyricsAvailable)
              return (0, _.jsx)(tj, {
                className: tS().syncLyricsButton,
                iconSize: "m",
                size: "l",
                variant: "default",
                color: "secondary",
                disabled: !l.isAuthorized,
              });
          }, [null == o ? void 0 : o.isSyncLyricsAvailable, l.isAuthorized]),
          y = (0, x.useMemo)(() => {
            if (r.checkExperiment(C.peG.WebNextPlayQueue, "on"))
              return (0, _.jsx)(tg, {
                className: tS().playQueueButton,
                iconSize: "m",
                size: "l",
                variant: "default",
                color: "secondary",
                disabled: !l.isAuthorized,
              });
          }, [r, l.isAuthorized]);
        return (
          (0, x.useEffect)(
            () => (
              window.addEventListener("mousemove", s),
              () => {
                window.removeEventListener("mousemove", s);
              }
            ),
            [s],
          ),
          (0, _.jsxs)("div", {
            className: (0, v.W)(tS().root, { [tS().root_visible]: i }),
            children: [
              y,
              (0, _.jsx)(P.WP, {
                className: tS().sonataControls,
                isMobile: !1,
                entityMeta: o,
                isFullscreen: !0,
              }),
              m,
              p,
              (0, _.jsxs)("div", {
                className: tS().bottomRightButtonsWrapper,
                children: [
                  c &&
                    (0, _.jsx)(N.t5, {
                      className: tS().speedButton,
                      size: "l",
                      iconSize: "m",
                      isIconCentered: !0,
                    }),
                  (0, _.jsx)(N.FM, {
                    fallback: (0, _.jsx)(N.dJ, {
                      className: tS().likeButton,
                      isLiked: null == o ? void 0 : o.isLiked,
                      onClick: d,
                      iconSize: "m",
                      size: "l",
                      variant: "default",
                      color: "secondary",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var tT = i(31523),
        tP = i.n(tT);
      let tw = (e) => {
        let { className: t, children: i, coverUri: a } = e;
        return (0, _.jsxs)(eh.Paper, {
          radius: "m",
          className: (0, v.W)(tP().root, t),
          ...(0, Q.BA)(Q.QM.player.FULLSCREEN_PLAYER_POSTER_CONTENT),
          children: [
            (0, _.jsx)(N.BE, {
              className: tP().cover,
              src: a,
              size: 400,
              fit: "cover",
              withAvatarReplace: !0,
            }),
            i,
          ],
        });
      };
      var tE = i(30946),
        tM = i.n(tE),
        tL = i(8046);
      let tR = {
          enter: tM().additionalContent_enter,
          enterActive: tM().additionalContent_enter_active,
          exit: tM().additionalContent_exit,
          exitActive: tM().additionalContent_exit_active,
          appear: tM().additionalContent_enter,
          appearActive: tM().additionalContent_enter_active,
        },
        tB = (e) => {
          let {
              isModeActive: t,
              shouldDisableInsetTransition: i,
              children: a,
            } = e,
            n = (0, x.useRef)(null);
          return (0, _.jsx)(tL.Z, {
            in: t,
            nodeRef: n,
            timeout: 800,
            unmountOnExit: !0,
            appear: !0,
            classNames: tR,
            children: (0, _.jsx)("div", {
              ref: n,
              className: (0, v.W)(tM().additionalContent, {
                [tM().additionalContent_withDisabledInsetTransition]: i,
              }),
              children: a,
            }),
          });
        },
        tV = (0, p.Pi)((e) => {
          var t;
          let { isContextMenuVisible: i, setIsContextMenuVisible: a } = e,
            { state: n, handleDebouncedToggle: l } = et({
              delay: 150,
              throttleTimeout: 100,
            }),
            {
              sonataState: { entityMeta: r },
              fullscreenPlayer: o,
              experiments: c,
            } = (0, C.oR4)(),
            { state: d, toggleTrue: u } = (0, ei.O)(!1),
            m =
              (null == r ? void 0 : r.isTrackPodcast) ||
              (null == r
                ? void 0
                : null === (t = r.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            p = null == r ? void 0 : r.isTrackAudiobook,
            y = c.checkExperiment(C.peG.WebNextTrackModal, "on"),
            h = {
              [s.PLAY_QUEUE]: {
                component: (0, _.jsx)(e$, {}),
                isActive: o.isPlayQueueMode,
              },
              [s.SYNC_LYRICS]: {
                component: (0, _.jsx)(tx, {
                  className: tM().syncLyrics,
                  loaderClassName: tM().syncLyricsLoader,
                  contentClassName: tM().syncLyricsContent,
                  scrollerClassName: tM().syncLyricsScroller,
                  counterClassName: tM().syncLyricsCounter,
                  footerClassName: tM().syncLyricsFooter,
                }),
                isActive: o.isSyncLyricsMode,
              },
            },
            f = (0, x.useMemo)(
              () =>
                r
                  ? p
                    ? (0, _.jsx)(L.MG, {
                        hasLineClamp: !1,
                        className: (0, v.W)(tM().meta, {
                          [tM().meta_isSplitMode]: o.isSplitMode,
                        }),
                        titleContainerClassName: tM().title,
                        track: r,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !y,
                        textClassName: (0, v.W)(
                          tM().nonMusicAuthors,
                          tM().ellipsis,
                        ),
                      })
                    : m
                      ? (0, _.jsx)(L.wT, {
                          className: (0, v.W)(tM().meta, {
                            [tM().meta_isSplitMode]: o.isSplitMode,
                          }),
                          titleContainerClassName: tM().title,
                          track: r,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                          textClassName: tM().nonMusicAuthors,
                        })
                      : (0, _.jsx)(L.ko, {
                          hasLineClamp: !1,
                          className: (0, v.W)(tM().meta, {
                            [tM().meta_isSplitMode]: o.isSplitMode,
                          }),
                          titleContainerClassName: tM().title,
                          track: r,
                          withSecondaryColor: !0,
                          withAlbumLink: !y,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                          artistsClassName: tM().artists,
                          textClassName: tM().ellipsis,
                        })
                  : null,
              [r, null == r ? void 0 : r.id, m, p, o.isSplitMode, y],
            );
          return (
            (0, x.useEffect)(
              () => (
                window.addEventListener("resize", l),
                () => {
                  window.removeEventListener("resize", l);
                }
              ),
              [l],
            ),
            (0, x.useEffect)(() => {
              o.isSplitMode && u();
            }, [o.isSplitMode, o.mode, u]),
            (0, x.useEffect)(
              () => () => {
                o.reset();
              },
              [o],
            ),
            (0, _.jsxs)("div", {
              className: tM().root,
              children: [
                (0, _.jsxs)("div", {
                  className: (0, v.W)(tM().fullscreenContent, {
                    [tM().fullscreenContent_withDisabledInsetTransition]: n,
                    [tM().fullscreenContent_enter]: o.isSplitMode,
                    [tM().fullscreenContent_leave]: !o.isSplitMode && d,
                  }),
                  children: [
                    (0, _.jsx)(tw, {
                      className: (0, v.W)(tM().poster, tM().important),
                      coverUri: null == r ? void 0 : r.coverUri,
                      children: (0, _.jsx)(tA, {
                        setIsContextMenuVisible: a,
                        isContextMenuVisible: i,
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      className: tM().info,
                      children: [
                        f,
                        (0, _.jsx)(ea.Y, {
                          className: tM().sliderContainer,
                          sliderClassName: tM().slider,
                          disabled: !r,
                          isMobile: !1,
                          isFullscreen: o.isSplitMode,
                        }),
                      ],
                    }),
                  ],
                }),
                Object.entries(h).map((e) => {
                  let [t, { component: i, isActive: a }] = e;
                  return (0, _.jsx)(
                    tB,
                    {
                      isModeActive: a,
                      shouldDisableInsetTransition: n,
                      children: i,
                    },
                    t,
                  );
                }),
              ],
            })
          );
        }),
        tO = (0, p.Pi)(() => {
          let { formatMessage: e } = (0, W.Z)(),
            { theme: t } = (0, C.FgM)(),
            [i, a] = (0, x.useState)(!1),
            {
              currentTrackInfo: { modal: n },
              sonataState: { entityMeta: l },
              fullscreenPlayer: r,
              fullscreenVideoPlayer: o,
              advert: s,
            } = (0, C.oR4)(),
            c = (0, x.useMemo)(
              () => ({
                "--player-average-color-background": (0, L.Er)(
                  t,
                  null == l ? void 0 : l.averageColor,
                ),
              }),
              [null == l ? void 0 : l.averageColor, t],
            );
          (0, x.useEffect)(() => {
            s.isAdvertShown && r.modal.close();
          }, [s.isAdvertShown, r.modal]);
          let d = !i && !n.isOpened && !o.modal.isOpened;
          return (0, _.jsxs)(Y.u, {
            className: (0, v.W)(K().root, K().important),
            open: r.modal.isOpened,
            onOpenChange: d ? r.modal.onOpenChange : void 0,
            onClose: r.modal.close,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: c,
            contentClassName: K().modalContent,
            closeOnOutsidePress: !1,
            ...(0, Q.BA)(Q.QM.player.FULLSCREEN_PLAYER_MODAL),
            children: [
              (0, _.jsx)("header", {
                className: K().header,
                children: (0, _.jsx)(f.z, {
                  className: K().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "m",
                  icon: (0, _.jsx)(G.Icon, {
                    variant: "arrowDown",
                    size: "xs",
                  }),
                  onClick: r.modal.close,
                  "aria-label": e({ id: "interface-actions.close" }),
                  ...(0, Q.BA)(Q.QM.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                }),
              }),
              (0, _.jsx)(tV, {
                setIsContextMenuVisible: a,
                isContextMenuVisible: i,
              }),
              (0, _.jsx)(Z.Notification, {
                className: K().notification,
                enableMultiContainer: !0,
                containerId: C.W$x.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, _.jsx)(Z.Notification, {
                className: K().notification,
                enableMultiContainer: !0,
                containerId: C.W$x.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var tD = i(29044),
        tz = i.n(tD),
        tU = i(42982),
        tF = i(92154),
        tW = i(22455),
        tQ = i(60521),
        tG = i(3283);
      let tY = () => {
        let e = (0, C.z$f)(),
          t = (0, C.wLl)(),
          { hash: i } = (0, C.RQn)(),
          { pageId: a } = (0, C.lVB)();
        return (0, x.useCallback)(
          (n, l) => {
            if (!e || !a || !C.x3Y[a] || !i) return;
            let r = {
                hash: i,
                pageId: C.x3Y[a],
                propertyKey: "sound_quality",
                propertyValueNew: n,
                propertyValueOld: l,
              },
              o = (0, C.KOr)({ params: r, logger: t, context: tY.name });
            o && (0, tG.pq)(e.evgenInstance, o);
          },
          [e, i, t, a],
        );
      };
      var tZ = i(40199),
        tq = i.n(tZ);
      let tK = (e) => {
        let { closeToast: t, onOpenQualitySettingsMenu: i, message: a } = e,
          { formatMessage: n } = (0, W.Z)(),
          l = (0, x.useCallback)(() => {
            i(), null == t || t();
          }, [t, i]),
          r = (0, x.useMemo)(
            () =>
              (0, _.jsxs)("div", {
                className: tq().message,
                children: [
                  (0, _.jsx)(g.Caption, {
                    variant: "div",
                    size: "m",
                    children: a,
                  }),
                  (0, _.jsx)(f.z, {
                    className: tq().changeButton,
                    onClick: l,
                    variant: "text",
                    withRipple: !1,
                    "aria-label": n({ id: "interface-actions.change" }),
                    children: (0, _.jsx)(g.Caption, {
                      variant: "div",
                      size: "m",
                      children: (0, _.jsx)(h.Z, {
                        id: "interface-actions.change",
                      }),
                    }),
                  }),
                ],
              }),
            [n, l, a],
          );
        return (0, _.jsx)(N.Yj, {
          closeToast: t,
          cover: (0, _.jsx)(G.Icon, {
            className: tq().icon,
            size: "xs",
            variant: "settings",
          }),
          message: r,
        });
      };
      var tH = i(18155),
        tX = i.n(tH);
      let tJ = [
          {
            type: tU.n.HIGH_QUALITY,
            text: (0, _.jsx)(h.Z, {
              id: "player-actions.audio-quality-maximum",
            }),
            qualityMessageId: "player-actions.audio-quality-maximum",
          },
          {
            type: tU.n.BALANCED,
            text: (0, _.jsx)(h.Z, {
              id: "player-actions.audio-quality-optimal",
            }),
            qualityMessageId: "player-actions.audio-quality-optimal",
          },
          {
            type: tU.n.EFFICIENT,
            text: (0, _.jsx)(h.Z, {
              id: "player-actions.audio-quality-economical",
            }),
            qualityMessageId: "player-actions.audio-quality-economical",
          },
        ],
        t$ = {
          [tU.n.HIGH_QUALITY]: (0, _.jsx)(h.Z, {
            id: "player-actions.audio-quality-maximum-description",
          }),
          [tU.n.BALANCED]: (0, _.jsx)(h.Z, {
            id: "player-actions.audio-quality-optimal-description",
          }),
          [tU.n.EFFICIENT]: (0, _.jsx)(h.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
        },
        t0 = (0, p.Pi)((e) => {
          let {
            onOpenChange: t,
            open: i,
            placement: a,
            size: n,
            referenceClassName: l,
            icon: r,
            referenceLabel: o,
          } = e;
          (0, C.ZP4)(i);
          let s = (0, x.useId)(),
            { formatMessage: c } = (0, W.Z)(),
            { notify: d } = (0, C.d$W)(),
            u = (0, C.uK4)(),
            m = (0, C.jpI)(),
            p = u.get(C.V0J),
            {
              sonataState: y,
              user: b,
              experiments: g,
              settings: { isMobile: k },
              quality: j,
            } = (0, C.oR4)(),
            I = (0, tQ.ji)(),
            S = (0, C.SqQ)(),
            A =
              g.checkExperiment(C.peG.WebNextEqualizer, "on") &&
              (null == m ? void 0 : m.equalizer),
            T = tY(),
            { state: P, setState: w, toggleTrue: E } = (0, ei.O)(!1),
            M = (0, x.useCallback)(() => {
              null == t || t(!0);
            }, [t]),
            L = (0, x.useCallback)(
              (e) => {
                T(e, y.quality),
                  y.setQuality(e),
                  null == S || S.setQuality(e),
                  p.set(C.BUb.YmPlayerQuality, e, { expires: 365 });
              },
              [S, y, p, T],
            ),
            R = (0, x.useCallback)(
              (e) => {
                let t = c({ id: e }).toLowerCase();
                return (0, _.jsx)(h.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [c],
            ),
            B = (0, x.useCallback)(
              (e, t) => () => {
                if (y.quality === e) return;
                L(e);
                let i = R(t);
                d(
                  (0, _.jsx)(tK, { onOpenQualitySettingsMenu: M, message: i }),
                  { containerId: C.W$x.INFO },
                );
              },
              [R, M, d, y.quality, L],
            ),
            V = (0, x.useCallback)(
              (e) => {
                let {
                  selectedItemIcon: t,
                  type: i,
                  qualityMessageId: a,
                  ariaSelected: n,
                  text: l,
                } = e;
                return (e) => {
                  let { isPopoverEnabled: r, popoverText: o } = e;
                  return (0, _.jsx)(tF.sN, {
                    isBlock: !0,
                    disabled: r,
                    className: (0, v.W)(tX().item, tX().expandedItem),
                    iconPosition: "right",
                    icon: t,
                    onClick: B(i, a),
                    role: "option",
                    "aria-selected": n,
                    children: (0, _.jsxs)("span", {
                      className: tX().itemWrapper,
                      children: [
                        (0, _.jsxs)("span", {
                          className: tX().item_option,
                          children: [l, " ", (0, _.jsx)(tW.y, { children: o })],
                        }),
                        (0, _.jsx)("span", {
                          className: (0, v.W)(
                            tX().item_option,
                            tX().itemSubTitle,
                          ),
                          children: t$[i],
                        }),
                      ],
                    }),
                  });
                };
              },
              [B],
            ),
            O = !b.hasPlus,
            D = (0, x.useMemo)(
              () =>
                tJ.map((e) => {
                  let { type: t, text: i, qualityMessageId: a } = e,
                    n =
                      t === y.quality
                        ? (0, _.jsx)(G.Icon, { variant: "check" })
                        : null,
                    l = t === y.quality;
                  return (0, _.jsx)(
                    N.pl,
                    {
                      isNested: !0,
                      isEnabled: O && !k,
                      placement: "left",
                      textVariant: "highQuality",
                      renderChildren: V({
                        selectedItemIcon: n,
                        type: t,
                        qualityMessageId: a,
                        ariaSelected: l,
                        text: i,
                      }),
                    },
                    t,
                  );
                }),
              [y.quality, O, k, V],
            ),
            z = (0, x.useMemo)(
              () => ({
                listClassName: (0, v.W)(tX().root, tX().root_withNewQuality, {
                  [tX().root_withEqualizer]: A,
                }),
                menuClassName: (0, v.W)({ [tX().menuContent]: !k }),
              }),
              [A, k],
            ),
            U = (0, x.useMemo)(() => {
              if (A && !k)
                return (0, _.jsx)(
                  tQ.Gv,
                  {
                    isExpanded: I.isEnabled,
                    isDisabled: !1,
                    className: tX().equalizer,
                    title: c({ id: "equalizer.title" }),
                  },
                  s,
                );
            }, [I.isEnabled, s, c, A, k]),
            F = (0, x.useCallback)(
              (e) => {
                let { isPopoverEnabled: s } = e;
                if (!k) {
                  let e = s ? E : j.modal.open;
                  return (0, _.jsx)(f.z, {
                    className: (0, v.W)({
                      [tX().button_active]: j.modal.isOpened,
                    }),
                    radius: "round",
                    color: "secondary",
                    size: n,
                    icon: r,
                    variant: "text",
                    onClick: e,
                    "aria-label": c({ id: "player-actions.audio-quality" }),
                    withRipple: !1,
                    ...(0, Q.BA)(Q.QM.player.SOUND_QUALITY_BUTTON),
                  });
                }
                let d = s ? w : t;
                return (0, _.jsx)(tF.v2, {
                  wrapperClassName: l,
                  size: n,
                  icon: r,
                  placement: a,
                  open: i,
                  onOpenChange: d,
                  ariaLabel: c({ id: "player-actions.audio-quality" }),
                  footer: U,
                  label: o,
                  variant: "text",
                  ...z,
                  containerProps: (0, Q.BA)(
                    Q.QM.player.QUALITY_SETTINGS_CONTEXT_MENU,
                  ),
                  isMobile: k,
                  lockScroll: !k,
                  ...(0, Q.BA)(Q.QM.player.SOUND_QUALITY_BUTTON),
                  children: D,
                });
              },
              [
                k,
                w,
                t,
                l,
                n,
                r,
                a,
                i,
                c,
                U,
                o,
                z,
                D,
                E,
                j.modal.open,
                j.modal.isOpened,
              ],
            );
          return (0, _.jsx)(N.Ld, {
            isEnabled: !b.isAuthorized,
            isOpened: P,
            onOpenChange: w,
            placement: "top",
            textVariant: "changeQuality",
            renderChildren: F,
          });
        }),
        t1 = (0, p.Pi)((e) => {
          var t, i, a, n;
          let { className: l, onSyncLyricsButtonClick: r } = e,
            {
              sonataState: o,
              settings: { isLandscape: s },
              fullscreenPlayer: { isSyncLyricsMode: c },
            } = (0, C.oR4)(),
            { formatMessage: d } = (0, W.Z)(),
            [u, m] = (0, x.useState)(!1),
            p = null === o.entityMeta,
            y =
              (null === (t = o.entityMeta) || void 0 === t
                ? void 0
                : t.isNonMusic) ||
              (null === (a = o.entityMeta) || void 0 === a
                ? void 0
                : null === (i = a.mainAlbum) || void 0 === i
                  ? void 0
                  : i.isNonMusic),
            h = o.canSpeed && y,
            b = (0, x.useMemo)(() => {
              var e;
              if (y) return;
              let t = ""
                .concat(d({ id: "interface-actions.open-sync-lyrics" }), " ")
                .concat(d({ id: "warning-messages.can-break-accessibility" }));
              return (0, _.jsx)(f.z, {
                className: (0, v.W)(tz().syncLyricsButton, {
                  [tz().syncLyricsButton_active]: c,
                }),
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled:
                  !(null === (e = o.entityMeta) || void 0 === e
                    ? void 0
                    : e.isSyncLyricsAvailable) || s,
                withRipple: !1,
                withHover: !1,
                "aria-label": t,
                icon: (0, _.jsx)(G.Icon, { variant: "syncLyrics", size: "xs" }),
                onClick: r,
              });
            }, [
              d,
              y,
              c,
              r,
              s,
              null === (n = o.entityMeta) || void 0 === n
                ? void 0
                : n.isSyncLyricsAvailable,
            ]);
          return (0, _.jsx)("div", {
            className: (0, v.W)(tz().footer, l),
            children: (0, _.jsxs)("div", {
              className: tz().footerContainer,
              children: [
                (p || o.canChangeRepeatMode) &&
                  (0, _.jsx)(P.$Z, {
                    isDisabled: p,
                    repeatMode: o.repeatMode,
                    variant: "text",
                  }),
                h &&
                  (0, _.jsx)(N.t5, {
                    size: "xxxs",
                    iconSize: "xs",
                    isIconCentered: !0,
                  }),
                (0, _.jsx)(t0, {
                  open: u,
                  onOpenChange: m,
                  icon: (0, _.jsx)(G.Icon, { variant: "settings", size: "xs" }),
                  size: "xxxs",
                }),
                b,
                (p || o.canShuffle) &&
                  (0, _.jsx)(P.P4, {
                    isDisabled: p,
                    shuffle: o.shuffle,
                    variant: "text",
                  }),
              ],
            }),
          });
        });
      var t5 = i(72936),
        t2 = i.n(t5);
      let t4 = {
          enter: t2().coverWrapper_enter,
          enterActive: t2().coverWrapper_enter_active,
          exit: t2().coverWrapper_exit,
          exitActive: t2().coverWrapper_exit_active,
        },
        t3 = (0, p.Pi)((e) => {
          var t;
          let { className: i } = e,
            a = (0, x.useRef)(null),
            [n, l] = (0, x.useState)(!1),
            {
              state: r,
              handleDebouncedToggle: o,
              reset: s,
            } = et({ delay: 7e3, throttleTimeout: 0 }),
            {
              fullscreenPlayer: {
                isSplitMode: c,
                isSyncLyricsMode: d,
                showSyncLyrics: u,
                hideSyncLyrics: m,
                isPlayQueueMode: p,
                syncLyrics: y,
              },
              sonataState: { entityMeta: h },
              settings: { isLandscape: f },
              user: b,
              experiments: g,
            } = (0, C.oR4)(),
            k =
              (null == h ? void 0 : h.isTrackPodcast) ||
              (null == h
                ? void 0
                : null === (t = h.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            j = null == h ? void 0 : h.isTrackAudiobook,
            I = (r || !c || f) && !p,
            S = g.checkExperiment(C.peG.WebNextTrackModal, "on"),
            A = (0, x.useCallback)(() => {
              d && !f && (r ? s() : o());
            }, [d, r, s, o, f]),
            T = (0, x.useCallback)(() => {
              d && !f && r && o();
            }, [o, d, r, f]),
            w = (0, x.useCallback)(() => {
              if (null == h ? void 0 : h.isSyncLyricsAvailable)
                return d ? m() : u();
            }, [null == h ? void 0 : h.isSyncLyricsAvailable, m, d, u]),
            E = (0, x.useMemo)(
              () =>
                h
                  ? j
                    ? (0, _.jsx)(L.MG, {
                        textClassName: t2().metaText,
                        track: h,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !S,
                      })
                    : k
                      ? (0, _.jsx)(L.wT, {
                          textClassName: t2().metaText,
                          track: h,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                        })
                      : (0, _.jsx)(L.ko, {
                          textClassName: t2().metaText,
                          track: h,
                          withSecondaryColor: !0,
                          withAlbumLink: !S,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                        })
                  : void 0,
              [h, j, k, S],
            );
          return (
            (0, x.useEffect)(() => {
              d && f && y.setInvisible();
            }, [f, d, y]),
            (0, x.useLayoutEffect)(() => {
              d && !f && o();
            }, [o, d, f]),
            (0, _.jsxs)("div", {
              onTouchEnd: T,
              className: (0, v.W)(t2().root, i),
              children: [
                (0, _.jsx)("div", {
                  className: t2().content,
                  children: (0, _.jsxs)("div", {
                    className: t2().wrapper,
                    children: [
                      (0, _.jsxs)("div", {
                        className: (0, v.W)(t2().infoBlock, {
                          [t2().infoBlock_withExpandedSyncLyrics]:
                            !r && d && !f,
                        }),
                        children: [
                          (0, _.jsxs)("div", {
                            onClick: A,
                            className: (0, v.W)(t2().contentContainer, {
                              [t2().contentContainer_withSplitMode]: c,
                            }),
                            children: [
                              d &&
                                !f &&
                                (0, _.jsx)(tx, {
                                  className: t2().syncLyrics,
                                  scrollerClassName: t2().syncLyricsScroller,
                                  contentClassName: t2().syncLyricsContent,
                                  loaderClassName: t2().syncLyricsLoader,
                                  footerClassName: t2().syncLyricsFooter,
                                  counterClassName: t2().syncLyricsCounter,
                                }),
                              p && (0, _.jsx)(e$, {}),
                              (0, _.jsx)(tL.Z, {
                                in: !c || (f && d),
                                nodeRef: a,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: t4,
                                children: (0, _.jsx)(eh.Paper, {
                                  ref: a,
                                  radius: "m",
                                  className: t2().coverWrapper,
                                  children: (0, _.jsx)(N.BE, {
                                    className: t2().cover,
                                    src: null == h ? void 0 : h.coverUri,
                                    size: 400,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          !p &&
                            (0, _.jsxs)("div", {
                              className: t2().trackInfo,
                              children: [
                                !r &&
                                  d &&
                                  !f &&
                                  (0, _.jsx)(eh.Paper, {
                                    className: t2().trackInfoCoverContainer,
                                    radius: "xs",
                                    children: (0, _.jsx)(N.BE, {
                                      className: t2().trackInfoCover,
                                      src: null == h ? void 0 : h.coverUri,
                                      size: 200,
                                      fit: "cover",
                                      withAvatarReplace: !0,
                                    }),
                                  }),
                                (0, _.jsxs)("div", {
                                  className: t2().metaContainer,
                                  children: [
                                    E,
                                    b.isAuthorized &&
                                      !(null == h ? void 0 : h.isRemoved) &&
                                      (null == h ? void 0 : h.isAvailable) &&
                                      (0, _.jsx)(L.hz, {
                                        className: (0, v.W)(t2().contextMenu, {
                                          [t2().contextMenu_visible]: n,
                                        }),
                                        track: h,
                                        open: n,
                                        onOpenChange: l,
                                        placement: "bottom",
                                        isFullscreenMobile: !0,
                                        size: "xs",
                                        icon: (0, _.jsx)(G.Icon, {
                                          variant: "more",
                                          size: "xxs",
                                        }),
                                        ...(0, Q.BA)(
                                          Q.QM.player
                                            .FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                        ),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      I &&
                        (0, _.jsx)(ea.Y, {
                          className: t2().timeline,
                          disabled: !h,
                          isMobile: !0,
                          isFullscreen: !0,
                          showThumbVariant: "always",
                        }),
                      I &&
                        (0, _.jsx)(P.WP, {
                          className: t2().buttonsBlock,
                          isMobile: !0,
                          entityMeta: h,
                          isFullscreen: !0,
                        }),
                    ],
                  }),
                }),
                I && (0, _.jsx)(t1, { onSyncLyricsButtonClick: w }),
              ],
            })
          );
        });
      var t9 = i(33387),
        t8 = i(44939),
        t6 = i.n(t8);
      let t7 = (e) => {
          let { children: t, className: i } = e,
            a = (0, C.R$C)(),
            { fullscreenPlayer: n } = (0, C.oR4)(),
            { formatMessage: l } = (0, W.Z)(),
            r = (0, x.useRef)(""),
            o = (0, t9.W)((e) => {
              e.stopPropagation(), n.modal.isOpened && n.modal.close();
            }),
            s = (0, x.useMemo)(() => {
              if (a) {
                let t;
                let i = a.state.queueState.currentEntity.value,
                  n = null == i ? void 0 : i.context.data,
                  o = null == n ? void 0 : n.type;
                switch (
                  ((null == i ? void 0 : i.context.data) &&
                    "filterName" in i.context.data &&
                    (t = null == i ? void 0 : i.context.data.filterName),
                  o)
                ) {
                  case "vibe":
                    var e;
                    return null == n
                      ? void 0
                      : null === (e = n.meta.session) || void 0 === e
                        ? void 0
                        : e.wave.name;
                  case "album":
                    return (
                      (r.current = "/album/".concat(
                        null == n ? void 0 : n.meta.id,
                      )),
                      l(
                        { id: "playing-now.album" },
                        { title: null == n ? void 0 : n.meta.title },
                      )
                    );
                  case "playlist":
                    if (
                      ((r.current = "/playlists/".concat(
                        null == n ? void 0 : n.meta.playlistUuid,
                      )),
                      t)
                    )
                      return l(
                        { id: "playing-now.playlist-with-filter" },
                        { title: null == n ? void 0 : n.meta.title, filter: t },
                      );
                    return l(
                      { id: "playing-now.playlist" },
                      { title: null == n ? void 0 : n.meta.title },
                    );
                }
              }
              return null;
            }, [a, l]);
          return (0, _.jsxs)("div", {
            className: (0, v.W)(t6().root, i),
            children: [
              !!s &&
                (0, _.jsxs)("div", {
                  className: t6().textBlock,
                  children: [
                    (0, _.jsx)(g.Caption, {
                      variant: "span",
                      size: "s",
                      weight: "normal",
                      className: t6().subTitle,
                      children: (0, _.jsx)(h.Z, { id: "playing-now.common" }),
                    }),
                    r.current
                      ? (0, _.jsx)(N.rU, {
                          href: r.current,
                          target: "_self",
                          onClick: o,
                          className: t6().link,
                          children: (0, _.jsx)(g.Caption, {
                            variant: "span",
                            size: "m",
                            className: t6().title,
                            lineClamp: 1,
                            children: s,
                          }),
                        })
                      : (0, _.jsx)(g.Caption, {
                          variant: "span",
                          size: "m",
                          className: t6().title,
                          lineClamp: 1,
                          children: s,
                        }),
                  ],
                }),
              t,
            ],
          });
        },
        ie = (0, p.Pi)(() => {
          let { formatMessage: e } = (0, W.Z)(),
            {
              fullscreenPlayer: {
                modal: t,
                showPlayQueue: i,
                isPlayQueueMode: a,
                hidePlayQueue: n,
              },
              experiments: l,
            } = (0, C.oR4)(),
            r = (0, x.useCallback)(() => (a ? n() : i()), [n, a, i]),
            o = (0, x.useMemo)(
              () =>
                l.checkExperiment(C.peG.WebNextPlayQueue, "on")
                  ? (0, _.jsx)(f.z, {
                      className: (0, v.W)(tz().playQueueButton, {
                        [tz().playQueueButton_active]: a,
                      }),
                      radius: "round",
                      size: "s",
                      variant: "text",
                      withRipple: !1,
                      withHover: !1,
                      "aria-label": e({ id: "play-queue.title" }),
                      onClick: r,
                      icon: (0, _.jsx)(G.Icon, {
                        variant: "playQueue",
                        size: "xs",
                      }),
                    })
                  : (0, _.jsx)(N.wx, {
                      title: e({ id: "play-queue.title" }),
                      description: e({ id: "future-feature.message" }),
                      children: (0, _.jsx)(f.z, {
                        radius: "round",
                        size: "s",
                        variant: "text",
                        disabled: !0,
                        withRipple: !1,
                        "aria-hidden": !0,
                        icon: (0, _.jsx)(G.Icon, {
                          variant: "playQueue",
                          size: "xs",
                        }),
                      }),
                    }),
              [l, e, a, r],
            );
          return (0, _.jsxs)("header", {
            className: tz().header,
            children: [
              (0, _.jsx)(f.z, {
                radius: "round",
                color: "secondary",
                size: "s",
                variant: "text",
                icon: (0, _.jsx)(G.Icon, { variant: "arrowDown", size: "xs" }),
                onClick: t.close,
                "aria-label": e({ id: "interface-actions.close" }),
              }),
              (0, _.jsx)(t7, {
                className: tz().headerCenter,
                children: (0, _.jsx)(N.wx, {
                  title: e({ id: "player-actions.cast" }),
                  description: e({ id: "future-feature.message" }),
                  children: (0, _.jsx)(f.z, {
                    className: tz().castButton,
                    radius: "round",
                    size: "s",
                    variant: "text",
                    disabled: !0,
                    withRipple: !1,
                    "aria-label": e({ id: "player-actions.cast" }),
                    icon: (0, _.jsx)(G.Icon, { variant: "cast", size: "xs" }),
                  }),
                }),
              }),
              o,
            ],
          });
        }),
        it = (0, p.Pi)(() => {
          let {
              sonataState: { entityMeta: e },
              fullscreenPlayer: t,
              advert: i,
              settings: { isMobile: a },
            } = (0, C.oR4)(),
            { theme: n } = (0, C.FgM)(),
            l = (0, x.useMemo)(
              () => ({
                "--player-average-color-background": (0, L.Er)(
                  n,
                  null == e ? void 0 : e.averageColor,
                ),
              }),
              [null == e ? void 0 : e.averageColor, n],
            );
          return (
            (0, x.useEffect)(() => {
              i.isAdvertShown && t.modal.close();
            }, [i.isAdvertShown, t.modal]),
            (0, _.jsxs)(Y.u, {
              className: (0, v.W)(tz().root, tz().important),
              open: t.modal.isOpened,
              onOpenChange: t.modal.onOpenChange,
              size: "fullscreen",
              placement: "center",
              showHeader: !1,
              style: l,
              contentClassName: tz().modalContent,
              lockScroll: a,
              children: [
                (0, _.jsx)(ie, {}),
                (0, _.jsx)(t3, {}),
                (0, _.jsx)(Z.Notification, {
                  className: tz().notification,
                  enableMultiContainer: !0,
                  containerId: C.W$x.FULLSCREEN_INFO,
                  position: "bottom-center",
                }),
                (0, _.jsx)(Z.Notification, {
                  className: tz().notification,
                  enableMultiContainer: !0,
                  containerId: C.W$x.FULLSCREEN_ERROR,
                  position: "bottom-center",
                }),
              ],
            })
          );
        }),
        ii = (0, p.Pi)(() => {
          let {
              settings: { isMobileLandscapeHeight: e, layout: t },
            } = (0, C.oR4)(),
            i = t === C.t8m.Mobile;
          return (!i && e) || i ? (0, _.jsx)(it, {}) : (0, _.jsx)(tO, {});
        });
      var ia = i(48455),
        il = i.n(ia);
      let ir = (0, p.Pi)((e) => {
          let { advertData: t } = e,
            {
              settings: { isMobile: i },
            } = (0, C.oR4)(),
            { formatMessage: a } = (0, W.Z)(),
            n = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
            l = (0, x.useCallback)(() => {
              window.open(t.advertiserInfoUrl, "_blank", "noreferrer noopener");
            }, [t.advertiserInfoUrl]);
          return n
            ? (0, _.jsxs)(tF.v2, {
                className: il().contextMenuButton,
                size: "xxs",
                icon: (0, _.jsx)(G.Icon, {
                  size: "xxs",
                  variant: "more",
                  className: il().contextMenuIcon,
                }),
                isMobile: i,
                ariaLabel: a({ id: "interface-actions.context-menu" }),
                children: [
                  t.clientLegalInfo &&
                    (0, _.jsx)(g.Caption, {
                      variant: "div",
                      size: "s",
                      className: il().contextMenuHeader,
                      children: t.clientLegalInfo,
                    }),
                  t.advertiserInfoUrl &&
                    (0, _.jsx)(tF.sN, {
                      onClick: l,
                      icon: (0, _.jsx)(G.Icon, {
                        variant: "info",
                        size: "xxs",
                      }),
                      children: (0, _.jsx)(h.Z, { id: "ads.about-advertiser" }),
                    }),
                ],
              })
            : null;
        }),
        io = (0, p.Pi)((e) => {
          var t, i, a;
          let { className: n } = e,
            { advert: l } = (0, C.oR4)();
          return l.data && l.isAudioAdvert
            ? (0, _.jsx)("div", {
                className: n,
                children: (0, _.jsx)(I, {
                  data: l.data,
                  mediaContent: (0, _.jsxs)("div", {
                    className: il().imageContainer,
                    children: [
                      (0, _.jsx)(b.Image, {
                        className: (0, v.W)(il().image, {
                          [il().image_fallback]: !(null === (t = l.data) ||
                          void 0 === t
                            ? void 0
                            : t.iconSrc),
                        }),
                        "aria-hidden": !0,
                        fit: "cover",
                        src:
                          null === (i = l.data) || void 0 === i
                            ? void 0
                            : i.iconSrc,
                        fallbackIconVariant: "picture",
                        alt: "",
                      }),
                      (0, _.jsx)(b.Image, {
                        className: il().backgroundImage,
                        "aria-hidden": !0,
                        fit: "cover",
                        src:
                          null === (a = l.data) || void 0 === a
                            ? void 0
                            : a.iconSrc,
                        fallbackIconVariant: "picture",
                        alt: "",
                      }),
                      (0, _.jsx)(ir, { advertData: l.data }),
                    ],
                  }),
                  linkClassName: il().linkButton,
                }),
              })
            : null;
        });
      var is = i(3498),
        ic = i.n(is);
      let id = (0, p.Pi)(() => {
        let {
            settings: { isMobile: e },
            sonataState: t,
            experiments: i,
            user: a,
            quality: n,
          } = (0, C.oR4)(),
          l = (0, tQ.ji)(),
          { contentRootRef: r } = (0, C.$Y6)(),
          { formatMessage: o } = (0, W.Z)(),
          s = (0, C.uK4)(),
          { notify: c } = (0, C.d$W)(),
          d = (0, C.jpI)(),
          u = (0, x.useId)(),
          m = (0, C.SqQ)(),
          p = s.get(C.V0J),
          y =
            i.checkExperiment(C.peG.WebNextEqualizer, "on") &&
            (null == d ? void 0 : d.equalizer),
          b = tY(),
          k = (0, x.useCallback)(
            (e) => {
              b(e, t.quality),
                t.setQuality(e),
                null == m || m.setQuality(e),
                p.set(C.BUb.YmPlayerQuality, e, { expires: 365 });
            },
            [m, t, p, b],
          ),
          j = (0, x.useCallback)(
            (e) => {
              let t = o({ id: e }).toLowerCase();
              return (0, _.jsx)(h.Z, {
                id: "notifications-info.quality-changed",
                values: { quality: t },
              });
            },
            [o],
          ),
          I = (0, x.useCallback)(
            (e, i) => () => {
              if (t.quality === e) return;
              n.modal.close(), k(e);
              let a = j(i);
              c(
                (0, _.jsx)(tK, {
                  onOpenQualitySettingsMenu: n.modal.open,
                  message: a,
                }),
                { containerId: C.W$x.INFO },
              );
            },
            [j, c, t.quality, k, n.modal],
          ),
          S = (0, x.useCallback)(
            (e) => {
              let {
                selectedItemIcon: t,
                type: i,
                qualityMessageId: a,
                ariaSelected: n,
                text: l,
              } = e;
              return (e) => {
                let { isPopoverEnabled: r, popoverText: o } = e;
                return (0, _.jsx)(
                  f.z,
                  {
                    isBlock: !0,
                    disabled: r,
                    className: (0, v.W)(
                      tX().item,
                      ic().button,
                      tX().expandedItem,
                    ),
                    iconPosition: "right",
                    icon: t,
                    onClick: I(i, a),
                    role: "option",
                    "aria-selected": n,
                    variant: "text",
                    children: (0, _.jsxs)("span", {
                      className: tX().itemWrapper,
                      children: [
                        (0, _.jsxs)("span", {
                          className: tX().item_option,
                          children: [l, " ", (0, _.jsx)(tW.y, { children: o })],
                        }),
                        (0, _.jsx)("span", {
                          className: (0, v.W)(
                            tX().item_option,
                            tX().itemSubTitle,
                          ),
                          children: t$[i],
                        }),
                      ],
                    }),
                  },
                  i,
                );
              };
            },
            [I],
          );
        (0, x.useEffect)(
          () => () => {
            n.modal.close();
          },
          [n.modal],
        );
        let A = !a.hasPlus,
          T = (0, x.useMemo)(
            () =>
              tJ.map((i) => {
                let { type: a, text: n, qualityMessageId: l } = i,
                  r =
                    a === t.quality
                      ? (0, _.jsx)(G.Icon, { variant: "check" })
                      : null,
                  o = a === t.quality;
                return (0, _.jsx)(
                  N.pl,
                  {
                    isNested: !0,
                    isEnabled: A && !e,
                    placement: "left",
                    textVariant: "highQuality",
                    renderChildren: S({
                      selectedItemIcon: r,
                      type: a,
                      qualityMessageId: l,
                      ariaSelected: o,
                      text: n,
                    }),
                  },
                  a,
                );
              }),
            [t.quality, A, e, S],
          ),
          P = (0, x.useMemo)(() => {
            if (y && !e)
              return (0, _.jsx)(
                tQ.Gv,
                {
                  isExpanded: l.isEnabled,
                  isDisabled: !1,
                  className: (0, v.W)(
                    tX().equalizer,
                    tX().equalizer_withNewQuality,
                  ),
                  title: o({ id: "equalizer.title" }),
                },
                u,
              );
          }, [u, o, e, l.isEnabled, y]);
        return (0, _.jsxs)(Y.u, {
          size: "fitContent",
          placement: e ? "default" : "right",
          open: n.modal.isOpened,
          onOpenChange: n.modal.onOpenChange,
          onClose: n.modal.close,
          className: ic().root,
          contentClassName: ic().modalContent,
          portalNode: e ? null : r,
          showHeader: !1,
          overlayClassName: ic().overlay,
          containerProps: (0, Q.BA)(Q.QM.player.QUALITY_SETTINGS_CONTEXT_MENU),
          children: [
            !e &&
              (0, _.jsxs)(g.Heading, {
                className: (0, v.W)(tX().header, tX().headerWithCloseButton),
                variant: "h4",
                size: "xs",
                weight: "bold",
                children: [
                  (0, _.jsx)(h.Z, { id: "player-actions.audio-quality" }),
                  (0, _.jsx)(f.z, {
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, _.jsx)(G.Icon, { variant: "close", size: "xxs" }),
                    onClick: n.modal.close,
                    "aria-label": o({
                      id: "interface-actions.close-quality-settings",
                    }),
                  }),
                ],
              }),
            T,
            P,
          ],
        });
      });
      var iu = i(72195),
        im = i.n(iu),
        i_ = i(92249),
        iv = i(61177),
        ip = i(48285),
        ix = i.n(ip);
      let iy = (e) => {
          let { className: t, ariaLabel: i, onClick: a, forwardRef: n } = e;
          return (0, _.jsx)("div", {
            ref: n,
            className: (0, v.W)(ix().root, t),
            children: (0, _.jsx)(f.z, {
              className: ix().button,
              radius: "round",
              size: "s",
              color: "secondary",
              withRipple: !1,
              "aria-label": i,
              icon: (0, _.jsx)(G.Icon, { variant: "fullscreen", size: "xs" }),
              onClick: a,
              ...(0, Q.BA)(Q.QM.player.FULLSCREEN_PLAYER_BUTTON),
            }),
          });
        },
        ih = (0, x.forwardRef)((e, t) =>
          (0, _.jsx)(iy, { forwardRef: t, ...e }),
        );
      var ib = i(69323),
        ig = i.n(ib);
      let iC = "player-region",
        iN = (0, p.Pi)((e) => {
          var t;
          let {
              className: i,
              entityMeta: a,
              onLikeClick: n,
              onDislikeClick: onDislikeClick,
            } = e,
            {
              user: l,
              sonataState: r,
              fullscreenPlayer: o,
              experiments: s,
              settings: { isMobileLandscapeHeight: c },
              advert: d,
            } = (0, C.oR4)(),
            { theme: u } = (0, C.FgM)(),
            [m, p] = (0, x.useState)(!1),
            [y, b] = (0, x.useState)(!1),
            { formatMessage: k } = (0, W.Z)(),
            j = r.contextType === T.A.Generative,
            I = !j,
            S = (0, C.RVp)(),
            A = r.canSpeed && S && (null == a ? void 0 : a.isNonMusic),
            w =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            E = null == a ? void 0 : a.isTrackAudiobook,
            M = s.checkExperiment(C.peG.WebNextTrackModal, "on"),
            R = (0, x.useMemo)(() => {
              if (!d.isAdvertShown)
                return {
                  "--player-average-color-background": (0, L.Er)(
                    u,
                    null == a ? void 0 : a.averageColor,
                  ),
                };
            }, [d.isAdvertShown, u, null == a ? void 0 : a.averageColor]),
            B = (0, x.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            V = (0, x.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION"].includes(t.tagName);
                a &&
                  I &&
                  i &&
                  !d.isAdvertShown &&
                  o.showFullscreenPlayerModal();
              },
              [a, o, I, d.isAdvertShown],
            ),
            O = (0, x.useCallback)(
              (e) => {
                let { isPopoverEnabled: t } = e,
                  i = ""
                    .concat(
                      k({ id: "interface-actions.open-sync-lyrics" }),
                      " ",
                    )
                    .concat(
                      k({ id: "warning-messages.can-break-accessibility" }),
                    ),
                  n = t ? void 0 : o.showSyncLyrics;
                return (0, _.jsx)(f.z, {
                  radius: "round",
                  size: "xxxs",
                  variant: "text",
                  disabled:
                    !(null == a ? void 0 : a.isSyncLyricsAvailable) || c,
                  "aria-hidden": !(null == a
                    ? void 0
                    : a.isSyncLyricsAvailable),
                  withRipple: !1,
                  "aria-label": i,
                  icon: (0, _.jsx)(G.Icon, {
                    variant: "syncLyrics",
                    size: "xs",
                  }),
                  onClick: n,
                  ...(0, Q.BA)(
                    Q.QM.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                  ),
                });
              },
              [
                k,
                o.showSyncLyrics,
                null == a ? void 0 : a.isSyncLyricsAvailable,
                c,
              ],
            ),
            D = (0, x.useMemo)(
              () =>
                (null == a ? void 0 : a.isNonMusic) || d.isAdvertShown
                  ? null
                  : (0, _.jsx)(N.Ld, {
                      isEnabled: !l.isAuthorized,
                      placement: "top",
                      textVariant: "sync-lyrics",
                      renderChildren: O,
                    }),
              [
                null == a ? void 0 : a.isNonMusic,
                d.isAdvertShown,
                l.isAuthorized,
                O,
              ],
            ),
            z = (0, x.useCallback)(
              (e) => {
                let { isPopoverEnabled: t } = e,
                  i = t ? void 0 : o.showPlayQueue;
                return (0, _.jsx)(f.z, {
                  radius: "round",
                  size: "xxxs",
                  variant: "text",
                  disabled: !a,
                  withRipple: !1,
                  "aria-label": k({ id: "play-queue.title" }),
                  icon: (0, _.jsx)(G.Icon, {
                    variant: "playQueue",
                    size: "xs",
                  }),
                  onClick: i,
                  ...(0, Q.BA)(Q.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON),
                });
              },
              [a, o.showPlayQueue, k],
            ),
            U = (0, x.useMemo)(
              () =>
                d.isAdvertShown
                  ? null
                  : s.checkExperiment(C.peG.WebNextPlayQueue, "on")
                    ? (0, _.jsx)(N.Ld, {
                        isEnabled: !l.isAuthorized,
                        placement: "top",
                        textVariant: "openQueue",
                        renderChildren: z,
                      })
                    : (0, _.jsx)(N.wx, {
                        title: k({ id: "play-queue.title" }),
                        description: k({ id: "future-feature.message" }),
                        children: (0, _.jsx)(f.z, {
                          radius: "round",
                          size: "xxxs",
                          variant: "text",
                          disabled: !0,
                          "aria-hidden": !0,
                          withRipple: !1,
                          icon: (0, _.jsx)(G.Icon, {
                            variant: "playQueue",
                            size: "xs",
                          }),
                          ...(0, Q.BA)(
                            Q.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                          ),
                        }),
                      }),
              [s, k, d.isAdvertShown, l.isAuthorized, z],
            ),
            F = (0, x.useMemo)(
              () =>
                a
                  ? E
                    ? (0, _.jsx)(L.MG, {
                        explicitSize: "xxxs",
                        track: a,
                        withAuthor: !0,
                        withBookLink: !M,
                        withSecondaryColor: !0,
                      })
                    : w
                      ? (0, _.jsx)(L.wT, {
                          explicitSize: "xxxs",
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, _.jsx)(L.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !M,
                        })
                  : null,
              [a, E, w, M],
            );
          const qualityMap = { lq: "LQ", nq: "NQ", hq: "HQ", lossless: "HQ+" };
          const codecMap = {
            mp3: "MP3",
            "he-aac": "HE-AAC",
            aac: "AAC",
            flac: "FLAC",
            "aac-mp4": "AAC",
            "he-aac-mp4": "HE-AAC",
            "flac-mp4": "FLAC",
          };
          let theState = (0, C.R$C)();
          let [downloadInfo, setDownloadInfo] = (0, x.useState)(
            theState?.state?.queueState?.currentEntity?.value?.entity
              ?.mediaSourceData?.data,
          );
          return (
            (0, x.useEffect)(() => {
              const timer = setTimeout(() => {
                let fDownloadInfo =
                  theState?.state?.queueState?.currentEntity?.value?.entity
                    ?.mediaSourceData?.data;
                if (fDownloadInfo) {
                  setDownloadInfo(fDownloadInfo);
                }
              }, 400);
              return () => {
                null == timer || clearTimeout(timer);
              };
            }),
            (0, _.jsxs)("section", {
              style: R,
              className: (0, v.W)(ig().root, { [ig().root_disabled]: !a }, i),
              onDoubleClick: V,
              "aria-labelledby": iC,
              ...(0, Q.BA)(Q.QM.player.PLAYERBAR_DESKTOP),
              children: [
                (0, _.jsx)(tW.y, {
                  children: (0, _.jsx)(g.Heading, {
                    variant: "h3",
                    id: iC,
                    children: (0, _.jsx)(h.Z, { id: "a11y-regions.player" }),
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: ig().info,
                  children: [
                    (0, _.jsx)("div", {
                      className: ig().infoCard,
                      children:
                        a &&
                        !d.isAdvertShown &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsxs)(eh.Paper, {
                              radius: "s",
                              className: ig().coverContainer,
                              ...(0, Q.BA)(
                                Q.QM.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                              ),
                              children: [
                                (0, _.jsx)(N.BE, {
                                  className: ig().cover,
                                  src: a.coverUri,
                                  size: 100,
                                  fit: "cover",
                                  withAvatarReplace: !0,
                                }),
                                I &&
                                  (0, _.jsxs)(i_.u, {
                                    placement: "top",
                                    offsetOptions: 4,
                                    children: [
                                      (0, _.jsx)(ih, {
                                        ariaLabel: k({
                                          id: "player-actions.fullscreen-button",
                                        }),
                                        onClick: o.showFullscreenPlayerModal,
                                      }),
                                      (0, _.jsx)(i_._v, {
                                        children: (0, _.jsx)(h.Z, {
                                          id: "player-actions.fullscreen",
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: ig().description,
                              children: F,
                            }),
                          ],
                        }),
                    }),
                    (0, _.jsx)("div", {
                      className: ig().infoButtons,
                      onDoubleClick: B,
                      children:
                        a &&
                        !j &&
                        !d.isAdvertShown &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            window.SHOW_DISLIKE_BUTTON()
                              ? (0, _.jsx)(N.Q1, {
                                  className: ig().dislikeButton,
                                  isDisliked: a.isDisliked,
                                  onClick: onDislikeClick,
                                  iconSize: "xs",
                                })
                              : undefined,
                            (0, _.jsx)(N.FM, {
                              fallback: (0, _.jsx)(N.dJ, {
                                className: ig().likeButton,
                                isLiked: a.isLiked,
                                onClick: n,
                                iconSize: "xs",
                              }),
                            }),
                            (0, _.jsx)(L.hz, {
                              track: a,
                              placement: "top",
                              open: m,
                              onOpenChange: p,
                              icon: (0, _.jsx)(G.Icon, {
                                size: "xs",
                                variant: "more",
                              }),
                              size: "s",
                              ...(0, Q.BA)(
                                Q.QM.player
                                  .PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                              ),
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: ig().sonata,
                  children: [
                    (0, _.jsx)(P.WP, { isMobile: !1, entityMeta: a }),
                    !r.isGenerativeContext &&
                      (0, _.jsx)(ea.Y, {
                        disabled: !a,
                        isMobile: !1,
                        isFullscreen: !1,
                      }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: ig().meta,
                  children: [
                    !r.isGenerativeContext &&
                      !d.isAdvertShown &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          A && (0, _.jsx)(N.t5, { iconSize: "l" }),
                          D,
                          U,
                          (0, _.jsx)(N.wx, {
                            title: "Качество трека",
                            description:
                                downloadInfo ? (downloadInfo?.bitrate !== 0
                                ? `${qualityMap[downloadInfo?.quality]}: ${codecMap[downloadInfo?.codec]} - ${downloadInfo?.bitrate}`
                                : `${qualityMap[downloadInfo?.quality]}: ${codecMap[downloadInfo?.codec]}`) : 'Не удалось получить качество трека',
                            children: (0, _.jsxs)("div", {
                              className: "eQt33MLDiQ6DRSuLaYEp",
                              children: (0, _.jsxs)("span", {
                                className:
                                  ig().settingsButton + " eQt33MLDiQ6DRSuLaYEp",
                                style: {
                                  cursor: "pointer",
                                  color:
                                    "var(--ym-controls-color-secondary-text-enabled)",
                                },
                                children:
                                  (window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK()
                                    ? codecMap[downloadInfo?.codec]
                                    : qualityMap[downloadInfo?.quality]) ?? "NONE",
                              }),
                              onClick: () => {
                                electronBridge.sendDownloadTrack({
                                  downloadURL: downloadInfo?.url,
                                  codec: downloadInfo?.codec,
                                  trackId: downloadInfo?.trackId,
                                  track: {
                                    title: JSON.parse(JSON.stringify(a.title)),
                                    artists: JSON.parse(
                                      JSON.stringify(a.artists),
                                    ),
                                    albums: JSON.parse(
                                      JSON.stringify(a.albums),
                                    ),
                                    coverUri: JSON.parse(
                                      JSON.stringify(a.coverUri),
                                    ),
                                  },
                                });
                              },
                            }),
                          }),
                          (0, _.jsx)(t0, {
                            placement: "bottom",
                            open: y,
                            onOpenChange: b,
                            icon: (0, _.jsx)(G.Icon, {
                              variant: "settings",
                              size: "xs",
                            }),
                            size: "xxxs",
                            referenceClassName: ig().settingsButton,
                          }),
                        ],
                      }),
                    (0, _.jsx)(iv.F, {}),
                  ],
                }),
              ],
            })
          );
        });
      var ik = i(38319),
        ij = i.n(ik);
      let iI = (0, p.Pi)((e) => {
          var t;
          let { className: i, entityMeta: a, onLikeClick: n } = e,
            {
              user: l,
              sonataState: r,
              fullscreenPlayer: o,
              advert: s,
              experiments: c,
            } = (0, C.oR4)(),
            { theme: d } = (0, C.FgM)(),
            u = r.contextType === T.A.Generative,
            m = l.isAuthorized && !u,
            p =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            y = null == a ? void 0 : a.isTrackAudiobook,
            f = c.checkExperiment(C.peG.WebNextTrackModal, "on"),
            b = (0, x.useMemo)(() => {
              if (!s.isAdvertShown)
                return {
                  "--player-average-color-background": (0, L.Er)(
                    d,
                    null == a ? void 0 : a.averageColor,
                  ),
                };
            }, [s.isAdvertShown, d, null == a ? void 0 : a.averageColor]),
            k = (0, x.useCallback)(
              (e) => {
                if (s.isAdvertShown) return;
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION", "IMG"].includes(t.tagName);
                a && i && !u && o.showFullscreenPlayerModal();
              },
              [a, o, u, s.isAdvertShown],
            ),
            j = (0, x.useMemo)(
              () =>
                s.isAdvertShown || !a
                  ? null
                  : y
                    ? (0, _.jsx)(L.MG, {
                        explicitSize: "xxxs",
                        track: a,
                        withAuthor: !0,
                        withBookLink: !f,
                        withSecondaryColor: !0,
                      })
                    : p
                      ? (0, _.jsx)(L.wT, {
                          explicitSize: "xxxs",
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, _.jsx)(L.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !f,
                        }),
              [s.isAdvertShown, a, y, p, f],
            );
          return (0, _.jsxs)("section", {
            style: b,
            className: (0, v.W)(ij().root, i),
            onClick: k,
            children: [
              (0, _.jsx)(tW.y, {
                children: (0, _.jsx)(g.Heading, {
                  variant: "h3",
                  id: "player-region",
                  children: (0, _.jsx)(h.Z, { id: "a11y-regions.player" }),
                }),
              }),
              !r.isGenerativeContext &&
                (0, _.jsx)(ea.Y, {
                  className: ij().progressBar,
                  sliderClassName: ij().progressBar,
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !a,
                }),
              (0, _.jsxs)("div", {
                className: ij().info,
                children: [
                  a && !s.isAdvertShown
                    ? (0, _.jsxs)("div", {
                        className: ij().infoCard,
                        children: [
                          (0, _.jsx)(eh.Paper, {
                            radius: "s",
                            className: ij().coverContainer,
                            children: (0, _.jsx)(N.BE, {
                              className: ij().cover,
                              src: a.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, _.jsx)("div", {
                            className: ij().description,
                            children: j,
                          }),
                        ],
                      })
                    : (0, _.jsx)("div", { className: ij().infoCard }),
                  (0, _.jsxs)("div", {
                    className: ij().infoButtons,
                    children: [
                      a &&
                        m &&
                        !s.isAdvertShown &&
                        (0, _.jsx)(N.FM, {
                          fallback: (0, _.jsx)(N.dJ, {
                            isLiked: a.isLiked,
                            onClick: n,
                          }),
                        }),
                      (0, _.jsx)(P.WP, { isMobile: !0, entityMeta: a }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        iS = (0, p.Pi)((e) => {
          let { className: t } = e,
            {
              settings: { isMobile: i },
              sonataState: a,
              fullscreenPlayer: n,
            } = (0, C.oR4)(),
            l = (0, C.XUT)(),
            r = (0, R.SB)(a.entityMeta),
            o = (0, R.KX)(a.entityMeta),
            s = (0, t9.W)(() => {
              if (a.entityMeta) {
                if (n.modal.isOpened) {
                  n.modal.close();
                  return;
                }
                n.modal.open();
              }
            });
          (0, x.useEffect)(() => {
            if (!a.isGenerativeContext)
              return (
                null == l ||
                  l.addShortcutsListener(
                    C.Pwk.MAIN,
                    C.yxF.TOGGLE_FULLSCREEN_PLAYER,
                    s,
                  ),
                null == l || l.addShortcutsListener(C.Pwk.MAIN, C.yxF.LIKE, r),
                null == l ||
                  l.addShortcutsListener(C.Pwk.MAIN, C.yxF.DISLIKE, o),
                () => {
                  null == l ||
                    l.removeShortcutsListener(
                      C.Pwk.MAIN,
                      C.yxF.TOGGLE_FULLSCREEN_PLAYER,
                    ),
                    null == l ||
                      l.removeShortcutsListener(C.Pwk.MAIN, C.yxF.LIKE),
                    null == l ||
                      l.removeShortcutsListener(C.Pwk.MAIN, C.yxF.DISLIKE);
                }
              );
          }, [o, r, l, a.isGenerativeContext, a.entityMeta, s]);
          let c = (0, x.useMemo)(() => (i ? iI : iN), [i]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(c, {
                onLikeClick: r,
                  onDislikeClick: o,
                entityMeta: a.entityMeta,
                className: (0, v.W)(t, im().root),
              }),
              (0, _.jsx)(io, { className: im().adPopup }),
              (0, _.jsx)(id, {}),
            ],
          });
        });
      var iA = i(87398),
        iT = i(19144),
        iP = i.n(iT);
      let iw = (0, p.Pi)((e) => {
        let { className: t } = e,
          { advert: i, user: a } = (0, C.oR4)(),
          { notify: n, dismiss: l } = (0, C.d$W)(),
          { formatMessage: r } = (0, W.Z)(),
          s = (0, C.XUT)(),
          c = (0, C.ozq)(),
          [d, u] = (0, x.useState)(!1),
          { openPaymentWidgetModal: m, isPaymentWidgetModalOpened: p } = (0,
          iA.xU)({ storeName: "music" }),
          y = (0, x.useCallback)(
            (e) => {
              e.stopPropagation(),
                e.preventDefault(),
                m(),
                u(!0),
                null == c || c.pauseVideoAdvert(),
                l();
            },
            [m, c, l],
          );
        (0, x.useEffect)(() => {
          d && !p && (u(!1), null == c || c.resumeVideoAdvert());
        }, [c, p, d]);
        let b = (0, x.useCallback)(() => {
          n(
            (0, _.jsx)(N.Yj, {
              className: iP().notify,
              message: (0, _.jsx)(g.Caption, {
                className: iP().text,
                variant: "div",
                type: "controls",
                size: "m",
                children: (0, _.jsx)(h.Z, { id: "ads.notification" }),
              }),
              cover: (0, _.jsx)(G.Icon, { variant: "plusColor", size: "xs" }),
              coverRadius: "round",
              withDefaultCloseButton: !1,
              coverClassName: (0, v.W)(iP().cover, iP().important),
              closeButton: (0, _.jsx)(f.z, {
                className: iP().notifyClose,
                variant: "text",
                color: "primary",
                size: "xxs",
                onClick: y,
                withRipple: !1,
                children: (0, _.jsx)(h.Z, { id: "ads.disable-ads" }),
              }),
            }),
            { containerId: C.W$x.AD_INFO },
          );
        }, [y, n]);
        if (
          ((0, x.useEffect)(() => {
            if (!a.hasPlus)
              return (
                null == s ||
                  s.addShortcutsListener(C.Pwk.MAIN, C.yxF.CLOSE, () => {
                    i.isAdvertShown && i.isVideoAdvert && b();
                  }),
                () => {
                  null == s ||
                    s.removeShortcutsListener(C.Pwk.MAIN, C.yxF.CLOSE);
                }
              );
          }, [b, s, i.isAdvertShown, i.isVideoAdvert, a.hasPlus]),
          a.hasPlus)
        )
          return;
        let k = i.isAdvertShown && i.isVideoAdvert;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(Y.u, {
              className: (0, v.W)(iP().root, { [iP().root_hidden]: !k }, t),
              contentClassName: iP().content,
              placement: "center",
              showHeader: !1,
              closeOnOutsidePress: !1,
              escapeKey: !1,
              withOverlay: k,
              open: !0,
              lockScroll: k,
              overlayColor: "full",
              disableGuards: !k,
              disableFocusTrap: !k,
              ...(0, Q.BA)(Q.QM.ad.VIDEO_AD),
              children: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(f.z, {
                    className: iP().close,
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, _.jsx)(G.Icon, { variant: "close", size: "xxs" }),
                    onClick: b,
                    "aria-label": r({ id: "interface-actions.close-ad" }),
                    withRipple: !1,
                  }),
                  (0, _.jsx)(I, {
                    data: i.data,
                    mediaContent: (0, _.jsx)("div", {
                      className: iP().videoBlock,
                      id: o.SLOT,
                      children: (0, _.jsx)("video", {
                        id: o.VIDEO,
                        className: iP().video,
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, _.jsx)(Z.Notification, {
              enableMultiContainer: !0,
              containerId: C.W$x.AD_INFO,
              position: "bottom-center",
            }),
          ],
        });
      });
    },
    94347: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return eM;
        },
        L: function () {
          return k;
        },
      });
      var a,
        n,
        l = i(79491),
        r = i(2685),
        o = i(49430),
        s = i(89646),
        c = i(86348),
        d = i(58997),
        u = i(91694),
        m = i(9096);
      let _ = (e, t) => {
          var i, a;
          let n = null == t ? void 0 : t.map((e) => (0, m.tR)({ artist: e }));
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
            albumArtists: n,
            albumType: e.albumType,
          });
        },
        v = (e) => {
          var t, i;
          return (0, r.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        p = (e) => {
          var t, i;
          return (0, r.pj)({
            id: "".concat(e.uid, ":").concat(e.kind),
            uuid: e.playlistUuid,
            title: e.title,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        x = (e) => {
          var t;
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: e.coverUri,
            averageColor:
              null === (t = e.derivedColors) || void 0 === t
                ? void 0
                : t.average,
          });
        };
      var y = i(3154);
      let h = (e, t) => {
        let i = (0, y.Vt)(e, t);
        if (null == t ? void 0 : t.albumId) {
          var a, n;
          let e = i.albums.find((e) => String(e.id) === String(t.albumId));
          return {
            ...i,
            isBest:
              null == e
                ? void 0
                : null === (a = e.bestAlbumTracks) || void 0 === a
                  ? void 0
                  : a.includes(Number(i.id)),
            positionInAlbum:
              null == e
                ? void 0
                : null === (n = e.trackPosition) || void 0 === n
                  ? void 0
                  : n.index,
          };
        }
        return (0, r.pj)({ ...i });
      };
      ((a = n || (n = {})).ALBUM = "album"),
        (a.ARTIST = "artist"),
        (a.PLAYLIST = "playlist"),
        (a.TRACK = "track");
      let f = r.V5.model("TrailerMeta", {
        id: r.V5.string,
        title: r.V5.maybe(r.V5.string),
        uuid: r.V5.maybe(r.V5.string),
        coverUri: r.V5.maybe(r.V5.string),
        averageColor: r.V5.maybe(r.V5.string),
        albumArtists: r.V5.maybe(r.V5.array(m.Go)),
        albumType: r.V5.maybe(r.V5.string),
      }).views((e) => ({
        getUrl(t) {
          switch (t) {
            case n.ALBUM:
              return "/album/".concat(e.id);
            case n.ARTIST:
              return "/artist/".concat(e.id);
            case n.PLAYLIST:
              return "/playlists/".concat(e.uuid);
            case n.TRACK:
              return;
          }
        },
      }));
      var b = i(19489),
        g = i(73054);
      let C = r.V5.model("TrailerState", {
          contextType: r.V5.maybeNull(r.V5.enumeration(Object.values(b.A))),
          contextId: r.V5.maybeNull(r.V5.string),
          entityMeta: r.V5.maybeNull(g.s$),
          status: r.V5.enumeration(Object.values(c.Xz)),
        }).actions((e) => ({
          setContextId: (t) => {
            e.contextId = String(t);
          },
          setContextType: (t) => {
            e.contextType = t;
          },
          setEntityMeta: (t) => {
            t && t.data.meta && (e.entityMeta = (0, g.B5)(t));
          },
          setStatus: (t) => {
            e.status = t;
          },
        })),
        N = y.le
          .props({
            isBest: r.V5.maybe(r.V5.boolean),
            positionInAlbum: r.V5.maybe(r.V5.number),
          })
          .named("TrailerTrack"),
        k = r.V5.model("Trailer", {
          id: r.V5.maybeNull(r.V5.string),
          loadingState: r.V5.enumeration(Object.values(d.Gui)),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          modal: u.KL,
          variant: r.V5.maybeNull(r.V5.enumeration(Object.values(n))),
          tracks: r.V5.maybeNull(r.V5.array(N)),
          meta: r.V5.maybeNull(f),
          state: C,
          withAnimation: r.V5.boolean,
          shouldAutoStartPlaying: r.V5.boolean,
          shouldSendEventOnTracksShowed: r.V5.boolean,
          sonataStatusBeforeTrailerStart: r.V5.enumeration(Object.values(c.Xz)),
          isManuallyPaused: r.V5.boolean,
          utmLinkModel: r.V5.maybe(d.db6),
          title: r.V5.maybeNull(r.V5.string),
          shareable: r.V5.maybeNull(r.V5.boolean),
          personalColor: r.V5.maybeNull(r.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === d.Gui.IDLE ||
                e.loadingState === d.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === d.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === d.Gui.REJECT;
            },
            get isNotFound() {
              var t;
              let i =
                  e.loadingState === d.Gui.RESOLVE &&
                  (null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                a = e.errorStatusCode === o.CN.NOT_FOUND;
              return i || a;
            },
            get objectId() {
              return "".concat(e.variant, ":").concat(e.id);
            },
            get utmLink() {
              return e.utmLinkModel && (0, l.ZN)(e.utmLinkModel);
            },
          }))
          .actions((e) => {
            let t = {
              setUtmLink(t) {
                t && (e.utmLinkModel = (0, r.pj)(t));
              },
              resetUtmLink() {
                e.utmLinkModel = void 0;
              },
              setAnimationState(t) {
                e.withAnimation = t;
              },
              setShouldAutoStartPlaying(t) {
                e.shouldAutoStartPlaying = t;
              },
              setShouldSendEventOnTracksShowed(t) {
                e.shouldSendEventOnTracksShowed = t;
              },
              setIsManuallyPaused(t) {
                e.isManuallyPaused = t;
              },
              isTrailerActive: (t, i) =>
                !!e.modal.isOpened && e.variant === t && e.id === i,
              openArtistTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.ARTIST, i) ||
                  (t.reset(),
                  (e.variant = n.ARTIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getArtistTrailer(i));
              },
              openAlbumTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.ALBUM, String(i)) ||
                  (t.reset(),
                  (e.variant = n.ALBUM),
                  (e.id = String(i)),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getAlbumTrailer(i));
              },
              openPlaylistTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.PLAYLIST, i) ||
                  (t.reset(),
                  (e.variant = n.PLAYLIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getPlaylistTrailer(i));
              },
              openTrackTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.TRACK, i) ||
                  (t.reset(),
                  (e.variant = n.TRACK),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getTrackTrailer(i));
              },
              getArtistTrailer: (0, r.ls)(function* (i) {
                let { artistsResource: a } = (0, r.dU)(e);
                if (e.loadingState !== d.Gui.PENDING)
                  try {
                    e.loadingState = d.Gui.PENDING;
                    let { artist: t, trailer: n } = yield a.getTrailer({
                      artistId: i,
                    });
                    n.tracks &&
                      (e.tracks = (0, r.pj)(
                        n.tracks.map((e) => h(e, { isSmartPreview: !0 })),
                      )),
                      n.title && (e.title = n.title),
                      t && (e.meta = v(t)),
                      (e.loadingState = d.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, r.ls)(function* (i) {
                let { albumResource: a } = (0, r.dU)(e);
                if (e.loadingState !== d.Gui.PENDING)
                  try {
                    e.loadingState = d.Gui.PENDING;
                    let {
                      album: t,
                      artists: n,
                      trailer: l,
                    } = yield a.getTrailer({ albumId: i });
                    l.tracks &&
                      (e.tracks = (0, r.pj)(
                        l.tracks.map((e) =>
                          h(e, { isSmartPreview: !0, albumId: t.id }),
                        ),
                      )),
                      l.title && (e.title = l.title),
                      t && (e.meta = _(t, n)),
                      (e.loadingState = d.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, r.ls)(function* (i) {
                let { usersResource: a } = (0, r.dU)(e);
                if (e.loadingState !== d.Gui.PENDING)
                  try {
                    e.loadingState = d.Gui.PENDING;
                    let { uid: t, kind: n } = (0, s.b)(i);
                    if (!t || !n) {
                      e.loadingState = d.Gui.REJECT;
                      return;
                    }
                    let {
                      playlist: l,
                      trailer: o,
                      shareable: c,
                      personalColor: u,
                    } = yield a.getPlaylistTrailer({
                      userId: t,
                      playlistKind: Number(n),
                    });
                    o.tracks &&
                      (e.tracks = (0, r.pj)(
                        o.tracks.map((e) => h(e, { isSmartPreview: !0 })),
                      )),
                      o.title && (e.title = o.title),
                      c && (e.shareable = c),
                      u && (e.personalColor = u),
                      l && (e.meta = p(l)),
                      (e.loadingState = d.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, r.ls)(function* (i) {
                let { tracksResource: a } = (0, r.dU)(e);
                if (e.loadingState !== d.Gui.PENDING)
                  try {
                    e.loadingState = d.Gui.PENDING;
                    let { track: t, title: n } = yield a.getTrailer({
                      trackId: i,
                    });
                    n && (e.title = n),
                      t &&
                        ((e.tracks = (0, r.pj)([h(t, { isSmartPreview: !0 })])),
                        (e.meta = x(t))),
                      (e.loadingState = d.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { modelActionsLogger: i } = (0, r.dU)(e);
                i.error(t),
                  t instanceof o.du &&
                    (t.statusCode === o.CN.NOT_FOUND ||
                      t.statusCode === o.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = o.CN.NOT_FOUND),
                  e.loadingState !== d.Gui.IDLE &&
                    (e.loadingState = d.Gui.REJECT);
              },
              reset() {
                (e.loadingState = d.Gui.IDLE),
                  (e.errorStatusCode = null),
                  (e.variant = null),
                  (e.id = null),
                  (e.tracks = null),
                  (e.meta = null),
                  (e.withAnimation = !0),
                  (e.shouldAutoStartPlaying = !0),
                  (e.shouldSendEventOnTracksShowed = !0),
                  (e.sonataStatusBeforeTrailerStart = c.Xz.IDLE),
                  (e.isManuallyPaused = !0),
                  (e.title = null),
                  (e.shareable = null),
                  (e.personalColor = null);
              },
            };
            return t;
          });
      var j = i(65301),
        I = i(96233),
        S = i(91207),
        A = i(37184),
        T = i(55975),
        P = i(78372),
        w = i(82036),
        E = i(14386),
        M = i(3283);
      let L = () => {
        let e = (0, d.z$f)(),
          t = (0, d.wLl)(),
          { hash: i } = (0, d.RQn)(),
          { pageId: a } = (0, d.lVB)();
        return (0, S.useCallback)(
          (n) => {
            if (!e || !a) return;
            let l = {
                hash: i,
                pageId: d.x3Y[a],
                mainObjectType: M.OB.Trailer,
                mainObjectId: n,
              },
              r = (0, d.KOr)({ params: l, logger: t, context: L.name });
            r && (0, M.IA)(e.evgenInstance, r);
          },
          [e, i, t, a],
        );
      };
      var R = i(26382);
      let B = () => {
        let { trailer: e } = (0, d.oR4)(),
          t = (0, d.R$C)(),
          i = (0, d.XUT)(),
          a = (0, R.SB)(e.state.entityMeta),
          n = (0, R.KX)(e.state.entityMeta);
        (0, S.useEffect)(() => {
          e.modal.isOpened
            ? (null == i || i.disable(d.Pwk.MAIN),
              null == i || i.enable(d.Pwk.MAIN, d.yxF.TOGGLE_MUTE),
              null == i || i.enable(d.Pwk.MAIN, d.yxF.INCREASE_VOLUME),
              null == i || i.enable(d.Pwk.MAIN, d.yxF.DECREASE_VOLUME),
              null == i || i.enable(d.Pwk.MAIN, d.yxF.TOGGLE_FULLSCREEN_PLAYER),
              null == i || i.enable(d.Pwk.TRAILER))
            : (null == i || i.disable(d.Pwk.TRAILER),
              null == i || i.enable(d.Pwk.MAIN));
        }, [i, e.modal.isOpened]),
          (0, S.useEffect)(
            () => (
              null == i ||
                i.addShortcutsListener(d.Pwk.TRAILER, d.yxF.TOGGLE_PLAY, () => {
                  null == t || t.togglePause(d.jiA.TRAILER);
                }),
              null == i || i.addShortcutsListener(d.Pwk.TRAILER, d.yxF.LIKE, a),
              null == i ||
                i.addShortcutsListener(d.Pwk.TRAILER, d.yxF.DISLIKE, n),
              null == i ||
                i.addShortcutsListener(
                  d.Pwk.TRAILER,
                  d.yxF.MOVE_FORWARD,
                  async () => {
                    var e;
                    (null == t
                      ? void 0
                      : null ===
                            (e = t.getState(d.jiA.TRAILER).currentContext
                              .value) || void 0 === e
                        ? void 0
                        : e.availableActions.moveForward.value) &&
                      (await (null == t
                        ? void 0
                        : t.moveForward(d.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  d.Pwk.TRAILER,
                  d.yxF.MOVE_BACKWARD,
                  async () => {
                    var e;
                    (null == t
                      ? void 0
                      : null ===
                            (e = t.getState(d.jiA.TRAILER).currentContext
                              .value) || void 0 === e
                        ? void 0
                        : e.availableActions.moveBackward.value) &&
                      (await (null == t
                        ? void 0
                        : t.moveBackward(d.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  d.Pwk.TRAILER,
                  d.yxF.SLIDE_FORWARD,
                  async () => {
                    (null == t
                      ? void 0
                      : t.getState(d.jiA.TRAILER).playerState.progress.value
                          .duration) &&
                      (await (null == t
                        ? void 0
                        : t.slideForward(1, d.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  d.Pwk.TRAILER,
                  d.yxF.SLIDE_BACKWARD,
                  async () => {
                    (null == t
                      ? void 0
                      : t.getState(d.jiA.TRAILER).playerState.progress.value
                          .duration) &&
                      (await (null == t
                        ? void 0
                        : t.slideBackward(1, d.jiA.TRAILER)));
                  },
                ),
              () => {
                null == i ||
                  i.removeShortcutsListener(d.Pwk.TRAILER, d.yxF.TOGGLE_PLAY),
                  null == i ||
                    i.removeShortcutsListener(d.Pwk.TRAILER, d.yxF.LIKE),
                  null == i ||
                    i.removeShortcutsListener(d.Pwk.TRAILER, d.yxF.DISLIKE),
                  null == i ||
                    i.removeShortcutsListener(
                      d.Pwk.TRAILER,
                      d.yxF.MOVE_FORWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      d.Pwk.TRAILER,
                      d.yxF.MOVE_BACKWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      d.Pwk.TRAILER,
                      d.yxF.SLIDE_FORWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      d.Pwk.TRAILER,
                      d.yxF.SLIDE_BACKWARD,
                    );
              }
            ),
            [n, a, i, t],
          );
      };
      var V = i(9695),
        O = i(10231),
        D = i(29778);
      let z = () => {
          let e = (0, d.z$f)(),
            t = (0, d.wLl)(),
            { hash: i } = (0, d.RQn)(),
            { pageId: a } = (0, d.lVB)();
          return (0, S.useCallback)(
            (n) => {
              if (!e || !a) return;
              let l = {
                  hash: i,
                  pageId: d.x3Y[a],
                  mainObjectType: M.OB.Trailer,
                  mainObjectId: n,
                },
                r = (0, d.KOr)({ params: l, logger: t, context: z.name });
              r && (0, M.a5)(e.evgenInstance, r);
            },
            [e, i, t, a],
          );
        },
        U = (e) =>
          "object" == typeof e &&
          null !== e &&
          "actionType" in e &&
          "mainObjectId" in e,
        F = () => {
          let e = (0, d.z$f)(),
            t = (0, d.wLl)(),
            { hash: i } = (0, d.RQn)(),
            { pageId: a } = (0, d.lVB)();
          return (0, S.useCallback)(
            (n, l) => {
              if (!e || !a) return;
              let r = {
                hash: i,
                pageId: d.x3Y[a],
                mainObjectType: M.OB.Trailer,
                mainObjectId: n,
              };
              l &&
                ((r.actionType = M.Us.Pause),
                (r.userInteractionType = M.wt.Tap));
              let o = (0, d.KOr)({ params: r, logger: t, context: F.name });
              o &&
                (l && U(o)
                  ? (0, M.Oe)(e.evgenInstance, o)
                  : (0, M.$M)(e.evgenInstance, o));
            },
            [e, i, t, a],
          );
        },
        W = (e) => {
          switch (e) {
            case n.ALBUM:
              return b.A.Album;
            case n.ARTIST:
              return b.A.Artist;
            case n.PLAYLIST:
              return b.A.Playlist;
            case n.TRACK:
            default:
              return b.A.Various;
          }
        },
        Q = (e) => {
          switch (e) {
            case n.ALBUM:
              return d.Rhz.ALBUM;
            case n.ARTIST:
              return d.Rhz.ARTIST;
            case n.PLAYLIST:
              return d.Rhz.PLAYLIST;
            case n.TRACK:
              return d.Rhz.TRACK;
          }
        },
        G = (e) => {
          let { variant: t, blockId: i, meta: a } = e,
            n = Q(t),
            l = W(t),
            r = (null == a ? void 0 : a.uuid) || (null == a ? void 0 : a.id);
          return (0, d.MhG)({
            pageId: n,
            blockId: i,
            contextId: r,
            contextType: l,
            pageEntityId: r,
          });
        },
        Y = (e) => {
          let { variant: t, id: i, from: a, uuid: l, utmLink: r } = e;
          switch (t) {
            case n.ALBUM:
              return {
                type: b.A.Album,
                trailer: !0,
                meta: { id: Number(i) },
                from: a,
                utmLink: r,
              };
            case n.ARTIST:
              return {
                type: b.A.Artist,
                trailer: !0,
                meta: { id: String(i) },
                from: a,
                utmLink: r,
              };
            case n.PLAYLIST:
              return {
                type: b.A.Playlist,
                trailer: !0,
                meta: { id: String(i), uuid: l },
                from: a,
                utmLink: r,
              };
            case n.TRACK:
              return {
                type: b.A.Various,
                trailer: !0,
                meta: { id: String(i) },
                from: a,
                utmLink: r,
              };
          }
        };
      var Z = i(44729),
        q = i(81437),
        K = i(53533),
        H = i.n(K);
      let X = (0, I.Pi)(() => {
          let { trailer: e } = (0, d.oR4)(),
            { variant: t, id: i } = e,
            a = (0, S.useCallback)(() => {
              if (t && i)
                switch (t) {
                  case n.ALBUM:
                    e.getAlbumTrailer(Number(i));
                    break;
                  case n.ARTIST:
                    e.getArtistTrailer(i);
                    break;
                  case n.PLAYLIST:
                    e.getPlaylistTrailer(i);
                    break;
                  case n.TRACK:
                    e.getTrackTrailer(i);
                }
            }, [i, e, t]);
          return (0, j.jsxs)("div", {
            className: H().root,
            children: [
              (0, j.jsxs)("div", {
                className: H().textContainer,
                children: [
                  (0, j.jsx)(q.Heading, {
                    variant: "h2",
                    className: H().title,
                    size: "xs",
                    weight: "bold",
                    children: (0, j.jsx)(Z.Z, {
                      id: "error-messages.something-went-wrong",
                    }),
                  }),
                  (0, j.jsx)(q.Caption, {
                    className: H().description,
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, j.jsx)(Z.Z, {
                      id: "trailer.something-went-wrong-description",
                    }),
                  }),
                ],
              }),
              (0, j.jsx)(P.z, {
                onClick: a,
                color: "secondary",
                size: "default",
                radius: "xxxl",
                children: (0, j.jsx)(q.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, j.jsx)(Z.Z, { id: "page-error.reload" }),
                }),
              }),
            ],
          });
        }),
        J = () =>
          (0, j.jsx)("div", {
            className: H().root,
            children: (0, j.jsxs)("div", {
              className: H().textContainer,
              children: [
                (0, j.jsx)(q.Heading, {
                  variant: "h2",
                  className: H().title,
                  size: "xs",
                  weight: "bold",
                  children: (0, j.jsx)(Z.Z, { id: "trailer.not-found-title" }),
                }),
                (0, j.jsx)(q.Caption, {
                  className: H().description,
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: (0, j.jsx)(Z.Z, {
                    id: "trailer.not-found-description",
                  }),
                }),
              ],
            }),
          });
      var $ = i(82607);
      let ee = () => {
          let e = (0, d.z$f)(),
            t = (0, d.wLl)(),
            { hash: i } = (0, d.RQn)(),
            { pageId: a } = (0, d.lVB)();
          return (0, S.useCallback)(
            (n, l) => {
              if (!e || !a) return;
              let r = {
                  hash: i,
                  pageId: d.x3Y[a],
                  mainObjectType: n,
                  mainObjectId: l,
                },
                o = (0, d.KOr)({ params: r, logger: t, context: ee.name });
              o && (0, M.$M)(e.evgenInstance, o);
            },
            [e, i, t, a],
          );
        },
        et = () => {
          let e = (0, d.z$f)(),
            t = (0, d.wLl)(),
            { hash: i } = (0, d.RQn)(),
            { pageId: a } = (0, d.lVB)();
          return (0, S.useCallback)(
            (n, l) => {
              if (!e || !a) return;
              let r = {
                  hash: i,
                  pageId: d.x3Y[a],
                  mainObjectType: M.OB.Trailer,
                  mainObjectId: n,
                  from: M.qU.TrailerScreen,
                  to: d.x3Y[l],
                },
                o = (0, d.KOr)({ params: r, logger: t, context: et.name });
              o && (0, M.H1)(e.evgenInstance, o);
            },
            [e, i, t, a],
          );
        },
        ei = (e) => {
          let { variant: t, id: i, from: a, uuid: l, utmLink: r } = e;
          switch (t) {
            case n.ALBUM:
              return {
                type: b.A.Album,
                meta: { id: Number(i) },
                from: a,
                utmLink: r,
              };
            case n.ARTIST:
              return {
                type: b.A.Artist,
                meta: { id: String(i) },
                from: a,
                utmLink: r,
              };
            case n.PLAYLIST:
              return {
                type: b.A.Playlist,
                meta: { id: String(i), uuid: l },
                from: a,
                utmLink: r,
              };
            case n.TRACK:
              return {
                type: b.A.Various,
                meta: { id: String(i) },
                from: a,
                utmLink: r,
              };
          }
        },
        ea = {
          [n.ALBUM]: M.OB.Album,
          [n.ARTIST]: M.OB.Artist,
          [n.PLAYLIST]: M.OB.Playlist,
          [n.TRACK]: M.OB.Track,
        },
        en = {
          [n.ALBUM]: d.Rhz.ALBUM,
          [n.ARTIST]: d.Rhz.ARTIST,
          [n.PLAYLIST]: d.Rhz.PLAYLIST,
        },
        el = (e) => {
          let {
            trailer: { meta: t },
            artist: i,
            album: a,
            playlist: l,
          } = (0, d.oR4)();
          switch (e) {
            case n.ALBUM:
              return a.id === Number(null == t ? void 0 : t.id);
            case n.ARTIST:
              return i.id === (null == t ? void 0 : t.id);
            case n.PLAYLIST:
              return l.uuid === (null == t ? void 0 : t.uuid);
            case n.TRACK:
              return !1;
          }
        };
      var er = i(60223),
        eo = i.n(er);
      let es = (e) => {
          let { isActive: t, className: i, isCurrentEntityPage: a } = e;
          return (0, j.jsxs)("div", {
            className: (0, V.W)(eo().root, i),
            children: [
              (0, j.jsx)($.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: eo().playButtonShimmer,
              }),
              a &&
                (0, j.jsx)($.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: eo().linkButtonShimmer,
                }),
            ],
          });
        },
        ec = (0, I.Pi)((e) => {
          var t;
          let {
              variant: i,
              isShimmerVisible: a,
              isShimmerActive: l,
              className: r,
            } = e,
            {
              trailer: {
                state: o,
                meta: s,
                modal: u,
                objectId: m,
                resetUtmLink: _,
              },
            } = (0, d.oR4)(),
            v = (0, d.R$C)(),
            { from: p } = G({ variant: i, blockId: d.aUg.TRAILER }),
            x = et(),
            y = L(),
            h = ee(),
            f = (0, d.s0h)(null == s ? void 0 : s.getUrl(i)),
            b = (0, S.useCallback)(() => {
              f();
              let e = en[i];
              e && x(m, e);
            }, [f, m, x, i]),
            g = el(i),
            C = !g && i !== n.TRACK,
            N = (0, S.useCallback)(() => {
              var e, t, a, l;
              let r =
                null == v
                  ? void 0
                  : null === (a = v.playbackController.activePlayback.value) ||
                      void 0 === a
                    ? void 0
                    : null === (t = a.state) || void 0 === t
                      ? void 0
                      : null === (e = t.currentContext.value) || void 0 === e
                        ? void 0
                        : e.utmLink;
              null == v || v.stop(d.jiA.TRAILER),
                _(),
                u.close(),
                y(m),
                C && b();
              let x =
                  o.status !== c.Xz.PLAYING || i === n.ALBUM
                    ? { index: 0 }
                    : {
                        entityId:
                          null === (l = o.entityMeta) || void 0 === l
                            ? void 0
                            : l.id,
                      },
                f = ei({
                  variant: i,
                  id: null == s ? void 0 : s.id,
                  uuid: null == s ? void 0 : s.uuid,
                  from: p,
                  utmLink: r,
                });
              null == v ||
                v.playContext({ contextData: f, queueParams: x }).then(() => {
                  (null == s ? void 0 : s.id) && h(ea[i], s.id);
                });
            }, [
              v,
              _,
              u,
              y,
              m,
              C,
              o.status,
              null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
              i,
              null == s ? void 0 : s.id,
              null == s ? void 0 : s.uuid,
              p,
              b,
              h,
            ]),
            k = (0, S.useMemo)(
              () =>
                (0, j.jsxs)("div", {
                  className: (0, V.W)(eo().root, r),
                  children: [
                    (0, j.jsx)(P.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, j.jsx)(w.Icon, {
                        variant: "play",
                        size: "xxxs",
                      }),
                      className: eo().button,
                      onClick: N,
                      ...(0, T.BA)(
                        T.QM.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                      ),
                      children: (0, j.jsx)(Z.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    C &&
                      (0, j.jsx)(P.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: b,
                        className: eo().button,
                        ...(0, T.BA)(
                          T.QM.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                        ),
                        children: (0, j.jsx)(Z.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [r, N, b, C],
            );
          return a
            ? es({ isActive: l, isCurrentEntityPage: g, className: r })
            : k;
        });
      var ed = i(93422),
        eu = i(43998);
      let em = (e) => {
        switch (e) {
          case n.ALBUM:
            return d.GGO.ALBUM;
          case n.ARTIST:
            return d.GGO.ARTIST;
          case n.PLAYLIST:
            return d.GGO.PLAYLIST;
          case n.TRACK:
            return d.GGO.TRACK;
        }
      };
      var e_ = i(76811),
        ev = i.n(e_);
      let ep = (e, t) =>
          (0, j.jsx)("div", {
            className: ev().coverContainer,
            children: (0, j.jsx)($.Shimmer, {
              isActive: e,
              radius: t,
              className: ev().cover,
            }),
          }),
        ex = (e) =>
          (0, j.jsxs)("div", {
            className: ev().textContainer,
            children: [
              (0, j.jsx)("div", {
                className: ev().shimmerContainer,
                children: (0, j.jsx)($.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: ev().titleShimmer,
                }),
              }),
              (0, j.jsx)("div", {
                className: ev().shimmerContainer,
                children: (0, j.jsx)($.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: ev().descriptionShimmer,
                }),
              }),
            ],
          }),
        ey = (0, I.Pi)((e) => {
          let {
              variant: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              className: l,
            } = e,
            {
              trailer: {
                meta: r,
                objectId: o,
                utmLink: s,
                personalColor: c,
                shareable: u,
                title: m,
              },
              playlist: {
                shouldShowTrailerOnboarding: _,
                isRewind2024Playlist: v,
              },
            } = (0, d.oR4)(),
            { from: p } = G({ variant: t, blockId: d.aUg.TRAILER, meta: r }),
            x = et(),
            y = F(),
            h = t === n.ARTIST ? "round" : "s",
            { notify: f } = (0, d.d$W)(),
            b = (0, j.jsx)(Z.Z, {
              id: "onboarding.rewind-trailer",
              values: { br: (0, j.jsx)("br", {}) },
            }),
            { togglePlay: g, isPlaying: C } = (0, d.bA$)({
              playContextParams: {
                contextData: Y({
                  variant: t,
                  id: null == r ? void 0 : r.id,
                  uuid: null == r ? void 0 : r.uuid,
                  from: p,
                  utmLink: s,
                }),
                loadContextMeta: !0,
              },
            }),
            N = (0, S.useCallback)(() => {
              y(o, C), g();
            }, [C, o, y, g]),
            k = (0, S.useCallback)(() => {
              let e = en[t];
              e && x(o, e);
            }, [o, x, t]),
            I = (0, d.JcA)(c || 0),
            A = (0, d.M)(c || 0),
            E = (0, S.useMemo)(() => {
              let e, t;
              return (
                "number" == typeof c
                  ? ((e = I), (t = A))
                  : (e = {
                      "--trailer-color": null == r ? void 0 : r.averageColor,
                    }),
                (0, j.jsxs)("div", {
                  className: ev().coverContainer,
                  ...(0, T.BA)(T.QM.trailer.TRAILER_COVER),
                  children: [
                    (0, j.jsx)(eu.Paper, {
                      radius: h,
                      className: ev().cover,
                      style: t,
                      withShadow: !0,
                      children: (0, j.jsx)(ed.Image, {
                        "aria-hidden": !0,
                        src: null == r ? void 0 : r.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                    }),
                    (0, j.jsx)("div", {
                      className: ev().iconContainer,
                      style: e,
                      children: (0, j.jsx)(w.Icon, {
                        variant: "trailer",
                        size: "xs",
                        className: ev().icon,
                      }),
                    }),
                  ],
                })
              );
            }, [
              h,
              null == r ? void 0 : r.coverUri,
              A,
              null == r ? void 0 : r.averageColor,
              c,
              I,
            ]),
            M = (0, S.useMemo)(() => {
              let e = null == r ? void 0 : r.getUrl(t);
              return e
                ? (0, j.jsx)(D.rU, {
                    href: e,
                    className: ev().link,
                    onClick: k,
                    ...(0, T.BA)(T.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: (0, j.jsx)(q.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: ev().text,
                      children: null == r ? void 0 : r.title,
                    }),
                  })
                : (0, j.jsx)(q.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: ev().text,
                    ...(0, T.BA)(T.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: null == r ? void 0 : r.title,
                  });
            }, [k, r, t]),
            L = (0, S.useMemo)(
              () =>
                (0, j.jsxs)("div", {
                  className: ev().textContainer,
                  children: [
                    (0, j.jsx)(q.Heading, {
                      variant: "h1",
                      className: (0, V.W)(ev().text, ev().title),
                      lineClamp: 1,
                      ...(0, T.BA)(T.QM.trailer.TRAILER_MODAL_TITLE),
                      children: m,
                    }),
                    M,
                  ],
                }),
              [M, m],
            ),
            { href: R } = (0, d.qKB)(
              ""
                .concat(null == r ? void 0 : r.getUrl(t), "?")
                .concat(d.wxR.OPEN_TRAILER, "=true"),
            ),
            B = (0, S.useCallback)(async () => {
              await window.navigator.clipboard.writeText(R),
                f(
                  (0, j.jsx)(D.Ct, {
                    entityTitle: null == r ? void 0 : r.title,
                    entityVariant: em(t),
                  }),
                  { containerId: d.W$x.INFO },
                );
            }, [f, null == r ? void 0 : r.title, R, t]);
          return (0, j.jsxs)("div", {
            className: (0, V.W)(ev().root, l),
            ...(0, T.BA)(T.QM.trailer.TRAILER_HEADER),
            children: [
              i ? ep(a, h) : E,
              i ? ex(a) : L,
              !i &&
                u &&
                (0, j.jsx)(P.z, {
                  className: ev().share,
                  icon: (0, j.jsx)(w.Icon, { variant: "share", size: "xxs" }),
                  onClick: B,
                  variant: "text",
                  withRipple: !1,
                  withHover: !1,
                }),
              !i &&
                (0, j.jsx)(D.Wd, {
                  customMessage: v ? b : void 0,
                  shouldForceOpenTooltip: !!_,
                  children: (0, j.jsx)(D.JM, {
                    className: ev().playButton,
                    iconSize: "m",
                    variant: "filled",
                    isPlaying: C,
                    iconClassName: ev().playButtonIcon,
                    onClick: N,
                  }),
                }),
            ],
          });
        }),
        eh = (e) => {
          let t = (0, d.wLl)(),
            i = (0, d.z$f)(),
            { hash: a } = (0, d.RQn)(),
            { pageId: n } = (0, d.lVB)(),
            {
              blockType: l,
              blockId: r,
              blockPosX: o,
              blockPosY: s,
            } = (0, d.qYG)(),
            {
              objectType: c,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: v,
            } = (0, d.rKX)();
          return (0, S.useCallback)(
            (p) => {
              if (!i || !n) return;
              let x = d.x3Y[n];
              if (!x) return;
              let y = {
                hash: a,
                pageId: x,
                mainObjectType: M.OB.Trailer,
                mainObjectId: e,
                entityType: l,
                entityId: r,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: c,
                objectId: m,
                objectPosX: _,
                objectPosY: v,
                userInteractionType: M.wt.Tap,
              };
              p
                ? (y.actionType = M.Us.Dislike)
                : (y.actionType = M.Us.Undislike);
              let h = (0, d.KOr)({ params: y, logger: t, context: eh.name });
              h && (0, M.rx)(i.evgenInstance, h);
            },
            [i, r, o, s, l, a, t, e, m, _, v, c, u, n],
          );
        },
        ef = (e) => {
          let t = (0, d.wLl)(),
            i = (0, d.z$f)(),
            { hash: a } = (0, d.RQn)(),
            { pageId: n } = (0, d.lVB)(),
            {
              blockType: l,
              blockId: r,
              blockPosX: o,
              blockPosY: s,
            } = (0, d.qYG)(),
            {
              objectType: c,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: v,
            } = (0, d.rKX)();
          return (0, S.useCallback)(
            (p) => {
              if (!i || !n) return;
              let x = d.x3Y[n];
              if (!x) return;
              let y = {
                hash: a,
                pageId: x,
                mainObjectType: M.OB.Trailer,
                mainObjectId: e,
                entityType: l,
                entityId: r,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: c,
                objectId: m,
                objectPosX: _,
                objectPosY: v,
                userInteractionType: M.wt.Tap,
              };
              p ? (y.actionType = M.Us.Like) : (y.actionType = M.Us.Unlike);
              let h = (0, d.KOr)({ params: y, logger: t, context: ef.name });
              h && (0, M.rx)(i.evgenInstance, h);
            },
            [i, r, o, s, l, a, t, e, m, _, v, c, u, n],
          );
        },
        eb = (e, t) => {
          let i = (0, d.wLl)(),
            a = (0, d.z$f)(),
            { hash: n } = (0, d.RQn)(),
            { pageId: l } = (0, d.lVB)(),
            {
              blockType: r,
              blockId: o,
              blockPosX: s,
              blockPosY: c,
            } = (0, d.qYG)(),
            {
              objectType: u,
              objectsCount: m,
              objectId: _,
              objectPosX: v,
              objectPosY: p,
            } = (0, d.rKX)();
          return (0, S.useCallback)(() => {
            if (!a || !l) return;
            let x = d.x3Y[l];
            if (!x) return;
            let y = {
                hash: n,
                pageId: x,
                mainObjectType: M.OB.Trailer,
                mainObjectId: e,
                entityType: r,
                entityId: o,
                entityPosX: s,
                entityPosY: c,
                objectsCount: m,
                viewUuid: t,
                objectType: u,
                objectId: _,
                objectPosX: v,
                objectPosY: p,
              },
              h = (0, d.KOr)({ params: y, logger: i, context: eb.name });
            h && (0, M.PB)(a.evgenInstance, h);
          }, [a, o, s, c, r, n, i, e, _, v, p, u, m, l, t]);
        },
        eg = (e) =>
          "object" == typeof e &&
          null !== e &&
          "actionType" in e &&
          "mainObjectId" in e,
        eC = (e) => {
          let t = (0, d.wLl)(),
            i = (0, d.z$f)(),
            { hash: a } = (0, d.RQn)(),
            { pageId: n } = (0, d.lVB)(),
            {
              blockType: l,
              blockId: r,
              blockPosX: o,
              blockPosY: s,
            } = (0, d.qYG)(),
            {
              objectType: c,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: v,
            } = (0, d.rKX)();
          return (0, S.useCallback)(
            (p) => {
              if (!i || !n) return;
              let x = d.x3Y[n];
              if (!x) return;
              let y = {
                hash: a,
                pageId: x,
                mainObjectType: M.OB.Trailer,
                mainObjectId: e,
                entityType: l,
                entityId: r,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: c,
                objectId: m,
                objectPosX: _,
                objectPosY: v,
              };
              p ||
                ((y.actionType = M.Us.Pause),
                (y.userInteractionType = M.wt.Tap));
              let h = (0, d.KOr)({ params: y, logger: t, context: eC.name });
              h &&
                (!p && eg(h)
                  ? (0, M.rx)(i.evgenInstance, h)
                  : (0, M.yC)(i.evgenInstance, h));
            },
            [i, r, o, s, l, a, t, e, m, _, v, c, u, n],
          );
        },
        eN = (e, t) => {
          var i;
          let a = (0, d.R$C)(),
            {
              trailer: { state: n },
            } = (0, d.oR4)(),
            [l, r] = (0, S.useState)(0),
            o =
              (null === (i = n.entityMeta) || void 0 === i ? void 0 : i.id) ===
              e;
          return (
            (0, S.useEffect)(() => {
              let e =
                null == a
                  ? void 0
                  : a
                      .getState(d.jiA.TRAILER)
                      .playerState.progress.onChange(() => {
                        let e;
                        let i = a.getState(d.jiA.TRAILER).playerState,
                          n = i.progress.value;
                        (e = t ? t / 1e3 : n.duration),
                          o || r(0),
                          i.status.value === c.Xz.PLAYING &&
                            o &&
                            r((n.position / e) * 100);
                      });
              return () => {
                null == e || e();
              };
            }, [t, o, a]),
            { isActive: o, progress: l }
          );
        };
      var ek = i(17476),
        ej = i.n(ek);
      let eI = (0, I.Pi)((e) => {
        let { variant: t, track: i, playContextParams: a, viewUuid: l } = e,
          {
            trailer: {
              meta: r,
              objectId: o,
              shouldSendEventOnTracksShowed: s,
              setShouldSendEventOnTracksShowed: c,
            },
          } = (0, d.oR4)(),
          u = t === n.ALBUM ? y.dn : y.fY,
          { isActive: m, progress: _ } = eN(i.id, i.durationMs),
          v = eb(o, l),
          p = eC(o),
          x = ef(o),
          h = eh(o);
        (0, S.useEffect)(() => {
          s && (v(), c(!1));
        }, [v, c, s]);
        let f = (0, S.useMemo)(
          () => ({ "--track-progress": "".concat(_ || 0, "%") }),
          [_],
        );
        return (0, j.jsx)("div", {
          className: (0, V.W)(ej().root, { [ej().root_active]: m }),
          style: f,
          children: (0, j.jsx)(u, {
            position: i.positionInAlbum,
            withLightning: !!(null == i ? void 0 : i.isBest),
            track: i,
            playContextParams: a,
            albumArtists: null == r ? void 0 : r.albumArtists,
            onPlayClick: p,
            onLikeClick: x,
            onDislikeClick: h,
          }),
        });
      });
      var eS = i(30720),
        eA = i.n(eS);
      let eT = (e, t) => {
          let i = t === n.ALBUM ? d.Lxt.ALBUM : d.Lxt.PLAYLIST;
          return Array.from({ length: t === n.TRACK ? 1 : 5 }, (t, a) =>
            (0, j.jsx)(
              "div",
              {
                className: eA().trackContainer,
                children: (0, j.jsx)(D.DX, {
                  isActive: e,
                  className: (0, V.W)(eA().trackShimmer, {
                    [eA().albumShimmer]: i === d.Lxt.ALBUM,
                  }),
                  variant: i,
                }),
              },
              a,
            ),
          );
        },
        eP = (0, I.Pi)((e) => {
          let { variant: t } = e,
            {
              trailer: i,
              playlist: { setShouldShowTrailerOnboarding: a },
            } = (0, d.oR4)(),
            {
              isLoading: n,
              isRejected: l,
              tracks: r,
              meta: o,
              state: s,
              shouldAutoStartPlaying: c,
              setShouldAutoStartPlaying: u,
              isNotFound: m,
              modal: _,
              utmLink: v,
            } = i,
            p = (0, d.R$C)(),
            { from: x } = G({ variant: t, blockId: d.aUg.TRAILER, meta: o }),
            y = z(),
            h = F(),
            [f, b] = (0, S.useState)(!1),
            g = (0, S.useRef)((0, O.Z)()),
            C = n || l,
            { isPlaying: N } = (0, d.bA$)({
              playContextParams: {
                contextData: Y({
                  variant: t,
                  id: null == o ? void 0 : o.id,
                  uuid: null == o ? void 0 : o.uuid,
                  from: x,
                  utmLink: v,
                }),
                loadContextMeta: !0,
              },
            });
          (0, S.useEffect)(() => {
            _.isOpened &&
              (null == o ? void 0 : o.id) &&
              c &&
              (y(i.objectId),
              null == p ||
                p
                  .playContext(
                    {
                      contextData: Y({
                        variant: t,
                        id: null == o ? void 0 : o.id,
                        uuid: null == o ? void 0 : o.uuid,
                        from: x,
                        utmLink: v,
                      }),
                      queueParams: { index: 0 },
                      loadContextMeta: !0,
                    },
                    d.jiA.TRAILER,
                  )
                  .then(() => {
                    b(!0);
                  }),
              u(!1));
          }, [
            x,
            null == o ? void 0 : o.id,
            null == o ? void 0 : o.uuid,
            _.isOpened,
            y,
            h,
            u,
            c,
            p,
            s.status,
            i.objectId,
            t,
            v,
            N,
          ]),
            (0, S.useEffect)(() => {
              f && (N ? (h(i.objectId), b(!1)) : a(!0));
            }, [f, N, h, i.objectId, a]);
          let k = (0, S.useCallback)(
              (e) => ({
                contextData: Y({
                  variant: t,
                  id: null == o ? void 0 : o.id,
                  uuid: null == o ? void 0 : o.uuid,
                  from: x,
                  utmLink: v,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [x, null == o ? void 0 : o.id, null == o ? void 0 : o.uuid, t, v],
            ),
            I = (0, S.useMemo)(
              () =>
                C
                  ? eT(n, t)
                  : null == r
                    ? void 0
                    : r.map((e, i) =>
                        (0, j.jsx)(
                          d.Ja5,
                          {
                            blockType: M.OB.SmartPreview,
                            blockId: e.id,
                            blockPosX: 1,
                            blockPosY: 1,
                            children: (0, j.jsx)(d.nZ5, {
                              objectType: M.OB.SmartPreview,
                              objectId: e.id,
                              objectPosX: 1,
                              objectPosY: i + 1,
                              objectsCount: r.length,
                              children: (0, j.jsx)(eI, {
                                variant: t,
                                track: e,
                                playContextParams: k(i),
                                viewUuid: g.current,
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
              [k, n, C, r, t],
            );
          return l
            ? m
              ? (0, j.jsx)(J, {})
              : (0, j.jsx)(X, {})
            : (0, j.jsxs)("div", {
                className: eA().root,
                children: [
                  (0, j.jsx)(ey, {
                    isShimmerVisible: C,
                    isShimmerActive: n,
                    variant: t,
                    className: eA().header,
                  }),
                  I,
                  (0, j.jsx)(ec, {
                    isShimmerVisible: C,
                    isShimmerActive: n,
                    variant: t,
                    className: eA().footer,
                  }),
                ],
              });
        });
      var ew = i(25974),
        eE = i.n(ew);
      let eM = (0, I.Pi)(() => {
        let {
            settings: { isMobile: e },
            trailer: t,
            sonataState: i,
            fullscreenPlayer: a,
          } = (0, d.oR4)(),
          n = (0, d.R$C)(),
          { contentRef: l } = (0, d.$Y6)(),
          { formatMessage: r } = (0, A.Z)(),
          o = L();
        B(),
          (0, S.useEffect)(() => {
            let e =
                null == n
                  ? void 0
                  : n
                      .getState(d.jiA.TRAILER)
                      .queueState.currentEntity.onChange((e) => {
                        var i;
                        let a = null == e ? void 0 : e.context.data.type,
                          n = null == e ? void 0 : e.context.data.meta.id;
                        t.state.setEntityMeta(
                          null !== (i = null == e ? void 0 : e.entity) &&
                            void 0 !== i
                            ? i
                            : null,
                        ),
                          a && t.state.setContextType(a),
                          n && t.state.setContextId(n);
                      }),
              i =
                null == n
                  ? void 0
                  : n
                      .getState(d.jiA.TRAILER)
                      .playerState.status.onChange((e) => {
                        e && t.state.setStatus(e);
                      }),
              a =
                null == n
                  ? void 0
                  : n.state.playerState.volume.onChange(() => {
                      let e = n.state.playerState.volume.value;
                      "number" == typeof e && n.setVolume(e, d.jiA.TRAILER);
                    });
            return () => {
              null == e || e(), null == i || i(), null == a || a();
            };
          }, [n, t.state]);
        let s = (0, S.useCallback)(() => {
            null == n ||
              n.stop(d.jiA.TRAILER).finally(() => {
                t.sonataStatusBeforeTrailerStart !== c.Xz.PLAYING ||
                  t.isManuallyPaused ||
                  null == n ||
                  n.resume(),
                  t.setAnimationState(!0),
                  t.resetUtmLink(),
                  t.modal.close(),
                  o(t.objectId);
              });
          }, [o, n, t]),
          u = (0, S.useCallback)(
            (e) => {
              t.modal.onOpenChange(e), e || s();
            },
            [s, t.modal],
          );
        return (
          (0, S.useEffect)(() => {
            t.modal.isOpened && t.isLoaded && i.status === c.Xz.PLAYING && s();
          }, [s, i.status, t, t.modal.isOpened]),
          (0, S.useEffect)(() => {
            t.modal.isOpened && t.isLoaded && t.setAnimationState(!1);
          }, [t]),
          (0, S.useEffect)(() => {
            a.modal.isOpened && t.modal.isOpened && s();
          }, [a.modal.isOpened, s, t.modal.isOpened]),
          (0, j.jsxs)(E.u, {
            size: "fitContent",
            placement: e ? "default" : "right",
            open: t.modal.isOpened,
            onOpenChange: u,
            onClose: s,
            className: eE().root,
            contentClassName: eE().modalContent,
            portalNode: e ? null : l,
            showHeader: !1,
            withOverlay: e,
            closeOnOutsidePress: e,
            containerProps: (0, T.BA)(T.QM.trailer.TRAILER_MODAL),
            withAnimation: t.withAnimation,
            isMobile: e,
            lockScroll: e,
            overlayColor: "full",
            children: [
              !e &&
                (0, j.jsx)("div", {
                  className: eE().header,
                  children: (0, j.jsx)(P.z, {
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, j.jsx)(w.Icon, { variant: "close", size: "xxs" }),
                    onClick: s,
                    "aria-label": r({ id: "trailer.close" }),
                    ...(0, T.BA)(T.QM.trailer.TRAILER_CLOSE_BUTTON),
                  }),
                }),
              t.variant && (0, j.jsx)(eP, { variant: t.variant }),
            ],
          })
        );
      });
    },
    24653: function (e, t, i) {
      "use strict";
      i.d(t, {
        z: function () {
          return L;
        },
        y: function () {
          return l;
        },
      });
      var a = i(2685),
        n = i(91694);
      let l = a.V5.model("FullscreenVideoPlayer", {
        modal: n.KL,
        ids: a.V5.array(a.V5.number),
      }).actions((e) => ({
        setIds(t) {
          e.ids = (0, a.pj)(t);
        },
      }));
      var r = i(65301),
        o = i(96233),
        s = i(58997),
        c = i(9695),
        d = i(91207),
        u = i(37184),
        m = i(55975),
        _ = i(78372),
        v = i(82036),
        p = i(14386),
        x = i(77702),
        y = i(26382),
        h = i(81469),
        f = i(61177),
        b = i(73054),
        g = i(3154),
        C = i(29778),
        N = i(92154),
        k = i(69682),
        j = i.n(k);
      let I = (0, o.Pi)((e) => {
        let {
            onOpenChange: t,
            open: i,
            placement: a,
            icon: n,
            size: l,
            ...o
          } = e,
          { formatMessage: s } = (0, u.Z)();
        return (0, r.jsxs)(N.v2, {
          menuClassName: j().menu,
          isMobile: !1,
          placement: a,
          offsetOptions: 10,
          open: i,
          onOpenChange: t,
          icon: n,
          size: l,
          containerProps: (0, m.BA)(m.QM.videoPlayer.SETTINGS_CONTEXT_MENU),
          ariaLabel: s({ id: "interface-actions.context-menu" }),
          variant: "text",
          ...o,
          children: [
            (0, r.jsx)(C.xg, { menuClassName: j().submenu }),
            (0, r.jsx)(C.Cx, { menuClassName: j().submenu }),
          ],
        });
      });
      var S = i(92790),
        A = i.n(S);
      let T = (0, o.Pi)((e) => {
          let { entityMeta: t, onLikeClick: i } = e,
            {
              sonataState: a,
              fullscreenVideoPlayer: {
                ids: [n],
              },
            } = (0, s.oR4)(),
            l = (0, d.useMemo)(
              () =>
                t
                  ? (0, r.jsx)(g.ko, {
                      captionSize: "l",
                      track: t,
                      withSecondaryColor: !0,
                      withAlbumLink: !0,
                    })
                  : null,
              [t],
            );
          return (0, r.jsxs)("section", {
            className: A().root,
            children: [
              (0, r.jsxs)("div", {
                className: A().info,
                children: [
                  (0, r.jsx)("div", {
                    className: A().infoCard,
                    children:
                      t &&
                      (0, r.jsx)("div", {
                        className: A().description,
                        children: l,
                      }),
                  }),
                  (0, r.jsxs)("div", {
                    className: A().infoButtons,
                    children: [
                      n &&
                        (0, r.jsx)(x.Bp, {
                          placement: "top-start",
                          icon: (0, r.jsx)(v.Icon, {
                            variant: "more",
                            size: "m",
                          }),
                          size: "l",
                          id: n,
                        }),
                      t &&
                        (0, r.jsx)(C.dJ, {
                          className: A().likeButton,
                          isLiked: t.isLiked,
                          iconSize: "xs",
                          onClick: i,
                        }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: A().sonata,
                children: [
                  (0, r.jsx)(b.NI, {}),
                  !a.isGenerativeContext &&
                    (0, r.jsx)(h.Y, {
                      disabled: !t,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: A().meta,
                children: [
                  (0, r.jsx)(I, {
                    placement: "top",
                    icon: (0, r.jsx)(v.Icon, {
                      size: "xs",
                      variant: "settings",
                    }),
                    size: "xs",
                  }),
                  (0, r.jsx)(f.F, {}),
                ],
              }),
            ],
          });
        }),
        P = (0, o.Pi)((e) => {
          let { className: t } = e,
            { sonataState: i } = (0, s.oR4)(),
            a = (0, y.SB)(i.entityMeta),
            {
              settings: { isMobile: n },
            } = (0, s.oR4)();
          return n
            ? null
            : (0, r.jsx)(T, {
                onLikeClick: a,
                entityMeta: i.entityMeta,
                className: t,
              });
        });
      var w = i(47443),
        E = i.n(w);
      let M = (0, o.Pi)(() => {
          let { formatMessage: e } = (0, u.Z)(),
            { fullscreenVideoPlayer: t } = (0, s.oR4)(),
            i = (0, s.pCT)(),
            a = (0, s.hJm)(),
            n = (0, s.PYm)(),
            l = (0, d.useCallback)(() => {
              let e = (0, s.Phe)(s.wxR.IDS),
                i = (0, x.Yd)(e);
              t.setIds(i), i.length ? t.modal.open() : t.modal.close();
            }, [t]);
          (0, d.useEffect)(
            () => (
              window.addEventListener("popstate", l),
              () => {
                window.removeEventListener("popstate", l);
              }
            ),
            [l],
          );
          let o = (0, d.useCallback)(() => {
            if ((t.setIds([]), a(["/video"]))) {
              n("/"), t.modal.close();
              return;
            }
            i();
          }, [t, i, n, a]);
          return (0, r.jsxs)(p.u, {
            className: (0, c.W)(E().root, E().important),
            open: t.modal.isOpened,
            onOpenChange: t.modal.onOpenChange,
            onClose: o,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            contentClassName: E().modalContent,
            closeOnOutsidePress: !1,
            ...(0, m.BA)(m.QM.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL),
            children: [
              (0, r.jsx)("header", {
                className: E().header,
                children: (0, r.jsx)(_.z, {
                  className: E().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "m",
                  icon: (0, r.jsx)(v.Icon, {
                    variant: "arrowDown",
                    size: "xs",
                  }),
                  onClick: o,
                  "aria-label": e({ id: "interface-actions.close" }),
                  ...(0, m.BA)(
                    m.QM.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON,
                  ),
                }),
              }),
              (0, r.jsx)(P, {}),
            ],
          });
        }),
        L = (0, o.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, s.oR4)();
          return e ? null : (0, r.jsx)(M, {});
        });
    },
    39149: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return B;
        },
        k: function () {
          return m;
        },
      });
      var a = i(2685),
        n = i(9096),
        l = i(58997),
        r = i(91694),
        o = i(79491);
      let s = (e) => {
          let t = new Map();
          return (
            e.map((e) => {
              t.set(e.id, {
                loadingState: l.Gui.IDLE,
                artists: [],
                showedArtists: [],
              });
            }),
            o.LO.map(t)
          );
        },
        c = (e) => e.map((e) => ({ id: e.id, title: e.title })),
        d = (e) => {
          let {
              id: t,
              likedArtists: i,
              unlikedArtists: a,
              savedLikedArtists: n,
            } = e,
            l = {};
          if (i.includes(t))
            return (l.likedArtists = i.filter((e) => e !== t)), l;
          let r = n.includes(t),
            o = a.includes(t);
          return (
            ((l.unlikedArtists = a.filter((e) => e !== t)), r && !o)
              ? l.unlikedArtists.push(t)
              : (l.likedArtists = [...i, t]),
            l
          );
        },
        u = a.V5.model("WizardGenre", { id: a.V5.string, title: a.V5.string }),
        m = a.V5.model("Wizard", {
          loadingState: a.V5.enumeration(Object.values(l.Gui)),
          modal: r.KL,
          genres: a.V5.array(u),
          artistsByGenres: a.V5.maybe(a.V5.frozen()),
          savedLikedArtists: a.V5.array(a.V5.string),
          likedArtists: a.V5.array(a.V5.string),
          unlikedArtists: a.V5.array(a.V5.string),
          filter: a.V5.maybe(a.V5.string),
        })
          .views((e) => ({
            get genreItem() {
              var t;
              return null === (t = e.artistsByGenres) || void 0 === t
                ? void 0
                : t.get(e.filter);
            },
            get artistsByGenre() {
              var i;
              return (
                (null === (i = this.genreItem) || void 0 === i
                  ? void 0
                  : i.artists) || []
              );
            },
            get selectedArtistsCounter() {
              return (
                e.likedArtists.length +
                e.savedLikedArtists.length -
                e.unlikedArtists.length
              );
            },
            isArtistLiked: (t) =>
              !e.unlikedArtists.includes(t) &&
              (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
          }))
          .actions((e) => ({
            likeArtist: (t) => {
              let {
                  likedArtists: i,
                  unlikedArtists: n,
                  savedLikedArtists: l,
                } = e,
                r = d({
                  id: t,
                  likedArtists: i,
                  unlikedArtists: n,
                  savedLikedArtists: l,
                });
              r.likedArtists && (e.likedArtists = (0, a.pj)(r.likedArtists)),
                r.unlikedArtists &&
                  (e.unlikedArtists = (0, a.pj)(r.unlikedArtists));
            },
            setFilter: (t) => {
              e.filter = t;
            },
            getGenres: (0, a.ls)(function* () {
              let { feedResource: t, modelActionsLogger: i } = (0, a.dU)(e);
              if (
                e.loadingState !== l.Gui.PENDING &&
                e.loadingState !== l.Gui.RESOLVE
              )
                try {
                  var n;
                  e.loadingState = l.Gui.PENDING;
                  let { genres: i } = yield t.getWizardGenres();
                  if (((e.genres = (0, a.pj)(c(i))), !i.length))
                    throw Error("The wizard's genre array is empty");
                  (e.filter =
                    null === (n = i[0]) || void 0 === n ? void 0 : n.id),
                    (e.artistsByGenres = (0, a.pj)(s(i))),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  i.error(t),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                }
            }),
            getArtists: (0, a.ls)(function* (t) {
              let { feedResource: i, modelActionsLogger: r } = (0, a.dU)(e);
              if (e.loadingState !== l.Gui.RESOLVE || !e.filter) return;
              let o = e.artistsByGenres.get(e.filter);
              if (o.loadingState !== l.Gui.PENDING)
                try {
                  o.loadingState = l.Gui.PENDING;
                  let { artists: r = [], likedArtists: s = [] } =
                      yield i.getWizardArtistsByGenre({
                        genre: e.filter,
                        showedArtists: o.showedArtists,
                        likedArtists: e.likedArtists,
                        unlikedArtists: e.unlikedArtists,
                        countOfNewArtists: t,
                      }),
                    c = r.map((e) => (0, n.tR)({ artist: e })),
                    d = r.map((e) => e.id);
                  e.artistsByGenres.set(e.filter, {
                    artists: [...o.artists, ...c],
                    showedArtists: [...o.showedArtists, ...d],
                    loadingState: l.Gui.RESOLVE,
                  }),
                    (e.savedLikedArtists = (0, a.pj)(s.map((e) => String(e)))),
                    (e.likedArtists = (0, a.pj)([])),
                    (e.unlikedArtists = (0, a.pj)([]));
                } catch (e) {
                  r.error(e), (o.loadingState = l.Gui.REJECT);
                }
            }),
            finish: (0, a.ls)(function* () {
              let { feedResource: t, modelActionsLogger: i } = (0, a.dU)(e);
              if (!e.filter) return l.SLo.ERROR;
              try {
                return (
                  yield t.finishWizard({
                    genre: e.filter,
                    likedArtists: e.likedArtists,
                    unlikedArtists: e.unlikedArtists,
                  }),
                  l.SLo.OK
                );
              } catch (e) {
                return i.error(e), l.SLo.ERROR;
              }
            }),
          }));
      var _ = i(65301),
        v = i(9695),
        p = i(96233),
        x = i(91207),
        y = i(37184),
        h = i(44729),
        f = i(55975),
        b = i(91878),
        g = i(78372),
        C = i(14386),
        N = i(77670),
        k = i(81437),
        j = i(29778),
        I = i(28257),
        S = i(82036),
        A = i(43998),
        T = { src: "/_next/static/media/artist.c49b2bfa.png" },
        P = i(24598),
        w = i.n(P);
      let E = (0, p.Pi)((e) => {
        let { className: t, artist: i } = e,
          { ref: a, intersectionPropertyId: n } = (0, l.VfV)(),
          { likeArtist: r, isArtistLiked: o } = (0, l.oR4)().wizard,
          { id: s, name: c, coverUri: d } = i,
          u = (0, x.useCallback)(() => {
            r(s);
          }, [r, s]),
          m = o(s),
          p = (0, x.useMemo)(
            () =>
              (0, _.jsx)(A.Paper, {
                className: w().cover,
                radius: "round",
                ...(0, f.BA)(f.QM.wizard.ARTIST_CARD),
                children: (0, _.jsxs)(g.z, {
                  radius: "round",
                  className: w().coverBlock,
                  variant: "default",
                  onClick: u,
                  withRipple: !1,
                  withHover: !1,
                  "aria-pressed": m,
                  "aria-label": c,
                  children: [
                    (0, _.jsx)(j.BE, {
                      className: w().image,
                      src: d || T.src,
                      fit: "cover",
                      alt: c,
                      withAvatarReplace: !!d,
                      "aria-hidden": !0,
                    }),
                    (0, _.jsx)("div", {
                      className: (0, v.W)(w().like),
                      children: (0, _.jsx)(S.Icon, {
                        variant: "likedVariant",
                        size: "s",
                        className: w().icon,
                      }),
                    }),
                  ],
                }),
              }),
            [m, d, c, u],
          );
        return (0, _.jsx)(I.m7, {
          ref: a,
          className: (0, v.W)(w().root, { [w().root_selected]: m }, t),
          textPosition: "center",
          title: (0, _.jsx)(k.Caption, {
            "aria-hidden": !0,
            className: w().name,
            variant: "div",
            type: "entity",
            size: "l",
            weight: "medium",
            lineClamp: 2,
            children: c,
          }),
          "data-intersection-property-id": n,
          view: p,
          ...(0, f.BA)(f.bG.artist.ARTIST_ITEM),
        });
      });
      var M = i(20497),
        L = i.n(M);
      let R = {
          [l.t8m.Desktop]: { start: 40, end: 40 },
          [l.t8m.Mobile]: { start: 40, end: 40 },
        },
        B = (0, p.Pi)(() => {
          let { formatMessage: e } = (0, y.Z)(),
            {
              wizard: t,
              settings: {
                isMobile: i,
                isWindowsApplication: a,
                isLinuxApplication: n,
              },
              user: r,
            } = (0, l.oR4)(),
            { notify: o } = (0, l.d$W)(),
            s = (0, l.XUT)(),
            [c, d] = (0, b.z)(),
            u = (0, l.qR2)(),
            m = (0, N.useTabsState)(0),
            p = (0, x.useMemo)(
              () => (e) => {
                var i;
                if (!m.onTabChange || e === m.value) return;
                m.onTabChange(e);
                let a =
                  null === (i = t.genres[e]) || void 0 === i ? void 0 : i.id;
                t.setFilter(a), null == c || c.scrollTo({ top: 0 });
              },
              [t, m, c],
            ),
            I = (0, x.useMemo)(() => {
              switch (t.selectedArtistsCounter) {
                case 0:
                  return e({ id: "wizard.button-tune" });
                case 1:
                  return e({ id: "wizard.button-little-more" });
                case 2:
                  return e({ id: "wizard.button-one-more" });
                default:
                  return e({ id: "wizard.button-done" });
              }
            }, [t.selectedArtistsCounter, e]),
            S = (0, x.useMemo)(
              () =>
                (0, _.jsx)(j.no, {
                  className: L().tabCarousel,
                  ...m,
                  onTabChange: p,
                  isShimmerVisible: t.loadingState === l.Gui.PENDING,
                  shimmer: (0, _.jsx)(j.tS, {
                    isActive: !0,
                    className: L().tabCarousel,
                    shimmerClassName: L().tabShimmer,
                    count: i ? 2 : 3,
                  }),
                  children: t.genres.map((e, t) =>
                    (0, _.jsx)(
                      j.OK,
                      {
                        className: (0, v.W)(L().filter, {
                          [L().filter_selected]: t === m.value,
                        }),
                        titleClassName: L().tabTitle,
                        title: e.title,
                        value: t,
                      },
                      t,
                    ),
                  ),
                }),
              [t.genres, m, p, t.loadingState, i],
            ),
            A = (0, x.useCallback)(() => {
              t.getArtists(60);
            }, [t]);
          (0, x.useEffect)(() => {
            t.filter && A();
          }, [t.filter, A]);
          let T = (0, x.useCallback)(async () => {
            await t.getGenres(), A();
          }, [t, A]);
          (0, x.useEffect)(() => {
            t.modal.isOpened && T();
          }, [t, t.modal.isOpened, T]),
            (0, x.useEffect)(() => {
              t.loadingState === l.Gui.REJECT &&
                (t.modal.close(),
                o(
                  (0, _.jsx)(j.Q, {
                    error: e({ id: "error-messages.error-load-wizard" }),
                  }),
                  { containerId: l.W$x.ERROR },
                ));
            }, [t, t.getGenres, t.loadingState, e, o]);
          let P = (0, x.useMemo)(
              () =>
                (0, _.jsx)(k.Heading, {
                  className: L().title,
                  weight: "bold",
                  variant: "h1",
                  size: "l",
                  children: (0, _.jsx)(h.Z, { id: "wizard.modal-title" }),
                }),
              [],
            ),
            w = (0, x.useCallback)(async () => {
              t.selectedArtistsCounter < 3
                ? t.getArtists()
                : (await t.finish()) === l.SLo.OK &&
                  (await r.getSettings(), u()),
                t.modal.close();
            }, [u, r, t]);
          return (
            (0, x.useEffect)(
              () => (
                null == s ||
                  s.addShortcutsListener(l.Pwk.MAIN, l.yxF.CLOSE, () => {
                    t.modal.isOpened && w();
                  }),
                () => {
                  null == s ||
                    s.removeShortcutsListener(l.Pwk.MAIN, l.yxF.CLOSE);
                }
              ),
              [w, t.modal.isOpened, s],
            ),
            (0, _.jsxs)(C.u, {
              className: (0, v.W)(L().root, {
                [L().root_withCustomControls]: a || n,
              }),
              headerClassName: L().modalHeader,
              contentClassName: L().modalContent,
              open: t.modal.isOpened,
              onOpenChange: t.modal.onOpenChange,
              onClose: w,
              size: "fullscreen",
              placement: "center",
              labelClose: e({ id: "interface-actions.close" }),
              ...(0, f.BA)(f.QM.wizard.WIZARD_MODAL),
              header: i && P,
              escapeKey: !1,
              children: [
                (0, _.jsxs)("div", {
                  className: L().wrapper,
                  children: [
                    !i && P,
                    (0, _.jsx)(k.Caption, {
                      className: L().text,
                      variant: "div",
                      size: "l",
                      weight: "normal",
                      children: (0, _.jsx)(h.Z, { id: "wizard.modal-text" }),
                    }),
                    (0, _.jsx)(g.z, {
                      className: L().button,
                      size: i ? "m" : "l",
                      iconPosition: "right",
                      radius: "xxxl",
                      color: "primary",
                      onClick: w,
                      disabled: t.selectedArtistsCounter < 3,
                      children: (0, _.jsx)(k.Caption, {
                        variant: "div",
                        size: "m",
                        weight: "medium",
                        children: I,
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: L().mainContainer,
                  children: [
                    (0, _.jsx)(j.J3, {
                      className: L().carousel,
                      carouselElement: S,
                      scrollPadding: R,
                    }),
                    (0, _.jsx)(j.Wv, {
                      withFooter: !1,
                      className: (0, v.W)(L().scrollContainer, L().important),
                      itemContentCallback: (i) => {
                        let a = t.artistsByGenre[i];
                        if (!a) {
                          let t = e(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: e({ id: "entity-names.artist" }) },
                          );
                          return (0, _.jsx)(j.hi, {
                            "aria-label": t,
                            round: !0,
                            centered: !0,
                          });
                        }
                        return (0, _.jsx)(E, { artist: a }, a.id);
                      },
                      data: t.artistsByGenre,
                      endReached: A,
                      listClassName: L().content,
                      itemClassName: L().item,
                      pageSize: 60,
                      handleRef: d,
                    }),
                  ],
                }),
              ],
            })
          );
        });
    },
    84478: function (e) {
      e.exports = {
        root: "AdContainer_root__ti4rk",
        container: "AdContainer_container__DLRij",
        title: "AdContainer_title__AsPky",
        subtitle: "AdContainer_subtitle__LIOif",
        info: "AdContainer_info__EKKWS",
        favicon: "AdContainer_favicon__ry_3I",
        buttonContainer: "AdContainer_buttonContainer__SvDt3",
        button: "AdContainer_button__nQcMg",
        linkButton: "AdContainer_linkButton__rabLN",
      };
    },
    55033: function (e) {
      e.exports = {
        root_primary: "CommunicationButton_root_primary__rrmax",
        root_plus: "CommunicationButton_root_plus__d48MV",
        root_secondary: "CommunicationButton_root_secondary__YQujH",
        text: "CommunicationButton_text__kObnq",
      };
    },
    93824: function (e) {
      e.exports = {
        root: "BarBelow_root__KFexT",
        root_hidden: "BarBelow_root_hidden__eTKvU",
        root_show: "BarBelow_root_show__yIQBX",
        show: "BarBelow_show__5GQBP",
        root_hide: "BarBelow_root_hide__d1a_5",
        hide: "BarBelow_hide__a0dwD",
        image: "BarBelow_image__GfExj",
        content: "BarBelow_content__GWWbR",
        title: "BarBelow_title__hBNPY",
        text: "BarBelow_text__tU_Rm",
        buttons: "BarBelow_buttons__XGwDQ",
      };
    },
    60704: function (e) {
      e.exports = {
        timecode: "ChangeTimecode_timecode__UScFt",
        root: "ChangeTimecode_root__QxEw_",
        root_withTimecode: "ChangeTimecode_root_withTimecode__eJhYI",
        root_mobile: "ChangeTimecode_root_mobile__SzOdx",
        root_fullscreen: "ChangeTimecode_root_fullscreen__FA6r0",
        slider: "ChangeTimecode_slider__P4qmT",
      };
    },
    77043: function (e) {
      e.exports = {
        root: "Timecode_root__TLT75",
        root_start: "Timecode_root_start__pHG5N",
        root_end: "Timecode_root_end__LLQsh",
      };
    },
    22816: function (e) {
      e.exports = {
        root: "ChangeVolume_root__HDxtA",
        icon: "ChangeVolume_icon__5Zv2a",
        button: "ChangeVolume_button__4HLEr",
      };
    },
    83073: function (e) {
      e.exports = {
        modalHeader: "CommunicationModal_modalHeader__TnzU6",
        modalContent: "CommunicationModal_modalContent__d8REH",
        container: "CommunicationModal_container__BIgb7",
        wrapper: "CommunicationModal_wrapper__SRy17",
        imageWrapper: "CommunicationModal_imageWrapper__LOr5C",
        imageWrapper_content: "CommunicationModal_imageWrapper_content__PfjQl",
        imageWrapper_header: "CommunicationModal_imageWrapper_header__8wsRZ",
        image: "CommunicationModal_image__qzXK8",
        title: "CommunicationModal_title__yvFAn",
        text: "CommunicationModal_text__gGaLU",
        buttons: "CommunicationModal_buttons__MDmp2",
        disclaimerWrapper: "CommunicationModal_disclaimerWrapper__pMRYf",
        disclaimer: "CommunicationModal_disclaimer__NJJSA",
        disclaimerLink: "CommunicationModal_disclaimerLink__8yuBO",
        root: "CommunicationModal_root__1dOYE",
        root_modal: "CommunicationModal_root_modal__u_igG",
        button: "CommunicationModal_button__qysqU",
        root_fullscreen: "CommunicationModal_root_fullscreen__41Y5Y",
        buttonText: "CommunicationModal_buttonText__2XS8u",
      };
    },
    4347: function (e) {
      e.exports = {
        icon: "NotificationHtmlCodeCopied_icon__qJMbi",
        message: "NotificationHtmlCodeCopied_message__ivRvX",
      };
    },
    34532: function (e) {
      e.exports = {
        root: "ShareIframeEditor_root__LALvp",
        controls: "ShareIframeEditor_controls__k8vT_",
        settings: "ShareIframeEditor_settings__UWt51",
        sizeInputContainer: "ShareIframeEditor_sizeInputContainer__s6PMW",
        copyButton: "ShareIframeEditor_copyButton___jOz_",
        iframeCodeInput: "ShareIframeEditor_iframeCodeInput__M9w6E",
        iframeCodeInputContainer:
          "ShareIframeEditor_iframeCodeInputContainer__b4Klq",
        iframeContainer: "ShareIframeEditor_iframeContainer__pgdr5",
        iframe: "ShareIframeEditor_iframe__ky5_o",
      };
    },
    39163: function (e) {
      e.exports = {
        root: "ShareIframeModal_root__t_NbK",
        content: "ShareIframeModal_content__jcq_o",
      };
    },
    31015: function (e) {
      e.exports = {
        root: "TrackModal_root__QrFg6",
        header: "TrackModal_header__hjfRd",
        closeButton: "TrackModal_closeButton__VLm_R",
        modalContent: "TrackModal_modalContent__AzQPF",
        content: "TrackModal_content__9qH7W",
        container: "TrackModal_container__JaG86",
      };
    },
    59071: function (e) {
      e.exports = {
        root: "TrackModalAlbum_root__ux7J4",
        title: "TrackModalAlbum_title__CtM2_",
      };
    },
    45742: function (e) {
      e.exports = {
        root: "TrackModalAlbumShimmer_root__iGoUU",
        title: "TrackModalAlbumShimmer_title__2jt8z",
        coverBlock: "TrackModalAlbumShimmer_coverBlock__PQFDQ",
        cover: "TrackModalAlbumShimmer_cover__AI0zt",
        linkBlock: "TrackModalAlbumShimmer_linkBlock__yBLL4",
        link: "TrackModalAlbumShimmer_link__7_gHs",
        description: "TrackModalAlbumShimmer_description__63Pnt",
      };
    },
    50229: function (e) {
      e.exports = {
        root: "TrackModalControls_root__alpd3",
        menuWrapper: "TrackModalControls_menuWrapper__tDLID",
        menuButton: "TrackModalControls_menuButton__V6L4c",
      };
    },
    14076: function (e) {
      e.exports = {
        root: "TrackModalLyrics_root__JABJp",
        title: "TrackModalLyrics_title__zjWl_",
        button: "TrackModalLyrics_button__YqxIm",
        lyrics: "TrackModalLyrics_lyrics__naoEF",
      };
    },
    74593: function (e) {
      e.exports = {
        root: "TrackModalLyricsShimmer_root__t88sX",
        title: "TrackModalLyricsShimmer_title__lIyk4",
        lyrics: "TrackModalLyricsShimmer_lyrics__BSM_Q",
        important: "TrackModalLyricsShimmer_important__U1BbD",
        button: "TrackModalLyricsShimmer_button__uAG_w",
      };
    },
    9604: function (e) {
      e.exports = {
        root: "TrackModalSimilarTracks_root__EAOmg",
        title: "TrackModalSimilarTracks_title__0WPaJ",
        item: "TrackModalSimilarTracks_item__BGQWd",
        important: "TrackModalSimilarTracks_important__mGqEv",
        tracksContainer: "TrackModalSimilarTracks_tracksContainer__E55ep",
      };
    },
    32040: function (e) {
      e.exports = {
        root: "TrackModalTitle_root__6qDpD",
        important: "TrackModalTitle_important__qNVlq",
        content: "TrackModalTitle_content__mtQKw",
        explicitMark: "TrackModalTitle_explicitMark__aRT_I",
        text: "TrackModalTitle_text__3iWX4",
        artistCaption: "TrackModalTitle_artistCaption__Sj1CR",
        link: "TrackModalTitle_link__kzVsl",
        meta: "TrackModalTitle_meta__xlEgt",
      };
    },
    23533: function (e) {
      e.exports = {
        root: "TrackModalTitleShimmer_root__woixY",
        entityName: "TrackModalTitleShimmer_entityName__9NMYB",
        title: "TrackModalTitleShimmer_title__PXJfS",
        artists: "TrackModalTitleShimmer_artists__mz6q9",
        important: "TrackModalTitleShimmer_important__uBJ8_",
        artist: "TrackModalTitleShimmer_artist__fre6F",
        controls: "TrackModalTitleShimmer_controls__0kNh8",
        playButton: "TrackModalTitleShimmer_playButton__PYklv",
        button: "TrackModalTitleShimmer_button__j5_GI",
      };
    },
    52990: function (e) {
      e.exports = {
        image: "FamilyInviteErrorView_image__OyVA_",
        image_small: "FamilyInviteErrorView_image_small__uczsu",
      };
    },
    14509: function (e) {
      e.exports = {
        root: "FamilyInviteInviter_root__2XR_p",
        icon: "FamilyInviteInviter_icon__e5pZe",
        important: "FamilyInviteInviter_important__wl_l1",
        iconShimmer: "FamilyInviteInviter_iconShimmer__Dbxw_",
        root_mobile: "FamilyInviteInviter_root_mobile__LRDAo",
        name: "FamilyInviteInviter_name__0E0QC",
        nameShimmer: "FamilyInviteInviter_nameShimmer__Zzoa1",
      };
    },
    27952: function (e) {
      e.exports = {
        growContainer: "FamilyInviteStepInfo_growContainer__y0xmo",
        important: "FamilyInviteStepInfo_important__YvkpI",
      };
    },
    10375: function (e) {
      e.exports = {
        image: "FamilyInviteStepSuccess_image__kDBnc",
        image_mobile: "FamilyInviteStepSuccess_image_mobile__PyiXK",
      };
    },
    5793: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    1646: function (e) {
      e.exports = {
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        root: "NavbarDesktop_root__scYzp",
        logoWrapper: "NavbarDesktop_logoWrapper__89ce6",
        navigation: "NavbarDesktop_navigation__dLUGW",
        logoLink: "NavbarDesktop_logoLink__KR0Dk",
        logo: "NavbarDesktop_logo__Z4jGx",
        collapseButtonTooltip_hidden:
          "NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ",
        title: "NavbarDesktop_title__OrnHN",
        title_animate: "NavbarDesktop_title_animate__XLxaQ",
        animation_show: "NavbarDesktop_animation_show__pRFj9",
        title_collapsed: "NavbarDesktop_title_collapsed__IH9Bc",
        animation_hide: "NavbarDesktop_animation_hide__8VxPs",
        pinsList: "NavbarDesktop_pinsList___jXIM",
        scrollableContainer: "NavbarDesktop_scrollableContainer__HLc9D",
        scrollableContent: "NavbarDesktop_scrollableContent__OyU4P",
        disabledNavigationItem: "NavbarDesktop_disabledNavigationItem__Qp_hs",
      };
    },
    18306: function (e) {
      e.exports = {
        root: "NavbarDesktopAnimatedBar_root__tTyvO",
        bar: "NavbarDesktopAnimatedBar_bar__Wge_o",
        bar_enter: "NavbarDesktopAnimatedBar_bar_enter__pUWOV",
        bar_enter_active: "NavbarDesktopAnimatedBar_bar_enter_active__cYAzl",
        animation_show: "NavbarDesktopAnimatedBar_animation_show__oAMq1",
        animation_scale: "NavbarDesktopAnimatedBar_animation_scale__iOhup",
        bar_exit: "NavbarDesktopAnimatedBar_bar_exit__Wq1AL",
        bar_exit_active: "NavbarDesktopAnimatedBar_bar_exit_active__EZFDU",
        animation_hide: "NavbarDesktopAnimatedBar_animation_hide__Eiu1e",
        animation_unscale: "NavbarDesktopAnimatedBar_animation_unscale__gyZb6",
        button: "NavbarDesktopAnimatedBar_button__T7n21",
        button_enter: "NavbarDesktopAnimatedBar_button_enter__6v5a5",
        button_enter_active:
          "NavbarDesktopAnimatedBar_button_enter_active__jZmtw",
        button_exit: "NavbarDesktopAnimatedBar_button_exit__j8qXO",
        button_exit_active:
          "NavbarDesktopAnimatedBar_button_exit_active__D5JJp",
      };
    },
    78545: function (e) {
      e.exports = {
        root: "NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0",
        closeButton:
          "NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j",
        text: "NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E",
        downloadButtonText:
          "NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa",
        textBright:
          "NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf",
        closeButtonIcon:
          "NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS",
        downloadButtonIcon:
          "NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc",
      };
    },
    25456: function (e) {
      e.exports = {
        root: "NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ",
        icon: "NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec",
        button: "NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw",
      };
    },
    70523: function (e) {
      e.exports = {
        root: "NavbarDesktopAnimatedPlusBar_root___wH9W",
        button: "NavbarDesktopAnimatedPlusBar_button__IX7L4",
        important: "NavbarDesktopAnimatedPlusBar_important__7R916",
      };
    },
    33918: function (e) {
      e.exports = {
        root: "NavbarDesktopPlusBar_root__QgKqJ",
        logos: "NavbarDesktopPlusBar_logos__kKKEl",
        addition: "NavbarDesktopPlusBar_addition__vluXf",
        title: "NavbarDesktopPlusBar_title__mMdem",
        buttons: "NavbarDesktopPlusBar_buttons__40_1A",
        button: "NavbarDesktopPlusBar_button__3K8rY",
        plusButtonShimmer: "NavbarDesktopPlusBar_plusButtonShimmer__058ae",
      };
    },
    57363: function (e) {
      e.exports = {
        root: "NavbarDesktopUnauthorizedBar_root__uQZ9L",
        title: "NavbarDesktopUnauthorizedBar_title__vf0W7",
        subtitle: "NavbarDesktopUnauthorizedBar_subtitle__anNNQ",
        userProfile: "NavbarDesktopUnauthorizedBar_userProfile__hAABb",
        userId: "NavbarDesktopUnauthorizedBar_userId__m0jC6",
      };
    },
    2819: function (e) {
      e.exports = {
        userProfileContainer:
          "NavbarDesktopUserWidget_userProfileContainer__ha3Tm",
        userId: "NavbarDesktopUserWidget_userId__ihL7U",
        userMeta_withAnimation:
          "NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y",
        animation_show: "NavbarDesktopUserWidget_animation_show__fadL3",
        userMeta_collapsed: "NavbarDesktopUserWidget_userMeta_collapsed__cSARy",
        animation_hide: "NavbarDesktopUserWidget_animation_hide__tO81o",
        unauthorizedBar: "NavbarDesktopUserWidget_unauthorizedBar__HE5Yu",
      };
    },
    71538: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
        disabledNavigationItem: "NavbarMobile_disabledNavigationItem__PA3EE",
      };
    },
    997: function (e) {
      e.exports = {
        root: "Pin_root__UyplT",
        ripple: "Pin_ripple__Vzpzs",
        link: "Pin_link__nz6I7",
        root_withoutLink: "Pin_root_withoutLink__fr1XH",
        info: "Pin_info__x_7Zx",
        info_withContextMenu: "Pin_info_withContextMenu__7HX5A",
        info_collapsed: "Pin_info_collapsed__bF9ac",
        info_animated: "Pin_info_animated__AQQZk",
        show: "Pin_show__xSkOa",
        hide: "Pin_hide__RCc9X",
        meta: "Pin_meta__MzX_7",
        contextMenu: "Pin_contextMenu__WGmhp",
        contextMenu_hidden: "Pin_contextMenu_hidden__xksGY",
        title: "Pin_title__Jw5WW",
        subtitle: "Pin_subtitle__rb8Gq",
        cover: "Pin_cover__7ofYY",
        cover_withAnimation: "Pin_cover_withAnimation__2Z2n6",
        show_and_scale: "Pin_show_and_scale__VdNfj",
      };
    },
    99056: function (e) {
      e.exports = {
        contextMenu: "PinItem_contextMenu__VwiFp",
        contextMenu_visible: "PinItem_contextMenu_visible__Zgwkh",
        root: "PinItem_root__WSoCn",
        image: "PinItem_image__Ow56U",
        animation: "PinItem_animation__syCWX",
        cover: "PinItem_cover__9TcjE",
        tooltip: "PinItem_tooltip__BGwBw",
      };
    },
    39732: function (e) {
      e.exports = {
        root: "PinsList_root__LN_2Z",
        root_withScroll: "PinsList_root_withScroll__g8x3V",
        root_hasPins: "PinsList_root_hasPins__3LXlo",
        content: "PinsList_content__9RG7s",
        pin_enter: "PinsList_pin_enter__2p2_6",
        pin_enter_active: "PinsList_pin_enter_active__eNGlc",
        "enter-fade": "PinsList_enter-fade__G_QY8",
        "enter-move": "PinsList_enter-move__DSAXH",
        pin_exit: "PinsList_pin_exit__y_gcM",
        pin_exit_active: "PinsList_pin_exit_active__rF5Je",
        "exit-fade": "PinsList_exit-fade__M6fYX",
        "exit-move": "PinsList_exit-move__Jtgi0",
      };
    },
    48455: function (e) {
      e.exports = {
        imageContainer: "AudioAd_imageContainer__ZmZsg",
        image: "AudioAd_image__f6DJR",
        image_fallback: "AudioAd_image_fallback__7ufC3",
        backgroundImage: "AudioAd_backgroundImage__aqvQd",
        contextMenuButton: "AudioAd_contextMenuButton__fbb47",
        contextMenuIcon: "AudioAd_contextMenuIcon__KTxE1",
        contextMenuHeader: "AudioAd_contextMenuHeader__97XqU",
      };
    },
    48507: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktop_root___8vo1",
        important: "FullscreenPlayerDesktop_important__dGfiL",
        header: "FullscreenPlayerDesktop_header__OBhzq",
        modalContent: "FullscreenPlayerDesktop_modalContent__Zs_LC",
        notification: "FullscreenPlayerDesktop_notification__luD_J",
        closeButton: "FullscreenPlayerDesktop_closeButton__MQ64s",
      };
    },
    48285: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopButton_root__qGgoC",
        button: "FullscreenPlayerDesktopButton_button__7NEl6",
      };
    },
    30946: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopContent_root__tKNGK",
        fullscreenContent:
          "FullscreenPlayerDesktopContent_fullscreenContent__Nvety",
        fullscreenContent_enter:
          "FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y",
        "enter-fade-fullscreen-content":
          "FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM",
        fullscreenContent_leave:
          "FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_",
        "leave-fade-fullscreen-content":
          "FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5",
        fullscreenContent_withDisabledInsetTransition:
          "FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__",
        additionalContent:
          "FullscreenPlayerDesktopContent_additionalContent__tuuy7",
        additionalContent_enter:
          "FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC",
        additionalContent_enter_active:
          "FullscreenPlayerDesktopContent_additionalContent_enter_active__a3nOf",
        "enter-fade-additional-content":
          "FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_",
        additionalContent_exit:
          "FullscreenPlayerDesktopContent_additionalContent_exit__aM4Or",
        additionalContent_exit_active:
          "FullscreenPlayerDesktopContent_additionalContent_exit_active__vokVE",
        "leave-fade-additional-content":
          "FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp",
        additionalContent_withDisabledInsetTransition:
          "FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh",
        info: "FullscreenPlayerDesktopContent_info__Dq69p",
        artists: "FullscreenPlayerDesktopContent_artists__a_2G3",
        nonMusicAuthors:
          "FullscreenPlayerDesktopContent_nonMusicAuthors__JhhPY",
        meta: "FullscreenPlayerDesktopContent_meta__3jDTy",
        title: "FullscreenPlayerDesktopContent_title__I2JrP",
        meta_isSplitMode:
          "FullscreenPlayerDesktopContent_meta_isSplitMode__zPC2S",
        ellipsis: "FullscreenPlayerDesktopContent_ellipsis__2Qk2b",
        sliderContainer:
          "FullscreenPlayerDesktopContent_sliderContainer__FtBZ7",
        slider: "FullscreenPlayerDesktopContent_slider__FJscl",
        syncLyrics: "FullscreenPlayerDesktopContent_syncLyrics__6dTfH",
        syncLyricsContent:
          "FullscreenPlayerDesktopContent_syncLyricsContent__H_enX",
        syncLyricsLoader:
          "FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9",
        syncLyricsScroller:
          "FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK",
        syncLyricsFooter:
          "FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ",
        syncLyricsCounter:
          "FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k",
      };
    },
    75648: function (e) {
      e.exports = {
        bottomRightButtonsWrapper:
          "FullscreenPlayerDesktopControls_bottomRightButtonsWrapper__EvGiZ",
        root: "FullscreenPlayerDesktopControls_root__tviu4",
        root_visible: "FullscreenPlayerDesktopControls_root_visible__1b9xD",
        sonataControls: "FullscreenPlayerDesktopControls_sonataControls__9AIki",
        menuWrapper: "FullscreenPlayerDesktopControls_menuWrapper__ifxNx",
        syncLyricsButton:
          "FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g",
        playQueueButton:
          "FullscreenPlayerDesktopControls_playQueueButton__reNOW",
        speedButton: "FullscreenPlayerDesktopControls_speedButton__uTbyy",
        likeButton: "FullscreenPlayerDesktopControls_likeButton__vpJ7S",
        menuButton: "FullscreenPlayerDesktopControls_menuButton__R4cXl",
        likeButton_active:
          "FullscreenPlayerDesktopControls_likeButton_active__XltBK",
        menuButton_active:
          "FullscreenPlayerDesktopControls_menuButton_active__YZ8M8",
        playQueueButton_active:
          "FullscreenPlayerDesktopControls_playQueueButton_active___SA85",
        speedButton_active:
          "FullscreenPlayerDesktopControls_speedButton_active__H_EXl",
        syncLyricsButton_active:
          "FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH",
        fullscreenPlayerButton:
          "FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS",
        fullscreenPlayerButton_visible:
          "FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X",
      };
    },
    31523: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopPoster_root__d__YD",
        cover: "FullscreenPlayerDesktopPoster_cover__CDmhM",
      };
    },
    29044: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobile_root__Sqyh0",
        important: "FullscreenPlayerMobile_important__1lAN3",
        header: "FullscreenPlayerMobile_header__8KH28",
        headerCenter: "FullscreenPlayerMobile_headerCenter___EqSP",
        modalContent: "FullscreenPlayerMobile_modalContent__m2cbB",
        castButton: "FullscreenPlayerMobile_castButton__3ZgER",
        footer: "FullscreenPlayerMobile_footer__LRvhK",
        footerContainer: "FullscreenPlayerMobile_footerContainer__aupK1",
        playQueueButton_active:
          "FullscreenPlayerMobile_playQueueButton_active__CG2s8",
        syncLyricsButton_active:
          "FullscreenPlayerMobile_syncLyricsButton_active__6L4YF",
        notification: "FullscreenPlayerMobile_notification__V1cxP",
      };
    },
    72936: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobileContent_root__RITqv",
        wrapper: "FullscreenPlayerMobileContent_wrapper__JPmBe",
        syncLyrics: "FullscreenPlayerMobileContent_syncLyrics__HKUm0",
        trackInfoCoverContainer:
          "FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly",
        trackInfoCover: "FullscreenPlayerMobileContent_trackInfoCover__zsEEq",
        contentContainer:
          "FullscreenPlayerMobileContent_contentContainer__ILyg5",
        contentContainer_withSplitMode:
          "FullscreenPlayerMobileContent_contentContainer_withSplitMode__Rdv5T",
        trackInfo: "FullscreenPlayerMobileContent_trackInfo__IPGjo",
        metaContainer: "FullscreenPlayerMobileContent_metaContainer__B2vTr",
        infoBlock: "FullscreenPlayerMobileContent_infoBlock__ZcRdn",
        infoBlock_withExpandedSyncLyrics:
          "FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX",
        coverWrapper: "FullscreenPlayerMobileContent_coverWrapper___Y6ll",
        coverWrapper_enter:
          "FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh",
        coverWrapper_enter_active:
          "FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of",
        "enter-fade": "FullscreenPlayerMobileContent_enter-fade__Q0KNn",
        coverWrapper_exit:
          "FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i",
        coverWrapper_exit_active:
          "FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE",
        "exit-fade": "FullscreenPlayerMobileContent_exit-fade__uS0jT",
        cover: "FullscreenPlayerMobileContent_cover__W6pz2",
        metaText: "FullscreenPlayerMobileContent_metaText__Fr74D",
        timeline: "FullscreenPlayerMobileContent_timeline__Pta9W",
        content: "FullscreenPlayerMobileContent_content__EAteH",
        syncLyricsContent:
          "FullscreenPlayerMobileContent_syncLyricsContent__qhWG_",
        syncLyricsLoader:
          "FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j",
        syncLyricsScroller:
          "FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL",
        syncLyricsFooter:
          "FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY",
        syncLyricsCounter:
          "FullscreenPlayerMobileContent_syncLyricsCounter___wm5g",
      };
    },
    44939: function (e) {
      e.exports = {
        root: "PlayingNow_root__0lQa8",
        textBlock: "PlayingNow_textBlock___CfRh",
        title: "PlayingNow_title__82csz",
        subTitle: "PlayingNow_subTitle__JNJfh",
        link: "PlayingNow_link__4gLK9",
      };
    },
    40199: function (e) {
      e.exports = {
        message: "NotificationChangeQuality_message__coCvn",
        changeButton: "NotificationChangeQuality_changeButton__Hzc3y",
        icon: "NotificationChangeQuality_icon__bOfQO",
      };
    },
    1991: function (e) {
      e.exports = {
        root: "PlayQueue_root__ponhw",
        content: "PlayQueue_content__zIUvd",
        scrollContent: "PlayQueue_scrollContent__2dI0v",
      };
    },
    20586: function (e) {
      e.exports = {
        root: "PlayQueueAfterPlayingBlock_root__A7_wI",
        title: "PlayQueueAfterPlayingBlock_title__nS_nG",
        title_withDnD: "PlayQueueAfterPlayingBlock_title_withDnD__jsVTk",
        prevTrack: "PlayQueueAfterPlayingBlock_prevTrack__wDAPP",
        animatedContent: "PlayQueueAfterPlayingBlock_animatedContent__6rvOT",
        animatedContent_moveToTop:
          "PlayQueueAfterPlayingBlock_animatedContent_moveToTop__bW549",
        "move-to-top": "PlayQueueAfterPlayingBlock_move-to-top__c_AzJ",
        animatedContent_moveFromTop:
          "PlayQueueAfterPlayingBlock_animatedContent_moveFromTop__ZLgMV",
        "move-from-top": "PlayQueueAfterPlayingBlock_move-from-top___8bwu",
        "move-prev-track-from-top":
          "PlayQueueAfterPlayingBlock_move-prev-track-from-top__XY1VA",
        animatedContent_moveFromTopSingleTrack:
          "PlayQueueAfterPlayingBlock_animatedContent_moveFromTopSingleTrack__rrewW",
        "move-from-top-single-track":
          "PlayQueueAfterPlayingBlock_move-from-top-single-track__8po97",
        "move-prev-track-from-top-single-track":
          "PlayQueueAfterPlayingBlock_move-prev-track-from-top-single-track__ySSca",
      };
    },
    1312: function (e) {
      e.exports = {
        root: "PlayQueueContextRepeatBlock_root__cy0xq",
        iconWrapper: "PlayQueueContextRepeatBlock_iconWrapper__EgPG4",
      };
    },
    97520: function (e) {
      e.exports = {
        root: "PlayQueueVibeBlock_root__cVjcM",
        ripple: "PlayQueueVibeBlock_ripple__Ig_pb",
        vibeCover: "PlayQueueVibeBlock_vibeCover__THxKz",
        title: "PlayQueueVibeBlock_title__G3kir",
        vibeTitle: "PlayQueueVibeBlock_vibeTitle__C5fWp",
      };
    },
    27289: function (e) {
      e.exports = {
        root: "PlayQueueBeforePlayingBlock_root__QIIfB",
        prevTrack: "PlayQueueBeforePlayingBlock_prevTrack__5b6o4",
        animatedContent: "PlayQueueBeforePlayingBlock_animatedContent__C04_K",
        animatedContent_moveToBottom:
          "PlayQueueBeforePlayingBlock_animatedContent_moveToBottom__2gKF7",
        "move-to-bottom": "PlayQueueBeforePlayingBlock_move-to-bottom__7EZIY",
        animatedContent_moveFromBottom:
          "PlayQueueBeforePlayingBlock_animatedContent_moveFromBottom__0kTuW",
        "move-from-bottom":
          "PlayQueueBeforePlayingBlock_move-from-bottom__8mDwi",
        "move-prev-track-from-bottom":
          "PlayQueueBeforePlayingBlock_move-prev-track-from-bottom__mFqMq",
        animatedContent_moveFromBottomSingleTrack:
          "PlayQueueBeforePlayingBlock_animatedContent_moveFromBottomSingleTrack__MIEIc",
        "move-from-bottom-single-track":
          "PlayQueueBeforePlayingBlock_move-from-bottom-single-track__YhsMT",
        "move-prev-track-from-bottom-single-track":
          "PlayQueueBeforePlayingBlock_move-prev-track-from-bottom-single-track__NGI9j",
      };
    },
    42089: function (e) {
      e.exports = {
        icon: "PlayQueueButton_icon__7fc0G",
        icon_active: "PlayQueueButton_icon_active__4A8H2",
        animation_scaled: "PlayQueueButton_animation_scaled__w_Wir",
        scale: "PlayQueueButton_scale__dXShR",
        animation_unscaled: "PlayQueueButton_animation_unscaled__Lt_j9",
        unscale: "PlayQueueButton_unscale__BlmKQ",
      };
    },
    63588: function (e) {
      e.exports = {
        root: "PlayQueueDnDDraggableTrack_root__ysTVY",
        dots: "PlayQueueDnDDraggableTrack_dots__enjOX",
        noHoverItem: "PlayQueueDnDDraggableTrack_noHoverItem__uHRh1",
      };
    },
    16384: function (e) {
      e.exports = {
        root: "PlayQueueDnDTrackWrapper_root__CithE",
        inner: "PlayQueueDnDTrackWrapper_inner__xq3xM",
        dragging: "PlayQueueDnDTrackWrapper_dragging__Tk9uP",
        dragOverlay: "PlayQueueDnDTrackWrapper_dragOverlay__ulF2W",
      };
    },
    9191: function (e) {
      e.exports = {
        root: "PlayQueueNowPlayingBlock_root__aJSb8",
        important: "PlayQueueNowPlayingBlock_important__sxxvA",
        track: "PlayQueueNowPlayingBlock_track__ClZLs",
        track_withDnD: "PlayQueueNowPlayingBlock_track_withDnD__D8h0r",
        track_moveFromTop: "PlayQueueNowPlayingBlock_track_moveFromTop__pBBJt",
        "move-from-top": "PlayQueueNowPlayingBlock_move-from-top__O5e0S",
        track_moveFromBottom:
          "PlayQueueNowPlayingBlock_track_moveFromBottom__Jj2UO",
        "move-from-bottom": "PlayQueueNowPlayingBlock_move-from-bottom__Cz7lV",
      };
    },
    87281: function (e) {
      e.exports = {
        root: "PlayQueueTitle_root__E2XOW",
        root_withDnD: "PlayQueueTitle_root_withDnD__8kctq",
        linkContainer: "PlayQueueTitle_linkContainer__xqLIj",
        titleIcon: "PlayQueueTitle_titleIcon__z1B_p",
        title: "PlayQueueTitle_title__q3ppG",
        linkText: "PlayQueueTitle_linkText__9mgvM",
        heading: "PlayQueueTitle_heading__JrzQq",
        heading_withOffset: "PlayQueueTitle_heading_withOffset__ZRyEr",
        subTitle: "PlayQueueTitle_subTitle__RzrJA",
      };
    },
    72195: function (e) {
      e.exports = {
        root: "PlayerBar_root__cXUnU",
        adPopup: "PlayerBar_adPopup__BrBC6",
      };
    },
    69323: function (e) {
      e.exports = {
        root: "PlayerBarDesktop_root__d2Hwi",
        info: "PlayerBarDesktop_info__56v53",
        infoCard: "PlayerBarDesktop_infoCard__tnLS6",
        coverContainer: "PlayerBarDesktop_coverContainer__2Z5nQ",
        cover: "PlayerBarDesktop_cover__IYLwR",
        description: "PlayerBarDesktop_description__eQ_tA",
        artists: "PlayerBarDesktop_artists__N5vpf",
        artistLink: "PlayerBarDesktop_artistLink__Btgdq",
        infoButtons: "PlayerBarDesktop_infoButtons__iSpa_",
        sonata: "PlayerBarDesktop_sonata__sJHY_",
        meta: "PlayerBarDesktop_meta__6sm58",
        settingsButton: "PlayerBarDesktop_settingsButton__jLkVn",
      };
    },
    38319: function (e) {
      e.exports = {
        root: "PlayerBarMobile_root__cdKy_",
        progressBar: "PlayerBarMobile_progressBar___DmH8",
        info: "PlayerBarMobile_info__WmdhZ",
        infoCard: "PlayerBarMobile_infoCard__DCATu",
        coverContainer: "PlayerBarMobile_coverContainer__a3JDF",
        cover: "PlayerBarMobile_cover__pnJd1",
        description: "PlayerBarMobile_description__IxQ9L",
        artists: "PlayerBarMobile_artists__XVSBV",
        artistLink: "PlayerBarMobile_artistLink__pieMq",
        infoButtons: "PlayerBarMobile_infoButtons__JXxfv",
      };
    },
    18155: function (e) {
      e.exports = {
        root: "QualitySettings_root__bsEFH",
        root_withEqualizer: "QualitySettings_root_withEqualizer__KF0Ng",
        root_withNewQuality: "QualitySettings_root_withNewQuality__wP_x5",
        header: "QualitySettings_header__azQ0H",
        list: "QualitySettings_list__ggzI6",
        equalizer: "QualitySettings_equalizer__bt11k",
        headerWithCloseButton: "QualitySettings_headerWithCloseButton__VHskw",
        itemWrapper: "QualitySettings_itemWrapper__3KKwt",
        item: "QualitySettings_item__2SGU_",
        item_option: "QualitySettings_item_option__KuE4e",
        item_type: "QualitySettings_item_type___96WF",
        expandedItem: "QualitySettings_expandedItem__kCxQb",
        itemSubTitle: "QualitySettings_itemSubTitle__rNJL_",
        menuContent: "QualitySettings_menuContent__SzqoC",
        button_active: "QualitySettings_button_active__Nivv_",
      };
    },
    3498: function (e) {
      e.exports = {
        root: "QualitySettingsModal_root__f3gE2",
        modalContent: "QualitySettingsModal_modalContent__R_JNT",
        overlay: "QualitySettingsModal_overlay__8pjOO",
        button: "QualitySettingsModal_button__BCHBi",
      };
    },
    60515: function (e) {
      e.exports = {
        root: "SyncLyrics_root__6KZg4",
        content: "SyncLyrics_content__lbkWP",
      };
    },
    3260: function (e) {
      e.exports = {
        icon: "SyncLyricsButton_icon__m0Gdk",
        icon_active: "SyncLyricsButton_icon_active__6WcWG",
        animation_scaled: "SyncLyricsButton_animation_scaled__vwsc_",
        scale: "SyncLyricsButton_scale__FGAYV",
        animation_unscaled: "SyncLyricsButton_animation_unscaled__eM1Wb",
        unscale: "SyncLyricsButton_unscale__ceLQu",
      };
    },
    78805: function (e) {
      e.exports = {
        root: "SyncLyricsFooter_root__STCKQ",
        major: "SyncLyricsFooter_major__QMZmT",
        writers: "SyncLyricsFooter_writers__c7zhj",
      };
    },
    18978: function (e) {
      e.exports = { root: "SyncLyricsLine_root__r62BN" };
    },
    4932: function (e) {
      e.exports = {
        root: "SyncLyricsLoader_root__I2hTe",
        element: "SyncLyricsLoader_element___Luwv",
        pulse: "SyncLyricsLoader_pulse__5AqRf",
        "change-opacity": "SyncLyricsLoader_change-opacity__vscya",
        element_withIcon: "SyncLyricsLoader_element_withIcon__iiSBo",
        element_withDefaultElement:
          "SyncLyricsLoader_element_withDefaultElement__WmP80",
        element_paused: "SyncLyricsLoader_element_paused__LFpD0",
      };
    },
    5358: function (e) {
      e.exports = {
        line: "SyncLyricsScroller_line__Vh6WN",
        counter: "SyncLyricsScroller_counter__B2E7K",
        counterLine: "SyncLyricsScroller_counterLine__NpBT4",
        root: "SyncLyricsScroller_root__amiLm",
        root_withVisibleUpperLyrics:
          "SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO",
        root_withVisibleScrolledLyrics:
          "SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE",
        root_intro: "SyncLyricsScroller_root_intro__13gls",
        root_outro: "SyncLyricsScroller_root_outro__XlDH5",
        line_last: "SyncLyricsScroller_line_last__liS_1",
        root_prepare: "SyncLyricsScroller_root_prepare__h0Gf1",
        line_active: "SyncLyricsScroller_line_active__6lLvH",
      };
    },
    19144: function (e) {
      e.exports = {
        root: "VideoAd_root__e7gla",
        root_hidden: "VideoAd_root_hidden__78CPl",
        videoBlock: "VideoAd_videoBlock__bqNRq",
        video: "VideoAd_video__j1f_y",
        content: "VideoAd_content__QroDp",
        close: "VideoAd_close__sMGlV",
        notifyClose: "VideoAd_notifyClose__w82mE",
        cover: "VideoAd_cover__kQwxh",
        important: "VideoAd_important__VZkA_",
        text: "VideoAd_text__rjKqZ",
      };
    },
    30720: function (e) {
      e.exports = {
        root: "Trailer_root__c8eG3",
        header: "Trailer_header__FBFMi",
        trackShimmer: "Trailer_trackShimmer__qmCN3",
        albumShimmer: "Trailer_albumShimmer__8RxuC",
        footer: "Trailer_footer__POMTS",
      };
    },
    53533: function (e) {
      e.exports = {
        root: "TrailerError_root__GwuKR",
        textContainer: "TrailerError_textContainer__lF7RZ",
        title: "TrailerError_title__Q52Pa",
        description: "TrailerError_description__60UJ6",
      };
    },
    60223: function (e) {
      e.exports = {
        root: "TrailerFooter_root__LKXby",
        playButtonShimmer: "TrailerFooter_playButtonShimmer__5QwPi",
        linkButtonShimmer: "TrailerFooter_linkButtonShimmer__ZV1s1",
      };
    },
    76811: function (e) {
      e.exports = {
        root: "TrailerHeader_root__n8XkZ",
        coverContainer: "TrailerHeader_coverContainer__4R_jG",
        cover: "TrailerHeader_cover__G6BRb",
        iconContainer: "TrailerHeader_iconContainer__QXR64",
        icon: "TrailerHeader_icon__5T0JT",
        textContainer: "TrailerHeader_textContainer__LR03v",
        text: "TrailerHeader_text__BWMLw",
        link: "TrailerHeader_link__kObd5",
        title: "TrailerHeader_title__GuIe0",
        playButton: "TrailerHeader_playButton__MGmhZ",
        playButtonIcon: "TrailerHeader_playButtonIcon__JFbl_",
        shimmerContainer: "TrailerHeader_shimmerContainer__cOsas",
        titleShimmer: "TrailerHeader_titleShimmer__KKn7b",
        descriptionShimmer: "TrailerHeader_descriptionShimmer__WOlY5",
        share: "TrailerHeader_share__5lxh7",
      };
    },
    25974: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        modalContent: "TrailerModal_modalContent__ZSNFe",
        header: "TrailerModal_header__0h1zj",
      };
    },
    17476: function (e) {
      e.exports = {
        root: "TrailerTrack_root__0UIP4",
        root_active: "TrailerTrack_root_active__F_8Iw",
      };
    },
    47443: function (e) {
      e.exports = {
        root: "FullscreenVideoPlayerDesktop_root__a69Pd",
        important: "FullscreenVideoPlayerDesktop_important__NvXzL",
        header: "FullscreenVideoPlayerDesktop_header__oiftJ",
        modalContent: "FullscreenVideoPlayerDesktop_modalContent__YeGCV",
        closeButton: "FullscreenVideoPlayerDesktop_closeButton__OqSFs",
      };
    },
    69682: function (e) {
      e.exports = {
        menu: "SettingsVideoPlayer_menu__DnmyY",
        submenu: "SettingsVideoPlayer_submenu__yL0t1",
      };
    },
    92790: function (e) {
      e.exports = {
        root: "VideoPlayerBarDesktop_root__OxypO",
        info: "VideoPlayerBarDesktop_info__ulYvU",
        infoCard: "VideoPlayerBarDesktop_infoCard__mE___",
        coverContainer: "VideoPlayerBarDesktop_coverContainer__xV_VP",
        cover: "VideoPlayerBarDesktop_cover__Nf4WW",
        description: "VideoPlayerBarDesktop_description__sAiwG",
        artists: "VideoPlayerBarDesktop_artists__PNY62",
        artistLink: "VideoPlayerBarDesktop_artistLink__FgFZ8",
        infoButtons: "VideoPlayerBarDesktop_infoButtons__9xWZ3",
        sonata: "VideoPlayerBarDesktop_sonata__VrtGS",
        meta: "VideoPlayerBarDesktop_meta__KlPBv",
      };
    },
    24598: function (e) {
      e.exports = {
        coverBlock: "ArtistCard_coverBlock__YCSus",
        like: "ArtistCard_like__jmlKc",
        root: "ArtistCard_root__F4RfA",
        root_selected: "ArtistCard_root_selected__9Djbq",
        cover: "ArtistCard_cover__RSTvK",
        image: "ArtistCard_image__Uab5w",
        name: "ArtistCard_name__IF9yZ",
        icon: "ArtistCard_icon__PjbJI",
      };
    },
    20497: function (e) {
      e.exports = {
        content: "WizardModal_content__mLcxg",
        modalHeader: "WizardModal_modalHeader__BbNjx",
        root: "WizardModal_root__mrF2y",
        root_withCustomControls: "WizardModal_root_withCustomControls__t7Kjv",
        modalContent: "WizardModal_modalContent__OifZs",
        wrapper: "WizardModal_wrapper__2_8ft",
        title: "WizardModal_title__fPGJr",
        text: "WizardModal_text__ntEON",
        button: "WizardModal_button__e8bCS",
        mainContainer: "WizardModal_mainContainer__fbjpt",
        carousel: "WizardModal_carousel__uVcYS",
        scrollContainer: "WizardModal_scrollContainer__tDrP6",
        important: "WizardModal_important__7uymQ",
        tabCarousel: "WizardModal_tabCarousel__AclIV",
        tabShimmer: "WizardModal_tabShimmer__36Qc7",
        tabTitle: "WizardModal_tabTitle__7ZAaF",
        filter: "WizardModal_filter__o2wpn",
        filter_selected: "WizardModal_filter_selected__qdlMf",
        item: "WizardModal_item__wUHVg",
      };
    },
    57916: function (e, t, i) {
      "use strict";
      var a, n;
      i.d(t, {
        o: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).ON_START_BAR_BELOW =
          "music-web-on-start-bar-bellow"),
        (n.ON_START_FULLSCREEN = "music-web-on-start-fullscreen");
    },
    89646: function (e, t, i) {
      "use strict";
      i.d(t, {
        b: function () {
          return a;
        },
      });
      let a = (e) => {
        let [t, i] = e.split(":");
        return { uid: String(t), kind: Number(i) };
      };
    },
    55897: function (e, t, i) {
      "use strict";
      i.d(t, {
        d: function () {
          return n;
        },
      });
      var a = i(19489);
      function n(e) {
        return (null == e ? void 0 : e.data.type) === a.A.Various;
      }
    },
  },
]);
