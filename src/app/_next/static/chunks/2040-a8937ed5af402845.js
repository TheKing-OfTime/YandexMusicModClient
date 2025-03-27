"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2040],
  {
    12040: function (t, e, i) {
      i.d(e, {
        i$: function () {
          return G.PlaylistPage;
        },
        nb: function () {
          return b;
        },
        X$: function () {
          return O.PlaylistShimmersPage;
        },
      });
      var a,
        l,
        r,
        d,
        n = i(58997),
        o = i(2685);
      ((a = r || (r = {})).MAJOR = "Major"),
        (a.NAME = "Название"),
        (a.ARTISCS = "Исполнители"),
        (a.LINK = "Ссылка"),
        (a.ALBUM_ID = "albumId"),
        (a.TRACK_ID = "trackId"),
        ((l = d || (d = {})).MAJOR = "major"),
        (l.NAME = "name"),
        (l.ARTISCS = "artists"),
        (l.LINK = "link"),
        (l.ALBUM_ID = "albumId"),
        (l.TRACK_ID = "trackId");
      let s = o.V5.model("EditorFeature", {
        shouldShowMajor: o.V5.boolean,
        shouldShowGenre: o.V5.boolean,
        shouldShowDuplicate: o.V5.boolean,
        colorMajorMap: o.V5.map(o.V5.string),
        duplicate: o.V5.map(o.V5.number),
      })
        .views((t) => ({
          get sheetDataPlaylist() {
            var e, i;
            let { playlist: a } = (0, o.yj)(t);
            return {
              data: {
                sheet: "Playlist",
                columns: [
                  { label: r.MAJOR, value: d.MAJOR },
                  { label: r.NAME, value: d.NAME },
                  { label: r.ARTISCS, value: d.ARTISCS },
                  { label: r.LINK, value: d.LINK },
                  { label: r.ALBUM_ID, value: d.ALBUM_ID },
                  { label: r.TRACK_ID, value: d.TRACK_ID },
                ],
                content: a.items
                  .filter((t) => t.data)
                  .map((t) => {
                    var e, i, a, l, r, d, n, o, s, u, c, g;
                    let m = (
                      null === (e = t.data) || void 0 === e ? void 0 : e.url
                    )
                      ? ""
                          .concat(location.origin)
                          .concat(
                            null === (i = t.data) || void 0 === i
                              ? void 0
                              : i.url,
                          )
                      : "";
                    return {
                      major:
                        null !==
                          (o =
                            null === (l = t.data) || void 0 === l
                              ? void 0
                              : null === (a = l.major) || void 0 === a
                                ? void 0
                                : a.name) && void 0 !== o
                          ? o
                          : "",
                      name:
                        null !==
                          (s =
                            null === (r = t.data) || void 0 === r
                              ? void 0
                              : r.title) && void 0 !== s
                          ? s
                          : "",
                      artists:
                        null !==
                          (u =
                            null === (d = t.data) || void 0 === d
                              ? void 0
                              : d.artists.map((t) => t.name).join(", ")) &&
                        void 0 !== u
                          ? u
                          : "",
                      link: m,
                      albumId:
                        null !== (c = t.albumId) && void 0 !== c ? c : "",
                      trackId:
                        null !==
                          (g =
                            null === (n = t.data) || void 0 === n
                              ? void 0
                              : n.id) && void 0 !== g
                          ? g
                          : "",
                    };
                  }),
              },
              settings: {
                fileName:
                  (null === (e = a.meta) || void 0 === e ? void 0 : e.uid) &&
                  (null === (i = a.meta) || void 0 === i ? void 0 : i.kind)
                    ? "%"
                        .concat(a.meta.uid, "%_%")
                        .concat(a.meta.kind, "%_to_text")
                    : "to_text",
              },
            };
          },
        }))
        .actions((t) => ({
          exportToExcel: (0, o.ls)(function* () {
            let { modelActionsLogger: e } = (0, o.dU)(t);
            try {
              let e = yield Promise.all([i.e(6875), i.e(5617), i.e(4753)]).then(
                  i.t.bind(i, 42625, 23),
                ),
                { data: a, settings: l } = t.sheetDataPlaylist;
              if (0 === a.content.length) return n.SLo.ERROR;
              return (
                yield new Promise((t) => {
                  e.default([a], l, () => t());
                }),
                n.SLo.OK
              );
            } catch (t) {
              return e.error(t), n.SLo.ERROR;
            }
          }),
          getAllPlaylistItems: (0, o.ls)(function* (e) {
            let { batchSize: i } = e,
              { playlist: a } = (0, o.yj)(t),
              l = a.items.length - 1;
            for (let t = 0; t < l; t += i)
              yield a.getTracksByRange({
                startIndex: t,
                endIndex: Math.min(t + i, l),
              });
          }),
          getColorForMajor(e) {
            let i = t.colorMajorMap.get(e);
            if (i) return i;
            let a = (0, n.kDs)(e),
              l = "hsl(".concat(a, ", 50%, 50%)");
            return t.colorMajorMap.set(e, l), l;
          },
          getDuplicates(e) {
            let i = new Map();
            e.forEach((t) => {
              let e = i.get(t.id) || 0;
              i.set(t.id, e + 1);
            });
            let a = 1;
            i.forEach((e, i) => {
              e > 1 && (t.duplicate.set(String(i), a), a++);
            });
          },
          getNumberGroupTrackDuplicated(e) {
            let { experiments: i } = (0, o.yj)(t);
            if (e && i.checkExperiment(n.peG.WebEditorsFeatures, "on"))
              return t.duplicate.get(String(e.id));
          },
          toggleShouldShowMajor() {
            t.shouldShowMajor = !t.shouldShowMajor;
          },
          toggleShouldShowGenre() {
            t.shouldShowGenre = !t.shouldShowGenre;
          },
          toggleShouldShowDuplicate() {
            t.shouldShowDuplicate = !t.shouldShowDuplicate;
          },
          reset() {
            (t.shouldShowDuplicate = !1),
              (t.shouldShowGenre = !1),
              (t.shouldShowMajor = !1),
              (t.colorMajorMap = (0, o.pj)({})),
              (t.duplicate = (0, o.pj)({}));
          },
        }));
      var u = i(79491),
        c = i(49430),
        g = i(3228),
        m = i(83085),
        v = i(81706),
        S = i(3154),
        h = i(50684),
        y = i(91694);
      let I = (t, e) => {
          let [i, a] = t.split(":");
          return (0, o.pj)({
            id: i || "",
            albumId: a || "",
            key: "".concat(i, "-").concat(e),
            data: null,
            loadingState: n.Gui.IDLE,
          });
        },
        E = (t) => {
          var e, i, a;
          let l = null === (e = t.tracks) || void 0 === e ? void 0 : e.map(m.M),
            r = (null === (i = t.tracks) || void 0 === i ? void 0 : i.length)
              ? null === (a = t.tracks) || void 0 === a
                ? void 0
                : a.map((t, e) => I(t, e))
              : [];
          return {
            id: t.id,
            name: t.name,
            tracks: (0, o.pj)(r),
            unloadedTracks: (0, o.pj)(l),
          };
        },
        N = (t) => {
          let e = t.filters.map(E);
          if (e.length < 3) return [];
          let i = e.find((t) => t.id === m.W.ALL);
          if (!i) return [];
          let a = e.filter((t) => t.tracks.length >= 8);
          return a.length < 2 ? [] : [i].concat(a.slice(0, 7));
        },
        T = (t, e) =>
          e.map((e) => {
            let i = t[e];
            return (null == i ? void 0 : i.albumId)
              ? "".concat(i.id, ":").concat(i.albumId)
              : String(null == i ? void 0 : i.id);
          }),
        p = (t, e) => {
          let { startIndex: i, endIndex: a } = e,
            l = [];
          for (let e = i; e <= a; e++) {
            var r, d;
            ((null === (r = t[e]) || void 0 === r ? void 0 : r.loadingState) ===
              n.Gui.IDLE ||
              (null === (d = t[e]) || void 0 === d
                ? void 0
                : d.loadingState) === n.Gui.REJECT) &&
              l.push(e);
          }
          return l;
        };
      var k = i(73054);
      let f = (t) => t.map((t) => (0, k.RN)(t.id, t.albumId || void 0)),
        D = (t, e) =>
          e.map((e) => {
            let i = t.find((t) => String(t.id) === e);
            return (null == i ? void 0 : i.albumId)
              ? "".concat(e, ":").concat(i.albumId)
              : e;
          }),
        C = o.V5.model("PlaylistPageSearch", {
          loadingState: o.V5.enumeration(Object.values(n.Gui)),
          errorStatusCode: o.V5.maybeNull(o.V5.number),
          text: o.V5.string,
          playlistTrackIds: o.V5.maybeNull(o.V5.array(o.V5.string)),
          suggestedTrackIds: o.V5.maybeNull(o.V5.array(o.V5.string)),
          additionTrackInProggress: o.V5.maybeNull(o.V5.string),
          tracks: o.V5.maybeNull(o.V5.array(S.le)),
          isFocused: o.V5.optional(o.V5.boolean, !1),
        })
          .views((t) => ({
            get isLoading() {
              return (
                t.loadingState === n.Gui.PENDING ||
                t.loadingState === n.Gui.IDLE
              );
            },
            get isIdle() {
              return t.loadingState === n.Gui.IDLE;
            },
            get hasText() {
              return !!t.text.length;
            },
            get suggestedTracks() {
              var e;
              return null === (e = t.suggestedTrackIds) || void 0 === e
                ? void 0
                : e.map((e) => {
                    var i;
                    return (
                      (null === (i = t.tracks) || void 0 === i
                        ? void 0
                        : i.find((t) => t.id === e)) || null
                    );
                  });
            },
            get playlistTracks() {
              let e = [...(t.playlistTrackIds || [])];
              return (
                t.additionTrackInProggress &&
                  e.unshift(t.additionTrackInProggress),
                null == e
                  ? void 0
                  : e.map((e) => {
                      var i;
                      return (
                        (null === (i = t.tracks) || void 0 === i
                          ? void 0
                          : i.find((t) => {
                              var i;
                              return (
                                ((null === (i = t.mainAlbum) || void 0 === i
                                  ? void 0
                                  : i.id) && e.includes(":")
                                  ? "".concat(t.id, ":").concat(t.mainAlbum.id)
                                  : t.id) === e
                              );
                            })) || null
                      );
                    })
              );
            },
          }))
          .actions((t) => {
            let e = {
              getTracksMeta: (0, o.ls)(function* () {
                let { tracksResource: e, modelActionsLogger: i } = (0, o.dU)(t),
                  a = [...(t.playlistTrackIds || [])].concat(
                    t.suggestedTrackIds || [],
                  );
                try {
                  let i = yield e.getTracksMeta({
                    trackIds: a,
                    removeDuplicates: !0,
                    withProgress: !0,
                  });
                  (t.tracks = (0, o.pj)(
                    null == i ? void 0 : i.map((t) => (0, S.Vt)(t)),
                  )),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.RESOLVE);
                } catch (t) {
                  i.error(t);
                }
                return null;
              }),
              getTracks: (0, o.ls)(function* (i) {
                let { uid: a, kind: l } = i,
                  { searchPlaylistResource: r, modelActionsLogger: d } = (0,
                  o.dU)(t);
                if (
                  t.loadingState === n.Gui.PENDING ||
                  !t.hasText ||
                  !(0, o.fh)(t)
                )
                  return;
                let { playlist: s } = (0, o.yj)(t);
                try {
                  var u, g;
                  t.loadingState = n.Gui.PENDING;
                  let { playlistTrackIds: i = [], suggestedTrackIds: d = [] } =
                      yield r.getTrackIds({ uid: a, kind: l, part: t.text }),
                    c = D(s.items, i);
                  (t.playlistTrackIds = (0, o.pj)(c)),
                    (t.suggestedTrackIds = (0, o.pj)(d)),
                    ((null === (u = t.playlistTrackIds) || void 0 === u
                      ? void 0
                      : u.length) || 0) +
                      ((null === (g = t.suggestedTrackIds) || void 0 === g
                        ? void 0
                        : g.length) || 0) >
                    0
                      ? e.getTracksMeta()
                      : (t.loadingState = n.Gui.RESOLVE);
                } catch (e) {
                  d.error(e),
                    e instanceof c.du &&
                      (e.statusCode === c.CN.NOT_FOUND ||
                        e.statusCode === c.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = c.CN.NOT_FOUND),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.REJECT);
                }
              }),
              setText(e) {
                t.text = e;
              },
              setIdleState() {
                t.loadingState = n.Gui.IDLE;
              },
              setAdditionTrackAnimation(e) {
                t.additionTrackInProggress = e;
              },
              setFocus() {
                t.isFocused = !0;
              },
              removeFocus() {
                t.isFocused = !1;
              },
              replaceAdditionTrackInProggress() {
                if (t.additionTrackInProggress) {
                  var e, i;
                  null === (e = t.playlistTrackIds) ||
                    void 0 === e ||
                    e.unshift(t.additionTrackInProggress),
                    (t.suggestedTrackIds = (0, o.pj)(
                      null === (i = t.suggestedTrackIds) || void 0 === i
                        ? void 0
                        : i.filter((e) => e !== t.additionTrackInProggress),
                    )),
                    (t.additionTrackInProggress = null);
                }
              },
              resetAdditionTrackAnimation() {
                t.additionTrackInProggress = null;
              },
              reset() {
                (t.playlistTrackIds = null),
                  (t.suggestedTrackIds = null),
                  (t.additionTrackInProggress = null),
                  (t.tracks = null),
                  (t.loadingState = n.Gui.IDLE),
                  (t.isFocused = !1);
              },
            };
            return e;
          }),
        b = o.V5.compose(
          o.V5.model("PlaylistPage", {
            uuid: o.V5.maybeNull(o.V5.string),
            meta: o.V5.maybeNull(v.Nn),
            items: o.V5.array(m.Wj),
            errorStatusCode: o.V5.maybeNull(o.V5.number),
            loadingState: o.V5.enumeration(Object.values(n.Gui)),
            similarPlaylists: o.V5.array(v.d2),
            filters: m.Nj,
            activeFilter: o.V5.maybe(o.V5.string),
            activeFilterName: o.V5.maybeNull(o.V5.string),
            shouldSendEventOnTabOpened: o.V5.boolean,
            initialItems: o.V5.array(m.Wj),
            shouldShowTrailerOnboarding: o.V5.maybeNull(o.V5.boolean),
            editorFeature: s,
            search: C,
          }),
          y.Al,
        )
          .views((t) => ({
            get isLoading() {
              return (
                t.loadingState === n.Gui.PENDING ||
                t.loadingState === n.Gui.IDLE
              );
            },
            get isResolved() {
              return t.loadingState === n.Gui.RESOLVE;
            },
            get isRejected() {
              return t.loadingState === n.Gui.REJECT;
            },
            get isDisabled() {
              var e;
              return (
                this.isResolved &&
                (0 === t.items.length ||
                  !(null === (e = t.meta) || void 0 === e
                    ? void 0
                    : e.isAvailable))
              );
            },
            get isNotFound() {
              return this.isRejected && t.errorStatusCode === c.CN.NOT_FOUND;
            },
            get hasSimilarPlaylists() {
              return this.isLoading || t.similarPlaylists.length > 0;
            },
            get isEmptyPlaylist() {
              return this.isResolved && 0 === t.items.length;
            },
            get contextMeta() {
              var i, a, l, r, d, s, u, m, v, S;
              return {
                isAvailable:
                  null === (i = t.meta) || void 0 === i
                    ? void 0
                    : i.isAvailable,
                id: t.meta.id,
                uid: null === (a = t.meta) || void 0 === a ? void 0 : a.uid,
                uuid: t.meta.uuid,
                kind: null === (l = t.meta) || void 0 === l ? void 0 : l.kind,
                title: null === (r = t.meta) || void 0 === r ? void 0 : r.title,
                coverUri:
                  null === (d = t.meta) || void 0 === d ? void 0 : d.coverUri,
                likesCount:
                  null === (s = t.meta) || void 0 === s ? void 0 : s.likesCount,
                averageColor:
                  null === (u = t.meta) || void 0 === u
                    ? void 0
                    : u.averageColor,
                owner: null === (m = t.meta) || void 0 === m ? void 0 : m.owner,
                description:
                  null === (v = t.meta) || void 0 === v
                    ? void 0
                    : v.description,
                modified:
                  null === (S = t.meta) || void 0 === S ? void 0 : S.modified,
              };
            },
            get isDragAndDropEnabled() {
              var y;
              if (!(0, o.fh)(t)) return !1;
              let { ugcUploadCenter: e } = (0, o.yj)(t);
              return !!(
                (null === (y = t.meta) || void 0 === y
                  ? void 0
                  : y.canUserChange) &&
                (t.items.length > 1 ||
                  e.getUploadingTracksByPlaylistKind(t.meta.kind).length > 0)
              );
            },
            get itemsKeys() {
              return t.items.map((t) => t.key);
            },
            get isFavouritePlaylist() {
              var I;
              return (
                (null === (I = t.meta) || void 0 === I ? void 0 : I.kind) ===
                h.eX.LIKE
              );
            },
            get isFiltersLoading() {
              return (
                t.filters.loadingState === n.Gui.IDLE ||
                t.filters.loadingState === n.Gui.PENDING
              );
            },
            get isFiltersResolved() {
              return t.filters.loadingState === n.Gui.RESOLVE;
            },
            get activeFilterIndex() {
              var E;
              let e =
                null === (E = t.filters.items) || void 0 === E
                  ? void 0
                  : E.findIndex((e) => e.id === t.activeFilter);
              return e && e > -1 ? e : 0;
            },
            get analyticsParamsActiveFilterIndex() {
              return this.activeFilterIndex + 1;
            },
            get enableVariousAutoFlow() {
              return !!t.activeFilter;
            },
            get trackIds() {
              return t.initialItems.map((t) =>
                String((0, g.i)(t.id, t.albumId)),
              );
            },
            get isRewind2024Playlist() {
              var N;
              return (
                (null === (N = t.meta) || void 0 === N
                  ? void 0
                  : N.generatedPlaylistType) === "rewind2024"
              );
            },
            get areAllTracksUploaded() {
              return t.items.every((t) => t.loadingState === n.Gui.RESOLVE);
            },
            get shouldShowEmptyBlock() {
              var T, p;
              if (!(0, o.fh)(t)) return !1;
              let { ugcUploadCenter: e } = (0, o.yj)(t),
                i = !!(null === (T = t.meta) || void 0 === T
                  ? void 0
                  : T.isOwnPlaylist),
                a = !!(
                  (null === (p = t.meta) || void 0 === p ? void 0 : p.kind) &&
                  e.getUploadingTracksByPlaylistKind(t.meta.kind).length
                ),
                l = !!t.search.hasText;
              return this.isEmptyPlaylist && i && !a && !l;
            },
            get virtualListItemsCount() {
              var k, f;
              if (t.search.hasText) return 0;
              return null !==
                (f =
                  null === (k = t.items) || void 0 === k ? void 0 : k.length) &&
                void 0 !== f
                ? f
                : 0;
            },
          }))
          .actions((t) => {
            let e = {
              getTracksByRange: (0, o.ls)(function* (e) {
                var i, a;
                let { startIndex: l, endIndex: r } = e,
                  { tracksResource: d, modelActionsLogger: s } = (0, o.dU)(t);
                if (
                  !(null === (i = t.meta) || void 0 === i ? void 0 : i.uid) ||
                  !(null === (a = t.meta) || void 0 === a ? void 0 : a.kind)
                )
                  return null;
                (l = Math.max(0, l)), (r = Math.min(r, t.items.length));
                let u = p(t.items, { startIndex: l, endIndex: r });
                try {
                  let e = T(t.items, u);
                  if (!e.length) return null;
                  u.forEach((e) => {
                    let i = t.items[e];
                    i && (i.loadingState = n.Gui.PENDING);
                  });
                  let i = yield d.getTracksMeta({
                    trackIds: e,
                    withProgress: !0,
                  });
                  u.forEach((e, a) => {
                    let l = null == i ? void 0 : i[a];
                    if (t.items[e] && l) {
                      var r, d;
                      t.items[e] = {
                        id: l.id,
                        albumId:
                          (null === (d = l.albums) || void 0 === d
                            ? void 0
                            : null === (r = d[0]) || void 0 === r
                              ? void 0
                              : r.id) || null,
                        key: "".concat(l.id, "-").concat(e),
                        data: (0, S.Vt)(l),
                        loadingState: n.Gui.RESOLVE,
                      };
                    }
                  });
                } catch (e) {
                  s.error(e),
                    u.forEach((e) => {
                      let i = t.items[e];
                      i && (i.loadingState = n.Gui.REJECT);
                    });
                }
                return null;
              }),
              updateData: (0, o.ls)(function* (i) {
                var a;
                if ((null == i ? void 0 : i.error) === "not-found")
                  return (
                    (t.errorStatusCode = c.CN.NOT_FOUND),
                    (t.loadingState = n.Gui.REJECT),
                    null
                  );
                (t.similarPlaylists = (0, o.pj)(
                  null === (a = i.similarPlaylists) || void 0 === a
                    ? void 0
                    : a.map(v.VB),
                )),
                  (t.meta = (0, v.Q9)(i)),
                  (t.items = (0, o.pj)(
                    i.tracks.map((t, e) => ({
                      id: String(t.id),
                      albumId: t.albumId || null,
                      key: "".concat(t.id, "-").concat(e),
                      loadingState: n.Gui.IDLE,
                    })),
                  )),
                  (t.initialItems = (0, u.ZN)(t.items));
                let {
                  sonataState: l,
                  playlist: r,
                  experiments: d,
                } = (0, o.yj)(t);
                return (
                  l.setUnloadedEntitiesData(f(t.items)),
                  (null == d
                    ? void 0
                    : d.checkExperiment(n.peG.WebEditorsFeatures, "on")) &&
                    r.editorFeature.getDuplicates(t.items),
                  yield e.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, o.ls)(function* (i) {
                let {
                    userId: a,
                    playlistKind: l,
                    resumeStream: r = !1,
                    trackMetaType: d,
                  } = i,
                  { usersResource: s, modelActionsLogger: u } = (0, o.dU)(t);
                if (t.loadingState !== n.Gui.PENDING)
                  try {
                    t.loadingState = n.Gui.PENDING;
                    let i = yield s.getPlaylistWithTracksIds({
                      userId: a,
                      playlistKind: l,
                      resumeStream: r,
                      trackMetaType: d,
                    });
                    if ("string" != typeof i.playlistUuid) {
                      (t.errorStatusCode = c.CN.NOT_FOUND),
                        (t.loadingState = n.Gui.REJECT);
                      return;
                    }
                    yield e.updateData(i), (t.loadingState = n.Gui.RESOLVE);
                  } catch (e) {
                    u.error(e),
                      e instanceof c.du &&
                        (e.statusCode === c.CN.NOT_FOUND ||
                          e.statusCode === c.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = c.CN.NOT_FOUND),
                      (t.loadingState = n.Gui.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, o.ls)(function* (i) {
                let {
                    playlistUuid: a,
                    richTracks: l = !1,
                    resumeStream: r = !1,
                    preloadedPlaylist: d,
                  } = i,
                  { playlistResource: s, modelActionsLogger: u } = (0, o.dU)(t);
                if (((t.uuid = a), t.loadingState !== n.Gui.PENDING))
                  try {
                    t.loadingState = n.Gui.PENDING;
                    let i = d;
                    i ||
                      (i = yield s.getPlaylist({
                        playlistUuid: a,
                        resumeStream: r,
                        richTracks: l,
                      })),
                      yield e.updateData(i),
                      t.loadingState !== n.Gui.IDLE &&
                        (t.loadingState = n.Gui.RESOLVE);
                  } catch (e) {
                    u.error(e),
                      e instanceof c.du &&
                        (e.statusCode === c.CN.NOT_FOUND ||
                          e.statusCode === c.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = c.CN.NOT_FOUND),
                      t.loadingState !== n.Gui.IDLE &&
                        (t.loadingState = n.Gui.REJECT);
                  }
              }),
              getPlaylistFilters: (0, o.ls)(function* () {
                let { filtersResource: i, modelActionsLogger: a } = (0, o.dU)(
                    t,
                  ),
                  { sonataState: l } = (0, o.yj)(t);
                if (t.filters.loadingState === n.Gui.PENDING) return;
                let r = t.items.map((t) => String((0, g.i)(t.id, t.albumId)));
                try {
                  var d;
                  t.filters.loadingState = n.Gui.PENDING;
                  let a = yield i.getTracksFilters({ trackIds: r });
                  (t.filters.items = (0, o.pj)(N(a))),
                    e.setActiveFilter(l.playlistFilter),
                    e.getFilterName(l.playlistFilter || m.W.ALL);
                  let s =
                    null === (d = t.filters.items) || void 0 === d
                      ? void 0
                      : d.find((e) => e.id === t.activeFilter);
                  s &&
                    ((t.items = (0, u.ZN)(s.tracks)),
                    l.setUnloadedEntitiesData(f(t.items))),
                    (t.filters.loadingState = n.Gui.RESOLVE);
                } catch (e) {
                  a.error(e),
                    e instanceof c.du &&
                      (e.statusCode === c.CN.NOT_FOUND ||
                        e.statusCode === c.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = c.CN.NOT_FOUND),
                    (t.filters.loadingState = n.Gui.REJECT);
                }
              }),
              getFilterName: (0, o.ls)(function* (e) {
                let { filtersResource: i, modelActionsLogger: a } = (0, o.dU)(
                  t,
                );
                try {
                  let a = yield i.getFilterName({ filterId: e });
                  t.activeFilterName = a.name;
                } catch (e) {
                  a.error(e),
                    e instanceof c.du &&
                      (e.statusCode === c.CN.NOT_FOUND ||
                        e.statusCode === c.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = c.CN.NOT_FOUND);
                }
              }),
              updatePlaylistTrackByUuid: (0, o.ls)(function* (i) {
                let {
                    playlistUuid: a,
                    richTracks: l = !1,
                    resumeStream: r = !1,
                  } = i,
                  { playlistResource: d, modelActionsLogger: s } = (0, o.dU)(t);
                t.uuid = a;
                try {
                  let i = yield d.getPlaylist({
                      playlistUuid: a,
                      resumeStream: r,
                      richTracks: l,
                    }),
                    s = [];
                  if (
                    ((t.items = (0, o.pj)(
                      i.tracks.map((e, i) => {
                        var a, l;
                        let r = String(e.id),
                          d = e.albumId || null;
                        return r ===
                          (null === (a = t.items[i]) || void 0 === a
                            ? void 0
                            : a.id) &&
                          d ===
                            (null === (l = t.items[i]) || void 0 === l
                              ? void 0
                              : l.albumId)
                          ? t.items[i]
                          : (s.push(i),
                            {
                              id: String(e.id),
                              albumId: e.albumId || null,
                              key: "".concat(e.id, "-").concat(i),
                              loadingState: n.Gui.IDLE,
                            });
                      }),
                    )),
                    t.meta &&
                      ((t.meta.modified = i.modified),
                      (t.meta.revision = i.revision),
                      s.length))
                  ) {
                    let t = Math.min(...s),
                      i = Math.max(...s);
                    e.getTracksByRange({ startIndex: t, endIndex: i });
                  }
                  if (
                    (t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.RESOLVE),
                    (0, o.fh)(t))
                  ) {
                    let { sonataState: e } = (0, o.yj)(t);
                    e.setUnloadedEntitiesData(f(t.items));
                  }
                } catch (e) {
                  s.error(e),
                    e instanceof c.du &&
                      (e.statusCode === c.CN.NOT_FOUND ||
                        e.statusCode === c.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = c.CN.NOT_FOUND),
                    t.loadingState !== n.Gui.IDLE &&
                      (t.loadingState = n.Gui.REJECT);
                }
              }),
              moveTrack(e, i) {
                let a = (0, u.ZN)(t.items[e]);
                if (
                  !(e < 0) &&
                  !(i < 0) &&
                  !(e >= t.items.length) &&
                  !(i >= t.items.length) &&
                  a &&
                  (t.items.splice(e, 1), t.items.splice(i, 0, a), (0, o.fh)(t))
                ) {
                  let { sonataState: e } = (0, o.yj)(t);
                  e.setUnloadedEntitiesData(f(t.items));
                }
              },
              setActiveFilter(e) {
                e !== m.W.ALL
                  ? (t.activeFilter = e)
                  : (t.activeFilter = void 0);
              },
              removeTracksFromItems(e, i) {
                if ((t.items.splice(e, i), (0, o.fh)(t))) {
                  let { sonataState: e } = (0, o.yj)(t);
                  e.setUnloadedEntitiesData(f(t.items));
                }
              },
              handleFilterClick(i) {
                let { sonataState: a } = (0, o.yj)(t);
                t.activeFilter || (t.initialItems = (0, u.ZN)(t.items)),
                  e.setActiveFilter(i.id),
                  e.getFilterName(i.id),
                  t.activeFilter
                    ? (t.items = (0, u.ZN)(i.tracks))
                    : (t.items = (0, u.ZN)(t.initialItems)),
                  a.setUnloadedEntitiesData(f(t.items)),
                  e.setShouldSendEventOnTabOpened(!0);
              },
              setShouldSendEventOnTabOpened(e) {
                t.shouldSendEventOnTabOpened = e;
              },
              setShouldShowTrailerOnboarding(e) {
                t.shouldShowTrailerOnboarding = e;
              },
              reset() {
                let { sonataState: e } = (0, o.yj)(t);
                e.resetUnloadedEntitiesData(),
                  (t.uuid = null),
                  (t.loadingState = n.Gui.IDLE),
                  (t.errorStatusCode = null),
                  (t.filters.loadingState = n.Gui.IDLE),
                  (t.shouldSendEventOnTabOpened = !0),
                  (t.activeFilter = void 0),
                  (t.activeFilterName = null),
                  (t.shouldShowTrailerOnboarding = null),
                  t.search.setText(""),
                  t.search.reset(),
                  t.destroyItems([
                    t.meta,
                    t.items,
                    t.initialItems,
                    t.similarPlaylists,
                    t.filters.items,
                  ]);
              },
              refresh() {
                var i, a;
                (null === (i = t.meta) || void 0 === i ? void 0 : i.uuid) &&
                  e.getPlaylistByUuid({
                    playlistUuid:
                      null === (a = t.meta) || void 0 === a ? void 0 : a.uuid,
                    resumeStream: !1,
                  });
              },
              refreshTracks() {
                var i, a;
                (null === (i = t.meta) || void 0 === i ? void 0 : i.uuid) &&
                  e.updatePlaylistTrackByUuid({
                    playlistUuid:
                      null === (a = t.meta) || void 0 === a ? void 0 : a.uuid,
                    resumeStream: !1,
                  });
              },
            };
            return e;
          });
      i(49055);
      var G = i(81735),
        O = i(4040);
    },
  },
]);
