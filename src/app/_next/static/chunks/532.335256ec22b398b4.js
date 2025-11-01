(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [532],
    {
        532: (e, i, t) => {
            "use strict";
            t.r(i),
                t.d(i, {
                    VibeFallbackAnimation: () => m,
                    VibeFallbackAnimationComponent: () => d,
                });
            var n = t(33008),
                a = t(85896),
                r = t(97531),
                o = t(66268),
                l = t(18064),
                _ = t(79169),
                c = t(49124);
            let s = (e, i) => {
                let t = c.env.ASSET_PREFIX || "";
                return ""
                    .concat(
                        t,
                        "/media/vibe_animation_fallback/vibe_animation_fallback_",
                    )
                    .concat(e, ".")
                    .concat(i);
            };
            var v = t(94618),
                b = t.n(v);
            let d = (0, r.PA)((e) => {
                    var i, t;
                    let { forwardRef: r, className: c } = e,
                        v = (0, o.useRef)(null),
                        { theme: d } = (0, _.DPo)(),
                        { sonataState: m } = (0, _.Pjs)(),
                        u = m.isPlaying && m.isVibeContext;
                    (0, o.useEffect)(() => {
                        var e, i, t;
                        let n =
                            null !=
                            (t =
                                null == (i = m.entityMeta) ||
                                null == (e = i.trackParameters)
                                    ? void 0
                                    : e.energy)
                                ? t
                                : 1;
                        v.current &&
                            (v.current.playbackRate = u
                                ? Math.max(1.5 * n, 1)
                                : 0.8);
                    }, [
                        u,
                        null == (t = m.entityMeta) ||
                        null == (i = t.trackParameters)
                            ? void 0
                            : i.energy,
                    ]);
                    let f = (0, o.useMemo)(
                        () =>
                            ((e) => {
                                if (e)
                                    return {
                                        posterSrc: s(e, "jpeg"),
                                        videoSrc: s(e, "mp4"),
                                    };
                            })(d),
                        [d],
                    );
                    return (0, n.jsxs)("div", {
                        ref: r,
                        className: (0, a.$)(b().root, b().root_visible, c),
                        ...(0, l.Am)(l.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: [
                            (0, n.jsx)("video", {
                                ref: v,
                                preload: "metadata",
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                playsInline: !0,
                                disablePictureInPicture: !0,
                                width: 1e3,
                                height: 1e3,
                                src: null == f ? void 0 : f.videoSrc,
                                poster: null == f ? void 0 : f.posterSrc,
                            }),
                            (0, n.jsx)("div", {}),
                        ],
                    });
                }),
                m = (0, o.forwardRef)((e, i) =>
                    (0, n.jsx)(d, { forwardRef: i, ...e }),
                );
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
