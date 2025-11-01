(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9366],
    {
        14502: (e) => {
            e.exports = {
                root: "SplashScreen_root__3jzFk",
                root_dark: "SplashScreen_root_dark__0OcZj",
                root_light: "SplashScreen_root_light__XAJTf",
                root_hidden: "SplashScreen_root_hidden__BO7tp",
                "fade-out": "SplashScreen_fade-out__uNMY4",
                video: "SplashScreen_video__wFSy5",
            };
        },
        99366: (e, o, r) => {
            "use strict";
            r.r(o), r.d(o, { default: () => u });
            var s = r(33008),
                t = r(85896),
                n = r(66268),
                a = r(45415),
                _ = r(48467),
                l = r(79169),
                c = r(14502),
                d = r.n(c),
                i = r(49124);
            let u = (e) => {
                let { children: o } = e,
                    { state: r, toggleTrue: c } = (0, a.e)(!1),
                    { state: u, toggleTrue: h } = (0, a.e)(!1),
                    { getThemeFromStorage: p } = (0, l.QDo)(new _.si()),
                    S = (0, n.useMemo)(() => {
                        var e;
                        return null != (e = p()) ? e : (0, l.VDQ)();
                    }, [p]),
                    v = (0, n.useCallback)(
                        (e) => {
                            let o = i.env.ASSET_PREFIX || "";
                            return ""
                                .concat(
                                    o,
                                    "/media/splash_screen/splash_screen_",
                                )
                                .concat(S, ".")
                                .concat(e);
                        },
                        [S],
                    ),
                    m = (0, n.useMemo)(() => ({ isVisible: !r }), [r]);
                return (0, s.jsxs)(l.nlO.Provider, {
                    value: m,
                    children: [
                        !r &&
                            (0, s.jsx)("div", {
                                className: (0, t.$)(
                                    d().root,
                                    d()["root_".concat(S)],
                                    { [d().root_hidden]: u },
                                ),
                                onAnimationEnd: c,
                                children: (0, s.jsxs)("video", {
                                    className: d().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: h,
                                    onError: c,
                                    children: [
                                        (0, s.jsx)("source", {
                                            src: v("webm"),
                                            type: "video/webm",
                                        }),
                                        (0, s.jsx)("source", {
                                            src: v("mp4"),
                                            type: "video/mp4",
                                        }),
                                    ],
                                }),
                            }),
                        o,
                    ],
                });
            };
        },
    },
]);
