(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2008],
  {
    38828: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return n;
        },
      });
      var a = r(79765),
        s = r(99616),
        i = r(5674);
      let n = (e) => {
        let t = (0, i.k6)(),
          r = (0, s.useMemo)(
            () =>
              (0, a.Z)(() => {
                if (e && !t.canBack) {
                  t.replaceState({ href: e });
                  return;
                }
                null == t || t.back();
              }, 200),
            [t, e],
          ),
          n = (0, s.useMemo)(
            () =>
              (0, a.Z)(() => {
                null == t || t.forward();
              }, 200),
            [t],
          );
        return {
          canBack: !!e || t.canBack,
          canForward: t.canForward,
          moveBack: r,
          moveForward: n,
        };
      };
    },
    22008: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return h;
        },
      });
      var a = r(8759),
        s = r(35338),
        i = r(33423),
        n = r(65244),
        o = r(15527),
        c = r(14581),
        l = r(38828),
        u = r(93552),
        d = r.n(u);
      let h = (0, i.Pi)((e) => {
        let {
            withBackwardControl: t = !0,
            withForwardControl: r = !0,
            className: i,
            withBackwardFallback: u,
            buttonSize: h = "xxs",
          } = e,
          { formatMessage: f } = (0, n.Z)(),
          {
            canBack: m,
            canForward: g,
            moveBack: p,
            moveForward: y,
          } = (0, l.h)(u);
        return (0, a.jsxs)("div", {
          className: (0, s.W)(d().root, i),
          children: [
            t &&
              (0, a.jsx)(o.z, {
                "aria-label": f({ id: "navigation.go-back" }),
                radius: "round",
                disabled: !m,
                size: h,
                icon: (0, a.jsx)(c.J, { size: "xxs", variant: "arrowLeft" }),
                onClick: p,
                className: d().button,
              }),
            r &&
              (0, a.jsx)(o.z, {
                "aria-label": f({ id: "navigation.go-forward" }),
                radius: "round",
                disabled: !g,
                size: h,
                icon: (0, a.jsx)(c.J, { size: "xxs", variant: "arrowRight" }),
                onClick: y,
                className: d().button,
              }),
          ],
        });
      });
    },
    73119: function (e, t, r) {
      "use strict";
      var a, s;
      r.d(t, {
        $: function () {
          return i;
        },
        R: function () {
          return a;
        },
      }),
        ((s = a || (a = {})).ALBUM = "album"),
        (s.PLAYLIST = "playlist"),
        (s.ARTIST = "artist"),
        (s.ARTIST_TRACKS = "artist_tracks"),
        (s.ARTIST_SIMILAR = "artist_similar"),
        (s.ARTIST_ALBUMS = "artist_albums"),
        (s.ARTIST_DISCOGRAPHY = "artist_discography"),
        (s.ARTIST_COMPILATIONS = "artist_compilations"),
        (s.ARTIST_CONCERTS = "artist_concerts_screen"),
        (s.CHART = "chart"),
        (s.HOME = "home"),
        (s.SEARCH = "search"),
        (s.SIDEBAR = "sidebar"),
        (s.OWN_COLLECTION = "own_collection"),
        (s.OWN_ALBUMS = "own_albums"),
        (s.OWN_ARTISTS = "own_artists"),
        (s.OWN_PLAYLISTS = "own_playlists"),
        (s.RADIO = "radio"),
        (s.GENRE = "genre"),
        (s.GENRE_ALBUMS = "genre_albums"),
        (s.GENRE_ARTISTS = "genre_artists"),
        (s.GENRE_PLAYLISTS = "genre_playlists"),
        (s.TAG = "tag"),
        (s.POST = "post"),
        (s.KINOPOISK = "kinopoisk"),
        (s.HISTORY = "history"),
        (s.FAMILIAR_YOU = "familiar_you"),
        (s.PODCAST = "podcast"),
        (s.NON_MUSIC = "non_music"),
        (s.LANDING = "landing");
      let i = [a.HOME, a.LANDING, a.ARTIST, a.ARTIST_CONCERTS, a.NON_MUSIC];
    },
    68724: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useSendEventOnBlockLoaded: function () {
            return p;
          },
        });
      var a = r(99616),
        s = r(82834),
        i = r(77889),
        n = r(73119),
        o = r(11913),
        c = r(92902),
        l = r(68638),
        u = r(20647),
        d = r(61308),
        h = r(30923),
        f = r(66883),
        m = r(78435);
      let g = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        p = () => {
          let e = (0, m.useAnalytics)(),
            t = (0, i.w)(),
            { hash: r } = (0, u.R)(),
            { pageId: y } = (0, d.useAnalyticsPage)(),
            {
              tabId: v,
              tabPos: E,
              isTabSelectedByDefault: P,
            } = (0, f.useAnalyticsTab)(),
            {
              blockId: x,
              blockType: _,
              blockPosX: S,
              blockPosY: T,
              objectsCount: C,
            } = (0, l.useAnalyticsBlock)(),
            { skeleton: w } = (0, h.useAnalyticsSkeleton)();
          return (0, a.useCallback)(() => {
            if (!e || !y || !n.$.includes(y) || !g.includes(y)) return;
            let a = (0, c.H)(y),
              i = {
                hash: r,
                pageId: a,
                tabId: v,
                tabPos: E,
                entityType: _,
                entityId: x,
                entityPosX: S,
                entityPosY: T,
                isTabSelectedByDefault: P,
                objectsCount: C,
              };
            w && (i.skeletonId = w);
            let l = (0, o.K)({ params: i, logger: t, context: p.name });
            l && (0, s.sj)(e.evgenInstance, l);
          }, [e, x, S, T, _, r, P, t, C, y, w, v, E]);
        };
    },
    68288: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useSendEventOnBlockNavigated: function () {
            return y;
          },
        });
      var a = r(99616),
        s = r(82834),
        i = r(77889),
        n = r(73119),
        o = r(11913),
        c = r(92902),
        l = r(68638),
        u = r(20647),
        d = r(46635),
        h = r(61308),
        f = r(30923),
        m = r(66883),
        g = r(78435);
      let p = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        y = () => {
          let e = (0, g.useAnalytics)(),
            t = (0, i.w)(),
            { hash: r } = (0, u.R)(),
            { pageId: v } = (0, h.useAnalyticsPage)(),
            {
              tabId: E,
              tabPos: P,
              isTabSelectedByDefault: x,
            } = (0, m.useAnalyticsTab)(),
            {
              blockId: _,
              blockType: S,
              blockPosX: T,
              blockPosY: C,
            } = (0, l.useAnalyticsBlock)(),
            {
              objectId: w,
              objectPosX: b,
              objectPosY: k,
              objectType: R,
              objectsCount: A,
            } = (0, d.useAnalyticsObject)(),
            { skeleton: I } = (0, f.useAnalyticsSkeleton)();
          return (0, a.useCallback)(
            (a) => {
              let { to: i, objectId: l, objectType: u } = a,
                d = null != l ? l : w,
                h = null != u ? u : R;
              if (!e || !v || !n.$.includes(v) || !p.includes(v)) return;
              let f = (0, c.H)(v);
              if (!f) return;
              let m = {
                hash: r,
                pageId: f,
                tabId: E,
                tabPos: P,
                isTabSelectedByDefault: x,
                entityType: S,
                entityId: _,
                entityPosX: T,
                entityPosY: C,
                objectId: d,
                objectType: h,
                objectPosX: b,
                objectPosY: k,
                objectsCount: A,
                from: s.qU.MainScreen,
                to: i,
              };
              I && (m.skeletonId = I);
              let g = (0, o.K)({ params: m, logger: t, context: y.name });
              g && (0, s.mz)(e.evgenInstance, g);
            },
            [w, R, e, v, r, I, E, P, x, S, _, T, C, b, k, A, t],
          );
        };
    },
    35180: function (e, t, r) {
      "use strict";
      r.d(t, {
        p: function () {
          return y;
        },
      });
      var a = r(99616),
        s = r(82834),
        i = r(77889),
        n = r(73119),
        o = r(11913),
        c = r(92902),
        l = r(68638),
        u = r(20647),
        d = r(46635),
        h = r(61308),
        f = r(30923),
        m = r(66883),
        g = r(78435);
      let p = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        y = () => {
          let e = (0, i.w)(),
            t = (0, g.useAnalytics)(),
            { hash: r } = (0, u.R)(),
            { pageId: v } = (0, h.useAnalyticsPage)(),
            {
              tabId: E,
              tabPos: P,
              isTabSelectedByDefault: x,
            } = (0, m.useAnalyticsTab)(),
            {
              blockType: _,
              blockId: S,
              blockPosX: T,
              blockPosY: C,
            } = (0, l.useAnalyticsBlock)(),
            {
              objectType: w,
              objectsCount: b,
              objectId: k,
              objectPosX: R,
              objectPosY: A,
            } = (0, d.useAnalyticsObject)(),
            { skeleton: I } = (0, f.useAnalyticsSkeleton)();
          return (0, a.useCallback)(
            (a, i) => {
              if (!t || !v || !n.$.includes(v) || !p.includes(v)) return;
              let l = (0, c.H)(v);
              if (!l) return;
              let u = {
                hash: r,
                pageId: l,
                tabId: E,
                tabPos: P,
                isTabSelectedByDefault: x,
                entityType: _,
                entityId: S,
                entityPosX: T,
                entityPosY: C,
                objectsCount: b,
                viewUuid: i,
                objectType: w,
                objectId: k,
                objectPosX: R,
                objectPosY: A,
              };
              I && (u.skeletonId = I);
              let d = (0, o.K)({ params: u, logger: e, context: y.name });
              d &&
                (a
                  ? (0, s.PB)(t.evgenInstance, d)
                  : (0, s.re)(t.evgenInstance, d));
            },
            [t, S, T, C, _, r, x, e, k, R, A, w, b, v, I, E, P],
          );
        };
    },
    19822: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useSendEventOnBlockStarted: function () {
            return y;
          },
        });
      var a = r(99616),
        s = r(82834),
        i = r(77889),
        n = r(73119),
        o = r(11913),
        c = r(92902),
        l = r(68638),
        u = r(20647),
        d = r(46635),
        h = r(61308),
        f = r(30923),
        m = r(66883),
        g = r(78435);
      let p = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        y = () => {
          let e = (0, g.useAnalytics)(),
            t = (0, i.w)(),
            { hash: r } = (0, u.R)(),
            { pageId: v } = (0, h.useAnalyticsPage)(),
            {
              tabId: E,
              tabPos: P,
              isTabSelectedByDefault: x,
            } = (0, m.useAnalyticsTab)(),
            {
              blockId: _,
              blockType: S,
              blockPosX: T,
              blockPosY: C,
            } = (0, l.useAnalyticsBlock)(),
            {
              objectId: w,
              objectPosX: b,
              objectPosY: k,
              objectType: R,
              objectsCount: A,
            } = (0, d.useAnalyticsObject)(),
            { skeleton: I } = (0, f.useAnalyticsSkeleton)();
          return (0, a.useCallback)(
            (a) => {
              if (!e || !v || !n.$.includes(v) || !a || !p.includes(v)) return;
              let i = (0, c.H)(v);
              if (!i) return;
              let l = {
                hash: r,
                pageId: i,
                tabId: E,
                tabPos: P,
                isTabSelectedByDefault: x,
                entityType: S,
                entityId: _,
                entityPosX: T,
                entityPosY: C,
                objectId: w,
                objectType: R,
                objectPosX: b,
                objectPosY: k,
                objectsCount: A,
              };
              I && (l.skeletonId = I);
              let u = (0, o.K)({ params: l, logger: t, context: y.name });
              u && (0, s.yC)(e.evgenInstance, u);
            },
            [e, v, r, I, E, P, x, S, _, T, C, w, R, b, k, A, t],
          );
        };
    },
    19297: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useSendEventOnSlideShowed: function () {
            return l;
          },
        });
      var a = r(99616),
        s = r(82834),
        i = r(77889),
        n = r(11913),
        o = r(52629),
        c = r(78435);
      let l = (e) => {
        let t = (0, a.useRef)(),
          r = (0, c.useAnalytics)(),
          u = (0, i.w)(),
          {
            slideId: d,
            slidesCount: h,
            slidesType: f,
            slidePos: m,
            artistId: g,
            videoId: p,
          } = (0, o.v)();
        (0, a.useEffect)(() => {
          e && r
            ? (t.current = window.setTimeout(() => {
                let e = (0, n.K)({
                  params: {
                    slidesType: f,
                    slideId: d,
                    slidesCount: h,
                    slidePos: m,
                    artistId: null != g ? g : "null",
                    videoId: null != p ? p : "null",
                  },
                  logger: u,
                  context: l.name,
                });
                e && (0, s.Qb)(r.evgenInstance, e);
              }, 1e3))
            : window.clearTimeout(t.current);
        }, [e, r, d, h, m, g, p, f, u]);
      };
    },
    83537: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useSendEventOnSlidesLoaded: function () {
            return n;
          },
        });
      var a = r(99616),
        s = r(82834),
        i = r(78435);
      let n = (e) => {
        let { isLoaded: t, slidesType: r } = e,
          n = (0, i.useAnalytics)(),
          [o, c] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          t &&
            !o &&
            n &&
            ((0, s.wB)(n.evgenInstance, { slidesType: r }), c(!0));
        }, [n, t, o, r]);
      };
    },
    44491: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useSendEventOnSlidesOpened: function () {
            return n;
          },
        });
      var a = r(99616),
        s = r(82834),
        i = r(78435);
      let n = (e) => {
        let t = (0, i.useAnalytics)();
        (0, a.useEffect)(() => {
          t &&
            (0, s.rO)(null == t ? void 0 : t.evgenInstance, { slidesType: e });
        }, [t, e]);
      };
    },
    96033: function (e, t, r) {
      "use strict";
      r.d(t, {
        x: function () {
          return n;
        },
      });
      var a = r(99616),
        s = r(68638),
        i = r(61308);
      let n = (e) => {
        let t = null == e ? void 0 : e.pageId,
          r = null == e ? void 0 : e.blockId,
          { pageId: n } = (0, i.useAnalyticsPage)(),
          { blockIdForFrom: o } = (0, s.useAnalyticsBlock)();
        return (0, a.useMemo)(() => {
          let e = null != t ? t : n,
            a = null != r ? r : o,
            s = ["desktop"];
          return (
            e && s.push(e.toLowerCase()),
            a && s.push(a.toLowerCase()),
            s.push("default"),
            s.join("-")
          );
        }, [r, o, t, n]);
      };
    },
    11913: function (e, t, r) {
      "use strict";
      function a(e) {
        let { params: t, logger: r, context: a } = e,
          s = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
        return s.length > 0
          ? (r.error("Evgen parameters are not met", {
              parameters: s.join(", "),
              context: a,
            }),
            null)
          : t;
      }
      r.d(t, {
        K: function () {
          return a;
        },
      });
    },
    88912: function (e, t, r) {
      "use strict";
      r.d(t, {
        aU: function () {
          return i;
        },
        BE: function () {
          return n;
        },
        J: function () {
          return u;
        },
        tK: function () {
          return C.AnalyticsHashProvider;
        },
        e4: function () {
          return L.AnalyticsIntersectionObserverProvider;
        },
        nZ: function () {
          return k;
        },
        Rh: function () {
          return v.R;
        },
        Lh: function () {
          return h;
        },
        Yv: function () {
          return g;
        },
        zA: function () {
          return P;
        },
        hw: function () {
          return O;
        },
        $P: function () {
          return v.$;
        },
        KO: function () {
          return U.K;
        },
        qY: function () {
          return p.useAnalyticsBlock;
        },
        RQ: function () {
          return w.R;
        },
        Vf: function () {
          return N.useAnalyticsIntersectionObserver;
        },
        rK: function () {
          return D.useAnalyticsObject;
        },
        lV: function () {
          return f.useAnalyticsPage;
        },
        x5: function () {
          return y.x;
        },
        X0: function () {
          return T.useSendEventOnBlockLoaded;
        },
        zx: function () {
          return R.useSendEventOnBlockNavigated;
        },
        lA: function () {
          return A.useSendEventOnBlockStarted;
        },
        PK: function () {
          return S.useSendEventOnSlideShowed;
        },
        IO: function () {
          return _.useSendEventOnSlidesLoaded;
        },
        bX: function () {
          return x.useSendEventOnSlidesOpened;
        },
      });
      var a,
        s,
        i,
        n,
        o = r(8759),
        c = r(99616),
        l = r(75174);
      let u = (e) => {
        let {
            blockId: t,
            blockType: r,
            blockIdForFrom: a,
            blockPosX: s,
            blockPosY: i,
            objectsCount: n,
            children: u,
          } = e,
          d = (0, c.useMemo)(
            () => ({
              blockId: t,
              blockType: r,
              blockIdForFrom: a,
              blockPosX: s,
              blockPosY: i,
              objectsCount: n,
            }),
            [t, r, a, s, i, n],
          );
        return (0, o.jsx)(l.AnalyticsBlockContext.Provider, {
          value: d,
          children: u,
        });
      };
      var d = r(96355);
      let h = (e) => {
        let { pageId: t, children: r } = e,
          a = (0, c.useMemo)(() => ({ pageId: t }), [t]);
        return (0, o.jsx)(d.AnalyticsPageContext.Provider, {
          value: a,
          children: r,
        });
      };
      var f = r(61308),
        m = r(59210);
      let g = (e) => {
        let { skeleton: t, children: r } = e,
          a = (0, c.useMemo)(() => ({ skeleton: t }), [t]);
        return (0, o.jsx)(m.AnalyticsSkeletonContext.Provider, {
          value: a,
          children: r,
        });
      };
      r(30923);
      var p = r(68638),
        y = r(96033);
      ((a = i || (i = {})).TRACK = "track"),
        (a.ALBUM = "album"),
        (a.PLAYLIST = "playlist"),
        (a.ARTIST = "artist"),
        (a.RUP = "rup"),
        (a.MAIN = "main"),
        (a.RADIO = "radio"),
        (a.DISCOGRAPHY = "discography"),
        (a.CAROUSEL = "carousel"),
        (a.ALBUMS = "albums"),
        (a.COMPILATIONS = "compilations"),
        (a.PLAYLISTS = "playlists"),
        (a.ARTISTS = "artists"),
        (a.BLOCK = "block"),
        (a.DISCOVERY = "discovery"),
        (a.SIMILAR = "similar"),
        (a.SEARCH = "search"),
        (a.HISTORY = "history"),
        (a.DEFAULT = "default"),
        (a.PODCAST = "podcast"),
        (a.FILTERED = "filtered"),
        (a.SUGGESTED = "suggested");
      var v = r(73119),
        E = r(97373);
      let P = (e) => {
        let {
            children: t,
            slidesType: r,
            slideId: a,
            slidePos: s,
            slidesCount: i,
            artistId: n,
            videoId: l,
          } = e,
          u = (0, c.useMemo)(
            () => ({
              slidesType: r,
              slideId: a,
              slidePos: s,
              slidesCount: i,
              artistId: n,
              videoId: l,
            }),
            [n, a, s, i, r, l],
          );
        return (0, o.jsx)(E.AnalyticsSlideContext.Provider, {
          value: u,
          children: t,
        });
      };
      r(52629);
      var x = r(44491),
        _ = r(83537),
        S = r(19297),
        T = r(68724),
        C = r(39930),
        w = r(20647),
        b = r(45461);
      let k = (e) => {
        let {
            objectId: t,
            objectPosX: r,
            objectPosY: a,
            objectPos: s,
            objectType: i,
            objectsCount: n,
            children: l,
          } = e,
          u = (0, c.useMemo)(
            () => ({
              objectId: t,
              objectPosX: r,
              objectPosY: a,
              objectPos: s,
              objectType: i,
              objectsCount: n,
            }),
            [t, r, a, s, i, n],
          );
        return (0, o.jsx)(b.AnalyticsObjectContext.Provider, {
          value: u,
          children: l,
        });
      };
      var R = r(68288),
        A = r(19822),
        I = r(56821);
      let O = (e) => {
        let { tabId: t, tabPos: r, children: a, isTabSelectedByDefault: s } = e,
          i = (0, c.useMemo)(
            () => ({ tabId: t, tabPos: r, isTabSelectedByDefault: s }),
            [t, r, s],
          );
        return (0, o.jsx)(I.AnalyticsTabContext.Provider, {
          value: i,
          children: a,
        });
      };
      var L = r(49221),
        N = r(3068);
      r(35180);
      var U = r(11913),
        D = r(46635);
      ((s = n || (n = {}))[
        (s.RUP_MAIN_RADIO = ""
          .concat(i.RUP, "_")
          .concat(i.MAIN, "-")
          .concat(i.RADIO))
      ] = "RUP_MAIN_RADIO"),
        (s[
          (s.DISCOGRAPHY_CAROUSEL = ""
            .concat(i.DISCOGRAPHY, "_")
            .concat(i.CAROUSEL))
        ] = "DISCOGRAPHY_CAROUSEL"),
        (s[(s.ALBUMS_CAROUSEL = "".concat(i.ALBUMS, "_").concat(i.CAROUSEL))] =
          "ALBUMS_CAROUSEL"),
        (s[
          (s.COMPILATIONS_CAROUSEL = ""
            .concat(i.COMPILATIONS, "_")
            .concat(i.CAROUSEL))
        ] = "COMPILATIONS_CAROUSEL"),
        (s[
          (s.PLAYLISTS_CAROUSEL = ""
            .concat(i.PLAYLISTS, "_")
            .concat(i.CAROUSEL))
        ] = "PLAYLISTS_CAROUSEL"),
        (s[
          (s.ARTISTS_CAROUSEL = "".concat(i.ARTISTS, "_").concat(i.CAROUSEL))
        ] = "ARTISTS_CAROUSEL"),
        (s[(s.DISCOVERY_BLOCK = "".concat(i.DISCOVERY, "_").concat(i.BLOCK))] =
          "DISCOVERY_BLOCK"),
        (s[
          (s.PLAYLISTS_SIMILAR = "".concat(i.PLAYLISTS, "_").concat(i.SIMILAR))
        ] = "PLAYLISTS_SIMILAR"),
        (s[(s.SEARCH_HISTORY = "".concat(i.SEARCH, "_").concat(i.HISTORY))] =
          "SEARCH_HISTORY"),
        (s[
          (s.PLAYLISTS_SIMILAR_PLAYLIST = ""
            .concat(i.PLAYLISTS, "_")
            .concat(i.SIMILAR, "_")
            .concat(i.PLAYLIST))
        ] = "PLAYLISTS_SIMILAR_PLAYLIST");
    },
    92902: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return i;
        },
      });
      var a = r(82834),
        s = r(73119);
      let i = (e) => {
        let t = null;
        switch (e) {
          case s.R.HOME:
            t = a.Dm.MainScreen;
            break;
          case s.R.NON_MUSIC:
            t = a.Dm.NonmusicLandingScreen;
            break;
          case s.R.LANDING:
            t = a.Dm.DynamicScreen;
        }
        return t;
      };
    },
    75174: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsBlockContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({
        blockId: void 0,
        blockType: void 0,
        blockIdForFrom: void 0,
        blockPosX: void 0,
        blockPosY: void 0,
        objectsCount: void 0,
      });
    },
    68638: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsBlock: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(75174);
      function i() {
        return (0, a.useContext)(s.AnalyticsBlockContext);
      }
    },
    95946: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsHashContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({ hash: void 0 });
    },
    39930: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsHashProvider: function () {
            return o;
          },
        });
      var a = r(8759),
        s = r(99616),
        i = r(42503),
        n = r(95946);
      let o = (e) => {
        let { children: t } = e,
          r = (0, s.useMemo)(() => ({ hash: (0, i.Z)() }), []);
        return (0, a.jsx)(n.AnalyticsHashContext.Provider, {
          value: r,
          children: t,
        });
      };
    },
    20647: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return i;
        },
      });
      var a = r(99616),
        s = r(95946);
      function i() {
        return (0, a.useContext)(s.AnalyticsHashContext);
      }
    },
    79302: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return s;
        },
      });
      var a = r(99616);
      let s = (0, a.createContext)({
        observeElement: () => {},
        unobserveElement: () => {},
      });
    },
    49221: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsIntersectionObserverProvider: function () {
            return c;
          },
        });
      var a = r(8759),
        s = r(99616),
        i = r(42503),
        n = r(66936),
        o = r(79302);
      let c = (e) => {
        let { children: t } = e,
          r = (0, s.useRef)({}),
          c = (0, s.useRef)(
            (0, n.wE)(
              (e) => {
                let t = (0, n.SG)(e.target),
                  a = r.current[t];
                if (a) {
                  if (e.isIntersecting) {
                    let e = window.setTimeout(() => {
                      let e = String((0, i.Z)());
                      a.callback(!0, e), (a.showed = !0), (a.viewUuid = e);
                    }, 1e3);
                    a.timerId = e;
                  }
                  !e.isIntersecting &&
                    a.showed &&
                    (a.callback(!1, a.viewUuid),
                    (a.showed = !1),
                    (a.viewUuid = "")),
                    e.isIntersecting || window.clearTimeout(a.timerId);
                }
              },
              { threshold: 0.8 },
            ),
          ),
          l = (0, s.useCallback)((e) => {
            var t;
            !r.current[e.elementId] &&
              e.elementRef.current &&
              (null === (t = c.current) ||
                void 0 === t ||
                t.observe(e.elementRef.current),
              (r.current[e.elementId] = {
                showed: !1,
                viewUuid: "",
                callback: e.callback,
              }));
          }, []),
          u = (0, s.useCallback)((e) => {
            let t = r.current[e];
            t && (t.showed && t.callback(!1, t.viewUuid), delete r.current[e]);
          }, []);
        (0, s.useEffect)(
          () => () => {
            var e;
            return null === (e = c.current) || void 0 === e
              ? void 0
              : e.disconnect();
          },
          [],
        );
        let d = (0, s.useMemo)(
          () => ({ observeElement: l, unobserveElement: u }),
          [l, u],
        );
        return (0, a.jsx)(o._.Provider, { value: d, children: t });
      };
    },
    3068: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsIntersectionObserver: function () {
            return c;
          },
        });
      var a = r(99616),
        s = r(35180),
        i = r(68638),
        n = r(46635),
        o = r(79302);
      let c = function () {
        let { callback: e, singleEvent: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = (0, a.useRef)(null),
          c = (0, s.p)(),
          { blockId: l } = (0, i.useAnalyticsBlock)(),
          { objectId: u, objectType: d } = (0, n.useAnalyticsObject)(),
          h = "".concat(l, "_").concat(d, "_").concat(u),
          f = (0, a.useContext)(o._),
          m = (0, a.useCallback)(
            (r, a) => {
              e ? e(r) : c(r, a), t && f.unobserveElement(h);
            },
            [e, f, h, c, t],
          );
        return (
          (0, a.useEffect)(
            () => (
              f.observeElement({ elementRef: r, elementId: h, callback: m }),
              () => {
                f.unobserveElement(h);
              }
            ),
            [e, f, m, h, c],
          ),
          { ref: r, intersectionPropertyId: h }
        );
      };
    },
    45461: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsObjectContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({
        objectType: void 0,
        objectId: void 0,
        objectPosX: void 0,
        objectPosY: void 0,
        objectPos: void 0,
        objectsCount: void 0,
      });
    },
    46635: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsObject: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(45461);
      function i() {
        return (0, a.useContext)(s.AnalyticsObjectContext);
      }
    },
    96355: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsPageContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({ pageId: void 0 });
    },
    61308: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsPage: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(96355);
      function i() {
        return (0, a.useContext)(s.AnalyticsPageContext);
      }
    },
    59210: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsSkeletonContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({ skeleton: void 0 });
    },
    30923: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsSkeleton: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(59210);
      function i() {
        return (0, a.useContext)(s.AnalyticsSkeletonContext);
      }
    },
    97373: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsSlideContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({
        slidesType: void 0,
        slideId: void 0,
        slidesCount: void 0,
        slidePos: void 0,
      });
    },
    52629: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return i;
        },
      });
      var a = r(99616),
        s = r(97373);
      let i = () => (0, a.useContext)(s.AnalyticsSlideContext);
    },
    56821: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsTabContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({
        tabId: void 0,
        tabPos: void 0,
        isTabSelectedByDefault: void 0,
      });
    },
    66883: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsTab: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(56821);
      function i() {
        return (0, a.useContext)(s.AnalyticsTabContext);
      }
    },
    78435: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsContext: function () {
            return s;
          },
          useAnalytics: function () {
            return i;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)(null);
      function i() {
        return (0, a.useContext)(s);
      }
    },
    90344: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useMetrika: function () {
            return o;
          },
        });
      var a = r(99616),
        s = r(77889);
      let i = null,
        n = [],
        o = () => {
          let e = (0, s.w)(),
            [t, r] = (0, a.useState)(null !== i),
            o = (0, a.useCallback)((e) => {
              n.forEach((t) => {
                t(e);
              }),
                (n = []);
            }, []),
            c = (0, a.useCallback)(
              (a) => {
                var s;
                if (
                  void 0 !==
                    (null === (s = window.Ya) || void 0 === s
                      ? void 0
                      : s.Metrika2) &&
                  !t
                )
                  try {
                    (i = new window.Ya.Metrika2({ ...a })), r(!0), o(i);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && e.error(t);
                  }
              },
              [t, e, o],
            ),
            l = (0, a.useCallback)((e) => {
              i
                ? i.hit(e)
                : n.push((t) => {
                    t.hit(e);
                  });
            }, []),
            u = (0, a.useCallback)(function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "counter";
              i
                ? i.params({ [t]: e })
                : n.push((r) => {
                    r.params({ [t]: e });
                  });
            }, []);
          return { isLoaded: t, init: c, count: u, hit: l };
        };
    },
    64421: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AuthorizationChecker: function () {
            return o;
          },
        });
      var a = r(33423),
        s = r(75402),
        i = r(75563),
        n = r(34575);
      let o = (0, a.Pi)(() => {
        var e, t;
        let r = (0, i.useContainer)(),
          {
            user: a,
            location: { pathname: o, searchParams: c, host: l, tld: u },
          } = (0, n.useStore)(),
          d = r.get(s.xi);
        d.setRedirectUrl({ pathname: o, searchParams: c, host: l, tld: u }),
          null === (t = d.setTokenOwnerLogin) ||
            void 0 === t ||
            t.call(
              d,
              null === (e = a.account) || void 0 === e ? void 0 : e.login,
            ),
          d.check();
      });
    },
    35070: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return s;
        },
      });
      var a = r(24807);
      class s {
        setRedirectUrl(e) {
          let { pathname: t, host: r, searchParams: a, tld: s } = e;
          (this.host = null != r ? r : this.host),
            (this.tld = null != s ? s : this.tld),
            (this.searchParams = null != a ? a : this.searchParams),
            (this.pathname = null != t ? t : this.pathname);
        }
        get passportLogin() {}
        constructor(e, t) {
          (0, a._)(this, "storage", void 0),
            (0, a._)(this, "config", void 0),
            (0, a._)(this, "pathname", void 0),
            (0, a._)(this, "searchParams", void 0),
            (0, a._)(this, "host", void 0),
            (0, a._)(this, "tld", void 0),
            (this.storage = e),
            (this.config = t),
            (this.pathname = ""),
            (this.searchParams = ""),
            (this.host = ""),
            (this.tld = "");
        }
      }
    },
    90555: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return o;
        },
      });
      var a = r(24807),
        s = r(63198),
        i = r(58486),
        n = r(35070);
      class o extends n.z {
        check() {
          if (this.dataIsLoaded) {
            if (!this.passportLogin && this.token) {
              this.removeToken(), this.reloadPage();
              return;
            }
            if (!this.token && this.passportLogin && !this.isOAuthPage) {
              this.redirectToAuthorizationUrl();
              return;
            }
            if (
              this.passportLogin &&
              this.tokenOwnerLogin &&
              this.passportLogin !== this.tokenOwnerLogin
            ) {
              this.redirectToOAuthUrl();
              return;
            }
          }
        }
        get isOAuthPage() {
          return window.location.pathname.endsWith("/oauth");
        }
        get oauthUrl() {
          let {
              oauthCredentials: { host: e, clientId: t },
              passportCredentials: { origin: r },
            } = this.config,
            a = ""
              .concat(this.pathname)
              .concat(this.searchParams ? "?".concat(this.searchParams) : "");
          "/" === a.charAt(0) && (a = a.substring(1));
          let s = (0, i.z)(e, "ru"),
            n = new URL("".concat(s, "/authorize")),
            o = ""
              .concat(origin, "/oauth?redirectUri=")
              .concat(encodeURIComponent(a), "&language=")
              .concat(this.language);
          return (
            n.searchParams.append("response_type", "token"),
            n.searchParams.append("display", "popup"),
            n.searchParams.append("scope", "music:content"),
            n.searchParams.append("scope", "music:read"),
            n.searchParams.append("scope", "music:write"),
            n.searchParams.append("client_id", t),
            n.searchParams.append("redirect_uri", o),
            n.searchParams.append("state", this.oauthState),
            n.searchParams.append("origin", r),
            n.searchParams.append("language", this.language),
            n.toString()
          );
        }
        get authorizationUrl() {
          let {
              passportCredentials: { origin: e, host: t },
            } = this.config,
            r = (0, i.z)(t, "ru"),
            a = this.oauthUrl,
            s = new URL("".concat(r, "/auth"));
          return (
            s.searchParams.append("noreturn", "1"),
            s.searchParams.append("origin", e),
            s.searchParams.append("language", this.language),
            s.searchParams.append("retpath", String(a)),
            s.toString()
          );
        }
        reloadPage() {
          window.location.reload();
        }
        redirectToOAuthUrl() {
          this.oauthUrl && (window.location.href = this.oauthUrl);
        }
        redirectToAuthorizationUrl() {
          this.authorizationUrl &&
            (window.location.href = this.authorizationUrl);
        }
        setTokenOwnerLogin(e) {
          this.tokenOwnerLogin = e;
        }
        setDataIsLoaded() {
          this.dataIsLoaded = !0;
        }
        setToken(e) {
          e.state === this.oauthState &&
            this.storage.set(s.B.Oauth, e.token, {
              expires: Math.floor(e.expiresIn / 86400),
            });
        }
        get token() {
          if (this.passportLogin) return this.storage.get(s.B.Oauth) || void 0;
        }
        removeToken() {
          this.storage.remove(s.B.Oauth);
        }
        updateOauthState() {
          let e = Math.round(1e11 * Math.random()).toString(16);
          this.storage.set(s.B.OauthState, e, { expires: 1 });
        }
        get oauthState() {
          return this.storage.get(s.B.OauthState) || "";
        }
        constructor(e, t, r) {
          super(e, t),
            (0, a._)(this, "language", void 0),
            (0, a._)(this, "dataIsLoaded", void 0),
            (0, a._)(this, "tokenOwnerLogin", void 0),
            (this.language = r),
            (this.dataIsLoaded = !1),
            this.oauthState || this.updateOauthState(),
            this.check();
        }
      }
    },
    75402: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ar: function () {
          return v;
        },
        Ci: function () {
          return d;
        },
        DR: function () {
          return s;
        },
        EN: function () {
          return D;
        },
        Eu: function () {
          return o;
        },
        Hz: function () {
          return I;
        },
        OT: function () {
          return p;
        },
        O_: function () {
          return L;
        },
        P0: function () {
          return a;
        },
        Rt: function () {
          return S;
        },
        SL: function () {
          return U;
        },
        SR: function () {
          return w;
        },
        U5: function () {
          return h;
        },
        V0: function () {
          return f;
        },
        Ve: function () {
          return F;
        },
        X8: function () {
          return O;
        },
        Xt: function () {
          return m;
        },
        YR: function () {
          return c;
        },
        ZO: function () {
          return k;
        },
        c5: function () {
          return n;
        },
        cG: function () {
          return l;
        },
        ce: function () {
          return g;
        },
        dk: function () {
          return A;
        },
        g5: function () {
          return y;
        },
        jb: function () {
          return R;
        },
        lk: function () {
          return C;
        },
        n: function () {
          return P;
        },
        o: function () {
          return H;
        },
        pI: function () {
          return i;
        },
        q2: function () {
          return E;
        },
        qV: function () {
          return u;
        },
        sD: function () {
          return N;
        },
        uR: function () {
          return M;
        },
        vl: function () {
          return b;
        },
        w5: function () {
          return _;
        },
        xi: function () {
          return x;
        },
        zQ: function () {
          return T;
        },
      });
      let a = "Logger",
        s = "ModelActionsLogger",
        i = "HttpClient",
        n = "AccountResource",
        o = "UsersResource",
        c = "LandingResource",
        l = "Landing3Resource",
        u = "AlbumResource",
        d = "SlidesResource",
        h = "Config",
        f = "Storage",
        m = "CookieStorage",
        g = "LocalStorage",
        p = "LibraryResource",
        y = "TracksResource",
        v = "SessionStorage",
        E = "TopResource",
        P = "ArtistsResource",
        x = "Authorization",
        _ = "RotorResource",
        S = "SearchResource",
        T = "SearchPlaylistResource",
        C = "PlaylistResource",
        w = "PlaylistsResource",
        b = "PinResource",
        k = "MetatagsResource",
        R = "TagResource",
        A = "FeedResource",
        I = "CONTAINER_USER_ID_TOKEN",
        O = "PinsResource",
        L = "MusicHistoryResource",
        N = "ChartResource",
        U = "CONTAINER_I18N_STORAGE",
        D = "DynamicPagesResource",
        F = "LyricViewsResource",
        H = "NonMusicResource",
        M = "DonationResource";
    },
    75563: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ContainerContext: function () {
            return i;
          },
          useContainer: function () {
            return n;
          },
        });
      var a = r(63278),
        s = r(99616);
      let i = (0, s.createContext)(null);
      function n() {
        let e = (0, s.useContext)(i);
        if (null === e)
          throw new a.y(
            "Container cannot be null, please add a context provider",
            { code: "E_CONTEXT_CONTAINER_NULL" },
          );
        return e;
      }
    },
    90703: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useShortMonth: function () {
            return s;
          },
        });
      var a = r(65244);
      let s = (e) => {
        let { formatMessage: t } = (0, a.Z)(),
          r = {
            0: t({ id: "calendar.january-short" }),
            1: t({ id: "calendar.february-short" }),
            2: t({ id: "calendar.march-short" }),
            3: t({ id: "calendar.april-short" }),
            4: t({ id: "calendar.may-short" }),
            5: t({ id: "calendar.june-short" }),
            6: t({ id: "calendar.july-short" }),
            7: t({ id: "calendar.august-short" }),
            8: t({ id: "calendar.september-short" }),
            9: t({ id: "calendar.october-short" }),
            10: t({ id: "calendar.november-short" }),
            11: t({ id: "calendar.december-short" }),
          };
        if (e) return r[new Date(e).getMonth()];
      };
    },
    47270: function (e, t, r) {
      "use strict";
      var a, s;
      r.d(t, {
        B: function () {
          return a;
        },
      }),
        ((s = a || (a = {})).WINDOW_MINIMIZE = "WINDOW_MINIMIZE"),
        (s.WINDOW_MAXIMIZE = "WINDOW_MAXIMIZE"),
        (s.WINDOW_CLOSE = "WINDOW_CLOSE"),
        (s.ON_UPDATE_INSTALL = "ON_UPDATE_INSTALL"),
        (s.ON_UPDATE_AVAILABLE = "ON_UPDATE_AVAILABLE"),
        (s.ON_APPLICATION_READY = "ON_APPLICATION_READY"),
        (s.APPLICATION_THEME = "APPLICATION_THEME"),
        (s.GET_PASSPORT_LOGIN = "GET_PASSPORT_LOGIN"),
        (s.SHOW_RELEASE_NOTES = "SHOW_RELEASE_NOTES"),
        (s.NEED_SHOW_RELEASE_NOTES = "NEED_SHOW_RELEASE_NOTES"),
        (s.UPDATE_APPLICATION_DATA = "UPDATE_APPLICATION_DATA"),
        (s.ON_PLAYER_STATE = "ON_PLAYER_STATE"),
        (s.PLAYER_ACTION = "PLAYER_ACTION"),
        (s.ON_HANDLE_DEEPLINK = "ON_HANDLE_DEEPLINK"),
        (s.FIRST_LAUNCH = "FIRST_LAUNCH");
    },
    24747: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          HistoryContext: function () {
            return s;
          },
          useHistory: function () {
            return i;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({
        pushState: () => {},
        replaceState: () => {},
        forward: () => {},
        back: () => {},
        canForward: !1,
        canBack: !1,
        state: null,
      });
      function i() {
        return (0, a.useContext)(s);
      }
    },
    677: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useI18nStorage: function () {
            return n;
          },
        });
      var a = r(99616),
        s = r(75402),
        i = r(75563);
      let n = () => {
        let e = (0, i.useContainer)(),
          t = e.get(s.SL),
          r = t.getLanguage(),
          n = t.getDefaultLanguage(),
          o = t.getDictionary(),
          c = (0, a.useCallback)(
            (e) => {
              t.setLanguage(e);
            },
            [r],
          );
        return (0, a.useMemo)(
          () => ({
            dictionary: o,
            language: r,
            defaultLanguage: n,
            setLanguage: c,
          }),
          [r, c],
        );
      };
    },
    5674: function (e, t, r) {
      "use strict";
      r.d(t, {
        kF: function () {
          return eO.k;
        },
        SL: function () {
          return v;
        },
        aU: function () {
          return C.aU;
        },
        BE: function () {
          return C.BE;
        },
        J: function () {
          return C.J;
        },
        fC: function () {
          return S.AnalyticsContext;
        },
        tK: function () {
          return C.tK;
        },
        e4: function () {
          return C.e4;
        },
        nZ: function () {
          return C.nZ;
        },
        Rh: function () {
          return C.Rh;
        },
        Lh: function () {
          return C.Lh;
        },
        Yv: function () {
          return C.Yv;
        },
        zA: function () {
          return C.zA;
        },
        hw: function () {
          return C.hw;
        },
        xi: function () {
          return A.xi;
        },
        U5: function () {
          return A.U5;
        },
        Xt: function () {
          return A.Xt;
        },
        pI: function () {
          return A.pI;
        },
        uh: function () {
          return A.SL;
        },
        ce: function () {
          return A.ce;
        },
        P0: function () {
          return A.P0;
        },
        Ar: function () {
          return A.Ar;
        },
        V0: function () {
          return A.V0;
        },
        Hz: function () {
          return A.Hz;
        },
        Gr: function () {
          return E;
        },
        Xl: function () {
          return I.ContainerContext;
        },
        sH: function () {
          return eO.s;
        },
        Uv: function () {
          return f;
        },
        BO: function () {
          return G.B;
        },
        co: function () {
          return x;
        },
        Gq: function () {
          return P;
        },
        pe: function () {
          return m;
        },
        Tl: function () {
          return X.HistoryContext;
        },
        QQ: function () {
          return Q;
        },
        VY: function () {
          return ee.LayoutContext;
        },
        t8: function () {
          return Z.t;
        },
        Gu: function () {
          return eA.G;
        },
        Xe: function () {
          return ew.MediaConfigControllerContext;
        },
        W$: function () {
          return eo.W;
        },
        wx: function () {
          return g;
        },
        t4: function () {
          return eI.t;
        },
        ed: function () {
          return e0.SHORTCUTS_LIST;
        },
        $P: function () {
          return C.$P;
        },
        rL: function () {
          return e9;
        },
        B1: function () {
          return eS.SearchFeedbackContext;
        },
        yx: function () {
          return eV.y;
        },
        cw: function () {
          return eX.ShortcutsContext;
        },
        OI: function () {
          return eG;
        },
        ft: function () {
          return e1;
        },
        yr: function () {
          return eQ;
        },
        R8: function () {
          return eb.SonataContext;
        },
        IP: function () {
          return et.SplashScreenContext;
        },
        BU: function () {
          return w.B;
        },
        xf: function () {
          return L.StoreContext;
        },
        Q2: function () {
          return e2.Q;
        },
        Ni: function () {
          return e5.ThemeContext;
        },
        Lx: function () {
          return y;
        },
        kz: function () {
          return e7;
        },
        tN: function () {
          return eL;
        },
        GA: function () {
          return ei;
        },
        YT: function () {
          return W;
        },
        GL: function () {
          return B;
        },
        Sv: function () {
          return K;
        },
        L6: function () {
          return q;
        },
        z: function () {
          return O;
        },
        K7: function () {
          return eH;
        },
        gf: function () {
          return e6;
        },
        KO: function () {
          return C.KO;
        },
        XG: function () {
          return ta;
        },
        aM: function () {
          return el;
        },
        ZO: function () {
          return j;
        },
        u9: function () {
          return V;
        },
        NK: function () {
          return te;
        },
        jP: function () {
          return J;
        },
        Xf: function () {
          return eu.X;
        },
        Sq: function () {
          return eh.S;
        },
        Q$: function () {
          return tt.Q;
        },
        sQ: function () {
          return em;
        },
        Us: function () {
          return ts;
        },
        SZ: function () {
          return M;
        },
        L: function () {
          return eM;
        },
        p$: function () {
          return ev;
        },
        zJ: function () {
          return N.z;
        },
        bo: function () {
          return ed.b;
        },
        sE: function () {
          return ti;
        },
        oo: function () {
          return tr;
        },
        AG: function () {
          return eN;
        },
        rd: function () {
          return e_;
        },
        z$: function () {
          return S.useAnalytics;
        },
        qY: function () {
          return C.qY;
        },
        RQ: function () {
          return C.RQ;
        },
        Vf: function () {
          return C.Vf;
        },
        rK: function () {
          return C.rK;
        },
        lV: function () {
          return C.lV;
        },
        uK: function () {
          return I.useContainer;
        },
        x5: function () {
          return C.x5;
        },
        ZP: function () {
          return eJ.useDisableShortcuts;
        },
        k6: function () {
          return X.useHistory;
        },
        m5: function () {
          return eE;
        },
        ZS: function () {
          return ej.useI18nStorage;
        },
        $Y: function () {
          return ee.useLayout;
        },
        wL: function () {
          return er.w;
        },
        Sc: function () {
          return ew.useMediaConfigController;
        },
        sv: function () {
          return T.useMetrika;
        },
        dE: function () {
          return ea;
        },
        s0: function () {
          return ey;
        },
        d$: function () {
          return ec.d;
        },
        qm: function () {
          return ek.usePlayableContext;
        },
        Qh: function () {
          return eR.usePlayableVibeContext;
        },
        oz: function () {
          return e4.usePreferredColorScheme;
        },
        YS: function () {
          return ef;
        },
        NO: function () {
          return en.useRumPage;
        },
        zB: function () {
          return H;
        },
        sA: function () {
          return eC;
        },
        hJ: function () {
          return ep;
        },
        X0: function () {
          return C.X0;
        },
        zx: function () {
          return C.zx;
        },
        lA: function () {
          return C.lA;
        },
        PK: function () {
          return C.PK;
        },
        IO: function () {
          return C.IO;
        },
        bX: function () {
          return C.bX;
        },
        qK: function () {
          return ex;
        },
        KR: function () {
          return $.useShortMonth;
        },
        XU: function () {
          return eZ.useShortcuts;
        },
        R$: function () {
          return eb.useSonata;
        },
        NN: function () {
          return et.useSplashScreen;
        },
        oR: function () {
          return L.useStore;
        },
        Fg: function () {
          return e5.useTheme;
        },
        yy: function () {
          return U;
        },
      });
      var a,
        s,
        i,
        n,
        o,
        c,
        l,
        u,
        d,
        h,
        f,
        m,
        g,
        p,
        y,
        v,
        E,
        P,
        x,
        _,
        S = r(78435),
        T = r(90344),
        C = r(88912),
        w = r(63198),
        b = r(99616);
      let k = (e) => {
          let t = Object.entries(e)
            .map((e) => {
              let [t, r] = e;
              return "".concat(t, "=").concat(encodeURIComponent(r));
            })
            .join("&");
          return t ? "?".concat(t) : "";
        },
        R = (e, t) => {
          {
            let r = e.replaceAll(/(\/:\w+)/g, "");
            return "".concat(r).concat(k(t));
          }
        };
      var A = r(75402),
        I = r(75563);
      function O(e, t) {
        let [r, a] = e.split("?"),
          s = null == r ? void 0 : r.split("/").filter((e) => "" !== e),
          i = {},
          n = t.split("/").filter((e) => "" !== e);
        if (
          (null == s ? void 0 : s.length) !== n.length ||
          (n[0] && !e.startsWith("/".concat(n[0])))
        )
          return i;
        for (let e = 0; e < n.length; e++) {
          let t = n[e],
            r = s && s[e];
          if ((null == t ? void 0 : t.startsWith(":")) && r) {
            let e = t.substring(1);
            i[e] = r;
          }
        }
        return (
          a &&
            a.split("&").map((e) => {
              let [t, r] = e.split("=");
              t && void 0 !== r && (i[t] = r);
            }),
          i
        );
      }
      var L = r(34575),
        N = r(58486);
      let U = (e) => {
        let { location: t } = (0, L.useStore)();
        return (0, N.z)(e, t.tld);
      };
      var D = r(24807);
      let F = new (class {
        register(e) {
          this.pages[e] = this.regexpFromPattern(e);
        }
        isUrlSupported(e) {
          return Object.values(this.pages).some((t) => t.test(e));
        }
        getPatternForUrl(e) {
          return Object.keys(this.pages).find((t) => {
            var r;
            return null === (r = this.pages[t]) || void 0 === r
              ? void 0
              : r.test(e);
          });
        }
        regexpFromPattern(e) {
          let t = e.replace(/\/:\w+/gi, "/[\\wа-яА-ЯёЁ %.,&-]+");
          return RegExp("^".concat(t, "/?(\\?.*)?$"), "i");
        }
        constructor() {
          (0, D._)(this, "pages", {});
        }
      })();
      F.register("/"),
        F.register("/settings"),
        F.register("/album/:albumId"),
        F.register("/artist/:artistId"),
        F.register("/artist/:artistId/similar"),
        F.register("/artist/:artistId/tracks"),
        F.register("/artist/:artistId/discography"),
        F.register("/artist/:artistId/albums"),
        F.register("/artist/:artistId/compilations"),
        F.register("/artist/:artistId/concerts"),
        F.register("/artist/:artistId/familiar"),
        F.register("/chart"),
        F.register("/collection"),
        F.register("/collection/albums"),
        F.register("/collection/artists"),
        F.register("/collection/playlists/created"),
        F.register("/collection/playlists/liked"),
        F.register("/collection/playlists"),
        F.register("/collection/shelf"),
        F.register("/mixes"),
        F.register("/mixes/:navigationId"),
        F.register("/genre/:metatagId"),
        F.register("/genre/:metatagId/albums"),
        F.register("/genre/:metatagId/artists"),
        F.register("/genre/:metatagId/playlists"),
        F.register("/playlist/:playlistUuid"),
        F.register("/post/:promoId"),
        F.register("/search"),
        F.register("/search/history"),
        F.register("/users/:userId/playlists/:kind"),
        F.register("/tag/:tagId"),
        F.register("/entities/:blockType/:blockId"),
        F.register("/music-history"),
        F.register("/kinopoisk"),
        F.register("/non-music"),
        F.register("/landing/:skeleton"),
        F.register("/slides/artist/:artistId"),
        F.register("/slides/user");
      let H = (e) => {
          let t = (0, I.useContainer)(),
            r = t.get(A.U5),
            a = U(r.oldWebHost);
          return (0, b.useMemo)(() => {
            let t = !0,
              r = !0,
              s = e;
            try {
              new URL(e);
            } catch (e) {
              t = !1;
            }
            if (!t) {
              if (F.isUrlSupported(e)) {
                let t = F.getPatternForUrl(e);
                t
                  ? ((s = R(t, O(e, t))), (r = !1))
                  : (s = "https://".concat(a).concat(e));
              } else s = "https://".concat(a).concat(e);
            }
            return {
              href: s,
              isExternalLink: r,
              target: r ? "_blank" : "_self",
              rel: r ? "noreferrer noopener" : "",
            };
          }, [e, a]);
        },
        M = (e) => {
          if (!F.isUrlSupported(e)) return null;
          let t = F.getPatternForUrl(e);
          return t ? R(t, O(e, t)) : null;
        };
      async function j(e) {
        let {
          tld: t,
          env: a,
          forwardedForY: s,
          traceparent: i,
          tracestate: n,
          serverDetectedLang: o,
          changeLanguageToken: c,
        } = e;
        {
          let { createDesktopContainer: e } = await Promise.all([
            r.e(3778),
            r.e(8616),
            r.e(298),
            r.e(5368),
            r.e(9875),
          ]).then(r.bind(r, 9875));
          return e({ tld: t, env: a });
        }
      }
      let W = () => ({ year: "numeric", month: "long", day: "numeric" }),
        B = () => ({ day: "numeric" }),
        q = () => ({ year: "numeric" }),
        Y = (e, t) =>
          e.getDate() === t.getDate() &&
          e.getMonth() === t.getMonth() &&
          e.getFullYear() === t.getFullYear();
      ((a = f || (f = {})).TODAY = "today"),
        (a.YESTERDAY = "yesterday"),
        (a.DATE = "date"),
        (a.DATE_WITH_YEAR = "date-with-year");
      let V = (e) => {
          let t = new Date();
          if (Y(t, e)) return f.TODAY;
          let r = new Date();
          return (r.setDate(r.getDate() - 1), Y(r, e))
            ? f.YESTERDAY
            : t.getFullYear() !== e.getFullYear()
              ? f.DATE_WITH_YEAR
              : f.DATE;
        },
        K = () => ({ timeStyle: "short" });
      var $ = r(90703),
        G = r(47270);
      class z {
        isLocationNotEqual(e) {
          return this.data.href !== e;
        }
        toString() {
          return JSON.stringify(this.data);
        }
        constructor(e, t = null, r = null) {
          (0, D._)(this, "data", void 0),
            (0, D._)(this, "next", void 0),
            (0, D._)(this, "prev", void 0),
            (this.data = e),
            (this.next = t),
            (this.prev = r);
        }
      }
      class Q {
        replaceState(e) {
          let t = new z(e, null, null);
          this.current && (t = new z(e, this.current.next, this.current.prev)),
            (this.current = t),
            this.updateSessionStorage();
        }
        pushState(e) {
          let t = new z(e, null, null);
          this.current &&
            this.current.isLocationNotEqual(e.href) &&
            ((t = new z(e, null, this.current)), (this.current.next = t)),
            (this.current = t),
            this.updateSessionStorage();
        }
        get state() {
          return this.current;
        }
        get canForward() {
          var e;
          return !!(null === (e = this.current) || void 0 === e
            ? void 0
            : e.next);
        }
        get canBack() {
          var e;
          return !!(null === (e = this.current) || void 0 === e
            ? void 0
            : e.prev);
        }
        forward() {
          var e;
          if (!this.canForward) return;
          let t = null === (e = this.current) || void 0 === e ? void 0 : e.next;
          t && (this.current = t), this.updateSessionStorage();
        }
        back() {
          var e;
          if (!this.canBack) return;
          let t = null === (e = this.current) || void 0 === e ? void 0 : e.prev;
          t && (this.current = t), this.updateSessionStorage();
        }
        updateSessionStorage() {
          this.current &&
            this.sessionStorage.set(w.B.SessionHistoryState, this.current.data);
        }
        restoreHistory() {
          let e = this.sessionStorage.get(w.B.SessionHistoryState);
          e && this.replaceState(e);
        }
        constructor(e) {
          (0, D._)(this, "sessionStorage", void 0),
            (0, D._)(this, "current", void 0),
            (this.sessionStorage = e),
            (this.current = null),
            this.restoreHistory();
        }
      }
      var X = r(24747),
        Z = r(94175);
      let J = (e) => (e < Z.A.Mobile ? Z.t.Mobile : Z.t.Desktop);
      var ee = r(77617),
        et = r(56472),
        er = r(77889);
      let ea = () => {
        let e = (0, I.useContainer)();
        return e.get(A.DR);
      };
      var es = r(96555);
      let ei = (e) =>
        (0, es.pj)({
          nominative: e.nominative,
          genitive: e.genitive,
          dative: e.dative,
          accusative: e.accusative,
          instrumental: e.instrumental,
          prepositional: e.prepositional,
        });
      var en = r(29751),
        eo = r(69991),
        ec = r(86388);
      function el() {
        return window.BRANCH;
      }
      var eu = r(28307),
        ed = r(39351),
        eh = r(19327);
      let ef = () => {
        let e = (0, I.useContainer)(),
          t = e.get(A.c5),
          r = e.get(A.Eu),
          a = e.get(A.YR),
          s = e.get(A.cG),
          i = e.get(A.qV),
          n = e.get(A.OT),
          o = e.get(A.g5),
          c = e.get(A.q2),
          l = e.get(A.n),
          u = e.get(A.Ci),
          d = e.get(A.w5),
          h = e.get(A.Rt),
          f = e.get(A.zQ),
          m = e.get(A.lk),
          g = e.get(A.SR),
          p = e.get(A.vl),
          y = e.get(A.ZO),
          v = e.get(A.jb),
          E = e.get(A.dk),
          P = e.get(A.X8),
          x = e.get(A.O_),
          _ = e.get(A.EN),
          S = e.get(A.sD),
          T = e.get(A.Ve),
          C = e.get(A.o),
          w = e.get(A.uR);
        return {
          accountResource: t,
          usersResource: r,
          landingResource: a,
          landing3Resource: s,
          albumResource: i,
          libraryResource: n,
          tracksResource: o,
          topResource: c,
          artistsResource: l,
          slidesResource: u,
          rotorResource: d,
          searchResource: h,
          searchPlaylistResource: f,
          playlistResource: m,
          playlistsResource: g,
          pinResource: p,
          metatagsResource: y,
          tagResource: v,
          feedResource: E,
          pinsResource: P,
          musicHistoryResource: x,
          dynamicPagesResource: _,
          chartResource: S,
          lyricViewsResource: T,
          nonMusicResource: C,
          donationResource: w,
        };
      };
      ((s = m || (m = {})).WebNext = "WebNext"),
        (s.WebNextAlbumDisableVersions = "WebNextAlbumDisableVersions"),
        (s.WebNextAlbumDisableTracks = "WebNextAlbumDisableTracks"),
        (s.WebNextAlbumDisableLatestGenreAlbums =
          "WebNextAlbumDisableLatestGenreAlbums"),
        (s.WebNextAlbumDisableOtherArtistAlbums =
          "WebNextAlbumDisableOtherArtistAlbums"),
        (s.WebNextArtistDisableLastReleases =
          "WebNextArtistDisableLastReleases"),
        (s.WebNextArtistDisablePopularTracks =
          "WebNextArtistDisablePopularTracks"),
        (s.WebNextArtistDisablePopularAlbums =
          "WebNextArtistDisablePopularAlbums"),
        (s.WebNextArtistDisableDiscography = "WebNextArtistDisableDiscography"),
        (s.WebNextArtistDisableCompilations =
          "WebNextArtistDisableCompilations"),
        (s.WebNextArtistDisablePlaylists = "WebNextArtistDisablePlaylists"),
        (s.WebNextArtistDisableSimilarArtists =
          "WebNextArtistDisableSimilarArtists"),
        (s.WebNextDisableCollection = "WebNextDisableCollection"),
        (s.WebNextDisableCollectionArtists = "WebNextDisableCollectionArtists"),
        (s.WebNextDisableCollectionAlbums = "WebNextDisableCollectionAlbums"),
        (s.WebNextDisableCollectionCreatedPlaylists =
          "WebNextDisableCollectionCreatedPlaylists"),
        (s.WebNextDisableCollectionLikedPlaylists =
          "WebNextDisableCollectionLikedPlaylists"),
        (s.WebNextDisableLanding = "WebNextDisableLanding"),
        (s.WebNextDisableSkeletonTabs = "WebNextDisableSkeletonTabs"),
        (s.WebNextDisableSkeletonBlocks = "WebNextDisableSkeletonBlocks"),
        (s.WebNextDisableVibe = "WebNextDisableVibe"),
        (s.WebNextDisableVibeSettings = "WebNextDisableVibeSettings"),
        (s.WebNextDisableSearch = "WebNextDisableSearch"),
        (s.WebDonationButton = "WebDonationButton"),
        (s.WebPresave = "WebPresave"),
        (s.WebUniversalEntitiesScreen = "WebUniversalEntitiesScreen"),
        (s.WebNextDisableSendPlaysOnTrackStart =
          "WebNextDisableSendPlaysOnTrackStart"),
        (s.WebPlayAudioSendPrepare = "WebPlayAudioSendPrepare"),
        (s.WebNewBlockConcerts = "WebNewBlockConcerts"),
        (s.WebNewConcertsList = "WebNewConcertsList"),
        (s.WebNextFullScreenPlayer = "WebNextFullScreenPlayer"),
        (s.WebNextMusicHistory = "WebNextMusicHistory"),
        (s.WebPins = "WebPins"),
        (s.WebNextPlaylistAddition = "WebNextPlaylistAddition"),
        (s.WebKinopoiskLanding = "WebKinopoiskLanding"),
        (s.WebNextAgentArtist = "WebNextAgentArtist"),
        (s.WebNextLegalRejectArtist = "WebNextLegalRejectArtist"),
        (s.WebNextLegalRejectAlbum = "WebNextLegalRejectAlbum"),
        (s.WebNextLegalRejectTrack = "WebNextLegalRejectTrack"),
        (s.WebNextLegalUnsafeArtist = "WebNextLegalUnsafeArtist"),
        (s.WebNextLegalUnsafeAlbum = "WebNextLegalUnsafeAlbum"),
        (s.WebNextLegalUnsafeTrack = "WebNextLegalUnsafeTrack"),
        (s.WebNextNonMusicLanding = "WebNextNonMusicLanding"),
        (s.WebNextFamiliarYou = "WebNextFamiliarYou"),
        (s.WebNextPodcastPage = "WebNextPodcastPage"),
        (s.WebNextWaveNewFeedbacks = "WebNextWaveNewFeedbacks"),
        (s.WebNextPlaylistDnD = "WebNextPlaylistDnD"),
        (s.WebNextTrackAboutModal = "WebNextTrackAboutModal"),
        (s.WebNextSettingsPage = "WebNextSettingsPage"),
        (s.WebNextFreemium = "WebNextFreemium"),
        (s.WebNextSwitchToStrmWithoutEncrypt =
          "WebNextSwitchToStrmWithoutEncrypt"),
        (s.WebNextPodcastSearch = "WebNextPodcastSearch"),
        (s.WebNextUniversalLandingPage = "WebNextUniversalLandingPage"),
        (s.WebNextNewExplicitApi = "WebNextNewExplicitApi");
      let em = (e) => {
        let t = [];
        return (
          e.checkExperiment(m.WebNextDisableSearch, "on") ||
            t.push({
              icon: "search",
              iconSelected: "search_selected",
              id: "search",
              path: "/search",
            }),
          t.push({
            icon: "home",
            iconSelected: "home_selected",
            id: "main",
            path: "/",
          }),
          e.checkExperiment(m.WebKinopoiskLanding, "on") &&
            t.push({
              icon: "kinopoisk",
              iconSelected: "kinopoisk",
              id: "kinopoisk",
              path: "/kinopoisk",
            }),
          e.checkExperiment(m.WebNextNonMusicLanding, "on") &&
            t.push({
              icon: "non_music",
              iconSelected: "non_music",
              id: "non_music",
              path: "/non-music",
            }),
          e.checkExperiment(m.WebNextDisableCollection, "on") ||
            t.push({
              icon: "collections",
              iconSelected: "collections_selected",
              id: "collection",
              path: "/collection",
            }),
          t
        );
      };
      var eg = r(11769);
      let ep = () => {
          let e = (0, eg.usePathname)();
          return (0, b.useCallback)(
            (t) => ("/" === t ? t === e : e.startsWith(t)),
            [e],
          );
        },
        ey = (e) => {
          let t = (0, eg.useRouter)(),
            {
              href: r,
              isExternalLink: a,
              target: s,
              rel: i,
            } = H(null != e ? e : "");
          return (0, b.useCallback)(() => {
            e && (a ? window.open(r, s, i) : t.push(r));
          }, [r, a, i, t, s, e]);
        };
      ((i = g || (g = {})).TAB = "tab"), (i.BLOCK = "block");
      let ev = (e) => {
          let t = e.split(":")[0];
          return (
            ((null == t ? void 0 : t.includes(".")) &&
              (null == t ? void 0 : t.split(".").pop())) ||
            ""
          );
        },
        eE = () =>
          (0, b.useCallback)((e) => {
            {
              let t = window.history.state;
              window.history.replaceState(t, "", e);
            }
          }, []);
      ((n = p || (p = {})).SOURCE = "utm_source"), (n.MEDIUM = "utm_medium");
      let eP = { [p.SOURCE]: "desktop", [p.MEDIUM]: "copy_link" },
        ex = (e) => {
          let t = (0, I.useContainer)(),
            r = t.get(A.U5),
            a = U(r.oldWebHost),
            s = new URL("https://".concat(a).concat(e));
          return (
            Object.keys(eP).forEach((e) => {
              let t = eP[e];
              t && s.searchParams.append(e, t);
            }),
            s
          );
        },
        e_ = (e, t) => {
          let r = new URL(window.location.href),
            a = r.searchParams;
          return a.set(e, t), (r.search = a.toString()), r.toString();
        };
      var eS = r(76808),
        eT = r(48616);
      let eC = () => {
        let {
          sendSearchFeedback: e,
          id: t,
          type: r,
          blockPosition: a,
          position: s,
        } = (0, b.useContext)(eS.SearchFeedbackContext) || {};
        if (void 0 === t || void 0 === r || void 0 === a || void 0 === s)
          return {};
        let i =
            null == e
              ? void 0
              : e.bind(null, {
                  feedbackType: eT.kx.LIKE,
                  id: t,
                  type: r,
                  blockPosition: a,
                  position: s,
                }),
          n =
            null == e
              ? void 0
              : e.bind(null, {
                  feedbackType: eT.kx.NAVIGATE,
                  id: t,
                  type: r,
                  blockPosition: a,
                  position: s,
                }),
          o =
            null == e
              ? void 0
              : e.bind(null, {
                  feedbackType: eT.kx.PLAY,
                  id: t,
                  type: r,
                  blockPosition: a,
                  position: s,
                });
        return {
          sendLikeSearchFeedback: i,
          sendNavigateSearchFeedback: n,
          sendPlaySearchFeedback: o,
        };
      };
      var ew = r(15859),
        eb = r(98805),
        ek = r(96262),
        eR = r(76600),
        eA = r(61601),
        eI = r(14817);
      ((o = y || (y = {})).PLAYLIST = "playlist"),
        (o.ALBUM = "album"),
        ((c = v || (v = {})).OK = "ok"),
        (c.ERROR = "error"),
        ((l = E || (E = {})).LIKED_ALBUMS = "liked"),
        (l.UPCOMING_ALBUMS = "upcoming"),
        ((u = P || (P = {})).REJECT = "REJECT"),
        (u.UNSAFE = "UNSAFE"),
        ((d = x || (x = {})).ALBUM = "album"),
        (d.PODCAST = "podcast"),
        (d.ARTIST = "artist"),
        (d.TRACK = "track");
      var eO = r(317);
      let eL = (e) => {
        let t = e.filter((e) => !!e).join(" \xb7 ");
        return 0 === t.length ? null : t;
      };
      function eN(e) {
        let { items: t, mappedRawItems: r, page: a, pageSize: s } = e,
          i = a * s,
          n = 0;
        for (let e = i; e < i + s; e++) r[n] && (t[e] = r[n]), n++;
      }
      var eU = r(21875),
        eD = r.n(eU);
      let eF = "desktop-release-notes.",
        eH = (e) => {
          var t;
          return null !== (t = e.split(eF)[1]) && void 0 !== t ? t : "";
        },
        eM = (e) =>
          Object.keys(e)
            .filter((e) => e.startsWith(eF))
            .sort((e, t) => {
              var r, a;
              let s = null !== (r = eH(e)) && void 0 !== r ? r : "",
                i = null !== (a = eH(t)) && void 0 !== a ? a : "";
              return eD()(s, i);
            });
      var ej = r(677),
        eW = r(14616);
      ((h = _ || (_ = {})).KEY_P = "KeyP"),
        (h.KEY_F = "KeyF"),
        (h.KEY_D = "KeyD"),
        (h.KEY_L = "KeyL"),
        (h.KEY_J = "KeyJ"),
        (h.KEY_K = "KeyK"),
        (h.KEY_H = "KeyH"),
        (h.KEY_M = "KeyM"),
        (h.KEY_N = "KeyN"),
        (h.KEY_S = "KeyS"),
        (h.KEY_R = "KeyR"),
        (h.SPACE = "Space"),
        (h.ARROW_LEFT = "ArrowLeft"),
        (h.ARROW_RIGHT = "ArrowRight"),
        (h.ARROW_UP = "ArrowUp"),
        (h.ARROW_DOWN = "ArrowDown"),
        (h.COMMA = "Comma"),
        (h.PERIOD = "Period"),
        (h.MINUS = "Minus"),
        (h.EQUAL = "Equal"),
        (h.DIGIT_0 = "Digit0");
      let eB = (e) =>
          !!(
            e.hasAttribute("contenteditable") ||
            ("INPUT" === e.tagName && "range" !== e.getAttribute("type")) ||
            ["TEXTAREA", "SELECT", "OPTION"].includes(e.tagName)
          ),
        eq = (e) => "INPUT" === e.tagName && "range" === e.getAttribute("type"),
        eY = (e, t) => {
          if (!(e.target instanceof Element)) return !1;
          let r = e.target,
            a = t.code;
          return !!(
            eB(r) ||
            (eq(r) &&
              (a === _.ARROW_LEFT ||
                a === _.ARROW_RIGHT ||
                a === _.ARROW_UP ||
                a === _.ARROW_DOWN))
          );
        };
      var eV = r(80830);
      let eK = {
        [eV.y.TOGGLE_PLAY]: {},
        [eV.y.TOGGLE_MUTE]: {},
        [eV.y.INCREASE_VOLUME]: { repeatable: !0 },
        [eV.y.DECREASE_VOLUME]: { repeatable: !0 },
        [eV.y.LIKE]: {},
        [eV.y.DISLIKE]: {},
        [eV.y.MOVE_FORWARD]: { repeatable: !0 },
        [eV.y.MOVE_BACKWARD]: { repeatable: !0 },
        [eV.y.SLIDE_FORWARD]: { repeatable: !0 },
        [eV.y.SLIDE_BACKWARD]: { repeatable: !0 },
        [eV.y.TOGGLE_REPEAT]: {},
        [eV.y.TOGGLE_SHUFFLE]: {},
      };
      class e$ {
        constructor(e) {
          (0, D._)(this, "code", void 0),
            (0, D._)(this, "ctrlKey", void 0),
            (0, D._)(this, "shiftKey", void 0),
            (0, D._)(this, "altKey", void 0),
            (0, D._)(this, "metaKey", void 0),
            (this.code = e.code),
            (this.altKey = !!e.altKey),
            (this.ctrlKey = !!e.ctrlKey),
            (this.shiftKey = !!e.shiftKey),
            (this.metaKey = !!e.metaKey);
        }
      }
      class eG {
        addShortcutsListener(e, t) {
          let r = this.listeners[e];
          r && (r.handler = t);
        }
        removeShortcutsListener(e) {
          let t = this.listeners[e];
          t && delete t.handler;
        }
        disable(e) {
          this.setListenersDisabled(!0, e);
        }
        enable(e) {
          this.setListenersDisabled(!1, e);
        }
        setListenersDisabled(e, t) {
          if (t) {
            let r = this.listeners[t];
            r && (r.disabled = e);
            return;
          }
          Object.values(this.listeners).forEach((t) => {
            t.disabled = e;
          });
        }
        listen() {
          window.addEventListener("keydown", (e) => {
            var t, r;
            let { action: a, shortcut: s } =
              null !== (r = this.store[e.code]) && void 0 !== r ? r : {};
            if (!a || !s || !(0, eW.Z)(s, new e$(e)) || eY(e, s)) return;
            let i = this.listeners[a];
            i &&
              !i.disabled &&
              (i.repeatable || !e.repeat) &&
              (e.preventDefault(),
              null === (t = i.handler) || void 0 === t || t.call(i));
          });
        }
        constructor(e) {
          (0, D._)(this, "store", void 0),
            (0, D._)(this, "listeners", eK),
            (this.store = e.getFlatStore()),
            this.listen();
        }
      }
      let ez = {
        [eV.y.TOGGLE_PLAY]: [new e$({ code: _.KEY_K })],
        [eV.y.TOGGLE_MUTE]: [new e$({ code: _.KEY_M })],
        [eV.y.INCREASE_VOLUME]: [new e$({ code: _.ARROW_UP })],
        [eV.y.DECREASE_VOLUME]: [new e$({ code: _.ARROW_DOWN })],
        [eV.y.LIKE]: [new e$({ code: _.KEY_F })],
        [eV.y.DISLIKE]: [new e$({ code: _.KEY_D })],
        [eV.y.MOVE_FORWARD]: [new e$({ code: _.KEY_N })],
        [eV.y.MOVE_BACKWARD]: [new e$({ code: _.KEY_P })],
        [eV.y.SLIDE_FORWARD]: [
          new e$({ code: _.ARROW_RIGHT }),
          new e$({ code: _.KEY_L }),
        ],
        [eV.y.SLIDE_BACKWARD]: [
          new e$({ code: _.ARROW_LEFT }),
          new e$({ code: _.KEY_J }),
        ],
        [eV.y.TOGGLE_REPEAT]: [new e$({ code: _.KEY_R })],
        [eV.y.TOGGLE_SHUFFLE]: [new e$({ code: _.KEY_S })],
      };
      class eQ {
        getFlatStore() {
          let e = {};
          for (let [t, r] of Object.entries(this.store))
            r.forEach((r) => {
              e[r.code] = { action: t, shortcut: r };
            });
          return e;
        }
        constructor() {
          (0, D._)(this, "store", ez);
        }
      }
      var eX = r(25701),
        eZ = r(88734),
        eJ = r(28239),
        e0 = r(90565);
      let e1 = {
        [eV.y.TOGGLE_PLAY]: ["K"],
        [eV.y.TOGGLE_MUTE]: ["M"],
        [eV.y.INCREASE_VOLUME]: ["↑"],
        [eV.y.DECREASE_VOLUME]: ["↓"],
        [eV.y.LIKE]: ["F"],
        [eV.y.DISLIKE]: ["D"],
        [eV.y.MOVE_FORWARD]: ["N"],
        [eV.y.MOVE_BACKWARD]: ["P"],
        [eV.y.SLIDE_FORWARD]: ["→", "L"],
        [eV.y.SLIDE_BACKWARD]: ["←", "J"],
        [eV.y.TOGGLE_REPEAT]: ["R"],
        [eV.y.TOGGLE_SHUFFLE]: ["S"],
      };
      r(90555), r(64421);
      let e8 = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
        e6 = (e, t) => {
          let r = e8(e, 3600),
            a = e8(e - 3600 * r, 60),
            s = e - 3600 * r - 60 * a,
            i = e8(t || e, 3600) > 0,
            n = [a, s];
          return (
            i && n.unshift(r),
            n.map((e) => String(e).padStart(2, "0")).join(":")
          );
        };
      var e2 = r(10081);
      let e9 = "system",
        e3 = { [e2.Q.Dark]: "ym-dark-theme", [e2.Q.Light]: "ym-light-theme" };
      var e5 = r(64632),
        e4 = r(96999);
      let e7 = (e) => {
          e &&
            (document.body.classList.remove(...Object.values(e3)),
            Object.values(e2.Q).includes(e) &&
              document.body.classList.add(e3[e]));
        },
        te = (e, t) => {
          switch (e) {
            case e2.Q.Dark:
            case e2.Q.Light:
              return e;
            case e9:
              return t;
            default:
              return e2.Q.Dark;
          }
        };
      var tt = r(70012);
      let tr = (e) => ({
          r: parseInt(e.slice(1, 3), 16),
          g: parseInt(e.slice(3, 5), 16),
          b: parseInt(e.slice(5, 7), 16),
        }),
        ta = (e) => {
          if (e) {
            let { r: t, g: r, b: a } = tr(e);
            return "rgba(".concat(t, ", ").concat(r, ", ").concat(a, ", 0.7)");
          }
        },
        ts = (e) => {
          var t, r;
          return "string" == typeof (null == e ? void 0 : e.average)
            ? null == e
              ? void 0
              : e.average
            : "object" == typeof (null == e ? void 0 : e.average) &&
                "string" ==
                  typeof (null == e
                    ? void 0
                    : null === (t = e.average) || void 0 === t
                      ? void 0
                      : t.color)
              ? null == e
                ? void 0
                : null === (r = e.average) || void 0 === r
                  ? void 0
                  : r.color
              : "";
        },
        ti = (e) => {
          let { r: t, g: r, b: a } = tr(e);
          (t /= 255), (r /= 255), (a /= 255);
          let s = Math.min(t, r, a),
            i = Math.max(t, r, a),
            n = i - s,
            o = 0,
            c = 0,
            l = (s + i) / 2;
          return (
            (o = Math.round(
              60 *
                (o =
                  0 === n
                    ? 0
                    : i === t
                      ? ((r - a) / n) % 6
                      : i === r
                        ? (a - t) / n + 2
                        : (t - r) / n + 4),
            )) < 0 && (o += 360),
            0 !== n && (c = n / (1 - Math.abs(2 * l - 1))),
            {
              h: o,
              s: Number((100 * c).toFixed(1)),
              l: Number((100 * l).toFixed(1)),
            }
          );
        };
    },
    94175: function (e, t, r) {
      "use strict";
      var a, s, i, n;
      r.d(t, {
        A: function () {
          return a;
        },
        t: function () {
          return s;
        },
      }),
        ((i = a || (a = {}))[(i.Mobile = 768)] = "Mobile"),
        (i[(i.Desktop = 1440)] = "Desktop"),
        ((n = s || (s = {})).Mobile = "Mobile"),
        (n.Desktop = "Desktop");
    },
    77617: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          LayoutContext: function () {
            return s;
          },
          useLayout: function () {
            return i;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({
          contentRef: null,
          setContentRef: () => {},
        }),
        i = () => (0, a.useContext)(s);
    },
    56472: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SplashScreenContext: function () {
            return s;
          },
          useSplashScreen: function () {
            return i;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)({ isVisible: !1 }),
        i = () => (0, a.useContext)(s);
    },
    77889: function (e, t, r) {
      "use strict";
      r.d(t, {
        w: function () {
          return i;
        },
      });
      var a = r(75402),
        s = r(75563);
      let i = () => {
        let e = (0, s.useContainer)();
        return e.get(a.P0);
      };
    },
    29751: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useRumPage: function () {
            return i;
          },
        });
      var a = r(11769),
        s = r(99616);
      let i = (e) => {
        let t = (0, a.usePathname)(),
          [r, i] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          window.Ya.Rum.spa.makeSpaSubPage(t),
            window.Ya.Rum.spa.startDataLoading(t);
        }),
          (0, s.useEffect)(() => {
            {
              let a = !!window.Ya.Rum.spa.getLastSpaSubPage(t);
              a &&
                e &&
                !r &&
                (window.Ya.Rum.spa.finishDataLoading(t),
                window.Ya.Rum.spa.startDataRendering(t),
                i(!0));
            }
          }, [e, r, t]);
      };
    },
    69991: function (e, t, r) {
      "use strict";
      var a, s;
      r.d(t, {
        W: function () {
          return a;
        },
      }),
        ((s = a || (a = {})).INFO = "INFO"),
        (s.ERROR = "ERROR"),
        (s.APPLICATION_UPDATE = "APPLICATION_UPDATE"),
        (s.FULLSCREEN_INFO = "FULLSCREEN_INFO"),
        (s.FULLSCREEN_ERROR = "FULLSCREEN_ERROR");
    },
    86388: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return o;
        },
      });
      var a = r(99616),
        s = r(48769),
        i = r(69991);
      let n = {
          [i.W.INFO]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [i.W.ERROR]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [i.W.FULLSCREEN_INFO]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [i.W.FULLSCREEN_ERROR]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [i.W.APPLICATION_UPDATE]: {
            closeOnClick: !1,
            draggable: !1,
            single: !0,
            important: !0,
          },
        },
        o = () => {
          let e = (0, a.useCallback)((e, t) => {
            let { containerId: r, ...a } = t;
            (0, s.notification)({
              message: e,
              options: { ...n[r], containerId: r, ...a },
            });
          }, []);
          return { notify: e, dismiss: s.dismiss };
        };
    },
    28307: function (e, t, r) {
      "use strict";
      function a() {
        return window.PLATFORM;
      }
      r.d(t, {
        X: function () {
          return a;
        },
      });
    },
    19327: function (e, t, r) {
      "use strict";
      r.d(t, {
        S: function () {
          return i;
        },
      });
      var a = r(14817),
        s = r(28307);
      function i() {
        let e = "";
        {
          let t = (0, s.X)();
          switch (t) {
            case a.t.MACOS:
              e = "uz0zSpaYCLmgk6C7YLdo5F";
              break;
            case a.t.WINDOWS:
              e = "kzqU4XhfCaY6B6JTHODeq5";
          }
        }
        return e;
      }
    },
    39351: function (e, t, r) {
      "use strict";
      function a() {
        return window.VERSION;
      }
      r.d(t, {
        b: function () {
          return a;
        },
      });
    },
    76808: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SearchFeedbackContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)(null);
    },
    25701: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ShortcutsContext: function () {
            return s;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)(null);
    },
    90565: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SHORTCUTS_LIST: function () {
            return n;
          },
        });
      var a = r(8759),
        s = r(2814),
        i = r(80830);
      let n = [
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.play-pause" }),
          shortcutsAction: i.y.TOGGLE_PLAY,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.mute" }),
          shortcutsAction: i.y.TOGGLE_MUTE,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.skip-forward" }),
          shortcutsAction: i.y.SLIDE_FORWARD,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.rewind" }),
          shortcutsAction: i.y.SLIDE_BACKWARD,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.volume-up" }),
          shortcutsAction: i.y.INCREASE_VOLUME,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.volume-down" }),
          shortcutsAction: i.y.DECREASE_VOLUME,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.like" }),
          shortcutsAction: i.y.LIKE,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.unlike" }),
          shortcutsAction: i.y.DISLIKE,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, {
            id: "shortcuts.switch-repeat-mode",
          }),
          shortcutsAction: i.y.TOGGLE_REPEAT,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, {
            id: "shortcuts.switch-shuffle-mode",
          }),
          shortcutsAction: i.y.TOGGLE_SHUFFLE,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.next-track" }),
          shortcutsAction: i.y.MOVE_FORWARD,
        },
        {
          formattedMessage: (0, a.jsx)(s.Z, { id: "shortcuts.previous-track" }),
          shortcutsAction: i.y.MOVE_BACKWARD,
        },
      ];
    },
    80830: function (e, t, r) {
      "use strict";
      var a, s;
      r.d(t, {
        y: function () {
          return a;
        },
      }),
        ((s = a || (a = {})).TOGGLE_PLAY = "TOGGLE_PLAY"),
        (s.TOGGLE_MUTE = "TOGGLE_MUTE"),
        (s.INCREASE_VOLUME = "INCREASE_VOLUME"),
        (s.DECREASE_VOLUME = "DECREASE_VOLUME"),
        (s.LIKE = "LIKE"),
        (s.DISLIKE = "DISLIKE"),
        (s.MOVE_FORWARD = "MOVE_FORWARD"),
        (s.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (s.SLIDE_FORWARD = "SLIDE_FORWARD"),
        (s.SLIDE_BACKWARD = "SLIDE_BACKWARD"),
        (s.TOGGLE_REPEAT = "TOGGLE_REPEAT"),
        (s.TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE");
    },
    28239: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useDisableShortcuts: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(88734);
      let i = (e) => {
        let t = (0, s.useShortcuts)();
        (0, a.useEffect)(
          () => (
            e ? null == t || t.disable() : null == t || t.enable(),
            () => {
              null == t || t.enable();
            }
          ),
        );
      };
    },
    88734: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useShortcuts: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(25701);
      let i = () => {
        let e = (0, a.useContext)(s.ShortcutsContext);
        return e;
      };
    },
    15859: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          MediaConfigControllerContext: function () {
            return s;
          },
          useMediaConfigController: function () {
            return i;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)(null);
      function i() {
        return (0, a.useContext)(s);
      }
    },
    96262: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          usePlayableContext: function () {
            return o;
          },
        });
      var a = r(99616),
        s = r(86502),
        i = r(34575),
        n = r(98805);
      let o = (e) => {
        var t, r;
        let { playContextParams: o, entityId: c, sonataStatus: l } = e,
          u = (0, n.useSonata)(),
          { sonataState: d } = (0, i.useStore)(),
          h = !1,
          f = !1,
          { contextData: m } = o,
          {
            type: g,
            meta: { id: p },
          } = m,
          y = d.contextId === String(p) && g === d.contextType;
        f =
          (h = c
            ? c ===
              (null === (r = d.entityMeta) || void 0 === r
                ? void 0
                : r.idWithContext)
            : y) && l === s.Xz.PLAYING;
        let v = (0, a.useCallback)(() => {
            var e;
            let t =
              null === (e = d.entityMeta) || void 0 === e
                ? void 0
                : e.idWithContext;
            if (void 0 !== c && c === t) {
              null == u || u.togglePause();
              return;
            }
            null == u || u.playContext(o);
          }, [
            u,
            c,
            o,
            null === (t = d.entityMeta) || void 0 === t
              ? void 0
              : t.idWithContext,
          ]),
          E = (0, a.useCallback)(() => {
            null == u || u.setProgress(0);
          }, [u]);
        return { isPlaying: f, isCurrent: h, togglePlay: v, restartPlay: E };
      };
    },
    76600: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          usePlayableVibeContext: function () {
            return y;
          },
        });
      var a = r(8759),
        s = r(99616),
        i = r(65244),
        n = r(57413),
        o = r(86502),
        c = r(62923),
        l = r(96033),
        u = r(69991),
        d = r(86388),
        h = r(34575),
        f = r(317),
        m = r(14616);
      let g = (e, t) => (0, m.Z)((0, n.$k)(e), (0, n.$k)(t));
      var p = r(98805);
      let y = (e) => {
        var t, r, m;
        let { seeds: y = [f.s], pageIdForFrom: v, blockIdForFrom: E } = e,
          P = (0, l.x)({ pageId: v, blockId: E }),
          { formatMessage: x } = (0, i.Z)(),
          _ = (0, p.useSonata)(),
          { notify: S } = (0, d.d)(),
          {
            sonataState: T,
            vibe: C,
            modals: { fullscreenPlayerModal: w },
          } = (0, h.useStore)(),
          [b, k] = (0, s.useState)(null),
          R = w.isOpened ? u.W.FULLSCREEN_ERROR : u.W.ERROR;
        (0, s.useEffect)(() => {
          let e =
            null == _
              ? void 0
              : _.state.currentContext.onChange(() => {
                  (0, n.xA)(_.state.currentContext.value)
                    ? k(_.state.currentContext.value)
                    : k(null);
                });
          return () => {
            null == e || e();
          };
        }, [_]);
        let A = (0, s.useCallback)(
            async (e) => {
              try {
                await (null == _
                  ? void 0
                  : _.playContext({
                      contextData: {
                        type: n.Ak.Vibe,
                        meta: { id: (0, n.$k)(e) },
                        seeds: e,
                        from: P,
                        includeTracksInResponse: !0,
                      },
                      loadContextMeta: !0,
                    }));
              } catch (e) {
                S(
                  (0, a.jsx)(c.BaseNotificationError, {
                    error: x({ id: "vibe-errors.start-vibe" }),
                  }),
                  { containerId: R },
                );
              }
            },
            [_, P, x, S, R],
          ),
          I = (0, s.useCallback)(
            async (e) => {
              if (_ && b)
                try {
                  await b.setSettings(
                    e,
                    _.state.playerState,
                    _.state.queueState,
                  );
                } catch (e) {
                  S(
                    (0, a.jsx)(c.BaseNotificationError, {
                      error: x({ id: "vibe-errors.apply-vibe-setting" }),
                    }),
                    { containerId: R },
                  );
                }
            },
            [x, S, _, b, R],
          ),
          O = (0, s.useCallback)(
            async (e) => {
              if (_)
                try {
                  await _.restartContext({ playAfterRestart: e });
                } catch (e) {
                  S(
                    (0, a.jsx)(c.BaseNotificationError, {
                      error: x({ id: "error-messages.something-went-wrong" }),
                    }),
                    { containerId: R },
                  );
                }
            },
            [x, S, _, R],
          ),
          L = !!b;
        (0, s.useEffect)(() => {
          var e, t;
          L &&
            (null == b
              ? void 0
              : null === (e = b.data.meta.session) || void 0 === e
                ? void 0
                : e.wave) &&
            C.setVibe(
              null == b
                ? void 0
                : null === (t = b.data.meta.session) || void 0 === t
                  ? void 0
                  : t.wave,
            );
        }, [
          L,
          null == b
            ? void 0
            : null === (t = b.data.meta.session) || void 0 === t
              ? void 0
              : t.wave,
          C,
        ]);
        let N =
            L &&
            g(
              null !==
                (m =
                  null === (r = C.meta) || void 0 === r ? void 0 : r.seeds) &&
                void 0 !== m
                ? m
                : [],
              y,
            ),
          U = N && T.status === o.Xz.PLAYING,
          D = N && T.status === o.Xz.PAUSED,
          F = (0, s.useCallback)(async () => {
            C.setIsLoading(!0), await A(y), C.setIsLoading(!1);
          }, [A, y, C]),
          H = (0, s.useCallback)(
            async (e, t) => {
              var r;
              C.setIsLoading(!0);
              let a = [];
              (a =
                C.meta &&
                Array.isArray(
                  null === (r = C.meta) || void 0 === r ? void 0 : r.seeds,
                )
                  ? C.meta.seeds.includes(e)
                    ? C.meta.seeds.filter((t) => t !== e)
                    : t
                      ? [
                          e,
                          ...C.meta.seeds.filter((e) => e.includes("setting")),
                        ]
                      : [...C.meta.seeds, e]
                  : [e]),
                b ? (await I(a), await O(!0)) : await A(a),
                C.setIsLoading(!1);
            },
            [O, I, A, C, b],
          ),
          M = (0, s.useCallback)(async () => {
            C.setIsLoading(!0),
              b ? (await I([f.s]), await O(!0)) : await A([f.s]),
              C.setIsLoading(!1);
          }, [A, O, I, b, C]);
        return {
          isVibeContext: L,
          isPlaying: U,
          isPaused: D,
          isCurrent: N,
          togglePlay: F,
          applySetting: H,
          resetSettings: M,
        };
      };
    },
    98805: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SonataContext: function () {
            return s;
          },
          useSonata: function () {
            return i;
          },
        });
      var a = r(99616);
      let s = (0, a.createContext)(null);
      function i() {
        return (0, a.useContext)(s);
      }
    },
    34575: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          StoreContext: function () {
            return i;
          },
          useStore: function () {
            return n;
          },
        });
      var a = r(63278),
        s = r(99616);
      let i = (0, s.createContext)(null);
      function n() {
        let e = (0, s.useContext)(i);
        if (null === e)
          throw new a.y("Store cannot be null, please add a context provider", {
            code: "E_CONTEXT_STORE_NULL",
          });
        return e;
      }
    },
    70012: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return i;
        },
        i: function () {
          return s;
        },
      });
      var a = r(10081);
      let s = () =>
          window.matchMedia("(prefers-color-scheme: ".concat(a.Q.Light, ")")),
        i = () => {
          let e = s();
          return (null == e ? void 0 : e.matches) ? a.Q.Light : a.Q.Dark;
        };
    },
    10081: function (e, t, r) {
      "use strict";
      var a, s;
      r.d(t, {
        Q: function () {
          return a;
        },
      }),
        ((s = a || (a = {})).Dark = "dark"),
        (s.Light = "light");
    },
    96999: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          usePreferredColorScheme: function () {
            return i;
          },
        });
      var a = r(99616),
        s = r(70012);
      let i = () => {
        let [e, t] = (0, a.useState)(s.Q),
          r = (0, a.useCallback)(() => {
            t((0, s.Q)());
          }, []);
        return (
          (0, a.useEffect)(() => {
            let e = (0, s.i)();
            return (
              null == e || e.addEventListener("change", r),
              () => {
                null == e || e.removeEventListener("change", r);
              }
            );
          }, [r]),
          e
        );
      };
    },
    64632: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ThemeContext: function () {
            return i;
          },
          useTheme: function () {
            return n;
          },
        });
      var a = r(99616),
        s = r(10081);
      let i = (0, a.createContext)({ theme: s.Q.Dark, setTheme: () => {} }),
        n = () => (0, a.useContext)(i);
    },
    61601: function (e, t, r) {
      "use strict";
      var a, s;
      r.d(t, {
        G: function () {
          return a;
        },
      }),
        ((s = a || (a = {})).IDLE = "IDLE"),
        (s.PENDING = "PENDING"),
        (s.RESOLVE = "RESOLVE"),
        (s.REJECT = "REJECT");
    },
    14817: function (e, t, r) {
      "use strict";
      var a, s;
      r.d(t, {
        t: function () {
          return a;
        },
      }),
        ((s = a || (a = {})).MACOS = "darwin"),
        (s.WINDOWS = "win32"),
        (s.LINUX = "linux");
    },
    63198: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return s;
        },
      });
      var a,
        s,
        i = r(37186);
      ((a = s || (s = {})).Theme = "theme"),
        (a.WebNextNavigation = "WebNextNavigation"),
        (a.AllowAnalyticsLogs = "AllowAnalyticsLogs"),
        (a.NavbarCollapsed = "navbarCollapsed"),
        (a.SessionHistoryState = "sessionHistoryState"),
        (a.SessionId = "Session_id"),
        (a.SessionId2 = "sessionid2"),
        (a.YmPlayerRepeatMode = "ymPlayerRepeatMode"),
        (a.YmPlayerVolume = "ymPlayerVolume"),
        (a.YmPlayerPrevVolume = "ymPlayerPrevVolume"),
        (a.YmPlayerShuffle = "ymPlayerShuffle"),
        (a.YmPlayerQuality = "ymPlayerQuality"),
        (a.YandexLogin = "yandex_login"),
        (a.Future = "future"),
        (a.Oauth = "oauth"),
        (a.OauthState = "oauthState"),
        (a.ArtistDonationButtonOnbordingShowed =
          "ArtistDonationButtonOnbordingShowed"),
        (a.DisallowDeeplinksRedirect = "DisallowDeeplinksRedirect"),
        (a[(a.SavedUserLanguage = i.L)] = "SavedUserLanguage"),
        (a.EnableChangingLanguage = "EnableChangingLanguage"),
        (a.ExEx = "ExEx"),
        (a.UseNewCorrespondenceBetweenQualityParams =
          "useNewCorrespondenceBetweenQualityParams");
    },
    68363: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return a;
        },
      });
      let a = "{tld}";
    },
    58486: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return s;
        },
      });
      var a = r(68363);
      let s = (e, t) => e.replace(a.M, t);
    },
    317: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return s;
        },
        s: function () {
          return a;
        },
      });
      let a = "user:onyourwave",
        s = ["activity"];
    },
    41058: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          BaseNotification: function () {
            return h;
          },
        });
      var a = r(8759),
        s = r(35338),
        i = r(99616),
        n = r(65244),
        o = r(15527),
        c = r(14581),
        l = r(96437),
        u = r(79423),
        d = r.n(u);
      let h = (e) => {
        let {
            message: t,
            closeToast: r,
            cover: u,
            coverRadius: h = "s",
            className: f,
          } = e,
          { formatMessage: m } = (0, n.Z)();
        return (0, a.jsxs)(l.Paper, {
          radius: "l",
          className: (0, s.W)(d().root, f),
          children: [
            (0, a.jsxs)("div", {
              className: (0, s.W)(d().message, {
                [d().message_withCover]: (0, i.isValidElement)(u),
              }),
              children: [
                (0, i.isValidElement)(u) &&
                  (0, a.jsx)(l.Paper, {
                    className: d().cover,
                    radius: h,
                    children: u,
                  }),
                t,
              ],
            }),
            r &&
              (0, a.jsx)("div", {
                className: d().controls,
                children: (0, a.jsx)(o.z, {
                  variant: "text",
                  color: "secondary",
                  withRipple: !1,
                  onClick: r,
                  className: d().button,
                  "aria-label": m({ id: "interface-actions.close" }),
                  icon: (0, a.jsx)(c.J, {
                    className: d().icon,
                    size: "xs",
                    variant: "close",
                  }),
                }),
              }),
          ],
        });
      };
    },
    62923: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          BaseNotificationError: function () {
            return u;
          },
        });
      var a = r(8759),
        s = r(35338),
        i = r(99616),
        n = r(1918),
        o = r(41058),
        c = r(60275),
        l = r.n(c);
      let u = (e) => {
        let { error: t, closeToast: r, className: c } = e,
          u = (0, i.useMemo)(
            () =>
              (0, a.jsx)(n.Caption, {
                className: l().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: t,
              }),
            [t],
          );
        return (0, a.jsx)(o.BaseNotification, {
          className: (0, s.W)(l().root, c),
          message: u,
          closeToast: r,
        });
      };
    },
    93552: function (e) {
      e.exports = {
        root: "NavigationControls_root__uCVfX",
        button: "NavigationControls_button__g50cI",
      };
    },
    79423: function (e) {
      e.exports = {
        root: "BaseNotification_root__FwcCd",
        message: "BaseNotification_message__hjf_Z",
        message_withCover: "BaseNotification_message_withCover__AoMQT",
        cover: "BaseNotification_cover__vpBEb",
        controls: "BaseNotification_controls__wl3PO",
        icon: "BaseNotification_icon__WfvV3",
        button: "BaseNotification_button__Ovwwo",
      };
    },
    60275: function (e) {
      e.exports = {
        root: "BaseNotificationError_root__FfGUZ",
        message: "BaseNotificationError_message___W_xy",
      };
    },
    66936: function (e, t, r) {
      "use strict";
      r.d(t, {
        S1: function () {
          return u;
        },
        SG: function () {
          return l;
        },
        wE: function () {
          return c;
        },
      });
      var a,
        s = r(99616),
        i = {
          3097: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIntersectionObserver =
                t.createIntersectionObserver =
                t.getElementNameByDataAttribute =
                t.isInViewportNow =
                t.defaultOptions =
                  void 0);
            let a = r(810),
              s = "undefined" == typeof window,
              i = !s,
              { innerWidth: n = 0, innerHeight: o = 0 } = s ? {} : window;
            function c(e) {
              let {
                top: t,
                right: r,
                bottom: a,
                left: s,
              } = e.getBoundingClientRect();
              return (
                ((t >= 0 && t <= o) || (a >= 0 && a <= o)) &&
                ((s >= 0 && s <= n) || (r >= 0 && r <= n))
              );
            }
            function l(e, t = "data-intersection-property-id") {
              return e?.getAttribute?.(t) ?? e.attributes[0];
            }
            function u(e, t) {
              return new IntersectionObserver((t) => {
                t.forEach(e);
              }, t);
            }
            (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
              (t.isInViewportNow = c),
              (t.getElementNameByDataAttribute = l),
              (t.createIntersectionObserver = u),
              (t.useIntersectionObserver = function (e, r, n) {
                let [
                    { freezeOnceVisible: o, preflightCheck: d, ...h },
                    f = !1,
                  ] =
                    "boolean" == typeof r || void 0 === r
                      ? [t.defaultOptions, r]
                      : [{ ...t.defaultOptions, ...r }, n],
                  [m, g] = (0, a.useState)({}),
                  p = (0, a.useMemo)(
                    () =>
                      f || s
                        ? null
                        : u((e) => {
                            let t = l(e.target);
                            t &&
                              p &&
                              (e.isIntersecting
                                ? g((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !0 },
                                  }))
                                : g((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !1 },
                                  })),
                              o &&
                                p &&
                                e.isIntersecting &&
                                p.unobserve(e.target));
                          }, h),
                    [f],
                  );
                return (
                  i &&
                    (0, a.useLayoutEffect)(
                      () => (
                        p &&
                          !f &&
                          e.forEach((e) => {
                            if (e.current) {
                              let t = !1;
                              if (d && (t = c(e.current))) {
                                let t = l(e.current);
                                g((e) => ({
                                  ...e,
                                  [t]: { isIntersecting: !0 },
                                }));
                              }
                              t || p.observe(e.current);
                            }
                          }),
                        () => {
                          p && p.disconnect();
                        }
                      ),
                      [f, p],
                    ),
                  m
                );
              });
          },
          810: (e) => {
            e.exports = a || (a = r.t(s, 2));
          },
        },
        n = {},
        o = (function e(t) {
          var r = n[t];
          if (void 0 !== r) return r.exports;
          var a = (n[t] = { exports: {} });
          return i[t](a, a.exports, e), a.exports;
        })(3097);
      o.__esModule;
      var c = o.createIntersectionObserver;
      o.defaultOptions;
      var l = o.getElementNameByDataAttribute;
      o.isInViewportNow;
      var u = o.useIntersectionObserver;
    },
    15527: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return u;
        },
      });
      var a,
        s,
        i = r(99616),
        n = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      s = "";
                    if ("string" == typeof t || "number" == typeof t) s += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (s && (s += " "), (s += a));
                      else for (r in t) t[r] && (s && (s += " "), (s += r));
                    }
                    return s;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => s });
            let s = a;
          },
          1001: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "cpeagBA1_PblpJn8Xgtv",
              root_withoutBorder: "qU2apWBO1yyEK0lZ3lPO",
              root_radius_xs: "MmZbSs387gu2qrJ1lDWd",
              root_radius_s: "mlcrraysn7mW6xrBXSBF",
              root_radius_m: "dgV08FKVLZKFsucuiryn",
              root_radius_l: "S97_5dtzhpxo_amtfYRg",
              root_radius_xl: "nNBJnDHRlyLTniWosJhk",
              root_radius_xxxl: "zIMibMuH7wcqUoW7KH1B",
              root_radius_round: "uwk3hfWzB2VT7kE13SQk",
              root_size: "IlG7b1K0AD7E7AMx6F5p",
              root_size_default: "C_QGmfTz6UFX93vfPt6Z",
              root_size_xxxs: "eQt33MLDiQ6DRSuLaYEp",
              root_size_xxs: "oR11LfCBVqMbUJiAgknd",
              root_size_xs: "j1jXIVckFgZECecFzZMe",
              root_size_s: "WtFdWDF44egSVM_YiMUX",
              root_size_m: "Y2uqxoU7xa_AZ8FUCVOW",
              root_size_l: "SGYcNjvjmMsXeEVGUV2Z",
              root_icon_left: "kc5CjvU5hT9KEj0iTt3C",
              root_icon_right: "et24Jf7pT_X9Fvc7TznR",
              root_primary: "fXlFz1qMkliFUWOkHo8T",
              root_primary_default: "_eTRQi5ADZCUvUKMZqJU",
              ripple: "spMT3NcRD9Yb0ntNaNct",
              root_primary_outline: "fCUSh2B0Ye9kEvceE8zc",
              root_primary_text: "qlPp6CSQQEMVZPqtqLiQ",
              root_primary_withHover: "KZF6_4K1p_Y_GMIAxaAn",
              root_primary_withHover_default: "rWukOKAJh5Ga7JuIp62L",
              root_primary_withHover_outline: "fdwWCJKgUqml5wNqrRcN",
              root_primary_withHover_text: "IgYbZLnYjW0nMahgpkus",
              root_secondary: "_T4p_w41oaq6L4sztSdw",
              root_secondary_default: "iJVAJMgccD4vj4E4o068",
              root_secondary_outline: "pnM3iSP9keZOELI2oohr",
              root_secondary_text: "UDMYhpDjiAFT3xUx268O",
              root_secondary_withHover: "qUbrkhZIOVrvM0roV1QF",
              root_secondary_withHover_default: "nHWc2sto1C6Gm0Dpw_l0",
              root_secondary_withHover_outline: "i5WuBm5mfG0mflk_1jH_",
              root_secondary_withHover_text: "HbaqudSqu7Q3mv3zMPGr",
              root_plus: "ixLRsIJ2FvXO2k04n_QY",
              root_plus_default: "yRHwHzEGfDgRXGzYJqw2",
              root_plus_outline: "e777irPFmyQFFrURLF_U",
              root_plus_text: "vRqDhvmt3gt8TFp45_Zw",
              root_plus_withHover: "TZif6q3I2RwBEYXwK_iA",
              root_plus_withHover_default: "k3DhvmzpnM_Fb9oFdE4q",
              root_plus_withHover_outline: "RiDWYwGIxqbrUPR699DM",
              root_plus_withHover_text: "hC_mMCzWjkTn2j9xZzGc",
              block: "BbCxxIjBGupN28bq2lSP",
              iconContainer: "NfB1qSw6DnoSwTr9I5mE",
              iconContainer_block: "cM0M40YHieFFCTYRgOZa",
              iconOnly: "kprKZx99igczv4y5NX8O",
              flexIcon: "WsKeF73pWotx9W1tWdYY",
              icon: "J9wTKytjOWG73QMoN5WP",
              icon_position_left: "elJfazUBui03YWZgHCbW",
              icon_position_right: "RBoEbyJKP5rEtLsXM1ji",
              icon_withButtonSize: "cE17_kCWJgx8kzQEkeVr",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              s = Symbol.for("react.element"),
              i = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                i = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (i[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === i[a] && (i[a] = t[a]);
              return {
                $$typeof: s,
                type: e,
                key: l,
                ref: u,
                props: i,
                _owner: o.current,
              };
            }
            (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          1845: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let r = (e) => `https://${e.replace(/^(https*:\/\/)/, "")}`;
            t.createAvatarUrl = (e, t, a) => {
              let s;
              return (
                (s = "orig" === t ? "orig" : a ? `m${t}x${t}` : `${t}x${t}`),
                r(e.replace("%%", s))
              );
            };
          },
          9665: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, r) {
                let a = r ?? e.currentTarget,
                  s = document.createElement("span"),
                  i = Math.max(a.clientWidth, a.clientHeight),
                  n = i / 2,
                  o = a.getBoundingClientRect(),
                  c =
                    0 === e.clientX
                      ? Math.round(o.width / 2)
                      : e.clientX - o.left,
                  l =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (s.style.width = `${i}px`),
                  (s.style.height = `${i}px`),
                  (s.style.left = 0 === e.clientX ? "0px" : `${c - n}px`),
                  (s.style.top = `${l - n}px`),
                  s.classList.add(t);
                let u = a.getElementsByClassName(t)[0];
                u && u.remove(), a.insertBefore(s, a.firstChild);
              });
          },
          1317: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var a = r(9665);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return a.createRipple;
              },
            });
            var s = r(1845);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return s.createAvatarUrl;
              },
            });
          },
          8160: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            let s = r(9541),
              i = r(810),
              n = r(5881),
              o = r(1317),
              c = a(r(1001)),
              l = ({
                forwardRef: e,
                isBlock: t,
                iconPosition: r = "left",
                children: a,
                className: l,
                color: u = "secondary",
                flexIcon: d,
                icon: h,
                onClick: f,
                radius: m = "m",
                size: g,
                type: p = "button",
                variant: y = "default",
                withRipple: v = !0,
                withHover: E = !0,
                withBorder: P = !1,
                disabled: x,
                iconClassName: _,
                iconContainerClassName: S,
                ...T
              }) => {
                let C = (0, i.useId)(),
                  w = !i.Children.count(a),
                  b = "left" === r,
                  k = null;
                h &&
                  (k = (0, i.cloneElement)(h, {
                    className: (0, n.clsx)(
                      c.default.icon,
                      {
                        [c.default[`icon_position_${r}`]]: r && !w,
                        [c.default.icon_withButtonSize]: !h.props?.size,
                      },
                      h.props?.className,
                      _,
                    ),
                    key: C,
                  }));
                let R = (0, i.useCallback)(
                  (e) => {
                    v && (0, o.createRipple)(e, c.default.ripple), f?.(e);
                  },
                  [f, v],
                );
                return (0, s.jsx)("button", {
                  ref: e,
                  className: (0, n.clsx)(
                    c.default.root,
                    c.default[`root_${u}_${y}`],
                    c.default[`root_radius_${m}`],
                    c.default.root_size,
                    {
                      [c.default[`root_${u}_withHover_${y}`]]: E && !x,
                      [c.default[`root_size_${g}`]]: g,
                      [c.default.root_withoutBorder]: !P,
                      [c.default.block]: t,
                      [c.default.flexIcon]: d,
                      [c.default.iconOnly]: w,
                      [c.default.root_icon_left]: h && !w && b,
                      [c.default.root_icon_right]: h && !w && !b,
                    },
                    l,
                  ),
                  type: p,
                  onClick: R,
                  ...T,
                  disabled: x,
                  children: h
                    ? (0, s.jsxs)("span", {
                        className: (0, n.clsx)(
                          c.default.iconContainer,
                          { [c.default.iconContainer_block]: t },
                          S,
                        ),
                        children: [b && k, !w && a, !b && k],
                      })
                    : a,
                });
              };
            t.Button = (0, i.forwardRef)((e, t) =>
              (0, s.jsx)(l, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = s || (s = r.t(i, 2));
          },
        },
        o = {};
      function c(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = (o[e] = { exports: {} });
        return n[e].call(r.exports, r, r.exports, c), r.exports;
      }
      (c.d = (e, t) => {
        for (var r in t)
          c.o(t, r) &&
            !c.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var l = {};
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.Button = void 0),
        (a = c(8160)),
        Object.defineProperty(l, "Button", {
          enumerable: !0,
          get: function () {
            return a.Button;
          },
        });
      var u = l.Button;
      l.__esModule;
    },
    14581: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return u;
        },
      });
      var a,
        s,
        i = r(99616),
        n = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      s = "";
                    if ("string" == typeof t || "number" == typeof t) s += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (s && (s += " "), (s += a));
                      else for (r in t) t[r] && (s && (s += " "), (s += r));
                    }
                    return s;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => s });
            let s = a;
          },
          5323: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root_size_xxxs: "Rkdd2vKC_3xa1eUdRdHP",
              root_size_xxs: "l3tE1hAMmBj2aoPPwU08",
              root_size_xs: "UwnL5AJBMMAp6NwMDdZk",
              root_size_s: "DzJFnuf7XgdkFh28JAsM",
              root_size_m: "o_v2ds2BaqtzAsRuCVjw",
              root_size_l: "YjRa1ZjM_lXFlrfS7jcu",
              root_size_xl: "Seq0GowcqQmiA9LdLP_g",
              root_size_xxl: "mfy69_BvBIamD0e22rCQ",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              s = Symbol.for("react.element"),
              i = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                i = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (i[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === i[a] && (i[a] = t[a]);
              return {
                $$typeof: s,
                type: e,
                key: l,
                ref: u,
                props: i,
                _owner: o.current,
              };
            }
            (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          5695: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "add", xlinkHref: "#add" }),
              ]);
            });
          },
          9800: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "addToPlaylist",
                  xlinkHref: "#addToPlaylist",
                }),
              ]);
            });
          },
          2751: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "adult", xlinkHref: "#adult" }),
              ]);
            });
          },
          383: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "album", xlinkHref: "#album" }),
              ]);
            });
          },
          758: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "arrowDown",
                  xlinkHref: "#arrowDown",
                }),
              ]);
            });
          },
          9466: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "arrowLeft",
                  xlinkHref: "#arrowLeft",
                }),
              ]);
            });
          },
          9032: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "arrowRight",
                  xlinkHref: "#arrowRight",
                }),
              ]);
            });
          },
          7294: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "artist", xlinkHref: "#artist" }),
              ]);
            });
          },
          8409: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "attention",
                  xlinkHref: "#attention",
                }),
              ]);
            });
          },
          1478: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "bucket", xlinkHref: "#bucket" }),
              ]);
            });
          },
          849: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "cast", xlinkHref: "#cast" }),
              ]);
            });
          },
          3781: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "chain", xlinkHref: "#chain" }),
              ]);
            });
          },
          5951: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartDown",
                  xlinkHref: "#chartDown",
                }),
              ]);
            });
          },
          7203: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartNew",
                  xlinkHref: "#chartNew",
                }),
              ]);
            });
          },
          8688: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartSame",
                  xlinkHref: "#chartSame",
                }),
              ]);
            });
          },
          4653: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartUp",
                  xlinkHref: "#chartUp",
                }),
              ]);
            });
          },
          2966: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "check", xlinkHref: "#check" }),
              ]);
            });
          },
          5849: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "close", xlinkHref: "#close" }),
              ]);
            });
          },
          32: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "collapse",
                  xlinkHref: "#collapse",
                }),
              ]);
            });
          },
          5972: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "collections",
                  xlinkHref: "#collections",
                }),
              ]);
            });
          },
          6631: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "collections_selected",
                  xlinkHref: "#collections_selected",
                }),
              ]);
            });
          },
          2703: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "dislike",
                  xlinkHref: "#dislike",
                }),
              ]);
            });
          },
          3514: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "disliked",
                  xlinkHref: "#disliked",
                }),
              ]);
            });
          },
          957: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "donation",
                  xlinkHref: "#donation",
                }),
              ]);
            });
          },
          7431: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "explicit",
                  xlinkHref: "#explicit",
                }),
              ]);
            });
          },
          2900: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "filter", xlinkHref: "#filter" }),
              ]);
            });
          },
          7299: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "fullscreen",
                  xlinkHref: "#fullscreen",
                }),
              ]);
            });
          },
          2272: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "history",
                  xlinkHref: "#history",
                }),
              ]);
            });
          },
          533: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "home", xlinkHref: "#home" }),
              ]);
            });
          },
          8005: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "home_selected",
                  xlinkHref: "#home_selected",
                }),
              ]);
            });
          },
          3687: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "info", xlinkHref: "#info" }),
              ]);
            });
          },
          7261: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "kids", xlinkHref: "#kids" }),
              ]);
            });
          },
          8837: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "kinopoisk",
                  xlinkHref: "#kinopoisk",
                }),
              ]);
            });
          },
          5494: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "lightning",
                  xlinkHref: "#lightning",
                }),
              ]);
            });
          },
          6334: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "like", xlinkHref: "#like" }),
              ]);
            });
          },
          4973: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "likeVariant",
                  xlinkHref: "#likeVariant",
                }),
              ]);
            });
          },
          9165: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "liked", xlinkHref: "#liked" }),
              ]);
            });
          },
          1936: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "likedVariant",
                  xlinkHref: "#likedVariant",
                }),
              ]);
            });
          },
          5517: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "link", xlinkHref: "#link" }),
              ]);
            });
          },
          6685: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "lock", xlinkHref: "#lock" }),
              ]);
            });
          },
          8274: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "lyrics", xlinkHref: "#lyrics" }),
              ]);
            });
          },
          6094: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "menuArrow",
                  xlinkHref: "#menuArrow",
                }),
              ]);
            });
          },
          3974: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "more", xlinkHref: "#more" }),
              ]);
            });
          },
          2502: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "musicLogo",
                  xlinkHref: "#musicLogo",
                }),
              ]);
            });
          },
          9923: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "musicRu",
                  xlinkHref: "#musicRu",
                }),
              ]);
            });
          },
          9384: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "musicRuNew",
                  xlinkHref: "#musicRuNew",
                }),
              ]);
            });
          },
          9473: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "next", xlinkHref: "#next" }),
              ]);
            });
          },
          5985: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "non_music",
                  xlinkHref: "#non_music",
                }),
              ]);
            });
          },
          8749: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "note", xlinkHref: "#note" }),
              ]);
            });
          },
          4947: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "pause", xlinkHref: "#pause" }),
              ]);
            });
          },
          243: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "pauseVibe",
                  xlinkHref: "#pauseVibe",
                }),
              ]);
            });
          },
          1687: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "pause_filled",
                  xlinkHref: "#pause_filled",
                }),
              ]);
            });
          },
          2761: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "pencil", xlinkHref: "#pencil" }),
              ]);
            });
          },
          9817: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "pin", xlinkHref: "#pin" }),
              ]);
            });
          },
          6515: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "pin_filled",
                  xlinkHref: "#pin_filled",
                }),
              ]);
            });
          },
          7471: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "play", xlinkHref: "#play" }),
              ]);
            });
          },
          6684: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "playVibe",
                  xlinkHref: "#playVibe",
                }),
              ]);
            });
          },
          9319: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "play_filled",
                  xlinkHref: "#play_filled",
                }),
              ]);
            });
          },
          8602: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "playlist",
                  xlinkHref: "#playlist",
                }),
              ]);
            });
          },
          8861: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "plus", xlinkHref: "#plus" }),
              ]);
            });
          },
          1179: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "plusOutlined",
                  xlinkHref: "#plusOutlined",
                }),
              ]);
            });
          },
          6532: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "podcasts",
                  xlinkHref: "#podcasts",
                }),
              ]);
            });
          },
          7918: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "previous",
                  xlinkHref: "#previous",
                }),
              ]);
            });
          },
          1739: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "queue", xlinkHref: "#queue" }),
              ]);
            });
          },
          7692: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "repeat", xlinkHref: "#repeat" }),
              ]);
            });
          },
          7881: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "repeat_one",
                  xlinkHref: "#repeat_one",
                }),
              ]);
            });
          },
          2339: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "reset", xlinkHref: "#reset" }),
              ]);
            });
          },
          7954: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "search", xlinkHref: "#search" }),
              ]);
            });
          },
          6178: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "search_selected",
                  xlinkHref: "#search_selected",
                }),
              ]);
            });
          },
          200: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "settings",
                  xlinkHref: "#settings",
                }),
              ]);
            });
          },
          9109: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "share", xlinkHref: "#share" }),
              ]);
            });
          },
          4521: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "shuffle",
                  xlinkHref: "#shuffle",
                }),
              ]);
            });
          },
          3013: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1_25x",
                  xlinkHref: "#speed_1_25x",
                }),
              ]);
            });
          },
          1937: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1_5x",
                  xlinkHref: "#speed_1_5x",
                }),
              ]);
            });
          },
          4576: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1_75x",
                  xlinkHref: "#speed_1_75x",
                }),
              ]);
            });
          },
          7163: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1x",
                  xlinkHref: "#speed_1x",
                }),
              ]);
            });
          },
          4717: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_2x",
                  xlinkHref: "#speed_2x",
                }),
              ]);
            });
          },
          6539: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "trailer",
                  xlinkHref: "#trailer",
                }),
              ]);
            });
          },
          6029: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "unavailable",
                  xlinkHref: "#unavailable",
                }),
              ]);
            });
          },
          3314: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "uncollapse",
                  xlinkHref: "#uncollapse",
                }),
              ]);
            });
          },
          5312: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "unpin", xlinkHref: "#unpin" }),
              ]);
            });
          },
          3993: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "users", xlinkHref: "#users" }),
              ]);
            });
          },
          5730: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "vibe", xlinkHref: "#vibe" }),
              ]);
            });
          },
          631: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "volume", xlinkHref: "#volume" }),
              ]);
            });
          },
          4689: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "volumeOff",
                  xlinkHref: "#volumeOff",
                }),
              ]);
            });
          },
          1677: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "yandexRu",
                  xlinkHref: "#yandexRu",
                }),
              ]);
            });
          },
          4833: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = t.IconComponent = void 0);
            let s = r(9541),
              i = r(810),
              n = r(5881),
              o = r(8212),
              c = r(476),
              l = a(r(5323));
            (t.IconComponent = ({
              "aria-label": e,
              className: t,
              focusable: r = !1,
              variant: a,
              size: i,
              forwardRef: u,
              ...d
            }) => {
              let h = o.iconsCollection[a];
              return (0, s.jsx)(h, {
                className: (0, n.clsx)(
                  l.default.root,
                  t,
                  l.default[`root_size_${i}`],
                ),
                focusable: r,
                "aria-label": e,
                ...d,
                "aria-hidden": !e,
                ref: u,
                style: { ...(d.style || {}), padding: c.paddings[a] },
              });
            }),
              (t.Icon = (0, i.forwardRef)((e, r) =>
                (0, s.jsx)(t.IconComponent, { forwardRef: r, ...e }),
              ));
          },
          8212: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.iconsCollection = void 0);
            let s = a(r(5695)),
              i = a(r(9800)),
              n = a(r(2751)),
              o = a(r(383)),
              c = a(r(758)),
              l = a(r(9466)),
              u = a(r(9032)),
              d = a(r(7294)),
              h = a(r(8409)),
              f = a(r(1478)),
              m = a(r(849)),
              g = a(r(3781)),
              p = a(r(5951)),
              y = a(r(7203)),
              v = a(r(8688)),
              E = a(r(4653)),
              P = a(r(2966)),
              x = a(r(5849)),
              _ = a(r(32)),
              S = a(r(6631)),
              T = a(r(5972)),
              C = a(r(2703)),
              w = a(r(3514)),
              b = a(r(957)),
              k = a(r(7431)),
              R = a(r(2900)),
              A = a(r(7299)),
              I = a(r(3687)),
              O = a(r(2272)),
              L = a(r(8005)),
              N = a(r(533)),
              U = a(r(7261)),
              D = a(r(8837)),
              F = a(r(5494)),
              H = a(r(6334)),
              M = a(r(9165)),
              j = a(r(1936)),
              W = a(r(4973)),
              B = a(r(5517)),
              q = a(r(6685)),
              Y = a(r(8274)),
              V = a(r(6094)),
              K = a(r(3974)),
              $ = a(r(2502)),
              G = a(r(9923)),
              z = a(r(9384)),
              Q = a(r(9473)),
              X = a(r(5985)),
              Z = a(r(8749)),
              J = a(r(1687)),
              ee = a(r(4947)),
              et = a(r(243)),
              er = a(r(2761)),
              ea = a(r(6515)),
              es = a(r(9817)),
              ei = a(r(9319)),
              en = a(r(7471)),
              eo = a(r(8602)),
              ec = a(r(6684)),
              el = a(r(8861)),
              eu = a(r(1179)),
              ed = a(r(6532)),
              eh = a(r(7918)),
              ef = a(r(1739)),
              em = a(r(7881)),
              eg = a(r(7692)),
              ep = a(r(2339)),
              ey = a(r(7954)),
              ev = a(r(6178)),
              eE = a(r(200)),
              eP = a(r(9109)),
              ex = a(r(4521)),
              e_ = a(r(7163)),
              eS = a(r(3013)),
              eT = a(r(1937)),
              eC = a(r(4576)),
              ew = a(r(4717)),
              eb = a(r(6539)),
              ek = a(r(6029)),
              eR = a(r(3314)),
              eA = a(r(5312)),
              eI = a(r(3993)),
              eO = a(r(5730)),
              eL = a(r(631)),
              eN = a(r(4689)),
              eU = a(r(1677));
            t.iconsCollection = {
              add: s.default,
              addToPlaylist: i.default,
              adult: n.default,
              album: o.default,
              arrowDown: c.default,
              arrowLeft: l.default,
              arrowRight: u.default,
              artist: d.default,
              attention: h.default,
              bucket: f.default,
              cast: m.default,
              chain: g.default,
              chartDown: p.default,
              chartNew: y.default,
              chartSame: v.default,
              chartUp: E.default,
              check: P.default,
              close: x.default,
              collapse: _.default,
              collections_selected: S.default,
              collections: T.default,
              dislike: C.default,
              disliked: w.default,
              donation: b.default,
              explicit: k.default,
              filter: R.default,
              fullscreen: A.default,
              history: O.default,
              home_selected: L.default,
              home: N.default,
              info: I.default,
              kids: U.default,
              kinopoisk: D.default,
              lightning: F.default,
              like: H.default,
              liked: M.default,
              likedVariant: j.default,
              likeVariant: W.default,
              link: B.default,
              lock: q.default,
              lyrics: Y.default,
              menuArrow: V.default,
              more: K.default,
              musicLogo: $.default,
              musicRu: G.default,
              musicRuNew: z.default,
              next: Q.default,
              non_music: X.default,
              note: Z.default,
              pause_filled: J.default,
              pause: ee.default,
              pauseVibe: et.default,
              pencil: er.default,
              pin_filled: ea.default,
              pin: es.default,
              play_filled: ei.default,
              play: en.default,
              playlist: eo.default,
              playVibe: ec.default,
              plus: el.default,
              plusOutlined: eu.default,
              podcasts: ed.default,
              previous: eh.default,
              queue: ef.default,
              repeat_one: em.default,
              repeat: eg.default,
              reset: ep.default,
              search: ey.default,
              search_selected: ev.default,
              settings: eE.default,
              share: eP.default,
              shuffle: ex.default,
              speed_1x: e_.default,
              speed_1_25x: eS.default,
              speed_1_5x: eT.default,
              speed_1_75x: eC.default,
              speed_2x: ew.default,
              trailer: eb.default,
              unavailable: ek.default,
              uncollapse: eR.default,
              unpin: eA.default,
              users: eI.default,
              vibe: eO.default,
              volume: eL.default,
              volumeOff: eN.default,
              yandexRu: eU.default,
            };
          },
          476: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.paddings = void 0),
              (t.paddings = {
                add: "var(--ym-icon-padding, 2px)",
                addToPlaylist: "var(--ym-icon-padding, 2px, 2px, 2px, 2px)",
                adult: "var(--ym-icon-padding)",
                album: "var(--ym-icon-padding, 1px)",
                arrowDown: "var(--ym-icon-padding, 8px 4px 5px)",
                arrowLeft: "var(--ym-icon-padding, 5px 8px 4px 6px)",
                arrowRight: "var(--ym-icon-padding, 5px 7px 4px 7px)",
                artist: "var(--ym-icon-padding, 1px 0)",
                attention: "var(--ym-icon-padding, 2px)",
                bucket: "var(--ym-icon-padding, 1px)",
                cast: "var(--ym-icon-padding, 3px 1px 2px 1px)",
                chain: "var(--ym-icon-padding, 2px)",
                chartDown: "var(--ym-icon-padding, 7px 4px 6px 4px)",
                chartNew: "var(--ym-icon-padding)",
                chartSame: "var(--ym-icon-padding, 8px 5px 9px 6px)",
                chartUp: "var(--ym-icon-padding, 6px 4px 6px 5px)",
                check: "var(--ym-icon-padding, 4px 0 4px 4px)",
                close: "var(--ym-icon-padding, 6px)",
                collapse: "var(--ym-icon-padding)",
                collections_selected: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                collections: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                dislike: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                disliked: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                donation: "var(--ym-icon-padding, 0px 1px 0px 0px)",
                explicit: "var(--ym-icon-padding)",
                filter: "var(--ym-icon-padding, 6px 4px 6px 4px)",
                fullscreen: "var(--ym-icon-padding, 4px)",
                history: "var(--ym-icon-padding, 2px)",
                home_selected: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                home: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                info: "var(--ym-icon-padding)",
                kids: "var(--ym-icon-padding, 6px)",
                kinopoisk: "var(--ym-icon-padding, 6px 6px 5px 6px)",
                lightning: "var(--ym-icon-padding, 3px 6px 3px 6px)",
                like: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                liked: "var(--ym-icon-padding, 2px 1px 2px 2px)",
                likedVariant: "var(--ym-icon-padding, 5px 6px 6px 0)",
                likeVariant: "var(--ym-icon-padding, 5px 6px 6px 0)",
                link: "var(--ym-icon-padding)",
                lock: "var(--ym-icon-padding, 2px)",
                lyrics: "var(--ym-icon-padding, 3px 2px)",
                menuArrow: "var(--ym-icon-padding, 5px 7px 4px 7px)",
                more: "var(--ym-icon-padding, 8px 2px 8px 1px)",
                musicLogo: "var(--ym-icon-padding, 0)",
                musicRu: "var(--ym-icon-padding)",
                musicRuNew: "var(--ym-icon-padding, 0)",
                next: "var(--ym-icon-padding, 4px)",
                non_music: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                note: "var(--ym-icon-padding, 4px 7px 2px 5px)",
                pause_filled: "var(--ym-icon-padding)",
                pause: "var(--ym-icon-padding, 4px 6px)",
                pauseVibe: "var(--ym-icon-padding, 2px 4px 4px 8px)",
                pencil: "var(--ym-icon-padding, 4px)",
                pin_filled: "var(--ym-icon-padding, 2px 3px)",
                pin: "var(--ym-icon-padding, 2px 3px)",
                play_filled: "var(--ym-icon-padding)",
                play: "var(--ym-icon-padding, 3px 2px 3px 7px)",
                playlist: "var(--ym-icon-padding, 2px)",
                playVibe: "var(--ym-icon-padding, 0px 0px 1px 7px)",
                plus: "var(--ym-icon-padding, 2px 2px 3px 3px)",
                plusOutlined: "var(--ym-icon-padding, 4px 4px 4px 5px)",
                podcasts: "var(--ym-icon-padding, 6px)",
                previous: "var(--ym-icon-padding, 4px)",
                queue: "var(--ym-icon-padding, 5px 3px)",
                repeat_one: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                repeat: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                reset: "var(--ym-icon-padding, 2px)",
                search: "var(--ym-icon-padding, 5px)",
                search_selected: "var(--ym-icon-padding, 5px)",
                settings: "var(--ym-icon-padding, 2px)",
                share: "var(--ym-icon-padding, 2px 1px 2px 1px)",
                shuffle: "var(--ym-icon-padding, 3px 1px 3px 2px)",
                speed_1x: "var(--ym-icon-padding)",
                speed_1_25x: "var(--ym-icon-padding)",
                speed_1_5x: "var(--ym-icon-padding)",
                speed_1_75x: "var(--ym-icon-padding)",
                speed_2x: "var(--ym-icon-padding)",
                trailer: "var(--ym-icon-padding, 2px 1px)",
                unavailable: "var(--ym-icon-padding, 2px)",
                uncollapse: "var(--ym-icon-padding)",
                unpin: "var(--ym-icon-padding, 2px 3px)",
                users: "var(--ym-icon-padding, 0)",
                vibe: "var(--ym-icon-padding, 1px 1px 2px 1px)",
                volume: "var(--ym-icon-padding, 4px 2px 3px 2px)",
                volumeOff: "var(--ym-icon-padding, 2.8px 2px 1.8px 2px)",
                yandexRu: "var(--ym-icon-padding)",
              });
          },
          810: (e) => {
            e.exports = s || (s = r.t(i, 2));
          },
        },
        o = {};
      function c(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = (o[e] = { exports: {} });
        return n[e].call(r.exports, r, r.exports, c), r.exports;
      }
      (c.d = (e, t) => {
        for (var r in t)
          c.o(t, r) &&
            !c.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var l = {};
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.Icon = void 0),
        (a = c(4833)),
        Object.defineProperty(l, "Icon", {
          enumerable: !0,
          get: function () {
            return a.Icon;
          },
        });
      var u = l.Icon;
      l.__esModule;
    },
    48769: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Notification: function () {
            return d;
          },
          __esModule: function () {
            return h;
          },
          dismiss: function () {
            return f;
          },
          notification: function () {
            return m;
          },
        });
      var a,
        s,
        i,
        n = r(99616),
        o = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      s = "";
                    if ("string" == typeof t || "number" == typeof t) s += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (s && (s += " "), (s += a));
                      else for (r in t) t[r] && (s && (s += " "), (s += r));
                    }
                    return s;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => s });
            let s = a;
          },
          7731: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "nc4M2_N9M5ElqO2JOOq7",
              important: "Brf6Ike_kAhLsPhNEEmk",
              body: "prAUKw3AUngspVHmnd5F",
              toast: "PeivVKR1FPSKq0eXZVTH",
            };
          },
          5452: (e, t, r) => {
            r.r(t);
          },
          1744: (e, t, r) => {
            var a = r(810),
              s = r(5881);
            function i(e) {
              return e && "object" == typeof e && "default" in e
                ? e
                : { default: e };
            }
            var n = i(a),
              o = i(s);
            let c = (e) => "number" == typeof e && !isNaN(e),
              l = (e) => "string" == typeof e,
              u = (e) => "function" == typeof e,
              d = (e) => (l(e) || u(e) ? e : null),
              h = (e) => a.isValidElement(e) || l(e) || u(e) || c(e);
            function f(e, t, r) {
              void 0 === r && (r = 300);
              let { scrollHeight: a, style: s } = e;
              requestAnimationFrame(() => {
                (s.minHeight = "initial"),
                  (s.height = a + "px"),
                  (s.transition = `all ${r}ms`),
                  requestAnimationFrame(() => {
                    (s.height = "0"),
                      (s.padding = "0"),
                      (s.margin = "0"),
                      setTimeout(t, r);
                  });
              });
            }
            function m(e) {
              let {
                enter: t,
                exit: r,
                appendPosition: s = !1,
                collapse: i = !0,
                collapseDuration: o = 300,
              } = e;
              return function (e) {
                let {
                    children: c,
                    position: l,
                    preventExitTransition: u,
                    done: d,
                    nodeRef: h,
                    isIn: m,
                  } = e,
                  g = s ? `${t}--${l}` : t,
                  p = s ? `${r}--${l}` : r,
                  y = a.useRef(0);
                return (
                  a.useLayoutEffect(() => {
                    let e = h.current,
                      t = g.split(" "),
                      r = (a) => {
                        a.target === h.current &&
                          (e.dispatchEvent(new Event("d")),
                          e.removeEventListener("animationend", r),
                          e.removeEventListener("animationcancel", r),
                          0 === y.current &&
                            "animationcancel" !== a.type &&
                            e.classList.remove(...t));
                      };
                    e.classList.add(...t),
                      e.addEventListener("animationend", r),
                      e.addEventListener("animationcancel", r);
                  }, []),
                  a.useEffect(() => {
                    let e = h.current,
                      t = () => {
                        e.removeEventListener("animationend", t),
                          i ? f(e, d, o) : d();
                      };
                    m ||
                      (u
                        ? t()
                        : ((y.current = 1),
                          (e.className += ` ${p}`),
                          e.addEventListener("animationend", t)));
                  }, [m]),
                  n.default.createElement(n.default.Fragment, null, c)
                );
              };
            }
            function g(e, t) {
              return null != e
                ? {
                    content: e.content,
                    containerId: e.props.containerId,
                    id: e.props.toastId,
                    theme: e.props.theme,
                    type: e.props.type,
                    data: e.props.data || {},
                    isLoading: e.props.isLoading,
                    icon: e.props.icon,
                    status: t,
                  }
                : {};
            }
            let p = {
                list: new Map(),
                emitQueue: new Map(),
                on(e, t) {
                  return (
                    this.list.has(e) || this.list.set(e, []),
                    this.list.get(e).push(t),
                    this
                  );
                },
                off(e, t) {
                  if (t) {
                    let r = this.list.get(e).filter((e) => e !== t);
                    return this.list.set(e, r), this;
                  }
                  return this.list.delete(e), this;
                },
                cancelEmit(e) {
                  let t = this.emitQueue.get(e);
                  return (
                    t && (t.forEach(clearTimeout), this.emitQueue.delete(e)),
                    this
                  );
                },
                emit(e) {
                  this.list.has(e) &&
                    this.list.get(e).forEach((t) => {
                      let r = setTimeout(() => {
                        t(...[].slice.call(arguments, 1));
                      }, 0);
                      this.emitQueue.has(e) || this.emitQueue.set(e, []),
                        this.emitQueue.get(e).push(r);
                    });
                },
              },
              y = (e) => {
                let { theme: t, type: r, ...a } = e;
                return n.default.createElement("svg", {
                  viewBox: "0 0 24 24",
                  width: "100%",
                  height: "100%",
                  fill:
                    "colored" === t
                      ? "currentColor"
                      : `var(--toastify-icon-color-${r})`,
                  ...a,
                });
              },
              v = {
                info: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
                    }),
                  );
                },
                warning: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
                    }),
                  );
                },
                success: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
                    }),
                  );
                },
                error: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
                    }),
                  );
                },
                spinner: function () {
                  return n.default.createElement("div", {
                    className: "Toastify__spinner",
                  });
                },
              };
            function E(e) {
              let [, t] = a.useReducer((e) => e + 1, 0),
                [r, s] = a.useState([]),
                i = a.useRef(null),
                n = a.useRef(new Map()).current,
                o = (e) => -1 !== r.indexOf(e),
                f = a.useRef({
                  toastKey: 1,
                  displayedToast: 0,
                  count: 0,
                  queue: [],
                  props: e,
                  containerId: null,
                  isToastActive: o,
                  getToast: (e) => n.get(e),
                }).current;
              function m(e) {
                let { containerId: t } = e,
                  { limit: r } = f.props;
                !r ||
                  (t && f.containerId !== t) ||
                  ((f.count -= f.queue.length), (f.queue = []));
              }
              function y(e) {
                s((t) => (null == e ? [] : t.filter((t) => t !== e)));
              }
              function E() {
                let {
                  toastContent: e,
                  toastProps: t,
                  staleId: r,
                } = f.queue.shift();
                x(e, t, r);
              }
              function P(e, r) {
                var s, o;
                let { delay: m, staleId: P, ..._ } = r;
                if (
                  !h(e) ||
                  !i.current ||
                  (f.props.enableMultiContainer &&
                    _.containerId !== f.props.containerId) ||
                  (n.has(_.toastId) && null == _.updateId)
                )
                  return;
                let { toastId: S, updateId: T, data: C } = _,
                  { props: w } = f,
                  b = () => y(S),
                  k = null == T;
                k && f.count++;
                let R = {
                  ...w,
                  style: w.toastStyle,
                  key: f.toastKey++,
                  ...Object.fromEntries(
                    Object.entries(_).filter((e) => {
                      let [t, r] = e;
                      return null != r;
                    }),
                  ),
                  toastId: S,
                  updateId: T,
                  data: C,
                  closeToast: b,
                  isIn: !1,
                  className: d(_.className || w.toastClassName),
                  bodyClassName: d(_.bodyClassName || w.bodyClassName),
                  progressClassName: d(
                    _.progressClassName || w.progressClassName,
                  ),
                  autoClose:
                    !_.isLoading &&
                    ((s = _.autoClose),
                    (o = w.autoClose),
                    !1 === s || (c(s) && s > 0) ? s : o),
                  deleteToast() {
                    let e = g(n.get(S), "removed");
                    n.delete(S), p.emit(4, e);
                    let r = f.queue.length;
                    if (
                      ((f.count =
                        null == S ? f.count - f.displayedToast : f.count - 1),
                      f.count < 0 && (f.count = 0),
                      r > 0)
                    ) {
                      let e = null == S ? f.props.limit : 1;
                      if (1 === r || 1 === e) f.displayedToast++, E();
                      else {
                        let t = e > r ? r : e;
                        f.displayedToast = t;
                        for (let e = 0; e < t; e++) E();
                      }
                    } else t();
                  },
                };
                (R.iconOut = (function (e) {
                  let { theme: t, type: r, isLoading: s, icon: i } = e,
                    n = null,
                    o = { theme: t, type: r };
                  return (
                    !1 === i ||
                      (u(i)
                        ? (n = i(o))
                        : a.isValidElement(i)
                          ? (n = a.cloneElement(i, o))
                          : l(i) || c(i)
                            ? (n = i)
                            : s
                              ? (n = v.spinner())
                              : r in v && (n = v[r](o))),
                    n
                  );
                })(R)),
                  u(_.onOpen) && (R.onOpen = _.onOpen),
                  u(_.onClose) && (R.onClose = _.onClose),
                  (R.closeButton = w.closeButton),
                  !1 === _.closeButton || h(_.closeButton)
                    ? (R.closeButton = _.closeButton)
                    : !0 === _.closeButton &&
                      (R.closeButton = !h(w.closeButton) || w.closeButton);
                let A = e;
                a.isValidElement(e) && !l(e.type)
                  ? (A = a.cloneElement(e, {
                      closeToast: b,
                      toastProps: R,
                      data: C,
                    }))
                  : u(e) && (A = e({ closeToast: b, toastProps: R, data: C })),
                  w.limit && w.limit > 0 && f.count > w.limit && k
                    ? f.queue.push({
                        toastContent: A,
                        toastProps: R,
                        staleId: P,
                      })
                    : c(m)
                      ? setTimeout(() => {
                          x(A, R, P);
                        }, m)
                      : x(A, R, P);
              }
              function x(e, t, r) {
                let { toastId: a } = t;
                r && n.delete(r);
                let i = { content: e, props: t };
                n.set(a, i),
                  s((e) => [...e, a].filter((e) => e !== r)),
                  p.emit(
                    4,
                    g(i, null == i.props.updateId ? "added" : "updated"),
                  );
              }
              return (
                a.useEffect(
                  () => (
                    (f.containerId = e.containerId),
                    p
                      .cancelEmit(3)
                      .on(0, P)
                      .on(1, (e) => i.current && y(e))
                      .on(5, m)
                      .emit(2, f),
                    () => {
                      n.clear(), p.emit(3, f);
                    }
                  ),
                  [],
                ),
                a.useEffect(() => {
                  (f.props = e),
                    (f.isToastActive = o),
                    (f.displayedToast = r.length);
                }),
                {
                  getToastToRender: function (t) {
                    let r = new Map(),
                      a = Array.from(n.values());
                    return (
                      e.newestOnTop && a.reverse(),
                      a.forEach((e) => {
                        let { position: t } = e.props;
                        r.has(t) || r.set(t, []), r.get(t).push(e);
                      }),
                      Array.from(r, (e) => t(e[0], e[1]))
                    );
                  },
                  containerRef: i,
                  isToastActive: o,
                }
              );
            }
            function P(e) {
              return e.targetTouches && e.targetTouches.length >= 1
                ? e.targetTouches[0].clientX
                : e.clientX;
            }
            function x(e) {
              return e.targetTouches && e.targetTouches.length >= 1
                ? e.targetTouches[0].clientY
                : e.clientY;
            }
            function _(e) {
              let [t, r] = a.useState(!1),
                [s, i] = a.useState(!1),
                n = a.useRef(null),
                o = a.useRef({
                  start: 0,
                  x: 0,
                  y: 0,
                  delta: 0,
                  removalDistance: 0,
                  canCloseOnClick: !0,
                  canDrag: !1,
                  boundingRect: null,
                  didMove: !1,
                }).current,
                c = a.useRef(e),
                {
                  autoClose: l,
                  pauseOnHover: d,
                  closeToast: h,
                  onClick: f,
                  closeOnClick: m,
                } = e;
              function g(t) {
                if (e.draggable) {
                  "touchstart" === t.nativeEvent.type &&
                    t.nativeEvent.preventDefault(),
                    (o.didMove = !1),
                    document.addEventListener("mousemove", E),
                    document.addEventListener("mouseup", _),
                    document.addEventListener("touchmove", E),
                    document.addEventListener("touchend", _);
                  let r = n.current;
                  (o.canCloseOnClick = !0),
                    (o.canDrag = !0),
                    (o.boundingRect = r.getBoundingClientRect()),
                    (r.style.transition = ""),
                    (o.x = P(t.nativeEvent)),
                    (o.y = x(t.nativeEvent)),
                    "x" === e.draggableDirection
                      ? ((o.start = o.x),
                        (o.removalDistance =
                          r.offsetWidth * (e.draggablePercent / 100)))
                      : ((o.start = o.y),
                        (o.removalDistance =
                          r.offsetHeight *
                          (80 === e.draggablePercent
                            ? 1.5 * e.draggablePercent
                            : e.draggablePercent / 100)));
                }
              }
              function p(t) {
                if (o.boundingRect) {
                  let { top: r, bottom: a, left: s, right: i } = o.boundingRect;
                  "touchend" !== t.nativeEvent.type &&
                  e.pauseOnHover &&
                  o.x >= s &&
                  o.x <= i &&
                  o.y >= r &&
                  o.y <= a
                    ? v()
                    : y();
                }
              }
              function y() {
                r(!0);
              }
              function v() {
                r(!1);
              }
              function E(r) {
                let a = n.current;
                o.canDrag &&
                  a &&
                  ((o.didMove = !0),
                  t && v(),
                  (o.x = P(r)),
                  (o.y = x(r)),
                  (o.delta =
                    "x" === e.draggableDirection
                      ? o.x - o.start
                      : o.y - o.start),
                  o.start !== o.x && (o.canCloseOnClick = !1),
                  (a.style.transform = `translate${e.draggableDirection}(${o.delta}px)`),
                  (a.style.opacity =
                    "" + (1 - Math.abs(o.delta / o.removalDistance))));
              }
              function _() {
                document.removeEventListener("mousemove", E),
                  document.removeEventListener("mouseup", _),
                  document.removeEventListener("touchmove", E),
                  document.removeEventListener("touchend", _);
                let t = n.current;
                if (o.canDrag && o.didMove && t) {
                  if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
                    return i(!0), void e.closeToast();
                  (t.style.transition = "transform 0.2s, opacity 0.2s"),
                    (t.style.transform = `translate${e.draggableDirection}(0)`),
                    (t.style.opacity = "1");
                }
              }
              a.useEffect(() => {
                c.current = e;
              }),
                a.useEffect(
                  () => (
                    n.current &&
                      n.current.addEventListener("d", y, { once: !0 }),
                    u(e.onOpen) &&
                      e.onOpen(
                        a.isValidElement(e.children) && e.children.props,
                      ),
                    () => {
                      let e = c.current;
                      u(e.onClose) &&
                        e.onClose(
                          a.isValidElement(e.children) && e.children.props,
                        );
                    }
                  ),
                  [],
                ),
                a.useEffect(
                  () => (
                    e.pauseOnFocusLoss &&
                      (document.hasFocus() || v(),
                      window.addEventListener("focus", y),
                      window.addEventListener("blur", v)),
                    () => {
                      e.pauseOnFocusLoss &&
                        (window.removeEventListener("focus", y),
                        window.removeEventListener("blur", v));
                    }
                  ),
                  [e.pauseOnFocusLoss],
                );
              let S = {
                onMouseDown: g,
                onTouchStart: g,
                onMouseUp: p,
                onTouchEnd: p,
              };
              return (
                l && d && ((S.onMouseEnter = v), (S.onMouseLeave = y)),
                m &&
                  (S.onClick = (e) => {
                    f && f(e), o.canCloseOnClick && h();
                  }),
                {
                  playToast: y,
                  pauseToast: v,
                  isRunning: t,
                  preventExitTransition: s,
                  toastRef: n,
                  eventHandlers: S,
                }
              );
            }
            function S(e) {
              let { closeToast: t, theme: r, ariaLabel: a = "close" } = e;
              return n.default.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${r}`,
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation(), t(e);
                  },
                  "aria-label": a,
                },
                n.default.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  n.default.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  }),
                ),
              );
            }
            function T(e) {
              let {
                  delay: t,
                  isRunning: r,
                  closeToast: a,
                  type: s = "default",
                  hide: i,
                  className: c,
                  style: l,
                  controlledProgress: d,
                  progress: h,
                  rtl: f,
                  isIn: m,
                  theme: g,
                } = e,
                p = i || (d && 0 === h),
                y = {
                  ...l,
                  animationDuration: `${t}ms`,
                  animationPlayState: r ? "running" : "paused",
                  opacity: p ? 0 : 1,
                };
              d && (y.transform = `scaleX(${h})`);
              let v = o.default(
                  "Toastify__progress-bar",
                  d
                    ? "Toastify__progress-bar--controlled"
                    : "Toastify__progress-bar--animated",
                  `Toastify__progress-bar-theme--${g}`,
                  `Toastify__progress-bar--${s}`,
                  { "Toastify__progress-bar--rtl": f },
                ),
                E = u(c)
                  ? c({ rtl: f, type: s, defaultClassName: v })
                  : o.default(v, c);
              return n.default.createElement("div", {
                role: "progressbar",
                "aria-hidden": p ? "true" : "false",
                "aria-label": "notification timer",
                className: E,
                style: y,
                [d && h >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
                  d && h < 1
                    ? null
                    : () => {
                        m && a();
                      },
              });
            }
            let C = (e) => {
                let {
                    isRunning: t,
                    preventExitTransition: r,
                    toastRef: s,
                    eventHandlers: i,
                  } = _(e),
                  {
                    closeButton: c,
                    children: l,
                    autoClose: d,
                    onClick: h,
                    type: f,
                    hideProgressBar: m,
                    closeToast: g,
                    transition: p,
                    position: y,
                    className: v,
                    style: E,
                    bodyClassName: P,
                    bodyStyle: x,
                    progressClassName: C,
                    progressStyle: w,
                    updateId: b,
                    role: k,
                    progress: R,
                    rtl: A,
                    toastId: I,
                    deleteToast: O,
                    isIn: L,
                    isLoading: N,
                    iconOut: U,
                    closeOnClick: D,
                    theme: F,
                  } = e,
                  H = o.default(
                    "Toastify__toast",
                    `Toastify__toast-theme--${F}`,
                    `Toastify__toast--${f}`,
                    { "Toastify__toast--rtl": A },
                    { "Toastify__toast--close-on-click": D },
                  ),
                  M = u(v)
                    ? v({ rtl: A, position: y, type: f, defaultClassName: H })
                    : o.default(H, v),
                  j = !!R || !d,
                  W = { closeToast: g, type: f, theme: F },
                  B = null;
                return (
                  !1 === c ||
                    (B = u(c)
                      ? c(W)
                      : a.isValidElement(c)
                        ? a.cloneElement(c, W)
                        : S(W)),
                  n.default.createElement(
                    p,
                    {
                      isIn: L,
                      done: O,
                      position: y,
                      preventExitTransition: r,
                      nodeRef: s,
                    },
                    n.default.createElement(
                      "div",
                      {
                        id: I,
                        onClick: h,
                        className: M,
                        ...i,
                        style: E,
                        ref: s,
                      },
                      n.default.createElement(
                        "div",
                        {
                          ...(L && { role: k }),
                          className: u(P)
                            ? P({ type: f })
                            : o.default("Toastify__toast-body", P),
                          style: x,
                        },
                        null != U &&
                          n.default.createElement(
                            "div",
                            {
                              className: o.default("Toastify__toast-icon", {
                                "Toastify--animate-icon Toastify__zoom-enter":
                                  !N,
                              }),
                            },
                            U,
                          ),
                        n.default.createElement("div", null, l),
                      ),
                      B,
                      n.default.createElement(T, {
                        ...(b && !j ? { key: `pb-${b}` } : {}),
                        rtl: A,
                        theme: F,
                        delay: d,
                        isRunning: t,
                        isIn: L,
                        closeToast: g,
                        hide: m,
                        type: f,
                        style: w,
                        className: C,
                        controlledProgress: j,
                        progress: R || 0,
                      }),
                    ),
                  )
                );
              },
              w = function (e, t) {
                return (
                  void 0 === t && (t = !1),
                  {
                    enter: `Toastify--animate Toastify__${e}-enter`,
                    exit: `Toastify--animate Toastify__${e}-exit`,
                    appendPosition: t,
                  }
                );
              },
              b = m(w("bounce", !0)),
              k = m(w("slide", !0)),
              R = m(w("zoom")),
              A = m(w("flip")),
              I = a.forwardRef((e, t) => {
                let {
                    getToastToRender: r,
                    containerRef: s,
                    isToastActive: i,
                  } = E(e),
                  { className: c, style: l, rtl: h, containerId: f } = e;
                return (
                  a.useEffect(() => {
                    t && (t.current = s.current);
                  }, []),
                  n.default.createElement(
                    "div",
                    { ref: s, className: "Toastify", id: f },
                    r((e, t) => {
                      let r = t.length
                        ? { ...l }
                        : { ...l, pointerEvents: "none" };
                      return n.default.createElement(
                        "div",
                        {
                          className: (function (e) {
                            let t = o.default(
                              "Toastify__toast-container",
                              `Toastify__toast-container--${e}`,
                              { "Toastify__toast-container--rtl": h },
                            );
                            return u(c)
                              ? c({ position: e, rtl: h, defaultClassName: t })
                              : o.default(t, d(c));
                          })(e),
                          style: r,
                          key: `container-${e}`,
                        },
                        t.map((e, r) => {
                          let { content: a, props: s } = e;
                          return n.default.createElement(
                            C,
                            {
                              ...s,
                              isIn: i(s.toastId),
                              style: {
                                ...s.style,
                                "--nth": r + 1,
                                "--len": t.length,
                              },
                              key: `toast-${s.key}`,
                            },
                            a,
                          );
                        }),
                      );
                    }),
                  )
                );
              });
            (I.displayName = "ToastContainer"),
              (I.defaultProps = {
                position: "top-right",
                transition: b,
                autoClose: 5e3,
                closeButton: S,
                pauseOnHover: !0,
                pauseOnFocusLoss: !0,
                closeOnClick: !0,
                draggable: !0,
                draggablePercent: 80,
                draggableDirection: "x",
                role: "alert",
                theme: "light",
              });
            let O,
              L = new Map(),
              N = [],
              U = 1;
            function D(e, t) {
              return (
                L.size > 0
                  ? p.emit(0, e, t)
                  : N.push({ content: e, options: t }),
                t.toastId
              );
            }
            function F(e, t) {
              return {
                ...t,
                type: (t && t.type) || e,
                toastId:
                  t && (l(t.toastId) || c(t.toastId)) ? t.toastId : "" + U++,
              };
            }
            function H(e) {
              return (t, r) => D(t, F(e, r));
            }
            function M(e, t) {
              return D(e, F("default", t));
            }
            (M.loading = (e, t) =>
              D(
                e,
                F("default", {
                  isLoading: !0,
                  autoClose: !1,
                  closeOnClick: !1,
                  closeButton: !1,
                  draggable: !1,
                  ...t,
                }),
              )),
              (M.promise = function (e, t, r) {
                let a,
                  { pending: s, error: i, success: n } = t;
                s &&
                  (a = l(s)
                    ? M.loading(s, r)
                    : M.loading(s.render, { ...r, ...s }));
                let o = {
                    isLoading: null,
                    autoClose: null,
                    closeOnClick: null,
                    closeButton: null,
                    draggable: null,
                  },
                  c = (e, t, s) => {
                    if (null == t) return void M.dismiss(a);
                    let i = { type: e, ...o, ...r, data: s },
                      n = l(t) ? { render: t } : t;
                    return (
                      a
                        ? M.update(a, { ...i, ...n })
                        : M(n.render, { ...i, ...n }),
                      s
                    );
                  },
                  d = u(e) ? e() : e;
                return (
                  d
                    .then((e) => c("success", n, e))
                    .catch((e) => c("error", i, e)),
                  d
                );
              }),
              (M.success = H("success")),
              (M.info = H("info")),
              (M.error = H("error")),
              (M.warning = H("warning")),
              (M.warn = M.warning),
              (M.dark = (e, t) => D(e, F("default", { theme: "dark", ...t }))),
              (M.dismiss = (e) => {
                L.size > 0
                  ? p.emit(1, e)
                  : (N = N.filter((t) => null != e && t.options.toastId !== e));
              }),
              (M.clearWaitingQueue = function (e) {
                return void 0 === e && (e = {}), p.emit(5, e);
              }),
              (M.isActive = (e) => {
                let t = !1;
                return (
                  L.forEach((r) => {
                    r.isToastActive && r.isToastActive(e) && (t = !0);
                  }),
                  t
                );
              }),
              (M.update = function (e, t) {
                void 0 === t && (t = {}),
                  setTimeout(() => {
                    let r = (function (e, t) {
                      let { containerId: r } = t,
                        a = L.get(r || O);
                      return a && a.getToast(e);
                    })(e, t);
                    if (r) {
                      let { props: a, content: s } = r,
                        i = {
                          delay: 100,
                          ...a,
                          ...t,
                          toastId: t.toastId || e,
                          updateId: "" + U++,
                        };
                      i.toastId !== e && (i.staleId = e);
                      let n = i.render || s;
                      delete i.render, D(n, i);
                    }
                  }, 0);
              }),
              (M.done = (e) => {
                M.update(e, { progress: 1 });
              }),
              (M.onChange = (e) => (
                p.on(4, e),
                () => {
                  p.off(4, e);
                }
              )),
              (M.POSITION = {
                TOP_LEFT: "top-left",
                TOP_RIGHT: "top-right",
                TOP_CENTER: "top-center",
                BOTTOM_LEFT: "bottom-left",
                BOTTOM_RIGHT: "bottom-right",
                BOTTOM_CENTER: "bottom-center",
              }),
              (M.TYPE = {
                INFO: "info",
                SUCCESS: "success",
                WARNING: "warning",
                ERROR: "error",
                DEFAULT: "default",
              }),
              p
                .on(2, (e) => {
                  (O = e.containerId || e),
                    L.set(O, e),
                    N.forEach((e) => {
                      p.emit(0, e.content, e.options);
                    }),
                    (N = []);
                })
                .on(3, (e) => {
                  L.delete(e.containerId || e),
                    0 === L.size && p.off(0).off(1).off(5);
                }),
              (t.Bounce = b),
              (t.Flip = A),
              (t.Icons = v),
              (t.Slide = k),
              (t.ToastContainer = I),
              (t.Zoom = R),
              (t.collapseToast = f),
              (t.cssTransition = m),
              (t.toast = M),
              (t.useToast = _),
              (t.useToastContainer = E);
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              s = Symbol.for("react.element"),
              i = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                i = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (i[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === i[a] && (i[a] = t[a]);
              return {
                $$typeof: s,
                type: e,
                key: l,
                ref: u,
                props: i,
                _owner: o.current,
              };
            }
            (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          6290: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.notification = t.dismiss = void 0);
            let a = r(1744),
              s = [],
              i = {
                pauseOnFocusLoss: !1,
                autoClose: !1,
                closeButton: !1,
                hideProgressBar: !0,
                icon: !1,
                transition: a.Slide,
              };
            function n() {
              s.forEach(({ id: e, important: t }) => {
                t || a.toast.dismiss(e);
              }),
                (s = s.filter(({ important: e }) => e));
            }
            (t.dismiss = n),
              (t.notification = function ({ message: e, options: t }) {
                !(function (e, t) {
                  t?.single && n();
                  let r = (0, a.toast)(e, t);
                  s.push({ id: r, important: t?.important });
                })(e, { ...i, ...t });
              });
          },
          2499: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Notification = void 0);
            let s = r(9541),
              i = r(5881),
              n = r(1744);
            r(5452);
            let o = a(r(7731));
            t.Notification = ({
              className: e,
              toastClassName: t,
              bodyClassName: r,
              ...a
            }) =>
              (0, s.jsx)(n.ToastContainer, {
                className: (0, i.clsx)(o.default.root, o.default.important, e),
                toastClassName: (0, i.clsx)(
                  o.default.toast,
                  o.default.important,
                  t,
                ),
                bodyClassName: (0, i.clsx)(
                  o.default.body,
                  o.default.important,
                  r,
                ),
                ...a,
              });
          },
          810: (e) => {
            e.exports = i || (i = r.t(n, 2));
          },
        },
        c = {};
      function l(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var r = (c[e] = { exports: {} });
        return o[e].call(r.exports, r, r.exports, l), r.exports;
      }
      (l.d = (e, t) => {
        for (var r in t)
          l.o(t, r) &&
            !l.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var u = {};
      Object.defineProperty(u, "X$", { value: !0 }),
        (u.ZB = u.t6 = u.P_ = void 0),
        (a = l(2499)),
        Object.defineProperty(u, "P_", {
          enumerable: !0,
          get: function () {
            return a.Notification;
          },
        }),
        (s = l(6290)),
        Object.defineProperty(u, "t6", {
          enumerable: !0,
          get: function () {
            return s.notification;
          },
        }),
        Object.defineProperty(u, "ZB", {
          enumerable: !0,
          get: function () {
            return s.dismiss;
          },
        });
      var d = u.P_,
        h = u.X$,
        f = u.ZB,
        m = u.t6;
    },
    96437: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Paper: function () {
            return u;
          },
          __esModule: function () {
            return d;
          },
        });
      var a,
        s,
        i = r(99616),
        n = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      s = "";
                    if ("string" == typeof t || "number" == typeof t) s += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (s && (s += " "), (s += a));
                      else for (r in t) t[r] && (s && (s += " "), (s += r));
                    }
                    return s;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => s });
            let s = a;
          },
          6493: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "qaIScXjx1qyXuaIHXQIo",
              root_radius_xs: "wdE2qVRIlWUesuBfzCis",
              root_radius_s: "_7gw1qGE6BeUAdSMbhRx",
              root_radius_m: "emVxQKB1wJc9FwuIBG8o",
              root_radius_l: "NFJAa_h_EAjwQVY7bU5J",
              root_radius_xl: "SRpgu5IgfEGM_VHllm_6",
              root_radius_round: "QIWoHHDozGGG5w2JYImt",
              root_withShadow: "gtfPudKIIbfkwmuOBzwI",
              root_variant_default: "ZcpulvHgF_wsgzB8Hye9",
              root_variant_outline: "kPFFrHHxF3SOjiETAE6Q",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              s = Symbol.for("react.element"),
              i = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                i = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (i[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === i[a] && (i[a] = t[a]);
              return {
                $$typeof: s,
                type: e,
                key: l,
                ref: u,
                props: i,
                _owner: o.current,
              };
            }
            (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          8826: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Paper = void 0);
            let s = r(9541),
              i = r(5881),
              n = r(810),
              o = a(r(6493)),
              c = ({
                forwardRef: e,
                radius: t = "m",
                variant: r = "default",
                children: a,
                className: n,
                withShadow: c,
                ...l
              }) =>
                (0, s.jsx)("div", {
                  className: (0, i.clsx)(
                    o.default.root,
                    o.default[`root_radius_${t}`],
                    o.default[`root_variant_${r}`],
                    { [o.default.root_withShadow]: c },
                    n,
                  ),
                  ref: e,
                  ...l,
                  children: a,
                });
            t.Paper = (0, n.forwardRef)((e, t) =>
              (0, s.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = s || (s = r.t(i, 2));
          },
        },
        o = {};
      function c(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = (o[e] = { exports: {} });
        return n[e].call(r.exports, r, r.exports, c), r.exports;
      }
      (c.d = (e, t) => {
        for (var r in t)
          c.o(t, r) &&
            !c.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var l = {};
      Object.defineProperty(l, "U", { value: !0 }),
        (l.X = void 0),
        (a = c(8826)),
        Object.defineProperty(l, "X", {
          enumerable: !0,
          get: function () {
            return a.Paper;
          },
        });
      var u = l.X,
        d = l.U;
    },
    1918: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Caption: function () {
            return d;
          },
          Heading: function () {
            return h;
          },
          __esModule: function () {
            return f;
          },
        });
      var a,
        s,
        i,
        n = r(99616),
        o = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      s = "";
                    if ("string" == typeof t || "number" == typeof t) s += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (s && (s += " "), (s += a));
                      else for (r in t) t[r] && (s && (s += " "), (s += r));
                    }
                    return s;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => s });
            let s = a;
          },
          435: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root_controls_xxs: "tRaaBpDMg9Qu8v6gKjtn",
              root_entity_xxs: "M9zvtlcpLUVn6DKdcHhj",
              root_text_xxs: "ln0PYYwDmFnfYxCDJsFU",
              root_controls_xs: "n5AeWEsJC3_AYXcbK4Lt",
              root_entity_xs: "__hrMKGmNbw54T54IUyh",
              root_text_xs: "SehSa7OyRpC2nzYTVb2Q",
              root_controls_s: "_oBLf5gprWsKjCw4Ce58",
              root_entity_s: "mxSPe5xpZnie9gpIqacd",
              root_text_s: "Ai2iRN9elHpk_u5splD6",
              root_controls_m: "tk7ahHRDYXJMMB879KUA",
              root_entity_m: "Z_WIr2W8JU4MPQek3hgR",
              root_text_m: "g3qWNP6xl__7qxNmtrvd",
              root_controls_l: "grvxapJE3vGArOKDWf6n",
              root_entity_l: "Esj5A1UeSi4xV4tZ839D",
              root_text_l: "V3WU123oO65AxsprotU9",
              root_weight_normal: "ZYV27jeWd30QDXu4GhaH",
              root_weight_medium: "_3_Mxw7Si7j2g4kWjlpR",
              root_weight_bold: "Vi7Rd0SZWqD17F0872TB",
            };
          },
          5668: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root_size_xs: "qJJ288377iHlWN_RXeEE",
              root_size_s: "_sd8Q9d_Ttn0Ufe4ISWS",
              root_size_m: "Ctk8dbecq31Qh7isOJPQ",
              root_size_l: "M_Djh6ppIkCO3A2k_BTA",
              root_size_xl: "dtxlzGQMPAbM2MEndXWX",
              root_size_xxl: "IUb9XLplTAoZqne9rNUL",
              root_size_xxxl: "ZYZamUwql_rfFR4RpI2B",
              root_size_xxxxl: "ZBZyxow5njdq8z5dnRPY",
              root_weight_bold: "nSU6fV9y80WrZEfafvww",
              root_weight_black: "KBeGPPK4DinQzAP41Y_N",
            };
          },
          3594: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              s = Symbol.for("react.element"),
              i = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                i = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (i[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === i[a] && (i[a] = t[a]);
              return {
                $$typeof: s,
                type: e,
                key: l,
                ref: u,
                props: i,
                _owner: o.current,
              };
            }
            (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          8316: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let s = r(9541),
              i = r(5881),
              n = r(810),
              o = r(3603),
              c = a(r(435));
            function l({
              forwardRef: e,
              variant: t,
              type: r = "text",
              size: a = "s",
              className: n,
              children: l,
              weight: u = "medium",
              ...d
            }) {
              return (0, s.jsx)(o.Typography, {
                variant: t,
                ref: e,
                className: (0, i.clsx)(
                  c.default.root,
                  c.default[`root_${r}_${a}`],
                  c.default[`root_weight_${u}`],
                  n,
                ),
                ...d,
                children: l,
              });
            }
            (t.CaptionComponent = l),
              (t.Caption = (0, n.forwardRef)((e, t) =>
                (0, s.jsx)(l, { forwardRef: t, ...e }),
              ));
          },
          1064: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let s = r(9541),
              i = r(5881),
              n = r(810),
              o = r(3603),
              c = a(r(5668));
            (t.HeadingComponent = ({
              forwardRef: e,
              variant: t,
              weight: r = "bold",
              size: a = "s",
              className: n,
              children: l,
              ...u
            }) =>
              (0, s.jsx)(o.Typography, {
                variant: t,
                ref: e,
                className: (0, i.clsx)(
                  c.default.root,
                  c.default[`root_size_${a}`],
                  c.default[`root_weight_${r}`],
                  n,
                ),
                ...u,
                children: l,
              })),
              (t.Heading = (0, n.forwardRef)((e, r) =>
                (0, s.jsx)(t.HeadingComponent, { forwardRef: r, ...e }),
              ));
          },
          3603: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let s = r(9541),
              i = r(5881),
              n = r(810),
              o = a(r(3594));
            function c({
              forwardRef: e,
              className: t,
              children: r,
              variant: a,
              lineClamp: n,
              ...c
            }) {
              return (0, s.jsx)(a, {
                style: { WebkitLineClamp: n },
                ref: e,
                title: n && "string" == typeof r ? r : void 0,
                className: (0, i.clsx)(
                  o.default.root,
                  {
                    [o.default.root_clamp]: n && n > 0,
                    [o.default.root_clamp_oneline]: n && 1 === n,
                    [o.default.root_clamp_multiline]: n && n > 1,
                  },
                  t,
                ),
                ...c,
                children: r,
              });
            }
            (t.TypographyComponent = c),
              (t.Typography = (0, n.forwardRef)((e, t) =>
                (0, s.jsx)(c, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = i || (i = r.t(n, 2));
          },
        },
        c = {};
      function l(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var r = (c[e] = { exports: {} });
        return o[e].call(r.exports, r, r.exports, l), r.exports;
      }
      (l.d = (e, t) => {
        for (var r in t)
          l.o(t, r) &&
            !l.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var u = {};
      Object.defineProperty(u, "__esModule", { value: !0 }),
        (u.Heading = u.Caption = void 0),
        (a = l(8316)),
        Object.defineProperty(u, "Caption", {
          enumerable: !0,
          get: function () {
            return a.Caption;
          },
        }),
        (s = l(1064)),
        Object.defineProperty(u, "Heading", {
          enumerable: !0,
          get: function () {
            return s.Heading;
          },
        });
      var d = u.Caption,
        h = u.Heading,
        f = u.__esModule;
    },
    82834: function (e, t, r) {
      "use strict";
      var a,
        s,
        i,
        n,
        o,
        c,
        l,
        u,
        d,
        h,
        f,
        m,
        g,
        p,
        y,
        v,
        E,
        P,
        x,
        _,
        S,
        T,
        C,
        w,
        b,
        k,
        R,
        A,
        I,
        O,
        L,
        N,
        U,
        D,
        F,
        H,
        M,
        j,
        W,
        B,
        q,
        Y,
        V,
        K,
        $,
        G;
      function z(e, t, r) {
        let a = (function ({
          callback: e,
          maxSendingItemsPerRequest: t,
          requestsSendingDelay: r,
        }) {
          let a = [];
          return (
            !(function s() {
              if (a.length > 0) {
                let r = a.splice(0, t);
                e(r);
              }
              window.setTimeout(s, r);
            })(),
            {
              add(e) {
                a.push(e);
              },
            }
          );
        })({
          callback: (t) => {
            e(t);
          },
          requestsSendingDelay: 1e3,
          maxSendingItemsPerRequest: 21,
        });
        return {
          trackEvent(e, s) {
            r && t.log(e, s), a.add({ [e]: s });
          },
        };
      }
      r.d(t, {
        qU: function () {
          return v;
        },
        OB: function () {
          return y;
        },
        Ks: function () {
          return T;
        },
        Dm: function () {
          return E;
        },
        CS: function () {
          return _;
        },
        yx: function () {
          return ee;
        },
        A7: function () {
          return ec;
        },
        Mn: function () {
          return eu;
        },
        b5: function () {
          return el;
        },
        f7: function () {
          return en;
        },
        is: function () {
          return eo;
        },
        F5: function () {
          return ei;
        },
        HQ: function () {
          return z;
        },
        hz: function () {
          return X;
        },
        y_: function () {
          return J;
        },
        re: function () {
          return ef;
        },
        sj: function () {
          return ed;
        },
        mz: function () {
          return em;
        },
        PB: function () {
          return eh;
        },
        yC: function () {
          return eg;
        },
        wB: function () {
          return ea;
        },
        rO: function () {
          return er;
        },
        Qb: function () {
          return es;
        },
      });
      class Q {
        makeParams() {
          return {};
        }
      }
      function X() {
        let e = new Q();
        return { getGlobalParams: () => e };
      }
      class Z {
        makeParams() {
          return {};
        }
      }
      function J() {
        let e = new Z();
        return { getPlatformParams: () => e };
      }
      class ee {
        evgen;
        constructor(e, t, r) {
          this.evgen = {
            trackEvent: (a, s) => {
              let i = {
                ...s,
                ...t.getGlobalParams(),
                ...r.getPlatformParams(),
              };
              e.trackEvent(a, i);
            },
          };
        }
        get evgenInstance() {
          return this.evgen;
        }
        sendEvent(e, t) {
          this.evgen.trackEvent(e, t);
        }
      }
      function et(e, t = {}) {
        return { event: { version: e }, interfaces: t };
      }
      function er(e, t) {
        let r = et(1),
          a = { ...t, _meta: r };
        e.trackEvent("Slides.Opened", a);
      }
      function ea(e, t) {
        let r = et(1),
          a = { ...t, _meta: r };
        e.trackEvent("Slides.Loaded", a);
      }
      function es(e, t) {
        let r = et(1),
          a = { ...t, _meta: r };
        e.trackEvent("Slides.Showed", a);
      }
      function ei(e, t) {
        let { objectsCount: r = 1, objectPosX: a = 1, objectPosY: s = 1 } = t,
          i = et(2, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition2D: { version: 1 },
            uIContainerObjects: { version: 1 },
          }),
          n = {
            ...t,
            objectsCount: r,
            objectPosX: a,
            objectPosY: s,
            pageId: "artist_screen",
            pageType: "object",
            entityType: "carousel",
            entityId: "concerts",
            objectsType: "concert",
            _meta: i,
          };
        e.trackEvent("Artist.Concerts.Showed", n);
      }
      function en(e, t) {
        let { objectsCount: r = 1, objectPosX: a = 1, objectPosY: s = 1 } = t,
          i = et(2, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityNavigated: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition2D: { version: 1 },
            uIContainerObjects: { version: 1 },
          }),
          n = {
            ...t,
            objectsCount: r,
            objectPosX: a,
            objectPosY: s,
            pageId: "artist_screen",
            pageType: "object",
            entityType: "carousel",
            entityId: "concerts",
            objectsType: "concert",
            from: "artist_screen",
            _meta: i,
          };
        e.trackEvent("Artist.Concerts.Navigated", n);
      }
      function eo(e, t) {
        let r = et(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIScreenOpened: { version: 1 },
          }),
          a = {
            ...t,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            _meta: r,
          };
        e.trackEvent("ArtistConcerts.Opened", a);
      }
      function ec(e, t) {
        let r = et(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIScreenClosed: { version: 1 },
          }),
          a = {
            ...t,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            _meta: r,
          };
        e.trackEvent("ArtistConcerts.Closed", a);
      }
      function el(e, t) {
        let { objectPos: r = 1 } = t,
          a = et(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition1D: { version: 1 },
          }),
          s = {
            ...t,
            objectPos: r,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            objectType: "concert",
            _meta: a,
          };
        e.trackEvent("ArtistConcerts.Concert.Showed", s);
      }
      function eu(e, t) {
        let { objectPos: r = 1 } = t,
          a = et(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIScreenNavigated: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition1D: { version: 1 },
          }),
          s = {
            ...t,
            objectPos: r,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            objectType: "concert",
            from: "artist_concerts_screen",
            _meta: a,
          };
        e.trackEvent("ArtistConcerts.Concert.Navigated", s);
      }
      function ed(e, t) {
        let {
            skeletonId: r = "",
            mainObjectType: a = y.NonApplicable,
            mainObjectId: s = "",
            tabId: i = "",
            tabPos: n = 0,
            isTabSelectedByDefault: o = !1,
            entityPosX: c = 1,
            entityPosY: l = 1,
            objectsCount: u = 0,
            displayReasonId: d = "",
            filterKey: h = "",
            filterValue: f = "",
            filterPos: m = 0,
          } = t,
          g = et(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
          }),
          p = {
            ...t,
            skeletonId: r,
            mainObjectType: a,
            mainObjectId: s,
            tabId: i,
            tabPos: n,
            isTabSelectedByDefault: o,
            entityPosX: c,
            entityPosY: l,
            objectsCount: u,
            displayReasonId: d,
            filterKey: h,
            filterValue: f,
            filterPos: m,
            _meta: g,
          };
        e.trackEvent("LandingBlock.Loaded", p);
      }
      function eh(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: s = "",
            mainObjectType: i = y.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
          } = t,
          v = et(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            uIEntityLifecycle: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          E = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: s,
            mainObjectType: i,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            _meta: v,
          };
        e.trackEvent("LandingBlock.Showed", E);
      }
      function ef(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: s = "",
            mainObjectType: i = y.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
          } = t,
          v = et(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            uIEntityLifecycle: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          E = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: s,
            mainObjectType: i,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            _meta: v,
          };
        e.trackEvent("LandingBlock.Hidden", E);
      }
      function em(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: s = "",
            mainObjectType: i = y.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
            deepLink: v = "",
          } = t,
          E = et(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            uIEntityNavigated: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          P = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: s,
            mainObjectType: i,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            deepLink: v,
            _meta: E,
          };
        e.trackEvent("LandingBlock.Navigated", P);
      }
      function eg(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: s = "",
            mainObjectType: i = y.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
          } = t,
          v = et(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          E = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: s,
            mainObjectType: i,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            _meta: v,
          };
        e.trackEvent("LandingBlock.Started", E);
      }
      ((a || (a = {})).ConcertScreen = "concert_screen"),
        ((b = s || (s = {})).Album = "album"),
        (b.Playlist = "playlist"),
        (b.Category = "category"),
        (b.Promotion = "promotion"),
        (b.TrackChartItem = "track-chart-item"),
        (b.AlbumChartItem = "album-chart-item"),
        (b.Station = "station"),
        (b.Track = "track"),
        (b.MenuItemAlbum = "menu-item-album"),
        (b.MenuItemPlaylist = "menu-item-playlist"),
        (b.Artist = "artist"),
        (b.Tab = "tab"),
        (b.GenerativeStation = "generative-station"),
        (b.Video = "video"),
        (b.VideoPreview = "video-preview"),
        (b.LastActiveItem = "last_active_item"),
        (b.MyShelf = "my_shelf"),
        (b.Audiobook = "audiobook"),
        (b.Podcast = "podcast"),
        ((k = i || (i = {})).Station = "station"),
        (k.Chromecast = "chromecast"),
        (k.Airplay = "airplay"),
        (k.Bluetooth = "bluetooth"),
        (k.Sonos = "sonos"),
        (k.SamsungSdk = "samsung_sdk"),
        (k.YandexTv = "yandex_tv"),
        (k.Phone = "phone"),
        (k.AndroidTv = "android_tv"),
        (k.AppleTv = "apple_tv"),
        (k.WebTv = "web_tv"),
        (k.Web = "web"),
        (k.Unknown = "unknown"),
        ((R = n || (n = {})).Main = "main"),
        (R.Podcasts = "podcasts"),
        (R.Audiobooks = "audiobooks"),
        (R.Kids = "kids"),
        (R.Own = "own"),
        ((A = o || (o = {})).Top = "top"),
        (A.Track = "track"),
        (A.Album = "album"),
        (A.Artist = "artist"),
        (A.Playlist = "playlist"),
        (A.Podcast = "podcast"),
        (A.Book = "book"),
        (A.Spoken = "spoken"),
        (A.KidsMusic = "kids_music"),
        (A.KidsPlaylist = "kids_playlist"),
        (A.KidsSpoken = "kids_spoken"),
        (A.SpokenPlaylist = "spoken_playlist"),
        (A.Video = "video"),
        (A.Clip = "clip"),
        (A.Other = "other"),
        ((I = c || (c = {})).Artist = "artist"),
        (I.Track = "track"),
        (I.Playlist = "playlist"),
        (I.Album = "album"),
        (I.Wave = "wave"),
        (I.Video = "video"),
        ((O = l || (l = {})).ArtistScreen = "artist_screen"),
        (O.AlbumScreen = "album_screen"),
        (O.CompilationsScreen = "compilations_screen"),
        (O.PlaylistScreen = "playlist_screen"),
        (O.TrackActionsScreen = "track_actions_screen"),
        (O.ShareScreen = "share_screen"),
        (O.AddTracksScreen = "add_tracks_screen"),
        (O.TextScreen = "text_screen"),
        (O.DescriptionScreen = "description_screen"),
        (O.SelectDeviceScreen = "select_device_screen"),
        (O.Link = "link"),
        (O.VideoScreen = "video_screen"),
        (O.VideoWaveScreen = "video_wave_screen"),
        ((L = u || (u = {})).Pult = "pult"),
        (L.PultWithStation = "pult_with_station"),
        (L.FullScreen = "full_screen"),
        (L.NonFullScreen = "non_full_screen"),
        (L.Bottomsheet = "bottomsheet"),
        ((N = d || (d = {})).Timer = "timer"),
        (N.Cross = "cross"),
        ((U = h || (h = {})).Promotions = "promotions"),
        (U.Popular = "popular"),
        (U.TrackChart = "track-chart"),
        (U.AlbumChart = "album-chart"),
        (U.RecentlyPlayed = "recently-played"),
        (U.Editorial = "editorial"),
        (U.EditorialPlaylists = "editorial-playlists"),
        (U.PlaylistWithTracks = "playlist-with-tracks"),
        (U.Category = "category"),
        (U.CategoriesTab = "categories-tab"),
        (U.Radio = "radio"),
        (U.TimedShow = "timed-show"),
        (U.Menu = "menu"),
        (U.YearResultsPersonalPlaylist = "year_results_personal_playlist"),
        (U.TagCompilation = "tag-compilation"),
        (U.LikedPodcasts = "liked_podcasts"),
        (U.Shelf = "shelf"),
        (U.BookmateBanner = "bookmateBanner"),
        (U.MenuTab = "menuTab"),
        ((D = f || (f = {})).AlbumListScreen = "album_list_screen"),
        (D.PlaylistListScreen = "playlist_list_screen"),
        (D.AlbumChartScreen = "album_chart_screen"),
        (D.TrackChartScreen = "track_chart_screen"),
        (D.PlaylistScreen = "playlist_screen"),
        (D.StoriesScreen = "stories_screen"),
        (D.GenreScreen = "genre_screen"),
        (D.NewReleasesTabScreen = "new_releases_tab_screen"),
        (D.ChartTabScreen = "chart_tab_screen"),
        (D.MixesTabScreen = "mixes_tab_screen"),
        (D.RecentlyPlayedScreen = "recentlyPlayedScreen"),
        (D.LikedScreen = "likedScreen"),
        (D.PodcastsTabScreen = "podcasts_tab_screen"),
        ((F = m || (m = {})).User = "user"),
        (F.Smart = "smart"),
        (F.Editor = "editor"),
        (F.Liked = "liked"),
        (F.Chart = "chart"),
        ((H = g || (g = {})).Music = "music"),
        (H.Podcast = "podcast"),
        (H.FairyTale = "fairy-tale"),
        (H.Audiobook = "audiobook"),
        (H.Poetry = "poetry"),
        (H.Article = "article"),
        (H.Lecture = "lecture"),
        (H.Show = "show"),
        (H.Radio = "radio"),
        (H.Unknown = "unknown"),
        ((M = p || (p = {})).AlbumListScreen = "album_list_screen"),
        (M.PlaylistListScreen = "playlist_list_screen"),
        (M.PlaylistScreen = "playlist_screen"),
        (M.AlbumScreen = "album_screen"),
        (M.TreesScreen = "trees_screen"),
        (M.StoriesScreen = "stories_screen"),
        (M.Link = "link"),
        ((j = y || (y = {})).Audiobook = "audiobook"),
        (j.Track = "track"),
        (j.Artist = "artist"),
        (j.Album = "album"),
        (j.Playlist = "playlist"),
        (j.Wave = "wave"),
        (j.Video = "video"),
        (j.Generative = "generative"),
        (j.Feature = "feature"),
        (j.Teaser = "teaser"),
        (j.Shortcut = "shortcut"),
        (j.Concert = "concert"),
        (j.UpcomingAlbum = "upcoming_album"),
        (j.NonApplicable = "non_applicable"),
        ((W = v || (v = {})).ArtistScreen = "artist_screen"),
        (W.ArtistListScreen = "artist_list_screen"),
        (W.TrackListScreen = "track_list_screen"),
        (W.AlbumScreen = "album_screen"),
        (W.AlbumListScreen = "album_list_screen"),
        (W.CompilationsScreen = "compilations_screen"),
        (W.CompilationsListScreen = "compilations_list_screen"),
        (W.ConcertScreen = "concert_screen"),
        (W.PlaylistScreen = "playlist_screen"),
        (W.PlaylistListScreen = "playlist_list_screen"),
        (W.TrackActionsScreen = "track_actions_screen"),
        (W.ShareScreen = "share_screen"),
        (W.Link = "link"),
        (W.VideoScreen = "video_screen"),
        (W.PodcastLandingScreen = "podcast_landing_screen"),
        (W.NonmusicLandingScreen = "nonmusic_landing_screen"),
        (W.KidsLandingScreen = "kids_landing_screen"),
        (W.AlbumChartScreen = "album_chart_screen"),
        (W.TicketPurchaseScreen = "ticket_purchase_screen"),
        (W.AddTracksScreen = "add_tracks_screen"),
        (W.ContestScreen = "contest_screen"),
        (W.TrackChartScreen = "track_chart_screen"),
        (W.MainScreen = "main_screen"),
        (W.TrackShareScreen = "track_share_screen"),
        (W.ExpandedPlayerScreen = "expanded_player_screen"),
        (W.CommunicationScreen = "communication_screen"),
        (W.AlbumShareScreen = "album_share_screen"),
        (W.SearchScreen = "search_screen"),
        (W.TreesScreen = "trees_screen"),
        (W.YearResultsScreen = "year_results_screen"),
        (W.SearchObjectListScreen = "search_object_list_screen"),
        (W.FunnelScreen = "funnel_screen"),
        (W.TextScreen = "text_screen"),
        (W.BottomsheetScreen = "bottomsheet_screen"),
        (W.QueueScreen = "queue_screen"),
        (W.HistoryScreen = "history_screen"),
        (W.ConcertPurchaseScreen = "concert_purchase_screen"),
        ((B = E || (E = {})).SearchScreen = "search_screen"),
        (B.CollectionLandingScreen = "collection_landing_screen"),
        (B.MainScreen = "main_screen"),
        (B.NonmusicLandingScreen = "nonmusic_landing_screen"),
        (B.PodcastLandingScreen = "podcast_landing_screen"),
        (B.AudiobookLandingScreen = "audiobook_landing_screen"),
        (B.KidsLandingScreen = "kids_landing_screen"),
        (B.DynamicScreen = "dynamic_screen"),
        ((q = P || (P = {})).Next = "next"),
        (q.End = "end"),
        ((Y = x || (x = {})).Tap = "tap"),
        (Y.LongTap = "longTap"),
        (Y.DoubleTap = "doubleTap"),
        (Y.Pan = "pan"),
        (Y.Swipe = "swipe"),
        ((V = _ || (_ = {})).PersonalResults = "personal_results"),
        (V.ArtistPersonalResults = "artist_personal_results"),
        ((K = S || (S = {})).Concert = "concert"),
        (K.Shortcut = "shortcut"),
        (($ = T || (T = {})).ConcertScreen = "concert_screen"),
        ($.ConcertPurchaseScreen = "concert_purchase_screen"),
        ($.ArtistConcertsScreen = "artist_concerts_screen"),
        ((G = C || (C = {})).ConcertScreen = "concert_screen"),
        (G.ConcertPurchaseScreen = "concert_purchase_screen"),
        ((w || (w = {})).ConcertPurchaseScreen = "concert_purchase_screen");
    },
    63278: function (e, t, r) {
      "use strict";
      r.d(t, {
        y: function () {
          return n;
        },
      });
      var a,
        s =
          ((a = function (e, t) {
            return (a =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = e;
            }
            a(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        i = function (e, t) {
          var r = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (r[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var s = 0, a = Object.getOwnPropertySymbols(e);
              s < a.length;
              s++
            )
              0 > t.indexOf(a[s]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[s]) &&
                (r[a[s]] = e[a[s]]);
          return r;
        },
        n = (function (e) {
          function t(r, a) {
            void 0 === a && (a = {});
            var s = this,
              n = a.code,
              o = a.data,
              c = i(a, ["code", "data"]),
              l = r || "Internal error";
            return (
              Object.defineProperty((s = e.call(this, l, c) || this), "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseException",
              }),
              Object.defineProperty(s, "message", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(s, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(s, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(s, "stack", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (s.message = l),
              (s.code = void 0 === n ? "E_INTERNAL" : n),
              (s.data = void 0 === o ? {} : o),
              (s.stack = Error(l).stack),
              Object.setPrototypeOf(s, t.prototype),
              s
            );
          }
          return s(t, e), t;
        })(Error);
    },
    65237: function (e, t, r) {
      "use strict";
      var a, s, i, n, o, c, l, u, d, h, f, m, g, p, y, v, E, P, x, _, S, T, C;
      r.d(t, {
        Qm: function () {
          return h;
        },
        r1: function () {
          return a;
        },
        EW: function () {
          return m;
        },
        oF: function () {
          return s;
        },
        we: function () {
          return i;
        },
        qe: function () {
          return f;
        },
        ay: function () {
          return u;
        },
        Sc: function () {
          return l;
        },
        zu: function () {
          return n;
        },
        Vc: function () {
          return o;
        },
      }),
        ((g = a || (a = {})).DEFAULT = "default"),
        (g.DONATION = "donation"),
        (g.REWIND = "year-rewind"),
        ((p = s || (s = {})).UNKNOWN = "unknown"),
        (p.MALE = "male"),
        (p.FEMALE = "female"),
        ((y = i || (i = {})).PUBLIC = "public"),
        (y.PRIVATE = "private"),
        ((v = n || (n = {})).OWN = "OWN"),
        (v.UGC = "UGC"),
        (v.OWN_REPLACED_TO_UGC = "OWN_REPLACED_TO_UGC"),
        (v.EXTERNAL = "EXTERNAL"),
        ((E = o || (o = {})).TRACK = "track"),
        (E.MUSIC = "music"),
        (E.NOISE = "noise"),
        (E.PODCAST = "podcast-episode"),
        (E.COMMENT = "comment"),
        (E.ARTICLE = "article"),
        (E.ASMR = "asmr"),
        (E.RADIO = "radio"),
        (E.SHOW = "show"),
        (E.LECTURE = "lecture"),
        (E.FAIRY_TALE = "fairy-tale"),
        (E.AUDIOBOOK = "audiobook"),
        (E.POETRY = "poetry"),
        ((c || (c = {})).SMART_PREVIEW = "smart_preview"),
        ((P = l || (l = {})).ALL = "all"),
        (P.TRACK = "track"),
        (P.ALBUM = "album"),
        (P.ARTIST = "artist"),
        (P.PLAYLIST = "playlist"),
        (P.WAVE = "wave"),
        (P.GENRE = "genre"),
        (P.USER = "user"),
        (P.UGC_TRACK = "ugc_track"),
        (P.PODCAST = "podcast"),
        (P.PODCAST_EPISODE = "podcast_episode"),
        (P.VIDEO = "video"),
        (P.LYRICS = "lyrics"),
        (P.CLIP = "clip"),
        ((x = u || (u = {})).TOP = "top"),
        (x.TRACK = "track"),
        (x.CLIP = "clip"),
        (x.ALBUM = "album"),
        (x.ARTIST = "artist"),
        (x.PLAYLIST = "playlist"),
        (x.KIDS_MUSIC = "kids-music"),
        (x.KIDS_PLAYLIST = "kids-playlist"),
        (x.SPOKEN_PLAYLIST = "spoken-playlist"),
        (x.PODCAST = "podcast"),
        (x.BOOK = "book"),
        (x.KIDS_PODCAST = "kids-podcast"),
        (x.KIDS_BOOK = "kids-book"),
        ((_ = d || (d = {})).PRIMARY = "primary"),
        (_.SECONDARY = "secondary"),
        ((S = h || (h = {})).ALBUM = "album_item"),
        (S.ARTIST = "artist_item"),
        (S.PLAYLIST = "playlist_item"),
        (S.TRACK = "full_track_item"),
        (S.LIKED_PLAYLIST = "liked_playlist_item"),
        (S.PERSONAL_PLAYLIST = "personal_playlist_item"),
        (S.WAVE = "wave_item"),
        (S.MIX = "mix"),
        (S.LIKED_ALBUM = "liked_album_item"),
        (S.PRESAVED_ALBUM = "presaved_album_item"),
        (S.CHART_ALBUM = "chart_album_item"),
        (S.MENU = "menu_item"),
        ((T = f || (f = {})).ALBUMS = "albums"),
        (T.ARTISTS = "artists"),
        (T.PLAYLISTS = "playlists"),
        ((C = m || (m = {})).TRACK = "track"),
        (C.WAVE = "wave"),
        (C.ARTIST = "artist"),
        (C.PLAYLIST = "playlist"),
        (C.ALBUM = "album"),
        (C.OTHER = "other"),
        (C.SEARCH = "search");
    },
    48616: function (e, t, r) {
      "use strict";
      r.d(t, {
        Rc: function () {
          return eC;
        },
        VZ: function () {
          return M;
        },
        SZ: function () {
          return eb;
        },
        cn: function () {
          return eA;
        },
        h9: function () {
          return F;
        },
        UN: function () {
          return eQ;
        },
        V9: function () {
          return V;
        },
        nL: function () {
          return et;
        },
        aU: function () {
          return Z;
        },
        F1: function () {
          return H;
        },
        em: function () {
          return $;
        },
        Qm: function () {
          return eS.Qm;
        },
        BS: function () {
          return e8;
        },
        Y7: function () {
          return eX;
        },
        r1: function () {
          return eS.r1;
        },
        l: function () {
          return e$;
        },
        dF: function () {
          return eG;
        },
        nN: function () {
          return q;
        },
        pi: function () {
          return eU;
        },
        gQ: function () {
          return X;
        },
        Fr: function () {
          return eN;
        },
        jB: function () {
          return ee;
        },
        TA: function () {
          return eD;
        },
        Vf: function () {
          return er;
        },
        Ai: function () {
          return e0;
        },
        yG: function () {
          return G;
        },
        kF: function () {
          return eF;
        },
        z3: function () {
          return D;
        },
        EW: function () {
          return eS.EW;
        },
        E6: function () {
          return eK;
        },
        UE: function () {
          return eT;
        },
        hP: function () {
          return e1;
        },
        oF: function () {
          return eS.oF;
        },
        pH: function () {
          return W;
        },
        mD: function () {
          return eY;
        },
        IW: function () {
          return ez;
        },
        KZ: function () {
          return eu;
        },
        Bl: function () {
          return ek;
        },
        we: function () {
          return eS.we;
        },
        m3: function () {
          return eR;
        },
        ol: function () {
          return eB;
        },
        qe: function () {
          return eS.qe;
        },
        nJ: function () {
          return Y;
        },
        Ud: function () {
          return ej;
        },
        C: function () {
          return es;
        },
        pI: function () {
          return en;
        },
        NE: function () {
          return ei;
        },
        Bm: function () {
          return eo;
        },
        ay: function () {
          return eS.ay;
        },
        Po: function () {
          return eZ;
        },
        xW: function () {
          return eW;
        },
        kx: function () {
          return ec;
        },
        Sc: function () {
          return eS.Sc;
        },
        lp: function () {
          return ey;
        },
        tz: function () {
          return eq;
        },
        _O: function () {
          return ed;
        },
        PI: function () {
          return eh;
        },
        yC: function () {
          return em;
        },
        H7: function () {
          return ef;
        },
        As: function () {
          return j;
        },
        ro: function () {
          return J;
        },
        hd: function () {
          return eJ;
        },
        cp: function () {
          return eV;
        },
        O3: function () {
          return eH;
        },
        mk: function () {
          return ea;
        },
        zu: function () {
          return eS.zu;
        },
        Vc: function () {
          return eS.Vc;
        },
        HZ: function () {
          return eO;
        },
        J7: function () {
          return K;
        },
        Vn: function () {
          return eI;
        },
        Bi: function () {
          return z;
        },
        ZW: function () {
          return Q;
        },
      });
      var a,
        s,
        i,
        n,
        o,
        c,
        l,
        u,
        d,
        h,
        f,
        m,
        g,
        p,
        y,
        v,
        E,
        P,
        x,
        _,
        S,
        T,
        C,
        w,
        b,
        k,
        R,
        A,
        I,
        O,
        L,
        N,
        U,
        D,
        F,
        H,
        M,
        j,
        W,
        B,
        q,
        Y,
        V,
        K,
        $,
        G,
        z,
        Q,
        X,
        Z,
        J,
        ee,
        et,
        er,
        ea,
        es,
        ei,
        en,
        eo,
        ec,
        el,
        eu,
        ed,
        eh,
        ef,
        em,
        eg,
        ep,
        ey,
        ev = r(42503);
      class eE {
        httpClient;
        constructor(e) {
          this.httpClient = e;
        }
      }
      let eP = new Set(),
        ex = (e) => {
          let t = /\[.+\]/gi.test(e),
            r = /\[...notFound\]/.test(e);
          if (t && !r) {
            let t = `${e
              .replaceAll(/\/(?!$)/gi, "\\/")
              .replace(/\/(?=$)/i, "")
              .replaceAll(/\[[^/-]+\]/gi, "([^/]+)")}\\/?`;
            eP.add(RegExp(t, "ig"));
          }
        };
      class e_ extends eE {
        httpClient;
        config;
        retryPolicyConfig;
        constructor(e, t) {
          if (
            (super(e),
            (this.httpClient = e),
            (this.config = t),
            (this.retryPolicyConfig = t.retryPolicyConfig),
            Array.isArray(t.aggregatedIdUrlScheme))
          )
            for (let e of t.aggregatedIdUrlScheme) ex(e);
          else t.aggregatedIdUrlScheme && ex(t.aggregatedIdUrlScheme);
        }
        createRequestHeadersFromParams(e) {
          let t = e?.common?.oauth || this.config.params.common.oauth,
            r = e?.common?.client || this.config.params.common.client,
            a = e?.common?.language || this.config.params.common.language,
            s = e?.customRequestId || (0, ev.Z)();
          return {
            authorization: void 0 !== t ? `OAuth ${t}` : void 0,
            "x-yandex-music-client": r,
            "accept-language": a,
            "x-yandex-music-frontend": "new",
            "X-Request-Id": s,
          };
        }
        createTvmHeadersFromParams({ params: e, target: t }) {
          let r = e?.tvmTickets || this.config.params.tvmTickets;
          if (r && t) {
            let e = r[t];
            if (e) return { "X-Ya-Service-Ticket": e.ticket };
          }
          return {};
        }
        createUserTicketHeaderFromParams() {
          let e = this.config.params.userTicket;
          return e ? { "X-Ya-User-Ticket": e } : {};
        }
        getRetryPolicyConfig(e) {
          return { config: this.retryPolicyConfig, isNotIdempotent: e };
        }
      }
      ((a = D || (D = {})).RU = "ru"),
        (a.EN = "en"),
        (a.UK = "uk"),
        (a.BE = "be"),
        (a.KK = "kk"),
        (a.HY = "hy"),
        (a.AZ = "az"),
        (a.KA = "ka"),
        (a.HE = "he"),
        (a.UZ = "uz"),
        (a.TG = "tg"),
        (a.TR = "tr"),
        (a.JA = "ja"),
        (a.ZH = "zh"),
        (a.KO = "ko"),
        (a.TH = "th"),
        (a.ID = "id"),
        (a.DE = "de"),
        (a.EL = "el"),
        (a.RO = "ro"),
        (a.MO = "mo"),
        (a.AR = "ar");
      var eS = r(65237);
      ((s = F || (F = {})).UP = "up"),
        (s.DOWN = "down"),
        (s.SAME = "same"),
        (s.NEW = "new"),
        ((i = H || (H = {})).EXPLICIT = "explicit"),
        (i.CLEAN = "clean"),
        ((n = M || (M = {})).UNKNOWN = "unknown"),
        (n.ALBUM = "album"),
        (n.SINGLE = "single"),
        (n.COMPILATION = "compilation"),
        (n.PODCAST = "podcast"),
        (n.FAIRY_TALE = "fairy-tale"),
        (n.AUDIOBOOK = "audiobook"),
        (n.VIDEO_SINGLE = "video-single"),
        (n.VIDEO_ALBUM = "video-album"),
        (n.RADIO = "radio"),
        (n.ASMR = "asmr"),
        (n.NOISE = "noise"),
        ((o = j || (j = {})).ASC = "asc"),
        (o.DESC = "desc"),
        ((c = W || (W = {}))[(c.DAY = 1)] = "DAY"),
        (c[(c.WEEK = 7)] = "WEEK"),
        (c[(c.MONTH = 30)] = "MONTH"),
        ((B || (B = {})).Blackbox = "blackbox"),
        ((l = q || (q = {})).RADIAL = "RADIAL"),
        (l.STACK = "STACK"),
        ((u = Y || (Y = {})).LOSSLESS = "lossless"),
        (u.HQ = "hq"),
        (u.NQ = "nq"),
        (u.LQ = "lq"),
        (u.PREVIEW = "preview"),
        (u.SMART_PREVIEW = "smart_preview"),
        ((d = V || (V = {})).MP3 = "mp3"),
        (d.FLAC = "flac"),
        (d.AAC = "aac"),
        (d.HEAAC = "he-aac"),
        ((h = K || (K = {})).RAW = "raw"),
        (h.ENCRAW = "encraw"),
        ((f = $ || ($ = {})).MODAL = "modal"),
        (f.FOREIGN_AGENT = "foreignAgent"),
        (f.INFORMATIONAL = "informational"),
        (f.AGE_18 = "age18"),
        (f.EXPLICIT = "explicit");
      let eT = [
        eS.Vc.AUDIOBOOK,
        eS.Vc.FAIRY_TALE,
        eS.Vc.PODCAST,
        eS.Vc.COMMENT,
      ];
      ((m = G || (G = {})).TEXT = "TEXT"),
        (m.LRC = "LRC"),
        (m.RICH_JSON = "RICH_JSON");
      class eC extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async experiments() {
          let e = this.config.gateway.prefixUrl,
            t = this.config.gateway.headers,
            r = await this.httpClient.get("account/experiments", {
              prefixUrl: e,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...t,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.experiments,
            }),
            a = await r.json();
          return a.result;
        }
        async experimentsDetails() {
          let e = this.config.gateway.prefixUrl,
            t = this.config.gateway.headers,
            r = await this.httpClient.get("account/experiments/details", {
              prefixUrl: e,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...t,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.experimentsDetails,
            }),
            a = await r.json();
          return a.result;
        }
        async settings() {
          let e = this.config.gateway.prefixUrl,
            t = this.config.gateway.headers,
            r = await this.httpClient.get("account/settings", {
              prefixUrl: e,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...t,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.settings,
            }),
            a = await r.json();
          return a.result;
        }
        async about() {
          let e = this.config.gateway.prefixUrl,
            t = this.config.gateway.headers,
            r = await this.httpClient.get("account/about", {
              prefixUrl: e,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...t,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.about,
            }),
            a = await r.json();
          return a.result;
        }
      }
      let ew = (e) => {
        let t = {};
        return (
          Object.getOwnPropertyNames(e)
            .filter((t) => void 0 !== e[t] && null !== e[t])
            .map((r) => {
              t[r] = String(e[r]);
            }),
          new URLSearchParams(t)
        );
      };
      class eb extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/albums/[albumId]/with-tracks`,
            `${t.gateway.prefixUrl}/albums/[albumId]/disclaimer`,
            `${t.gateway.prefixUrl}/albums/[albumId]/trailer`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getAlbumWithRichTracks(e) {
          let t = e.albumId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`albums/${t}/with-tracks`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getAlbumWithRichTracks,
              searchParams: ew({
                resumeStream: e.resumeStream,
                page: e.page,
                pageSize: e.pageSize,
                "sort-order": e.sortOrder,
                richTracks: !0,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getAlbumWithTracksIds(e) {
          let t = e.albumId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`albums/${t}/with-tracks`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getAlbumWithTracksIds,
              searchParams: ew({
                resumeStream: e.resumeStream,
                page: e.page,
                pageSize: e.pageSize,
                "sort-order": e.sortOrder,
                richTracks: !1,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getDisclaimer(e) {
          let t = e.albumId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`albums/${t}/disclaimer`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getDisclaimer,
            }),
            i = await s.json();
          return i.result;
        }
        async getTrailer(e) {
          let t = e.albumId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`albums/${t}/trailer`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getTrailer,
            }),
            i = await s.json();
          return i.result;
        }
      }
      class ek extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = `${t.gateway.prefixUrl}/playlist/[playlistUuid]/`),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getPlaylist(e) {
          let t = e.playlistUuid,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`playlist/${t}`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                resumeStream: e.resumeStream,
                richTracks: e.richTracks,
                trackPlayCounts: e.trackPlayCounts,
                withSimilarsLikesCount: e.withSimilarsLikesCount,
                page: e.page,
                pageSize: e.pageSize,
              }),
              timeout: this.config.timeouts?.getPlaylist,
            }),
            i = await s.json();
          return i.result;
        }
      }
      class eR extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = `${t.gateway.prefixUrl}/playlists/`),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getPlaylists(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("playlists", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                resumeStream: e.resumeStream,
                page: e.page,
                pageSize: e.pageSize,
                playlistIds: e.playlistIds,
              }),
            }),
            s = await a.json();
          return s.result;
        }
      }
      class eA extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/artists/[artistId]/tracks`,
            `${t.gateway.prefixUrl}/artists/[artistId]/safe-direct-albums`,
            `${t.gateway.prefixUrl}/artists/[artistId]/brief-info`,
            `${t.gateway.prefixUrl}/artists/[artistId]/similar`,
            `${t.gateway.prefixUrl}/artists/[artistId]/direct-albums`,
            `${t.gateway.prefixUrl}/artists/[artistId]/also-albums`,
            `${t.gateway.prefixUrl}/artists/[artistId]/discography-albums`,
            `${t.gateway.prefixUrl}/artists/[artistId]/concerts`,
            `${t.gateway.prefixUrl}/artists/[artistId]/familiar-you/info`,
            `${t.gateway.prefixUrl}/artists/[artistId]/familiar-you`,
            `${t.gateway.prefixUrl}/artists/[artistId]/disclaimer`,
            `${t.gateway.prefixUrl}/artists/[artistId]/trailer`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getArtistTracks(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/tracks`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                "sort-by": e.sort?.sortBy,
                "sort-order": e.sort?.sortOrder,
                page: e.page,
                pageSize: e.pageSize,
              }),
              timeout: this.config.timeouts?.getArtistTracks,
            }),
            i = await s.json();
          return i.result;
        }
        async getArtistTrackIds(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/track-ids`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...a,
              },
              searchParams: ew({ page: e.page, pageSize: e.pageSize }),
              timeout: this.config.timeouts?.getArtistTrackIds,
            }),
            i = await s.json();
          return i.result;
        }
        async getSafeDirectAlbums(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/safe-direct-albums`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                "sort-by": e.sort?.sortBy,
                "sort-order": e.sort?.sortOrder,
                limit: e.limit,
              }),
              timeout: this.config.timeouts?.getSafeDirectAlbums,
            }),
            i = await s.json();
          return i.result;
        }
        async getBriefInfo(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/brief-info`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                popularTracksCount: e.popularTracksCount,
                useClipDataFormat: e.useClipDataFormat,
                discographyBlockEnabled: e.discographyBlockEnabled,
                fetchPlaylistLikesCounts: e.fetchPlaylistLikesCounts,
              }),
              timeout: this.config.timeouts?.getBriefInfo,
            }),
            i = await s.json();
          return i.result;
        }
        async getSimilarArtists(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/similar`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getSimilarArtists,
            }),
            i = await s.json();
          return i.result;
        }
        async getDiscographyAlbums(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/discography-albums`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                page: e.page,
                pageSize: e.pageSize,
                "sort-by": e.sort?.sortBy,
                "sort-order": e.sort?.sortOrder,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getDirectAlbums(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/direct-albums`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                page: e.page,
                pageSize: e.pageSize,
                "sort-by": e.sort?.sortBy,
                "sort-order": e.sort?.sortOrder,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getAlsoAlbums(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/also-albums`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                page: e.page,
                pageSize: e.pageSize,
                "sort-by": e.sort?.sortBy,
                "sort-order": e.sort?.sortOrder,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getConcerts(e) {
          let t = e.artistId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/concerts`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getConcerts,
            }),
            i = await s.json();
          return i.result;
        }
        async getFamiliarYouInfo(e) {
          let { artistId: t, withWaveInfo: r, withCollectionInfo: a } = e,
            s = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            n = await this.httpClient.get(`artists/${t}/familiar-you/info`, {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getFamiliarYouInfo,
              searchParams: ew({ withWaveInfo: r, withCollectionInfo: a }),
            }),
            o = await n.json();
          return o.result;
        }
        async getFamiliarYou(e) {
          let {
              artistId: t,
              waveTracksLimit: r,
              collectionTracksLimit: a,
              collectionAlbumsLimit: s,
              withIds: i,
            } = e,
            n = this.config.gateway.prefixUrl,
            o = this.config.gateway.headers,
            c = await this.httpClient.get(`artists/${t}/familiar-you`, {
              prefixUrl: n,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...o,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getFamiliarYou,
              searchParams: ew({
                waveTracksLimit: r,
                collectionTracksLimit: a,
                collectionAlbumsLimit: s,
                withIds: i,
              }),
            }),
            l = await c.json();
          return l.result;
        }
        async getDisclaimer(e) {
          let { artistId: t } = e,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/disclaimer`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getDisclaimer,
            }),
            i = await s.json();
          return i.result;
        }
        async getTrailer(e) {
          let { artistId: t } = e,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`artists/${t}/trailer`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getTrailer,
            }),
            i = await s.json();
          return i.result;
        }
      }
      ((g = z || (z = {})).OK = "ok"),
        (g.ERROR = "error"),
        ((p = Q || (Q = {})).OK = "ok"),
        (p.ERROR = "error");
      class eI extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/users/[userId]/likes/albums/page`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/artists/page`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/playlists`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/list`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/create`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/delete`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/[playlistKind]`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/[playlistKind]/change-relative`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/[playlistKind]/name`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/[playlistKind]/description`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/[playlistKind]/cover/upload`,
            `${t.gateway.prefixUrl}/users/[userId]/playlists/[playlistKind]/trailer`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/tracks/add`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/tracks/[entityId]/remove`,
            `${t.gateway.prefixUrl}/users/[userId]/dislikes/tracks/add`,
            `${t.gateway.prefixUrl}/users/[userId]/dislikes/tracks/[entityId]/remove`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/artists/add`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/artists/[entityId]/remove`,
            `${t.gateway.prefixUrl}/users/[userId]/dislikes/artists/add`,
            `${t.gateway.prefixUrl}/users/[userId]/dislikes/artists/[entityId]/remove`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/albums/add`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/albums/[entityId]/remove`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/playlists/add`,
            `${t.gateway.prefixUrl}/users/[userId]/likes/playlists/[ownerId]-[kindId]/remove`,
            `${t.gateway.prefixUrl}/users/[userId]/presaves/add`,
            `${t.gateway.prefixUrl}/users/[userId]/presaves/remove`,
            `${t.gateway.prefixUrl}/users/[userId]/presaves`,
            `${t.gateway.prefixUrl}/users/[userId]/search-history`,
            `${t.gateway.prefixUrl}/users/[userId]/search-history/clear`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getLikedAlbums(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`users/${t}/likes/albums/page`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                rich: !0,
                page: e.page,
                pageSize: e.pageSize,
                "sort-by": e.sortBy,
                "sort-order": e.sortOrder,
                metaType: e.metaType,
              }),
              timeout: this.config.timeouts?.getLikedAlbums,
            }),
            i = await s.json();
          return i.result;
        }
        async getLikedArtists(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`users/${t}/likes/artists/page`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                page: e.page,
                pageSize: e.pageSize,
                "sort-by": e.sortBy,
                "sort-order": e.sortOrder,
                withTimestamps: e.withTimestamps,
              }),
              timeout: this.config.timeouts?.getLikedArtists,
            }),
            i = await s.json();
          return i.result;
        }
        async getLikedPlaylists(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`users/${t}/likes/playlists`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                page: e.page,
                pageSize: e.pageSize,
                "sort-by": e.sortBy,
                "sort-order": e.sortOrder,
                metaType: e.metaType,
                withTracks: e.withTracks,
              }),
              timeout: this.config.timeouts?.getLikedPlaylists,
            }),
            i = await s.json();
          return { likedPlaylists: i.result, pager: i.pager };
        }
        async getPlaylistsKinds(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`users/${t}/playlists/list/kinds`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getPlaylistsKinds,
            }),
            i = await s.json();
          return i.result;
        }
        async createPlaylist(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.post(`users/${t}/playlists/create`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.createPlaylist,
              searchParams: ew({
                visibility: e.visibility,
                title: e.title,
                description: e.description,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getPlaylistsByKinds(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.post(`users/${t}/playlists`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                kinds: e.kinds,
                withLikesCount: e.withLikesCount,
                withTracks: e.withTracks,
              }),
              timeout: this.config.timeouts?.getPlaylistsByKinds,
            }),
            i = await s.json();
          return i.result;
        }
        async getCreatedPlaylists(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`users/${t}/playlists/list`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                page: e.page,
                pageSize: e.pageSize,
                "sort-by": e.sortBy,
                "sort-order": e.sortOrder,
                withLikesCount: e.withLikesCount,
              }),
              timeout: this.config.timeouts?.getCreatedPlaylists,
            }),
            i = await s.json();
          return i.result;
        }
        async getPlaylistWithRichTracks(e) {
          let t = e.userId,
            r = e.playlistKind,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.get(`users/${t}/playlists/${r}`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                resumeStream: e.resumeStream,
                trackMetaType: e.trackMetaType,
                page: e.page,
                pageSize: e.pageSize,
                trackPlayCounts: e.trackPlayCounts,
                withSimilarsLikesCount: e.withSimilarsLikesCount,
                richTracks: !0,
              }),
              timeout: this.config.timeouts?.getPlaylistWithRichTracks,
            }),
            n = await i.json();
          return n.result;
        }
        async changePlaylistTitle(e) {
          let t = e.userId,
            r = e.playlistKind,
            a = await this.httpClient.post(`users/${t}/playlists/${r}/name`, {
              prefixUrl: this.config.gateway.prefixUrl,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ value: e.title }),
              timeout: this.config.timeouts?.changePlaylistTitle,
            }),
            s = await a.json();
          return s.result;
        }
        async deletePlaylist(e) {
          let t = e.userId,
            r = e.playlistKind,
            a = await this.httpClient.post(`users/${t}/playlists/${r}/delete`, {
              prefixUrl: this.config.gateway.prefixUrl,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.deletePlaylist,
            }),
            s = await a.json();
          return s.result;
        }
        async changePlaylistDescription(e) {
          let t = e.userId,
            r = e.playlistKind,
            a = await this.httpClient.post(
              `users/${t}/playlists/${r}/description`,
              {
                prefixUrl: this.config.gateway.prefixUrl,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: ew({ value: e.description }),
                timeout: this.config.timeouts?.changePlaylistDescription,
              },
            ),
            s = await a.json();
          return s.result;
        }
        async getPlaylistWithTracksIds(e) {
          let t = e.userId,
            r = e.playlistKind,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.get(`users/${t}/playlists/${r}`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                resumeStream: e.resumeStream,
                trackMetaType: e.trackMetaType,
                page: e.page,
                pageSize: e.pageSize,
                trackPlayCounts: e.trackPlayCounts,
                withSimilarsLikesCount: e.withSimilarsLikesCount,
                richTracks: !1,
              }),
              timeout: this.config.timeouts?.getPlaylistWithTracksIds,
            }),
            n = await i.json();
          return n.result;
        }
        async likeTrack(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(`users/${r}/likes/tracks/add`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ "track-id": t }),
              timeout: this.config.timeouts?.likeTrack,
            }),
            n = await i.json();
          return n?.result?.revision ? z.OK : z.ERROR;
        }
        async unlikeTrack(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${r}/likes/tracks/${t}/remove`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.unlikeTrack,
              },
            ),
            n = await i.json();
          return n?.result?.revision ? z.OK : z.ERROR;
        }
        async dislikeTrack(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(`users/${r}/dislikes/tracks/add`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ "track-id": t }),
              timeout: this.config.timeouts?.dislikeTrack,
            }),
            n = await i.json();
          return n?.result?.revision ? z.OK : z.ERROR;
        }
        async undislikeTrack(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${r}/dislikes/tracks/${t}/remove`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.undislikeTrack,
              },
            ),
            n = await i.json();
          return n?.result?.revision ? z.OK : z.ERROR;
        }
        async likeArtist(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(`users/${r}/likes/artists/add`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ "artist-id": t }),
              timeout: this.config.timeouts?.likeArtist,
            }),
            n = await i.json();
          return n?.result === z.OK ? z.OK : z.ERROR;
        }
        async unlikeArtist(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${r}/likes/artists/${t}/remove`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.unlikeArtist,
              },
            ),
            n = await i.json();
          return n?.result === z.OK ? z.OK : z.ERROR;
        }
        async dislikeArtist(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(`users/${r}/dislikes/artists/add`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ "artist-id": t }),
              timeout: this.config.timeouts?.dislikeArtist,
            }),
            n = await i.json();
          return n?.result === z.OK ? z.OK : z.ERROR;
        }
        async undislikeArtist(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${r}/dislikes/artists/${t}/remove`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.undislikeArtist,
              },
            ),
            n = await i.json();
          return n?.result === z.OK ? z.OK : z.ERROR;
        }
        async likeAlbum(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(`users/${r}/likes/albums/add`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ "album-id": t }),
              timeout: this.config.timeouts?.likeAlbum,
            }),
            n = await i.json();
          return n?.result === z.OK ? z.OK : z.ERROR;
        }
        async unlikeAlbum(e) {
          let t = e.entityId,
            r = e.userId,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${r}/likes/albums/${t}/remove`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.unlikeAlbum,
              },
            ),
            n = await i.json();
          return n?.result === z.OK ? z.OK : z.ERROR;
        }
        async likePlaylist(e) {
          let { userId: t, ownerId: r, kindId: a } = e,
            { prefixUrl: s, headers: i } = this.config.gateway,
            n = await this.httpClient.post(`users/${t}/likes/playlists/add`, {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ "owner-uid": r, kind: a }),
              timeout: this.config.timeouts?.likePlaylist,
            }),
            o = await n.json();
          return o?.result === z.OK ? z.OK : z.ERROR;
        }
        async unlikePlaylist(e) {
          let t = e.userId,
            r = e.ownerId,
            a = e.kindId,
            s = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            n = await this.httpClient.post(
              `users/${t}/likes/playlists/${r}-${a}/remove`,
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.unlikePlaylist,
              },
            ),
            o = await n.json();
          return o?.result === z.OK ? z.OK : z.ERROR;
        }
        async presaveAlbum(e) {
          let { userId: t, albumId: r, likeAfterRelease: a } = e,
            s = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            n = await this.httpClient.post(`users/${t}/presaves/add`, {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.presaveAlbum,
              searchParams: ew({ albumId: r, likeAfterRelease: a }),
            }),
            o = await n.json();
          return o?.result === Q.OK ? Q.OK : Q.ERROR;
        }
        async removePresaveAlbum(e) {
          let { userId: t, albumId: r } = e,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(`users/${t}/presaves/remove`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.removePresaveAlbum,
              searchParams: ew({ albumId: r }),
            }),
            n = await i.json();
          return n?.result === Q.OK ? Q.OK : Q.ERROR;
        }
        async getPresaves(e) {
          let { userId: t, includeReleased: r, includeUpcoming: a } = e,
            s = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            n = await this.httpClient.get(`users/${t}/presaves`, {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ includeReleased: r, includeUpcoming: a }),
              timeout: this.config.timeouts?.getPresaves,
            }),
            o = await n.json();
          return o.result;
        }
        async getSearchHistory(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`users/${t}/search-history`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                clientSearchContext: e.clientSearchContext,
                contentType: e.contentType,
                supportedTypes: e.supportedTypes,
              }),
              timeout: this.config.timeouts?.getSearchHistory,
            }),
            i = await s.json();
          return i.result;
        }
        async clearSearchHistory(e) {
          let t = e.userId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`users/${t}/search-history/clear`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.clearSearchHistory,
            }),
            i = await s.json();
          return i.result;
        }
        async changePlaylistRelative(e) {
          let { userId: t, playlistKind: r } = e,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${t}/playlists/${r}/change-relative`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: ew({ diff: e.diff, revision: e.revision }),
              },
            ),
            n = await i.json();
          return n.result;
        }
        async uploadPlaylistCover(e) {
          let { userId: t, playlistKind: r } = e,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${t}/playlists/${r}/cover/upload`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                body: e.formData,
                timeout: this.config.timeouts?.uploadPlaylistCover,
              },
            ),
            n = await i.json();
          return n.result;
        }
        async getPlaylistTrailer(e) {
          let { userId: t, playlistKind: r } = e,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.post(
              `users/${t}/playlists/${r}/trailer`,
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.getPlaylistTrailer,
              },
            ),
            n = await i.json();
          return n.result;
        }
      }
      class eO extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/tracks/[trackId]/download-info`,
            "https://storage.mds.yandex.net/file-download-info/[id1]/[id2]",
            `${t.gateway.prefixUrl}/tracks/[trackId]/disclaimer`,
            `${t.gateway.prefixUrl}/tracks/[trackId]/full-info`,
            `${t.gateway.prefixUrl}/tracks/[trackId]/credits`,
            `${t.gateway.prefixUrl}/tracks/[trackId]/lyrics`,
            `${t.gateway.prefixUrl}/tracks/[trackId]/trailer`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getStorageData(e) {
          let {
              formatFlags: t,
              direct: r,
              preview: a,
              canUseStreaming: s,
              tsInSeconds: i,
              sign: n,
              debug: o,
              trackId: c,
              isAliceRequester: l,
              requireMp3Link: u,
            } = e,
            d = this.config.gateway.prefixUrl,
            h = this.config.gateway.headers,
            f = `tracks/${c}/download-info`,
            m = await this.httpClient.get(f, {
              prefixUrl: d,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...h,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                formatFlags: t,
                debug: o,
                preview: a,
                direct: r,
                isAliceRequester: l,
                requireMp3Link: u,
                canUseStreaming: s,
                ts: i,
                sign: n,
              }),
              timeout: this.config.timeouts?.getStorageData,
            }),
            g = await m.json();
          return g.result;
        }
        async getSrcData(e) {
          let t = e.common?.language || this.config.params.common.language,
            { storageUrl: r } = e,
            a = this.config.gateway.headers,
            { overembed: s, externalDomain: i } = this.config,
            n = new URL(r),
            o = {};
          for (let e of n.searchParams.keys()) o[e] = n.searchParams.get(e);
          let c = await this.httpClient.get(r, {
            prefixUrl: "",
            headers: {
              "accept-language": t,
              ...this.createTvmHeadersFromParams({
                target: this.config.params.tvmTarget,
              }),
              ...this.createUserTicketHeaderFromParams(),
              ...a,
            },
            retry: this.getRetryPolicyConfig(),
            searchParams: ew({
              ...o,
              format: "json",
              __t: Date.now(),
              "external-domain": i,
              overembed: s,
            }),
            credentials: "same-origin",
            timeout: this.config.timeouts?.getSrcData,
          });
          return c.json();
        }
        async getTracksMeta(e) {
          let { trackIds: t, removeDuplicates: r = !1, withProgress: a } = e,
            s = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            n = await this.httpClient.get("tracks", {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                trackIds: t,
                removeDuplicates: r,
                withProgress: a,
              }),
              timeout: this.config.timeouts?.getTracksMeta,
            }),
            o = await n.json();
          return o.result;
        }
        async getFullInfoTrack(e) {
          let { trackId: t, albumId: r } = e,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = r ? `${t}:${r}` : t,
            n = await this.httpClient.get(`tracks/${i}/full-info`, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getFullInfoTrack,
            }),
            o = await n.json();
          return o.result;
        }
        async getCredits(e) {
          let { trackId: t } = e,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`tracks/${t}/credits`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getCredits,
            }),
            i = await s.json();
          return i.result;
        }
        async getDisclaimer(e) {
          let t = e.trackId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`tracks/${t}/disclaimer`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getDisclaimer,
            }),
            i = await s.json();
          return i.result;
        }
        async getTrailer(e) {
          let t = e.trackId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`tracks/${t}/trailer`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getTrailer,
            }),
            i = await s.json();
          return i.result;
        }
        async getLyrics(e) {
          let { trackId: t, sign: r, timeStamp: a, format: s } = e,
            i = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.get(`tracks/${t}/lyrics`, {
              prefixUrl: i,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...n,
              },
              searchParams: ew({ sign: r, timeStamp: a, format: s }),
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getLyrics,
            }),
            c = await o.json();
          return c.result;
        }
        async getLyricsText(e) {
          let t = await this.httpClient.get(e, {
              credentials: "omit",
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getLyricsText,
            }),
            r = await t.text();
          return r;
        }
      }
      ((y = X || (X = {})).TABS = "TABS"),
        (y.COLLECTION_PLAYLIST_WITH_LIKES = "COLLECTION_PLAYLIST_WITH_LIKES"),
        (y.COLLECTION_ALBUMS = "COLLECTION_ALBUMS"),
        (y.COLLECTION_ARTISTS = "COLLECTION_ARTISTS"),
        (y.COLLECTION_PLAYLISTS_CREATED = "COLLECTION_PLAYLISTS_CREATED"),
        (y.COLLECTION_PLAYLISTS_LIKED = "COLLECTION_PLAYLISTS_LIKED"),
        (y.COLLECTION_PLAYLISTS_LIKED_AND_CREATED =
          "COLLECTION_PLAYLISTS_LIKED_AND_CREATED"),
        (y.COLLECTION_ALBUMS_PRESAVES = "COLLECTION_ALBUMS_PRESAVES"),
        (y.NEW_RELEASES = "NEW_RELEASES"),
        (y.EDITORIAL_NEW_RELEASES = "EDITORIAL_NEW_RELEASES"),
        (y.NEW_PLAYLISTS = "NEW_PLAYLISTS"),
        (y.EDITORIAL_COMPILATION = "EDITORIAL_COMPILATION"),
        (y.RECOMMENDED_PLAYLISTS = "RECOMMENDED_PLAYLISTS"),
        (y.META_TAG_POPULAR_PLAYLISTS = "META_TAG_POPULAR_PLAYLISTS"),
        (y.META_TAG_NEW_ALBUMS = "META_TAG_NEW_ALBUMS"),
        (y.META_TAG_PLAYLISTS = "META_TAG_PLAYLISTS"),
        (y.MICRO_GENRE_ALBUMS = "MICRO_GENRE_ALBUMS"),
        (y.RECENTLY_PLAYED = "RECENTLY_PLAYED"),
        (y.CHART_TRACKS = "CHART_TRACKS"),
        (y.IN_STYLE = "IN_STYLE"),
        (y.MIXES = "MIXES"),
        (y.OPEN_PLAYLIST = "OPEN_PLAYLIST"),
        (y.SMART_OPEN_PLAYLIST = "SMART_OPEN_PLAYLIST"),
        (y.NON_MUSIC_OPEN_PLAYLIST = "NON_MUSIC_OPEN_PLAYLIST"),
        (y.PERSONAL_ARTISTS = "PERSONAL_ARTISTS"),
        (y.NEW_STARS_ARTISTS = "NEW_STARS_ARTISTS"),
        (y.EDITORIAL_ARTISTS = "EDITORIAL_ARTISTS"),
        (y.META_TAG_POPULAR_ARTISTS = "META_TAG_POPULAR_ARTISTS"),
        (y.MICRO_GENRE_TOP_ARTISTS = "MICRO_GENRE_TOP_ARTISTS"),
        (y.MICRO_GENRE_ARTISTS = "MICRO_GENRE_ARTISTS"),
        (y.PROMOTIONS = "PROMOTIONS"),
        (y.EDITORIAL_PROMOTIONS = "EDITORIAL_PROMOTIONS"),
        (y.PERSONAL_PLAYLISTS = "PERSONAL_PLAYLISTS"),
        (y.REWIND_PLAYLISTS = "REWIND_PLAYLISTS"),
        (y.SPECIAL = "SPECIAL"),
        (y.WIZARD = "WIZARD"),
        (y.WAVES = "WAVES"),
        (y.NEUROMUSIC = "NEUROMUSIC"),
        (y.LIKES_AND_HISTORY = "LIKES_AND_HISTORY"),
        (y.NON_MUSIC_EDITORIAL_COMPILATION = "NON_MUSIC_EDITORIAL_COMPILATION"),
        (y.CHART_ALBUMS = "CHART_ALBUMS"),
        (y.CONCERTS_TOP = "CONCERTS_TOP"),
        (y.EDITORIAL_WAVES = "EDITORIAL_WAVES"),
        (y.META_TAG_WAVE = "META_TAG_WAVE"),
        (y.MICRO_GENRE_WAVE = "MICRO_GENRE_WAVE"),
        (y.ITEM_LIST = "ITEM_LIST");
      let eL = (e, { uri: t, count: r, countWeb: a, ...s }, i) => {
        let n = e + t,
          o = ew(s);
        a && o.append(i ? "limit" : "count", String(a));
        let c = o.toString();
        return c ? `${n}?${c}` : n;
      };
      class eN extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        createLandingRequestHeaders() {
          return { "X-Yandex-Music-Without-Invocation-Info": "1" };
        }
        async getSkeleton(e) {
          let { gateway: t, landing: r } = this.config,
            a = r || t,
            s = a.prefixUrl,
            i = a.headers,
            n = await this.httpClient.get(`landing/skeleton/${e.id}`, {
              prefixUrl: s,
              headers: {
                ...this.createLandingRequestHeaders(),
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ showWizard: e.showWizard }),
              timeout: this.config.timeouts?.getSkeleton,
            });
          return n.json();
        }
        async getBlock(e, t) {
          let r = t === X.CHART_TRACKS,
            { gateway: a, landing: s } = this.config,
            i = s || a,
            n = i.prefixUrl,
            o = i.headers,
            c = eL(n, e, r),
            l = await this.httpClient.get(c, {
              headers: {
                ...this.createLandingRequestHeaders(),
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...o,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getBlock,
            });
          return l.json();
        }
        async getBlockEntities(e) {
          let { blockId: t, page: r, pageSize: a } = e,
            s = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            n = await this.httpClient.get(`landing/block/${t}/entities`, {
              prefixUrl: s,
              headers: {
                ...this.createLandingRequestHeaders(),
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ page: r, pageSize: a }),
            });
          return n.json();
        }
      }
      ((v = Z || (Z = {})).PLAYLIST_LIKED_TAB = "liked_playlist_tab"),
        (v.PLAYLIST_CREATED_TAB = "created_playlist_tab"),
        ((E = J || (J = {})).LEFT = "LEFT"),
        (E.RIGHT = "Right"),
        ((P = ee || (ee = {})).WEB_MAIN = "web_main"),
        (P.WEB_COLLECTION = "web_collection"),
        (P.KINOPOISK = "kinopoisk"),
        (P.WEB_NON_MUSIC = "web_non_music"),
        ((x = et || (et = {})).ALBUM = "album_tab"),
        (x.PRESAVED_ALBUM = "presaved_album_tab");
      class eU extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getMetatags(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("landing3/metatags", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getMetatags,
            }),
            s = await a.json();
          return s.result;
        }
      }
      class eD extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getAllIds(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("library/all-ids", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getAllIds,
            }),
            s = await a.json();
          return s.result;
        }
      }
      ((_ = er || (er = {}))[(_.LIKED = 1)] = "LIKED"),
        (_[(_.DISLIKED = -1)] = "DISLIKED");
      class eF extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/metatags/[id]`,
            `${t.gateway.prefixUrl}/metatags/[id]/albums`,
            `${t.gateway.prefixUrl}/metatags/[id]/artists`,
            `${t.gateway.prefixUrl}/metatags/[id]/playlists`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getMetatagById(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`metatags/${t}`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                tracksCount: e.tracksCount,
                artistsCount: e.artistsCount,
                composersCount: e.composersCount,
                albumsCount: e.albumsCount,
                promotionsCount: e.promotionsCount,
                featuresCount: e.featuresCount,
                playlistsCount: e.playlistsCount,
                concertsCount: e.concertsCount,
                tracksSortBy: e.tracksSortBy,
                albumsSortBy: e.albumsSortBy,
                withLikesCount: e.withLikesCount,
              }),
              timeout: this.config.timeouts?.getMetatagById,
            }),
            i = await s.json();
          return i.result;
        }
        async getMetatagAlbums(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`metatags/${t}/albums`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                period: e.period,
                sortBy: e.sortBy,
                offset: e.offset,
                limit: e.limit,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getMetatagArtists(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`metatags/${t}/artists`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                period: e.period,
                sortBy: e.sortBy,
                offset: e.offset,
                limit: e.limit,
                tracksPerArtist: e.tracksPerArtist,
              }),
            }),
            i = await s.json();
          return i.result;
        }
        async getMetatagPlaylists(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`metatags/${t}/playlists`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                sortBy: e.sortBy,
                offset: e.offset,
                limit: e.limit,
                withLikesCount: e.withLikesCount,
              }),
            }),
            i = await s.json();
          return i.result;
        }
      }
      class eH extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [`${t.gateway.prefixUrl}/top/[category]`]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getTopByGenre(e) {
          let t = e.category,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`top/${t}`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                genre: e.genre,
                period: e.period,
                page: e.page,
                pageSize: e.pageSize,
                popularTracksPerArtist: e.popularTracksPerArtist,
                chartRegion: e.chartRegion,
              }),
              timeout: this.config.timeouts?.getTopByGenre,
            }),
            i = await s.json();
          return i.result;
        }
      }
      function eM(e) {
        let t = {};
        return (
          Object.getOwnPropertyNames(e)
            .filter((t) => void 0 !== e[t] && null !== e[t])
            .map((r) => {
              t[r] = e[r];
            }),
          t
        );
      }
      (ea || (ea = {})).RECENT_ALBUMS = "recent-albums";
      class ej extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/rotor/station/[stationId]/info`,
            `${t.gateway.prefixUrl}/rotor/session/[radioSessionId]/tracks`,
            `${t.gateway.prefixUrl}/rotor/session/[radioSessionId]/feedback/`,
            `${t.gateway.prefixUrl}/rotor/station/[stationId]/stream`,
            `${t.gateway.prefixUrl}/rotor/station/[stationId]/feedback`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getStationInfo(e) {
          let { stationId: t } = e,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = `rotor/station/${t}/info`,
            i = await this.httpClient.get(s, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getStationInfo,
            }),
            n = await i.json();
          return n.result;
        }
        async sessionNew(e) {
          let t = eM({
              seeds: e.seeds,
              queue: e.queue,
              includeTracksInResponse: e.includeTracksInResponse,
              trackToStartFrom: e.trackToStartFrom,
              clientRemoteType: e.clientRemoteType,
              incognito: e.incognito,
              child: e.child,
              allowExplicit: e.allowExplicit,
              aliceExperiments: e.aliceExperiments,
              djData: e.djData,
              useIchwill: e.useIchwill,
              includeWaveModel: e.includeWaveModel,
            }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.post("rotor/session/new", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              json: t,
              timeout: this.config.timeouts?.sessionNew,
            }),
            i = await s.json();
          return i.result;
        }
        async sessionTracks(e) {
          let t = eM({
              queue: e.queue,
              aliceExperiments: e.aliceExperiments,
              djData: e.djData,
              useIchwill: e.useIchwill,
              feedbacks: e.feedbacks,
            }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = `rotor/session/${e.radioSessionId}/tracks`,
            i = await this.httpClient.post(s, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              json: t,
              timeout: this.config.timeouts?.sessionTracks,
            }),
            n = await i.json();
          return n.result;
        }
        async sessionFeedback(e) {
          let t = eM({ event: e.event, batchId: e.batchId }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = `rotor/session/${e.radioSessionId}/feedback/`,
            i = await this.httpClient.post(s, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(!0),
              json: t,
              timeout: this.config.timeouts?.sessionFeedback,
            }),
            n = await i.json();
          return n.result;
        }
        async waveLast(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("rotor/wave/last", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.waveLast,
            }),
            s = await a.json();
          return s.result;
        }
        async waveSettings(e = {}) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("rotor/wave/settings", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ seeds: e.seeds }),
              timeout: this.config.timeouts?.waveSettings,
            }),
            s = await a.json();
          return s.result;
        }
        async waveLastReset(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post("rotor/wave/last/reset", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.waveLastReset,
            }),
            s = await a.json();
          return s.result;
        }
        async getGenerativeInfo(e) {
          let { stationId: t } = e,
            r = `rotor/station/${t}/stream`,
            a = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            i = await this.httpClient.get(r, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getGenerativeInfo,
            }),
            n = await i.json();
          return n.result;
        }
        async stationFeedback(e) {
          let t = `rotor/station/${e.stationId}/feedback`,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.post(t, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(!0),
              json: eM({ type: e.type, timestamp: e.timestamp }),
              searchParams: ew({ streamId: e.streamId }),
            }),
            i = await s.json();
          return i.result;
        }
      }
      ((S = es || (es = {})).RADIO_STARTED = "radioStarted"),
        (S.TRACK_STARTED = "trackStarted"),
        (S.TRACK_FINISHED = "trackFinished"),
        (S.SKIP = "skip"),
        (S.SKIP_FAILED = "skipFailed"),
        (S.LIKE = "like"),
        (S.DISLIKE = "dislike"),
        (S.AD = "ad"),
        (S.JINGLE = "jingle"),
        (S.UNLIKE = "unlike"),
        (S.UNDISLIKE = "undislike"),
        ((ei || (ei = {})).OK = "ok"),
        ((T = en || (en = {})).StreamPause = "streamPause"),
        (T.StreamPlay = "streamPlay");
      class eW extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getInstantMixedSearch(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("search/instant/mixed", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                text: e.text,
                type: e.type,
                page: e.page,
                filter: e.filter,
                pageSize: e.pageSize,
                nocorrect: e.nocorrent,
                onlyCounters: e.onlyCounters,
                withLikesCount: e.withLikesCount,
                from: e.from,
                inputType: e.inputType,
                vocalTypes: e.vocalTypes,
                releaseYears: e.releaseYears,
                epochs: e.epochs,
                moods: e.moods,
                activities: e.activities,
                genres: e.genres,
                lyricsLanguages: e.lyricsLanguages,
                moodScoresFrom: e.moodScoresFrom,
                moodScoresTo: e.moodScoresTo,
                activityScoresFrom: e.activityScoresFrom,
                activityScoresTo: e.activityScoresTo,
              }),
              timeout: this.config.timeouts?.getInstantMixedSearch,
            }),
            s = await a.json();
          return s.result;
        }
        async sendFeedback(e) {
          let t = eM({
              blockType: e.blockType,
              entityId: e.entityId,
              timestamp: e.timestamp,
              blockPosition: e.blockPosition,
              position: e.position,
              searchRequestId: e.searchRequestId,
              query: e.query,
              page: e.page,
              clickType: e.clickType,
              clientNow: e.clientNow,
              absolutePosition: e.absoluteBlockPosition,
              clientSearchContext: e.clientSearchContext,
              searchType: e.searchType,
            }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.post("search/feedback", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              json: t,
              timeout: this.config.timeouts?.sendFeedback,
            }),
            i = await s.json();
          return i.result;
        }
      }
      ((C = eo || (eo = {})).ARTIST = "artist"),
        (C.ALBUM = "album"),
        (C.TRACK = "track"),
        (C.PLAYLIST = "playlist"),
        (C.USER = "user"),
        (C.VIDEO = "video"),
        (C.CLIP = "clip"),
        (C.PODCAST = "podcast"),
        (C.PODCAST_EPISODE = "podcast_episode"),
        (C.WAVE = "wave"),
        (C.GENRE = "genre"),
        (C.SEARCH_PAGE = "search-page"),
        ((w = ec || (ec = {})).PLAY = "play"),
        (w.FRIDGE = "fridge"),
        (w.NAVIGATE = "navigate"),
        (w.LIKE = "like"),
        ((b = el || (el = {})).BEGIN = "begin"),
        (b.IN_PROGRESS = "in-progress"),
        (b.PAUSE = "pause"),
        (b.END = "end");
      class eB extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async sendPlays(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post("plays", {
              prefixUrl: t,
              searchParams: ew({ clientNow: e.clientNow }),
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              json: { plays: e.plays },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.sendPlays,
            }),
            s = await a.json();
          return s.result;
        }
      }
      ((k = eu || (eu = {})).PREPARE = "prepare"), (k.PLAY = "play");
      class eq extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getUserSlides(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("rewind/slides/user", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              timeout: this.config.timeouts?.getUserSlides,
            }),
            { result: s } = await a.json();
          return s;
        }
        async getArtistSlides(e) {
          let { artistId: t } = e,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`rewind/slides/artist/${t}`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              timeout: this.config.timeouts?.getArtistSlides,
            }),
            { result: i } = await s.json();
          return i;
        }
      }
      ((R = ed || (ed = {})).WAVE = "WAVE"),
        (R.ACTION = "ACTION"),
        (R.SHARE = "SHARE"),
        ((A = eh || (eh = {})).SQUARE = "SQUARE"),
        (A.CIRCLE = "CIRCLE"),
        ((I = ef || (ef = {})).TEXT = "TEXT"),
        (I.MINUTES = "MINUTES"),
        (I.HOURS = "HOURS"),
        (I.MINUTES_WITH_MUSIC = "MINUTES_WITH_MUSIC"),
        (I.LIKES = "LIKES"),
        (I.BOOKS = "BOOKS"),
        (I.MINUTES_WITH_BOOKS = "MINUTES_WITH_BOOKS"),
        (I.TRACKS = "TRACKS"),
        (I.LISTENERS = "LISTENERS"),
        (I.SUPERFANS = "SUPERFANS"),
        (I.LISTENINGS = "LISTENINGS"),
        (I.NEW_TRACKS = "NEW_TRACKS"),
        ((O = em || (em = {})).TEXT = "TEXT"),
        (O.STATS = "STATS"),
        (O.CHART = "CHART"),
        (O.CHART_FAVORITES = "CHART_FAVORITES"),
        (O.SINGLE_ENTITY = "SINGLE_ENTITY"),
        (O.QUIZ = "QUIZ");
      class eY extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async pinAlbum(e) {
          let t = eM({ id: e.id }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.put("pin/album", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.pinAlbum,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
        async unpinAlbum(e) {
          let t = eM({ id: e.id }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/album", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.unpinAlbum,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
        async pinPlaylist(e) {
          let t = eM({ uid: e.uid, kind: e.kind }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.put("pin/playlist", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.pinPlaylist,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
        async unpinPlaylist(e) {
          let t = eM({ uid: e.uid, kind: e.kind }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/playlist", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.unpinPlaylist,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
        async pinArtist(e) {
          let t = eM({ id: e.id }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.put("pin/artist", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.pinArtist,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
        async unpinArtist(e) {
          let t = eM({ id: e.id }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/artist", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.unpinArtist,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
        async pinWave(e) {
          let t = eM({ seeds: e.seeds }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.put("pin/wave", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.pinWave,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
        async unpinWave(e) {
          let t = eM({ seeds: e.seeds }),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/wave", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.unpinWave,
              json: t,
            }),
            i = await s.json();
          return i.result;
        }
      }
      class eV extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/tags/[id]/playlist-ids`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getPlaylistIds(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`tags/${t}/playlist-ids`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getPlaylistIds,
            }),
            i = await s.json();
          return i.result;
        }
      }
      class eK extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getMusicHistory(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("music-history", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ fullModelsCount: e.fullModelsCount }),
            }),
            s = await a.json();
          return s.result;
        }
        async getMusicHistoryItems(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post("music-history/items", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              json: eM({ items: e.items }),
            }),
            s = await a.json();
          return s.result;
        }
      }
      class e$ extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/feed/promotions/[promoId]`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getPromotionsById(e) {
          let t = e.promoId,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = await this.httpClient.get(`feed/promotions/${t}`, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ checkContent: e.checkContent }),
            }),
            i = await s.json();
          return i.result;
        }
      }
      class eG extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getFileInfo(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("get-file-info", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({
                ts: e.tsInSeconds,
                trackId: e.trackId,
                quality: e.quality,
                codecs: e.codecs.join(","),
                transports: e.transports.join(","),
                sign: e.sign,
              }),
              timeout: this.config.timeouts?.getFileInfo,
            }),
            s = await a.json();
          return s.result;
        }
        async getByteRange(e) {
          let t = await this.httpClient.get(e.srcUrl, {
              headers: { Range: `bytes=${e.start}-${e.end}` },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getByteRange,
            }),
            r = await t.arrayBuffer(),
            a = Number(t.headers["content-length"]),
            s = t.headers["content-range"];
          return { data: r, contentLength: a, contentRange: s };
        }
      }
      class ez extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getPins(e = {}) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("pins", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              timeout: this.config.timeouts?.getPins,
              retry: this.getRetryPolicyConfig(),
            }),
            s = await a.json();
          return s.result;
        }
      }
      class eQ extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = `${t.gateway.prefixUrl}/chart/tracks/`),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getChart(e) {
          let t = this.config.gateway.headers,
            r = await this.httpClient.get("chart/tracks", {
              prefixUrl: this.config.gateway.prefixUrl,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...t,
              },
              retry: this.getRetryPolicyConfig(),
            }),
            a = await r.json();
          return a.result;
        }
      }
      class eX extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            `${t.gateway.prefixUrl}/dynamic-pages/trigger/polling/[anchorId]`,
          ]),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getTriggers({ anchorIds: e, screenId: t }) {
          let r = this.config.gateway.headers,
            a = await this.httpClient.post("dynamic-pages/trigger/polling", {
              prefixUrl: this.config.gateway.prefixUrl,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              json: { anchorIds: e, screenId: t },
              retry: this.getRetryPolicyConfig(),
            }),
            s = await a.json();
          return s.result;
        }
        async getTrigger(e) {
          let t = this.config.gateway.headers,
            r = await this.httpClient.get(
              `dynamic-pages/trigger/polling/${e}`,
              {
                prefixUrl: this.config.gateway.prefixUrl,
                headers: {
                  ...this.createRequestHeadersFromParams(),
                  ...this.createTvmHeadersFromParams({
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...t,
                },
                retry: this.getRetryPolicyConfig(),
              },
            ),
            a = await r.json();
          return a.result;
        }
        async shown({ anchorIds: e, screenId: t }) {
          let r = this.config.gateway.headers;
          await this.httpClient.post("dynamic-pages/trigger/shown", {
            prefixUrl: this.config.gateway.prefixUrl,
            headers: {
              ...this.createRequestHeadersFromParams(),
              ...this.createTvmHeadersFromParams({
                target: this.config.params.tvmTarget,
              }),
              ...this.createUserTicketHeaderFromParams(),
              ...r,
            },
            json: { anchorIds: e, screenId: t },
            retry: this.getRetryPolicyConfig(),
          });
        }
        async action({ anchorIds: e, screenId: t, actionId: r }) {
          let a = this.config.gateway.headers;
          await this.httpClient.post("dynamic-pages/trigger/action", {
            prefixUrl: this.config.gateway.prefixUrl,
            headers: {
              ...this.createRequestHeadersFromParams(),
              ...this.createTvmHeadersFromParams({
                target: this.config.params.tvmTarget,
              }),
              ...this.createUserTicketHeaderFromParams(),
              ...a,
            },
            json: { anchorIds: e, screenId: t, actionId: r },
            retry: this.getRetryPolicyConfig(),
          });
        }
      }
      ((L = eg || (eg = {})).BAR_BELLOW = "barBellow"),
        (L.FULLSCREEN = "fullscreen"),
        ((N = ep || (ep = {})).CLOSE = "close"),
        (N.LINK = "link"),
        (N.PAYWALL = "paywall");
      class eZ extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getTrackIds(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            { uid: a, kind: s, part: i } = e,
            n = await this.httpClient.get(`search-playlist/${a}/${s}`, {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: ew({ part: i }),
              timeout: this.config.timeouts?.getTrackIds,
            }),
            o = await n.json();
          return o.result;
        }
      }
      class eJ extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async progressSync(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post("streams/progress/sync", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              json: {
                lastSyncTimestamp: e.lastSyncTimestamp,
                trackStreams: e.trackStreams,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.progressSync,
            }),
            s = await a.json();
          return s.result;
        }
        async markAlbumFinished(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post(
              "streams/progress/mark-album-finished",
              {
                prefixUrl: t,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...r,
                },
                json: { albumId: e.albumId },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.markAlbumFinished,
              },
            ),
            s = await a.json();
          return s.result;
        }
        async markAlbumUnfinished(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post(
              "streams/progress/mark-album-finished",
              {
                prefixUrl: t,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...r,
                },
                json: { albumId: e.albumId },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.markAlbumUnfinished,
              },
            ),
            s = await a.json();
          return s.result;
        }
        async markFinished(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post("streams/progress/mark-finished", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              json: { trackId: e.trackId },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.markFinished,
            }),
            s = await a.json();
          return s.result;
        }
        async markUnfinished(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post(
              "streams/progress/mark-album-finished",
              {
                prefixUrl: t,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...r,
                },
                json: { trackId: e.trackId },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.markAlbumUnfinished,
              },
            ),
            s = await a.json();
          return s.result;
        }
      }
      class e0 extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async sendViews(e) {
          let { lyricViews: t } = e,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            s = eM({ lyricViews: t });
          await this.httpClient.post("lyric-views", {
            prefixUrl: r,
            headers: {
              ...this.createRequestHeadersFromParams(e),
              ...this.createTvmHeadersFromParams({
                params: e,
                target: this.config.params.tvmTarget,
              }),
              ...this.createUserTicketHeaderFromParams(),
              ...a,
            },
            retry: this.getRetryPolicyConfig(),
            timeout: this.config.timeouts?.sendViews,
            json: s,
          });
        }
      }
      class e1 extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          super(e, t), (this.httpClient = e), (this.config = t);
        }
        async getShelfRecentlyPlayed(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get(
              "non-music/bookshelf/recently-played",
              {
                prefixUrl: t,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...r,
                },
                retry: this.getRetryPolicyConfig(),
                timeout: this.config.timeouts?.getShelfRecentlyPlayed,
              },
            ),
            s = await a.json();
          return s.result;
        }
        async getShelfLiked(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("non-music/bookshelf/liked", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getShelfLiked,
            }),
            s = await a.json();
          return s.result;
        }
      }
      ((U = ey || (ey = {})).ALBUM = "album"), (U.PLAYLIST = "playlist");
      class e8 extends e_ {
        httpClient;
        config;
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = `${t.gateway.prefixUrl}/donation/albums/[albumId]`),
            super(e, t),
            (this.httpClient = e),
            (this.config = t);
        }
        async getAlbumDonations(e) {
          let t = this.config.gateway.headers,
            r = await this.httpClient.get(`/donation/albums/${e?.albumId}`, {
              prefixUrl: this.config.gateway.prefixUrl,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...t,
              },
              retry: this.getRetryPolicyConfig(),
              timeout: this.config.timeouts?.getAlbumDonations,
            }),
            a = await r.json();
          return a;
        }
      }
    },
    61165: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
        H: function () {
          return n;
        },
      });
      var a,
        s,
        i = r(78987);
      let n = () => ({
        beforeContextSet: new i.AsyncSeriesHook(),
        afterContextSet: new i.SyncHook(),
        afterContextEnd: new i.AsyncSeriesHook(),
        beforeEntityPlayingProcessStart: new i.AsyncSeriesHook(),
        entityPlayingProcessStartError: new i.AsyncSeriesHook(),
        beforeMediaReload: new i.AsyncSeriesHook(),
        afterMediaReload: new i.AsyncSeriesHook(),
        beforeMediaStartPlaying: new i.AsyncSeriesHook(),
        afterMediaStartPlaying: new i.AsyncSeriesHook(),
        afterMediaEndPlaying: new i.AsyncSeriesHook(),
        beforeEntityChange: new i.AsyncSeriesHook(["changeMethod"]),
        afterError: new i.AsyncSeriesHook(["error"]),
      });
      ((a = s || (s = {})).MOVE_FORWARD = "moveForward"),
        (a.AUTO_MOVE_FORWARD = "autoMoveForward"),
        (a.MOVE_BACKWARD = "moveBackward"),
        (a.SET_INDEX = "setIndex"),
        (a.RESTART_CONTEXT = "restartContext"),
        (a.PLAY_CONTEXT = "playContext");
    },
    54122: function (e, t, r) {
      "use strict";
      r.d(t, {
        YB: function () {
          return i;
        },
        wi: function () {
          return s;
        },
        dC: function () {
          return n;
        },
      });
      var a = r(93605),
        s = (function () {
          function e(e) {
            Object.defineProperty(this, "observableValue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              (this.observableValue = (0, a.td)(e));
          }
          return (
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.observableValue.value;
              },
              set: function (e) {
                this.observableValue.value = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this.observableValue.subscribe(e);
              },
            }),
            e
          );
        })(),
        i = (function () {
          function e(e) {
            Object.defineProperty(this, "observableValue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "prevValueByListener", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.observableValue = (0, a.Fl)(e)),
              (this.prevValueByListener = new Map());
          }
          return (
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.observableValue.value;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                return (
                  this.prevValueByListener.has(e) ||
                    this.prevValueByListener.set(e, void 0),
                  this.observableValue.subscribe(function (r) {
                    r !== t.prevValueByListener.get(e) &&
                      (t.prevValueByListener.set(e, r), e(r));
                  })
                );
              },
            }),
            e
          );
        })();
      function n(e) {
        (0, a.dC)(e);
      }
    },
    8267: function (e, t, r) {
      "use strict";
      r.d(t, {
        $n: function () {
          return N;
        },
        KX: function () {
          return d;
        },
        Xz: function () {
          return l;
        },
        RX: function () {
          return o;
        },
        Zp: function () {
          return f.Z;
        },
        YR: function () {
          return P;
        },
        lz: function () {
          return O;
        },
        Vb: function () {
          return L;
        },
        zq: function () {
          return g.zq;
        },
      }),
        ((o || (o = {})).Unloaded = "unloaded");
      var a,
        s,
        i,
        n,
        o,
        c,
        l,
        u,
        d,
        h,
        f = r(61165);
      ((c || (c = {})).ENTITY_CAN_NOT_BE_PLAYED = "ENTITY_CAN_NOT_BE_PLAYED"),
        ((a = l || (l = {})).IDLE = "idle"),
        (a.PLAYING = "playing"),
        (a.PAUSED = "paused"),
        (a.STOPPED = "stopped");
      var m = r(14616),
        g = r(45412);
      ((s = u || (u = {})).EVENT_PLAY = "play"),
        (s.EVENT_OUTER_PLAY = "outerplay"),
        (s.EVENT_STOP = "stop"),
        (s.EVENT_PAUSE = "pause"),
        (s.EVENT_RESUME = "resume"),
        (s.EVENT_OUTER_PAUSE = "outerpause"),
        (s.EVENT_PROGRESS = "progress"),
        (s.EVENT_POSITION = "position"),
        (s.EVENT_LOADING = "loading"),
        (s.EVENT_LOADED = "loaded"),
        (s.EVENT_VOLUME = "volumechange"),
        (s.EVENT_SPEED = "ratechange"),
        (s.EVENT_ENDED = "ended"),
        (s.EVENT_CRASHED = "crashed"),
        (s.EVENT_ERROR = "error"),
        (s.HLS_EVENT_ERROR = "hlserror"),
        (s.EVENT_DESTROY = "destroy"),
        (s.EVENT_STATE = "state"),
        (s.EVENT_SWAP = "swap");
      let p = {
        status: l.IDLE,
        progress: { duration: 0, position: 0, loaded: 0 },
        event: null,
        volume: 1,
        speed: 1,
      };
      var y = r(54122);
      class v {
        status;
        event;
        progress;
        volume;
        speed;
        constructor(e) {
          let { status: t, progress: r, event: a, volume: s, speed: i } = e;
          (this.status = new y.wi(t)),
            (this.event = new y.wi(a)),
            (this.progress = new y.wi(r)),
            (this.volume = new y.wi(s)),
            (this.speed = new y.wi(i));
        }
      }
      ((i = d || (d = {})).START = "audio-start"),
        (i.END = "audio-end"),
        (i.PAUSED = "audio-paused"),
        (i.RESUMED = "audio-resumed"),
        (i.UPDATING_PROGRESS = "audio-updating-progress"),
        (i.SET_PROGRESS = "audio-set-progress"),
        (i.SET_VOLUME = "audio-set-volume"),
        (i.SET_SPEED = "audio-set-speed"),
        (i.STOP = "audio-stop"),
        (i.STALLED = "audio-stalled"),
        (i.CANPLAY = "audio-canplay"),
        (i.PLAYING = "audio-playing"),
        (i.ERROR = "audio-error");
      var E = r(63278);
      class P extends E.y {
        name = "MediaPlayerException";
        constructor(
          e = "Media player error",
          { code: t = "E_MEDIA_PLAYER", ...r } = {},
        ) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, P.prototype);
        }
      }
      class x {
        audioPlayerState = new v(p);
        core;
        mediaProvider;
        hooks;
        handlers = {
          audioEnd: () =>
            (function (e) {
              let { state: t, hooks: r } = e;
              r.afterMediaEndPlaying
                .promise()
                .catch((e) => {
                  r.afterError.promise(e);
                })
                .finally(() => {
                  (t.status.value = l.STOPPED), (t.event.value = d.END);
                });
            })({ state: this.audioPlayerState, hooks: this.hooks }),
          audioPaused: () =>
            (function (e) {
              let { state: t } = e;
              (t.status.value = l.PAUSED), (t.event.value = d.PAUSED);
            })({ state: this.audioPlayerState }),
          audioResume: () =>
            (function (e) {
              let { state: t } = e;
              (t.status.value = l.PLAYING), (t.event.value = d.RESUMED);
            })({ state: this.audioPlayerState }),
          audioSeeked: () =>
            (function (e) {
              let { state: t } = e;
              t.event.value = d.SET_PROGRESS;
            })({ state: this.audioPlayerState }),
          audioStalled: () =>
            (function (e) {
              let { state: t } = e;
              t.event.value = d.STALLED;
            })({ state: this.audioPlayerState }),
          audioCanplay: () =>
            (function (e) {
              let { state: t } = e;
              t.event.value = d.CANPLAY;
            })({ state: this.audioPlayerState }),
          audioPlaying: () => {
            !(function (e) {
              let { state: t } = e;
              (t.status.value = l.PLAYING), (t.event.value = d.PLAYING);
            })({ state: this.audioPlayerState });
          },
          audioError: (e) => {
            !(function (e) {
              let { state: t, hooks: r, error: a } = e;
              r.afterError.promise(a), (t.event.value = d.ERROR);
            })({ state: this.audioPlayerState, hooks: this.hooks, error: e });
          },
          audioVolumeChange: (e) =>
            (function (e) {
              let { state: t, volume: r } = e;
              (t.volume.value = r), (t.event.value = d.SET_VOLUME);
            })({ state: this.audioPlayerState, volume: e }),
          audioSpeedChange: (e) => {
            !(function (e) {
              let { state: t, speed: r } = e;
              (t.speed.value = r), (t.event.value = d.SET_SPEED);
            })({ state: this.audioPlayerState, speed: e });
          },
          audioUpdatingProgress: (e) => {
            !(function (e) {
              let { state: t, progress: r } = e;
              (t.progress.value = r), (t.event.value = d.UPDATING_PROGRESS);
            })({ state: this.audioPlayerState, progress: e });
          },
          audioStop: () => {
            !(function (e) {
              let { state: t, hooks: r } = e;
              r.afterMediaEndPlaying
                .promise()
                .catch((e) => {
                  r.afterError.promise(e);
                })
                .finally(() => {
                  (t.status.value = l.STOPPED), (t.event.value = d.STOP);
                });
            })({ state: this.audioPlayerState, hooks: this.hooks });
          },
        };
        constructor(e) {
          (this.core = e.core),
            (this.mediaProvider = e.mediaProvider),
            (this.hooks = e.hooks),
            this.subscribeCoreEvents();
        }
        get state() {
          return this.audioPlayerState;
        }
        play(e) {
          return this.mediaProvider.getMediaSource({ entity: e }).then((e) =>
            this.hooks.beforeMediaStartPlaying
              .promise()
              .catch((e) => {
                this.hooks.afterError.promise(e);
              })
              .finally(() =>
                this.corePlay(e, 0).then(() => {
                  this.hooks.afterMediaStartPlaying.promise().catch((e) => {
                    this.hooks.afterError.promise(e);
                  });
                }),
              ),
          );
        }
        reload(e) {
          let t = this.audioPlayerState.progress.value.position,
            r = this.audioPlayerState.status.value;
          return this.mediaProvider.getMediaSource({ entity: e }).then((e) =>
            this.hooks.beforeMediaReload
              .promise()
              .catch((e) => {
                this.hooks.afterError.promise(e);
              })
              .finally(() => {
                let a = new Promise((a, s) => {
                  switch (r) {
                    case l.PLAYING:
                      this.corePlay(e, t).then(a).catch(s);
                      break;
                    case l.PAUSED:
                      this.core.setSrc(e, t), a();
                  }
                });
                return a.then(() => {
                  this.hooks.afterMediaReload.promise().catch((e) => {
                    this.hooks.afterError.promise(e);
                  });
                });
              }),
          );
        }
        setProgress(e) {
          return this.core.setProgress(e).catch((e) => {
            throw new P("Core set progress error", {
              code: "E_MEDIA_PLAYER_SET_PROGRESS",
              cause: e,
            });
          });
        }
        setVolume(e) {
          return this.core.setVolume(e).catch((e) => {
            throw new P("Core set volume error", {
              code: "E_MEDIA_PLAYER_SET_VOLUME",
              cause: e,
            });
          });
        }
        setSpeed(e) {
          return this.core
            .setSpeed(e)
            .then((e) => (this.handlers.audioSpeedChange(e), e))
            .catch((e) => {
              throw new P("Core set speed error", {
                code: "E_MEDIA_PLAYER_SET_SPEED",
                cause: e,
              });
            });
        }
        pause() {
          return this.core.pause().catch((e) => {
            throw new P("Core pause error", {
              code: "E_MEDIA_PLAYER_PAUSE",
              cause: e,
            });
          });
        }
        resume() {
          return this.core.resume().catch((e) => {
            throw new P("Core resume error", {
              code: "E_MEDIA_PLAYER_RESUME",
              cause: e,
            });
          });
        }
        togglePause() {
          return this.audioPlayerState.status.value === l.PLAYING
            ? this.core.pause().catch((e) => {
                throw new P("Core pause error", {
                  code: "E_MEDIA_PLAYER_PAUSE",
                  cause: e,
                });
              })
            : this.core.resume().catch((e) => {
                throw new P("Core resume error", {
                  code: "E_MEDIA_PLAYER_RESUME",
                  cause: e,
                });
              });
        }
        stop() {
          return this.core
            .stop()
            .then(() => {
              this.handlers.audioStop();
            })
            .catch((e) => {
              throw new P("Core stop error", {
                code: "E_MEDIA_PLAYER_STOP",
                cause: e,
              });
            });
        }
        corePlay(e, t) {
          return this.core.play(e, t).catch((e) => {
            if ("string" != typeof e || e !== u.EVENT_PLAY)
              throw new P("Core play error", {
                code: "E_MEDIA_PLAYER_ENGINE_PLAY",
                cause: e,
              });
          });
        }
        subscribeCoreEvents() {
          this.core.onAudioEnd(this.handlers.audioEnd),
            this.core.onAudioPaused(this.handlers.audioPaused),
            this.core.onAudioResume(this.handlers.audioResume),
            this.core.onAudioUpdatingProgress(
              this.handlers.audioUpdatingProgress,
            ),
            this.core.onAudioSeeked(this.handlers.audioSeeked),
            this.core.onAudioStalled(this.handlers.audioStalled),
            this.core.onAudioCanplay(this.handlers.audioCanplay),
            this.core.onAudioPlaying(this.handlers.audioPlaying),
            this.core.onAudioError(this.handlers.audioError),
            this.core.onAudioVolumeChange(this.handlers.audioVolumeChange),
            this.core.onAudioSpeedChange(this.handlers.audioSpeedChange);
        }
        unsubscribeCoreEvents() {
          this.core.offAudioEnd(this.handlers.audioEnd),
            this.core.offAudioPaused(this.handlers.audioPaused),
            this.core.offAudioResume(this.handlers.audioResume),
            this.core.offAudioUpdatingProgress(
              this.handlers.audioUpdatingProgress,
            ),
            this.core.offAudioSeeked(this.handlers.audioSeeked),
            this.core.offAudioStalled(this.handlers.audioStalled),
            this.core.offAudioCanplay(this.handlers.audioCanplay),
            this.core.offAudioPlaying(this.handlers.audioPlaying),
            this.core.offAudioError(this.handlers.audioError),
            this.core.offAudioVolumeChange(this.handlers.audioVolumeChange),
            this.core.offAudioSpeedChange(this.handlers.audioSpeedChange);
        }
      }
      class _ extends E.y {
        name = "NoCurrentContextExceptions";
        constructor(
          e = "No current context",
          { code: t = "E_NO_CURRENT_CONTEXT", ...r } = {},
        ) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, _.prototype);
        }
      }
      class S {
        entityFactory;
        observableContext = new y.wi(void 0);
        constructor(e) {
          this.entityFactory = e;
        }
        get currentContextObservable() {
          return this.observableContext;
        }
        set currentContext(e) {
          this.observableContext.value &&
            (this.observableContext.value.isCurrentContext = !1),
            (this.observableContext.value = e),
            this.observableContext.value &&
              (this.observableContext.value.isCurrentContext = !0);
        }
        get currentContext() {
          return this.observableContext.value;
        }
        createEntities(e) {
          let t = [];
          for (let r of e) {
            let e = { data: r };
            t.push(this.entityFactory.create(e));
          }
          return t;
        }
        getContextEntities() {
          return this.observableContext.value
            ? this.observableContext.value
                .getContextEntitiesData()
                .then((e) => this.createEntities(e))
            : Promise.reject(new _());
        }
        loadContextMeta() {
          return this.observableContext.value
            ? this.observableContext.value.loadContextMeta()
            : Promise.reject(new _());
        }
      }
      function T(e) {
        let { context: t, entities: r } = e,
          a = [];
        for (let e of r) a.push({ entity: e, context: t });
        return a;
      }
      ((n = h || (h = {})).Forward = "forward"), (n.Backward = "backward");
      class C extends E.y {
        name = "HelperException";
        constructor(e, { code: t = "E_HELPER", ...r } = {}) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, C.prototype);
        }
      }
      function w(e) {
        try {
          let {
              index: t,
              order: r,
              contextEntityPairs: a,
              direction: s,
              canBePlayedParams: i,
            } = e,
            n = t,
            c = null,
            l = () => (s === h.Forward ? n < r.length : n >= 0),
            u = () => {
              s === h.Forward ? (n += 1) : (n -= 1);
            };
          for (; l() && null === c; ) {
            let e = r[n],
              t = a[e];
            t.entity.canBePlayed(i) || t.entity.data.type === o.Unloaded
              ? (c = n)
              : u();
          }
          return c;
        } catch (e) {
          throw new C("Error in findPlayableEntityIndex", {
            code: "E_FIND_PLAYABLE_ENTITY_INDEX_HELPER",
            cause: e,
          });
        }
      }
      class b extends E.y {
        name = "NoPlayableEntityExceptions";
        constructor(
          e = "No playable entity",
          { code: t = "E_NO_PLAYABLE_ENTITY", ...r } = {},
        ) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, b.prototype);
        }
      }
      class k {
        playerQueue;
        windowPaginationConfig;
        hooks;
        entityProvider;
        contextController;
        constructor(e) {
          (this.playerQueue = e.playerQueue),
            (this.windowPaginationConfig = e.windowPaginationConfig),
            (this.hooks = e.hooks),
            (this.entityProvider = e.entityProvider),
            (this.contextController = e.contextController);
        }
        findPlayableEntityIndexInQueue(e) {
          let {
              index: t,
              direction: r,
              contextEntityPairs: a,
              order: s,
              canBePlayedParams: i,
              repeat: n,
            } = e,
            o = new Promise((e, n) => {
              this.findPlayableEntityIndexInQueueRecursive({
                resolve: e,
                reject: n,
                index: t,
                order: s,
                contextEntityPairs: a,
                direction: r,
                canBePlayedParams: i,
              });
            });
          return o.then((e) =>
            n === g.zq.CONTEXT && null === e
              ? new Promise((e, t) => {
                  let n = r === h.Forward ? 0 : s.length - 1;
                  this.findPlayableEntityIndexInQueueRecursive({
                    resolve: e,
                    reject: t,
                    index: n,
                    order: s,
                    contextEntityPairs: a,
                    direction: r,
                    canBePlayedParams: i,
                  });
                })
              : Promise.resolve(e),
          );
        }
        findPlayableEntityIndexInQueueRecursive(e) {
          let {
            canBePlayedParams: t,
            index: r,
            order: a,
            contextEntityPairs: s,
            direction: i,
            resolve: n,
            reject: c,
          } = e;
          try {
            let e = w({
              contextEntityPairs: s,
              order: a,
              index: r,
              direction: i,
              canBePlayedParams: t,
            });
            if (null !== e) {
              let r = this.playerQueue.getEntityByIndex({
                index: e,
                entityList: s,
                order: a,
              });
              r.entity.data.type === o.Unloaded
                ? this.loadEntitiesIfNeeded({
                    index: e,
                    contextEntityPairs: s,
                    order: a,
                  })
                    .then(() => {
                      this.findPlayableEntityIndexInQueueRecursive({
                        resolve: n,
                        reject: c,
                        direction: i,
                        index: e,
                        order: a,
                        contextEntityPairs: s,
                        canBePlayedParams: t,
                      });
                    })
                    .catch(c)
                : n(e);
            } else n(null);
          } catch (e) {
            c(e);
          }
        }
        loadEntitiesIfNeeded(e) {
          return new Promise((t, r) => {
            let { index: a, contextEntityPairs: s, order: i } = e;
            try {
              let e = this.playerQueue.getEntityByIndex({
                  index: a,
                  entityList: s,
                  order: i,
                }),
                n = (function (e) {
                  try {
                    let { index: t, order: r, contextEntityPairs: a } = e,
                      s = r.slice(Math.max(t - 5, 0), t + 5 + 1),
                      i = !1;
                    for (let e of s) {
                      let t = a[e];
                      t.entity.data.type === o.Unloaded && (i = !0);
                    }
                    return i;
                  } catch (e) {
                    throw new C("Error in hasUnloadedInCloseArea", {
                      code: "E_UNLOADED_IN_CLOSE_AREA_HELPER",
                      cause: e,
                    });
                  }
                })({ index: a, order: i, contextEntityPairs: s });
              e.entity.data.type === o.Unloaded
                ? this.loadEntities({
                    index: a,
                    order: i,
                    contextEntityPairs: s,
                  })
                    .then((e) => {
                      this.playerQueue.setEntityList(e, !0), t();
                    })
                    .catch(r)
                : (e.entity.data.type !== o.Unloaded &&
                    n &&
                    this.loadEntities({
                      index: a,
                      order: i,
                      contextEntityPairs: s,
                    })
                      .then((e) => {
                        this.playerQueue.setEntityList(e, !0);
                      })
                      .catch((e) => {
                        this.hooks.afterError.promise(e);
                      }),
                  t());
            } catch (e) {
              r(e);
            }
          });
        }
        loadEntities(e) {
          try {
            let { index: t, contextEntityPairs: r, order: a } = e,
              { contextEntityPairsToLoad: s, indexes: i } = (function (e) {
                try {
                  let t = [],
                    r = [],
                    {
                      index: a,
                      order: s,
                      contextEntityPairs: i,
                      windowSize: n,
                    } = e,
                    c = 0,
                    l = a,
                    u = s[l];
                  for (; void 0 !== u && c < n; ) {
                    let e = i[u];
                    e.entity.data.type === o.Unloaded && (r.push(u), (c += 1)),
                      (l -= 1),
                      (u = s[l]);
                  }
                  let d = 0,
                    h = a + 1;
                  for (u = s[h]; void 0 !== u && d < n; ) {
                    let e = i[u];
                    e.entity.data.type === o.Unloaded && (r.push(u), (d += 1)),
                      (h += 1),
                      (u = s[h]);
                  }
                  let f = r.sort((e, t) => e - t);
                  for (let e of f) {
                    let r = i[e];
                    r && t.push(r);
                  }
                  return { contextEntityPairsToLoad: t, indexes: r };
                } catch (e) {
                  throw new C("Error in getContextEntityPairsToLoad", {
                    code: "E_GET_PAIRS_TO_LOAD_HELPER",
                    cause: e,
                  });
                }
              })({
                index: t,
                contextEntityPairs: r,
                order: a,
                windowSize: this.windowPaginationConfig.windowSize,
              });
            return this.entityProvider.loadEntities(s).then((e) => {
              let t = this.contextController.createEntities(e),
                a = (function (e) {
                  try {
                    let {
                        contextEntityPairs: t,
                        loadedEntities: r,
                        indexes: a,
                      } = e,
                      s = a.shift(),
                      i = r.shift(),
                      n = 0,
                      o = [];
                    for (; n !== t.length; ) {
                      if (n === s && i) {
                        let e = t[s];
                        o.push({ context: e.context, entity: i }),
                          (s = a.shift()),
                          (i = r.shift());
                      } else {
                        let e = t[n];
                        o.push(e);
                      }
                      n += 1;
                    }
                    return o;
                  } catch (e) {
                    throw new C("Error in replaceEntities", {
                      code: "E_REPLACE_ENTITIES_HELPER",
                      cause: e,
                    });
                  }
                })({ loadedEntities: t, contextEntityPairs: r, indexes: i });
              return a;
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
      }
      class R {
        contextController;
        playerQueue;
        playerState;
        hooks;
        entityLoader;
        constructor(e) {
          let {
            contextController: t,
            playerQueue: r,
            playerState: a,
            hooks: s,
            entityProvider: i,
            windowPaginationConfig: n,
          } = e;
          (this.contextController = t),
            (this.playerQueue = r),
            (this.playerState = a),
            (this.hooks = s),
            (this.entityLoader = new k({
              contextController: t,
              playerQueue: r,
              entityProvider: i,
              hooks: s,
              windowPaginationConfig: n,
            })),
            this.playerState.event.onChange(() => this.autoMoveForward());
        }
        get queue() {
          return this.playerQueue;
        }
        setupQueue(e) {
          let { entitiesData: t, queueParams: r = {} } = e,
            { shuffle: a } = r,
            s = this.contextController.currentContext,
            i = { entityChangeMethod: f.Z.PLAY_CONTEXT, index: r.index };
          return s
            ? this.getEntitiesFromDataOrContext(t).then((e) => {
                let t;
                !0 === a
                  ? this.playerQueue.setShuffle(!0)
                  : !1 === a && this.playerQueue.setShuffle(!1),
                  (t =
                    void 0 !== r.index
                      ? r.index
                      : "number" == typeof s.resumeFromIndex
                        ? s.resumeFromIndex
                        : this.playerQueue.createIndex({
                            entityListLength: e.length,
                          }));
                let { order: n, index: c } = this.playerQueue.createOrder({
                    entityListLength: e.length,
                    index: t,
                  }),
                  l = T({ context: s, entities: e }),
                  u = n[c],
                  d = l[u];
                if (d.entity.data.type === o.Unloaded)
                  return this.entityLoader
                    .loadEntities({ order: n, contextEntityPairs: l, index: c })
                    .then((e) => {
                      let t = w({
                        contextEntityPairs: e,
                        order: n,
                        index: c,
                        direction: h.Forward,
                        canBePlayedParams: i,
                      });
                      if (null !== t)
                        (0, y.dC)(() => {
                          this.playerQueue.setEntityList(e, !1),
                            this.playerQueue.setOrder(n, !1),
                            (this.playerQueue.index = t);
                        });
                      else
                        throw (this.hooks.afterContextEnd.promise(), new b());
                    });
                let f = w({
                  contextEntityPairs: l,
                  order: n,
                  index: c,
                  direction: h.Forward,
                  canBePlayedParams: i,
                });
                if (null !== f)
                  return (
                    (0, y.dC)(() => {
                      this.playerQueue.setEntityList(l, !1),
                        this.playerQueue.setOrder(n, !1),
                        (this.playerQueue.index = f);
                    }),
                    Promise.resolve()
                  );
                throw (this.hooks.afterContextEnd.promise(), new b());
              })
            : Promise.reject(new _());
        }
        setIndex(e) {
          let t = e,
            r = this.playerQueue.state.order.value;
          if (this.playerQueue.state.shuffle.value) {
            let a = this.playerQueue.createOrder({
              entityListLength: this.playerQueue.state.entityList.value.length,
              index: e,
            });
            (t = a.index), (r = a.order);
          }
          let a = { entityChangeMethod: f.Z.SET_INDEX, index: t };
          return this.entityLoader
            .findPlayableEntityIndexInQueue({
              index: t,
              order: r,
              repeat: this.playerQueue.state.repeat.value,
              contextEntityPairs: this.playerQueue.state.entityList.value,
              direction: h.Forward,
              canBePlayedParams: a,
            })
            .then((e) =>
              null !== e
                ? this.entityLoader
                    .loadEntitiesIfNeeded({
                      index: e,
                      order: this.playerQueue.state.order.value,
                      contextEntityPairs:
                        this.playerQueue.state.entityList.value,
                    })
                    .then(() => {
                      this.hooks.beforeEntityChange
                        .promise(f.Z.SET_INDEX)
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                        .finally(() => {
                          (0, y.dC)(() => {
                            (t = e),
                              this.playerQueue.state.shuffle.value &&
                                this.playerQueue.setOrder(r, !1),
                              (this.playerQueue.index = t);
                          });
                        });
                    })
                : (this.hooks.afterContextEnd.promise(), Promise.resolve()),
            );
        }
        moveForward() {
          let e = this.playerQueue.state.index.value + 1,
            t = { entityChangeMethod: f.Z.MOVE_FORWARD, index: e };
          return this.entityLoader
            .findPlayableEntityIndexInQueue({
              index: e,
              order: this.playerQueue.state.order.value,
              repeat: this.playerQueue.state.repeat.value,
              contextEntityPairs: this.playerQueue.state.entityList.value,
              direction: h.Forward,
              canBePlayedParams: t,
            })
            .then((e) =>
              null !== e
                ? this.entityLoader
                    .loadEntitiesIfNeeded({
                      index: e,
                      order: this.playerQueue.state.order.value,
                      contextEntityPairs:
                        this.playerQueue.state.entityList.value,
                    })
                    .then(() => {
                      this.hooks.beforeEntityChange
                        .promise(f.Z.MOVE_FORWARD)
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                        .finally(() => {
                          this.playerQueue.index = e;
                        });
                    })
                : (this.hooks.afterContextEnd.promise(),
                  Promise.resolve({ cause: c.ENTITY_CAN_NOT_BE_PLAYED })),
            );
        }
        autoMoveForward() {
          let e = this.playerQueue.state.index.value + 1,
            t = { entityChangeMethod: f.Z.AUTO_MOVE_FORWARD, index: e };
          if (
            this.playerQueue.state.currentEntity.value &&
            this.playerState.event.value === d.END
          ) {
            let r = this.playerQueue.state.currentEntity.value;
            if (
              this.playerQueue.state.repeat.value === g.zq.ONE &&
              r.entity.canBePlayed(t)
            )
              return;
            this.playerQueue.state.repeat.value === g.zq.CONTEXT &&
              this.playerQueue.isOnLastIndex() &&
              this.playerQueue.state.order.value.length > 1 &&
              (e = 0),
              this.entityLoader
                .findPlayableEntityIndexInQueue({
                  index: e,
                  order: this.playerQueue.state.order.value,
                  repeat: this.playerQueue.state.repeat.value,
                  contextEntityPairs: this.playerQueue.state.entityList.value,
                  direction: h.Forward,
                  canBePlayedParams: t,
                })
                .then((e) => {
                  null !== e
                    ? this.entityLoader
                        .loadEntitiesIfNeeded({
                          index: e,
                          order: this.playerQueue.state.order.value,
                          contextEntityPairs:
                            this.playerQueue.state.entityList.value,
                        })
                        .then(() => {
                          this.hooks.beforeEntityChange
                            .promise(f.Z.AUTO_MOVE_FORWARD)
                            .catch((e) => {
                              this.hooks.afterError.promise(e);
                            })
                            .finally(() => {
                              this.playerQueue.index = e;
                            });
                        })
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                    : this.hooks.afterContextEnd.promise();
                })
                .catch((e) => {
                  this.hooks.afterError.promise(e);
                });
          }
        }
        moveBackward() {
          let e = this.playerQueue.state.index.value - 1,
            t = { entityChangeMethod: f.Z.MOVE_BACKWARD, index: e };
          return this.entityLoader
            .findPlayableEntityIndexInQueue({
              index: this.playerQueue.state.index.value - 1,
              order: this.playerQueue.state.order.value,
              repeat: this.playerQueue.state.repeat.value,
              contextEntityPairs: this.playerQueue.state.entityList.value,
              direction: h.Backward,
              canBePlayedParams: t,
            })
            .then((e) =>
              null !== e
                ? this.entityLoader
                    .loadEntitiesIfNeeded({
                      index: e,
                      order: this.playerQueue.state.order.value,
                      contextEntityPairs:
                        this.playerQueue.state.entityList.value,
                    })
                    .then(() => {
                      this.hooks.beforeEntityChange
                        .promise(f.Z.MOVE_BACKWARD)
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                        .finally(() => {
                          this.playerQueue.index = e;
                        });
                    })
                : Promise.resolve({ cause: c.ENTITY_CAN_NOT_BE_PLAYED }),
            );
        }
        append(e) {
          let t = this.contextController.currentContext,
            r = this.contextController.createEntities(e);
          if (t) {
            let e = T({ entities: r, context: t });
            this.playerQueue.append(e);
          } else throw new _();
        }
        inject(e, t) {
          let r = this.contextController.currentContext,
            a = this.contextController.createEntities(e);
          if (r) {
            let e = T({ entities: a, context: r });
            this.playerQueue.inject(e, t);
          } else throw new _();
        }
        remove(e) {
          this.playerQueue.remove(e);
        }
        toggleShuffle() {
          this.playerQueue.toggleShuffle();
        }
        setShuffle(e) {
          this.playerQueue.setShuffle(e);
        }
        getEntitiesFromDataOrContext(e) {
          if (e) {
            let t = this.contextController.createEntities(e);
            return Promise.resolve(t);
          }
          return this.contextController.getContextEntities();
        }
      }
      class A extends E.y {
        name = "NoCurrentEntityException";
        constructor() {
          super("No current entity in queue", { code: "E_NO_CURRENT_ENTITY" }),
            Object.setPrototypeOf(this, A.prototype);
        }
      }
      class I {
        currentMediaPlayer;
        queueState;
        unsubArray = [];
        listenToQueueStateChange = !0;
        hooks;
        constructor(e) {
          let { queueState: t, audioPlayer: r, hooks: a } = e;
          (this.queueState = t),
            (this.currentMediaPlayer = r),
            (this.hooks = a),
            (this.currentEntityHandler = this.currentEntityHandler.bind(this)),
            (this.playerEventChangeHandler =
              this.playerEventChangeHandler.bind(this)),
            this.subscribeQueue();
        }
        get listenQueueState() {
          return this.listenToQueueStateChange;
        }
        set listenQueueState(e) {
          this.listenToQueueStateChange = e;
        }
        get mediaPlayer() {
          return this.currentMediaPlayer;
        }
        play() {
          let e = this.queueState.currentEntity.value;
          return e
            ? this.hooks.beforeEntityPlayingProcessStart
                .promise()
                .catch((e) => {
                  this.hooks.afterError.promise(e);
                })
                .finally(() => this.currentMediaPlayer.play(e.entity))
                .then(() => {
                  let e = this.queueState.currentEntity.value?.entity;
                  e?.startPosition &&
                    this.currentMediaPlayer.setProgress(e.startPosition);
                })
            : Promise.reject(new A());
        }
        reload() {
          let e = this.queueState.currentEntity.value;
          return e
            ? this.currentMediaPlayer.reload(e.entity)
            : Promise.reject(new A());
        }
        pause() {
          return this.currentMediaPlayer.state.status.value === l.PLAYING
            ? this.currentMediaPlayer.pause()
            : Promise.resolve();
        }
        resume() {
          return this.currentMediaPlayer.state.status.value !== l.PLAYING
            ? this.currentMediaPlayer.resume()
            : Promise.resolve();
        }
        togglePause() {
          return this.currentMediaPlayer.state.status.value === l.IDLE ||
            this.currentMediaPlayer.state.status.value === l.STOPPED
            ? this.play()
            : this.currentMediaPlayer.togglePause();
        }
        setProgress(e) {
          return this.currentMediaPlayer.setProgress(e);
        }
        setVolume(e) {
          return this.currentMediaPlayer.setVolume(e);
        }
        setSpeed(e) {
          return this.currentMediaPlayer.setSpeed(e);
        }
        stop() {
          return this.currentMediaPlayer.state.status.value === l.IDLE ||
            this.currentMediaPlayer.state.status.value === l.STOPPED
            ? Promise.resolve()
            : this.currentMediaPlayer.stop();
        }
        subscribeQueue() {
          this.unsubArray.push(
            this.currentMediaPlayer.state.event.onChange(
              this.playerEventChangeHandler,
            ),
          ),
            this.unsubArray.push(
              this.queueState.currentEntity.onChange(this.currentEntityHandler),
            );
        }
        unsubscribeQueue() {
          for (let e of this.unsubArray) e();
        }
        playerEventChangeHandler() {
          if (
            this.currentMediaPlayer.state.event.value === d.END &&
            this.queueState.currentEntity.value
          ) {
            let e = this.queueState.currentEntity.value,
              t = {
                entityChangeMethod: f.Z.AUTO_MOVE_FORWARD,
                index: this.queueState.index.value,
              },
              r = 1 === this.queueState.order.value.length;
            e.entity.canBePlayed(t) &&
              (this.queueState.repeat.value === g.zq.ONE ||
                (this.queueState.repeat.value === g.zq.CONTEXT && r)) &&
              this.play();
          }
        }
        currentEntityHandler() {
          this.listenToQueueStateChange &&
            void 0 !== this.queueState.currentEntity.value &&
            this.play().catch((e) => {
              this.hooks.afterError.promise(e);
            });
        }
      }
      let O = 5;
      class L {
        playbackState;
        queueController;
        contextController;
        mediaController;
        hooks;
        constructor(e) {
          this.hooks = e.hooks;
          let {
            queueController: t,
            contextController: r,
            mediaController: a,
          } = (function (e) {
            try {
              let {
                  audioCore: t,
                  mediaProvider: r,
                  entityFactory: a,
                  hooks: s,
                  entityProvider: i,
                  windowPaginationConfig: n,
                } = e,
                o = new g.f1(
                  (function () {
                    let e = { ...g.zq };
                    return {
                      index: 0,
                      entityList: [],
                      order: [],
                      repeat: e.NONE,
                      shuffle: !1,
                      currentEntity: void 0,
                    };
                  })(),
                ),
                c = new x({ core: t, mediaProvider: r, hooks: s }),
                l = new S(a),
                u = new R({
                  contextController: l,
                  playerQueue: o,
                  playerState: c.state,
                  hooks: s,
                  entityProvider: i,
                  windowPaginationConfig: n,
                }),
                d = new I({ queueState: o.state, audioPlayer: c, hooks: s });
              return {
                contextController: l,
                queueController: u,
                mediaController: d,
              };
            } catch (e) {
              throw new C("Error in createPlaybackControllers", {
                code: "E_CREATE_PLAYER_CONTROLLERS",
                cause: e,
              });
            }
          })({ ...e, hooks: this.hooks });
          (this.queueController = t),
            (this.mediaController = a),
            (this.contextController = r),
            (this.playbackState = {
              playerState: this.mediaController.mediaPlayer.state,
              queueState: this.queueController.queue.state,
              currentContext: this.contextController.currentContextObservable,
            });
        }
        get state() {
          return this.playbackState;
        }
        playContext(e) {
          try {
            var t, r;
            let {
                context: a,
                queueParams: s,
                entitiesData: i,
                loadContextMeta: n,
              } = e,
              o = this.contextController.currentContextObservable.value,
              c = this.queueController.queue.state.currentEntity.value,
              u = this.queueController.queue.state.entityList.value;
            if (
              (function ({
                currentContext: e,
                newContext: t,
                entityList: r,
                entitiesData: a,
              }) {
                if (void 0 === e || e.data.type !== t.data.type) return !0;
                if (!a || 0 === a.length)
                  return e.data.meta.id !== t.data.meta.id;
                if (e.data.meta.id !== t.data.meta.id) return !0;
                let s = r.map(({ entity: e }) => String(e.data.meta.id)),
                  i = a.map((e) => String(e.meta.id));
                return !(0, m.Z)(s, i);
              })({
                currentContext: o,
                newContext: a,
                entityList: u,
                entitiesData: i,
              }) ||
              void 0 === c
            )
              return this.mediaController
                .stop()
                .then(() =>
                  this.setContext({
                    queueParams: s,
                    context: a,
                    entitiesData: i,
                    loadContextMeta: n,
                  }),
                )
                .then(() => this.play());
            let { entity: d } = c;
            if (void 0 === s || void 0 === s.index) {
              let e = this.playbackState.playerState.status.value === l.STOPPED,
                t =
                  this.playbackState.queueState.order.value.length ===
                  this.playbackState.queueState.index.value + 1,
                r = 1 === this.playbackState.queueState.entityList.value.length;
              if (e && t && !r) return this.setEntityByIndex(0);
              return this.togglePause();
            }
            let h = this.queueController.queue.state.entityList.value[s.index],
              { index: f } = s;
            if (
              h &&
              ((t = h.entity),
              (r = this.playbackState.queueState.index.value === f),
              d.data.meta.id !== t.data.meta.id || !r)
            )
              return this.setEntityByIndex(f);
            return this.togglePause();
          } catch (e) {
            return Promise.reject(e);
          }
        }
        setContext(e) {
          this.mediaController.listenQueueState = !1;
          let {
            context: t,
            entitiesData: r,
            queueParams: a,
            loadContextMeta: s = !0,
          } = e;
          return this.hooks.beforeContextSet
            .promise()
            .catch((e) => {
              this.hooks.afterError.promise(e);
            })
            .finally(() =>
              ((this.contextController.currentContext = t),
              this.hooks.afterContextSet.call(),
              s)
                ? this.contextController.loadContextMeta().then(() =>
                    this.queueController
                      .setupQueue({ entitiesData: r, queueParams: a })
                      .then(() => {
                        this.mediaController.listenQueueState = !0;
                      }),
                  )
                : this.queueController
                    .setupQueue({ entitiesData: r, queueParams: a })
                    .then(() => {
                      this.mediaController.listenQueueState = !0;
                    }),
            );
        }
        restartContext(e) {
          this.mediaController.listenQueueState = !1;
          let { playAfterRestart: t = !0, entitiesData: r, queueParams: a } = e;
          return this.hooks.beforeEntityChange
            .promise(f.Z.RESTART_CONTEXT)
            .catch((e) => {
              this.hooks.afterError.promise(e);
            })
            .finally(() =>
              this.queueController
                .setupQueue({ entitiesData: r, queueParams: a })
                .then(() =>
                  ((this.mediaController.listenQueueState = !0), t)
                    ? this.play()
                    : this.mediaController.stop(),
                ),
            );
        }
        reloadEntity() {
          return this.mediaController.reload();
        }
        play() {
          return this.mediaController.play();
        }
        moveForward() {
          return this.queueController
            .moveForward()
            .then((e) =>
              e && e.cause === c.ENTITY_CAN_NOT_BE_PLAYED
                ? this.mediaController.stop()
                : Promise.resolve(),
            );
        }
        moveBackward() {
          let {
            progress: { value: e },
          } = this.mediaController.mediaPlayer.state;
          return e.position > O
            ? this.mediaController.setProgress(0)
            : this.queueController
                .moveBackward()
                .then((e) =>
                  e && e.cause === c.ENTITY_CAN_NOT_BE_PLAYED
                    ? this.mediaController.stop()
                    : Promise.resolve(),
                );
        }
        setEntityByIndex(e) {
          return this.queueController.setIndex(e);
        }
        inject(e, t) {
          this.queueController.inject(e, t);
        }
        append(e) {
          this.queueController.append(e);
        }
        remove(e) {
          this.queueController.remove(e);
        }
        pause() {
          return this.mediaController.pause();
        }
        resume() {
          return this.mediaController.resume();
        }
        togglePause() {
          return this.mediaController.togglePause();
        }
        increaseVolume(e) {
          let t = this.playbackState.playerState.volume.value;
          return this.mediaController.setVolume(1 - e > t ? t + e : 1);
        }
        decreaseVolume(e) {
          let t = this.playbackState.playerState.volume.value;
          return this.mediaController.setVolume(t > e ? t - e : 0);
        }
        slideForward(e) {
          let { duration: t, position: r } =
              this.playbackState.playerState.progress.value,
            a = t - e,
            s = a > r ? r + e : t;
          return this.mediaController.setProgress(s);
        }
        slideBackward(e) {
          let { position: t } = this.playbackState.playerState.progress.value;
          return this.mediaController.setProgress(t > e ? t - e : 0);
        }
        toggleShuffle() {
          this.queueController.toggleShuffle();
        }
        setShuffle(e) {
          this.queueController.setShuffle(e);
        }
        setProgress(e) {
          return this.mediaController.setProgress(e);
        }
        setVolume(e) {
          return this.mediaController.setVolume(e);
        }
        setSpeed(e) {
          return this.mediaController.setSpeed(e);
        }
        bindPlayer() {
          this.mediaController.listenQueueState = !0;
        }
        unbindPlayer() {
          this.mediaController.listenQueueState = !1;
        }
        setRepeatMode(e) {
          this.queueController.queue.state.repeat.value = e;
        }
        stop() {
          return this.mediaController.stop();
        }
      }
      class N {}
    },
    45412: function (e, t, r) {
      "use strict";
      r.d(t, {
        f1: function () {
          return l;
        },
        zq: function () {
          return s;
        },
      });
      var a,
        s,
        i = r(54122);
      class n {
        index;
        entityList;
        order;
        repeat;
        shuffle;
        currentEntity;
        constructor(e) {
          let { index: t, entityList: r, repeat: a, shuffle: s, order: n } = e;
          (this.index = new i.wi(t)),
            (this.entityList = new i.wi(r)),
            (this.order = new i.wi(n)),
            (this.repeat = new i.wi(a)),
            (this.shuffle = new i.wi(s)),
            (this.currentEntity = new i.YB(() => {
              let e = this.order.value[this.index.value];
              return void 0 !== e ? this.entityList.value[e] : void 0;
            }));
        }
      }
      function o(e) {
        let { originalOrderToShuffle: t, index: r } = e,
          a = t.slice(0, r),
          s = t.slice(r + 1),
          i = a.concat(s),
          n = (function (e) {
            let t = [...e];
            for (let e = t.length - 1; e > 0; e--) {
              let r = Math.floor(Math.random() * (e + 1)),
                a = t[e];
              (t[e] = t[r]), (t[r] = a);
            }
            return t;
          })(i),
          o = [t[r], ...n];
        return o;
      }
      function c(e) {
        return Array.from(Array(e).keys());
      }
      class l {
        queueState;
        constructor(e) {
          this.queueState = new n(e);
        }
        get state() {
          return this.queueState;
        }
        set index(e) {
          if (e >= 0 && e <= this.queueState.entityList.value.length - 1)
            this.queueState.index.value = e;
          else throw Error("index out of range");
        }
        moveIndexForward() {
          let e = this.queueState.index.value + 1,
            t = this.queueState.entityList.value.length - 1;
          e <= t && (this.queueState.index.value = e);
        }
        moveIndexBackward() {
          let e = this.queueState.index.value - 1;
          e >= 0 && (this.queueState.index.value = e);
        }
        append(e) {
          for (let t of e) this.queueState.entityList.value.push(t);
          let t = [...this.queueState.order.value];
          for (let r = 0; r < e.length; r++) t.push(t.length);
          this.setOrder(t, !0);
        }
        inject(e, t) {
          if (
            (this.queueState.entityList.value.splice(t, 0, ...e),
            this.queueState.shuffle.value)
          ) {
            let r = this.queueState.order.value.map((r) =>
              r < t ? r : r + e.length,
            );
            for (let a = 0; a < e.length; a++) r.push(a + t);
            this.setOrder(r, !1);
          } else {
            let r = c(this.queueState.entityList.value.length);
            this.setOrder(r, !0),
              this.queueState.index.value >= t &&
                (this.queueState.index.value =
                  this.queueState.index.value + e.length);
          }
        }
        remove(e) {
          let t = [],
            r = this.queueState.entityList.value.length;
          for (let a = 0; a < r; a++) {
            let r = this.queueState.entityList.value.shift();
            e.includes(a) || void 0 === r || t.push(r);
          }
          this.setEntityList(t, !0);
          let { order: a } = this.createOrder({
            entityListLength: this.queueState.entityList.value.length,
            index: this.queueState.index.value,
          });
          this.setOrder(a, !0);
        }
        getEntityByIndex(e) {
          let { index: t } = e,
            r =
              void 0 === e.entityList
                ? this.state.entityList.value
                : e.entityList,
            a = (void 0 === e.order ? this.state.order.value : e.order)[t];
          if (void 0 !== a) {
            let e = r[a];
            if (e) return e;
            throw Error("no such entity");
          }
          throw Error("queue is empty");
        }
        setEntityList(e, t) {
          if (t) {
            for (; 0 !== this.queueState.entityList.value.length; )
              this.queueState.entityList.value.shift();
            let t = e.shift();
            for (; void 0 !== t; )
              this.queueState.entityList.value.push(t), (t = e.shift());
          } else this.queueState.entityList.value = e;
        }
        setOrder(e, t) {
          if (t) {
            for (; 0 !== this.queueState.order.value.length; )
              this.queueState.order.value.pop();
            let t = e.shift();
            for (; void 0 !== t; )
              this.queueState.order.value.push(t), (t = e.shift());
          } else this.queueState.order.value = e;
        }
        setShuffle(e) {
          e !== this.queueState.shuffle.value &&
            (e
              ? (0, i.dC)(() => {
                  this.queueState.shuffle.value = e;
                  let t = o({
                    originalOrderToShuffle: this.queueState.order.value,
                    index: this.queueState.index.value,
                  });
                  this.setOrder(t, !0);
                })
              : (0, i.dC)(() => {
                  this.queueState.shuffle.value = e;
                  let t = c(this.queueState.entityList.value.length);
                  this.setOrder(t, !0);
                }));
        }
        createOrder(e) {
          let { entityListLength: t, index: r } = e,
            a = c(t);
          return this.queueState.shuffle.value
            ? { order: o({ originalOrderToShuffle: a, index: r }), index: 0 }
            : { order: c(t), index: r };
        }
        createIndex(e) {
          let { entityListLength: t } = e,
            {
              shuffle: { value: r },
            } = this.queueState,
            a = 0;
          return (
            r &&
              (a = (function (e, t) {
                let r = Math.ceil(0);
                return Math.floor(Math.random() * (Math.floor(t) - r + 1)) + r;
              })(0, t - 1)),
            a
          );
        }
        toggleShuffle() {
          let {
            shuffle: { value: e },
            index: { value: t },
            order: { value: r },
            entityList: { value: a },
          } = this.queueState;
          if (e) {
            let e = r[t],
              s = c(a.length);
            (0, i.dC)(() => {
              this.setOrder(s, !0),
                (this.queueState.shuffle.value = !1),
                (this.queueState.index.value = e);
            });
          } else {
            let e = o({ originalOrderToShuffle: r, index: t });
            (0, i.dC)(() => {
              this.setOrder(e, !0),
                (this.queueState.shuffle.value = !0),
                (this.queueState.index.value = 0);
            });
          }
        }
        toggleRepeat(e) {}
        isOnLastIndex() {
          return this.state.order.value.length - 1 === this.state.index.value;
        }
        setRepeatMode(e) {
          this.state.repeat.value = e;
        }
      }
      ((a = s || (s = {})).NONE = "none"),
        (a.CONTEXT = "context"),
        (a.ONE = "one");
    },
    57413: function (e, t, r) {
      "use strict";
      r.d(t, {
        Zc: function () {
          return n;
        },
        Tg: function () {
          return N;
        },
        Ak: function () {
          return i;
        },
        $k: function () {
          return k;
        },
        m3: function () {
          return U;
        },
        Q7: function () {
          return M;
        },
        KT: function () {
          return H;
        },
        dt: function () {
          return F;
        },
        xA: function () {
          return D;
        },
      }),
        ((s = i || (i = {})).Album = "album"),
        (s.Playlist = "playlist"),
        (s.Artist = "artist"),
        (s.Vibe = "vibe"),
        (s.Various = "various"),
        (s.Generative = "generative"),
        (s.Search = "search");
      var a,
        s,
        i,
        n,
        o = r(48616),
        c = r(8267);
      function l(e) {
        let t = [];
        for (let r of e)
          for (let e of r) t.push({ type: c.RX.Unloaded, meta: e });
        return t;
      }
      var u = r(54122);
      class d extends c.$n {
        isCurrent = !1;
        actions = {
          moveBackward: new u.wi(!1),
          moveForward: new u.wi(!0),
          repeat: new u.wi(null),
          shuffle: new u.wi(null),
          speed: new u.wi(null),
        };
        from = "";
        get isCurrentContext() {
          return this.isCurrent;
        }
        set isCurrentContext(e) {
          this.isCurrent = e;
        }
        get availableActions() {
          return this.actions;
        }
      }
      var h = r(63278);
      class f extends h.y {
        name = "ContextException";
        constructor(e, { code: t = "E_CONTEXT", ...r } = {}) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, f.prototype);
        }
      }
      var m = r(14408);
      function g(e) {
        return e.map((e) => ({ type: m.A4.SmartPreview, meta: e }));
      }
      class p extends d {
        contextData;
        albumsResource;
        variables;
        constructor(e) {
          super();
          let {
            data: t,
            albumResourceConfig: r,
            httpClient: a,
            variables: s,
          } = e;
          (this.albumsResource = new o.SZ(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = s);
        }
        loadTrailer() {
          return this.albumsResource
            .getTrailer({ albumId: Number(this.contextData.meta.id) })
            .then((e) => ((this.contextData.meta.trailer = e.trailer), e))
            .catch((e) => {
              throw new f("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.albumsResource
            .getAlbumWithTracksIds({
              albumId: Number(this.contextData.meta.id),
              resumeStream: !0,
            })
            .then((e) => ((this.contextData.meta = e), e))
            .catch((e) => {
              throw new f("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          if (this.contextData.trailer)
            return this.loadTrailer().then((e) => g(e.trailer.tracks));
          if (this.contextData.meta.volumes) {
            let e = l(this.contextData.meta.volumes);
            return Promise.resolve(e);
          }
          return this.loadContextMeta().then((e) => {
            let t = l(e.volumes);
            return Promise.resolve(t);
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        get resumeFromIndex() {
          if (
            this.contextData.meta.resumeFrom?.trackId &&
            Array.isArray(this.contextData.meta.volumes)
          ) {
            let e = [].concat(...this.contextData.meta.volumes),
              t = e.findIndex(
                (e) => e.id === this.contextData.meta.resumeFrom?.trackId,
              );
            if (t >= 0) return t;
          }
          return null;
        }
      }
      let y = (e) => {
          let [t, r] = e.split(":");
          return { uid: String(t), kind: Number(r) };
        },
        v = (e, t) => `${e}:${t}`,
        E = (e) => 3 === e;
      class P extends d {
        contextData;
        usersResource;
        playlistResource;
        variables;
        constructor(e) {
          super();
          let {
            data: t,
            usersResourceConfig: r,
            playlistResourceConfig: a,
            httpClient: s,
            variables: i,
          } = e;
          (this.usersResource = new o.Vn(s, r)),
            (this.playlistResource = new o.Bl(s, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = i);
        }
        loadTrailer() {
          let { uid: e, kind: t } = y(this.contextData.meta.id);
          return this.usersResource
            .getPlaylistTrailer({ userId: e, playlistKind: t })
            .then((e) => ((this.contextData.meta.trailer = e.trailer), e))
            .catch((e) => {
              throw new f("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.contextData.meta.uuid,
            { uid: t, kind: r } = y(this.contextData.meta.id),
            a = E(r) && void 0 !== e,
            s = a
              ? this.playlistResource.getPlaylist({
                  playlistUuid: e,
                  resumeStream: !1,
                  richTracks: !1,
                })
              : this.usersResource.getPlaylistWithTracksIds({
                  userId: t,
                  playlistKind: r,
                  resumeStream: !1,
                });
          return s
            .then((e) => {
              let t = { ...e, id: v(e.uid, e.kind) };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new f("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          if (this.contextData.trailer)
            return this.loadTrailer().then((e) => g(e.trailer.tracks));
          if (this.contextData.meta.tracks) {
            let e = [];
            for (let t of this.contextData.meta.tracks)
              e.push({ type: c.RX.Unloaded, meta: t });
            return Promise.resolve(e);
          }
          return this.loadContextMeta().then((e) => {
            let t = [];
            for (let r of e.tracks) t.push({ type: c.RX.Unloaded, meta: r });
            return t;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
      }
      class x extends d {
        contextData;
        artistsResource;
        variables;
        constructor(e) {
          super();
          let {
            data: t,
            artistsResourceConfig: r,
            httpClient: a,
            variables: s,
          } = e;
          (this.artistsResource = new o.cn(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = s);
        }
        loadTrailer() {
          return this.artistsResource
            .getTrailer({ artistId: String(this.contextData.meta.id) })
            .then((e) => ((this.contextData.meta.trailer = e.trailer), e))
            .catch((e) => {
              throw new f("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.artistsResource
            .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
            .then((e) => {
              let t = { id: this.contextData.meta.id, trackIds: e };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new f("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          if (this.contextData.trailer)
            return this.loadTrailer().then((e) => g(e.trailer.tracks));
          if (this.contextData.meta.trackIds) {
            let e = [];
            for (let t of this.contextData.meta.trackIds)
              e.push({ type: c.RX.Unloaded, meta: { id: t } });
            return Promise.resolve(e);
          }
          return this.loadContextMeta().then((e) => {
            let t = [];
            for (let r of e.trackIds)
              t.push({ type: c.RX.Unloaded, meta: { id: r } });
            return t;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
      }
      function _(e) {
        let t = [];
        for (let r of e)
          t.push({
            type: m.A4.VibeTrack,
            meta: {
              ...r.track,
              liked: r.liked,
              trackParameters: r.trackParameters,
            },
          });
        return t;
      }
      function S(e) {
        if (!("realId" in e.data.meta))
          throw new f("Error in VibeContext", { code: "E_WRONG_VIBE_CONTEXT" });
        if (e.data.type === c.RX.Unloaded) return String(e.data.meta.id);
        let {
          data: {
            meta: { albums: t, realId: r },
          },
        } = e;
        return t && t[0]?.id ? `${r}:${t[0].id}` : `${r}`;
      }
      function T(e, t) {
        let r = e.slice(0, t + 2);
        return r.map((e) => {
          let { entity: t } = e;
          return S(t);
        });
      }
      function C() {
        let e = new Date();
        return e.toISOString();
      }
      let w = (e) =>
        "object" == typeof e &&
        e &&
        "durationMs" in e &&
        "number" == typeof e.durationMs;
      class b extends h.y {
        name = "VibeContextFeedbackException";
        constructor(e, { code: t = "E_VIBE_CONTEXT_FEEDBACK", ...r } = {}) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, b.prototype);
        }
      }
      let k = (e) => String([...e].sort());
      class R extends d {
        contextData;
        rotorResource;
        logger;
        feedbackForSending = [];
        isVibeStarted = !1;
        variables;
        constructor(e) {
          super();
          let {
            data: t,
            rotorResourceConfig: r,
            httpClient: a,
            logger: s,
            variables: i,
          } = e;
          (this.rotorResource = new o.Ud(a, r)),
            (this.logger = s),
            (this.contextData = t),
            (this.from = t.from),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.variables = i);
        }
        apply(e) {
          let { hooks: t, playback: r } = e;
          t.beforeContextSet.tap("VibeContext", () => {
            this.isCurrentContext &&
              this.sendFeedback(
                r.state.playerState,
                r.state.queueState,
                o.C.TRACK_FINISHED,
              );
          }),
            t.afterMediaStartPlaying.tapPromise("VibeContext", () =>
              this.isCurrentContext
                ? new Promise((e) => {
                    this.isVibeStarted
                      ? this.sendFeedback(
                          r.state.playerState,
                          r.state.queueState,
                          o.C.TRACK_STARTED,
                        )
                      : (this.sendFeedback(
                          r.state.playerState,
                          r.state.queueState,
                          o.C.RADIO_STARTED,
                        ).then(() => {
                          this.sendFeedback(
                            r.state.playerState,
                            r.state.queueState,
                            o.C.TRACK_STARTED,
                          );
                        }),
                        (this.isVibeStarted = !0)),
                      e();
                  })
                : Promise.resolve(),
            ),
            t.beforeEntityChange.tapPromise("VibeContext", (e) =>
              this.isCurrentContext
                ? new Promise((t, a) => {
                    switch (e) {
                      case c.Zp.AUTO_MOVE_FORWARD:
                        this.onAutoMoveForward(r).then(t).catch(a);
                        break;
                      case c.Zp.MOVE_FORWARD:
                        this.onMoveForward(r).then(t).catch(a);
                        break;
                      case c.Zp.MOVE_BACKWARD:
                        this.sendFeedback(
                          r.state.playerState,
                          r.state.queueState,
                          o.C.SKIP,
                        ),
                          t();
                        break;
                      case c.Zp.SET_INDEX:
                      case c.Zp.RESTART_CONTEXT:
                        t();
                    }
                  })
                : Promise.resolve(),
            );
        }
        loadContextMeta() {
          let {
            meta: { id: e },
            seeds: t,
          } = this.contextData;
          return this.rotorResource
            .sessionNew({ ...this.contextData, seeds: t, includeWaveModel: !0 })
            .then(
              (t) => (
                (this.contextData.meta.session = t), { id: e, session: t }
              ),
            )
            .catch((e) => {
              throw new f("Error in VibeContext", {
                code: "E_VIBE_LOAD_CONTEXT_META",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        setSettings(e, t, r) {
          let {
              meta: { id: a },
            } = this.contextData,
            s = T(r.entityList.value, r.index.value);
          return this.sendFeedback(t, r, o.C.SKIP).then(() =>
            this.rotorResource
              .sessionNew({
                ...this.contextData,
                seeds: e,
                queue: s,
                includeWaveModel: !0,
              })
              .then(
                (e) => (
                  (this.contextData.meta.session = e),
                  (this.contextData.meta.id = k(e.wave.seeds)),
                  { id: a, session: this.contextData.meta.session }
                ),
              )
              .catch((e) => {
                throw new f("Error in VibeContext", {
                  code: "E_VIBE_LOAD_CONTEXT_META",
                  cause: e,
                  data: {
                    contextId: this.contextData.meta.id,
                    sessionId: this.contextData.meta.session
                      ? this.contextData.meta.session.radioSessionId
                      : "",
                  },
                });
              }),
          );
        }
        getContextEntitiesData() {
          let {
            meta: { session: e },
          } = this.contextData;
          if (e) {
            let { sequence: t } = e;
            return Promise.resolve(_(t));
          }
          return this.loadContextMeta()
            .then((e) => {
              let {
                session: { sequence: t },
              } = e;
              return _(t);
            })
            .catch((e) => {
              throw new f("Error in VibeContext", {
                code: "E_VIBE_GET_CONTEXT_ENTITIES_DATA",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        formatContextError(e, t, r, a) {
          return a
            ? new f(e, {
                code: t,
                cause: r,
                data: {
                  contextId: a.meta.id,
                  sessionId: a.meta.session
                    ? a.meta.session.radioSessionId
                    : "",
                },
              })
            : new f(e, { code: t, cause: r });
        }
        storeFeedbacksForSending(e) {
          if (e) {
            let t = Array.isArray(e) ? e : [e];
            this.feedbackForSending.push(...t);
          }
        }
        getFeedbacksForSending() {
          if (!this.variables?.sendFeedbackToSessionTracks) return null;
          let e = this.feedbackForSending;
          return (this.feedbackForSending = []), e;
        }
        sendFeedbackOnMoveForward(e, t) {
          let r;
          return (
            this.variables?.sendFeedbackToSessionTracks
              ? ((r = Promise.resolve()),
                this.storeFeedbacksForSending(
                  this.generateFeedbackForTracks(e.state.queueState, t),
                ))
              : (r = this.sendFeedback(
                  e.state.playerState,
                  e.state.queueState,
                  t,
                )),
            r
          );
        }
        onAutoMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, o.C.TRACK_FINISHED).then(
            () => {
              if (!this.contextData.meta.session)
                return Promise.reject(
                  this.formatContextError(
                    "Error in VibeContext",
                    "E_NO_SESSION",
                    void 0,
                  ),
                );
              let {
                  meta: { session: t },
                  aliceExperiments: r,
                  djData: a,
                  useIchwill: s,
                } = this.contextData,
                { index: i, entityList: n } = e.state.queueState,
                o = i.value === n.value.length - 2,
                c = i.value === n.value.length - 1,
                l = T(
                  e.state.queueState.entityList.value,
                  e.state.queueState.index.value,
                );
              if (!o && !c) return Promise.resolve();
              let u = this.getFeedbacksForSending(),
                d = this.rotorResource
                  .sessionTracks({
                    radioSessionId: t.radioSessionId,
                    queue: l,
                    aliceExperiments: r,
                    djData: a,
                    useIchwill: s,
                    feedbacks: u || void 0,
                  })
                  .then((t) => {
                    this.contextData.meta.sessionTracks = t;
                    let { sequence: r } = t,
                      a = _(r);
                    e.append(a), (this.availableActions.moveForward.value = !0);
                  });
              return o
                ? (d.catch((e) => {
                    this.storeFeedbacksForSending(u),
                      this.logger.error(
                        this.formatContextError(
                          "Error in VibeContext",
                          "E_AUTO_MOVE_FORWARD",
                          e,
                          this.contextData,
                        ),
                      );
                  }),
                  Promise.resolve())
                : d.catch(
                    (e) => (
                      this.storeFeedbacksForSending(u),
                      Promise.reject(
                        this.formatContextError(
                          "Error in VibeContext",
                          "E_AUTO_MOVE_FORWARD",
                          e,
                          this.contextData,
                        ),
                      )
                    ),
                  );
            },
          );
        }
        onMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, o.C.SKIP).then(() => {
            if (!this.contextData.meta.session)
              return Promise.reject(
                this.formatContextError(
                  "Error in VibeContext",
                  "E_NO_SESSION",
                  void 0,
                ),
              );
            let {
                meta: { session: t },
                aliceExperiments: r,
                djData: a,
                useIchwill: s,
              } = this.contextData,
              { index: i, entityList: n } = e.state.queueState,
              o = T(
                e.state.queueState.entityList.value,
                e.state.queueState.index.value,
              ),
              c = this.getFeedbacksForSending();
            return this.rotorResource
              .sessionTracks({
                radioSessionId: t.radioSessionId,
                queue: o,
                aliceExperiments: r,
                djData: a,
                useIchwill: s,
                feedbacks: c || void 0,
              })
              .then((t) => {
                this.contextData.meta.sessionTracks = t;
                let { sequence: r } = t,
                  a = _(r),
                  s = [];
                for (let e = i.value + 2; e < n.value.length; e++) s.push(e);
                (0, u.dC)(() => {
                  e.remove(s), e.append(a);
                });
              })
              .catch(
                (e) => (
                  this.storeFeedbacksForSending(c),
                  Promise.reject(
                    this.formatContextError(
                      "Error in VibeContext",
                      "E_AUTO_MOVE_FORWARD",
                      e,
                      this.contextData,
                    ),
                  )
                ),
              );
          });
        }
        generateFeedbackForTracks(e, t) {
          let r = this.generateFeedback(e, t),
            a = null;
          if (r) {
            a = { batchId: r.batchId, from: r.event.from, event: r.event };
            let s = e.currentEntity.value?.entity.data.meta;
            if (t === o.C.TRACK_FINISHED && w(s)) {
              let e = s.durationMs / 1e3,
                t = e % 1 == 0 ? e : Number(e.toFixed(3));
              a.event.trackLengthSeconds = t;
            }
          }
          return a;
        }
        generateFeedback(e, t) {
          let r = null;
          if (!this.contextData.meta.session) return r;
          let {
              meta: { session: a, sessionTracks: s },
            } = this.contextData,
            i = (function (e, t, r) {
              let a = e.currentEntity.value,
                s = { timestamp: C(), type: t, from: r };
              if (a) {
                let { entity: e } = a;
                (s.trackId = S(e)),
                  (s.totalPlayedSeconds = e.totalPlayedSeconds);
              }
              return s;
            })(e, t, this.from),
            { radioSessionId: n } = a,
            c = s ? s.batchId : a.batchId;
          switch (t) {
            case o.C.RADIO_STARTED:
              r = {
                batchId: c,
                radioSessionId: n,
                event: { type: t, timestamp: i.timestamp, from: i.from },
              };
              break;
            case o.C.TRACK_STARTED:
            case o.C.TRACK_FINISHED:
            case o.C.SKIP:
            case o.C.LIKE:
            case o.C.UNLIKE:
            case o.C.DISLIKE:
            case o.C.UNDISLIKE:
              r = { batchId: c, radioSessionId: n, event: i };
          }
          return r;
        }
        sendFeedback(e, t, r) {
          let a = this.generateFeedback(t, r);
          return this.contextData.meta.session && a
            ? this.rotorResource
                .sessionFeedback(a)
                .then(() => Promise.resolve())
                .catch((e) => {
                  this.logger.error(new b("Feedback error", { cause: e }));
                })
            : (this.logger.error(new b("Feedback error")), Promise.resolve());
        }
      }
      class A extends d {
        contextData;
        tracksResource;
        variables;
        constructor(e) {
          super();
          let {
            data: t,
            tracksResourceConfig: r,
            httpClient: a,
            variables: s,
          } = e;
          (this.tracksResource = new o.HZ(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = s);
        }
        getContextId() {
          let e = this.contextData.meta.albums?.[0]?.id;
          return e
            ? `${this.contextData.meta.id}:${e}`
            : String(this.contextData.meta.id);
        }
        loadTrailer() {
          return this.tracksResource
            .getTrailer({ trackId: this.getContextId() })
            .then((e) => ((this.contextData.meta = e.track), e))
            .catch((e) => {
              throw new f("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.getContextId();
          return this.tracksResource
            .getTracksMeta({ trackIds: [e], withProgress: !0 })
            .then((t) => {
              let r = t[0];
              if (r) return (this.contextData.meta = r), r;
              throw new f("Error in VariousContext. Track not found", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                data: { contextId: e },
              });
            })
            .catch((t) => {
              throw new f("Error in VariousContext", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                cause: t,
                data: { contextId: e },
              });
            });
        }
        getContextEntitiesData() {
          return this.contextData.trailer
            ? this.loadTrailer().then((e) => [
                { meta: e.track, type: m.A4.SmartPreview },
              ])
            : this.contextData.meta
              ? Promise.resolve([
                  { meta: this.contextData.meta, type: m.A4.Unknown },
                ])
              : this.loadContextMeta().then((e) => [
                  { meta: e, type: m.A4.Unknown },
                ]);
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
      }
      class I extends h.y {
        name = "ContextFactoryException";
        constructor(e, { code: t = "E_CONTEXT_FACTORY", ...r } = {}) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, I.prototype);
        }
      }
      let O = (e) => [{ type: m.A4.Generative, meta: e }];
      class L extends d {
        contextData;
        rotorResource;
        isPaused = !1;
        restartsCount = 0;
        variables;
        constructor(e) {
          super();
          let {
            data: t,
            rotorResourceConfig: r,
            httpClient: a,
            variables: s,
          } = e;
          (this.rotorResource = new o.Ud(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.availableActions.moveBackward.value = !1),
            (this.availableActions.moveForward.value = !1),
            (this.variables = s);
        }
        apply(e) {
          let { hooks: t, playback: r } = e;
          r.state.playerState.status.onChange((e) => {
            this.isCurrentContext &&
              e &&
              (e === c.Xz.PLAYING
                ? (this.isPaused && this.sendFeedback(o.pI.StreamPlay, r),
                  (this.isPaused = !1))
                : e === c.Xz.PAUSED &&
                  (this.sendFeedback(o.pI.StreamPause, r),
                  (this.isPaused = !0)));
          }),
            t.afterError.tap("GenerativeContext", () => {
              this.isCurrentContext && this.restart(r);
            });
        }
        loadContextMeta() {
          return this.rotorResource
            .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
            .then((e) => {
              let t = {
                id: String(this.contextData.meta.id),
                stream: e.stream,
                ...e.data,
              };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new f("Error GenerativeContext", {
                code: "E_GENERATIVE_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          return this.contextData.meta.stream?.id
            ? Promise.resolve(O(this.contextData.meta))
            : this.loadContextMeta().then((e) => Promise.resolve(O(e)));
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        sendFeedback(e, t) {
          this.rotorResource
            .stationFeedback({
              type: e,
              stationId: String(this.contextData.meta.id),
              streamId: String(this.contextData.meta.stream?.id),
              timestamp: C(),
            })
            .then((e) => {
              e.reload_stream && this.restart(t);
            });
        }
        restart(e) {
          if (((this.isPaused = !1), this.restartsCount >= 2))
            throw (
              (e.stop(),
              new f("Error GenerativeContext", {
                code: "E_GENERATIVE_RESTART_LIMIT",
                data: { contextId: this.contextData.meta.id },
              }))
            );
          return (
            this.restartsCount++,
            e
              .stop()
              .then(() => this.loadContextMeta())
              .then(() =>
                e.restartContext({
                  playAfterRestart: !0,
                  entitiesData: O(this.contextData.meta),
                }),
              )
          );
        }
      }
      class N {
        httpClient;
        config;
        logger;
        constructor(e) {
          let { config: t, httpClient: r, logger: a } = e;
          (this.config = t), (this.httpClient = r), (this.logger = a);
        }
        create(e) {
          let t = null,
            { data: r } = e;
          try {
            switch (r.type) {
              case i.Album:
                t = new p({
                  data: r,
                  albumResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      this.config.resourceTimeoutsConfig?.albumsResource,
                  },
                  httpClient: this.httpClient,
                  variables: this.config.contextVariables?.[i.Album],
                });
                break;
              case i.Playlist:
                t = new P({
                  data: r,
                  usersResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts: this.config.resourceTimeoutsConfig?.usersResource,
                  },
                  playlistResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      this.config.resourceTimeoutsConfig?.playlistResource,
                  },
                  httpClient: this.httpClient,
                  variables: this.config.contextVariables?.[i.Playlist],
                });
                break;
              case i.Artist:
                t = new x({
                  data: r,
                  artistsResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      this.config.resourceTimeoutsConfig?.artistsResource,
                  },
                  httpClient: this.httpClient,
                  variables: this.config.contextVariables?.[i.Artist],
                });
                break;
              case i.Vibe:
                t = new R({
                  data: r,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts: this.config.resourceTimeoutsConfig?.rotorResource,
                  },
                  httpClient: this.httpClient,
                  logger: this.logger,
                  variables: this.config.contextVariables?.[i.Vibe],
                });
                break;
              case i.Various:
                t = new A({
                  data: r,
                  tracksResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      this.config.resourceTimeoutsConfig?.tracksResource,
                  },
                  httpClient: this.httpClient,
                  variables: this.config.contextVariables?.[i.Various],
                });
                break;
              case i.Generative:
                t = new L({
                  data: r,
                  httpClient: this.httpClient,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                  },
                  variables: this.config.contextVariables?.[i.Generative],
                });
            }
          } catch (e) {
            throw new I("Error while creating context", {
              cause: e,
              data: { type: r.type, meta: r.meta },
            });
          }
          if (null !== t) return t;
          throw new I("Cannot create context with nonexistent type", {
            code: "E_NONEXISTENT_CONTEXT_TYPE",
            data: { type: r.type, meta: r.meta },
          });
        }
      }
      function U(e) {
        return e instanceof p;
      }
      function D(e) {
        return e instanceof R;
      }
      function F(e) {
        return e instanceof A;
      }
      function H(e) {
        return e instanceof P;
      }
      function M(e) {
        return e instanceof L;
      }
      ((a = n || (n = {})).Album = "album"),
        (a.Artist = "artist"),
        (a.Playlist = "playlist"),
        (a.Radio = "radio"),
        (a.Other = "other"),
        (a.Search = "search");
    },
    14408: function (e, t, r) {
      "use strict";
      r.d(t, {
        EE: function () {
          return n;
        },
        A4: function () {
          return i;
        },
        nS: function () {
          return E;
        },
        OX: function () {
          return P;
        },
        YM: function () {
          return x;
        },
      });
      var a,
        s,
        i,
        n,
        o = r(8267),
        c = r(48616);
      ((a = i || (i = {})).Music = "music"),
        (a.VibeTrack = "vibeTrack"),
        (a.Generative = "generative"),
        (a.Unknown = "unknown"),
        (a.SmartPreview = "smartPreview"),
        ((s = n || (n = {})).PLAYING = "playing"),
        (s.NOT_PLAYING = "not-playing");
      let l = (e) =>
          !!(
            "object" == typeof e &&
            e &&
            "streamProgress" in e &&
            "object" == typeof e.streamProgress &&
            e.streamProgress &&
            "endPositionSec" in e.streamProgress &&
            "number" == typeof e.streamProgress.endPositionSec
          ),
        u = (e) =>
          "object" == typeof e &&
          e &&
          "rememberPosition" in e &&
          "boolean" == typeof e.rememberPosition;
      class d {
        entityData;
        likeStore;
        entityPlayId = "";
        entityAddTracksToPlayerTime = "";
        entityTimeStagesOfPlayback = [];
        constructor(e) {
          (this.entityData = e.data), (this.likeStore = e.likeStore);
        }
        set playId(e) {
          this.entityPlayId = e;
        }
        get playId() {
          return this.entityPlayId;
        }
        set addTracksToPlayerTime(e) {
          this.entityAddTracksToPlayerTime = e;
        }
        get addTracksToPlayerTime() {
          return this.entityAddTracksToPlayerTime;
        }
        get totalPlayedSeconds() {
          return (function (e) {
            let t,
              r,
              a = 0,
              s = [];
            if (0 !== e.length) {
              let i = (function (e) {
                let t = [];
                for (; 0 !== e.length; ) {
                  let r = e.shift();
                  if (r && r.stage === n.PLAYING) {
                    let e = t[t.length - 1];
                    (e && e.stage !== n.NOT_PLAYING) || t.push(r);
                  } else if (r && r.stage === n.NOT_PLAYING) {
                    let e = t[t.length - 1];
                    e && e.stage === n.PLAYING && t.push(r);
                  }
                }
                let r = t[t.length - 1];
                return (
                  r &&
                    r.stage === n.PLAYING &&
                    t.push({
                      stage: n.NOT_PLAYING,
                      perfNow: performance.now(),
                      ts: Date.now(),
                    }),
                  t
                );
              })(e);
              for (let e of i)
                e.stage === n.PLAYING ? (t = e.perfNow) : (r = e.perfNow),
                  t && r && (s.push(r - t), (t = void 0), (r = void 0));
              for (let e of s) a += e;
              return Math.round((a / 1e3 + Number.EPSILON) * 1e3) / 1e3;
            }
            return a;
          })([...this.entityTimeStagesOfPlayback]);
        }
        get timeStagesOfPlayback() {
          return this.entityTimeStagesOfPlayback;
        }
        saveTimeStageOfPlayback(e) {
          let t = {
            stage: e.stage,
            perfNow: performance.now(),
            ts: Date.now(),
          };
          e.reason && (t.reason = e.reason),
            this.entityTimeStagesOfPlayback.push(t);
        }
        clearTimeStagesOfPlayback() {
          this.entityTimeStagesOfPlayback = [];
        }
        get data() {
          return this.entityData;
        }
        canBePlayed(e) {
          let { entityChangeMethod: t, index: r } = e,
            a =
              t === o.Zp.SET_INDEX || (t === o.Zp.PLAY_CONTEXT && void 0 !== r),
            s = !a && this.likeStore.isTrackDisliked(this.entityData.meta.id),
            i = !!(
              "available" in this.entityData.meta &&
              this.entityData.meta.available
            );
          return !s && i;
        }
        get startPosition() {
          let e = this.entityData.meta;
          if (l(e) && u(e) && e.rememberPosition) {
            let { endPositionSec: t, everFinished: r } = e.streamProgress;
            if (!r) return t;
          }
          return null;
        }
      }
      class h extends d {}
      class f extends d {}
      class m extends d {
        canBePlayed() {
          return !1;
        }
      }
      var g = r(63278);
      class p extends g.y {
        name = "EntityFactoryException";
        constructor(e, { code: t = "E_ENTITY_FACTORY", ...r } = {}) {
          super(e, { code: t, ...r }), Object.setPrototypeOf(this, p.prototype);
        }
      }
      class y extends d {
        canBePlayed() {
          return !0;
        }
      }
      class v extends d {}
      class E {
        likeStore;
        constructor(e) {
          this.likeStore = e.likeStore;
        }
        create(e) {
          let t = null,
            { data: r } = e;
          try {
            switch (r.type) {
              case i.Music:
                t = new h({ data: r, likeStore: this.likeStore });
                break;
              case i.VibeTrack:
                t = new f({ data: r, likeStore: this.likeStore });
                break;
              case i.Generative:
                t = new y({ data: r, likeStore: this.likeStore });
                break;
              case i.SmartPreview:
                t = new v({ data: r, likeStore: this.likeStore });
                break;
              case i.Unknown:
                r.meta.type,
                  c.Vc.MUSIC,
                  (t = new h({
                    data: { ...r, type: i.Music },
                    likeStore: this.likeStore,
                  }));
                break;
              case o.RX.Unloaded:
                t = new m({ data: r, likeStore: this.likeStore });
            }
          } catch (e) {
            throw new p("Error while creating entity", {
              cause: e,
              data: { type: r.type, meta: r.meta },
            });
          }
          if (null !== t) return t;
          throw new p("Cannot create entities with nonexistent type", {
            code: "E_NONEXISTENT_ENTITY_TYPE",
            data: { type: r.type, meta: r.meta },
          });
        }
      }
      function P(e) {
        return e instanceof y;
      }
      function x(e) {
        return e instanceof v;
      }
    },
    86502: function (e, t, r) {
      "use strict";
      r.d(t, {
        Xz: function () {
          return a.Xz;
        },
        RX: function () {
          return a.RX;
        },
        $7: function () {
          return n;
        },
      });
      var a = r(8267),
        s = r(61165);
      function i(e) {
        let { playback: t, plugins: r = [] } = e;
        for (let e of r) e.apply({ playback: t, hooks: t.hooks });
      }
      class n {
        mainPlayback;
        playbacks;
        contextFactory;
        source;
        constructor(e) {
          (this.contextFactory = e.contextFactory),
            (this.source = e.audioCore.source),
            (this.mainPlayback = new a.Vb({
              entityFactory: e.entityFactory,
              audioCore: e.audioCore,
              mediaProvider: e.mediaProvider,
              entityProvider: e.entityProvider,
              windowPaginationConfig: e.windowPaginationConfig,
              hooks: (0, s.H)(),
            })),
            i({ plugins: e.plugins, playback: this.mainPlayback }),
            (this.playbacks = new Map());
        }
        getPlayback(e) {
          if (e) {
            let t = this.playbacks.get(e);
            if (t) return t;
          }
          return this.mainPlayback;
        }
        createPlayback(e, t) {
          if (!this.playbacks.has(e)) {
            let r = new a.Vb({
              entityFactory: t.entityFactory,
              mediaProvider: t.mediaProvider,
              entityProvider: t.entityProvider,
              audioCore: t.audioCore,
              windowPaginationConfig: t.windowPaginationConfig,
              hooks: (0, s.H)(),
            });
            this.playbacks.set(e, r), i({ plugins: t.plugins, playback: r });
          }
        }
        get state() {
          return this.mainPlayback.state;
        }
        getState(e) {
          return this.getPlayback(e).state;
        }
        playContext(e, t) {
          let r = this.getPlayback(t);
          try {
            let { contextData: t } = e,
              a = this.contextFactory.create({ data: t });
            return r
              .playContext({
                context: a,
                entitiesData: e.entitiesData,
                loadContextMeta: e.loadContextMeta,
                queueParams: e.queueParams,
              })
              .catch((e) => {
                r.hooks.afterError.promise(e);
              });
          } catch (e) {
            return r.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        setContext(e, t) {
          let r = this.getPlayback(t);
          try {
            let { contextData: t } = e,
              a = this.contextFactory.create({ data: t });
            return r
              .setContext({
                context: a,
                entitiesData: e.entitiesData,
                loadContextMeta: e.loadContextMeta,
                queueParams: e.queueParams,
              })
              .catch((e) => {
                r.hooks.afterError.promise(e);
              });
          } catch (e) {
            return r.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        restartContext(e, t) {
          let r = this.getPlayback(t);
          return r
            .restartContext({
              playAfterRestart: e.playAfterRestart,
              entitiesData: e.entitiesData,
              queueParams: e.queueParams,
            })
            .catch((e) => {
              r.hooks.afterError.promise(e);
            });
        }
        play(e) {
          let t = this.getPlayback(e);
          return t.play().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        pause(e) {
          let t = this.getPlayback(e);
          return t.pause().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        resume(e) {
          let t = this.getPlayback(e);
          return t.resume().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        setProgress(e, t) {
          let r = this.getPlayback(t);
          return r
            .setProgress(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        setVolume(e, t) {
          let r = this.getPlayback(t);
          return r
            .setVolume(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        setSpeed(e, t) {
          let r = this.getPlayback(t);
          return r.setSpeed(e).catch((e) => (r.hooks.afterError.promise(e), 1));
        }
        slideForward(e, t) {
          let r = this.getPlayback(t);
          return r
            .slideForward(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        slideBackward(e, t) {
          let r = this.getPlayback(t);
          return r
            .slideBackward(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        increaseVolume(e, t) {
          let r = this.getPlayback(t);
          return r
            .increaseVolume(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        decreaseVolume(e, t) {
          let r = this.getPlayback(t);
          return r
            .decreaseVolume(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        moveForward(e) {
          let t = this.getPlayback(e);
          return t.moveForward().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        moveBackward(e) {
          let t = this.getPlayback(e);
          return t.moveBackward().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        setEntityByIndex(e, t) {
          let r = this.getPlayback(t);
          return r.setEntityByIndex(e).catch((e) => {
            r.hooks.afterError.promise(e);
          });
        }
        togglePause(e) {
          let t = this.getPlayback(e);
          return t.togglePause().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        toggleShuffle(e) {
          let t = this.getPlayback(e);
          try {
            t.toggleShuffle();
          } catch (e) {
            t.hooks.afterError.promise(e);
          }
        }
        setShuffle(e, t) {
          let r = this.getPlayback(t);
          try {
            r.setShuffle(e);
          } catch (e) {
            r.hooks.afterError.promise(e);
          }
        }
        bindPlayer(e) {
          this.getPlayback(e).bindPlayer();
        }
        unbindPlayer(e) {
          this.getPlayback(e).unbindPlayer();
        }
        setRepeatMode(e, t) {
          let r = this.getPlayback(t);
          try {
            this.getPlayback(t).setRepeatMode(e);
          } catch (e) {
            r.hooks.afterError.promise(e);
          }
        }
        remove(e, t) {
          this.getPlayback(t).remove(e);
        }
        inject(e, t, r) {
          this.getPlayback(r).inject(e, t);
        }
      }
    },
  },
]);
