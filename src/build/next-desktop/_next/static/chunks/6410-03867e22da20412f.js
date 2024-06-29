(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6410],
  {
    7042: function (e, t, i) {
      "use strict";
      i.d(t, {
        em: function () {
          return N;
        },
        F8: function () {
          return S;
        },
        nU: function () {
          return u;
        },
        $H: function () {
          return r;
        },
      });
      var a = i(99616),
        l = i(42503),
        n = i(5674);
      let r = (e) => {
        let {
            entityType: t,
            isLegalRejected: i,
            isUnsafeLegal: r,
            entityId: s,
            callback: o,
          } = e,
          {
            disclaimer: c,
            modals: { disclaimerModal: d },
          } = (0, n.oR)(),
          u = (0, a.useRef)(String((0, l.Z)())),
          m = (0, a.useRef)(!1),
          k = (0, n.uK)(),
          v = k.get(n.ce);
        return (
          (0, a.useEffect)(() => {
            c.isUnsafeDisclaimerConfirmed &&
              c.id === u.current &&
              !m.current &&
              (null == o || o(), (m.current = !0));
          }, [o, c.isUnsafeDisclaimerConfirmed, c.id]),
          (0, a.useCallback)(
            async (e) => {
              if (s && (i || r)) {
                let i = v.get(n.BU.ExEx);
                if (
                  r &&
                  (null == i ? void 0 : i.includes("".concat(t, "_").concat(s)))
                ) {
                  null == o || o();
                  return;
                }
                switch ((e.preventDefault(), t)) {
                  case n.co.ARTIST:
                    await c.getArtistDisclaimer({ artistId: String(s) });
                    break;
                  case n.co.ALBUM:
                  case n.co.PODCAST:
                    await c.getAlbumDisclaimer({ albumId: Number(s) });
                    break;
                  case n.co.TRACK:
                    await c.getTrackDisclaimer({ trackId: String(s) });
                }
                r && c.setType(n.Gq.UNSAFE),
                  c.setId(u.current),
                  c.setEntityId(s),
                  c.setEntityType(t),
                  (m.current = !1),
                  d.open();
                return;
              }
              null == o || o();
            },
            [o, c, d, s, t, i, r, v],
          )
        );
      };
      var s = i(96555);
      let o = (e) =>
          e.details
            ? (0, s.pj)({
                title: e.title,
                description: e.description,
                details: { text: e.details.text, url: e.details.url },
              })
            : (0, s.pj)({ title: e.title, description: e.description }),
        c = s.V5.model("DisclaimerDetails", {
          text: s.V5.maybe(s.V5.string),
          url: s.V5.maybe(s.V5.string),
        }),
        d = s.V5.model("DisclaimerData", {
          title: s.V5.maybe(s.V5.string),
          description: s.V5.maybe(s.V5.string),
          details: s.V5.maybe(c),
        }),
        u = s.V5.model("Disclaimer", {
          loadingState: s.V5.enumeration(Object.values(n.Gu)),
          data: s.V5.maybeNull(d),
          type: s.V5.maybeNull(s.V5.enumeration(Object.values(n.Gq))),
          id: s.V5.maybeNull(s.V5.string),
          entityType: s.V5.maybeNull(s.V5.enumeration(Object.values(n.co))),
          entityId: s.V5.maybeNull(s.V5.union(s.V5.string, s.V5.number)),
          isUnsafeDisclaimerConfirmed: s.V5.optional(s.V5.boolean, !1),
          shouldHistoryBack: s.V5.optional(s.V5.boolean, !1),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === n.Gu.IDLE || e.loadingState === n.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === n.Gu.REJECT;
            },
          }))
          .actions((e) => {
            let t = {
              getArtistDisclaimer: (0, s.ls)(function* (t) {
                let { artistId: i } = t,
                  { artistsResource: a, modelActionsLogger: l } = (0, s.dU)(e);
                if (e.loadingState !== n.Gu.PENDING)
                  try {
                    e.loadingState = n.Gu.PENDING;
                    let t = yield a.getDisclaimer({ artistId: i });
                    t.modal && (e.data = o(t.modal)),
                      e.loadingState !== n.Gu.IDLE &&
                        (e.loadingState = n.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
                      e.loadingState !== n.Gu.IDLE &&
                        (e.loadingState = n.Gu.REJECT);
                  }
              }),
              getAlbumDisclaimer: (0, s.ls)(function* (t) {
                let { albumId: i } = t,
                  { albumResource: a, modelActionsLogger: l } = (0, s.dU)(e);
                if (e.loadingState !== n.Gu.PENDING)
                  try {
                    e.loadingState = n.Gu.PENDING;
                    let t = yield a.getDisclaimer({ albumId: i });
                    t.modal && (e.data = o(t.modal)),
                      e.loadingState !== n.Gu.IDLE &&
                        (e.loadingState = n.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
                      e.loadingState !== n.Gu.IDLE &&
                        (e.loadingState = n.Gu.REJECT);
                  }
              }),
              getTrackDisclaimer: (0, s.ls)(function* (t) {
                let { trackId: i } = t,
                  { tracksResource: a, modelActionsLogger: l } = (0, s.dU)(e);
                if (e.loadingState !== n.Gu.PENDING)
                  try {
                    e.loadingState = n.Gu.PENDING;
                    let t = yield a.getDisclaimer({ trackId: i });
                    t.modal && (e.data = o(t.modal)),
                      e.loadingState !== n.Gu.IDLE &&
                        (e.loadingState = n.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
                      e.loadingState !== n.Gu.IDLE &&
                        (e.loadingState = n.Gu.REJECT);
                  }
              }),
              setId(t) {
                e.id = t;
              },
              setType(t) {
                e.type = t;
              },
              setEntityType(t) {
                e.entityType = t;
              },
              setEntityId(t) {
                e.entityId = t;
              },
              setConfirmUnsafeDisclaimer(t) {
                e.isUnsafeDisclaimerConfirmed = t;
              },
              setShouldHistoryBack(t) {
                e.shouldHistoryBack = t;
              },
              reset() {
                (e.loadingState = n.Gu.IDLE),
                  (e.data = null),
                  (e.id = null),
                  (e.type = null),
                  (e.entityType = null),
                  (e.entityId = null),
                  (e.isUnsafeDisclaimerConfirmed = !1),
                  (e.shouldHistoryBack = !1);
              },
            };
            return t;
          });
      var m = i(8759),
        k = i(35338),
        v = i(33423),
        _ = i(2814),
        p = i(454),
        C = i(15527),
        x = i(12670),
        y = i(1918),
        b = i(44285),
        f = i(77263),
        h = i.n(f);
      let g = {
          [n.co.ALBUM]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-album",
          }),
          [n.co.PODCAST]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-podcast",
          }),
          [n.co.ARTIST]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-artist",
          }),
          [n.co.TRACK]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-track",
          }),
        },
        N = (0, v.Pi)((e) => {
          var t, i, l, r;
          let { disclaimer: s, onClose: o, className: c } = e,
            { data: d, isLoading: u } = null != s ? s : {},
            { href: v } = (0, n.zB)(
              null !==
                (r =
                  null == s
                    ? void 0
                    : null === (i = s.data) || void 0 === i
                      ? void 0
                      : null === (t = i.details) || void 0 === t
                        ? void 0
                        : t.url) && void 0 !== r
                ? r
                : "",
            ),
            f = (0, n.k6)(),
            N = (0, n.s0)("/"),
            j = (0, n.uK)(),
            T = j.get(n.ce),
            D = (0, a.useCallback)(() => {
              if (o) return o();
              f.canBack && f.back(), N();
            }, [o, f, N]),
            S =
              (null == d
                ? void 0
                : null === (l = d.details) || void 0 === l
                  ? void 0
                  : l.url) && d.details.text,
            E = (0, a.useCallback)(() => {
              null == s || s.setConfirmUnsafeDisclaimer(!0);
              let e = T.get(n.BU.ExEx),
                t = new Date(),
                i = t.setMinutes(t.getMinutes() + 15);
              e
                ? T.set(
                    n.BU.ExEx,
                    [
                      ...e,
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  )
                : T.set(
                    n.BU.ExEx,
                    [
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  ),
                null == o || o();
            }, [s, T, o]),
            L = (0, a.useCallback)(() => {
              (null == s ? void 0 : s.shouldHistoryBack)
                ? (null == o || o(), f.canBack && f.back(), N())
                : null == o || o();
            }, [null == s ? void 0 : s.shouldHistoryBack, f, N, o]);
          (0, a.useEffect)(
            () => () => {
              null == s || s.reset();
            },
            [s],
          );
          let A = (0, a.useMemo)(() => {
              if (u)
                return (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(x.Shimmer, {
                      radius: "l",
                      width: 200,
                      height: 24,
                      className: h().shimmer,
                    }),
                    (0, m.jsx)(x.Shimmer, {
                      radius: "l",
                      width: 250,
                      height: 16,
                      className: h().shimmer,
                    }),
                  ],
                });
              if (d && !u) {
                var e;
                return (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(y.Heading, {
                      variant: "h4",
                      size: "l",
                      className: (0, k.W)(h().title, h().text),
                      ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_TITLE),
                      children: d.title,
                    }),
                    (0, m.jsx)(y.Caption, {
                      variant: "div",
                      size: "l",
                      weight: "normal",
                      className: h().text,
                      ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_DESCRIPTION),
                      children: d.description,
                    }),
                    S &&
                      (0, m.jsx)(b.rU, {
                        href: v,
                        className: h().link,
                        children: (0, m.jsx)(y.Caption, {
                          variant: "span",
                          size: "l",
                          weight: "normal",
                          children:
                            null === (e = d.details) || void 0 === e
                              ? void 0
                              : e.text,
                        }),
                      }),
                  ],
                });
              }
            }, [u, d, v, S]),
            I = (0, a.useMemo)(
              () =>
                u
                  ? (0, m.jsx)(x.Shimmer, {
                      radius: "xl",
                      width: 190,
                      height: 50,
                      className: h().shimmer,
                    })
                  : (null == s ? void 0 : s.type) === n.Gq.UNSAFE
                    ? (0, m.jsxs)("div", {
                        className: h().buttons,
                        children: [
                          (0, m.jsx)(C.z, {
                            color: "primary",
                            onClick: L,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: (0, m.jsx)(_.Z, {
                              id: "extra-explicit.reject-unsafe-entity",
                            }),
                          }),
                          (0, m.jsx)(C.z, {
                            color: "secondary",
                            onClick: E,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: s.entityType && g[s.entityType],
                          }),
                        ],
                      })
                    : (0, m.jsx)("div", {
                        className: h().buttons,
                        children: (0, m.jsx)(C.z, {
                          color: "primary",
                          onClick: D,
                          size: "l",
                          radius: "xxxl",
                          className: h().button,
                          ...(0, p.BA)(
                            p.FK.disclaimer.DISCLAIMER_REJECT_BUTTON,
                          ),
                          children: (0, m.jsx)(_.Z, {
                            id: "interface-actions.confirm",
                          }),
                        }),
                      }),
              [
                E,
                null == s ? void 0 : s.entityType,
                null == s ? void 0 : s.type,
                D,
                u,
                L,
              ],
            );
          return (0, m.jsx)("div", {
            className: (0, k.W)(h().root, c),
            ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_MODAL),
            children: (0, m.jsxs)("div", {
              className: h().container,
              children: [A, I],
            }),
          });
        });
      var j = i(31476),
        T = i(13327),
        D = i.n(T);
      let S = (0, v.Pi)(() => {
        let {
          disclaimer: e,
          modals: { disclaimerModal: t },
        } = (0, n.oR)();
        return (0, m.jsx)(j.u, {
          size: "fitContent",
          placement: "center",
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          showHeader: !1,
          className: D().root,
          contentClassName: D().content,
          children: (0, m.jsx)(N, { disclaimer: e, onClose: t.close }),
        });
      });
    },
    43310: function (e, t, i) {
      "use strict";
      i.d(t, {
        yp: function () {
          return o;
        },
        bP: function () {
          return _;
        },
        Yc: function () {
          return v.Y;
        },
        v$: function () {
          return c;
        },
        Ni: function () {
          return u;
        },
        jp: function () {
          return p;
        },
        KX: function () {
          return m.useOnDislikeClick;
        },
        SB: function () {
          return k.useOnLikeClick;
        },
      });
      var a = i(96555),
        l = i(48616),
        n = i(5674),
        r = i(65704);
      let s = a.V5.model("TrackParameters", {
          bpm: a.V5.maybe(a.V5.number),
          energy: a.V5.maybe(a.V5.number),
          hue: a.V5.maybe(a.V5.number),
          userCollectionHue: a.V5.maybe(a.V5.number),
        }),
        o = a.V5.compose(
          a.V5.model("BaseTrack", {
            id: a.V5.string,
            isAvailable: a.V5.boolean,
            isRemoved: a.V5.boolean,
            title: a.V5.string,
            trackSource: a.V5.maybe(a.V5.enumeration(Object.values(l.zu))),
            version: a.V5.maybe(a.V5.string),
            durationMs: a.V5.maybe(a.V5.number),
            coverUri: a.V5.maybe(a.V5.string),
            averageColor: a.V5.maybe(a.V5.string),
            trackParameters: a.V5.maybe(s),
            albumId: a.V5.maybe(a.V5.number),
            disclaimers: a.V5.maybe(a.V5.array(a.V5.string)),
            type: a.V5.maybe(a.V5.enumeration(Object.values(l.Vc))),
            pubDate: a.V5.maybe(a.V5.string),
            hasSyncLyrics: a.V5.maybe(a.V5.boolean),
          }),
          r.ie,
        )
          .views((e) => ({
            get isLiked() {
              if ((0, a.fh)(e)) {
                let { library: t } = (0, a.yj)(e);
                return t.isTrackLiked(e.id);
              }
              return !1;
            },
            get url() {
              if (e.albumId)
                return "/album/".concat(e.albumId, "/track/").concat(e.id);
              return "/track/".concat(e.id);
            },
            get isDisliked() {
              if ((0, a.fh)(e)) {
                let { library: t } = (0, a.yj)(e);
                return t.isTrackDisliked(e.id);
              }
              return !1;
            },
            get isTrackPodcast() {
              if ((0, a.fh)(e)) return l.Vc.PODCAST === e.type;
              return !1;
            },
            get isUGC() {
              if ((0, a.fh)(e)) return e.trackSource === l.zu.UGC;
              return;
            },
            get seeds() {
              return ["track:".concat(e.id)];
            },
            get isLegalRejected() {
              if (!(0, a.fh)(e)) return !1;
              let { experiments: t } = (0, a.yj)(e),
                i = t.checkExperiment(n.pe.WebNextLegalRejectTrack, "on");
              if (e.disclaimers && i)
                return !e.isAvailable && e.disclaimers.includes(l.em.MODAL);
              return !1;
            },
            get isUnsafeLegal() {
              if (!(0, a.fh)(e)) return !1;
              let { experiments: t } = (0, a.yj)(e),
                i = t.checkExperiment(n.pe.WebNextLegalUnsafeTrack, "on");
              if (e.disclaimers && i)
                return e.isAvailable && e.disclaimers.includes(l.em.MODAL);
              return !1;
            },
          }))
          .actions((e) => {
            let t = {
              afterCreate() {
                e.trackType = e.type;
              },
              toggleLike: (0, a.ls)(function* () {
                if (!(0, a.fh)(e)) return;
                let { library: t, user: i } = (0, a.yj)(e);
                if (i.isAuthorized)
                  return yield t.toggleTrackLike({
                    entityId: e.id,
                    albumId: e.albumId,
                    userId: i.account.uid,
                  });
              }),
              toggleDislike: (0, a.ls)(function* () {
                if (!(0, a.fh)(e)) return;
                let { library: t, user: i } = (0, a.yj)(e);
                if (i.isAuthorized)
                  return yield t.toggleTrackDislike({
                    entityId: e.id,
                    albumId: e.albumId,
                    userId: i.account.uid,
                  });
              }),
            };
            return t;
          }),
        c = a.V5.model("Ugc"),
        d = (e) =>
          (0, a.pj)({
            bpm: null == e ? void 0 : e.bpm,
            energy: null == e ? void 0 : e.energy,
            hue: null == e ? void 0 : e.hue,
            userCollectionHue: null == e ? void 0 : e.userCollectionHue,
          }),
        u = (e) => {
          var t, i, l, r, s, o, c, u, m, k, v, _, p, C;
          e = e || {};
          let x = (0, n.Us)(
            null === (t = e) || void 0 === t ? void 0 : t.derivedColors,
          );
          return (0, a.pj)({
            id: (e.id || 0).toString(),
            isAvailable: !!(null === (i = e) || void 0 === i
              ? void 0
              : i.available),
            isRemoved:
              (null === (l = e) || void 0 === l ? void 0 : l.error) ===
              "not-found",
            title:
              null !==
                (C = null === (r = e) || void 0 === r ? void 0 : r.title) &&
              void 0 !== C
                ? C
                : "",
            contentWarning:
              null === (s = e) || void 0 === s ? void 0 : s.contentWarning,
            version: null === (o = e) || void 0 === o ? void 0 : o.version,
            durationMs:
              null === (c = e) || void 0 === c ? void 0 : c.durationMs,
            coverUri: null === (u = e) || void 0 === u ? void 0 : u.coverUri,
            averageColor: x,
            trackParameters: d(
              null === (m = e) || void 0 === m ? void 0 : m.trackParameters,
            ),
            trackSource:
              null === (k = e) || void 0 === k ? void 0 : k.trackSource,
            albumId:
              null === (_ = e.albums) || void 0 === _
                ? void 0
                : null === (v = _[0]) || void 0 === v
                  ? void 0
                  : v.id,
            disclaimers: e.disclaimers,
            type: e.type,
            pubDate: e.pubDate,
            hasSyncLyrics:
              null === (p = e.lyricsInfo) || void 0 === p
                ? void 0
                : p.hasAvailableSyncLyrics,
          });
        };
      var m = i(45431),
        k = i(50818),
        v = i(20766);
      i(5889);
      let _ = a.V5.model("MajorModel", {
          id: a.V5.number,
          name: a.V5.string,
          prettyName: a.V5.maybe(a.V5.string),
        }),
        p = (e) =>
          (0, a.pj)({ id: e.id, name: e.name, prettyName: e.prettyName });
    },
    45431: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useOnDislikeClick: function () {
            return m;
          },
        });
      var a = i(8759),
        l = i(93043),
        n = i(99616),
        r = i(65244),
        s = i(57413),
        o = i(48616),
        c = i(5674),
        d = i(44285),
        u = i(5889);
      let m = (e) => {
        let {
            user: t,
            modals: { fullscreenPlayerModal: i },
          } = (0, c.oR)(),
          m = (0, c.R$)(),
          { notify: k } = (0, c.d$)(),
          [v, _] = (0, n.useState)(!1),
          { formatMessage: p } = (0, r.Z)();
        return (0, n.useCallback)(async () => {
          if (e) {
            let r = i.isOpened ? c.W$.FULLSCREEN_INFO : c.W$.INFO,
              C = i.isOpened ? c.W$.FULLSCREEN_ERROR : c.W$.ERROR;
            if (!t.isAuthorized) {
              k(
                (0, a.jsx)(d.Q, {
                  error: p({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: C },
              );
              return;
            }
            if (v) return;
            let x = { ...(0, l.ZN)(e), isDisliked: !e.isDisliked };
            _(!0);
            let y = await e.toggleDislike();
            if ((_(!1), y === o.Bi.OK)) {
              var n;
              k(
                (0, a.jsx)(u.NotificationDislike, {
                  coverUri: x.coverUri,
                  isDisliked: x.isDisliked,
                  title: x.title,
                }),
                { containerId: r },
              );
              let e = x.isDisliked ? o.C.DISLIKE : o.C.UNDISLIKE;
              m &&
                (0, s.xA)(m.state.currentContext.value) &&
                (await m.state.currentContext.value.sendFeedback(
                  m.state.playerState,
                  m.state.queueState,
                  e,
                )),
                x.isDisliked &&
                  x.id ===
                    (null == m
                      ? void 0
                      : null === (n = m.state.queueState.currentEntity.value) ||
                          void 0 === n
                        ? void 0
                        : n.entity.data.meta.id) &&
                  (null == m || m.moveForward());
            } else
              k(
                (0, a.jsx)(d.Q, {
                  error: p({ id: "error-messages.error-during-action" }),
                }),
                { containerId: C },
              );
          }
        }, [p, i.isOpened, k, v, m, e, t.isAuthorized]);
      };
    },
    50818: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useOnLikeClick: function () {
            return m;
          },
        });
      var a = i(8759),
        l = i(93043),
        n = i(99616),
        r = i(65244),
        s = i(57413),
        o = i(48616),
        c = i(5674),
        d = i(44285),
        u = i(20766);
      let m = (e) => {
        let {
            user: t,
            modals: { fullscreenPlayerModal: i },
          } = (0, c.oR)(),
          { notify: m } = (0, c.d$)(),
          [k, v] = (0, n.useState)(!1),
          { formatMessage: _ } = (0, r.Z)(),
          p = (0, c.R$)();
        return (0, n.useCallback)(async () => {
          if (e) {
            let n = i.isOpened ? c.W$.FULLSCREEN_INFO : c.W$.INFO,
              r = i.isOpened ? c.W$.FULLSCREEN_ERROR : c.W$.ERROR;
            if (!t.isAuthorized) {
              m(
                (0, a.jsx)(d.Q, {
                  error: _({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: r },
              );
              return;
            }
            if (k) return;
            let C = { ...(0, l.ZN)(e), isLiked: !e.isLiked };
            v(!0);
            let x = await e.toggleLike();
            if ((v(!1), x === o.Bi.OK)) {
              m((0, a.jsx)(u.Y, { track: C }), { containerId: n });
              let e = C.isLiked ? o.C.LIKE : o.C.UNLIKE;
              p &&
                (0, s.xA)(p.state.currentContext.value) &&
                p.state.currentContext.value.sendFeedback(
                  p.state.playerState,
                  p.state.queueState,
                  e,
                );
            } else
              m(
                (0, a.jsx)(d.Q, {
                  error: _({ id: "error-messages.error-during-action" }),
                }),
                { containerId: r },
              );
          }
        }, [_, i.isOpened, m, k, p, e, t.isAuthorized]);
      };
    },
    5889: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          NotificationDislike: function () {
            return m;
          },
        });
      var a = i(8759),
        l = i(35338),
        n = i(99616),
        r = i(2814),
        s = i(96437),
        o = i(1918),
        c = i(44285),
        d = i(85204),
        u = i.n(d);
      let m = (e) => {
        let {
            coverUri: t,
            title: i,
            isDisliked: d,
            closeToast: m,
            className: k,
          } = e,
          v = (0, n.useMemo)(
            () =>
              (0, a.jsx)(s.Paper, {
                className: u().cover,
                radius: "s",
                children: (0, a.jsx)(c.BE, {
                  className: u().image,
                  src: t,
                  alt: i,
                  size: 100,
                  fit: "cover",
                  withAvatarReplace: !0,
                }),
              }),
            [t, i],
          ),
          _ = (0, n.useMemo)(
            () =>
              d
                ? (0, a.jsx)(o.Caption, {
                    className: u().text,
                    variant: "div",
                    type: "controls",
                    size: "m",
                    children: (0, a.jsx)(r.Z, {
                      id: "notifications-info.track-unavailable-in-recommendations",
                    }),
                  })
                : (0, a.jsx)(o.Caption, {
                    className: u().text,
                    variant: "div",
                    type: "controls",
                    size: "m",
                    children: (0, a.jsx)(r.Z, {
                      id: "notifications-info.track-available-in-recommendations",
                    }),
                  }),
            [d],
          );
        return (0, a.jsx)(c.Yj, {
          className: (0, l.W)(u().root, k),
          closeToast: m,
          message: (0, a.jsxs)("div", {
            className: u().message,
            children: [v, _],
          }),
        });
      };
    },
    20766: function (e, t, i) {
      "use strict";
      i.d(t, {
        Y: function () {
          return n;
        },
      });
      var a = i(8759),
        l = i(44285);
      let n = (e) => {
        let { track: t, closeToast: i } = e;
        return (0, a.jsx)(l.AP, {
          closeToast: i,
          entityVariant: l.j9.TRACK,
          entityTitle: t.title,
          collectionUrl: "/collection",
          coverUri: t.coverUri,
          isLiked: t.isLiked,
        });
      };
    },
    95539: function (e, t, i) {
      "use strict";
      i.d(t, {
        jt: function () {
          return h.ControlsBar;
        },
        Jx: function () {
          return x;
        },
        wT: function () {
          return T.PodcastMeta;
        },
        RJ: function () {
          return s.TrackAlbum;
        },
        G7: function () {
          return b.TrackCard;
        },
        _3: function () {
          return r.TrackChart;
        },
        hz: function () {
          return g.TrackContextMenu;
        },
        ko: function () {
          return j.TrackMeta;
        },
        le: function () {
          return k;
        },
        O2: function () {
          return a.TrackPlaylist;
        },
        VZ: function () {
          return l.TrackPlaylistAddition;
        },
        N6: function () {
          return n.TrackPodcast;
        },
        bc: function () {
          return _;
        },
        S7: function () {
          return y;
        },
        Er: function () {
          return N;
        },
        E5: function () {
          return S;
        },
        Vt: function () {
          return C;
        },
        Z2: function () {
          return f;
        },
        Wc: function () {
          return E.W;
        },
        nD: function () {
          return L.useTrackDisclaimer;
        },
      });
      var a = i(8425),
        l = i(60362),
        n = i(17734),
        r = i(63402),
        s = i(48765),
        o = i(96555),
        c = i(21774),
        d = i(81446),
        u = i(16121),
        m = i(43310);
      let k = m.yp
          .props({
            artists: o.V5.array(d.Go),
            albums: o.V5.array(c.KX),
            chart: o.V5.maybe(u.BH),
          })
          .views((e) => ({
            get artistsNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
            get mainAlbum() {
              var i, a;
              return null !==
                (a = null === (i = e.albums) || void 0 === i ? void 0 : i[0]) &&
                void 0 !== a
                ? a
                : null;
            },
            get index() {
              var l, n, r;
              return null !==
                (r =
                  null === (n = e.albums[0]) || void 0 === n
                    ? void 0
                    : null === (l = n.trackPosition) || void 0 === l
                      ? void 0
                      : l.index) && void 0 !== r
                ? r
                : null;
            },
          }))
          .named("Track"),
        v = o.V5.model("Credit", { title: o.V5.string, value: o.V5.string }),
        _ = o.V5.compose(k, m.v$).named("UgcTrack");
      var p = i(5674);
      let C = (e) => {
          var t, i;
          let a =
              null === (t = e.artists) || void 0 === t ? void 0 : t.map(d.d),
            l = null === (i = e.albums) || void 0 === i ? void 0 : i.map(c.N);
          return (0, o.pj)({ ...(0, m.Ni)(e), artists: a, albums: l });
        },
        x = o.V5.model("CurrentTrackInfo", {
          id: o.V5.maybeNull(o.V5.union(o.V5.string, o.V5.number)),
          albumId: o.V5.maybeNull(o.V5.number),
          isUGC: o.V5.maybeNull(o.V5.boolean),
          trackLoadingState: o.V5.enumeration(Object.values(p.Gu)),
          fullTrack: o.V5.maybeNull(k),
          creditsLoadingState: o.V5.enumeration(Object.values(p.Gu)),
          credits: o.V5.maybeNull(o.V5.array(v)),
        })
          .views((e) => ({
            get isTrackIdle() {
              return e.trackLoadingState === p.Gu.IDLE;
            },
            get isCreditsIdle() {
              return e.creditsLoadingState === p.Gu.IDLE;
            },
            get isTrackLoading() {
              return (
                e.trackLoadingState === p.Gu.PENDING ||
                e.trackLoadingState === p.Gu.IDLE
              );
            },
            get isTrackRejected() {
              return e.trackLoadingState === p.Gu.REJECT;
            },
            get isCreditsLoading() {
              return (
                e.creditsLoadingState === p.Gu.PENDING ||
                e.creditsLoadingState === p.Gu.IDLE
              );
            },
            get isCreditsRejected() {
              return e.creditsLoadingState === p.Gu.REJECT;
            },
            get isRejected() {
              return (
                e.creditsLoadingState === p.Gu.REJECT &&
                e.trackLoadingState === p.Gu.REJECT
              );
            },
          }))
          .actions((e) => {
            let t = {
              setTrack(t) {
                let { id: i, albumId: a, isUGC: l } = t;
                (e.id = i), (e.albumId = a), (e.isUGC = l);
              },
              getFullTrack: (0, o.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: i } = (0, o.dU)(e);
                if (!e.id || e.trackLoadingState === p.Gu.PENDING) return null;
                try {
                  e.trackLoadingState = p.Gu.PENDING;
                  let i = yield t.getFullInfoTrack({
                    trackId: e.id,
                    albumId: e.albumId,
                  });
                  if (!i) return null;
                  (e.fullTrack = (0, o.pj)(C(i.track))),
                    (e.trackLoadingState = p.Gu.RESOLVE);
                } catch (t) {
                  i.error(t), (e.trackLoadingState = p.Gu.REJECT);
                }
                return null;
              }),
              getTrackMeta: (0, o.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: i } = (0, o.dU)(e);
                if (!e.id || e.trackLoadingState === p.Gu.PENDING) return null;
                try {
                  e.trackLoadingState = p.Gu.PENDING;
                  let i = yield t.getTracksMeta({
                    trackIds: [e.id],
                    removeDuplicates: !0,
                  });
                  if (!i || !i.length) return null;
                  i[0] &&
                    ((e.fullTrack = (0, o.pj)(C(i[0]))),
                    (e.trackLoadingState = p.Gu.RESOLVE));
                } catch (t) {
                  i.error(t), (e.trackLoadingState = p.Gu.REJECT);
                }
                return null;
              }),
              getCreditsInfo: (0, o.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: i } = (0, o.dU)(e);
                if (!e.id || e.creditsLoadingState === p.Gu.PENDING)
                  return null;
                try {
                  e.creditsLoadingState = p.Gu.PENDING;
                  let i = yield t.getCredits({ trackId: e.id });
                  (e.credits = (0, o.pj)(null == i ? void 0 : i.credits)),
                    (e.creditsLoadingState = p.Gu.RESOLVE);
                } catch (t) {
                  i.error(t), (e.creditsLoadingState = p.Gu.REJECT);
                }
                return null;
              }),
              reset() {
                (e.id = null),
                  (e.albumId = null),
                  (e.isUGC = null),
                  (e.trackLoadingState = p.Gu.IDLE),
                  (e.creditsLoadingState = p.Gu.IDLE),
                  (e.fullTrack = null),
                  (e.credits = null);
              },
            };
            return t;
          }),
        y = (e, t) => (0, o.pj)({ ...C(e), chart: t && (0, u.W5)(t) });
      var b = i(84270);
      let f = (e) => {
        var t, i;
        return (0, o.pj)({
          ...C(e),
          artists:
            null !==
              (i =
                null == e
                  ? void 0
                  : null === (t = e.artists) || void 0 === t
                    ? void 0
                    : t.map(d.d)) && void 0 !== i
              ? i
              : [],
        });
      };
      var h = i(59741),
        g = i(50429);
      let N = (e, t) => {
        if (!t) return;
        let { h: i, s: a } = (0, p.sE)(t);
        return "hsl("
          .concat(i, ", ")
          .concat(a, "%, ")
          .concat(e === p.Q2.Light ? 60 : 20, "%)");
      };
      var j = i(81360),
        T = i(19708),
        D = i(86502);
      let S = (e) => ({
        type: D.RX.Unloaded,
        meta: { id: e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id },
      });
      var E = i(54272),
        L = i(5658);
    },
    54272: function (e, t, i) {
      "use strict";
      i.d(t, {
        W: function () {
          return s;
        },
      });
      var a = i(8759),
        l = i(99616),
        n = i(3515),
        r = i(5674);
      let s = () => {
        let { notify: e } = (0, r.d$)(),
          {
            playlist: t,
            modals: { fullscreenPlayerModal: i },
          } = (0, r.oR)(),
          s = (0, l.useCallback)(
            (l) => {
              var s, o;
              let {
                withSuccessNotification: c,
                withPageRefresh: d,
                playlist: u,
                track: m,
              } = l;
              c &&
                e(
                  (0, a.jsx)(n.XD, {
                    entityTitle: m.title,
                    entityCoverUri:
                      null !== (o = m.coverUri) && void 0 !== o ? o : "",
                    playlist: u,
                  }),
                  {
                    containerId: i.isOpened ? r.W$.FULLSCREEN_INFO : r.W$.INFO,
                  },
                ),
                d &&
                  u.uuid ===
                    (null === (s = t.meta) || void 0 === s ? void 0 : s.uuid) &&
                  t.refresh();
            },
            [i.isOpened, e, t],
          ),
          o = (0, l.useCallback)(
            (t) => {
              let { withFailNotification: l } = t;
              l &&
                e((0, a.jsx)(n.wi, {}), {
                  containerId: i.isOpened ? r.W$.FULLSCREEN_ERROR : r.W$.ERROR,
                });
            },
            [i.isOpened, e],
          );
        return (0, l.useCallback)(
          async (e) => {
            var t;
            let {
                playlist: i,
                track: a,
                withSuccessNotification: l = !0,
                withFailNotification: r = !0,
                withPageRefresh: c = !0,
              } = e,
              d = await i.changePlaylist(
                (0, n.PG)({
                  operation: n.aL.INSERT,
                  position: 0,
                  tracks: [
                    {
                      id: a.id,
                      albumId:
                        null === (t = a.mainAlbum) || void 0 === t
                          ? void 0
                          : t.id,
                    },
                  ],
                }),
              );
            return (
              d === n.pX.OK
                ? s({
                    withSuccessNotification: l,
                    withPageRefresh: c,
                    playlist: i,
                    track: a,
                  })
                : o({ withFailNotification: r }),
              d
            );
          },
          [s, o],
        );
      };
    },
    5658: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useTrackDisclaimer: function () {
            return r;
          },
        });
      var a = i(99616),
        l = i(42503),
        n = i(5674);
      let r = (e) => {
        let { track: t, callback: i } = e,
          {
            disclaimer: r,
            modals: { disclaimerModal: s },
          } = (0, n.oR)(),
          o = (0, a.useRef)(String((0, l.Z)())),
          c = (0, a.useRef)(!1),
          d = (0, n.uK)(),
          u = d.get(n.ce);
        return (
          (0, a.useEffect)(() => {
            r.isUnsafeDisclaimerConfirmed &&
              r.id === o.current &&
              !c.current &&
              (null == i || i(), (c.current = !0));
          }, [i, r.isUnsafeDisclaimerConfirmed, r.id]),
          (0, a.useCallback)(
            async (e) => {
              if (t.isLegalRejected || t.isUnsafeLegal) {
                let a = u.get(n.BU.ExEx);
                if (
                  t.isUnsafeLegal &&
                  (null == a
                    ? void 0
                    : a.includes("".concat(n.co.TRACK, "_").concat(t.id)))
                ) {
                  null == i || i();
                  return;
                }
                null == e || e.preventDefault(),
                  await r.getTrackDisclaimer({ trackId: t.id }),
                  t.isUnsafeLegal && r.setType(n.Gq.UNSAFE),
                  r.setId(o.current),
                  r.setEntityId(t.id),
                  r.setEntityType(n.co.TRACK),
                  (c.current = !1),
                  s.open();
                return;
              }
              null == i || i();
            },
            [i, r, s, u, t.id, t.isLegalRejected, t.isUnsafeLegal],
          )
        );
      };
    },
    59741: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ControlsBar: function () {
            return x;
          },
        });
      var a = i(8759),
        l = i(35338),
        n = i(33423),
        r = i(99616),
        s = i(65244),
        o = i(15527),
        c = i(33066),
        d = i(14581),
        u = i(1918),
        m = i(43310),
        k = i(5674),
        v = i(44285),
        _ = i(50429),
        p = i(59781),
        C = i.n(p);
      let x = (0, n.Pi)((e) => {
        let { className: t, track: i, withLightning: n } = e,
          { user: p } = (0, k.oR)(),
          { formatMessage: x } = (0, s.Z)(),
          { sendLikeSearchFeedback: y } = (0, k.sA)(),
          [b, f] = (0, r.useState)(!1),
          [h, g] = (0, r.useState)(!1),
          N = (0, m.SB)(i),
          j = (0, m.KX)(i),
          T = (0, r.useMemo)(() => {
            let e = Math.round((i.durationMs || 0) / 1e3);
            return (0, k.gf)(e);
          }, [i.durationMs]),
          D = (0, r.useCallback)(() => {
            b || i.isLiked || (f(!0), null == y || y()), N();
          }, [N, b, y, i.isLiked]),
          S = (0, r.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          E = (0, r.useMemo)(() => {
            if (p.isAuthorized && !i.isRemoved && i.isAvailable)
              return (0, a.jsx)(_.TrackContextMenu, {
                track: i,
                open: h,
                onOpenChange: g,
                placement: "bottom",
                reference: (0, a.jsx)(o.z, {
                  onClick: S,
                  variant: "text",
                  size: "xs",
                  withRipple: !1,
                  radius: "round",
                  className: (0, l.W)(C().contextMenu, {
                    [C().contextMenu_visible]: h,
                  }),
                  "aria-label": x({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(d.J, { variant: "more", size: "xxs" }),
                }),
              });
          }, [x, S, h, i, p.isAuthorized]);
        return (0, a.jsxs)("div", {
          className: (0, l.W)(C().root, C().controls, t, {
            [C().controls_disliked]: i.isDisliked,
            [C().controls_disabled]: !i.isAvailable,
          }),
          children: [
            (i.trackExplicitMark || n) &&
              (0, a.jsxs)("div", {
                className: C().icons,
                children: [
                  n &&
                    (0, a.jsx)(d.J, {
                      size: "xxs",
                      className: C().lightning,
                      variant: "lightning",
                    }),
                  i.trackExplicitMark &&
                    (0, a.jsx)(c.ExplicitMark, {
                      variant: i.trackExplicitMark,
                      className: C().explicitMark,
                      iconSize: i.isTrackPodcast ? "xs" : "xxxs",
                    }),
                ],
              }),
            p.isAuthorized &&
              !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(v.dJ, {
                size: "xs",
                iconSize: "xxs",
                className: (0, l.W)(C().item, C().likeIcon),
                isLiked: i.isLiked,
                onClick: D,
              }),
            p.isAuthorized &&
              !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(v.Q1, {
                size: "xs",
                iconSize: "xxs",
                className: (0, l.W)(C().item, C().dislikeIcon),
                isDisliked: i.isDisliked,
                onClick: j,
              }),
            (0, a.jsxs)("div", {
              className: (0, l.W)(C().item, C().contextMenuWrapper),
              children: [
                "number" == typeof i.durationMs &&
                  (0, a.jsx)(u.Caption, {
                    variant: "span",
                    className: (0, l.W)(C().duration, {
                      [C().duration_hidden]: h,
                    }),
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    children: T,
                  }),
                E,
              ],
            }),
          ],
        });
      });
    },
    19708: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          PodcastMeta: function () {
            return y;
          },
        });
      var a = i(8759),
        l = i(35338),
        n = i(33423),
        r = i(99616),
        s = i(65244),
        o = i(2814),
        c = i(54064),
        d = i(33066),
        u = i(1918),
        m = i(7042),
        k = i(5674),
        v = i(44285),
        _ = i(73473),
        p = i.n(_),
        C = i(70434),
        x = i.n(C);
      let y = (0, n.Pi)((e) => {
        let {
            track: t,
            className: i,
            withPodcastName: n = !1,
            withDate: _ = !0,
            withSecondaryColor: C = !1,
            captionSize: y = "m",
            explicitSize: b = "xs",
            withExplicitMark: f,
            titleContainerClassName: h,
          } = e,
          {
            modals: { fullscreenPlayerModal: g },
          } = (0, k.oR)(),
          { formatMessage: N } = (0, s.Z)(),
          j = t.mainAlbum,
          T = j && n,
          D = t.pubDate ? new Date(t.pubDate) : new Date(),
          S = (0, k.u9)(D),
          E = !1,
          L = (0, k.s0)("/album/".concat(null == j ? void 0 : j.id)),
          A = (0, m.$H)({
            entityType: k.co.PODCAST,
            entityId: null == j ? void 0 : j.id,
            isLegalRejected: !!(null == j ? void 0 : j.isLegalRejected),
            isUnsafeLegal: !!(null == j ? void 0 : j.isUnsafeLegal),
            callback: L,
          }),
          I = (0, r.useCallback)(() => {
            switch (S) {
              case k.Uv.TODAY:
                return (0, a.jsx)(o.Z, { id: "interface-actions.date-today" });
              case k.Uv.YESTERDAY:
                return (0, a.jsx)(o.Z, {
                  id: "interface-actions.date-yesterday",
                });
              case k.Uv.DATE_WITH_YEAR:
                return (0, a.jsx)(c.Ji, {
                  value: t.pubDate,
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
              default:
                return (0, a.jsx)(c.Ji, {
                  value: t.pubDate,
                  month: "long",
                  day: "numeric",
                });
            }
          }, [t.pubDate, S]);
        t.pubDate && _ && (E = [k.Uv.TODAY, k.Uv.YESTERDAY].includes(S));
        let R = (0, r.useCallback)(
            (e) => {
              g.isOpened && g.close(), A(e);
            },
            [g, A],
          ),
          B = (0, r.useMemo)(
            () =>
              t.isRemoved
                ? (0, a.jsx)(o.Z, { id: "track-title.podcast-not-found" })
                : (0, a.jsx)(u.Caption, {
                    className: p().title,
                    type: "entity",
                    size: y,
                    variant: "div",
                    children: t.title,
                  }),
            [t.isRemoved, t.title, y],
          );
        return (0, a.jsx)("div", {
          className: (0, l.W)(
            p().root,
            {
              [p().root_disabled]: !t.isAvailable,
              [p().root_disliked]: t.isDisliked,
              [p().root_withSecondaryColor]: C,
            },
            i,
          ),
          children: (0, a.jsxs)("div", {
            className: p().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, l.W)(p().titleContainer, h),
                children: [
                  (0, a.jsx)(u.Caption, {
                    className: p().text,
                    type: "entity",
                    size: y,
                    variant: "div",
                    lineClamp: 1,
                    children: B,
                  }),
                  t.trackExplicitMark &&
                    f &&
                    (0, a.jsx)(d.ExplicitMark, {
                      variant: d.ExplicitMarkVariant.NUMERIC,
                      className: (0, l.W)(p().explicitMark, x().explicitMark),
                      iconSize: b,
                    }),
                ],
              }),
              (0, a.jsxs)(u.Caption, {
                type: "entity",
                size: y,
                variant: "div",
                lineClamp: 1,
                className: (0, l.W)(p().text, x().podcastName),
                children: [
                  T &&
                    (0, a.jsx)(v.rU, {
                      "aria-label": N(
                        { id: "entity-names.podcast-name" },
                        { podcastName: j.title },
                      ),
                      className: p().link,
                      href: "/album/".concat(j.id),
                      title: j.title,
                      onClick: R,
                      children: (0, a.jsx)(u.Caption, {
                        variant: "span",
                        type: "entity",
                        size: y,
                        className: p().albumTitle,
                        children: j.title,
                      }),
                    }),
                  t.pubDate &&
                    _ &&
                    (0, a.jsx)(u.Caption, {
                      variant: "span",
                      type: "entity",
                      size: y,
                      className: (0, l.W)({
                        [x().dateWithName]: T,
                        [x().soonDate]: E,
                        [x().dateDisabled]: !t.isAvailable,
                        [x().dateDisliked]: t.isDisliked,
                      }),
                      children: I(),
                    }),
                ],
              }),
            ],
          }),
        });
      });
    },
    81360: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackMeta: function () {
            return f;
          },
        });
      var a = i(8759),
        l = i(35338),
        n = i(33423),
        r = i(99616),
        s = i(65244),
        o = i(2814),
        c = i(454),
        d = i(48616),
        u = i(33066),
        m = i(1918),
        k = i(81446),
        v = i(5674),
        _ = i(44285),
        p = i(14616);
      let C = function () {
        var e, t;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (
          null === (t = i[0]) || void 0 === t
            ? void 0
            : null === (e = t.decomposed) || void 0 === e
              ? void 0
              : e.length
        )
          return i;
        let l = a.map((e) => e.id).sort(),
          n = i.map((e) => e.id).sort();
        return (0, p.Z)(l, n) ? [] : i.filter((e) => !e.various);
      };
      var x = i(5658),
        y = i(73473),
        b = i.n(y);
      let f = (0, n.Pi)((e) => {
        let {
            className: t,
            titleContainerClassName: i,
            track: n,
            albumArtists: p,
            withExplicitMark: y,
            withSecondaryColor: f,
            captionSize: h = "m",
            explicitSize: g,
            withAlbumLink: N,
            withAllArtistsTitle: j,
          } = e,
          { formatMessage: T } = (0, s.Z)(),
          {
            modals: { fullscreenPlayerModal: D },
          } = (0, v.oR)(),
          S = (0, v.s0)("/album/".concat(n.albumId)),
          E = (0, r.useMemo)(() => {
            var e;
            let t = T(
              { id: "entity-names.track-name" },
              { trackName: n.title },
            );
            return ""
              .concat(t, " ")
              .concat(null !== (e = n.version) && void 0 !== e ? e : "");
          }, [T, n.title, n.version]),
          L = (0, x.useTrackDisclaimer)({ track: n, callback: S }),
          A = (0, r.useCallback)(
            (e) => {
              D.isOpened && D.close(), L(e);
            },
            [D, L],
          ),
          I = (0, r.useMemo)(
            () =>
              n.isRemoved
                ? (0, a.jsx)(m.Caption, {
                    className: (0, l.W)(b().text, b().title),
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "div",
                    children: (0, a.jsx)(o.Z, {
                      id: "track-title.error-not-found",
                    }),
                  })
                : n.albumId && N && n.trackSource === d.zu.OWN && n.isAvailable
                  ? (0, a.jsx)(_.rU, {
                      onClick: A,
                      className: b().albumLink,
                      href: "/album/".concat(n.albumId),
                      "aria-label": E,
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: (0, a.jsx)(m.Caption, {
                        className: (0, l.W)(b().text, b().title),
                        type: "entity",
                        size: h,
                        weight: "medium",
                        variant: "div",
                        children: n.title,
                      }),
                    })
                  : (0, a.jsx)(m.Caption, {
                      className: (0, l.W)(b().text, b().title),
                      type: "entity",
                      size: h,
                      weight: "medium",
                      variant: "div",
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: n.title,
                    }),
            [
              h,
              A,
              n.albumId,
              n.isAvailable,
              n.isRemoved,
              n.title,
              n.trackSource,
              E,
              N,
            ],
          ),
          R = (0, r.useMemo)(() => C(n.artists, p), [n.artists, p, n.id]);
        return (0, a.jsx)("div", {
          className: (0, l.W)(
            b().root,
            {
              [b().root_disabled]: !n.isAvailable,
              [b().root_disliked]: n.isDisliked,
              [b().root_withSecondaryColor]: f,
            },
            t,
          ),
          children: (0, a.jsxs)("div", {
            className: b().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, l.W)(
                  b().titleContainer,
                  { [b().titleContainer_withVersion]: n.version },
                  i,
                ),
                children: [
                  (0, a.jsxs)(m.Caption, {
                    className: b().text,
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "div",
                    lineClamp: 1,
                    children: [
                      I,
                      !n.isRemoved &&
                        n.version &&
                        (0, a.jsx)(m.Caption, {
                          className: (0, l.W)(b().text, b().version),
                          type: "entity",
                          size: h,
                          weight: "medium",
                          variant: "div",
                          children: " ".concat(n.version),
                        }),
                    ],
                  }),
                  n.trackExplicitMark &&
                    y &&
                    (0, a.jsx)(u.ExplicitMark, {
                      iconSize: g,
                      variant: n.trackExplicitMark,
                      className: b().explicitMark,
                    }),
                ],
              }),
              R.length > 0 &&
                (0, a.jsx)(k.jO, {
                  className: (0, l.W)(b().text, b().artists),
                  linkClassName: (0, l.W)(b().text, b().link),
                  captionClassName: (0, l.W)(b().text, b().artistCaption),
                  artists: R,
                  withLink: !n.isUGC,
                  lineClamp: 1,
                  captionSize: h,
                  withAllArtistsTitle: j,
                }),
            ],
          }),
        });
      });
    },
    50429: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackContextMenu: function () {
            return S;
          },
        });
      var a = i(8759),
        l = i(33423),
        n = i(99616),
        r = i(2814),
        s = i(48616),
        o = i(14581),
        c = i(52317),
        d = i(21774),
        u = i(43310),
        m = i(5674),
        k = i(44285),
        v = i(65244),
        _ = i(3515);
      let p = () => {
        let { playlist: e, trackIndex: t } = (0, n.useContext)(_.jK) || {},
          { notify: i } = (0, m.d$)(),
          { playlist: l } = (0, m.oR)(),
          { formatMessage: r } = (0, v.Z)(),
          s = (0, n.useCallback)(async () => {
            let n = !1;
            if (e && "number" == typeof t) {
              let i = await e.changePlaylist(
                (0, _.PG)({
                  operation: _.aL.DELETE,
                  startPosition: t,
                  endPosition: t + 1,
                }),
              );
              i === _.pX.OK && (n = !0);
            }
            if (n) {
              if (e && "number" == typeof t) {
                var s;
                e.uuid ===
                  (null === (s = l.meta) || void 0 === s ? void 0 : s.uuid) &&
                  l.removeTracksFromItems(t, 1);
              }
            } else
              i(
                (0, a.jsx)(k.Q, {
                  error: r({ id: "playlist-errors.failed-to-remove-track" }),
                }),
                { containerId: m.W$.ERROR },
              );
          }, [e, t, l, i, r]);
        return {
          canRemoveTrackFromPlaylist: !!(null == e ? void 0 : e.canUserChange),
          removeTrackFromPlaylist: s,
        };
      };
      var C = i(35338),
        x = i(12670),
        y = i(11769),
        b = i(54272);
      let f = (e) => {
        let {
            createPlaylist: t,
            modals: { fullscreenPlayerModal: i },
          } = (0, m.oR)(),
          { notify: l } = (0, m.d$)(),
          r = (0, y.useRouter)(),
          { formatMessage: o } = (0, v.Z)(),
          c = (0, b.W)(),
          d = (0, n.useCallback)(
            async (e) => {
              var i;
              if (
                (await t.create({
                  title: o({ id: "entity-names.new-playlist" }),
                  visibility: s.we.PUBLIC,
                }),
                !(null == t
                  ? void 0
                  : null === (i = t.meta) || void 0 === i
                    ? void 0
                    : i.uuid))
              )
                return null;
              let a = await c({
                playlist: t.meta,
                track: e,
                withPageRefresh: !1,
                withFailNotification: !1,
                withSuccessNotification: !1,
              });
              if (a === _.pX.OK) {
                let e = (0, m.SZ)("/playlist/".concat(t.meta.uuid));
                return t.reset(), e;
              }
              return null;
            },
            [c, t, o],
          );
        return (0, n.useCallback)(async () => {
          let t = await d(e);
          t
            ? (i.isOpened && i.close(), r.push(t))
            : l((0, a.jsx)(_.wi, {}), {
                containerId: i.isOpened ? m.W$.FULLSCREEN_ERROR : m.W$.ERROR,
              });
        }, [d, i, l, r, e]);
      };
      var h = i(1918);
      let g = (e) => {
        let { playlist: t, track: i } = e,
          l = (0, b.W)(),
          r = (0, n.useCallback)(() => {
            l({ playlist: t, track: i });
          }, [l, t, i]);
        return (0, a.jsx)(c.sN, {
          onClick: r,
          children: (0, a.jsx)(h.Caption, {
            variant: "div",
            lineClamp: 1,
            children: t.title,
          }),
        });
      };
      var N = i(77124),
        j = i.n(N);
      let T = () =>
          (0, a.jsx)(c.sN, {
            children: (0, a.jsx)(x.Shimmer, { className: j().shimmer }),
          }),
        D = (0, l.Pi)((e) => {
          var t;
          let { track: i } = e,
            {
              user: l,
              contextMenuPlaylists: s,
              modals: { fullscreenPlayerModal: d },
            } = (0, m.oR)(),
            v = (0, u.SB)(i),
            { notify: _ } = (0, m.d$)(),
            p = f(i),
            x = (0, n.useCallback)(() => {
              if (!i.isLiked) {
                v();
                return;
              }
              _((0, a.jsx)(u.Yc, { track: i }), {
                containerId: d.isOpened ? m.W$.FULLSCREEN_INFO : m.W$.INFO,
              });
            }, [d.isOpened, v, _, i]),
            y = (0, n.useCallback)(
              (e) => {
                l.account.uid &&
                  s.getData({ userId: l.account.uid, page: e, pageSize: 20 });
              },
              [s, l.account.uid],
            ),
            b = (0, n.useCallback)(async () => {
              l.account.uid &&
                (await s.getData({
                  userId: l.account.uid,
                  page: 0,
                  pageSize: 20,
                }));
            }, [s, l.account.uid]);
          (0, n.useEffect)(
            () => () => {
              s.reset();
            },
            [s],
          );
          let h = (e) => {
              var t;
              let l =
                null == s
                  ? void 0
                  : null === (t = s.items) || void 0 === t
                    ? void 0
                    : t[e];
              return l
                ? (0, a.jsx)(g, { track: i, playlist: l }, l.uuid)
                : (0, a.jsx)(T, {});
            },
            N = (0, n.useMemo)(() => {
              var e, t, i;
              return s.isLoaded
                ? (0, a.jsx)(k.Wv, {
                    className: (0, C.W)(j().virtualScroll, j().important),
                    listClassName: j().content,
                    customComponents: {
                      Header: () =>
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(c.sN, {
                              onClick: p,
                              icon: (0, a.jsx)(o.J, { variant: "add" }),
                              children: (0, a.jsx)(r.Z, {
                                id: "playlist-actions.create-playlist",
                              }),
                            }),
                            (0, a.jsx)(c.sN, {
                              onClick: x,
                              children: (0, a.jsx)(r.Z, {
                                id: "entity-names.liked-playlist",
                              }),
                            }),
                          ],
                        }),
                    },
                    itemContentCallback: h,
                    totalCount:
                      null !==
                        (t =
                          null == s
                            ? void 0
                            : null === (e = s.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: y,
                    pageSize: 20,
                    withFooter: !1,
                    totalRequests:
                      null !== (i = s.requests) && void 0 !== i ? i : 0,
                    alwaysShowScrollbar: !0,
                  })
                : [...Array(7)].map((e, t) => (0, a.jsx)(T, {}, t));
            }, [
              s.loadingState,
              null == s
                ? void 0
                : null === (t = s.pager) || void 0 === t
                  ? void 0
                  : t.total,
              s.requests,
              y,
              v,
              p,
            ]);
          return (0, a.jsx)(c.v2, {
            offsetOptions: 3,
            onShow: b,
            reference: (0, a.jsx)(c.sN, {
              isSubMenu: !0,
              icon: (0, a.jsx)(o.J, { variant: "addToPlaylist" }),
              children: (0, a.jsx)(r.Z, {
                id: "playlist-actions.add-track-to-playlist",
              }),
            }),
            children: (0, a.jsx)("div", { className: j().root, children: N }),
          });
        }),
        S = (0, l.Pi)((e) => {
          var t, i, l, v;
          let {
              track: _,
              reference: C,
              onOpenChange: x,
              open: y,
              placement: b,
              returnFocus: f,
            } = e,
            {
              settings: h,
              currentTrackInfo: g,
              experiments: N,
              modals: { trackModal: j },
            } = (0, m.oR)(),
            T = (0, u.SB)(_),
            S = (0, u.KX)(_),
            E = (0, d.SB)(_.mainAlbum),
            L = "".concat(m.aU.TRACK, "-").concat(_.id),
            A = h.layout === m.t8.Mobile,
            { href: I } = (0, m.qK)(_.url),
            { canRemoveTrackFromPlaylist: R, removeTrackFromPlaylist: B } = p(),
            { isPlaying: M, togglePlay: P } = (0, m.Qh)({
              seeds:
                null !== (v = null == _ ? void 0 : _.seeds) && void 0 !== v
                  ? v
                  : [],
              pageIdForFrom: m.Rh.RADIO,
              blockIdForFrom: L,
            }),
            V = (0, n.useCallback)(() => {
              M || P();
            }, [M, P]),
            G = (0, n.useCallback)(() => {
              var e;
              g.setTrack({
                id: _.id,
                albumId:
                  (null === (e = _.mainAlbum) || void 0 === e
                    ? void 0
                    : e.id) || null,
                isUGC: _.isUGC || null,
              }),
                j.open();
            }, [
              g,
              _.id,
              _.isUGC,
              null === (t = _.mainAlbum) || void 0 === t ? void 0 : t.id,
              j,
            ]);
          (0, m.ZP)(y);
          let U =
              null === (i = _.mainAlbum) || void 0 === i ? void 0 : i.isPodcast,
            O = !_.isUGC && !U,
            w = N.checkExperiment(m.pe.WebNextTrackAboutModal, "on") && !A;
          return (0, a.jsxs)(c.v2, {
            reference: C,
            isMobile: A,
            title: _.title,
            description: _.artistsNames,
            placement: b,
            offsetOptions: 10,
            open: y,
            onOpenChange: x,
            returnFocus: f,
            children: [
              !U && (0, a.jsx)(k.xZ, { onClick: T, isLiked: _.isLiked }),
              O &&
                (0, a.jsx)(k.GQ, {
                  onClick: V,
                  variant: "track",
                  disabled: !_.isAvailable,
                }),
              !U && (0, a.jsx)(k.ZL, { onClick: S, isDisliked: _.isDisliked }),
              !A && (0, a.jsx)(D, { track: _ }),
              (0, a.jsx)(k.zq, {
                disabled: _.isUGC || _.trackSource === s.zu.OWN_REPLACED_TO_UGC,
                shareLink: I,
                entityVariant: "track",
                entityTitle: _.title,
              }),
              U &&
                E &&
                (0, a.jsx)(k.qq, {
                  onClick: E,
                  isLiked:
                    null === (l = _.mainAlbum) || void 0 === l
                      ? void 0
                      : l.isLiked,
                }),
              R &&
                (0, a.jsx)(c.sN, {
                  onClick: B,
                  icon: (0, a.jsx)(o.J, { variant: "bucket" }),
                  children: (0, a.jsx)(r.Z, {
                    id: "playlist-actions.remove-from-playlist",
                  }),
                }),
              w &&
                (0, a.jsx)(c.sN, {
                  onClick: G,
                  icon: (0, a.jsx)(o.J, { variant: "info" }),
                  children: (0, a.jsx)(r.Z, { id: "track-modal.title" }),
                }),
            ],
          });
        });
    },
    84563: function (e, t, i) {
      "use strict";
      i.d(t, {
        f: function () {
          return v;
        },
      });
      var a = i(8759),
        l = i(35338),
        n = i(33423),
        r = i(99616),
        s = i(65244),
        o = i(96213),
        c = i(5674),
        d = i(44285),
        u = i(5658),
        m = i(56805),
        k = i.n(m);
      let v = (0, n.Pi)((e) => {
        let {
            className: t,
            track: i,
            meta: n,
            chart: m,
            controls: v,
            playButtonCellRender: _,
            playContextParams: p,
            withLightning: C,
            ...x
          } = e,
          { formatMessage: y } = (0, s.Z)(),
          { ref: b, intersectionPropertyId: f } = (0, c.Vf)(),
          {
            sonataState: { status: h },
          } = (0, c.oR)(),
          {
            isPlaying: g,
            isCurrent: N,
            togglePlay: j,
            restartPlay: T,
          } = (0, c.qm)({
            playContextParams: p,
            entityId: i.albumId ? "".concat(i.id, ":").concat(i.albumId) : i.id,
            sonataStatus: h,
          }),
          D = (0, u.useTrackDisclaimer)({ track: i, callback: j }),
          { sendPlaySearchFeedback: S } = (0, c.sA)(),
          [E, L] = (0, r.useState)(!1),
          A = (0, r.useCallback)(() => {
            E || g || (L(!0), null == S || S()), D();
          }, [D, g, E, S]),
          I = (0, r.useCallback)(() => {
            g ? T() : A();
          }, [g, T, A]),
          R = (0, r.useCallback)(
            (e) => {
              2 === e.detail ? I() : (0, o.m)(e, k().ripple);
            },
            [I],
          ),
          B =
            null == _
              ? void 0
              : _({ onPlayButtonClick: A, isPlaying: g, isCurrent: N }),
          M = (0, r.useMemo)(() => {
            var e;
            if (!i.isAvailable)
              return ""
                .concat(y({ id: "extra-explicit.play-unavailable" }), " ")
                .concat(i.artistsNames, " ")
                .concat(i.title);
            let t = C ? y({ id: "entity-names.popular-among-users" }) : "";
            return ""
              .concat(i.artistsNames, " ")
              .concat(i.title, " ")
              .concat(null !== (e = i.version) && void 0 !== e ? e : "", " ")
              .concat(t);
          }, [y, i.artistsNames, i.isAvailable, i.title, i.version, C]);
        return (0, a.jsxs)(d.Md, {
          ref: b,
          "aria-label": M,
          "data-intersection-property-id": f,
          onClick: R,
          className: (0, l.W)(
            k().root,
            { [k().root_disabled]: !i.isAvailable },
            t,
          ),
          ...x,
          children: [m, B, n, v],
        });
      });
    },
    84270: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackCard: function () {
            return j;
          },
        });
      var a = i(8759),
        l = i(35338),
        n = i(33423),
        r = i(99616),
        s = i(65244),
        o = i(2814),
        c = i(454),
        d = i(57413),
        u = i(48616),
        m = i(15527),
        k = i(14077),
        v = i(14581),
        _ = i(96437),
        p = i(1918),
        C = i(81446),
        x = i(43310),
        y = i(5674),
        b = i(44285),
        f = i(5658),
        h = i(50429),
        g = i(27462),
        N = i.n(g);
      let j = (0, n.Pi)((e) => {
        let {
            className: t,
            children: i,
            track: n,
            contentLinesCount: g,
            overrideContextType: j,
          } = e,
          T = (0, y.x5)(),
          { formatMessage: D } = (0, s.Z)(),
          [S, E] = (0, r.useState)(!1),
          [L, A] = (0, r.useState)(!1),
          [I, R] = (0, r.useState)(!1),
          { sendLikeSearchFeedback: B, sendPlaySearchFeedback: M } = (0,
          y.sA)(),
          P = (0, x.SB)(n),
          {
            sonataState: { status: V },
          } = (0, y.oR)(),
          [G, U] = (0, r.useState)(!1),
          O = (0, r.useMemo)(() => {
            var e;
            let t = D(
                { id: "entity-names.track-name" },
                { trackName: n.title },
              ),
              i = n.isLiked ? D({ id: "entity-names.has-your-like" }) : "";
            return ""
              .concat(t, " ")
              .concat(null !== (e = n.version) && void 0 !== e ? e : "", " ")
              .concat(i);
          }, [D, n.title, n.isLiked, n.version]),
          w = n.albumId ? "".concat(n.id, ":").concat(n.albumId) : n.id,
          z = n.albumId && n.trackSource === u.zu.OWN && n.isAvailable,
          { isPlaying: W, togglePlay: F } = (0, y.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Various,
                meta: { id: w },
                from: T,
                overrideContextType: j,
              },
              queueParams: { index: 0 },
              loadContextMeta: !0,
            },
            entityId: w,
            sonataStatus: V,
          }),
          Z = (0, f.useTrackDisclaimer)({ track: n }),
          K = (0, f.useTrackDisclaimer)({ track: n, callback: F }),
          Y = (0, r.useCallback)(
            (e) => {
              Z(e);
            },
            [Z],
          ),
          H = (0, r.useCallback)(() => {
            S || W || (E(!0), null == M || M()), K();
          }, [W, S, M, K]),
          J = (0, r.useCallback)(() => {
            L || n.isLiked || (A(!0), null == B || B()), P();
          }, [P, L, B, n.isLiked]),
          $ = (0, r.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          q = (0, r.useCallback)(() => {
            R(!I), U(!I);
          }, [I]),
          X = (0, r.useMemo)(() => {
            var e;
            return (0, a.jsxs)(p.Caption, {
              className: (0, l.W)(N().titleContainer, {
                [N().titleContainer_withVersion]: n.version,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              children: [
                z
                  ? (0, a.jsx)(b.rU, {
                      "aria-label": ""
                        .concat(n.title, " ")
                        .concat(
                          null !== (e = n.version) && void 0 !== e ? e : "",
                        ),
                      className: N().titleLink,
                      href: "/album/".concat(n.albumId),
                      onClick: Y,
                      children: n.title,
                    })
                  : (0, a.jsx)(p.Caption, {
                      className: N().title,
                      variant: "span",
                      onClick: Y,
                      children: n.title,
                    }),
                n.version &&
                  (0, a.jsx)(p.Caption, {
                    className: N().version,
                    variant: "span",
                    children: " ".concat(n.version),
                  }),
              ],
            });
          }, [n.title, n.version, z, Y, n.albumId]),
          Q = (0, r.useMemo)(() => {
            var e;
            return z
              ? (0, a.jsx)(b.rU, {
                  href: "/album/".concat(n.albumId),
                  onClick: Y,
                  children: ""
                    .concat(n.title, " ")
                    .concat(null !== (e = n.version) && void 0 !== e ? e : ""),
                })
              : null;
          }, [n.title, n.version, n.albumId, z, Y]),
          ee = (0, r.useMemo)(
            () =>
              (0, a.jsx)(h.TrackContextMenu, {
                placement: "bottom",
                track: n,
                onOpenChange: q,
                open: I,
                returnFocus: !1,
                reference: (0, a.jsx)(m.z, {
                  onClick: $,
                  className: (0, l.W)(N().menuButton, N().control),
                  "aria-label": D({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(v.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.track.TRACK_CONTEXT_MENU_BUTTON),
                }),
              }),
            [D, $, q, I, n],
          ),
          et = (0, r.useMemo)(() => {
            if (n.isAvailable)
              return (0, a.jsx)(k.kk, {
                isVisible: I || G,
                className: N().controls,
                labelText: (0, a.jsx)(o.Z, { id: "entity-names.track" }),
                playControl: (0, a.jsx)(b.JM, {
                  className: (0, l.W)(N().playButton, N().control),
                  buttonVariant: "default",
                  withHover: !1,
                  iconSize: "xl",
                  variant: "filled",
                  isPlaying: W,
                  onClick: H,
                }),
                likeControl: (0, a.jsx)(b.dJ, {
                  className: (0, l.W)(N().likeButton, N().control),
                  isLiked: n.isLiked,
                  onClick: J,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: ee,
              });
          }, [ee, J, H, I, G, W, n.isAvailable, n.isLiked]),
          ei = (0, r.useMemo)(
            () =>
              (0, a.jsx)(_.Paper, {
                className: N().cover,
                radius: "l",
                withShadow: !0,
                onClick: Y,
                children: (0, a.jsxs)("div", {
                  className: N().coverBlock,
                  children: [
                    (0, a.jsx)(b.BE, {
                      className: N().image,
                      src: n.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: O,
                      withAvatarReplace: !0,
                      isAvailable: n.isAvailable,
                      "aria-hidden": !0,
                    }),
                    et,
                  ],
                }),
              }),
            [et, Y, n.coverUri, n.isAvailable, O],
          );
        return (0, a.jsx)(k.m7, {
          className: (0, l.W)(N().root, t),
          "aria-label": O,
          explicitMark: n.trackExplicitMark,
          title: X,
          srTitle: Q,
          contentLinesCount: g,
          view: ei,
          description: (0, a.jsx)(C.jO, {
            className: N().artists,
            artists: n.artists,
            lineClamp: 1,
            linkClassName: N().artistLink,
            captionSize: "s",
            withLink: !n.isUGC,
          }),
          children: i,
        });
      });
    },
    48765: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackAlbum: function () {
            return x;
          },
        });
      var a = i(8759),
        l = i(33423),
        n = i(99616),
        r = i(454),
        s = i(59741),
        o = i(81360),
        c = i(35338),
        d = i(1918),
        u = i(44285),
        m = i(38993),
        k = i.n(m);
      let v = (0, l.Pi)((e) => {
        let {
          className: t,
          track: i,
          position: l,
          onPlayButtonClick: n,
          isPlaying: r,
          isCurrent: s,
        } = e;
        return (0, a.jsxs)("div", {
          className: (0, c.W)(t, k().root, {
            [k().root_disabled]: !i.isAvailable,
            [k().root_playing]: r,
            [k().root_disliked]: i.isDisliked,
            [k().root_current]: s,
          }),
          children: [
            i.isAvailable &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(u.Up, { className: k().playingAnimation }),
                  (0, a.jsx)(u.JM, {
                    variant: "filled",
                    className: k().playButton,
                    iconClassName: k().playButtonIcon,
                    isPlaying: r,
                    onClick: n,
                    iconSize: "xs",
                  }),
                ],
              }),
            l &&
              (0, a.jsx)(d.Caption, {
                variant: "div",
                className: k().position,
                weight: "normal",
                type: "entity",
                size: "m",
                children: l,
              }),
          ],
        });
      });
      var _ = i(84563),
        p = i(31040),
        C = i.n(p);
      let x = (0, l.Pi)((e) => {
        let {
            track: t,
            albumArtists: i,
            position: l,
            playContextParams: c,
            withLightning: d,
          } = e,
          u = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(v, {
                track: t,
                position: l,
                className: C().playButtonCell,
                ...e,
              }),
            [t, l],
          );
        return (0, a.jsx)(_.f, {
          track: t,
          withLightning: d,
          meta: (0, a.jsx)(o.TrackMeta, { albumArtists: i, track: t }),
          playButtonCellRender: u,
          controls: (0, a.jsx)(s.ControlsBar, {
            withLightning: d,
            track: t,
            className: C().controlsBarCell,
          }),
          playContextParams: c,
          ...(0, r.BA)(r.bG.track.TRACK_ALBUM),
        });
      });
    },
    63402: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackChart: function () {
            return v;
          },
        });
      var a = i(8759),
        l = i(33423),
        n = i(99616),
        r = i(454),
        s = i(16121),
        o = i(44285),
        c = i(59741),
        d = i(81360),
        u = i(84563),
        m = i(72734),
        k = i.n(m);
      let v = (0, l.Pi)((e) => {
        var t, i;
        let { track: l, playContextParams: m } = e,
          v = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(o.Df, {
                isAvailable: l.isAvailable,
                isDisliked: l.isDisliked,
                coverUri: l.coverUri,
                title: l.title,
                className: k().playButtonCell,
                ...e,
              }),
            [l],
          );
        return (0, a.jsx)(u.f, {
          track: l,
          meta: (0, a.jsx)(d.TrackMeta, { track: l }),
          chart: (0, a.jsx)(s.kL, {
            className: k().chartCell,
            progress:
              null === (t = l.chart) || void 0 === t ? void 0 : t.progress,
            position:
              null === (i = l.chart) || void 0 === i ? void 0 : i.position,
            isDisliked: l.isDisliked,
            isDisabled: !l.isAvailable,
          }),
          playButtonCellRender: v,
          controls: (0, a.jsx)(c.ControlsBar, {
            track: l,
            className: k().controlsBarCell,
          }),
          playContextParams: m,
          ...(0, r.BA)(r.bG.track.TRACK_CHART),
        });
      });
    },
    8425: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackPlaylist: function () {
            return k;
          },
        });
      var a = i(8759),
        l = i(33423),
        n = i(99616),
        r = i(454),
        s = i(44285),
        o = i(59741),
        c = i(81360),
        d = i(84563),
        u = i(7525),
        m = i.n(u);
      let k = (0, l.Pi)((e) => {
        let {
            track: t,
            playContextParams: i,
            hasDuplicatesBefore: l,
            shouldCheckSelfIndex: u = !0,
            className: k = "",
          } = e,
          v = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(s.Df, {
                isAvailable: t.isAvailable,
                isDisliked: t.isDisliked,
                coverUri: t.coverUri,
                title: t.title,
                className: m().playButtonCell,
                ...e,
              }),
            [t],
          );
        return (0, a.jsx)(d.f, {
          className: k,
          track: t,
          meta: (0, a.jsx)(c.TrackMeta, { track: t }),
          playButtonCellRender: v,
          hasDuplicatesBefore: l,
          controls: (0, a.jsx)(o.ControlsBar, {
            track: t,
            className: m().controlsBarCell,
          }),
          playContextParams: i,
          shouldCheckSelfIndex: u,
          ...(0, r.BA)(r.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    60362: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackPlaylistAddition: function () {
            return _;
          },
        });
      var a = i(8759),
        l = i(33423),
        n = i(99616),
        r = i(65244),
        s = i(454),
        o = i(15527),
        c = i(14581),
        d = i(44285),
        u = i(81360),
        m = i(84563),
        k = i(96580),
        v = i.n(k);
      let _ = (0, l.Pi)((e) => {
        let {
            className: t,
            track: i,
            playContextParams: l,
            hasDuplicatesBefore: k,
            shouldCheckSelfIndex: _ = !0,
            onClick: p,
          } = e,
          { formatMessage: C } = (0, r.Z)(),
          x = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(d.Df, {
                isAvailable: i.isAvailable,
                isDisliked: i.isDisliked,
                coverUri: i.coverUri,
                title: i.title,
                className: v().playButtonCell,
                ...e,
              }),
            [i],
          ),
          y = (0, n.useCallback)(() => {
            null == p || p(i);
          }, [i, p]),
          b = (0, n.useMemo)(
            () =>
              (0, a.jsx)("div", {
                className: v().controls,
                children: (0, a.jsx)(o.z, {
                  className: v().button,
                  variant: "text",
                  size: "xs",
                  radius: "xxxl",
                  "aria-label": C({
                    id: "interface-actions.add-track-to-playlist",
                  }),
                  onClick: y,
                  icon: (0, a.jsx)(c.J, { size: "xxs", variant: "add" }),
                }),
              }),
            [C, y],
          );
        return (0, a.jsx)(m.f, {
          className: t,
          track: i,
          meta: (0, a.jsx)(u.TrackMeta, { track: i }),
          playButtonCellRender: x,
          hasDuplicatesBefore: k,
          controls: b,
          playContextParams: l,
          shouldCheckSelfIndex: _,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST_ADDITION),
        });
      });
    },
    17734: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          TrackPodcast: function () {
            return k;
          },
        });
      var a = i(8759),
        l = i(33423),
        n = i(99616),
        r = i(454),
        s = i(44285),
        o = i(59741),
        c = i(19708),
        d = i(84563),
        u = i(39206),
        m = i.n(u);
      let k = (0, l.Pi)((e) => {
        let {
            track: t,
            playContextParams: i,
            hasDuplicatesBefore: l,
            shouldCheckSelfIndex: u = !0,
            withPodcastName: k = !1,
          } = e,
          v = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(s.Df, {
                isAvailable: t.isAvailable,
                isDisliked: t.isDisliked,
                coverUri: t.coverUri,
                title: t.title,
                className: m().playButtonCell,
                ...e,
              }),
            [t],
          );
        return (0, a.jsx)(d.f, {
          track: t,
          meta: (0, a.jsx)(c.PodcastMeta, { track: t, withPodcastName: k }),
          playButtonCellRender: v,
          hasDuplicatesBefore: l,
          controls: (0, a.jsx)(o.ControlsBar, {
            track: t,
            className: m().controlsBarCell,
          }),
          playContextParams: i,
          shouldCheckSelfIndex: u,
          ...(0, r.BA)(r.bG.track.TRACK_PODCAST),
        });
      });
    },
    77263: function (e) {
      e.exports = {
        root: "Disclaimer_root___gYw4",
        container: "Disclaimer_container__Tnsjy",
        title: "Disclaimer_title__9wHWb",
        text: "Disclaimer_text__bg6L1",
        link: "Disclaimer_link__iGciq",
        buttons: "Disclaimer_buttons__5idgM",
        button: "Disclaimer_button__OmGNo",
        shimmer: "Disclaimer_shimmer__vg_D2",
      };
    },
    13327: function (e) {
      e.exports = {
        root: "DisclaimerModal_root__sidbk",
        content: "DisclaimerModal_content___tRvp",
      };
    },
    85204: function (e) {
      e.exports = {
        message: "NotificationDislike_message__R2jfZ",
        text: "NotificationDislike_text__xmrnn",
        cover: "NotificationDislike_cover__bvqFM",
        image: "NotificationDislike_image__h0_EO",
      };
    },
    59781: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__5HK2B",
        item: "ControlsBar_item__I_p99",
        contextMenu: "ControlsBar_contextMenu__8AFkQ",
        contextMenu_visible: "ControlsBar_contextMenu_visible__PYW8h",
        contextMenuWrapper: "ControlsBar_contextMenuWrapper__NHkn_",
        explicitMark: "ControlsBar_explicitMark__w9l80",
        lightning: "ControlsBar_lightning__GBl7O",
        icons: "ControlsBar_icons__yXi8q",
        duration: "ControlsBar_duration__RawSk",
        duration_hidden: "ControlsBar_duration_hidden__szTkk",
        controls: "ControlsBar_controls__3nXlz",
        dislikeIcon: "ControlsBar_dislikeIcon__ENXh_",
        controls_disabled: "ControlsBar_controls_disabled__5KRgJ",
        controls_disliked: "ControlsBar_controls_disliked__BT2of",
        likeIcon: "ControlsBar_likeIcon__mrNiz",
        popover: "ControlsBar_popover__WrYMt",
      };
    },
    73473: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        artistCaption: "Meta_artistCaption__JESZi",
        link: "Meta_link__IFDBA",
        albumTitle: "Meta_albumTitle__mHeOs",
        root: "Meta_root__R8n1h",
        root_withSecondaryColor: "Meta_root_withSecondaryColor___uENY",
        root_disabled: "Meta_root_disabled__Dpx_M",
        albumLink: "Meta_albumLink__gASh6",
        artists: "Meta_artists__VnR52",
        explicitMark: "Meta_explicitMark__ocnCV",
        title: "Meta_title__GGBnH",
        titleContainer: "Meta_titleContainer__gDuXr",
        version: "Meta_version__c2sHU",
        root_disliked: "Meta_root_disliked__DrZ7_",
        text: "Meta_text__Y5uYH",
        metaContainer: "Meta_metaContainer__7i2dp",
        titleContainer_withVersion: "Meta_titleContainer_withVersion__n7MdY",
      };
    },
    70434: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        explicitMark: "PodcastMeta_explicitMark__IstkP",
        dateWithName: "PodcastMeta_dateWithName__cKy0o",
        podcastName: "PodcastMeta_podcastName__iQeNK",
        soonDate: "PodcastMeta_soonDate__zGuG9",
        dateDisabled: "PodcastMeta_dateDisabled__DxjtJ",
        dateDisliked: "PodcastMeta_dateDisliked__95MlL",
      };
    },
    38993: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "PlayButtonWithPosition_root__H5FYg",
        playButton: "PlayButtonWithPosition_playButton__7cfDQ",
        playButtonIcon: "PlayButtonWithPosition_playButtonIcon___cLAL",
        playingAnimation: "PlayButtonWithPosition_playingAnimation__Hy5rC",
        position: "PlayButtonWithPosition_position__wk3OT",
        root_current: "PlayButtonWithPosition_root_current__FCDLJ",
        root_playing: "PlayButtonWithPosition_root_playing__RpnYU",
        root_disliked: "PlayButtonWithPosition_root_disliked__NIZzA",
        root_disabled: "PlayButtonWithPosition_root_disabled__PMV24",
      };
    },
    77124: function (e) {
      e.exports = {
        root: "ContextSubMenuAddToPlaylist_root__ZGm6z",
        content: "ContextSubMenuAddToPlaylist_content__isTx4",
        virtualScroll: "ContextSubMenuAddToPlaylist_virtualScroll__SJG3e",
        important: "ContextSubMenuAddToPlaylist_important__OUL53",
        shimmer: "ContextSubMenuAddToPlaylist_shimmer__uQHAL",
      };
    },
    56805: function (e) {
      e.exports = {
        root: "Track_root__dbDjD",
        root_disabled: "Track_root_disabled__53T42",
        ripple: "Track_ripple__f8iBh",
      };
    },
    27462: function (e) {
      e.exports = {
        root: "TrackCard_root__kIpe1",
        controls: "TrackCard_controls__E7Y3L",
        cover: "TrackCard_cover__tkVPB",
        coverBlock: "TrackCard_coverBlock__WdvvQ",
        image: "TrackCard_image__KsOFF",
        artists: "TrackCard_artists__wH48n",
        artistLink: "TrackCard_artistLink__aqLl7",
        titleContainer: "TrackCard_titleContainer__YCcZk",
        titleContainer_withVersion:
          "TrackCard_titleContainer_withVersion__fTRGu",
        title: "TrackCard_title__BVLuv",
        titleLink: "TrackCard_titleLink__NtPhm",
        version: "TrackCard_version__7iPuj",
        playButton: "TrackCard_playButton__ukJDd",
        likeButton: "TrackCard_likeButton__Hejrk",
        menuButton: "TrackCard_menuButton__XtYLf",
        control: "TrackCard_control___huPc",
      };
    },
    31040: function (e) {
      e.exports = {
        playButtonCell: "TrackAlbum_playButtonCell__pLJte",
        controlsBarCell: "TrackAlbum_controlsBarCell__XUUCc",
      };
    },
    72734: function (e) {
      e.exports = {
        playButtonCell: "TrackChart_playButtonCell__cvY7u",
        controlsBarCell: "TrackChart_controlsBarCell__Xd5pn",
        chartCell: "TrackChart_chartCell__33_al",
      };
    },
    7525: function (e) {
      e.exports = {
        playButtonCell: "TrackPlaylist_playButtonCell__Q6YT_",
        controlsBarCell: "TrackPlaylist_controlsBarCell__6clda",
      };
    },
    96580: function (e) {
      e.exports = {
        playButtonCell: "TrackPlaylistAddition_playButtonCell__Ocnhq",
        controls: "TrackPlaylistAddition_controls__S346Y",
        button: "TrackPlaylistAddition_button__fsY9k",
      };
    },
    39206: function (e) {
      e.exports = {
        playButtonCell: "TrackPodcast_playButtonCell___b_gp",
        controlsBarCell: "TrackPodcast_controlsBarCell__dwTYj",
      };
    },
    96213: function (e, t, i) {
      "use strict";
      i.d(t, {
        m: function () {
          return l;
        },
      });
      var a = {};
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createRipple = void 0),
        (a.createRipple = function (e, t, i) {
          let a = i ?? e.currentTarget,
            l = document.createElement("span"),
            n = Math.max(a.clientWidth, a.clientHeight),
            r = n / 2,
            s = a.getBoundingClientRect(),
            o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
            c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
          (l.style.width = `${n}px`),
            (l.style.height = `${n}px`),
            (l.style.left = 0 === e.clientX ? "0px" : `${o - r}px`),
            (l.style.top = `${c - r}px`),
            l.classList.add(t);
          let d = a.getElementsByClassName(t)[0];
          d && d.remove(), a.insertBefore(l, a.firstChild);
        }),
        a.__esModule;
      var l = a.createRipple;
    },
  },
]);
