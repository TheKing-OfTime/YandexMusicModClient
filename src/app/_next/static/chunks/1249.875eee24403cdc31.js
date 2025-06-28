(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1249],
  {
    81249: function (e, o, r) {
      "use strict";
      r.r(o);
      var t = r(75441),
        n = r(32358),
        s = r(65067),
        a = r(55188),
        _ = r(60365),
        c = r(13534),
        l = r(84874),
        d = r.n(l),
        i = r(21535);
      o.default = (e) => {
        let { children: o } = e,
          { state: r, toggleTrue: l } = (0, a.O)(!1),
          { state: u, toggleTrue: h } = (0, a.O)(!1),
          { getThemeFromStorage: p } = (0, c.YeQ)(new _.JC()),
          S = (0, s.useMemo)(() => {
            var e;
            return null !== (e = p()) && void 0 !== e ? e : (0, c.vn0)();
          }, [p]),
          v = (0, s.useCallback)(
            (e) => {
              let o = i.env.ASSET_PREFIX || "";
              return ""
                .concat(o, "/media/splash_screen/splash_screen_")
                .concat(S, ".")
                .concat(e);
            },
            [S],
          ),
          m = (0, s.useMemo)(() => ({ isVisible: !r }), [r]);
        return (0, t.jsxs)(c.IPk.Provider, {
          value: m,
          children: [
            !r &&
              (0, t.jsx)("div", {
                className: (0, n.W)(d().root, d()["root_".concat(S)], {
                  [d().root_hidden]: u,
                }),
                onAnimationEnd: l,
                children: (0, t.jsxs)("video", {
                  className: d().video,
                  autoPlay: !0,
                  muted: !0,
                  playsInline: !0,
                  onEnded: h,
                  onError: l,
                  children: [
                    (0, t.jsx)("source", {
                      src: v("webm"),
                      type: "video/webm",
                    }),
                    (0, t.jsx)("source", { src: v("mp4"), type: "video/mp4" }),
                  ],
                }),
              }),
            o,
          ],
        });
      };
    },
    84874: function (e) {
      e.exports = {
        root: "SplashScreen_root__3jzFk",
        root_dark: "SplashScreen_root_dark__0OcZj",
        root_light: "SplashScreen_root_light__XAJTf",
        root_hidden: "SplashScreen_root_hidden__BO7tp",
        "fade-out": "SplashScreen_fade-out__uNMY4",
        video: "SplashScreen_video__wFSy5",
      };
    },
  },
]);
