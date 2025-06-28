(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4378],
  {
    77985: function (t, i, e) {
      Promise.resolve().then(e.bind(e, 74348));
    },
    74348: function (t, i, e) {
      "use strict";
      e.r(i);
      var n = e(75441),
        a = e(98730),
        l = e(26172);
      i.default = () => {
        let t = (0, a.useSearchParams)().get("metatagId");
        return t || (0, a.notFound)(), (0, n.jsx)(l.eq, { metatagId: t });
      };
    },
    7797: function (t, i, e) {
      "use strict";
      e.d(i, {
        vY: function () {
          return P.EmptyPlaylistBlock;
        },
        Tq: function () {
          return j.HorizontalPlaylistCard;
        },
        ZL: function () {
          return L.PlaylistCard;
        },
        Nn: function () {
          return g;
        },
        d2: function () {
          return f;
        },
        VD: function () {
          return b.PlaylistsCarousel;
        },
        RE: function () {
          return l;
        },
        Q9: function () {
          return d;
        },
        VB: function () {
          return _;
        },
        PB: function () {
          return y;
        },
      });
      var n = e(22874),
        a = e(13534);
      let l = (t) => {
        var i, e;
        let {
          playlist: l,
          generatedPlaylistType: r,
          likesCount: s,
          trailer: o,
          tracksCount: c,
        } = t;
        return (0, n.pj)({
          isAvailable: null === (e = l.available) || void 0 === e || e,
          uuid: l.playlistUuid,
          title: l.title,
          uid: l.uid,
          kind: l.kind,
          coverUri: null === (i = l.cover) || void 0 === i ? void 0 : i.uri,
          generatedPlaylistType: r,
          likesCount: s,
          tracksCount: c,
          trailer: (0, a.GFX)(o),
        });
      };
      var r = e(98730),
        s = e(65067);
      (0, s.cache)(async (t, i) => {
        try {
          let {
            container: e,
            backendHostTld: n,
            locale: l,
            host: s,
            fullUrl: o,
            isRSC: c,
            requestUrl: u,
          } = await (0, a.rbP)();
          if (c)
            return {
              playlist: void 0,
              backendHostTld: n,
              locale: l,
              host: s,
              fullUrl: o,
              requestUrl: u,
            };
          let d = e.get(a.Eug),
            m = await d.getPlaylistWithTracksIds({
              userId: t,
              playlistKind: i,
              resumeStream: !1,
            });
          return (
            "not-found" === m.error && (0, r.notFound)(),
            {
              playlist: m,
              backendHostTld: n,
              locale: l,
              host: s,
              fullUrl: o,
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
        (0, s.cache)(async (t) => {
          (0, a.aIc)(t) || (0, r.notFound)();
          try {
            let {
              container: i,
              backendHostTld: e,
              locale: n,
              host: l,
              fullUrl: s,
              isRSC: o,
              requestUrl: c,
            } = await (0, a.rbP)();
            if (o)
              return {
                playlist: void 0,
                backendHostTld: e,
                locale: n,
                host: l,
                fullUrl: s,
                requestUrl: c,
              };
            let u = i.get(a.lkR),
              d = await u.getPlaylist({
                playlistUuid: t,
                resumeStream: !1,
                richTracks: !1,
              });
            return (
              "not-found" === d.error && (0, r.notFound)(),
              {
                playlist: d,
                backendHostTld: e,
                locale: n,
                host: l,
                fullUrl: s,
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
      var o = e(10979);
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
            ...(0, o.PV)(t),
            owner: t.owner ? c(t.owner) : void 0,
            description: t.description,
            tags: t.tags,
            modified: t.modified,
            madeFor: t.madeFor ? u(t.madeFor) : null,
          });
      var m = e(64353);
      let _ = (t) => {
        var i, e;
        return (0, n.pj)({
          ...(0, o.PV)(t),
          artists:
            null !==
              (e =
                null == t
                  ? void 0
                  : null === (i = t.artists) || void 0 === i
                    ? void 0
                    : i.map(m.d)) && void 0 !== e
              ? e
              : [],
        });
      };
      var p = e(32399);
      let y = (t) => {
        var i, e;
        return (0, n.pj)({
          ...(0, o.PV)(t),
          tracks:
            null !==
              (e =
                null == t
                  ? void 0
                  : null === (i = t.tracks) || void 0 === i
                    ? void 0
                    : i.map(p.wM)) && void 0 !== e
              ? e
              : [],
        });
      };
      var v = e(40892),
        x = e(92719);
      let k = n.V5.model("PlaylistOwner", {
          uid: n.V5.number,
          login: n.V5.string,
          name: n.V5.string,
          sex: n.V5.enumeration(Object.values(x.o)),
          verified: n.V5.boolean,
        }),
        C = n.V5.model("PlaylistOwner", {
          userInfo: n.V5.maybeNull(k),
          caseForms: n.V5.maybeNull(v.S2),
        }),
        h = n.V5.model("PlaylistTag", { id: n.V5.string, value: n.V5.string }),
        g = o.Cd.props({
          owner: n.V5.maybe(k),
          modified: n.V5.string,
          description: n.V5.maybe(n.V5.string),
          tags: n.V5.maybeNull(n.V5.array(h)),
          madeFor: n.V5.maybeNull(C),
        })
          .views((t) => ({
            get seeds() {
              var i;
              return [
                "playlist:"
                  .concat(
                    null === (i = t.owner) || void 0 === i ? void 0 : i.login,
                    "_",
                  )
                  .concat(t.kind),
              ];
            },
            get tagsString() {
              let { experiments: i } = (0, n.yj)(t);
              if (
                !i.checkExperiment(a.peG.WebEditorsFeatures, "on") ||
                !Array.isArray(t.tags) ||
                !t.tags.length
              )
                return null;
              return t.tags.map((t) => t.value).join(", ");
            },
          }))
          .actions((t) => ({
            changeDescription: (0, n.ls)(function* (i) {
              if (!(0, n.fh)(t)) return a.SLo.ERROR;
              if (t.description === i) return a.SLo.OK;
              if (i.length > o.Zn) return a.SLo.ERROR;
              let { usersResource: e, modelActionsLogger: l } = (0, n.dU)(t);
              if (t.canUserChange) {
                let n = t.description;
                t.description = i;
                try {
                  let n = yield e.changePlaylistDescription({
                    description: i,
                    userId: t.uid,
                    playlistKind: t.kind,
                  });
                  return (t.description = n.description), a.SLo.OK;
                } catch (i) {
                  (t.description = n), l.error(i);
                }
              }
              return a.SLo.ERROR;
            }),
            changePlaylistCover: (0, n.ls)(function* (i) {
              if (!(0, n.fh)(t)) return a.SLo.ERROR;
              let { usersResource: e, modelActionsLogger: l } = (0, n.dU)(t);
              try {
                let n = yield e.uploadPlaylistCover({
                  userId: t.uid,
                  formData: i,
                  playlistKind: t.kind,
                });
                return (t.coverUri = n.cover.uri), a.SLo.OK;
              } catch (t) {
                l.error(t);
              }
              return a.SLo.ERROR;
            }),
          }))
          .named("PlaylistMeta"),
        f = o.$h.props({ artists: n.V5.maybe(n.V5.array(m.Go)) });
      var P = e(59539),
        j = e(86133),
        L = e(8152),
        b = e(87352);
    },
    6794: function (t, i, e) {
      "use strict";
      e.d(i, {
        z: function () {
          return l;
        },
      });
      var n = e(65067),
        a = e(9317);
      let l = (t) => {
        let { formatMessage: i } = (0, a.Z)();
        return (0, n.useMemo)(() => {
          let e = "";
          t.isLiked && !t.actualLikesCount
            ? (e = i({ id: "entity-names.has-your-like" }))
            : "number" == typeof t.actualLikesCount &&
              (e =
                t.actualLikesCount > 0
                  ? i(
                      { id: "entity-names.likes-counter" },
                      { counter: t.actualLikesCount },
                    )
                  : i({ id: "entity-names.likes-counter-empty" }));
          let n = i(
            { id: "entity-names.playlist-name" },
            { playlistName: t.title },
          );
          return "".concat(n, " ").concat(e);
        }, [i, t]);
      };
    },
    59539: function (t, i, e) {
      "use strict";
      e.d(i, {
        EmptyPlaylistBlock: function () {
          return m;
        },
      });
      var n = e(75441),
        a = e(32358),
        l = e(65067),
        r = e(15937),
        s = e(35846),
        o = e(69756),
        c = e(17392),
        u = e(63950),
        d = e.n(u);
      let m = (t) => {
        let { className: i, isEmptySearch: e } = t,
          u = (0, l.useMemo)(
            () =>
              e
                ? (0, n.jsx)(r.Z, { id: "search-results.not-found-title" })
                : (0, n.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [e],
          ),
          m = (0, l.useMemo)(
            () =>
              e
                ? (0, n.jsx)(r.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, n.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [e],
          );
        return (0, n.jsxs)("div", {
          className: (0, a.W)(d().root, i),
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
            (0, n.jsx)(c.Heading, {
              variant: "h3",
              size: "xs",
              className: d().title,
              ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),
              children: u,
            }),
            (0, n.jsx)(c.Caption, {
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
    86133: function (t, i, e) {
      "use strict";
      e.d(i, {
        HorizontalPlaylistCard: function () {
          return b;
        },
      });
      var n = e(75441),
        a = e(32358),
        l = e(62569),
        r = e(65067),
        s = e(9317),
        o = e(15937),
        c = e(4875),
        u = e(35846),
        d = e(84638),
        m = e(93093),
        _ = e(91307),
        p = e(69756),
        y = e(17392),
        v = e(64353),
        x = e(13534),
        k = e(97141),
        C = e(6794),
        h = e(10979),
        g = e(75908),
        f = e.n(g);
      let P = (0, l.Pi)((t) => {
        var i;
        let { className: e, playlist: l, likeIconSize: s = "xxs" } = t,
          { user: o, trailer: u } = (0, x.oR4)(),
          d = (0, x.qsr)(),
          { sendLikeSearchFeedback: _ } = (0, x.sAF)(),
          y = (0, h.SB)(l),
          [v, C] = (0, r.useState)(!1),
          g = (0, m.W)(async () => {
            v || l.isLiked || (C(!0), null == _ || _()), await y();
          }),
          P = (0, x.FTC)(),
          j = (0, m.W)((t) => {
            if ((t.stopPropagation(), d())) {
              t.preventDefault();
              return;
            }
            u.openPlaylistTrailer(l.id), P(c.OB.Playlist, l.id);
          });
        return (0, n.jsxs)("div", {
          className: (0, a.W)(f().root, f().controls, e, {
            [f().controls_disabled]: !l.isAvailable,
          }),
          children: [
            l.isAvailable &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(k.FM, {
                    fallback: (0, n.jsx)(k.dJ, {
                      size: "xs",
                      iconSize: s,
                      className: (0, a.W)(f().item, f().likeIcon),
                      isLiked: l.isLiked,
                      onClick: g,
                      disabled: !o.isAuthorized,
                    }),
                  }),
                  (null === (i = l.trailer) || void 0 === i
                    ? void 0
                    : i.isAvailable) &&
                    (0, n.jsx)(k.FM, {
                      fallback: (0, n.jsx)(k.eP, {
                        className: (0, a.W)(f().item, f().trailerIcon),
                        iconSize: "xs",
                        variant: "text",
                        onClick: j,
                        withRipple: !1,
                      }),
                    }),
                ],
              }),
            (0, n.jsx)("div", {
              className: (0, a.W)(f().item, f().item_buttonArrow),
              children: (0, n.jsx)(p.Icon, {
                className: k.$C.buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
      var j = e(53948),
        L = e.n(j);
      let b = (0, l.Pi)((t) => {
        let {
            className: i,
            playlist: e,
            pageId: l,
            coverClassName: h,
            playButtonIconSize: g,
            likeIconSize: f,
          } = t,
          { ref: j, intersectionPropertyId: b } = (0, x.VfV)(),
          { from: N } = (0, x.MhG)({ pageId: l }),
          [B, W] = (0, r.useState)(!1),
          A = (0, x.lAI)(),
          S = (0, C.z)(e),
          w = e.title || "",
          { formatMessage: z, formatNumber: T } = (0, s.Z)(),
          F = (0, x.qsr)(),
          { sendNavigateSearchFeedback: I, sendPlaySearchFeedback: V } = (0,
          x.sAF)(),
          E = (0, x.zxW)(),
          {
            isPlaying: R,
            isCurrent: M,
            togglePlay: O,
          } = (0, x.qmq)({
            playContextParams: {
              contextData: {
                type: d.A.Playlist,
                meta: { id: e.id, uuid: e.uuid },
                from: N,
              },
              loadContextMeta: !0,
            },
          }),
          Y = (0, x.s0h)(e.url),
          U = (0, x.s0h)(e.url, !0),
          Z = (0, v.ik)(U, Y),
          G = (0, m.W)((t) => {
            null == I || I(),
              E({ to: c.qU.PlaylistScreen }),
              t.preventDefault(),
              Z(t);
          }),
          H = (0, m.W)(() => {
            F() || (B || R || (W(!0), null == V || V()), O(), A(!R));
          }),
          K = (0, m.W)((t) => {
            (0, _.m)(t, k.$C.ripple), G(t);
          }),
          q = (0, m.W)((t) => {
            t.stopPropagation(), G(t);
          }),
          D = (0, r.useCallback)(
            (t) =>
              (0, n.jsx)(k.Df, {
                isAvailable: e.isAvailable,
                isDisliked: !1,
                coverUri: e.coverUri,
                title: w,
                className: (0, a.W)(k.$C.playButtonCell, h),
                alt: z(
                  { id: "entity-names.playlist-name" },
                  { playlistName: w },
                ),
                ...t,
              }),
            [e, w, h, z],
          ),
          $ =
            null == D
              ? void 0
              : D({
                  onPlayButtonClick: H,
                  isPlaying: R,
                  isCurrent: M,
                  playButtonIconSize: g,
                }),
          X = (0, r.useMemo)(
            () =>
              e.url && e.isAvailable
                ? (0, n.jsx)(k.rU, {
                    className: (0, a.W)(k.$C.text, k.$C.titleLink),
                    href: e.url,
                    onClick: q,
                    children: w,
                  })
                : (0, n.jsx)(y.Caption, {
                    className: (0, a.W)(k.$C.text, k.$C.titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: w,
                  }),
            [q, e.isAvailable, e.url, w],
          ),
          J = (0, r.useMemo)(() => {
            if (void 0 === e.actualLikesCount || void 0 === e.tracksCount)
              return;
            let t = (0, n.jsx)(y.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                "aria-hidden": !0,
                children: "•",
              }),
              i = e.isLiked ? "likedVariant" : "likeVariant",
              a = ""
                .concat(S, " ")
                .concat(
                  z(
                    { id: "entity-names.tracks-count" },
                    { value: e.tracksCount },
                  ),
                );
            return (0, n.jsxs)("div", {
              className: L().description,
              "aria-label": a,
              children: [
                (0, n.jsxs)("div", {
                  className: L().likesCount,
                  children: [
                    (0, n.jsx)(p.Icon, {
                      className: L().icon,
                      variant: i,
                      size: "xxs",
                    }),
                    (0, n.jsx)(y.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: T(e.actualLikesCount),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: L().tracksCount,
                  children: [
                    t,
                    (0, n.jsx)(y.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: (0, n.jsx)(o.Z, {
                        id: "entity-names.tracks-count",
                        values: { value: T(e.tracksCount) },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }, [z, T, S, e.actualLikesCount, e.isLiked, e.tracksCount]);
        return (0, n.jsxs)(k.Md, {
          ref: j,
          "data-intersection-property-id": b,
          className: (0, a.W)(
            k.$C.root,
            { [k.$C.root_disabled]: !e.isAvailable },
            i,
          ),
          "aria-label": e.title || z({ id: "entity-names.playlist" }),
          onClick: K,
          ...(0, u.BA)(u.bG.playlist.HORIZONTAL_PLAYLIST_CARD),
          children: [
            $,
            (0, n.jsx)(k.u, {
              isDisabled: !e.isAvailable,
              title: X,
              description: J,
            }),
            (0, n.jsx)(P, { playlist: e, likeIconSize: f }),
          ],
        });
      });
    },
    8152: function (t, i, e) {
      "use strict";
      e.d(i, {
        PlaylistCard: function () {
          return N;
        },
      });
      var n = e(75441),
        a = e(32358),
        l = e(62569),
        r = e(65067),
        s = e(9317),
        o = e(4875),
        c = e(35846),
        u = e(84638),
        d = e(93093),
        m = e(14218),
        _ = e(18333),
        p = e(69756),
        y = e(59091),
        v = e(17392),
        x = e(64353),
        k = e(10979),
        C = e(13534),
        h = e(97141),
        g = e(6794),
        f = e(27376),
        P = e(50705);
      let j = (0, l.Pi)((t) => {
        var i;
        let { playlist: e, onOpenChange: a, open: l, ...r } = t,
          { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: m } =
            (0, C.vLf)(),
          {
            experiments: _,
            settings: { isMobile: p },
            trailer: y,
          } = (0, C.oR4)(),
          v = (0, k.SB)(e),
          x = (0, k.BV)(e),
          g = (0, C.FTC)(),
          { formatMessage: j } = (0, s.Z)(),
          L = (0, C.qsr)(),
          b = _.checkExperiment(C.peG.WebEditorsFeatures, "on"),
          N = (0, P.q3)({
            entityVariant: C.gus.PLAYLIST,
            urlParams: { id: e.uid, kind: e.kind },
          });
        (0, C.ZP4)(l);
        let B = (0, d.W)(() => {
          if (u) {
            m();
            return;
          }
          L() || (y.openPlaylistTrailer(e.id), g(o.OB.Playlist, e.id));
        });
        return (0, n.jsxs)(f.v2, {
          title: e.title,
          onOpenChange: a,
          open: l,
          offsetOptions: 10,
          isMobile: p,
          ariaLabel: j({ id: "interface-actions.context-menu" }),
          containerProps: (0, c.BA)(c.bG.playlist.PLAYLIST_CONTEXT_MENU),
          ...r,
          children: [
            b &&
              (0, n.jsx)(P.ZY, {
                entityVariant: C.gus.PLAYLIST,
                adminUrl: e.isFavouritePlaylist ? void 0 : N,
              }),
            !p && (0, n.jsx)(h.Zd, { onClick: x, isPinned: e.isPinned }),
            !e.isFavouritePlaylist &&
              (0, n.jsx)(h.xZ, { onClick: v, isLiked: e.isLiked }),
            (null === (i = e.trailer) || void 0 === i
              ? void 0
              : i.isAvailable) &&
              (0, n.jsx)(h.NB, { onClick: B, disabled: !e.isAvailable }),
          ],
        });
      });
      var L = e(96297),
        b = e.n(L);
      let N = (0, l.Pi)((t) => {
        let {
            className: i,
            playlist: e,
            children: l,
            contentLinesCount: f,
            customDescription: P,
          } = t,
          { ref: L, intersectionPropertyId: N } = (0, C.VfV)(),
          { trailer: B, user: W } = (0, C.oR4)(),
          { from: A, utmLink: S } = (0, C.MhG)({
            contextId: e.uuid,
            contextType: u.A.Playlist,
          }),
          { formatMessage: w } = (0, s.Z)(),
          {
            sendLikeSearchFeedback: z,
            sendNavigateSearchFeedback: T,
            sendPlaySearchFeedback: F,
          } = (0, C.sAF)(),
          [I, V] = (0, r.useState)(!1),
          [E, R] = (0, r.useState)(!1),
          [M, O] = (0, r.useState)(!1),
          Y = (0, g.z)(e),
          U = (0, k.SB)(e),
          Z = (0, k.BV)(e),
          G = (0, C.zxW)(),
          H = (0, C.lAI)(),
          K = (0, C.s0h)(e.url),
          q = (0, C.s0h)(e.url, !0),
          D = (0, x.ik)(q, K),
          $ = (0, C.FTC)(),
          X = (0, C.qsr)(),
          J = (0, d.W)((t) => {
            if ((t.stopPropagation(), X())) {
              t.preventDefault();
              return;
            }
            B.setUtmLink(S),
              B.openPlaylistTrailer(e.id),
              $(o.OB.Playlist, e.id);
          }),
          [Q, tt] = (0, r.useState)(!1),
          { isPlaying: ti, togglePlay: te } = (0, C.qmq)({
            playContextParams: {
              contextData: {
                type: u.A.Playlist,
                meta: { id: e.id, uuid: e.uuid },
                from: A,
                utmLink: S,
              },
              loadContextMeta: !0,
            },
          }),
          tn = (0, d.W)(() => {
            G({ to: o.qU.PlaylistScreen }), null == T || T();
          }),
          ta = (0, d.W)((t) => {
            tn(), D(t);
          }),
          tl = (0, d.W)(() => {
            X() || (I || ti || (V(!0), null == F || F()), te(), H(!ti));
          }),
          tr = (0, d.W)(() => {
            E || e.isLiked || (R(!0), null == z || z()), U();
          }),
          ts = (0, d.W)((t) => {
            t.preventDefault(), t.stopPropagation();
          }),
          to = (0, d.W)((t) => {
            O(t), tt(t);
          }),
          tc = (0, r.useMemo)(() => {
            var t;
            return P
              ? (0, n.jsx)(
                  v.Caption,
                  {
                    variant: "span",
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    lineClamp: 2,
                    children: P,
                  },
                  e.getKey("description"),
                )
              : (null === (t = e.artists) || void 0 === t ? void 0 : t.length)
                ? (0, n.jsx)(
                    x.jO,
                    {
                      className: b().artists,
                      artists: e.artists,
                      lineClamp: 1,
                      linkClassName: b().artistLink,
                      captionSize: "s",
                    },
                    e.getKey("description"),
                  )
                : void 0;
          }, [P, e]),
          tu = (0, m.V)(() => {
            if (!e.isFavouritePlaylist)
              return (0, n.jsx)(
                h.dJ,
                {
                  className: (0, a.W)(b().likeButton, b().control),
                  isLiked: e.isLiked,
                  onClick: tr,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                  disabled: !W.isAuthorized,
                },
                e.getKey("LikeButton"),
              );
          }),
          td = (0, r.useMemo)(() => {
            var t;
            if (
              null == e
                ? void 0
                : null === (t = e.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable
            )
              return (0, n.jsx)(
                h.xf,
                {
                  children: (0, n.jsx)(
                    h.eP,
                    {
                      className: (0, a.W)(b().trailerButton, b().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: J,
                    },
                    e.getKey("TrailerButton"),
                  ),
                },
                e.getKey("PlaylilstCardTrailerTooltip"),
              );
          }, [J, e]),
          tm = (0, r.useMemo)(
            () =>
              (0, n.jsx)(
                h.RT,
                {
                  onClick: Z,
                  isPinned: e.isPinned,
                  className: (0, a.W)(b().pinButton, b().control),
                  withRipple: !1,
                },
                e.getKey("PinButton"),
              ),
            [Z, e],
          ),
          t_ = (0, r.useMemo)(
            () =>
              (0, n.jsx)(y.Paper, {
                className: b().cover,
                radius: "s",
                withShadow: !0,
                ...(0, c.BA)(c.bG.playlist.PLAYLIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: b().coverBlock,
                  onClick: ta,
                  children: [
                    (0, n.jsx)(h.BE, {
                      className: b().image,
                      src: e.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: Y,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsx)(_.kk, {
                      isVisible: M || Q,
                      className: b().controls,
                      playControl: (0, n.jsx)(
                        h.JM,
                        {
                          className: (0, a.W)(b().playButton, b().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: tl,
                          isPlaying: ti,
                          disabled: !e.isAvailable,
                        },
                        e.getKey("PlayButton"),
                      ),
                      likeControl: tu,
                      menuControl: (0, n.jsx)(
                        j,
                        {
                          playlist: e,
                          onOpenChange: to,
                          open: M,
                          onClick: ts,
                          className: (0, a.W)(b().menuButton, b().control),
                          icon: (0, n.jsx)(p.Icon, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, c.BA)(
                            c.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        },
                        e.getKey("PlaylistContextMenu"),
                      ),
                      pinControl: tm,
                      trailerControl: td,
                    }),
                  ],
                }),
              }),
            [ta, e, Y, M, Q, tl, ti, tu, to, ts, tm, td],
          ),
          tp = !!e.actualLikesCount && !e.isLikesCountHidden;
        return (0, n.jsxs)(_.m7, {
          ref: L,
          "aria-label": Y,
          className: (0, a.W)(b().root, i),
          title: (0, n.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, c.BA)(c.bG.playlist.PLAYLIST_TITLE),
            children: (0, n.jsx)(h.rU, {
              className: b().titleLink,
              href: e.url,
              onClick: tn,
              children: e.title,
            }),
          }),
          srTitle: (0, n.jsx)(h.rU, {
            href: e.url,
            onClick: tn,
            children: e.title,
          }),
          "data-intersection-property-id": N,
          contentLinesCount: f,
          view: t_,
          description: tc,
          ...(0, c.BA)(c.bG.playlist.PLAYLIST_ITEM),
          children: [
            tp &&
              (0, n.jsx)(h.DB, {
                ariaLabel: w(
                  { id: "entity-names.likes-counter" },
                  { counter: e.actualLikesCount },
                ),
                likesCount: e.actualLikesCount,
                isLiked: e.isLiked,
                handleLikeClick: U,
              }),
            l,
          ],
        });
      });
    },
    87352: function (t, i, e) {
      "use strict";
      e.d(i, {
        PlaylistsCarousel: function () {
          return o;
        },
      });
      var n = e(75441),
        a = e(65067),
        l = e(97141),
        r = e(8152);
      let s = (t) => {
          let {
            forwardRef: i,
            isShimmerVisible: e,
            isShimmerActive: a,
            title: s,
            description: o,
            playlists: c,
            containerClassName: u,
            className: d,
            headerClassName: m,
            viewAllActionLink: _,
            headingVariant: p,
            ...y
          } = t;
          return (0, n.jsx)(l.HY, {
            isShimmerVisible: e,
            isShimmerActive: a,
            className: d,
            headerClassName: m,
            containerClassName: u,
            ref: i,
            title: s,
            description: o,
            viewAllActionLink: _,
            headingVariant: p,
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
        o = (0, a.forwardRef)((t, i) => (0, n.jsx)(s, { forwardRef: i, ...t }));
    },
    35551: function (t, i, e) {
      "use strict";
      e.d(i, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = e(15898);
    },
    15898: function (t, i, e) {
      "use strict";
      e.d(i, {
        NotFound: function () {
          return p;
        },
      });
      var n = e(75441),
        a = e(32358),
        l = e(62569),
        r = e(15937),
        s = e(68208),
        o = e(69756),
        c = e(17392),
        u = e(13534),
        d = e(97141),
        m = e(35129),
        _ = e.n(m);
      let p = (0, l.Pi)((t) => {
        let { className: i } = t,
          { contentRef: e } = (0, u.$Y6)(),
          l = (0, u.s0h)("/");
        return (
          (0, u.ZP4)(!0),
          (0, n.jsxs)("div", {
            className: (0, a.W)(_().root, { [_().root_desktop]: !e }, i),
            children: [
              (0, n.jsx)(d.nP, {
                withBackwardFallback: "/",
                className: _().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: _().content,
                children: [
                  (0, n.jsx)(o.Icon, {
                    className: _().icon,
                    variant: "musicLogo",
                  }),
                  (0, n.jsx)(c.Heading, {
                    className: (0, a.W)(_().title, _().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(c.Caption, {
                    className: (0, a.W)(_().text, _().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(s.Button, {
                    onClick: l,
                    className: _().button,
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
    30948: function (t, i, e) {
      "use strict";
      e.d(i, {
        D: function () {
          return n.SomethingWentWrong;
        },
      });
      var n = e(51987);
    },
    51987: function (t, i, e) {
      "use strict";
      e.d(i, {
        SomethingWentWrong: function () {
          return y;
        },
      });
      var n = e(75441),
        a = e(32358),
        l = e(62569),
        r = e(65067),
        s = e(15937),
        o = e(68208),
        c = e(69756),
        u = e(17392),
        d = e(13534),
        m = e(97141),
        _ = e(28652),
        p = e.n(_);
      let y = (0, l.Pi)((t) => {
        let { className: i, withBackwardControl: e = !0 } = t,
          l = (0, r.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: _ } = (0, d.$Y6)();
        return (0, n.jsxs)("div", {
          className: (0, a.W)(p().root, i),
          children: [
            e &&
              (0, n.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: (0, a.W)(p().navigation, {
                  [p().navigation_desktop]: !_,
                }),
                withForwardControl: !1,
              }),
            (0, n.jsxs)("div", {
              className: (0, a.W)(p().content, { [p().content_shrink]: !e }),
              children: [
                (0, n.jsx)(c.Icon, {
                  className: p().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, n.jsx)(u.Heading, {
                  className: (0, a.W)(p().title, p().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, n.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, n.jsxs)(u.Caption, {
                  className: (0, a.W)(p().text, p().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, n.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, n.jsx)(o.Button, {
                  onClick: l,
                  className: p().button,
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
                      (0, n.jsx)(s.Z, { id: "page-error.restart-app-button" }),
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
  },
  function (t) {
    t.O(
      0,
      [
        9876, 5970, 8580, 4665, 9125, 7138, 5453, 7873, 9282, 7141, 892, 1512,
        2783, 2399, 7294, 7099, 7264, 6172, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 77985));
      },
    ),
      (_N_E = t.O());
  },
]);
