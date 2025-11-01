(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4691],
    {
        1165: (e) => {
            e.exports = {
                root: "SearchHistoryBlockDesktop_root__jKICZ",
                controls: "SearchHistoryBlockDesktop_controls__5JPBt",
                header: "SearchHistoryBlockDesktop_header__zOALK",
                clearButton: "SearchHistoryBlockDesktop_clearButton__kN4Nk",
                content: "SearchHistoryBlockDesktop_content__doQsC",
            };
        },
        1729: (e) => {
            e.exports = {
                root: "SearchColumnShimmer_root__PDf3Y",
                infoContainer: "SearchColumnShimmer_infoContainer__cQ8_H",
                textContainer: "SearchColumnShimmer_textContainer__IekgL",
                title: "SearchColumnShimmer_title__IorPg",
                description: "SearchColumnShimmer_description__nNupy",
                cover: "SearchColumnShimmer_cover__58jV8",
                action: "SearchColumnShimmer_action__JbJGl",
            };
        },
        1740: (e) => {
            e.exports = {
                root: "SearchBestResultsBookChapterBlock_root__2JjcF",
                cover: "SearchBestResultsBookChapterBlock_cover__I2CYO",
            };
        },
        2488: (e, t, s) => {
            "use strict";
            s.d(t, { SearchHistoryNotFoundPage: () => o });
            var a = s(33008),
                r = s(97531),
                i = s(35233);
            let o = (0, r.PA)(() => (0, a.jsx)(i.M, {}));
        },
        3230: (e, t, s) => {
            "use strict";
            s.d(t, { SearchHistoryPage: () => j });
            var a = s(33008),
                r = s(36998),
                i = s(97531),
                o = s(17846),
                l = s(66268),
                c = s(73827),
                n = s(96560),
                d = s(18064),
                m = s(44189),
                u = s(78016),
                h = s(57747),
                _ = s(77868),
                S = s(18194),
                x = s(79169),
                p = s(9674),
                C = s.n(p);
            let j = (0, i.PA)(() => {
                let {
                        search: e,
                        user: t,
                        settings: { isMobile: s },
                    } = (0, x.Pjs)(),
                    { setContentScrollRef: i } = (0, x.gKY)(),
                    { formatMessage: p } = (0, c.A)(),
                    j = (0, x.W6M)(),
                    A = (0, l.useRef)(!1),
                    y = (0, l.useRef)(null),
                    P = (0, S.t9)(() => {
                        A.current = !0;
                    }),
                    k = e.historyPage.items.length;
                t.isAuthorized && (0, o.notFound)(),
                    (0, l.useEffect)(() => {
                        y.current && j.canBack && y.current.focus();
                    }, [j.canBack]),
                    (0, l.useEffect)(
                        () => () => {
                            (null == A ? void 0 : A.current)
                                ? (e.resetHistoryItems(), (A.current = !1))
                                : e.resetHistoryStateRequest();
                        },
                        [e],
                    );
                let b = (0, l.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == j || j.back();
                            }, 200),
                        [j],
                    ),
                    v = (0, l.useMemo)(
                        () =>
                            k
                                ? (0, a.jsx)("div", {
                                      className: C().items,
                                      children: e.historyPage.items
                                          .map((e, t) =>
                                              (0, S.Gw)({
                                                  item: e,
                                                  index: t,
                                                  pageId: x._Q$.SEARCH,
                                              }),
                                          )
                                          .filter((e) => !!e),
                                  })
                                : (0, a.jsx)(_.Caption, {
                                      className: C().emptyHistory,
                                      variant: "div",
                                      size: "m",
                                      type: "text",
                                      children: (0, a.jsx)(n.A, {
                                          id: "search.history-empty",
                                      }),
                                  }),
                        [e.historyPage.items, k],
                    );
                return (
                    e.isHistoryReady &&
                        t.account.data.uid &&
                        (0, l.use)(
                            e.getHistory({ userId: t.account.data.uid }),
                        ),
                    (0, a.jsx)("div", {
                        className: C().root,
                        ...(0, d.Am)(d.Xk.search.SEARCH_HISTORY_PAGE),
                        children: (0, a.jsxs)(h.N, {
                            className: C().scrollContent,
                            containerClassName: C().scrollContainer,
                            ref: i,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: C().header,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: C().title,
                                            children: [
                                                j.canBack &&
                                                    (0, a.jsx)(m.Button, {
                                                        ref: y,
                                                        "aria-label": p({
                                                            id: "navigation.go-back",
                                                        }),
                                                        radius: "round",
                                                        disabled: !j.canBack,
                                                        size: "s",
                                                        icon: (0, a.jsx)(
                                                            u.Icon,
                                                            {
                                                                size: "xxs",
                                                                variant:
                                                                    "arrowLeft",
                                                            },
                                                        ),
                                                        onClick: b,
                                                    }),
                                                (0, a.jsx)(_.Heading, {
                                                    variant: "h2",
                                                    size: s ? "m" : "xl",
                                                    children: (0, a.jsx)(n.A, {
                                                        id: "search.history",
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(m.Button, {
                                            "aria-label": p({
                                                id: "search.clear-history",
                                            }),
                                            radius: "xxxl",
                                            variant: "outline",
                                            disabled: !k,
                                            size: s ? "s" : "default",
                                            onClick: P,
                                            children: (0, a.jsx)(_.Caption, {
                                                variant: "span",
                                                size: "m",
                                                type: "text",
                                                children: (0, a.jsx)(n.A, {
                                                    id: "search.clear-history",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                !e.isHistoryLoading && v,
                            ],
                        }),
                    })
                );
            });
        },
        3278: (e, t, s) => {
            "use strict";
            s.d(t, { SearchTrackList: () => A });
            var a = s(33008),
                r = s(85896),
                i = s(66268),
                o = s(18064),
                l = s(48509),
                c = s(40178),
                n = s(81649),
                d = s(42213),
                m = s(57747),
                u = s(44078),
                h = s(79169),
                _ = s(18740),
                S = s(10462),
                x = s(85057),
                p = s.n(x);
            let C = (e) => {
                    let { isShimmerActive: t } = e;
                    return Array.from({ length: 36 }, (e, s) =>
                        (0, a.jsx)(
                            _.DS,
                            {
                                isActive: t,
                                className: p().shimmer,
                                variant: h.Xjt.PLAYLIST,
                            },
                            s,
                        ),
                    );
                },
                j = (e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: x,
                            sendSearchFeedback: j,
                            searchCorrectedText: A,
                            isShimmerVisible: y,
                            isShimmerActive: P,
                        } = e,
                        { from: k } = (0, h.fyy)(),
                        b = (0, d.c)((e) => ({
                            contextData: {
                                type: l.K.Various,
                                meta: { id: e.entityId },
                                from: k,
                                overrideContextType: c.b.Search,
                            },
                            queueParams: { index: 0, entityId: e.id },
                            loadContextMeta: !0,
                        })),
                        v = (0, i.useMemo)(
                            () =>
                                y
                                    ? (0, a.jsx)(C, { isShimmerActive: P })
                                    : x
                                          .filter(
                                              (e) =>
                                                  e.type === S.n.TRACK ||
                                                  e.type === S.n.UGC_TRACK,
                                          )
                                          .map((e, t) =>
                                              (0, a.jsx)(
                                                  h.NYB.Provider,
                                                  {
                                                      value: {
                                                          sendSearchFeedback: j,
                                                          id: e.data.entityId,
                                                          type: n.o.TRACK,
                                                          blockPosition: 0,
                                                          position: t,
                                                      },
                                                      children: (0, a.jsx)(
                                                          u.Kt,
                                                          {
                                                              track: e.data,
                                                              playContextParams:
                                                                  b(e.data),
                                                          },
                                                      ),
                                                  },
                                                  e.data.id,
                                              ),
                                          ),
                            [b, P, y, x, j],
                        );
                    return (0, a.jsxs)(m.N, {
                        className: (0, r.$)(p().root, s),
                        containerClassName: p().container,
                        ref: t,
                        ...(0, o.Am)(o.Xk.search.SEARCH_PAGE_RESULTS_TRACK),
                        children: [
                            (0, a.jsxs)("div", {
                                className: p().content,
                                children: [
                                    A &&
                                        (0, a.jsx)("div", {
                                            className: p().correctedTextBlock,
                                            children: A,
                                        }),
                                    (0, a.jsx)("div", {
                                        className: p().items,
                                        children: v,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(_.A, {
                                children: (0, a.jsx)(_.wi, {
                                    className: p().footer,
                                }),
                            }),
                        ],
                    });
                },
                A = (0, i.forwardRef)((e, t) =>
                    (0, a.jsx)(j, { forwardRef: t, ...e }),
                );
        },
        5762: (e, t, s) => {
            "use strict";
            s.d(t, { SearchPage: () => N });
            var a = s(33008),
                r = s(85896),
                i = s(97531),
                o = s(17846),
                l = s(66268),
                c = s(73827),
                n = s(18064),
                d = s(39535),
                m = s(43836),
                u = s(42213),
                h = s(42314),
                _ = s(52561),
                S = s(21741),
                x = s(18194),
                p = s(60030),
                C = s(79169),
                j = s(18740),
                A = s(25338),
                y = s.n(A),
                P = s(44612),
                k = s(57747),
                b = s(12898),
                v = s(21837),
                T = s(83888),
                g = s(64143);
            let I = (0, i.PA)((e) => {
                    let {
                            searchResults: t,
                            setContentScrollRef: s,
                            contentScrollRef: i,
                            hasSearchText: o,
                        } = e,
                        {
                            user: c,
                            search: d,
                            settings: { isMobile: m },
                        } = (0, C.Pjs)(),
                        [u, h] = (0, P.d)();
                    return o
                        ? t
                        : c.isAuthorized
                          ? (0, a.jsx)(g.hO, {
                                scrollElement: i,
                                headerElement: u,
                                children: (0, a.jsxs)(k.N, {
                                    className: y().scrollableContent,
                                    containerClassName: y().main,
                                    ref: s,
                                    ...(0, n.Am)(
                                        n.Xk.search.SEARCH_PAGE_CONTENT,
                                    ),
                                    children: [
                                        (0, a.jsx)(b.EA, {
                                            containerClassName:
                                                y().skeletonContainer,
                                            stickyHeaderClassName: (0, r.$)(
                                                y().skeletonStickyHeader,
                                                y().important,
                                            ),
                                            stickyHeaderTabIndex: m ? null : 0,
                                            headerConcealerComponent: (0,
                                            a.jsx)("div", { ref: h }),
                                            landing: d.landing,
                                            errorComponent: (0, a.jsx)(T.w, {
                                                className: y().error,
                                                withBackwardControl: !1,
                                            }),
                                            headerVariant: m
                                                ? j.Vw.COMPOSITE
                                                : j.Vw.STICKY,
                                        }),
                                        (0, a.jsx)(j.A, {
                                            children: (0, a.jsx)(j.wi, {
                                                className: y().footer,
                                            }),
                                        }),
                                    ],
                                }),
                            })
                          : (0, a.jsxs)(k.N, {
                                className: y().scrollableContent,
                                containerClassName: y().main,
                                ref: s,
                                children: [
                                    (0, a.jsx)(l.Suspense, {
                                        children: (0, a.jsx)(C.FoH, {
                                            blockId: C.hf$.SEARCH_HISTORY,
                                            blockType: C.hf$.SEARCH_HISTORY,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            blockIdForFrom:
                                                C.hf$.SEARCH_HISTORY,
                                            objectsCount:
                                                d.historyPage.items.length,
                                            children: (0, a.jsx)(x._K, {}),
                                        }),
                                    }),
                                    (0, a.jsx)(l.Suspense, {
                                        children: (0, a.jsx)(v.Z_, {
                                            className: y().mixes,
                                        }),
                                    }),
                                    (0, a.jsx)(j.A, {
                                        children: (0, a.jsx)(j.wi, {
                                            className: y().footer,
                                        }),
                                    }),
                                ],
                            });
                }),
                E = "text",
                N = (0, i.PA)(() => {
                    let e = (0, S.useTabsState)(0),
                        [t, s] = (0, l.useState)(d.$.TOP),
                        [i, A] = (0, l.useState)(!1),
                        { formatMessage: P } = (0, c.A)(),
                        {
                            search: k,
                            experiments: b,
                            location: v,
                            user: T,
                        } = (0, C.Pjs)(),
                        { contentScrollRef: g, setContentScrollRef: N } = (0,
                        C.gKY)(),
                        R = ((e) => {
                            let { formatMessage: t } = (0, c.A)(),
                                s = (0, p.df)();
                            return e
                                ? [
                                      {
                                          id: d.$.TOP,
                                          displayName: t({
                                              id: "search-filters.top",
                                          }),
                                      },
                                      ...e,
                                  ].filter((e) => {
                                      if (e.id !== d.$.CLIP || s) return e;
                                  })
                                : [
                                      {
                                          id: d.$.TOP,
                                          displayName: t({
                                              id: "search-filters.top",
                                          }),
                                      },
                                  ];
                        })(k.filters),
                        B = (0, C.XJ9)(),
                        [f, L] = (0, l.useState)(() => {
                            var e;
                            return decodeURIComponent(
                                null !=
                                    (e = new URLSearchParams(
                                        v.searchParams,
                                    ).get(E))
                                    ? e
                                    : "",
                            );
                        }),
                        O = (0, l.useRef)(f),
                        H = f.length > 0,
                        D = (0, p.df)();
                    b.checkExperiment(C.zal.WebNextDisableSearch, "on") &&
                        (0, o.redirect)(C.Zyd.main.href),
                        (0, C.Jzs)(k.landing.loadingState === C.GuX.RESOLVE),
                        (0, l.useEffect)(
                            () => () => {
                                k.reset(), T.isAuthorized && k.landing.reset();
                            },
                            [T.isAuthorized, b, k],
                        );
                    let M = (0, u.c)((e, t) => {
                            k.resetResults(),
                                0 !== e.length &&
                                    k.getSearchResults({
                                        text: decodeURIComponent(e),
                                        filter: t,
                                        withClips: D,
                                    });
                        }),
                        w = (0, u.c)(() => {
                            A(!0);
                        }),
                        K = (0, u.c)((t) => {
                            var a, r;
                            if (!e.onTabChange || t === e.value) return;
                            e.onTabChange(t);
                            let i =
                                null != (r = null == (a = R[t]) ? void 0 : a.id)
                                    ? r
                                    : d.$.TOP;
                            Object.values(d.$).includes(i) &&
                                (s(i), M(O.current, i));
                        }),
                        U = (0, u.c)((t) => {
                            let s = t.trim(),
                                a = encodeURIComponent(s);
                            L(a),
                                (O.current = a),
                                0 !== e.value && K(0),
                                M(a, d.$.TOP),
                                k.history.setShouldUpdateHistory(!0),
                                k.resetSearchCorrectedText(),
                                A(!1);
                            let r = new URL(window.location.href);
                            r.searchParams.set(E, s), B(String(r));
                        }),
                        Y = (0, u.c)((e) => {
                            let {
                                id: t,
                                type: s,
                                blockPosition: a,
                                position: r,
                                feedbackType: i,
                            } = e;
                            k.sendFeedback({
                                blockType: s,
                                entityId: "".concat(s, ":").concat(t),
                                timestamp: new Date().toISOString(),
                                searchRequestId: k.searchRequestId,
                                query: O.current,
                                clickType: i,
                                blockPosition: a,
                                position: r,
                                page: 0,
                            });
                        }),
                        $ = (0, l.useMemo)(
                            () =>
                                k.searchCorrectedText
                                    ? (0, a.jsx)(x.tn, {
                                          searchCorrectedText:
                                              k.searchCorrectedText,
                                          onCorrectText: w,
                                      })
                                    : null,
                            [w, k.searchCorrectedText],
                        ),
                        X = (0, h.L)(() => {
                            if (k.isEmpty)
                                return (0, a.jsx)(x.qz, {
                                    searchCorrectedText: $,
                                });
                            let e = {
                                className: y().searchResults,
                                isShimmerVisible: k.isShimmerVisible,
                                isShimmerActive: k.isLoading,
                                results: k.results,
                                bestResults: k.bestResults,
                                sendSearchFeedback: Y,
                                searchCorrectedText: $,
                                ref: N,
                            };
                            switch (t) {
                                case d.$.TOP:
                                    return (0, a.jsx)(x.kp, {
                                        ...e,
                                        ...(0, n.Am)(
                                            n.Xk.search.SEARCH_PAGE_RESULTS_TOP,
                                        ),
                                    });
                                case d.$.TRACK:
                                    return (0, a.jsx)(x.uU, { ...e });
                                case d.$.ALBUM:
                                    return (0, a.jsx)(x.ok, {
                                        ...e,
                                        filter: d.$.ALBUM,
                                        ...(0, n.Am)(
                                            n.Xk.search
                                                .SEARCH_PAGE_RESULTS_ALBUM,
                                        ),
                                    });
                                case d.$.PLAYLIST:
                                    return (0, a.jsx)(x.ok, {
                                        ...e,
                                        filter: d.$.PLAYLIST,
                                        ...(0, n.Am)(
                                            n.Xk.search
                                                .SEARCH_PAGE_RESULTS_PLAYLIST,
                                        ),
                                    });
                                case d.$.ARTIST:
                                    return (0, a.jsx)(x.ok, {
                                        ...e,
                                        filter: d.$.ARTIST,
                                        ...(0, n.Am)(
                                            n.Xk.search
                                                .SEARCH_PAGE_RESULTS_ARTIST,
                                        ),
                                    });
                                case d.$.PODCAST:
                                    return (0, a.jsx)(x.Jh, { ...e });
                                case d.$.BOOK:
                                    return (0, a.jsx)(x.ok, {
                                        ...e,
                                        filter: d.$.BOOK,
                                        ...(0, n.Am)(
                                            n.Xk.search
                                                .SEARCH_PAGE_RESULTS_BOOK,
                                        ),
                                    });
                                case d.$.CLIP:
                                    return (0, a.jsx)(x.ok, {
                                        ...e,
                                        filter: d.$.CLIP,
                                        ...(0, n.Am)(
                                            n.Xk.search
                                                .SEARCH_PAGE_RESULTS_CLIP,
                                        ),
                                    });
                                default:
                                    return $;
                            }
                        }),
                        V = (0, l.useMemo)(() => {
                            if (H)
                                return (0, a.jsx)(j.FY, {
                                    className: y().carousel,
                                    carouselElement: (0, a.jsx)(j.wI, {
                                        className: y().tabs,
                                        ...e,
                                        onTabChange: K,
                                        children: R.map((t, s) =>
                                            (0, a.jsx)(
                                                j.oz,
                                                {
                                                    className: (0, r.$)(
                                                        y().tab,
                                                        {
                                                            [y().tab_selected]:
                                                                s === e.value,
                                                        },
                                                    ),
                                                    title: t.displayName,
                                                    value: s,
                                                },
                                                s,
                                            ),
                                        ),
                                    }),
                                });
                        }, [R, K, e, H]);
                    return (
                        k.isNeededToLoad &&
                            H &&
                            (0, l.use)(
                                k.getSearchResults({
                                    text: decodeURIComponent(f),
                                    filter: t,
                                    withClips: D,
                                }),
                            ),
                        T.isAuthorized &&
                            k.landing.isNeededToLoad &&
                            !H &&
                            (0, l.use)(
                                k.landing.getSkeleton(
                                    {
                                        id: m.p.SEARCH,
                                        showWizard: T.settings.showWizard,
                                    },
                                    { preloadBlocksCount: 2 },
                                ),
                            ),
                        (0, a.jsx)(C.nVz, {
                            pageId: C._Q$.SEARCH,
                            children: (0, a.jsxs)("div", {
                                className: (0, r.$)(y().root, {
                                    [y().root_showFilters]: H,
                                }),
                                ...(0, n.Am)(n.Xk.search.SEARCH_PAGE),
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: y().header,
                                        ...(0, n.Am)(
                                            n.Xk.search
                                                .SEARCH_PAGE_HEADER_CONTAINER,
                                        ),
                                        children: [
                                            (0, a.jsx)(_.D, {
                                                className: y().input,
                                                autoFocus: !0,
                                                initialValue: O.current,
                                                placeholder: P({
                                                    id: "search.input-placeholder",
                                                }),
                                                onChange: U,
                                                resetButtonAriaLabel: P({
                                                    id: "interface-actions.reset-search-input",
                                                }),
                                                correctedValue: i
                                                    ? k.searchCorrectedText
                                                    : null,
                                                innerInputProps: (0, n.Am)(
                                                    n.Xk.search
                                                        .SEARCH_PAGE_SEARCH_INPUT,
                                                ),
                                                resetButtonProps: (0, n.Am)(
                                                    n.Xk.search
                                                        .SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON,
                                                ),
                                                searchIconProps: (0, n.Am)(
                                                    n.Xk.search
                                                        .SEARCH_PAGE_SEARCH_INPUT_ICON,
                                                ),
                                            }),
                                            V,
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        className: y().content,
                                        children: (0, a.jsx)(C.jPc, {
                                            children: (0, a.jsx)(I, {
                                                hasSearchText: H,
                                                contentScrollRef: g,
                                                setContentScrollRef: N,
                                                searchResults: X,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        9674: (e) => {
            e.exports = {
                root: "SearchHistoryPage_root__Wbvyf",
                title: "SearchHistoryPage_title__gnJuo",
                header: "SearchHistoryPage_header__YdTG5",
                scrollContainer: "SearchHistoryPage_scrollContainer__ScAez",
                scrollContent: "SearchHistoryPage_scrollContent__5AXWC",
                content: "SearchHistoryPage_content__iPgVO",
                desktopItem: "SearchHistoryPage_desktopItem__Xv9C_",
                items: "SearchHistoryPage_items___okS8",
                emptyHistory: "SearchHistoryPage_emptyHistory__gzfUu",
            };
        },
        10462: (e, t, s) => {
            "use strict";
            var a;
            s.d(t, { n: () => a }),
                (function (e) {
                    (e.ALL = "all"),
                        (e.TRACK = "track"),
                        (e.ALBUM = "album"),
                        (e.ARTIST = "artist"),
                        (e.PLAYLIST = "playlist"),
                        (e.WAVE = "wave"),
                        (e.GENRE = "genre"),
                        (e.USER = "user"),
                        (e.UGC_TRACK = "ugc_track"),
                        (e.PODCAST = "podcast"),
                        (e.PODCAST_EPISODE = "podcast_episode"),
                        (e.VIDEO = "video"),
                        (e.LYRICS = "lyrics"),
                        (e.CLIP = "clip");
                })(a || (a = {}));
        },
        10608: (e) => {
            e.exports = {
                root: "SearchBestResultsVibeBlock_root__KmJ3e",
                important: "SearchBestResultsVibeBlock_important__Zez1s",
                coverClassName:
                    "SearchBestResultsVibeBlock_coverClassName__jv0_I",
            };
        },
        10753: (e, t, s) => {
            "use strict";
            s.d(t, { SearchCorrectedText: () => m });
            var a = s(33008),
                r = s(66268),
                i = s(96560),
                o = s(18064),
                l = s(44189),
                c = s(77868),
                n = s(43825),
                d = s.n(n);
            let m = (e) => {
                let { onCorrectText: t, searchCorrectedText: s } = e,
                    n = (0, r.useMemo)(
                        () => ({
                            text: (0, a.jsx)(l.Button, {
                                "aria-label": s,
                                variant: "text",
                                radius: "xs",
                                onClick: t,
                                ...(0, o.Am)(
                                    o.e8.search.SEARCH_CORRECTED_TEXT_BUTTON,
                                ),
                                children: (0, a.jsx)(c.Caption, {
                                    className: d().link,
                                    variant: "span",
                                    size: "m",
                                    type: "text",
                                    ...(0, o.Am)(
                                        o.e8.search
                                            .SEARCH_CORRECTED_TEXT_BUTTON_TEXT,
                                    ),
                                    children: s,
                                }),
                            }),
                        }),
                        [s, t],
                    );
                return (0, a.jsx)("div", {
                    className: d().root,
                    ...(0, o.Am)(o.e8.search.SEARCH_CORRECTED_TEXT),
                    children: (0, a.jsx)(c.Caption, {
                        className: d().text,
                        variant: "span",
                        size: "m",
                        type: "text",
                        ...(0, o.Am)(o.e8.search.SEARCH_CORRECTED_TEXT_TEXT),
                        children: (0, a.jsx)(i.A, {
                            id: "search.corrected-text",
                            values: n,
                        }),
                    }),
                });
            };
        },
        11167: (e, t, s) => {
            "use strict";
            var a;
            s.d(t, { r: () => a }),
                (function (e) {
                    (e.TRACK = "best_result_track"),
                        (e.ARTIST = "best_result_artist"),
                        (e.CONCERT = "best_result_concert"),
                        (e.RECENT_RELEASE = "best_result_recent_release"),
                        (e.ALBUM = "best_result_album"),
                        (e.WAVE = "best_result_wave"),
                        (e.ARTISTS_RELATED = "best_result_artists_related"),
                        (e.OVERVIEW = "best_result_overview"),
                        (e.PODCAST = "best_result_podcast"),
                        (e.PODCAST_EPISODE = "best_result_podcast_episode"),
                        (e.NON_MUSIC = "best_result_non_music"),
                        (e.CLIP = "best_result_clip"),
                        (e.UPCOMING = "best_result_upcoming"),
                        (e.PLAYLIST = "best_result_playlist"),
                        (e.BOOK_CHAPTER = "best_result_book_chapter");
                })(a || (a = {}));
        },
        12561: (e) => {
            e.exports = {
                root: "SearchMixed_root__RR4QT",
                container: "SearchMixed_container__KIfE1",
                correctedTextBlock: "SearchMixed_correctedTextBlock___1rfE",
                block: "SearchMixed_block__SasiH",
                blockCarousel: "SearchMixed_blockCarousel__IQjJA",
                blockHeader: "SearchMixed_blockHeader__L0FSh",
                blockMixed: "SearchMixed_blockMixed__udOYV",
                footer: "SearchMixed_footer__INQFP",
                item: "SearchMixed_item__aTIrG",
                important: "SearchMixed_important__1ncD8",
            };
        },
        14756: (e) => {
            e.exports = { cover: "SearchBestResultsClipBlock_cover___5Wwj" };
        },
        15533: (e, t, s) => {
            "use strict";
            s.d(t, { SearchNotFoundPage: () => c });
            var a = s(33008),
                r = s(97531),
                i = s(66268),
                o = s(35233),
                l = s(79169);
            let c = (0, r.PA)(() => {
                let { user: e, search: t } = (0, l.Pjs)();
                return (
                    (0, i.useEffect)(
                        () => () => {
                            e.isAuthorized && t.landing.reset();
                        },
                        [e.isAuthorized, t.landing],
                    ),
                    (0, a.jsx)(o.M, {})
                );
            });
        },
        18194: (e, t, s) => {
            "use strict";
            s.d(t, {
                xo: () => U,
                tn: () => Y.SearchCorrectedText,
                qz: () => $.SearchEmpty,
                ok: () => X.SearchEntitiesGrid,
                k1: () => n,
                _K: () => V.SearchHistoryBlock,
                jU: () => T,
                kp: () => G.SearchMixed,
                Jh: () => z.SearchPodcastList,
                uU: () => F.SearchTrackList,
                Gw: () => o.G,
                t9: () => l.useClearHistory,
            }),
                s(33008);
            var a = s(52732);
            s(90317);
            var r = s(45242),
                i = s(44078),
                o = s(34236),
                l = s(60289),
                c = s(41028);
            let n = c.gK.model("SearchFilter", {
                id: c.gK.string,
                displayName: c.gK.string,
            });
            var d = s(10462),
                m = s(11167),
                u = s(64641),
                h = s(65255),
                _ = s(70879),
                S = s(51551),
                x = s(54344);
            let p = c.gK.model("SearchAlbum", {
                    type: c.gK.literal(d.n.ALBUM),
                    data: a.JC,
                }),
                C = c.gK.model("SearchPlaylist", {
                    type: c.gK.literal(d.n.PLAYLIST),
                    data: r.IP,
                }),
                j = c.gK.model("SearchArtist", {
                    type: c.gK.literal(d.n.ARTIST),
                    data: _.PK,
                }),
                A = c.gK.model("SearchUgcTrack", {
                    type: c.gK.literal(d.n.UGC_TRACK),
                    data: i.kK,
                }),
                y = c.gK.model("SearchTrack", {
                    type: c.gK.literal(d.n.TRACK),
                    data: i.vj,
                }),
                P = c.gK.model("SearchVibe", {
                    type: c.gK.literal(d.n.WAVE),
                    data: x.Gh,
                }),
                k = c.gK.model("SearchPodcast", {
                    type: c.gK.literal(d.n.PODCAST),
                    data: a.JC,
                }),
                b = c.gK.model("SearchPodcastEpisode", {
                    type: c.gK.literal(d.n.PODCAST_EPISODE),
                    data: i.vj,
                }),
                v = c.gK.model("SearchClip", {
                    type: c.gK.literal(d.n.CLIP),
                    data: u.kv,
                }),
                T = c.gK.union(p, C, j, y, A, P, k, b, v),
                g = c.gK.model("SearchBestVibe", {
                    type: c.gK.literal(m.r.WAVE),
                    data: x.Gh,
                }),
                I = c.gK.model("SearchBestPlaylist", {
                    type: c.gK.literal(m.r.PLAYLIST),
                    data: r.IP,
                }),
                E = c.gK.model("SearchBestArtist", {
                    type: c.gK.literal(m.r.ARTIST),
                    data: _.PK,
                }),
                N = c.gK.model("SearchBestPresave", {
                    type: c.gK.literal(m.r.UPCOMING),
                    data: a.VH,
                }),
                R = c.gK.model("SearchBestAlbum", {
                    type: c.gK.literal(m.r.ALBUM),
                    data: a.JC,
                }),
                B = c.gK.model("SearchBestRecentRelease", {
                    type: c.gK.literal(m.r.RECENT_RELEASE),
                    data: a.JC,
                }),
                f = c.gK.model("SearchBestConcert", {
                    type: c.gK.literal(m.r.CONCERT),
                    data: S.aR,
                }),
                L = c.gK.model("SearchBestTrack", {
                    type: c.gK.literal(m.r.TRACK),
                    data: i.vj,
                }),
                O = c.gK.model("SearchBestPodcast", {
                    type: c.gK.literal(m.r.PODCAST),
                    data: a.JC,
                }),
                H = c.gK.model("SearchBestPodcastEpisode", {
                    type: c.gK.literal(m.r.PODCAST_EPISODE),
                    data: i.vj,
                }),
                D = c.gK.model("SearchBestOverview", {
                    type: c.gK.literal(m.r.OVERVIEW),
                    data: h.kv,
                }),
                M = c.gK.model("SearchBestNonMusic", {
                    type: c.gK.literal(m.r.NON_MUSIC),
                    data: a.JC,
                }),
                w = c.gK.model("SearchBestClip", {
                    type: c.gK.literal(m.r.CLIP),
                    data: u.kv,
                }),
                K = c.gK.model("SearchBestBookChapter", {
                    type: c.gK.literal(m.r.BOOK_CHAPTER),
                    data: i.vj,
                }),
                U = c.gK.union(R, B, g, E, f, L, O, H, D, M, N, I, w, K);
            var Y = s(10753),
                $ = s(41973),
                X = s(96786),
                V = s(46962),
                G = s(32451),
                z = s(57693),
                F = s(3278);
        },
        21657: (e) => {
            e.exports = {
                button: "SearchHistoryBlockMobile_button__Wh_Q6",
                header: "SearchHistoryBlockMobile_header__Lx4On",
                mixedEntitiesBlock:
                    "SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_",
                buttonContainer:
                    "SearchHistoryBlockMobile_buttonContainer__IppED",
            };
        },
        21837: (e, t, s) => {
            "use strict";
            s.d(t, { Z_: () => d.Mixes, nL: () => m.MixesGrid, YM: () => n });
            var a = s(41028),
                r = s(61979),
                i = s(90848),
                o = s(55689),
                l = s(79169),
                c = s(59615);
            let n = a.gK
                .compose(
                    a.gK.model("Mixes", {
                        items: a.gK.array(o.f),
                        errorStatusCode: a.gK.maybeNull(a.gK.number),
                    }),
                    c.XT,
                )
                .views((e) => ({
                    get isLoading() {
                        return (
                            e.isNeededToLoad || e.loadingState === l.GuX.PENDING
                        );
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === r.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, a.L3)(function* (t) {
                        let { landingResource: s, modelActionsLogger: c } = (0,
                        a._$)(e);
                        if (e.loadingState !== l.GuX.PENDING)
                            try {
                                e.loadingState = l.GuX.PENDING;
                                let r = yield s.getBlock({
                                    source: {
                                        uri: "/landing/block/mixes",
                                        fullList: t,
                                    },
                                    type: i.t.MIXES,
                                });
                                (e.items = {
                                    items: (0, a.wg)(
                                        r.items.map((e) => (0, o.Ju)(e.data)),
                                    ),
                                }.items),
                                    (e.loadingState = l.GuX.RESOLVE);
                            } catch (t) {
                                c.error(t),
                                    t instanceof r.GX &&
                                        (t.statusCode === r.X1.NOT_FOUND ||
                                            t.statusCode ===
                                                r.X1.BAD_REQUEST) &&
                                        (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== l.GuX.IDLE &&
                                        (e.loadingState = l.GuX.REJECT);
                            }
                    }),
                }));
            var d = s(34476),
                m = s(59348);
        },
        25338: (e) => {
            e.exports = {
                header: "SearchPage_header__T2OUM",
                root: "SearchPage_root__TtwTi",
                root_showFilters: "SearchPage_root_showFilters__pb2o1",
                input: "SearchPage_input__7L7wS",
                content: "SearchPage_content__Ax9D6",
                scrollableContent: "SearchPage_scrollableContent__qdrWa",
                main: "SearchPage_main__FDQGD",
                carousel: "SearchPage_carousel__7jwGp",
                tabs: "SearchPage_tabs__tlwgh",
                tab: "SearchPage_tab__2yIDQ",
                tab_selected: "SearchPage_tab_selected__Z7lYv",
                compilations: "SearchPage_compilations__ZHEUr",
                footer: "SearchPage_footer__uQN_X",
                error: "SearchPage_error__WSxpu",
                skeletonStickyHeader: "SearchPage_skeletonStickyHeader__SQqeV",
                important: "SearchPage_important__z3aCa",
                skeletonContainer: "SearchPage_skeletonContainer__phbvK",
                mixes: "SearchPage_mixes__yusZB",
            };
        },
        32451: (e, t, s) => {
            "use strict";
            s.d(t, { SearchMixed: () => eM });
            var a = s(33008),
                r = s(85896),
                i = s(66268),
                o = s(73827),
                l = s(30293),
                c = s(18064),
                n = s(10462),
                d = s(11167),
                m = s(39535),
                u = s(57747),
                h = s(79169),
                _ = s(18740),
                S = s(34236),
                x = s(55302),
                p = s(97531),
                C = s(93967),
                j = s(81649),
                A = s(33941),
                y = s.n(A);
            let P = (e) => {
                let { isShimmerActive: t } = e;
                return (0, a.jsxs)("div", {
                    className: y().root,
                    children: [
                        (0, a.jsxs)("div", {
                            className: y().container,
                            children: [
                                (0, a.jsx)(_.Vt, {
                                    className: (0, r.$)(
                                        y().entity,
                                        y().important,
                                    ),
                                    shimmerClassName: (0, r.$)(
                                        y().cover,
                                        y().important,
                                    ),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, a.jsxs)("div", {
                                    className: y().meta,
                                    children: [
                                        (0, a.jsx)(_.nN, {
                                            textClassName: (0, r.$)(
                                                y().title,
                                                y().important,
                                            ),
                                            isActive: t,
                                        }),
                                        (0, a.jsx)(_.nN, {
                                            textClassName: (0, r.$)(
                                                y().subtitle,
                                                y().important,
                                            ),
                                            isActive: t,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: y().container,
                            children: [
                                (0, a.jsx)(_.Vt, {
                                    className: (0, r.$)(
                                        y().entity,
                                        y().important,
                                    ),
                                    shimmerClassName: (0, r.$)(
                                        y().cover,
                                        y().important,
                                    ),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: "xs",
                                }),
                                (0, a.jsxs)("div", {
                                    className: y().meta,
                                    children: [
                                        (0, a.jsx)(_.nN, {
                                            textClassName: (0, r.$)(
                                                y().title,
                                                y().important,
                                            ),
                                            isActive: t,
                                        }),
                                        (0, a.jsx)(_.nN, {
                                            textClassName: (0, r.$)(
                                                y().subtitle,
                                                y().important,
                                            ),
                                            isActive: t,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var k = s(50453),
                b = s.n(k),
                v = s(52732),
                T = s(81126),
                g = s.n(T),
                I = s(62948),
                E = s.n(I);
            let N = (0, p.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(v.M_, {
                    album: t,
                    className: (0, r.$)(g().block, E().root),
                    coverClassName: g().cover,
                    playButtonIconSize: "l",
                    likeIconSize: "xs",
                });
            });
            var R = s(90317),
                B = s(98902),
                f = s.n(B);
            let L = (0, p.PA)((e) => {
                let { artist: t } = e;
                return (0, a.jsx)(R.cz, {
                    artist: t,
                    className: (0, r.$)(g().block, f().root),
                    coverClassName: g().cover,
                    playButtonIconSize: "l",
                    likeIconSize: "xs",
                    pageId: h._Q$.SEARCH,
                });
            });
            var O = s(48509),
                H = s(42314),
                D = s(77868),
                M = s(44078),
                w = s(70879),
                K = s(1740),
                U = s.n(K);
            let Y = (0, p.PA)((e) => {
                var t;
                let { track: s } = e,
                    { from: l } = (0, h.fyy)(),
                    { formatMessage: c } = (0, o.A)(),
                    n = {
                        contextData: {
                            type: O.K.Various,
                            meta: { id: s.entityId },
                            from: l,
                        },
                        queueParams: { index: 0, entityId: s.id },
                        loadContextMeta: !0,
                    },
                    d = (0, h.Dx4)({
                        playContextParams: n,
                        entityId: s.entityId,
                    }),
                    m = (0, i.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: (0, r.$)(g().cover, U().cover),
                                alt: c(
                                    { id: "entity-names.track-name-by-type" },
                                    { type: (0, h.yDn)(s.type), name: s.title },
                                ),
                                radius: "xs",
                                ...e,
                            }),
                        [
                            c,
                            s.coverUri,
                            s.isAvailable,
                            s.isDisliked,
                            s.title,
                            s.type,
                        ],
                    ),
                    u = (0, M.O6)({ track: s, entityType: h.nPY.AUDIOBOOK }),
                    S = (0, H.L)(() =>
                        s.url && s.isAvailable
                            ? (0, a.jsx)(_.N_, {
                                  className: (0, r.$)(
                                      _.$f.text,
                                      _.$f.titleLink,
                                  ),
                                  href: s.url,
                                  onClick: u,
                                  children: s.title,
                              })
                            : (0, a.jsx)(D.Caption, {
                                  className: (0, r.$)(
                                      _.$f.text,
                                      _.$f.titleText,
                                  ),
                                  size: "m",
                                  variant: "div",
                                  type: "text",
                                  children: s.title,
                              }),
                    ),
                    x = (0, i.useCallback)(
                        (e, t) => {
                            var r;
                            return (null == (r = s.artists) ? void 0 : r.length)
                                ? (0, a.jsx)(w.iQ, {
                                      linkClassName: e,
                                      captionClassName: t,
                                      artists: s.artists,
                                      lineClamp: 1,
                                      withLink: s.isAvailable,
                                  })
                                : null;
                        },
                        [s.artists, s.isAvailable],
                    );
                return (0, a.jsx)(M.CC, {
                    className: (0, r.$)(g().block, U().root, _.$f.root, {
                        [_.$f.root_disabled]: !s.isAvailable,
                    }),
                    track: s,
                    meta: (0, a.jsx)(_.ro, {
                        isDisabled: !s.isAvailable,
                        version: s.version,
                        title: S,
                        artistsComponent: x,
                        getDescriptionTexts: s.getDescriptionTexts,
                        explicitMarkVariant: s.explicitDisclaimer,
                        releaseYear: (
                            null == (t = s.mainAlbum) ? void 0 : t.isNonMusic
                        )
                            ? s.mainAlbum.year
                            : void 0,
                    }),
                    playButtonCellRender: m,
                    playButtonIconSize: "l",
                    controls: (0, a.jsx)(M.QD, {
                        track: s,
                        utmLink: n.contextData.utmLink,
                        likeIconSize: "xs",
                    }),
                    ...d,
                });
            });
            var $ = s(54960),
                X = s(64641),
                V = s(60030),
                G = s(14756),
                z = s.n(G);
            let F = (0, p.PA)((e) => {
                let { clip: t } = e,
                    s = (0, V.df)(),
                    r = (0, i.useRef)(String((0, $.A)()));
                return s
                    ? (0, a.jsx)(X.Nk, {
                          clip: t,
                          viewUuid: r.current,
                          className: g().block,
                          coverClassName: z().cover,
                          playButtonIconSize: "l",
                          likeIconSize: "xs",
                          shouldShowTimecode: !0,
                      })
                    : null;
            });
            var W = s(51551),
                Q = s(34836),
                J = s.n(Q);
            let Z = (0, p.PA)((e) => {
                let { concert: t } = e,
                    s = (0, i.useRef)(String((0, $.A)()));
                return (0, a.jsx)(W.VN, {
                    artistId: null,
                    viewUuid: s.current,
                    concert: t,
                    radius: "s",
                    className: J().root,
                    meta: (0, a.jsx)(W.wP, {}),
                    shouldSendAnalyticsOnHide: !0,
                });
            });
            var q = s(75572),
                ee = s.n(q);
            let et = (0, p.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(v.M_, {
                    album: t,
                    className: (0, r.$)(g().block, ee().root),
                    coverClassName: g().cover,
                    playButtonIconSize: "l",
                    likeIconSize: "xs",
                    shouldShowReleaseYear: !0,
                });
            });
            var es = s(65255),
                ea = s(76150),
                er = s.n(ea);
            let ei = (0, p.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: s } = (0, o.A)();
                return (0, a.jsx)("div", {
                    className: er().root,
                    children: (0, a.jsx)(es.Fn, {
                        textButton: s({ id: "interface-actions.further" }),
                        meta: t,
                        buttonClassName: (0, r.$)(er().button, er().important),
                    }),
                });
            });
            var eo = s(45242),
                el = s(50692),
                ec = s.n(el);
            let en = (0, p.PA)((e) => {
                let { playlist: t } = e;
                return (0, a.jsx)(eo.vf, {
                    playlist: t,
                    className: (0, r.$)(g().block, ec().root),
                    coverClassName: g().cover,
                    playButtonIconSize: "l",
                    likeIconSize: "xs",
                });
            });
            var ed = s(34790),
                em = s.n(ed);
            let eu = (0, p.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, h.fyy)(),
                    { formatMessage: l } = (0, o.A)(),
                    {
                        settings: { isMobile: n },
                    } = (0, h.Pjs)(),
                    d = {
                        contextData: {
                            type: O.K.Various,
                            meta: { id: t.entityId },
                            from: s,
                        },
                        queueParams: { index: 0, entityId: t.id },
                        loadContextMeta: !0,
                    },
                    m = (0, h.Dx4)({
                        playContextParams: d,
                        entityId: t.entityId,
                    }),
                    u = (0, i.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, r.$)(g().cover, em().cover),
                                alt: l(
                                    { id: "entity-names.track-name-by-type" },
                                    { type: (0, h.yDn)(t.type), name: t.title },
                                ),
                                radius: "xs",
                                ...e,
                            }),
                        [
                            l,
                            t.coverUri,
                            t.isAvailable,
                            t.isDisliked,
                            t.title,
                            t.type,
                        ],
                    );
                return (0, a.jsx)(M.CC, {
                    className: (0, r.$)(g().block, em().root),
                    track: t,
                    meta: (0, a.jsx)(M.wo, {
                        podcastMetaClassName: (0, r.$)(
                            em().podcastMeta,
                            em().important,
                        ),
                        titleContainerClassName: (0, r.$)(
                            em().titleContainer,
                            em().important,
                        ),
                        textClassName: (0, r.$)(em().text, em().important),
                        progressClassName: (0, r.$)(
                            em().progress,
                            em().important,
                        ),
                        track: t,
                        playContextParams: d,
                        withListeningProgress: !0,
                        explicitSize: "xxxs",
                        titleLineClamp: 2,
                        withAlbumTitleLink: !n,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: "l",
                    controls: (0, a.jsx)(M.QD, {
                        track: t,
                        utmLink: d.contextData.utmLink,
                        likeIconSize: "xs",
                    }),
                    ...m,
                    ...(0, c.Am)(c.Kq.track.TRACK_PODCAST),
                });
            });
            var eh = s(96560),
                e_ = s(83336),
                eS = s.n(e_);
            let ex = (0, p.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(v.M_, {
                    album: t,
                    className: (0, r.$)(g().block, eS().root),
                    coverClassName: g().cover,
                    playButtonIconSize: "l",
                    likeIconSize: "xs",
                    description: (0, a.jsx)(eh.A, {
                        id: "entity-names.recently-release",
                    }),
                });
            });
            var ep = s(89300),
                eC = s.n(ep);
            let ej = (0, p.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, h.fyy)(),
                    {
                        settings: { isMobile: o },
                    } = (0, h.Pjs)(),
                    l = {
                        contextData: {
                            type: O.K.Various,
                            meta: { id: t.entityId },
                            from: s,
                        },
                        queueParams: { index: 0, entityId: t.id },
                        loadContextMeta: !0,
                    },
                    n = (0, h.Dx4)({
                        playContextParams: l,
                        entityId: t.entityId,
                    }),
                    d = (0, i.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, r.$)(g().cover, eC().cover),
                                radius: "xs",
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, a.jsx)(M.CC, {
                    className: (0, r.$)(g().block, eC().root),
                    track: t,
                    meta: (0, a.jsx)(M.j7, { withArtistLink: !o, track: t }),
                    playButtonCellRender: d,
                    playButtonIconSize: "l",
                    controls: (0, a.jsx)(M.QD, {
                        track: t,
                        utmLink: l.contextData.utmLink,
                        likeIconSize: "xs",
                    }),
                    ...n,
                    ...(0, c.Am)(c.Kq.track.SEARCH_TRACK_CARD),
                });
            });
            var eA = s(78016),
                ey = s(54487),
                eP = s(95592),
                ek = s(64508),
                eb = s.n(ek);
            let ev = (0, p.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    { ref: s, intersectionPropertyId: l } = (0, h.nMI)(),
                    { user: c } = (0, h.Pjs)(),
                    { formatMessage: n, formatDate: d } = (0, o.A)(),
                    m = (0, eP.PL)(t),
                    u = (0, H.L)(() => {
                        let e = n(
                                { id: "entity-names.upcoming-album-name" },
                                { upcomingAlbumName: t.title },
                            ),
                            s = t.isPresave
                                ? n({ id: "entity-names.has-your-like" })
                                : "";
                        return "".concat(e, " ").concat(s);
                    }),
                    S = (0, i.useCallback)(
                        (e, s) => {
                            var r;
                            return (null == (r = t.artists) ? void 0 : r.length)
                                ? (0, a.jsx)(w.iQ, {
                                      linkClassName: e,
                                      captionClassName: s,
                                      artists: t.artists,
                                      lineClamp: 1,
                                  })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, a.jsxs)(_.Cj, {
                    ref: s,
                    "data-intersection-property-id": l,
                    className: (0, r.$)(
                        g().block,
                        _.$f.root,
                        eb().root,
                        eb().important,
                    ),
                    "aria-label": u,
                    children: [
                        (0, a.jsxs)(ey.Paper, {
                            className: eb().cover,
                            radius: "xs",
                            children: [
                                (0, a.jsx)(_.BW, {
                                    className: eb().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: n(
                                        {
                                            id: "entity-names.upcoming-album-name",
                                        },
                                        { upcomingAlbumName: t.title },
                                    ),
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                    fallbackIconSize: "m",
                                    fallbackIconVariant: "lock",
                                }),
                                t.coverUri &&
                                    (0, a.jsx)(eA.Icon, {
                                        className: eb().lockIcon,
                                        variant: "lock",
                                        size: "xs",
                                    }),
                            ],
                        }),
                        (0, a.jsx)(_.ro, {
                            title: (0, a.jsx)(D.Caption, {
                                className: (0, r.$)(_.$f.text, _.$f.titleText),
                                size: "l",
                                variant: "div",
                                type: "text",
                                children: t.title,
                            }),
                            description: (0, a.jsx)(D.Caption, {
                                className: eb().releaseDate,
                                variant: "div",
                                type: "entity",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                children: (0, a.jsx)(eh.A, {
                                    id: "entity-names.upcoming-album-date",
                                    values: {
                                        releaseDate: d(
                                            t.releaseDate,
                                            (0, h.sDH)(),
                                        ),
                                    },
                                }),
                            }),
                            artistsComponent: S,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, a.jsx)(_.aQ, {
                            fallback: (0, a.jsx)(_.cy, {
                                size: "xs",
                                iconSize: "xs",
                                className: eb().likeButton,
                                isLiked: t.isPresave,
                                onClick: m,
                                disabled: !c.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var eT = s(41028),
                eg = s(54344),
                eI = s(10608),
                eE = s.n(eI);
            let eN = (0, p.PA)((e) => {
                    var t;
                    let { vibe: s } = e;
                    return (0, a.jsx)(eg.H2, {
                        className: (0, r.$)(eE().root, eE().important),
                        coverClassName: (0, r.$)(
                            eE().coverClassName,
                            eE().important,
                        ),
                        playButtonIconSize: "l",
                        vibe: s,
                        cover: (0, eT.wg)({
                            uri: s.backgroundImageUrl,
                            color: null == (t = s.colors) ? void 0 : t.average,
                        }),
                        description: s.description,
                        agentVariant: eg.hl.LARGE,
                    });
                }),
                eR = (0, p.PA)((e) => {
                    let {
                            results: t,
                            isShimmerVisible: s,
                            isShimmerActive: l,
                            blockPosition: n,
                            sendSearchFeedback: m,
                        } = e,
                        { formatMessage: u } = (0, o.A)(),
                        _ = (0, i.useCallback)(
                            (e, s) => {
                                switch (e.type) {
                                    case d.r.ALBUM:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data.id,
                                                            type: j.o.ALBUM,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            N,
                                                            { album: e.data },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.PLAYLIST:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data.id,
                                                            type: j.o.PLAYLIST,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            en,
                                                            {
                                                                playlist:
                                                                    e.data,
                                                            },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.RECENT_RELEASE:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data.id,
                                                            type: j.o.ALBUM,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            ex,
                                                            { album: e.data },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.WAVE:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data
                                                                .stationId,
                                                            type: j.o.WAVE,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            eN,
                                                            { vibe: e.data },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.stationId,
                                        );
                                    case d.r.ARTIST:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Artist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data.id,
                                                            type: j.o.ARTIST,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            L,
                                                            { artist: e.data },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.UPCOMING:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(ev, {
                                                    upcomingAlbum: e.data,
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.CONCERT:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Concert,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(Z, {
                                                    concert: e.data,
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.PODCAST:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data.id,
                                                            type: j.o.ALBUM,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            et,
                                                            { album: e.data },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.NON_MUSIC:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(et, {
                                                    album: e.data,
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.PODCAST_EPISODE:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(eu, {
                                                    track: e.data,
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.OVERVIEW:
                                        return (0, a.jsx)(
                                            ei,
                                            { data: e.data },
                                            e.type,
                                        );
                                    case d.r.TRACK:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Track,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data.entityId,
                                                            type: j.o.TRACK,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            ej,
                                                            { track: e.data },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.CLIP:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(
                                                    h.NYB.Provider,
                                                    {
                                                        value: {
                                                            sendSearchFeedback:
                                                                m,
                                                            id: e.data.clipId,
                                                            type: j.o.CLIP,
                                                            blockPosition: n,
                                                            position: s,
                                                        },
                                                        children: (0, a.jsx)(
                                                            F,
                                                            { clip: e.data },
                                                        ),
                                                    },
                                                ),
                                            },
                                            e.data.clipId,
                                        );
                                    case d.r.BOOK_CHAPTER:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType:
                                                    C.ky.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(Y, {
                                                    track: e.data,
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [n, t.length, m],
                        ),
                        S = (0, i.useMemo)(
                            () =>
                                t
                                    .map((e, t) => _(e, t))
                                    .filter((e) => (0, i.isValidElement)(e)),
                            [_, t, t.length],
                        );
                    return s
                        ? (0, a.jsx)(P, { isShimmerActive: l })
                        : S.length
                          ? (0, a.jsx)(h.FoH, {
                                blockId: h.hf$.SEARCH_BEST_RESULTS,
                                blockType: h.hf$.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: S.length,
                                children: (0, a.jsx)("div", {
                                    className: (0, r.$)(b().root, {
                                        [b().root_withSingleResult]:
                                            1 === S.length,
                                    }),
                                    role: "group",
                                    "aria-label": u({
                                        id: "search-results.best",
                                    }),
                                    ...(0, c.Am)(
                                        c.e8.search.SEARCH_BEST_RESULTS,
                                    ),
                                    children: S,
                                }),
                            })
                          : null;
                });
            var eB = s(40178);
            let ef = (0, p.PA)((e) => {
                    let {
                            forwardRef: t,
                            items: s = [],
                            title: r,
                            sendSearchFeedback: i,
                            blockPosition: o = 0,
                            containerClassName: c,
                            headerClassName: d,
                            className: m,
                            itemClassName: u,
                            isShimmerVisible: S,
                            isShimmerActive: x,
                            isClipBlock: p,
                            ...C
                        } = e,
                        { search: A } = (0, h.Pjs)(),
                        y = (0, V.df)(),
                        P = s.filter(
                            (e) =>
                                e.type !== n.n.PODCAST_EPISODE &&
                                e.type !== n.n.WAVE,
                        );
                    return (A.isResolved && 0 === P.length) || (p && !y)
                        ? null
                        : (0, a.jsx)(_.OY, {
                              isShimmerVisible: S,
                              isShimmerActive: x,
                              className: m,
                              containerClassName: c,
                              headerClassName: d,
                              showHeaderShimmer: !0,
                              title: r,
                              ref: t,
                              ...(0, l.getDataAttrFromProps)(C),
                              itemClassName: u,
                              children: P.map((e, t) => {
                                  switch (e.type) {
                                      case n.n.ALBUM:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.id,
                                                      type: j.o.ALBUM,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(v.aX, {
                                                      album: e.data,
                                                      contentLinesCount: 3,
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      case n.n.ARTIST:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.id,
                                                      type: j.o.ARTIST,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(R.ao, {
                                                      artist: e.data,
                                                      contentLinesCount: 3,
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      case n.n.PLAYLIST:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.id,
                                                      type: j.o.PLAYLIST,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(eo.B6, {
                                                      playlist: e.data,
                                                      contentLinesCount: 3,
                                                  }),
                                              },
                                              e.data.key,
                                          );
                                      case n.n.UGC_TRACK:
                                      case n.n.TRACK:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.albumId
                                                          ? ""
                                                                .concat(
                                                                    e.data.id,
                                                                    ":",
                                                                )
                                                                .concat(
                                                                    e.data
                                                                        .albumId,
                                                                )
                                                          : e.data.id,
                                                      type: j.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(M.wO, {
                                                      track: e.data,
                                                      overrideContextType:
                                                          eB.b.Search,
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      case n.n.CLIP:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.clipId,
                                                      type: j.o.WAVE,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(X.FC, {
                                                      clip: e.data,
                                                  }),
                                              },
                                              e.data.clipId,
                                          );
                                      case n.n.PODCAST:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.id,
                                                      type: j.o.PODCAST,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(v.aX, {
                                                      album: e.data,
                                                      contentLinesCount: 3,
                                                      withLikesCount: !0,
                                                      withAddition: !1,
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                  }
                              }),
                          });
                }),
                eL = (0, i.forwardRef)((e, t) =>
                    (0, a.jsx)(ef, { forwardRef: t, ...e }),
                );
            var eO = s(12561),
                eH = s.n(eO);
            let eD = (e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: p,
                            bestResults: C,
                            sendSearchFeedback: j,
                            searchCorrectedText: A,
                            isShimmerVisible: y,
                            isShimmerActive: P,
                            ...k
                        } = e,
                        { formatMessage: b } = (0, o.A)(),
                        v = (0, i.useMemo)(() => {
                            let e = {
                                [n.n.ALL]: {
                                    message: b({ id: "search-results.best" }),
                                    type: n.n.ALL,
                                    items: [],
                                },
                                [n.n.ARTIST]: {
                                    message: b({ id: "search-results.artist" }),
                                    type: n.n.ARTIST,
                                    items: [],
                                },
                                [n.n.PODCAST]: {
                                    message: b({
                                        id: "search-results.podcasts-and-books",
                                    }),
                                    type: n.n.PODCAST,
                                    items: [],
                                },
                                [n.n.ALBUM]: {
                                    message: b({ id: "search-results.album" }),
                                    type: n.n.ALBUM,
                                    items: [],
                                },
                                [n.n.PLAYLIST]: {
                                    message: b({
                                        id: "search-results.playlist",
                                    }),
                                    type: n.n.PLAYLIST,
                                    items: [],
                                },
                                [n.n.CLIP]: {
                                    message: b({ id: "search-results.clip" }),
                                    type: n.n.CLIP,
                                    items: [],
                                },
                            };
                            p.forEach((t) => {
                                var s, a;
                                null == (s = e[t.type]) || s.items.push(t),
                                    null == (a = e[n.n.ALL]) || a.items.push(t);
                            });
                            let t = {
                                [n.n.ARTIST]: c.e8.search.SEARCH_MIXED_ARTIST,
                                [n.n.PODCAST]: c.e8.search.SEARCH_MIXED_PODCAST,
                                [n.n.ALBUM]: c.e8.search.SEARCH_MIXED_ALBUM,
                                [n.n.PLAYLIST]:
                                    c.e8.search.SEARCH_MIXED_PLAYLIST,
                                [n.n.CLIP]: c.e8.search.SEARCH_MIXED_CLIP,
                                [d.r.PODCAST]:
                                    c.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [d.r.OVERVIEW]:
                                    c.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [d.r.PODCAST_EPISODE]:
                                    c.e8.search
                                        .SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [d.r.NON_MUSIC]:
                                    c.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((s, r) => {
                                let o = e[s],
                                    l = o.type === n.n.CLIP;
                                if (o.type === n.n.ALL) {
                                    let e = o.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: s,
                                                objectPosY: a,
                                                objectsCount: i,
                                            } = (0, h.$tp)({
                                                index: t,
                                                count: o.items.length,
                                                itemsCountPerColumn: 3,
                                                showedItemsCountInBlock: 6,
                                            });
                                            return (0, S.G)({
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: j,
                                                blockPosition: r,
                                                objectPosX: s,
                                                objectPosY: a,
                                                objectsCount: i,
                                            });
                                        })
                                        .filter((e) =>
                                            (0, i.isValidElement)(e),
                                        );
                                    return (0, a.jsxs)(
                                        i.Fragment,
                                        {
                                            children: [
                                                (0, a.jsx)(eR, {
                                                    results: C,
                                                    isShimmerVisible: y,
                                                    isShimmerActive: P,
                                                    blockPosition: r,
                                                    sendSearchFeedback: j,
                                                }),
                                                (0, a.jsx)(h.FoH, {
                                                    blockId:
                                                        h.hf$
                                                            .SEARCH_OPEN_BEST_RESULTS,
                                                    blockType:
                                                        h.hf$
                                                            .SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, a.jsx)(x.k, {
                                                        containerClassName:
                                                            eH().blockMixed,
                                                        className: eH().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        "aria-label": b({
                                                            id: "search-results.other-results",
                                                        }),
                                                        isShimmerVisible: y,
                                                        isShimmerActive: P,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        r,
                                    );
                                }
                                let d = t[o.type],
                                    m = d ? (0, c.Am)(d) : {};
                                return (0, a.jsx)(
                                    eL,
                                    {
                                        className: eH().block,
                                        headerClassName: eH().blockHeader,
                                        containerClassName: eH().blockCarousel,
                                        blockPosition: r,
                                        items: o.items,
                                        title: o.message,
                                        sendSearchFeedback: j,
                                        isShimmerVisible: y,
                                        isShimmerActive: P,
                                        isClipBlock: l,
                                        ...m,
                                    },
                                    r,
                                );
                            });
                        }, [b, p, j, y, P, C]);
                    return (0, a.jsxs)(u.N, {
                        className: (0, r.$)(eH().root, s),
                        containerClassName: eH().container,
                        ref: t,
                        ...(0, l.getDataAttrFromProps)(k),
                        children: [
                            (0, a.jsxs)("div", {
                                className: eH().content,
                                children: [
                                    A &&
                                        (0, a.jsx)("div", {
                                            className: eH().correctedTextBlock,
                                            children: A,
                                        }),
                                    (0, a.jsx)(h.hjC, {
                                        tabId: m.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: (0, a.jsx)("div", {
                                            className: eH().items,
                                            children: v,
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(_.A, {
                                children: (0, a.jsx)(_.wi, {
                                    className: eH().footer,
                                }),
                            }),
                        ],
                    });
                },
                eM = (0, i.forwardRef)((e, t) =>
                    (0, a.jsx)(eD, { forwardRef: t, ...e }),
                );
        },
        33941: (e) => {
            e.exports = {
                root: "SearchBestResultsShimmer_root__xMCOZ",
                container: "SearchBestResultsShimmer_container__Je48X",
                entity: "SearchBestResultsShimmer_entity____sr1",
                important: "SearchBestResultsShimmer_important__vbFUa",
                cover: "SearchBestResultsShimmer_cover__rzY5m",
                meta: "SearchBestResultsShimmer_meta__GlLPe",
                title: "SearchBestResultsShimmer_title__AXYX8",
                subtitle: "SearchBestResultsShimmer_subtitle__IULSY",
            };
        },
        34236: (e, t, s) => {
            "use strict";
            s.d(t, { G: () => _ });
            var a = s(33008),
                r = s(41028),
                i = s(93967),
                o = s(10462),
                l = s(81649),
                c = s(52732),
                n = s(90317),
                d = s(45242),
                m = s(44078),
                u = s(54344),
                h = s(79169);
            let _ = (e) => {
                let {
                    item: t,
                    index: s,
                    pageId: _,
                    sendSearchFeedback: S,
                    blockPosition: x = 0,
                    objectPosX: p,
                    objectPosY: C,
                    objectsCount: j,
                } = e;
                switch (t.type) {
                    case o.n.PODCAST_EPISODE:
                        return (0, a.jsx)(
                            h.Bki,
                            {
                                objectType: i.ky.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: p,
                                objectPosY: C,
                                objectsCount: j,
                                children: (0, a.jsx)(m.c8, {
                                    pageId: _,
                                    track: t.data,
                                }),
                            },
                            t.data.id,
                        );
                    case o.n.UGC_TRACK:
                        return (0, a.jsx)(m.c8, { pageId: _, track: t.data });
                    case o.n.TRACK:
                        return (0, a.jsx)(
                            h.Bki,
                            {
                                objectType: i.ky.Track,
                                objectId: t.data.id,
                                objectPosX: p,
                                objectPosY: C,
                                objectsCount: j,
                                children: (0, a.jsx)(h.NYB.Provider, {
                                    value: {
                                        sendSearchFeedback: S,
                                        id: t.data.entityId,
                                        type: l.o.TRACK,
                                        blockPosition: x,
                                        position: s,
                                    },
                                    children: (0, a.jsx)(m.c8, {
                                        pageId: _,
                                        track: t.data,
                                    }),
                                }),
                            },
                            t.data.id,
                        );
                    case o.n.ARTIST:
                        return (0, a.jsx)(
                            h.Bki,
                            {
                                objectType: i.ky.Artist,
                                objectId: t.data.id,
                                objectPosX: p,
                                objectPosY: C,
                                objectsCount: j,
                                children: (0, a.jsx)(h.NYB.Provider, {
                                    value: {
                                        sendSearchFeedback: S,
                                        id: t.data.id,
                                        type: l.o.ARTIST,
                                        blockPosition: x,
                                        position: s,
                                    },
                                    children: (0, a.jsx)(n.cz, {
                                        pageId: _,
                                        artist: t.data,
                                    }),
                                }),
                            },
                            t.data.id,
                        );
                    case o.n.PLAYLIST:
                        return (0, a.jsx)(
                            h.Bki,
                            {
                                objectType: i.ky.Playlist,
                                objectId: t.data.id,
                                objectPosX: p,
                                objectPosY: C,
                                objectsCount: j,
                                children: (0, a.jsx)(h.NYB.Provider, {
                                    value: {
                                        sendSearchFeedback: S,
                                        id: t.data.id,
                                        type: l.o.PLAYLIST,
                                        blockPosition: x,
                                        position: s,
                                    },
                                    children: (0, a.jsx)(d.vf, {
                                        pageId: _,
                                        playlist: t.data,
                                    }),
                                }),
                            },
                            t.data.id,
                        );
                    case o.n.PODCAST:
                        return (0, a.jsx)(
                            h.Bki,
                            {
                                objectType: i.ky.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: p,
                                objectPosY: C,
                                objectsCount: j,
                                children: (0, a.jsx)(
                                    h.NYB.Provider,
                                    {
                                        value: {
                                            sendSearchFeedback: S,
                                            id: t.data.id,
                                            type: l.o.PODCAST,
                                            blockPosition: x,
                                            position: s,
                                        },
                                        children: (0, a.jsx)(c.M_, {
                                            pageId: _,
                                            album: t.data,
                                        }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case o.n.ALBUM:
                        return (0, a.jsx)(
                            h.Bki,
                            {
                                objectType: i.ky.Album,
                                objectId: String(t.data.id),
                                objectPosX: p,
                                objectPosY: C,
                                objectsCount: j,
                                children: (0, a.jsx)(
                                    h.NYB.Provider,
                                    {
                                        value: {
                                            sendSearchFeedback: S,
                                            id: t.data.id,
                                            type: l.o.ALBUM,
                                            blockPosition: x,
                                            position: s,
                                        },
                                        children: (0, a.jsx)(c.M_, {
                                            pageId: _,
                                            album: t.data,
                                        }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case o.n.WAVE: {
                        let e = t.data;
                        return (0, a.jsx)(
                            h.Bki,
                            {
                                objectType: i.ky.Wave,
                                objectId: e.stationId,
                                objectPosX: p,
                                objectPosY: C,
                                objectsCount: j,
                                children: (0, a.jsx)(h.NYB.Provider, {
                                    value: {
                                        sendSearchFeedback: S,
                                        id: e.stationId,
                                        type: l.o.WAVE,
                                        blockPosition: x,
                                        position: s,
                                    },
                                    children: (0, a.jsx)(u.H2, {
                                        vibe: e,
                                        cover: (0, r.wg)({
                                            uri: e.imageUrl,
                                            color: e.backgroundColor,
                                        }),
                                        description: e.description,
                                        agentVariant: u.hl.SMALL,
                                    }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        34476: (e, t, s) => {
            "use strict";
            s.d(t, { Mixes: () => S });
            var a = s(33008),
                r = s(97531),
                i = s(66268),
                o = s(79169),
                l = s(73827),
                c = s(95567),
                n = s(55689),
                d = s(18740),
                m = s(37726),
                u = s.n(m);
            let h = (0, r.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, mixes: r } = e,
                    { formatMessage: m } = (0, l.A)(),
                    h = (0, i.useMemo)(
                        () =>
                            t
                                ? (0, d.km)({ isActive: s, withInfo: !1 })
                                : r.map((e) =>
                                      (0, a.jsx)(
                                          n.NZ,
                                          {
                                              title: e.title,
                                              weblink: e.weblink,
                                              covers: e.covers,
                                              coverSize: 80,
                                              imagesLayoutType:
                                                  e.imagesLayoutType,
                                          },
                                          e.id,
                                      ),
                                  ),
                        [s, t, r],
                    );
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.Tw, {
                            className: u().carouselHeader,
                            title: m({ id: "entity-names.mixes" }),
                            titleSize: "xs",
                            viewAllActionLink: o.Zyd.mixes.href,
                        }),
                        (0, a.jsx)(c.Carousel, {
                            className: u().carouselBlock,
                            itemClassName: u().mixItem,
                            children: h,
                        }),
                    ],
                });
            });
            var _ = s(59348);
            let S = (0, r.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: s },
                        search: r,
                    } = (0, o.Pjs)();
                return (r.mixes.loadingState === o.GuX.IDLE &&
                    (0, i.use)(r.mixes.getMixes(!1)),
                s)
                    ? (0, a.jsx)(h, {
                          isShimmerVisible:
                              r.mixes.isLoading || r.mixes.isRejected,
                          isShimmerActive: r.mixes.isLoading,
                          mixes: r.mixes.items,
                      })
                    : (0, a.jsx)(_.MixesGrid, {
                          isShimmerVisible:
                              r.mixes.isLoading || r.mixes.isRejected,
                          isShimmerActive: r.mixes.isLoading,
                          mixes: r.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
        },
        34790: (e) => {
            e.exports = {
                root: "SearchBestResultsPodcastEpisodeBlock_root__YHMZ5",
                cover: "SearchBestResultsPodcastEpisodeBlock_cover__QuzER",
                podcastMeta:
                    "SearchBestResultsPodcastEpisodeBlock_podcastMeta__u2dSw",
                important:
                    "SearchBestResultsPodcastEpisodeBlock_important__qJ_Ej",
                titleContainer:
                    "SearchBestResultsPodcastEpisodeBlock_titleContainer__MNogD",
                text: "SearchBestResultsPodcastEpisodeBlock_text__uJpwJ",
                progress:
                    "SearchBestResultsPodcastEpisodeBlock_progress__ftBpc",
            };
        },
        34836: (e) => {
            e.exports = { root: "SearchBestResultsConcertBlock_root__JDy_y" };
        },
        37726: (e) => {
            e.exports = {
                carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
                carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
                mixItem: "MixesCarousel_mixItem__YNSsB",
            };
        },
        39535: (e, t, s) => {
            "use strict";
            var a;
            s.d(t, { $: () => a }),
                (function (e) {
                    (e.TOP = "top"),
                        (e.TRACK = "track"),
                        (e.CLIP = "clip"),
                        (e.ALBUM = "album"),
                        (e.ARTIST = "artist"),
                        (e.PLAYLIST = "playlist"),
                        (e.KIDS_MUSIC = "kids-music"),
                        (e.KIDS_PLAYLIST = "kids-playlist"),
                        (e.SPOKEN_PLAYLIST = "spoken-playlist"),
                        (e.PODCAST = "podcast"),
                        (e.BOOK = "book"),
                        (e.KIDS_PODCAST = "kids-podcast"),
                        (e.KIDS_BOOK = "kids-book");
                })(a || (a = {}));
        },
        41973: (e, t, s) => {
            "use strict";
            s.d(t, { SearchEmpty: () => S });
            var a = s(33008),
                r = s(85896),
                i = s(66268),
                o = s(73827),
                l = s(18064),
                c = s(78016),
                n = s(57747),
                d = s(77868),
                m = s(18740),
                u = s(90581),
                h = s.n(u);
            let _ = (e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            searchCorrectedText: i,
                        } = e,
                        { formatMessage: u } = (0, o.A)();
                    return (0, a.jsxs)(n.N, {
                        className: (0, r.$)(h().root, s),
                        containerClassName: h().container,
                        ref: t,
                        children: [
                            (0, a.jsxs)("div", {
                                className: h().content,
                                ...(0, l.Am)(
                                    l.e8.search.SEARCH_EMPTY_CONTAINER,
                                ),
                                children: [
                                    i &&
                                        (0, a.jsx)("div", {
                                            className: h().correctedTextBlock,
                                            children: i,
                                        }),
                                    (0, a.jsx)(c.Icon, {
                                        className: h().icon,
                                        variant: "search",
                                        size: "xxl",
                                        ...(0, l.Am)(
                                            l.e8.search.SEARCH_EMPTY_ICON,
                                        ),
                                    }),
                                    (0, a.jsx)(d.Heading, {
                                        className: h().title,
                                        size: "s",
                                        weight: "bold",
                                        variant: "h3",
                                        ...(0, l.Am)(
                                            l.e8.search.SEARCH_EMPTY_HEADER,
                                        ),
                                        children: u({
                                            id: "search-results.not-found-title",
                                        }),
                                    }),
                                    (0, a.jsx)(d.Caption, {
                                        className: h().subtitle,
                                        variant: "div",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        ...(0, l.Am)(
                                            l.e8.search
                                                .SEARCH_EMPTY_DESCRIPTION,
                                        ),
                                        children: u({
                                            id: "search-results.not-found-description",
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(m.A, {
                                children: (0, a.jsx)(m.wi, {
                                    className: h().footer,
                                }),
                            }),
                        ],
                    });
                },
                S = (0, i.forwardRef)((e, t) =>
                    (0, a.jsx)(_, { forwardRef: t, ...e }),
                );
        },
        43329: (e) => {
            e.exports = {
                header: "SearchPodcastEpisodes_header__uqkmY",
                root: "SearchPodcastEpisodes_root__VjZhR",
                clearButton: "SearchPodcastEpisodes_clearButton__eeDVF",
                content: "SearchPodcastEpisodes_content__96WMv",
                podcastColumn: "SearchPodcastEpisodes_podcastColumn___K9Sr",
                important: "SearchPodcastEpisodes_important__c4dHK",
            };
        },
        43825: (e) => {
            e.exports = {
                root: "SearchCorrectedText_root__ZM2f2",
                link: "SearchCorrectedText_link__eORMG",
                text: "SearchCorrectedText_text__HKgvL",
            };
        },
        46265: (e) => {
            e.exports = {
                root: "MixedEntitiesBlock_root__Zs8l2",
                controls: "MixedEntitiesBlock_controls__mOhq7",
                item: "MixedEntitiesBlock_item__uRvxc",
                item_withMultipleColumns:
                    "MixedEntitiesBlock_item_withMultipleColumns__ziUqI",
                column: "MixedEntitiesBlock_column__sHpUC",
            };
        },
        46962: (e, t, s) => {
            "use strict";
            s.d(t, { SearchHistoryBlock: () => A });
            var a = s(33008),
                r = s(97531),
                i = s(79169),
                o = s(66268),
                l = s(73827),
                c = s(34236),
                n = s(55302),
                d = s(1165),
                m = s.n(d);
            let u = (0, r.PA)(() => {
                let { search: e, user: t } = (0, i.Pjs)(),
                    { formatMessage: s } = (0, l.A)(),
                    r = e.historyPage.items;
                if (
                    ((0, o.useEffect)(
                        () => () => {
                            var t;
                            (null == (t = location) ? void 0 : t.pathname) !==
                                i.Zyd.searchHistory.href &&
                                e.resetHistoryStateRequest();
                        },
                        [e],
                    ),
                    e.isHistoryReady &&
                        t.account.data.uid &&
                        (0, o.use)(
                            e.getHistory({ userId: t.account.data.uid }),
                        ),
                    0 === r.length)
                )
                    return null;
                let d = r
                    .map((e, t) =>
                        (0, c.G)({ item: e, index: t, pageId: i._Q$.SEARCH }),
                    )
                    .filter((e) => (0, o.isValidElement)(e));
                return (0, a.jsx)("section", {
                    className: m().root,
                    children: (0, a.jsx)(n.k, {
                        headerClassName: m().header,
                        containerClassName: m().content,
                        isShimmerVisible: e.isHistoryShimmerVisible,
                        isShimmerActive: e.isHistoryLoading,
                        title: s({ id: "search.history" }),
                        viewAllAction: i.Zyd.searchHistory.href,
                        maxColumns: 2,
                        itemsPerColumn: 4,
                        showControls: !0,
                        children: d,
                    }),
                });
            });
            var h = s(96560),
                _ = s(44189),
                S = s(77868),
                x = s(60289),
                p = s(21657),
                C = s.n(p);
            let j = (0, r.PA)(() => {
                    let { search: e, user: t } = (0, i.Pjs)(),
                        { formatMessage: s } = (0, l.A)(),
                        r = (0, x.useClearHistory)(e.resetHistoryItems),
                        d = e.historyPage.items;
                    if (
                        ((0, o.useEffect)(
                            () => () => {
                                var t;
                                (null == (t = location)
                                    ? void 0
                                    : t.pathname) !==
                                    i.Zyd.searchHistory.href &&
                                    e.resetHistoryStateRequest();
                            },
                            [e],
                        ),
                        e.isHistoryReady &&
                            t.account.data.uid &&
                            (0, o.use)(
                                e.getHistory({ userId: t.account.data.uid }),
                            ),
                        0 === d.length)
                    )
                        return null;
                    let m = d
                        .map((e, t) =>
                            (0, c.G)({
                                item: e,
                                index: t,
                                pageId: i._Q$.SEARCH,
                            }),
                        )
                        .filter((e) => (0, o.isValidElement)(e));
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(n.k, {
                                headerClassName: C().header,
                                containerClassName: C().mixedEntitiesBlock,
                                isShimmerVisible: e.isHistoryShimmerVisible,
                                isShimmerActive: e.isHistoryLoading,
                                title: s({ id: "search.history" }),
                                viewAllAction: i.Zyd.searchHistory.href,
                                titleSize: "xs",
                                children: m,
                            }),
                            (0, a.jsx)("div", {
                                className: C().buttonContainer,
                                children: (0, a.jsx)(_.Button, {
                                    className: C().button,
                                    "aria-label": s({
                                        id: "search.clear-history",
                                    }),
                                    disabled: !d.length,
                                    size: "default",
                                    radius: "xxxl",
                                    onClick: r,
                                    children: (0, a.jsx)(S.Caption, {
                                        variant: "span",
                                        size: "m",
                                        type: "text",
                                        children: (0, a.jsx)(h.A, {
                                            id: "search.clear-history",
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    });
                }),
                A = (0, r.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, i.Pjs)();
                    return e ? (0, a.jsx)(j, {}) : (0, a.jsx)(u, {});
                });
        },
        49402: (e) => {
            e.exports = {
                mixesTitle: "MixesGrid_mixesTitle__QawnL",
                mixesGrid: "MixesGrid_mixesGrid__uZQtt",
            };
        },
        50453: (e) => {
            e.exports = {
                root: "SearchBestResults_root__12Tlp",
                root_withSingleResult:
                    "SearchBestResults_root_withSingleResult__qAMCB",
            };
        },
        50692: (e) => {
            e.exports = { root: "SearchBestResultsPlaylistBlock_root__HLU50" };
        },
        55302: (e, t, s) => {
            "use strict";
            s.d(t, { k: () => y });
            var a = s(33008),
                r = s(85896),
                i = s(84798),
                o = s(66268),
                l = s(18064),
                c = s(95567),
                n = s(18740),
                d = s(73827),
                m = s(91342),
                u = s(1729),
                h = s.n(u);
            let _ = (e) => {
                let { className: t, ariaLabel: s, isShimmerActive: i } = e;
                return (0, a.jsxs)("div", {
                    tabIndex: 0,
                    "aria-label": s,
                    "aria-live": "polite",
                    "aria-busy": !0,
                    className: (0, r.$)(h().root, t),
                    children: [
                        (0, a.jsxs)("div", {
                            className: h().infoContainer,
                            children: [
                                (0, a.jsx)(m.Shimmer, {
                                    className: h().cover,
                                    radius: "s",
                                    isActive: i,
                                }),
                                (0, a.jsxs)("div", {
                                    className: h().textContainer,
                                    children: [
                                        (0, a.jsx)(m.Shimmer, {
                                            className: h().title,
                                            radius: "s",
                                            isActive: i,
                                        }),
                                        (0, a.jsx)(m.Shimmer, {
                                            className: h().description,
                                            radius: "s",
                                            isActive: i,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(m.Shimmer, {
                            className: h().action,
                            radius: "s",
                            isActive: i,
                        }),
                    ],
                });
            };
            var S = s(74733),
                x = s.n(S);
            let p = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: s = !0 } = e,
                    { formatMessage: r } = (0, d.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, a.jsx)(
                        _,
                        {
                            className: x().root,
                            ariaLabel: r(
                                { id: "loading-messages.entity-is-loading" },
                                { entityName: r({ id: "search.history" }) },
                            ),
                            isShimmerActive: s,
                        },
                        t,
                    ),
                );
            };
            var C = s(46265),
                j = s.n(C);
            let A = (e) => {
                    let {
                            forwardRef: t,
                            title: s,
                            description: d,
                            viewAllAction: m,
                            coverUrl: u,
                            children: h,
                            className: _,
                            maxColumns: S = 2,
                            itemsPerColumn: x = 3,
                            containerClassName: C,
                            headerClassName: A,
                            titleSize: y,
                            showControls: P,
                            isShimmerVisible: k,
                            isShimmerActive: b,
                        } = e,
                        v = (0, o.useRef)(null),
                        T = (0, o.useId)(),
                        { items: g, columnLength: I } = (0, o.useMemo)(() => {
                            if (k)
                                return {
                                    columnLength: S,
                                    items: Array.from({ length: S }, (e, t) =>
                                        (0, a.jsx)(
                                            "div",
                                            {
                                                className: j().column,
                                                children: (0, a.jsx)(p, {
                                                    shimmersCount: 3,
                                                    isShimmerActive: b,
                                                }),
                                            },
                                            t,
                                        ),
                                    ),
                                };
                            let e = (0, i.A)(h, x).slice(
                                0,
                                (null == h ? void 0 : h.length)
                                    ? Math.ceil(h.length / x)
                                    : S,
                            );
                            return {
                                items: e.map((e, t) =>
                                    (0, a.jsx)(
                                        "div",
                                        { className: j().column, children: e },
                                        t,
                                    ),
                                ),
                                columnLength: e.length,
                            };
                        }, [h, b, k, x, S]);
                    return (0, a.jsxs)("section", {
                        ref: t,
                        className: (0, r.$)(_, j().root),
                        ...(0, l.Am)(l.e8.search.MIXED_ENTITIES_BLOCK),
                        children: [
                            (0, a.jsx)(n.Tw, {
                                className: A,
                                labeledForId: T,
                                title: s,
                                description: d,
                                coverUrl: u,
                                viewAllActionLink: m,
                                titleSize: y,
                                controls:
                                    P &&
                                    (0, a.jsx)(n.X9, {
                                        className: j().controls,
                                        carouselRef: v,
                                    }),
                                withDescription: !!d,
                            }),
                            (0, a.jsx)(c.Carousel, {
                                className: C,
                                ref: v,
                                itemClassName: (0, r.$)(j().item, {
                                    [j().item_withMultipleColumns]: I > 1,
                                }),
                                "aria-labelledby": T,
                                role: "group",
                                children: g,
                            }),
                        ],
                    });
                },
                y = (0, o.forwardRef)((e, t) =>
                    (0, a.jsx)(A, { forwardRef: t, ...e }),
                );
        },
        57693: (e, t, s) => {
            "use strict";
            s.d(t, { SearchPodcastList: () => k });
            var a = s(33008),
                r = s(66268),
                i = s(18064),
                o = s(39535),
                l = s(42314),
                c = s(10462),
                n = s(96786),
                d = s(85896),
                m = s(97531),
                u = s(73827),
                h = s(48509),
                _ = s(81649),
                S = s(44078),
                x = s(79169),
                p = s(18740),
                C = s(43329),
                j = s.n(C);
            let A = (0, m.PA)((e) => {
                    let {
                            results: t,
                            sendSearchFeedback: s,
                            isShimmerVisible: o,
                            isShimmerActive: l,
                        } = e,
                        { from: c } = (0, x.fyy)(),
                        { formatMessage: n } = (0, u.A)(),
                        m = (0, r.useMemo)(
                            () =>
                                t.map((e, t) => {
                                    let r = e.data.albumId
                                        ? ""
                                              .concat(e.data.id, ":")
                                              .concat(e.data.albumId)
                                        : e.data.id;
                                    return (0, a.jsx)(
                                        x.NYB.Provider,
                                        {
                                            value: {
                                                sendSearchFeedback: s,
                                                id: e.data.id,
                                                type: _.o.PODCAST_EPISODE,
                                                blockPosition: 0,
                                                position: t,
                                            },
                                            children: (0, a.jsx)(S.Kd, {
                                                track: e.data,
                                                playContextParams: {
                                                    contextData: {
                                                        type: h.K.Various,
                                                        meta: { id: r },
                                                        from: c,
                                                    },
                                                    queueParams: {
                                                        index: 0,
                                                        entityId: e.data.id,
                                                    },
                                                    loadContextMeta: !0,
                                                },
                                                withPodcastName: !0,
                                            }),
                                        },
                                        r,
                                    );
                                }),
                            [t, c, s],
                        );
                    return (0, a.jsx)(p.$2, {
                        className: j().root,
                        blockHeaderClassName: j().header,
                        carouselClassName: j().content,
                        carouselItemClassName: (0, d.$)(
                            j().podcastColumn,
                            j().important,
                        ),
                        isShimmerVisible: o,
                        isShimmerActive: l,
                        blockHeaderTitle: n({
                            id: "search-results.podcast-episodes",
                        }),
                        maxColumnsCount: p.DI.ONE,
                        itemsCountPerColumn: 4,
                        shimmer: (0, a.jsx)(p.DS, {
                            variant: x.Xjt.PLAYLIST,
                            isActive: !0,
                        }),
                        ...(0, i.Am)(i.S7.CAROUSEL_WITH_COLUMNS_BLOCK),
                        children: m,
                    });
                }),
                y = (0, r.forwardRef)((e, t) =>
                    (0, a.jsx)(A, { forwardRef: t, ...e }),
                ),
                P = (e) => {
                    let {
                            forwardRef: t,
                            results: s,
                            sendSearchFeedback: r,
                            searchCorrectedText: d,
                            className: m,
                            isShimmerVisible: u,
                            isShimmerActive: h,
                        } = e,
                        { podcasts: _, podcastEpisodes: S } = ((e) => {
                            let t = [],
                                s = [];
                            return (
                                e.forEach((e) => {
                                    e.type === c.n.PODCAST
                                        ? t.push(e)
                                        : s.push(e);
                                }),
                                { podcasts: t, podcastEpisodes: s }
                            );
                        })(s),
                        x = (0, l.L)(() => {
                            if (S.length)
                                return (0, a.jsx)(y, {
                                    sendSearchFeedback: r,
                                    results: S,
                                    isShimmerVisible: u,
                                    isShimmerActive: h,
                                });
                        });
                    return (0, a.jsx)(n.SearchEntitiesGrid, {
                        ref: t,
                        className: m,
                        results: _,
                        filter: o.$.PODCAST,
                        sendSearchFeedback: r,
                        searchCorrectedText: d,
                        isShimmerVisible: u,
                        isShimmerActive: h,
                        ...(0, i.Am)(i.Xk.search.SEARCH_PAGE_RESULTS_PODCAST),
                        children: x,
                    });
                },
                k = (0, r.forwardRef)((e, t) =>
                    (0, a.jsx)(P, { forwardRef: t, ...e }),
                );
        },
        59348: (e, t, s) => {
            "use strict";
            s.d(t, { MixesGrid: () => _ });
            var a = s(33008),
                r = s(85896),
                i = s(97531),
                o = s(66268),
                l = s(96560),
                c = s(18064),
                n = s(77868),
                d = s(55689),
                m = s(18740),
                u = s(49402),
                h = s.n(u);
            let _ = (0, i.PA)((e) => {
                let {
                        isShimmerVisible: t,
                        isShimmerActive: s,
                        withTitle: i,
                        mixes: u,
                        shimmerCount: _ = 5,
                        className: S,
                    } = e,
                    x = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, a.jsx)(m.eI, {
                                      isActive: s,
                                      round: !1,
                                      centered: !1,
                                      withInfo: !1,
                                      count: _,
                                  })
                                : u.map((e) =>
                                      (0, a.jsx)(
                                          d.NZ,
                                          {
                                              title: e.title,
                                              weblink: e.weblink,
                                              covers: e.covers,
                                              imagesLayoutType:
                                                  e.imagesLayoutType,
                                          },
                                          e.id,
                                      ),
                                  ),
                        [s, t, u, _],
                    );
                return (0, a.jsxs)("div", {
                    ...(0, c.Am)(c.e8.mixes.MIXES_GRID_CONTAINER),
                    children: [
                        i &&
                            (0, a.jsx)(n.Heading, {
                                className: h().mixesTitle,
                                size: "s",
                                weight: "bold",
                                variant: "h3",
                                ...(0, c.Am)(c.e8.mixes.MIXES_GRID_HEADER),
                                children: (0, a.jsx)(l.A, {
                                    id: "entity-names.mixes",
                                }),
                            }),
                        (0, a.jsx)("div", {
                            className: (0, r.$)(h().mixesGrid, S),
                            children: x,
                        }),
                    ],
                });
            });
        },
        60289: (e, t, s) => {
            "use strict";
            s.d(t, { useClearHistory: () => m });
            var a = s(33008),
                r = s(17846),
                i = s(66268),
                o = s(73827),
                l = s(96560),
                c = s(42213),
                n = s(79169),
                d = s(18740);
            let m = (e) => {
                let { user: t, search: s } = (0, n.Pjs)(),
                    { formatMessage: m } = (0, o.A)(),
                    { notify: u } = (0, n.lkh)(),
                    h = (0, r.useRouter)();
                return (
                    (0, i.useEffect)(() => {
                        s.isEmptyHistory && h.push(n.Zyd.search.href);
                    }, [s.isEmptyHistory, h]),
                    (0, c.c)(() => {
                        try {
                            t.account.data.uid &&
                                s.clearHistory({ userId: t.account.data.uid }),
                                u(
                                    (0, a.jsx)(d.$W, {
                                        message: (0, a.jsx)(l.A, {
                                            id: "search.cleared-history",
                                        }),
                                    }),
                                    { containerId: n.uQT.INFO },
                                ),
                                e && e(),
                                h.push(n.Zyd.search.href);
                        } catch (e) {
                            u(
                                (0, a.jsx)(d.hT, {
                                    error: m({
                                        id: "error-messages.error-during-action",
                                    }),
                                }),
                                { containerId: n.uQT.ERROR },
                            );
                        }
                    })
                );
            };
        },
        62948: (e) => {
            e.exports = { root: "SearchBestResultsAlbumBlock_root__j7nJ4" };
        },
        64508: (e) => {
            e.exports = {
                root: "SearchBestResultsUpcomingBlock_root__baVsK",
                important: "SearchBestResultsUpcomingBlock_important__v_XW8",
                cover: "SearchBestResultsUpcomingBlock_cover__c45Xf",
                coverImage: "SearchBestResultsUpcomingBlock_coverImage___mLf5",
                lockIcon: "SearchBestResultsUpcomingBlock_lockIcon__yaBf_",
                likeButton: "SearchBestResultsUpcomingBlock_likeButton__Srh_v",
            };
        },
        67769: (e) => {
            e.exports = {
                root: "SearchEntitiesGrid_root__kk0fO",
                container: "SearchEntitiesGrid_container__zFcDu",
                correctedTextBlock:
                    "SearchEntitiesGrid_correctedTextBlock__4j4cD",
                items: "SearchEntitiesGrid_items__RrGDy",
                items_withChildren:
                    "SearchEntitiesGrid_items_withChildren__VW6y_",
                video: "SearchEntitiesGrid_video__2xHJc",
                footer: "SearchEntitiesGrid_footer__NK1iL",
                block: "SearchEntitiesGrid_block__jnP9P",
            };
        },
        74733: (e) => {
            e.exports = { root: "EntitiesListShimmer_root__Mq_tK" };
        },
        75572: (e) => {
            e.exports = { root: "SearchBestResultsNonMusicBlock_root__YagzT" };
        },
        76150: (e) => {
            e.exports = {
                root: "SearchBestResultsOverviewBlock_root__m1nKx",
                button: "SearchBestResultsOverviewBlock_button__F2FaR",
                important: "SearchBestResultsOverviewBlock_important__oLQCU",
            };
        },
        81126: (e) => {
            e.exports = {
                block: "SearchBestResultsCommon_block__v11At",
                cover: "SearchBestResultsCommon_cover__ZHlYo",
            };
        },
        83336: (e) => {
            e.exports = {
                root: "SearchBestResultsRecentReleaseBlock_root___1Eoa",
            };
        },
        85057: (e) => {
            e.exports = {
                root: "SearchTrackList_root__pSSfZ",
                container: "SearchTrackList_container__Bww_R",
                shimmer: "SearchTrackList_shimmer__L9t1x",
                correctedTextBlock: "SearchTrackList_correctedTextBlock__w5t0t",
                items: "SearchTrackList_items__VucVX",
                footer: "SearchTrackList_footer__M70p4",
            };
        },
        89300: (e) => {
            e.exports = {
                root: "SearchBestResultsTrackBlock_root__Qsh_f",
                cover: "SearchBestResultsTrackBlock_cover__aCixO",
            };
        },
        90581: (e) => {
            e.exports = {
                root: "SearchEmpty_root__Yz53B",
                container: "SearchEmpty_container__6WP_o",
                content: "SearchEmpty_content__OdVMa",
                correctedTextBlock: "SearchEmpty_correctedTextBlock__wR4Hh",
                icon: "SearchEmpty_icon__NYKMM",
                title: "SearchEmpty_title__C77x5",
                subtitle: "SearchEmpty_subtitle__2TlGa",
                footer: "SearchEmpty_footer__WP03G",
            };
        },
        96786: (e, t, s) => {
            "use strict";
            s.d(t, { SearchEntitiesGrid: () => y });
            var a = s(33008),
                r = s(85896),
                i = s(66268),
                o = s(30293),
                l = s(10462),
                c = s(81649),
                n = s(57747),
                d = s(52732),
                m = s(90317),
                u = s(64641),
                h = s(45242),
                _ = s(79169),
                S = s(18740),
                x = s(39535),
                p = s(15479),
                C = s(67769),
                j = s.n(C);
            let A = (e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: C,
                            filter: A,
                            sendSearchFeedback: y,
                            searchCorrectedText: P,
                            children: k,
                            isShimmerVisible: b,
                            isShimmerActive: v,
                            ...T
                        } = e,
                        [g, I] = (0, i.useState)(0),
                        E = (0, i.useMemo)(() => {
                            if (b)
                                return (0, a.jsx)(S.eI, {
                                    isActive: v,
                                    itemClassName: j().block,
                                    round: A === l.n.ARTIST,
                                    centered: A === l.n.ARTIST,
                                    count: 36,
                                    shimmerClassName:
                                        A === l.n.CLIP && j().video,
                                });
                            let e = ((e, t) =>
                                t === x.$.BOOK
                                    ? e.filter(
                                          (e) =>
                                              e.type === l.n.PODCAST &&
                                              e.data.type === p._.AUDIOBOOK,
                                      )
                                    : e.filter((e) => e.type === t))(C, A);
                            return (
                                I(e.length),
                                e.map((e, t) => {
                                    switch (e.type) {
                                        case l.n.ALBUM:
                                            return (0, a.jsx)(
                                                _.NYB.Provider,
                                                {
                                                    value: {
                                                        sendSearchFeedback: y,
                                                        id: e.data.id,
                                                        type: c.o.ALBUM,
                                                        blockPosition: 0,
                                                        position: t,
                                                    },
                                                    children: (0, a.jsx)(
                                                        d.aX,
                                                        { album: e.data },
                                                        e.data.id,
                                                    ),
                                                },
                                                e.data.id,
                                            );
                                        case l.n.PLAYLIST:
                                            return (0, a.jsx)(
                                                _.NYB.Provider,
                                                {
                                                    value: {
                                                        sendSearchFeedback: y,
                                                        id: e.data.id,
                                                        type: c.o.PLAYLIST,
                                                        blockPosition: 0,
                                                        position: t,
                                                    },
                                                    children: (0, a.jsx)(
                                                        h.B6,
                                                        { playlist: e.data },
                                                        e.data.key,
                                                    ),
                                                },
                                                e.data.id,
                                            );
                                        case l.n.ARTIST:
                                            return (0, a.jsx)(
                                                _.NYB.Provider,
                                                {
                                                    value: {
                                                        sendSearchFeedback: y,
                                                        id: e.data.id,
                                                        type: c.o.ARTIST,
                                                        blockPosition: 0,
                                                        position: t,
                                                    },
                                                    children: (0, a.jsx)(
                                                        m.ao,
                                                        { artist: e.data },
                                                        e.data.id,
                                                    ),
                                                },
                                                e.data.id,
                                            );
                                        case l.n.PODCAST:
                                            return (0, a.jsx)(
                                                _.NYB.Provider,
                                                {
                                                    value: {
                                                        sendSearchFeedback: y,
                                                        id: e.data.id,
                                                        type: c.o.PODCAST,
                                                        blockPosition: 0,
                                                        position: t,
                                                    },
                                                    children: (0, a.jsx)(
                                                        d.aX,
                                                        {
                                                            album: e.data,
                                                            withLikesCount: !0,
                                                            withAddition: !1,
                                                        },
                                                        e.data.id,
                                                    ),
                                                },
                                                e.data.id,
                                            );
                                        case l.n.CLIP:
                                            return (0, a.jsx)(
                                                _.NYB.Provider,
                                                {
                                                    value: {
                                                        sendSearchFeedback: y,
                                                        id: e.data.clipId,
                                                        type: c.o.CLIP,
                                                        blockPosition: 0,
                                                        position: t,
                                                    },
                                                    children: (0, a.jsx)(
                                                        u.FC,
                                                        { clip: e.data },
                                                        e.data.clipId,
                                                    ),
                                                },
                                                e.data.clipId,
                                            );
                                        default:
                                            return null;
                                    }
                                })
                            );
                        }, [b, C, A, v, y]);
                    return (0, a.jsxs)(n.N, {
                        className: (0, r.$)(j().root, s),
                        containerClassName: j().container,
                        ref: t,
                        ...(0, o.getDataAttrFromProps)(T),
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    P &&
                                        (0, a.jsx)("div", {
                                            className: j().correctedTextBlock,
                                            children: P,
                                        }),
                                    (0, a.jsx)("div", {
                                        className: (0, r.$)(j().items, {
                                            [j().video]: A === l.n.CLIP,
                                            [j().items_withChildren]:
                                                g > 0 && !!k,
                                        }),
                                        children: E,
                                    }),
                                    k,
                                ],
                            }),
                            (0, a.jsx)(S.A, {
                                children: (0, a.jsx)(S.wi, {
                                    className: j().footer,
                                }),
                            }),
                        ],
                    });
                },
                y = (0, i.forwardRef)((e, t) =>
                    (0, a.jsx)(A, { forwardRef: t, ...e }),
                );
        },
        98902: (e) => {
            e.exports = { root: "SearchBestResultsArtistBlock_root__ZLcy4" };
        },
    },
]);
