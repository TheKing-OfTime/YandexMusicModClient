(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9579],
  {
    17197: function (t, e, o) {
      Promise.resolve().then(o.bind(o, 84203));
    },
    84203: function (t, e, o) {
      "use strict";
      o.r(e);
      var i = o(75441),
        n = o(98730),
        a = o(80316);
      e.default = () => {
        let t = (0, n.useSearchParams)().get("playlistId");
        return (
          t || (0, n.notFound)(),
          (0, i.jsx)(a.ws, { params: { playlistId: t } })
        );
      };
    },
    80316: function (t, e, o) {
      "use strict";
      o.d(e, {
        ws: function () {
          return l.PlaylistPersonalPage;
        },
        uD: function () {
          return r;
        },
      });
      var i = o(22874),
        n = o(62726),
        a = o(13534),
        s = o(40892);
      let r = i.V5.compose(
        i.V5.model("PlaylistPersonalPage", {
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          playlistUuid: i.V5.maybeNull(i.V5.string),
          isReady: i.V5.optional(i.V5.boolean, !1),
          dummyCoverUrl: i.V5.maybe(i.V5.string),
          dummyDescription: i.V5.maybe(i.V5.string),
          title: i.V5.maybe(i.V5.string),
        }),
        s.fu,
      )
        .views((t) => ({
          get isNotFound() {
            let e =
              t.errorStatusCode === n.CN.NOT_FOUND ||
              t.errorStatusCode === n.CN.BAD_REQUEST;
            return t.loadingState === a.Gui.REJECT && e;
          },
        }))
        .actions((t) => ({
          getPlaylistPersonalDetails: (0, i.ls)(function* (e) {
            if (!(0, i.fh)(t)) return;
            let { playlistsResource: o, modelActionsLogger: s } = (0, i.dU)(t);
            if (t.loadingState !== a.Gui.PENDING)
              try {
                var r, l;
                t.loadingState = a.Gui.PENDING;
                let i = yield o.getPlaylistPersonal({ playlistId: e });
                if (
                  (null === (r = i.error) || void 0 === r ? void 0 : r.name) ===
                  "no-such-playlist"
                ) {
                  (t.errorStatusCode = n.CN.NOT_FOUND),
                    (t.loadingState = a.Gui.REJECT);
                  return;
                }
                (t.isReady = i.ready),
                  (t.playlistUuid = i.data.playlistUuid),
                  (t.dummyCoverUrl =
                    null === (l = i.data.dummyCover) || void 0 === l
                      ? void 0
                      : l.uri),
                  (t.dummyDescription = i.data.dummyDescription),
                  (t.title = i.data.title),
                  t.loadingState !== a.Gui.IDLE &&
                    (t.loadingState = a.Gui.RESOLVE);
              } catch (e) {
                s.error(e),
                  e instanceof n.du &&
                    (e.statusCode === n.CN.NOT_FOUND ||
                      e.statusCode === n.CN.BAD_REQUEST) &&
                    (t.errorStatusCode = n.CN.NOT_FOUND),
                  t.loadingState !== a.Gui.IDLE &&
                    (t.loadingState = a.Gui.REJECT);
              }
          }),
          reset() {
            (t.loadingState = a.Gui.IDLE),
              (t.errorStatusCode = null),
              (t.isReady = !1),
              (t.playlistUuid = null),
              (t.dummyCoverUrl = void 0),
              (t.dummyDescription = void 0),
              (t.title = void 0);
          },
        }));
      o(72935), o(75441), o(35551);
      var l = o(40304);
    },
    72935: function (t, e, o) {
      "use strict";
      o.d(e, {
        PlaylistPersonalDummyPage: function () {
          return c;
        },
      });
      var i = o(75441),
        n = o(32358),
        a = o(62569),
        s = o(17392),
        r = o(13534),
        l = o(97141),
        u = o(13446),
        d = o.n(u);
      let c = (0, a.Pi)(() => {
        let {
          playlistPersonal: { dummyCoverUrl: t, dummyDescription: e, title: o },
        } = (0, r.oR4)();
        return (0, i.jsxs)("div", {
          className: d().root,
          children: [
            (0, i.jsx)(l.h4, {}),
            (0, i.jsx)(l.BE, {
              src: t,
              size: 200,
              fit: "cover",
              withAvatarReplace: !0,
              "aria-hidden": !0,
              className: d().cover,
            }),
            o &&
              (0, i.jsx)(s.Heading, {
                className: (0, n.W)(d().title, d().important),
                variant: "h1",
                size: "xs",
                children: o,
              }),
            e &&
              (0, i.jsx)(s.Caption, {
                className: (0, n.W)(d().text, d().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: e,
              }),
          ],
        });
      });
    },
    40304: function (t, e, o) {
      "use strict";
      o.d(e, {
        PlaylistPersonalPage: function () {
          return u;
        },
      });
      var i = o(75441),
        n = o(62569),
        a = o(98730),
        s = o(65067),
        r = o(13534),
        l = o(72935);
      let u = (0, n.Pi)((t) => {
        let { params: e, searchParams: o } = t,
          { playlistPersonal: n } = (0, r.oR4)(),
          { href: u } = (0, r.zBm)(
            (0, r.rDv)(
              "/playlists/".concat(n.playlistUuid),
              new URLSearchParams(o),
            ),
          );
        if (
          ((0, s.useEffect)(() => {
            n.isNeededToLoad && n.getPlaylistPersonalDetails(e.playlistId);
          }, [n.isNeededToLoad, e.playlistId, n]),
          (0, s.useEffect)(
            () => () => {
              n.reset();
            },
            [n],
          ),
          (0, r.NOh)(n.isResolved),
          (n.isNotFound || n.isRejected) && (0, a.notFound)(),
          n.isResolved && !n.isReady)
        )
          return (
            n.dummyDescription || (0, a.notFound)(),
            (0, i.jsx)(l.PlaylistPersonalDummyPage, {})
          );
        n.isResolved && n.isReady && (0, a.redirect)(u);
      });
    },
    35551: function (t, e, o) {
      "use strict";
      o.d(e, {
        T: function () {
          return i.NotFound;
        },
      });
      var i = o(15898);
    },
    15898: function (t, e, o) {
      "use strict";
      o.d(e, {
        NotFound: function () {
          return p;
        },
      });
      var i = o(75441),
        n = o(32358),
        a = o(62569),
        s = o(15937),
        r = o(68208),
        l = o(69756),
        u = o(17392),
        d = o(13534),
        c = o(97141),
        _ = o(35129),
        m = o.n(_);
      let p = (0, a.Pi)((t) => {
        let { className: e } = t,
          { contentRef: o } = (0, d.$Y6)(),
          a = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, i.jsxs)("div", {
            className: (0, n.W)(m().root, { [m().root_desktop]: !o }, e),
            children: [
              (0, i.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: m().navigation,
                withForwardControl: !1,
              }),
              (0, i.jsxs)("div", {
                className: m().content,
                children: [
                  (0, i.jsx)(l.Icon, {
                    className: m().icon,
                    variant: "musicLogo",
                  }),
                  (0, i.jsx)(u.Heading, {
                    className: (0, n.W)(m().title, m().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, i.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, i.jsx)(u.Caption, {
                    className: (0, n.W)(m().text, m().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, i.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, i.jsx)(r.Button, {
                    onClick: a,
                    className: m().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, i.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, i.jsx)(s.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    13446: function (t) {
      t.exports = {
        root: "PlaylistPersonalDummyPage_root__tGxHG",
        cover: "PlaylistPersonalDummyPage_cover__XcCD1",
        title: "PlaylistPersonalDummyPage_title__ZSf9O",
        important: "PlaylistPersonalDummyPage_important__uEHGe",
        text: "PlaylistPersonalDummyPage_text__ci30d",
      };
    },
    35129: function (t) {
      t.exports = {
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
    40918: function (t, e, o) {
      "use strict";
      o.d(e, {
        d: function () {
          return a;
        },
      });
      var i = o(27198),
        n = o(98151);
      class a extends n.e {
        constructor(t, e) {
          super(t, {
            code: "E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE",
            cause: e.cause,
          }),
            (0, i._)(this, "name", "HttpErrorException"),
            (0, i._)(this, "statusCode", void 0),
            (this.statusCode = e.statusCode),
            Object.setPrototypeOf(this, a.prototype);
        }
      }
    },
    98151: function (t, e, o) {
      "use strict";
      o.d(e, {
        e: function () {
          return a;
        },
      });
      var i = o(27198),
        n = o(25534);
      class a extends n.y {
        constructor(
          t = "Http Client error",
          { code: e = "E_HTTP_CLIENT", ...o } = {},
        ) {
          super(t, { code: e, ...o }),
            (0, i._)(this, "name", "HttpException"),
            Object.setPrototypeOf(this, a.prototype);
        }
      }
    },
    62726: function (t, e, o) {
      "use strict";
      o.d(e, {
        CN: function () {
          return i.C;
        },
        du: function () {
          return a.d;
        },
        eY: function () {
          return n.e;
        },
      });
      var i = o(470),
        n = o(98151),
        a = o(40918);
    },
    470: function (t, e, o) {
      "use strict";
      var i, n;
      o.d(e, {
        C: function () {
          return i;
        },
      }),
        ((n = i || (i = {}))[(n.NOT_FOUND = 404)] = "NOT_FOUND"),
        (n[(n.BAD_REQUEST = 400)] = "BAD_REQUEST"),
        (n[(n.REQUEST_TIMEOUT = 408)] = "REQUEST_TIMEOUT"),
        (n[(n.PRECONDITION_FAILED = 412)] = "PRECONDITION_FAILED"),
        (n[(n.TEAPOT = 418)] = "TEAPOT");
    },
  },
  function (t) {
    t.O(
      0,
      [9876, 5970, 8580, 7138, 5453, 7873, 9282, 7141, 892, 7058, 6158, 1744],
      function () {
        return t((t.s = 17197));
      },
    ),
      (_N_E = t.O());
  },
]);
