(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3750],
  {
    57110: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 60878));
    },
    26406: function (e, t, i) {
      "use strict";
      i.d(t, {
        Ji: function () {
          return c;
        },
      });
      var a,
        n,
        o,
        r,
        l = i(43218),
        s = i(65067),
        d = i(9317);
      ((a = o || (o = {})).formatDate = "FormattedDate"),
        (a.formatTime = "FormattedTime"),
        (a.formatNumber = "FormattedNumber"),
        (a.formatList = "FormattedList"),
        (a.formatDisplayName = "FormattedDisplayName"),
        ((n = r || (r = {})).formatDate = "FormattedDateParts"),
        (n.formatTime = "FormattedTimeParts"),
        (n.formatNumber = "FormattedNumberParts"),
        (n.formatList = "FormattedListParts");
      var u = function (e) {
        var t = (0, d.Z)(),
          i = e.value,
          a = e.children,
          n = (0, l.__rest)(e, ["value", "children"]);
        return a(t.formatNumberToParts(i, n));
      };
      function m(e) {
        var t = function (t) {
          var i = (0, d.Z)(),
            a = t.value,
            n = t.children,
            o = (0, l.__rest)(t, ["value", "children"]),
            r = "string" == typeof a ? new Date(a || 0) : a;
          return n(
            "formatDate" === e
              ? i.formatDateToParts(r, o)
              : i.formatTimeToParts(r, o),
          );
        };
        return (t.displayName = r[e]), t;
      }
      function v(e) {
        var t = function (t) {
          var i = (0, d.Z)(),
            a = t.value,
            n = t.children,
            o = (0, l.__rest)(t, ["value", "children"]),
            r = i[e](a, o);
          if ("function" == typeof n) return n(r);
          var u = i.textComponent || s.Fragment;
          return s.createElement(u, null, r);
        };
        return (t.displayName = o[e]), t;
      }
      (u.displayName = "FormattedNumberParts"),
        (u.displayName = "FormattedNumberParts");
      var c = v("formatDate");
      v("formatTime"),
        v("formatNumber"),
        v("formatList"),
        v("formatDisplayName"),
        m("formatDate"),
        m("formatTime");
    },
    60878: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(75441),
        n = i(98730),
        o = i(65067),
        r = i(10280),
        l = i(13534);
      t.default = () => {
        let e = (0, n.useSearchParams)().get("albumId");
        return (
          (e && (0, l.aBB)(e)) || (0, n.notFound)(),
          (0, a.jsx)(o.Suspense, { children: (0, a.jsx)(r.Xb, { albumId: e }) })
        );
      };
    },
    54306: function (e, t, i) {
      "use strict";
      i.d(t, {
        wQ: function () {
          return G;
        },
        Bd: function () {
          return T;
        },
        s$: function () {
          return C;
        },
        lj: function () {
          return D.PromoLandingSonataControls;
        },
        $Z: function () {
          return R.RepeatButton;
        },
        P4: function () {
          return F.ShuffleButton;
        },
        WP: function () {
          return L.SonataControls;
        },
        ps: function () {
          return I;
        },
        NI: function () {
          return x.SonataVideoControls;
        },
        jN: function () {
          return V;
        },
        uA: function () {
          return l;
        },
        RN: function () {
          return d;
        },
        B5: function () {
          return v;
        },
        tz: function () {
          return c.useOnRepeatClick;
        },
        md: function () {
          return b.useOnShuffleClick;
        },
        K4: function () {
          return g.useToggleMute;
        },
      });
      var a = i(22874),
        n = i(81046),
        o = i(64353),
        r = i(13534);
      let l = (e) => {
        if (e.data.type === n.A.Clip) {
          var t;
          let i = e.data.meta;
          if (!i.clipId) return null;
          let n =
              null === (t = i.artists) || void 0 === t
                ? void 0
                : t.map((e) => (0, o.tR)({ artist: e })),
            { available: l, disclaimers: s } = (0, r.NuW)(i);
          return (0, a.pj)({
            clipId: i.clipId,
            title: i.title,
            thumbnail: i.thumbnail,
            duration: i.duration,
            previewUrl: i.previewUrl,
            isAvailable: l,
            disclaimers: s,
            artists: n,
            isHiddenFromSonataQueue: e.hidden,
          });
        }
        return null;
      };
      var s = i(98375);
      let d = (e, t) => ({ type: s.RX.Unloaded, meta: { id: e, albumId: t } });
      var u = i(73447),
        m = i(32399);
      let v = (e) => {
        var t, i, l;
        switch (e.data.type) {
          case n.A.Generative: {
            let i = e.data.meta,
              n = (0, r.Usz)(null == i ? void 0 : i.derivedColors);
            return (0, a.pj)({
              id: String(i.id),
              coverUri: i.imageUrl,
              title: null !== (t = i.title) && void 0 !== t ? t : "",
              isAvailable: !0,
              isRemoved: !1,
              averageColor: n,
            });
          }
          case n.A.Clip:
          case s.RX.Unloaded:
            return null;
          default: {
            let t = e.data.meta,
              n =
                null === (i = t.artists) || void 0 === i ? void 0 : i.map(o.d),
              r = null === (l = t.albums) || void 0 === l ? void 0 : l.map(u.N);
            return (0, a.pj)({
              ...(0, m.Ni)(t),
              artists: n,
              albums: r,
              isHiddenFromSonataQueue: e.hidden,
            });
          }
        }
      };
      var c = i(61925),
        b = i(33856),
        g = i(70419),
        p = i(23172),
        A = i(37285),
        h = i(84638),
        f = i(95817),
        y = i(6232);
      let E = a.V5.model("UnloadedEntityMeta", {
          id: a.V5.union(a.V5.number, a.V5.string),
          albumId: a.V5.maybe(a.V5.union(a.V5.number, a.V5.string)),
        }),
        V = a.V5.model("UnloadedEntityData", {
          meta: E,
          type: a.V5.literal(s.RX.Unloaded),
        });
      var N = i(94123),
        S = i(89428);
      let C = m.yp
          .props({
            artists: a.V5.array(o.Go),
            albums: a.V5.array(u.KX),
            chart: a.V5.maybe(S.BH),
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
              var n, o;
              return null !==
                (o = null === (n = e.albums) || void 0 === n ? void 0 : n[0]) &&
                void 0 !== o
                ? o
                : null;
            },
            get index() {
              var r, l, s;
              return null !==
                (s =
                  null === (l = e.albums[0]) || void 0 === l
                    ? void 0
                    : null === (r = l.trackPosition) || void 0 === r
                      ? void 0
                      : r.index) && void 0 !== s
                ? s
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
              return e.type === N.V.AUDIOBOOK;
            },
            get isFairyTale() {
              return e.type === N.V.FAIRY_TALE;
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
              let { ugcResource: n, modelActionsLogger: l } = (0, a.dU)(e);
              if (
                e.artists.map((e) => e.name).join(", ") === i &&
                t === e.title
              )
                return r.SLo.OK;
              try {
                var s;
                yield n.changeTrack({ trackId: e.id, title: t, artist: i }),
                  (e.title = t);
                let l =
                  (null === (s = e.artists[0]) || void 0 === s
                    ? void 0
                    : s.id) || "0";
                if (((e.artists = (0, a.pj)([])), i)) {
                  let t = o.Go.create({ id: l, name: i, isAvailable: !0 });
                  e.artists = (0, a.pj)([t]);
                }
                return r.SLo.OK;
              } catch (e) {
                return l.error(e), r.SLo.ERROR;
              }
            }),
          })),
        G = a.V5.model("BaseSonataState", {
          contextType: a.V5.maybeNull(a.V5.enumeration(Object.values(h.A))),
          contextId: a.V5.maybeNull(a.V5.string),
          entityMeta: a.V5.maybeNull(C),
          status: a.V5.enumeration(Object.values(s.FY)),
          canMoveForward: a.V5.boolean,
          canMoveBackward: a.V5.boolean,
          canSpeed: a.V5.boolean,
          repeatMode: a.V5.enumeration(Object.values(y.zq)),
          canChangeRepeatMode: a.V5.boolean,
          volume: a.V5.maybe(a.V5.number),
          speed: a.V5.maybe(a.V5.number),
          position: a.V5.maybeNull(a.V5.number),
          duration: a.V5.maybeNull(a.V5.number),
          canShuffle: a.V5.boolean,
          shuffle: a.V5.boolean,
          quality: a.V5.enumeration(Object.values(f.n)),
          unloadedEntitiesData: a.V5.maybe(a.V5.array(V)),
        })
          .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
          .views((e) => ({
            get unloadedEntitiesDataFromModels() {
              var t;
              return null !== (t = e.volatileUnloadedEntitiesData) &&
                void 0 !== t
                ? t
                : (0, A.ZN)(e.unloadedEntitiesData);
            },
            get isVibeContext() {
              return e.contextType === h.A.Vibe;
            },
            get isGenerativeContext() {
              return e.contextType === h.A.Generative;
            },
            get isPaused() {
              return e.status === s.FY.PAUSED;
            },
            get isPlaying() {
              return e.status === s.FY.PLAYING;
            },
            get isContextRepeatMode() {
              return e.repeatMode === y.zq.CONTEXT;
            },
            get isOneRepeatMode() {
              return e.repeatMode === y.zq.ONE;
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
              t && t.data.meta && (e.entityMeta = v(t));
            },
            setUnloadedEntitiesData: (t) => {
              t &&
                ((e.volatileUnloadedEntitiesData = (0, p.Z)(t)),
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
        T = i(14924)
          .Vc.props({
            artists: a.V5.array(o.Go),
            isHiddenFromSonataQueue: a.V5.maybe(a.V5.boolean),
          })
          .views((e) => ({
            get idWithContext() {
              return String(e.clipId);
            },
          })),
        I = G.props({
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
      var D = i(80045),
        R = i(94544),
        F = i(54723),
        L = i(91978),
        x = i(32715);
    },
    10280: function (e, t, i) {
      "use strict";
      i.d(t, {
        Xb: function () {
          return x.AlbumPage;
        },
        Lf: function () {
          return L;
        },
        iL: function () {
          return P;
        },
      }),
        i(74030);
      var a,
        n,
        o,
        r = i(22874),
        l = i(62726),
        s = i(14617),
        d = i(97472),
        u = i(44679),
        m = i(94123);
      ((n || (n = {})).RECENT_ALBUMS = "recent-albums"),
        ((a = o || (o = {}))[(a.DAY = 1)] = "DAY"),
        (a[(a.WEEK = 7)] = "WEEK"),
        (a[(a.MONTH = 30)] = "MONTH");
      var v = i(34990),
        c = i(39307),
        b = i(72783),
        g = i(5104),
        p = i(54306),
        A = i(1150),
        h = i(73447),
        f = i(13534),
        y = i(40892);
      let E = (e) =>
          (0, r.pj)({
            type: h.lf.TEXT,
            data: null != e ? e : null,
            loadingState: f.Gui.RESOLVE,
          }),
        V = (e) => {
          var t;
          let { data: i, ...a } = e;
          return (0, r.pj)({
            type:
              null !== (t = null == i ? void 0 : i.type) && void 0 !== t
                ? t
                : m.V.TRACK,
            data: null != i ? i : null,
            ...a,
          });
        },
        N = (e, t) => e.map((e) => "".concat(e, ":").concat(t)),
        S = (e) => "".concat(e, "-text"),
        C = (e) => String(e),
        G = (e) =>
          (0, r.pj)({
            id: e.id,
            type: e.type,
            title: e.title,
            albums: e.albums.map(b.ym),
          }),
        T = (e) => !!(e && "position" in e),
        I = r.V5.compose(
          r.V5.model("AlbumDonations", {
            items: r.V5.maybeNull(r.V5.array(g.Ew)),
          }),
          y.Al,
          y.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = f.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        D = r.V5.model("LabelItem", { id: r.V5.number, name: r.V5.string }),
        R = r.V5.compose(
          r.V5.model("RelatedAlbumsPage", { items: r.V5.array(b.ug) }),
          y.Al,
          y.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = f.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        F = r.V5.compose(
          r.V5.model("RelatedContent", {
            items: r.V5.maybeNull(r.V5.array(c.fd)),
          }),
          y.Al,
          y.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = f.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        L = r.V5.compose(
          r.V5.model("AlbumPage", {
            id: r.V5.maybeNull(r.V5.number),
            meta: r.V5.maybeNull(b.ug),
            items: r.V5.array(c.JP),
            indexItems: r.V5.map(r.V5.array(r.V5.number)),
            errorStatusCode: r.V5.maybeNull(r.V5.number),
            deprecationTargetAlbumId: r.V5.maybeNull(r.V5.number),
            latestGenreAlbums: r.V5.maybe(R),
            otherArtistAlbums: r.V5.maybe(R),
            otherAlbumVersions: r.V5.maybe(r.V5.array(b.ug)),
            labels: r.V5.maybeNull(r.V5.array(D)),
            description: r.V5.maybe(r.V5.string),
            donations: r.V5.maybe(I),
            relatedContent: r.V5.maybe(F),
            allTracksUnfinished: r.V5.boolean,
          }),
          y.ie,
          y.Al,
          y.fu,
        )
          .views((e) => {
            let t = {
              get isOtherArtistAlbumsAvailable() {
                var i, a, n, o, s;
                return !!(
                  !(null === (i = e.meta) || void 0 === i
                    ? void 0
                    : i.isNonMusic) &&
                  (null === (n = e.meta) || void 0 === n
                    ? void 0
                    : null === (a = n.artists) || void 0 === a
                      ? void 0
                      : a.length) === 1 &&
                  !(null === (s = e.meta) || void 0 === s
                    ? void 0
                    : null === (o = s.artists[0]) || void 0 === o
                      ? void 0
                      : o.various)
                );
              },
              get isLatestGenreAlbumsAvailable() {
                var d, u;
                return !!(
                  !(null === (d = e.meta) || void 0 === d
                    ? void 0
                    : d.isNonMusic) &&
                  (null === (u = e.meta) || void 0 === u ? void 0 : u.genre)
                );
              },
              get isNotFound() {
                return (
                  e.isRejected &&
                  (e.errorStatusCode === l.CN.NOT_FOUND ||
                    e.errorStatusCode === l.CN.BAD_REQUEST)
                );
              },
              get isCacheNotFound() {
                return e.isRejected && e.errorStatusCode === v.DW;
              },
              get hasDonations() {
                var m;
                return !!(
                  (null === (m = e.donations) || void 0 === m
                    ? void 0
                    : m.isResolved) &&
                  e.donations &&
                  e.donations.items &&
                  e.donations.items.length > 0
                );
              },
              get hasOtherAlbumVersions() {
                return !!(
                  e.isNeededToLoad ||
                  e.loadingState === f.Gui.PENDING ||
                  (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
                );
              },
              get hasLatestGenreAlbums() {
                var c, b;
                let i =
                  e.latestGenreAlbums &&
                  e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0;
                return !!(
                  t.isLatestGenreAlbumsAvailable &&
                  ((null === (c = e.latestGenreAlbums) || void 0 === c
                    ? void 0
                    : c.isNeededToLoad) ||
                    (null === (b = e.latestGenreAlbums) || void 0 === b
                      ? void 0
                      : b.isLoading) ||
                    i)
                );
              },
              get hasOtherArtistAlbums() {
                var g, p;
                let i =
                  e.otherArtistAlbums &&
                  e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0;
                return !!(
                  t.isOtherArtistAlbumsAvailable &&
                  ((null === (g = e.otherArtistAlbums) || void 0 === g
                    ? void 0
                    : g.isNeededToLoad) ||
                    (null === (p = e.otherArtistAlbums) || void 0 === p
                      ? void 0
                      : p.isLoading) ||
                    i)
                );
              },
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === f.Gui.PENDING;
              },
              get isLatestGenreAlbumsLoading() {
                var A, y;
                return !!(
                  (null === (A = e.latestGenreAlbums) || void 0 === A
                    ? void 0
                    : A.isNeededToLoad) ||
                  (null === (y = e.latestGenreAlbums) || void 0 === y
                    ? void 0
                    : y.isLoading)
                );
              },
              get isOtherArtistAlbumsLoading() {
                var E, V;
                return !!(
                  (null === (E = e.otherArtistAlbums) || void 0 === E
                    ? void 0
                    : E.isNeededToLoad) ||
                  (null === (V = e.otherArtistAlbums) || void 0 === V
                    ? void 0
                    : V.isLoading)
                );
              },
              get isRelatedContentLoading() {
                var N, S;
                return !!(
                  (null === (N = e.relatedContent) || void 0 === N
                    ? void 0
                    : N.isNeededToLoad) ||
                  (null === (S = e.relatedContent) || void 0 === S
                    ? void 0
                    : S.isLoading)
                );
              },
              get contextMeta() {
                var C, G, T, I, D, R, F, L, x;
                return {
                  id: e.meta.id,
                  title:
                    null === (C = e.meta) || void 0 === C ? void 0 : C.title,
                  coverUri:
                    null === (G = e.meta) || void 0 === G ? void 0 : G.coverUri,
                  type: null === (T = e.meta) || void 0 === T ? void 0 : T.type,
                  year: null === (I = e.meta) || void 0 === I ? void 0 : I.year,
                  version:
                    null === (D = e.meta) || void 0 === D ? void 0 : D.version,
                  genre:
                    null === (R = e.meta) || void 0 === R ? void 0 : R.genre,
                  likesCount:
                    null === (F = e.meta) || void 0 === F
                      ? void 0
                      : F.likesCount,
                  averageColor:
                    null === (L = e.meta) || void 0 === L
                      ? void 0
                      : L.averageColor,
                  available:
                    null === (x = e.meta) || void 0 === x
                      ? void 0
                      : x.isAvailable,
                };
              },
              get tracks() {
                return e.items.filter((e) => e.type !== h.lf.TEXT);
              },
              get lastEpisodes() {
                return t.tracks.slice(0, 5);
              },
              get lastEpisodesTrackIds() {
                return t.lastEpisodes.map((e) => e.id);
              },
              get hasLabel() {
                return !!(e.labels && e.labels.length);
              },
              get shouldShowLabel() {
                let { experiments: i } = (0, r.yj)(e);
                return (
                  t.hasLabel && i.checkExperiment(f.peG.WebNextLabelPage, "on")
                );
              },
              labelUrl: (e) => "/label/".concat(e),
            };
            return t;
          })
          .actions((e) => {
            let t = {
              makeFlatVolumeItems: (t) => {
                let i = 0;
                t.volumes.forEach((a) => {
                  t.volumes.length > 1 &&
                    a[0] &&
                    (e.items.push(E()),
                    e.indexItems.set(S(a[0].id), [e.items.length - 1])),
                    a.forEach((t) => {
                      e.items.push(
                        V({
                          id: t.id,
                          loadingState: f.Gui.IDLE,
                          positionInContext: i,
                        }),
                      );
                      let a = e.indexItems.get(String(t.id));
                      e.indexItems.set(
                        C(t.id),
                        a ? [...a, e.items.length - 1] : [e.items.length - 1],
                      ),
                        i++;
                    });
                });
              },
              updateVolumeItemsState: (t, i) => {
                t.forEach((t) => {
                  let a = e.indexItems.get(String(t));
                  null == a ||
                    a.forEach((a) => {
                      let n = e.items[a];
                      T(n) &&
                        (e.items[a] = V({
                          id: t,
                          loadingState: i,
                          positionInContext: n.positionInContext,
                          hasEverFinished: n.hasEverFinished,
                        }));
                    });
                });
              },
              insertDataToVolumeItems: (t) => {
                t.forEach((t, i) => {
                  let a = e.indexItems.get(C(t.id));
                  null == a ||
                    a.forEach((a) => {
                      var n, o, r, l, s;
                      let d = e.items[0],
                        u = e.items[a],
                        m = e.items[a - 1];
                      if (!T(u)) return;
                      let v =
                          T(d) && d.id === u.id
                            ? 1
                            : null === (r = t.albums) || void 0 === r
                              ? void 0
                              : null === (o = r[0]) || void 0 === o
                                ? void 0
                                : null === (n = o.trackPosition) || void 0 === n
                                  ? void 0
                                  : n.index,
                        c = null == u ? void 0 : u.positionInContext,
                        b =
                          T(m) && (null == m ? void 0 : m.position)
                            ? m.position + 1
                            : v,
                        g = (0, A.Vt)(t, {
                          hasEverFinished:
                            null == u ? void 0 : u.hasEverFinished,
                        });
                      if (g.isRemoved) {
                        e.items[a] = V({
                          id: t.id,
                          loadingState: f.Gui.REJECT,
                          positionInContext: c,
                          position: T(m) ? m.position : i,
                        });
                        return;
                      }
                      e.items[a] = V({
                        id: t.id,
                        loadingState: f.Gui.RESOLVE,
                        positionInContext: c,
                        data: g,
                        position:
                          (null == m ? void 0 : m.type) === h.lf.TEXT ? 1 : b,
                        isBest:
                          null === (s = e.meta) || void 0 === s
                            ? void 0
                            : null === (l = s.bestAlbumTracks) || void 0 === l
                              ? void 0
                              : l.includes(Number(t.id)),
                        hasEverFinished: null == u ? void 0 : u.hasEverFinished,
                      });
                    });
                  let n = e.indexItems.get(S(t.id));
                  null == n ||
                    n.forEach((i) => {
                      var a, n, o;
                      e.items[i] = E(
                        null === (o = t.albums) || void 0 === o
                          ? void 0
                          : null === (n = o[0]) || void 0 === n
                            ? void 0
                            : null === (a = n.trackPosition) || void 0 === a
                              ? void 0
                              : a.volume,
                      );
                    });
                });
              },
              afterCreate() {
                e.getDescriptionTexts();
              },
              setAlbumUnfinished: () => {
                var i;
                t.markUnfinished({ albumId: e.id || 0 }),
                  null === (i = e.meta) || void 0 === i || i.updateFinished(!1);
              },
              setAllTracksUnfinished: (t) => {
                e.allTracksUnfinished = t;
              },
              checkAllAlbumTrackFinished: () => {
                var i, a;
                e.items
                  .filter((e) => {
                    let { type: t, data: i } = e;
                    return i && t !== h.lf.TEXT;
                  })
                  .every((e) => {
                    var t;
                    let { data: i } = e;
                    return null == i
                      ? void 0
                      : null === (t = i.streamProgress) || void 0 === t
                        ? void 0
                        : t.hasEverFinished;
                  }) &&
                  ((null === (i = e.meta) || void 0 === i
                    ? void 0
                    : i.listeningFinished) ||
                    (t.markFinished({ albumId: Number(e.id) }),
                    null === (a = e.meta) ||
                      void 0 === a ||
                      a.updateFinished(!0)));
              },
              markTracksFinished: (t) => {
                let { withoutTracks: i = [] } = t;
                e.items.forEach((e) => {
                  if (e.type === h.lf.TEXT) return;
                  let { data: t } = e;
                  if (!(t && i.includes(t.id))) {
                    if (t) {
                      var a;
                      null === (a = t.streamProgress) ||
                        void 0 === a ||
                        a.updateEverFinished(!0);
                    } else e.updateEverFinished(!0);
                  }
                });
              },
              markFinished: (0, r.ls)(function* (t) {
                let { streamsResource: i, modelActionsLogger: a } = (0, r.dU)(
                  e,
                );
                try {
                  return yield i.markAlbumFinished(t);
                } catch (e) {
                  return a.error(e), s.P.ERROR;
                }
              }),
              markUnfinished: (0, r.ls)(function* (t) {
                let { streamsResource: i, modelActionsLogger: a } = (0, r.dU)(
                  e,
                );
                try {
                  return yield i.markAlbumUnfinished(t);
                } catch (e) {
                  return a.error(e), s.P.ERROR;
                }
              }),
              setListeningFinishedStatus: (0, r.ls)(function* () {
                var i;
                return (
                  null === (i = e.meta) || void 0 === i
                    ? void 0
                    : i.listeningFinished
                )
                  ? (t.setAllTracksUnfinished(!0),
                    yield t.markUnfinished({ albumId: Number(e.id) }))
                  : yield t.markFinished({ albumId: Number(e.id) });
              }),
              getLatestGenreAlbums: (0, r.ls)(function* (t) {
                let { topResource: i, modelActionsLogger: a } = (0, r.dU)(e);
                if (e.latestGenreAlbums && !e.latestGenreAlbums.isLoading)
                  try {
                    e.latestGenreAlbums.loadingState = f.Gui.PENDING;
                    let a = yield i.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, r.pj)(a.albums.map(b.ym))),
                      (e.latestGenreAlbums.loadingState = f.Gui.RESOLVE);
                  } catch (t) {
                    a.error(t),
                      (e.latestGenreAlbums.loadingState = f.Gui.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, r.ls)(function* (t, i) {
                let { artistsResource: a, modelActionsLogger: n } = (0, r.dU)(
                  e,
                );
                if (e.otherArtistAlbums && !e.otherArtistAlbums.isLoading)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = f.Gui.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = f.Gui.PENDING;
                    let n = yield a.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, r.pj)(
                      n.albums
                        .filter((e) => String(e.id) !== String(i))
                        .map(b.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = f.Gui.RESOLVE);
                  } catch (t) {
                    n.error(t),
                      (e.otherArtistAlbums.loadingState = f.Gui.REJECT);
                  }
              }),
              getTracks: (0, r.ls)(function* (i) {
                let { trackIds: a } = i,
                  { tracksResource: n, modelActionsLogger: o } = (0, r.dU)(e);
                try {
                  var l;
                  if (!(null === (l = e.meta) || void 0 === l ? void 0 : l.id))
                    return;
                  t.updateVolumeItemsState(a, f.Gui.PENDING);
                  let i = yield n.getTracksMeta({
                    trackIds: N(a, e.meta.id),
                    withProgress: !0,
                  });
                  t.insertDataToVolumeItems(i);
                } catch (e) {
                  o.error(e), t.updateVolumeItemsState(a, f.Gui.REJECT);
                }
              }),
              getDonations: (0, r.ls)(function* (t) {
                let { albumId: i } = t,
                  { experiments: a } = (0, r.yj)(e),
                  { donationResource: n, modelActionsLogger: o } = (0, r.dU)(e);
                if (
                  a.checkExperiment(f.peG.WebNextAlbumDonationButton, "on") &&
                  e.donations &&
                  !e.donations.isLoading
                )
                  try {
                    e.donations.loadingState = f.Gui.PENDING;
                    let { donations: t } = yield n.getAlbumDonations({
                      albumId: i,
                    });
                    t &&
                      (e.donations.items = (0, r.pj)(
                        t.map((e) => {
                          var t;
                          return (0, g.fv)({
                            url: e.url,
                            goal:
                              null === (t = e.goal) || void 0 === t
                                ? void 0
                                : t.title,
                            artist: e.artist,
                          });
                        }),
                      )),
                      (e.donations.loadingState = f.Gui.RESOLVE);
                  } catch (t) {
                    o.error(t), (e.donations.loadingState = f.Gui.REJECT);
                  }
              }),
              getData: (0, r.ls)(function* (i) {
                let {
                    albumId: a,
                    resumeStream: s,
                    preloadedAlbum: v,
                    withLatestGenreAlbumsRequest: c = !0,
                    withOtherArtistAlbumsRequest: g = !0,
                    sonataState: A,
                  } = i,
                  { albumResource: h, modelActionsLogger: y } = (0, r.dU)(e),
                  { experiments: E, disclaimer: V } = (0, r.yj)(e),
                  N = E.checkExperiment(
                    f.peG.WebNextAlbumDisableVersions,
                    "on",
                  ),
                  S = E.checkExperiment(f.peG.WebNextAlbumDisableTracks, "on"),
                  C = E.checkExperiment(
                    f.peG.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  G = E.checkExperiment(
                    f.peG.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  T = E.checkExperiment(f.peG.WebNextAgentPodcast, "on");
                if (((e.id = a), e.loadingState !== f.Gui.PENDING))
                  try {
                    var I, D, R, F, L, x, k;
                    let i, y;
                    e.loadingState = f.Gui.PENDING;
                    let E = v;
                    if (
                      (E ||
                        (E = yield h.getAlbumWithTracksIds({
                          albumId: a,
                          resumeStream: s,
                        })),
                      (null == E ? void 0 : E.error) === "not-found")
                    ) {
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                        (e.loadingState = f.Gui.REJECT),
                        e.otherArtistAlbums &&
                          (e.otherArtistAlbums.loadingState = f.Gui.REJECT),
                        e.latestGenreAlbums &&
                          (e.latestGenreAlbums.loadingState = f.Gui.REJECT);
                      return;
                    }
                    if (
                      null === (I = E.deprecation) || void 0 === I
                        ? void 0
                        : I.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        E.deprecation.targetAlbumId),
                        (e.loadingState = f.Gui.RESOLVE);
                      return;
                    }
                    let P = (
                        null !== (R = E.disclaimers) && void 0 !== R ? R : []
                      ).includes(d.e.MODAL),
                      _ =
                        E.type === u.V.PODCAST &&
                        (null !== (F = E.disclaimers) && void 0 !== F
                          ? F
                          : []
                        ).includes(d.e.FOREIGN_AGENT),
                      O =
                        null ===
                          (D = (0, f.UY5)(
                            null !== (L = E.disclaimers) && void 0 !== L
                              ? L
                              : [],
                            d.e.FOREIGN_AGENT,
                          )) || void 0 === D
                          ? void 0
                          : D[0];
                    if (
                      ((P || (T && _) || O) &&
                        (yield V.getDisclaimerData({
                          entityId: a,
                          entityType:
                            E.type === u.V.PODCAST
                              ? f.coP.PODCAST
                              : f.coP.ALBUM,
                          disclaimerId: null == O ? void 0 : O.id,
                        })),
                      A.setUnloadedEntitiesData(
                        E.volumes.flat().map((e) => (0, p.RN)(e.id)),
                      ),
                      (e.meta = (0, b.ym)(E)),
                      (e.labels = (0, r.pj)(E.labels)),
                      (e.contentWarning = (0, r.pj)(E.contentWarning)),
                      (e.description = (0, r.pj)(E.description)),
                      !N &&
                        E.duplicates &&
                        E.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, r.pj)(
                          null === (x = E.duplicates) || void 0 === x
                            ? void 0
                            : x.map(b.ym),
                        )),
                      !S)
                    ) {
                      t.makeFlatVolumeItems(E);
                      let i = [];
                      for (let t = 0; t < 10; t++) {
                        let a = e.items[t];
                        (null == a ? void 0 : a.type) === m.V.TRACK &&
                          i.push(String(a.id));
                      }
                      yield t.getTracks({ trackIds: i });
                    }
                    !C &&
                      e.isLatestGenreAlbumsAvailable &&
                      c &&
                      (i = t.getLatestGenreAlbums({
                        category: n.RECENT_ALBUMS,
                        period: o.WEEK,
                        pageSize: 8,
                        genre: E.genre,
                      })),
                      !G &&
                        e.isOtherArtistAlbumsAvailable &&
                        g &&
                        (y = t.getOtherArtistAlbums(
                          {
                            artistId: String(
                              null === (k = E.artists[0]) || void 0 === k
                                ? void 0
                                : k.id,
                            ),
                            limit: 8,
                          },
                          a,
                        )),
                      yield Promise.allSettled([i, y]),
                      e.loadingState !== f.Gui.IDLE &&
                        (e.loadingState = f.Gui.RESOLVE);
                  } catch (t) {
                    y.error(t),
                      t instanceof l.du && (e.errorStatusCode = t.statusCode),
                      e.loadingState !== f.Gui.IDLE &&
                        ((e.loadingState = f.Gui.REJECT),
                        e.otherArtistAlbums &&
                          (e.otherArtistAlbums.loadingState = f.Gui.REJECT),
                        e.latestGenreAlbums &&
                          (e.latestGenreAlbums.loadingState = f.Gui.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              getRelatedContent: (0, r.ls)(function* () {
                let { albumResource: t, modelActionsLogger: i } = (0, r.dU)(e);
                if (e.relatedContent && !e.relatedContent.isLoading)
                  try {
                    var a, n;
                    if (
                      !(null === (a = e.meta) || void 0 === a ? void 0 : a.id)
                    )
                      return;
                    e.relatedContent.loadingState = f.Gui.PENDING;
                    let i = yield t.getRelatedContent({ albumId: e.meta.id });
                    (e.relatedContent.items = (0, r.pj)(
                      null === (n = i.blocks) || void 0 === n
                        ? void 0
                        : n.map(G),
                    )),
                      (e.relatedContent.loadingState = f.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.relatedContent.loadingState = f.Gui.REJECT);
                  }
              }),
              reset(t) {
                var i, a, n, o;
                t.resetUnloadedEntitiesData(),
                  (e.id = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  e.indexItems.clear(),
                  (e.loadingState = f.Gui.IDLE),
                  (e.description = ""),
                  (e.allTracksUnfinished = !1),
                  null === (i = e.latestGenreAlbums) ||
                    void 0 === i ||
                    i.reset(),
                  null === (a = e.otherArtistAlbums) ||
                    void 0 === a ||
                    a.reset(),
                  null === (n = e.relatedContent) || void 0 === n || n.reset(),
                  null === (o = e.donations) || void 0 === o || o.reset(),
                  e.destroyItems([
                    e.meta,
                    e.items,
                    e.otherAlbumVersions,
                    e.labels,
                  ]);
              },
            };
            return t;
          });
      i(96865);
      var x = i(40012);
      i(9730), i(10356);
      let k = r.V5.compose(
          r.V5.model("PromoCampaign", { isActive: r.V5.boolean }),
          y.fu,
        )
          .views((e) => ({
            get isPromoCampaignActive() {
              return e.isResolved && e.isActive;
            },
            get isPromoCampaignInactive() {
              return e.isRejected || (e.isResolved && !e.isActive);
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { isActive: i, albumId: a } = t,
                { promoResource: n, modelActionsLogger: o } = (0, r.dU)(e);
              if (!e.isLoading)
                try {
                  if (((e.loadingState = f.Gui.PENDING), "boolean" == typeof i))
                    e.isActive = i;
                  else {
                    let t = yield n.getPromoAlbumInfo({ albumId: a });
                    e.isActive = t.active;
                  }
                  e.loadingState = f.Gui.RESOLVE;
                } catch (t) {
                  o.error(t), (e.loadingState = f.Gui.REJECT);
                }
            }),
          })),
        P = L.props({ promoCampaign: k, state: p.wQ })
          .actions((e) => ({
            async getDataByCampaign(t) {
              let { albumId: i, preloadedAlbum: a, isActive: n } = t;
              await e.promoCampaign.getData({ albumId: i, isActive: n }),
                e.promoCampaign.isPromoCampaignActive &&
                  (await e.getData({
                    albumId: i,
                    resumeStream: !1,
                    preloadedAlbum: a,
                    withLatestGenreAlbumsRequest: !1,
                    withOtherArtistAlbumsRequest: !1,
                    sonataState: e.state,
                  }));
            },
          }))
          .named("PromoLandingAlbumPage");
    },
    35551: function (e, t, i) {
      "use strict";
      i.d(t, {
        T: function () {
          return a.NotFound;
        },
      });
      var a = i(15898);
    },
    15898: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotFound: function () {
          return b;
        },
      });
      var a = i(75441),
        n = i(32358),
        o = i(62569),
        r = i(15937),
        l = i(68208),
        s = i(69756),
        d = i(17392),
        u = i(13534),
        m = i(97141),
        v = i(35129),
        c = i.n(v);
      let b = (0, o.Pi)((e) => {
        let { className: t } = e,
          { contentRef: i } = (0, u.$Y6)(),
          o = (0, u.s0h)("/");
        return (
          (0, u.ZP4)(!0),
          (0, a.jsxs)("div", {
            className: (0, n.W)(c().root, { [c().root_desktop]: !i }, t),
            children: [
              (0, a.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: c().navigation,
                withForwardControl: !1,
              }),
              (0, a.jsxs)("div", {
                className: c().content,
                children: [
                  (0, a.jsx)(s.Icon, {
                    className: c().icon,
                    variant: "musicLogo",
                  }),
                  (0, a.jsx)(d.Heading, {
                    className: (0, n.W)(c().title, c().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, a.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, a.jsx)(d.Caption, {
                    className: (0, n.W)(c().text, c().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, a.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, a.jsx)(l.Button, {
                    onClick: o,
                    className: c().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, a.jsx)(d.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, a.jsx)(r.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    35129: function (e) {
      e.exports = {
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
  },
  function (e) {
    e.O(
      0,
      [
        9876, 5970, 8580, 4665, 296, 7645, 9125, 4679, 5684, 7138, 5453, 7873,
        8015, 9282, 7255, 585, 7141, 892, 1512, 2783, 2399, 7099, 1150, 2242,
        1562, 9088, 4990, 5660, 7058, 6158, 1744,
      ],
      function () {
        return e((e.s = 57110));
      },
    ),
      (_N_E = e.O());
  },
]);
