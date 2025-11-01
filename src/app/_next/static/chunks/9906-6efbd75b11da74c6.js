(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9906],
    {
        320: (e, t, n) => {
            "use strict";
            n.d(t, { GenrePlaylistsPage: () => f });
            var i = n(33008),
                r = n(85896),
                s = n(97531),
                o = n(17846),
                l = n(66268),
                a = n(73827),
                d = n(18064),
                m = n(77868),
                h = n(83888),
                c = n(64143),
                v = n(45242),
                u = n(79169),
                b = n(18740),
                P = n(83879),
                g = n(63021),
                p = n(25911),
                _ = n(88937),
                x = n.n(_);
            let f = (0, s.PA)((e) => {
                var t, n, s;
                let { metatagId: _, preloadedMeta: f } = e,
                    {
                        genre: { playlistsSubpage: N },
                        settings: { isMobile: S },
                    } = (0, u.Pjs)(),
                    { formatMessage: j } = (0, a.A)(),
                    { contentScrollRef: A, setContentScrollRef: k } = (0,
                    u.gKY)(),
                    y = (0, u.W6M)(),
                    T = (0, l.useCallback)(
                        (e) => {
                            _ &&
                                N.getData({
                                    metatagId: _,
                                    page: e,
                                    pageSize: P.c,
                                });
                        },
                        [N, _],
                    );
                (0, l.useEffect)(
                    () => () => {
                        N.reset();
                    },
                    [N],
                ),
                    N.isNotFound && (0, o.notFound)(),
                    (0, u.Jzs)(N.isResolved),
                    ((e) => {
                        (0, l.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, n, i;
                                return {
                                    id: "",
                                    title: {
                                        title: "",
                                        fullTitle: e.fullTitle || "",
                                    },
                                    playlists: e.items.map(p.Ji),
                                    pager: {
                                        page:
                                            (null == (t = e.pager)
                                                ? void 0
                                                : t.page) || 0,
                                        perPage:
                                            (null == (n = e.pager)
                                                ? void 0
                                                : n.perPage) || 0,
                                        total:
                                            (null == (i = e.pager)
                                                ? void 0
                                                : i.total) || 0,
                                    },
                                };
                            })(e);
                            (0, g.H)(t, {
                                fullUrl: null,
                                locale: null,
                                url: null,
                                tld: "",
                                host: "",
                            }).then((e) => {
                                (0, u.jxB)(e);
                            });
                        }, [e]);
                    })(N);
                let C = (0, l.useMemo)(
                    () => ({
                        Footer: () =>
                            (0, i.jsx)(b.A, {
                                children: (0, i.jsx)(b.wi, {
                                    className: x().footer,
                                }),
                            }),
                    }),
                    [],
                );
                return (_ &&
                    N.isNeededToLoad &&
                    (0, l.use)(
                        N.getData({
                            preloadedMeta: f,
                            metatagId: _,
                            page: 0,
                            pageSize: P.c,
                        }),
                    ),
                N.isSomethingWrong)
                    ? (0, i.jsx)(h.w, {})
                    : (0, i.jsx)(u.nVz, {
                          pageId: u._Q$.GENRE_PLAYLISTS,
                          children: (0, i.jsx)(c.hO, {
                              scrollElement: A,
                              outerTitle: N.fullTitle,
                              children: (0, i.jsxs)("div", {
                                  className: x().root,
                                  ...(0, d.Am)(d.Xk.genre.GENRE_PLAYLISTS_PAGE),
                                  children: [
                                      (0, i.jsx)(b.Y9, {
                                          variant: b.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: y.canBack,
                                          children: (0, i.jsx)(m.Heading, {
                                              variant: "h2",
                                              weight: "bold",
                                              size: "xl",
                                              lineClamp: 1,
                                              children: N.fullTitle,
                                          }),
                                      }),
                                      (0, i.jsx)(b.$$, {
                                          className: (0, r.$)(
                                              x().scrollContainer,
                                              x().important,
                                          ),
                                          customComponents: C,
                                          itemContentCallback: (e) => {
                                              var t;
                                              let n =
                                                      null == N ||
                                                      null == (t = N.items)
                                                          ? void 0
                                                          : t[e],
                                                  r = j(
                                                      {
                                                          id: "loading-messages.entity-is-loading",
                                                      },
                                                      {
                                                          entityName: j({
                                                              id: "entity-names.playlist",
                                                          }),
                                                      },
                                                  );
                                              return n
                                                  ? (0, i.jsx)(
                                                        v.B6,
                                                        {
                                                            playlist: n,
                                                            contentLinesCount: 3,
                                                        },
                                                        n.key,
                                                    )
                                                  : (0, i.jsx)(b.Vt, {
                                                        "aria-label": r,
                                                    });
                                          },
                                          totalCount:
                                              null !=
                                              (n =
                                                  null == N ||
                                                  null == (t = N.pager)
                                                      ? void 0
                                                      : t.total)
                                                  ? n
                                                  : 0,
                                          onGetDataByPage: T,
                                          pageSize: P.c,
                                          totalRequests:
                                              null != (s = N.requests) ? s : 0,
                                          listClassName: x().content,
                                          itemClassName: x().item,
                                          handleRef: k,
                                          context: {
                                              listAriaLabel: j(
                                                  {
                                                      id: "mixes.playlists-list",
                                                  },
                                                  {
                                                      genreName:
                                                          N.fullTitle || "",
                                                  },
                                              ),
                                          },
                                          isMobileLayout: S,
                                          useWindowScroll: S,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        7473: (e) => {
            e.exports = {
                root: "GenrePage_root___kL_v",
                content: "GenrePage_content__NRwAJ",
                shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
                carouselBlocks: "GenrePage_carouselBlocks__kR63B",
                carouselBlock: "GenrePage_carouselBlock__QCkpK",
                carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
            };
        },
        9906: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 52756)),
                Promise.resolve().then(n.bind(n, 41458)),
                Promise.resolve().then(n.bind(n, 80922)),
                Promise.resolve().then(n.bind(n, 54487)),
                Promise.resolve().then(n.bind(n, 91342)),
                Promise.resolve().then(n.bind(n, 21741)),
                Promise.resolve().then(n.bind(n, 77868)),
                Promise.resolve().then(n.bind(n, 80810)),
                Promise.resolve().then(n.bind(n, 57609)),
                Promise.resolve().then(n.bind(n, 82548)),
                Promise.resolve().then(n.bind(n, 92725)),
                Promise.resolve().then(n.bind(n, 91450)),
                Promise.resolve().then(n.bind(n, 60343)),
                Promise.resolve().then(n.bind(n, 2202)),
                Promise.resolve().then(n.bind(n, 89414)),
                Promise.resolve().then(n.bind(n, 59173)),
                Promise.resolve().then(n.bind(n, 75227)),
                Promise.resolve().then(n.bind(n, 55717)),
                Promise.resolve().then(n.bind(n, 86600)),
                Promise.resolve().then(n.bind(n, 73480)),
                Promise.resolve().then(n.bind(n, 55142)),
                Promise.resolve().then(n.bind(n, 37548)),
                Promise.resolve().then(n.bind(n, 70278)),
                Promise.resolve().then(n.bind(n, 40160)),
                Promise.resolve().then(n.bind(n, 70400)),
                Promise.resolve().then(n.bind(n, 93652)),
                Promise.resolve().then(n.bind(n, 47407)),
                Promise.resolve().then(n.bind(n, 31679)),
                Promise.resolve().then(n.bind(n, 46595)),
                Promise.resolve().then(n.bind(n, 33951)),
                Promise.resolve().then(n.bind(n, 80593)),
                Promise.resolve().then(n.bind(n, 13807)),
                Promise.resolve().then(n.bind(n, 72455)),
                Promise.resolve().then(n.bind(n, 64399)),
                Promise.resolve().then(n.bind(n, 81417)),
                Promise.resolve().then(n.bind(n, 22721)),
                Promise.resolve().then(n.bind(n, 49358)),
                Promise.resolve().then(n.bind(n, 80651)),
                Promise.resolve().then(n.bind(n, 70559)),
                Promise.resolve().then(n.bind(n, 23460)),
                Promise.resolve().then(n.bind(n, 26557)),
                Promise.resolve().then(n.bind(n, 37259)),
                Promise.resolve().then(n.bind(n, 30206)),
                Promise.resolve().then(n.bind(n, 78724)),
                Promise.resolve().then(n.bind(n, 97004)),
                Promise.resolve().then(n.bind(n, 33647)),
                Promise.resolve().then(n.bind(n, 68555)),
                Promise.resolve().then(n.bind(n, 86335)),
                Promise.resolve().then(n.bind(n, 38340)),
                Promise.resolve().then(n.bind(n, 57176)),
                Promise.resolve().then(n.bind(n, 144)),
                Promise.resolve().then(n.bind(n, 91919)),
                Promise.resolve().then(n.bind(n, 75658)),
                Promise.resolve().then(n.bind(n, 56395)),
                Promise.resolve().then(n.bind(n, 17999)),
                Promise.resolve().then(n.bind(n, 74543)),
                Promise.resolve().then(n.bind(n, 53628)),
                Promise.resolve().then(n.bind(n, 88351)),
                Promise.resolve().then(n.bind(n, 98224)),
                Promise.resolve().then(n.bind(n, 320)),
                Promise.resolve().then(n.bind(n, 8910)),
                Promise.resolve().then(n.bind(n, 39500)),
                Promise.resolve().then(n.bind(n, 31978)),
                Promise.resolve().then(n.bind(n, 12005)),
                Promise.resolve().then(n.bind(n, 12327)),
                Promise.resolve().then(n.bind(n, 71562)),
                Promise.resolve().then(n.bind(n, 39900)),
                Promise.resolve().then(n.bind(n, 62565)),
                Promise.resolve().then(n.bind(n, 83641)),
                Promise.resolve().then(n.bind(n, 88081)),
                Promise.resolve().then(n.bind(n, 60862)),
                Promise.resolve().then(n.bind(n, 2294)),
                Promise.resolve().then(n.bind(n, 65297)),
                Promise.resolve().then(n.bind(n, 23197)),
                Promise.resolve().then(n.bind(n, 86943)),
                Promise.resolve().then(n.bind(n, 27575)),
                Promise.resolve().then(n.bind(n, 45019)),
                Promise.resolve().then(n.bind(n, 76808)),
                Promise.resolve().then(n.bind(n, 84651)),
                Promise.resolve().then(n.bind(n, 18674)),
                Promise.resolve().then(n.bind(n, 65930)),
                Promise.resolve().then(n.bind(n, 45576)),
                Promise.resolve().then(n.bind(n, 75142)),
                Promise.resolve().then(n.bind(n, 46791)),
                Promise.resolve().then(n.bind(n, 22851)),
                Promise.resolve().then(n.bind(n, 11959)),
                Promise.resolve().then(n.bind(n, 72775)),
                Promise.resolve().then(n.bind(n, 53350)),
                Promise.resolve().then(n.bind(n, 41170)),
                Promise.resolve().then(n.bind(n, 63838)),
                Promise.resolve().then(n.bind(n, 58977)),
                Promise.resolve().then(n.bind(n, 76801)),
                Promise.resolve().then(n.bind(n, 59544)),
                Promise.resolve().then(n.bind(n, 72925)),
                Promise.resolve().then(n.bind(n, 11960)),
                Promise.resolve().then(n.bind(n, 51229)),
                Promise.resolve().then(n.bind(n, 38592)),
                Promise.resolve().then(n.bind(n, 9586)),
                Promise.resolve().then(n.bind(n, 69458)),
                Promise.resolve().then(n.bind(n, 29418)),
                Promise.resolve().then(n.bind(n, 98200)),
                Promise.resolve().then(n.bind(n, 12170)),
                Promise.resolve().then(n.bind(n, 60722)),
                Promise.resolve().then(n.bind(n, 83958)),
                Promise.resolve().then(n.bind(n, 67190)),
                Promise.resolve().then(n.bind(n, 56770)),
                Promise.resolve().then(n.bind(n, 26836)),
                Promise.resolve().then(n.bind(n, 94954)),
                Promise.resolve().then(n.bind(n, 66423)),
                Promise.resolve().then(n.bind(n, 31014)),
                Promise.resolve().then(n.bind(n, 46532)),
                Promise.resolve().then(n.bind(n, 40706)),
                Promise.resolve().then(n.bind(n, 6726)),
                Promise.resolve().then(n.bind(n, 56973)),
                Promise.resolve().then(n.bind(n, 92998)),
                Promise.resolve().then(n.bind(n, 93214)),
                Promise.resolve().then(n.bind(n, 76084)),
                Promise.resolve().then(n.bind(n, 80677)),
                Promise.resolve().then(n.bind(n, 33247)),
                Promise.resolve().then(n.bind(n, 34610)),
                Promise.resolve().then(n.bind(n, 45789)),
                Promise.resolve().then(n.bind(n, 89711)),
                Promise.resolve().then(n.bind(n, 25154)),
                Promise.resolve().then(n.bind(n, 28159)),
                Promise.resolve().then(n.bind(n, 13050)),
                Promise.resolve().then(n.bind(n, 79400)),
                Promise.resolve().then(n.bind(n, 30039)),
                Promise.resolve().then(n.bind(n, 71228)),
                Promise.resolve().then(n.bind(n, 2054)),
                Promise.resolve().then(n.bind(n, 16561)),
                Promise.resolve().then(n.bind(n, 78419)),
                Promise.resolve().then(n.bind(n, 25486)),
                Promise.resolve().then(n.bind(n, 35217)),
                Promise.resolve().then(n.bind(n, 26595)),
                Promise.resolve().then(n.bind(n, 78221)),
                Promise.resolve().then(n.bind(n, 32772)),
                Promise.resolve().then(n.bind(n, 70065)),
                Promise.resolve().then(n.bind(n, 60374)),
                Promise.resolve().then(n.bind(n, 4520)),
                Promise.resolve().then(n.bind(n, 28558)),
                Promise.resolve().then(n.bind(n, 21509)),
                Promise.resolve().then(n.bind(n, 52224)),
                Promise.resolve().then(n.bind(n, 25379)),
                Promise.resolve().then(n.bind(n, 97053)),
                Promise.resolve().then(n.bind(n, 70106)),
                Promise.resolve().then(n.bind(n, 83192)),
                Promise.resolve().then(n.bind(n, 49562)),
                Promise.resolve().then(n.bind(n, 95007)),
                Promise.resolve().then(n.bind(n, 86067)),
                Promise.resolve().then(n.bind(n, 67556)),
                Promise.resolve().then(n.bind(n, 5572)),
                Promise.resolve().then(n.bind(n, 85598)),
                Promise.resolve().then(n.bind(n, 34302)),
                Promise.resolve().then(n.bind(n, 77887)),
                Promise.resolve().then(n.bind(n, 22682)),
                Promise.resolve().then(n.bind(n, 48684)),
                Promise.resolve().then(n.bind(n, 35123)),
                Promise.resolve().then(n.bind(n, 87884)),
                Promise.resolve().then(n.bind(n, 95068)),
                Promise.resolve().then(n.bind(n, 73011)),
                Promise.resolve().then(n.bind(n, 75706)),
                Promise.resolve().then(n.bind(n, 59618)),
                Promise.resolve().then(n.bind(n, 3886)),
                Promise.resolve().then(n.bind(n, 43634)),
                Promise.resolve().then(n.bind(n, 34200)),
                Promise.resolve().then(n.bind(n, 1627)),
                Promise.resolve().then(n.bind(n, 41460)),
                Promise.resolve().then(n.bind(n, 25680)),
                Promise.resolve().then(n.bind(n, 54793)),
                Promise.resolve().then(n.bind(n, 35111)),
                Promise.resolve().then(n.bind(n, 6735)),
                Promise.resolve().then(n.bind(n, 98205)),
                Promise.resolve().then(n.bind(n, 65276)),
                Promise.resolve().then(n.bind(n, 41507)),
                Promise.resolve().then(n.bind(n, 24984)),
                Promise.resolve().then(n.bind(n, 70504)),
                Promise.resolve().then(n.bind(n, 23845)),
                Promise.resolve().then(n.bind(n, 8110)),
                Promise.resolve().then(n.bind(n, 81416)),
                Promise.resolve().then(n.bind(n, 6925)),
                Promise.resolve().then(n.bind(n, 75618)),
                Promise.resolve().then(n.bind(n, 83894)),
                Promise.resolve().then(n.bind(n, 42589)),
                Promise.resolve().then(n.bind(n, 56106)),
                Promise.resolve().then(n.bind(n, 92796)),
                Promise.resolve().then(n.bind(n, 80858)),
                Promise.resolve().then(n.bind(n, 32850)),
                Promise.resolve().then(n.bind(n, 90242)),
                Promise.resolve().then(n.bind(n, 4112)),
                Promise.resolve().then(n.bind(n, 73756)),
                Promise.resolve().then(n.bind(n, 25474)),
                Promise.resolve().then(n.bind(n, 85878)),
                Promise.resolve().then(n.bind(n, 44156)),
                Promise.resolve().then(n.bind(n, 75958)),
                Promise.resolve().then(n.bind(n, 12183)),
                Promise.resolve().then(n.bind(n, 89913)),
                Promise.resolve().then(n.bind(n, 57323)),
                Promise.resolve().then(n.bind(n, 97698)),
                Promise.resolve().then(n.bind(n, 67342)),
                Promise.resolve().then(n.bind(n, 64960)),
                Promise.resolve().then(n.bind(n, 51838)),
                Promise.resolve().then(n.bind(n, 81304)),
                Promise.resolve().then(n.bind(n, 38742)),
                Promise.resolve().then(n.bind(n, 12332)),
                Promise.resolve().then(n.bind(n, 47676)),
                Promise.resolve().then(n.bind(n, 12952)),
                Promise.resolve().then(n.bind(n, 76532)),
                Promise.resolve().then(n.bind(n, 28395)),
                Promise.resolve().then(n.bind(n, 69614)),
                Promise.resolve().then(n.bind(n, 55487)),
                Promise.resolve().then(n.bind(n, 65710)),
                Promise.resolve().then(n.bind(n, 91442)),
                Promise.resolve().then(n.bind(n, 69332)),
                Promise.resolve().then(n.bind(n, 60951)),
                Promise.resolve().then(n.bind(n, 95045)),
                Promise.resolve().then(n.bind(n, 4367)),
                Promise.resolve().then(n.bind(n, 15336)),
                Promise.resolve().then(n.bind(n, 2097)),
                Promise.resolve().then(n.bind(n, 55675)),
                Promise.resolve().then(n.bind(n, 86134)),
                Promise.resolve().then(n.bind(n, 49120)),
                Promise.resolve().then(n.bind(n, 26078)),
                Promise.resolve().then(n.bind(n, 3218)),
                Promise.resolve().then(n.bind(n, 82658)),
                Promise.resolve().then(n.bind(n, 2406)),
                Promise.resolve().then(n.bind(n, 49247)),
                Promise.resolve().then(n.bind(n, 8681)),
                Promise.resolve().then(n.bind(n, 69594)),
                Promise.resolve().then(n.bind(n, 86722)),
                Promise.resolve().then(n.bind(n, 77104)),
                Promise.resolve().then(n.bind(n, 73682)),
                Promise.resolve().then(n.bind(n, 62066)),
                Promise.resolve().then(n.bind(n, 61258)),
                Promise.resolve().then(n.bind(n, 41035)),
                Promise.resolve().then(n.bind(n, 28160)),
                Promise.resolve().then(n.bind(n, 31922)),
                Promise.resolve().then(n.bind(n, 51886)),
                Promise.resolve().then(n.bind(n, 43701)),
                Promise.resolve().then(n.bind(n, 45228));
        },
        10456: (e, t, n) => {
            "use strict";
            n.d(t, { g: () => o });
            var i = n(79169),
                r = n(95119),
                s = n(49124);
            async function o(e, t) {
                let { locale: n, fullUrl: o, url: l, tld: a, host: d } = t,
                    m = await (0, i.WGy)(n),
                    h = e.title.fullTitle,
                    c = m({ id: "metadata.genre-title" }, { genreTitle: h }),
                    v = (0, r.f)({ genreTitle: h, messageFormatter: m }),
                    u = s.env.ASSET_PREFIX || "",
                    b = "".concat(d).concat(u, "/meta/og-image.png");
                return {
                    title: c,
                    description: v,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(h),
                        ogDescription: v,
                        fullUrl: null != o ? o : "",
                        locale: n,
                        siteName: m({ id: "metadata.yandex-music" }),
                        ogImage: b,
                    }),
                    twitter: (0, i.HRN)({
                        cardType: i.WfF.APP,
                        title: c,
                        url: null != l ? l : "",
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, i.X5i)({
                        additional: {
                            tld: a,
                            url: null != l ? l : "",
                            fullUrl: null != o ? o : "",
                            host: d,
                        },
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    alternates: (0, i.SEs)("/genre/:metatagId/albums", t.tld, {
                        params: { metatagId: e.id },
                    }),
                };
            }
        },
        21682: (e, t, n) => {
            "use strict";
            n.d(t, { i: () => o });
            var i = n(79169),
                r = n(95119),
                s = n(49124);
            async function o(e, t) {
                let { locale: n, fullUrl: o, url: l, tld: a, host: d } = t,
                    m = await (0, i.WGy)(n),
                    h = e.title.fullTitle,
                    c = m({ id: "metadata.genre-title" }, { genreTitle: h }),
                    v = "artists" in e ? e.artists : void 0,
                    u = (0, r.f)({
                        genreTitle: h,
                        artists: v,
                        messageFormatter: m,
                    }),
                    b = s.env.ASSET_PREFIX || "",
                    P = "".concat(d).concat(b, "/meta/og-image.png");
                return {
                    title: c,
                    description: u,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(h),
                        ogDescription: u,
                        fullUrl: null != o ? o : "",
                        locale: n,
                        siteName: m({ id: "metadata.yandex-music" }),
                        ogImage: P,
                    }),
                    twitter: (0, i.HRN)({
                        cardType: i.WfF.APP,
                        title: c,
                        url: null != l ? l : "",
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, i.X5i)({
                        additional: {
                            tld: a,
                            url: null != l ? l : "",
                            fullUrl: null != o ? o : "",
                            host: d,
                        },
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    alternates: (0, i.SEs)("/genre/:metatagId/artists", t.tld, {
                        params: { metatagId: e.id },
                    }),
                };
            }
        },
        26271: (e) => {
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
        27160: (e) => {
            e.exports = {
                root: "VirtualGrid_root__nSEzJ",
                column: "VirtualGrid_column__P8hJp",
                row: "VirtualGrid_row__PL5V_",
            };
        },
        27618: (e, t, n) => {
            "use strict";
            n.d(t, { NotFound: () => b });
            var i = n(33008),
                r = n(85896),
                s = n(97531),
                o = n(96560),
                l = n(44189),
                a = n(78016),
                d = n(77868),
                m = n(79169),
                h = n(18740),
                c = n(66268),
                v = n(26271),
                u = n.n(v);
            let b = (0, s.PA)((e) => {
                let {
                        className: t,
                        title: n,
                        description: s,
                        iconVariant: v = "musicLogo",
                        iconClassName: b,
                        iconSize: P,
                    } = e,
                    { contentRef: g } = (0, m.gKY)(),
                    p = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: _ } = (0, m.D5F)(p);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, c.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)("div", {
                        className: (0, r.$)(
                            u().root,
                            { [u().root_desktop]: !g },
                            t,
                        ),
                        children: [
                            (0, i.jsx)(h.Lh, {
                                withBackwardFallback: "/",
                                className: u().navigation,
                                withForwardControl: !1,
                            }),
                            (0, i.jsxs)("div", {
                                className: u().content,
                                children: [
                                    (0, i.jsx)(a.Icon, {
                                        className: (0, r.$)(u().icon, b),
                                        variant: v,
                                        size: P,
                                    }),
                                    (0, i.jsx)(d.Heading, {
                                        className: (0, r.$)(
                                            u().title,
                                            u().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            n ||
                                            (0, i.jsx)(o.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, i.jsx)(d.Caption, {
                                        className: (0, r.$)(
                                            u().text,
                                            u().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            s ||
                                            (0, i.jsx)(o.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, i.jsx)(l.Button, {
                                        onClick: _,
                                        className: u().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, i.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, i.jsx)(o.A, {
                                                id: "navigation.page-main",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        30236: (e, t, n) => {
            "use strict";
            n.d(t, { SomethingWentWrong: () => P });
            var i = n(33008),
                r = n(85896),
                s = n(97531),
                o = n(66268),
                l = n(73827),
                a = n(96560),
                d = n(44189),
                m = n(78016),
                h = n(77868),
                c = n(79169),
                v = n(18740),
                u = n(32468),
                b = n.n(u);
            let P = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    u = s({ id: "error-messages.something-went-wrong" });
                (0, c.CgZ)(u);
                let { sendRefreshEvent: P } = (0, c.cYT)(),
                    g = (0, o.useCallback)(() => {
                        P(), (window.location.href = c.Zyd.main.href);
                    }, [P]),
                    { contentRef: p } = (0, c.gKY)();
                return (0, i.jsxs)("div", {
                    className: (0, r.$)(b().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(v.Lh, {
                                withBackwardFallback: "/",
                                className: (0, r.$)(b().navigation, {
                                    [b().navigation_desktop]: !p,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: (0, r.$)(b().content, {
                                [b().content_shrink]: !n,
                            }),
                            children: [
                                (0, i.jsx)(m.Icon, {
                                    className: b().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, i.jsx)(h.Heading, {
                                    className: (0, r.$)(
                                        b().title,
                                        b().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: u,
                                }),
                                (0, i.jsxs)(h.Caption, {
                                    className: (0, r.$)(
                                        b().text,
                                        b().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, i.jsx)(a.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(d.Button, {
                                    onClick: g,
                                    className: b().button,
                                    role: "link",
                                    color: "secondary",
                                    size: "l",
                                    radius: "xxxl",
                                    children: (0, i.jsxs)(h.Caption, {
                                        type: "controls",
                                        variant: "span",
                                        size: "m",
                                        children: [
                                            !1,
                                            (0, i.jsx)(a.A, {
                                                id: "page-error.restart-app-button",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        30357: (e) => {
            e.exports = {
                root: "GenreAlbumsPage_root__r_Sts",
                scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
                important: "GenreAlbumsPage_important__r3P2T",
                footer: "GenreAlbumsPage_footer__vmCiR",
                item: "GenreAlbumsPage_item__zRzB0",
                content: "GenreAlbumsPage_content__PRJUm",
            };
        },
        32468: (e) => {
            e.exports = {
                root: "SomethingWentWrong_root__d77VJ",
                content: "SomethingWentWrong_content__8_YkJ",
                content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
                navigation: "SomethingWentWrong_navigation__a8eMG",
                navigation_desktop:
                    "SomethingWentWrong_navigation_desktop__WGGBX",
                icon: "SomethingWentWrong_icon__f15_y",
                title: "SomethingWentWrong_title__Kn89B",
                important: "SomethingWentWrong_important__namIb",
                text: "SomethingWentWrong_text__KEfGc",
                button: "SomethingWentWrong_button__dmh7t",
            };
        },
        35233: (e, t, n) => {
            "use strict";
            n.d(t, { M: () => i.NotFound });
            var i = n(27618);
        },
        53628: (e, t, n) => {
            "use strict";
            n.d(t, { GenreArtistsPage: () => S });
            var i = n(33008),
                r = n(97531),
                s = n(17846),
                o = n(66268),
                l = n(73827),
                a = n(18064),
                d = n(42213),
                m = n(57747),
                h = n(77868),
                c = n(83888),
                v = n(90317),
                u = n(64143),
                b = n(95227),
                P = n(79169),
                g = n(18740),
                p = n(83879),
                _ = n(21682),
                x = n(70879),
                f = n(87636),
                N = n.n(f);
            let S = (0, r.PA)((e) => {
                let { metatagId: t, preloadedMeta: n } = e,
                    {
                        genre: { artistsSubpage: r },
                    } = (0, P.Pjs)(),
                    { formatMessage: f } = (0, l.A)(),
                    { contentScrollRef: S, setContentScrollRef: j } = (0,
                    P.gKY)(),
                    A = (0, P.W6M)(),
                    k = (0, d.c)(() => 315),
                    y = (0, d.c)(() => {
                        var e;
                        return !r.isShimmerVisible &&
                            (null == (e = r.pagesLoader.pager)
                                ? void 0
                                : e.total)
                            ? r.pagesLoader.pager.total
                            : 30;
                    }),
                    T = (0, o.useCallback)(
                        (e) => {
                            t &&
                                r.getData({
                                    metatagId: t,
                                    page: e,
                                    pageSize: p.c,
                                });
                        },
                        [r, t],
                    ),
                    C = (0, P.ws4)({ pageSize: p.c, callback: T });
                (0, P.XcE)(r.pagesLoader, T);
                let w = (0, d.c)((e) => {
                    let t = r.items[e],
                        n = f(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: f({ id: "entity-names.artist" }) },
                        );
                    return t
                        ? (0, i.jsx)(
                              v.ao,
                              { artist: t, contentLinesCount: 3 },
                              t.id,
                          )
                        : (0, i.jsx)(g.Vt, {
                              "aria-label": n,
                              round: !0,
                              centered: !0,
                          });
                });
                return ((0, o.useEffect)(
                    () => () => {
                        r.reset();
                    },
                    [r],
                ),
                r.isNotFound && (0, s.notFound)(),
                (0, P.Jzs)(r.isResolved),
                ((e) => {
                    (0, o.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => {
                            var t, n, i;
                            return {
                                id: "",
                                title: {
                                    title: "",
                                    fullTitle: e.fullTitle || "",
                                },
                                artists: e.items.map((e) => ({
                                    artist: (0, x.NE)(e),
                                    popularTracks: [],
                                })),
                                pager: {
                                    page:
                                        (null == (t = e.pagesLoader.pager)
                                            ? void 0
                                            : t.page) || 0,
                                    perPage:
                                        (null == (n = e.pagesLoader.pager)
                                            ? void 0
                                            : n.perPage) || 0,
                                    total:
                                        (null == (i = e.pagesLoader.pager)
                                            ? void 0
                                            : i.total) || 0,
                                },
                            };
                        })(e);
                        (0, _.i)(t, {
                            fullUrl: null,
                            locale: null,
                            url: null,
                            tld: "",
                            host: "",
                        }).then((e) => {
                            (0, P.jxB)(e);
                        });
                    }, [e]);
                })(r),
                t &&
                    r.isNeededToLoad &&
                    (0, o.use)(
                        r.getData({
                            preloadedMeta: n,
                            metatagId: t,
                            page: 0,
                            pageSize: p.c,
                        }),
                    ),
                r.isSomethingWrong)
                    ? (0, i.jsx)(c.w, {})
                    : (0, i.jsx)(P.nVz, {
                          pageId: P._Q$.GENRE_ARTISTS,
                          children: (0, i.jsx)(u.hO, {
                              scrollElement: S,
                              outerTitle: r.fullTitle,
                              children: (0, i.jsxs)("div", {
                                  className: N().root,
                                  ...(0, a.Am)(a.Xk.genre.GENRE_ARTISTS_PAGE),
                                  children: [
                                      (0, i.jsx)(g.Y9, {
                                          variant: g.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: A.canBack,
                                          children: (0, i.jsx)(h.Heading, {
                                              variant: "h2",
                                              weight: "bold",
                                              size: "xl",
                                              lineClamp: 1,
                                              children: r.fullTitle,
                                          }),
                                      }),
                                      (0, i.jsxs)(m.N, {
                                          ref: j,
                                          className: N().root,
                                          containerClassName: N().container,
                                          children: [
                                              (0, i.jsx)(b.Q$, {
                                                  maxColumnCount: 7,
                                                  count: y(),
                                                  rowGap: 16,
                                                  columnGap: 16,
                                                  getEstimateRowSize: k,
                                                  minColumnWidth: 170,
                                                  maxColumnWidth: 270,
                                                  onChangeRange: C,
                                                  renderItemByIndex: w,
                                              }),
                                              (0, i.jsx)(g.A, {
                                                  children: (0, i.jsx)(g.wi, {
                                                      className: N().footer,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        58024: (e, t, n) => {
            "use strict";
            n.d(t, { M: () => o });
            var i = n(79169),
                r = n(95119),
                s = n(49124);
            async function o(e, t) {
                let { locale: n, fullUrl: o, url: l, tld: a, host: d } = t,
                    m = await (0, i.WGy)(n),
                    h = e.title.fullTitle,
                    c = m({ id: "metadata.genre-title" }, { genreTitle: h }),
                    v = "artists" in e ? e.artists : void 0,
                    u = (0, r.f)({
                        genreTitle: h,
                        artists: v,
                        messageFormatter: m,
                    }),
                    b = s.env.ASSET_PREFIX || "",
                    P = "".concat(d).concat(b, "/meta/og-image.png");
                return {
                    title: c,
                    description: u,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(h),
                        ogDescription: u,
                        fullUrl: null != o ? o : "",
                        locale: n,
                        siteName: m({ id: "metadata.yandex-music" }),
                        ogImage: P,
                    }),
                    twitter: (0, i.HRN)({
                        cardType: i.WfF.APP,
                        title: c,
                        url: null != l ? l : "",
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, i.X5i)({
                        additional: {
                            tld: a,
                            url: null != l ? l : "",
                            fullUrl: null != o ? o : "",
                            host: d,
                        },
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    alternates: (0, i.SEs)("/genre/:metatagId", t.tld, {
                        params: { metatagId: e.id },
                    }),
                };
            }
        },
        63021: (e, t, n) => {
            "use strict";
            n.d(t, { H: () => o });
            var i = n(79169),
                r = n(95119),
                s = n(49124);
            async function o(e, t) {
                let { locale: n, fullUrl: o, url: l, tld: a, host: d } = t,
                    m = await (0, i.WGy)(n),
                    h = e.title.fullTitle,
                    c = m({ id: "metadata.genre-title" }, { genreTitle: h }),
                    v = (0, r.f)({ genreTitle: h, messageFormatter: m }),
                    u = s.env.ASSET_PREFIX || "",
                    b = "".concat(d).concat(u, "/meta/og-image.png");
                return {
                    title: c,
                    description: v,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(h),
                        ogDescription: v,
                        fullUrl: null != o ? o : "",
                        locale: n,
                        siteName: m({ id: "metadata.yandex-music" }),
                        ogImage: b,
                    }),
                    twitter: (0, i.HRN)({
                        cardType: i.WfF.APP,
                        title: c,
                        url: null != l ? l : "",
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, i.X5i)({
                        additional: {
                            tld: a,
                            url: null != l ? l : "",
                            fullUrl: null != o ? o : "",
                            host: d,
                        },
                        appName: m({ id: "metadata.yandex-music" }),
                    }),
                    alternates: (0, i.SEs)(
                        "/genre/:metatagId/playlists",
                        t.tld,
                        { params: { metatagId: e.id } },
                    ),
                };
            }
        },
        74543: (e, t, n) => {
            "use strict";
            n.d(t, { GenreAlbumsPage: () => x });
            var i = n(33008),
                r = n(85896),
                s = n(97531),
                o = n(17846),
                l = n(66268),
                a = n(73827),
                d = n(18064),
                m = n(77868),
                h = n(83888),
                c = n(52732),
                v = n(64143),
                u = n(79169),
                b = n(18740),
                P = n(83879),
                g = n(10456),
                p = n(30357),
                _ = n.n(p);
            let x = (0, s.PA)((e) => {
                var t, n, s;
                let { metatagId: p, preloadedMeta: x } = e,
                    {
                        genre: { albumsSubpage: f },
                        settings: { isMobile: N },
                    } = (0, u.Pjs)(),
                    { formatMessage: S } = (0, a.A)(),
                    { contentScrollRef: j, setContentScrollRef: A } = (0,
                    u.gKY)(),
                    k = (0, u.W6M)(),
                    y = (0, l.useCallback)(
                        (e) => {
                            p &&
                                f.getData({
                                    metatagId: p,
                                    page: e,
                                    pageSize: P.c,
                                });
                        },
                        [f, p],
                    );
                (0, l.useEffect)(
                    () => () => {
                        f.reset();
                    },
                    [f],
                ),
                    f.isNotFound && (0, o.notFound)(),
                    (0, u.Jzs)(f.isNeededToLoad),
                    ((e) => {
                        (0, l.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, n, i;
                                return {
                                    id: "",
                                    title: {
                                        title: "",
                                        fullTitle: e.fullTitle || "",
                                    },
                                    albums: e.items.map(c.fO),
                                    pager: {
                                        page:
                                            (null == (t = e.pager)
                                                ? void 0
                                                : t.page) || 0,
                                        perPage:
                                            (null == (n = e.pager)
                                                ? void 0
                                                : n.perPage) || 0,
                                        total:
                                            (null == (i = e.pager)
                                                ? void 0
                                                : i.total) || 0,
                                    },
                                };
                            })(e);
                            (0, g.g)(t, {
                                fullUrl: null,
                                locale: null,
                                url: null,
                                tld: "",
                                host: "",
                            }).then((e) => {
                                (0, u.jxB)(e);
                            });
                        }, [e]);
                    })(f);
                let T = (0, l.useMemo)(
                    () => ({
                        Footer: () =>
                            (0, i.jsx)(b.A, {
                                children: (0, i.jsx)(b.wi, {
                                    className: _().footer,
                                }),
                            }),
                    }),
                    [],
                );
                return (p &&
                    f.isNeededToLoad &&
                    (0, l.use)(
                        f.getData({
                            preloadedMeta: x,
                            metatagId: p,
                            page: 0,
                            pageSize: P.c,
                        }),
                    ),
                f.isSomethingWrong)
                    ? (0, i.jsx)(h.w, {})
                    : (0, i.jsx)(u.nVz, {
                          pageId: u._Q$.GENRE_ALBUMS,
                          children: (0, i.jsx)(v.hO, {
                              scrollElement: j,
                              outerTitle: f.fullTitle,
                              children: (0, i.jsxs)("div", {
                                  className: _().root,
                                  ...(0, d.Am)(d.Xk.genre.GENRE_ALBUMS_PAGE),
                                  children: [
                                      (0, i.jsx)(b.Y9, {
                                          variant: b.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: k.canBack,
                                          children: (0, i.jsx)(m.Heading, {
                                              variant: "h2",
                                              weight: "bold",
                                              size: "xl",
                                              lineClamp: 1,
                                              children: f.fullTitle,
                                          }),
                                      }),
                                      (0, i.jsx)(b.$$, {
                                          className: (0, r.$)(
                                              _().scrollContainer,
                                              _().important,
                                          ),
                                          customComponents: T,
                                          itemContentCallback: (e) => {
                                              let t = f.items[e],
                                                  n = S(
                                                      {
                                                          id: "loading-messages.entity-is-loading",
                                                      },
                                                      {
                                                          entityName: S({
                                                              id: "entity-names.album",
                                                          }),
                                                      },
                                                  );
                                              return t
                                                  ? (0, i.jsx)(
                                                        c.aX,
                                                        {
                                                            album: t,
                                                            contentLinesCount: 4,
                                                        },
                                                        t.id,
                                                    )
                                                  : (0, i.jsx)(b.Vt, {
                                                        "aria-label": n,
                                                        linesCount: 4,
                                                    });
                                          },
                                          totalCount:
                                              null !=
                                              (n =
                                                  null == f ||
                                                  null == (t = f.pager)
                                                      ? void 0
                                                      : t.total)
                                                  ? n
                                                  : 0,
                                          onGetDataByPage: y,
                                          pageSize: P.c,
                                          totalRequests:
                                              null != (s = f.requests) ? s : 0,
                                          listClassName: _().content,
                                          itemClassName: _().item,
                                          handleRef: A,
                                          context: {
                                              listAriaLabel: S(
                                                  { id: "mixes.albums-list" },
                                                  {
                                                      genreName:
                                                          f.fullTitle || "",
                                                  },
                                              ),
                                          },
                                          isMobileLayout: N,
                                          useWindowScroll: N,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        83080: (e) => {
            e.exports = { root: "VirtualGridRow_root___UfbI" };
        },
        83879: (e, t, n) => {
            "use strict";
            n.d(t, { c: () => i });
            let i = 30;
        },
        83888: (e, t, n) => {
            "use strict";
            n.d(t, { w: () => i.SomethingWentWrong });
            var i = n(30236);
        },
        87636: (e) => {
            e.exports = {
                root: "GenreArtistsPage_root__PgtIz",
                container: "GenreArtistsPage_container__NruTu",
                footer: "GenreArtistsPage_footer__fYaCO",
            };
        },
        88351: (e, t, n) => {
            "use strict";
            n.d(t, { GenreNotFoundPage: () => o });
            var i = n(33008),
                r = n(97531),
                s = n(35233);
            let o = (0, r.PA)(() => (0, i.jsx)(s.M, {}));
        },
        88937: (e) => {
            e.exports = {
                root: "GenrePlaylistsPage_root__WZwkl",
                scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
                important: "GenrePlaylistsPage_important__986BX",
                footer: "GenrePlaylistsPage_footer__aMDul",
                item: "GenrePlaylistsPage_item__tUsqJ",
                content: "GenrePlaylistsPage_content__2rKJY",
            };
        },
        95119: (e, t, n) => {
            "use strict";
            function i(e) {
                let { genreTitle: t, artists: n, messageFormatter: i } = e,
                    r = null;
                return (
                    Array.isArray(n) &&
                        (r = n
                            .slice(0, 3)
                            .map((e) =>
                                "artist" in e ? e.artist.name : e.name,
                            )
                            .join(", ")),
                    r
                        ? i(
                              { id: "metadata.genre-description" },
                              { genreTitle: t, artistsList: r },
                          )
                        : i(
                              { id: "metadata.genre-description-short" },
                              { genreTitle: t },
                          )
                );
            }
            n.d(t, { f: () => i });
        },
        95227: (e, t, n) => {
            "use strict";
            n.d(t, { Q$: () => f, Ux: () => p, LW: () => h, rA: () => m });
            var i = n(84798),
                r = n(42314),
                s = n(79169),
                o = n(23949),
                l = n(66268),
                a = n(42213);
            let d = { width: 400, height: 400 },
                m = (e) => {
                    let {
                            count: t,
                            getEstimateSize: n,
                            gap: i,
                            containerRef: r,
                        } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, s.Pjs)(),
                        { contentScrollRef: h } = (0, s.gKY)(),
                        c = (0, l.useRef)(new Map()),
                        v = (0, l.useRef)(void 0),
                        u = {
                            count: t,
                            gap: i,
                            estimateSize: (e) => {
                                let t = c.current.get(String(e));
                                return null != t ? t : n(e);
                            },
                            overscan: 2,
                            initialRect: d,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, n) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1
                                    ? i + window.scrollY
                                    : !e && n
                                      ? i + n.scrollTop
                                      : 0;
                            })(m, r, h),
                        },
                        b = (0, o.XW)(u),
                        P = (0, o.Te)({
                            ...u,
                            getScrollElement: () => h,
                            initialOffset: null == h ? void 0 : h.scrollTop,
                        }),
                        g = m ? b : P,
                        p = (0, a.c)(() => {
                            g.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let n =
                                            e.target.getAttribute("data-index");
                                        if (e.target && n) {
                                            let i = e.contentRect.height;
                                            i &&
                                                i !== c.current.get(n) &&
                                                (c.current.set(
                                                    n,
                                                    e.contentRect.height,
                                                ),
                                                (t = !0));
                                        }
                                    }),
                                        t && p();
                                }));
                        }, [p]),
                        { virtualizer: g, resizeObserver: v.current }
                    );
                },
                h = (e) => {
                    let {
                            count: t,
                            getEstimateRowSize: n,
                            rowGap: o,
                            columnGap: l,
                            minColumnWidth: a,
                            maxColumnWidth: d,
                            minColumnCount: h,
                            maxColumnCount: c,
                            containerRef: v,
                        } = e,
                        { rowCount: u, columnCount: b } = (0, s.E11)({
                            totalCount: t,
                            columnGap: null != l ? l : 0,
                            minColumnCount: h,
                            maxColumnWidth: d,
                            minColumnWidth: a,
                            maxColumnCount: c,
                            containerRef: v,
                        }),
                        { virtualizer: P, resizeObserver: g } = m({
                            count: u,
                            getEstimateSize: n,
                            gap: o,
                            containerRef: v,
                        }),
                        p = (0, i.A)(
                            Array.from({ length: t }, (e, t) => t),
                            b,
                        ),
                        _ = (0, r.L)(() => {
                            var e, t;
                            if (!P.range) return null;
                            let n =
                                    null == (e = p[P.range.startIndex])
                                        ? void 0
                                        : e.at(0),
                                i =
                                    null == (t = p[P.range.endIndex])
                                        ? void 0
                                        : t.at(-1);
                            return void 0 !== n && void 0 !== i
                                ? { startIndex: n, endIndex: i }
                                : null;
                        });
                    return {
                        virtualizer: P,
                        rowResizeObserver: g,
                        indices: p,
                        columnCount: b,
                        visibleRange: _,
                    };
                };
            var c = n(33008),
                v = n(97531),
                u = n(44612),
                b = n(85896),
                P = n(83080),
                g = n.n(P);
            let p = (0, v.PA)((e) => {
                let {
                        indices: t,
                        virtualItem: n,
                        renderItemByIndex: i,
                        columnClassName: r,
                        className: s,
                        resizeObserver: o,
                        scrollMargin: a,
                    } = e,
                    d = (0, l.useRef)(null),
                    m = t[n.index],
                    h = {
                        "--virtual-grid-row-vertical-offset": "".concat(
                            n.start - a,
                            "px",
                        ),
                    };
                return (
                    (0, l.useEffect)(() => {
                        let e = d.current;
                        if (e)
                            return (
                                null == o || o.observe(e),
                                () => {
                                    null == o || o.unobserve(e);
                                }
                            );
                    }, [o]),
                    (0, c.jsx)("div", {
                        "data-index": n.index,
                        ref: d,
                        style: h,
                        className: (0, b.$)(g().root, s),
                        children:
                            null == m
                                ? void 0
                                : m.map((e) =>
                                      (0, c.jsx)(
                                          "div",
                                          { className: r, children: i(e) },
                                          "".concat(n.key, "_").concat(e),
                                      ),
                                  ),
                    })
                );
            });
            var _ = n(27160),
                x = n.n(_);
            let f = (0, v.PA)((e) => {
                let {
                        count: t,
                        rowGap: n,
                        columnGap: i,
                        getEstimateRowSize: r,
                        minColumnCount: s = 2,
                        minColumnWidth: o,
                        maxColumnWidth: a,
                        maxColumnCount: d,
                        renderItemByIndex: m,
                        onChangeRange: v,
                    } = e,
                    [b, P] = (0, u.d)(),
                    {
                        virtualizer: g,
                        rowResizeObserver: _,
                        columnCount: f,
                        indices: N,
                    } = h({
                        count: t,
                        rowGap: n,
                        columnGap: i,
                        getEstimateRowSize: r,
                        minColumnCount: s,
                        minColumnWidth: o,
                        maxColumnWidth: a,
                        maxColumnCount: d,
                        containerRef: b,
                    });
                (0, l.useEffect)(() => {
                    !g.isScrolling && g.range && (null == v || v(g.range, f));
                }, [v, g.isScrolling, g.range, f]);
                let S = {
                    "--virtual-grid-height": "".concat(g.getTotalSize(), "px"),
                    "--virtual-grid-column-count": f,
                };
                return (0, c.jsx)("div", {
                    ref: P,
                    style: S,
                    className: x().root,
                    children: g
                        .getVirtualItems()
                        .map((e) =>
                            (0, c.jsx)(
                                p,
                                {
                                    className: x().row,
                                    columnClassName: x().column,
                                    virtualItem: e,
                                    resizeObserver: _,
                                    indices: N,
                                    renderItemByIndex: m,
                                    scrollMargin: g.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        98224: (e, t, n) => {
            "use strict";
            n.d(t, { GenrePage: () => S });
            var i = n(33008),
                r = n(85896),
                s = n(97531),
                o = n(17846),
                l = n(66268),
                a = n(73827),
                d = n(57747),
                m = n(77868),
                h = n(83888),
                c = n(52732),
                v = n(90317),
                u = n(64143),
                b = n(45242),
                P = n(79169),
                g = n(18740),
                p = n(58024),
                _ = n(70879),
                x = n(25911),
                f = n(7473),
                N = n.n(f);
            let S = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: n } = e,
                    { genre: s } = (0, P.Pjs)(),
                    { formatMessage: f } = (0, a.A)(),
                    { contentScrollRef: S, setContentScrollRef: j } = (0,
                    P.gKY)(),
                    A = (0, P.W6M)();
                return (s.isNotFound && (0, o.notFound)(),
                (0, l.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                ),
                (0, P.Jzs)(s.isResolved),
                ((e) => {
                    (0, l.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => ({
                            id: "",
                            title: { title: "", fullTitle: e.fullTitle || "" },
                            liked: !1,
                            tracks: [],
                            artists: e.artists.map(_.NE),
                            composers: [],
                            albums: e.albums.map(c.fO),
                            playlists: e.playlists.map(x.Ji),
                        }))(e);
                        (0, p.M)(t, {
                            fullUrl: null,
                            locale: null,
                            url: null,
                            tld: "",
                            host: "",
                        }).then((e) => {
                            (0, P.jxB)(e);
                        });
                    }, [e]);
                })(s),
                t &&
                    s.isNeededToLoad &&
                    (0, l.use)(s.getData({ id: t, preloadedMeta: n })),
                s.isRejected && !s.isNotFound)
                    ? (0, i.jsx)(h.w, {})
                    : (0, i.jsx)(P.nVz, {
                          pageId: P._Q$.GENRE,
                          children: (0, i.jsxs)(u.hO, {
                              scrollElement: S,
                              outerTitle: s.fullTitle,
                              children: [
                                  (0, i.jsx)(g.Y9, {
                                      variant: g.Vw.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: A.canBack,
                                      children: (0, i.jsx)(m.Heading, {
                                          variant: "h2",
                                          weight: "bold",
                                          size: "xl",
                                          lineClamp: 1,
                                          children: s.fullTitle,
                                      }),
                                  }),
                                  (0, i.jsx)(d.N, {
                                      className: N().root,
                                      containerClassName: N().content,
                                      ref: j,
                                      children: (0, i.jsxs)("div", {
                                          className: N().carouselBlocks,
                                          children: [
                                              s.hasPlaylists &&
                                                  (0, i.jsx)(P.FoH, {
                                                      blockId:
                                                          P.hf$
                                                              .PLAYLISTS_CAROUSEL,
                                                      blockType:
                                                          P.hf$
                                                              .PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom:
                                                          P.hf$
                                                              .PLAYLISTS_CAROUSEL,
                                                      objectsCount:
                                                          s.albums.length,
                                                      children: (0, i.jsx)(
                                                          b.EC,
                                                          {
                                                              isShimmerVisible:
                                                                  s.isLoading,
                                                              isShimmerActive:
                                                                  !0,
                                                              headerClassName:
                                                                  (0, r.$)(
                                                                      N()
                                                                          .carouselBlockHeader,
                                                                      N()
                                                                          .carouselBlock,
                                                                  ),
                                                              containerClassName:
                                                                  N()
                                                                      .carouselBlock,
                                                              playlists:
                                                                  s.playlists,
                                                              title: f({
                                                                  id: "entity-names.popular-playlists",
                                                              }),
                                                              viewAllActionLink:
                                                                  "/genre/".concat(
                                                                      s.id,
                                                                      "/playlists",
                                                                  ),
                                                          },
                                                      ),
                                                  }),
                                              s.hasAlbums &&
                                                  (0, i.jsx)(P.FoH, {
                                                      blockId:
                                                          P.hf$.ALBUMS_CAROUSEL,
                                                      blockType:
                                                          P.hf$.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom:
                                                          P.hf$.ALBUMS_CAROUSEL,
                                                      objectsCount:
                                                          s.albums.length,
                                                      children: (0, i.jsx)(
                                                          c.pZ,
                                                          {
                                                              isShimmerVisible:
                                                                  s.isLoading,
                                                              isShimmerActive:
                                                                  !0,
                                                              headerClassName:
                                                                  (0, r.$)(
                                                                      N()
                                                                          .carouselBlockHeader,
                                                                      N()
                                                                          .carouselBlock,
                                                                  ),
                                                              containerClassName:
                                                                  N()
                                                                      .carouselBlock,
                                                              albums: s.albums,
                                                              title: f({
                                                                  id: "entity-names.new-albums",
                                                              }),
                                                              viewAllActionLink:
                                                                  "/genre/".concat(
                                                                      s.id,
                                                                      "/albums",
                                                                  ),
                                                          },
                                                      ),
                                                  }),
                                              s.hasArtists &&
                                                  (0, i.jsx)(P.FoH, {
                                                      blockId:
                                                          P.hf$
                                                              .ARTISTS_CAROUSEL,
                                                      blockType:
                                                          P.hf$
                                                              .ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom:
                                                          P.hf$
                                                              .ARTISTS_CAROUSEL,
                                                      objectsCount:
                                                          s.albums.length,
                                                      children: (0, i.jsx)(
                                                          g.OY,
                                                          {
                                                              isShimmerVisible:
                                                                  s.isLoading,
                                                              isShimmerActive:
                                                                  !0,
                                                              headerClassName:
                                                                  (0, r.$)(
                                                                      N()
                                                                          .carouselBlockHeader,
                                                                      N()
                                                                          .carouselBlock,
                                                                  ),
                                                              containerClassName:
                                                                  N()
                                                                      .carouselBlock,
                                                              title: f({
                                                                  id: "entity-names.popular-artists",
                                                              }),
                                                              viewAllActionLink:
                                                                  "/genre/".concat(
                                                                      s.id,
                                                                      "/artists",
                                                                  ),
                                                              children:
                                                                  s.artists.map(
                                                                      (e) =>
                                                                          (0,
                                                                          i.jsx)(
                                                                              v.ao,
                                                                              {
                                                                                  artist: e,
                                                                                  contentLinesCount: 3,
                                                                              },
                                                                              e.id,
                                                                          ),
                                                                  ),
                                                          },
                                                      ),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
        },
    },
]);
