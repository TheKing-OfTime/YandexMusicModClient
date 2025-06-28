(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4360],
  {
    97751: function (e, o, n) {
      Promise.resolve().then(n.bind(n, 37667)),
        Promise.resolve().then(n.bind(n, 38861)),
        Promise.resolve().then(n.bind(n, 72935)),
        Promise.resolve().then(n.bind(n, 40304)),
        Promise.resolve().then(n.bind(n, 85739)),
        Promise.resolve().then(n.bind(n, 88318)),
        Promise.resolve().then(n.bind(n, 54547)),
        Promise.resolve().then(n.bind(n, 9648)),
        Promise.resolve().then(n.bind(n, 94226)),
        Promise.resolve().then(n.bind(n, 17304)),
        Promise.resolve().then(n.bind(n, 70447)),
        Promise.resolve().then(n.bind(n, 80625)),
        Promise.resolve().then(n.bind(n, 22094)),
        Promise.resolve().then(n.bind(n, 60517)),
        Promise.resolve().then(n.bind(n, 81052)),
        Promise.resolve().then(n.bind(n, 96720)),
        Promise.resolve().then(n.bind(n, 98549)),
        Promise.resolve().then(n.bind(n, 35277)),
        Promise.resolve().then(n.bind(n, 48973)),
        Promise.resolve().then(n.bind(n, 34708)),
        Promise.resolve().then(n.bind(n, 32654)),
        Promise.resolve().then(n.bind(n, 58364)),
        Promise.resolve().then(n.bind(n, 60441)),
        Promise.resolve().then(n.bind(n, 70770)),
        Promise.resolve().then(n.bind(n, 56577)),
        Promise.resolve().then(n.bind(n, 77909)),
        Promise.resolve().then(n.bind(n, 69959)),
        Promise.resolve().then(n.bind(n, 22093)),
        Promise.resolve().then(n.bind(n, 77828)),
        Promise.resolve().then(n.bind(n, 27817)),
        Promise.resolve().then(n.bind(n, 91377)),
        Promise.resolve().then(n.bind(n, 44878)),
        Promise.resolve().then(n.bind(n, 55496)),
        Promise.resolve().then(n.bind(n, 82937)),
        Promise.resolve().then(n.bind(n, 90239)),
        Promise.resolve().then(n.bind(n, 29073)),
        Promise.resolve().then(n.bind(n, 66511)),
        Promise.resolve().then(n.bind(n, 57750)),
        Promise.resolve().then(n.bind(n, 52727)),
        Promise.resolve().then(n.bind(n, 74833)),
        Promise.resolve().then(n.bind(n, 74212)),
        Promise.resolve().then(n.bind(n, 19867)),
        Promise.resolve().then(n.bind(n, 57905)),
        Promise.resolve().then(n.bind(n, 79066)),
        Promise.resolve().then(n.bind(n, 627)),
        Promise.resolve().then(n.bind(n, 35999)),
        Promise.resolve().then(n.bind(n, 65164)),
        Promise.resolve().then(n.bind(n, 54701)),
        Promise.resolve().then(n.bind(n, 57307)),
        Promise.resolve().then(n.bind(n, 42469)),
        Promise.resolve().then(n.bind(n, 58410)),
        Promise.resolve().then(n.bind(n, 6575)),
        Promise.resolve().then(n.bind(n, 15826)),
        Promise.resolve().then(n.bind(n, 83425)),
        Promise.resolve().then(n.bind(n, 79815)),
        Promise.resolve().then(n.bind(n, 82944)),
        Promise.resolve().then(n.bind(n, 53516)),
        Promise.resolve().then(n.bind(n, 40230)),
        Promise.resolve().then(n.bind(n, 20915)),
        Promise.resolve().then(n.bind(n, 24840)),
        Promise.resolve().then(n.bind(n, 37109)),
        Promise.resolve().then(n.bind(n, 72716)),
        Promise.resolve().then(n.bind(n, 72276)),
        Promise.resolve().then(n.bind(n, 46746)),
        Promise.resolve().then(n.bind(n, 89773)),
        Promise.resolve().then(n.bind(n, 21111)),
        Promise.resolve().then(n.bind(n, 47129)),
        Promise.resolve().then(n.bind(n, 31168)),
        Promise.resolve().then(n.bind(n, 15898));
    },
    72935: function (e, o, n) {
      "use strict";
      n.d(o, {
        PlaylistPersonalDummyPage: function () {
          return P;
        },
      });
      var s = n(75441),
        i = n(32358),
        t = n(62569),
        r = n(17392),
        l = n(13534),
        d = n(97141),
        a = n(13446),
        m = n.n(a);
      let P = (0, t.Pi)(() => {
        let {
          playlistPersonal: { dummyCoverUrl: e, dummyDescription: o, title: n },
        } = (0, l.oR4)();
        return (0, s.jsxs)("div", {
          className: m().root,
          children: [
            (0, s.jsx)(d.h4, {}),
            (0, s.jsx)(d.BE, {
              src: e,
              size: 200,
              fit: "cover",
              withAvatarReplace: !0,
              "aria-hidden": !0,
              className: m().cover,
            }),
            n &&
              (0, s.jsx)(r.Heading, {
                className: (0, i.W)(m().title, m().important),
                variant: "h1",
                size: "xs",
                children: n,
              }),
            o &&
              (0, s.jsx)(r.Caption, {
                className: (0, i.W)(m().text, m().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: o,
              }),
          ],
        });
      });
    },
    40304: function (e, o, n) {
      "use strict";
      n.d(o, {
        PlaylistPersonalPage: function () {
          return a;
        },
      });
      var s = n(75441),
        i = n(62569),
        t = n(98730),
        r = n(65067),
        l = n(13534),
        d = n(72935);
      let a = (0, i.Pi)((e) => {
        let { params: o, searchParams: n } = e,
          { playlistPersonal: i } = (0, l.oR4)(),
          { href: a } = (0, l.zBm)(
            (0, l.rDv)(
              "/playlists/".concat(i.playlistUuid),
              new URLSearchParams(n),
            ),
          );
        if (
          ((0, r.useEffect)(() => {
            i.isNeededToLoad && i.getPlaylistPersonalDetails(o.playlistId);
          }, [i.isNeededToLoad, o.playlistId, i]),
          (0, r.useEffect)(
            () => () => {
              i.reset();
            },
            [i],
          ),
          (0, l.NOh)(i.isResolved),
          (i.isNotFound || i.isRejected) && (0, t.notFound)(),
          i.isResolved && !i.isReady)
        )
          return (
            i.dummyDescription || (0, t.notFound)(),
            (0, s.jsx)(d.PlaylistPersonalDummyPage, {})
          );
        i.isResolved && i.isReady && (0, t.redirect)(a);
      });
    },
    15898: function (e, o, n) {
      "use strict";
      n.d(o, {
        NotFound: function () {
          return b;
        },
      });
      var s = n(75441),
        i = n(32358),
        t = n(62569),
        r = n(15937),
        l = n(68208),
        d = n(69756),
        a = n(17392),
        m = n(13534),
        P = n(97141),
        v = n(35129),
        h = n.n(v);
      let b = (0, t.Pi)((e) => {
        let { className: o } = e,
          { contentRef: n } = (0, m.$Y6)(),
          t = (0, m.s0h)("/");
        return (
          (0, m.ZP4)(!0),
          (0, s.jsxs)("div", {
            className: (0, i.W)(h().root, { [h().root_desktop]: !n }, o),
            children: [
              (0, s.jsx)(P.nP, {
                withBackwardFallback: "/",
                className: h().navigation,
                withForwardControl: !1,
              }),
              (0, s.jsxs)("div", {
                className: h().content,
                children: [
                  (0, s.jsx)(d.Icon, {
                    className: h().icon,
                    variant: "musicLogo",
                  }),
                  (0, s.jsx)(a.Heading, {
                    className: (0, i.W)(h().title, h().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, s.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, s.jsx)(a.Caption, {
                    className: (0, i.W)(h().text, h().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, s.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, s.jsx)(l.Button, {
                    onClick: t,
                    className: h().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, s.jsx)(a.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, s.jsx)(r.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    13446: function (e) {
      e.exports = {
        root: "PlaylistPersonalDummyPage_root__tGxHG",
        cover: "PlaylistPersonalDummyPage_cover__XcCD1",
        title: "PlaylistPersonalDummyPage_title__ZSf9O",
        important: "PlaylistPersonalDummyPage_important__uEHGe",
        text: "PlaylistPersonalDummyPage_text__ci30d",
      };
    },
    35129: function (e) {
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
  },
  function (e) {
    e.O(
      0,
      [9876, 5970, 8580, 7138, 5453, 7873, 9282, 7141, 7058, 6158, 1744],
      function () {
        return e((e.s = 97751));
      },
    ),
      (_N_E = e.O());
  },
]);
