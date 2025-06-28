(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1150],
  {
    14924: function (t, e, i) {
      "use strict";
      i.d(e, {
        Vc: function () {
          return T;
        },
        $t: function () {
          return v.$;
        },
        rK: function () {
          return u;
        },
        wj: function () {
          return m;
        },
        Fw: function () {
          return k.F;
        },
        SB: function () {
          return p.useOnLikeClick;
        },
        pN: function () {
          return l;
        },
        gR: function () {
          return s;
        },
        bL: function () {
          return o;
        },
        g9: function () {
          return c;
        },
        Li: function () {
          return _.useVideoModal;
        },
        yO: function () {
          return x.useWithClips;
        },
      });
      var a = i(4875),
        n = i(93093),
        r = i(13534);
      let l = () => {
          let t = (0, r.z$f)(),
            { hash: e } = (0, r.RQn)(),
            i = (0, r.wLl)();
          return (0, n.W)((n) => {
            if (!t) return;
            let s = {
                hash: e,
                pageId: a.qU.VideoScreen,
                mainObjectType: a.OB.Video,
                mainObjectId: n,
              },
              o = (0, r.KOr)({ params: s, logger: i, context: l.name });
            o && (0, a.IA)(t.evgenInstance, o);
          });
        },
        s = (t) => {
          let e = (0, r.z$f)(),
            { hash: i } = (0, r.RQn)(),
            { pageId: l } = (0, r.lVB)(),
            { tabId: o, tabPos: c, isTabSelectedByDefault: d } = (0, r.OeJ)(),
            { skeleton: u } = (0, r.hT3)(),
            {
              blockType: m,
              blockId: k,
              blockPosX: v,
              blockPosY: p,
              mainObjectType: _,
              mainObjectId: x,
            } = (0, r.qYG)(),
            {
              objectsCount: C,
              objectType: y,
              objectId: T,
              objectPosX: b,
              objectPosY: h,
            } = (0, r.rKX)(),
            g = (0, r.wLl)();
          return (0, n.W)(() => {
            if (!e || !l || !r.$PW.includes(l)) return;
            let n = {
              hash: i,
              pageId: l,
              entityType: m,
              entityId: k,
              entityPosX: v,
              entityPosY: p,
              objectId: T,
              objectType: y,
              objectPosX: b,
              objectPosY: h,
              objectsCount: C,
              from: r.x3Y[l],
              to: a.qU.VideoScreen,
            };
            r.ORM.includes(l) &&
              ((n.tabId = o), (n.tabPos = c), (n.isTabSelectedByDefault = d)),
              u && (n.skeletonId = u),
              _ && (n.mainObjectType = _),
              x && (n.mainObjectId = x);
            let f = (0, r.KOr)({ params: n, logger: g, context: s.name });
            f && t && (0, a.mz)(e.evgenInstance, f);
          });
        },
        o = () => {
          let t = (0, r.z$f)(),
            { hash: e } = (0, r.RQn)(),
            i = (0, r.wLl)();
          return (0, n.W)((n) => {
            if (!t) return;
            let l = {
                hash: e,
                pageId: a.qU.VideoScreen,
                mainObjectType: a.OB.Video,
                mainObjectId: n,
              },
              s = (0, r.KOr)({ params: l, logger: i, context: o.name });
            s && (0, a.a5)(t.evgenInstance, s);
          });
        },
        c = (t) => {
          let e = (0, r.z$f)(),
            { hash: i } = (0, r.RQn)(),
            { pageId: l } = (0, r.lVB)(),
            { tabId: s, tabPos: o, isTabSelectedByDefault: d } = (0, r.OeJ)(),
            {
              blockType: u,
              blockId: m,
              blockPosX: k,
              blockPosY: v,
              mainObjectType: p,
              mainObjectId: _,
            } = (0, r.qYG)(),
            {
              objectsCount: x,
              objectType: C,
              objectId: y,
              objectPosX: T,
              objectPosY: b,
            } = (0, r.rKX)(),
            h = (0, r.wLl)(),
            { skeleton: g } = (0, r.hT3)();
          return (0, n.W)((n) => {
            if (!e || !l || !r.$PW.includes(l)) return;
            let f = {
              hash: i,
              pageId: l,
              entityType: u,
              entityId: m,
              entityPosX: k,
              entityPosY: v,
              objectsCount: x,
              viewUuid: t,
              objectType: C,
              objectId: y,
              objectPosX: T,
              objectPosY: b,
            };
            r.ORM.includes(l) &&
              ((f.tabId = s), (f.tabPos = o), (f.isTabSelectedByDefault = d)),
              g && (f.skeletonId = g),
              p && (f.mainObjectType = p),
              _ && (f.mainObjectId = _);
            let A = (0, r.KOr)({ params: f, logger: h, context: c.name });
            if (A) {
              if (n) {
                (0, a.PB)(e.evgenInstance, A);
                return;
              }
              (0, a.re)(e.evgenInstance, A);
            }
          });
        };
      var d = i(22874);
      let u = (t) => {
          let { available: e, disclaimers: i } = (0, r.NuW)(t);
          return (0, d.pj)({
            clipId: t.clipId,
            title: t.title,
            thumbnail: t.thumbnail,
            duration: t.duration,
            previewUrl: t.previewUrl,
            isAvailable: e,
            version: t.version,
            disclaimers: i,
          });
        },
        m = (t, e) => {
          let i = Number(e);
          return !Number.isNaN(i) && i > 0 && i < t.length ? i : 0;
        };
      var k = i(74735),
        v = i(46090),
        p = i(52394),
        _ = i(16748),
        x = i(46726),
        C = i(97472),
        y = i(40892);
      let T = d.V5.compose(
        d.V5.model("BaseClip", {
          clipId: d.V5.number,
          title: d.V5.maybe(d.V5.string),
          thumbnail: d.V5.maybe(d.V5.string),
          previewUrl: d.V5.maybe(d.V5.string),
          duration: d.V5.maybe(d.V5.number),
          isAvailable: d.V5.boolean,
          version: d.V5.maybe(d.V5.string),
        }),
        y.ie,
      )
        .views((t) => ({
          get url() {
            return "/video?ids=".concat(t.clipId);
          },
          get isLiked() {
            if (!(0, d.fh)(t)) return !1;
            let { library: e, experiments: i } = (0, d.yj)(t);
            if (
              "isClipLiked" in e &&
              i.checkExperiment(r.peG.WebNextLibrarySync, "on")
            )
              return e.isClipLiked(t.clipId);
            return !1;
          },
          get modalDisclaimerId() {
            var e;
            if (!t.disclaimers) return null;
            let i =
              null === (e = (0, r.UY5)(t.disclaimers, C.e.MODAL)) ||
              void 0 === e
                ? void 0
                : e[0];
            return (null == i ? void 0 : i.id) || null;
          },
          get isLegalRejected() {
            var i;
            if (!(0, d.fh)(t) || !t.disclaimers || t.isAvailable) return !1;
            let e =
              null === (i = (0, r.UY5)(t.disclaimers, C.e.MODAL)) ||
              void 0 === i
                ? void 0
                : i[0];
            return (null == e ? void 0 : e.type) === C.e.MODAL;
          },
          get isUnsafeLegal() {
            if (!(0, d.fh)(t)) return !1;
            if (t.disclaimers) {
              var a;
              let e =
                null === (a = (0, r.UY5)(t.disclaimers, C.e.MODAL)) ||
                void 0 === a
                  ? void 0
                  : a[0];
              return (
                t.isAvailable && (null == e ? void 0 : e.type) === C.e.MODAL
              );
            }
            return !1;
          },
        }))
        .actions((t) => ({
          getKey: (e) => "".concat(e, "_").concat(t.clipId),
          toggleLike() {
            if (!(0, d.fh)(t)) return;
            let { library: e, user: i, experiments: a } = (0, d.yj)(t);
            if (
              i.isAuthorized &&
              "toggleClipLike" in e &&
              a.checkExperiment(r.peG.WebNextLibrarySync, "on")
            )
              return e.toggleClipLike({
                entityId: t.clipId,
                userId: i.account.data.uid,
              });
          },
        }));
    },
    74735: function (t, e, i) {
      "use strict";
      i.d(e, {
        F: function () {
          return n;
        },
      });
      var a = i(13534);
      let n = function (t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return "/video?"
          .concat(a.wxR.IDS, "=")
          .concat(t.join(","), "&")
          .concat(a.wxR.ACTIVE_INDEX, "=")
          .concat(e);
      };
    },
    46090: function (t, e, i) {
      "use strict";
      var a, n;
      i.d(e, {
        $: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).MAIN = "main"),
        (n.ARTIST_PAGE = "artistPage"),
        (n.COLLECTION_PAGE = "collectionPage"),
        (n.SEARCH_PAGE = "searchPage"),
        (n.TRACK_CONTEXT_MENU = "trackContextMenu");
    },
    52394: function (t, e, i) {
      "use strict";
      i.d(e, {
        useOnLikeClick: function () {
          return u;
        },
      });
      var a = i(75441),
        n = i(37285),
        r = i(65067),
        l = i(9317),
        s = i(89143),
        o = i(13534),
        c = i(97141);
      let d = (t) => {
          let { clip: e, closeToast: i } = t;
          return (0, a.jsx)(c.AP, {
            entityVariant: c.j9.CLIP,
            entityTitle: e.title,
            collectionUrl: "/collection/clips",
            isLiked: e.isLiked,
            closeToast: i,
            coverUri: e.thumbnail,
          });
        },
        u = (t) => {
          let {
              user: e,
              fullscreenVideoPlayer: i,
              collection: u,
            } = (0, o.oR4)(),
            { notify: m } = (0, o.d$W)(),
            [k, v] = (0, r.useState)(!1),
            { formatMessage: p } = (0, l.Z)();
          return (0, r.useCallback)(async () => {
            if (!t) return;
            let r = i.modal.isOpened ? o.W$x.FULLSCREEN_INFO : o.W$x.INFO,
              l = i.modal.isOpened ? o.W$x.FULLSCREEN_ERROR : o.W$x.ERROR;
            if (!e.isAuthorized) {
              m(
                (0, a.jsx)(c.Q, {
                  error: p({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l },
              );
              return;
            }
            if (k) return;
            let _ = { ...(0, n.ZN)(t), isLiked: !t.isLiked };
            v(!0);
            let x = await t.toggleLike();
            v(!1),
              u.clips.reset(),
              x === s.B.OK
                ? m((0, a.jsx)(d, { clip: _ }), { containerId: r })
                : m(
                    (0, a.jsx)(c.Q, {
                      error: p({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l },
                  );
          }, [t, e.isAuthorized, k, p, m, i.modal.isOpened, u.clips]);
        };
    },
    16748: function (t, e, i) {
      "use strict";
      i.d(e, {
        useVideoModal: function () {
          return l;
        },
      });
      var a = i(93093),
        n = i(13534),
        r = i(74735);
      let l = () => {
        let { fullscreenVideoPlayer: t } = (0, n.oR4)(),
          e = (0, n.PYm)();
        return (0, a.W)(function (i) {
          let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          t.setIds(i), t.setClipIndex(a), e((0, r.F)(i, a)), t.modal.open();
        });
      };
    },
    46726: function (t, e, i) {
      "use strict";
      i.d(e, {
        useWithClips: function () {
          return r;
        },
      });
      var a = i(13534),
        n = i(46090);
      let r = (t) => {
        let { experiments: e, settings: i } = (0, a.oR4)();
        if (i.isMobile || !e.checkExperiment(a.peG.WebNextClipsMain, "on"))
          return !1;
        switch (t) {
          case n.$.MAIN:
            return e.checkExperiment(a.peG.WebNextClipsMain, "on");
          case n.$.ARTIST_PAGE:
            return e.checkExperiment(a.peG.WebNextClipsArtist, "on");
          case n.$.COLLECTION_PAGE:
            return e.checkExperiment(a.peG.WebNextClipsCollection, "on");
          case n.$.SEARCH_PAGE:
            return e.checkExperiment(a.peG.WebNextClipsSearch, "on");
          case n.$.TRACK_CONTEXT_MENU:
            return e.checkExperiment(a.peG.WebNextClipsTrackContextMenu, "on");
          default:
            return !1;
        }
      };
    },
    90378: function (t, e, i) {
      "use strict";
      i.d(e, {
        ST: function () {
          return m;
        },
        em: function () {
          return A;
        },
        F8: function () {
          return j;
        },
        $H: function () {
          return s;
        },
      });
      var a = i(65067),
        n = i(77282),
        r = i(93093),
        l = i(13534);
      let s = (t) => {
        let {
            entityType: e,
            isLegalRejected: i,
            isUnsafeLegal: s,
            disclaimerId: o,
            entityId: c,
            callback: d,
          } = t,
          {
            disclaimerModalData: u,
            modals: { disclaimerModal: m },
          } = (0, l.oR4)(),
          k = (0, a.useRef)(String((0, n.Z)())),
          v = (0, a.useRef)(!1),
          p = (0, l.uK4)().get(l.ceh);
        return (
          (0, a.useEffect)(() => {
            u.isUnsafeDisclaimerConfirmed &&
              u.id === k.current &&
              !v.current &&
              (null == d || d(), (v.current = !0));
          }, [d, u.isUnsafeDisclaimerConfirmed, u.id]),
          (0, r.W)(async (t) => {
            if (c && (i || s)) {
              let i = p.get(l.BUb.ExEx);
              if (
                s &&
                (null == i ? void 0 : i.includes("".concat(e, "_").concat(c)))
              ) {
                null == d || d(t);
                return;
              }
              null == t || t.preventDefault(),
                await u.getDisclaimerData({
                  entityId: Number(c),
                  entityType: e,
                  disclaimerId: o,
                }),
                s && u.setType(l.Gq.UNSAFE),
                u.setId(k.current),
                u.setEntityId(c),
                u.setEntityType(e),
                (v.current = !1),
                m.open();
              return;
            }
            null == d || d(t);
          })
        );
      };
      var o = i(37285),
        c = i(22874),
        d = i(40892);
      let u = (t) =>
          t.details
            ? (0, c.pj)({
                title: t.title,
                description: t.description,
                details: { text: t.details.text, url: t.details.url },
              })
            : (0, c.pj)({ title: t.title, description: t.description }),
        m = c.V5.compose(
          c.V5.model("Disclaimer", {
            data: c.V5.maybeNull(d.K3),
            type: c.V5.maybeNull(c.V5.enumeration(Object.values(l.Gq))),
            id: c.V5.maybeNull(c.V5.string),
            entityType: c.V5.maybeNull(c.V5.enumeration(Object.values(l.coP))),
            entityId: c.V5.maybeNull(c.V5.union(c.V5.string, c.V5.number)),
            isUnsafeDisclaimerConfirmed: c.V5.optional(c.V5.boolean, !1),
            shouldHistoryBack: c.V5.optional(c.V5.boolean, !1),
            shouldCloseModalOnOutsidePress: c.V5.optional(c.V5.boolean, !0),
            shouldCloseModalOnEscape: c.V5.optional(c.V5.boolean, !0),
          }),
          d.fu,
        )
          .volatile(() => ({
            onDisclaimerConfirmHandler: null,
            onDisclaimerRejectHandler: null,
          }))
          .actions((t) => ({
            setDisclaimerData(e) {
              t.data = (0, o.ZN)(e);
            },
            setShouldCloseModalOnOutsidePress(e) {
              t.shouldCloseModalOnOutsidePress = e;
            },
            setShouldCloseModalOnEscape(e) {
              t.shouldCloseModalOnEscape = e;
            },
            getArtistDisclaimer: (0, c.ls)(function* (e) {
              let { artistId: i } = e,
                { artistsResource: a, modelActionsLogger: n } = (0, c.dU)(t);
              if (t.loadingState !== l.Gui.PENDING)
                try {
                  t.loadingState = l.Gui.PENDING;
                  let e = yield a.getDisclaimer({ artistId: i }),
                    n = e.modal || e.foreignAgent;
                  n && (t.data = u(n)),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.REJECT);
                }
            }),
            getAlbumDisclaimer: (0, c.ls)(function* (e) {
              let { albumId: i } = e,
                { albumResource: a, modelActionsLogger: n } = (0, c.dU)(t);
              if (t.loadingState !== l.Gui.PENDING)
                try {
                  t.loadingState = l.Gui.PENDING;
                  let e = yield a.getDisclaimer({ albumId: i }),
                    n = e.modal || e.foreignAgent;
                  n && (t.data = u(n)),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.REJECT);
                }
            }),
            getTrackDisclaimer: (0, c.ls)(function* (e) {
              let { trackId: i } = e,
                { tracksResource: a, modelActionsLogger: n } = (0, c.dU)(t);
              if (t.loadingState !== l.Gui.PENDING)
                try {
                  t.loadingState = l.Gui.PENDING;
                  let e = yield a.getDisclaimer({ trackId: i }),
                    n = e.modal || e.foreignAgent;
                  n && (t.data = u(n)),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.REJECT);
                }
            }),
            getClipDisclaimer: (0, c.ls)(function* (e) {
              let { clipId: i } = e,
                { clipsResource: a, modelActionsLogger: n } = (0, c.dU)(t);
              if (t.loadingState !== l.Gui.PENDING)
                try {
                  t.loadingState = l.Gui.PENDING;
                  let e = yield a.getDisclaimer({ clipId: i }),
                    n = e.modal || e.foreignAgent;
                  n && (t.data = u(n)),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.REJECT);
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
            setDisclaimerConfirmHandler(e) {
              t.onDisclaimerConfirmHandler = e;
            },
            setDisclaimerRejectHandler(e) {
              t.onDisclaimerRejectHandler = e;
            },
            reset() {
              (t.loadingState = l.Gui.IDLE),
                (t.data = null),
                (t.id = null),
                (t.type = null),
                (t.entityType = null),
                (t.entityId = null),
                (t.isUnsafeDisclaimerConfirmed = !1),
                (t.shouldHistoryBack = !1),
                (t.shouldCloseModalOnOutsidePress = !0),
                (t.shouldCloseModalOnEscape = !0);
            },
          }))
          .actions((t) => ({
            getDisclaimerData: (0, c.ls)(function* (e) {
              let { entityId: i, entityType: a, disclaimerId: n } = e,
                { disclaimers: r } = (0, c.yj)(t);
              if (n) {
                let e = yield r.getDisclaimerById(n);
                e && t.setDisclaimerData(e);
              } else
                switch (a) {
                  case l.coP.ARTIST:
                    yield t.getArtistDisclaimer({ artistId: String(i) });
                    break;
                  case l.coP.ALBUM:
                  case l.coP.PODCAST:
                  case l.coP.AUDIOBOOK:
                    yield t.getAlbumDisclaimer({ albumId: Number(i) });
                    break;
                  case l.coP.TRACK:
                    yield t.getTrackDisclaimer({ trackId: String(i) });
                    break;
                  case l.coP.CLIP:
                    yield t.getClipDisclaimer({ clipId: String(i) });
                }
            }),
          }));
      var k = i(75441),
        v = i(32358),
        p = i(62569),
        _ = i(15937),
        x = i(35846),
        C = i(68208),
        y = i(28676),
        T = i(17392),
        b = i(97141),
        h = i(47902),
        g = i.n(h);
      let f = {
          [l.coP.ALBUM]: (0, k.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-album",
          }),
          [l.coP.PODCAST]: (0, k.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-podcast",
          }),
          [l.coP.ARTIST]: (0, k.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-artist",
          }),
          [l.coP.TRACK]: (0, k.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-track",
          }),
          [l.coP.AUDIOBOOK]: (0, k.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-audiobook",
          }),
          [l.coP.CLIP]: (0, k.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-clip",
          }),
        },
        A = (0, p.Pi)((t) => {
          var e, i, n, s;
          let { disclaimer: o, onClose: c, className: d } = t,
            { data: u, isLoading: m } = null != o ? o : {},
            { href: p } = (0, l.zBm)(
              null !==
                (s =
                  null == o
                    ? void 0
                    : null === (i = o.data) || void 0 === i
                      ? void 0
                      : null === (e = i.details) || void 0 === e
                        ? void 0
                        : e.url) && void 0 !== s
                ? s
                : "",
            ),
            h = (0, l.k67)(),
            A = (0, l.s0h)("/"),
            N = (0, l.uK4)().get(l.ceh),
            I = (0, r.W)(() => {
              if (c) return c();
              h.canBack && h.back(), A();
            }),
            L =
              (null == u
                ? void 0
                : null === (n = u.details) || void 0 === n
                  ? void 0
                  : n.url) && u.details.text,
            j = (0, r.W)(() => {
              null == o || o.setConfirmUnsafeDisclaimer(!0);
              let t = N.get(l.BUb.ExEx),
                e = new Date(),
                i = e.setMinutes(e.getMinutes() + 15);
              t
                ? N.set(
                    l.BUb.ExEx,
                    [
                      ...t,
                      ""
                        .concat(null == o ? void 0 : o.entityType, "_")
                        .concat(null == o ? void 0 : o.entityId),
                    ],
                    { expires: new Date(i) },
                  )
                : N.set(
                    l.BUb.ExEx,
                    [
                      ""
                        .concat(null == o ? void 0 : o.entityType, "_")
                        .concat(null == o ? void 0 : o.entityId),
                    ],
                    { expires: new Date(i) },
                  ),
                null == c || c(),
                (null == o ? void 0 : o.onDisclaimerConfirmHandler) &&
                  o.onDisclaimerConfirmHandler();
            }),
            D = (0, r.W)(() => {
              (null == o ? void 0 : o.shouldHistoryBack)
                ? (null == c || c(), h.canBack && h.back(), A())
                : null == c || c(),
                (null == o ? void 0 : o.onDisclaimerRejectHandler) &&
                  o.onDisclaimerRejectHandler();
            });
          (0, a.useEffect)(
            () => () => {
              null == o || o.reset();
            },
            [o],
          );
          let P = (0, a.useMemo)(() => {
              if (m)
                return (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(y.Shimmer, {
                      radius: "l",
                      width: 200,
                      height: 24,
                      className: g().shimmer,
                    }),
                    (0, k.jsx)(y.Shimmer, {
                      radius: "l",
                      width: 250,
                      height: 16,
                      className: g().shimmer,
                    }),
                  ],
                });
              if (u && !m) {
                var t;
                return (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(T.Heading, {
                      variant: "h4",
                      size: "l",
                      className: (0, v.W)(g().title, g().text),
                      ...(0, x.BA)(x.FK.disclaimer.DISCLAIMER_TITLE),
                      children: u.title,
                    }),
                    (0, k.jsx)(T.Caption, {
                      variant: "div",
                      size: "l",
                      weight: "normal",
                      className: g().text,
                      ...(0, x.BA)(x.FK.disclaimer.DISCLAIMER_DESCRIPTION),
                      children: u.description,
                    }),
                    L &&
                      (0, k.jsx)(b.rU, {
                        href: p,
                        className: g().link,
                        children: (0, k.jsx)(T.Caption, {
                          variant: "span",
                          size: "l",
                          weight: "normal",
                          children:
                            null === (t = u.details) || void 0 === t
                              ? void 0
                              : t.text,
                        }),
                      }),
                  ],
                });
              }
            }, [m, u, p, L]),
            R = (0, a.useMemo)(
              () =>
                m
                  ? (0, k.jsx)(y.Shimmer, {
                      radius: "xl",
                      width: 190,
                      height: 50,
                      className: g().shimmer,
                    })
                  : (null == o ? void 0 : o.type) === l.Gq.UNSAFE
                    ? (0, k.jsxs)("div", {
                        className: g().buttons,
                        children: [
                          (0, k.jsx)(C.Button, {
                            color: "primary",
                            onClick: D,
                            size: "l",
                            radius: "xxxl",
                            className: g().button,
                            ...(0, x.BA)(
                              x.FK.disclaimer.DISCLAIMER_REJECT_BUTTON,
                            ),
                            children: (0, k.jsx)(_.Z, {
                              id: "extra-explicit.reject-unsafe-entity",
                            }),
                          }),
                          (0, k.jsx)(C.Button, {
                            color: "secondary",
                            onClick: j,
                            size: "l",
                            radius: "xxxl",
                            className: g().button,
                            ...(0, x.BA)(
                              x.FK.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                            ),
                            children: o.entityType && f[o.entityType],
                          }),
                        ],
                      })
                    : (0, k.jsx)("div", {
                        className: g().buttons,
                        children: (0, k.jsx)(C.Button, {
                          color: "primary",
                          onClick: I,
                          size: "l",
                          radius: "xxxl",
                          className: g().button,
                          ...(0, x.BA)(
                            x.FK.disclaimer.DISCLAIMER_REJECT_BUTTON,
                          ),
                          children: (0, k.jsx)(_.Z, {
                            id: "interface-actions.confirm",
                          }),
                        }),
                      }),
              [
                j,
                null == o ? void 0 : o.entityType,
                null == o ? void 0 : o.type,
                I,
                m,
                D,
              ],
            );
          return (0, k.jsx)("div", {
            className: (0, v.W)(g().root, d),
            ...(0, x.BA)(x.FK.disclaimer.DISCLAIMER_CONTENT),
            children: (0, k.jsxs)("div", {
              className: g().container,
              children: [P, R],
            }),
          });
        });
      var N = i(59506),
        I = i(64567),
        L = i.n(I);
      let j = (0, p.Pi)(() => {
        let {
          disclaimerModalData: t,
          modals: { disclaimerModal: e },
        } = (0, l.oR4)();
        return (0, k.jsx)(N.u, {
          size: "fitContent",
          placement: "center",
          open: e.isOpened,
          onOpenChange: e.onOpenChange,
          onClose: e.close,
          showHeader: !1,
          className: L().root,
          contentClassName: L().content,
          overlayColor: "full",
          containerProps: (0, x.BA)(x.FK.disclaimer.DISCLAIMER_MODAL),
          closeOnOutsidePress: t.shouldCloseModalOnOutsidePress,
          escapeKey: t.shouldCloseModalOnEscape,
          children: (0, k.jsx)(A, { disclaimer: t, onClose: e.close }),
        });
      });
    },
    1150: function (t, e, i) {
      "use strict";
      i.d(e, {
        MG: function () {
          return M.AudiobookMeta;
        },
        jt: function () {
          return B.ControlsBar;
        },
        Jx: function () {
          return L;
        },
        Zz: function () {
          return G.Lyrics;
        },
        wT: function () {
          return O.PodcastMeta;
        },
        cG: function () {
          return F.PromoLandingTrackAlbum;
        },
        F7: function () {
          return W.SearchTrackCard;
        },
        fQ: function () {
          return V.Track;
        },
        RJ: function () {
          return Z.TrackAlbum;
        },
        G7: function () {
          return z.TrackCard;
        },
        _3: function () {
          return Y.TrackChart;
        },
        hz: function () {
          return w.TrackContextMenu;
        },
        Nl: function () {
          return R;
        },
        ko: function () {
          return U.TrackMeta;
        },
        le: function () {
          return I;
        },
        FP: function () {
          return H.TrackNonMusic;
        },
        O2: function () {
          return X.TrackPlaylist;
        },
        VZ: function () {
          return J.TrackPlaylistAddition;
        },
        qL: function () {
          return tt.TrackUgcUpload;
        },
        dn: function () {
          return q.TrailerTrackAlbum;
        },
        fY: function () {
          return Q.TrailerTrackPlaylist;
        },
        eZ: function () {
          return K.UgcTrackEditModal;
        },
        bp: function () {
          return E;
        },
        bc: function () {
          return S;
        },
        cO: function () {
          return $.c;
        },
        S7: function () {
          return c;
        },
        o: function () {
          return m;
        },
        pO: function () {
          return k.p;
        },
        Er: function () {
          return _;
        },
        nh: function () {
          return C;
        },
        E5: function () {
          return T;
        },
        Vt: function () {
          return o;
        },
        Z2: function () {
          return b;
        },
        Wc: function () {
          return h.useAddTrackToPlaylist;
        },
        T$: function () {
          return g.T;
        },
        nD: function () {
          return f.useTrackDisclaimer;
        },
      });
      var a = i(22874),
        n = i(89428),
        r = i(73447),
        l = i(64353),
        s = i(32399);
      let o = (t, e) => {
          var i, n;
          let o =
              null === (i = t.artists) || void 0 === i ? void 0 : i.map(l.d),
            c = null === (n = t.albums) || void 0 === n ? void 0 : n.map(r.N);
          return (0, a.pj)({ ...(0, s.Ni)(t, e), artists: o, albums: c });
        },
        c = (t, e) => (0, a.pj)({ ...o(t), chart: e && (0, n.W5)(e) });
      var d = i(66743),
        u = i(13534);
      let m = (t, e) => {
        let i = Math.floor(Date.now() / 1e3),
          a = "".concat(t).concat(i);
        return {
          sign: (0, d.createHmac)("sha256", (0, u.Sqh)())
            .update(a)
            .digest("base64"),
          timeStamp: i,
          trackId: t,
          format: e,
        };
      };
      var k = i(40510),
        v = i(98730),
        p = i(65067);
      (0, p.cache)(async (t, e) => {
        ((0, u.aBB)(t) && (0, u.aBB)(e)) || (0, v.notFound)();
        try {
          var i;
          let {
            container: a,
            backendHostTld: n,
            locale: r,
            host: l,
            isRSC: s,
            fullUrl: o,
            requestUrl: c,
          } = await (0, u.rbP)();
          if (s)
            return {
              track: void 0,
              album: void 0,
              similarTracks: void 0,
              fullUrl: o,
              requestUrl: c,
              backendHostTld: n,
              locale: r,
              host: l,
              isRSC: s,
            };
          let d = a.get(u.g5F),
            m = await d.getFullInfoTrack({ trackId: t, albumId: Number(e) });
          return (
            (m.track && "not-found" !== m.track.error) || (0, v.notFound)(),
            {
              track: m.track,
              album:
                null === (i = m.track.albums) || void 0 === i ? void 0 : i[0],
              similarTracks: m.similarTracks,
              backendHostTld: n,
              locale: r,
              host: l,
              fullUrl: o,
              requestUrl: c,
              isRSC: s,
            }
          );
        } catch (t) {
          return {
            track: void 0,
            album: void 0,
            similarTracks: null,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      });
      let _ = (t, e) => {
        if (!e || !t) return;
        let { h: i, s: a } = (0, u.sEc)(e);
        return "hsl("
          .concat(i, ", ")
          .concat(a, "%, ")
          .concat(t === u.Q2A.Light ? 60 : 20, "%)");
      };
      (0, p.cache)(async (t) => {
        try {
          var e, i;
          let {
            container: a,
            backendHostTld: n,
            locale: r,
            host: l,
            fullUrl: s,
            requestUrl: o,
            isRSC: c,
          } = await (0, u.rbP)();
          if (c)
            return {
              track: void 0,
              album: void 0,
              fullUrl: s,
              isRSC: c,
              requestUrl: o,
              backendHostTld: n,
              locale: r,
              host: l,
            };
          let d = a.get(u.g5F),
            m = await d.getTracksMeta({ trackIds: [t], removeDuplicates: !0 });
          return (
            (m && m.length) || (0, v.notFound)(),
            {
              track: m[0],
              album:
                null === (i = m[0]) || void 0 === i
                  ? void 0
                  : null === (e = i.albums) || void 0 === e
                    ? void 0
                    : e[0],
              backendHostTld: n,
              locale: r,
              host: l,
              fullUrl: s,
              requestUrl: o,
            }
          );
        } catch (t) {
          return {
            track: void 0,
            album: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      });
      var x = i(94123);
      let C = (t) =>
        t
          ? {
              id: t.id,
              artists: t.artists.map(l.zg),
              durationMs: t.durationMs,
              title: t.title,
              type: t.type,
            }
          : { id: 0, artists: [], durationMs: 0, title: "", type: x.V.TRACK };
      var y = i(98375);
      let T = (t) => ({ type: y.RX.Unloaded, meta: { id: t.entityId } }),
        b = (t) => {
          var e, i;
          return (0, a.pj)({
            ...o(t),
            artists:
              null !==
                (i =
                  null == t
                    ? void 0
                    : null === (e = t.artists) || void 0 === e
                      ? void 0
                      : e.map(l.d)) && void 0 !== i
                ? i
                : [],
          });
        };
      var h = i(9259),
        g = i(2593);
      i(48088), i(86083);
      var f = i(67371);
      let A = a.V5.model("Credit", { title: a.V5.string, value: a.V5.string });
      var N = i(40892);
      let I = s.yp
          .props({
            artists: a.V5.array(l.Go),
            albums: a.V5.array(r.KX),
            chart: a.V5.maybe(n.BH),
          })
          .views((t) => ({
            get artistsNames() {
              var e;
              return null === (e = t.artists) || void 0 === e
                ? void 0
                : e.map((t) => t.name).join(", ");
            },
            get mainArtist() {
              var i, a, n, r;
              if (
                null === (a = t.artists) || void 0 === a
                  ? void 0
                  : null === (i = a[0]) || void 0 === i
                    ? void 0
                    : i.various
              )
                return null;
              return null !==
                (r =
                  null === (n = t.artists) || void 0 === n ? void 0 : n[0]) &&
                void 0 !== r
                ? r
                : null;
            },
            get mainAlbum() {
              var l, s;
              return null !==
                (s = null === (l = t.albums) || void 0 === l ? void 0 : l[0]) &&
                void 0 !== s
                ? s
                : null;
            },
            get index() {
              var o, c, d;
              return null !==
                (d =
                  null === (c = t.albums[0]) || void 0 === c
                    ? void 0
                    : null === (o = c.trackPosition) || void 0 === o
                      ? void 0
                      : o.index) && void 0 !== d
                ? d
                : null;
            },
            get isAvailableOnlyForPlus() {
              var u;
              return !!(null === (u = this.mainAlbum) || void 0 === u
                ? void 0
                : u.isAvailableOnlyForPlus);
            },
          }))
          .actions((t) => ({
            changeTrackInfo: (0, a.ls)(function* (e, i) {
              let { ugcResource: n, modelActionsLogger: r } = (0, a.dU)(t);
              if (
                t.artists.map((t) => t.name).join(", ") === i &&
                e === t.title
              )
                return u.SLo.OK;
              try {
                var s;
                yield n.changeTrack({ trackId: t.id, title: e, artist: i }),
                  (t.title = e);
                let r =
                  (null === (s = t.artists[0]) || void 0 === s
                    ? void 0
                    : s.id) || "0";
                if (((t.artists = (0, a.pj)([])), i)) {
                  let e = l.Go.create({ id: r, name: i, isAvailable: !0 });
                  t.artists = (0, a.pj)([e]);
                }
                return u.SLo.OK;
              } catch (t) {
                return r.error(t), u.SLo.ERROR;
              }
            }),
          }))
          .named("Track"),
        L = a.V5.model("CurrentTrackInfo", {
          id: a.V5.maybeNull(a.V5.union(a.V5.string, a.V5.number)),
          albumId: a.V5.maybeNull(a.V5.number),
          isUGC: a.V5.maybeNull(a.V5.boolean),
          trackLoadingState: a.V5.enumeration(Object.values(u.Gui)),
          fullTrack: a.V5.maybeNull(I),
          creditsLoadingState: a.V5.enumeration(Object.values(u.Gui)),
          credits: a.V5.maybeNull(a.V5.array(A)),
          modal: N.KL,
          fullDescription: a.V5.maybeNull(a.V5.string),
          descriptionLoadingState: a.V5.enumeration(Object.values(u.Gui)),
        })
          .views((t) => ({
            get isTrackIdle() {
              return t.trackLoadingState === u.Gui.IDLE;
            },
            get isCreditsIdle() {
              return t.creditsLoadingState === u.Gui.IDLE;
            },
            get isTrackLoading() {
              return (
                t.trackLoadingState === u.Gui.PENDING ||
                t.trackLoadingState === u.Gui.IDLE
              );
            },
            get isTrackRejected() {
              return t.trackLoadingState === u.Gui.REJECT;
            },
            get isCreditsLoading() {
              return (
                t.creditsLoadingState === u.Gui.PENDING ||
                t.creditsLoadingState === u.Gui.IDLE
              );
            },
            get isCreditsRejected() {
              return t.creditsLoadingState === u.Gui.REJECT;
            },
            get isRejected() {
              return (
                t.creditsLoadingState === u.Gui.REJECT &&
                t.trackLoadingState === u.Gui.REJECT
              );
            },
          }))
          .actions((t) => ({
            setTrack(e) {
              let { id: i, albumId: a, isUGC: n } = e;
              (t.id = i), (t.albumId = a), (t.isUGC = n);
            },
            getFullTrack: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.trackLoadingState === u.Gui.PENDING) return null;
              try {
                t.trackLoadingState = u.Gui.PENDING;
                let i = yield e.getFullInfoTrack({
                  trackId: t.id,
                  albumId: t.albumId,
                });
                if (!i) return null;
                (t.fullTrack = (0, a.pj)(o(i.track))),
                  (t.trackLoadingState = u.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.trackLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            getFullDescription: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.descriptionLoadingState === u.Gui.PENDING)
                return null;
              try {
                t.descriptionLoadingState = u.Gui.PENDING;
                let i = yield e.getFullDescriptionTrack({ trackId: t.id });
                if (!i) return null;
                (t.fullDescription = i.description),
                  (t.descriptionLoadingState = u.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.descriptionLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            getTrackMeta: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.trackLoadingState === u.Gui.PENDING) return null;
              try {
                t.trackLoadingState = u.Gui.PENDING;
                let i = yield e.getTracksMeta({
                  trackIds: [t.id],
                  removeDuplicates: !0,
                });
                if (!i || !i.length) return null;
                i[0] &&
                  ((t.fullTrack = (0, a.pj)(o(i[0]))),
                  (t.trackLoadingState = u.Gui.RESOLVE));
              } catch (e) {
                i.error(e), (t.trackLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            getCreditsInfo: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.creditsLoadingState === u.Gui.PENDING) return null;
              try {
                t.creditsLoadingState = u.Gui.PENDING;
                let i = yield e.getCredits({ trackId: t.id });
                (t.credits = (0, a.pj)(null == i ? void 0 : i.credits)),
                  (t.creditsLoadingState = u.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.creditsLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            reset() {
              (t.id = null),
                (t.albumId = null),
                (t.isUGC = null),
                (t.trackLoadingState = u.Gui.IDLE),
                (t.descriptionLoadingState = u.Gui.IDLE),
                (t.creditsLoadingState = u.Gui.IDLE),
                (t.fullTrack = null),
                (t.credits = null);
            },
          }));
      var j = i(37285),
        D = i(77282),
        P = i(48937);
      let R = a.V5.compose(
          a.V5.model("TrackLyrics", {
            lyrics: a.V5.maybeNull(a.V5.string),
            major: a.V5.maybeNull(s.bP),
            lyricId: a.V5.maybeNull(a.V5.number),
            writers: a.V5.array(a.V5.string),
            externalLyricId: a.V5.maybeNull(a.V5.string),
            modal: N.KL,
            track: a.V5.maybeNull(I),
            trackId: a.V5.maybeNull(a.V5.union(a.V5.string, a.V5.number)),
            currentTrackId: a.V5.maybeNull(
              a.V5.union(a.V5.string, a.V5.number),
            ),
            hasError: a.V5.optional(a.V5.boolean, !1),
          }),
          N.fu,
        )
          .views((t) => ({
            get writersNames() {
              return t.writers.join(", ");
            },
            get hasWriters() {
              return 0 !== t.writers.length;
            },
            get isShimmerVisible() {
              return t.isLoading || t.isRejected;
            },
            get shouldShowErrorNotification() {
              return t.isRejected && t.hasError;
            },
          }))
          .actions((t) => {
            let e = {
              setTrack(e) {
                t.track = (0, a.pj)({ ...(0, j.ZN)(e) });
              },
              resetShouldShowError() {
                t.hasError = !1;
              },
              getLyrics: (0, a.ls)(function* (i) {
                let { tracksResource: n, modelActionsLogger: r } = (0, a.dU)(t);
                if (t.loadingState !== u.Gui.PENDING && t.currentTrackId !== i)
                  try {
                    (t.loadingState = u.Gui.PENDING), (t.currentTrackId = i);
                    let {
                      downloadUrl: r,
                      major: l,
                      externalLyricId: o,
                      lyricId: c,
                      writers: d,
                    } = yield n.getLyrics(m(i, P.y.TEXT));
                    (t.major = (0, s.jp)(l)),
                      (t.externalLyricId = o),
                      (t.lyricId = c),
                      (t.writers = (0, a.pj)(d || [])),
                      yield e.downloadLyrics(r),
                      (t.loadingState = u.Gui.RESOLVE);
                  } catch (e) {
                    (t.loadingState = u.Gui.REJECT),
                      (t.currentTrackId = null),
                      (t.hasError = !0),
                      t.modal.isOpened && t.modal.close(),
                      r.error(e);
                  }
              }),
              downloadLyrics: (0, a.ls)(function* (e) {
                let { prefixlessResource: i } = (0, a.dU)(t),
                  n = yield i.getLyricsText(e);
                t.lyrics = n;
              }),
              sendViews: (0, a.ls)(function* (e) {
                let { trackId: i, albumId: n } = e,
                  { lyricViewsResource: r, modelActionsLogger: l } = (0, a.dU)(
                    t,
                  );
                if (t.loadingState === u.Gui.RESOLVE)
                  try {
                    if (
                      !t.major ||
                      !t.lyricId ||
                      !t.externalLyricId ||
                      !t.currentTrackId
                    )
                      return;
                    yield r.sendViews({
                      lyricViews: [
                        {
                          id: (0, D.Z)(),
                          trackId: i,
                          majorId: t.major.id,
                          lyricId: t.lyricId,
                          externalLyricId: t.externalLyricId,
                          lyricFormat: P.y.TEXT,
                          albumId: void 0 !== n ? String(n) : void 0,
                        },
                      ],
                    });
                  } catch (t) {
                    l.error(t);
                  }
              }),
            };
            return e;
          }),
        E = a.V5.model("UgcTrackEditModal", { modal: N.KL })
          .volatile(() => ({ track: null }))
          .views((t) => ({
            get trackTitle() {
              if (!t.track) return "";
              return t.track.title;
            },
            get trackArtist() {
              if (!t.track) return "";
              return t.track.artists.map((t) => t.name).join(", ");
            },
          }))
          .actions((t) => {
            let e = {
              open(e) {
                (t.track = e), t.modal.open();
              },
              close() {
                t.modal.close(), e.reset();
              },
              reset() {
                t.track = null;
              },
            };
            return e;
          }),
        S = a.V5.compose(I, s.v$).named("UgcTrack");
      var B = i(88594),
        M = i(30739),
        O = i(48943),
        U = i(43406),
        w = i(7899),
        G = i(91123),
        W = i(7631),
        V = i(59920),
        z = i(18941),
        K = i(10221),
        F = i(89417),
        Z = i(199),
        q = i(46281),
        Y = i(48197),
        H = i(55783),
        $ = i(13743),
        X = i(14424),
        Q = i(65409),
        J = i(52557),
        tt = i(29232);
    },
    40510: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return n;
        },
      });
      var a = i(88350);
      let n = function () {
        var t, e;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (
          null === (e = i[0]) || void 0 === e
            ? void 0
            : null === (t = e.decomposed) || void 0 === t
              ? void 0
              : t.length
        )
          return i;
        let r = n.map((t) => t.id).sort(),
          l = i.map((t) => t.id).sort();
        return (0, a.Z)(r, l) ? [] : i.filter((t) => !t.various);
      };
    },
    28421: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return n;
        },
      });
      var a = i(13534);
      let n = (t) => {
        let e = Math.round((t || 0) / a.qkF);
        return (0, a.gf)(e);
      };
    },
    9259: function (t, e, i) {
      "use strict";
      i.d(e, {
        useAddTrackToPlaylist: function () {
          return o;
        },
      });
      var a = i(75441),
        n = i(93093),
        r = i(10979),
        l = i(32399),
        s = i(13534);
      let o = () => {
        let { notify: t } = (0, s.d$W)(),
          { playlist: e, fullscreenPlayer: i } = (0, s.oR4)(),
          o = (0, s.RVp)(),
          c = (0, n.W)((n) => {
            var c, d;
            let {
              withSuccessNotification: u,
              withPageRefresh: m,
              playlist: k,
              track: v,
            } = n;
            if (u) {
              let e = (0, l.tx)(v, o);
              t(
                (0, a.jsx)(r.XD, {
                  entityTitle: v.title,
                  entityVariant: e,
                  entityCoverUri:
                    null !== (d = v.coverUri) && void 0 !== d ? d : "",
                  playlist: k,
                }),
                {
                  containerId: i.modal.isOpened
                    ? s.W$x.FULLSCREEN_INFO
                    : s.W$x.INFO,
                },
              );
            }
            m &&
              k.uuid ===
                (null === (c = e.meta) || void 0 === c ? void 0 : c.uuid) &&
              e.refresh();
          }),
          d = (0, n.W)((e) => {
            let { withFailNotification: n } = e;
            n &&
              t((0, a.jsx)(r.wi, {}), {
                containerId: i.modal.isOpened
                  ? s.W$x.FULLSCREEN_ERROR
                  : s.W$x.ERROR,
              });
          });
        return (0, n.W)(async (t) => {
          var e;
          let {
              playlist: i,
              track: a,
              withSuccessNotification: n = !0,
              withFailNotification: l = !0,
              withPageRefresh: s = !0,
            } = t,
            o = await i.changePlaylist(
              (0, r.PG)({
                operation: r.aL.INSERT,
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
            o === r.pX.OK
              ? c({
                  withSuccessNotification: n,
                  withPageRefresh: s,
                  playlist: i,
                  track: a,
                })
              : d({ withFailNotification: l }),
            o
          );
        });
      };
    },
    2593: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return n;
        },
      });
      var a = i(13534);
      function n(t) {
        let { withCustomTooltip: e } = t,
          {
            settings: { isMobile: i, browserInfo: n },
          } = (0, a.oR4)();
        return !((null == n ? void 0 : n.name) === "Safari" || i) && e;
      }
    },
    6200: function (t, e, i) {
      "use strict";
      i.d(e, {
        N: function () {
          return o;
        },
      });
      var a = i(98730),
        n = i(93093),
        r = i(64353),
        l = i(90378),
        s = i(13534);
      let o = (t) => {
        let {
            track: e,
            withSavingQueryParams: i,
            entityType: o,
            onNavigate: c,
          } = t,
          { fullscreenPlayer: d, album: u, track: m } = (0, s.oR4)(),
          k = u.id === e.albumId,
          v = (0, s.PYm)(),
          p = (0, a.useSearchParams)(),
          { href: _ } = (0, s.zBm)(e.url),
          x = i ? (0, s.rDv)(_, p) : _,
          C = (0, n.W)((t) => {
            d.modal.isOpened && d.modal.close(),
              null == c || c(),
              k
                ? (null == t || t.preventDefault(),
                  v(x),
                  m.open({ trackId: e.id, albumId: e.albumId }))
                : null == t || t.stopPropagation();
          }),
          y = (0, n.W)((t) => {
            null == c || c(), null == t || t.stopPropagation();
          }),
          T = {
            entityType: o,
            isLegalRejected: e.isLegalRejected,
            isUnsafeLegal: e.isUnsafeLegal,
            entityId: e.id,
          },
          b = (0, l.$H)({ ...T, callback: C }),
          h = (0, l.$H)({ ...T, callback: y });
        return (0, r.ik)(h, b);
      };
    },
    48088: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return o;
        },
      });
      var a = i(75441),
        n = i(93093),
        r = i(10979),
        l = i(32399),
        s = i(13534);
      let o = () => {
        let { notify: t } = (0, s.d$W)(),
          { playlist: e, fullscreenPlayer: i } = (0, s.oR4)(),
          o = (0, s.RVp)(),
          c = (0, n.W)((n) => {
            var c, d;
            let {
              withSuccessNotification: u,
              withPageRefresh: m,
              playlist: k,
              track: v,
            } = n;
            if (u && v && k) {
              let e = (0, l.tx)(v, o);
              t(
                (0, a.jsx)(r.H2, {
                  entityTitle: v.title,
                  entityVariant: e,
                  entityCoverUri:
                    null !== (d = v.coverUri) && void 0 !== d ? d : "",
                  playlist: k,
                }),
                {
                  containerId: i.modal.isOpened
                    ? s.W$x.FULLSCREEN_INFO
                    : s.W$x.INFO,
                },
              );
            }
            m &&
              (null == k ? void 0 : k.uuid) ===
                (null === (c = e.meta) || void 0 === c ? void 0 : c.uuid) &&
              e.refresh();
          }),
          d = (0, n.W)((e) => {
            let { withFailNotification: n } = e;
            n &&
              t((0, a.jsx)(r.BQ, {}), {
                containerId: i.modal.isOpened
                  ? s.W$x.FULLSCREEN_ERROR
                  : s.W$x.ERROR,
              });
          });
        return (0, n.W)(async (t) => {
          let {
              playlist: e,
              track: i,
              trackIndex: a,
              withSuccessNotification: n = !0,
              withFailNotification: l = !0,
              withPageRefresh: s = !0,
            } = t,
            o = await e.changePlaylist(
              (0, r.PG)({
                operation: r.aL.DELETE,
                startPosition: a,
                endPosition: a + 1,
              }),
            );
          return (
            o === r.pX.OK
              ? c({
                  withSuccessNotification: n,
                  withPageRefresh: s,
                  playlist: e,
                  track: i,
                })
              : d({ withFailNotification: l }),
            o
          );
        });
      };
    },
    86083: function (t, e, i) {
      "use strict";
      i.d(e, {
        useRemoveTrackFromPlaylistByIndex: function () {
          return c;
        },
      });
      var a = i(75441),
        n = i(65067),
        r = i(9317),
        l = i(10979),
        s = i(13534),
        o = i(97141);
      let c = () => {
        let { playlist: t, trackIndex: e } = (0, n.useContext)(l.jK) || {},
          { notify: i } = (0, s.d$W)(),
          { playlist: c } = (0, s.oR4)(),
          { formatMessage: d } = (0, r.Z)(),
          u = (0, n.useCallback)(async () => {
            let n = !1;
            if (
              (t &&
                "number" == typeof e &&
                (await t.changePlaylist(
                  (0, l.PG)({
                    operation: l.aL.DELETE,
                    startPosition: e,
                    endPosition: e + 1,
                  }),
                )) === l.pX.OK &&
                (n = !0),
              n)
            ) {
              if (t && "number" == typeof e) {
                var r;
                t.uuid ===
                  (null === (r = c.meta) || void 0 === r ? void 0 : r.uuid) &&
                  (c.removeTracksFromItems(e, 1), c.search.setFocus());
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
    12174: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return n;
        },
      });
      var a = i(13534);
      let n = (t, e, i) => {
        let {
          settings: { isMobile: n },
        } = (0, a.oR4)();
        return !!(
          n &&
          t &&
          (((null == e ? void 0 : e.endPositionSec) && e.endPositionSec > 0) ||
            (null == e ? void 0 : e.hasEverFinished) ||
            (i && i > 0))
        );
      };
    },
    1676: function (t, e, i) {
      "use strict";
      i.d(e, {
        useTrackAboutModalTitle: function () {
          return r;
        },
      });
      var a = i(9317),
        n = i(94123);
      let r = (t) => {
        var e;
        let { formatMessage: i } = (0, a.Z)();
        return i(
          (null == t ? void 0 : t.type) === n.V.AUDIOBOOK
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
    84948: function (t, e, i) {
      "use strict";
      i.d(e, {
        R: function () {
          return n;
        },
      });
      var a = i(9317);
      let n = (t) => {
        let { track: e, withLightning: i } = t,
          { formatMessage: n } = (0, a.Z)();
        return e.isAvailable
          ? [
              e.artistsNames,
              e.title,
              e.version,
              i && n({ id: "entity-names.popular-among-users" }),
            ]
              .filter(Boolean)
              .join(" ")
          : ""
              .concat(n({ id: "extra-explicit.play-unavailable" }), " ")
              .concat(e.artistsNames, " ")
              .concat(e.title);
      };
    },
    67371: function (t, e, i) {
      "use strict";
      i.d(e, {
        useTrackDisclaimer: function () {
          return s;
        },
      });
      var a = i(65067),
        n = i(77282),
        r = i(93093),
        l = i(13534);
      let s = (t) => {
        let { track: e, callback: i, disclaimerRejectHandler: s } = t,
          {
            disclaimerModalData: o,
            modals: { disclaimerModal: c },
          } = (0, l.oR4)(),
          d = (0, a.useRef)(String((0, n.Z)())),
          u = (0, a.useRef)(!1),
          m = (0, l.uK4)().get(l.ceh);
        return (
          (0, a.useEffect)(() => {
            o.isUnsafeDisclaimerConfirmed &&
              o.id === d.current &&
              !u.current &&
              (null == i || i(), (u.current = !0));
          }, [i, o.isUnsafeDisclaimerConfirmed, o.id]),
          (0, r.W)(async (t) => {
            if (
              (null == e ? void 0 : e.isLegalRejected) ||
              (null == e ? void 0 : e.isUnsafeLegal)
            ) {
              let a = m.get(l.BUb.ExEx);
              if (
                e.isUnsafeLegal &&
                (null == a
                  ? void 0
                  : a.includes(
                      ""
                        .concat(l.coP.TRACK, "_")
                        .concat(null == e ? void 0 : e.id),
                    ))
              ) {
                null == i || i();
                return;
              }
              null == t || t.preventDefault(),
                await o.getDisclaimerData({
                  entityId: e.id,
                  entityType: l.coP.TRACK,
                  disclaimerId: null == e ? void 0 : e.modalDisclaimerId,
                }),
                e.isUnsafeLegal && o.setType(l.Gq.UNSAFE),
                s && o.setDisclaimerRejectHandler(s),
                o.setId(d.current),
                o.setEntityId(e.id),
                o.setEntityType(l.coP.TRACK),
                (u.current = !1),
                c.open();
              return;
            }
            null == i || i();
          })
        );
      };
    },
    10510: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return o;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(69756),
        l = i(68828),
        s = i.n(l);
      let o = (t) => {
        let { isDragging: e, className: i } = t;
        return (0, a.jsx)(r.Icon, {
          variant: "dragDots",
          size: "xxs",
          className: (0, n.W)(s().root, { [s().root_active]: e }, i),
          "aria-hidden": !0,
        });
      };
    },
    88594: function (t, e, i) {
      "use strict";
      i.d(e, {
        ControlsBar: function () {
          return A;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(65067),
        s = i(9317),
        o = i(15937),
        c = i(4875),
        d = i(35846),
        u = i(93093),
        m = i(69756),
        k = i(92853),
        v = i(17392),
        p = i(32399),
        _ = i(13534),
        x = i(97141),
        C = i(28421),
        y = i(7899),
        T = i(84639),
        b = i.n(T),
        h = i(11427),
        g = i.n(h);
      let f = (0, r.Pi)((t) => {
          let { track: e } = t,
            { formatMessage: i } = (0, s.Z)();
          return e.isDownloaded
            ? (0, a.jsx)(m.Icon, {
                size: "xxs",
                variant: "downloaded",
                "aria-label": i({ id: "offline.track-downloaded" }),
              })
            : e.isDownloading
              ? (0, a.jsx)(x.kQ, {
                  value: e.downloadingProgress,
                  size: 16,
                  className: g().downloadingProgress,
                  progressBarClassName: g().progress,
                })
              : null;
        }),
        A = (0, r.Pi)((t) => {
          var e;
          let {
              className: i,
              track: r,
              withLightning: T,
              ignoreDislikedStyles: h,
              onLikeClick: g,
              onDislikeClick: A,
              utmLink: N,
              withSecondaryColor: I,
              handleRemove: L,
              withDislike: j = !0,
              withTrailer: D = !0,
              likeIconSize: P = "xxs",
            } = t,
            {
              user: R,
              experiments: E,
              sonataState: { isVibeContext: S },
              trailer: B,
            } = (0, _.oR4)(),
            { formatMessage: M } = (0, s.Z)(),
            { sendLikeSearchFeedback: O } = (0, _.sAF)(),
            [U, w] = (0, l.useState)(!1),
            [G, W] = (0, l.useState)(!1),
            V = (0, _.qsr)(),
            z = (0, p.SB)(r),
            K = (0, p.KX)(r),
            F = (0, _.FTC)(),
            Z =
              E.checkExperiment(_.peG.WebNextEnableDownloadControls, "on") &&
              R.hasPlus,
            q = (0, u.W)(async () => {
              U || r.isLiked || (w(!0), null == O || O()),
                await z(),
                null == g || g(r.isLiked);
            }),
            Y = (0, u.W)(async () => {
              await K(), null == A || A(r.isDisliked);
            }),
            H = (0, u.W)((t) => {
              t.stopPropagation();
            }),
            $ = (0, u.W)((t) => {
              if ((t.stopPropagation(), V())) {
                t.preventDefault();
                return;
              }
              B.openTrackTrailer(r.id), F(c.OB.Track, r.id);
            }),
            X = (0, l.useMemo)(() => {
              if (!r.isRemoved && r.isAvailable)
                return (0, a.jsx)("div", {
                  onClick: H,
                  children: (0, a.jsx)(y.TrackContextMenu, {
                    track: r,
                    open: G,
                    onOpenChange: W,
                    placement: "bottom",
                    icon: (0, a.jsx)(m.Icon, { size: "xs", variant: "more" }),
                    size: "xs",
                    utmLink: N,
                    className: (0, n.W)(b().contextMenu, {
                      [b().contextMenu_visible]: G,
                    }),
                    handleRemove: L,
                    withTrailer: D,
                    ...(0, d.BA)(d.bG.track.TRACK_CONTEXT_MENU_BUTTON),
                  }),
                });
            }, [H, L, G, D, r, N]);
          return (0, a.jsxs)("div", {
            className: (0, n.W)(b().root, b().controls, i, {
              [b().controls_dislikedControls]: r.isDisliked,
              [b().controls_dislikedColors]: r.isDisliked && !h,
              [b().controls_disabled]: !r.isAvailable,
              [b().root_withSecondaryColor]: I,
            }),
            children: [
              T &&
                (0, a.jsx)(m.Icon, {
                  "aria-label": M({ id: "entity-names.popular-among-users" }),
                  size: "xxs",
                  className: b().lightning,
                  variant: "lightning",
                }),
              r.isUGC &&
                (0, a.jsxs)(k.u, {
                  placement: "bottom",
                  offsetOptions: 8,
                  children: [
                    (0, a.jsx)(m.Icon, {
                      "aria-label": M({ id: "ugc.track-description" }),
                      size: "xxs",
                      className: b().ugcIcon,
                      variant: "eye_crossed",
                      ...(0, d.BA)(d.bG.track.UGC_TRACK_ICON),
                    }),
                    (0, a.jsx)(k._v, {
                      children: (0, a.jsx)(o.Z, {
                        id: "ugc.track-description",
                      }),
                    }),
                  ],
                }),
              Z &&
                (0, a.jsx)("div", {
                  className: (0, n.W)(b().item, b().downloadIcon),
                  children: (0, a.jsx)(f, { track: r }),
                }),
              L &&
                !S &&
                (0, a.jsx)(p.xZ, {
                  size: "xs",
                  iconSize: "xxs",
                  className: (0, n.W)(b().item, b().removeButton),
                  onClick: L,
                }),
              !r.isRemoved &&
                r.isAvailable &&
                (0, a.jsx)(x.FM, {
                  fallback: (0, a.jsx)(x.dJ, {
                    size: "xs",
                    iconSize: P,
                    className: (0, n.W)(b().item, b().likeIcon),
                    isLiked: r.isLiked,
                    onClick: q,
                    disabled: !R.isAuthorized,
                  }),
                }),
              !r.isRemoved &&
                r.isAvailable &&
                j &&
                (0, a.jsx)(x.FM, {
                  fallback: (0, a.jsx)(x.Q1, {
                    size: "xs",
                    iconSize: "xxs",
                    className: (0, n.W)(b().item, b().dislikeIcon),
                    isDisliked: r.isDisliked,
                    onClick: Y,
                  }),
                }),
              (null === (e = r.trailer) || void 0 === e
                ? void 0
                : e.isAvailable) &&
                r.isAvailable &&
                (0, a.jsx)(x.FM, {
                  fallback: (0, a.jsx)(x.eP, {
                    className: (0, n.W)(b().item, b().trailerIcon),
                    iconSize: "xs",
                    variant: "text",
                    onClick: $,
                    withRipple: !1,
                  }),
                }),
              (0, a.jsxs)("div", {
                className: (0, n.W)(b().item, b().contextMenuWrapper),
                children: [
                  "number" == typeof r.durationMs &&
                    (0, a.jsx)(v.Caption, {
                      variant: "span",
                      className: (0, n.W)(b().duration, {
                        [b().duration_hidden]: G,
                      }),
                      type: "entity",
                      size: "m",
                      weight: "medium",
                      ...(0, d.BA)(d.bG.track.TRACK_DURATION),
                      children: (0, C.U)(r.durationMs),
                    }),
                  X,
                ],
              }),
            ],
          });
        });
    },
    30739: function (t, e, i) {
      "use strict";
      i.d(e, {
        AudiobookMeta: function () {
          return N;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(65067),
        s = i(9317),
        o = i(15937),
        c = i(35846),
        d = i(93093),
        u = i(92853),
        m = i(17392),
        k = i(64353),
        v = i(90378),
        p = i(32399),
        _ = i(13534),
        x = i(97141),
        C = i(40510),
        y = i(2593),
        T = i(6200),
        b = i(12174),
        h = i(49626),
        g = i.n(h),
        f = i(81910),
        A = i.n(f);
      let N = (0, r.Pi)((t) => {
        var e, i, r, h, f, N, I;
        let {
            track: L,
            className: j,
            withAuthor: D = !1,
            withSecondaryColor: P = !1,
            withListeningProgress: R = !1,
            captionSize: E = "m",
            explicitSize: S = "xs",
            withExplicitMark: B = !0,
            titleContainerClassName: M,
            textClassName: O,
            playContextParams: U,
            withTimeLeftText: w = !0,
            ignoreDislikedStyles: G,
            withBookLink: W,
            albumArtists: V,
            withCustomTooltip: z = !0,
            hasLineClamp: K = !0,
            withSavingQueryParams: F,
            beforeTitle: Z,
            afterTitle: q,
            withContextMenuArtists: Y,
            withArtistLink: H = !0,
          } = t,
          { fullscreenPlayer: $, sonataState: X } = (0, _.oR4)(),
          { formatMessage: Q } = (0, s.Z)(),
          J = (0, y.T)({ withCustomTooltip: z }),
          tt = (0, _.s0h)(L.albumUrl),
          te = (0, v.$H)({
            entityType: _.coP.AUDIOBOOK,
            entityId:
              null === (e = L.mainAlbum) || void 0 === e ? void 0 : e.id,
            disclaimerId: L.modalDisclaimerId,
            isLegalRejected: !!(null === (i = L.mainAlbum) || void 0 === i
              ? void 0
              : i.isLegalRejected),
            isUnsafeLegal: !!(null === (r = L.mainAlbum) || void 0 === r
              ? void 0
              : r.isUnsafeLegal),
            callback: tt,
          }),
          ti = (0, d.W)((t) => {
            $.modal.isOpened && $.modal.close(), te(t);
          }),
          ta = (0, T.N)({
            track: L,
            withSavingQueryParams: F,
            entityType: _.coP.AUDIOBOOK,
          }),
          tn = !!(
            R &&
            U &&
            L.shouldRememberPosition &&
            L.streamProgress &&
            L.durationMs
          ),
          tr =
            L.id ===
              (null === (h = X.entityMeta) || void 0 === h ? void 0 : h.id) &&
            (null === (N = X.entityMeta) || void 0 === N
              ? void 0
              : null === (f = N.streamProgress) || void 0 === f
                ? void 0
                : f.endPositionSec),
          tl = (0, b.D)(tn, L.streamProgress, tr),
          ts = (0, l.useMemo)(
            () => (0, C.p)(L.artists, V),
            [L.artists, V, L.id],
          ),
          to = ts.length > 0 && D && !tl,
          tc = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(u.u, {
                enabled: J,
                offsetOptions: 4,
                placement: "top",
                text: L.title,
                hoverSettings: _.cHI,
                children: (0, a.jsx)(m.Caption, {
                  className: g().title,
                  type: "entity",
                  size: E,
                  variant: "span",
                  title: J ? void 0 : L.title,
                  ...t,
                  children: L.title,
                }),
              }),
            [J, E, L.title],
          ),
          td = (0, l.useMemo)(() => {
            var t, e;
            return L.isRemoved
              ? (0, a.jsx)(o.Z, { id: "track-title.audiobook-not-found" })
              : L.hasAlbumLink && W
                ? (0, a.jsx)(x.rU, {
                    "aria-label": Q(
                      { id: "entity-names.audiobook-name" },
                      {
                        bookName:
                          null === (t = L.mainAlbum) || void 0 === t
                            ? void 0
                            : t.title,
                      },
                    ),
                    className: g().albumLink,
                    href: L.albumUrl,
                    title: J ? void 0 : L.title,
                    onClick: ti,
                    ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                    children: tc(),
                  })
                : L.hasTrackLink
                  ? (0, a.jsx)(x.rU, {
                      "aria-label": Q(
                        { id: "entity-names.audiobook-name" },
                        {
                          bookName:
                            null === (e = L.mainAlbum) || void 0 === e
                              ? void 0
                              : e.title,
                        },
                      ),
                      className: g().albumLink,
                      href: L.url,
                      title: J ? void 0 : L.title,
                      onClick: ta,
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: tc(),
                    })
                  : tc((0, c.BA)(c.bG.track.TRACK_TITLE));
          }, [
            L.isRemoved,
            L.hasAlbumLink,
            L.hasTrackLink,
            null === (I = L.mainAlbum) || void 0 === I ? void 0 : I.title,
            L.albumUrl,
            L.title,
            L.url,
            W,
            tc,
            Q,
            J,
            ti,
            ta,
          ]),
          tu = (0, l.useMemo)(() => (K ? 1 : 0), [K]);
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            g().root,
            {
              [g().root_disabled]: !L.isAvailable,
              [g().root_disliked]: L.isDisliked && !G,
              [g().root_withSecondaryColor]: P,
            },
            j,
          ),
          children: (0, a.jsxs)("div", {
            className: (0, n.W)(g().metaContainer, A().metaContainer, {
              [A().metaContainer_oneLine]: !D,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(g().titleContainer, M, A().titleContainer),
                children: [
                  (0, a.jsxs)(m.Caption, {
                    className: (0, n.W)(g().text, O),
                    type: "entity",
                    size: E,
                    variant: "div",
                    lineClamp: 1,
                    children: [
                      Z,
                      td,
                      !L.isRemoved &&
                        L.version &&
                        (0, a.jsxs)(m.Caption, {
                          className: (0, n.W)(g().text, g().version),
                          type: "entity",
                          size: E,
                          weight: "medium",
                          variant: "span",
                          title: J ? void 0 : L.version,
                          children: ["\xa0", L.version],
                        }),
                    ],
                  }),
                  L.explicitDisclaimer &&
                    B &&
                    (0, a.jsx)(x.$i, {
                      containerClassName: g().explicitMarkContainer,
                      getDescriptionTexts: L.getDescriptionTexts,
                      variant: L.explicitDisclaimer,
                      className: g().explicitMark,
                      size: S,
                      trackId: L.id,
                    }),
                  q,
                ],
              }),
              to &&
                (0, a.jsx)(m.Caption, {
                  type: "entity",
                  size: E,
                  variant: "div",
                  lineClamp: 1,
                  className: (0, n.W)(g().text, A().artists, O),
                  children: (0, a.jsx)(k.jO, {
                    className: (0, n.W)(g().text, { [g().artists]: K }, O),
                    linkClassName: (0, n.W)(g().text, g().link),
                    captionClassName: (0, n.W)(g().text, g().artistCaption),
                    artists: ts,
                    withLink: L.isNonUserGenerated && H,
                    lineClamp: tu,
                    captionSize: E,
                    withContextMenu: Y,
                  }),
                }),
              tn &&
                L.streamProgress &&
                U &&
                (0, a.jsx)(p.DR, {
                  className: (0, n.W)(A().progress, {
                    [A().progress_withPreviousInfo]: to,
                    [A().progress_disabled]: !L.isAvailable || L.isDisliked,
                  }),
                  id: L.id,
                  albumId: L.albumId,
                  streamProgress: L.streamProgress,
                  durationMs: L.durationMs || 0,
                  playContextParams: U,
                  withTimeLeftText: w,
                }),
            ],
          }),
        });
      });
    },
    48943: function (t, e, i) {
      "use strict";
      i.d(e, {
        PodcastMeta: function () {
          return I;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(98730),
        s = i(65067),
        o = i(9317),
        c = i(15937),
        d = i(26406),
        u = i(35846),
        m = i(93093),
        k = i(14218),
        v = i(92853),
        p = i(17392),
        _ = i(90378),
        x = i(32399),
        C = i(13534),
        y = i(97141),
        T = i(2593),
        b = i(6200),
        h = i(12174),
        g = i(49626),
        f = i.n(g),
        A = i(17817),
        N = i.n(A);
      let I = (0, r.Pi)((t) => {
        var e, i, r, g, A, I;
        let {
            track: L,
            className: j,
            withPodcastName: D = !1,
            withDate: P = !0,
            withSecondaryColor: R = !1,
            withListeningProgress: E = !1,
            captionSize: S = "m",
            explicitSize: B = "xs",
            withExplicitMark: M = !0,
            titleContainerClassName: O,
            textClassName: U,
            playContextParams: w,
            withTimeLeftText: G = !0,
            ignoreDislikedStyles: W,
            withCustomTooltip: V = !0,
            withSavingQueryParams: z,
            beforeTitle: K,
            afterTitle: F,
            titleLineClamp: Z = 1,
            podcastMetaClassName: q,
            progressClassName: Y,
            withAlbumTitleLink: H = !0,
          } = t,
          { fullscreenPlayer: $, sonataState: X } = (0, C.oR4)(),
          { formatMessage: Q } = (0, o.Z)(),
          J = (0, T.T)({ withCustomTooltip: V }),
          tt = (0, l.useSearchParams)(),
          { href: te } = (0, C.zBm)(z ? (0, C.rDv)(L.url, tt) : L.url),
          ti = L.pubDate ? new Date(L.pubDate) : new Date(),
          ta = (0, C.u9c)(ti),
          tn = !1,
          tr = (0, C.s0h)(L.albumUrl),
          tl = (0, s.useMemo)(() => {
            var t;
            let e = Q(
              { id: "entity-names.podcast-name" },
              { podcastName: L.title },
            );
            return ""
              .concat(e, " ")
              .concat(null !== (t = L.version) && void 0 !== t ? t : "");
          }, [Q, L.title, L.version]),
          ts = !!(
            E &&
            w &&
            L.shouldRememberPosition &&
            L.streamProgress &&
            L.durationMs
          ),
          to =
            L.id ===
              (null === (e = X.entityMeta) || void 0 === e ? void 0 : e.id) &&
            (null === (r = X.entityMeta) || void 0 === r
              ? void 0
              : null === (i = r.streamProgress) || void 0 === i
                ? void 0
                : i.endPositionSec),
          tc = (0, h.D)(ts, L.streamProgress, to),
          td = L.mainAlbum && D && !tc,
          tu = L.pubDate && P && !tc,
          tm = (0, _.$H)({
            entityType: C.coP.PODCAST,
            entityId:
              null === (g = L.mainAlbum) || void 0 === g ? void 0 : g.id,
            disclaimerId: L.modalDisclaimerId,
            isLegalRejected: !!(null === (A = L.mainAlbum) || void 0 === A
              ? void 0
              : A.isLegalRejected),
            isUnsafeLegal: !!(null === (I = L.mainAlbum) || void 0 === I
              ? void 0
              : I.isUnsafeLegal),
            callback: tr,
          }),
          tk = (0, m.W)((t) => {
            $.modal.isOpened && $.modal.close(), tm(t);
          }),
          tv = (0, b.N)({
            track: L,
            withSavingQueryParams: z,
            entityType: C.coP.PODCAST,
          }),
          tp = (0, s.useCallback)(() => {
            switch (ta) {
              case C.UvK.TODAY:
                return (0, a.jsx)(c.Z, { id: "interface-actions.date-today" });
              case C.UvK.YESTERDAY:
                return (0, a.jsx)(c.Z, {
                  id: "interface-actions.date-yesterday",
                });
              case C.UvK.DATE_WITH_YEAR:
                return (0, a.jsx)(d.Ji, {
                  value: L.pubDate,
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
              default:
                return (0, a.jsx)(d.Ji, {
                  value: L.pubDate,
                  month: "long",
                  day: "numeric",
                });
            }
          }, [L.pubDate, ta]);
        L.pubDate && P && (tn = [C.UvK.TODAY, C.UvK.YESTERDAY].includes(ta));
        let t_ = (0, s.useCallback)(
            (t) =>
              (0, a.jsx)(v.u, {
                enabled: J,
                offsetOptions: 4,
                placement: "top",
                text: L.title,
                hoverSettings: C.cHI,
                children: (0, a.jsx)(p.Caption, {
                  className: f().title,
                  type: "entity",
                  size: S,
                  variant: "span",
                  title: J ? void 0 : L.title,
                  ...t,
                  children: L.title,
                }),
              }),
            [J, S, L.title],
          ),
          tx = (0, s.useMemo)(
            () =>
              L.isRemoved
                ? (0, a.jsx)(v.u, {
                    enabled: J,
                    offsetOptions: 4,
                    placement: "top",
                    text: Q({ id: "track-title.podcast-not-found" }),
                    hoverSettings: C.cHI,
                    children: (0, a.jsx)("span", {
                      children: (0, a.jsx)(c.Z, {
                        id: "track-title.podcast-not-found",
                      }),
                    }),
                  })
                : L.hasTrackLink
                  ? (0, a.jsx)(y.rU, {
                      onClick: tv,
                      className: f().albumLink,
                      href: te,
                      "aria-label": tl,
                      title: J ? void 0 : L.title,
                      ...(0, u.BA)(u.bG.track.TRACK_TITLE),
                      children: t_(),
                    })
                  : t_((0, u.BA)(u.bG.track.TRACK_TITLE)),
            [L.isRemoved, L.hasTrackLink, L.title, t_, J, Q, tv, te, tl],
          ),
          tC = (0, k.V)(() => {
            if (!td) return;
            let t = (0, a.jsx)(v.u, {
              enabled: J,
              offsetOptions: 4,
              placement: "top",
              text: L.mainAlbum.title,
              hoverSettings: C.cHI,
              children: (0, a.jsx)(p.Caption, {
                variant: "span",
                type: "entity",
                size: S,
                className: f().albumTitle,
                children: L.mainAlbum.title,
              }),
            });
            return H
              ? (0, a.jsx)(y.rU, {
                  "aria-label": Q(
                    { id: "entity-names.podcast-name" },
                    { podcastName: L.mainAlbum.title },
                  ),
                  className: f().link,
                  href: L.albumUrl,
                  title: J ? void 0 : L.mainAlbum.title,
                  onClick: tk,
                  children: t,
                })
              : t;
          });
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            f().root,
            {
              [f().root_disabled]: !L.isAvailable,
              [f().root_disliked]: L.isDisliked && !W,
              [f().root_withSecondaryColor]: R,
            },
            j,
          ),
          children: (0, a.jsxs)("div", {
            className: (0, n.W)(f().metaContainer, N().podcastMetaContainer, q),
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(
                  f().titleContainer,
                  O,
                  N().podcastTitleContainer,
                ),
                children: [
                  (0, a.jsxs)(p.Caption, {
                    className: (0, n.W)(f().text, U),
                    type: "entity",
                    size: S,
                    variant: "div",
                    lineClamp: Z,
                    children: [
                      K,
                      tx,
                      !L.isRemoved &&
                        L.version &&
                        (0, a.jsxs)(p.Caption, {
                          className: (0, n.W)(f().text, f().version),
                          type: "entity",
                          size: S,
                          weight: "medium",
                          variant: "span",
                          title: J ? void 0 : L.version,
                          children: ["\xa0", L.version],
                        }),
                    ],
                  }),
                  L.explicitDisclaimer &&
                    M &&
                    (0, a.jsx)(y.$i, {
                      containerClassName: f().explicitMarkContainer,
                      getDescriptionTexts: L.getDescriptionTexts,
                      variant: L.explicitDisclaimer,
                      className: f().explicitMark,
                      size: B,
                      trackId: L.id,
                    }),
                  F,
                ],
              }),
              (td || tu) &&
                (0, a.jsxs)(p.Caption, {
                  type: "entity",
                  size: S,
                  variant: "div",
                  lineClamp: 1,
                  className: (0, n.W)(f().text, N().podcastName, U),
                  children: [
                    tC,
                    tu &&
                      (0, a.jsx)(p.Caption, {
                        variant: "span",
                        type: "entity",
                        size: S,
                        className: (0, n.W)({
                          [N().dateWithName]: td,
                          [N().soonDate]: tn,
                          [N().dateDisabled]: !L.isAvailable,
                          [N().dateDisliked]: L.isDisliked && !W,
                        }),
                        children: tp(),
                      }),
                  ],
                }),
              ts &&
                L.streamProgress &&
                w &&
                (0, a.jsx)(x.DR, {
                  className: (0, n.W)(N().progress, Y, {
                    [N().progress_withPreviousInfo]: td || tu,
                    [N().progress_disabled]: !L.isAvailable || L.isDisliked,
                  }),
                  id: L.id,
                  albumId: L.albumId,
                  streamProgress: L.streamProgress,
                  durationMs: L.durationMs || 0,
                  playContextParams: w,
                  withTimeLeftText: G,
                }),
            ],
          }),
        });
      });
    },
    43406: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackMeta: function () {
          return g;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(98730),
        s = i(65067),
        o = i(9317),
        c = i(15937),
        d = i(35846),
        u = i(93093),
        m = i(92853),
        k = i(17392),
        v = i(64353),
        p = i(13534),
        _ = i(97141),
        x = i(40510),
        C = i(2593),
        y = i(6200),
        T = i(67371),
        b = i(49626),
        h = i.n(b);
      let g = (0, r.Pi)((t) => {
        let {
            className: e,
            titleContainerClassName: i,
            track: r,
            albumArtists: b,
            withExplicitMark: g = !0,
            withSecondaryColor: f,
            captionSize: A = "m",
            explicitSize: N = "xxxs",
            withAlbumLink: I,
            withAllArtistsTitle: L,
            textClassName: j,
            artistsClassName: D,
            ignoreDislikedStyles: P,
            withCustomTooltip: R = !0,
            hasLineClamp: E = !0,
            withSavingQueryParams: S,
            beforeTitle: B,
            withArtistLink: M = !0,
            withTrackLink: O = !0,
            afterTitle: U,
            withContextMenuArtists: w,
          } = t,
          { formatMessage: G } = (0, o.Z)(),
          { sendNavigateSearchFeedback: W } = (0, p.sAF)(),
          { fullscreenPlayer: V } = (0, p.oR4)(),
          z = (0, C.T)({ withCustomTooltip: R }),
          K = (0, l.useSearchParams)(),
          F = S ? (0, p.rDv)(r.url, K) : r.url,
          Z = (0, p.s0h)(r.albumUrl),
          q = (0, s.useMemo)(() => {
            var t;
            let e = G(
              { id: "entity-names.track-name" },
              { trackName: r.title },
            );
            return ""
              .concat(e, " ")
              .concat(null !== (t = r.version) && void 0 !== t ? t : "");
          }, [G, r.title, r.version]),
          Y = (0, T.useTrackDisclaimer)({ track: r, callback: Z }),
          H = (0, u.W)((t) => {
            V.modal.isOpened && V.modal.close(), Y(t);
          }),
          $ = (0, y.N)({
            track: r,
            onNavigate: W,
            withSavingQueryParams: S,
            entityType: p.coP.TRACK,
          }),
          X = (0, s.useCallback)(
            (t) => {
              let e = ""
                .concat(r.title, " ")
                .concat(!r.isRemoved && r.version ? r.version : "");
              return (0, a.jsx)(m.u, {
                enabled: z,
                offsetOptions: 4,
                placement: "top",
                text: e,
                hoverSettings: p.cHI,
                children: (0, a.jsx)(k.Caption, {
                  className: (0, n.W)(h().text, h().title),
                  type: "entity",
                  size: A,
                  weight: "medium",
                  variant: "span",
                  ...t,
                  children: r.title,
                }),
              });
            },
            [z, A, r.isRemoved, r.title, r.version],
          ),
          Q = (0, s.useMemo)(() => {
            let t = ""
              .concat(r.title, " ")
              .concat(!r.isRemoved && r.version ? r.version : "");
            return r.isRemoved
              ? (0, a.jsx)(m.u, {
                  enabled: z,
                  offsetOptions: 4,
                  placement: "top",
                  text: G({ id: "track-title.error-not-found" }),
                  hoverSettings: p.cHI,
                  children: (0, a.jsx)(k.Caption, {
                    className: (0, n.W)(h().text, h().title),
                    type: "entity",
                    size: A,
                    weight: "medium",
                    variant: "span",
                    title: z
                      ? void 0
                      : G({ id: "track-title.error-not-found" }),
                    children: (0, a.jsx)(c.Z, {
                      id: "track-title.error-not-found",
                    }),
                  }),
                })
              : r.hasAlbumLink && I
                ? (0, a.jsx)(_.rU, {
                    onClick: H,
                    className: h().albumLink,
                    href: r.albumUrl,
                    "aria-label": q,
                    title: z ? void 0 : t,
                    ...(0, d.BA)(d.bG.track.TRACK_TITLE),
                    children: X(),
                  })
                : r.hasTrackLink && O
                  ? (0, a.jsx)(_.rU, {
                      onClick: $,
                      className: h().albumLink,
                      href: F,
                      "aria-label": q,
                      title: z ? void 0 : t,
                      ...(0, d.BA)(d.bG.track.TRACK_TITLE),
                      children: X(),
                    })
                  : X((0, d.BA)(d.bG.track.TRACK_TITLE));
          }, [
            r.title,
            r.isRemoved,
            r.version,
            r.hasAlbumLink,
            r.hasTrackLink,
            r.albumUrl,
            I,
            X,
            z,
            G,
            A,
            H,
            q,
            $,
            F,
            O,
          ]),
          J = (0, x.p)(r.artists, b),
          tt = (0, s.useMemo)(() => (E ? 1 : 0), [E]);
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            h().root,
            {
              [h().root_disabled]: !r.isAvailable,
              [h().root_disliked]: r.isDisliked && !P,
              [h().root_withSecondaryColor]: f,
            },
            e,
          ),
          children: (0, a.jsxs)("div", {
            className: h().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(
                  h().titleContainer,
                  { [h().titleContainer_withVersion]: r.version },
                  i,
                ),
                children: [
                  (0, a.jsxs)(k.Caption, {
                    className: (0, n.W)(h().text, j),
                    type: "entity",
                    size: A,
                    weight: "medium",
                    variant: "div",
                    lineClamp: 1,
                    children: [
                      B,
                      Q,
                      !r.isRemoved &&
                        r.version &&
                        (0, a.jsxs)(k.Caption, {
                          className: (0, n.W)(h().text, h().version),
                          type: "entity",
                          size: A,
                          weight: "medium",
                          variant: "span",
                          title: z ? void 0 : r.version,
                          children: ["\xa0", r.version],
                        }),
                    ],
                  }),
                  r.explicitDisclaimer &&
                    g &&
                    (0, a.jsx)(_.$i, {
                      containerClassName: h().explicitMarkContainer,
                      getDescriptionTexts: r.getDescriptionTexts,
                      size: N,
                      variant: r.explicitDisclaimer,
                      className: h().explicitMark,
                      trackId: r.id,
                    }),
                  U,
                ],
              }),
              J.length > 0 &&
                (0, a.jsx)(v.jO, {
                  className: (0, n.W)(h().text, { [h().artists]: E }, D, j),
                  withAllArtistsTitle: L,
                  linkClassName: (0, n.W)(h().text, h().link),
                  captionClassName: (0, n.W)(h().text, h().artistCaption),
                  artists: J,
                  withLink: r.isNonUserGenerated && M,
                  lineClamp: tt,
                  captionSize: A,
                  withContextMenu: w,
                }),
            ],
          }),
        });
      });
    },
    15343: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return d;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(17392),
        s = i(97141),
        o = i(96066),
        c = i.n(o);
      let d = (0, r.Pi)((t) => {
        let {
          className: e,
          track: i,
          position: r,
          onPlayButtonClick: o,
          isPlaying: d,
          isCurrent: u,
          withDislikeStyles: m = !0,
        } = t;
        return (0, a.jsxs)("div", {
          className: (0, n.W)(e, c().root, {
            [c().root_disabled]: !i.isAvailable && !i.hasModalAccess,
            [c().root_playing]: d,
            [c().root_disliked]: i.isDisliked && m,
            [c().root_current]: u,
          }),
          children: [
            (i.isAvailable || i.hasModalAccess) &&
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
            r &&
              (0, a.jsx)(l.Caption, {
                variant: "div",
                className: c().position,
                weight: "normal",
                type: "entity",
                size: "m",
                children: r,
              }),
          ],
        });
      });
    },
    7899: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackContextMenu: function () {
          return td;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(37285),
        l = i(62569),
        s = i(65067),
        o = i(9317),
        c = i(15937),
        d = i(4875),
        u = i(35846),
        m = i(44122),
        k = i(67802),
        v = i(93093),
        p = i(69756),
        _ = i(27376),
        x = i(73447),
        C = i(14924),
        y = i(50705),
        T = i(32399),
        b = i(13534),
        h = i(97141),
        g = i(86083),
        f = i(1676);
      let A = (0, l.Pi)((t) => {
        let { track: e } = t,
          {
            modals: { ugcTrackEditModal: i },
          } = (0, b.oR4)(),
          n = (0, s.useCallback)(() => {
            i.open(e);
          }, [e, i]);
        return (0, a.jsx)(_.sN, {
          onClick: n,
          icon: (0, a.jsx)(p.Icon, { variant: "edit", size: "xxs" }),
          ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_UGC_EDIT_BUTTON),
          children: (0, a.jsx)(c.Z, { id: "interface-actions.edit" }),
        });
      });
      var N = i(64353),
        I = i(88388),
        L = i.n(I);
      let j = (0, l.Pi)((t) => {
        let { className: e, artists: i, artistId: n } = t,
          {
            fullscreenPlayer: r,
            settings: { isMobile: l },
          } = (0, b.oR4)(),
          { formatMessage: s } = (0, o.Z)(),
          d = (0, b.s0h)("/artist/".concat(n)),
          m = i.length > 1,
          k = (0, v.W)(() => {
            d(), r.modal.close();
          });
        return m
          ? (0, a.jsx)(_.v2, {
              isMobile: l,
              icon: (0, a.jsx)(p.Icon, { variant: "artist", size: "xxs" }),
              label: s({ id: "interface-actions.navigate-to-artists" }),
              ariaLabel: s({ id: "interface-actions.navigate-to-artists" }),
              ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST),
              children: i.map((t) => (0, a.jsx)(N.q3, { artist: t }, t.id)),
            })
          : (0, a.jsx)(_.sN, {
              className: e,
              onClick: k,
              icon: (0, a.jsx)(p.Icon, {
                className: L().navigateToAlbumIcon,
                variant: "artist",
                size: "xxs",
              }),
              children: (0, a.jsx)(c.Z, {
                id: "interface-actions.navigate-to-artist",
              }),
            });
      });
      var D = i(98730),
        P = i(60989),
        R = i(10979),
        E = i(9259);
      let S = (t) => {
        let { createPlaylist: e, fullscreenPlayer: i } = (0, b.oR4)(),
          { notify: n } = (0, b.d$W)(),
          r = (0, D.useRouter)(),
          { formatMessage: l } = (0, o.Z)(),
          s = (0, E.useAddTrackToPlaylist)(),
          c = (0, v.W)(async (t) => {
            var i;
            if (
              (await e.create({
                title: l({ id: "entity-names.new-playlist" }),
                visibility: P.w.PUBLIC,
              }),
              !(null == e
                ? void 0
                : null === (i = e.meta) || void 0 === i
                  ? void 0
                  : i.uuid))
            )
              return null;
            if (
              (await s({
                playlist: e.meta,
                track: t,
                withPageRefresh: !1,
                withFailNotification: !1,
                withSuccessNotification: !1,
              })) === R.pX.OK
            ) {
              let t = (0, b.SZ_)("/playlists/".concat(e.meta.uuid));
              return e.reset(), t;
            }
            return null;
          });
        return (0, v.W)(async () => {
          let e = await c(t);
          e
            ? (i.modal.isOpened && i.modal.close(), r.push(e))
            : n((0, a.jsx)(R.wi, {}), {
                containerId: i.modal.isOpened
                  ? b.W$x.FULLSCREEN_ERROR
                  : b.W$x.ERROR,
              });
        });
      };
      var B = i(20184),
        M = i(14218),
        O = i(17392);
      let U = (t, e) => {
        var i, a;
        let n = -1;
        return (
          (null === (i = t.tracks) || void 0 === i ? void 0 : i.length) &&
            (n =
              null === (a = t.tracks) || void 0 === a
                ? void 0
                : a.findIndex((t) =>
                    t.albumId
                      ? String(t.id) === e.id && t.albumId === e.albumId
                      : String(t.id) === e.id,
                  )),
          { isTrackInPlaylist: n > -1, trackIndexInPlaylist: n }
        );
      };
      var w = i(48088),
        G = i(14742),
        W = i.n(G);
      let V = (t) => {
        let { playlist: e, track: i, autoFocus: n } = t,
          { formatMessage: r } = (0, o.Z)(),
          l = (0, E.useAddTrackToPlaylist)(),
          c = (0, w.B)(),
          { isTrackInPlaylist: d, trackIndexInPlaylist: u } = U(e, i),
          m = (0, s.useCallback)(() => {
            d
              ? c({ playlist: e, track: i, trackIndex: u })
              : l({ playlist: e, track: i });
          }, [l, c, e, i, u, d]);
        return (0, a.jsxs)(_.sN, {
          autoFocus: n,
          className: W().root,
          onClick: m,
          children: [
            (0, a.jsx)(O.Caption, {
              variant: "div",
              lineClamp: 1,
              children: e.title,
            }),
            d &&
              (0, a.jsx)(p.Icon, {
                className: W().icon,
                size: "xxs",
                variant: "check",
                "aria-label": r({ id: "entity-names.track-in-playlist" }),
              }),
          ],
        });
      };
      var z = i(28676),
        K = i(55182),
        F = i.n(K);
      let Z = (t) => {
          let { forwardRef: e, className: i, ...n } = t;
          return (0, a.jsx)(_.sN, {
            className: i,
            forwardRef: e,
            ...n,
            children: (0, a.jsx)(z.Shimmer, {
              isActive: !0,
              className: F().shimmer,
            }),
          });
        },
        q = (0, s.forwardRef)((t, e) => {
          let { ...i } = t;
          return (0, a.jsx)(Z, { ...i, forwardRef: e });
        });
      var Y = i(92060),
        H = i.n(Y);
      let $ = "EndlessFeed",
        X = (0, l.Pi)((t) => {
          var e, i, r, l, d;
          let { track: u } = t,
            { user: m, contextMenuPlaylists: k } = (0, b.oR4)(),
            { formatMessage: x } = (0, o.Z)(),
            C = (0, T.SB)(u),
            y = (0, s.useRef)(null),
            { isIntersecting: h } =
              null !==
                (r = (0, B.S1)([y], { preflightCheck: !1 }, k.isLoading)[$]) &&
              void 0 !== r
                ? r
                : {},
            g = Math.ceil(
              (null !==
                (l =
                  null === (e = k.pager) || void 0 === e ? void 0 : e.total) &&
              void 0 !== l
                ? l
                : 0) / 20,
            ),
            f =
              null !==
                (d =
                  null === (i = k.pager) || void 0 === i ? void 0 : i.page) &&
              void 0 !== d
                ? d
                : 0,
            A = (0, v.W)((t) => {
              m.account.data.uid &&
                k.getData({
                  userId: m.account.data.uid,
                  page: t,
                  pageSize: 20,
                });
            });
          (0, s.useEffect)(() => {
            h && A(f + 1);
          }, [h, A]);
          let N = (0, s.useMemo)(() => {
              if (!u.isTrackNonMusic && k.isResolved)
                return (0, a.jsxs)(_.sN, {
                  className: H().favouritesPlaylistItem,
                  onClick: C,
                  children: [
                    (0, a.jsx)(c.Z, { id: "entity-names.liked-playlist" }),
                    u.isLiked &&
                      (0, a.jsx)(p.Icon, {
                        className: H().icon,
                        size: "xxs",
                        variant: "check",
                        "aria-label": x({
                          id: "entity-names.track-in-playlist",
                        }),
                      }),
                  ],
                });
            }, [k.isResolved, C, u, x]),
            I = (0, M.V)(() => {
              let t = k.items.filter((t) => null !== t);
              if (0 !== t.length)
                return t.map((t, e) => {
                  if (t.kind === R.eX.LIKE) return;
                  let i =
                    f + 1 === g && e === k.items.length - (k.items.length % 20);
                  return (0, a.jsx)(
                    V,
                    { autoFocus: i, track: u, playlist: t },
                    t.uuid,
                  );
                });
            });
          return (0, a.jsx)("div", {
            className: H().root,
            children: (0, a.jsxs)("div", {
              className: H().listPlaylist,
              children: [
                N,
                I,
                !k.isResolved &&
                  Array.from({ length: 10 }, (t, e) => (0, a.jsx)(q, {}, e)),
                (0, a.jsx)(q, {
                  className: (0, n.W)({ [H().shimmerEndItem]: f + 1 === g }),
                  ref: y,
                  "data-intersection-property-id": $,
                }),
              ],
            }),
          });
        });
      var Q = i(70463),
        J = i.n(Q);
      let tt = (0, l.Pi)((t) => {
        let { track: e } = t,
          { user: i, contextMenuPlaylists: n } = (0, b.oR4)(),
          r = S(e),
          { formatMessage: l } = (0, o.Z)(),
          d = (0, s.useCallback)(async () => {
            i.account.data.uid &&
              (await n.getData({
                userId: i.account.data.uid,
                page: 0,
                pageSize: 20,
              }));
          }, [n, i.account.data.uid]);
        return (
          (0, s.useEffect)(
            () => () => {
              n.reset();
            },
            [n],
          ),
          (0, a.jsxs)(_.v2, {
            offsetOptions: 3,
            onShow: d,
            icon: (0, a.jsx)(p.Icon, { variant: "addToPlaylist", size: "xxs" }),
            label: l({ id: "playlist-actions.add-track-to-playlist" }),
            ariaLabel: l({ id: "playlist-actions.add-track-to-playlist" }),
            disabled: !i.isAuthorized,
            menuClassName: J().menu,
            listClassName: J().listMenu,
            ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON),
            children: [
              (0, a.jsx)(_.sN, {
                onClick: r,
                icon: (0, a.jsx)(p.Icon, { variant: "add", size: "xxs" }),
                children: (0, a.jsx)(c.Z, {
                  id: "playlist-actions.create-playlist",
                }),
              }),
              (0, a.jsx)(X, { track: e }),
            ],
          })
        );
      });
      var te = i(77959),
        ti = i(15186),
        ta = i(19684),
        tn = i(48125),
        tr = i.n(tn);
      let tl = (0, l.Pi)((t) => {
        let { track: e } = t,
          {
            slam: { isOfflineModeEnabled: i },
          } = (0, b.oR4)(),
          n = (0, b.h1d)(),
          r = (0, ta.s)(),
          l = (0, b.R$C)(),
          o = (0, s.useCallback)(() => {
            if (e.isDownloaded) {
              null == n || n.deleteTrack(e.entityId);
              let t =
                null == l
                  ? void 0
                  : l.state.queueState.entityList.value.findIndex((t) => {
                      let { entity: i } = t;
                      if ((0, te.O)(i)) {
                        var a, n;
                        return (
                          e.entityId ===
                          (0, ti.i)(
                            i.data.meta.id,
                            null === (n = i.data.meta.albums) || void 0 === n
                              ? void 0
                              : null === (a = n[0]) || void 0 === a
                                ? void 0
                                : a.id,
                          )
                        );
                      }
                      return !1;
                    });
              void 0 !== t && i && (null == l || l.hide({ positions: [t] })),
                r.count(b.YHm.TRACK_DELETE, b.OIz);
              return;
            }
            if (e.isDownloading) {
              null == n || n.stopDownload(e.entityId);
              return;
            }
            null == n || n.download(e.entityId),
              r.count(b.YHm.TRACK_DOWNLOAD, b.OIz);
          }, [e.isDownloaded, e.isDownloading, e.entityId, n, r, l, i]),
          d = (0, s.useMemo)(
            () =>
              e.isDownloaded
                ? (0, a.jsx)(c.Z, { id: "offline.delete-from-device" })
                : e.isDownloading
                  ? (0, a.jsx)(c.Z, { id: "offline.stop-downloading" })
                  : (0, a.jsx)(c.Z, { id: "offline.download" }),
            [e.isDownloaded, e.isDownloading],
          ),
          m = (0, s.useMemo)(
            () =>
              e.isDownloaded
                ? (0, a.jsx)(p.Icon, { variant: "upload", size: "xxs" })
                : e.isDownloading
                  ? (0, a.jsx)(h.kQ, {
                      value: e.downloadingProgress,
                      size: 20,
                      withCancelIcon: !0,
                      className: tr().downloadingProgress,
                      progressBarClassName: tr().progress,
                      cancelIconClassName: tr().cancelIcon,
                    })
                  : (0, a.jsx)(p.Icon, { variant: "download", size: "xxs" }),
            [e.downloadingProgress, e.isDownloaded, e.isDownloading],
          );
        return (0, a.jsx)(_.sN, {
          onClick: o,
          icon: m,
          className: tr().root,
          ...(0, u.BA)(u.r9.CONTEXT_MENU_DOWNLOAD_BUTTON),
          children: d,
        });
      });
      var ts = i(11881),
        to = i.n(ts);
      let tc = (0, l.Pi)((t) => {
          let { track: e } = t,
            {
              settings: { isMobile: i },
            } = (0, b.oR4)();
          return e.isUGC && i
            ? (0, a.jsxs)("div", {
                className: to().ugcLabel,
                children: [
                  (0, a.jsx)(p.Icon, { variant: "eye_crossed", size: "xxs" }),
                  (0, a.jsx)(O.Caption, {
                    variant: "span",
                    size: "s",
                    children: (0, a.jsx)(c.Z, { id: "ugc.track-description" }),
                  }),
                ],
              })
            : null;
        }),
        td = (0, l.Pi)((t) => {
          var e, i, l, N, I, D, P, R, E, S, B, M, O, U, w, G;
          let {
              track: W,
              onOpenChange: V,
              open: z,
              placement: K,
              isFullscreenMobile: F = !1,
              icon: Z,
              size: q,
              utmLink: Y,
              handleRemove: H,
              dismissSettings: $,
              withTrailer: X = !0,
              ...Q
            } = t,
            {
              shouldShowBuySubscriptionModal: J,
              showBuySubscriptionModal: te,
            } = (0, b.vLf)(),
            ti = (0, b.R$C)(),
            {
              settings: ta,
              currentTrackInfo: tn,
              experiments: tr,
              fullscreenPlayer: ts,
              trailer: to,
              sonataState: { entityMeta: td, isVibeContext: tu },
              trackLyrics: tm,
              album: tk,
              track: tv,
              user: tp,
              slam: t_,
            } = (0, b.oR4)(),
            { formatMessage: tx } = (0, o.Z)(),
            { sendLikeSearchFeedback: tC } = (0, b.sAF)(),
            [ty, tT] = (0, s.useState)(!1),
            { modal: tb } = tm,
            { modal: th } = tn,
            tg = (0, T.OC)(W, T.h0.NEXT),
            tf = (0, T.OC)(W, T.h0.LAST),
            tA = (0, T.SB)(W),
            tN = (0, T.KX)(W),
            tI = (0, x.SB)(W.mainAlbum),
            tL = (0, T.Ey)(W),
            tj = (0, b.FTC)(),
            tD = "".concat(b.aUg.TRACK, "-").concat(W.id),
            tP = F || ta.isMobile,
            { href: tR } = (0, b.qKB)(W.url),
            tE = W.isUGC ? b.gus.UGC_TRACK : b.gus.TRACK,
            tS = (0, y.q3)({ entityVariant: tE, urlParams: { id: W.id } }),
            tB = (0, f.useTrackAboutModalTitle)(W),
            tM = (0, C.Li)(),
            tO =
              (0, b.RVp)() &&
              (null === (e = W.mainAlbum) || void 0 === e
                ? void 0
                : e.isNonMusic),
            tU =
              (null == td ? void 0 : td.id) === W.id &&
              (null == td ? void 0 : td.albumId) ===
                (null === (i = W.mainAlbum) || void 0 === i ? void 0 : i.id),
            tw = !!(
              (0, m.x)(null == ti ? void 0 : ti.state.currentContext.value) ||
              (0, k.Q)(null == ti ? void 0 : ti.state.currentContext.value)
            ),
            tG =
              (null == tk
                ? void 0
                : null === (l = tk.meta) || void 0 === l
                  ? void 0
                  : l.listeningFinished) ||
              (tU &&
                (null == td
                  ? void 0
                  : null === (N = td.streamProgress) || void 0 === N
                    ? void 0
                    : N.hasEverFinished)) ||
              (null === (I = W.streamProgress) || void 0 === I
                ? void 0
                : I.hasEverFinished),
            tW =
              tr.checkExperiment(b.peG.WebNextEnableDownloadControls, "on") &&
              tp.hasPlus &&
              W.isAvailableForDownload,
            tV = tr.checkExperiment(b.peG.WebEditorsFeatures, "on"),
            { canRemoveTrackFromPlaylist: tz, removeTrackFromPlaylist: tK } =
              (0, g.useRemoveTrackFromPlaylistByIndex)(),
            tF = (0, b.qsr)(),
            { isPlaying: tZ, togglePlay: tq } = (0, b.QhE)({
              seeds:
                null !== (G = null == W ? void 0 : W.seeds) && void 0 !== G
                  ? G
                  : [],
              pageIdForFrom: b.Rhz.RADIO,
              blockIdForFrom: tD,
            }),
            tY = (0, v.W)(async () => {
              ty || W.isLiked || (tT(!0), null == tC || tC()), await tA();
            }),
            tH = (0, v.W)(() => {
              if (J && tp.isAuthorized) {
                te();
                return;
              }
              !tF() && (tZ || tq());
            }),
            t$ = (0, v.W)(() => {
              if (J) {
                te();
                return;
              }
              tF() ||
                (to.setUtmLink(Y),
                to.openTrackTrailer(W.entityId),
                tj(d.OB.Track, W.id));
            }),
            tX = (0, v.W)(() => {
              var t;
              tn.setTrack({
                id: W.id,
                albumId:
                  (null === (t = W.mainAlbum) || void 0 === t
                    ? void 0
                    : t.id) || null,
                isUGC: W.isUGC || null,
              }),
                tv.isOpened && tv.close(),
                th.open();
            }),
            tQ = (0, v.W)(() => {
              W.clipIds && tM((0, r.ZN)(W.clipIds));
            }),
            tJ = (0, v.W)(() => {
              if (J && tp.isAuthorized) {
                te();
                return;
              }
              tm.setTrack(W), tv.isOpened && tv.close(), tb.open();
            }),
            t0 = (0, v.W)(() => {
              if (J && tp.isAuthorized) {
                te();
                return;
              }
              ts.isSyncLyricsMode ? ts.hideSyncLyrics() : ts.showSyncLyrics();
            }),
            t3 = (0, v.W)(() => {
              null == H || H(), null == V || V(!1);
            }),
            t5 = (0, v.W)(
              () => W.isSyncLyricsAvailable && ts.modal.isOpened && tP,
            ),
            t1 = (0, v.W)(() => W.isLyricsAvailable && !ts.modal.isOpened),
            t4 = (0, v.W)(() => {
              var t;
              return (
                (null === (t = W.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable) &&
                !ts.modal.isOpened &&
                X
              );
            }),
            {
              withSyncLyricsItem: t9,
              withLyricsItem: t7,
              withTrailerItem: t6,
            } = (0, s.useMemo)(
              () => ({
                withSyncLyricsItem: t5(),
                withLyricsItem: t1(),
                withTrailerItem: t4(),
              }),
              [
                t5,
                t1,
                t4,
                W.isSyncLyricsAvailable,
                W.isLyricsAvailable,
                null === (D = W.trailer) || void 0 === D
                  ? void 0
                  : D.isAvailable,
              ],
            );
          (0, b.ZP4)(z);
          let t2 = !tO,
            t8 = W.isNonUserGenerated && !tO,
            et = !tO,
            ee = !tP,
            ei = tO && tI,
            ea = W.isNonUserGenerated && (W.albums.length || W.mainAlbum),
            en =
              W.isNonUserGenerated &&
              !!(null === (P = W.artists) || void 0 === P
                ? void 0
                : P.length) &&
              ((null === (R = W.mainAlbum) || void 0 === R
                ? void 0
                : R.isAudiobook) ||
                (null === (E = W.mainAlbum) || void 0 === E
                  ? void 0
                  : E.isAlbum) ||
                W.isTrackAudiobook ||
                W.isTrackMusic),
            er = !tw && td,
            el = tr.checkExperiment(b.peG.WebNextUGC, "on") && W.isUGC,
            es = ts.isPlayQueueMode && H && !tu,
            eo =
              (0, C.yO)(C.$t.TRACK_CONTEXT_MENU) &&
              W.isNonUserGenerated &&
              (null === (S = W.clipIds) || void 0 === S ? void 0 : S.length),
            ec = {
              variant: b.GGO.TRACK,
              id: W.id,
              title: W.title,
              path: W.url,
              trackArtistName:
                null === (B = W.mainArtist) || void 0 === B ? void 0 : B.name,
              trackArtistId:
                null === (M = W.mainArtist) || void 0 === M ? void 0 : M.id,
              trackAlbumId: W.albumId,
            };
          return t_.isOfflineModeEnabled
            ? (0, a.jsxs)(_.v2, {
                isMobile: tP,
                placement: K,
                offsetOptions: 10,
                open: z,
                onOpenChange: V,
                icon: Z,
                size: q,
                dismissSettings: $,
                containerProps: (0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU),
                ariaLabel: tx({ id: "interface-actions.context-menu" }),
                variant: "text",
                ...Q,
                children: [
                  tW && (0, a.jsx)(tl, { track: W }),
                  W.isNonUserGenerated &&
                    (0, a.jsx)(h.zq, { shareLink: tR, entityMeta: ec }),
                ],
              })
            : (0, a.jsxs)(_.v2, {
                dismissSettings: $,
                isMobile: tP,
                placement: K,
                offsetOptions: 10,
                open: z,
                onOpenChange: V,
                icon: Z,
                size: q,
                containerProps: (0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU),
                ariaLabel: tx({ id: "interface-actions.context-menu" }),
                variant: "text",
                ...Q,
                children: [
                  (0, a.jsx)(tc, { track: W }),
                  tP &&
                    (0, a.jsx)(h.TF, {
                      getDescriptionTexts: W.getDescriptionTexts,
                      entityId: W.id,
                    }),
                  tV && (0, a.jsx)(y.ZY, { entityVariant: tE, adminUrl: tS }),
                  tO && (0, a.jsx)(h.XB, { onClick: tL, isFinished: tG }),
                  t2 && (0, a.jsx)(h.xZ, { onClick: tY, isLiked: W.isLiked }),
                  t6 && (0, a.jsx)(h.NB, { onClick: t$ }),
                  t8 &&
                    (0, a.jsx)(h.GQ, {
                      onClick: tH,
                      variant: b.xIL.TRACK,
                      disabled: !W.isAvailable,
                      onOpenMenuChange: V,
                    }),
                  eo &&
                    (0, a.jsx)(_.sN, {
                      onClick: tQ,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "clip",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_CLIP_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "non-music.navigate-to-clip",
                      }),
                    }),
                  tW && (0, a.jsx)(tl, { track: W }),
                  er &&
                    (0, a.jsx)(_.sN, {
                      onClick: tg,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "playNext",
                        size: "xxs",
                      }),
                      disabled: !tp.isAuthorized,
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, { id: "play-queue.play-next" }),
                    }),
                  er &&
                    (0, a.jsx)(_.sN, {
                      onClick: tf,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "playLast",
                        size: "xxs",
                      }),
                      disabled: !tp.isAuthorized,
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_PLAY_LAST_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, { id: "play-queue.play-last" }),
                    }),
                  t9 &&
                    !ts.isSyncLyricsMode &&
                    (0, a.jsx)(_.sN, {
                      className: (0, n.W)({ [L().syncLyrics]: F }),
                      onClick: t0,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "syncLyrics",
                        size: "xxs",
                      }),
                      disabled: !tp.isAuthorized,
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "interface-actions.open-sync-lyrics",
                      }),
                    }),
                  t9 &&
                    ts.isSyncLyricsMode &&
                    (0, a.jsx)(_.sN, {
                      className: (0, n.W)({ [L().syncLyrics]: F }),
                      onClick: t0,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "syncLyrics",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "interface-actions.hide-sync-lyrics",
                      }),
                    }),
                  es &&
                    (0, a.jsx)(_.sN, {
                      onClick: t3,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "bucket",
                        size: "xxs",
                      }),
                      children: (0, a.jsx)(c.Z, {
                        id: "play-queue.delete-from-queue",
                      }),
                    }),
                  et &&
                    (0, a.jsx)(h.ZL, { onClick: tN, isDisliked: W.isDisliked }),
                  ee && (0, a.jsx)(tt, { track: W }),
                  t7 &&
                    (0, a.jsx)(_.sN, {
                      disabled: !tp.isAuthorized,
                      onClick: tJ,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "lyrics",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_LYRICS_BUTTON),
                      children: (0, a.jsx)(c.Z, {
                        id: "interface-actions.open-lyrics",
                      }),
                    }),
                  W.isNonUserGenerated &&
                    (0, a.jsx)(h.zq, { shareLink: tR, entityMeta: ec }),
                  ea &&
                    (null === (O = W.mainAlbum) || void 0 === O
                      ? void 0
                      : O.url) &&
                    (0, a.jsx)(h.CC, {
                      albumUrl: W.mainAlbum.url,
                      albumType: W.mainAlbum.type,
                      trackType: W.type,
                    }),
                  en &&
                    W.artists[0] &&
                    (0, a.jsx)(j, {
                      artists: W.artists,
                      artistId: W.artists[0].id,
                    }),
                  ei &&
                    (0, a.jsx)(h.qq, {
                      onClick: tI,
                      isLiked:
                        null === (U = W.mainAlbum) || void 0 === U
                          ? void 0
                          : U.isLiked,
                      albumType:
                        null === (w = W.mainAlbum) || void 0 === w
                          ? void 0
                          : w.type,
                    }),
                  el && (0, a.jsx)(A, { track: W }),
                  tz &&
                    (0, a.jsx)(_.sN, {
                      onClick: tK,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "bucket",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track
                          .TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "playlist-actions.remove-from-playlist",
                      }),
                    }),
                  !tP &&
                    (0, a.jsx)(_.sN, {
                      onClick: tX,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "info",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                      ),
                      children: tB,
                    }),
                ],
              });
        });
    },
    91123: function (t, e, i) {
      "use strict";
      i.d(e, {
        Lyrics: function () {
          return d;
        },
      });
      var a = i(75441),
        n = i(9317),
        r = i(35846),
        l = i(17392),
        s = i(97141),
        o = i(45421),
        c = i.n(o);
      let d = (t) => {
        let {
            lyrics: e,
            authors: i,
            source: o,
            isShimmerVisible: d,
            isShimmerActive: u,
          } = t,
          { formatMessage: m } = (0, n.Z)();
        return d
          ? (0, a.jsx)(s.Yh, { count: 25, isActive: u })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                e,
                (0, a.jsxs)("div", {
                  className: c().writers,
                  children: [
                    i.length > 0 &&
                      (0, a.jsx)(l.Caption, {
                        variant: "div",
                        size: "l",
                        weight: "medium",
                        ...(0, r.BA)(r.QM.content.TRACK_LYRICS_AUTHORS),
                        children: m(
                          { id: "entity-names.authors" },
                          { authors: i },
                        ),
                      }),
                    o &&
                      (0, a.jsx)(l.Caption, {
                        variant: "div",
                        size: "l",
                        weight: "medium",
                        ...(0, r.BA)(r.QM.content.TRACK_LYRICS_SOURCE),
                        children: m(
                          { id: "entity-names.source" },
                          { source: o },
                        ),
                      }),
                  ],
                }),
              ],
            });
      };
    },
    7631: function (t, e, i) {
      "use strict";
      i.d(e, {
        SearchTrackCard: function () {
          return y;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(65067),
        s = i(35846),
        o = i(84638),
        c = i(43398),
        d = i(94123),
        u = i(93093),
        m = i(91307),
        k = i(13534),
        v = i(97141),
        p = i(67371),
        _ = i(88594),
        x = i(48943),
        C = i(43406);
      let y = (0, r.Pi)((t) => {
        var e;
        let { className: i, track: r, pageId: y } = t,
          { shouldShowBuySubscriptionModal: T, showBuySubscriptionModal: b } =
            (0, k.vLf)(),
          { ref: h, intersectionPropertyId: g } = (0, k.VfV)(),
          {
            track: f,
            settings: { isMobile: A },
          } = (0, k.oR4)(),
          { from: N } = (0, k.MhG)({ pageId: y }),
          I = (0, k.lAI)(),
          {
            isPlaying: L,
            isCurrent: j,
            togglePlay: D,
            restartPlay: P,
          } = (0, k.qmq)({
            playContextParams: {
              contextData: {
                type: o.A.Various,
                meta: { id: r.entityId },
                from: N,
                overrideContextType: c.Z.Search,
              },
              queueParams: { index: 0, entityId: r.id },
              loadContextMeta: !0,
            },
            entityId: r.entityId,
          }),
          R = (0, k.qsr)(),
          E = (0, p.useTrackDisclaimer)({ track: r, callback: D }),
          S = (0, l.useCallback)(() => {
            f.open({ trackId: r.id, albumId: r.albumId });
          }, [f, r.id, r.albumId]),
          B = (0, p.useTrackDisclaimer)({ track: r, callback: S }),
          { sendPlaySearchFeedback: M } = (0, k.sAF)(),
          [O, U] = (0, l.useState)(!1),
          w = (0, u.W)(() => {
            if (!R()) {
              if (T) {
                b();
                return;
              }
              O || L || (U(!0), null == M || M()), E(), I(!L);
            }
          }),
          G = (0, u.W)(() => {
            if (L) {
              P();
              return;
            }
            w();
          }),
          W = (0, u.W)((t) => {
            if (!r.isAvailable && !r.hasModalAccess) {
              T && r.isAvailableOnlyForPlus && b();
              return;
            }
            if (T) {
              b();
              return;
            }
            if (((0, m.m)(t, v.$C.ripple), 2 === t.detail)) {
              G();
              return;
            }
            1 === t.detail && r.hasTrackLink && B();
          }),
          V = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(v.Df, {
                isAvailable: r.isAvailable,
                isDisliked: r.isDisliked,
                coverUri: r.coverUri,
                title: r.title,
                className: v.$C.playButtonCell,
                ...t,
              }),
            [r],
          ),
          z =
            null == V
              ? void 0
              : V({ onPlayButtonClick: w, isPlaying: L, isCurrent: j });
        return (0, a.jsxs)(v.Md, {
          ref: h,
          "data-intersection-property-id": g,
          className: (0, n.W)(v.$C.root, i),
          "aria-label": ""
            .concat(r.artistsNames, " ")
            .concat(r.title, " ")
            .concat(null !== (e = r.version) && void 0 !== e ? e : ""),
          onClick: W,
          ...(0, s.BA)(s.bG.track.SEARCH_TRACK_CARD),
          children: [
            z,
            r.type === d.V.PODCAST
              ? (0, a.jsx)(x.PodcastMeta, {
                  track: r,
                  playContextParams: {
                    contextData: {
                      type: o.A.Various,
                      meta: { id: r.entityId },
                      from: N,
                    },
                    queueParams: { index: 0 },
                    loadContextMeta: !0,
                  },
                  withPodcastName: !0,
                  withListeningProgress: !0,
                  withAlbumTitleLink: !A,
                })
              : (0, a.jsx)(C.TrackMeta, { withArtistLink: !A, track: r }),
            (0, a.jsx)(_.ControlsBar, {
              className: v.$C.controlsBarCell,
              track: r,
            }),
          ],
        });
      });
    },
    59920: function (t, e, i) {
      "use strict";
      i.d(e, {
        Track: function () {
          return p;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(65067),
        s = i(93093),
        o = i(91307),
        c = i(13534),
        d = i(97141),
        u = i(84948),
        m = i(67371),
        k = i(36514),
        v = i.n(k);
      let p = (0, r.Pi)((t) => {
        let {
            className: e,
            track: i,
            meta: r,
            beforeBlock: k,
            controls: p,
            playButtonCellRender: _,
            withLightning: x,
            isPlaying: C,
            isCurrent: y,
            togglePlay: T,
            restartPlay: b,
            onPlayClick: h,
            playButtonIconSize: g,
            ...f
          } = t,
          { shouldShowBuySubscriptionModal: A, showBuySubscriptionModal: N } =
            (0, c.vLf)(),
          {
            track: I,
            fullscreenPlayer: L,
            settings: { isMobile: j },
          } = (0, c.oR4)(),
          { ref: D, intersectionPropertyId: P } = (0, c.VfV)(),
          R = (0, c.lAI)(),
          E = (0, c.qsr)(),
          S = (0, u.R)({ withLightning: x, track: i }),
          B = (0, m.useTrackDisclaimer)({ track: i, callback: T }),
          M = (0, s.W)(() => {
            I.open({ trackId: i.id, albumId: i.albumId });
          }),
          O = (0, m.useTrackDisclaimer)({ track: i, callback: M }),
          { sendPlaySearchFeedback: U } = (0, c.sAF)(),
          [w, G] = (0, l.useState)(!1),
          W = (0, s.W)(() => {
            if (!E()) {
              if (A) {
                N();
                return;
              }
              w || C || (G(!0), null == U || U()),
                B(),
                R(!C),
                null == h || h(!C);
            }
          }),
          V = (0, s.W)(() => {
            if (C) {
              b();
              return;
            }
            W();
          }),
          z = (0, s.W)((t) => {
            if (!i.isAvailable && !i.hasModalAccess) {
              A && i.isAvailableOnlyForPlus && N();
              return;
            }
            if (A) {
              N();
              return;
            }
            if (((0, o.m)(t, v().ripple), j && W(), 2 === t.detail)) {
              V();
              return;
            }
            1 === t.detail && i.hasTrackLink && !L.modal.isOpened && O();
          }),
          K =
            null == _
              ? void 0
              : _({
                  onPlayButtonClick: W,
                  isPlaying: C,
                  isCurrent: y,
                  playButtonIconSize: g,
                });
        return (0, a.jsxs)(d.Md, {
          tabIndex: -1,
          ref: D,
          "aria-label": S,
          "data-intersection-property-id": P,
          onClick: z,
          className: (0, n.W)(
            v().root,
            { [v().root_disabled]: !i.isAvailable },
            e,
          ),
          ...f,
          children: [k, K, r, p],
        });
      });
    },
    18941: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackCard: function () {
          return L;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(65067),
        s = i(9317),
        o = i(84638),
        c = i(93093),
        d = i(14218),
        u = i(18333),
        m = i(59091),
        k = i(17392),
        v = i(73447),
        p = i(64353),
        _ = i(32399),
        x = i(13534),
        C = i(97141),
        y = i(67371),
        T = i(82930),
        b = i.n(T),
        h = i(15937),
        g = i(4875),
        f = i(35846),
        A = i(69756),
        N = i(7899);
      let I = (0, r.Pi)((t) => {
          let {
              track: e,
              handleLikeButtonClick: i,
              handlePlayButtonClick: r,
              isPlaying: s,
            } = t,
            { trailer: o, user: m } = (0, x.oR4)(),
            [k, v] = (0, l.useState)(!1),
            [p, _] = (0, l.useState)(!1),
            y = (0, x.qsr)(),
            T = (0, x.FTC)(),
            I = (0, c.W)(() => {
              v(!k), _(!k);
            }),
            L = (0, c.W)((t) => {
              t.preventDefault(), t.stopPropagation();
            }),
            j = (0, c.W)((t) => {
              if ((t.stopPropagation(), y())) {
                t.preventDefault();
                return;
              }
              o.openTrackTrailer(e.id), T(g.OB.Track, e.id);
            }),
            D = (0, d.V)(() => {
              var t;
              if (
                null == e
                  ? void 0
                  : null === (t = e.trailer) || void 0 === t
                    ? void 0
                    : t.isAvailable
              )
                return (0, a.jsx)(
                  C.xf,
                  {
                    children: (0, a.jsx)(C.eP, {
                      className: (0, n.W)(b().trailerButton, b().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: j,
                    }),
                  },
                  e.getKey("TrackCardTrailerTooltip"),
                );
            });
          return (0, a.jsx)(u.kk, {
            isVisible: k || p,
            className: b().controls,
            labelText: (0, a.jsx)(h.Z, { id: "entity-names.track" }),
            playControl: (0, a.jsx)(
              C.JM,
              {
                className: (0, n.W)(b().playButton, b().control),
                buttonVariant: "default",
                withHover: !1,
                iconSize: "xl",
                variant: "filled",
                isPlaying: s,
                onClick: r,
              },
              e.getKey("PlayButton"),
            ),
            likeControl: (0, a.jsx)(
              C.dJ,
              {
                className: (0, n.W)(b().likeButton, b().control),
                isLiked: e.isLiked,
                onClick: i,
                variant: "default",
                size: "s",
                iconSize: "xxs",
                disabled: !m.isAuthorized,
              },
              e.getKey("LikeButton"),
            ),
            menuControl: (0, a.jsx)(
              N.TrackContextMenu,
              {
                placement: "bottom",
                track: e,
                onOpenChange: I,
                open: k,
                onClick: L,
                className: (0, n.W)(b().menuButton, b().control),
                icon: (0, a.jsx)(A.Icon, { size: "xxs", variant: "more" }),
                size: "s",
                ...(0, f.BA)(f.bG.track.TRACK_CONTEXT_MENU_BUTTON),
              },
              e.getKey("TrackContextMenu"),
            ),
            trailerControl: D,
          });
        }),
        L = (0, r.Pi)((t) => {
          let {
              className: e,
              children: i,
              track: r,
              contentLinesCount: T,
              overrideContextType: h,
            } = t,
            { from: g } = (0, x.MhG)(),
            { track: f } = (0, x.oR4)(),
            { formatMessage: A } = (0, s.Z)(),
            [N, L] = (0, l.useState)(!1),
            [j, D] = (0, l.useState)(!1),
            {
              sendLikeSearchFeedback: P,
              sendPlaySearchFeedback: R,
              sendNavigateSearchFeedback: E,
            } = (0, x.sAF)(),
            S = (0, _.SB)(r),
            B = (0, x.s0h)(r.albumUrl),
            M = (0, x.s0h)(r.albumUrl, !0),
            O = (0, x.s0h)(r.url),
            U = (0, x.s0h)(r.url, !0),
            w = (0, x.lAI)(),
            G = (0, x.qsr)(),
            W = (0, d.V)(() => {
              var t;
              let e = A(
                  { id: "entity-names.track-name" },
                  { trackName: r.title },
                ),
                i = r.isLiked ? A({ id: "entity-names.has-your-like" }) : "";
              return ""
                .concat(e, " ")
                .concat(null !== (t = r.version) && void 0 !== t ? t : "", " ")
                .concat(i);
            }),
            { isPlaying: V, togglePlay: z } = (0, x.qmq)({
              playContextParams: {
                contextData: {
                  type: o.A.Various,
                  meta: { id: r.entityId },
                  from: g,
                  overrideContextType: h,
                },
                queueParams: { index: 0 },
                loadContextMeta: !0,
              },
              entityId: r.entityId,
            }),
            K = (0, c.W)(() => {
              f.open({ trackId: r.id, albumId: r.albumId });
            }),
            F = (0, c.W)(() => {
              N || V || (L(!0), null == R || R()), z();
            }),
            Z = (0, v.jV)({ album: r.mainAlbum, callback: B }),
            q = (0, v.jV)({ album: r.mainAlbum, callback: M }),
            Y = (0, y.useTrackDisclaimer)({ track: r, callback: O }),
            H = (0, y.useTrackDisclaimer)({ track: r, callback: U }),
            $ = (0, p.ik)(q, Z),
            X = (0, p.ik)(H, Y),
            Q = (0, y.useTrackDisclaimer)({ track: r, callback: K }),
            J = (0, y.useTrackDisclaimer)({ track: r, callback: F }),
            tt = (0, c.W)(() => {
              G() || (J(), w(!V));
            }),
            te = (0, c.W)(() => {
              r.hasTrackLink && Q();
            }),
            ti = (0, c.W)(() => {
              j || r.isLiked || (D(!0), null == P || P()), S();
            }),
            ta = (0, c.W)((t) => {
              if (r.hasTrackLink) {
                null == E || E(), X(t);
                return;
              }
              r.hasAlbumLink && $(t);
            }),
            tn = (0, d.V)(() => {
              var t, e;
              return r.hasTrackLink
                ? (0, a.jsx)(C.rU, {
                    "aria-label": ""
                      .concat(r.title, " ")
                      .concat(
                        null !== (t = r.version) && void 0 !== t ? t : "",
                      ),
                    className: b().titleLink,
                    href: r.url,
                    onClick: ta,
                    children: r.title,
                  })
                : r.hasAlbumLink
                  ? (0, a.jsx)(C.rU, {
                      "aria-label": ""
                        .concat(r.title, " ")
                        .concat(
                          null !== (e = r.version) && void 0 !== e ? e : "",
                        ),
                      className: b().titleLink,
                      href: r.albumUrl,
                      onClick: ta,
                      children: r.title,
                    })
                  : (0, a.jsx)(k.Caption, {
                      className: b().title,
                      variant: "span",
                      children: r.title,
                    });
            }),
            tr = (0, d.V)(() => {
              var t;
              return r.hasAlbumLink
                ? (0, a.jsx)(C.rU, {
                    href: r.albumUrl,
                    onClick: ta,
                    children: ""
                      .concat(r.title, " ")
                      .concat(
                        null !== (t = r.version) && void 0 !== t ? t : "",
                      ),
                  })
                : null;
            }),
            tl = (0, d.V)(() => {
              if (r.isAvailable)
                return (0, a.jsx)(I, {
                  track: r,
                  isPlaying: V,
                  handleLikeButtonClick: ti,
                  handlePlayButtonClick: tt,
                });
            });
          return (0, a.jsx)(u.m7, {
            className: (0, n.W)(b().root, e),
            "aria-label": W,
            explicitMarkComponent:
              r.explicitDisclaimer &&
              (0, a.jsx)(C.$i, {
                getDescriptionTexts: r.getDescriptionTexts,
                variant: r.explicitDisclaimer,
              }),
            title: (0, a.jsxs)(k.Caption, {
              className: (0, n.W)(b().titleContainer, {
                [b().titleContainer_withVersion]: r.version,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              children: [
                tn,
                r.version &&
                  (0, a.jsx)(k.Caption, {
                    className: b().version,
                    variant: "span",
                    children: " ".concat(r.version),
                  }),
              ],
            }),
            srTitle: tr,
            contentLinesCount: T,
            view: (0, a.jsx)(m.Paper, {
              className: b().cover,
              radius: "l",
              withShadow: !0,
              children: (0, a.jsxs)("div", {
                className: (0, n.W)(b().coverBlock, {
                  [b().coverBlock_withTrackLink]: r.hasTrackLink,
                }),
                onClick: te,
                children: [
                  (0, a.jsx)(C.BE, {
                    className: b().image,
                    src: r.coverUri,
                    size: 200,
                    fit: "cover",
                    alt: W,
                    withAvatarReplace: !0,
                    isAvailable: r.isAvailable,
                    "aria-hidden": !0,
                  }),
                  tl,
                ],
              }),
            }),
            description: (0, a.jsx)(
              p.jO,
              {
                className: b().artists,
                artists: r.artists,
                lineClamp: 1,
                linkClassName: b().artistLink,
                captionSize: "s",
                withLink: r.isNonUserGenerated,
              },
              r.getKey("description"),
            ),
            children: i,
          });
        });
    },
    10221: function (t, e, i) {
      "use strict";
      i.d(e, {
        UgcTrackEditModal: function () {
          return k;
        },
      });
      var a,
        n,
        r = i(75441),
        l = i(62569),
        s = i(65067),
        o = i(9317),
        c = i(93093),
        d = i(13534),
        u = i(97141);
      ((a = n || (n = {})).TITLE = "title"), (a.ARTIST = "artist");
      let m = (t) => {
          var e, i;
          let a =
              null === (e = t.find((t) => t.key === n.TITLE)) || void 0 === e
                ? void 0
                : e.value,
            r =
              null === (i = t.find((t) => t.key === n.ARTIST)) || void 0 === i
                ? void 0
                : i.value;
          return {
            title: (a = a ? a.trim() : ""),
            artist: (r = r ? r.trim() : ""),
          };
        },
        k = (0, l.Pi)(() => {
          let {
              modals: { ugcTrackEditModal: t },
              fullscreenPlayer: e,
            } = (0, d.oR4)(),
            { notify: i } = (0, d.d$W)(),
            { formatMessage: a } = (0, o.Z)(),
            l = (0, s.useMemo)(
              () => [
                {
                  key: n.TITLE,
                  title: a({ id: "track-modal.track-name" }),
                  value: t.trackTitle,
                  minLength: 1,
                  maxLength: 200,
                },
                {
                  key: n.ARTIST,
                  title: a({ id: "entity-names.singer" }),
                  value: t.trackArtist,
                  minLength: 0,
                  maxLength: 200,
                },
              ],
              [a, t.trackArtist, t.trackTitle],
            ),
            k = (0, c.W)(async (n) => {
              let { title: l, artist: s } = m(n);
              t.track &&
                (await t.track.changeTrackInfo(l, s)) === d.SLo.ERROR &&
                i((0, r.jsx)(u.Q, { error: a({ id: "ugc.editing-failed" }) }), {
                  containerId: e.modal.isOpened
                    ? d.W$x.FULLSCREEN_ERROR
                    : d.W$x.ERROR,
                }),
                t.close();
            });
          return t.modal.isOpened
            ? (0, r.jsx)(u.g3, {
                open: t.modal.isOpened,
                title: a({ id: "entity-names.track" }),
                content: l,
                onClose: t.close,
                onChange: k,
              })
            : null;
        });
    },
    89417: function (t, e, i) {
      "use strict";
      i.d(e, {
        PromoLandingTrackAlbum: function () {
          return L;
        },
      });
      var a = i(75441),
        n = i(62569),
        r = i(65067),
        l = i(13534),
        s = i(32358),
        o = i(9317),
        c = i(69756),
        d = i(17392),
        u = i(32399),
        m = i(97141),
        k = i(28421),
        v = i(84639),
        p = i.n(v);
      let _ = (0, n.Pi)((t) => {
        let { className: e, track: i, withLightning: n } = t,
          {
            settings: { isMobile: r },
          } = (0, l.oR4)(),
          { formatMessage: v } = (0, o.Z)(),
          _ = (0, u.yv)(i);
        return (0, a.jsxs)("div", {
          className: (0, s.W)(p().root, p().controls, e, {
            [p().controls_disabled]: !i.isAvailable,
          }),
          children: [
            n &&
              (0, a.jsx)(c.Icon, {
                "aria-label": v({ id: "entity-names.popular-among-users" }),
                size: "xxs",
                className: (0, s.W)(p().lightning, {
                  [p().lightning_withOffset]: r,
                }),
                variant: "lightning",
              }),
            !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(m.dJ, {
                size: "xs",
                iconSize: "xxs",
                className: (0, s.W)(p().item, p().likeIcon),
                isLiked: i.isLiked,
                onClick: _,
              }),
            !r &&
              "number" == typeof i.durationMs &&
              (0, a.jsx)("div", {
                className: (0, s.W)(p().item, p().contextMenuWrapper),
                children: (0, a.jsx)(d.Caption, {
                  variant: "span",
                  className: (0, s.W)(p().duration, p().alwaysVisibleDuration),
                  type: "entity",
                  size: "m",
                  weight: "medium",
                  children: (0, k.U)(i.durationMs),
                }),
              }),
          ],
        });
      });
      var x = i(43406),
        C = i(15343),
        y = i(93093),
        T = i(91307),
        b = i(84948),
        h = i(67371),
        g = i(36514),
        f = i.n(g);
      let A = (0, n.Pi)((t) => {
        let {
            className: e,
            track: i,
            meta: n,
            beforeBlock: r,
            controls: o,
            playButtonCellRender: c,
            withLightning: d,
            isPlaying: u,
            isCurrent: k,
            togglePlay: v,
            restartPlay: p,
            onPlayClick: _,
            ...x
          } = t,
          { ref: C, intersectionPropertyId: g } = (0, l.VfV)(),
          A = (0, l.lAI)(),
          N = (0, b.R)({ withLightning: d, track: i }),
          I = (0, h.useTrackDisclaimer)({ track: i, callback: v }),
          L = (0, y.W)(() => {
            I(), A(!u), null == _ || _(!u);
          }),
          j = (0, y.W)(() => {
            if (u) {
              p();
              return;
            }
            L();
          }),
          D = (0, y.W)((t) => {
            (i.isAvailable || i.hasModalAccess) &&
              ((0, T.m)(t, f().ripple), 2 === t.detail && j());
          }),
          P =
            null == c
              ? void 0
              : c({ onPlayButtonClick: L, isPlaying: u, isCurrent: k });
        return (0, a.jsxs)(m.Md, {
          ref: C,
          "aria-label": N,
          "data-intersection-property-id": g,
          onClick: D,
          className: (0, s.W)(
            f().root,
            { [f().root_disabled]: !i.isAvailable },
            e,
          ),
          ...x,
          children: [r, P, n, o],
        });
      });
      var N = i(59570),
        I = i.n(N);
      let L = (0, n.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: n,
            playContextParams: s,
            withLightning: o,
          } = t,
          { promolanding: c } = (0, l.oR4)(),
          d = (0, l.qmq)({
            playContextParams: s,
            entityId: e.entityId,
            playbackId: l.jiA.PROMO_LANDING,
            sonataState: c.state,
          }),
          u = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(C.e, {
                track: e,
                position: n,
                className: I().playButtonCell,
                withDislikeStyles: !1,
                ...t,
              }),
            [e, n],
          );
        return (0, a.jsx)(A, {
          track: e,
          withLightning: o,
          meta: (0, a.jsx)(x.TrackMeta, {
            ignoreDislikedStyles: !0,
            withArtistLink: !1,
            withAlbumLink: !1,
            withTrackLink: !1,
            albumArtists: i,
            track: e,
            withSavingQueryParams: !0,
          }),
          playButtonCellRender: u,
          controls: (0, a.jsx)(_, {
            withLightning: o,
            track: e,
            className: I().controlsBarCell,
          }),
          ...d,
        });
      });
    },
    199: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackAlbum: function () {
          return v;
        },
      });
      var a = i(75441),
        n = i(62569),
        r = i(65067),
        l = i(35846),
        s = i(13534),
        o = i(88594),
        c = i(43406),
        d = i(15343),
        u = i(59920),
        m = i(68922),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: n,
            playContextParams: m,
            withLightning: v,
          } = t,
          p = (0, s.qmq)({ playContextParams: m, entityId: e.entityId }),
          {
            settings: { isMobile: _ },
          } = (0, s.oR4)(),
          x = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: n,
                className: k().playButtonCell,
                ...t,
              }),
            [e, n],
          );
        return (0, a.jsx)(u.Track, {
          track: e,
          withLightning: v,
          meta: (0, a.jsx)(c.TrackMeta, {
            withArtistLink: !_,
            albumArtists: i,
            track: e,
            withSavingQueryParams: !0,
          }),
          playButtonCellRender: x,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: v,
            track: e,
            className: k().controlsBarCell,
            utmLink: m.contextData.utmLink,
          }),
          ...p,
          ...(0, l.BA)(l.bG.track.TRACK_ALBUM),
        });
      });
    },
    46281: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackAlbum: function () {
          return v;
        },
      });
      var a = i(75441),
        n = i(62569),
        r = i(65067),
        l = i(35846),
        s = i(13534),
        o = i(88594),
        c = i(43406),
        d = i(15343),
        u = i(59920),
        m = i(68922),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: n,
            playContextParams: m,
            withLightning: v,
            onPlayClick: p,
            onLikeClick: _,
            onDislikeClick: x,
          } = t,
          {
            trailer: C,
            settings: { isMobile: y },
          } = (0, s.oR4)(),
          T = (0, s.qmq)({
            playContextParams: m,
            entityId: e.entityId,
            sonataState: C.state,
            playbackId: s.jiA.TRAILER,
          }),
          b = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: n,
                className: k().playButtonCell,
                ...t,
              }),
            [e, n],
          );
        return (0, a.jsx)(u.Track, {
          track: e,
          withLightning: v,
          meta: (0, a.jsx)(c.TrackMeta, {
            withArtistLink: !y,
            albumArtists: i,
            track: e,
          }),
          playButtonCellRender: b,
          onPlayClick: p,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: v,
            track: e,
            className: k().controlsBarCell,
            onLikeClick: _,
            onDislikeClick: x,
          }),
          ...T,
          ...(0, l.BA)(l.bG.track.TRACK_ALBUM),
        });
      });
    },
    48197: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackChart: function () {
          return p;
        },
      });
      var a = i(75441),
        n = i(62569),
        r = i(65067),
        l = i(35846),
        s = i(89428),
        o = i(13534),
        c = i(97141),
        d = i(88594),
        u = i(43406),
        m = i(59920),
        k = i(61932),
        v = i.n(k);
      let p = (0, n.Pi)((t) => {
        var e, i;
        let { track: n, playContextParams: k } = t,
          p = (0, o.qmq)({ playContextParams: k, entityId: n.entityId }),
          {
            settings: { isMobile: _ },
          } = (0, o.oR4)(),
          x = (0, r.useCallback)(
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
        return (0, a.jsx)(m.Track, {
          track: n,
          meta: (0, a.jsx)(u.TrackMeta, { withArtistLink: !_, track: n }),
          beforeBlock: (0, a.jsx)(s.kL, {
            withIcon: !0,
            className: v().chartCell,
            progress:
              null === (e = n.chart) || void 0 === e ? void 0 : e.progress,
            position:
              null === (i = n.chart) || void 0 === i ? void 0 : i.position,
            isDisliked: n.isDisliked,
            isDisabled: !n.isAvailable,
          }),
          playButtonCellRender: x,
          controls: (0, a.jsx)(d.ControlsBar, {
            track: n,
            className: v().controlsBarCell,
          }),
          ...p,
          ...(0, l.BA)(l.bG.track.TRACK_CHART),
        });
      });
    },
    55783: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackNonMusic: function () {
          return b;
        },
      });
      var a = i(75441),
        n = i(62569),
        r = i(32358),
        l = i(65067),
        s = i(35846),
        o = i(13534),
        c = i(97141),
        d = i(10510),
        u = i(88594),
        m = i(30739),
        k = i(15343),
        v = i(59920),
        p = i(69514),
        _ = i.n(p),
        x = i(13743);
      let C = (0, n.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            className: n,
            withDNDBlock: p,
            isDragging: C,
            draggingClassName: y,
            withTimeLeftText: T,
            ignoreDislikedStyles: b,
            viewType: h = x.c.PLAYLIST,
            position: g,
            beforeTitle: f,
          } = t,
          A = (0, o.qmq)({ playContextParams: i, entityId: e.entityId }),
          {
            settings: { isMobile: N },
          } = (0, o.oR4)(),
          I = (0, l.useCallback)(
            (t) =>
              h === x.c.ALBUM
                ? (0, a.jsx)(k.e, {
                    track: e,
                    position: g,
                    className: _().playButtonCell,
                    ...t,
                  })
                : (0, a.jsx)(c.Df, {
                    isAvailable: e.isAvailable,
                    isDisliked: e.isDisliked,
                    coverUri: e.coverUri,
                    title: e.title,
                    className: _().playButtonCell,
                    ignoreDislikedStyles: b,
                    ...t,
                  }),
            [b, g, h, e],
          );
        return (0, a.jsx)(v.Track, {
          className: (0, r.W)(n, {
            [_().trackWithDots]: p,
            [_().important]: p,
          }),
          track: e,
          meta: (0, a.jsx)(m.AudiobookMeta, {
            beforeTitle: f,
            withAuthor: h === x.c.PLAYLIST,
            explicitSize: "xxxs",
            track: e,
            playContextParams: i,
            withListeningProgress: !0,
            withTimeLeftText: T,
            ignoreDislikedStyles: b,
            withSavingQueryParams: !0,
            withArtistLink: !N,
          }),
          playButtonCellRender: I,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: e,
            className: _().controlsBarCell,
            ignoreDislikedStyles: b,
            utmLink: i.contextData.utmLink,
          }),
          beforeBlock: p
            ? (0, a.jsx)(d.x, {
                className: (0, r.W)(_().dots, y),
                isDragging: C,
              })
            : void 0,
          ...A,
          ...(0, s.BA)(s.bG.track.TRACK_AUDIOBOOK),
        });
      });
      var y = i(48943);
      let T = (0, n.Pi)((t) => {
          let {
              track: e,
              playContextParams: i,
              withPodcastName: n = !1,
              className: m,
              withDNDBlock: k,
              isDragging: p,
              draggingClassName: x,
              withTimeLeftText: C,
              ignoreDislikedStyles: T,
              beforeTitle: b,
            } = t,
            h = (0, o.qmq)({ playContextParams: i, entityId: e.entityId }),
            {
              settings: { isMobile: g },
            } = (0, o.oR4)(),
            f = (0, l.useCallback)(
              (t) =>
                (0, a.jsx)(c.Df, {
                  isAvailable: e.isAvailable,
                  isDisliked: e.isDisliked,
                  coverUri: e.coverUri,
                  title: e.title,
                  className: _().playButtonCell,
                  ignoreDislikedStyles: T,
                  ...t,
                }),
              [T, e.coverUri, e.isAvailable, e.isDisliked, e.title],
            );
          return (0, a.jsx)(v.Track, {
            className: (0, r.W)(m, {
              [_().trackWithDots]: k,
              [_().important]: k,
            }),
            track: e,
            meta: (0, a.jsx)(y.PodcastMeta, {
              beforeTitle: b,
              track: e,
              playContextParams: i,
              withPodcastName: n,
              withListeningProgress: !0,
              withTimeLeftText: C,
              ignoreDislikedStyles: T,
              explicitSize: "xxxs",
              withAlbumTitleLink: !g,
            }),
            playButtonCellRender: f,
            controls: (0, a.jsx)(u.ControlsBar, {
              track: e,
              className: _().controlsBarCell,
              ignoreDislikedStyles: T,
              utmLink: i.contextData.utmLink,
            }),
            beforeBlock: k
              ? (0, a.jsx)(d.x, {
                  className: (0, r.W)(_().dots, x),
                  isDragging: p,
                })
              : void 0,
            ...h,
            ...(0, s.BA)(s.bG.track.TRACK_PODCAST),
          });
        }),
        b = (0, n.Pi)((t) => {
          let e = t.track;
          return e.isTrackAudiobook || e.isTrackFairyTale
            ? (0, a.jsx)(C, { ...t })
            : (0, a.jsx)(T, { ...t });
        });
    },
    13743: function (t, e, i) {
      "use strict";
      var a, n;
      i.d(e, {
        c: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).ALBUM = "album"),
        (n.PLAYLIST = "playlist");
    },
    14424: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylist: function () {
          return x;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(65067),
        s = i(35846),
        o = i(93093),
        c = i(13534),
        d = i(97141),
        u = i(10510),
        m = i(88594),
        k = i(43406),
        v = i(59920),
        p = i(30054),
        _ = i.n(p);
      let x = (0, r.Pi)((t) => {
        var e;
        let {
            track: i,
            playContextParams: r,
            className: p,
            withDNDBlock: x,
            isDragging: C,
            draggingClassName: y,
            ignoreDislikedStyles: T,
            withSecondaryColor: b,
            activeFilter: h,
            activeFilterIndex: g,
            handleRemove: f,
            withDislike: A,
            withTrailer: N = !0,
            beforeTitle: I,
          } = t,
          L = (0, c.qmq)({ playContextParams: r, entityId: i.entityId }),
          {
            settings: { isMobile: j },
          } = (0, c.oR4)(),
          D = (0, c.nmn)({ objectId: i.id, tabId: h, tabPos: g }),
          P = (0, o.W)((t) => {
            t && D();
          }),
          R = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(d.Df, {
                isAvailable: i.isAvailable,
                isDisliked: i.isDisliked,
                coverUri: i.coverUri,
                title: i.title,
                className: _().playButtonCell,
                ignoreDislikedStyles: T,
                ...t,
              }),
            [T, i.coverUri, i.isAvailable, i.isDisliked, i.title],
          );
        return (0, a.jsx)(v.Track, {
          className: (0, n.W)(p, {
            [_().trackWithDots]: x,
            [_().important]: x,
          }),
          track: i,
          beforeBlock: x
            ? (0, a.jsx)(u.x, {
                className: (0, n.W)(_().dots, y),
                isDragging: C,
              })
            : void 0,
          meta: (0, a.jsx)(k.TrackMeta, {
            withArtistLink: !j,
            beforeTitle: I,
            track: i,
            ignoreDislikedStyles: T,
            withSecondaryColor: b,
          }),
          playButtonCellRender: R,
          controls: (0, a.jsx)(m.ControlsBar, {
            track: i,
            className: _().controlsBarCell,
            ignoreDislikedStyles: T,
            utmLink:
              null === (e = r.contextData) || void 0 === e ? void 0 : e.utmLink,
            withSecondaryColor: b,
            handleRemove: f,
            withDislike: A,
            withTrailer: N,
          }),
          onPlayClick: P,
          ...L,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    65409: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackPlaylist: function () {
          return v;
        },
      });
      var a = i(75441),
        n = i(62569),
        r = i(65067),
        l = i(35846),
        s = i(13534),
        o = i(97141),
        c = i(88594),
        d = i(43406),
        u = i(59920),
        m = i(30054),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            onPlayClick: n,
            onLikeClick: m,
            onDislikeClick: v,
          } = t,
          {
            trailer: p,
            settings: { isMobile: _ },
          } = (0, s.oR4)(),
          x = (0, s.qmq)({
            playContextParams: i,
            entityId: e.entityId,
            sonataState: p.state,
            playbackId: s.jiA.TRAILER,
          }),
          C = (0, r.useCallback)(
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
        return (0, a.jsx)(u.Track, {
          track: e,
          meta: (0, a.jsx)(d.TrackMeta, { withArtistLink: !_, track: e }),
          playButtonCellRender: C,
          onPlayClick: n,
          controls: (0, a.jsx)(c.ControlsBar, {
            track: e,
            className: k().controlsBarCell,
            onLikeClick: m,
            onDislikeClick: v,
          }),
          ...x,
          ...(0, l.BA)(l.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    52557: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylistAddition: function () {
          return _;
        },
      });
      var a = i(75441),
        n = i(62569),
        r = i(65067),
        l = i(9317),
        s = i(35846),
        o = i(68208),
        c = i(69756),
        d = i(13534),
        u = i(97141),
        m = i(43406),
        k = i(59920),
        v = i(38323),
        p = i.n(v);
      let _ = (0, n.Pi)((t) => {
        let { className: e, track: i, playContextParams: n, onClick: v } = t,
          { formatMessage: _ } = (0, l.Z)(),
          {
            settings: { isMobile: x },
          } = (0, d.oR4)(),
          C = (0, d.qmq)({ playContextParams: n, entityId: i.entityId }),
          y = (0, r.useCallback)(
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
          T = (0, r.useCallback)(
            (t) => {
              t.stopPropagation(), null == v || v(i);
            },
            [i, v],
          ),
          b = (0, r.useMemo)(
            () =>
              (0, a.jsx)("div", {
                className: p().controls,
                children: (0, a.jsx)(o.Button, {
                  className: p().button,
                  variant: "text",
                  size: "xs",
                  radius: "xxxl",
                  "aria-label": _({
                    id: "interface-actions.add-track-to-playlist",
                  }),
                  onClick: T,
                  icon: (0, a.jsx)(c.Icon, { size: "xxs", variant: "add" }),
                }),
              }),
            [_, T],
          );
        return (0, a.jsx)(k.Track, {
          className: e,
          track: i,
          meta: (0, a.jsx)(m.TrackMeta, { withArtistLink: !x, track: i }),
          playButtonCellRender: y,
          controls: b,
          ...C,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST_ADDITION),
        });
      });
    },
    29232: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackUgcUpload: function () {
          return _;
        },
      });
      var a = i(75441),
        n = i(32358),
        r = i(62569),
        l = i(65067),
        s = i(9317),
        o = i(15937),
        c = i(35846),
        d = i(68208),
        u = i(17392),
        m = i(32399),
        k = i(97141),
        v = i(43585),
        p = i.n(v);
      let _ = (0, r.Pi)((t) => {
        var e;
        let { className: i, track: r } = t,
          { formatMessage: v } = (0, s.Z)(),
          _ = null === (e = r.file) || void 0 === e ? void 0 : e.name,
          x = (0, l.useCallback)(() => {
            r.abortUpload();
          }, [r]),
          C = (0, l.useCallback)(() => {
            r.retryUpload();
          }, [r]),
          y = (0, l.useMemo)(
            () =>
              (0, a.jsx)(d.Button, {
                variant: "text",
                withRipple: !1,
                "aria-label": v({ id: "ugc.cancel-upload" }),
                color: "primary",
                onClick: x,
                ...(0, c.BA)(c.bG.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON),
                children: (0, a.jsx)(u.Caption, {
                  variant: "span",
                  size: "m",
                  type: "text",
                  className: p().button,
                  children: (0, a.jsx)(o.Z, { id: "ugc.cancel-upload" }),
                }),
              }),
            [x, v],
          ),
          T = (0, l.useMemo)(
            () =>
              (0, a.jsx)(d.Button, {
                variant: "text",
                withRipple: !1,
                "aria-label": v({ id: "ugc.repeat-upload" }),
                color: "primary",
                onClick: C,
                ...(0, c.BA)(c.bG.track.UGC_TRACK_RETRY_UPLOAD_BUTTON),
                children: (0, a.jsx)(u.Caption, {
                  variant: "span",
                  size: "m",
                  type: "text",
                  className: p().button,
                  children: (0, a.jsx)(o.Z, { id: "ugc.repeat-upload" }),
                }),
              }),
            [v, C],
          ),
          b = (0, l.useMemo)(() => {
            switch (r.loadingState) {
              case m.cU.IDLE:
              case m.cU.PREPARE:
              case m.cU.UPLOADING:
                return y;
              case m.cU.REJECT:
                return T;
              default:
                return null;
            }
          }, [y, T, r.loadingState]),
          h = (0, l.useMemo)(() => {
            switch (r.loadingState) {
              case m.cU.IDLE:
              case m.cU.PREPARE:
              case m.cU.UPLOADING:
                return (0, a.jsx)(u.Caption, {
                  variant: "div",
                  size: "m",
                  className: p().status,
                  ...(0, c.BA)(
                    c.bG.track.UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT,
                  ),
                  children: (0, a.jsx)(o.Z, {
                    id: "ugc.track-uploading-pending-status",
                  }),
                });
              case m.cU.PROCESSING:
              case m.cU.RESOLVE:
                return (0, a.jsx)(u.Caption, {
                  variant: "div",
                  size: "m",
                  className: p().status,
                  children: (0, a.jsx)(o.Z, {
                    id: "ugc.track-uploading-processing-status",
                  }),
                });
              case m.cU.REJECT:
                return (0, a.jsx)(u.Caption, {
                  variant: "div",
                  size: "m",
                  className: p().status,
                  ...(0, c.BA)(
                    c.bG.track.UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT,
                  ),
                  children: (0, a.jsx)(o.Z, {
                    id: "ugc.track-uploading-error-status",
                  }),
                });
              default:
                return null;
            }
          }, [r.loadingState]);
        return (0, a.jsxs)(k.Md, {
          "aria-label": _,
          className: (0, n.W)(p().root, p().card, p().important, i),
          ...(0, c.BA)(c.bG.track.UGC_TRACK),
          children: [
            (0, a.jsx)(k.Df, { title: _, className: p().playButton }),
            (0, a.jsxs)("div", {
              className: p().meta,
              children: [
                (0, a.jsx)(u.Caption, {
                  variant: "div",
                  size: "m",
                  className: p().title,
                  ...(0, c.BA)(c.bG.track.UGC_TRACK_TITLE),
                  children: _,
                }),
                h,
              ],
            }),
            (0, a.jsx)("div", { className: p().controls, children: b }),
          ],
        });
      });
    },
    47902: function (t) {
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
    64567: function (t) {
      t.exports = {
        root: "DisclaimerModal_root__sidbk",
        content: "DisclaimerModal_content___tRvp",
      };
    },
    68828: function (t) {
      t.exports = {
        root: "DragAndDropIcon_root__OstQU",
        root_active: "DragAndDropIcon_root_active__xOTKt",
      };
    },
    84639: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "CommonControlsBar_root__N8b0F",
        root_withSecondaryColor:
          "CommonControlsBar_root_withSecondaryColor__4Y1P_",
        item: "CommonControlsBar_item__qGErG",
        contextMenu: "CommonControlsBar_contextMenu__EAq_c",
        contextMenu_visible: "CommonControlsBar_contextMenu_visible__M0ry0",
        contextMenuWrapper: "CommonControlsBar_contextMenuWrapper__XjkaL",
        lightning: "CommonControlsBar_lightning__o7wrY",
        ugcIcon: "CommonControlsBar_ugcIcon__OV0Cl",
        lightning_withOffset: "CommonControlsBar_lightning_withOffset__LGvUS",
        duration: "CommonControlsBar_duration__un38A",
        duration_hidden: "CommonControlsBar_duration_hidden__noQ4S",
        alwaysVisibleDuration: "CommonControlsBar_alwaysVisibleDuration__3V6gl",
        controls: "CommonControlsBar_controls__QrogT",
        trailerIcon: "CommonControlsBar_trailerIcon__ZHSBo",
        dislikeIcon: "CommonControlsBar_dislikeIcon__Ys_Od",
        removeButton: "CommonControlsBar_removeButton__35xHY",
        controls_disabled: "CommonControlsBar_controls_disabled__0RmLo",
        explicitMark: "CommonControlsBar_explicitMark__3I_Op",
        controls_dislikedControls:
          "CommonControlsBar_controls_dislikedControls__mMjKC",
        likeIcon: "CommonControlsBar_likeIcon__YqgZY",
        controls_dislikedColors:
          "CommonControlsBar_controls_dislikedColors__h5lev",
        downloadIcon: "CommonControlsBar_downloadIcon__2mM6m",
        popover: "CommonControlsBar_popover__6bmNd",
      };
    },
    11427: function (t) {
      t.exports = {
        downloadingProgress: "TrackDownloadControl_downloadingProgress__wNg2W",
        progress: "TrackDownloadControl_progress__K_OhO",
      };
    },
    81910: function (t) {
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
    49626: function (t) {
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
        explicitMarkContainer: "Meta_explicitMarkContainer__BxMQg",
        metaContainer: "Meta_metaContainer__7i2dp",
        titleContainer_withVersion: "Meta_titleContainer_withVersion__n7MdY",
      };
    },
    17817: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
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
    96066: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "PlayButtonWithPosition_root__H5FYg",
        playButton: "PlayButtonWithPosition_playButton__7cfDQ",
        playButtonIcon: "PlayButtonWithPosition_playButtonIcon___cLAL",
        playingAnimation: "PlayButtonWithPosition_playingAnimation__Hy5rC",
        position: "PlayButtonWithPosition_position__wk3OT",
        root_current: "PlayButtonWithPosition_root_current__FCDLJ",
        root_playing: "PlayButtonWithPosition_root_playing__RpnYU",
        root_disabled: "PlayButtonWithPosition_root_disabled__PMV24",
        root_disliked: "PlayButtonWithPosition_root_disliked__NIZzA",
      };
    },
    36514: function (t) {
      t.exports = {
        root: "CommonTrack_root__i6shE",
        root_disabled: "CommonTrack_root_disabled__vDyCm",
        ripple: "CommonTrack_ripple__wnpUs",
      };
    },
    14742: function (t) {
      t.exports = {
        root: "ContextMenuPlaylistItem_root__WU_1g",
        icon: "ContextMenuPlaylistItem_icon__U79vo",
      };
    },
    55182: function (t) {
      t.exports = { shimmer: "ContextMenuPlaylistItemShimmer_shimmer__bQ2Yb" };
    },
    92060: function (t) {
      t.exports = {
        root: "ContextMenuPlaylistsList_root__Greny",
        listPlaylist: "ContextMenuPlaylistsList_listPlaylist__0oWLm",
        shimmerEndItem: "ContextMenuPlaylistsList_shimmerEndItem__1K0_w",
        favouritesPlaylistItem:
          "ContextMenuPlaylistsList_favouritesPlaylistItem__qYrTR",
        icon: "ContextMenuPlaylistsList_icon__Fhxnh",
      };
    },
    70463: function (t) {
      t.exports = {
        menu: "ContextSubMenuAddToPlaylist_menu__76MDp",
        listMenu: "ContextSubMenuAddToPlaylist_listMenu__e3qCt",
      };
    },
    88388: function (t) {
      t.exports = { syncLyrics: "TrackContextMenu_syncLyrics___CDVn" };
    },
    48125: function (t) {
      t.exports = {
        cancelIcon: "TrackContextMenuDownloadItem_cancelIcon__0YF_e",
        root: "TrackContextMenuDownloadItem_root__BALdW",
        downloadingProgress:
          "TrackContextMenuDownloadItem_downloadingProgress__Xmtgm",
        progress: "TrackContextMenuDownloadItem_progress__FMBws",
      };
    },
    11881: function (t) {
      t.exports = { ugcLabel: "TrackContextMenuHeader_ugcLabel__k7hmv" };
    },
    45421: function (t) {
      t.exports = { writers: "Lyrics_writers__xvrNp" };
    },
    82930: function (t) {
      t.exports = {
        root: "TrackCard_root__kIpe1",
        controls: "TrackCard_controls__E7Y3L",
        cover: "TrackCard_cover__tkVPB",
        coverBlock: "TrackCard_coverBlock__WdvvQ",
        coverBlock_withTrackLink: "TrackCard_coverBlock_withTrackLink__fDe6k",
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
    59570: function (t) {
      t.exports = {
        playButtonCell: "PromoLandingTrackAlbum_playButtonCell__5ZuIk",
        controlsBarCell: "PromoLandingTrackAlbum_controlsBarCell__Hapyd",
      };
    },
    68922: function (t) {
      t.exports = {
        playButtonCell: "TrackAlbum_playButtonCell__pLJte",
        controlsBarCell: "TrackAlbum_controlsBarCell__XUUCc",
      };
    },
    61932: function (t) {
      t.exports = {
        playButtonCell: "TrackChart_playButtonCell__cvY7u",
        controlsBarCell: "TrackChart_controlsBarCell__Xd5pn",
        chartCell: "TrackChart_chartCell__33_al",
      };
    },
    69514: function (t) {
      t.exports = {
        playButtonCell: "TrackNonMusic_playButtonCell__HaJrc",
        controlsBarCell: "TrackNonMusic_controlsBarCell__zWt44",
        dots: "TrackNonMusic_dots__Wom40",
        trackWithDots: "TrackNonMusic_trackWithDots__v2VbZ",
        important: "TrackNonMusic_important__u29Uj",
      };
    },
    30054: function (t) {
      t.exports = {
        playButtonCell: "TrackPlaylist_playButtonCell__Q6YT_",
        controlsBarCell: "TrackPlaylist_controlsBarCell__6clda",
        dots: "TrackPlaylist_dots__nLYej",
        trackWithDots: "TrackPlaylist_trackWithDots__EU6LD",
        important: "TrackPlaylist_important__n8Tjb",
      };
    },
    38323: function (t) {
      t.exports = {
        playButtonCell: "TrackPlaylistAddition_playButtonCell__Ocnhq",
        controls: "TrackPlaylistAddition_controls__S346Y",
        button: "TrackPlaylistAddition_button__fsY9k",
      };
    },
    43585: function (t) {
      t.exports = {
        root: "CommonTrack_root__i6shE",
        card: "TrackUgcUpload_card__bidIG",
        important: "TrackUgcUpload_important__RQkp0",
        playButton: "TrackUgcUpload_playButton__3l2I7",
        meta: "TrackUgcUpload_meta__aHQv9",
        title: "TrackUgcUpload_title__Xq3UP",
        status: "TrackUgcUpload_status__aFGvl",
        controls: "TrackUgcUpload_controls__Ie2Ox",
      };
    },
    15186: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return a;
        },
        i: function () {
          return n;
        },
      });
      let a = (t) => String(t).split(":"),
        n = (t, e) => (e ? [t, e].join(":") : t);
    },
    48937: function (t, e, i) {
      "use strict";
      var a, n;
      i.d(e, {
        y: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).TEXT = "TEXT"),
        (n.LRC = "LRC"),
        (n.RICH_JSON = "RICH_JSON");
    },
    67802: function (t, e, i) {
      "use strict";
      i.d(e, {
        Q: function () {
          return n;
        },
      });
      var a = i(84638);
      function n(t) {
        return (null == t ? void 0 : t.data.type) === a.A.Generative;
      }
    },
    43398: function (t, e, i) {
      "use strict";
      var a, n;
      i.d(e, {
        Z: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).Album = "album"),
        (n.Artist = "artist"),
        (n.Playlist = "playlist"),
        (n.Radio = "radio"),
        (n.Other = "other"),
        (n.Search = "search");
    },
  },
]);
