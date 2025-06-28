(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2159],
  {
    79294: function (e, t, a) {
      "use strict";
      a.d(t, {
        v: function () {
          return l;
        },
      });
      var i = a(13534);
      async function l(e, t) {
        var a, l, r, s, n;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let o = await (0, i.EQQ)(t.locale),
          d =
            null !== (l = e.ogTitle) && void 0 !== l
              ? l
              : (0, i.Th8)(e.title, 48, !1),
          c = o({ id: "metadata.playlist-title" }, { playlistTitle: e.title });
        return (null === (a = e.owner) || void 0 === a ? void 0 : a.verified)
          ? {
              title: c,
              description: c,
              openGraph: (0, i.A36)({
                ogTitle: d,
                ogDescription: (function (e) {
                  var t;
                  let { playlistMeta: a, messageFormatter: l } = e,
                    r = "";
                  return (
                    a.ogDescription
                      ? (r = a.ogDescription)
                      : a.description &&
                        (r = a.description.replace(/\[(.*?)\]\(.*?\)/gi, "$1")),
                    [
                      (r = (0, i.Th8)(r, 96, !1)),
                      l({ id: "metadata.playlist" }),
                      (null !== (t = a.likesCount) && void 0 !== t ? t : 0) >
                        0 &&
                        l(
                          { id: "metadata.likes-counter" },
                          { counter: a.likesCount },
                        ),
                    ]
                      .filter(Boolean)
                      .join(" • ")
                  );
                })({ playlistMeta: e, messageFormatter: o }),
                fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
                locale: t.locale,
                ogImage: e.ogImage,
                siteName: o({ id: "metadata.yandex-music" }),
                ogType: "music.playlist",
              }),
              twitter: (0, i.rz9)({
                cardType: i.qUR.APP,
                title: d,
                url: t.url,
                appName: o({ id: "metadata.yandex-music" }),
              }),
              appLinks: (0, i.VMi)({
                additional: {
                  ...t,
                  url: null !== (s = t.url) && void 0 !== s ? s : "",
                  fullUrl: null !== (n = t.fullUrl) && void 0 !== n ? n : "",
                  host: t.host,
                },
                appName: o({ id: "metadata.yandex-music" }),
              }),
            }
          : { robots: { index: !1, follow: !1 } };
      }
    },
    40384: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistNotFoundPage: function () {
          return o;
        },
      });
      var i = a(75441),
        l = a(62569),
        r = a(65067),
        s = a(35551),
        n = a(13534);
      let o = (0, l.Pi)(() => {
        let { playlist: e } = (0, n.oR4)();
        return (
          (0, r.useEffect)(() => {
            e.reset();
          }, []),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    60571: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistPage: function () {
          return e_;
        },
      });
      var i = a(75441),
        l = a(32358),
        r = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(35846),
        c = a(63524),
        u = a(30948),
        m = a(69947),
        v = a(40664),
        g = a(13534),
        p = a(97141),
        y = a(60989);
      let h = (e) => {
        var t, a, i, l, r, s, n, o, d, c, u, m, v;
        let g = e.items.map((e) => ({
          id: Number(e.id),
          albumId: Number(e.albumId) || void 0,
        }));
        return {
          owner: null === (t = e.meta) || void 0 === t ? void 0 : t.owner,
          uid: (null === (a = e.meta) || void 0 === a ? void 0 : a.uid) || 0,
          kind: (null === (i = e.meta) || void 0 === i ? void 0 : i.kind) || 0,
          title:
            (null === (l = e.meta) || void 0 === l ? void 0 : l.title) || "",
          description:
            null === (r = e.meta) || void 0 === r ? void 0 : r.description,
          revision:
            (null === (s = e.meta) || void 0 === s ? void 0 : s.revision) || 0,
          snapshot: 0,
          trackCount: g.length,
          cover: {
            uri:
              (null === (n = e.meta) || void 0 === n ? void 0 : n.coverUri) ||
              "",
            prefix: "",
            type: "from-album-cover",
            custom: !1,
          },
          playlistUuid:
            (null === (o = e.meta) || void 0 === o ? void 0 : o.uuid) || "",
          available:
            (null === (d = e.meta) || void 0 === d ? void 0 : d.isAvailable) ||
            !0,
          visibility:
            (null === (c = e.meta) || void 0 === c ? void 0 : c.visibility) ||
            y.w.PUBLIC,
          likesCount:
            null === (u = e.meta) || void 0 === u ? void 0 : u.likesCount,
          modified:
            (null === (m = e.meta) || void 0 === m ? void 0 : m.modified) || "",
          created: "",
          isBanner: !1,
          isPremiere: !1,
          durationMs: 0,
          collective: !1,
          ogImage:
            (null === (v = e.meta) || void 0 === v ? void 0 : v.coverUri) || "",
          tags: [],
          tracks: g,
        };
      };
      var P = a(79294);
      let f = (e) => {
          (0, n.useEffect)(() => {
            if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
            let t = h(e);
            (0, P.v)(t, {
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, g.gOT)(e);
            });
          }, [
            null == e ? void 0 : e.meta,
            null == e ? void 0 : e.isLoading,
            e,
          ]);
        },
        _ = (e) => {
          let { theme: t } = (0, g.FgM)(),
            a = t === g.Q2A.Light ? 0.7 : 0.36;
          return (0, g.paG)(e, 0.6, a);
        },
        x = (e) => {
          var t;
          let { setDeeplink: a } =
            null !== (t = (0, g.Z01)()) && void 0 !== t ? t : {};
          (0, n.useEffect)(() => {
            if (e) {
              let t = "playlists/".concat(e);
              null == a || a(t);
            }
            return () => {
              null == a || a(null);
            };
          }, [e, a]);
        };
      var k = a(8350),
        b = a.n(k),
        I = a(39336),
        N = a(30691),
        S = a.n(N);
      let T = (0, r.Pi)(
        (0, n.forwardRef)((e, t) => {
          var a;
          let { children: r, "data-index": s, ...o } = e,
            { playlist: d } = (0, g.oR4)(),
            {
              isDragging: c,
              listeners: u,
              setNodeRef: m,
              transform: v,
              transition: p,
              attributes: y,
            } = (0, I.nB)({
              id: String(
                null === (a = d.items[s]) || void 0 === a ? void 0 : a.key,
              ),
            }),
            h = (0, n.useCallback)(
              (e) => {
                m(e), "function" == typeof t && t(e);
              },
              [t, m],
            ),
            P = {
              transition: p,
              "--translate-y": v ? "".concat(Math.round(v.y), "px") : void 0,
            };
          return (0, i.jsx)("div", {
            ref: h,
            "data-index": s,
            style: P,
            ...o,
            className: S().root,
            children: (0, i.jsx)("div", {
              className: (0, l.W)(S().inner, { [S().dragging]: c }),
              ...u,
              ...y,
              children: r,
            }),
          });
        }),
      );
      var j = a(17221),
        C = a(62383),
        L = a(10393);
      let F = (e, t) => {
          var a;
          let i = t - 1;
          if (!e.items.length || i < 0 || i > e.items.length) return "";
          let l = e.items[i];
          return (
            (null == l
              ? void 0
              : null === (a = l.data) || void 0 === a
                ? void 0
                : a.title) || ""
          );
        },
        D = (e) => {
          let { formatMessage: t } = (0, o.Z)();
          return {
            screenReaderInstructions: {
              draggable: t({ id: "drag-and-drop.playlist-move-instructions" }),
            },
            announcements: {
              onDragStart(a) {
                let { active: i } = a;
                return t(
                  { id: "drag-and-drop.playlist-on-move-start" },
                  { trackName: F(e, Number(i.id)), index: i.id },
                );
              },
              onDragOver(a) {
                let { active: i, over: l } = a,
                  r = F(e, Number(i.id));
                return l
                  ? t(
                      { id: "drag-and-drop.playlist-on-move" },
                      { trackName: r, index: l.id },
                    )
                  : t(
                      { id: "drag-and-drop.playlist-on-move-fail" },
                      { trackName: r },
                    );
              },
              onDragEnd(a) {
                let { active: i, over: l } = a,
                  r = F(e, Number(i.id));
                return l
                  ? t(
                      { id: "drag-and-drop.playlist-on-move-end-with-index" },
                      { trackName: r, index: l.id },
                    )
                  : t(
                      { id: "drag-and-drop.playlist-on-move-end" },
                      { trackName: r },
                    );
              },
              onDragCancel: () =>
                t({ id: "drag-and-drop.playlist-on-move-cancel" }),
            },
          };
        };
      var E = a(10979);
      let A = (e) => {
        let { notify: t } = (0, g.d$W)(),
          { formatMessage: a } = (0, o.Z)();
        return (0, n.useCallback)(
          async (l) => {
            var r, s, n, o;
            let { from: d, to: c } = l;
            if (d < 0 || c < 0 || d >= e.items.length || c >= e.items.length)
              return;
            let u = String(
              null === (r = e.items[d]) || void 0 === r ? void 0 : r.id,
            );
            if (!u) return;
            let m = (
              null === (s = e.items[d]) || void 0 === s ? void 0 : s.albumId
            )
              ? Number(
                  null === (n = e.items[d]) || void 0 === n
                    ? void 0
                    : n.albumId,
                )
              : void 0;
            e.moveTrack(d, c);
            let v = await (null === (o = e.meta) || void 0 === o
              ? void 0
              : o.changePlaylist(
                  (0, E.PG)({
                    operation: E.aL.MOVE,
                    startPosition: d,
                    endPosition: c,
                    tracks: [{ id: u, albumId: m }],
                  }),
                ));
            (v && v === E.pX.OK) ||
              (v === E.pX.RELOAD ? e.refresh() : e.moveTrack(c, d),
              t(
                (0, i.jsx)(p.Q, {
                  error: a({ id: "drag-and-drop.failed-to-move" }),
                }),
                { containerId: g.W$x.ERROR },
              ));
          },
          [a, t, e],
        );
      };
      var w = a(84638),
        R = a(1150),
        B = a(17392),
        W = a(69034),
        M = a.n(W);
      let V = (0, r.Pi)((e) => {
        var t, a, l, r, s;
        let { item: o } = e,
          { playlist: d, experiments: c } = (0, g.oR4)(),
          {
            shouldShowMajor: u,
            shouldShowGenre: m,
            shouldShowDuplicate: v,
          } = d.editorFeature,
          p = c.checkExperiment(g.peG.WebEditorsFeatures, "on"),
          y = v && d.editorFeature.getNumberGroupTrackDuplicated(o);
        if (!p || !o || (!m && !u && !y)) return null;
        let h = [],
          P =
            null === (a = o.data) || void 0 === a
              ? void 0
              : null === (t = a.major) || void 0 === t
                ? void 0
                : t.name,
          f =
            null === (s = o.data) || void 0 === s
              ? void 0
              : null === (r = s.albums) || void 0 === r
                ? void 0
                : null === (l = r[0]) || void 0 === l
                  ? void 0
                  : l.genre;
        if ((y && h.push("№".concat(y)), u && P)) {
          let e = d.editorFeature.getColorForMajor(P),
            t = (0, i.jsx)("span", {
              className: M().major,
              style: { "--major-color": e },
              children: P,
            });
          h.push(t);
        }
        if ((m && f && h.push(f), !h.length)) return null;
        let _ = h.map((e, t, a) =>
          (0, i.jsxs)(
            n.Fragment,
            { children: [e, t < a.length - 1 && "; "] },
            t,
          ),
        );
        return (0, i.jsxs)(B.Caption, {
          className: M().root,
          type: "entity",
          size: "m",
          weight: "medium",
          variant: "span",
          children: ["[", _, "] \xa0"],
        });
      });
      var O = a(1254),
        U = a.n(O);
      let Y = (0, r.Pi)((e) => {
        var t, a, r;
        let s,
          { index: n, className: o, isDragging: d, draggingClassName: c } = e,
          { playlist: u, sonataState: m } = (0, g.oR4)(),
          v =
            (null === (t = u.meta) || void 0 === t ? void 0 : t.uuid) || u.uuid,
          { from: y, utmLink: h } = (0, g.MhG)({
            pageId: g.Rhz.PLAYLIST,
            blockId: g.aUg.PLAYLIST,
            pageEntityId: v,
            contextType: w.A.Playlist,
            contextId: v,
          }),
          P = u.isDragAndDropEnabled,
          f = null === (a = u.items) || void 0 === a ? void 0 : a[n];
        return (
          (s =
            f && f.data && u.meta
              ? f.data.isTrackNonMusic ||
                (null === (r = f.data.mainAlbum) || void 0 === r
                  ? void 0
                  : r.isNonMusic)
                ? (0, i.jsx)(R.FP, {
                    beforeTitle: (0, i.jsx)(V, { item: f }),
                    withPodcastName: !0,
                    withDNDBlock: P,
                    isDragging: d,
                    track: f.data,
                    draggingClassName: c,
                    playContextParams: {
                      contextData: {
                        type: w.A.Playlist,
                        meta: u.contextMeta,
                        from: y,
                        utmLink: h,
                      },
                      entitiesData: m.unloadedEntitiesDataFromModels,
                      queueParams: { index: n },
                      loadContextMeta: !0,
                    },
                    className: o,
                  })
                : (0, i.jsx)(R.O2, {
                    beforeTitle: (0, i.jsx)(V, { item: f }),
                    withDNDBlock: P,
                    isDragging: d,
                    track: f.data,
                    draggingClassName: c,
                    playContextParams: {
                      contextData: {
                        type: w.A.Playlist,
                        meta: u.contextMeta,
                        from: y,
                        utmLink: h,
                        filter: u.filters.activeFilter,
                        filterName: u.filters.activeFilterName,
                        enableVariousAutoFlow: u.enableVariousAutoFlow,
                      },
                      entitiesData: m.unloadedEntitiesDataFromModels,
                      queueParams: { index: n },
                      loadContextMeta: !0,
                    },
                    activeFilter: u.filters.activeFilter,
                    activeFilterIndex:
                      u.filters.analyticsParamsActiveFilterIndex,
                    className: (0, l.W)(o, {
                      [U().isDuplicate]:
                        u.editorFeature.shouldHighlightDublicatedTrack(f),
                    }),
                  })
              : (0, i.jsx)(p.DX, {
                  isActive: !0,
                  className: U().shimmerItem,
                  variant: g.Lxt.PLAYLIST,
                })),
          (0, i.jsx)(E.jK.Provider, {
            value: { playlist: u.meta, trackIndex: n },
            children: s,
          })
        );
      });
      var K = a(62067),
        G = a.n(K);
      let H = (0, r.Pi)((e) => {
        let { children: t, playlist: a } = e,
          { announcements: l, screenReaderInstructions: r } = D(a),
          s = A(a),
          {
            activeId: o,
            handleDragStart: d,
            handleDragCancel: c,
            sensors: u,
          } = (0, g.iMz)(),
          m = (0, n.useCallback)(
            (e) => {
              let { active: t, over: i } = e;
              if (!t.id || !(null == i ? void 0 : i.id)) return;
              let l = a.itemsKeys.indexOf(String(t.id)),
                r = a.itemsKeys.indexOf(String(i.id));
              Number.isInteger(l) &&
                Number.isInteger(r) &&
                s({ from: l, to: r });
            },
            [s, a.itemsKeys],
          ),
          v = (0, n.useMemo)(
            () => a.itemsKeys.indexOf(String(o)),
            [o, a.itemsKeys],
          );
        return a.isDragAndDropEnabled
          ? (0, i.jsxs)(j.LB, {
              sensors: u,
              collisionDetection: j.pE,
              onDragStart: d,
              onDragEnd: m,
              onDragCancel: c,
              modifiers: [C.DL, C.F4],
              accessibility: { announcements: l, screenReaderInstructions: r },
              children: [
                (0, i.jsx)("div", {
                  className: G().root,
                  children: (0, i.jsx)(I.Fo, {
                    items: a.itemsKeys,
                    strategy: I.qw,
                    children: t,
                  }),
                }),
                (0, L.createPortal)(
                  (0, i.jsx)(j.y9, {
                    dropAnimation: { duration: 0 },
                    children: o
                      ? (0, i.jsx)("div", {
                          className: G().draggableItemWrapper,
                          children: (0, i.jsx)(Y, {
                            index: v,
                            className: G().noHoverItem,
                            isDragging: !0,
                            draggingClassName: G().dots,
                          }),
                        })
                      : null,
                  }),
                  window.document.body,
                ),
              ],
            })
          : t;
      });
      var q = a(7797),
        X = a(39892),
        z = a.n(X);
      let Z = (0, r.Pi)((e) => {
        let { playlist: t } = e,
          { formatMessage: a } = (0, o.Z)();
        return (0, i.jsxs)("div", {
          className: z().root,
          children: [
            (0, i.jsx)("div", {
              children:
                t.hasSimilarPlaylists &&
                (0, i.jsx)(g.Ja5, {
                  blockId: g.BEo.PLAYLISTS_SIMILAR_PLAYLIST,
                  blockType: g.BEo.PLAYLISTS_SIMILAR_PLAYLIST,
                  blockPosX: 1,
                  blockPosY: 2,
                  blockIdForFrom: g.BEo.PLAYLISTS_SIMILAR_PLAYLIST,
                  objectsCount: t.similarPlaylists.length,
                  children: (0, i.jsx)(q.VD, {
                    headingVariant: "h2",
                    isShimmerVisible: t.isLoading,
                    isShimmerActive: !0,
                    className: z().carouselContainer,
                    headerClassName: (0, l.W)(
                      z().carouselBlockHeader,
                      z().carouselBlock,
                    ),
                    containerClassName: z().carouselBlock,
                    title: a({ id: "entity-names.similar-playlists" }),
                    playlists: t.similarPlaylists,
                  }),
                }),
            }),
            (0, i.jsx)(p.$_, { className: z().footer }),
          ],
        });
      });
      var Q = a(5362),
        J = a(34073),
        $ = a(15937),
        ee = a(60012);
      let et = (e) => {
          let { item: t, from: a, tracks: i } = e,
            l = i
              .map((e) => {
                if (e) return (0, R.E5)(e);
              })
              .filter((e) => e);
          return {
            contextData: {
              type: w.A.Various,
              meta: { id: t.entityId },
              from: a,
            },
            queueParams: { entityId: t.entityId },
            loadContextMeta: !0,
            entitiesData: l,
          };
        },
        ea = (e, t) => ({
          contextData: { type: w.A.Various, meta: { id: e.entityId }, from: t },
          queueParams: { index: 0, entityId: e.entityId },
          loadContextMeta: !0,
        });
      var ei = a(19740),
        el = a.n(ei);
      let er = (0, r.Pi)((e) => {
        var t, a, r, s, d, c, u, m;
        let { autoFocus: v, className: y } = e,
          { formatMessage: h } = (0, o.Z)(),
          { playlist: P } = (0, g.oR4)(),
          { search: f } = P,
          _ = (0, R.Wc)(),
          x = (0, n.useRef)(0),
          k = (null === (t = P.meta) || void 0 === t ? void 0 : t.isOwnPlaylist)
            ? g.Rhz.OWN_PLAYLISTS
            : g.Rhz.PLAYLIST,
          { from: b } = (0, g.MhG)({ pageId: k, blockId: g.aUg.FILTERED }),
          { from: I } = (0, g.MhG)({ pageId: k, blockId: g.aUg.SUGGESTED }),
          [N, S] = (0, n.useState)(!1);
        (0, n.useEffect)(
          () => () => {
            window.clearTimeout(x.current);
          },
          [],
        );
        let T = (0, n.useMemo)(
            () =>
              (0, J.Z)((e) => {
                let t = e.trim();
                f.setText(t),
                  t &&
                    (null == P ? void 0 : P.meta) &&
                    (f.reset(),
                    f.getTracks({ uid: P.meta.uid, kind: P.meta.kind })),
                  (t && 0 !== t.length) ||
                    (N && (S(!1), P.refreshTracks()), f.setIdleState());
              }, 100),
            [f, P, N],
          ),
          j = (0, n.useCallback)(
            async (e) => {
              if (P.meta) {
                f.setAdditionTrackAnimation(e.id);
                let t = _({
                    track: e,
                    playlist: P.meta,
                    withSuccessNotification: !1,
                    withPageRefresh: !1,
                  }),
                  a = new Promise((e) => {
                    x.current = window.setTimeout(e, 300);
                  }),
                  [i] = await Promise.all([t, a]);
                i === E.pX.OK
                  ? (f.replaceAdditionTrackInProggress(), S(!0))
                  : f.resetAdditionTrackAnimation();
              }
            },
            [_, P.meta, f],
          ),
          C = (0, n.useMemo)(() => {
            var e;
            return f.isLoading
              ? (0, i.jsx)(p.DX, {
                  isActive: !0,
                  className: el().shimmerItem,
                  variant: g.Lxt.PLAYLIST,
                })
              : null === (e = f.playlistTracks) || void 0 === e
                ? void 0
                : e.map((e) =>
                    e
                      ? e.isTrackNonMusic
                        ? (0, i.jsx)(
                            R.FP,
                            {
                              withPodcastName: !0,
                              track: e,
                              playContextParams: et({
                                item: e,
                                from: b,
                                tracks: f.playlistTracks,
                              }),
                              className: (0, l.W)(el().track, {
                                [el().appearingTrack]:
                                  e.id === f.additionTrackInProggress,
                              }),
                            },
                            e.id,
                          )
                        : (0, i.jsx)(
                            R.O2,
                            {
                              className: (0, l.W)(el().track, {
                                [el().appearingTrack]:
                                  e.id === f.additionTrackInProggress,
                              }),
                              track: e,
                              playContextParams: et({
                                item: e,
                                from: b,
                                tracks: f.playlistTracks,
                              }),
                            },
                            e.id,
                          )
                      : null,
                  );
          }, [f.isLoading, f.playlistTracks, f.additionTrackInProggress, b]),
          L = (0, n.useMemo)(() => {
            var e, t;
            return (
              null === (e = P.meta) || void 0 === e ? void 0 : e.canUserChange
            )
              ? f.isLoading
                ? (0, i.jsx)(p.DX, {
                    isActive: !0,
                    className: el().shimmerItem,
                    variant: g.Lxt.PLAYLIST,
                  })
                : null === (t = f.suggestedTracks) || void 0 === t
                  ? void 0
                  : t.map((e) =>
                      e
                        ? (0, i.jsx)(
                            R.VZ,
                            {
                              track: e,
                              className: (0, l.W)({
                                [el().disappearingTrack]:
                                  e.id === f.additionTrackInProggress,
                              }),
                              playContextParams: ea(e, I),
                              onClick: j,
                            },
                            e.id,
                          )
                        : null,
                    )
              : void 0;
          }, [
            null === (a = P.meta) || void 0 === a ? void 0 : a.canUserChange,
            f.isLoading,
            f.suggestedTracks,
            f.additionTrackInProggress,
            I,
            j,
          ]),
          F = (0, n.useMemo)(() => {
            var e, t, a;
            let l =
              !(null === (e = f.suggestedTracks) || void 0 === e
                ? void 0
                : e.length) ||
              !(null === (t = P.meta) || void 0 === t
                ? void 0
                : t.canUserChange);
            return (null === (a = f.playlistTrackIds) || void 0 === a
              ? void 0
              : a.length) ||
              !l ||
              f.isLoading
              ? null
              : (0, i.jsx)(q.vY, {
                  className: el().emptyBlockContainer,
                  isEmptySearch: !0,
                });
          }, [
            null === (r = f.suggestedTracks) || void 0 === r
              ? void 0
              : r.length,
            null === (s = f.playlistTrackIds) || void 0 === s
              ? void 0
              : s.length,
            f.isLoading,
            null === (d = P.meta) || void 0 === d ? void 0 : d.canUserChange,
          ]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(ee.M, {
              className: (0, l.W)(el().root, y),
              autoFocus: v,
              initialValue: f.text,
              correctedValue: null,
              placeholder: h({ id: "search.track-placeholder" }),
              onChange: T,
              resetButtonAriaLabel: h({
                id: "interface-actions.reset-search-input",
              }),
              onResetClick: f.reset,
            }),
            f.text &&
              (0, i.jsxs)("div", {
                className: el().content,
                children: [
                  F,
                  C,
                  Number(
                    null === (c = f.suggestedTracks) || void 0 === c
                      ? void 0
                      : c.length,
                  ) > 0 &&
                    (null === (u = P.meta) || void 0 === u
                      ? void 0
                      : u.canUserChange) &&
                    (0, i.jsx)(
                      B.Heading,
                      {
                        variant: "h3",
                        className: (0, l.W)(el().catalog, {
                          [el().catalog_withTracks]:
                            null === (m = f.playlistTrackIds) || void 0 === m
                              ? void 0
                              : m.length,
                        }),
                        children: (0, i.jsx)($.Z, {
                          id: "search.search-catalog",
                        }),
                      },
                      "search.search-catalog-caption",
                    ),
                  L,
                ],
              }),
          ],
        });
      });
      var es = a(93093),
        en = a(24226),
        eo = a(86108),
        ed = a(35987),
        ec = a.n(ed);
      let eu = (0, r.Pi)((e) => {
        var t;
        let { playlist: a } = e,
          { experiments: l } = (0, g.oR4)(),
          { setPlaylistStickyFiltersRef: r, setPlaylistStaticFiltersRef: s } =
            (0, g.$Y6)(),
          o = (0, en.useTabsState)(a.filters.activeFilterIndex),
          d = (0, n.useRef)(null),
          c = { objectId: a.uuid },
          u = (0, g.Vsk)(a.analyticsParams),
          v = (0, g._mq)(c);
        (0, n.useEffect)(() => {
          var e;
          a.filters.shouldSendEventOnTabOpened &&
            (null === (e = a.filters.items) || void 0 === e
              ? void 0
              : e.length) &&
            (u(), a.filters.setShouldSendEventOnTabOpened(!1));
        }, [
          null === (t = a.filters.items) || void 0 === t ? void 0 : t.length,
          a.filters,
          u,
        ]),
          (0, n.useEffect)(() => {
            var e, t;
            a.filters.shouldSendEventOnTabLoaded &&
              (null === (e = a.filters.items) || void 0 === e
                ? void 0
                : e.length) &&
              (null === (t = a.filters.items) ||
                void 0 === t ||
                t.forEach((e, t) => {
                  v({ tabId: e.id, tabPos: t });
                }),
              a.filters.setShouldSendEventOnTabLoaded(!1));
          }, [
            v,
            a.filters.items,
            a.filters.shouldSendEventOnTabLoaded,
            a.filters.setShouldSendEventOnTabLoaded,
            a.filters,
          ]),
          (0, n.useEffect)(() => {
            a.isResolved && a.filters.getFilters();
          }, [a, a.loadingState]);
        let p = (0, es.W)((e) => {
          var t;
          if (!o.onTabChange || e === o.value) return;
          setTimeout(() => {
            var t, a, i;
            null === (i = d.current) ||
              void 0 === i ||
              null === (a = i.children[e]) ||
              void 0 === a ||
              null === (t = a.focus) ||
              void 0 === t ||
              t.call(a);
          }),
            o.onTabChange(e);
          let i =
            null === (t = a.filters.items) || void 0 === t ? void 0 : t[e];
          i && a.filters.handleFilterClick(i);
        });
        return l.checkExperiment(g.peG.WebNextPlaylistStickyFilters, "on")
          ? (0, i.jsx)(m.kl, {
              child: (0, i.jsx)(eo._K, {
                className: ec().stickyFilters,
                tabsState: o,
                handleFilterClick: p,
                ref: r,
                isSticky: !0,
              }),
              children: (0, i.jsx)(eo._K, {
                className: ec().staticFilters,
                tabsState: o,
                handleFilterClick: p,
                ref: s,
                carouselClassName: ec().staticFiltersCarousel,
              }),
            })
          : (0, i.jsx)(eo._K, {
              className: ec().staticFilters,
              tabsState: o,
              handleFilterClick: p,
              ref: s,
              carouselClassName: ec().staticFiltersCarousel,
            });
      });
      var em = a(54466),
        ev = a.n(em);
      let eg = (0, r.Pi)(() => {
          var e;
          let { user: t, experiments: a } = (0, g.oR4)(),
            r = (0, v.rn)();
          return t.hasPlus || a.checkExperiment(g.peG.WebNextDisableAds, "on")
            ? null
            : (0, i.jsx)("div", {
                className: (0, l.W)({
                  [ev().brandedPlaylistBannerWrapper]: r.isEnabled,
                }),
                style: null === (e = r.data) || void 0 === e ? void 0 : e.style,
                children: (0, i.jsx)(v.N4, {
                  creativeClassName: ev().creative,
                }),
              });
        }),
        ep = (0, r.Pi)((e) => {
          var t;
          let { className: a } = e,
            { ugcUploadCenter: l, playlist: r } = (0, g.oR4)();
          if (
            !(null === (t = r.meta) || void 0 === t ? void 0 : t.kind) ||
            !r.search.isNeededToLoad
          )
            return;
          let s = l.getUploadingTracksByPlaylistKind(r.meta.kind);
          if (0 !== s.length)
            return (0, i.jsx)("div", {
              className: a,
              children: s.map((e, t) => (0, i.jsx)(R.qL, { track: e }, t)),
            });
        });
      var ey = a(234),
        eh = a.n(ey);
      let eP = (0, r.Pi)((e) => {
          let { playlistHeaderRef: t } = e,
            { playlist: a } = (0, g.oR4)(),
            r = (0, v.rn)();
          return ((0, n.useEffect)(() => {
            a.search.isFocused && a.search.removeFocus();
          }, [a.search.isFocused, a.search]),
          a.isLoading || !a.meta || a.isRejected)
            ? (0, i.jsx)(Q.KC, { className: eh().header })
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(eg, {}),
                  (0, i.jsx)(Q.Vm, {
                    className: (0, l.W)(eh().header, {
                      [eh().header_branded]: r.isEnabled,
                    }),
                    playlist: a.meta,
                    isDisabled: a.isDisabled,
                    ref: t,
                  }),
                  (0, i.jsx)(er, {
                    autoFocus: !!(!a.items.length || a.search.isFocused),
                  }),
                  a.isFiltersAvailable && (0, i.jsx)(eu, { playlist: a }),
                  (0, i.jsx)(ep, { className: eh().content }),
                  a.shouldShowEmptyBlock &&
                    (0, i.jsx)(q.vY, { className: eh().emptyPlaylist }),
                ],
              });
        }),
        ef = (0, r.Pi)((e) => {
          var t, a, r, y, h;
          let {
              userId: P,
              kind: k,
              playlistUuid: I,
              preloadedPlaylistByUuid: N,
            } = e,
            {
              playlist: S,
              experiments: j,
              settings: { isMobile: C },
            } = (0, g.oR4)(),
            { formatMessage: L } = (0, o.Z)(),
            { contentScrollRef: F, setContentScrollRef: D } = (0, g.$Y6)(),
            { forceUpdateRefCallback: E, offsetY: A } = (0, c.e)(F),
            w = (0, g.H95)(S.analyticsParams),
            R = (0, g.opW)(S.analyticsParams),
            B = (0, n.useMemo)(() => {
              var e, t;
              return S.isRewind2024Playlist &&
                (null === (e = S.meta) || void 0 === e
                  ? void 0
                  : e.personalColor)
                ? _(S.meta.personalColor)
                : (0, g.XGV)(
                    null == S
                      ? void 0
                      : null === (t = S.meta) || void 0 === t
                        ? void 0
                        : t.averageColor,
                  );
            }, [
              S.isRewind2024Playlist,
              null === (t = S.meta) || void 0 === t ? void 0 : t.personalColor,
              null == S
                ? void 0
                : null === (a = S.meta) || void 0 === a
                  ? void 0
                  : a.averageColor,
            ]),
            [W, M] = (0, m.at)(B, A);
          x(I),
            (0, g.NOh)(S.isResolved),
            f(S),
            (0, n.useEffect)(
              () => (
                w(),
                () => {
                  S.reset(), R();
                }
              ),
              [S, I, P, k],
            );
          let V = (0, n.useMemo)(
              () => ({
                Header: () => (0, i.jsx)(eP, { playlistHeaderRef: E }),
                Item: S.isDragAndDropEnabled ? T : void 0,
                Footer: () => (0, i.jsx)(Z, { playlist: S }),
              }),
              [E, S, S.isDragAndDropEnabled],
            ),
            O = (0, n.useCallback)(
              (e) => {
                S.getTracksByRange(e);
              },
              [S],
            ),
            U = (0, n.useCallback)(
              (e) => {
                var t;
                return null === (t = S.items[e]) || void 0 === t
                  ? void 0
                  : t.key;
              },
              [S.items],
            ),
            K = (0, n.useCallback)((e) => e, []),
            G = (0, n.useMemo)(
              () => [
                (0, g.FsJ)(
                  j.checkExperiment(g.peG.WebNextEntityTrailerOnboarding, "on"),
                ),
              ],
              [j],
            ),
            q = (0, v.rn)();
          if (
            (S.isNeededToLoad &&
              ("string" == typeof I
                ? (0, n.use)(
                    S.getPlaylistByUuid({
                      playlistUuid: I,
                      resumeStream: !1,
                      preloadedPlaylist: N,
                    }),
                  )
                : "string" == typeof P &&
                  "string" == typeof k &&
                  (0, n.use)(
                    S.getPlaylistByUserIdAndKind({
                      userId: P,
                      playlistKind: Number(k),
                      resumeStream: !1,
                    }),
                  )),
            S.isNotFound && (0, s.notFound)(),
            S.isRejected)
          )
            return (0, i.jsx)(u.D, {});
          let X = q.isEnabled ? p.bm.BRANDED_PLAYLIST : p.bm.INNER;
          return (0, i.jsx)(g.Lh6, {
            pageId: g.Rhz.PLAYLIST,
            pageEntityId: I,
            children: (0, i.jsx)(g.kZw, {
              config: G,
              children: (0, i.jsx)(m.I7, {
                scrollElement: F,
                children: (0, i.jsxs)("div", {
                  className: b().wrapper,
                  style:
                    null === (r = q.data) || void 0 === r ? void 0 : r.style,
                  children: [
                    (0, i.jsx)(p.h4, { variant: X, style: M }),
                    !q.isEnabled &&
                      (0, i.jsx)("div", {
                        className: b().averageColorBackground,
                        style: W,
                      }),
                    (0, i.jsx)(H, {
                      playlist: S,
                      children: (0, i.jsx)(p.Wv, {
                        context: {
                          listAriaLabel: L(
                            { id: "entity-names.playlist-tracks-list" },
                            {
                              playlistName:
                                (null === (y = S.meta) || void 0 === y
                                  ? void 0
                                  : y.title) || "",
                            },
                          ),
                        },
                        className: (0, l.W)(b().root, b().important),
                        listClassName: b().content,
                        customComponents: V,
                        computeItemKey: S.isDragAndDropEnabled ? U : K,
                        totalCount: S.virtualListItemsCount,
                        itemContentCallback: (e) => (0, i.jsx)(Y, { index: e }),
                        onGetDataByRange: O,
                        debounceDurationInMs: 300,
                        initialItemCount:
                          null === (h = S.items) || void 0 === h
                            ? void 0
                            : h.length,
                        handleRef: D,
                        shouldTriggerRangeChangedOnTotalCountChange: !0,
                        testId: d.Br.playlist.PLAYLIST_PAGE,
                        isMobileLayout: C,
                        useWindowScroll: C,
                        withFooter: !0,
                        withForceScroll: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        e_ = (0, r.Pi)((e) =>
          (0, i.jsx)(v.eW, { children: (0, i.jsx)(ef, { ...e }) }),
        );
    },
    55284: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistShimmersPage: function () {
          return o;
        },
      });
      var i = a(75441),
        l = a(5362),
        r = a(97141),
        s = a(6948),
        n = a.n(s);
      let o = () =>
        (0, i.jsxs)("div", {
          className: n().root,
          children: [
            (0, i.jsx)(r.h4, { className: n().header }),
            (0, i.jsx)(l.KC, { isActive: !0 }),
          ],
        });
    },
    86108: function (e, t, a) {
      "use strict";
      a.d(t, {
        W: function () {
          return i;
        },
        _K: function () {
          return v.PlaylistFilters;
        },
        Tb: function () {
          return m;
        },
        Wj: function () {
          return u;
        },
        M: function () {
          return r;
        },
        S: function () {
          return s.useSetPlaylistFilters;
        },
      }),
        ((i || (i = {})).ALL = "all");
      var i,
        l = a(98375);
      let r = (e) => {
        let [t, a] = e.split(":");
        return { type: l.RX.Unloaded, meta: { id: String(t), albumId: a } };
      };
      var s = a(92146),
        n = a(22874),
        o = a(54306),
        d = a(1150),
        c = a(13534);
      let u = n.V5.model("PlaylistItem", {
          id: n.V5.union(n.V5.string, n.V5.number),
          albumId: n.V5.maybeNull(n.V5.union(n.V5.string, n.V5.number)),
          key: n.V5.string,
          data: n.V5.maybeNull(d.le),
          loadingState: n.V5.enumeration(Object.values(c.Gui)),
        }),
        m = n.V5.model("PlaylistFiltersItem", {
          id: n.V5.string,
          name: n.V5.string,
          tracks: n.V5.array(u),
          unloadedTracks: n.V5.maybe(n.V5.array(o.jN)),
        });
      var v = a(92394);
      a(32624);
    },
    92146: function (e, t, a) {
      "use strict";
      a.d(t, {
        useSetPlaylistFilters: function () {
          return s;
        },
      });
      var i = a(65067),
        l = a(84638),
        r = a(13534);
      let s = (e) => {
        let { sonata: t } = e,
          { sonataState: a } = (0, r.oR4)();
        (0, i.useEffect)(() => {
          let e =
            null == t
              ? void 0
              : t.state.queueState.currentEntity.onChange((e) => {
                  if (null == e ? void 0 : e.context.data) {
                    if ("filter" in e.context.data) {
                      let t = null == e ? void 0 : e.context.data.filter;
                      a.setPlaylistFilter(t);
                    }
                    (null == e ? void 0 : e.context.data.type) === l.A.Vibe &&
                      a.setPlaylistFilter(void 0);
                  }
                });
          return () => {
            null == e || e();
          };
        }, [null == t ? void 0 : t.state.queueState.currentEntity, a]);
      };
    },
    92394: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistFilters: function () {
          return p;
        },
      });
      var i = a(75441),
        l = a(32358),
        r = a(62569),
        s = a(65067),
        n = a(13534),
        o = a(97141),
        d = a(32624),
        c = a(15907),
        u = a.n(c);
      let m = {
          [n.t8m.Desktop]: { start: 40, end: 20 },
          [n.t8m.Mobile]: { start: 40, end: 40 },
        },
        v = {
          [n.t8m.Desktop]: { start: 40, end: 20 },
          [n.t8m.Mobile]: { start: 20, end: 50 },
        },
        g = (0, r.Pi)((e) => {
          let {
              tabsState: t,
              handleFilterClick: a,
              className: r,
              forwardRef: c,
              carouselClassName: g,
              isSticky: p,
            } = e,
            {
              playlist: y,
              settings: { isMobile: h },
            } = (0, n.oR4)(),
            {
              playlistStickyFiltersRef: P,
              playlistStaticFiltersRef: f,
              contentScrollRef: _,
            } = (0, n.$Y6)(),
            x = (0, s.useMemo)(() => {
              var e;
              return (0, i.jsx)(o.no, {
                ref: c,
                className: (0, l.W)(u().carousel, g),
                ...t,
                onTabChange: a,
                children:
                  null === (e = y.filters.items) || void 0 === e
                    ? void 0
                    : e.map((e, a) =>
                        (0, i.jsx)(
                          o.OK,
                          {
                            tabIndex: p ? -1 : 0,
                            className: (0, l.W)(u().filter, {
                              [u().filter_selected]: a === t.value,
                            }),
                            title: e.name,
                            value: a,
                          },
                          a,
                        ),
                      ),
              });
            }, [t, p, a, y.filters.items, g, c]),
            k = (0, s.useCallback)(() => {
              f && P && (f.scrollLeft = P.scrollLeft);
            }, [f, P]),
            b = (0, s.useCallback)(() => {
              f &&
                P &&
                (P.classList.add(u().carousel_noSmooth),
                (P.scrollLeft = f.scrollLeft),
                P.classList.remove(u().carousel_noSmooth));
            }, [f, P]),
            [I, N] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            I && b();
          }, [I, b]);
          let S = (0, s.useCallback)(() => {
            N(
              (null == P ? void 0 : P.checkVisibility({ checkOpacity: !0 })) ||
                !1,
            );
          }, [P]);
          return ((0, s.useEffect)(() => {
            let e = new AbortController(),
              t = { signal: e.signal };
            return (
              p
                ? (null == P || P.addEventListener("scroll", k, t),
                  null == P || P.addEventListener("resize", k, t))
                : h
                  ? (window.addEventListener("scroll", S, t),
                    window.addEventListener("resize", S, t))
                  : (null == _ || _.addEventListener("scroll", S, t),
                    null == _ || _.addEventListener("resize", S, t)),
              () => {
                e.abort();
              }
            );
          }, [p, _, P, S, k, h]),
          y.filters.isShimmerVisible)
            ? (0, i.jsx)(d.PlaylistFiltersShimmer, {})
            : y.filters.items &&
                0 !== y.filters.items.length &&
                y.search.isNeededToLoad
              ? (0, i.jsx)(o.J3, {
                  className: r,
                  carouselElement: x,
                  ref: c,
                  scrollPadding: p ? v : m,
                })
              : void 0;
        }),
        p = (0, s.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
    },
    32624: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistFiltersShimmer: function () {
          return d;
        },
      });
      var i = a(75441),
        l = a(32358),
        r = a(62569),
        s = a(97141),
        n = a(48690),
        o = a.n(n);
      let d = (0, r.Pi)((e) => {
        let { className: t } = e;
        return (0, i.jsx)(s.no, {
          className: (0, l.W)(o().root, t),
          isShimmerVisible: !0,
          value: 0,
          shimmer: (0, i.jsx)(s.tS, {
            className: o().root,
            shimmerClassName: o().shimmer,
            count: 3,
          }),
        });
      });
    },
    8350: function (e) {
      e.exports = {
        root: "PlaylistPage_root__ajyaP",
        important: "PlaylistPage_important__1Xpl5",
        wrapper: "PlaylistPage_wrapper__XLjbD",
        averageColorBackground: "PlaylistPage_averageColorBackground__3wEkw",
        content: "PlaylistPage_content__T7zOm",
        brandedPlaylistBannerCreative:
          "PlaylistPage_brandedPlaylistBannerCreative__fr6ZP",
      };
    },
    30691: function (e) {
      e.exports = {
        root: "PlaylistPageDnDItemWrapper_root__eBm1E",
        inner: "PlaylistPageDnDItemWrapper_inner__UXQZf",
        dragging: "PlaylistPageDnDItemWrapper_dragging__Pl94m",
        dragOverlay: "PlaylistPageDnDItemWrapper_dragOverlay__tWQut",
      };
    },
    62067: function (e) {
      e.exports = {
        root: "PlaylistPageDnDList_root__6Fryw",
        draggableItemWrapper: "PlaylistPageDnDList_draggableItemWrapper__vvEWL",
        dots: "PlaylistPageDnDList_dots__F4qh2",
        noHoverItem: "PlaylistPageDnDList_noHoverItem__dbPTH",
      };
    },
    35987: function (e) {
      e.exports = {
        stickyFilters: "PlaylistPageFilters_stickyFilters__SfT9C",
        staticFilters: "PlaylistPageFilters_staticFilters__sk7JJ",
        staticFiltersCarousel:
          "PlaylistPageFilters_staticFiltersCarousel__vJQXE",
      };
    },
    39892: function (e) {
      e.exports = {
        root: "PlaylistPageFooter_root__h6jh8",
        carouselContainer: "PlaylistPageFooter_carouselContainer__fIwg5",
        carouselBlock: "PlaylistPageFooter_carouselBlock__OFRtz",
        carouselBlockHeader: "PlaylistPageFooter_carouselBlockHeader__HbjLr",
        footer: "PlaylistPageFooter_footer__Mqwre",
      };
    },
    234: function (e) {
      e.exports = {
        header: "PlaylistPageHeader_header__Fgqns",
        header_branded: "PlaylistPageHeader_header_branded__WyJ4k",
        content: "PlaylistPageHeader_content__boBkt",
        emptyPlaylist: "PlaylistPageHeader_emptyPlaylist__oiG4B",
      };
    },
    54466: function (e) {
      e.exports = {
        brandedPlaylistBannerWrapper:
          "PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI",
        creative: "PlaylistPageHeaderBranding_creative__5OXtq",
      };
    },
    1254: function (e) {
      e.exports = {
        emptyBlockContainer: "PlaylistPageItem_emptyBlockContainer__K5xRV",
        shimmerItem: "PlaylistPageItem_shimmerItem__s_fFo",
        isDuplicate: "PlaylistPageItem_isDuplicate__Fhcc1",
      };
    },
    69034: function (e) {
      e.exports = {
        root: "PlaylistPageItemEditorialBeforeTitle_root__DcMpV",
        major: "PlaylistPageItemEditorialBeforeTitle_major__lifWe",
      };
    },
    6948: function (e) {
      e.exports = {
        root: "PlaylistShimmersPage_root__RsNRj",
        header: "PlaylistShimmersPage_header__vm4q3",
      };
    },
    15907: function (e) {
      e.exports = {
        carousel: "PlaylistFilters_carousel__AfoU1",
        carousel_noSmooth: "PlaylistFilters_carousel_noSmooth__cPLaQ",
        filter: "PlaylistFilters_filter__s_myh",
        filter_selected: "PlaylistFilters_filter_selected__y3GuB",
      };
    },
    48690: function (e) {
      e.exports = {
        root: "PlaylistFiltersShimmer_root__dFSKz",
        shimmer: "PlaylistFiltersShimmer_shimmer__7myrt",
      };
    },
    19740: function (e) {
      e.exports = {
        root: "SearchPlaylistInput_root__o14iM",
        content: "SearchPlaylistInput_content__iDyfU",
        catalog: "SearchPlaylistInput_catalog__5r6Xm",
        catalog_withTracks: "SearchPlaylistInput_catalog_withTracks__B2ZYF",
        track: "SearchPlaylistInput_track__2TGLS",
        shimmerItem: "SearchPlaylistInput_shimmerItem__V0cOt",
        emptyBlockContainer: "SearchPlaylistInput_emptyBlockContainer__NSQKG",
        disappearingTrack: "SearchPlaylistInput_disappearingTrack__D6ja5",
        disappearing: "SearchPlaylistInput_disappearing__w48Cd",
        appearingTrack: "SearchPlaylistInput_appearingTrack__CYHzN",
        appearing: "SearchPlaylistInput_appearing__SafaE",
      };
    },
  },
]);
