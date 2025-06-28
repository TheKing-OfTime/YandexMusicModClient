(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8743],
  {
    9152: function (t, e, i) {
      "use strict";
      i.d(e, {
        $I: function () {
          return c.SearchVibeCard;
        },
        k_: function () {
          return d.VibeButton;
        },
        xJ: function () {
          return d.VibeButtonShimmer;
        },
        op: function () {
          return m.VibeCard;
        },
        KW: function () {
          return u;
        },
        FF: function () {
          return l;
        },
        BV: function () {
          return a.useOnPinClick;
        },
        xF: function () {
          return r;
        },
      });
      var n = i(22874);
      let l = (t) => {
        var e, i, l, a;
        return (0, n.pj)({
          title: t.title,
          header: t.header,
          stationId: t.stationId,
          seeds: t.seeds,
          animationUrl: t.animationUrl,
          backgroundImageUrl: t.backgroundImageUrl,
          imageUrl: t.imageUrl,
          colors: {
            average:
              null !==
                (l =
                  null === (e = t.colors) || void 0 === e
                    ? void 0
                    : e.average) && void 0 !== l
                ? l
                : "",
            waveText:
              null !==
                (a =
                  null === (i = t.colors) || void 0 === i
                    ? void 0
                    : i.waveText) && void 0 !== a
                ? a
                : "",
          },
        });
      };
      var a = i(22105);
      let r = (t) =>
        (0, n.pj)({
          title: t.name,
          seeds: t.seeds,
          stationId: t.stationId,
          idForFrom: t.idForFrom,
        });
      var s = i(54687),
        o = i(13534);
      let u = n.V5.model("Vibe", {
        title: n.V5.optional(n.V5.string, ""),
        header: n.V5.optional(n.V5.string, ""),
        subtitle: n.V5.maybe(n.V5.string),
        stationId: n.V5.string,
        seeds: n.V5.array(n.V5.string),
        idForFrom: n.V5.maybe(n.V5.string),
        imageUrl: n.V5.maybe(n.V5.string),
        animationUrl: n.V5.maybe(n.V5.string),
        backgroundImageUrl: n.V5.maybe(n.V5.string),
        backgroundColor: n.V5.maybe(n.V5.string),
        colors: n.V5.maybe(
          n.V5.model({
            average: n.V5.maybe(n.V5.string),
            waveText: n.V5.maybe(n.V5.string),
          }),
        ),
      })
        .views((t) => ({
          get context() {
            if (t.seeds && (t.stationId !== o.sHr || t.seeds.length > 1))
              return t.title;
            return null;
          },
          get pinId() {
            return (0, s.$)(t.seeds);
          },
          get isPinned() {
            if (!(0, n.fh)(t)) return !1;
            let { pinsCollection: e } = (0, n.yj)(t);
            return e.isPinned(this.pinId);
          },
          get type() {
            var e;
            return null !== (e = t.stationId.split(":")[0]) && void 0 !== e
              ? e
              : "";
          },
        }))
        .actions((t) => ({
          getKey: (e) => "".concat(e, "_").concat(t.seeds[0]),
          togglePin: (0, n.ls)(function* () {
            if (!(0, n.fh)(t)) return;
            let { pinsCollection: e, user: i } = (0, n.yj)(t);
            if (i.isAuthorized)
              return yield e.toggleVibePin({ seeds: t.seeds }, t.pinId);
          }),
        }));
      var c = i(20023),
        d = i(58930),
        m = i(35443);
    },
    22105: function (t, e, i) {
      "use strict";
      i.d(e, {
        useOnPinClick: function () {
          return c;
        },
      });
      var n = i(75441),
        l = i(37285),
        a = i(65067),
        r = i(9317),
        s = i(13534),
        o = i(97141);
      let u = (t) => {
          var e;
          let { vibe: i, closeToast: l } = t;
          return (0, n.jsx)(o.K1, {
            closeToast: l,
            entityVariant: o.j9.VIBE,
            entityTitle: i.title,
            averageColor:
              null === (e = i.colors) || void 0 === e ? void 0 : e.average,
            isPinned: i.isPinned,
          });
        },
        c = (t) => {
          let { user: e } = (0, s.oR4)(),
            { notify: i } = (0, s.d$W)(),
            { formatMessage: c } = (0, r.Z)(),
            [d, m] = (0, a.useState)(!1);
          return (0, a.useCallback)(async () => {
            if (!t) return;
            if (!e.isAuthorized) {
              i(
                (0, n.jsx)(o.Q, {
                  error: c({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$x.ERROR },
              );
              return;
            }
            if (d) return;
            let a = { ...(0, l.ZN)(t), isPinned: !t.isPinned };
            m(!0);
            let r = await t.togglePin();
            m(!1),
              r
                ? i((0, n.jsx)(u, { vibe: a }), { containerId: s.W$x.INFO })
                : i(
                    (0, n.jsx)(o.Q, {
                      error: c({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$x.ERROR },
                  );
          }, [c, i, d, e.isAuthorized, t]);
        };
    },
    20023: function (t, e, i) {
      "use strict";
      i.d(e, {
        SearchVibeCard: function () {
          return p;
        },
      });
      var n = i(75441),
        l = i(32358),
        a = i(62569),
        r = i(65067),
        s = i(35846),
        o = i(93093),
        u = i(91307),
        c = i(17392),
        d = i(13534),
        m = i(97141);
      let p = (0, a.Pi)((t) => {
        let {
            className: e,
            vibe: i,
            cover: a,
            coverClassName: p,
            playButtonIconSize: y,
            description: v,
          } = t,
          { ref: _, intersectionPropertyId: C } = (0, d.VfV)(),
          { pageId: b } = (0, d.lVB)(),
          [g, x] = (0, r.useState)(!1),
          { blockIdForFrom: k } = (0, d.qYG)(),
          { isFreemium: h } = (0, d.NMB)(),
          { sendPlaySearchFeedback: f } = (0, d.sAF)(),
          P = (0, d.lAI)(),
          [V, j] = (0, r.useState)(!1),
          B = (0, d.qsr)(),
          {
            isPlaying: A,
            togglePlay: L,
            isCurrent: I,
          } = (0, d.QhE)({
            seeds: i.seeds,
            pageIdForFrom: b,
            blockIdForFrom: k,
          }),
          N = (0, o.W)(() => {
            if (!B()) {
              if (h) {
                j(!0);
                return;
              }
              g || A || (x(!0), null == f || f()), L(), P(!A);
            }
          }),
          T = (0, o.W)(() => {
            A || N();
          }),
          S = (0, o.W)((t) => {
            2 === t.detail ? T() : (0, u.m)(t, m.$C.ripple);
          }),
          w = (0, r.useCallback)(
            () =>
              (0, n.jsx)(m.Df, {
                isAvailable: !0,
                coverUri: null == a ? void 0 : a.uri,
                title: i.title,
                className: (0, l.W)(m.$C.playButtonCell, p),
                entityCoverStyle: {
                  backgroundColor: null == a ? void 0 : a.color,
                },
                radius: "round",
                onPlayButtonClick: N,
                isPlaying: A,
                isCurrent: I,
                playButtonIconSize: y,
                alt: "".concat(v, " ").concat(i.title),
              }),
            [
              null == a ? void 0 : a.color,
              null == a ? void 0 : a.uri,
              p,
              v,
              N,
              I,
              A,
              y,
              i.title,
            ],
          );
        return (0, n.jsxs)(m.Md, {
          ref: _,
          "data-intersection-property-id": C,
          className: (0, l.W)(m.$C.root, e),
          "aria-label": i.title,
          onClick: S,
          ...(0, s.BA)(s.FK.vibe.SEARCH_VIBE_CARD),
          children: [
            (0, n.jsx)(m.pl, {
              isOpened: V,
              onOpenChange: j,
              isEnabled: h,
              placement: "bottom",
              textVariant: "vibe",
              vibeTextVariant: i.type,
              renderChildren: w,
            }),
            (0, n.jsx)(m.u, {
              title: (0, n.jsx)(c.Caption, {
                className: (0, l.W)(m.$C.text, m.$C.titleText),
                size: "m",
                variant: "div",
                type: "text",
                children: i.title,
              }),
              description: v,
            }),
          ],
        });
      });
    },
    58930: function (t, e, i) {
      "use strict";
      i.d(e, {
        VibeButton: function () {
          return k;
        },
        VibeButtonShimmer: function () {
          return x;
        },
      });
      var n = i(75441),
        l = i(32358),
        a = i(62569),
        r = i(65067),
        s = i(15937),
        o = i(35846),
        u = i(55188),
        c = i(91307),
        d = i(68208),
        m = i(69756),
        p = i(39054),
        y = i(28676),
        v = i(17392),
        _ = i(13534),
        C = i(97141),
        b = i(81814),
        g = i.n(b);
      let x = (t) => {
          let { isActive: e, className: i } = t;
          return (0, n.jsx)(y.Shimmer, {
            isActive: e,
            className: (0, l.W)(g().root, i),
          });
        },
        k = (0, a.Pi)((t) => {
          let { className: e, vibe: i } = t,
            { pageId: a } = (0, _.lVB)(),
            { blockIdForFrom: y } = (0, _.qYG)(),
            { ref: b, intersectionPropertyId: x } = (0, _.VfV)(),
            { toggleTrue: k, toggleFalse: h, state: f } = (0, u.O)(!1),
            { isFreemium: P } = (0, _.NMB)(),
            { isPlaying: V, togglePlay: j } = (0, _.QhE)({
              seeds: i.seeds,
              pageIdForFrom: a,
              blockIdForFrom: y,
            }),
            B = (0, _.lAI)(),
            A = (0, r.useCallback)(
              (t) => {
                P ||
                  ((0, c.m)(t, g().ripple),
                  k(),
                  j().finally(() => {
                    h(), B(!V);
                  }));
              },
              [h, k, j, V, B, P],
            ),
            L = (0, r.useMemo)(() => {
              var t, e;
              return {
                "--vibe-button-background":
                  null === (t = i.colors) || void 0 === t ? void 0 : t.average,
                "--vibe-button-text-color":
                  null === (e = i.colors) || void 0 === e ? void 0 : e.waveText,
              };
            }, [i.colors]),
            I = V ? "pause" : "play",
            N = V
              ? o.QM.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON
              : o.QM.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
            T = (0, r.useCallback)(
              () =>
                (0, n.jsxs)(d.Button, {
                  style: L,
                  withRipple: !1,
                  withHover: !1,
                  variant: "text",
                  onClick: A,
                  className: (0, l.W)(
                    g().root,
                    g().button,
                    { [g().button_loading]: f },
                    e,
                  ),
                  "data-intersection-property-id": x,
                  ref: b,
                  ...(0, o.BA)(o.QM.landing.VIBE_DISCOVERY_ITEM),
                  children: [
                    (0, n.jsx)(p.Image, {
                      className: g().image,
                      withAvatarReplace: !0,
                      withFallback: !1,
                      src: i.backgroundImageUrl,
                      withAspectRatio: !0,
                      size: 400,
                      fit: "cover",
                    }),
                    (0, n.jsxs)("span", {
                      className: g().textContainer,
                      children: [
                        (0, n.jsx)(v.Caption, {
                          className: g().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          weight: "bold",
                          children: (0, n.jsx)(s.Z, {
                            id: "entity-names.my-vibe",
                          }),
                        }),
                        (0, n.jsxs)("span", {
                          className: g().titleContainer,
                          children: [
                            (0, n.jsx)(m.Icon, {
                              className: g().icon,
                              size: "xxs",
                              variant: I,
                              ...(0, o.BA)(N),
                            }),
                            (0, n.jsx)(v.Caption, {
                              className: g().title,
                              variant: "span",
                              size: "s",
                              weight: "bold",
                              lineClamp: 1,
                              children: i.title,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              [e, A, I, x, f, b, L, i.backgroundImageUrl, i.title, N],
            );
          return (0, n.jsx)(C.pl, {
            isEnabled: P,
            placement: "top",
            textVariant: "vibe",
            vibeTextVariant: i.type,
            renderChildren: T,
          });
        });
    },
    35443: function (t, e, i) {
      "use strict";
      i.d(e, {
        VibeCard: function () {
          return v;
        },
      });
      var n = i(75441),
        l = i(32358),
        a = i(62569),
        r = i(65067),
        s = i(93093),
        o = i(18333),
        u = i(59091),
        c = i(17392),
        d = i(13534),
        m = i(97141),
        p = i(68929),
        y = i.n(p);
      let v = (0, a.Pi)((t) => {
        let { vibe: e, children: i, className: a } = t,
          { pageId: p } = (0, d.lVB)(),
          [v, _] = (0, r.useState)(!1),
          { blockIdForFrom: C } = (0, d.qYG)(),
          {
            settings: { isMobile: b, isDesktopApplication: g },
            user: x,
          } = (0, d.oR4)(),
          { sendPlaySearchFeedback: k } = (0, d.sAF)(),
          h = (0, d.lAI)(),
          { isFreemium: f } = (0, d.NMB)(),
          {
            isPlaying: P,
            isPaused: V,
            togglePlay: j,
          } = (0, d.QhE)({
            seeds: e.seeds,
            pageIdForFrom: p,
            blockIdForFrom: C,
          }),
          B = (0, d.qsr)(),
          A = P || V,
          L = (0, r.useCallback)(() => {
            b && (v || P || (_(!0), null == k || k()), j());
          }, [b, P, v, k, j]),
          I = (0, s.W)(() => {
            B() || f || (v || P || (_(!0), null == k || k()), j(), h(!P));
          }),
          N = (0, r.useCallback)(
            () =>
              (0, n.jsx)(
                m.JM,
                {
                  isPlaying: P,
                  onClick: I,
                  className: (0, l.W)(y().playButton, y().control),
                  buttonVariant: "default",
                  withHover: !1,
                  iconSize: "xl",
                  variant: "filled",
                },
                e.getKey("PlayButton"),
              ),
            [P, I, e],
          ),
          T = (0, r.useMemo)(() => {
            let t = !x.hasPlus && !g;
            return x.isAuthorized
              ? (0, n.jsx)(m.pl, {
                  isEnabled: t,
                  placement: "bottom",
                  textVariant: "vibe",
                  vibeTextVariant: e.type,
                  renderChildren: N,
                })
              : (0, n.jsx)(m.Ld, {
                  isEnabled: t,
                  placement: "bottom",
                  textVariant: "vibe",
                  vibeTextVariant: e.type,
                  renderChildren: N,
                });
          }, [g, x.isAuthorized, x.hasPlus, e.type, N]),
          S = (0, r.useMemo)(
            () =>
              (0, n.jsxs)(u.Paper, {
                className: y().cover,
                radius: "round",
                withShadow: !0,
                onClick: L,
                children: [
                  (0, n.jsx)(m.BE, {
                    size: 200,
                    fit: "cover",
                    className: y().image,
                    style: { backgroundColor: e.backgroundColor },
                    src: e.imageUrl,
                    alt: e.title,
                    withAvatarReplace: !0,
                  }),
                  A &&
                    (0, n.jsx)(m.Up, {
                      stopAnimation: V,
                      className: y().playingAnimation,
                    }),
                  (0, n.jsx)(o.kk, {
                    className: (0, l.W)(
                      y().controls,
                      { [y().controls_isPlaying]: A },
                      y().important,
                    ),
                    bottomContainerClassName: y().playControl,
                    radius: "round",
                    playControl: T,
                  }),
                ],
              }),
            [L, e.backgroundColor, e.imageUrl, e.title, A, V, T],
          );
        return (0, n.jsx)(o.m7, {
          className: (0, l.W)(y().root, a),
          textPosition: "center",
          title: (0, n.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: e.title,
          }),
          description: (0, n.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 1,
            children: e.subtitle,
          }),
          view: S,
          children: i,
        });
      });
    },
    7797: function (t, e, i) {
      "use strict";
      i.d(e, {
        vY: function () {
          return f.EmptyPlaylistBlock;
        },
        Tq: function () {
          return P.HorizontalPlaylistCard;
        },
        ZL: function () {
          return V.PlaylistCard;
        },
        Nn: function () {
          return k;
        },
        d2: function () {
          return h;
        },
        VD: function () {
          return j.PlaylistsCarousel;
        },
        RE: function () {
          return a;
        },
        Q9: function () {
          return d;
        },
        VB: function () {
          return p;
        },
        PB: function () {
          return v;
        },
      });
      var n = i(22874),
        l = i(13534);
      let a = (t) => {
        var e, i;
        let {
          playlist: a,
          generatedPlaylistType: r,
          likesCount: s,
          trailer: o,
          tracksCount: u,
        } = t;
        return (0, n.pj)({
          isAvailable: null === (i = a.available) || void 0 === i || i,
          uuid: a.playlistUuid,
          title: a.title,
          uid: a.uid,
          kind: a.kind,
          coverUri: null === (e = a.cover) || void 0 === e ? void 0 : e.uri,
          generatedPlaylistType: r,
          likesCount: s,
          tracksCount: u,
          trailer: (0, l.GFX)(o),
        });
      };
      var r = i(98730),
        s = i(65067);
      (0, s.cache)(async (t, e) => {
        try {
          let {
            container: i,
            backendHostTld: n,
            locale: a,
            host: s,
            fullUrl: o,
            isRSC: u,
            requestUrl: c,
          } = await (0, l.rbP)();
          if (u)
            return {
              playlist: void 0,
              backendHostTld: n,
              locale: a,
              host: s,
              fullUrl: o,
              requestUrl: c,
            };
          let d = i.get(l.Eug),
            m = await d.getPlaylistWithTracksIds({
              userId: t,
              playlistKind: e,
              resumeStream: !1,
            });
          return (
            "not-found" === m.error && (0, r.notFound)(),
            {
              playlist: m,
              backendHostTld: n,
              locale: a,
              host: s,
              fullUrl: o,
              requestUrl: c,
            }
          );
        } catch (t) {
          return {
            playlist: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      }),
        (0, s.cache)(async (t) => {
          (0, l.aIc)(t) || (0, r.notFound)();
          try {
            let {
              container: e,
              backendHostTld: i,
              locale: n,
              host: a,
              fullUrl: s,
              isRSC: o,
              requestUrl: u,
            } = await (0, l.rbP)();
            if (o)
              return {
                playlist: void 0,
                backendHostTld: i,
                locale: n,
                host: a,
                fullUrl: s,
                requestUrl: u,
              };
            let c = e.get(l.lkR),
              d = await c.getPlaylist({
                playlistUuid: t,
                resumeStream: !1,
                richTracks: !1,
              });
            return (
              "not-found" === d.error && (0, r.notFound)(),
              {
                playlist: d,
                backendHostTld: i,
                locale: n,
                host: a,
                fullUrl: s,
                requestUrl: u,
              }
            );
          } catch (t) {
            return {
              playlist: void 0,
              backendHostTld: "",
              locale: null,
              host: "",
              fullUrl: null,
              requestUrl: null,
            };
          }
        });
      var o = i(10979);
      let u = (t) => ({
          uid: t.uid,
          login: t.login,
          name: t.name,
          sex: t.sex,
          verified: t.verified,
        }),
        c = (t) =>
          (0, n.pj)({
            userInfo: t.userInfo ? u(t.userInfo) : null,
            caseForms: t.caseForms ? (0, l.GA0)(t.caseForms) : null,
          }),
        d = (t) =>
          (0, n.pj)({
            ...(0, o.PV)(t),
            owner: t.owner ? u(t.owner) : void 0,
            description: t.description,
            tags: t.tags,
            modified: t.modified,
            madeFor: t.madeFor ? c(t.madeFor) : null,
          });
      var m = i(64353);
      let p = (t) => {
        var e, i;
        return (0, n.pj)({
          ...(0, o.PV)(t),
          artists:
            null !==
              (i =
                null == t
                  ? void 0
                  : null === (e = t.artists) || void 0 === e
                    ? void 0
                    : e.map(m.d)) && void 0 !== i
              ? i
              : [],
        });
      };
      var y = i(32399);
      let v = (t) => {
        var e, i;
        return (0, n.pj)({
          ...(0, o.PV)(t),
          tracks:
            null !==
              (i =
                null == t
                  ? void 0
                  : null === (e = t.tracks) || void 0 === e
                    ? void 0
                    : e.map(y.wM)) && void 0 !== i
              ? i
              : [],
        });
      };
      var _ = i(40892),
        C = i(92719);
      let b = n.V5.model("PlaylistOwner", {
          uid: n.V5.number,
          login: n.V5.string,
          name: n.V5.string,
          sex: n.V5.enumeration(Object.values(C.o)),
          verified: n.V5.boolean,
        }),
        g = n.V5.model("PlaylistOwner", {
          userInfo: n.V5.maybeNull(b),
          caseForms: n.V5.maybeNull(_.S2),
        }),
        x = n.V5.model("PlaylistTag", { id: n.V5.string, value: n.V5.string }),
        k = o.Cd.props({
          owner: n.V5.maybe(b),
          modified: n.V5.string,
          description: n.V5.maybe(n.V5.string),
          tags: n.V5.maybeNull(n.V5.array(x)),
          madeFor: n.V5.maybeNull(g),
        })
          .views((t) => ({
            get seeds() {
              var e;
              return [
                "playlist:"
                  .concat(
                    null === (e = t.owner) || void 0 === e ? void 0 : e.login,
                    "_",
                  )
                  .concat(t.kind),
              ];
            },
            get tagsString() {
              let { experiments: e } = (0, n.yj)(t);
              if (
                !e.checkExperiment(l.peG.WebEditorsFeatures, "on") ||
                !Array.isArray(t.tags) ||
                !t.tags.length
              )
                return null;
              return t.tags.map((t) => t.value).join(", ");
            },
          }))
          .actions((t) => ({
            changeDescription: (0, n.ls)(function* (e) {
              if (!(0, n.fh)(t)) return l.SLo.ERROR;
              if (t.description === e) return l.SLo.OK;
              if (e.length > o.Zn) return l.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: a } = (0, n.dU)(t);
              if (t.canUserChange) {
                let n = t.description;
                t.description = e;
                try {
                  let n = yield i.changePlaylistDescription({
                    description: e,
                    userId: t.uid,
                    playlistKind: t.kind,
                  });
                  return (t.description = n.description), l.SLo.OK;
                } catch (e) {
                  (t.description = n), a.error(e);
                }
              }
              return l.SLo.ERROR;
            }),
            changePlaylistCover: (0, n.ls)(function* (e) {
              if (!(0, n.fh)(t)) return l.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: a } = (0, n.dU)(t);
              try {
                let n = yield i.uploadPlaylistCover({
                  userId: t.uid,
                  formData: e,
                  playlistKind: t.kind,
                });
                return (t.coverUri = n.cover.uri), l.SLo.OK;
              } catch (t) {
                a.error(t);
              }
              return l.SLo.ERROR;
            }),
          }))
          .named("PlaylistMeta"),
        h = o.$h.props({ artists: n.V5.maybe(n.V5.array(m.Go)) });
      var f = i(59539),
        P = i(86133),
        V = i(8152),
        j = i(87352);
    },
    6794: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return a;
        },
      });
      var n = i(65067),
        l = i(9317);
      let a = (t) => {
        let { formatMessage: e } = (0, l.Z)();
        return (0, n.useMemo)(() => {
          let i = "";
          t.isLiked && !t.actualLikesCount
            ? (i = e({ id: "entity-names.has-your-like" }))
            : "number" == typeof t.actualLikesCount &&
              (i =
                t.actualLikesCount > 0
                  ? e(
                      { id: "entity-names.likes-counter" },
                      { counter: t.actualLikesCount },
                    )
                  : e({ id: "entity-names.likes-counter-empty" }));
          let n = e(
            { id: "entity-names.playlist-name" },
            { playlistName: t.title },
          );
          return "".concat(n, " ").concat(i);
        }, [e, t]);
      };
    },
    59539: function (t, e, i) {
      "use strict";
      i.d(e, {
        EmptyPlaylistBlock: function () {
          return m;
        },
      });
      var n = i(75441),
        l = i(32358),
        a = i(65067),
        r = i(15937),
        s = i(35846),
        o = i(69756),
        u = i(17392),
        c = i(63950),
        d = i.n(c);
      let m = (t) => {
        let { className: e, isEmptySearch: i } = t,
          c = (0, a.useMemo)(
            () =>
              i
                ? (0, n.jsx)(r.Z, { id: "search-results.not-found-title" })
                : (0, n.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [i],
          ),
          m = (0, a.useMemo)(
            () =>
              i
                ? (0, n.jsx)(r.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, n.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [i],
          );
        return (0, n.jsxs)("div", {
          className: (0, l.W)(d().root, e),
          ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK),
          children: [
            (0, n.jsx)("div", {
              className: d().iconBackground,
              children: (0, n.jsx)(o.Icon, {
                variant: "search",
                size: "l",
                className: d().icon,
                ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_ICON),
              }),
            }),
            (0, n.jsx)(u.Heading, {
              variant: "h3",
              size: "xs",
              className: d().title,
              ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),
              children: c,
            }),
            (0, n.jsx)(u.Caption, {
              variant: "span",
              size: "l",
              className: d().subtitle,
              ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
              children: m,
            }),
          ],
        });
      };
    },
    86133: function (t, e, i) {
      "use strict";
      i.d(e, {
        HorizontalPlaylistCard: function () {
          return j;
        },
      });
      var n = i(75441),
        l = i(32358),
        a = i(62569),
        r = i(65067),
        s = i(9317),
        o = i(15937),
        u = i(4875),
        c = i(35846),
        d = i(84638),
        m = i(93093),
        p = i(91307),
        y = i(69756),
        v = i(17392),
        _ = i(64353),
        C = i(13534),
        b = i(97141),
        g = i(6794),
        x = i(10979),
        k = i(75908),
        h = i.n(k);
      let f = (0, a.Pi)((t) => {
        var e;
        let { className: i, playlist: a, likeIconSize: s = "xxs" } = t,
          { user: o, trailer: c } = (0, C.oR4)(),
          d = (0, C.qsr)(),
          { sendLikeSearchFeedback: p } = (0, C.sAF)(),
          v = (0, x.SB)(a),
          [_, g] = (0, r.useState)(!1),
          k = (0, m.W)(async () => {
            _ || a.isLiked || (g(!0), null == p || p()), await v();
          }),
          f = (0, C.FTC)(),
          P = (0, m.W)((t) => {
            if ((t.stopPropagation(), d())) {
              t.preventDefault();
              return;
            }
            c.openPlaylistTrailer(a.id), f(u.OB.Playlist, a.id);
          });
        return (0, n.jsxs)("div", {
          className: (0, l.W)(h().root, h().controls, i, {
            [h().controls_disabled]: !a.isAvailable,
          }),
          children: [
            a.isAvailable &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(b.FM, {
                    fallback: (0, n.jsx)(b.dJ, {
                      size: "xs",
                      iconSize: s,
                      className: (0, l.W)(h().item, h().likeIcon),
                      isLiked: a.isLiked,
                      onClick: k,
                      disabled: !o.isAuthorized,
                    }),
                  }),
                  (null === (e = a.trailer) || void 0 === e
                    ? void 0
                    : e.isAvailable) &&
                    (0, n.jsx)(b.FM, {
                      fallback: (0, n.jsx)(b.eP, {
                        className: (0, l.W)(h().item, h().trailerIcon),
                        iconSize: "xs",
                        variant: "text",
                        onClick: P,
                        withRipple: !1,
                      }),
                    }),
                ],
              }),
            (0, n.jsx)("div", {
              className: (0, l.W)(h().item, h().item_buttonArrow),
              children: (0, n.jsx)(y.Icon, {
                className: b.$C.buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
      var P = i(53948),
        V = i.n(P);
      let j = (0, a.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            pageId: a,
            coverClassName: x,
            playButtonIconSize: k,
            likeIconSize: h,
          } = t,
          { ref: P, intersectionPropertyId: j } = (0, C.VfV)(),
          { from: B } = (0, C.MhG)({ pageId: a }),
          [A, L] = (0, r.useState)(!1),
          I = (0, C.lAI)(),
          N = (0, g.z)(i),
          T = i.title || "",
          { formatMessage: S, formatNumber: w } = (0, s.Z)(),
          z = (0, C.qsr)(),
          { sendNavigateSearchFeedback: E, sendPlaySearchFeedback: R } = (0,
          C.sAF)(),
          W = (0, C.zxW)(),
          {
            isPlaying: F,
            isCurrent: M,
            togglePlay: U,
          } = (0, C.qmq)({
            playContextParams: {
              contextData: {
                type: d.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: B,
              },
              loadContextMeta: !0,
            },
          }),
          O = (0, C.s0h)(i.url),
          Y = (0, C.s0h)(i.url, !0),
          K = (0, _.ik)(Y, O),
          q = (0, m.W)((t) => {
            null == E || E(),
              W({ to: u.qU.PlaylistScreen }),
              t.preventDefault(),
              K(t);
          }),
          H = (0, m.W)(() => {
            z() || (A || F || (L(!0), null == R || R()), U(), I(!F));
          }),
          D = (0, m.W)((t) => {
            (0, p.m)(t, b.$C.ripple), q(t);
          }),
          Z = (0, m.W)((t) => {
            t.stopPropagation(), q(t);
          }),
          G = (0, r.useCallback)(
            (t) =>
              (0, n.jsx)(b.Df, {
                isAvailable: i.isAvailable,
                isDisliked: !1,
                coverUri: i.coverUri,
                title: T,
                className: (0, l.W)(b.$C.playButtonCell, x),
                alt: S(
                  { id: "entity-names.playlist-name" },
                  { playlistName: T },
                ),
                ...t,
              }),
            [i, T, x, S],
          ),
          $ =
            null == G
              ? void 0
              : G({
                  onPlayButtonClick: H,
                  isPlaying: F,
                  isCurrent: M,
                  playButtonIconSize: k,
                }),
          Q = (0, r.useMemo)(
            () =>
              i.url && i.isAvailable
                ? (0, n.jsx)(b.rU, {
                    className: (0, l.W)(b.$C.text, b.$C.titleLink),
                    href: i.url,
                    onClick: Z,
                    children: T,
                  })
                : (0, n.jsx)(v.Caption, {
                    className: (0, l.W)(b.$C.text, b.$C.titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: T,
                  }),
            [Z, i.isAvailable, i.url, T],
          ),
          J = (0, r.useMemo)(() => {
            if (void 0 === i.actualLikesCount || void 0 === i.tracksCount)
              return;
            let t = (0, n.jsx)(v.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                "aria-hidden": !0,
                children: "•",
              }),
              e = i.isLiked ? "likedVariant" : "likeVariant",
              l = ""
                .concat(N, " ")
                .concat(
                  S(
                    { id: "entity-names.tracks-count" },
                    { value: i.tracksCount },
                  ),
                );
            return (0, n.jsxs)("div", {
              className: V().description,
              "aria-label": l,
              children: [
                (0, n.jsxs)("div", {
                  className: V().likesCount,
                  children: [
                    (0, n.jsx)(y.Icon, {
                      className: V().icon,
                      variant: e,
                      size: "xxs",
                    }),
                    (0, n.jsx)(v.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: w(i.actualLikesCount),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: V().tracksCount,
                  children: [
                    t,
                    (0, n.jsx)(v.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: (0, n.jsx)(o.Z, {
                        id: "entity-names.tracks-count",
                        values: { value: w(i.tracksCount) },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }, [S, w, N, i.actualLikesCount, i.isLiked, i.tracksCount]);
        return (0, n.jsxs)(b.Md, {
          ref: P,
          "data-intersection-property-id": j,
          className: (0, l.W)(
            b.$C.root,
            { [b.$C.root_disabled]: !i.isAvailable },
            e,
          ),
          "aria-label": i.title || S({ id: "entity-names.playlist" }),
          onClick: D,
          ...(0, c.BA)(c.bG.playlist.HORIZONTAL_PLAYLIST_CARD),
          children: [
            $,
            (0, n.jsx)(b.u, {
              isDisabled: !i.isAvailable,
              title: Q,
              description: J,
            }),
            (0, n.jsx)(f, { playlist: i, likeIconSize: h }),
          ],
        });
      });
    },
    8152: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistCard: function () {
          return B;
        },
      });
      var n = i(75441),
        l = i(32358),
        a = i(62569),
        r = i(65067),
        s = i(9317),
        o = i(4875),
        u = i(35846),
        c = i(84638),
        d = i(93093),
        m = i(14218),
        p = i(18333),
        y = i(69756),
        v = i(59091),
        _ = i(17392),
        C = i(64353),
        b = i(10979),
        g = i(13534),
        x = i(97141),
        k = i(6794),
        h = i(27376),
        f = i(50705);
      let P = (0, a.Pi)((t) => {
        var e;
        let { playlist: i, onOpenChange: l, open: a, ...r } = t,
          { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: m } =
            (0, g.vLf)(),
          {
            experiments: p,
            settings: { isMobile: y },
            trailer: v,
          } = (0, g.oR4)(),
          _ = (0, b.SB)(i),
          C = (0, b.BV)(i),
          k = (0, g.FTC)(),
          { formatMessage: P } = (0, s.Z)(),
          V = (0, g.qsr)(),
          j = p.checkExperiment(g.peG.WebEditorsFeatures, "on"),
          B = (0, f.q3)({
            entityVariant: g.gus.PLAYLIST,
            urlParams: { id: i.uid, kind: i.kind },
          });
        (0, g.ZP4)(a);
        let A = (0, d.W)(() => {
          if (c) {
            m();
            return;
          }
          V() || (v.openPlaylistTrailer(i.id), k(o.OB.Playlist, i.id));
        });
        return (0, n.jsxs)(h.v2, {
          title: i.title,
          onOpenChange: l,
          open: a,
          offsetOptions: 10,
          isMobile: y,
          ariaLabel: P({ id: "interface-actions.context-menu" }),
          containerProps: (0, u.BA)(u.bG.playlist.PLAYLIST_CONTEXT_MENU),
          ...r,
          children: [
            j &&
              (0, n.jsx)(f.ZY, {
                entityVariant: g.gus.PLAYLIST,
                adminUrl: i.isFavouritePlaylist ? void 0 : B,
              }),
            !y && (0, n.jsx)(x.Zd, { onClick: C, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, n.jsx)(x.xZ, { onClick: _, isLiked: i.isLiked }),
            (null === (e = i.trailer) || void 0 === e
              ? void 0
              : e.isAvailable) &&
              (0, n.jsx)(x.NB, { onClick: A, disabled: !i.isAvailable }),
          ],
        });
      });
      var V = i(96297),
        j = i.n(V);
      let B = (0, a.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            children: a,
            contentLinesCount: h,
            customDescription: f,
          } = t,
          { ref: V, intersectionPropertyId: B } = (0, g.VfV)(),
          { trailer: A, user: L } = (0, g.oR4)(),
          { from: I, utmLink: N } = (0, g.MhG)({
            contextId: i.uuid,
            contextType: c.A.Playlist,
          }),
          { formatMessage: T } = (0, s.Z)(),
          {
            sendLikeSearchFeedback: S,
            sendNavigateSearchFeedback: w,
            sendPlaySearchFeedback: z,
          } = (0, g.sAF)(),
          [E, R] = (0, r.useState)(!1),
          [W, F] = (0, r.useState)(!1),
          [M, U] = (0, r.useState)(!1),
          O = (0, k.z)(i),
          Y = (0, b.SB)(i),
          K = (0, b.BV)(i),
          q = (0, g.zxW)(),
          H = (0, g.lAI)(),
          D = (0, g.s0h)(i.url),
          Z = (0, g.s0h)(i.url, !0),
          G = (0, C.ik)(Z, D),
          $ = (0, g.FTC)(),
          Q = (0, g.qsr)(),
          J = (0, d.W)((t) => {
            if ((t.stopPropagation(), Q())) {
              t.preventDefault();
              return;
            }
            A.setUtmLink(N),
              A.openPlaylistTrailer(i.id),
              $(o.OB.Playlist, i.id);
          }),
          [X, tt] = (0, r.useState)(!1),
          { isPlaying: te, togglePlay: ti } = (0, g.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: I,
                utmLink: N,
              },
              loadContextMeta: !0,
            },
          }),
          tn = (0, d.W)(() => {
            q({ to: o.qU.PlaylistScreen }), null == w || w();
          }),
          tl = (0, d.W)((t) => {
            tn(), G(t);
          }),
          ta = (0, d.W)(() => {
            Q() || (E || te || (R(!0), null == z || z()), ti(), H(!te));
          }),
          tr = (0, d.W)(() => {
            W || i.isLiked || (F(!0), null == S || S()), Y();
          }),
          ts = (0, d.W)((t) => {
            t.preventDefault(), t.stopPropagation();
          }),
          to = (0, d.W)((t) => {
            U(t), tt(t);
          }),
          tu = (0, r.useMemo)(() => {
            var t;
            return f
              ? (0, n.jsx)(
                  _.Caption,
                  {
                    variant: "span",
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    lineClamp: 2,
                    children: f,
                  },
                  i.getKey("description"),
                )
              : (null === (t = i.artists) || void 0 === t ? void 0 : t.length)
                ? (0, n.jsx)(
                    C.jO,
                    {
                      className: j().artists,
                      artists: i.artists,
                      lineClamp: 1,
                      linkClassName: j().artistLink,
                      captionSize: "s",
                    },
                    i.getKey("description"),
                  )
                : void 0;
          }, [f, i]),
          tc = (0, m.V)(() => {
            if (!i.isFavouritePlaylist)
              return (0, n.jsx)(
                x.dJ,
                {
                  className: (0, l.W)(j().likeButton, j().control),
                  isLiked: i.isLiked,
                  onClick: tr,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                  disabled: !L.isAuthorized,
                },
                i.getKey("LikeButton"),
              );
          }),
          td = (0, r.useMemo)(() => {
            var t;
            if (
              null == i
                ? void 0
                : null === (t = i.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable
            )
              return (0, n.jsx)(
                x.xf,
                {
                  children: (0, n.jsx)(
                    x.eP,
                    {
                      className: (0, l.W)(j().trailerButton, j().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: J,
                    },
                    i.getKey("TrailerButton"),
                  ),
                },
                i.getKey("PlaylilstCardTrailerTooltip"),
              );
          }, [J, i]),
          tm = (0, r.useMemo)(
            () =>
              (0, n.jsx)(
                x.RT,
                {
                  onClick: K,
                  isPinned: i.isPinned,
                  className: (0, l.W)(j().pinButton, j().control),
                  withRipple: !1,
                },
                i.getKey("PinButton"),
              ),
            [K, i],
          ),
          tp = (0, r.useMemo)(
            () =>
              (0, n.jsx)(v.Paper, {
                className: j().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.playlist.PLAYLIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: j().coverBlock,
                  onClick: tl,
                  children: [
                    (0, n.jsx)(x.BE, {
                      className: j().image,
                      src: i.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: O,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsx)(p.kk, {
                      isVisible: M || X,
                      className: j().controls,
                      playControl: (0, n.jsx)(
                        x.JM,
                        {
                          className: (0, l.W)(j().playButton, j().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: ta,
                          isPlaying: te,
                          disabled: !i.isAvailable,
                        },
                        i.getKey("PlayButton"),
                      ),
                      likeControl: tc,
                      menuControl: (0, n.jsx)(
                        P,
                        {
                          playlist: i,
                          onOpenChange: to,
                          open: M,
                          onClick: ts,
                          className: (0, l.W)(j().menuButton, j().control),
                          icon: (0, n.jsx)(y.Icon, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, u.BA)(
                            u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        },
                        i.getKey("PlaylistContextMenu"),
                      ),
                      pinControl: tm,
                      trailerControl: td,
                    }),
                  ],
                }),
              }),
            [tl, i, O, M, X, ta, te, tc, to, ts, tm, td],
          ),
          ty = !!i.actualLikesCount && !i.isLikesCountHidden;
        return (0, n.jsxs)(p.m7, {
          ref: V,
          "aria-label": O,
          className: (0, l.W)(j().root, e),
          title: (0, n.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, u.BA)(u.bG.playlist.PLAYLIST_TITLE),
            children: (0, n.jsx)(x.rU, {
              className: j().titleLink,
              href: i.url,
              onClick: tn,
              children: i.title,
            }),
          }),
          srTitle: (0, n.jsx)(x.rU, {
            href: i.url,
            onClick: tn,
            children: i.title,
          }),
          "data-intersection-property-id": B,
          contentLinesCount: h,
          view: tp,
          description: tu,
          ...(0, u.BA)(u.bG.playlist.PLAYLIST_ITEM),
          children: [
            ty &&
              (0, n.jsx)(x.DB, {
                ariaLabel: T(
                  { id: "entity-names.likes-counter" },
                  { counter: i.actualLikesCount },
                ),
                likesCount: i.actualLikesCount,
                isLiked: i.isLiked,
                handleLikeClick: Y,
              }),
            a,
          ],
        });
      });
    },
    87352: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistsCarousel: function () {
          return o;
        },
      });
      var n = i(75441),
        l = i(65067),
        a = i(97141),
        r = i(8152);
      let s = (t) => {
          let {
            forwardRef: e,
            isShimmerVisible: i,
            isShimmerActive: l,
            title: s,
            description: o,
            playlists: u,
            containerClassName: c,
            className: d,
            headerClassName: m,
            viewAllActionLink: p,
            headingVariant: y,
            ...v
          } = t;
          return (0, n.jsx)(a.HY, {
            isShimmerVisible: i,
            isShimmerActive: l,
            className: d,
            headerClassName: m,
            containerClassName: c,
            ref: e,
            title: s,
            description: o,
            viewAllActionLink: p,
            headingVariant: y,
            ...v,
            children:
              null == u
                ? void 0
                : u.map((t) =>
                    (0, n.jsx)(
                      r.PlaylistCard,
                      { playlist: t, contentLinesCount: 3 },
                      t.key,
                    ),
                  ),
          });
        },
        o = (0, l.forwardRef)((t, e) => (0, n.jsx)(s, { forwardRef: e, ...t }));
    },
    81814: function (t) {
      t.exports = {
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
    68929: function (t) {
      t.exports = {
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
    63950: function (t) {
      t.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    75908: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__mf9o_",
        item: "ControlsBar_item__4YJMp",
        item_buttonArrow: "ControlsBar_item_buttonArrow__9hTqa",
        controls: "ControlsBar_controls__DcFpX",
        likeIcon: "ControlsBar_likeIcon__g8y02",
        trailerIcon: "ControlsBar_trailerIcon__iH6eY",
        controls_disabled: "ControlsBar_controls_disabled___hlf6",
      };
    },
    53948: function (t) {
      t.exports = {
        description: "HorizontalPlaylistCard_description__KYHZF",
        likesCount: "HorizontalPlaylistCard_likesCount__rgUhr",
        tracksCount: "HorizontalPlaylistCard_tracksCount__ZdjzM",
        icon: "HorizontalPlaylistCard_icon__LHymu",
      };
    },
    96297: function (t) {
      t.exports = {
        root: "PlaylistCard_root__i3pR4",
        controls: "PlaylistCard_controls__Ej8Rz",
        cover: "PlaylistCard_cover__tpK5L",
        coverBlock: "PlaylistCard_coverBlock__1slsN",
        image: "PlaylistCard_image__Li6oy",
        titleLink: "PlaylistCard_titleLink__H8qEc",
        artists: "PlaylistCard_artists__HtVIF",
        artistLink: "PlaylistCard_artistLink__jx3KB",
        playButton: "PlaylistCard_playButton__eaduk",
        likeButton: "PlaylistCard_likeButton__RYXJz",
        menuButton: "PlaylistCard_menuButton__jFcWr",
        pinButton: "PlaylistCard_pinButton__jhWnL",
        trailerButton: "PlaylistCard_trailerButton__Qjg_U",
        control: "PlaylistCard_control__73YUq",
      };
    },
  },
]);
