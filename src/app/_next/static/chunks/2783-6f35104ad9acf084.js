(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2783],
  {
    73447: function (e, t, i) {
      "use strict";
      i.d(t, {
        wV: function () {
          return d.AlbumEntityNameConsumer;
        },
        KX: function () {
          return x;
        },
        gI: function () {
          return V;
        },
        lf: function () {
          return a;
        },
        N: function () {
          return l;
        },
        hh: function () {
          return o;
        },
        Vt: function () {
          return u.useAlbumAnalyticsAppScreenName;
        },
        jV: function () {
          return c.useAlbumDisclaimer;
        },
        H0: function () {
          return d.useAlbumEntityName;
        },
        ap: function () {
          return m.useMarkAlbumListenedClick;
        },
        SB: function () {
          return v.useOnLikeClick;
        },
        BV: function () {
          return b.useOnPinClick;
        },
        IK: function () {
          return p.useOnPresaveClick;
        },
        yv: function () {
          return A.useOnPromoLandingLikeClick;
        },
      });
      var r,
        a,
        n = i(22874),
        s = i(13534);
      let l = (e) => {
          let t = (0, s.GFX)(e.trailer);
          return (0, n.pj)({
            id: e.id,
            title: e.title,
            coverUri: e.coverUri,
            type: e.type,
            year: e.year,
            version: e.version,
            genre: e.genre,
            likesCount: e.likesCount,
            averageColor: (0, s.Usz)(e.derivedColors),
            isAvailable: !!e.available,
            trackPosition: e.trackPosition,
            disclaimers: e.disclaimers,
            trackCount: e.trackCount,
            availableForPremiumUsers: e.availableForPremiumUsers,
            availableForOptions: e.availableForOptions || [],
            bestAlbumTracks: e.bests,
            durationSec: e.durationSec,
            trailer: t,
            listeningFinished: !!e.listeningFinished,
          });
        },
        o = (e) => {
          let t = !1;
          e.presaveDate ? (t = !0) : e.presaved && (t = e.presaved);
          let { disclaimers: i } = (0, s.NuW)(e);
          return (0, n.pj)({
            id: e.id,
            disclaimers: i,
            isPresave: t,
            title: e.title,
            type: e.type,
            coverUri: e.coverUri,
            releaseDate: e.releaseDate,
          });
        };
      ((r = a || (a = {})).TRACK = "track"), (r.TEXT = "text");
      var u = i(51301),
        c = i(70989),
        d = i(34060),
        m = i(29593),
        v = i(23857),
        b = i(78218),
        p = i(83026),
        A = i(74220),
        _ = i(44679),
        C = i(15357),
        g = i(14222),
        h = i(97472),
        y = i(89143),
        f = i(40892);
      let k = n.V5.model("TrackPosition", {
          volume: n.V5.number,
          index: n.V5.number,
        }),
        x = n.V5.compose(
          n.V5.model({
            id: n.V5.number,
            title: n.V5.string,
            type: n.V5.maybe(n.V5.enumeration(Object.values(_.V))),
            coverUri: n.V5.maybe(n.V5.string),
            averageColor: n.V5.maybe(n.V5.string),
            year: n.V5.maybe(n.V5.number),
            version: n.V5.maybe(n.V5.string),
            isAvailable: n.V5.optional(n.V5.boolean, !0),
            availableForOptions: n.V5.maybe(
              n.V5.array(n.V5.enumeration(Object.values(C.Y))),
            ),
            availableForPremiumUsers: n.V5.maybe(n.V5.boolean),
            bookmateOptionRequired: n.V5.maybe(n.V5.boolean),
            genre: n.V5.maybe(n.V5.string),
            trackPosition: n.V5.maybe(k),
            disclaimers: n.V5.maybe(n.V5.array(n.V5.string)),
            trackCount: n.V5.maybe(n.V5.number),
            bestAlbumTracks: n.V5.maybe(n.V5.array(n.V5.number)),
            trailer: n.V5.maybe(f.K8),
            durationSec: n.V5.maybe(n.V5.number),
            listeningFinished: n.V5.maybe(n.V5.boolean),
            releaseDate: n.V5.maybe(n.V5.string),
          }),
          f.fE,
          f.ie,
        )
          .views((e) => {
            let t = {
              get url() {
                return "/album/".concat(e.id);
              },
              get isLiked() {
                if (!(0, n.fh)(e)) return !1;
                let { library: t } = (0, n.yj)(e);
                return null == t ? void 0 : t.isAlbumLiked(e.id);
              },
              get pinId() {
                return "".concat(g.Q.ALBUM_ITEM).concat(e.id);
              },
              get seeds() {
                return ["album:".concat(e.id)];
              },
              get isAlbum() {
                return e.type === _.V.ALBUM || e.type === _.V.SINGLE;
              },
              get isPodcast() {
                return e.type === _.V.PODCAST;
              },
              get isAudiobook() {
                return e.type === _.V.AUDIOBOOK;
              },
              get isFairyTale() {
                return e.type === _.V.FAIRY_TALE;
              },
              get isNonMusic() {
                if (!(0, n.fh)(e)) return !1;
                return t.isPodcast || t.isAudiobook || t.isFairyTale;
              },
              get isPinned() {
                if (!(0, n.fh)(e)) return !1;
                let { pinsCollection: t } = (0, n.yj)(e);
                return t.isPinned(this.pinId);
              },
              get modalDisclaimerId() {
                if (e.disclaimers) {
                  var i;
                  let t =
                    null === (i = (0, s.UY5)(e.disclaimers, h.e.MODAL)) ||
                    void 0 === i
                      ? void 0
                      : i[0];
                  if (t) {
                    let { id: e } = t;
                    return e;
                  }
                }
                return null;
              },
              get isForeignAgent() {
                var r, a;
                if (!(0, n.fh)(e)) return !1;
                let { experiments: t } = (0, n.yj)(e),
                  i = !!(null === (r = e.disclaimers) || void 0 === r
                    ? void 0
                    : r.includes(h.e.FOREIGN_AGENT));
                if (e.disclaimers) {
                  let t =
                    null ===
                      (a = (0, s.UY5)(e.disclaimers, h.e.FOREIGN_AGENT)) ||
                    void 0 === a
                      ? void 0
                      : a[0];
                  i = (null == t ? void 0 : t.type) === h.e.FOREIGN_AGENT;
                }
                return i && t.checkExperiment(s.peG.WebNextAgentPodcast, "on");
              },
              get isLegalRejected() {
                if (!(0, n.fh)(e)) return !1;
                if (e.disclaimers) {
                  var l;
                  let t =
                      null === (l = (0, s.UY5)(e.disclaimers, h.e.MODAL)) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    i = (null == t ? void 0 : t.type) === h.e.MODAL;
                  return (
                    !e.isAvailable && (i || e.disclaimers.includes(h.e.MODAL))
                  );
                }
                return !1;
              },
              get isUnsafeLegal() {
                if (!(0, n.fh)(e)) return !1;
                if (e.disclaimers) {
                  var o;
                  let t =
                    null === (o = (0, s.UY5)(e.disclaimers, h.e.MODAL)) ||
                    void 0 === o
                      ? void 0
                      : o[0];
                  return (
                    e.isAvailable && (null == t ? void 0 : t.type) === h.e.MODAL
                  );
                }
                return !1;
              },
              get isAvailableOnlyForPlus() {
                var u;
                return (
                  !e.isAvailable &&
                  (e.availableForPremiumUsers ||
                    !!(null === (u = e.availableForOptions) || void 0 === u
                      ? void 0
                      : u.includes(C.Y.BOOKMATE)))
                );
              },
              get shouldShowBooksBadge() {
                var c;
                return !!(
                  e.bookmateOptionRequired ||
                  (!e.availableForPremiumUsers &&
                    (null === (c = e.availableForOptions) || void 0 === c
                      ? void 0
                      : c.includes(C.Y.BOOKMATE)))
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            toggleLike: (0, n.ls)(function* () {
              if (!(0, n.fh)(e)) return;
              let { library: t, user: i } = (0, n.yj)(e);
              if (i.isAuthorized) {
                let r = yield t.toggleAlbumLike({
                  entityId: e.id,
                  userId: i.account.data.uid,
                });
                return (
                  (0, n.fh)(e) &&
                    r === y.B.OK &&
                    (e.isLiked ? e.likePending() : e.unlikePending()),
                  r
                );
              }
            }),
            togglePin: (0, n.ls)(function* () {
              if (!(0, n.fh)(e)) return;
              let { pinsCollection: t, user: i } = (0, n.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleAlbumPin({ id: e.id }, e.pinId);
            }),
            getKey: (t) => "".concat(t, "_").concat(e.id),
            updateFinished: (t) => {
              e.listeningFinished = t;
            },
          }))
          .named("BaseAlbum");
      var P = i(66610);
      let V = n.V5.compose(
        n.V5.model("BaseUpcomingAlbum", {
          id: n.V5.number,
          isPresave: n.V5.boolean,
          title: n.V5.maybe(n.V5.string),
          type: n.V5.maybe(n.V5.enumeration(Object.values(_.V))),
          coverUri: n.V5.maybe(n.V5.string),
          releaseDate: n.V5.maybe(n.V5.string),
        }),
        f.ie,
      ).actions((e) => {
        let t = {
          presaveAlbum: (0, n.ls)(function* (t) {
            let { usersResource: i, modelActionsLogger: r } = (0, n.dU)(e);
            try {
              e.isPresave = !0;
              let r = yield i.presaveAlbum(t);
              return r === P.Z.ERROR && (e.isPresave = !1), r;
            } catch (t) {
              return (e.isPresave = !1), r.error(t), P.Z.ERROR;
            }
          }),
          removePresaveAlbum: (0, n.ls)(function* (t) {
            let { usersResource: i, modelActionsLogger: r } = (0, n.dU)(e);
            try {
              e.isPresave = !1;
              let r = yield i.removePresaveAlbum(t);
              return r === P.Z.ERROR && (e.isPresave = !0), r;
            } catch (t) {
              return (e.isPresave = !0), r.error(t), P.Z.ERROR;
            }
          }),
          toggleLike: (0, n.ls)(function* () {
            let i;
            if (!(0, n.fh)(e)) return;
            let { user: r } = (0, n.yj)(e);
            if (r.account.data.uid)
              return (
                (i = e.isPresave
                  ? yield t.removePresaveAlbum({
                      albumId: e.id,
                      userId: r.account.data.uid,
                    })
                  : yield t.presaveAlbum({
                      albumId: e.id,
                      userId: r.account.data.uid,
                      likeAfterRelease: !0,
                    })),
                (0, n.fh)(e),
                i
              );
          }),
          getKey: (t) => "".concat(t, "_").concat(e.id),
        };
        return t;
      });
    },
    51301: function (e, t, i) {
      "use strict";
      i.d(t, {
        useAlbumAnalyticsAppScreenName: function () {
          return l;
        },
      });
      var r = i(65067),
        a = i(4875),
        n = i(44679),
        s = i(13534);
      let l = (e) => {
        let t = (0, s.RVp)();
        return (0, r.useMemo)(() => {
          if (!t) return a.qU.AlbumScreen;
          switch (e) {
            case n.V.PODCAST:
              return a.qU.PodcastScreen;
            case n.V.AUDIOBOOK:
              return a.qU.AudiobookScreen;
            default:
              return a.qU.AlbumScreen;
          }
        }, [e, t]);
      };
    },
    70989: function (e, t, i) {
      "use strict";
      i.d(t, {
        useAlbumDisclaimer: function () {
          return l;
        },
      });
      var r = i(65067),
        a = i(77282),
        n = i(93093),
        s = i(13534);
      let l = (e) => {
        let { album: t, callback: i, shouldHistoryBack: l } = e,
          {
            disclaimerModalData: o,
            modals: { disclaimerModal: u },
          } = (0, s.oR4)(),
          c = (0, r.useRef)(String((0, a.Z)())),
          d = (0, r.useRef)(!1),
          m = (0, s.uK4)().get(s.ceh);
        return (
          (0, r.useEffect)(() => {
            o.isUnsafeDisclaimerConfirmed &&
              o.id === c.current &&
              !d.current &&
              (null == i || i(), (d.current = !0));
          }, [i, o.isUnsafeDisclaimerConfirmed, o.id]),
          (0, n.W)(async (e) => {
            let r = m.get(s.BUb.ExEx),
              a = (null == t ? void 0 : t.isPodcast)
                ? null == r
                  ? void 0
                  : r.includes("".concat(s.coP.PODCAST, "_").concat(t.id))
                : null == r
                  ? void 0
                  : r.includes(
                      ""
                        .concat(s.coP.ALBUM, "_")
                        .concat(null == t ? void 0 : t.id),
                    );
            if ((null == t ? void 0 : t.isUnsafeLegal) && a) {
              null == i || i();
              return;
            }
            if (
              (null == t ? void 0 : t.isLegalRejected) ||
              (null == t ? void 0 : t.isUnsafeLegal)
            ) {
              null == e || e.preventDefault(),
                await o.getDisclaimerData({
                  entityId: t.id,
                  entityType: t.isPodcast ? s.coP.PODCAST : s.coP.ALBUM,
                  disclaimerId: t.modalDisclaimerId,
                }),
                t.isUnsafeLegal && o.setType(s.Gq.UNSAFE),
                o.setId(c.current),
                o.setEntityId(t.id),
                t.isPodcast
                  ? o.setEntityType(s.coP.PODCAST)
                  : o.setEntityType(s.coP.ALBUM),
                o.setShouldHistoryBack(!!l),
                (d.current = !1),
                u.open();
              return;
            }
            null == e || e.preventDefault(), null == i || i();
          })
        );
      };
    },
    34060: function (e, t, i) {
      "use strict";
      i.d(t, {
        AlbumEntityNameConsumer: function () {
          return r;
        },
        useAlbumEntityName: function () {
          return o;
        },
      });
      var r,
        a = i(65067),
        n = i(9317),
        s = i(44679),
        l = i(13534);
      (r || (r = {})).PIN = "pin";
      let o = (e, t) => {
        let { formatMessage: i } = (0, n.Z)(),
          r = (0, l.RVp)();
        return (0, a.useMemo)(() => {
          if (!r)
            return e === s.V.SINGLE
              ? i({ id: "entity-names.single" })
              : i({ id: "entity-names.album" });
          switch (e) {
            case s.V.SINGLE:
              return i({ id: "entity-names.single" });
            case s.V.PODCAST:
              return i({ id: "entity-names.podcast" });
            case s.V.AUDIOBOOK:
              if ("pin" === t) return i({ id: "entity-names.book" });
              return i({ id: "entity-names.audio" });
            case s.V.FAIRY_TALE:
              return i({ id: "entity-names.fairy-tale" });
            default:
              return i({ id: "entity-names.album" });
          }
        }, [e, i, r, t]);
      };
    },
    29593: function (e, t, i) {
      "use strict";
      i.d(t, {
        useMarkAlbumListenedClick: function () {
          return u;
        },
      });
      var r = i(75441),
        a = i(65067),
        n = i(9317),
        s = i(14617),
        l = i(13534),
        o = i(97141);
      let u = () => {
        let { user: e, album: t, fullscreenPlayer: i } = (0, l.oR4)(),
          { notify: u } = (0, l.d$W)(),
          { formatMessage: c } = (0, n.Z)();
        return (0, a.useCallback)(async () => {
          var a, n;
          if (!t) return;
          let d = i.modal.isOpened ? l.W$x.FULLSCREEN_ERROR : l.W$x.ERROR;
          if (!e.isAuthorized) {
            u(
              (0, r.jsx)(o.Q, {
                error: c({ id: "authorization-messages.need-to-authorizate" }),
              }),
              { containerId: d },
            );
            return;
          }
          if ((await t.setListeningFinishedStatus()) !== s.P.OK) {
            u(
              (0, r.jsx)(o.Q, {
                error: c({ id: "error-messages.error-during-action" }),
              }),
              { containerId: d },
            );
            return;
          }
          null === (n = t.meta) ||
            void 0 === n ||
            n.updateFinished(
              !(null === (a = t.meta) || void 0 === a
                ? void 0
                : a.listeningFinished),
            );
        }, [c, u, t, e.isAuthorized, i.modal.isOpened]);
      };
    },
    4210: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return s;
        },
      });
      var r = i(44679),
        a = i(13534),
        n = i(97141);
      let s = (e) => {
        if (!(0, a.RVp)()) return n.j9.ALBUM;
        switch (e.type) {
          case r.V.PODCAST:
            return n.j9.PODCAST;
          case r.V.AUDIOBOOK:
            return n.j9.AUDIOBOOK;
          case r.V.FAIRY_TALE:
            return n.j9.FAIRY_TALE;
          default:
            return n.j9.ALBUM;
        }
      };
    },
    85556: function (e, t, i) {
      "use strict";
      i.d(t, {
        X: function () {
          return b;
        },
      });
      var r = i(75441),
        a = i(37285),
        n = i(65067),
        s = i(9317),
        l = i(89143),
        o = i(93093),
        u = i(13534),
        c = i(97141),
        d = i(62569),
        m = i(4210);
      let v = (0, d.Pi)((e) => {
          let { album: t, closeToast: i, withLink: a } = e,
            n = (0, m.C)(t);
          return (0, r.jsx)(c.AP, {
            closeToast: i,
            entityVariant: n,
            coverUri: t.coverUri,
            entityUrl: "/album/".concat(t.id),
            collectionUrl: "/collection",
            entityTitle: t.title,
            isLiked: t.isLiked,
            withLink: a,
          });
        }),
        b = () => {
          let { notify: e } = (0, u.d$W)(),
            [t, i] = (0, n.useState)(!1),
            { formatMessage: d } = (0, s.Z)();
          return (0, o.W)(async (n) => {
            let { album: s, withLink: o = !0, withNotification: m = !0 } = n;
            if (t) return;
            let b = { ...(0, a.ZN)(s), isLiked: !s.isLiked };
            i(!0);
            let p = await s.toggleLike();
            i(!1),
              m &&
                (p === l.B.OK
                  ? e((0, r.jsx)(v, { withLink: o, album: b }), {
                      containerId: u.W$x.INFO,
                    })
                  : e(
                      (0, r.jsx)(c.Q, {
                        error: d({ id: "error-messages.error-during-action" }),
                      }),
                      { containerId: u.W$x.ERROR },
                    ));
          });
        };
    },
    23857: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return u;
        },
      });
      var r = i(75441),
        a = i(9317),
        n = i(93093),
        s = i(13534),
        l = i(97141),
        o = i(85556);
      let u = (e) => {
        let { user: t } = (0, s.oR4)(),
          { formatMessage: i } = (0, a.Z)(),
          { notify: u } = (0, s.d$W)(),
          c = (0, o.X)();
        return (0, n.W)(async () => {
          if (e) {
            if (!t.isAuthorized) {
              u(
                (0, r.jsx)(l.Q, {
                  error: i({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$x.ERROR },
              );
              return;
            }
            return c({ album: e });
          }
        });
      };
    },
    78218: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return m;
        },
      });
      var r = i(75441),
        a = i(37285),
        n = i(65067),
        s = i(9317),
        l = i(13534),
        o = i(97141),
        u = i(62569),
        c = i(4210);
      let d = (0, u.Pi)((e) => {
          let { album: t, closeToast: i } = e,
            a = (0, c.C)(t);
          return (0, r.jsx)(o.K1, {
            closeToast: i,
            entityVariant: a,
            coverUri: t.coverUri,
            entityUrl: "/album/".concat(t.id),
            entityTitle: t.title,
            isPinned: t.isPinned,
          });
        }),
        m = (e) => {
          let { user: t } = (0, l.oR4)(),
            { notify: i } = (0, l.d$W)(),
            { formatMessage: u } = (0, s.Z)(),
            [c, m] = (0, n.useState)(!1);
          return (0, n.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(o.Q, {
                  error: u({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l.W$x.ERROR },
              );
              return;
            }
            if (c) return;
            let n = { ...(0, a.ZN)(e), isPinned: !e.isPinned };
            m(!0);
            let s = await e.togglePin();
            m(!1),
              s
                ? i((0, r.jsx)(d, { album: n }), { containerId: l.W$x.INFO })
                : i(
                    (0, r.jsx)(o.Q, {
                      error: u({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l.W$x.ERROR },
                  );
          }, [e, u, i, c, t.isAuthorized]);
        };
    },
    83026: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPresaveClick: function () {
          return d;
        },
      });
      var r = i(75441),
        a = i(37285),
        n = i(65067),
        s = i(9317),
        l = i(66610),
        o = i(13534),
        u = i(97141);
      let c = (e) => {
          let { upcomingAlbum: t, closeToast: i } = e;
          return (0, r.jsx)(u.V1, {
            closeToast: i,
            albumTitle: t.title,
            coverUri: t.coverUri,
            entityTitle: t.title,
            isPresave: t.isPresave,
          });
        },
        d = (e) => {
          let { user: t } = (0, o.oR4)(),
            { notify: i } = (0, o.d$W)(),
            [d, m] = (0, n.useState)(!1),
            { formatMessage: v } = (0, s.Z)();
          return (0, n.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(u.Q, {
                  error: v({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: o.W$x.ERROR },
              );
              return;
            }
            if (d) return;
            let n = { ...(0, a.ZN)(e), isPresave: !e.isPresave };
            m(!0);
            let s = await e.toggleLike();
            m(!1),
              s === l.Z.OK
                ? i((0, r.jsx)(c, { upcomingAlbum: n }), {
                    containerId: o.W$x.INFO,
                  })
                : i(
                    (0, r.jsx)(u.Q, {
                      error: v({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: o.W$x.ERROR },
                  );
          }, [t.isAuthorized, d, e, i, v]);
        };
    },
    74220: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPromoLandingLikeClick: function () {
          return s;
        },
      });
      var r = i(93093),
        a = i(13534),
        n = i(85556);
      let s = (e) => {
        let {
            user: t,
            modals: { promoLandingBuySubscriptionModal: i, crackdownModal: s },
            settings: { isMobile: l },
          } = (0, a.oR4)(),
          { isFreemium: o } = (0, a.NMB)(),
          u = (0, n.X)();
        return (0, r.W)(async () => {
          if (
            (!o ||
              (null == e ? void 0 : e.isLiked) ||
              (l ? i.open() : s.open()),
            t.isAuthorized && e)
          )
            return u({ album: e, withLink: !1, withNotification: t.hasPlus });
        });
      };
    },
    89428: function (e, t, i) {
      "use strict";
      i.d(t, {
        kL: function () {
          return l.Chart;
        },
        BH: function () {
          return s;
        },
        W5: function () {
          return a;
        },
      });
      var r = i(22874);
      let a = (e) => (0, r.pj)({ position: e.position, progress: e.progress });
      var n = i(63435);
      let s = r.V5.model("Chart", {
        position: r.V5.maybe(r.V5.number),
        progress: r.V5.maybe(r.V5.enumeration(Object.values(n.h))),
      });
      var l = i(85342);
    },
    85342: function (e, t, i) {
      "use strict";
      i.d(t, {
        Chart: function () {
          return b;
        },
      });
      var r = i(75441),
        a = i(32358),
        n = i(62569),
        s = i(65067),
        l = i(9317),
        o = i(35846),
        u = i(63435),
        c = i(69756),
        d = i(17392),
        m = i(88125),
        v = i.n(m);
      let b = (0, n.Pi)((e) => {
        let {
            progress: t,
            withIcon: i,
            withCrownIcon: n,
            position: m,
            weight: b = "normal",
            isDisliked: p,
            isDisabled: A,
            className: _,
            positionClassName: C,
          } = e,
          { formatMessage: g } = (0, l.Z)(),
          h = t || i,
          y = (0, s.useMemo)(() => {
            if (n) return "crown";
            switch (t) {
              case u.h.UP:
                return "chartUp";
              case u.h.DOWN:
                return "chartDown";
              case u.h.NEW:
                return "chartNew";
              default:
                return "chartSame";
            }
          }, [t, n]),
          f = (0, s.useMemo)(() => {
            switch (t) {
              case u.h.UP:
                return g({ id: "entity-names.chart-up" });
              case u.h.DOWN:
                return g({ id: "entity-names.chart-down" });
              case u.h.NEW:
                return g({ id: "entity-names.chart-new" });
              default:
                return g({ id: "entity-names.chart-same" });
            }
          }, [g, t]),
          k = n ? "crown" : t;
        return (0, r.jsxs)("div", {
          className: (0, a.W)(v().root, _),
          ...(0, o.BA)(o.FK.chart.CHART_PROGRESS),
          children: [
            (0, r.jsx)(d.Caption, {
              variant: "div",
              weight: b,
              type: "entity",
              size: "m",
              className: (0, a.W)(v().position, C, {
                [v().position_disliked]: p,
                [v().position_disabled]: A,
              }),
              children: m,
            }),
            h &&
              (0, r.jsx)(c.Icon, {
                variant: y,
                size: "xxs",
                "aria-label": f,
                className: (0, a.W)(v().progress, v()["progress_".concat(k)], {
                  [v().progress_disliked]: p,
                  [v().progress_disabled]: A,
                }),
                ...(0, o.BA)(o.FK.chart.CHART_PROGRESS_ICON),
              }),
          ],
        });
      });
    },
    72783: function (e, t, i) {
      "use strict";
      i.d(t, {
        rf: function () {
          return h.AlbumCard;
        },
        oK: function () {
          return y.AlbumContextMenu;
        },
        y2: function () {
          return r.y;
        },
        ug: function () {
          return C;
        },
        wk: function () {
          return P;
        },
        QY: function () {
          return V.HorizontalAlbumCard;
        },
        vK: function () {
          return N.UpcomingAlbumCard;
        },
        W9: function () {
          return g;
        },
        DR: function () {
          return n;
        },
        ym: function () {
          return o;
        },
        re: function () {
          return c;
        },
        cO: function () {
          return m;
        },
        wJ: function () {
          return v;
        },
        h0: function () {
          return b;
        },
        wq: function () {
          return _;
        },
      });
      var r = i(87473),
        a = i(64353);
      let n = (e) => {
        var t;
        if (!e)
          return {
            id: 0,
            title: "",
            availableForOptions: [],
            availableForPremiumUsers: !0,
            artists: [],
            volumes: [],
            ogImage: "",
            availablePartially: !1,
            trackCount: 0,
            recent: !1,
            veryImportant: !1,
            labels: [],
            metaType: "",
            availableForMobile: !0,
          };
        let i =
          (null === (t = e.artists) || void 0 === t
            ? void 0
            : t.map((e) => (0, a.zg)(e))) || [];
        return {
          id: e.id,
          title: e.title,
          type: e.type,
          coverUri: e.coverUri,
          year: e.year,
          version: e.version,
          availableForOptions: e.availableForOptions || [],
          availableForPremiumUsers: e.availableForPremiumUsers || !0,
          artists: i,
          volumes: [],
          ogImage: e.coverUri || "",
          availablePartially: !1,
          trackCount: e.trackCount || 0,
          recent: !1,
          veryImportant: !1,
          labels: [],
          metaType: "",
          availableForMobile: !0,
        };
      };
      var s = i(22874),
        l = i(73447);
      let o = (e) => {
        let t = e.artists.map((e) => (0, a.d)(e));
        return (0, s.pj)({ ...(0, l.N)(e), artists: t });
      };
      var u = i(89428);
      let c = (e, t) => (0, s.pj)({ ...o(e), chart: t && (0, u.W5)(t) });
      var d = i(13534);
      let m = (e) => {
          var t, i;
          let {
              album: r,
              artists: n,
              bookmateOptionRequired: l,
              chart: o,
              likesCount: u,
              trailer: c,
              releaseYear: m,
              releaseDate: v,
            } = e,
            { available: b, disclaimers: p } = (0, d.NuW)(r);
          return (0, s.pj)({
            id: r.id,
            title: r.title,
            coverUri: null === (t = r.cover) || void 0 === t ? void 0 : t.uri,
            type: r.albumType,
            disclaimers: p,
            artists:
              null == n ? void 0 : n.map((e) => (0, a.tR)({ artist: e })),
            averageColor:
              null === (i = r.cover) || void 0 === i ? void 0 : i.color,
            isAvailable: b,
            likesCount: u,
            bookmateOptionRequired: l,
            chart: o,
            trailer: (0, d.GFX)(c),
            listeningFinished: r.listeningFinished,
            year: m ? Number(m) : void 0,
            releaseDate: v,
          });
        },
        v = (e) => {
          let { album: t, artists: i, likesCount: r, chart: a } = e;
          return (0, s.pj)({
            ...m({ album: t, artists: i, likesCount: r }),
            chart: a && (0, u.W5)(a),
          });
        },
        b = (e) => {
          var t;
          let { album: i, artists: r, releaseDate: n, isPresave: l } = e,
            { disclaimers: o } = (0, d.NuW)(i);
          return (0, s.pj)({
            id: i.id,
            title: i.title,
            type: i.albumType,
            coverUri: null === (t = i.cover) || void 0 === t ? void 0 : t.uri,
            isPresave: l,
            releaseDate: n,
            disclaimers: o,
            artists:
              null == r ? void 0 : r.map((e) => (0, a.tR)({ artist: e })),
          });
        };
      var p = i(98730),
        A = i(65067);
      (0, A.cache)(async (e) => {
        (0, d.aBB)(e) || (0, p.notFound)();
        try {
          let {
            container: t,
            backendHostTld: i,
            locale: r,
            host: a,
            fullUrl: n,
            isRSC: s,
            requestUrl: l,
          } = await (0, d.rbP)();
          if (s)
            return {
              album: void 0,
              backendHostTld: i,
              locale: r,
              host: a,
              fullUrl: n,
              requestUrl: l,
            };
          let o = t.get(d.qV$),
            u = await o.getAlbumWithTracksIds({
              albumId: Number(e),
              resumeStream: !1,
            });
          return (
            "not-found" === u.error && (0, p.notFound)(),
            {
              album: u,
              backendHostTld: i,
              locale: r,
              host: a,
              fullUrl: n,
              requestUrl: l,
            }
          );
        } catch (e) {
          return {
            album: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      }),
        (0, A.cache)(async (e) => {
          try {
            let {
              container: t,
              backendHostTld: i,
              locale: r,
              host: a,
              fullUrl: n,
              isRSC: s,
              requestUrl: l,
            } = await (0, d.rbP)();
            if (s)
              return {
                album: void 0,
                backendHostTld: i,
                locale: r,
                host: a,
                fullUrl: n,
                requestUrl: l,
                isActive: !1,
              };
            let o = t.get(d.qV$),
              u = t.get(d.o40);
            if (!(await u.getPromoAlbumInfo({ albumId: Number(e) })).active)
              return {
                album: void 0,
                backendHostTld: i,
                locale: r,
                host: a,
                fullUrl: n,
                requestUrl: l,
                isActive: !1,
              };
            let c = await o.getAlbumWithTracksIds({
              albumId: Number(e),
              resumeStream: !1,
            });
            return (
              "not-found" === c.error && (0, p.notFound)(),
              {
                album: c,
                backendHostTld: i,
                locale: r,
                host: a,
                fullUrl: n,
                requestUrl: l,
                isActive: !0,
              }
            );
          } catch (e) {
            return {
              album: void 0,
              backendHostTld: "",
              locale: null,
              host: "",
              fullUrl: null,
              requestUrl: null,
              isActive: !1,
            };
          }
        });
      let _ = (e) => {
          var t;
          let i =
            null === (t = e.artists) || void 0 === t
              ? void 0
              : t.map((e) => (0, a.tR)({ artist: e }));
          return (0, s.pj)({ ...(0, l.hh)(e), artists: i });
        },
        C = l.KX.props({
          artists: s.V5.maybe(s.V5.array(a.Go)),
          chart: s.V5.maybe(u.BH),
        }).views((e) => ({
          get artistNames() {
            var t;
            return null === (t = e.artists) || void 0 === t
              ? void 0
              : t.map((e) => e.name).join(", ");
          },
          get artistName() {
            var i, r, a, n;
            if (
              null === (r = e.artists) || void 0 === r
                ? void 0
                : null === (i = r[0]) || void 0 === i
                  ? void 0
                  : i.various
            )
              return;
            return null === (n = e.artists) || void 0 === n
              ? void 0
              : null === (a = n[0]) || void 0 === a
                ? void 0
                : a.name;
          },
          get artistIds() {
            var s;
            return null === (s = e.artists) || void 0 === s
              ? void 0
              : s.map((e) => e.id);
          },
          get artistId() {
            var l, o;
            return null === (o = e.artists) || void 0 === o
              ? void 0
              : null === (l = o[0]) || void 0 === l
                ? void 0
                : l.id;
          },
        })),
        g = l.gI
          .props({ artists: s.V5.maybe(s.V5.array(a.Go)) })
          .views((e) => ({
            get artistNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
          }));
      var h = i(34094),
        y = i(68811),
        f = i(75441),
        k = i(97141);
      let x = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: r,
            title: a,
            description: n,
            albums: s,
            className: l,
            containerClassName: o,
            headerClassName: u,
            viewAllActionLink: c,
            headingRef: d,
            headingVariant: m,
            ...v
          } = e;
          return (0, f.jsx)(k.HY, {
            isShimmerVisible: i,
            isShimmerActive: r,
            className: l,
            headerClassName: u,
            containerClassName: o,
            ref: t,
            title: a,
            description: n,
            viewAllActionLink: c,
            headingRef: d,
            headingVariant: m,
            ...v,
            children:
              null == s
                ? void 0
                : s.map((e) =>
                    (0, f.jsx)(
                      h.AlbumCard,
                      {
                        album: e,
                        contentLinesCount: 3,
                        withAddition: !e.isNonMusic,
                        withLikesCount: e.isNonMusic,
                      },
                      e.id,
                    ),
                  ),
          });
        },
        P = (0, A.forwardRef)((e, t) => (0, f.jsx)(x, { forwardRef: t, ...e }));
      var V = i(66032),
        N = i(29981);
    },
    87473: function (e, t, i) {
      "use strict";
      var r, a;
      i.d(t, {
        y: function () {
          return r;
        },
      }),
        ((a = r || (r = {})).PAGE = "PAGE"),
        (a.CARD = "CARD");
    },
    34094: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          AlbumCard: function () {
            return L;
          },
        });
      var r = i(75441),
        a = i(32358),
        n = i(62569),
        s = i(65067),
        l = i(9317),
        o = i(4875),
        u = i(35846),
        c = i(84638),
        d = i(44679),
        m = i(93093),
        v = i(14218),
        b = i(18333),
        p = i(69756),
        A = i(59091),
        _ = i(17392),
        C = i(73447),
        g = i(64353),
        h = i(89428),
        y = i(13534),
        f = i(97141),
        k = i(87473);
      let x = { mainAxis: -26, alignmentAxis: -16 },
        P = {
          isEnabled: !0,
          width: 20,
          height: 8,
          tipRadius: 2,
          fill: "var(--ym-background-color-primary-enabled-tooltip)",
        };
      var V = i(68811),
        N = i(67070),
        j = i.n(N);
      let L = (0, n.Pi)((e) => {
        let {
            className: t,
            children: i,
            album: n,
            contentLinesCount: N,
            withLikesCount: L,
            withChart: B,
            withAddition: O = !0,
            withArtistName: U = !0,
          } = e,
          { ref: R, intersectionPropertyId: I } = (0, y.VfV)(),
          {
            user: T,
            trailer: w,
            settings: { isMobile: M },
            experiments: D,
          } = (0, y.oR4)(),
          { from: S, utmLink: W } = (0, y.MhG)({
            contextId: n.id,
            contextType: c.A.Album,
            utmForPageIds: n.artistIds,
          }),
          { formatMessage: E, formatDate: F } = (0, l.Z)(),
          {
            sendLikeSearchFeedback: z,
            sendNavigateSearchFeedback: K,
            sendPlaySearchFeedback: G,
          } = (0, y.sAF)(),
          [Z, q] = (0, s.useState)(!1),
          [$, Y] = (0, s.useState)(!1),
          [H, Q] = (0, s.useState)(!1),
          X = (0, y.zxW)(),
          J = (0, y.lAI)(),
          ee = (0, C.SB)(n),
          et = (0, C.BV)(n),
          ei = (0, y.s0h)(n.url),
          er = (0, y.s0h)(n.url, !0),
          [ea, en] = (0, s.useState)(!1),
          es = (0, y.FTC)(),
          [el, eo] = (0, s.useState)(!1),
          eu = (0, y.qsr)(),
          ec =
            n.isAvailableOnlyForPlus && !n.isUnsafeLegal && !n.isLegalRejected,
          ed = D.checkExperiment(y.peG.WebNextBookmatePlusPaywall, "on"),
          em = ec && !M && ed,
          ev = D.checkExperiment(
            y.peG.WebNextShowAudiobookCoverForFreemium,
            "on",
          ),
          eb = n.isAvailable || em || (ev && n.isAudiobook),
          ep = (0, m.W)((e) => {
            if ((e.stopPropagation(), eu())) {
              e.preventDefault();
              return;
            }
            w.openAlbumTrailer(n.id), es(o.OB.Album, String(n.id));
          }),
          eA =
            n.type === d.V.SINGLE ? E({ id: "entity-names.single" }) : void 0,
          e_ = n.releaseDate ? F(n.releaseDate, (0, y.YTW)()) : void 0,
          eC = (0, y.tNA)([null != e_ ? e_ : n.year, eA]),
          eg = (0, C.H0)(n.type),
          eh = (0, s.useMemo)(() => {
            var e;
            let t = n.isLiked ? E({ id: "entity-names.has-your-like" }) : "";
            return ""
              .concat(eg, " ")
              .concat(n.title, " ")
              .concat(null !== (e = n.version) && void 0 !== e ? e : "", " ")
              .concat(t);
          }, [eg, E, n.title, n.isLiked, n.version]),
          { isPlaying: ey, togglePlay: ef } = (0, y.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Album,
                meta: { id: n.id },
                from: S,
                utmLink: W,
              },
              loadContextMeta: !0,
            },
          }),
          ek = (0, C.jV)({ album: n, callback: ei }),
          ex = (0, C.jV)({ album: n, callback: er }),
          eP = (0, C.jV)({ album: n, callback: ef }),
          eV = (0, g.ik)(ex, ek),
          eN = (0, m.W)((e) => {
            X({ to: o.qU.AlbumScreen }), null == K || K(), eV(e);
          }),
          ej = (0, m.W)((e) => {
            eN(e);
          }),
          eL = (0, m.W)(() => {
            eu() || ($ || ey || (Y(!0), null == G || G()), eP(), J(!ey));
          }),
          eB = (0, m.W)(() => {
            Z || n.isLiked || (q(!0), null == z || z()), ee();
          }),
          eO = (0, m.W)((e) => {
            Q(e), en(e);
          }),
          eU = (0, s.useMemo)(() => {
            var e;
            return (0, r.jsxs)(_.Caption, {
              className: (0, a.W)(j().title, {
                [j().title_withVersion]: n.version,
                [j().title_withChart]: B,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              ...(0, u.BA)(u.bG.album.ALBUM_TITLE),
              children: [
                (0, r.jsx)(f.rU, {
                  "aria-label": ""
                    .concat(n.title, " ")
                    .concat(null !== (e = n.version) && void 0 !== e ? e : ""),
                  className: j().titleLink,
                  href: n.url,
                  onClick: eN,
                  ...(0, u.BA)(u.bG.album.ALBUM_TITLE_LINK),
                  children: n.title,
                }),
                n.version &&
                  (0, r.jsx)(_.Caption, {
                    className: j().version,
                    variant: "span",
                    ...(0, u.BA)(u.bG.album.ALBUM_VERSION),
                    children: " ".concat(n.version),
                  }),
              ],
            });
          }, [n.title, n.url, n.version, eN, B]),
          eR = (0, s.useMemo)(() => {
            var e;
            return (0, r.jsx)(f.rU, {
              href: n.url,
              onClick: eN,
              children: ""
                .concat(n.title, " ")
                .concat(null !== (e = n.version) && void 0 !== e ? e : ""),
            });
          }, [n.title, n.url, n.version, eN]),
          eI = (0, s.useMemo)(() => {
            var e;
            if (
              null == n
                ? void 0
                : null === (e = n.trailer) || void 0 === e
                  ? void 0
                  : e.isAvailable
            )
              return (0, r.jsx)(
                f.xf,
                {
                  children: (0, r.jsx)(
                    f.eP,
                    {
                      className: (0, a.W)(j().trailerButton, j().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: ep,
                    },
                    n.getKey("TrailerButton"),
                  ),
                },
                n.getKey("AlbumCardTrailerTooltip"),
              );
          }, [n, ep]),
          eT = (0, s.useMemo)(
            () =>
              (0, r.jsx)(
                V.AlbumContextMenu,
                {
                  album: n,
                  onOpenChange: eO,
                  open: H,
                  className: (0, a.W)(j().menuButton, j().control),
                  icon: (0, r.jsx)(p.Icon, { size: "xxs", variant: "more" }),
                  size: "s",
                  variant: k.y.CARD,
                  ...(0, u.BA)(u.bG.album.ALBUM_CONTEXT_MENU_BUTTON),
                },
                n.getKey("AlbumContextMenu"),
              ),
            [n, eO, H],
          ),
          ew = (0, s.useCallback)(
            () =>
              (0, r.jsx)(
                f.JM,
                {
                  className: (0, a.W)(j().playButton, j().control),
                  buttonVariant: "default",
                  withHover: !1,
                  iconSize: "xl",
                  variant: "filled",
                  onClick: eL,
                  isPlaying: ey,
                  disabled: em,
                },
                n.getKey("PlayButton"),
              ),
            [em, n, ey, eL],
          ),
          eM = (0, s.useMemo)(
            () =>
              em
                ? (0, r.jsx)(f.pl, {
                    className: j().buyPlusPopover,
                    buttonText: E({ id: "interface-actions.more-details" }),
                    isNested: !0,
                    placement: "top-start",
                    isOpened: el,
                    onOpenChange: eo,
                    textVariant: "album",
                    albumTextVariant: n.type,
                    arrowProps: P,
                    offsetOptions: x,
                    renderChildren: ew,
                  })
                : ew(),
            [em, el, eo, E, ew, n.type],
          ),
          eD = (0, v.V)(() => {
            if (!em)
              return (0, r.jsx)(
                f.dJ,
                {
                  className: (0, a.W)(j().likeButton, j().control),
                  isLiked: n.isLiked,
                  onClick: eB,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                  disabled: !T.isAuthorized,
                },
                n.getKey("LikeButton"),
              );
          }),
          eS = (0, s.useMemo)(() => {
            if (!em)
              return (0, r.jsx)(
                f.RT,
                {
                  onClick: et,
                  isPinned: n.isPinned,
                  className: (0, a.W)(j().pinButton, j().control),
                  withRipple: !1,
                  isDisabled: em,
                },
                n.getKey("PinButton"),
              );
          }, [n, em, et]),
          eW = (0, s.useMemo)(() => {
            if (n.isAvailable || em)
              return (0, r.jsx)(b.kk, {
                isVisible: H || ea || el,
                className: j().controls,
                playControl: eM,
                likeControl: eD,
                menuControl: eT,
                pinControl: eS,
                trailerControl: eI,
              });
          }, [n, H, ea, eT, eI, el, eM, eD, eS, em]),
          eE = (0, s.useMemo)(
            () =>
              (0, r.jsx)(A.Paper, {
                className: j().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.album.ALBUM_CARD),
                children: (0, r.jsxs)("div", {
                  className: j().coverBlock,
                  onClick: ej,
                  children: [
                    (0, r.jsx)(f.BE, {
                      className: j().image,
                      src: n.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: eh,
                      withAvatarReplace: !0,
                      isAvailable: eb,
                      "aria-hidden": !0,
                    }),
                    ec &&
                      (0, r.jsx)(p.Icon, {
                        variant: "plusBadge",
                        className: j().plusBadge,
                      }),
                    eW,
                  ],
                }),
              }),
            [ej, n.coverUri, eb, eh, eW, ec],
          );
        return (0, r.jsxs)(b.m7, {
          ref: R,
          className: (0, a.W)(j().root, { [j().root_withChart]: B }, t),
          "aria-label": eh,
          explicitMarkComponent:
            n.explicitDisclaimer &&
            (0, r.jsx)(
              f.$i,
              {
                className: j().explicitMark,
                getDescriptionTexts: n.getDescriptionTexts,
                variant: n.explicitDisclaimer,
              },
              n.getKey("AlbumCardExplicitMarkIcon"),
            ),
          title: eU,
          srTitle: eR,
          "data-intersection-property-id": I,
          contentLinesCount: N,
          view: eE,
          description:
            U &&
            (0, r.jsx)(
              g.jO,
              {
                className: j().artists,
                artists: n.artists,
                lineClamp: 1,
                linkClassName: j().artistLink,
                captionSize: "s",
              },
              n.getKey("description"),
            ),
          chart:
            B &&
            n.chart &&
            (0, r.jsx)(
              h.kL,
              {
                withIcon: !0,
                className: j().chart,
                position: n.chart.position,
                progress: n.chart.progress,
              },
              n.getKey("chart"),
            ),
          ...(0, u.BA)(u.bG.album.ALBUM_ITEM),
          children: [
            O &&
              eC &&
              (0, r.jsx)(_.Caption, {
                className: j().addition,
                variant: "div",
                type: "entity",
                size: "s",
                weight: "medium",
                lineClamp: 1,
                children: eC,
              }),
            L &&
              !!n.actualLikesCount &&
              (0, r.jsx)(f.DB, {
                className: j().likeTextButton,
                ariaLabel: E(
                  { id: "entity-names.likes-counter" },
                  { counter: n.actualLikesCount },
                ),
                likesCount: n.actualLikesCount,
                isLiked: n.isLiked,
                handleLikeClick: ee,
              }),
            i,
          ],
        });
      });
    },
    68811: function (e, t, i) {
      "use strict";
      i.d(t, {
        AlbumContextMenu: function () {
          return _;
        },
      });
      var r = i(75441),
        a = i(62569),
        n = i(65067),
        s = i(9317),
        l = i(4875),
        o = i(35846),
        u = i(84638),
        c = i(93093),
        d = i(27376),
        m = i(73447),
        v = i(50705),
        b = i(13534),
        p = i(97141),
        A = i(87473);
      let _ = (0, a.Pi)((e) => {
        var t, i;
        let {
            album: a,
            onOpenChange: _,
            open: C,
            wrapperClassName: g,
            variant: h,
            ...y
          } = e,
          { shouldShowBuySubscriptionModal: f, showBuySubscriptionModal: k } =
            (0, b.vLf)(),
          {
            settings: { isMobile: x },
            trailer: P,
            user: V,
            experiments: N,
          } = (0, b.oR4)(),
          j = (0, m.SB)(a),
          L = (0, m.BV)(a),
          B = (0, b.FTC)(),
          O = "".concat(b.aUg.ALBUM, "-").concat(a.id),
          U = (0, b.RVp)() && a.isNonMusic,
          R = U && h === A.y.PAGE,
          I = N.checkExperiment(b.peG.WebEditorsFeatures, "on"),
          { formatMessage: T } = (0, s.Z)(),
          w = (0, b.qsr)(),
          M = (0, m.ap)(),
          { href: D } = (0, b.qKB)(a.url),
          S = (0, v.q3)({
            entityVariant: b.gus.ALBUM,
            urlParams: { id: a.id },
          }),
          { isPlaying: W, togglePlay: E } = (0, b.QhE)({
            seeds:
              null !== (i = null == a ? void 0 : a.seeds) && void 0 !== i
                ? i
                : [],
            pageIdForFrom: b.Rhz.RADIO,
            blockIdForFrom: O,
          }),
          { utmLink: F } = (0, b.MhG)({
            blockId: b.aUg.ALBUM,
            contextType: u.A.Album,
            contextId: null == a ? void 0 : a.id,
          }),
          z = (0, c.W)(() => {
            if (f && V.isAuthorized) {
              k();
              return;
            }
            !w() && (W || E());
          }),
          K = (0, c.W)(() => {
            if (f) {
              k();
              return;
            }
            w() ||
              (P.setUtmLink(F),
              P.openAlbumTrailer(a.id),
              B(l.OB.Album, String(a.id)));
          });
        (0, b.ZP4)(C);
        let G = (0, n.useMemo)(() => {
            if (!x)
              return (0, r.jsx)(p.Zd, {
                onClick: L,
                isPinned: a.isPinned,
                disabled: !a.isAvailable,
              });
          }, [a.isAvailable, a.isPinned, L, x]),
          Z = (0, n.useMemo)(
            () =>
              U
                ? (0, r.jsx)(p.qq, {
                    onClick: j,
                    isLiked: null == a ? void 0 : a.isLiked,
                    albumType: a.type,
                  })
                : (0, r.jsx)(p.xZ, {
                    onClick: j,
                    isLiked: null == a ? void 0 : a.isLiked,
                  }),
            [null == a ? void 0 : a.isLiked, a.type, j, U],
          ),
          q = (0, n.useMemo)(() => {
            var e;
            if (
              !U &&
              (null === (e = a.trailer) || void 0 === e
                ? void 0
                : e.isAvailable)
            )
              return (0, r.jsx)(p.NB, { onClick: K, disabled: !a.isAvailable });
          }, [
            a.isAvailable,
            null === (t = a.trailer) || void 0 === t ? void 0 : t.isAvailable,
            K,
            U,
          ]),
          $ = (0, n.useMemo)(() => {
            if (!U)
              return (0, r.jsx)(p.GQ, {
                onClick: z,
                disabled: !a.isAvailable,
                variant: b.xIL.ALBUM,
                onOpenMenuChange: _,
              });
          }, [a.isAvailable, z, U, _]),
          Y = {
            variant: b.GGO.ALBUM,
            id: a.id,
            title: a.title,
            path: a.url,
            albumArtistName: a.artistName,
            albumArtistId: a.artistId,
          };
        return (0, r.jsxs)(d.v2, {
          isMobile: x,
          offsetOptions: 10,
          open: C,
          onOpenChange: _,
          ariaLabel: T({ id: "interface-actions.context-menu" }),
          wrapperClassName: g,
          containerProps: (0, o.BA)(o.bG.album.ALBUM_CONTEXT_MENU),
          ...y,
          children: [
            x &&
              (0, r.jsx)(p.TF, {
                getDescriptionTexts: a.getDescriptionTexts,
                entityId: a.id,
              }),
            I && (0, r.jsx)(v.ZY, { entityVariant: b.gus.ARTIST, adminUrl: S }),
            G,
            Z,
            q,
            $,
            R &&
              (0, r.jsx)(p.RY, { onClick: M, isFinished: a.listeningFinished }),
            (0, r.jsx)(p.zq, { shareLink: D, entityMeta: Y }),
          ],
        });
      });
    },
    66032: function (e, t, i) {
      "use strict";
      i.d(t, {
        HorizontalAlbumCard: function () {
          return f;
        },
      });
      var r = i(75441),
        a = i(32358),
        n = i(62569),
        s = i(65067),
        l = i(4875),
        o = i(35846),
        u = i(84638),
        c = i(93093),
        d = i(14218),
        m = i(91307),
        v = i(17392),
        b = i(73447),
        p = i(64353),
        A = i(13534),
        _ = i(97141),
        C = i(69756),
        g = i(48014),
        h = i.n(g);
      let y = (0, n.Pi)((e) => {
          var t;
          let { className: i, album: n, likeIconSize: o = "xxs" } = e,
            { user: u, trailer: d } = (0, A.oR4)(),
            m = (0, A.qsr)(),
            { sendLikeSearchFeedback: v } = (0, A.sAF)(),
            p = (0, b.SB)(n),
            [g, y] = (0, s.useState)(!1),
            f = (0, c.W)(async () => {
              g || n.isLiked || (y(!0), null == v || v()), await p();
            }),
            k = (0, A.FTC)(),
            x = (0, c.W)((e) => {
              if ((e.stopPropagation(), m())) {
                e.preventDefault();
                return;
              }
              d.openAlbumTrailer(n.id), k(l.OB.Album, String(n.id));
            });
          return (0, r.jsxs)("div", {
            className: (0, a.W)(h().root, h().controls, i, {
              [h().controls_disabled]: !n.isAvailable,
            }),
            children: [
              n.isAvailable &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(_.FM, {
                      fallback: (0, r.jsx)(_.dJ, {
                        size: "xs",
                        iconSize: o,
                        className: (0, a.W)(h().item, h().likeIcon),
                        isLiked: n.isLiked,
                        onClick: f,
                        disabled: !u.isAuthorized,
                      }),
                    }),
                    (null === (t = n.trailer) || void 0 === t
                      ? void 0
                      : t.isAvailable) &&
                      (0, r.jsx)(_.FM, {
                        fallback: (0, r.jsx)(_.eP, {
                          className: (0, a.W)(h().item, h().trailerIcon),
                          iconSize: "xs",
                          variant: "text",
                          onClick: x,
                          withRipple: !1,
                        }),
                      }),
                  ],
                }),
              (0, r.jsx)("div", {
                className: (0, a.W)(h().item, h().dislikeSpacer),
              }),
              (0, r.jsx)("div", {
                className: (0, a.W)(h().item, h().item_buttonArrow),
                children: (0, r.jsx)(C.Icon, {
                  className: _.$C.buttonArrow,
                  variant: "arrowRight",
                  size: "xs",
                }),
              }),
            ],
          });
        }),
        f = (0, n.Pi)((e) => {
          let {
              className: t,
              album: i,
              pageId: n,
              coverClassName: C,
              playButtonIconSize: g,
              likeIconSize: h,
              shouldShowReleaseYear: f,
              description: k,
            } = e,
            x = (0, b.H0)(i.type),
            { ref: P, intersectionPropertyId: V } = (0, A.VfV)(),
            { from: N } = (0, A.MhG)({ pageId: n }),
            [j, L] = (0, s.useState)(!1),
            B = (0, A.lAI)(),
            O = (0, A.s0h)(i.url),
            U = (0, A.s0h)(i.url, !0),
            R = (0, A.qsr)(),
            { sendNavigateSearchFeedback: I, sendPlaySearchFeedback: T } = (0,
            A.sAF)(),
            w = (0, A.zxW)(),
            {
              isPlaying: M,
              isCurrent: D,
              togglePlay: S,
            } = (0, A.qmq)({
              playContextParams: {
                contextData: { type: u.A.Album, meta: { id: i.id }, from: N },
                loadContextMeta: !0,
              },
            }),
            W = (0, b.jV)({ album: i, callback: O }),
            E = (0, b.jV)({ album: i, callback: U }),
            F = (0, b.jV)({ album: i, callback: S }),
            z = (0, p.ik)(E, W),
            K = (0, c.W)((e) => {
              null == I || I(), w({ to: l.qU.AlbumScreen }), z(e);
            }),
            G = (0, c.W)(() => {
              R() || (j || M || (L(!0), null == T || T()), F(), B(!M));
            }),
            Z = (0, c.W)((e) => {
              (0, m.m)(e, _.$C.ripple), K(e);
            }),
            q = (0, c.W)((e) => {
              e.stopPropagation(), K(e);
            }),
            $ = (0, s.useCallback)(
              (e) =>
                (0, r.jsx)(_.Df, {
                  isAvailable: i.isAvailable,
                  isDisliked: !1,
                  coverUri: i.coverUri,
                  title: i.title,
                  className: (0, a.W)(_.$C.playButtonCell, C),
                  alt: "".concat(x, " ").concat(i.title),
                  ...e,
                }),
              [i.coverUri, i.isAvailable, i.title, C, x],
            ),
            Y =
              null == $
                ? void 0
                : $({
                    onPlayButtonClick: G,
                    isPlaying: M,
                    isCurrent: D,
                    playButtonIconSize: g,
                  }),
            H = (0, s.useMemo)(
              () =>
                i.url && i.isAvailable
                  ? (0, r.jsx)(_.rU, {
                      className: (0, a.W)(_.$C.text, _.$C.titleLink),
                      href: i.url,
                      onClick: q,
                      children: i.title,
                    })
                  : (0, r.jsx)(v.Caption, {
                      className: (0, a.W)(_.$C.text, _.$C.titleText),
                      size: "m",
                      variant: "div",
                      type: "text",
                      children: i.title,
                    }),
              [i.isAvailable, i.title, i.url, q],
            ),
            Q = (0, s.useCallback)(
              (e, t) => {
                var a;
                return (
                  null === (a = i.artists) || void 0 === a ? void 0 : a.length
                )
                  ? (0, r.jsx)(p.jO, {
                      linkClassName: e,
                      captionClassName: t,
                      artists: i.artists,
                      lineClamp: 1,
                      withLink: i.isAvailable,
                    })
                  : null;
              },
              [i.artists, i.isAvailable],
            ),
            X = (0, d.V)(() =>
              [i.artistNames, i.title, i.version].filter(Boolean).join(" "),
            );
          return (0, r.jsxs)(_.Md, {
            ref: P,
            "data-intersection-property-id": V,
            className: (0, a.W)(
              _.$C.root,
              { [_.$C.root_disabled]: !i.isAvailable },
              t,
            ),
            "aria-label": X,
            onClick: Z,
            ...(0, o.BA)(o.bG.album.HORIZONTAL_ALBUM_CARD),
            children: [
              Y,
              (0, r.jsx)(_.u, {
                isDisabled: !i.isAvailable,
                version: i.version,
                title: H,
                artistsComponent: Q,
                getDescriptionTexts: i.getDescriptionTexts,
                explicitMarkVariant: i.explicitDisclaimer,
                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                isLiked: i.isNonMusic ? i.isLiked : void 0,
                releaseYear: i.isNonMusic && f ? i.year : void 0,
                description: k,
              }),
              (0, r.jsx)(y, {
                className: _.$C.controlsBar,
                album: i,
                likeIconSize: h,
              }),
            ],
          });
        });
    },
    29981: function (e, t, i) {
      "use strict";
      i.d(t, {
        UpcomingAlbumCard: function () {
          return y;
        },
      });
      var r = i(75441),
        a = i(32358),
        n = i(62569),
        s = i(65067),
        l = i(9317),
        o = i(15937),
        u = i(14218),
        c = i(68208),
        d = i(18333),
        m = i(69756),
        v = i(59091),
        b = i(17392),
        p = i(73447),
        A = i(64353),
        _ = i(13534),
        C = i(97141),
        g = i(13698),
        h = i.n(g);
      let y = (0, n.Pi)((e) => {
        let {
            className: t,
            children: i,
            upcomingAlbum: n,
            contentLinesCount: g,
          } = e,
          { user: y } = (0, _.oR4)(),
          { ref: f, intersectionPropertyId: k } = (0, _.VfV)(),
          { formatMessage: x, formatDate: P } = (0, l.Z)(),
          V = (0, p.IK)(n),
          N = n.getKey("PlayButton"),
          j = n.getKey("LikeButton"),
          L = (0, s.useMemo)(() => {
            let e = x(
                { id: "entity-names.upcoming-album-name" },
                { upcomingAlbumName: n.title },
              ),
              t = n.isPresave ? x({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [x, n.title, n.isPresave]),
          B = (0, u.V)(() =>
            (0, r.jsxs)(v.Paper, {
              className: h().cover,
              radius: "s",
              withShadow: !0,
              children: [
                (0, r.jsx)(C.BE, {
                  className: h().image,
                  src: n.coverUri,
                  size: 200,
                  fit: "cover",
                  alt: L,
                  withAvatarReplace: !0,
                }),
                (0, r.jsx)(d.kk, {
                  className: h().controls,
                  playControl: (0, r.jsx)(
                    c.Button,
                    {
                      className: h().lockButton,
                      disabled: !0,
                      radius: "xxxl",
                      variant: "default",
                      size: "s",
                      icon: (0, r.jsx)(m.Icon, {
                        variant: "lock",
                        size: "xxs",
                        className: h().lockIcon,
                      }),
                      "aria-label": x({
                        id: "entity-names.upcoming-album-play-disabled",
                      }),
                    },
                    N,
                  ),
                  likeControl: (0, r.jsx)(
                    C.dJ,
                    {
                      className: (0, a.W)(h().control, h().presaveButton),
                      isLiked: n.isPresave,
                      onClick: V,
                      variant: "default",
                      size: "s",
                      iconSize: "xxs",
                      disabled: !y.isAuthorized,
                    },
                    j,
                  ),
                }),
              ],
            }),
          );
        return (0, r.jsxs)(d.m7, {
          ref: f,
          className: (0, a.W)(h().root, t),
          "aria-label": L,
          explicitMarkComponent:
            n.explicitDisclaimer &&
            (0, r.jsx)(C.$i, {
              getDescriptionTexts: n.getDescriptionTexts,
              variant: n.explicitDisclaimer,
            }),
          title: (0, r.jsx)(b.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: n.title,
          }),
          "data-intersection-property-id": k,
          contentLinesCount: g,
          view: B,
          description: (0, r.jsx)(A.jO, {
            className: h().artists,
            artists: n.artists,
            lineClamp: 1,
            linkClassName: h().artistLink,
            captionSize: "s",
          }),
          children: [
            (0, r.jsx)(b.Caption, {
              className: h().releaseDate,
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 1,
              children: (0, r.jsx)(o.Z, {
                id: "entity-names.upcoming-album-date",
                values: { releaseDate: P(n.releaseDate, (0, _.YTW)()) },
              }),
            }),
            i,
          ],
        });
      });
    },
    88125: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "Chart_root__ODed_",
        position: "Chart_position__7UNY9",
        position_disliked: "Chart_position_disliked__HzjC7",
        position_disabled: "Chart_position_disabled__poZzD",
        progress: "Chart_progress__sGj4s",
        progress_up: "Chart_progress_up__y083c",
        progress_same: "Chart_progress_same__Cnbdb",
        progress_down: "Chart_progress_down__lv_ae",
        progress_crown: "Chart_progress_crown__o__Zm",
        progress_new: "Chart_progress_new__7DobI",
        progress_disliked: "Chart_progress_disliked__maVAk",
        progress_disabled: "Chart_progress_disabled__JoFqG",
      };
    },
    67070: function (e) {
      e.exports = {
        root: "AlbumCard_root__vP6k4",
        root_withChart: "AlbumCard_root_withChart__J2SZv",
        artists: "AlbumCard_artists__phKco",
        likeTextButton: "AlbumCard_likeTextButton__2AQd9",
        controls: "AlbumCard_controls__yuO40",
        cover: "AlbumCard_cover__zXmdl",
        coverBlock: "AlbumCard_coverBlock__94ZzY",
        image: "AlbumCard_image__Mm55s",
        titleLink: "AlbumCard_titleLink__u_WLG",
        title: "AlbumCard_title__8YvhT",
        title_withVersion: "AlbumCard_title_withVersion__NClAp",
        title_withChart: "AlbumCard_title_withChart__PVOiJ",
        chart: "AlbumCard_chart__gASdj",
        version: "AlbumCard_version__h2aJz",
        artistLink: "AlbumCard_artistLink__uPR_2",
        playButton: "AlbumCard_playButton__mYK9R",
        likeButton: "AlbumCard_likeButton__9B9C0",
        menuButton: "AlbumCard_menuButton__pxkA6",
        pinButton: "AlbumCard_pinButton__Mdi_E",
        trailerButton: "AlbumCard_trailerButton__typHh",
        control: "AlbumCard_control__qx7Xh",
        plusBadge: "AlbumCard_plusBadge__i0FkP",
        buyPlusPopover: "AlbumCard_buyPlusPopover__Kb79C",
      };
    },
    48014: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__hZQ_Z",
        item: "ControlsBar_item__Y7iTC",
        item_buttonArrow: "ControlsBar_item_buttonArrow__y_Ku0",
        dislikeSpacer: "ControlsBar_dislikeSpacer__D9uFk",
        controls: "ControlsBar_controls__yRO8t",
        trailerIcon: "ControlsBar_trailerIcon__areYT",
        controls_disabled: "ControlsBar_controls_disabled___S7Rg",
        likeIcon: "ControlsBar_likeIcon__eJvkI",
      };
    },
    13698: function (e) {
      e.exports = {
        root: "UpcomingAlbumCard_root__lSZ5l",
        controls: "UpcomingAlbumCard_controls__fQ50f",
        cover: "UpcomingAlbumCard_cover__qvU1m",
        image: "UpcomingAlbumCard_image__WKtGR",
        releaseDate: "UpcomingAlbumCard_releaseDate__EvDzB",
        artists: "UpcomingAlbumCard_artists__Jp1OE",
        artistLink: "UpcomingAlbumCard_artistLink__RSqXw",
        control: "UpcomingAlbumCard_control__pSMdI",
        presaveButton: "UpcomingAlbumCard_presaveButton__ixwy_",
        lockButton: "UpcomingAlbumCard_lockButton__9_qyp",
        lockIcon: "UpcomingAlbumCard_lockIcon__wtvkP",
      };
    },
    66610: function (e, t, i) {
      "use strict";
      var r, a;
      i.d(t, {
        Z: function () {
          return r;
        },
      }),
        ((a = r || (r = {})).OK = "ok"),
        (a.ERROR = "error");
    },
    63435: function (e, t, i) {
      "use strict";
      var r, a;
      i.d(t, {
        h: function () {
          return r;
        },
      }),
        ((a = r || (r = {})).UP = "up"),
        (a.DOWN = "down"),
        (a.SAME = "same"),
        (a.NEW = "new");
    },
    15357: function (e, t, i) {
      "use strict";
      var r, a;
      i.d(t, {
        Y: function () {
          return r;
        },
      }),
        ((a = r || (r = {})).KIDS = "kids"),
        (a.BOOKMATE = "bookmate");
    },
  },
]);
