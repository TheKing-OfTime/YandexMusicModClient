(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5936],
    {
        9381: (e) => {
            e.exports = {
                root: "PlayButton_root__nYKdN",
                root_isLoading: "PlayButton_root_isLoading__925Sa",
                "applying-setting": "PlayButton_applying-setting__3nbT9",
                icon: "PlayButton_icon__t_THQ",
            };
        },
        10085: (e) => {
            e.exports = {
                root: "VibeRestrictions_root__efJez",
                diversity: "VibeRestrictions_diversity__qfOls",
                moodEnergy: "VibeRestrictions_moodEnergy__Le0Cy",
                contextItems: "VibeRestrictions_contextItems__JrF7D",
            };
        },
        26177: (e) => {
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
        37429: (e) => {
            e.exports = {
                root: "VibeSettings_root__ufZlV",
                popover: "VibeSettings_popover__VKqUc",
                overlay: "VibeSettings_overlay__pusb4",
                toggleSettingsButton:
                    "VibeSettings_toggleSettingsButton__j6fIU",
                header: "VibeSettings_header__OAWe2",
                actions: "VibeSettings_actions__ckbMt",
                swipeableArea: "VibeSettings_swipeableArea__Xx0nx",
                ripple: "VibeSettings_ripple__kmFX6",
            };
        },
        49825: (e) => {
            e.exports = {
                root: "RestrictionBlock_root__P_g9o",
                restrictions: "RestrictionBlock_restrictions__BhR_r",
            };
        },
        67053: (e) => {
            e.exports = {
                button: "RestrictionButton_button__eLMkU",
                button_selected: "RestrictionButton_button_selected__LHD20",
                button_applying: "RestrictionButton_button_applying___ik5f",
                "applying-setting": "RestrictionButton_applying-setting__utqyc",
                diversityButton: "RestrictionButton_diversityButton__uclSi",
                diversityButtonImage:
                    "RestrictionButton_diversityButtonImage__21oME",
                moodEnergy: "RestrictionButton_moodEnergy__q_I4y",
                moodEnergyButton: "RestrictionButton_moodEnergyButton__yKkaS",
                moodEnergyButtonImage:
                    "RestrictionButton_moodEnergyButtonImage__zxT2C",
                textButton: "RestrictionButton_textButton__HC_AE",
                title: "RestrictionButton_title__UZn0O",
                specialButton: "RestrictionButton_specialButton__Di6B9",
                specialImage: "RestrictionButton_specialImage__0E3x2",
                rippleContainer: "RestrictionButton_rippleContainer__xPANO",
                ripple: "RestrictionButton_ripple__Rsu8b",
            };
        },
        72166: (e) => {
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
        78597: (e, t, i) => {
            "use strict";
            i.d(t, { s$: () => J, LL: () => p });
            var n = i(79169),
                s = i(41028),
                a = i(59615);
            let o = (e) => {
                    let { type: t, tag: i } = e.id;
                    return {
                        title: e.name,
                        seed: "".concat(t, ":").concat(i),
                        specialContext: e.specialContext,
                        specialContextImage: e.specialContextImage,
                    };
                },
                r = (e, t) => {
                    let i = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified ||
                                i.push(
                                    ((e) => ({
                                        value: e.value,
                                        title: e.name,
                                        seed: e.serializedSeed,
                                        imageUrl: e.imageUrl,
                                    }))(e),
                                );
                        }),
                        { type: e, title: t.name, values: (0, s.wg)(i) }
                    );
                };
            var l = (function (e) {
                return (
                    (e.DIVERSITY = "diversity"),
                    (e.MOOD_ENERGY = "moodEnergy"),
                    (e.LANGUAGE = "language"),
                    e
                );
            })({});
            let c = s.gK.model("ContextItem", {
                    title: s.gK.string,
                    seed: s.gK.string,
                    specialContext: s.gK.boolean,
                    specialContextImage: s.gK.optional(s.gK.string, ""),
                }),
                u = s.gK.model("RestrictonValue", {
                    value: s.gK.string,
                    title: s.gK.string,
                    seed: s.gK.string,
                    imageUrl: s.gK.maybe(s.gK.string),
                }),
                d = s.gK.model("Restricton", {
                    type: s.gK.enumeration(Object.values(l)),
                    title: s.gK.string,
                    values: s.gK.array(u),
                }),
                p = s.gK
                    .compose(
                        s.gK.model("VibeSettings", {
                            contextItems: s.gK.array(c),
                            diversity: s.gK.maybeNull(d),
                            moodEnergy: s.gK.maybeNull(d),
                            language: s.gK.maybeNull(d),
                        }),
                        a.XT,
                    )
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { rotorResource: i, modelActionsLogger: a } =
                                (0, s._$)(e);
                            if (e.loadingState !== n.GuX.PENDING)
                                try {
                                    var c, u, d, p;
                                    e.loadingState = n.GuX.PENDING;
                                    let a = yield i.waveSettings(t);
                                    (null == a ||
                                    null == (c = a.settingRestrictions)
                                        ? void 0
                                        : c.diversity) &&
                                        (e.diversity = r(
                                            l.DIVERSITY,
                                            a.settingRestrictions.diversity,
                                        )),
                                        (null == a ||
                                        null == (u = a.settingRestrictions)
                                            ? void 0
                                            : u.moodEnergy) &&
                                            (e.moodEnergy = r(
                                                l.MOOD_ENERGY,
                                                a.settingRestrictions
                                                    .moodEnergy,
                                            )),
                                        (null == a ||
                                        null == (d = a.settingRestrictions)
                                            ? void 0
                                            : d.language) &&
                                            (e.language = r(
                                                l.LANGUAGE,
                                                a.settingRestrictions.language,
                                            ));
                                    let g =
                                        Array.isArray(
                                            null == a ? void 0 : a.blocks,
                                        ) &&
                                        (null == a || null == (p = a.blocks)
                                            ? void 0
                                            : p.find(
                                                  (e) =>
                                                      (null == e
                                                          ? void 0
                                                          : e.type) ===
                                                      "contexts",
                                              ));
                                    g &&
                                        Array.isArray(g.items) &&
                                        (e.contextItems = (0, s.wg)(
                                            g.items.map(o),
                                        )),
                                        e.loadingState !== n.GuX.IDLE &&
                                            (e.loadingState = n.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t),
                                        e.loadingState !== n.GuX.IDLE &&
                                            (e.loadingState = n.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = n.GuX.IDLE),
                                (e.contextItems = (0, s.wg)([])),
                                (e.diversity = null),
                                (e.moodEnergy = null),
                                (e.language = null);
                        },
                    }));
            var g = i(33008),
                m = i(97531),
                b = i(66268),
                _ = i.t(b, 2),
                v = i(73827),
                h = i(96560),
                x = i(18064),
                y = i(42213),
                S = {
                    7672: (e, t, i) => {
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
                            let m,
                                { trackMouse: b } = e,
                                _ = n.useRef(Object.assign({}, c)),
                                v = n.useRef(Object.assign({}, l)),
                                h = n.useRef(Object.assign({}, v.current));
                            for (m in ((h.current = Object.assign(
                                {},
                                v.current,
                            )),
                            (v.current = Object.assign(
                                Object.assign({}, l),
                                e,
                            )),
                            l))
                                void 0 === v.current[m] &&
                                    (v.current[m] = l[m]);
                            let [x, y] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = "touches" in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, s) => {
                                                        s.trackMouse &&
                                                            !i &&
                                                            (document.addEventListener(
                                                                u,
                                                                n,
                                                            ),
                                                            document.addEventListener(
                                                                d,
                                                                m,
                                                            ));
                                                        let {
                                                                clientX: a,
                                                                clientY: o,
                                                            } = i
                                                                ? t.touches[0]
                                                                : t,
                                                            r = p(
                                                                [a, o],
                                                                s.rotationAngle,
                                                            );
                                                        return (
                                                            s.onTouchStartOrOnMouseDown &&
                                                                s.onTouchStartOrOnMouseDown(
                                                                    {
                                                                        event: t,
                                                                    },
                                                                ),
                                                            Object.assign(
                                                                Object.assign(
                                                                    Object.assign(
                                                                        {},
                                                                        e,
                                                                    ),
                                                                    c,
                                                                ),
                                                                {
                                                                    initial:
                                                                        r.slice(),
                                                                    xy: r,
                                                                    start:
                                                                        t.timeStamp ||
                                                                        0,
                                                                },
                                                            )
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, i) => {
                                                    var n, c, u, d;
                                                    let g = "touches" in t;
                                                    if (
                                                        g &&
                                                        t.touches.length > 1
                                                    )
                                                        return e;
                                                    if (
                                                        t.timeStamp - e.start >
                                                        i.swipeDuration
                                                    )
                                                        return e.swiping
                                                            ? Object.assign(
                                                                  Object.assign(
                                                                      {},
                                                                      e,
                                                                  ),
                                                                  {
                                                                      swiping:
                                                                          !1,
                                                                  },
                                                              )
                                                            : e;
                                                    let {
                                                            clientX: m,
                                                            clientY: b,
                                                        } = g
                                                            ? t.touches[0]
                                                            : t,
                                                        [_, v] = p(
                                                            [m, b],
                                                            i.rotationAngle,
                                                        ),
                                                        h = _ - e.xy[0],
                                                        x = v - e.xy[1],
                                                        y = Math.abs(h),
                                                        S = Math.abs(x),
                                                        E =
                                                            (t.timeStamp || 0) -
                                                            e.start,
                                                        f =
                                                            Math.sqrt(
                                                                y * y + S * S,
                                                            ) / (E || 1),
                                                        N = [
                                                            h / (E || 1),
                                                            x / (E || 1),
                                                        ],
                                                        T =
                                                            ((n = y),
                                                            (c = S),
                                                            (u = h),
                                                            (d = x),
                                                            n > c
                                                                ? u > 0
                                                                    ? a
                                                                    : s
                                                                : d > 0
                                                                  ? r
                                                                  : o),
                                                        B =
                                                            "number" ==
                                                            typeof i.delta
                                                                ? i.delta
                                                                : i.delta[
                                                                      T.toLowerCase()
                                                                  ] || l.delta;
                                                    if (
                                                        y < B &&
                                                        S < B &&
                                                        !e.swiping
                                                    )
                                                        return e;
                                                    let j = {
                                                        absX: y,
                                                        absY: S,
                                                        deltaX: h,
                                                        deltaY: x,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: f,
                                                        vxvy: N,
                                                    };
                                                    j.first &&
                                                        i.onSwipeStart &&
                                                        i.onSwipeStart(j),
                                                        i.onSwiping &&
                                                            i.onSwiping(j);
                                                    let O = !1;
                                                    return (
                                                        (i.onSwiping ||
                                                            i.onSwiped ||
                                                            i[
                                                                "onSwiped".concat(
                                                                    T,
                                                                )
                                                            ]) &&
                                                            (O = !0),
                                                        O &&
                                                            i.preventScrollOnSwipe &&
                                                            i.trackTouch &&
                                                            t.cancelable &&
                                                            t.preventDefault(),
                                                        Object.assign(
                                                            Object.assign(
                                                                {},
                                                                e,
                                                            ),
                                                            {
                                                                first: !1,
                                                                eventData: j,
                                                                swiping: !0,
                                                            },
                                                        )
                                                    );
                                                });
                                            },
                                            g = (t) => {
                                                e((e, i) => {
                                                    let n;
                                                    if (
                                                        e.swiping &&
                                                        e.eventData
                                                    ) {
                                                        if (
                                                            t.timeStamp -
                                                                e.start <
                                                            i.swipeDuration
                                                        ) {
                                                            (n = Object.assign(
                                                                Object.assign(
                                                                    {},
                                                                    e.eventData,
                                                                ),
                                                                { event: t },
                                                            )),
                                                                i.onSwiped &&
                                                                    i.onSwiped(
                                                                        n,
                                                                    );
                                                            let s =
                                                                i[
                                                                    "onSwiped".concat(
                                                                        n.dir,
                                                                    )
                                                                ];
                                                            s && s(n);
                                                        }
                                                    } else
                                                        i.onTap &&
                                                            i.onTap({
                                                                event: t,
                                                            });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp &&
                                                            i.onTouchEndOrOnMouseUp(
                                                                { event: t },
                                                            ),
                                                        Object.assign(
                                                            Object.assign(
                                                                Object.assign(
                                                                    {},
                                                                    e,
                                                                ),
                                                                c,
                                                            ),
                                                            { eventData: n },
                                                        )
                                                    );
                                                });
                                            },
                                            m = (e) => {
                                                document.removeEventListener(
                                                    u,
                                                    n,
                                                ),
                                                    document.removeEventListener(
                                                        d,
                                                        m,
                                                    ),
                                                    g(e);
                                            },
                                            b = (e, t) => {
                                                let s = () => {};
                                                if (e && e.addEventListener) {
                                                    let a = Object.assign(
                                                            Object.assign(
                                                                {},
                                                                l.touchEventOptions,
                                                            ),
                                                            t.touchEventOptions,
                                                        ),
                                                        o = [
                                                            [
                                                                "touchstart",
                                                                i,
                                                                a,
                                                            ],
                                                            [
                                                                "touchmove",
                                                                n,
                                                                Object.assign(
                                                                    Object.assign(
                                                                        {},
                                                                        a,
                                                                    ),
                                                                    t.preventScrollOnSwipe
                                                                        ? {
                                                                              passive:
                                                                                  !1,
                                                                          }
                                                                        : {},
                                                                ),
                                                            ],
                                                            ["touchend", g, a],
                                                        ];
                                                    o.forEach((t) => {
                                                        let [i, n, s] = t;
                                                        return e.addEventListener(
                                                            i,
                                                            n,
                                                            s,
                                                        );
                                                    }),
                                                        (s = () =>
                                                            o.forEach((t) => {
                                                                let [i, n] = t;
                                                                return e.removeEventListener(
                                                                    i,
                                                                    n,
                                                                );
                                                            }));
                                                }
                                                return s;
                                            },
                                            _ = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, i) => {
                                                            if (e.el === t)
                                                                return e;
                                                            let n = {};
                                                            return (
                                                                e.el &&
                                                                    e.el !==
                                                                        t &&
                                                                    e.cleanUpTouch &&
                                                                    (e.cleanUpTouch(),
                                                                    (n.cleanUpTouch =
                                                                        void 0)),
                                                                i.trackTouch &&
                                                                    t &&
                                                                    (n.cleanUpTouch =
                                                                        b(
                                                                            t,
                                                                            i,
                                                                        )),
                                                                Object.assign(
                                                                    Object.assign(
                                                                        Object.assign(
                                                                            {},
                                                                            e,
                                                                        ),
                                                                        {
                                                                            el: t,
                                                                        },
                                                                    ),
                                                                    n,
                                                                )
                                                            );
                                                        });
                                                },
                                            };
                                        return (
                                            t.trackMouse && (_.onMouseDown = i),
                                            [_, b]
                                        );
                                    })(
                                        (e) =>
                                            (_.current = e(
                                                _.current,
                                                v.current,
                                            )),
                                        { trackMouse: b },
                                    ),
                                [b],
                            );
                            return (
                                (t = _.current),
                                (i = v.current),
                                (g = h.current),
                                (_.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !==
                                                  g.preventScrollOnSwipe ||
                                              i.touchEventOptions.passive !==
                                                  g.touchEventOptions.passive
                                                ? (t.cleanUpTouch(),
                                                  Object.assign(
                                                      Object.assign({}, t),
                                                      {
                                                          cleanUpTouch: y(
                                                              t.el,
                                                              i,
                                                          ),
                                                      },
                                                  ))
                                                : t
                                            : Object.assign(
                                                  Object.assign({}, t),
                                                  { cleanUpTouch: y(t.el, i) },
                                              )
                                        : (t.cleanUpTouch && t.cleanUpTouch(),
                                          Object.assign(Object.assign({}, t), {
                                              cleanUpTouch: void 0,
                                          }))),
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
                                        var e = arguments.length,
                                            i = Array(e),
                                            n = 0;
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
                        var n;
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useComponentSwipeable = t.SwipeablePlacement =
                                void 0);
                        let s = i(7672),
                            a = i(8691);
                        !(function (e) {
                            (e.TOP = "top"),
                                (e.BOTTOM = "bottom"),
                                (e.RIGHT = "right"),
                                (e.LEFT = "left");
                        })(n || (t.SwipeablePlacement = n = {}));
                        let o = (e) => {
                                let {
                                    ref: t,
                                    deltaY: i,
                                    deltaX: s,
                                    placement: a,
                                } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange =
                                            "transform"),
                                        (t.current.style.transform =
                                            a === n.TOP || a === n.BOTTOM
                                                ? "translateY(".concat(
                                                      i || 0,
                                                      "px)",
                                                  )
                                                : "translateX(".concat(
                                                      s || 0,
                                                      "px)",
                                                  )));
                                });
                            },
                            r = (e) => {
                                requestAnimationFrame(() => {
                                    e.current &&
                                        ((e.current.style.transition = "none"),
                                        (e.current.style.willChange = ""),
                                        (e.current.style.transform = ""));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let {
                                    ref: t,
                                    swipeableProps: i = {},
                                    onClose: l,
                                    disableSwipe: c,
                                    placement: u,
                                    threshold: d,
                                } = e,
                                p = (0, a.useCallbackRef)(() => {
                                    l && (r(t), l());
                                }),
                                g = (0, a.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let {
                                                ref: t,
                                                deltaY: i,
                                                deltaX: s,
                                                placement: a,
                                            } = e;
                                            switch (a) {
                                                case n.TOP:
                                                    i <= 0 &&
                                                        o({
                                                            ref: t,
                                                            deltaY: i,
                                                            deltaX: s,
                                                            placement: a,
                                                        });
                                                    break;
                                                case n.RIGHT:
                                                    s >= 0 &&
                                                        o({
                                                            ref: t,
                                                            deltaY: i,
                                                            deltaX: s,
                                                            placement: a,
                                                        });
                                                    break;
                                                case n.LEFT:
                                                    s <= 0 &&
                                                        o({
                                                            ref: t,
                                                            deltaY: i,
                                                            deltaX: s,
                                                            placement: a,
                                                        });
                                                    break;
                                                default:
                                                    i >= 0 &&
                                                        o({
                                                            ref: t,
                                                            deltaY: i,
                                                            deltaX: s,
                                                            placement: a,
                                                        });
                                            }
                                        })({
                                            ref: t,
                                            deltaY: e.deltaY,
                                            deltaX: e.deltaX,
                                            placement: u,
                                        });
                                }),
                                m = (0, a.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
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
                                                    return (
                                                        i < 0 &&
                                                        Math.abs(i) >= r
                                                    );
                                                case n.RIGHT:
                                                    return s > 0 && s >= r;
                                                case n.LEFT:
                                                    return (
                                                        s < 0 &&
                                                        Math.abs(s) >= r
                                                    );
                                                default:
                                                    return i > 0 && i >= r;
                                            }
                                        })({
                                            ref: t,
                                            deltaY: e.deltaY,
                                            deltaX: e.deltaX,
                                            placement: u,
                                            threshold: d,
                                        })
                                            ? l && (r(t), l())
                                            : r(t));
                                });
                            return {
                                handlers: (0, s.useSwipeable)({
                                    onSwiped: m,
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
                        e.exports = _;
                    },
                },
                E = {};
            function f(e) {
                var t = E[e];
                if (void 0 !== t) return t.exports;
                var i = (E[e] = { exports: {} });
                return S[e](i, i.exports, f), i.exports;
            }
            (f.d = (e, t) => {
                for (var i in t)
                    f.o(t, i) &&
                        !f.o(e, i) &&
                        Object.defineProperty(e, i, {
                            enumerable: !0,
                            get: t[i],
                        });
            }),
                (f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (f.r = (e) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                });
            var N = {};
            (() => {
                Object.defineProperty(N, "__esModule", { value: !0 }),
                    (N.usePopoverSwipeable = void 0);
                let e = f(810),
                    t = f(1381);
                N.usePopoverSwipeable = (i) => {
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
                N.__esModule;
            var T = N.usePopoverSwipeable,
                B = i(45415),
                j = i(88485),
                O = i(44189),
                I = i(78016),
                A = i(38228),
                R = i(31342),
                C = i(77868);
            let w = function () {
                let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                    [t, i] = (0, b.useState)(e),
                    { contentRef: s } = (0, n.gKY)();
                return (
                    (0, b.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [n] = e || [];
                            n &&
                                n.contentRect.height !== t &&
                                i(n.contentRect.height);
                        });
                        return (
                            s && e.observe(s),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, s]),
                    { contentHeight: t }
                );
            };
            var k = i(85896),
                M = i(30293),
                P = i(93134),
                V = i(49825),
                L = i.n(V);
            let G = (e) => {
                let {
                    title: t,
                    children: i,
                    restrictionsClassName: n,
                    ...s
                } = e;
                return (0, g.jsxs)("section", {
                    className: L().root,
                    ...(0, M.getDataAttrFromProps)(s),
                    children: [
                        (0, g.jsx)(C.Caption, {
                            variant: "span",
                            type: "text",
                            size: "m",
                            weight: "medium",
                            "aria-hidden": !0,
                            children: t,
                        }),
                        (0, g.jsx)(P.q, {
                            children: (0, g.jsx)(C.Heading, {
                                variant: "h4",
                                children: t,
                            }),
                        }),
                        (0, g.jsx)("div", {
                            className: (0, k.$)(L().restrictions, n),
                            children: i,
                        }),
                    ],
                });
            };
            var U = i(52756);
            let K = (e) => {
                var t, i, s;
                let { seed: a, title: o, isStation: r } = e,
                    { vibe: l } = (0, n.Pjs)(),
                    { applySetting: c } = (0, n.B0S)({
                        seeds:
                            null !=
                            (s = null == (t = l.meta) ? void 0 : t.seeds)
                                ? s
                                : [],
                        pageIdForFrom: n._Q$.HOME,
                        blockIdForFrom: n.hf$.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: u } = (0, v.A)(),
                    d = !!(null == (i = l.meta) ? void 0 : i.seeds.includes(a)),
                    p = l.applyingSetting === a,
                    g = (0, b.useMemo)(
                        () =>
                            d
                                ? ""
                                      .concat(
                                          u({ id: "vibe-actions.remove" }),
                                          " ",
                                      )
                                      .concat(o)
                                : ""
                                      .concat(
                                          u({ id: "vibe-actions.apply" }),
                                          " ",
                                      )
                                      .concat(o),
                        [d, o, u],
                    );
                return {
                    isApplying: p,
                    isSelected: d,
                    ariaLabel: g,
                    ariaPressed: d,
                    onClickHandler: (0, b.useCallback)(async () => {
                        l.setApplyingSetting(a),
                            await c(a, r),
                            l.setApplyingSetting();
                    }, [c, r, a, l]),
                };
            };
            var z = i(67053),
                D = i.n(z);
            let X = (0, m.PA)((e) => {
                    let { item: t } = e,
                        { vibe: i } = (0, n.Pjs)(),
                        s = (0, b.useRef)(null),
                        {
                            isApplying: a,
                            isSelected: o,
                            ariaPressed: r,
                            onClickHandler: l,
                        } = K({ seed: t.seed, title: t.title, isStation: !0 }),
                        c = (0, b.useCallback)(
                            (e) => {
                                i.isApplying ||
                                    (s.current &&
                                        (0, j.P)(e, D().ripple, s.current),
                                    l());
                            },
                            [l, i.isApplying],
                        );
                    return (0, g.jsxs)(O.Button, {
                        radius: "xxxl",
                        className: (0, k.$)(D().button, D().textButton, {
                            [D().button_selected]: o,
                            [D().button_applying]: a,
                            [D().specialButton]: t.specialContext,
                        }),
                        onClick: c,
                        "aria-disabled": i.isApplying,
                        "aria-pressed": r,
                        withRipple: !1,
                        ...(0, x.Am)(
                            x.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON,
                        ),
                        children: [
                            t.specialContext &&
                                (0, g.jsx)(U.Image, {
                                    className: D().specialImage,
                                    src: t.specialContextImage,
                                    size: 100,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                }),
                            (0, g.jsx)(C.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                className: D().title,
                                children: t.title,
                            }),
                            (0, g.jsx)("div", {
                                className: D().rippleContainer,
                                ref: s,
                            }),
                        ],
                    });
                }),
                F = (0, m.PA)((e) => {
                    let { type: t, restrictionValue: i } = e,
                        { vibe: s } = (0, n.Pjs)(),
                        a = (0, b.useRef)(null),
                        {
                            isApplying: o,
                            isSelected: r,
                            ariaPressed: c,
                            onClickHandler: u,
                        } = K({ seed: i.seed, title: i.title }),
                        d = (0, b.useCallback)(
                            (e) => {
                                s.isApplying ||
                                    (a.current &&
                                        (0, j.P)(e, D().ripple, a.current),
                                    u());
                            },
                            [u, s.isApplying],
                        ),
                        p = (0, b.useMemo)(
                            () =>
                                (0, g.jsx)(C.Caption, {
                                    variant: "span",
                                    type: "controls",
                                    size: "m",
                                    weight: "medium",
                                    className: D().title,
                                    children: i.title,
                                }),
                            [i.title],
                        );
                    switch (t) {
                        case l.DIVERSITY:
                            return (0, g.jsxs)(O.Button, {
                                className: (0, k.$)(
                                    D().button,
                                    D().diversityButton,
                                    {
                                        [D().button_selected]: r,
                                        [D().button_applying]: o,
                                    },
                                ),
                                radius: "xl",
                                "aria-disabled": s.isApplying,
                                "aria-pressed": c,
                                onClick: d,
                                withRipple: !1,
                                ...(0, x.Am)(
                                    x.Kq.vibeSettings
                                        .VIBE_SETTINGS_DIVERSITY_BUTTON,
                                ),
                                children: [
                                    (0, g.jsx)(U.Image, {
                                        "aria-hidden": !0,
                                        src: i.imageUrl,
                                        fit: "contain",
                                        width: 40,
                                        height: 40,
                                        withAvatarReplace: !0,
                                        className: D().diversityButtonImage,
                                    }),
                                    p,
                                    (0, g.jsx)("div", {
                                        className: D().rippleContainer,
                                        ref: a,
                                    }),
                                ],
                            });
                        case l.MOOD_ENERGY:
                            return (0, g.jsxs)("div", {
                                className: D().moodEnergy,
                                ...(0, x.Am)(
                                    x.Kq.vibeSettings
                                        .VIBE_SETTINGS_MOOD_ENERGY_BUTTON,
                                ),
                                children: [
                                    (0, g.jsx)(O.Button, {
                                        variant: "text",
                                        className: (0, k.$)(
                                            D().button,
                                            D().moodEnergyButton,
                                            {
                                                [D().button_selected]: r,
                                                [D().button_applying]: o,
                                            },
                                        ),
                                        radius: "round",
                                        onClick: d,
                                        withRipple: !1,
                                        "aria-disabled": s.isApplying,
                                        "aria-pressed": c,
                                        "aria-label": i.title,
                                        children: (0, g.jsx)(U.Image, {
                                            src: i.imageUrl,
                                            fit: "contain",
                                            width: 52,
                                            height: 52,
                                            "aria-hidden": !0,
                                            withAvatarReplace: !0,
                                            className:
                                                D().moodEnergyButtonImage,
                                        }),
                                    }),
                                    (0, g.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: p,
                                    }),
                                ],
                            });
                        case l.LANGUAGE:
                            return (0, g.jsxs)(O.Button, {
                                radius: "xxxl",
                                className: (0, k.$)(
                                    D().button,
                                    D().textButton,
                                    {
                                        [D().button_selected]: r,
                                        [D().button_applying]: o,
                                    },
                                ),
                                onClick: d,
                                withRipple: !1,
                                "aria-disabled": s.isApplying,
                                "aria-pressed": c,
                                ...(0, x.Am)(
                                    x.Kq.vibeSettings
                                        .VIBE_SETTINGS_LANGUAGE_BUTTON,
                                ),
                                children: [
                                    p,
                                    (0, g.jsx)("div", {
                                        className: D().rippleContainer,
                                        ref: a,
                                    }),
                                ],
                            });
                        default:
                            return null;
                    }
                });
            var Y = i(10085),
                q = i.n(Y);
            let W = (0, m.PA)(() => {
                let { vibeSettings: e } = (0, n.Pjs)(),
                    { formatMessage: t } = (0, v.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, g.jsxs)("div", {
                        className: q().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, g.jsx)(G, {
                                    title: t({
                                        id: "interface-actions.my-vibe-context-settings",
                                    }),
                                    restrictionsClassName: q().contextItems,
                                    ...(0, x.Am)(
                                        x.Kq.vibeSettings
                                            .VIBE_SETTINGS_CONTEXT_BLOCK,
                                    ),
                                    children: e.contextItems.map((e) =>
                                        (0, g.jsx)(
                                            X,
                                            {
                                                item: e,
                                                ...(0, x.Am)(
                                                    x.Kq.vibeSettings
                                                        .VIBE_SETTINGS_CONTEXT_BUTTON,
                                                ),
                                            },
                                            e.seed,
                                        ),
                                    ),
                                }),
                            e.diversity &&
                                (0, g.jsx)(G, {
                                    title: e.diversity.title,
                                    restrictionsClassName: q().diversity,
                                    ...(0, x.Am)(
                                        x.Kq.vibeSettings
                                            .VIBE_SETTINGS_DIVERSITY_BLOCK,
                                    ),
                                    children: e.diversity.values.map((t) => {
                                        var i;
                                        return (0, g.jsx)(
                                            F,
                                            {
                                                type:
                                                    null == (i = e.diversity)
                                                        ? void 0
                                                        : i.type,
                                                restrictionValue: t,
                                            },
                                            t.value,
                                        );
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, g.jsx)(G, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: q().moodEnergy,
                                    ...(0, x.Am)(
                                        x.Kq.vibeSettings
                                            .VIBE_SETTINGS_MOOD_ENERGY_BLOCK,
                                    ),
                                    children: e.moodEnergy.values.map((t) => {
                                        var i;
                                        return (0, g.jsx)(
                                            F,
                                            {
                                                type:
                                                    null == (i = e.moodEnergy)
                                                        ? void 0
                                                        : i.type,
                                                restrictionValue: t,
                                            },
                                            t.value,
                                        );
                                    }),
                                }),
                            e.language &&
                                (0, g.jsx)(G, {
                                    title: e.language.title,
                                    restrictionsClassName: q().contextItems,
                                    ...(0, x.Am)(
                                        x.Kq.vibeSettings
                                            .VIBE_SETTINGS_LANGUAGE_BLOCK,
                                    ),
                                    children: e.language.values.map((t) => {
                                        var i;
                                        return (0, g.jsx)(
                                            F,
                                            {
                                                type:
                                                    null == (i = e.language)
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
            var H = i(37429),
                $ = i.n(H);
            let J = (0, m.PA)(() => {
                var e, t, i, s;
                let { formatMessage: a } = (0, v.A)(),
                    {
                        vibe: o,
                        settings: { isMobile: r },
                        vibeSettings: l,
                    } = (0, n.Pjs)(),
                    { pageId: c } = (0, n.$au)(),
                    { blockIdForFrom: u } = (0, n.N8n)(),
                    d = (0, b.useRef)(null),
                    p = (0, b.useRef)(null),
                    m = (0, b.useRef)(null),
                    { resetSettings: _ } = (0, n.B0S)({
                        seeds:
                            null !=
                            (s = null == (e = o.meta) ? void 0 : e.seeds)
                                ? s
                                : [],
                        pageIdForFrom: c,
                        blockIdForFrom: u,
                    }),
                    { contentRef: S } = (0, n.gKY)(),
                    { contentHeight: E } = w(0),
                    { state: f, setState: N, toggleFalse: k } = (0, B.e)(!1);
                (0, b.useEffect)(
                    () => () => {
                        l.reset();
                    },
                    [l],
                );
                let M = (0, b.useMemo)(
                        () =>
                            r
                                ? {
                                      height: "88vh",
                                      transitionProperty: "opacity",
                                  }
                                : S
                                  ? {
                                        insetInlineEnd: 7,
                                        insetBlockStart: S.offsetTop + 7,
                                        height: E - 16,
                                    }
                                  : {},
                        [E, S, r],
                    ),
                    P = !!(o.isApplying || o.isMyVibe),
                    V = (0, y.c)((e) => {
                        if (!o.isApplying) {
                            var t;
                            d.current && (0, j.P)(e, $().ripple, d.current),
                                _(),
                                null == (t = p.current) || t.focus();
                        }
                    }),
                    L = (0, b.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] =
                                        (null == e ? void 0 : e.split(":")) ||
                                        [];
                                    return (
                                        e === n.M19 || (t && n.UMA.includes(t))
                                    );
                                }))(null == (e = o.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = o.meta) ? void 0 : t.context)
                                ? (0, g.jsx)(O.Button, {
                                      className: $().toggleSettingsButton,
                                      size: "m",
                                      radius: "round",
                                      icon: (0, g.jsx)(I.Icon, {
                                          variant: "filter",
                                          size: "xs",
                                      }),
                                      "aria-label": a({
                                          id: "vibe-actions.aria-label-settings",
                                      }),
                                      ...(0, x.Am)(
                                          x.Kq.vibeSettings
                                              .VIBE_SETTINGS_BUTTON,
                                      ),
                                  })
                                : (0, g.jsx)(O.Button, {
                                      className: $().toggleSettingsButton,
                                      size: "default",
                                      radius: "xxxl",
                                      icon: (0, g.jsx)(I.Icon, {
                                          variant: "filter",
                                          size: "xxs",
                                      }),
                                      "aria-label": a({
                                          id: "vibe-actions.aria-label-settings",
                                      }),
                                      ...(0, x.Am)(
                                          x.Kq.vibeSettings
                                              .VIBE_SETTINGS_BUTTON,
                                      ),
                                      children: (0, g.jsx)(C.Caption, {
                                          variant: "span",
                                          type: "controls",
                                          size: "m",
                                          weight: "medium",
                                          children: (0, g.jsx)(h.A, {
                                              id: "interface-actions.configure-my-vibe",
                                          }),
                                      }),
                                  });
                    }, [
                        a,
                        null == (t = o.meta) ? void 0 : t.context,
                        null == (i = o.meta) ? void 0 : i.seeds,
                    ]),
                    { handlers: G } = T({
                        ref: m,
                        onClose: k,
                        placement: "bottom",
                        disableSwipe: !r,
                        swipeableProps: { preventScrollOnSwipe: !0 },
                    });
                return (0, g.jsxs)(A.AM, {
                    placement: r ? "bottom" : "right",
                    isMobile: r,
                    strategy: "fixed",
                    transform: !1,
                    portalNode: S,
                    positionElement: S,
                    disableFloatingStyles: !r,
                    open: f,
                    onOpenChange: N,
                    style: M,
                    overlayClassName: $().overlay,
                    popoverContentRef: m,
                    children: [
                        L,
                        (0, g.jsx)(A.hl, {
                            className: $().popover,
                            ref: m,
                            ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BLOCK),
                            children: (0, g.jsxs)("div", {
                                className: $().root,
                                children: [
                                    r &&
                                        (0, g.jsx)("div", {
                                            ref: G.ref,
                                            onMouseDown: G.onMouseDown,
                                            className: $().swipeableArea,
                                        }),
                                    (0, g.jsxs)("div", {
                                        className: $().header,
                                        children: [
                                            (0, g.jsx)(C.Heading, {
                                                variant: "h3",
                                                size: "s",
                                                weight: "bold",
                                                ...(0, x.Am)(
                                                    x.Kq.vibeSettings
                                                        .VIBE_SETTINGS_TITLE,
                                                ),
                                                children: (0, g.jsx)(h.A, {
                                                    id: "interface-actions.my-vibe-settings",
                                                }),
                                            }),
                                            (0, g.jsxs)("div", {
                                                className: $().actions,
                                                children: [
                                                    (0, g.jsx)(R.m_, {
                                                        offsetOptions: 4,
                                                        placement: "left",
                                                        text: a({
                                                            id: "interface-actions.reset-my-vibe-settings",
                                                        }),
                                                        children: (0, g.jsx)(
                                                            O.Button,
                                                            {
                                                                variant:
                                                                    "outline",
                                                                radius: "round",
                                                                size: "xxxs",
                                                                icon: (0,
                                                                g.jsx)(I.Icon, {
                                                                    variant:
                                                                        "reset",
                                                                    size: "xxxs",
                                                                }),
                                                                onClick: V,
                                                                disabled:
                                                                    !!o.isMyVibe,
                                                                "aria-hidden":
                                                                    !!o.isMyVibe,
                                                                "aria-disabled":
                                                                    P,
                                                                "aria-label": a(
                                                                    {
                                                                        id: "interface-actions.reset-my-vibe-settings",
                                                                    },
                                                                ),
                                                                ref: d,
                                                                ...(0, x.Am)(
                                                                    x.Kq
                                                                        .vibeSettings
                                                                        .VIBE_SETTINGS_RESET_BUTTON,
                                                                ),
                                                            },
                                                        ),
                                                    }),
                                                    (0, g.jsx)(O.Button, {
                                                        radius: "round",
                                                        color: "secondary",
                                                        size: "xxs",
                                                        icon: (0, g.jsx)(
                                                            I.Icon,
                                                            {
                                                                variant:
                                                                    "close",
                                                                size: "xxs",
                                                            },
                                                        ),
                                                        onClick: k,
                                                        "aria-label": a({
                                                            id: "interface-actions.close-my-vibe-settings",
                                                        }),
                                                        ref: p,
                                                        ...(0, x.Am)(
                                                            x.Kq.vibeSettings
                                                                .VIBE_SETTINGS_CLOSE_BUTTON,
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, g.jsx)(W, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        82511: (e) => {
            e.exports = {
                root: "VibeContext_root__dbiNv",
                context: "VibeContext_context__Z_82k",
                pinButton: "VibeContext_pinButton__b6SNF",
                resetButton: "VibeContext_resetButton__9KK4S",
            };
        },
        95936: (e, t, i) => {
            "use strict";
            i.d(t, { MainPage: () => j });
            var n = i(33008),
                s = i(85896),
                a = i(97531),
                o = i(17846),
                r = i(66268),
                l = i(73827),
                c = i(18064),
                u = i(43836),
                d = i(44612),
                p = i(42314),
                g = i(44189),
                m = i(57747),
                b = i(31342),
                _ = i(77868),
                v = i(12898),
                h = i(83888),
                x = i(96342),
                y = i(64641),
                S = i(64143),
                E = i(60030),
                f = i(79169),
                N = i(18740),
                T = i(72166),
                B = i.n(T);
            let j = (0, a.PA)((e) => {
                let { withVideoModal: t } = e,
                    {
                        main: i,
                        user: a,
                        experiments: T,
                        releaseNotes: j,
                        fullscreenVideoPlayer: O,
                    } = (0, f.Pjs)(),
                    { formatMessage: I } = (0, l.A)(),
                    A = (0, f.HFS)(),
                    { contentScrollRef: R, setContentScrollRef: C } = (0,
                    f.gKY)(),
                    [w, k] = (0, d.d)(),
                    M = (0, o.useSearchParams)(),
                    P = M.get(f.K3F.IDS),
                    V = M.get(f.K3F.ACTIVE_INDEX),
                    { clipIds: L, activeClipIndex: G } = (0, y.V1)(P, V),
                    U = (0, E.df)(),
                    K = (0, E.Cc)();
                (0, r.useLayoutEffect)(() => {
                    t && U && (K(L, G), O.setOpenedFromMain());
                }, [t, U, O, L, G, K]),
                    (0, r.useEffect)(
                        () => () => i.landing.reset(),
                        [i.landing],
                    ),
                    (0, f.Jzs)(i.landing.isResolved);
                let z = T.checkExperiment(f.zal.WebNextDisableVibe, "on"),
                    D = (0, r.useCallback)(() => {
                        j.isReady && j.modal.open();
                    }, [j.isReady, j.modal]),
                    X = (0, r.useMemo)(
                        () => (z ? { "margin-block-start": "1vh" } : {}),
                        [z],
                    ),
                    F = (0, r.useMemo)(() => {
                        if (T.checkExperiment(f.zal.WebNextBetaLabel, "off"))
                            return null;
                        {
                            let e = T.checkExperiment(
                                    f.zal.WebNextBetaLabel,
                                    "version",
                                ),
                                t = I(
                                    { id: "desktop.app-version" },
                                    { version: A },
                                ),
                                i = e ? A : "Beta";
                            return (0, n.jsxs)(b.m_, {
                                placement: "right",
                                offsetOptions: 4,
                                children: [
                                    (0, n.jsx)(g.Button, {
                                        color: "secondary",
                                        radius: "xl",
                                        "aria-label": e ? t : "Beta ".concat(t),
                                        className: (0, s.$)(B().beta, {
                                            [B().beta_withReleaseNotes]:
                                                j.isReady,
                                        }),
                                        onClick: D,
                                        children: (0, n.jsx)(_.Caption, {
                                            variant: "div",
                                            type: "text",
                                            size: "s",
                                            weight: "medium",
                                            children: i,
                                        }),
                                    }),
                                    (0, n.jsx)(b.ZI, { children: A }),
                                ],
                            });
                        }
                    }, [T, I, D, j.isReady, A]),
                    Y = (0, p.L)(() =>
                        T.checkExperiment(f.zal.WebNextFooterDisclaimer, "on")
                            ? (0, n.jsx)(N.wi, { className: B().footer })
                            : (0, n.jsx)(N.A, {
                                  children: (0, n.jsx)(N.wi, {
                                      className: B().footer,
                                  }),
                              }),
                    );
                if (i.landing.isNeededToLoad) {
                    let e = a.isAuthorized ? u.p.MAIN : u.p.MAIN_NOLOGIN;
                    (0, r.use)(
                        i.landing.getSkeleton(
                            { id: e, showWizard: a.settings.showWizard },
                            { preloadBlocksCount: 2 },
                        ),
                    );
                }
                return (
                    t && !U && (0, o.notFound)(),
                    (0, n.jsx)(f.nVz, {
                        pageId: f._Q$.HOME,
                        children: (0, n.jsx)(f.rtM, {
                            page: f.l7W.HOME_SCREEN,
                            places: [f.RBW.MY_WAVE],
                            children: (0, n.jsx)(S.hO, {
                                scrollElement: R,
                                headerElement: w,
                                children: (0, n.jsxs)(m.N, {
                                    className: B().root,
                                    containerClassName: B().content,
                                    ref: C,
                                    ...(0, c.Am)(c.Xk.main.MAIN_PAGE),
                                    children: [
                                        F,
                                        !z &&
                                            (0, n.jsx)(f.FoH, {
                                                blockIdForFrom:
                                                    f.hf$.RUP_MAIN_RADIO,
                                                blockId: f.UfI.RUP,
                                                blockType: f.UfI.RUP,
                                                blockPosX: 0,
                                                blockPosY: 0,
                                                objectsCount: 0,
                                                children: (0, n.jsx)(x.C, {
                                                    className: B().vibe,
                                                }),
                                            }),
                                        (0, n.jsx)(v.EA, {
                                            landing: i.landing,
                                            headerConcealerComponent: (0,
                                            n.jsx)("div", { ref: k }),
                                            errorComponent: (0, n.jsx)(h.w, {
                                                className: B().error,
                                                withBackwardControl: !1,
                                            }),
                                            containerClassName: B().landing,
                                            containerStyle: X,
                                            tabWithHeadingTitle: !0,
                                            tabWithCovers: !0,
                                            tabWithSubtitle: !0,
                                        }),
                                        Y,
                                    ],
                                }),
                            }),
                        }),
                    })
                );
            });
        },
        96342: (e, t, i) => {
            "use strict";
            i.d(t, { D: () => l, C: () => G });
            var n,
                s = i(41028);
            (n || (n = {})).OK = "ok";
            var a = i(54344),
                o = i(79169),
                r = i(59615);
            let l = s.gK
                .compose(
                    s.gK.model("VibeActions", {
                        meta: s.gK.maybeNull(a.Gh),
                        applyingSetting: s.gK.maybeNull(s.gK.string),
                        isApplying: s.gK.boolean,
                        vibeResetLoadingState: s.gK.enumeration(
                            Object.values(o.GuX),
                        ),
                    }),
                    r.XT,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return (
                            e.meta &&
                            1 === e.meta.seeds.length &&
                            e.meta.seeds[0] === o.M19
                        );
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, s.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: i } = (0,
                        s._$)(e);
                        if (e.loadingState !== o.GuX.PENDING)
                            try {
                                e.loadingState = o.GuX.PENDING;
                                let i = yield t.waveLast();
                                (e.meta = (0, a.lb)(i)),
                                    (e.loadingState = o.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), (e.loadingState = o.GuX.REJECT);
                            }
                    }),
                    vibeReset: (0, s.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: i } = (0,
                        s._$)(e);
                        if (e.vibeResetLoadingState !== o.GuX.PENDING)
                            try {
                                (e.vibeResetLoadingState = o.GuX.PENDING),
                                    (yield t.waveLastReset()) === n.OK &&
                                        (e.meta = (0, a.lb)({
                                            name: "",
                                            seeds: [o.M19],
                                        })),
                                    (e.vibeResetLoadingState = o.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t),
                                    (e.vibeResetLoadingState = o.GuX.REJECT);
                            }
                    }),
                    setApplyingSetting(t) {
                        t
                            ? (e.applyingSetting = (0, s.wg)(t))
                            : (e.applyingSetting = null);
                    },
                    setIsApplying(t) {
                        e.isApplying = t;
                    },
                    setVibe(t) {
                        e.meta = (0, a.lb)(t);
                    },
                    reset() {
                        (e.meta = null),
                            (e.vibeResetLoadingState = o.GuX.IDLE),
                            (e.loadingState = o.GuX.IDLE);
                    },
                }));
            var c = i(33008),
                u = i(85896),
                d = i(97531),
                p = i(17846),
                g = i(66268),
                m = i(96560),
                b = i(18064),
                _ = i(42213),
                v = i(44612),
                h = i(32436),
                x = i(44189),
                y = i(77868);
            let S = (0, g.lazy)(async () =>
                    Promise.all([i.e(5435), i.e(532)])
                        .then(i.bind(i, 532))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                E = (0, g.lazy)(async () =>
                    Promise.all([i.e(5435), i.e(7007)])
                        .then(i.bind(i, 17007))
                        .then((e) => ({ default: e.VibeAnimation })),
                );
            var f = i(18740),
                N = i(73827),
                T = i(78016),
                B = i(9381),
                j = i.n(B);
            let O = !0,
                I = (0, d.PA)((e) => {
                    let {
                            isPlaying: t,
                            onClick: i,
                            ariaDisabled: n,
                            className: s,
                        } = e,
                        { vibe: a } = (0, o.Pjs)(),
                        { formatMessage: r } = (0, N.A)(),
                        l = (0, o.W6M)(),
                        d = (0, o.D60)(),
                        p = t ? "pauseVibe" : "playVibe",
                        _ = t
                            ? b.e8.vibe.MY_VIBE_PAUSE_BUTTON
                            : b.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        v = (0, g.useMemo)(
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
                            if ("production" === d && 1 === l.length && O) {
                                var e, t;
                                let i = Math.round(performance.now());
                                null == (t = window.Ya) ||
                                    null == (e = t.Rum) ||
                                    e.sendTimeMark(
                                        "my-vibe-button-loading-time",
                                        i,
                                    ),
                                    (O = !1);
                            }
                        }, []),
                        (0, c.jsx)(x.Button, {
                            className: (0, u.$)(
                                j().root,
                                { [j().root_isVibeLoading]: a.isApplying },
                                s,
                            ),
                            withRipple: !1,
                            withHover: !1,
                            onClick: h,
                            variant: "text",
                            "aria-disabled": a.isApplying || n,
                            "aria-label": v,
                            icon: (0, c.jsx)(T.Icon, {
                                size: "s",
                                className: j().icon,
                                variant: p,
                            }),
                            ...(0, b.Am)(_),
                            children: (0, c.jsx)(m.A, {
                                id: "entity-names.my-vibe",
                            }),
                        })
                    );
                });
            I.displayName = "PlayButton";
            var A = i(26177),
                R = i.n(A),
                C = i(42314),
                w = i(78597),
                k = i(82511),
                M = i.n(k);
            let P = (0, d.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: n, className: s } = e,
                        {
                            vibe: r,
                            settings: { isMobile: l },
                            experiments: d,
                        } = (0, o.Pjs)(),
                        { formatMessage: p } = (0, N.A)(),
                        g = (0, a.A7)(r.meta),
                        m = i && !l,
                        _ = (0, C.L)(() => {
                            var e;
                            return d.checkExperiment(
                                o.zal.WebNextVibeDescription,
                                "on",
                            ) && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? p(
                                      { id: "vibe-actions.vibe-context" },
                                      { type: r.meta.type, name: i },
                                  )
                                : i;
                        });
                    return (0, c.jsxs)("div", {
                        className: (0, u.$)(M().root, s),
                        children: [
                            m &&
                                (0, c.jsx)(f.O0, {
                                    size: "m",
                                    iconSize: "xs",
                                    withScaleAnimation: !1,
                                    isPinned:
                                        null == (t = r.meta)
                                            ? void 0
                                            : t.isPinned,
                                    onClick: g,
                                    className: M().pinButton,
                                }),
                            (0, c.jsx)(w.s$, {}),
                            i &&
                                (0, c.jsxs)("div", {
                                    className: (0, u.$)(M().context),
                                    ...(0, b.Am)(b.e8.vibe.VIBE_CONTEXT),
                                    children: [
                                        (0, c.jsx)(y.Caption, {
                                            variant: "span",
                                            type: "controls",
                                            size: "m",
                                            weight: "medium",
                                            lineClamp: 1,
                                            children: _,
                                        }),
                                        (0, c.jsx)(x.Button, {
                                            className: M().resetButton,
                                            variant: "text",
                                            radius: "round",
                                            withRipple: !1,
                                            icon: (0, c.jsx)(T.Icon, {
                                                variant: "close",
                                                size: "xxs",
                                            }),
                                            onClick: n,
                                            "aria-label": ""
                                                .concat(
                                                    p({
                                                        id: "vibe-actions.reset-settings",
                                                    }),
                                                    " ",
                                                )
                                                .concat(_),
                                            ...(0, b.Am)(
                                                b.e8.vibe
                                                    .RESET_VIBE_CONTEXT_BUTTON,
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                V = "vibe-block",
                L = "vibe-block-controls",
                G = (0, d.PA)((e) => {
                    var t, i, n, s;
                    let { className: a } = e,
                        r = (0, p.useRouter)(),
                        { vibe: l, experiments: d, user: N } = (0, o.Pjs)(),
                        T = (0, g.useRef)(null),
                        [B, j] = (0, v.d)(),
                        { pageId: O } = (0, o.$au)(),
                        { blockIdForFrom: A } = (0, o.N8n)(),
                        { isFreemium: C } = (0, o.XCI)(),
                        {
                            openPaymentWidgetModal: w,
                            saveOfferAndAuthorize: k,
                            isShimmerActive: M,
                            isShimmerVisible: G,
                            mainText: U,
                            mainTextA11y: K,
                            additionText: z,
                        } = (0, o.DpZ)({
                            storeName: "music",
                            isEnabled: C,
                            offerElement: {
                                element: B,
                                intersectionPropertyId: L,
                            },
                        }),
                        { isIntersecting: D } =
                            null !=
                            (n = (0, h.BL)(
                                [T],
                                { preflightCheck: !1 },
                                !T.current,
                            )[V])
                                ? n
                                : {},
                        X = (0, o.NFA)().get(o.QGx),
                        {
                            isVibeContext: F,
                            isPlaying: Y,
                            togglePlay: q,
                            resetSettings: W,
                        } = (0, o.B0S)({
                            seeds:
                                null !=
                                (s = null == (t = l.meta) ? void 0 : t.seeds)
                                    ? s
                                    : [],
                            pageIdForFrom: O,
                            blockIdForFrom: A,
                        }),
                        H =
                            d.checkExperiment(
                                o.zal.WebNextDisableVibeSettings,
                                "on",
                            ) ||
                            C ||
                            !N.isAuthorized,
                        $ = (0, g.useCallback)(() => {
                            F
                                ? W()
                                : l.vibeResetLoadingState !== o.GuX.PENDING &&
                                  l.vibeReset();
                        }, [F, l, W]),
                        J = (0, g.useCallback)(() => {
                            if (!N.isAuthorized) {
                                if (!X.authorizationUrl) return;
                                r.push(X.authorizationUrl);
                                return;
                            }
                            C && w();
                        }, [N.isAuthorized, X.authorizationUrl, r, C, w]),
                        Z = (0, g.useCallback)(
                            (e) => {
                                e.stopPropagation(), e.preventDefault(), J();
                            },
                            [J],
                        ),
                        Q = (0, g.useCallback)(() => {
                            if (C || !N.isAuthorized) return void J();
                            q();
                        }, [C, N.isAuthorized, q, J]),
                        ee = (0, g.useMemo)(
                            () =>
                                d.checkExperiment(
                                    o.zal.WebNextShaderFallbackEnabled,
                                    "on",
                                )
                                    ? (0, c.jsx)(S, {
                                          className: R().vibeAnimation,
                                      })
                                    : (0, c.jsx)(E, {
                                          isIntersecting: D,
                                          className: R().vibeAnimation,
                                      }),
                            [d, D],
                        ),
                        et = (0, _.c)(() => {
                            if (!N.isAuthorized) return void k();
                            w();
                        }),
                        ei = (0, g.useMemo)(
                            () =>
                                d.checkExperiment(
                                    o.zal.WebNextUnauthorizedSubscriptionButton,
                                    "on",
                                )
                                    ? (0, c.jsxs)(x.Button, {
                                          isBlock: !0,
                                          radius: "xxxl",
                                          size: "l",
                                          color: "plus",
                                          className: R().button,
                                          onClick: et,
                                          ...(0, b.Am)(
                                              b.e8.vibe
                                                  .MY_VIBE_SUBSCRIPTION_BUTTON_UNAUTH,
                                          ),
                                          children: [
                                              (0, c.jsx)(y.Caption, {
                                                  className: R().text_main,
                                                  variant: "div",
                                                  size: "l",
                                                  children: U,
                                              }),
                                              z &&
                                                  (0, c.jsx)(y.Caption, {
                                                      className:
                                                          R().text_addition,
                                                      variant: "div",
                                                      size: "m",
                                                      children: z,
                                                  }),
                                          ],
                                      })
                                    : (0, c.jsx)(f.Hi, {
                                          size: "l",
                                          className: R().button,
                                      }),
                            [z, d, et, U],
                        );
                    return (
                        (0, g.useEffect)(
                            () => () => {
                                l.reset();
                            },
                            [l],
                        ),
                        N.isAuthorized &&
                            l.isNeededToLoad &&
                            (0, g.use)(l.getLastVibe()),
                        (0, c.jsxs)("div", {
                            className: (0, u.$)(
                                R().root,
                                { [R().root_freemium]: C || !N.isAuthorized },
                                a,
                            ),
                            ref: T,
                            "data-intersection-property-id": V,
                            ...(0, b.Am)(b.e8.vibe.VIBE_BLOCK),
                            children: [
                                ee,
                                (0, c.jsxs)("div", {
                                    className: R().controls,
                                    onClick: Z,
                                    ref: j,
                                    "data-intersection-property-id": L,
                                    children: [
                                        (0, c.jsx)(I, {
                                            className: R().playButton,
                                            isPlaying: Y,
                                            ariaDisabled: C || !N.isAuthorized,
                                            onClick: Q,
                                        }),
                                        !H &&
                                            (0, c.jsx)(P, {
                                                className: R().settingsButton,
                                                context:
                                                    null == (i = l.meta)
                                                        ? void 0
                                                        : i.context,
                                                onResetClick: $,
                                            }),
                                        (C || !N.isAuthorized) &&
                                            (0, c.jsx)(y.Caption, {
                                                className: R().subscriptionText,
                                                variant: "div",
                                                size: "l",
                                                ...(0, b.Am)(
                                                    b.e8.vibe
                                                        .MY_VIBE_SUBSCRIPTION_TEXT,
                                                ),
                                                children: (0, c.jsx)(m.A, {
                                                    id: "vibe-freemium.available-in-plus",
                                                    values: {
                                                        br: (0, c.jsx)(
                                                            "br",
                                                            {},
                                                        ),
                                                    },
                                                }),
                                            }),
                                        !N.isAuthorized && ei,
                                        N.isAuthorized &&
                                            C &&
                                            (0, c.jsx)(f.b4, {
                                                isShimmerActive: M,
                                                isShimmerVisible: G,
                                                onClick: w,
                                                mainText: U,
                                                ariaLabel: K,
                                                additionText: z,
                                                className: R().button,
                                                ...(0, b.Am)(
                                                    b.e8.vibe
                                                        .MY_VIBE_SUBSCRIPTION_BUTTON,
                                                ),
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            G.displayName = "VibeBlock";
        },
    },
]);
