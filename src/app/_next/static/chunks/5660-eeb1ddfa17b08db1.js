(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5660],
  {
    36059: function (e, t, a) {
      "use strict";
      a.d(t, {
        o: function () {
          return o;
        },
        y: function () {
          return n;
        },
      });
      var i = a(45200);
      let n = [i.Q.ABOUT, i.Q.TRACKS],
        o = 10;
    },
    74030: function (e, t, a) {
      "use strict";
      a.d(t, {
        C: function () {
          return n;
        },
      });
      var i = a(13534);
      let n = (e) => {
        let {
            albumId: t,
            deprecationTargetAlbumId: a,
            trackId: n,
            realId: o,
            searchParams: l,
          } = e,
          s = Number(t),
          r = new URLSearchParams(l);
        r.delete("albumId"), r.delete("trackId");
        let d = "",
          u = !1;
        return (
          "number" == typeof a && a !== s
            ? ((d = "/album/".concat(a)),
              n && (d += "/track/".concat(n)),
              (u = !0))
            : n &&
              o &&
              o !== n &&
              ((d = "/album/".concat(t, "/track/").concat(o)), (u = !0)),
          { deprecationUrl: (0, i.rDv)(d, r), shouldRedirect: u }
        );
      };
    },
    10356: function (e, t, a) {
      "use strict";
      a.d(t, {
        n: function () {
          return s;
        },
      });
      var i = a(13534),
        n = a(44679);
      function o(e) {
        let { type: t, genre: a } = e;
        return (
          [n.V.AUDIOBOOK, n.V.FAIRY_TALE].includes(null != t ? t : "") ||
          ["audiobooksinenglish", "fiction"].includes(null != a ? a : "")
        );
      }
      function l(e) {
        let { albumType: t, messageFormatter: a } = e;
        switch (t) {
          case n.V.SINGLE:
            return a({ id: "metadata.single" });
          case n.V.PODCAST:
            return a({ id: "metadata.podcast" });
          case n.V.AUDIOBOOK:
            return a({ id: "metadata.audiobook" });
          case n.V.FAIRY_TALE:
            return a({ id: "metadata.fairy-tale" });
          default:
            return a({ id: "metadata.album" });
        }
      }
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
        let d = await (0, i.EQQ)(t.locale),
          u = (0, i.bYF)(e.title);
        return {
          title: (function (e) {
            let { albumMeta: t, messageFormatter: a } = e,
              l = (0, i.KzX)(t.artists);
            return o({ type: t.type, genre: t.genre })
              ? l
                ? a(
                    { id: "metadata.audiobook-title-with-artists" },
                    {
                      albumTitle: t.title,
                      artistsNames: l,
                      artistsNamesCount: t.artists.length,
                    },
                  )
                : a(
                    { id: "metadata.audiobook-title-without-artists" },
                    { albumTitle: t.title },
                  )
              : t.type === n.V.PODCAST
                ? a({ id: "metadata.podcast-title" }, { albumTitle: t.title })
                : l
                  ? a(
                      { id: "metadata.album-title-with-artists" },
                      { albumTitle: t.title, artistsNames: l },
                    )
                  : a(
                      { id: "metadata.album-title-without-artists" },
                      { albumTitle: t.title },
                    );
          })({ albumMeta: e, messageFormatter: d }),
          description: (function (e) {
            let { albumMeta: t, messageFormatter: a } = e,
              l = (0, i.KzX)(t.artists);
            return o({ type: t.type, genre: t.genre })
              ? l
                ? a(
                    { id: "metadata.audiobook-title-with-artists" },
                    {
                      albumTitle: t.title,
                      artistsNames: l,
                      artistsNamesCount: t.artists.length,
                    },
                  )
                : a(
                    { id: "metadata.audiobook-title-without-artists" },
                    { albumTitle: t.title },
                  )
              : t.type === n.V.PODCAST
                ? a({ id: "metadata.podcast-title" }, { albumTitle: t.title })
                : l
                  ? a(
                      { id: "metadata.album-title-with-artists" },
                      { albumTitle: t.title, artistsNames: l },
                    )
                  : a(
                      { id: "metadata.album-title-without-artists" },
                      { albumTitle: t.title },
                    );
          })({ albumMeta: e, messageFormatter: d }),
          openGraph: (0, i.A36)({
            ogTitle: u,
            ogDescription: (function (e) {
              var t, a, s;
              let { albumMeta: r, messageFormatter: d } = e,
                u = (0, i.Th8)((0, i.KzX)(r.artists), 96, !1);
              if (o({ type: r.type, genre: r.genre })) {
                let { hours: e, minutes: a } = (0, i.Kv)(
                    null !== (t = r.durationSec) && void 0 !== t ? t : 0,
                  ),
                  n = d(
                    { id: "metadata.hours-and-minutes" },
                    { hours: e, minutes: a },
                  );
                return [
                  u,
                  l({ albumType: r.type, messageFormatter: d }),
                  n,
                ].join(" • ");
              }
              return r.type === n.V.PODCAST
                ? [
                    (0, i.Th8)(
                      null !== (a = r.description) && void 0 !== a ? a : "",
                      96,
                      !1,
                    ),
                    l({ albumType: r.type, messageFormatter: d }),
                    d(
                      { id: "metadata.subscribers" },
                      {
                        subscribers:
                          null !== (s = r.likesCount) && void 0 !== s ? s : 0,
                      },
                    ),
                  ].join(" • ")
                : [
                    u,
                    l({ albumType: r.type, messageFormatter: d }),
                    r.year,
                  ].join(" • ");
            })({ albumMeta: e, messageFormatter: d }),
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            ogImage: e.ogImage,
            siteName: d({ id: "metadata.yandex-music" }),
            ogType: "music.album",
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.APP,
            title: u,
            url: t.url,
            appName: d({ id: "metadata.yandex-music" }),
          }),
          appLinks: (0, i.VMi)({
            additional: {
              ...t,
              url: null !== (s = t.url) && void 0 !== s ? s : "",
              fullUrl: null !== (r = t.fullUrl) && void 0 !== r ? r : "",
              host: t.host,
            },
            appName: d({ id: "metadata.yandex-music" }),
          }),
          other: { "music:musician": (0, i.I82)(e.artists, t.host) },
        };
      }
    },
    31317: function (e, t, a) {
      "use strict";
      a.d(t, {
        U: function () {
          return s;
        },
      });
      var i = a(65067),
        n = a(72783),
        o = a(13534),
        l = a(10356);
      let s = (e, t, a) => {
        (0, i.useEffect)(() => {
          let i = t && a;
          if (!(null == e ? void 0 : e.meta) || e.isLoading || i) return;
          let s = (0, n.DR)(e.meta);
          t ||
            (0, l.n)(s, {
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, o.gOT)(e);
            });
        }, [
          null == e ? void 0 : e.meta,
          null == e ? void 0 : e.isLoading,
          a,
          t,
        ]);
      };
    },
    45200: function (e, t, a) {
      "use strict";
      var i, n;
      a.d(t, {
        Q: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).ABOUT = "about"),
        (n.TRACKS = "track-list");
    },
    86576: function (e, t, a) {
      "use strict";
      a.d(t, {
        X: function () {
          return l;
        },
      });
      var i = a(65067),
        n = a(94123),
        o = a(13534);
      let l = (e) => {
        let { album: t } = e;
        return (0, i.useCallback)(
          (e) => {
            let a = [];
            for (let i = e.startIndex; i <= e.endIndex; i++) {
              let e = t.items[i];
              (null == e ? void 0 : e.type) === n.V.TRACK &&
                (null == e ? void 0 : e.loadingState) === o.Gui.IDLE &&
                a.push(e.id);
            }
            a.length && t.getTracks({ trackIds: a });
          },
          [t],
        );
      };
    },
    65161: function (e, t, a) {
      "use strict";
      a.d(t, {
        v: function () {
          return j;
        },
      });
      var i,
        n,
        o = a(75441),
        l = a(9317),
        s = a(94123),
        r = a(73447),
        d = a(13534),
        u = a(32358),
        c = a(97141);
      ((i = n || (n = {})).TRACK = "TRACK"), (i.TEXT = "TEXT");
      var m = a(57535),
        v = a.n(m);
      let b = (e) => {
        let { shimmerVariant: t, trackVariant: a = d.Lxt.ALBUM } = e;
        switch (t) {
          case n.TRACK:
            return (0, o.jsx)(c.DX, {
              isActive: !0,
              className: (0, u.W)({ [v().root]: a === d.Lxt.ALBUM }),
              variant: a,
            });
          case n.TEXT:
            return (0, o.jsx)(c.AH, { className: v().root });
        }
      };
      var p = a(17392),
        h = a(69829),
        x = a.n(h),
        g = a(50569),
        f = a.n(g);
      let A = (e) => {
          let { text: t } = e;
          return (0, o.jsx)("div", {
            className: f().root,
            children: (0, o.jsx)(p.Heading, {
              variant: "h2",
              className: x().text,
              children: t,
            }),
          });
        },
        C = (e) =>
          !!e &&
          "object" == typeof e &&
          (("type" in e && e.type === r.lf.TEXT) ||
            ("id" in e && "positionInContext" in e)),
        j = (e) => {
          let { element: t, isNonMusic: a, album: i } = e,
            { formatMessage: u } = (0, l.Z)();
          return (e) => {
            var l;
            let c =
              null == i
                ? void 0
                : null === (l = i.items) || void 0 === l
                  ? void 0
                  : l[e];
            if (!c || !i.meta || i.isRejected || !C(c))
              return (0, o.jsx)(b, {
                shimmerVariant: n.TRACK,
                trackVariant: d.Lxt.ALBUM,
              });
            if (!c.data && !c.isRejected)
              switch (c.type) {
                case r.lf.TEXT:
                  return (0, o.jsx)(b, { shimmerVariant: n.TEXT });
                case s.V.TRACK:
                  return (0, o.jsx)(b, {
                    shimmerVariant: n.TRACK,
                    trackVariant: d.Lxt.ALBUM,
                  });
                default:
                  if (a)
                    return (0, o.jsx)(b, {
                      shimmerVariant: n.TRACK,
                      trackVariant: d.Lxt.PLAYLIST,
                    });
              }
            return c.type === r.lf.TEXT
              ? a
                ? (0, o.jsx)(A, {
                    text: u(
                      { id: "entity-names.season-number" },
                      { number: c.data },
                    ),
                  })
                : (0, o.jsx)(A, {
                    text: u(
                      { id: "entity-names.disk-number" },
                      { number: c.data },
                    ),
                  })
              : t(c, e);
          };
        };
    },
    55065: function (e, t, a) {
      "use strict";
      a.d(t, {
        c: function () {
          return r;
        },
      });
      var i = a(75441),
        n = a(65067),
        o = a(9317),
        l = a(13534),
        s = a(97141);
      let r = (e) => {
        let { album: t } = e,
          a = (0, n.useRef)(0),
          { notify: r } = (0, l.d$W)(),
          { formatMessage: d } = (0, o.Z)();
        (0, n.useMemo)(
          () => () => {
            if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
              var e;
              if (!a || a.current > 0) return;
              let n = (
                null === (e = t.meta) || void 0 === e ? void 0 : e.isPodcast
              )
                ? d({ id: "podcast-errors.error-during-loading-podcast" })
                : d({ id: "album-errors.error-during-loading-album" });
              r((0, i.jsx)(s.Q, { error: n }), { containerId: l.W$x.ERROR }),
                a.current++;
            }
          },
          [t.isLoading, t.isNotFound, t.isRejected, t.meta, d, r],
        )();
      };
    },
    96865: function (e, t, a) {
      "use strict";
      a.d(t, {
        AlbumNotFoundPage: function () {
          return r;
        },
      });
      var i = a(75441),
        n = a(62569),
        o = a(65067),
        l = a(35551),
        s = a(13534);
      let r = (0, n.Pi)(() => {
        let { album: e, sonataState: t } = (0, s.oR4)();
        return (
          (0, o.useEffect)(() => {
            e.reset(t);
          }, []),
          (0, i.jsx)(l.T, {})
        );
      });
    },
    40012: function (e, t, a) {
      "use strict";
      a.d(t, {
        AlbumPage: function () {
          return eb;
        },
      });
      var i = a(75441),
        n = a(62569),
        o = a(98730),
        l = a(65067),
        s = a(35846),
        r = a(14218),
        d = a(29088),
        u = a(86505),
        c = a(30948),
        m = a(69947),
        v = a(73447),
        b = a(90378),
        p = a(13534),
        h = a(97141),
        x = a(74030),
        g = a(31317),
        f = a(55065);
      let A = (e) => {
        var t;
        let { albumId: a, trackId: i, isNonMusic: n } = e,
          { setDeeplink: o } =
            null !== (t = (0, p.Z01)()) && void 0 !== t ? t : {};
        (0, l.useEffect)(() => {
          let e = "",
            t = "album/".concat(a);
          return (
            i &&
              (n ||
                (e = "?playTrack=".concat(
                  i,
                  "&openPlayer=true&lyricsMode=true",
                )),
              (t = "album/".concat(a, "/track/").concat(i).concat(e))),
            null == o || o(t),
            () => {
              null == o || o(null);
            }
          );
        }, [a, n, o, i]);
      };
      var C = a(69829),
        j = a.n(C),
        _ = a(32358),
        T = a(9317),
        k = a(4875),
        N = a(84638),
        y = a(5362),
        I = a(72783),
        B = a(1150),
        R = a(36059),
        O = a(86576),
        P = a(65161),
        L = a(93093),
        E = a(5104);
      let S = (0, n.Pi)((e) => {
        let { url: t } = e,
          a = (0, E.s6)(),
          n = (0, E.nJ)(),
          { ref: o, intersectionPropertyId: l } = (0, p.VfV)({
            callback: n,
            withViewUuid: !0,
          }),
          s = (0, p.s0h)(t),
          r = (0, L.W)(() => {
            a(k.qU.Link, t), s();
          });
        return (0, i.jsx)(E.J, {
          onClick: r,
          ref: o,
          "data-intersection-property-id": l,
        });
      });
      var V = a(64353);
      let M = (0, n.Pi)((e) => {
          let { donation: t } = e,
            a = (0, E.s6)(),
            n = (0, E.nJ)(),
            { ref: o, intersectionPropertyId: l } = (0, p.VfV)({
              callback: n,
              withViewUuid: !0,
            }),
            s = (0, p.s0h)(t.url),
            r = (0, p.s0h)(t.artist.url),
            d = (0, L.W)(() => {
              a(k.qU.ArtistScreen), r();
            }),
            u = (0, L.W)(() => {
              a(k.qU.Link, t.url), s();
            }),
            c = (0, V.v2)({ artist: t.artist, callback: d });
          return (0, i.jsx)(E.AT, {
            ref: o,
            "data-intersection-property-id": l,
            artist: t.artist,
            goal: t.goal,
            onNavigateToArtist: c,
            onNavigateToDonation: u,
          });
        }),
        D = (0, n.Pi)((e) => {
          var t, a, n, o, s;
          let {
              className: r,
              headerClassName: d,
              containerClassName: u,
              headingVariant: c,
            } = e,
            { formatMessage: m } = (0, T.Z)(),
            { album: v } = (0, p.oR4)(),
            b = (0, l.useMemo)(() => {
              var e, t;
              return (null === (e = v.donations) || void 0 === e
                ? void 0
                : e.isLoading) ||
                !(null === (t = v.donations) || void 0 === t ? void 0 : t.items)
                ? (0, E.ei)(!0)
                : v.donations.items.map((e, t) => {
                    var a, n, o;
                    return (0, i.jsx)(
                      p.nZ5,
                      {
                        objectType: k.OB.Donation,
                        objectId: e.artist.id,
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: Number(
                          null === (n = v.donations) || void 0 === n
                            ? void 0
                            : null === (a = n.items) || void 0 === a
                              ? void 0
                              : a.length,
                        ),
                        mainObjectId: String(
                          null === (o = v.meta) || void 0 === o ? void 0 : o.id,
                        ),
                        mainObjectType: k.OB.Album,
                        children: (0, i.jsx)(M, { donation: e }, e.artist.id),
                      },
                      e.artist.id,
                    );
                  });
            }, [
              null === (t = v.donations) || void 0 === t ? void 0 : t.isLoading,
              null === (a = v.donations) || void 0 === a ? void 0 : a.items,
              null === (n = v.meta) || void 0 === n ? void 0 : n.id,
            ]);
          return (0, i.jsx)(E.Nv, {
            className: r,
            headerClassName: d,
            containerClassName: u,
            title: m(
              { id: "donation.support-artist" },
              {
                count: Number(
                  null === (s = v.donations) || void 0 === s
                    ? void 0
                    : null === (o = s.items) || void 0 === o
                      ? void 0
                      : o.length,
                ),
              },
            ),
            headingVariant: c,
            children: b,
          });
        });
      var w = a(69756),
        U = a(27376),
        z = a(77282);
      let W = () => {
        let e = (0, p.z$f)(),
          t = (0, p.wLl)(),
          { hash: a } = (0, p.RQn)(),
          { pageId: i } = (0, p.lVB)(),
          { mainObjectId: n, mainObjectType: o } = (0, p.rKX)();
        return (0, L.W)((l) => {
          if (!e || !i || !p.x3Y[i]) return;
          let s = {
            pageStyle: k.R6.ContextMenu,
            pagePlacement: k.w4.Hover,
            mainObjectType: o,
            mainObjectId: n,
            hash: a,
            pageId: i,
          };
          l && (s.viewUuid = String((0, z.Z)()));
          let r = (0, p.KOr)({ params: s, logger: t, context: W.name });
          r &&
            (l
              ? (0, k.x)(null == e ? void 0 : e.evgenInstance, r)
              : (0, k.uM)(null == e ? void 0 : e.evgenInstance, r));
        });
      };
      var X = a(75239),
        G = a.n(X),
        K = a(39054),
        F = a(59091),
        Z = a(17392);
      let Y = () => {
        let { hash: e } = (0, p.RQn)(),
          t = (0, p.wLl)(),
          a = (0, p.z$f)(),
          { pageId: i } = (0, p.lVB)(),
          {
            blockId: n,
            blockType: o,
            blockPosX: l,
            blockPosY: s,
          } = (0, p.qYG)(),
          {
            objectType: r,
            objectId: d,
            objectPosX: u,
            objectPosY: c,
            objectsCount: m,
            mainObjectId: v,
            mainObjectType: b,
          } = (0, p.rKX)();
        return (0, L.W)(() => {
          if (!a || !i) return;
          let h = p.x3Y[i];
          if (!h) return;
          let x = {
              userInteractionType: k.wt.Tap,
              hash: e,
              pageId: h,
              pageStyle: k.R6.ContextMenu,
              pagePlacement: k.w4.Hover,
              mainObjectType: b,
              mainObjectId: v,
              objectType: r,
              objectId: d,
              objectPosX: u,
              objectPosY: c,
              entityType: o,
              entityId: n,
              entityPosX: l,
              entityPosY: s,
              objectsCount: m,
              actionType: p.NFh.CLICK,
            },
            g = (0, p.KOr)({ params: x, logger: t, context: Y.name });
          g && (0, k.t7)(a.evgenInstance, g);
        });
      };
      var H = a(78282),
        Q = a.n(H);
      let J = (0, n.Pi)((e) => {
          let { donation: t } = e,
            a = (0, p.s0h)(t.url),
            n = Y(),
            o = (0, E.nJ)(),
            { ref: l, intersectionPropertyId: s } = (0, p.VfV)({
              callback: o,
              withViewUuid: !0,
            }),
            r = (0, L.W)(() => {
              n(), a();
            });
          return (0, i.jsxs)(
            U.sN,
            {
              ref: l,
              "data-intersection-property-id": s,
              className: Q().root,
              isBlock: !0,
              onClick: r,
              children: [
                (0, i.jsx)(F.Paper, {
                  radius: "round",
                  className: Q().cover,
                  children: (0, i.jsx)(K.Image, {
                    withAvatarReplace: !0,
                    src: t.artist.coverUri,
                    size: 100,
                    fit: "contain",
                    className: Q().image,
                  }),
                }),
                (0, i.jsx)(Z.Caption, {
                  variant: "span",
                  size: "m",
                  weight: "medium",
                  lineClamp: 1,
                  children: t.artist.name,
                }),
              ],
            },
            t.url,
          );
        }),
        $ = (0, n.Pi)(() => {
          var e;
          let {
              settings: { isMobile: t },
              album: { donations: a, meta: n },
            } = (0, p.oR4)(),
            { formatMessage: o } = (0, T.Z)(),
            s = W(),
            [r, d] = (0, l.useState)(!1),
            u = (0, l.useRef)(!1);
          return (
            (0, l.useEffect)(() => {
              r && (u.current = !0);
            }, [r]),
            (0, l.useEffect)(() => {
              u.current && s(r);
            }, [r, s]),
            (0, i.jsx)(U.v2, {
              ariaLabel: o({ id: "donation.button-text" }),
              size: "s",
              variant: "default",
              radius: "round",
              color: "secondary",
              icon: (0, i.jsx)(w.Icon, { size: "xxs", variant: "ruble" }),
              onOpenChange: d,
              open: r,
              isMobile: t,
              placement: "bottom",
              offsetOptions: 8,
              listClassName: G().popover,
              children:
                null == a
                  ? void 0
                  : null === (e = a.items) || void 0 === e
                    ? void 0
                    : e.map((e, t) => {
                        var o;
                        return (0, i.jsx)(
                          p.nZ5,
                          {
                            objectType: k.OB.Donation,
                            objectId: e.artist.id,
                            objectPosX: 1,
                            objectPosY: t + 1,
                            objectsCount: Number(
                              null === (o = a.items) || void 0 === o
                                ? void 0
                                : o.length,
                            ),
                            mainObjectId: String(null == n ? void 0 : n.id),
                            mainObjectType: k.OB.Album,
                            children: (0, i.jsx)(J, { donation: e }),
                          },
                          e.artist.id,
                        );
                      }),
            })
          );
        });
      var q = a(31996);
      let ee = (0, n.Pi)((e) => {
        var t, a, n;
        let { album: o, size: l, weight: s, className: r } = e,
          { formatMessage: d } = (0, T.Z)(),
          u = null === (t = o.labels) || void 0 === t ? void 0 : t.length,
          c = d(
            (null === (a = o.meta) || void 0 === a ? void 0 : a.isPodcast)
              ? { id: "page.album-publisher-title" }
              : { id: "page.album-label-title" },
            { count: u },
          );
        return (0, i.jsxs)("div", {
          className: (0, _.W)(j().label, j().important, r),
          children: [
            (0, i.jsx)(Z.Caption, {
              variant: "span",
              size: l,
              weight: s,
              children: c,
            }),
            "\xa0",
            (0, i.jsx)(Z.Caption, {
              variant: "span",
              size: l,
              weight: s,
              lineClamp: 1,
              children:
                null === (n = o.labels) || void 0 === n
                  ? void 0
                  : n.map((e) => {
                      let { id: t, name: a } = e;
                      return (0, i.jsx)(
                        h.rU,
                        {
                          role: "link",
                          "aria-label": a,
                          href: o.labelUrl(t),
                          className: (0, _.W)(j().labelLink, j().important),
                          children: (0, i.jsx)(Z.Caption, {
                            variant: "span",
                            children: a,
                          }),
                        },
                        t,
                      );
                    }),
            }),
          ],
        });
      });
      var et = a(73552),
        ea = a.n(et);
      let ei = (0, n.Pi)(() => {
        var e, t, a, n, o, d;
        let u = (0, l.useRef)(null),
          c = (0, l.useRef)(0),
          m = (0, p.iXn)(),
          { notify: b } = (0, p.d$W)(),
          {
            album: x,
            experiments: g,
            sonataState: f,
            settings: { isMobile: A },
            track: { isTrackPage: C },
          } = (0, p.oR4)(),
          { from: L, utmLink: E } = (0, p.MhG)({
            pageId: p.Rhz.ALBUM,
            blockId: p.aUg.ALBUM,
            contextType: N.A.Album,
            contextId: x.id,
          }),
          { formatMessage: V } = (0, T.Z)(),
          M = g.checkExperiment(p.peG.WebNextAlbumDisableTracks, "on"),
          [w, U] = (0, l.useState)(!1),
          z = (0, O.X)({ album: x }),
          W = C ? "div" : "h2",
          X = M ? 0 : x.items.length || R.o,
          G =
            g.checkExperiment(p.peG.WebNextAlbumDonationButton, "on") &&
            x.hasDonations;
        (0, l.useEffect)(
          () => () => {
            c.current = 0;
          },
          [x],
        ),
          (0, l.useEffect)(() => {
            var e, t;
            if (
              (null === (e = x.otherArtistAlbums) || void 0 === e
                ? void 0
                : e.isRejected) ||
              (null === (t = x.latestGenreAlbums) || void 0 === t
                ? void 0
                : t.isRejected)
            ) {
              if (!c || c.current > 0) return;
              b(
                (0, i.jsx)(h.Q, {
                  error: V({
                    id: "album-errors.error-during-loading-similar-albums",
                  }),
                }),
                { containerId: p.W$x.ERROR },
              ),
                c.current++;
            }
          }, [
            null === (e = x.latestGenreAlbums) || void 0 === e
              ? void 0
              : e.isRejected,
            null === (t = x.otherArtistAlbums) || void 0 === t
              ? void 0
              : t.isRejected,
            V,
            b,
          ]),
          (0, l.useEffect)(() => {
            x.isResolved && x.hasOtherAlbumVersions && U(!0);
          }, [x.hasOtherAlbumVersions, x.isResolved]);
        let K = (0, l.useCallback)(() => {
            let e = u.current;
            null == e || e.scrollIntoView({ behavior: "smooth" });
          }, []),
          F = (0, r.V)(() => {
            var e, t, a, n, o;
            if (
              !G ||
              !(null === (e = x.donations) || void 0 === e ? void 0 : e.items)
            )
              return;
            if (
              Number(
                null === (a = x.meta) || void 0 === a
                  ? void 0
                  : null === (t = a.artists) || void 0 === t
                    ? void 0
                    : t.length,
              ) > 1
            )
              return (0, i.jsx)(p.Ja5, {
                blockType: k.DC.Donations,
                blockId: p.aUg.DONATY,
                blockPosX: 1,
                blockPosY: 1,
                children: (0, i.jsx)(p.nZ5, {
                  mainObjectId: String(
                    null === (o = x.meta) || void 0 === o ? void 0 : o.id,
                  ),
                  mainObjectType: k.OB.Album,
                  children: (0, i.jsx)($, {}),
                }),
              });
            let [l] = x.donations.items;
            if (l)
              return (0, i.jsx)(p.Ja5, {
                blockType: k.DC.Donations,
                blockId: p.aUg.DONATY,
                blockPosX: 1,
                blockPosY: 1,
                children: (0, i.jsx)(p.nZ5, {
                  objectType: k.OB.Donation,
                  objectId: l.artist.id,
                  objectPosX: 0,
                  objectPosY: 0,
                  objectsCount: 1,
                  mainObjectId: String(
                    null === (n = x.meta) || void 0 === n ? void 0 : n.id,
                  ),
                  mainObjectType: k.OB.Album,
                  children: (0, i.jsx)(S, { url: l.url }),
                }),
              });
          }),
          Z = (0, l.useMemo)(
            () =>
              x.isLoading || !x.meta || x.isRejected
                ? (0, i.jsx)(y.KC, { className: j().header, isActive: !0 })
                : (0, i.jsx)(y.hx, {
                    album: x.meta,
                    donationButton: F,
                    className: j().header,
                    onVersionClick: w ? K : void 0,
                  }),
            [F, x.isLoading, x.isRejected, x.meta, K, w],
          ),
          Y = (0, P.v)({
            element: (e, t) => {
              var a;
              if (e.data && e.type !== v.lf.TEXT)
                return (0, i.jsx)(B.RJ, {
                  withLightning: e.isBest && !e.data.isRemoved,
                  track: e.data,
                  position: e.position,
                  albumArtists:
                    null == x
                      ? void 0
                      : null === (a = x.meta) || void 0 === a
                        ? void 0
                        : a.artists,
                  playContextParams: m(t, {
                    contextData: {
                      type: N.A.Album,
                      meta: x.contextMeta,
                      from: L,
                      utmLink: E,
                    },
                    queueParams: {
                      index: e.positionInContext,
                      entityId: e.data.id,
                    },
                    loadContextMeta: !0,
                    entitiesData: f.unloadedEntitiesDataFromModels,
                  }),
                });
            },
            album: x,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            Z,
            (0, i.jsx)(q.L, {
              count: X,
              itemContentCallback: Y,
              getDataByRange: z,
              ariaLabel: V(
                { id: "entity-names.albums-tracks-list" },
                {
                  albumName:
                    (null === (a = x.meta) || void 0 === a
                      ? void 0
                      : a.title) || "",
                },
              ),
            }),
            (0, i.jsxs)("div", {
              className: j().footerContainer,
              children: [
                x.shouldShowLabel &&
                  (0, i.jsx)(ee, {
                    album: x,
                    size: "s",
                    weight: "normal",
                    className: ea().label,
                  }),
                (0, i.jsxs)("div", {
                  className: ea().carouselBlocks,
                  children: [
                    G &&
                      A &&
                      (null === (n = x.donations) || void 0 === n
                        ? void 0
                        : n.items) &&
                      (0, i.jsx)(p.Ja5, {
                        blockType: k.DC.Donations,
                        blockId: p.aUg.DONATY,
                        blockPosX: 1,
                        blockPosY: 2,
                        children: (0, i.jsx)(D, {
                          headingVariant: W,
                          className: ea().carouselContainer,
                          headerClassName: (0, _.W)(
                            ea().carouselBlock,
                            ea().carouselBlockHeader,
                          ),
                          containerClassName: ea().carouselBlock,
                        }),
                      }),
                    x.hasOtherAlbumVersions &&
                      (0, i.jsx)(I.wk, {
                        isShimmerVisible: x.isLoading,
                        isShimmerActive: !0,
                        className: ea().carouselContainer,
                        headerClassName: (0, _.W)(
                          ea().carouselBlock,
                          ea().carouselBlockHeader,
                        ),
                        containerClassName: ea().carouselBlock,
                        title: V({ id: "entity-names.other-album-versions" }),
                        albums: x.otherAlbumVersions,
                        headingRef: u,
                        headingVariant: W,
                        ...(0, s.BA)(s.Br.album.OTHER_VERSIONS_CAROUSEL),
                      }),
                    x.hasLatestGenreAlbums &&
                      (0, i.jsx)(I.wk, {
                        isShimmerVisible: x.isLatestGenreAlbumsLoading,
                        isShimmerActive: !0,
                        className: ea().carouselContainer,
                        headerClassName: (0, _.W)(
                          ea().carouselBlock,
                          ea().carouselBlockHeader,
                        ),
                        containerClassName: ea().carouselBlock,
                        title: V({ id: "entity-names.new-albums-in-genre" }),
                        albums:
                          null === (o = x.latestGenreAlbums) || void 0 === o
                            ? void 0
                            : o.items,
                        headingVariant: W,
                        ...(0, s.BA)(s.Br.album.GENRE_ALBUMS_CAROUSEL),
                      }),
                    x.hasOtherArtistAlbums &&
                      (0, i.jsx)(I.wk, {
                        isShimmerVisible: x.isOtherArtistAlbumsLoading,
                        isShimmerActive: !0,
                        className: ea().carouselContainer,
                        headerClassName: (0, _.W)(
                          ea().carouselBlock,
                          ea().carouselBlockHeader,
                        ),
                        containerClassName: ea().carouselBlock,
                        title: V({ id: "entity-names.other-albums-of-artist" }),
                        albums:
                          null === (d = x.otherArtistAlbums) || void 0 === d
                            ? void 0
                            : d.items,
                        headingVariant: W,
                        ...(0, s.BA)(s.Br.album.OTHER_ARTIST_ALBUMS_CAROUSEL),
                      }),
                  ],
                }),
                (0, i.jsx)(h.$_, { className: j().footer }),
              ],
            }),
          ],
        });
      });
      var en = a(15937),
        eo = a(63660),
        el = a(68208),
        es = a(24226),
        er = a(39307),
        ed = a(45200);
      let eu = (e) => {
        let { formatMessage: t } = (0, T.Z)(),
          { minutes: a, hours: i } = (0, p.Kv)(e),
          n = "";
        return (
          i > 0 && (n += t({ id: "time.hours" }, { hours: i })),
          a > 0 &&
            (n +=
              (n.length > 0 ? " " : "") +
              t({ id: "time.minutes-left" }, { minutes: a })),
          n
        );
      };
      var ec = a(90738),
        em = a.n(ec);
      let ev = (0, n.Pi)(() => {
          var e, t, a, n, s, d, u, c;
          let m = (0, l.useRef)(0),
            b = (0, l.useRef)(null),
            x = (0, p.iXn)(),
            {
              album: g,
              experiments: f,
              sonataState: A,
              settings: { isMobile: C },
              slides: _,
            } = (0, p.oR4)(),
            k = (null === (e = g.meta) || void 0 === e ? void 0 : e.isAudiobook)
              ? p.Rhz.AUDIOBOOK
              : p.Rhz.PODCAST,
            I = (null === (t = g.meta) || void 0 === t ? void 0 : t.isAudiobook)
              ? p.aUg.AUDIOBOOK
              : p.aUg.PODCAST,
            { from: L, utmLink: E } = (0, p.MhG)({
              pageId: k,
              blockId: I,
              contextType: N.A.Album,
              contextId: g.id,
            }),
            S = "/rewind2024/podcast/".concat(g.id),
            V = (0, p.s0h)(S),
            M = f.checkExperiment(p.peG.WebNextAlbumDisableTracks, "on"),
            D = (0, l.useId)(),
            { formatMessage: w } = (0, T.Z)(),
            U = (0, o.useSearchParams)(),
            z = (0, p.m5R)(),
            W =
              f.checkExperiment(p.peG.WebNextRewind2024, "on") &&
              f.checkExperiment(p.peG.WebNextRewind2024Podcast, "on") &&
              (null === (a = g.meta) || void 0 === a ? void 0 : a.isPodcast),
            X = (0, l.useMemo)(() => {
              let e = U.get(p.wxR.ACTIVE_TAB),
                t = R.y.findIndex((t) => t === e);
              return t >= 0 ? t : null;
            }, [U]),
            G = (0, es.useTabsState)(null != X ? X : 0),
            [K, F] = (0, l.useState)(R.y[G.value]),
            Y = (0, O.X)({ album: g });
          (0, l.useEffect)(
            () => () => {
              (m.current = 0), _.resetPodcast();
            },
            [g, _],
          );
          let H = (0, l.useMemo)(() => {
              var e;
              return W &&
                _.podcastSlidesLoadingState === p.Gui.RESOLVE &&
                (null === (e = _.podcastItems) || void 0 === e
                  ? void 0
                  : e.length)
                ? (0, i.jsx)(el.Button, {
                    className: em().rewindControl,
                    withRipple: !C,
                    withHover: !1,
                    radius: "xxxl",
                    size: "s",
                    color: "primary",
                    onClick: V,
                    variant: "default",
                    role: "link",
                    children: (0, i.jsx)(en.Z, { id: "rewind.button-title" }),
                  })
                : null;
            }, [
              C,
              W,
              V,
              null === (n = _.podcastItems) || void 0 === n ? void 0 : n.length,
              _.podcastSlidesLoadingState,
            ]),
            Q = (0, l.useMemo)(() => {
              var e, t;
              return (
                null === (e = g.meta) || void 0 === e ? void 0 : e.isFairyTale
              )
                ? {
                    about: w({ id: "non-music.fairytale-tab-about" }),
                    "track-list": w({ id: "non-music.audiobook-tab-tracks" }),
                  }
                : (
                      null === (t = g.meta) || void 0 === t
                        ? void 0
                        : t.isAudiobook
                    )
                  ? {
                      about: w({ id: "non-music.audiobook-tab-about" }),
                      "track-list": w({ id: "non-music.audiobook-tab-tracks" }),
                    }
                  : {
                      about: w({ id: "podcast.tab-about" }),
                      "track-list": w(
                        { id: "podcast.tab-tracks" },
                        { value: g.tracks.length },
                      ),
                    };
            }, [
              null === (s = g.meta) || void 0 === s ? void 0 : s.isAudiobook,
              null === (d = g.meta) || void 0 === d ? void 0 : d.isFairyTale,
              g.tracks.length,
              w,
            ]),
            J = (0, l.useMemo)(
              () => (e) => {
                var t;
                if (!G.onTabChange || e === G.value) return;
                G.onTabChange(e);
                let a = null !== (t = R.y[e]) && void 0 !== t ? t : ed.Q.ABOUT;
                F(a);
                let i = (0, p.rdz)(p.wxR.ACTIVE_TAB, a);
                i && z(i);
              },
              [G, z],
            ),
            $ = (e, t) =>
              (0, i.jsxs)("div", {
                className: em().infoBlock,
                children: [
                  (0, i.jsx)(Z.Caption, {
                    variant: "span",
                    type: "entity",
                    size: "m",
                    className: em().infoTitle,
                    children: e,
                  }),
                  (0, i.jsx)(Z.Caption, {
                    variant: "span",
                    type: "entity",
                    size: "m",
                    children: t,
                  }),
                ],
              }),
            et = eu(
              (null === (u = g.meta) || void 0 === u
                ? void 0
                : u.durationSec) || 0,
            ),
            ea = (0, l.useMemo)(() => {
              var e, t, a, n, o, l, s, r, d, u, c, m, v, b, p;
              let h =
                  Number(
                    null === (e = g.labels) || void 0 === e ? void 0 : e.length,
                  ) > 1
                    ? w({ id: "podcast.publishers-title" })
                    : w({ id: "podcast.publisher-title" }),
                x =
                  null === (t = g.labels) || void 0 === t
                    ? void 0
                    : t.map((e) => e.name).join(", "),
                f = w({ id: "podcast.age-limit" }),
                A =
                  Number(
                    null === (n = g.meta) || void 0 === n
                      ? void 0
                      : null === (a = n.artists) || void 0 === a
                        ? void 0
                        : a.length,
                  ) > 1
                    ? w({ id: "non-music.audiobook-artists" })
                    : w({ id: "non-music.audiobook-artist" }),
                C =
                  null === (l = g.meta) || void 0 === l
                    ? void 0
                    : null === (o = l.artists) || void 0 === o
                      ? void 0
                      : o.map((e) => e.name).join(", "),
                _ =
                  (null === (r = g.meta) || void 0 === r
                    ? void 0
                    : null === (s = r.artists) || void 0 === s
                      ? void 0
                      : s.length) ||
                  (null === (d = g.meta) || void 0 === d
                    ? void 0
                    : d.durationSec) ||
                  (null === (u = g.labels) || void 0 === u
                    ? void 0
                    : u.length) ||
                  g.isExplicit,
                T = C && $("".concat(A, ":"), String(C)),
                k =
                  (null === (c = g.meta) || void 0 === c
                    ? void 0
                    : c.durationSec) &&
                  $("".concat(w({ id: "time.duration" }), ":"), et),
                N = x && $("".concat(h, ":"), String(x)),
                y = $("".concat(f, ":"), "18+"),
                I = g.shouldShowLabel
                  ? (0, i.jsx)(ee, {
                      album: g,
                      size: "m",
                      weight: "medium",
                      className: em().label,
                    })
                  : N;
              return (0, i.jsx)(es.TabPanel, {
                name: 0,
                value: G.value,
                elementId: D,
                children: (0, i.jsxs)("div", {
                  className: em().contentAbout,
                  children: [
                    g.description &&
                      !!(null === (m = g.description) || void 0 === m
                        ? void 0
                        : m.length) &&
                      (0, i.jsx)(Z.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "m",
                        className: j().text,
                        children: (0, i.jsx)("span", {
                          dangerouslySetInnerHTML: {
                            __html: (0, eo.sanitizeDOM)(g.description),
                          },
                        }),
                      }),
                    _ &&
                      (0, i.jsxs)("div", {
                        className: j().text,
                        children: [
                          !!(null === (b = g.meta) || void 0 === b
                            ? void 0
                            : null === (v = b.artists) || void 0 === v
                              ? void 0
                              : v.length) && T,
                          (null === (p = g.meta) || void 0 === p
                            ? void 0
                            : p.durationSec) && k,
                          I,
                          g.isExplicit && y,
                        ],
                      }),
                  ],
                }),
              });
            }, [g, w, et, G.value, D]),
            ei = (0, r.V)(() =>
              g.isLoading || !g.meta || g.isRejected
                ? (0, i.jsx)(y.KC, { className: j().header, isActive: !0 })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(y.HZ, {
                        album: g.meta,
                        actionButton: H,
                        className: j().header,
                      }),
                      (0, i.jsx)(h.no, {
                        className: em().tabCarousel,
                        ...G,
                        onTabChange: J,
                        ref: b,
                        children: R.y.map((e, t) =>
                          (0, i.jsx)(
                            h.OK,
                            { className: em().tab, title: Q[e], value: t },
                            e,
                          ),
                        ),
                      }),
                      ea,
                    ],
                  }),
            );
          (0, l.useEffect)(() => {
            g.isResolved && (g.loadLastEpisodes(), g.getRelatedContent());
          }, [g, g.isResolved, g.loadLastEpisodes, g.getRelatedContent]);
          let ec =
              K === ed.Q.ABOUT &&
              (null === (c = g.meta) || void 0 === c ? void 0 : c.isPodcast) &&
              g.lastEpisodes.length > 0,
            ev =
              K === ed.Q.ABOUT &&
              g.relatedContent &&
              g.relatedContent.items &&
              g.relatedContent.items.length > 0,
            eb = (0, P.v)({
              element: (e, t) => {
                if (e.data && e.type !== v.lf.TEXT)
                  return (0, i.jsx)(B.FP, {
                    track: e.data,
                    viewType: B.cO.ALBUM,
                    position: e.position,
                    playContextParams: x(t, {
                      contextData: {
                        type: N.A.Album,
                        meta: g.contextMeta,
                        from: L,
                        utmLink: E,
                      },
                      queueParams: {
                        index: e.positionInContext,
                        entityId: e.data.id,
                      },
                      loadContextMeta: !0,
                      entitiesData: A.unloadedEntitiesDataFromModels,
                    }),
                  });
              },
              isNonMusic: !0,
              album: g,
            }),
            ep = M || K === ed.Q.ABOUT ? 0 : g.items.length || R.o,
            eh = (0, r.V)(() => {
              if (K === ed.Q.TRACKS) {
                var e, t, a;
                return (
                  null === (e = g.meta) || void 0 === e ? void 0 : e.isAudiobook
                )
                  ? w(
                      { id: "non-music.audiobook-list" },
                      {
                        albumName:
                          (null === (a = g.meta) || void 0 === a
                            ? void 0
                            : a.title) || "",
                      },
                    )
                  : w(
                      { id: "podcast.episodes-list" },
                      {
                        albumName:
                          (null === (t = g.meta) || void 0 === t
                            ? void 0
                            : t.title) || "",
                      },
                    );
              }
            }),
            ex = (0, r.V)(() =>
              M || K === ed.Q.ABOUT
                ? null
                : (0, i.jsx)(q.L, {
                    count: ep,
                    getDataByRange: Y,
                    itemContentCallback: eb,
                    role: "tabpanel",
                    ariaLabel: eh,
                  }),
            ),
            eg = W && _.podcastSlidesLoadingState === p.Gui.IDLE;
          return (
            "number" == typeof g.id &&
              eg &&
              (0, l.use)(_.getPodcastSlides({ podcastId: g.id })),
            (0, i.jsxs)(i.Fragment, {
              children: [
                ei,
                ex,
                (0, i.jsxs)("div", {
                  className: j().footerContainer,
                  children: [
                    ec && (0, i.jsx)(er.QG, { className: em().lastEpisodes }),
                    ev &&
                      (0, i.jsx)(er.$W, {
                        isShimmerVisible: g.isRelatedContentLoading,
                        isShimmerActive: !0,
                      }),
                    (0, i.jsx)(h.$_, { className: j().footer }),
                  ],
                }),
              ],
            })
          );
        }),
        eb = (0, n.Pi)((e) => {
          var t, a, n, C, _, T, k;
          let { albumId: N, trackId: y, preloadedAlbum: I } = e,
            { contentScrollRef: B, setContentScrollRef: R } = (0, p.$Y6)(),
            O = (0, o.useSearchParams)(),
            {
              experiments: P,
              album: L,
              disclaimer: E,
              track: S,
              sonataState: V,
            } = (0, p.oR4)(),
            M = (0, l.useMemo)(() => {
              var e;
              return {
                "--average-color-background": (0, p.XGV)(
                  null === (e = L.meta) || void 0 === e
                    ? void 0
                    : e.averageColor,
                ),
              };
            }, [
              null === (t = L.meta) || void 0 === t ? void 0 : t.averageColor,
            ]),
            { deprecationUrl: D, shouldRedirect: w } = (0, x.C)({
              albumId: N,
              deprecationTargetAlbumId: L.deprecationTargetAlbumId,
              trackId: y,
              realId:
                (null === (a = S.meta) || void 0 === a ? void 0 : a.id) === y
                  ? null === (n = S.meta) || void 0 === n
                    ? void 0
                    : n.realId
                  : void 0,
              searchParams: O,
            }),
            { href: U } = (0, p.zBm)(D),
            z = (0, v.jV)({ album: L.meta, shouldHistoryBack: !0 }),
            W = (0, p.RVp)(),
            X =
              (null === (C = L.meta) || void 0 === C ? void 0 : C.isNonMusic) &&
              W;
          A({
            albumId: N,
            trackId: y,
            isNonMusic: !!(null === (_ = L.meta) || void 0 === _
              ? void 0
              : _.isNonMusic),
          }),
            (0, l.useEffect)(() => {
              var e;
              (null === (e = L.meta) || void 0 === e
                ? void 0
                : e.isUnsafeLegal) && z();
            }, [
              null === (T = L.meta) || void 0 === T ? void 0 : T.isUnsafeLegal,
              z,
            ]),
            (0, l.useLayoutEffect)(
              () => (
                y && N && S.open({ trackId: y, albumId: Number(N) }),
                () => {
                  S.reset();
                }
              ),
              [N, y, S],
            ),
            (0, l.useEffect)(
              () => (
                L.id && L.id !== Number(N) && L.reset(V),
                () => {
                  L.reset(V);
                }
              ),
              [L, N, V],
            ),
            (0, p.NOh)(L.isResolved),
            (0, g.U)(L, S.isOpened, y);
          let G = (0, r.V)(() => (X ? (0, i.jsx)(ev, {}) : (0, i.jsx)(ei, {}))),
            { current: K } = (0, l.useRef)([
              (0, p.FsJ)(
                P.checkExperiment(p.peG.WebNextEntityTrailerOnboarding, "on"),
              ),
            ]);
          if (N && L.isNeededToLoad) {
            let e = Promise.allSettled([
              L.getData({
                albumId: Number(N),
                resumeStream: !1,
                preloadedAlbum: I,
                sonataState: V,
              }),
              L.getDonations({ albumId: Number(N) }),
            ]);
            (0, l.use)(e);
          }
          return (L.isNotFound && (0, o.notFound)(),
          w && (0, o.redirect)(U),
          (0, f.c)({ album: L }),
          L.isCacheNotFound)
            ? (0, i.jsx)(u.B, {})
            : (
                  null === (k = L.meta) || void 0 === k
                    ? void 0
                    : k.isLegalRejected
                )
              ? E.isRejected
                ? (0, i.jsx)(c.D, {})
                : (0, i.jsx)(b.em, { disclaimer: E })
              : (0, i.jsx)(p.Lh6, {
                  pageId: p.Rhz.ALBUM,
                  pageEntityId: N,
                  children: (0, i.jsx)(p.kZw, {
                    config: K,
                    children: (0, i.jsx)(p.e4N, {
                      children: (0, i.jsxs)(m.I7, {
                        scrollElement: B,
                        children: [
                          (0, i.jsx)(h.h4, {}),
                          (0, i.jsxs)(d.S, {
                            scrollableContainerRef: R,
                            className: j().root,
                            containerClassName: j().content,
                            scrollContentClassName: j().scrollContent,
                            ...(0, s.BA)(
                              X
                                ? s.Br.album.NON_MUSIC_ALBUM_PAGE
                                : s.Br.album.ALBUM_PAGE,
                            ),
                            children: [
                              (0, i.jsx)("div", {
                                className: j().averageColorBackground,
                                style: M,
                              }),
                              G,
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                });
        });
    },
    31996: function (e, t, a) {
      "use strict";
      a.d(t, {
        L: function () {
          return m;
        },
      });
      var i = a(75441),
        n = a(62569),
        o = a(65067),
        l = a(35846),
        s = a(26669),
        r = a(13534),
        d = a(69829),
        u = a.n(d);
      let c = (e) => {
          let {
              item: t,
              itemContentCallback: a,
              resizeObserver: n,
              scrollMargin: l,
            } = e,
            [r, d] = (0, s.z)();
          (0, o.useEffect)(
            () => (
              r && n && n.observe(r),
              () => {
                r && n && n.unobserve(r);
              }
            ),
            [r, n],
          );
          let c = {
            transform: "translate3d(0, ".concat(t.start - l, "px, 0)"),
          };
          return (0, i.jsx)(
            "div",
            {
              "data-index": t.index,
              className: u().virtualItem,
              ref: d,
              style: c,
              children: a(t.index),
            },
            t.key,
          );
        },
        m = (0, n.Pi)((e) => {
          let {
              count: t,
              getDataByRange: a,
              itemContentCallback: n,
              role: s = "region",
              ariaLabel: d,
            } = e,
            {
              virtualizer: m,
              setContainerRef: v,
              resizeObserver: b,
            } = (0, r.gi4)({ count: t, getEstimateSize: () => 56 });
          (0, o.useEffect)(() => {
            !m.isScrolling && m.range && a(m.range);
          }, [a, m.isScrolling, m.range]);
          let p = m.getTotalSize(),
            h = m.getVirtualItems();
          return (0, i.jsx)("div", {
            className: u().virtualScroll,
            style: { height: "".concat(p, "px") },
            ref: v,
            role: s,
            "aria-label": d,
            ...(0, l.BA)(l.r9.TRACK_LIST, !0),
            children: h.map((e) =>
              (0, i.jsx)(
                c,
                {
                  item: e,
                  itemContentCallback: n,
                  resizeObserver: b,
                  scrollMargin: m.options.scrollMargin,
                },
                e.key,
              ),
            ),
          });
        });
    },
    9730: function (e, t, a) {
      "use strict";
      a.d(t, {
        PromoLandingAlbumPage: function () {
          return X;
        },
      });
      var i,
        n,
        o = a(75441),
        l = a(32358),
        s = a(62569),
        r = a(98730),
        d = a(65067),
        u = a(14218),
        c = a(29088),
        m = a(30948),
        v = a(69947),
        b = a(73447),
        p = a(90378),
        h = a(13534),
        x = a(97141),
        g = a(31317),
        f = a(55065);
      let A = (e) => {
        let { redirectUrl: t } = e,
          a = (0, r.useSearchParams)();
        h.ZI7.every((e) => {
          let { queryKey: t } = e;
          return a.has(t);
        }) || (0, r.redirect)(t);
      };
      var C = a(69829),
        j = a.n(C),
        _ = a(64754),
        T = a.n(_),
        k = a(9317),
        N = a(84638),
        y = a(1150),
        I = a(36059),
        B = a(86576),
        R = a(65161),
        O = a(31996);
      ((i = n || (n = {})).TOP = "TOP"), (i.BOTTOM = "BOTTOM");
      var P = a(93093);
      let L = {
          MOBILE: {
            TEST: { [n.BOTTOM]: "R-A-14568769-4", [n.TOP]: "R-A-14568769-3" },
            PROD: { [n.BOTTOM]: "R-A-14568769-2", [n.TOP]: "R-A-14568769-1" },
          },
          DESKTOP: {
            TEST: { [n.BOTTOM]: "R-A-14568770-4", [n.TOP]: "R-A-14568770-3" },
            PROD: { [n.BOTTOM]: "R-A-14568770-2", [n.TOP]: "R-A-14568770-1" },
          },
        },
        E = (e) => {
          let {
            settings: { isMobile: t },
          } = (0, h.oR4)();
          return t
            ? {
                productionBlockId: L.MOBILE.PROD[e],
                testBlockId: L.MOBILE.TEST[e],
              }
            : {
                productionBlockId: L.DESKTOP.PROD[e],
                testBlockId: L.DESKTOP.TEST[e],
              };
        },
        S = (0, s.Pi)((e) => {
          let { variant: t, className: a } = e,
            { formatMessage: i } = (0, k.Z)(),
            n = (0, h.wLl)(),
            { productionBlockId: l, testBlockId: s } = E(t),
            r = (0, P.W)(() => {
              n.error("Cannot render promolanding advert banner", {
                productionBlockId: l,
                testBlockId: s,
              });
            });
          return (0, o.jsx)("div", {
            "aria-label": i({ id: "advert.banner" }),
            children: (0, o.jsx)(x.hd, {
              isAsync: !1,
              onError: r,
              productionBlockId: l,
              testBlockId: s,
              className: a,
            }),
          });
        });
      var V = a(41551),
        M = a.n(V);
      let D = (e) => {
        let { shouldPlaceAdvertOnBottom: t } = e;
        return (0, o.jsxs)("div", {
          className: (0, l.W)(
            j().footerContainer,
            j().footer,
            M().footerContainer,
          ),
          children: [
            t && (0, o.jsx)(S, { variant: n.BOTTOM, className: M().advert }),
            (0, o.jsx)(x.kB, { className: M().footer }),
          ],
        });
      };
      var w = a(5362);
      let U = (0, s.Pi)(() => {
          let { promolanding: e } = (0, h.oR4)();
          return e.isLoading || !e.meta || e.isRejected
            ? (0, o.jsx)(w.KC, { isActive: !0 })
            : (0, o.jsx)(w.E9, { album: e.meta });
        }),
        z = (e) => {
          let { shouldPlaceAdvertOnTop: t } = e;
          return (0, o.jsxs)("div", {
            className: (0, l.W)(j().header, M().header),
            children: [
              t && (0, o.jsx)(S, { variant: n.TOP, className: M().advert }),
              (0, o.jsx)(U, {}),
            ],
          });
        },
        W = (0, s.Pi)(() => {
          var e;
          let { user: t, promolanding: a, experiments: i } = (0, h.oR4)(),
            { isFreemium: n } = (0, h.NMB)(),
            { formatMessage: l } = (0, k.Z)(),
            { from: s, utmLink: r } = (0, h.MhG)({
              pageId: h.Rhz.ALBUM,
              blockId: h.aUg.ALBUM,
              contextType: N.A.Album,
              contextId: a.id,
            }),
            d = (0, B.X)({ album: a }),
            u = (0, h.iXn)(),
            c = i.checkExperiment(h.peG.WebNextAlbumDisableTracks, "on"),
            m = n || !t.isAuthorized,
            v = m && i.checkExperiment(h.peG.WebNextPromoLandingAdvert, "top"),
            p =
              m && i.checkExperiment(h.peG.WebNextPromoLandingAdvert, "bottom"),
            x = c ? 0 : a.items.length || I.o,
            g = (0, R.v)({
              element: (e, t) => {
                var i;
                if (e.data && e.type !== b.lf.TEXT)
                  return (0, o.jsx)(y.cG, {
                    withLightning: e.isBest && !e.data.isRemoved,
                    track: e.data,
                    position: e.position,
                    albumArtists:
                      null == a
                        ? void 0
                        : null === (i = a.meta) || void 0 === i
                          ? void 0
                          : i.artists,
                    playContextParams: u(t, {
                      contextData: {
                        type: N.A.Album,
                        meta: a.contextMeta,
                        from: s,
                        utmLink: r,
                        playDisliked: !0,
                      },
                      queueParams: { index: e.positionInContext },
                      loadContextMeta: !0,
                      entitiesData: a.state.unloadedEntitiesDataFromModels,
                    }),
                  });
              },
              album: a,
            });
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(z, { shouldPlaceAdvertOnTop: v }),
              (0, o.jsx)(O.L, {
                count: x,
                itemContentCallback: g,
                getDataByRange: d,
                ariaLabel: l(
                  { id: "entity-names.albums-tracks-list" },
                  {
                    albumName:
                      (null === (e = a.meta) || void 0 === e
                        ? void 0
                        : e.title) || "",
                  },
                ),
              }),
              (0, o.jsx)(D, { shouldPlaceAdvertOnBottom: p }),
            ],
          });
        }),
        X = (0, s.Pi)((e) => {
          var t, a, i, n;
          let { albumId: s, preloadedAlbum: C, isActive: _ } = e,
            { experiments: k, disclaimer: N, promolanding: y } = (0, h.oR4)(),
            { contentScrollRef: I, setContentScrollRef: B } = (0, h.$Y6)(),
            { href: R } = (0, h.zBm)(
              "/album/".concat(
                null == C
                  ? void 0
                  : null === (t = C.deprecation) || void 0 === t
                    ? void 0
                    : t.targetAlbumId,
              ),
            ),
            { href: O } = (0, h.zBm)(
              "/album/".concat(y.deprecationTargetAlbumId),
            ),
            { href: P } = (0, h.zBm)("/album/".concat(s)),
            L = (0, u.V)(() => {
              if (C) {
                var e, t;
                return (
                  (null === (e = C.deprecation) || void 0 === e
                    ? void 0
                    : e.targetAlbumId) &&
                  (null === (t = C.deprecation) || void 0 === t
                    ? void 0
                    : t.targetAlbumId) !== Number(s)
                );
              }
              return (
                y.deprecationTargetAlbumId &&
                y.deprecationTargetAlbumId !== Number(s)
              );
            }),
            E = (0, u.V)(() =>
              C && L ? R : L && y.deprecationTargetAlbumId ? O : P,
            ),
            S = (0, d.useMemo)(() => {
              var e;
              return {
                "--average-color-background": (0, h.XGV)(
                  null === (e = y.meta) || void 0 === e
                    ? void 0
                    : e.averageColor,
                ),
              };
            }, [
              null === (a = y.meta) || void 0 === a ? void 0 : a.averageColor,
            ]),
            V = (0, b.jV)({ album: y.meta, shouldHistoryBack: !0 });
          return ((0, f.c)({ album: y }),
          (0, h.NOh)(y.isResolved),
          (0, g.U)(y, !1),
          (0, d.useEffect)(() => {
            var e;
            (null === (e = y.meta) || void 0 === e
              ? void 0
              : e.isUnsafeLegal) && V();
          }, [
            V,
            null === (i = y.meta) || void 0 === i ? void 0 : i.isUnsafeLegal,
          ]),
          (!k.checkExperiment(h.peG.WebNextPromoLanding, "on") ||
            L ||
            y.promoCampaign.isPromoCampaignInactive) &&
            (0, r.redirect)(E),
          A({ redirectUrl: E }),
          s &&
            y.promoCampaign.isNeededToLoad &&
            (0, d.use)(
              y.getDataByCampaign({
                albumId: Number(s),
                preloadedAlbum: C,
                isActive: _,
              }),
            ),
          null === (n = y.meta) || void 0 === n ? void 0 : n.isLegalRejected)
            ? N.isRejected
              ? (0, o.jsx)(m.D, {})
              : (0, o.jsx)(p.em, { disclaimer: N })
            : (0, o.jsx)(h.Lh6, {
                pageId: h.Rhz.ALBUM,
                pageEntityId: s,
                children: (0, o.jsxs)(v.I7, {
                  scrollElement: I,
                  children: [
                    (0, o.jsx)(x.h4, { variant: x.bm.PROMO_LANDING }),
                    (0, o.jsxs)(c.S, {
                      scrollableContainerRef: B,
                      className: j().root,
                      containerClassName: j().content,
                      scrollContentClassName: j().scrollContent,
                      children: [
                        (0, o.jsx)("div", {
                          className: (0, l.W)(
                            j().averageColorBackground,
                            T().averageColorBackground,
                          ),
                          style: S,
                        }),
                        (0, o.jsx)(W, {}),
                      ],
                    }),
                  ],
                }),
              });
        });
    },
    39307: function (e, t, a) {
      "use strict";
      a.d(t, {
        QG: function () {
          return v.LastEpisodes;
        },
        $W: function () {
          return b.RelatedContent;
        },
        fd: function () {
          return o;
        },
        JP: function () {
          return m;
        },
      });
      var i = a(22874),
        n = a(72783);
      let o = i.V5.model("RelatedContentItem", {
        id: i.V5.string,
        type: i.V5.string,
        title: i.V5.string,
        albums: i.V5.array(n.ug),
      });
      var l = a(94123),
        s = a(1150),
        r = a(73447),
        d = a(40892);
      let u = i.V5.compose(
          i.V5.model("VolumeItemTrack", {
            type: i.V5.maybe(i.V5.enumeration(Object.values(l.V))),
            id: i.V5.union(i.V5.string, i.V5.number),
            data: i.V5.maybeNull(s.le),
            position: i.V5.maybe(i.V5.number),
            positionInContext: i.V5.number,
            isBest: i.V5.maybe(i.V5.boolean),
            hasEverFinished: i.V5.maybe(i.V5.boolean),
          }),
          d.fu,
        )
          .actions((e) => ({
            updateEverFinished: (t) => {
              e.hasEverFinished = t;
            },
          }))
          .named("VolumeItemTrack"),
        c = i.V5.compose(
          i.V5.model("VolumeItemText", {
            type: i.V5.literal(r.lf.TEXT),
            data: i.V5.maybeNull(i.V5.number),
          }),
          d.fu,
        ),
        m = i.V5.union(c, u);
      var v = a(8195),
        b = a(9741);
    },
    8195: function (e, t, a) {
      "use strict";
      a.d(t, {
        LastEpisodes: function () {
          return b;
        },
      });
      var i = a(75441),
        n = a(32358),
        o = a(62569),
        l = a(65067),
        s = a(9317),
        r = a(84638),
        d = a(1150),
        u = a(13534),
        c = a(97141),
        m = a(78482),
        v = a.n(m);
      let b = (0, o.Pi)((e) => {
        let { className: t, headingVariant: a = "h2" } = e,
          { formatMessage: o } = (0, s.Z)(),
          { album: m, sonataState: b } = (0, u.oR4)(),
          { from: p, utmLink: h } = (0, u.MhG)({
            pageId: u.Rhz.PODCAST,
            blockId: u.aUg.PODCAST,
            contextId: m.id,
            contextType: r.A.Album,
          }),
          x = (0, l.useMemo)(
            () =>
              m.lastEpisodes.map((e, t) =>
                m.isResolved && e.data
                  ? (0, i.jsx)(
                      d.FP,
                      {
                        track: e.data,
                        playContextParams: {
                          contextData: {
                            type: r.A.Album,
                            meta: m.contextMeta,
                            from: p,
                            utmLink: h,
                          },
                          queueParams: {
                            index: e.positionInContext,
                            entityId: e.data.id,
                          },
                          loadContextMeta: !0,
                          entitiesData: b.unloadedEntitiesDataFromModels,
                        },
                      },
                      e.data.id,
                    )
                  : (0, i.jsx)(
                      c.DX,
                      {
                        isActive: !0,
                        className: v().shimmerItem,
                        variant: u.Lxt.ALBUM,
                      },
                      t,
                    ),
              ),
            [
              m.lastEpisodes,
              m.isResolved,
              m.contextMeta,
              p,
              h,
              b.unloadedEntitiesDataFromModels,
            ],
          );
        return (0, i.jsxs)("div", {
          className: (0, n.W)(t, v().root),
          children: [
            (0, i.jsx)(c.ti, {
              headingVariant: a,
              className: v().blockHeader,
              title: o({ id: "entity-names.podcast-last-episodes" }),
            }),
            (0, i.jsx)("div", {
              role: "list",
              "aria-label": o({ id: "podcast.last-episodes-list" }),
              tabIndex: 0,
              children: x,
            }),
          ],
        });
      });
    },
    9741: function (e, t, a) {
      "use strict";
      a.d(t, {
        RelatedContent: function () {
          return b;
        },
      });
      var i = a(75441),
        n = a(32358),
        o = a(62569),
        l = a(35846),
        s = a(72783),
        r = a(13534),
        d = a(97141);
      let u = {
          AUTHORS_BOOKS: "authors-books",
          CATEGORY_ALBUMS: "category-albums",
          LABELS_ALBUMS: "labels-albums",
          SIMILAR_ALBUMS: "similar-albums",
        },
        c = (e) => {
          let t = Object.keys(u).find((t) => u[t] === e);
          return l.QM.album[t] || "";
        };
      var m = a(85242),
        v = a.n(m);
      let b = (0, o.Pi)((e) => {
        var t, a;
        let {
            isShimmerVisible: o,
            isShimmerActive: u,
            className: m,
            headingVariant: b = "h2",
          } = e,
          { album: p } = (0, r.oR4)();
        return (0, i.jsx)("div", {
          className: (0, n.W)(m, v().root),
          children:
            null === (a = p.relatedContent) || void 0 === a
              ? void 0
              : null === (t = a.items) || void 0 === t
                ? void 0
                : t.map((e, t) => {
                    let a = c(e.type);
                    return (0, i.jsx)(
                      d.HY,
                      {
                        headingVariant: b,
                        title: e.title,
                        isShimmerVisible: o,
                        isShimmerActive: u,
                        className: (0, n.W)(v().root, m),
                        containerClassName: v().carousel,
                        headerClassName: v().header,
                        ...(a ? (0, l.BA)(a) : {}),
                        children: e.albums.map((e) =>
                          (0, i.jsx)(
                            s.rf,
                            {
                              album: e,
                              contentLinesCount: 3,
                              withLikesCount: !0,
                              withAddition: !1,
                            },
                            e.id,
                          ),
                        ),
                      },
                      "".concat(e.type).concat(t),
                    );
                  }),
        });
      });
    },
    86505: function (e, t, a) {
      "use strict";
      a.d(t, {
        l: function () {
          return d;
        },
        B: function () {
          return x;
        },
      });
      var i = a(75441),
        n = a(69756),
        o = a(17392),
        l = a(97141),
        s = a(5486),
        r = a.n(s);
      let d = (e) => {
        let { message: t } = e;
        return (0, i.jsx)(l.Yj, {
          cover: (0, i.jsx)(n.Icon, {
            variant: "unavailable",
            size: "xs",
            className: r().icon,
          }),
          message: (0, i.jsx)(o.Caption, {
            className: r().message,
            variant: "div",
            type: "controls",
            size: "m",
            children: t,
          }),
        });
      };
      var u = a(62569),
        c = a(65067),
        m = a(15937),
        v = a(68208),
        b = a(13534),
        p = a(29831),
        h = a.n(p);
      let x = (0, u.Pi)(() => {
        let { slam: e } = (0, b.oR4)(),
          t = (0, b.s0h)("/mymusic/downloads/tracks"),
          a = (0, b.s0h)("/settings"),
          l = (0, c.useCallback)(() => {
            window.location.href = "/";
          }, []),
          s = (0, c.useMemo)(
            () =>
              e.isOfflineModeEnabled
                ? (0, i.jsx)(m.Z, { id: "offline.offline-mode-enabled" })
                : (0, i.jsx)(m.Z, { id: "offline.no-internet-connection" }),
            [e.isOfflineModeEnabled],
          ),
          r = (0, c.useMemo)(
            () =>
              e.isOfflineModeEnabled
                ? (0, i.jsx)(v.Button, {
                    onClick: a,
                    className: h().button,
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, i.jsx)(o.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, i.jsx)(m.Z, {
                        id: "offline.disable-offline-mode",
                      }),
                    }),
                  })
                : (0, i.jsx)(v.Button, {
                    onClick: l,
                    className: h().button,
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, i.jsx)(o.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, i.jsx)(m.Z, {
                        id: "page-error.restart-app-button",
                      }),
                    }),
                  }),
            [l, a, e.isOfflineModeEnabled],
          );
        return (0, i.jsx)("div", {
          className: h().root,
          children: (0, i.jsxs)("div", {
            className: h().container,
            children: [
              (0, i.jsx)(n.Icon, {
                className: h().icon,
                variant: "offline",
                size: "xxl",
              }),
              (0, i.jsx)(o.Heading, {
                className: h().title,
                variant: "div",
                size: "xs",
                children: s,
              }),
              (0, i.jsx)(o.Caption, {
                className: h().text,
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: (0, i.jsx)(m.Z, {
                  id: "offline.listen-downloaded-content",
                }),
              }),
              (0, i.jsxs)("div", {
                className: h().buttons,
                children: [
                  r,
                  (0, i.jsx)(v.Button, {
                    color: "primary",
                    onClick: t,
                    role: "link",
                    size: "l",
                    radius: "xxxl",
                    className: h().button,
                    children: (0, i.jsx)(m.Z, {
                      id: "interface-actions.go-to-collection",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      });
    },
    75239: function (e) {
      e.exports = { popover: "AlbumDonationMenu_popover__Fswfa" };
    },
    78282: function (e) {
      e.exports = {
        root: "AlbumDonationMenuItem_root__Ajw_w",
        cover: "AlbumDonationMenuItem_cover__Gg8_a",
        image: "AlbumDonationMenuItem_image__AI5zU",
      };
    },
    73552: function (e) {
      e.exports = {
        carouselBlocks: "AlbumContent_carouselBlocks__bOsTV",
        carouselBlock: "AlbumContent_carouselBlock__QhSlm",
        carouselBlockHeader: "AlbumContent_carouselBlockHeader__Liibv",
        carouselContainer: "AlbumContent_carouselContainer__Y1M_e",
        label: "AlbumContent_label__2jz4j",
      };
    },
    90738: function (e) {
      e.exports = {
        tabCarousel: "NonMusicContent_tabCarousel__EBHWC",
        tab: "NonMusicContent_tab__LIh_U",
        contentAbout: "NonMusicContent_contentAbout__BMIP5",
        infoBlock: "NonMusicContent_infoBlock__IyjXA",
        infoTitle: "NonMusicContent_infoTitle__Wf9EC",
        lastEpisodes: "NonMusicContent_lastEpisodes__Xa8Xp",
        rewindControl: "NonMusicContent_rewindControl__7tncY",
        label: "NonMusicContent_label__9GlIS",
      };
    },
    69829: function (e) {
      e.exports = {
        root: "CommonAlbumPage_root__E8c_3",
        content: "CommonAlbumPage_content__vRSnu",
        scrollContent: "CommonAlbumPage_scrollContent__0XS83",
        header: "CommonAlbumPage_header__jS_be",
        text: "CommonAlbumPage_text__kqBSb",
        footerContainer: "CommonAlbumPage_footerContainer__JvjKN",
        footer: "CommonAlbumPage_footer__dBXP4",
        averageColorBackground: "CommonAlbumPage_averageColorBackground__hs1_3",
        virtualScroll: "CommonAlbumPage_virtualScroll__Sc_gs",
        virtualItem: "CommonAlbumPage_virtualItem__yhvPB",
        label: "CommonAlbumPage_label__TErtx",
        important: "CommonAlbumPage_important__GXaZH",
        labelLink: "CommonAlbumPage_labelLink__v4EnM",
      };
    },
    64754: function (e) {
      e.exports = {
        averageColorBackground:
          "PromoLandingAlbumPage_averageColorBackground__QcQaQ",
      };
    },
    41551: function (e) {
      e.exports = {
        header: "PromoLandingAlbumPageContent_header__olZnY",
        advert: "PromoLandingAlbumPageContent_advert__V34EQ",
        footerContainer: "PromoLandingAlbumPageContent_footerContainer__QiHrX",
        footer: "PromoLandingAlbumPageContent_footer__ICBBF",
      };
    },
    57535: function (e) {
      e.exports = { root: "Shimmer_root__NvUMY" };
    },
    50569: function (e) {
      e.exports = { root: "TextVolume_root__wxSaK" };
    },
    78482: function (e) {
      e.exports = {
        root: "LastEpisodes_root__4JPKj",
        blockHeader: "LastEpisodes_blockHeader__se7bd",
        shimmerItem: "LastEpisodes_shimmerItem__Iirx5",
      };
    },
    85242: function (e) {
      e.exports = {
        root: "RelatedContent_root__Dl1Nr",
        carousel: "RelatedContent_carousel__pmv5c",
        header: "RelatedContent_header__527S3",
      };
    },
    5486: function (e) {
      e.exports = {
        icon: "NotificationDownloadError_icon__r2AWx",
        message: "NotificationDownloadError_message__WwjsI",
      };
    },
    29831: function (e) {
      e.exports = {
        root: "Offline_root__IxjsY",
        container: "Offline_container__2V5Vo",
        icon: "Offline_icon__jDmpJ",
        title: "Offline_title__Y2CtW",
        text: "Offline_text__Nhult",
        buttons: "Offline_buttons__ZOFI7",
        button: "Offline_button__QSA_j",
      };
    },
  },
]);
