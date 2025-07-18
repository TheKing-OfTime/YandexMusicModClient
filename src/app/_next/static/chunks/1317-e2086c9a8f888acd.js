(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1317, 892],
  {
    5166: function (e, t, i) {
      "use strict";
      i.d(t, {
        kI: function () {
          return C;
        },
        HD: function () {
          return u;
        },
        XX: function () {
          return d;
        },
      });
      var a,
        n,
        l,
        r,
        o = i(22874);
      let s = (e) => {
          let { id: t, type: i, value: a } = e;
          return (0, o.pj)({
            id: t || null,
            type: i || null,
            value: a || null,
          });
        },
        d = (e) => {
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
      let c = o.V5.model("CommunicationButtonAction", {
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
        action: o.V5.maybeNull(c),
        textColor: o.V5.maybeNull(o.V5.string),
      });
      var m = i(75441),
        _ = i(32358),
        p = i(62569),
        v = i(65067),
        h = i(68208),
        y = i(17392),
        x = i(13534),
        g = i(85872),
        b = i.n(g);
      let C = (0, p.Pi)((e) => {
        var t;
        let {
            anchorId: i,
            screenId: a,
            button: n,
            buttonSize: r,
            buttonClassName: o,
            textClassName: s,
            hide: d,
          } = e,
          { communication: c } = (0, x.oR4)(),
          u =
            ((null === (t = n.action) || void 0 === t ? void 0 : t.type) ===
              l.LINK &&
              n.action.value) ||
            "",
          { isExternalLink: p } = (0, x.zBm)(u),
          g = (0, x.s0h)(u),
          C = (0, v.useCallback)(() => {
            if (n.action)
              switch (
                (i && a && n.action.id && c.action(i, a, n.action.id),
                n.action.type)
              ) {
                case l.LINK:
                  n.action.value && g(), p || null == d || d();
                  return;
                case l.CLOSE:
                  null == d || d();
                  return;
              }
          }, [i, a, c, n.action, d, g, p]),
          f = (0, v.useMemo)(() => {
            if (n.textColor) return { color: n.textColor };
          }, [n.textColor]);
        return (0, m.jsx)(h.Button, {
          className: (0, _.W)(b().root, b()["root_".concat(n.color)], o),
          role: u ? "link" : "button",
          color: n.color ? n.color : void 0,
          radius: "xxxl",
          onClick: C,
          size: r,
          children: (0, m.jsx)(y.Caption, {
            className: (0, _.W)(b().text, s),
            variant: "div",
            type: "text",
            size: "m",
            style: f,
            children: n.text,
          }),
        });
      });
    },
    23765: function (e, t, i) {
      "use strict";
      i.d(t, {
        On: function () {
          return b;
        },
        Xv: function () {
          return c;
        },
        ho: function () {
          return r;
        },
      });
      var a = i(22874),
        n = i(5166);
      let l = (e) => {
          let {
            bgUrl: t,
            bgColor: i,
            title: l,
            text: r,
            titleColor: o,
            textColor: s,
            imageUrl: d,
            buttons: c,
          } = e;
          return (0, a.pj)({
            bgUrl: t || null,
            bgColor: i || null,
            title: l || null,
            text: r || null,
            titleColor: o || null,
            textColor: s || null,
            imageUrl: d || null,
            buttons: c.filter((e) => e.text).map(n.XX),
          });
        },
        r = (e) =>
          (0, a.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: l(e.div),
          });
      var o = i(18128);
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
        d = a.V5.model("BarBelow", {
          anchorId: a.V5.enumeration(Object.values(o.o)),
          screenId: a.V5.string,
          content: s,
        }),
        c = a.V5.model("BarBelowMain", {
          anchorId: a.V5.maybe(a.V5.string),
          isVisible: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenShown: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenHidden: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenStarted: a.V5.maybe(a.V5.boolean),
          list: a.V5.array(d),
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
      var u = i(75441),
        m = i(32358),
        _ = i(62569),
        p = i(65067),
        v = i(9317),
        h = i(39054),
        y = i(17392),
        x = i(86745),
        g = i.n(x);
      let b = (0, _.Pi)((e) => {
        var t, i, a, l;
        let { className: r, barBelow: o } = e,
          { formatMessage: s } = (0, v.Z)(),
          d = (0, p.useMemo)(() => {
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
          c = (0, p.useMemo)(() => {
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
          _ = (0, p.useCallback)(
            (e) => {
              e.animationName.includes("show")
                ? o.setAnimationAlreadyBeenShown()
                : e.animationName.includes("hide") &&
                  o.setAnimationAlreadyBeenHidden();
            },
            [o],
          ),
          x = (0, p.useCallback)(
            (e) => {
              e.animationName.includes("show") &&
                o.setAnimationAlreadyBeenStarted();
            },
            [o],
          );
        return (0, u.jsxs)("section", {
          className: (0, m.W)(
            g().root,
            {
              [g().root_hidden]: !o.isVisible && !o.hideWithAnimation,
              [g().root_show]: o.showWithAnimation,
              [g().root_hide]: o.hideWithAnimation,
            },
            r,
          ),
          style: d.bg,
          onAnimationStart: x,
          onAnimationEnd: _,
          "aria-label": s({ id: "bar-below.section-name" }),
          children: [
            (null === (t = o.barBelowItem) || void 0 === t
              ? void 0
              : t.content.imageUrl) &&
              (0, u.jsx)(h.Image, {
                className: g().image,
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
              className: g().content,
              children: [
                (null === (a = o.barBelowItem) || void 0 === a
                  ? void 0
                  : a.content.title) &&
                  (0, u.jsx)(y.Heading, {
                    className: g().title,
                    variant: "h3",
                    style: d.title,
                    lineClamp: 2,
                    children: o.barBelowItem.content.title,
                  }),
                (null === (l = o.barBelowItem) || void 0 === l
                  ? void 0
                  : l.content.text) &&
                  (0, u.jsx)(y.Heading, {
                    className: g().text,
                    variant: "h4",
                    size: "xs",
                    style: d.text,
                    lineClamp: 2,
                    children: o.barBelowItem.content.text,
                  }),
              ],
            }),
            (0, u.jsx)("div", { className: g().buttons, children: c }),
          ],
        });
      });
    },
    14563: function (e, t, i) {
      "use strict";
      i.d(t, {
        Y: function () {
          return g;
        },
        d: function () {
          return P;
        },
      });
      var a = i(75441),
        n = i(32358),
        l = i(65067),
        r = i(9317),
        o = i(35846),
        s = i(93093),
        d = i(14218),
        c = i(69783),
        u = i(13534),
        m = i(22425),
        _ = i.n(m),
        p = i(17392),
        v = i(29990),
        h = i.n(v);
      let y = (e) => {
          let { value: t, variant: i, className: l, forwardRef: r, ...s } = e,
            d =
              "start" === i
                ? o.bG.changeTimecode.TIMECODE_TIME_START
                : o.bG.changeTimecode.TIMECODE_TIME_END;
          return (0, a.jsx)(p.Caption, {
            style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.()
              ? { opacity: 1 }
              : undefined,
            ref: r,
            tabIndex: 0,
            className: (0, n.W)(h().root, h()["root_".concat(i)], l),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            ...(0, o.BA)(d),
            ...s,
            children: t,
          });
        },
        x = (0, l.forwardRef)((e, t) => (0, a.jsx)(y, { forwardRef: t, ...e })),
        g = (e) => {
          var t, i, m, p;
          let {
              className: v,
              sliderClassName: h,
              disabled: y,
              isFullscreen: g,
              isMobile: b,
              showThumbVariant: C,
              withTimecode: f = !0,
              sonataPlaybackId: I,
              customDuration: A,
              canMoveForward: N,
            } = e,
            k = (0, u.R$C)(),
            S = (g || !b) && f,
            P = (0, l.useRef)(!1),
            { sonataState: E } = (0, u.oR4)(),
            [T, j] = (0, l.useState)(
              null !== (m = E.position) && void 0 !== m ? m : 0,
            ),
            [L, w] = (0, l.useState)(
              null !== (p = E.duration) && void 0 !== p ? p : 0,
            ),
            [M, B] = (0, l.useState)(0),
            { formatMessage: R } = (0, r.Z)(),
            { advert: V } = (0, u.oR4)(),
            O = (0, u.ozq)(),
            D = null == k ? void 0 : k.getState(I),
            W = A && T > A,
            F = (0, s.W)((e, t) => {
              V.isAdvertShown ||
                ((P.current = !t), t ? null == k || k.setProgress(e, I) : j(e));
            });
          (0, l.useEffect)(() => {
            W &&
              (N
                ? null == k || k.moveForward(I)
                : (null == k || k.moveBackward(I), null == k || k.pause(I)));
          }, [N, W, k, I]);
          let U = (0, l.useCallback)(
            (e) => {
              e &&
                (e.duration === 1 / 0
                  ? (w(0), j(0), B(0))
                  : (w(A && !V.isAdvertShown ? A : e.duration),
                    j((t) => (P.current ? t : e.position)),
                    B(e.loaded)));
            },
            [A, V.isAdvertShown],
          );
          (0, l.useEffect)(() => {
            var e, t;
            let i =
                null == O
                  ? void 0
                  : null === (e = O.audioAdvertPlayback) || void 0 === e
                    ? void 0
                    : e.state.playerState.progress.onChange(U),
              a =
                null == D
                  ? void 0
                  : null === (t = D.playerState) || void 0 === t
                    ? void 0
                    : t.progress.onChange(U);
            return () => {
              null == a || a(), null == i || i();
            };
          }, [
            null == O
              ? void 0
              : null === (t = O.audioAdvertPlayback) || void 0 === t
                ? void 0
                : t.state.playerState.progress,
            U,
            null == D
              ? void 0
              : null === (i = D.playerState) || void 0 === i
                ? void 0
                : i.progress,
          ]);
          let z = (0, d.V)(() =>
            0 === L ? void 0 : A && A <= L ? Math.round(A) : Math.round(L),
          );
          return (0, a.jsxs)("div", {
            className: (0, n.W)(
              _().root,
              {
                [_().root_fullscreen]: g,
                [_().root_mobile]: b,
                [_().root_withTimecode]: f,
              },
              v,
            ),
            style: {
              "--track-progress": "".concat(
                T && L ? (100 * Math.min(T, L)) / L : 0,
                "%",
              ),
            },
            ...(0, o.BA)(o.bG.changeTimecode.TIMECODE_WRAPPER),
            children: [
              S &&
                (0, a.jsx)(x, {
                  value: (0, u.gf)(Math.round(T), Math.round(L)),
                  variant: "start",
                  className: _().timecode,
                }),
              (0, a.jsx)(c.i, {
                className: (0, n.W)(
                  _().slider,
                  { [_()["slider_thumbSize_".concat(b ? "xs" : "m")]]: !0 },
                  h,
                ),
                disabled: y,
                thumbSize: b ? "xs" : "s",
                trackSize: b ? "xs" : "s",
                value: Math.round(T),
                mode: "deferred",
                secondaryValue: Math.round(M),
                maxValue: z,
                onChange: F,
                "aria-label": R({ id: "player-actions.timecode-control" }),
                showThumbVariant: C,
                ...(0, o.BA)(o.bG.changeTimecode.TIMECODE_SLIDER),
              }),
              S &&
                (0, a.jsx)(x, {
                  value: (0, u.gf)(Math.round(L), Math.round(L)),
                  variant: "end",
                  className: _().timecode,
                }),
            ],
          });
        };
      var b = i(62569),
        C = i(55188),
        f = i(98375),
        I = i(4942),
        A = i.n(I),
        N = i(61907),
        k = i.n(N);
      let S = (e) => {
          let {
              progress: t,
              position: i,
              duration: r,
              timecodeClassName: o,
              currentTimecodeClassName: s,
              progressElementWidth: d,
            } = e,
            c = (0, u.nB)(i),
            m = (0, u.nB)(r),
            _ = (0, l.useRef)(null),
            [p, v] = (0, l.useState)(0),
            h = (0, u.gf)(Math.round(r), Math.round(r));
          (0, l.useEffect)(() => {
            _.current && v(Math.round(_.current.getBoundingClientRect().width));
          }, [h.length, d]);
          let y = Math.round((t / 100) * d),
            g = 0 !== d ? d - p : 0;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(x, {
                style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.()
                  ? { opacity: 1 }
                  : undefined,
                role: "text",
                "aria-label": m,
                value: h,
                variant: "end",
                className: (0, n.W)(k().timecode, o, k().timecode_end, {
                  [k().timecode_end_hidden]: !(y < g - p / 2),
                }),
              }),
              (0, a.jsx)(x, {
                role: "text",
                "aria-label": c,
                style: {
                  "--timecode-position": "".concat(
                    Math.min(Math.max(y - p / 2, 0), g),
                    "px",
                  ),
                  ...(window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.()
                    ? { opacity: 1 }
                    : {}),
                },
                ref: _,
                value: (0, u.gf)(Math.round(i), Math.round(r)),
                variant: "start",
                className: (0, n.W)(k().timecode, k().timecode_current, o, s, {
                  [k().timecode_current_animation]: p > 0,
                }),
              }),
            ],
          });
        },
        P = (0, b.Pi)((e) => {
          var t;
          let {
              sliderClassName: i,
              disabled: d,
              isMobile: m,
              progressbarClassName: _,
              showThumbVariant: p,
              withTimecode: v = !0,
            } = e,
            h = (0, u.R$C)(),
            y = (0, l.useRef)(!1),
            { advert: x, sonataState: g } = (0, u.oR4)(),
            { formatMessage: b } = (0, r.Z)(),
            I = (0, u.ozq)(),
            [N, k] = (0, l.useState)(g.position),
            [P, E] = (0, l.useState)(g.duration),
            T = (0, u.nB)(Math.round(null != N ? N : 0)),
            j = N && P ? (100 * Math.min(N, P)) / P : 0,
            L = (0, l.useRef)(null),
            [w, M] = (0, l.useState)(0),
            B = w > 0,
            { state: R, toggleTrue: V, toggleFalse: O } = (0, C.O)(!1),
            { state: D, toggleTrue: W, toggleFalse: F } = (0, C.O)(!1);
          (0, l.useEffect)(() => {
            (null == h ? void 0 : h.state.playerState.status.value) ===
              f.FY.PLAYING && F();
          }, [F, null == h ? void 0 : h.state.playerState.status.value]),
            (0, l.useEffect)(() => {
              let e =
                null == h
                  ? void 0
                  : h.state.queueState.currentEntity.onChange(W);
              return (
                F(),
                () => {
                  null == e || e();
                }
              );
            }, [W, F, null == h ? void 0 : h.state.queueState.currentEntity]);
          let U = (0, s.W)((e, t) => {
              x.isAdvertShown ||
                ((y.current = !t), t ? null == h || h.setProgress(e) : k(e));
            }),
            z = (0, s.W)((e, t) => {
              null !== e &&
                null !== t &&
                (e === 1 / 0 ? (E(0), k(0)) : (E(e), y.current || k(t)));
            });
          (0, l.useEffect)(() => {
            z(g.duration, g.position);
          }, [g.duration, g.position, z]),
            (0, l.useEffect)(() => {
              var e;
              let t =
                null == I
                  ? void 0
                  : null === (e = I.audioAdvertPlayback) || void 0 === e
                    ? void 0
                    : e.state.playerState.progress.onChange((e) => {
                        e && x.isAdvertShown && z(e.duration, e.position);
                      });
              return () => {
                null == t || t();
              };
            }, [
              null == I
                ? void 0
                : null === (t = I.audioAdvertPlayback) || void 0 === t
                  ? void 0
                  : t.state.playerState.progress,
              z,
              x.isAdvertShown,
            ]);
          let G = (j / 100) * w - 6;
          (0, l.useEffect)(() => {
            let e = new ResizeObserver(() => {
              var e, t;
              M(
                Math.round(
                  null !==
                    (t =
                      null === (e = L.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                ),
              );
            });
            return (
              L.current && e.observe(L.current),
              () => {
                e.disconnect();
              }
            );
          }, []);
          let Q = {
            "--size-thumb": "".concat(12, "px"),
            "--track-progress": "".concat(j, "%"),
            "--thumb-position": "".concat(G, "px"),
            ...(D && { "--transition-disabled": "none" }),
          };
          return (0, a.jsxs)("div", {
            className: (0, n.W)(A().root, {
              [A().root_focusVisible]: R,
              [A().root_isPlayingTrack]: !x.isAdvertShown,
            }),
            style: Q,
            ...(0, o.BA)(o.bG.changeTimecode.TIMECODE_WRAPPER),
            children: [
              !m &&
                v &&
                B &&
                (0, a.jsx)(S, {
                  currentTimecodeClassName: (0, n.W)(
                    A().timecodeGroupCurrent,
                    A().important,
                  ),
                  timecodeClassName: A().timecodeGroup,
                  progress: j,
                  position: null != N ? N : 0,
                  duration: null != P ? P : 0,
                  progressElementWidth: w,
                }),
              (0, a.jsx)("div", {
                ref: L,
                className: (0, n.W)(A().progressbar, _),
              }),
              B && (0, a.jsx)("div", { className: A().thumb }),
              (0, a.jsx)(c.i, {
                "aria-valuetext": T,
                onClick: O,
                onBlur: O,
                onFocus: V,
                className: (0, n.W)(A().slider, A().important, i),
                disabled: d || x.isAdvertShown,
                "aria-label": b({ id: "player-actions.timecode-control" }),
                showThumbVariant: p,
                onChange: U,
                maxValue: P ? Math.round(P) : void 0,
                mode: "deferred",
                value: Math.round(null != N ? N : 0),
                trackSize: "s",
                thumbSize: "s",
                ...(0, o.BA)(o.bG.changeTimecode.TIMECODE_SLIDER),
              }),
              (0, a.jsx)("div", { className: A().backgroundProgressbar }),
            ],
          });
        });
    },
    9545: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return b;
        },
        E: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).VERTICAL = "vertical"),
        (a.HORIZONTAL = "horizontal");
      var a,
        n,
        l = i(75441),
        r = i(32358),
        o = i(62569),
        s = i(65067),
        d = i(9317),
        c = i(35846),
        u = i(93093),
        m = i(14218),
        _ = i(55188),
        p = i(68208),
        v = i(69756),
        h = i(69783),
        y = i(13534),
        x = i(30695),
        g = i.n(x);
      let b = (0, o.Pi)((e) => {
        let {
            className: t,
            horizontalSliderClassName: i,
            verticalSliderClassName: a,
            variant: o = n.HORIZONTAL,
            playbackId: x,
            onVolumeClick: b,
            onVolumeSet: C,
            sonataVolume: f,
          } = e,
          { formatMessage: I } = (0, d.Z)(),
          A = (0, y.uK4)(),
          N = (0, y.R$C)(),
          { advert: k, experiments: S } = (0, y.oR4)(),
          P = (0, y.ozq)(),
          { state: E, toggleTrue: T, toggleFalse: j } = (0, _.O)(!1),
          L = S.checkExperiment(y.peG.WebNextPlayerBarBackgroundProgress, "on"),
          w = A.get(y.V0J),
          M = Math.round((null != f ? f : 1) * 100) / 100,
          B = (0, u.W)((e) => {
            var t, i, a, n;
            L
              ? null == P ||
                null === (i = P.audioAdvertPlayback) ||
                void 0 === i ||
                null === (t = i.setExponentVolume) ||
                void 0 === t ||
                t.call(i, e)
              : null == P ||
                null === (n = P.audioAdvertPlayback) ||
                void 0 === n ||
                null === (a = n.setVolume) ||
                void 0 === a ||
                a.call(n, e);
          }),
          R = (0, u.W)((e) => {
            L
              ? null == N || N.setExponentVolume(e, x)
              : null == N || N.setVolume(e, x);
          });
        (0, s.useEffect)(() => {
          k.isAdvertShown && B(M);
        }, [k.isAdvertShown, M, null == P ? void 0 : P.audioAdvertPlayback, B]),
          (0, s.useEffect)(() => {
            k.isAdvertShown || R(M);
          }, [k.isAdvertShown, M, N, x, R]);
        let V = (0, u.W)((e) => {
            R(e),
              w.set(y.BUb.YmPlayerVolume, e, { expires: 365 }),
              k.isAdvertShown && (B(e), C(e));
          }),
          O = (0, u.W)(async () => {
            await b(M);
          }),
          D = 0 === M ? "volumeOff" : "volume",
          W =
            0 === M
              ? I({ id: "player-actions.volume-on" })
              : I({ id: "player-actions.volume-off" }),
          F = (0, u.W)((e) => {
            V(
              Math.max(
                0,
                Math.min(
                  1,
                  Math.round(100 * (M + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100,
                ),
              ),
            );
          }),
          U = (0, m.V)(() => {
            if (o === n.HORIZONTAL)
              return (0, l.jsx)(h.i, {
                onWheel: F,
                className: i,
                thumbSize: "s",
                trackSize: "s",
                value: M,
                maxValue: 1,
                step: 0.01,
                onChange: V,
                "aria-label": I({ id: "player-actions.volume-control" }),
                ...(0, c.BA)(c.bG.changeVolume.CHANGE_VOLUME_SLIDER),
              });
          }),
          z = (0, m.V)(() => {
            if (o === n.VERTICAL)
              return (0, l.jsx)("div", {
                onWheel: F,
                className: (0, r.W)(g().sliderContainer, {
                  [g().sliderContainer_focusVisible]: E,
                }),
                children: [
                  (0, l.jsx)("span", {
                    children: `${Math.round(M.toFixed(2) * 100)}%`,
                    style: {
                      position: "absolute",
                      left: 0,
                      right: 0,
                      "margin-inline": "auto",
                      width: "fit-content",
                      top: "0.7rem",
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: g().wrapperSlider,
                    children: (0, l.jsx)(h.i, {
                      onMouseLeave: j,
                      className: (0, r.W)(g().slider, g().important, a),
                      thumbSize: "s",
                      onFocus: T,
                      onBlur: j,
                      trackSize: "s",
                      value: M,
                      maxValue: 1,
                      step: 0.01,
                      onChange: V,
                      "aria-label": I({ id: "player-actions.volume-control" }),
                      ...(0, c.BA)(c.bG.changeVolume.CHANGE_VOLUME_SLIDER),
                    }),
                  }),
                ],
              });
          });
        return (0, l.jsxs)("div", {
          className: (0, r.W)(g().root, t),
          children: [
            z,
            (0, l.jsx)(p.Button, {
              onWheel: F,
              radius: "round",
              size: "xxxs",
              variant: "text",
              withRipple: !1,
              onClick: O,
              "aria-label": W,
              icon: (0, l.jsx)(v.Icon, {
                size: "xs",
                className: g().icon,
                variant: D,
              }),
              className: g().button,
              ...(0, c.BA)(c.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            U,
          ],
        });
      });
    },
    39392: function (e, t, i) {
      "use strict";
      i.d(t, {
        IP: function () {
          return N;
        },
        FM: function () {
          return m;
        },
        QZ: function () {
          return o;
        },
      });
      var a = i(22874),
        n = i(63660),
        l = i(5166);
      let r = (e) => {
          let {
            isModal: t,
            withShadow: i,
            closeActionId: r,
            bgUrl: o,
            bgUrlLarge: s,
            bgColor: d,
            logoUrl: c,
            title: u,
            text: m,
            titleColor: _,
            textColor: p,
            buttons: v,
            disclaimer: h,
            disclaimerColor: y,
          } = e;
          return (0, a.pj)({
            isModal: (0, n.toBoolean)(t),
            withShadow: (0, n.toBoolean)(i),
            closeActionId: r || null,
            bgUrl: o || null,
            bgUrlLarge: s || null,
            bgColor: d || null,
            logoUrl: c || null,
            title: u || null,
            text: m || null,
            titleColor: _ || null,
            textColor: p || null,
            buttons: v.filter((e) => e.text).map(l.XX),
            disclaimer: h || null,
            disclaimerColor: y || null,
          });
        },
        o = (e) =>
          (0, a.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: r(e.div),
          });
      var s = i(18128),
        d = i(40892);
      let c = a.V5.model("CommunicationModalContentModel", {
          isModal: a.V5.boolean,
          withShadow: a.V5.boolean,
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
          content: c,
        }),
        m = d.KL.props({
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
      var _ = i(75441),
        p = i(32358),
        v = i(62569),
        h = i(65067),
        y = i(9317),
        x = i(39054),
        g = i(59506),
        b = i(17392),
        C = i(13534),
        f = i(97141),
        I = i(56939),
        A = i.n(I);
      let N = (0, v.Pi)((e) => {
        var t, i, a, n;
        let { modal: r } = e,
          { formatMessage: o } = (0, y.Z)(),
          { communication: s } = (0, C.oR4)(),
          d =
            null === (t = r.modalItem) || void 0 === t
              ? void 0
              : t.content.isModal,
          c = (0, h.useMemo)(() => {
            var e;
            return null === (e = r.modalItem) || void 0 === e
              ? void 0
              : e.content.buttons.map((e) => {
                  var t;
                  return (0, _.jsx)(
                    l.kI,
                    {
                      screenId:
                        null === (t = r.modalItem) || void 0 === t
                          ? void 0
                          : t.screenId,
                      anchorId: r.anchorId,
                      button: e,
                      buttonSize: "default",
                      buttonClassName: A().button,
                      textClassName: A().buttonText,
                      hide: r.close,
                    },
                    e.text,
                  );
                });
          }, [r]),
          u = (0, h.useMemo)(() => {
            let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
            if (!r.modalItem) return e;
            let {
              bgUrl: t,
              bgUrlLarge: i,
              bgColor: a,
              titleColor: n,
              textColor: l,
              disclaimerColor: o,
            } = r.modalItem.content;
            return (
              t && (e.bg["--bg-url"] = 'url("'.concat(t, '")')),
              i && (e.bg["--bg-url-large"] = 'url("'.concat(i, '")')),
              a && (e.bg.backgroundColor = a),
              n && (e.title.color = n),
              l && (e.text.color = l),
              o && (e.disclaimer.color = o),
              e
            );
          }, [r]),
          m = (0, h.useCallback)(() => {
            r.modalItem &&
              r.modalItem.content.closeActionId &&
              s.action(
                r.modalItem.anchorId,
                r.modalItem.screenId,
                r.modalItem.content.closeActionId,
              ),
              r.close();
          }, [r, s]),
          v = (0, h.useMemo)(() => {
            var e;
            if (
              null === (e = r.modalItem) || void 0 === e
                ? void 0
                : e.content.logoUrl
            )
              return (0, _.jsx)(x.Image, {
                className: A().image,
                withAvatarReplace: !0,
                withFallback: !1,
                src: r.modalItem.content.logoUrl,
                withAspectRatio: !0,
                size: 400,
                fit: "cover",
              });
          }, [r]),
          I = (0, h.useMemo)(() => {
            var e;
            return (
              (null === (e = r.modalItem) || void 0 === e
                ? void 0
                : e.content.disclaimer) &&
              (0, C.g78)(r.modalItem.content.disclaimer, f.rU, {
                className: A().disclaimerLink,
                style: u.disclaimer,
                target: "_blank",
              })
            );
          }, [r, u]);
        return (0, _.jsxs)(g.u, {
          style: u.bg,
          className: (0, p.W)(
            A().root,
            d ? A().root_modal : A().root_fullscreen,
          ),
          headerClassName: A().modalHeader,
          contentClassName: A().modalContent,
          header:
            v &&
            (0, _.jsx)("div", {
              className: (0, p.W)(A().imageWrapper, A().imageWrapper_header),
              children: v,
            }),
          open: r.isOpened,
          onOpenChange: r.onOpenChange,
          onClose: m,
          closeOnOutsidePress: !1,
          size: d ? "fitContent" : "fullscreen",
          placement: "center",
          labelClose: o({ id: "interface-actions.close" }),
          children: [
            (0, _.jsxs)("div", {
              className: A().container,
              children: [
                (0, _.jsxs)("div", {
                  className: A().wrapper,
                  children: [
                    v &&
                      (0, _.jsx)("div", {
                        className: (0, p.W)(
                          A().imageWrapper,
                          A().imageWrapper_content,
                        ),
                        children: v,
                      }),
                    (null === (i = r.modalItem) || void 0 === i
                      ? void 0
                      : i.content.title) &&
                      (0, _.jsx)(b.Heading, {
                        className: A().title,
                        style: u.title,
                        size: "xl",
                        weight: "black",
                        variant: "h1",
                        lineClamp: 3,
                        children: r.modalItem.content.title,
                      }),
                    (null === (a = r.modalItem) || void 0 === a
                      ? void 0
                      : a.content.text) &&
                      (0, _.jsx)(b.Heading, {
                        className: A().text,
                        style: u.text,
                        size: "xs",
                        variant: "h2",
                        lineClamp: 4,
                        children: r.modalItem.content.text,
                      }),
                    (0, _.jsx)("div", { className: A().buttons, children: c }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: A().disclaimerWrapper,
                  children: (0, _.jsx)(b.Caption, {
                    className: A().disclaimer,
                    style: u.disclaimer,
                    type: "text",
                    variant: "div",
                    size: "xs",
                    weight: "medium",
                    children: I,
                  }),
                }),
              ],
            }),
            !d &&
              (null === (n = r.modalItem) || void 0 === n
                ? void 0
                : n.content.withShadow) &&
              (0, _.jsx)("div", { className: A().gradientOverlay }),
          ],
        });
      });
    },
    4459: function (e, t, i) {
      "use strict";
      i.d(t, {
        W: function () {
          return N;
        },
        R: function () {
          return r;
        },
      });
      var a = i(37285),
        n = i(22874),
        l = i(40892);
      let r = n.V5.model("ImageSliderModal", {
        modal: l.KL,
        images: n.V5.maybeNull(n.V5.array(n.V5.string)),
        initialSlideIndex: n.V5.optional(n.V5.number, 0),
        loadedImages: n.V5.maybeNull(n.V5.array(n.V5.string)),
      })
        .views((e) => ({
          isImageLoaded: (t) =>
            !!t && !!e.loadedImages && e.loadedImages.includes(t),
        }))
        .actions((e) => ({
          openImages(t, i) {
            (e.images = (0, n.pj)((0, a.ZN)(t))),
              i && (e.initialSlideIndex = i),
              e.modal.open();
          },
          setImageIsLoaded(t) {
            var i, a;
            e.loadedImages || (e.loadedImages = (0, n.pj)([])),
              !t ||
                (null === (i = e.loadedImages) || void 0 === i
                  ? void 0
                  : i.includes(t)) ||
                null === (a = e.loadedImages) ||
                void 0 === a ||
                a.push(t);
          },
          close() {
            (e.images = null),
              (e.initialSlideIndex = 0),
              (e.loadedImages = null),
              e.modal.close();
          },
        }));
      var o = i(75441),
        s = i(32358),
        d = i(62569),
        c = i(65067),
        u = i(9317),
        m = i(84722),
        _ = i(48530),
        p = i(35846),
        v = i(93093),
        h = i(68208),
        y = i(69756),
        x = i(39054),
        g = i(59506),
        b = i(68699),
        C = i(13534);
      let f = (e, t) => e >= t - 5 && e <= t + 5;
      var I = i(94089),
        A = i.n(I);
      let N = (0, d.Pi)(() => {
        var e, t, i, a;
        let {
            settings: { isMobile: n },
            modals: { imageSliderModal: l },
          } = (0, C.oR4)(),
          { formatMessage: r } = (0, u.Z)(),
          { contentRef: d } = (0, C.$Y6)(),
          I = (0, C.XUT)(),
          N = (0, c.useRef)(null),
          [k, S] = (0, c.useState)(!0),
          [P, E] = (0, c.useState)(!1),
          [T, j] = (0, c.useState)(0),
          L =
            (null !==
              (a =
                null === (e = l.images) || void 0 === e ? void 0 : e.length) &&
            void 0 !== a
              ? a
              : 0) > 1,
          w = (0, v.W)(() => {
            var e;
            null === (e = N.current) || void 0 === e || e.swiper.slideNext();
          }),
          M = (0, v.W)(() => {
            var e;
            null === (e = N.current) || void 0 === e || e.swiper.slidePrev();
          }),
          B = (0, v.W)((e) => {
            S(e.isBeginning), E(e.isEnd), j(e.activeIndex);
          });
        return (
          (0, c.useEffect)(() => {
            setTimeout(() => {
              var e, t, i;
              (null === (e = N.current) || void 0 === e ? void 0 : e.swiper) &&
                (S(0 === N.current.swiper.activeIndex),
                E(
                  N.current.swiper.activeIndex ===
                    (null !==
                      (i =
                        null === (t = l.images) || void 0 === t
                          ? void 0
                          : t.length) && void 0 !== i
                      ? i
                      : 0) -
                      1,
                ),
                j(N.current.swiper.activeIndex));
            });
          }, [null === (t = l.images) || void 0 === t ? void 0 : t.length, n]),
          (0, c.useEffect)(() => {
            l.modal.isOpened
              ? (null == I || I.disable(C.Pwk.MAIN, C.yxF.CLOSE),
                null == I || I.disable(C.Pwk.MAIN, C.yxF.SLIDE_BACKWARD),
                null == I || I.disable(C.Pwk.MAIN, C.yxF.SLIDE_FORWARD),
                null == I || I.enable(C.Pwk.IMAGE_SLIDER, C.yxF.CLOSE))
              : (null == I || I.disable(C.Pwk.IMAGE_SLIDER, C.yxF.CLOSE),
                null == I || I.enable(C.Pwk.MAIN, C.yxF.CLOSE),
                null == I || I.enable(C.Pwk.MAIN, C.yxF.SLIDE_BACKWARD),
                null == I || I.enable(C.Pwk.MAIN, C.yxF.SLIDE_FORWARD));
          }, [I, l.modal.isOpened]),
          (0, c.useEffect)(
            () => (
              null == I ||
                I.addShortcutsListener(C.Pwk.IMAGE_SLIDER, C.yxF.CLOSE, () => {
                  l.modal.isOpened && l.close();
                }),
              () => {
                null == I ||
                  I.removeShortcutsListener(C.Pwk.IMAGE_SLIDER, C.yxF.CLOSE),
                  null == I || I.disable(C.Pwk.IMAGE_SLIDER, C.yxF.CLOSE),
                  null == I || I.enable(C.Pwk.MAIN, C.yxF.CLOSE),
                  null == I || I.enable(C.Pwk.MAIN, C.yxF.SLIDE_BACKWARD),
                  null == I || I.enable(C.Pwk.MAIN, C.yxF.SLIDE_FORWARD),
                  l.close();
              }
            ),
            [I, l],
          ),
          (0, o.jsxs)(g.u, {
            className: (0, s.W)(A().root, { [A().root_mobile]: n }),
            contentClassName: A().modalContent,
            open: l.modal.isOpened,
            size: n ? "fullscreen" : "fitContent",
            placement: "center",
            showHeader: !1,
            isMobile: n,
            onClose: l.close,
            escapeKey: !1,
            onOpenChange: l.modal.onOpenChange,
            portalNode: n ? null : d,
            withAnimation: !l.modal.isOpened,
            ...(0, p.BA)(p.QM.imageSlider.IMAGE_SLIDER_MODAL),
            children: [
              (0, o.jsx)("div", {
                className: A().leftArrowWrapper,
                children:
                  L &&
                  (0, o.jsx)(h.Button, {
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, o.jsx)(y.Icon, {
                      variant: "arrowLeft",
                      size: "xxs",
                    }),
                    onClick: M,
                    disabled: k,
                    "aria-label": r({ id: "slider.prev-image" }),
                    ...(0, p.BA)(
                      p.QM.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON,
                    ),
                  }),
              }),
              (0, o.jsx)("div", {
                className: A().rightArrowWrapper,
                children:
                  L &&
                  (0, o.jsx)(h.Button, {
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, o.jsx)(y.Icon, {
                      variant: "arrowRight",
                      size: "xxs",
                    }),
                    onClick: w,
                    disabled: P,
                    "aria-label": r({ id: "slider.next-image" }),
                    ...(0, p.BA)(
                      p.QM.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON,
                    ),
                  }),
              }),
              (0, o.jsx)(h.Button, {
                radius: "round",
                color: "secondary",
                size: "xxs",
                icon: (0, o.jsx)(y.Icon, { variant: "close", size: "xxs" }),
                className: A().closeButton,
                onClick: l.close,
                "aria-label": r({ id: "slider.close-image-modal" }),
                ...(0, p.BA)(p.QM.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON),
              }),
              (0, o.jsx)("div", {
                className: A().content,
                children: (0, o.jsx)(_.tq, {
                  initialSlide: l.initialSlideIndex,
                  className: A().slider,
                  wrapperClass: A().wrapper,
                  ref: N,
                  onActiveIndexChange: B,
                  a11y: {
                    enabled: !0,
                    containerMessage: r({ id: "slider.image-slider-modal" }),
                  },
                  pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                  modules: [m.tl, m.N1],
                  keyboard: !0,
                  children:
                    null === (i = l.images) || void 0 === i
                      ? void 0
                      : i.map((e, t) => {
                          var i, a;
                          let n = f(t, T) ? e : void 0;
                          return (0, o.jsxs)(
                            _.o5,
                            {
                              className: A().slide,
                              children: [
                                (0, o.jsx)(x.Image, {
                                  fit: "contain",
                                  className: (0, s.W)(A().image, {
                                    [A().image_loading]: !l.isImageLoaded(n),
                                  }),
                                  src: n,
                                  size: 1e3,
                                  tabIndex: t === T ? 0 : -1,
                                  "aria-roledescription": r({
                                    id: "slider.slide",
                                  }),
                                  "aria-label": r(
                                    { id: "slider.image-counter" },
                                    {
                                      index: t + 1,
                                      count:
                                        null !==
                                          (a =
                                            null === (i = l.images) ||
                                            void 0 === i
                                              ? void 0
                                              : i.length) && void 0 !== a
                                          ? a
                                          : 0,
                                    },
                                  ),
                                  onLoadBySrc: l.setImageIsLoaded,
                                  withLoadingIndicator: !1,
                                  withSrcSet: !1,
                                  withAvatarReplace: !0,
                                  withAspectRatio: !0,
                                }),
                                t === T &&
                                  (0, o.jsx)("div", {
                                    className: (0, s.W)(A().loadingIndicator, {
                                      [A().loadingIndicator_showed]:
                                        !l.isImageLoaded(n),
                                    }),
                                    children: (0, o.jsx)(b.$, { size: "m" }),
                                  }),
                              ],
                            },
                            t,
                          );
                        }),
                }),
              }),
            ],
          })
        );
      });
    },
    50687: function (e, t, i) {
      "use strict";
      i.d(t, {
        V: function () {
          return ee;
        },
        x: function () {
          return j;
        },
      });
      var a = i(22874),
        n = i(40892),
        l = i(25534),
        r = i(13534);
      let o = { width: "614", height: "556" },
        s = { width: "100%", height: "240" },
        d = (e) => ({
          width: e ? s.width : o.width,
          height: e ? s.height : o.height,
        }),
        c = (e) => {
          let {
            variant: t,
            id: i,
            title: n,
            path: l,
            albumArtistName: r,
            albumArtistId: o,
            isMobile: s,
          } = e;
          return (0, a.pj)({
            id: i,
            type: t,
            title: n,
            path: l,
            artistName: null != r ? r : null,
            artistId: null != o ? o : null,
            ...d(s),
          });
        },
        u = (e) => {
          let {
            variant: t,
            id: i,
            title: n,
            path: l,
            playlistOwnerName: r,
            playlistOwnerLogin: o,
            isMobile: s,
          } = e;
          return (0, a.pj)({
            id: String(i),
            type: t,
            title: null != n ? n : null,
            path: null != l ? l : null,
            ownerName: r,
            ownerLogin: o,
            ...d(s),
          });
        },
        m = { width: "614", height: "244" },
        _ = { width: "100%", height: "240" },
        p = (e) => ({
          width: e ? _.width : m.width,
          height: e ? _.height : m.height,
        }),
        v = (e) => {
          let {
            variant: t,
            id: i,
            title: n,
            path: l,
            trackArtistName: r,
            trackArtistId: o,
            trackAlbumId: s,
            isMobile: d,
          } = e;
          return (0, a.pj)({
            id: i,
            type: t,
            albumId: s,
            title: n,
            path: l,
            artistName: null != r ? r : null,
            artistId: null != o ? o : null,
            ...p(d),
          });
        },
        h = (e, t) => {
          if (e.variant === r.GGO.TRACK) return v({ ...e, isMobile: t });
          if (e.variant === r.GGO.ALBUM) {
            let i = e.id;
            if (void 0 === i) throw new l.y("Missing album ID");
            return c({ ...e, id: i, isMobile: t });
          }
          if (e.variant === r.GGO.PLAYLIST) return u({ ...e, isMobile: t });
          throw new l.y("Unknown variant");
        };
      var y = i(63660);
      let x = (e, t, i, a) =>
          null === a
            ? '<a href="'.concat(e, '">').concat(t, "</a>")
            : null === i
              ? '<a href="'.concat(e, '">').concat(t, "</a> — ").concat(a)
              : '<a href="'
                  .concat(e, '">')
                  .concat(t, '</a> — <a href="')
                  .concat(i, '">')
                  .concat(a, "</a>"),
        g = "{lang}",
        b = RegExp("(px|%)$"),
        C = (e) => e.replace("px", ""),
        f = (e) => (b.test(e) ? e : "".concat(e).concat("px")),
        I = (e) => {
          let { width: t, height: i, iframeUri: a, listenMessage: n } = e,
            l = C(t),
            r = C(i),
            o = f(t),
            s = f(i);
          return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
            .concat(o, ";height:")
            .concat(s, ';" width="')
            .concat(l, '" height="')
            .concat(r, '" src="')
            .concat(a, '">')
            .concat(n, "</iframe>");
        },
        A = a.V5.model({ width: a.V5.string, height: a.V5.string }),
        N = A.props({
          id: a.V5.number,
          type: a.V5.literal(r.GGO.ALBUM),
          title: a.V5.string,
          path: a.V5.string,
          artistName: a.V5.maybeNull(a.V5.string),
          artistId: a.V5.maybeNull(a.V5.string),
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
                  .concat(
                    (0, y.getTldHost)(i.iframe.entityBaseUrl, t.tld, r.MgS),
                  )
                  .concat(e.path);
              },
              get artistUri() {
                if (null === e.artistId) return null;
                let { location: t } = (0, a.yj)(e),
                  { config: i } = (0, a.dU)(e);
                return ""
                  .concat(
                    (0, y.getTldHost)(i.iframe.entityBaseUrl, t.tld, r.MgS),
                    "/artist/",
                  )
                  .concat(e.artistId);
              },
              get iframeCode() {
                var i;
                return I({
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
              e.listenMessage = t(
                x(e.entityUri, e.title, e.artistUri, e.artistName),
              );
            },
          })),
        k = (e, t, i, a) =>
          '<a href="'
            .concat(e, '">')
            .concat(t, '</a> — <a href="')
            .concat(a, '">')
            .concat(i, "</a>"),
        S = A.props({
          id: a.V5.string,
          type: a.V5.literal(r.GGO.PLAYLIST),
          title: a.V5.maybeNull(a.V5.string),
          path: a.V5.string,
          ownerLogin: a.V5.maybeNull(a.V5.string),
          ownerName: a.V5.maybeNull(a.V5.string),
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
                  .concat(
                    (0, y.getTldHost)(i.iframe.entityBaseUrl, t.tld, r.MgS),
                  )
                  .concat(e.path);
              },
              get iframeCode() {
                var n;
                return I({
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
                k(
                  e.entityUri,
                  e.title,
                  e.ownerName,
                  (0, r.D5g)(i.tld, e.ownerLogin),
                ),
              );
            },
          })),
        P = (e, t, i, a) =>
          null === a
            ? '<a href="'.concat(e, '">').concat(t, "</a>")
            : null === i
              ? '<a href="'.concat(e, '">').concat(t, "</a> — ").concat(a)
              : '<a href="'
                  .concat(e, '">')
                  .concat(t, '</a> — <a href="')
                  .concat(i, '">')
                  .concat(a, "</a>"),
        E = A.props({
          id: a.V5.string,
          albumId: a.V5.maybeNull(a.V5.number),
          type: a.V5.literal(r.GGO.TRACK),
          title: a.V5.string,
          path: a.V5.string,
          artistName: a.V5.maybeNull(a.V5.string),
          artistId: a.V5.maybeNull(a.V5.string),
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
                  .concat(
                    (0, y.getTldHost)(i.iframe.entityBaseUrl, t.tld, r.MgS),
                  )
                  .concat(e.path);
              },
              get artistUri() {
                if (null === e.artistId) return null;
                let { location: t } = (0, a.yj)(e),
                  { config: i } = (0, a.dU)(e);
                return ""
                  .concat(
                    (0, y.getTldHost)(i.iframe.entityBaseUrl, t.tld, r.MgS),
                    "/artist/",
                  )
                  .concat(e.artistId);
              },
              get iframeCode() {
                var n;
                return I({
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
              e.listenMessage = t(
                P(e.entityUri, e.title, e.artistUri, e.artistName),
              );
            },
          })),
        T = a.V5.union(E, N, S),
        j = a.V5.model({ entity: a.V5.maybeNull(T), modal: n.KL }).actions(
          (e) => ({
            openModal(t) {
              let { settings: i } = (0, a.yj)(e);
              (e.entity = h(t, i.isMobile)), e.modal.open();
            },
            closeModal() {
              e.modal.close(), (e.entity = null);
            },
          }),
        );
      var L = i(75441),
        w = i(62569),
        M = i(9317),
        B = i(35846),
        R = i(59506),
        V = i(65067),
        O = i(15937),
        D = i(93093),
        W = i(68208),
        F = i(69756),
        U = i(7323),
        z = i(17392);
      let G = (e, t) =>
        b.test(e)
          ? e
          : 0 === e.trim().length
            ? "".concat(t, "px")
            : "".concat(Math.max(Number(e), t), "px");
      var Q = i(97141),
        Y = i(59472),
        K = i.n(Y);
      let Z = (e) => {
        let { closeToast: t } = e;
        return (0, L.jsx)(Q.Yj, {
          closeToast: t,
          cover: (0, L.jsx)(F.Icon, {
            className: K().icon,
            size: "xs",
            variant: "chain",
          }),
          message: (0, L.jsx)(z.Caption, {
            className: K().message,
            variant: "div",
            type: "controls",
            size: "m",
            children: (0, L.jsx)(O.Z, {
              id: "notifications-info.html-code-copied",
            }),
          }),
        });
      };
      var q = i(50287),
        H = i.n(q);
      let X = (0, w.Pi)((e) => {
        let { entity: t } = e,
          { formatMessage: i } = (0, M.Z)(),
          { language: a } = (0, r.ZSk)(),
          { notify: n } = (0, r.d$W)();
        (0, V.useEffect)(() => {
          t.setListenMessage((e) =>
            i({ id: "share.iframe-listen" }, { html: e }),
          );
        }, [t, i]);
        let l = (0, D.W)((e) => {
            let {
              target: { value: i },
            } = e;
            t.setWidth(i);
          }),
          o = (0, D.W)((e) => {
            let {
              target: { value: i },
            } = e;
            !b.test(i) &&
              (0 === i.length || Number.isNaN(Number(i)) || 220 > Number(i)) &&
              t.setWidth(String(220));
          }),
          s = (0, D.W)((e) => {
            let {
              target: { value: i },
            } = e;
            t.setHeight(i);
          }),
          d = (0, D.W)((e) => {
            let {
              target: { value: i },
            } = e;
            !b.test(i) &&
              (0 === i.length || Number.isNaN(Number(i)) || 88 > Number(i)) &&
              t.setHeight(String(88));
          }),
          c = { width: G(t.width, 220), height: G(t.height, 88) },
          u = t.iframeUri.replace(g, a),
          m = t.iframeCode.replace(g, a),
          _ = (0, D.W)(async () => {
            await window.navigator.clipboard.writeText(m),
              n((0, L.jsx)(Z, {}), { containerId: r.W$x.INFO });
          });
        return (0, L.jsxs)("div", {
          className: H().root,
          ...(0, B.BA)(B.bG.shareIframe.SHARE_IFRAME_EDITOR),
          children: [
            (0, L.jsxs)("form", {
              className: H().controls,
              children: [
                (0, L.jsxs)("div", {
                  className: H().settings,
                  children: [
                    (0, L.jsx)(U.I, {
                      containerClassName: H().sizeInputContainer,
                      size: "xxxs",
                      value: t.width,
                      variant: "secondary",
                      pattern: "^\\d+(px|%)?$",
                      min: 220,
                      required: !0,
                      onChange: l,
                      onBlur: o,
                      "aria-label": i({ id: "share.iframe-editor-width" }),
                      ...(0, B.BA)(
                        B.bG.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT,
                      ),
                    }),
                    (0, L.jsx)(F.Icon, { size: "xs", variant: "close" }),
                    (0, L.jsx)(U.I, {
                      containerClassName: H().sizeInputContainer,
                      size: "xxxs",
                      value: t.height,
                      pattern: "^\\d+(px|%)?$",
                      variant: "secondary",
                      min: 88,
                      required: !0,
                      onChange: s,
                      onBlur: d,
                      "aria-label": i({ id: "share.iframe-editor-height" }),
                      ...(0, B.BA)(
                        B.bG.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT,
                      ),
                    }),
                  ],
                }),
                (0, L.jsx)(U.I, {
                  inputClassName: H().iframeCodeInput,
                  containerClassName: H().iframeCodeInputContainer,
                  type: "text",
                  size: "xxxs",
                  variant: "secondary",
                  value: m,
                  required: !0,
                  readOnly: !0,
                  "aria-label": i({ id: "share.iframe-editor-code" }),
                  ...(0, B.BA)(B.bG.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT),
                }),
                (0, L.jsx)(W.Button, {
                  color: "primary",
                  className: H().copyButton,
                  size: "l",
                  radius: "xxxl",
                  onClick: _,
                  ...(0, B.BA)(
                    B.bG.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON,
                  ),
                  children: (0, L.jsx)(z.Caption, {
                    type: "text",
                    variant: "div",
                    size: "m",
                    weight: "medium",
                    lineClamp: 1,
                    children: (0, L.jsx)(O.Z, { id: "share.iframe-copy" }),
                  }),
                }),
              ],
            }),
            (0, L.jsx)("div", {
              className: H().iframeContainer,
              style: c,
              ...(0, B.BA)(B.bG.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW),
              children: (0, L.jsx)("iframe", {
                className: H().iframe,
                src: u,
                title: i({ id: "share.iframe-editor-preview" }),
              }),
            }),
          ],
        });
      });
      var J = i(93811),
        $ = i.n(J);
      let ee = (0, w.Pi)(() => {
        let {
            shareIframe: e,
            settings: { isMobile: t },
          } = (0, r.oR4)(),
          { formatMessage: i } = (0, M.Z)();
        return e.entity
          ? (0, L.jsx)(R.u, {
              className: $().root,
              contentClassName: $().content,
              open: e.modal.isOpened,
              onOpenChange: e.modal.onOpenChange,
              placement: t ? "default" : "center",
              size: "fitContent",
              title: i({ id: "share.iframe-modal-title" }),
              labelClose: i({ id: "interface-actions.close" }),
              onClose: e.closeModal,
              overlayColor: "full",
              containerProps: (0, B.BA)(B.bG.shareIframe.SHARE_IFRAME_MODAL),
              children: (0, L.jsx)(X, { entity: e.entity }),
            })
          : null;
      });
    },
    53809: function (e, t, i) {
      "use strict";
      i.d(t, {
        tU: function () {
          return er;
        },
        uD: function () {
          return d;
        },
      });
      var a = i(13534);
      async function n(e, t, i) {
        var n, l, r, o, s, d;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let c = await (0, a.EQQ)(i.locale),
          u = (0, a.bYF)(null !== (n = e.title) && void 0 !== n ? n : "");
        return i.isNotFound
          ? { robots: { index: !1 } }
          : {
              title: (function (e) {
                var t;
                let { trackMeta: i, messageFormatter: n } = e,
                  l = (0, a.KzX)(
                    null !== (t = i.artists) && void 0 !== t ? t : [],
                  );
                return n(
                  { id: "metadata.track-title" },
                  { trackTitle: i.title, artistsNames: l },
                );
              })({ trackMeta: e, messageFormatter: c }),
              description: (function (e) {
                var t, i;
                let { trackMeta: n, albumMeta: l, messageFormatter: r } = e,
                  o = (0, a.KzX)(
                    null !== (i = n.artists) && void 0 !== i ? i : [],
                  ),
                  s = Math.round((n.durationMs || 0) / a.qkF);
                return r(
                  { id: "metadata.track-description" },
                  {
                    type:
                      (null === (t = n.type) || void 0 === t
                        ? void 0
                        : t.replace("-", "_")) || null,
                    artistsNames: o || null,
                    trackTitle: n.title,
                    albumTitle: (null == l ? void 0 : l.title) || null,
                    duration: (0, a.gf)(s),
                    year: (null == l ? void 0 : l.year) || null,
                  },
                );
              })({ trackMeta: e, albumMeta: t, messageFormatter: c }),
              openGraph: (0, a.A36)({
                ogTitle: u,
                ogDescription: (function (e) {
                  var t, i;
                  let { trackMeta: n, albumMeta: l, messageFormatter: r } = e,
                    o = (0, a.Th8)(
                      (0, a.KzX)(
                        null !== (i = n.artists) && void 0 !== i ? i : [],
                      ),
                      96,
                      !1,
                    );
                  return r(
                    { id: "metadata.track-og-description" },
                    {
                      type:
                        (null === (t = n.type) || void 0 === t
                          ? void 0
                          : t.replace("-", "_")) || null,
                      artistsNames: o || null,
                      year: (null == l ? void 0 : l.year) || null,
                    },
                  );
                })({ trackMeta: e, albumMeta: t, messageFormatter: c }),
                fullUrl: null !== (l = i.fullUrl) && void 0 !== l ? l : "",
                locale: i.locale,
                ogImage: null !== (r = e.ogImage) && void 0 !== r ? r : "",
                siteName: c({ id: "metadata.yandex-music" }),
              }),
              twitter: (0, a.rz9)({
                cardType: a.qUR.APP,
                title: u,
                url: i.url,
                appName: c({ id: "metadata.yandex-music" }),
              }),
              appLinks: (0, a.VMi)({
                additional: {
                  ...i,
                  url: null !== (o = i.url) && void 0 !== o ? o : "",
                  fullUrl: null !== (s = i.fullUrl) && void 0 !== s ? s : "",
                  host: i.host,
                },
                appName: c({ id: "metadata.yandex-music" }),
              }),
              other: {
                "music:musician": (0, a.I82)(
                  null !== (d = null == e ? void 0 : e.artists) && void 0 !== d
                    ? d
                    : [],
                  i.host,
                ),
              },
            };
      }
      var l = i(22874),
        r = i(15186),
        o = i(1150),
        s = i(40892);
      let d = l.V5.compose(
        l.V5.model({
          meta: l.V5.maybeNull(o.le),
          similarTracks: l.V5.maybeNull(l.V5.array(o.le)),
          prevEntityId: l.V5.maybeNull(l.V5.union(l.V5.string, l.V5.number)),
          trackId: l.V5.maybeNull(l.V5.union(l.V5.string, l.V5.number)),
          albumId: l.V5.maybeNull(l.V5.number),
          isTrackPage: l.V5.optional(l.V5.boolean, !1),
          withAnimation: l.V5.boolean,
        }),
        s.KL,
        s.fu,
      )
        .views((e) => ({
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
            return e.isLoading || e.isRejected;
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
            var i;
            (0, l.fh)(e) &&
              ((e.meta = (0, o.Vt)(t.track)),
              (e.similarTracks = (0, l.pj)(
                null === (i = t.similarTracks) || void 0 === i
                  ? void 0
                  : i.map((e) => (0, o.Vt)(e)),
              )),
              (e.loadingState = a.Gui.RESOLVE));
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
              e.loadingState === a.Gui.PENDING ||
              e.shouldReloadMeta
            )
              return null;
            try {
              (e.loadingState = a.Gui.PENDING), (e.meta = null);
              let i = yield t.getFullInfoTrack({
                trackId: e.trackId,
                albumId: e.albumId,
              });
              if (!i) return (e.loadingState = a.Gui.REJECT), null;
              (e.meta = (0, o.Vt)(i.track)),
                (e.similarTracks = (0, l.pj)(
                  i.similarTracks.map((e) => (0, o.Vt)(e)),
                )),
                (e.prevEntityId = i.track.id),
                (e.loadingState = a.Gui.RESOLVE);
            } catch (t) {
              i.error(t), (e.loadingState = a.Gui.REJECT);
            }
            return null;
          }),
          open(t) {
            let { trackId: i, albumId: a } = t;
            i && a && ((e.trackId = i), (e.albumId = a), (e.isOpened = !0));
          },
          reset() {
            e.loadingState = a.Gui.IDLE;
          },
        }))
        .named("TrackPage");
      var c = i(75441),
        u = i(62569),
        m = i(65067),
        _ = i(59506),
        p = i(72783);
      let v = (e, t) => {
        (0, m.useEffect)(() => {
          if (!e || !t) return;
          let i = (0, p.DR)(e);
          n((0, o.nh)(t), i, {
            fullUrl: null,
            locale: null,
            url: null,
            tld: "",
            host: "",
          }).then((e) => {
            (0, a.gOT)(e);
          });
        }, [e, null == e ? void 0 : e.title, t, null == t ? void 0 : t.title]);
      };
      var h = i(82936),
        y = i.n(h),
        x = i(9317),
        g = i(35846),
        b = i(93093),
        C = i(68208),
        f = i(69756),
        I = i(97141),
        A = i(17392);
      let N = (e) => (e ? e.replace("-", "_") : null);
      var k = i(48993),
        S = i.n(k),
        P = i(28676),
        E = i(92064),
        T = i.n(E);
      let j = (e) => {
          let { isShimmerActive: t } = e;
          return (0, c.jsxs)("div", {
            className: T().root,
            children: [
              (0, c.jsx)(P.Shimmer, { className: T().title, isActive: t }),
              (0, c.jsxs)("div", {
                className: T().coverBlock,
                children: [
                  (0, c.jsx)(P.Shimmer, { className: T().cover, isActive: t }),
                  (0, c.jsxs)("div", {
                    className: T().linkBlock,
                    children: [
                      (0, c.jsx)(P.Shimmer, {
                        className: T().link,
                        isActive: t,
                      }),
                      (0, c.jsx)(P.Shimmer, {
                        className: T().description,
                        isActive: t,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        L = (0, u.Pi)((e) => {
          var t;
          let { onModalClose: i } = e,
            { formatMessage: n } = (0, x.Z)(),
            {
              settings: { isMobile: l },
              track: r,
              fullscreenPlayer: o,
            } = (0, a.oR4)(),
            s = (0, b.W)(() => {
              o.modal.isOpened && o.modal.close(), l && i();
            }),
            d = null === (t = r.meta) || void 0 === t ? void 0 : t.mainAlbum,
            u = (0, m.useMemo)(() => {
              if (!d) return;
              let e = d.trackCount;
              return d.isAudiobook || d.isFairyTale
                ? n({ id: "entity-names.number-of-chapters" }, { counter: e })
                : d.isPodcast
                  ? n({ id: "entity-names.number-of-episodes" }, { counter: e })
                  : n({ id: "entity-names.number-of-tracks" }, { counter: e });
            }, [d, n]);
          return r.isShimmerVisible
            ? (0, c.jsx)(j, { isShimmerActive: r.isLoading })
            : d
              ? (0, c.jsxs)("div", {
                  className: S().root,
                  ...(0, g.BA)(g.Br.track.TRACK_PAGE_ALBUM),
                  children: [
                    (0, c.jsx)(A.Heading, {
                      variant: "h2",
                      size: "m",
                      lineClamp: 1,
                      className: S().title,
                      ...(0, g.BA)(g.Br.track.TRACK_PAGE_ALBUM_TITLE),
                      children: n(
                        { id: "track-modal.album-heading" },
                        { type: N(d.type) },
                      ),
                    }),
                    (0, c.jsx)(I.ti, {
                      title: null == d ? void 0 : d.title,
                      coverUrl: null == d ? void 0 : d.coverUri,
                      description: u,
                      viewAllActionLink: null == d ? void 0 : d.url,
                      onViewAllAction: s,
                      titleLineClamp: 1,
                      available: d.isAvailable,
                      titleSize: "xs",
                      withDescription: !0,
                    }),
                  ],
                })
              : null;
        });
      var w = i(55188),
        M = i(39201),
        B = i(27273),
        R = i.n(B),
        V = i(32358),
        O = i(949),
        D = i.n(O);
      let W = (e) => {
          let { isShimmerActive: t } = e;
          return (0, c.jsxs)("div", {
            className: D().root,
            children: [
              (0, c.jsx)(P.Shimmer, { className: D().title, isActive: t }),
              (0, c.jsx)(I.Yh, {
                className: (0, V.W)(D().lyrics, D().important),
                count: 4,
                isActive: t,
              }),
              (0, c.jsx)(P.Shimmer, { className: D().button, isActive: t }),
            ],
          });
        },
        F = (0, u.Pi)((e) => {
          var t, i, n, l;
          let { track: r } = e,
            { formatMessage: s } = (0, x.Z)(),
            { notify: d } = (0, a.d$W)(),
            { track: u, trackLyrics: _ } = (0, a.oR4)(),
            { state: p, setState: v } = (0, w.O)(!1),
            h =
              _.currentTrackId !==
              (null === (t = u.meta) || void 0 === t ? void 0 : t.id),
            y =
              u.isResolved &&
              (null === (i = u.meta) || void 0 === i
                ? void 0
                : i.isLyricsAvailable);
          (0, m.useEffect)(() => {
            var e;
            (null === (e = u.meta) || void 0 === e ? void 0 : e.id) &&
              y &&
              h &&
              _.getLyrics(u.meta.id);
          }, [h, y, _, null === (n = u.meta) || void 0 === n ? void 0 : n.id]),
            _.shouldShowErrorNotification &&
              (d(
                (0, c.jsx)(I.Q, {
                  error: s({ id: "error-messages.error-during-action" }),
                }),
                { containerId: a.W$x.ERROR },
              ),
              _.resetShouldShowError());
          let C = (0, b.W)((e) => {
            v(e), e && r && _.sendViews({ trackId: r.id, albumId: r.albumId });
          });
          return _.isShimmerVisible || !_.lyrics || u.isShimmerVisible
            ? (0, c.jsx)(W, { isShimmerActive: _.isLoading || u.isLoading })
            : (0, c.jsxs)("div", {
                className: R().root,
                ...(0, g.BA)(g.Br.track.TRACK_PAGE_LYRICS),
                children: [
                  (0, c.jsx)(A.Heading, {
                    variant: "h2",
                    size: "m",
                    lineClamp: 1,
                    className: R().title,
                    ...(0, g.BA)(g.QM.content.TRACK_LYRICS_TITLE),
                    children: s({ id: "entity-names.text" }),
                  }),
                  (0, c.jsx)(M.f, {
                    moreText: s({ id: "track-modal.read-more" }),
                    buttonClassName: R().button,
                    open: p,
                    onOpenChange: C,
                    lineClamp: 4,
                    withFade: !0,
                    children: (0, c.jsx)(A.Caption, {
                      variant: "div",
                      className: R().lyrics,
                      size: "l",
                      weight: "medium",
                      ...(0, g.BA)(g.QM.content.TRACK_LYRICS_TEXT),
                      children: (0, c.jsx)(o.Zz, {
                        lyrics: _.lyrics,
                        authors: _.writersNames,
                        source:
                          null === (l = _.major) || void 0 === l
                            ? void 0
                            : l.prettyName,
                        isShimmerVisible: _.isShimmerVisible,
                        isShimmerActive: _.isLoading,
                      }),
                    }),
                  }),
                ],
              });
        });
      var U = i(84638),
        z = i(12642),
        G = i.n(z);
      let Q = (0, u.Pi)((e) => {
        let {
            tracks: t,
            contextId: i,
            isShimmerVisible: n,
            isShimmerActive: l,
            autoflowSeeds: r,
            shouldResetCarouselScroll: s,
          } = e,
          { formatMessage: d } = (0, x.Z)(),
          { from: u } = (0, a.MhG)({ contextId: i, contextType: U.A.Various }),
          m = (0, b.W)((e, i) => ({
            contextData: {
              type: U.A.Various,
              meta: { id: e.entityId },
              from: u,
              overrideAutoflowSeeds: r,
            },
            queueParams: { index: i },
            loadContextMeta: !1,
            entitiesData: t.map(o.E5),
          }));
        return (0, c.jsx)(I.ad, {
          className: G().root,
          shimmer: (0, c.jsx)(I.DX, { variant: a.Lxt.PLAYLIST, isActive: l }),
          maxColumnsCount: I.IA.TWO,
          itemsCountPerColumn: 4,
          blockHeaderTitle: d({ id: "track-modal.similar-tracks" }),
          blockHeaderHeadingVariant: "h2",
          isShimmerVisible: n,
          isShimmerActive: l,
          carouselItemClassName: (0, V.W)(G().item, G().important),
          blockHeaderClassName: G().title,
          carouselClassName: G().tracksContainer,
          shouldResetCarouselScroll: s,
          ...(0, g.BA)(g.Br.track.TRACK_PAGE_SIMILAR_TRACKS),
          children: t.map((e, t) =>
            (0, c.jsx)(
              o.O2,
              {
                track: e,
                playContextParams: m(e, t),
                withDislike: !1,
                withTrailer: !1,
              },
              e.id,
            ),
          ),
        });
      });
      var Y = i(5362),
        K = i(64353),
        Z = i(15937),
        q = i(32399),
        H = i(26759),
        X = i.n(H);
      let J = (0, u.Pi)((e) => {
        let { track: t } = e,
          { shouldShowBuySubscriptionModal: i, showBuySubscriptionModal: n } =
            (0, a.vLf)(),
          { from: l, utmLink: r } = (0, a.MhG)({
            contextId: t.id,
            contextType: U.A.Various,
          }),
          {
            user: s,
            settings: { isMobile: d },
          } = (0, a.oR4)(),
          u = (0, a.lAI)(),
          _ = (0, a.qsr)(),
          { iconSize: p, controlSize: v } = (0, Y.ty)(d),
          [h, y] = (0, m.useState)(!1),
          { isPlaying: x, togglePlay: C } = (0, a.qmq)({
            playContextParams: {
              contextData: {
                type: U.A.Various,
                meta: { id: t.entityId },
                from: l,
                utmLink: r,
              },
              loadContextMeta: !0,
            },
            entityId: t.entityId,
          }),
          A = (0, o.nD)({ track: t, callback: C }),
          N = (0, b.W)(() => {
            if (!_()) {
              if (i) {
                n();
                return;
              }
              A(), u(!x);
            }
          }),
          k = (0, q.SB)(t),
          S = (0, b.W)((e) => {
            e.stopPropagation();
          });
        return (0, c.jsxs)("div", {
          className: X().root,
          children: [
            (0, c.jsx)(I.JM, {
              className: (0, V.W)({
                [X().disabledButtonByDisclaimer]:
                  !t.isAvailable && t.hasModalAccess,
              }),
              withRipple: t.isAvailable,
              buttonVariant: "default",
              radius: "xxxl",
              size: v,
              color: "primary",
              iconSize: p,
              isPlaying: x,
              onClick: N,
              disabled: !t.isAvailable && !t.hasModalAccess,
              children: !d && (0, c.jsx)(Z.Z, { id: "player-actions.listen" }),
            }),
            (0, c.jsx)(I.dJ, {
              isLiked: t.isLiked,
              onClick: k,
              variant: "default",
              size: v,
              iconSize: p,
              withRipple: !d,
              disabled: !t.isAvailable || !s.isAuthorized,
            }),
            t.isAvailable &&
              (0, c.jsx)(o.hz, {
                track: t,
                open: h,
                onOpenChange: y,
                size: v,
                icon: (0, c.jsx)(f.Icon, { variant: "more", size: p }),
                className: (0, V.W)(X().menuButton, {
                  [X().menuButton_active]: h,
                }),
                wrapperClassName: X().menuWrapper,
                onClick: S,
                withTrailer: !1,
                ...(0, g.BA)(g.QM.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON),
              }),
          ],
        });
      });
      var $ = i(17397),
        ee = i.n($),
        et = i(29754),
        ei = i.n(et);
      let ea = (e) => {
          let { isShimmerActive: t } = e;
          return (0, c.jsxs)("div", {
            className: ei().root,
            children: [
              (0, c.jsx)(P.Shimmer, {
                className: ei().entityName,
                isActive: t,
              }),
              (0, c.jsx)(P.Shimmer, { className: ei().title, isActive: t }),
              (0, c.jsx)(I.Yh, {
                className: (0, V.W)(ei().artists, ei().important),
                shimmerClassName: ei().artist,
                count: 3,
                minWidth: 10,
                maxWidth: 30,
                isActive: t,
              }),
              (0, c.jsxs)("div", {
                className: ei().controls,
                children: [
                  (0, c.jsx)(P.Shimmer, {
                    className: ei().playButton,
                    isActive: t,
                  }),
                  (0, c.jsx)(P.Shimmer, {
                    className: ei().button,
                    isActive: t,
                  }),
                  (0, c.jsx)(P.Shimmer, {
                    className: ei().button,
                    isActive: t,
                  }),
                  (0, c.jsx)(P.Shimmer, {
                    className: ei().button,
                    isActive: t,
                  }),
                ],
              }),
            ],
          });
        },
        en = (0, u.Pi)((e) => {
          let {
              track: t,
              isShimmerVisible: i,
              isShimmerActive: n,
              isTrackPage: l,
            } = e,
            { formatMessage: r } = (0, x.Z)(),
            {
              settings: { isMobile: o },
            } = (0, a.oR4)(),
            s = null == t ? void 0 : t.explicitDisclaimer,
            d = (0, m.useMemo)(() => {
              if (s)
                return (0, c.jsx)(I.$i, {
                  className: (0, V.W)(ee().explicitMark, ee().important),
                  getDescriptionTexts: t.getDescriptionTexts,
                  size: "xxs",
                  variant: s,
                });
            }, [s, null == t ? void 0 : t.getDescriptionTexts]);
          return i
            ? (0, c.jsx)(ea, { isShimmerActive: n })
            : t
              ? (0, c.jsx)(Y.LH, {
                  entityName: r(
                    { id: "entity-names.track-type" },
                    { type: N(t.type) },
                  ),
                  entityNameIcon: d,
                  controls: (0, c.jsx)(J, { track: t }),
                  meta: (0, c.jsx)(K.jO, {
                    className: (0, V.W)(ee().text, ee().important),
                    linkClassName: ee().link,
                    captionClassName: ee().artistCaption,
                    artists: t.artists,
                    variant: "breakWord",
                    separator: o ? "" : void 0,
                  }),
                  title: t.title,
                  version: t.version,
                  headingVariant: l ? "h1" : "div",
                  titleClassName: (0, V.W)(ee().title, ee().important),
                  metaClassName: (0, V.W)(ee().meta, ee().important),
                  contentClassName: (0, V.W)(ee().content, ee().important),
                  withHeadingClamp: !1,
                  entityNameClassName: ee().entityName,
                })
              : null;
        }),
        el = (0, u.Pi)(() => {
          var e, t, i;
          let { formatMessage: n } = (0, x.Z)(),
            { notify: l } = (0, a.d$W)(),
            { track: r } = (0, a.oR4)(),
            s = (0, b.W)(() => {
              r.setAnimationState(!0), r.close();
            }),
            d = (0, o.nD)({ track: r.meta, disclaimerRejectHandler: s });
          return (
            (0, m.useEffect)(() => {
              d();
            }, [d]),
            r.isRejected &&
              l(
                (0, c.jsx)(I.Q, {
                  error: n({ id: "error-messages.error-during-action" }),
                }),
                { containerId: a.W$x.ERROR },
              ),
            (0, c.jsxs)("div", {
              ...(0, g.BA)(g.Br.track.TRACK_PAGE),
              children: [
                (0, c.jsxs)("header", {
                  className: y().header,
                  children: [
                    (0, c.jsx)(C.Button, {
                      radius: "round",
                      color: "secondary",
                      size: "xxs",
                      icon: (0, c.jsx)(f.Icon, {
                        variant: "close",
                        size: "xxs",
                      }),
                      className: y().closeButton,
                      onClick: s,
                      "aria-label": n({ id: "interface-actions.close" }),
                      ...(0, g.BA)(g.Br.track.TRACK_PAGE_CLOSE_BUTTON),
                    }),
                    (0, c.jsx)(en, {
                      track: r.meta,
                      isShimmerVisible: r.isShimmerVisible,
                      isShimmerActive: r.isLoading,
                      isTrackPage: r.isTrackPage,
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: y().content,
                  ...(0, g.BA)(g.Br.track.TRACK_PAGE_CONTENT),
                  children: [
                    (0, c.jsx)(L, { onModalClose: s }),
                    (null === (e = r.meta) || void 0 === e
                      ? void 0
                      : e.isLyricsAvailable) &&
                      (0, c.jsx)(F, { track: r.meta }, r.meta.id),
                    r.similarTracks &&
                      r.similarTracks.length > 0 &&
                      (null === (t = r.meta) || void 0 === t
                        ? void 0
                        : t.isTrackMusic) &&
                      (0, c.jsx)(Q, {
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
        er = (0, u.Pi)(() => {
          let { contentRef: e } = (0, a.$Y6)(),
            {
              album: t,
              track: i,
              settings: { isMobile: n },
            } = (0, a.oR4)();
          i.trackId && i.albumId && i.isOpened && i.getData(),
            (0, m.useEffect)(
              () => () => {
                i.reset();
              },
              [i],
            ),
            (0, m.useEffect)(() => {
              i.isOpened && i.setAnimationState(!1);
            }, [i]),
            v(t.meta, i.meta);
          let l = (0, m.useCallback)(
            (e) => {
              var t;
              null === (t = i.onOpenChange) || void 0 === t || t.call(i, e);
            },
            [i],
          );
          return (0, c.jsx)(_.u, {
            size: "fitContent",
            placement: n ? "default" : "right",
            open: i.isOpened,
            onOpenChange: l,
            className: y().root,
            contentClassName: y().modalContent,
            portalNode: n ? null : e,
            showHeader: !1,
            withOverlay: n,
            closeOnOutsidePress: !1,
            withAnimation: i.withAnimation,
            isMobile: n,
            lockScroll: n,
            children: (0, c.jsx)(el, {}),
          });
        });
      (0, u.Pi)((e) => {
        let {
            albumId: t,
            trackId: i,
            preloadedTrack: n,
            preloadedSimilarTracks: l,
          } = e,
          { track: r } = (0, a.oR4)();
        return (
          n && r.setTrackInfo({ track: n, similarTracks: l }),
          r.setIsTrackPage(!0),
          r.open({ trackId: i, albumId: Number(t) }),
          null
        );
      });
    },
    40892: function (e, t, i) {
      "use strict";
      i.d(t, {
        Ie: function () {
          return _;
        },
        KL: function () {
          return p;
        },
        S2: function () {
          return h;
        },
        Ib: function () {
          return y;
        },
        K3: function () {
          return g;
        },
        dU: function () {
          return b;
        },
        K8: function () {
          return C;
        },
        i_: function () {
          return S;
        },
        ie: function () {
          return L;
        },
        n4: function () {
          return B;
        },
        T2: function () {
          return F;
        },
        fE: function () {
          return U;
        },
        fu: function () {
          return z;
        },
        CU: function () {
          return G;
        },
        Al: function () {
          return Q;
        },
        Vn: function () {
          return Y;
        },
        ao: function () {
          return J;
        },
        tC: function () {
          return $;
        },
      });
      var a,
        n,
        l,
        r,
        o,
        s,
        d,
        c,
        u = i(22874),
        m = i(5972);
      let _ = u.V5.model("BaseAdvertBanner", {
          type: u.V5.enumeration(Object.values(m.Y)),
          noAds: u.V5.boolean,
          hasError: u.V5.boolean,
          isShowBanner: u.V5.boolean,
        })
          .views((e) => ({
            get isVisible() {
              if (e.noAds || e.hasError || !e.isShowBanner) return !1;
              let { advertBanners: t } = (0, u.yj)(e);
              if (t.hasBranding) return !1;
              return t.isVisible(e.type);
            },
          }))
          .actions((e) => ({
            setType(t) {
              e.type = t;
            },
            toggleNoAdsTrue() {
              e.noAds = !0;
            },
            setIsShowBanner(t) {
              e.isShowBanner = t;
            },
            toggleHasErrorTrue() {
              e.hasError = !0;
            },
            reset() {
              (e.type = m.Y.EMPTY),
                (e.noAds = !1),
                (e.isShowBanner = !0),
                (e.hasError = !1);
            },
          })),
        p = u.V5.model("BaseModal", {
          isOpened: u.V5.optional(u.V5.boolean, !1),
        }).actions((e) => ({
          onOpenChange(t) {
            e.isOpened = t;
          },
          open() {
            e.isOpened = !0;
          },
          close() {
            e.isOpened = !1;
          },
        })),
        v = u.V5.model("BrowserInfo", {
          hasHuaweiAppGallery: u.V5.boolean,
          inAppBrowser: u.V5.boolean,
          isBrowser: u.V5.boolean,
          isMobile: u.V5.boolean,
          isTablet: u.V5.boolean,
          isTouch: u.V5.boolean,
          name: u.V5.maybe(u.V5.string),
          version: u.V5.maybe(u.V5.string),
          OSFamily: u.V5.maybe(u.V5.string),
        }).views((e) => ({
          get isSafari() {
            var t;
            return null === (t = e.name) || void 0 === t
              ? void 0
              : t.toLowerCase().includes("safari");
          },
        })),
        h = u.V5.model("CaseForms", {
          nominative: u.V5.optional(u.V5.string, ""),
          genitive: u.V5.optional(u.V5.string, ""),
          dative: u.V5.optional(u.V5.string, ""),
          accusative: u.V5.optional(u.V5.string, ""),
          instrumental: u.V5.optional(u.V5.string, ""),
          prepositional: u.V5.optional(u.V5.string, ""),
        }),
        y = u.V5.model("Cover", {
          uri: u.V5.maybe(u.V5.string),
          color: u.V5.maybe(u.V5.string),
          videoUrl: u.V5.maybe(u.V5.string),
        }),
        x = u.V5.model("DisclaimerDetails", {
          text: u.V5.maybe(u.V5.string),
          url: u.V5.maybe(u.V5.string),
        }),
        g = u.V5.model("DisclaimerData", {
          title: u.V5.maybe(u.V5.string),
          description: u.V5.maybe(u.V5.string),
          details: u.V5.maybe(x),
        }),
        b = u.V5.compose(u.V5.model({ id: u.V5.string, type: u.V5.string }), g),
        C = u.V5.model("DomainTrailerEntity", { isAvailable: u.V5.boolean });
      var f = i(13003),
        I = i(96017),
        A = i(35785),
        N = i(31475);
      let k = u.V5.model("Experiment", {
          group: u.V5.maybe(u.V5.string),
          value: u.V5.maybe(u.V5.frozen()),
        }),
        S = u.V5.model("Experiments", {
          loadingState: u.V5.enumeration(Object.values(N.G)),
          experiments: u.V5.optional(u.V5.map(k), {}),
          overwrittenExperiments: u.V5.optional(u.V5.map(k), {}),
        })
          .views((e) => {
            let t = {
              getOverwrittenExperiments() {
                let { containerStorage: t, config: i } = (0, u.dU)(e);
                return (0, A.o)(t, i);
              },
              getExperiment(i) {
                let n = e.experiments.get(i),
                  l = t.getOverwrittenExperiments();
                return (
                  l?.[i] ?? window?.DEFAULT_EXPERIMENT_OVERRIDES()?.[i] ?? n
                );
              },
              isExperimentEnabled(e) {
                var i, a, n;
                let l = t.getExperiment(e);
                return (0, f.Z)(
                  null == l
                    ? void 0
                    : null === (i = l.value) || void 0 === i
                      ? void 0
                      : i.enabled,
                )
                  ? null == l
                    ? void 0
                    : null === (n = l.value) || void 0 === n
                      ? void 0
                      : n.enabled
                  : (null == l
                      ? void 0
                      : null === (a = l.value) || void 0 === a
                        ? void 0
                        : a.value) !== void 0 &&
                      t.checkExperiment(e, l.value.value);
              },
              getEnabledFlags() {
                let i = [];
                for (let a of new Set([
                  ...e.overwrittenExperiments.keys(),
                  ...e.experiments.keys(),
                ]).keys())
                  t.isExperimentEnabled(a) && i.push(a);
                return i;
              },
              checkExperiment(t, i) {
                let a = e.experiments.get(t),
                  { containerStorage: n, config: l } = (0, u.dU)(e);
                return (0, I.B)({
                  containerStorage: n,
                  config: l,
                  name: t,
                  value: i,
                  experimentDetail: a,
                });
              },
              isRejected: () => e.loadingState === N.G.REJECT,
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { accountResource: i, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== N.G.PENDING)
                try {
                  e.loadingState = N.G.PENDING;
                  let a = t;
                  a || (a = yield i.experimentsDetails()),
                    e.experiments.clear(),
                    Object.entries(a).forEach((t) => {
                      let [i, a] = t;
                      e.experiments.set(i, a);
                    }),
                    (e.loadingState = N.G.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = N.G.REJECT);
                } finally {
                  var n;
                  Object.entries(
                    null !== (n = e.getOverwrittenExperiments()) && void 0 !== n
                      ? n
                      : {},
                  ).forEach((t) => {
                    let [i, a] = t;
                    e.overwrittenExperiments.set(i, a);
                  });
                }
            }),
            updateOverwrittenExperiments(t, i) {
              let { config: a } = (0, u.dU)(e);
              a.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.set(t, i);
            },
            deleteOverwrittenExperiments(t) {
              let { config: i } = (0, u.dU)(e);
              i.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.delete(t);
            },
          }));
      ((a = o || (o = {})).EXPLICIT = "explicit"), (a.CLEAN = "clean");
      var P = i(94123),
        E = i(97472),
        T = i(13534),
        j = i(63890);
      let L = u.V5.model("ExplicitModel", {
        contentWarning: u.V5.maybe(u.V5.enumeration(Object.values(o))),
        trackType: u.V5.maybe(u.V5.enumeration(Object.values(P.V))),
        disclaimers: u.V5.maybe(u.V5.array(u.V5.string)),
      })
        .views((e) => ({
          get isExplicit() {
            return e.contentWarning === o.EXPLICIT;
          },
          get explicitDisclaimer() {
            if (!(0, u.fh)(e) || !e.disclaimers) return null;
            let t = (0, T.ElP)(e.disclaimers, [
              E.e.EXPLICIT_ICON,
              E.e.AGE_18_ICON,
              E.e.EXCLAMATION_ICON,
            ]);
            if ((null == t ? void 0 : t.type) === E.e.EXCLAMATION_ICON)
              return j.i.EXCLAMATION;
            if ((null == t ? void 0 : t.type) === E.e.EXPLICIT_ICON)
              return j.i.E;
            if ((null == t ? void 0 : t.type) === E.e.AGE_18_ICON)
              return j.i.NUMERIC;
            return null;
          },
        }))
        .actions((e) => ({
          getDescriptionTexts: (0, u.ls)(function* () {
            if (!e.disclaimers) return null;
            let { disclaimers: t } = (0, u.yj)(e),
              i = (0, T.UY5)(e.disclaimers, E.e.DESCRIPTION_TEXT) || [],
              a = [];
            for (let e of i) {
              let i = yield t.getDisclaimerById(e.id);
              i && i.title && a.push(i.title);
            }
            return a;
          }),
        }));
      ((n = s || (s = {}))[(n.LIKED = 1)] = "LIKED"),
        (n[(n.DISLIKED = -1)] = "DISLIKED");
      var w = i(89143);
      ((l = d || (d = {})).LIKED = "1"), (l.DISLIKED = "0");
      let M = u.V5.optional(u.V5.map(u.V5.enumeration(Object.values(d))), {}),
        B = u.V5.model("LibraryAllIds", {
          loadingState: u.V5.enumeration(Object.values(N.G)),
          tracks: M,
          albums: M,
          artists: M,
          playlists: M,
        })
          .views((e) => ({
            isTrackLiked: (t) => "1" === e.tracks.get(String(t)),
            isTrackDisliked: (t) => "0" === e.tracks.get(String(t)),
            isArtistLiked: (t) => "1" === e.artists.get(String(t)),
            isArtistDisliked: (t) => "0" === e.artists.get(String(t)),
            isAlbumLiked: (t) => "1" === e.albums.get(String(t)),
            isPlaylistLiked: (t) => "1" === e.playlists.get(String(t)),
          }))
          .actions((e) => {
            let t = {
              setRecords(e, t) {
                if (t) {
                  for (let i in t)
                    if (Object.prototype.hasOwnProperty.call(t, i)) {
                      let a = t[i] === s.LIKED ? "1" : "0";
                      e.set(String(i), a);
                    }
                }
              },
              getData: (0, u.ls)(function* () {
                let { libraryResource: i, modelActionsLogger: a } = (0, u.dU)(
                  e,
                );
                if (e.loadingState !== N.G.PENDING)
                  try {
                    e.loadingState = N.G.PENDING;
                    let a = yield i.getAllIds({});
                    e.albums.clear(),
                      e.artists.clear(),
                      e.playlists.clear(),
                      e.tracks.clear(),
                      t.setRecords(e.tracks, a.defaultLibrary),
                      t.setRecords(e.albums, a.albums),
                      t.setRecords(e.artists, a.artists),
                      t.setRecords(e.playlists, a.playlists),
                      (e.loadingState = N.G.RESOLVE);
                  } catch (t) {
                    a.error(t), (e.loadingState = N.G.REJECT);
                  }
              }),
              toggleTrackLike: (0, u.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: a } = (0, u.dU)(e),
                  n = String(t.entityId),
                  l = e.tracks.get(n);
                try {
                  let a;
                  let l = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "1" === e.tracks.get(n)
                      ? (e.tracks.delete(n), (a = yield i.unlikeTrack(l)))
                      : (e.tracks.set(n, "1"), (a = yield i.likeTrack(l))),
                    a
                  );
                } catch (t) {
                  return (
                    l ? e.tracks.set(n, l) : e.tracks.delete(n),
                    a.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, u.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: a } = (0, u.dU)(e),
                  n = String(t.entityId),
                  l = e.tracks.get(n);
                try {
                  let a;
                  let l = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "0" === e.tracks.get(n)
                      ? (e.tracks.delete(n), (a = yield i.undislikeTrack(l)))
                      : (e.tracks.set(n, "0"), (a = yield i.dislikeTrack(l))),
                    a
                  );
                } catch (t) {
                  return (
                    l ? e.tracks.set(n, l) : e.tracks.delete(n),
                    a.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, u.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: a } = (0, u.dU)(e),
                  n = String(t.entityId),
                  l = e.artists.get(n);
                try {
                  let a;
                  return (
                    "1" === e.artists.get(n)
                      ? (e.artists.delete(n), (a = yield i.unlikeArtist(t)))
                      : (e.artists.set(n, "1"), (a = yield i.likeArtist(t))),
                    a
                  );
                } catch (t) {
                  return (
                    l ? e.artists.set(n, l) : e.artists.delete(n),
                    a.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, u.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: a } = (0, u.dU)(e),
                  n = String(t.entityId),
                  l = e.artists.get(n);
                try {
                  let a;
                  return (
                    "0" === e.artists.get(n)
                      ? (e.artists.delete(n), (a = yield i.undislikeArtist(t)))
                      : (e.artists.set(n, "0"), (a = yield i.dislikeArtist(t))),
                    a
                  );
                } catch (t) {
                  return (
                    l ? e.artists.set(n, l) : e.artists.delete(n),
                    a.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, u.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: a } = (0, u.dU)(e),
                  n = String(t.entityId),
                  l = e.albums.get(n);
                try {
                  let a;
                  return (
                    "1" === e.albums.get(n)
                      ? (e.albums.delete(n), (a = yield i.unlikeAlbum(t)))
                      : (e.albums.set(n, "1"), (a = yield i.likeAlbum(t))),
                    a
                  );
                } catch (t) {
                  return (
                    l ? e.albums.set(n, l) : e.albums.delete(n),
                    a.error(t),
                    w.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, u.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: a } = (0, u.dU)(e),
                  n = String(t.entityId),
                  l = e.playlists.get(n);
                try {
                  let a;
                  return (
                    "1" === e.playlists.get(n)
                      ? (e.playlists.delete(n), (a = yield i.unlikePlaylist(t)))
                      : (e.playlists.set(n, "1"),
                        (a = yield i.likePlaylist(t))),
                    a
                  );
                } catch (t) {
                  return (
                    l ? e.playlists.set(n, l) : e.playlists.delete(n),
                    a.error(t),
                    w.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        R = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
      var V = i(50278);
      ((r = c || (c = {})).LIKED = "1"), (r.DISLIKED = "0");
      let O = [
          V.z.LIKED_ALBUMS,
          V.z.LIKED_ARTISTS,
          V.z.LIKED_PLAYLISTS,
          V.z.LIKED_TRACKS,
          V.z.LIKED_CLIPS,
        ],
        D = u.V5.optional(u.V5.map(u.V5.enumeration(Object.values(c))), {}),
        W = u.V5.model("LibraryRecord", {
          revision: u.V5.maybeNull(u.V5.number),
          items: D,
        }),
        F = u.V5.model("LibrarySync", {
          loadingState: u.V5.enumeration(Object.values(N.G)),
          tracks: W,
          albums: W,
          artists: W,
          playlists: W,
          clips: W,
        })
          .views((e) => ({
            isTrackLiked: (t) => "1" === e.tracks.items.get(String(t)),
            isTrackDisliked: (t) => "0" === e.tracks.items.get(String(t)),
            isArtistLiked: (t) => "1" === e.artists.items.get(String(t)),
            isArtistDisliked: (t) => "0" === e.artists.items.get(String(t)),
            isAlbumLiked: (t) => "1" === e.albums.items.get(String(t)),
            isPlaylistLiked: (t) => "1" === e.playlists.items.get(String(t)),
            isClipLiked: (t) => "1" === e.clips.items.get(String(t)),
          }))
          .actions((e) => {
            let t = {
              getData: (0, u.ls)(function* () {
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : O,
                  { modelActionsLogger: a, collectionResource: n } = (0, u.dU)(
                    e,
                  );
                if (e.loadingState !== N.G.PENDING)
                  try {
                    e.loadingState = N.G.PENDING;
                    let a = {};
                    i.includes(V.z.LIKED_ALBUMS) &&
                      (a.likedAlbums = R(e.albums.revision)),
                      i.includes(V.z.LIKED_ARTISTS) &&
                        (a.likedArtists = R(e.artists.revision)),
                      i.includes(V.z.LIKED_TRACKS) &&
                        (a.likedTracks = R(e.tracks.revision)),
                      i.includes(V.z.LIKED_CLIPS) &&
                        (a.likedClips = R(e.clips.revision)),
                      i.includes(V.z.LIKED_PLAYLISTS) &&
                        (a.likedPlaylists = {});
                    let l = yield n.sync(a);
                    t.setAlbums(l.values.likedAlbums),
                      t.setArtists(l.values.likedArtists),
                      t.setPlaylists(l.values.likedPlaylists),
                      t.setTracks(l.values.likedTracks),
                      t.setClips(l.values.likedClips),
                      (e.loadingState = N.G.RESOLVE);
                  } catch (t) {
                    a.error(t), (e.loadingState = N.G.REJECT);
                  }
              }),
              setArtists: (i) => {
                (null == i ? void 0 : i.values) &&
                  e.artists.revision !== i.info.revision &&
                  (t.clearArtists(),
                  (e.artists.revision = i.info.revision),
                  i.values.liked.map((t) => {
                    e.artists.items.set(t.artistId.toString(), "1");
                  }),
                  i.values.disliked.map((t) => {
                    e.artists.items.set(t.artistId.toString(), "0");
                  }));
              },
              setAlbums: (i) => {
                (null == i ? void 0 : i.values) &&
                  e.albums.revision !== i.info.revision &&
                  (t.clearAlbums(),
                  (e.albums.revision = i.info.revision),
                  i.values.liked.map((t) => {
                    e.albums.items.set(t.albumId.toString(), "1");
                  }));
              },
              setPlaylists: (i) => {
                (null == i ? void 0 : i.values) &&
                  (t.clearPlaylists(),
                  i.values.liked.map((t) => {
                    e.playlists.items.set(
                      ""
                        .concat(t.compositeData.uid, ":")
                        .concat(t.compositeData.kind),
                      "1",
                    );
                  }));
              },
              setTracks: (i) => {
                (null == i ? void 0 : i.values) &&
                  e.tracks.revision !== i.info.revision &&
                  (t.clearTracks(),
                  (e.tracks.revision = i.info.revision),
                  i.values.liked.map((t) => {
                    e.tracks.items.set(t.trackId, "1");
                  }),
                  i.values.disliked.map((t) => {
                    e.tracks.items.set(t.trackId, "0");
                  }));
              },
              setClips: (i) => {
                (null == i ? void 0 : i.values) &&
                  e.clips.revision !== i.info.revision &&
                  (t.clearArtists(),
                  (e.clips.revision = i.info.revision),
                  i.values.liked.map((t) => {
                    e.clips.items.set(t.clipId.toString(), "1");
                  }));
              },
              clearArtists: () => {
                (e.artists.revision = null), e.artists.items.clear();
              },
              clearAlbums: () => {
                (e.albums.revision = null), e.albums.items.clear();
              },
              clearPlaylists: () => {
                (e.playlists.revision = null), e.playlists.items.clear();
              },
              clearTracks: () => {
                (e.tracks.revision = null), e.tracks.items.clear();
              },
              clearClips: () => {
                (e.clips.revision = null), e.clips.items.clear();
              },
              toggleTrackLike: (0, u.ls)(function* (i) {
                let { usersResource: a, modelActionsLogger: n } = (0, u.dU)(e),
                  l = String(i.entityId),
                  r = e.tracks.items.get(l);
                try {
                  let n;
                  let r = {
                    entityId: i.albumId
                      ? "".concat(i.entityId, ":").concat(i.albumId)
                      : i.entityId,
                    userId: i.userId,
                  };
                  return (
                    "1" === e.tracks.items.get(l)
                      ? (e.tracks.items.delete(l), (n = yield a.unlikeTrack(r)))
                      : (e.tracks.items.set(l, "1"),
                        (n = yield a.likeTrack(r))),
                    t.getData([V.z.LIKED_TRACKS]),
                    n
                  );
                } catch (t) {
                  return (
                    r ? e.tracks.items.set(l, r) : e.tracks.items.delete(l),
                    n.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, u.ls)(function* (i) {
                let { usersResource: a, modelActionsLogger: n } = (0, u.dU)(e),
                  l = String(i.entityId),
                  r = e.tracks.items.get(l);
                try {
                  let n;
                  let r = {
                    entityId: i.albumId
                      ? "".concat(i.entityId, ":").concat(i.albumId)
                      : i.entityId,
                    userId: i.userId,
                  };
                  return (
                    "0" === e.tracks.items.get(l)
                      ? (e.tracks.items.delete(l),
                        (n = yield a.undislikeTrack(r)))
                      : (e.tracks.items.set(l, "0"),
                        (n = yield a.dislikeTrack(r))),
                    t.getData([V.z.LIKED_TRACKS]),
                    n
                  );
                } catch (t) {
                  return (
                    r ? e.tracks.items.set(l, r) : e.tracks.items.delete(l),
                    n.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, u.ls)(function* (i) {
                let { usersResource: a, modelActionsLogger: n } = (0, u.dU)(e),
                  l = String(i.entityId),
                  r = e.artists.items.get(l);
                try {
                  let n;
                  return (
                    "1" === e.artists.items.get(l)
                      ? (e.artists.items.delete(l),
                        (n = yield a.unlikeArtist(i)))
                      : (e.artists.items.set(l, "1"),
                        (n = yield a.likeArtist(i))),
                    t.getData([V.z.LIKED_ARTISTS]),
                    n
                  );
                } catch (t) {
                  return (
                    r ? e.artists.items.set(l, r) : e.artists.items.delete(l),
                    n.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, u.ls)(function* (i) {
                let { usersResource: a, modelActionsLogger: n } = (0, u.dU)(e),
                  l = String(i.entityId),
                  r = e.artists.items.get(l);
                try {
                  let n;
                  return (
                    "0" === e.artists.items.get(l)
                      ? (e.artists.items.delete(l),
                        (n = yield a.undislikeArtist(i)))
                      : (e.artists.items.set(l, "0"),
                        (n = yield a.dislikeArtist(i))),
                    t.getData([V.z.LIKED_ARTISTS]),
                    n
                  );
                } catch (t) {
                  return (
                    r ? e.artists.items.set(l, r) : e.artists.items.delete(l),
                    n.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, u.ls)(function* (i) {
                let { usersResource: a, modelActionsLogger: n } = (0, u.dU)(e),
                  l = String(i.entityId),
                  r = e.albums.items.get(l);
                try {
                  let n;
                  return (
                    "1" === e.albums.items.get(l)
                      ? (e.albums.items.delete(l), (n = yield a.unlikeAlbum(i)))
                      : (e.albums.items.set(l, "1"),
                        (n = yield a.likeAlbum(i))),
                    t.getData([V.z.LIKED_ALBUMS]),
                    n
                  );
                } catch (t) {
                  return (
                    r ? e.albums.items.set(l, r) : e.albums.items.delete(l),
                    n.error(t),
                    w.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, u.ls)(function* (i) {
                let { usersResource: a, modelActionsLogger: n } = (0, u.dU)(e),
                  l = String(i.entityId),
                  r = e.playlists.items.get(l);
                try {
                  let n;
                  return (
                    "1" === e.playlists.items.get(l)
                      ? (e.playlists.items.delete(l),
                        (n = yield a.unlikePlaylist(i)))
                      : (e.playlists.items.set(l, "1"),
                        (n = yield a.likePlaylist(i))),
                    t.getData([V.z.LIKED_PLAYLISTS]),
                    n
                  );
                } catch (t) {
                  return (
                    r
                      ? e.playlists.items.set(l, r)
                      : e.playlists.items.delete(l),
                    n.error(t),
                    w.B.ERROR
                  );
                }
              }),
              toggleClipLike: (0, u.ls)(function* (i) {
                let { usersResource: a, modelActionsLogger: n } = (0, u.dU)(e),
                  l = String(i.entityId),
                  r = e.clips.items.get(l);
                try {
                  return (
                    "1" === e.clips.items.get(l)
                      ? (e.clips.items.delete(l), yield a.unlikeClip(i))
                      : (e.clips.items.set(l, "1"), yield a.likeClip(i)),
                    t.getData([V.z.LIKED_CLIPS]),
                    w.B.OK
                  );
                } catch (t) {
                  return (
                    r ? e.clips.items.set(l, r) : e.clips.items.delete(l),
                    n.error(t),
                    w.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        U = u.V5.model("LikesCount", {
          likesCount: u.V5.maybe(u.V5.number),
          pendingLikesCount: u.V5.optional(u.V5.number, 0),
        })
          .views((e) => ({
            get actualLikesCount() {
              if ("number" == typeof e.likesCount) {
                var t;
                return (
                  e.likesCount +
                  (null !== (t = e.pendingLikesCount) && void 0 !== t ? t : 0)
                );
              }
              return 0;
            },
          }))
          .actions((e) => ({
            likePending() {
              e.pendingLikesCount += 1;
            },
            unlikePending() {
              e.pendingLikesCount -= 1;
            },
          })),
        z = u.V5.model("LoadingState", {
          loadingState: u.V5.enumeration(Object.values(N.G)),
        }).views((e) => ({
          get isNeededToLoad() {
            return e.loadingState === N.G.IDLE;
          },
          get isLoading() {
            return e.loadingState === N.G.PENDING;
          },
          get isResolved() {
            return e.loadingState === N.G.RESOLVE;
          },
          get isRejected() {
            return e.loadingState === N.G.REJECT;
          },
        })),
        G = u.V5.model("Location", {
          pathname: u.V5.optional(u.V5.string, ""),
          searchParams: u.V5.optional(u.V5.string, ""),
          host: u.V5.optional(u.V5.string, ""),
          tld: u.V5.optional(u.V5.string, ""),
          origin: u.V5.optional(u.V5.string, ""),
          href: u.V5.optional(u.V5.string, ""),
        }).actions((e) => ({
          setPathname(t) {
            e.pathname = t;
          },
          setSearchParams(t) {
            e.searchParams = t;
          },
          setHost(t) {
            e.host = t;
          },
          setTld(t) {
            e.tld = t;
          },
          setOrigin(t) {
            e.origin = t;
          },
          setHref(t) {
            e.href = t;
          },
        })),
        Q = u.V5.model("ModelDestroyManager").actions(() => ({
          destroyItems(e) {
            e.forEach((e) => {
              e && (0, u.og)(e);
            }),
              queueMicrotask(() => {
                e.forEach((e) => {
                  e && (0, u.ob)(e);
                });
              });
          },
        })),
        Y = u.V5.model("Pager", {
          page: u.V5.number,
          perPage: u.V5.number,
          total: u.V5.number,
        });
      var K = i(72455),
        Z = i(34389),
        q = i(82969),
        H = i(95018),
        X = i(52023);
      let J = u.V5.model("Settings", {
          layout: u.V5.maybeNull(u.V5.enumeration(Object.keys(K.t))),
          isLandscape: u.V5.boolean,
          isMobileLandscapeHeight: u.V5.boolean,
          platform: u.V5.maybe(u.V5.enumeration(Object.values(H.t))),
          browserInfo: v,
          liteVersionMode: u.V5.maybe(u.V5.enumeration(Object.values(q.m))),
        })
          .views((e) => {
            let t = {
              get isMobile() {
                return e.layout === K.t.Mobile;
              },
              get isDesktopApplication() {
                return !!e.platform;
              },
              get isWindowsApplication() {
                return e.platform === H.t.WINDOWS;
              },
              get isMacOSApplication() {
                return e.platform === H.t.MACOS;
              },
              get isLinuxApplication() {
                return e.platform === H.t.LINUX;
              },
              get isLiteVersionModeEnabled() {
                return e.liteVersionMode === q.m.ENABLED;
              },
              get isLiteVersionModeDisabled() {
                return e.liteVersionMode === q.m.DISABLED;
              },
              get isLiteVersionModeAvailableForToggle() {
                return (
                  t.isLiteVersionModeDisabled || t.isLiteVersionModeEnabled
                );
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              setLayout(t) {
                e.layout = t;
              },
              setPlatform(t) {
                e.platform = t;
              },
              setIsLandscape(t) {
                e.isLandscape = t;
              },
              setIsMobileLandscapeHeight(t) {
                e.isMobileLandscapeHeight = t;
              },
              setBrowserInfo(t) {
                let i = void 0 !== t.version ? String(t.version) : void 0;
                e.browserInfo = (0, u.pj)({ ...t, version: i });
              },
              initializeLiteVersionMode() {
                if (!(0, u.fh)(e)) return;
                let { experiments: i } = (0, u.yj)(e),
                  { containerStorage: a } = (0, u.dU)(e),
                  n = a.get(X.B.LiteVersionMode);
                if (n) {
                  if (
                    "2" !== n.version ||
                    !i.checkExperiment(Z.p.WebNextLiteVersion, "on")
                  ) {
                    a.remove(X.B.LiteVersionMode);
                    return;
                  }
                  t.setLiteVersionMode(n.mode, !1);
                }
              },
              setLiteVersionMode(t, i) {
                let { containerStorage: a } = (0, u.dU)(e);
                (e.liteVersionMode = t),
                  i && a.set(X.B.LiteVersionMode, { version: "2", mode: t });
              },
            };
            return t;
          }),
        $ = u.V5.model("TrackIdModel", {
          id: u.V5.union(u.V5.string, u.V5.number),
          albumId: u.V5.maybe(u.V5.number),
          timestamp: u.V5.maybe(u.V5.string),
        });
    },
    54439: function (e, t, i) {
      "use strict";
      i.d(t, {
        Y: function () {
          return f;
        },
        R: function () {
          return r;
        },
      });
      var a = i(22874),
        n = i(13534),
        l = i(40892);
      let r = a.V5.model({ modal: l.KL })
        .views((e) => ({
          shouldShow() {
            var t;
            let { user: i, settings: l } = (0, a.yj)(e),
              { sessionStorage: r } = (0, a.dU)(e);
            if (
              !i.hasPlus ||
              !(null === (t = l.browserInfo) || void 0 === t
                ? void 0
                : t.isMobile)
            )
              return !1;
            let o = r.get(n.BUb.DownloadMobileApp);
            return null == o || !o.shown;
          },
        }))
        .actions((e) => ({
          openModal() {
            var t;
            let { localStorage: i, sessionStorage: l } = (0, a.dU)(e);
            if (
              !(null === (t = i.get(n.BUb.DownloadMobileApp)) || void 0 === t
                ? void 0
                : t.shown)
            ) {
              e.modal.open(),
                i.set(n.BUb.DownloadMobileApp, { shown: !0 }),
                l.set(n.BUb.DownloadMobileApp, { shown: !0 });
              return;
            }
            setTimeout(() => {
              e.modal.open();
            }, 5e3),
              l.set(n.BUb.DownloadMobileApp, { shown: !0 });
          },
        }));
      var o = i(75441),
        s = i(62569),
        d = i(59506),
        c = i(32358),
        u = i(9317),
        m = i(15937),
        _ = i(68208),
        p = i(69756),
        v = i(18489),
        h = i(17392),
        y = i(10077),
        x = i.n(y);
      let g = (0, s.Pi)(() => {
        let { downloadMobileApp: e, user: t, settings: i } = (0, n.oR4)(),
          { formatMessage: a } = (0, u.Z)(),
          l = (0, n.GiY)({
            browserInfo: i.browserInfo,
            login: t.account.data.login,
          });
        return (0, o.jsxs)("div", {
          className: (0, c.W)(x().root, (0, n.eSQ)(n.Q2A.Dark)),
          children: [
            (0, o.jsx)(_.Button, {
              className: x().closeButton,
              radius: "round",
              size: "xxs",
              icon: (0, o.jsx)(p.Icon, { variant: "close", size: "xxs" }),
              "aria-label": a({ id: "interface-actions.close" }),
              onClick: e.modal.close,
            }),
            (0, o.jsxs)("div", {
              className: x().text,
              children: [
                (0, o.jsx)(h.Heading, {
                  variant: "h1",
                  size: "xl",
                  weight: "bold",
                  children: (0, o.jsx)(m.Z, {
                    id: "download-mobile-app.title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, o.jsx)(h.Caption, {
                  className: x().subtitle,
                  variant: "p",
                  size: "l",
                  weight: "bold",
                  children: (0, o.jsx)(m.Z, {
                    id: "download-mobile-app.subtitle",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: x().buttons,
              children: [
                (0, o.jsx)(v.r, {
                  className: x().listenInAppLink,
                  href: l(),
                  children: (0, o.jsx)(_.Button, {
                    className: x().button,
                    color: "primary",
                    size: "m",
                    radius: "xxxl",
                    children: (0, o.jsx)(h.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: (0, o.jsx)(m.Z, {
                        id: "download-mobile-app.listen-in-app",
                      }),
                    }),
                  }),
                }),
                (0, o.jsx)(_.Button, {
                  className: (0, c.W)(x().button, x().stayButton),
                  variant: "text",
                  size: "m",
                  color: "secondary",
                  radius: "xxxl",
                  onClick: e.modal.close,
                  children: (0, o.jsx)(h.Caption, {
                    variant: "span",
                    size: "m",
                    weight: "medium",
                    children: (0, o.jsx)(m.Z, {
                      id: "download-mobile-app.stay",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      });
      var b = i(62484),
        C = i.n(b);
      let f = (0, s.Pi)(() => {
        let { downloadMobileApp: e } = (0, n.oR4)();
        return (0, o.jsx)(d.u, {
          className: C().root,
          contentClassName: C().content,
          open: e.modal.isOpened,
          size: "fullscreen",
          placement: "center",
          showHeader: !1,
          closeOnOutsidePress: !1,
          overlayColor: "full",
          onOpenChange: e.modal.onOpenChange,
          onClose: e.modal.close,
          children: (0, o.jsx)(g, {}),
        });
      });
    },
    89150: function (e, t, i) {
      "use strict";
      i.d(t, {
        bL: function () {
          return q;
        },
        Z6: function () {
          return h;
        },
        Le: function () {
          return l;
        },
        v0: function () {
          return c;
        },
      }),
        ((n = l || (l = {})).INFO = "INFO"),
        (n.SUCCESS = "SUCCESS");
      var a,
        n,
        l,
        r,
        o = i(65067),
        s = i(13534);
      let d = { INVITE_ID: "invite_id", UTM_MEDIUM: "utm_medium" },
        c = () => {
          let { user: e, experiments: t } = (0, s.oR4)(),
            i = (0, s.m5R)(),
            { inviteIdSearchParam: a, hasNecessarySearchParams: n } = (0,
            o.useMemo)(() => {
              let e = (0, s.Phe)(d.INVITE_ID),
                t = !!(e && "copy_link" === (0, s.Phe)(d.UTM_MEDIUM));
              return { inviteIdSearchParam: e, hasNecessarySearchParams: t };
            }, []),
            l = (0, o.useCallback)(() => {
              let e = (0, s.QwX)();
              if (null === e) return;
              e.delete(d.INVITE_ID), e.delete(d.UTM_MEDIUM);
              let t = new URL(window.location.href);
              (t.search = e.toString()), i(t.toString());
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
      var u = i(22874),
        m = i(62726),
        _ = i(40892);
      let p = (e) => {
        let { name: t, avatarUrl: i } = e;
        return (0, u.pj)({ name: t, avatarUrl: i });
      };
      ((a = r || (r = {})).SUBSCRIPTION_IS_NOT_AVAILABLE =
        "SUBSCRIPTION_IS_NOT_AVAILABLE"),
        (a.INVITATION_IS_INVALID = "INVITATION_IS_INVALID"),
        (a.UNKNOWN = "UNKNOWN");
      let v = u.V5.model("FamilyInviteInfoModel", {
          name: u.V5.string,
          avatarUrl: u.V5.string,
        }),
        h = u.V5.model("FamilyInviteModel", {
          info: u.V5.model({
            loadingState: u.V5.enumeration(Object.values(s.Gui)),
            data: u.V5.maybeNull(v),
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
                    (e.info.data = p(n)), (e.info.loadingState = s.Gui.RESOLVE);
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
      var y = i(75441),
        x = i(62569),
        g = i(35846),
        b = i(97141);
      let C = () => {
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
      var f = i(32358),
        I = i(39054),
        A = i(51872),
        N = i.n(A),
        k = i(9317),
        S = i(15937),
        P = i(17392);
      let E = (0, x.Pi)(() => {
          let { formatMessage: e } = (0, k.Z)(),
            {
              settings: { isMobile: t },
            } = (0, s.oR4)(),
            i = C();
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                className: b.GR.text,
                children: [
                  (0, y.jsx)(P.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, g.BA)(
                      g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.invitation-error-title",
                    }),
                  }),
                  (0, y.jsx)(P.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, g.BA)(
                      g.QM.familyInvite
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
                  ...(0, g.BA)(
                    g.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM,
                  ),
                }),
              }),
            ],
          });
        }),
        T = (0, x.Pi)(() => {
          let { formatMessage: e } = (0, k.Z)(),
            {
              settings: { isMobile: t },
              paywall: { modal: i },
            } = (0, s.oR4)(),
            a = C(),
            n = (0, o.useCallback)(() => {
              a(), i.open();
            }, [a, i]);
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                className: b.GR.text,
                children: [
                  (0, y.jsx)(P.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, g.BA)(
                      g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.subscription-error-title",
                    }),
                  }),
                  (0, y.jsx)(P.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, g.BA)(
                      g.QM.familyInvite
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
                    ...(0, g.BA)(
                      g.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT,
                    ),
                  }),
                  (0, y.jsx)(b.I7, {
                    color: "secondary",
                    isMobile: t,
                    text: (0, y.jsx)(S.Z, { id: "family.later" }),
                    onClick: a,
                    ...(0, g.BA)(
                      g.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER,
                    ),
                  }),
                ],
              }),
            ],
          });
        }),
        j = (0, x.Pi)(() => {
          let { formatMessage: e } = (0, k.Z)(),
            {
              familyInvite: { retry: t },
            } = (0, s.oR4)();
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                className: b.GR.text,
                children: [
                  (0, y.jsx)(P.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, g.BA)(
                      g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, {
                      id: "family.unknown-error-title",
                    }),
                  }),
                  (0, y.jsx)(P.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, g.BA)(
                      g.QM.familyInvite
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
                  ...(0, g.BA)(
                    g.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY,
                  ),
                }),
              }),
            ],
          });
        }),
        L = {
          [r.INVITATION_IS_INVALID]: (0, y.jsx)(E, {}),
          [r.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, y.jsx)(T, {}),
          [r.UNKNOWN]: (0, y.jsx)(j, {}),
        },
        w = (0, x.Pi)(() => {
          let {
              familyInvite: { error: e },
              settings: { isMobile: t },
            } = (0, s.oR4)(),
            i = t || e === r.SUBSCRIPTION_IS_NOT_AVAILABLE;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: (0, f.W)(
                  b.GR.growContainer,
                  b.GR.growContainer_withoutPaddings,
                ),
                children: (0, y.jsx)(I.Image, {
                  className: (0, f.W)(N().image, { [N().image_small]: i }),
                  src: "https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig",
                  srcSet:
                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x",
                  fit: "contain",
                  "aria-hidden": !0,
                }),
              }),
              L[null != e ? e : r.UNKNOWN],
            ],
          });
        });
      var M = i(98730),
        B = i(69756),
        R = i(78129),
        V = i(65910),
        O = i.n(V);
      let D = (e) => {
        let { avatarSrc: t, name: i, isMobile: a } = e;
        return (0, y.jsxs)("div", {
          className: (0, f.W)(O().root, { [O().root_mobile]: a }),
          children: [
            (0, y.jsx)(R.tB, {
              className: (0, f.W)(O().icon, O().important),
              avatarSrc: t,
              hasPlus: !0,
              ...(0, g.BA)(
                g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR,
              ),
            }),
            (0, y.jsx)(P.Caption, {
              className: O().name,
              variant: "div",
              size: "m",
              ...(0, g.BA)(
                g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME,
              ),
              children: i,
            }),
          ],
        });
      };
      var W = i(28676);
      let F = (e) => {
        let { isActive: t, isMobile: i } = e;
        return (0, y.jsxs)("div", {
          className: (0, f.W)(O().root, { [O().root_mobile]: i }),
          children: [
            (0, y.jsx)(W.Shimmer, {
              className: O().iconShimmer,
              isActive: t,
              radius: "round",
            }),
            (0, y.jsx)(W.Shimmer, {
              className: O().nameShimmer,
              isActive: t,
              radius: "xs",
            }),
          ],
        });
      };
      var U = i(81664),
        z = i.n(U);
      let G = (0, x.Pi)(() => {
        let {
            user: e,
            location: t,
            settings: { isMobile: i },
            familyInvite: {
              isInfoShimmerVisible: a,
              isInfoShimmerActive: n,
              isAcceptanceActive: l,
              info: { data: r },
              acceptInvite: d,
            },
          } = (0, s.oR4)(),
          { name: c = "", avatarUrl: u = "" } = r || {},
          m = (0, s.uK4)(),
          _ = (0, M.useRouter)(),
          p = m.get(s.xit),
          v = C(),
          h = (0, o.useCallback)(() => {
            if (!e.isAuthorized) {
              p.authorizationUrl && _.push(p.authorizationUrl);
              return;
            }
            d();
          }, [p.authorizationUrl, _, e.isAuthorized, d]),
          x = (0, o.useMemo)(
            () =>
              a
                ? (0, y.jsx)(F, { isActive: n, isMobile: i })
                : (0, y.jsx)(D, { avatarSrc: u, name: c, isMobile: i }),
            [a, n, i, u, c],
          ),
          I = (0, o.useMemo)(
            () =>
              a
                ? (0, y.jsx)(b.ZD, { isActive: n, isMobile: i })
                : (0, y.jsx)(b.I7, {
                    color: "plus",
                    isMobile: i,
                    text: (0, y.jsx)(S.Z, { id: "family.accept" }),
                    onClick: h,
                    showSpinner: l,
                    ...(0, g.BA)(
                      g.QM.familyInvite
                        .FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT,
                    ),
                  }),
            [a, n, l, i, h],
          );
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)("div", {
              className: (0, f.W)(
                b.GR.growContainer,
                z().growContainer,
                z().important,
              ),
              children: x,
            }),
            (0, y.jsxs)("div", {
              className: b.GR.text,
              children: [
                (0, y.jsx)(P.Heading, {
                  variant: "h1",
                  size: "xl",
                  className: b.GR.title,
                  ...(0, g.BA)(
                    g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE,
                  ),
                  children: (0, y.jsx)(S.Z, {
                    id: "family.info-title",
                    values: { br: "\n" },
                  }),
                }),
                (0, y.jsx)(P.Caption, {
                  variant: "span",
                  size: "m",
                  className: b.GR.description,
                  ...(0, g.BA)(
                    g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION,
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
                  icon: (0, y.jsx)(B.Icon, {
                    variant: "arrowRight",
                    size: "xxxs",
                    className: b.GR.linkArrow,
                  }),
                  iconPosition: "right",
                  className: b.GR.link,
                  containerClassName: b.GR.linkContainer,
                  ...(0, g.BA)(
                    g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS,
                  ),
                  children: (0, y.jsx)(P.Caption, {
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
                I,
                (0, y.jsx)(b.I7, {
                  color: "secondary",
                  isMobile: i,
                  text: (0, y.jsx)(S.Z, { id: "family.reject" }),
                  onClick: v,
                  ...(0, g.BA)(
                    g.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT,
                  ),
                }),
              ],
            }),
          ],
        });
      });
      var Q = i(86670),
        Y = i.n(Q);
      let K = (0, x.Pi)(() => {
          let {
              location: e,
              settings: { isMobile: t },
            } = (0, s.oR4)(),
            i = C();
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: b.GR.growContainer,
                children: (0, y.jsx)(I.Image, {
                  className: (0, f.W)(Y().image, { [Y().image_mobile]: t }),
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
                  (0, y.jsx)(P.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: b.GR.title,
                    ...(0, g.BA)(
                      g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE,
                    ),
                    children: (0, y.jsx)(S.Z, { id: "family.success-title" }),
                  }),
                  (0, y.jsx)(P.Caption, {
                    variant: "span",
                    size: "m",
                    className: b.GR.description,
                    ...(0, g.BA)(
                      g.QM.familyInvite
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
                    icon: (0, y.jsx)(B.Icon, {
                      variant: "arrowRight",
                      size: "xxxs",
                      className: b.GR.linkArrow,
                    }),
                    iconPosition: "right",
                    className: b.GR.link,
                    containerClassName: b.GR.linkContainer,
                    ...(0, g.BA)(
                      g.QM.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT,
                    ),
                    children: (0, y.jsx)(P.Caption, {
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
                  ...(0, g.BA)(
                    g.QM.familyInvite
                      .FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH,
                  ),
                }),
              }),
            ],
          });
        }),
        Z = { [l.INFO]: (0, y.jsx)(G, {}), [l.SUCCESS]: (0, y.jsx)(K, {}) },
        q = (0, x.Pi)(() => {
          let {
              familyInvite: { modal: e, step: t, hasError: i },
            } = (0, s.oR4)(),
            a = C(),
            n = (0, o.useCallback)(
              (t) => {
                t || a(), e.onOpenChange(t);
              },
              [a, e],
            ),
            l = (0, o.useMemo)(() => (i ? (0, y.jsx)(w, {}) : Z[t]), [i, t]);
          return (0, y.jsx)(b.bf, {
            open: e.isOpened,
            hasError: i,
            onOpenChange: n,
            onClose: a,
            ...(0, g.BA)(g.QM.familyInvite.FAMILY_INVITE_MODAL),
            children: l,
          });
        });
    },
    68877: function (e, t, i) {
      "use strict";
      i.d(t, {
        wp: function () {
          return tC;
        },
        Lc: function () {
          return M;
        },
      });
      var a,
        n,
        l,
        r,
        o,
        s,
        d,
        c,
        u,
        m,
        _,
        p,
        v,
        h,
        y,
        x = i(22874),
        g = i(14222),
        b = i(73447),
        C = i(64353),
        f = i(10979),
        I = i(9152);
      let A = x.V5.model("PinAlbumItemModel", {
          type: x.V5.literal(g.Q.ALBUM_ITEM),
          data: b.KX,
        }),
        N = x.V5.model("PinArtistItemModel", {
          type: x.V5.literal(g.Q.ARTIST_ITEM),
          data: C.Go,
        }),
        k = x.V5.model("PinPlaylistItemModel", {
          type: x.V5.literal(g.Q.PLAYLIST_ITEM),
          data: f.Cd,
        }),
        S = x.V5.model("PinVibeItemModel", {
          type: x.V5.literal(g.Q.WAVE_ITEM),
          data: I.KW,
        }),
        P = x.V5.union(A, N, k, S);
      var E = i(13534);
      let T = (e) => "object" == typeof e && e && "type" in e;
      var j = i(72783),
        L = i(7797);
      let w = (e) => {
          switch (e.type) {
            case g.Q.WAVE_ITEM:
              return (0, x.pj)({
                type: g.Q.WAVE_ITEM,
                data: (0, I.FF)(e.data),
              });
            case g.Q.PLAYLIST_ITEM:
              return (0, x.pj)({
                type: g.Q.PLAYLIST_ITEM,
                data: (0, L.RE)({ playlist: e.data }),
              });
            case g.Q.ARTIST_ITEM:
              return (0, x.pj)({
                type: g.Q.ARTIST_ITEM,
                data: (0, C.tR)({ artist: e.data }),
              });
            case g.Q.ALBUM_ITEM:
              return (0, x.pj)({
                type: g.Q.ALBUM_ITEM,
                data: (0, j.cO)({ album: e.data }),
              });
          }
        },
        M = x.V5.model("Pins", {
          loadingState: x.V5.enumeration(Object.values(E.Gui)),
          items: x.V5.maybeNull(x.V5.array(P)),
          index: x.V5.map(x.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var i;
                (e.items = (0, x.pj)(
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
                null === (a = e.items) || void 0 === a || a.unshift(w(t));
                let r =
                  null === (n = e.items) || void 0 === n ? void 0 : n.at(0);
                r && e.index.set(r.data.pinId, !0);
              },
              getData: (0, x.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: i } = (0, x.dU)(e);
                if (e.loadingState !== E.Gui.PENDING)
                  try {
                    var a;
                    e.loadingState = E.Gui.PENDING;
                    let i = yield t.getPins();
                    (e.items = (0, x.pj)(i.pins.map(w))),
                      null === (a = e.items) ||
                        void 0 === a ||
                        a.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = E.Gui.REJECT), i.error(t);
                  }
              }),
              toggleAlbumPin: (0, x.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, x.dU)(e);
                if (e.loadingState !== E.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinAlbum(i)), t.deletePin(a), l;
                    return (l = yield n.pinAlbum(i)), T(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, x.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, x.dU)(e);
                if (e.loadingState !== E.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinArtist(i)), t.deletePin(a), l;
                    return (l = yield n.pinArtist(i)), T(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, x.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, x.dU)(e);
                if (e.loadingState !== E.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinPlaylist(i)), t.deletePin(a), l;
                    return (l = yield n.pinPlaylist(i)), T(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, x.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: l } = (0, x.dU)(e);
                if (e.loadingState !== E.Gui.PENDING)
                  try {
                    let l;
                    if (e.isPinned(a))
                      return (l = yield n.unpinWave(i)), t.deletePin(a), l;
                    return (l = yield n.pinWave(i)), T(l) && t.addPin(l), l;
                  } catch (e) {
                    l.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
      var B = i(75441),
        R = i(32358),
        V = i(62569),
        O = i(65067),
        D = i.t(O, 2),
        W = i(35846),
        F = i(4875);
      let U = () => {
        let e = (0, E.z$f)(),
          { hash: t } = (0, E.RQn)(),
          i = (0, E.wLl)(),
          {
            settings: { isMobile: a },
          } = (0, E.oR4)();
        return (0, O.useCallback)(
          (n) => {
            if (!e) return;
            let l = (0, E.KOr)({
              params: {
                hash: t,
                pageId: F.qU.Sidebar,
                sidebarSize: n || a ? F.YR.Small : F.YR.Medium,
                sidebarPosition: a ? F.QP.Bottom : F.QP.Left,
              },
              logger: i,
              context: U.name,
            });
            l && (0, F.a1)(e.evgenInstance, l);
          },
          [e, t, a, i],
        );
      };
      var z = i(71361);
      let G = (e) => {
          {
            let t = (null == e ? void 0 : e.clientWidth) ? 1920 : 1024;
            return window.innerWidth < t;
          }
        },
        Q = () => {
          let { sideBannerRef: e } = (0, E.$Y6)(),
            [t, i] = (0, O.useState)(() => G(e)),
            a = (0, O.useMemo)(
              () =>
                (0, z.Z)(
                  () => {
                    i(G(e));
                  },
                  100,
                  { trailing: !1 },
                ),
              [i, e],
            );
          return (
            (0, O.useEffect)(
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
      var Y = i(99907),
        K = i.n(Y),
        Z = i(9317),
        q = i(15937),
        H = i(68208),
        X = i(69756),
        J = i(37667),
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
          2408: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          1308: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          2056: (e, t, i) => {
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
            function d(e, t, i) {
              var a,
                l = {},
                d = null,
                c = null;
              for (a in (void 0 !== i && (d = "" + i),
              void 0 !== t.key && (d = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                r.call(t, a) && !s.hasOwnProperty(a) && (l[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === l[a] && (l[a] = t[a]);
              return {
                $$typeof: n,
                type: e,
                key: d,
                ref: c,
                props: l,
                _owner: o.current,
              };
            }
            (t.Fragment = l), (t.jsx = d), (t.jsxs = d);
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
                  d =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (n.style.width = "".concat(l, "px")),
                  (n.style.height = "".concat(l, "px")),
                  (n.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - r, "px")),
                  (n.style.top = "".concat(d - r, "px")),
                  n.classList.add(t);
                let c = a.getElementsByClassName(t)[0];
                c && c.remove(), a.insertBefore(n, a.firstChild);
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
              o = a(i(2408));
            t.Navigation = function (e) {
              let {
                className: t,
                children: i,
                collapsed: a = !1,
                direction: s = "vertical",
                ...d
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
                  "aria-label": d["aria-label"],
                  ...d,
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
              s = a(i(1308));
            t.NavigationGroup = function (e) {
              let { className: t, children: i, ...a } = e,
                d = (0, l.createRef)(),
                { direction: c } = (0, l.useContext)(o.NavigationContext);
              return (0, n.jsx)("ol", {
                ref: d,
                className: (0, r.clsx)(
                  s.default.root,
                  s.default["root_direction_".concat(c)],
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
              d = a(i(2056));
            function c(e) {
              let {
                  className: t = "",
                  forwardRef: i,
                  children: a,
                  selected: c = !1,
                  shownAnimation: u,
                  withRipple: m = !1,
                  variant: _ = "default",
                  ...p
                } = e,
                { collapsed: v, direction: h } = (0, l.useContext)(
                  o.NavigationContext,
                ),
                y = (0, l.useCallback)(
                  (e) => {
                    m && (0, s.createRipple)(e, d.default.ripple);
                  },
                  [m],
                ),
                [x, g] = l.Children.toArray(a.props.children),
                b = (0, l.useMemo)(
                  () =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: d.default.iconContainer,
                          children: x,
                        }),
                        (0, n.jsx)("div", {
                          className: (0, r.clsx)(
                            d.default.textContainer,
                            d.default["textContainer_direction_".concat(h)],
                            {
                              [d.default.textContainer_selected]: c,
                            },
                          ),
                          children: g,
                        }),
                      ],
                    }),
                  [x, h, c, g],
                ),
                C = (0, l.cloneElement)(a, {
                  className: (0, r.clsx)(
                    d.default.item,
                    d.default["item_direction_".concat(h)],
                    {
                      [d.default.item_selected]: c,
                      [d.default["item_collapsed_".concat(h)]]: v,
                    },
                    a.props.className,
                  ),
                  children: b,
                });
              return (0, n.jsx)("li", {
                ref: i,
                className: (0, r.clsx)(
                  d.default.root,
                  d.default["root_direction_".concat(h)],
                  d.default["root_variant_".concat(_)],
                  {
                    [d.default.root_animate]: u,
                    [d.default.root_collapsed]: v,
                  },
                  t,
                ),
                "aria-current": !!c && "page",
                onClick: y,
                ...p,
                children: C,
              });
            }
            (t.NavigationItemComponent = c),
              (t.NavigationItem = (0, l.forwardRef)((e, t) =>
                (0, n.jsx)(c, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = D;
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
      var er = i(92853),
        eo = i(17392),
        es = i(97141);
      let ed = () => {
          let e = (0, E.z$f)(),
            { hash: t } = (0, E.RQn)(),
            i = (0, E.wLl)(),
            {
              settings: { isMobile: a },
            } = (0, E.oR4)();
          return (0, O.useCallback)(
            (n, l) => {
              if (!e) return;
              let r = (0, E.KOr)({
                params: {
                  hash: t,
                  pageId: F.qU.Sidebar,
                  sidebarSize: n || a ? F.YR.Small : F.YR.Medium,
                  from: F.qU.Sidebar,
                  to: l,
                },
                logger: i,
                context: ed.name,
              });
              r && (0, F.zx)(e.evgenInstance, r);
            },
            [e, t, a, i],
          );
        },
        ec = (e) => {
          let { padding: t, placement: i } = e;
          return {
            shiftOptions: { padding: t },
            offsetOptions: t,
            flipOptions: { fallbackAxisSideDirection: "start", padding: t },
            placement: i,
          };
        },
        eu = ec({ placement: "right", padding: 8 });
      var em = i(64451),
        e_ = i(1194),
        ep = i(93093),
        ev = i(39054),
        eh = i(59091),
        ey = i(91307),
        ex = i(55846),
        eg = i.n(ex);
      let eb = (e) => {
          let { children: t, entityUrl: i, ariaLabel: a, ...n } = e;
          return i
            ? (0, B.jsx)(es.rU, {
                href: i,
                "aria-label": a,
                className: eg().link,
                ...n,
                children: t,
              })
            : t;
        },
        eC = (e) => {
          let {
              className: t,
              cover: i,
              title: a,
              subtitle: n,
              contextMenu: l,
              isCollapsed: r,
              withCollapseAnimation: o,
              entityUrl: s,
              onDoubleClick: d,
              onClick: c,
              forwardRef: u,
              ariaLabel: m,
            } = e,
            _ = (0, O.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == d || d()
                  : (e.target instanceof HTMLElement &&
                      "IMG" !== e.target.tagName &&
                      (0, ey.m)(e, eg().ripple),
                    null == c || c(e));
              },
              [c, d],
            );
          return (0, B.jsxs)(es.Md, {
            ref: u,
            className: (0, R.W)(eg().root, { [eg().root_withoutLink]: !s }, t),
            role: "listitem",
            ...(0, W.BA)(W.QM.navbar.PIN_ITEM),
            children: [
              (0, B.jsxs)(eb, {
                entityUrl: s,
                ariaLabel: m,
                onClick: _,
                children: [
                  (0, B.jsx)("div", {
                    className: eg().cover,
                    ...(0, W.BA)(W.QM.navbar.PIN_COVER),
                    children: i,
                  }),
                  (0, B.jsx)("div", {
                    className: eg().meta,
                    children: (0, B.jsxs)("div", {
                      className: (0, R.W)(eg().info, {
                        [eg().info_collapsed]: r,
                        [eg().info_animated]: o,
                        [eg().info_withContextMenu]: (0, O.isValidElement)(l),
                      }),
                      children: [
                        (0, B.jsx)(eo.Caption, {
                          "aria-hidden": !0,
                          className: eg().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          ...(0, W.BA)(W.QM.navbar.PIN_TITLE),
                          children: a,
                        }),
                        (0, B.jsx)(eo.Caption, {
                          "aria-hidden": !0,
                          className: eg().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          ...(0, W.BA)(W.QM.navbar.PIN_SUBTITLE),
                          children: n,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, O.isValidElement)(l) &&
                (0, B.jsx)("div", {
                  className: (0, R.W)(eg().contextMenu, {
                    [eg().contextMenu_hidden]: r,
                  }),
                  ...(0, W.BA)(W.QM.navbar.PIN_CONTEXT_MENU_BUTTON),
                  children: l,
                }),
            ],
          });
        },
        ef = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(eC, { forwardRef: t, ...e }),
        ),
        eI = (0, O.createContext)(null);
      var eA = i(12092),
        eN = i.n(eA),
        ek = i(27376);
      let eS = () => {
          let e = (0, E.z$f)(),
            { hash: t } = (0, E.RQn)(),
            i = (0, E.wLl)(),
            {
              settings: { isMobile: a },
            } = (0, E.oR4)();
          return (0, O.useCallback)(
            (n) => {
              let {
                actionType: l,
                isCollapsed: r,
                mainObjectType: o,
                mainObjectId: s,
              } = n;
              if (!e) return;
              let d = {
                hash: t,
                actionType: l,
                user_interaction_type: F.wt.Tap,
                pageId: F.qU.Sidebar,
                sidebarSize: r || a ? F.YR.Small : F.YR.Medium,
              };
              o && (d.mainObjectType = o), s && (d.mainObjectId = s);
              let c = (0, E.KOr)({ params: d, logger: i, context: eS.name });
              c && (0, F.ro)(e.evgenInstance, c);
            },
            [e, t, a, i],
          );
        },
        eP = (e) => {
          let { onPinClick: t, isPinned: i } = e,
            { isCollapsed: a } = (0, O.useContext)(eI) || {},
            [n, l] = (0, O.useState)(!1),
            r = eS(),
            o = (0, O.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []),
            s = (0, O.useCallback)(() => {
              t(), r({ actionType: F.Us.Unpin, isCollapsed: null != a && a });
            }, [a, t, r]);
          return (
            (0, E.ZP4)(n),
            (0, B.jsx)(ek.v2, {
              className: (0, R.W)(eN().contextMenu, {
                [eN().contextMenu_visible]: n,
              }),
              onClick: o,
              icon: (0, B.jsx)(X.Icon, { size: "xxs", variant: "more" }),
              tabIndex: a ? -1 : 0,
              "aria-hidden": a,
              variant: "text",
              offsetOptions: 3,
              open: n,
              onOpenChange: l,
              containerProps: (0, W.BA)(W.QM.navbar.PIN_CONTEXT_MENU),
              children: (0, B.jsx)(es.Zd, { onClick: s, isPinned: i }),
            })
          );
        },
        eE = (0, V.Pi)((e) => {
          var t;
          let { className: i, album: a, forwardRef: n, tooltipOptions: l } = e,
            { formatMessage: r } = (0, Z.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, O.useContext)(eI)) && void 0 !== t ? t : {},
            d = (0, b.BV)(a),
            c = (0, b.H0)(a.type, b.wV.PIN),
            u = ed(),
            m = (0, b.Vt)(a.type),
            _ = (0, E.s0h)(a.url),
            p = (0, b.jV)({ album: a, callback: _ }),
            v = (0, ep.W)((e) => {
              u(null != o && o, m), p(e);
            }),
            h = (0, O.useMemo)(
              () =>
                (0, B.jsx)(eh.Paper, {
                  className: eN().cover,
                  radius: "xs",
                  children: (0, B.jsxs)(er.u, {
                    ...l,
                    enabled: o,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        className: eN().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: eN().tooltip,
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
          return (0, B.jsx)(ef, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.album-name" },
              { albumName: a.title },
            ),
            className: (0, R.W)(eN().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: c,
            cover: h,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, B.jsx)(eP, {
              onPinClick: d,
              isPinned: a.isPinned,
            }),
            onClick: v,
          });
        }),
        eT = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(eE, { forwardRef: t, ...e }),
        ),
        ej = (0, V.Pi)((e) => {
          var t;
          let { className: i, artist: a, forwardRef: n, tooltipOptions: l } = e,
            { formatMessage: r } = (0, Z.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, O.useContext)(eI)) && void 0 !== t ? t : {},
            d = (0, C.BV)(a),
            c = ed(),
            u = (0, E.s0h)(a.url),
            m = (0, C.v2)({ artist: a, callback: u }),
            _ = (0, ep.W)((e) => {
              c(null != o && o, F.qU.ArtistScreen), m(e);
            }),
            p = (0, O.useMemo)(
              () =>
                (0, B.jsx)(eh.Paper, {
                  className: eN().cover,
                  radius: "round",
                  children: (0, B.jsxs)(er.u, {
                    ...l,
                    enabled: o,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        className: eN().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: eN().tooltip,
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
          return (0, B.jsx)(ef, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.artist-name" },
              { artistName: a.name },
            ),
            className: (0, R.W)(eN().root, i),
            title: a.name,
            entityUrl: a.url,
            subtitle: (0, B.jsx)(q.Z, { id: "entity-names.artist" }),
            cover: p,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, B.jsx)(eP, {
              onPinClick: d,
              isPinned: a.isPinned,
            }),
            onClick: _,
          });
        }),
        eL = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(ej, { forwardRef: t, ...e }),
        ),
        ew = (e) => {
          var t;
          let {
              className: i,
              playlist: a,
              forwardRef: n,
              tooltipOptions: l,
            } = e,
            { formatMessage: r } = (0, Z.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, O.useContext)(eI)) && void 0 !== t ? t : {},
            d = (0, f.BV)(a),
            c = ed(),
            u = (0, ep.W)(() => {
              c(null != o && o, F.qU.PlaylistScreen);
            }),
            m = (0, O.useMemo)(
              () =>
                (0, B.jsx)(eh.Paper, {
                  className: eN().cover,
                  radius: "xs",
                  children: (0, B.jsxs)(er.u, {
                    ...l,
                    enabled: o,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        "aria-hidden": !0,
                        className: eN().image,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: eN().tooltip,
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
          return (0, B.jsx)(ef, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.playlist-name" },
              { playlistName: a.title },
            ),
            className: (0, R.W)(eN().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: (0, B.jsx)(q.Z, { id: "entity-names.playlist" }),
            cover: m,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, B.jsx)(eP, {
              onPinClick: d,
              isPinned: a.isPinned,
            }),
            onClick: u,
          });
        },
        eM = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(ew, { forwardRef: t, ...e }),
        ),
        eB = (e) => {
          var t;
          let { className: i, forwardRef: a, tooltipOptions: n } = e,
            { formatMessage: l } = (0, Z.Z)(),
            { isCollapsed: r, withCollapseAnimation: o } =
              null !== (t = (0, O.useContext)(eI)) && void 0 !== t ? t : {},
            s = ed(),
            d = (0, ep.W)(() => {
              s(null != r && r, F.qU.YearResultsScreen);
            }),
            c = (0, O.useMemo)(
              () =>
                (0, B.jsx)(eh.Paper, {
                  className: eN().cover,
                  radius: "xs",
                  children: (0, B.jsxs)(er.u, {
                    ...n,
                    enabled: r,
                    children: [
                      (0, B.jsx)(ev.Image, {
                        className: eN().image,
                        "aria-hidden": !0,
                        src: "https://avatars.mds.yandex.net/get-music-misc/49997/img.673f3b0111f206691b02092d/%%",
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, B.jsx)(er._v, {
                        className: eN().tooltip,
                        children: (0, B.jsx)(eo.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: (0, B.jsx)(q.Z, {
                            id: "sidebar.rewind-title",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              [r, n],
            );
          return (0, B.jsx)(ef, {
            ref: a,
            ariaLabel: l({ id: "sidebar.rewind-title" }),
            className: (0, R.W)(eN().root, i),
            title: (0, B.jsx)(q.Z, { id: "sidebar.rewind-title" }),
            entityUrl: "/rewind2024",
            subtitle: (0, B.jsx)(q.Z, { id: "sidebar.rewind-description" }),
            cover: c,
            isCollapsed: !!r,
            withCollapseAnimation: !!o,
            onClick: d,
          });
        },
        eR = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(eB, { forwardRef: t, ...e }),
        );
      var eV = i(55188);
      let eO = () => {
          let e = (0, E.z$f)(),
            { hash: t } = (0, E.RQn)(),
            i = (0, E.wLl)(),
            {
              settings: { isMobile: a },
            } = (0, E.oR4)();
          return (0, O.useCallback)(
            (n) => {
              let { isCollapsed: l, mainObjectId: r } = n;
              if (!e) return;
              let o = (0, E.KOr)({
                params: {
                  hash: t,
                  pageId: F.qU.Sidebar,
                  sidebarSize: l || a ? F.YR.Small : F.YR.Medium,
                  mainObjectType: F.OB.Wave,
                  mainObjectId: r,
                },
                logger: i,
                context: eO.name,
              });
              o && (0, F.Cm)(e.evgenInstance, o);
            },
            [e, t, a, i],
          );
        },
        eD = (0, V.Pi)((e) => {
          var t, i;
          let { className: a, vibe: n, forwardRef: l, tooltipOptions: r } = e,
            o = (0, O.useId)(),
            { formatMessage: s } = (0, Z.Z)(),
            { isCollapsed: d, withCollapseAnimation: c } =
              null !== (i = (0, O.useContext)(eI)) && void 0 !== i ? i : {},
            [u, m] = (0, O.useState)(!1),
            _ = (0, I.BV)(n),
            { isFreemium: p } = (0, E.NMB)(),
            { state: v, setState: h } = (0, eV.O)(!1),
            y = eO(),
            x = eS(),
            g = (0, E.lAI)(),
            b = (0, E.qsr)(),
            {
              isPlaying: C,
              togglePlay: f,
              isCurrent: A,
            } = (0, E.QhE)({
              seeds: n.seeds,
              pageIdForFrom: E.Rhz.SIDEBAR,
              blockIdForFrom: E.aUg.RADIO,
            }),
            N = (0, ep.W)(async () => {
              var e, t;
              if (p) {
                h(!0);
                return;
              }
              return (
                C
                  ? x({
                      actionType: F.Us.Pause,
                      isCollapsed: null != d && d,
                      mainObjectType: F.OB.Wave,
                      mainObjectId:
                        null !== (e = n.seeds[0]) && void 0 !== e ? e : "",
                    })
                  : y({
                      isCollapsed: null != d && d,
                      mainObjectId:
                        null !== (t = n.seeds[0]) && void 0 !== t ? t : "",
                    }),
                f()
              );
            }),
            k = (0, ep.W)(() => {
              b() ||
                (m(!0),
                N().finally(() => {
                  m(!1);
                }),
                g(!C));
            }),
            S = (0, O.useMemo)(
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
            P = (0, O.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = n.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, B.jsxs)(er.u, {
                ...r,
                enabled: d,
                children: [
                  (0, B.jsx)("div", {
                    style: t,
                    className: eN().animation,
                    children: (0, B.jsx)(es.Df, {
                      isCurrent: A,
                      isPlaying: C,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: k,
                      title: n.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: o,
                    }),
                  }),
                  (0, B.jsx)(er._v, {
                    className: eN().tooltip,
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
              k,
              d,
              A,
              u,
              C,
              o,
              r,
              null === (t = n.colors) || void 0 === t ? void 0 : t.average,
              n.title,
            ]),
            T = (0, O.useCallback)(
              () =>
                (0, B.jsx)(ef, {
                  ref: l,
                  onDoubleClick: N,
                  className: (0, R.W)(eN().root, a),
                  isCollapsed: !!d,
                  contextMenu: (0, B.jsx)(eP, {
                    onPinClick: _,
                    isPinned: n.isPinned,
                  }),
                  withCollapseAnimation: !!c,
                  title: S,
                  subtitle: (0, B.jsx)(q.Z, { id: "entity-names.my-vibe" }),
                  cover: P,
                }),
              [a, P, _, d, N, l, S, n.isPinned, c],
            );
          return (0, B.jsx)(es.pl, {
            isEnabled: p,
            isOpened: v,
            onOpenChange: h,
            placement: "right",
            textVariant: "vibe",
            vibeTextVariant: n.type,
            renderChildren: T,
          });
        }),
        eW = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(eD, { forwardRef: t, ...e }),
        );
      var eF = i(64949),
        eU = i.n(eF);
      let ez = ec({ placement: "right", padding: 20 }),
        eG = {
          enter: eU().pin_enter,
          enterActive: eU().pin_enter_active,
          exit: eU().pin_exit,
          exitActive: eU().pin_exit_active,
        },
        eQ = (0, V.Pi)((e) => {
          var t;
          let { className: i, withCollapseAnimation: a, isCollapsed: n } = e,
            { formatMessage: l } = (0, Z.Z)(),
            { pinsCollection: r, slides: o } = (0, E.oR4)(),
            s = (0, O.createRef)(),
            d =
              null === (t = r.items) || void 0 === t
                ? void 0
                : t.map(() => (0, O.createRef)()),
            c = (0, O.useMemo)(
              () => ({ withCollapseAnimation: a, isCollapsed: n }),
              [n, a],
            ),
            u = (0, O.useMemo)(() => {
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
                        children: (0, B.jsx)(eR, {
                          className: eU().pin,
                          tooltipOptions: ez,
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
                      case g.Q.ALBUM_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == d ? void 0 : d[i],
                              timeout: 270,
                              children: (0, B.jsx)(eT, {
                                className: eU().pin,
                                tooltipOptions: ez,
                                ref: null == d ? void 0 : d[i],
                                album: e.data,
                              }),
                            },
                            e.data.pinId,
                          ),
                        );
                        return;
                      case g.Q.ARTIST_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == d ? void 0 : d[i],
                              timeout: 270,
                              children: (0, B.jsx)(eL, {
                                className: eU().pin,
                                tooltipOptions: ez,
                                ref: null == d ? void 0 : d[i],
                                artist: e.data,
                              }),
                            },
                            e.data.pinId,
                          ),
                        );
                        return;
                      case g.Q.PLAYLIST_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == d ? void 0 : d[i],
                              timeout: 270,
                              children: (0, B.jsx)(eM, {
                                className: eU().pin,
                                tooltipOptions: ez,
                                ref: null == d ? void 0 : d[i],
                                playlist: e.data,
                              }),
                            },
                            e.data.pinId,
                          ),
                        );
                        return;
                      case g.Q.WAVE_ITEM:
                        t.push(
                          (0, B.jsx)(
                            em.Z,
                            {
                              classNames: eG,
                              nodeRef: null == d ? void 0 : d[i],
                              timeout: 270,
                              children: (0, B.jsx)(eW, {
                                className: eU().pin,
                                tooltipOptions: ez,
                                ref: null == d ? void 0 : d[i],
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
            }, [o.shouldShowUserSlides, s, d, r.items]),
            m = u.length > 0,
            _ = u.length >= 3;
          return (0, B.jsx)(eI.Provider, {
            value: c,
            children: (0, B.jsx)("div", {
              className: (0, R.W)(
                eU().root,
                { [eU().root_withScroll]: _, [eU().root_hasPins]: m },
                i,
              ),
              ...(0, W.BA)(W.QM.navbar.PIN_LIST),
              children: (0, B.jsx)("div", {
                role: "list",
                "aria-label": l({ id: "navigation.pins-list" }),
                className: eU().content,
                children: (0, B.jsx)(e_.Z, { component: null, children: u }),
              }),
            }),
          });
        });
      var eY = i(77204),
        eK = i.n(eY);
      ((r = o || (o = {})).WINDOWS = "WINDOWS"),
        (r.MACOS = "MACOS"),
        (r.UNKNOWN = "UNKNOWN");
      var eZ = i(94905),
        eq = i.n(eZ);
      let eH = {
          exit: eq().bar_exit,
          exitActive: eq().bar_exit_active,
          enter: eq().bar_enter,
          enterActive: eq().bar_enter_active,
        },
        eX = {
          exit: eq().button_exit,
          exitActive: eq().button_exit_active,
          enter: eq().button_enter,
          enterActive: eq().button_enter_active,
        },
        eJ = (e) => {
          let {
              className: t,
              children: i,
              button: a,
              isCollapsed: n,
              barClassName: l,
            } = e,
            r = (0, O.useRef)(null),
            o = (0, O.useRef)(null);
          return (0, B.jsxs)("div", {
            className: (0, R.W)(eq().root, t),
            children: [
              (0, B.jsx)(em.Z, {
                nodeRef: o,
                in: n,
                timeout: 150,
                classNames: eX,
                unmountOnExit: !0,
                children: (0, B.jsx)("div", {
                  className: (0, R.W)(eq().button),
                  ref: o,
                  children: a,
                }),
              }),
              (0, B.jsx)(em.Z, {
                nodeRef: r,
                in: !n,
                timeout: 150,
                classNames: eH,
                unmountOnExit: !0,
                children: (0, B.jsx)("div", {
                  className: (0, R.W)(eq().bar, l),
                  ref: r,
                  children: i,
                }),
              }),
            ],
          });
        },
        e$ = (e) => {
          switch (e) {
            case o.MACOS:
              return "macos";
            case o.WINDOWS:
              return "windows";
            default:
              return "musicLogo";
          }
        },
        e0 = (e) => {
          let { formatMessage: t } = (0, Z.Z)();
          switch (e) {
            case o.MACOS:
              return t({ id: "sidebar.download-macos" });
            case o.WINDOWS:
              return t({ id: "sidebar.download-windows" });
            default:
              return t({ id: "sidebar.download-app" });
          }
        };
      var e5 = i(81991),
        e1 = i.n(e5);
      let e2 = (e) => {
          let {
              variant: t,
              forwardRef: i,
              onDownloadClick: a,
              onCloseClick: n,
            } = e,
            { formatMessage: l } = (0, Z.Z)(),
            r = e0(t),
            s = (0, O.useMemo)(() => {
              let e = {
                span: (e) =>
                  (0, B.jsx)("span", {
                    className: e1().textBright,
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
            children: (0, B.jsxs)(eh.Paper, {
              className: e1().root,
              children: [
                (0, B.jsx)(H.Button, {
                  color: "secondary",
                  radius: "round",
                  variant: "text",
                  size: "xxxs",
                  className: e1().closeButton,
                  icon: (0, B.jsx)(X.Icon, {
                    variant: "close",
                    size: "xxs",
                    className: e1().closeButtonIcon,
                  }),
                  withRipple: !1,
                  onClick: n,
                  "aria-label": l({ id: "interface-actions.close" }),
                }),
                (0, B.jsx)(eo.Caption, {
                  variant: "div",
                  className: e1().text,
                  size: "m",
                  children: s,
                }),
                (0, B.jsx)(H.Button, {
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
                    variant: e$(t),
                    size: "xxs",
                    className: e1().downloadButtonIcon,
                  }),
                  ...(0, W.BA)(W.QM.navbar.DOWNLOAD_APP_BUTTON_ENLARGED),
                  children: (0, B.jsx)(eo.Caption, {
                    variant: "span",
                    className: e1().downloadButtonText,
                    size: "m",
                    children: (0, B.jsx)(q.Z, { id: "offline.download" }),
                  }),
                }),
              ],
            }),
          });
        },
        e4 = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(e2, { forwardRef: t, ...e }),
        );
      var e3 = i(96420),
        e6 = i.n(e3);
      let e9 = (e) => {
          let { variant: t, onDownloadClick: i } = e,
            a = e0(t),
            n = (0, O.useMemo)(() => e$(t), [t]);
          return (0, B.jsxs)(eh.Paper, {
            className: e6().root,
            children: [
              (0, B.jsx)(X.Icon, { variant: n, className: e6().icon }),
              (0, B.jsxs)(er.u, {
                placement: "left",
                offsetOptions: 4,
                children: [
                  (0, B.jsx)(H.Button, {
                    className: e6().button,
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
                      className: e6().buttonIcon,
                    }),
                    "aria-label": a,
                    ...(0, W.BA)(W.QM.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED),
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
        e7 = (0, V.Pi)((e) => {
          var t;
          let { isCollapsed: i } = e,
            { settings: a } = (0, E.oR4)(),
            n = (0, E.uK4)(),
            l = n.get(E.V0J),
            r = n.get(E.U5t),
            [s, d] = (0, O.useState)(!1),
            c = (0, O.useMemo)(() => {
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
            u = (0, E.yyu)(r.downloadDesktop.url),
            m = (0, O.useCallback)(() => {
              window.open(u, "_blank", "noreferrer noopener");
            }, [u]),
            _ = (0, O.useCallback)(() => {
              l.set(E.BUb.NavbarDownloadBarIsHidden, !0, { expires: 30 }),
                d(!0);
            }, [l]);
          return s
            ? null
            : (0, B.jsx)(eJ, {
                isCollapsed: i,
                button: (0, B.jsx)(e9, { variant: c, onDownloadClick: m }),
                children: (0, B.jsx)(e4, {
                  variant: c,
                  onDownloadClick: m,
                  onCloseClick: _,
                }),
              });
        });
      var e8 = i(87660),
        te = i(88017);
      function tt() {
        return (tt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      var ti = function (e) {
          return te.createElement(
            "svg",
            tt(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            te.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              te.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                s ||
                  (s = te.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                d ||
                  (d = te.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                c ||
                  (c = te.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                te.createElement(
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
                    (u = te.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                m ||
                  (m = te.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                _ ||
                  (_ = te.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    te.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    te.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            p ||
              (p = te.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                te.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                te.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            v ||
              (v = te.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            h ||
              (h = te.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            y ||
              (y = te.createElement(
                "defs",
                null,
                te.createElement(
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
                  te.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  te.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                te.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  te.createElement("stop", { stopColor: "#FF5C4D" }),
                  te.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  te.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                te.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  te.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                te.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  te.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                te.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  te.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                te.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  te.createElement("rect", {
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
        ta = i(70699),
        tn = i.n(ta);
      let tl = (e) => {
          let { className: t, forwardRef: i } = e,
            {
              paywall: { modal: a },
            } = (0, E.oR4)(),
            { formatMessage: n } = (0, Z.Z)();
          return (0, B.jsxs)("section", {
            className: (0, R.W)(tn().root, t),
            ref: i,
            "aria-label": n({ id: "plusbar.subscription-activation" }),
            ...(0, W.BA)(W.QM.plusBar.PLUS_BAR),
            children: [
              (0, B.jsx)(ti, { className: tn().logos, "aria-hidden": "true" }),
              (0, B.jsx)(eo.Caption, {
                className: tn().title,
                variant: "div",
                size: "m",
                weight: "medium",
                ...(0, W.BA)(W.QM.plusBar.PLUS_BAR_TITLE),
                children: (0, B.jsx)(q.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, B.jsx)(eo.Caption, {
                className: tn().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                ...(0, W.BA)(W.QM.plusBar.PLUS_BAR_ADDITION),
                children: (0, B.jsx)(q.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, B.jsxs)("div", {
                className: tn().buttons,
                children: [
                  (0, B.jsx)(e8.Cv, {
                    ...(0, W.BA)(W.QM.plusBar.PLUS_BAR_OFFER_BUTTON),
                  }),
                  (0, B.jsx)(H.Button, {
                    className: tn().button,
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    onClick: a.open,
                    ...(0, W.BA)(W.QM.plusBar.PLUS_BAR_PAYWALL_BUTTON),
                    children: (0, B.jsx)(q.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        tr = (0, O.forwardRef)((e, t) =>
          (0, B.jsx)(tl, { forwardRef: t, ...e }),
        );
      var to = i(51239),
        ts = i.n(to);
      let td = (0, V.Pi)((e) => {
        let { isCollapsed: t } = e,
          { formatMessage: i } = (0, Z.Z)(),
          {
            paywall: { modal: a },
          } = (0, E.oR4)();
        return (0, B.jsx)(eJ, {
          className: ts().root,
          isCollapsed: t,
          button: (0, B.jsxs)(er.u, {
            ...eu,
            enabled: t,
            children: [
              (0, B.jsx)(H.Button, {
                variant: "text",
                withRipple: !1,
                size: "xxs",
                icon: (0, B.jsx)(X.Icon, {
                  className: ts().icon,
                  variant: "plusOutlined",
                }),
                className: (0, R.W)(ts().button, ts().important),
                "aria-label": i({ id: "plusbar.subscription-activation" }),
                onClick: a.open,
                ...(0, W.BA)(W.QM.navbar.PAYWALL_BUTTON_MINIMIZED),
              }),
              (0, B.jsx)(er._v, {
                children: (0, B.jsx)(eo.Caption, {
                  variant: "span",
                  type: "text",
                  size: "s",
                  weight: "medium",
                  children: (0, B.jsx)(q.Z, {
                    id: "plusbar.subscription-activation",
                  }),
                }),
              }),
            ],
          }),
          children: (0, B.jsx)(tr, {}),
        });
      });
      var tc = i(78129),
        tu = i(60222),
        tm = i.n(tu);
      let t_ = () => {
        let {
            experiments: e,
            paywall: { modal: t },
          } = (0, E.oR4)(),
          { formatMessage: i } = (0, Z.Z)(),
          a = e.checkExperiment(
            E.peG.WebNextUnauthorizedSubscriptionButton,
            "on",
          ),
          n = a
            ? i({ id: "plusbar.title" }, { br: "\n", nbsp: "\xa0" })
            : i({ id: "authorization.enter-title" }),
          l = a
            ? i({ id: "plusbar.text" }, { br: "\n", nbsp: "\xa0" })
            : i({ id: "authorization.enter-subtitle" }),
          r = (0, O.useMemo)(
            () =>
              a
                ? (0, B.jsxs)("div", {
                    className: tm().buttons,
                    children: [
                      (0, B.jsx)(e8.Cv, {}),
                      (0, B.jsx)(H.Button, {
                        className: tm().button,
                        isBlock: !0,
                        radius: "xxxl",
                        size: "m",
                        variant: "default",
                        color: "secondary",
                        withRipple: !1,
                        onClick: t.open,
                        children: (0, B.jsx)(q.Z, {
                          id: "interface-actions.more-details",
                        }),
                      }),
                      (0, B.jsx)(es.fD, {
                        size: "s",
                        variant: "text",
                        withRipple: !1,
                        buttonText: (0, B.jsx)(q.Z, {
                          id: "authorization.has-subscription",
                        }),
                        isBlock: !0,
                      }),
                    ],
                  })
                : (0, B.jsx)(es.fD, { size: "s", isBlock: !0 }),
            [t.open, a],
          );
        return (0, B.jsxs)("div", {
          className: tm().root,
          children: [
            (0, B.jsx)(O.Suspense, {
              children: (0, B.jsx)(tc.Iw, {
                className: tm().userProfile,
                userIdClassName: tm().userId,
                variant: "desktop",
              }),
            }),
            (0, B.jsx)(eo.Caption, {
              className: tm().title,
              size: "m",
              variant: "div",
              weight: "bold",
              children: n,
            }),
            (0, B.jsx)(eo.Caption, {
              className: tm().subtitle,
              size: "xs",
              variant: "div",
              weight: "medium",
              children: l,
            }),
            r,
          ],
        });
      };
      var tp = i(87830),
        tv = i.n(tp);
      let th = (0, V.Pi)((e) => {
          let { isCollapsed: t, withUserProfileAnimation: i } = e,
            { user: a } = (0, E.oR4)();
          return a.isAuthorized
            ? (0, B.jsx)("div", {
                className: tv().userProfileContainer,
                children: (0, B.jsx)(tc.Iw, {
                  className: tv().userProfile,
                  userIdClassName: tv().userId,
                  metaClassName: (0, R.W)(tv().userMeta, {
                    [tv().userMeta_withAnimation]: i,
                    [tv().userMeta_collapsed]: t,
                  }),
                  withMeta: !0,
                }),
              })
            : (0, B.jsx)(eJ, {
                barClassName: tv().unauthorizedBar,
                isCollapsed: t,
                button: (0, B.jsxs)(er.u, {
                  ...eu,
                  enabled: t,
                  children: [
                    (0, B.jsx)("div", {
                      className: tv().userProfileContainer,
                      children: (0, B.jsx)(tc.Iw, {
                        className: tv().userProfile,
                      }),
                    }),
                    (0, B.jsx)(er._v, {
                      children: (0, B.jsx)(eo.Caption, {
                        variant: "span",
                        type: "text",
                        size: "s",
                        weight: "medium",
                        children: (0, B.jsx)(q.Z, {
                          id: "authorization.enter-tooltip",
                        }),
                      }),
                    }),
                  ],
                }),
                children: (0, B.jsx)(t_, {}),
              });
        }),
        ty = (0, V.Pi)((e) => {
          var t;
          let {
              className: i,
              isCollapsed: a,
              shownAnimation: n,
              handleClick: l,
            } = e,
            r = Q(),
            o = (0, E.hJm)(),
            { formatMessage: s } = (0, Z.Z)(),
            d = (0, E.Eu6)(),
            { user: c, experiments: u, settings: m } = (0, E.oR4)(),
            _ = (0, E.V$B)(),
            p = (0, E.uK4)().get(E.V0J),
            v = ed(),
            h = u.checkExperiment(
              E.peG.WebNextPromoVeryBestRecommendations,
              "on",
            ),
            y = u.checkExperiment(E.peG.WebNextDownloadAppButton, "on"),
            x =
              (null === (t = m.browserInfo) || void 0 === t || t.isTouch,
              !p.get(E.BUb.NavbarDownloadBarIsHidden) && y && !1),
            g = (0, O.useMemo)(
              () =>
                c.collectionHue
                  ? { "--logo-color": (0, E.paG)(c.collectionHue) }
                  : null,
              [c.collectionHue],
            ),
            b = (0, O.useMemo)(
              () =>
                a
                  ? s({ id: "sidebar.uncollapse" })
                  : s({ id: "sidebar.collapse" }),
              [a, s],
            ),
            C = (0, O.useMemo)(
              () => ({
                search: s({ id: "navigation.search" }),
                main: s({ id: "navigation.page-main" }),
                collection: s({ id: "navigation.page-collection" }),
                non_music: s({ id: "entity-names.podcasts-and-books" }),
                kids: s({ id: "kids.for-kids" }),
              }),
              [s],
            ),
            f = (0, O.useCallback)(
              (e) => () => {
                v(a, e);
              },
              [a, v],
            ),
            I = (0, O.useMemo)(
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
                            className: (0, R.W)({
                              [eK().disabledNavigationItem]: !e.isEnabled,
                            }),
                            onClick: f(e.analyticsAppScreenName),
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
                                className: (0, R.W)({
                                  [eK().title_animate]: n,
                                  [eK().title_collapsed]: a,
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
            A = (0, O.useMemo)(
              () =>
                r
                  ? null
                  : (0, O.createElement)(er.u, {
                      ...eu,
                      key: "collapseTooltip",
                      enabled: a,
                      isFocusEnabled: !1,
                      children: [
                        (0, B.jsx)(H.Button, {
                          className: eK().collapseButton,
                          "aria-label": b,
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
                          className: (0, R.W)({
                            [eK().collapseButtonTooltip_hidden]: !a,
                          }),
                          children: b,
                        }),
                      ],
                    }),
              [a, b, l, r],
            );
          return (0, B.jsxs)("div", {
            className: (0, R.W)(eK().root, i),
            children: [
              (0, B.jsxs)("div", {
                className: eK().logoWrapper,
                children: [
                  (0, B.jsx)(es.rU, {
                    href: "/",
                    className: eK().logoLink,
                    "aria-label": s({ id: "navigation.page-main" }),
                    children: (0, B.jsx)(J.Logo, {
                      style: g,
                      className: eK().logo,
                      collapsed: a,
                      shownAnimation: n,
                      lang: d,
                    }),
                  }),
                  A,
                ],
              }),
              h &&
                (0, B.jsx)(eo.Caption, {
                  style: g,
                  variant: "div",
                  type: "text",
                  size: "xs",
                  weight: "medium",
                  className: (0, R.W)(eK().subTitle, {
                    [eK().title_animate]: n,
                    [eK().title_collapsed]: a,
                  }),
                  children: (0, B.jsx)(q.Z, {
                    id: "navigation.best-recommendations",
                  }),
                }),
              (0, B.jsx)("div", {
                className: eK().scrollableContainer,
                children: (0, B.jsxs)("div", {
                  className: eK().scrollableContent,
                  children: [
                    (0, B.jsx)(ea, {
                      className: (0, R.W)(eK().navigation, {
                        [eK().navigation_gapFill]: !1,
                      }),
                      collapsed: a,
                      "aria-label": s({ id: "navigation.main-menu" }),
                      children: I,
                    }),
                    (0, B.jsx)(es.FM, {
                      fallback: (0, B.jsx)(eQ, {
                        isCollapsed: a,
                        withCollapseAnimation: !!n,
                        className: eK().pinsList,
                      }),
                    }),
                    c.isAuthorized &&
                      !c.hasPlus &&
                      (0, B.jsx)(td, { isCollapsed: a }),
                    x && (0, B.jsx)(e7, { isCollapsed: a }),
                  ],
                }),
              }),
              (0, B.jsx)(th, { withUserProfileAnimation: n, isCollapsed: a }),
            ],
          });
        });
      var tx = i(69957),
        tg = i.n(tx);
      let tb = (0, V.Pi)((e) => {
          let { className: t } = e,
            i = (0, E.hJm)(),
            { formatMessage: a } = (0, Z.Z)(),
            n = (0, E.V$B)(),
            l = a({ id: "navigation.main-menu" }),
            r = ed(),
            o = (0, O.useMemo)(
              () => ({
                search: a({ id: "navigation.search" }),
                main: a({ id: "navigation.page-main" }),
                collection: a({ id: "navigation.page-collection" }),
                non_music: a({ id: "entity-names.podcasts-and-books" }),
                kids: a({ id: "kids.for-kids" }),
              }),
              [a],
            ),
            s = (0, O.useCallback)(
              (e) => () => {
                r(!0, e);
              },
              [r],
            );
          return (0, B.jsx)("div", {
            className: (0, R.W)(tg().root, t),
            children: (0, B.jsx)(ea, {
              collapsed: !0,
              direction: "horizontal",
              "aria-label": l,
              children: (0, B.jsx)(en, {
                children: (0, B.jsxs)(B.Fragment, {
                  children: [
                    n.map((e) => {
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
                            className: (0, R.W)({
                              [tg().disabledNavigationItem]: !e.isEnabled,
                            }),
                            onClick: s(e.analyticsAppScreenName),
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
                                children: o[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      );
                    }),
                    (0, B.jsx)(el, {
                      children: (0, B.jsx)(tc.Iw, {
                        className: tg().user,
                        variant: "mobile",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        tC = (0, V.Pi)((e) => {
          let { className: t } = e,
            i = (0, E.uK4)().get(E.V0J),
            a = Q(),
            {
              settings: { isMobile: n },
            } = (0, E.oR4)(),
            [l, r] = (0, O.useState)(i.get(E.BUb.NavbarCollapsed) || !1),
            [o, s] = (0, O.useState)(!1),
            d = U(),
            c = (0, O.useMemo)(() => (n ? tb : ty), [n]),
            u = (0, O.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(E.BUb.NavbarCollapsed, !l, { expires: 180 }),
                  r(!l),
                  s(!0);
              },
              [l, i],
            );
          return (
            (0, O.useEffect)(() => {
              d(l || a);
            }, [a, l, d]),
            (0, B.jsx)("aside", {
              className: (0, R.W)(
                K().root,
                { [K().root_collapsed]: l || a },
                t,
              ),
              ...(0, W.BA)(W.QM.navbar.NAVBAR),
              children: (0, B.jsx)(c, {
                handleClick: u,
                isCollapsed: l || a,
                shownAnimation: o,
              }),
            })
          );
        });
    },
    90508: function (e, t, i) {
      "use strict";
      i.d(t, {
        Tk: function () {
          return P;
        },
        Rt: function () {
          return ie;
        },
        Oe: function () {
          return z;
        },
        ev: function () {
          return iE;
        },
        yI: function () {
          return iL;
        },
        zC: function () {
          return G;
        },
        BF: function () {
          return iR;
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
        d,
        c,
        u = i(13534);
      let m = (e) => {
        let t = (0, u.R$C)(),
          {
            fullscreenPlayer: {
              playQueue: { trackMap: i },
            },
          } = (0, u.oR4)(),
          a = null == t ? void 0 : t.state.queueState.entityList.value,
          n = null == a ? void 0 : a[e];
        if (!n) return null;
        let {
            context: { data: l },
          } = n,
          r = i.get(String(n.entity.data.meta.id));
        return r
          ? {
              track: r,
              playContextParams: { contextData: l, queueParams: { index: e } },
            }
          : null;
      };
      var _ = i(22874);
      let p = _.V5.model("AdContainer", {
        adTitle: _.V5.maybe(_.V5.string),
        iconSrc: _.V5.maybe(_.V5.string),
        clickThroughUrl: _.V5.maybe(_.V5.string),
        src: _.V5.maybe(_.V5.string),
        clientLegalInfo: _.V5.maybe(_.V5.string),
        advertiserInfoUrl: _.V5.maybe(_.V5.string),
      });
      var v = i(75441),
        h = i(32358),
        y = i(62569),
        x = i(65067),
        g = i.t(x, 2),
        b = i(15937),
        C = i(68208),
        f = i(39054),
        I = i(17392),
        A = i(97141),
        N = i(23442),
        k = i.n(N),
        electronBridge = i(13028);
      let S = (0, y.Pi)((e) => {
          let { className: t, data: i, mediaContent: a, linkClassName: n } = e,
            {
              settings: { isMobile: l },
            } = (0, u.oR4)(),
            r = (0, u.ozq)(),
            o = (0, x.useMemo)(
              () =>
                (null == r ? void 0 : r.state.clickThrough)
                  ? (0, v.jsx)(C.Button, {
                      className: (0, h.W)(k().button, n),
                      variant: "default",
                      radius: "xxxl",
                      onClick: r.state.clickThrough,
                      children: (0, v.jsx)(b.Z, { id: "ads.learn-more" }),
                    })
                  : (null == i ? void 0 : i.clickThroughUrl)
                    ? (0, v.jsx)(A.rU, {
                        target: "_blank",
                        href: i.clickThroughUrl,
                        className: (0, h.W)(k().button, k().linkButton, n),
                        children: (0, v.jsx)(b.Z, { id: "ads.learn-more" }),
                      })
                    : (0, v.jsx)(C.Button, {
                        className: (0, h.W)(k().button, n),
                        variant: "default",
                        radius: "xxxl",
                        disabled: !0,
                        children: (0, v.jsx)(b.Z, { id: "ads.learn-more" }),
                      }),
              [
                null == i ? void 0 : i.clickThroughUrl,
                null == r ? void 0 : r.state.clickThrough,
                n,
              ],
            );
          return (0, v.jsxs)("div", {
            className: (0, h.W)(k().root, t),
            children: [
              a,
              (0, v.jsxs)("div", {
                className: k().container,
                children: [
                  (0, v.jsxs)("div", {
                    className: k().info,
                    children: [
                      (0, v.jsx)(f.Image, {
                        className: k().favicon,
                        withAspectRatio: !0,
                        "aria-hidden": !0,
                        fit: "cover",
                        src: (null == i ? void 0 : i.iconSrc) || "",
                        alt: "",
                        fallbackIconVariant: "picture",
                      }),
                      (0, v.jsxs)("div", {
                        className: k().text,
                        children: [
                          (0, v.jsx)(I.Caption, {
                            variant: "div",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            className: k().title,
                            lineClamp: l ? 5 : void 0,
                            children: null == i ? void 0 : i.adTitle,
                          }),
                          (0, v.jsx)(I.Caption, {
                            variant: "div",
                            type: "text",
                            size: "m",
                            weight: "medium",
                            className: k().subtitle,
                            children: (0, v.jsx)(b.Z, { id: "ads.ad" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className: k().buttonContainer,
                    children: o,
                  }),
                ],
              }),
            ],
          });
        }),
        P = _.V5.model("Advert", {
          data: _.V5.maybeNull(p),
          isAdvertShown: _.V5.maybe(_.V5.boolean),
          isAdvertPlaying: _.V5.maybe(_.V5.boolean),
          isAdvertPlaybackCreated: _.V5.boolean,
          type: _.V5.maybeNull(_.V5.enumeration(Object.values(u.QCf))),
        })
          .views((e) => ({
            get isAudioAdvert() {
              return e.type === u.QCf.AUDIO;
            },
            get isVideoAdvert() {
              return e.type === u.QCf.VIDEO;
            },
          }))
          .actions((e) => ({
            setData: (t) => {
              e.data = (0, _.pj)({
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
            setIsAdvertPlaybackCreated(t) {
              e.isAdvertPlaybackCreated = t;
            },
            reset: () => {
              (e.data = null),
                (e.isAdvertPlaying = !0),
                (e.isAdvertShown = !1),
                (e.type = null);
            },
          }));
      var E = i(40892);
      ((a = s || (s = {})).SYNC_LYRICS = "syncLyrics"),
        (a.PLAY_QUEUE = "playQueue");
      var T = i(84638),
        j = i(98375),
        L = i(54306);
      let w = _.V5.compose(
        _.V5.model("PlayQueue", {
          isVisible: _.V5.optional(_.V5.boolean, !1),
          beforeTracksIds: _.V5.maybeNull(_.V5.array(_.V5.number)),
          afterTracksIds: _.V5.maybeNull(_.V5.array(_.V5.number)),
          hiddenTrackIds: _.V5.array(_.V5.number),
          currentIndex: _.V5.optional(_.V5.number, 0),
          trackMap: _.V5.optional(_.V5.map(L.s$), {}),
        }),
        E.Al,
      )
        .views((e) => ({
          get isVibeBlockShowed() {
            var t;
            let {
              sonataState: { isVibeContext: i },
            } = (0, _.yj)(e);
            return (
              !i &&
              (window.ENABLE_ENDLESS_MUSIC?.() ?? true) &&
              (null === (t = e.afterTracksIds) || void 0 === t
                ? void 0
                : t.length) === 0
            );
          },
          get itemsKeys() {
            var i, a, n;
            return null !==
              (n =
                null === (i = e.beforeTracksIds) || void 0 === i
                  ? void 0
                  : i
                      .concat(
                        null !== (a = e.afterTracksIds) && void 0 !== a
                          ? a
                          : [],
                      )
                      .map(String)) && void 0 !== n
              ? n
              : [];
          },
          get isDragAndDropEnabled() {
            let {
              experiments: t,
              sonataState: { isVibeContext: i },
            } = (0, _.yj)(e);
            return t.checkExperiment(u.peG.WebNextPlayQueueDnD, "on") && !i;
          },
        }))
        .actions((e) => {
          let t = (t, i) => {
              let a = t[i];
              if (!a || (0, j.JF)(a)) return null;
              let { entity: n } = a,
                l = (0, L.B5)(n);
              return !l || l.isHiddenFromSonataQueue
                ? null
                : (e.trackMap.has(l.id) || e.trackMap.set(l.id, (0, _.pj)(l)),
                  i);
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
                  i.setAfterTracksIds(e, a, n),
                  i.setHiddenTrackIds(e);
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
                  null !== n && l.unshift(n);
                }
                e.beforeTracksIds = (0, _.pj)(l);
              },
              setAfterTracksIds(i, a, n) {
                let l = n === T.A.Vibe ? 1 : i.length - e.currentIndex - 1,
                  r = [];
                for (let n = 0; n < Math.min(l, 125); n++) {
                  let l = a[e.currentIndex + 1 + n];
                  if ("number" != typeof l) break;
                  let o = t(i, l);
                  null !== o && r.push(o);
                }
                e.afterTracksIds = (0, _.pj)(r);
              },
              setHiddenTrackIds(t) {
                let i = [];
                for (let e = 0; e < t.length; e++) {
                  let a = t[e];
                  a && a.entity.hidden && i.push(e);
                }
                e.hiddenTrackIds = (0, _.pj)(i);
              },
              reset() {
                e.destroyItems([
                  e.beforeTracksIds,
                  e.afterTracksIds,
                  e.hiddenTrackIds,
                ]),
                  e.trackMap.clear();
              },
            };
          return i;
        });
      var M = i(77282),
        B = i(48937),
        R = i(1150),
        V = i(32399),
        O = i(45409),
        D = i.n(O);
      let W = (e) => {
          try {
            return (D()(e).scripts || []).map((e) => {
              let { start: t, end: i, text: a } = e;
              return (0, _.pj)({ text: a.trim(), fromSec: t, toSec: i });
            });
          } catch (e) {
            return [];
          }
        },
        F = _.V5.model("SyncLyricsLine", {
          text: _.V5.string,
          fromSec: _.V5.number,
          toSec: _.V5.number,
        }).views((e) => ({
          get key() {
            return "".concat(e.fromSec, ":").concat(e.toSec);
          },
        })),
        U = _.V5.compose(
          _.V5.model("SyncLyrics", {
            isVisible: _.V5.optional(_.V5.boolean, !1),
            lines: _.V5.maybeNull(_.V5.array(F)),
            major: _.V5.maybeNull(V.bP),
            writers: _.V5.maybeNull(_.V5.array(_.V5.string)),
            lyricId: _.V5.maybeNull(_.V5.number),
            externalLyricId: _.V5.maybeNull(_.V5.string),
            currentTrackId: _.V5.maybeNull(
              _.V5.union(_.V5.string, _.V5.number),
            ),
            hasLyricsViewed: _.V5.optional(_.V5.boolean, !1),
          }),
          E.fu,
        )
          .views((e) => ({
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
                e.isResolved &&
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
              getData: (0, _.ls)(function* (i) {
                let { tracksResource: a, modelActionsLogger: n } = (0, _.dU)(e);
                if (i)
                  try {
                    e.loadingState = u.Gui.PENDING;
                    let {
                      downloadUrl: n,
                      major: l,
                      externalLyricId: r,
                      lyricId: o,
                      writers: s,
                    } = yield a.getLyrics((0, R.o)(i, B.y.LRC));
                    (e.major = (0, V.jp)(l)),
                      (e.externalLyricId = r),
                      (e.lyricId = o),
                      (e.writers = (0, _.pj)(s)),
                      (e.currentTrackId = i),
                      (e.hasLyricsViewed = !1),
                      yield t.downloadSyncLyrics(n),
                      (e.loadingState = u.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = u.Gui.REJECT), n.error(t);
                  }
              }),
              downloadSyncLyrics: (0, _.ls)(function* (t) {
                let { prefixlessResource: i } = (0, _.dU)(e),
                  a = yield i.getLyricsText(t);
                e.lines = (0, _.pj)(W(a));
              }),
              sendViews: (0, _.ls)(function* (t) {
                let { contextId: i, contextType: a } = t,
                  { lyricViewsResource: n, modelActionsLogger: l } = (0, _.dU)(
                    e,
                  );
                if (e.loadingState === u.Gui.RESOLVE)
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
                          id: (0, M.Z)(),
                          trackId: e.currentTrackId,
                          majorId: e.major.id,
                          lyricId: e.lyricId,
                          externalLyricId: e.externalLyricId,
                          lyricFormat: B.y.LRC,
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
        z = _.V5.model("FullscreenPlayer", {
          mode: _.V5.maybeNull(_.V5.enumeration(Object.values(s))),
          syncLyrics: U,
          playQueue: w,
          modal: E.KL,
        })
          .views((e) => ({
            get isSplitMode() {
              return this.isPlayQueueMode || this.isSyncLyricsMode;
            },
            get isSyncLyricsMode() {
              var t;
              let { sonataState: i } = (0, _.yj)(e);
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
        G = _.V5.model("QualitySettings", { modal: E.KL });
      var Q = i(9317),
        Y = i(35846),
        K = i(69756),
        Z = i(59506),
        q = i(38861),
        H = i(19245),
        X = i.n(H),
        J = i(73484),
        $ = {
          352: (e) => {
            e.exports = J;
          },
          810: (e) => {
            e.exports = g;
          },
        },
        ee = {};
      function et(e) {
        var t = ee[e];
        if (void 0 !== t) return t.exports;
        var i = (ee[e] = { exports: {} });
        return $[e](i, i.exports, et), i.exports;
      }
      var ei = {};
      (() => {
        Object.defineProperty(ei, "__esModule", { value: !0 }),
          (ei.useDebouncedToggle = void 0);
        let e = et(352),
          t = et(810);
        ei.useDebouncedToggle = (i) => {
          let { delay: a, initialState: n, throttleTimeout: l } = i,
            r = (0, t.useRef)(null),
            [o, s] = (0, t.useState)(!!n),
            d = (0, t.useMemo)(
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
            c = (0, t.useCallback)(() => {
              s(!!n), r.current && window.clearTimeout(r.current);
            }, [n]);
          return (
            (0, t.useEffect)(
              () => () => {
                r.current && window.clearTimeout(r.current);
              },
              [],
            ),
            { state: o, handleDebouncedToggle: d, reset: c }
          );
        };
      })(),
        ei.__esModule;
      var ea = ei.useDebouncedToggle,
        en = i(55188),
        el = i(14563),
        er = i(93093);
      let eo = () => {
          var e;
          let {
              fullscreenPlayer: {
                playQueue: { updateTracks: t, hiddenTrackIds: i },
              },
            } = (0, u.oR4)(),
            a = (0, u.R$C)(),
            [n, l] = (0, x.useState)(),
            r = (0, x.useRef)(),
            o = (0, x.useRef)(),
            s = (0, x.useRef)(),
            { state: d, handleDebouncedToggle: c } = ea({
              delay: 600,
              throttleTimeout: 600,
            }),
            { state: m, handleDebouncedToggle: _ } = ea({
              delay: 600,
              throttleTimeout: 600,
            }),
            p = (0, er.W)(() => {
              var e;
              let i = null == a ? void 0 : a.state.queueState.entityList.value,
                n = null == a ? void 0 : a.state.queueState.index.value,
                l = null == a ? void 0 : a.state.queueState.order.value,
                r =
                  null == a
                    ? void 0
                    : null === (e = a.state.currentContext.value) ||
                        void 0 === e
                      ? void 0
                      : e.data.type;
              i && "number" == typeof n && l && r && t(i, n, l, r);
            }),
            v = (0, er.W)(() => {
              var e;
              let t = null == a ? void 0 : a.state.queueState.index.value,
                n =
                  null == a
                    ? void 0
                    : null === (e = a.state.currentContext.value) ||
                        void 0 === e
                      ? void 0
                      : e.data.type,
                d = r.current;
              if ("number" == typeof t && "number" == typeof d) {
                let e = i.reduce((e, t) => (t < d ? e + 1 : e - 1), 0),
                  a = t - d;
                s.current = a;
                let r = n !== o.current,
                  u = 1 === Math.abs(a) ? a : a + e;
                a > 0 || r ? (c(), l(r ? 1 : u)) : a < 0 && (_(), l(u));
              }
              (r.current = t), (o.current = n);
            });
          (0, x.useEffect)(() => {
            let e =
              null == a
                ? void 0
                : a.state.queueState.index.onChange(() => {
                    p(), v();
                  });
            return () => {
              null == e || e();
            };
          }, [v, p, null == a ? void 0 : a.state.queueState.index]),
            (0, x.useEffect)(() => {
              let e =
                  null == a ? void 0 : a.state.queueState.shuffle.onChange(p),
                t =
                  null == a
                    ? void 0
                    : a.state.queueState.entityList.onChange(p),
                i = null == a ? void 0 : a.state.queueState.order.onChange(p);
              return () => {
                null == e || e(), null == t || t(), null == i || i();
              };
            }, [
              p,
              null == a ? void 0 : a.state.queueState.entityList,
              null == a ? void 0 : a.state.queueState.index,
              null == a ? void 0 : a.state.queueState.order,
              null == a ? void 0 : a.state.queueState.shuffle,
            ]);
          let h = (0, x.useMemo)(() => {
              let e = 56 * (n || 1);
              return {
                "--play-queue-transition-duration-s": "".concat(0.6, "s"),
                "--now-playing-title-height-px": "".concat(90, "px"),
                "--next-in-title-height-px": "".concat(52, "px"),
                "--track-height-px": "".concat(56, "px"),
                "--move-to-top-start-position": "".concat(e, "px"),
                "--move-from-top-start-position": "".concat(e - 142, "px"),
                "--move-to-bottom-start-position": "".concat(e, "px"),
                "--move-from-bottom-start-position": "".concat(
                  e + 52 + 90,
                  "px",
                ),
                "--move-from-top-now-playing-block-start-position": "".concat(
                  e - 90,
                  "px",
                ),
                "--move-from-bottom-now-playing-block-start-position":
                  "".concat(e + 52, "px"),
              };
            }, [n]),
            y = 1 === Math.abs(null != n ? n : 0);
          return {
            style: h,
            contextValue: {
              isMovingForward: d,
              isMovingBackward: m,
              difference: null !== (e = s.current) && void 0 !== e ? e : 0,
              isSingleTrackSwitch: y,
            },
          };
        },
        es = (0, x.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
        ed = () => (0, x.useContext)(es);
      var ec = i(26512),
        eu = i.n(ec),
        em = i(39336);
      let e_ = (0, y.Pi)((e) => {
        let { children: t } = e,
          {
            fullscreenPlayer: {
              playQueue: { itemsKeys: i, isDragAndDropEnabled: a },
            },
          } = (0, u.oR4)();
        return a
          ? (0, v.jsx)(em.Fo, { items: i, strategy: em.qw, children: t })
          : t;
      });
      var ep = i(14218),
        ev = i(8839),
        eh = i.n(ev);
      let ey = (0, y.Pi)(
          (0, x.forwardRef)((e, t) => {
            let { children: i, "data-index": a, className: n, ...l } = e,
              {
                isDragging: r,
                listeners: o,
                setNodeRef: s,
                transform: d,
                transition: c,
                attributes: u,
              } = (0, em.nB)({ id: String(a) }),
              m = (0, x.useCallback)(
                (e) => {
                  s(e), "function" == typeof t && t(e);
                },
                [t, s],
              ),
              _ = {
                transition: c,
                "--translate-y": d ? "".concat(Math.round(d.y), "px") : void 0,
              };
            return (0, v.jsx)("div", {
              ref: m,
              "data-index": a,
              style: _,
              ...l,
              className: (0, h.W)(eh().root, n),
              children: (0, v.jsx)("div", {
                ref: t,
                className: (0, h.W)(eh().inner, { [eh().dragging]: r }),
                ...o,
                ...u,
                role: "listitem",
                children: i,
              }),
            });
          }),
        ),
        ex = (e) => {
          let { index: t, isDragAndDropEnabled: i, className: a } = e,
            n = (0, u.R$C)(),
            l = (0, x.useMemo)(() => {
              let e =
                null == n ? void 0 : n.state.queueState.order.value.indexOf(t);
              return "number" == typeof e ? [e] : [];
            }, [t, null == n ? void 0 : n.state.queueState.order.value]),
            r = m(t),
            o = null == r ? void 0 : r.track,
            s = null == r ? void 0 : r.playContextParams,
            d = (0, V.OC)(null != o ? o : null, V.h0.HIDE, l),
            c = (0, ep.V)(() =>
              o && s
                ? (0, v.jsx)(R.O2, {
                    track: o,
                    playContextParams: s,
                    className: a,
                    withDNDBlock: i,
                    handleRemove: d,
                    withSecondaryColor: !0,
                  })
                : null,
            );
          return c
            ? i
              ? (0, v.jsx)(ey, { "data-index": t, children: c })
              : c
            : null;
        };
      var eg = i(33675),
        eb = i.n(eg),
        eC = i(91307),
        ef = i(44122),
        eI = i(15622),
        eA = i(44679);
      let eN = (e) =>
        !!(
          e &&
          "object" == typeof e &&
          ("playlistUuid" in e || "playlistTitle" in e)
        );
      ((n = d || (d = {})).Artist = "artist"),
        (n.Playlist = "playlist"),
        (n.Album = "album"),
        (n.Track = "track");
      let ek = (e, t) => {
          let i = (0, ef.x)(t)
            ? null == t
              ? void 0
              : t.data.parentContext
            : null;
          if (i)
            switch (e) {
              case d.Artist:
                return "/artist/".concat(null == i ? void 0 : i.data.meta.id);
              case d.Playlist:
                var a;
                if (!eN(null == i ? void 0 : i.data.meta)) return;
                return "/playlists/".concat(
                  null == i
                    ? void 0
                    : null === (a = i.data.meta) || void 0 === a
                      ? void 0
                      : a.playlistUuid,
                );
              case d.Album:
                return "/album/".concat(null == i ? void 0 : i.data.meta.id);
              default:
                return;
            }
        },
        eS = (e, t) =>
          t && e ? t : (0, v.jsx)(b.Z, { id: "entity-names.my-vibe" }),
        eP = (e, t) => {
          let i = (0, ef.x)(t)
            ? null == t
              ? void 0
              : t.data.parentContext
            : null;
          switch (e) {
            case d.Artist:
              return (0, v.jsx)(b.Z, {
                id: "play-queue.now-playing-my-wave-by-artist",
              });
            case d.Playlist:
              return (0, v.jsx)(b.Z, {
                id: "play-queue.now-playing-my-wave-by-playlist",
              });
            case d.Album:
              if ((null == i ? void 0 : i.data.type) === eA.V.PODCAST)
                return (0, v.jsx)(b.Z, {
                  id: "play-queue.now-playing-my-wave-by-podcast",
                });
              return (0, v.jsx)(b.Z, {
                id: "play-queue.now-playing-my-wave-by-album",
              });
            case d.Track:
              return (0, v.jsx)(b.Z, {
                id: "play-queue.now-playing-my-wave-by-track",
              });
            default:
              return (0, v.jsx)(b.Z, { id: "play-queue.now-playing" });
          }
        },
        eE = () => {
          var e, t, i, a, n, l, r, o, s;
          let {
              sonataState: { entityMeta: d },
              vibe: c,
            } = (0, u.oR4)(),
            m = (0, u.R$C)(),
            _ = null == m ? void 0 : m.state.currentContext.value,
            p = null == _ ? void 0 : _.data.meta,
            h = (0, x.useMemo)(() => {
              var e, t, i;
              switch (null == _ ? void 0 : _.data.type) {
                case T.A.Vibe:
                  return ek(
                    null == c
                      ? void 0
                      : null === (e = c.meta) || void 0 === e
                        ? void 0
                        : e.type,
                    _,
                  );
                case T.A.Artist:
                  return "/artist/".concat(
                    null == d
                      ? void 0
                      : null === (t = d.mainArtist) || void 0 === t
                        ? void 0
                        : t.id,
                  );
                case T.A.Playlist:
                  if (!eN(p)) return;
                  return "/playlists/".concat(
                    null == p ? void 0 : p.playlistUuid,
                  );
                case T.A.Album:
                  return "/album/".concat(
                    null == d
                      ? void 0
                      : null === (i = d.mainAlbum) || void 0 === i
                        ? void 0
                        : i.id,
                  );
                default:
                  return;
              }
            }, [
              _,
              p,
              null == d
                ? void 0
                : null === (e = d.mainAlbum) || void 0 === e
                  ? void 0
                  : e.id,
              null == d
                ? void 0
                : null === (t = d.mainArtist) || void 0 === t
                  ? void 0
                  : t.id,
              null == c
                ? void 0
                : null === (i = c.meta) || void 0 === i
                  ? void 0
                  : i.type,
            ]),
            y = (0, x.useMemo)(() => {
              var e, t, i, a, n;
              switch (null == _ ? void 0 : _.data.type) {
                case T.A.Vibe:
                  return eS(
                    null == c
                      ? void 0
                      : null === (e = c.meta) || void 0 === e
                        ? void 0
                        : e.type,
                    null == c
                      ? void 0
                      : null === (t = c.meta) || void 0 === t
                        ? void 0
                        : t.title,
                  );
                case T.A.Artist:
                  return (
                    (null === (i = _.data.meta.artist) || void 0 === i
                      ? void 0
                      : i.name) ||
                    (null == d
                      ? void 0
                      : null === (a = d.mainArtist) || void 0 === a
                        ? void 0
                        : a.name)
                  );
                case T.A.Playlist:
                  if (!eN(p)) return;
                  return null == p ? void 0 : p.title;
                case T.A.Album:
                  return null == d
                    ? void 0
                    : null === (n = d.mainAlbum) || void 0 === n
                      ? void 0
                      : n.title;
                case T.A.Various:
                  return (0, v.jsx)(b.Z, { id: "play-queue.now-playing" });
                default:
                  return (0, v.jsx)(b.Z, { id: "entity-names.my-vibe" });
              }
            }, [
              p,
              null == _ ? void 0 : _.data.type,
              null === (a = _.data.meta.artist) || void 0 === a
                ? void 0
                : a.name,
              null == d
                ? void 0
                : null === (n = d.mainAlbum) || void 0 === n
                  ? void 0
                  : n.title,
              null == d
                ? void 0
                : null === (l = d.mainArtist) || void 0 === l
                  ? void 0
                  : l.name,
              null == c
                ? void 0
                : null === (r = c.meta) || void 0 === r
                  ? void 0
                  : r.title,
              null == c
                ? void 0
                : null === (o = c.meta) || void 0 === o
                  ? void 0
                  : o.type,
            ]),
            g = (0, x.useMemo)(() => {
              switch (null == _ ? void 0 : _.data.type) {
                case T.A.Vibe:
                  var e;
                  return eP(
                    null == c
                      ? void 0
                      : null === (e = c.meta) || void 0 === e
                        ? void 0
                        : e.type,
                    _,
                  );
                case T.A.Artist:
                  return (0, v.jsx)(b.Z, {
                    id: "play-queue.now-playing-from-artist-popular-tracks",
                  });
                case T.A.Playlist:
                  return (0, v.jsx)(b.Z, {
                    id: "play-queue.now-playing-from-playlist",
                  });
                case T.A.Album:
                  if (null == d ? void 0 : d.isPodcast)
                    return (0, v.jsx)(b.Z, {
                      id: "play-queue.now-playing-from-podcast",
                    });
                  return (0, v.jsx)(b.Z, {
                    id: "play-queue.now-playing-from-album",
                  });
                default:
                  return;
              }
            }, [
              _,
              null == d ? void 0 : d.isPodcast,
              null == c
                ? void 0
                : null === (s = c.meta) || void 0 === s
                  ? void 0
                  : s.type,
            ]),
            C = (0, x.useMemo)(
              () =>
                (0, eI.d)(_)
                  ? (0, v.jsx)(b.Z, { id: "entity-names.my-vibe" })
                  : y,
              [y, _],
            );
          return {
            url: h,
            title: y,
            subTitle: g,
            vibeBlockTitle: C,
            vibeBlockSubTitle: (0, x.useMemo)(() => {
              switch (null == _ ? void 0 : _.data.type) {
                case T.A.Artist:
                  return (0, v.jsx)(b.Z, {
                    id: "play-queue.my-wave-by-artist",
                  });
                case T.A.Playlist:
                  return (0, v.jsx)(b.Z, {
                    id: "play-queue.my-wave-by-playlist",
                  });
                case T.A.Album:
                  return (0, v.jsx)(b.Z, { id: "play-queue.my-wave-by-album" });
                default:
                  return;
              }
            }, [null == _ ? void 0 : _.data.type]),
          };
        };
      var eT = i(90328),
        ej = i.n(eT);
      let eL = (0, y.Pi)(() => {
          let e = (0, u.R$C)(),
            { vibeBlockTitle: t, vibeBlockSubTitle: i } = eE(),
            a = (0, x.useCallback)(
              (t) => {
                (0, eC.m)(t, ej().ripple), null == e || e.moveForward();
              },
              [e],
            );
          return (0, v.jsxs)("div", {
            className: ej().root,
            onClick: a,
            ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_VIBE_BLOCK),
            children: [
              (0, v.jsx)(f.Image, {
                src: "/_next/static/media/vibeCover.c55d574d.png",
                className: ej().vibeCover,
                fit: "cover",
                "aria-hidden": !0,
                ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE),
              }),
              (0, v.jsxs)("div", {
                children: [
                  (0, v.jsx)(I.Caption, {
                    variant: "div",
                    size: "m",
                    className: ej().title,
                    ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_VIBE_BLOCK_TITLE),
                    children: t,
                  }),
                  (0, v.jsx)(I.Caption, {
                    variant: "div",
                    size: "m",
                    className: ej().vibeTitle,
                    ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE),
                    children: i,
                  }),
                ],
              }),
            ],
          });
        }),
        ew = (0, y.Pi)(() => {
          let {
              fullscreenPlayer: {
                playQueue: {
                  afterTracksIds: e,
                  isVibeBlockShowed: t,
                  isDragAndDropEnabled: i,
                  currentIndex: a,
                },
              },
              sonataState: { isContextRepeatMode: n },
            } = (0, u.oR4)(),
            l = (0, u.R$C)(),
            r = null == l ? void 0 : l.state.queueState.order.value,
            {
              isMovingForward: o,
              isMovingBackward: s,
              difference: d,
              isSingleTrackSwitch: c,
            } = ed(),
            m = a - d,
            _ = (0, x.useId)();
          return n && (null == e ? void 0 : e.length) === 0
            ? (0, v.jsx)("div", {
                className: eb().root,
                ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK),
              })
            : (0, v.jsxs)("div", {
                className: eb().root,
                ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK),
                children: [
                  (0, v.jsx)(I.Caption, {
                    variant: "div",
                    size: "m",
                    className: (0, h.W)(eb().title, {
                      [eb().title_withDnD]: i,
                    }),
                    ...(0, Y.BA)(
                      Y.QM.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE,
                    ),
                    children: (0, v.jsx)(b.Z, { id: "play-queue.next-in" }),
                  }),
                  (0, v.jsx)(e_, {
                    children: (0, v.jsxs)("div", {
                      className: (0, h.W)(eb().animatedContent, {
                        [eb().animatedContent_moveToTop]: o,
                        [eb().animatedContent_moveFromTop]: s && !c,
                        [eb().animatedContent_moveFromTopSingleTrack]: s && c,
                      }),
                      children: [
                        null == e
                          ? void 0
                          : e.map((e) =>
                              (null == r ? void 0 : r[m]) === e
                                ? (0, v.jsx)(
                                    "div",
                                    {
                                      className: eb().prevTrack,
                                      children: (0, v.jsx)(
                                        ex,
                                        { index: e, isDragAndDropEnabled: i },
                                        e,
                                      ),
                                    },
                                    _,
                                  )
                                : (0, v.jsx)(
                                    ex,
                                    { index: e, isDragAndDropEnabled: i },
                                    e,
                                  ),
                            ),
                        t && (0, v.jsx)(eL, {}),
                      ],
                    }),
                  }),
                ],
              });
        });
      var eM = i(69487),
        eB = i.n(eM);
      let eR = (0, y.Pi)((e) => {
          let { forwardRef: t, scrollToNowPlayingBlock: i } = e,
            {
              fullscreenPlayer: {
                playQueue: {
                  beforeTracksIds: a,
                  isDragAndDropEnabled: n,
                  currentIndex: l,
                },
              },
            } = (0, u.oR4)(),
            r = (0, u.R$C)(),
            o = null == r ? void 0 : r.state.queueState.order.value;
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
              isMovingForward: s,
              isMovingBackward: d,
              difference: c,
              isSingleTrackSwitch: m,
            } = ed(),
            _ = l - c,
            p = (0, x.useId)();
          return (0, v.jsx)("div", {
            className: eB().root,
            ref: t,
            children: (0, v.jsx)(e_, {
              children: (0, v.jsx)("div", {
                className: (0, h.W)(eB().animatedContent, {
                  [eB().animatedContent_moveToBottom]: d,
                  [eB().animatedContent_moveFromBottom]: s && !m,
                  [eB().animatedContent_moveFromBottomSingleTrack]: s && m,
                }),
                ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK),
                children:
                  null == a
                    ? void 0
                    : a.map((e) =>
                        (null == o ? void 0 : o[_]) === e
                          ? (0, v.jsx)(
                              "div",
                              {
                                className: eB().prevTrack,
                                children: (0, v.jsx)(
                                  ex,
                                  { index: e, isDragAndDropEnabled: n },
                                  e,
                                ),
                              },
                              p,
                            )
                          : (0, v.jsx)(
                              ex,
                              { index: e, isDragAndDropEnabled: n },
                              e,
                            ),
                      ),
              }),
            }),
          });
        }),
        eV = (0, x.forwardRef)((e, t) =>
          (0, v.jsx)(eR, { forwardRef: t, ...e }),
        );
      var eO = i(17221),
        eD = i(62383),
        eW = i(10393),
        eF = i(90376),
        eU = i.n(eF);
      let ez = (e) => {
          let { index: t } = e,
            i = m(t),
            a = null == i ? void 0 : i.track,
            n = null == i ? void 0 : i.playContextParams;
          return a && n
            ? (0, v.jsx)("div", {
                className: eU().root,
                children: (0, v.jsx)(R.O2, {
                  track: a,
                  playContextParams: n,
                  draggingClassName: eU().dots,
                  className: eU().noHoverItem,
                  withDNDBlock: !0,
                  isDragging: !0,
                  withSecondaryColor: !0,
                }),
              })
            : null;
        },
        eG = (0, y.Pi)((e) => {
          let { children: t } = e,
            {
              fullscreenPlayer: {
                playQueue: { isDragAndDropEnabled: i },
              },
            } = (0, u.oR4)(),
            {
              activeId: a,
              handleDragStart: n,
              handleDragCancel: l,
              sensors: r,
            } = (0, u.iMz)(),
            o = (0, x.useCallback)((e) => {
              let { active: t, over: i } = e;
              if (!t.id || !(null == i ? void 0 : i.id)) return;
            }, []),
            s = (0, x.useMemo)(() => {
              if (a)
                return (0, eW.createPortal)(
                  (0, v.jsx)(eO.y9, {
                    dropAnimation: { duration: 0 },
                    children: (0, v.jsx)(ez, { index: Number(a) }),
                  }),
                  window.document.body,
                );
            }, [a]);
          return i
            ? (0, v.jsxs)(eO.LB, {
                sensors: r,
                collisionDetection: eO.pE,
                onDragStart: n,
                onDragEnd: o,
                onDragCancel: l,
                modifiers: [eD.DL],
                children: [t, s],
              })
            : t;
        });
      var eQ = i(64353),
        eY = i(39646),
        eK = i.n(eY);
      let eZ = (0, y.Pi)(() => {
        let {
            fullscreenPlayer: {
              modal: e,
              playQueue: { isDragAndDropEnabled: t },
            },
            sonataState: {
              isContextRepeatMode: i,
              isOneRepeatMode: a,
              shuffle: n,
            },
          } = (0, u.oR4)(),
          { formatMessage: l } = (0, Q.Z)(),
          { url: r, title: o, subTitle: s } = eE(),
          d = (0, er.W)(() => {}),
          c = (0, er.W)(() => {
            e.close();
          }),
          m = (0, eQ.ik)(d, c),
          _ = (0, x.useMemo)(() => {
            let e = r
                ? {}
                : (0, Y.BA)(Y.QM.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
              t = (0, v.jsx)(I.Heading, {
                variant: "h2",
                size: "m",
                weight: "bold",
                lineClamp: 1,
                className: (0, h.W)(eK().heading, {
                  [eK().heading_withOffset]: !s,
                }),
                ...e,
                children: o,
              });
            return r
              ? (0, v.jsx)(A.rU, {
                  className: eK().title,
                  containerClassName: eK().linkContainer,
                  textClassName: eK().linkText,
                  icon: (0, v.jsx)(K.Icon, {
                    className: eK().titleIcon,
                    size: "xs",
                    variant: "arrowRight",
                  }),
                  iconPosition: "right",
                  href: r,
                  onClick: m,
                  ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                  children: t,
                })
              : t;
          }, [m, s, o, r]),
          p = (0, ep.V)(() =>
            i
              ? l({ id: "play-queue.repeat-context" })
              : a
                ? l({ id: "play-queue.repeat-one" })
                : n
                  ? l({ id: "play-queue.shuffle" })
                  : null,
          );
        return (0, v.jsxs)("div", {
          className: (0, h.W)(eK().root, { [eK().root_withDnD]: t }),
          children: [
            (0, v.jsx)(I.Caption, {
              variant: "div",
              size: "m",
              className: eK().subTitle,
              ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE),
              children: s,
            }),
            _,
            (0, v.jsx)(I.Caption, {
              variant: "div",
              size: "m",
              className: eK().modeTitle,
              ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE),
              children: p,
            }),
          ],
        });
      });
      var eq = i(21271),
        eH = i.n(eq);
      let eX = (0, y.Pi)(() => {
          var e, t;
          let { from: i } = (0, u.MhG)(),
            {
              fullscreenPlayer: {
                playQueue: { currentIndex: a, isDragAndDropEnabled: n },
              },
              sonataState: { entityMeta: l },
            } = (0, u.oR4)(),
            { isMovingForward: r, isMovingBackward: o } = ed(),
            s = (0, u.R$C)(),
            d =
              null == s
                ? void 0
                : null === (t = s.state.currentContext) || void 0 === t
                  ? void 0
                  : null === (e = t.value) || void 0 === e
                    ? void 0
                    : e.data;
          if (!d || !l) return null;
          let c = {
            contextData: { ...d, from: i },
            queueParams: { index: a, entityId: l.id },
          };
          return (0, v.jsxs)("div", {
            className: eH().root,
            ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE_NOW_PLAYING_BLOCK),
            children: [
              (0, v.jsx)(eZ, {}),
              (0, v.jsx)(R.O2, {
                track: l,
                playContextParams: c,
                className: (0, h.W)(eH().track, eH().important, {
                  [eH().track_withDnD]: n,
                  [eH().track_moveFromTop]: o,
                  [eH().track_moveFromBottom]: r,
                }),
                withSecondaryColor: !0,
              }),
            ],
          });
        }),
        eJ = () => {
          let { style: e, contextValue: t } = eo(),
            i = (0, x.useRef)(null),
            a = (0, x.useRef)(null),
            {
              state: n,
              handleDebouncedToggle: l,
              reset: r,
            } = ea({ delay: 1e4, throttleTimeout: 2e3 }),
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
            (0, v.jsx)(eG, {
              children: (0, v.jsx)(es.Provider, {
                value: t,
                children: (0, v.jsx)("div", {
                  className: eu().root,
                  style: e,
                  ...(0, Y.BA)(Y.QM.player.PLAY_QUEUE),
                  children: (0, v.jsx)("div", {
                    className: eu().content,
                    ref: i,
                    children: (0, v.jsxs)("div", {
                      className: eu().scrollContent,
                      children: [
                        (0, v.jsx)(eV, { ref: a, scrollToNowPlayingBlock: o }),
                        (0, v.jsx)(eX, {}),
                        (0, v.jsx)(ew, {}),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        },
        e$ = (0, x.createContext)({}),
        e0 = () => (0, x.useContext)(e$);
      var e5 = i(69050),
        e1 = i.n(e5),
        e2 = i(96268),
        e4 = i.n(e2);
      let e3 = (e) => (e + 1) * 0.275,
        e6 = (0, y.Pi)((e) => {
          let { className: t, icon: i } = e,
            { sonataState: a } = (0, u.oR4)(),
            n = (0, x.useCallback)(
              (e) => {
                let t = {
                  animationDelay: "".concat(e3(e), "s"),
                  animationDuration: "".concat(1.1, "s, ").concat(1.1, "s"),
                };
                return i
                  ? (0, x.cloneElement)(i, {
                      className: (0, h.W)(e4().element, e4().element_withIcon, {
                        [e4().element_paused]: a.isPaused,
                      }),
                      key: e,
                      style: t,
                    })
                  : (0, v.jsx)(
                      "div",
                      {
                        className: (0, h.W)(
                          e4().element,
                          e4().element_withDefaultElement,
                          {
                            [e4().element_paused]: a.isPaused,
                          },
                        ),
                        style: t,
                      },
                      e,
                    );
              },
              [i, a],
            );
          return (0, v.jsx)("div", {
            className: (0, h.W)(e4().root, t),
            children: Array.from({ length: 4 }, (e, t) => n(t)),
          });
        });
      var e9 = i(84722),
        e7 = i(48530);
      ((l = c || (c = {})).INTRO = "intro"),
        (l.PREPARE = "prepare"),
        (l.PLAYING = "playing"),
        (l.OUTRO = "outro");
      let e8 = () => {
          var e;
          let t = (0, u.R$C)(),
            [i, a] = (0, x.useState)(
              null !==
                (e =
                  null == t
                    ? void 0
                    : t.state.playerState.progress.value.position) &&
                void 0 !== e
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
        },
        te = (e) => {
          let { onSetProgressEventChange: t } = e,
            i = (0, u.R$C)();
          (0, x.useEffect)(() => {
            let e =
              null == i
                ? void 0
                : i.state.playerState.event.onChange((e) => {
                    e === j.xg.SET_PROGRESS && t();
                  });
            return () => {
              null == e || e();
            };
          }, [t, i]);
        },
        tt = (e) => {
          let { position: t } = e,
            {
              fullscreenPlayer: { syncLyrics: i },
            } = (0, u.oR4)();
          return {
            state: (0, x.useMemo)(() => {
              let { startSec: e, endSec: a } = i;
              return e && e >= 3 && e - t > 0 && e - t <= 3
                ? c.PREPARE
                : e && e > t
                  ? c.INTRO
                  : a && t > a
                    ? c.OUTRO
                    : c.PLAYING;
            }, [t, i]),
          };
        };
      var ti = i(48457),
        ta = i.n(ti);
      let tn = (0, y.Pi)(() => {
        var e, t, i;
        let { formatMessage: a } = (0, Q.Z)(),
          {
            fullscreenPlayer: { syncLyrics: n },
          } = (0, u.oR4)();
        return (0, v.jsxs)("footer", {
          className: ta().root,
          children: [
            n.hasWriters &&
              (0, v.jsx)(I.Caption, {
                className: ta().writers,
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
              (0, v.jsx)(I.Caption, {
                className: ta().major,
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
      var tl = i(95858),
        tr = i.n(tl);
      let to = (e) => {
        let { className: t, text: i } = e;
        return (0, v.jsx)("span", {
          className: (0, h.W)(tr().root, t),
          children: i,
        });
      };
      var ts = i(99127),
        td = i.n(ts);
      let tc = (e) => {
          let t = (0, x.useRef)(0),
            {
              fullscreenPlayer: { syncLyrics: i },
              sonataState: { contextId: a, contextType: n },
            } = (0, u.oR4)();
          (0, x.useEffect)(() => {
            !i.hasLyricsViewed &&
              null !== e &&
              "visible" === document.visibilityState &&
              (t.current++,
              t.current >= 2 && i.sendViews({ contextId: a, contextType: n }));
          }, [e, a, n, i]);
        },
        tu = (0, y.Pi)((e) => {
          var t, i;
          let {
              state: a,
              progressPosition: n,
              shouldShowScrolledLyrics: l,
              setProgressPosition: r,
            } = e,
            o = (0, u.R$C)(),
            s = (0, e7.oc)(),
            {
              fullscreenPlayer: { syncLyrics: d },
            } = (0, u.oR4)(),
            m = (0, x.useCallback)(
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
            _ = d.getActiveLineIndex(n);
          return (
            tc(_),
            (0, x.useEffect)(() => {
              if (!l) {
                if (
                  ((a === c.INTRO || a === c.PREPARE) && s.slideTo(0),
                  a === c.OUTRO)
                ) {
                  var e;
                  s.slideTo(
                    Number(
                      null === (e = d.lines) || void 0 === e
                        ? void 0
                        : e.length,
                    ),
                  );
                }
                null !== _ && s.slideTo(_ + 1);
              }
            }, [
              _,
              l,
              a,
              s,
              null === (t = d.lines) || void 0 === t ? void 0 : t.length,
            ]),
            null === (i = d.lines) || void 0 === i
              ? void 0
              : i.map((e, t) => {
                  var i;
                  return (0, v.jsx)(
                    e7.o5,
                    {
                      onClickCapture: m(e.fromSec),
                      className: (0, h.W)(td().line, {
                        [td().line_last]:
                          t ===
                            Number(
                              null === (i = d.lines) || void 0 === i
                                ? void 0
                                : i.length,
                            ) -
                              1 && !l,
                        [td().line_active]: t === _ && !l,
                      }),
                      ...(0, Y.BA)(Y.QM.player.SYNC_LYRICS_LINE),
                      children: (0, v.jsx)(to, { text: e.text }),
                    },
                    e.key,
                  );
                })
          );
        });
      tu.displayName = "SwiperSlide";
      let tm = { forceToAxis: !0 },
        t_ = (0, y.Pi)(() => {
          let {
              fullscreenPlayer: { syncLyrics: e },
              settings: { isMobile: t },
            } = (0, u.oR4)(),
            { progressPosition: i, setProgressPosition: a } = e8(),
            { state: n } = tt({ position: i }),
            {
              scrollerClassName: l,
              footerClassName: r,
              counterClassName: o,
            } = e0(),
            {
              state: s,
              handleDebouncedToggle: d,
              reset: m,
            } = ea({ delay: 3e3, throttleTimeout: 300 }),
            {
              state: _,
              handleDebouncedToggle: p,
              reset: y,
            } = ea({ delay: 3e3, throttleTimeout: 300 }),
            g = (0, x.useCallback)(() => {
              _ || d();
            }, [d, _]),
            b = (0, x.useCallback)(() => {
              s && m(), p();
            }, [p, m, s]),
            C = (0, x.useCallback)(
              (e) => {
                switch (e.code) {
                  case u.DtV.KEY_L:
                  case u.DtV.KEY_J:
                  case u.DtV.ARROW_LEFT:
                  case u.DtV.ARROW_RIGHT:
                    d();
                }
              },
              [d],
            ),
            f = (0, x.useMemo)(
              () =>
                n === c.PREPARE ? Math.ceil(Number(e.startSec) - i) : null,
              [i, n, e.startSec],
            ),
            I = (0, x.useMemo)(
              () =>
                n === c.PREPARE
                  ? (0, v.jsx)(to, { className: td().counterLine, text: f })
                  : n === c.INTRO
                    ? (0, v.jsx)(e6, {})
                    : null,
              [f, n],
            );
          return (
            te({ onSetProgressEventChange: y }),
            (0, x.useEffect)(
              () => (
                window.addEventListener("keydown", C),
                () => {
                  window.removeEventListener("keydown", C);
                }
              ),
              [C],
            ),
            (0, x.useEffect)(
              () => (
                window.addEventListener("mousemove", g),
                () => {
                  window.removeEventListener("mousemove", g);
                }
              ),
              [g],
            ),
            (0, v.jsxs)(e7.tq, {
              className: (0, h.W)(
                td().root,
                {
                  [td()["root_".concat(n)]]: !_,
                  [td().root_withVisibleUpperLyrics]: s,
                  [td().root_withVisibleScrolledLyrics]: _,
                },
                l,
              ),
              modules: [e9.Gk, e9.Rv],
              slidesPerView: "auto",
              spaceBetween: 32,
              direction: "vertical",
              mousewheel: tm,
              freeMode: !0,
              onScroll: b,
              onTouchMove: t ? b : void 0,
              allowTouchMove: t,
              children: [
                (0, v.jsx)(e7.o5, {
                  className: (0, h.W)(td().counter, o),
                  children: I,
                }),
                (0, v.jsx)(tu, {
                  setProgressPosition: a,
                  shouldShowScrolledLyrics: _,
                  state: n,
                  progressPosition: i,
                }),
                (0, v.jsx)(e7.o5, {
                  className: r,
                  children: (0, v.jsx)(tn, {}),
                }),
              ],
            })
          );
        }),
        tp = (0, y.Pi)((e) => {
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
              fullscreenPlayer: { syncLyrics: d, hideSyncLyrics: c },
            } = (0, u.oR4)();
          (0, x.useEffect)(() => {
            d.currentTrackId !== (null == s ? void 0 : s.id) &&
              (null == s ? void 0 : s.isSyncLyricsAvailable) &&
              d.getData(null == s ? void 0 : s.id);
          }, [
            null == s ? void 0 : s.isSyncLyricsAvailable,
            null == s ? void 0 : s.id,
            d,
          ]);
          let m = (0, x.useMemo)(
              () =>
                d.isResolved
                  ? (0, v.jsx)(t_, {})
                  : ((d.isRejected || d.hasInvalidLyrics) && c(),
                    (0, v.jsx)(e6, { className: r })),
              [
                d.isResolved,
                d.isRejected,
                d.hasInvalidLyrics,
                d.setInvisible,
                r,
              ],
            ),
            _ = (0, x.useMemo)(
              () => ({
                counterClassName: i,
                scrollerClassName: n,
                footerClassName: a,
              }),
              [i, a, n],
            );
          return (0, v.jsx)(e$.Provider, {
            value: _,
            children: (0, v.jsx)("div", {
              ref: o,
              className: (0, h.W)(e1().root, t),
              children: (0, v.jsx)("div", {
                className: (0, h.W)(e1().content, l),
                ...(0, Y.BA)(Y.QM.player.SYNC_LYRICS_CONTENT),
                children: m,
              }),
            }),
          });
        });
      var tv = i(17727),
        th = i(84158),
        ty = i.n(th);
      let tx = (0, y.Pi)((e) => {
          let {
              className: t,
              variant: i = "text",
              iconSize: a,
              iconClassName: n,
              withRipple: l = !1,
              size: r = "s",
              forwardRef: o,
              children: s,
              color: d,
              disabled: c = !1,
            } = e,
            { formatMessage: m } = (0, Q.Z)(),
            {
              fullscreenPlayer: {
                isPlayQueueMode: _,
                hidePlayQueue: p,
                showPlayQueue: y,
              },
            } = (0, u.oR4)(),
            g = (0, x.useCallback)(() => (_ ? p() : y()), [p, _, y]),
            {
              scaleAnimation: b,
              unscaleAnimation: f,
              handleAnimationEnd: I,
              handleClick: A,
            } = (0, tv.l)({ shouldStartFromUnscale: _, onClick: g });
          return (0, v.jsx)(C.Button, {
            className: (0, h.W)(
              ty().root,
              { [ty().animation_scaled]: b, [ty().animation_unscaled]: f },
              t,
            ),
            color: d,
            onAnimationEnd: I,
            withRipple: l,
            variant: i,
            size: r,
            radius: "xxxl",
            "aria-label": m({ id: "play-queue.title" }),
            "aria-pressed": _,
            onClick: A,
            icon: (0, v.jsx)(K.Icon, {
              size: a,
              className: (0, h.W)(ty().icon, n, { [ty().icon_active]: _ }),
              variant: "playQueue",
            }),
            ref: o,
            disabled: c,
            ...(0, Y.BA)(Y.QM.player.FULLSCREEN_PLAYER_QUEUE_BUTTON),
            children: s,
          });
        }),
        tg = (0, x.forwardRef)((e, t) =>
          (0, v.jsx)(tx, { forwardRef: t, ...e }),
        );
      var tb = i(2707),
        tC = i.n(tb);
      let tf = (0, y.Pi)((e) => {
          let {
              className: t,
              variant: i = "text",
              iconSize: a,
              iconClassName: n,
              withRipple: l = !1,
              size: r = "s",
              forwardRef: o,
              children: s,
              color: d,
              disabled: c = !1,
            } = e,
            { formatMessage: m } = (0, Q.Z)(),
            {
              fullscreenPlayer: {
                isSyncLyricsMode: _,
                hideSyncLyrics: p,
                showSyncLyrics: y,
              },
            } = (0, u.oR4)(),
            g = (0, x.useCallback)(() => (_ ? p() : y()), [p, _, y]),
            {
              scaleAnimation: b,
              unscaleAnimation: f,
              handleAnimationEnd: I,
              handleClick: A,
            } = (0, tv.l)({ shouldStartFromUnscale: _, onClick: g }),
            N = ""
              .concat(m({ id: "interface-actions.open-sync-lyrics" }), " ")
              .concat(m({ id: "warning-messages.can-break-accessibility" }));
          return (0, v.jsx)(C.Button, {
            className: (0, h.W)(
              tC().root,
              { [tC().animation_scaled]: b, [tC().animation_unscaled]: f },
              t,
            ),
            color: d,
            onAnimationEnd: I,
            withRipple: l,
            variant: i,
            size: r,
            radius: "xxxl",
            "aria-label": N,
            "aria-pressed": _,
            onClick: A,
            icon: (0, v.jsx)(K.Icon, {
              size: a,
              className: (0, h.W)(tC().icon, n, { [tC().icon_active]: _ }),
              variant: "syncLyrics",
            }),
            ref: o,
            disabled: c,
            ...(0, Y.BA)(Y.QM.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
            children: s,
          });
        }),
        tI = (0, x.forwardRef)((e, t) =>
          (0, v.jsx)(tf, { forwardRef: t, ...e }),
        );
      var tA = i(28536),
        tN = i.n(tA);
      let tk = (0, y.Pi)(() => {
        var e;
        let [t, i] = (0, x.useState)(!1),
          { sonataState: a, user: n } = (0, u.oR4)(),
          { entityMeta: l } = a,
          { handleDebouncedToggle: r } = ea({
            delay: 1500,
            throttleTimeout: 300,
          }),
          o =
            a.canSpeed &&
            ((null == l ? void 0 : l.isNonMusic) ||
              (null == l
                ? void 0
                : null === (e = l.mainAlbum) || void 0 === e
                  ? void 0
                  : e.isNonMusic)),
          s = (0, V.SB)(l),
          d = (0, x.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          c = (0, ep.V)(() => {
            if (
              (null == l || !l.isRemoved) &&
              (null == l ? void 0 : l.isAvailable)
            )
              return (0, v.jsx)(R.hz, {
                dismissSettings: { bubbles: { escapeKey: !1 } },
                track: l,
                open: t,
                onOpenChange: i,
                placement: "left",
                icon: (0, v.jsx)(K.Icon, { variant: "more", size: "m" }),
                className: (0, h.W)(tN().menuButton, {
                  [tN().menuButton_active]: t,
                }),
                wrapperClassName: tN().menuWrapper,
                onClick: d,
                size: "l",
                ...(0, Y.BA)(Y.QM.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
              });
          }),
          m = (0, x.useMemo)(() => {
            if (null == l ? void 0 : l.isSyncLyricsAvailable)
              return (0, v.jsx)(tI, {
                className: tN().syncLyricsButton,
                iconSize: "m",
                size: "l",
                variant: "default",
                color: "secondary",
                disabled: !n.isAuthorized,
              });
          }, [null == l ? void 0 : l.isSyncLyricsAvailable, n.isAuthorized]);
        return (
          (0, x.useEffect)(
            () => (
              window.addEventListener("mousemove", r),
              () => {
                window.removeEventListener("mousemove", r);
              }
            ),
            [r],
          ),
          (0, v.jsxs)("div", {
            className: (0, h.W)(tN().root, { [tN().root_visible]: t }),
            children: [
              (0, v.jsx)(tg, {
                className: tN().playQueueButton,
                iconSize: "m",
                size: "l",
                variant: "default",
                color: "secondary",
                disabled: !n.isAuthorized,
              }),
              (0, v.jsx)(L.WP, {
                className: tN().sonataControls,
                isMobile: !1,
                entityMeta: l,
                isFullscreen: !0,
              }),
              c,
              m,
              (0, v.jsxs)("div", {
                className: tN().bottomRightButtonsWrapper,
                children: [
                  o &&
                    (0, v.jsx)(A.t5, {
                      className: tN().speedButton,
                      size: "l",
                      iconSize: "m",
                      isIconCentered: !0,
                    }),
                  (0, v.jsx)(A.FM, {
                    fallback: (0, v.jsx)(A.dJ, {
                      className: tN().likeButton,
                      isLiked: null == l ? void 0 : l.isLiked,
                      onClick: s,
                      iconSize: "m",
                      size: "l",
                      variant: "default",
                      color: "secondary",
                      disabled: !n.isAuthorized,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
      var tS = i(59091),
        tP = i(70659),
        tE = i.n(tP);
      let tT = (e) => {
        let { className: t, children: i, coverUri: a } = e;
        return (0, v.jsxs)(tS.Paper, {
          radius: "m",
          className: (0, h.W)(tE().root, t),
          ...(0, Y.BA)(Y.QM.player.FULLSCREEN_PLAYER_POSTER_CONTENT),
          children: [
            (0, v.jsx)(A.BE, {
              className: tE().cover,
              src: a,
              size: 400,
              fit: "cover",
              withAvatarReplace: !0,
            }),
            i,
          ],
        });
      };
      var tj = i(63634),
        tL = i.n(tj),
        tw = i(64451);
      let tM = {
          enter: tL().additionalContent_enter,
          enterActive: tL().additionalContent_enter_active,
          exit: tL().additionalContent_exit,
          exitActive: tL().additionalContent_exit_active,
          appear: tL().additionalContent_enter,
          appearActive: tL().additionalContent_enter_active,
        },
        tB = (e) => {
          let {
              isModeActive: t,
              shouldDisableInsetTransition: i,
              children: a,
            } = e,
            n = (0, x.useRef)(null);
          return (0, v.jsx)(tw.Z, {
            in: t,
            nodeRef: n,
            timeout: 800,
            unmountOnExit: !0,
            appear: !0,
            classNames: tM,
            children: (0, v.jsx)("div", {
              ref: n,
              className: (0, h.W)(tL().additionalContent, {
                [tL().additionalContent_withDisabledInsetTransition]: i,
              }),
              children: a,
            }),
          });
        },
        tR = (0, y.Pi)(() => {
          var e;
          let { state: t, handleDebouncedToggle: i } = ea({
              delay: 150,
              throttleTimeout: 100,
            }),
            {
              sonataState: { entityMeta: a },
              fullscreenPlayer: n,
            } = (0, u.oR4)(),
            { state: l, toggleTrue: r } = (0, en.O)(!1),
            [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, x.useState)(window.isRemoteDeviceConnected ?? false),
            [remoteDevice, setRemoteDevice] = (0, x.useState)(window.remoteDevice ?? null),
            o =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (e = a.mainAlbum) || void 0 === e
                  ? void 0
                  : e.isPodcast),
            d = null == a ? void 0 : a.isTrackAudiobook,
            c = {
              [s.PLAY_QUEUE]: {
                component: (0, v.jsx)(eJ, {}),
                isActive: n.isPlayQueueMode,
              },
              [s.SYNC_LYRICS]: {
                component: (0, v.jsx)(tp, {
                  className: tL().syncLyrics,
                  loaderClassName: tL().syncLyricsLoader,
                  contentClassName: tL().syncLyricsContent,
                  scrollerClassName: tL().syncLyricsScroller,
                  counterClassName: tL().syncLyricsCounter,
                  footerClassName: tL().syncLyricsFooter,
                }),
                isActive: n.isSyncLyricsMode,
              },
            },
            m = (0, x.useMemo)(
              () =>
                a
                  ? d
                    ? (0, v.jsx)(R.MG, {
                        hasLineClamp: !1,
                        className: (0, h.W)(tL().meta, {
                          [tL().meta_isSplitMode]: n.isSplitMode,
                        }),
                        titleContainerClassName: tL().title,
                        track: a,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !1,
                        textClassName: (0, h.W)(
                          tL().nonMusicAuthors,
                          tL().ellipsis,
                        ),
                        withContextMenuArtists: !0,
                      })
                    : o
                      ? (0, v.jsx)(R.wT, {
                          className: (0, h.W)(tL().meta, {
                            [tL().meta_isSplitMode]: n.isSplitMode,
                          }),
                          titleContainerClassName: tL().title,
                          track: a,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                          textClassName: tL().nonMusicAuthors,
                        })
                      : (0, v.jsx)(R.ko, {
                          hasLineClamp: !1,
                          className: (0, h.W)(tL().meta, {
                            [tL().meta_isSplitMode]: n.isSplitMode,
                          }),
                          titleContainerClassName: tL().title,
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                          artistsClassName: tL().artists,
                          textClassName: tL().ellipsis,
                          withContextMenuArtists: !0,
                        })
                  : null,
              [a, null == a ? void 0 : a.id, o, d, n.isSplitMode],
            );
          return (
            (0, x.useEffect)(() => {
              window.onRemoteDeviceConnected.push((device_info) => {
                setIsRemoteDeviceConnected(true);
                setRemoteDevice(device_info);
              });
              window.onRemoteDeviceDisconnected.push(() => {
                setIsRemoteDeviceConnected(false);
                setRemoteDevice(null);
              });
            }, []),
            (0, x.useEffect)(
              () => (
                window.addEventListener("resize", i),
                () => {
                  window.removeEventListener("resize", i);
                }
              ),
              [i],
            ),
            (0, x.useEffect)(() => {
              n.isSplitMode && r();
            }, [n.isSplitMode, n.mode, r]),
            (0, x.useEffect)(
              () => () => {
                n.reset(), n.playQueue.reset();
              },
              [n],
            ),
            (0, v.jsxs)("div", {
              className: tL().root,
              children: [
                (0, v.jsxs)("div", {
                  className: (0, h.W)(tL().fullscreenContent, {
                    [tL().fullscreenContent_withDisabledInsetTransition]: t,
                    [tL().fullscreenContent_enter]: n.isSplitMode,
                    [tL().fullscreenContent_leave]: !n.isSplitMode && l,
                  }),
                  ...(0, Y.BA)(
                    Y.QM.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT,
                  ),
                  children: [
                    isRemoteDeviceConnected &&
                      (0, v.jsxs)("div", {
                        style: {
                          position: "absolute",
                          top: '-25px',
                          color:
                            "var(--ym-controls-color-primary-default-enabled)",
                        },
                        children: [
                          (0, v.jsxs)("span", {
                            children: `Подключён удалённый плеер: ${remoteDevice?.info?.title}`,
                          }),
                        ],
                      }),
                      (0, v.jsx)(tT, {
                        className: (0, h.W)(tL().poster, tL().important),
                        coverUri: null == a ? void 0 : a.coverUri,
                        children: (0, v.jsx)(tk, {}),
                      }),
                    (0, v.jsxs)("div", {
                      className: tL().info,
                      children: [
                        m,
                        (0, v.jsx)(el.Y, {
                          className: tL().sliderContainer,
                          sliderClassName: tL().slider,
                          disabled: !a,
                          isMobile: !1,
                          isFullscreen: n.isSplitMode,
                        }),
                      ],
                    }),
                  ],
                }),
                Object.entries(c).map((e) => {
                  let [i, { component: a, isActive: n }] = e;
                  return (0, v.jsx)(
                    tB,
                    {
                      isModeActive: n,
                      shouldDisableInsetTransition: t,
                      children: a,
                    },
                    i,
                  );
                }),
              ],
            })
          );
        }),
        tV = (0, y.Pi)(() => {
          let { formatMessage: e } = (0, Q.Z)(),
            { theme: t } = (0, u.FgM)(),
            {
              currentTrackInfo: { modal: i },
              sonataState: { entityMeta: a },
              fullscreenPlayer: n,
              fullscreenVideoPlayer: l,
              advert: r,
            } = (0, u.oR4)(),
            o = (0, x.useMemo)(
              () => ({
                "--player-average-color-background": (0, R.Er)(
                  t,
                  null == a || (window.DISABLE_PER_TRACK_COLORS?.() ?? false)
                    ? void 0
                    : a.averageColor,
                ),
              }),
              [null == a ? void 0 : a.averageColor, t],
            );
          (0, x.useEffect)(() => {
            r.isAdvertShown && n.modal.close();
          }, [r.isAdvertShown, n.modal]);
          let s = !i.isOpened && !l.modal.isOpened;
          return (0, v.jsxs)(Z.u, {
            className: (0, h.W)(X().root, X().important),
            open: n.modal.isOpened,
            onOpenChange: s ? n.modal.onOpenChange : void 0,
            onClose: n.modal.close,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: o,
            contentClassName: X().modalContent,
            closeOnOutsidePress: !1,
            ...(0, Y.BA)(Y.QM.player.FULLSCREEN_PLAYER_MODAL),
            children: [
              (0, v.jsx)("header", {
                className: X().header,
                children: (0, v.jsx)(C.Button, {
                  className: X().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "m",
                  icon: (0, v.jsx)(K.Icon, {
                    variant: "arrowDown",
                    size: "xs",
                  }),
                  onClick: n.modal.close,
                  "aria-label": e({ id: "interface-actions.close" }),
                  ...(0, Y.BA)(Y.QM.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                }),
              }),
              (0, v.jsx)(tR, {}),
              (0, v.jsx)(q.Notification, {
                className: X().notification,
                enableMultiContainer: !0,
                containerId: u.W$x.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, v.jsx)(q.Notification, {
                className: X().notification,
                enableMultiContainer: !0,
                containerId: u.W$x.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var tO = i(36891),
        tD = i.n(tO),
        tW = i(95817),
        tF = i(27376),
        tU = i(67126),
        tz = i(88913),
        tG = i(4875);
      let tQ = () => {
        let e = (0, u.z$f)(),
          t = (0, u.wLl)(),
          { hash: i } = (0, u.RQn)(),
          { pageId: a } = (0, u.lVB)();
        return (0, x.useCallback)(
          (n, l) => {
            if (!e || !a || !u.x3Y[a] || !i) return;
            let r = {
                hash: i,
                pageId: u.x3Y[a],
                propertyKey: "sound_quality",
                propertyValueNew: n,
                propertyValueOld: l,
              },
              o = (0, u.KOr)({ params: r, logger: t, context: tQ.name });
            o && (0, tG.pq)(e.evgenInstance, o);
          },
          [e, i, t, a],
        );
      };
      var tY = i(57577),
        tK = i.n(tY);
      let tZ = (e) => {
        let {
            closeToast: t,
            onOpenQualitySettingsMenu: i,
            message: a,
            isMobile: n,
          } = e,
          { formatMessage: l } = (0, Q.Z)(),
          r = (0, x.useCallback)(() => {
            i(), null == t || t();
          }, [t, i]),
          o = (0, x.useMemo)(
            () =>
              (0, v.jsxs)("div", {
                className: tK().message,
                children: [
                  (0, v.jsx)(I.Caption, {
                    variant: "div",
                    size: "m",
                    ...(0, Y.BA)(Y.QM.player.NOTIFICATION_CHANGE_QUALITY_TEXT),
                    children: a,
                  }),
                  !n &&
                    (0, v.jsx)(C.Button, {
                      className: tK().changeButton,
                      onClick: r,
                      variant: "text",
                      withRipple: !1,
                      "aria-label": l({ id: "interface-actions.change" }),
                      children: (0, v.jsx)(I.Caption, {
                        variant: "div",
                        size: "m",
                        children: (0, v.jsx)(b.Z, {
                          id: "interface-actions.change",
                        }),
                      }),
                    }),
                ],
              }),
            [l, r, a, n],
          );
        return (0, v.jsx)(A.Yj, {
          closeToast: t,
          cover: (0, v.jsx)(K.Icon, {
            className: tK().icon,
            size: "xs",
            variant: "settings",
          }),
          message: o,
        });
      };
      var tq = i(33915),
        tH = i.n(tq);
      let tX = [
          {
            type: tW.n.HIGH_QUALITY,
            text: (0, v.jsx)(b.Z, {
              id: "player-actions.audio-quality-maximum",
            }),
            qualityMessageId: "player-actions.audio-quality-maximum",
          },
          {
            type: tW.n.BALANCED,
            text: (0, v.jsx)(b.Z, {
              id: "player-actions.audio-quality-optimal",
            }),
            qualityMessageId: "player-actions.audio-quality-optimal",
          },
          {
            type: tW.n.EFFICIENT,
            text: (0, v.jsx)(b.Z, {
              id: "player-actions.audio-quality-economical",
            }),
            qualityMessageId: "player-actions.audio-quality-economical",
          },
        ],
        tJ = {
          [tW.n.HIGH_QUALITY]: (0, v.jsx)(b.Z, {
            id: "player-actions.audio-quality-maximum-description",
          }),
          [tW.n.BALANCED]: (0, v.jsx)(b.Z, {
            id: "player-actions.audio-quality-optimal-description",
          }),
          [tW.n.EFFICIENT]: (0, v.jsx)(b.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
        },
        t$ = (0, y.Pi)((e) => {
          let {
            onOpenChange: t,
            open: i,
            placement: a,
            size: n,
            referenceClassName: l,
            icon: r,
            referenceLabel: o,
          } = e;
          (0, u.ZP4)(i);
          let s = (0, x.useId)(),
            { formatMessage: d } = (0, Q.Z)(),
            { notify: c } = (0, u.d$W)(),
            m = (0, u.uK4)().get(u.V0J),
            {
              sonataState: _,
              user: p,
              settings: { isMobile: y },
              quality: g,
            } = (0, u.oR4)(),
            f = (0, tz.ji)(),
            I = (0, u.SqQ)(),
            N = tQ(),
            { state: k, setState: S } = (0, en.O)(!1),
            P = (0, x.useCallback)(() => {
              null == t || t(!0);
            }, [t]),
            E = (0, x.useCallback)(
              (e) => {
                N(e, _.quality),
                  _.setQuality(e),
                  null == I || I.setQuality(e),
                  m.set(u.BUb.YmPlayerQuality, e, { expires: 365 });
              },
              [I, _, m, N],
            ),
            T = (0, x.useCallback)(
              (e) => {
                let t = d({ id: e }).toLowerCase();
                return (0, v.jsx)(b.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [d],
            ),
            j = (0, x.useCallback)(
              (e, t) => () => {
                if (_.quality === e) return;
                E(e);
                let i = T(t);
                c(
                  (0, v.jsx)(tZ, {
                    onOpenQualitySettingsMenu: P,
                    message: i,
                    isMobile: y,
                  }),
                  { containerId: u.W$x.INFO },
                );
              },
              [T, P, c, _.quality, E, y],
            ),
            L = (0, x.useCallback)(
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
                  return (0, v.jsx)(tF.sN, {
                    isBlock: !0,
                    disabled: r,
                    className: (0, h.W)(tH().item, tH().expandedItem),
                    iconPosition: "right",
                    icon: t,
                    onClick: j(i, a),
                    role: "option",
                    "aria-selected": n,
                    children: (0, v.jsxs)("span", {
                      className: tH().itemWrapper,
                      children: [
                        (0, v.jsxs)("span", {
                          className: tH().item_option,
                          children: [l, " ", (0, v.jsx)(tU.y, { children: o })],
                        }),
                        (0, v.jsx)("span", {
                          className: (0, h.W)(
                            tH().item_option,
                            tH().itemSubTitle,
                          ),
                          children: tJ[i],
                        }),
                      ],
                    }),
                  });
                };
              },
              [j],
            ),
            w = !p.hasPlus,
            M = (0, x.useMemo)(
              () =>
                tX.map((e) => {
                  let { type: t, text: i, qualityMessageId: a } = e,
                    n =
                      t === _.quality
                        ? (0, v.jsx)(K.Icon, { variant: "check", size: "xxs" })
                        : null,
                    l = t === _.quality;
                  return (0, v.jsx)(
                    A.pl,
                    {
                      isNested: !0,
                      isEnabled: w && !y,
                      placement: "left",
                      textVariant: "highQuality",
                      renderChildren: L({
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
              [_.quality, w, y, L],
            ),
            B = (0, x.useMemo)(
              () => ({
                listClassName: (0, h.W)(tH().root, tH().root_withNewQuality, {
                  [tH().root_withEqualizer]: f.isAvailable,
                }),
                menuClassName: (0, h.W)({ [tH().menuContent]: !y }),
              }),
              [f.isAvailable, y],
            ),
            R = (0, x.useMemo)(() => {
              if (f.isAvailable && !y)
                return (0, v.jsx)(
                  tz.Gv,
                  {
                    isExpanded: f.isEnabled,
                    isDisabled: !1,
                    className: tH().equalizer,
                    title: d({ id: "equalizer.title" }),
                  },
                  s,
                );
            }, [f.isEnabled, s, d, f.isAvailable, y]),
            V = (0, x.useCallback)(
              (e) => {
                let { isPopoverEnabled: s } = e;
                if (!y)
                  return (0, v.jsx)(C.Button, {
                    className: (0, h.W)({
                      [tH().button_active]: g.modal.isOpened,
                    }),
                    radius: "round",
                    color: "secondary",
                    size: n,
                    icon: r,
                    variant: "text",
                    onClick: g.modal.open,
                    "aria-label": d({ id: "player-actions.audio-quality" }),
                    withRipple: !1,
                    ...(0, Y.BA)(Y.QM.player.SOUND_QUALITY_BUTTON),
                  });
                let c = s ? S : t;
                return (0, v.jsx)(tF.v2, {
                  wrapperClassName: l,
                  size: n,
                  icon: r,
                  placement: a,
                  open: i,
                  onOpenChange: c,
                  ariaLabel: d({ id: "player-actions.audio-quality" }),
                  footer: R,
                  label: o,
                  variant: "text",
                  ...B,
                  containerProps: (0, Y.BA)(
                    Y.QM.player.QUALITY_SETTINGS_CONTEXT_MENU,
                  ),
                  isMobile: y,
                  lockScroll: !y,
                  ...(0, Y.BA)(Y.QM.player.SOUND_QUALITY_BUTTON),
                  children: M,
                });
              },
              [
                y,
                S,
                t,
                l,
                n,
                r,
                a,
                i,
                d,
                R,
                o,
                B,
                M,
                g.modal.open,
                g.modal.isOpened,
              ],
            );
          return (0, v.jsx)(A.Ld, {
            isEnabled: !p.isAuthorized,
            isOpened: k,
            onOpenChange: S,
            placement: "top",
            textVariant: "changeQuality",
            renderChildren: V,
          });
        }),
        t0 = (0, y.Pi)((e) => {
          var t, i, a, n;
          let { className: l, onSyncLyricsButtonClick: r } = e,
            {
              sonataState: o,
              settings: { isLandscape: s },
              fullscreenPlayer: { isSyncLyricsMode: d },
            } = (0, u.oR4)(),
            { formatMessage: c } = (0, Q.Z)(),
            [m, _] = (0, x.useState)(!1),
            p = (0, L.tz)(),
            y = (0, L.md)(),
            g = null === o.entityMeta,
            b =
              (null === (t = o.entityMeta) || void 0 === t
                ? void 0
                : t.isNonMusic) ||
              (null === (a = o.entityMeta) || void 0 === a
                ? void 0
                : null === (i = a.mainAlbum) || void 0 === i
                  ? void 0
                  : i.isNonMusic),
            f = o.canSpeed && b,
            I = (0, er.W)(() => {
              y(o);
            }),
            N = (0, er.W)(() => {
              p(o);
            }),
            k = (0, x.useMemo)(() => {
              var e;
              if (b) return;
              let t = ""
                .concat(c({ id: "interface-actions.open-sync-lyrics" }), " ")
                .concat(c({ id: "warning-messages.can-break-accessibility" }));
              return (0, v.jsx)(C.Button, {
                className: (0, h.W)(tD().syncLyricsButton, {
                  [tD().syncLyricsButton_active]: d,
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
                icon: (0, v.jsx)(K.Icon, { variant: "syncLyrics", size: "xs" }),
                onClick: r,
              });
            }, [
              c,
              b,
              d,
              r,
              s,
              null === (n = o.entityMeta) || void 0 === n
                ? void 0
                : n.isSyncLyricsAvailable,
            ]);
          return (0, v.jsx)("div", {
            className: (0, h.W)(tD().footer, l),
            children: (0, v.jsxs)("div", {
              className: tD().footerContainer,
              children: [
                (g || o.canChangeRepeatMode) &&
                  (0, v.jsx)(L.$Z, {
                    onClick: N,
                    isDisabled: g,
                    repeatMode: o.repeatMode,
                    variant: "text",
                  }),
                f && (0, v.jsx)(A.t5, { size: "xxxs", iconSize: "l" }),
                (0, v.jsx)(t$, {
                  open: m,
                  onOpenChange: _,
                  icon: (0, v.jsx)(K.Icon, { variant: "settings", size: "xs" }),
                  size: "xxxs",
                }),
                k,
                (g || o.canShuffle) &&
                  (0, v.jsx)(L.P4, {
                    onClick: I,
                    isDisabled: g,
                    shuffle: o.shuffle,
                    variant: "text",
                  }),
              ],
            }),
          });
        });
      var t5 = i(4473),
        t1 = i.n(t5);
      let t2 = {
          enter: t1().coverWrapper_enter,
          enterActive: t1().coverWrapper_enter_active,
          exit: t1().coverWrapper_exit,
          exitActive: t1().coverWrapper_exit_active,
        },
        t4 = (0, y.Pi)((e) => {
          var t;
          let { className: i } = e,
            a = (0, x.useRef)(null),
            [n, l] = (0, x.useState)(!1),
            {
              state: r,
              handleDebouncedToggle: o,
              reset: s,
            } = ea({ delay: 7e3, throttleTimeout: 0 }),
            {
              fullscreenPlayer: {
                isSplitMode: d,
                isSyncLyricsMode: c,
                showSyncLyrics: m,
                hideSyncLyrics: _,
                isPlayQueueMode: p,
                syncLyrics: y,
              },
              sonataState: { entityMeta: g },
              settings: { isLandscape: b },
              user: C,
            } = (0, u.oR4)(),
            f =
              (null == g ? void 0 : g.isTrackPodcast) ||
              (null == g
                ? void 0
                : null === (t = g.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            I = null == g ? void 0 : g.isTrackAudiobook,
            N = (r || !d || b) && !p,
            k = (0, x.useCallback)(() => {
              c && !b && (r ? s() : o());
            }, [c, r, s, o, b]),
            S = (0, x.useCallback)(() => {
              c && !b && r && o();
            }, [o, c, r, b]),
            P = (0, x.useCallback)(() => {
              if (null == g ? void 0 : g.isSyncLyricsAvailable)
                return c ? _() : m();
            }, [null == g ? void 0 : g.isSyncLyricsAvailable, _, c, m]),
            E = (0, x.useMemo)(
              () =>
                g
                  ? I
                    ? (0, v.jsx)(R.MG, {
                        textClassName: t1().metaText,
                        track: g,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !1,
                        withContextMenuArtists: !0,
                      })
                    : f
                      ? (0, v.jsx)(R.wT, {
                          textClassName: t1().metaText,
                          track: g,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                        })
                      : (0, v.jsx)(R.ko, {
                          textClassName: t1().metaText,
                          track: g,
                          withSecondaryColor: !0,
                          withAlbumLink: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                          withContextMenuArtists: !0,
                        })
                  : void 0,
              [g, I, f],
            );
          return (
            (0, x.useEffect)(() => {
              c && b && y.setInvisible();
            }, [b, c, y]),
            (0, x.useLayoutEffect)(() => {
              c && !b && o();
            }, [o, c, b]),
            (0, v.jsxs)("div", {
              onTouchEnd: S,
              className: (0, h.W)(t1().root, i),
              children: [
                (0, v.jsx)("div", {
                  className: t1().content,
                  children: (0, v.jsxs)("div", {
                    className: t1().wrapper,
                    children: [
                      (0, v.jsxs)("div", {
                        className: (0, h.W)(t1().infoBlock, {
                          [t1().infoBlock_withExpandedSyncLyrics]:
                            !r && c && !b,
                        }),
                        children: [
                          (0, v.jsxs)("div", {
                            onClick: k,
                            className: (0, h.W)(t1().contentContainer, {
                              [t1().contentContainer_withSplitMode]: d,
                            }),
                            children: [
                              c &&
                                !b &&
                                (0, v.jsx)(tp, {
                                  className: t1().syncLyrics,
                                  scrollerClassName: t1().syncLyricsScroller,
                                  contentClassName: t1().syncLyricsContent,
                                  loaderClassName: t1().syncLyricsLoader,
                                  footerClassName: t1().syncLyricsFooter,
                                  counterClassName: t1().syncLyricsCounter,
                                }),
                              p && (0, v.jsx)(eJ, {}),
                              (0, v.jsx)(tw.Z, {
                                in: !d || (b && c),
                                nodeRef: a,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: t2,
                                children: (0, v.jsx)(tS.Paper, {
                                  ref: a,
                                  radius: "m",
                                  className: t1().coverWrapper,
                                  children: (0, v.jsx)(A.BE, {
                                    className: t1().cover,
                                    src: null == g ? void 0 : g.coverUri,
                                    size: 400,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          !p &&
                            (0, v.jsxs)("div", {
                              className: t1().trackInfo,
                              children: [
                                !r &&
                                  c &&
                                  !b &&
                                  (0, v.jsx)(tS.Paper, {
                                    className: t1().trackInfoCoverContainer,
                                    radius: "xs",
                                    children: (0, v.jsx)(A.BE, {
                                      className: t1().trackInfoCover,
                                      src: null == g ? void 0 : g.coverUri,
                                      size: 200,
                                      fit: "cover",
                                      withAvatarReplace: !0,
                                    }),
                                  }),
                                (0, v.jsxs)("div", {
                                  className: t1().metaContainer,
                                  children: [
                                    E,
                                    C.isAuthorized &&
                                      !(null == g ? void 0 : g.isRemoved) &&
                                      (null == g ? void 0 : g.isAvailable) &&
                                      (0, v.jsx)(R.hz, {
                                        className: (0, h.W)(t1().contextMenu, {
                                          [t1().contextMenu_visible]: n,
                                        }),
                                        track: g,
                                        open: n,
                                        onOpenChange: l,
                                        placement: "bottom",
                                        isFullscreenMobile: !0,
                                        size: "xs",
                                        icon: (0, v.jsx)(K.Icon, {
                                          variant: "more",
                                          size: "xxs",
                                        }),
                                        ...(0, Y.BA)(
                                          Y.QM.player
                                            .FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                        ),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      N &&
                        (0, v.jsx)(el.Y, {
                          className: t1().timeline,
                          disabled: !g,
                          isMobile: !0,
                          isFullscreen: !0,
                          showThumbVariant: "always",
                        }),
                      N &&
                        (0, v.jsx)(L.WP, {
                          className: t1().buttonsBlock,
                          isMobile: !0,
                          entityMeta: g,
                          isFullscreen: !0,
                        }),
                    ],
                  }),
                }),
                N && (0, v.jsx)(t0, { onSyncLyricsButtonClick: P }),
              ],
            })
          );
        });
      var t3 = i(22392),
        t6 = i.n(t3);
      let t9 = (0, y.Pi)((e) => {
          let { children: t, className: i } = e,
            { url: a, title: n, subTitle: l } = eE(),
            { fullscreenPlayer: r } = (0, u.oR4)(),
            o = (0, er.W)((e) => {
              e.stopPropagation(), r.modal.isOpened && r.modal.close();
            }),
            s = (0, x.useMemo)(() => {
              let e = (0, v.jsx)(I.Caption, {
                variant: "span",
                size: "m",
                className: t6().title,
                lineClamp: 1,
                children: n,
              });
              return a
                ? (0, v.jsx)(A.rU, {
                    href: a,
                    target: "_self",
                    onClick: o,
                    className: t6().link,
                    children: e,
                  })
                : e;
            }, [o, n, a]);
          return (0, v.jsxs)("div", {
            className: (0, h.W)(t6().root, i),
            children: [
              (0, v.jsxs)("div", {
                className: t6().textBlock,
                children: [
                  (0, v.jsx)(I.Caption, {
                    variant: "span",
                    size: "s",
                    weight: "normal",
                    className: t6().subTitle,
                    children: l,
                  }),
                  s,
                ],
              }),
              t,
            ],
          });
        }),
        t7 = (0, y.Pi)(() => {
          let { formatMessage: e } = (0, Q.Z)(),
            {
              fullscreenPlayer: {
                modal: t,
                showPlayQueue: i,
                isPlayQueueMode: a,
                hidePlayQueue: n,
              },
            } = (0, u.oR4)(),
            l = (0, x.useCallback)(() => (a ? n() : i()), [n, a, i]);
          return (0, v.jsxs)("header", {
            className: tD().header,
            children: [
              (0, v.jsx)(C.Button, {
                radius: "round",
                color: "secondary",
                size: "s",
                variant: "text",
                icon: (0, v.jsx)(K.Icon, { variant: "arrowDown", size: "xs" }),
                onClick: t.close,
                "aria-label": e({ id: "interface-actions.close" }),
              }),
              (0, v.jsx)(t9, {
                className: tD().headerCenter,
                children: (0, v.jsx)(A.wx, {
                  title: e({ id: "player-actions.cast" }),
                  description: e({ id: "future-feature.message" }),
                  children: (0, v.jsx)(C.Button, {
                    className: tD().castButton,
                    radius: "round",
                    size: "s",
                    variant: "text",
                    disabled: !0,
                    withRipple: !1,
                    "aria-label": e({ id: "player-actions.cast" }),
                    icon: (0, v.jsx)(K.Icon, { variant: "cast", size: "xs" }),
                  }),
                }),
              }),
              (0, v.jsx)(C.Button, {
                className: (0, h.W)(tD().playQueueButton, {
                  [tD().playQueueButton_active]: a,
                }),
                radius: "round",
                size: "s",
                variant: "text",
                withRipple: !1,
                withHover: !1,
                "aria-label": e({ id: "play-queue.title" }),
                onClick: l,
                icon: (0, v.jsx)(K.Icon, { variant: "playQueue", size: "xs" }),
              }),
            ],
          });
        }),
        t8 = (0, y.Pi)(() => {
          let {
              sonataState: { entityMeta: e },
              fullscreenPlayer: t,
              advert: i,
              settings: { isMobile: a },
            } = (0, u.oR4)(),
            { theme: n } = (0, u.FgM)(),
            l = (0, x.useMemo)(
              () => ({
                "--player-average-color-background": (0, R.Er)(
                  n,
                  null == e || (window.DISABLE_PER_TRACK_COLORS?.() ?? false)
                    ? void 0
                    : e.averageColor,
                ),
              }),
              [null == e ? void 0 : e.averageColor, n],
            );
          return (
            (0, x.useEffect)(() => {
              i.isAdvertShown && t.modal.close();
            }, [i.isAdvertShown, t.modal]),
            (0, v.jsxs)(Z.u, {
              className: (0, h.W)(tD().root, tD().important),
              open: t.modal.isOpened,
              onOpenChange: t.modal.onOpenChange,
              size: "fullscreen",
              placement: "center",
              showHeader: !1,
              style: l,
              contentClassName: tD().modalContent,
              lockScroll: a,
              children: [
                (0, v.jsx)(t7, {}),
                (0, v.jsx)(t4, {}),
                (0, v.jsx)(q.Notification, {
                  className: tD().notification,
                  enableMultiContainer: !0,
                  containerId: u.W$x.FULLSCREEN_INFO,
                  position: "bottom-center",
                }),
                (0, v.jsx)(q.Notification, {
                  className: tD().notification,
                  enableMultiContainer: !0,
                  containerId: u.W$x.FULLSCREEN_ERROR,
                  position: "bottom-center",
                }),
              ],
            })
          );
        }),
        ie = (0, y.Pi)(() => {
          let {
              settings: { isMobileLandscapeHeight: e, layout: t },
            } = (0, u.oR4)(),
            i = t === u.t8m.Mobile;
          return (!i && e) || i ? (0, v.jsx)(t8, {}) : (0, v.jsx)(tV, {});
        });
      var it = i(54332),
        ii = i.n(it);
      let ia = (0, y.Pi)((e) => {
          let { advertData: t } = e,
            {
              settings: { isMobile: i },
            } = (0, u.oR4)(),
            { formatMessage: a } = (0, Q.Z)(),
            n = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
            l = (0, x.useCallback)(() => {
              window.open(t.advertiserInfoUrl, "_blank", "noreferrer noopener");
            }, [t.advertiserInfoUrl]);
          return n
            ? (0, v.jsxs)(tF.v2, {
                className: ii().contextMenuButton,
                size: "xxs",
                icon: (0, v.jsx)(K.Icon, {
                  size: "xxs",
                  variant: "more",
                  className: ii().contextMenuIcon,
                }),
                isMobile: i,
                ariaLabel: a({ id: "interface-actions.context-menu" }),
                children: [
                  t.clientLegalInfo &&
                    (0, v.jsx)(I.Caption, {
                      variant: "div",
                      size: "s",
                      className: ii().contextMenuHeader,
                      children: t.clientLegalInfo,
                    }),
                  t.advertiserInfoUrl &&
                    (0, v.jsx)(tF.sN, {
                      onClick: l,
                      icon: (0, v.jsx)(K.Icon, {
                        variant: "info",
                        size: "xxs",
                      }),
                      children: (0, v.jsx)(b.Z, { id: "ads.about-advertiser" }),
                    }),
                ],
              })
            : null;
        }),
        il = (0, y.Pi)((e) => {
          var t, i, a;
          let { className: n } = e,
            { advert: l } = (0, u.oR4)();
          return l.data && l.isAudioAdvert
            ? (0, v.jsx)("div", {
                className: n,
                children: (0, v.jsx)(S, {
                  data: l.data,
                  mediaContent: (0, v.jsxs)("div", {
                    className: ii().imageContainer,
                    children: [
                      (0, v.jsx)(f.Image, {
                        className: (0, h.W)(ii().image, {
                          [ii().image_fallback]: !(null === (t = l.data) ||
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
                      (0, v.jsx)(f.Image, {
                        className: ii().backgroundImage,
                        "aria-hidden": !0,
                        fit: "cover",
                        src:
                          null === (a = l.data) || void 0 === a
                            ? void 0
                            : a.iconSrc,
                        fallbackIconVariant: "picture",
                        alt: "",
                      }),
                      (0, v.jsx)(ia, { advertData: l.data }),
                    ],
                  }),
                  linkClassName: ii().linkButton,
                }),
              })
            : null;
        });
      var ir = i(82958),
        io = i.n(ir);
      let is = (0, y.Pi)(() => {
        let {
            settings: { isMobile: e },
            sonataState: t,
            user: i,
            quality: a,
          } = (0, u.oR4)(),
          n = (0, tz.ji)(),
          { contentRootRef: l } = (0, u.$Y6)(),
          { formatMessage: r } = (0, Q.Z)(),
          o = (0, u.uK4)(),
          { notify: s } = (0, u.d$W)(),
          d = (0, x.useId)(),
          c = (0, u.SqQ)(),
          m = o.get(u.V0J),
          _ = tQ(),
          p = (0, x.useCallback)(
            (e) => {
              _(e, t.quality),
                t.setQuality(e),
                null == c || c.setQuality(e),
                m.set(u.BUb.YmPlayerQuality, e, { expires: 365 });
            },
            [c, t, m, _],
          ),
          y = (0, x.useCallback)(
            (e) => {
              let t = r({ id: e }).toLowerCase();
              return (0, v.jsx)(b.Z, {
                id: "notifications-info.quality-changed",
                values: { quality: t },
              });
            },
            [r],
          ),
          g = (0, x.useCallback)(
            (e, i) => () => {
              if (t.quality === e) return;
              a.modal.close(), p(e);
              let n = y(i);
              s(
                (0, v.jsx)(tZ, {
                  onOpenQualitySettingsMenu: a.modal.open,
                  message: n,
                }),
                { containerId: u.W$x.INFO },
              );
            },
            [y, s, t.quality, p, a.modal],
          ),
          f = (0, er.W)((e) => {
            switch (e) {
              case tW.n.HIGH_QUALITY:
                return Y.QM.player
                  .QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
              case tW.n.BALANCED:
                return Y.QM.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
              default:
                return Y.QM.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
            }
          }),
          N = (0, x.useCallback)(
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
                return (0, v.jsx)(
                  C.Button,
                  {
                    isBlock: !0,
                    disabled: r,
                    className: (0, h.W)(
                      tH().item,
                      io().button,
                      tH().expandedItem,
                    ),
                    iconPosition: "right",
                    icon: t,
                    onClick: g(i, a),
                    role: "option",
                    "aria-selected": n,
                    variant: "text",
                    ...(0, Y.BA)(f(i)),
                    children: (0, v.jsxs)("span", {
                      className: tH().itemWrapper,
                      children: [
                        (0, v.jsxs)("span", {
                          className: tH().item_option,
                          children: [l, " ", (0, v.jsx)(tU.y, { children: o })],
                        }),
                        (0, v.jsx)("span", {
                          className: (0, h.W)(
                            tH().item_option,
                            tH().itemSubTitle,
                          ),
                          children: tJ[i],
                        }),
                      ],
                    }),
                  },
                  i,
                );
              };
            },
            [g, f],
          );
        (0, x.useEffect)(
          () => () => {
            a.modal.close();
          },
          [a.modal],
        );
        let k = !i.hasPlus,
          S = (0, x.useMemo)(
            () =>
              tX.map((i) => {
                let { type: a, text: n, qualityMessageId: l } = i,
                  r =
                    a === t.quality
                      ? (0, v.jsx)(K.Icon, { variant: "check", size: "xxs" })
                      : null,
                  o = a === t.quality;
                return (0, v.jsx)(
                  A.pl,
                  {
                    isNested: !0,
                    isEnabled: k && !e,
                    placement: "left",
                    textVariant: "highQuality",
                    renderChildren: N({
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
            [t.quality, k, e, N],
          ),
          P = (0, x.useMemo)(() => {
            if (n.isAvailable && !e)
              return (0, v.jsx)(
                tz.Gv,
                {
                  isExpanded: n.isEnabled,
                  isDisabled: !1,
                  className: (0, h.W)(
                    tH().equalizer,
                    tH().equalizer_withNewQuality,
                  ),
                  title: r({ id: "equalizer.title" }),
                },
                d,
              );
          }, [d, r, e, n.isEnabled, n.isAvailable]);
        return (0, v.jsxs)(Z.u, {
          size: "fitContent",
          placement: e ? "default" : "right",
          open: a.modal.isOpened,
          onOpenChange: a.modal.onOpenChange,
          onClose: a.modal.close,
          className: io().root,
          contentClassName: io().modalContent,
          portalNode: e ? null : l,
          showHeader: !1,
          overlayClassName: io().overlay,
          containerProps: (0, Y.BA)(Y.QM.player.QUALITY_SETTINGS_CONTEXT_MENU),
          children: [
            !e &&
              (0, v.jsxs)(I.Heading, {
                className: (0, h.W)(tH().header, tH().headerWithCloseButton),
                variant: "h4",
                size: "xs",
                weight: "bold",
                children: [
                  (0, v.jsx)(b.Z, { id: "player-actions.audio-quality" }),
                  (0, v.jsx)(C.Button, {
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, v.jsx)(K.Icon, { variant: "close", size: "xxs" }),
                    onClick: a.modal.close,
                    "aria-label": r({
                      id: "interface-actions.close-quality-settings",
                    }),
                  }),
                ],
              }),
            S,
            P,
          ],
        });
      });
      var id = i(44329),
        ic = i.n(id),
        iu = i(92853),
        im = i(9545);
      let i_ = "player-region",
        ip = (e) => {
          let { theme: t } = (0, u.FgM)();
          return {
            "--player-average-color-background": (0, R.Er)(
              t,
              null == e || (window.DISABLE_PER_TRACK_COLORS?.() ?? false)
                ? void 0
                : e.averageColor,
            ),
          };
        };
      var iv = i(41081),
        ih = i.n(iv);
      let iy = (e) => {
          let { className: t, ariaLabel: i, onClick: a, forwardRef: n } = e;
          return (0, v.jsx)("div", {
            ref: n,
            className: (0, h.W)(ih().root, t),
            children: (0, v.jsx)(C.Button, {
              className: ih().button,
              radius: "round",
              size: "s",
              color: "secondary",
              withRipple: !1,
              "aria-label": i,
              icon: (0, v.jsx)(K.Icon, { variant: "fullscreen", size: "xs" }),
              onClick: a,
              ...(0, Y.BA)(Y.QM.player.FULLSCREEN_PLAYER_BUTTON),
            }),
          });
        },
        ix = (0, x.forwardRef)((e, t) =>
          (0, v.jsx)(iy, { forwardRef: t, ...e }),
        );
      var ig = i(26760),
        ib = i.n(ig);
      let iC = (0, y.Pi)((e) => {
        var t;
        let { className: i, entityMeta: a, onLikeClick: n } = e,
          {
            user: l,
            sonataState: r,
            fullscreenPlayer: o,
            settings: { isMobileLandscapeHeight: s },
            advert: d,
          } = (0, u.oR4)(),
          [c, m] = (0, x.useState)(!1),
          [_, p] = (0, x.useState)(!1),
          { formatMessage: y } = (0, Q.Z)(),
          g = r.contextType === T.A.Generative,
          f = !g,
          N = (0, u.RVp)(),
          k = r.canSpeed && N && (null == a ? void 0 : a.isNonMusic),
          S =
            (null == a ? void 0 : a.isTrackPodcast) ||
            (null == a
              ? void 0
              : null === (t = a.mainAlbum) || void 0 === t
                ? void 0
                : t.isPodcast),
          P = null == a ? void 0 : a.isTrackAudiobook,
          E = (0, L.K4)(),
          j = ip(a),
          w = (0, x.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          M = (0, er.W)(async (e) => {
            await E(r, e);
          }),
          B = (0, er.W)((e) => {
            r.setVolume(e);
          }),
          V = (0, x.useCallback)(
            (e) => {
              let t = e.target,
                i =
                  t instanceof Element &&
                  ["DIV", "SECTION"].includes(t.tagName);
              a && f && i && !d.isAdvertShown && o.showFullscreenPlayerModal();
            },
            [a, o, f, d.isAdvertShown],
          ),
          O = (0, x.useCallback)(
            (e) => {
              let { isPopoverEnabled: t } = e,
                i = ""
                  .concat(y({ id: "interface-actions.open-sync-lyrics" }), " ")
                  .concat(
                    y({ id: "warning-messages.can-break-accessibility" }),
                  ),
                n = t ? void 0 : o.showSyncLyrics;
              return (0, v.jsx)(C.Button, {
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled:
                  !(null == a
                    ? void 0
                    : a.isSyncLyricsAvailableWithOfflineFeature) || s,
                "aria-hidden": !(null == a
                  ? void 0
                  : a.isSyncLyricsAvailableWithOfflineFeature),
                withRipple: !1,
                "aria-label": i,
                icon: (0, v.jsx)(K.Icon, { variant: "syncLyrics", size: "xs" }),
                onClick: n,
                ...(0, Y.BA)(Y.QM.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
              });
            },
            [
              y,
              o.showSyncLyrics,
              null == a ? void 0 : a.isSyncLyricsAvailableWithOfflineFeature,
              s,
            ],
          ),
          D = (0, x.useMemo)(
            () =>
              (null == a ? void 0 : a.isNonMusic) || d.isAdvertShown
                ? null
                : l.isAuthorized && !l.hasPlus
                  ? (0, v.jsx)(A.pl, {
                      placement: "top",
                      textVariant: "sync-lyrics",
                      renderChildren: O,
                    })
                  : (0, v.jsx)(A.Ld, {
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
              l.hasPlus,
            ],
          ),
          W = (0, x.useCallback)(
            (e) => {
              let { isPopoverEnabled: t } = e,
                i = t ? void 0 : o.showPlayQueue;
              return (0, v.jsx)(C.Button, {
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled: !a,
                withRipple: !1,
                "aria-label": y({ id: "play-queue.title" }),
                icon: (0, v.jsx)(K.Icon, { variant: "playQueue", size: "xs" }),
                onClick: i,
                ...(0, Y.BA)(Y.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON),
              });
            },
            [a, o.showPlayQueue, y],
          ),
          F = (0, x.useMemo)(
            () =>
              d.isAdvertShown
                ? null
                : (0, v.jsx)(A.Ld, {
                    isEnabled: !l.isAuthorized,
                    placement: "top",
                    textVariant: "openQueue",
                    renderChildren: W,
                  }),
            [d.isAdvertShown, l.isAuthorized, W],
          ),
          U = (0, x.useMemo)(
            () =>
              a
                ? P
                  ? (0, v.jsx)(R.MG, {
                      explicitSize: "xxxs",
                      track: a,
                      withAuthor: !0,
                      withBookLink: !1,
                      withSecondaryColor: !0,
                    })
                  : S
                    ? (0, v.jsx)(R.wT, {
                        explicitSize: "xxxs",
                        track: a,
                        withDate: !1,
                        withSecondaryColor: !0,
                        withPodcastName: !0,
                      })
                    : (0, v.jsx)(R.ko, {
                        track: a,
                        withSecondaryColor: !0,
                        withAlbumLink: !1,
                      })
                : null,
            [a, P, S],
          );
        return (0, v.jsxs)("section", {
          style: d.isAdvertShown ? void 0 : j,
          className: (0, h.W)(ib().root, { [ib().root_disabled]: !a }, i),
          onDoubleClick: V,
          "aria-labelledby": i_,
          ...(0, Y.BA)(Y.QM.player.PLAYERBAR_DESKTOP),
          children: [
            (0, v.jsx)(tU.y, {
              children: (0, v.jsx)(I.Heading, {
                variant: "h3",
                id: i_,
                children: (0, v.jsx)(b.Z, { id: "a11y-regions.player" }),
              }),
            }),
            (0, v.jsxs)("div", {
              className: ib().info,
              children: [
                (0, v.jsx)("div", {
                  className: ib().infoCard,
                  children:
                    a &&
                    !d.isAdvertShown &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsxs)(tS.Paper, {
                          radius: "s",
                          className: ib().coverContainer,
                          ...(0, Y.BA)(
                            Y.QM.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                          ),
                          children: [
                            (0, v.jsx)(A.BE, {
                              className: ib().cover,
                              src: a.coverUri,
                              size: 100,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                            f &&
                              (0, v.jsxs)(iu.u, {
                                placement: "top",
                                offsetOptions: 4,
                                children: [
                                  (0, v.jsx)(ix, {
                                    ariaLabel: y({
                                      id: "player-actions.fullscreen-button",
                                    }),
                                    onClick: o.showFullscreenPlayerModal,
                                  }),
                                  (0, v.jsx)(iu._v, {
                                    children: (0, v.jsx)(b.Z, {
                                      id: "player-actions.fullscreen",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, v.jsx)("div", {
                          className: ib().description,
                          children: U,
                        }),
                      ],
                    }),
                }),
                (0, v.jsx)("div", {
                  className: ib().infoButtons,
                  onDoubleClick: w,
                  children:
                    a &&
                    !g &&
                    !d.isAdvertShown &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)(A.FM, {
                          fallback: (0, v.jsx)(A.dJ, {
                            className: ib().likeButton,
                            isLiked: a.isLiked,
                            onClick: n,
                            iconSize: "xs",
                            disabled: !l.isAuthorized,
                          }),
                        }),
                        (0, v.jsx)(R.hz, {
                          track: a,
                          placement: "top",
                          open: c,
                          onOpenChange: m,
                          icon: (0, v.jsx)(K.Icon, {
                            size: "xs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, Y.BA)(
                            Y.QM.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                          ),
                        }),
                      ],
                    }),
                }),
              ],
            }),
            (0, v.jsxs)("div", {
              className: ib().sonata,
              children: [
                (0, v.jsx)(L.WP, { isMobile: !1, entityMeta: a }),
                !r.isGenerativeContext &&
                  (0, v.jsx)(el.Y, {
                    disabled: !a,
                    isMobile: !1,
                    isFullscreen: !1,
                  }),
              ],
            }),
            (0, v.jsxs)("div", {
              className: ib().meta,
              children: [
                !r.isGenerativeContext &&
                  !d.isAdvertShown &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      k && (0, v.jsx)(A.t5, { iconSize: "l" }),
                      D,
                      F,
                      (0, v.jsx)(t$, {
                        placement: "bottom",
                        open: _,
                        onOpenChange: p,
                        icon: (0, v.jsx)(K.Icon, {
                          variant: "settings",
                          size: "xs",
                        }),
                        size: "xxxs",
                        referenceClassName: ib().settingsButton,
                      }),
                    ],
                  }),
                (0, v.jsx)(im.F, {
                  sonataVolume: r.volume,
                  onVolumeSet: B,
                  onVolumeClick: M,
                }),
              ],
            }),
          ],
        });
      });
      var iI = i(15934),
        iA = i.n(iI);
      let iN = (0, y.Pi)((e) => {
        let [, forcePlayerBarRerender] = (0, x.useReducer)((x) => x + 1, 0);
        window.forcePlayerBarRerender = forcePlayerBarRerender;
        var t;
        let {
            className: i,
            entityMeta: a,
            onLikeClick: n,
            onDislikeClick: l,
          } = e,
          {
            user: r,
            sonataState: o,
            fullscreenPlayer: s,
            settings: { isMobileLandscapeHeight: d },
            advert: c,
            track: m,
          } = (0, u.oR4)(),
          [_, p] = (0, x.useState)(!1),
          [y, g] = (0, x.useState)(!1),
          { formatMessage: f } = (0, Q.Z)(),
          N = !o.isGenerativeContext,
          k = (0, u.RVp)(),
          S = o.canSpeed && k && (null == a ? void 0 : a.isNonMusic),
          P =
            (null == a ? void 0 : a.isTrackPodcast) ||
            (null == a
              ? void 0
              : null === (t = a.mainAlbum) || void 0 === t
                ? void 0
                : t.isPodcast),
          E = null == a ? void 0 : a.isTrackAudiobook,
          T = (0, L.K4)(),
          j = ip(a),
          w = (0, er.W)(() => {
            m.open({
              trackId: null == a ? void 0 : a.id,
              albumId: null == a ? void 0 : a.albumId,
            });
          }),
          M = (0, er.W)((e) => {
            e.stopPropagation();
          }),
          B = (0, er.W)(async (e) => {
            await T(o, e);
          }),
          V = (0, er.W)((e) => {
            o.setVolume(e);
          }),
          O = (0, er.W)((e) => {
            let t = e.target,
              i =
                t instanceof Element &&
                ["DIV", "SECTION", "SPAN"].includes(t.tagName);
            a && N && i && !c.isAdvertShown && s.showFullscreenPlayerModal();
          }),
          D = (0, er.W)((e) => {
            if (!o.isGenerativeContext && a) {
              if (((0, eC.m)(e, iA().ripple), 2 === e.detail)) {
                m.close(), O(e);
                return;
              }
              1 === e.detail &&
                (null == a ? void 0 : a.hasTrackLink) &&
                !s.modal.isOpened &&
                w();
            }
          }),
          W = (0, x.useCallback)(
            (e) => {
              let { isPopoverEnabled: t } = e,
                i = ""
                  .concat(f({ id: "interface-actions.open-sync-lyrics" }), " ")
                  .concat(
                    f({ id: "warning-messages.can-break-accessibility" }),
                  ),
                n = t ? void 0 : s.showSyncLyrics;
              return (0, v.jsx)(C.Button, {
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled:
                  !(null == a
                    ? void 0
                    : a.isSyncLyricsAvailableWithOfflineFeature) || d,
                "aria-hidden": !(null == a
                  ? void 0
                  : a.isSyncLyricsAvailableWithOfflineFeature),
                withRipple: !1,
                "aria-label": i,
                icon: (0, v.jsx)(K.Icon, { variant: "syncLyrics", size: "xs" }),
                onClick: n,
                ...(0, Y.BA)(Y.QM.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
              });
            },
            [
              f,
              s.showSyncLyrics,
              null == a ? void 0 : a.isSyncLyricsAvailableWithOfflineFeature,
              d,
            ],
          ),
          F = (0, x.useMemo)(
            () =>
              (null == a ? void 0 : a.isNonMusic) || c.isAdvertShown
                ? null
                : r.isAuthorized && !r.hasPlus
                  ? (0, v.jsx)(A.pl, {
                      placement: "top",
                      textVariant: "sync-lyrics",
                      renderChildren: W,
                    })
                  : (0, v.jsx)(A.Ld, {
                      isEnabled: !r.isAuthorized,
                      placement: "top",
                      textVariant: "sync-lyrics",
                      renderChildren: W,
                    }),
            [
              null == a ? void 0 : a.isNonMusic,
              c.isAdvertShown,
              r.isAuthorized,
              W,
              r.hasPlus,
            ],
          ),
          U = (0, x.useCallback)(
            (e) => {
              let { isPopoverEnabled: t } = e,
                i = t ? void 0 : s.showPlayQueue;
              return (0, v.jsx)(C.Button, {
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled: !a,
                withRipple: !1,
                "aria-label": f({ id: "play-queue.title" }),
                icon: (0, v.jsx)(K.Icon, { variant: "playQueue", size: "xs" }),
                onClick: i,
                ...(0, Y.BA)(Y.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON),
              });
            },
            [a, s.showPlayQueue, f],
          ),
          z = (0, x.useMemo)(
            () =>
              c.isAdvertShown
                ? null
                : (0, v.jsx)(A.Ld, {
                    isEnabled: !r.isAuthorized,
                    placement: "top",
                    textVariant: "openQueue",
                    renderChildren: U,
                  }),
            [c.isAdvertShown, r.isAuthorized, U],
          ),
          G = (0, x.useMemo)(() => {
            if (a && !o.isGenerativeContext && !c.isAdvertShown)
              return (0, v.jsx)("div", {
                onDoubleClick: M,
                children: (0, v.jsx)(R.hz, {
                  track: a,
                  placement: "top",
                  className: iA().trackContextMenuIcon,
                  open: _,
                  onOpenChange: p,
                  icon: (0, v.jsx)(K.Icon, { size: "xxs", variant: "more" }),
                  size: "xs",
                  ...(0, Y.BA)(
                    Y.QM.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                  ),
                }),
              });
          }, [c.isAdvertShown, a, M, _, o.isGenerativeContext]),
          Z = (0, x.useMemo)(
            () =>
              a
                ? E
                  ? (0, v.jsx)(R.MG, {
                      afterTitle: G,
                      explicitSize: "xxxs",
                      track: a,
                      withAuthor: !0,
                      withBookLink: !1,
                      withSecondaryColor: !0,
                      withContextMenuArtists: !0,
                    })
                  : P
                    ? (0, v.jsx)(R.wT, {
                        afterTitle: G,
                        explicitSize: "xxxs",
                        track: a,
                        withDate: !1,
                        withSecondaryColor: !0,
                        withPodcastName: !0,
                      })
                    : (0, v.jsx)(R.ko, {
                        afterTitle: G,
                        track: a,
                        withSecondaryColor: !0,
                        withAlbumLink: !1,
                        withContextMenuArtists: !0,
                      })
                : null,
            [G, a, E, P],
          );
        const qualityMap = {
          lq: "LQ",
          nq: "NQ",
          hq: "HQ",
          lossless: "HQ+",
        };
        const codecMap = {
          mp3: "MP3",
          "he-aac": "HE-AAC",
          aac: "AAC",
          flac: "FLAC",
          "aac-mp4": "AAC",
          "he-aac-mp4": "HE-AAC",
          "flac-mp4": "FLAC",
        };
        let theState = (0, u.R$C)();
        let [downloadProgress, setDownloadProgress] = (0, x.useState)(0);
        let [downloadInfo, setDownloadInfo] = (0, x.useState)(
          theState?.state?.queueState?.currentEntity?.value?.entity
            ?.mediaSourceData?.data,
        );
        let [realBitrate, setRealBitrate] = (0, x.useState)(null);
        let [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0,
        x.useState)(false);
        let [remoteDevice, setRemoteDevice] = (0, x.useState)(null);
        const registerYaspAudioElementListener = () => {
          const instance = window?.Ya?.YaspAudioElement?.instances?.find(
            (instance) => instance.yaspSrc,
          )
          if (!instance) {
            setTimeout(registerYaspAudioElementListener, 1000);
            return console.log("YaspAudioElement not found, retrying...");
          }

          const listener = (e) => {
            if (e.detail?.name !== "AbrDecisionChange") return;
            let bitrate = Math.round(
              (Object.values(JSON.parse(e.detail?.data?.message)?.tracks)?.[0]
                ?.bitrate ?? 0) / 1000,
            );

            setRealBitrate(bitrate);
          };

          if (Array.from(instance?.yaspEventListeners).find(
            (connectedListener) =>
              connectedListener.toString() === listener.toString(),
            )
          ) {

            instance.removeEventListener("yasp-event", listener);

            console.log("Removed listener on YaspAudioElement");
          }

          console.log("Registered listener on YaspAudioElement");
          instance.addEventListener("yasp-event", listener);
        };
        registerYaspAudioElementListener();
        let onDownloadClick = (0, x.useCallback)(() => {
          if (!downloadInfo?.quality) return;
          electronBridge.sendDownloadTrack({
            downloadURL: downloadInfo?.url,
            codec: downloadInfo?.codec,
            bitrate: downloadInfo?.bitrate,
            trackId: downloadInfo?.trackId,
            transport: downloadInfo?.transport,
            key: downloadInfo?.key,
            track: {
              title: a.title ? JSON.parse(JSON.stringify(a.title)) : undefined,
              artists: a.artists
                ? JSON.parse(JSON.stringify(a.artists))
                : undefined,
              albums: a.albums
                ? JSON.parse(JSON.stringify(a.albums))
                : undefined,
              coverUri: a.coverUri
                ? JSON.parse(JSON.stringify(a.coverUri))
                : undefined,
            },
          });
        }, [a, downloadInfo]);
        return (
          (0, x.useEffect)(() => {
            window.desktopEvents.on(
              "PROGRESS_BAR_CHANGE",
              (e, elementType, progress) => {
                if (elementType === "trackDownloadCurrent") {
                  setDownloadProgress(progress);
                }
              },
            );
            window.onRemoteDeviceConnected.push((device_info) => {
              setIsRemoteDeviceConnected(true);
              setRemoteDevice(device_info);
              window.isRemoteDeviceConnected = true;
              window.remoteDevice = device_info;
            });
            window.onRemoteDeviceDisconnected.push(() => {
              setIsRemoteDeviceConnected(false);
              setRemoteDevice(null);
              window.isRemoteDeviceConnected = false;
              window.remoteDevice = null;
            });
          }, []),
          (0, x.useEffect)(() => {
            let intervalId;

            const unsubscribe =
            theState.state.queueState.currentEntity.onChange(() => {
              const data = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;

              const dataString = JSON.stringify(data);
              const downloadInfoString = JSON.stringify(downloadInfo);

              if (dataString !== downloadInfoString) {
                if (data === undefined) {
                  let retries = 5;
                  intervalId = setInterval(() => {
                    const rerequestedData = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
                    if ((retries <= 0) || (rerequestedData !== undefined)) {
                      setDownloadInfo(rerequestedData);
                      clearInterval(intervalId);
                    }
                  }, 200)
                } else {
                  setDownloadInfo(data);
                }

              }
            });

            const data = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
            if (data) {
              setDownloadInfo(data);
            }

            return () => {
              if (intervalId) clearInterval(intervalId);
              if (typeof unsubscribe === "function") unsubscribe();
            };
          }),
          (0, v.jsx)("section", {
            style: c.isAdvertShown ? void 0 : j,
            className: (0, h.W)(iA().root, iA().important, i),
            ...(0, Y.BA)(Y.QM.player.PLAYERBAR_DESKTOP),
            "aria-labelledby": i_,
            children: (0, v.jsxs)("div", {
              className: iA().playerBar,
              children: [
                !o.isGenerativeContext &&
                  (0, v.jsx)(el.d, {
                    sliderClassName: iA().slider,
                    progressbarClassName: iA().progressBar,
                    disabled: !a,
                    isMobile: !1,
                  }),
                (0, v.jsxs)("div", {
                  className: (0, h.W)(iA().player, {
                    [iA().player_disabled]: !a,
                  }),
                  children: [
                    (0, v.jsx)("div", {
                      onClick: D,
                      className: iA().triggerModal,
                    }),
                    (0, v.jsx)(tU.y, {
                      children: (0, v.jsx)(I.Heading, {
                        variant: "h3",
                        id: i_,
                        children: (0, v.jsx)(b.Z, {
                          id: "a11y-regions.player",
                        }),
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: iA().info,
                      children: (0, v.jsx)("div", {
                        className: iA().infoCard,
                        children:
                          a &&
                          !c.isAdvertShown &&
                          (0, v.jsxs)(v.Fragment, {
                            children: [
                              (0, v.jsxs)(tS.Paper, {
                                radius: "s",
                                className: iA().coverContainer,
                                ...(0, Y.BA)(
                                  Y.QM.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                                ),
                                children: [
                                  (0, v.jsx)(A.BE, {
                                    className: iA().cover,
                                    src: a.coverUri,
                                    size: 100,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                  N &&
                                    (0, v.jsxs)(iu.u, {
                                      placement: "top",
                                      offsetOptions: 4,
                                      children: [
                                        (0, v.jsx)(ix, {
                                          ariaLabel: f({
                                            id: "player-actions.fullscreen-button",
                                          }),
                                          onClick: s.showFullscreenPlayerModal,
                                        }),
                                        (0, v.jsx)(iu._v, {
                                          children: (0, v.jsx)(b.Z, {
                                            id: "player-actions.fullscreen",
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, v.jsx)("div", {
                                className: iA().description,
                                children: Z,
                              }),
                            ],
                          }),
                      }),
                    }),
                    (0, v.jsxs)("div", {
                      className: iA().sonata,
                      children: [
                        window.SHOW_DISLIKE_BUTTON()
                          ? (0, v.jsx)(A.FM, {
                              fallback: (0, v.jsx)(A.Q1, {
                                disabled:
                                  !a ||
                                  o.isGenerativeContext ||
                                  c.isAdvertShown,
                                isDisliked: null == a ? void 0 : a.isDisliked,
                                onClick: l,
                                iconSize: "xs",
                              }),
                            })
                          : (0, v.jsx)(A.FM, {
                              fallback: (0, v.jsx)(A.dJ, {
                                disabled:
                                  !a ||
                                  o.isGenerativeContext ||
                                  c.isAdvertShown,
                                isLiked: null == a ? void 0 : a.isLiked,
                                onClick: n,
                                iconSize: "xs",
                              }),
                            }),
                        (0, v.jsx)(L.WP, {
                          className: (0, h.W)(
                            iA().sonataControls,
                            iA().important,
                          ),
                          withRepeat: !0,
                          withShuffle: !0,
                          isMobile: !1,
                          entityMeta: a,
                        }),
                        window.SHOW_DISLIKE_BUTTON()
                          ? (0, v.jsx)(A.FM, {
                              fallback: (0, v.jsx)(A.dJ, {
                                disabled:
                                  !a ||
                                  o.isGenerativeContext ||
                                  c.isAdvertShown,
                                isLiked: null == a ? void 0 : a.isLiked,
                                onClick: n,
                                iconSize: "xs",
                              }),
                            })
                          : (0, v.jsx)(A.FM, {
                              fallback: (0, v.jsx)(A.Q1, {
                                disabled:
                                  !a ||
                                  o.isGenerativeContext ||
                                  c.isAdvertShown,
                                isDisliked: null == a ? void 0 : a.isDisliked,
                                onClick: l,
                                iconSize: "xs",
                              }),
                            }),
                        isRemoteDeviceConnected &&
                          (0, v.jsxs)("div", {
                            style: {
                              position: "absolute",
                              bottom: 0,
                              color:
                                "var(--ym-controls-color-primary-default-enabled)",
                              "font-size": "small",
                            },
                            children: [
                              (0, v.jsxs)("span", {
                                children: `Подключён удалённый плеер: ${remoteDevice?.info?.title}`,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, v.jsxs)("div", {
                      className: iA().meta,
                      children: [
                        !o.isGenerativeContext &&
                          !c.isAdvertShown &&
                          (0, v.jsxs)(v.Fragment, {
                            children: [
                              S && (0, v.jsx)(A.t5, { iconSize: "l" }),
                              F,
                              z,
                              (0, v.jsx)(A.wx, {
                                title: "Скачать трек в файл",
                                description:
                                  window?.DEVICE_INFO?.os === "win32"
                                    ? downloadInfo?.quality
                                      ? "Скачать трек в читаемый файл на вашем ПК"
                                      : "Не удалось получить данные о треке"
                                    : "Пока не доступно на вашей OS",
                                children: (0, v.jsxs)("button", {
                                  disabled:
                                    !downloadInfo?.quality ||
                                    window?.DEVICE_INFO?.os !== "win32",
                                  className: `cpeagBA1_PblpJn8Xgtv UDMYhpDjiAFT3xUx268O ${
                                    !downloadInfo?.quality ||
                                    window?.DEVICE_INFO?.os !== "win32"
                                      ? ""
                                      : "HbaqudSqu7Q3mv3zMPGr"
                                  } qU2apWBO1yyEK0lZ3lPO`,
                                  style: {
                                    display: "flex",
                                    "flex-direction": "column",
                                    gap: "2px",
                                    "align-self": "center",
                                    "padding-top": "5px",
                                    "padding-inline": "2px",
                                  },
                                  children: [
                                    (0, v.jsxs)("span", {
                                      className: "JjlbHZ4FaP9EAcR_1DxF",
                                      children: (0, v.jsx)(K.Icon, {
                                        variant: "download",
                                        size: "xxs",
                                        style: {
                                          width: "24px",
                                          height: "24px",
                                        },
                                      }),
                                    }),
                                    (0, v.jsxs)("div", {
                                      style: {
                                        "background-color":
                                          "var(--ym-controls-color-secondary-text-enabled)",
                                        width: `${downloadProgress === -100 ? 0 : downloadProgress}%`,
                                        transition:
                                          downloadProgress >= 0 &&
                                          downloadProgress < 100
                                            ? "width 0.3s"
                                            : "width 0.3s, opacity 0.3s linear 0.5s",
                                        opacity:
                                          downloadProgress >= 0 &&
                                          downloadProgress < 100
                                            ? "1"
                                            : "0",
                                        height: "2px",
                                        "border-radius": "10px",
                                      },
                                    }),
                                  ],
                                  onClick: onDownloadClick,
                                }),
                              }),
                              (0, v.jsx)(A.wx, {
                                title: "Качество трека",
                                description: downloadInfo?.quality
                                  ? `${qualityMap[downloadInfo?.quality]}: ${codecMap[downloadInfo?.codec]}` +
                                    (downloadInfo?.bitrate
                                      ? `-${downloadInfo?.bitrate}`
                                      : "") +
                                    (downloadInfo?.codec !== "mp3" &&
                                    realBitrate
                                      ? ` ${realBitrate} kbps`
                                      : "")
                                  : "Не удалось получить качество трека",
                                children: (0, v.jsxs)("div", {
                                  className:
                                    "cpeagBA1_PblpJn8Xgtv HbaqudSqu7Q3mv3zMPGr",
                                  children: (0, v.jsx)(t$, {
                                    placement: "bottom",
                                    open: y,
                                    onOpenChange: b,
                                    icon: (
                                      window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK()
                                        ? codecMap[downloadInfo?.codec]
                                        : qualityMap[downloadInfo?.quality]
                                    )
                                      ? (0, v.jsxs)("span", {
                                          className: ib().settingsButton,
                                          style: {
                                            width: "auto",
                                            height: "auto",
                                            "align-content": "center",
                                          },
                                          children:
                                            (window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK()
                                              ? codecMap[downloadInfo?.codec]
                                              : qualityMap[
                                                  downloadInfo?.quality
                                                ]) ?? "NONE",
                                        })
                                      : (0, v.jsx)(K.Icon, {
                                          variant: "settings",
                                          size: "xs",
                                        }),
                                    size: "xxxs",
                                    referenceClassName: ib().settingsButton,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        (0, v.jsx)(im.F, {
                          variant: im.E.VERTICAL,
                          sonataVolume: o.volume,
                          onVolumeSet: V,
                          onVolumeClick: B,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      });
      var ik = i(13896),
        iS = i.n(ik);
      let iP = (0, y.Pi)((e) => {
          var t;
          let { className: i, entityMeta: a, onLikeClick: n } = e,
            {
              user: l,
              sonataState: r,
              fullscreenPlayer: o,
              advert: s,
              experiments: d,
            } = (0, u.oR4)(),
            c = r.contextType === T.A.Generative,
            m = l.isAuthorized && !c,
            _ =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            p = null == a ? void 0 : a.isTrackAudiobook,
            y = d.checkExperiment(
              u.peG.WebNextPlayerBarBackgroundProgress,
              "on",
            ),
            g = ip(a),
            C = (0, x.useCallback)(
              (e) => {
                if (s.isAdvertShown) return;
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION", "IMG"].includes(t.tagName);
                a && i && !c && o.showFullscreenPlayerModal();
              },
              [a, o, c, s.isAdvertShown],
            ),
            f = (0, x.useMemo)(
              () =>
                s.isAdvertShown || !a
                  ? null
                  : p
                    ? (0, v.jsx)(R.MG, {
                        explicitSize: "xxxs",
                        track: a,
                        withAuthor: !0,
                        withBookLink: !1,
                        withSecondaryColor: !0,
                        withArtistLink: !1,
                      })
                    : _
                      ? (0, v.jsx)(R.wT, {
                          explicitSize: "xxxs",
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                          withAlbumTitleLink: !1,
                        })
                      : (0, v.jsx)(R.ko, {
                          withArtistLink: !1,
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !1,
                        }),
              [s.isAdvertShown, a, p, _],
            );
          return (0, v.jsxs)("section", {
            style: s.isAdvertShown ? void 0 : g,
            className: (0, h.W)(iS().root, i),
            onClick: C,
            children: [
              (0, v.jsx)(tU.y, {
                children: (0, v.jsx)(I.Heading, {
                  variant: "h3",
                  id: i_,
                  children: (0, v.jsx)(b.Z, { id: "a11y-regions.player" }),
                }),
              }),
              !r.isGenerativeContext &&
                (0, v.jsx)(el.Y, {
                  className: (0, h.W)({
                    [iS().progressBar]: !y,
                    [iS().backgroundProgress]: y,
                  }),
                  sliderClassName: (0, h.W)({
                    [iS().progressBar]: !y,
                    [iS().sliderChangeTimdeCode]: y,
                  }),
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !a,
                }),
              (0, v.jsxs)("div", {
                className: iS().info,
                children: [
                  a && !s.isAdvertShown
                    ? (0, v.jsxs)("div", {
                        className: iS().infoCard,
                        children: [
                          (0, v.jsx)(tS.Paper, {
                            radius: "s",
                            className: iS().coverContainer,
                            children: (0, v.jsx)(A.BE, {
                              className: iS().cover,
                              src: a.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, v.jsx)("div", {
                            className: iS().description,
                            children: f,
                          }),
                        ],
                      })
                    : (0, v.jsx)("div", { className: iS().infoCard }),
                  (0, v.jsxs)("div", {
                    className: iS().infoButtons,
                    children: [
                      a &&
                        m &&
                        !s.isAdvertShown &&
                        (0, v.jsx)(A.FM, {
                          fallback: (0, v.jsx)(A.dJ, {
                            isLiked: a.isLiked,
                            iconSize: "xs",
                            onClick: n,
                            disabled: !l.isAuthorized,
                          }),
                        }),
                      (0, v.jsx)(L.WP, { isMobile: !0, entityMeta: a }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        iE = (0, y.Pi)((e) => {
          let { className: t } = e,
            {
              settings: { isMobile: i },
              sonataState: a,
              fullscreenPlayer: n,
              experiments: l,
            } = (0, u.oR4)(),
            r = (0, u.XUT)(),
            o = l.checkExperiment(
              u.peG.WebNextPlayerBarBackgroundProgress,
              "on",
            ),
            s = (0, V.SB)(a.entityMeta),
            d = (0, V.KX)(a.entityMeta),
            c = (0, er.W)(() => {
              if (a.entityMeta) {
                if (n.modal.isOpened) {
                  n.modal.close();
                  return;
                }
                n.modal.open();
              }
            });
          return (
            (0, x.useEffect)(() => {
              if (!a.isGenerativeContext)
                return (
                  null == r ||
                    r.addShortcutsListener(
                      u.Pwk.MAIN,
                      u.yxF.TOGGLE_FULLSCREEN_PLAYER,
                      c,
                    ),
                  null == r ||
                    r.addShortcutsListener(u.Pwk.MAIN, u.yxF.LIKE, s),
                  null == r ||
                    r.addShortcutsListener(u.Pwk.MAIN, u.yxF.DISLIKE, d),
                  () => {
                    null == r ||
                      r.removeShortcutsListener(
                        u.Pwk.MAIN,
                        u.yxF.TOGGLE_FULLSCREEN_PLAYER,
                      ),
                      null == r ||
                        r.removeShortcutsListener(u.Pwk.MAIN, u.yxF.LIKE),
                      null == r ||
                        r.removeShortcutsListener(u.Pwk.MAIN, u.yxF.DISLIKE);
                  }
                );
            }, [d, s, r, a.isGenerativeContext, a.entityMeta, c]),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(i ? iP : o ? iN : iC, {
                  onDislikeClick: d,
                  onLikeClick: s,
                  entityMeta: a.entityMeta,
                  className: (0, h.W)(t, ic().root),
                }),
                (0, v.jsx)(il, { className: ic().adPopup }),
                (0, v.jsx)(is, {}),
              ],
            })
          );
        }),
        iT = (0, y.Pi)((e) => {
          let { entityMeta: t, onLikeClick: i, className: a } = e,
            {
              promolanding: { state: n },
            } = (0, u.oR4)(),
            l = ip(t),
            r = (0, L.K4)(),
            o = (0, er.W)(async (e) => {
              await r(n, e, u.jiA.PROMO_LANDING);
            }),
            s = (0, er.W)((e) => {
              n.setVolume(e);
            }),
            d = (0, ep.V)(() =>
              t
                ? (0, v.jsx)(R.ko, {
                    track: t,
                    withSecondaryColor: !0,
                    withAlbumLink: !1,
                    withTrackLink: !1,
                    withArtistLink: !1,
                  })
                : null,
            );
          return (0, v.jsxs)("section", {
            style: l,
            className: (0, h.W)(ib().root, a),
            "aria-labelledby": i_,
            children: [
              (0, v.jsx)(tU.y, {
                children: (0, v.jsx)(I.Heading, {
                  variant: "h3",
                  id: i_,
                  children: (0, v.jsx)(b.Z, { id: "a11y-regions.player" }),
                }),
              }),
              t &&
                (0, v.jsxs)("div", {
                  className: ib().info,
                  children: [
                    (0, v.jsxs)("div", {
                      className: ib().infoCard,
                      children: [
                        (0, v.jsx)(tS.Paper, {
                          radius: "s",
                          className: ib().coverContainer,
                          children: (0, v.jsx)(A.BE, {
                            className: ib().cover,
                            src: t.coverUri,
                            size: 100,
                            fit: "cover",
                            withAvatarReplace: !0,
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: ib().description,
                          children: d,
                        }),
                      ],
                    }),
                    (0, v.jsx)("div", {
                      className: ib().infoButtons,
                      children: (0, v.jsx)(A.dJ, {
                        className: ib().likeButton,
                        isLiked: t.isLiked,
                        onClick: i,
                        iconSize: "xs",
                      }),
                    }),
                  ],
                }),
              (0, v.jsxs)("div", {
                className: ib().sonata,
                children: [
                  (0, v.jsx)(L.lj, { isMobile: !1, entityMeta: t }),
                  (0, v.jsx)(el.Y, {
                    disabled: !t,
                    isMobile: !1,
                    isFullscreen: !1,
                    sonataPlaybackId: u.jiA.PROMO_LANDING,
                  }),
                ],
              }),
              (0, v.jsx)("div", {
                className: ib().meta,
                children: (0, v.jsx)(im.F, {
                  sonataVolume: n.volume,
                  onVolumeSet: s,
                  onVolumeClick: o,
                  playbackId: u.jiA.PROMO_LANDING,
                }),
              }),
            ],
          });
        }),
        ij = (0, y.Pi)((e) => {
          let { onLikeClick: t, entityMeta: i, className: a } = e,
            n = ip(i),
            l = (0, ep.V)(() =>
              i
                ? (0, v.jsx)(R.ko, {
                    track: i,
                    withSecondaryColor: !0,
                    withAlbumLink: !1,
                    withTrackLink: !1,
                    withArtistLink: !1,
                  })
                : null,
            );
          return (0, v.jsxs)("section", {
            style: n,
            className: (0, h.W)(iS().root, a),
            children: [
              (0, v.jsx)(tU.y, {
                children: (0, v.jsx)(I.Heading, {
                  variant: "h3",
                  id: i_,
                  children: (0, v.jsx)(b.Z, { id: "a11y-regions.player" }),
                }),
              }),
              (0, v.jsx)(el.Y, {
                className: iS().progressBar,
                sliderClassName: iS().progressBar,
                isMobile: !0,
                isFullscreen: !1,
                disabled: !i,
                sonataPlaybackId: u.jiA.PROMO_LANDING,
              }),
              (0, v.jsxs)("div", {
                className: iS().info,
                children: [
                  i &&
                    (0, v.jsxs)("div", {
                      className: iS().infoCard,
                      children: [
                        (0, v.jsx)(tS.Paper, {
                          radius: "s",
                          className: iS().coverContainer,
                          children: (0, v.jsx)(A.BE, {
                            className: iS().cover,
                            src: i.coverUri,
                            size: 50,
                            fit: "cover",
                            withAvatarReplace: !0,
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: iS().description,
                          children: l,
                        }),
                      ],
                    }),
                  (0, v.jsxs)("div", {
                    className: iS().infoButtons,
                    children: [
                      i &&
                        (0, v.jsx)(A.dJ, {
                          isLiked: i.isLiked,
                          iconSize: "xs",
                          onClick: t,
                        }),
                      (0, v.jsx)(L.lj, { isMobile: !0, entityMeta: i }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        iL = (0, y.Pi)((e) => {
          let { className: t } = e,
            {
              settings: { isMobile: i },
              promolanding: { state: a },
            } = (0, u.oR4)(),
            n = (0, u.XUT)(),
            l = (0, V.yv)(a.entityMeta);
          (0, x.useEffect)(
            () => (
              null == n ||
                n.addShortcutsListener(u.Pwk.PROMO_LANDING, u.yxF.LIKE, l),
              () => {
                null == n ||
                  n.removeShortcutsListener(u.Pwk.PROMO_LANDING, u.yxF.LIKE);
              }
            ),
            [l, n],
          );
          let r = (0, ep.V)(() => (i ? ij : iT));
          return (0, v.jsx)(r, {
            onLikeClick: l,
            entityMeta: a.entityMeta,
            className: (0, h.W)(ic().root, t),
          });
        });
      var iw = i(87660),
        iM = i(17100),
        iB = i.n(iM);
      let iR = (0, y.Pi)((e) => {
        let { className: t } = e,
          { advert: i, user: a } = (0, u.oR4)(),
          { notify: n, dismiss: l } = (0, u.d$W)(),
          { formatMessage: r } = (0, Q.Z)(),
          s = (0, u.XUT)(),
          d = (0, u.ozq)(),
          [c, m] = (0, x.useState)(!1),
          { openPaymentWidgetModal: _, isPaymentWidgetModalOpened: p } = (0,
          iw.xU)({ storeName: "music" }),
          y = (0, x.useCallback)(
            (e) => {
              e.stopPropagation(),
                e.preventDefault(),
                _(),
                m(!0),
                null == d || d.pauseVideoAdvert(),
                l();
            },
            [_, d, l],
          );
        (0, x.useEffect)(() => {
          c && !p && (m(!1), null == d || d.resumeVideoAdvert());
        }, [d, p, c]);
        let g = (0, x.useCallback)(() => {
          n(
            (0, v.jsx)(A.Yj, {
              className: iB().notify,
              message: (0, v.jsx)(I.Caption, {
                className: iB().text,
                variant: "div",
                type: "controls",
                size: "m",
                children: (0, v.jsx)(b.Z, { id: "ads.notification" }),
              }),
              cover: (0, v.jsx)(K.Icon, {
                className: iB().icon,
                variant: "plusColor",
              }),
              coverRadius: "round",
              withDefaultCloseButton: !1,
              coverClassName: (0, h.W)(iB().cover, iB().important),
              closeButton: (0, v.jsx)(C.Button, {
                className: iB().notifyClose,
                variant: "text",
                color: "primary",
                size: "xxs",
                onClick: y,
                withRipple: !1,
                children: (0, v.jsx)(b.Z, { id: "ads.disable-ads" }),
              }),
            }),
            { containerId: u.W$x.AD_INFO },
          );
        }, [y, n]);
        if (
          ((0, x.useEffect)(() => {
            if (!a.hasPlus)
              return (
                null == s ||
                  s.addShortcutsListener(u.Pwk.MAIN, u.yxF.CLOSE, () => {
                    i.isAdvertShown && i.isVideoAdvert && g();
                  }),
                () => {
                  null == s ||
                    s.removeShortcutsListener(u.Pwk.MAIN, u.yxF.CLOSE);
                }
              );
          }, [g, s, i.isAdvertShown, i.isVideoAdvert, a.hasPlus]),
          a.hasPlus)
        )
          return;
        let f = i.isAdvertShown && i.isVideoAdvert;
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(Z.u, {
              className: (0, h.W)(iB().root, { [iB().root_hidden]: !f }, t),
              contentClassName: iB().content,
              placement: "center",
              showHeader: !1,
              closeOnOutsidePress: !1,
              escapeKey: !1,
              withOverlay: f,
              open: !0,
              lockScroll: f,
              overlayColor: "full",
              disableGuards: !f,
              disableFocusTrap: !f,
              ...(0, Y.BA)(Y.QM.ad.VIDEO_AD),
              children: (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)(C.Button, {
                    className: iB().close,
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, v.jsx)(K.Icon, { variant: "close", size: "xxs" }),
                    onClick: g,
                    "aria-label": r({ id: "interface-actions.close-ad" }),
                    withRipple: !1,
                  }),
                  (0, v.jsx)(S, {
                    data: i.data,
                    mediaContent: (0, v.jsx)("div", {
                      className: iB().videoBlock,
                      id: o.SLOT,
                      children: (0, v.jsx)("video", {
                        id: o.VIDEO,
                        className: iB().video,
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, v.jsx)(q.Notification, {
              enableMultiContainer: !0,
              containerId: u.W$x.AD_INFO,
              position: "bottom-center",
            }),
          ],
        });
      });
    },
    75721: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return eM;
        },
        L: function () {
          return A;
        },
      });
      var a,
        n,
        l = i(37285),
        r = i(22874),
        o = i(62726),
        s = i(26614),
        d = i(98375),
        c = i(13534),
        u = i(40892),
        m = i(64353);
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
        p = (e) => {
          var t, i;
          return (0, r.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        v = (e) => {
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
        h = (e) => {
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
      var y = i(1150);
      let x = (e, t) => {
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
      let g = r.V5.model("TrailerMeta", {
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
      var b = i(84638),
        C = i(54306);
      let f = r.V5.model("TrailerState", {
          contextType: r.V5.maybeNull(r.V5.enumeration(Object.values(b.A))),
          contextId: r.V5.maybeNull(r.V5.string),
          entityMeta: r.V5.maybeNull(C.s$),
          status: r.V5.enumeration(Object.values(d.FY)),
        }).actions((e) => ({
          setContextId: (t) => {
            e.contextId = String(t);
          },
          setContextType: (t) => {
            e.contextType = t;
          },
          setEntityMeta: (t) => {
            t && t.data.meta && (e.entityMeta = (0, C.B5)(t));
          },
          setStatus: (t) => {
            e.status = t;
          },
        })),
        I = y.le
          .props({
            isBest: r.V5.maybe(r.V5.boolean),
            positionInAlbum: r.V5.maybe(r.V5.number),
          })
          .named("TrailerTrack"),
        A = r.V5.compose(
          r.V5.model("Trailer", {
            id: r.V5.maybeNull(r.V5.string),
            errorStatusCode: r.V5.maybeNull(r.V5.number),
            modal: u.KL,
            variant: r.V5.maybeNull(r.V5.enumeration(Object.values(n))),
            tracks: r.V5.maybeNull(r.V5.array(I)),
            meta: r.V5.maybeNull(g),
            state: f,
            withAnimation: r.V5.boolean,
            shouldAutoStartPlaying: r.V5.boolean,
            shouldSendEventOnTracksShowed: r.V5.boolean,
            sonataStatusBeforeTrailerStart: r.V5.enumeration(
              Object.values(d.FY),
            ),
            isManuallyPaused: r.V5.boolean,
            utmLinkModel: r.V5.maybe(c.db6),
            title: r.V5.maybeNull(r.V5.string),
            shareable: r.V5.maybeNull(r.V5.boolean),
            personalColor: r.V5.maybeNull(r.V5.number),
          }),
          u.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === c.Gui.PENDING;
            },
            get isNotFound() {
              var t;
              let i =
                  e.loadingState === c.Gui.RESOLVE &&
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
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { artist: t, trailer: n } = yield a.getTrailer({
                      artistId: i,
                    });
                    n.tracks &&
                      (e.tracks = (0, r.pj)(
                        n.tracks.map((e) => x(e, { isSmartPreview: !0 })),
                      )),
                      n.title && (e.title = n.title),
                      t && (e.meta = p(t)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, r.ls)(function* (i) {
                let { albumResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let {
                      album: t,
                      artists: n,
                      trailer: l,
                    } = yield a.getTrailer({ albumId: i });
                    l.tracks &&
                      (e.tracks = (0, r.pj)(
                        l.tracks.map((e) =>
                          x(e, { isSmartPreview: !0, albumId: t.id }),
                        ),
                      )),
                      l.title && (e.title = l.title),
                      t && (e.meta = _(t, n)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, r.ls)(function* (i) {
                let { usersResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { uid: t, kind: n } = (0, s.b)(i);
                    if (!t || !n) {
                      e.loadingState = c.Gui.REJECT;
                      return;
                    }
                    let {
                      playlist: l,
                      trailer: o,
                      shareable: d,
                      personalColor: u,
                    } = yield a.getPlaylistTrailer({
                      userId: t,
                      playlistKind: Number(n),
                    });
                    o.tracks &&
                      (e.tracks = (0, r.pj)(
                        o.tracks.map((e) => x(e, { isSmartPreview: !0 })),
                      )),
                      o.title && (e.title = o.title),
                      d && (e.shareable = d),
                      u && (e.personalColor = u),
                      l && (e.meta = v(l)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, r.ls)(function* (i) {
                let { tracksResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { track: t, title: n } = yield a.getTrailer({
                      trackId: i,
                    });
                    n && (e.title = n),
                      t &&
                        ((e.tracks = (0, r.pj)([x(t, { isSmartPreview: !0 })])),
                        (e.meta = h(t))),
                      (e.loadingState = c.Gui.RESOLVE);
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
                  e.loadingState !== c.Gui.IDLE &&
                    (e.loadingState = c.Gui.REJECT);
              },
              reset() {
                (e.loadingState = c.Gui.IDLE),
                  (e.errorStatusCode = null),
                  (e.variant = null),
                  (e.id = null),
                  (e.tracks = null),
                  (e.meta = null),
                  (e.withAnimation = !0),
                  (e.shouldAutoStartPlaying = !0),
                  (e.shouldSendEventOnTracksShowed = !0),
                  (e.sonataStatusBeforeTrailerStart = d.FY.IDLE),
                  (e.isManuallyPaused = !0),
                  (e.title = null),
                  (e.shareable = null),
                  (e.personalColor = null);
              },
            };
            return t;
          });
      var N = i(75441),
        k = i(62569),
        S = i(65067),
        P = i(9317),
        E = i(35846),
        T = i(68208),
        j = i(69756),
        L = i(59506),
        w = i(4875);
      let M = () => {
        let e = (0, c.z$f)(),
          t = (0, c.wLl)(),
          { hash: i } = (0, c.RQn)(),
          { pageId: a } = (0, c.lVB)();
        return (0, S.useCallback)(
          (n) => {
            if (!e || !a) return;
            let l = {
                hash: i,
                pageId: c.x3Y[a],
                mainObjectType: w.OB.Trailer,
                mainObjectId: n,
              },
              r = (0, c.KOr)({ params: l, logger: t, context: M.name });
            r && (0, w.IA)(e.evgenInstance, r);
          },
          [e, i, t, a],
        );
      };
      var B = i(32399);
      let R = () => {
        let { trailer: e } = (0, c.oR4)(),
          t = (0, c.R$C)(),
          i = (0, c.XUT)(),
          a = (0, B.SB)(e.state.entityMeta),
          n = (0, B.KX)(e.state.entityMeta);
        (0, S.useEffect)(() => {
          e.modal.isOpened
            ? (null == i || i.disable(c.Pwk.MAIN),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.TOGGLE_MUTE),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.INCREASE_VOLUME),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.DECREASE_VOLUME),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.TOGGLE_FULLSCREEN_PLAYER),
              null == i || i.enable(c.Pwk.TRAILER))
            : (null == i || i.disable(c.Pwk.TRAILER),
              null == i || i.enable(c.Pwk.MAIN));
        }, [i, e.modal.isOpened]),
          (0, S.useEffect)(
            () => (
              null == i ||
                i.addShortcutsListener(c.Pwk.TRAILER, c.yxF.TOGGLE_PLAY, () => {
                  null == t || t.togglePause(c.jiA.TRAILER);
                }),
              null == i || i.addShortcutsListener(c.Pwk.TRAILER, c.yxF.LIKE, a),
              null == i ||
                i.addShortcutsListener(c.Pwk.TRAILER, c.yxF.DISLIKE, n),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.MOVE_FORWARD,
                  async () => {
                    var e;
                    (null == t
                      ? void 0
                      : null ===
                            (e = t.getState(c.jiA.TRAILER).currentContext
                              .value) || void 0 === e
                        ? void 0
                        : e.availableActions.moveForward.value) &&
                      (await (null == t
                        ? void 0
                        : t.moveForward(c.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.MOVE_BACKWARD,
                  async () => {
                    var e;
                    (null == t
                      ? void 0
                      : null ===
                            (e = t.getState(c.jiA.TRAILER).currentContext
                              .value) || void 0 === e
                        ? void 0
                        : e.availableActions.moveBackward.value) &&
                      (await (null == t
                        ? void 0
                        : t.moveBackward(c.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.SLIDE_FORWARD,
                  async () => {
                    (null == t
                      ? void 0
                      : t.getState(c.jiA.TRAILER).playerState.progress.value
                          .duration) &&
                      (await (null == t
                        ? void 0
                        : t.slideForward(1, c.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.SLIDE_BACKWARD,
                  async () => {
                    (null == t
                      ? void 0
                      : t.getState(c.jiA.TRAILER).playerState.progress.value
                          .duration) &&
                      (await (null == t
                        ? void 0
                        : t.slideBackward(1, c.jiA.TRAILER)));
                  },
                ),
              () => {
                null == i ||
                  i.removeShortcutsListener(c.Pwk.TRAILER, c.yxF.TOGGLE_PLAY),
                  null == i ||
                    i.removeShortcutsListener(c.Pwk.TRAILER, c.yxF.LIKE),
                  null == i ||
                    i.removeShortcutsListener(c.Pwk.TRAILER, c.yxF.DISLIKE),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.MOVE_FORWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.MOVE_BACKWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.SLIDE_FORWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.SLIDE_BACKWARD,
                    );
              }
            ),
            [n, a, i, t],
          );
      };
      var V = i(32358),
        O = i(77282),
        D = i(97141);
      let W = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n) => {
              if (!e || !a) return;
              let l = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: w.OB.Trailer,
                  mainObjectId: n,
                },
                r = (0, c.KOr)({ params: l, logger: t, context: W.name });
              r && (0, w.a5)(e.evgenInstance, r);
            },
            [e, i, t, a],
          );
        },
        F = (e) =>
          "object" == typeof e &&
          null !== e &&
          "actionType" in e &&
          "mainObjectId" in e,
        U = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n, l) => {
              if (!e || !a) return;
              let r = {
                hash: i,
                pageId: c.x3Y[a],
                mainObjectType: w.OB.Trailer,
                mainObjectId: n,
              };
              l &&
                ((r.actionType = w.Us.Pause),
                (r.userInteractionType = w.wt.Tap));
              let o = (0, c.KOr)({ params: r, logger: t, context: U.name });
              o &&
                (l && F(o)
                  ? (0, w.Oe)(e.evgenInstance, o)
                  : (0, w.$M)(e.evgenInstance, o));
            },
            [e, i, t, a],
          );
        },
        z = (e) => {
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
        G = (e) => {
          switch (e) {
            case n.ALBUM:
              return c.Rhz.ALBUM;
            case n.ARTIST:
              return c.Rhz.ARTIST;
            case n.PLAYLIST:
              return c.Rhz.PLAYLIST;
            case n.TRACK:
              return c.Rhz.TRACK;
          }
        },
        Q = (e) => {
          let { variant: t, blockId: i, meta: a } = e,
            n = G(t),
            l = z(t),
            r = (null == a ? void 0 : a.uuid) || (null == a ? void 0 : a.id);
          return (0, c.MhG)({
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
      var K = i(15937),
        Z = i(17392),
        q = i(86128),
        H = i.n(q);
      let X = (0, k.Pi)(() => {
          let { trailer: e } = (0, c.oR4)(),
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
          return (0, N.jsxs)("div", {
            className: H().root,
            children: [
              (0, N.jsxs)("div", {
                className: H().textContainer,
                children: [
                  (0, N.jsx)(Z.Heading, {
                    variant: "h2",
                    className: H().title,
                    size: "xs",
                    weight: "bold",
                    children: (0, N.jsx)(K.Z, {
                      id: "error-messages.something-went-wrong",
                    }),
                  }),
                  (0, N.jsx)(Z.Caption, {
                    className: H().description,
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, N.jsx)(K.Z, {
                      id: "trailer.something-went-wrong-description",
                    }),
                  }),
                ],
              }),
              (0, N.jsx)(T.Button, {
                onClick: a,
                color: "secondary",
                size: "default",
                radius: "xxxl",
                children: (0, N.jsx)(Z.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, N.jsx)(K.Z, { id: "page-error.reload" }),
                }),
              }),
            ],
          });
        }),
        J = () =>
          (0, N.jsx)("div", {
            className: H().root,
            children: (0, N.jsxs)("div", {
              className: H().textContainer,
              children: [
                (0, N.jsx)(Z.Heading, {
                  variant: "h2",
                  className: H().title,
                  size: "xs",
                  weight: "bold",
                  children: (0, N.jsx)(K.Z, { id: "trailer.not-found-title" }),
                }),
                (0, N.jsx)(Z.Caption, {
                  className: H().description,
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: (0, N.jsx)(K.Z, {
                    id: "trailer.not-found-description",
                  }),
                }),
              ],
            }),
          });
      var $ = i(28676);
      let ee = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n, l) => {
              if (!e || !a) return;
              let r = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: n,
                  mainObjectId: l,
                },
                o = (0, c.KOr)({ params: r, logger: t, context: ee.name });
              o && (0, w.$M)(e.evgenInstance, o);
            },
            [e, i, t, a],
          );
        },
        et = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n, l) => {
              if (!e || !a) return;
              let r = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: w.OB.Trailer,
                  mainObjectId: n,
                  from: w.qU.TrailerScreen,
                  to: c.x3Y[l],
                },
                o = (0, c.KOr)({ params: r, logger: t, context: et.name });
              o && (0, w.H1)(e.evgenInstance, o);
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
          [n.ALBUM]: w.OB.Album,
          [n.ARTIST]: w.OB.Artist,
          [n.PLAYLIST]: w.OB.Playlist,
          [n.TRACK]: w.OB.Track,
        },
        en = {
          [n.ALBUM]: c.Rhz.ALBUM,
          [n.ARTIST]: c.Rhz.ARTIST,
          [n.PLAYLIST]: c.Rhz.PLAYLIST,
        },
        el = (e) => {
          let {
            trailer: { meta: t },
            artist: i,
            album: a,
            playlist: l,
          } = (0, c.oR4)();
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
      var er = i(27016),
        eo = i.n(er);
      let es = (e) => {
          let { isActive: t, className: i, isCurrentEntityPage: a } = e;
          return (0, N.jsxs)("div", {
            className: (0, V.W)(eo().root, i),
            children: [
              (0, N.jsx)($.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: eo().playButtonShimmer,
              }),
              a &&
                (0, N.jsx)($.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: eo().linkButtonShimmer,
                }),
            ],
          });
        },
        ed = (0, k.Pi)((e) => {
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
            } = (0, c.oR4)(),
            p = (0, c.R$C)(),
            { from: v } = Q({ variant: i, blockId: c.aUg.TRAILER }),
            h = et(),
            y = M(),
            x = ee(),
            g = (0, c.s0h)(null == s ? void 0 : s.getUrl(i)),
            b = (0, S.useCallback)(() => {
              g();
              let e = en[i];
              e && h(m, e);
            }, [g, m, h, i]),
            C = el(i),
            f = !C && i !== n.TRACK,
            I = (0, S.useCallback)(() => {
              var e, t, a, l;
              let r =
                null == p
                  ? void 0
                  : null === (a = p.playbackController.activePlayback.value) ||
                      void 0 === a
                    ? void 0
                    : null === (t = a.state) || void 0 === t
                      ? void 0
                      : null === (e = t.currentContext.value) || void 0 === e
                        ? void 0
                        : e.utmLink;
              null == p || p.stop(c.jiA.TRAILER),
                _(),
                u.close(),
                y(m),
                f && b();
              let h =
                  o.status !== d.FY.PLAYING || i === n.ALBUM
                    ? { index: 0 }
                    : {
                        entityId:
                          null === (l = o.entityMeta) || void 0 === l
                            ? void 0
                            : l.id,
                      },
                g = ei({
                  variant: i,
                  id: null == s ? void 0 : s.id,
                  uuid: null == s ? void 0 : s.uuid,
                  from: v,
                  utmLink: r,
                });
              null == p ||
                p.playContext({ contextData: g, queueParams: h }).then(() => {
                  (null == s ? void 0 : s.id) && x(ea[i], s.id);
                });
            }, [
              p,
              _,
              u,
              y,
              m,
              f,
              o.status,
              null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
              i,
              null == s ? void 0 : s.id,
              null == s ? void 0 : s.uuid,
              v,
              b,
              x,
            ]),
            A = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: (0, V.W)(eo().root, r),
                  children: [
                    (0, N.jsx)(T.Button, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, N.jsx)(j.Icon, {
                        variant: "play",
                        size: "xxxs",
                      }),
                      className: eo().button,
                      onClick: I,
                      ...(0, E.BA)(
                        E.QM.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                      ),
                      children: (0, N.jsx)(K.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    f &&
                      (0, N.jsx)(T.Button, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: b,
                        className: eo().button,
                        ...(0, E.BA)(
                          E.QM.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                        ),
                        children: (0, N.jsx)(K.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [r, I, b, f],
            );
          return a
            ? es({ isActive: l, isCurrentEntityPage: C, className: r })
            : A;
        });
      var ec = i(93093),
        eu = i(39054),
        em = i(59091);
      let e_ = (e) => {
        switch (e) {
          case n.ALBUM:
            return c.GGO.ALBUM;
          case n.ARTIST:
            return c.GGO.ARTIST;
          case n.PLAYLIST:
            return c.GGO.PLAYLIST;
          case n.TRACK:
            return c.GGO.TRACK;
        }
      };
      var ep = i(83508),
        ev = i.n(ep);
      let eh = (e, t) =>
          (0, N.jsx)("div", {
            className: ev().coverContainer,
            children: (0, N.jsx)($.Shimmer, {
              isActive: e,
              radius: t,
              className: ev().cover,
            }),
          }),
        ey = (e) =>
          (0, N.jsxs)("div", {
            className: ev().textContainer,
            children: [
              (0, N.jsx)("div", {
                className: ev().shimmerContainer,
                children: (0, N.jsx)($.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: ev().titleShimmer,
                }),
              }),
              (0, N.jsx)("div", {
                className: ev().shimmerContainer,
                children: (0, N.jsx)($.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: ev().descriptionShimmer,
                }),
              }),
            ],
          }),
        ex = (0, k.Pi)((e) => {
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
                personalColor: d,
                shareable: u,
                title: m,
                state: _,
              },
              playlist: {
                shouldShowTrailerOnboarding: p,
                isRewind2024Playlist: v,
              },
            } = (0, c.oR4)(),
            { from: h } = Q({ variant: t, blockId: c.aUg.TRAILER, meta: r }),
            y = et(),
            x = U(),
            g = (0, c.lAI)(),
            b = t === n.ARTIST ? "round" : "s",
            { notify: C } = (0, c.d$W)(),
            f = (0, c.qsr)(),
            I = (0, N.jsx)(K.Z, {
              id: "onboarding.rewind-trailer",
              values: { br: (0, N.jsx)("br", {}) },
            }),
            { togglePlay: A, isPlaying: k } = (0, c.qmq)({
              playContextParams: {
                contextData: Y({
                  variant: t,
                  id: null == r ? void 0 : r.id,
                  uuid: null == r ? void 0 : r.uuid,
                  from: h,
                  utmLink: s,
                }),
                loadContextMeta: !0,
              },
              sonataState: _,
              playbackId: c.jiA.TRAILER,
            }),
            P = (0, ec.W)(() => {
              f() || (x(o, k), A(), g(!k));
            }),
            L = (0, S.useCallback)(() => {
              let e = en[t];
              e && y(o, e);
            }, [o, y, t]),
            w = (0, c.JcA)(d || 0),
            M = (0, c.M)(d || 0),
            B = (0, S.useMemo)(() => {
              let e, t;
              return (
                "number" == typeof d
                  ? ((e = w), (t = M))
                  : (e = {
                      "--trailer-color": null == r ? void 0 : r.averageColor,
                    }),
                (0, N.jsxs)("div", {
                  className: ev().coverContainer,
                  ...(0, E.BA)(E.QM.trailer.TRAILER_COVER),
                  children: [
                    (0, N.jsx)(em.Paper, {
                      radius: b,
                      className: ev().cover,
                      style: t,
                      withShadow: !0,
                      children: (0, N.jsx)(eu.Image, {
                        "aria-hidden": !0,
                        src: null == r ? void 0 : r.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                    }),
                    (0, N.jsx)("div", {
                      className: ev().iconContainer,
                      style: e,
                      children: (0, N.jsx)(j.Icon, {
                        variant: "trailer",
                        size: "xs",
                        className: ev().icon,
                      }),
                    }),
                  ],
                })
              );
            }, [
              b,
              null == r ? void 0 : r.coverUri,
              M,
              null == r ? void 0 : r.averageColor,
              d,
              w,
            ]),
            R = (0, S.useMemo)(() => {
              let e = null == r ? void 0 : r.getUrl(t);
              return e
                ? (0, N.jsx)(D.rU, {
                    href: e,
                    className: ev().link,
                    onClick: L,
                    ...(0, E.BA)(E.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: (0, N.jsx)(Z.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: ev().text,
                      children: null == r ? void 0 : r.title,
                    }),
                  })
                : (0, N.jsx)(Z.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: ev().text,
                    ...(0, E.BA)(E.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: null == r ? void 0 : r.title,
                  });
            }, [L, r, t]),
            O = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: ev().textContainer,
                  children: [
                    (0, N.jsx)(Z.Heading, {
                      variant: "h1",
                      className: (0, V.W)(ev().text, ev().title),
                      lineClamp: 1,
                      ...(0, E.BA)(E.QM.trailer.TRAILER_MODAL_TITLE),
                      children: m,
                    }),
                    R,
                  ],
                }),
              [R, m],
            ),
            { href: W } = (0, c.qKB)(
              ""
                .concat(null == r ? void 0 : r.getUrl(t), "?")
                .concat(c.wxR.OPEN_TRAILER, "=true"),
            ),
            F = (0, S.useCallback)(async () => {
              await window.navigator.clipboard.writeText(W),
                C(
                  (0, N.jsx)(D.Ct, {
                    entityTitle: null == r ? void 0 : r.title,
                    entityVariant: e_(t),
                  }),
                  { containerId: c.W$x.INFO },
                );
            }, [C, null == r ? void 0 : r.title, W, t]);
          return (0, N.jsxs)("div", {
            className: (0, V.W)(ev().root, l),
            ...(0, E.BA)(E.QM.trailer.TRAILER_HEADER),
            children: [
              i ? eh(a, b) : B,
              i ? ey(a) : O,
              !i &&
                u &&
                (0, N.jsx)(T.Button, {
                  className: ev().share,
                  icon: (0, N.jsx)(j.Icon, { variant: "share", size: "xxs" }),
                  onClick: F,
                  variant: "text",
                  withRipple: !1,
                  withHover: !1,
                }),
              !i &&
                (0, N.jsx)(D.Wd, {
                  customMessage: v ? I : void 0,
                  shouldForceOpenTooltip: !!p,
                  children: (0, N.jsx)(D.JM, {
                    className: ev().playButton,
                    iconSize: "m",
                    variant: "filled",
                    isPlaying: k,
                    iconClassName: ev().playButtonIcon,
                    onClick: P,
                  }),
                }),
            ],
          });
        }),
        eg = (e) => {
          let t = (0, c.wLl)(),
            i = (0, c.z$f)(),
            { hash: a } = (0, c.RQn)(),
            { pageId: n } = (0, c.lVB)(),
            {
              blockType: l,
              blockId: r,
              blockPosX: o,
              blockPosY: s,
            } = (0, c.qYG)(),
            {
              objectType: d,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: p,
            } = (0, c.rKX)();
          return (0, S.useCallback)(
            (v) => {
              if (!i || !n) return;
              let h = c.x3Y[n];
              if (!h) return;
              let y = {
                hash: a,
                pageId: h,
                mainObjectType: w.OB.Trailer,
                mainObjectId: e,
                entityType: l,
                entityId: r,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: d,
                objectId: m,
                objectPosX: _,
                objectPosY: p,
                userInteractionType: w.wt.Tap,
              };
              v
                ? (y.actionType = w.Us.Dislike)
                : (y.actionType = w.Us.Undislike);
              let x = (0, c.KOr)({ params: y, logger: t, context: eg.name });
              x && (0, w.rx)(i.evgenInstance, x);
            },
            [i, r, o, s, l, a, t, e, m, _, p, d, u, n],
          );
        },
        eb = (e) => {
          let t = (0, c.wLl)(),
            i = (0, c.z$f)(),
            { hash: a } = (0, c.RQn)(),
            { pageId: n } = (0, c.lVB)(),
            {
              blockType: l,
              blockId: r,
              blockPosX: o,
              blockPosY: s,
            } = (0, c.qYG)(),
            {
              objectType: d,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: p,
            } = (0, c.rKX)();
          return (0, S.useCallback)(
            (v) => {
              if (!i || !n) return;
              let h = c.x3Y[n];
              if (!h) return;
              let y = {
                hash: a,
                pageId: h,
                mainObjectType: w.OB.Trailer,
                mainObjectId: e,
                entityType: l,
                entityId: r,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: d,
                objectId: m,
                objectPosX: _,
                objectPosY: p,
                userInteractionType: w.wt.Tap,
              };
              v ? (y.actionType = w.Us.Like) : (y.actionType = w.Us.Unlike);
              let x = (0, c.KOr)({ params: y, logger: t, context: eb.name });
              x && (0, w.rx)(i.evgenInstance, x);
            },
            [i, r, o, s, l, a, t, e, m, _, p, d, u, n],
          );
        },
        eC = (e, t) => {
          let i = (0, c.wLl)(),
            a = (0, c.z$f)(),
            { hash: n } = (0, c.RQn)(),
            { pageId: l } = (0, c.lVB)(),
            {
              blockType: r,
              blockId: o,
              blockPosX: s,
              blockPosY: d,
            } = (0, c.qYG)(),
            {
              objectType: u,
              objectsCount: m,
              objectId: _,
              objectPosX: p,
              objectPosY: v,
            } = (0, c.rKX)();
          return (0, S.useCallback)(() => {
            if (!a || !l) return;
            let h = c.x3Y[l];
            if (!h) return;
            let y = {
                hash: n,
                pageId: h,
                mainObjectType: w.OB.Trailer,
                mainObjectId: e,
                entityType: r,
                entityId: o,
                entityPosX: s,
                entityPosY: d,
                objectsCount: m,
                viewUuid: t,
                objectType: u,
                objectId: _,
                objectPosX: p,
                objectPosY: v,
              },
              x = (0, c.KOr)({ params: y, logger: i, context: eC.name });
            x && (0, w.PB)(a.evgenInstance, x);
          }, [a, o, s, d, r, n, i, e, _, p, v, u, m, l, t]);
        },
        ef = (e) =>
          "object" == typeof e &&
          null !== e &&
          "actionType" in e &&
          "mainObjectId" in e,
        eI = (e) => {
          let t = (0, c.wLl)(),
            i = (0, c.z$f)(),
            { hash: a } = (0, c.RQn)(),
            { pageId: n } = (0, c.lVB)(),
            {
              blockType: l,
              blockId: r,
              blockPosX: o,
              blockPosY: s,
            } = (0, c.qYG)(),
            {
              objectType: d,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: p,
            } = (0, c.rKX)();
          return (0, S.useCallback)(
            (v) => {
              if (!i || !n) return;
              let h = c.x3Y[n];
              if (!h) return;
              let y = {
                hash: a,
                pageId: h,
                mainObjectType: w.OB.Trailer,
                mainObjectId: e,
                entityType: l,
                entityId: r,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: d,
                objectId: m,
                objectPosX: _,
                objectPosY: p,
              };
              v ||
                ((y.actionType = w.Us.Pause),
                (y.userInteractionType = w.wt.Tap));
              let x = (0, c.KOr)({ params: y, logger: t, context: eI.name });
              x &&
                (!v && ef(x)
                  ? (0, w.rx)(i.evgenInstance, x)
                  : (0, w.yC)(i.evgenInstance, x));
            },
            [i, r, o, s, l, a, t, e, m, _, p, d, u, n],
          );
        },
        eA = (e, t) => {
          var i;
          let a = (0, c.R$C)(),
            {
              trailer: { state: n },
            } = (0, c.oR4)(),
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
                      .getState(c.jiA.TRAILER)
                      .playerState.progress.onChange(() => {
                        let e;
                        let i = a.getState(c.jiA.TRAILER).playerState,
                          n = i.progress.value;
                        (e = t ? t / 1e3 : n.duration),
                          o || r(0),
                          i.status.value === d.FY.PLAYING &&
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
      var eN = i(15404),
        ek = i.n(eN);
      let eS = (0, k.Pi)((e) => {
        let { variant: t, track: i, playContextParams: a, viewUuid: l } = e,
          {
            trailer: {
              meta: r,
              objectId: o,
              shouldSendEventOnTracksShowed: s,
              setShouldSendEventOnTracksShowed: d,
            },
          } = (0, c.oR4)(),
          u = t === n.ALBUM ? y.dn : y.fY,
          { isActive: m, progress: _ } = eA(i.id, i.durationMs),
          p = eC(o, l),
          v = eI(o),
          h = eb(o),
          x = eg(o);
        (0, S.useEffect)(() => {
          s && (p(), d(!1));
        }, [p, d, s]);
        let g = (0, S.useMemo)(
          () => ({ "--track-progress": "".concat(_ || 0, "%") }),
          [_],
        );
        return (0, N.jsx)("div", {
          className: (0, V.W)(ek().root, { [ek().root_active]: m }),
          style: g,
          children: (0, N.jsx)(u, {
            position: i.positionInAlbum,
            withLightning: !!(null == i ? void 0 : i.isBest),
            track: i,
            playContextParams: a,
            albumArtists: null == r ? void 0 : r.albumArtists,
            onPlayClick: v,
            onLikeClick: h,
            onDislikeClick: x,
          }),
        });
      });
      var eP = i(51460),
        eE = i.n(eP);
      let eT = (e, t) => {
          let i = t === n.ALBUM ? c.Lxt.ALBUM : c.Lxt.PLAYLIST;
          return Array.from({ length: t === n.TRACK ? 1 : 5 }, (t, a) =>
            (0, N.jsx)(
              "div",
              {
                className: eE().trackContainer,
                children: (0, N.jsx)(D.DX, {
                  isActive: e,
                  className: (0, V.W)(eE().trackShimmer, {
                    [eE().albumShimmer]: i === c.Lxt.ALBUM,
                  }),
                  variant: i,
                }),
              },
              a,
            ),
          );
        },
        ej = (0, k.Pi)((e) => {
          let { variant: t } = e,
            {
              trailer: i,
              playlist: { setShouldShowTrailerOnboarding: a },
            } = (0, c.oR4)(),
            {
              isLoading: n,
              isRejected: l,
              tracks: r,
              meta: o,
              state: s,
              shouldAutoStartPlaying: d,
              setShouldAutoStartPlaying: u,
              isNotFound: m,
              modal: _,
              utmLink: p,
            } = i,
            v = (0, c.R$C)(),
            { from: h } = Q({ variant: t, blockId: c.aUg.TRAILER, meta: o }),
            y = W(),
            x = U(),
            [g, b] = (0, S.useState)(!1),
            C = (0, S.useRef)((0, O.Z)()),
            f = n || l,
            { isPlaying: I } = (0, c.qmq)({
              playContextParams: {
                contextData: Y({
                  variant: t,
                  id: null == o ? void 0 : o.id,
                  uuid: null == o ? void 0 : o.uuid,
                  from: h,
                  utmLink: p,
                }),
                loadContextMeta: !0,
              },
              sonataState: i.state,
              playbackId: c.jiA.TRAILER,
            });
          (0, S.useEffect)(() => {
            _.isOpened &&
              (null == o ? void 0 : o.id) &&
              d &&
              (y(i.objectId),
              null == v ||
                v
                  .playContext(
                    {
                      contextData: Y({
                        variant: t,
                        id: null == o ? void 0 : o.id,
                        uuid: null == o ? void 0 : o.uuid,
                        from: h,
                        utmLink: p,
                      }),
                      queueParams: { index: 0 },
                      loadContextMeta: !0,
                    },
                    c.jiA.TRAILER,
                  )
                  .then(() => {
                    b(!0);
                  }),
              u(!1));
          }, [
            h,
            null == o ? void 0 : o.id,
            null == o ? void 0 : o.uuid,
            _.isOpened,
            y,
            x,
            u,
            d,
            v,
            s.status,
            i.objectId,
            t,
            p,
            I,
          ]),
            (0, S.useEffect)(() => {
              g && (I ? (x(i.objectId), b(!1)) : a(!0));
            }, [g, I, x, i.objectId, a]);
          let A = (0, S.useCallback)(
              (e) => ({
                contextData: Y({
                  variant: t,
                  id: null == o ? void 0 : o.id,
                  uuid: null == o ? void 0 : o.uuid,
                  from: h,
                  utmLink: p,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [h, null == o ? void 0 : o.id, null == o ? void 0 : o.uuid, t, p],
            ),
            k = (0, S.useMemo)(
              () =>
                f
                  ? eT(n, t)
                  : null == r
                    ? void 0
                    : r.map((e, i) =>
                        (0, N.jsx)(
                          c.Ja5,
                          {
                            blockType: w.OB.SmartPreview,
                            blockId: e.id,
                            blockPosX: 1,
                            blockPosY: 1,
                            children: (0, N.jsx)(c.nZ5, {
                              objectType: w.OB.SmartPreview,
                              objectId: e.id,
                              objectPosX: 1,
                              objectPosY: i + 1,
                              objectsCount: r.length,
                              children: (0, N.jsx)(eS, {
                                variant: t,
                                track: e,
                                playContextParams: A(i),
                                viewUuid: C.current,
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
              [A, n, f, r, t],
            );
          return l
            ? m
              ? (0, N.jsx)(J, {})
              : (0, N.jsx)(X, {})
            : (0, N.jsxs)("div", {
                className: eE().root,
                children: [
                  (0, N.jsx)(ex, {
                    isShimmerVisible: f,
                    isShimmerActive: n,
                    variant: t,
                    className: eE().header,
                  }),
                  k,
                  (0, N.jsx)(ed, {
                    isShimmerVisible: f,
                    isShimmerActive: n,
                    variant: t,
                    className: eE().footer,
                  }),
                ],
              });
        });
      var eL = i(33445),
        ew = i.n(eL);
      let eM = (0, k.Pi)(() => {
        let {
            settings: { isMobile: e },
            trailer: t,
            sonataState: i,
            fullscreenPlayer: a,
            experiments: n,
          } = (0, c.oR4)(),
          l = (0, c.R$C)(),
          { contentRef: r } = (0, c.$Y6)(),
          { formatMessage: o } = (0, P.Z)(),
          s = M(),
          u = n.checkExperiment(c.peG.WebNextPlayerBarBackgroundProgress, "on");
        R(),
          (0, S.useEffect)(() => {
            let e =
                null == l
                  ? void 0
                  : l
                      .getState(c.jiA.TRAILER)
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
                null == l
                  ? void 0
                  : l
                      .getState(c.jiA.TRAILER)
                      .playerState.status.onChange((e) => {
                        e && t.state.setStatus(e);
                      }),
              a =
                null == l
                  ? void 0
                  : l.state.playerState.volume.onChange((e) => {
                      let t = u ? l.state.playerState.exponentVolume.value : e;
                      "number" == typeof t &&
                        (u
                          ? l.setExponentVolume(t, c.jiA.TRAILER)
                          : l.setVolume(t, c.jiA.TRAILER));
                    });
            return () => {
              null == e || e(), null == i || i(), null == a || a();
            };
          }, [u, l, t.state]);
        let m = (0, S.useCallback)(() => {
            null == l ||
              l.stop(c.jiA.TRAILER).finally(() => {
                t.sonataStatusBeforeTrailerStart !== d.FY.PLAYING ||
                  t.isManuallyPaused ||
                  null == l ||
                  l.resume(),
                  t.setAnimationState(!0),
                  t.resetUtmLink(),
                  t.modal.close(),
                  s(t.objectId);
              });
          }, [s, l, t]),
          _ = (0, S.useCallback)(
            (e) => {
              t.modal.onOpenChange(e), e || m();
            },
            [m, t.modal],
          );
        return (
          (0, S.useEffect)(() => {
            t.modal.isOpened &&
              t.isResolved &&
              i.status === d.FY.PLAYING &&
              m();
          }, [m, i.status, t, t.modal.isOpened]),
          (0, S.useEffect)(() => {
            t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
          }, [t]),
          (0, S.useEffect)(() => {
            a.modal.isOpened && t.modal.isOpened && m();
          }, [a.modal.isOpened, m, t.modal.isOpened]),
          (0, N.jsxs)(L.u, {
            size: "fitContent",
            placement: e ? "default" : "right",
            open: t.modal.isOpened,
            onOpenChange: _,
            onClose: m,
            className: ew().root,
            contentClassName: ew().modalContent,
            portalNode: e ? null : r,
            showHeader: !1,
            withOverlay: e,
            closeOnOutsidePress: e,
            containerProps: (0, E.BA)(E.QM.trailer.TRAILER_MODAL),
            withAnimation: t.withAnimation,
            isMobile: e,
            lockScroll: e,
            overlayColor: "full",
            enableSwipe: !0,
            children: [
              !e &&
                (0, N.jsx)("div", {
                  className: ew().header,
                  children: (0, N.jsx)(T.Button, {
                    radius: "round",
                    color: "secondary",
                    size: "xxs",
                    icon: (0, N.jsx)(j.Icon, { variant: "close", size: "xxs" }),
                    onClick: m,
                    "aria-label": o({ id: "trailer.close" }),
                    ...(0, E.BA)(E.QM.trailer.TRAILER_CLOSE_BUTTON),
                  }),
                }),
              t.variant && (0, N.jsx)(ej, { variant: t.variant }),
            ],
          })
        );
      });
    },
    57697: function (e, t, i) {
      "use strict";
      i.d(t, {
        zF: function () {
          return ea;
        },
        y2: function () {
          return x;
        },
      });
      var a = i(13534);
      async function n(e) {
        var t, i, n, l, r, o, s;
        let d,
          c,
          { clipMeta: u, additional: m } = e,
          _ = await (0, a.EQQ)(m.locale);
        return (
          u
            ? ((d = _(
                { id: "metadata.clips-title" },
                {
                  clipTitle: u.title,
                  clipArtists:
                    null === (i = u.artists) || void 0 === i
                      ? void 0
                      : null === (t = i.map((e) => e.name)) || void 0 === t
                        ? void 0
                        : t.join(", "),
                },
              )),
              (c = _(
                { id: "metadata.clips-description" },
                {
                  clipTitle: u.title,
                  clipArtists:
                    null === (l = u.artists) || void 0 === l
                      ? void 0
                      : null === (n = l.map((e) => e.name)) || void 0 === n
                        ? void 0
                        : n.join(", "),
                },
              )))
            : ((d = _({ id: "metadata.clips-title-default" })),
              (c = _({ id: "metadata.clips-description-default" }))),
          {
            title: d,
            description: c,
            openGraph: (0, a.A36)({
              ogTitle: d,
              ogDescription: c,
              ogType: "website",
              fullUrl: null !== (r = m.fullUrl) && void 0 !== r ? r : "",
              locale: m.locale,
              customImage: (0, a.u3o)({ tld: m.tld }),
              siteName: _({ id: "metadata.yandex-music" }),
            }),
            twitter: (0, a.rz9)({
              cardType: a.qUR.SUMMARY_LARGE_IMAGE,
              title: d,
              description: c,
            }),
            facebook: (0, a.H_c)(),
            appLinks: (0, a.VMi)({
              additional: {
                ...m,
                url: null !== (o = m.url) && void 0 !== o ? o : "",
                fullUrl: null !== (s = m.fullUrl) && void 0 !== s ? s : "",
                host: m.host,
              },
              appName: _({ id: "metadata.yandex-music" }),
            }),
            alternates: { canonical: m.canonical },
          }
        );
      }
      async function l(e) {
        var t;
        let i = await (0, a.EQQ)(e.locale),
          n = i({ id: "metadata.main-description" }),
          l = i({ id: "metadata.main-title" });
        return {
          title: l,
          description: n,
          openGraph: (0, a.A36)({
            ogTitle: l,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (t = e.fullUrl) && void 0 !== t ? t : "",
            locale: e.locale,
            siteName: i({ id: "metadata.yandex-music" }),
            customImage: (0, a.u3o)({ tld: e.tld }),
          }),
          facebook: (0, a.H_c)(),
          twitter: (0, a.rz9)({
            cardType: a.qUR.SUMMARY_LARGE_IMAGE,
            title: l,
            description: n,
          }),
        };
      }
      var r = i(65067),
        o = i(61039);
      let s = (e) => {
        (0, r.useEffect)(() => {
          (null == e ? void 0 : e.clips) &&
            0 !== e.clips.length &&
            !e.isLoading &&
            n({
              clipMeta: (0, o.dR)(e.clips[0]),
              additional: {
                fullUrl: null,
                locale: null,
                url: null,
                tld: "",
                host: "",
              },
            }).then((e) => {
              (0, a.gOT)(e);
            });
        }, [null == e ? void 0 : e.clips, null == e ? void 0 : e.isLoading]);
      };
      var d = i(22874),
        c = i(62726),
        u = i(81046),
        m = i(98375),
        _ = i(14924),
        p = i(40892),
        v = i(84638),
        h = i(54306);
      let y = d.V5.model("VideoPlayerState", {
          contextType: d.V5.maybeNull(d.V5.enumeration(Object.values(v.A))),
          contextId: d.V5.maybeNull(d.V5.string),
          entityMeta: d.V5.maybeNull(h.Bd),
          status: d.V5.enumeration(Object.values(m.FY)),
          canMoveForward: d.V5.boolean,
          canMoveBackward: d.V5.boolean,
        }).actions((e) => ({
          setContextId: (t) => {
            e.contextId = String(t);
          },
          setContextType: (t) => {
            e.contextType = t;
          },
          setEntityMeta: (t) => {
            (null == t ? void 0 : t.data.meta) && (e.entityMeta = (0, h.uA)(t));
          },
          setStatus: (t) => {
            e.status = t;
          },
          setCanMoveForward: (t) => {
            e.canMoveForward = t;
          },
          setCanMoveBackward: (t) => {
            e.canMoveBackward = t;
          },
        })),
        x = d.V5.compose(
          d.V5.model("FullscreenVideoPlayer", {
            modal: p.KL,
            ids: d.V5.array(d.V5.number),
            activeIndex: d.V5.maybeNull(d.V5.number),
            clips: d.V5.array(o.x$),
            errorStatusCode: d.V5.maybeNull(d.V5.number),
            state: y,
            sonataStatusBeforeClipStart: d.V5.enumeration(Object.values(m.FY)),
            isOpenedFromMain: d.V5.maybeNull(d.V5.boolean),
            withAnimation: d.V5.boolean,
          }),
          p.fu,
          p.Al,
        )
          .views((e) => {
            let t = {
              get clipActiveIndex() {
                return e.activeIndex || 0;
              },
              get clipActive() {
                return e.clips[t.clipActiveIndex];
              },
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === a.Gui.PENDING;
              },
              get isNotFound() {
                let t = e.isResolved && 0 === e.clips.length;
                return e.errorStatusCode === c.CN.NOT_FOUND || t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
              get entitiesData() {
                return e.ids.map((e) => ({
                  type: u.A.Clip,
                  meta: { id: e },
                  loadEntityMeta: !0,
                }));
              },
              get isPlayingSonataStatusBeforeClipStart() {
                return e.sonataStatusBeforeClipStart === m.FY.PLAYING;
              },
            };
            return t;
          })
          .actions((e) => ({
            setIds(t) {
              e.ids = (0, d.pj)(t);
            },
            setClipIndex() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              e.activeIndex = t;
            },
            setOpenedFromMain() {
              (e.isOpenedFromMain = !0), (e.withAnimation = !1);
            },
            setAnimationState(t) {
              e.withAnimation = t;
            },
            setSonataStatusBeforeClipStart() {
              let { sonataState: t } = (0, d.yj)(e);
              e.sonataStatusBeforeClipStart = t.status;
            },
            getClips: (0, d.ls)(function* () {
              let { clipsResource: t, modelActionsLogger: i } = (0, d.dU)(e);
              if (e.loadingState !== a.Gui.PENDING)
                try {
                  e.loadingState = a.Gui.PENDING;
                  let i = yield t.getClip({ clipIds: e.ids });
                  (e.ids = (0, d.pj)(i.map((e) => e.clipId))),
                    (e.clips = (0, d.pj)(i.map(o.et))),
                    (e.activeIndex = (0, _.wj)(e.ids, e.activeIndex)),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.RESOLVE);
                } catch (t) {
                  i.error(t),
                    t instanceof c.du && (e.errorStatusCode = t.statusCode),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = a.Gui.IDLE),
                (e.activeIndex = null),
                (e.errorStatusCode = null),
                (e.isOpenedFromMain = null),
                (e.withAnimation = !0),
                (e.sonataStatusBeforeClipStart = m.FY.IDLE),
                e.destroyItems([e.ids, e.clips]);
            },
          }));
      var g = i(75441),
        b = i(62569),
        C = i(32358),
        f = i(9317),
        I = i(35846),
        A = i(93093),
        N = i(68208),
        k = i(69756),
        S = i(59506),
        P = i(38861),
        E = i(97141);
      let T = (e) => {
        let { fullscreenVideoPlayer: t, advert: i } = (0, a.oR4)(),
          n = (0, a.R$C)(),
          l = (0, a.XUT)(),
          o = (0, _.SB)(t.state.entityMeta);
        (0, r.useEffect)(() => {
          if (i.isAdvertShown) {
            null == l || l.disable(a.Pwk.VIDEO_PLAYER);
            return;
          }
          t.modal.isOpened
            ? (null == l || l.disable(a.Pwk.MAIN),
              null == l || l.enable(a.Pwk.MAIN, a.yxF.TOGGLE_MUTE),
              null == l || l.enable(a.Pwk.MAIN, a.yxF.INCREASE_VOLUME),
              null == l || l.enable(a.Pwk.MAIN, a.yxF.DECREASE_VOLUME),
              null == l || l.enable(a.Pwk.VIDEO_PLAYER))
            : (null == l || l.disable(a.Pwk.VIDEO_PLAYER),
              null == l || l.enable(a.Pwk.MAIN));
        }, [l, t.modal.isOpened, i.isAdvertShown]);
        let s = null == n ? void 0 : n.getState(a.jiA.CLIP);
        (0, r.useEffect)(
          () => (
            null == l ||
              l.addShortcutsListener(a.Pwk.VIDEO_PLAYER, a.yxF.CLOSE, e),
            null == l ||
              l.addShortcutsListener(
                a.Pwk.VIDEO_PLAYER,
                a.yxF.TOGGLE_PLAY,
                () => {
                  null == n || n.togglePause(a.jiA.CLIP);
                },
              ),
            null == l ||
              l.addShortcutsListener(a.Pwk.VIDEO_PLAYER, a.yxF.LIKE, o),
            null == l ||
              l.addShortcutsListener(
                a.Pwk.VIDEO_PLAYER,
                a.yxF.MOVE_FORWARD,
                async () => {
                  var e;
                  (null == s
                    ? void 0
                    : null === (e = s.currentContext.value) || void 0 === e
                      ? void 0
                      : e.availableActions.moveForward.value) &&
                    (await (null == n ? void 0 : n.moveForward(a.jiA.CLIP)));
                },
              ),
            null == l ||
              l.addShortcutsListener(
                a.Pwk.VIDEO_PLAYER,
                a.yxF.MOVE_BACKWARD,
                async () => {
                  var e;
                  (null == s
                    ? void 0
                    : null === (e = s.currentContext.value) || void 0 === e
                      ? void 0
                      : e.availableActions.moveBackward.value) &&
                    (await (null == n ? void 0 : n.moveBackward(a.jiA.CLIP)));
                },
              ),
            null == l ||
              l.addShortcutsListener(
                a.Pwk.VIDEO_PLAYER,
                a.yxF.SLIDE_FORWARD,
                async () => {
                  (null == s
                    ? void 0
                    : s.playerState.progress.value.duration) &&
                    (await (null == n
                      ? void 0
                      : n.slideForward(1, a.jiA.CLIP)));
                },
              ),
            null == l ||
              l.addShortcutsListener(
                a.Pwk.VIDEO_PLAYER,
                a.yxF.SLIDE_BACKWARD,
                async () => {
                  (null == s
                    ? void 0
                    : s.playerState.progress.value.duration) &&
                    (await (null == n
                      ? void 0
                      : n.slideBackward(1, a.jiA.CLIP)));
                },
              ),
            () => {
              null == l ||
                l.removeShortcutsListener(a.Pwk.VIDEO_PLAYER, a.yxF.CLOSE),
                null == l ||
                  l.removeShortcutsListener(
                    a.Pwk.VIDEO_PLAYER,
                    a.yxF.TOGGLE_PLAY,
                  ),
                null == l ||
                  l.removeShortcutsListener(a.Pwk.VIDEO_PLAYER, a.yxF.LIKE),
                null == l ||
                  l.removeShortcutsListener(
                    a.Pwk.VIDEO_PLAYER,
                    a.yxF.MOVE_FORWARD,
                  ),
                null == l ||
                  l.removeShortcutsListener(
                    a.Pwk.VIDEO_PLAYER,
                    a.yxF.MOVE_BACKWARD,
                  ),
                null == l ||
                  l.removeShortcutsListener(
                    a.Pwk.VIDEO_PLAYER,
                    a.yxF.SLIDE_FORWARD,
                  ),
                null == l ||
                  l.removeShortcutsListener(
                    a.Pwk.VIDEO_PLAYER,
                    a.yxF.SLIDE_BACKWARD,
                  );
            }
          ),
          [l, t.ids, e, o, n, s, i.isAdvertShown],
        );
      };
      var j = i(34073),
        L = i(55188),
        w = i(14563),
        M = i(9545),
        B = i(92853),
        R = i(17392),
        V = i(1150),
        O = i(64353),
        D = i(7058),
        W = i.n(D);
      let F = (0, b.Pi)((e) => {
        let {
            className: t,
            clip: i,
            withExplicitMark: n = !0,
            withSecondaryColor: l,
            captionSize: o = "m",
            explicitSize: s = "xxxs",
            withAllArtistsTitle: d,
            withCustomTooltip: c = !0,
            hasLineClamp: u = !0,
            withArtistLink: m = !0,
          } = e,
          _ = (0, V.T$)({ withCustomTooltip: c }),
          p = (0, r.useCallback)(
            (e) => {
              let t = String(i.title);
              return (0, g.jsx)(B.u, {
                enabled: _,
                offsetOptions: 4,
                placement: "top",
                text: t,
                hoverSettings: a.cHI,
                children: (0, g.jsx)(R.Caption, {
                  className: (0, C.W)(W().text, W().title),
                  type: "entity",
                  size: o,
                  weight: "medium",
                  variant: "span",
                  ...e,
                  children: i.title,
                }),
              });
            },
            [_, o, i.title],
          ),
          v = (0, r.useMemo)(
            () => p((0, I.BA)(I.bG.clip.CLIP_META_TITLE)),
            [p],
          ),
          h = (0, V.pO)(i.artists);
        return (0, g.jsx)("div", {
          className: (0, C.W)(
            W().root,
            { [W().root_withSecondaryColor]: l },
            t,
          ),
          children: (0, g.jsxs)("div", {
            className: W().metaContainer,
            children: [
              (0, g.jsxs)("div", {
                className: W().titleContainer,
                children: [
                  (0, g.jsx)(R.Caption, {
                    type: "entity",
                    size: o,
                    weight: "medium",
                    variant: "div",
                    lineClamp: 1,
                    children: v,
                  }),
                  i.explicitDisclaimer &&
                    n &&
                    (0, g.jsx)(E.$i, {
                      getDescriptionTexts: i.getDescriptionTexts,
                      size: s,
                      variant: i.explicitDisclaimer,
                      className: W().explicitMark,
                      trackId: String(i.clipId),
                    }),
                ],
              }),
              h.length > 0 &&
                (0, g.jsx)(O.jO, {
                  linkClassName: W().link,
                  captionClassName: W().artistCaption,
                  artists: h,
                  withLink: m,
                  lineClamp: u ? 1 : 0,
                  captionSize: o,
                  withAllArtistsTitle: d,
                  withCustomTooltip: _,
                }),
            ],
          }),
        });
      });
      var U = i(37914),
        z = i.n(U);
      let G = (0, b.Pi)((e) => {
          let {
              entityMeta: t,
              onLikeClick: i,
              onContextMenuOpenChange: n,
              isContextMenuOpened: l,
            } = e,
            {
              user: s,
              sonataState: d,
              fullscreenVideoPlayer: c,
            } = (0, a.oR4)(),
            { isPassToProduct: u } = (0, a.NMB)(),
            m = (0, h.K4)(),
            _ = (0, A.W)(async (e) => {
              await m(d, e);
            }),
            p = (0, A.W)((e) => {
              d.setVolume(e);
            }),
            v = (0, r.useMemo)(
              () =>
                t
                  ? (0, g.jsx)("div", {
                      className: z().description,
                      children: (0, g.jsx)(F, {
                        captionSize: "l",
                        clip: t,
                        withSecondaryColor: !0,
                      }),
                    })
                  : null,
              [t],
            );
          return (0, g.jsxs)("section", {
            className: z().root,
            children: [
              (0, g.jsxs)("div", {
                className: z().info,
                children: [
                  (0, g.jsx)("div", { className: z().infoCard, children: v }),
                  (0, g.jsxs)("div", {
                    className: z().infoButtons,
                    children: [
                      c.clipActive &&
                        (0, g.jsx)(o.Bp, {
                          placement: "top-start",
                          icon: (0, g.jsx)(k.Icon, {
                            variant: "more",
                            size: "m",
                          }),
                          size: "l",
                          clip: c.clipActive,
                          onOpenChange: n,
                          open: l,
                        }),
                      t &&
                        (0, g.jsx)(E.dJ, {
                          className: z().likeButton,
                          isLiked: t.isLiked,
                          iconSize: "xs",
                          onClick: i,
                          disabled: !s.isAuthorized,
                        }),
                    ],
                  }),
                ],
              }),
              (0, g.jsxs)("div", {
                className: z().sonata,
                children: [
                  (0, g.jsx)(h.NI, {}),
                  (0, g.jsx)(w.Y, {
                    sliderClassName: (0, C.W)(z().slider, z().important),
                    disabled: !t,
                    isMobile: !1,
                    isFullscreen: !1,
                    canMoveForward: c.state.canMoveForward,
                    customDuration:
                      (null == s ? void 0 : s.isAuthorized) && !u ? void 0 : 29,
                    sonataPlaybackId: a.jiA.CLIP,
                  }),
                ],
              }),
              (0, g.jsx)("div", {
                className: z().meta,
                children: (0, g.jsx)(M.F, {
                  sonataVolume: d.volume,
                  onVolumeSet: p,
                  onVolumeClick: _,
                  horizontalSliderClassName: (0, C.W)(
                    z().slider,
                    z().important,
                  ),
                }),
              }),
            ],
          });
        }),
        Q = (0, b.Pi)((e) => {
          let {
              className: t,
              isSettingsMenuOpened: i,
              onSettingsMenuOpenChange: n,
              isContextMenuOpened: l,
              onContextMenuOpenChange: r,
            } = e,
            { fullscreenVideoPlayer: o } = (0, a.oR4)(),
            s = (0, _.SB)(o.state.entityMeta),
            {
              settings: { isMobile: d },
            } = (0, a.oR4)();
          return d
            ? null
            : (0, g.jsx)(G, {
                className: t,
                onLikeClick: s,
                entityMeta: o.state.entityMeta,
                isSettingsMenuOpened: i,
                onSettingsMenuOpenChange: n,
                isContextMenuOpened: l,
                onContextMenuOpenChange: r,
              });
        });
      var Y = i(5556),
        K = i.n(Y);
      let Z = (0, b.Pi)(() => {
          let { fullscreenVideoPlayer: e } = (0, a.oR4)(),
            { state: t, toggleTrue: i, toggleFalse: n } = (0, L.O)(!1),
            { state: l, toggleTrue: s, toggleFalse: d } = (0, L.O)(!1),
            { state: c, toggleTrue: u, toggleFalse: _ } = (0, L.O)(!1),
            p = (0, r.useRef)(null),
            [v, h] = (0, r.useState)(!1),
            [y, x] = (0, r.useState)(!1),
            b = (0, r.useMemo)(
              () =>
                (0, j.Z)(() => {
                  n(), d();
                }, 1500),
              [d, n],
            ),
            f = (0, r.useMemo)(
              () =>
                (0, j.Z)(() => {
                  d();
                }, 1500),
              [d],
            ),
            I = (0, A.W)(() => {
              f.cancel(), s(), u();
            }),
            N = (0, A.W)(() => {
              f(), _();
            }),
            k = (0, A.W)(() => {
              v || y || b();
            }),
            S = (0, A.W)((e) => {
              e.stopPropagation(), b.cancel(), f.cancel(), i(), s(), b();
            }),
            P = (0, A.W)((e) => {
              e.stopPropagation(), b.cancel(), f.cancel(), i(), b();
            }),
            T = (0, A.W)(() => {
              t ? b.cancel() : i(), b();
            });
          (0, r.useEffect)(
            () => (
              window.addEventListener("mousemove", T),
              () => {
                window.removeEventListener("mousemove", T);
              }
            ),
            [T],
          ),
            (0, r.useEffect)(() => {
              t || d();
            }, [d, t]);
          let w = e.state.status !== m.FY.PLAYING,
            M = (0, r.useMemo)(
              () =>
                (0, g.jsx)(o.ow, {
                  className: K().carousel,
                  containerClassName: K().carouselBlock,
                  clipCardTitleClassName: (0, C.W)(
                    K().clipCardTitle,
                    K().important,
                  ),
                  clipCardArtistLinkClassName: (0, C.W)(
                    K().clipCardArtist,
                    K().important,
                  ),
                  isShimmerVisible: e.isLoading,
                  isShimmerActive: !0,
                  clips: e.clips,
                  shouldOpenModalOnCardClick: !1,
                  itemCounter: 5,
                  ref: p,
                }),
              [e.clips, e.isLoading, p],
            );
          return (
            (0, r.useEffect)(() => {
              (l || c) && (i(), s());
            }, [c, l, s, i]),
            (0, g.jsxs)("div", {
              className: (0, C.W)(K().root, {
                [K().root_visible]: t || w || c,
                [K().root_withHoveredCarousel]: l,
              }),
              onMouseEnter: i,
              onMouseLeave: k,
              onFocus: P,
              children: [
                (0, g.jsx)(Q, {
                  isSettingsMenuOpened: v,
                  onSettingsMenuOpenChange: h,
                  isContextMenuOpened: y,
                  onContextMenuOpenChange: x,
                }),
                (0, g.jsx)(a.Ja5, {
                  blockId: a.BEo.CLIPS_CAROUSEL,
                  blockType: a.BEo.CLIPS_CAROUSEL,
                  blockPosX: 1,
                  blockPosY: 1,
                  objectsCount: e.clips.length,
                  children: (0, g.jsx)("div", {
                    className: K().carouselContainer,
                    onMouseEnter: I,
                    onMouseLeave: N,
                    onFocus: S,
                    children: (0, g.jsx)(E.J3, {
                      className: K().carouselWrapper,
                      carouselElement: M,
                      ref: p,
                      isCarouselBetweenArrows: !0,
                      controlsWrapperClassName: K().carouselControls,
                      buttonSize: "xs",
                      buttonVariant: "default",
                    }),
                  }),
                }),
              ],
            })
          );
        }),
        q = (0, b.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, a.oR4)();
          return e ? null : (0, g.jsx)(Z, {});
        });
      var H = i(68699),
        X = i(68217),
        J = i.n(X);
      let $ = (0, b.Pi)((e) => {
        let { closeModal: t } = e,
          i = (0, r.useRef)(null),
          n = (0, a.R$C)(),
          {
            sonataState: { isVHCoreRegistered: l },
            fullscreenVideoPlayer: s,
            experiments: d,
            advert: c,
          } = (0, a.oR4)(),
          { from: u } = (0, a.MhG)({
            pageId: a.Rhz.VIDEO_PLAYER,
            contextId: s.state.contextId,
            contextType: v.A.Various,
          }),
          p = d.checkExperiment(a.peG.WebNextPlayerBarBackgroundProgress, "on"),
          h = (0, a.m5R)(),
          { state: y, toggleFalse: x } = (0, L.O)(!0),
          { togglePlay: b } = (0, a.qmq)({
            playContextParams: {
              contextData: {
                type: v.A.Various,
                meta: { id: a.i9R.VARIOUS_CLIP_CONTEXT },
                from: u,
              },
              loadContextMeta: !0,
            },
            sonataState: s.state,
            playbackId: a.jiA.CLIP,
          }),
          f = (0, o.kJ)({
            clip: s.clips[s.clipActiveIndex],
            callback: b,
            disclaimerRejectHandler: t,
          });
        return (
          (0, r.useEffect)(() => {
            let e, t, r, o;
            if (i.current && n && l) {
              let l, d;
              s.setSonataStatusBeforeClipStart(),
                n.setVideoCoreContainer({
                  container: i.current,
                  playbackId: a.jiA.CLIP,
                }),
                n
                  .setContext(
                    {
                      contextData: {
                        type: v.A.Various,
                        meta: { id: a.i9R.VARIOUS_CLIP_CONTEXT },
                        from: u,
                      },
                      entitiesData: s.entitiesData,
                      queueParams: { index: s.clipActiveIndex },
                      loadContextMeta: !1,
                    },
                    a.jiA.CLIP,
                  )
                  .then(() => {
                    c.isAdvertShown || f();
                  });
              let m = n.getState(a.jiA.CLIP);
              (e = m.queueState.currentEntity.onChange((e) => {
                var t;
                let i = null == e ? void 0 : e.context.data.type,
                  a = null == e ? void 0 : e.context.data.meta.id,
                  n = null == e ? void 0 : e.entity.data.meta.id;
                if (n) {
                  let e = (0, _.wj)(s.ids, s.ids.indexOf(Number(n)));
                  s.setClipIndex(e), h((0, _.Fw)(s.ids, e));
                }
                s.state.setEntityMeta(
                  null !== (t = null == e ? void 0 : e.entity) && void 0 !== t
                    ? t
                    : null,
                ),
                  i && s.state.setContextType(i),
                  a && s.state.setContextId(a);
              })),
                (t = m.playerState.status.onChange((e) => {
                  e && s.state.setStatus(e);
                })),
                (r = n.state.playerState.volume.onChange((e) => {
                  let t = p ? n.state.playerState.exponentVolume.value : e;
                  "number" == typeof t &&
                    (p
                      ? n.setExponentVolume(t, a.jiA.CLIP)
                      : n.setVolume(t, a.jiA.CLIP));
                })),
                (o = m.currentContext.onChange((e) => {
                  null == l || l(),
                    null == d || d(),
                    (l =
                      null == e
                        ? void 0
                        : e.availableActions.moveBackward.onChange((e) => {
                            s.state.setCanMoveBackward(!!e);
                          })),
                    (d =
                      null == e
                        ? void 0
                        : e.availableActions.moveForward.onChange((e) => {
                            s.state.setCanMoveForward(!!e);
                          }));
                }));
            }
            return () => {
              null == n || n.destroyVideoCore(a.jiA.CLIP),
                s.isPlayingSonataStatusBeforeClipStart &&
                  (null == n || n.resume()),
                null == e || e(),
                null == t || t(),
                null == r || r(),
                null == o || o();
            };
          }, [n, l, s, u, p, h, b, f, c.isAdvertShown]),
          (0, r.useEffect)(() => {
            s.state.status === m.FY.PLAYING && x();
          }, [s.state.status, x]),
          (0, g.jsxs)("div", {
            className: J().root,
            children: [
              (0, g.jsx)("div", {
                onClick: b,
                ref: i,
                className: J().container,
              }),
              (0, g.jsx)("div", {
                className: (0, C.W)(J().loadingIndicator, {
                  [J().loadingIndicator_showed]: y,
                }),
                children: (0, g.jsx)(H.$, { size: "m" }),
              }),
            ],
          })
        );
      });
      var ee = i(71630),
        et = i.n(ee);
      let ei = (0, b.Pi)(() => {
          let { formatMessage: e } = (0, f.Z)(),
            {
              advertBanners: {
                banners: { topAdvertBanner: t },
              },
              fullscreenVideoPlayer: i,
              modals: { disclaimerModal: n },
            } = (0, a.oR4)(),
            { defaultLayoutRef: d } = (0, a.$Y6)(),
            c = (0, a.pCT)(),
            u = (0, a.PYm)(),
            { notify: m } = (0, a.d$W)(),
            p = (0, a.R$C)(),
            v = (0, a.Eu6)(),
            h = (0, _.bL)(),
            y = (0, _.pN)(),
            [x] = i.ids,
            b = (0, A.W)(() => {
              let e = (0, a.Phe)(a.wxR.IDS),
                t = (0, a.Phe)(a.wxR.ACTIVE_INDEX),
                { clipIds: n, activeClipIndex: l } = (0, o.gw)(e, t);
              n.length
                ? (i.setIds(n),
                  i.setClipIndex(l),
                  i.setAnimationState(!1),
                  null == p ||
                    p.setEntityByIndex(i.clipActiveIndex, a.jiA.CLIP),
                  i.modal.open())
                : (i.modal.close(), i.reset());
            }),
            j = (0, A.W)(() => {
              if (i.modal.isOpened && !n.isOpened) {
                if (
                  (i.setAnimationState(!0),
                  x && y(String(x)),
                  i.isOpenedFromMain)
                ) {
                  u("/"),
                    l({
                      fullUrl: null,
                      locale: null,
                      url: null,
                      tld: "",
                      host: "",
                    }).then((e) => {
                      (0, a.gOT)(e);
                    }),
                    i.modal.close(),
                    i.reset();
                  return;
                }
                c();
              }
            });
          T(j),
            0 === i.ids.length && j(),
            (0, r.useEffect)(
              () => () => {
                i.reset(), t.setIsShowBanner(!0);
              },
              [i, t, t.setIsShowBanner],
            ),
            (0, r.useEffect)(() => {
              i.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
            }, [i.modal.isOpened, t, t.setIsShowBanner]);
          let L = (0, A.W)(() => {
            i.setAnimationState(!0),
              x && y(String(x)),
              u("/"),
              i.modal.close(),
              i.reset();
          });
          return (
            (0, r.useEffect)(() => {
              if (i.isNotFound || i.isSomethingWrong) {
                j();
                let t = i.modal.isOpened ? a.W$x.FULLSCREEN_ERROR : a.W$x.ERROR;
                m(
                  (0, g.jsx)(E.Q, {
                    error: e({ id: "error-messages.something-went-wrong" }),
                  }),
                  { containerId: t },
                );
              }
            }, [i.isNotFound, i.isSomethingWrong, i.modal.isOpened, j, e, m]),
            (0, r.useEffect)(() => {
              i.modal.isOpened && x && h(String(x));
            }, [i.modal.isOpened, h, x]),
            (0, r.useEffect)(
              () => (
                window.addEventListener("popstate", b),
                () => {
                  window.removeEventListener("popstate", b);
                }
              ),
              [b],
            ),
            s(i),
            (0, r.useEffect)(() => {
              i.isNeededToLoad && i.modal.isOpened && x && i.getClips();
            }, [i, i.isNeededToLoad, i.modal.isOpened, x]),
            (0, g.jsxs)(S.u, {
              className: (0, C.W)(et().root, et().important),
              open: i.modal.isOpened,
              onOpenChange: i.modal.onOpenChange,
              onClose: j,
              portalNode: d,
              size: "fullscreen",
              placement: "center",
              showHeader: !1,
              contentClassName: et().modalContent,
              closeOnOutsidePress: !1,
              escapeKey: !1,
              transitionDuration: i.withAnimation ? 300 : 0,
              ...(0, I.BA)(I.QM.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL),
              children: [
                (0, g.jsxs)("header", {
                  className: et().header,
                  children: [
                    (0, g.jsx)(N.Button, {
                      className: et().closeButton,
                      radius: "round",
                      color: "secondary",
                      size: "m",
                      icon: (0, g.jsx)(k.Icon, {
                        variant: "arrowDown",
                        size: "xs",
                      }),
                      onClick: j,
                      "aria-label": e({ id: "interface-actions.close" }),
                      ...(0, I.BA)(
                        I.QM.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON,
                      ),
                    }),
                    (0, g.jsx)(E.rU, {
                      className: et().logoLink,
                      href: "/",
                      onClick: L,
                      "aria-label": e({ id: "navigation.page-main" }),
                      ...(0, I.BA)(
                        I.QM.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON,
                      ),
                      children: (0, g.jsx)(k.Icon, {
                        variant: "musicLogoCenter".concat(v),
                        className: et()["logo_".concat(v.toLocaleLowerCase())],
                      }),
                    }),
                  ],
                }),
                (0, g.jsx)($, { closeModal: j }),
                (0, g.jsx)(q, {}),
                (0, g.jsx)(P.Notification, {
                  className: et().notification,
                  enableMultiContainer: !0,
                  containerId: a.W$x.FULLSCREEN_INFO,
                  position: "bottom-center",
                }),
                (0, g.jsx)(P.Notification, {
                  className: et().notification,
                  enableMultiContainer: !0,
                  containerId: a.W$x.FULLSCREEN_ERROR,
                  position: "bottom-center",
                }),
              ],
            })
          );
        }),
        ea = (0, b.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, a.oR4)();
          return e ? null : (0, g.jsx)(ei, {});
        });
    },
    21619: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return R;
        },
        k: function () {
          return m;
        },
      });
      var a = i(22874),
        n = i(64353),
        l = i(13534),
        r = i(40892),
        o = i(37285);
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
        d = (e) => e.map((e) => ({ id: e.id, title: e.title })),
        c = (e) => {
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
                r = c({
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
                  if (((e.genres = (0, a.pj)(d(i))), !i.length))
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
                    d = r.map((e) => (0, n.tR)({ artist: e })),
                    c = r.map((e) => e.id);
                  e.artistsByGenres.set(e.filter, {
                    artists: [...o.artists, ...d],
                    showedArtists: [...o.showedArtists, ...c],
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
      var _ = i(75441),
        p = i(32358),
        v = i(62569),
        h = i(65067),
        y = i(9317),
        x = i(15937),
        g = i(35846),
        b = i(26669),
        C = i(68208),
        f = i(59506),
        I = i(24226),
        A = i(17392),
        N = i(97141),
        k = i(18333),
        S = i(69756),
        P = i(59091),
        E = { src: "/_next/static/media/artist.c49b2bfa.png" },
        T = i(69649),
        j = i.n(T);
      let L = (0, v.Pi)((e) => {
        let { className: t, artist: i } = e,
          { ref: a, intersectionPropertyId: n } = (0, l.VfV)(),
          {
            wizard: { likeArtist: r, isArtistLiked: o },
          } = (0, l.oR4)(),
          { id: s, name: d, coverUri: c } = i,
          u = (0, h.useCallback)(() => {
            r(s);
          }, [r, s]),
          m = o(s),
          v = (0, h.useMemo)(
            () =>
              (0, _.jsx)(P.Paper, {
                className: j().cover,
                radius: "round",
                ...(0, g.BA)(g.QM.wizard.ARTIST_CARD),
                children: (0, _.jsxs)(C.Button, {
                  radius: "round",
                  className: j().coverBlock,
                  variant: "default",
                  onClick: u,
                  withRipple: !1,
                  withHover: !1,
                  "aria-pressed": m,
                  "aria-label": d,
                  children: [
                    (0, _.jsx)(N.BE, {
                      className: j().image,
                      src: c || E.src,
                      fit: "cover",
                      alt: d,
                      withAvatarReplace: !!c,
                      "aria-hidden": !0,
                    }),
                    (0, _.jsx)("div", {
                      className: (0, p.W)(j().like),
                      children: (0, _.jsx)(S.Icon, {
                        variant: "likedVariant",
                        size: "s",
                        className: j().icon,
                      }),
                    }),
                  ],
                }),
              }),
            [m, c, d, u],
          );
        return (0, _.jsx)(k.m7, {
          ref: a,
          className: (0, p.W)(j().root, { [j().root_selected]: m }, t),
          textPosition: "center",
          title: (0, _.jsx)(A.Caption, {
            "aria-hidden": !0,
            className: j().name,
            variant: "div",
            type: "entity",
            size: "l",
            weight: "medium",
            lineClamp: 2,
            children: d,
          }),
          "data-intersection-property-id": n,
          view: v,
          ...(0, g.BA)(g.bG.artist.ARTIST_ITEM),
        });
      });
      var w = i(29355),
        M = i.n(w);
      let B = {
          [l.t8m.Desktop]: { start: 40, end: 40 },
          [l.t8m.Mobile]: { start: 40, end: 40 },
        },
        R = (0, v.Pi)(() => {
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
            [d, c] = (0, b.z)(),
            u = (0, l.qR2)(),
            m = (0, I.useTabsState)(0),
            v = (0, h.useMemo)(
              () => (e) => {
                var i;
                if (!m.onTabChange || e === m.value) return;
                m.onTabChange(e);
                let a =
                  null === (i = t.genres[e]) || void 0 === i ? void 0 : i.id;
                t.setFilter(a), null == d || d.scrollTo({ top: 0 });
              },
              [t, m, d],
            ),
            k = (0, h.useMemo)(() => {
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
            S = (0, h.useMemo)(
              () =>
                (0, _.jsx)(N.no, {
                  className: M().tabCarousel,
                  ...m,
                  onTabChange: v,
                  isShimmerVisible: t.loadingState === l.Gui.PENDING,
                  shimmer: (0, _.jsx)(N.tS, {
                    isActive: !0,
                    className: M().tabCarousel,
                    shimmerClassName: M().tabShimmer,
                    count: i ? 2 : 3,
                  }),
                  children: t.genres.map((e, t) =>
                    (0, _.jsx)(
                      N.OK,
                      {
                        className: (0, p.W)(M().filter, {
                          [M().filter_selected]: t === m.value,
                        }),
                        titleClassName: M().tabTitle,
                        title: e.title,
                        value: t,
                      },
                      t,
                    ),
                  ),
                }),
              [t.genres, m, v, t.loadingState, i],
            ),
            P = (0, h.useCallback)(() => {
              t.getArtists(60);
            }, [t]);
          (0, h.useEffect)(() => {
            t.filter && P();
          }, [t.filter, P]);
          let E = (0, h.useCallback)(async () => {
            await t.getGenres(), P();
          }, [t, P]);
          (0, h.useEffect)(() => {
            t.modal.isOpened && E();
          }, [t, t.modal.isOpened, E]),
            (0, h.useEffect)(() => {
              t.loadingState === l.Gui.REJECT &&
                (t.modal.close(),
                o(
                  (0, _.jsx)(N.Q, {
                    error: e({ id: "error-messages.error-load-wizard" }),
                  }),
                  { containerId: l.W$x.ERROR },
                ));
            }, [t, t.getGenres, t.loadingState, e, o]);
          let T = (0, h.useMemo)(
              () =>
                (0, _.jsx)(A.Heading, {
                  className: M().title,
                  weight: "bold",
                  variant: "h1",
                  size: "l",
                  children: (0, _.jsx)(x.Z, { id: "wizard.modal-title" }),
                }),
              [],
            ),
            j = (0, h.useCallback)(async () => {
              t.selectedArtistsCounter < 3
                ? t.getArtists()
                : (await t.finish()) === l.SLo.OK &&
                  (await r.getSettings(), u()),
                t.modal.close();
            }, [u, r, t]);
          return (
            (0, h.useEffect)(
              () => (
                null == s ||
                  s.addShortcutsListener(l.Pwk.MAIN, l.yxF.CLOSE, () => {
                    t.modal.isOpened && j();
                  }),
                () => {
                  null == s ||
                    s.removeShortcutsListener(l.Pwk.MAIN, l.yxF.CLOSE);
                }
              ),
              [j, t.modal.isOpened, s],
            ),
            (0, _.jsxs)(f.u, {
              className: (0, p.W)(M().root, {
                [M().root_withCustomControls]: a || n,
              }),
              headerClassName: M().modalHeader,
              contentClassName: M().modalContent,
              open: t.modal.isOpened,
              onOpenChange: t.modal.onOpenChange,
              onClose: j,
              size: "fullscreen",
              placement: "center",
              labelClose: e({ id: "interface-actions.close" }),
              ...(0, g.BA)(g.QM.wizard.WIZARD_MODAL),
              header: i && T,
              escapeKey: !1,
              children: [
                (0, _.jsxs)("div", {
                  className: M().wrapper,
                  children: [
                    !i && T,
                    (0, _.jsx)(A.Caption, {
                      className: M().text,
                      variant: "div",
                      size: "l",
                      weight: "normal",
                      children: (0, _.jsx)(x.Z, { id: "wizard.modal-text" }),
                    }),
                    (0, _.jsx)(C.Button, {
                      className: M().button,
                      size: i ? "m" : "l",
                      iconPosition: "right",
                      radius: "xxxl",
                      color: "primary",
                      onClick: j,
                      disabled: t.selectedArtistsCounter < 3,
                      children: (0, _.jsx)(A.Caption, {
                        variant: "div",
                        size: "m",
                        weight: "medium",
                        children: k,
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: M().mainContainer,
                  children: [
                    (0, _.jsx)(N.J3, {
                      className: M().carousel,
                      carouselElement: S,
                      scrollPadding: B,
                    }),
                    (0, _.jsx)(N.Wv, {
                      withFooter: !1,
                      className: (0, p.W)(M().scrollContainer, M().important),
                      itemContentCallback: (i) => {
                        let a = t.artistsByGenre[i];
                        if (!a) {
                          let t = e(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: e({ id: "entity-names.artist" }) },
                          );
                          return (0, _.jsx)(N.hi, {
                            "aria-label": t,
                            round: !0,
                            centered: !0,
                          });
                        }
                        return (0, _.jsx)(L, { artist: a }, a.id);
                      },
                      data: t.artistsByGenre,
                      endReached: P,
                      listClassName: M().content,
                      itemClassName: M().item,
                      pageSize: 60,
                      handleRef: c,
                    }),
                  ],
                }),
              ],
            })
          );
        });
    },
    23442: function (e) {
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
    85872: function (e) {
      e.exports = {
        root_primary: "CommunicationButton_root_primary__rrmax",
        root_plus: "CommunicationButton_root_plus__d48MV",
        root_secondary: "CommunicationButton_root_secondary__YQujH",
        text: "CommunicationButton_text__kObnq",
      };
    },
    86745: function (e) {
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
    22425: function (e) {
      e.exports = {
        timecode: "ChangeTimecode_timecode__UScFt",
        root: "ChangeTimecode_root__QxEw_",
        root_withTimecode: "ChangeTimecode_root_withTimecode__eJhYI",
        root_mobile: "ChangeTimecode_root_mobile__SzOdx",
        root_fullscreen: "ChangeTimecode_root_fullscreen__FA6r0",
        slider: "ChangeTimecode_slider__P4qmT",
      };
    },
    29990: function (e) {
      e.exports = {
        root: "Timecode_root__TLT75",
        root_start: "Timecode_root_start__pHG5N",
        root_end: "Timecode_root_end__LLQsh",
      };
    },
    4942: function (e) {
      e.exports = {
        backgroundProgressbar:
          "ChangeTimecodeBackground_backgroundProgressbar__hT_QP",
        progressbar: "ChangeTimecodeBackground_progressbar__M93Ie",
        timecodeGroup: "ChangeTimecodeBackground_timecodeGroup__2VQ1N",
        thumb: "ChangeTimecodeBackground_thumb__vx6J0",
        timecodeGroupCurrent:
          "ChangeTimecodeBackground_timecodeGroupCurrent__aGlrB",
        important: "ChangeTimecodeBackground_important__OSzLR",
        root_focusVisible: "ChangeTimecodeBackground_root_focusVisible__RLp5i",
        root: "ChangeTimecodeBackground_root__B89FS",
        root_isPlayingTrack:
          "ChangeTimecodeBackground_root_isPlayingTrack__2naHL",
        slider: "ChangeTimecodeBackground_slider__Jdu3l",
      };
    },
    61907: function (e) {
      e.exports = {
        timecode: "TimecodeGroup_timecode__IJXpy",
        timecode_current: "TimecodeGroup_timecode_current__wv9pb",
        timecode_current_animation:
          "TimecodeGroup_timecode_current_animation__kZUW_",
        timecode_end: "TimecodeGroup_timecode_end__kzP5g",
        timecode_end_hidden: "TimecodeGroup_timecode_end_hidden__BxQ5h",
      };
    },
    30695: function (e) {
      e.exports = {
        icon: "ChangeVolume_icon__5Zv2a",
        button: "ChangeVolume_button__4HLEr",
        sliderContainer: "ChangeVolume_sliderContainer__pvOZa",
        sliderContainer_focusVisible:
          "ChangeVolume_sliderContainer_focusVisible__1JxI9",
        wrapperSlider: "ChangeVolume_wrapperSlider__9S1Vi",
        root: "ChangeVolume_root__HDxtA",
        slider: "ChangeVolume_slider__fCKGZ",
        important: "ChangeVolume_important__ZIYpu",
      };
    },
    56939: function (e) {
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
        gradientOverlay: "CommunicationModal_gradientOverlay__MOg5g",
        buttonText: "CommunicationModal_buttonText__2XS8u",
      };
    },
    94089: function (e) {
      e.exports = {
        root: "ImageSliderModal_root__AZO_D",
        root_mobile: "ImageSliderModal_root_mobile__lBg8o",
        modalContent: "ImageSliderModal_modalContent__R7c_w",
        closeButton: "ImageSliderModal_closeButton__mabus",
        content: "ImageSliderModal_content__Gjm6N",
        image: "ImageSliderModal_image__ZUYEL",
        image_loading: "ImageSliderModal_image_loading__1Fyyn",
        leftArrowWrapper: "ImageSliderModal_leftArrowWrapper__2d5RO",
        rightArrowWrapper: "ImageSliderModal_rightArrowWrapper__vSPiO",
        slider: "ImageSliderModal_slider__gDVWR",
        "swiper-pagination-disabled":
          "ImageSliderModal_swiper-pagination-disabled__l_U2N",
        "swiper-pagination-clickable":
          "ImageSliderModal_swiper-pagination-clickable__URGM_",
        "swiper-rtl": "ImageSliderModal_swiper-rtl__6n6TQ",
        "swiper-horizontal": "ImageSliderModal_swiper-horizontal__qVsPY",
        "swiper-vertical": "ImageSliderModal_swiper-vertical__fVuXc",
        wrapper: "ImageSliderModal_wrapper__s31SU",
        slide: "ImageSliderModal_slide__4VnYF",
        loadingIndicator: "ImageSliderModal_loadingIndicator__3yfbk",
        loadingIndicator_showed:
          "ImageSliderModal_loadingIndicator_showed__Ec0yW",
      };
    },
    59472: function (e) {
      e.exports = {
        icon: "NotificationHtmlCodeCopied_icon__qJMbi",
        message: "NotificationHtmlCodeCopied_message__ivRvX",
      };
    },
    50287: function (e) {
      e.exports = {
        root: "ShareIframeEditor_root__LALvp",
        controls: "ShareIframeEditor_controls__k8vT_",
        iframeCodeInputContainer:
          "ShareIframeEditor_iframeCodeInputContainer__b4Klq",
        settings: "ShareIframeEditor_settings__UWt51",
        copyButton: "ShareIframeEditor_copyButton___jOz_",
        sizeInputContainer: "ShareIframeEditor_sizeInputContainer__s6PMW",
        iframeCodeInput: "ShareIframeEditor_iframeCodeInput__M9w6E",
        iframeContainer: "ShareIframeEditor_iframeContainer__pgdr5",
        iframe: "ShareIframeEditor_iframe__ky5_o",
      };
    },
    93811: function (e) {
      e.exports = {
        root: "ShareIframeModal_root__t_NbK",
        content: "ShareIframeModal_content__jcq_o",
      };
    },
    82936: function (e) {
      e.exports = {
        root: "TrackModal_root__QrFg6",
        header: "TrackModal_header__hjfRd",
        closeButton: "TrackModal_closeButton__VLm_R",
        modalContent: "TrackModal_modalContent__AzQPF",
        content: "TrackModal_content__9qH7W",
        container: "TrackModal_container__JaG86",
      };
    },
    48993: function (e) {
      e.exports = {
        root: "TrackModalAlbum_root__ux7J4",
        title: "TrackModalAlbum_title__CtM2_",
      };
    },
    92064: function (e) {
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
    26759: function (e) {
      e.exports = {
        root: "TrackModalControls_root__alpd3",
        menuWrapper: "TrackModalControls_menuWrapper__tDLID",
        menuButton: "TrackModalControls_menuButton__V6L4c",
        disabledButtonByDisclaimer:
          "TrackModalControls_disabledButtonByDisclaimer__qfCvg",
      };
    },
    27273: function (e) {
      e.exports = {
        root: "TrackModalLyrics_root__JABJp",
        title: "TrackModalLyrics_title__zjWl_",
        button: "TrackModalLyrics_button__YqxIm",
        lyrics: "TrackModalLyrics_lyrics__naoEF",
      };
    },
    949: function (e) {
      e.exports = {
        root: "TrackModalLyricsShimmer_root__t88sX",
        title: "TrackModalLyricsShimmer_title__lIyk4",
        lyrics: "TrackModalLyricsShimmer_lyrics__BSM_Q",
        important: "TrackModalLyricsShimmer_important__U1BbD",
        button: "TrackModalLyricsShimmer_button__uAG_w",
      };
    },
    12642: function (e) {
      e.exports = {
        root: "TrackModalSimilarTracks_root__EAOmg",
        title: "TrackModalSimilarTracks_title__0WPaJ",
        item: "TrackModalSimilarTracks_item__BGQWd",
        important: "TrackModalSimilarTracks_important__mGqEv",
        tracksContainer: "TrackModalSimilarTracks_tracksContainer__E55ep",
      };
    },
    17397: function (e) {
      e.exports = {
        title: "TrackModalTitle_title__3zfNn",
        important: "TrackModalTitle_important__qNVlq",
        content: "TrackModalTitle_content__mtQKw",
        explicitMark: "TrackModalTitle_explicitMark__aRT_I",
        text: "TrackModalTitle_text__3iWX4",
        artistCaption: "TrackModalTitle_artistCaption__Sj1CR",
        link: "TrackModalTitle_link__kzVsl",
        meta: "TrackModalTitle_meta__xlEgt",
        entityName: "TrackModalTitle_entityName__BRnTV",
      };
    },
    29754: function (e) {
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
    10077: function (e) {
      e.exports = {
        root: "DownloadMobileApp_root__RU7VS",
        closeButton: "DownloadMobileApp_closeButton__t38Rw",
        text: "DownloadMobileApp_text__bCbs3",
        subtitle: "DownloadMobileApp_subtitle__vPtiS",
        buttons: "DownloadMobileApp_buttons__mL4w1",
        listenInAppLink: "DownloadMobileApp_listenInAppLink__flOyk",
        button: "DownloadMobileApp_button__r0E7Z",
        stayButton: "DownloadMobileApp_stayButton__k3Ot8",
      };
    },
    62484: function (e) {
      e.exports = {
        root: "DownloadMobileAppModal_root__nD7fo",
        content: "DownloadMobileAppModal_content__4ZW2F",
      };
    },
    51872: function (e) {
      e.exports = {
        image: "FamilyInviteErrorView_image__OyVA_",
        image_small: "FamilyInviteErrorView_image_small__uczsu",
      };
    },
    65910: function (e) {
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
    81664: function (e) {
      e.exports = {
        growContainer: "FamilyInviteStepInfo_growContainer__y0xmo",
        important: "FamilyInviteStepInfo_important__YvkpI",
      };
    },
    86670: function (e) {
      e.exports = {
        image: "FamilyInviteStepSuccess_image__kDBnc",
        image_mobile: "FamilyInviteStepSuccess_image_mobile__PyiXK",
      };
    },
    99907: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    77204: function (e) {
      e.exports = {
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        root: "NavbarDesktop_root__scYzp",
        logoWrapper: "NavbarDesktop_logoWrapper__89ce6",
        navigation: "NavbarDesktop_navigation__dLUGW",
        navigation_gapFill: "NavbarDesktop_navigation_gapFill__SsWxA",
        logoLink: "NavbarDesktop_logoLink__KR0Dk",
        logo: "NavbarDesktop_logo__Z4jGx",
        collapseButtonTooltip_hidden:
          "NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ",
        subTitle: "NavbarDesktop_subTitle__Fqvr4",
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
    94905: function (e) {
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
    81991: function (e) {
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
    96420: function (e) {
      e.exports = {
        root: "NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ",
        icon: "NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec",
        button: "NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw",
      };
    },
    51239: function (e) {
      e.exports = {
        root: "NavbarDesktopAnimatedPlusBar_root___wH9W",
        button: "NavbarDesktopAnimatedPlusBar_button__IX7L4",
        important: "NavbarDesktopAnimatedPlusBar_important__7R916",
        icon: "NavbarDesktopAnimatedPlusBar_icon__9lTgJ",
      };
    },
    70699: function (e) {
      e.exports = {
        root: "NavbarDesktopPlusBar_root__QgKqJ",
        logos: "NavbarDesktopPlusBar_logos__kKKEl",
        addition: "NavbarDesktopPlusBar_addition__vluXf",
        title: "NavbarDesktopPlusBar_title__mMdem",
        buttons: "NavbarDesktopPlusBar_buttons__40_1A",
      };
    },
    60222: function (e) {
      e.exports = {
        root: "NavbarDesktopUnauthorizedBar_root__uQZ9L",
        title: "NavbarDesktopUnauthorizedBar_title__vf0W7",
        subtitle: "NavbarDesktopUnauthorizedBar_subtitle__anNNQ",
        userProfile: "NavbarDesktopUnauthorizedBar_userProfile__hAABb",
        userId: "NavbarDesktopUnauthorizedBar_userId__m0jC6",
        buttons: "NavbarDesktopUnauthorizedBar_buttons__94Y3N",
      };
    },
    87830: function (e) {
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
    69957: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
        disabledNavigationItem: "NavbarMobile_disabledNavigationItem__PA3EE",
      };
    },
    55846: function (e) {
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
    12092: function (e) {
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
    64949: function (e) {
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
    54332: function (e) {
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
    19245: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktop_root___8vo1",
        important: "FullscreenPlayerDesktop_important__dGfiL",
        header: "FullscreenPlayerDesktop_header__OBhzq",
        modalContent: "FullscreenPlayerDesktop_modalContent__Zs_LC",
        notification: "FullscreenPlayerDesktop_notification__luD_J",
        closeButton: "FullscreenPlayerDesktop_closeButton__MQ64s",
      };
    },
    41081: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopButton_root__qGgoC",
        button: "FullscreenPlayerDesktopButton_button__7NEl6",
      };
    },
    63634: function (e) {
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
    28536: function (e) {
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
    70659: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopPoster_root__d__YD",
        cover: "FullscreenPlayerDesktopPoster_cover__CDmhM",
      };
    },
    36891: function (e) {
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
    4473: function (e) {
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
    22392: function (e) {
      e.exports = {
        root: "PlayingNow_root__0lQa8",
        textBlock: "PlayingNow_textBlock___CfRh",
        title: "PlayingNow_title__82csz",
        subTitle: "PlayingNow_subTitle__JNJfh",
        link: "PlayingNow_link__4gLK9",
      };
    },
    57577: function (e) {
      e.exports = {
        message: "NotificationChangeQuality_message__coCvn",
        changeButton: "NotificationChangeQuality_changeButton__Hzc3y",
        icon: "NotificationChangeQuality_icon__bOfQO",
      };
    },
    26512: function (e) {
      e.exports = {
        root: "PlayQueue_root__ponhw",
        content: "PlayQueue_content__zIUvd",
        scrollContent: "PlayQueue_scrollContent__2dI0v",
      };
    },
    33675: function (e) {
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
    90328: function (e) {
      e.exports = {
        root: "PlayQueueVibeBlock_root__cVjcM",
        ripple: "PlayQueueVibeBlock_ripple__Ig_pb",
        vibeCover: "PlayQueueVibeBlock_vibeCover__THxKz",
        title: "PlayQueueVibeBlock_title__G3kir",
        vibeTitle: "PlayQueueVibeBlock_vibeTitle__C5fWp",
      };
    },
    69487: function (e) {
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
    84158: function (e) {
      e.exports = {
        icon: "PlayQueueButton_icon__7fc0G",
        icon_active: "PlayQueueButton_icon_active__4A8H2",
        animation_scaled: "PlayQueueButton_animation_scaled__w_Wir",
        scale: "PlayQueueButton_scale__dXShR",
        animation_unscaled: "PlayQueueButton_animation_unscaled__Lt_j9",
        unscale: "PlayQueueButton_unscale__BlmKQ",
      };
    },
    90376: function (e) {
      e.exports = {
        root: "PlayQueueDnDDraggableTrack_root__ysTVY",
        dots: "PlayQueueDnDDraggableTrack_dots__enjOX",
        noHoverItem: "PlayQueueDnDDraggableTrack_noHoverItem__uHRh1",
      };
    },
    8839: function (e) {
      e.exports = {
        root: "PlayQueueDnDTrackWrapper_root__CithE",
        inner: "PlayQueueDnDTrackWrapper_inner__xq3xM",
        dragging: "PlayQueueDnDTrackWrapper_dragging__Tk9uP",
        dragOverlay: "PlayQueueDnDTrackWrapper_dragOverlay__ulF2W",
      };
    },
    21271: function (e) {
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
    39646: function (e) {
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
        modeTitle: "PlayQueueTitle_modeTitle__KixWV",
      };
    },
    44329: function (e) {
      e.exports = {
        root: "PlayerBar_root__cXUnU",
        adPopup: "PlayerBar_adPopup__BrBC6",
      };
    },
    26760: function (e) {
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
    15934: function (e) {
      e.exports = {
        root: "PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN",
        important: "PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK",
        ripple: "PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF",
        progressBar:
          "PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK",
        slider: "PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn",
        player: "PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs",
        playerBar: "PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9",
        info: "PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_",
        infoCard: "PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW",
        coverContainer:
          "PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG",
        cover: "PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt",
        description:
          "PlayerBarDesktopWithBackgroundProgressBar_description__5jHke",
        artists: "PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6",
        artistLink:
          "PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_",
        infoButtons:
          "PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy",
        sonata: "PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_",
        meta: "PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC",
        sonataControls:
          "PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ",
        settingsButton:
          "PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK",
        trackContextMenuIcon:
          "PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI",
        triggerModal:
          "PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d",
      };
    },
    13896: function (e) {
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
        sliderChangeTimdeCode: "PlayerBarMobile_sliderChangeTimdeCode__Yp5Ue",
        backgroundProgress: "PlayerBarMobile_backgroundProgress__jevhK",
      };
    },
    33915: function (e) {
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
    82958: function (e) {
      e.exports = {
        root: "QualitySettingsModal_root__f3gE2",
        modalContent: "QualitySettingsModal_modalContent__R_JNT",
        overlay: "QualitySettingsModal_overlay__8pjOO",
        button: "QualitySettingsModal_button__BCHBi",
      };
    },
    69050: function (e) {
      e.exports = {
        root: "SyncLyrics_root__6KZg4",
        content: "SyncLyrics_content__lbkWP",
      };
    },
    2707: function (e) {
      e.exports = {
        icon: "SyncLyricsButton_icon__m0Gdk",
        icon_active: "SyncLyricsButton_icon_active__6WcWG",
        animation_scaled: "SyncLyricsButton_animation_scaled__vwsc_",
        scale: "SyncLyricsButton_scale__FGAYV",
        animation_unscaled: "SyncLyricsButton_animation_unscaled__eM1Wb",
        unscale: "SyncLyricsButton_unscale__ceLQu",
      };
    },
    48457: function (e) {
      e.exports = {
        root: "SyncLyricsFooter_root__STCKQ",
        major: "SyncLyricsFooter_major__QMZmT",
        writers: "SyncLyricsFooter_writers__c7zhj",
      };
    },
    95858: function (e) {
      e.exports = { root: "SyncLyricsLine_root__r62BN" };
    },
    96268: function (e) {
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
    99127: function (e) {
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
    17100: function (e) {
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
        icon: "VideoAd_icon__o_Hzn",
        text: "VideoAd_text__rjKqZ",
      };
    },
    51460: function (e) {
      e.exports = {
        root: "Trailer_root__c8eG3",
        header: "Trailer_header__FBFMi",
        trackShimmer: "Trailer_trackShimmer__qmCN3",
        albumShimmer: "Trailer_albumShimmer__8RxuC",
        footer: "Trailer_footer__POMTS",
      };
    },
    86128: function (e) {
      e.exports = {
        root: "TrailerError_root__GwuKR",
        textContainer: "TrailerError_textContainer__lF7RZ",
        title: "TrailerError_title__Q52Pa",
        description: "TrailerError_description__60UJ6",
      };
    },
    27016: function (e) {
      e.exports = {
        root: "TrailerFooter_root__LKXby",
        playButtonShimmer: "TrailerFooter_playButtonShimmer__5QwPi",
        linkButtonShimmer: "TrailerFooter_linkButtonShimmer__ZV1s1",
      };
    },
    83508: function (e) {
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
    33445: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        modalContent: "TrailerModal_modalContent__ZSNFe",
        header: "TrailerModal_header__0h1zj",
      };
    },
    15404: function (e) {
      e.exports = {
        root: "TrailerTrack_root__0UIP4",
        root_active: "TrailerTrack_root_active__F_8Iw",
      };
    },
    7058: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        artistCaption: "ClipMeta_artistCaption__8RrCD",
        link: "ClipMeta_link__6QadT",
        root: "ClipMeta_root__pqZ6s",
        root_withSecondaryColor: "ClipMeta_root_withSecondaryColor__va_JM",
        explicitMark: "ClipMeta_explicitMark__TmCzw",
        metaContainer: "ClipMeta_metaContainer__023Bj",
        titleContainer: "ClipMeta_titleContainer__dtIm1",
        title: "ClipMeta_title__L6Nwk",
      };
    },
    71630: function (e) {
      e.exports = {
        root: "FullscreenVideoPlayerDesktop_root__a69Pd",
        important: "FullscreenVideoPlayerDesktop_important__NvXzL",
        header: "FullscreenVideoPlayerDesktop_header__oiftJ",
        modalContent: "FullscreenVideoPlayerDesktop_modalContent__YeGCV",
        closeButton: "FullscreenVideoPlayerDesktop_closeButton__OqSFs",
        logoLink: "FullscreenVideoPlayerDesktop_logoLink__o92zi",
        logo_ru: "FullscreenVideoPlayerDesktop_logo_ru__uRbpz",
        logo_en: "FullscreenVideoPlayerDesktop_logo_en__mBcdF",
      };
    },
    37914: function (e) {
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
        slider: "VideoPlayerBarDesktop_slider__xULTh",
        important: "VideoPlayerBarDesktop_important__HR9Xf",
      };
    },
    5556: function (e) {
      e.exports = {
        root: "VideoPlayerBarContainerDesktop_root__Aw4GO",
        root_visible: "VideoPlayerBarContainerDesktop_root_visible__F_7vs",
        root_withHoveredCarousel:
          "VideoPlayerBarContainerDesktop_root_withHoveredCarousel__2gzlW",
        carouselWrapper:
          "VideoPlayerBarContainerDesktop_carouselWrapper__HN1rc",
        carousel: "VideoPlayerBarContainerDesktop_carousel__15RwT",
        carouselBlock: "VideoPlayerBarContainerDesktop_carouselBlock__8prtL",
        carouselControls:
          "VideoPlayerBarContainerDesktop_carouselControls__OwWar",
        clipCardTitle: "VideoPlayerBarContainerDesktop_clipCardTitle__4wJ1A",
        important: "VideoPlayerBarContainerDesktop_important__PBP47",
        clipCardArtist: "VideoPlayerBarContainerDesktop_clipCardArtist__XegP0",
      };
    },
    68217: function (e) {
      e.exports = {
        container: "VideoPlayerContainer_container__pZe41",
        loadingIndicator: "VideoPlayerContainer_loadingIndicator__qDxPV",
        root: "VideoPlayerContainer_root__GHDoi",
        loadingIndicator_showed:
          "VideoPlayerContainer_loadingIndicator_showed__KQCNf",
      };
    },
    69649: function (e) {
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
    29355: function (e) {
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
    18128: function (e, t, i) {
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
    89143: function (e, t, i) {
      "use strict";
      var a, n;
      i.d(t, {
        B: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).OK = "ok"),
        (n.ERROR = "error");
    },
    97472: function (e, t, i) {
      "use strict";
      var a, n;
      i.d(t, {
        e: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).MODAL = "modal"),
        (n.FOREIGN_AGENT = "foreignAgent"),
        (n.INFORMATIONAL = "informational"),
        (n.AGE_18 = "age18"),
        (n.EXPLICIT = "explicit"),
        (n.DESCRIPTION_TEXT = "descriptionText"),
        (n.AGE_18_ICON = "age18Icon"),
        (n.EXPLICIT_ICON = "explicitIcon"),
        (n.EXCLAMATION_ICON = "exclamationIcon");
    },
    26614: function (e, t, i) {
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
    15622: function (e, t, i) {
      "use strict";
      i.d(t, {
        d: function () {
          return n;
        },
      });
      var a = i(84638);
      function n(e) {
        return (null == e ? void 0 : e.data.type) === a.A.Various;
      }
    },
  },
]);
