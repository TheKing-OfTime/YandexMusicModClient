(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4163],
  {
    24163: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pj: function () {
          return a.ReleaseNotesModal;
        },
        TF: function () {
          return l.TitleBar;
        },
        l7: function () {
          return u;
        },
        Yl: function () {
          return s;
        },
        F5: function () {
          return w;
        },
        Zl: function () {
          return d;
        },
        Pt: function () {
          return _;
        },
        vs: function () {
          return p.useApplicationDeeplinks;
        },
        Er: function () {
          return i.useApplicationUpdate;
        },
        Zw: function () {
          return v.useLaunch;
        },
        bO: function () {
          return c.useRefreshApplicationData;
        },
        Tk: function () {
          return r.useReleaseNotes;
        },
      });
      var o = n(5674);
      let s = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(o.BO.ON_APPLICATION_READY);
      };
      n(46971);
      var l = n(58081),
        a = n(82703),
        i = n(83001),
        r = n(63919);
      let d = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(o.BO.NEED_SHOW_RELEASE_NOTES);
      };
      var c = n(33854);
      let u = () => {
        document.addEventListener("auxclick", (e) => e.preventDefault()),
          document.addEventListener("click", (e) => {
            (e.ctrlKey || e.metaKey) && e.preventDefault();
          });
      };
      var C = n(86502);
      let _ = (e) => {
        var t;
        let { status: n } = e;
        null === (t = window.desktopEvents) ||
          void 0 === t ||
          t.send(o.BO.ON_PLAYER_STATE, {
            isPlaying: e.status === C.Xz.PLAYING,
            status: e.status,
            track: e.track,
            progress: e.progress,
          });
      };
      var p = n(75084),
        v = n(2779);
      let w = (e) => {
        let t = e === o.Q2.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(o.BO.APPLICATION_THEME, t);
      };
    },
    46971: function (e, t, n) {
      "use strict";
      n.d(t, {
        N$: function () {
          return s;
        },
        eZ: function () {
          return a;
        },
        tX: function () {
          return l;
        },
      });
      var o = n(5674);
      let s = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BO.WINDOW_MINIMIZE);
        },
        l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BO.WINDOW_MAXIMIZE);
        },
        a = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BO.WINDOW_CLOSE);
        };
    },
    75084: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useApplicationDeeplinks: function () {
            return i;
          },
        });
      var o = n(11769),
        s = n(99616),
        l = n(5674);
      let a = [
          [/^\/home$/, () => "/"],
          [/^\/users\/(.*)\/playlists$/, () => "/collection"],
          [/^\/users\/(.*)\/artists$/, () => "/collection"],
          [/^\/users\/(.*)\/albums$/, () => "/collection"],
          [/^\/users\/(.*)\/tracks$/, () => "/collection"],
          [/^\/users\/(.*)\/podcasts$/, () => "/collection"],
          [/^\/users\/(.*)\/kids$/, () => "/collection"],
          [/^\/users\/(.*)\/history$/, () => "/music-history"],
          [
            /^\/album\/(.*)\/track\/(.*)$/,
            (e) => {
              var t;
              let n = (0, l.z)(e, "/album/:albumId/track/:trackId"),
                o = n.albumId;
              return null !== (t = (0, l.SZ)("/album/".concat(o))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        i = () => {
          let e = (0, o.useRouter)(),
            t = (0, s.useCallback)(
              (t, n) => {
                for (let [t, o] of a)
                  if (t.test(n)) {
                    e.push(o(n));
                    return;
                  }
                let o = (0, l.SZ)(n);
                o ? e.push(o) : e.push("/");
              },
              [e],
            );
          (0, s.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(l.BO.ON_HANDLE_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(l.BO.ON_HANDLE_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    83001: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useApplicationUpdate: function () {
            return p;
          },
        });
      var o = n(8759),
        s = n(99616),
        l = n(65244),
        a = n(5674),
        i = n(35338),
        r = n(15527),
        d = n(1918),
        c = n(44285),
        u = n(12576),
        C = n.n(u);
      let _ = (e) => {
          let { version: t, formatMessage: n, closeToast: l } = e,
            u = (0, s.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(a.BO.ON_UPDATE_INSTALL),
                null == l || l();
            }, [l]),
            _ = (0, s.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: C().message,
                  children: [
                    (0, o.jsx)(d.Caption, {
                      className: C().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: n(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, o.jsx)(r.z, {
                      className: C().button,
                      onClick: u,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, o.jsx)(d.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: n({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [n, u, t],
            );
          return (0, o.jsx)(c.Yj, {
            className: (0, i.W)(C().root, C().important),
            message: _,
          });
        },
        p = () => {
          let { formatMessage: e } = (0, l.Z)(),
            { notify: t } = (0, a.d$)(),
            n = (0, s.useRef)(""),
            i = (0, s.useCallback)(
              (s, l) => {
                n.current !== l &&
                  ((n.current = l),
                  t((0, o.jsx)(_, { formatMessage: e, version: l }), {
                    containerId: a.W$.APPLICATION_UPDATE,
                  }));
              },
              [e, n, t],
            );
          (0, s.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BO.ON_UPDATE_AVAILABLE, i),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BO.ON_UPDATE_AVAILABLE, i);
              }
            );
          }, [i]);
        };
    },
    2779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useLaunch: function () {
            return l;
          },
        });
      var o = n(99616),
        s = n(5674);
      let l = () => {
        let e = (0, s.sv)(),
          t = (0, o.useCallback)(() => {
            let t = (0, s.bo)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(s.BO.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(s.BO.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    33854: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useRefreshApplicationData: function () {
            return a;
          },
        });
      var o = n(99616),
        s = n(48616),
        l = n(5674);
      let a = () => {
        let {
            library: e,
            collection: t,
            experiments: n,
            main: a,
            user: i,
          } = (0, l.oR)(),
          r = (0, o.useCallback)(() => {
            n.getData(),
              e.getData(),
              a.landing.isLoaded &&
                a.landing.getSkeleton(
                  { id: s.jB.WEB_MAIN, showWizard: i.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: s.jB.WEB_COLLECTION,
                    showWizard: i.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, n, e, a.landing, i.settings.showWizard]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BO.UPDATE_APPLICATION_DATA, r),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BO.UPDATE_APPLICATION_DATA, r);
            }
          );
        }, [r]);
      };
    },
    63919: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useReleaseNotes: function () {
            return l;
          },
        });
      var o = n(99616),
        s = n(5674);
      let l = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, s.oR)();
        (0, o.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(s.BO.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(s.BO.SHOW_RELEASE_NOTES, e.open);
            }
          );
        }, [e.open]);
      };
    },
    82703: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ReleaseNotesModal: function () {
            return w;
          },
        });
      var o = n(8759),
        s = n(35338),
        l = n(33423),
        a = n(99616),
        i = n(65244),
        r = n(2814),
        d = n(31476),
        c = n(71716),
        u = n(1918),
        C = n(5674),
        _ = n(45679),
        p = n.n(_);
      let v = {
          ul: (e) =>
            (0, o.jsx)("ul", { className: p().description, children: e }),
          li: (e) => (0, o.jsx)("li", { className: p().item, children: e }),
          code: (e) => (0, o.jsx)("code", { className: p().code, children: e }),
          date: (e) => (0, o.jsx)("span", { className: p().date, children: e }),
          p: (e) => (0, o.jsx)("p", { className: p().paragraph, children: e }),
          br: (0, o.jsx)("br", {}),
        },
        w = (0, l.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: n },
            } = (0, C.oR)(),
            { formatMessage: l } = (0, i.Z)(),
            _ = (0, a.useMemo)(() => (0, C.L)(t), [t]);
          return (0, o.jsx)(d.u, {
            title: l({ id: "desktop.release-notes-modal-title" }),
            open: n.isOpened,
            onOpenChange: n.onOpenChange,
            onClose: n.close,
            size: "fitContent",
            placement: "center",
            labelClose: l({ id: "interface-actions.close" }),
            className: p().root,
            headerClassName: p().modalHeader,
            contentClassName: p().modalContent,
            children: (0, o.jsx)(c.t, {
              className: (0, s.W)(p().scrollableContent, p().important),
              containerClassName: (0, s.W)(p().notes, p().important),
              children: _.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: p().note,
                    children: [
                      (0, o.jsx)(u.Heading, {
                        variant: "h4",
                        className: (0, s.W)(p().version, p().important),
                        children: (0, C.K7)(e),
                      }),
                      (0, o.jsx)(r.Z, { id: e, values: v }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          });
        });
    },
    58081: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TitleBar: function () {
            return _;
          },
        });
      var o = n(8759),
        s = n(35338),
        l = n(33423),
        a = n(99616),
        i = n(65244),
        r = n(5674),
        d = n(46971),
        c = n(99750),
        u = n.n(c);
      let C = (e) => {
          let {
            children: t,
            className: n,
            onClick: l,
            ariaLabel: a,
            withSecondaryColor: i,
          } = e;
          return (0, o.jsx)("button", {
            type: "button",
            className: (0, s.W)(
              u().button,
              { [u().button_withSecondaryColor]: i },
              n,
            ),
            onClick: l,
            "aria-label": a,
            children: t,
          });
        },
        _ = (0, l.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            n = (0, r.Xf)(),
            l = n === r.t4.WINDOWS,
            { formatMessage: c } = (0, i.Z)(),
            _ = (0, a.useCallback)(() => {
              (0, d.N$)();
            }, []),
            p = (0, a.useCallback)(() => {
              (0, d.tX)();
            }, []),
            v = (0, a.useCallback)(() => {
              (0, d.eZ)();
            }, []);
          return (0, o.jsx)("div", {
            className: u().root,
            onDoubleClick: p,
            children:
              l &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(C, {
                    onClick: _,
                    ariaLabel: c({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, s.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, o.jsx)(C, {
                    onClick: p,
                    ariaLabel: c({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, s.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, o.jsx)(C, {
                    className: u().closeButton,
                    onClick: v,
                    ariaLabel: c({ id: "windows-menu.close" }),
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, s.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
          });
        });
    },
    12576: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    45679: function (e) {
      e.exports = {
        root: "ReleaseNotesModal_root__RSw1p",
        modalHeader: "ReleaseNotesModal_modalHeader__gp9SA",
        modalContent: "ReleaseNotesModal_modalContent__g8OTu",
        scrollableContent: "ReleaseNotesModal_scrollableContent__zGdbH",
        important: "ReleaseNotesModal_important__u8yP4",
        notes: "ReleaseNotesModal_notes__bVAoa",
        date: "ReleaseNotesModal_date__s3_ux",
        description: "ReleaseNotesModal_description__B_yLI",
        paragraph: "ReleaseNotesModal_paragraph___laDJ",
        note: "ReleaseNotesModal_note__S9E6z",
        version: "ReleaseNotesModal_version__4Mcd5",
        item: "ReleaseNotesModal_item___CYml",
        code: "ReleaseNotesModal_code__Yv3QD",
      };
    },
    99750: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
  },
]);
