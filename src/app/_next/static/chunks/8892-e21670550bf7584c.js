(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8892],
  {
    98342: function (e, t, i) {
      "use strict";
      i.d(t, {
        m: function () {
          return r;
        },
      });
      var a = {};
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createRipple = void 0),
        (a.createRipple = function (e, t, i) {
          let a = null != i ? i : e.currentTarget,
            r = document.createElement("span"),
            n = Math.max(a.clientWidth, a.clientHeight),
            l = n / 2,
            s = a.getBoundingClientRect(),
            o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
            c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
          (r.style.width = "".concat(n, "px")),
            (r.style.height = "".concat(n, "px")),
            (r.style.left = 0 === e.clientX ? "0px" : "".concat(o - l, "px")),
            (r.style.top = "".concat(c - l, "px")),
            r.classList.add(t);
          let d = a.getElementsByClassName(t)[0];
          d && d.remove(), a.insertBefore(r, a.firstChild);
        }),
        a.__esModule;
      var r = a.createRipple;
    },
    20121: function (e, t, i) {
      "use strict";
      i.d(t, {
        em: function () {
          return T;
        },
        F8: function () {
          return A;
        },
        nU: function () {
          return u;
        },
        $H: function () {
          return l;
        },
      });
      var a = i(98639),
        r = i(3429),
        n = i(63394);
      let l = (e) => {
        let {
            entityType: t,
            isLegalRejected: i,
            isUnsafeLegal: l,
            entityId: s,
            callback: o,
          } = e,
          {
            disclaimer: c,
            modals: { disclaimerModal: d },
          } = (0, n.oR)(),
          u = (0, a.useRef)(String((0, r.Z)())),
          m = (0, a.useRef)(!1),
          _ = (0, n.uK)().get(n.ce);
        return (
          (0, a.useEffect)(() => {
            c.isUnsafeDisclaimerConfirmed &&
              c.id === u.current &&
              !m.current &&
              (null == o || o(), (m.current = !0));
          }, [o, c.isUnsafeDisclaimerConfirmed, c.id]),
          (0, a.useCallback)(
            async (e) => {
              if (s && (i || l)) {
                let i = _.get(n.BU.ExEx);
                if (
                  l &&
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
                l && c.setType(n.Gq.UNSAFE),
                  c.setId(u.current),
                  c.setEntityId(s),
                  c.setEntityType(t),
                  (m.current = !1),
                  d.open();
                return;
              }
              null == o || o();
            },
            [o, c, d, s, t, i, l, _],
          )
        );
      };
      var s = i(42288);
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
          .actions((e) => ({
            getArtistDisclaimer: (0, s.ls)(function* (t) {
              let { artistId: i } = t,
                { artistsResource: a, modelActionsLogger: r } = (0, s.dU)(e);
              if (e.loadingState !== n.Gu.PENDING)
                try {
                  e.loadingState = n.Gu.PENDING;
                  let t = yield a.getDisclaimer({ artistId: i });
                  t.modal && (e.data = o(t.modal)),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.REJECT);
                }
            }),
            getAlbumDisclaimer: (0, s.ls)(function* (t) {
              let { albumId: i } = t,
                { albumResource: a, modelActionsLogger: r } = (0, s.dU)(e);
              if (e.loadingState !== n.Gu.PENDING)
                try {
                  e.loadingState = n.Gu.PENDING;
                  let t = yield a.getDisclaimer({ albumId: i });
                  t.modal && (e.data = o(t.modal)),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.REJECT);
                }
            }),
            getTrackDisclaimer: (0, s.ls)(function* (t) {
              let { trackId: i } = t,
                { tracksResource: a, modelActionsLogger: r } = (0, s.dU)(e);
              if (e.loadingState !== n.Gu.PENDING)
                try {
                  e.loadingState = n.Gu.PENDING;
                  let t = yield a.getDisclaimer({ trackId: i });
                  t.modal && (e.data = o(t.modal)),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
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
          }));
      var m = i(9753),
        _ = i(60836),
        k = i(9544),
        v = i(31014),
        p = i(23881),
        C = i(39513),
        x = i(90679),
        f = i(2570),
        y = i(67868),
        b = i(62452),
        h = i.n(b);
      let g = {
          [n.co.ALBUM]: (0, m.jsx)(v.Z, {
            id: "extra-explicit.confirm-unsafe-album",
          }),
          [n.co.PODCAST]: (0, m.jsx)(v.Z, {
            id: "extra-explicit.confirm-unsafe-podcast",
          }),
          [n.co.ARTIST]: (0, m.jsx)(v.Z, {
            id: "extra-explicit.confirm-unsafe-artist",
          }),
          [n.co.TRACK]: (0, m.jsx)(v.Z, {
            id: "extra-explicit.confirm-unsafe-track",
          }),
        },
        T = (0, k.Pi)((e) => {
          var t, i, r, l;
          let { disclaimer: s, onClose: o, className: c } = e,
            { data: d, isLoading: u } = null != s ? s : {},
            { href: k } = (0, n.zB)(
              null !==
                (l =
                  null == s
                    ? void 0
                    : null === (i = s.data) || void 0 === i
                      ? void 0
                      : null === (t = i.details) || void 0 === t
                        ? void 0
                        : t.url) && void 0 !== l
                ? l
                : "",
            ),
            b = (0, n.k6)(),
            T = (0, n.s0)("/"),
            j = (0, n.uK)().get(n.ce),
            N = (0, a.useCallback)(() => {
              if (o) return o();
              b.canBack && b.back(), T();
            }, [o, b, T]),
            D =
              (null == d
                ? void 0
                : null === (r = d.details) || void 0 === r
                  ? void 0
                  : r.url) && d.details.text,
            A = (0, a.useCallback)(() => {
              null == s || s.setConfirmUnsafeDisclaimer(!0);
              let e = j.get(n.BU.ExEx),
                t = new Date(),
                i = t.setMinutes(t.getMinutes() + 15);
              e
                ? j.set(
                    n.BU.ExEx,
                    [
                      ...e,
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  )
                : j.set(
                    n.BU.ExEx,
                    [
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  ),
                null == o || o();
            }, [s, j, o]),
            S = (0, a.useCallback)(() => {
              (null == s ? void 0 : s.shouldHistoryBack)
                ? (null == o || o(), b.canBack && b.back(), T())
                : null == o || o();
            }, [null == s ? void 0 : s.shouldHistoryBack, b, T, o]);
          (0, a.useEffect)(
            () => () => {
              null == s || s.reset();
            },
            [s],
          );
          let E = (0, a.useMemo)(() => {
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
                    (0, m.jsx)(f.Heading, {
                      variant: "h4",
                      size: "l",
                      className: (0, _.W)(h().title, h().text),
                      ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_TITLE),
                      children: d.title,
                    }),
                    (0, m.jsx)(f.Caption, {
                      variant: "div",
                      size: "l",
                      weight: "normal",
                      className: h().text,
                      ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_DESCRIPTION),
                      children: d.description,
                    }),
                    D &&
                      (0, m.jsx)(y.rU, {
                        href: k,
                        className: h().link,
                        children: (0, m.jsx)(f.Caption, {
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
            }, [u, d, k, D]),
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
                            onClick: S,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: (0, m.jsx)(v.Z, {
                              id: "extra-explicit.reject-unsafe-entity",
                            }),
                          }),
                          (0, m.jsx)(C.z, {
                            color: "secondary",
                            onClick: A,
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
                          onClick: N,
                          size: "l",
                          radius: "xxxl",
                          className: h().button,
                          ...(0, p.BA)(
                            p.FK.disclaimer.DISCLAIMER_REJECT_BUTTON,
                          ),
                          children: (0, m.jsx)(v.Z, {
                            id: "interface-actions.confirm",
                          }),
                        }),
                      }),
              [
                A,
                null == s ? void 0 : s.entityType,
                null == s ? void 0 : s.type,
                N,
                u,
                S,
              ],
            );
          return (0, m.jsx)("div", {
            className: (0, _.W)(h().root, c),
            ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_MODAL),
            children: (0, m.jsxs)("div", {
              className: h().container,
              children: [E, I],
            }),
          });
        });
      var j = i(89352),
        N = i(8554),
        D = i.n(N);
      let A = (0, k.Pi)(() => {
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
          children: (0, m.jsx)(T, { disclaimer: e, onClose: t.close }),
        });
      });
    },
    77070: function (e, t, i) {
      "use strict";
      i.d(t, {
        yp: function () {
          return c;
        },
        DR: function () {
          return y.ListeningProgress;
        },
        bP: function () {
          return C;
        },
        Yc: function () {
          return p.NotificationLike;
        },
        v$: function () {
          return d;
        },
        Ni: function () {
          return _;
        },
        tx: function () {
          return f.t;
        },
        jp: function () {
          return x;
        },
        KX: function () {
          return k.useOnDislikeClick;
        },
        SB: function () {
          return v.useOnLikeClick;
        },
      });
      var a = i(42288),
        r = i(69869),
        n = i(63394),
        l = i(58421);
      let s = a.V5.model("StreamProgress", {
          endPositionSec: a.V5.maybe(a.V5.number),
          hasEverFinished: a.V5.maybe(a.V5.boolean),
        }).actions((e) => ({
          updateEndPositionSec: (t) => {
            e.endPositionSec = t;
          },
        })),
        o = a.V5.model("TrackParameters", {
          bpm: a.V5.maybe(a.V5.number),
          energy: a.V5.maybe(a.V5.number),
          hue: a.V5.maybe(a.V5.number),
          userCollectionHue: a.V5.maybe(a.V5.number),
        }),
        c = a.V5.compose(
          a.V5.model("BaseTrack", {
            id: a.V5.string,
            isAvailable: a.V5.boolean,
            isRemoved: a.V5.boolean,
            title: a.V5.string,
            trackSource: a.V5.maybe(a.V5.enumeration(Object.values(r.zu))),
            version: a.V5.maybe(a.V5.string),
            durationMs: a.V5.maybe(a.V5.number),
            coverUri: a.V5.maybe(a.V5.string),
            averageColor: a.V5.maybe(a.V5.string),
            trackParameters: a.V5.maybe(o),
            albumId: a.V5.maybe(a.V5.number),
            disclaimers: a.V5.maybe(a.V5.array(a.V5.string)),
            type: a.V5.maybe(a.V5.enumeration(Object.values(r.Vc))),
            pubDate: a.V5.maybe(a.V5.string),
            hasSyncLyrics: a.V5.maybe(a.V5.boolean),
            hasTrailer: a.V5.optional(a.V5.boolean, !1),
            shouldRememberPosition: a.V5.maybe(a.V5.boolean),
            streamProgress: a.V5.maybe(s),
          }),
          l.ie,
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
              if ((0, a.fh)(e)) return r.Vc.PODCAST === e.type;
              return !1;
            },
            get isTrackAudiobook() {
              if ((0, a.fh)(e)) return r.Vc.AUDIOBOOK === e.type;
              return !1;
            },
            get isTrackNonMusic() {
              return this.isTrackPodcast || this.isTrackAudiobook;
            },
            get isUGC() {
              if ((0, a.fh)(e)) return e.trackSource === r.zu.UGC;
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
                return !e.isAvailable && e.disclaimers.includes(r.em.MODAL);
              return !1;
            },
            get isUnsafeLegal() {
              if (!(0, a.fh)(e)) return !1;
              let { experiments: t } = (0, a.yj)(e),
                i = t.checkExperiment(n.pe.WebNextLegalUnsafeTrack, "on");
              if (e.disclaimers && i)
                return e.isAvailable && e.disclaimers.includes(r.em.MODAL);
              return !1;
            },
            get entityId() {
              if (e.albumId) return "".concat(e.id, ":").concat(e.albumId);
              return e.id;
            },
          }))
          .actions((e) => ({
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
          })),
        d = a.V5.model("Ugc"),
        u = (e) =>
          (0, a.pj)({
            endPositionSec: null == e ? void 0 : e.endPositionSec,
            hasEverFinished: null == e ? void 0 : e.everFinished,
          }),
        m = (e) =>
          (0, a.pj)({
            bpm: null == e ? void 0 : e.bpm,
            energy: null == e ? void 0 : e.energy,
            hue: null == e ? void 0 : e.hue,
            userCollectionHue: null == e ? void 0 : e.userCollectionHue,
          }),
        _ = (e, t) => {
          var i, l, s, o, c, d;
          e = e || {};
          let { isSmartPreview: _ } = t || {},
            k = (0, n.Us)(null == e ? void 0 : e.derivedColors),
            v = _
              ? null === (i = e.smartPreviewParams) || void 0 === i
                ? void 0
                : i.durationMs
              : null == e
                ? void 0
                : e.durationMs;
          return (0, a.pj)({
            id: (e.id || 0).toString(),
            isAvailable: !!(null == e ? void 0 : e.available),
            isRemoved: (null == e ? void 0 : e.error) === "not-found",
            title:
              null !== (d = null == e ? void 0 : e.title) && void 0 !== d
                ? d
                : "",
            contentWarning: null == e ? void 0 : e.contentWarning,
            version: null == e ? void 0 : e.version,
            durationMs: v,
            coverUri: null == e ? void 0 : e.coverUri,
            averageColor: k,
            trackParameters: m(null == e ? void 0 : e.trackParameters),
            trackSource: null == e ? void 0 : e.trackSource,
            albumId:
              null === (s = e.albums) || void 0 === s
                ? void 0
                : null === (l = s[0]) || void 0 === l
                  ? void 0
                  : l.id,
            disclaimers: e.disclaimers,
            type: e.type,
            pubDate: e.pubDate,
            hasSyncLyrics:
              null === (o = e.lyricsInfo) || void 0 === o
                ? void 0
                : o.hasAvailableSyncLyrics,
            hasTrailer:
              null === (c = e.specialAudioResources) || void 0 === c
                ? void 0
                : c.includes(r.yA.SMART_PREVIEW),
            shouldRememberPosition: e.rememberPosition,
            streamProgress: u(null == e ? void 0 : e.streamProgress),
          });
        };
      var k = i(66757),
        v = i(89263),
        p = i(2057);
      i(83707);
      let C = a.V5.model("MajorModel", {
          id: a.V5.number,
          name: a.V5.string,
          prettyName: a.V5.maybe(a.V5.string),
        }),
        x = (e) =>
          (0, a.pj)({ id: e.id, name: e.name, prettyName: e.prettyName });
      var f = i(98783),
        y = i(44105);
    },
    98783: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return s;
        },
        t: function () {
          return l;
        },
      });
      var a = i(69869),
        r = i(63394),
        n = i(67868);
      let l = (e, t) => {
          if (!t || !e) return n.j9.TRACK;
          switch (e.type) {
            case a.Vc.PODCAST:
              return n.j9.PODCAST_EPISODE;
            case a.Vc.AUDIOBOOK:
              return n.j9.AUDIOBOOK_EPISODE;
            default:
              return n.j9.TRACK;
          }
        },
        s = (e) => l(e, (0, r.RV)());
    },
    66757: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnDislikeClick: function () {
          return _;
        },
      });
      var a = i(9753),
        r = i(24244),
        n = i(98639),
        l = i(80542),
        s = i(84338),
        o = i(69869),
        c = i(63394),
        d = i(67868),
        u = i(83707),
        m = i(98783);
      let _ = (e) => {
        let { user: t, fullscreenPlayer: i } = (0, c.oR)(),
          _ = (0, c.R$)(),
          { notify: k } = (0, c.d$)(),
          [v, p] = (0, n.useState)(!1),
          { formatMessage: C } = (0, l.Z)(),
          x = (0, m.C)(e);
        return (0, n.useCallback)(async () => {
          if (e) {
            let l = i.modal.isOpened ? c.W$.FULLSCREEN_INFO : c.W$.INFO,
              m = i.modal.isOpened ? c.W$.FULLSCREEN_ERROR : c.W$.ERROR;
            if (!t.isAuthorized) {
              k(
                (0, a.jsx)(d.Q, {
                  error: C({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: m },
              );
              return;
            }
            if (v) return;
            let f = { ...(0, r.ZN)(e), isDisliked: !e.isDisliked };
            p(!0);
            let y = await e.toggleDislike();
            if ((p(!1), y === o.Bi.OK)) {
              var n;
              k(
                (0, a.jsx)(u.NotificationDislike, {
                  coverUri: f.coverUri,
                  isDisliked: f.isDisliked,
                  title: f.title,
                  entityVariant: x,
                }),
                { containerId: l },
              );
              let e = f.isDisliked ? o.C.DISLIKE : o.C.UNDISLIKE;
              _ &&
                (0, s.xA)(_.state.currentContext.value) &&
                (await _.state.currentContext.value.sendFeedback(
                  _.state.playerState,
                  _.state.queueState,
                  e,
                )),
                f.isDisliked &&
                  f.id ===
                    (null == _
                      ? void 0
                      : null === (n = _.state.queueState.currentEntity.value) ||
                          void 0 === n
                        ? void 0
                        : n.entity.data.meta.id) &&
                  (null == _ || _.moveForward());
            } else
              k(
                (0, a.jsx)(d.Q, {
                  error: C({ id: "error-messages.error-during-action" }),
                }),
                { containerId: m },
              );
          }
        }, [C, x, i.modal.isOpened, k, v, _, e, t.isAuthorized]);
      };
    },
    89263: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return m;
        },
      });
      var a = i(9753),
        r = i(24244),
        n = i(98639),
        l = i(80542),
        s = i(84338),
        o = i(69869),
        c = i(63394),
        d = i(67868),
        u = i(2057);
      let m = (e) => {
        let { user: t, fullscreenPlayer: i } = (0, c.oR)(),
          { notify: m } = (0, c.d$)(),
          [_, k] = (0, n.useState)(!1),
          { formatMessage: v } = (0, l.Z)(),
          p = (0, c.R$)();
        return (0, n.useCallback)(async () => {
          if (e) {
            let n = i.modal.isOpened ? c.W$.FULLSCREEN_INFO : c.W$.INFO,
              l = i.modal.isOpened ? c.W$.FULLSCREEN_ERROR : c.W$.ERROR;
            if (!t.isAuthorized) {
              m(
                (0, a.jsx)(d.Q, {
                  error: v({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l },
              );
              return;
            }
            if (_) return;
            let C = { ...(0, r.ZN)(e), isLiked: !e.isLiked };
            k(!0);
            let x = await e.toggleLike();
            if ((k(!1), x === o.Bi.OK)) {
              m((0, a.jsx)(u.NotificationLike, { track: C }), {
                containerId: n,
              });
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
                  error: v({ id: "error-messages.error-during-action" }),
                }),
                { containerId: l },
              );
          }
        }, [v, i.modal.isOpened, m, _, p, e, t.isAuthorized]);
      };
    },
    44105: function (e, t, i) {
      "use strict";
      i.d(t, {
        ListeningProgress: function () {
          return g;
        },
      });
      var a,
        r = i(9753),
        n = i(60836),
        l = i(9544),
        s = i(98639),
        o = i.t(s, 2),
        c = i(31014),
        d = {
          1113: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              wrapper: "EOWonrlAZfCxgDQrLIdO",
              fullCircle: "TNOA7GEcjPELn4mw8Zjz",
              progressCircle: "LyZUu89TXyP3Jmnxrn9r",
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
              r = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              s =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              o = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                n = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                l.call(t, a) && !o.hasOwnProperty(a) && (n[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === n[a] && (n[a] = t[a]);
              return {
                $$typeof: r,
                type: e,
                key: c,
                ref: d,
                props: n,
                _owner: s.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          833: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CircleProgress = void 0);
            let r = i(9541),
              n = i(810),
              l = a(i(1113));
            t.CircleProgress = (e) => {
              let { className: t, value: i, max: a = 100, "aria-label": s } = e,
                o = (0, n.useMemo)(() => {
                  let e = Math.max(Math.min(i, a), 0) / a;
                  return "".concat(37.6991 * e, " ").concat((1 - e) * 37.6991);
                }, [a, i]);
              return (0, r.jsx)("div", {
                className: t,
                "aria-label": s,
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": i,
                children: (0, r.jsxs)("svg", {
                  className: l.default.wrapper,
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                  children: [
                    (0, r.jsx)("circle", {
                      className: l.default.fullCircle,
                      r: 6,
                      strokeWidth: 2,
                      cx: 7,
                      cy: 7,
                      role: "presentation",
                    }),
                    (0, r.jsx)("circle", {
                      className: l.default.progressCircle,
                      r: 6,
                      strokeWidth: 2,
                      cx: 7,
                      cy: 7,
                      strokeDashoffset: 9.424775,
                      strokeDasharray: o,
                      role: "presentation",
                    }),
                  ],
                }),
              });
            };
          },
          810: (e) => {
            e.exports = o;
          },
        },
        u = {};
      function m(e) {
        var t = u[e];
        if (void 0 !== t) return t.exports;
        var i = (u[e] = { exports: {} });
        return d[e].call(i.exports, i, i.exports, m), i.exports;
      }
      (m.d = (e, t) => {
        for (var i in t)
          m.o(t, i) &&
            !m.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (m.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var _ = {};
      Object.defineProperty(_, "X", { value: !0 }),
        (_.m = void 0),
        (a = m(833)),
        Object.defineProperty(_, "m", {
          enumerable: !0,
          get: function () {
            return a.CircleProgress;
          },
        });
      var k = _.m;
      _.X;
      var v = i(28852),
        p = i(2570),
        C = i(15419),
        x = i(63394),
        f = i(80542);
      let y = (e) => {
        let { formatMessage: t } = (0, f.Z)(),
          i = Math.floor(e / 60),
          a = function (e) {
            let i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = i ? t({ id: "time.left" }, { time: e }) : "";
            return ""
              .concat(a, " ")
              .concat(t({ id: "time.minutes-left" }, { minutes: e }));
          };
        if (e < 1) return t({ id: "time.finished" });
        if (e < 60) {
          let i;
          return (
            (i = Math.floor(e)),
            ""
              .concat(t({ id: "time.left" }, { time: i }), " ")
              .concat(t({ id: "time.seconds-left" }, { seconds: i }))
          );
        }
        if (i < 60) return a(i, !0);
        let r = Math.floor(i / 60);
        i %= 60;
        let n = t({ id: "time.hours-left" }, { hours: r });
        return i > 0 && (n += a(i)), n;
      };
      var b = i(27908),
        h = i.n(b);
      let g = (0, l.Pi)((e) => {
        let {
            id: t,
            albumId: i,
            streamProgress: a,
            durationMs: l,
            playContextParams: o,
            withTimeLeftText: d = !0,
            className: u,
          } = e,
          m = (0, x.R$)(),
          _ = Math.floor(l / 1e3),
          [f, b] = (0, s.useState)(!1),
          { isPlaying: g, isCurrent: T } = (0, x.qm)({
            playContextParams: o,
            entityId: i ? "".concat(t, ":").concat(i) : t,
          });
        (0, s.useEffect)(() => {
          if (!T) {
            b(!1);
            return;
          }
          let e =
            null == m
              ? void 0
              : m.state.playerState.status.onChange(() => {
                  (null == m ? void 0 : m.state.playerState.status.value) ===
                    C.Xz.LOADING_MEDIA_DATA && b(!0);
                });
          return () => {
            null == e || e();
          };
        }, [m, a, T, g]),
          (0, s.useEffect)(() => {
            if (!T) return;
            let e =
              null == m
                ? void 0
                : m.state.playerState.progress.onChange(() => {
                    let e = m.state.playerState.progress.value;
                    0 !== e.position && f && a.updateEndPositionSec(e.position);
                  });
            return () => {
              null == e || e();
            };
          }, [m, a, T, g, f]);
        let j = (0, s.useMemo)(() => {
          if ((null == a ? void 0 : a.hasEverFinished) && !T && !g)
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(p.Caption, {
                  lineClamp: 1,
                  variant: "div",
                  className: (0, n.W)(h().text, { [h().text_hidden]: !d }),
                  children: (0, r.jsx)(c.Z, { id: "time.finished" }),
                }),
                (0, r.jsx)(v.J, {
                  size: "xxs",
                  variant: "check",
                  className: h().checkIcon,
                }),
              ],
            });
          if (!a.endPositionSec || 0 === a.endPositionSec) return;
          let e = _ - a.endPositionSec,
            t = y(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(p.Caption, {
                lineClamp: 1,
                variant: "div",
                className: (0, n.W)(h().text, { [h().text_withTimeLeft]: !d }),
                children: t,
              }),
              e > 1
                ? (0, r.jsx)(k, { value: a.endPositionSec, max: _ })
                : (0, r.jsx)(v.J, {
                    size: "xxs",
                    variant: "check",
                    className: h().checkIcon,
                  }),
            ],
          });
        }, [
          _,
          null == a ? void 0 : a.hasEverFinished,
          null == a ? void 0 : a.endPositionSec,
          T,
          g,
          d,
        ]);
        return (0, r.jsx)("div", {
          className: (0, n.W)(h().root, u),
          children: j,
        });
      });
    },
    83707: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationDislike: function () {
          return m;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(98639),
        l = i(31014),
        s = i(12404),
        o = i(2570),
        c = i(67868),
        d = i(47283),
        u = i.n(d);
      let m = (e) => {
        let {
            coverUri: t,
            title: i,
            isDisliked: d,
            closeToast: m,
            className: _,
            entityVariant: k,
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
          p = (0, n.useMemo)(() => {
            if (d)
              switch (k) {
                case c.j9.PODCAST_EPISODE:
                  return (0, a.jsx)(l.Z, {
                    id: "notifications-info.podcast-episode-unavailable-in-recommendations",
                  });
                case c.j9.AUDIOBOOK_EPISODE:
                  return (0, a.jsx)(l.Z, {
                    id: "notifications-info.audiobook-episode-unavailable-in-recommendations",
                  });
                default:
                  return (0, a.jsx)(l.Z, {
                    id: "notifications-info.track-unavailable-in-recommendations",
                  });
              }
            else
              switch (k) {
                case c.j9.PODCAST_EPISODE:
                  return (0, a.jsx)(l.Z, {
                    id: "notifications-info.podcast-episode-available-in-recommendations",
                  });
                case c.j9.AUDIOBOOK_EPISODE:
                  return (0, a.jsx)(l.Z, {
                    id: "notifications-info.audiobook-episode-available-in-recommendations",
                  });
                default:
                  return (0, a.jsx)(l.Z, {
                    id: "notifications-info.track-available-in-recommendations",
                  });
              }
          }, [k, d]);
        return (0, a.jsx)(c.Yj, {
          className: (0, r.W)(u().root, _),
          closeToast: m,
          message: (0, a.jsxs)("div", {
            className: u().message,
            children: [
              v,
              (0, a.jsx)(o.Caption, {
                className: u().text,
                variant: "div",
                type: "controls",
                size: "m",
                children: p,
              }),
            ],
          }),
        });
      };
    },
    2057: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationLike: function () {
          return u;
        },
      });
      var a = i(9753),
        r = i(9544),
        n = i(67868),
        l = i(98783),
        s = i(69869),
        o = i(63394);
      let c = "/collection",
        d = (e) => {
          if (!(0, o.RV)()) return c;
          switch (e.type) {
            case s.Vc.PODCAST:
            case s.Vc.AUDIOBOOK:
              return "/collection/shelf/liked";
            default:
              return c;
          }
        },
        u = (0, r.Pi)((e) => {
          let { track: t, closeToast: i } = e,
            r = d(t),
            s = (0, l.C)(t);
          return (0, a.jsx)(n.AP, {
            closeToast: i,
            entityVariant: s,
            entityTitle: t.title,
            collectionUrl: r,
            coverUri: t.coverUri,
            isLiked: t.isLiked,
          });
        });
    },
    48892: function (e, t, i) {
      "use strict";
      i.d(t, {
        jt: function () {
          return T.ControlsBar;
        },
        Jx: function () {
          return y;
        },
        wT: function () {
          return D.PodcastMeta;
        },
        RJ: function () {
          return o.TrackAlbum;
        },
        G7: function () {
          return h.TrackCard;
        },
        _3: function () {
          return s.TrackChart;
        },
        hz: function () {
          return j.TrackContextMenu;
        },
        ko: function () {
          return N.TrackMeta;
        },
        le: function () {
          return v;
        },
        O2: function () {
          return a.TrackPlaylist;
        },
        VZ: function () {
          return n.TrackPlaylistAddition;
        },
        N6: function () {
          return l.TrackPodcast;
        },
        dn: function () {
          return c.TrailerTrackAlbum;
        },
        fY: function () {
          return r.TrailerTrackPlaylist;
        },
        bc: function () {
          return C;
        },
        S7: function () {
          return b;
        },
        E5: function () {
          return S;
        },
        Vt: function () {
          return f;
        },
        Z2: function () {
          return g;
        },
        Wc: function () {
          return E.W;
        },
        nD: function () {
          return I.useTrackDisclaimer;
        },
      });
      var a = i(1776),
        r = i(71456),
        n = i(5670),
        l = i(11516),
        s = i(96414),
        o = i(639),
        c = i(37379),
        d = i(42288),
        u = i(38360),
        m = i(33589),
        _ = i(94342),
        k = i(77070);
      let v = k.yp
          .props({
            artists: d.V5.array(m.Go),
            albums: d.V5.array(u.KX),
            chart: d.V5.maybe(_.BH),
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
              var r, n, l;
              return null !==
                (l =
                  null === (n = e.albums[0]) || void 0 === n
                    ? void 0
                    : null === (r = n.trackPosition) || void 0 === r
                      ? void 0
                      : r.index) && void 0 !== l
                ? l
                : null;
            },
          }))
          .named("Track"),
        p = d.V5.model("Credit", { title: d.V5.string, value: d.V5.string }),
        C = d.V5.compose(v, k.v$).named("UgcTrack");
      var x = i(63394);
      let f = (e, t) => {
          var i, a;
          let r =
              null === (i = e.artists) || void 0 === i ? void 0 : i.map(m.d),
            n = null === (a = e.albums) || void 0 === a ? void 0 : a.map(u.N);
          return (0, d.pj)({ ...(0, k.Ni)(e, t), artists: r, albums: n });
        },
        y = d.V5.model("CurrentTrackInfo", {
          id: d.V5.maybeNull(d.V5.union(d.V5.string, d.V5.number)),
          albumId: d.V5.maybeNull(d.V5.number),
          isUGC: d.V5.maybeNull(d.V5.boolean),
          trackLoadingState: d.V5.enumeration(Object.values(x.Gu)),
          fullTrack: d.V5.maybeNull(v),
          creditsLoadingState: d.V5.enumeration(Object.values(x.Gu)),
          credits: d.V5.maybeNull(d.V5.array(p)),
        })
          .views((e) => ({
            get isTrackIdle() {
              return e.trackLoadingState === x.Gu.IDLE;
            },
            get isCreditsIdle() {
              return e.creditsLoadingState === x.Gu.IDLE;
            },
            get isTrackLoading() {
              return (
                e.trackLoadingState === x.Gu.PENDING ||
                e.trackLoadingState === x.Gu.IDLE
              );
            },
            get isTrackRejected() {
              return e.trackLoadingState === x.Gu.REJECT;
            },
            get isCreditsLoading() {
              return (
                e.creditsLoadingState === x.Gu.PENDING ||
                e.creditsLoadingState === x.Gu.IDLE
              );
            },
            get isCreditsRejected() {
              return e.creditsLoadingState === x.Gu.REJECT;
            },
            get isRejected() {
              return (
                e.creditsLoadingState === x.Gu.REJECT &&
                e.trackLoadingState === x.Gu.REJECT
              );
            },
          }))
          .actions((e) => ({
            setTrack(t) {
              let { id: i, albumId: a, isUGC: r } = t;
              (e.id = i), (e.albumId = a), (e.isUGC = r);
            },
            getFullTrack: (0, d.ls)(function* () {
              let { tracksResource: t, modelActionsLogger: i } = (0, d.dU)(e);
              if (!e.id || e.trackLoadingState === x.Gu.PENDING) return null;
              try {
                e.trackLoadingState = x.Gu.PENDING;
                let i = yield t.getFullInfoTrack({
                  trackId: e.id,
                  albumId: e.albumId,
                });
                if (!i) return null;
                (e.fullTrack = (0, d.pj)(f(i.track))),
                  (e.trackLoadingState = x.Gu.RESOLVE);
              } catch (t) {
                i.error(t), (e.trackLoadingState = x.Gu.REJECT);
              }
              return null;
            }),
            getTrackMeta: (0, d.ls)(function* () {
              let { tracksResource: t, modelActionsLogger: i } = (0, d.dU)(e);
              if (!e.id || e.trackLoadingState === x.Gu.PENDING) return null;
              try {
                e.trackLoadingState = x.Gu.PENDING;
                let i = yield t.getTracksMeta({
                  trackIds: [e.id],
                  removeDuplicates: !0,
                });
                if (!i || !i.length) return null;
                i[0] &&
                  ((e.fullTrack = (0, d.pj)(f(i[0]))),
                  (e.trackLoadingState = x.Gu.RESOLVE));
              } catch (t) {
                i.error(t), (e.trackLoadingState = x.Gu.REJECT);
              }
              return null;
            }),
            getCreditsInfo: (0, d.ls)(function* () {
              let { tracksResource: t, modelActionsLogger: i } = (0, d.dU)(e);
              if (!e.id || e.creditsLoadingState === x.Gu.PENDING) return null;
              try {
                e.creditsLoadingState = x.Gu.PENDING;
                let i = yield t.getCredits({ trackId: e.id });
                (e.credits = (0, d.pj)(null == i ? void 0 : i.credits)),
                  (e.creditsLoadingState = x.Gu.RESOLVE);
              } catch (t) {
                i.error(t), (e.creditsLoadingState = x.Gu.REJECT);
              }
              return null;
            }),
            reset() {
              (e.id = null),
                (e.albumId = null),
                (e.isUGC = null),
                (e.trackLoadingState = x.Gu.IDLE),
                (e.creditsLoadingState = x.Gu.IDLE),
                (e.fullTrack = null),
                (e.credits = null);
            },
          })),
        b = (e, t) => (0, d.pj)({ ...f(e), chart: t && (0, _.W5)(t) });
      var h = i(99846);
      let g = (e) => {
        var t, i;
        return (0, d.pj)({
          ...f(e),
          artists:
            null !==
              (i =
                null == e
                  ? void 0
                  : null === (t = e.artists) || void 0 === t
                    ? void 0
                    : t.map(m.d)) && void 0 !== i
              ? i
              : [],
        });
      };
      var T = i(93393),
        j = i(2648),
        N = i(72280),
        D = i(53961),
        A = i(15419);
      let S = (e) => ({
        type: A.RX.Unloaded,
        meta: { id: e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id },
      });
      var E = i(16030),
        I = i(44660);
    },
    16030: function (e, t, i) {
      "use strict";
      i.d(t, {
        W: function () {
          return o;
        },
      });
      var a = i(9753),
        r = i(98639),
        n = i(12090),
        l = i(77070),
        s = i(63394);
      let o = () => {
        let { notify: e } = (0, s.d$)(),
          { playlist: t, fullscreenPlayer: i } = (0, s.oR)(),
          o = (0, s.RV)(),
          c = (0, r.useCallback)(
            (r) => {
              var c, d;
              let {
                withSuccessNotification: u,
                withPageRefresh: m,
                playlist: _,
                track: k,
              } = r;
              if (u) {
                let t = (0, l.tx)(k, o);
                e(
                  (0, a.jsx)(n.XD, {
                    entityTitle: k.title,
                    entityVariant: t,
                    entityCoverUri:
                      null !== (d = k.coverUri) && void 0 !== d ? d : "",
                    playlist: _,
                  }),
                  {
                    containerId: i.modal.isOpened
                      ? s.W$.FULLSCREEN_INFO
                      : s.W$.INFO,
                  },
                );
              }
              m &&
                _.uuid ===
                  (null === (c = t.meta) || void 0 === c ? void 0 : c.uuid) &&
                t.refresh();
            },
            [i.modal.isOpened, o, e, t],
          ),
          d = (0, r.useCallback)(
            (t) => {
              let { withFailNotification: r } = t;
              r &&
                e((0, a.jsx)(n.wi, {}), {
                  containerId: i.modal.isOpened
                    ? s.W$.FULLSCREEN_ERROR
                    : s.W$.ERROR,
                });
            },
            [i.modal.isOpened, e],
          );
        return (0, r.useCallback)(
          async (e) => {
            var t;
            let {
                playlist: i,
                track: a,
                withSuccessNotification: r = !0,
                withFailNotification: l = !0,
                withPageRefresh: s = !0,
              } = e,
              o = await i.changePlaylist(
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
              o === n.pX.OK
                ? c({
                    withSuccessNotification: r,
                    withPageRefresh: s,
                    playlist: i,
                    track: a,
                  })
                : d({ withFailNotification: l }),
              o
            );
          },
          [c, d],
        );
      };
    },
    44660: function (e, t, i) {
      "use strict";
      i.d(t, {
        useTrackDisclaimer: function () {
          return l;
        },
      });
      var a = i(98639),
        r = i(3429),
        n = i(63394);
      let l = (e) => {
        let { track: t, callback: i } = e,
          {
            disclaimer: l,
            modals: { disclaimerModal: s },
          } = (0, n.oR)(),
          o = (0, a.useRef)(String((0, r.Z)())),
          c = (0, a.useRef)(!1),
          d = (0, n.uK)().get(n.ce);
        return (
          (0, a.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === o.current &&
              !c.current &&
              (null == i || i(), (c.current = !0));
          }, [i, l.isUnsafeDisclaimerConfirmed, l.id]),
          (0, a.useCallback)(
            async (e) => {
              if (t.isLegalRejected || t.isUnsafeLegal) {
                let a = d.get(n.BU.ExEx);
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
                  await l.getTrackDisclaimer({ trackId: t.id }),
                  t.isUnsafeLegal && l.setType(n.Gq.UNSAFE),
                  l.setId(o.current),
                  l.setEntityId(t.id),
                  l.setEntityType(n.co.TRACK),
                  (c.current = !1),
                  s.open();
                return;
              }
              null == i || i();
            },
            [i, l, s, d, t.id, t.isLegalRejected, t.isUnsafeLegal],
          )
        );
      };
    },
    54355: function (e, t, i) {
      "use strict";
      i.d(t, {
        x: function () {
          return o;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(28852),
        l = i(81032),
        s = i.n(l);
      let o = (e) => {
        let { isDragging: t, className: i } = e;
        return (0, a.jsx)(n.J, {
          variant: "dragDots",
          size: "xxs",
          className: (0, r.W)(s().root, { [s().root_active]: t }, i),
          "aria-hidden": !0,
        });
      };
    },
    93393: function (e, t, i) {
      "use strict";
      i.d(t, {
        ControlsBar: function () {
          return x;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        s = i(80542),
        o = i(23881),
        c = i(39513),
        d = i(28852),
        u = i(2570),
        m = i(77070),
        _ = i(63394),
        k = i(67868),
        v = i(2648),
        p = i(26889),
        C = i.n(p);
      let x = (0, n.Pi)((e) => {
        let {
            className: t,
            track: i,
            withLightning: n,
            ignoreDislikedStyles: p,
          } = e,
          { user: x } = (0, _.oR)(),
          { formatMessage: f } = (0, s.Z)(),
          { sendLikeSearchFeedback: y } = (0, _.sA)(),
          [b, h] = (0, l.useState)(!1),
          [g, T] = (0, l.useState)(!1),
          j = (0, m.SB)(i),
          N = (0, m.KX)(i),
          D = (0, l.useMemo)(() => {
            let e = Math.round((i.durationMs || 0) / 1e3);
            return (0, _.gf)(e);
          }, [i.durationMs]),
          A = (0, l.useCallback)(() => {
            b || i.isLiked || (h(!0), null == y || y()), j();
          }, [j, b, y, i.isLiked]),
          S = (0, l.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          E = (0, l.useMemo)(() => {
            if (x.isAuthorized && !i.isRemoved && i.isAvailable)
              return (0, a.jsx)(v.TrackContextMenu, {
                track: i,
                open: g,
                onOpenChange: T,
                placement: "bottom",
                reference: (0, a.jsx)(c.z, {
                  onClick: S,
                  variant: "text",
                  size: "xs",
                  withRipple: !1,
                  radius: "round",
                  className: (0, r.W)(C().contextMenu, {
                    [C().contextMenu_visible]: g,
                  }),
                  "aria-label": f({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(d.J, { variant: "more", size: "xxs" }),
                  ...(0, o.BA)(o.bG.track.TRACK_CONTEXT_MENU_BUTTON),
                }),
              });
          }, [f, S, g, i, x.isAuthorized]);
        return (0, a.jsxs)("div", {
          className: (0, r.W)(C().root, C().controls, t, {
            [C().controls_dislikedControls]: i.isDisliked,
            [C().controls_dislikedColors]: i.isDisliked && !p,
            [C().controls_disabled]: !i.isAvailable,
          }),
          children: [
            n &&
              (0, a.jsx)(d.J, {
                "aria-label": f({ id: "entity-names.popular-among-users" }),
                size: "xxs",
                className: C().lightning,
                variant: "lightning",
              }),
            x.isAuthorized &&
              !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(k.dJ, {
                size: "xs",
                iconSize: "xxs",
                className: (0, r.W)(C().item, C().likeIcon),
                isLiked: i.isLiked,
                onClick: A,
              }),
            x.isAuthorized &&
              !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(k.Q1, {
                size: "xs",
                iconSize: "xxs",
                className: (0, r.W)(C().item, C().dislikeIcon),
                isDisliked: i.isDisliked,
                onClick: N,
              }),
            (0, a.jsxs)("div", {
              className: (0, r.W)(C().item, C().contextMenuWrapper),
              children: [
                "number" == typeof i.durationMs &&
                  (0, a.jsx)(u.Caption, {
                    variant: "span",
                    className: (0, r.W)(C().duration, {
                      [C().duration_hidden]: g,
                    }),
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    children: D,
                  }),
                E,
              ],
            }),
          ],
        });
      });
    },
    53961: function (e, t, i) {
      "use strict";
      i.d(t, {
        PodcastMeta: function () {
          return y;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(32693),
        d = i(96622),
        u = i(2570),
        m = i(20121),
        _ = i(77070),
        k = i(63394),
        v = i(67868),
        p = i(41894),
        C = i.n(p),
        x = i(14795),
        f = i.n(x);
      let y = (0, n.Pi)((e) => {
        let {
            track: t,
            className: i,
            withPodcastName: n = !1,
            withDate: p = !0,
            withSecondaryColor: x = !1,
            withListeningProgress: y = !1,
            captionSize: b = "m",
            explicitSize: h = "xs",
            withExplicitMark: g = !0,
            titleContainerClassName: T,
            textClassName: j,
            playContextParams: N,
            withTimeLeftText: D = !0,
            ignoreDislikedStyles: A,
          } = e,
          { fullscreenPlayer: S } = (0, k.oR)(),
          { formatMessage: E } = (0, s.Z)(),
          I = t.mainAlbum,
          P = I && n,
          L = t.pubDate ? new Date(t.pubDate) : new Date(),
          R = (0, k.u9)(L),
          B = !1,
          M = (0, k.s0)("/album/".concat(null == I ? void 0 : I.id)),
          O = (0, m.$H)({
            entityType: k.co.PODCAST,
            entityId: null == I ? void 0 : I.id,
            isLegalRejected: !!(null == I ? void 0 : I.isLegalRejected),
            isUnsafeLegal: !!(null == I ? void 0 : I.isUnsafeLegal),
            callback: M,
          }),
          V = (0, l.useCallback)(() => {
            switch (R) {
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
          }, [t.pubDate, R]);
        t.pubDate && p && (B = [k.Uv.TODAY, k.Uv.YESTERDAY].includes(R));
        let U = (0, l.useCallback)(
            (e) => {
              S.modal.isOpened && S.modal.close(), O(e);
            },
            [S.modal, O],
          ),
          G = (0, l.useMemo)(
            () =>
              t.isRemoved
                ? (0, a.jsx)(o.Z, { id: "track-title.podcast-not-found" })
                : (0, a.jsx)(u.Caption, {
                    className: C().title,
                    type: "entity",
                    size: b,
                    variant: "span",
                    children: t.title,
                  }),
            [t.isRemoved, t.title, b],
          );
        return (0, a.jsx)("div", {
          className: (0, r.W)(
            C().root,
            {
              [C().root_disabled]: !t.isAvailable,
              [C().root_disliked]: t.isDisliked && !A,
              [C().root_withSecondaryColor]: x,
            },
            i,
          ),
          children: (0, a.jsxs)("div", {
            className: (0, r.W)(C().metaContainer, f().podcastMetaContainer),
            children: [
              (0, a.jsxs)("div", {
                className: (0, r.W)(
                  C().titleContainer,
                  T,
                  f().podcastTitleContainer,
                ),
                children: [
                  (0, a.jsx)(u.Caption, {
                    className: (0, r.W)(C().text, j),
                    type: "entity",
                    size: b,
                    variant: "div",
                    lineClamp: 1,
                    children: G,
                  }),
                  t.trackExplicitMark &&
                    g &&
                    (0, a.jsx)(d.ExplicitMark, {
                      variant: d.ExplicitMarkVariant.NUMERIC,
                      className: (0, r.W)(C().explicitMark, f().explicitMark),
                      iconSize: h,
                    }),
                ],
              }),
              (0, a.jsxs)(u.Caption, {
                type: "entity",
                size: b,
                variant: "div",
                lineClamp: 1,
                className: (0, r.W)(C().text, f().podcastName, j),
                children: [
                  P &&
                    (0, a.jsx)(v.rU, {
                      "aria-label": E(
                        { id: "entity-names.podcast-name" },
                        { podcastName: I.title },
                      ),
                      className: C().link,
                      href: "/album/".concat(I.id),
                      title: I.title,
                      onClick: U,
                      children: (0, a.jsx)(u.Caption, {
                        variant: "span",
                        type: "entity",
                        size: b,
                        className: C().albumTitle,
                        children: I.title,
                      }),
                    }),
                  t.pubDate &&
                    p &&
                    (0, a.jsx)(u.Caption, {
                      variant: "span",
                      type: "entity",
                      size: b,
                      className: (0, r.W)({
                        [f().dateWithName]: P,
                        [f().soonDate]: B,
                        [f().dateDisabled]: !t.isAvailable,
                        [f().dateDisliked]: t.isDisliked && !A,
                      }),
                      children: V(),
                    }),
                ],
              }),
              y &&
                N &&
                t.shouldRememberPosition &&
                t.streamProgress &&
                t.durationMs &&
                (0, a.jsx)(_.DR, {
                  className: (0, r.W)(f().progress, {
                    [f().progress_withPreviousInfo]: P || (t.pubDate && p),
                    [f().progress_disabled]: !t.isAvailable || t.isDisliked,
                  }),
                  id: t.id,
                  albumId: t.albumId,
                  streamProgress: t.streamProgress,
                  durationMs: t.durationMs,
                  playContextParams: N,
                  withTimeLeftText: D,
                }),
            ],
          }),
        });
      });
    },
    72280: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackMeta: function () {
          return b;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(23881),
        d = i(69869),
        u = i(96622),
        m = i(2570),
        _ = i(33589),
        k = i(63394),
        v = i(67868),
        p = i(90454);
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
        let r = a.map((e) => e.id).sort(),
          n = i.map((e) => e.id).sort();
        return (0, p.Z)(r, n) ? [] : i.filter((e) => !e.various);
      };
      var x = i(44660),
        f = i(41894),
        y = i.n(f);
      let b = (0, n.Pi)((e) => {
        let {
            className: t,
            titleContainerClassName: i,
            track: n,
            albumArtists: p,
            withExplicitMark: f = !0,
            withSecondaryColor: b,
            captionSize: h = "m",
            explicitSize: g = "xxxs",
            withAlbumLink: T,
            withAllArtistsTitle: j,
            textClassName: N,
            artistsClassName: D,
            ignoreDislikedStyles: A,
          } = e,
          { formatMessage: S } = (0, s.Z)(),
          { fullscreenPlayer: E } = (0, k.oR)(),
          I = (0, k.s0)("/album/".concat(n.albumId)),
          P = (0, l.useMemo)(() => {
            var e;
            let t = S(
              { id: "entity-names.track-name" },
              { trackName: n.title },
            );
            return ""
              .concat(t, " ")
              .concat(null !== (e = n.version) && void 0 !== e ? e : "");
          }, [S, n.title, n.version]),
          L = (0, x.useTrackDisclaimer)({ track: n, callback: I }),
          R = (0, l.useCallback)(
            (e) => {
              E.modal.isOpened && E.modal.close(), L(e);
            },
            [E.modal, L],
          ),
          B = (0, l.useMemo)(
            () =>
              n.isRemoved
                ? (0, a.jsx)(m.Caption, {
                    className: (0, r.W)(y().text, y().title),
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "span",
                    children: (0, a.jsx)(o.Z, {
                      id: "track-title.error-not-found",
                    }),
                  })
                : n.albumId && T && n.trackSource === d.zu.OWN && n.isAvailable
                  ? (0, a.jsx)(v.rU, {
                      onClick: R,
                      className: y().albumLink,
                      href: "/album/".concat(n.albumId),
                      "aria-label": P,
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: (0, a.jsx)(m.Caption, {
                        className: (0, r.W)(y().text, y().title),
                        type: "entity",
                        size: h,
                        weight: "medium",
                        variant: "span",
                        children: n.title,
                      }),
                    })
                  : (0, a.jsx)(m.Caption, {
                      className: (0, r.W)(y().text, y().title),
                      type: "entity",
                      size: h,
                      weight: "medium",
                      variant: "span",
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: n.title,
                    }),
            [
              h,
              R,
              n.albumId,
              n.isAvailable,
              n.isRemoved,
              n.title,
              n.trackSource,
              P,
              T,
            ],
          ),
          M = (0, l.useMemo)(() => C(n.artists, p), [n.artists, p, n.id]);
        return (0, a.jsx)("div", {
          className: (0, r.W)(
            y().root,
            {
              [y().root_disabled]: !n.isAvailable,
              [y().root_disliked]: n.isDisliked && !A,
              [y().root_withSecondaryColor]: b,
            },
            t,
          ),
          children: (0, a.jsxs)("div", {
            className: y().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, r.W)(
                  y().titleContainer,
                  { [y().titleContainer_withVersion]: n.version },
                  i,
                ),
                children: [
                  (0, a.jsxs)(m.Caption, {
                    className: (0, r.W)(y().text, N),
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "div",
                    lineClamp: 1,
                    children: [
                      B,
                      !n.isRemoved &&
                        n.version &&
                        (0, a.jsxs)(m.Caption, {
                          className: (0, r.W)(y().text, y().version),
                          type: "entity",
                          size: h,
                          weight: "medium",
                          variant: "span",
                          children: ["\xa0", n.version],
                        }),
                    ],
                  }),
                  n.trackExplicitMark &&
                    f &&
                    (0, a.jsx)(u.ExplicitMark, {
                      iconSize: g,
                      variant: n.trackExplicitMark,
                      className: y().explicitMark,
                    }),
                ],
              }),
              M.length > 0 &&
                (0, a.jsx)(_.jO, {
                  className: (0, r.W)(y().text, y().artists, D, N),
                  linkClassName: (0, r.W)(y().text, y().link),
                  captionClassName: (0, r.W)(y().text, y().artistCaption),
                  artists: M,
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
    9374: function (e, t, i) {
      "use strict";
      i.d(t, {
        e: function () {
          return d;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(2570),
        s = i(67868),
        o = i(33273),
        c = i.n(o);
      let d = (0, n.Pi)((e) => {
        let {
          className: t,
          track: i,
          position: n,
          onPlayButtonClick: o,
          isPlaying: d,
          isCurrent: u,
        } = e;
        return (0, a.jsxs)("div", {
          className: (0, r.W)(t, c().root, {
            [c().root_disabled]: !i.isAvailable,
            [c().root_playing]: d,
            [c().root_disliked]: i.isDisliked,
            [c().root_current]: u,
          }),
          children: [
            i.isAvailable &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(s.Up, { className: c().playingAnimation }),
                  (0, a.jsx)(s.JM, {
                    variant: "filled",
                    className: c().playButton,
                    iconClassName: c().playButtonIcon,
                    isPlaying: d,
                    onClick: o,
                    iconSize: "xs",
                  }),
                ],
              }),
            n &&
              (0, a.jsx)(l.Caption, {
                variant: "div",
                className: c().position,
                weight: "normal",
                type: "entity",
                size: "m",
                children: n,
              }),
          ],
        });
      });
    },
    2648: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackContextMenu: function () {
          return P;
        },
      });
      var a = i(9753),
        r = i(9544),
        n = i(98639),
        l = i(31014),
        s = i(23881),
        o = i(69869),
        c = i(28852),
        d = i(385),
        u = i(38360),
        m = i(77070),
        _ = i(63394),
        k = i(23476),
        v = i.n(k);
      let p = (e) => {
        let { className: t, albumType: i, albumId: r } = e,
          s = (0, _.s0)("/album/".concat(r)),
          u = (0, n.useMemo)(
            () =>
              i === o.VZ.AUDIOBOOK
                ? (0, a.jsx)(l.Z, { id: "non-music.navigate-to-book-album" })
                : (0, a.jsx)(l.Z, {
                    id: "non-music.navigate-to-podcast-album",
                  }),
            [i],
          ),
          m = (0, n.useCallback)(() => {
            s();
          }, [s]);
        return (0, a.jsx)(d.sN, {
          className: t,
          onClick: m,
          icon: (0, a.jsx)(c.J, {
            className: v().navigateToAlbumIcon,
            variant: "podcasts",
            size: "xl",
          }),
          children: u,
        });
      };
      var C = i(67868),
        x = i(80542),
        f = i(12090);
      let y = () => {
        let { playlist: e, trackIndex: t } = (0, n.useContext)(f.jK) || {},
          { notify: i } = (0, _.d$)(),
          { playlist: r } = (0, _.oR)(),
          { formatMessage: l } = (0, x.Z)(),
          s = (0, n.useCallback)(async () => {
            let n = !1;
            if (
              (e &&
                "number" == typeof t &&
                (await e.changePlaylist(
                  (0, f.PG)({
                    operation: f.aL.DELETE,
                    startPosition: t,
                    endPosition: t + 1,
                  }),
                )) === f.pX.OK &&
                (n = !0),
              n)
            ) {
              if (e && "number" == typeof t) {
                var s;
                e.uuid ===
                  (null === (s = r.meta) || void 0 === s ? void 0 : s.uuid) &&
                  r.removeTracksFromItems(t, 1);
              }
            } else
              i(
                (0, a.jsx)(C.Q, {
                  error: l({ id: "playlist-errors.failed-to-remove-track" }),
                }),
                { containerId: _.W$.ERROR },
              );
          }, [e, t, r, i, l]);
        return {
          canRemoveTrackFromPlaylist: !!(null == e ? void 0 : e.canUserChange),
          removeTrackFromPlaylist: s,
        };
      };
      var b = i(60836),
        h = i(90679),
        g = i(74717),
        T = i(16030);
      let j = (e) => {
        let { createPlaylist: t, fullscreenPlayer: i } = (0, _.oR)(),
          { notify: r } = (0, _.d$)(),
          l = (0, g.useRouter)(),
          { formatMessage: s } = (0, x.Z)(),
          c = (0, T.W)(),
          d = (0, n.useCallback)(
            async (e) => {
              var i;
              if (
                (await t.create({
                  title: s({ id: "entity-names.new-playlist" }),
                  visibility: o.we.PUBLIC,
                }),
                !(null == t
                  ? void 0
                  : null === (i = t.meta) || void 0 === i
                    ? void 0
                    : i.uuid))
              )
                return null;
              if (
                (await c({
                  playlist: t.meta,
                  track: e,
                  withPageRefresh: !1,
                  withFailNotification: !1,
                  withSuccessNotification: !1,
                })) === f.pX.OK
              ) {
                let e = (0, _.SZ)("/playlist/".concat(t.meta.uuid));
                return t.reset(), e;
              }
              return null;
            },
            [c, t, s],
          );
        return (0, n.useCallback)(async () => {
          let t = await d(e);
          t
            ? (i.modal.isOpened && i.modal.close(), l.push(t))
            : r((0, a.jsx)(f.wi, {}), {
                containerId: i.modal.isOpened
                  ? _.W$.FULLSCREEN_ERROR
                  : _.W$.ERROR,
              });
        }, [d, i.modal, r, l, e]);
      };
      var N = i(2570);
      let D = (e) => {
        let { playlist: t, track: i } = e,
          r = (0, T.W)(),
          l = (0, n.useCallback)(() => {
            r({ playlist: t, track: i });
          }, [r, t, i]);
        return (0, a.jsx)(d.sN, {
          onClick: l,
          children: (0, a.jsx)(N.Caption, {
            variant: "div",
            lineClamp: 1,
            children: t.title,
          }),
        });
      };
      var A = i(56819),
        S = i.n(A);
      let E = () =>
          (0, a.jsx)(d.sN, {
            children: (0, a.jsx)(h.Shimmer, { className: S().shimmer }),
          }),
        I = (0, r.Pi)((e) => {
          var t;
          let { track: i } = e,
            {
              user: r,
              contextMenuPlaylists: s,
              fullscreenPlayer: o,
            } = (0, _.oR)(),
            u = (0, m.SB)(i),
            { notify: k } = (0, _.d$)(),
            v = j(i),
            p = (0, n.useCallback)(() => {
              if (!i.isLiked) {
                u();
                return;
              }
              k((0, a.jsx)(m.Yc, { track: i }), {
                containerId: o.modal.isOpened
                  ? _.W$.FULLSCREEN_INFO
                  : _.W$.INFO,
              });
            }, [o.modal.isOpened, u, k, i]),
            x = (0, n.useCallback)(
              (e) => {
                r.account.uid &&
                  s.getData({ userId: r.account.uid, page: e, pageSize: 20 });
              },
              [s, r.account.uid],
            ),
            f = (0, n.useCallback)(async () => {
              r.account.uid &&
                (await s.getData({
                  userId: r.account.uid,
                  page: 0,
                  pageSize: 20,
                }));
            }, [s, r.account.uid]);
          (0, n.useEffect)(
            () => () => {
              s.reset();
            },
            [s],
          );
          let y = (e) => {
              var t;
              let r =
                null == s
                  ? void 0
                  : null === (t = s.items) || void 0 === t
                    ? void 0
                    : t[e];
              return r
                ? (0, a.jsx)(D, { track: i, playlist: r }, r.uuid)
                : (0, a.jsx)(E, {});
            },
            h = (0, n.useMemo)(() => {
              var e, t, i;
              return s.isLoaded
                ? (0, a.jsx)(C.Wv, {
                    className: (0, b.W)(S().virtualScroll, S().important),
                    listClassName: S().content,
                    customComponents: {
                      Header: () =>
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(d.sN, {
                              onClick: v,
                              icon: (0, a.jsx)(c.J, { variant: "add" }),
                              children: (0, a.jsx)(l.Z, {
                                id: "playlist-actions.create-playlist",
                              }),
                            }),
                            (0, a.jsx)(d.sN, {
                              onClick: p,
                              children: (0, a.jsx)(l.Z, {
                                id: "entity-names.liked-playlist",
                              }),
                            }),
                          ],
                        }),
                    },
                    itemContentCallback: y,
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
                    onGetDataByPage: x,
                    pageSize: 20,
                    withFooter: !1,
                    totalRequests:
                      null !== (i = s.requests) && void 0 !== i ? i : 0,
                    alwaysShowScrollbar: !0,
                  })
                : [...Array(7)].map((e, t) => (0, a.jsx)(E, {}, t));
            }, [
              s.loadingState,
              null == s
                ? void 0
                : null === (t = s.pager) || void 0 === t
                  ? void 0
                  : t.total,
              s.requests,
              x,
              u,
              v,
            ]);
          return (0, a.jsx)(d.v2, {
            offsetOptions: 3,
            onShow: f,
            reference: (0, a.jsx)(d.sN, {
              isSubMenu: !0,
              icon: (0, a.jsx)(c.J, { variant: "addToPlaylist" }),
              children: (0, a.jsx)(l.Z, {
                id: "playlist-actions.add-track-to-playlist",
              }),
            }),
            children: (0, a.jsx)("div", { className: S().root, children: h }),
          });
        }),
        P = (0, r.Pi)((e) => {
          var t, i, r, k, v, x;
          let {
              track: f,
              reference: b,
              onOpenChange: h,
              open: g,
              placement: T,
              returnFocus: j,
            } = e,
            {
              settings: N,
              currentTrackInfo: D,
              experiments: A,
              fullscreenPlayer: S,
              modals: { trackModal: E },
              sonataState: { entityMeta: P },
              trailer: L,
            } = (0, _.oR)(),
            R = (0, m.SB)(f),
            B = (0, m.KX)(f),
            M = (0, u.SB)(f.mainAlbum),
            O = "".concat(_.aU.TRACK, "-").concat(f.id),
            V = N.layout === _.t8.Mobile,
            { href: U } = (0, _.qK)(f.url),
            G =
              (0, _.RV)() &&
              (null === (t = f.mainAlbum) || void 0 === t
                ? void 0
                : t.isNonMusic),
            w =
              A.checkExperiment(_.pe.WebNextEntityTrailer, "on") &&
              true &&
              f.hasTrailer,
            { canRemoveTrackFromPlaylist: W, removeTrackFromPlaylist: z } = y(),
            { isPlaying: K, togglePlay: F } = (0, _.Qh)({
              seeds:
                null !== (x = null == f ? void 0 : f.seeds) && void 0 !== x
                  ? x
                  : [],
              pageIdForFrom: _.Rh.RADIO,
              blockIdForFrom: O,
            }),
            Z = (0, n.useCallback)(() => {
              K || F();
            }, [K, F]),
            J = (0, n.useCallback)(() => {
              L.openTrackTrailer(f.entityId);
            }, [f.entityId, L]),
            Y = (0, n.useCallback)(() => {
              var e;
              D.setTrack({
                id: f.id,
                albumId:
                  (null === (e = f.mainAlbum) || void 0 === e
                    ? void 0
                    : e.id) || null,
                isUGC: f.isUGC || null,
              }),
                E.open();
            }, [
              D,
              f.id,
              f.isUGC,
              null === (i = f.mainAlbum) || void 0 === i ? void 0 : i.id,
              E,
            ]);
          (0, _.ZP)(g);
          let H = !G,
            X = !f.isUGC && !G,
            $ = !G,
            q = !V,
            Q = G && M,
            ee = true && !V,
            et =
              A.checkExperiment(_.pe.WebNextSyncLyrics, "on") &&
              (null == P ? void 0 : P.hasSyncLyrics) &&
              S.modal.isOpened,
            ei = G && V;
          return (0, a.jsxs)(d.v2, {
            reference: b,
            isMobile: V,
            title: f.title,
            description: f.artistsNames,
            placement: T,
            offsetOptions: 10,
            open: g,
            onOpenChange: h,
            returnFocus: j,
            testId: (0, s.BA)(s.bG.track.TRACK_CONTEXT_MENU),
            children: [
              H && (0, a.jsx)(C.xZ, { onClick: R, isLiked: f.isLiked }),
              w && (0, a.jsx)(C.NB, { onClick: J }),
              X &&
                (0, a.jsx)(C.GQ, {
                  onClick: Z,
                  variant: "track",
                  disabled: !f.isAvailable,
                }),
              et &&
                (0, a.jsx)(d.sN, {
                  onClick: S.showSyncLyricsModal,
                  icon: (0, a.jsx)(c.J, { variant: "syncLyrics" }),
                  ...(0, s.BA)(
                    s.bG.track.TRACK_CONTEXT_MENU_SYNC_LYRICS_BUTTON,
                  ),
                  children: (0, a.jsx)(l.Z, {
                    id: "interface-actions.open-sync-lyrics",
                  }),
                }),
              $ && (0, a.jsx)(C.ZL, { onClick: B, isDisliked: f.isDisliked }),
              q && (0, a.jsx)(I, { track: f }),
              (0, a.jsx)(C.zq, {
                disabled: f.isUGC || f.trackSource === o.zu.OWN_REPLACED_TO_UGC,
                shareLink: U,
                entityVariant: "track",
                entityTitle: f.title,
              }),
              ei &&
                (0, a.jsx)(p, {
                  albumId: f.mainAlbum.id,
                  albumType:
                    null === (r = f.mainAlbum) || void 0 === r
                      ? void 0
                      : r.type,
                }),
              Q &&
                (0, a.jsx)(C.qq, {
                  onClick: M,
                  isLiked:
                    null === (k = f.mainAlbum) || void 0 === k
                      ? void 0
                      : k.isLiked,
                  albumType:
                    null === (v = f.mainAlbum) || void 0 === v
                      ? void 0
                      : v.type,
                  ...(0, s.BA)(s.bG.track.TRACK_CONTEXT_MENU_SUBSCRIBE_BUTTON),
                }),
              W &&
                (0, a.jsx)(d.sN, {
                  onClick: z,
                  icon: (0, a.jsx)(c.J, { variant: "bucket" }),
                  ...(0, s.BA)(
                    s.bG.track
                      .TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                  ),
                  children: (0, a.jsx)(l.Z, {
                    id: "playlist-actions.remove-from-playlist",
                  }),
                }),
              ee &&
                (0, a.jsx)(d.sN, {
                  onClick: Y,
                  icon: (0, a.jsx)(c.J, { variant: "info" }),
                  ...(0, s.BA)(
                    s.bG.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                  ),
                  children: (0, a.jsx)(l.Z, { id: "track-modal.title" }),
                }),
            ],
          });
        });
    },
    60808: function (e, t, i) {
      "use strict";
      i.d(t, {
        f: function () {
          return k;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        s = i(80542),
        o = i(98342),
        c = i(63394),
        d = i(67868),
        u = i(44660),
        m = i(66563),
        _ = i.n(m);
      let k = (0, n.Pi)((e) => {
        let {
            className: t,
            track: i,
            meta: n,
            beforeBlock: m,
            controls: k,
            playButtonCellRender: v,
            withLightning: p,
            isPlaying: C,
            isCurrent: x,
            togglePlay: f,
            restartPlay: y,
            ...b
          } = e,
          { formatMessage: h } = (0, s.Z)(),
          { ref: g, intersectionPropertyId: T } = (0, c.Vf)(),
          j = (0, u.useTrackDisclaimer)({ track: i, callback: f }),
          { sendPlaySearchFeedback: N } = (0, c.sA)(),
          [D, A] = (0, l.useState)(!1),
          S = (0, l.useCallback)(() => {
            D || C || (A(!0), null == N || N()), j();
          }, [j, C, D, N]),
          E = (0, l.useCallback)(() => {
            C ? y() : S();
          }, [C, y, S]),
          I = (0, l.useCallback)(
            (e) => {
              2 === e.detail ? E() : (0, o.m)(e, _().ripple);
            },
            [E],
          ),
          P =
            null == v
              ? void 0
              : v({ onPlayButtonClick: S, isPlaying: C, isCurrent: x }),
          L = (0, l.useMemo)(() => {
            var e;
            if (!i.isAvailable)
              return ""
                .concat(h({ id: "extra-explicit.play-unavailable" }), " ")
                .concat(i.artistsNames, " ")
                .concat(i.title);
            let t = p ? h({ id: "entity-names.popular-among-users" }) : "";
            return ""
              .concat(i.artistsNames, " ")
              .concat(i.title, " ")
              .concat(null !== (e = i.version) && void 0 !== e ? e : "", " ")
              .concat(t);
          }, [h, i.artistsNames, i.isAvailable, i.title, i.version, p]);
        return (0, a.jsxs)(d.Md, {
          ref: g,
          "aria-label": L,
          "data-intersection-property-id": T,
          onClick: I,
          className: (0, r.W)(
            _().root,
            { [_().root_disabled]: !i.isAvailable },
            t,
          ),
          ...b,
          children: [m, P, n, k],
        });
      });
    },
    99846: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackCard: function () {
          return j;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(23881),
        d = i(84338),
        u = i(69869),
        m = i(39513),
        _ = i(27491),
        k = i(28852),
        v = i(12404),
        p = i(2570),
        C = i(33589),
        x = i(77070),
        f = i(63394),
        y = i(67868),
        b = i(44660),
        h = i(2648),
        g = i(98129),
        T = i.n(g);
      let j = (0, n.Pi)((e) => {
        let {
            className: t,
            children: i,
            track: n,
            contentLinesCount: g,
            overrideContextType: j,
          } = e,
          N = (0, f.x5)(),
          { formatMessage: D } = (0, s.Z)(),
          [A, S] = (0, l.useState)(!1),
          [E, I] = (0, l.useState)(!1),
          [P, L] = (0, l.useState)(!1),
          { sendLikeSearchFeedback: R, sendPlaySearchFeedback: B } = (0,
          f.sA)(),
          M = (0, x.SB)(n),
          [O, V] = (0, l.useState)(!1),
          U = (0, l.useMemo)(() => {
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
          G = n.albumId ? "".concat(n.id, ":").concat(n.albumId) : n.id,
          w = n.albumId && n.trackSource === u.zu.OWN && n.isAvailable,
          { isPlaying: W, togglePlay: z } = (0, f.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Various,
                meta: { id: G },
                from: N,
                overrideContextType: j,
              },
              queueParams: { index: 0 },
              loadContextMeta: !0,
            },
            entityId: G,
          }),
          K = (0, b.useTrackDisclaimer)({ track: n }),
          F = (0, b.useTrackDisclaimer)({ track: n, callback: z }),
          Z = (0, l.useCallback)(
            (e) => {
              K(e);
            },
            [K],
          ),
          J = (0, l.useCallback)(() => {
            A || W || (S(!0), null == B || B()), F();
          }, [W, A, B, F]),
          Y = (0, l.useCallback)(() => {
            E || n.isLiked || (I(!0), null == R || R()), M();
          }, [M, E, R, n.isLiked]),
          H = (0, l.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          X = (0, l.useCallback)(() => {
            L(!P), V(!P);
          }, [P]),
          $ = (0, l.useMemo)(() => {
            var e;
            return (0, a.jsxs)(p.Caption, {
              className: (0, r.W)(T().titleContainer, {
                [T().titleContainer_withVersion]: n.version,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              children: [
                w
                  ? (0, a.jsx)(y.rU, {
                      "aria-label": ""
                        .concat(n.title, " ")
                        .concat(
                          null !== (e = n.version) && void 0 !== e ? e : "",
                        ),
                      className: T().titleLink,
                      href: "/album/".concat(n.albumId),
                      onClick: Z,
                      children: n.title,
                    })
                  : (0, a.jsx)(p.Caption, {
                      className: T().title,
                      variant: "span",
                      onClick: Z,
                      children: n.title,
                    }),
                n.version &&
                  (0, a.jsx)(p.Caption, {
                    className: T().version,
                    variant: "span",
                    children: " ".concat(n.version),
                  }),
              ],
            });
          }, [n.title, n.version, w, Z, n.albumId]),
          q = (0, l.useMemo)(() => {
            var e;
            return w
              ? (0, a.jsx)(y.rU, {
                  href: "/album/".concat(n.albumId),
                  onClick: Z,
                  children: ""
                    .concat(n.title, " ")
                    .concat(null !== (e = n.version) && void 0 !== e ? e : ""),
                })
              : null;
          }, [n.title, n.version, n.albumId, w, Z]),
          Q = (0, l.useMemo)(
            () =>
              (0, a.jsx)(h.TrackContextMenu, {
                placement: "bottom",
                track: n,
                onOpenChange: X,
                open: P,
                returnFocus: !1,
                reference: (0, a.jsx)(m.z, {
                  onClick: H,
                  className: (0, r.W)(T().menuButton, T().control),
                  "aria-label": D({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(k.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.track.TRACK_CONTEXT_MENU_BUTTON),
                }),
              }),
            [D, H, X, P, n],
          ),
          ee = (0, l.useMemo)(() => {
            if (n.isAvailable)
              return (0, a.jsx)(_.kk, {
                isVisible: P || O,
                className: T().controls,
                labelText: (0, a.jsx)(o.Z, { id: "entity-names.track" }),
                playControl: (0, a.jsx)(y.JM, {
                  className: (0, r.W)(T().playButton, T().control),
                  buttonVariant: "default",
                  withHover: !1,
                  iconSize: "xl",
                  variant: "filled",
                  isPlaying: W,
                  onClick: J,
                }),
                likeControl: (0, a.jsx)(y.dJ, {
                  className: (0, r.W)(T().likeButton, T().control),
                  isLiked: n.isLiked,
                  onClick: Y,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: Q,
              });
          }, [Q, Y, J, P, O, W, n.isAvailable, n.isLiked]),
          et = (0, l.useMemo)(
            () =>
              (0, a.jsx)(v.Paper, {
                className: T().cover,
                radius: "l",
                withShadow: !0,
                onClick: Z,
                children: (0, a.jsxs)("div", {
                  className: T().coverBlock,
                  children: [
                    (0, a.jsx)(y.BE, {
                      className: T().image,
                      src: n.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: U,
                      withAvatarReplace: !0,
                      isAvailable: n.isAvailable,
                      "aria-hidden": !0,
                    }),
                    ee,
                  ],
                }),
              }),
            [ee, Z, n.coverUri, n.isAvailable, U],
          );
        return (0, a.jsx)(_.m7, {
          className: (0, r.W)(T().root, t),
          "aria-label": U,
          explicitMark: n.trackExplicitMark,
          title: $,
          srTitle: q,
          contentLinesCount: g,
          view: et,
          description: (0, a.jsx)(C.jO, {
            className: T().artists,
            artists: n.artists,
            lineClamp: 1,
            linkClassName: T().artistLink,
            captionSize: "s",
            withLink: !n.isUGC,
          }),
          children: i,
        });
      });
    },
    639: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackAlbum: function () {
          return k;
        },
      });
      var a = i(9753),
        r = i(9544),
        n = i(98639),
        l = i(23881),
        s = i(63394),
        o = i(93393),
        c = i(72280),
        d = i(9374),
        u = i(60808),
        m = i(55491),
        _ = i.n(m);
      let k = (0, r.Pi)((e) => {
        let {
            track: t,
            albumArtists: i,
            position: r,
            playContextParams: m,
            withLightning: k,
          } = e,
          v = (0, s.qm)({ playContextParams: m, entityId: t.entityId }),
          p = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(d.e, {
                track: t,
                position: r,
                className: _().playButtonCell,
                ...e,
              }),
            [t, r],
          );
        return (0, a.jsx)(u.f, {
          track: t,
          withLightning: k,
          meta: (0, a.jsx)(c.TrackMeta, { albumArtists: i, track: t }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: k,
            track: t,
            className: _().controlsBarCell,
          }),
          ...v,
          ...(0, l.BA)(l.bG.track.TRACK_ALBUM),
        });
      });
    },
    37379: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrailerTrackAlbum: function () {
          return k;
        },
      });
      var a = i(9753),
        r = i(9544),
        n = i(98639),
        l = i(23881),
        s = i(63394),
        o = i(93393),
        c = i(72280),
        d = i(9374),
        u = i(60808),
        m = i(55491),
        _ = i.n(m);
      let k = (0, r.Pi)((e) => {
        let {
            track: t,
            albumArtists: i,
            position: r,
            playContextParams: m,
            withLightning: k,
          } = e,
          v = (0, s.bA)({ playContextParams: m, entityId: t.entityId }),
          p = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(d.e, {
                track: t,
                position: r,
                className: _().playButtonCell,
                ...e,
              }),
            [t, r],
          );
        return (0, a.jsx)(u.f, {
          track: t,
          withLightning: k,
          meta: (0, a.jsx)(c.TrackMeta, { albumArtists: i, track: t }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: k,
            track: t,
            className: _().controlsBarCell,
          }),
          ...v,
          ...(0, l.BA)(l.bG.track.TRACK_ALBUM),
        });
      });
    },
    96414: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackChart: function () {
          return v;
        },
      });
      var a = i(9753),
        r = i(9544),
        n = i(98639),
        l = i(23881),
        s = i(94342),
        o = i(63394),
        c = i(67868),
        d = i(93393),
        u = i(72280),
        m = i(60808),
        _ = i(61383),
        k = i.n(_);
      let v = (0, r.Pi)((e) => {
        var t, i;
        let { track: r, playContextParams: _ } = e,
          v = (0, o.qm)({ playContextParams: _, entityId: r.entityId }),
          p = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(c.Df, {
                isAvailable: r.isAvailable,
                isDisliked: r.isDisliked,
                coverUri: r.coverUri,
                title: r.title,
                className: k().playButtonCell,
                ...e,
              }),
            [r],
          );
        return (0, a.jsx)(m.f, {
          track: r,
          meta: (0, a.jsx)(u.TrackMeta, { track: r }),
          beforeBlock: (0, a.jsx)(s.kL, {
            className: k().chartCell,
            progress:
              null === (t = r.chart) || void 0 === t ? void 0 : t.progress,
            position:
              null === (i = r.chart) || void 0 === i ? void 0 : i.position,
            isDisliked: r.isDisliked,
            isDisabled: !r.isAvailable,
          }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(d.ControlsBar, {
            track: r,
            className: k().controlsBarCell,
          }),
          ...v,
          ...(0, l.BA)(l.bG.track.TRACK_CHART),
        });
      });
    },
    1776: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackPlaylist: function () {
          return p;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        s = i(23881),
        o = i(63394),
        c = i(67868),
        d = i(54355),
        u = i(93393),
        m = i(72280),
        _ = i(60808),
        k = i(25803),
        v = i.n(k);
      let p = (0, n.Pi)((e) => {
        let {
            track: t,
            playContextParams: i,
            className: n,
            withDNDBlock: k,
            isDragging: p,
            draggingClassName: C,
            ignoreDislikedStyles: x,
          } = e,
          f = (0, o.qm)({ playContextParams: i, entityId: t.entityId }),
          y = (0, l.useCallback)(
            (e) =>
              (0, a.jsx)(c.Df, {
                isAvailable: t.isAvailable,
                isDisliked: t.isDisliked,
                coverUri: t.coverUri,
                title: t.title,
                className: v().playButtonCell,
                ignoreDislikedStyles: x,
                ...e,
              }),
            [x, t.coverUri, t.isAvailable, t.isDisliked, t.title],
          );
        return (0, a.jsx)(_.f, {
          className: (0, r.W)(n, { [v().trackWithDots]: k }),
          track: t,
          beforeBlock: k
            ? (0, a.jsx)(d.x, {
                className: (0, r.W)(v().dots, C),
                isDragging: p,
              })
            : void 0,
          meta: (0, a.jsx)(m.TrackMeta, { track: t, ignoreDislikedStyles: x }),
          playButtonCellRender: y,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: t,
            className: v().controlsBarCell,
            ignoreDislikedStyles: x,
          }),
          ...f,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    71456: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrailerTrackPlaylist: function () {
          return k;
        },
      });
      var a = i(9753),
        r = i(9544),
        n = i(98639),
        l = i(23881),
        s = i(63394),
        o = i(67868),
        c = i(93393),
        d = i(72280),
        u = i(60808),
        m = i(25803),
        _ = i.n(m);
      let k = (0, r.Pi)((e) => {
        let { track: t, playContextParams: i } = e,
          r = (0, s.bA)({ playContextParams: i, entityId: t.entityId }),
          m = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(o.Df, {
                isAvailable: t.isAvailable,
                isDisliked: t.isDisliked,
                coverUri: t.coverUri,
                title: t.title,
                className: _().playButtonCell,
                ...e,
              }),
            [t],
          );
        return (0, a.jsx)(u.f, {
          track: t,
          meta: (0, a.jsx)(d.TrackMeta, { track: t }),
          playButtonCellRender: m,
          controls: (0, a.jsx)(c.ControlsBar, {
            track: t,
            className: _().controlsBarCell,
          }),
          ...r,
          ...(0, l.BA)(l.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    5670: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackPlaylistAddition: function () {
          return p;
        },
      });
      var a = i(9753),
        r = i(9544),
        n = i(98639),
        l = i(80542),
        s = i(23881),
        o = i(39513),
        c = i(28852),
        d = i(63394),
        u = i(67868),
        m = i(72280),
        _ = i(60808),
        k = i(98387),
        v = i.n(k);
      let p = (0, r.Pi)((e) => {
        let { className: t, track: i, playContextParams: r, onClick: k } = e,
          { formatMessage: p } = (0, l.Z)(),
          C = (0, d.qm)({ playContextParams: r, entityId: i.entityId }),
          x = (0, n.useCallback)(
            (e) =>
              (0, a.jsx)(u.Df, {
                isAvailable: i.isAvailable,
                isDisliked: i.isDisliked,
                coverUri: i.coverUri,
                title: i.title,
                className: v().playButtonCell,
                ...e,
              }),
            [i],
          ),
          f = (0, n.useCallback)(() => {
            null == k || k(i);
          }, [i, k]),
          y = (0, n.useMemo)(
            () =>
              (0, a.jsx)("div", {
                className: v().controls,
                children: (0, a.jsx)(o.z, {
                  className: v().button,
                  variant: "text",
                  size: "xs",
                  radius: "xxxl",
                  "aria-label": p({
                    id: "interface-actions.add-track-to-playlist",
                  }),
                  onClick: f,
                  icon: (0, a.jsx)(c.J, { size: "xxs", variant: "add" }),
                }),
              }),
            [p, f],
          );
        return (0, a.jsx)(_.f, {
          className: t,
          track: i,
          meta: (0, a.jsx)(m.TrackMeta, { track: i }),
          playButtonCellRender: x,
          controls: y,
          ...C,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST_ADDITION),
        });
      });
    },
    11516: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackPodcast: function () {
          return p;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        s = i(23881),
        o = i(63394),
        c = i(67868),
        d = i(54355),
        u = i(93393),
        m = i(53961),
        _ = i(60808),
        k = i(77596),
        v = i.n(k);
      let p = (0, n.Pi)((e) => {
        let {
            track: t,
            playContextParams: i,
            withPodcastName: n = !1,
            className: k,
            withDNDBlock: p,
            isDragging: C,
            draggingClassName: x,
            withTimeLeftText: f,
            ignoreDislikedStyles: y,
          } = e,
          b = (0, o.qm)({ playContextParams: i, entityId: t.entityId }),
          h = (0, l.useCallback)(
            (e) =>
              (0, a.jsx)(c.Df, {
                isAvailable: t.isAvailable,
                isDisliked: t.isDisliked,
                coverUri: t.coverUri,
                title: t.title,
                className: v().playButtonCell,
                ignoreDislikedStyles: y,
                ...e,
              }),
            [y, t.coverUri, t.isAvailable, t.isDisliked, t.title],
          );
        return (0, a.jsx)(_.f, {
          className: (0, r.W)(k, { [v().trackWithDots]: p }),
          track: t,
          meta: (0, a.jsx)(m.PodcastMeta, {
            track: t,
            playContextParams: i,
            withPodcastName: n,
            withListeningProgress: !0,
            withTimeLeftText: f,
            ignoreDislikedStyles: y,
          }),
          playButtonCellRender: h,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: t,
            className: v().controlsBarCell,
            ignoreDislikedStyles: y,
          }),
          beforeBlock: p
            ? (0, a.jsx)(d.x, {
                className: (0, r.W)(v().dots, x),
                isDragging: C,
              })
            : void 0,
          ...b,
          ...(0, s.BA)(s.bG.track.TRACK_PODCAST),
        });
      });
    },
    62452: function (e) {
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
    8554: function (e) {
      e.exports = {
        root: "DisclaimerModal_root__sidbk",
        content: "DisclaimerModal_content___tRvp",
      };
    },
    27908: function (e) {
      e.exports = {
        root: "ListeningProgress_root__Rvlcn",
        text: "ListeningProgress_text__JQRFJ",
        text_withTimeLeft: "ListeningProgress_text_withTimeLeft__2G9_d",
        checkIcon: "ListeningProgress_checkIcon___yh49",
      };
    },
    47283: function (e) {
      e.exports = {
        message: "NotificationDislike_message__R2jfZ",
        text: "NotificationDislike_text__xmrnn",
        cover: "NotificationDislike_cover__bvqFM",
        image: "NotificationDislike_image__h0_EO",
      };
    },
    81032: function (e) {
      e.exports = {
        root: "DragAndDropIcon_root__OstQU",
        root_active: "DragAndDropIcon_root_active__xOTKt",
      };
    },
    26889: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__5HK2B",
        item: "ControlsBar_item__I_p99",
        contextMenu: "ControlsBar_contextMenu__8AFkQ",
        contextMenu_visible: "ControlsBar_contextMenu_visible__PYW8h",
        contextMenuWrapper: "ControlsBar_contextMenuWrapper__NHkn_",
        lightning: "ControlsBar_lightning__GBl7O",
        duration: "ControlsBar_duration__RawSk",
        duration_hidden: "ControlsBar_duration_hidden__szTkk",
        controls: "ControlsBar_controls__3nXlz",
        dislikeIcon: "ControlsBar_dislikeIcon__ENXh_",
        controls_disabled: "ControlsBar_controls_disabled__5KRgJ",
        explicitMark: "ControlsBar_explicitMark__w9l80",
        controls_dislikedControls:
          "ControlsBar_controls_dislikedControls__XvkXb",
        likeIcon: "ControlsBar_likeIcon__mrNiz",
        controls_dislikedColors: "ControlsBar_controls_dislikedColors__22gsG",
        popover: "ControlsBar_popover__WrYMt",
      };
    },
    41894: function (e) {
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
    14795: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        explicitMark: "PodcastMeta_explicitMark__IstkP",
        dateWithName: "PodcastMeta_dateWithName__cKy0o",
        podcastMetaContainer: "PodcastMeta_podcastMetaContainer__pFASj",
        podcastTitleContainer: "PodcastMeta_podcastTitleContainer__p9Zja",
        podcastName: "PodcastMeta_podcastName__iQeNK",
        progress: "PodcastMeta_progress__5DqlO",
        progress_disabled: "PodcastMeta_progress_disabled__KX04q",
        progress_withPreviousInfo:
          "PodcastMeta_progress_withPreviousInfo__eOrCi",
        soonDate: "PodcastMeta_soonDate__zGuG9",
        dateDisabled: "PodcastMeta_dateDisabled__DxjtJ",
        dateDisliked: "PodcastMeta_dateDisliked__95MlL",
      };
    },
    33273: function (e) {
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
    56819: function (e) {
      e.exports = {
        root: "ContextSubMenuAddToPlaylist_root__ZGm6z",
        content: "ContextSubMenuAddToPlaylist_content__isTx4",
        virtualScroll: "ContextSubMenuAddToPlaylist_virtualScroll__SJG3e",
        important: "ContextSubMenuAddToPlaylist_important__OUL53",
        shimmer: "ContextSubMenuAddToPlaylist_shimmer__uQHAL",
      };
    },
    66563: function (e) {
      e.exports = {
        root: "Track_root__dbDjD",
        root_disabled: "Track_root_disabled__53T42",
        ripple: "Track_ripple__f8iBh",
      };
    },
    98129: function (e) {
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
    55491: function (e) {
      e.exports = {
        playButtonCell: "TrackAlbum_playButtonCell__pLJte",
        controlsBarCell: "TrackAlbum_controlsBarCell__XUUCc",
      };
    },
    61383: function (e) {
      e.exports = {
        playButtonCell: "TrackChart_playButtonCell__cvY7u",
        controlsBarCell: "TrackChart_controlsBarCell__Xd5pn",
        chartCell: "TrackChart_chartCell__33_al",
      };
    },
    25803: function (e) {
      e.exports = {
        playButtonCell: "TrackPlaylist_playButtonCell__Q6YT_",
        controlsBarCell: "TrackPlaylist_controlsBarCell__6clda",
        dots: "TrackPlaylist_dots__nLYej",
        trackWithDots: "TrackPlaylist_trackWithDots__EU6LD",
      };
    },
    98387: function (e) {
      e.exports = {
        playButtonCell: "TrackPlaylistAddition_playButtonCell__Ocnhq",
        controls: "TrackPlaylistAddition_controls__S346Y",
        button: "TrackPlaylistAddition_button__fsY9k",
      };
    },
    77596: function (e) {
      e.exports = {
        playButtonCell: "TrackPodcast_playButtonCell___b_gp",
        controlsBarCell: "TrackPodcast_controlsBarCell__dwTYj",
        dots: "TrackPodcast_dots__zPetf",
        trackWithDots: "TrackPodcast_trackWithDots__RglTQ",
      };
    },
    23476: function (e) {
      e.exports = {
        navigateToAlbumIcon: "ContextMenuItem_navigateToAlbumIcon__rB5Zh",
      };
    },
  },
]);
