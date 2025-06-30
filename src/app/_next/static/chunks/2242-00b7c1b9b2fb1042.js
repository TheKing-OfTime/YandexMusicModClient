(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2242],
  {
    5104: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return f.DonationButton;
        },
        AT: function () {
          return x.DonationCard;
        },
        Nv: function () {
          return _.DonationCarousel;
        },
        ei: function () {
          return k;
        },
        Ew: function () {
          return d;
        },
        fv: function () {
          return u;
        },
        s6: function () {
          return i;
        },
        nJ: function () {
          return r;
        },
      });
      var a = n(4875),
        o = n(93093),
        s = n(13534);
      let i = () => {
          let { hash: e } = (0, s.RQn)(),
            t = (0, s.wLl)(),
            n = (0, s.z$f)(),
            { pageId: r } = (0, s.lVB)(),
            {
              blockId: l,
              blockType: c,
              blockPosX: u,
              blockPosY: d,
            } = (0, s.qYG)(),
            {
              objectType: f,
              objectId: x,
              objectPosX: _,
              objectPosY: m,
              objectsCount: p,
              mainObjectId: h,
              mainObjectType: v,
            } = (0, s.rKX)();
          return (0, o.W)((o, N) => {
            if (!n || !r) return;
            let C = s.x3Y[r];
            if (!C) return;
            let k = {
              to: o,
              objectType: f,
              objectId: x,
              objectPosX: _,
              objectPosY: m,
              hash: e,
              pageId: C,
              mainObjectType: v,
              mainObjectId: h,
              entityType: c,
              entityId: l,
              entityPosX: u,
              entityPosY: d,
              objectsCount: p,
              from: C,
            };
            N && (k.deepLink = N);
            let B = (0, s.KOr)({ params: k, logger: t, context: i.name });
            B && (0, a.mz)(n.evgenInstance, B);
          });
        },
        r = () => {
          let { hash: e } = (0, s.RQn)(),
            t = (0, s.wLl)(),
            n = (0, s.z$f)(),
            { pageId: i } = (0, s.lVB)(),
            {
              blockId: l,
              blockType: c,
              blockPosX: u,
              blockPosY: d,
            } = (0, s.qYG)(),
            {
              objectType: f,
              objectId: x,
              objectPosX: _,
              objectPosY: m,
              objectsCount: p,
              mainObjectId: h,
              mainObjectType: v,
            } = (0, s.rKX)();
          return (0, o.W)((o, N) => {
            if (!n || !i) return;
            let C = s.x3Y[i];
            if (!C) return;
            let k = (0, s.KOr)({
              params: {
                objectType: f,
                objectId: x,
                objectPosX: _,
                objectPosY: m,
                hash: e,
                pageId: C,
                mainObjectType: v,
                mainObjectId: h,
                entityType: c,
                entityId: l,
                entityPosX: u,
                entityPosY: d,
                objectsCount: p,
                viewUuid: N,
              },
              logger: t,
              context: r.name,
            });
            k &&
              (o
                ? (0, a.PB)(n.evgenInstance, k)
                : (0, a.re)(n.evgenInstance, k));
          });
        };
      var l = n(22874),
        c = n(64353);
      let u = (e) => {
          let { url: t, artist: n, goal: a } = e;
          return (0, l.pj)({
            url: t,
            goal: a,
            artist: (0, c.tR)({ artist: n }),
          });
        },
        d = l.V5.model("Donation", {
          url: l.V5.string,
          artist: c.Go,
          goal: l.V5.maybe(l.V5.string),
        });
      var f = n(39156),
        x = n(18220),
        _ = n(44475),
        m = n(75441),
        p = n(32358),
        h = n(28676),
        v = n(59630),
        N = n.n(v);
      let C = (e) => {
          let { isActive: t } = e;
          return (0, m.jsxs)("div", {
            className: (0, p.W)(N().shimmer, N().donation),
            children: [
              (0, m.jsx)(h.Shimmer, {
                isActive: t,
                radius: "round",
                className: N().shimmerCover,
              }),
              (0, m.jsxs)("div", {
                className: N().shimmerContainer,
                children: [
                  (0, m.jsxs)("div", {
                    className: N().shimmerText,
                    children: [
                      (0, m.jsx)(h.Shimmer, {
                        isActive: t,
                        radius: "xxxl",
                        className: N().shimmerArtist,
                      }),
                      (0, m.jsx)(h.Shimmer, {
                        isActive: t,
                        radius: "xxxl",
                        className: N().shimmerGoal,
                      }),
                    ],
                  }),
                  (0, m.jsx)(h.Shimmer, {
                    isActive: t,
                    radius: "xxxl",
                    className: N().shimmerButton,
                  }),
                ],
              }),
            ],
          });
        },
        k = (e) =>
          Array.from({ length: 10 }, (t, n) =>
            (0, m.jsx)(C, { isActive: e }, n),
          );
    },
    39156: function (e, t, n) {
      "use strict";
      n.d(t, {
        DonationButton: function () {
          return d;
        },
      });
      var a = n(75441),
        o = n(62569),
        s = n(65067),
        i = n(9317),
        r = n(68208),
        l = n(69756),
        c = n(13534);
      let u = (0, o.Pi)((e) => {
          let { onClick: t, className: n, forwardRef: o, ...s } = e,
            { formatMessage: u } = (0, i.Z)();
          return (0, a.jsx)(r.Button, {
            ref: o,
            size: "s",
            variant: "default",
            radius: "round",
            color: "secondary",
            onClick: t,
            className: n,
            "aria-label": u({ id: "donation.button-text" }),
            icon: (0, a.jsx)(l.Icon, { size: "xxs", variant: "ruble" }),
            ...(0, c.tEg)(s),
          });
        }),
        d = (0, s.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
    },
    18220: function (e, t, n) {
      "use strict";
      n.d(t, {
        DonationCard: function () {
          return h;
        },
      });
      var a = n(75441),
        o = n(32358),
        s = n(65067),
        i = n(9317),
        r = n(15937),
        l = n(68208),
        c = n(69756),
        u = n(59091),
        d = n(17392),
        f = n(13534),
        x = n(97141),
        _ = n(59630),
        m = n.n(_);
      let p = (e) => {
          let {
              artist: t,
              goal: n,
              onNavigateToArtist: s,
              onNavigateToDonation: _,
              forwardRef: p,
              ...h
            } = e,
            { formatMessage: v } = (0, i.Z)();
          return (0, a.jsxs)("div", {
            ref: p,
            className: (0, o.W)(m().root, m().donation),
            ...(0, f.tEg)(h),
            children: [
              (0, a.jsx)(u.Paper, {
                radius: "round",
                className: m().cover,
                children: (0, a.jsx)(x.rU, {
                  href: t.url,
                  onClick: s,
                  "aria-label": v(
                    { id: "entity-names.artist-name" },
                    { artistName: t.name },
                  ),
                  children: (0, a.jsx)(x.BE, {
                    className: m().image,
                    src: t.coverUri,
                    isAvailable: t.isAvailable,
                    size: 200,
                    fit: "cover",
                    withAvatarReplace: !0,
                    "aria-hidden": !0,
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className: m().container,
                children: [
                  (0, a.jsxs)("div", {
                    className: m().text,
                    children: [
                      (0, a.jsx)(d.Heading, {
                        variant: "span",
                        size: "xs",
                        weight: "bold",
                        lineClamp: 2,
                        className: m().artist,
                        children: t.name,
                      }),
                      (0, a.jsx)(d.Caption, {
                        variant: "span",
                        type: "text",
                        size: "l",
                        weight: "medium",
                        lineClamp: 2,
                        className: m().goal,
                        children: n,
                      }),
                    ],
                  }),
                  (0, a.jsxs)(l.Button, {
                    role: "link",
                    size: "s",
                    color: "secondary",
                    onClick: _,
                    className: m().label,
                    withRipple: !1,
                    children: [
                      (0, a.jsx)(c.Icon, { variant: "ruble", size: "xxxs" }),
                      (0, a.jsx)(d.Caption, {
                        type: "text",
                        size: "m",
                        weight: "medium",
                        variant: "span",
                        children: (0, a.jsx)(r.Z, {
                          id: "donation.support-button",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        h = (0, s.forwardRef)((e, t) => (0, a.jsx)(p, { forwardRef: t, ...e }));
    },
    44475: function (e, t, n) {
      "use strict";
      n.d(t, {
        DonationCarousel: function () {
          return f;
        },
      });
      var a = n(75441),
        o = n(32358),
        s = n(65067),
        i = n(59100),
        r = n(13534),
        l = n(97141),
        c = n(85786),
        u = n.n(c);
      let d = (e) => {
          let {
              className: t,
              forwardRef: n,
              headerClassName: c,
              containerClassName: d,
              headingVariant: f,
              title: x,
              viewAllActionLink: _,
              description: m,
              children: p,
              ...h
            } = e,
            v = (0, s.useId)(),
            N = (0, s.useRef)(null);
          return (0, a.jsxs)("section", {
            ref: n,
            className: (0, o.W)(u().root, t),
            ...(0, r.tEg)(h),
            children: [
              (0, a.jsx)(l.ti, {
                className: c,
                labeledForId: v,
                title: x,
                description: m,
                viewAllActionLink: _,
                controls: (0, a.jsx)(l.J8, {
                  className: u().controls,
                  carouselRef: N,
                }),
                headingVariant: f,
              }),
              (0, a.jsx)(i.Carousel, {
                ref: N,
                itemClassName: (0, o.W)(u().item, u().important),
                className: d,
                "aria-labelledby": v,
                children: p,
              }),
            ],
          });
        },
        f = (0, s.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
    },
    63496: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return o;
        },
      });
      var a = n(98375);
      let o = [a.FY.PLAYING, a.FY.LOADING_MEDIA_SOURCE, a.FY.BUFFERING];
    },
    61925: function (e, t, n) {
      "use strict";
      n.d(t, {
        useOnRepeatClick: function () {
          return l;
        },
      });
      var a = n(75441),
        o = n(6232),
        s = n(93093),
        i = n(13534),
        r = n(92569),
      isVibeContainer = n(44122);
      let l = () => {
        let { notify: e } = (0, i.d$W)(),
            { fullscreenPlayer: t } = (0, i.oR4)(),
            n = (0, i.R$C)();
        return (0, s.W)((s, l) => {
          if (null === s.entityMeta || !s.canChangeRepeatMode) return;
          let c = o.zq.NONE;
          if(isVibeContainer.x({data: {type: s?.contextType}}) && s.repeatMode === o.zq.NONE) {
            c = o.zq.ONE;
          } else {
            switch (s.repeatMode) {
              case o.zq.NONE:
                c = o.zq.CONTEXT;
                break;
              case o.zq.CONTEXT:
                c = o.zq.ONE;
            }
          }
          null == n || n.setRepeatMode(c, l),
              e((0, a.jsx)(r.NotificationRepeat, { repeatMode: c }), {
                containerId: t.modal.isOpened ? i.W$x.FULLSCREEN_INFO : i.W$x.INFO,
              });
        });
      };
    },
    33856: function (e, t, n) {
      "use strict";
      n.d(t, {
        useOnShuffleClick: function () {
          return r;
        },
      });
      var a = n(75441),
        o = n(93093),
        s = n(13534),
        i = n(85051);
      let r = () => {
        let { notify: e } = (0, s.d$W)(),
          { fullscreenPlayer: t } = (0, s.oR4)(),
          n = (0, s.R$C)();
        return (0, o.W)((o, r) => {
          null !== o.entityMeta &&
            o.canShuffle &&
            (null == n || n.toggleShuffle(r),
            e(
              (0, a.jsx)(i.NotificationShuffle, {
                shuffle: !!(null == n
                  ? void 0
                  : n.getState(r).queueState.shuffle.value),
              }),
              {
                containerId: t.modal.isOpened
                  ? s.W$x.FULLSCREEN_INFO
                  : s.W$x.INFO,
              },
            ));
        });
      };
    },
    70419: function (e, t, n) {
      "use strict";
      n.d(t, {
        useToggleMute: function () {
          return i;
        },
      });
      var a = n(65067),
        o = n(93093),
        s = n(13534);
      let i = () => {
        let e = (0, s.uK4)().get(s.V0J),
          t = (0, s.R$C)(),
          { advert: n, experiments: i } = (0, s.oR4)(),
          r = (0, s.ozq)(),
          l = i.checkExperiment(s.peG.WebNextPlayerBarBackgroundProgress, "on"),
          c = (0, o.W)(async (a) => {
            let { sonataState: o, volume: i, playbackId: c } = a;
            l
              ? await (null == t ? void 0 : t.setExponentVolume(i, c))
              : await (null == t ? void 0 : t.setVolume(i, c)),
              e.set(s.BUb.YmPlayerVolume, i, { expires: 365 }),
              n.isAdvertShown &&
                (l
                  ? null == r || r.audioAdvertPlayback.setExponentVolume(i)
                  : null == r || r.audioAdvertPlayback.setVolume(i),
                o.setVolume(i));
          });
        return (0, a.useCallback)(
          async (t, n, a) => {
            if (0 !== n)
              e.set(s.BUb.YmPlayerPrevVolume, n, { expires: 365 }),
                await c({ sonataState: t, volume: 0, playbackId: a });
            else {
              var o;
              let n =
                null !== (o = e.get(s.BUb.YmPlayerPrevVolume)) && void 0 !== o
                  ? o
                  : 1;
              e.remove(s.BUb.YmPlayerPrevVolume),
                await c({ sonataState: t, volume: n, playbackId: a });
            }
          },
          [e, c],
        );
      };
    },
    31262: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return m;
        },
      });
      var a = n(75441),
        o = n(32358),
        s = n(62569),
        i = n(9317),
        r = n(35846),
        l = n(93093),
        c = n(68208),
        u = n(69756),
        d = n(94544),
        f = n(54723),
        x = n(23222),
        _ = n.n(x);
      let m = (0, s.Pi)((e) => {
        let {
            className: t,
            withShuffle: n,
            shuffle: s,
            canMoveBackward: x,
            canMoveForward: m,
            onClickNext: p,
            onClickPrev: h,
            withRepeat: v,
            repeatMode: N,
            playButton: C,
            isDisabledShuffle: k,
            isDisabledRepeat: B,
            onRepeatClick: w,
            onShuffleClick: R,
          } = e,
          { formatMessage: b } = (0, i.Z)(),
          S = (0, l.W)(() => {
            p();
          }),
          I = (0, l.W)(() => {
            h();
          });
        return (0, a.jsxs)("div", {
          className: (0, o.W)(_().root, t),
          children: [
            n &&
              (0, a.jsx)("div", {
                className: _().buttonContainer,
                children: (0, a.jsx)(f.ShuffleButton, {
                  className: _().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  iconSize: "xs",
                  isDisabled: k,
                  shuffle: s,
                  onClick: R,
                  ...(0, r.BA)(r.bG.sonata.SHUFFLE_BUTTON),
                }),
              }),
            (0, a.jsxs)("div", {
              className: _().sonataButtons,
              children: [
                (0, a.jsx)(c.Button, {
                  className: _().sonataButton,
                  variant: "text",
                  size: "m",
                  radius: "round",
                  "aria-hidden": !x,
                  disabled: !x,
                  withRipple: !1,
                  "aria-label": b({ id: "player-actions.previous-track" }),
                  icon: (0, a.jsx)(u.Icon, {
                    variant: "previous",
                    size: "xxs",
                  }),
                  onClick: I,
                  ...(0, r.BA)(r.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                C,
                (0, a.jsx)(c.Button, {
                  className: _().sonataButton,
                  radius: "round",
                  size: "m",
                  variant: "text",
                  disabled: !m,
                  "aria-hidden": !m,
                  withRipple: !1,
                  "aria-label": b({ id: "player-actions.next-track" }),
                  icon: (0, a.jsx)(u.Icon, { variant: "next", size: "xxs" }),
                  onClick: S,
                  ...(0, r.BA)(r.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            v &&
              (0, a.jsx)("div", {
                className: _().buttonContainer,
                children: (0, a.jsx)(d.RepeatButton, {
                  className: _().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  isDisabled: B,
                  iconSize: "xs",
                  repeatMode: N,
                  onClick: w,
                }),
              }),
          ],
        });
      });
    },
    84538: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return s;
        },
      });
      var a = n(75441),
        o = n(97141);
      let s = (e) => {
        let {
          disabled: t,
          isPlaying: n,
          onClickPlayPause: s,
          className: i,
        } = e;
        return (0, a.jsx)(o.JM, {
          className: i,
          size: "s",
          iconSize: "xs",
          disabled: t,
          isPlaying: n,
          onClick: s,
        });
      };
    },
    92569: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationRepeat: function () {
          return x;
        },
      });
      var a = n(75441),
        o = n(32358),
        s = n(65067),
        i = n(15937),
        r = n(6232),
        l = n(69756),
        c = n(17392),
        u = n(97141),
        d = n(50212),
        f = n.n(d);
      let x = (e) => {
        let { repeatMode: t, closeToast: n } = e,
          d = t === r.zq.ONE ? "repeat_one" : "repeat",
          x = (0, s.useMemo)(() => {
            let e;
            switch (t) {
              case r.zq.CONTEXT:
                e = (0, a.jsx)(i.Z, {
                  id: "notifications-info.change-repeat-context",
                });
                break;
              case r.zq.ONE:
                e = (0, a.jsx)(i.Z, {
                  id: "notifications-info.change-repeat-track",
                });
                break;
              case r.zq.NONE:
              default:
                e = (0, a.jsx)(i.Z, {
                  id: "notifications-info.change-repeat-none",
                });
            }
            return (0, a.jsx)(c.Caption, {
              className: f().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: e,
            });
          }, [t]);
        return (0, a.jsx)(u.Yj, {
          cover: (0, a.jsx)(l.Icon, {
            className: (0, o.W)(f().icon, {
              [f().icon_unset]: t === r.zq.NONE,
            }),
            size: "xs",
            variant: d,
          }),
          message: x,
          closeToast: n,
        });
      };
    },
    85051: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationShuffle: function () {
          return f;
        },
      });
      var a = n(75441),
        o = n(32358),
        s = n(65067),
        i = n(15937),
        r = n(69756),
        l = n(17392),
        c = n(97141),
        u = n(1404),
        d = n.n(u);
      let f = (e) => {
        let { shuffle: t, closeToast: n } = e,
          u = (0, s.useMemo)(() => {
            let e;
            return (
              (e = t
                ? (0, a.jsx)(i.Z, { id: "notifications-info.shuffle-enabled" })
                : (0, a.jsx)(i.Z, {
                    id: "notifications-info.shuffle-disabled",
                  })),
              (0, a.jsx)(l.Caption, {
                className: d().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: e,
              })
            );
          }, [t]);
        return (0, a.jsx)(c.Yj, {
          cover: (0, a.jsx)(r.Icon, {
            className: (0, o.W)(d().icon, { [d().icon_unset]: !t }),
            size: "xs",
            variant: "shuffle",
          }),
          message: u,
          closeToast: n,
        });
      };
    },
    80045: function (e, t, n) {
      "use strict";
      n.d(t, {
        PromoLandingSonataControls: function () {
          return v;
        },
      });
      var a = n(75441),
        o = n(62569),
        s = n(65067),
        i = n(93093),
        r = n(14218),
        l = n(13534),
        c = n(63496),
        u = n(61925),
        d = n(33856),
        f = n(84538),
        x = n(97141),
        _ = n(31262),
        m = n(23222),
        p = n.n(m);
      let h = (e) => {
          let {
            className: t,
            disabled: n,
            isPlaying: o,
            canChangeRepeatMode: s,
            canMoveBackward: i,
            canMoveForward: r,
            canShuffle: l,
            shuffle: c,
            onClickNext: u,
            onClickPlayPause: d,
            onClickPrev: f,
            repeatMode: m,
            onRepeatClick: h,
            onShuffleClick: v,
          } = e;
          return (0, a.jsx)(_.o, {
            onShuffleClick: v,
            onRepeatClick: h,
            isDisabledRepeat: !s || n,
            isDisabledShuffle: !l || n,
            withShuffle: n || l,
            shuffle: c,
            canMoveBackward: i,
            canMoveForward: r,
            onClickNext: u,
            onClickPrev: f,
            withRepeat: n || s,
            repeatMode: m,
            className: t,
            playButton: (0, a.jsx)(x.JM, {
              className: p().sonataButton,
              iconSize: "l",
              variant: "filled",
              isPlaying: o,
              iconClassName: p().playButtonIcon,
              onClick: d,
            }),
          });
        },
        v = (0, o.Pi)((e) => {
          let { className: t, isMobile: n, entityMeta: o } = e,
            {
              promolanding: { state: x },
            } = (0, l.oR4)(),
            _ = (0, l.R$C)(),
            m = (0, l.lAI)(),
            p = (0, u.useOnRepeatClick)(),
            v = (0, d.useOnShuffleClick)(),
            N = (0, l.XUT)(),
            C = c.V.includes(x.status),
            k = (0, i.W)(() => {
              o && (null == _ || _.togglePause(l.jiA.PROMO_LANDING), m(!C));
            }),
            B = (0, i.W)(() => {
              null == _ || _.moveForward(l.jiA.PROMO_LANDING);
            }),
            w = (0, i.W)(() => {
              null == _ || _.moveBackward(l.jiA.PROMO_LANDING);
            }),
            R = (0, i.W)(() => {
              p(x, l.jiA.PROMO_LANDING);
            }),
            b = (0, i.W)(() => {
              v(x, l.jiA.PROMO_LANDING);
            });
          (0, s.useEffect)(
            () => (
              null == N ||
                N.addShortcutsListener(
                  l.Pwk.PROMO_LANDING,
                  l.yxF.TOGGLE_PLAY,
                  k,
                ),
              null == N ||
                N.addShortcutsListener(
                  l.Pwk.PROMO_LANDING,
                  l.yxF.TOGGLE_REPEAT,
                  R,
                ),
              null == N ||
                N.addShortcutsListener(
                  l.Pwk.PROMO_LANDING,
                  l.yxF.TOGGLE_SHUFFLE,
                  b,
                ),
              () => {
                null == N ||
                  N.removeShortcutsListener(
                    l.Pwk.PROMO_LANDING,
                    l.yxF.TOGGLE_PLAY,
                  ),
                  null == N ||
                    N.removeShortcutsListener(
                      l.Pwk.PROMO_LANDING,
                      l.yxF.TOGGLE_SHUFFLE,
                    ),
                  null == N ||
                    N.removeShortcutsListener(
                      l.Pwk.PROMO_LANDING,
                      l.yxF.TOGGLE_REPEAT,
                    );
              }
            ),
            [k, R, b, N],
          );
          let S = (0, r.V)(() => (n ? f.m : h));
          return (0, a.jsx)(S, {
            onRepeatClick: R,
            onShuffleClick: b,
            className: t,
            disabled: !o,
            isPlaying: !!C,
            canMoveBackward: x.canMoveBackward,
            canMoveForward: x.canMoveForward,
            canShuffle: x.canShuffle,
            shuffle: x.shuffle,
            onClickPlayPause: k,
            onClickNext: B,
            onClickPrev: w,
            canChangeRepeatMode: x.canChangeRepeatMode,
            repeatMode: x.repeatMode,
          });
        });
    },
    94544: function (e, t, n) {
      "use strict";
      n.d(t, {
        RepeatButton: function () {
          return m;
        },
      });
      var a = n(75441),
        o = n(32358),
        s = n(9317),
        i = n(35846),
        r = n(6232),
        l = n(93093),
        c = n(68208),
        u = n(69756);
      let d = (e, t) =>
          e === r.zq.NONE || t
            ? i.bG.sonata.REPEAT_BUTTON_NO_REPEAT
            : e === r.zq.ONE
              ? i.bG.sonata.REPEAT_BUTTON_REPEAT_ONE
              : i.bG.sonata.REPEAT_BUTTON_REPEAT_CONTEXT,
        f = (e, t, n) =>
          t(
            e === r.zq.NONE || n
              ? { id: "player-actions.repeat" }
              : e === r.zq.ONE
                ? { id: "player-actions.repeat-one" }
                : { id: "player-actions.repeat-context" },
          );
      var x = n(46702),
        _ = n.n(x);
      let m = (e) => {
        let {
            isDisabled: t,
            repeatMode: n,
            className: x,
            iconClassName: m,
            size: p = "xxxs",
            iconSize: h = "xs",
            color: v,
            variant: N = "default",
            onClick: C,
          } = e,
          { formatMessage: k } = (0, s.Z)(),
          B = t || n !== r.zq.ONE ? "repeat" : "repeat_one",
          w = f(n, k, t),
          R = (0, l.W)((e) => {
            null == C || C(), e.stopPropagation();
          });
        return (0, a.jsx)(c.Button, {
          className: x,
          radius: "round",
          size: p,
          variant: N,
          color: v,
          disabled: t,
          withRipple: !1,
          "aria-hidden": t,
          "aria-label": w,
          "aria-pressed": !t && n !== r.zq.NONE,
          onClick: R,
          icon: (0, a.jsx)(u.Icon, {
            size: h,
            variant: B,
            className: (0, o.W)(
              _().repeatIcon,
              _()["repeatIcon_".concat(n)],
              { [_().repeatIcon_disabled]: t },
              m,
            ),
          }),
          ...(0, i.BA)(d(n, t)),
        });
      };
    },
    54723: function (e, t, n) {
      "use strict";
      n.d(t, {
        ShuffleButton: function () {
          return x;
        },
      });
      var a = n(75441),
        o = n(32358),
        s = n(9317),
        i = n(35846),
        r = n(93093),
        l = n(68208),
        c = n(69756);
      let u = (e, t) =>
        !e || t ? i.bG.sonata.SHUFFLE_BUTTON : i.bG.sonata.SHUFFLE_BUTTON_ON;
      var d = n(12082),
        f = n.n(d);
      let x = (e) => {
        let {
            isDisabled: t,
            shuffle: n,
            className: d,
            size: x = "xxxs",
            variant: _ = "default",
            iconSize: m = "xs",
            color: p,
            onClick: h,
          } = e,
          { formatMessage: v } = (0, s.Z)(),
          N = (0, r.W)((e) => {
            null == h || h(), e.stopPropagation();
          });
        return (0, a.jsx)(l.Button, {
          className: d,
          radius: "round",
          size: x,
          variant: _,
          color: p,
          withRipple: !1,
          disabled: t,
          "aria-label": v({ id: "player-actions.shuffle" }),
          "aria-pressed": !t && n,
          "aria-hidden": t,
          icon: (0, a.jsx)(c.Icon, {
            variant: "shuffle",
            size: m,
            className: (0, o.W)(f().shuffleIcon, {
              [f().shuffleIcon_disabled]: t,
              [f().shuffleIcon_on]: !t && n,
              [f().shuffleIcon_off]: !t && !n,
            }),
          }),
          onClick: N,
          ...(0, i.BA)(u(n, t)),
        });
      };
    },
    91978: function (e, t, n) {
      "use strict";
      n.d(t, {
        SonataControls: function () {
          return P;
        },
      });
      var a = n(75441),
        o = n(62569),
        s = n(65067),
        i = n(93093),
        r = n(13534),
        l = n(63496),
        c = n(61925);
      let u = () => {
        let {
            sonataState: { entityMeta: e },
          } = (0, r.oR4)(),
          t = (0, r.R$C)();
        return {
          rewindBackwards: (0, s.useCallback)(() => {
            if (!t || !e || !e.durationMs) return;
            let n = t.state.playerState.progress.value.position - 15;
            t.setProgress(n < 0 ? 0 : n);
          }, [e, t]),
          rewindForward: (0, s.useCallback)(() => {
            if (!t || !e || !e.durationMs) return;
            let n = e.durationMs / 1e3,
              a = t.state.playerState.progress.value.position + 30;
            t.setProgress(a < n ? a : n);
          }, [e, t]),
        };
      };
      var d = n(33856),
        f = n(84538),
        x = n(18380),
        _ = n(32358),
        m = n(9317),
        p = n(35846),
        h = n(68208),
        v = n(69756),
        N = n(97141),
        C = n(94544),
        k = n(54723),
        B = n(23791),
        w = n.n(B);
      let R = (0, o.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: n,
            repeatMode: o,
            canMoveForward: s,
            canMoveBackward: i,
            canRewind: r,
            canShuffle: l,
            onClickNext: c,
            onClickPrev: u,
            onRewindBackwardsClick: d,
            onRewindForwardClick: f,
            onClickPlayPause: x,
            canChangeRepeatMode: B,
            shuffle: R,
            className: b,
            onRepeatClick: S,
            onShuffleClick: I,
          } = e,
          { formatMessage: A } = (0, m.Z)();
        return (0, a.jsxs)("div", {
          className: (0, _.W)(w().root, b),
          children: [
            (0, a.jsxs)("div", {
              className: w().buttonContainer,
              children: [
                (t || l) &&
                  (0, a.jsx)(k.ShuffleButton, {
                    className: w().sonataButton,
                    size: "s",
                    iconSize: "xxs",
                    color: "secondary",
                    isDisabled: t,
                    shuffle: R,
                    onClick: I,
                    ...(0, p.BA)(p.bG.sonata.SHUFFLE_BUTTON),
                  }),
                !t &&
                  r &&
                  (0, a.jsx)(h.Button, {
                    className: (0, _.W)(w().sonataButton, w().rewind),
                    color: "secondary",
                    size: "m",
                    radius: "round",
                    withRipple: !1,
                    "aria-label": A({ id: "player-actions.rewind-backwards" }),
                    icon: (0, a.jsx)(v.Icon, {
                      variant: "rewindBackwards",
                      size: "xxs",
                    }),
                    onClick: d,
                    ...(0, p.BA)(p.bG.sonata.REWIND_BACKWARDS_BUTTON),
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: w().sonataButtons,
              children: [
                (0, a.jsx)(h.Button, {
                  className: w().sonataButton,
                  color: "secondary",
                  size: "m",
                  radius: "round",
                  disabled: !i,
                  withRipple: !1,
                  "aria-label": A({ id: "player-actions.previous-track" }),
                  icon: (0, a.jsx)(v.Icon, {
                    variant: "previous",
                    size: "xxs",
                  }),
                  onClick: u,
                  ...(0, p.BA)(p.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, a.jsx)(N.JM, {
                  className: w().sonataButton,
                  iconSize: "m",
                  size: "l",
                  radius: "round",
                  color: "secondary",
                  buttonVariant: "default",
                  isPlaying: n,
                  iconClassName: w().playPauseButtonIcon,
                  onClick: x,
                }),
                (0, a.jsx)(h.Button, {
                  className: w().sonataButton,
                  radius: "round",
                  size: "m",
                  color: "secondary",
                  disabled: !s,
                  withRipple: !1,
                  "aria-label": A({ id: "player-actions.next-track" }),
                  icon: (0, a.jsx)(v.Icon, { variant: "next", size: "xxs" }),
                  onClick: c,
                  ...(0, p.BA)(p.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: w().buttonContainer,
              children: [
                !t &&
                  r &&
                  (0, a.jsx)(h.Button, {
                    className: (0, _.W)(w().sonataButton, w().rewind),
                    color: "secondary",
                    size: "m",
                    radius: "round",
                    withRipple: !1,
                    "aria-label": A({ id: "player-actions.rewind-forward" }),
                    icon: (0, a.jsx)(v.Icon, {
                      variant: "rewindForward",
                      size: "xxs",
                    }),
                    onClick: f,
                    ...(0, p.BA)(p.bG.sonata.REWIND_FORWARD_BUTTON),
                  }),
                (t || B) &&
                  (0, a.jsx)(C.RepeatButton, {
                    className: w().sonataButton,
                    size: "s",
                    color: "secondary",
                    isDisabled: t,
                    iconSize: "xxs",
                    repeatMode: o,
                    onClick: S,
                  }),
              ],
            }),
          ],
        });
      });
      var b = n(84638),
        S = n(32399),
        I = n(45318),
        A = n.n(I);
      let j = (0, o.Pi)((e) => {
          let {
              isPlaying: t,
              canMoveForward: n,
              canMoveBackward: o,
              canRewind: i,
              onClickNext: l,
              onClickPrev: c,
              onRewindBackwardsClick: u,
              onRewindForwardClick: d,
              onClickPlayPause: f,
              className: x,
            } = e,
            { formatMessage: p } = (0, m.Z)(),
            { user: C, sonataState: k } = (0, r.oR4)(),
            B = (0, r.XUT)(),
            w = k.entityMeta,
            R = k.contextType === b.A.Generative,
            I = C.isAuthorized && !R,
            j = (0, S.SB)(k.entityMeta),
            P = (0, S.KX)(k.entityMeta);
          (0, s.useEffect)(() => {
            if (!k.isGenerativeContext)
              return (
                null == B || B.addShortcutsListener(r.Pwk.MAIN, r.yxF.LIKE, j),
                null == B ||
                  B.addShortcutsListener(r.Pwk.MAIN, r.yxF.DISLIKE, P),
                () => {
                  null == B ||
                    B.removeShortcutsListener(r.Pwk.MAIN, r.yxF.LIKE),
                    null == B ||
                      B.removeShortcutsListener(r.Pwk.MAIN, r.yxF.DISLIKE);
                }
              );
          }, [P, j, B, k.isGenerativeContext]);
          let y = (0, s.useMemo)(
              () =>
                i
                  ? (0, a.jsx)(h.Button, {
                      className: A().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      withRipple: !1,
                      "aria-label": p({
                        id: "player-actions.rewind-backwards",
                      }),
                      icon: (0, a.jsx)(v.Icon, {
                        variant: "rewindBackwards",
                        size: "xs",
                      }),
                      onClick: u,
                    })
                  : (0, a.jsx)(h.Button, {
                      className: A().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      disabled: !o,
                      withRipple: !1,
                      "aria-label": p({ id: "player-actions.previous-track" }),
                      icon: (0, a.jsx)(v.Icon, {
                        variant: "previous",
                        size: "xs",
                      }),
                      onClick: c,
                    }),
              [i, o, p, c, u],
            ),
            O = (0, s.useMemo)(
              () =>
                i
                  ? (0, a.jsx)(h.Button, {
                      className: A().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      disabled: !n,
                      withRipple: !1,
                      "aria-label": p({ id: "player-actions.rewind-forward" }),
                      icon: (0, a.jsx)(v.Icon, {
                        variant: "rewindForward",
                        size: "xs",
                      }),
                      onClick: d,
                    })
                  : (0, a.jsx)(h.Button, {
                      className: A().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      withRipple: !1,
                      "aria-label": p({ id: "player-actions.next-track" }),
                      icon: (0, a.jsx)(v.Icon, { variant: "next", size: "xs" }),
                      onClick: l,
                    }),
              [i, n, p, l, d],
            );
          return (0, a.jsxs)("div", {
            className: (0, _.W)(A().root, x),
            children: [
              (0, a.jsx)("div", {
                className: A().buttonContainer,
                children:
                  w &&
                  I &&
                  (0, a.jsx)(N.FM, {
                    fallback: (0, a.jsx)(N.Q1, {
                      isDisliked: w.isDisliked,
                      iconSize: "xs",
                      onClick: P,
                    }),
                  }),
              }),
              (0, a.jsxs)("div", {
                className: A().sonataButtons,
                children: [
                  y,
                  (0, a.jsx)(N.JM, {
                    className: A().sonataButton,
                    iconSize: "xxl",
                    variant: "filled",
                    color: "secondary",
                    isPlaying: t,
                    iconClassName: A().playPauseButtonIcon,
                    onClick: f,
                  }),
                  O,
                ],
              }),
              (0, a.jsx)("div", {
                className: A().buttonContainer,
                children:
                  w &&
                  I &&
                  (0, a.jsx)(N.FM, {
                    fallback: (0, a.jsx)(N.dJ, {
                      isLiked: w.isLiked,
                      iconSize: "xs",
                      onClick: j,
                      disabled: !C.isAuthorized,
                    }),
                  }),
              }),
            ],
          });
        }),
        P = (0, o.Pi)((e) => {
          var t, n;
          let {
              isMobile: o,
              entityMeta: _,
              isFullscreen: m,
              className: p,
              withShuffle: h,
              withRepeat: v,
            } = e,
            {
              sonataState: N,
              vibe: C,
              advert: k,
              modals: { popoverOverPlayer: B },
            } = (0, r.oR4)(),
            w = (0, r.XUT)(),
            b = (0, r.R$C)(),
            { rewindBackwards: S, rewindForward: I } = u(),
            A = (0, r.RVp)(),
            P = (0, r.ozq)(),
            y = (0, r.lAI)(),
            O = A && (null == _ ? void 0 : _.isNonMusic),
            E = (0, r.qsr)(),
            { togglePlay: M } = (0, r.QhE)({
              seeds:
                null !==
                  (n =
                    null === (t = C.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== n
                  ? n
                  : [],
              pageIdForFrom: r.Rhz.HOME,
              blockIdForFrom: r.BEo.RUP_MAIN_RADIO,
              onPlayInterrupted: B.open,
            }),
            g = (0, s.useMemo)(
              () =>
                k.isAdvertShown ? k.isAdvertPlaying : l.V.includes(N.status),
              [N.status, k.isAdvertShown, k.isAdvertPlaying],
            ),
            T = (0, i.W)(() => {
              if (k.isAdvertShown) {
                var e;
                null == P ||
                  null === (e = P.audioAdvertPlayback) ||
                  void 0 === e ||
                  e.togglePause();
                return;
              }
              _ ? null == b || b.togglePause() : M();
            }),
            z = (0, i.W)(() => {
              (m && E()) || (T(), y(!g));
            }),
            F = (0, i.W)(() => {
              null == b || b.moveForward();
            }),
            L = (0, i.W)(() => {
              null == b || b.moveBackward();
            }),
            D = (0, d.useOnShuffleClick)(),
            G = (0, c.useOnRepeatClick)(),
            W = (0, i.W)(() => {
              G(N);
            }),
            U = (0, i.W)(() => {
              D(N);
            });
          (0, s.useEffect)(() => {
            if (
              !m &&
              (null == w ||
                w.addShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_PLAY, T),
              !k.isAdvertShown)
            )
              return (
                null == w ||
                  w.addShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_REPEAT, W),
                null == w ||
                  w.addShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_SHUFFLE, U),
                () => {
                  null == w ||
                    w.removeShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_PLAY),
                    k.isAdvertShown ||
                      (null == w ||
                        w.removeShortcutsListener(
                          r.Pwk.MAIN,
                          r.yxF.TOGGLE_SHUFFLE,
                        ),
                      null == w ||
                        w.removeShortcutsListener(
                          r.Pwk.MAIN,
                          r.yxF.TOGGLE_REPEAT,
                        ));
                }
              );
          }, [m, T, W, U, w, k.isAdvertShown]);
          let V = (0, s.useMemo)(
            () => (m ? (o ? j : R) : o ? f.m : x.S),
            [o, m],
          );
          return (0, a.jsx)(V, {
            className: p,
            disabled: null === N.entityMeta || (k.isAdvertShown && !o),
            isPlaying: g || !1,
            canMoveBackward: N.canMoveBackward && !k.isAdvertShown,
            canMoveForward: N.canMoveForward && !k.isAdvertShown,
            withShuffle: h,
            withRepeat: v,
            canShuffle: N.canShuffle,
            shuffle: N.shuffle,
            onClickPlayPause: z,
            onClickNext: F,
            onClickPrev: L,
            canRewind: O && !k.isAdvertShown,
            onRewindBackwardsClick: S,
            onRewindForwardClick: I,
            canChangeRepeatMode: N.canChangeRepeatMode,
            repeatMode: N.repeatMode,
            onRepeatClick: W,
            onShuffleClick: U,
          });
        });
    },
    18380: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return h;
        },
      });
      var a = n(75441),
        o = n(62569),
        s = n(65067),
        i = n(93093),
        r = n(14218),
        l = n(13534),
        c = n(97141),
        u = n(84638),
        d = n(98375);
      let f = () => {
        let {
            sonataState: e,
            modals: { popoverOverPlayer: t },
            user: n,
          } = (0, l.oR4)(),
          { isPassToProduct: a } = (0, l.NMB)(),
          o = (0, l.R$C)(),
          i = e.contextType === u.A.Generative;
        (0, s.useEffect)(() => {
          if ((n.isAuthorized && !a) || i) return;
          let e =
            null == o
              ? void 0
              : o.state.playerState.event.onChange((e) => {
                  e === d.xg.PLAYING && t.open();
                });
          return () => {
            null == e || e();
          };
        }, [o, t, i, a, n.isAuthorized]);
      };
      var x = n(31262),
        _ = n(23222),
        m = n.n(_);
      let p = { mainAxis: 44 },
        h = (0, o.Pi)((e) => {
          let {
              disabled: t,
              isPlaying: n,
              repeatMode: o,
              canMoveForward: u,
              canMoveBackward: d,
              canShuffle: _,
              shuffle: h,
              onClickNext: v,
              onClickPrev: N,
              onClickPlayPause: C,
              canChangeRepeatMode: k,
              className: B,
              withShuffle: w,
              withRepeat: R,
              onRepeatClick: b,
              onShuffleClick: S,
            } = e,
            {
              advert: I,
              modals: { popoverOverPlayer: A },
              user: j,
            } = (0, l.oR4)(),
            { isFreemium: P, hasFreeUserAccess: y } = (0, l.NMB)();
          f();
          let O = (0, s.useCallback)(
              () =>
                (0, a.jsx)(c.JM, {
                  className: m().sonataButton,
                  iconSize: "l",
                  variant: "filled",
                  isPlaying: n,
                  iconClassName: m().playButtonIcon,
                  onClick: C,
                }),
              [n, C],
            ),
            E = (0, i.W)((e) => {
              e || A.close();
            }),
            M = (0, r.V)(() => {
              let e = P && j.isAuthorized ? "vibe" : "fullTracks";
              return j.isAuthorized
                ? (0, a.jsx)(c.pl, {
                    isEnabled: y,
                    isOpened: A.isOpened,
                    placement: "top",
                    onOpenChange: E,
                    offsetOptions: p,
                    textVariant: e,
                    renderChildren: O,
                  })
                : (0, a.jsx)(c.Ld, {
                    isEnabled: !0,
                    isOpened: A.isOpened,
                    placement: "top",
                    onOpenChange: E,
                    offsetOptions: p,
                    textVariant: e,
                    renderChildren: O,
                  });
            });
          return (0, a.jsx)(x.o, {
            isDisabledRepeat: !k || t,
            isDisabledShuffle: !_ || t,
            withShuffle:
              ((t || _) && !(null == I ? void 0 : I.isAdvertShown)) || !!w,
            shuffle: h,
            canMoveBackward: d,
            canMoveForward: u,
            onClickNext: v,
            onClickPrev: N,
            withRepeat:
              ((t || k) && !(null == I ? void 0 : I.isAdvertShown)) || !!R,
            repeatMode: o,
            className: B,
            playButton: M,
            onRepeatClick: b,
            onShuffleClick: S,
          });
        });
    },
    32715: function (e, t, n) {
      "use strict";
      n.d(t, {
        SonataVideoControls: function () {
          return u;
        },
      });
      var a = n(75441),
        o = n(62569),
        s = n(84638),
        i = n(6232),
        r = n(93093),
        l = n(13534),
        c = n(18380);
      let u = (0, o.Pi)((e) => {
        let { className: t } = e,
          { fullscreenVideoPlayer: n } = (0, l.oR4)(),
          o = (0, l.R$C)(),
          { from: u } = (0, l.MhG)({
            pageId: l.Rhz.VIDEO_PLAYER,
            contextId: n.state.contextId,
            contextType: s.A.Various,
          }),
          d = (0, r.W)(() => {
            null == o || o.moveForward(l.jiA.CLIP);
          }),
          f = (0, r.W)(() => {
            null == o || o.moveBackward(l.jiA.CLIP);
          }),
          { isPlaying: x, togglePlay: _ } = (0, l.qmq)({
            playContextParams: {
              contextData: {
                type: s.A.Various,
                meta: { id: l.i9R.VARIOUS_CLIP_CONTEXT },
                from: u,
              },
              loadContextMeta: !0,
            },
            sonataState: n.state,
            playbackId: l.jiA.CLIP,
          });
        return (0, a.jsx)(c.S, {
          className: t,
          isPlaying: x,
          canMoveBackward: n.state.canMoveBackward,
          canMoveForward: n.state.canMoveForward,
          canShuffle: !1,
          onClickPlayPause: _,
          onClickNext: d,
          onClickPrev: f,
          canChangeRepeatMode: !1,
          shuffle: !1,
          repeatMode: i.zq.NONE,
        });
      });
    },
    59630: function (e) {
      e.exports = {
        root: "DonationCard_root__81nc5",
        donation: "DonationCard_donation__SlArJ",
        cover: "DonationCard_cover__Mqb3g",
        image: "DonationCard_image__xABTn",
        container: "DonationCard_container__1xkqs",
        text: "DonationCard_text__mdeXx",
        artist: "DonationCard_artist__xq4Jw",
        goal: "DonationCard_goal__6BdcG",
        label: "DonationCard_label__T_hDw",
        shimmer: "DonationCard_shimmer__cMO7r",
        shimmerContainer: "DonationCard_shimmerContainer__9ZH20",
        shimmerText: "DonationCard_shimmerText__TrtjR",
        shimmerCover: "DonationCard_shimmerCover__U6Rwp",
        shimmerArtist: "DonationCard_shimmerArtist__jRQCV",
        shimmerGoal: "DonationCard_shimmerGoal__UGSTd",
        shimmerButton: "DonationCard_shimmerButton__LYfOm",
      };
    },
    85786: function (e) {
      e.exports = {
        root: "DonationCarousel_root__Uejjw",
        controls: "DonationCarousel_controls__anVvP",
        item: "DonationCarousel_item__89_B6",
        important: "DonationCarousel_important__Y52Es",
      };
    },
    23222: function (e) {
      e.exports = {
        root: "BaseSonataControlsDesktop_root__E6wjA",
        sonataButtons: "BaseSonataControlsDesktop_sonataButtons__7vLtw",
        sonataButton: "BaseSonataControlsDesktop_sonataButton__GbwFt",
        playButtonIcon: "BaseSonataControlsDesktop_playButtonIcon__TlFqv",
        buttonContainer: "BaseSonataControlsDesktop_buttonContainer__EB404",
      };
    },
    50212: function (e) {
      e.exports = {
        icon: "NotificationRepeat_icon__WCf4_",
        message: "NotificationRepeat_message__jCngy",
        icon_unset: "NotificationRepeat_icon_unset__z2fmU",
      };
    },
    1404: function (e) {
      e.exports = {
        icon: "NotificationShuffle_icon__U_ape",
        message: "NotificationShuffle_message__BNxJm",
        icon_unset: "NotificationShuffle_icon_unset__y1jg_",
      };
    },
    46702: function (e) {
      e.exports = {
        repeatIcon_none: "RepeatButton_repeatIcon_none__2nb1J",
        repeatIcon_context: "RepeatButton_repeatIcon_context__QwVY9",
        repeatIcon_one: "RepeatButton_repeatIcon_one___mSkU",
        repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__LwHV_",
      };
    },
    12082: function (e) {
      e.exports = {
        shuffleIcon_off: "ShuffleButton_shuffleIcon_off___oqrr",
        shuffleIcon_on: "ShuffleButton_shuffleIcon_on__qFJqV",
        shuffleIcon_disabled: "ShuffleButton_shuffleIcon_disabled__fQsOo",
      };
    },
    23791: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsDesktop_root__ZCIGk",
        sonataButtons: "SonataFullscreenControlsDesktop_sonataButtons__9y89g",
        sonataButton: "SonataFullscreenControlsDesktop_sonataButton__69FFc",
        playPauseButtonIcon:
          "SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX",
        buttonContainer:
          "SonataFullscreenControlsDesktop_buttonContainer__SpXWc",
      };
    },
    45318: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsMobile_root__H6MQ7",
        sonataButtons: "SonataFullscreenControlsMobile_sonataButtons__hLf19",
        sonataButton: "SonataFullscreenControlsMobile_sonataButton__UGQ_U",
        playPauseButtonIcon:
          "SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU",
        buttonContainer:
          "SonataFullscreenControlsMobile_buttonContainer__5ITqM",
      };
    },
  },
]);
