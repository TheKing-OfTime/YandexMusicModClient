(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3472],
  {
    98342: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return n;
        },
      });
      var a = {};
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createRipple = void 0),
        (a.createRipple = function (t, e, i) {
          let a = null != i ? i : t.currentTarget,
            n = document.createElement("span"),
            l = Math.max(a.clientWidth, a.clientHeight),
            r = l / 2,
            s = a.getBoundingClientRect(),
            o = 0 === t.clientX ? Math.round(s.width / 2) : t.clientX - s.left,
            c = 0 === t.clientY ? Math.round(s.height / 2) : t.clientY - s.top;
          (n.style.width = "".concat(l, "px")),
            (n.style.height = "".concat(l, "px")),
            (n.style.left = 0 === t.clientX ? "0px" : "".concat(o - r, "px")),
            (n.style.top = "".concat(c - r, "px")),
            n.classList.add(e);
          let d = a.getElementsByClassName(e)[0];
          d && d.remove(), a.insertBefore(n, a.firstChild);
        }),
        a.__esModule;
      var n = a.createRipple;
    },
    20121: function (t, e, i) {
      "use strict";
      i.d(e, {
        em: function () {
          return j;
        },
        F8: function () {
          return A;
        },
        nU: function () {
          return u;
        },
        $H: function () {
          return r;
        },
      });
      var a = i(98639),
        n = i(3429),
        l = i(63394);
      let r = (t) => {
        let {
            entityType: e,
            isLegalRejected: i,
            isUnsafeLegal: r,
            entityId: s,
            callback: o,
          } = t,
          {
            disclaimer: c,
            modals: { disclaimerModal: d },
          } = (0, l.oR)(),
          u = (0, a.useRef)(String((0, n.Z)())),
          m = (0, a.useRef)(!1),
          k = (0, l.uK)().get(l.ce);
        return (
          (0, a.useEffect)(() => {
            c.isUnsafeDisclaimerConfirmed &&
              c.id === u.current &&
              !m.current &&
              (null == o || o(), (m.current = !0));
          }, [o, c.isUnsafeDisclaimerConfirmed, c.id]),
          (0, a.useCallback)(
            async (t) => {
              if (s && (i || r)) {
                let i = k.get(l.BU.ExEx);
                if (
                  r &&
                  (null == i ? void 0 : i.includes("".concat(e, "_").concat(s)))
                ) {
                  null == o || o();
                  return;
                }
                switch ((t.preventDefault(), e)) {
                  case l.co.ARTIST:
                    await c.getArtistDisclaimer({ artistId: String(s) });
                    break;
                  case l.co.ALBUM:
                  case l.co.PODCAST:
                    await c.getAlbumDisclaimer({ albumId: Number(s) });
                    break;
                  case l.co.TRACK:
                    await c.getTrackDisclaimer({ trackId: String(s) });
                }
                r && c.setType(l.Gq.UNSAFE),
                  c.setId(u.current),
                  c.setEntityId(s),
                  c.setEntityType(e),
                  (m.current = !1),
                  d.open();
                return;
              }
              null == o || o();
            },
            [o, c, d, s, e, i, r, k],
          )
        );
      };
      var s = i(42288);
      let o = (t) =>
          t.details
            ? (0, s.pj)({
                title: t.title,
                description: t.description,
                details: { text: t.details.text, url: t.details.url },
              })
            : (0, s.pj)({ title: t.title, description: t.description }),
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
          loadingState: s.V5.enumeration(Object.values(l.Gu)),
          data: s.V5.maybeNull(d),
          type: s.V5.maybeNull(s.V5.enumeration(Object.values(l.Gq))),
          id: s.V5.maybeNull(s.V5.string),
          entityType: s.V5.maybeNull(s.V5.enumeration(Object.values(l.co))),
          entityId: s.V5.maybeNull(s.V5.union(s.V5.string, s.V5.number)),
          isUnsafeDisclaimerConfirmed: s.V5.optional(s.V5.boolean, !1),
          shouldHistoryBack: s.V5.optional(s.V5.boolean, !1),
        })
          .views((t) => ({
            get isLoading() {
              return (
                t.loadingState === l.Gu.IDLE || t.loadingState === l.Gu.PENDING
              );
            },
            get isRejected() {
              return t.loadingState === l.Gu.REJECT;
            },
          }))
          .actions((t) => ({
            getArtistDisclaimer: (0, s.ls)(function* (e) {
              let { artistId: i } = e,
                { artistsResource: a, modelActionsLogger: n } = (0, s.dU)(t);
              if (t.loadingState !== l.Gu.PENDING)
                try {
                  t.loadingState = l.Gu.PENDING;
                  let e = yield a.getDisclaimer({ artistId: i });
                  e.modal && (t.data = o(e.modal)),
                    t.loadingState !== l.Gu.IDLE &&
                      (t.loadingState = l.Gu.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gu.IDLE &&
                      (t.loadingState = l.Gu.REJECT);
                }
            }),
            getAlbumDisclaimer: (0, s.ls)(function* (e) {
              let { albumId: i } = e,
                { albumResource: a, modelActionsLogger: n } = (0, s.dU)(t);
              if (t.loadingState !== l.Gu.PENDING)
                try {
                  t.loadingState = l.Gu.PENDING;
                  let e = yield a.getDisclaimer({ albumId: i });
                  e.modal && (t.data = o(e.modal)),
                    t.loadingState !== l.Gu.IDLE &&
                      (t.loadingState = l.Gu.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gu.IDLE &&
                      (t.loadingState = l.Gu.REJECT);
                }
            }),
            getTrackDisclaimer: (0, s.ls)(function* (e) {
              let { trackId: i } = e,
                { tracksResource: a, modelActionsLogger: n } = (0, s.dU)(t);
              if (t.loadingState !== l.Gu.PENDING)
                try {
                  t.loadingState = l.Gu.PENDING;
                  let e = yield a.getDisclaimer({ trackId: i });
                  e.modal && (t.data = o(e.modal)),
                    t.loadingState !== l.Gu.IDLE &&
                      (t.loadingState = l.Gu.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gu.IDLE &&
                      (t.loadingState = l.Gu.REJECT);
                }
            }),
            setId(e) {
              t.id = e;
            },
            setType(e) {
              t.type = e;
            },
            setEntityType(e) {
              t.entityType = e;
            },
            setEntityId(e) {
              t.entityId = e;
            },
            setConfirmUnsafeDisclaimer(e) {
              t.isUnsafeDisclaimerConfirmed = e;
            },
            setShouldHistoryBack(e) {
              t.shouldHistoryBack = e;
            },
            reset() {
              (t.loadingState = l.Gu.IDLE),
                (t.data = null),
                (t.id = null),
                (t.type = null),
                (t.entityType = null),
                (t.entityId = null),
                (t.isUnsafeDisclaimerConfirmed = !1),
                (t.shouldHistoryBack = !1);
            },
          }));
      var m = i(9753),
        k = i(60836),
        v = i(9544),
        _ = i(31014),
        p = i(23881),
        x = i(39513),
        C = i(90679),
        y = i(2570),
        b = i(67868),
        f = i(62452),
        h = i.n(f);
      let g = {
          [l.co.ALBUM]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-album",
          }),
          [l.co.PODCAST]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-podcast",
          }),
          [l.co.ARTIST]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-artist",
          }),
          [l.co.TRACK]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-track",
          }),
        },
        j = (0, v.Pi)((t) => {
          var e, i, n, r;
          let { disclaimer: s, onClose: o, className: c } = t,
            { data: d, isLoading: u } = null != s ? s : {},
            { href: v } = (0, l.zB)(
              null !==
                (r =
                  null == s
                    ? void 0
                    : null === (i = s.data) || void 0 === i
                      ? void 0
                      : null === (e = i.details) || void 0 === e
                        ? void 0
                        : e.url) && void 0 !== r
                ? r
                : "",
            ),
            f = (0, l.k6)(),
            j = (0, l.s0)("/"),
            N = (0, l.uK)().get(l.ce),
            T = (0, a.useCallback)(() => {
              if (o) return o();
              f.canBack && f.back(), j();
            }, [o, f, j]),
            D =
              (null == d
                ? void 0
                : null === (n = d.details) || void 0 === n
                  ? void 0
                  : n.url) && d.details.text,
            A = (0, a.useCallback)(() => {
              null == s || s.setConfirmUnsafeDisclaimer(!0);
              let t = N.get(l.BU.ExEx),
                e = new Date(),
                i = e.setMinutes(e.getMinutes() + 15);
              t
                ? N.set(
                    l.BU.ExEx,
                    [
                      ...t,
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  )
                : N.set(
                    l.BU.ExEx,
                    [
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  ),
                null == o || o();
            }, [s, N, o]),
            E = (0, a.useCallback)(() => {
              (null == s ? void 0 : s.shouldHistoryBack)
                ? (null == o || o(), f.canBack && f.back(), j())
                : null == o || o();
            }, [null == s ? void 0 : s.shouldHistoryBack, f, j, o]);
          (0, a.useEffect)(
            () => () => {
              null == s || s.reset();
            },
            [s],
          );
          let I = (0, a.useMemo)(() => {
              if (u)
                return (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(C.Shimmer, {
                      radius: "l",
                      width: 200,
                      height: 24,
                      className: h().shimmer,
                    }),
                    (0, m.jsx)(C.Shimmer, {
                      radius: "l",
                      width: 250,
                      height: 16,
                      className: h().shimmer,
                    }),
                  ],
                });
              if (d && !u) {
                var t;
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
                    D &&
                      (0, m.jsx)(b.rU, {
                        href: v,
                        className: h().link,
                        children: (0, m.jsx)(y.Caption, {
                          variant: "span",
                          size: "l",
                          weight: "normal",
                          children:
                            null === (t = d.details) || void 0 === t
                              ? void 0
                              : t.text,
                        }),
                      }),
                  ],
                });
              }
            }, [u, d, v, D]),
            S = (0, a.useMemo)(
              () =>
                u
                  ? (0, m.jsx)(C.Shimmer, {
                      radius: "xl",
                      width: 190,
                      height: 50,
                      className: h().shimmer,
                    })
                  : (null == s ? void 0 : s.type) === l.Gq.UNSAFE
                    ? (0, m.jsxs)("div", {
                        className: h().buttons,
                        children: [
                          (0, m.jsx)(x.z, {
                            color: "primary",
                            onClick: E,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: (0, m.jsx)(_.Z, {
                              id: "extra-explicit.reject-unsafe-entity",
                            }),
                          }),
                          (0, m.jsx)(x.z, {
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
                        children: (0, m.jsx)(x.z, {
                          color: "primary",
                          onClick: T,
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
                A,
                null == s ? void 0 : s.entityType,
                null == s ? void 0 : s.type,
                T,
                u,
                E,
              ],
            );
          return (0, m.jsx)("div", {
            className: (0, k.W)(h().root, c),
            ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_MODAL),
            children: (0, m.jsxs)("div", {
              className: h().container,
              children: [I, S],
            }),
          });
        });
      var N = i(89352),
        T = i(8554),
        D = i.n(T);
      let A = (0, v.Pi)(() => {
        let {
          disclaimer: t,
          modals: { disclaimerModal: e },
        } = (0, l.oR)();
        return (0, m.jsx)(N.u, {
          size: "fitContent",
          placement: "center",
          open: e.isOpened,
          onOpenChange: e.onOpenChange,
          onClose: e.close,
          showHeader: !1,
          className: D().root,
          contentClassName: D().content,
          children: (0, m.jsx)(j, { disclaimer: t, onClose: e.close }),
        });
      });
    },
    8957: function (t, e, i) {
      "use strict";
      i.d(e, {
        yp: function () {
          return o;
        },
        bP: function () {
          return _;
        },
        Yc: function () {
          return v.NotificationLike;
        },
        v$: function () {
          return c;
        },
        Ni: function () {
          return u;
        },
        tx: function () {
          return x.t;
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
      var a = i(42288),
        n = i(21585),
        l = i(63394),
        r = i(58421);
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
            trackSource: a.V5.maybe(a.V5.enumeration(Object.values(n.zu))),
            version: a.V5.maybe(a.V5.string),
            durationMs: a.V5.maybe(a.V5.number),
            coverUri: a.V5.maybe(a.V5.string),
            averageColor: a.V5.maybe(a.V5.string),
            trackParameters: a.V5.maybe(s),
            albumId: a.V5.maybe(a.V5.number),
            disclaimers: a.V5.maybe(a.V5.array(a.V5.string)),
            type: a.V5.maybe(a.V5.enumeration(Object.values(n.Vc))),
            pubDate: a.V5.maybe(a.V5.string),
            hasSyncLyrics: a.V5.maybe(a.V5.boolean),
            hasTrailer: a.V5.optional(a.V5.boolean, !1),
          }),
          r.ie,
        )
          .views((t) => ({
            get isLiked() {
              if ((0, a.fh)(t)) {
                let { library: e } = (0, a.yj)(t);
                return e.isTrackLiked(t.id);
              }
              return !1;
            },
            get url() {
              if (t.albumId)
                return "/album/".concat(t.albumId, "/track/").concat(t.id);
              return "/track/".concat(t.id);
            },
            get isDisliked() {
              if ((0, a.fh)(t)) {
                let { library: e } = (0, a.yj)(t);
                return e.isTrackDisliked(t.id);
              }
              return !1;
            },
            get isTrackPodcast() {
              if ((0, a.fh)(t)) return n.Vc.PODCAST === t.type;
              return !1;
            },
            get isUGC() {
              if ((0, a.fh)(t)) return t.trackSource === n.zu.UGC;
              return;
            },
            get seeds() {
              return ["track:".concat(t.id)];
            },
            get isLegalRejected() {
              if (!(0, a.fh)(t)) return !1;
              let { experiments: e } = (0, a.yj)(t),
                i = e.checkExperiment(l.pe.WebNextLegalRejectTrack, "on");
              if (t.disclaimers && i)
                return !t.isAvailable && t.disclaimers.includes(n.em.MODAL);
              return !1;
            },
            get isUnsafeLegal() {
              if (!(0, a.fh)(t)) return !1;
              let { experiments: e } = (0, a.yj)(t),
                i = e.checkExperiment(l.pe.WebNextLegalUnsafeTrack, "on");
              if (t.disclaimers && i)
                return t.isAvailable && t.disclaimers.includes(n.em.MODAL);
              return !1;
            },
            get entityId() {
              if (t.albumId) return "".concat(t.id, ":").concat(t.albumId);
              return t.id;
            },
          }))
          .actions((t) => ({
            afterCreate() {
              t.trackType = t.type;
            },
            toggleLike: (0, a.ls)(function* () {
              if (!(0, a.fh)(t)) return;
              let { library: e, user: i } = (0, a.yj)(t);
              if (i.isAuthorized)
                return yield e.toggleTrackLike({
                  entityId: t.id,
                  albumId: t.albumId,
                  userId: i.account.uid,
                });
            }),
            toggleDislike: (0, a.ls)(function* () {
              if (!(0, a.fh)(t)) return;
              let { library: e, user: i } = (0, a.yj)(t);
              if (i.isAuthorized)
                return yield e.toggleTrackDislike({
                  entityId: t.id,
                  albumId: t.albumId,
                  userId: i.account.uid,
                });
            }),
          })),
        c = a.V5.model("Ugc"),
        d = (t) =>
          (0, a.pj)({
            bpm: null == t ? void 0 : t.bpm,
            energy: null == t ? void 0 : t.energy,
            hue: null == t ? void 0 : t.hue,
            userCollectionHue: null == t ? void 0 : t.userCollectionHue,
          }),
        u = (t, e) => {
          var i, r, s, o, c, u;
          t = t || {};
          let { isSmartPreview: m } = e || {},
            k = (0, l.Us)(null == t ? void 0 : t.derivedColors),
            v = m
              ? null === (i = t.smartPreviewParams) || void 0 === i
                ? void 0
                : i.durationMs
              : null == t
                ? void 0
                : t.durationMs;
          return (0, a.pj)({
            id: (t.id || 0).toString(),
            isAvailable: !!(null == t ? void 0 : t.available),
            isRemoved: (null == t ? void 0 : t.error) === "not-found",
            title:
              null !== (u = null == t ? void 0 : t.title) && void 0 !== u
                ? u
                : "",
            contentWarning: null == t ? void 0 : t.contentWarning,
            version: null == t ? void 0 : t.version,
            durationMs: v,
            coverUri: null == t ? void 0 : t.coverUri,
            averageColor: k,
            trackParameters: d(null == t ? void 0 : t.trackParameters),
            trackSource: null == t ? void 0 : t.trackSource,
            albumId:
              null === (s = t.albums) || void 0 === s
                ? void 0
                : null === (r = s[0]) || void 0 === r
                  ? void 0
                  : r.id,
            disclaimers: t.disclaimers,
            type: t.type,
            pubDate: t.pubDate,
            hasSyncLyrics:
              null === (o = t.lyricsInfo) || void 0 === o
                ? void 0
                : o.hasAvailableSyncLyrics,
            hasTrailer:
              null === (c = t.specialAudioResources) || void 0 === c
                ? void 0
                : c.includes(n.yA.SMART_PREVIEW),
          });
        };
      var m = i(66757),
        k = i(89263),
        v = i(2057);
      i(83707);
      let _ = a.V5.model("MajorModel", {
          id: a.V5.number,
          name: a.V5.string,
          prettyName: a.V5.maybe(a.V5.string),
        }),
        p = (t) =>
          (0, a.pj)({ id: t.id, name: t.name, prettyName: t.prettyName });
      var x = i(98783);
    },
    98783: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return s;
        },
        t: function () {
          return r;
        },
      });
      var a = i(21585),
        n = i(63394),
        l = i(67868);
      let r = (t, e) => {
          if (!e || !t) return l.j9.TRACK;
          switch (t.type) {
            case a.Vc.PODCAST:
              return l.j9.PODCAST_EPISODE;
            case a.Vc.AUDIOBOOK:
              return l.j9.AUDIOBOOK_EPISODE;
            default:
              return l.j9.TRACK;
          }
        },
        s = (t) => r(t, (0, n.RV)());
    },
    66757: function (t, e, i) {
      "use strict";
      i.d(e, {
        useOnDislikeClick: function () {
          return k;
        },
      });
      var a = i(9753),
        n = i(24244),
        l = i(98639),
        r = i(80542),
        s = i(84338),
        o = i(21585),
        c = i(63394),
        d = i(67868),
        u = i(83707),
        m = i(98783);
      let k = (t) => {
        let { user: e, fullscreenPlayer: i } = (0, c.oR)(),
          k = (0, c.R$)(),
          { notify: v } = (0, c.d$)(),
          [_, p] = (0, l.useState)(!1),
          { formatMessage: x } = (0, r.Z)(),
          C = (0, m.C)(t);
        return (0, l.useCallback)(async () => {
          if (t) {
            let r = i.modal.isOpened ? c.W$.FULLSCREEN_INFO : c.W$.INFO,
              m = i.modal.isOpened ? c.W$.FULLSCREEN_ERROR : c.W$.ERROR;
            if (!e.isAuthorized) {
              v(
                (0, a.jsx)(d.Q, {
                  error: x({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: m },
              );
              return;
            }
            if (_) return;
            let y = { ...(0, n.ZN)(t), isDisliked: !t.isDisliked };
            p(!0);
            let b = await t.toggleDislike();
            if ((p(!1), b === o.Bi.OK)) {
              var l;
              v(
                (0, a.jsx)(u.NotificationDislike, {
                  coverUri: y.coverUri,
                  isDisliked: y.isDisliked,
                  title: y.title,
                  entityVariant: C,
                }),
                { containerId: r },
              );
              let t = y.isDisliked ? o.C.DISLIKE : o.C.UNDISLIKE;
              k &&
                (0, s.xA)(k.state.currentContext.value) &&
                (await k.state.currentContext.value.sendFeedback(
                  k.state.playerState,
                  k.state.queueState,
                  t,
                )),
                y.isDisliked &&
                  y.id ===
                    (null == k
                      ? void 0
                      : null === (l = k.state.queueState.currentEntity.value) ||
                          void 0 === l
                        ? void 0
                        : l.entity.data.meta.id) &&
                  (null == k || k.moveForward());
            } else
              v(
                (0, a.jsx)(d.Q, {
                  error: x({ id: "error-messages.error-during-action" }),
                }),
                { containerId: m },
              );
          }
        }, [x, C, i.modal.isOpened, v, _, k, t, e.isAuthorized]);
      };
    },
    89263: function (t, e, i) {
      "use strict";
      i.d(e, {
        useOnLikeClick: function () {
          return m;
        },
      });
      var a = i(9753),
        n = i(24244),
        l = i(98639),
        r = i(80542),
        s = i(84338),
        o = i(21585),
        c = i(63394),
        d = i(67868),
        u = i(2057);
      let m = (t) => {
        let { user: e, fullscreenPlayer: i } = (0, c.oR)(),
          { notify: m } = (0, c.d$)(),
          [k, v] = (0, l.useState)(!1),
          { formatMessage: _ } = (0, r.Z)(),
          p = (0, c.R$)();
        return (0, l.useCallback)(async () => {
          if (t) {
            let l = i.modal.isOpened ? c.W$.FULLSCREEN_INFO : c.W$.INFO,
              r = i.modal.isOpened ? c.W$.FULLSCREEN_ERROR : c.W$.ERROR;
            if (!e.isAuthorized) {
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
            let x = { ...(0, n.ZN)(t), isLiked: !t.isLiked };
            v(!0);
            let C = await t.toggleLike();
            if ((v(!1), C === o.Bi.OK)) {
              m((0, a.jsx)(u.NotificationLike, { track: x }), {
                containerId: l,
              });
              let t = x.isLiked ? o.C.LIKE : o.C.UNLIKE;
              p &&
                (0, s.xA)(p.state.currentContext.value) &&
                p.state.currentContext.value.sendFeedback(
                  p.state.playerState,
                  p.state.queueState,
                  t,
                );
            } else
              m(
                (0, a.jsx)(d.Q, {
                  error: _({ id: "error-messages.error-during-action" }),
                }),
                { containerId: r },
              );
          }
        }, [_, i.modal.isOpened, m, k, p, t, e.isAuthorized]);
      };
    },
    83707: function (t, e, i) {
      "use strict";
      i.d(e, {
        NotificationDislike: function () {
          return m;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(98639),
        r = i(31014),
        s = i(12404),
        o = i(2570),
        c = i(67868),
        d = i(47283),
        u = i.n(d);
      let m = (t) => {
        let {
            coverUri: e,
            title: i,
            isDisliked: d,
            closeToast: m,
            className: k,
            entityVariant: v,
          } = t,
          _ = (0, l.useMemo)(
            () =>
              (0, a.jsx)(s.Paper, {
                className: u().cover,
                radius: "s",
                children: (0, a.jsx)(c.BE, {
                  className: u().image,
                  src: e,
                  alt: i,
                  size: 100,
                  fit: "cover",
                  withAvatarReplace: !0,
                }),
              }),
            [e, i],
          ),
          p = (0, l.useMemo)(() => {
            if (d)
              switch (v) {
                case c.j9.PODCAST_EPISODE:
                  return (0, a.jsx)(r.Z, {
                    id: "notifications-info.podcast-episode-unavailable-in-recommendations",
                  });
                case c.j9.AUDIOBOOK_EPISODE:
                  return (0, a.jsx)(r.Z, {
                    id: "notifications-info.audiobook-episode-unavailable-in-recommendations",
                  });
                default:
                  return (0, a.jsx)(r.Z, {
                    id: "notifications-info.track-unavailable-in-recommendations",
                  });
              }
            else
              switch (v) {
                case c.j9.PODCAST_EPISODE:
                  return (0, a.jsx)(r.Z, {
                    id: "notifications-info.podcast-episode-available-in-recommendations",
                  });
                case c.j9.AUDIOBOOK_EPISODE:
                  return (0, a.jsx)(r.Z, {
                    id: "notifications-info.audiobook-episode-available-in-recommendations",
                  });
                default:
                  return (0, a.jsx)(r.Z, {
                    id: "notifications-info.track-available-in-recommendations",
                  });
              }
          }, [v, d]);
        return (0, a.jsx)(c.Yj, {
          className: (0, n.W)(u().root, k),
          closeToast: m,
          message: (0, a.jsxs)("div", {
            className: u().message,
            children: [
              _,
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
    2057: function (t, e, i) {
      "use strict";
      i.d(e, {
        NotificationLike: function () {
          return u;
        },
      });
      var a = i(9753),
        n = i(9544),
        l = i(67868),
        r = i(98783),
        s = i(21585),
        o = i(63394);
      let c = "/collection",
        d = (t) => {
          if (!(0, o.RV)()) return c;
          switch (t.type) {
            case s.Vc.PODCAST:
            case s.Vc.AUDIOBOOK:
              return "/collection/shelf/liked";
            default:
              return c;
          }
        },
        u = (0, n.Pi)((t) => {
          let { track: e, closeToast: i } = t,
            n = d(e),
            s = (0, r.C)(e);
          return (0, a.jsx)(l.AP, {
            closeToast: i,
            entityVariant: s,
            entityTitle: e.title,
            collectionUrl: n,
            coverUri: e.coverUri,
            isLiked: e.isLiked,
          });
        });
    },
    23472: function (t, e, i) {
      "use strict";
      i.d(e, {
        jt: function () {
          return j.ControlsBar;
        },
        Jx: function () {
          return b;
        },
        wT: function () {
          return A.PodcastMeta;
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
          return N.TrackContextMenu;
        },
        ko: function () {
          return D.TrackMeta;
        },
        le: function () {
          return _;
        },
        O2: function () {
          return a.TrackPlaylist;
        },
        VZ: function () {
          return l.TrackPlaylistAddition;
        },
        N6: function () {
          return r.TrackPodcast;
        },
        dn: function () {
          return c.TrailerTrackAlbum;
        },
        fY: function () {
          return n.TrailerTrackPlaylist;
        },
        bc: function () {
          return x;
        },
        S7: function () {
          return f;
        },
        Er: function () {
          return T;
        },
        E5: function () {
          return I;
        },
        Vt: function () {
          return y;
        },
        Z2: function () {
          return g;
        },
        Wc: function () {
          return S.W;
        },
        nD: function () {
          return L.useTrackDisclaimer;
        },
      });
      var a = i(1776),
        n = i(71456),
        l = i(5670),
        r = i(11516),
        s = i(96414),
        o = i(639),
        c = i(37379),
        d = i(42288),
        u = i(38360),
        m = i(33589),
        k = i(94342),
        v = i(8957);
      let _ = v.yp
          .props({
            artists: d.V5.array(m.Go),
            albums: d.V5.array(u.KX),
            chart: d.V5.maybe(k.BH),
          })
          .views((t) => ({
            get artistsNames() {
              var e;
              return null === (e = t.artists) || void 0 === e
                ? void 0
                : e.map((t) => t.name).join(", ");
            },
            get mainAlbum() {
              var i, a;
              return null !==
                (a = null === (i = t.albums) || void 0 === i ? void 0 : i[0]) &&
                void 0 !== a
                ? a
                : null;
            },
            get index() {
              var n, l, r;
              return null !==
                (r =
                  null === (l = t.albums[0]) || void 0 === l
                    ? void 0
                    : null === (n = l.trackPosition) || void 0 === n
                      ? void 0
                      : n.index) && void 0 !== r
                ? r
                : null;
            },
          }))
          .named("Track"),
        p = d.V5.model("Credit", { title: d.V5.string, value: d.V5.string }),
        x = d.V5.compose(_, v.v$).named("UgcTrack");
      var C = i(63394);
      let y = (t, e) => {
          var i, a;
          let n =
              null === (i = t.artists) || void 0 === i ? void 0 : i.map(m.d),
            l = null === (a = t.albums) || void 0 === a ? void 0 : a.map(u.N);
          return (0, d.pj)({ ...(0, v.Ni)(t, e), artists: n, albums: l });
        },
        b = d.V5.model("CurrentTrackInfo", {
          id: d.V5.maybeNull(d.V5.union(d.V5.string, d.V5.number)),
          albumId: d.V5.maybeNull(d.V5.number),
          isUGC: d.V5.maybeNull(d.V5.boolean),
          trackLoadingState: d.V5.enumeration(Object.values(C.Gu)),
          fullTrack: d.V5.maybeNull(_),
          creditsLoadingState: d.V5.enumeration(Object.values(C.Gu)),
          credits: d.V5.maybeNull(d.V5.array(p)),
        })
          .views((t) => ({
            get isTrackIdle() {
              return t.trackLoadingState === C.Gu.IDLE;
            },
            get isCreditsIdle() {
              return t.creditsLoadingState === C.Gu.IDLE;
            },
            get isTrackLoading() {
              return (
                t.trackLoadingState === C.Gu.PENDING ||
                t.trackLoadingState === C.Gu.IDLE
              );
            },
            get isTrackRejected() {
              return t.trackLoadingState === C.Gu.REJECT;
            },
            get isCreditsLoading() {
              return (
                t.creditsLoadingState === C.Gu.PENDING ||
                t.creditsLoadingState === C.Gu.IDLE
              );
            },
            get isCreditsRejected() {
              return t.creditsLoadingState === C.Gu.REJECT;
            },
            get isRejected() {
              return (
                t.creditsLoadingState === C.Gu.REJECT &&
                t.trackLoadingState === C.Gu.REJECT
              );
            },
          }))
          .actions((t) => ({
            setTrack(e) {
              let { id: i, albumId: a, isUGC: n } = e;
              (t.id = i), (t.albumId = a), (t.isUGC = n);
            },
            getFullTrack: (0, d.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, d.dU)(t);
              if (!t.id || t.trackLoadingState === C.Gu.PENDING) return null;
              try {
                t.trackLoadingState = C.Gu.PENDING;
                let i = yield e.getFullInfoTrack({
                  trackId: t.id,
                  albumId: t.albumId,
                });
                if (!i) return null;
                (t.fullTrack = (0, d.pj)(y(i.track))),
                  (t.trackLoadingState = C.Gu.RESOLVE);
              } catch (e) {
                i.error(e), (t.trackLoadingState = C.Gu.REJECT);
              }
              return null;
            }),
            getTrackMeta: (0, d.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, d.dU)(t);
              if (!t.id || t.trackLoadingState === C.Gu.PENDING) return null;
              try {
                t.trackLoadingState = C.Gu.PENDING;
                let i = yield e.getTracksMeta({
                  trackIds: [t.id],
                  removeDuplicates: !0,
                });
                if (!i || !i.length) return null;
                i[0] &&
                  ((t.fullTrack = (0, d.pj)(y(i[0]))),
                  (t.trackLoadingState = C.Gu.RESOLVE));
              } catch (e) {
                i.error(e), (t.trackLoadingState = C.Gu.REJECT);
              }
              return null;
            }),
            getCreditsInfo: (0, d.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, d.dU)(t);
              if (!t.id || t.creditsLoadingState === C.Gu.PENDING) return null;
              try {
                t.creditsLoadingState = C.Gu.PENDING;
                let i = yield e.getCredits({ trackId: t.id });
                (t.credits = (0, d.pj)(null == i ? void 0 : i.credits)),
                  (t.creditsLoadingState = C.Gu.RESOLVE);
              } catch (e) {
                i.error(e), (t.creditsLoadingState = C.Gu.REJECT);
              }
              return null;
            }),
            reset() {
              (t.id = null),
                (t.albumId = null),
                (t.isUGC = null),
                (t.trackLoadingState = C.Gu.IDLE),
                (t.creditsLoadingState = C.Gu.IDLE),
                (t.fullTrack = null),
                (t.credits = null);
            },
          })),
        f = (t, e) => (0, d.pj)({ ...y(t), chart: e && (0, k.W5)(e) });
      var h = i(99846);
      let g = (t) => {
        var e, i;
        return (0, d.pj)({
          ...y(t),
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
      var j = i(93393),
        N = i(51528);
      let T = (t, e) => {
        if (!e) return;
        let { h: i, s: a } = (0, C.sE)(e);
        return "hsl("
          .concat(i, ", ")
          .concat(a, "%, ")
          .concat(t === C.Q2.Light ? 60 : 20, "%)");
      };
      var D = i(72280),
        A = i(53961),
        E = i(30742);
      let I = (t) => ({
        type: E.RX.Unloaded,
        meta: { id: t.albumId ? "".concat(t.id, ":").concat(t.albumId) : t.id },
      });
      var S = i(16030),
        L = i(44660);
    },
    16030: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return o;
        },
      });
      var a = i(9753),
        n = i(98639),
        l = i(12090),
        r = i(8957),
        s = i(63394);
      let o = () => {
        let { notify: t } = (0, s.d$)(),
          { playlist: e, fullscreenPlayer: i } = (0, s.oR)(),
          o = (0, s.RV)(),
          c = (0, n.useCallback)(
            (n) => {
              var c, d;
              let {
                withSuccessNotification: u,
                withPageRefresh: m,
                playlist: k,
                track: v,
              } = n;
              if (u) {
                let e = (0, r.tx)(v, o);
                t(
                  (0, a.jsx)(l.XD, {
                    entityTitle: v.title,
                    entityVariant: e,
                    entityCoverUri:
                      null !== (d = v.coverUri) && void 0 !== d ? d : "",
                    playlist: k,
                  }),
                  {
                    containerId: i.modal.isOpened
                      ? s.W$.FULLSCREEN_INFO
                      : s.W$.INFO,
                  },
                );
              }
              m &&
                k.uuid ===
                  (null === (c = e.meta) || void 0 === c ? void 0 : c.uuid) &&
                e.refresh();
            },
            [i.modal.isOpened, o, t, e],
          ),
          d = (0, n.useCallback)(
            (e) => {
              let { withFailNotification: n } = e;
              n &&
                t((0, a.jsx)(l.wi, {}), {
                  containerId: i.modal.isOpened
                    ? s.W$.FULLSCREEN_ERROR
                    : s.W$.ERROR,
                });
            },
            [i.modal.isOpened, t],
          );
        return (0, n.useCallback)(
          async (t) => {
            var e;
            let {
                playlist: i,
                track: a,
                withSuccessNotification: n = !0,
                withFailNotification: r = !0,
                withPageRefresh: s = !0,
              } = t,
              o = await i.changePlaylist(
                (0, l.PG)({
                  operation: l.aL.INSERT,
                  position: 0,
                  tracks: [
                    {
                      id: a.id,
                      albumId:
                        null === (e = a.mainAlbum) || void 0 === e
                          ? void 0
                          : e.id,
                    },
                  ],
                }),
              );
            return (
              o === l.pX.OK
                ? c({
                    withSuccessNotification: n,
                    withPageRefresh: s,
                    playlist: i,
                    track: a,
                  })
                : d({ withFailNotification: r }),
              o
            );
          },
          [c, d],
        );
      };
    },
    44660: function (t, e, i) {
      "use strict";
      i.d(e, {
        useTrackDisclaimer: function () {
          return r;
        },
      });
      var a = i(98639),
        n = i(3429),
        l = i(63394);
      let r = (t) => {
        let { track: e, callback: i } = t,
          {
            disclaimer: r,
            modals: { disclaimerModal: s },
          } = (0, l.oR)(),
          o = (0, a.useRef)(String((0, n.Z)())),
          c = (0, a.useRef)(!1),
          d = (0, l.uK)().get(l.ce);
        return (
          (0, a.useEffect)(() => {
            r.isUnsafeDisclaimerConfirmed &&
              r.id === o.current &&
              !c.current &&
              (null == i || i(), (c.current = !0));
          }, [i, r.isUnsafeDisclaimerConfirmed, r.id]),
          (0, a.useCallback)(
            async (t) => {
              if (e.isLegalRejected || e.isUnsafeLegal) {
                let a = d.get(l.BU.ExEx);
                if (
                  e.isUnsafeLegal &&
                  (null == a
                    ? void 0
                    : a.includes("".concat(l.co.TRACK, "_").concat(e.id)))
                ) {
                  null == i || i();
                  return;
                }
                null == t || t.preventDefault(),
                  await r.getTrackDisclaimer({ trackId: e.id }),
                  e.isUnsafeLegal && r.setType(l.Gq.UNSAFE),
                  r.setId(o.current),
                  r.setEntityId(e.id),
                  r.setEntityType(l.co.TRACK),
                  (c.current = !1),
                  s.open();
                return;
              }
              null == i || i();
            },
            [i, r, s, d, e.id, e.isLegalRejected, e.isUnsafeLegal],
          )
        );
      };
    },
    54355: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return o;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(28852),
        r = i(81032),
        s = i.n(r);
      let o = (t) => {
        let { isDragging: e, className: i } = t;
        return (0, a.jsx)(l.J, {
          variant: "dragDots",
          size: "xxs",
          className: (0, n.W)(s().root, { [s().root_active]: e }, i),
          "aria-hidden": !0,
        });
      };
    },
    93393: function (t, e, i) {
      "use strict";
      i.d(e, {
        ControlsBar: function () {
          return C;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(39513),
        c = i(96622),
        d = i(28852),
        u = i(2570),
        m = i(8957),
        k = i(63394),
        v = i(67868),
        _ = i(51528),
        p = i(26889),
        x = i.n(p);
      let C = (0, l.Pi)((t) => {
        let { className: e, track: i, withLightning: l } = t,
          { user: p } = (0, k.oR)(),
          { formatMessage: C } = (0, s.Z)(),
          { sendLikeSearchFeedback: y } = (0, k.sA)(),
          [b, f] = (0, r.useState)(!1),
          [h, g] = (0, r.useState)(!1),
          j = (0, m.SB)(i),
          N = (0, m.KX)(i),
          T = (0, r.useMemo)(() => {
            let t = Math.round((i.durationMs || 0) / 1e3);
            return (0, k.gf)(t);
          }, [i.durationMs]),
          D = (0, r.useCallback)(() => {
            b || i.isLiked || (f(!0), null == y || y()), j();
          }, [j, b, y, i.isLiked]),
          A = (0, r.useCallback)((t) => {
            t.stopPropagation();
          }, []),
          E = (0, r.useMemo)(() => {
            if (p.isAuthorized && !i.isRemoved && i.isAvailable)
              return (0, a.jsx)(_.TrackContextMenu, {
                track: i,
                open: h,
                onOpenChange: g,
                placement: "bottom",
                reference: (0, a.jsx)(o.z, {
                  onClick: A,
                  variant: "text",
                  size: "xs",
                  withRipple: !1,
                  radius: "round",
                  className: (0, n.W)(x().contextMenu, {
                    [x().contextMenu_visible]: h,
                  }),
                  "aria-label": C({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(d.J, { variant: "more", size: "xxs" }),
                }),
              });
          }, [C, A, h, i, p.isAuthorized]);
        return (0, a.jsxs)("div", {
          className: (0, n.W)(x().root, x().controls, e, {
            [x().controls_disliked]: i.isDisliked,
            [x().controls_disabled]: !i.isAvailable,
          }),
          children: [
            (i.trackExplicitMark || l) &&
              (0, a.jsxs)("div", {
                className: x().icons,
                children: [
                  l &&
                    (0, a.jsx)(d.J, {
                      size: "xxs",
                      className: x().lightning,
                      variant: "lightning",
                    }),
                  i.trackExplicitMark &&
                    (0, a.jsx)(c.ExplicitMark, {
                      variant: i.trackExplicitMark,
                      className: x().explicitMark,
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
                className: (0, n.W)(x().item, x().likeIcon),
                isLiked: i.isLiked,
                onClick: D,
              }),
            p.isAuthorized &&
              !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(v.Q1, {
                size: "xs",
                iconSize: "xxs",
                className: (0, n.W)(x().item, x().dislikeIcon),
                isDisliked: i.isDisliked,
                onClick: N,
              }),
            (0, a.jsxs)("div", {
              className: (0, n.W)(x().item, x().contextMenuWrapper),
              children: [
                "number" == typeof i.durationMs &&
                  (0, a.jsx)(u.Caption, {
                    variant: "span",
                    className: (0, n.W)(x().duration, {
                      [x().duration_hidden]: h,
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
    53961: function (t, e, i) {
      "use strict";
      i.d(e, {
        PodcastMeta: function () {
          return y;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(32693),
        d = i(96622),
        u = i(2570),
        m = i(20121),
        k = i(63394),
        v = i(67868),
        _ = i(41894),
        p = i.n(_),
        x = i(14795),
        C = i.n(x);
      let y = (0, l.Pi)((t) => {
        let {
            track: e,
            className: i,
            withPodcastName: l = !1,
            withDate: _ = !0,
            withSecondaryColor: x = !1,
            captionSize: y = "m",
            explicitSize: b = "xs",
            withExplicitMark: f,
            titleContainerClassName: h,
            textClassName: g,
          } = t,
          { fullscreenPlayer: j } = (0, k.oR)(),
          { formatMessage: N } = (0, s.Z)(),
          T = e.mainAlbum,
          D = T && l,
          A = e.pubDate ? new Date(e.pubDate) : new Date(),
          E = (0, k.u9)(A),
          I = !1,
          S = (0, k.s0)("/album/".concat(null == T ? void 0 : T.id)),
          L = (0, m.$H)({
            entityType: k.co.PODCAST,
            entityId: null == T ? void 0 : T.id,
            isLegalRejected: !!(null == T ? void 0 : T.isLegalRejected),
            isUnsafeLegal: !!(null == T ? void 0 : T.isUnsafeLegal),
            callback: S,
          }),
          R = (0, r.useCallback)(() => {
            switch (E) {
              case k.Uv.TODAY:
                return (0, a.jsx)(o.Z, { id: "interface-actions.date-today" });
              case k.Uv.YESTERDAY:
                return (0, a.jsx)(o.Z, {
                  id: "interface-actions.date-yesterday",
                });
              case k.Uv.DATE_WITH_YEAR:
                return (0, a.jsx)(c.Ji, {
                  value: e.pubDate,
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
              default:
                return (0, a.jsx)(c.Ji, {
                  value: e.pubDate,
                  month: "long",
                  day: "numeric",
                });
            }
          }, [e.pubDate, E]);
        e.pubDate && _ && (I = [k.Uv.TODAY, k.Uv.YESTERDAY].includes(E));
        let B = (0, r.useCallback)(
            (t) => {
              j.modal.isOpened && j.modal.close(), L(t);
            },
            [j.modal, L],
          ),
          P = (0, r.useMemo)(
            () =>
              e.isRemoved
                ? (0, a.jsx)(o.Z, { id: "track-title.podcast-not-found" })
                : (0, a.jsx)(u.Caption, {
                    className: p().title,
                    type: "entity",
                    size: y,
                    variant: "div",
                    children: e.title,
                  }),
            [e.isRemoved, e.title, y],
          );
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            p().root,
            {
              [p().root_disabled]: !e.isAvailable,
              [p().root_disliked]: e.isDisliked,
              [p().root_withSecondaryColor]: x,
            },
            i,
          ),
          children: (0, a.jsxs)("div", {
            className: p().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(p().titleContainer, h),
                children: [
                  (0, a.jsx)(u.Caption, {
                    className: (0, n.W)(p().text, g),
                    type: "entity",
                    size: y,
                    variant: "div",
                    lineClamp: 1,
                    children: P,
                  }),
                  e.trackExplicitMark &&
                    f &&
                    (0, a.jsx)(d.ExplicitMark, {
                      variant: d.ExplicitMarkVariant.NUMERIC,
                      className: (0, n.W)(p().explicitMark, C().explicitMark),
                      iconSize: b,
                    }),
                ],
              }),
              (0, a.jsxs)(u.Caption, {
                type: "entity",
                size: y,
                variant: "div",
                lineClamp: 1,
                className: (0, n.W)(p().text, C().podcastName, g),
                children: [
                  D &&
                    (0, a.jsx)(v.rU, {
                      "aria-label": N(
                        { id: "entity-names.podcast-name" },
                        { podcastName: T.title },
                      ),
                      className: p().link,
                      href: "/album/".concat(T.id),
                      title: T.title,
                      onClick: B,
                      children: (0, a.jsx)(u.Caption, {
                        variant: "span",
                        type: "entity",
                        size: y,
                        className: p().albumTitle,
                        children: T.title,
                      }),
                    }),
                  e.pubDate &&
                    _ &&
                    (0, a.jsx)(u.Caption, {
                      variant: "span",
                      type: "entity",
                      size: y,
                      className: (0, n.W)({
                        [C().dateWithName]: D,
                        [C().soonDate]: I,
                        [C().dateDisabled]: !e.isAvailable,
                        [C().dateDisliked]: e.isDisliked,
                      }),
                      children: R(),
                    }),
                ],
              }),
            ],
          }),
        });
      });
    },
    72280: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackMeta: function () {
          return f;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(23881),
        d = i(21585),
        u = i(96622),
        m = i(2570),
        k = i(33589),
        v = i(63394),
        _ = i(67868),
        p = i(34527);
      let x = function () {
        var t, e;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (
          null === (e = i[0]) || void 0 === e
            ? void 0
            : null === (t = e.decomposed) || void 0 === t
              ? void 0
              : t.length
        )
          return i;
        let n = a.map((t) => t.id).sort(),
          l = i.map((t) => t.id).sort();
        return (0, p.Z)(n, l) ? [] : i.filter((t) => !t.various);
      };
      var C = i(44660),
        y = i(41894),
        b = i.n(y);
      let f = (0, l.Pi)((t) => {
        let {
            className: e,
            titleContainerClassName: i,
            track: l,
            albumArtists: p,
            withExplicitMark: y,
            withSecondaryColor: f,
            captionSize: h = "m",
            explicitSize: g,
            withAlbumLink: j,
            withAllArtistsTitle: N,
            textClassName: T,
          } = t,
          { formatMessage: D } = (0, s.Z)(),
          { fullscreenPlayer: A } = (0, v.oR)(),
          E = (0, v.s0)("/album/".concat(l.albumId)),
          I = (0, r.useMemo)(() => {
            var t;
            let e = D(
              { id: "entity-names.track-name" },
              { trackName: l.title },
            );
            return ""
              .concat(e, " ")
              .concat(null !== (t = l.version) && void 0 !== t ? t : "");
          }, [D, l.title, l.version]),
          S = (0, C.useTrackDisclaimer)({ track: l, callback: E }),
          L = (0, r.useCallback)(
            (t) => {
              A.modal.isOpened && A.modal.close(), S(t);
            },
            [A.modal, S],
          ),
          R = (0, r.useMemo)(
            () =>
              l.isRemoved
                ? (0, a.jsx)(m.Caption, {
                    className: (0, n.W)(b().text, b().title),
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "div",
                    children: (0, a.jsx)(o.Z, {
                      id: "track-title.error-not-found",
                    }),
                  })
                : l.albumId && j && l.trackSource === d.zu.OWN && l.isAvailable
                  ? (0, a.jsx)(_.rU, {
                      onClick: L,
                      className: b().albumLink,
                      href: "/album/".concat(l.albumId),
                      "aria-label": I,
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: (0, a.jsx)(m.Caption, {
                        className: (0, n.W)(b().text, b().title),
                        type: "entity",
                        size: h,
                        weight: "medium",
                        variant: "div",
                        children: l.title,
                      }),
                    })
                  : (0, a.jsx)(m.Caption, {
                      className: (0, n.W)(b().text, b().title),
                      type: "entity",
                      size: h,
                      weight: "medium",
                      variant: "div",
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: l.title,
                    }),
            [
              h,
              L,
              l.albumId,
              l.isAvailable,
              l.isRemoved,
              l.title,
              l.trackSource,
              I,
              j,
            ],
          ),
          B = (0, r.useMemo)(() => x(l.artists, p), [l.artists, p, l.id]);
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            b().root,
            {
              [b().root_disabled]: !l.isAvailable,
              [b().root_disliked]: l.isDisliked,
              [b().root_withSecondaryColor]: f,
            },
            e,
          ),
          children: (0, a.jsxs)("div", {
            className: b().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(
                  b().titleContainer,
                  { [b().titleContainer_withVersion]: l.version },
                  i,
                ),
                children: [
                  (0, a.jsxs)(m.Caption, {
                    className: (0, n.W)(b().text, T),
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "div",
                    lineClamp: 1,
                    children: [
                      R,
                      !l.isRemoved &&
                        l.version &&
                        (0, a.jsx)(m.Caption, {
                          className: (0, n.W)(b().text, b().version),
                          type: "entity",
                          size: h,
                          weight: "medium",
                          variant: "div",
                          children: " ".concat(l.version),
                        }),
                    ],
                  }),
                  l.trackExplicitMark &&
                    y &&
                    (0, a.jsx)(u.ExplicitMark, {
                      iconSize: g,
                      variant: l.trackExplicitMark,
                      className: b().explicitMark,
                    }),
                ],
              }),
              B.length > 0 &&
                (0, a.jsx)(k.jO, {
                  className: (0, n.W)(b().text, b().artists, T),
                  linkClassName: (0, n.W)(b().text, b().link),
                  captionClassName: (0, n.W)(b().text, b().artistCaption),
                  artists: B,
                  withLink: !l.isUGC,
                  lineClamp: 1,
                  captionSize: h,
                  withAllArtistsTitle: N,
                }),
            ],
          }),
        });
      });
    },
    9374: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return d;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(2570),
        s = i(67868),
        o = i(33273),
        c = i.n(o);
      let d = (0, l.Pi)((t) => {
        let {
          className: e,
          track: i,
          position: l,
          onPlayButtonClick: o,
          isPlaying: d,
          isCurrent: u,
        } = t;
        return (0, a.jsxs)("div", {
          className: (0, n.W)(e, c().root, {
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
            l &&
              (0, a.jsx)(r.Caption, {
                variant: "div",
                className: c().position,
                weight: "normal",
                type: "entity",
                size: "m",
                children: l,
              }),
          ],
        });
      });
    },
    51528: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackContextMenu: function () {
          return A;
        },
      });
      var a = i(9753),
        n = i(9544),
        l = i(98639),
        r = i(31014),
        s = i(21585),
        o = i(28852),
        c = i(385),
        d = i(38360),
        u = i(8957),
        m = i(63394),
        k = i(67868),
        v = i(80542),
        _ = i(12090);
      let p = () => {
        let { playlist: t, trackIndex: e } = (0, l.useContext)(_.jK) || {},
          { notify: i } = (0, m.d$)(),
          { playlist: n } = (0, m.oR)(),
          { formatMessage: r } = (0, v.Z)(),
          s = (0, l.useCallback)(async () => {
            let l = !1;
            if (
              (t &&
                "number" == typeof e &&
                (await t.changePlaylist(
                  (0, _.PG)({
                    operation: _.aL.DELETE,
                    startPosition: e,
                    endPosition: e + 1,
                  }),
                )) === _.pX.OK &&
                (l = !0),
              l)
            ) {
              if (t && "number" == typeof e) {
                var s;
                t.uuid ===
                  (null === (s = n.meta) || void 0 === s ? void 0 : s.uuid) &&
                  n.removeTracksFromItems(e, 1);
              }
            } else
              i(
                (0, a.jsx)(k.Q, {
                  error: r({ id: "playlist-errors.failed-to-remove-track" }),
                }),
                { containerId: m.W$.ERROR },
              );
          }, [t, e, n, i, r]);
        return {
          canRemoveTrackFromPlaylist: !!(null == t ? void 0 : t.canUserChange),
          removeTrackFromPlaylist: s,
        };
      };
      var x = i(60836),
        C = i(90679),
        y = i(74717),
        b = i(16030);
      let f = (t) => {
        let { createPlaylist: e, fullscreenPlayer: i } = (0, m.oR)(),
          { notify: n } = (0, m.d$)(),
          r = (0, y.useRouter)(),
          { formatMessage: o } = (0, v.Z)(),
          c = (0, b.W)(),
          d = (0, l.useCallback)(
            async (t) => {
              var i;
              if (
                (await e.create({
                  title: o({ id: "entity-names.new-playlist" }),
                  visibility: s.we.PUBLIC,
                }),
                !(null == e
                  ? void 0
                  : null === (i = e.meta) || void 0 === i
                    ? void 0
                    : i.uuid))
              )
                return null;
              if (
                (await c({
                  playlist: e.meta,
                  track: t,
                  withPageRefresh: !1,
                  withFailNotification: !1,
                  withSuccessNotification: !1,
                })) === _.pX.OK
              ) {
                let t = (0, m.SZ)("/playlist/".concat(e.meta.uuid));
                return e.reset(), t;
              }
              return null;
            },
            [c, e, o],
          );
        return (0, l.useCallback)(async () => {
          let e = await d(t);
          e
            ? (i.modal.isOpened && i.modal.close(), r.push(e))
            : n((0, a.jsx)(_.wi, {}), {
                containerId: i.modal.isOpened
                  ? m.W$.FULLSCREEN_ERROR
                  : m.W$.ERROR,
              });
        }, [d, i.modal, n, r, t]);
      };
      var h = i(2570);
      let g = (t) => {
        let { playlist: e, track: i } = t,
          n = (0, b.W)(),
          r = (0, l.useCallback)(() => {
            n({ playlist: e, track: i });
          }, [n, e, i]);
        return (0, a.jsx)(c.sN, {
          onClick: r,
          children: (0, a.jsx)(h.Caption, {
            variant: "div",
            lineClamp: 1,
            children: e.title,
          }),
        });
      };
      var j = i(56819),
        N = i.n(j);
      let T = () =>
          (0, a.jsx)(c.sN, {
            children: (0, a.jsx)(C.Shimmer, { className: N().shimmer }),
          }),
        D = (0, n.Pi)((t) => {
          var e;
          let { track: i } = t,
            {
              user: n,
              contextMenuPlaylists: s,
              fullscreenPlayer: d,
            } = (0, m.oR)(),
            v = (0, u.SB)(i),
            { notify: _ } = (0, m.d$)(),
            p = f(i),
            C = (0, l.useCallback)(() => {
              if (!i.isLiked) {
                v();
                return;
              }
              _((0, a.jsx)(u.Yc, { track: i }), {
                containerId: d.modal.isOpened
                  ? m.W$.FULLSCREEN_INFO
                  : m.W$.INFO,
              });
            }, [d.modal.isOpened, v, _, i]),
            y = (0, l.useCallback)(
              (t) => {
                n.account.uid &&
                  s.getData({ userId: n.account.uid, page: t, pageSize: 20 });
              },
              [s, n.account.uid],
            ),
            b = (0, l.useCallback)(async () => {
              n.account.uid &&
                (await s.getData({
                  userId: n.account.uid,
                  page: 0,
                  pageSize: 20,
                }));
            }, [s, n.account.uid]);
          (0, l.useEffect)(
            () => () => {
              s.reset();
            },
            [s],
          );
          let h = (t) => {
              var e;
              let n =
                null == s
                  ? void 0
                  : null === (e = s.items) || void 0 === e
                    ? void 0
                    : e[t];
              return n
                ? (0, a.jsx)(g, { track: i, playlist: n }, n.uuid)
                : (0, a.jsx)(T, {});
            },
            j = (0, l.useMemo)(() => {
              var t, e, i;
              return s.isLoaded
                ? (0, a.jsx)(k.Wv, {
                    className: (0, x.W)(N().virtualScroll, N().important),
                    listClassName: N().content,
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
                              onClick: C,
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
                        (e =
                          null == s
                            ? void 0
                            : null === (t = s.pager) || void 0 === t
                              ? void 0
                              : t.total) && void 0 !== e
                        ? e
                        : 0,
                    onGetDataByPage: y,
                    pageSize: 20,
                    withFooter: !1,
                    totalRequests:
                      null !== (i = s.requests) && void 0 !== i ? i : 0,
                    alwaysShowScrollbar: !0,
                  })
                : [...Array(7)].map((t, e) => (0, a.jsx)(T, {}, e));
            }, [
              s.loadingState,
              null == s
                ? void 0
                : null === (e = s.pager) || void 0 === e
                  ? void 0
                  : e.total,
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
            children: (0, a.jsx)("div", { className: N().root, children: j }),
          });
        }),
        A = (0, n.Pi)((t) => {
          var e, i, n, v, _;
          let {
              track: x,
              reference: C,
              onOpenChange: y,
              open: b,
              placement: f,
              returnFocus: h,
            } = t,
            {
              settings: g,
              currentTrackInfo: j,
              experiments: N,
              fullscreenPlayer: T,
              modals: { trackModal: A },
              sonataState: { entityMeta: E },
              trailer: I,
            } = (0, m.oR)(),
            S = (0, u.SB)(x),
            L = (0, u.KX)(x),
            R = (0, d.SB)(x.mainAlbum),
            B = "".concat(m.aU.TRACK, "-").concat(x.id),
            P = g.layout === m.t8.Mobile,
            { href: M } = (0, m.qK)(x.url),
            V =
              (0, m.RV)() &&
              (null === (e = x.mainAlbum) || void 0 === e
                ? void 0
                : e.isNonMusic),
            O =
              N.checkExperiment(m.pe.WebNextEntityTrailer, "on") &&
              true &&
              x.hasTrailer,
            { canRemoveTrackFromPlaylist: U, removeTrackFromPlaylist: G } = p(),
            { isPlaying: W, togglePlay: w } = (0, m.Qh)({
              seeds:
                null !== (_ = null == x ? void 0 : x.seeds) && void 0 !== _
                  ? _
                  : [],
              pageIdForFrom: m.Rh.RADIO,
              blockIdForFrom: B,
            }),
            z = (0, l.useCallback)(() => {
              W || w();
            }, [W, w]),
            K = (0, l.useCallback)(() => {
              I.openTrackTrailer(x.entityId);
            }, [x.entityId, I]),
            Z = (0, l.useCallback)(() => {
              var t;
              j.setTrack({
                id: x.id,
                albumId:
                  (null === (t = x.mainAlbum) || void 0 === t
                    ? void 0
                    : t.id) || null,
                isUGC: x.isUGC || null,
              }),
                A.open();
            }, [
              j,
              x.id,
              x.isUGC,
              null === (i = x.mainAlbum) || void 0 === i ? void 0 : i.id,
              A,
            ]);
          (0, m.ZP)(b);
          let F = !x.isUGC && !V,
            Y = V && R,
            J = true && !P,
            H =
              true &&
              (null == E ? void 0 : E.hasSyncLyrics) &&
              T.modal.isOpened;
          return (0, a.jsxs)(c.v2, {
            reference: C,
            isMobile: P,
            title: x.title,
            description: x.artistsNames,
            placement: f,
            offsetOptions: 10,
            open: b,
            onOpenChange: y,
            returnFocus: h,
            children: [
              !V && (0, a.jsx)(k.xZ, { onClick: S, isLiked: x.isLiked }),
              O && (0, a.jsx)(k.NB, { onClick: K }),
              F &&
                (0, a.jsx)(k.GQ, {
                  onClick: z,
                  variant: "track",
                  disabled: !x.isAvailable,
                }),
              H &&
                (0, a.jsx)(c.sN, {
                  onClick: T.showSyncLyricsModal,
                  icon: (0, a.jsx)(o.J, { variant: "syncLyrics" }),
                  children: (0, a.jsx)(r.Z, {
                    id: "interface-actions.open-sync-lyrics",
                  }),
                }),
              !V && (0, a.jsx)(k.ZL, { onClick: L, isDisliked: x.isDisliked }),
              !P && (0, a.jsx)(D, { track: x }),
              (0, a.jsx)(k.zq, {
                disabled: x.isUGC || x.trackSource === s.zu.OWN_REPLACED_TO_UGC,
                shareLink: M,
                entityVariant: "track",
                entityTitle: x.title,
              }),
              Y &&
                (0, a.jsx)(k.qq, {
                  onClick: R,
                  isLiked:
                    null === (n = x.mainAlbum) || void 0 === n
                      ? void 0
                      : n.isLiked,
                  albumType:
                    null === (v = x.mainAlbum) || void 0 === v
                      ? void 0
                      : v.type,
                }),
              U &&
                (0, a.jsx)(c.sN, {
                  onClick: G,
                  icon: (0, a.jsx)(o.J, { variant: "bucket" }),
                  children: (0, a.jsx)(r.Z, {
                    id: "playlist-actions.remove-from-playlist",
                  }),
                }),
              J &&
                (0, a.jsx)(c.sN, {
                  onClick: Z,
                  icon: (0, a.jsx)(o.J, { variant: "info" }),
                  children: (0, a.jsx)(r.Z, { id: "track-modal.title" }),
                }),
            ],
          });
        });
    },
    60808: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return v;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(98342),
        c = i(63394),
        d = i(67868),
        u = i(44660),
        m = i(66563),
        k = i.n(m);
      let v = (0, l.Pi)((t) => {
        let {
            className: e,
            track: i,
            meta: l,
            beforeBlock: m,
            controls: v,
            playButtonCellRender: _,
            withLightning: p,
            isPlaying: x,
            isCurrent: C,
            togglePlay: y,
            restartPlay: b,
            ...f
          } = t,
          { formatMessage: h } = (0, s.Z)(),
          { ref: g, intersectionPropertyId: j } = (0, c.Vf)(),
          N = (0, u.useTrackDisclaimer)({ track: i, callback: y }),
          { sendPlaySearchFeedback: T } = (0, c.sA)(),
          [D, A] = (0, r.useState)(!1),
          E = (0, r.useCallback)(() => {
            D || x || (A(!0), null == T || T()), N();
          }, [N, x, D, T]),
          I = (0, r.useCallback)(() => {
            x ? b() : E();
          }, [x, b, E]),
          S = (0, r.useCallback)(
            (t) => {
              2 === t.detail ? I() : (0, o.m)(t, k().ripple);
            },
            [I],
          ),
          L =
            null == _
              ? void 0
              : _({ onPlayButtonClick: E, isPlaying: x, isCurrent: C }),
          R = (0, r.useMemo)(() => {
            var t;
            if (!i.isAvailable)
              return ""
                .concat(h({ id: "extra-explicit.play-unavailable" }), " ")
                .concat(i.artistsNames, " ")
                .concat(i.title);
            let e = p ? h({ id: "entity-names.popular-among-users" }) : "";
            return ""
              .concat(i.artistsNames, " ")
              .concat(i.title, " ")
              .concat(null !== (t = i.version) && void 0 !== t ? t : "", " ")
              .concat(e);
          }, [h, i.artistsNames, i.isAvailable, i.title, i.version, p]);
        return (0, a.jsxs)(d.Md, {
          ref: g,
          "aria-label": R,
          "data-intersection-property-id": j,
          onClick: S,
          className: (0, n.W)(
            k().root,
            { [k().root_disabled]: !i.isAvailable },
            e,
          ),
          ...f,
          children: [m, L, l, v],
        });
      });
    },
    99846: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackCard: function () {
          return N;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(23881),
        d = i(84338),
        u = i(21585),
        m = i(39513),
        k = i(27491),
        v = i(28852),
        _ = i(12404),
        p = i(2570),
        x = i(33589),
        C = i(8957),
        y = i(63394),
        b = i(67868),
        f = i(44660),
        h = i(51528),
        g = i(98129),
        j = i.n(g);
      let N = (0, l.Pi)((t) => {
        let {
            className: e,
            children: i,
            track: l,
            contentLinesCount: g,
            overrideContextType: N,
          } = t,
          T = (0, y.x5)(),
          { formatMessage: D } = (0, s.Z)(),
          [A, E] = (0, r.useState)(!1),
          [I, S] = (0, r.useState)(!1),
          [L, R] = (0, r.useState)(!1),
          { sendLikeSearchFeedback: B, sendPlaySearchFeedback: P } = (0,
          y.sA)(),
          M = (0, C.SB)(l),
          [V, O] = (0, r.useState)(!1),
          U = (0, r.useMemo)(() => {
            var t;
            let e = D(
                { id: "entity-names.track-name" },
                { trackName: l.title },
              ),
              i = l.isLiked ? D({ id: "entity-names.has-your-like" }) : "";
            return ""
              .concat(e, " ")
              .concat(null !== (t = l.version) && void 0 !== t ? t : "", " ")
              .concat(i);
          }, [D, l.title, l.isLiked, l.version]),
          G = l.albumId ? "".concat(l.id, ":").concat(l.albumId) : l.id,
          W = l.albumId && l.trackSource === u.zu.OWN && l.isAvailable,
          { isPlaying: w, togglePlay: z } = (0, y.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Various,
                meta: { id: G },
                from: T,
                overrideContextType: N,
              },
              queueParams: { index: 0 },
              loadContextMeta: !0,
            },
            entityId: G,
          }),
          K = (0, f.useTrackDisclaimer)({ track: l }),
          Z = (0, f.useTrackDisclaimer)({ track: l, callback: z }),
          F = (0, r.useCallback)(
            (t) => {
              K(t);
            },
            [K],
          ),
          Y = (0, r.useCallback)(() => {
            A || w || (E(!0), null == P || P()), Z();
          }, [w, A, P, Z]),
          J = (0, r.useCallback)(() => {
            I || l.isLiked || (S(!0), null == B || B()), M();
          }, [M, I, B, l.isLiked]),
          H = (0, r.useCallback)((t) => {
            t.preventDefault(), t.stopPropagation();
          }, []),
          $ = (0, r.useCallback)(() => {
            R(!L), O(!L);
          }, [L]),
          q = (0, r.useMemo)(() => {
            var t;
            return (0, a.jsxs)(p.Caption, {
              className: (0, n.W)(j().titleContainer, {
                [j().titleContainer_withVersion]: l.version,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              children: [
                W
                  ? (0, a.jsx)(b.rU, {
                      "aria-label": ""
                        .concat(l.title, " ")
                        .concat(
                          null !== (t = l.version) && void 0 !== t ? t : "",
                        ),
                      className: j().titleLink,
                      href: "/album/".concat(l.albumId),
                      onClick: F,
                      children: l.title,
                    })
                  : (0, a.jsx)(p.Caption, {
                      className: j().title,
                      variant: "span",
                      onClick: F,
                      children: l.title,
                    }),
                l.version &&
                  (0, a.jsx)(p.Caption, {
                    className: j().version,
                    variant: "span",
                    children: " ".concat(l.version),
                  }),
              ],
            });
          }, [l.title, l.version, W, F, l.albumId]),
          X = (0, r.useMemo)(() => {
            var t;
            return W
              ? (0, a.jsx)(b.rU, {
                  href: "/album/".concat(l.albumId),
                  onClick: F,
                  children: ""
                    .concat(l.title, " ")
                    .concat(null !== (t = l.version) && void 0 !== t ? t : ""),
                })
              : null;
          }, [l.title, l.version, l.albumId, W, F]),
          Q = (0, r.useMemo)(
            () =>
              (0, a.jsx)(h.TrackContextMenu, {
                placement: "bottom",
                track: l,
                onOpenChange: $,
                open: L,
                returnFocus: !1,
                reference: (0, a.jsx)(m.z, {
                  onClick: H,
                  className: (0, n.W)(j().menuButton, j().control),
                  "aria-label": D({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(v.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.track.TRACK_CONTEXT_MENU_BUTTON),
                }),
              }),
            [D, H, $, L, l],
          ),
          tt = (0, r.useMemo)(() => {
            if (l.isAvailable)
              return (0, a.jsx)(k.kk, {
                isVisible: L || V,
                className: j().controls,
                labelText: (0, a.jsx)(o.Z, { id: "entity-names.track" }),
                playControl: (0, a.jsx)(b.JM, {
                  className: (0, n.W)(j().playButton, j().control),
                  buttonVariant: "default",
                  withHover: !1,
                  iconSize: "xl",
                  variant: "filled",
                  isPlaying: w,
                  onClick: Y,
                }),
                likeControl: (0, a.jsx)(b.dJ, {
                  className: (0, n.W)(j().likeButton, j().control),
                  isLiked: l.isLiked,
                  onClick: J,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: Q,
              });
          }, [Q, J, Y, L, V, w, l.isAvailable, l.isLiked]),
          te = (0, r.useMemo)(
            () =>
              (0, a.jsx)(_.Paper, {
                className: j().cover,
                radius: "l",
                withShadow: !0,
                onClick: F,
                children: (0, a.jsxs)("div", {
                  className: j().coverBlock,
                  children: [
                    (0, a.jsx)(b.BE, {
                      className: j().image,
                      src: l.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: U,
                      withAvatarReplace: !0,
                      isAvailable: l.isAvailable,
                      "aria-hidden": !0,
                    }),
                    tt,
                  ],
                }),
              }),
            [tt, F, l.coverUri, l.isAvailable, U],
          );
        return (0, a.jsx)(k.m7, {
          className: (0, n.W)(j().root, e),
          "aria-label": U,
          explicitMark: l.trackExplicitMark,
          title: q,
          srTitle: X,
          contentLinesCount: g,
          view: te,
          description: (0, a.jsx)(x.jO, {
            className: j().artists,
            artists: l.artists,
            lineClamp: 1,
            linkClassName: j().artistLink,
            captionSize: "s",
            withLink: !l.isUGC,
          }),
          children: i,
        });
      });
    },
    639: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackAlbum: function () {
          return v;
        },
      });
      var a = i(9753),
        n = i(9544),
        l = i(98639),
        r = i(23881),
        s = i(63394),
        o = i(93393),
        c = i(72280),
        d = i(9374),
        u = i(60808),
        m = i(55491),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: n,
            playContextParams: m,
            withLightning: v,
          } = t,
          _ = (0, s.qm)({ playContextParams: m, entityId: e.entityId }),
          p = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: n,
                className: k().playButtonCell,
                ...t,
              }),
            [e, n],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          withLightning: v,
          meta: (0, a.jsx)(c.TrackMeta, { albumArtists: i, track: e }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: v,
            track: e,
            className: k().controlsBarCell,
          }),
          ..._,
          ...(0, r.BA)(r.bG.track.TRACK_ALBUM),
        });
      });
    },
    37379: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackAlbum: function () {
          return v;
        },
      });
      var a = i(9753),
        n = i(9544),
        l = i(98639),
        r = i(23881),
        s = i(63394),
        o = i(93393),
        c = i(72280),
        d = i(9374),
        u = i(60808),
        m = i(55491),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: n,
            playContextParams: m,
            withLightning: v,
          } = t,
          _ = (0, s.bA)({ playContextParams: m, entityId: e.entityId }),
          p = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: n,
                className: k().playButtonCell,
                ...t,
              }),
            [e, n],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          withLightning: v,
          meta: (0, a.jsx)(c.TrackMeta, { albumArtists: i, track: e }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: v,
            track: e,
            className: k().controlsBarCell,
          }),
          ..._,
          ...(0, r.BA)(r.bG.track.TRACK_ALBUM),
        });
      });
    },
    96414: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackChart: function () {
          return _;
        },
      });
      var a = i(9753),
        n = i(9544),
        l = i(98639),
        r = i(23881),
        s = i(94342),
        o = i(63394),
        c = i(67868),
        d = i(93393),
        u = i(72280),
        m = i(60808),
        k = i(61383),
        v = i.n(k);
      let _ = (0, n.Pi)((t) => {
        var e, i;
        let { track: n, playContextParams: k } = t,
          _ = (0, o.qm)({ playContextParams: k, entityId: n.entityId }),
          p = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(c.Df, {
                isAvailable: n.isAvailable,
                isDisliked: n.isDisliked,
                coverUri: n.coverUri,
                title: n.title,
                className: v().playButtonCell,
                ...t,
              }),
            [n],
          );
        return (0, a.jsx)(m.f, {
          track: n,
          meta: (0, a.jsx)(u.TrackMeta, { track: n }),
          beforeBlock: (0, a.jsx)(s.kL, {
            className: v().chartCell,
            progress:
              null === (e = n.chart) || void 0 === e ? void 0 : e.progress,
            position:
              null === (i = n.chart) || void 0 === i ? void 0 : i.position,
            isDisliked: n.isDisliked,
            isDisabled: !n.isAvailable,
          }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(d.ControlsBar, {
            track: n,
            className: v().controlsBarCell,
          }),
          ..._,
          ...(0, r.BA)(r.bG.track.TRACK_CHART),
        });
      });
    },
    1776: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylist: function () {
          return p;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(98639),
        s = i(23881),
        o = i(63394),
        c = i(67868),
        d = i(54355),
        u = i(93393),
        m = i(72280),
        k = i(60808),
        v = i(25803),
        _ = i.n(v);
      let p = (0, l.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            className: l,
            withDNDBlock: v,
            isDragging: p,
            draggingClassName: x,
          } = t,
          C = (0, o.qm)({ playContextParams: i, entityId: e.entityId }),
          y = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(c.Df, {
                isAvailable: e.isAvailable,
                isDisliked: e.isDisliked,
                coverUri: e.coverUri,
                title: e.title,
                className: _().playButtonCell,
                ...t,
              }),
            [e],
          );
        return (0, a.jsx)(k.f, {
          className: (0, n.W)(l, { [_().trackWithDots]: v }),
          track: e,
          beforeBlock: v
            ? (0, a.jsx)(d.x, {
                className: (0, n.W)(_().dots, x),
                isDragging: p,
              })
            : void 0,
          meta: (0, a.jsx)(m.TrackMeta, { track: e }),
          playButtonCellRender: y,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: e,
            className: _().controlsBarCell,
          }),
          ...C,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    71456: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackPlaylist: function () {
          return v;
        },
      });
      var a = i(9753),
        n = i(9544),
        l = i(98639),
        r = i(23881),
        s = i(63394),
        o = i(67868),
        c = i(93393),
        d = i(72280),
        u = i(60808),
        m = i(25803),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let { track: e, playContextParams: i } = t,
          n = (0, s.bA)({ playContextParams: i, entityId: e.entityId }),
          m = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(o.Df, {
                isAvailable: e.isAvailable,
                isDisliked: e.isDisliked,
                coverUri: e.coverUri,
                title: e.title,
                className: k().playButtonCell,
                ...t,
              }),
            [e],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          meta: (0, a.jsx)(d.TrackMeta, { track: e }),
          playButtonCellRender: m,
          controls: (0, a.jsx)(c.ControlsBar, {
            track: e,
            className: k().controlsBarCell,
          }),
          ...n,
          ...(0, r.BA)(r.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    5670: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylistAddition: function () {
          return p;
        },
      });
      var a = i(9753),
        n = i(9544),
        l = i(98639),
        r = i(80542),
        s = i(23881),
        o = i(39513),
        c = i(28852),
        d = i(63394),
        u = i(67868),
        m = i(72280),
        k = i(60808),
        v = i(98387),
        _ = i.n(v);
      let p = (0, n.Pi)((t) => {
        let { className: e, track: i, playContextParams: n, onClick: v } = t,
          { formatMessage: p } = (0, r.Z)(),
          x = (0, d.qm)({ playContextParams: n, entityId: i.entityId }),
          C = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(u.Df, {
                isAvailable: i.isAvailable,
                isDisliked: i.isDisliked,
                coverUri: i.coverUri,
                title: i.title,
                className: _().playButtonCell,
                ...t,
              }),
            [i],
          ),
          y = (0, l.useCallback)(() => {
            null == v || v(i);
          }, [i, v]),
          b = (0, l.useMemo)(
            () =>
              (0, a.jsx)("div", {
                className: _().controls,
                children: (0, a.jsx)(o.z, {
                  className: _().button,
                  variant: "text",
                  size: "xs",
                  radius: "xxxl",
                  "aria-label": p({
                    id: "interface-actions.add-track-to-playlist",
                  }),
                  onClick: y,
                  icon: (0, a.jsx)(c.J, { size: "xxs", variant: "add" }),
                }),
              }),
            [p, y],
          );
        return (0, a.jsx)(k.f, {
          className: e,
          track: i,
          meta: (0, a.jsx)(m.TrackMeta, { track: i }),
          playButtonCellRender: C,
          controls: b,
          ...x,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST_ADDITION),
        });
      });
    },
    11516: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPodcast: function () {
          return p;
        },
      });
      var a = i(9753),
        n = i(60836),
        l = i(9544),
        r = i(98639),
        s = i(23881),
        o = i(63394),
        c = i(67868),
        d = i(54355),
        u = i(93393),
        m = i(53961),
        k = i(60808),
        v = i(77596),
        _ = i.n(v);
      let p = (0, l.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            withPodcastName: l = !1,
            className: v,
            withDNDBlock: p,
            isDragging: x,
            draggingClassName: C,
          } = t,
          y = (0, o.qm)({ playContextParams: i, entityId: e.entityId }),
          b = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(c.Df, {
                isAvailable: e.isAvailable,
                isDisliked: e.isDisliked,
                coverUri: e.coverUri,
                title: e.title,
                className: _().playButtonCell,
                ...t,
              }),
            [e],
          );
        return (0, a.jsx)(k.f, {
          className: (0, n.W)(v, { [_().trackWithDots]: p }),
          track: e,
          meta: (0, a.jsx)(m.PodcastMeta, { track: e, withPodcastName: l }),
          playButtonCellRender: b,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: e,
            className: _().controlsBarCell,
          }),
          beforeBlock: p
            ? (0, a.jsx)(d.x, {
                className: (0, n.W)(_().dots, C),
                isDragging: x,
              })
            : void 0,
          ...y,
          ...(0, s.BA)(s.bG.track.TRACK_PODCAST),
        });
      });
    },
    62452: function (t) {
      t.exports = {
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
    8554: function (t) {
      t.exports = {
        root: "DisclaimerModal_root__sidbk",
        content: "DisclaimerModal_content___tRvp",
      };
    },
    47283: function (t) {
      t.exports = {
        message: "NotificationDislike_message__R2jfZ",
        text: "NotificationDislike_text__xmrnn",
        cover: "NotificationDislike_cover__bvqFM",
        image: "NotificationDislike_image__h0_EO",
      };
    },
    81032: function (t) {
      t.exports = {
        root: "DragAndDropIcon_root__OstQU",
        root_active: "DragAndDropIcon_root_active__xOTKt",
      };
    },
    26889: function (t) {
      t.exports = {
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
    41894: function (t) {
      t.exports = {
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
    14795: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        explicitMark: "PodcastMeta_explicitMark__IstkP",
        dateWithName: "PodcastMeta_dateWithName__cKy0o",
        podcastName: "PodcastMeta_podcastName__iQeNK",
        soonDate: "PodcastMeta_soonDate__zGuG9",
        dateDisabled: "PodcastMeta_dateDisabled__DxjtJ",
        dateDisliked: "PodcastMeta_dateDisliked__95MlL",
      };
    },
    33273: function (t) {
      t.exports = {
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
    56819: function (t) {
      t.exports = {
        root: "ContextSubMenuAddToPlaylist_root__ZGm6z",
        content: "ContextSubMenuAddToPlaylist_content__isTx4",
        virtualScroll: "ContextSubMenuAddToPlaylist_virtualScroll__SJG3e",
        important: "ContextSubMenuAddToPlaylist_important__OUL53",
        shimmer: "ContextSubMenuAddToPlaylist_shimmer__uQHAL",
      };
    },
    66563: function (t) {
      t.exports = {
        root: "Track_root__dbDjD",
        root_disabled: "Track_root_disabled__53T42",
        ripple: "Track_ripple__f8iBh",
      };
    },
    98129: function (t) {
      t.exports = {
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
    55491: function (t) {
      t.exports = {
        playButtonCell: "TrackAlbum_playButtonCell__pLJte",
        controlsBarCell: "TrackAlbum_controlsBarCell__XUUCc",
      };
    },
    61383: function (t) {
      t.exports = {
        playButtonCell: "TrackChart_playButtonCell__cvY7u",
        controlsBarCell: "TrackChart_controlsBarCell__Xd5pn",
        chartCell: "TrackChart_chartCell__33_al",
      };
    },
    25803: function (t) {
      t.exports = {
        playButtonCell: "TrackPlaylist_playButtonCell__Q6YT_",
        controlsBarCell: "TrackPlaylist_controlsBarCell__6clda",
        dots: "TrackPlaylist_dots__nLYej",
        trackWithDots: "TrackPlaylist_trackWithDots__EU6LD",
      };
    },
    98387: function (t) {
      t.exports = {
        playButtonCell: "TrackPlaylistAddition_playButtonCell__Ocnhq",
        controls: "TrackPlaylistAddition_controls__S346Y",
        button: "TrackPlaylistAddition_button__fsY9k",
      };
    },
    77596: function (t) {
      t.exports = {
        playButtonCell: "TrackPodcast_playButtonCell___b_gp",
        controlsBarCell: "TrackPodcast_controlsBarCell__dwTYj",
        dots: "TrackPodcast_dots__zPetf",
        trackWithDots: "TrackPodcast_trackWithDots__RglTQ",
      };
    },
  },
]);
