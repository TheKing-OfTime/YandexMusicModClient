(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2333],
  {
    76141: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchHistoryNotFoundPage: function () {
          return o;
        },
      });
      var a = s(75441),
        r = s(62569),
        i = s(35551);
      let o = (0, r.Pi)(() => (0, a.jsx)(i.T, {}));
    },
    12846: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchHistoryPage: function () {
          return j;
        },
      });
      var a = s(75441),
        r = s(34073),
        i = s(62569),
        o = s(98730),
        c = s(65067),
        n = s(9317),
        l = s(15937),
        d = s(35846),
        u = s(68208),
        m = s(69756),
        h = s(17294),
        _ = s(17392),
        S = s(36608),
        x = s(13534),
        p = s(2668),
        C = s.n(p);
      let j = (0, i.Pi)(() => {
        let e = (0, x.uK4)().get(x.U5t),
          {
            search: t,
            user: s,
            settings: { isMobile: i },
          } = (0, x.oR4)(),
          { setContentScrollRef: p } = (0, x.$Y6)(),
          { formatMessage: j } = (0, n.Z)(),
          A = (0, x.k67)(),
          P = (0, c.useRef)(!1),
          b = (0, c.useRef)(null),
          v = (0, S.vy)(() => {
            P.current = !0;
          }),
          B = t.historyPage.items.length;
        s.isAuthorized && (0, o.notFound)(),
          (0, c.useEffect)(() => {
            b.current && A.canBack && b.current.focus();
          }, [A.canBack]),
          (0, c.useEffect)(
            () => () => {
              (null == P ? void 0 : P.current)
                ? (t.resetHistoryItems(), (P.current = !1))
                : t.resetHistoryStateRequest();
            },
            [t],
          );
        let T = (0, c.useMemo)(
            () =>
              (0, r.Z)(() => {
                null == A || A.back();
              }, 200),
            [A],
          ),
          E = (0, c.useMemo)(
            () =>
              B
                ? (0, a.jsx)("div", {
                    className: C().items,
                    children: t.historyPage.items
                      .map((e, t) =>
                        (0, S.Fu)({ item: e, index: t, pageId: x.Rhz.SEARCH }),
                      )
                      .filter((e) => !!e),
                  })
                : (0, a.jsx)(_.Caption, {
                    className: C().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, a.jsx)(l.Z, { id: "search.history-empty" }),
                  }),
            [t.historyPage.items, B],
          );
        return (
          t.isHistoryReady &&
            s.account.data.uid &&
            (0, c.use)(t.getHistory({ userId: s.account.data.uid, config: e })),
          (0, a.jsx)("div", {
            className: C().root,
            ...(0, d.BA)(d.Br.search.SEARCH_HISTORY_PAGE),
            children: (0, a.jsxs)(h.t, {
              className: C().scrollContent,
              containerClassName: C().scrollContainer,
              ref: p,
              children: [
                (0, a.jsxs)("div", {
                  className: C().header,
                  children: [
                    (0, a.jsxs)("div", {
                      className: C().title,
                      children: [
                        A.canBack &&
                          (0, a.jsx)(u.Button, {
                            ref: b,
                            "aria-label": j({ id: "navigation.go-back" }),
                            radius: "round",
                            disabled: !A.canBack,
                            size: "s",
                            icon: (0, a.jsx)(m.Icon, {
                              size: "xxs",
                              variant: "arrowLeft",
                            }),
                            onClick: T,
                          }),
                        (0, a.jsx)(_.Heading, {
                          variant: "h2",
                          size: i ? "m" : "xl",
                          children: (0, a.jsx)(l.Z, { id: "search.history" }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(u.Button, {
                      "aria-label": j({ id: "search.clear-history" }),
                      radius: "xxxl",
                      variant: "outline",
                      disabled: !B,
                      size: i ? "s" : "default",
                      onClick: v,
                      children: (0, a.jsx)(_.Caption, {
                        variant: "span",
                        size: "m",
                        type: "text",
                        children: (0, a.jsx)(l.Z, {
                          id: "search.clear-history",
                        }),
                      }),
                    }),
                  ],
                }),
                !t.isHistoryLoading && E,
              ],
            }),
          })
        );
      });
    },
    30597: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchNotFoundPage: function () {
          return n;
        },
      });
      var a = s(75441),
        r = s(62569),
        i = s(65067),
        o = s(35551),
        c = s(13534);
      let n = (0, r.Pi)(() => {
        let { user: e, search: t } = (0, c.oR4)();
        return (
          (0, i.useEffect)(
            () => () => {
              e.isAuthorized && t.landing.reset();
            },
            [e.isAuthorized, t.landing],
          ),
          (0, a.jsx)(o.T, {})
        );
      });
    },
    22365: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchPage: function () {
          return f;
        },
      });
      var a = s(75441),
        r = s(32358),
        i = s(62569),
        o = s(98730),
        c = s(65067),
        n = s(9317),
        l = s(35846),
        d = s(85445),
        u = s(36746),
        m = s(93093),
        h = s(14218),
        _ = s(60012),
        S = s(24226),
        x = s(36608),
        p = s(14924),
        C = s(13534),
        j = s(97141);
      let A = (e) => {
        let { formatMessage: t } = (0, n.Z)(),
          s = (0, C.RVp)(),
          a = (0, p.yO)(p.$t.SEARCH_PAGE);
        return e
          ? [
              { id: d.a.TOP, displayName: t({ id: "search-filters.top" }) },
              ...e,
            ].filter((e) => {
              if (
                (e.id !== d.a.PODCAST || s) &&
                (e.id !== d.a.BOOK || s) &&
                (e.id !== d.a.CLIP || a)
              )
                return e;
            })
          : [{ id: d.a.TOP, displayName: t({ id: "search-filters.top" }) }];
      };
      var P = s(50072),
        b = s.n(P),
        v = s(26669),
        B = s(17294),
        T = s(30495),
        E = s(44182),
        y = s(30948),
        R = s(69947);
      let I = (0, i.Pi)((e) => {
          let {
              searchResults: t,
              setContentScrollRef: s,
              contentScrollRef: i,
              hasSearchText: o,
            } = e,
            {
              user: n,
              search: d,
              settings: { isMobile: u },
            } = (0, C.oR4)(),
            [m, h] = (0, v.z)();
          return o
            ? t
            : n.isAuthorized
              ? (0, a.jsx)(R.I7, {
                  scrollElement: i,
                  headerElement: m,
                  children: (0, a.jsxs)(B.t, {
                    className: b().scrollableContent,
                    containerClassName: b().main,
                    ref: s,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_CONTENT),
                    children: [
                      (0, a.jsx)(T.Od, {
                        containerClassName: b().skeletonContainer,
                        stickyHeaderClassName: (0, r.W)(
                          b().skeletonStickyHeader,
                          b().important,
                        ),
                        stickyHeaderTabIndex: u ? null : 0,
                        headerConcealerComponent: (0, a.jsx)("div", { ref: h }),
                        landing: d.landing,
                        errorComponent: (0, a.jsx)(y.D, {
                          className: b().error,
                          withBackwardControl: !1,
                        }),
                        headerVariant: u ? j.bm.COMPOSITE : j.bm.STICKY,
                      }),
                      (0, a.jsx)(j.$_, { className: b().footer }),
                    ],
                  }),
                })
              : (0, a.jsxs)(B.t, {
                  className: b().scrollableContent,
                  containerClassName: b().main,
                  ref: s,
                  children: [
                    (0, a.jsx)(c.Suspense, {
                      children: (0, a.jsx)(C.Ja5, {
                        blockId: C.BEo.SEARCH_HISTORY,
                        blockType: C.BEo.SEARCH_HISTORY,
                        blockPosX: 1,
                        blockPosY: 1,
                        blockIdForFrom: C.BEo.SEARCH_HISTORY,
                        objectsCount: d.historyPage.items.length,
                        children: (0, a.jsx)(x.y9, {}),
                      }),
                    }),
                    (0, a.jsx)(c.Suspense, {
                      children: (0, a.jsx)(E.JG, { className: b().mixes }),
                    }),
                    (0, a.jsx)(j.$_, { className: b().footer }),
                  ],
                });
        }),
        k = "text",
        f = (0, i.Pi)(() => {
          let e = (0, S.useTabsState)(0),
            [t, s] = (0, c.useState)(d.a.TOP),
            [i, P] = (0, c.useState)(!1),
            { formatMessage: v } = (0, n.Z)(),
            { search: B, experiments: T, location: E, user: y } = (0, C.oR4)(),
            { contentScrollRef: R, setContentScrollRef: f } = (0, C.$Y6)(),
            g = A(B.filters),
            N = (0, C.m5R)(),
            [L, O] = (0, c.useState)(() => {
              var e;
              return decodeURIComponent(
                null !== (e = new URLSearchParams(E.searchParams).get(k)) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            }),
            M = (0, c.useRef)(L),
            H = L.length > 0,
            V = (0, p.yO)(p.$t.SEARCH_PAGE);
          T.checkExperiment(C.peG.WebNextDisableSearch, "on") &&
            (0, o.redirect)("/"),
            (0, C.NOh)(B.landing.loadingState === C.Gui.RESOLVE),
            (0, c.useEffect)(
              () => () => {
                B.reset(), y.isAuthorized && B.landing.reset();
              },
              [y.isAuthorized, T, B],
            );
          let D = (0, m.W)((e, t) => {
              B.resetResults(),
                0 !== e.length &&
                  B.getSearchResults({
                    text: decodeURIComponent(e),
                    filter: t,
                    withClips: V,
                  });
            }),
            w = (0, m.W)(() => {
              P(!0);
            }),
            U = (0, m.W)((t) => {
              var a, r;
              if (!e.onTabChange || t === e.value) return;
              e.onTabChange(t);
              let i =
                null !==
                  (r = null === (a = g[t]) || void 0 === a ? void 0 : a.id) &&
                void 0 !== r
                  ? r
                  : d.a.TOP;
              Object.values(d.a).includes(i) && (s(i), D(M.current, i));
            }),
            W = (0, m.W)((t) => {
              let s = t.trim(),
                a = encodeURIComponent(s);
              O(a),
                (M.current = a),
                0 !== e.value && U(0),
                D(a, d.a.TOP),
                B.history.setShouldUpdateHistory(!0),
                B.resetSearchCorrectedText(),
                P(!1);
              let r = new URL(window.location.href);
              r.searchParams.set(k, s), N(String(r));
            }),
            G = (0, m.W)((e) => {
              let {
                id: t,
                type: s,
                blockPosition: a,
                position: r,
                feedbackType: i,
              } = e;
              B.sendFeedback({
                blockType: s,
                entityId: "".concat(s, ":").concat(t),
                timestamp: new Date().toISOString(),
                searchRequestId: B.searchRequestId,
                query: M.current,
                clickType: i,
                blockPosition: a,
                position: r,
                page: 0,
              });
            }),
            Y = (0, c.useMemo)(
              () =>
                B.searchCorrectedText
                  ? (0, a.jsx)(x.gK, {
                      searchCorrectedText: B.searchCorrectedText,
                      onCorrectText: w,
                    })
                  : null,
              [w, B.searchCorrectedText],
            ),
            z = (0, h.V)(() => {
              if (B.isEmpty)
                return (0, a.jsx)(x.hF, { searchCorrectedText: Y });
              let e = {
                className: b().searchResults,
                isShimmerVisible: B.isShimmerVisible,
                isShimmerActive: B.isLoading,
                results: B.results,
                bestResults: B.bestResults,
                sendSearchFeedback: G,
                searchCorrectedText: Y,
                ref: f,
              };
              switch (t) {
                case d.a.TOP:
                  return (0, a.jsx)(x.Id, {
                    ...e,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_TOP),
                  });
                case d.a.TRACK:
                  return (0, a.jsx)(x.XM, { ...e });
                case d.a.ALBUM:
                  return (0, a.jsx)(x.xz, {
                    ...e,
                    filter: d.a.ALBUM,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_ALBUM),
                  });
                case d.a.PLAYLIST:
                  return (0, a.jsx)(x.xz, {
                    ...e,
                    filter: d.a.PLAYLIST,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_PLAYLIST),
                  });
                case d.a.ARTIST:
                  return (0, a.jsx)(x.xz, {
                    ...e,
                    filter: d.a.ARTIST,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_ARTIST),
                  });
                case d.a.PODCAST:
                  return (0, a.jsx)(x.R_, { ...e });
                case d.a.BOOK:
                  return (0, a.jsx)(x.xz, {
                    ...e,
                    filter: d.a.BOOK,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_BOOK),
                  });
                case d.a.CLIP:
                  return (0, a.jsx)(x.xz, {
                    ...e,
                    filter: d.a.CLIP,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_CLIP),
                  });
                default:
                  return Y;
              }
            }),
            K = (0, c.useMemo)(() => {
              if (H)
                return (0, a.jsx)(j.J3, {
                  className: b().carousel,
                  carouselElement: (0, a.jsx)(j.no, {
                    className: b().tabs,
                    ...e,
                    onTabChange: U,
                    children: g.map((t, s) =>
                      (0, a.jsx)(
                        j.OK,
                        {
                          className: (0, r.W)(b().tab, {
                            [b().tab_selected]: s === e.value,
                          }),
                          title: t.displayName,
                          value: s,
                        },
                        s,
                      ),
                    ),
                  }),
                });
            }, [g, U, e, H]);
          return (
            B.isNeededToLoad &&
              H &&
              (0, c.use)(
                B.getSearchResults({
                  text: decodeURIComponent(L),
                  filter: t,
                  withClips: V,
                }),
              ),
            y.isAuthorized &&
              B.landing.isNeededToLoad &&
              !H &&
              (0, c.use)(
                B.landing.getSkeleton(
                  { id: u.j.SEARCH, showWizard: y.settings.showWizard },
                  { preloadBlocksCount: 2 },
                ),
              ),
            (0, a.jsx)(C.Lh6, {
              pageId: C.Rhz.SEARCH,
              children: (0, a.jsxs)("div", {
                className: (0, r.W)(b().root, { [b().root_showFilters]: H }),
                ...(0, l.BA)(l.Br.search.SEARCH_PAGE),
                children: [
                  (0, a.jsxs)("div", {
                    className: b().header,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_HEADER_CONTAINER),
                    children: [
                      (0, a.jsx)(_.M, {
                        className: b().input,
                        autoFocus: !0,
                        initialValue: M.current,
                        placeholder: v({ id: "search.input-placeholder" }),
                        onChange: W,
                        resetButtonAriaLabel: v({
                          id: "interface-actions.reset-search-input",
                        }),
                        correctedValue: i ? B.searchCorrectedText : null,
                        innerInputProps: (0, l.BA)(
                          l.Br.search.SEARCH_PAGE_SEARCH_INPUT,
                        ),
                        resetButtonProps: (0, l.BA)(
                          l.Br.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON,
                        ),
                        searchIconProps: (0, l.BA)(
                          l.Br.search.SEARCH_PAGE_SEARCH_INPUT_ICON,
                        ),
                      }),
                      K,
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: b().content,
                    children: (0, a.jsx)(C.e4N, {
                      children: (0, a.jsx)(I, {
                        hasSearchText: H,
                        contentScrollRef: R,
                        setContentScrollRef: f,
                        searchResults: z,
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
    44182: function (e, t, s) {
      "use strict";
      s.d(t, {
        JG: function () {
          return u.Mixes;
        },
        RB: function () {
          return m.MixesGrid;
        },
        ZP: function () {
          return d;
        },
      });
      var a = s(22874),
        r = s(62726),
        i = s(71011),
        o = s(45906),
        c = s(13534),
        n = s(40892);
      let l = (e) => ({
          items: (0, a.pj)(e.items.map((e) => (0, o.Fh)(e.data))),
        }),
        d = a.V5.compose(
          a.V5.model("Mixes", {
            items: a.V5.array(o.zn),
            errorStatusCode: a.V5.maybeNull(a.V5.number),
          }),
          n.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === c.Gui.PENDING;
            },
            get isNotFound() {
              let t = e.isResolved && 0 === e.items.length;
              return e.errorStatusCode === r.CN.NOT_FOUND || t;
            },
          }))
          .actions((e) => ({
            getMixes: (0, a.ls)(function* (t) {
              let { landingResource: s, modelActionsLogger: o } = (0, a.dU)(e);
              if (e.loadingState !== c.Gui.PENDING)
                try {
                  e.loadingState = c.Gui.PENDING;
                  let a = yield s.getBlock({
                    source: { uri: "/landing/block/mixes", fullList: t },
                    type: i.g.MIXES,
                  });
                  (e.items = l(a).items), (e.loadingState = c.Gui.RESOLVE);
                } catch (t) {
                  o.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== c.Gui.IDLE &&
                      (e.loadingState = c.Gui.REJECT);
                }
            }),
          }));
      var u = s(41328),
        m = s(36127);
    },
    41328: function (e, t, s) {
      "use strict";
      s.d(t, {
        Mixes: function () {
          return S;
        },
      });
      var a = s(75441),
        r = s(62569),
        i = s(65067),
        o = s(13534),
        c = s(9317),
        n = s(59100),
        l = s(45906),
        d = s(97141),
        u = s(78287),
        m = s.n(u);
      let h = (0, r.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: s, mixes: r } = e,
          { formatMessage: o } = (0, c.Z)(),
          u = (0, i.useMemo)(
            () =>
              t
                ? (0, d.Cl)({ isActive: s, withInfo: !1 })
                : r.map((e) =>
                    (0, a.jsx)(
                      l.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        coverSize: 80,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [s, t, r],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(d.ti, {
              className: m().carouselHeader,
              title: o({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, a.jsx)(n.Carousel, {
              className: m().carouselBlock,
              itemClassName: m().mixItem,
              children: u,
            }),
          ],
        });
      });
      var _ = s(36127);
      let S = (0, r.Pi)((e) => {
        let { className: t } = e,
          {
            settings: { isMobile: s },
            search: r,
          } = (0, o.oR4)();
        return (r.mixes.loadingState === o.Gui.IDLE &&
          (0, i.use)(r.mixes.getMixes(!1)),
        s)
          ? (0, a.jsx)(h, {
              isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected,
              isShimmerActive: r.mixes.isLoading,
              mixes: r.mixes.items,
            })
          : (0, a.jsx)(_.MixesGrid, {
              isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected,
              isShimmerActive: r.mixes.isLoading,
              mixes: r.mixes.items,
              className: t,
              withTitle: !0,
            });
      });
    },
    36127: function (e, t, s) {
      "use strict";
      s.d(t, {
        MixesGrid: function () {
          return _;
        },
      });
      var a = s(75441),
        r = s(32358),
        i = s(62569),
        o = s(65067),
        c = s(15937),
        n = s(35846),
        l = s(17392),
        d = s(45906),
        u = s(97141),
        m = s(88072),
        h = s.n(m);
      let _ = (0, i.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: s,
            withTitle: i,
            mixes: m,
            shimmerCount: _ = 5,
            className: S,
          } = e,
          x = (0, o.useMemo)(
            () =>
              t
                ? (0, a.jsx)(u.Wm, {
                    isActive: s,
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: _,
                  })
                : m.map((e) =>
                    (0, a.jsx)(
                      d.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [s, t, m, _],
          );
        return (0, a.jsxs)("div", {
          ...(0, n.BA)(n.QM.mixes.MIXES_GRID_CONTAINER),
          children: [
            i &&
              (0, a.jsx)(l.Heading, {
                className: h().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                ...(0, n.BA)(n.QM.mixes.MIXES_GRID_HEADER),
                children: (0, a.jsx)(c.Z, { id: "entity-names.mixes" }),
              }),
            (0, a.jsx)("div", {
              className: (0, r.W)(h().mixesGrid, S),
              children: x,
            }),
          ],
        });
      });
    },
    36608: function (e, t, s) {
      "use strict";
      s.d(t, {
        Mg: function () {
          return w;
        },
        gK: function () {
          return U.SearchCorrectedText;
        },
        hF: function () {
          return W.SearchEmpty;
        },
        xz: function () {
          return G.SearchEntitiesGrid;
        },
        yd: function () {
          return l;
        },
        y9: function () {
          return Y.SearchHistoryBlock;
        },
        Iv: function () {
          return E;
        },
        Id: function () {
          return z.SearchMixed;
        },
        R_: function () {
          return K.SearchPodcastList;
        },
        XM: function () {
          return Z.SearchTrackList;
        },
        Fu: function () {
          return o.F;
        },
        vy: function () {
          return c.useClearHistory;
        },
      }),
        s(75441);
      var a = s(72783);
      s(55051);
      var r = s(7797),
        i = s(1150),
        o = s(24279),
        c = s(39958),
        n = s(22874);
      let l = n.V5.model("SearchFilter", {
        id: n.V5.string,
        displayName: n.V5.string,
      });
      var d = s(17240),
        u = s(97671),
        m = s(61039),
        h = s(18691),
        _ = s(64353),
        S = s(60773),
        x = s(9152);
      let p = n.V5.model("SearchAlbum", {
          type: n.V5.literal(d.S.ALBUM),
          data: a.ug,
        }),
        C = n.V5.model("SearchPlaylist", {
          type: n.V5.literal(d.S.PLAYLIST),
          data: r.d2,
        }),
        j = n.V5.model("SearchArtist", {
          type: n.V5.literal(d.S.ARTIST),
          data: _.Go,
        }),
        A = n.V5.model("SearchUgcTrack", {
          type: n.V5.literal(d.S.UGC_TRACK),
          data: i.bc,
        }),
        P = n.V5.model("SearchTrack", {
          type: n.V5.literal(d.S.TRACK),
          data: i.le,
        }),
        b = n.V5.model("SearchVibe", {
          type: n.V5.literal(d.S.WAVE),
          data: x.KW,
        }),
        v = n.V5.model("SearchPodcast", {
          type: n.V5.literal(d.S.PODCAST),
          data: a.ug,
        }),
        B = n.V5.model("SearchPodcastEpisode", {
          type: n.V5.literal(d.S.PODCAST_EPISODE),
          data: i.le,
        }),
        T = n.V5.model("SearchClip", {
          type: n.V5.literal(d.S.CLIP),
          data: m.x$,
        }),
        E = n.V5.union(p, C, j, P, A, b, v, B, T),
        y = n.V5.model("SearchBestVibe", {
          type: n.V5.literal(u.o.WAVE),
          data: x.KW,
        }),
        R = n.V5.model("SearchBestPlaylist", {
          type: n.V5.literal(u.o.PLAYLIST),
          data: r.d2,
        }),
        I = n.V5.model("SearchBestArtist", {
          type: n.V5.literal(u.o.ARTIST),
          data: _.Go,
        }),
        k = n.V5.model("SearchBestPresave", {
          type: n.V5.literal(u.o.UPCOMING),
          data: a.W9,
        }),
        f = n.V5.model("SearchBestAlbum", {
          type: n.V5.literal(u.o.ALBUM),
          data: a.ug,
        }),
        g = n.V5.model("SearchBestRecentRelease", {
          type: n.V5.literal(u.o.RECENT_RELEASE),
          data: a.ug,
        }),
        N = n.V5.model("SearchBestConcert", {
          type: n.V5.literal(u.o.CONCERT),
          data: S.Z,
        }),
        L = n.V5.model("SearchBestTrack", {
          type: n.V5.literal(u.o.TRACK),
          data: i.le,
        }),
        O = n.V5.model("SearchBestPodcast", {
          type: n.V5.literal(u.o.PODCAST),
          data: a.ug,
        }),
        M = n.V5.model("SearchBestPodcastEpisode", {
          type: n.V5.literal(u.o.PODCAST_EPISODE),
          data: i.le,
        }),
        H = n.V5.model("SearchBestOverview", {
          type: n.V5.literal(u.o.OVERVIEW),
          data: h.xG,
        }),
        V = n.V5.model("SearchBestNonMusic", {
          type: n.V5.literal(u.o.NON_MUSIC),
          data: a.ug,
        }),
        D = n.V5.model("SearchBestClip", {
          type: n.V5.literal(u.o.CLIP),
          data: m.x$,
        }),
        w = n.V5.union(f, g, y, I, N, L, O, M, H, V, k, R, D);
      var U = s(84595),
        W = s(48625),
        G = s(48394),
        Y = s(72340),
        z = s(27622),
        K = s(42018),
        Z = s(99963);
    },
    24279: function (e, t, s) {
      "use strict";
      s.d(t, {
        F: function () {
          return _;
        },
      });
      var a = s(75441),
        r = s(22874),
        i = s(4875),
        o = s(17240),
        c = s(89467),
        n = s(72783),
        l = s(55051),
        d = s(7797),
        u = s(1150),
        m = s(9152),
        h = s(13534);
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
          case o.S.PODCAST_EPISODE:
            return (0, a.jsx)(
              h.nZ5,
              {
                objectType: i.OB.PodcastEpisode,
                objectId: t.data.id,
                objectPosX: p,
                objectPosY: C,
                objectsCount: j,
                children: (0, a.jsx)(u.F7, { pageId: _, track: t.data }),
              },
              t.data.id,
            );
          case o.S.UGC_TRACK:
            return (0, a.jsx)(u.F7, { pageId: _, track: t.data });
          case o.S.TRACK:
            return (0, a.jsx)(
              h.nZ5,
              {
                objectType: i.OB.Track,
                objectId: t.data.id,
                objectPosX: p,
                objectPosY: C,
                objectsCount: j,
                children: (0, a.jsx)(h.B1g.Provider, {
                  value: {
                    sendSearchFeedback: S,
                    id: t.data.entityId,
                    type: c.B.TRACK,
                    blockPosition: x,
                    position: s,
                  },
                  children: (0, a.jsx)(u.F7, { pageId: _, track: t.data }),
                }),
              },
              t.data.id,
            );
          case o.S.ARTIST:
            return (0, a.jsx)(
              h.nZ5,
              {
                objectType: i.OB.Artist,
                objectId: t.data.id,
                objectPosX: p,
                objectPosY: C,
                objectsCount: j,
                children: (0, a.jsx)(h.B1g.Provider, {
                  value: {
                    sendSearchFeedback: S,
                    id: t.data.id,
                    type: c.B.ARTIST,
                    blockPosition: x,
                    position: s,
                  },
                  children: (0, a.jsx)(l.GK, { pageId: _, artist: t.data }),
                }),
              },
              t.data.id,
            );
          case o.S.PLAYLIST:
            return (0, a.jsx)(
              h.nZ5,
              {
                objectType: i.OB.Playlist,
                objectId: t.data.id,
                objectPosX: p,
                objectPosY: C,
                objectsCount: j,
                children: (0, a.jsx)(h.B1g.Provider, {
                  value: {
                    sendSearchFeedback: S,
                    id: t.data.id,
                    type: c.B.PLAYLIST,
                    blockPosition: x,
                    position: s,
                  },
                  children: (0, a.jsx)(d.Tq, { pageId: _, playlist: t.data }),
                }),
              },
              t.data.id,
            );
          case o.S.PODCAST:
            return (0, a.jsx)(
              h.nZ5,
              {
                objectType: i.OB.Podcast,
                objectId: String(t.data.id),
                objectPosX: p,
                objectPosY: C,
                objectsCount: j,
                children: (0, a.jsx)(
                  h.B1g.Provider,
                  {
                    value: {
                      sendSearchFeedback: S,
                      id: t.data.id,
                      type: c.B.PODCAST,
                      blockPosition: x,
                      position: s,
                    },
                    children: (0, a.jsx)(n.QY, { pageId: _, album: t.data }),
                  },
                  t.data.id,
                ),
              },
              t.data.id,
            );
          case o.S.ALBUM:
            return (0, a.jsx)(
              h.nZ5,
              {
                objectType: i.OB.Album,
                objectId: String(t.data.id),
                objectPosX: p,
                objectPosY: C,
                objectsCount: j,
                children: (0, a.jsx)(
                  h.B1g.Provider,
                  {
                    value: {
                      sendSearchFeedback: S,
                      id: t.data.id,
                      type: c.B.ALBUM,
                      blockPosition: x,
                      position: s,
                    },
                    children: (0, a.jsx)(n.QY, { pageId: _, album: t.data }),
                  },
                  t.data.id,
                ),
              },
              t.data.id,
            );
          case o.S.WAVE: {
            let e = t.data;
            return (0, a.jsx)(
              h.nZ5,
              {
                objectType: i.OB.Wave,
                objectId: e.stationId,
                objectPosX: p,
                objectPosY: C,
                objectsCount: j,
                children: (0, a.jsx)(h.B1g.Provider, {
                  value: {
                    sendSearchFeedback: S,
                    id: e.stationId,
                    type: c.B.WAVE,
                    blockPosition: x,
                    position: s,
                  },
                  children: (0, a.jsx)(m.$I, {
                    vibe: e,
                    cover: (0, r.pj)({
                      uri: e.imageUrl,
                      color: e.backgroundColor,
                    }),
                    description: e.subtitle,
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
    39958: function (e, t, s) {
      "use strict";
      s.d(t, {
        useClearHistory: function () {
          return u;
        },
      });
      var a = s(75441),
        r = s(98730),
        i = s(65067),
        o = s(9317),
        c = s(15937),
        n = s(13534),
        l = s(97141);
      let d = "/search",
        u = (e) => {
          let { user: t, search: s } = (0, n.oR4)(),
            { formatMessage: u } = (0, o.Z)(),
            { notify: m } = (0, n.d$W)(),
            h = (0, r.useRouter)();
          return (
            (0, i.useEffect)(() => {
              s.isEmptyHistory && h.push(d);
            }, [s.isEmptyHistory, h]),
            (0, i.useCallback)(() => {
              try {
                t.account.data.uid &&
                  s.clearHistory({ userId: t.account.data.uid }),
                  m(
                    (0, a.jsx)(l.Yj, {
                      message: (0, a.jsx)(c.Z, {
                        id: "search.cleared-history",
                      }),
                    }),
                    { containerId: n.W$x.INFO },
                  ),
                  e && e(),
                  h.push(d);
              } catch (e) {
                m(
                  (0, a.jsx)(l.Q, {
                    error: u({ id: "error-messages.error-during-action" }),
                  }),
                  { containerId: n.W$x.ERROR },
                );
              }
            }, [t.account.data.uid, m, e, h, s, u])
          );
        };
    },
    4783: function (e, t, s) {
      "use strict";
      s.d(t, {
        K: function () {
          return P;
        },
      });
      var a = s(75441),
        r = s(32358),
        i = s(50710),
        o = s(65067),
        c = s(35846),
        n = s(59100),
        l = s(97141),
        d = s(9317),
        u = s(28676),
        m = s(47745),
        h = s.n(m);
      let _ = (e) => {
        let { className: t, ariaLabel: s, isShimmerActive: i } = e;
        return (0, a.jsxs)("div", {
          tabIndex: 0,
          "aria-label": s,
          "aria-live": "polite",
          "aria-busy": !0,
          className: (0, r.W)(h().root, t),
          children: [
            (0, a.jsxs)("div", {
              className: h().infoContainer,
              children: [
                (0, a.jsx)(u.Shimmer, {
                  className: h().cover,
                  radius: "s",
                  isActive: i,
                }),
                (0, a.jsxs)("div", {
                  className: h().textContainer,
                  children: [
                    (0, a.jsx)(u.Shimmer, {
                      className: h().title,
                      radius: "s",
                      isActive: i,
                    }),
                    (0, a.jsx)(u.Shimmer, {
                      className: h().description,
                      radius: "s",
                      isActive: i,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(u.Shimmer, {
              className: h().action,
              radius: "s",
              isActive: i,
            }),
          ],
        });
      };
      var S = s(36136),
        x = s.n(S);
      let p = (e) => {
        let { shimmersCount: t = 3, isShimmerActive: s = !0 } = e,
          { formatMessage: r } = (0, d.Z)();
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
      var C = s(59604),
        j = s.n(C);
      let A = (e) => {
          let {
              forwardRef: t,
              title: s,
              description: d,
              viewAllAction: u,
              coverUrl: m,
              children: h,
              className: _,
              maxColumns: S = 2,
              itemsPerColumn: x = 3,
              containerClassName: C,
              headerClassName: A,
              titleSize: P,
              showControls: b,
              isShimmerVisible: v,
              isShimmerActive: B,
            } = e,
            T = (0, o.useRef)(null),
            E = (0, o.useId)(),
            { items: y, columnLength: R } = (0, o.useMemo)(() => {
              if (v)
                return {
                  columnLength: S,
                  items: Array.from({ length: S }, (e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: j().column,
                        children: (0, a.jsx)(p, {
                          shimmersCount: 3,
                          isShimmerActive: B,
                        }),
                      },
                      t,
                    ),
                  ),
                };
              let e = (0, i.Z)(h, x).slice(
                0,
                (null == h ? void 0 : h.length) ? Math.ceil(h.length / x) : S,
              );
              return {
                items: e.map((e, t) =>
                  (0, a.jsx)("div", { className: j().column, children: e }, t),
                ),
                columnLength: e.length,
              };
            }, [h, B, v, x, S]);
          return (0, a.jsxs)("section", {
            ref: t,
            className: (0, r.W)(_, j().root),
            ...(0, c.BA)(c.QM.search.MIXED_ENTITIES_BLOCK),
            children: [
              (0, a.jsx)(l.ti, {
                className: A,
                labeledForId: E,
                title: s,
                description: d,
                coverUrl: m,
                viewAllActionLink: u,
                titleSize: P,
                controls:
                  b &&
                  (0, a.jsx)(l.J8, { className: j().controls, carouselRef: T }),
              }),
              (0, a.jsx)(n.Carousel, {
                className: C,
                ref: T,
                itemClassName: (0, r.W)(j().item, {
                  [j().item_withMultipleColumns]: R > 1,
                }),
                "aria-labelledby": E,
                role: "group",
                children: y,
              }),
            ],
          });
        },
        P = (0, o.forwardRef)((e, t) => (0, a.jsx)(A, { forwardRef: t, ...e }));
    },
    84595: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchCorrectedText: function () {
          return u;
        },
      });
      var a = s(75441),
        r = s(65067),
        i = s(15937),
        o = s(35846),
        c = s(68208),
        n = s(17392),
        l = s(75049),
        d = s.n(l);
      let u = (e) => {
        let { onCorrectText: t, searchCorrectedText: s } = e,
          l = (0, r.useMemo)(
            () => ({
              text: (0, a.jsx)(c.Button, {
                "aria-label": s,
                variant: "text",
                radius: "xs",
                onClick: t,
                ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT_BUTTON),
                children: (0, a.jsx)(n.Caption, {
                  className: d().link,
                  variant: "span",
                  size: "m",
                  type: "text",
                  ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT),
                  children: s,
                }),
              }),
            }),
            [s, t],
          );
        return (0, a.jsx)("div", {
          className: d().root,
          ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT),
          children: (0, a.jsx)(n.Caption, {
            className: d().text,
            variant: "span",
            size: "m",
            type: "text",
            ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT_TEXT),
            children: (0, a.jsx)(i.Z, {
              id: "search.corrected-text",
              values: l,
            }),
          }),
        });
      };
    },
    48625: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchEmpty: function () {
          return S;
        },
      });
      var a = s(75441),
        r = s(32358),
        i = s(65067),
        o = s(9317),
        c = s(35846),
        n = s(69756),
        l = s(17294),
        d = s(17392),
        u = s(97141),
        m = s(22210),
        h = s.n(m);
      let _ = (e) => {
          let { forwardRef: t, className: s, searchCorrectedText: i } = e,
            { formatMessage: m } = (0, o.Z)();
          return (0, a.jsxs)(l.t, {
            className: (0, r.W)(h().root, s),
            containerClassName: h().container,
            ref: t,
            children: [
              (0, a.jsxs)("div", {
                className: h().content,
                ...(0, c.BA)(c.QM.search.SEARCH_EMPTY_CONTAINER),
                children: [
                  i &&
                    (0, a.jsx)("div", {
                      className: h().correctedTextBlock,
                      children: i,
                    }),
                  (0, a.jsx)(n.Icon, {
                    className: h().icon,
                    variant: "search",
                    size: "xxl",
                    ...(0, c.BA)(c.QM.search.SEARCH_EMPTY_ICON),
                  }),
                  (0, a.jsx)(d.Heading, {
                    className: h().title,
                    size: "s",
                    weight: "bold",
                    variant: "h3",
                    ...(0, c.BA)(c.QM.search.SEARCH_EMPTY_HEADER),
                    children: m({ id: "search-results.not-found-title" }),
                  }),
                  (0, a.jsx)(d.Caption, {
                    className: h().subtitle,
                    variant: "div",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    ...(0, c.BA)(c.QM.search.SEARCH_EMPTY_DESCRIPTION),
                    children: m({ id: "search-results.not-found-description" }),
                  }),
                ],
              }),
              (0, a.jsx)(u.$_, { className: h().footer }),
            ],
          });
        },
        S = (0, i.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
    },
    48394: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchEntitiesGrid: function () {
          return P;
        },
      });
      var a = s(75441),
        r = s(32358),
        i = s(65067),
        o = s(17240),
        c = s(89467),
        n = s(17294),
        l = s(72783),
        d = s(55051),
        u = s(61039),
        m = s(7797),
        h = s(13534),
        _ = s(97141),
        S = s(85445),
        x = s(44679);
      let p = (e, t) =>
        t === S.a.BOOK
          ? e.filter(
              (e) => e.type === o.S.PODCAST && e.data.type === x.V.AUDIOBOOK,
            )
          : e.filter((e) => e.type === t);
      var C = s(65178),
        j = s.n(C);
      let A = (e) => {
          let {
              forwardRef: t,
              className: s,
              results: S,
              filter: x,
              sendSearchFeedback: C,
              searchCorrectedText: A,
              children: P,
              isShimmerVisible: b,
              isShimmerActive: v,
              ...B
            } = e,
            [T, E] = (0, i.useState)(0),
            y = (0, i.useMemo)(() => {
              if (b)
                return (0, a.jsx)(_.Wm, {
                  isActive: v,
                  itemClassName: j().block,
                  round: x === o.S.ARTIST,
                  centered: x === o.S.ARTIST,
                  count: 36,
                  shimmerClassName: x === o.S.CLIP && j().video,
                });
              let e = p(S, x);
              return (
                E(e.length),
                e.map((e, t) => {
                  switch (e.type) {
                    case o.S.ALBUM:
                      return (0, a.jsx)(
                        h.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: C,
                            id: e.data.id,
                            type: c.B.ALBUM,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, a.jsx)(
                            l.rf,
                            { album: e.data },
                            e.data.id,
                          ),
                        },
                        e.data.id,
                      );
                    case o.S.PLAYLIST:
                      return (0, a.jsx)(
                        h.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: C,
                            id: e.data.id,
                            type: c.B.PLAYLIST,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, a.jsx)(
                            m.ZL,
                            { playlist: e.data },
                            e.data.key,
                          ),
                        },
                        e.data.id,
                      );
                    case o.S.ARTIST:
                      return (0, a.jsx)(
                        h.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: C,
                            id: e.data.id,
                            type: c.B.ARTIST,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, a.jsx)(
                            d.IT,
                            { artist: e.data },
                            e.data.id,
                          ),
                        },
                        e.data.id,
                      );
                    case o.S.PODCAST:
                      return (0, a.jsx)(
                        h.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: C,
                            id: e.data.id,
                            type: c.B.PODCAST,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, a.jsx)(
                            l.rf,
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
                    case o.S.CLIP:
                      return (0, a.jsx)(
                        h.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: C,
                            id: e.data.clipId,
                            type: c.B.CLIP,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, a.jsx)(
                            u.xq,
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
            }, [b, S, x, v, C]);
          return (0, a.jsxs)(n.t, {
            className: (0, r.W)(j().root, s),
            containerClassName: j().container,
            ref: t,
            ...(0, h.tEg)(B),
            children: [
              (0, a.jsxs)("div", {
                children: [
                  A &&
                    (0, a.jsx)("div", {
                      className: j().correctedTextBlock,
                      children: A,
                    }),
                  (0, a.jsx)("div", {
                    className: (0, r.W)(j().items, {
                      [j().video]: x === o.S.CLIP,
                      [j().items_withChildren]: T > 0 && !!P,
                    }),
                    children: y,
                  }),
                  P,
                ],
              }),
              (0, a.jsx)(_.$_, { className: j().footer }),
            ],
          });
        },
        P = (0, i.forwardRef)((e, t) => (0, a.jsx)(A, { forwardRef: t, ...e }));
    },
    72340: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchHistoryBlock: function () {
          return B;
        },
      });
      var a = s(75441),
        r = s(62569),
        i = s(13534),
        o = s(65067),
        c = s(9317),
        n = s(24279),
        l = s(4783),
        d = s(5265),
        u = s.n(d);
      let m = "/search/history",
        h = (e) => e === m,
        _ = (0, r.Pi)(() => {
          let e = (0, i.uK4)().get(i.U5t),
            { search: t, user: s } = (0, i.oR4)(),
            { formatMessage: r } = (0, c.Z)(),
            d = t.historyPage.items;
          if (
            ((0, o.useEffect)(
              () => () => {
                var e;
                h(
                  null === (e = location) || void 0 === e ? void 0 : e.pathname,
                ) || t.resetHistoryStateRequest();
              },
              [t],
            ),
            t.isHistoryReady &&
              s.account.data.uid &&
              (0, o.use)(
                t.getHistory({ userId: s.account.data.uid, config: e }),
              ),
            0 === d.length)
          )
            return null;
          let _ = d
            .map((e, t) =>
              (0, n.F)({ item: e, index: t, pageId: i.Rhz.SEARCH }),
            )
            .filter((e) => (0, o.isValidElement)(e));
          return (0, a.jsx)("section", {
            className: u().root,
            children: (0, a.jsx)(l.K, {
              headerClassName: u().header,
              containerClassName: u().content,
              isShimmerVisible: t.isHistoryShimmerVisible,
              isShimmerActive: t.isHistoryLoading,
              title: r({ id: "search.history" }),
              viewAllAction: m,
              maxColumns: 2,
              itemsPerColumn: 4,
              showControls: !0,
              children: _,
            }),
          });
        });
      var S = s(15937),
        x = s(68208),
        p = s(17392),
        C = s(39958),
        j = s(77565),
        A = s.n(j);
      let P = "/search/history",
        b = (e) => e === P,
        v = (0, r.Pi)(() => {
          let e = (0, i.uK4)().get(i.U5t),
            { search: t, user: s } = (0, i.oR4)(),
            { formatMessage: r } = (0, c.Z)(),
            d = (0, C.useClearHistory)(t.resetHistoryItems),
            u = t.historyPage.items;
          if (
            ((0, o.useEffect)(
              () => () => {
                var e;
                b(
                  null === (e = location) || void 0 === e ? void 0 : e.pathname,
                ) || t.resetHistoryStateRequest();
              },
              [t],
            ),
            t.isHistoryReady &&
              s.account.data.uid &&
              (0, o.use)(
                t.getHistory({ userId: s.account.data.uid, config: e }),
              ),
            0 === u.length)
          )
            return null;
          let m = u
            .map((e, t) =>
              (0, n.F)({ item: e, index: t, pageId: i.Rhz.SEARCH }),
            )
            .filter((e) => (0, o.isValidElement)(e));
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)(l.K, {
                headerClassName: A().header,
                containerClassName: A().mixedEntitiesBlock,
                isShimmerVisible: t.isHistoryShimmerVisible,
                isShimmerActive: t.isHistoryLoading,
                title: r({ id: "search.history" }),
                viewAllAction: P,
                titleSize: "xs",
                children: m,
              }),
              (0, a.jsx)("div", {
                className: A().buttonContainer,
                children: (0, a.jsx)(x.Button, {
                  className: A().button,
                  "aria-label": r({ id: "search.clear-history" }),
                  disabled: !u.length,
                  size: "default",
                  radius: "xxxl",
                  onClick: d,
                  children: (0, a.jsx)(p.Caption, {
                    variant: "span",
                    size: "m",
                    type: "text",
                    children: (0, a.jsx)(S.Z, { id: "search.clear-history" }),
                  }),
                }),
              }),
            ],
          });
        }),
        B = (0, r.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, i.oR4)();
          return e ? (0, a.jsx)(v, {}) : (0, a.jsx)(_, {});
        });
    },
    27622: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchMixed: function () {
          return eL;
        },
      });
      var a = s(75441),
        r = s(32358),
        i = s(65067),
        o = s(9317),
        c = s(35846),
        n = s(17240),
        l = s(97671),
        d = s(17294),
        u = s(13534),
        m = s(97141),
        h = s(24279),
        _ = s(4783),
        S = s(62569),
        x = s(4875),
        p = s(89467),
        C = s(83621),
        j = s.n(C);
      let A = (e) => {
        let { isShimmerActive: t } = e;
        return (0, a.jsxs)("div", {
          className: j().root,
          children: [
            (0, a.jsxs)("div", {
              className: j().container,
              children: [
                (0, a.jsx)(m.hi, {
                  className: (0, r.W)(j().entity, j().important),
                  shimmerClassName: (0, r.W)(j().cover, j().important),
                  round: !0,
                  withInfo: !1,
                  isActive: t,
                }),
                (0, a.jsxs)("div", {
                  className: j().meta,
                  children: [
                    (0, a.jsx)(m.AH, {
                      textClassName: (0, r.W)(j().title, j().important),
                      isActive: t,
                    }),
                    (0, a.jsx)(m.AH, {
                      textClassName: (0, r.W)(j().subtitle, j().important),
                      isActive: t,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: j().container,
              children: [
                (0, a.jsx)(m.hi, {
                  className: (0, r.W)(j().entity, j().important),
                  shimmerClassName: (0, r.W)(j().cover, j().important),
                  withInfo: !1,
                  isActive: t,
                  radius: "xs",
                }),
                (0, a.jsxs)("div", {
                  className: j().meta,
                  children: [
                    (0, a.jsx)(m.AH, {
                      textClassName: (0, r.W)(j().title, j().important),
                      isActive: t,
                    }),
                    (0, a.jsx)(m.AH, {
                      textClassName: (0, r.W)(j().subtitle, j().important),
                      isActive: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var P = s(27392),
        b = s.n(P),
        v = s(72783),
        B = s(53408),
        T = s.n(B),
        E = s(39913),
        y = s.n(E);
      let R = (0, S.Pi)((e) => {
        let { album: t } = e;
        return (0, a.jsx)(v.QY, {
          album: t,
          className: (0, r.W)(T().block, y().root),
          coverClassName: T().cover,
          playButtonIconSize: "l",
          likeIconSize: "xs",
        });
      });
      var I = s(55051),
        k = s(10677),
        f = s.n(k);
      let g = (0, S.Pi)((e) => {
        let { artist: t } = e;
        return (0, a.jsx)(I.GK, {
          artist: t,
          className: (0, r.W)(T().block, f().root),
          coverClassName: T().cover,
          playButtonIconSize: "l",
          likeIconSize: "xs",
          pageId: u.Rhz.SEARCH,
        });
      });
      var N = s(77282),
        L = s(61039),
        O = s(14924),
        M = s(30770),
        H = s.n(M);
      let V = (0, S.Pi)((e) => {
        let { clip: t } = e,
          s = (0, O.yO)(O.$t.SEARCH_PAGE),
          r = (0, i.useRef)(String((0, N.Z)()));
        return s
          ? (0, a.jsx)(L.l8, {
              clip: t,
              viewUuid: r.current,
              className: T().block,
              coverClassName: H().cover,
              playButtonIconSize: "l",
              likeIconSize: "xs",
              shouldShowTimecode: !0,
            })
          : null;
      });
      var D = s(60773),
        w = s(13036),
        U = s.n(w);
      let W = (0, S.Pi)((e) => {
        let { concert: t } = e,
          s = (0, i.useRef)(String((0, N.Z)()));
        return (0, a.jsx)(D.kb, {
          artistId: null,
          viewUuid: s.current,
          concert: t,
          radius: "s",
          className: U().root,
          meta: (0, a.jsx)(D.pB, {}),
        });
      });
      var G = s(72555),
        Y = s.n(G);
      let z = (0, S.Pi)((e) => {
        let { album: t } = e;
        return (0, a.jsx)(v.QY, {
          album: t,
          className: (0, r.W)(T().block, Y().root),
          coverClassName: T().cover,
          playButtonIconSize: "l",
          likeIconSize: "xs",
          shouldShowReleaseYear: !0,
        });
      });
      var K = s(18691),
        Z = s(57122),
        X = s.n(Z);
      let F = (0, S.Pi)((e) => {
        let { data: t } = e;
        return (0, a.jsx)("div", {
          className: X().root,
          children: (0, a.jsx)(K.HN, {
            meta: t,
            buttonClassName: (0, r.W)(X().button, X().important),
          }),
        });
      });
      var Q = s(7797),
        q = s(69786),
        J = s.n(q);
      let $ = (0, S.Pi)((e) => {
        let { playlist: t } = e;
        return (0, a.jsx)(Q.Tq, {
          playlist: t,
          className: (0, r.W)(T().block, J().root),
          coverClassName: T().cover,
          playButtonIconSize: "l",
          likeIconSize: "xs",
        });
      });
      var ee = s(84638),
        et = s(1150),
        es = s(93334),
        ea = s.n(es);
      let er = (0, S.Pi)((e) => {
        let { track: t } = e,
          { from: s } = (0, u.MhG)(),
          {
            settings: { isMobile: o },
          } = (0, u.oR4)(),
          n = {
            contextData: {
              type: ee.A.Various,
              meta: { id: t.entityId },
              from: s,
            },
            queueParams: { index: 0, entityId: t.id },
            loadContextMeta: !0,
          },
          l = (0, u.qmq)({ playContextParams: n, entityId: t.entityId }),
          d = (0, i.useCallback)(
            (e) =>
              (0, a.jsx)(m.Df, {
                isAvailable: t.isAvailable,
                isDisliked: t.isDisliked,
                coverUri: t.coverUri,
                title: t.title,
                className: (0, r.W)(T().cover, ea().cover),
                ...e,
              }),
            [t.coverUri, t.isAvailable, t.isDisliked, t.title],
          );
        return (0, a.jsx)(et.fQ, {
          className: (0, r.W)(T().block, ea().root),
          track: t,
          meta: (0, a.jsx)(et.wT, {
            podcastMetaClassName: (0, r.W)(ea().podcastMeta, ea().important),
            titleContainerClassName: (0, r.W)(
              ea().titleContainer,
              ea().important,
            ),
            textClassName: (0, r.W)(ea().text, ea().important),
            progressClassName: (0, r.W)(ea().progress, ea().important),
            track: t,
            playContextParams: n,
            withListeningProgress: !0,
            explicitSize: "xxxs",
            titleLineClamp: 2,
            withAlbumTitleLink: !o,
          }),
          playButtonCellRender: d,
          playButtonIconSize: "l",
          controls: (0, a.jsx)(et.jt, {
            track: t,
            utmLink: n.contextData.utmLink,
            likeIconSize: "xs",
          }),
          ...l,
          ...(0, c.BA)(c.bG.track.TRACK_PODCAST),
        });
      });
      var ei = s(15937),
        eo = s(13975),
        ec = s.n(eo);
      let en = (0, S.Pi)((e) => {
        let { album: t } = e;
        return (0, a.jsx)(v.QY, {
          album: t,
          className: (0, r.W)(T().block, ec().root),
          coverClassName: T().cover,
          playButtonIconSize: "l",
          likeIconSize: "xs",
          description: (0, a.jsx)(ei.Z, {
            id: "entity-names.recently-release",
          }),
        });
      });
      var el = s(95143),
        ed = s.n(el);
      let eu = (0, S.Pi)((e) => {
        let { track: t } = e,
          { from: s } = (0, u.MhG)(),
          {
            settings: { isMobile: o },
          } = (0, u.oR4)(),
          n = {
            contextData: {
              type: ee.A.Various,
              meta: { id: t.entityId },
              from: s,
            },
            queueParams: { index: 0, entityId: t.id },
            loadContextMeta: !0,
          },
          l = (0, u.qmq)({ playContextParams: n, entityId: t.entityId }),
          d = (0, i.useCallback)(
            (e) =>
              (0, a.jsx)(m.Df, {
                isAvailable: t.isAvailable,
                isDisliked: t.isDisliked,
                coverUri: t.coverUri,
                title: t.title,
                className: (0, r.W)(T().cover, ed().cover),
                ...e,
              }),
            [t.coverUri, t.isAvailable, t.isDisliked, t.title],
          );
        return (0, a.jsx)(et.fQ, {
          className: (0, r.W)(T().block, ed().root),
          track: t,
          meta: (0, a.jsx)(et.ko, { withArtistLink: !o, track: t }),
          playButtonCellRender: d,
          playButtonIconSize: "l",
          controls: (0, a.jsx)(et.jt, {
            track: t,
            utmLink: n.contextData.utmLink,
            likeIconSize: "xs",
          }),
          ...l,
          ...(0, c.BA)(c.bG.track.TRACK_PODCAST),
        });
      });
      var em = s(14218),
        eh = s(69756),
        e_ = s(59091),
        eS = s(17392),
        ex = s(73447),
        ep = s(64353),
        eC = s(19772),
        ej = s.n(eC);
      let eA = (0, S.Pi)((e) => {
        let { upcomingAlbum: t } = e,
          { ref: s, intersectionPropertyId: c } = (0, u.VfV)(),
          { user: n } = (0, u.oR4)(),
          { formatMessage: l, formatDate: d } = (0, o.Z)(),
          h = (0, ex.IK)(t),
          _ = (0, em.V)(() => {
            let e = l(
                { id: "entity-names.upcoming-album-name" },
                { upcomingAlbumName: t.title },
              ),
              s = t.isPresave ? l({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(s);
          }),
          S = (0, i.useCallback)(
            (e, s) => {
              var r;
              return (
                null === (r = t.artists) || void 0 === r ? void 0 : r.length
              )
                ? (0, a.jsx)(ep.jO, {
                    linkClassName: e,
                    captionClassName: s,
                    artists: t.artists,
                    lineClamp: 1,
                  })
                : null;
            },
            [t.artists],
          );
        return (0, a.jsxs)(m.Md, {
          ref: s,
          "data-intersection-property-id": c,
          className: (0, r.W)(T().block, m.$C.root, ej().root, ej().important),
          "aria-label": _,
          children: [
            (0, a.jsxs)(e_.Paper, {
              className: ej().cover,
              radius: "xs",
              children: [
                (0, a.jsx)(m.BE, {
                  className: ej().coverImage,
                  src: t.coverUri,
                  size: 100,
                  alt: l(
                    { id: "entity-names.upcoming-album-name" },
                    { upcomingAlbumName: t.title },
                  ),
                  fit: "cover",
                  withAvatarReplace: !0,
                  fallbackIconSize: "m",
                  fallbackIconVariant: "lock",
                }),
                t.coverUri &&
                  (0, a.jsx)(eh.Icon, {
                    className: ej().lockIcon,
                    variant: "lock",
                    size: "xs",
                  }),
              ],
            }),
            (0, a.jsx)(m.u, {
              title: (0, a.jsx)(eS.Caption, {
                className: (0, r.W)(m.$C.text, m.$C.titleText),
                size: "l",
                variant: "div",
                type: "text",
                children: t.title,
              }),
              description: (0, a.jsx)(eS.Caption, {
                className: ej().releaseDate,
                variant: "div",
                type: "entity",
                size: "m",
                weight: "medium",
                lineClamp: 1,
                children: (0, a.jsx)(ei.Z, {
                  id: "entity-names.upcoming-album-date",
                  values: { releaseDate: d(t.releaseDate, (0, u.YTW)()) },
                }),
              }),
              artistsComponent: S,
              getDescriptionTexts: t.getDescriptionTexts,
              explicitMarkVariant: t.explicitDisclaimer,
            }),
            (0, a.jsx)(m.FM, {
              fallback: (0, a.jsx)(m.dJ, {
                size: "xs",
                iconSize: "xs",
                className: ej().likeButton,
                isLiked: t.isPresave,
                onClick: h,
                disabled: !n.isAuthorized,
              }),
            }),
          ],
        });
      });
      var eP = s(22874),
        eb = s(9152),
        ev = s(26203),
        eB = s.n(ev);
      let eT = (0, S.Pi)((e) => {
          var t;
          let { vibe: s } = e;
          return (0, a.jsx)(eb.$I, {
            className: (0, r.W)(eB().root, eB().important),
            coverClassName: (0, r.W)(eB().coverClassName, eB().important),
            playButtonIconSize: "l",
            vibe: s,
            cover: (0, eP.pj)({
              uri: s.backgroundImageUrl,
              color:
                null === (t = s.colors) || void 0 === t ? void 0 : t.average,
            }),
            description: s.header,
          });
        }),
        eE = (0, S.Pi)((e) => {
          let {
              results: t,
              isShimmerVisible: s,
              isShimmerActive: n,
              blockPosition: d,
              sendSearchFeedback: m,
            } = e,
            { formatMessage: h } = (0, o.Z)(),
            _ = (0, i.useCallback)(
              (e, s) => {
                switch (e.type) {
                  case l.o.ALBUM:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Album,
                        objectId: String(e.data.id),
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(u.B1g.Provider, {
                          value: {
                            sendSearchFeedback: m,
                            id: e.data.id,
                            type: p.B.ALBUM,
                            blockPosition: d,
                            position: s,
                          },
                          children: (0, a.jsx)(R, { album: e.data }),
                        }),
                      },
                      e.data.id,
                    );
                  case l.o.PLAYLIST:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Playlist,
                        objectId: e.data.id,
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(u.B1g.Provider, {
                          value: {
                            sendSearchFeedback: m,
                            id: e.data.id,
                            type: p.B.PLAYLIST,
                            blockPosition: d,
                            position: s,
                          },
                          children: (0, a.jsx)($, { playlist: e.data }),
                        }),
                      },
                      e.data.id,
                    );
                  case l.o.RECENT_RELEASE:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Album,
                        objectId: String(e.data.id),
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(u.B1g.Provider, {
                          value: {
                            sendSearchFeedback: m,
                            id: e.data.id,
                            type: p.B.ALBUM,
                            blockPosition: d,
                            position: s,
                          },
                          children: (0, a.jsx)(en, { album: e.data }),
                        }),
                      },
                      e.data.id,
                    );
                  case l.o.WAVE:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Wave,
                        objectId: e.data.stationId,
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(u.B1g.Provider, {
                          value: {
                            sendSearchFeedback: m,
                            id: e.data.stationId,
                            type: p.B.WAVE,
                            blockPosition: d,
                            position: s,
                          },
                          children: (0, a.jsx)(eT, { vibe: e.data }),
                        }),
                      },
                      e.data.stationId,
                    );
                  case l.o.ARTIST:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Artist,
                        objectId: e.data.id,
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(u.B1g.Provider, {
                          value: {
                            sendSearchFeedback: m,
                            id: e.data.id,
                            type: p.B.ARTIST,
                            blockPosition: d,
                            position: s,
                          },
                          children: (0, a.jsx)(g, { artist: e.data }),
                        }),
                      },
                      e.data.id,
                    );
                  case l.o.UPCOMING:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.UpcomingAlbum,
                        objectId: String(e.data.id),
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(eA, { upcomingAlbum: e.data }),
                      },
                      e.data.id,
                    );
                  case l.o.CONCERT:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Concert,
                        objectId: e.data.id,
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(W, { concert: e.data }),
                      },
                      e.data.id,
                    );
                  case l.o.PODCAST:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Podcast,
                        objectId: String(e.data.id),
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(
                          u.B1g.Provider,
                          {
                            value: {
                              sendSearchFeedback: m,
                              id: e.data.id,
                              type: p.B.ALBUM,
                              blockPosition: d,
                              position: s,
                            },
                            children: (0, a.jsx)(z, { album: e.data }),
                          },
                          e.data.id,
                        ),
                      },
                      e.data.id,
                    );
                  case l.o.NON_MUSIC:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Audiobook,
                        objectId: String(e.data.id),
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(z, { album: e.data }),
                      },
                      e.data.id,
                    );
                  case l.o.PODCAST_EPISODE:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.PodcastEpisode,
                        objectId: e.data.id,
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(er, { track: e.data }, e.data.id),
                      },
                      e.data.id,
                    );
                  case l.o.OVERVIEW:
                    return (0, a.jsx)(F, { data: e.data }, e.type);
                  case l.o.TRACK:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Track,
                        objectId: e.data.id,
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(u.B1g.Provider, {
                          value: {
                            sendSearchFeedback: m,
                            id: e.data.entityId,
                            type: p.B.TRACK,
                            blockPosition: d,
                            position: s,
                          },
                          children: (0, a.jsx)(eu, { track: e.data }),
                        }),
                      },
                      e.data.id,
                    );
                  case l.o.CLIP:
                    return (0, a.jsx)(
                      u.nZ5,
                      {
                        objectType: x.OB.Video,
                        objectId: String(e.data.clipId),
                        objectPosX: s + 1,
                        objectPosY: 1,
                        objectsCount: t.length,
                        children: (0, a.jsx)(u.B1g.Provider, {
                          value: {
                            sendSearchFeedback: m,
                            id: e.data.clipId,
                            type: p.B.CLIP,
                            blockPosition: d,
                            position: s,
                          },
                          children: (0, a.jsx)(V, { clip: e.data }),
                        }),
                      },
                      e.data.clipId,
                    );
                  default:
                    return null;
                }
              },
              [d, t.length, m],
            ),
            S = (0, i.useMemo)(
              () =>
                t
                  .map((e, t) => _(e, t))
                  .filter((e) => (0, i.isValidElement)(e)),
              [_, t, t.length],
            );
          return s
            ? (0, a.jsx)(A, { isShimmerActive: n })
            : S.length
              ? (0, a.jsx)(u.Ja5, {
                  blockId: u.BEo.SEARCH_BEST_RESULTS,
                  blockType: u.BEo.SEARCH_BEST_RESULTS,
                  blockPosX: 1,
                  blockPosY: 1,
                  objectsCount: S.length,
                  children: (0, a.jsx)("div", {
                    className: (0, r.W)(b().root, {
                      [b().root_withSingleResult]: 1 === S.length,
                    }),
                    role: "group",
                    "aria-label": h({ id: "search-results.best" }),
                    ...(0, c.BA)(c.QM.search.SEARCH_BEST_RESULTS),
                    children: S,
                  }),
                })
              : null;
        });
      var ey = s(43398);
      let eR = (e) => e.filter((e) => e.type !== n.S.PODCAST_EPISODE),
        eI = (0, S.Pi)((e) => {
          let {
              forwardRef: t,
              items: s = [],
              title: r,
              sendSearchFeedback: i,
              blockPosition: o = 0,
              containerClassName: c,
              headerClassName: l,
              className: d,
              itemClassName: h,
              isShimmerVisible: _,
              isShimmerActive: S,
              isClipBlock: x,
              ...C
            } = e,
            { search: j } = (0, u.oR4)(),
            A = (0, O.yO)(O.$t.SEARCH_PAGE),
            P = eR(s);
          return (j.isResolved && 0 === P.length) || (x && !A)
            ? null
            : (0, a.jsx)(m.HY, {
                isShimmerVisible: _,
                isShimmerActive: S,
                className: d,
                containerClassName: c,
                headerClassName: l,
                showHeaderShimmer: !0,
                title: r,
                ref: t,
                ...(0, u.tEg)(C),
                itemClassName: h,
                children: P.map((e, t) => {
                  switch (e.type) {
                    case n.S.ALBUM:
                      return (0, a.jsx)(
                        u.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: i,
                            id: e.data.id,
                            type: p.B.ALBUM,
                            blockPosition: o,
                            position: t,
                          },
                          children: (0, a.jsx)(v.rf, {
                            album: e.data,
                            contentLinesCount: 3,
                          }),
                        },
                        e.data.id,
                      );
                    case n.S.ARTIST:
                      return (0, a.jsx)(
                        u.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: i,
                            id: e.data.id,
                            type: p.B.ARTIST,
                            blockPosition: o,
                            position: t,
                          },
                          children: (0, a.jsx)(I.IT, {
                            artist: e.data,
                            contentLinesCount: 3,
                          }),
                        },
                        e.data.id,
                      );
                    case n.S.PLAYLIST:
                      return (0, a.jsx)(
                        u.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: i,
                            id: e.data.id,
                            type: p.B.PLAYLIST,
                            blockPosition: o,
                            position: t,
                          },
                          children: (0, a.jsx)(Q.ZL, {
                            playlist: e.data,
                            contentLinesCount: 3,
                          }),
                        },
                        e.data.key,
                      );
                    case n.S.UGC_TRACK:
                    case n.S.TRACK:
                      return (0, a.jsx)(
                        u.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: i,
                            id: e.data.albumId
                              ? "".concat(e.data.id, ":").concat(e.data.albumId)
                              : e.data.id,
                            type: p.B.TRACK,
                            blockPosition: o,
                            position: t,
                          },
                          children: (0, a.jsx)(et.G7, {
                            track: e.data,
                            overrideContextType: ey.Z.Search,
                          }),
                        },
                        e.data.id,
                      );
                    case n.S.WAVE:
                      return (0, a.jsx)(
                        u.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: i,
                            id: e.data.stationId,
                            type: p.B.WAVE,
                            blockPosition: o,
                            position: t,
                          },
                          children: (0, a.jsx)(eb.op, { vibe: e.data }),
                        },
                        e.data.stationId,
                      );
                    case n.S.CLIP:
                      return (0, a.jsx)(
                        u.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: i,
                            id: e.data.clipId,
                            type: p.B.WAVE,
                            blockPosition: o,
                            position: t,
                          },
                          children: (0, a.jsx)(L.xq, { clip: e.data }),
                        },
                        e.data.clipId,
                      );
                    case n.S.PODCAST:
                      return (0, a.jsx)(
                        u.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: i,
                            id: e.data.id,
                            type: p.B.PODCAST,
                            blockPosition: o,
                            position: t,
                          },
                          children: (0, a.jsx)(v.rf, {
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
        ek = (0, i.forwardRef)((e, t) =>
          (0, a.jsx)(eI, { forwardRef: t, ...e }),
        );
      var ef = s(10102),
        eg = s.n(ef);
      let eN = (e) => {
          let {
              forwardRef: t,
              className: s,
              results: S,
              bestResults: x,
              sendSearchFeedback: p,
              searchCorrectedText: C,
              isShimmerVisible: j,
              isShimmerActive: A,
              ...P
            } = e,
            { formatMessage: b } = (0, o.Z)(),
            { experiments: v } = (0, u.oR4)(),
            B = (0, i.useMemo)(() => {
              let e = {
                [n.S.ALL]: {
                  message: b({ id: "search-results.best" }),
                  type: n.S.ALL,
                  items: [],
                },
                [n.S.ARTIST]: {
                  message: b({ id: "search-results.artist" }),
                  type: n.S.ARTIST,
                  items: [],
                },
                [n.S.PODCAST]: {
                  message: b({ id: "search-results.podcasts-and-books" }),
                  type: n.S.PODCAST,
                  items: [],
                },
                [n.S.ALBUM]: {
                  message: b({ id: "search-results.album" }),
                  type: n.S.ALBUM,
                  items: [],
                },
                [n.S.PLAYLIST]: {
                  message: b({ id: "search-results.playlist" }),
                  type: n.S.PLAYLIST,
                  items: [],
                },
                [n.S.CLIP]: {
                  message: b({ id: "search-results.clip" }),
                  type: n.S.CLIP,
                  items: [],
                },
              };
              S.forEach((t) => {
                var s, a;
                null === (s = e[t.type]) || void 0 === s || s.items.push(t),
                  null === (a = e[n.S.ALL]) || void 0 === a || a.items.push(t);
              });
              let t = {
                [n.S.ARTIST]: c.QM.search.SEARCH_MIXED_ARTIST,
                [n.S.PODCAST]: c.QM.search.SEARCH_MIXED_PODCAST,
                [n.S.ALBUM]: c.QM.search.SEARCH_MIXED_ALBUM,
                [n.S.PLAYLIST]: c.QM.search.SEARCH_MIXED_PLAYLIST,
                [n.S.CLIP]: c.QM.search.SEARCH_MIXED_CLIP,
                [l.o.PODCAST]: c.QM.search.SEARCH_MIXED_BEST_PODCAST,
                [l.o.OVERVIEW]: c.QM.search.SEARCH_MIXED_BEST_OVERVIEW,
                [l.o.PODCAST_EPISODE]:
                  c.QM.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                [l.o.NON_MUSIC]: c.QM.search.SEARCH_MIXED_BEST_NON_MUSIC,
              };
              return Object.getOwnPropertyNames(e).map((s, r) => {
                let o = e[s],
                  l = o.type === n.S.CLIP;
                if (
                  o.type === n.S.ALL &&
                  v.checkExperiment(u.peG.WebNextSearchBestResults, "on")
                ) {
                  let e = o.items
                    .map((e, t) => {
                      let {
                        objectPosX: s,
                        objectPosY: a,
                        objectsCount: i,
                      } = (0, u.rc9)({
                        index: t,
                        count: o.items.length,
                        itemsCountPerColumn: 3,
                        showedItemsCountInBlock: 6,
                      });
                      return (0, h.F)({
                        item: e,
                        index: t,
                        sendSearchFeedback: p,
                        blockPosition: r,
                        objectPosX: s,
                        objectPosY: a,
                        objectsCount: i,
                      });
                    })
                    .filter((e) => (0, i.isValidElement)(e));
                  return (0, a.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        (0, a.jsx)(eE, {
                          results: x,
                          isShimmerVisible: j,
                          isShimmerActive: A,
                          blockPosition: r,
                          sendSearchFeedback: p,
                        }),
                        (0, a.jsx)(u.Ja5, {
                          blockId: u.BEo.SEARCH_OPEN_BEST_RESULTS,
                          blockType: u.BEo.SEARCH_OPEN_BEST_RESULTS,
                          blockPosX: 1,
                          blockPosY: 1,
                          objectsCount: e.length,
                          children: (0, a.jsx)(_.K, {
                            containerClassName: eg().blockMixed,
                            className: eg().block,
                            maxColumns: 2,
                            itemsPerColumn: 3,
                            showControls: !0,
                            "aria-label": b({
                              id: "search-results.other-results",
                            }),
                            isShimmerVisible: j,
                            isShimmerActive: A,
                            children: e,
                          }),
                        }),
                      ],
                    },
                    r,
                  );
                }
                let d = t[o.type],
                  m = d ? (0, c.BA)(d) : {};
                return (0, a.jsx)(
                  ek,
                  {
                    className: eg().block,
                    headerClassName: eg().blockHeader,
                    containerClassName: eg().blockCarousel,
                    blockPosition: r,
                    items: o.items,
                    title: o.message,
                    sendSearchFeedback: p,
                    isShimmerVisible: j,
                    isShimmerActive: A,
                    isClipBlock: l,
                    ...m,
                  },
                  r,
                );
              });
            }, [b, S, v, p, j, A, x]);
          return (0, a.jsxs)(d.t, {
            className: (0, r.W)(eg().root, s),
            containerClassName: eg().container,
            ref: t,
            ...(0, u.tEg)(P),
            children: [
              (0, a.jsxs)("div", {
                className: eg().content,
                children: [
                  C &&
                    (0, a.jsx)("div", {
                      className: eg().correctedTextBlock,
                      children: C,
                    }),
                  (0, a.jsx)(u.hwk, {
                    tabId: "",
                    tabPos: -1,
                    isTabSelectedByDefault: !1,
                    children: (0, a.jsx)("div", {
                      className: eg().items,
                      children: B,
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(m.$_, { className: eg().footer }),
            ],
          });
        },
        eL = (0, i.forwardRef)((e, t) =>
          (0, a.jsx)(eN, { forwardRef: t, ...e }),
        );
    },
    42018: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchPodcastList: function () {
          return B;
        },
      });
      var a = s(75441),
        r = s(65067),
        i = s(35846),
        o = s(85445),
        c = s(14218),
        n = s(17240);
      let l = (e) => {
        let t = [],
          s = [];
        return (
          e.forEach((e) => {
            e.type === n.S.PODCAST ? t.push(e) : s.push(e);
          }),
          { podcasts: t, podcastEpisodes: s }
        );
      };
      var d = s(48394),
        u = s(32358),
        m = s(62569),
        h = s(9317),
        _ = s(84638),
        S = s(89467),
        x = s(1150),
        p = s(13534),
        C = s(97141),
        j = s(49579),
        A = s.n(j);
      let P = (0, m.Pi)((e) => {
          let {
              results: t,
              sendSearchFeedback: s,
              isShimmerVisible: o,
              isShimmerActive: c,
            } = e,
            { from: n } = (0, p.MhG)(),
            { formatMessage: l } = (0, h.Z)(),
            d = (0, r.useMemo)(
              () =>
                t.map((e, t) => {
                  let r = e.data.albumId
                    ? "".concat(e.data.id, ":").concat(e.data.albumId)
                    : e.data.id;
                  return (0, a.jsx)(
                    p.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: s,
                        id: e.data.id,
                        type: S.B.PODCAST_EPISODE,
                        blockPosition: 0,
                        position: t,
                      },
                      children: (0, a.jsx)(x.FP, {
                        track: e.data,
                        playContextParams: {
                          contextData: {
                            type: _.A.Various,
                            meta: { id: r },
                            from: n,
                          },
                          queueParams: { index: 0, entityId: e.data.id },
                          loadContextMeta: !0,
                        },
                        withPodcastName: !0,
                      }),
                    },
                    r,
                  );
                }),
              [t, n, s],
            );
          return (0, a.jsx)(C.ad, {
            className: A().root,
            blockHeaderClassName: A().header,
            carouselClassName: A().content,
            carouselItemClassName: (0, u.W)(A().podcastColumn, A().important),
            isShimmerVisible: o,
            isShimmerActive: c,
            blockHeaderTitle: l({ id: "search-results.podcast-episodes" }),
            maxColumnsCount: C.IA.ONE,
            itemsCountPerColumn: 4,
            shimmer: (0, a.jsx)(C.DX, {
              variant: p.Lxt.PLAYLIST,
              isActive: !0,
            }),
            ...(0, i.BA)(i.r9.CAROUSEL_WITH_COLUMNS_BLOCK),
            children: d,
          });
        }),
        b = (0, r.forwardRef)((e, t) => (0, a.jsx)(P, { forwardRef: t, ...e })),
        v = (e) => {
          let {
              forwardRef: t,
              results: s,
              sendSearchFeedback: r,
              searchCorrectedText: n,
              className: u,
              isShimmerVisible: m,
              isShimmerActive: h,
            } = e,
            { podcasts: _, podcastEpisodes: S } = l(s),
            x = (0, c.V)(() => {
              if (S.length)
                return (0, a.jsx)(b, {
                  sendSearchFeedback: r,
                  results: S,
                  isShimmerVisible: m,
                  isShimmerActive: h,
                });
            });
          return (0, a.jsx)(d.SearchEntitiesGrid, {
            ref: t,
            className: u,
            results: _,
            filter: o.a.PODCAST,
            sendSearchFeedback: r,
            searchCorrectedText: n,
            isShimmerVisible: m,
            isShimmerActive: h,
            ...(0, i.BA)(i.Br.search.SEARCH_PAGE_RESULTS_PODCAST),
            children: x,
          });
        },
        B = (0, r.forwardRef)((e, t) => (0, a.jsx)(v, { forwardRef: t, ...e }));
    },
    99963: function (e, t, s) {
      "use strict";
      s.d(t, {
        SearchTrackList: function () {
          return b;
        },
      });
      var a = s(75441),
        r = s(32358),
        i = s(65067),
        o = s(35846),
        c = s(84638),
        n = s(43398),
        l = s(89467),
        d = s(93093),
        u = s(17294),
        m = s(1150),
        h = s(13534),
        _ = s(97141),
        S = s(17240);
      let x = (e) => e.type === S.S.TRACK,
        p = (e) => e.type === S.S.UGC_TRACK;
      var C = s(77992),
        j = s.n(C);
      let A = (e) => {
          let { isShimmerActive: t } = e;
          return Array.from({ length: 36 }, (e, s) =>
            (0, a.jsx)(
              _.DX,
              { isActive: t, className: j().shimmer, variant: h.Lxt.PLAYLIST },
              s,
            ),
          );
        },
        P = (e) => {
          let {
              forwardRef: t,
              className: s,
              results: S,
              sendSearchFeedback: C,
              searchCorrectedText: P,
              isShimmerVisible: b,
              isShimmerActive: v,
            } = e,
            { from: B } = (0, h.MhG)(),
            T = (0, d.W)((e) => ({
              contextData: {
                type: c.A.Various,
                meta: { id: e.entityId },
                from: B,
                overrideContextType: n.Z.Search,
              },
              queueParams: { index: 0, entityId: e.id },
              loadContextMeta: !0,
            })),
            E = (0, i.useMemo)(
              () =>
                b
                  ? (0, a.jsx)(A, { isShimmerActive: v })
                  : S.filter((e) => x(e) || p(e)).map((e, t) =>
                      (0, a.jsx)(
                        h.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: C,
                            id: e.data.entityId,
                            type: l.B.TRACK,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, a.jsx)(m.O2, {
                            track: e.data,
                            playContextParams: T(e.data),
                          }),
                        },
                        e.data.id,
                      ),
                    ),
              [T, v, b, S, C],
            );
          return (0, a.jsxs)(u.t, {
            className: (0, r.W)(j().root, s),
            containerClassName: j().container,
            ref: t,
            ...(0, o.BA)(o.Br.search.SEARCH_PAGE_RESULTS_TRACK),
            children: [
              (0, a.jsxs)("div", {
                className: j().content,
                children: [
                  P &&
                    (0, a.jsx)("div", {
                      className: j().correctedTextBlock,
                      children: P,
                    }),
                  (0, a.jsx)("div", { className: j().items, children: E }),
                ],
              }),
              (0, a.jsx)(_.$_, { className: j().footer }),
            ],
          });
        },
        b = (0, i.forwardRef)((e, t) => (0, a.jsx)(P, { forwardRef: t, ...e }));
    },
    2668: function (e) {
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
    50072: function (e) {
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
    78287: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    88072: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
    36136: function (e) {
      e.exports = { root: "EntitiesListShimmer_root__Mq_tK" };
    },
    59604: function (e) {
      e.exports = {
        root: "MixedEntitiesBlock_root__Zs8l2",
        controls: "MixedEntitiesBlock_controls__mOhq7",
        item: "MixedEntitiesBlock_item__uRvxc",
        item_withMultipleColumns:
          "MixedEntitiesBlock_item_withMultipleColumns__ziUqI",
        column: "MixedEntitiesBlock_column__sHpUC",
      };
    },
    27392: function (e) {
      e.exports = {
        root: "SearchBestResults_root__12Tlp",
        root_withSingleResult: "SearchBestResults_root_withSingleResult__qAMCB",
      };
    },
    39913: function (e) {
      e.exports = { root: "SearchBestResultsAlbumBlock_root__j7nJ4" };
    },
    10677: function (e) {
      e.exports = { root: "SearchBestResultsArtistBlock_root__ZLcy4" };
    },
    30770: function (e) {
      e.exports = { cover: "SearchBestResultsClipBlock_cover___5Wwj" };
    },
    53408: function (e) {
      e.exports = {
        block: "SearchBestResultsCommon_block__v11At",
        cover: "SearchBestResultsCommon_cover__ZHlYo",
      };
    },
    13036: function (e) {
      e.exports = { root: "SearchBestResultsConcertBlock_root__JDy_y" };
    },
    72555: function (e) {
      e.exports = { root: "SearchBestResultsNonMusicBlock_root__YagzT" };
    },
    57122: function (e) {
      e.exports = {
        root: "SearchBestResultsOverviewBlock_root__m1nKx",
        button: "SearchBestResultsOverviewBlock_button__F2FaR",
        important: "SearchBestResultsOverviewBlock_important__oLQCU",
      };
    },
    69786: function (e) {
      e.exports = { root: "SearchBestResultsPlaylistBlock_root__HLU50" };
    },
    93334: function (e) {
      e.exports = {
        root: "SearchBestResultsPodcastEpisodeBlock_root__YHMZ5",
        cover: "SearchBestResultsPodcastEpisodeBlock_cover__QuzER",
        podcastMeta: "SearchBestResultsPodcastEpisodeBlock_podcastMeta__u2dSw",
        important: "SearchBestResultsPodcastEpisodeBlock_important__qJ_Ej",
        titleContainer:
          "SearchBestResultsPodcastEpisodeBlock_titleContainer__MNogD",
        text: "SearchBestResultsPodcastEpisodeBlock_text__uJpwJ",
        progress: "SearchBestResultsPodcastEpisodeBlock_progress__ftBpc",
      };
    },
    13975: function (e) {
      e.exports = { root: "SearchBestResultsRecentReleaseBlock_root___1Eoa" };
    },
    95143: function (e) {
      e.exports = {
        root: "SearchBestResultsTrackBlock_root__Qsh_f",
        cover: "SearchBestResultsTrackBlock_cover__aCixO",
      };
    },
    19772: function (e) {
      e.exports = {
        root: "SearchBestResultsUpcomingBlock_root__baVsK",
        important: "SearchBestResultsUpcomingBlock_important__v_XW8",
        cover: "SearchBestResultsUpcomingBlock_cover__c45Xf",
        coverImage: "SearchBestResultsUpcomingBlock_coverImage___mLf5",
        lockIcon: "SearchBestResultsUpcomingBlock_lockIcon__yaBf_",
        likeButton: "SearchBestResultsUpcomingBlock_likeButton__Srh_v",
      };
    },
    26203: function (e) {
      e.exports = {
        root: "SearchBestResultsVibeBlock_root__KmJ3e",
        important: "SearchBestResultsVibeBlock_important__Zez1s",
        coverClassName: "SearchBestResultsVibeBlock_coverClassName__jv0_I",
      };
    },
    83621: function (e) {
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
    47745: function (e) {
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
    75049: function (e) {
      e.exports = {
        root: "SearchCorrectedText_root__ZM2f2",
        link: "SearchCorrectedText_link__eORMG",
        text: "SearchCorrectedText_text__HKgvL",
      };
    },
    22210: function (e) {
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
    65178: function (e) {
      e.exports = {
        root: "SearchEntitiesGrid_root__kk0fO",
        container: "SearchEntitiesGrid_container__zFcDu",
        correctedTextBlock: "SearchEntitiesGrid_correctedTextBlock__4j4cD",
        items: "SearchEntitiesGrid_items__RrGDy",
        items_withChildren: "SearchEntitiesGrid_items_withChildren__VW6y_",
        video: "SearchEntitiesGrid_video__2xHJc",
        footer: "SearchEntitiesGrid_footer__NK1iL",
        block: "SearchEntitiesGrid_block__jnP9P",
      };
    },
    5265: function (e) {
      e.exports = {
        root: "SearchHistoryBlockDesktop_root__jKICZ",
        controls: "SearchHistoryBlockDesktop_controls__5JPBt",
        header: "SearchHistoryBlockDesktop_header__zOALK",
        clearButton: "SearchHistoryBlockDesktop_clearButton__kN4Nk",
        content: "SearchHistoryBlockDesktop_content__doQsC",
      };
    },
    77565: function (e) {
      e.exports = {
        button: "SearchHistoryBlockMobile_button__Wh_Q6",
        header: "SearchHistoryBlockMobile_header__Lx4On",
        mixedEntitiesBlock:
          "SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_",
        buttonContainer: "SearchHistoryBlockMobile_buttonContainer__IppED",
      };
    },
    10102: function (e) {
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
    49579: function (e) {
      e.exports = {
        header: "SearchPodcastEpisodes_header__uqkmY",
        root: "SearchPodcastEpisodes_root__VjZhR",
        clearButton: "SearchPodcastEpisodes_clearButton__eeDVF",
        content: "SearchPodcastEpisodes_content__96WMv",
        podcastColumn: "SearchPodcastEpisodes_podcastColumn___K9Sr",
        important: "SearchPodcastEpisodes_important__c4dHK",
      };
    },
    77992: function (e) {
      e.exports = {
        root: "SearchTrackList_root__pSSfZ",
        container: "SearchTrackList_container__Bww_R",
        shimmer: "SearchTrackList_shimmer__L9t1x",
        correctedTextBlock: "SearchTrackList_correctedTextBlock__w5t0t",
        items: "SearchTrackList_items__VucVX",
        footer: "SearchTrackList_footer__M70p4",
      };
    },
    97671: function (e, t, s) {
      "use strict";
      var a, r;
      s.d(t, {
        o: function () {
          return a;
        },
      }),
        ((r = a || (a = {})).TRACK = "best_result_track"),
        (r.ARTIST = "best_result_artist"),
        (r.CONCERT = "best_result_concert"),
        (r.RECENT_RELEASE = "best_result_recent_release"),
        (r.ALBUM = "best_result_album"),
        (r.WAVE = "best_result_wave"),
        (r.ARTISTS_RELATED = "best_result_artists_related"),
        (r.OVERVIEW = "best_result_overview"),
        (r.PODCAST = "best_result_podcast"),
        (r.PODCAST_EPISODE = "best_result_podcast_episode"),
        (r.NON_MUSIC = "best_result_non_music"),
        (r.CLIP = "best_result_clip"),
        (r.UPCOMING = "best_result_upcoming"),
        (r.PLAYLIST = "best_result_playlist");
    },
    85445: function (e, t, s) {
      "use strict";
      var a, r;
      s.d(t, {
        a: function () {
          return a;
        },
      }),
        ((r = a || (a = {})).TOP = "top"),
        (r.TRACK = "track"),
        (r.CLIP = "clip"),
        (r.ALBUM = "album"),
        (r.ARTIST = "artist"),
        (r.PLAYLIST = "playlist"),
        (r.KIDS_MUSIC = "kids-music"),
        (r.KIDS_PLAYLIST = "kids-playlist"),
        (r.SPOKEN_PLAYLIST = "spoken-playlist"),
        (r.PODCAST = "podcast"),
        (r.BOOK = "book"),
        (r.KIDS_PODCAST = "kids-podcast"),
        (r.KIDS_BOOK = "kids-book");
    },
    17240: function (e, t, s) {
      "use strict";
      var a, r;
      s.d(t, {
        S: function () {
          return a;
        },
      }),
        ((r = a || (a = {})).ALL = "all"),
        (r.TRACK = "track"),
        (r.ALBUM = "album"),
        (r.ARTIST = "artist"),
        (r.PLAYLIST = "playlist"),
        (r.WAVE = "wave"),
        (r.GENRE = "genre"),
        (r.USER = "user"),
        (r.UGC_TRACK = "ugc_track"),
        (r.PODCAST = "podcast"),
        (r.PODCAST_EPISODE = "podcast_episode"),
        (r.VIDEO = "video"),
        (r.LYRICS = "lyrics"),
        (r.CLIP = "clip");
    },
  },
]);
