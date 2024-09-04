(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4023],
  {
    98342: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return l;
        },
      });
      var a = {};
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createRipple = void 0),
        (a.createRipple = function (t, e, i) {
          let a = null != i ? i : t.currentTarget,
            l = document.createElement("span"),
            n = Math.max(a.clientWidth, a.clientHeight),
            r = n / 2,
            s = a.getBoundingClientRect(),
            o = 0 === t.clientX ? Math.round(s.width / 2) : t.clientX - s.left,
            c = 0 === t.clientY ? Math.round(s.height / 2) : t.clientY - s.top;
          (l.style.width = "".concat(n, "px")),
            (l.style.height = "".concat(n, "px")),
            (l.style.left = 0 === t.clientX ? "0px" : "".concat(o - r, "px")),
            (l.style.top = "".concat(c - r, "px")),
            l.classList.add(e);
          let d = a.getElementsByClassName(e)[0];
          d && d.remove(), a.insertBefore(l, a.firstChild);
        }),
        a.__esModule;
      var l = a.createRipple;
    },
    20121: function (t, e, i) {
      "use strict";
      i.d(e, {
        em: function () {
          return f;
        },
        F8: function () {
          return D;
        },
        nU: function () {
          return u;
        },
        $H: function () {
          return r;
        },
      });
      var a = i(98639),
        l = i(3429),
        n = i(38527);
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
          } = (0, n.oR4)(),
          u = (0, a.useRef)(String((0, l.Z)())),
          m = (0, a.useRef)(!1),
          _ = (0, n.uK4)().get(n.ceh);
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
                let i = _.get(n.BUb.ExEx);
                if (
                  r &&
                  (null == i ? void 0 : i.includes("".concat(e, "_").concat(s)))
                ) {
                  null == o || o();
                  return;
                }
                switch ((t.preventDefault(), e)) {
                  case n.coP.ARTIST:
                    await c.getArtistDisclaimer({ artistId: String(s) });
                    break;
                  case n.coP.ALBUM:
                  case n.coP.PODCAST:
                  case n.coP.AUDIOBOOK:
                    await c.getAlbumDisclaimer({ albumId: Number(s) });
                    break;
                  case n.coP.TRACK:
                    await c.getTrackDisclaimer({ trackId: String(s) });
                }
                r && c.setType(n.Gq.UNSAFE),
                  c.setId(u.current),
                  c.setEntityId(s),
                  c.setEntityType(e),
                  (m.current = !1),
                  d.open();
                return;
              }
              null == o || o();
            },
            [o, c, d, s, e, i, r, _],
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
          loadingState: s.V5.enumeration(Object.values(n.Gui)),
          data: s.V5.maybeNull(d),
          type: s.V5.maybeNull(s.V5.enumeration(Object.values(n.Gq))),
          id: s.V5.maybeNull(s.V5.string),
          entityType: s.V5.maybeNull(s.V5.enumeration(Object.values(n.coP))),
          entityId: s.V5.maybeNull(s.V5.union(s.V5.string, s.V5.number)),
          isUnsafeDisclaimerConfirmed: s.V5.optional(s.V5.boolean, !1),
          shouldHistoryBack: s.V5.optional(s.V5.boolean, !1),
        })
          .views((t) => ({
            get isLoading() {
              return (
                t.loadingState === n.Gui.IDLE ||
                t.loadingState === n.Gui.PENDING
              );
            },
            get isRejected() {
              return t.loadingState === n.Gui.REJECT;
            },
          }))
          .actions((t) => ({
            getArtistDisclaimer: (0, s.ls)(function* (e) {
              let { artistId: i } = e,
                { artistsResource: a, modelActionsLogger: l } = (0, s.dU)(t);
              if (t.loadingState !== n.Gui.PENDING)
                try {
                  t.loadingState = n.Gui.PENDING;
                  let e = yield a.getDisclaimer({ artistId: i });
                  e.modal && (t.data = o(e.modal)),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.RESOLVE);
                } catch (e) {
                  l.error(e),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.REJECT);
                }
            }),
            getAlbumDisclaimer: (0, s.ls)(function* (e) {
              let { albumId: i } = e,
                { albumResource: a, modelActionsLogger: l } = (0, s.dU)(t);
              if (t.loadingState !== n.Gui.PENDING)
                try {
                  t.loadingState = n.Gui.PENDING;
                  let e = yield a.getDisclaimer({ albumId: i });
                  e.modal && (t.data = o(e.modal)),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.RESOLVE);
                } catch (e) {
                  l.error(e),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.REJECT);
                }
            }),
            getTrackDisclaimer: (0, s.ls)(function* (e) {
              let { trackId: i } = e,
                { tracksResource: a, modelActionsLogger: l } = (0, s.dU)(t);
              if (t.loadingState !== n.Gui.PENDING)
                try {
                  t.loadingState = n.Gui.PENDING;
                  let e = yield a.getDisclaimer({ trackId: i });
                  e.modal && (t.data = o(e.modal)),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.RESOLVE);
                } catch (e) {
                  l.error(e),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.REJECT);
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
              (t.loadingState = n.Gui.IDLE),
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
        _ = i(60836),
        k = i(9544),
        p = i(31014),
        v = i(23881),
        x = i(39513),
        C = i(90679),
        y = i(2570),
        b = i(3084),
        g = i(62452),
        h = i.n(g);
      let T = {
          [n.coP.ALBUM]: (0, m.jsx)(p.Z, {
            id: "extra-explicit.confirm-unsafe-album",
          }),
          [n.coP.PODCAST]: (0, m.jsx)(p.Z, {
            id: "extra-explicit.confirm-unsafe-podcast",
          }),
          [n.coP.ARTIST]: (0, m.jsx)(p.Z, {
            id: "extra-explicit.confirm-unsafe-artist",
          }),
          [n.coP.TRACK]: (0, m.jsx)(p.Z, {
            id: "extra-explicit.confirm-unsafe-track",
          }),
          [n.coP.AUDIOBOOK]: (0, m.jsx)(p.Z, {
            id: "extra-explicit.confirm-unsafe-audiobook",
          }),
        },
        f = (0, k.Pi)((t) => {
          var e, i, l, r;
          let { disclaimer: s, onClose: o, className: c } = t,
            { data: d, isLoading: u } = null != s ? s : {},
            { href: k } = (0, n.zBm)(
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
            g = (0, n.k67)(),
            f = (0, n.s0h)("/"),
            N = (0, n.uK4)().get(n.ceh),
            j = (0, a.useCallback)(() => {
              if (o) return o();
              g.canBack && g.back(), f();
            }, [o, g, f]),
            A =
              (null == d
                ? void 0
                : null === (l = d.details) || void 0 === l
                  ? void 0
                  : l.url) && d.details.text,
            D = (0, a.useCallback)(() => {
              null == s || s.setConfirmUnsafeDisclaimer(!0);
              let t = N.get(n.BUb.ExEx),
                e = new Date(),
                i = e.setMinutes(e.getMinutes() + 15);
              t
                ? N.set(
                    n.BUb.ExEx,
                    [
                      ...t,
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  )
                : N.set(
                    n.BUb.ExEx,
                    [
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  ),
                null == o || o();
            }, [s, N, o]),
            L = (0, a.useCallback)(() => {
              (null == s ? void 0 : s.shouldHistoryBack)
                ? (null == o || o(), g.canBack && g.back(), f())
                : null == o || o();
            }, [null == s ? void 0 : s.shouldHistoryBack, g, f, o]);
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
                      className: (0, _.W)(h().title, h().text),
                      ...(0, v.BA)(v.FK.disclaimer.DISCLAIMER_TITLE),
                      children: d.title,
                    }),
                    (0, m.jsx)(y.Caption, {
                      variant: "div",
                      size: "l",
                      weight: "normal",
                      className: h().text,
                      ...(0, v.BA)(v.FK.disclaimer.DISCLAIMER_DESCRIPTION),
                      children: d.description,
                    }),
                    A &&
                      (0, m.jsx)(b.rU, {
                        href: k,
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
            }, [u, d, k, A]),
            E = (0, a.useMemo)(
              () =>
                u
                  ? (0, m.jsx)(C.Shimmer, {
                      radius: "xl",
                      width: 190,
                      height: 50,
                      className: h().shimmer,
                    })
                  : (null == s ? void 0 : s.type) === n.Gq.UNSAFE
                    ? (0, m.jsxs)("div", {
                        className: h().buttons,
                        children: [
                          (0, m.jsx)(x.z, {
                            color: "primary",
                            onClick: L,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: (0, m.jsx)(p.Z, {
                              id: "extra-explicit.reject-unsafe-entity",
                            }),
                          }),
                          (0, m.jsx)(x.z, {
                            color: "secondary",
                            onClick: D,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: s.entityType && T[s.entityType],
                          }),
                        ],
                      })
                    : (0, m.jsx)("div", {
                        className: h().buttons,
                        children: (0, m.jsx)(x.z, {
                          color: "primary",
                          onClick: j,
                          size: "l",
                          radius: "xxxl",
                          className: h().button,
                          ...(0, v.BA)(
                            v.FK.disclaimer.DISCLAIMER_REJECT_BUTTON,
                          ),
                          children: (0, m.jsx)(p.Z, {
                            id: "interface-actions.confirm",
                          }),
                        }),
                      }),
              [
                D,
                null == s ? void 0 : s.entityType,
                null == s ? void 0 : s.type,
                j,
                u,
                L,
              ],
            );
          return (0, m.jsx)("div", {
            className: (0, _.W)(h().root, c),
            ...(0, v.BA)(v.FK.disclaimer.DISCLAIMER_MODAL),
            children: (0, m.jsxs)("div", {
              className: h().container,
              children: [I, E],
            }),
          });
        });
      var N = i(89352),
        j = i(8554),
        A = i.n(j);
      let D = (0, k.Pi)(() => {
        let {
          disclaimer: t,
          modals: { disclaimerModal: e },
        } = (0, n.oR4)();
        return (0, m.jsx)(N.u, {
          size: "fitContent",
          placement: "center",
          open: e.isOpened,
          onOpenChange: e.onOpenChange,
          onClose: e.close,
          showHeader: !1,
          className: A().root,
          contentClassName: A().content,
          children: (0, m.jsx)(f, { disclaimer: t, onClose: e.close }),
        });
      });
    },
    44023: function (t, e, i) {
      "use strict";
      i.d(e, {
        MG: function () {
          return I.AudiobookMeta;
        },
        jt: function () {
          return A.ControlsBar;
        },
        Jx: function () {
          return h;
        },
        wT: function () {
          return L.PodcastMeta;
        },
        RJ: function () {
          return c.TrackAlbum;
        },
        G7: function () {
          return f.TrackCard;
        },
        _3: function () {
          return o.TrackChart;
        },
        hz: function () {
          return j.TrackContextMenu;
        },
        Nl: function () {
          return W;
        },
        ko: function () {
          return D.TrackMeta;
        },
        le: function () {
          return v;
        },
        FP: function () {
          return r.TrackNonMusic;
        },
        O2: function () {
          return a.TrackPlaylist;
        },
        VZ: function () {
          return n.TrackPlaylistAddition;
        },
        dn: function () {
          return d.TrailerTrackAlbum;
        },
        fY: function () {
          return l.TrailerTrackPlaylist;
        },
        bc: function () {
          return C;
        },
        cO: function () {
          return s.c;
        },
        S7: function () {
          return T;
        },
        o: function () {
          return R;
        },
        E5: function () {
          return P;
        },
        Vt: function () {
          return g;
        },
        Z2: function () {
          return N;
        },
        Wc: function () {
          return S.W;
        },
        nD: function () {
          return B.useTrackDisclaimer;
        },
      });
      var a = i(1776),
        l = i(71456),
        n = i(5670),
        r = i(5510),
        s = i(80485),
        o = i(96414),
        c = i(639);
      i(53368);
      var d = i(37379),
        u = i(42288),
        m = i(38360),
        _ = i(33589),
        k = i(94342),
        p = i(78604);
      let v = p.yp
          .props({
            artists: u.V5.array(_.Go),
            albums: u.V5.array(m.KX),
            chart: u.V5.maybe(k.BH),
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
              var l, n, r;
              return null !==
                (r =
                  null === (n = t.albums[0]) || void 0 === n
                    ? void 0
                    : null === (l = n.trackPosition) || void 0 === l
                      ? void 0
                      : l.index) && void 0 !== r
                ? r
                : null;
            },
          }))
          .named("Track"),
        x = u.V5.model("Credit", { title: u.V5.string, value: u.V5.string }),
        C = u.V5.compose(v, p.v$).named("UgcTrack");
      var y = i(38527),
        b = i(395);
      let g = (t, e) => {
          var i, a;
          let l =
              null === (i = t.artists) || void 0 === i ? void 0 : i.map(_.d),
            n = null === (a = t.albums) || void 0 === a ? void 0 : a.map(m.N);
          return (0, u.pj)({ ...(0, p.Ni)(t, e), artists: l, albums: n });
        },
        h = u.V5.model("CurrentTrackInfo", {
          id: u.V5.maybeNull(u.V5.union(u.V5.string, u.V5.number)),
          albumId: u.V5.maybeNull(u.V5.number),
          isUGC: u.V5.maybeNull(u.V5.boolean),
          trackLoadingState: u.V5.enumeration(Object.values(y.Gui)),
          fullTrack: u.V5.maybeNull(v),
          creditsLoadingState: u.V5.enumeration(Object.values(y.Gui)),
          credits: u.V5.maybeNull(u.V5.array(x)),
          modal: b.KL,
          fullDescription: u.V5.maybeNull(u.V5.string),
          descriptionLoadingState: u.V5.enumeration(Object.values(y.Gui)),
        })
          .views((t) => ({
            get isTrackIdle() {
              return t.trackLoadingState === y.Gui.IDLE;
            },
            get isCreditsIdle() {
              return t.creditsLoadingState === y.Gui.IDLE;
            },
            get isTrackLoading() {
              return (
                t.trackLoadingState === y.Gui.PENDING ||
                t.trackLoadingState === y.Gui.IDLE
              );
            },
            get isTrackRejected() {
              return t.trackLoadingState === y.Gui.REJECT;
            },
            get isCreditsLoading() {
              return (
                t.creditsLoadingState === y.Gui.PENDING ||
                t.creditsLoadingState === y.Gui.IDLE
              );
            },
            get isCreditsRejected() {
              return t.creditsLoadingState === y.Gui.REJECT;
            },
            get isRejected() {
              return (
                t.creditsLoadingState === y.Gui.REJECT &&
                t.trackLoadingState === y.Gui.REJECT
              );
            },
          }))
          .actions((t) => ({
            setTrack(e) {
              let { id: i, albumId: a, isUGC: l } = e;
              (t.id = i), (t.albumId = a), (t.isUGC = l);
            },
            getFullTrack: (0, u.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, u.dU)(t);
              if (!t.id || t.trackLoadingState === y.Gui.PENDING) return null;
              try {
                t.trackLoadingState = y.Gui.PENDING;
                let i = yield e.getFullInfoTrack({
                  trackId: t.id,
                  albumId: t.albumId,
                });
                if (!i) return null;
                (t.fullTrack = (0, u.pj)(g(i.track))),
                  (t.trackLoadingState = y.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.trackLoadingState = y.Gui.REJECT);
              }
              return null;
            }),
            getFullDescription: (0, u.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, u.dU)(t);
              if (!t.id || t.descriptionLoadingState === y.Gui.PENDING)
                return null;
              try {
                t.descriptionLoadingState = y.Gui.PENDING;
                let i = yield e.getFullDescriptionTrack({ trackId: t.id });
                if (!i) return null;
                (t.fullDescription = i.description),
                  (t.descriptionLoadingState = y.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.descriptionLoadingState = y.Gui.REJECT);
              }
              return null;
            }),
            getTrackMeta: (0, u.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, u.dU)(t);
              if (!t.id || t.trackLoadingState === y.Gui.PENDING) return null;
              try {
                t.trackLoadingState = y.Gui.PENDING;
                let i = yield e.getTracksMeta({
                  trackIds: [t.id],
                  removeDuplicates: !0,
                });
                if (!i || !i.length) return null;
                i[0] &&
                  ((t.fullTrack = (0, u.pj)(g(i[0]))),
                  (t.trackLoadingState = y.Gui.RESOLVE));
              } catch (e) {
                i.error(e), (t.trackLoadingState = y.Gui.REJECT);
              }
              return null;
            }),
            getCreditsInfo: (0, u.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, u.dU)(t);
              if (!t.id || t.creditsLoadingState === y.Gui.PENDING) return null;
              try {
                t.creditsLoadingState = y.Gui.PENDING;
                let i = yield e.getCredits({ trackId: t.id });
                (t.credits = (0, u.pj)(null == i ? void 0 : i.credits)),
                  (t.creditsLoadingState = y.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.creditsLoadingState = y.Gui.REJECT);
              }
              return null;
            }),
            reset() {
              (t.id = null),
                (t.albumId = null),
                (t.isUGC = null),
                (t.trackLoadingState = y.Gui.IDLE),
                (t.descriptionLoadingState = y.Gui.IDLE),
                (t.creditsLoadingState = y.Gui.IDLE),
                (t.fullTrack = null),
                (t.credits = null);
            },
          })),
        T = (t, e) => (0, u.pj)({ ...g(t), chart: e && (0, k.W5)(e) });
      var f = i(99846);
      let N = (t) => {
        var e, i;
        return (0, u.pj)({
          ...g(t),
          artists:
            null !==
              (i =
                null == t
                  ? void 0
                  : null === (e = t.artists) || void 0 === e
                    ? void 0
                    : e.map(_.d)) && void 0 !== i
              ? i
              : [],
        });
      };
      var j = i(82245),
        A = i(93393);
      i(76315);
      var D = i(47192),
        L = i(53961),
        I = i(83906),
        E = i(15419);
      let P = (t) => ({
        type: E.RX.Unloaded,
        meta: { id: t.albumId ? "".concat(t.id, ":").concat(t.albumId) : t.id },
      });
      var S = i(16030),
        B = i(44660),
        M = i(38009);
      let R = (t, e) => {
        let i = Math.floor(Date.now() / 1e3),
          a = "".concat(t).concat(i);
        return {
          sign: (0, M.createHmac)("sha256", (0, y.Sqh)())
            .update(a)
            .digest("base64"),
          timeStamp: i,
          trackId: t,
          format: e,
        };
      };
      var G = i(24244),
        U = i(3429),
        O = i(95695);
      let W = u.V5.model("TrackLyrics", {
        loadingState: u.V5.enumeration(Object.values(y.Gui)),
        lyrics: u.V5.maybeNull(u.V5.string),
        major: u.V5.maybeNull(p.bP),
        lyricId: u.V5.maybeNull(u.V5.number),
        writers: u.V5.array(u.V5.string),
        externalLyricId: u.V5.maybeNull(u.V5.string),
        modal: b.KL,
        track: u.V5.maybeNull(v),
        prevTrackId: u.V5.maybeNull(u.V5.union(u.V5.string, u.V5.number)),
      })
        .views((t) => ({
          get isNeededToLoad() {
            return t.loadingState === y.Gui.IDLE;
          },
          get isLoading() {
            return (
              t.loadingState === y.Gui.IDLE || t.loadingState === y.Gui.PENDING
            );
          },
          get isRejected() {
            return t.loadingState === y.Gui.REJECT;
          },
          get isResolve() {
            return t.loadingState === y.Gui.RESOLVE;
          },
          get writersNames() {
            return t.writers.join(", ");
          },
          get hasWriters() {
            return 0 !== t.writers.length;
          },
          get isPrevTrack() {
            var e;
            return (
              t.prevTrackId ===
              (null === (e = t.track) || void 0 === e ? void 0 : e.id)
            );
          },
        }))
        .actions((t) => {
          let e = {
            setTrack(e) {
              t.track = (0, u.pj)({ ...(0, G.ZN)(e) });
            },
            getLyrics: (0, u.ls)(function* (i) {
              let { tracksResource: a, modelActionsLogger: l } = (0, u.dU)(t);
              if (t.loadingState !== y.Gui.PENDING && !t.isPrevTrack)
                try {
                  (t.loadingState = y.Gui.PENDING), (t.lyrics = null);
                  let {
                    downloadUrl: l,
                    major: n,
                    externalLyricId: r,
                    lyricId: s,
                    writers: o,
                  } = yield a.getLyrics(R(i, O.yG.TEXT));
                  yield e.downloadLyrics(l),
                    (t.major = (0, p.jp)(n)),
                    (t.externalLyricId = r),
                    (t.lyricId = s),
                    (t.writers = (0, u.pj)(o || [])),
                    (t.prevTrackId = i),
                    (t.loadingState = y.Gui.RESOLVE);
                } catch (e) {
                  (t.loadingState = y.Gui.REJECT), l.error(e);
                }
            }),
            downloadLyrics: (0, u.ls)(function* (e) {
              let { tracksResource: i } = (0, u.dU)(t),
                a = yield i.getLyricsText(e);
              t.lyrics = a;
            }),
            sendViews: (0, u.ls)(function* (e) {
              let { trackId: i, albumId: a } = e,
                { lyricViewsResource: l, modelActionsLogger: n } = (0, u.dU)(t);
              if (t.loadingState === y.Gui.RESOLVE || t.isPrevTrack)
                try {
                  if (!t.major || !t.lyricId || !t.externalLyricId) return;
                  yield l.sendViews({
                    lyricViews: [
                      {
                        id: (0, U.Z)(),
                        trackId: i,
                        majorId: t.major.id,
                        lyricId: t.lyricId,
                        externalLyricId: t.externalLyricId,
                        lyricFormat: O.yG.TEXT,
                        albumId: a,
                      },
                    ],
                  });
                } catch (t) {
                  n.error(t);
                }
            }),
            reset() {
              t.loadingState = y.Gui.IDLE;
            },
          };
          return e;
        });
      i(11867), i(49522);
    },
    18269: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return l;
        },
      });
      var a = i(90454);
      let l = function () {
        var t, e;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (
          null === (e = i[0]) || void 0 === e
            ? void 0
            : null === (t = e.decomposed) || void 0 === t
              ? void 0
              : t.length
        )
          return i;
        let n = l.map((t) => t.id).sort(),
          r = i.map((t) => t.id).sort();
        return (0, a.Z)(n, r) ? [] : i.filter((t) => !t.various);
      };
    },
    16030: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return o;
        },
      });
      var a = i(9753),
        l = i(98639),
        n = i(10668),
        r = i(78604),
        s = i(38527);
      let o = () => {
        let { notify: t } = (0, s.d$W)(),
          { playlist: e, fullscreenPlayer: i } = (0, s.oR4)(),
          o = (0, s.RVp)(),
          c = (0, l.useCallback)(
            (l) => {
              var c, d;
              let {
                withSuccessNotification: u,
                withPageRefresh: m,
                playlist: _,
                track: k,
              } = l;
              if (u) {
                let e = (0, r.tx)(k, o);
                t(
                  (0, a.jsx)(n.XD, {
                    entityTitle: k.title,
                    entityVariant: e,
                    entityCoverUri:
                      null !== (d = k.coverUri) && void 0 !== d ? d : "",
                    playlist: _,
                  }),
                  {
                    containerId: i.modal.isOpened
                      ? s.W$x.FULLSCREEN_INFO
                      : s.W$x.INFO,
                  },
                );
              }
              m &&
                _.uuid ===
                  (null === (c = e.meta) || void 0 === c ? void 0 : c.uuid) &&
                e.refresh();
            },
            [i.modal.isOpened, o, t, e],
          ),
          d = (0, l.useCallback)(
            (e) => {
              let { withFailNotification: l } = e;
              l &&
                t((0, a.jsx)(n.wi, {}), {
                  containerId: i.modal.isOpened
                    ? s.W$x.FULLSCREEN_ERROR
                    : s.W$x.ERROR,
                });
            },
            [i.modal.isOpened, t],
          );
        return (0, l.useCallback)(
          async (t) => {
            var e;
            let {
                playlist: i,
                track: a,
                withSuccessNotification: l = !0,
                withFailNotification: r = !0,
                withPageRefresh: s = !0,
              } = t,
              o = await i.changePlaylist(
                (0, n.PG)({
                  operation: n.aL.INSERT,
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
              o === n.pX.OK
                ? c({
                    withSuccessNotification: l,
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
    11867: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return o;
        },
      });
      var a = i(9753),
        l = i(98639),
        n = i(10668),
        r = i(78604),
        s = i(38527);
      let o = () => {
        let { notify: t } = (0, s.d$W)(),
          { playlist: e, fullscreenPlayer: i } = (0, s.oR4)(),
          o = (0, s.RVp)(),
          c = (0, l.useCallback)(
            (l) => {
              var c, d;
              let {
                withSuccessNotification: u,
                withPageRefresh: m,
                playlist: _,
                track: k,
              } = l;
              if (u && k && _) {
                let e = (0, r.tx)(k, o);
                t(
                  (0, a.jsx)(n.H2, {
                    entityTitle: k.title,
                    entityVariant: e,
                    entityCoverUri:
                      null !== (d = k.coverUri) && void 0 !== d ? d : "",
                    playlist: _,
                  }),
                  {
                    containerId: i.modal.isOpened
                      ? s.W$x.FULLSCREEN_INFO
                      : s.W$x.INFO,
                  },
                );
              }
              m &&
                (null == _ ? void 0 : _.uuid) ===
                  (null === (c = e.meta) || void 0 === c ? void 0 : c.uuid) &&
                e.refresh();
            },
            [i.modal.isOpened, o, t, e],
          ),
          d = (0, l.useCallback)(
            (e) => {
              let { withFailNotification: l } = e;
              l &&
                t((0, a.jsx)(n.BQ, {}), {
                  containerId: i.modal.isOpened
                    ? s.W$x.FULLSCREEN_ERROR
                    : s.W$x.ERROR,
                });
            },
            [i.modal.isOpened, t],
          );
        return (0, l.useCallback)(
          async (t) => {
            let {
                playlist: e,
                track: i,
                trackIndex: a,
                withSuccessNotification: l = !0,
                withFailNotification: r = !0,
                withPageRefresh: s = !0,
              } = t,
              o = await e.changePlaylist(
                (0, n.PG)({
                  operation: n.aL.DELETE,
                  startPosition: a,
                  endPosition: a + 1,
                }),
              );
            return (
              o === n.pX.OK
                ? c({
                    withSuccessNotification: l,
                    withPageRefresh: s,
                    playlist: e,
                    track: i,
                  })
                : d({ withFailNotification: r }),
              o
            );
          },
          [c, d],
        );
      };
    },
    49522: function (t, e, i) {
      "use strict";
      i.d(e, {
        useRemoveTrackFromPlaylistByIndex: function () {
          return c;
        },
      });
      var a = i(9753),
        l = i(98639),
        n = i(80542),
        r = i(10668),
        s = i(38527),
        o = i(3084);
      let c = () => {
        let { playlist: t, trackIndex: e } = (0, l.useContext)(r.jK) || {},
          { notify: i } = (0, s.d$W)(),
          { playlist: c } = (0, s.oR4)(),
          { formatMessage: d } = (0, n.Z)(),
          u = (0, l.useCallback)(async () => {
            let l = !1;
            if (
              (t &&
                "number" == typeof e &&
                (await t.changePlaylist(
                  (0, r.PG)({
                    operation: r.aL.DELETE,
                    startPosition: e,
                    endPosition: e + 1,
                  }),
                )) === r.pX.OK &&
                (l = !0),
              l)
            ) {
              if (t && "number" == typeof e) {
                var n;
                t.uuid ===
                  (null === (n = c.meta) || void 0 === n ? void 0 : n.uuid) &&
                  c.removeTracksFromItems(e, 1);
              }
            } else
              i(
                (0, a.jsx)(o.Q, {
                  error: d({ id: "playlist-errors.failed-to-remove-track" }),
                }),
                { containerId: s.W$x.ERROR },
              );
          }, [t, e, c, i, d]);
        return {
          canRemoveTrackFromPlaylist: !!(null == t ? void 0 : t.canUserChange),
          removeTrackFromPlaylist: u,
        };
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
        l = i(3429),
        n = i(38527);
      let r = (t) => {
        let { track: e, callback: i } = t,
          {
            disclaimer: r,
            modals: { disclaimerModal: s },
          } = (0, n.oR4)(),
          o = (0, a.useRef)(String((0, l.Z)())),
          c = (0, a.useRef)(!1),
          d = (0, n.uK4)().get(n.ceh);
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
                let a = d.get(n.BUb.ExEx);
                if (
                  e.isUnsafeLegal &&
                  (null == a
                    ? void 0
                    : a.includes("".concat(n.coP.TRACK, "_").concat(e.id)))
                ) {
                  null == i || i();
                  return;
                }
                null == t || t.preventDefault(),
                  await r.getTrackDisclaimer({ trackId: e.id }),
                  e.isUnsafeLegal && r.setType(n.Gq.UNSAFE),
                  r.setId(o.current),
                  r.setEntityId(e.id),
                  r.setEntityType(n.coP.TRACK),
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
    76315: function (t, e, i) {
      "use strict";
      i.d(e, {
        useTrackModalTitle: function () {
          return n;
        },
      });
      var a = i(80542),
        l = i(95695);
      let n = (t) => {
        var e;
        let { formatMessage: i } = (0, a.Z)();
        return i(
          (null == t ? void 0 : t.type) === l.Vc.AUDIOBOOK
            ? { id: "track-modal.audiobook-title" }
            : (null == t ? void 0 : t.isTrackPodcast) ||
                (null == t
                  ? void 0
                  : null === (e = t.mainAlbum) || void 0 === e
                    ? void 0
                    : e.isPodcast)
              ? { id: "track-modal.podcast-title" }
              : { id: "track-modal.title" },
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
        l = i(60836),
        n = i(28852),
        r = i(81032),
        s = i.n(r);
      let o = (t) => {
        let { isDragging: e, className: i } = t;
        return (0, a.jsx)(n.J, {
          variant: "dragDots",
          size: "xxs",
          className: (0, l.W)(s().root, { [s().root_active]: e }, i),
          "aria-hidden": !0,
        });
      };
    },
    93393: function (t, e, i) {
      "use strict";
      i.d(e, {
        ControlsBar: function () {
          return x;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(23881),
        c = i(28852),
        d = i(2570),
        u = i(78604),
        m = i(38527),
        _ = i(3084),
        k = i(82245),
        p = i(26889),
        v = i.n(p);
      let x = (0, n.Pi)((t) => {
        let {
            className: e,
            track: i,
            withLightning: n,
            ignoreDislikedStyles: p,
          } = t,
          { user: x } = (0, m.oR4)(),
          { formatMessage: C } = (0, s.Z)(),
          { sendLikeSearchFeedback: y } = (0, m.sAF)(),
          [b, g] = (0, r.useState)(!1),
          [h, T] = (0, r.useState)(!1),
          f = (0, u.SB)(i),
          N = (0, u.KX)(i),
          j = (0, r.useMemo)(() => {
            let t = Math.round((i.durationMs || 0) / 1e3);
            return (0, m.gf)(t);
          }, [i.durationMs]),
          A = (0, r.useCallback)(() => {
            b || i.isLiked || (g(!0), null == y || y()), f();
          }, [f, b, y, i.isLiked]),
          D = (0, r.useCallback)((t) => {
            t.stopPropagation();
          }, []),
          L = (0, r.useMemo)(() => {
            if (x.isAuthorized && !i.isRemoved && i.isAvailable)
              return (0, a.jsx)(k.TrackContextMenu, {
                track: i,
                open: h,
                onOpenChange: T,
                placement: "bottom",
                icon: (0, a.jsx)(c.J, { size: "xs", variant: "more" }),
                size: "xs",
                onClick: D,
                className: (0, l.W)(v().contextMenu, {
                  [v().contextMenu_visible]: h,
                }),
                ...(0, o.BA)(o.QM.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON),
              });
          }, [D, h, i, x.isAuthorized]);
        return (0, a.jsxs)("div", {
          className: (0, l.W)(v().root, v().controls, e, {
            [v().controls_dislikedControls]: i.isDisliked,
            [v().controls_dislikedColors]: i.isDisliked && !p,
            [v().controls_disabled]: !i.isAvailable,
          }),
          children: [
            n &&
              (0, a.jsx)(c.J, {
                "aria-label": C({ id: "entity-names.popular-among-users" }),
                size: "xxs",
                className: v().lightning,
                variant: "lightning",
              }),
            x.isAuthorized &&
              !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(_.dJ, {
                size: "xs",
                iconSize: "xxs",
                className: (0, l.W)(v().item, v().likeIcon),
                isLiked: i.isLiked,
                onClick: A,
              }),
            x.isAuthorized &&
              !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(_.Q1, {
                size: "xs",
                iconSize: "xxs",
                className: (0, l.W)(v().item, v().dislikeIcon),
                isDisliked: i.isDisliked,
                onClick: N,
              }),
            (0, a.jsxs)("div", {
              className: (0, l.W)(v().item, v().contextMenuWrapper),
              children: [
                "number" == typeof i.durationMs &&
                  (0, a.jsx)(d.Caption, {
                    variant: "span",
                    className: (0, l.W)(v().duration, {
                      [v().duration_hidden]: h,
                    }),
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    children: j,
                  }),
                L,
              ],
            }),
          ],
        });
      });
    },
    83906: function (t, e, i) {
      "use strict";
      i.d(e, {
        AudiobookMeta: function () {
          return g;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(96622),
        d = i(2570),
        u = i(33589),
        m = i(20121),
        _ = i(78604),
        k = i(38527),
        p = i(3084),
        v = i(18269),
        x = i(41894),
        C = i.n(x),
        y = i(21116),
        b = i.n(y);
      let g = (0, n.Pi)((t) => {
        let {
            track: e,
            className: i,
            withAuthor: n = !1,
            withSecondaryColor: x = !1,
            withListeningProgress: y = !1,
            captionSize: g = "m",
            explicitSize: h = "xs",
            withExplicitMark: T = !0,
            titleContainerClassName: f,
            textClassName: N,
            playContextParams: j,
            withTimeLeftText: A = !0,
            ignoreDislikedStyles: D,
            withBookLink: L,
            albumArtists: I,
          } = t,
          { fullscreenPlayer: E } = (0, k.oR4)(),
          P = e.mainAlbum,
          { formatMessage: S } = (0, s.Z)(),
          B = (0, k.s0h)(null == P ? void 0 : P.url),
          M = (0, m.$H)({
            entityType: k.coP.AUDIOBOOK,
            entityId: null == P ? void 0 : P.id,
            isLegalRejected: !!(null == P ? void 0 : P.isLegalRejected),
            isUnsafeLegal: !!(null == P ? void 0 : P.isUnsafeLegal),
            callback: B,
          }),
          R = (0, r.useCallback)(
            (t) => {
              E.modal.isOpened && E.modal.close(), M(t);
            },
            [E.modal, M],
          ),
          G = (0, r.useMemo)(
            () => (0, v.p)(e.artists, I),
            [e.artists, I, e.id],
          ),
          U = G.length > 0 && n,
          O = (0, r.useMemo)(
            () =>
              e.isRemoved
                ? (0, a.jsx)(o.Z, { id: "track-title.audiobook-not-found" })
                : L && P
                  ? (0, a.jsx)(p.rU, {
                      "aria-label": S(
                        { id: "entity-names.audiobook-name" },
                        { bookName: P.title },
                      ),
                      className: C().albumLink,
                      href: P.url,
                      title: e.title,
                      onClick: R,
                      children: (0, a.jsx)(d.Caption, {
                        className: C().title,
                        type: "entity",
                        size: g,
                        variant: "span",
                        children: e.title,
                      }),
                    })
                  : (0, a.jsx)(d.Caption, {
                      className: C().title,
                      type: "entity",
                      size: g,
                      variant: "span",
                      title: e.title,
                      children: e.title,
                    }),
            [e.isRemoved, e.title, g, L, P, R, S],
          );
        return (0, a.jsx)("div", {
          className: (0, l.W)(
            C().root,
            {
              [C().root_disabled]: !e.isAvailable,
              [C().root_disliked]: e.isDisliked && !D,
              [C().root_withSecondaryColor]: x,
            },
            i,
          ),
          children: (0, a.jsxs)("div", {
            className: (0, l.W)(C().metaContainer, b().metaContainer, {
              [b().metaContainer_oneLine]: !n,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: (0, l.W)(C().titleContainer, f, b().titleContainer),
                children: [
                  (0, a.jsx)(d.Caption, {
                    className: (0, l.W)(C().text, N),
                    type: "entity",
                    size: g,
                    variant: "div",
                    lineClamp: 1,
                    children: O,
                  }),
                  e.trackExplicitMark &&
                    T &&
                    (0, a.jsx)(c.ExplicitMark, {
                      variant: c.ExplicitMarkVariant.NUMERIC,
                      className: (0, l.W)(C().explicitMark, b().explicitMark),
                      iconSize: h,
                    }),
                ],
              }),
              U &&
                (0, a.jsx)(d.Caption, {
                  type: "entity",
                  size: g,
                  variant: "div",
                  lineClamp: 1,
                  className: (0, l.W)(C().text, b().artists, N),
                  children: (0, a.jsx)(u.jO, {
                    className: (0, l.W)(C().text, C().artists, N),
                    linkClassName: (0, l.W)(C().text, C().link),
                    captionClassName: (0, l.W)(C().text, C().artistCaption),
                    artists: G,
                    withLink: !e.isUGC,
                    lineClamp: 1,
                    captionSize: g,
                    withAllArtistsTitle: !0,
                  }),
                }),
              y &&
                j &&
                e.shouldRememberPosition &&
                e.streamProgress &&
                e.durationMs &&
                (0, a.jsx)(_.DR, {
                  className: (0, l.W)(b().progress, {
                    [b().progress_withPreviousInfo]: U,
                    [b().progress_disabled]: !e.isAvailable || e.isDisliked,
                  }),
                  id: e.id,
                  albumId: e.albumId,
                  streamProgress: e.streamProgress,
                  durationMs: e.durationMs,
                  playContextParams: j,
                  withTimeLeftText: A,
                }),
            ],
          }),
        });
      });
    },
    53961: function (t, e, i) {
      "use strict";
      i.d(e, {
        PodcastMeta: function () {
          return b;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(32693),
        d = i(96622),
        u = i(2570),
        m = i(20121),
        _ = i(78604),
        k = i(38527),
        p = i(3084),
        v = i(41894),
        x = i.n(v),
        C = i(14795),
        y = i.n(C);
      let b = (0, n.Pi)((t) => {
        let {
            track: e,
            className: i,
            withPodcastName: n = !1,
            withDate: v = !0,
            withSecondaryColor: C = !1,
            withListeningProgress: b = !1,
            captionSize: g = "m",
            explicitSize: h = "xs",
            withExplicitMark: T = !0,
            titleContainerClassName: f,
            textClassName: N,
            playContextParams: j,
            withTimeLeftText: A = !0,
            ignoreDislikedStyles: D,
          } = t,
          { fullscreenPlayer: L } = (0, k.oR4)(),
          { formatMessage: I } = (0, s.Z)(),
          E = e.mainAlbum,
          P = E && n,
          S = e.pubDate ? new Date(e.pubDate) : new Date(),
          B = (0, k.u9c)(S),
          M = !1,
          R = (0, k.s0h)("/album/".concat(null == E ? void 0 : E.id)),
          G = (0, m.$H)({
            entityType: k.coP.PODCAST,
            entityId: null == E ? void 0 : E.id,
            isLegalRejected: !!(null == E ? void 0 : E.isLegalRejected),
            isUnsafeLegal: !!(null == E ? void 0 : E.isUnsafeLegal),
            callback: R,
          }),
          U = (0, r.useCallback)(() => {
            switch (B) {
              case k.UvK.TODAY:
                return (0, a.jsx)(o.Z, { id: "interface-actions.date-today" });
              case k.UvK.YESTERDAY:
                return (0, a.jsx)(o.Z, {
                  id: "interface-actions.date-yesterday",
                });
              case k.UvK.DATE_WITH_YEAR:
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
          }, [e.pubDate, B]);
        e.pubDate && v && (M = [k.UvK.TODAY, k.UvK.YESTERDAY].includes(B));
        let O = (0, r.useCallback)(
            (t) => {
              L.modal.isOpened && L.modal.close(), G(t);
            },
            [L.modal, G],
          ),
          W = (0, r.useMemo)(
            () =>
              e.isRemoved
                ? (0, a.jsx)(o.Z, { id: "track-title.podcast-not-found" })
                : (0, a.jsx)(u.Caption, {
                    className: x().title,
                    type: "entity",
                    size: g,
                    variant: "span",
                    children: e.title,
                  }),
            [e.isRemoved, e.title, g],
          );
        return (0, a.jsx)("div", {
          className: (0, l.W)(
            x().root,
            {
              [x().root_disabled]: !e.isAvailable,
              [x().root_disliked]: e.isDisliked && !D,
              [x().root_withSecondaryColor]: C,
            },
            i,
          ),
          children: (0, a.jsxs)("div", {
            className: (0, l.W)(x().metaContainer, y().podcastMetaContainer),
            children: [
              (0, a.jsxs)("div", {
                className: (0, l.W)(
                  x().titleContainer,
                  f,
                  y().podcastTitleContainer,
                ),
                children: [
                  (0, a.jsx)(u.Caption, {
                    className: (0, l.W)(x().text, N),
                    type: "entity",
                    size: g,
                    variant: "div",
                    lineClamp: 1,
                    children: W,
                  }),
                  e.trackExplicitMark &&
                    T &&
                    (0, a.jsx)(d.ExplicitMark, {
                      variant: d.ExplicitMarkVariant.NUMERIC,
                      className: (0, l.W)(x().explicitMark, y().explicitMark),
                      iconSize: h,
                    }),
                ],
              }),
              (0, a.jsxs)(u.Caption, {
                type: "entity",
                size: g,
                variant: "div",
                lineClamp: 1,
                className: (0, l.W)(x().text, y().podcastName, N),
                children: [
                  P &&
                    (0, a.jsx)(p.rU, {
                      "aria-label": I(
                        { id: "entity-names.podcast-name" },
                        { podcastName: E.title },
                      ),
                      className: x().link,
                      href: "/album/".concat(E.id),
                      title: E.title,
                      onClick: O,
                      children: (0, a.jsx)(u.Caption, {
                        variant: "span",
                        type: "entity",
                        size: g,
                        className: x().albumTitle,
                        children: E.title,
                      }),
                    }),
                  e.pubDate &&
                    v &&
                    (0, a.jsx)(u.Caption, {
                      variant: "span",
                      type: "entity",
                      size: g,
                      className: (0, l.W)({
                        [y().dateWithName]: P,
                        [y().soonDate]: M,
                        [y().dateDisabled]: !e.isAvailable,
                        [y().dateDisliked]: e.isDisliked && !D,
                      }),
                      children: U(),
                    }),
                ],
              }),
              b &&
                j &&
                e.shouldRememberPosition &&
                e.streamProgress &&
                e.durationMs &&
                (0, a.jsx)(_.DR, {
                  className: (0, l.W)(y().progress, {
                    [y().progress_withPreviousInfo]: P || (e.pubDate && v),
                    [y().progress_disabled]: !e.isAvailable || e.isDisliked,
                  }),
                  id: e.id,
                  albumId: e.albumId,
                  streamProgress: e.streamProgress,
                  durationMs: e.durationMs,
                  playContextParams: j,
                  withTimeLeftText: A,
                }),
            ],
          }),
        });
      });
    },
    47192: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackMeta: function () {
          return b;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(23881),
        d = i(95695),
        u = i(96622),
        m = i(2570),
        _ = i(33589),
        k = i(38527),
        p = i(3084),
        v = i(18269),
        x = i(44660),
        C = i(41894),
        y = i.n(C);
      let b = (0, n.Pi)((t) => {
        let {
            className: e,
            titleContainerClassName: i,
            track: n,
            albumArtists: C,
            withExplicitMark: b = !0,
            withSecondaryColor: g,
            captionSize: h = "m",
            explicitSize: T = "xxxs",
            withAlbumLink: f,
            withAllArtistsTitle: N,
            textClassName: j,
            artistsClassName: A,
            ignoreDislikedStyles: D,
          } = t,
          { formatMessage: L } = (0, s.Z)(),
          { fullscreenPlayer: I } = (0, k.oR4)(),
          E = (0, k.s0h)("/album/".concat(n.albumId)),
          P = (0, r.useMemo)(() => {
            var t;
            let e = L(
              { id: "entity-names.track-name" },
              { trackName: n.title },
            );
            return ""
              .concat(e, " ")
              .concat(null !== (t = n.version) && void 0 !== t ? t : "");
          }, [L, n.title, n.version]),
          S = (0, x.useTrackDisclaimer)({ track: n, callback: E }),
          B = (0, r.useCallback)(
            (t) => {
              I.modal.isOpened && I.modal.close(), S(t);
            },
            [I.modal, S],
          ),
          M = (0, r.useMemo)(
            () =>
              n.isRemoved
                ? (0, a.jsx)(m.Caption, {
                    className: (0, l.W)(y().text, y().title),
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "span",
                    children: (0, a.jsx)(o.Z, {
                      id: "track-title.error-not-found",
                    }),
                  })
                : n.albumId && f && n.trackSource === d.zu.OWN && n.isAvailable
                  ? (0, a.jsx)(p.rU, {
                      onClick: B,
                      className: y().albumLink,
                      href: "/album/".concat(n.albumId),
                      "aria-label": P,
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: (0, a.jsx)(m.Caption, {
                        className: (0, l.W)(y().text, y().title),
                        type: "entity",
                        size: h,
                        weight: "medium",
                        variant: "span",
                        children: n.title,
                      }),
                    })
                  : (0, a.jsx)(m.Caption, {
                      className: (0, l.W)(y().text, y().title),
                      type: "entity",
                      size: h,
                      weight: "medium",
                      variant: "span",
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: n.title,
                    }),
            [
              h,
              B,
              n.albumId,
              n.isAvailable,
              n.isRemoved,
              n.title,
              n.trackSource,
              P,
              f,
            ],
          ),
          R = (0, r.useMemo)(
            () => (0, v.p)(n.artists, C),
            [n.artists, C, n.id],
          );
        return (0, a.jsx)("div", {
          className: (0, l.W)(
            y().root,
            {
              [y().root_disabled]: !n.isAvailable,
              [y().root_disliked]: n.isDisliked && !D,
              [y().root_withSecondaryColor]: g,
            },
            e,
          ),
          children: (0, a.jsxs)("div", {
            className: y().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, l.W)(
                  y().titleContainer,
                  { [y().titleContainer_withVersion]: n.version },
                  i,
                ),
                children: [
                  (0, a.jsxs)(m.Caption, {
                    className: (0, l.W)(y().text, j),
                    type: "entity",
                    size: h,
                    weight: "medium",
                    variant: "div",
                    lineClamp: 1,
                    children: [
                      M,
                      !n.isRemoved &&
                        n.version &&
                        (0, a.jsxs)(m.Caption, {
                          className: (0, l.W)(y().text, y().version),
                          type: "entity",
                          size: h,
                          weight: "medium",
                          variant: "span",
                          children: ["\xa0", n.version],
                        }),
                    ],
                  }),
                  n.trackExplicitMark &&
                    b &&
                    (0, a.jsx)(u.ExplicitMark, {
                      iconSize: T,
                      variant: n.trackExplicitMark,
                      className: y().explicitMark,
                    }),
                ],
              }),
              R.length > 0 &&
                (0, a.jsx)(_.jO, {
                  className: (0, l.W)(y().text, y().artists, A, j),
                  linkClassName: (0, l.W)(y().text, y().link),
                  captionClassName: (0, l.W)(y().text, y().artistCaption),
                  artists: R,
                  withLink: !n.isUGC,
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
        l = i(60836),
        n = i(9544),
        r = i(2570),
        s = i(3084),
        o = i(33273),
        c = i.n(o);
      let d = (0, n.Pi)((t) => {
        let {
          className: e,
          track: i,
          position: n,
          onPlayButtonClick: o,
          isPlaying: d,
          isCurrent: u,
        } = t;
        return (0, a.jsxs)("div", {
          className: (0, l.W)(e, c().root, {
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
              (0, a.jsx)(r.Caption, {
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
    82245: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackContextMenu: function () {
          return w;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(18375),
        d = i(23881),
        u = i(84338),
        m = i(95695),
        _ = i(28852),
        k = i(385),
        p = i(38360),
        v = i(78604),
        x = i(38527),
        C = i(23476),
        y = i.n(C);
      let b = (t) => {
        let { className: e, albumType: i, albumId: l } = t,
          { fullscreenPlayer: n } = (0, x.oR4)(),
          s = (0, x.s0h)("/album/".concat(l)),
          c = (0, r.useMemo)(
            () =>
              i === m.VZ.AUDIOBOOK
                ? (0, a.jsx)(o.Z, { id: "non-music.navigate-to-book-album" })
                : (0, a.jsx)(o.Z, {
                    id: "non-music.navigate-to-podcast-album",
                  }),
            [i],
          ),
          d = (0, r.useCallback)(() => {
            s(), n.modal.close();
          }, [s, n.modal]);
        return (0, a.jsx)(k.sN, {
          className: e,
          onClick: d,
          icon: (0, a.jsx)(_.J, {
            className: y().navigateToAlbumIcon,
            variant: "podcasts",
            size: "xxs",
          }),
          children: c,
        });
      };
      var g = i(3084),
        h = i(49522),
        T = i(76315),
        f = i(90679),
        N = i(10668),
        j = i(74717),
        A = i(16030);
      let D = (t) => {
        let { createPlaylist: e, fullscreenPlayer: i } = (0, x.oR4)(),
          { notify: l } = (0, x.d$W)(),
          n = (0, j.useRouter)(),
          { formatMessage: o } = (0, s.Z)(),
          c = (0, A.W)(),
          d = (0, r.useCallback)(
            async (t) => {
              var i;
              if (
                (await e.create({
                  title: o({ id: "entity-names.new-playlist" }),
                  visibility: m.we.PUBLIC,
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
                })) === N.pX.OK
              ) {
                let t = (0, x.SZ_)("/playlists/".concat(e.meta.uuid));
                return e.reset(), t;
              }
              return null;
            },
            [c, e, o],
          );
        return (0, r.useCallback)(async () => {
          let e = await d(t);
          e
            ? (i.modal.isOpened && i.modal.close(), n.push(e))
            : l((0, a.jsx)(N.wi, {}), {
                containerId: i.modal.isOpened
                  ? x.W$x.FULLSCREEN_ERROR
                  : x.W$x.ERROR,
              });
        }, [d, i.modal, l, n, t]);
      };
      var L = i(2570);
      let I = (t, e) => {
        var i, a;
        let l = -1;
        return (
          (null === (i = t.tracks) || void 0 === i ? void 0 : i.length) &&
            (l =
              null === (a = t.tracks) || void 0 === a
                ? void 0
                : a.findIndex((t) =>
                    t.albumId
                      ? String(t.id) === e.id && t.albumId === e.albumId
                      : String(t.id) === e.id,
                  )),
          { isTrackInPlaylist: l > -1, trackIndexInPlaylist: l }
        );
      };
      var E = i(11867),
        P = i(45982),
        S = i.n(P);
      let B = (t) => {
        let { playlist: e, track: i } = t,
          { formatMessage: l } = (0, s.Z)(),
          n = (0, A.W)(),
          o = (0, E.B)(),
          { isTrackInPlaylist: c, trackIndexInPlaylist: d } = I(e, i),
          u = (0, r.useCallback)(() => {
            c
              ? o({ playlist: e, track: i, trackIndex: d })
              : n({ playlist: e, track: i });
          }, [n, o, e, i, d, c]);
        return (0, a.jsxs)(k.sN, {
          className: S().root,
          onClick: u,
          children: [
            (0, a.jsx)(L.Caption, {
              variant: "div",
              lineClamp: 1,
              children: e.title,
            }),
            c &&
              (0, a.jsx)(_.J, {
                size: "xxs",
                variant: "check",
                "aria-label": l({ id: "entity-names.track-in-playlist" }),
              }),
          ],
        });
      };
      var M = i(56819),
        R = i.n(M);
      let G = () =>
          (0, a.jsx)(k.sN, {
            children: (0, a.jsx)(f.Shimmer, { className: R().shimmer }),
          }),
        U = (0, n.Pi)((t) => {
          var e;
          let { track: i } = t,
            {
              user: n,
              contextMenuPlaylists: c,
              fullscreenPlayer: d,
            } = (0, x.oR4)(),
            u = (0, v.SB)(i),
            { notify: m } = (0, x.d$W)(),
            p = D(i),
            { formatMessage: C } = (0, s.Z)(),
            y = (0, r.useCallback)(() => {
              u(),
                m((0, a.jsx)(v.Yc, { track: i }), {
                  containerId: d.modal.isOpened
                    ? x.W$x.FULLSCREEN_INFO
                    : x.W$x.INFO,
                });
            }, [d.modal.isOpened, u, m, i]),
            b = (0, r.useCallback)(
              (t) => {
                n.account.uid &&
                  c.getData({ userId: n.account.uid, page: t, pageSize: 20 });
              },
              [c, n.account.uid],
            ),
            h = (0, r.useCallback)(async () => {
              n.account.uid &&
                (await c.getData({
                  userId: n.account.uid,
                  page: 0,
                  pageSize: 20,
                }));
            }, [c, n.account.uid]);
          (0, r.useEffect)(
            () => () => {
              c.reset();
            },
            [c],
          );
          let T = (t) => {
              var e;
              let l =
                null == c
                  ? void 0
                  : null === (e = c.items) || void 0 === e
                    ? void 0
                    : e[t];
              return l
                ? l.kind !== N.eX.LIKE
                  ? (0, a.jsx)(B, { track: i, playlist: l }, l.uuid)
                  : void 0
                : (0, a.jsx)(G, {});
            },
            f = (0, r.useMemo)(() => {
              if (!i.isTrackNonMusic && c.isLoaded)
                return (0, a.jsxs)(k.sN, {
                  className: R().favouritesPlaylistItem,
                  onClick: y,
                  children: [
                    (0, a.jsx)(o.Z, { id: "entity-names.liked-playlist" }),
                    i.isLiked &&
                      (0, a.jsx)(_.J, {
                        size: "xxs",
                        variant: "check",
                        "aria-label": C({
                          id: "entity-names.track-in-playlist",
                        }),
                      }),
                  ],
                });
            }, [c.isLoaded, y, i, C]),
            j = (0, r.useMemo)(() => {
              var t, e, i;
              return c.isLoaded
                ? (0, a.jsx)(g.Wv, {
                    className: (0, l.W)(R().virtualScroll, R().important),
                    listClassName: R().content,
                    customComponents: { Header: () => f },
                    itemContentCallback: T,
                    context: {
                      listAriaLabel: C({ id: "entity-names.playlists-list" }),
                    },
                    totalCount:
                      null !==
                        (e =
                          null == c
                            ? void 0
                            : null === (t = c.pager) || void 0 === t
                              ? void 0
                              : t.total) && void 0 !== e
                        ? e
                        : 0,
                    onGetDataByPage: b,
                    pageSize: 20,
                    withFooter: !1,
                    totalRequests:
                      null !== (i = c.requests) && void 0 !== i ? i : 0,
                    alwaysShowScrollbar: !0,
                  })
                : [...Array(7)].map((t, e) => (0, a.jsx)(G, {}, e));
            }, [
              c.loadingState,
              null == c
                ? void 0
                : null === (e = c.pager) || void 0 === e
                  ? void 0
                  : e.total,
              c.requests,
              b,
              u,
              p,
            ]);
          return (0, a.jsxs)(k.v2, {
            offsetOptions: 3,
            onShow: h,
            icon: (0, a.jsx)(_.J, { variant: "addToPlaylist", size: "xxs" }),
            label: C({ id: "playlist-actions.add-track-to-playlist" }),
            ariaLabel: C({ id: "playlist-actions.add-track-to-playlist" }),
            children: [
              (0, a.jsx)(k.sN, {
                onClick: p,
                icon: (0, a.jsx)(_.J, { variant: "add", size: "xxs" }),
                children: (0, a.jsx)(o.Z, {
                  id: "playlist-actions.create-playlist",
                }),
              }),
              (0, a.jsx)("div", { className: R().root, children: j }),
            ],
          });
        });
      var O = i(82079),
        W = i.n(O);
      let w = (0, n.Pi)((t) => {
        var e, i, n, C, y, f, N, j, A, D;
        let {
            track: L,
            onOpenChange: I,
            open: E,
            placement: P,
            isFullscreenMobile: S = !1,
            icon: B,
            size: M,
            ...R
          } = t,
          G = (0, x.R$C)(),
          {
            settings: O,
            currentTrackInfo: w,
            experiments: V,
            fullscreenPlayer: z,
            trailer: K,
            sonataState: { entityMeta: Z },
            trackLyrics: F,
          } = (0, x.oR4)(),
          { formatMessage: J } = (0, s.Z)(),
          { modal: Y } = F,
          { modal: H } = w,
          X = (0, v.Xw)(L, v.yu.NEXT),
          q = (0, v.Xw)(L, v.yu.LAST),
          $ = (0, v.SB)(L),
          Q = (0, v.KX)(L),
          tt = (0, p.SB)(L.mainAlbum),
          te = (0, v.Ey)(L),
          ti = (0, x.FTC)(),
          ta = "".concat(x.aUg.TRACK, "-").concat(L.id),
          tl = S || O.layout === x.t8m.Mobile,
          { href: tn } = (0, x.qKB)(L.url),
          tr = (0, T.useTrackModalTitle)(L),
          ts =
            (0, x.RVp)() &&
            (null === (e = L.mainAlbum) || void 0 === e
              ? void 0
              : e.isNonMusic),
          to =
            (null == Z ? void 0 : Z.id) === L.id &&
            (null == Z ? void 0 : Z.albumId) ===
              (null === (i = L.mainAlbum) || void 0 === i ? void 0 : i.id),
          tc = !!(
            (0, u.xA)(null == G ? void 0 : G.state.currentContext.value) ||
            (0, u.Q7)(null == G ? void 0 : G.state.currentContext.value)
          ),
          { canRemoveTrackFromPlaylist: td, removeTrackFromPlaylist: tu } = (0,
          h.useRemoveTrackFromPlaylistByIndex)(),
          { isPlaying: tm, togglePlay: t_ } = (0, x.QhE)({
            seeds:
              null !== (D = null == L ? void 0 : L.seeds) && void 0 !== D
                ? D
                : [],
            pageIdForFrom: x.Rhz.RADIO,
            blockIdForFrom: ta,
          }),
          tk = (0, r.useCallback)(() => {
            tm || t_();
          }, [tm, t_]),
          tp = (0, r.useCallback)(() => {
            K.openTrackTrailer(L.entityId), ti(c.OB.Track, L.id);
          }, [ti, L.entityId, L.id, K]),
          tv = (0, r.useCallback)(() => {
            var t;
            w.setTrack({
              id: L.id,
              albumId:
                (null === (t = L.mainAlbum) || void 0 === t ? void 0 : t.id) ||
                null,
              isUGC: L.isUGC || null,
            }),
              H.open();
          }, [
            w,
            L.id,
            L.isUGC,
            null === (n = L.mainAlbum) || void 0 === n ? void 0 : n.id,
            H,
          ]),
          tx = (0, r.useCallback)(() => {
            F.setTrack(L), Y.open();
          }, [L, F, Y]);
        (0, x.ZP4)(E);
        let tC = !ts,
          ty = !L.isUGC && !ts,
          tb = !ts,
          tg = !tl,
          th = ts && tt,
          tT = V.checkExperiment(x.peG.WebNextTrackAboutModal, "on") && !tl,
          tf = L.hasSyncLyrics && z.modal.isOpened,
          tN = ts && tl,
          tj =
            V.checkExperiment(x.peG.WebNextTrackLyrics, "on") &&
            L.hasLyrics &&
            !z.modal.isOpened,
          tA = V.checkExperiment(x.peG.WebNextPlayQueue, "on") && !tc && Z;
        return (0, a.jsxs)(k.v2, {
          isMobile: tl,
          placement: P,
          offsetOptions: 10,
          open: E,
          onOpenChange: I,
          icon: B,
          size: M,
          containerProps: (0, d.BA)(d.bG.track.TRACK_CONTEXT_MENU),
          ariaLabel: J({ id: "interface-actions.context-menu" }),
          variant: "text",
          ...R,
          children: [
            ts &&
              (0, a.jsx)(g.XB, {
                onClick: te,
                isFinished:
                  (to &&
                    (null == Z
                      ? void 0
                      : null === (C = Z.streamProgress) || void 0 === C
                        ? void 0
                        : C.hasEverFinished)) ||
                  (null === (y = L.streamProgress) || void 0 === y
                    ? void 0
                    : y.hasEverFinished),
              }),
            tC && (0, a.jsx)(g.xZ, { onClick: $, isLiked: L.isLiked }),
            (null === (f = L.trailer) || void 0 === f ? void 0 : f.canShow) &&
              (0, a.jsx)(g.NB, { onClick: tp }),
            ty &&
              (0, a.jsx)(g.GQ, {
                onClick: tk,
                variant: "track",
                disabled: !L.isAvailable,
              }),
            tA &&
              (0, a.jsx)(k.sN, {
                onClick: X,
                icon: (0, a.jsx)(_.J, { variant: "playNext", size: "xxs" }),
                children: (0, a.jsx)(o.Z, { id: "play-queue.play-next" }),
              }),
            tA &&
              (0, a.jsx)(k.sN, {
                onClick: q,
                icon: (0, a.jsx)(_.J, { variant: "playLast", size: "xxs" }),
                children: (0, a.jsx)(o.Z, { id: "play-queue.play-last" }),
              }),
            tf &&
              !z.syncLyrics.isVisible &&
              (0, a.jsx)(k.sN, {
                className: (0, l.W)({ [W().syncLyrics]: S }),
                onClick: z.showSyncLyricsModal,
                icon: (0, a.jsx)(_.J, { variant: "syncLyrics", size: "xxs" }),
                ...(0, d.BA)(
                  d.bG.track.TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON,
                ),
                children: (0, a.jsx)(o.Z, {
                  id: "interface-actions.open-sync-lyrics",
                }),
              }),
            tf &&
              z.syncLyrics.isVisible &&
              (0, a.jsx)(k.sN, {
                className: (0, l.W)({ [W().syncLyrics]: S }),
                onClick: z.syncLyrics.setInvisible,
                icon: (0, a.jsx)(_.J, { variant: "syncLyrics" }),
                ...(0, d.BA)(
                  d.bG.track.TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON,
                ),
                children: (0, a.jsx)(o.Z, {
                  id: "interface-actions.hide-sync-lyrics",
                }),
              }),
            tb && (0, a.jsx)(g.ZL, { onClick: Q, isDisliked: L.isDisliked }),
            tg && (0, a.jsx)(U, { track: L }),
            tj &&
              (0, a.jsx)(k.sN, {
                onClick: tx,
                icon: (0, a.jsx)(_.J, { variant: "lyrics" }),
                ...(0, d.BA)(d.bG.track.TRACK_CONTEXT_MENU_LYRICS_BUTTON),
                children: (0, a.jsx)(o.Z, {
                  id: "interface-actions.open-lyrics",
                }),
              }),
            (0, a.jsx)(g.zq, {
              disabled: L.isUGC || L.trackSource === m.zu.OWN_REPLACED_TO_UGC,
              shareLink: tn,
              entityVariant: "track",
              entityTitle: L.title,
            }),
            tN &&
              (0, a.jsx)(b, {
                albumId: L.mainAlbum.id,
                albumType:
                  null === (N = L.mainAlbum) || void 0 === N ? void 0 : N.type,
              }),
            th &&
              (0, a.jsx)(g.qq, {
                onClick: tt,
                isLiked:
                  null === (j = L.mainAlbum) || void 0 === j
                    ? void 0
                    : j.isLiked,
                albumType:
                  null === (A = L.mainAlbum) || void 0 === A ? void 0 : A.type,
                ...(0, d.BA)(d.bG.track.TRACK_CONTEXT_MENU_SUBSCRIBE_BUTTON),
              }),
            td &&
              (0, a.jsx)(k.sN, {
                onClick: tu,
                icon: (0, a.jsx)(_.J, { variant: "bucket", size: "xxs" }),
                ...(0, d.BA)(
                  d.bG.track
                    .TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                ),
                children: (0, a.jsx)(o.Z, {
                  id: "playlist-actions.remove-from-playlist",
                }),
              }),
            tT &&
              (0, a.jsx)(k.sN, {
                onClick: tv,
                icon: (0, a.jsx)(_.J, { variant: "info" }),
                ...(0, d.BA)(d.bG.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON),
                children: tr,
              }),
          ],
        });
      });
    },
    60808: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return k;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(98342),
        c = i(38527),
        d = i(3084),
        u = i(44660),
        m = i(66563),
        _ = i.n(m);
      let k = (0, n.Pi)((t) => {
        let {
            className: e,
            track: i,
            meta: n,
            beforeBlock: m,
            controls: k,
            playButtonCellRender: p,
            withLightning: v,
            isPlaying: x,
            isCurrent: C,
            togglePlay: y,
            restartPlay: b,
            ...g
          } = t,
          { formatMessage: h } = (0, s.Z)(),
          { ref: T, intersectionPropertyId: f } = (0, c.VfV)(),
          N = (0, u.useTrackDisclaimer)({ track: i, callback: y }),
          { sendPlaySearchFeedback: j } = (0, c.sAF)(),
          [A, D] = (0, r.useState)(!1),
          L = (0, r.useCallback)(() => {
            A || x || (D(!0), null == j || j()), N();
          }, [N, x, A, j]),
          I = (0, r.useCallback)(() => {
            x ? b() : L();
          }, [x, b, L]),
          E = (0, r.useCallback)(
            (t) => {
              i.isAvailable && (2 === t.detail ? I() : (0, o.m)(t, _().ripple));
            },
            [I, i.isAvailable],
          ),
          P =
            null == p
              ? void 0
              : p({ onPlayButtonClick: L, isPlaying: x, isCurrent: C }),
          S = (0, r.useMemo)(() => {
            var t;
            if (!i.isAvailable)
              return ""
                .concat(h({ id: "extra-explicit.play-unavailable" }), " ")
                .concat(i.artistsNames, " ")
                .concat(i.title);
            let e = v ? h({ id: "entity-names.popular-among-users" }) : "";
            return ""
              .concat(i.artistsNames, " ")
              .concat(i.title, " ")
              .concat(null !== (t = i.version) && void 0 !== t ? t : "", " ")
              .concat(e);
          }, [h, i.artistsNames, i.isAvailable, i.title, i.version, v]);
        return (0, a.jsxs)(d.Md, {
          ref: T,
          "aria-label": S,
          "data-intersection-property-id": f,
          onClick: E,
          className: (0, l.W)(
            _().root,
            { [_().root_disabled]: !i.isAvailable },
            e,
          ),
          ...g,
          children: [m, P, n, k],
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
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(18375),
        d = i(23881),
        u = i(84338),
        m = i(95695),
        _ = i(27491),
        k = i(28852),
        p = i(12404),
        v = i(2570),
        x = i(33589),
        C = i(78604),
        y = i(38527),
        b = i(3084),
        g = i(44660),
        h = i(82245),
        T = i(98129),
        f = i.n(T);
      let N = (0, n.Pi)((t) => {
        let {
            className: e,
            children: i,
            track: n,
            contentLinesCount: T,
            overrideContextType: N,
          } = t,
          j = (0, y.x5)(),
          { trailer: A } = (0, y.oR4)(),
          { formatMessage: D } = (0, s.Z)(),
          [L, I] = (0, r.useState)(!1),
          [E, P] = (0, r.useState)(!1),
          [S, B] = (0, r.useState)(!1),
          { sendLikeSearchFeedback: M, sendPlaySearchFeedback: R } = (0,
          y.sAF)(),
          G = (0, C.SB)(n),
          [U, O] = (0, r.useState)(!1),
          W = (0, r.useMemo)(() => {
            var t;
            let e = D(
                { id: "entity-names.track-name" },
                { trackName: n.title },
              ),
              i = n.isLiked ? D({ id: "entity-names.has-your-like" }) : "";
            return ""
              .concat(e, " ")
              .concat(null !== (t = n.version) && void 0 !== t ? t : "", " ")
              .concat(i);
          }, [D, n.title, n.isLiked, n.version]),
          w = n.albumId ? "".concat(n.id, ":").concat(n.albumId) : n.id,
          V = n.albumId && n.trackSource === m.zu.OWN && n.isAvailable,
          { isPlaying: z, togglePlay: K } = (0, y.qmq)({
            playContextParams: {
              contextData: {
                type: u.Ak.Various,
                meta: { id: w },
                from: j,
                overrideContextType: N,
              },
              queueParams: { index: 0 },
              loadContextMeta: !0,
            },
            entityId: w,
          }),
          Z = (0, g.useTrackDisclaimer)({ track: n }),
          F = (0, g.useTrackDisclaimer)({ track: n, callback: K }),
          J = (0, y.FTC)(),
          Y = (0, r.useCallback)(
            (t) => {
              t.stopPropagation(),
                A.openTrackTrailer(n.id),
                J(c.OB.Track, n.id);
            },
            [n.id, J, A],
          ),
          H = (0, r.useCallback)(
            (t) => {
              Z(t);
            },
            [Z],
          ),
          X = (0, r.useCallback)(() => {
            L || z || (I(!0), null == R || R()), F();
          }, [z, L, R, F]),
          q = (0, r.useCallback)(() => {
            E || n.isLiked || (P(!0), null == M || M()), G();
          }, [G, E, M, n.isLiked]),
          $ = (0, r.useCallback)((t) => {
            t.preventDefault(), t.stopPropagation();
          }, []),
          Q = (0, r.useCallback)(() => {
            B(!S), O(!S);
          }, [S]),
          tt = (0, r.useMemo)(() => {
            var t;
            if (
              null == n
                ? void 0
                : null === (t = n.trailer) || void 0 === t
                  ? void 0
                  : t.canShow
            )
              return (0, a.jsx)(
                b.eP,
                {
                  className: (0, l.W)(f().trailerButton, f().control),
                  radius: "round",
                  size: "s",
                  iconSize: "xxs",
                  enabledTooltip: !0,
                  onClick: Y,
                },
                n.getKey("TrailerButton"),
              );
          }, [Y, n]),
          te = (0, r.useMemo)(() => {
            var t;
            return (0, a.jsxs)(v.Caption, {
              className: (0, l.W)(f().titleContainer, {
                [f().titleContainer_withVersion]: n.version,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              children: [
                V
                  ? (0, a.jsx)(b.rU, {
                      "aria-label": ""
                        .concat(n.title, " ")
                        .concat(
                          null !== (t = n.version) && void 0 !== t ? t : "",
                        ),
                      className: f().titleLink,
                      href: "/album/".concat(n.albumId),
                      onClick: H,
                      children: n.title,
                    })
                  : (0, a.jsx)(v.Caption, {
                      className: f().title,
                      variant: "span",
                      onClick: H,
                      children: n.title,
                    }),
                n.version &&
                  (0, a.jsx)(v.Caption, {
                    className: f().version,
                    variant: "span",
                    children: " ".concat(n.version),
                  }),
              ],
            });
          }, [n.title, n.version, V, H, n.albumId]),
          ti = (0, r.useMemo)(() => {
            var t;
            return V
              ? (0, a.jsx)(b.rU, {
                  href: "/album/".concat(n.albumId),
                  onClick: H,
                  children: ""
                    .concat(n.title, " ")
                    .concat(null !== (t = n.version) && void 0 !== t ? t : ""),
                })
              : null;
          }, [n.title, n.version, n.albumId, V, H]),
          ta = (0, r.useMemo)(
            () =>
              (0, a.jsx)(
                h.TrackContextMenu,
                {
                  placement: "bottom",
                  track: n,
                  onOpenChange: Q,
                  open: S,
                  onClick: $,
                  className: (0, l.W)(f().menuButton, f().control),
                  icon: (0, a.jsx)(k.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  ...(0, d.BA)(d.bG.track.TRACK_CONTEXT_MENU_BUTTON),
                },
                n.getKey("TrackContextMenu"),
              ),
            [$, Q, S, n],
          ),
          tl = (0, r.useMemo)(() => {
            if (n.isAvailable)
              return (0, a.jsx)(_.kk, {
                isVisible: S || U,
                className: f().controls,
                labelText: (0, a.jsx)(o.Z, { id: "entity-names.track" }),
                playControl: (0, a.jsx)(
                  b.JM,
                  {
                    className: (0, l.W)(f().playButton, f().control),
                    buttonVariant: "default",
                    withHover: !1,
                    iconSize: "xl",
                    variant: "filled",
                    isPlaying: z,
                    onClick: X,
                  },
                  n.getKey("PlayButton"),
                ),
                likeControl: (0, a.jsx)(
                  b.dJ,
                  {
                    className: (0, l.W)(f().likeButton, f().control),
                    isLiked: n.isLiked,
                    onClick: q,
                    variant: "default",
                    size: "s",
                    iconSize: "xxs",
                  },
                  n.getKey("LikeButton"),
                ),
                menuControl: ta,
                trailerControl: tt,
              });
          }, [ta, q, X, S, U, z, n, tt]),
          tn = (0, r.useMemo)(
            () =>
              (0, a.jsx)(p.Paper, {
                className: f().cover,
                radius: "l",
                withShadow: !0,
                onClick: H,
                children: (0, a.jsxs)("div", {
                  className: f().coverBlock,
                  children: [
                    (0, a.jsx)(b.BE, {
                      className: f().image,
                      src: n.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: W,
                      withAvatarReplace: !0,
                      isAvailable: n.isAvailable,
                      "aria-hidden": !0,
                    }),
                    tl,
                  ],
                }),
              }),
            [tl, H, n.coverUri, n.isAvailable, W],
          );
        return (0, a.jsx)(_.m7, {
          className: (0, l.W)(f().root, e),
          "aria-label": W,
          explicitMark: n.trackExplicitMark,
          title: te,
          srTitle: ti,
          contentLinesCount: T,
          view: tn,
          description: (0, a.jsx)(
            x.jO,
            {
              className: f().artists,
              artists: n.artists,
              lineClamp: 1,
              linkClassName: f().artistLink,
              captionSize: "s",
              withLink: !n.isUGC,
            },
            n.getKey("description"),
          ),
          children: i,
        });
      });
    },
    639: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackAlbum: function () {
          return k;
        },
      });
      var a = i(9753),
        l = i(9544),
        n = i(98639),
        r = i(23881),
        s = i(38527),
        o = i(93393),
        c = i(47192),
        d = i(9374),
        u = i(60808),
        m = i(55491),
        _ = i.n(m);
      let k = (0, l.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: l,
            playContextParams: m,
            withLightning: k,
          } = t,
          p = (0, s.qmq)({ playContextParams: m, entityId: e.entityId }),
          v = (0, n.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: l,
                className: _().playButtonCell,
                ...t,
              }),
            [e, l],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          withLightning: k,
          meta: (0, a.jsx)(c.TrackMeta, { albumArtists: i, track: e }),
          playButtonCellRender: v,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: k,
            track: e,
            className: _().controlsBarCell,
          }),
          ...p,
          ...(0, r.BA)(r.bG.track.TRACK_ALBUM),
        });
      });
    },
    37379: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackAlbum: function () {
          return k;
        },
      });
      var a = i(9753),
        l = i(9544),
        n = i(98639),
        r = i(23881),
        s = i(38527),
        o = i(93393),
        c = i(47192),
        d = i(9374),
        u = i(60808),
        m = i(55491),
        _ = i.n(m);
      let k = (0, l.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: l,
            playContextParams: m,
            withLightning: k,
          } = t,
          p = (0, s.bA$)({ playContextParams: m, entityId: e.entityId }),
          v = (0, n.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: l,
                className: _().playButtonCell,
                ...t,
              }),
            [e, l],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          withLightning: k,
          meta: (0, a.jsx)(c.TrackMeta, { albumArtists: i, track: e }),
          playButtonCellRender: v,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: k,
            track: e,
            className: _().controlsBarCell,
          }),
          ...p,
          ...(0, r.BA)(r.bG.track.TRACK_ALBUM),
        });
      });
    },
    96414: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackChart: function () {
          return p;
        },
      });
      var a = i(9753),
        l = i(9544),
        n = i(98639),
        r = i(23881),
        s = i(94342),
        o = i(38527),
        c = i(3084),
        d = i(93393),
        u = i(47192),
        m = i(60808),
        _ = i(61383),
        k = i.n(_);
      let p = (0, l.Pi)((t) => {
        var e, i;
        let { track: l, playContextParams: _ } = t,
          p = (0, o.qmq)({ playContextParams: _, entityId: l.entityId }),
          v = (0, n.useCallback)(
            (t) =>
              (0, a.jsx)(c.Df, {
                isAvailable: l.isAvailable,
                isDisliked: l.isDisliked,
                coverUri: l.coverUri,
                title: l.title,
                className: k().playButtonCell,
                ...t,
              }),
            [l],
          );
        return (0, a.jsx)(m.f, {
          track: l,
          meta: (0, a.jsx)(u.TrackMeta, { track: l }),
          beforeBlock: (0, a.jsx)(s.kL, {
            className: k().chartCell,
            progress:
              null === (e = l.chart) || void 0 === e ? void 0 : e.progress,
            position:
              null === (i = l.chart) || void 0 === i ? void 0 : i.position,
            isDisliked: l.isDisliked,
            isDisabled: !l.isAvailable,
          }),
          playButtonCellRender: v,
          controls: (0, a.jsx)(d.ControlsBar, {
            track: l,
            className: k().controlsBarCell,
          }),
          ...p,
          ...(0, r.BA)(r.bG.track.TRACK_CHART),
        });
      });
    },
    5510: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackNonMusic: function () {
          return g;
        },
      });
      var a = i(9753),
        l = i(9544),
        n = i(60836),
        r = i(98639),
        s = i(23881),
        o = i(38527),
        c = i(3084),
        d = i(54355),
        u = i(93393),
        m = i(83906),
        _ = i(9374),
        k = i(60808),
        p = i(36818),
        v = i.n(p),
        x = i(80485);
      let C = (0, l.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            className: l,
            withDNDBlock: p,
            isDragging: C,
            draggingClassName: y,
            withTimeLeftText: b,
            ignoreDislikedStyles: g,
            viewType: h = x.c.PLAYLIST,
            position: T,
          } = t,
          f = (0, o.qmq)({ playContextParams: i, entityId: e.entityId }),
          N = (0, r.useCallback)(
            (t) =>
              h === x.c.ALBUM
                ? (0, a.jsx)(_.e, {
                    track: e,
                    position: T,
                    className: v().playButtonCell,
                    ...t,
                  })
                : (0, a.jsx)(c.Df, {
                    isAvailable: e.isAvailable,
                    isDisliked: e.isDisliked,
                    coverUri: e.coverUri,
                    title: e.title,
                    className: v().playButtonCell,
                    ignoreDislikedStyles: g,
                    ...t,
                  }),
            [g, T, h, e],
          );
        return (0, a.jsx)(k.f, {
          className: (0, n.W)(l, { [v().trackWithDots]: p }),
          track: e,
          meta: (0, a.jsx)(m.AudiobookMeta, {
            withAuthor: h === x.c.PLAYLIST,
            track: e,
            playContextParams: i,
            withListeningProgress: !0,
            withTimeLeftText: b,
            ignoreDislikedStyles: g,
          }),
          playButtonCellRender: N,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: e,
            className: v().controlsBarCell,
            ignoreDislikedStyles: g,
          }),
          beforeBlock: p
            ? (0, a.jsx)(d.x, {
                className: (0, n.W)(v().dots, y),
                isDragging: C,
              })
            : void 0,
          ...f,
          ...(0, s.BA)(s.bG.track.TRACK_AUDIOBOOK),
        });
      });
      var y = i(53961);
      let b = (0, l.Pi)((t) => {
          let {
              track: e,
              playContextParams: i,
              withPodcastName: l = !1,
              className: m,
              withDNDBlock: _,
              isDragging: p,
              draggingClassName: x,
              withTimeLeftText: C,
              ignoreDislikedStyles: b,
            } = t,
            g = (0, o.qmq)({ playContextParams: i, entityId: e.entityId }),
            h = (0, r.useCallback)(
              (t) =>
                (0, a.jsx)(c.Df, {
                  isAvailable: e.isAvailable,
                  isDisliked: e.isDisliked,
                  coverUri: e.coverUri,
                  title: e.title,
                  className: v().playButtonCell,
                  ignoreDislikedStyles: b,
                  ...t,
                }),
              [b, e.coverUri, e.isAvailable, e.isDisliked, e.title],
            );
          return (0, a.jsx)(k.f, {
            className: (0, n.W)(m, { [v().trackWithDots]: _ }),
            track: e,
            meta: (0, a.jsx)(y.PodcastMeta, {
              track: e,
              playContextParams: i,
              withPodcastName: l,
              withListeningProgress: !0,
              withTimeLeftText: C,
              ignoreDislikedStyles: b,
            }),
            playButtonCellRender: h,
            controls: (0, a.jsx)(u.ControlsBar, {
              track: e,
              className: v().controlsBarCell,
              ignoreDislikedStyles: b,
            }),
            beforeBlock: _
              ? (0, a.jsx)(d.x, {
                  className: (0, n.W)(v().dots, x),
                  isDragging: p,
                })
              : void 0,
            ...g,
            ...(0, s.BA)(s.bG.track.TRACK_PODCAST),
          });
        }),
        g = (0, l.Pi)((t) =>
          t.track.isTrackAudiobook
            ? (0, a.jsx)(C, { ...t })
            : (0, a.jsx)(b, { ...t }),
        );
    },
    80485: function (t, e, i) {
      "use strict";
      var a, l;
      i.d(e, {
        c: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).ALBUM = "album"),
        (l.PLAYLIST = "playlist");
    },
    1776: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylist: function () {
          return v;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(23881),
        o = i(38527),
        c = i(3084),
        d = i(54355),
        u = i(93393),
        m = i(47192),
        _ = i(60808),
        k = i(25803),
        p = i.n(k);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            className: n,
            withDNDBlock: k,
            isDragging: v,
            draggingClassName: x,
            ignoreDislikedStyles: C,
          } = t,
          y = (0, o.qmq)({ playContextParams: i, entityId: e.entityId }),
          b = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(c.Df, {
                isAvailable: e.isAvailable,
                isDisliked: e.isDisliked,
                coverUri: e.coverUri,
                title: e.title,
                className: p().playButtonCell,
                ignoreDislikedStyles: C,
                ...t,
              }),
            [C, e.coverUri, e.isAvailable, e.isDisliked, e.title],
          );
        return (0, a.jsx)(_.f, {
          className: (0, l.W)(n, { [p().trackWithDots]: k }),
          track: e,
          beforeBlock: k
            ? (0, a.jsx)(d.x, {
                className: (0, l.W)(p().dots, x),
                isDragging: v,
              })
            : void 0,
          meta: (0, a.jsx)(m.TrackMeta, { track: e, ignoreDislikedStyles: C }),
          playButtonCellRender: b,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: e,
            className: p().controlsBarCell,
            ignoreDislikedStyles: C,
          }),
          ...y,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    71456: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackPlaylist: function () {
          return k;
        },
      });
      var a = i(9753),
        l = i(9544),
        n = i(98639),
        r = i(23881),
        s = i(38527),
        o = i(3084),
        c = i(93393),
        d = i(47192),
        u = i(60808),
        m = i(25803),
        _ = i.n(m);
      let k = (0, l.Pi)((t) => {
        let { track: e, playContextParams: i } = t,
          l = (0, s.bA$)({ playContextParams: i, entityId: e.entityId }),
          m = (0, n.useCallback)(
            (t) =>
              (0, a.jsx)(o.Df, {
                isAvailable: e.isAvailable,
                isDisliked: e.isDisliked,
                coverUri: e.coverUri,
                title: e.title,
                className: _().playButtonCell,
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
            className: _().controlsBarCell,
          }),
          ...l,
          ...(0, r.BA)(r.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    5670: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylistAddition: function () {
          return v;
        },
      });
      var a = i(9753),
        l = i(9544),
        n = i(98639),
        r = i(80542),
        s = i(23881),
        o = i(39513),
        c = i(28852),
        d = i(38527),
        u = i(3084),
        m = i(47192),
        _ = i(60808),
        k = i(98387),
        p = i.n(k);
      let v = (0, l.Pi)((t) => {
        let { className: e, track: i, playContextParams: l, onClick: k } = t,
          { formatMessage: v } = (0, r.Z)(),
          x = (0, d.qmq)({ playContextParams: l, entityId: i.entityId }),
          C = (0, n.useCallback)(
            (t) =>
              (0, a.jsx)(u.Df, {
                isAvailable: i.isAvailable,
                isDisliked: i.isDisliked,
                coverUri: i.coverUri,
                title: i.title,
                className: p().playButtonCell,
                ...t,
              }),
            [i],
          ),
          y = (0, n.useCallback)(() => {
            null == k || k(i);
          }, [i, k]),
          b = (0, n.useMemo)(
            () =>
              (0, a.jsx)("div", {
                className: p().controls,
                children: (0, a.jsx)(o.z, {
                  className: p().button,
                  variant: "text",
                  size: "xs",
                  radius: "xxxl",
                  "aria-label": v({
                    id: "interface-actions.add-track-to-playlist",
                  }),
                  onClick: y,
                  icon: (0, a.jsx)(c.J, { size: "xxs", variant: "add" }),
                }),
              }),
            [v, y],
          );
        return (0, a.jsx)(_.f, {
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
    53368: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackUgcUpload: function () {
          return k;
        },
      });
      var a = i(9753),
        l = i(60836),
        n = i(9544),
        r = i(98639),
        s = i(80542),
        o = i(31014),
        c = i(39513),
        d = i(2570),
        u = i(3084),
        m = i(76665),
        _ = i.n(m);
      let k = (0, n.Pi)((t) => {
        let { className: e } = t,
          { formatMessage: i } = (0, s.Z)(),
          n = "hello_world.mp3",
          m = (0, r.useMemo)(
            () =>
              (0, a.jsx)(c.z, {
                variant: "text",
                withRipple: !1,
                "aria-label": i({ id: "ugc.cancel-upload" }),
                color: "secondary",
                children: (0, a.jsx)(d.Caption, {
                  variant: "span",
                  size: "m",
                  type: "text",
                  className: _().button,
                  children: (0, a.jsx)(o.Z, { id: "ugc.cancel-upload" }),
                }),
              }),
            [i],
          );
        return (0, a.jsxs)(u.Md, {
          "aria-label": n,
          className: (0, l.W)(_().root, e),
          children: [
            (0, a.jsx)(u.Df, { title: n, className: _().playButton }),
            (0, a.jsxs)("div", {
              className: _().meta,
              children: [
                (0, a.jsx)(d.Caption, {
                  variant: "div",
                  size: "m",
                  className: _().title,
                  children: n,
                }),
                (0, a.jsx)(d.Caption, {
                  variant: "div",
                  size: "m",
                  className: _().status,
                  children: (0, a.jsx)(o.Z, {
                    id: "ugc.track-uploading-pending-status",
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", { className: _().controls, children: m }),
          ],
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
    21116: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        explicitMark: "AudiobookMeta_explicitMark__1rN7x",
        metaContainer: "AudiobookMeta_metaContainer__F7d9X",
        metaContainer_oneLine: "AudiobookMeta_metaContainer_oneLine__D9CQh",
        titleContainer: "AudiobookMeta_titleContainer__GIY6Q",
        artists: "AudiobookMeta_artists__ScMoq",
        progress: "AudiobookMeta_progress__i3_kS",
        progress_disabled: "AudiobookMeta_progress_disabled__D_7E9",
        progress_withPreviousInfo:
          "AudiobookMeta_progress_withPreviousInfo__97Hxr",
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
    45982: function (t) {
      t.exports = { root: "ContextMenuPlaylistItem_root__jhTvn" };
    },
    56819: function (t) {
      t.exports = {
        root: "ContextSubMenuAddToPlaylist_root__ZGm6z",
        content: "ContextSubMenuAddToPlaylist_content__isTx4",
        virtualScroll: "ContextSubMenuAddToPlaylist_virtualScroll__SJG3e",
        important: "ContextSubMenuAddToPlaylist_important__OUL53",
        shimmer: "ContextSubMenuAddToPlaylist_shimmer__uQHAL",
        favouritesPlaylistItem:
          "ContextSubMenuAddToPlaylist_favouritesPlaylistItem__aFINX",
      };
    },
    82079: function (t) {
      t.exports = { syncLyrics: "TrackContextMenu_syncLyrics___CDVn" };
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
        trailerButton: "TrackCard_trailerButton__nGqhD",
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
    36818: function (t) {
      t.exports = {
        playButtonCell: "TrackNonMusic_playButtonCell__HaJrc",
        controlsBarCell: "TrackNonMusic_controlsBarCell__zWt44",
        dots: "TrackNonMusic_dots__Wom40",
        trackWithDots: "TrackNonMusic_trackWithDots__v2VbZ",
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
    76665: function (t) {
      t.exports = {
        root: "Track_root__dbDjD",
        playButton: "TrackUgcUpload_playButton__3l2I7",
        meta: "TrackUgcUpload_meta__aHQv9",
        title: "TrackUgcUpload_title__Xq3UP",
        status: "TrackUgcUpload_status__aFGvl",
        controls: "TrackUgcUpload_controls__Ie2Ox",
      };
    },
    23476: function (t) {
      t.exports = {
        navigateToAlbumIcon: "ContextMenuItem_navigateToAlbumIcon__rB5Zh",
      };
    },
  },
]);
