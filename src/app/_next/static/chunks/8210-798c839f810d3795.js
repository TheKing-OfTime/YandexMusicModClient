(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8210],
  {
    63524: function (e, t, a) {
      "use strict";
      a.d(t, {
        e: function () {
          return d;
        },
      });
      var i,
        s = a(73484),
        r = a(65067),
        l = {
          6699: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let i = a(352),
              s = a(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: a, throttleTimeout: r } = e,
                l = (0, s.useRef)(null),
                [o, n] = (0, s.useState)(!!a),
                c = (0, s.useMemo)(
                  () =>
                    (0, i.throttle)(() => {
                      n(!a),
                        l.current && window.clearTimeout(l.current),
                        (l.current = window.setTimeout(() => {
                          n(!!a);
                        }, t));
                    }, r),
                  [t, a, r],
                ),
                d = (0, s.useCallback)(() => {
                  n(!!a), l.current && window.clearTimeout(l.current);
                }, [a]);
              return (
                (0, s.useEffect)(
                  () => () => {
                    l.current && window.clearTimeout(l.current);
                  },
                  [],
                ),
                { state: o, handleDebouncedToggle: c, reset: d }
              );
            };
          },
          2767: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForceUpdateRef = void 0);
            let i = a(810);
            t.useForceUpdateRef = () => {
              let [e, t] = (0, i.useState)(null);
              return [
                e,
                (0, i.useCallback)((e) => {
                  t((t) => (t !== e ? e : t));
                }, []),
              ];
            };
          },
          2067: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let i = a(810),
              s = a(361),
              r = a(6699);
            t.useScroll = (e) => {
              let { onScroll: t, listenIsScrolling: a, elementRef: l } = e,
                { state: o, handleDebouncedToggle: n } = (0,
                r.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                c = (0, i.useCallback)(() => {
                  a && n(), null == t || t();
                }, [a, n, t]);
              return (
                (0, i.useEffect)(() => {
                  let e = (0, s.getElementFromRefOrElement)(l);
                  if (null === e) return;
                  let t = null != e ? e : window,
                    a = { capture: !0, passive: !0 };
                  return (
                    t.addEventListener("scroll", c, a),
                    () => t.removeEventListener("scroll", c, a)
                  );
                }, [l, c]),
                o
              );
            };
          },
          361: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = void 0),
              (t.getElementFromRefOrElement = (e) =>
                void 0 === e
                  ? void 0
                  : null === e || e instanceof HTMLElement
                    ? e
                    : null === e.current || e.current instanceof HTMLElement
                      ? e.current
                      : void 0);
          },
          352: (e) => {
            e.exports = s;
          },
          810: (e) => {
            e.exports = i || (i = a.t(r, 2));
          },
        },
        o = {};
      function n(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var a = (o[e] = { exports: {} });
        return l[e](a, a.exports, n), a.exports;
      }
      var c = {};
      (() => {
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.useElementOffsetY = void 0);
        let e = n(810),
          t = n(2067),
          a = n(2767);
        c.useElementOffsetY = (i) => {
          let [s, r] = (0, a.useForceUpdateRef)(),
            [l, o] = (0, e.useState)(),
            n = (0, e.useCallback)(() => {
              let e = null == s ? void 0 : s.getBoundingClientRect();
              e && o(e.y);
            }, [s]);
          return (
            (0, e.useLayoutEffect)(n),
            (0, t.useScroll)({ onScroll: n, elementRef: i }),
            { forceUpdateRefCallback: r, offsetY: l }
          );
        };
      })(),
        c.__esModule;
      var d = c.useElementOffsetY;
    },
    38088: function (e, t, a) {
      "use strict";
      a.d(t, {
        J: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-albums-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-albums-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    68573: function (e, t, a) {
      "use strict";
      a.d(t, {
        y: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-clips-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-clips-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    68484: function (e, t, a) {
      "use strict";
      a.d(t, {
        z: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-compilations-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-compilations-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    80704: function (e, t, a) {
      "use strict";
      a.d(t, {
        U: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-concerts-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-concerts-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    66012: function (e, t, a) {
      "use strict";
      a.d(t, {
        c: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-discography-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-discography-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    69617: function (e, t, a) {
      "use strict";
      a.d(t, {
        c: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-familiar-you-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-familiar-you-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    15058: function (e, t, a) {
      "use strict";
      a.d(t, {
        D: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = (0, i.bYF)(e.artist.name),
          n = l(
            { id: "metadata.artist-title" },
            { artistTitle: e.artist.name },
          ),
          c = l(
            { id: "metadata.artist-description" },
            { artistTitle: e.artist.name },
          );
        return {
          title: n,
          description: c,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: c,
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            ogImage: e.artist.ogImage,
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.APP,
            title: o,
            url: t.url,
            appName: l({ id: "metadata.yandex-music" }),
          }),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
          other: { "music:musician": e.artist.name },
        };
      }
    },
    89742: function (e, t, a) {
      "use strict";
      a.d(t, {
        S: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-similar-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-similar-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    899: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = a(13534);
      async function s(e, t) {
        var a, s, r;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let l = await (0, i.EQQ)(t.locale),
          o = l(
            { id: "metadata.artist-tracks-title" },
            { artistName: e.artist.name },
          ),
          n = l(
            { id: "metadata.artist-tracks-description" },
            { artistName: e.artist.name },
          );
        return {
          title: o,
          description: n,
          openGraph: (0, i.A36)({
            ogTitle: o,
            ogDescription: n,
            ogType: "website",
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            customImage: (0, i.u3o)({ tld: t.tld }),
            siteName: l({ id: "metadata.yandex-music" }),
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.SUMMARY_LARGE_IMAGE,
            title: o,
            description: n,
          }),
          facebook: (0, i.H_c)(),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: l({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    60798: function (e, t, a) {
      "use strict";
      a.d(t, {
        m: function () {
          return s;
        },
      });
      var i = a(65067);
      let s = (e, t) => {
        (0, i.useEffect)(
          () => () => {
            window.location.pathname.includes(e.selfLink) || e.reset();
          },
          [e, t],
        );
      };
    },
    13836: function (e, t, a) {
      "use strict";
      a.d(t, {
        N: function () {
          return r;
        },
      });
      var i = a(65067),
        s = a(13534);
      let r = (e) => {
        var t;
        let { setDeeplink: a } =
          null !== (t = (0, s.Z01)()) && void 0 !== t ? t : {};
        (0, i.useEffect)(() => {
          if (e) {
            let t = "artist/".concat(e);
            null == a || a(t);
          }
          return () => {
            null == a || a(null);
          };
        }, [e, a]);
      };
    },
    80829: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistAlbumsPage: function () {
          return I;
        },
      });
      var i = a(75441),
        s = a(32358),
        r = a(62569),
        l = a(98730),
        o = a(65067),
        n = a(9317),
        c = a(35846),
        d = a(2954),
        u = a(93093),
        m = a(17392),
        p = a(30948),
        g = a(72783),
        h = a(55051),
        v = a(69947),
        f = a(64353),
        _ = a(90378),
        b = a(13534),
        A = a(97141),
        S = a(38088),
        k = a(68484),
        x = a(66012);
      let C = (e, t) => {
        (0, o.useEffect)(() => {
          if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
          let a = (0, f.zg)(e.meta.artist);
          switch (t) {
            case b.MX1.ALBUMS:
              (0, S.J)(
                { artist: a },
                { fullUrl: null, locale: null, url: null, tld: "", host: "" },
              ).then((e) => {
                (0, b.gOT)(e);
              });
              break;
            case b.MX1.COMPILATIONS:
              (0, k.z)(
                { artist: a },
                { fullUrl: null, locale: null, url: null, tld: "", host: "" },
              ).then((e) => {
                (0, b.gOT)(e);
              });
              break;
            case b.MX1.DISCOGRAPHY:
              (0, x.c)(
                { artist: a },
                { fullUrl: null, locale: null, url: null, tld: "", host: "" },
              ).then((e) => {
                (0, b.gOT)(e);
              });
          }
        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, t]);
      };
      var T = a(60798),
        N = a(13836),
        L = a(30136),
        j = a.n(L);
      let I = (0, r.Pi)((e) => {
        var t, a, r, S, k, x, L;
        let {
            artistId: I,
            variant: P,
            preloadedArtist: R,
            preloadedAlbums: E,
          } = e,
          {
            artist: B,
            disclaimer: y,
            settings: { isMobile: w },
          } = (0, b.oR4)(),
          { formatMessage: O } = (0, n.Z)(),
          { contentScrollRef: M, setContentScrollRef: U } = (0, b.$Y6)(),
          D = (0, b.k67)(),
          F = (0, u.W)((e) => {
            B.albumsSubpage.getData({
              artistId: I,
              page: e,
              pageSize: h.IQ,
              sort: { sortBy: d.h.YEAR },
            });
          }),
          H = (0, f.v2)({
            artist: null === (t = B.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
        (0, N.N)(I),
          (0, o.useEffect)(() => {
            var e;
            (null === (e = B.meta) || void 0 === e
              ? void 0
              : e.artist.isUnsafeLegal) && H();
          }, [
            null === (a = B.meta) || void 0 === a
              ? void 0
              : a.artist.isUnsafeLegal,
            H,
          ]),
          (0, T.m)(B, I),
          (0, o.useEffect)(
            () => () => {
              B.albumsSubpage.reset();
            },
            [B, B.albumsSubpage],
          ),
          B.albumsSubpage.isNotFound && (0, l.notFound)(),
          (0, b.NOh)(B.albumsSubpage.isResolved),
          C(B, P);
        let G = (0, o.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(A.$_, { className: j().footer }),
            }),
            [],
          ),
          z = (0, o.useMemo)(() => {
            switch (P) {
              case b.MX1.DISCOGRAPHY:
                return O(
                  { id: "page.artist-discography-header" },
                  { artistName: B.commonSubPage.artistName },
                );
              case b.MX1.COMPILATIONS:
                return O(
                  { id: "page.artist-compilations-header" },
                  { artistName: B.commonSubPage.artistName },
                );
              default:
                return O(
                  { id: "page.artist-albums-header" },
                  { artistName: B.commonSubPage.artistName },
                );
            }
          }, [B.commonSubPage.artistName, O, P]),
          V = (0, o.useMemo)(() => {
            switch (P) {
              case b.MX1.DISCOGRAPHY:
                return O({ id: "entity-names.artist-studio-albums-list" });
              case b.MX1.COMPILATIONS:
                return O({ id: "entity-names.artist-compilations-list" });
              default:
                return O({ id: "entity-names.artist-albums-list" });
            }
          }, [O, P]),
          W = (0, o.useMemo)(() => {
            switch (P) {
              case b.MX1.DISCOGRAPHY:
                return b.Rhz.ARTIST_DISCOGRAPHY;
              case b.MX1.COMPILATIONS:
                return b.Rhz.ARTIST_COMPILATIONS;
              default:
                return b.Rhz.ARTIST_ALBUMS;
            }
          }, [P]),
          Y = [];
        return (I &&
          B.albumsSubpage.isNeededToLoad &&
          (B.albumsSubpage.setVariant(P),
          Y.push(
            B.albumsSubpage.getData({
              artistId: I,
              page: 0,
              pageSize: h.IQ,
              sort: { sortBy: d.h.YEAR },
              preloadedAlbums: E,
            }),
          )),
        I &&
          B.isNeededToLoad &&
          Y.push(B.getData({ artistId: I, preloadedArtist: R })),
        Y.length && (0, o.use)(Promise.allSettled(Y)),
        null === (r = B.meta) || void 0 === r
          ? void 0
          : r.artist.isLegalRejected)
          ? y.isRejected
            ? (0, i.jsx)(p.D, {})
            : (0, i.jsx)(_.em, { disclaimer: y })
          : B.albumsSubpage.isRejected && !B.albumsSubpage.isNotFound
            ? (0, i.jsx)(p.D, {})
            : (0, i.jsx)(b.Lh6, {
                pageId: W,
                pageEntityId: I,
                children: (0, i.jsx)(v.I7, {
                  scrollElement: M,
                  outerTitle: z,
                  children: (0, i.jsxs)("div", {
                    className: j().root,
                    ...(0, c.BA)(c.Br.artist.ARTIST_ALBUMS_PAGE),
                    children: [
                      (0, i.jsx)(A.h4, {
                        variant: A.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: D.canBack,
                        children: (0, i.jsx)(m.Heading, {
                          variant: "h1",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: z,
                        }),
                      }),
                      (0, i.jsx)(A.Wv, {
                        className: (0, s.W)(j().scrollContainer, j().important),
                        listClassName: j().content,
                        itemClassName: j().item,
                        customComponents: G,
                        itemContentCallback: (e) => {
                          let t = B.albumsSubpage.items[e],
                            a = O(
                              { id: "loading-messages.entity-is-loading" },
                              {
                                entityName: O({ id: "entity-names.playlist" }),
                              },
                            );
                          return t
                            ? (0, i.jsx)(
                                g.rf,
                                { album: t, contentLinesCount: 4 },
                                t.id,
                              )
                            : (0, i.jsx)(A.hi, {
                                "aria-label": a,
                                linesCount: 4,
                              });
                        },
                        totalCount:
                          null !==
                            (x =
                              null === (k = B.albumsSubpage) || void 0 === k
                                ? void 0
                                : null === (S = k.pager) || void 0 === S
                                  ? void 0
                                  : S.total) && void 0 !== x
                            ? x
                            : 0,
                        onGetDataByPage: F,
                        pageSize: h.IQ,
                        totalRequests:
                          null !== (L = B.albumsSubpage.requests) &&
                          void 0 !== L
                            ? L
                            : 0,
                        handleRef: U,
                        context: { listAriaLabel: V },
                        isMobileLayout: w,
                        useWindowScroll: w,
                      }),
                    ],
                  }),
                }),
              });
      });
    },
    75106: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistClipsPage: function () {
          return L;
        },
      });
      var i = a(75441),
        s = a(32358),
        r = a(62569),
        l = a(98730),
        o = a(65067),
        n = a(9317),
        c = a(35846),
        d = a(93093),
        u = a(17392),
        m = a(30948),
        p = a(55051),
        g = a(61039),
        h = a(69947),
        v = a(14924),
        f = a(90378),
        _ = a(13534),
        b = a(97141),
        A = a(64353),
        S = a(68573);
      let k = (e) => {
        (0, o.useEffect)(() => {
          if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
          let t = (0, A.zg)(e.meta.artist);
          (0, S.y)(
            { artist: t },
            { fullUrl: null, locale: null, url: null, tld: "", host: "" },
          ).then((e) => {
            (0, _.gOT)(e);
          });
        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
      };
      var x = a(60798),
        C = a(13836),
        T = a(17623),
        N = a.n(T);
      let L = (0, r.Pi)((e) => {
        var t, a, r, A, S;
        let { artistId: T, preloadedArtist: L, preloadedClips: j } = e,
          {
            artist: I,
            disclaimer: P,
            settings: { isMobile: R },
          } = (0, _.oR4)(),
          { formatMessage: E } = (0, n.Z)(),
          { contentScrollRef: B, setContentScrollRef: y } = (0, _.$Y6)(),
          w = (0, _.k67)(),
          O = (0, v.yO)(v.$t.ARTIST_PAGE),
          M = (0, d.W)((e) => {
            I.clipsSubpage.getData({ artistId: T, page: e, pageSize: p.lR });
          });
        (0, C.N)(T),
          (0, x.m)(I, T),
          (0, o.useEffect)(
            () => () => {
              I.clipsSubpage.reset();
            },
            [I, I.clipsSubpage],
          ),
          (I.clipsSubpage.isNotFound || !O) && (0, l.notFound)(),
          (0, _.NOh)(I.clipsSubpage.isResolved),
          k(I);
        let U = (0, o.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(b.$_, { className: N().footer }),
            }),
            [],
          ),
          D = (0, o.useMemo)(
            () =>
              E(
                { id: "page.artist-clips-header" },
                { artistName: I.commonSubPage.artistName },
              ),
            [I.commonSubPage.artistName, E],
          ),
          F = [];
        return (I.clipsSubpage.isNeededToLoad &&
          F.push(
            I.clipsSubpage.getData({
              artistId: T,
              page: 0,
              pageSize: p.lR,
              preloadedClips: j,
            }),
          ),
        I.isNeededToLoad &&
          F.push(I.getData({ artistId: T, preloadedArtist: L })),
        F.length && (0, o.use)(Promise.allSettled(F)),
        null === (t = I.meta) || void 0 === t
          ? void 0
          : t.artist.isLegalRejected)
          ? P.isRejected
            ? (0, i.jsx)(m.D, {})
            : (0, i.jsx)(f.em, { disclaimer: P })
          : I.clipsSubpage.isRejected && !I.clipsSubpage.isNotFound
            ? (0, i.jsx)(m.D, {})
            : (0, i.jsx)(_.Lh6, {
                pageId: _.Rhz.ARTIST_CLIPS,
                pageEntityId: T,
                children: (0, i.jsx)(h.I7, {
                  scrollElement: B,
                  outerTitle: D,
                  children: (0, i.jsxs)("div", {
                    className: N().root,
                    ...(0, c.BA)(c.Br.artist.ARTIST_CLIPS_PAGE),
                    children: [
                      (0, i.jsx)(b.h4, {
                        variant: b.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: w.canBack,
                        children: (0, i.jsx)(u.Heading, {
                          variant: "h1",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: D,
                        }),
                      }),
                      (0, i.jsx)(b.Wv, {
                        className: (0, s.W)(N().scrollContainer, N().important),
                        listClassName: N().content,
                        itemClassName: N().item,
                        customComponents: U,
                        itemContentCallback: (e) => {
                          let t = I.clipsSubpage.items[e];
                          return t
                            ? (0, i.jsx)(g.xq, { clip: t }, t.clipId)
                            : (0, i.jsx)(g.Uh, { isActive: !0 });
                        },
                        totalCount:
                          null !==
                            (A =
                              null === (r = I.clipsSubpage) || void 0 === r
                                ? void 0
                                : null === (a = r.pager) || void 0 === a
                                  ? void 0
                                  : a.total) && void 0 !== A
                            ? A
                            : 0,
                        onGetDataByPage: M,
                        pageSize: p.lR,
                        totalRequests:
                          null !== (S = I.clipsSubpage.requests) && void 0 !== S
                            ? S
                            : 0,
                        handleRef: y,
                        context: {
                          listAriaLabel: E({
                            id: "entity-names.artist-clips-list",
                          }),
                        },
                        isMobileLayout: R,
                        useWindowScroll: R,
                      }),
                    ],
                  }),
                }),
              });
      });
    },
    8328: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistConcertsPage: function () {
          return I;
        },
      });
      var i = a(75441),
        s = a(62569),
        r = a(98730),
        l = a(65067),
        o = a(9317),
        n = a(15937),
        c = a(77282),
        d = a(35846),
        u = a(17294),
        m = a(17392),
        p = a(30948),
        g = a(69947),
        h = a(64353),
        v = a(60773),
        f = a(90378),
        _ = a(13534),
        b = a(97141),
        A = a(4875);
      let S = (e) => {
          let { artistId: t, viewUuid: a } = e,
            i = (0, _.z$f)(),
            { hash: s } = (0, _.RQn)(),
            r = (0, _.wLl)();
          return (0, l.useCallback)(() => {
            if (!i || !t) return;
            let e = (0, _.KOr)({
              params: { hash: s, artistId: t, viewUuid: a },
              logger: r,
              context: S.name,
            });
            e && (0, A.A7)(i.evgenInstance, e);
          }, [i, t, s, r, a]);
        },
        k = (e) => {
          let { artistId: t, viewUuid: a } = e,
            i = (0, _.z$f)(),
            { hash: s } = (0, _.RQn)(),
            r = (0, _.wLl)();
          return (0, l.useCallback)(() => {
            if (!i || !t) return;
            let e = (0, _.KOr)({
              params: { hash: s, artistId: t, viewUuid: a },
              logger: r,
              context: k.name,
            });
            e && (0, A.is)(i.evgenInstance, e);
          }, [i, t, s, r, a]);
        };
      var x = a(80704);
      let C = (e) => {
        (0, l.useEffect)(() => {
          if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
          let t = (0, h.zg)(e.meta.artist);
          (0, x.U)(
            { artist: t },
            { fullUrl: null, locale: null, url: null, tld: "", host: "" },
          ).then((e) => {
            (0, _.gOT)(e);
          });
        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
      };
      var T = a(60798),
        N = a(13836),
        L = a(7159),
        j = a.n(L);
      let I = (0, s.Pi)((e) => {
        var t, a, s;
        let { artistId: A, preloadedArtist: x, preloadedConcerts: L } = e,
          { artist: I, disclaimer: P } = (0, _.oR4)(),
          { formatMessage: R } = (0, o.Z)(),
          { contentScrollRef: E, setContentScrollRef: B } = (0, _.$Y6)(),
          y = (0, _.k67)(),
          w = (0, l.useRef)(String((0, c.Z)())),
          O = k({ artistId: A, viewUuid: w.current }),
          M = S({ artistId: A, viewUuid: w.current });
        (0, l.useEffect)(
          () => (
            O(),
            () => {
              M();
            }
          ),
          [M, O],
        );
        let U = (0, h.v2)({
          artist: null === (t = I.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, N.N)(A),
          (0, l.useEffect)(() => {
            var e;
            (null === (e = I.meta) || void 0 === e
              ? void 0
              : e.artist.isUnsafeLegal) && U();
          }, [
            null === (a = I.meta) || void 0 === a
              ? void 0
              : a.artist.isUnsafeLegal,
            U,
          ]),
          (0, T.m)(I, A),
          (0, l.useEffect)(
            () => () => {
              I.concertsSubpage.reset();
            },
            [I],
          ),
          (0, _.NOh)(I.concertsSubpage.isResolved),
          I.concertsSubpage.isNotFound && (0, r.notFound)();
        let D = (0, l.useMemo)(() => {
            var e;
            return I.concertsSubpage.isLoading
              ? (0, b.M4)(10)
              : null === (e = I.concertsSubpage.concerts) || void 0 === e
                ? void 0
                : e.map((e, t) =>
                    (0, i.jsx)(
                      _.nZ5,
                      {
                        objectId: String(e.id),
                        objectPos: t + 1,
                        children: (0, i.jsx)(v.kb, {
                          artistId: A,
                          concert: e,
                          viewUuid: w.current,
                          meta: (0, i.jsx)(v.bn, {}),
                        }),
                      },
                      e.id,
                    ),
                  );
          }, [I.concertsSubpage.concerts, I.concertsSubpage.isLoading, A, w]),
          F = [];
        return (I.concertsSubpage.isNeededToLoad &&
          F.push(
            I.concertsSubpage.getData({ artistId: A, preloadedConcerts: L }),
          ),
        I.isNeededToLoad &&
          F.push(I.getData({ artistId: A, preloadedArtist: x })),
        F.length && (0, l.use)(Promise.allSettled(F)),
        C(I),
        null === (s = I.meta) || void 0 === s
          ? void 0
          : s.artist.isLegalRejected)
          ? P.isRejected
            ? (0, i.jsx)(p.D, {})
            : (0, i.jsx)(f.em, { disclaimer: P })
          : (0, i.jsx)(_.Lh6, {
              pageId: _.Rhz.ARTIST_CONCERTS,
              pageEntityId: A,
              children: (0, i.jsx)(_.e4N, {
                children: (0, i.jsxs)(g.I7, {
                  scrollElement: E,
                  outerTitle: R(
                    { id: "page.artist-concerts-header" },
                    { artistName: I.commonSubPage.artistName },
                  ),
                  children: [
                    (0, i.jsx)(b.h4, {
                      variant: b.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: y.canBack,
                      children: (0, i.jsx)(m.Heading, {
                        id: "concerts-header",
                        variant: "h1",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, i.jsx)(n.Z, {
                          id: "page.artist-concerts-header",
                          values: { artistName: I.commonSubPage.artistName },
                        }),
                      }),
                    }),
                    (0, i.jsx)(u.t, {
                      ref: B,
                      className: j().root,
                      containerClassName: j().scrollableContainer,
                      children: (0, i.jsxs)("div", {
                        className: j().container,
                        ...(0, d.BA)(d.Br.artist.ARTIST_CONCERTS_PAGE),
                        children: [
                          (0, i.jsx)("div", {
                            className: j().content,
                            "aria-labelledby": "concerts-header",
                            tabIndex: 0,
                            children: D,
                          }),
                          (0, i.jsx)(b.$_, { className: j().footer }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
      });
    },
    8224: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistFamiliarPage: function () {
          return X;
        },
      });
      var i,
        s,
        r = a(75441),
        l = a(62569),
        o = a(98730),
        n = a(65067),
        c = a(35846),
        d = a(24226),
        u = a(30948),
        m = a(69947),
        p = a(64353),
        g = a(90378),
        h = a(13534),
        v = a(69617);
      let f = (e) => {
        (0, n.useEffect)(() => {
          if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
          let t = (0, p.zg)(e.meta.artist);
          (0, v.c)(
            { artist: t },
            { fullUrl: null, locale: null, url: null, tld: "", host: "" },
          ).then((e) => {
            (0, h.gOT)(e);
          });
        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
      };
      ((i = s || (s = {}))[(i.COLLECTION = 0)] = "COLLECTION"),
        (i[(i.VIBE = 1)] = "VIBE");
      var _ = a(60798),
        b = a(13836),
        A = a(31673),
        S = a.n(A),
        k = a(32358),
        x = a(9317),
        C = a(84638),
        T = a(43398),
        N = a(17294),
        L = a(28676),
        j = a(72783),
        I = a(1150),
        P = a(97141),
        R = a(15937),
        E = a(17392),
        B = a(93093);
      let y = (e) => {
        let t = (0, h.m5R)(),
          a = (0, o.useSearchParams)();
        return (0, B.W)((i) => {
          var r;
          let l = new URLSearchParams(a);
          switch (
            (null === (r = e.onTabChange) || void 0 === r || r.call(e, i), i)
          ) {
            case s.COLLECTION:
              l.set(h.wxR.TAB, h.g3g.COLLECTION),
                t((0, h.rDv)(window.location.pathname, l));
              break;
            case s.VIBE:
              l.set(h.wxR.TAB, h.g3g.VIBE),
                t((0, h.rDv)(window.location.pathname, l));
          }
        });
      };
      var w = a(88258),
        O = a.n(w);
      let M = () =>
          (0, r.jsxs)("div", {
            className: O().tabsShimmer,
            children: [
              (0, r.jsx)(L.Shimmer, { className: O().tabShimmer }),
              (0, r.jsx)(L.Shimmer, { className: O().tabShimmer }),
            ],
          }),
        U = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: i } = (0, h.oR4)(),
            { formatMessage: l } = (0, x.Z)(),
            o = (0, h.k67)(),
            { isScrolling: c } = (0, n.useContext)(P.pI),
            d = y(t);
          return (0, r.jsxs)("header", {
            className: O().root,
            "aria-hidden": c,
            children: [
              (0, r.jsxs)("div", {
                className: O().container,
                children: [
                  o.canBack &&
                    (0, r.jsx)(P.nP, {
                      withForwardControl: !1,
                      withBackwardControl: o.canBack,
                      shouldFocusOnMount: !c,
                    }),
                  (0, r.jsx)(E.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: O().title,
                    children: (0, r.jsx)(R.Z, { id: "page.familiar-you" }),
                  }),
                ],
              }),
              (0, r.jsxs)(P.no, {
                isShimmerVisible: i.familiarSubpage.isLoading,
                shimmer: (0, r.jsx)(M, {}),
                className: O().tabs,
                elementId: a,
                ...t,
                onTabChange: d,
                children: [
                  (0, r.jsx)(P.OK, {
                    className: O().tab,
                    value: s.COLLECTION,
                    title: l({ id: "page.familiar-collection" }),
                    "aria-hidden": c,
                    tabIndex: c ? -1 : 0,
                  }),
                  (0, r.jsx)(P.OK, {
                    className: O().tab,
                    value: s.VIBE,
                    title: l({ id: "page.familiar-vibe" }),
                    "aria-hidden": c,
                    tabIndex: c ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var D = a(17599),
        F = a.n(D);
      let H = (0, l.Pi)((e) => {
          var t;
          let { forwardRef: a, tabsState: i, tabElementId: l, artistId: o } = e,
            { artist: c } = (0, h.oR4)(),
            { formatMessage: u } = (0, x.Z)(),
            { from: m } = (0, h.MhG)(),
            p = (0, n.useCallback)(
              (e, t) => ({
                contextData: {
                  type: C.A.Various,
                  meta: { id: String(o) },
                  from: m,
                  overrideAutoflowSeeds: ["artist:".concat(o)],
                  overrideContextType: T.Z.Artist,
                },
                queueParams: { index: t },
                loadContextMeta: !1,
                entitiesData: c.familiarSubpage.collectionEntitiesData,
              }),
              [c.familiarSubpage.collectionEntitiesData, o, m],
            ),
            g = (0, n.useMemo)(() => {
              var e;
              return (0, r.jsx)(P.RS, {
                isShimmerVisible: c.familiarSubpage.isLoading,
                isShimmerActive: !0,
                variant: h.Lxt.PLAYLIST,
                shimmersCount: 10,
                className: (0, k.W)(F().block, F().tracksBlock),
                children:
                  null === (e = c.familiarSubpage.collectionTracks) ||
                  void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, r.jsx)(
                          I.O2,
                          { track: e, playContextParams: p(e, t) },
                          e.id,
                        ),
                      ),
              });
            }, [
              c.familiarSubpage.collectionTracks,
              c.familiarSubpage.isLoading,
              p,
            ]),
            v = (0, n.useMemo)(
              () =>
                c.familiarSubpage.shouldShowTitleBlocks
                  ? c.familiarSubpage.isLoading
                    ? (0, r.jsx)("div", {
                        className: (0, k.W)(F().block, F().blockHeader),
                        children: (0, r.jsx)(L.Shimmer, {
                          isActive: c.familiarSubpage.isLoading,
                          className: F().shimmerTitle,
                          radius: "l",
                        }),
                      })
                    : (0, r.jsx)(P.ti, {
                        className: (0, k.W)(F().block, F().blockHeader),
                        title: u({ id: "entity-names.tracks" }),
                      })
                  : void 0,
              [
                c.familiarSubpage.isLoading,
                c.familiarSubpage.shouldShowTitleBlocks,
                u,
              ],
            ),
            f = (0, n.useMemo)(() => {
              if (c.familiarSubpage.shouldShowTitleBlocks)
                return u({ id: "entity-names.albums" });
            }, [c.familiarSubpage.shouldShowTitleBlocks, u]);
          return (0, r.jsxs)(N.t, {
            className: F().root,
            containerClassName: (0, k.W)(F().scrollContainer, F().important),
            ref: a,
            children: [
              (0, r.jsx)(U, { tabsState: i, tabElementId: l }),
              (0, r.jsxs)(d.TabPanel, {
                value: i.value,
                name: s.COLLECTION,
                elementId: l,
                className: F().content,
                children: [
                  (0, r.jsxs)("section", { children: [v, g] }),
                  (0, r.jsx)(P.HY, {
                    isShimmerVisible: c.familiarSubpage.isLoading,
                    isShimmerActive: !0,
                    headerClassName: F().blockHeader,
                    containerClassName: F().block,
                    title: f,
                    showHeaderShimmer: c.familiarSubpage.shouldShowTitleBlocks,
                    children:
                      null === (t = c.familiarSubpage.collectionAlbums) ||
                      void 0 === t
                        ? void 0
                        : t.map((e) =>
                            (0, r.jsx)(
                              j.rf,
                              { album: e, contentLinesCount: 3 },
                              e.id,
                            ),
                          ),
                  }),
                ],
              }),
              (0, r.jsx)(P.$_, { className: F().footer }),
            ],
          });
        }),
        G = (0, l.Pi)((e) => {
          let { forwardRef: t, tabsState: a, tabElementId: i, artistId: l } = e,
            { artist: o } = (0, h.oR4)(),
            { from: c } = (0, h.MhG)(),
            u = (0, n.useCallback)(
              (e, t) => ({
                contextData: {
                  type: C.A.Various,
                  meta: { id: String(l) },
                  from: c,
                  overrideAutoflowSeeds: ["artist:".concat(l)],
                  overrideContextType: T.Z.Artist,
                },
                queueParams: { index: t },
                loadContextMeta: !1,
                entitiesData: o.familiarSubpage.vibeEntitiesData,
              }),
              [o.familiarSubpage.vibeEntitiesData, l, c],
            ),
            m = (0, n.useMemo)(() => {
              var e;
              return (0, r.jsx)(P.RS, {
                isShimmerVisible: o.familiarSubpage.isLoading,
                isShimmerActive: !0,
                variant: h.Lxt.PLAYLIST,
                shimmersCount: 10,
                className: (0, k.W)(F().block, F().tracksBlock),
                children:
                  null === (e = o.familiarSubpage.vibeTracks) || void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, r.jsx)(
                          I.O2,
                          { track: e, playContextParams: u(e, t) },
                          e.id,
                        ),
                      ),
              });
            }, [o.familiarSubpage.isLoading, o.familiarSubpage.vibeTracks, u]);
          return (0, r.jsxs)(N.t, {
            className: F().root,
            containerClassName: (0, k.W)(F().scrollContainer, F().important),
            ref: t,
            children: [
              (0, r.jsx)(U, { tabsState: a, tabElementId: i }),
              (0, r.jsx)(d.TabPanel, {
                value: a.value,
                name: s.VIBE,
                elementId: i,
                className: F().content,
                children: m,
              }),
              (0, r.jsx)(P.$_, { className: F().footer }),
            ],
          });
        });
      var z = a(69756),
        V = a(84209),
        W = a.n(V);
      let Y = (e) => {
          let { tabsState: t, tabElementId: a } = e,
            i = (0, n.useMemo)(() => {
              switch (t.value) {
                case s.COLLECTION:
                  return (0, r.jsx)(R.Z, {
                    id: "error-messages.empty-artist-familiar-collection-title",
                  });
                case s.VIBE:
                  return (0, r.jsx)(R.Z, {
                    id: "error-messages.empty-artist-familiar-vibe-title",
                  });
              }
            }, [t.value]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(U, { tabsState: t, tabElementId: a }),
              (0, r.jsxs)("div", {
                className: W().root,
                children: [
                  (0, r.jsx)(z.Icon, {
                    className: W().icon,
                    variant: "attention",
                    size: "xxxl",
                  }),
                  (0, r.jsx)(E.Heading, {
                    className: W().title,
                    variant: "h3",
                    size: "xs",
                    children: i,
                  }),
                ],
              }),
            ],
          });
        },
        Z = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: i } = (0, h.oR4)(),
            { formatMessage: l } = (0, x.Z)(),
            { isScrolling: o } = (0, n.useContext)(P.pI),
            c = (0, h.k67)(),
            d = y(t);
          return (0, r.jsx)(P.h4, {
            variant: P.bm.COMPOSITE,
            staticClassName: (0, k.W)(O().staticHeader, O().important),
            "aria-hidden": !o,
            stickyClassName: (0, k.W)(O().stickyHeader, O().important),
            stickyChild: (0, r.jsxs)("div", {
              className: O().container,
              children: [
                c.canBack &&
                  (0, r.jsx)(P.nP, {
                    withForwardControl: !1,
                    withBackwardControl: c.canBack,
                    shouldFocusOnMount: !1,
                    buttonSize: "xs",
                  }),
                (0, r.jsxs)(P.no, {
                  isShimmerVisible: i.familiarSubpage.isLoading,
                  shimmer: (0, r.jsx)(M, {}),
                  className: O().tabs,
                  elementId: a,
                  onTabChange: d,
                  ...t,
                  children: [
                    (0, r.jsx)(P.OK, {
                      className: O().tab,
                      value: s.COLLECTION,
                      title: l({ id: "page.familiar-collection" }),
                      "aria-hidden": !o,
                      tabIndex: o ? 0 : -1,
                    }),
                    (0, r.jsx)(P.OK, {
                      className: O().tab,
                      value: s.VIBE,
                      title: l({ id: "page.familiar-vibe" }),
                      "aria-hidden": !o,
                      tabIndex: o ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        X = (0, l.Pi)((e) => {
          var t, a, i;
          let { artistId: l, preloadedArtist: v, preloadedFamiliar: A } = e,
            k = (0, o.useSearchParams)(),
            { artist: x, disclaimer: C } = (0, h.oR4)(),
            { contentScrollRef: T, setContentScrollRef: N } = (0, h.$Y6)(),
            L = (0, n.useId)(),
            j = (0, n.useMemo)(() => {
              switch (k.get(h.wxR.TAB)) {
                case h.g3g.COLLECTION:
                  break;
                case h.g3g.VIBE:
                  return s.VIBE;
              }
              return s.COLLECTION;
            }, [k]),
            I = (0, d.useTabsState)(j),
            P = (0, p.v2)({
              artist: null === (t = x.meta) || void 0 === t ? void 0 : t.artist,
              shouldHistoryBack: !0,
            });
          (0, b.N)(l),
            (0, n.useEffect)(() => {
              var e;
              (null === (e = x.meta) || void 0 === e
                ? void 0
                : e.artist.isUnsafeLegal) && P();
            }, [
              null === (a = x.meta) || void 0 === a
                ? void 0
                : a.artist.isUnsafeLegal,
              P,
            ]),
            (0, _.m)(x, l),
            (0, n.useEffect)(
              () => () => {
                x.familiarSubpage.reset();
              },
              [x],
            ),
            (0, h.NOh)(x.familiarSubpage.isResolved),
            x.familiarSubpage.isNotFound && (0, o.notFound)();
          let R = (0, n.useMemo)(() => {
              switch (I.value) {
                case s.COLLECTION:
                  if (
                    x.familiarSubpage.isResolved &&
                    !x.familiarSubpage.hasCollectionEntities
                  )
                    return (0, r.jsx)(Y, { tabsState: I, tabElementId: L });
                  return (0, r.jsx)(H, {
                    tabsState: I,
                    forwardRef: N,
                    tabElementId: L,
                    artistId: l,
                  });
                case s.VIBE:
                  if (
                    x.familiarSubpage.isResolved &&
                    !x.familiarSubpage.hasVibeTracks
                  )
                    return (0, r.jsx)(Y, { tabsState: I, tabElementId: L });
                  return (0, r.jsx)(G, {
                    tabsState: I,
                    forwardRef: N,
                    tabElementId: L,
                    artistId: l,
                  });
              }
            }, [
              x.familiarSubpage.hasCollectionEntities,
              x.familiarSubpage.hasVibeTracks,
              x.familiarSubpage.isResolved,
              l,
              N,
              L,
              I,
            ]),
            E = [];
          return (x.familiarSubpage.isNeededToLoad &&
            E.push(
              x.familiarSubpage.getData({ preloadedFamiliar: A, artistId: l }),
            ),
          x.isNeededToLoad &&
            E.push(x.getData({ artistId: l, preloadedArtist: v })),
          E.length && (0, n.use)(Promise.allSettled(E)),
          f(x),
          x.familiarSubpage.isRejected && !x.familiarSubpage.isNotFound)
            ? (0, r.jsx)(u.D, {})
            : (
                  null === (i = x.meta) || void 0 === i
                    ? void 0
                    : i.artist.isLegalRejected
                )
              ? C.isRejected
                ? (0, r.jsx)(u.D, {})
                : (0, r.jsx)(g.em, { disclaimer: C })
              : (0, r.jsx)(h.Lh6, {
                  pageId: h.Rhz.FAMILIAR_YOU,
                  pageEntityId: l,
                  children: (0, r.jsx)(m.I7, {
                    scrollElement: T,
                    headerThreshold: 148,
                    children: (0, r.jsxs)("div", {
                      className: S().root,
                      ...(0, c.BA)(c.Br.artist.ARTIST_FAMILIAR_PAGE),
                      children: [
                        (0, r.jsx)(Z, { tabElementId: L, tabsState: I }),
                        (0, r.jsx)(h.Ja5, {
                          blockIdForFrom: h.aUg.DEFAULT,
                          children: R,
                        }),
                      ],
                    }),
                  }),
                });
        });
    },
    2257: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistNotFoundPage: function () {
          return n;
        },
      });
      var i = a(75441),
        s = a(62569),
        r = a(65067),
        l = a(35551),
        o = a(13534);
      let n = (0, s.Pi)(() => {
        let { artist: e } = (0, o.oR4)();
        return (
          (0, r.useEffect)(() => {
            e.reset();
          }, []),
          (0, i.jsx)(l.T, {})
        );
      });
    },
    85590: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistPage: function () {
          return eg;
        },
      });
      var i,
        s,
        r = a(75441),
        l = a(62569),
        o = a(98730),
        n = a(65067),
        c = a(9317),
        d = a(35846),
        u = a(36746),
        m = a(93093),
        p = a(63524),
        g = a(14218),
        h = a(17294),
        v = a(5362),
        f = a(30948),
        _ = a(69947),
        b = a(64353),
        A = a(90378),
        S = a(13534),
        k = a(97141),
        x = a(15058);
      let C = (e) => {
          (0, n.useEffect)(() => {
            if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
            let t = (0, b.zg)(e.meta.artist);
            (0, x.D)(
              { artist: t },
              { fullUrl: null, locale: null, url: null, tld: "", host: "" },
            ).then((e) => {
              (0, S.gOT)(e);
            });
          }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
        },
        T = (e) => {
          let { blockId: t, scrollRef: a, headerRef: i } = e,
            s = document.getElementById(t);
          if (s && a) {
            var r;
            let e = s.getBoundingClientRect().top,
              t = (
                null === (r = i.current) || void 0 === r
                  ? void 0
                  : r.offsetHeight
              )
                ? e - i.current.offsetHeight
                : e;
            a.scrollTo({ top: t - 10, behavior: "smooth" });
          }
        };
      var N = a(60798),
        L = a(13836),
        j = a(32358),
        I = a(84638),
        P = a(17979),
        R = a(1150),
        E = a(14166),
        B = a.n(E);
      let y = (0, l.Pi)((e) => {
        let { artistId: t } = e,
          { contentScrollRef: a, setContentScrollRef: i } = (0, S.$Y6)(),
          { formatMessage: s } = (0, c.Z)(),
          {
            artist: { offlineArtist: l },
          } = (0, S.oR4)(),
          { trackIds: u, downloadedTracks: g } = l,
          { from: h } = (0, S.MhG)({
            pageId: S.Rhz.ARTIST,
            blockId: S.aUg.TRACK_LIST,
          }),
          b = (0, S.h1d)(),
          A = (0, S.G9G)(),
          x = (0, S.iXn)(),
          { forceUpdateRefCallback: C, offsetY: T } = (0, p.e)(a),
          [N, L] = (0, _.at)(null, T),
          E = (0, m.W)(() => {
            b && u.ids && g.getData(b, u.ids);
          });
        (0, P.D)(E),
          (0, n.useEffect)(() => {
            l.meta &&
              g.isResolved &&
              g.items &&
              l.setTracksCount(g.items.length);
          }, [l, l.meta, g.isResolved, g.items]),
          (0, n.useEffect)(() => {
            g.isNeededToLoad && u.isResolved && E();
          }, [g.isNeededToLoad, u.isResolved, E]),
          (0, n.useEffect)(
            () => () => {
              l.reset();
            },
            [l, t],
          ),
          (0, S.NOh)(l.isResolved);
        let y = (0, n.useMemo)(
            () =>
              l.isLoading || !l.meta
                ? (0, r.jsx)(v.KC, {
                    className: B().header,
                    coverRadius: "round",
                  })
                : (0, r.jsx)(v.f3, {
                    className: B().header,
                    artistMeta: l.meta,
                    entitiesData: g.entitiesData,
                    ref: C,
                  }),
            [l.isLoading, l.meta, g.entitiesData, C],
          ),
          w = (0, n.useMemo)(
            () => ({
              Header: () => y,
              Footer: () => (0, r.jsx)(k.$_, { className: B().footer }),
            }),
            [y],
          ),
          O = g.items ? g.items.length : 10;
        if (l.isNeededToLoad && A) {
          let e = [l.getArtist(t, A), u.getIds(t, A)];
          (0, n.use)(Promise.allSettled(e));
        }
        return (l.isNotFound && (0, o.notFound)(),
        l.isRejected || u.isRejected || g.isRejected)
          ? (0, r.jsx)(f.D, {})
          : (0, r.jsx)(S.Lh6, {
              pageId: S.Rhz.ARTIST,
              pageEntityId: t,
              children: (0, r.jsxs)(_.I7, {
                scrollElement: a,
                children: [
                  (0, r.jsx)(k.h4, { style: L }),
                  (0, r.jsx)("div", {
                    className: B().averageColorBackground,
                    style: N,
                  }),
                  (0, r.jsx)(k.Wv, {
                    context: {
                      listAriaLabel: s({ id: "offline.downloaded-track-list" }),
                    },
                    className: (0, j.W)(B().root, B().important),
                    listClassName: B().content,
                    customComponents: w,
                    totalCount: O,
                    itemContentCallback: (e) => {
                      var t;
                      let a =
                        null === (t = g.items) || void 0 === t ? void 0 : t[e];
                      return a
                        ? (0, r.jsx)(
                            R.O2,
                            {
                              track: a,
                              playContextParams: x(a.id, {
                                contextData: {
                                  type: I.A.Various,
                                  meta: { id: S.Rhz.ARTIST },
                                  from: h,
                                },
                                entitiesData: g.entitiesData,
                                queueParams: { index: e, entityId: a.id },
                                loadContextMeta: !1,
                              }),
                            },
                            a.id,
                          )
                        : (0, r.jsx)(k.DX, {
                            isActive: !0,
                            className: B().trackShimmer,
                            variant: S.Lxt.PLAYLIST,
                          });
                    },
                    debounceDurationInMs: 300,
                    initialItemCount: O,
                    handleRef: i,
                    shouldTriggerRangeChangedOnTotalCountChange: !0,
                    testId: d.Br.artist.OFFLINE_ARTIST_DOWNLOADED_TRACKS,
                  }),
                ],
              }),
            });
      });
      var w = a(53583),
        O = a.n(w),
        M = a(28676),
        U = a(72783),
        D = a(14924);
      ((i = s || (s = {})).UPCOMING_RELEASE = "upcoming_release"),
        (i.TRACKS = "tracks"),
        (i.FAMILIAR = "familiar"),
        (i.CONCERTS = "concerts"),
        (i.ARTIST_PICK = "artist_pick");
      var F = a(75723),
        H = a.n(F);
      let G = (e) => {
          let {
              withReleaseBlock: t,
              children: a,
              isLoading: i,
              viewAllActionLink: s,
              ...l
            } = e,
            { formatMessage: o } = (0, c.Z)();
          return (0, r.jsxs)("div", {
            className: (0, j.W)(H().popularTracksBlock, {
              [H().popularTracksBlock_withReleaseBlock]: t,
            }),
            ...l,
            ...(0, d.BA)(d.Br.artist.POPULAR_TRACKS),
            children: [
              (0, r.jsx)(k.ti, {
                className: H().popularTracksBlockHeader,
                title: o({ id: "entity-names.popular-tracks" }),
                viewAllActionLink: s,
                headingVariant: "h2",
              }),
              (0, r.jsx)(k.RS, {
                isShimmerVisible: i,
                isShimmerActive: !0,
                className: H().popularTracksBlockList,
                variant: S.Lxt.PLAYLIST,
                children: a,
              }),
            ],
          });
        },
        z = (0, l.Pi)((e) => {
          var t;
          let { artistId: a, artist: i } = e,
            l = (0, S.iXn)(),
            { from: o, utmLink: n } = (0, S.MhG)({
              pageId: S.Rhz.ARTIST,
              blockId: S.aUg.ARTIST,
              pageEntityId: a,
              contextType: I.A.Artist,
              contextId: a,
            }),
            c = (0, m.W)((e, t) =>
              l(e, {
                contextData: {
                  type: I.A.Artist,
                  meta: { id: Number(a) },
                  from: o,
                  utmLink: n,
                },
                queueParams: { index: t, entityId: e },
                loadContextMeta: !0,
              }),
            );
          return (0, r.jsx)(G, {
            withReleaseBlock: i.hasReleaseBlock,
            isLoading: i.isLoading,
            viewAllActionLink: "/artist/".concat(a, "/tracks"),
            id: s.TRACKS,
            children:
              null === (t = i.popularTracks) || void 0 === t
                ? void 0
                : t.map((e, t) =>
                    (0, r.jsx)(
                      R.O2,
                      { track: e, playContextParams: c(e.id, t) },
                      e.id,
                    ),
                  ),
          });
        });
      var V = a(4875),
        W = a(61039);
      let Y = (0, l.Pi)((e) => {
          let { artist: t } = e,
            { formatMessage: a } = (0, c.Z)();
          return (0, r.jsx)(S.Ja5, {
            mainObjectType: V.OB.Artist,
            mainObjectId: String(t.id),
            blockId: S.BEo.CLIPS_CAROUSEL,
            blockType: S.BEo.CLIPS_CAROUSEL,
            blockPosX: 1,
            blockPosY: 7,
            objectsCount: t.clips.length,
            children: (0, r.jsx)(W.Op, {
              containerClassName: H().carouselBlock,
              headerClassName: (0, j.W)(
                H().carouselBlockHeader,
                H().carouselBlock,
              ),
              isShimmerVisible: t.isLoading,
              isShimmerActive: !0,
              title: a({ id: "entity-names.clips" }),
              artistIdWithoutLink: String(t.id),
              viewAllActionLink: "/artist/".concat(t.id, "/videos"),
              clips: t.clips,
              headingVariant: "h2",
            }),
          });
        }),
        Z = (0, l.Pi)((e) => {
          let { artist: t } = e,
            { formatMessage: a } = (0, c.Z)();
          return (0, r.jsx)(S.Ja5, {
            blockId: S.BEo.COMPILATIONS_CAROUSEL,
            blockType: "albums_carousel",
            blockPosX: 1,
            blockPosY: 5,
            blockIdForFrom: S.BEo.COMPILATIONS_CAROUSEL,
            objectsCount: t.compilations.length,
            children: (0, r.jsx)(U.wk, {
              isShimmerVisible: t.isLoading,
              isShimmerActive: !0,
              headerClassName: (0, j.W)(
                H().carouselBlockHeader,
                H().carouselBlock,
              ),
              containerClassName: H().carouselBlock,
              albums: t.compilations,
              title: a({ id: "entity-names.compilations" }),
              viewAllActionLink: "/artist/".concat(t.id, "/compilations"),
              headingVariant: "h2",
              ...(0, d.BA)(d.Br.artist.COMPILATIONS),
            }),
          });
        });
      var X = a(60773);
      let K = (0, l.Pi)((e) => {
          var t, a, i;
          let { artistId: l, artist: o } = e,
            { formatMessage: n } = (0, c.Z)();
          return (0, r.jsx)(S.nZ5, {
            objectType: V.OB.Shortcut,
            objectId: "/artist/".concat(l, "/concerts"),
            objectPosX: 0,
            objectPosY: 0,
            objectsCount:
              null !==
                (i =
                  null === (t = o.concerts) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== i
                ? i
                : 0,
            children: (0, r.jsx)(X.m, {
              id: s.CONCERTS,
              artistId: l,
              title: n({ id: "entity-names.concerts" }),
              isLoading: o.isLoading,
              headerClassName: (0, j.W)(
                H().carouselBlockHeader,
                H().carouselBlock,
              ),
              containerClassName: H().concertsBlock,
              viewAllActionLink: o.concertsLink,
              headingVariant: "h2",
              children:
                null === (a = o.concerts) || void 0 === a
                  ? void 0
                  : a.map((e, t) => {
                      var a, i;
                      return (0, r.jsx)(
                        S.nZ5,
                        {
                          objectType: V.OB.Concert,
                          objectId: String(e.id),
                          objectPosX: Math.floor(t / 2) + 1,
                          objectPosY: (t % 2) + 1,
                          objectsCount:
                            null !==
                              (i =
                                null === (a = o.concerts) || void 0 === a
                                  ? void 0
                                  : a.length) && void 0 !== i
                              ? i
                              : 0,
                          children: (0, r.jsx)(X.kb, {
                            artistId: l,
                            concert: e,
                            meta: (0, r.jsx)(X.bn, {}),
                          }),
                        },
                        e.id,
                      );
                    }),
            }),
          });
        }),
        Q = (0, l.Pi)((e) => {
          let { artist: t } = e,
            { formatMessage: a } = (0, c.Z)();
          return (0, r.jsx)(S.Ja5, {
            blockId: S.BEo.DISCOGRAPHY_CAROUSEL,
            blockType: S.BEo.ALBUMS_CAROUSEL,
            blockPosX: 1,
            blockPosY: 2,
            blockIdForFrom: S.BEo.DISCOGRAPHY_CAROUSEL,
            objectsCount: t.discography.length,
            children: (0, r.jsx)(U.wk, {
              isShimmerVisible: t.isLoading,
              isShimmerActive: !0,
              headerClassName: (0, j.W)(
                H().carouselBlockHeader,
                H().carouselBlock,
              ),
              containerClassName: H().carouselBlock,
              albums: t.discography,
              title: a({ id: "entity-names.studio-albums" }),
              viewAllActionLink: "/artist/".concat(t.id, "/discography"),
              headingVariant: "h2",
              ...(0, d.BA)(d.Br.artist.STUDIO_ALBUMS),
            }),
          });
        });
      var q = a(7797);
      let $ = (0, l.Pi)((e) => {
          let { artist: t } = e,
            { formatMessage: a } = (0, c.Z)();
          return (0, r.jsx)(q.VD, {
            isShimmerVisible: t.isLoading,
            isShimmerActive: !0,
            containerClassName: H().carouselBlock,
            headerClassName: (0, j.W)(
              H().carouselBlockHeader,
              H().carouselBlock,
            ),
            title: a({ id: "entity-names.artist-playlist" }),
            playlists: t.playlists,
            headingVariant: "h2",
            ...(0, d.BA)(d.Br.artist.ARTIST_PLAYLISTS),
          });
        }),
        J = (0, l.Pi)((e) => {
          let { artist: t } = e,
            { formatMessage: a } = (0, c.Z)();
          return (0, r.jsx)(S.Ja5, {
            blockId: S.BEo.ALBUMS_CAROUSEL,
            blockType: S.BEo.ALBUMS_CAROUSEL,
            blockPosX: 1,
            blockPosY: 3,
            blockIdForFrom: S.BEo.ALBUMS_CAROUSEL,
            objectsCount: t.albums.length,
            children: (0, r.jsx)(U.wk, {
              isShimmerVisible: t.isLoading,
              isShimmerActive: !0,
              headerClassName: (0, j.W)(
                H().carouselBlockHeader,
                H().carouselBlock,
              ),
              containerClassName: H().carouselBlock,
              albums: t.albums,
              title: a({ id: "entity-names.popular-albums" }),
              viewAllActionLink: "/artist/".concat(t.id, "/albums"),
              headingVariant: "h2",
              ...(0, d.BA)(d.Br.artist.POPULAR_ALBUMS),
            }),
          });
        });
      var ee = a(55051);
      let et = (0, l.Pi)((e) => {
        let { artist: t } = e,
          { formatMessage: a } = (0, c.Z)();
        return (0, r.jsx)(k.HY, {
          isShimmerVisible: t.isLoading,
          isShimmerActive: !0,
          headerClassName: (0, j.W)(H().carouselBlockHeader, H().carouselBlock),
          containerClassName: H().carouselBlock,
          title: a({ id: "entity-names.similar-artists" }),
          viewAllActionLink: "/artist/".concat(t.id, "/similar"),
          headingVariant: "h2",
          ...(0, d.BA)(d.Br.artist.SIMILAR_ARTISTS),
          children: t.similarArtists.map((e) =>
            (0, r.jsx)(ee.IT, { artist: e, contentLinesCount: 3 }, e.id),
          ),
        });
      });
      var ea = a(15937),
        ei = a(59091),
        es = a(67126),
        er = a(17392),
        el = a(97574),
        eo = a.n(el);
      let en = (e) => {
          let {
              artistPick: t,
              coverContainerClassName: a,
              artistCoverUrl: i,
              artistName: s,
              isArtistAvailable: l,
              ...o
            } = e,
            { artists: n, playlist: c } = t;
          return (0, r.jsx)(k.ti, {
            coverUrl: c.coverUri,
            viewAllActionLink: c.url,
            title: c.title,
            controls: !1,
            coverContainerClassName: a,
            titleLineClamp: 1,
            withDescriptionWidthLimit: !1,
            ...o,
            subTitle: (0, r.jsxs)("div", {
              className: eo().subTitle,
              children: [
                (0, r.jsx)(es.y, {
                  children: (0, r.jsx)(er.Heading, {
                    variant: "h4",
                    children: (0, r.jsx)(ea.Z, {
                      id: "page.artist-pick-aria-label",
                      values: { artistName: s },
                    }),
                  }),
                }),
                (0, r.jsx)(er.Caption, {
                  variant: "span",
                  size: "l",
                  weight: "medium",
                  className: eo().text,
                  "aria-hidden": !0,
                  children: (0, r.jsx)(ea.Z, {
                    id: "page.artist-pick-subtitle",
                  }),
                }),
                (0, r.jsx)(ei.Paper, {
                  radius: "round",
                  className: eo().coverContainer,
                  children: (0, r.jsx)(k.BE, {
                    fit: "cover",
                    src: i,
                    size: 50,
                    className: eo().cover,
                    withAvatarReplace: !0,
                    isAvailable: l,
                    "aria-hidden": !0,
                  }),
                }),
                s &&
                  (0, r.jsx)(er.Caption, {
                    variant: "span",
                    size: "l",
                    weight: "medium",
                    className: eo().text,
                    lineClamp: 1,
                    "aria-hidden": !0,
                    children: s,
                  }),
              ],
            }),
            description: (0, r.jsx)(b.jO, {
              artists: n,
              linkClassName: eo().artistLink,
              spoilerClassName: eo().artistsSpoiler,
              lineClamp: 1,
              visibleArtistsCount: 3,
              spoilerComponent: (0, r.jsx)(ea.Z, {
                id: "entity-names.and-more-artists",
                values: { artists: "" },
              }),
            }),
          });
        },
        ec = (0, l.Pi)((e) => {
          var t, a, i;
          let { artist: l, artistId: o } = e,
            { experiments: d, user: u } = (0, S.oR4)(),
            { formatMessage: m } = (0, c.Z)(),
            p = d.checkExperiment(S.peG.WebNextArtistPick, "on"),
            g = (0, D.yO)(D.$t.ARTIST_PAGE),
            h = l.hasClips && g,
            v = u.isAuthorized && l.familiarInfo.hasFamiliarInfo,
            f = (0, n.useMemo)(() => {
              let e = [];
              return (
                l.familiarInfo.tracksCount &&
                  e.push(
                    m(
                      { id: "entity-names.tracks-count" },
                      { value: l.familiarInfo.tracksCount },
                    ),
                  ),
                l.familiarInfo.collectionAlbumCount &&
                  e.push(
                    m(
                      { id: "entity-names.albums-count" },
                      { value: l.familiarInfo.collectionAlbumCount },
                    ),
                  ),
                e.join(" • ")
              );
            }, [
              l.familiarInfo.collectionAlbumCount,
              l.familiarInfo.tracksCount,
              m,
            ]),
            _ = (0, n.useMemo)(
              () =>
                l.isLoading
                  ? (0, r.jsxs)("div", {
                      className: H().releaseBlock,
                      children: [
                        (0, r.jsx)(M.Shimmer, {
                          radius: "l",
                          className: H().releaseBlockHeaderShimmer,
                        }),
                        (0, r.jsx)(k.hi, {
                          className: (0, j.W)(
                            H().releaseBlockCard,
                            H().important,
                          ),
                        }),
                      ],
                    })
                  : l.upcomingAlbum
                    ? (0, r.jsxs)("div", {
                        className: H().releaseBlock,
                        id: s.UPCOMING_RELEASE,
                        children: [
                          (0, r.jsx)(k.ti, {
                            className: H().releaseBlockHeader,
                            title: m({ id: "entity-names.upcoming-album" }),
                            headingVariant: "h2",
                          }),
                          (0, r.jsx)(U.vK, {
                            className: (0, j.W)(
                              H().releaseBlockCard,
                              H().important,
                            ),
                            upcomingAlbum: l.upcomingAlbum,
                          }),
                        ],
                      })
                    : l.lastRelease
                      ? (0, r.jsxs)("div", {
                          className: H().releaseBlock,
                          children: [
                            (0, r.jsx)(k.ti, {
                              className: H().releaseBlockHeader,
                              title: m({ id: "entity-names.recently-release" }),
                              headingVariant: "h2",
                            }),
                            (0, r.jsx)(U.rf, {
                              className: (0, j.W)(
                                H().releaseBlockCard,
                                H().important,
                              ),
                              album: l.lastRelease,
                            }),
                          ],
                        })
                      : void 0,
              [l.isLoading, l.lastRelease, l.upcomingAlbum, m],
            ),
            b = (0, n.useMemo)(() => {
              if (l.isLoading)
                return (0, r.jsx)("div", {
                  className: (0, j.W)(
                    H().carouselBlockHeader,
                    H().carouselBlock,
                    H().panel,
                  ),
                  children: (0, r.jsx)(k.XM, {
                    coverRadius: "s",
                    isActive: !0,
                    withDescription: !0,
                  }),
                });
              if ((p && l.artistPick) || v) {
                var e, t, a;
                return (0, r.jsxs)("div", {
                  className: (0, j.W)(
                    H().carouselBlockHeader,
                    H().carouselBlock,
                    H().panel,
                  ),
                  children: [
                    p &&
                      l.artistPick &&
                      (0, r.jsx)(en, {
                        id: s.ARTIST_PICK,
                        artistPick: l.artistPick,
                        isArtistAvailable: !!(null === (e = l.meta) ||
                        void 0 === e
                          ? void 0
                          : e.artist.isAvailable),
                        artistCoverUrl:
                          null === (t = l.meta) || void 0 === t
                            ? void 0
                            : t.artist.coverUri,
                        coverContainerClassName: (0, j.W)(
                          H().blockCoverContainer,
                          H().important,
                        ),
                        artistName:
                          null === (a = l.meta) || void 0 === a
                            ? void 0
                            : a.artist.name,
                        className: H().panelItem,
                      }),
                    v &&
                      (0, r.jsx)(k.ti, {
                        id: s.FAMILIAR,
                        coverUrl:
                          "avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%",
                        viewAllActionLink: l.familiarInfo.href(o),
                        controls: !1,
                        title: m({ id: "page.familiar-you" }),
                        description: f,
                        coverContainerClassName: (0, j.W)(
                          H().blockCoverContainer,
                          H().important,
                        ),
                        titleLineClamp: 1,
                        className: H().panelItem,
                        headingVariant: "h2",
                        withDescription: !0,
                      }),
                  ],
                });
              }
            }, [
              l.artistPick,
              l.familiarInfo,
              l.isLoading,
              null === (t = l.meta) || void 0 === t
                ? void 0
                : t.artist.coverUri,
              null === (a = l.meta) || void 0 === a
                ? void 0
                : a.artist.isAvailable,
              null === (i = l.meta) || void 0 === i ? void 0 : i.artist.name,
              o,
              f,
              m,
              p,
              v,
            ]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                className: H().recentsContainer,
                children: (0, r.jsxs)("div", {
                  className: H().recents,
                  children: [
                    l.hasPopularTracks &&
                      (0, r.jsx)(z, { artist: l, artistId: o }),
                    _,
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: H().carouselBlocks,
                children: [
                  b,
                  l.hasDiscography && (0, r.jsx)(Q, { artist: l }),
                  l.hasAlbums && (0, r.jsx)(J, { artist: l }),
                  o &&
                    l.hasConcerts &&
                    (0, r.jsx)(K, { artistId: o, artist: l }),
                  l.hasPlaylists && (0, r.jsx)($, { artist: l }),
                  l.hasCompilations && (0, r.jsx)(Z, { artist: l }),
                  l.hasSimilarArtists && (0, r.jsx)(et, { artist: l }),
                  h && (0, r.jsx)(Y, { artist: l }),
                ],
              }),
            ],
          });
        });
      var ed = a(30495),
        eu = a(49986),
        em = a.n(eu);
      let ep = (0, l.Pi)((e) => {
          let { artist: t } = e;
          return (0, r.jsx)(ed.Od, {
            landing: t.landing,
            errorComponent: (0, r.jsx)(f.D, {
              className: em().error,
              withBackwardControl: !1,
            }),
            containerClassName: em().root,
          });
        }),
        eg = (0, l.Pi)((e) => {
          var t, a, i, s, l, x;
          let { artistId: j, preloadedArtist: I } = e,
            { notify: P } = (0, S.d$W)(),
            {
              artist: R,
              experiments: E,
              disclaimer: B,
              user: w,
              slam: M,
              modals: { imageSliderModal: U },
            } = (0, S.oR4)(),
            { formatMessage: D } = (0, c.Z)(),
            F = (0, n.useRef)(0),
            { href: H } = (0, S.zBm)(
              "/artist/".concat(R.deprecationTargetArtistId),
            ),
            { contentScrollRef: G, setContentScrollRef: z } = (0, S.$Y6)(),
            { forceUpdateRefCallback: V, offsetY: W } = (0, p.e)(G),
            Y = (0, n.useRef)(null),
            Z = (0, n.useMemo)(() => {
              var e, t;
              return (0, S.XGV)(
                null == R
                  ? void 0
                  : null === (t = R.meta) || void 0 === t
                    ? void 0
                    : null === (e = t.artist) || void 0 === e
                      ? void 0
                      : e.averageColor,
              );
            }, [
              null == R
                ? void 0
                : null === (a = R.meta) || void 0 === a
                  ? void 0
                  : null === (t = a.artist) || void 0 === t
                    ? void 0
                    : t.averageColor,
            ]),
            [X, K] = (0, _.at)(Z, W),
            Q =
              (null === (i = R.meta) || void 0 === i ? void 0 : i.hasCovers) &&
              E.checkExperiment(S.peG.WebNextImageSlider, "on"),
            q = (0, o.useSearchParams)();
          (0, L.N)(j),
            (0, n.useEffect)(() => {
              let e = q.get(S.wxR.BLOCK);
              e &&
                R.isResolved &&
                R.familiarInfo.isResolved &&
                T({ blockId: e, scrollRef: G, headerRef: Y });
            }, [R.isResolved, R.familiarInfo.isResolved, G, q]);
          let $ = (0, b.v2)({
            artist: null === (s = R.meta) || void 0 === s ? void 0 : s.artist,
            shouldHistoryBack: !0,
          });
          (0, n.useEffect)(() => {
            var e;
            (null === (e = R.meta) || void 0 === e
              ? void 0
              : e.artist.isUnsafeLegal) && $();
          }, [
            null === (l = R.meta) || void 0 === l
              ? void 0
              : l.artist.isUnsafeLegal,
            $,
          ]),
            (0, N.m)(R, j),
            (0, n.useEffect)(
              () => () => {
                w.isAuthorized && R.familiarInfo.reset();
              },
              [R, j, w.isAuthorized],
            );
          let J = (0, m.W)(() => {
            var e;
            (null === (e = R.meta) || void 0 === e ? void 0 : e.hasCovers) &&
              R.meta.covers &&
              U.openImages(R.meta.covers);
          });
          if (R.isCacheNotFound || M.isOfflineModeEnabled)
            return (0, r.jsx)(y, { artistId: j });
          R.deprecationTargetArtistId && (0, o.redirect)(H),
            (0, n.useMemo)(
              () => () => {
                (R.isRejected || (!R.meta && !R.isLoading)) &&
                  F &&
                  !(F.current > 0) &&
                  (P(
                    (0, r.jsx)(k.Q, {
                      error: D({
                        id: "artist-errors.error-during-loading-artist",
                      }),
                    }),
                    { containerId: S.W$x.ERROR },
                  ),
                  F.current++);
              },
              [R.isRejected, R.meta, R.isLoading, P, D],
            )(),
            (0, S.NOh)(R.isResolved),
            R.isNotFound && (0, o.notFound)(),
            R.isInfoNotFound && (0, o.notFound)(),
            C(R);
          let ee = E.checkExperiment(S.peG.WebNextArtistSkeletonHeader, "on"),
            et = E.checkExperiment(S.peG.WebNextArtistSkeleton, "on"),
            ea = !ee || !et,
            ei = (0, n.useMemo)(
              () =>
                (ee ? R.infoLoadingState.isLoading : R.isLoading) || !R.meta
                  ? (0, r.jsx)(v.KC, {
                      className: O().header,
                      coverRadius: "round",
                    })
                  : (0, r.jsx)(v.f3, {
                      className: O().header,
                      artistMeta: R.meta,
                      ref: V,
                      onCoverClick: Q ? J : void 0,
                    }),
              [ee, R.infoLoadingState.isLoading, R.isLoading, R.meta, V, Q, J],
            ),
            es = (0, g.V)(() =>
              et
                ? (0, r.jsx)(ep, { artist: R })
                : (0, r.jsx)(ec, { artist: R, artistId: j }),
            ),
            { current: er } = (0, n.useRef)([
              (0, S.aUS)(),
              (0, S.FsJ)(
                E.checkExperiment(S.peG.WebNextEntityTrailerOnboarding, "on"),
              ),
            ]),
            el = [];
          return (R.isNeededToLoad &&
            ea &&
            el.push(R.getData({ artistId: j, preloadedArtist: I })),
          R.infoLoadingState.isNeededToLoad &&
            ee &&
            el.push(R.getInfo({ artistId: j })),
          R.landing.isNeededToLoad &&
            et &&
            el.push(
              R.landing.getArtistSkeleton(
                { artistId: j, skeletonId: u.j.ARTIST },
                { preloadBlocksCount: 2 },
              ),
            ),
          w.isAuthorized &&
            R.familiarInfo.isNeededToLoad &&
            !et &&
            el.push(R.familiarInfo.getData({ artistId: j })),
          el.length && (0, n.use)(Promise.allSettled(el)),
          R.isSomethingWentWrong || R.isInfoSomethingWentWrong)
            ? (0, r.jsx)(f.D, {})
            : (
                  null === (x = R.meta) || void 0 === x
                    ? void 0
                    : x.artist.isLegalRejected
                )
              ? B.isRejected
                ? (0, r.jsx)(f.D, {})
                : (0, r.jsx)(A.em, { disclaimer: B })
              : (0, r.jsx)(S.Lh6, {
                  pageId: S.Rhz.ARTIST,
                  pageEntityId: j,
                  children: (0, r.jsx)(S.kZw, {
                    config: er,
                    children: (0, r.jsx)(S.e4N, {
                      children: (0, r.jsxs)(_.I7, {
                        scrollElement: G,
                        children: [
                          (0, r.jsx)(k.h4, { style: K, innerHeaderRef: Y }),
                          (0, r.jsx)("div", {
                            className: O().averageColorBackground,
                            style: X,
                          }),
                          (0, r.jsxs)(h.t, {
                            className: O().root,
                            containerClassName: O().content,
                            ref: z,
                            ...(0, d.BA)(d.Br.artist.ARTIST_PAGE),
                            children: [
                              (0, r.jsxs)("div", { children: [ei, es] }),
                              (0, r.jsx)(k.$_, { className: O().footer }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                });
        });
    },
    75289: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistSimilarPage: function () {
          return T;
        },
      });
      var i = a(75441),
        s = a(62569),
        r = a(98730),
        l = a(65067),
        o = a(9317),
        n = a(15937),
        c = a(35846),
        d = a(17294),
        u = a(17392),
        m = a(30948),
        p = a(55051),
        g = a(69947),
        h = a(64353),
        v = a(90378),
        f = a(13534),
        _ = a(97141),
        b = a(89742);
      let A = (e) => {
        (0, l.useEffect)(() => {
          if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
          let t = (0, h.zg)(e.meta.artist);
          (0, b.S)(
            { artist: t },
            { fullUrl: null, locale: null, url: null, tld: "", host: "" },
          ).then((e) => {
            (0, f.gOT)(e);
          });
        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
      };
      var S = a(60798),
        k = a(13836),
        x = a(57893),
        C = a.n(x);
      let T = (0, s.Pi)((e) => {
        var t, a, s, b;
        let { artistId: x, preloadedArtist: T, preloadedSimilarArtists: N } = e,
          { artist: L, disclaimer: j } = (0, f.oR4)(),
          { formatMessage: I } = (0, o.Z)(),
          { contentScrollRef: P, setContentScrollRef: R } = (0, f.$Y6)(),
          E = (0, f.k67)(),
          B = (0, h.v2)({
            artist: null === (t = L.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
        (0, k.N)(x),
          (0, l.useEffect)(() => {
            var e;
            (null === (e = L.meta) || void 0 === e
              ? void 0
              : e.artist.isUnsafeLegal) && B();
          }, [
            null === (a = L.meta) || void 0 === a
              ? void 0
              : a.artist.isUnsafeLegal,
            B,
          ]),
          (0, S.m)(L, x),
          (0, l.useEffect)(
            () => () => {
              L.similarArtistsSubPage.reset();
            },
            [L],
          ),
          L.similarArtistsSubPage.isNotFound && (0, r.notFound)(),
          (0, f.NOh)(L.similarArtistsSubPage.isResolved);
        let y = (0, l.useMemo)(() => {
            if (L.similarArtistsSubPage.isResolved) {
              var e;
              return null === (e = L.similarArtistsSubPage.similarArtists) ||
                void 0 === e
                ? void 0
                : e.map((e) =>
                    (0, i.jsx)(
                      p.IT,
                      { className: C().item, artist: e, contentLinesCount: 3 },
                      e.id,
                    ),
                  );
            }
            let t = I(
              { id: "loading-messages.entity-is-loading" },
              { entityName: I({ id: "entity-names.similar-artists" }) },
            );
            return (0, i.jsx)(_.Wm, {
              isActive: !0,
              itemClassName: C().item,
              round: !0,
              centered: !0,
              "aria-label": t,
            });
          }, [
            L.similarArtistsSubPage.loadingState,
            L.similarArtistsSubPage.similarArtists,
            I,
            null === (s = L.similarArtistsSubPage.similarArtists) ||
            void 0 === s
              ? void 0
              : s.length,
          ]),
          w = [];
        return (L.similarArtistsSubPage.isNeededToLoad &&
          w.push(
            L.similarArtistsSubPage.getData({
              artistId: x,
              preloadedSimilarArtists: N,
            }),
          ),
        L.isNeededToLoad &&
          w.push(L.getData({ artistId: x, preloadedArtist: T })),
        w.length && (0, l.use)(Promise.allSettled(w)),
        A(L),
        null === (b = L.meta) || void 0 === b
          ? void 0
          : b.artist.isLegalRejected)
          ? j.isRejected
            ? (0, i.jsx)(m.D, {})
            : (0, i.jsx)(v.em, { disclaimer: j })
          : L.isRejected
            ? (0, i.jsx)(m.D, {})
            : (0, i.jsx)(f.Lh6, {
                pageId: f.Rhz.ARTIST_SIMILAR,
                pageEntityId: x,
                children: (0, i.jsx)(g.I7, {
                  scrollElement: P,
                  outerTitle: I(
                    { id: "page.artist-similar-header" },
                    { artistName: L.commonSubPage.artistName },
                  ),
                  children: (0, i.jsxs)("div", {
                    className: C().root,
                    children: [
                      (0, i.jsx)(_.h4, {
                        variant: _.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: E.canBack,
                        children: (0, i.jsx)(u.Heading, {
                          variant: "h1",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: (0, i.jsx)(n.Z, {
                            id: "page.artist-similar-header",
                            values: { artistName: L.commonSubPage.artistName },
                          }),
                        }),
                      }),
                      (0, i.jsxs)(d.t, {
                        className: C().scrollableContent,
                        containerClassName: C().container,
                        ref: R,
                        children: [
                          (0, i.jsx)("div", {
                            ...(0, c.BA)(c.Br.artist.ARTIST_SIMILAR_PAGE),
                            children: (0, i.jsx)("div", {
                              className: C().content,
                              "aria-labelledby": "collection-artists-header",
                              tabIndex: 0,
                              children: y,
                            }),
                          }),
                          (0, i.jsx)(_.$_, { className: C().footer }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
      });
    },
    61795: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistTracksPage: function () {
          return L;
        },
      });
      var i = a(75441),
        s = a(32358),
        r = a(62569),
        l = a(98730),
        o = a(65067),
        n = a(9317),
        c = a(15937),
        d = a(35846),
        u = a(84638),
        m = a(93093),
        p = a(17392),
        g = a(30948),
        h = a(69947),
        v = a(1150),
        f = a(64353),
        _ = a(90378),
        b = a(13534),
        A = a(97141),
        S = a(899);
      let k = (e) => {
        (0, o.useEffect)(() => {
          if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
          let t = (0, f.zg)(e.meta.artist);
          (0, S.Z)(
            { artist: t },
            { fullUrl: null, locale: null, url: null, tld: "", host: "" },
          ).then((e) => {
            (0, b.gOT)(e);
          });
        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
      };
      var x = a(60798),
        C = a(13836),
        T = a(57683),
        N = a.n(T);
      let L = (0, r.Pi)((e) => {
        var t, a, r, S, T, L;
        let { artistId: j, preloadedArtist: I } = e,
          {
            artist: P,
            sonataState: R,
            disclaimer: E,
            settings: { isMobile: B },
          } = (0, b.oR4)(),
          { formatMessage: y } = (0, n.Z)(),
          { from: w, utmLink: O } = (0, b.MhG)({
            pageId: b.Rhz.ARTIST_TRACKS,
            pageEntityId: j,
            contextType: u.A.Artist,
            contextId: j,
          }),
          { contentScrollRef: M, setContentScrollRef: U } = (0, b.$Y6)(),
          D = (0, b.k67)(),
          F = (0, b.iXn)(),
          H = (0, f.v2)({
            artist: null === (t = P.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
        (0, C.N)(j),
          (0, o.useEffect)(() => {
            var e;
            (null === (e = P.meta) || void 0 === e
              ? void 0
              : e.artist.isUnsafeLegal) && H();
          }, [
            null === (a = P.meta) || void 0 === a
              ? void 0
              : a.artist.isUnsafeLegal,
            H,
          ]),
          (0, x.m)(P, j),
          (0, o.useEffect)(
            () => () => {
              P.fullTracksListSubpage.reset();
            },
            [P],
          ),
          P.fullTracksListSubpage.isNotFound && (0, l.notFound)(),
          (0, b.NOh)(P.fullTracksListSubpage.isResolved);
        let G = (0, o.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(A.$_, { className: N().footer }),
            }),
            [],
          ),
          z = (0, m.W)((e) => {
            let t = [];
            for (let i = e.startIndex; i <= e.endIndex; i++) {
              var a;
              let e =
                null === (a = P.fullTracksListSubpage.ids) || void 0 === a
                  ? void 0
                  : a[i];
              !P.fullTracksListSubpage.getTrackByIndex(i) && e && t.push(e);
            }
            t.length && P.fullTracksListSubpage.getTracks({ trackIds: t });
          }),
          V = [];
        return (P.fullTracksListSubpage.isNeededToLoad &&
          V.push(P.fullTracksListSubpage.getTracksIds({ artistId: j })),
        P.isNeededToLoad &&
          V.push(P.getData({ artistId: j, preloadedArtist: I })),
        V.length && (0, o.use)(Promise.allSettled(V)),
        k(P),
        P.fullTracksListSubpage.isRejected &&
          !P.fullTracksListSubpage.isNotFound)
          ? (0, i.jsx)(g.D, {})
          : (
                null === (r = P.meta) || void 0 === r
                  ? void 0
                  : r.artist.isLegalRejected
              )
            ? E.isRejected
              ? (0, i.jsx)(g.D, {})
              : (0, i.jsx)(_.em, { disclaimer: E })
            : (0, i.jsx)(b.Lh6, {
                pageId: b.Rhz.ARTIST_TRACKS,
                pageEntityId: j,
                children: (0, i.jsx)(h.I7, {
                  scrollElement: M,
                  outerTitle: y(
                    { id: "page.artist-tracks-header" },
                    { artistName: P.commonSubPage.artistName },
                  ),
                  children: (0, i.jsxs)("div", {
                    className: N().root,
                    ...(0, d.BA)(d.Br.artist.ARTIST_TRACKS_PAGE),
                    children: [
                      (0, i.jsx)(A.h4, {
                        variant: A.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: D.canBack,
                        children: (0, i.jsx)(p.Heading, {
                          variant: "h1",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: (0, i.jsx)(c.Z, {
                            id: "page.artist-tracks-header",
                            values: {
                              artistName:
                                null === (S = P.meta) || void 0 === S
                                  ? void 0
                                  : S.artist.name,
                            },
                          }),
                        }),
                      }),
                      (0, i.jsx)(A.Wv, {
                        className: (0, s.W)(N().scrollContainer, N().important),
                        customComponents: G,
                        itemContentCallback: (e) => {
                          let t = P.fullTracksListSubpage.getTrackByIndex(e),
                            a = y(
                              { id: "loading-messages.entity-is-loading" },
                              { entityName: y({ id: "search-filters.track" }) },
                            );
                          return t
                            ? (0, i.jsx)(v.O2, {
                                track: t,
                                playContextParams: F(e, {
                                  contextData: {
                                    type: u.A.Artist,
                                    meta: { id: Number(j) },
                                    from: w,
                                    utmLink: O,
                                  },
                                  queueParams: { index: e, entityId: t.id },
                                  loadContextMeta: !0,
                                  entitiesData:
                                    R.unloadedEntitiesDataFromModels,
                                }),
                              })
                            : (0, i.jsx)(A.DX, {
                                isActive: !0,
                                "aria-label": a,
                                variant: b.Lxt.PLAYLIST,
                                className: N().shimmerItem,
                              });
                        },
                        totalCount:
                          null !==
                            (L =
                              null === (T = P.fullTracksListSubpage.ids) ||
                              void 0 === T
                                ? void 0
                                : T.length) && void 0 !== L
                            ? L
                            : 0,
                        onGetDataByRange: z,
                        pageSize: 20,
                        listClassName: N().content,
                        itemClassName: N().item,
                        totalRequests: P.fullTracksListSubpage.tracks.size,
                        handleRef: U,
                        context: {
                          listAriaLabel: y({
                            id: "entity-names.artist-tracks-list",
                          }),
                        },
                        isMobileLayout: B,
                        useWindowScroll: B,
                      }),
                    ],
                  }),
                }),
              });
      });
    },
    17979: function (e, t, a) {
      "use strict";
      a.d(t, {
        d: function () {
          return c;
        },
        D: function () {
          return i.useDownloadedTracks;
        },
      });
      var i = a(83593),
        s = a(22874),
        r = a(81046),
        l = a(1150),
        o = a(13534),
        n = a(40892);
      let c = s.V5.compose(
        s.V5.model("DownloadedTracks", {
          items: s.V5.maybeNull(s.V5.array(l.le)),
          tracks: s.V5.maybeNull(s.V5.frozen()),
        }),
        n.fu,
      )
        .views((e) => ({
          get tracksDurationInMinutes() {
            var t, a;
            return (
              (null !==
                (a =
                  null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.reduce(
                        (e, t) => (t.durationMs ? e + t.durationMs : e),
                        0,
                      )) && void 0 !== a
                ? a
                : 0) /
              1e3 /
              60
            );
          },
          get entitiesData() {
            if (!e.tracks) return [];
            return e.tracks.map((e) => ({ type: r.A.Music, meta: e }));
          },
          get isEmpty() {
            var i;
            return (
              e.isResolved &&
              (null === (i = e.items) || void 0 === i ? void 0 : i.length) === 0
            );
          },
        }))
        .actions((e) => ({
          getData: (0, s.ls)(function* (t, a) {
            let { modelActionsLogger: i } = (0, s.dU)(e);
            if (e.loadingState !== o.Gui.PENDING)
              try {
                e.loadingState = o.Gui.PENDING;
                let i = yield t.getTracks(a);
                (e.tracks = i),
                  (e.items = (0, s.pj)(i.map((e) => (0, l.Vt)(e)))),
                  e.loadingState !== o.Gui.IDLE &&
                    (e.loadingState = o.Gui.RESOLVE);
              } catch (t) {
                i.error(t),
                  e.loadingState !== o.Gui.IDLE &&
                    (e.loadingState = o.Gui.REJECT);
              }
          }),
          reset() {
            (e.items = null), (e.tracks = null), (e.loadingState = o.Gui.IDLE);
          },
        }));
    },
    83593: function (e, t, a) {
      "use strict";
      a.d(t, {
        useDownloadedTracks: function () {
          return n;
        },
      });
      var i = a(65067),
        s = a(34990),
        r = a(93093),
        l = a(13534);
      let o = [s.aT.IDLE, s.aT.DOWNLOADED],
        n = (e) => {
          let t = (0, l.h1d)(),
            a = (0, r.W)((t) => {
              let { state: a } = t;
              o.includes(a.loadingState) && e();
            });
          (0, i.useEffect)(
            () => (
              null == t || t.events.on(s.tY.STATE_CHANGED, e),
              null == t || t.events.on(s.tY.TRACK_CHANGED, a),
              () => {
                null == t || t.events.off(s.tY.STATE_CHANGED, e),
                  null == t || t.events.off(s.tY.TRACK_CHANGED, a);
              }
            ),
            [e, a, t],
          );
        };
    },
    30136: function (e) {
      e.exports = {
        root: "ArtistAlbumsPage_root__UVZDz",
        scrollContainer: "ArtistAlbumsPage_scrollContainer__2FrjI",
        important: "ArtistAlbumsPage_important__Id_vh",
        footer: "ArtistAlbumsPage_footer__6Nrct",
        item: "ArtistAlbumsPage_item__kiegh",
        content: "ArtistAlbumsPage_content__65D6P",
      };
    },
    17623: function (e) {
      e.exports = {
        root: "ArtistClipsPage_root__3efVS",
        scrollContainer: "ArtistClipsPage_scrollContainer___2pJZ",
        important: "ArtistClipsPage_important__UBPcN",
        footer: "ArtistClipsPage_footer__mhu_A",
        item: "ArtistClipsPage_item__fonRp",
        content: "ArtistClipsPage_content__GFs51",
      };
    },
    7159: function (e) {
      e.exports = {
        root: "ArtistConcertsPage_root__DDTmb",
        scrollableContainer: "ArtistConcertsPage_scrollableContainer__qrAF_",
        container: "ArtistConcertsPage_container__ho6Fw",
        content: "ArtistConcertsPage_content__Ynto2",
        footer: "ArtistConcertsPage_footer__kQL7m",
      };
    },
    31673: function (e) {
      e.exports = { root: "ArtistFamiliarPage_root__9Zjo0" };
    },
    17599: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageContent_root__0Mc9t",
        scrollContainer: "ArtistFamiliarPageContent_scrollContainer__TD6Kj",
        important: "ArtistFamiliarPageContent_important__o2KTP",
        content: "ArtistFamiliarPageContent_content__QquDA",
        block: "ArtistFamiliarPageContent_block__Cr2H_",
        blockHeader: "ArtistFamiliarPageContent_blockHeader__Z_uvq",
        tracksBlock: "ArtistFamiliarPageContent_tracksBlock__SCCLT",
        footer: "ArtistFamiliarPageContent_footer__nveR8",
        item: "ArtistFamiliarPageContent_item__fyC2q",
        shimmerTitle: "ArtistFamiliarPageContent_shimmerTitle__WU3vH",
      };
    },
    84209: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageEmpty_root__s5xX9",
        icon: "ArtistFamiliarPageEmpty_icon__b7kR5",
        title: "ArtistFamiliarPageEmpty_title__wvBGS",
      };
    },
    88258: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageHeader_root__0Wxyx",
        container: "ArtistFamiliarPageHeader_container__HFQzt",
        title: "ArtistFamiliarPageHeader_title__YpVQg",
        tabs: "ArtistFamiliarPageHeader_tabs__CrnJC",
        tab: "ArtistFamiliarPageHeader_tab__RK4OK",
        tabsShimmer: "ArtistFamiliarPageHeader_tabsShimmer__cbLvV",
        tabShimmer: "ArtistFamiliarPageHeader_tabShimmer__iLiqI",
        staticHeader: "ArtistFamiliarPageHeader_staticHeader__LrzR8",
        important: "ArtistFamiliarPageHeader_important__buc81",
        stickyHeader: "ArtistFamiliarPageHeader_stickyHeader__u7JdF",
      };
    },
    53583: function (e) {
      e.exports = {
        root: "ArtistPage_root__QPg3p",
        averageColorBackground: "ArtistPage_averageColorBackground__wXTSY",
        header: "ArtistPage_header__tQnNe",
        content: "ArtistPage_content__iZHVN",
        footer: "ArtistPage_footer__8m6P9",
      };
    },
    75723: function (e) {
      e.exports = {
        panel: "ArtistPageContent_panel__pT_94",
        panelItem: "ArtistPageContent_panelItem__AfA_r",
        blockCoverContainer: "ArtistPageContent_blockCoverContainer__LDl_I",
        important: "ArtistPageContent_important__tPJqk",
        recentsContainer: "ArtistPageContent_recentsContainer__iw_AC",
        recents: "ArtistPageContent_recents__TkT7y",
        popularTracksBlock: "ArtistPageContent_popularTracksBlock__M19rf",
        popularTracksBlock_withReleaseBlock:
          "ArtistPageContent_popularTracksBlock_withReleaseBlock__S1eO_",
        carouselBlockHeader: "ArtistPageContent_carouselBlockHeader__LO9is",
        popularTracksBlockHeader:
          "ArtistPageContent_popularTracksBlockHeader__yE3Z8",
        releaseBlockHeader: "ArtistPageContent_releaseBlockHeader__OSBh1",
        releaseBlockHeaderShimmer:
          "ArtistPageContent_releaseBlockHeaderShimmer__07Uep",
        popularTracksBlockList:
          "ArtistPageContent_popularTracksBlockList__z02_G",
        releaseBlock: "ArtistPageContent_releaseBlock__dmcUs",
        releaseBlockCard: "ArtistPageContent_releaseBlockCard__GeAp7",
        concertsBlock: "ArtistPageContent_concertsBlock__o_vhY",
        carouselBlock: "ArtistPageContent_carouselBlock__21pOp",
        carouselBlocks: "ArtistPageContent_carouselBlocks__f1w09",
      };
    },
    49986: function (e) {
      e.exports = {
        root: "ArtistPageSkeleton_root___Cj4n",
        error: "ArtistPageSkeleton_error__GMCzn",
      };
    },
    97574: function (e) {
      e.exports = {
        artistLink: "ArtistPick_artistLink__uYvRX",
        artistsSpoiler: "ArtistPick_artistsSpoiler__zP3T5",
        subTitle: "ArtistPick_subTitle__vfdza",
        text: "ArtistPick_text__Oiceb",
        coverContainer: "ArtistPick_coverContainer__epurf",
        cover: "ArtistPick_cover__KGKal",
      };
    },
    57893: function (e) {
      e.exports = {
        root: "ArtistSimilarPage_root__rvTLl",
        scrollableContent: "ArtistSimilarPage_scrollableContent__WD72A",
        container: "ArtistSimilarPage_container__DDj5O",
        content: "ArtistSimilarPage_content__X71xs",
        footer: "ArtistSimilarPage_footer__FdVkO",
      };
    },
    57683: function (e) {
      e.exports = {
        root: "ArtistTracksPage_root__ad3rI",
        footer: "ArtistTracksPage_footer__KN2i_",
        scrollContainer: "ArtistTracksPage_scrollContainer__9iO2g",
        important: "ArtistTracksPage_important__iulth",
        content: "ArtistTracksPage_content__6LJJd",
        shimmerItem: "ArtistTracksPage_shimmerItem__136_r",
      };
    },
    14166: function (e) {
      e.exports = {
        root: "OfflineArtistPage_root__u1qco",
        important: "OfflineArtistPage_important__Kt9GU",
        header: "OfflineArtistPage_header__PR4N7",
        averageColorBackground:
          "OfflineArtistPage_averageColorBackground__6WlL4",
        content: "OfflineArtistPage_content__Y71zx",
        footer: "OfflineArtistPage_footer__mB2rh",
      };
    },
  },
]);
