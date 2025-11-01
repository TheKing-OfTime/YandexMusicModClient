(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [532, 7007],
    {
        532: (e, t, n) => {
            "use strict";
            n.r(t),
                n.d(t, {
                    VibeFallbackAnimation: () => m,
                    VibeFallbackAnimationComponent: () => v,
                });
            var i = n(33008),
                r = n(85896),
                l = n(97531),
                a = n(66268),
                o = n(18064),
                s = n(79169),
                u = n(49124);
            let c = (e, t) => {
                let n = u.env.ASSET_PREFIX || "";
                return ""
                    .concat(
                        n,
                        "/media/vibe_animation_fallback/vibe_animation_fallback_",
                    )
                    .concat(e, ".")
                    .concat(t);
            };
            var d = n(94618),
                f = n.n(d);
            let v = (0, l.PA)((e) => {
                    var t, n;
                    let { forwardRef: l, className: u } = e,
                        d = (0, a.useRef)(null),
                        { theme: v } = (0, s.DPo)(),
                        { sonataState: m } = (0, s.Pjs)(),
                        _ = m.isPlaying && m.isVibeContext;
                    (0, a.useEffect)(() => {
                        var e, t, n;
                        let i =
                            null !=
                            (n =
                                null == (t = m.entityMeta) ||
                                null == (e = t.trackParameters)
                                    ? void 0
                                    : e.energy)
                                ? n
                                : 1;
                        d.current &&
                            (d.current.playbackRate = _
                                ? Math.max(1.5 * i, 1)
                                : 0.8);
                    }, [
                        _,
                        null == (n = m.entityMeta) ||
                        null == (t = n.trackParameters)
                            ? void 0
                            : t.energy,
                    ]);
                    let p = (0, a.useMemo)(
                        () =>
                            ((e) => {
                                if (e)
                                    return {
                                        posterSrc: c(e, "jpeg"),
                                        videoSrc: c(e, "mp4"),
                                    };
                            })(v),
                        [v],
                    );
                    return (0, i.jsxs)("div", {
                        ref: l,
                        className: (0, r.$)(f().root, f().root_visible, u),
                        ...(0, o.Am)(o.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: [
                            (0, i.jsx)("video", {
                                ref: d,
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
                m = (0, a.forwardRef)((e, t) =>
                    (0, i.jsx)(v, { forwardRef: t, ...e }),
                );
        },
        10702: (e) => {
            e.exports = {
                root: "VibeDebugPanel_root__97HZQ",
                forceTop: "VibeDebugPanel_forceTop__VY0oQ",
            };
        },
        15426: (e) => {
            e.exports = {
                message: "NotificationLiteVersion_message__IT6FA",
                icon: "NotificationLiteVersion_icon__T4E8d",
                title: "NotificationLiteVersion_title__UPCcu",
                linkText: "NotificationLiteVersion_linkText__L6r3P",
                link: "NotificationLiteVersion_link__cQUUY",
            };
        },
        17007: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { VibeAnimation: () => B });
            var i,
                r,
                l = n(33008),
                a = n(97531),
                o = n(66268),
                s = n(34994),
                u = n(3024),
                c = n(36861),
                d = { out: "out-in", in: "in-out" },
                f = function (e, t, n) {
                    return function () {
                        var i;
                        e.props[t] && (i = e.props)[t].apply(i, arguments), n();
                    };
                },
                v =
                    (((i = {})[d.out] = function (e) {
                        var t = e.current,
                            n = e.changeState;
                        return o.cloneElement(t, {
                            in: !1,
                            onExited: f(t, "onExited", function () {
                                n(u.ns, null);
                            }),
                        });
                    }),
                    (i[d.in] = function (e) {
                        var t = e.current,
                            n = e.changeState,
                            i = e.children;
                        return [
                            t,
                            o.cloneElement(i, {
                                in: !0,
                                onEntered: f(i, "onEntered", function () {
                                    n(u.ns);
                                }),
                            }),
                        ];
                    }),
                    i),
                m =
                    (((r = {})[d.out] = function (e) {
                        var t = e.children,
                            n = e.changeState;
                        return o.cloneElement(t, {
                            in: !0,
                            onEntered: f(t, "onEntered", function () {
                                n(u._K, o.cloneElement(t, { in: !0 }));
                            }),
                        });
                    }),
                    (r[d.in] = function (e) {
                        var t = e.current,
                            n = e.children,
                            i = e.changeState;
                        return [
                            o.cloneElement(t, {
                                in: !1,
                                onExited: f(t, "onExited", function () {
                                    i(u._K, o.cloneElement(n, { in: !0 }));
                                }),
                            }),
                            o.cloneElement(n, { in: !0 }),
                        ];
                    }),
                    r),
                _ = (function (e) {
                    function t() {
                        for (
                            var t, n = arguments.length, i = Array(n), r = 0;
                            r < n;
                            r++
                        )
                            i[r] = arguments[r];
                        return (
                            ((t =
                                e.call.apply(e, [this].concat(i)) ||
                                this).state = { status: u._K, current: null }),
                            (t.appeared = !1),
                            (t.changeState = function (e, n) {
                                void 0 === n && (n = t.state.current),
                                    t.setState({ status: e, current: n });
                            }),
                            t
                        );
                    }
                    (0, s.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.appeared = !0;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var n, i;
                            return null == e.children
                                ? { current: null }
                                : t.status === u.ns && e.mode === d.in
                                  ? { status: u.ns }
                                  : t.current &&
                                      !(
                                          (n = t.current) ===
                                              (i = e.children) ||
                                          (o.isValidElement(n) &&
                                              o.isValidElement(i) &&
                                              null != n.key &&
                                              n.key === i.key)
                                      ) &&
                                      1
                                    ? { status: u.ze }
                                    : {
                                          current: o.cloneElement(e.children, {
                                              in: !0,
                                          }),
                                      };
                        }),
                        (n.render = function () {
                            var e,
                                t = this.props,
                                n = t.children,
                                i = t.mode,
                                r = this.state,
                                l = r.status,
                                a = r.current,
                                s = {
                                    children: n,
                                    current: a,
                                    changeState: this.changeState,
                                    status: l,
                                };
                            switch (l) {
                                case u.ns:
                                    e = m[i](s);
                                    break;
                                case u.ze:
                                    e = v[i](s);
                                    break;
                                case u._K:
                                    e = a;
                            }
                            return o.createElement(
                                c.A.Provider,
                                { value: { isMounting: !this.appeared } },
                                e,
                            );
                        }),
                        t
                    );
                })(o.Component);
            (_.propTypes = {}), (_.defaultProps = { mode: d.out });
            var p = n(95273),
                b = n(42213),
                h = n(42314),
                E = n(79169),
                x = n(85901),
                g = n(49444),
                y = n(96560),
                k = n(78016),
                A = n(77868),
                M = n(18740),
                P = n(15426),
                j = n.n(P);
            let V = (0, a.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: n } = (0, E.Pjs)(),
                        i = (0, o.useCallback)(() => {
                            n.modal.isOpened && n.modal.close();
                        }, [n]),
                        r = (0, o.useMemo)(
                            () =>
                                (0, l.jsxs)("div", {
                                    className: j().message,
                                    children: [
                                        (0, l.jsx)(A.Caption, {
                                            className: j().title,
                                            variant: "div",
                                            type: "controls",
                                            size: "m",
                                            children: (0, l.jsx)(y.A, {
                                                id: "lite-version.notification-title",
                                            }),
                                        }),
                                        (0, l.jsx)(M.N_, {
                                            className: j().link,
                                            href: E.Zyd.settings.href,
                                            onClick: i,
                                            children: (0, l.jsx)(A.Caption, {
                                                className: j().linkText,
                                                variant: "div",
                                                type: "controls",
                                                size: "m",
                                                children: (0, l.jsx)(y.A, {
                                                    id: "lite-version.go-to-settings",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            [i],
                        );
                    return (0, l.jsx)(M.$W, {
                        cover: (0, l.jsx)(k.Icon, {
                            className: j().icon,
                            size: "xs",
                            variant: "liteVersion",
                        }),
                        message: r,
                        closeToast: t,
                        coverRadius: "s",
                    });
                }),
                L = "vibeAnimationDegradationLevel",
                N = null;
            var S = n(94618),
                R = n.n(S),
                T = n(532),
                w = n(85896),
                I = n(18064),
                C = n(44612),
                D = n(48509),
                F = n(44189),
                U = n(21949),
                K = n(10702),
                O = n.n(K);
            let H = (0, a.PA)((e) => {
                    var t, n, i, r, a, s, u, c;
                    let {
                            vibeAnimationState: d,
                            isIntersecting: f,
                            forwardRef: v,
                            className: m,
                        } = e,
                        [_, p] = (0, C.d)(),
                        [h, g] = (0, C.d)(),
                        [y, k] = (0, C.d)(),
                        [A, M] = (0, o.useState)(!1),
                        { user: P, sonataState: j, settings: V } = (0, E.Pjs)(),
                        L = (0, E.UlF)(),
                        { theme: N } = (0, E.DPo)(),
                        S = (0, E.iIU)(),
                        F = (0, b.c)((e) => {
                            e.data.type === x.iR.ERROR &&
                                (M(!0), L.error(e.data.payload));
                        }),
                        U = (0, b.c)(() => {
                            M(!0);
                        }),
                        K = j.isPlaying && j.isVibeContext;
                    ((e) => {
                        var t, n;
                        let [i, r] = (0, o.useState)({}),
                            { sonataState: l } = (0, E.Pjs)();
                        (0, o.useEffect)(() => {
                            if (l.contextType === D.K.Vibe) {
                                var t, n, a, o;
                                i.id ===
                                    (null == (t = l.entityMeta)
                                        ? void 0
                                        : t.id) &&
                                    !i.isLiked &&
                                    (null == (o = l.entityMeta)
                                        ? void 0
                                        : o.isLiked) &&
                                    e(),
                                    r({
                                        id:
                                            null == (n = l.entityMeta)
                                                ? void 0
                                                : n.id,
                                        isLiked:
                                            null == (a = l.entityMeta)
                                                ? void 0
                                                : a.isLiked,
                                    });
                            }
                        }, [
                            l.contextType,
                            null == (t = l.entityMeta) ? void 0 : t.id,
                            null == (n = l.entityMeta) ? void 0 : n.isLiked,
                            i.id,
                            i.isLiked,
                            e,
                        ]);
                    })(
                        (0, b.c)(() => {
                            null == _ || _.likeAnimation();
                        }),
                    );
                    let O = (0, b.c)(() => {
                        if (!(null == S ? void 0 : S.analyser)) return;
                        let [e, t, n] = S.analyser.getAverageFrequencies([
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
                    (0, o.useEffect)(() => {
                        var e, t;
                        if (!h || _) return;
                        if (!h.transferControlToOffscreen) return void U();
                        let n = h.transferControlToOffscreen(),
                            i = new x.a6({
                                offscreenCanvas: n,
                                state: d,
                                collectionHue: P.collectionHue,
                                shaderOptions: void 0,
                                onMessage: F,
                                onError: U,
                            });
                        p(i), k(new x.Rv(x.p4, O));
                        let r =
                                null == (t = j.entityMeta) ||
                                null == (e = t.trackParameters)
                                    ? void 0
                                    : e.hue,
                            l = P.collectionHue;
                        i.applySettings({ hue: r, collectionHue: l });
                    }, [
                        y,
                        h,
                        U,
                        F,
                        k,
                        p,
                        null == (n = j.entityMeta) ||
                        null == (t = n.trackParameters)
                            ? void 0
                            : t.hue,
                        O,
                        P.collectionHue,
                        d,
                        _,
                    ]);
                    let H = (0, b.c)(() => {
                        null == _ || _.destroy(),
                            p(null),
                            null == y || y.stop(),
                            k(null);
                    });
                    return ((0, o.useEffect)(
                        () => () => {
                            H();
                        },
                        [H],
                    ),
                    (0, o.useEffect)(() => {
                        f && K ? null == y || y.start() : null == y || y.stop();
                    }, [y, f, K, _]),
                    (0, o.useEffect)(() => {
                        if (_) {
                            let e = N === E.Sxu.Dark ? 0.0705 : 0.9607;
                            null == _ ||
                                _.applySettings({ backgroundColor: e });
                        }
                    }, [N, _]),
                    (0, o.useEffect)(() => {
                        var e, t, n, i, r, l;
                        let a =
                                null == (t = j.entityMeta) ||
                                null == (e = t.trackParameters)
                                    ? void 0
                                    : e.hue,
                            o =
                                null == (i = j.entityMeta) ||
                                null == (n = i.trackParameters)
                                    ? void 0
                                    : n.energy,
                            s =
                                null == (l = j.entityMeta) ||
                                null == (r = l.trackParameters)
                                    ? void 0
                                    : r.userCollectionHue;
                        s && P.setUserCollectionHue(s),
                            K
                                ? null == _ ||
                                  _.playAnimation({
                                      hue: a,
                                      energy: o,
                                      collectionHue: s,
                                  })
                                : null == _ || _.idleAnimation();
                    }, [
                        K,
                        null == (r = j.entityMeta) ||
                        null == (i = r.trackParameters)
                            ? void 0
                            : i.energy,
                        null == (s = j.entityMeta) ||
                        null == (a = s.trackParameters)
                            ? void 0
                            : a.hue,
                        null == (c = j.entityMeta) ||
                        null == (u = c.trackParameters)
                            ? void 0
                            : u.userCollectionHue,
                        P,
                        _,
                    ]),
                    (0, o.useEffect)(() => {
                        f ? null == _ || _.enable() : null == _ || _.disable();
                    }, [f, _]),
                    (0, o.useEffect)(() => {
                        null == _ || _.updateLayout(V.isMobile);
                    }, [V.isMobile, _]),
                    (0, o.useEffect)(() => {
                        d === x.IU.LITE &&
                            (null == _ || _.enableLiteAnimation());
                    }, [d, _]),
                    A)
                        ? (0, l.jsx)(T.VibeFallbackAnimation, {
                              ref: v,
                              className: m,
                          })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("div", {
                                      ref: v,
                                      className: (0, w.$)(R().root, m),
                                      ...(0, I.Am)(
                                          I.Kq.vibeAnimation.VIBE_ANIMATION,
                                      ),
                                      children: (0, l.jsx)("canvas", {
                                          ref: g,
                                      }),
                                  }),
                                  !1,
                              ],
                          });
                }),
                z = (0, o.forwardRef)((e, t) =>
                    (0, l.jsx)(H, { forwardRef: t, ...e }),
                ),
                q = {
                    enter: R().enter,
                    enterActive: R().enter_active,
                    enterDone: R().enter_done,
                    exit: R().exit,
                    exitActive: R().exit_active,
                    exitDone: R().exit_done,
                },
                B = (0, a.PA)((e) => {
                    let { isIntersecting: t = !0, className: n } = e,
                        i = (0, o.useRef)(null),
                        r = (0, o.useRef)(null),
                        [a, s] = (0, o.useState)(!1),
                        { experiments: u, settings: c } = (0, E.Pjs)();
                    (() => {
                        let e = (0, g.j)(),
                            t = (0, o.useRef)(!0);
                        (0, o.useEffect)(() => {
                            if (!t.current) return;
                            let n = document.createElement("canvas");
                            try {
                                let i =
                                    n.getContext("webgl2") ||
                                    n.getContext("webgl");
                                if (!i) return;
                                let r = i.getExtension(
                                    "WEBGL_debug_renderer_info",
                                );
                                if (!r) return;
                                let l = i.getParameter(
                                    r.UNMASKED_RENDERER_WEBGL,
                                );
                                l &&
                                    (e.count(l, "gpuRenderer"),
                                    (t.current = !1));
                            } catch (e) {}
                            n.remove();
                        }, [e]);
                    })();
                    let d = (0, b.c)(() => {
                        s("visible" === document.visibilityState);
                    });
                    (0, o.useEffect)(
                        () => (
                            d(),
                            document.addEventListener("visibilitychange", d),
                            () => {
                                document.removeEventListener(
                                    "visibilitychange",
                                    d,
                                );
                            }
                        ),
                        [d],
                    );
                    let f = u.checkExperiment(E.zal.WebNextLiteVersion, "on"),
                        v = c.isLiteVersionModeEnabled,
                        { isFallback: m, vibeAnimationState: y } = ((e) => {
                            let { isEnabled: t } = e,
                                n = (0, o.useRef)(0),
                                i = (0, g.j)(),
                                { notify: r } = (0, E.lkh)(),
                                { settings: a } = (0, E.Pjs)(),
                                [s, u] = (0, o.useState)(!1),
                                [c, d] = (0, o.useState)(x.IU.DEFAULT),
                                f = (0, o.useMemo)(
                                    () => (N || (N = new x.Qq()), N),
                                    [],
                                ),
                                v = (0, b.c)((e) => {
                                    var t, o;
                                    if (
                                        (null == (o = window.Ya) ||
                                            null == (t = o.Rum) ||
                                            t.sendTimeMark(
                                                "my-vibe-animation-fps",
                                                e.toFixed(1),
                                            ),
                                        e >= 20)
                                    ) {
                                        n.current = 0;
                                        return;
                                    }
                                    if ((n.current++, !(n.current < 3))) {
                                        if (
                                            ((n.current = 0), c !== x.IU.LITE)
                                        ) {
                                            d(x.IU.LITE),
                                                i.count("liteAnimation", L);
                                            return;
                                        }
                                        s ||
                                            (u(!0),
                                            i.count("fallback", L),
                                            a.setLiteVersionMode(
                                                E.wv5.ENABLED,
                                                !0,
                                            ),
                                            r((0, l.jsx)(V, {}), {
                                                containerId: E.uQT.INFO,
                                                autoClose: !1,
                                            }));
                                    }
                                });
                            return (
                                (0, o.useEffect)(
                                    () => (
                                        a.isLiteVersionModeAvailableForToggle ||
                                        !t ||
                                        s
                                            ? (f.stopMeasuring(),
                                              (n.current = 0))
                                            : f.startMeasuring(v),
                                        () => {
                                            f.stopMeasuring();
                                        }
                                    ),
                                    [
                                        f,
                                        v,
                                        t,
                                        s,
                                        a.isLiteVersionModeAvailableForToggle,
                                    ],
                                ),
                                { isFallback: s, vibeAnimationState: c }
                            );
                        })({ isEnabled: f && a && t }),
                        k = m || (f && v) || "undefined" == typeof Worker,
                        A = (0, h.L)(() =>
                            k
                                ? (0, l.jsx)(T.VibeFallbackAnimation, {
                                      ref: r,
                                      className: n,
                                  })
                                : (0, l.jsx)(z, {
                                      ref: i,
                                      vibeAnimationState: y,
                                      isIntersecting: a && t,
                                      className: n,
                                  }),
                        );
                    return (0, l.jsx)(_, {
                        mode: "out-in",
                        children: (0, l.jsx)(
                            p.A,
                            {
                                nodeRef: k ? r : i,
                                timeout: 1e3,
                                appear: !0,
                                classNames: q,
                                children: A,
                            },
                            k ? "fallback" : "shader",
                        ),
                    });
                });
        },
        94618: (e) => {
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
    },
]);
