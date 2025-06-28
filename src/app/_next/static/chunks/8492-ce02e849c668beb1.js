(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8492],
  {
    61039: function (e, t, i) {
      "use strict";
      i.d(t, {
        xq: function () {
          return f.ClipCard;
        },
        Uh: function () {
          return b.U;
        },
        Bp: function () {
          return x.ClipContextMenu;
        },
        x$: function () {
          return m;
        },
        Op: function () {
          return g.ClipsCarousel;
        },
        ow: function () {
          return h.ClipsCarouselContent;
        },
        uF: function () {
          return _;
        },
        l8: function () {
          return I.HorizontalClipCard;
        },
        dR: function () {
          return n;
        },
        et: function () {
          return o;
        },
        m0: function () {
          return u;
        },
        gw: function () {
          return c;
        },
        kJ: function () {
          return p.useClipDisclaimer;
        },
      });
      var a = i(97472),
        r = i(64353);
      let n = (e) => {
        var t;
        if (!e)
          return {
            clipId: 0,
            title: "",
            artists: [],
            thumbnail: "",
            previewUrl: "",
            duration: 0,
            disclaimers: [],
            trackIds: [],
          };
        let i = [];
        return (
          (null === (t = e.disclaimers) || void 0 === t
            ? void 0
            : t.every((e) => Object.values(a.e).includes(e))) &&
            (i = e.disclaimers),
          {
            clipId: e.clipId,
            title: e.title,
            thumbnail: e.thumbnail,
            previewUrl: e.previewUrl,
            duration: e.duration,
            disclaimers: i,
            version: e.version,
            artists: e.artists.map((e) => {
              let t = (0, r.zg)(e),
                i = Number(t.id);
              return { ...t, id: isNaN(i) ? 0 : i };
            }),
            trackIds: [],
          }
        );
      };
      var l = i(22874),
        s = i(14924);
      let o = (e) => {
        var t;
        let i =
          null === (t = e.artists) || void 0 === t
            ? void 0
            : t.map((e) => (0, r.tR)({ artist: e }));
        return (0, l.pj)({ ...(0, s.rK)(e), artists: i });
      };
      var d = i(13534);
      let u = (e) => {
          var t, i;
          let { clip: a, artists: n } = e,
            { available: s, disclaimers: o } = (0, d.NuW)(a);
          return (0, l.pj)({
            clipId: a.id,
            title: a.title,
            thumbnail: null === (t = a.cover) || void 0 === t ? void 0 : t.uri,
            previewUrl:
              null === (i = a.cover) || void 0 === i ? void 0 : i.videoUrl,
            duration: a.duration,
            artists:
              null == n ? void 0 : n.map((e) => (0, r.tR)({ artist: e })),
            isAvailable: s,
            disclaimers: o,
          });
        },
        c = (e, t) => {
          if (!e) return { clipIds: [], activeClipIndex: 0 };
          let i = e
              .split(",")
              .map(Number)
              .filter((e) => e >= 0),
            a = (0, s.wj)(i, t);
          return { clipIds: i, activeClipIndex: a };
        };
      (0, i(65067).cache)(async (e) => {
        try {
          let {
            container: t,
            backendHostTld: i,
            locale: a,
            host: r,
            fullUrl: n,
            isRSC: l,
            requestUrl: s,
          } = await (0, d.rbP)();
          if (l || !e)
            return {
              clips: void 0,
              backendHostTld: i,
              locale: a,
              host: r,
              fullUrl: n,
              requestUrl: s,
            };
          let o = t.get(d.m_q),
            u = await o.getClip({ clipIds: [e] }),
            c = n ? new URL(n) : void 0;
          c &&
            ((c.search = ""),
            c.searchParams.set(d.wxR.IDS, String(null != e ? e : "")));
          let p = null == c ? void 0 : c.toString();
          return {
            clip: null == u ? void 0 : u[0],
            backendHostTld: i,
            locale: a,
            host: r,
            fullUrl: n,
            requestUrl: s,
            canonical: p,
          };
        } catch (e) {
          return {
            clips: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      });
      var p = i(59021);
      let m = s.Vc.props({ artists: l.V5.array(r.Go) }).views((e) => ({
        get hasArtists() {
          return e.artists.length > 0;
        },
      }));
      var C = i(40892);
      let v = l.V5.model("Credit", { title: l.V5.string, value: l.V5.string }),
        _ = l.V5.model("CurrentClipInfo", {
          id: l.V5.maybeNull(l.V5.number),
          clip: l.V5.maybeNull(m),
          clipLoadingState: l.V5.enumeration(Object.values(d.Gui)),
          creditsLoadingState: l.V5.enumeration(Object.values(d.Gui)),
          credits: l.V5.maybeNull(l.V5.array(v)),
          modal: C.KL,
        })
          .views((e) => ({
            get isClipIdle() {
              return e.clipLoadingState === d.Gui.IDLE;
            },
            get isClipLoading() {
              return e.clipLoadingState === d.Gui.PENDING;
            },
            get isClipRejected() {
              return e.clipLoadingState === d.Gui.REJECT;
            },
            get isCreditsIdle() {
              return e.creditsLoadingState === d.Gui.IDLE;
            },
            get isCreditsLoading() {
              return e.creditsLoadingState === d.Gui.PENDING;
            },
            get isCreditsRejected() {
              return e.creditsLoadingState === d.Gui.REJECT;
            },
            get isRejected() {
              return (
                e.creditsLoadingState === d.Gui.REJECT &&
                e.clipLoadingState === d.Gui.REJECT
              );
            },
          }))
          .actions((e) => ({
            setClipId(t) {
              e.id = t;
            },
            getClip: (0, l.ls)(function* () {
              let { clipsResource: t, modelActionsLogger: i } = (0, l.dU)(e);
              if (e.id && e.clipLoadingState !== d.Gui.PENDING)
                try {
                  e.clipLoadingState = d.Gui.PENDING;
                  let [i] = yield t.getClip({ clipIds: [e.id] });
                  if (!i) return;
                  (e.clip = o(i)), (e.clipLoadingState = d.Gui.RESOLVE);
                } catch (t) {
                  i.error(t), (e.clipLoadingState = d.Gui.REJECT);
                }
            }),
            getCreditsInfo: (0, l.ls)(function* () {
              let { clipsResource: t, modelActionsLogger: i } = (0, l.dU)(e);
              if (!e.id || e.creditsLoadingState === d.Gui.PENDING) return null;
              try {
                e.creditsLoadingState = d.Gui.PENDING;
                let i = yield t.getCredits({ clipId: e.id });
                (e.credits = (0, l.pj)(null == i ? void 0 : i.credits)),
                  (e.creditsLoadingState = d.Gui.RESOLVE);
              } catch (t) {
                i.error(t), (e.creditsLoadingState = d.Gui.REJECT);
              }
              return null;
            }),
            reset() {
              (e.id = null),
                (e.clip = null),
                (e.clipLoadingState = d.Gui.IDLE),
                (e.creditsLoadingState = d.Gui.IDLE),
                (e.credits = null);
            },
          }));
      var f = i(4277),
        b = i(17784),
        x = i(54224),
        g = i(8745),
        h = i(13997),
        I = i(151);
    },
    59021: function (e, t, i) {
      "use strict";
      i.d(t, {
        useClipDisclaimer: function () {
          return s;
        },
      });
      var a = i(65067),
        r = i(77282),
        n = i(93093),
        l = i(13534);
      let s = (e) => {
        let { clip: t, callback: i, disclaimerRejectHandler: s } = e,
          {
            disclaimerModalData: o,
            modals: { disclaimerModal: d },
          } = (0, l.oR4)(),
          u = (0, a.useRef)(String((0, r.Z)())),
          c = (0, a.useRef)(!1),
          p = (0, l.uK4)().get(l.ceh);
        return (
          (0, a.useEffect)(() => {
            o.isUnsafeDisclaimerConfirmed &&
              o.id === u.current &&
              !c.current &&
              (null == i || i(), (c.current = !0));
          }, [i, o.id, o.isUnsafeDisclaimerConfirmed]),
          (0, n.W)(async (e) => {
            let a = p.get(l.BUb.ExEx);
            if (
              (null == t ? void 0 : t.isUnsafeLegal) &&
              (null == a
                ? void 0
                : a.includes("".concat(l.coP.CLIP, "_").concat(t.clipId)))
            ) {
              null == i || i();
              return;
            }
            if (
              (null == t ? void 0 : t.isLegalRejected) ||
              (null == t ? void 0 : t.isUnsafeLegal)
            ) {
              null == e || e.preventDefault(),
                await o.getDisclaimerData({
                  entityId: t.clipId,
                  entityType: l.coP.CLIP,
                  disclaimerId: null == t ? void 0 : t.modalDisclaimerId,
                }),
                t.isUnsafeLegal && o.setType(l.Gq.UNSAFE),
                s && o.setDisclaimerRejectHandler(s),
                o.setId(u.current),
                o.setEntityId(t.clipId),
                o.setEntityType(l.coP.CLIP),
                o.setShouldCloseModalOnOutsidePress(!1),
                o.setShouldCloseModalOnEscape(!1),
                (c.current = !1),
                d.open();
              return;
            }
            null == e || e.preventDefault(), null == i || i();
          })
        );
      };
    },
    4277: function (e, t, i) {
      "use strict";
      i.d(t, {
        ClipCard: function () {
          return V;
        },
      });
      var a = i(75441),
        r = i(32358),
        n = i(34073),
        l = i(62569),
        s = i(65067),
        o = i(9317),
        d = i(63660),
        u = i(35846),
        c = i(84638),
        p = i(93093),
        m = i(18333),
        C = i(39054),
        v = i(59091),
        _ = i(17392),
        f = i(64353),
        b = i(14924),
        x = i(13534),
        g = i(97141),
        h = i(59021),
        I = i(71537),
        y = i.n(I);
      let V = (0, l.Pi)((e) => {
        let {
            titleClassName: t,
            artistLinkClassName: i,
            clip: l,
            withVideo: I = !0,
            artistIdWithoutLink: V,
            viewUuid: A,
            shouldOpenModalOnCardClick: N = !0,
          } = e,
          { fullscreenVideoPlayer: j } = (0, x.oR4)(),
          { formatMessage: S } = (0, o.Z)(),
          L = (0, b.Li)(),
          { from: R } = (0, x.MhG)({
            pageId: x.Rhz.VIDEO_PLAYER,
            contextId: j.state.contextId,
            contextType: c.A.Various,
            blockId: x.aUg.CLIPS,
          }),
          k = (0, b.g9)(A),
          E = (0, b.gR)(A),
          { ref: M, intersectionPropertyId: P } = (0, x.VfV)({ callback: k }),
          U = (0, s.useRef)(null),
          w = I && l.previewUrl,
          D = (0, p.W)(() => {
            U.current && ((U.current.currentTime = 0), U.current.play());
          }),
          O = (0, s.useMemo)(() => (0, n.Z)(D, 500), [D]),
          T = (0, p.W)(() => {
            var e;
            null === (e = U.current) || void 0 === e || e.pause();
          }),
          G = (0, s.useMemo)(() => j.ids.indexOf(l.clipId), [j, l.clipId]),
          { isPlaying: B, togglePlay: z } = (0, x.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Various,
                meta: { id: x.i9R.VARIOUS_CLIP_CONTEXT },
                from: R,
              },
              queueParams: { index: G },
              entitiesData: j.entitiesData,
              loadContextMeta: !1,
            },
            entityId: String(l.clipId),
            sonataState: j.state,
            playbackId: x.jiA.CLIP,
          }),
          F = N ? l.url : (0, b.Fw)(j.ids, G),
          W = (0, x.s0h)(F, !0),
          H = (0, p.W)(() => {
            N ? (L([l.clipId]), E()) : B || z();
          }),
          Z = (0, h.useClipDisclaimer)({ clip: l, callback: H }),
          Y = (0, h.useClipDisclaimer)({ clip: l, callback: W }),
          q = (0, f.ik)(Y, Z),
          K = S({ id: "entity-names.clip-name" }, { clipName: l.title }),
          J = (0, s.useMemo)(
            () =>
              l.isAvailable
                ? (0, a.jsxs)(v.Paper, {
                    className: (0, r.W)(y().view, y().cover),
                    onMouseEnter: O,
                    onMouseLeave: T,
                    onClick: q,
                    children: [
                      w &&
                        (0, a.jsx)("video", {
                          className: y().media,
                          ref: U,
                          poster:
                            l.thumbnail &&
                            (0, d.createAvatarVideoUrl)(l.thumbnail, 1280),
                          playsInline: !0,
                          muted: !0,
                          loop: !0,
                          "aria-hidden": !0,
                          children: (0, a.jsx)("source", {
                            src: l.previewUrl,
                            type: "video/mp4",
                          }),
                        }),
                      l.thumbnail &&
                        (0, a.jsx)(C.Image, {
                          className: y().image,
                          "aria-hidden": !0,
                          src: l.thumbnail,
                          fit: "cover",
                          withAvatarReplace: !0,
                          size: 1280,
                          createUrlReplacer: d.createAvatarVideoUrl,
                        }),
                      void 0 !== l.duration &&
                        (0, a.jsx)(_.Caption, {
                          variant: "span",
                          className: y().duration,
                          type: "entity",
                          size: "xs",
                          weight: "medium",
                          children: (0, x.gf)(l.duration, l.duration),
                        }),
                      (0, a.jsx)(g.JM, {
                        variant: "filled",
                        className: y().playButton,
                        onClick: q,
                        iconSize: "xl",
                      }),
                    ],
                  })
                : (0, a.jsx)(v.Paper, {
                    className: y().unavailableCover,
                    children: (0, a.jsx)(C.FallbackImage, {
                      className: y().image,
                      iconVariant: "unavailable",
                      ...(0, u.BA)(u.r9.ENTITY_COVER_FALLBACK_IMAGE),
                    }),
                  }),
            [l.isAvailable, l.thumbnail, l.previewUrl, l.duration, O, T, q, w],
          ),
          X = (0, s.useMemo)(
            () =>
              l.hasArtists
                ? (0, a.jsx)(
                    f.jO,
                    {
                      linkClassName: (0, r.W)(y().artistLink, i),
                      artists: l.artists,
                      lineClamp: 1,
                      withAllArtistsTitle: !0,
                      artistIdWithoutLink: V,
                    },
                    l.getKey("SeparatedArtists"),
                  )
                : null,
            [V, l, i],
          );
        return (0, a.jsx)(m.m7, {
          ref: M,
          className: y().root,
          explicitMarkComponent:
            l.explicitDisclaimer &&
            (0, a.jsx)(
              g.$i,
              {
                getDescriptionTexts: l.getDescriptionTexts,
                variant: l.explicitDisclaimer,
                size: "xxs",
              },
              l.getKey("ExplicitMarkIcon"),
            ),
          "aria-label": K,
          srTitle: (0, a.jsx)(g.rU, { href: F, onClick: q, children: K }),
          title: (0, a.jsxs)(
            _.Caption,
            {
              className: (0, r.W)(y().title, t),
              variant: "div",
              type: "entity",
              size: "m",
              weight: "medium",
              lineClamp: 1,
              children: [
                (0, a.jsx)(g.rU, {
                  className: y().titleLink,
                  href: F,
                  "aria-label": K,
                  onClick: q,
                  children: l.title,
                }),
                l.version &&
                  (0, a.jsx)(_.Caption, {
                    className: y().version,
                    variant: "span",
                    children: " ".concat(l.version),
                  }),
              ],
            },
            l.getKey("Title"),
          ),
          "data-intersection-property-id": P,
          view: J,
          description: X,
          ...(0, u.BA)(u.bG.clip.CLIP_CARD),
        });
      });
    },
    17784: function (e, t, i) {
      "use strict";
      i.d(t, {
        U: function () {
          return o;
        },
      });
      var a = i(75441),
        r = i(28676),
        n = i(97141),
        l = i(26064),
        s = i.n(l);
      let o = (e) => {
        let { isActive: t } = e;
        return (0, a.jsxs)("div", {
          className: s().root,
          "aria-live": t ? "polite" : "off",
          "aria-busy": t,
          children: [
            (0, a.jsx)(r.Shimmer, {
              isActive: t,
              className: s().cover,
              radius: "l",
            }),
            (0, a.jsx)(n.AH, { isActive: t, className: s().title }),
            (0, a.jsx)(n.AH, { isActive: t, className: s().text }),
          ],
        });
      };
    },
    54224: function (e, t, i) {
      "use strict";
      i.d(t, {
        ClipContextMenu: function () {
          return C;
        },
      });
      var a = i(75441),
        r = i(62569),
        n = i(9317),
        l = i(15937),
        s = i(35846),
        o = i(93093),
        d = i(69756),
        u = i(27376),
        c = i(14924),
        p = i(13534),
        m = i(97141);
      let C = (0, r.Pi)((e) => {
        let {
            onOpenChange: t,
            open: i,
            placement: r,
            isFullscreenMobile: C = !1,
            icon: v,
            size: _,
            clip: f,
            ...b
          } = e,
          { currentClipInfo: x, settings: g } = (0, p.oR4)(),
          { formatMessage: h } = (0, n.Z)(),
          { href: I } = (0, p.qKB)(f.url),
          y = C || g.isMobile;
        (0, p.ZP4)(i);
        let V = (0, c.SB)(f),
          A = (0, o.W)(() => {
            x.setClipId(f.clipId), x.modal.open();
          }),
          N = {
            variant: p.GGO.CLIP,
            id: f.clipId,
            title: f.title,
            path: f.url,
          };
        return (0, a.jsxs)(u.v2, {
          isMobile: y,
          placement: r,
          offsetOptions: -10,
          open: i,
          onOpenChange: t,
          icon: v,
          size: _,
          containerProps: (0, s.BA)(s.bG.clip.CLIP_CONTEXT_MENU),
          ariaLabel: h({ id: "interface-actions.context-menu" }),
          variant: "text",
          ...b,
          children: [
            (0, a.jsx)(m.xZ, { onClick: V, isLiked: f.isLiked }),
            (0, a.jsx)(m.zq, { shareLink: I, entityMeta: N }),
            (0, a.jsx)(u.sN, {
              onClick: A,
              icon: (0, a.jsx)(d.Icon, { variant: "info", size: "xxs" }),
              ...(0, s.BA)(s.bG.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON),
              children: (0, a.jsx)(l.Z, { id: "track-modal.clip-title" }),
            }),
          ],
        });
      });
    },
    8745: function (e, t, i) {
      "use strict";
      i.d(t, {
        ClipsCarousel: function () {
          return m;
        },
      });
      var a = i(75441),
        r = i(32358),
        n = i(62569),
        l = i(65067),
        s = i(13534),
        o = i(97141),
        d = i(86582),
        u = i.n(d),
        c = i(13997);
      let p = (0, n.Pi)((e) => {
          let {
              clipCardTitleClassName: t,
              clipCardArtistLinkClassName: i,
              carouselItemClassName: n,
              forwardRef: d,
              isShimmerVisible: p,
              isShimmerActive: m,
              title: C,
              description: v,
              containerClassName: _,
              headerClassName: f,
              viewAllActionLink: b,
              artistIdWithoutLink: x,
              withVideo: g = !0,
              clips: h,
              headingVariant: I,
              className: y,
              shouldOpenModalOnCardClick: V = !0,
              itemCounter: A,
              ...N
            } = e,
            j = (0, l.useId)(),
            S = (0, l.useRef)(null);
          return (0, a.jsxs)("section", {
            className: (0, r.W)(u().root, y),
            ref: d,
            ...(0, s.tEg)(N),
            children: [
              (0, a.jsx)(o.ti, {
                className: f,
                labeledForId: j,
                title: C,
                description: v,
                viewAllActionLink: b,
                controls: (0, a.jsx)(o.J8, {
                  className: u().controls,
                  carouselRef: S,
                }),
                headingVariant: I,
              }),
              (0, a.jsx)(c.ClipsCarouselContent, {
                clipCardTitleClassName: t,
                clipCardArtistLinkClassName: i,
                carouselItemClassName: n,
                isShimmerVisible: p,
                isShimmerActive: m,
                containerClassName: _,
                artistIdWithoutLink: x,
                withVideo: g,
                clips: h,
                shouldOpenModalOnCardClick: V,
                itemCounter: A,
                ref: S,
                "aria-labelledby": j,
              }),
            ],
          });
        }),
        m = (0, l.forwardRef)((e, t) => (0, a.jsx)(p, { forwardRef: t, ...e }));
    },
    13997: function (e, t, i) {
      "use strict";
      i.d(t, {
        ClipsCarouselContent: function () {
          return f;
        },
      });
      var a = i(75441),
        r = i(32358),
        n = i(62569),
        l = i(65067),
        s = i(77282),
        o = i(4875),
        d = i(59100),
        u = i(13534),
        c = i(4277),
        p = i(17784),
        m = i(77059),
        C = i.n(m);
      let v = (e) =>
          Array.from({ length: 5 }, (t, i) =>
            (0, a.jsx)(p.U, { isActive: e }, i),
          ),
        _ = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              clipCardTitleClassName: i,
              clipCardArtistLinkClassName: n,
              carouselItemClassName: p,
              isShimmerVisible: m,
              isShimmerActive: _,
              containerClassName: f,
              artistIdWithoutLink: b,
              withVideo: x = !0,
              clips: g,
              shouldOpenModalOnCardClick: h = !0,
              itemCounter: I,
            } = e,
            y = (0, l.useId)(),
            V = (0, l.useRef)(String((0, s.Z)())),
            A = (0, l.useMemo)(
              () =>
                m
                  ? v(_)
                  : null == g
                    ? void 0
                    : g.map((e, t) =>
                        (0, a.jsx)(
                          u.nZ5,
                          {
                            objectType: o.OB.Video,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: null == g ? void 0 : g.length,
                            objectId: String(e.clipId),
                            children: (0, a.jsx)(c.ClipCard, {
                              titleClassName: i,
                              artistLinkClassName: n,
                              clip: e,
                              withVideo: x,
                              artistIdWithoutLink: b,
                              viewUuid: V.current,
                              shouldOpenModalOnCardClick: h,
                            }),
                          },
                          e.clipId,
                        ),
                      ),
              [i, n, m, _, b, x, g, h],
            );
          return (0, a.jsx)(d.Carousel, {
            className: (0, r.W)(
              C().itemCounter,
              { [C()["itemCounter_".concat(I)]]: I },
              f,
            ),
            ref: t,
            itemClassName: (0, r.W)(C().item, C().important, p),
            "aria-labelledby": y,
            children: A,
          });
        }),
        f = (0, l.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
    },
    151: function (e, t, i) {
      "use strict";
      i.d(t, {
        HorizontalClipCard: function () {
          return E;
        },
      });
      var a = i(75441),
        r = i(32358),
        n = i(34073),
        l = i(62569),
        s = i(65067),
        o = i(9317),
        d = i(63660),
        u = i(35846),
        c = i(84638),
        p = i(93093),
        m = i(14218),
        C = i(91307),
        v = i(39054),
        _ = i(59091),
        f = i(17392),
        b = i(64353),
        x = i(14924),
        g = i(13534),
        h = i(97141),
        I = i(59021),
        y = i(71537),
        V = i.n(y),
        A = i(69756),
        N = i(54224),
        j = i(13177),
        S = i.n(j);
      let L = (0, l.Pi)((e) => {
        let { className: t, clip: i, likeIconSize: n = "xxs" } = e,
          { user: l } = (0, g.oR4)(),
          { sendLikeSearchFeedback: o } = (0, g.sAF)(),
          d = (0, x.SB)(i),
          [u, c] = (0, s.useState)(!1),
          [m, C] = (0, s.useState)(!1),
          v = (0, p.W)(() => {
            u || i.isLiked || (c(!0), null == o || o()), d();
          });
        return (0, a.jsx)("div", {
          className: (0, r.W)(S().root, S().controls, t, {
            [S().controls_disabled]: !i.isAvailable,
          }),
          children:
            i.isAvailable &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(h.FM, {
                  fallback: (0, a.jsx)(h.dJ, {
                    size: "xs",
                    iconSize: n,
                    className: (0, r.W)(S().item, S().likeIcon),
                    isLiked: i.isLiked,
                    onClick: v,
                    disabled: !l.isAuthorized,
                  }),
                }),
                (0, a.jsx)(N.ClipContextMenu, {
                  placement: "top-start",
                  icon: (0, a.jsx)(A.Icon, { variant: "more", size: "xs" }),
                  size: "xs",
                  clip: i,
                  className: (0, r.W)(S().contextMenu, {
                    [S().contextMenu_visible]: m,
                  }),
                  onOpenChange: C,
                  open: m,
                }),
              ],
            }),
        });
      });
      var R = i(82812),
        k = i.n(R);
      let E = (0, l.Pi)((e) => {
        let {
            clip: t,
            className: i,
            coverClassName: l,
            playButtonIconSize: y = "xs",
            likeIconSize: A,
            viewUuid: N,
            shouldShowTimecode: j = !1,
          } = e,
          { fullscreenVideoPlayer: S } = (0, g.oR4)(),
          { formatMessage: R } = (0, o.Z)(),
          E = (0, x.gR)(N),
          M = (0, x.g9)(N),
          { ref: P, intersectionPropertyId: U } = (0, g.VfV)({ callback: M }),
          { from: w } = (0, g.MhG)({
            pageId: g.Rhz.VIDEO_PLAYER,
            contextId: S.state.contextId,
            contextType: c.A.Various,
            blockId: g.aUg.CLIPS,
          }),
          [D, O] = (0, s.useState)(!1),
          { sendNavigateSearchFeedback: T, sendPlaySearchFeedback: G } = (0,
          g.sAF)(),
          B = (0, x.Li)(),
          z = (0, s.useRef)(null),
          F = (0, p.W)(() => {
            z.current && ((z.current.currentTime = 0), z.current.play());
          }),
          W = (0, s.useMemo)(() => (0, n.Z)(F, 500), [F]),
          H = (0, p.W)(() => {
            var e;
            null === (e = z.current) || void 0 === e || e.pause();
          }),
          Z = (0, s.useMemo)(() => S.ids.indexOf(t.clipId), [S, t.clipId]),
          { isPlaying: Y } = (0, g.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Various,
                meta: { id: g.i9R.VARIOUS_CLIP_CONTEXT },
                from: w,
              },
              queueParams: { index: Z },
              entitiesData: S.entitiesData,
              loadContextMeta: !1,
            },
            entityId: String(t.clipId),
            sonataState: S.state,
            playbackId: g.jiA.CLIP,
          }),
          q = (0, g.s0h)((0, x.Fw)([t.clipId], 0), !0),
          K = (0, p.W)(() => {
            B([t.clipId]),
              D || Y || (O(!0), null == G || G()),
              null == T || T(),
              E();
          }),
          J = (0, I.useClipDisclaimer)({ clip: t, callback: K }),
          X = (0, I.useClipDisclaimer)({ clip: t, callback: q }),
          Q = (0, b.ik)(X, J),
          $ = (0, p.W)((e) => {
            (0, C.m)(e, h.$C.ripple), Q(e);
          }),
          ee = (0, m.V)(() =>
            (0, a.jsx)(f.Caption, {
              className: (0, r.W)(h.$C.text, h.$C.titleText),
              "aria-hidden": !0,
              variant: "div",
              type: "entity",
              size: "m",
              weight: "medium",
              lineClamp: 1,
              children: t.title,
            }),
          ),
          et = (0, s.useCallback)(
            (e, i) => {
              var r;
              return (
                null === (r = t.artists) || void 0 === r ? void 0 : r.length
              )
                ? (0, a.jsx)(b.jO, {
                    linkClassName: e,
                    captionClassName: i,
                    artists: t.artists,
                    lineClamp: 1,
                  })
                : null;
            },
            [t.artists],
          ),
          ei = R({ id: "entity-names.clip-name" }, { clipName: t.title }),
          ea = (0, m.V)(() =>
            t.isAvailable
              ? (0, a.jsxs)(_.Paper, {
                  className: (0, r.W)(
                    k().cover,
                    V().cover,
                    V().cover_withoutOffset,
                    l,
                  ),
                  radius: "xs",
                  onMouseEnter: W,
                  onMouseLeave: H,
                  children: [
                    t.previewUrl &&
                      (0, a.jsx)("video", {
                        className: V().media,
                        ref: z,
                        poster:
                          t.thumbnail &&
                          (0, d.createAvatarVideoUrl)(t.thumbnail, 80),
                        playsInline: !0,
                        muted: !0,
                        loop: !0,
                        "aria-hidden": !0,
                        children: (0, a.jsx)("source", {
                          src: t.previewUrl,
                          type: "video/mp4",
                        }),
                      }),
                    t.thumbnail &&
                      (0, a.jsx)(v.Image, {
                        className: V().image,
                        src: t.thumbnail,
                        fit: "cover",
                        withAvatarReplace: !0,
                        size: 80,
                        createUrlReplacer: d.createAvatarVideoUrl,
                        alt: ei,
                      }),
                    void 0 !== t.duration &&
                      j &&
                      (0, a.jsx)(f.Caption, {
                        variant: "span",
                        className: (0, r.W)(V().duration, k().duration),
                        type: "entity",
                        size: "xs",
                        weight: "medium",
                        children: (0, g.gf)(t.duration, t.duration),
                      }),
                    (0, a.jsx)(h.JM, {
                      variant: "filled",
                      className: V().playButton,
                      onClick: Q,
                      iconSize: y,
                    }),
                  ],
                })
              : (0, a.jsxs)(_.Paper, {
                  className: (0, r.W)(k().cover, k().unavailable, l),
                  radius: "xs",
                  children: [
                    (0, a.jsx)(v.FallbackImage, {
                      className: V().image,
                      iconVariant: "unavailable",
                      iconSize: "xs",
                      ...(0, u.BA)(u.r9.ENTITY_COVER_FALLBACK_IMAGE),
                    }),
                    (0, a.jsx)(h.JM, {
                      variant: "filled",
                      className: V().playButton,
                      iconSize: y,
                      disabled: !0,
                    }),
                  ],
                }),
          );
        return (0, a.jsxs)(h.Md, {
          ref: P,
          "data-intersection-property-id": U,
          className: (0, r.W)(
            h.$C.root,
            { [h.$C.root_disabled]: !t.isAvailable },
            k().root,
            i,
          ),
          onClick: $,
          ...(0, u.BA)(u.bG.clip.HORIZONTAL_CLIP_CARD),
          children: [
            ea,
            (0, a.jsx)(h.u, {
              isDisabled: !t.isAvailable,
              title: ee,
              artistsComponent: et,
              getDescriptionTexts: t.getDescriptionTexts,
              explicitMarkVariant: t.explicitDisclaimer,
              isLiked: t.isLiked,
            }),
            (0, a.jsx)(L, {
              className: h.$C.controlsBar,
              clip: t,
              likeIconSize: A,
            }),
          ],
        });
      });
    },
    54306: function (e, t, i) {
      "use strict";
      i.d(t, {
        wQ: function () {
          return N;
        },
        Bd: function () {
          return j;
        },
        s$: function () {
          return A;
        },
        lj: function () {
          return L.PromoLandingSonataControls;
        },
        $Z: function () {
          return R.RepeatButton;
        },
        P4: function () {
          return k.ShuffleButton;
        },
        WP: function () {
          return E.SonataControls;
        },
        ps: function () {
          return S;
        },
        NI: function () {
          return M.SonataVideoControls;
        },
        jN: function () {
          return I;
        },
        uA: function () {
          return s;
        },
        RN: function () {
          return d;
        },
        B5: function () {
          return p;
        },
        tz: function () {
          return m.useOnRepeatClick;
        },
        md: function () {
          return C.useOnShuffleClick;
        },
        K4: function () {
          return v.useToggleMute;
        },
      });
      var a = i(22874),
        r = i(81046),
        n = i(64353),
        l = i(13534);
      let s = (e) => {
        if (e.data.type === r.A.Clip) {
          var t;
          let i = e.data.meta;
          if (!i.clipId) return null;
          let r =
              null === (t = i.artists) || void 0 === t
                ? void 0
                : t.map((e) => (0, n.tR)({ artist: e })),
            { available: s, disclaimers: o } = (0, l.NuW)(i);
          return (0, a.pj)({
            clipId: i.clipId,
            title: i.title,
            thumbnail: i.thumbnail,
            duration: i.duration,
            previewUrl: i.previewUrl,
            isAvailable: s,
            disclaimers: o,
            artists: r,
            isHiddenFromSonataQueue: e.hidden,
          });
        }
        return null;
      };
      var o = i(98375);
      let d = (e, t) => ({ type: o.RX.Unloaded, meta: { id: e, albumId: t } });
      var u = i(73447),
        c = i(32399);
      let p = (e) => {
        var t, i, s;
        switch (e.data.type) {
          case r.A.Generative: {
            let i = e.data.meta,
              r = (0, l.Usz)(null == i ? void 0 : i.derivedColors);
            return (0, a.pj)({
              id: String(i.id),
              coverUri: i.imageUrl,
              title: null !== (t = i.title) && void 0 !== t ? t : "",
              isAvailable: !0,
              isRemoved: !1,
              averageColor: r,
            });
          }
          case r.A.Clip:
          case o.RX.Unloaded:
            return null;
          default: {
            let t = e.data.meta,
              r =
                null === (i = t.artists) || void 0 === i ? void 0 : i.map(n.d),
              l = null === (s = t.albums) || void 0 === s ? void 0 : s.map(u.N);
            return (0, a.pj)({
              ...(0, c.Ni)(t),
              artists: r,
              albums: l,
              isHiddenFromSonataQueue: e.hidden,
            });
          }
        }
      };
      var m = i(61925),
        C = i(33856),
        v = i(70419),
        _ = i(23172),
        f = i(37285),
        b = i(84638),
        x = i(95817),
        g = i(6232);
      let h = a.V5.model("UnloadedEntityMeta", {
          id: a.V5.union(a.V5.number, a.V5.string),
          albumId: a.V5.maybe(a.V5.union(a.V5.number, a.V5.string)),
        }),
        I = a.V5.model("UnloadedEntityData", {
          meta: h,
          type: a.V5.literal(o.RX.Unloaded),
        });
      var y = i(94123),
        V = i(89428);
      let A = c.yp
          .props({
            artists: a.V5.array(n.Go),
            albums: a.V5.array(u.KX),
            chart: a.V5.maybe(V.BH),
            isHiddenFromSonataQueue: a.V5.maybe(a.V5.boolean),
          })
          .views((e) => ({
            get idWithContext() {
              return e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id;
            },
            get artistsNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
            get mainArtist() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.artists) || void 0 === i ? void 0 : i[0]) &&
                void 0 !== a
                ? a
                : null;
            },
            get mainAlbum() {
              var r, n;
              return null !==
                (n = null === (r = e.albums) || void 0 === r ? void 0 : r[0]) &&
                void 0 !== n
                ? n
                : null;
            },
            get index() {
              var l, s, o;
              return null !==
                (o =
                  null === (s = e.albums[0]) || void 0 === s
                    ? void 0
                    : null === (l = s.trackPosition) || void 0 === l
                      ? void 0
                      : l.index) && void 0 !== o
                ? o
                : null;
            },
            get isPodcast() {
              var d;
              return (
                e.isTrackPodcast ||
                (null === (d = this.mainAlbum) || void 0 === d
                  ? void 0
                  : d.isPodcast)
              );
            },
            get isAudiobook() {
              return e.type === y.V.AUDIOBOOK;
            },
            get isFairyTale() {
              return e.type === y.V.FAIRY_TALE;
            },
            get isNonMusic() {
              return this.isPodcast || this.isAudiobook || this.isFairyTale;
            },
            get isAvailableOnlyForPlus() {
              var u;
              return !!(null === (u = this.mainAlbum) || void 0 === u
                ? void 0
                : u.isAvailableOnlyForPlus);
            },
          }))
          .actions((e) => ({
            changeTrackInfo: (0, a.ls)(function* (t, i) {
              let { ugcResource: r, modelActionsLogger: s } = (0, a.dU)(e);
              if (
                e.artists.map((e) => e.name).join(", ") === i &&
                t === e.title
              )
                return l.SLo.OK;
              try {
                var o;
                yield r.changeTrack({ trackId: e.id, title: t, artist: i }),
                  (e.title = t);
                let s =
                  (null === (o = e.artists[0]) || void 0 === o
                    ? void 0
                    : o.id) || "0";
                if (((e.artists = (0, a.pj)([])), i)) {
                  let t = n.Go.create({ id: s, name: i, isAvailable: !0 });
                  e.artists = (0, a.pj)([t]);
                }
                return l.SLo.OK;
              } catch (e) {
                return s.error(e), l.SLo.ERROR;
              }
            }),
          })),
        N = a.V5.model("BaseSonataState", {
          contextType: a.V5.maybeNull(a.V5.enumeration(Object.values(b.A))),
          contextId: a.V5.maybeNull(a.V5.string),
          entityMeta: a.V5.maybeNull(A),
          status: a.V5.enumeration(Object.values(o.FY)),
          canMoveForward: a.V5.boolean,
          canMoveBackward: a.V5.boolean,
          canSpeed: a.V5.boolean,
          repeatMode: a.V5.enumeration(Object.values(g.zq)),
          canChangeRepeatMode: a.V5.boolean,
          volume: a.V5.maybe(a.V5.number),
          speed: a.V5.maybe(a.V5.number),
          position: a.V5.maybeNull(a.V5.number),
          duration: a.V5.maybeNull(a.V5.number),
          canShuffle: a.V5.boolean,
          shuffle: a.V5.boolean,
          quality: a.V5.enumeration(Object.values(x.n)),
          unloadedEntitiesData: a.V5.maybe(a.V5.array(I)),
        })
          .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
          .views((e) => ({
            get unloadedEntitiesDataFromModels() {
              var t;
              return null !== (t = e.volatileUnloadedEntitiesData) &&
                void 0 !== t
                ? t
                : (0, f.ZN)(e.unloadedEntitiesData);
            },
            get isVibeContext() {
              return e.contextType === b.A.Vibe;
            },
            get isGenerativeContext() {
              return e.contextType === b.A.Generative;
            },
            get isPaused() {
              return e.status === o.FY.PAUSED;
            },
            get isPlaying() {
              return e.status === o.FY.PLAYING;
            },
            get isContextRepeatMode() {
              return e.repeatMode === g.zq.CONTEXT;
            },
            get isOneRepeatMode() {
              return e.repeatMode === g.zq.ONE;
            },
          }))
          .actions((e) => ({
            setContextId: (t) => {
              e.contextId = String(t);
            },
            setContextType: (t) => {
              e.contextType = t;
            },
            setEntityMeta: (t) => {
              t && t.data.meta && (e.entityMeta = p(t));
            },
            setUnloadedEntitiesData: (t) => {
              t &&
                ((e.volatileUnloadedEntitiesData = (0, _.Z)(t)),
                (e.unloadedEntitiesData = (0, a.pj)(t)));
            },
            resetUnloadedEntitiesData: () => {
              (e.volatileUnloadedEntitiesData = void 0),
                (e.unloadedEntitiesData = void 0);
            },
            setStatus: (t) => {
              e.status = t;
            },
            setCanMoveForward: (t) => {
              e.canMoveForward = t;
            },
            setCanMoveBackward: (t) => {
              e.canMoveBackward = t;
            },
            setVolume: (t) => {
              e.volume = t;
            },
            setCanSpeed: (t) => {
              e.canSpeed = t;
            },
            setSpeed: (t) => {
              e.speed = t;
            },
            setRepeatMode: (t) => {
              e.repeatMode = t;
            },
            setCanChangeRepeatMode: (t) => {
              e.canChangeRepeatMode = t;
            },
            setCanShuffle: (t) => {
              e.canShuffle = t;
            },
            setShuffle: (t) => {
              e.shuffle = t;
            },
            setQuality: (t) => {
              e.quality = t;
            },
            setPosition: (t) => {
              e.position = t;
            },
            setDuration: (t) => {
              e.duration = t;
            },
          })),
        j = i(14924)
          .Vc.props({
            artists: a.V5.array(n.Go),
            isHiddenFromSonataQueue: a.V5.maybe(a.V5.boolean),
          })
          .views((e) => ({
            get idWithContext() {
              return String(e.clipId);
            },
          })),
        S = N.props({
          playlistFilter: a.V5.maybe(a.V5.string),
          areCoresRegistered: a.V5.boolean,
          isVHCoreRegistered: a.V5.boolean,
          shouldApplyYnisonState: a.V5.optional(a.V5.boolean, !0),
        })
          .actions((e) => ({
            setIsVHCoreRegistered(t) {
              e.isVHCoreRegistered = t;
            },
            setPlaylistFilter: (t) => {
              e.playlistFilter = t;
            },
            setCoresAsRegistered: (t) => {
              e.areCoresRegistered = t;
            },
            setShouldApplyYnisonState: (t) => {
              e.shouldApplyYnisonState = t;
            },
          }))
          .named("SonataState");
      i(92569), i(85051);
      var L = i(80045),
        R = i(94544),
        k = i(54723),
        E = i(91978),
        M = i(32715);
    },
    71537: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ClipCard_root__kzWjg",
        view: "ClipCard_view__MYSwA",
        playButton: "ClipCard_playButton__0Wyss",
        duration: "ClipCard_duration__89ZCx",
        image: "ClipCard_image__hSUud",
        media: "ClipCard_media__dU4RM",
        cover: "ClipCard_cover__ztEok",
        unavailableCover: "ClipCard_unavailableCover__Zd9jl",
        cover_withoutOffset: "ClipCard_cover_withoutOffset__aasE2",
        title: "ClipCard_title__I1s7Q",
        artistLink: "ClipCard_artistLink__t6oPP",
        titleLink: "ClipCard_titleLink__g3HDM",
        version: "ClipCard_version__w9PM7",
      };
    },
    26064: function (e) {
      e.exports = {
        root: "ClipCardShimmer_root__sIvNr",
        cover: "ClipCardShimmer_cover__yA4jz",
        title: "ClipCardShimmer_title__MCApK",
        text: "ClipCardShimmer_text__ajZGv",
      };
    },
    86582: function (e) {
      e.exports = {
        root: "ClipsCarousel_root__r1mGp",
        controls: "ClipsCarousel_controls__nZB6r",
      };
    },
    77059: function (e) {
      e.exports = {
        itemCounter_3: "ClipsCarouselContent_itemCounter_3__c_H3V",
        item: "ClipsCarouselContent_item__Yy7_P",
        important: "ClipsCarouselContent_important__nZYA0",
        itemCounter_5: "ClipsCarouselContent_itemCounter_5__QeQd_",
      };
    },
    13177: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__l6Fg6",
        item: "ControlsBar_item__tEQvM",
        item_buttonArrow: "ControlsBar_item_buttonArrow__3aZyp",
        contextMenu: "ControlsBar_contextMenu__1Sj5f",
        contextMenu_visible: "ControlsBar_contextMenu_visible__FMTw4",
        controls_disabled: "ControlsBar_controls_disabled__xR0_N",
        controls: "ControlsBar_controls__PEMXx",
        likeIcon: "ControlsBar_likeIcon__UBXQm",
      };
    },
    82812: function (e) {
      e.exports = {
        root: "HorizontalClipCard_root__B_6yA",
        cover: "HorizontalClipCard_cover__vpEvl",
        unavailable: "HorizontalClipCard_unavailable__SILaB",
        duration: "HorizontalClipCard_duration__r1UFp",
      };
    },
  },
]);
