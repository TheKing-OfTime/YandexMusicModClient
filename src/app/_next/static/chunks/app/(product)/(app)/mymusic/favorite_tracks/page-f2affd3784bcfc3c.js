(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6683, 1249],
  {
    98864: function (e, r, o) {
      Promise.resolve().then(o.bind(o, 75603)),
        Promise.resolve().then(o.bind(o, 758)),
        Promise.resolve().then(o.bind(o, 37667)),
        Promise.resolve().then(o.bind(o, 38861)),
        Promise.resolve().then(o.bind(o, 71777)),
        Promise.resolve().then(o.bind(o, 38743)),
        Promise.resolve().then(o.bind(o, 76655)),
        Promise.resolve().then(o.bind(o, 34346)),
        Promise.resolve().then(o.bind(o, 54541)),
        Promise.resolve().then(o.bind(o, 81623)),
        Promise.resolve().then(o.bind(o, 81249)),
        Promise.resolve().then(o.bind(o, 76459)),
        Promise.resolve().then(o.bind(o, 85739)),
        Promise.resolve().then(o.bind(o, 88318)),
        Promise.resolve().then(o.bind(o, 54547)),
        Promise.resolve().then(o.bind(o, 9648)),
        Promise.resolve().then(o.bind(o, 94226)),
        Promise.resolve().then(o.bind(o, 17304)),
        Promise.resolve().then(o.bind(o, 70447)),
        Promise.resolve().then(o.bind(o, 80625)),
        Promise.resolve().then(o.bind(o, 22094)),
        Promise.resolve().then(o.bind(o, 60517)),
        Promise.resolve().then(o.bind(o, 81052)),
        Promise.resolve().then(o.bind(o, 96720)),
        Promise.resolve().then(o.bind(o, 98549)),
        Promise.resolve().then(o.bind(o, 35277)),
        Promise.resolve().then(o.bind(o, 48973)),
        Promise.resolve().then(o.bind(o, 34708)),
        Promise.resolve().then(o.bind(o, 32654)),
        Promise.resolve().then(o.bind(o, 58364)),
        Promise.resolve().then(o.bind(o, 60441)),
        Promise.resolve().then(o.bind(o, 70770)),
        Promise.resolve().then(o.bind(o, 56577)),
        Promise.resolve().then(o.bind(o, 77909)),
        Promise.resolve().then(o.bind(o, 69959)),
        Promise.resolve().then(o.bind(o, 22093)),
        Promise.resolve().then(o.bind(o, 77828)),
        Promise.resolve().then(o.bind(o, 27817)),
        Promise.resolve().then(o.bind(o, 91377)),
        Promise.resolve().then(o.bind(o, 44878)),
        Promise.resolve().then(o.bind(o, 55496)),
        Promise.resolve().then(o.bind(o, 82937)),
        Promise.resolve().then(o.bind(o, 90239)),
        Promise.resolve().then(o.bind(o, 29073)),
        Promise.resolve().then(o.bind(o, 66511)),
        Promise.resolve().then(o.bind(o, 57750)),
        Promise.resolve().then(o.bind(o, 52727)),
        Promise.resolve().then(o.bind(o, 74833)),
        Promise.resolve().then(o.bind(o, 74212)),
        Promise.resolve().then(o.bind(o, 19867)),
        Promise.resolve().then(o.bind(o, 57905)),
        Promise.resolve().then(o.bind(o, 79066)),
        Promise.resolve().then(o.bind(o, 627)),
        Promise.resolve().then(o.bind(o, 35999)),
        Promise.resolve().then(o.bind(o, 65164)),
        Promise.resolve().then(o.bind(o, 54701)),
        Promise.resolve().then(o.bind(o, 57307)),
        Promise.resolve().then(o.bind(o, 42469)),
        Promise.resolve().then(o.bind(o, 58410)),
        Promise.resolve().then(o.bind(o, 6575)),
        Promise.resolve().then(o.bind(o, 15826)),
        Promise.resolve().then(o.bind(o, 83425)),
        Promise.resolve().then(o.bind(o, 79815)),
        Promise.resolve().then(o.bind(o, 82944)),
        Promise.resolve().then(o.bind(o, 53516)),
        Promise.resolve().then(o.bind(o, 40230)),
        Promise.resolve().then(o.bind(o, 20915)),
        Promise.resolve().then(o.bind(o, 24840)),
        Promise.resolve().then(o.bind(o, 37109)),
        Promise.resolve().then(o.bind(o, 72716)),
        Promise.resolve().then(o.bind(o, 72276)),
        Promise.resolve().then(o.bind(o, 46746)),
        Promise.resolve().then(o.bind(o, 89773)),
        Promise.resolve().then(o.bind(o, 21111)),
        Promise.resolve().then(o.bind(o, 47129)),
        Promise.resolve().then(o.bind(o, 31168));
    },
    81249: function (e, r, o) {
      "use strict";
      o.r(r);
      var n = o(75441),
        s = o(32358),
        i = o(65067),
        t = o(55188),
        l = o(60365),
        d = o(13534),
        h = o(84874),
        v = o.n(h),
        m = o(21535);
      r.default = (e) => {
        let { children: r } = e,
          { state: o, toggleTrue: h } = (0, t.O)(!1),
          { state: P, toggleTrue: b } = (0, t.O)(!1),
          { getThemeFromStorage: a } = (0, d.YeQ)(new l.JC()),
          c = (0, i.useMemo)(() => {
            var e;
            return null !== (e = a()) && void 0 !== e ? e : (0, d.vn0)();
          }, [a]),
          u = (0, i.useCallback)(
            (e) => {
              let r = m.env.ASSET_PREFIX || "";
              return ""
                .concat(r, "/media/splash_screen/splash_screen_")
                .concat(c, ".")
                .concat(e);
            },
            [c],
          ),
          _ = (0, i.useMemo)(() => ({ isVisible: !o }), [o]);
        return (0, n.jsxs)(d.IPk.Provider, {
          value: _,
          children: [
            !o &&
              (0, n.jsx)("div", {
                className: (0, s.W)(v().root, v()["root_".concat(c)], {
                  [v().root_hidden]: P,
                }),
                onAnimationEnd: h,
                children: (0, n.jsxs)("video", {
                  className: v().video,
                  autoPlay: !0,
                  muted: !0,
                  playsInline: !0,
                  onEnded: b,
                  onError: h,
                  children: [
                    (0, n.jsx)("source", {
                      src: u("webm"),
                      type: "video/webm",
                    }),
                    (0, n.jsx)("source", { src: u("mp4"), type: "video/mp4" }),
                  ],
                }),
              }),
            r,
          ],
        });
      };
    },
    76459: function (e, r, o) {
      "use strict";
      o.d(r, {
        FavoriteTracksPage: function () {
          return h;
        },
      });
      var n = o(75441),
        s = o(62569),
        i = o(65067),
        t = o(13534),
        l = o(35551);
      let d = (0, s.Pi)(() => (0, n.jsx)(l.T, {})),
        h = (0, s.Pi)(() => {
          let { favoriteTracks: e } = (0, t.oR4)(),
            r = (0, t.s0h)(e.playlistUrl);
          if (
            ((0, i.useEffect)(
              () => () => {
                e.reset();
              },
              [e],
            ),
            (0, i.useEffect)(() => {
              e.playlistUrl && r();
            }, [e.playlistUrl, r]),
            e.isNeededToLoad && (0, i.use)(e.getPlaylistUrl()),
            e.isRejected)
          )
            return (0, n.jsx)(d, {});
        });
    },
    35551: function (e, r, o) {
      "use strict";
      o.d(r, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = o(15898);
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
  function (e) {
    e.O(
      0,
      [
        5970, 9876, 8580, 3806, 8563, 2532, 7138, 5453, 7873, 9282, 317, 7627,
        7141, 892, 7294, 9088, 7660, 8737, 5941, 7058, 6158, 1744,
      ],
      function () {
        return e((e.s = 98864));
      },
    ),
      (_N_E = e.O());
  },
]);
