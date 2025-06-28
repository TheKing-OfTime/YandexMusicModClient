(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9057],
  {
    76626: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 66118));
    },
    66118: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i(75441),
        a = i(98730),
        s = i(65067),
        r = i(81746);
      e.default = () => {
        let t = (0, a.useSearchParams)().get("promoId");
        return (
          t || (0, a.notFound)(),
          (0, n.jsx)(s.Suspense, { children: (0, n.jsx)(r.s6, { promoId: t }) })
        );
      };
    },
    7797: function (t, e, i) {
      "use strict";
      i.d(e, {
        vY: function () {
          return f.EmptyPlaylistBlock;
        },
        Tq: function () {
          return j.HorizontalPlaylistCard;
        },
        ZL: function () {
          return b.PlaylistCard;
        },
        Nn: function () {
          return P;
        },
        d2: function () {
          return k;
        },
        VD: function () {
          return N.PlaylistsCarousel;
        },
        RE: function () {
          return s;
        },
        Q9: function () {
          return d;
        },
        VB: function () {
          return p;
        },
        PB: function () {
          return y;
        },
      });
      var n = i(22874),
        a = i(13534);
      let s = (t) => {
        var e, i;
        let {
          playlist: s,
          generatedPlaylistType: r,
          likesCount: o,
          trailer: l,
          tracksCount: c,
        } = t;
        return (0, n.pj)({
          isAvailable: null === (i = s.available) || void 0 === i || i,
          uuid: s.playlistUuid,
          title: s.title,
          uid: s.uid,
          kind: s.kind,
          coverUri: null === (e = s.cover) || void 0 === e ? void 0 : e.uri,
          generatedPlaylistType: r,
          likesCount: o,
          tracksCount: c,
          trailer: (0, a.GFX)(l),
        });
      };
      var r = i(98730),
        o = i(65067);
      (0, o.cache)(async (t, e) => {
        try {
          let {
            container: i,
            backendHostTld: n,
            locale: s,
            host: o,
            fullUrl: l,
            isRSC: c,
            requestUrl: u,
          } = await (0, a.rbP)();
          if (c)
            return {
              playlist: void 0,
              backendHostTld: n,
              locale: s,
              host: o,
              fullUrl: l,
              requestUrl: u,
            };
          let d = i.get(a.Eug),
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
              locale: s,
              host: o,
              fullUrl: l,
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
      }),
        (0, o.cache)(async (t) => {
          (0, a.aIc)(t) || (0, r.notFound)();
          try {
            let {
              container: e,
              backendHostTld: i,
              locale: n,
              host: s,
              fullUrl: o,
              isRSC: l,
              requestUrl: c,
            } = await (0, a.rbP)();
            if (l)
              return {
                playlist: void 0,
                backendHostTld: i,
                locale: n,
                host: s,
                fullUrl: o,
                requestUrl: c,
              };
            let u = e.get(a.lkR),
              d = await u.getPlaylist({
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
        });
      var l = i(10979);
      let c = (t) => ({
          uid: t.uid,
          login: t.login,
          name: t.name,
          sex: t.sex,
          verified: t.verified,
        }),
        u = (t) =>
          (0, n.pj)({
            userInfo: t.userInfo ? c(t.userInfo) : null,
            caseForms: t.caseForms ? (0, a.GA0)(t.caseForms) : null,
          }),
        d = (t) =>
          (0, n.pj)({
            ...(0, l.PV)(t),
            owner: t.owner ? c(t.owner) : void 0,
            description: t.description,
            tags: t.tags,
            modified: t.modified,
            madeFor: t.madeFor ? u(t.madeFor) : null,
          });
      var m = i(64353);
      let p = (t) => {
        var e, i;
        return (0, n.pj)({
          ...(0, l.PV)(t),
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
      var _ = i(32399);
      let y = (t) => {
        var e, i;
        return (0, n.pj)({
          ...(0, l.PV)(t),
          tracks:
            null !==
              (i =
                null == t
                  ? void 0
                  : null === (e = t.tracks) || void 0 === e
                    ? void 0
                    : e.map(_.wM)) && void 0 !== i
              ? i
              : [],
        });
      };
      var v = i(40892),
        x = i(92719);
      let h = n.V5.model("PlaylistOwner", {
          uid: n.V5.number,
          login: n.V5.string,
          name: n.V5.string,
          sex: n.V5.enumeration(Object.values(x.o)),
          verified: n.V5.boolean,
        }),
        C = n.V5.model("PlaylistOwner", {
          userInfo: n.V5.maybeNull(h),
          caseForms: n.V5.maybeNull(v.S2),
        }),
        g = n.V5.model("PlaylistTag", { id: n.V5.string, value: n.V5.string }),
        P = l.Cd.props({
          owner: n.V5.maybe(h),
          modified: n.V5.string,
          description: n.V5.maybe(n.V5.string),
          tags: n.V5.maybeNull(n.V5.array(g)),
          madeFor: n.V5.maybeNull(C),
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
                !e.checkExperiment(a.peG.WebEditorsFeatures, "on") ||
                !Array.isArray(t.tags) ||
                !t.tags.length
              )
                return null;
              return t.tags.map((t) => t.value).join(", ");
            },
          }))
          .actions((t) => ({
            changeDescription: (0, n.ls)(function* (e) {
              if (!(0, n.fh)(t)) return a.SLo.ERROR;
              if (t.description === e) return a.SLo.OK;
              if (e.length > l.Zn) return a.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: s } = (0, n.dU)(t);
              if (t.canUserChange) {
                let n = t.description;
                t.description = e;
                try {
                  let n = yield i.changePlaylistDescription({
                    description: e,
                    userId: t.uid,
                    playlistKind: t.kind,
                  });
                  return (t.description = n.description), a.SLo.OK;
                } catch (e) {
                  (t.description = n), s.error(e);
                }
              }
              return a.SLo.ERROR;
            }),
            changePlaylistCover: (0, n.ls)(function* (e) {
              if (!(0, n.fh)(t)) return a.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: s } = (0, n.dU)(t);
              try {
                let n = yield i.uploadPlaylistCover({
                  userId: t.uid,
                  formData: e,
                  playlistKind: t.kind,
                });
                return (t.coverUri = n.cover.uri), a.SLo.OK;
              } catch (t) {
                s.error(t);
              }
              return a.SLo.ERROR;
            }),
          }))
          .named("PlaylistMeta"),
        k = l.$h.props({ artists: n.V5.maybe(n.V5.array(m.Go)) });
      var f = i(59539),
        j = i(86133),
        b = i(8152),
        N = i(87352);
    },
    6794: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return s;
        },
      });
      var n = i(65067),
        a = i(9317);
      let s = (t) => {
        let { formatMessage: e } = (0, a.Z)();
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
        a = i(32358),
        s = i(65067),
        r = i(15937),
        o = i(35846),
        l = i(69756),
        c = i(17392),
        u = i(63950),
        d = i.n(u);
      let m = (t) => {
        let { className: e, isEmptySearch: i } = t,
          u = (0, s.useMemo)(
            () =>
              i
                ? (0, n.jsx)(r.Z, { id: "search-results.not-found-title" })
                : (0, n.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [i],
          ),
          m = (0, s.useMemo)(
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
          className: (0, a.W)(d().root, e),
          ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK),
          children: [
            (0, n.jsx)("div", {
              className: d().iconBackground,
              children: (0, n.jsx)(l.Icon, {
                variant: "search",
                size: "l",
                className: d().icon,
                ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_ICON),
              }),
            }),
            (0, n.jsx)(c.Heading, {
              variant: "h3",
              size: "xs",
              className: d().title,
              ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),
              children: u,
            }),
            (0, n.jsx)(c.Caption, {
              variant: "span",
              size: "l",
              className: d().subtitle,
              ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
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
          return N;
        },
      });
      var n = i(75441),
        a = i(32358),
        s = i(62569),
        r = i(65067),
        o = i(9317),
        l = i(15937),
        c = i(4875),
        u = i(35846),
        d = i(84638),
        m = i(93093),
        p = i(91307),
        _ = i(69756),
        y = i(17392),
        v = i(64353),
        x = i(13534),
        h = i(97141),
        C = i(6794),
        g = i(10979),
        P = i(75908),
        k = i.n(P);
      let f = (0, s.Pi)((t) => {
        var e;
        let { className: i, playlist: s, likeIconSize: o = "xxs" } = t,
          { user: l, trailer: u } = (0, x.oR4)(),
          d = (0, x.qsr)(),
          { sendLikeSearchFeedback: p } = (0, x.sAF)(),
          y = (0, g.SB)(s),
          [v, C] = (0, r.useState)(!1),
          P = (0, m.W)(async () => {
            v || s.isLiked || (C(!0), null == p || p()), await y();
          }),
          f = (0, x.FTC)(),
          j = (0, m.W)((t) => {
            if ((t.stopPropagation(), d())) {
              t.preventDefault();
              return;
            }
            u.openPlaylistTrailer(s.id), f(c.OB.Playlist, s.id);
          });
        return (0, n.jsxs)("div", {
          className: (0, a.W)(k().root, k().controls, i, {
            [k().controls_disabled]: !s.isAvailable,
          }),
          children: [
            s.isAvailable &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(h.FM, {
                    fallback: (0, n.jsx)(h.dJ, {
                      size: "xs",
                      iconSize: o,
                      className: (0, a.W)(k().item, k().likeIcon),
                      isLiked: s.isLiked,
                      onClick: P,
                      disabled: !l.isAuthorized,
                    }),
                  }),
                  (null === (e = s.trailer) || void 0 === e
                    ? void 0
                    : e.isAvailable) &&
                    (0, n.jsx)(h.FM, {
                      fallback: (0, n.jsx)(h.eP, {
                        className: (0, a.W)(k().item, k().trailerIcon),
                        iconSize: "xs",
                        variant: "text",
                        onClick: j,
                        withRipple: !1,
                      }),
                    }),
                ],
              }),
            (0, n.jsx)("div", {
              className: (0, a.W)(k().item, k().item_buttonArrow),
              children: (0, n.jsx)(_.Icon, {
                className: h.$C.buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
      var j = i(53948),
        b = i.n(j);
      let N = (0, s.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            pageId: s,
            coverClassName: g,
            playButtonIconSize: P,
            likeIconSize: k,
          } = t,
          { ref: j, intersectionPropertyId: N } = (0, x.VfV)(),
          { from: L } = (0, x.MhG)({ pageId: s }),
          [S, B] = (0, r.useState)(!1),
          T = (0, x.lAI)(),
          W = (0, C.z)(i),
          A = i.title || "",
          { formatMessage: I, formatNumber: V } = (0, o.Z)(),
          w = (0, x.qsr)(),
          { sendNavigateSearchFeedback: z, sendPlaySearchFeedback: F } = (0,
          x.sAF)(),
          E = (0, x.zxW)(),
          {
            isPlaying: R,
            isCurrent: O,
            togglePlay: U,
          } = (0, x.qmq)({
            playContextParams: {
              contextData: {
                type: d.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: L,
              },
              loadContextMeta: !0,
            },
          }),
          G = (0, x.s0h)(i.url),
          M = (0, x.s0h)(i.url, !0),
          D = (0, v.ik)(M, G),
          Y = (0, m.W)((t) => {
            null == z || z(),
              E({ to: c.qU.PlaylistScreen }),
              t.preventDefault(),
              D(t);
          }),
          Z = (0, m.W)(() => {
            w() || (S || R || (B(!0), null == F || F()), U(), T(!R));
          }),
          q = (0, m.W)((t) => {
            (0, p.m)(t, h.$C.ripple), Y(t);
          }),
          H = (0, m.W)((t) => {
            t.stopPropagation(), Y(t);
          }),
          K = (0, r.useCallback)(
            (t) =>
              (0, n.jsx)(h.Df, {
                isAvailable: i.isAvailable,
                isDisliked: !1,
                coverUri: i.coverUri,
                title: A,
                className: (0, a.W)(h.$C.playButtonCell, g),
                alt: I(
                  { id: "entity-names.playlist-name" },
                  { playlistName: A },
                ),
                ...t,
              }),
            [i, A, g, I],
          ),
          $ =
            null == K
              ? void 0
              : K({
                  onPlayButtonClick: Z,
                  isPlaying: R,
                  isCurrent: O,
                  playButtonIconSize: P,
                }),
          X = (0, r.useMemo)(
            () =>
              i.url && i.isAvailable
                ? (0, n.jsx)(h.rU, {
                    className: (0, a.W)(h.$C.text, h.$C.titleLink),
                    href: i.url,
                    onClick: H,
                    children: A,
                  })
                : (0, n.jsx)(y.Caption, {
                    className: (0, a.W)(h.$C.text, h.$C.titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: A,
                  }),
            [H, i.isAvailable, i.url, A],
          ),
          J = (0, r.useMemo)(() => {
            if (void 0 === i.actualLikesCount || void 0 === i.tracksCount)
              return;
            let t = (0, n.jsx)(y.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                "aria-hidden": !0,
                children: "•",
              }),
              e = i.isLiked ? "likedVariant" : "likeVariant",
              a = ""
                .concat(W, " ")
                .concat(
                  I(
                    { id: "entity-names.tracks-count" },
                    { value: i.tracksCount },
                  ),
                );
            return (0, n.jsxs)("div", {
              className: b().description,
              "aria-label": a,
              children: [
                (0, n.jsxs)("div", {
                  className: b().likesCount,
                  children: [
                    (0, n.jsx)(_.Icon, {
                      className: b().icon,
                      variant: e,
                      size: "xxs",
                    }),
                    (0, n.jsx)(y.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: V(i.actualLikesCount),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: b().tracksCount,
                  children: [
                    t,
                    (0, n.jsx)(y.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, {
                        id: "entity-names.tracks-count",
                        values: { value: V(i.tracksCount) },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }, [I, V, W, i.actualLikesCount, i.isLiked, i.tracksCount]);
        return (0, n.jsxs)(h.Md, {
          ref: j,
          "data-intersection-property-id": N,
          className: (0, a.W)(
            h.$C.root,
            { [h.$C.root_disabled]: !i.isAvailable },
            e,
          ),
          "aria-label": i.title || I({ id: "entity-names.playlist" }),
          onClick: q,
          ...(0, u.BA)(u.bG.playlist.HORIZONTAL_PLAYLIST_CARD),
          children: [
            $,
            (0, n.jsx)(h.u, {
              isDisabled: !i.isAvailable,
              title: X,
              description: J,
            }),
            (0, n.jsx)(f, { playlist: i, likeIconSize: k }),
          ],
        });
      });
    },
    8152: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistCard: function () {
          return L;
        },
      });
      var n = i(75441),
        a = i(32358),
        s = i(62569),
        r = i(65067),
        o = i(9317),
        l = i(4875),
        c = i(35846),
        u = i(84638),
        d = i(93093),
        m = i(14218),
        p = i(18333),
        _ = i(69756),
        y = i(59091),
        v = i(17392),
        x = i(64353),
        h = i(10979),
        C = i(13534),
        g = i(97141),
        P = i(6794),
        k = i(27376),
        f = i(50705);
      let j = (0, s.Pi)((t) => {
        var e;
        let { playlist: i, onOpenChange: a, open: s, ...r } = t,
          { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: m } =
            (0, C.vLf)(),
          {
            experiments: p,
            settings: { isMobile: _ },
            trailer: y,
          } = (0, C.oR4)(),
          v = (0, h.SB)(i),
          x = (0, h.BV)(i),
          P = (0, C.FTC)(),
          { formatMessage: j } = (0, o.Z)(),
          b = (0, C.qsr)(),
          N = p.checkExperiment(C.peG.WebEditorsFeatures, "on"),
          L = (0, f.q3)({
            entityVariant: C.gus.PLAYLIST,
            urlParams: { id: i.uid, kind: i.kind },
          });
        (0, C.ZP4)(s);
        let S = (0, d.W)(() => {
          if (u) {
            m();
            return;
          }
          b() || (y.openPlaylistTrailer(i.id), P(l.OB.Playlist, i.id));
        });
        return (0, n.jsxs)(k.v2, {
          title: i.title,
          onOpenChange: a,
          open: s,
          offsetOptions: 10,
          isMobile: _,
          ariaLabel: j({ id: "interface-actions.context-menu" }),
          containerProps: (0, c.BA)(c.bG.playlist.PLAYLIST_CONTEXT_MENU),
          ...r,
          children: [
            N &&
              (0, n.jsx)(f.ZY, {
                entityVariant: C.gus.PLAYLIST,
                adminUrl: i.isFavouritePlaylist ? void 0 : L,
              }),
            !_ && (0, n.jsx)(g.Zd, { onClick: x, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, n.jsx)(g.xZ, { onClick: v, isLiked: i.isLiked }),
            (null === (e = i.trailer) || void 0 === e
              ? void 0
              : e.isAvailable) &&
              (0, n.jsx)(g.NB, { onClick: S, disabled: !i.isAvailable }),
          ],
        });
      });
      var b = i(96297),
        N = i.n(b);
      let L = (0, s.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            children: s,
            contentLinesCount: k,
            customDescription: f,
          } = t,
          { ref: b, intersectionPropertyId: L } = (0, C.VfV)(),
          { trailer: S, user: B } = (0, C.oR4)(),
          { from: T, utmLink: W } = (0, C.MhG)({
            contextId: i.uuid,
            contextType: u.A.Playlist,
          }),
          { formatMessage: A } = (0, o.Z)(),
          {
            sendLikeSearchFeedback: I,
            sendNavigateSearchFeedback: V,
            sendPlaySearchFeedback: w,
          } = (0, C.sAF)(),
          [z, F] = (0, r.useState)(!1),
          [E, R] = (0, r.useState)(!1),
          [O, U] = (0, r.useState)(!1),
          G = (0, P.z)(i),
          M = (0, h.SB)(i),
          D = (0, h.BV)(i),
          Y = (0, C.zxW)(),
          Z = (0, C.lAI)(),
          q = (0, C.s0h)(i.url),
          H = (0, C.s0h)(i.url, !0),
          K = (0, x.ik)(H, q),
          $ = (0, C.FTC)(),
          X = (0, C.qsr)(),
          J = (0, d.W)((t) => {
            if ((t.stopPropagation(), X())) {
              t.preventDefault();
              return;
            }
            S.setUtmLink(W),
              S.openPlaylistTrailer(i.id),
              $(l.OB.Playlist, i.id);
          }),
          [Q, tt] = (0, r.useState)(!1),
          { isPlaying: te, togglePlay: ti } = (0, C.qmq)({
            playContextParams: {
              contextData: {
                type: u.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: T,
                utmLink: W,
              },
              loadContextMeta: !0,
            },
          }),
          tn = (0, d.W)(() => {
            Y({ to: l.qU.PlaylistScreen }), null == V || V();
          }),
          ta = (0, d.W)((t) => {
            tn(), K(t);
          }),
          ts = (0, d.W)(() => {
            X() || (z || te || (F(!0), null == w || w()), ti(), Z(!te));
          }),
          tr = (0, d.W)(() => {
            E || i.isLiked || (R(!0), null == I || I()), M();
          }),
          to = (0, d.W)((t) => {
            t.preventDefault(), t.stopPropagation();
          }),
          tl = (0, d.W)((t) => {
            U(t), tt(t);
          }),
          tc = (0, r.useMemo)(() => {
            var t;
            return f
              ? (0, n.jsx)(
                  v.Caption,
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
                    x.jO,
                    {
                      className: N().artists,
                      artists: i.artists,
                      lineClamp: 1,
                      linkClassName: N().artistLink,
                      captionSize: "s",
                    },
                    i.getKey("description"),
                  )
                : void 0;
          }, [f, i]),
          tu = (0, m.V)(() => {
            if (!i.isFavouritePlaylist)
              return (0, n.jsx)(
                g.dJ,
                {
                  className: (0, a.W)(N().likeButton, N().control),
                  isLiked: i.isLiked,
                  onClick: tr,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                  disabled: !B.isAuthorized,
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
                g.xf,
                {
                  children: (0, n.jsx)(
                    g.eP,
                    {
                      className: (0, a.W)(N().trailerButton, N().control),
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
                g.RT,
                {
                  onClick: D,
                  isPinned: i.isPinned,
                  className: (0, a.W)(N().pinButton, N().control),
                  withRipple: !1,
                },
                i.getKey("PinButton"),
              ),
            [D, i],
          ),
          tp = (0, r.useMemo)(
            () =>
              (0, n.jsx)(y.Paper, {
                className: N().cover,
                radius: "s",
                withShadow: !0,
                ...(0, c.BA)(c.bG.playlist.PLAYLIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: N().coverBlock,
                  onClick: ta,
                  children: [
                    (0, n.jsx)(g.BE, {
                      className: N().image,
                      src: i.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: G,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsx)(p.kk, {
                      isVisible: O || Q,
                      className: N().controls,
                      playControl: (0, n.jsx)(
                        g.JM,
                        {
                          className: (0, a.W)(N().playButton, N().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: ts,
                          isPlaying: te,
                          disabled: !i.isAvailable,
                        },
                        i.getKey("PlayButton"),
                      ),
                      likeControl: tu,
                      menuControl: (0, n.jsx)(
                        j,
                        {
                          playlist: i,
                          onOpenChange: tl,
                          open: O,
                          onClick: to,
                          className: (0, a.W)(N().menuButton, N().control),
                          icon: (0, n.jsx)(_.Icon, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, c.BA)(
                            c.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
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
            [ta, i, G, O, Q, ts, te, tu, tl, to, tm, td],
          ),
          t_ = !!i.actualLikesCount && !i.isLikesCountHidden;
        return (0, n.jsxs)(p.m7, {
          ref: b,
          "aria-label": G,
          className: (0, a.W)(N().root, e),
          title: (0, n.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, c.BA)(c.bG.playlist.PLAYLIST_TITLE),
            children: (0, n.jsx)(g.rU, {
              className: N().titleLink,
              href: i.url,
              onClick: tn,
              children: i.title,
            }),
          }),
          srTitle: (0, n.jsx)(g.rU, {
            href: i.url,
            onClick: tn,
            children: i.title,
          }),
          "data-intersection-property-id": L,
          contentLinesCount: k,
          view: tp,
          description: tc,
          ...(0, c.BA)(c.bG.playlist.PLAYLIST_ITEM),
          children: [
            t_ &&
              (0, n.jsx)(g.DB, {
                ariaLabel: A(
                  { id: "entity-names.likes-counter" },
                  { counter: i.actualLikesCount },
                ),
                likesCount: i.actualLikesCount,
                isLiked: i.isLiked,
                handleLikeClick: M,
              }),
            s,
          ],
        });
      });
    },
    87352: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistsCarousel: function () {
          return l;
        },
      });
      var n = i(75441),
        a = i(65067),
        s = i(97141),
        r = i(8152);
      let o = (t) => {
          let {
            forwardRef: e,
            isShimmerVisible: i,
            isShimmerActive: a,
            title: o,
            description: l,
            playlists: c,
            containerClassName: u,
            className: d,
            headerClassName: m,
            viewAllActionLink: p,
            headingVariant: _,
            ...y
          } = t;
          return (0, n.jsx)(s.HY, {
            isShimmerVisible: i,
            isShimmerActive: a,
            className: d,
            headerClassName: m,
            containerClassName: u,
            ref: e,
            title: o,
            description: l,
            viewAllActionLink: p,
            headingVariant: _,
            ...y,
            children:
              null == c
                ? void 0
                : c.map((t) =>
                    (0, n.jsx)(
                      r.PlaylistCard,
                      { playlist: t, contentLinesCount: 3 },
                      t.key,
                    ),
                  ),
          });
        },
        l = (0, a.forwardRef)((t, e) => (0, n.jsx)(o, { forwardRef: e, ...t }));
    },
    81746: function (t, e, i) {
      "use strict";
      i.d(e, {
        s6: function () {
          return p.PostPage;
        },
        vU: function () {
          return m;
        },
      });
      var n = i(22874),
        a = i(62726),
        s = i(81445),
        r = i(72783),
        o = i(7797),
        l = i(64353),
        c = i(10979),
        u = i(13534),
        d = i(40892);
      let m = n.V5.compose(
        n.V5.model("PostPage", {
          errorStatusCode: n.V5.maybe(n.V5.number),
          title: n.V5.maybeNull(n.V5.string),
          promotionType: n.V5.maybeNull(n.V5.enumeration(Object.values(s.q))),
          artists: n.V5.maybe(n.V5.array(l.Go)),
          albums: n.V5.maybe(n.V5.array(r.ug)),
          playlists: n.V5.maybe(n.V5.array(o.d2)),
        }),
        d.fu,
      )
        .views((t) => {
          let e = {
            get isLoading() {
              return t.isNeededToLoad || t.loadingState === u.Gui.PENDING;
            },
            get isNotFound() {
              let e =
                t.errorStatusCode === a.CN.NOT_FOUND ||
                t.errorStatusCode === a.CN.BAD_REQUEST;
              return t.isRejected && e;
            },
            get isSomethingWrong() {
              return t.isRejected && !e.isNotFound;
            },
          };
          return e;
        })
        .actions((t) => ({
          getData: (0, n.ls)(function* (e) {
            let { promoId: i } = e,
              { feedResource: s, modelActionsLogger: o } = (0, n.dU)(t);
            if (t.loadingState !== u.Gui.PENDING)
              try {
                t.loadingState = u.Gui.PENDING;
                let e = yield s.getPromotionsById({ promoId: i });
                (t.title = e.title),
                  (t.promotionType = e.promotionType),
                  e.artists &&
                    e.artists.length > 0 &&
                    (t.artists = (0, n.pj)(e.artists.map(l.d))),
                  e.albums &&
                    e.albums.length > 0 &&
                    (t.albums = (0, n.pj)(e.albums.map(r.ym))),
                  e.playlists &&
                    e.playlists.length > 0 &&
                    (t.playlists = (0, n.pj)(
                      e.playlists.map((t) => {
                        let { playlist: e } = t;
                        return (0, c.PV)(e);
                      }),
                    )),
                  t.loadingState !== u.Gui.IDLE &&
                    (t.loadingState = u.Gui.RESOLVE);
              } catch (e) {
                o.error(e),
                  e instanceof a.du &&
                    (e.statusCode === a.CN.NOT_FOUND ||
                      e.statusCode === a.CN.BAD_REQUEST) &&
                    (t.errorStatusCode = a.CN.NOT_FOUND),
                  t.loadingState !== u.Gui.IDLE &&
                    (t.loadingState = u.Gui.REJECT);
              }
          }),
          reset() {
            (t.loadingState = u.Gui.IDLE),
              (t.title = null),
              (t.artists = (0, n.pj)([])),
              (t.albums = (0, n.pj)([]));
          },
        }));
      i(58342);
      var p = i(44157);
    },
    58342: function (t, e, i) {
      "use strict";
      i.d(e, {
        PostNotFoundPage: function () {
          return r;
        },
      });
      var n = i(75441),
        a = i(62569),
        s = i(35551);
      let r = (0, a.Pi)(() => (0, n.jsx)(s.T, {}));
    },
    44157: function (t, e, i) {
      "use strict";
      i.d(e, {
        PostPage: function () {
          return I;
        },
      });
      var n = i(75441),
        a = i(32358),
        s = i(62569),
        r = i(98730),
        o = i(65067),
        l = i(81445),
        c = i(17294),
        u = i(28676),
        d = i(17392),
        m = i(30948),
        p = i(69947),
        _ = i(13534),
        y = i(97141),
        v = i(36173),
        x = i.n(v);
      let h = () =>
        (0, n.jsxs)("div", {
          className: x().root,
          children: [
            (0, n.jsx)(u.Shimmer, { radius: "l", className: x().top }),
            (0, n.jsx)(u.Shimmer, { radius: "l", className: x().bottom }),
          ],
        });
      var C = i(98644),
        g = i.n(C),
        P = i(72783),
        k = i(34919),
        f = i.n(k);
      let j = (0, s.Pi)((t) => {
        let { albums: e = [] } = t;
        return (0, n.jsx)("div", {
          className: f().root,
          children: (0, n.jsx)("div", {
            className: f().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: e.map((t) =>
              (0, n.jsx)(
                P.rf,
                { className: f().item, album: t, contentLinesCount: 3 },
                t.id,
              ),
            ),
          }),
        });
      });
      var b = i(55051),
        N = i(55931),
        L = i.n(N);
      let S = (0, s.Pi)((t) => {
        let { artists: e = [] } = t;
        return (0, n.jsx)("div", {
          className: L().root,
          children: (0, n.jsx)("div", {
            className: L().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: e.map((t) =>
              (0, n.jsx)(
                b.IT,
                { className: L().item, artist: t, contentLinesCount: 3 },
                t.id,
              ),
            ),
          }),
        });
      });
      var B = i(7797),
        T = i(56039),
        W = i.n(T);
      let A = (0, s.Pi)((t) => {
          let { playlists: e = [] } = t;
          return (0, n.jsx)("div", {
            className: W().root,
            children: (0, n.jsx)("div", {
              className: W().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: e.map((t) =>
                (0, n.jsx)(
                  B.ZL,
                  { className: W().item, playlist: t, contentLinesCount: 3 },
                  t.id,
                ),
              ),
            }),
          });
        }),
        I = (0, s.Pi)((t) => {
          let { promoId: e } = t,
            { post: i } = (0, _.oR4)(),
            s = (0, _.k67)(),
            { contentScrollRef: v, setContentScrollRef: x } = (0, _.$Y6)();
          (0, o.useEffect)(
            () => () => {
              i.reset();
            },
            [i],
          ),
            i.isNotFound && (0, r.notFound)(),
            (0, _.NOh)(i.isResolved);
          let C = (0, o.useMemo)(() => {
            if (i.isLoading) return (0, n.jsx)(h, {});
            switch (i.promotionType) {
              case l.q.ARTISTS:
                return (0, n.jsx)(S, { artists: i.artists });
              case l.q.ALBUMS:
                return (0, n.jsx)(j, { albums: i.albums });
              case l.q.PLAYLISTS:
                return (0, n.jsx)(A, { playlists: i.playlists });
              default:
                (0, r.notFound)();
            }
          }, [i.albums, i.artists, i.isLoading, i.playlists, i.promotionType]);
          return (e &&
            i.isNeededToLoad &&
            (0, o.use)(i.getData({ promoId: e })),
          i.isSomethingWrong)
            ? (0, n.jsx)(m.D, {})
            : (0, n.jsx)(_.Lh6, {
                pageId: _.Rhz.POST,
                children: (0, n.jsx)(p.I7, {
                  scrollElement: v,
                  outerTitle: i.title || void 0,
                  children: (0, n.jsxs)("div", {
                    className: g().root,
                    children: [
                      (0, n.jsx)(y.h4, {
                        variant: y.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: s.canBack,
                        children: i.title
                          ? (0, n.jsx)(d.Heading, {
                              id: "post-header",
                              variant: "h2",
                              weight: "bold",
                              size: "xl",
                              lineClamp: 1,
                              children: i.title,
                            })
                          : (0, n.jsx)(u.Shimmer, {
                              className: g().shimmerTitle,
                              radius: "l",
                            }),
                      }),
                      (0, n.jsx)(c.t, {
                        containerClassName: (0, a.W)(
                          g().scrollContainer,
                          g().important,
                        ),
                        className: g().scrollableContainer,
                        ref: x,
                        children: (0, n.jsx)("div", {
                          className: g().container,
                          children: C,
                        }),
                      }),
                    ],
                  }),
                }),
              });
        });
    },
    35551: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = i(15898);
    },
    15898: function (t, e, i) {
      "use strict";
      i.d(e, {
        NotFound: function () {
          return _;
        },
      });
      var n = i(75441),
        a = i(32358),
        s = i(62569),
        r = i(15937),
        o = i(68208),
        l = i(69756),
        c = i(17392),
        u = i(13534),
        d = i(97141),
        m = i(35129),
        p = i.n(m);
      let _ = (0, s.Pi)((t) => {
        let { className: e } = t,
          { contentRef: i } = (0, u.$Y6)(),
          s = (0, u.s0h)("/");
        return (
          (0, u.ZP4)(!0),
          (0, n.jsxs)("div", {
            className: (0, a.W)(p().root, { [p().root_desktop]: !i }, e),
            children: [
              (0, n.jsx)(d.nP, {
                withBackwardFallback: "/",
                className: p().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: p().content,
                children: [
                  (0, n.jsx)(l.Icon, {
                    className: p().icon,
                    variant: "musicLogo",
                  }),
                  (0, n.jsx)(c.Heading, {
                    className: (0, a.W)(p().title, p().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(c.Caption, {
                    className: (0, a.W)(p().text, p().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(o.Button, {
                    onClick: s,
                    className: p().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, n.jsx)(r.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    30948: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return n.SomethingWentWrong;
        },
      });
      var n = i(51987);
    },
    51987: function (t, e, i) {
      "use strict";
      i.d(e, {
        SomethingWentWrong: function () {
          return y;
        },
      });
      var n = i(75441),
        a = i(32358),
        s = i(62569),
        r = i(65067),
        o = i(15937),
        l = i(68208),
        c = i(69756),
        u = i(17392),
        d = i(13534),
        m = i(97141),
        p = i(28652),
        _ = i.n(p);
      let y = (0, s.Pi)((t) => {
        let { className: e, withBackwardControl: i = !0 } = t,
          s = (0, r.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: p } = (0, d.$Y6)();
        return (0, n.jsxs)("div", {
          className: (0, a.W)(_().root, e),
          children: [
            i &&
              (0, n.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: (0, a.W)(_().navigation, {
                  [_().navigation_desktop]: !p,
                }),
                withForwardControl: !1,
              }),
            (0, n.jsxs)("div", {
              className: (0, a.W)(_().content, { [_().content_shrink]: !i }),
              children: [
                (0, n.jsx)(c.Icon, {
                  className: _().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, n.jsx)(u.Heading, {
                  className: (0, a.W)(_().title, _().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, n.jsx)(o.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, n.jsxs)(u.Caption, {
                  className: (0, a.W)(_().text, _().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, n.jsx)(o.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, n.jsx)(l.Button, {
                  onClick: s,
                  className: _().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, n.jsxs)(u.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, n.jsx)(o.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
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
    98644: function (t) {
      t.exports = {
        root: "PostPage_root__Orhf7",
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        scrollContainer: "PostPage_scrollContainer__zrIrH",
        important: "PostPage_important__qUlED",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    34919: function (t) {
      t.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    55931: function (t) {
      t.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    56039: function (t) {
      t.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    36173: function (t) {
      t.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    35129: function (t) {
      t.exports = {
        root: "NotFound_root__47ZX6",
        root_desktop: "NotFound_root_desktop___QqSb",
        navigation: "NotFound_navigation__q8rIW",
        content: "NotFound_content__3kry_",
        icon: "NotFound_icon___Wa9y",
        title: "NotFound_title__akG_o",
        important: "NotFound_important__z1LWl",
        text: "NotFound_text__oxDZv",
        button: "NotFound_button__jF4uH",
      };
    },
    28652: function (t) {
      t.exports = {
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
    81445: function (t, e, i) {
      "use strict";
      var n, a;
      i.d(e, {
        q: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).ALBUMS = "albums"),
        (a.ARTISTS = "artists"),
        (a.PLAYLISTS = "playlists");
    },
  },
  function (t) {
    t.O(
      0,
      [
        9876, 5970, 8580, 4665, 9125, 1729, 7138, 5453, 7873, 9282, 7141, 892,
        1512, 2783, 2399, 7294, 7099, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 76626));
      },
    ),
      (_N_E = t.O());
  },
]);
