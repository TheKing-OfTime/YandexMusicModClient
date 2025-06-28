(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4823],
  {
    84823: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          VibeFallbackAnimation: function () {
            return m;
          },
          VibeFallbackAnimationComponent: function () {
            return b;
          },
        });
      var n = t(75441),
        o = t(32358),
        a = t(62569),
        r = t(65067),
        l = t(35846),
        _ = t(13534),
        c = t(21535);
      let v = (e, i) => {
          let t = c.env.ASSET_PREFIX || "";
          return ""
            .concat(
              t,
              "/media/vibe_animation_fallback/vibe_animation_fallback_",
            )
            .concat(e, ".")
            .concat(i);
        },
        d = (e) => {
          if (e) return { posterSrc: v(e, "jpeg"), videoSrc: v(e, "mp4") };
        };
      var u = t(65528),
        s = t.n(u);
      let b = (0, a.Pi)((e) => {
          var i, t;
          let { forwardRef: a, className: c } = e,
            v = (0, r.useRef)(null),
            { theme: u } = (0, _.FgM)(),
            { sonataState: b } = (0, _.oR4)(),
            m = b.isPlaying && b.isVibeContext;
          (0, r.useEffect)(() => {
            var e, i, t;
            let n =
              null !==
                (t =
                  null === (i = b.entityMeta) || void 0 === i
                    ? void 0
                    : null === (e = i.trackParameters) || void 0 === e
                      ? void 0
                      : e.energy) && void 0 !== t
                ? t
                : 1;
            v.current &&
              (v.current.playbackRate = m ? Math.max(1.5 * n, 1) : 0.8);
          }, [
            m,
            null === (t = b.entityMeta) || void 0 === t
              ? void 0
              : null === (i = t.trackParameters) || void 0 === i
                ? void 0
                : i.energy,
          ]);
          let f = (0, r.useMemo)(() => d(u), [u]);
          return (0, n.jsxs)("div", {
            ref: a,
            className: (0, o.W)(s().root, s().root_visible, c),
            ...(0, l.BA)(l.bG.vibeAnimation.VIBE_ANIMATION),
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
        m = (0, r.forwardRef)((e, i) => (0, n.jsx)(b, { forwardRef: i, ...e }));
    },
    65528: function (e) {
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
