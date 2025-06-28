(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6454],
  {
    93805: function (e, t, i) {
      "use strict";
      i.d(t, {
        ap: function () {
          return $;
        },
        Ux: function () {
          return m;
        },
      });
      var n,
        s,
        a = i(13534);
      let o = (e) =>
        !!e &&
        e.some((e) => {
          let [t] = (null == e ? void 0 : e.split(":")) || [];
          return e === a.sHr || (t && a.kF5.includes(t));
        });
      var r = i(22874),
        l = i(40892);
      let c = (e) => {
          let { type: t, tag: i } = e.id;
          return {
            title: e.name,
            seed: "".concat(t, ":").concat(i),
            specialContext: e.specialContext,
            specialContextImage: e.specialContextImage,
          };
        },
        u = (e) => ({
          value: e.value,
          title: e.name,
          seed: e.serializedSeed,
          imageUrl: e.imageUrl,
        }),
        d = (e, t) => {
          let i = [];
          return (
            t.possibleValues.forEach((e) => {
              e.unspecified || i.push(u(e));
            }),
            { type: e, title: t.name, values: (0, r.pj)(i) }
          );
        };
      ((n = s || (s = {})).DIVERSITY = "diversity"),
        (n.MOOD_ENERGY = "moodEnergy"),
        (n.LANGUAGE = "language");
      let p = r.V5.model("ContextItem", {
          title: r.V5.string,
          seed: r.V5.string,
          specialContext: r.V5.boolean,
          specialContextImage: r.V5.optional(r.V5.string, ""),
        }),
        g = r.V5.model("RestrictonValue", {
          value: r.V5.string,
          title: r.V5.string,
          seed: r.V5.string,
          imageUrl: r.V5.maybe(r.V5.string),
        }),
        b = r.V5.model("Restricton", {
          type: r.V5.enumeration(Object.values(s)),
          title: r.V5.string,
          values: r.V5.array(g),
        }),
        m = r.V5.compose(
          r.V5.model("VibeSettings", {
            contextItems: r.V5.array(p),
            diversity: r.V5.maybeNull(b),
            moodEnergy: r.V5.maybeNull(b),
            language: r.V5.maybeNull(b),
          }),
          l.fu,
        ).actions((e) => ({
          getData: (0, r.ls)(function* (t) {
            let { rotorResource: i, modelActionsLogger: n } = (0, r.dU)(e);
            if (e.loadingState !== a.Gui.PENDING)
              try {
                var o, l, u, p;
                e.loadingState = a.Gui.PENDING;
                let n = yield i.waveSettings(t);
                (null == n
                  ? void 0
                  : null === (o = n.settingRestrictions) || void 0 === o
                    ? void 0
                    : o.diversity) &&
                  (e.diversity = d(
                    s.DIVERSITY,
                    n.settingRestrictions.diversity,
                  )),
                  (null == n
                    ? void 0
                    : null === (l = n.settingRestrictions) || void 0 === l
                      ? void 0
                      : l.moodEnergy) &&
                    (e.moodEnergy = d(
                      s.MOOD_ENERGY,
                      n.settingRestrictions.moodEnergy,
                    )),
                  (null == n
                    ? void 0
                    : null === (u = n.settingRestrictions) || void 0 === u
                      ? void 0
                      : u.language) &&
                    (e.language = d(
                      s.LANGUAGE,
                      n.settingRestrictions.language,
                    ));
                let g =
                  Array.isArray(null == n ? void 0 : n.blocks) &&
                  (null == n
                    ? void 0
                    : null === (p = n.blocks) || void 0 === p
                      ? void 0
                      : p.find(
                          (e) => (null == e ? void 0 : e.type) === "contexts",
                        ));
                g &&
                  Array.isArray(g.items) &&
                  (e.contextItems = (0, r.pj)(g.items.map(c))),
                  e.loadingState !== a.Gui.IDLE &&
                    (e.loadingState = a.Gui.RESOLVE);
              } catch (t) {
                n.error(t),
                  e.loadingState !== a.Gui.IDLE &&
                    (e.loadingState = a.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = a.Gui.IDLE),
              (e.contextItems = (0, r.pj)([])),
              (e.diversity = null),
              (e.moodEnergy = null),
              (e.language = null);
          },
        }));
      var v = i(75441),
        _ = i(62569),
        h = i(65067),
        x = i.t(h, 2),
        y = i(9317),
        f = i(15937),
        E = i(35846),
        S = i(93093),
        B = {
          839: (e, t, i) => {
            i.r(t),
              i.d(t, {
                DOWN: () => r,
                LEFT: () => s,
                RIGHT: () => a,
                UP: () => o,
                useSwipeable: () => g,
              });
            var n = i(810);
            let s = "Left",
              a = "Right",
              o = "Up",
              r = "Down",
              l = {
                delta: 10,
                preventScrollOnSwipe: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0,
                swipeDuration: 1 / 0,
                touchEventOptions: { passive: !0 },
              },
              c = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0],
              },
              u = "mousemove",
              d = "mouseup";
            function p(e, t) {
              if (0 === t) return e;
              let i = (Math.PI / 180) * t;
              return [
                e[0] * Math.cos(i) + e[1] * Math.sin(i),
                e[1] * Math.cos(i) - e[0] * Math.sin(i),
              ];
            }
            function g(e) {
              var t, i, g;
              let b;
              let { trackMouse: m } = e,
                v = n.useRef(Object.assign({}, c)),
                _ = n.useRef(Object.assign({}, l)),
                h = n.useRef(Object.assign({}, _.current));
              for (b in ((h.current = Object.assign({}, _.current)),
              (_.current = Object.assign(Object.assign({}, l), e)),
              l))
                void 0 === _.current[b] && (_.current[b] = l[b]);
              let [x, y] = n.useMemo(
                () =>
                  (function (e, t) {
                    let i = (t) => {
                        let i = "touches" in t;
                        (i && t.touches.length > 1) ||
                          e((e, s) => {
                            s.trackMouse &&
                              !i &&
                              (document.addEventListener(u, n),
                              document.addEventListener(d, m));
                            let { clientX: a, clientY: o } = i
                                ? t.touches[0]
                                : t,
                              r = p([a, o], s.rotationAngle);
                            return (
                              s.onTouchStartOrOnMouseDown &&
                                s.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), c),
                                {
                                  initial: r.slice(),
                                  xy: r,
                                  start: t.timeStamp || 0,
                                },
                              )
                            );
                          });
                      },
                      n = (t) => {
                        e((e, i) => {
                          let n = "touches" in t;
                          if (n && t.touches.length > 1) return e;
                          if (t.timeStamp - e.start > i.swipeDuration)
                            return e.swiping
                              ? Object.assign(Object.assign({}, e), {
                                  swiping: !1,
                                })
                              : e;
                          let { clientX: c, clientY: u } = n ? t.touches[0] : t,
                            [d, g] = p([c, u], i.rotationAngle),
                            b = d - e.xy[0],
                            m = g - e.xy[1],
                            v = Math.abs(b),
                            _ = Math.abs(m),
                            h = (t.timeStamp || 0) - e.start,
                            x = v > _ ? (b > 0 ? a : s) : m > 0 ? r : o,
                            y =
                              "number" == typeof i.delta
                                ? i.delta
                                : i.delta[x.toLowerCase()] || l.delta;
                          if (v < y && _ < y && !e.swiping) return e;
                          let f = {
                            absX: v,
                            absY: _,
                            deltaX: b,
                            deltaY: m,
                            dir: x,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: Math.sqrt(v * v + _ * _) / (h || 1),
                            vxvy: [b / (h || 1), m / (h || 1)],
                          };
                          f.first && i.onSwipeStart && i.onSwipeStart(f),
                            i.onSwiping && i.onSwiping(f);
                          let E = !1;
                          return (
                            (i.onSwiping ||
                              i.onSwiped ||
                              i["onSwiped".concat(x)]) &&
                              (E = !0),
                            E &&
                              i.preventScrollOnSwipe &&
                              i.trackTouch &&
                              t.cancelable &&
                              t.preventDefault(),
                            Object.assign(Object.assign({}, e), {
                              first: !1,
                              eventData: f,
                              swiping: !0,
                            })
                          );
                        });
                      },
                      g = (t) => {
                        e((e, i) => {
                          let n;
                          if (e.swiping && e.eventData) {
                            if (t.timeStamp - e.start < i.swipeDuration) {
                              (n = Object.assign(
                                Object.assign({}, e.eventData),
                                { event: t },
                              )),
                                i.onSwiped && i.onSwiped(n);
                              let s = i["onSwiped".concat(n.dir)];
                              s && s(n);
                            }
                          } else i.onTap && i.onTap({ event: t });
                          return (
                            i.onTouchEndOrOnMouseUp &&
                              i.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), c),
                              { eventData: n },
                            )
                          );
                        });
                      },
                      b = () => {
                        document.removeEventListener(u, n),
                          document.removeEventListener(d, m);
                      },
                      m = (e) => {
                        b(), g(e);
                      },
                      v = (e, t) => {
                        let s = () => {};
                        if (e && e.addEventListener) {
                          let a = Object.assign(
                              Object.assign({}, l.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            o = [
                              ["touchstart", i, a],
                              [
                                "touchmove",
                                n,
                                Object.assign(
                                  Object.assign({}, a),
                                  t.preventScrollOnSwipe ? { passive: !1 } : {},
                                ),
                              ],
                              ["touchend", g, a],
                            ];
                          o.forEach((t) => {
                            let [i, n, s] = t;
                            return e.addEventListener(i, n, s);
                          }),
                            (s = () =>
                              o.forEach((t) => {
                                let [i, n] = t;
                                return e.removeEventListener(i, n);
                              }));
                        }
                        return s;
                      },
                      _ = {
                        ref: (t) => {
                          null !== t &&
                            e((e, i) => {
                              if (e.el === t) return e;
                              let n = {};
                              return (
                                e.el &&
                                  e.el !== t &&
                                  e.cleanUpTouch &&
                                  (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                i.trackTouch && t && (n.cleanUpTouch = v(t, i)),
                                Object.assign(
                                  Object.assign(Object.assign({}, e), {
                                    el: t,
                                  }),
                                  n,
                                )
                              );
                            });
                        },
                      };
                    return t.trackMouse && (_.onMouseDown = i), [_, v];
                  })((e) => (v.current = e(v.current, _.current)), {
                    trackMouse: m,
                  }),
                [m],
              );
              return (
                (v.current =
                  ((t = v.current),
                  (i = _.current),
                  (g = h.current),
                  i.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? i.preventScrollOnSwipe !== g.preventScrollOnSwipe ||
                        i.touchEventOptions.passive !==
                          g.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: y(t.el, i),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: y(t.el, i),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                x
              );
            }
          },
          8691: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useCallbackRef = void 0);
            let n = i(810);
            t.useCallbackRef = function (e) {
              let t = (0, n.useRef)({
                stableFn: function () {
                  for (
                    var e = arguments.length, i = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    i[n] = arguments[n];
                  return t.current.callback(...i);
                },
                callback: e,
              });
              return (
                (0, n.useInsertionEffect)(() => {
                  t.current.callback = e;
                }),
                t.current.stableFn
              );
            };
          },
          1381: (e, t, i) => {
            var n, s;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
            let a = i(839),
              o = i(8691);
            ((s = n || (t.SwipeablePlacement = n = {})).TOP = "top"),
              (s.BOTTOM = "bottom"),
              (s.RIGHT = "right"),
              (s.LEFT = "left");
            let r = (e) => {
                let { ref: t, deltaY: i, deltaX: s, placement: a } = e;
                requestAnimationFrame(() => {
                  t.current &&
                    ((t.current.style.willChange = "transform"),
                    (t.current.style.transform =
                      a === n.TOP || a === n.BOTTOM
                        ? "translateY(".concat(i || 0, "px)")
                        : "translateX(".concat(s || 0, "px)")));
                });
              },
              l = (e) => {
                let { ref: t, deltaY: i, deltaX: s, placement: a } = e;
                switch (a) {
                  case n.TOP:
                    i <= 0 && r({ ref: t, deltaY: i, deltaX: s, placement: a });
                    break;
                  case n.RIGHT:
                    s >= 0 && r({ ref: t, deltaY: i, deltaX: s, placement: a });
                    break;
                  case n.LEFT:
                    s <= 0 && r({ ref: t, deltaY: i, deltaX: s, placement: a });
                    break;
                  default:
                    i >= 0 && r({ ref: t, deltaY: i, deltaX: s, placement: a });
                }
              },
              c = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.transition = "none"),
                    (e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              u = (e) => {
                let {
                  ref: t,
                  deltaY: i,
                  deltaX: s,
                  placement: a,
                  threshold: o = 25,
                } = e;
                if (!t.current) return !1;
                let r =
                  (o / 100) *
                  (a === n.TOP || a === n.BOTTOM
                    ? t.current.offsetHeight
                    : t.current.offsetWidth);
                switch (a) {
                  case n.TOP:
                    return i < 0 && Math.abs(i) >= r;
                  case n.RIGHT:
                    return s > 0 && s >= r;
                  case n.LEFT:
                    return s < 0 && Math.abs(s) >= r;
                  default:
                    return i > 0 && i >= r;
                }
              };
            t.useComponentSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: i = {},
                  onClose: n,
                  disableSwipe: s,
                  placement: r,
                  threshold: d,
                } = e,
                p = (0, o.useCallbackRef)(() => {
                  n && (c(t), n());
                }),
                g = (0, o.useCallbackRef)((e) => {
                  s ||
                    l({
                      ref: t,
                      deltaY: e.deltaY,
                      deltaX: e.deltaX,
                      placement: r,
                    });
                }),
                b = (0, o.useCallbackRef)((e) => {
                  !s &&
                    (u({
                      ref: t,
                      deltaY: e.deltaY,
                      deltaX: e.deltaX,
                      placement: r,
                      threshold: d,
                    })
                      ? n && (c(t), n())
                      : c(t));
                });
              return {
                handlers: (0, a.useSwipeable)({
                  onSwiped: b,
                  onSwiping: g,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...i,
                }),
                onCloseCallback: p,
              };
            };
          },
          810: (e) => {
            e.exports = x;
          },
        },
        N = {};
      function T(e) {
        var t = N[e];
        if (void 0 !== t) return t.exports;
        var i = (N[e] = { exports: {} });
        return B[e](i, i.exports, T), i.exports;
      }
      (T.d = (e, t) => {
        for (var i in t)
          T.o(t, i) &&
            !T.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (T.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (T.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var O = {};
      (() => {
        Object.defineProperty(O, "__esModule", { value: !0 }),
          (O.usePopoverSwipeable = void 0);
        let e = T(810),
          t = T(1381);
        O.usePopoverSwipeable = (i) => {
          let {
              ref: n,
              swipeableProps: s = {},
              onClose: a,
              disableSwipe: o,
              placement: r,
              threshold: l,
            } = i,
            c = (0, e.useMemo)(() => {
              switch (r) {
                case "top":
                case "top-end":
                case "top-start":
                  return t.SwipeablePlacement.TOP;
                case "right":
                case "right-end":
                case "right-start":
                  return t.SwipeablePlacement.RIGHT;
                case "left":
                case "left-end":
                case "left-start":
                  return t.SwipeablePlacement.LEFT;
                default:
                  return t.SwipeablePlacement.BOTTOM;
              }
            }, [r]);
          return (0, t.useComponentSwipeable)({
            ref: n,
            swipeableProps: s,
            onClose: a,
            disableSwipe: o,
            placement: c,
            threshold: l,
          });
        };
      })(),
        O.__esModule;
      var j = O.usePopoverSwipeable,
        I = i(55188),
        R = i(91307),
        V = i(68208),
        C = i(69756),
        A = i(5559),
        w = i(92853),
        k = i(17392);
      let M = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          [t, i] = (0, h.useState)(e),
          { contentRef: n } = (0, a.$Y6)();
        return (
          (0, h.useEffect)(() => {
            let e = new ResizeObserver((e) => {
              let [n] = e || [];
              n && n.contentRect.height !== t && i(n.contentRect.height);
            });
            return (
              n && e.observe(n),
              () => {
                e.disconnect();
              }
            );
          }, [t, n]),
          { contentHeight: t }
        );
      };
      var G = i(32358),
        P = i(67126),
        L = i(75110),
        U = i.n(L);
      let z = (e) => {
        let { title: t, children: i, restrictionsClassName: n, ...s } = e;
        return (0, v.jsxs)("section", {
          className: U().root,
          ...(0, a.tEg)(s),
          children: [
            (0, v.jsx)(k.Caption, {
              variant: "span",
              type: "text",
              size: "m",
              weight: "medium",
              "aria-hidden": !0,
              children: t,
            }),
            (0, v.jsx)(P.y, {
              children: (0, v.jsx)(k.Heading, { variant: "h4", children: t }),
            }),
            (0, v.jsx)("div", {
              className: (0, G.W)(U().restrictions, n),
              children: i,
            }),
          ],
        });
      };
      var D = i(39054);
      let F = (e) => {
        var t, i, n;
        let { seed: s, title: o, isStation: r } = e,
          { vibe: l } = (0, a.oR4)(),
          { applySetting: c } = (0, a.QhE)({
            seeds:
              null !==
                (n =
                  null === (t = l.meta) || void 0 === t ? void 0 : t.seeds) &&
              void 0 !== n
                ? n
                : [],
            pageIdForFrom: a.Rhz.HOME,
            blockIdForFrom: a.BEo.RUP_MAIN_RADIO,
          }),
          { formatMessage: u } = (0, y.Z)(),
          d = !!(null === (i = l.meta) || void 0 === i
            ? void 0
            : i.seeds.includes(s)),
          p = l.applyingSetting === s,
          g = (0, h.useMemo)(
            () =>
              d
                ? "".concat(u({ id: "vibe-actions.remove" }), " ").concat(o)
                : "".concat(u({ id: "vibe-actions.apply" }), " ").concat(o),
            [d, o, u],
          );
        return {
          isApplying: p,
          isSelected: d,
          ariaLabel: g,
          ariaPressed: d,
          onClickHandler: (0, h.useCallback)(async () => {
            l.setApplyingSetting(s), await c(s, r), l.setApplyingSetting();
          }, [c, r, s, l]),
        };
      };
      var W = i(93071),
        Y = i.n(W);
      let H = (0, _.Pi)((e) => {
          let { item: t } = e,
            { vibe: i } = (0, a.oR4)(),
            n = (0, h.useRef)(null),
            {
              isApplying: s,
              isSelected: o,
              ariaPressed: r,
              onClickHandler: l,
            } = F({ seed: t.seed, title: t.title, isStation: !0 }),
            c = (0, h.useCallback)(
              (e) => {
                i.isApplying ||
                  (n.current && (0, R.m)(e, Y().ripple, n.current), l());
              },
              [l, i.isApplying],
            );
          return (0, v.jsxs)(V.Button, {
            radius: "xxxl",
            className: (0, G.W)(Y().button, Y().textButton, {
              [Y().button_selected]: o,
              [Y().button_applying]: s,
              [Y().specialButton]: t.specialContext,
            }),
            onClick: c,
            "aria-disabled": i.isApplying,
            "aria-pressed": r,
            withRipple: !1,
            ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON),
            children: [
              t.specialContext &&
                (0, v.jsx)(D.Image, {
                  className: Y().specialImage,
                  src: t.specialContextImage,
                  size: 100,
                  fit: "cover",
                  withAvatarReplace: !0,
                }),
              (0, v.jsx)(k.Caption, {
                variant: "span",
                type: "controls",
                size: "m",
                weight: "medium",
                className: Y().title,
                children: t.title,
              }),
              (0, v.jsx)("div", { className: Y().rippleContainer, ref: n }),
            ],
          });
        }),
        X = (0, _.Pi)((e) => {
          let { type: t, restrictionValue: i } = e,
            { vibe: n } = (0, a.oR4)(),
            o = (0, h.useRef)(null),
            {
              isApplying: r,
              isSelected: l,
              ariaPressed: c,
              onClickHandler: u,
            } = F({ seed: i.seed, title: i.title }),
            d = (0, h.useCallback)(
              (e) => {
                n.isApplying ||
                  (o.current && (0, R.m)(e, Y().ripple, o.current), u());
              },
              [u, n.isApplying],
            ),
            p = (0, h.useMemo)(
              () =>
                (0, v.jsx)(k.Caption, {
                  variant: "span",
                  type: "controls",
                  size: "m",
                  weight: "medium",
                  className: Y().title,
                  children: i.title,
                }),
              [i.title],
            );
          switch (t) {
            case s.DIVERSITY:
              return (0, v.jsxs)(V.Button, {
                className: (0, G.W)(Y().button, Y().diversityButton, {
                  [Y().button_selected]: l,
                  [Y().button_applying]: r,
                }),
                radius: "xl",
                "aria-disabled": n.isApplying,
                "aria-pressed": c,
                onClick: d,
                withRipple: !1,
                ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON),
                children: [
                  (0, v.jsx)(D.Image, {
                    "aria-hidden": !0,
                    src: i.imageUrl,
                    fit: "contain",
                    width: 40,
                    height: 40,
                    withAvatarReplace: !0,
                    className: Y().diversityButtonImage,
                  }),
                  p,
                  (0, v.jsx)("div", { className: Y().rippleContainer, ref: o }),
                ],
              });
            case s.MOOD_ENERGY:
              return (0, v.jsxs)("div", {
                className: Y().moodEnergy,
                ...(0, E.BA)(
                  E.bG.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON,
                ),
                children: [
                  (0, v.jsx)(V.Button, {
                    variant: "text",
                    className: (0, G.W)(Y().button, Y().moodEnergyButton, {
                      [Y().button_selected]: l,
                      [Y().button_applying]: r,
                    }),
                    radius: "round",
                    onClick: d,
                    withRipple: !1,
                    "aria-disabled": n.isApplying,
                    "aria-pressed": c,
                    "aria-label": i.title,
                    children: (0, v.jsx)(D.Image, {
                      src: i.imageUrl,
                      fit: "contain",
                      width: 52,
                      height: 52,
                      "aria-hidden": !0,
                      withAvatarReplace: !0,
                      className: Y().moodEnergyButtonImage,
                    }),
                  }),
                  (0, v.jsx)("span", { "aria-hidden": !0, children: p }),
                ],
              });
            case s.LANGUAGE:
              return (0, v.jsxs)(V.Button, {
                radius: "xxxl",
                className: (0, G.W)(Y().button, Y().textButton, {
                  [Y().button_selected]: l,
                  [Y().button_applying]: r,
                }),
                onClick: d,
                withRipple: !1,
                "aria-disabled": n.isApplying,
                "aria-pressed": c,
                ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON),
                children: [
                  p,
                  (0, v.jsx)("div", { className: Y().rippleContainer, ref: o }),
                ],
              });
            default:
              return null;
          }
        });
      var Z = i(16158),
        K = i.n(Z);
      let Q = (0, _.Pi)(() => {
        let { vibeSettings: e } = (0, a.oR4)(),
          { formatMessage: t } = (0, y.Z)();
        return (
          e.isNeededToLoad && e.getData(),
          (0, v.jsxs)("div", {
            className: K().root,
            children: [
              e.contextItems.length > 0 &&
                (0, v.jsx)(z, {
                  title: t({
                    id: "interface-actions.my-vibe-context-settings",
                  }),
                  restrictionsClassName: K().contextItems,
                  ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK),
                  children: e.contextItems.map((e) =>
                    (0, v.jsx)(
                      H,
                      {
                        item: e,
                        ...(0, E.BA)(
                          E.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON,
                        ),
                      },
                      e.seed,
                    ),
                  ),
                }),
              e.diversity &&
                (0, v.jsx)(z, {
                  title: e.diversity.title,
                  restrictionsClassName: K().diversity,
                  ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK),
                  children: e.diversity.values.map((t) => {
                    var i;
                    return (0, v.jsx)(
                      X,
                      {
                        type:
                          null === (i = e.diversity) || void 0 === i
                            ? void 0
                            : i.type,
                        restrictionValue: t,
                      },
                      t.value,
                    );
                  }),
                }),
              e.moodEnergy &&
                (0, v.jsx)(z, {
                  title: e.moodEnergy.title,
                  restrictionsClassName: K().moodEnergy,
                  ...(0, E.BA)(
                    E.bG.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK,
                  ),
                  children: e.moodEnergy.values.map((t) => {
                    var i;
                    return (0, v.jsx)(
                      X,
                      {
                        type:
                          null === (i = e.moodEnergy) || void 0 === i
                            ? void 0
                            : i.type,
                        restrictionValue: t,
                      },
                      t.value,
                    );
                  }),
                }),
              e.language &&
                (0, v.jsx)(z, {
                  title: e.language.title,
                  restrictionsClassName: K().contextItems,
                  ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK),
                  children: e.language.values.map((t) => {
                    var i;
                    return (0, v.jsx)(
                      X,
                      {
                        type:
                          null === (i = e.language) || void 0 === i
                            ? void 0
                            : i.type,
                        restrictionValue: t,
                      },
                      t.value,
                    );
                  }),
                }),
            ],
          })
        );
      });
      var q = i(48293),
        J = i.n(q);
      let $ = (0, _.Pi)(() => {
        var e, t, i, n;
        let { formatMessage: s } = (0, y.Z)(),
          {
            vibe: r,
            settings: { isMobile: l },
            vibeSettings: c,
          } = (0, a.oR4)(),
          { pageId: u } = (0, a.lVB)(),
          { blockIdForFrom: d } = (0, a.qYG)(),
          p = (0, h.useRef)(null),
          g = (0, h.useRef)(null),
          b = (0, h.useRef)(null),
          { resetSettings: m } = (0, a.QhE)({
            seeds:
              null !==
                (n =
                  null === (e = r.meta) || void 0 === e ? void 0 : e.seeds) &&
              void 0 !== n
                ? n
                : [],
            pageIdForFrom: u,
            blockIdForFrom: d,
          }),
          { contentRef: _ } = (0, a.$Y6)(),
          { contentHeight: x } = M(0),
          { state: B, setState: N, toggleFalse: T } = (0, I.O)(!1);
        (0, h.useEffect)(
          () => () => {
            c.reset();
          },
          [c],
        );
        let O = (0, h.useMemo)(
            () =>
              l
                ? { height: "88vh", transitionProperty: "opacity" }
                : _
                  ? {
                      insetInlineEnd: 7,
                      insetBlockStart: _.offsetTop + 7,
                      height: x - 16,
                    }
                  : {},
            [x, _, l],
          ),
          G = !!(r.isApplying || r.isMyVibe),
          P = (0, S.W)((e) => {
            if (!r.isApplying) {
              var t;
              p.current && (0, R.m)(e, J().ripple, p.current),
                m(),
                null === (t = g.current) || void 0 === t || t.focus();
            }
          }),
          L = (0, h.useMemo)(() => {
            var e, t;
            if (o(null === (e = r.meta) || void 0 === e ? void 0 : e.seeds))
              return (
                null === (t = r.meta) || void 0 === t ? void 0 : t.context
              )
                ? (0, v.jsx)(V.Button, {
                    className: J().toggleSettingsButton,
                    size: "m",
                    radius: "round",
                    icon: (0, v.jsx)(C.Icon, { variant: "filter", size: "xs" }),
                    "aria-label": s({ id: "vibe-actions.aria-label-settings" }),
                    ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                  })
                : (0, v.jsx)(V.Button, {
                    className: J().toggleSettingsButton,
                    size: "default",
                    radius: "xxxl",
                    icon: (0, v.jsx)(C.Icon, {
                      variant: "filter",
                      size: "xxs",
                    }),
                    "aria-label": s({ id: "vibe-actions.aria-label-settings" }),
                    ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                    children: (0, v.jsx)(k.Caption, {
                      variant: "span",
                      type: "controls",
                      size: "m",
                      weight: "medium",
                      children: (0, v.jsx)(f.Z, {
                        id: "interface-actions.configure-my-vibe",
                      }),
                    }),
                  });
          }, [
            s,
            null === (t = r.meta) || void 0 === t ? void 0 : t.context,
            null === (i = r.meta) || void 0 === i ? void 0 : i.seeds,
          ]),
          { handlers: U } = j({
            ref: b,
            onClose: T,
            placement: "bottom",
            disableSwipe: !l,
            swipeableProps: { preventScrollOnSwipe: !0 },
          });
        return (0, v.jsxs)(A.J2, {
          placement: l ? "bottom" : "right",
          isMobile: l,
          strategy: "fixed",
          transform: !1,
          portalNode: _,
          positionElement: _,
          disableFloatingStyles: !l,
          open: B,
          onOpenChange: N,
          style: O,
          overlayClassName: J().overlay,
          popoverContentRef: b,
          children: [
            L,
            (0, v.jsx)(A.yk, {
              className: J().popover,
              ref: b,
              ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_BLOCK),
              children: (0, v.jsxs)("div", {
                className: J().root,
                children: [
                  l &&
                    (0, v.jsx)("div", {
                      ref: U.ref,
                      onMouseDown: U.onMouseDown,
                      className: J().swipeableArea,
                    }),
                  (0, v.jsxs)("div", {
                    className: J().header,
                    children: [
                      (0, v.jsx)(k.Heading, {
                        variant: "h3",
                        size: "s",
                        weight: "bold",
                        ...(0, E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_TITLE),
                        children: (0, v.jsx)(f.Z, {
                          id: "interface-actions.my-vibe-settings",
                        }),
                      }),
                      (0, v.jsxs)("div", {
                        className: J().actions,
                        children: [
                          (0, v.jsx)(w.u, {
                            offsetOptions: 4,
                            placement: "left",
                            text: s({
                              id: "interface-actions.reset-my-vibe-settings",
                            }),
                            children: (0, v.jsx)(V.Button, {
                              variant: "outline",
                              radius: "round",
                              size: "xxxs",
                              icon: (0, v.jsx)(C.Icon, {
                                variant: "reset",
                                size: "xxxs",
                              }),
                              onClick: P,
                              disabled: !!r.isMyVibe,
                              "aria-hidden": !!r.isMyVibe,
                              "aria-disabled": G,
                              "aria-label": s({
                                id: "interface-actions.reset-my-vibe-settings",
                              }),
                              ref: p,
                              ...(0, E.BA)(
                                E.bG.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                              ),
                            }),
                          }),
                          (0, v.jsx)(V.Button, {
                            radius: "round",
                            color: "secondary",
                            size: "xxs",
                            icon: (0, v.jsx)(C.Icon, {
                              variant: "close",
                              size: "xxs",
                            }),
                            onClick: T,
                            "aria-label": s({
                              id: "interface-actions.close-my-vibe-settings",
                            }),
                            ref: g,
                            ...(0, E.BA)(
                              E.bG.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)(Q, {}),
                ],
              }),
            }),
          ],
        });
      });
    },
    96454: function (e, t, i) {
      "use strict";
      i.d(t, {
        MainPage: function () {
          return T;
        },
      });
      var n = i(75441),
        s = i(32358),
        a = i(62569),
        o = i(98730),
        r = i(65067),
        l = i(9317),
        c = i(35846),
        u = i(36746),
        d = i(26669),
        p = i(68208),
        g = i(17294),
        b = i(92853),
        m = i(17392),
        v = i(30495),
        _ = i(30948),
        h = i(48250),
        x = i(61039),
        y = i(69947),
        f = i(14924),
        E = i(13534),
        S = i(97141),
        B = i(9446),
        N = i.n(B);
      let T = (0, a.Pi)((e) => {
        let { withVideoModal: t } = e,
          {
            main: i,
            user: a,
            experiments: B,
            releaseNotes: T,
            fullscreenVideoPlayer: O,
          } = (0, E.oR4)(),
          { formatMessage: j } = (0, l.Z)(),
          I = (0, E.bop)(),
          { contentScrollRef: R, setContentScrollRef: V } = (0, E.$Y6)(),
          [C, A] = (0, d.z)(),
          w = (0, o.useSearchParams)(),
          k = w.get(E.wxR.IDS),
          M = w.get(E.wxR.ACTIVE_INDEX),
          { clipIds: G, activeClipIndex: P } = (0, x.gw)(k, M),
          L = (0, f.yO)(f.$t.MAIN),
          U = (0, f.Li)();
        (0, r.useLayoutEffect)(() => {
          t && L && (U(G, P), O.setOpenedFromMain());
        }, [t, L, O, G, P, U]),
          (0, r.useEffect)(() => () => i.landing.reset(), [i.landing]),
          (0, E.NOh)(i.landing.isResolved);
        let z = B.checkExperiment(E.peG.WebNextDisableVibe, "on"),
          D = (0, r.useCallback)(() => {
            T.isReady && T.modal.open();
          }, [T.isReady, T.modal]),
          F = (0, r.useMemo)(
            () => (z ? { "margin-block-start": "1vh" } : {}),
            [z],
          ),
          W = (0, r.useMemo)(() => {
            if (B.checkExperiment(E.peG.WebNextBetaLabel, "off")) return null;
            {
              let e = B.checkExperiment(E.peG.WebNextBetaLabel, "version"),
                t = j({ id: "desktop.app-version" }, { version: I }),
                i = e ? I : "Beta";
              return (0, n.jsxs)(b.u, {
                placement: "right",
                offsetOptions: 4,
                children: [
                  (0, n.jsx)(p.Button, {
                    color: "secondary",
                    radius: "xl",
                    "aria-label": e ? t : "Beta ".concat(t),
                    className: (0, s.W)(N().beta, {
                      [N().beta_withReleaseNotes]: T.isReady,
                    }),
                    onClick: D,
                    children: (0, n.jsx)(m.Caption, {
                      variant: "div",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      children: i,
                    }),
                  }),
                  (0, n.jsx)(b._v, { children: I }),
                ],
              });
            }
          }, [B, j, D, T.isReady, I]),
          { current: Y } = (0, r.useRef)([
            (0, E.FsJ)(
              B.checkExperiment(E.peG.WebNextEntityTrailerOnboarding, "on"),
            ),
          ]);
        if (i.landing.isNeededToLoad) {
          let e = a.isAuthorized ? u.j.MAIN : u.j.MAIN_NOLOGIN;
          (0, r.use)(
            i.landing.getSkeleton(
              { id: e, showWizard: a.settings.showWizard },
              { preloadBlocksCount: 2 },
            ),
          );
        }
        return (
          t && !L && (0, o.notFound)(),
          (0, n.jsx)(E.Lh6, {
            pageId: E.Rhz.HOME,
            children: (0, n.jsx)(E.kZw, {
              config: Y,
              children: (0, n.jsx)(y.I7, {
                scrollElement: R,
                headerElement: C,
                children: (0, n.jsxs)(g.t, {
                  className: N().root,
                  containerClassName: N().content,
                  ref: V,
                  ...(0, c.BA)(c.Br.main.MAIN_PAGE),
                  children: [
                    W,
                    !z &&
                      (0, n.jsx)(E.Ja5, {
                        blockIdForFrom: E.BEo.RUP_MAIN_RADIO,
                        blockId: E.aUg.RUP,
                        blockType: E.aUg.RUP,
                        blockPosX: 0,
                        blockPosY: 0,
                        objectsCount: 0,
                        children: (0, n.jsx)(h.w, { className: N().vibe }),
                      }),
                    (0, n.jsx)(v.Od, {
                      landing: i.landing,
                      headerConcealerComponent: (0, n.jsx)("div", { ref: A }),
                      errorComponent: (0, n.jsx)(_.D, {
                        className: N().error,
                        withBackwardControl: !1,
                      }),
                      containerClassName: N().landing,
                      containerStyle: F,
                      tabWithHeadingTitle: !0,
                      tabWithCovers: !0,
                      tabWithSubtitle: !0,
                    }),
                    (0, n.jsx)(S.$_, { className: N().footer }),
                  ],
                }),
              }),
            }),
          })
        );
      });
    },
    48250: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return l;
        },
        w: function () {
          return L;
        },
      });
      var n,
        s = i(22874);
      (n || (n = {})).OK = "ok";
      var a = i(9152),
        o = i(13534),
        r = i(40892);
      let l = s.V5.compose(
        s.V5.model("VibeActions", {
          meta: s.V5.maybeNull(a.KW),
          applyingSetting: s.V5.maybeNull(s.V5.string),
          isApplying: s.V5.boolean,
          vibeResetLoadingState: s.V5.enumeration(Object.values(o.Gui)),
        }),
        r.fu,
      )
        .views((e) => ({
          get isMyVibe() {
            return (
              e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === o.sHr
            );
          },
        }))
        .actions((e) => ({
          getLastVibe: (0, s.ls)(function* () {
            let { rotorResource: t, modelActionsLogger: i } = (0, s.dU)(e);
            if (e.loadingState !== o.Gui.PENDING)
              try {
                e.loadingState = o.Gui.PENDING;
                let i = yield t.waveLast();
                (e.meta = (0, a.xF)(i)), (e.loadingState = o.Gui.RESOLVE);
              } catch (t) {
                i.error(t), (e.loadingState = o.Gui.REJECT);
              }
          }),
          vibeReset: (0, s.ls)(function* () {
            let { rotorResource: t, modelActionsLogger: i } = (0, s.dU)(e);
            if (e.vibeResetLoadingState !== o.Gui.PENDING)
              try {
                (e.vibeResetLoadingState = o.Gui.PENDING),
                  (yield t.waveLastReset()) === n.OK &&
                    (e.meta = (0, a.xF)({
                      name: "",
                      seeds: [o.sHr],
                      stationId: o.sHr,
                      idForFrom: o.sHr,
                    })),
                  (e.vibeResetLoadingState = o.Gui.RESOLVE);
              } catch (t) {
                i.error(t), (e.vibeResetLoadingState = o.Gui.REJECT);
              }
          }),
          setApplyingSetting(t) {
            t ? (e.applyingSetting = (0, s.pj)(t)) : (e.applyingSetting = null);
          },
          setIsApplying(t) {
            e.isApplying = t;
          },
          setVibe(t) {
            e.meta = (0, a.xF)(t);
          },
          reset() {
            (e.meta = null),
              (e.vibeResetLoadingState = o.Gui.IDLE),
              (e.loadingState = o.Gui.IDLE);
          },
        }));
      var c = i(75441),
        u = i(32358),
        d = i(62569),
        p = i(98730),
        g = i(65067),
        b = i(15937),
        m = i(35846),
        v = i(93093),
        _ = i(26669),
        h = i(20184),
        x = i(68208),
        y = i(17392),
        f = i(87660);
      let E = (0, g.lazy)(async () =>
          Promise.all([i.e(8287), i.e(4823)])
            .then(i.bind(i, 84823))
            .then((e) => ({ default: e.VibeFallbackAnimation })),
        ),
        S = (0, g.lazy)(async () =>
          Promise.all([i.e(8287), i.e(306)])
            .then(i.bind(i, 50306))
            .then((e) => ({ default: e.VibeAnimation })),
        );
      var B = i(97141),
        N = i(9317),
        T = i(69756),
        O = i(24118),
        j = i.n(O);
      let I = !0,
        R = (0, d.Pi)((e) => {
          let { isPlaying: t, onClick: i, ariaDisabled: n, className: s } = e,
            { vibe: a } = (0, o.oR4)(),
            { formatMessage: r } = (0, N.Z)(),
            l = (0, o.k67)(),
            d = (0, o.kFZ)(),
            p = t ? "pauseVibe" : "playVibe",
            v = t
              ? m.QM.vibe.MY_VIBE_PAUSE_BUTTON
              : m.QM.vibe.MY_VIBE_PLAY_BUTTON,
            _ = (0, g.useMemo)(
              () =>
                t
                  ? r({ id: "vibe-actions.aria-label-pause" })
                  : r({ id: "vibe-actions.aria-label-play" }),
              [r, t],
            ),
            h = (0, g.useCallback)(
              (e) => {
                a.isApplying || null == i || i(),
                  e.stopPropagation(),
                  e.preventDefault();
              },
              [i, a.isApplying],
            );
          return (
            (0, g.useEffect)(() => {
              if ("production" === d && 1 === l.length && I) {
                var e, t;
                let i = Math.round(performance.now());
                null === (t = window.Ya) ||
                  void 0 === t ||
                  null === (e = t.Rum) ||
                  void 0 === e ||
                  e.sendTimeMark("my-vibe-button-loading-time", i),
                  (I = !1);
              }
            }, []),
            (0, c.jsx)(x.Button, {
              className: (0, u.W)(
                j().root,
                { [j().root_isVibeLoading]: a.isApplying },
                s,
              ),
              withRipple: !1,
              withHover: !1,
              onClick: h,
              variant: "text",
              "aria-disabled": a.isApplying || n,
              "aria-label": _,
              icon: (0, c.jsx)(T.Icon, {
                size: "s",
                className: j().icon,
                variant: p,
              }),
              ...(0, m.BA)(v),
              children: (0, c.jsx)(b.Z, { id: "entity-names.my-vibe" }),
            })
          );
        });
      var V = i(84991),
        C = i.n(V),
        A = i(93805),
        w = i(13919),
        k = i.n(w);
      let M = (0, d.Pi)((e) => {
          var t;
          let { context: i, onResetClick: n, className: s } = e,
            {
              vibe: r,
              settings: { isMobile: l },
            } = (0, o.oR4)(),
            { formatMessage: d } = (0, N.Z)(),
            p = (0, a.BV)(r.meta),
            g = i && !l;
          return (0, c.jsxs)("div", {
            className: (0, u.W)(k().root, s),
            children: [
              g &&
                (0, c.jsx)(B.RT, {
                  size: "m",
                  iconSize: "xs",
                  withScaleAnimation: !1,
                  isPinned:
                    null === (t = r.meta) || void 0 === t ? void 0 : t.isPinned,
                  onClick: p,
                  className: k().pinButton,
                }),
              (0, c.jsx)(A.ap, {}),
              i &&
                (0, c.jsxs)("div", {
                  className: (0, u.W)(k().context),
                  ...(0, m.BA)(m.QM.vibe.VIBE_CONTEXT),
                  children: [
                    (0, c.jsx)(y.Caption, {
                      variant: "span",
                      type: "controls",
                      size: "m",
                      weight: "medium",
                      lineClamp: 1,
                      children: i,
                    }),
                    (0, c.jsx)(x.Button, {
                      className: k().resetButton,
                      variant: "text",
                      radius: "round",
                      withRipple: !1,
                      icon: (0, c.jsx)(T.Icon, {
                        variant: "close",
                        size: "xxs",
                      }),
                      onClick: n,
                      "aria-label": ""
                        .concat(d({ id: "vibe-actions.reset-settings" }), " ")
                        .concat(i),
                      ...(0, m.BA)(m.QM.vibe.RESET_VIBE_CONTEXT_BUTTON),
                    }),
                  ],
                }),
            ],
          });
        }),
        G = "vibe-block",
        P = "vibe-block-controls",
        L = (0, d.Pi)((e) => {
          var t, i, n, s;
          let { className: a } = e,
            r = (0, p.useRouter)(),
            { vibe: l, experiments: d, user: N } = (0, o.oR4)(),
            T = (0, g.useRef)(null),
            [O, j] = (0, _.z)(),
            { pageId: I } = (0, o.lVB)(),
            { blockIdForFrom: V } = (0, o.qYG)(),
            { isFreemium: A } = (0, o.NMB)(),
            {
              openPaymentWidgetModal: w,
              saveOfferAndAuthorize: k,
              isShimmerActive: L,
              isShimmerVisible: U,
              mainText: z,
              mainTextA11y: D,
              additionText: F,
            } = (0, f.xU)({
              storeName: "music",
              isEnabled: A,
              offerElement: { element: O, intersectionPropertyId: P },
            }),
            { isIntersecting: W } =
              null !==
                (n = (0, h.S1)([T], { preflightCheck: !1 }, !T.current)[G]) &&
              void 0 !== n
                ? n
                : {},
            Y = (0, o.uK4)().get(o.xit),
            {
              isVibeContext: H,
              isPlaying: X,
              togglePlay: Z,
              resetSettings: K,
            } = (0, o.QhE)({
              seeds:
                null !==
                  (s =
                    null === (t = l.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== s
                  ? s
                  : [],
              pageIdForFrom: I,
              blockIdForFrom: V,
            }),
            Q =
              d.checkExperiment(o.peG.WebNextDisableVibeSettings, "on") ||
              A ||
              !N.isAuthorized,
            q = (0, g.useCallback)(() => {
              H
                ? K()
                : l.vibeResetLoadingState !== o.Gui.PENDING && l.vibeReset();
            }, [H, l, K]),
            J = (0, g.useCallback)(() => {
              if (!N.isAuthorized) {
                if (!Y.authorizationUrl) return;
                r.push(Y.authorizationUrl);
                return;
              }
              A && w();
            }, [N.isAuthorized, Y.authorizationUrl, r, A, w]),
            $ = (0, g.useCallback)(
              (e) => {
                e.stopPropagation(), e.preventDefault(), J();
              },
              [J],
            ),
            ee = (0, g.useCallback)(() => {
              if (A || !N.isAuthorized) {
                J();
                return;
              }
              Z();
            }, [A, N.isAuthorized, Z, J]),
            et = (0, g.useMemo)(
              () =>
                d.checkExperiment(o.peG.WebNextShaderFallbackEnabled, "on")
                  ? (0, c.jsx)(E, { className: C().vibeAnimation })
                  : (0, c.jsx)(S, {
                      isIntersecting: W,
                      className: C().vibeAnimation,
                    }),
              [d, W],
            ),
            ei = (0, v.W)(() => {
              if (!N.isAuthorized) {
                k();
                return;
              }
              w();
            }),
            en = (0, g.useMemo)(
              () =>
                d.checkExperiment(
                  o.peG.WebNextUnauthorizedSubscriptionButton,
                  "on",
                )
                  ? (0, c.jsxs)(x.Button, {
                      isBlock: !0,
                      radius: "xxxl",
                      size: "l",
                      color: "plus",
                      className: C().button,
                      onClick: ei,
                      children: [
                        (0, c.jsx)(y.Caption, {
                          className: C().text_main,
                          variant: "div",
                          size: "l",
                          children: z,
                        }),
                        F &&
                          (0, c.jsx)(y.Caption, {
                            className: C().text_addition,
                            variant: "div",
                            size: "m",
                            children: F,
                          }),
                      ],
                    })
                  : (0, c.jsx)(B.fD, { size: "l", className: C().button }),
              [F, d, ei, z],
            );
          return (
            (0, g.useEffect)(
              () => () => {
                l.reset();
              },
              [l],
            ),
            N.isAuthorized && l.isNeededToLoad && (0, g.use)(l.getLastVibe()),
            (0, c.jsxs)("div", {
              className: (0, u.W)(
                C().root,
                { [C().root_freemium]: A || !N.isAuthorized },
                a,
              ),
              ref: T,
              "data-intersection-property-id": G,
              ...(0, m.BA)(m.QM.vibe.VIBE_BLOCK),
              children: [
                et,
                (0, c.jsxs)("div", {
                  className: C().controls,
                  onClick: $,
                  ref: j,
                  "data-intersection-property-id": P,
                  children: [
                    (0, c.jsx)(R, {
                      className: C().playButton,
                      isPlaying: X,
                      ariaDisabled: A || !N.isAuthorized,
                      onClick: ee,
                    }),
                    !Q &&
                      (0, c.jsx)(M, {
                        className: C().settingsButton,
                        context:
                          null === (i = l.meta) || void 0 === i
                            ? void 0
                            : i.context,
                        onResetClick: q,
                      }),
                    (A || !N.isAuthorized) &&
                      (0, c.jsx)(y.Caption, {
                        className: C().subscriptionText,
                        variant: "div",
                        size: "l",
                        ...(0, m.BA)(m.QM.vibe.MY_VIBE_SUBSCRIPTION_TEXT),
                        children: (0, c.jsx)(b.Z, {
                          id: "vibe-freemium.available-in-plus",
                          values: { br: (0, c.jsx)("br", {}) },
                        }),
                      }),
                    !N.isAuthorized && en,
                    N.isAuthorized &&
                      A &&
                      (0, c.jsx)(f.CS, {
                        isShimmerActive: L,
                        isShimmerVisible: U,
                        onClick: w,
                        mainText: z,
                        ariaLabel: D,
                        additionText: F,
                        className: C().button,
                        ...(0, m.BA)(m.QM.vibe.MY_VIBE_SUBSCRIPTION_BUTTON),
                      }),
                  ],
                }),
              ],
            })
          );
        });
    },
    75110: function (e) {
      e.exports = {
        root: "RestrictionBlock_root__P_g9o",
        restrictions: "RestrictionBlock_restrictions__BhR_r",
      };
    },
    93071: function (e) {
      e.exports = {
        button: "RestrictionButton_button__eLMkU",
        button_selected: "RestrictionButton_button_selected__LHD20",
        button_applying: "RestrictionButton_button_applying___ik5f",
        "applying-setting": "RestrictionButton_applying-setting__utqyc",
        diversityButton: "RestrictionButton_diversityButton__uclSi",
        diversityButtonImage: "RestrictionButton_diversityButtonImage__21oME",
        moodEnergy: "RestrictionButton_moodEnergy__q_I4y",
        moodEnergyButton: "RestrictionButton_moodEnergyButton__yKkaS",
        moodEnergyButtonImage: "RestrictionButton_moodEnergyButtonImage__zxT2C",
        textButton: "RestrictionButton_textButton__HC_AE",
        title: "RestrictionButton_title__UZn0O",
        specialButton: "RestrictionButton_specialButton__Di6B9",
        specialImage: "RestrictionButton_specialImage__0E3x2",
        rippleContainer: "RestrictionButton_rippleContainer__xPANO",
        ripple: "RestrictionButton_ripple__Rsu8b",
      };
    },
    16158: function (e) {
      e.exports = {
        root: "VibeRestrictions_root__efJez",
        diversity: "VibeRestrictions_diversity__qfOls",
        moodEnergy: "VibeRestrictions_moodEnergy__Le0Cy",
        contextItems: "VibeRestrictions_contextItems__JrF7D",
      };
    },
    48293: function (e) {
      e.exports = {
        root: "VibeSettings_root__ufZlV",
        popover: "VibeSettings_popover__VKqUc",
        overlay: "VibeSettings_overlay__pusb4",
        toggleSettingsButton: "VibeSettings_toggleSettingsButton__j6fIU",
        header: "VibeSettings_header__OAWe2",
        actions: "VibeSettings_actions__ckbMt",
        swipeableArea: "VibeSettings_swipeableArea__Xx0nx",
        ripple: "VibeSettings_ripple__kmFX6",
      };
    },
    9446: function (e) {
      e.exports = {
        content: "MainPage_content__kskSM",
        root: "MainPage_root__STXqc",
        container: "MainPage_container__CB86l",
        vibe: "MainPage_vibe__XEBbh",
        landing: "MainPage_landing___FGNm",
        beta: "MainPage_beta__y32vb",
        beta_withReleaseNotes: "MainPage_beta_withReleaseNotes__WOjUk",
        footer: "MainPage_footer__2rGy2",
        error: "MainPage_error__u_UCm",
      };
    },
    24118: function (e) {
      e.exports = {
        root: "PlayButton_root__nYKdN",
        root_isLoading: "PlayButton_root_isLoading__925Sa",
        "applying-setting": "PlayButton_applying-setting__3nbT9",
        icon: "PlayButton_icon__t_THQ",
      };
    },
    84991: function (e) {
      e.exports = {
        vibeAnimation: "VibeBlock_vibeAnimation__XVEE6",
        controls: "VibeBlock_controls__BpDFL",
        root: "VibeBlock_root__z7LtR",
        root_freemium: "VibeBlock_root_freemium__4i2rV",
        playButton: "VibeBlock_playButton__6xU55",
        settingsButton: "VibeBlock_settingsButton__GeMtO",
        subscriptionText: "VibeBlock_subscriptionText__ODUZN",
        button: "VibeBlock_button__fWXM_",
      };
    },
    13919: function (e) {
      e.exports = {
        root: "VibeContext_root__dbiNv",
        context: "VibeContext_context__Z_82k",
        pinButton: "VibeContext_pinButton__b6SNF",
        resetButton: "VibeContext_resetButton__9KK4S",
      };
    },
  },
]);
