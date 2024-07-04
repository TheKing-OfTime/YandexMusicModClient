(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6678],
  {
    19122: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 18622));
    },
    18622: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          DefaultLayout: function () {
            return eV;
          },
        });
      var a = i(8759),
        n = i(35338),
        r = i(33423),
        o = i(11769),
        l = i(48769),
        s = i(99616),
        c = (i(6955), i(71747), i(5674));
      let d = ["album", "users", "artist", "chart"],
        u = () => {
          let e = (0, o.usePathname)();
          return (0, s.useMemo)(() => {
            let [, t] = e.split("/");
            return !!t && d.includes(t);
          }, [e]);
        };
      var _ = i(9097),
        m = i.n(_);
      m().secondaryEnter, m().secondaryEnterActive;
      let p = (0, r.Pi)((e) => {
        let { className: t, children: i } = e;
        (0, c.uK)();
        let { setContentRef: r } = (0, c.$Y)(),
          { settings: o } = (0, c.oR)();
        return (
          o.layout,
          c.t8.Mobile,
          u(),
          (0, s.useRef)(null),
          (0, a.jsx)("main", {
            className: (0, n.W)(m().rootOld, t),
            ref: r,
            children: (0, a.jsx)(s.Suspense, { children: i }),
          })
        );
      });
      var v = i(65244),
        h = i(33066),
        x = i(31476),
        f = i(1918),
        y = i(81546),
        g = i(81446),
        C = i(44285),
        b = i(23224),
        k = i.n(b);
      let j = (e) => {
          let { title: t, description: i, children: n } = e;
          return (0, a.jsxs)("div", {
            className: k().infoBlock,
            children: [
              (0, a.jsx)(f.Caption, {
                variant: "div",
                size: "l",
                className: k().infoTitle,
                children: t,
              }),
              (0, a.jsxs)(f.Caption, {
                variant: "div",
                size: "l",
                children: [i, " ", n],
              }),
            ],
          });
        },
        N = (0, r.Pi)(() => {
          let { formatMessage: e } = (0, v.Z)(),
            { notify: t } = (0, c.d$)(),
            {
              currentTrackInfo: i,
              settings: r,
              modals: { fullscreenPlayerModal: o, trackModal: l },
            } = (0, c.oR)(),
            d = i.isUGC,
            u = r.platform === c.t4.WINDOWS;
          d && i.isTrackIdle && i.getTrackMeta(),
            i.fullTrack || !i.isTrackIdle || d || i.getFullTrack(),
            !i.credits && i.isCreditsIdle && i.getCreditsInfo(),
            (0, s.useEffect)(
              () => () => {
                i.reset();
              },
              [i],
            );
          let _ = (0, s.useCallback)(() => {
              l.close(), i.reset();
            }, [i, l]),
            m = (0, s.useCallback)(
              (e) => {
                var t;
                e || i.reset(),
                  null === (t = l.onOpenChange) || void 0 === t || t.call(l, e);
              },
              [i, l],
            );
          i.isRejected &&
            (_(),
            t(
              (0, a.jsx)(C.Q, {
                error: e({ id: "error-messages.error-during-action" }),
              }),
              { containerId: c.W$.ERROR },
            ));
          let p = i.fullTrack,
            b = (0, s.useMemo)(() => {
              var t;
              if (
                !(null === (t = i.credits) || void 0 === t ? void 0 : t.length)
              )
                return null;
              let n = i.credits.filter(
                (t) => t.title !== e({ id: "track-modal.artist" }),
              );
              return n.map((e) => {
                let { title: t, value: i } = e;
                return (0, a.jsx)(j, { title: t, description: i }, t);
              });
            }, [i.credits, e]),
            N = (0, s.useMemo)(
              () => (null == p ? void 0 : p.artists.filter((e) => e.composer)),
              [null == p ? void 0 : p.artists],
            ),
            S =
              (null == p ? void 0 : p.artists) && (0, y.Op)(p.artists) > 1
                ? e({ id: "track-modal.artists" })
                : e({ id: "track-modal.artist" }),
            P =
              Number(null == N ? void 0 : N.length) > 1
                ? e({ id: "track-modal.composers" })
                : e({ id: "track-modal.composer" }),
            T = null == p ? void 0 : p.isExplicit;
          return (0, a.jsx)(x.u, {
            open: l.isOpened,
            onClose: _,
            placement: "right",
            contentClassName: k().modalContent,
            title: e({ id: "track-modal.title" }),
            headerClassName: k().headerClassName,
            className: (0, n.W)(k().root, {
              [k().root_withFullscreen]: o.isOpened,
              [k().root_withWindows]: u,
            }),
            overlayClassName: k().overlay,
            onOpenChange: m,
            labelClose: e({ id: "interface-actions.close" }),
            children: (0, a.jsxs)("div", {
              className: k().content,
              children: [
                (i.isTrackLoading || i.isTrackRejected) && (0, a.jsx)(C.AH, {}),
                p &&
                  (0, a.jsx)(j, {
                    title: e({ id: "track-modal.track-name" }),
                    description: p.title,
                    children:
                      (null == p ? void 0 : p.trackExplicitMark) &&
                      (0, a.jsx)(h.ExplicitMark, {
                        className: T ? k().explicit : "",
                        iconSize: "xs",
                        variant: p.trackExplicitMark,
                      }),
                  }),
                (null == p ? void 0 : p.version) &&
                  (0, a.jsx)(j, {
                    title: e({ id: "track-modal.version" }),
                    description: p.version,
                  }),
                Number(null == p ? void 0 : p.artists.length) > 0 &&
                  (0, a.jsxs)("div", {
                    className: k().infoBlock,
                    children: [
                      (0, a.jsx)(f.Caption, {
                        variant: "div",
                        size: "l",
                        className: k().infoTitle,
                        children: S,
                      }),
                      (0, a.jsx)(f.Caption, {
                        variant: "div",
                        size: "l",
                        children: (0, a.jsx)(g.jO, {
                          className: (0, n.W)(k().important, k().artists),
                          linkClassName: k().artistLink,
                          artists: null == p ? void 0 : p.artists,
                          withLink: !(null == p ? void 0 : p.isUGC),
                          captionSize: "l",
                          withComposer: !1,
                        }),
                      }),
                    ],
                  }),
                Number(null == N ? void 0 : N.length) > 0 &&
                  (0, a.jsxs)("div", {
                    className: k().infoBlock,
                    children: [
                      (0, a.jsx)(f.Caption, {
                        variant: "div",
                        size: "l",
                        className: k().infoTitle,
                        children: P,
                      }),
                      (0, a.jsx)(f.Caption, {
                        variant: "div",
                        size: "l",
                        children: (0, a.jsx)(g.jO, {
                          className: (0, n.W)(k().important, k().artists),
                          linkClassName: k().artistLink,
                          artists: N,
                          withLink: !(null == p ? void 0 : p.isUGC),
                          captionSize: "l",
                        }),
                      }),
                    ],
                  }),
                (i.isCreditsLoading || i.isCreditsRejected) &&
                  (0, a.jsx)(C.AH, {}),
                b,
              ],
            }),
          });
        }),
        S = (0, r.Pi)(() => {
          let { settings: e } = (0, c.oR)(),
            t = e.layout === c.t8.Mobile;
          return t ? null : (0, a.jsx)(N, {});
        });
      var P = i(31481),
        T = i(43310),
        E = i(94973),
        A = i.n(E),
        w = i(2814),
        M = i(454),
        R = i(57413),
        B = i(15527),
        L = i(14581),
        I = i(96437),
        O = i(78354),
        z = i(22926),
        V = i(62550),
        D = i.n(V),
        F = i(86703),
        U = i.n(F);
      let W = (e) => {
          let { value: t, variant: i, className: r } = e;
          return (0, a.jsx)(f.Caption, {
            className: (0, n.W)(U().root, U()["root_".concat(i)], r),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            children: t,
          });
        },
        G = (e) => {
          let {
              className: t,
              sliderClassName: i,
              disabled: r,
              isFullscreen: o,
              isMobile: l,
              showThumbVariant: d,
            } = e,
            u = (0, c.R$)(),
            _ = o || !l,
            m = (0, s.useRef)(!1),
            [p, h] = (0, s.useState)(0),
            [x, f] = (0, s.useState)(0),
            [y, g] = (0, s.useState)(0),
            { formatMessage: C } = (0, v.Z)(),
            b = (0, s.useCallback)(
              (e, t) => {
                ((m.current = !t), t) ? null == u || u.setProgress(e) : h(e);
              },
              [u],
            );
          return (
            (0, s.useEffect)(() => {
              let e =
                null == u
                  ? void 0
                  : u.state.playerState.progress.onChange(() => {
                      let e = u.state.playerState.progress.value;
                      e.duration === 1 / 0
                        ? (f(0), h(0), g(0))
                        : (f(e.duration),
                          h((t) => (m.current ? t : e.position)),
                          g(e.loaded));
                    });
              return () => {
                null == e || e();
              };
            }, [u]),
            (0, a.jsxs)("div", {
              className: (0, n.W)(
                D().root,
                { [D().root_fullscreen]: o, [D().root_mobile]: l },
                t,
              ),
              children: [
                _ &&
                  (0, a.jsx)(W, {
                    value: (0, c.gf)(Math.round(p), Math.round(x)),
                    variant: "start",
                    className: D().timecode,
                  }),
                (0, a.jsx)(z.i, {
                  className: (0, n.W)(
                    D().slider,
                    {
                      [D()["slider_thumbSize_".concat(o || l ? "xs" : "m")]]:
                        !0,
                    },
                    i,
                  ),
                  disabled: r,
                  thumbSize: o || l ? "xs" : "s",
                  trackSize: o || l ? "xs" : "s",
                  value: Math.round(p),
                  mode: "deferred",
                  secondaryValue: Math.round(y),
                  maxValue: 0 === x ? void 0 : Math.round(x),
                  onChange: b,
                  "aria-label": C({ id: "player-actions.timecode-control" }),
                  showThumbVariant: d,
                  ...(0, M.BA)(M.bG.changeTimecode.TIMECODE_SLIDER),
                }),
                _ &&
                  (0, a.jsx)(W, {
                    value: (0, c.gf)(Math.round(x), Math.round(x)),
                    variant: "end",
                    className: D().timecode,
                  }),
              ],
            })
          );
        };
      var H = i(98125),
        Z = i(82436),
        Q = i(95539),
        q = i(59899);
      let J = {
        [q.nJ.HQ_PLUS]: "HQ+",
        [q.nJ.HQ]: "HQ",
        [q.nJ.NQ]: "NQ",
        [q.nJ.LQ]: "LQ",
        [q.nJ.PREVIEW]: "PREVIEW",
      };
      var Y = i(52317),
        K = i(19865),
        X = i.n(K);
      let $ = (e) => {
        let { closeToast: t, onOpenQualitySettingsMenu: i, message: n } = e,
          { formatMessage: r } = (0, v.Z)(),
          o = (0, s.useCallback)(() => {
            i(), null == t || t();
          }, [t, i]),
          l = (0, s.useMemo)(
            () =>
              (0, a.jsxs)("div", {
                className: X().message,
                children: [
                  (0, a.jsx)(f.Caption, {
                    variant: "div",
                    size: "m",
                    children: n,
                  }),
                  (0, a.jsx)(B.z, {
                    className: X().changeButton,
                    onClick: o,
                    variant: "text",
                    withRipple: !1,
                    "aria-label": r({ id: "interface-actions.change" }),
                    children: (0, a.jsx)(f.Caption, {
                      variant: "div",
                      size: "m",
                      children: (0, a.jsx)(w.Z, {
                        id: "interface-actions.change",
                      }),
                    }),
                  }),
                ],
              }),
            [r, o, n],
          );
        return (0, a.jsx)(C.Yj, {
          closeToast: t,
          cover: (0, a.jsx)(L.J, {
            className: X().icon,
            size: "xs",
            variant: "settings",
          }),
          message: l,
        });
      };
      var ee = i(30917),
        et = i.n(ee);
      let ei = {
          duration: 300,
          initial: { transform: "translateY(5%)", opacity: 0 },
          open: { transform: "translateY(0)", opacity: 1 },
          close: { transform: "translateY(5%)", opacity: 0 },
        },
        ea = [
          {
            type: q.nJ.HQ_PLUS,
            text: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(w.Z, { id: "player-actions.audio-quality-hq-plus" }),
                "\xa0",
                (0, a.jsxs)("span", {
                  className: et().item_type,
                  children: ["• ", J[q.nJ.HQ_PLUS]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq-plus",
          },
          {
            type: q.nJ.HQ,
            text: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(w.Z, { id: "player-actions.audio-quality-hq" }),
                "\xa0",
                (0, a.jsxs)("span", {
                  className: et().item_type,
                  children: ["• ", J[q.nJ.HQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq",
          },
          {
            type: q.nJ.NQ,
            text: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(w.Z, { id: "player-actions.audio-quality-nq" }),
                "\xa0",
                (0, a.jsxs)("span", {
                  className: et().item_type,
                  children: ["• ", J[q.nJ.NQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-nq",
          },
        ],
        en = {
          [q.nJ.HQ_PLUS]: (0, a.jsx)(w.Z, {
            id: "player-actions.hq-plus-description",
          }),
          [q.nJ.HQ]: (0, a.jsx)(w.Z, { id: "player-actions.hq-description" }),
          [q.nJ.NQ]: (0, a.jsx)(w.Z, { id: "player-actions.nq-description" }),
          [q.nJ.LQ]: (0, a.jsx)(w.Z, { id: "player-actions.nq-description" }),
        },
        er = (0, r.Pi)((e) => {
          let {
            reference: t,
            onOpenChange: i,
            open: r,
            placement: o,
            returnFocus: l,
            isNewQualityEnabled: d,
          } = e;
          (0, c.ZP)(r);
          let { formatMessage: u } = (0, v.Z)(),
            { contentRef: _ } = (0, c.$Y)(),
            { notify: m } = (0, c.d$)(),
            p = (0, c.uK)(),
            h = p.get(c.V0),
            { sonataState: x, user: y } = (0, c.oR)(),
            g = (0, c.Sc)(),
            C = (0, s.useRef)(null),
            b = d
              ? u({ id: "player-actions.audio-quality-nda" })
              : u({ id: "player-actions.audio-quality" }),
            k = (0, s.useCallback)(() => {
              null == i || i(!0);
            }, [i]),
            j = (0, s.useCallback)(() => {
              null == i || i(!1);
            }, [i]),
            N = (0, s.useCallback)(
              (e) => {
                x.setQuality(e),
                  null == g || g.setQuality(e),
                  h.set(c.BU.YmPlayerQuality, e);
              },
              [g, x, h],
            ),
            S = (0, s.useCallback)(
              (e) => {
                let t = u({ id: e }).toLowerCase();
                return (0, a.jsx)(w.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [u],
            ),
            P = (0, s.useCallback)(
              (e, t) => () => {
                if (x.quality === e) return;
                N(e);
                let i = S(t);
                m((0, a.jsx)($, { onOpenQualitySettingsMenu: k, message: i }), {
                  containerId: c.W$.INFO,
                });
              },
              [S, k, m, x.quality, N],
            ),
            T = (0, s.useMemo)(() => {
              let e = !y.hasPlus;
              return ea.map((t) => {
                let { type: i, text: r, qualityMessageId: o } = t;
                if (!d && i === q.nJ.HQ_PLUS) return null;
                let l =
                    i === x.quality
                      ? (0, a.jsx)(L.J, { variant: "check" })
                      : null,
                  s = i === x.quality;
                return (
                  ((x.quality === q.nJ.NQ && i === q.nJ.LQ) ||
                    (x.quality === q.nJ.LQ && i === q.nJ.NQ)) &&
                    ((s = !0), (l = (0, a.jsx)(L.J, { variant: "check" }))),
                  (0, a.jsxs)(
                    Y.sN,
                    {
                      isBlock: !0,
                      disabled: e,
                      className: (0, n.W)(et().item, {
                        [et().expandedItem]: d,
                      }),
                      iconPosition: "right",
                      icon: l,
                      onClick: P(i, o),
                      role: "option",
                      "aria-selected": s,
                      children: [
                        d &&
                          (0, a.jsxs)("span", {
                            className: et().itemWrapper,
                            children: [
                              (0, a.jsx)("span", {
                                className: et().item_option,
                                children: r,
                              }),
                              (0, a.jsx)("span", {
                                className: (0, n.W)(
                                  et().item_option,
                                  et().itemSubTitle,
                                ),
                                children: en[i],
                              }),
                            ],
                          }),
                        !d &&
                          (0, a.jsx)("span", {
                            className: et().item_option,
                            children: r,
                          }),
                      ],
                    },
                    i,
                  )
                );
              });
            }, [P, x.quality, y.hasPlus, d]),
            E = (0, s.useMemo)(
              () =>
                d
                  ? {
                      className: et().root,
                      popoverContentClassName: et().popoverContent,
                      disableFloatingStyles: !0,
                      portalNode: _,
                      transform: !1,
                      transition: ei,
                    }
                  : { offsetOptions: 10 },
              [_, d],
            );
          return (0, a.jsxs)(Y.v2, {
            reference: t,
            placement: o,
            open: r,
            onOpenChange: i,
            returnFocus: l,
            role: "listbox",
            strategy: "absolute",
            ...E,
            children: [
              (0, a.jsxs)(f.Heading, {
                className: (0, n.W)(et().header, {
                  [et().headerWithCloseButton]: d,
                }),
                variant: "h4",
                size: "xs",
                weight: "bold",
                children: [
                  b,
                  d &&
                    (0, a.jsx)(B.z, {
                      ref: C,
                      radius: "round",
                      color: "secondary",
                      size: "xxs",
                      icon: (0, a.jsx)(L.J, { variant: "close", size: "xxs" }),
                      onClick: j,
                      "aria-label": u({
                        id: "interface-actions.close-quality-settings",
                      }),
                    }),
                ],
              }),
              T,
            ],
          });
        });
      var eo = i(8092),
        el = i.n(eo);
      let es = (0, r.Pi)((e) => {
        var t;
        let { className: i, entityMeta: r, onLikeClick: o } = e,
          {
            user: l,
            sonataState: d,
            experiments: u,
            modals: { fullscreenPlayerModal: _ },
          } = (0, c.oR)(),
          { theme: m } = (0, c.Fg)(),
          [p, h] = (0, s.useState)(!1),
          [x, f] = (0, s.useState)(!1),
          { formatMessage: y } = (0, v.Z)(),
          g = (0, c.uK)(),
          b = g.get(c.V0),
          k = d.contextType === R.Ak.Generative,
          j = u.checkExperiment(c.pe.WebNextFullScreenPlayer, "on") && !k,
          N = u.checkExperiment(c.pe.WebNextPodcastPage, "on"),
          S = true,
          P = b.get(c.BU.YmPlayerQuality),
          T = P ? J[P] : null,
          E = l.isAuthorized && !k,
          A =
            (null == r ? void 0 : r.isTrackPodcast) ||
            (null == r
              ? void 0
              : null === (t = r.mainAlbum) || void 0 === t
                ? void 0
                : t.isPodcast),
          z = g.get(c.U5),
          V = d.canSpeed && z.features.nonMusic && N,
          D = (0, s.useMemo)(
            () => ({
              "--player-average-color-background": (0, Q.Er)(
                m,
                null == r ? void 0 : r.averageColor,
              ),
            }),
            [null == r ? void 0 : r.averageColor, m],
          ),
          F = (0, s.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          U = (0, s.useCallback)(
            (e) => {
              let t = e.target,
                i =
                  t instanceof Element &&
                  ["DIV", "SECTION"].includes(t.tagName);
              r && j && i && _.open();
            },
            [r, _, j],
          );
        return (0, a.jsxs)("section", {
          style: D,
          className: (0, n.W)(el().root, { [el().root_disabled]: !r }, i),
          onDoubleClick: U,
          ...(0, M.BA)(M.QM.player.PLAYERBAR_DESKTOP),
          children: [
            (0, a.jsxs)("div", {
              className: el().info,
              children: [
                (0, a.jsx)("div", {
                  className: el().infoCard,
                  children:
                    r &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)(I.Paper, {
                          radius: "s",
                          className: el().coverContainer,
                          children: [
                            (0, a.jsx)(C.BE, {
                              className: el().cover,
                              src: r.coverUri,
                              size: 100,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                            j &&
                              (0, a.jsxs)(O.u, {
                                placement: "top",
                                offsetOptions: 4,
                                children: [
                                  (0, a.jsx)("div", {
                                    className: el().fullscreenButtonContainer,
                                    children: (0, a.jsx)(B.z, {
                                      className: el().fullscreenButton,
                                      radius: "round",
                                      size: "s",
                                      color: "secondary",
                                      withRipple: !1,
                                      "aria-label": y({
                                        id: "player-actions.fullscreen",
                                      }),
                                      icon: (0, a.jsx)(L.J, {
                                        variant: "fullscreen",
                                        size: "xs",
                                      }),
                                      onClick: _.open,
                                    }),
                                  }),
                                  (0, a.jsx)(O._v, {
                                    children: (0, a.jsx)(w.Z, {
                                      id: "player-actions.fullscreen",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: el().description,
                          children: A
                            ? (0, a.jsx)(Q.wT, {
                                track: r,
                                withDate: !1,
                                withSecondaryColor: !0,
                                withExplicitMark: !0,
                                withPodcastName: !0,
                              })
                            : (0, a.jsx)(Q.ko, {
                                track: r,
                                withSecondaryColor: !0,
                                withExplicitMark: !0,
                                withAlbumLink: !0,
                              }),
                        }),
                      ],
                    }),
                }),
                (0, a.jsx)("div", {
                  className: el().infoButtons,
                  onDoubleClick: F,
                  children:
                    r &&
                    E &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(C.dJ, {
                          className: el().likeButton,
                          isLiked: r.isLiked,
                          onClick: o,
                          iconSize: "xs",
                        }),
                        (0, a.jsx)(Q.hz, {
                          track: r,
                          placement: "top",
                          open: p,
                          onOpenChange: h,
                          reference: (0, a.jsx)(B.z, {
                            size: "s",
                            variant: "text",
                            withRipple: !1,
                            radius: "round",
                            "aria-label": y({
                              id: "interface-actions.context-menu",
                            }),
                            icon: (0, a.jsx)(L.J, {
                              size: "xs",
                              variant: "more",
                            }),
                          }),
                        }),
                      ],
                    }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: el().sonata,
              children: [
                (0, a.jsx)(Z.WP, { isMobile: !1, entityMeta: r }),
                !d.isGenerativeContext &&
                  (0, a.jsx)(G, {
                    disabled: !r,
                    isMobile: !1,
                    isFullscreen: !1,
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: el().meta,
              children: [
                !d.isGenerativeContext &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      V && (0, a.jsx)(C.t5, { iconSize: "l" }),
                      !A &&
                        (0, a.jsx)(C.wx, {
                          title: y({ id: "player-actions.lyrics" }),
                          description: y({ id: "future-feature.message" }),
                          children: (0, a.jsx)(B.z, {
                            radius: "round",
                            size: "xxxs",
                            variant: "text",
                            disabled: !0,
                            withRipple: !1,
                            "aria-label": y({ id: "player-actions.lyrics" }),
                            icon: (0, a.jsx)(L.J, {
                              variant: "lyrics",
                              size: "xs",
                            }),
                          }),
                        }),
                      (0, a.jsx)(C.wx, {
                        title: y({ id: "player-actions.history" }),
                        description: y({ id: "future-feature.message" }),
                        children: (0, a.jsx)(B.z, {
                          radius: "round",
                          size: "xxxs",
                          variant: "text",
                          disabled: !0,
                          withRipple: !1,
                          "aria-label": y({ id: "player-actions.history" }),
                          icon: (0, a.jsx)(L.J, {
                            variant: "queue",
                            size: "xs",
                          }),
                        }),
                      }),
                      (0, a.jsx)(er, {
                        placement: "bottom",
                        open: x,
                        isNewQualityEnabled: S,
                        onOpenChange: f,
                        reference: (0, a.jsx)(B.z, {
                          className: (0, n.W)({ [el().settingsButton]: S }),
                          radius: "round",
                          size: "xxxs",
                          variant: "text",
                          withRipple: !1,
                          "aria-label": y({
                            id: "player-actions.audio-quality",
                          }),
                          icon: S
                            ? null
                            : (0, a.jsx)(L.J, {
                                variant: "settings",
                                size: "xs",
                              }),
                          ...(0, M.BA)(M.QM.player.SOUND_QUALITY_BUTTON),
                          children: S ? T : null,
                        }),
                      }),
                    ],
                  }),
                (0, a.jsx)(H.F, {}),
              ],
            }),
          ],
        });
      });
      var ec = i(23106),
        ed = i.n(ec);
      let eu = (0, r.Pi)((e) => {
          var t;
          let { className: i, entityMeta: r, onLikeClick: o } = e,
            {
              user: l,
              sonataState: d,
              experiments: u,
              modals: { fullscreenPlayerModal: _ },
            } = (0, c.oR)(),
            { theme: m } = (0, c.Fg)(),
            p = d.contextType === R.Ak.Generative,
            v = l.isAuthorized && !p,
            h = u.checkExperiment(c.pe.WebNextFullScreenPlayer, "on"),
            x =
              (null == r ? void 0 : r.isTrackPodcast) ||
              (null == r
                ? void 0
                : null === (t = r.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            f = (0, s.useMemo)(
              () => ({
                "--player-average-color-background": (0, Q.Er)(
                  m,
                  null == r ? void 0 : r.averageColor,
                ),
              }),
              [null == r ? void 0 : r.averageColor, m],
            ),
            y = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION", "IMG"].includes(t.tagName);
                r && h && i && _.open();
              },
              [r, _, h],
            );
          return (0, a.jsxs)("section", {
            style: f,
            className: (0, n.W)(ed().root, i),
            onClick: y,
            children: [
              !d.isGenerativeContext &&
                (0, a.jsx)(G, {
                  className: ed().progressBar,
                  sliderClassName: ed().progressBar,
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !r,
                }),
              (0, a.jsxs)("div", {
                className: ed().info,
                children: [
                  r
                    ? (0, a.jsxs)("div", {
                        className: ed().infoCard,
                        children: [
                          (0, a.jsx)(I.Paper, {
                            radius: "s",
                            className: ed().coverContainer,
                            children: (0, a.jsx)(C.BE, {
                              className: ed().cover,
                              src: r.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: ed().description,
                            children: x
                              ? (0, a.jsx)(Q.wT, {
                                  track: r,
                                  withDate: !1,
                                  withSecondaryColor: !0,
                                  withExplicitMark: !0,
                                  withPodcastName: !0,
                                })
                              : (0, a.jsx)(Q.ko, {
                                  track: r,
                                  withSecondaryColor: !0,
                                  withExplicitMark: !0,
                                  withAlbumLink: !0,
                                }),
                          }),
                        ],
                      })
                    : (0, a.jsx)("div", { className: ed().infoCard }),
                  (0, a.jsxs)("div", {
                    className: ed().infoButtons,
                    children: [
                      r &&
                        v &&
                        (0, a.jsx)(C.dJ, { isLiked: r.isLiked, onClick: o }),
                      (0, a.jsx)(Z.WP, { isMobile: !0, entityMeta: r }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        e_ = (0, r.Pi)((e) => {
          let { className: t } = e,
            { settings: i, sonataState: r } = (0, c.oR)(),
            o = (0, c.XU)(),
            l = (0, T.SB)(r.entityMeta),
            d = (0, T.KX)(r.entityMeta);
          (0, s.useEffect)(() => {
            if (!r.isGenerativeContext)
              return (
                null == o || o.addShortcutsListener(c.yx.LIKE, l),
                null == o || o.addShortcutsListener(c.yx.DISLIKE, d),
                () => {
                  null == o || o.removeShortcutsListener(c.yx.LIKE),
                    null == o || o.removeShortcutsListener(c.yx.DISLIKE);
                }
              );
          }, [d, l, o, r.isGenerativeContext]);
          let u = (0, s.useMemo)(
            () => (i.layout === c.t8.Mobile ? eu : es),
            [i.layout],
          );
          return (0, a.jsx)(u, {
            onLikeClick: l,
            entityMeta: r.entityMeta,
            className: (0, n.W)(t, A().root),
          });
        });
      var em = i(57285),
        ep = i(63553),
        ev = i.n(ep),
        eh = i(52070),
        ex = i.n(eh);
      let ef = (0, r.Pi)((e) => {
          var t;
          let { className: i, children: r } = e,
            { sonataState: o } = (0, c.oR)();
          return (0, a.jsxs)(I.Paper, {
            radius: "m",
            className: (0, n.W)(ex().root, i),
            children: [
              (0, a.jsx)(C.BE, {
                className: ex().cover,
                src:
                  null === (t = o.entityMeta) || void 0 === t
                    ? void 0
                    : t.coverUri,
                size: 400,
                fit: "cover",
                withAvatarReplace: !0,
              }),
              r,
            ],
          });
        }),
        ey = (0, r.Pi)(() => {
          var e, t;
          let { theme: i } = (0, c.Fg)(),
            { formatMessage: r } = (0, v.Z)(),
            [o, d] = (0, s.useState)(!1),
            {
              sonataState: u,
              user: _,
              modals: { trackModal: m, fullscreenPlayerModal: p },
            } = (0, c.oR)(),
            h = u.entityMeta,
            f = (0, T.SB)(h),
            g =
              (null == h ? void 0 : h.isTrackPodcast) ||
              (null == h
                ? void 0
                : null === (e = h.mainAlbum) || void 0 === e
                  ? void 0
                  : e.isPodcast),
            b = (0, s.useMemo)(
              () => ({
                "--player-average-color-background": (0, Q.Er)(
                  i,
                  null == h ? void 0 : h.averageColor,
                ),
              }),
              [null == h ? void 0 : h.averageColor, i],
            ),
            k = (0, y.Op)(null == h ? void 0 : h.artists),
            j = (0, s.useMemo)(
              () =>
                h
                  ? g
                    ? (0, a.jsx)(Q.wT, {
                        className: ev().trackMeta,
                        titleContainerClassName: ev().titleContainer,
                        track: h,
                        withExplicitMark: !0,
                        withSecondaryColor: !0,
                        withDate: !1,
                        captionSize: "l",
                        explicitSize: "s",
                        withPodcastName: !0,
                      })
                    : (0, a.jsx)(Q.ko, {
                        className: ev().trackMeta,
                        titleContainerClassName: ev().titleContainer,
                        track: h,
                        withExplicitMark: !0,
                        withSecondaryColor: !0,
                        withAlbumLink: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAllArtistsTitle: !0,
                      })
                  : null,
              [h, k, null == h ? void 0 : h.id, g],
            ),
            N = (0, s.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            S = (0, s.useMemo)(() => {
              if (
                _.isAuthorized &&
                !(null == h ? void 0 : h.isRemoved) &&
                (null == h ? void 0 : h.isAvailable)
              )
                return (0, a.jsx)(Q.hz, {
                  track: h,
                  open: o,
                  onOpenChange: d,
                  placement: "left",
                  reference: (0, a.jsx)(B.z, {
                    onClick: N,
                    size: "l",
                    withRipple: !1,
                    radius: "round",
                    className: (0, n.W)(ev().menuButton, {
                      [ev().menuButton_active]: o,
                    }),
                    "aria-label": r({ id: "interface-actions.context-menu" }),
                    icon: (0, a.jsx)(L.J, { variant: "more", size: "m" }),
                  }),
                });
            }, [r, N, o, h, _.isAuthorized]);
          return (0, a.jsxs)(x.u, {
            className: (0, n.W)(ev().root, ev().important),
            open: p.isOpened,
            onOpenChange: o || m.isOpened ? void 0 : p.onOpenChange,
            onClose: p.close,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: b,
            contentClassName: ev().modalContent,
            closeOnOutsidePress: !1,
            children: [
              (0, a.jsx)("header", {
                className: ev().header,
                children: (0, a.jsx)(B.z, {
                  className: ev().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "s",
                  icon: (0, a.jsx)(L.J, { variant: "arrowDown", size: "xs" }),
                  onClick: p.close,
                  "aria-label": r({ id: "interface-actions.close" }),
                }),
              }),
              (0, a.jsx)("div", {
                className: ev().content,
                children: (0, a.jsxs)("div", {
                  className: ev().trackContainer,
                  children: [
                    (0, a.jsx)(ef, {
                      className: ev().cover,
                      children: (0, a.jsxs)("div", {
                        className: (0, n.W)(ev().controls, {
                          [ev().controls_active]: o,
                        }),
                        children: [
                          (0, a.jsx)(Z.WP, {
                            className: ev().buttonsBlock,
                            isMobile: !1,
                            entityMeta: h,
                            isFullscreen: !0,
                          }),
                          S,
                          (0, a.jsx)(C.dJ, {
                            className: ev().likeButton,
                            isLiked: null == h ? void 0 : h.isLiked,
                            onClick: f,
                            iconSize: "m",
                            size: "l",
                            variant: "default",
                            color: "secondary",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: (0, n.W)(ev().trackInfo, {
                        [ev().trackInfo_withArtist]:
                          null == h
                            ? void 0
                            : null === (t = h.artists) || void 0 === t
                              ? void 0
                              : t.length,
                        [ev().trackInfo_withPodcast]: g,
                      }),
                      children: j,
                    }),
                    (0, a.jsx)("div", {
                      className: ev().timelineWrapper,
                      children: (0, a.jsx)(G, {
                        className: ev().timeline,
                        sliderClassName: ev().timelineSlider,
                        disabled: !h,
                        isMobile: !1,
                        isFullscreen: !1,
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(l.Notification, {
                className: ev().notification,
                enableMultiContainer: !0,
                containerId: c.W$.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, a.jsx)(l.Notification, {
                className: ev().notification,
                enableMultiContainer: !0,
                containerId: c.W$.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var eg = i(25984),
        eC = i.n(eg),
        eb = i(52938),
        ek = i.n(eb);
      let ej = (e) => {
        let { children: t, className: i } = e,
          r = (0, c.R$)(),
          {
            modals: { fullscreenPlayerModal: o },
          } = (0, c.oR)(),
          { formatMessage: l } = (0, v.Z)(),
          d = (0, s.useRef)(""),
          u = (0, s.useCallback)(
            (e) => {
              e.stopPropagation(), o.isOpened && o.close();
            },
            [o],
          ),
          _ = (0, s.useMemo)(() => {
            if (r) {
              var e;
              let t = r.state.queueState.currentEntity.value,
                i = null == t ? void 0 : t.context.data,
                a = null == i ? void 0 : i.type;
              switch (a) {
                case "vibe":
                  return null == i
                    ? void 0
                    : null === (e = i.meta.session) || void 0 === e
                      ? void 0
                      : e.wave.name;
                case "album":
                  return (
                    (d.current = "/album/".concat(
                      null == i ? void 0 : i.meta.id,
                    )),
                    l(
                      { id: "playing-now.album" },
                      { title: null == i ? void 0 : i.meta.title },
                    )
                  );
                case "playlist":
                  return (
                    (d.current = "/playlist/".concat(
                      null == i ? void 0 : i.meta.playlistUuid,
                    )),
                    l(
                      { id: "playing-now.playlist" },
                      { title: null == i ? void 0 : i.meta.title },
                    )
                  );
              }
            }
            return null;
          }, [r, l]);
        return (0, a.jsxs)("div", {
          className: (0, n.W)(ek().root, i),
          children: [
            !!_ &&
              (0, a.jsxs)("div", {
                className: ek().textBlock,
                children: [
                  (0, a.jsx)(f.Caption, {
                    variant: "span",
                    size: "s",
                    weight: "normal",
                    className: ek().subTitle,
                    children: (0, a.jsx)(w.Z, { id: "playing-now.common" }),
                  }),
                  d.current
                    ? (0, a.jsx)(C.rU, {
                        href: d.current,
                        target: "_self",
                        onClick: u,
                        className: ek().link,
                        children: (0, a.jsx)(f.Caption, {
                          variant: "span",
                          size: "m",
                          className: ek().title,
                          lineClamp: 1,
                          children: _,
                        }),
                      })
                    : (0, a.jsx)(f.Caption, {
                        variant: "span",
                        size: "m",
                        className: ek().title,
                        lineClamp: 1,
                        children: _,
                      }),
                ],
              }),
            t,
          ],
        });
      };
      var eN = i(60022),
        eS = i.n(eN);
      let eP = (0, r.Pi)((e) => {
        var t;
        let { className: i } = e,
          { sonataState: r } = (0, c.oR)(),
          o = r.entityMeta,
          l =
            (null == o ? void 0 : o.isTrackPodcast) ||
            (null == o
              ? void 0
              : null === (t = o.mainAlbum) || void 0 === t
                ? void 0
                : t.isPodcast);
        return (0, a.jsxs)("div", {
          className: (0, n.W)(eS().root, i),
          children: [
            (0, a.jsxs)("div", {
              className: eS().infoBlock,
              children: [
                (0, a.jsx)(I.Paper, {
                  radius: "m",
                  className: eS().coverWrapper,
                  children: (0, a.jsx)(C.BE, {
                    className: eS().cover,
                    src: null == o ? void 0 : o.coverUri,
                    size: 400,
                    fit: "cover",
                    withAvatarReplace: !0,
                  }),
                }),
                o &&
                  (0, a.jsx)("div", {
                    className: eS().trackInfo,
                    children: l
                      ? (0, a.jsx)(Q.wT, {
                          textClassName: eS().metaText,
                          track: o,
                          withExplicitMark: !0,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                        })
                      : (0, a.jsx)(Q.ko, {
                          textClassName: eS().metaText,
                          track: o,
                          withExplicitMark: !0,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                        }),
                  }),
              ],
            }),
            (0, a.jsx)("div", {
              className: eS().timeline,
              children: (0, a.jsx)(G, {
                disabled: !o,
                isMobile: !0,
                isFullscreen: !0,
                showThumbVariant: "always",
              }),
            }),
            (0, a.jsx)("div", {
              children: (0, a.jsx)(Z.WP, {
                className: eS().buttonsBlock,
                isMobile: !0,
                entityMeta: o,
                isFullscreen: !0,
              }),
            }),
          ],
        });
      });
      var eT = i(42498),
        eE = i.n(eT);
      let eA = (0, r.Pi)((e) => {
          let { className: t } = e,
            { sonataState: i } = (0, c.oR)(),
            { formatMessage: r } = (0, v.Z)(),
            o = null === i.entityMeta;
          return (0, a.jsxs)("div", {
            className: (0, n.W)(eE().root, t),
            children: [
              (o || i.canChangeRepeatMode) &&
                (0, a.jsx)(Z.$Z, {
                  isDisabled: o,
                  repeatMode: i.repeatMode,
                  variant: "text",
                }),
              (0, a.jsx)(C.wx, {
                title: r({ id: "player-actions.lyrics" }),
                description: r({ id: "future-feature.message" }),
                children: (0, a.jsx)(B.z, {
                  radius: "round",
                  size: "xxxs",
                  variant: "text",
                  disabled: !0,
                  withRipple: !1,
                  "aria-label": r({ id: "player-actions.lyrics" }),
                  icon: (0, a.jsx)(L.J, { variant: "lyrics", size: "xs" }),
                }),
              }),
              (o || i.canShuffle) &&
                (0, a.jsx)(Z.P4, {
                  isDisabled: o,
                  shuffle: i.shuffle,
                  variant: "text",
                }),
            ],
          });
        }),
        ew = (0, r.Pi)((e) => {
          let { mode: t = "track" } = e,
            { theme: i } = (0, c.Fg)(),
            { formatMessage: r } = (0, v.Z)(),
            {
              sonataState: o,
              modals: { fullscreenPlayerModal: l },
            } = (0, c.oR)(),
            d = o.entityMeta,
            u = (0, s.useMemo)(
              () => ({
                "--player-average-color-background": (0, Q.Er)(
                  i,
                  null == d ? void 0 : d.averageColor,
                ),
              }),
              [null == d ? void 0 : d.averageColor, i],
            ),
            _ = (0, s.useMemo)(
              () => ("track" === t ? (0, a.jsx)(eP, {}) : null),
              [t],
            ),
            m = (0, s.useMemo)(
              () => ("track" === t ? (0, a.jsx)(eA, {}) : null),
              [t],
            );
          return (0, a.jsxs)(x.u, {
            className: (0, n.W)(eC().root, eC().important),
            open: l.isOpened,
            onOpenChange: l.onOpenChange,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: u,
            contentClassName: eC().modalContent,
            children: [
              (0, a.jsxs)("header", {
                className: eC().header,
                children: [
                  (0, a.jsx)(B.z, {
                    radius: "round",
                    color: "secondary",
                    size: "s",
                    variant: "text",
                    icon: (0, a.jsx)(L.J, { variant: "arrowDown", size: "xs" }),
                    onClick: l.close,
                    "aria-label": r({ id: "interface-actions.close" }),
                  }),
                  (0, a.jsx)(ej, {
                    className: eC().headerCenter,
                    children: (0, a.jsx)(C.wx, {
                      title: r({ id: "player-actions.cast" }),
                      description: r({ id: "future-feature.message" }),
                      children: (0, a.jsx)(B.z, {
                        className: eC().castButton,
                        radius: "round",
                        size: "s",
                        variant: "text",
                        disabled: !0,
                        withRipple: !1,
                        "aria-label": r({ id: "player-actions.cast" }),
                        icon: (0, a.jsx)(L.J, { variant: "cast", size: "xs" }),
                      }),
                    }),
                  }),
                  (0, a.jsx)(C.wx, {
                    title: r({ id: "player-actions.history" }),
                    description: r({ id: "future-feature.message" }),
                    children: (0, a.jsx)(B.z, {
                      radius: "round",
                      size: "s",
                      variant: "text",
                      disabled: !0,
                      withRipple: !1,
                      "aria-label": r({ id: "player-actions.history" }),
                      icon: (0, a.jsx)(L.J, { variant: "queue", size: "xs" }),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: eC().wrapper,
                children: [
                  (0, a.jsx)("div", { className: eC().content, children: _ }),
                  (0, a.jsx)("div", {
                    className: eC().footerContainer,
                    children: m,
                  }),
                ],
              }),
            ],
          });
        }),
        eM = (e) => {
          {
            let t = e === c.t8.Mobile,
              i = window.screen.availHeight || window.innerHeight;
            return (!t && i < 450) || t;
          }
        },
        eR = (0, r.Pi)(() => {
          let { settings: e } = (0, c.oR)(),
            t = e.layout === c.t8.Mobile,
            [i, n] = (0, s.useState)(t),
            r = (0, s.useMemo)(
              () =>
                (0, em.Z)(
                  () => {
                    n(eM(e.layout));
                  },
                  100,
                  { trailing: !1 },
                ),
              [e.layout, n],
            );
          return (
            (0, s.useEffect)(
              () => (
                n(eM(e.layout)),
                window.addEventListener("resize", r),
                () => {
                  window.removeEventListener("resize", r);
                }
              ),
              [r, e.layout],
            ),
            i ? (0, a.jsx)(ew, {}) : (0, a.jsx)(ey, {})
          );
        });
      var eB = i(70579),
        eL = i(45635),
        eI = i(7042),
        eO = i(41751),
        ez = i.n(eO);
      let eV = (0, r.Pi)((e) => {
        let { children: t } = e,
          i = (0, o.usePathname)(),
          r = (0, c.uK)(),
          s = r.get(c.U5),
          { settings: d, experiments: u } = (0, c.oR)(),
          _ = d.layout === c.t8.Mobile,
          m = d.platform === c.t4.MACOS,
          v = d.platform === c.t4.WINDOWS,
          h = u.checkExperiment(c.pe.WebNextFullScreenPlayer, "on"),
          x = u.checkExperiment(c.pe.WebNextTrackAboutModal, "on");
        return (0, a.jsxs)("div", {
          className: (0, n.W)(ez().root, {
            [ez().root_applicationPreserveTitleBar]: v,
          }),
          children: [
            (0, a.jsx)(P.wp, {
              className: (0, n.W)(ez().navbar, {
                [ez().navbar_application_macos]: m,
                [ez().navbar_application_windows]: v,
              }),
            }),
            (0, a.jsx)(p, {
              className: (0, n.W)(ez().content, {
                [ez().content_withPlayerBar]: _,
              }),
              children: (0, a.jsxs)(
                C.SV,
                {
                  fallback: eB.D,
                  children: [
                    t,
                    (0, a.jsx)(l.Notification, {
                      className: ez().notificationInfoContainer,
                      enableMultiContainer: !0,
                      containerId: c.W$.INFO,
                      position: "bottom-center",
                    }),
                    (0, a.jsx)(l.Notification, {
                      className: ez().notificationErrorContainer,
                      enableMultiContainer: !0,
                      containerId: c.W$.ERROR,
                      position: "bottom-center",
                    }),
                  ],
                },
                i,
              ),
            }),
            (0, a.jsx)(e_, { className: ez().playerBar }),
            h && (0, a.jsx)(eR, {}),
            (0, a.jsx)(eI.F8, {}),
            (0, a.jsx)(eL._, {}),
            x && (0, a.jsx)(S, {}),
            s.dev.panel && (0, a.jsx)(C.bs, {}),
          ],
        });
      });
    },
    84290: function (e, t, i) {
      "use strict";
      i.d(t, {
        k_: function () {
          return u.VibeButton;
        },
        xJ: function () {
          return u.VibeButtonShimmer;
        },
        op: function () {
          return c.VibeCard;
        },
        KW: function () {
          return o;
        },
        FF: function () {
          return s;
        },
        BV: function () {
          return d.useOnPinClick;
        },
        xF: function () {
          return l;
        },
      });
      var a = i(96555),
        n = i(57413),
        r = i(5674);
      let o = a.V5.model("Vibe", {
          title: a.V5.optional(a.V5.string, ""),
          header: a.V5.optional(a.V5.string, ""),
          subtitle: a.V5.maybe(a.V5.string),
          stationId: a.V5.string,
          seeds: a.V5.array(a.V5.string),
          idForFrom: a.V5.maybe(a.V5.string),
          imageUrl: a.V5.maybe(a.V5.string),
          animationUrl: a.V5.maybe(a.V5.string),
          backgroundImageUrl: a.V5.maybe(a.V5.string),
          backgroundColor: a.V5.maybe(a.V5.string),
          colors: a.V5.maybe(
            a.V5.model({
              average: a.V5.maybe(a.V5.string),
              waveText: a.V5.maybe(a.V5.string),
            }),
          ),
        })
          .views((e) => ({
            get context() {
              if (e.seeds && (e.stationId !== r.sH || e.seeds.length > 1))
                return e.title;
              return null;
            },
            get pinId() {
              return (0, n.$k)(e.seeds);
            },
            get isPinned() {
              if (!(0, a.fh)(e)) return !1;
              let { pinsCollection: t } = (0, a.yj)(e);
              return t.isPinned(this.pinId);
            },
          }))
          .actions((e) => {
            let t = {
              togglePin: (0, a.ls)(function* () {
                if (!(0, a.fh)(e)) return;
                let { pinsCollection: t, user: i } = (0, a.yj)(e);
                if (i.isAuthorized)
                  return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
              }),
            };
            return t;
          }),
        l = (e) =>
          (0, a.pj)({
            title: e.name,
            seeds: e.seeds,
            stationId: e.stationId,
            idForFrom: e.idForFrom,
          }),
        s = (e) => {
          var t, i, n, r;
          return (0, a.pj)({
            title: e.title,
            header: e.header,
            stationId: e.stationId,
            seeds: e.seeds,
            animationUrl: e.animationUrl,
            backgroundImageUrl: e.backgroundImageUrl,
            imageUrl: e.imageUrl,
            colors: {
              average:
                null !==
                  (n =
                    null === (t = e.colors) || void 0 === t
                      ? void 0
                      : t.average) && void 0 !== n
                  ? n
                  : "",
              waveText:
                null !==
                  (r =
                    null === (i = e.colors) || void 0 === i
                      ? void 0
                      : i.waveText) && void 0 !== r
                  ? r
                  : "",
            },
          });
        };
      var c = i(68019),
        d = i(73093),
        u = i(41080);
    },
    73093: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useOnPinClick: function () {
            return d;
          },
        });
      var a = i(8759),
        n = i(93043),
        r = i(99616),
        o = i(65244),
        l = i(5674),
        s = i(44285);
      let c = (e) => {
          var t;
          let { vibe: i, closeToast: n } = e;
          return (0, a.jsx)(s.K1, {
            closeToast: n,
            entityVariant: s.j9.VIBE,
            entityTitle: i.title,
            averageColor:
              null === (t = i.colors) || void 0 === t ? void 0 : t.average,
            isPinned: i.isPinned,
          });
        },
        d = (e) => {
          let { user: t } = (0, l.oR)(),
            { notify: i } = (0, l.d$)(),
            { formatMessage: d } = (0, o.Z)(),
            [u, _] = (0, r.useState)(!1);
          return (0, r.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, a.jsx)(s.Q, {
                  error: d({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l.W$.ERROR },
              );
              return;
            }
            if (u) return;
            let r = { ...(0, n.ZN)(e), isPinned: !e.isPinned };
            _(!0);
            let o = await e.togglePin();
            _(!1),
              o
                ? i((0, a.jsx)(c, { vibe: r }), { containerId: l.W$.INFO })
                : i(
                    (0, a.jsx)(s.Q, {
                      error: d({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l.W$.ERROR },
                  );
          }, [d, i, u, t.isAuthorized, e]);
        };
    },
    41080: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VibeButton: function () {
            return g;
          },
          VibeButtonShimmer: function () {
            return y;
          },
        });
      var a = i(8759),
        n = i(35338),
        r = i(33423),
        o = i(99616),
        l = i(2814),
        s = i(454),
        c = i(92318),
        d = i(96213),
        u = i(15527),
        _ = i(14581),
        m = i(45656),
        p = i(12670),
        v = i(1918),
        h = i(5674),
        x = i(84785),
        f = i.n(x);
      let y = (e) => {
          let { isActive: t, className: i } = e;
          return (0, a.jsx)(p.Shimmer, {
            isActive: t,
            className: (0, n.W)(f().root, i),
          });
        },
        g = (0, r.Pi)((e) => {
          let { className: t, vibe: i } = e,
            { pageId: r } = (0, h.lV)(),
            { blockIdForFrom: p } = (0, h.qY)(),
            { ref: x, intersectionPropertyId: y } = (0, h.Vf)(),
            { toggleTrue: g, toggleFalse: C, state: b } = (0, c.O)(!1),
            { isPlaying: k, togglePlay: j } = (0, h.Qh)({
              seeds: i.seeds,
              pageIdForFrom: r,
              blockIdForFrom: p,
            }),
            N = (0, h.lA)(),
            S = (0, o.useCallback)(
              (e) => {
                (0, d.m)(e, f().ripple),
                  g(),
                  j().finally(() => {
                    C(), N(!k);
                  });
              },
              [C, g, j, k, N],
            ),
            P = (0, o.useMemo)(() => {
              var e;
              return {
                "--vibe-button-background":
                  null === (e = i.colors) || void 0 === e ? void 0 : e.average,
              };
            }, [i.colors]),
            T = k ? "pause" : "play";
          return (0, a.jsxs)(u.z, {
            style: P,
            withRipple: !1,
            withHover: !1,
            variant: "text",
            onClick: S,
            className: (0, n.W)(
              f().root,
              f().button,
              { [f().button_loading]: b },
              t,
            ),
            "data-intersection-property-id": y,
            ref: x,
            ...(0, s.BA)(s.QM.landing.VIBE_DISCOVERY_ITEM),
            children: [
              (0, a.jsx)(m.Image, {
                className: f().image,
                withAvatarReplace: !0,
                withFallback: !1,
                src: i.backgroundImageUrl,
                withAspectRatio: !0,
                size: 400,
                fit: "cover",
              }),
              (0, a.jsxs)("span", {
                className: f().textContainer,
                children: [
                  (0, a.jsx)(v.Caption, {
                    className: f().subtitle,
                    variant: "span",
                    type: "controls",
                    size: "s",
                    weight: "bold",
                    children: (0, a.jsx)(l.Z, { id: "entity-names.my-vibe" }),
                  }),
                  (0, a.jsxs)("span", {
                    className: f().titleContainer,
                    children: [
                      (0, a.jsx)(_.J, {
                        className: f().icon,
                        size: "xxs",
                        variant: T,
                      }),
                      (0, a.jsx)(v.Heading, {
                        className: f().title,
                        variant: "h2",
                        size: "xs",
                        lineClamp: 1,
                        children: i.title,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
    },
    68019: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VibeCard: function () {
            return p;
          },
        });
      var a = i(8759),
        n = i(35338),
        r = i(33423),
        o = i(99616),
        l = i(14077),
        s = i(96437),
        c = i(1918),
        d = i(5674),
        u = i(44285),
        _ = i(57707),
        m = i.n(_);
      let p = (0, r.Pi)((e) => {
        let { vibe: t, children: i, className: r } = e,
          { pageId: _ } = (0, d.lV)(),
          [p, v] = (0, o.useState)(!1),
          { blockIdForFrom: h } = (0, d.qY)(),
          { settings: x } = (0, d.oR)(),
          { sendPlaySearchFeedback: f } = (0, d.sA)(),
          y = x.layout === d.t8.Mobile,
          {
            isPlaying: g,
            isPaused: C,
            togglePlay: b,
          } = (0, d.Qh)({
            seeds: t.seeds,
            pageIdForFrom: _,
            blockIdForFrom: h,
          }),
          k = g || C,
          j = (0, o.useCallback)(() => {
            y && (p || g || (v(!0), null == f || f()), b());
          }, [y, g, p, f, b]),
          N = (0, o.useCallback)(() => {
            p || g || (v(!0), null == f || f()), b();
          }, [g, p, f, b]),
          S = (0, o.useMemo)(
            () =>
              (0, a.jsxs)(s.Paper, {
                className: m().cover,
                radius: "round",
                withShadow: !0,
                onClick: j,
                children: [
                  (0, a.jsx)(u.BE, {
                    size: 200,
                    fit: "cover",
                    className: m().image,
                    style: { backgroundColor: t.backgroundColor },
                    src: t.imageUrl,
                    alt: t.title,
                    withAvatarReplace: !0,
                  }),
                  k &&
                    (0, a.jsx)(u.Up, {
                      stopAnimation: C,
                      className: m().playingAnimation,
                    }),
                  (0, a.jsx)(l.kk, {
                    className: (0, n.W)(
                      m().controls,
                      { [m().controls_isPlaying]: k },
                      m().important,
                    ),
                    bottomContainerClassName: m().playControl,
                    radius: "round",
                    playControl: (0, a.jsx)(u.JM, {
                      isPlaying: g,
                      onClick: N,
                      className: (0, n.W)(m().playButton, m().control),
                      buttonVariant: "default",
                      withHover: !1,
                      iconSize: "xl",
                      variant: "filled",
                    }),
                  }),
                ],
              }),
            [j, N, C, g, k, t.backgroundColor, t.imageUrl, t.title],
          );
        return (0, a.jsx)(l.m7, {
          className: (0, n.W)(m().root, r),
          textPosition: "center",
          title: (0, a.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: t.title,
          }),
          description: (0, a.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 1,
            children: t.subtitle,
          }),
          view: S,
          children: i,
        });
      });
    },
    81546: function (e, t, i) {
      "use strict";
      i.d(t, {
        IT: function () {
          return o.ArtistCard;
        },
        xG: function () {
          return l.ArtistContextMenu;
        },
        o9: function () {
          return r;
        },
        Op: function () {
          return s;
        },
        v2: function () {
          return c.useArtistDisclaimer;
        },
      });
      var a = i(96555),
        n = i(81446);
      let r = a.V5.model("ArtistMeta", {
        artist: n.Go,
        lastMonthListeners: a.V5.maybe(a.V5.number),
      });
      var o = i(8752),
        l = i(265);
      let s = function () {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          i = t.reduce((t, i) => {
            var a;
            return (
              t +
              (null !==
                (e =
                  null === (a = i.decomposed) || void 0 === a
                    ? void 0
                    : a.length) && void 0 !== e
                ? e
                : 0)
            );
          }, 0);
        return t.length + i;
      };
      var c = i(99485);
    },
    99485: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useArtistDisclaimer: function () {
            return o;
          },
        });
      var a = i(99616),
        n = i(42503),
        r = i(5674);
      let o = (e) => {
        let { artist: t, callback: i, shouldHistoryBack: o } = e,
          {
            disclaimer: l,
            modals: { disclaimerModal: s },
          } = (0, r.oR)(),
          c = (0, a.useRef)(String((0, n.Z)())),
          d = (0, a.useRef)(!1),
          u = (0, r.uK)(),
          _ = u.get(r.ce);
        return (
          (0, a.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === c.current &&
              !d.current &&
              (null == i || i(), (d.current = !0));
          }, [i, l.id, l.isUnsafeDisclaimerConfirmed]),
          (0, a.useCallback)(
            async (e) => {
              let a = _.get(r.BU.ExEx);
              if (
                (null == t ? void 0 : t.isUnsafeLegal) &&
                (null == a
                  ? void 0
                  : a.includes("".concat(r.co.ARTIST, "_").concat(t.id)))
              ) {
                null == i || i();
                return;
              }
              if (
                (null == t ? void 0 : t.isLegalRejected) ||
                (null == t ? void 0 : t.isUnsafeLegal)
              ) {
                null == e || e.preventDefault(),
                  await l.getArtistDisclaimer({ artistId: t.id }),
                  t.isUnsafeLegal && l.setType(r.Gq.UNSAFE),
                  l.setId(c.current),
                  l.setEntityId(t.id),
                  l.setEntityType(r.co.ARTIST),
                  l.setShouldHistoryBack(!!o),
                  (d.current = !1),
                  s.open();
                return;
              }
              null == i || i();
            },
            [
              null == t ? void 0 : t.id,
              null == t ? void 0 : t.isLegalRejected,
              null == t ? void 0 : t.isUnsafeLegal,
              i,
              l,
              s,
              _,
              o,
            ],
          )
        );
      };
    },
    8752: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ArtistCard: function () {
            return j;
          },
        });
      var a = i(8759),
        n = i(35338),
        r = i(33423),
        o = i(99616),
        l = i(65244),
        s = i(2814),
        c = i(82834),
        d = i(454),
        u = i(57413),
        _ = i(15527),
        m = i(14077),
        p = i(14581),
        v = i(96437),
        h = i(1918),
        x = i(81446),
        f = i(5674),
        y = i(44285),
        g = i(99485),
        C = i(265),
        b = i(38755),
        k = i.n(b);
      let j = (0, r.Pi)((e) => {
        let { artist: t, className: i, children: r, contentLinesCount: b } = e,
          { ref: j, intersectionPropertyId: N } = (0, f.Vf)(),
          S = (0, f.x5)(),
          { formatMessage: P } = (0, l.Z)(),
          [T, E] = (0, o.useState)(!1),
          [A, w] = (0, o.useState)(!1),
          [M, R] = (0, o.useState)(!1),
          {
            sendLikeSearchFeedback: B,
            sendNavigateSearchFeedback: L,
            sendPlaySearchFeedback: I,
          } = (0, f.sA)(),
          O = (0, f.zx)(),
          z = (0, x.SB)(t),
          V = (0, x.BV)(t),
          { id: D, name: F, coverUri: U, isLiked: W } = t,
          G = (0, f.s0)(t.url),
          {
            sonataState: { status: H },
            experiments: Z,
          } = (0, f.oR)(),
          [Q, q] = (0, o.useState)(!1),
          J = (0, o.useMemo)(() => {
            let e = P({ id: "entity-names.artist-name" }, { artistName: F }),
              t = W ? P({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [F, W, P]),
          { isPlaying: Y, togglePlay: K } = (0, f.qm)({
            playContextParams: {
              contextData: {
                type: u.Ak.Artist,
                meta: { id: Number(D) },
                from: S,
              },
              loadContextMeta: !0,
            },
            sonataStatus: H,
          }),
          X = (0, g.useArtistDisclaimer)({ artist: t, callback: G }),
          $ = (0, g.useArtistDisclaimer)({ artist: t, callback: K }),
          ee = (0, o.useCallback)(
            (e) => {
              null == L || L(), O({ to: c.qU.ArtistScreen }), X(e);
            },
            [O, L, X],
          ),
          et = (0, o.useCallback)(
            (e) => {
              ee(e);
            },
            [ee],
          ),
          ei = (0, o.useCallback)(() => {
            T || Y || (E(!0), null == I || I()), $();
          }, [Y, T, I, $]),
          ea = (0, o.useCallback)(() => {
            A || W || (w(!0), null == B || B()), z();
          }, [W, z, A, B]),
          en = (0, o.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          er = (0, o.useCallback)(() => {
            R(!M), q(!M);
          }, [M]),
          eo = (0, o.useMemo)(
            () =>
              (0, a.jsx)(C.ArtistContextMenu, {
                artist: t,
                onOpenChange: er,
                open: M,
                returnFocus: !1,
                reference: (0, a.jsx)(_.z, {
                  onClick: en,
                  className: (0, n.W)(k().menuButton, k().control),
                  "aria-label": P({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(p.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, d.BA)(d.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [t, P, en, er, M],
          ),
          el = (0, o.useMemo)(() => {
            if (Z.checkExperiment(f.pe.WebPins, "on"))
              return (0, a.jsx)(y.RT, {
                onClick: V,
                isPinned: t.isPinned,
                className: (0, n.W)(k().pinButton, k().control),
                withRipple: !1,
              });
          }, [t.isPinned, Z, V]),
          es = (0, o.useMemo)(() => {
            if (t.isAvailable)
              return (0, a.jsx)(m.kk, {
                isVisible: M || Q,
                className: k().controls,
                radius: "round",
                playControl: (0, a.jsx)(y.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, n.W)(k().playButton, k().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: ei,
                  isPlaying: Y,
                  disabled: !t.isAvailableForPlaying,
                }),
                likeControl: (0, a.jsx)(y.dJ, {
                  className: (0, n.W)(k().likeButton, k().control),
                  isLiked: W,
                  onClick: ea,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: eo,
                pinControl: el,
              });
          }, [
            t.isAvailable,
            t.isAvailableForPlaying,
            eo,
            ea,
            ei,
            M,
            Q,
            W,
            Y,
            el,
          ]),
          ec = (0, o.useMemo)(
            () =>
              (0, a.jsx)(v.Paper, {
                className: k().cover,
                radius: "round",
                withShadow: !0,
                ...(0, d.BA)(d.bG.artist.ARTIST_CARD),
                children: (0, a.jsxs)("div", {
                  className: k().coverBlock,
                  onClick: et,
                  children: [
                    (0, a.jsx)(y.BE, {
                      className: k().image,
                      src: U,
                      size: 200,
                      fit: "cover",
                      alt: J,
                      withAvatarReplace: !0,
                      isAvailable: t.isAvailable,
                      "aria-hidden": !0,
                    }),
                    es,
                  ],
                }),
              }),
            [et, U, J, t.isAvailable, es],
          );
        return (0, a.jsx)(m.m7, {
          ref: j,
          className: (0, n.W)(k().root, i),
          textPosition: "center",
          "aria-label": J,
          title: (0, a.jsx)(h.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, a.jsx)(y.rU, {
              className: k().titleLink,
              href: t.url,
              "aria-label": J,
              onClick: ee,
              ...(0, d.BA)(d.bG.artist.ARTIST_TITLE),
              children: F,
            }),
          }),
          srTitle: (0, a.jsx)(y.rU, { href: t.url, onClick: ee, children: J }),
          "data-intersection-property-id": N,
          description: (0, a.jsx)(h.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, d.BA)(d.bG.artist.ARTIST_SUBTITLE),
            children: (0, a.jsx)(s.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: b,
          view: ec,
          ...(0, d.BA)(d.bG.artist.ARTIST_ITEM),
          children: r,
        });
      });
    },
    265: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ArtistContextMenu: function () {
            return d;
          },
        });
      var a = i(8759),
        n = i(33423),
        r = i(99616),
        o = i(52317),
        l = i(81446),
        s = i(5674),
        c = i(44285);
      let d = (0, n.Pi)((e) => {
        var t, i;
        let {
            artist: n,
            lastMonthListeners: d,
            reference: u,
            onOpenChange: _,
            open: m,
            returnFocus: p,
          } = e,
          { settings: v, experiments: h } = (0, s.oR)(),
          x = (0, l.BV)(n),
          f = (0, l.SB)(n),
          y = "".concat(s.aU.ARTIST, "-").concat(null == n ? void 0 : n.id),
          g = v.layout === s.t8.Mobile,
          C = h.checkExperiment(s.pe.WebPins, "on") && !g,
          { href: b } = (0, s.qK)(
            null !== (t = null == n ? void 0 : n.url) && void 0 !== t ? t : "",
          ),
          { isPlaying: k, togglePlay: j } = (0, s.Qh)({
            seeds:
              null !== (i = null == n ? void 0 : n.seeds) && void 0 !== i
                ? i
                : [],
            pageIdForFrom: s.Rh.RADIO,
            blockIdForFrom: y,
          }),
          N = (0, r.useCallback)(() => {
            k || j();
          }, [k, j]);
        return (
          (0, s.ZP)(m),
          (0, a.jsxs)(o.v2, {
            reference: u,
            isMobile: g,
            title: null == n ? void 0 : n.name,
            description: d,
            offsetOptions: 10,
            open: m,
            onOpenChange: _,
            returnFocus: p,
            children: [
              C &&
                (0, a.jsx)(c.Zd, {
                  onClick: x,
                  isPinned: null == n ? void 0 : n.isPinned,
                }),
              (0, a.jsx)(c.xZ, {
                onClick: f,
                isLiked: null == n ? void 0 : n.isLiked,
                disabled: !(null == n ? void 0 : n.isAvailable),
              }),
              (0, a.jsx)(c.GQ, {
                onClick: N,
                disabled: !(null == n ? void 0 : n.isAvailable),
                variant: "artist",
              }),
              (0, a.jsx)(c.zq, {
                disabled: !n,
                shareLink: b,
                entityVariant: "artist",
                entityTitle: null == n ? void 0 : n.name,
              }),
            ],
          })
        );
      });
    },
    98125: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return h;
        },
        K: function () {
          return m;
        },
      });
      var a = i(8759),
        n = i(35338),
        r = i(33423),
        o = i(99616),
        l = i(65244),
        s = i(454),
        c = i(15527),
        d = i(14581),
        u = i(22926),
        _ = i(5674);
      let m = () => {
        let e = (0, _.uK)(),
          t = e.get(_.V0),
          i = (0, _.R$)();
        return (0, o.useCallback)(
          async (e) => {
            var a;
            if (0 !== e)
              t.set(_.BU.YmPlayerPrevVolume, e),
                await (null == i ? void 0 : i.setVolume(0)),
                t.set(_.BU.YmPlayerVolume, 0);
            else {
              let e =
                null !== (a = t.get(_.BU.YmPlayerPrevVolume)) && void 0 !== a
                  ? a
                  : 1;
              t.remove(_.BU.YmPlayerPrevVolume),
                await (null == i ? void 0 : i.setVolume(e)),
                t.set(_.BU.YmPlayerVolume, e);
            }
          },
          [i, t],
        );
      };
      var p = i(73939),
        v = i.n(p);
      let h = (0, r.Pi)((e) => {
        var t, i;
        let { className: r } = e,
          { formatMessage: p } = (0, l.Z)(),
          h = (0, _.uK)(),
          x = (0, _.R$)(),
          { sonataState: f } = (0, _.oR)(),
          y = m(),
          g = h.get(_.V0),
          C =
            null !==
              (i =
                null !== (t = g.get(_.BU.YmPlayerVolume)) && void 0 !== t
                  ? t
                  : f.volume) && void 0 !== i
              ? i
              : 1,
          b = (0, o.useCallback)(
            (e) => {
              null == x || x.setVolume(e), g.set(_.BU.YmPlayerVolume, e);
            },
            [x, g],
          ),
          k = (0, o.useCallback)(async () => {
            await y(f.volume);
          }, [y, f.volume]),
          j = p(
            0 === f.volume
              ? { id: "player-actions.volume-on" }
              : { id: "player-actions.volume-off" },
          );
        return (0, a.jsxs)("div", {
          className: (0, n.W)(v().root, r),
          children: [
            (0, a.jsx)(c.z, {
              radius: "round",
              size: "xxxs",
              variant: "text",
              withRipple: !1,
              onClick: k,
              "aria-label": j,
              icon: (0, a.jsx)(d.J, {
                size: "xs",
                className: v().icon,
                variant: 0 === C ? "volumeOff" : "volume",
              }),
              className: v().button,
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            (0, a.jsx)(u.i, {
              thumbSize: "s",
              trackSize: "s",
              value: C,
              maxValue: 1,
              step: 0.01,
              onChange: b,
              "aria-label": p({ id: "player-actions.volume-control" }),
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_SLIDER),
            }),
          ],
        });
      });
    },
    42769: function (e, t, i) {
      "use strict";
      i.d(t, {
        h: function () {
          return n.h;
        },
        n: function () {
          return a.n;
        },
      });
      var a = i(22008),
        n = i(38828);
    },
    69559: function (e, t, i) {
      "use strict";
      i.d(t, {
        y5: function () {
          return n;
        },
        iX: function () {
          return x;
        },
        Cx: function () {
          return f;
        },
      });
      var a = i(99616);
      let n = (0, a.createContext)(null);
      var r = i(8759),
        o = i(33423),
        l = i(454),
        s = i(57413),
        c = i(66936),
        d = i(86502),
        u = i(66026),
        _ = i(5674);
      let m = (e) => {
        var t, i;
        let [n, r] = (0, a.useState)({}),
          { sonataState: o } = (0, _.oR)();
        (0, a.useEffect)(() => {
          if (o.contextType === s.Ak.Vibe) {
            var t, i, a, l;
            n.id ===
              (null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !n.isLiked &&
              (null === (l = o.entityMeta) || void 0 === l
                ? void 0
                : l.isLiked) &&
              e(),
              r({
                id: null === (i = o.entityMeta) || void 0 === i ? void 0 : i.id,
                isLiked:
                  null === (a = o.entityMeta) || void 0 === a
                    ? void 0
                    : a.isLiked,
              });
          }
        }, [
          o.contextType,
          null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (i = o.entityMeta) || void 0 === i ? void 0 : i.isLiked,
          n.id,
          n.isLiked,
          e,
        ]);
      };
      var p = i(42781),
        v = i.n(p);
      let h = "vibe-animation",
        x = (0, o.Pi)((e) => {
          var t, i, o, p, x, f, y;
          let { className: g } = e,
            C = (0, a.useRef)(null),
            b = (0, a.useRef)(null),
            k = (0, c.S1)([C]),
            { isIntersecting: j } =
              null !== (y = k[h]) && void 0 !== y ? y : {},
            { sonataState: N, user: S } = (0, _.oR)(),
            { theme: P } = (0, _.Fg)(),
            T = (0, a.useContext)(n),
            E = N.status === d.Xz.PLAYING && N.contextType === s.Ak.Vibe;
          (0, a.useEffect)(() => {
            if (C.current && T) {
              var e, t;
              let i =
                  null === (t = N.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                a = S.collectionHue;
              (b.current = new u.dr(C.current, T, a)),
                b.current.applySettings({ hue: i, collectionHue: a }),
                C.current.classList.add(v().root_visible);
            }
            return () => {
              var e;
              null === (e = b.current) || void 0 === e || e.destroy();
            };
          }, []),
            (0, a.useEffect)(() => {
              var e, t, i, a, n, r, o, l;
              let s =
                  null === (t = N.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                c =
                  null === (a = N.entityMeta) || void 0 === a
                    ? void 0
                    : null === (i = a.trackParameters) || void 0 === i
                      ? void 0
                      : i.energy,
                d =
                  null === (r = N.entityMeta) || void 0 === r
                    ? void 0
                    : null === (n = r.trackParameters) || void 0 === n
                      ? void 0
                      : n.userCollectionHue;
              d && S.setUserCollectionHue(d),
                E
                  ? null === (o = b.current) ||
                    void 0 === o ||
                    o.playAnimation({ hue: s, collectionHue: d, energy: c })
                  : null === (l = b.current) ||
                    void 0 === l ||
                    l.idleAnimation();
            }, [
              S,
              E,
              null === (i = N.entityMeta) || void 0 === i
                ? void 0
                : null === (t = i.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (p = N.entityMeta) || void 0 === p
                ? void 0
                : null === (o = p.trackParameters) || void 0 === o
                  ? void 0
                  : o.energy,
              null === (f = N.entityMeta) || void 0 === f
                ? void 0
                : null === (x = f.trackParameters) || void 0 === x
                  ? void 0
                  : x.userCollectionHue,
            ]),
            (0, a.useEffect)(() => {
              var e;
              let t = P === _.Q2.Dark ? 0.0705 : 0.9607;
              null === (e = b.current) ||
                void 0 === e ||
                e.applySettings({ backgroundColor: t });
            }, [P]),
            (0, a.useEffect)(() => {
              if (b.current) {
                var e, t;
                j
                  ? null === (e = b.current) ||
                    void 0 === e ||
                    e.enableRender(u.nT.BLOCK_VISIBILITY)
                  : null === (t = b.current) ||
                    void 0 === t ||
                    t.disableRender(u.nT.BLOCK_VISIBILITY);
              }
            }, [j]);
          let A = (0, a.useCallback)(() => {
            var e;
            null === (e = b.current) || void 0 === e || e.likeAnimation();
          }, []);
          return (
            m(A),
            (0, r.jsx)("div", {
              className: g,
              "data-intersection-property-id": h,
              ref: C,
              ...(0, l.BA)(l.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        }),
        f = (e) => {
          let t = (0, u.wX)((0, u.kB)(e), u.UE, u.TP),
            i = Math.round(255 * t[0]),
            a = Math.round(255 * t[1]),
            n = Math.round(255 * t[2]);
          return "rgb(".concat(i, ", ").concat(a, ", ").concat(n, ")");
        };
    },
    31481: function (e, t, i) {
      "use strict";
      i.d(t, {
        wp: function () {
          return ez;
        },
        Lc: function () {
          return eJ;
        },
      });
      var a,
        n,
        r,
        o,
        l,
        s,
        c,
        d,
        u,
        _,
        m,
        p,
        v,
        h = i(8759),
        x = i(35338),
        f = i(33423),
        y = i(99616),
        g = i.t(y, 2),
        C = i(454),
        b = i(5674),
        k = i(57285);
      let j = () => {
        let [e, t] = (0, y.useState)(!1),
          i = (0, y.useMemo)(
            () =>
              (0, k.Z)(
                () => {
                  t(window.innerWidth < 1024);
                },
                100,
                { trailing: !1 },
              ),
            [t],
          );
        return (
          (0, y.useEffect)(
            () => (
              window.addEventListener("resize", i),
              i(),
              () => {
                window.removeEventListener("resize", i);
              }
            ),
            [i],
          ),
          e && !1
        );
      };
      var N = i(29913),
        S = i.n(N),
        P = i(65244),
        T = i(2814),
        E = i(71747),
        A = i(15527),
        w = i(14581),
        M = i(13410),
        R = {
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
          9605: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          4990: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          4161: (e, t, i) => {
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
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = i(810),
              n = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              l =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                r = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                o.call(t, a) && !s.hasOwnProperty(a) && (r[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === r[a] && (r[a] = t[a]);
              return {
                $$typeof: n,
                type: e,
                key: c,
                ref: d,
                props: r,
                _owner: l.current,
              };
            }
            (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          1845: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let i = (e) => `https://${e.replace(/^(https*:\/\/)/, "")}`;
            t.createAvatarUrl = (e, t, a) => {
              let n;
              return (
                (n = "orig" === t ? "orig" : a ? `m${t}x${t}` : `${t}x${t}`),
                i(e.replace("%%", n))
              );
            };
          },
          9665: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, i) {
                let a = i ?? e.currentTarget,
                  n = document.createElement("span"),
                  r = Math.max(a.clientWidth, a.clientHeight),
                  o = r / 2,
                  l = a.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(l.width / 2)
                      : e.clientX - l.left,
                  c =
                    0 === e.clientY
                      ? Math.round(l.height / 2)
                      : e.clientY - l.top;
                (n.style.width = `${r}px`),
                  (n.style.height = `${r}px`),
                  (n.style.left = 0 === e.clientX ? "0px" : `${s - o}px`),
                  (n.style.top = `${c - o}px`),
                  n.classList.add(t);
                let d = a.getElementsByClassName(t)[0];
                d && d.remove(), a.insertBefore(n, a.firstChild);
              });
          },
          1317: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var a = i(9665);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return a.createRipple;
              },
            });
            var n = i(1845);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return n.createAvatarUrl;
              },
            });
          },
          9606: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Navigation = void 0);
            let n = i(9541),
              r = i(5881),
              o = i(3871),
              l = a(i(9605));
            t.Navigation = function ({
              className: e,
              children: t,
              collapsed: i = !1,
              direction: a = "vertical",
              ...s
            }) {
              return (0, n.jsx)(o.NavigationProvider, {
                collapsed: i,
                direction: a,
                children: (0, n.jsx)("nav", {
                  className: (0, r.clsx)(
                    l.default.root,
                    l.default[`root_direction_${a}`],
                    { [l.default.root_collapsed]: i },
                    e,
                  ),
                  "aria-label": s["aria-label"],
                  ...s,
                  children: t,
                }),
              });
            };
          },
          3871: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationProvider = t.NavigationContext = void 0);
            let a = i(9541),
              n = i(810);
            (t.NavigationContext = (0, n.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = ({
                collapsed: e,
                direction: i,
                children: r,
              }) => {
                let o = (0, n.useMemo)(
                  () => ({ collapsed: e, direction: i }),
                  [e, i],
                );
                return (0, a.jsx)(t.NavigationContext.Provider, {
                  value: o,
                  children: r,
                });
              });
          },
          9477: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationGroup = void 0);
            let n = i(9541),
              r = i(810),
              o = i(5881),
              l = i(3871),
              s = a(i(4990));
            t.NavigationGroup = function ({ className: e, children: t, ...i }) {
              let a = (0, r.createRef)(),
                { direction: c } = (0, r.useContext)(l.NavigationContext);
              return (0, n.jsx)("ol", {
                ref: a,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default[`root_direction_${c}`],
                  e,
                ),
                ...i,
                children: t,
              });
            };
          },
          4306: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationItem = t.NavigationItemComponent = void 0);
            let n = i(9541),
              r = i(810),
              o = i(5881),
              l = i(3871),
              s = i(1317),
              c = a(i(4161));
            function d({
              className: e = "",
              forwardRef: t,
              children: i,
              selected: a = !1,
              shownAnimation: d,
              withRipple: u = !1,
              variant: _ = "default",
              ...m
            }) {
              let { collapsed: p, direction: v } = (0, r.useContext)(
                  l.NavigationContext,
                ),
                h = (0, r.useCallback)(
                  (e) => {
                    u && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [u],
                ),
                [x, f] = r.Children.toArray(i.props.children),
                y = (0, r.useMemo)(
                  () =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: c.default.iconContainer,
                          children: x,
                        }),
                        (0, n.jsx)("div", {
                          className: (0, o.clsx)(
                            c.default.textContainer,
                            c.default[`textContainer_direction_${v}`],
                            { [c.default.textContainer_selected]: a },
                          ),
                          children: f,
                        }),
                      ],
                    }),
                  [x, v, a, f],
                ),
                g = (0, r.cloneElement)(i, {
                  className: (0, o.clsx)(
                    c.default.item,
                    c.default[`item_direction_${v}`],
                    {
                      [c.default.item_selected]: a,
                      [c.default[`item_collapsed_${v}`]]: p,
                    },
                    i.props.className,
                  ),
                  children: y,
                });
              return (0, n.jsx)("li", {
                ref: t,
                className: (0, o.clsx)(
                  c.default.root,
                  c.default[`root_direction_${v}`],
                  c.default[`root_variant_${_}`],
                  {
                    [c.default.root_animate]: d,
                    [c.default.root_collapsed]: p,
                  },
                  e,
                ),
                "aria-current": !!a && "page",
                onClick: h,
                ...m,
                children: g,
              });
            }
            (t.NavigationItemComponent = d),
              (t.NavigationItem = (0, r.forwardRef)((e, t) =>
                (0, n.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = g;
          },
        },
        B = {};
      function L(e) {
        var t = B[e];
        if (void 0 !== t) return t.exports;
        var i = (B[e] = { exports: {} });
        return R[e].call(i.exports, i, i.exports, L), i.exports;
      }
      (L.d = (e, t) => {
        for (var i in t)
          L.o(t, i) &&
            !L.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (L.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (L.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var I = {};
      Object.defineProperty(I, "X$", { value: !0 }),
        (I.Dx = I.KB = I.W_ = void 0),
        (a = L(9606)),
        Object.defineProperty(I, "W_", {
          enumerable: !0,
          get: function () {
            return a.Navigation;
          },
        }),
        (n = L(9477)),
        Object.defineProperty(I, "KB", {
          enumerable: !0,
          get: function () {
            return n.NavigationGroup;
          },
        }),
        (r = L(4306)),
        Object.defineProperty(I, "Dx", {
          enumerable: !0,
          get: function () {
            return r.NavigationItem;
          },
        });
      var O = I.W_,
        z = I.KB,
        V = I.Dx;
      I.X$;
      var D = i(78354),
        F = i(1918),
        U = i(69559),
        W = i(39479),
        G = i(44285),
        H = i(6955),
        Z = i(34603),
        Q = i(45656),
        q = i(96437),
        J = i(96169);
      let Y = {
        FLIP: { fallbackAxisSideDirection: "start", padding: 20 },
        SHIFT: { padding: 20 },
        OFFSET: 20,
      };
      var K = i(96213),
        X = i(53724),
        $ = i.n(X);
      let ee = (e) => {
          let { children: t, entityUrl: i, ariaLabel: a } = e;
          return i
            ? (0, h.jsx)(G.rU, {
                href: i,
                "aria-label": a,
                className: $().link,
                children: t,
              })
            : t;
        },
        et = (e) => {
          let {
              className: t,
              cover: i,
              title: a,
              subtitle: n,
              contextMenu: r,
              isCollapsed: o,
              withCollapseAnimation: l,
              entityUrl: s,
              onDoubleClick: c,
              forwardRef: d,
              ariaLabel: u,
            } = e,
            _ = (0, y.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == c || c()
                  : e.target instanceof HTMLElement &&
                    "IMG" !== e.target.tagName &&
                    (0, K.m)(e, $().ripple);
              },
              [c],
            );
          return (0, h.jsxs)(G.Md, {
            ref: d,
            onClick: _,
            className: (0, x.W)($().root, { [$().root_withoutLink]: !s }, t),
            role: "listitem",
            children: [
              (0, h.jsxs)(ee, {
                entityUrl: s,
                ariaLabel: u,
                children: [
                  (0, h.jsx)("div", { className: $().cover, children: i }),
                  (0, h.jsx)("div", {
                    className: $().meta,
                    children: (0, h.jsxs)("div", {
                      className: (0, x.W)($().info, {
                        [$().info_collapsed]: o,
                        [$().info_animated]: l,
                      }),
                      children: [
                        (0, h.jsx)(F.Caption, {
                          "aria-hidden": !0,
                          className: $().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: a,
                        }),
                        (0, h.jsx)(F.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: n,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, h.jsx)("div", {
                className: (0, x.W)($().contextMenu, {
                  [$().contextMenu_hidden]: o,
                }),
                children: r,
              }),
            ],
          });
        },
        ei = (0, y.forwardRef)((e, t) =>
          (0, h.jsx)(et, { forwardRef: t, ...e }),
        ),
        ea = (0, y.createContext)(null);
      var en = i(93088),
        er = i.n(en),
        eo = i(52317);
      let el = (e) => {
          let { onPinClick: t, isPinned: i } = e,
            { isCollapsed: a } = (0, y.useContext)(ea) || {},
            { formatMessage: n } = (0, P.Z)(),
            [r, o] = (0, y.useState)(!1),
            l = (0, y.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, b.ZP)(r),
            (0, h.jsx)(eo.v2, {
              reference: (0, h.jsx)(A.z, {
                className: (0, x.W)(er().contextMenu, {
                  [er().contextMenu_visible]: r,
                }),
                onClick: l,
                withRipple: !1,
                variant: "text",
                "aria-label": n({ id: "interface-actions.context-menu" }),
                icon: (0, h.jsx)(w.J, { size: "xxs", variant: "more" }),
                tabIndex: a ? -1 : 0,
                "aria-hidden": a,
              }),
              offsetOptions: 10,
              open: r,
              returnFocus: !1,
              onOpenChange: o,
              children: (0, h.jsx)(G.Zd, { onClick: t, isPinned: i }),
            })
          );
        },
        es = (e) => {
          var t;
          let { className: i, album: a, forwardRef: n } = e,
            { formatMessage: r } = (0, P.Z)(),
            { isCollapsed: o, withCollapseAnimation: l } =
              null !== (t = (0, y.useContext)(ea)) && void 0 !== t ? t : {},
            s = (0, J.BV)(a),
            c = (0, y.useMemo)(
              () =>
                (0, h.jsx)(q.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, h.jsxs)(D.u, {
                    flipOptions: Y.FLIP,
                    shiftOptions: Y.SHIFT,
                    offsetOptions: Y.OFFSET,
                    placement: "right",
                    enabled: o,
                    children: [
                      (0, h.jsx)(Q.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(D._v, {
                        className: er().tooltip,
                        children: (0, h.jsx)(F.Caption, {
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
              [a.coverUri, a.title, o],
            );
          return (0, h.jsx)(ei, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.album-name" },
              { albumName: a.title },
            ),
            className: (0, x.W)(er().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: (0, h.jsx)(T.Z, { id: "entity-names.album" }),
            cover: c,
            isCollapsed: !!o,
            withCollapseAnimation: !!l,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: s,
              isPinned: a.isPinned,
            }),
          });
        },
        ec = (0, y.forwardRef)((e, t) =>
          (0, h.jsx)(es, { forwardRef: t, ...e }),
        );
      var ed = i(81446);
      let eu = (e) => {
          var t;
          let { className: i, artist: a, forwardRef: n } = e,
            { formatMessage: r } = (0, P.Z)(),
            { isCollapsed: o, withCollapseAnimation: l } =
              null !== (t = (0, y.useContext)(ea)) && void 0 !== t ? t : {},
            s = (0, ed.BV)(a),
            c = (0, y.useMemo)(
              () =>
                (0, h.jsx)(q.Paper, {
                  className: er().cover,
                  radius: "round",
                  children: (0, h.jsxs)(D.u, {
                    flipOptions: Y.FLIP,
                    shiftOptions: Y.SHIFT,
                    offsetOptions: Y.OFFSET,
                    placement: "right",
                    enabled: o,
                    children: [
                      (0, h.jsx)(Q.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(D._v, {
                        className: er().tooltip,
                        children: (0, h.jsx)(F.Caption, {
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
              [a.coverUri, a.name, o],
            );
          return (0, h.jsx)(ei, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.artist-name" },
              { artistName: a.name },
            ),
            className: (0, x.W)(er().root, i),
            title: a.name,
            entityUrl: a.url,
            subtitle: (0, h.jsx)(T.Z, { id: "entity-names.artist" }),
            cover: c,
            isCollapsed: !!o,
            withCollapseAnimation: !!l,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: s,
              isPinned: a.isPinned,
            }),
          });
        },
        e_ = (0, y.forwardRef)((e, t) =>
          (0, h.jsx)(eu, { forwardRef: t, ...e }),
        );
      var em = i(3515);
      let ep = (e) => {
          var t;
          let { className: i, playlist: a, forwardRef: n } = e,
            { formatMessage: r } = (0, P.Z)(),
            { isCollapsed: o, withCollapseAnimation: l } =
              null !== (t = (0, y.useContext)(ea)) && void 0 !== t ? t : {},
            s = (0, em.BV)(a),
            c = (0, y.useMemo)(
              () =>
                (0, h.jsx)(q.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, h.jsxs)(D.u, {
                    flipOptions: Y.FLIP,
                    shiftOptions: Y.SHIFT,
                    offsetOptions: Y.OFFSET,
                    placement: "right",
                    enabled: o,
                    children: [
                      (0, h.jsx)(Q.Image, {
                        "aria-hidden": !0,
                        className: er().image,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(D._v, {
                        className: er().tooltip,
                        children: (0, h.jsx)(F.Caption, {
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
              [o, a.coverUri, a.title],
            );
          return (0, h.jsx)(ei, {
            ref: n,
            ariaLabel: r(
              { id: "entity-names.playlist-name" },
              { playlistName: a.title },
            ),
            className: (0, x.W)(er().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: (0, h.jsx)(T.Z, { id: "entity-names.playlist" }),
            cover: c,
            isCollapsed: !!o,
            withCollapseAnimation: !!l,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: s,
              isPinned: a.isPinned,
            }),
          });
        },
        ev = (0, y.forwardRef)((e, t) =>
          (0, h.jsx)(ep, { forwardRef: t, ...e }),
        );
      var eh = i(84290);
      let ex = (0, f.Pi)((e) => {
          var t, i;
          let { className: a, vibe: n, forwardRef: r } = e,
            o = (0, y.useId)(),
            { formatMessage: l } = (0, P.Z)(),
            { isCollapsed: s, withCollapseAnimation: c } =
              null !== (i = (0, y.useContext)(ea)) && void 0 !== i ? i : {},
            [d, u] = (0, y.useState)(!1),
            _ = (0, eh.BV)(n),
            {
              isPlaying: m,
              togglePlay: p,
              isCurrent: v,
            } = (0, b.Qh)({
              seeds: n.seeds,
              pageIdForFrom: b.Rh.SIDEBAR,
              blockIdForFrom: b.aU.RADIO,
            }),
            f = (0, y.useCallback)(() => {
              u(!0),
                p().finally(() => {
                  u(!1);
                });
            }, [p]),
            g = (0, y.useMemo)(
              () =>
                (0, h.jsx)(F.Caption, {
                  id: o,
                  variant: "span",
                  "aria-label": l(
                    { id: "entity-names.vibe-name" },
                    { vibeName: n.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: n.title,
                }),
              [l, o, n.title],
            ),
            C = (0, y.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = n.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, h.jsxs)(D.u, {
                flipOptions: Y.FLIP,
                shiftOptions: Y.SHIFT,
                offsetOptions: Y.OFFSET,
                placement: "right",
                enabled: s,
                children: [
                  (0, h.jsx)("div", {
                    style: t,
                    className: er().animation,
                    children: (0, h.jsx)(G.Df, {
                      isCurrent: v,
                      isPlaying: m,
                      isAvailable: !0,
                      isPlayButtonLoading: d,
                      onPlayButtonClick: f,
                      title: n.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: o,
                    }),
                  }),
                  (0, h.jsx)(D._v, {
                    className: er().tooltip,
                    children: (0, h.jsx)(F.Caption, {
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
              f,
              s,
              v,
              d,
              m,
              o,
              null === (t = n.colors) || void 0 === t ? void 0 : t.average,
              n.title,
            ]);
          return (0, h.jsx)(ei, {
            ref: r,
            onDoubleClick: p,
            className: (0, x.W)(er().root, a),
            isCollapsed: !!s,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: _,
              isPinned: n.isPinned,
            }),
            withCollapseAnimation: !!c,
            title: g,
            subtitle: (0, h.jsx)(T.Z, { id: "entity-names.my-vibe" }),
            cover: C,
          });
        }),
        ef = (0, y.forwardRef)((e, t) =>
          (0, h.jsx)(ex, { forwardRef: t, ...e }),
        );
      var ey = i(13774),
        eg = i.n(ey);
      let eC = (0, f.Pi)((e) => {
        var t, i;
        let { className: a, withCollapseAnimation: n, isCollapsed: r } = e,
          { formatMessage: o } = (0, P.Z)(),
          { pinsCollection: l } = (0, b.oR)(),
          s =
            null === (t = l.items) || void 0 === t
              ? void 0
              : t.map(() => (0, y.createRef)()),
          c = (0, y.useMemo)(
            () => ({
              enter: eg().pin_enter,
              enterActive: eg().pin_enter_active,
              exit: eg().pin_exit,
              exitActive: eg().pin_exit_active,
            }),
            [],
          ),
          d = (0, y.useMemo)(
            () => ({ withCollapseAnimation: n, isCollapsed: r }),
            [r, n],
          );
        return (0, h.jsx)(ea.Provider, {
          value: d,
          children: (0, h.jsx)("div", {
            className: (0, x.W)(eg().root, a),
            children: (0, h.jsx)("div", {
              role: "list",
              "aria-label": o({ id: "navigation.pins-list" }),
              className: eg().content,
              children: (0, h.jsx)(H.Z, {
                component: null,
                children:
                  null === (i = l.items) || void 0 === i
                    ? void 0
                    : i.map((e, t) => {
                        switch (e.type) {
                          case Z.Qm.ALBUM:
                            return (0, h.jsx)(
                              E.Z,
                              {
                                classNames: c,
                                nodeRef: null == s ? void 0 : s[t],
                                timeout: 270,
                                children: (0, h.jsx)(ec, {
                                  ref: null == s ? void 0 : s[t],
                                  album: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case Z.Qm.ARTIST:
                            return (0, h.jsx)(
                              E.Z,
                              {
                                classNames: c,
                                nodeRef: null == s ? void 0 : s[t],
                                timeout: 270,
                                children: (0, h.jsx)(e_, {
                                  ref: null == s ? void 0 : s[t],
                                  artist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case Z.Qm.PLAYLIST:
                            return (0, h.jsx)(
                              E.Z,
                              {
                                classNames: c,
                                nodeRef: null == s ? void 0 : s[t],
                                timeout: 270,
                                children: (0, h.jsx)(ev, {
                                  ref: null == s ? void 0 : s[t],
                                  playlist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case Z.Qm.WAVE:
                            return (0, h.jsx)(
                              E.Z,
                              {
                                classNames: c,
                                nodeRef: null == s ? void 0 : s[t],
                                timeout: 270,
                                children: (0, h.jsx)(ef, {
                                  ref: null == s ? void 0 : s[t],
                                  vibe: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                        }
                      }),
              }),
            }),
          }),
        });
      });
      function eb() {
        return (eb = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ek = function (e) {
          return y.createElement(
            "svg",
            eb(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            y.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              y.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                o ||
                  (o = y.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                l ||
                  (l = y.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                s ||
                  (s = y.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                y.createElement(
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
                  c ||
                    (c = y.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                d ||
                  (d = y.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                u ||
                  (u = y.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    y.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    y.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            _ ||
              (_ = y.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                y.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                y.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            m ||
              (m = y.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            p ||
              (p = y.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            v ||
              (v = y.createElement(
                "defs",
                null,
                y.createElement(
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
                  y.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  y.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                y.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  y.createElement("stop", { stopColor: "#FF5C4D" }),
                  y.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  y.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                y.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  y.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                y.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  y.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                y.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  y.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                y.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  y.createElement("rect", {
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
        ej = i(36509),
        eN = i.n(ej);
      let eS = (e) => {
          let { className: t, forwardRef: i } = e,
            { formatMessage: a } = (0, P.Z)();
          return (0, h.jsxs)("section", {
            className: (0, x.W)(eN().root, t),
            ref: i,
            "aria-label": a({ id: "plusbar.subscription-activation" }),
            children: [
              (0, h.jsx)(ek, { className: eN().logos, "aria-hidden": "true" }),
              (0, h.jsx)(F.Caption, {
                className: eN().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, h.jsx)(T.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, h.jsx)(F.Caption, {
                className: eN().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, h.jsx)(T.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, h.jsxs)("div", {
                className: eN().buttons,
                children: [
                  (0, h.jsx)(A.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    color: "plus",
                    children: "30 дней бесплатно",
                  }),
                  (0, h.jsx)(A.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    children: (0, h.jsx)(T.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        eP = (0, y.forwardRef)((e, t) =>
          (0, h.jsx)(eS, { forwardRef: t, ...e }),
        );
      var eT = i(27206),
        eE = i.n(eT);
      let eA = { fallbackAxisSideDirection: "start", padding: 8 },
        ew = { padding: 8 },
        eM = {
          exit: eE().plusButtonContainer_exit,
          exitActive: eE().plusButtonContainer_exit_active,
          enter: eE().plusButtonContainer_enter,
          enterActive: eE().plusButtonContainer_enter_active,
        },
        eR = {
          exit: eE().plusBar_exit,
          exitActive: eE().plusBar_exit_active,
          enter: eE().plusBar_enter,
          enterActive: eE().plusBar_enter_active,
        },
        eB = (0, f.Pi)((e) => {
          let {
              className: t,
              collapsed: i,
              shownAnimation: a,
              handleClick: n,
            } = e,
            r = j(),
            o = (0, b.hJ)(),
            { formatMessage: l } = (0, P.Z)(),
            { user: s, experiments: c } = (0, b.oR)(),
            d = (0, y.useMemo)(
              () =>
                s.collectionHue
                  ? { "--logo-color": (0, U.Cx)(s.collectionHue) }
                  : null,
              [s.collectionHue],
            ),
            u = (0, y.useMemo)(
              () =>
                i
                  ? l({ id: "sidebar.uncollapse" })
                  : l({ id: "sidebar.collapse" }),
              [i, l],
            ),
            _ = (0, y.useMemo)(
              () => ({
                search: l({ id: "navigation.search" }),
                main: l({ id: "navigation.page-main" }),
                collection: l({ id: "navigation.page-collection" }),
                kinopoisk: l({ id: "navigation.page-kinopoisk" }),
                non_music: l({ id: "entity-names.podcasts" }),
              }),
              [l],
            ),
            m = (0, y.useMemo)(
              () =>
                (0, h.jsx)(
                  z,
                  {
                    children: (0, b.sQ)(c).map((e) =>
                      (0, h.jsx)(
                        V,
                        {
                          selected: o(e.path),
                          shownAnimation: a,
                          variant: "main",
                          children: (0, h.jsxs)(G.rU, {
                            href: e.path,
                            children: [
                              (0, h.jsxs)(D.u, {
                                flipOptions: eA,
                                shiftOptions: ew,
                                offsetOptions: 8,
                                placement: "right",
                                enabled: i,
                                children: [
                                  (0, h.jsx)(w.J, {
                                    variant: o(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, h.jsx)(D._v, {
                                    children: (0, h.jsx)(F.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: _[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, h.jsx)(F.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, x.W)({
                                  [eE().title_animate]: a,
                                  [eE().title_collapsed]: i,
                                }),
                                children: _[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  },
                  "main",
                ),
              [o, i, c, c.loadingState, a, _],
            ),
            p = (0, y.useMemo)(
              () =>
                r
                  ? null
                  : (0, h.jsxs)(
                      D.u,
                      {
                        flipOptions: eA,
                        shiftOptions: ew,
                        offsetOptions: 8,
                        placement: "right",
                        children: [
                          (0, h.jsx)(A.z, {
                            className: (0, x.W)(
                              eE().collapseButton,
                              eE().important,
                            ),
                            "aria-label": u,
                            radius: "round",
                            color: "secondary",
                            size: "s",
                            icon: (0, h.jsx)(w.J, {
                              variant: i ? "uncollapse" : "collapse",
                              size: "xs",
                            }),
                            onClick: n,
                          }),
                          (0, h.jsx)(D._v, {
                            className: (0, x.W)({
                              [eE().collapseButtonTooltip_hidden]: !i,
                            }),
                            children: u,
                          }),
                        ],
                      },
                      "collapseTooltip",
                    ),
              [r, u, i, n],
            ),
            v = (0, y.useRef)(null),
            f = (0, y.useMemo)(
              () =>
                (0, h.jsx)(E.Z, {
                  nodeRef: v,
                  in: i,
                  timeout: 150,
                  classNames: eM,
                  unmountOnExit: !0,
                  children: (0, h.jsx)("div", {
                    className: eE().plusButtonContainer,
                    ref: v,
                    children: (0, h.jsxs)(D.u, {
                      flipOptions: eA,
                      shiftOptions: ew,
                      offsetOptions: 8,
                      placement: "right",
                      enabled: i,
                      children: [
                        (0, h.jsx)(A.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, h.jsx)(w.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, x.W)(eE().button, eE().important),
                          "aria-label": l({
                            id: "plusbar.subscription-activation",
                          }),
                        }),
                        (0, h.jsx)(D._v, {
                          children: (0, h.jsx)(F.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, h.jsx)(T.Z, {
                              id: "plusbar.subscription-activation",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              [v, i, l],
            ),
            g = (0, y.useRef)(null),
            C = (0, y.useMemo)(
              () =>
                (0, h.jsx)(E.Z, {
                  nodeRef: g,
                  in: !i,
                  timeout: 150,
                  classNames: eR,
                  unmountOnExit: !0,
                  children: (0, h.jsx)(eP, {
                    className: eE().plusBar,
                    forwardRef: g,
                  }),
                }),
              [i],
            );
          return (0, h.jsxs)("div", {
            className: (0, x.W)(eE().root, t),
            children: [
              (0, h.jsx)(G.rU, {
                href: "/",
                className: eE().logoLink,
                children: (0, h.jsx)(M.T, {
                  style: d,
                  className: (0, x.W)(eE().logo),
                  collapsed: i,
                  shownAnimation: a,
                  collapsedButton: p,
                }),
              }),
              (0, h.jsx)(O, {
                className: (0, x.W)(eE().navigation, {
                  [eE().navigation_withoutPins]: !c.checkExperiment(
                    b.pe.WebPins,
                    "on",
                  ),
                }),
                collapsed: i,
                "aria-label": l({ id: "navigation.main-menu" }),
                children: m,
              }),
              c.checkExperiment(b.pe.WebPins, "on") &&
                (0, h.jsx)(eC, {
                  isCollapsed: i,
                  withCollapseAnimation: !!a,
                  className: eE().pinsList,
                }),
              !s.hasPlus &&
                (0, h.jsxs)("div", { className: eE().plus, children: [C, f] }),
              (0, h.jsx)(y.Suspense, {
                children: (0, h.jsx)("div", {
                  className: eE().user,
                  children: (0, h.jsx)(W.Iw, {
                    metaClassName: (0, x.W)(eE().userMeta, {
                      [eE().userMeta_animate]: a,
                      [eE().userMeta_collapsed]: i,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var eL = i(12484),
        eI = i.n(eL);
      let eO = (0, f.Pi)((e) => {
          let { className: t } = e,
            i = (0, b.hJ)(),
            { experiments: a } = (0, b.oR)(),
            { formatMessage: n } = (0, P.Z)(),
            r = n({ id: "navigation.main-menu" }),
            o = (0, y.useMemo)(
              () => ({
                search: n({ id: "navigation.search" }),
                main: n({ id: "navigation.page-main" }),
                collection: n({ id: "navigation.page-collection" }),
              }),
              [n],
            );
          return (0, h.jsx)("div", {
            className: (0, x.W)(eI().root, t),
            children: (0, h.jsx)(O, {
              collapsed: !0,
              direction: "horizontal",
              "aria-label": r,
              children: (0, h.jsx)(z, {
                children: (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, b.sQ)(a).map((e) =>
                      (0, h.jsx)(
                        V,
                        {
                          selected: i(e.path),
                          children: (0, h.jsxs)(G.rU, {
                            href: e.path,
                            children: [
                              (0, h.jsx)(w.J, {
                                variant: i(e.path) ? e.iconSelected : e.icon,
                                size: "m",
                              }),
                              (0, h.jsx)(F.Caption, {
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
                      ),
                    ),
                    (0, h.jsx)(V, {
                      children: (0, h.jsx)(W.Iw, {
                        className: eI().user,
                        variant: "mobile",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        ez = (0, f.Pi)((e) => {
          let { className: t } = e,
            i = (0, b.uK)(),
            a = i.get(b.V0),
            n = j(),
            { settings: r } = (0, b.oR)(),
            [o, l] = (0, y.useState)(a.get(b.BU.NavbarCollapsed) || !1),
            [s, c] = (0, y.useState)(!1),
            d = (0, y.useMemo)(
              () => (r.layout === b.t8.Mobile ? eO : eB),
              [r.layout],
            ),
            u = (0, y.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  a.set(b.BU.NavbarCollapsed, !o, { expires: 180 }),
                  l(!o),
                  c(!0);
              },
              [o, a],
            );
          return (0, h.jsx)("aside", {
            className: (0, x.W)(S().root, { [S().root_collapsed]: o || n }, t),
            ...(0, C.BA)(C.QM.navbar.NAVBAR),
            children: (0, h.jsx)(d, {
              handleClick: u,
              collapsed: o || n,
              shownAnimation: s,
            }),
          });
        });
      var eV = i(96555);
      let eD = eV.V5.model("PinAlbumItemModel", {
          type: eV.V5.literal(Z.Qm.ALBUM),
          data: J.KX,
        }),
        eF = eV.V5.model("PinArtistItemModel", {
          type: eV.V5.literal(Z.Qm.ARTIST),
          data: ed.Go,
        }),
        eU = eV.V5.model("PinPlaylistItemModel", {
          type: eV.V5.literal(Z.Qm.PLAYLIST),
          data: em.Cd,
        }),
        eW = eV.V5.model("PinVibeItemModel", {
          type: eV.V5.literal(Z.Qm.WAVE),
          data: eh.KW,
        }),
        eG = eV.V5.union(eD, eF, eU, eW),
        eH = (e) => "object" == typeof e && e && "type" in e;
      var eZ = i(96911),
        eQ = i(20210);
      let eq = (e) => {
          switch (e.type) {
            case Z.Qm.WAVE:
              return (0, eV.pj)({ type: Z.Qm.WAVE, data: (0, eh.FF)(e.data) });
            case Z.Qm.PLAYLIST:
              return (0, eV.pj)({
                type: Z.Qm.PLAYLIST,
                data: (0, eQ.RE)({ playlist: e.data }),
              });
            case Z.Qm.ARTIST:
              return (0, eV.pj)({
                type: Z.Qm.ARTIST,
                data: (0, ed.tR)(e.data),
              });
            case Z.Qm.ALBUM:
              return (0, eV.pj)({
                type: Z.Qm.ALBUM,
                data: (0, eZ.cO)({ album: e.data }),
              });
          }
        },
        eJ = eV.V5.model("Pins", {
          loadingState: eV.V5.enumeration(Object.values(b.Gu)),
          items: eV.V5.maybeNull(eV.V5.array(eG)),
          index: eV.V5.map(eV.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var i;
                (e.items = (0, eV.pj)(
                  null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var i, a, n, r;
                if (
                  (null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.length) === 30
                ) {
                  let t =
                    null === (r = e.items) || void 0 === r ? void 0 : r.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (a = e.items) || void 0 === a || a.unshift(eq(t));
                let o =
                  null === (n = e.items) || void 0 === n ? void 0 : n.at(0);
                o && e.index.set(o.data.pinId, !0);
              },
              getData: (0, eV.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: i } = (0, eV.dU)(e);
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    var a;
                    e.loadingState = b.Gu.PENDING;
                    let i = yield t.getPins();
                    (e.items = (0, eV.pj)(i.pins.map(eq))),
                      null === (a = e.items) ||
                        void 0 === a ||
                        a.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = b.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = b.Gu.REJECT), i.error(t);
                  }
              }),
              toggleAlbumPin: (0, eV.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eV.dU)(e);
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinAlbum(i)), t.deletePin(a), r;
                    return (r = yield n.pinAlbum(i)), eH(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eV.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eV.dU)(e);
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinArtist(i)), t.deletePin(a), r;
                    return (r = yield n.pinArtist(i)), eH(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eV.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eV.dU)(e);
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinPlaylist(i)), t.deletePin(a), r;
                    return (
                      (r = yield n.pinPlaylist(i)), eH(r) && t.addPin(r), r
                    );
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eV.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eV.dU)(e);
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinWave(i)), t.deletePin(a), r;
                    return (r = yield n.pinWave(i)), eH(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    70579: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return a.SomethingWentWrong;
        },
      });
      var a = i(48471);
    },
    48471: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          SomethingWentWrong: function () {
            return v;
          },
        });
      var a = i(8759),
        n = i(35338),
        r = i(33423),
        o = i(99616),
        l = i(2814),
        s = i(15527),
        c = i(14581),
        d = i(1918),
        u = i(42769),
        _ = i(5674),
        m = i(29847),
        p = i.n(m);
      let v = (0, r.Pi)((e) => {
        let { className: t, withBackwardControl: i = !0 } = e,
          r = (0, o.useCallback)(() => {
            window.location.reload();
          }, []),
          { contentRef: m } = (0, _.$Y)();
        return (0, a.jsxs)("div", {
          className: (0, n.W)(p().root, t),
          children: [
            i &&
              (0, a.jsx)(u.n, {
                withBackwardFallback: "/",
                className: (0, n.W)(p().navigation, {
                  [p().navigation_desktop]: !m,
                }),
                withForwardControl: !1,
              }),
            (0, a.jsxs)("div", {
              className: (0, n.W)(p().content, { [p().content_shrink]: !i }),
              children: [
                (0, a.jsx)(c.J, {
                  className: p().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, a.jsx)(d.Heading, {
                  className: (0, n.W)(p().title, p().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, a.jsx)(l.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, a.jsxs)(d.Caption, {
                  className: (0, n.W)(p().text, p().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, a.jsx)(l.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, a.jsx)(s.z, {
                  onClick: r,
                  className: p().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, a.jsxs)(d.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, a.jsx)(l.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    45635: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return Y;
        },
        L: function () {
          return h;
        },
      });
      var a,
        n,
        r = i(96555),
        o = i(96431),
        l = i(95539),
        s = i(5674),
        c = i(65704),
        d = i(81446);
      let u = (e, t) => {
          var i, a;
          let n = null == t ? void 0 : t.map(d.tR);
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
            albumArtists: n,
          });
        },
        _ = (e) => {
          var t, i;
          return (0, r.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        m = (e) => {
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
        p = (e) => {
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
      ((a = n || (n = {})).ALBUM = "album"),
        (a.ARTIST = "artist"),
        (a.PLAYLIST = "playlist"),
        (a.TRACK = "track");
      let v = r.V5.model("TrailerMeta", {
          id: r.V5.string,
          title: r.V5.maybe(r.V5.string),
          uuid: r.V5.maybe(r.V5.string),
          coverUri: r.V5.maybe(r.V5.string),
          averageColor: r.V5.maybe(r.V5.string),
          albumArtists: r.V5.maybe(r.V5.array(d.Go)),
        }).views((e) => ({
          getUrl(t) {
            switch (t) {
              case n.ALBUM:
                return "/album/".concat(e.id);
              case n.ARTIST:
                return "/artist/".concat(e.id);
              case n.PLAYLIST:
                return "/playlist/".concat(e.uuid);
              case n.TRACK:
                return;
            }
          },
        })),
        h = r.V5.model("Trailer", {
          loadingState: r.V5.enumeration(Object.values(s.Gu)),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          modal: c.KL,
          variant: r.V5.maybeNull(r.V5.enumeration(Object.values(n))),
          tracks: r.V5.maybeNull(r.V5.array(l.le)),
          meta: r.V5.maybeNull(v),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === s.Gu.IDLE || e.loadingState === s.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === s.Gu.REJECT;
            },
            get isNotFound() {
              var t;
              let i =
                  e.loadingState === s.Gu.RESOLVE &&
                  (null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                a = e.errorStatusCode === o.CN.NOT_FOUND;
              return i || a;
            },
          }))
          .actions((e) => {
            let t = {
              openArtistTrailer(i) {
                t.reset(),
                  (e.variant = n.ARTIST),
                  e.modal.open(),
                  t.getArtistTrailer({ artistId: i });
              },
              openAlbumTrailer(i) {
                t.reset(),
                  (e.variant = n.ALBUM),
                  e.modal.open(),
                  t.getAlbumTrailer({ albumId: i });
              },
              openPlaylistTrailer(i, a) {
                t.reset(),
                  (e.variant = n.PLAYLIST),
                  e.modal.open(),
                  t.getPlaylistTrailer({ userId: i, playlistKind: a });
              },
              openTrackTrailer(i) {
                t.reset(),
                  (e.variant = n.TRACK),
                  e.modal.open(),
                  t.getTrackTrailer({ trackId: i });
              },
              getArtistTrailer: (0, r.ls)(function* (i) {
                let { artistsResource: a } = (0, r.dU)(e);
                if (e.loadingState !== s.Gu.PENDING)
                  try {
                    e.loadingState = s.Gu.PENDING;
                    let { artist: t, trailer: n } = yield a.getTrailer(i);
                    n.tracks &&
                      (e.tracks = (0, r.pj)(
                        n.tracks.map((e) =>
                          (0, l.Vt)(e, { isSmartPreview: !0 }),
                        ),
                      )),
                      t && (e.meta = _(t)),
                      (e.loadingState = s.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, r.ls)(function* (i) {
                let { albumResource: a } = (0, r.dU)(e);
                if (e.loadingState !== s.Gu.PENDING)
                  try {
                    e.loadingState = s.Gu.PENDING;
                    let {
                      album: t,
                      artists: n,
                      trailer: o,
                    } = yield a.getTrailer(i);
                    o.tracks &&
                      (e.tracks = (0, r.pj)(
                        o.tracks.map((e) =>
                          (0, l.Vt)(e, { isSmartPreview: !0 }),
                        ),
                      )),
                      t && (e.meta = u(t, n)),
                      (e.loadingState = s.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, r.ls)(function* (i) {
                let { usersResource: a } = (0, r.dU)(e);
                if (e.loadingState !== s.Gu.PENDING)
                  try {
                    e.loadingState = s.Gu.PENDING;
                    let { playlist: t, trailer: n } =
                      yield a.getPlaylistTrailer(i);
                    n.tracks &&
                      (e.tracks = (0, r.pj)(
                        n.tracks.map((e) =>
                          (0, l.Vt)(e, { isSmartPreview: !0 }),
                        ),
                      )),
                      t && (e.meta = m(t)),
                      (e.loadingState = s.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, r.ls)(function* (i) {
                let { tracksResource: a } = (0, r.dU)(e);
                if (e.loadingState !== s.Gu.PENDING)
                  try {
                    e.loadingState = s.Gu.PENDING;
                    let { track: t } = yield a.getTrailer(i);
                    t &&
                      ((e.tracks = (0, r.pj)([
                        (0, l.Vt)(t, { isSmartPreview: !0 }),
                      ])),
                      (e.meta = p(t))),
                      (e.loadingState = s.Gu.RESOLVE);
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
                  e.loadingState !== s.Gu.IDLE &&
                    (e.loadingState = s.Gu.REJECT);
              },
              reset() {
                (e.loadingState = s.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.variant = null),
                  (e.tracks = null),
                  (e.meta = null);
              },
            };
            return t;
          });
      var x = i(8759),
        f = i(33423),
        y = i(65244),
        g = i(15527),
        C = i(14581),
        b = i(31476),
        k = i(35338),
        j = i(99616),
        N = i(44285),
        S = i(57413);
      let P = (e) => {
          let { variant: t, id: i, from: a, uuid: r } = e;
          switch (t) {
            case n.ALBUM:
              return {
                type: S.Ak.Album,
                trailer: !0,
                meta: { id: i },
                from: a,
              };
            case n.ARTIST:
              return {
                type: S.Ak.Artist,
                trailer: !0,
                meta: { id: i },
                from: a,
              };
            case n.PLAYLIST:
              return {
                type: S.Ak.Playlist,
                trailer: !0,
                meta: { id: String(i), uuid: r },
                from: a,
              };
            case n.TRACK:
              return {
                type: S.Ak.Various,
                trailer: !0,
                meta: { id: i },
                from: a,
              };
          }
        },
        T = (e, t) => {
          let i = e.albums.find((e) => String(e.id) === t);
          if (i) {
            var a, n;
            return {
              trackPosition:
                null === (a = i.trackPosition) || void 0 === a
                  ? void 0
                  : a.index,
              isBest:
                null === (n = i.bestAlbumTracks) || void 0 === n
                  ? void 0
                  : n.includes(Number(e.id)),
            };
          }
          return {};
        };
      var E = i(2814),
        A = i(12670),
        w = i(76560),
        M = i.n(w);
      let R = (e) => {
          let { isActive: t, className: i, withNavigateButton: a } = e;
          return (0, x.jsxs)("div", {
            className: (0, k.W)(M().root, i),
            children: [
              (0, x.jsx)(A.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: M().playButtonShimmer,
              }),
              a &&
                (0, x.jsx)(A.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: M().linkButtonShimmer,
                }),
            ],
          });
        },
        B = (0, f.Pi)((e) => {
          let {
              variant: t,
              withNavigateButton: i,
              isShimmerVisible: a,
              isShimmerActive: n,
              meta: r,
              className: o,
            } = e,
            l = (0, s.s0)(null == r ? void 0 : r.getUrl(t)),
            c = (0, j.useMemo)(
              () =>
                (0, x.jsxs)("div", {
                  className: (0, k.W)(M().root, o),
                  children: [
                    (0, x.jsx)(g.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, x.jsx)(C.J, { variant: "play", size: "xxxs" }),
                      className: M().button,
                      children: (0, x.jsx)(E.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    i &&
                      (0, x.jsx)(g.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: l,
                        className: M().button,
                        children: (0, x.jsx)(E.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [o, l, i],
            );
          return a
            ? R({ isActive: n, withNavigateButton: i, className: o })
            : c;
        });
      var L = i(45656),
        I = i(96437),
        O = i(1918),
        z = i(88929),
        V = i.n(z);
      let D = {
          [n.ALBUM]: (0, x.jsx)(E.Z, { id: "trailer.title-album" }),
          [n.ARTIST]: (0, x.jsx)(E.Z, { id: "trailer.title-artist" }),
          [n.PLAYLIST]: (0, x.jsx)(E.Z, { id: "trailer.title-playlist" }),
          [n.TRACK]: (0, x.jsx)(E.Z, { id: "trailer.title-track" }),
        },
        F = (e, t) =>
          (0, x.jsx)("div", {
            className: V().coverContainer,
            children: (0, x.jsx)(A.Shimmer, {
              isActive: e,
              radius: t,
              className: V().cover,
            }),
          }),
        U = (e) =>
          (0, x.jsxs)("div", {
            className: V().textContainer,
            children: [
              (0, x.jsx)("div", {
                className: V().shimmerContainer,
                children: (0, x.jsx)(A.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: V().titleShimmer,
                }),
              }),
              (0, x.jsx)("div", {
                className: V().shimmerContainer,
                children: (0, x.jsx)(A.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: V().descriptionShimmer,
                }),
              }),
            ],
          }),
        W = (0, f.Pi)((e) => {
          let {
              meta: t,
              variant: i,
              isShimmerVisible: a,
              isShimmerActive: r,
              className: o,
            } = e,
            l = i === n.ARTIST ? "round" : "s",
            s = (0, j.useMemo)(() => {
              let e = {
                "--icon-background-color": null == t ? void 0 : t.averageColor,
              };
              return (0, x.jsxs)("div", {
                className: V().coverContainer,
                children: [
                  (0, x.jsx)(I.Paper, {
                    radius: l,
                    className: V().cover,
                    withShadow: !0,
                    children: (0, x.jsx)(L.Image, {
                      "aria-hidden": !0,
                      src: null == t ? void 0 : t.coverUri,
                      size: 100,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, x.jsx)("div", {
                    className: V().iconContainer,
                    style: e,
                    children: (0, x.jsx)(C.J, {
                      variant: "trailer",
                      size: "xs",
                      className: V().icon,
                    }),
                  }),
                ],
              });
            }, [
              l,
              null == t ? void 0 : t.averageColor,
              null == t ? void 0 : t.coverUri,
            ]),
            c = (0, j.useMemo)(() => {
              let e = null == t ? void 0 : t.getUrl(i);
              return e
                ? (0, x.jsx)(N.rU, {
                    href: e,
                    className: V().link,
                    children: (0, x.jsx)(O.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: V().text,
                      children: null == t ? void 0 : t.title,
                    }),
                  })
                : (0, x.jsx)(O.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: V().text,
                    children: null == t ? void 0 : t.title,
                  });
            }, [t, i]),
            d = (0, j.useMemo)(
              () =>
                (0, x.jsxs)("div", {
                  className: V().textContainer,
                  children: [
                    (0, x.jsx)(O.Caption, {
                      variant: "span",
                      type: "controls",
                      className: (0, k.W)(V().text, V().title),
                      lineClamp: 1,
                      children: D[i],
                    }),
                    c,
                  ],
                }),
              [c, i],
            );
          return (0, x.jsxs)("div", {
            className: (0, k.W)(V().root, o),
            children: [
              a ? F(r, l) : s,
              a ? U(r) : d,
              !a &&
                (0, x.jsx)(N.JM, {
                  className: V().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: !1,
                  iconClassName: V().playButtonIcon,
                }),
            ],
          });
        });
      var G = i(26365),
        H = i.n(G);
      let Z = (e, t) => {
          let i = t === n.ALBUM ? s.Lx.ALBUM : s.Lx.PLAYLIST,
            a = t === n.TRACK ? 1 : 5;
          return Array.from({ length: a }, (t, a) =>
            (0, x.jsx)(
              "div",
              {
                className: H().trackContainer,
                children: (0, x.jsx)(N.DX, {
                  isActive: e,
                  className: (0, k.W)(H().trackShimmer, {
                    [H().albumShimmer]: i === s.Lx.ALBUM,
                  }),
                  variant: i,
                }),
              },
              a,
            ),
          );
        },
        Q = (0, f.Pi)((e) => {
          let { variant: t } = e,
            { trailer: i } = (0, s.oR)(),
            { isLoading: a, isRejected: r, tracks: o, meta: c } = i,
            d = a || r,
            u = t === n.ALBUM ? l.RJ : l.O2,
            _ = (0, j.useCallback)(
              (e) => ({
                contextData: P({
                  variant: t,
                  id: Number(null == c ? void 0 : c.id),
                  from: "test",
                  uuid: null == c ? void 0 : c.uuid,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [null == c ? void 0 : c.id, null == c ? void 0 : c.uuid, t],
            ),
            m = (0, j.useMemo)(() => {
              if (d) return Z(a, t);
              let e = { "--track-progress": "76%" };
              return null == o
                ? void 0
                : o.map((i, a) => {
                    var r, o;
                    let l;
                    return (
                      t === n.ALBUM &&
                        (null == c ? void 0 : c.id) &&
                        (l = T(i, null == c ? void 0 : c.id)),
                      (0, x.jsx)(
                        "div",
                        {
                          className: (0, k.W)(H().trackContainer, {
                            [H().trackContainer_active]: 0 === a,
                          }),
                          style: e,
                          children: (0, x.jsx)(u, {
                            position:
                              null === (r = l) || void 0 === r
                                ? void 0
                                : r.trackPosition,
                            withLightning: !!(null === (o = l) || void 0 === o
                              ? void 0
                              : o.isBest),
                            track: i,
                            playContextParams: _(a),
                            albumArtists: null == c ? void 0 : c.albumArtists,
                          }),
                        },
                        i.id,
                      )
                    );
                  });
            }, [
              u,
              _,
              a,
              d,
              null == c ? void 0 : c.albumArtists,
              null == c ? void 0 : c.id,
              o,
              t,
            ]);
          return (0, x.jsxs)("div", {
            className: H().root,
            children: [
              (0, x.jsx)(W, {
                isShimmerVisible: d,
                isShimmerActive: a,
                variant: t,
                className: H().header,
                meta: c,
              }),
              m,
              (0, x.jsx)(B, {
                isShimmerVisible: d,
                isShimmerActive: a,
                variant: t,
                withNavigateButton: !0,
                className: H().footer,
              }),
            ],
          });
        });
      var q = i(42762),
        J = i.n(q);
      let Y = (0, f.Pi)(() => {
        let { settings: e, trailer: t } = (0, s.oR)(),
          { contentRef: i } = (0, s.$Y)(),
          { formatMessage: a } = (0, y.Z)(),
          n = e.layout === s.t8.Mobile;
        return (0, x.jsxs)(b.u, {
          size: "fitContent",
          placement: n ? "default" : "right",
          open: t.modal.isOpened,
          onOpenChange: t.modal.onOpenChange,
          onClose: t.modal.close,
          className: J().root,
          contentClassName: J().modalContent,
          overlayClassName: J().overlay,
          portalNode: n ? null : i,
          showHeader: !1,
          children: [
            (0, x.jsx)("div", {
              className: J().header,
              children: (0, x.jsx)(g.z, {
                radius: "round",
                color: "secondary",
                size: "xxs",
                icon: (0, x.jsx)(C.J, { variant: "close", size: "xxs" }),
                onClick: t.modal.close,
                "aria-label": a({
                  id: "interface-actions.close-my-vibe-settings",
                }),
              }),
            }),
            t.variant && (0, x.jsx)(Q, { variant: t.variant }),
          ],
        });
      });
    },
    41751: function (e) {
      e.exports = {
        root: "DefaultLayout_root__7J0wo",
        root_applicationPreserveTitleBar:
          "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
        content: "DefaultLayout_content__md70Z",
        content_withPlayerBar: "DefaultLayout_content_withPlayerBar__9uFJT",
        notificationErrorContainer:
          "DefaultLayout_notificationErrorContainer__Qz_mD",
        notificationInfoContainer:
          "DefaultLayout_notificationInfoContainer__tKt7J",
        navbar: "DefaultLayout_navbar__LIQWG",
        navbar_application_macos:
          "DefaultLayout_navbar_application_macos__9dj3u",
        navbar_application_windows:
          "DefaultLayout_navbar_application_windows__3hDQ_",
        playerBar: "DefaultLayout_playerBar___9IaS",
      };
    },
    84785: function (e) {
      e.exports = {
        root: "VibeButton_root___i3R5",
        ripple: "VibeButton_ripple__cmoBR",
        textContainer: "VibeButton_textContainer__j9nOW",
        titleContainer: "VibeButton_titleContainer__yrRRu",
        title: "VibeButton_title__sLC0I",
        subtitle: "VibeButton_subtitle__MQ_Ca",
        image: "VibeButton_image__GOwKJ",
        button: "VibeButton_button__tXFAm",
        button_loading: "VibeButton_button_loading__LYnUR",
        "applying-setting": "VibeButton_applying-setting__Jd_3C",
        icon: "VibeButton_icon__KIv7n",
      };
    },
    57707: function (e) {
      e.exports = {
        root: "VibeCard_root__9TDjP",
        playingAnimation: "VibeCard_playingAnimation__iRgvh",
        cover: "VibeCard_cover__LbX93",
        image: "VibeCard_image__luolD",
        controls: "VibeCard_controls__CcEVx",
        controls_isPlaying: "VibeCard_controls_isPlaying__1_Ass",
        important: "VibeCard_important__WPWqc",
        control: "VibeCard_control__SM3H4",
        playControl: "VibeCard_playControl__pZxq5",
        playButton: "VibeCard_playButton__LWepP",
      };
    },
    38755: function (e) {
      e.exports = {
        root: "ArtistCard_root__x67BK",
        controls: "ArtistCard_controls__jsqqI",
        cover: "ArtistCard_cover__29ShU",
        coverBlock: "ArtistCard_coverBlock__dBL4x",
        image: "ArtistCard_image__pONJx",
        titleLink: "ArtistCard_titleLink__G8Puz",
        playButton: "ArtistCard_playButton__XZoTr",
        likeButton: "ArtistCard_likeButton__LU9TL",
        menuButton: "ArtistCard_menuButton__EynXG",
        pinButton: "ArtistCard_pinButton__G_VOi",
        control: "ArtistCard_control___qv5j",
      };
    },
    62550: function (e) {
      e.exports = {
        timecode: "ChangeTimecode_timecode__UScFt",
        root: "ChangeTimecode_root__QxEw_",
        root_mobile: "ChangeTimecode_root_mobile__SzOdx",
        root_fullscreen: "ChangeTimecode_root_fullscreen__FA6r0",
        slider: "ChangeTimecode_slider__P4qmT",
      };
    },
    86703: function (e) {
      e.exports = {
        root: "Timecode_root__TLT75",
        root_start: "Timecode_root_start__pHG5N",
        root_end: "Timecode_root_end__LLQsh",
      };
    },
    73939: function (e) {
      e.exports = {
        root: "ChangeVolume_root__HDxtA",
        icon: "ChangeVolume_icon__5Zv2a",
        button: "ChangeVolume_button__4HLEr",
      };
    },
    42781: function (e) {
      e.exports = {
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    9097: function (e) {
      e.exports = {
        rootOld: "Content_rootOld__g85_m",
        root: "Content_root__IsH8s",
        primary: "Content_primary__dInSS",
        primary_isMobile: "Content_primary_isMobile__ApDi2",
        primary_short: "Content_primary_short__TSM3L",
        secondary: "Content_secondary__tGLLS",
        secondary_isMobile: "Content_secondary_isMobile__CbF7M",
        secondaryEnter: "Content_secondaryEnter__Nsp_f",
        secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
        secondaryExit: "Content_secondaryExit__m4gOK",
        secondaryExitActive: "Content_secondaryExitActive__miNnR",
      };
    },
    23224: function (e) {
      e.exports = {
        root: "TrackModalDesktop_root__GB2Y3",
        root_withFullscreen: "TrackModalDesktop_root_withFullscreen__17XCc",
        root_withWindows: "TrackModalDesktop_root_withWindows__72ONf",
        headerClassName: "TrackModalDesktop_headerClassName__PQYEu",
        modalContent: "TrackModalDesktop_modalContent__mc2tL",
        infoBlock: "TrackModalDesktop_infoBlock__YQv3l",
        infoTitle: "TrackModalDesktop_infoTitle__KWsVO",
        explicit: "TrackModalDesktop_explicit__bzKYo",
        content: "TrackModalDesktop_content__seXQ5",
        artistLink: "TrackModalDesktop_artistLink__PRr3M",
        artists: "TrackModalDesktop_artists__SU8pt",
        important: "TrackModalDesktop_important__6JUV2",
        overlay: "TrackModalDesktop_overlay__HY_wm",
      };
    },
    29913: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    27206: function (e) {
      e.exports = {
        root: "NavbarDesktop_root__scYzp",
        button: "NavbarDesktop_button__x_Ik1",
        important: "NavbarDesktop_important__fRfE5",
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        navigation: "NavbarDesktop_navigation__dLUGW",
        navigation_withoutPins: "NavbarDesktop_navigation_withoutPins__SHInZ",
        logoLink: "NavbarDesktop_logoLink__KR0Dk",
        logo: "NavbarDesktop_logo__Z4jGx",
        collapseButtonTooltip_hidden:
          "NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ",
        title: "NavbarDesktop_title__OrnHN",
        title_animate: "NavbarDesktop_title_animate__XLxaQ",
        animation_show: "NavbarDesktop_animation_show__pRFj9",
        title_collapsed: "NavbarDesktop_title_collapsed__IH9Bc",
        animation_hide: "NavbarDesktop_animation_hide__8VxPs",
        pinsList: "NavbarDesktop_pinsList___jXIM",
        plus: "NavbarDesktop_plus__etQJm",
        plusButtonContainer: "NavbarDesktop_plusButtonContainer__C7Wf5",
        plusButtonContainer_enter:
          "NavbarDesktop_plusButtonContainer_enter__VRwh3",
        plusButtonContainer_enter_active:
          "NavbarDesktop_plusButtonContainer_enter_active__4fkf5",
        plusButtonContainer_exit:
          "NavbarDesktop_plusButtonContainer_exit__jtA7i",
        plusButtonContainer_exit_active:
          "NavbarDesktop_plusButtonContainer_exit_active__CYCui",
        plusBar: "NavbarDesktop_plusBar__E6cfw",
        plusBar_enter: "NavbarDesktop_plusBar_enter__om_ax",
        plusBar_enter_active: "NavbarDesktop_plusBar_enter_active__2VFPS",
        animation_show_scale: "NavbarDesktop_animation_show_scale___HzwE",
        plusBar_exit: "NavbarDesktop_plusBar_exit__bgdAw",
        plusBar_exit_active: "NavbarDesktop_plusBar_exit_active__s_9sz",
        animation_hide_scale: "NavbarDesktop_animation_hide_scale__mzAvb",
        user: "NavbarDesktop_user__dzbuH",
        userMeta_animate: "NavbarDesktop_userMeta_animate__3KkeR",
        userMeta_collapsed: "NavbarDesktop_userMeta_collapsed__rTdFz",
      };
    },
    12484: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
      };
    },
    53724: function (e) {
      e.exports = {
        root: "Pin_root__UyplT",
        ripple: "Pin_ripple__Vzpzs",
        link: "Pin_link__nz6I7",
        root_withoutLink: "Pin_root_withoutLink__fr1XH",
        info: "Pin_info__x_7Zx",
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
    93088: function (e) {
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
    13774: function (e) {
      e.exports = {
        root: "PinsList_root__LN_2Z",
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
    36509: function (e) {
      e.exports = {
        root: "PlusBar_root__yN9SZ",
        logos: "PlusBar_logos__8Gvj7",
        addition: "PlusBar_addition__npwOZ",
        title: "PlusBar_title__SwzSx",
        buttons: "PlusBar_buttons__QqSS4",
      };
    },
    63553: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktop_root___8vo1",
        important: "FullscreenPlayerDesktop_important__dGfiL",
        header: "FullscreenPlayerDesktop_header__OBhzq",
        modalContent: "FullscreenPlayerDesktop_modalContent__Zs_LC",
        content: "FullscreenPlayerDesktop_content__bl_7V",
        trackInfo: "FullscreenPlayerDesktop_trackInfo__Px1Ta",
        trackInfo_withArtist:
          "FullscreenPlayerDesktop_trackInfo_withArtist__aRsBD",
        trackInfo_withPodcast:
          "FullscreenPlayerDesktop_trackInfo_withPodcast__pgpJq",
        trackMeta: "FullscreenPlayerDesktop_trackMeta__NydsU",
        trackContainer: "FullscreenPlayerDesktop_trackContainer__99XuP",
        text: "FullscreenPlayerDesktop_text__ck8aB",
        trackLink: "FullscreenPlayerDesktop_trackLink__CfsHQ",
        notification: "FullscreenPlayerDesktop_notification__luD_J",
        timelineWrapper: "FullscreenPlayerDesktop_timelineWrapper__g_oV_",
        timeline: "FullscreenPlayerDesktop_timeline__4Z6DH",
        timelineSlider: "FullscreenPlayerDesktop_timelineSlider__MTUqo",
        buttonsBlock: "FullscreenPlayerDesktop_buttonsBlock__9Kgva",
        likeButton: "FullscreenPlayerDesktop_likeButton__sv1hI",
        menuButton: "FullscreenPlayerDesktop_menuButton__0kKtl",
        likeButton_active: "FullscreenPlayerDesktop_likeButton_active__Zp8M_",
        menuButton_active: "FullscreenPlayerDesktop_menuButton_active__mq9sY",
        controls: "FullscreenPlayerDesktop_controls__57AQi",
        controls_active: "FullscreenPlayerDesktop_controls_active__HZWN_",
        titleContainer: "FullscreenPlayerDesktop_titleContainer__rVpIZ",
        closeButton: "FullscreenPlayerDesktop_closeButton__MQ64s",
        cover: "FullscreenPlayerDesktop_cover__VVsjV",
      };
    },
    52070: function (e) {
      e.exports = {
        root: "FullscreenPoster_root__kLwjb",
        cover: "FullscreenPoster_cover__WWgNX",
      };
    },
    25984: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobile_root__Sqyh0",
        important: "FullscreenPlayerMobile_important__1lAN3",
        header: "FullscreenPlayerMobile_header__8KH28",
        headerCenter: "FullscreenPlayerMobile_headerCenter___EqSP",
        modalContent: "FullscreenPlayerMobile_modalContent__m2cbB",
        content: "FullscreenPlayerMobile_content__E0L3Y",
        castButton: "FullscreenPlayerMobile_castButton__3ZgER",
        footerContainer: "FullscreenPlayerMobile_footerContainer__aupK1",
        wrapper: "FullscreenPlayerMobile_wrapper__mPRFg",
      };
    },
    52938: function (e) {
      e.exports = {
        root: "PlayingNow_root__0lQa8",
        textBlock: "PlayingNow_textBlock___CfRh",
        title: "PlayingNow_title__82csz",
        subTitle: "PlayingNow_subTitle__JNJfh",
        link: "PlayingNow_link__4gLK9",
      };
    },
    60022: function (e) {
      e.exports = {
        root: "TrackModeContent_root__Sz0nW",
        infoBlock: "TrackModeContent_infoBlock__i4oxs",
        coverWrapper: "TrackModeContent_coverWrapper__aalzh",
        cover: "TrackModeContent_cover__FChz6",
        trackInfo: "TrackModeContent_trackInfo__Z_iNa",
        metaText: "TrackModeContent_metaText__UY6Pk",
        timeline: "TrackModeContent_timeline__auga_",
      };
    },
    42498: function (e) {
      e.exports = { root: "TrackModeFooter_root__hz1LW" };
    },
    19865: function (e) {
      e.exports = {
        message: "NotificationChangeQuality_message__coCvn",
        changeButton: "NotificationChangeQuality_changeButton__Hzc3y",
        icon: "NotificationChangeQuality_icon__bOfQO",
      };
    },
    94973: function (e) {
      e.exports = { root: "PlayerBar_root__cXUnU" };
    },
    8092: function (e) {
      e.exports = {
        root: "PlayerBarDesktop_root__d2Hwi",
        info: "PlayerBarDesktop_info__56v53",
        infoCard: "PlayerBarDesktop_infoCard__tnLS6",
        fullscreenButton: "PlayerBarDesktop_fullscreenButton__G4Z_9",
        coverContainer: "PlayerBarDesktop_coverContainer__2Z5nQ",
        cover: "PlayerBarDesktop_cover__IYLwR",
        fullscreenButtonContainer:
          "PlayerBarDesktop_fullscreenButtonContainer__qSOnr",
        description: "PlayerBarDesktop_description__eQ_tA",
        artists: "PlayerBarDesktop_artists__N5vpf",
        artistLink: "PlayerBarDesktop_artistLink__Btgdq",
        infoButtons: "PlayerBarDesktop_infoButtons__iSpa_",
        sonata: "PlayerBarDesktop_sonata__sJHY_",
        meta: "PlayerBarDesktop_meta__6sm58",
        settingsButton: "PlayerBarDesktop_settingsButton__jLkVn",
        dislikeButton: "PlayerBarDesktop_dislikeButton__XwMir",
        likeButton: "PlayerBarDesktop_likeButton__LKH4K",
      };
    },
    23106: function (e) {
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
      };
    },
    30917: function (e) {
      e.exports = {
        root: "QualitySettingsContextMenu_root__fW5GK",
        popoverContent: "QualitySettingsContextMenu_popoverContent__I6gtY",
        header: "QualitySettingsContextMenu_header__YGH7p",
        headerWithCloseButton:
          "QualitySettingsContextMenu_headerWithCloseButton__vsXrW",
        itemWrapper: "QualitySettingsContextMenu_itemWrapper__VOgWT",
        item: "QualitySettingsContextMenu_item__JevQS",
        item_option: "QualitySettingsContextMenu_item_option__SSxha",
        item_type: "QualitySettingsContextMenu_item_type__LmiAl",
        expandedItem: "QualitySettingsContextMenu_expandedItem__m6M8x",
        itemSubTitle: "QualitySettingsContextMenu_itemSubTitle__YGtQk",
      };
    },
    29847: function (e) {
      e.exports = {
        root: "SomethingWentWrong_root__d77VJ",
        content: "SomethingWentWrong_content__8_YkJ",
        content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
        navigation: "SomethingWentWrong_navigation__a8eMG",
        navigation_desktop: "SomethingWentWrong_navigation_desktop__WGGBX",
        icon: "SomethingWentWrong_icon__f15_y",
        title: "SomethingWentWrong_title__Kn89B",
        important: "SomethingWentWrong_important__namIb",
        text: "SomethingWentWrong_text__KEfGc",
        button: "SomethingWentWrong_button__dmh7t",
      };
    },
    26365: function (e) {
      e.exports = {
        root: "Trailer_root__c8eG3",
        header: "Trailer_header__FBFMi",
        trackContainer: "Trailer_trackContainer__U_c_r",
        trackContainer_active: "Trailer_trackContainer_active__ku3Ad",
        trackShimmer: "Trailer_trackShimmer__qmCN3",
        albumShimmer: "Trailer_albumShimmer__8RxuC",
        footer: "Trailer_footer__POMTS",
      };
    },
    76560: function (e) {
      e.exports = {
        root: "TrailerFooter_root__LKXby",
        playButtonShimmer: "TrailerFooter_playButtonShimmer__5QwPi",
        linkButtonShimmer: "TrailerFooter_linkButtonShimmer__ZV1s1",
      };
    },
    88929: function (e) {
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
      };
    },
    42762: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        modalContent: "TrailerModal_modalContent__ZSNFe",
        overlay: "TrailerModal_overlay__D9vRl",
        header: "TrailerModal_header__0h1zj",
      };
    },
    92318: function (e, t, i) {
      "use strict";
      i.d(t, {
        O: function () {
          return s;
        },
      });
      var a,
        n = i(99616),
        r = {
          810: (e) => {
            e.exports = a || (a = i.t(n, 2));
          },
        },
        o = {},
        l = {};
      (() => {
        Object.defineProperty(l, "__esModule", { value: !0 }),
          (l.useToggle = void 0);
        let e = (function e(t) {
          var i = o[t];
          if (void 0 !== i) return i.exports;
          var a = (o[t] = { exports: {} });
          return r[t](a, a.exports, e), a.exports;
        })(810);
        l.useToggle = (t) => {
          let [i, a] = (0, e.useState)(t),
            n = (0, e.useCallback)(() => {
              a((e) => !e);
            }, []),
            r = (0, e.useCallback)(() => {
              a(!0);
            }, []),
            o = (0, e.useCallback)(() => {
              a(!1);
            }, []);
          return { state: i, toggle: n, toggleTrue: r, toggleFalse: o };
        };
      })(),
        l.__esModule;
      var s = l.useToggle;
    },
    22926: function (e, t, i) {
      "use strict";
      i.d(t, {
        i: function () {
          return d;
        },
      });
      var a,
        n,
        r = i(99616),
        o = {
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
          102: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "JkKcxRVvjK7lcakkEliC",
              root_alwaysThumb: "cOKDtLfDZAuPXftfS2WM",
              root_trackSize_xs: "IB_XOYAyYPK4aszY9R1F",
              root_trackSize_s: "SHvrm0VRiLVwGqJJjNO8",
              root_thumbSize_xs: "BlvJwKLYTicnbJ3Qyuou",
              root_neverThumb: "dDJBVBTkzY5zY7vtSbyr",
              root_thumbSize_s: "qpvIbN4_hF6CqK0bjCq7",
              root_thumbSize_m: "P8_ABi1YnAOS8p8EY87f",
            };
          },
          6161: (e, t, i) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = i(810),
              n = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              l =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                r = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                o.call(t, a) && !s.hasOwnProperty(a) && (r[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === r[a] && (r[a] = t[a]);
              return {
                $$typeof: n,
                type: e,
                key: c,
                ref: d,
                props: r,
                _owner: l.current,
              };
            }
            (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          3886: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ThumbVariant = t.DEFAULT_MAX_VALUE = t.SliderMode = void 0),
              (t.SliderMode = { NORMAL: "normal", DEFERRED: "deferred" }),
              (t.DEFAULT_MAX_VALUE = 100),
              (t.ThumbVariant = {
                HOVER: "hover",
                NEVER: "never",
                ALWAYS: "always",
              });
          },
          1747: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Slider = void 0);
            let n = i(9541),
              r = i(5881),
              o = i(810),
              l = i(3886),
              s = a(i(102)),
              c = ({
                forwardRef: e,
                className: t,
                value: i,
                secondaryValue: a = l.DEFAULT_MAX_VALUE,
                maxValue: c = l.DEFAULT_MAX_VALUE,
                thumbSize: d = "m",
                trackSize: u = "s",
                mode: _ = l.SliderMode.NORMAL,
                onChange: m,
                showThumbVariant: p = l.ThumbVariant.HOVER,
                ...v
              }) => {
                let [h, x] = (0, o.useState)(i ?? 0),
                  [f, y] = (0, o.useState)(!1),
                  [g, C] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                  f || x(i);
                }, [i, f]),
                  (0, o.useEffect)(() => {
                    !f && g && _ === l.SliderMode.DEFERRED && (m(h, !0), C(!1));
                  }, [_, f, m, h, g]);
                let b = (0, o.useCallback)(
                    (e) => {
                      let t = Number(e.target.value);
                      x(t),
                        C(!0),
                        "normal" === _ ? (m(t, !0), C(!1)) : m(t, !1);
                    },
                    [x, m, _],
                  ),
                  k = (0, o.useCallback)(
                    (e) => {
                      let t = !1,
                        i = !1;
                      e.nativeEvent instanceof window.MouseEvent
                        ? ((t = 0 === e.nativeEvent.button),
                          (i = "mousedown" === e.nativeEvent.type))
                        : ((t =
                            1 === e.nativeEvent.touches.length ||
                            "touchend" === e.nativeEvent.type),
                          (i = "touchstart" === e.nativeEvent.type)),
                        t && y(i);
                    },
                    [y],
                  ),
                  j = (0, o.useCallback)(() => {
                    y(!1);
                  }, [y]),
                  N = (0, o.useMemo)(() => {
                    let e = (100 * Math.min(h, c)) / c,
                      t = (100 * Math.min(a, c)) / c;
                    return {
                      backgroundSize: `${e}% 100%`,
                      "--seek-before-width": `${e}%`,
                      "--buffered-width": `${t}%`,
                    };
                  }, [h, a, c]);
                return (0, n.jsx)("input", {
                  ref: e,
                  className: (0, r.clsx)(
                    s.default.root,
                    {
                      [s.default[`root_thumbSize_${d}`]]: d,
                      [s.default[`root_trackSize_${u}`]]: u,
                      [s.default[`root_${p}Thumb`]]: p,
                    },
                    t,
                  ),
                  type: "range",
                  max: c,
                  value: h,
                  style: N,
                  onTouchStart: k,
                  onTouchEnd: k,
                  onMouseDown: k,
                  onMouseUp: k,
                  onMouseOut: j,
                  onBlur: j,
                  onChange: b,
                  ...v,
                });
              };
            t.Slider = (0, o.forwardRef)((e, t) =>
              (0, n.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = n || (n = i.t(r, 2));
          },
        },
        l = {};
      function s(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var i = (l[e] = { exports: {} });
        return o[e].call(i.exports, i, i.exports, s), i.exports;
      }
      (s.d = (e, t) => {
        for (var i in t)
          s.o(t, i) &&
            !s.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "X", { value: !0 }),
        (c.i = void 0),
        (a = s(1747)),
        Object.defineProperty(c, "i", {
          enumerable: !0,
          get: function () {
            return a.Slider;
          },
        });
      var d = c.i;
      c.X;
    },
    19431: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, i) => {
          let a = (a) => {
            let n = (a + e / 30) % 12;
            return (
              i -
              t * Math.min(i, 1 - i) * Math.max(-1, Math.min(n - 3, 9 - n, 1))
            );
          };
          return [a(0), a(8), a(4)];
        });
    },
    45475: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeSettings =
          t.normalizeCollectionHue =
          t.normalizeFrequency =
            void 0);
      let a = i(85494),
        n = i(25161);
      (t.normalizeFrequency = (e) => Math.min(1, (0, n.round)(e))),
        (t.normalizeCollectionHue = (e) => e ?? a.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = ({
          hue: e,
          collectionHue: i,
          energy: n,
          backgroundColor: r,
        }) => {
          let o = { collectionHue: (0, t.normalizeCollectionHue)(i) };
          return (
            e && (o.hue = e),
            n && (o.energy = (n + 1) * a.ENERGY_FACTOR),
            r && (o.backgroundColor = r),
            o
          );
        });
    },
    25161: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomNumber = t.round = void 0),
        (t.round = (e) => Math.round(100 * e) / 100),
        (t.randomNumber = (e, t) =>
          Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e);
    },
    85494: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENERGY_FACTOR =
          t.DEFAULT_ENERGY =
          t.DEFAULT_COLLECTION_LIGHTNESS =
          t.DEFAULT_COLLECTION_SATURATION =
          t.DEFAULT_COLLECTION_HUE =
          t.DEFAULT_LIGHTNESS =
          t.DEFAULT_SATURATION =
          t.DEFAULT_HUE =
          t.MAX_FPS =
            void 0),
        (t.MAX_FPS = 25),
        (t.DEFAULT_HUE = 22.968),
        (t.DEFAULT_SATURATION = 1),
        (t.DEFAULT_LIGHTNESS = 0.5),
        (t.DEFAULT_COLLECTION_HUE = 10),
        (t.DEFAULT_COLLECTION_SATURATION = 0.8),
        (t.DEFAULT_COLLECTION_LIGHTNESS = 0.46),
        (t.DEFAULT_ENERGY = 0.2),
        (t.ENERGY_FACTOR = 0.4);
    },
    75307: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DumbAnalyzer = t.FrequencyAnalyzer = void 0);
      let a = i(45475);
      class n {
        audioContext;
        sourceNode;
        analyserNode;
        bufferLength = 0;
        spectrum = new Uint8Array();
        constructor(e) {
          (this.audioContext = new AudioContext()),
            (this.sourceNode = this.audioContext.createMediaElementSource(e)),
            (this.analyserNode = this.audioContext.createAnalyser()),
            (this.analyserNode.fftSize = 32),
            (this.analyserNode.smoothingTimeConstant = 0.9),
            this.sourceNode.connect(this.analyserNode),
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength)),
            (this.handleUserAction = this.handleUserAction.bind(this)),
            this.setupListeners();
        }
        handleUserAction() {
          this.audioContext.resume(),
            document.removeEventListener("click", this.handleUserAction);
        }
        setupListeners() {
          document.addEventListener("click", this.handleUserAction);
        }
        getAverageFrequencies({ low: e, high: t }) {
          let i = Math.floor(
              e / (this.audioContext.sampleRate / this.bufferLength),
            ),
            n = Math.floor(
              t / (this.audioContext.sampleRate / this.bufferLength),
            );
          this.analyserNode?.getByteFrequencyData(this.spectrum);
          let r = 0,
            o = 0;
          for (let e = i; e <= n; e++) {
            let t = this.spectrum[e] ?? 0;
            (r += t / 256), o++;
          }
          return (0, a.normalizeFrequency)(r / o);
        }
      }
      (t.FrequencyAnalyzer = n),
        (t.DumbAnalyzer = class {
          getAverageFrequencies() {
            return 0;
          }
        });
    },
    93283: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let a = i(19431),
        n = i(25161),
        r = i(85494),
        o = i(21691);
      class l {
        hue = r.DEFAULT_HUE;
        collectionHue = r.DEFAULT_COLLECTION_HUE;
        topStart;
        topEnd;
        middleStart;
        middleEnd;
        bottomStart;
        bottomEnd;
        constructor(e) {
          this.collectionHue = e;
          let t = (0, a.adjustHue)(e),
            i = (0, a.safeHue)(t + (0, n.randomNumber)(30, 40), t);
          (this.topStart = new o.RGB(50)),
            (this.topEnd = new o.RGB(50)),
            (this.middleStart = new o.RGB(300)),
            (this.middleEnd = new o.RGB(320)),
            (this.bottomStart = new o.RGB(t)),
            (this.bottomEnd = new o.RGB(i));
        }
        get value() {
          return [
            this.bottomStart.value,
            this.middleStart.value,
            this.topStart.value,
            this.bottomEnd.value,
            this.middleEnd.value,
            this.topEnd.value,
          ];
        }
        update(e, t) {
          (this.hue = e), (this.collectionHue = t);
          let i = (0, a.adjustHue)(e),
            r = (0, a.safeHue)(i + (0, n.randomNumber)(40, 80), i),
            o = (0, a.adjustHue)(t);
          this.topStart.update(i),
            this.topEnd.update(
              (0, a.safeHue)(i + (0, n.randomNumber)(30, 40), i),
            ),
            this.middleStart.update(r),
            this.middleEnd.update(
              (0, a.safeHue)(r + (0, n.randomNumber)(30, 40), i),
            ),
            this.bottomStart.update(o),
            this.bottomEnd.update(
              (0, a.safeHue)(o + (0, n.randomNumber)(30, 40), i),
            );
        }
        next(e) {
          this.topStart.next(e),
            this.topEnd.next(e),
            this.middleStart.next(e),
            this.middleEnd.next(e),
            this.bottomStart.next(e),
            this.bottomEnd.next(e);
        }
      }
      t.Color = l;
    },
    21461: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicValue = void 0),
        (t.DynamicValue = class {
          currentValue;
          targetValue;
          elapsedTime;
          duration;
          formatter;
          constructor(e, t, i, a) {
            (this.currentValue = e),
              (this.targetValue = t),
              (this.duration = i),
              (this.elapsedTime = 0),
              (this.formatter = a);
          }
          clamp(e, t, i) {
            return Math.min(Math.max(e, t), i);
          }
          get value() {
            return this.formatter
              ? this.formatter(this.currentValue)
              : this.currentValue;
          }
          update(e) {
            (this.targetValue = e), (this.elapsedTime = 0);
          }
          next(e) {
            let t = this.clamp(this.elapsedTime / this.duration, 0, 1);
            return (
              (this.elapsedTime += e),
              (this.currentValue =
                this.currentValue + (this.targetValue - this.currentValue) * t),
              this.currentValue
            );
          }
        });
    },
    99566: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let a = i(95666),
        n = i(45475),
        r = i(85494),
        o = i(54104),
        l = i(33528),
        s = i(42943),
        c = i(46558);
      class d {
        analyzer;
        ticker;
        scene = new a.Transform();
        shader;
        renderer;
        uniforms;
        renderState = {
          [l.RenderState.ACTIVE_TAB]: !0,
          [l.RenderState.BLOCK_VISIBILITY]: !0,
          [l.RenderState.MANUAL]: !0,
        };
        constructor(e, t, i) {
          (this.uniforms = new c.Uniforms((0, n.normalizeCollectionHue)(i))),
            (this.renderer = new a.Renderer(this.rendererOptions)),
            (this.ticker = new s.Ticker(r.MAX_FPS, this.render.bind(this))),
            (this.analyzer = t),
            this.createElement(e),
            (this.handleOnResize = this.handleOnResize.bind(this)),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            (this.shader = this.createShader()),
            this.handleOnResize(),
            this.handleOnVisibilityChange(),
            this.setupListeners();
        }
        get rendererOptions() {
          return { alpha: !1, antialias: !1, preserveDrawingBuffer: !1 };
        }
        get vertexAndFragment() {
          return { vertex: o.VertexShaderV2, fragment: o.FragmentShaderV2 };
        }
        setupListeners() {
          window.addEventListener("resize", this.handleOnResize),
            document.addEventListener(
              "visibilitychange",
              this.handleOnVisibilityChange,
            );
        }
        createElement(e) {
          (e.innerHTML = ""), e.appendChild(this.renderer.gl.canvas);
        }
        createShader() {
          let e = this.renderer.gl,
            t = new a.Plane(e, { width: 2, height: 2 }),
            i = new a.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            }),
            n = new a.Mesh(e, { geometry: t, program: i });
          return n.setParent(this.scene), i;
        }
        render(e = 1) {
          this.uniforms.update(e, this.analyzer),
            (this.shader.uniforms = this.uniforms.toObject()),
            this.renderer?.render({ scene: this.scene });
        }
        handleOnResize() {
          this.renderer.setSize(this.uniforms.width, this.uniforms.height);
        }
        handleOnVisibilityChange() {
          "visible" === document.visibilityState
            ? this.enableRender(l.RenderState.ACTIVE_TAB)
            : this.disableRender(l.RenderState.ACTIVE_TAB);
        }
        updateRenderingState() {
          let e = Object.values(this.renderState).every((e) => e);
          e ? this.ticker.start() : this.ticker.stop();
        }
        applySettings(e = {}) {
          let {
            hue: t,
            collectionHue: i,
            energy: a,
            backgroundColor: r,
          } = (0, n.normalizeSettings)(e);
          t && i && this.uniforms.updateColor(t, i),
            a && this.uniforms.updateEnergy(a),
            r && this.uniforms.updateBackgroundColor(r);
        }
        likeAnimation() {
          this.uniforms.updateReactTop(0.7),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0.7);
            }, 100),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0.7);
            }, 150),
            setTimeout(() => {
              this.uniforms.updateReactTop(0);
            }, 850),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0);
            }, 950),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0);
            }, 1050);
        }
        playAnimation(e) {
          this.uniforms.updatePlayingState(!0), this.applySettings(e);
        }
        idleAnimation() {
          this.uniforms.updateEnergy(r.DEFAULT_ENERGY),
            this.uniforms.updatePlayingState(!1);
        }
        enableRender(e) {
          (this.renderState[e] = !0), this.updateRenderingState();
        }
        disableRender(e) {
          (this.renderState[e] = !1), this.updateRenderingState();
        }
        destroy() {
          this.handleOnResize &&
            window.removeEventListener("resize", this.handleOnResize),
            this.handleOnVisibilityChange &&
              document.removeEventListener(
                "visibilitychange",
                this.handleOnVisibilityChange,
              );
        }
      }
      t.VibeAnimationRenderer = d;
    },
    21691: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RGB = void 0);
      let a = i(19431),
        n = i(85494),
        r = i(21461);
      t.RGB = class {
        r;
        g;
        b;
        constructor(e) {
          let t = (0, a.hsl2rgb)(e, n.DEFAULT_SATURATION, n.DEFAULT_LIGHTNESS);
          (this.r = new r.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new r.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new r.DynamicValue(t[2], t[2], 3e3));
        }
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, a.hsl2rgb)(e, n.DEFAULT_SATURATION, n.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
      };
    },
    42943: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Ticker = void 0),
        (t.Ticker = class {
          fps;
          render;
          isActive = !1;
          requestId = 0;
          constructor(e, t) {
            (this.fps = e), (this.render = t);
          }
          start() {
            if (this.isActive) return;
            let e = window.performance.now(),
              t = 1e3 / this.fps,
              i = (a) => {
                this.requestId = requestAnimationFrame(i);
                let n = a - e;
                n >= t - 0.1 && ((e = a - (n % t)), this.render(n));
              };
            (this.isActive = !0), (this.requestId = requestAnimationFrame(i));
          }
          stop() {
            this.isActive &&
              ((this.isActive = !1), cancelAnimationFrame(this.requestId));
          }
        });
    },
    46558: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let a = i(95666),
        n = i(85494),
        r = i(93283),
        o = i(21461);
      class l {
        isPlaying = !1;
        quality = 0.6;
        background = new a.Vec3(0, 0, 0);
        energy = new o.DynamicValue(n.DEFAULT_ENERGY, n.DEFAULT_ENERGY, 1e3);
        time = Math.floor(3600 * Math.random());
        color;
        rotation = [
          new a.Vec3(-0.3, 0.3, 0.2),
          new a.Vec3(-0.3, -0.3, -0.2),
          new a.Vec3(-0.3, -0.3, 0.2),
        ];
        audio = [0, 0, 0];
        audioLowRatio = new o.DynamicValue(0, 0, 1e3);
        audioMiddleRatio = new o.DynamicValue(0, 0, 1e3);
        audioHighRatio = new o.DynamicValue(0, 0, 1e3);
        reactTop = new o.DynamicValue(0, 0, 600);
        reactMiddle = new o.DynamicValue(0, 0, 600);
        reactBottom = new o.DynamicValue(0, 0, 600);
        point = [0, 0];
        interaction = 0;
        constructor(e) {
          this.color = new r.Color(e);
        }
        toValue(e) {
          return { value: e };
        }
        get width() {
          return Math.min(window.innerWidth * this.quality, 800);
        }
        get height() {
          let e = window.innerHeight / window.innerWidth;
          return Math.min(window.innerHeight * this.quality, 800 * e);
        }
        updatePlayingState(e) {
          (this.isPlaying = e),
            e
              ? (this.audioLowRatio.update(1),
                this.audioMiddleRatio.update(1),
                this.audioHighRatio.update(1))
              : (this.audioLowRatio.update(0),
                this.audioMiddleRatio.update(0),
                this.audioHighRatio.update(0));
        }
        updateColor(e, t) {
          this.color.update(e, t);
        }
        updateBackgroundColor(e) {
          this.background = new a.Vec3(e, e, e);
        }
        updateEnergy(e) {
          this.energy.update(e);
        }
        updateReactTop(e) {
          this.reactTop.update(e);
        }
        updateReactMiddle(e) {
          this.reactMiddle.update(e);
        }
        updateReactBottom(e) {
          this.reactBottom.update(e);
        }
        updateTime(e) {
          let t = (this.energy.value * e) / 1e3;
          this.time = (this.time + t) % 86400;
        }
        update(e, t) {
          if (
            (this.energy.next(e),
            this.color.next(e),
            this.reactTop.next(e),
            this.reactMiddle.next(e),
            this.reactBottom.next(e),
            this.updateTime(e),
            t)
          ) {
            let i = t.getAverageFrequencies({ low: 0, high: 250 }),
              a = t.getAverageFrequencies({ low: 500, high: 2e3 }),
              n = t.getAverageFrequencies({ low: 2e3, high: 4e3 });
            this.audioLowRatio.next(e),
              this.audioMiddleRatio.next(e),
              this.audioHighRatio.next(e),
              (this.audio = [
                i * this.audioLowRatio.value,
                a * this.audioMiddleRatio.value,
                n * this.audioHighRatio.value,
              ]);
          }
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new a.Vec2(this.width, this.height)),
            vTime: this.toValue(this.time),
            vColorBackground: this.toValue(this.background),
            vColor: this.toValue(this.color.value),
            vRotation: this.toValue(this.rotation),
            vAudio: this.toValue(this.audio),
            vReact: this.toValue([
              this.reactTop.value,
              this.reactMiddle.value,
              this.reactBottom.value,
            ]),
            vInteractionPoint: this.toValue(this.point),
            vInteraction: this.toValue(this.interaction),
          };
        }
      }
      t.Uniforms = l;
    },
    66026: function (e, t, i) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.Qz = t.WZ = t.kB = t.wX = void 0;
      var a = i(19431);
      Object.defineProperty(t, "wX", {
        enumerable: !0,
        get: function () {
          return a.hsl2rgb;
        },
      }),
        Object.defineProperty(t, "kB", {
          enumerable: !0,
          get: function () {
            return a.adjustHue;
          },
        });
      var n = i(75307);
      Object.defineProperty(t, "WZ", {
        enumerable: !0,
        get: function () {
          return n.FrequencyAnalyzer;
        },
      }),
        Object.defineProperty(t, "Qz", {
          enumerable: !0,
          get: function () {
            return n.DumbAnalyzer;
          },
        });
      var r = i(99566);
      Object.defineProperty(t, "dr", {
        enumerable: !0,
        get: function () {
          return r.VibeAnimationRenderer;
        },
      });
      var o = i(33528);
      Object.defineProperty(t, "nT", {
        enumerable: !0,
        get: function () {
          return o.RenderState;
        },
      });
      var l = i(85494);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return l.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return l.DEFAULT_COLLECTION_LIGHTNESS;
          },
        });
    },
    54104: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FragmentShaderV2 = t.VertexShaderV2 = void 0),
        (t.VertexShaderV2 = `
precision highp float;
attribute vec4 position;

void main() {
    gl_Position = position;
}
`),
        (t.FragmentShaderV2 = `
precision highp float;

uniform vec2 vScreenSize;
uniform float vTime;

uniform vec3 vColorBackground;

uniform vec3 vColor[6];
uniform vec3 vRotation[3];

uniform float vAudio[3];
uniform float vReact[3];

uniform vec2 vInteractionPoint;
uniform float vInteraction;

#define CIRCLE_WIDTH_BASE 0.8
#define CIRCLE_WIDTH_STEP 0.2

#define SPARK_STRENGTH_BASE 1.0
#define SPARK_STRENGTH_STEP 0.3

#define CIRCLE_RADIUS_BASE 0.95
#define CIRCLE_RADIUS_STEP 0.15

#define CIRCLE_OFFSET_BASE 0.0
#define CIRCLE_OFFSET_STEP 1.57

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise3(vec3 v) {
  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  // x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float tri(in float x){return abs(fract(x)-.5);}
vec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}

float triNoise3D(in vec3 p, in float spd)
{
  float z=0.4;
  float rz = 0.1;
  vec3 bp = p;
  for (float i=0.; i<=4.; i++ )
  {
    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent
    p += (dg+vTime*.1*spd);

    bp *= 4.; // Increase the scale factor
    z *= 0.9;
    p *= 1.6; // Increase the scale factor

    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;
  }
  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);
}

vec2 rotate(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

float light(float intensity, float attenuation, float dist) {
  return intensity / (1.0 + dist + dist * attenuation);
}

vec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {
  float len = length(uv);
  float v0, v1, cl;
  float r0, d0, n0;
  float r, d;

  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;
  r0 = mix(0.0, 1.0, n0);
  d0 = distance(uv, r0 / len * uv);
  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);

  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);

  vec3 col = mix(color1, color2, uv.y * 2.);
  col = col + v1;
  col.rgb = clamp(col.rgb, 0.0, 1.0);
  return vec4(col, v0);
}

vec4 makeBlob(vec2 uv,
              float blob,
              vec3 color1,
              vec3 color2,
              float width,
              float baseReaction,
              float likeReaction,
              float audioStrength,
              float offset,
              vec2 noiseOffset) {
  float len = length(uv);

  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);

  float strength = max(likeReaction, audioStrength);

  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);
  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));
  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));

  return noise;
}

void main() {
  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;

  uv = uv * 2.0 - 1.0;
  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.55;
  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.55;

  vec2 ruv = uv * 2.0;
  float pr = length(ruv);
  float pa = atan(ruv.y, ruv.x);

  float idx = (pa/3.1415) / 2.0;   // 0 to 1

  vec2 ruv1 = rotate(uv * 2.0, 3.1415);
  float pa1 = atan(ruv1.y, ruv1.x);
  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1
  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI

  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);
  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));
  spark = spark * 0.2 + pow(spark, 10.);
  spark = smoothstep(0.0, spark, 0.3) * spark;

  vec3 color = vColorBackground;
  vec4 blobColor;
  float floatIndex;
  float radius;

  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));

  for (int i = 0; i < 3; i++) {
    floatIndex = float(i);
    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;
    blobColor = makeBlob(uv,
                         mix(radius, radius + 0.3, n0),
                         vColor[i],
                         vColor[i+3],
                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,
                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,
                         vReact[i],
                         vAudio[i],
                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,
                         rotate(vRotation[i].xy, vTime * vRotation[i].z));
    color = mix(color, blobColor.rgb, blobColor.a);
  }

  gl_FragColor = vec4(color, 1.0);
}
`);
    },
    33528: function (e, t) {
      "use strict";
      var i, a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RenderState = void 0),
        ((a = i || (t.RenderState = i = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (a.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (a.MANUAL = "MANUAL");
    },
  },
  function (e) {
    e.O(
      0,
      [
        2498, 7873, 5455, 8628, 459, 733, 6499, 2008, 6217, 2015, 9651, 6911,
        210, 1476, 6410, 1871, 3410, 9479, 2436, 4025, 4164, 1744,
      ],
      function () {
        return e((e.s = 19122));
      },
    ),
      (_N_E = e.O());
  },
]);
