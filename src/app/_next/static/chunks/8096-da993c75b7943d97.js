(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8096],
    {
        138: (e, t, a) => {
            "use strict";
            a.d(t, { PlaylistNotFoundPage: () => d });
            var l = a(33008),
                i = a(97531),
                s = a(66268),
                r = a(35233),
                n = a(79169);
            let o = (0, i.PA)(() => {
                    let { playlist: e } = (0, n.Pjs)();
                    return (
                        (0, n.ACS)(),
                        (0, s.useEffect)(() => {
                            e.reset();
                        }, []),
                        (0, l.jsx)(r.M, {})
                    );
                }),
                d = (0, i.PA)(() =>
                    (0, l.jsx)(n.nVz, {
                        pageId: n._Q$.PAGE_NOT_FOUND_SCREEN,
                        children: (0, l.jsx)(o, {}),
                    }),
                );
        },
        3209: (e) => {
            e.exports = {
                root: "SearchPlaylistInput_root__o14iM",
                content: "SearchPlaylistInput_content__iDyfU",
                catalog: "SearchPlaylistInput_catalog__5r6Xm",
                catalog_withTracks:
                    "SearchPlaylistInput_catalog_withTracks__B2ZYF",
                track: "SearchPlaylistInput_track__2TGLS",
                shimmerItem: "SearchPlaylistInput_shimmerItem__V0cOt",
                emptyBlockContainer:
                    "SearchPlaylistInput_emptyBlockContainer__NSQKG",
                disappearingTrack:
                    "SearchPlaylistInput_disappearingTrack__D6ja5",
                disappearing: "SearchPlaylistInput_disappearing__w48Cd",
                appearingTrack: "SearchPlaylistInput_appearingTrack__CYHzN",
                appearing: "SearchPlaylistInput_appearing__SafaE",
            };
        },
        20149: (e) => {
            e.exports = {
                carousel: "PlaylistFilters_carousel__AfoU1",
                carousel_noSmooth: "PlaylistFilters_carousel_noSmooth__cPLaQ",
                filter: "PlaylistFilters_filter__s_myh",
                filter_selected: "PlaylistFilters_filter_selected__y3GuB",
            };
        },
        25916: (e) => {
            e.exports = {
                root: "PlaylistShimmersPage_root__RsNRj",
                header: "PlaylistShimmersPage_header__vm4q3",
            };
        },
        27191: (e) => {
            e.exports = {
                root: "PlaylistFiltersShimmer_root__dFSKz",
                shimmer: "PlaylistFiltersShimmer_shimmer__7myrt",
            };
        },
        34240: (e) => {
            e.exports = {
                emptyBlockContainer:
                    "PlaylistPageItem_emptyBlockContainer__K5xRV",
                shimmerItem: "PlaylistPageItem_shimmerItem__s_fFo",
                isDuplicate: "PlaylistPageItem_isDuplicate__Fhcc1",
            };
        },
        36120: (e) => {
            e.exports = {
                root: "PlaylistPageItemEditorialBeforeTitle_root__DcMpV",
                major: "PlaylistPageItemEditorialBeforeTitle_major__lifWe",
            };
        },
        36186: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper:
                    "PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI",
                creative: "PlaylistPageHeaderBranding_creative__5OXtq",
            };
        },
        42218: (e) => {
            e.exports = {
                root: "PlaylistPageDnDList_root__6Fryw",
                draggableItemWrapper:
                    "PlaylistPageDnDList_draggableItemWrapper__vvEWL",
                dots: "PlaylistPageDnDList_dots__F4qh2",
                noHoverItem: "PlaylistPageDnDList_noHoverItem__dbPTH",
            };
        },
        46369: (e, t, a) => {
            "use strict";
            a.d(t, {
                Q1: () => l,
                AI: () => g.PlaylistFilters,
                S9: () => m,
                PZ: () => u,
                Qy: () => s,
                rb: () => r.useSetPlaylistFilters,
            });
            var l = (function (e) {
                    return (e.ALL = "all"), e;
                })({}),
                i = a(53555);
            let s = (e) => {
                let [t, a] = e.split(":");
                return {
                    type: i.z4.Unloaded,
                    meta: { id: String(t), albumId: a },
                };
            };
            var r = a(75651),
                n = a(41028),
                o = a(2865),
                d = a(44078),
                c = a(79169);
            let u = n.gK.model("PlaylistItem", {
                    id: n.gK.union(n.gK.string, n.gK.number),
                    albumId: n.gK.maybeNull(
                        n.gK.union(n.gK.string, n.gK.number),
                    ),
                    key: n.gK.string,
                    data: n.gK.maybeNull(d.vj),
                    loadingState: n.gK.enumeration(Object.values(c.GuX)),
                }),
                m = n.gK.model("PlaylistFiltersItem", {
                    id: n.gK.string,
                    name: n.gK.string,
                    tracks: n.gK.array(u),
                    unloadedTracks: n.gK.maybe(n.gK.array(o.x6)),
                });
            var g = a(88233);
            a(94615);
        },
        48708: (e, t, a) => {
            "use strict";
            a.d(t, { C: () => i });
            var l = a(79169);
            async function i(e, t) {
                var a, i, s, r, n;
                if (!e)
                    return {
                        title: "",
                        description: "",
                        openGraph: {},
                        twitter: {},
                        appLinks: {},
                        other: {},
                    };
                let o = await (0, l.WGy)(t.locale),
                    d =
                        null != (i = e.ogTitle)
                            ? i
                            : (0, l.YFq)(e.title, 48, !1),
                    c = o(
                        { id: "metadata.playlist-title" },
                        { playlistTitle: e.title },
                    );
                return (null == (a = e.owner) ? void 0 : a.verified)
                    ? {
                          title: c,
                          description: c,
                          openGraph: (0, l.i$E)({
                              ogTitle: d,
                              ogDescription: (function (e) {
                                  var t;
                                  let { playlistMeta: a, messageFormatter: i } =
                                          e,
                                      s = "";
                                  return (
                                      a.ogDescription
                                          ? (s = a.ogDescription)
                                          : a.description &&
                                            (s = a.description.replace(
                                                /\[(.*?)\]\(.*?\)/gi,
                                                "$1",
                                            )),
                                      [
                                          (s = (0, l.YFq)(s, 96, !1)),
                                          i({ id: "metadata.playlist" }),
                                          (null != (t = a.likesCount) ? t : 0) >
                                              0 &&
                                              i(
                                                  {
                                                      id: "metadata.likes-counter",
                                                  },
                                                  { counter: a.likesCount },
                                              ),
                                      ]
                                          .filter(Boolean)
                                          .join(" • ")
                                  );
                              })({ playlistMeta: e, messageFormatter: o }),
                              fullUrl: null != (s = t.fullUrl) ? s : "",
                              locale: t.locale,
                              ogImage: e.ogImage,
                              siteName: o({ id: "metadata.yandex-music" }),
                              ogType: "music.playlist",
                          }),
                          twitter: (0, l.HRN)({
                              cardType: l.WfF.APP,
                              title: d,
                              url: t.url,
                              appName: o({ id: "metadata.yandex-music" }),
                          }),
                          appLinks: (0, l.X5i)({
                              additional: {
                                  ...t,
                                  url: null != (r = t.url) ? r : "",
                                  fullUrl: null != (n = t.fullUrl) ? n : "",
                                  host: t.host,
                              },
                              appName: o({ id: "metadata.yandex-music" }),
                          }),
                          alternates: (0, l.SEs)(
                              "/playlists/:playlistUuid",
                              t.tld,
                              { params: { playlistUuid: e.playlistUuid } },
                          ),
                      }
                    : { robots: { index: !1, follow: !1 } };
            }
        },
        64998: (e) => {
            e.exports = {
                root: "PlaylistPageDnDItemWrapper_root__eBm1E",
                inner: "PlaylistPageDnDItemWrapper_inner__UXQZf",
                dragging: "PlaylistPageDnDItemWrapper_dragging__Pl94m",
                dragOverlay: "PlaylistPageDnDItemWrapper_dragOverlay__tWQut",
            };
        },
        68300: (e, t, a) => {
            "use strict";
            a.d(t, { PlaylistShimmersPage: () => o });
            var l = a(33008),
                i = a(74837),
                s = a(18740),
                r = a(25916),
                n = a.n(r);
            let o = () =>
                (0, l.jsxs)("div", {
                    className: n().root,
                    children: [
                        (0, l.jsx)(s.Y9, { className: n().header }),
                        (0, l.jsx)(i.c6, { isActive: !0 }),
                    ],
                });
        },
        69632: (e) => {
            e.exports = {
                root: "PlaylistPage_root__ajyaP",
                important: "PlaylistPage_important__1Xpl5",
                wrapper: "PlaylistPage_wrapper__XLjbD",
                averageColorBackground:
                    "PlaylistPage_averageColorBackground__3wEkw",
                content: "PlaylistPage_content__T7zOm",
                brandedPlaylistBannerCreative:
                    "PlaylistPage_brandedPlaylistBannerCreative__fr6ZP",
            };
        },
        75651: (e, t, a) => {
            "use strict";
            a.d(t, { useSetPlaylistFilters: () => r });
            var l = a(66268),
                i = a(48509),
                s = a(79169);
            let r = (e) => {
                let { sonata: t } = e,
                    { sonataState: a } = (0, s.Pjs)();
                (0, l.useEffect)(() => {
                    let e =
                        null == t
                            ? void 0
                            : t.state.queueState.currentEntity.onChange((e) => {
                                  if (null == e ? void 0 : e.context.data) {
                                      if ("filter" in e.context.data) {
                                          let t =
                                              null == e
                                                  ? void 0
                                                  : e.context.data.filter;
                                          a.setPlaylistFilter(t);
                                      }
                                      (null == e
                                          ? void 0
                                          : e.context.data.type) === i.K.Vibe &&
                                          a.setPlaylistFilter(void 0);
                                  }
                              });
                    return () => {
                        null == e || e();
                    };
                }, [null == t ? void 0 : t.state.queueState.currentEntity, a]);
            };
        },
        84684: (e, t, a) => {
            "use strict";
            a.d(t, { PlaylistPage: () => ey });
            var l = a(33008),
                i = a(85896),
                s = a(97531),
                r = a(17846),
                n = a(66268),
                o = a(73827),
                d = a(18064),
                c = a(1357),
                u = a(83888),
                m = a(64143),
                g = a(33492),
                p = a(79169),
                y = a(18740),
                P = a(97557),
                v = a(48708),
                h = a(69632),
                _ = a.n(h),
                f = a(86700),
                x = a(64998),
                k = a.n(x);
            let I = (0, s.PA)(
                (0, n.forwardRef)((e, t) => {
                    var a;
                    let { children: s, "data-index": r, ...o } = e,
                        { playlist: d } = (0, p.Pjs)(),
                        {
                            isDragging: c,
                            listeners: u,
                            setNodeRef: m,
                            transform: g,
                            transition: y,
                            attributes: P,
                        } = (0, f.gl)({
                            id: String(
                                null == (a = d.items[r]) ? void 0 : a.key,
                            ),
                        }),
                        v = (0, n.useCallback)(
                            (e) => {
                                m(e), "function" == typeof t && t(e);
                            },
                            [t, m],
                        ),
                        h = {
                            transition: y,
                            "--translate-y": g
                                ? "".concat(Math.round(g.y), "px")
                                : void 0,
                        };
                    return (0, l.jsx)("div", {
                        ref: v,
                        "data-index": r,
                        style: h,
                        ...o,
                        className: k().root,
                        children: (0, l.jsx)("div", {
                            className: (0, i.$)(k().inner, {
                                [k().dragging]: c,
                            }),
                            ...u,
                            ...P,
                            children: s,
                        }),
                    });
                }),
            );
            var b = a(72454),
                j = a(29371),
                S = a(17229);
            let N = (e, t) => {
                var a;
                let l = t - 1;
                if (!e.items.length || l < 0 || l > e.items.length) return "";
                let i = e.items[l];
                return (
                    (null == i || null == (a = i.data) ? void 0 : a.title) || ""
                );
            };
            var T = a(25911),
                C = a(48509),
                A = a(34240),
                L = a.n(A),
                F = a(44078),
                D = a(77868),
                E = a(36120),
                w = a.n(E);
            let B = (0, s.PA)((e) => {
                    var t, a, i, s, r;
                    let { item: o } = e,
                        { playlist: d, experiments: c } = (0, p.Pjs)(),
                        {
                            shouldShowMajor: u,
                            shouldShowGenre: m,
                            shouldShowDuplicate: g,
                        } = d.editorFeature,
                        y = c.checkExperiment(p.zal.WebEditorsFeatures, "on"),
                        P =
                            g &&
                            d.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!y || !o || (!m && !u && !P)) return null;
                    let v = [],
                        h =
                            null == (a = o.data) || null == (t = a.major)
                                ? void 0
                                : t.name,
                        _ =
                            null == (r = o.data) ||
                            null == (s = r.albums) ||
                            null == (i = s[0])
                                ? void 0
                                : i.genre;
                    if ((P && v.push("№".concat(P)), u && h)) {
                        let e = d.editorFeature.getColorForMajor(h),
                            t = (0, l.jsx)("span", {
                                className: w().major,
                                style: { "--major-color": e },
                                children: h,
                            });
                        v.push(t);
                    }
                    if ((m && _ && v.push(_), !v.length)) return null;
                    let f = v.map((e, t, a) =>
                        (0, l.jsxs)(
                            n.Fragment,
                            { children: [e, t < a.length - 1 && "; "] },
                            t,
                        ),
                    );
                    return (0, l.jsxs)(D.Caption, {
                        className: w().root,
                        type: "entity",
                        size: "m",
                        weight: "medium",
                        variant: "span",
                        children: ["[", f, "] \xa0"],
                    });
                }),
                R = (0, s.PA)((e) => {
                    let {
                            item: t,
                            track: a,
                            withDNDBlock: i,
                            isDragging: s,
                            draggingClassName: r,
                            from: n,
                            utmLink: o,
                            index: d,
                            className: c,
                        } = e,
                        { playlist: u, sonataState: m } = (0, p.Pjs)(),
                        {
                            removeTrackFromPlaylist: g,
                            canRemoveTrackFromPlaylist: y,
                        } = (0, F.sR)();
                    return (0, l.jsx)(F.Kd, {
                        beforeTitle: (0, l.jsx)(B, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: i,
                        isDragging: s,
                        track: a,
                        handleRemove: y ? g : void 0,
                        draggingClassName: r,
                        playContextParams: {
                            contextData: {
                                type: C.K.Playlist,
                                meta: u.contextMeta,
                                from: n,
                                utmLink: o,
                            },
                            entitiesData: m.unloadedEntitiesDataFromModels,
                            queueParams: { index: d },
                            loadContextMeta: !0,
                        },
                        className: c,
                    });
                }),
                K = (0, s.PA)((e) => {
                    let {
                            item: t,
                            track: a,
                            withDNDBlock: s,
                            isDragging: r,
                            draggingClassName: n,
                            from: o,
                            utmLink: d,
                            index: c,
                            className: u,
                        } = e,
                        { playlist: m, sonataState: g } = (0, p.Pjs)(),
                        {
                            removeTrackFromPlaylist: y,
                            canRemoveTrackFromPlaylist: P,
                        } = (0, F.sR)();
                    return (0, l.jsx)(F.Kt, {
                        beforeTitle: (0, l.jsx)(B, { item: t }),
                        withDNDBlock: s,
                        isDragging: r,
                        track: a,
                        handleRemove: P ? y : void 0,
                        draggingClassName: n,
                        playContextParams: {
                            contextData: {
                                type: C.K.Playlist,
                                meta: m.contextMeta,
                                from: o,
                                utmLink: d,
                                filter: m.filters.activeFilter,
                                filterName: m.filters.activeFilterName,
                                enableVariousAutoFlow: m.enableVariousAutoFlow,
                            },
                            entitiesData: g.unloadedEntitiesDataFromModels,
                            queueParams: { index: c },
                            loadContextMeta: !0,
                        },
                        activeFilter: m.filters.activeFilter,
                        activeFilterIndex:
                            m.filters.analyticsParamsActiveFilterIndex,
                        className: (0, i.$)(u, {
                            [L().isDuplicate]:
                                m.editorFeature.shouldHighlightDublicatedTrack(
                                    t,
                                ),
                        }),
                    });
                }),
                U = (0, s.PA)((e) => {
                    var t, a, s;
                    let r,
                        {
                            index: n,
                            className: o,
                            isDragging: d,
                            draggingClassName: c,
                        } = e,
                        { playlist: u } = (0, p.Pjs)(),
                        m = (null == (t = u.meta) ? void 0 : t.uuid) || u.uuid,
                        { from: g, utmLink: P } = (0, p.fyy)({
                            pageId: p._Q$.PLAYLIST,
                            blockId: p.UfI.PLAYLIST,
                            pageEntityId: m,
                            contextType: C.K.Playlist,
                            contextId: m,
                        }),
                        v = u.isDragAndDropEnabled,
                        h = null == (a = u.items) ? void 0 : a[n];
                    return (
                        (r =
                            h && h.data && u.meta
                                ? h.data.isTrackNonMusic ||
                                  (null == (s = h.data.mainAlbum)
                                      ? void 0
                                      : s.isNonMusic)
                                    ? (0, l.jsx)(R, {
                                          item: h,
                                          withDNDBlock: v,
                                          isDragging: d,
                                          from: g,
                                          index: n,
                                          track: h.data,
                                          utmLink: P,
                                          draggingClassName: c,
                                          className: o,
                                      })
                                    : (0, l.jsx)(K, {
                                          item: h,
                                          from: g,
                                          index: n,
                                          track: h.data,
                                          withDNDBlock: v,
                                          isDragging: d,
                                          draggingClassName: c,
                                          className: (0, i.$)(o, {
                                              [L().isDuplicate]:
                                                  u.editorFeature.shouldHighlightDublicatedTrack(
                                                      h,
                                                  ),
                                          }),
                                      })
                                : (0, l.jsx)(y.DS, {
                                      isActive: !0,
                                      className: L().shimmerItem,
                                      variant: p.Xjt.PLAYLIST,
                                  })),
                        (0, l.jsx)(T.xG.Provider, {
                            value: { playlist: u.meta, trackIndex: n },
                            children: r,
                        })
                    );
                });
            var M = a(42218),
                Y = a.n(M);
            let O = (0, s.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: i, screenReaderInstructions: s } = ((
                        e,
                    ) => {
                        let { formatMessage: t } = (0, o.A)();
                        return {
                            screenReaderInstructions: {
                                draggable: t({
                                    id: "drag-and-drop.playlist-move-instructions",
                                }),
                            },
                            announcements: {
                                onDragStart(a) {
                                    let { active: l } = a;
                                    return t(
                                        {
                                            id: "drag-and-drop.playlist-on-move-start",
                                        },
                                        {
                                            trackName: N(e, Number(l.id)),
                                            index: l.id,
                                        },
                                    );
                                },
                                onDragOver(a) {
                                    let { active: l, over: i } = a,
                                        s = N(e, Number(l.id));
                                    return i
                                        ? t(
                                              {
                                                  id: "drag-and-drop.playlist-on-move",
                                              },
                                              { trackName: s, index: i.id },
                                          )
                                        : t(
                                              {
                                                  id: "drag-and-drop.playlist-on-move-fail",
                                              },
                                              { trackName: s },
                                          );
                                },
                                onDragEnd(a) {
                                    let { active: l, over: i } = a,
                                        s = N(e, Number(l.id));
                                    return i
                                        ? t(
                                              {
                                                  id: "drag-and-drop.playlist-on-move-end-with-index",
                                              },
                                              { trackName: s, index: i.id },
                                          )
                                        : t(
                                              {
                                                  id: "drag-and-drop.playlist-on-move-end",
                                              },
                                              { trackName: s },
                                          );
                                },
                                onDragCancel: () =>
                                    t({
                                        id: "drag-and-drop.playlist-on-move-cancel",
                                    }),
                            },
                        };
                    })(a),
                    r = ((e) => {
                        let { notify: t } = (0, p.lkh)(),
                            { formatMessage: a } = (0, o.A)();
                        return (0, n.useCallback)(
                            async (i) => {
                                var s, r, n, o;
                                let { from: d, to: c } = i;
                                if (
                                    d < 0 ||
                                    c < 0 ||
                                    d >= e.items.length ||
                                    c >= e.items.length
                                )
                                    return;
                                let u = String(
                                    null == (s = e.items[d]) ? void 0 : s.id,
                                );
                                if (!u) return;
                                let m = (
                                    null == (r = e.items[d])
                                        ? void 0
                                        : r.albumId
                                )
                                    ? Number(
                                          null == (n = e.items[d])
                                              ? void 0
                                              : n.albumId,
                                      )
                                    : void 0;
                                e.moveTrack(d, c);
                                let g = await (null == (o = e.meta)
                                    ? void 0
                                    : o.changePlaylist(
                                          (0, T.Mp)({
                                              operation: T.yC.MOVE,
                                              startPosition: d,
                                              endPosition: c,
                                              tracks: [{ id: u, albumId: m }],
                                          }),
                                      ));
                                (g && g === T.Y9.OK) ||
                                    (g === T.Y9.RELOAD
                                        ? e.refresh()
                                        : e.moveTrack(c, d),
                                    t(
                                        (0, l.jsx)(y.hT, {
                                            error: a({
                                                id: "drag-and-drop.failed-to-move",
                                            }),
                                        }),
                                        { containerId: p.uQT.ERROR },
                                    ));
                            },
                            [a, t, e],
                        );
                    })(a),
                    {
                        activeId: d,
                        handleDragStart: c,
                        handleDragCancel: u,
                        sensors: m,
                    } = (0, p.YcA)(),
                    g = (0, n.useCallback)(
                        (e) => {
                            let { active: t, over: l } = e;
                            if (!t.id || !(null == l ? void 0 : l.id)) return;
                            let i = a.itemsKeys.indexOf(String(t.id)),
                                s = a.itemsKeys.indexOf(String(l.id));
                            Number.isInteger(i) &&
                                Number.isInteger(s) &&
                                r({ from: i, to: s });
                        },
                        [r, a.itemsKeys],
                    ),
                    P = (0, n.useMemo)(
                        () => a.itemsKeys.indexOf(String(d)),
                        [d, a.itemsKeys],
                    );
                return a.isDragAndDropEnabled
                    ? (0, l.jsxs)(b.Mp, {
                          sensors: m,
                          collisionDetection: b.fp,
                          onDragStart: c,
                          onDragEnd: g,
                          onDragCancel: u,
                          modifiers: [j.FN, j.gj],
                          accessibility: {
                              announcements: i,
                              screenReaderInstructions: s,
                          },
                          children: [
                              (0, l.jsx)("div", {
                                  className: Y().root,
                                  children: (0, l.jsx)(f.gB, {
                                      items: a.itemsKeys,
                                      strategy: f._G,
                                      children: t,
                                  }),
                              }),
                              (0, S.createPortal)(
                                  (0, l.jsx)(b.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: d
                                          ? (0, l.jsx)("div", {
                                                className:
                                                    Y().draggableItemWrapper,
                                                children: (0, l.jsx)(U, {
                                                    index: P,
                                                    className: Y().noHoverItem,
                                                    isDragging: !0,
                                                    draggingClassName: Y().dots,
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
            var $ = a(45242),
                H = a(91560),
                W = a.n(H);
            let V = (0, s.PA)((e) => {
                let { playlist: t } = e,
                    { formatMessage: a } = (0, o.A)();
                return (0, l.jsxs)("div", {
                    className: W().root,
                    children: [
                        (0, l.jsx)("div", {
                            children:
                                t.hasSimilarPlaylists &&
                                (0, l.jsx)(p.FoH, {
                                    blockId: p.hf$.PLAYLISTS_SIMILAR_PLAYLIST,
                                    blockType: p.hf$.PLAYLISTS_SIMILAR_PLAYLIST,
                                    blockPosX: 1,
                                    blockPosY: 2,
                                    blockIdForFrom:
                                        p.hf$.PLAYLISTS_SIMILAR_PLAYLIST,
                                    objectsCount: t.similarPlaylists.length,
                                    children: (0, l.jsx)($.EC, {
                                        headingVariant: "h2",
                                        isShimmerVisible: t.isLoading,
                                        isShimmerActive: !0,
                                        className: W().carouselContainer,
                                        headerClassName: (0, i.$)(
                                            W().carouselBlockHeader,
                                            W().carouselBlock,
                                        ),
                                        containerClassName: W().carouselBlock,
                                        title: a({
                                            id: "entity-names.similar-playlists",
                                        }),
                                        playlists: t.similarPlaylists,
                                    }),
                                }),
                        }),
                        (0, l.jsx)(y.A, {
                            children: (0, l.jsx)(y.wi, {
                                className: W().footer,
                            }),
                        }),
                    ],
                });
            });
            var Q = a(74837),
                G = a(36998),
                z = a(96560),
                q = a(52561);
            let X = (e) => {
                let { item: t, from: a, tracks: l } = e,
                    i = l
                        .map((e) => {
                            if (e) return (0, F.$b)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: {
                        type: C.K.Various,
                        meta: { id: t.entityId },
                        from: a,
                    },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: i,
                };
            };
            var Z = a(3209),
                J = a.n(Z);
            let ee = (0, s.PA)((e) => {
                var t, a, s, r, c, u, m, g;
                let { autoFocus: P, className: v } = e,
                    { formatMessage: h } = (0, o.A)(),
                    { playlist: _ } = (0, p.Pjs)(),
                    { search: f } = _,
                    x = (0, F.Rg)(),
                    k = (0, n.useRef)(0),
                    I = (null == (t = _.meta) ? void 0 : t.isOwnPlaylist)
                        ? p._Q$.OWN_PLAYLISTS
                        : p._Q$.PLAYLIST,
                    { from: b } = (0, p.fyy)({
                        pageId: I,
                        blockId: p.UfI.FILTERED,
                    }),
                    { from: j } = (0, p.fyy)({
                        pageId: I,
                        blockId: p.UfI.SUGGESTED,
                    }),
                    [S, N] = (0, n.useState)(!1);
                (0, n.useEffect)(
                    () => () => {
                        window.clearTimeout(k.current);
                    },
                    [],
                );
                let A = (0, n.useMemo)(
                        () =>
                            (0, G.A)((e) => {
                                let t = e.trim();
                                f.setText(t),
                                    t &&
                                        (null == _ ? void 0 : _.meta) &&
                                        (f.reset(),
                                        f.getTracks({
                                            uid: _.meta.uid,
                                            kind: _.meta.kind,
                                        })),
                                    (t && 0 !== t.length) ||
                                        (S && (N(!1), _.refreshTracks()),
                                        f.setIdleState());
                            }, 100),
                        [f, _, S],
                    ),
                    L = (0, n.useCallback)(
                        async (e) => {
                            if (_.meta) {
                                f.setAdditionTrackAnimation(e.id);
                                let t = x({
                                        track: e,
                                        playlist: _.meta,
                                        withSuccessNotification: !1,
                                        withPageRefresh: !1,
                                    }),
                                    a = new Promise((e) => {
                                        k.current = window.setTimeout(e, 300);
                                    }),
                                    [l] = await Promise.all([t, a]);
                                l === T.Y9.OK
                                    ? (f.replaceAdditionTrackInProggress(),
                                      N(!0))
                                    : f.resetAdditionTrackAnimation();
                            }
                        },
                        [x, _.meta, f],
                    ),
                    E = (0, n.useMemo)(() => {
                        var e;
                        return f.isLoading
                            ? (0, l.jsx)(y.DS, {
                                  isActive: !0,
                                  className: J().shimmerItem,
                                  variant: p.Xjt.PLAYLIST,
                              })
                            : null == (e = f.playlistTracks)
                              ? void 0
                              : e.map((e) =>
                                    e
                                        ? e.isTrackNonMusic
                                            ? (0, l.jsx)(
                                                  F.Kd,
                                                  {
                                                      withPodcastName: !0,
                                                      track: e,
                                                      playContextParams: X({
                                                          item: e,
                                                          from: b,
                                                          tracks: f.playlistTracks,
                                                      }),
                                                      className: (0, i.$)(
                                                          J().track,
                                                          {
                                                              [J()
                                                                  .appearingTrack]:
                                                                  e.id ===
                                                                  f.additionTrackInProggress,
                                                          },
                                                      ),
                                                  },
                                                  e.id,
                                              )
                                            : (0, l.jsx)(
                                                  F.Kt,
                                                  {
                                                      className: (0, i.$)(
                                                          J().track,
                                                          {
                                                              [J()
                                                                  .appearingTrack]:
                                                                  e.id ===
                                                                  f.additionTrackInProggress,
                                                          },
                                                      ),
                                                      track: e,
                                                      playContextParams: X({
                                                          item: e,
                                                          from: b,
                                                          tracks: f.playlistTracks,
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                        : null,
                                );
                    }, [
                        f.isLoading,
                        f.playlistTracks,
                        f.additionTrackInProggress,
                        b,
                    ]),
                    w = (0, n.useMemo)(() => {
                        var e, t;
                        if (null == (e = _.meta) ? void 0 : e.canUserChange)
                            return f.isLoading
                                ? (0, l.jsx)(y.DS, {
                                      isActive: !0,
                                      className: J().shimmerItem,
                                      variant: p.Xjt.PLAYLIST,
                                  })
                                : null == (t = f.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, l.jsx)(
                                                  F.II,
                                                  {
                                                      track: e,
                                                      className: (0, i.$)({
                                                          [J()
                                                              .disappearingTrack]:
                                                              e.id ===
                                                              f.additionTrackInProggress,
                                                      }),
                                                      playContextParams: ((
                                                          e,
                                                          t,
                                                      ) => ({
                                                          contextData: {
                                                              type: C.K.Various,
                                                              meta: {
                                                                  id: e.entityId,
                                                              },
                                                              from: t,
                                                          },
                                                          queueParams: {
                                                              index: 0,
                                                              entityId:
                                                                  e.entityId,
                                                          },
                                                          loadContextMeta: !0,
                                                      }))(e, j),
                                                      onClick: L,
                                                  },
                                                  e.id,
                                              )
                                            : null,
                                    );
                    }, [
                        null == (a = _.meta) ? void 0 : a.canUserChange,
                        f.isLoading,
                        f.suggestedTracks,
                        f.additionTrackInProggress,
                        j,
                        L,
                    ]),
                    B = (0, n.useMemo)(() => {
                        var e, t, a;
                        let i =
                            !(null == (e = f.suggestedTracks)
                                ? void 0
                                : e.length) ||
                            !(null == (t = _.meta) ? void 0 : t.canUserChange);
                        return (null == (a = f.playlistTrackIds)
                            ? void 0
                            : a.length) ||
                            !i ||
                            f.isLoading
                            ? null
                            : (0, l.jsx)($.pA, {
                                  className: J().emptyBlockContainer,
                                  isEmptySearch: !0,
                              });
                    }, [
                        null == (s = f.suggestedTracks) ? void 0 : s.length,
                        null == (r = f.playlistTrackIds) ? void 0 : r.length,
                        f.isLoading,
                        null == (c = _.meta) ? void 0 : c.canUserChange,
                    ]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(q.D, {
                            className: (0, i.$)(J().root, v),
                            autoFocus: P,
                            initialValue: f.text,
                            correctedValue: null,
                            placeholder: h({ id: "search.track-placeholder" }),
                            onChange: A,
                            resetButtonAriaLabel: h({
                                id: "interface-actions.reset-search-input",
                            }),
                            onResetClick: f.reset,
                            innerInputProps: (0, d.Am)(
                                d.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT,
                            ),
                            resetButtonProps: (0, d.Am)(
                                d.e8.searchPlaylist
                                    .SEARCH_PLAYLIST_INPUT_RESET_BUTTON,
                            ),
                            searchIconProps: (0, d.Am)(
                                d.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON,
                            ),
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        f.text &&
                            (0, l.jsxs)("div", {
                                className: J().content,
                                children: [
                                    B,
                                    E,
                                    Number(
                                        null == (u = f.suggestedTracks)
                                            ? void 0
                                            : u.length,
                                    ) > 0 &&
                                        (null == (m = _.meta)
                                            ? void 0
                                            : m.canUserChange) &&
                                        (0, l.jsx)(
                                            D.Heading,
                                            {
                                                variant: "h3",
                                                className: (0, i.$)(
                                                    J().catalog,
                                                    {
                                                        [J()
                                                            .catalog_withTracks]:
                                                            null ==
                                                            (g =
                                                                f.playlistTrackIds)
                                                                ? void 0
                                                                : g.length,
                                                    },
                                                ),
                                                children: (0, l.jsx)(z.A, {
                                                    id: "search.search-catalog",
                                                }),
                                            },
                                            "search.search-catalog-caption",
                                        ),
                                    w,
                                ],
                            }),
                    ],
                });
            });
            var et = a(42213),
                ea = a(21741),
                el = a(46369),
                ei = a(88834),
                es = a.n(ei);
            let er = (0, s.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    {
                        setPlaylistStickyFiltersRef: i,
                        setPlaylistStaticFiltersRef: s,
                    } = (0, p.gKY)(),
                    r = (0, ea.useTabsState)(a.filters.activeFilterIndex),
                    o = (0, n.useRef)(null),
                    d = { objectId: a.uuid },
                    c = (0, p.s4Q)(a.analyticsParams),
                    u = (0, p.QUC)(d);
                (0, n.useEffect)(() => {
                    var e;
                    a.filters.shouldSendEventOnTabOpened &&
                        (null == (e = a.filters.items) ? void 0 : e.length) &&
                        (c(), a.filters.setShouldSendEventOnTabOpened(!1));
                }, [
                    null == (t = a.filters.items) ? void 0 : t.length,
                    a.filters,
                    c,
                ]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        a.filters.shouldSendEventOnTabLoaded &&
                            (null == (e = a.filters.items)
                                ? void 0
                                : e.length) &&
                            (null == (t = a.filters.items) ||
                                t.forEach((e, t) => {
                                    u({ tabId: e.id, tabPos: t });
                                }),
                            a.filters.setShouldSendEventOnTabLoaded(!1));
                    }, [
                        u,
                        a.filters.items,
                        a.filters.shouldSendEventOnTabLoaded,
                        a.filters.setShouldSendEventOnTabLoaded,
                        a.filters,
                    ]),
                    (0, n.useEffect)(() => {
                        a.isResolved && a.filters.getFilters();
                    }, [a, a.loadingState]);
                let g = (0, et.c)((e) => {
                    var t;
                    if (!r.onTabChange || e === r.value) return;
                    setTimeout(() => {
                        var t, a, l;
                        null == (l = o.current) ||
                            null == (a = l.children[e]) ||
                            null == (t = a.focus) ||
                            t.call(a);
                    }),
                        r.onTabChange(e);
                    let l = null == (t = a.filters.items) ? void 0 : t[e];
                    l && a.filters.handleFilterClick(l);
                });
                return (0, l.jsx)(m.jr, {
                    child: (0, l.jsx)(el.AI, {
                        className: es().stickyFilters,
                        tabsState: r,
                        handleFilterClick: g,
                        ref: i,
                        isSticky: !0,
                    }),
                    children: (0, l.jsx)(el.AI, {
                        className: es().staticFilters,
                        tabsState: r,
                        handleFilterClick: g,
                        ref: s,
                        carouselClassName: es().staticFiltersCarousel,
                    }),
                });
            });
            var en = a(36186),
                eo = a.n(en);
            let ed = (0, s.PA)(() => {
                    var e;
                    let { experiments: t } = (0, p.Pjs)(),
                        a = (0, g.hc)();
                    return t.checkExperiment(p.zal.WebNextDisableAds, "on")
                        ? null
                        : (0, l.jsx)("div", {
                              className: (0, i.$)({
                                  [eo().brandedPlaylistBannerWrapper]:
                                      a.isEnabled,
                              }),
                              style: null == (e = a.data) ? void 0 : e.style,
                              children: (0, l.jsx)(g.Zr, {
                                  creativeClassName: eo().creative,
                              }),
                          });
                }),
                ec = (0, s.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: i, playlist: s } = (0, p.Pjs)();
                    if (
                        !(null == (t = s.meta) ? void 0 : t.kind) ||
                        !s.search.isNeededToLoad
                    )
                        return;
                    let r = i.getUploadingTracksByPlaylistKind(s.meta.kind);
                    if (0 !== r.length)
                        return (0, l.jsx)("div", {
                            className: a,
                            children: r.map((e, t) =>
                                (0, l.jsx)(F.yY, { track: e }, t),
                            ),
                        });
                });
            var eu = a(92352),
                em = a.n(eu);
            let eg = (0, s.PA)((e) => {
                    let { playlistHeaderRef: t } = e,
                        { playlist: a } = (0, p.Pjs)(),
                        s = (0, g.hc)();
                    return ((0, n.useEffect)(() => {
                        a.search.isFocused && a.search.removeFocus();
                    }, [a.search.isFocused, a.search]),
                    a.isLoading || !a.meta || a.isRejected)
                        ? (0, l.jsx)(Q.c6, { className: em().header })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(ed, {}),
                                  (0, l.jsx)(Q.Jq, {
                                      className: (0, i.$)(em().header, {
                                          [em().header_branded]: s.isEnabled,
                                      }),
                                      playlist: a.meta,
                                      isDisabled: a.isDisabled,
                                      ref: t,
                                  }),
                                  (0, l.jsx)(ee, {
                                      autoFocus: !!(
                                          !a.items.length || a.search.isFocused
                                      ),
                                  }),
                                  a.isFiltersAvailable &&
                                      (0, l.jsx)(er, { playlist: a }),
                                  (0, l.jsx)(ec, { className: em().content }),
                                  a.shouldShowEmptyBlock &&
                                      (0, l.jsx)($.pA, {
                                          className: em().emptyPlaylist,
                                      }),
                              ],
                          });
                }),
                ep = (0, s.PA)((e) => {
                    var t, a, s, h, f;
                    let {
                            userId: x,
                            kind: k,
                            playlistUuid: b,
                            preloadedPlaylistByUuid: j,
                            isWebNextNavigationOn: S,
                        } = e,
                        {
                            playlist: N,
                            settings: { isMobile: T },
                        } = (0, p.Pjs)(),
                        { formatMessage: C } = (0, o.A)(),
                        { contentScrollRef: A, setContentScrollRef: L } = (0,
                        p.gKY)(),
                        { forceUpdateRefCallback: F, offsetY: D } = (0, c.G)(A),
                        E = (0, p.OQH)(N.analyticsParams),
                        w = (0, p.vXf)(N.analyticsParams),
                        B = (0, p.ytd)(
                            null == N || null == (t = N.meta)
                                ? void 0
                                : t.averageColor,
                        ),
                        R = (0, n.useMemo)(() => {
                            var e;
                            return N.isRewind2024Playlist &&
                                (null == (e = N.meta)
                                    ? void 0
                                    : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, p.DPo)(),
                                          a = t === p.Sxu.Light ? 0.7 : 0.36;
                                      return (0, p.eWZ)(e, 0.6, a);
                                  })(N.meta.personalColor)
                                : B;
                        }, [
                            N.isRewind2024Playlist,
                            null == (a = N.meta) ? void 0 : a.personalColor,
                            B,
                        ]),
                        { topColorStyle: K, headerStyle: M } = (0, m.QZ)(
                            R,
                            D,
                            S,
                        );
                    ((e) => {
                        var t;
                        let { setDeeplink: a } =
                            null != (t = (0, p.P7Q)()) ? t : {};
                        (0, n.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, p.uvd)(
                                    "/playlists/:playlistUuid",
                                    { params: { playlistUuid: e } },
                                );
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(b),
                        (0, p.Jzs)(N.isResolved),
                        ((e) => {
                            (0, n.useEffect)(() => {
                                if (
                                    !(null == e ? void 0 : e.meta) ||
                                    e.isLoading
                                )
                                    return;
                                let t = ((e) => {
                                    var t, a, l, i, s, r, n, o, d, c, u, m, g;
                                    let p = e.items.map((e) => ({
                                        id: Number(e.id),
                                        albumId: Number(e.albumId) || void 0,
                                    }));
                                    return {
                                        owner:
                                            null == (t = e.meta)
                                                ? void 0
                                                : t.owner,
                                        uid:
                                            (null == (a = e.meta)
                                                ? void 0
                                                : a.uid) || 0,
                                        kind:
                                            (null == (l = e.meta)
                                                ? void 0
                                                : l.kind) || 0,
                                        title:
                                            (null == (i = e.meta)
                                                ? void 0
                                                : i.title) || "",
                                        description:
                                            null == (s = e.meta)
                                                ? void 0
                                                : s.description,
                                        revision:
                                            (null == (r = e.meta)
                                                ? void 0
                                                : r.revision) || 0,
                                        snapshot: 0,
                                        trackCount: p.length,
                                        cover: {
                                            uri:
                                                (null == (n = e.meta)
                                                    ? void 0
                                                    : n.coverUri) || "",
                                            prefix: "",
                                            type: "from-album-cover",
                                            custom: !1,
                                        },
                                        playlistUuid:
                                            (null == (o = e.meta)
                                                ? void 0
                                                : o.uuid) || "",
                                        available:
                                            (null == (d = e.meta)
                                                ? void 0
                                                : d.isAvailable) || !0,
                                        visibility:
                                            (null == (c = e.meta)
                                                ? void 0
                                                : c.visibility) || P.L.PUBLIC,
                                        likesCount:
                                            null == (u = e.meta)
                                                ? void 0
                                                : u.likesCount,
                                        modified:
                                            (null == (m = e.meta)
                                                ? void 0
                                                : m.modified) || "",
                                        created: "",
                                        isBanner: !1,
                                        isPremiere: !1,
                                        durationMs: 0,
                                        collective: !1,
                                        ogImage:
                                            (null == (g = e.meta)
                                                ? void 0
                                                : g.coverUri) || "",
                                        tags: [],
                                        tracks: p,
                                    };
                                })(e);
                                (0, v.C)(t, {
                                    fullUrl: null,
                                    locale: null,
                                    url: null,
                                    tld: "",
                                    host: "",
                                }).then((e) => {
                                    (0, p.jxB)(e);
                                });
                            }, [
                                null == e ? void 0 : e.meta,
                                null == e ? void 0 : e.isLoading,
                                e,
                            ]);
                        })(N),
                        (0, p.ACS)(),
                        (0, n.useEffect)(
                            () => (
                                E(),
                                () => {
                                    N.reset(), w();
                                }
                            ),
                            [N, b, x, k],
                        );
                    let Y = (0, n.useMemo)(
                            () => ({
                                Header: () =>
                                    (0, l.jsx)(eg, { playlistHeaderRef: F }),
                                Item: N.isDragAndDropEnabled ? I : void 0,
                                Footer: () => (0, l.jsx)(V, { playlist: N }),
                            }),
                            [F, N, N.isDragAndDropEnabled],
                        ),
                        $ = (0, n.useCallback)(
                            (e) => {
                                N.getTracksByRange(e);
                            },
                            [N],
                        ),
                        H = (0, n.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = N.items[e])
                                    ? void 0
                                    : t.key;
                            },
                            [N.items],
                        ),
                        W = (0, n.useCallback)((e) => e, []),
                        Q = (0, g.hc)();
                    if (
                        (N.isNeededToLoad &&
                            ("string" == typeof b
                                ? (0, n.use)(
                                      N.getPlaylistByUuid({
                                          playlistUuid: b,
                                          resumeStream: !1,
                                          preloadedPlaylist: j,
                                      }),
                                  )
                                : "string" == typeof x &&
                                  "string" == typeof k &&
                                  (0, n.use)(
                                      N.getPlaylistByUserIdAndKind({
                                          userId: x,
                                          playlistKind: Number(k),
                                          resumeStream: !1,
                                      }),
                                  )),
                        N.isNotFound && (0, r.notFound)(),
                        N.isRejected)
                    )
                        return (0, l.jsx)(u.w, {});
                    let G = Q.isEnabled ? y.Vw.BRANDED_PLAYLIST : y.Vw.INNER;
                    return (0, l.jsx)(m.hO, {
                        scrollElement: A,
                        children: (0, l.jsxs)("div", {
                            className: _().wrapper,
                            style: null == (s = Q.data) ? void 0 : s.style,
                            children: [
                                (0, l.jsx)(y.Y9, { variant: G, style: M }),
                                !Q.isEnabled &&
                                    (0, l.jsx)("div", {
                                        className: _().averageColorBackground,
                                        style: K,
                                    }),
                                (0, l.jsx)(O, {
                                    playlist: N,
                                    children: (0, l.jsx)(y.$$, {
                                        context: {
                                            listAriaLabel: C(
                                                {
                                                    id: "entity-names.playlist-tracks-list",
                                                },
                                                {
                                                    playlistName:
                                                        (null == (h = N.meta)
                                                            ? void 0
                                                            : h.title) || "",
                                                },
                                            ),
                                        },
                                        className: (0, i.$)(
                                            _().root,
                                            _().important,
                                        ),
                                        listClassName: _().content,
                                        customComponents: Y,
                                        computeItemKey: N.isDragAndDropEnabled
                                            ? H
                                            : W,
                                        totalCount: N.virtualListItemsCount,
                                        itemContentCallback: (e) =>
                                            (0, l.jsx)(U, { index: e }),
                                        onGetDataByRange: $,
                                        debounceDurationInMs: 300,
                                        initialItemCount:
                                            null == (f = N.items)
                                                ? void 0
                                                : f.length,
                                        handleRef: L,
                                        shouldTriggerRangeChangedOn: [
                                            N.filters.activeFilter,
                                            N.virtualListItemsCount,
                                        ],
                                        testId: d.Xk.playlist.PLAYLIST_PAGE,
                                        isMobileLayout: T,
                                        useWindowScroll: T,
                                        withFooter: !0,
                                        withForceScroll: !0,
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                ey = (0, s.PA)((e) =>
                    (0, l.jsx)(g.te, {
                        children: (0, l.jsx)(p.nVz, {
                            pageId: p._Q$.PLAYLIST,
                            pageEntityId: e.playlistUuid,
                            children: (0, l.jsx)(ep, { ...e }),
                        }),
                    }),
                );
        },
        88233: (e, t, a) => {
            "use strict";
            a.d(t, { PlaylistFilters: () => y });
            var l = a(33008),
                i = a(85896),
                s = a(97531),
                r = a(66268),
                n = a(79169),
                o = a(18740),
                d = a(94615),
                c = a(20149),
                u = a.n(c);
            let m = {
                    [n.u40.Desktop]: { start: 40, end: 20 },
                    [n.u40.Mobile]: { start: 40, end: 40 },
                },
                g = {
                    [n.u40.Desktop]: { start: 40, end: 20 },
                    [n.u40.Mobile]: { start: 20, end: 50 },
                },
                p = (0, s.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: s,
                            forwardRef: c,
                            carouselClassName: p,
                            isSticky: y,
                        } = e,
                        {
                            playlist: P,
                            settings: { isMobile: v },
                        } = (0, n.Pjs)(),
                        {
                            playlistStickyFiltersRef: h,
                            playlistStaticFiltersRef: _,
                            contentScrollRef: f,
                        } = (0, n.gKY)(),
                        x = (0, r.useMemo)(() => {
                            var e;
                            return (0, l.jsx)(o.wI, {
                                ref: c,
                                className: (0, i.$)(u().carousel, p),
                                ...t,
                                onTabChange: a,
                                children:
                                    null == (e = P.filters.items)
                                        ? void 0
                                        : e.map((e, a) =>
                                              (0, l.jsx)(
                                                  o.oz,
                                                  {
                                                      tabIndex: y ? -1 : 0,
                                                      className: (0, i.$)(
                                                          u().filter,
                                                          {
                                                              [u()
                                                                  .filter_selected]:
                                                                  a === t.value,
                                                          },
                                                      ),
                                                      title: e.name,
                                                      value: a,
                                                  },
                                                  a,
                                              ),
                                          ),
                            });
                        }, [t, y, a, P.filters.items, p, c]),
                        k = (0, r.useCallback)(() => {
                            _ && h && (_.scrollLeft = h.scrollLeft);
                        }, [_, h]),
                        I = (0, r.useCallback)(() => {
                            _ &&
                                h &&
                                (h.classList.add(u().carousel_noSmooth),
                                (h.scrollLeft = _.scrollLeft),
                                h.classList.remove(u().carousel_noSmooth));
                        }, [_, h]),
                        [b, j] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        b && I();
                    }, [b, I]);
                    let S = (0, r.useCallback)(() => {
                        j(
                            (null == h
                                ? void 0
                                : h.checkVisibility({ checkOpacity: !0 })) ||
                                !1,
                        );
                    }, [h]);
                    return ((0, r.useEffect)(() => {
                        let e = new AbortController(),
                            t = { signal: e.signal };
                        return (
                            y
                                ? (null == h ||
                                      h.addEventListener("scroll", k, t),
                                  null == h ||
                                      h.addEventListener("resize", k, t))
                                : v
                                  ? (window.addEventListener("scroll", S, t),
                                    window.addEventListener("resize", S, t))
                                  : (null == f ||
                                        f.addEventListener("scroll", S, t),
                                    null == f ||
                                        f.addEventListener("resize", S, t)),
                            () => {
                                e.abort();
                            }
                        );
                    }, [y, f, h, S, k, v]),
                    P.filters.isShimmerVisible)
                        ? (0, l.jsx)(d.PlaylistFiltersShimmer, {})
                        : P.filters.items &&
                            0 !== P.filters.items.length &&
                            P.search.isNeededToLoad
                          ? (0, l.jsx)(o.FY, {
                                className: s,
                                carouselElement: x,
                                ref: c,
                                scrollPadding: y ? g : m,
                            })
                          : void 0;
                }),
                y = (0, r.forwardRef)((e, t) =>
                    (0, l.jsx)(p, { forwardRef: t, ...e }),
                );
        },
        88834: (e) => {
            e.exports = {
                stickyFilters: "PlaylistPageFilters_stickyFilters__SfT9C",
                staticFilters: "PlaylistPageFilters_staticFilters__sk7JJ",
                staticFiltersCarousel:
                    "PlaylistPageFilters_staticFiltersCarousel__vJQXE",
            };
        },
        91560: (e) => {
            e.exports = {
                root: "PlaylistPageFooter_root__h6jh8",
                carouselContainer:
                    "PlaylistPageFooter_carouselContainer__fIwg5",
                carouselBlock: "PlaylistPageFooter_carouselBlock__OFRtz",
                carouselBlockHeader:
                    "PlaylistPageFooter_carouselBlockHeader__HbjLr",
                footer: "PlaylistPageFooter_footer__Mqwre",
            };
        },
        92352: (e) => {
            e.exports = {
                header: "PlaylistPageHeader_header__Fgqns",
                header_branded: "PlaylistPageHeader_header_branded__WyJ4k",
                content: "PlaylistPageHeader_content__boBkt",
                emptyPlaylist: "PlaylistPageHeader_emptyPlaylist__oiG4B",
            };
        },
        94615: (e, t, a) => {
            "use strict";
            a.d(t, { PlaylistFiltersShimmer: () => d });
            var l = a(33008),
                i = a(85896),
                s = a(97531),
                r = a(18740),
                n = a(27191),
                o = a.n(n);
            let d = (0, s.PA)((e) => {
                let { className: t } = e;
                return (0, l.jsx)(r.wI, {
                    className: (0, i.$)(o().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, l.jsx)(r.zr, {
                        className: o().root,
                        shimmerClassName: o().shimmer,
                        count: 3,
                    }),
                });
            });
        },
    },
]);
