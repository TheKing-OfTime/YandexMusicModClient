(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8101],
  {
    78918: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pj: function () {
          return l.ReleaseNotesModal;
        },
        TF: function () {
          return i.TitleBar;
        },
        l7: function () {
          return d;
        },
        Yl: function () {
          return o;
        },
        F5: function () {
          return g;
        },
        Pt: function () {
          return f;
        },
        KZ: function () {
          return s;
        },
        vs: function () {
          return v.useApplicationDeeplinks;
        },
        Er: function () {
          return u.useApplicationUpdate;
        },
        Zw: function () {
          return m.useLaunch;
        },
        A4: function () {
          return p.usePlayerAction;
        },
        bO: function () {
          return c.useRefreshApplicationData;
        },
        Tk: function () {
          return a.useReleaseNotes;
        },
      });
      var r = n(63394);
      let o = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(r.BO.APPLICATION_READY);
      };
      n(44928);
      var i = n(91021),
        l = n(22485),
        u = n(46813),
        a = n(15291);
      let s = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(r.BO.RELEASE_NOTES_READY);
      };
      var c = n(64422);
      let d = () => {
          document.addEventListener("auxclick", (e) => e.preventDefault()),
            document.addEventListener("click", (e) => {
              (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
            });
        },
        f = (e) => {
          var t;
          let { isPlaying: n, canMoveBackward: o, canMoveForward: i } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(r.BO.PLAYER_STATE, {
              isPlaying: n,
              canMoveBackward: o,
              canMoveForward: i,
            });
        };
      var p = n(43215),
        v = n(27327),
        m = n(17256);
      let g = (e) => {
        let t = e === r.Q2.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(r.BO.APPLICATION_THEME, t);
      };
    },
    44928: function (e, t, n) {
      "use strict";
      n.d(t, {
        N$: function () {
          return o;
        },
        eZ: function () {
          return l;
        },
        tX: function () {
          return i;
        },
      });
      var r = n(63394);
      let o = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(r.BO.WINDOW_MINIMIZE);
        },
        i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(r.BO.WINDOW_MAXIMIZE);
        },
        l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(r.BO.WINDOW_CLOSE);
        };
    },
    27327: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationDeeplinks: function () {
          return u;
        },
      });
      var r = n(74717),
        o = n(98639),
        i = n(63394);
      let l = [
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
              let n = (0, i.z)(e, "/album/:albumId/track/:trackId").albumId;
              return null !== (t = (0, i.SZ)("/album/".concat(n))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        u = () => {
          let e = (0, r.useRouter)(),
            t = (0, o.useCallback)(
              (t, n) => {
                for (let [t, r] of l)
                  if (t.test(n)) {
                    e.push(r(n));
                    return;
                  }
                let r = (0, i.SZ)(n);
                r ? e.push(r) : e.push("/");
              },
              [e],
            );
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BO.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BO.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    46813: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationUpdate: function () {
          return v;
        },
      });
      var r = n(9753),
        o = n(98639),
        i = n(80542),
        l = n(63394),
        u = n(60836),
        a = n(39513),
        s = n(2570),
        c = n(67868),
        d = n(8544),
        f = n.n(d);
      let p = (e) => {
          let { version: t, formatMessage: n, closeToast: i } = e,
            d = (0, o.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(l.BO.INSTALL_UPDATE),
                null == i || i();
            }, [i]),
            p = (0, o.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: f().message,
                  children: [
                    (0, r.jsx)(s.Caption, {
                      className: f().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: n(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, r.jsx)(a.z, {
                      className: f().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, r.jsx)(s.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: n({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [n, d, t],
            );
          return (0, r.jsx)(c.Yj, {
            className: (0, u.W)(f().root, f().important),
            message: p,
          });
        },
        v = () => {
          let { formatMessage: e } = (0, i.Z)(),
            { notify: t } = (0, l.d$)(),
            n = (0, o.useRef)(""),
            u = (0, o.useCallback)(
              (o, i) => {
                n.current !== i &&
                  ((n.current = i),
                  t((0, r.jsx)(p, { formatMessage: e, version: i }), {
                    containerId: l.W$.APPLICATION_UPDATE,
                  }));
              },
              [e, n, t],
            );
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(l.BO.UPDATE_AVAILABLE, u),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(l.BO.UPDATE_AVAILABLE, u);
              }
            );
          }, [u]);
        };
    },
    17256: function (e, t, n) {
      "use strict";
      n.d(t, {
        useLaunch: function () {
          return i;
        },
      });
      var r = n(98639),
        o = n(63394);
      let i = () => {
        let e = (0, o.sv)(),
          t = (0, r.useCallback)(() => {
            let t = (0, o.bo)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, r.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(o.BO.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(o.BO.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    43215: function (e, t, n) {
      "use strict";
      n.d(t, {
        usePlayerAction: function () {
          return u;
        },
      });
      var r,
        o,
        i = n(98639),
        l = n(63394);
      ((r = o || (o = {})).PLAY = "PLAY"),
        (r.PAUSE = "PAUSE"),
        (r.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (r.MOVE_FORWARD = "MOVE_FORWARD");
      let u = (e) => {
        let t = (0, i.useCallback)(
          (t, n) => {
            switch (n) {
              case "PLAY":
              case "PAUSE":
                null == e || e.togglePause();
                break;
              case "MOVE_BACKWARD":
                null == e || e.moveBackward();
                break;
              case "MOVE_FORWARD":
                null == e || e.moveForward();
            }
          },
          [e],
        );
        (0, i.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BO.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BO.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    64422: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshApplicationData: function () {
          return l;
        },
      });
      var r = n(98639),
        o = n(69869),
        i = n(63394);
      let l = () => {
        let {
            library: e,
            collection: t,
            experiments: n,
            main: l,
            user: u,
          } = (0, i.oR)(),
          a = (0, r.useCallback)(() => {
            n.getData(),
              e.getData(),
              l.landing.isLoaded &&
                l.landing.getSkeleton(
                  { id: o.jB.WEB_MAIN, showWizard: u.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: o.jB.WEB_COLLECTION,
                    showWizard: u.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, n, e, l.landing, u.settings.showWizard]);
        (0, r.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BO.REFRESH_APPLICATION_DATA, a),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BO.REFRESH_APPLICATION_DATA, a);
            }
          );
        }, [a]);
      };
    },
    15291: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReleaseNotes: function () {
          return i;
        },
      });
      var r = n(98639),
        o = n(63394);
      let i = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, o.oR)();
        (0, r.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(o.BO.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(o.BO.SHOW_RELEASE_NOTES, e.open);
            }
          );
        }, [e.open]);
      };
    },
    22485: function (e, t, n) {
      "use strict";
      n.d(t, {
        ReleaseNotesModal: function () {
          return g;
        },
      });
      var r = n(9753),
        o = n(60836),
        i = n(9544),
        l = n(98639),
        u = n(80542),
        a = n(31014),
        s = n(89352),
        c = n(41055),
        d = n(2570),
        f = n(63394),
        p = n(6582),
        v = n.n(p);
      let m = {
          ul: (e) =>
            (0, r.jsx)("ul", { className: v().description, children: e }),
          li: (e) => (0, r.jsx)("li", { className: v().item, children: e }),
          code: (e) => (0, r.jsx)("code", { className: v().code, children: e }),
          date: (e) => (0, r.jsx)("span", { className: v().date, children: e }),
          p: (e) => (0, r.jsx)("p", { className: v().paragraph, children: e }),
          br: (0, r.jsx)("br", {}),
        },
        g = (0, i.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: n },
            } = (0, f.oR)(),
            { formatMessage: i } = (0, u.Z)(),
            p = (0, l.useMemo)(() => (0, f.L)(t), [t]);
          return (0, r.jsx)(s.u, {
            title: i({ id: "desktop.release-notes-modal-title" }),
            open: n.isOpened,
            onOpenChange: n.onOpenChange,
            onClose: n.close,
            size: "fitContent",
            placement: "center",
            labelClose: i({ id: "interface-actions.close" }),
            className: v().root,
            headerClassName: v().modalHeader,
            contentClassName: v().modalContent,
            children: (0, r.jsx)(c.t, {
              className: (0, o.W)(v().scrollableContent, v().important),
              containerClassName: (0, o.W)(v().notes, v().important),
              children: p.map((e) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: v().note,
                    children: [
                      (0, r.jsx)(d.Heading, {
                        variant: "h4",
                        className: (0, o.W)(v().version, v().important),
                        children: (0, f.K7)(e),
                      }),
                      (0, r.jsx)(a.Z, { id: e, values: m }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          });
        });
    },
    91021: function (e, t, n) {
      "use strict";
      n.d(t, {
        TitleBar: function () {
          return p;
        },
      });
      var r = n(9753),
        o = n(60836),
        i = n(9544),
        l = n(98639),
        u = n(80542),
        a = n(63394),
        s = n(44928),
        c = n(84814),
        d = n.n(c);
      let f = (e) => {
          let {
            children: t,
            className: n,
            onClick: i,
            ariaLabel: l,
            withSecondaryColor: u,
          } = e;
          return (0, r.jsx)("button", {
            type: "button",
            className: (0, o.W)(
              d().button,
              { [d().button_withSecondaryColor]: u },
              n,
            ),
            onClick: i,
            "aria-label": l,
            children: t,
          });
        },
        p = (0, i.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            n = (0, a.Xf)() === a.t4.WINDOWS,
            { formatMessage: i } = (0, u.Z)(),
            c = (0, l.useCallback)(() => {
              (0, s.N$)();
            }, []),
            p = (0, l.useCallback)(() => {
              (0, s.tX)();
            }, []),
            v = (0, l.useCallback)(() => {
              (0, s.eZ)();
            }, []);
          return (0, r.jsx)("div", {
            className: d().root,
            onDoubleClick: p,
            children:
              n &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(f, {
                    onClick: c,
                    ariaLabel: i({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, r.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, r.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, r.jsx)(f, {
                    onClick: p,
                    ariaLabel: i({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, r.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, r.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, r.jsx)(f, {
                    className: d().closeButton,
                    onClick: v,
                    ariaLabel: i({ id: "windows-menu.close" }),
                    children: (0, r.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, r.jsx)("path", {
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
    25672: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pk: function () {
          return H;
        },
        Ux: function () {
          return $;
        },
      });
      var r,
        o,
        i,
        l,
        u = n(9753),
        a = n(9544),
        s = n(98639),
        c = n.t(s, 2),
        d = n(80542),
        f = n(31014),
        p = n(23881),
        v = n(98342),
        m = n(39513),
        g = n(28852),
        h = n(773),
        y = {
          6011: (e, t, n) => {
            let r;
            n.r(t),
              n.d(t, {
                Composite: () => tC,
                CompositeItem: () => tk,
                FloatingArrow: () => tP,
                FloatingDelayGroup: () => tZ,
                FloatingFocusManager: () => na,
                FloatingList: () => ty,
                FloatingNode: () => tF,
                FloatingOverlay: () => nc,
                FloatingPortal: () => ni,
                FloatingTree: () => tV,
                arrow: () => eI,
                autoPlacement: () => ea,
                autoUpdate: () => eP,
                computePosition: () => eM,
                detectOverflow: () => el,
                flip: () => es,
                getOverflowAncestors: () => E,
                hide: () => ef,
                inline: () => ev,
                inner: () => nj,
                limitShift: () => ey,
                offset: () => eg,
                platform: () => eN,
                safePolygon: () => nF,
                shift: () => eh,
                size: () => eb,
                useClick: () => nf,
                useClientPoint: () => nv,
                useDelayGroup: () => tX,
                useDelayGroupContext: () => tK,
                useDismiss: () => ny,
                useFloating: () => nb,
                useFloatingNodeId: () => tD,
                useFloatingParentNodeId: () => tj,
                useFloatingPortalNode: () => no,
                useFloatingTree: () => tB,
                useFocus: () => nx,
                useHover: () => tG,
                useId: () => tN,
                useInnerOffset: () => nB,
                useInteractions: () => nE,
                useListItem: () => tb,
                useListNavigation: () => nO,
                useMergeRefs: () => te,
                useRole: () => nL,
                useTransitionStatus: () => nP,
                useTransitionStyles: () => nM,
                useTypeahead: () => nA,
              });
            var o,
              i,
              l = n(810);
            function u(e) {
              return c(e) ? (e.nodeName || "").toLowerCase() : "#document";
            }
            function a(e) {
              var t;
              return (
                (null == e
                  ? void 0
                  : null == (t = e.ownerDocument)
                    ? void 0
                    : t.defaultView) || window
              );
            }
            function s(e) {
              var t;
              return null ==
                (t = (c(e) ? e.ownerDocument : e.document) || window.document)
                ? void 0
                : t.documentElement;
            }
            function c(e) {
              return e instanceof Node || e instanceof a(e).Node;
            }
            function d(e) {
              return e instanceof Element || e instanceof a(e).Element;
            }
            function f(e) {
              return e instanceof HTMLElement || e instanceof a(e).HTMLElement;
            }
            function p(e) {
              return (
                "undefined" != typeof ShadowRoot &&
                (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
              );
            }
            function v(e) {
              let {
                overflow: t,
                overflowX: n,
                overflowY: r,
                display: o,
              } = b(e);
              return (
                /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
                !["inline", "contents"].includes(o)
              );
            }
            function m(e) {
              let t = g(),
                n = b(e);
              return (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                (!!n.containerType && "normal" !== n.containerType) ||
                (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
                (!t && !!n.filter && "none" !== n.filter) ||
                ["transform", "perspective", "filter"].some((e) =>
                  (n.willChange || "").includes(e),
                ) ||
                ["paint", "layout", "strict", "content"].some((e) =>
                  (n.contain || "").includes(e),
                )
              );
            }
            function g() {
              return (
                "undefined" != typeof CSS &&
                !!CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")
              );
            }
            function y(e) {
              return ["html", "body", "#document"].includes(u(e));
            }
            function b(e) {
              return a(e).getComputedStyle(e);
            }
            function x(e) {
              return d(e)
                ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
            }
            function w(e) {
              if ("html" === u(e)) return e;
              let t =
                e.assignedSlot || e.parentNode || (p(e) && e.host) || s(e);
              return p(t) ? t.host : t;
            }
            function E(e, t, n) {
              var r;
              void 0 === t && (t = []), void 0 === n && (n = !0);
              let o = (function e(t) {
                  let n = w(t);
                  return y(n)
                    ? t.ownerDocument
                      ? t.ownerDocument.body
                      : t.body
                    : f(n) && v(n)
                      ? n
                      : e(n);
                })(e),
                i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                l = a(o);
              return i
                ? t.concat(
                    l,
                    l.visualViewport || [],
                    v(o) ? o : [],
                    l.frameElement && n ? E(l.frameElement) : [],
                  )
                : t.concat(o, E(o, [], n));
            }
            function _(e) {
              let t = e.activeElement;
              for (
                ;
                (null == (n = t)
                  ? void 0
                  : null == (r = n.shadowRoot)
                    ? void 0
                    : r.activeElement) != null;

              ) {
                var n, r;
                t = t.shadowRoot.activeElement;
              }
              return t;
            }
            function R(e, t) {
              if (!e || !t) return !1;
              let n = t.getRootNode && t.getRootNode();
              if (e.contains(t)) return !0;
              if (n && p(n)) {
                let n = t;
                for (; n; ) {
                  if (e === n) return !0;
                  n = n.parentNode || n.host;
                }
              }
              return !1;
            }
            function C() {
              let e = navigator.userAgentData;
              return null != e && e.platform ? e.platform : navigator.platform;
            }
            function k() {
              let e = navigator.userAgentData;
              return e && Array.isArray(e.brands)
                ? e.brands
                    .map((e) => {
                      let { brand: t, version: n } = e;
                      return t + "/" + n;
                    })
                    .join(" ")
                : navigator.userAgent;
            }
            function S(e) {
              return (
                (0 === e.mozInputSource && !!e.isTrusted) ||
                (T() && e.pointerType
                  ? "click" === e.type && 1 === e.buttons
                  : 0 === e.detail && !e.pointerType)
              );
            }
            function O(e) {
              return (
                (!T() && 0 === e.width && 0 === e.height) ||
                (1 === e.width &&
                  1 === e.height &&
                  0 === e.pressure &&
                  0 === e.detail &&
                  "mouse" === e.pointerType) ||
                (e.width < 1 &&
                  e.height < 1 &&
                  0 === e.pressure &&
                  0 === e.detail)
              );
            }
            function L() {
              return /apple/i.test(navigator.vendor);
            }
            function T() {
              let e = /android/i;
              return e.test(C()) || e.test(k());
            }
            function N() {
              return (
                C().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
              );
            }
            function P(e, t) {
              let n = ["mouse", "pen"];
              return t || n.push("", void 0), n.includes(e);
            }
            function M(e) {
              return (null == e ? void 0 : e.ownerDocument) || document;
            }
            function A(e, t) {
              return (
                null != t &&
                ("composedPath" in e
                  ? e.composedPath().includes(t)
                  : null != e.target && t.contains(e.target))
              );
            }
            function I(e) {
              return "composedPath" in e ? e.composedPath()[0] : e.target;
            }
            function j(e) {
              return (
                f(e) &&
                e.matches(
                  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
                )
              );
            }
            function B(e) {
              e.preventDefault(), e.stopPropagation();
            }
            let D = ["top", "right", "bottom", "left"],
              F = D.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
              V = Math.min,
              W = Math.max,
              U = Math.round,
              H = Math.floor,
              z = (e) => ({ x: e, y: e }),
              G = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
              },
              Y = { start: "end", end: "start" };
            function K(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function Z(e) {
              return e.split("-")[0];
            }
            function X(e) {
              return e.split("-")[1];
            }
            function q(e) {
              return "x" === e ? "y" : "x";
            }
            function $(e) {
              return "y" === e ? "height" : "width";
            }
            function J(e) {
              return ["top", "bottom"].includes(Z(e)) ? "y" : "x";
            }
            function Q(e, t, n) {
              void 0 === n && (n = !1);
              let r = X(e),
                o = q(J(e)),
                i = $(o),
                l =
                  "x" === o
                    ? r === (n ? "end" : "start")
                      ? "right"
                      : "left"
                    : "start" === r
                      ? "bottom"
                      : "top";
              return t.reference[i] > t.floating[i] && (l = et(l)), [l, et(l)];
            }
            function ee(e) {
              return e.replace(/start|end/g, (e) => Y[e]);
            }
            function et(e) {
              return e.replace(/left|right|bottom|top/g, (e) => G[e]);
            }
            function en(e) {
              return "number" != typeof e
                ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
                : { top: e, right: e, bottom: e, left: e };
            }
            function er(e) {
              return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height,
              };
            }
            function eo(e, t, n) {
              let r,
                { reference: o, floating: i } = e,
                l = J(t),
                u = q(J(t)),
                a = $(u),
                s = Z(t),
                c = "y" === l,
                d = o.x + o.width / 2 - i.width / 2,
                f = o.y + o.height / 2 - i.height / 2,
                p = o[a] / 2 - i[a] / 2;
              switch (s) {
                case "top":
                  r = { x: d, y: o.y - i.height };
                  break;
                case "bottom":
                  r = { x: d, y: o.y + o.height };
                  break;
                case "right":
                  r = { x: o.x + o.width, y: f };
                  break;
                case "left":
                  r = { x: o.x - i.width, y: f };
                  break;
                default:
                  r = { x: o.x, y: o.y };
              }
              switch (X(t)) {
                case "start":
                  r[u] -= p * (n && c ? -1 : 1);
                  break;
                case "end":
                  r[u] += p * (n && c ? -1 : 1);
              }
              return r;
            }
            let ei = async (e, t, n) => {
              let {
                  placement: r = "bottom",
                  strategy: o = "absolute",
                  middleware: i = [],
                  platform: l,
                } = n,
                u = i.filter(Boolean),
                a = await (null == l.isRTL ? void 0 : l.isRTL(t)),
                s = await l.getElementRects({
                  reference: e,
                  floating: t,
                  strategy: o,
                }),
                { x: c, y: d } = eo(s, r, a),
                f = r,
                p = {},
                v = 0;
              for (let n = 0; n < u.length; n++) {
                let { name: i, fn: m } = u[n],
                  {
                    x: g,
                    y: h,
                    data: y,
                    reset: b,
                  } = await m({
                    x: c,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: s,
                    platform: l,
                    elements: { reference: e, floating: t },
                  });
                if (
                  ((c = null != g ? g : c),
                  (d = null != h ? h : d),
                  (p = { ...p, [i]: { ...p[i], ...y } }),
                  b && v <= 50)
                ) {
                  v++,
                    "object" == typeof b &&
                      (b.placement && (f = b.placement),
                      b.rects &&
                        (s =
                          !0 === b.rects
                            ? await l.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: o,
                              })
                            : b.rects),
                      ({ x: c, y: d } = eo(s, f, a))),
                    (n = -1);
                  continue;
                }
              }
              return {
                x: c,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p,
              };
            };
            async function el(e, t) {
              var n;
              void 0 === t && (t = {});
              let {
                  x: r,
                  y: o,
                  platform: i,
                  rects: l,
                  elements: u,
                  strategy: a,
                } = e,
                {
                  boundary: s = "clippingAncestors",
                  rootBoundary: c = "viewport",
                  elementContext: d = "floating",
                  altBoundary: f = !1,
                  padding: p = 0,
                } = K(t, e),
                v = en(p),
                m = u[f ? ("floating" === d ? "reference" : "floating") : d],
                g = er(
                  await i.getClippingRect({
                    element:
                      null ==
                        (n = await (null == i.isElement
                          ? void 0
                          : i.isElement(m))) || n
                        ? m
                        : m.contextElement ||
                          (await (null == i.getDocumentElement
                            ? void 0
                            : i.getDocumentElement(u.floating))),
                    boundary: s,
                    rootBoundary: c,
                    strategy: a,
                  }),
                ),
                h =
                  "floating" === d
                    ? { ...l.floating, x: r, y: o }
                    : l.reference,
                y = await (null == i.getOffsetParent
                  ? void 0
                  : i.getOffsetParent(u.floating)),
                b = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
                  (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
                  x: 1,
                  y: 1,
                },
                x = er(
                  i.convertOffsetParentRelativeRectToViewportRelativeRect
                    ? await i.convertOffsetParentRelativeRectToViewportRelativeRect(
                        { rect: h, offsetParent: y, strategy: a },
                      )
                    : h,
                );
              return {
                top: (g.top - x.top + v.top) / b.y,
                bottom: (x.bottom - g.bottom + v.bottom) / b.y,
                left: (g.left - x.left + v.left) / b.x,
                right: (x.right - g.right + v.right) / b.x,
              };
            }
            let eu = (e) => ({
                name: "arrow",
                options: e,
                async fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: i,
                      platform: l,
                      elements: u,
                      middlewareData: a,
                    } = t,
                    { element: s, padding: c = 0 } = K(e, t) || {};
                  if (null == s) return {};
                  let d = en(c),
                    f = { x: n, y: r },
                    p = q(J(o)),
                    v = $(p),
                    m = await l.getDimensions(s),
                    g = "y" === p,
                    h = g ? "clientHeight" : "clientWidth",
                    y = i.reference[v] + i.reference[p] - f[p] - i.floating[v],
                    b = f[p] - i.reference[p],
                    x = await (null == l.getOffsetParent
                      ? void 0
                      : l.getOffsetParent(s)),
                    w = x ? x[h] : 0;
                  (w &&
                    (await (null == l.isElement ? void 0 : l.isElement(x)))) ||
                    (w = u.floating[h] || i.floating[v]);
                  let E = w / 2 - m[v] / 2 - 1,
                    _ = V(d[g ? "top" : "left"], E),
                    R = V(d[g ? "bottom" : "right"], E),
                    C = w - m[v] - R,
                    k = w / 2 - m[v] / 2 + (y / 2 - b / 2),
                    S = W(_, V(k, C)),
                    O =
                      !a.arrow &&
                      null != X(o) &&
                      k != S &&
                      i.reference[v] / 2 - (k < _ ? _ : R) - m[v] / 2 < 0,
                    L = O ? (k < _ ? k - _ : k - C) : 0;
                  return {
                    [p]: f[p] + L,
                    data: {
                      [p]: S,
                      centerOffset: k - S - L,
                      ...(O && { alignmentOffset: L }),
                    },
                    reset: O,
                  };
                },
              }),
              ea = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "autoPlacement",
                    options: e,
                    async fn(t) {
                      var n, r, o, i;
                      let {
                          rects: l,
                          middlewareData: u,
                          placement: a,
                          platform: s,
                          elements: c,
                        } = t,
                        {
                          crossAxis: d = !1,
                          alignment: f,
                          allowedPlacements: p = F,
                          autoAlignment: v = !0,
                          ...m
                        } = K(e, t),
                        g =
                          void 0 !== f || p === F
                            ? ((i = f || null)
                                ? [
                                    ...p.filter((e) => X(e) === i),
                                    ...p.filter((e) => X(e) !== i),
                                  ]
                                : p.filter((e) => Z(e) === e)
                              ).filter(
                                (e) => !i || X(e) === i || (!!v && ee(e) !== e),
                              )
                            : p,
                        h = await el(t, m),
                        y =
                          (null == (n = u.autoPlacement) ? void 0 : n.index) ||
                          0,
                        b = g[y];
                      if (null == b) return {};
                      let x = Q(
                        b,
                        l,
                        await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                      );
                      if (a !== b) return { reset: { placement: g[0] } };
                      let w = [h[Z(b)], h[x[0]], h[x[1]]],
                        E = [
                          ...((null == (r = u.autoPlacement)
                            ? void 0
                            : r.overflows) || []),
                          { placement: b, overflows: w },
                        ],
                        _ = g[y + 1];
                      if (_)
                        return {
                          data: { index: y + 1, overflows: E },
                          reset: { placement: _ },
                        };
                      let R = E.map((e) => {
                          let t = X(e.placement);
                          return [
                            e.placement,
                            t && d
                              ? e.overflows
                                  .slice(0, 2)
                                  .reduce((e, t) => e + t, 0)
                              : e.overflows[0],
                            e.overflows,
                          ];
                        }).sort((e, t) => e[1] - t[1]),
                        C =
                          (null ==
                          (o = R.filter((e) =>
                            e[2].slice(0, X(e[0]) ? 2 : 3).every((e) => e <= 0),
                          )[0])
                            ? void 0
                            : o[0]) || R[0][0];
                      return C !== a
                        ? {
                            data: { index: y + 1, overflows: E },
                            reset: { placement: C },
                          }
                        : {};
                    },
                  }
                );
              },
              es = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "flip",
                    options: e,
                    async fn(t) {
                      var n, r, o, i, l;
                      let {
                          placement: u,
                          middlewareData: a,
                          rects: s,
                          initialPlacement: c,
                          platform: d,
                          elements: f,
                        } = t,
                        {
                          mainAxis: p = !0,
                          crossAxis: v = !0,
                          fallbackPlacements: m,
                          fallbackStrategy: g = "bestFit",
                          fallbackAxisSideDirection: h = "none",
                          flipAlignment: y = !0,
                          ...b
                        } = K(e, t);
                      if (null != (n = a.arrow) && n.alignmentOffset) return {};
                      let x = Z(u),
                        w = Z(c) === c,
                        E = await (null == d.isRTL
                          ? void 0
                          : d.isRTL(f.floating)),
                        _ =
                          m ||
                          (w || !y
                            ? [et(c)]
                            : (function (e) {
                                let t = et(e);
                                return [ee(e), t, ee(t)];
                              })(c));
                      m ||
                        "none" === h ||
                        _.push(
                          ...(function (e, t, n, r) {
                            let o = X(e),
                              i = (function (e, t, n) {
                                let r = ["left", "right"],
                                  o = ["right", "left"];
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    if (n) return t ? o : r;
                                    return t ? r : o;
                                  case "left":
                                  case "right":
                                    return t
                                      ? ["top", "bottom"]
                                      : ["bottom", "top"];
                                  default:
                                    return [];
                                }
                              })(Z(e), "start" === n, r);
                            return (
                              o &&
                                ((i = i.map((e) => e + "-" + o)),
                                t && (i = i.concat(i.map(ee)))),
                              i
                            );
                          })(c, y, h, E),
                        );
                      let R = [c, ..._],
                        C = await el(t, b),
                        k = [],
                        S = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                      if ((p && k.push(C[x]), v)) {
                        let e = Q(u, s, E);
                        k.push(C[e[0]], C[e[1]]);
                      }
                      if (
                        ((S = [...S, { placement: u, overflows: k }]),
                        !k.every((e) => e <= 0))
                      ) {
                        let e =
                            ((null == (o = a.flip) ? void 0 : o.index) || 0) +
                            1,
                          t = R[e];
                        if (t)
                          return {
                            data: { index: e, overflows: S },
                            reset: { placement: t },
                          };
                        let n =
                          null ==
                          (i = S.filter((e) => e.overflows[0] <= 0).sort(
                            (e, t) => e.overflows[1] - t.overflows[1],
                          )[0])
                            ? void 0
                            : i.placement;
                        if (!n)
                          switch (g) {
                            case "bestFit": {
                              let e =
                                null ==
                                (l = S.map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0),
                                ]).sort((e, t) => e[1] - t[1])[0])
                                  ? void 0
                                  : l[0];
                              e && (n = e);
                              break;
                            }
                            case "initialPlacement":
                              n = c;
                          }
                        if (u !== n) return { reset: { placement: n } };
                      }
                      return {};
                    },
                  }
                );
              };
            function ec(e, t) {
              return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width,
              };
            }
            function ed(e) {
              return D.some((t) => e[t] >= 0);
            }
            let ef = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    let { rects: n } = t,
                      { strategy: r = "referenceHidden", ...o } = K(e, t);
                    switch (r) {
                      case "referenceHidden": {
                        let e = ec(
                          await el(t, { ...o, elementContext: "reference" }),
                          n.reference,
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: ed(e),
                          },
                        };
                      }
                      case "escaped": {
                        let e = ec(
                          await el(t, { ...o, altBoundary: !0 }),
                          n.floating,
                        );
                        return { data: { escapedOffsets: e, escaped: ed(e) } };
                      }
                      default:
                        return {};
                    }
                  },
                }
              );
            };
            function ep(e) {
              let t = V(...e.map((e) => e.left)),
                n = V(...e.map((e) => e.top));
              return {
                x: t,
                y: n,
                width: W(...e.map((e) => e.right)) - t,
                height: W(...e.map((e) => e.bottom)) - n,
              };
            }
            let ev = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "inline",
                  options: e,
                  async fn(t) {
                    let {
                        placement: n,
                        elements: r,
                        rects: o,
                        platform: i,
                        strategy: l,
                      } = t,
                      { padding: u = 2, x: a, y: s } = K(e, t),
                      c = Array.from(
                        (await (null == i.getClientRects
                          ? void 0
                          : i.getClientRects(r.reference))) || [],
                      ),
                      d = (function (e) {
                        let t = e.slice().sort((e, t) => e.y - t.y),
                          n = [],
                          r = null;
                        for (let e = 0; e < t.length; e++) {
                          let o = t[e];
                          !r || o.y - r.y > r.height / 2
                            ? n.push([o])
                            : n[n.length - 1].push(o),
                            (r = o);
                        }
                        return n.map((e) => er(ep(e)));
                      })(c),
                      f = er(ep(c)),
                      p = en(u),
                      v = await i.getElementRects({
                        reference: {
                          getBoundingClientRect: function () {
                            if (
                              2 === d.length &&
                              d[0].left > d[1].right &&
                              null != a &&
                              null != s
                            )
                              return (
                                d.find(
                                  (e) =>
                                    a > e.left - p.left &&
                                    a < e.right + p.right &&
                                    s > e.top - p.top &&
                                    s < e.bottom + p.bottom,
                                ) || f
                              );
                            if (d.length >= 2) {
                              if ("y" === J(n)) {
                                let e = d[0],
                                  t = d[d.length - 1],
                                  r = "top" === Z(n),
                                  o = e.top,
                                  i = t.bottom,
                                  l = r ? e.left : t.left,
                                  u = r ? e.right : t.right;
                                return {
                                  top: o,
                                  bottom: i,
                                  left: l,
                                  right: u,
                                  width: u - l,
                                  height: i - o,
                                  x: l,
                                  y: o,
                                };
                              }
                              let e = "left" === Z(n),
                                t = W(...d.map((e) => e.right)),
                                r = V(...d.map((e) => e.left)),
                                o = d.filter((n) =>
                                  e ? n.left === r : n.right === t,
                                ),
                                i = o[0].top,
                                l = o[o.length - 1].bottom;
                              return {
                                top: i,
                                bottom: l,
                                left: r,
                                right: t,
                                width: t - r,
                                height: l - i,
                                x: r,
                                y: i,
                              };
                            }
                            return f;
                          },
                        },
                        floating: r.floating,
                        strategy: l,
                      });
                    return o.reference.x !== v.reference.x ||
                      o.reference.y !== v.reference.y ||
                      o.reference.width !== v.reference.width ||
                      o.reference.height !== v.reference.height
                      ? { reset: { rects: v } }
                      : {};
                  },
                }
              );
            };
            async function em(e, t) {
              let { placement: n, platform: r, elements: o } = e,
                i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                l = Z(n),
                u = X(n),
                a = "y" === J(n),
                s = ["left", "top"].includes(l) ? -1 : 1,
                c = i && a ? -1 : 1,
                d = K(t, e),
                {
                  mainAxis: f,
                  crossAxis: p,
                  alignmentAxis: v,
                } = "number" == typeof d
                  ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                  : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
              return (
                u && "number" == typeof v && (p = "end" === u ? -1 * v : v),
                a ? { x: p * c, y: f * s } : { x: f * s, y: p * c }
              );
            }
            let eg = function (e) {
                return (
                  void 0 === e && (e = 0),
                  {
                    name: "offset",
                    options: e,
                    async fn(t) {
                      let { x: n, y: r } = t,
                        o = await em(t, e);
                      return { x: n + o.x, y: r + o.y, data: o };
                    },
                  }
                );
              },
              eh = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "shift",
                    options: e,
                    async fn(t) {
                      let { x: n, y: r, placement: o } = t,
                        {
                          mainAxis: i = !0,
                          crossAxis: l = !1,
                          limiter: u = {
                            fn: (e) => {
                              let { x: t, y: n } = e;
                              return { x: t, y: n };
                            },
                          },
                          ...a
                        } = K(e, t),
                        s = { x: n, y: r },
                        c = await el(t, a),
                        d = J(Z(o)),
                        f = q(d),
                        p = s[f],
                        v = s[d];
                      if (i) {
                        let e = "y" === f ? "top" : "left",
                          t = "y" === f ? "bottom" : "right",
                          n = p + c[e],
                          r = p - c[t];
                        p = W(n, V(p, r));
                      }
                      if (l) {
                        let e = "y" === d ? "top" : "left",
                          t = "y" === d ? "bottom" : "right",
                          n = v + c[e],
                          r = v - c[t];
                        v = W(n, V(v, r));
                      }
                      let m = u.fn({ ...t, [f]: p, [d]: v });
                      return { ...m, data: { x: m.x - n, y: m.y - r } };
                    },
                  }
                );
              },
              ey = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    options: e,
                    fn(t) {
                      let {
                          x: n,
                          y: r,
                          placement: o,
                          rects: i,
                          middlewareData: l,
                        } = t,
                        {
                          offset: u = 0,
                          mainAxis: a = !0,
                          crossAxis: s = !0,
                        } = K(e, t),
                        c = { x: n, y: r },
                        d = J(o),
                        f = q(d),
                        p = c[f],
                        v = c[d],
                        m = K(u, t),
                        g =
                          "number" == typeof m
                            ? { mainAxis: m, crossAxis: 0 }
                            : { mainAxis: 0, crossAxis: 0, ...m };
                      if (a) {
                        let e = "y" === f ? "height" : "width",
                          t = i.reference[f] - i.floating[e] + g.mainAxis,
                          n = i.reference[f] + i.reference[e] - g.mainAxis;
                        p < t ? (p = t) : p > n && (p = n);
                      }
                      if (s) {
                        var h, y;
                        let e = "y" === f ? "width" : "height",
                          t = ["top", "left"].includes(Z(o)),
                          n =
                            i.reference[d] -
                            i.floating[e] +
                            ((t && (null == (h = l.offset) ? void 0 : h[d])) ||
                              0) +
                            (t ? 0 : g.crossAxis),
                          r =
                            i.reference[d] +
                            i.reference[e] +
                            (t
                              ? 0
                              : (null == (y = l.offset) ? void 0 : y[d]) || 0) -
                            (t ? g.crossAxis : 0);
                        v < n ? (v = n) : v > r && (v = r);
                      }
                      return { [f]: p, [d]: v };
                    },
                  }
                );
              },
              eb = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "size",
                    options: e,
                    async fn(t) {
                      let n, r;
                      let {
                          placement: o,
                          rects: i,
                          platform: l,
                          elements: u,
                        } = t,
                        { apply: a = () => {}, ...s } = K(e, t),
                        c = await el(t, s),
                        d = Z(o),
                        f = X(o),
                        p = "y" === J(o),
                        { width: v, height: m } = i.floating;
                      "top" === d || "bottom" === d
                        ? ((n = d),
                          (r =
                            f ===
                            ((await (null == l.isRTL
                              ? void 0
                              : l.isRTL(u.floating)))
                              ? "start"
                              : "end")
                              ? "left"
                              : "right"))
                        : ((r = d), (n = "end" === f ? "top" : "bottom"));
                      let g = m - c[n],
                        h = v - c[r],
                        y = !t.middlewareData.shift,
                        b = g,
                        x = h;
                      if (p) {
                        let e = v - c.left - c.right;
                        x = f || y ? V(h, e) : e;
                      } else {
                        let e = m - c.top - c.bottom;
                        b = f || y ? V(g, e) : e;
                      }
                      if (y && !f) {
                        let e = W(c.left, 0),
                          t = W(c.right, 0),
                          n = W(c.top, 0),
                          r = W(c.bottom, 0);
                        p
                          ? (x =
                              v -
                              2 *
                                (0 !== e || 0 !== t
                                  ? e + t
                                  : W(c.left, c.right)))
                          : (b =
                              m -
                              2 *
                                (0 !== n || 0 !== r
                                  ? n + r
                                  : W(c.top, c.bottom)));
                      }
                      await a({ ...t, availableWidth: x, availableHeight: b });
                      let w = await l.getDimensions(u.floating);
                      return v !== w.width || m !== w.height
                        ? { reset: { rects: !0 } }
                        : {};
                    },
                  }
                );
              };
            function ex(e) {
              let t = b(e),
                n = parseFloat(t.width) || 0,
                r = parseFloat(t.height) || 0,
                o = f(e),
                i = o ? e.offsetWidth : n,
                l = o ? e.offsetHeight : r,
                u = U(n) !== i || U(r) !== l;
              return u && ((n = i), (r = l)), { width: n, height: r, $: u };
            }
            function ew(e) {
              return d(e) ? e : e.contextElement;
            }
            function eE(e) {
              let t = ew(e);
              if (!f(t)) return z(1);
              let n = t.getBoundingClientRect(),
                { width: r, height: o, $: i } = ex(t),
                l = (i ? U(n.width) : n.width) / r,
                u = (i ? U(n.height) : n.height) / o;
              return (
                (l && Number.isFinite(l)) || (l = 1),
                (u && Number.isFinite(u)) || (u = 1),
                { x: l, y: u }
              );
            }
            let e_ = z(0);
            function eR(e) {
              let t = a(e);
              return g() && t.visualViewport
                ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop,
                  }
                : e_;
            }
            function eC(e, t, n, r) {
              var o;
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let i = e.getBoundingClientRect(),
                l = ew(e),
                u = z(1);
              t && (r ? d(r) && (u = eE(r)) : (u = eE(e)));
              let s = (void 0 === (o = n) && (o = !1),
                r && (!o || r === a(l)) && o)
                  ? eR(l)
                  : z(0),
                c = (i.left + s.x) / u.x,
                f = (i.top + s.y) / u.y,
                p = i.width / u.x,
                v = i.height / u.y;
              if (l) {
                let e = a(l),
                  t = r && d(r) ? a(r) : r,
                  n = e.frameElement;
                for (; n && r && t !== e; ) {
                  let e = eE(n),
                    t = n.getBoundingClientRect(),
                    r = b(n),
                    o =
                      t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                  (c *= e.x),
                    (f *= e.y),
                    (p *= e.x),
                    (v *= e.y),
                    (c += o),
                    (f += i),
                    (n = a(n).frameElement);
                }
              }
              return er({ width: p, height: v, x: c, y: f });
            }
            function ek(e) {
              return eC(s(e)).left + x(e).scrollLeft;
            }
            function eS(e, t, n) {
              let r;
              if ("viewport" === t)
                r = (function (e, t) {
                  let n = a(e),
                    r = s(e),
                    o = n.visualViewport,
                    i = r.clientWidth,
                    l = r.clientHeight,
                    u = 0,
                    c = 0;
                  if (o) {
                    (i = o.width), (l = o.height);
                    let e = g();
                    (!e || (e && "fixed" === t)) &&
                      ((u = o.offsetLeft), (c = o.offsetTop));
                  }
                  return { width: i, height: l, x: u, y: c };
                })(e, n);
              else if ("document" === t)
                r = (function (e) {
                  let t = s(e),
                    n = x(e),
                    r = e.ownerDocument.body,
                    o = W(
                      t.scrollWidth,
                      t.clientWidth,
                      r.scrollWidth,
                      r.clientWidth,
                    ),
                    i = W(
                      t.scrollHeight,
                      t.clientHeight,
                      r.scrollHeight,
                      r.clientHeight,
                    ),
                    l = -n.scrollLeft + ek(e),
                    u = -n.scrollTop;
                  return (
                    "rtl" === b(r).direction &&
                      (l += W(t.clientWidth, r.clientWidth) - o),
                    { width: o, height: i, x: l, y: u }
                  );
                })(s(e));
              else if (d(t))
                r = (function (e, t) {
                  let n = eC(e, !0, "fixed" === t),
                    r = n.top + e.clientTop,
                    o = n.left + e.clientLeft,
                    i = f(e) ? eE(e) : z(1),
                    l = e.clientWidth * i.x;
                  return {
                    width: l,
                    height: e.clientHeight * i.y,
                    x: o * i.x,
                    y: r * i.y,
                  };
                })(t, n);
              else {
                let n = eR(e);
                r = { ...t, x: t.x - n.x, y: t.y - n.y };
              }
              return er(r);
            }
            function eO(e, t) {
              return f(e) && "fixed" !== b(e).position
                ? t
                  ? t(e)
                  : e.offsetParent
                : null;
            }
            function eL(e, t) {
              let n = a(e);
              if (!f(e)) return n;
              let r = eO(e, t);
              for (
                ;
                r &&
                ["table", "td", "th"].includes(u(r)) &&
                "static" === b(r).position;

              )
                r = eO(r, t);
              return r &&
                ("html" === u(r) ||
                  ("body" === u(r) && "static" === b(r).position && !m(r)))
                ? n
                : r ||
                    (function (e) {
                      let t = w(e);
                      for (; f(t) && !y(t); ) {
                        if (m(t)) return t;
                        t = w(t);
                      }
                      return null;
                    })(e) ||
                    n;
            }
            let eT = async function (e) {
                let { reference: t, floating: n, strategy: r } = e,
                  o = this.getOffsetParent || eL,
                  i = this.getDimensions;
                return {
                  reference: (function (e, t, n) {
                    let r = f(t),
                      o = s(t),
                      i = "fixed" === n,
                      l = eC(e, !0, i, t),
                      a = { scrollLeft: 0, scrollTop: 0 },
                      c = z(0);
                    if (r || (!r && !i)) {
                      if ((("body" !== u(t) || v(o)) && (a = x(t)), r)) {
                        let e = eC(t, !0, i, t);
                        (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                      } else o && (c.x = ek(o));
                    }
                    return {
                      x: l.left + a.scrollLeft - c.x,
                      y: l.top + a.scrollTop - c.y,
                      width: l.width,
                      height: l.height,
                    };
                  })(t, await o(n), r),
                  floating: { x: 0, y: 0, ...(await i(n)) },
                };
              },
              eN = {
                convertOffsetParentRelativeRectToViewportRelativeRect:
                  function (e) {
                    let { rect: t, offsetParent: n, strategy: r } = e,
                      o = f(n),
                      i = s(n);
                    if (n === i) return t;
                    let l = { scrollLeft: 0, scrollTop: 0 },
                      a = z(1),
                      c = z(0);
                    if (
                      (o || (!o && "fixed" !== r)) &&
                      (("body" !== u(n) || v(i)) && (l = x(n)), f(n))
                    ) {
                      let e = eC(n);
                      (a = eE(n)),
                        (c.x = e.x + n.clientLeft),
                        (c.y = e.y + n.clientTop);
                    }
                    return {
                      width: t.width * a.x,
                      height: t.height * a.y,
                      x: t.x * a.x - l.scrollLeft * a.x + c.x,
                      y: t.y * a.y - l.scrollTop * a.y + c.y,
                    };
                  },
                getDocumentElement: s,
                getClippingRect: function (e) {
                  let {
                      element: t,
                      boundary: n,
                      rootBoundary: r,
                      strategy: o,
                    } = e,
                    i = [
                      ...("clippingAncestors" === n
                        ? (function (e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = E(e, [], !1).filter(
                                (e) => d(e) && "body" !== u(e),
                              ),
                              o = null,
                              i = "fixed" === b(e).position,
                              l = i ? w(e) : e;
                            for (; d(l) && !y(l); ) {
                              let t = b(l),
                                n = m(l);
                              n || "fixed" !== t.position || (o = null),
                                (
                                  i
                                    ? !n && !o
                                    : (!n &&
                                        "static" === t.position &&
                                        !!o &&
                                        ["absolute", "fixed"].includes(
                                          o.position,
                                        )) ||
                                      (v(l) &&
                                        !n &&
                                        (function e(t, n) {
                                          let r = w(t);
                                          return (
                                            !(r === n || !d(r) || y(r)) &&
                                            ("fixed" === b(r).position ||
                                              e(r, n))
                                          );
                                        })(e, l))
                                )
                                  ? (r = r.filter((e) => e !== l))
                                  : (o = t),
                                (l = w(l));
                            }
                            return t.set(e, r), r;
                          })(t, this._c)
                        : [].concat(n)),
                      r,
                    ],
                    l = i[0],
                    a = i.reduce(
                      (e, n) => {
                        let r = eS(t, n, o);
                        return (
                          (e.top = W(r.top, e.top)),
                          (e.right = V(r.right, e.right)),
                          (e.bottom = V(r.bottom, e.bottom)),
                          (e.left = W(r.left, e.left)),
                          e
                        );
                      },
                      eS(t, l, o),
                    );
                  return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top,
                  };
                },
                getOffsetParent: eL,
                getElementRects: eT,
                getClientRects: function (e) {
                  return Array.from(e.getClientRects());
                },
                getDimensions: function (e) {
                  return ex(e);
                },
                getScale: eE,
                isElement: d,
                isRTL: function (e) {
                  return "rtl" === b(e).direction;
                },
              };
            function eP(e, t, n, r) {
              let o;
              void 0 === r && (r = {});
              let {
                  ancestorScroll: i = !0,
                  ancestorResize: l = !0,
                  elementResize: u = "function" == typeof ResizeObserver,
                  layoutShift: a = "function" == typeof IntersectionObserver,
                  animationFrame: c = !1,
                } = r,
                d = ew(e),
                f = i || l ? [...(d ? E(d) : []), ...E(t)] : [];
              f.forEach((e) => {
                i && e.addEventListener("scroll", n, { passive: !0 }),
                  l && e.addEventListener("resize", n);
              });
              let p =
                  d && a
                    ? (function (e, t) {
                        let n,
                          r = null,
                          o = s(e);
                        function i() {
                          clearTimeout(n), r && r.disconnect(), (r = null);
                        }
                        return (
                          !(function l(u, a) {
                            void 0 === u && (u = !1),
                              void 0 === a && (a = 1),
                              i();
                            let {
                              left: s,
                              top: c,
                              width: d,
                              height: f,
                            } = e.getBoundingClientRect();
                            if ((u || t(), !d || !f)) return;
                            let p = H(c),
                              v = H(o.clientWidth - (s + d)),
                              m = {
                                rootMargin:
                                  -p +
                                  "px " +
                                  -v +
                                  "px " +
                                  -H(o.clientHeight - (c + f)) +
                                  "px " +
                                  -H(s) +
                                  "px",
                                threshold: W(0, V(1, a)) || 1,
                              },
                              g = !0;
                            function h(e) {
                              let t = e[0].intersectionRatio;
                              if (t !== a) {
                                if (!g) return l();
                                t
                                  ? l(!1, t)
                                  : (n = setTimeout(() => {
                                      l(!1, 1e-7);
                                    }, 100));
                              }
                              g = !1;
                            }
                            try {
                              r = new IntersectionObserver(h, {
                                ...m,
                                root: o.ownerDocument,
                              });
                            } catch (e) {
                              r = new IntersectionObserver(h, m);
                            }
                            r.observe(e);
                          })(!0),
                          i
                        );
                      })(d, n)
                    : null,
                v = -1,
                m = null;
              u &&
                ((m = new ResizeObserver((e) => {
                  let [r] = e;
                  r &&
                    r.target === d &&
                    m &&
                    (m.unobserve(t),
                    cancelAnimationFrame(v),
                    (v = requestAnimationFrame(() => {
                      m && m.observe(t);
                    }))),
                    n();
                })),
                d && !c && m.observe(d),
                m.observe(t));
              let g = c ? eC(e) : null;
              return (
                c &&
                  (function t() {
                    let r = eC(e);
                    g &&
                      (r.x !== g.x ||
                        r.y !== g.y ||
                        r.width !== g.width ||
                        r.height !== g.height) &&
                      n(),
                      (g = r),
                      (o = requestAnimationFrame(t));
                  })(),
                n(),
                () => {
                  f.forEach((e) => {
                    i && e.removeEventListener("scroll", n),
                      l && e.removeEventListener("resize", n);
                  }),
                    p && p(),
                    m && m.disconnect(),
                    (m = null),
                    c && cancelAnimationFrame(o);
                }
              );
            }
            let eM = (e, t, n) => {
                let r = new Map(),
                  o = { platform: eN, ...n },
                  i = { ...o.platform, _c: r };
                return ei(e, t, { ...o, platform: i });
              },
              eA =
                ((o = {
                  createPortal: () => h.createPortal,
                  flushSync: () => h.flushSync,
                }),
                (i = {}),
                n.d(i, o),
                i),
              eI = (e) => ({
                name: "arrow",
                options: e,
                fn(t) {
                  let { element: n, padding: r } =
                    "function" == typeof e ? e(t) : e;
                  if (n && {}.hasOwnProperty.call(n, "current")) {
                    if (null != n.current)
                      return eu({ element: n.current, padding: r }).fn(t);
                  } else if (n) return eu({ element: n, padding: r }).fn(t);
                  return {};
                },
              });
            var ej =
              "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
            function eB(e, t) {
              let n, r, o;
              if (e === t) return !0;
              if (typeof e != typeof t) return !1;
              if ("function" == typeof e && e.toString() === t.toString())
                return !0;
              if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                  if ((n = e.length) != t.length) return !1;
                  for (r = n; 0 != r--; ) if (!eB(e[r], t[r])) return !1;
                  return !0;
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                  return !1;
                for (r = n; 0 != r--; )
                  if (!{}.hasOwnProperty.call(t, o[r])) return !1;
                for (r = n; 0 != r--; ) {
                  let n = o[r];
                  if (("_owner" !== n || !e.$$typeof) && !eB(e[n], t[n]))
                    return !1;
                }
                return !0;
              }
              return e != e && t != t;
            }
            function eD(e) {
              return (
                (e.ownerDocument.defaultView || window).devicePixelRatio || 1
              );
            }
            function eF(e, t) {
              let n = eD(e);
              return Math.round(t * n) / n;
            }
            function eV(e) {
              let t = l.useRef(e);
              return (
                ej(() => {
                  t.current = e;
                }),
                t
              );
            }
            var eW =
                'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
              eU = "undefined" == typeof Element,
              eH = eU
                ? function () {}
                : Element.prototype.matches ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector,
              ez =
                !eU && Element.prototype.getRootNode
                  ? function (e) {
                      var t;
                      return null == e
                        ? void 0
                        : null === (t = e.getRootNode) || void 0 === t
                          ? void 0
                          : t.call(e);
                    }
                  : function (e) {
                      return null == e ? void 0 : e.ownerDocument;
                    },
              eG = function e(t, n) {
                void 0 === n && (n = !0);
                var r,
                  o =
                    null == t
                      ? void 0
                      : null === (r = t.getAttribute) || void 0 === r
                        ? void 0
                        : r.call(t, "inert");
                return "" === o || "true" === o || (n && t && e(t.parentNode));
              },
              eY = function (e) {
                var t,
                  n =
                    null == e
                      ? void 0
                      : null === (t = e.getAttribute) || void 0 === t
                        ? void 0
                        : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              },
              eK = function (e, t, n) {
                if (eG(e)) return [];
                var r = Array.prototype.slice.apply(e.querySelectorAll(eW));
                return t && eH.call(e, eW) && r.unshift(e), (r = r.filter(n));
              },
              eZ = function e(t, n, r) {
                for (var o = [], i = Array.from(t); i.length; ) {
                  var l = i.shift();
                  if (!eG(l, !1)) {
                    if ("SLOT" === l.tagName) {
                      var u = l.assignedElements(),
                        a = e(u.length ? u : l.children, !0, r);
                      r.flatten
                        ? o.push.apply(o, a)
                        : o.push({ scopeParent: l, candidates: a });
                    } else {
                      eH.call(l, eW) &&
                        r.filter(l) &&
                        (n || !t.includes(l)) &&
                        o.push(l);
                      var s =
                          l.shadowRoot ||
                          ("function" == typeof r.getShadowRoot &&
                            r.getShadowRoot(l)),
                        c =
                          !eG(s, !1) &&
                          (!r.shadowRootFilter || r.shadowRootFilter(l));
                      if (s && c) {
                        var d = e(!0 === s ? l.children : s.children, !0, r);
                        r.flatten
                          ? o.push.apply(o, d)
                          : o.push({ scopeParent: l, candidates: d });
                      } else i.unshift.apply(i, l.children);
                    }
                  }
                }
                return o;
              },
              eX = function (e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
              },
              eq = function (e) {
                if (!e) throw Error("No node provided");
                return e.tabIndex < 0 &&
                  (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || eY(e)) &&
                  !eX(e)
                  ? 0
                  : e.tabIndex;
              },
              e$ = function (e, t) {
                var n = eq(e);
                return n < 0 && t && !eX(e) ? 0 : n;
              },
              eJ = function (e, t) {
                return e.tabIndex === t.tabIndex
                  ? e.documentOrder - t.documentOrder
                  : e.tabIndex - t.tabIndex;
              },
              eQ = function (e) {
                return "INPUT" === e.tagName;
              },
              e0 = function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              },
              e1 = function (e) {
                if (!e.name) return !0;
                var t,
                  n = e.form || ez(e),
                  r = function (e) {
                    return n.querySelectorAll(
                      'input[type="radio"][name="' + e + '"]',
                    );
                  };
                if (
                  void 0 !== window.CSS &&
                  "function" == typeof window.CSS.escape
                )
                  t = r(window.CSS.escape(e.name));
                else
                  try {
                    t = r(e.name);
                  } catch (e) {
                    return (
                      console.error(
                        "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                        e.message,
                      ),
                      !1
                    );
                  }
                var o = e0(t, e.form);
                return !o || o === e;
              },
              e9 = function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  l,
                  u,
                  a = e && ez(e),
                  s = null === (t = a) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (a && a !== e)
                  for (
                    c = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !c && s;

                  )
                    c = !!(
                      null !==
                        (l = s =
                          null === (i = a = ez(s)) || void 0 === i
                            ? void 0
                            : i.host) &&
                      void 0 !== l &&
                      null !== (u = l.ownerDocument) &&
                      void 0 !== u &&
                      u.contains(s)
                    );
                return c;
              },
              e8 = function (e) {
                var t = e.getBoundingClientRect(),
                  n = t.width,
                  r = t.height;
                return 0 === n && 0 === r;
              },
              e4 = function (e, t) {
                var n = t.displayCheck,
                  r = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var o = eH.call(e, "details>summary:first-of-type")
                  ? e.parentElement
                  : e;
                if (eH.call(o, "details:not([open]) *")) return !0;
                if (n && "full" !== n && "legacy-full" !== n) {
                  if ("non-zero-area" === n) return e8(e);
                } else {
                  if ("function" == typeof r) {
                    for (var i = e; e; ) {
                      var l = e.parentElement,
                        u = ez(e);
                      if (l && !l.shadowRoot && !0 === r(l)) return e8(e);
                      e = e.assignedSlot
                        ? e.assignedSlot
                        : l || u === e.ownerDocument
                          ? l
                          : u.host;
                    }
                    e = i;
                  }
                  if (e9(e)) return !e.getClientRects().length;
                  if ("legacy-full" !== n) return !0;
                }
                return !1;
              },
              e5 = function (e) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                  for (var t = e.parentElement; t; ) {
                    if ("FIELDSET" === t.tagName && t.disabled) {
                      for (var n = 0; n < t.children.length; n++) {
                        var r = t.children.item(n);
                        if ("LEGEND" === r.tagName)
                          return (
                            !!eH.call(t, "fieldset[disabled] *") ||
                            !r.contains(e)
                          );
                      }
                      return !0;
                    }
                    t = t.parentElement;
                  }
                return !1;
              },
              e6 = function (e, t) {
                var n, r, o;
                return (
                  !(
                    (eQ((n = t)) && "radio" === n.type && !e1(n)) ||
                    0 > eq(t)
                  ) &&
                  ((r = e),
                  !(
                    (o = t).disabled ||
                    eG(o) ||
                    (eQ(o) && "hidden" === o.type) ||
                    e4(o, r) ||
                    ("DETAILS" === o.tagName &&
                      Array.prototype.slice
                        .apply(o.children)
                        .some(function (e) {
                          return "SUMMARY" === e.tagName;
                        })) ||
                    e5(o)
                  ))
                );
              },
              e2 = function (e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!isNaN(t) || t >= 0;
              },
              e3 = function e(t) {
                var n = [],
                  r = [];
                return (
                  t.forEach(function (t, o) {
                    var i = !!t.scopeParent,
                      l = i ? t.scopeParent : t,
                      u = e$(l, i),
                      a = i ? e(t.candidates) : l;
                    0 === u
                      ? i
                        ? n.push.apply(n, a)
                        : n.push(l)
                      : r.push({
                          documentOrder: o,
                          tabIndex: u,
                          item: t,
                          isScope: i,
                          content: a,
                        });
                  }),
                  r
                    .sort(eJ)
                    .reduce(function (e, t) {
                      return (
                        t.isScope
                          ? e.push.apply(e, t.content)
                          : e.push(t.content),
                        e
                      );
                    }, [])
                    .concat(n)
                );
              },
              e7 = function (e, t) {
                return e3(
                  (t = t || {}).getShadowRoot
                    ? eZ([e], t.includeContainer, {
                        filter: e6.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: e2,
                      })
                    : eK(e, t.includeContainer, e6.bind(null, t)),
                );
              };
            function te(e) {
              return l.useMemo(
                () =>
                  e.every((e) => null == e)
                    ? null
                    : (t) => {
                        e.forEach((e) => {
                          "function" == typeof e
                            ? e(t)
                            : null != e && (e.current = t);
                        });
                      },
                e,
              );
            }
            let tt = l["useInsertionEffect".toString()] || ((e) => e());
            function tn(e) {
              let t = l.useRef(() => {});
              return (
                tt(() => {
                  t.current = e;
                }),
                l.useCallback(function () {
                  for (
                    var e = arguments.length, n = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  return null == t.current ? void 0 : t.current(...n);
                }, [])
              );
            }
            let tr = "ArrowUp",
              to = "ArrowDown",
              ti = "ArrowLeft",
              tl = "ArrowRight";
            function tu(e, t, n) {
              return Math.floor(e / t) !== n;
            }
            function ta(e, t) {
              return t < 0 || t >= e.current.length;
            }
            function ts(e, t) {
              return td(e, { disabledIndices: t });
            }
            function tc(e, t) {
              return td(e, {
                decrement: !0,
                startingIndex: e.current.length,
                disabledIndices: t,
              });
            }
            function td(e, t) {
              let {
                  startingIndex: n = -1,
                  decrement: r = !1,
                  disabledIndices: o,
                  amount: i = 1,
                } = void 0 === t ? {} : t,
                l = e.current,
                u = n;
              do {
                var a, s;
                u += r ? -i : i;
              } while (
                u >= 0 &&
                u <= l.length - 1 &&
                (o
                  ? o.includes(u)
                  : null == l[u] ||
                    (null == (a = l[u])
                      ? void 0
                      : a.hasAttribute("disabled")) ||
                    (null == (s = l[u])
                      ? void 0
                      : s.getAttribute("aria-disabled")) === "true")
              );
              return u;
            }
            function tf(e, t) {
              let {
                  event: n,
                  orientation: r,
                  loop: o,
                  cols: i,
                  disabledIndices: l,
                  minIndex: u,
                  maxIndex: a,
                  prevIndex: s,
                  stopEvent: c = !1,
                } = t,
                d = s;
              if (n.key === tr) {
                if ((c && B(n), -1 === s)) d = a;
                else if (
                  ((d = td(e, {
                    startingIndex: d,
                    amount: i,
                    decrement: !0,
                    disabledIndices: l,
                  })),
                  o && (s - i < u || d < 0))
                ) {
                  let e = s % i,
                    t = a % i,
                    n = a - (t - e);
                  d = t === e ? a : t > e ? n : n - i;
                }
                ta(e, d) && (d = s);
              }
              if (
                (n.key === to &&
                  (c && B(n),
                  -1 === s
                    ? (d = u)
                    : ((d = td(e, {
                        startingIndex: s,
                        amount: i,
                        disabledIndices: l,
                      })),
                      o &&
                        s + i > a &&
                        (d = td(e, {
                          startingIndex: (s % i) - i,
                          amount: i,
                          disabledIndices: l,
                        }))),
                  ta(e, d) && (d = s)),
                "both" === r)
              ) {
                let t = H(s / i);
                n.key === tl &&
                  (c && B(n),
                  s % i != i - 1
                    ? ((d = td(e, { startingIndex: s, disabledIndices: l })),
                      o &&
                        tu(d, i, t) &&
                        (d = td(e, {
                          startingIndex: s - (s % i) - 1,
                          disabledIndices: l,
                        })))
                    : o &&
                      (d = td(e, {
                        startingIndex: s - (s % i) - 1,
                        disabledIndices: l,
                      })),
                  tu(d, i, t) && (d = s)),
                  n.key === ti &&
                    (c && B(n),
                    s % i != 0
                      ? ((d = td(e, {
                          startingIndex: s,
                          disabledIndices: l,
                          decrement: !0,
                        })),
                        o &&
                          tu(d, i, t) &&
                          (d = td(e, {
                            startingIndex: s + (i - (s % i)),
                            decrement: !0,
                            disabledIndices: l,
                          })))
                      : o &&
                        (d = td(e, {
                          startingIndex: s + (i - (s % i)),
                          decrement: !0,
                          disabledIndices: l,
                        })),
                    tu(d, i, t) && (d = s));
                let r = H(a / i) === t;
                ta(e, d) &&
                  (d =
                    o && r
                      ? n.key === ti
                        ? a
                        : td(e, {
                            startingIndex: s - (s % i) - 1,
                            disabledIndices: l,
                          })
                      : s);
              }
              return d;
            }
            let tp = 0;
            function tv(e, t) {
              void 0 === t && (t = {});
              let {
                preventScroll: n = !1,
                cancelPrevious: r = !0,
                sync: o = !1,
              } = t;
              r && cancelAnimationFrame(tp);
              let i = () =>
                null == e ? void 0 : e.focus({ preventScroll: n });
              o ? i() : (tp = requestAnimationFrame(i));
            }
            var tm =
              "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
            function tg(e, t) {
              let n = e.compareDocumentPosition(t);
              return n & Node.DOCUMENT_POSITION_FOLLOWING ||
                n & Node.DOCUMENT_POSITION_CONTAINED_BY
                ? -1
                : n & Node.DOCUMENT_POSITION_PRECEDING ||
                    n & Node.DOCUMENT_POSITION_CONTAINS
                  ? 1
                  : 0;
            }
            let th = l.createContext({
              register: () => {},
              unregister: () => {},
              map: new Map(),
              elementsRef: { current: [] },
            });
            function ty(e) {
              let { children: t, elementsRef: n, labelsRef: r } = e,
                [o, i] = l.useState(() => new Map()),
                u = l.useCallback((e) => {
                  i((t) => new Map(t).set(e, null));
                }, []),
                a = l.useCallback((e) => {
                  i((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
                }, []);
              return (
                tm(() => {
                  let e = new Map(o);
                  Array.from(e.keys())
                    .sort(tg)
                    .forEach((t, n) => {
                      e.set(t, n);
                    }),
                    !(function (e, t) {
                      if (e.size !== t.size) return !1;
                      for (let [n, r] of e.entries())
                        if (r !== t.get(n)) return !1;
                      return !0;
                    })(o, e) && i(e);
                }, [o]),
                l.createElement(
                  th.Provider,
                  {
                    value: l.useMemo(
                      () => ({
                        register: u,
                        unregister: a,
                        map: o,
                        elementsRef: n,
                        labelsRef: r,
                      }),
                      [u, a, o, n, r],
                    ),
                  },
                  t,
                )
              );
            }
            function tb(e) {
              let { label: t } = void 0 === e ? {} : e,
                [n, r] = l.useState(null),
                o = l.useRef(null),
                {
                  register: i,
                  unregister: u,
                  map: a,
                  elementsRef: s,
                  labelsRef: c,
                } = l.useContext(th),
                d = l.useCallback(
                  (e) => {
                    if (
                      ((o.current = e), null !== n && ((s.current[n] = e), c))
                    ) {
                      var r;
                      let o = void 0 !== t;
                      c.current[n] = o
                        ? t
                        : null != (r = null == e ? void 0 : e.textContent)
                          ? r
                          : null;
                    }
                  },
                  [n, s, c, t],
                );
              return (
                tm(() => {
                  let e = o.current;
                  if (e)
                    return (
                      i(e),
                      () => {
                        u(e);
                      }
                    );
                }, [i, u]),
                tm(() => {
                  let e = o.current ? a.get(o.current) : null;
                  null != e && r(e);
                }, [a]),
                l.useMemo(() => ({ ref: d, index: null == n ? -1 : n }), [n, d])
              );
            }
            function tx(e, t) {
              return "function" == typeof e
                ? e(t)
                : e
                  ? l.cloneElement(e, t)
                  : l.createElement("div", t);
            }
            let tw = l.createContext({ activeIndex: 0, onNavigate: () => {} }),
              tE = [ti, tl],
              t_ = [tr, to],
              tR = [...tE, ...t_],
              tC = l.forwardRef(function (e, t) {
                let {
                    render: n,
                    orientation: r = "both",
                    loop: o = !0,
                    cols: i = 1,
                    disabledIndices: u,
                    activeIndex: a,
                    onNavigate: s,
                    ...c
                  } = e,
                  [d, f] = l.useState(0),
                  p = null != a ? a : d,
                  v = tn(null != s ? s : f),
                  m = l.useRef([]),
                  g = n && "function" != typeof n ? n.props : {},
                  h = l.useMemo(
                    () => ({ activeIndex: p, onNavigate: v }),
                    [p, v],
                  ),
                  y = i > 1,
                  b = {
                    ...c,
                    ...g,
                    ref: t,
                    "aria-orientation": "both" === r ? void 0 : r,
                    onKeyDown(e) {
                      null == c.onKeyDown || c.onKeyDown(e),
                        null == g.onKeyDown || g.onKeyDown(e),
                        (function (e) {
                          if (!tR.includes(e.key)) return;
                          let t = ts(m, u),
                            n = tc(m, u),
                            l = p;
                          y &&
                            (l = tf(m, {
                              event: e,
                              orientation: r,
                              loop: o,
                              cols: i,
                              disabledIndices: u,
                              minIndex: t,
                              maxIndex: n,
                              prevIndex: p,
                            }));
                          let a = {
                              horizontal: [tl],
                              vertical: [to],
                              both: [tl, to],
                            }[r],
                            s = {
                              horizontal: [ti],
                              vertical: [tr],
                              both: [ti, tr],
                            }[r],
                            c = y
                              ? tR
                              : { horizontal: tE, vertical: t_, both: tR }[r];
                          l === p &&
                            [...a, ...s].includes(e.key) &&
                            (l =
                              o && l === n && a.includes(e.key)
                                ? t
                                : o && l === t && s.includes(e.key)
                                  ? n
                                  : td(m, {
                                      startingIndex: l,
                                      decrement: s.includes(e.key),
                                      disabledIndices: u,
                                    })),
                            l === p ||
                              ta(m, l) ||
                              (e.stopPropagation(),
                              c.includes(e.key) && e.preventDefault(),
                              v(l),
                              queueMicrotask(() => {
                                tv(m.current[l]);
                              }));
                        })(e);
                    },
                  };
                return l.createElement(
                  tw.Provider,
                  { value: h },
                  l.createElement(ty, { elementsRef: m }, tx(n, b)),
                );
              }),
              tk = l.forwardRef(function (e, t) {
                let { render: n, ...r } = e,
                  o = n && "function" != typeof n ? n.props : {},
                  { activeIndex: i, onNavigate: u } = l.useContext(tw),
                  { ref: a, index: s } = tb(),
                  c = te([a, t, o.ref]),
                  d = i === s;
                return tx(n, {
                  ...r,
                  ...o,
                  ref: c,
                  tabIndex: d ? 0 : -1,
                  "data-active": d ? "" : void 0,
                  onFocus(e) {
                    null == r.onFocus || r.onFocus(e),
                      null == o.onFocus || o.onFocus(e),
                      u(s);
                  },
                });
              });
            function tS() {
              return (tS = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }).apply(this, arguments);
            }
            let tO = !1,
              tL = 0,
              tT = () => "floating-ui-" + tL++,
              tN =
                l["useId".toString()] ||
                function () {
                  let [e, t] = l.useState(() => (tO ? tT() : void 0));
                  return (
                    tm(() => {
                      null == e && t(tT());
                    }, []),
                    l.useEffect(() => {
                      tO || (tO = !0);
                    }, []),
                    e
                  );
                },
              tP = l.forwardRef(function (e, t) {
                let {
                    context: {
                      placement: n,
                      elements: { floating: r },
                      middlewareData: { arrow: o },
                    },
                    width: i = 14,
                    height: u = 7,
                    tipRadius: a = 0,
                    strokeWidth: s = 0,
                    staticOffset: c,
                    stroke: d,
                    d: f,
                    style: { transform: p, ...v } = {},
                    ...m
                  } = e,
                  g = tN();
                if (!r) return null;
                let h = (s *= 2) / 2,
                  y = (i / 2) * (-(a / 8) + 1),
                  b = ((u / 2) * a) / 4,
                  [x, w] = n.split("-"),
                  E = eN.isRTL(r),
                  _ = !!f,
                  R = "top" === x || "bottom" === x,
                  C = c && "end" === w ? "bottom" : "top",
                  k = c && "end" === w ? "right" : "left";
                c && E && (k = "end" === w ? "left" : "right");
                let S = (null == o ? void 0 : o.x) != null ? c || o.x : "",
                  O = (null == o ? void 0 : o.y) != null ? c || o.y : "",
                  L =
                    f ||
                    "M0,0 H" +
                      i +
                      " L" +
                      (i - y) +
                      "," +
                      (u - b) +
                      (" Q" + i / 2 + "," + u + " ") +
                      y +
                      "," +
                      (u - b) +
                      " Z",
                  T = {
                    top: _ ? "rotate(180deg)" : "",
                    left: _ ? "rotate(90deg)" : "rotate(-90deg)",
                    bottom: _ ? "" : "rotate(180deg)",
                    right: _ ? "rotate(-90deg)" : "rotate(90deg)",
                  }[x];
                return l.createElement(
                  "svg",
                  tS({}, m, {
                    "aria-hidden": !0,
                    ref: t,
                    width: _ ? i : i + s,
                    height: i,
                    viewBox: "0 0 " + i + " " + (u > i ? u : i),
                    style: {
                      position: "absolute",
                      pointerEvents: "none",
                      [k]: S,
                      [C]: O,
                      [x]: R || _ ? "100%" : "calc(100% - " + s / 2 + "px)",
                      transform: "" + T + (null != p ? p : ""),
                      ...v,
                    },
                  }),
                  s > 0 &&
                    l.createElement("path", {
                      clipPath: "url(#" + g + ")",
                      fill: "none",
                      stroke: d,
                      strokeWidth: s + (f ? 0 : 1),
                      d: L,
                    }),
                  l.createElement("path", {
                    stroke: s && !f ? m.fill : "none",
                    d: L,
                  }),
                  l.createElement(
                    "clipPath",
                    { id: g },
                    l.createElement("rect", {
                      x: -h,
                      y: h * (_ ? -1 : 1),
                      width: i + s,
                      height: i,
                    }),
                  ),
                );
              });
            function tM() {
              let e = new Map();
              return {
                emit(t, n) {
                  var r;
                  null == (r = e.get(t)) || r.forEach((e) => e(n));
                },
                on(t, n) {
                  e.set(t, [...(e.get(t) || []), n]);
                },
                off(t, n) {
                  var r;
                  e.set(
                    t,
                    (null == (r = e.get(t))
                      ? void 0
                      : r.filter((e) => e !== n)) || [],
                  );
                },
              };
            }
            let tA = l.createContext(null),
              tI = l.createContext(null),
              tj = () => {
                var e;
                return (null == (e = l.useContext(tA)) ? void 0 : e.id) || null;
              },
              tB = () => l.useContext(tI);
            function tD(e) {
              let t = tN(),
                n = tB(),
                r = tj(),
                o = e || r;
              return (
                tm(() => {
                  let e = { id: t, parentId: o };
                  return (
                    null == n || n.addNode(e),
                    () => {
                      null == n || n.removeNode(e);
                    }
                  );
                }, [n, t, o]),
                t
              );
            }
            function tF(e) {
              let { children: t, id: n } = e,
                r = tj();
              return l.createElement(
                tA.Provider,
                { value: l.useMemo(() => ({ id: n, parentId: r }), [n, r]) },
                t,
              );
            }
            function tV(e) {
              let { children: t } = e,
                n = l.useRef([]),
                r = l.useCallback((e) => {
                  n.current = [...n.current, e];
                }, []),
                o = l.useCallback((e) => {
                  n.current = n.current.filter((t) => t !== e);
                }, []),
                i = l.useState(() => tM())[0];
              return l.createElement(
                tI.Provider,
                {
                  value: l.useMemo(
                    () => ({
                      nodesRef: n,
                      addNode: r,
                      removeNode: o,
                      events: i,
                    }),
                    [n, r, o, i],
                  ),
                },
                t,
              );
            }
            function tW(e) {
              return "data-floating-ui-" + e;
            }
            function tU(e) {
              let t = (0, l.useRef)(e);
              return (
                tm(() => {
                  t.current = e;
                }),
                t
              );
            }
            let tH = tW("safe-polygon");
            function tz(e, t, n) {
              return n && !P(n)
                ? 0
                : "number" == typeof e
                  ? e
                  : null == e
                    ? void 0
                    : e[t];
            }
            function tG(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: o,
                  events: i,
                  elements: { domReference: u, floating: a },
                  refs: s,
                } = e,
                {
                  enabled: c = !0,
                  delay: f = 0,
                  handleClose: p = null,
                  mouseOnly: v = !1,
                  restMs: m = 0,
                  move: g = !0,
                } = t,
                h = tB(),
                y = tj(),
                b = tU(p),
                x = tU(f),
                w = l.useRef(),
                E = l.useRef(),
                _ = l.useRef(),
                C = l.useRef(),
                k = l.useRef(!0),
                S = l.useRef(!1),
                O = l.useRef(() => {}),
                L = l.useCallback(() => {
                  var e;
                  let t = null == (e = o.current.openEvent) ? void 0 : e.type;
                  return (
                    (null == t ? void 0 : t.includes("mouse")) &&
                    "mousedown" !== t
                  );
                }, [o]);
              l.useEffect(() => {
                if (c)
                  return (
                    i.on("dismiss", e),
                    () => {
                      i.off("dismiss", e);
                    }
                  );
                function e() {
                  clearTimeout(E.current),
                    clearTimeout(C.current),
                    (k.current = !0);
                }
              }, [c, i]),
                l.useEffect(() => {
                  if (!c || !b.current || !n) return;
                  function e(e) {
                    L() && r(!1, e);
                  }
                  let t = M(a).documentElement;
                  return (
                    t.addEventListener("mouseleave", e),
                    () => {
                      t.removeEventListener("mouseleave", e);
                    }
                  );
                }, [a, n, r, c, b, o, L]);
              let T = l.useCallback(
                  function (e, t) {
                    void 0 === t && (t = !0);
                    let n = tz(x.current, "close", w.current);
                    n && !_.current
                      ? (clearTimeout(E.current),
                        (E.current = setTimeout(() => r(!1, e), n)))
                      : t && (clearTimeout(E.current), r(!1, e));
                  },
                  [x, r],
                ),
                N = l.useCallback(() => {
                  O.current(), (_.current = void 0);
                }, []),
                A = l.useCallback(() => {
                  if (S.current) {
                    let e = M(s.floating.current).body;
                    (e.style.pointerEvents = ""),
                      e.removeAttribute(tH),
                      (S.current = !1);
                  }
                }, [s]);
              return (
                l.useEffect(() => {
                  if (c && d(u))
                    return (
                      n && u.addEventListener("mouseleave", s),
                      null == a || a.addEventListener("mouseleave", s),
                      g && u.addEventListener("mousemove", i, { once: !0 }),
                      u.addEventListener("mouseenter", i),
                      u.addEventListener("mouseleave", l),
                      () => {
                        n && u.removeEventListener("mouseleave", s),
                          null == a || a.removeEventListener("mouseleave", s),
                          g && u.removeEventListener("mousemove", i),
                          u.removeEventListener("mouseenter", i),
                          u.removeEventListener("mouseleave", l);
                      }
                    );
                  function t() {
                    return (
                      !!o.current.openEvent &&
                      ["click", "mousedown"].includes(o.current.openEvent.type)
                    );
                  }
                  function i(e) {
                    if (
                      (clearTimeout(E.current),
                      (k.current = !1),
                      (v && !P(w.current)) ||
                        (m > 0 && 0 === tz(x.current, "open")))
                    )
                      return;
                    let t = tz(x.current, "open", w.current);
                    t
                      ? (E.current = setTimeout(() => {
                          r(!0, e);
                        }, t))
                      : r(!0, e);
                  }
                  function l(r) {
                    if (t()) return;
                    O.current();
                    let o = M(a);
                    if ((clearTimeout(C.current), b.current)) {
                      n || clearTimeout(E.current),
                        (_.current = b.current({
                          ...e,
                          tree: h,
                          x: r.clientX,
                          y: r.clientY,
                          onClose() {
                            A(), N(), T(r);
                          },
                        }));
                      let t = _.current;
                      o.addEventListener("mousemove", t),
                        (O.current = () => {
                          o.removeEventListener("mousemove", t);
                        });
                      return;
                    }
                    ("touch" === w.current && R(a, r.relatedTarget)) || T(r);
                  }
                  function s(n) {
                    t() ||
                      null == b.current ||
                      b.current({
                        ...e,
                        tree: h,
                        x: n.clientX,
                        y: n.clientY,
                        onClose() {
                          A(), N(), T(n);
                        },
                      })(n);
                  }
                }, [u, a, c, e, v, m, g, T, N, A, r, n, h, x, b, o]),
                tm(() => {
                  var e, t, r;
                  if (
                    c &&
                    n &&
                    null != (e = b.current) &&
                    e.__options.blockPointerEvents &&
                    L()
                  ) {
                    let e = M(a).body;
                    if (
                      (e.setAttribute(tH, ""),
                      (e.style.pointerEvents = "none"),
                      (S.current = !0),
                      d(u) && a)
                    ) {
                      let e =
                        null == h
                          ? void 0
                          : null ==
                              (t = h.nodesRef.current.find((e) => e.id === y))
                            ? void 0
                            : null == (r = t.context)
                              ? void 0
                              : r.elements.floating;
                      return (
                        e && (e.style.pointerEvents = ""),
                        (u.style.pointerEvents = "auto"),
                        (a.style.pointerEvents = "auto"),
                        () => {
                          (u.style.pointerEvents = ""),
                            (a.style.pointerEvents = "");
                        }
                      );
                    }
                  }
                }, [c, n, y, a, u, h, b, o, L]),
                tm(() => {
                  n || ((w.current = void 0), N(), A());
                }, [n, N, A]),
                l.useEffect(
                  () => () => {
                    N(), clearTimeout(E.current), clearTimeout(C.current), A();
                  },
                  [c, u, N, A],
                ),
                l.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    w.current = e.pointerType;
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove(e) {
                        n ||
                          0 === m ||
                          (clearTimeout(C.current),
                          (C.current = setTimeout(() => {
                            k.current || r(!0, e.nativeEvent);
                          }, m)));
                      },
                    },
                    floating: {
                      onMouseEnter() {
                        clearTimeout(E.current);
                      },
                      onMouseLeave(e) {
                        i.emit("dismiss", {
                          type: "mouseLeave",
                          data: { returnFocus: !1 },
                        }),
                          T(e.nativeEvent, !1);
                      },
                    },
                  };
                }, [i, c, m, n, r, T])
              );
            }
            let tY = l.createContext({
                delay: 0,
                initialDelay: 0,
                timeoutMs: 0,
                currentId: null,
                setCurrentId: () => {},
                setState: () => {},
                isInstantPhase: !1,
              }),
              tK = () => l.useContext(tY),
              tZ = (e) => {
                let { children: t, delay: n, timeoutMs: r = 0 } = e,
                  [o, i] = l.useReducer((e, t) => ({ ...e, ...t }), {
                    delay: n,
                    timeoutMs: r,
                    initialDelay: n,
                    currentId: null,
                    isInstantPhase: !1,
                  }),
                  u = l.useRef(null),
                  a = l.useCallback((e) => {
                    i({ currentId: e });
                  }, []);
                return (
                  tm(() => {
                    o.currentId
                      ? null === u.current
                        ? (u.current = o.currentId)
                        : i({ isInstantPhase: !0 })
                      : (i({ isInstantPhase: !1 }), (u.current = null));
                  }, [o.currentId]),
                  l.createElement(
                    tY.Provider,
                    {
                      value: l.useMemo(
                        () => ({ ...o, setState: i, setCurrentId: a }),
                        [o, i, a],
                      ),
                    },
                    t,
                  )
                );
              },
              tX = (e, t) => {
                let { open: n, onOpenChange: r } = e,
                  { id: o } = t,
                  {
                    currentId: i,
                    setCurrentId: l,
                    initialDelay: u,
                    setState: a,
                    timeoutMs: s,
                  } = tK();
                tm(() => {
                  i &&
                    (a({ delay: { open: 1, close: tz(u, "close") } }),
                    i !== o && r(!1));
                }, [o, r, a, i, u]),
                  tm(() => {
                    function e() {
                      r(!1), a({ delay: u, currentId: null });
                    }
                    if (!n && i === o) {
                      if (s) {
                        let t = window.setTimeout(e, s);
                        return () => {
                          clearTimeout(t);
                        };
                      }
                      e();
                    }
                  }, [n, a, i, o, r, u, s]),
                  tm(() => {
                    n && l(o);
                  }, [n, l, o]);
              };
            function tq(e, t) {
              let n = e.filter((e) => {
                  var n;
                  return (
                    e.parentId === t &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                }),
                r = n;
              for (; r.length; )
                (r = e.filter((e) => {
                  var t;
                  return null == (t = r)
                    ? void 0
                    : t.some((t) => {
                        var n;
                        return (
                          e.parentId === t.id &&
                          (null == (n = e.context) ? void 0 : n.open)
                        );
                      });
                })),
                  (n = n.concat(r));
              return n;
            }
            let t$ = new WeakMap(),
              tJ = new WeakSet(),
              tQ = {},
              t0 = 0,
              t1 = () =>
                "undefined" != typeof HTMLElement &&
                "inert" in HTMLElement.prototype,
              t9 = (e) => e && (e.host || t9(e.parentNode)),
              t8 = (e, t) =>
                t
                  .map((t) => {
                    if (e.contains(t)) return t;
                    let n = t9(t);
                    return e.contains(n) ? n : null;
                  })
                  .filter((e) => null != e);
            function t4(e, t, n) {
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let r = M(e[0]).body;
              return (function (e, t, n, r) {
                let o = "data-floating-ui-inert",
                  i = r ? "inert" : n ? "aria-hidden" : null,
                  l = t8(t, e),
                  u = new Set(),
                  a = new Set(l),
                  s = [];
                tQ[o] || (tQ[o] = new WeakMap());
                let c = tQ[o];
                return (
                  l.forEach(function e(t) {
                    !(!t || u.has(t)) &&
                      (u.add(t), t.parentNode && e(t.parentNode));
                  }),
                  (function e(t) {
                    !t ||
                      a.has(t) ||
                      Array.prototype.forEach.call(t.children, (t) => {
                        if (u.has(t)) e(t);
                        else {
                          let e = i ? t.getAttribute(i) : null,
                            n = null !== e && "false" !== e,
                            r = (t$.get(t) || 0) + 1,
                            l = (c.get(t) || 0) + 1;
                          t$.set(t, r),
                            c.set(t, l),
                            s.push(t),
                            1 === r && n && tJ.add(t),
                            1 === l && t.setAttribute(o, ""),
                            !n && i && t.setAttribute(i, "true");
                        }
                      });
                  })(t),
                  u.clear(),
                  t0++,
                  () => {
                    s.forEach((e) => {
                      let t = (t$.get(e) || 0) - 1,
                        n = (c.get(e) || 0) - 1;
                      t$.set(e, t),
                        c.set(e, n),
                        t ||
                          (!tJ.has(e) && i && e.removeAttribute(i),
                          tJ.delete(e)),
                        n || e.removeAttribute(o);
                    }),
                      --t0 ||
                        ((t$ = new WeakMap()),
                        (t$ = new WeakMap()),
                        (tJ = new WeakSet()),
                        (tQ = {}));
                  }
                );
              })(
                e.concat(Array.from(r.querySelectorAll("[aria-live]"))),
                r,
                t,
                n,
              );
            }
            let t5 = () => ({
              getShadowRoot: !0,
              displayCheck:
                "function" == typeof ResizeObserver &&
                ResizeObserver.toString().includes("[native code]")
                  ? "full"
                  : "none",
            });
            function t6(e, t) {
              let n = e7(e, t5());
              "prev" === t && n.reverse();
              let r = n.indexOf(_(M(e)));
              return n.slice(r + 1)[0];
            }
            function t2() {
              return t6(document.body, "next");
            }
            function t3() {
              return t6(document.body, "prev");
            }
            function t7(e, t) {
              let n = t || e.currentTarget,
                r = e.relatedTarget;
              return !r || !R(n, r);
            }
            let ne = {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "fixed",
              whiteSpace: "nowrap",
              width: "1px",
              top: 0,
              left: 0,
            };
            function nt(e) {
              "Tab" === e.key && (e.target, clearTimeout(r));
            }
            let nn = l.forwardRef(function (e, t) {
                let [n, r] = l.useState();
                tm(
                  () => (
                    L() && r("button"),
                    document.addEventListener("keydown", nt),
                    () => {
                      document.removeEventListener("keydown", nt);
                    }
                  ),
                  [],
                );
                let o = {
                  ref: t,
                  tabIndex: 0,
                  role: n,
                  "aria-hidden": !n || void 0,
                  [tW("focus-guard")]: "",
                  style: ne,
                };
                return l.createElement("span", tS({}, e, o));
              }),
              nr = l.createContext(null);
            function no(e) {
              let { id: t, root: n } = void 0 === e ? {} : e,
                [r, o] = l.useState(null),
                i = tN(),
                u = nl(),
                a = l.useMemo(
                  () => ({ id: t, root: n, portalContext: u, uniqueId: i }),
                  [t, n, u, i],
                ),
                s = l.useRef();
              return (
                tm(
                  () => () => {
                    null == r || r.remove();
                  },
                  [r, a],
                ),
                tm(() => {
                  if (s.current === a) return;
                  s.current = a;
                  let { id: e, root: t, portalContext: n, uniqueId: r } = a,
                    i = e ? document.getElementById(e) : null,
                    l = tW("portal");
                  if (i) {
                    let e = document.createElement("div");
                    (e.id = r), e.setAttribute(l, ""), i.appendChild(e), o(e);
                  } else {
                    let i = t || (null == n ? void 0 : n.portalNode);
                    i && !d(i) && (i = i.current), (i = i || document.body);
                    let u = null;
                    e &&
                      (((u = document.createElement("div")).id = e),
                      i.appendChild(u));
                    let a = document.createElement("div");
                    (a.id = r),
                      a.setAttribute(l, ""),
                      (i = u || i).appendChild(a),
                      o(a);
                  }
                }, [a]),
                r
              );
            }
            function ni(e) {
              let {
                  children: t,
                  id: n,
                  root: r = null,
                  preserveTabOrder: o = !0,
                } = e,
                i = no({ id: n, root: r }),
                [u, a] = l.useState(null),
                s = l.useRef(null),
                c = l.useRef(null),
                d = l.useRef(null),
                f = l.useRef(null),
                p = !!u && !u.modal && u.open && o && !!(r || i);
              return (
                l.useEffect(() => {
                  if (i && o && (null == u || !u.modal))
                    return (
                      i.addEventListener("focusin", e, !0),
                      i.addEventListener("focusout", e, !0),
                      () => {
                        i.removeEventListener("focusin", e, !0),
                          i.removeEventListener("focusout", e, !0);
                      }
                    );
                  function e(e) {
                    i &&
                      t7(e) &&
                      ("focusin" === e.type
                        ? function (e) {
                            e.querySelectorAll("[data-tabindex]").forEach(
                              (e) => {
                                let t = e.dataset.tabindex;
                                delete e.dataset.tabindex,
                                  t
                                    ? e.setAttribute("tabindex", t)
                                    : e.removeAttribute("tabindex");
                              },
                            );
                          }
                        : function (e) {
                            e7(e, t5()).forEach((e) => {
                              (e.dataset.tabindex =
                                e.getAttribute("tabindex") || ""),
                                e.setAttribute("tabindex", "-1");
                            });
                          })(i);
                  }
                }, [i, o, null == u ? void 0 : u.modal]),
                l.createElement(
                  nr.Provider,
                  {
                    value: l.useMemo(
                      () => ({
                        preserveTabOrder: o,
                        beforeOutsideRef: s,
                        afterOutsideRef: c,
                        beforeInsideRef: d,
                        afterInsideRef: f,
                        portalNode: i,
                        setFocusManagerState: a,
                      }),
                      [o, i],
                    ),
                  },
                  p &&
                    i &&
                    l.createElement(nn, {
                      "data-type": "outside",
                      ref: s,
                      onFocus: (e) => {
                        if (t7(e, i)) {
                          var t;
                          null == (t = d.current) || t.focus();
                        } else {
                          let e =
                            t3() ||
                            (null == u ? void 0 : u.refs.domReference.current);
                          null == e || e.focus();
                        }
                      },
                    }),
                  p &&
                    i &&
                    l.createElement("span", { "aria-owns": i.id, style: ne }),
                  i && (0, eA.createPortal)(t, i),
                  p &&
                    i &&
                    l.createElement(nn, {
                      "data-type": "outside",
                      ref: c,
                      onFocus: (e) => {
                        if (t7(e, i)) {
                          var t;
                          null == (t = f.current) || t.focus();
                        } else {
                          let t =
                            t2() ||
                            (null == u ? void 0 : u.refs.domReference.current);
                          null == t || t.focus(),
                            (null == u ? void 0 : u.closeOnFocusOut) &&
                              (null == u || u.onOpenChange(!1, e.nativeEvent));
                        }
                      },
                    }),
                )
              );
            }
            let nl = () => l.useContext(nr),
              nu = l.forwardRef(function (e, t) {
                return l.createElement(
                  "button",
                  tS({}, e, {
                    type: "button",
                    ref: t,
                    tabIndex: -1,
                    style: ne,
                  }),
                );
              });
            function na(e) {
              let {
                  context: t,
                  children: n,
                  disabled: r = !1,
                  order: o = ["content"],
                  guards: i = !0,
                  initialFocus: u = 0,
                  returnFocus: a = !0,
                  modal: s = !0,
                  visuallyHiddenDismiss: c = !1,
                  closeOnFocusOut: d = !0,
                } = e,
                {
                  open: p,
                  refs: v,
                  nodeId: m,
                  onOpenChange: g,
                  events: h,
                  dataRef: y,
                  elements: { domReference: b, floating: x },
                } = t,
                w = "number" == typeof u && u < 0,
                E =
                  (null == b ? void 0 : b.getAttribute("role")) ===
                    "combobox" &&
                  j(b) &&
                  w,
                C = !E && s,
                k = !t1() || i,
                S = tU(o),
                O = tU(u),
                L = tU(a),
                T = tB(),
                N = nl(),
                P = l.useRef(null),
                A = l.useRef(null),
                D = l.useRef(!1),
                F = l.useRef(null),
                V = l.useRef(!1),
                W = null != N,
                U = l.useCallback(
                  function (e) {
                    return void 0 === e && (e = x), e ? e7(e, t5()) : [];
                  },
                  [x],
                ),
                H = l.useCallback(
                  (e) => {
                    let t = U(e);
                    return S.current
                      .map((e) =>
                        b && "reference" === e
                          ? b
                          : x && "floating" === e
                            ? x
                            : t,
                      )
                      .filter(Boolean)
                      .flat();
                  },
                  [b, x, S, U],
                );
              function z(e) {
                return !r && c && C
                  ? l.createElement(
                      nu,
                      {
                        ref: "start" === e ? P : A,
                        onClick: (e) => g(!1, e.nativeEvent),
                      },
                      "string" == typeof c ? c : "Dismiss",
                    )
                  : null;
              }
              l.useEffect(() => {
                if (r || !C) return;
                function e(e) {
                  if ("Tab" === e.key) {
                    R(x, _(M(x))) && 0 === U().length && !E && B(e);
                    let t = H(),
                      n = I(e);
                    "reference" === S.current[0] &&
                      n === b &&
                      (B(e), e.shiftKey ? tv(t[t.length - 1]) : tv(t[1])),
                      "floating" === S.current[1] &&
                        n === x &&
                        e.shiftKey &&
                        (B(e), tv(t[0]));
                  }
                }
                let t = M(x);
                return (
                  t.addEventListener("keydown", e),
                  () => {
                    t.removeEventListener("keydown", e);
                  }
                );
              }, [r, b, x, C, S, v, E, U, H]),
                l.useEffect(() => {
                  if (!r && d && x && f(b))
                    return (
                      b.addEventListener("focusout", t),
                      b.addEventListener("pointerdown", e),
                      C || x.addEventListener("focusout", t),
                      () => {
                        b.removeEventListener("focusout", t),
                          b.removeEventListener("pointerdown", e),
                          C || x.removeEventListener("focusout", t);
                      }
                    );
                  function e() {
                    (V.current = !0),
                      setTimeout(() => {
                        V.current = !1;
                      });
                  }
                  function t(e) {
                    let t = e.relatedTarget;
                    queueMicrotask(() => {
                      let n = !(
                        R(b, t) ||
                        R(x, t) ||
                        R(t, x) ||
                        R(null == N ? void 0 : N.portalNode, t) ||
                        (null != t && t.hasAttribute(tW("focus-guard"))) ||
                        (T &&
                          (tq(T.nodesRef.current, m).find((e) => {
                            var n, r;
                            return (
                              R(
                                null == (n = e.context)
                                  ? void 0
                                  : n.elements.floating,
                                t,
                              ) ||
                              R(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.domReference,
                                t,
                              )
                            );
                          }) ||
                            (function (e, t) {
                              var n;
                              let r = [],
                                o =
                                  null == (n = e.find((e) => e.id === t))
                                    ? void 0
                                    : n.parentId;
                              for (; o; ) {
                                let t = e.find((e) => e.id === o);
                                (o = null == t ? void 0 : t.parentId),
                                  t && (r = r.concat(t));
                              }
                              return r;
                            })(T.nodesRef.current, m).find((e) => {
                              var n, r;
                              return (
                                (null == (n = e.context)
                                  ? void 0
                                  : n.elements.floating) === t ||
                                (null == (r = e.context)
                                  ? void 0
                                  : r.elements.domReference) === t
                              );
                            })))
                      );
                      t &&
                        n &&
                        !V.current &&
                        t !== F.current &&
                        ((D.current = !0), g(!1, e));
                    });
                  }
                }, [r, b, x, C, m, T, N, g, d]),
                l.useEffect(() => {
                  var e;
                  if (r) return;
                  let t = Array.from(
                    (null == N
                      ? void 0
                      : null == (e = N.portalNode)
                        ? void 0
                        : e.querySelectorAll("[" + tW("portal") + "]")) || [],
                  );
                  if (x) {
                    let e = [
                        x,
                        ...t,
                        P.current,
                        A.current,
                        S.current.includes("reference") || E ? b : null,
                      ].filter((e) => null != e),
                      n = s || E ? t4(e, k, !k) : t4(e);
                    return () => {
                      n();
                    };
                  }
                }, [r, b, x, s, S, N, E, k]),
                tm(() => {
                  if (r || !x) return;
                  let e = _(M(x));
                  queueMicrotask(() => {
                    let t = H(x),
                      n = O.current,
                      r = ("number" == typeof n ? t[n] : n.current) || x,
                      o = R(x, e);
                    w || o || !p || tv(r, { preventScroll: r === x });
                  });
                }, [r, p, x, w, H, O]),
                tm(() => {
                  if (r || !x) return;
                  let e = !1,
                    t = M(x),
                    n = _(t),
                    o = y.current;
                  function i(t) {
                    if (
                      ("escapeKey" === t.type &&
                        v.domReference.current &&
                        (F.current = v.domReference.current),
                      ["referencePress", "escapeKey"].includes(t.type))
                    )
                      return;
                    let n = t.data.returnFocus;
                    "object" == typeof n
                      ? ((D.current = !1), (e = n.preventScroll))
                      : (D.current = !n);
                  }
                  return (
                    (F.current = n),
                    h.on("dismiss", i),
                    () => {
                      h.off("dismiss", i);
                      let n = _(t);
                      (R(x, n) ||
                        (T &&
                          tq(T.nodesRef.current, m).some((e) => {
                            var t;
                            return R(
                              null == (t = e.context)
                                ? void 0
                                : t.elements.floating,
                              n,
                            );
                          })) ||
                        (o.openEvent &&
                          ["click", "mousedown"].includes(o.openEvent.type))) &&
                        v.domReference.current &&
                        (F.current = v.domReference.current),
                        L.current &&
                          f(F.current) &&
                          !D.current &&
                          tv(F.current, {
                            cancelPrevious: !1,
                            preventScroll: e,
                          });
                    }
                  );
                }, [r, x, L, y, v, h, T, m]),
                tm(() => {
                  if (!r && N)
                    return (
                      N.setFocusManagerState({
                        modal: C,
                        closeOnFocusOut: d,
                        open: p,
                        onOpenChange: g,
                        refs: v,
                      }),
                      () => {
                        N.setFocusManagerState(null);
                      }
                    );
                }, [r, N, C, p, g, v, d]),
                tm(() => {
                  if (r || !x || "function" != typeof MutationObserver || w)
                    return;
                  let e = () => {
                    let e = x.getAttribute("tabindex");
                    S.current.includes("floating") ||
                    (_(M(x)) !== v.domReference.current && 0 === U().length)
                      ? "0" !== e && x.setAttribute("tabindex", "0")
                      : "-1" !== e && x.setAttribute("tabindex", "-1");
                  };
                  e();
                  let t = new MutationObserver(e);
                  return (
                    t.observe(x, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    }),
                    () => {
                      t.disconnect();
                    }
                  );
                }, [r, x, v, S, U, w]);
              let G = !r && k && (W || C);
              return l.createElement(
                l.Fragment,
                null,
                G &&
                  l.createElement(nn, {
                    "data-type": "inside",
                    ref: null == N ? void 0 : N.beforeInsideRef,
                    onFocus: (e) => {
                      if (C) {
                        let e = H();
                        tv("reference" === o[0] ? e[0] : e[e.length - 1]);
                      } else if (
                        null != N &&
                        N.preserveTabOrder &&
                        N.portalNode
                      ) {
                        if (((D.current = !1), t7(e, N.portalNode))) {
                          let e = t2() || b;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = N.beforeOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
                !E && z("start"),
                n,
                z("end"),
                G &&
                  l.createElement(nn, {
                    "data-type": "inside",
                    ref: null == N ? void 0 : N.afterInsideRef,
                    onFocus: (e) => {
                      if (C) tv(H()[0]);
                      else if (
                        null != N &&
                        N.preserveTabOrder &&
                        N.portalNode
                      ) {
                        if ((d && (D.current = !0), t7(e, N.portalNode))) {
                          let e = t3() || b;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = N.afterOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
              );
            }
            let ns = new Set(),
              nc = l.forwardRef(function (e, t) {
                let { lockScroll: n = !1, ...r } = e,
                  o = tN();
                return (
                  tm(() => {
                    if (!n) return;
                    ns.add(o);
                    let e = /iP(hone|ad|od)|iOS/.test(C()),
                      t = document.body.style,
                      r =
                        Math.round(
                          document.documentElement.getBoundingClientRect().left,
                        ) + document.documentElement.scrollLeft
                          ? "paddingLeft"
                          : "paddingRight",
                      i =
                        window.innerWidth -
                        document.documentElement.clientWidth,
                      l = t.left ? parseFloat(t.left) : window.pageXOffset,
                      u = t.top ? parseFloat(t.top) : window.pageYOffset;
                    if (((t.overflow = "hidden"), i && (t[r] = i + "px"), e)) {
                      var a, s;
                      let e =
                        (null == (a = window.visualViewport)
                          ? void 0
                          : a.offsetLeft) || 0;
                      Object.assign(t, {
                        position: "fixed",
                        top:
                          -(
                            u -
                            Math.floor(
                              (null == (s = window.visualViewport)
                                ? void 0
                                : s.offsetTop) || 0,
                            )
                          ) + "px",
                        left: -(l - Math.floor(e)) + "px",
                        right: "0",
                      });
                    }
                    return () => {
                      ns.delete(o),
                        0 === ns.size &&
                          (Object.assign(t, { overflow: "", [r]: "" }),
                          e &&
                            (Object.assign(t, {
                              position: "",
                              top: "",
                              left: "",
                              right: "",
                            }),
                            window.scrollTo(l, u)));
                    };
                  }, [o, n]),
                  l.createElement(
                    "div",
                    tS({ ref: t }, r, {
                      style: {
                        position: "fixed",
                        overflow: "auto",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...r.style,
                      },
                    }),
                  )
                );
              });
            function nd(e) {
              return f(e.target) && "BUTTON" === e.target.tagName;
            }
            function nf(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: o,
                  elements: { domReference: i },
                } = e,
                {
                  enabled: u = !0,
                  event: a = "click",
                  toggle: s = !0,
                  ignoreMouse: c = !1,
                  keyboardHandlers: d = !0,
                } = t,
                f = l.useRef(),
                p = l.useRef(!1);
              return l.useMemo(
                () =>
                  u
                    ? {
                        reference: {
                          onPointerDown(e) {
                            f.current = e.pointerType;
                          },
                          onMouseDown(e) {
                            0 !== e.button ||
                              (P(f.current, !0) && c) ||
                              "click" === a ||
                              (n &&
                              s &&
                              (!o.current.openEvent ||
                                "mousedown" === o.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : (e.preventDefault(), r(!0, e.nativeEvent)));
                          },
                          onClick(e) {
                            if ("mousedown" === a && f.current) {
                              f.current = void 0;
                              return;
                            }
                            (P(f.current, !0) && c) ||
                              (n &&
                              s &&
                              (!o.current.openEvent ||
                                "click" === o.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                          onKeyDown(e) {
                            (f.current = void 0),
                              e.defaultPrevented ||
                                !d ||
                                nd(e) ||
                                (" " !== e.key ||
                                  j(i) ||
                                  (e.preventDefault(), (p.current = !0)),
                                "Enter" === e.key &&
                                  (n && s
                                    ? r(!1, e.nativeEvent)
                                    : r(!0, e.nativeEvent)));
                          },
                          onKeyUp(e) {
                            !(e.defaultPrevented || !d || nd(e) || j(i)) &&
                              " " === e.key &&
                              p.current &&
                              ((p.current = !1),
                              n && s
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                        },
                      }
                    : {},
                [u, o, a, c, d, i, s, n, r],
              );
            }
            function np(e) {
              return null != e && null != e.clientX;
            }
            function nv(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  refs: r,
                  dataRef: o,
                  elements: { floating: i },
                } = e,
                {
                  enabled: u = !0,
                  axis: s = "both",
                  x: c = null,
                  y: d = null,
                } = t,
                f = l.useRef(!1),
                p = l.useRef(null),
                [v, m] = l.useState(),
                [g, h] = l.useState([]),
                y = tn((e, t) => {
                  if (!f.current) {
                    var n, i;
                    let l, u, a;
                    (!o.current.openEvent || np(o.current.openEvent)) &&
                      r.setPositionReference(
                        ((n = r.domReference),
                        (i = {
                          x: e,
                          y: t,
                          axis: s,
                          dataRef: o,
                          pointerType: v,
                        }),
                        (l = null),
                        (u = null),
                        (a = !1),
                        {
                          contextElement: n.current || void 0,
                          getBoundingClientRect() {
                            var e, t;
                            let r = (null == (e = n.current)
                                ? void 0
                                : e.getBoundingClientRect()) || {
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0,
                              },
                              o = "x" === i.axis || "both" === i.axis,
                              s = "y" === i.axis || "both" === i.axis,
                              c =
                                ["mouseenter", "mousemove"].includes(
                                  (null == (t = i.dataRef.current.openEvent)
                                    ? void 0
                                    : t.type) || "",
                                ) && "touch" !== i.pointerType,
                              d = r.width,
                              f = r.height,
                              p = r.x,
                              v = r.y;
                            return (
                              null == l && i.x && o && (l = r.x - i.x),
                              null == u && i.y && s && (u = r.y - i.y),
                              (p -= l || 0),
                              (v -= u || 0),
                              (d = 0),
                              (f = 0),
                              !a || c
                                ? ((d = "y" === i.axis ? r.width : 0),
                                  (f = "x" === i.axis ? r.height : 0),
                                  (p = o && null != i.x ? i.x : p),
                                  (v = s && null != i.y ? i.y : v))
                                : a &&
                                  !c &&
                                  ((f = "x" === i.axis ? r.height : f),
                                  (d = "y" === i.axis ? r.width : d)),
                              (a = !0),
                              {
                                width: d,
                                height: f,
                                x: p,
                                y: v,
                                top: v,
                                right: p + d,
                                bottom: v + f,
                                left: p,
                              }
                            );
                          },
                        }),
                      );
                  }
                }),
                b = tn((e) => {
                  null != c ||
                    null != d ||
                    (n ? p.current || h([]) : y(e.clientX, e.clientY));
                }),
                x = P(v) ? i : n,
                w = l.useCallback(() => {
                  if (!x || !u || null != c || null != d) return;
                  let e = a(r.floating.current);
                  function t(n) {
                    let o = I(n);
                    R(r.floating.current, o)
                      ? (e.removeEventListener("mousemove", t),
                        (p.current = null))
                      : y(n.clientX, n.clientY);
                  }
                  if (!o.current.openEvent || np(o.current.openEvent)) {
                    e.addEventListener("mousemove", t);
                    let n = () => {
                      e.removeEventListener("mousemove", t), (p.current = null);
                    };
                    return (p.current = n), n;
                  }
                  r.setPositionReference(r.domReference.current);
                }, [o, u, x, r, y, c, d]);
              return (
                l.useEffect(() => w(), [w, g]),
                l.useEffect(() => {
                  u && !i && (f.current = !1);
                }, [u, i]),
                l.useEffect(() => {
                  !u && n && (f.current = !0);
                }, [u, n]),
                tm(() => {
                  u && (null != c || null != d) && ((f.current = !1), y(c, d));
                }, [u, c, d, y]),
                l.useMemo(() => {
                  if (!u) return {};
                  function e(e) {
                    let { pointerType: t } = e;
                    m(t);
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove: b,
                      onMouseEnter: b,
                    },
                  };
                }, [u, b])
              );
            }
            let nm = {
                pointerdown: "onPointerDown",
                mousedown: "onMouseDown",
                click: "onClick",
              },
              ng = {
                pointerdown: "onPointerDownCapture",
                mousedown: "onMouseDownCapture",
                click: "onClickCapture",
              },
              nh = (e) => {
                var t, n;
                return {
                  escapeKey:
                    "boolean" == typeof e
                      ? e
                      : null != (t = null == e ? void 0 : e.escapeKey) && t,
                  outsidePress:
                    "boolean" == typeof e
                      ? e
                      : null == (n = null == e ? void 0 : e.outsidePress) || n,
                };
              };
            function ny(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  events: o,
                  nodeId: i,
                  elements: { reference: u, domReference: a, floating: s },
                  dataRef: c,
                } = e,
                {
                  enabled: p = !0,
                  escapeKey: v = !0,
                  outsidePress: m = !0,
                  outsidePressEvent: g = "pointerdown",
                  referencePress: h = !1,
                  referencePressEvent: x = "pointerdown",
                  ancestorScroll: _ = !1,
                  bubbles: C,
                  capture: k,
                } = t,
                L = tB(),
                T = null != tj(),
                N = tn("function" == typeof m ? m : () => !1),
                P = "function" == typeof m ? N : m,
                j = l.useRef(!1),
                B = l.useRef(!1),
                { escapeKey: D, outsidePress: F } = nh(C),
                { escapeKey: V, outsidePress: W } = nh(k),
                U = tn((e) => {
                  if (!n || !p || !v || "Escape" !== e.key) return;
                  let t = L ? tq(L.nodesRef.current, i) : [];
                  if (!D && (e.stopPropagation(), t.length > 0)) {
                    let e = !0;
                    if (
                      (t.forEach((t) => {
                        var n;
                        if (
                          null != (n = t.context) &&
                          n.open &&
                          !t.context.dataRef.current.__escapeKeyBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  o.emit("dismiss", {
                    type: "escapeKey",
                    data: { returnFocus: { preventScroll: !1 } },
                  }),
                    r(!1, "nativeEvent" in e ? e.nativeEvent : e);
                }),
                H = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    U(e),
                      null == (t = I(e)) || t.removeEventListener("keydown", n);
                  };
                  null == (t = I(e)) || t.addEventListener("keydown", n);
                }),
                z = tn((e) => {
                  let t = j.current;
                  j.current = !1;
                  let n = B.current;
                  if (
                    ((B.current = !1),
                    ("click" === g && n) ||
                      t ||
                      ("function" == typeof P && !P(e)))
                  )
                    return;
                  let l = I(e),
                    u = "[" + tW("inert") + "]",
                    c = M(s).querySelectorAll(u),
                    p = d(l) ? l : null;
                  for (; p && !y(p); ) {
                    let e = w(p);
                    if (e !== M(s).body && d(e)) p = e;
                    else break;
                  }
                  if (
                    c.length &&
                    d(l) &&
                    !l.matches("html,body") &&
                    !R(l, s) &&
                    Array.from(c).every((e) => !R(p, e))
                  )
                    return;
                  if (f(l) && s) {
                    let t = l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
                      n = l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
                      r = n && e.offsetX > l.clientWidth;
                    if (
                      (n &&
                        "rtl" === b(l).direction &&
                        (r = e.offsetX <= l.offsetWidth - l.clientWidth),
                      r || (t && e.offsetY > l.clientHeight))
                    )
                      return;
                  }
                  let v =
                    L &&
                    tq(L.nodesRef.current, i).some((t) => {
                      var n;
                      return A(
                        e,
                        null == (n = t.context) ? void 0 : n.elements.floating,
                      );
                    });
                  if (A(e, s) || A(e, a) || v) return;
                  let m = L ? tq(L.nodesRef.current, i) : [];
                  if (m.length > 0) {
                    let e = !0;
                    if (
                      (m.forEach((t) => {
                        var n;
                        if (
                          null != (n = t.context) &&
                          n.open &&
                          !t.context.dataRef.current.__outsidePressBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  o.emit("dismiss", {
                    type: "outsidePress",
                    data: {
                      returnFocus: T ? { preventScroll: !0 } : S(e) || O(e),
                    },
                  }),
                    r(!1, e);
                }),
                G = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    z(e), null == (t = I(e)) || t.removeEventListener(g, n);
                  };
                  null == (t = I(e)) || t.addEventListener(g, n);
                });
              return (
                l.useEffect(() => {
                  if (!n || !p) return;
                  function e(e) {
                    r(!1, e);
                  }
                  (c.current.__escapeKeyBubbles = D),
                    (c.current.__outsidePressBubbles = F);
                  let t = M(s);
                  v && t.addEventListener("keydown", V ? H : U, V),
                    P && t.addEventListener(g, W ? G : z, W);
                  let o = [];
                  return (
                    _ &&
                      (d(a) && (o = E(a)),
                      d(s) && (o = o.concat(E(s))),
                      !d(u) &&
                        u &&
                        u.contextElement &&
                        (o = o.concat(E(u.contextElement)))),
                    (o = o.filter((e) => {
                      var n;
                      return (
                        e !==
                        (null == (n = t.defaultView)
                          ? void 0
                          : n.visualViewport)
                      );
                    })).forEach((t) => {
                      t.addEventListener("scroll", e, { passive: !0 });
                    }),
                    () => {
                      v && t.removeEventListener("keydown", V ? H : U, V),
                        P && t.removeEventListener(g, W ? G : z, W),
                        o.forEach((t) => {
                          t.removeEventListener("scroll", e);
                        });
                    }
                  );
                }, [c, s, a, u, v, P, g, n, r, _, p, D, F, U, V, H, z, W, G]),
                l.useEffect(() => {
                  j.current = !1;
                }, [P, g]),
                l.useMemo(
                  () =>
                    p
                      ? {
                          reference: {
                            onKeyDown: U,
                            [nm[x]]: (e) => {
                              h &&
                                (o.emit("dismiss", {
                                  type: "referencePress",
                                  data: { returnFocus: !1 },
                                }),
                                r(!1, e.nativeEvent));
                            },
                          },
                          floating: {
                            onKeyDown: U,
                            onMouseDown() {
                              B.current = !0;
                            },
                            onMouseUp() {
                              B.current = !0;
                            },
                            [ng[g]]: () => {
                              j.current = !0;
                            },
                          },
                        }
                      : {},
                  [p, o, h, g, x, r, U],
                )
              );
            }
            function nb(e) {
              var t;
              void 0 === e && (e = {});
              let { open: n = !1, onOpenChange: r, nodeId: o } = e,
                [i, u] = l.useState(null),
                a = (null == (t = e.elements) ? void 0 : t.reference) || i,
                s = (function (e) {
                  void 0 === e && (e = {});
                  let {
                      placement: t = "bottom",
                      strategy: n = "absolute",
                      middleware: r = [],
                      platform: o,
                      elements: { reference: i, floating: u } = {},
                      transform: a = !0,
                      whileElementsMounted: s,
                      open: c,
                    } = e,
                    [d, f] = l.useState({
                      x: 0,
                      y: 0,
                      strategy: n,
                      placement: t,
                      middlewareData: {},
                      isPositioned: !1,
                    }),
                    [p, v] = l.useState(r);
                  eB(p, r) || v(r);
                  let [m, g] = l.useState(null),
                    [h, y] = l.useState(null),
                    b = l.useCallback(
                      (e) => {
                        e != _.current && ((_.current = e), g(e));
                      },
                      [g],
                    ),
                    x = l.useCallback(
                      (e) => {
                        e !== R.current && ((R.current = e), y(e));
                      },
                      [y],
                    ),
                    w = i || m,
                    E = u || h,
                    _ = l.useRef(null),
                    R = l.useRef(null),
                    C = l.useRef(d),
                    k = eV(s),
                    S = eV(o),
                    O = l.useCallback(() => {
                      if (!_.current || !R.current) return;
                      let e = { placement: t, strategy: n, middleware: p };
                      S.current && (e.platform = S.current),
                        eM(_.current, R.current, e).then((e) => {
                          let t = { ...e, isPositioned: !0 };
                          L.current &&
                            !eB(C.current, t) &&
                            ((C.current = t),
                            eA.flushSync(() => {
                              f(t);
                            }));
                        });
                    }, [p, t, n, S]);
                  ej(() => {
                    !1 === c &&
                      C.current.isPositioned &&
                      ((C.current.isPositioned = !1),
                      f((e) => ({ ...e, isPositioned: !1 })));
                  }, [c]);
                  let L = l.useRef(!1);
                  ej(
                    () => (
                      (L.current = !0),
                      () => {
                        L.current = !1;
                      }
                    ),
                    [],
                  ),
                    ej(() => {
                      if (
                        (w && (_.current = w), E && (R.current = E), w && E)
                      ) {
                        if (k.current) return k.current(w, E, O);
                        O();
                      }
                    }, [w, E, O, k]);
                  let T = l.useMemo(
                      () => ({
                        reference: _,
                        floating: R,
                        setReference: b,
                        setFloating: x,
                      }),
                      [b, x],
                    ),
                    N = l.useMemo(
                      () => ({ reference: w, floating: E }),
                      [w, E],
                    ),
                    P = l.useMemo(() => {
                      let e = { position: n, left: 0, top: 0 };
                      if (!N.floating) return e;
                      let t = eF(N.floating, d.x),
                        r = eF(N.floating, d.y);
                      return a
                        ? {
                            ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...(eD(N.floating) >= 1.5 && {
                              willChange: "transform",
                            }),
                          }
                        : { position: n, left: t, top: r };
                    }, [n, a, N.floating, d.x, d.y]);
                  return l.useMemo(
                    () => ({
                      ...d,
                      update: O,
                      refs: T,
                      elements: N,
                      floatingStyles: P,
                    }),
                    [d, O, T, N, P],
                  );
                })(e),
                c = tB(),
                f = tn((e, t) => {
                  e && (v.current.openEvent = t), null == r || r(e, t);
                }),
                p = l.useRef(null),
                v = l.useRef({}),
                m = l.useState(() => tM())[0],
                g = tN(),
                h = l.useCallback(
                  (e) => {
                    let t = d(e)
                      ? {
                          getBoundingClientRect: () =>
                            e.getBoundingClientRect(),
                          contextElement: e,
                        }
                      : e;
                    s.refs.setReference(t);
                  },
                  [s.refs],
                ),
                y = l.useCallback(
                  (e) => {
                    (d(e) || null === e) && ((p.current = e), u(e)),
                      (d(s.refs.reference.current) ||
                        null === s.refs.reference.current ||
                        (null !== e && !d(e))) &&
                        s.refs.setReference(e);
                  },
                  [s.refs],
                ),
                b = l.useMemo(
                  () => ({
                    ...s.refs,
                    setReference: y,
                    setPositionReference: h,
                    domReference: p,
                  }),
                  [s.refs, y, h],
                ),
                x = l.useMemo(
                  () => ({ ...s.elements, domReference: a }),
                  [s.elements, a],
                ),
                w = l.useMemo(
                  () => ({
                    ...s,
                    refs: b,
                    elements: x,
                    dataRef: v,
                    nodeId: o,
                    floatingId: g,
                    events: m,
                    open: n,
                    onOpenChange: f,
                  }),
                  [s, o, g, m, n, f, b, x],
                );
              return (
                tm(() => {
                  let e =
                    null == c
                      ? void 0
                      : c.nodesRef.current.find((e) => e.id === o);
                  e && (e.context = w);
                }),
                l.useMemo(
                  () => ({ ...s, context: w, refs: b, elements: x }),
                  [s, b, x, w],
                )
              );
            }
            function nx(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  events: o,
                  refs: i,
                  elements: { floating: u, domReference: s },
                } = e,
                { enabled: c = !0, visibleOnly: p = !0 } = t,
                v = l.useRef(!1),
                m = l.useRef(),
                g = l.useRef(!0);
              return (
                l.useEffect(() => {
                  if (!c) return;
                  let e = a(s);
                  function t() {
                    !n && f(s) && s === _(M(s)) && (v.current = !0);
                  }
                  function r() {
                    g.current = !0;
                  }
                  return (
                    e.addEventListener("blur", t),
                    e.addEventListener("keydown", r, !0),
                    () => {
                      e.removeEventListener("blur", t),
                        e.removeEventListener("keydown", r, !0);
                    }
                  );
                }, [u, s, n, c]),
                l.useEffect(() => {
                  if (c)
                    return (
                      o.on("dismiss", e),
                      () => {
                        o.off("dismiss", e);
                      }
                    );
                  function e(e) {
                    ("referencePress" === e.type || "escapeKey" === e.type) &&
                      (v.current = !0);
                  }
                }, [o, c]),
                l.useEffect(
                  () => () => {
                    clearTimeout(m.current);
                  },
                  [],
                ),
                l.useMemo(
                  () =>
                    c
                      ? {
                          reference: {
                            onPointerDown(e) {
                              O(e.nativeEvent) || (g.current = !1);
                            },
                            onMouseLeave() {
                              v.current = !1;
                            },
                            onFocus(e) {
                              if (v.current) return;
                              let t = I(e.nativeEvent);
                              if (p && d(t))
                                try {
                                  if (L() && N()) throw Error();
                                  if (!t.matches(":focus-visible")) return;
                                } catch (e) {
                                  if (!g.current && !j(t)) return;
                                }
                              r(!0, e.nativeEvent);
                            },
                            onBlur(e) {
                              v.current = !1;
                              let t = e.relatedTarget,
                                n =
                                  d(t) &&
                                  t.hasAttribute(tW("focus-guard")) &&
                                  "outside" === t.getAttribute("data-type");
                              m.current = window.setTimeout(() => {
                                let o = _(s ? s.ownerDocument : document);
                                if (t || o !== s) {
                                  if (R(i.floating.current, t) || R(s, t) || n)
                                    return;
                                  r(!1, e.nativeEvent);
                                }
                              });
                            },
                          },
                        }
                      : {},
                  [c, p, s, i, r],
                )
              );
            }
            function nw(e, t, n) {
              let r = new Map();
              return {
                ...("floating" === n && { tabIndex: -1 }),
                ...e,
                ...t
                  .map((e) => (e ? e[n] : null))
                  .concat(e)
                  .reduce(
                    (e, t) => (
                      t &&
                        Object.entries(t).forEach((t) => {
                          let [n, o] = t;
                          if (0 === n.indexOf("on")) {
                            if (
                              (r.has(n) || r.set(n, []), "function" == typeof o)
                            ) {
                              var i;
                              null == (i = r.get(n)) || i.push(o),
                                (e[n] = function () {
                                  for (
                                    var e,
                                      t = arguments.length,
                                      o = Array(t),
                                      i = 0;
                                    i < t;
                                    i++
                                  )
                                    o[i] = arguments[i];
                                  return null == (e = r.get(n))
                                    ? void 0
                                    : e
                                        .map((e) => e(...o))
                                        .find((e) => void 0 !== e);
                                });
                            }
                          } else e[n] = o;
                        }),
                      e
                    ),
                    {},
                  ),
              };
            }
            function nE(e) {
              void 0 === e && (e = []);
              let t = e,
                n = l.useCallback((t) => nw(t, e, "reference"), t),
                r = l.useCallback((t) => nw(t, e, "floating"), t),
                o = l.useCallback(
                  (t) => nw(t, e, "item"),
                  e.map((e) => (null == e ? void 0 : e.item)),
                );
              return l.useMemo(
                () => ({
                  getReferenceProps: n,
                  getFloatingProps: r,
                  getItemProps: o,
                }),
                [n, r, o],
              );
            }
            let n_ = !1;
            function nR(e, t, n) {
              switch (e) {
                case "vertical":
                  return t;
                case "horizontal":
                  return n;
                default:
                  return t || n;
              }
            }
            function nC(e, t) {
              return nR(t, e === tr || e === to, e === ti || e === tl);
            }
            function nk(e, t, n) {
              return (
                nR(t, e === to, n ? e === ti : e === tl) ||
                "Enter" === e ||
                " " == e ||
                "" === e
              );
            }
            function nS(e, t, n) {
              return nR(t, n ? e === tl : e === ti, e === tr);
            }
            function nO(e, t) {
              let {
                  open: n,
                  onOpenChange: r,
                  refs: o,
                  elements: { domReference: i, floating: u },
                } = e,
                {
                  listRef: a,
                  activeIndex: s,
                  onNavigate: c = () => {},
                  enabled: d = !0,
                  selectedIndex: p = null,
                  allowEscape: v = !1,
                  loop: m = !1,
                  nested: g = !1,
                  rtl: h = !1,
                  virtual: y = !1,
                  focusItemOnOpen: b = "auto",
                  focusItemOnHover: x = !0,
                  openOnArrowKeyDown: w = !0,
                  disabledIndices: E,
                  orientation: C = "vertical",
                  cols: k = 1,
                  scrollItemIntoView: T = !0,
                  virtualItemRef: P,
                } = t,
                A = tj(),
                I = tB(),
                j = tn(c),
                D = l.useRef(b),
                F = l.useRef(null != p ? p : -1),
                V = l.useRef(null),
                W = l.useRef(!0),
                U = l.useRef(j),
                H = l.useRef(!!u),
                z = l.useRef(!1),
                G = l.useRef(!1),
                Y = tU(E),
                K = tU(n),
                Z = tU(T),
                [X, q] = l.useState(),
                [$, J] = l.useState(),
                Q = tn(function (e, t, n) {
                  void 0 === n && (n = !1);
                  let r = e.current[t.current];
                  r &&
                    (y
                      ? (q(r.id),
                        null == I || I.events.emit("virtualfocus", r),
                        P && (P.current = r))
                      : tv(r, {
                          preventScroll: !0,
                          sync: !!(N() && L()) && (n_ || z.current),
                        }),
                    requestAnimationFrame(() => {
                      let e = Z.current;
                      e &&
                        r &&
                        (n || !W.current) &&
                        (null == r.scrollIntoView ||
                          r.scrollIntoView(
                            "boolean" == typeof e
                              ? { block: "nearest", inline: "nearest" }
                              : e,
                          ));
                    }));
                });
              tm(() => {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (n_ = !0), !1;
                  },
                });
              }, []),
                tm(() => {
                  d &&
                    (n && u
                      ? D.current && null != p && ((G.current = !0), j(p))
                      : H.current && ((F.current = -1), U.current(null)));
                }, [d, n, u, p, j]),
                tm(() => {
                  if (d && n && u) {
                    if (null == s) {
                      if (
                        ((z.current = !1),
                        null == p &&
                          (H.current && ((F.current = -1), Q(a, F)),
                          !H.current &&
                            D.current &&
                            (null != V.current ||
                              (!0 === D.current && null == V.current))))
                      ) {
                        let e = 0,
                          t = () => {
                            null == a.current[0]
                              ? (e < 2 &&
                                  (e ? requestAnimationFrame : queueMicrotask)(
                                    t,
                                  ),
                                e++)
                              : ((F.current =
                                  null == V.current || nk(V.current, C, h) || g
                                    ? ts(a, Y.current)
                                    : tc(a, Y.current)),
                                (V.current = null),
                                j(F.current));
                          };
                        t();
                      }
                    } else
                      ta(a, s) ||
                        ((F.current = s), Q(a, F, G.current), (G.current = !1));
                  }
                }, [d, n, u, s, p, g, a, C, h, j, Q, Y]),
                tm(() => {
                  var e, t;
                  if (!d || u || !I || y || !H.current) return;
                  let n = I.nodesRef.current,
                    r =
                      null == (e = n.find((e) => e.id === A))
                        ? void 0
                        : null == (t = e.context)
                          ? void 0
                          : t.elements.floating,
                    o = _(M(u)),
                    i = n.some(
                      (e) => e.context && R(e.context.elements.floating, o),
                    );
                  r && !i && W.current && r.focus({ preventScroll: !0 });
                }, [d, u, I, A, y]),
                tm(() => {
                  if (d && I && y && !A)
                    return (
                      I.events.on("virtualfocus", e),
                      () => {
                        I.events.off("virtualfocus", e);
                      }
                    );
                  function e(e) {
                    J(e.id), P && (P.current = e);
                  }
                }, [d, I, y, A, P]),
                tm(() => {
                  (U.current = j), (H.current = !!u);
                }),
                tm(() => {
                  n || (V.current = null);
                }, [n]);
              let ee = null != s,
                et = l.useMemo(() => {
                  function e(e) {
                    if (!n) return;
                    let t = a.current.indexOf(e);
                    -1 !== t && j(t);
                  }
                  return {
                    onFocus(t) {
                      let { currentTarget: n } = t;
                      e(n);
                    },
                    onClick: (e) => {
                      let { currentTarget: t } = e;
                      return t.focus({ preventScroll: !0 });
                    },
                    ...(x && {
                      onMouseMove(t) {
                        let { currentTarget: n } = t;
                        e(n);
                      },
                      onPointerLeave(e) {
                        let { pointerType: t } = e;
                        W.current &&
                          "touch" !== t &&
                          ((F.current = -1),
                          Q(a, F),
                          j(null),
                          y || tv(o.floating.current, { preventScroll: !0 }));
                      },
                    }),
                  };
                }, [n, o, Q, x, a, j, y]);
              return l.useMemo(() => {
                if (!d) return {};
                let e = Y.current;
                function t(t) {
                  if (
                    ((W.current = !1),
                    (z.current = !0),
                    !K.current && t.currentTarget === o.floating.current)
                  )
                    return;
                  if (g && nS(t.key, C, h)) {
                    B(t), r(!1, t.nativeEvent), f(i) && !y && i.focus();
                    return;
                  }
                  let l = F.current,
                    u = ts(a, e),
                    s = tc(a, e);
                  if (
                    ("Home" === t.key && (B(t), (F.current = u), j(F.current)),
                    "End" === t.key && (B(t), (F.current = s), j(F.current)),
                    (!(k > 1) ||
                      ((F.current = tf(a, {
                        event: t,
                        orientation: C,
                        loop: m,
                        cols: k,
                        disabledIndices: e,
                        minIndex: u,
                        maxIndex: s,
                        prevIndex: F.current,
                        stopEvent: !0,
                      })),
                      j(F.current),
                      "both" !== C)) &&
                      nC(t.key, C))
                  ) {
                    if (
                      (B(t),
                      n &&
                        !y &&
                        _(t.currentTarget.ownerDocument) === t.currentTarget)
                    ) {
                      (F.current = nk(t.key, C, h) ? u : s), j(F.current);
                      return;
                    }
                    nk(t.key, C, h)
                      ? m
                        ? (F.current =
                            l >= s
                              ? v && l !== a.current.length
                                ? -1
                                : u
                              : td(a, { startingIndex: l, disabledIndices: e }))
                        : (F.current = Math.min(
                            s,
                            td(a, { startingIndex: l, disabledIndices: e }),
                          ))
                      : m
                        ? (F.current =
                            l <= u
                              ? v && -1 !== l
                                ? a.current.length
                                : s
                              : td(a, {
                                  startingIndex: l,
                                  decrement: !0,
                                  disabledIndices: e,
                                }))
                        : (F.current = Math.max(
                            u,
                            td(a, {
                              startingIndex: l,
                              decrement: !0,
                              disabledIndices: e,
                            }),
                          )),
                      ta(a, F.current) ? j(null) : j(F.current);
                  }
                }
                function l(e) {
                  "auto" === b && S(e.nativeEvent) && (D.current = !0);
                }
                let u = y && n && ee && { "aria-activedescendant": $ || X },
                  s = a.current.find((e) => (null == e ? void 0 : e.id) === X);
                return {
                  reference: {
                    ...u,
                    onKeyDown(o) {
                      var i, l, u, c, d, f;
                      W.current = !1;
                      let v = 0 === o.key.indexOf("Arrow"),
                        m =
                          ((i = o.key),
                          nR(C, h ? i === ti : i === tl, i === to)),
                        b = nS(o.key, C, h),
                        x = nC(o.key, C),
                        E =
                          (g ? m : x) ||
                          "Enter" === o.key ||
                          "" === o.key.trim();
                      if (y && n) {
                        let e, n;
                        let r =
                            null == I
                              ? void 0
                              : I.nodesRef.current.find(
                                  (e) => null == e.parentId,
                                ),
                          i =
                            I && r
                              ? ((l = I.nodesRef.current),
                                (u = r.id),
                                (n = -1),
                                !(function t(r, o) {
                                  o > n && ((e = r), (n = o)),
                                    tq(l, r).forEach((e) => {
                                      t(e.id, o + 1);
                                    });
                                })(u, 0),
                                l.find((t) => t.id === e))
                              : null;
                        if (v && i && P) {
                          let e = new KeyboardEvent("keydown", {
                            key: o.key,
                            bubbles: !0,
                          });
                          if (m || b) {
                            let t =
                                (null == (c = i.context)
                                  ? void 0
                                  : c.elements.domReference) ===
                                o.currentTarget,
                              n =
                                b && !t
                                  ? null == (d = i.context)
                                    ? void 0
                                    : d.elements.domReference
                                  : m
                                    ? s
                                    : null;
                            n && (B(o), n.dispatchEvent(e), J(void 0));
                          }
                          if (
                            x &&
                            i.context &&
                            i.context.open &&
                            i.parentId &&
                            o.currentTarget !== i.context.elements.domReference
                          ) {
                            B(o),
                              null == (f = i.context.elements.domReference) ||
                                f.dispatchEvent(e);
                            return;
                          }
                        }
                        return t(o);
                      }
                      if (n || w || !v) {
                        if ((E && (V.current = g && x ? null : o.key), g)) {
                          m &&
                            (B(o),
                            n
                              ? ((F.current = ts(a, e)), j(F.current))
                              : r(!0, o.nativeEvent));
                          return;
                        }
                        x &&
                          (null != p && (F.current = p),
                          B(o),
                          !n && w ? r(!0, o.nativeEvent) : t(o),
                          n && j(F.current));
                      }
                    },
                    onFocus() {
                      n && j(null);
                    },
                    onPointerDown: function (e) {
                      (D.current = b),
                        "auto" === b && O(e.nativeEvent) && (D.current = !0);
                    },
                    onMouseDown: l,
                    onClick: l,
                  },
                  floating: {
                    "aria-orientation": "both" === C ? void 0 : C,
                    ...u,
                    onKeyDown: t,
                    onPointerMove() {
                      W.current = !0;
                    },
                  },
                  item: et,
                };
              }, [
                i,
                o,
                X,
                $,
                Y,
                K,
                a,
                d,
                C,
                h,
                y,
                n,
                ee,
                g,
                p,
                w,
                v,
                k,
                m,
                b,
                j,
                r,
                et,
                I,
                P,
              ]);
            }
            function nL(e, t) {
              void 0 === t && (t = {});
              let { open: n, floatingId: r } = e,
                { enabled: o = !0, role: i = "dialog" } = t,
                u = tN();
              return l.useMemo(() => {
                let e = { id: r, role: i };
                return o
                  ? "tooltip" === i
                    ? {
                        reference: { "aria-describedby": n ? r : void 0 },
                        floating: e,
                      }
                    : {
                        reference: {
                          "aria-expanded": n ? "true" : "false",
                          "aria-haspopup": "alertdialog" === i ? "dialog" : i,
                          "aria-controls": n ? r : void 0,
                          ...("listbox" === i && { role: "combobox" }),
                          ...("menu" === i && { id: u }),
                        },
                        floating: {
                          ...e,
                          ...("menu" === i && { "aria-labelledby": u }),
                        },
                      }
                  : {};
              }, [o, i, n, r, u]);
            }
            let nT = (e) =>
              e.replace(
                /[A-Z]+(?![a-z])|[A-Z]/g,
                (e, t) => (t ? "-" : "") + e.toLowerCase(),
              );
            function nN(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function nP(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  elements: { floating: r },
                } = e,
                { duration: o = 250 } = t,
                i = ("number" == typeof o ? o : o.close) || 0,
                [u, a] = l.useState(!1),
                [s, c] = l.useState("unmounted"),
                d = (function (e, t) {
                  let [n, r] = l.useState(e);
                  return (
                    e && !n && r(!0),
                    l.useEffect(() => {
                      if (!e) {
                        let e = setTimeout(() => r(!1), t);
                        return () => clearTimeout(e);
                      }
                    }, [e, t]),
                    n
                  );
                })(n, i);
              return (
                tm(() => {
                  u && !d && c("unmounted");
                }, [u, d]),
                tm(() => {
                  if (r) {
                    if (n) {
                      c("initial");
                      let e = requestAnimationFrame(() => {
                        c("open");
                      });
                      return () => {
                        cancelAnimationFrame(e);
                      };
                    }
                    a(!0), c("close");
                  }
                }, [n, r]),
                { isMounted: d, status: s }
              );
            }
            function nM(e, t) {
              void 0 === t && (t = {});
              let {
                  initial: n = { opacity: 0 },
                  open: r,
                  close: o,
                  common: i,
                  duration: u = 250,
                } = t,
                a = e.placement,
                s = a.split("-")[0],
                c = l.useMemo(() => ({ side: s, placement: a }), [s, a]),
                d = "number" == typeof u,
                f = (d ? u : u.open) || 0,
                p = (d ? u : u.close) || 0,
                [v, m] = l.useState(() => ({ ...nN(i, c), ...nN(n, c) })),
                { isMounted: g, status: h } = nP(e, { duration: u }),
                y = tU(n),
                b = tU(r),
                x = tU(o),
                w = tU(i);
              return (
                tm(() => {
                  let e = nN(y.current, c),
                    t = nN(x.current, c),
                    n = nN(w.current, c),
                    r =
                      nN(b.current, c) ||
                      Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
                  if (
                    ("initial" === h &&
                      m((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...n,
                        ...e,
                      })),
                    "open" === h &&
                      m({
                        transitionProperty: Object.keys(r).map(nT).join(","),
                        transitionDuration: f + "ms",
                        ...n,
                        ...r,
                      }),
                    "close" === h)
                  ) {
                    let r = t || e;
                    m({
                      transitionProperty: Object.keys(r).map(nT).join(","),
                      transitionDuration: p + "ms",
                      ...n,
                      ...r,
                    });
                  }
                }, [p, x, y, b, w, f, h, c]),
                { isMounted: g, styles: v }
              );
            }
            function nA(e, t) {
              var n;
              let { open: r, dataRef: o } = e,
                {
                  listRef: i,
                  activeIndex: u,
                  onMatch: a,
                  onTypingChange: s,
                  enabled: c = !0,
                  findMatch: d = null,
                  resetMs: f = 750,
                  ignoreKeys: p = [],
                  selectedIndex: v = null,
                } = t,
                m = l.useRef(),
                g = l.useRef(""),
                h = l.useRef(null != (n = null != v ? v : u) ? n : -1),
                y = l.useRef(null),
                b = tn(a),
                x = tn(s),
                w = tU(d),
                E = tU(p);
              return (
                tm(() => {
                  r &&
                    (clearTimeout(m.current),
                    (y.current = null),
                    (g.current = ""));
                }, [r]),
                tm(() => {
                  if (r && "" === g.current) {
                    var e;
                    h.current = null != (e = null != v ? v : u) ? e : -1;
                  }
                }, [r, v, u]),
                l.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    e
                      ? o.current.typing || ((o.current.typing = e), x(e))
                      : o.current.typing && ((o.current.typing = e), x(e));
                  }
                  function t(e, t, n) {
                    let r = w.current
                      ? w.current(t, n)
                      : t.find(
                          (e) =>
                            (null == e
                              ? void 0
                              : e
                                  .toLocaleLowerCase()
                                  .indexOf(n.toLocaleLowerCase())) === 0,
                        );
                    return r ? e.indexOf(r) : -1;
                  }
                  function n(n) {
                    let o = i.current;
                    if (
                      (g.current.length > 0 &&
                        " " !== g.current[0] &&
                        (-1 === t(o, o, g.current)
                          ? e(!1)
                          : " " === n.key && B(n)),
                      null == o ||
                        E.current.includes(n.key) ||
                        1 !== n.key.length ||
                        n.ctrlKey ||
                        n.metaKey ||
                        n.altKey)
                    )
                      return;
                    r && " " !== n.key && (B(n), e(!0)),
                      o.every((e) => {
                        var t, n;
                        return (
                          !e ||
                          (null == (t = e[0])
                            ? void 0
                            : t.toLocaleLowerCase()) !==
                            (null == (n = e[1])
                              ? void 0
                              : n.toLocaleLowerCase())
                        );
                      }) &&
                        g.current === n.key &&
                        ((g.current = ""), (h.current = y.current)),
                      (g.current += n.key),
                      clearTimeout(m.current),
                      (m.current = setTimeout(() => {
                        (g.current = ""), (h.current = y.current), e(!1);
                      }, f));
                    let l = h.current,
                      u = t(
                        o,
                        [...o.slice((l || 0) + 1), ...o.slice(0, (l || 0) + 1)],
                        g.current,
                      );
                    -1 !== u
                      ? (b(u), (y.current = u))
                      : " " !== n.key && ((g.current = ""), e(!1));
                  }
                  return {
                    reference: { onKeyDown: n },
                    floating: {
                      onKeyDown: n,
                      onKeyUp(t) {
                        " " === t.key && e(!1);
                      },
                    },
                  };
                }, [c, r, o, i, f, E, w, b, x])
              );
            }
            function nI(e, t) {
              return {
                ...e,
                rects: {
                  ...e.rects,
                  floating: { ...e.rects.floating, height: t },
                },
              };
            }
            let nj = (e) => ({
              name: "inner",
              options: e,
              async fn(t) {
                let {
                    listRef: n,
                    overflowRef: r,
                    onFallbackChange: o,
                    offset: i = 0,
                    index: l = 0,
                    minItemsVisible: u = 4,
                    referenceOverflowThreshold: a = 0,
                    scrollRef: s,
                    ...c
                  } = e,
                  {
                    rects: d,
                    elements: { floating: f },
                  } = t,
                  p = n.current[l];
                if (!p) return {};
                let v = {
                    ...t,
                    ...(await eg(
                      -p.offsetTop -
                        f.clientTop -
                        d.reference.height / 2 -
                        p.offsetHeight / 2 -
                        i,
                    ).fn(t)),
                  },
                  m = (null == s ? void 0 : s.current) || f,
                  g = await el(nI(v, m.scrollHeight), c),
                  h = await el(v, { ...c, elementContext: "reference" }),
                  y = Math.max(0, g.top),
                  b = v.y + y,
                  x = Math.max(0, m.scrollHeight - y - Math.max(0, g.bottom));
                return (
                  (m.style.maxHeight = x + "px"),
                  (m.scrollTop = y),
                  o &&
                    (m.offsetHeight <
                      p.offsetHeight * Math.min(u, n.current.length - 1) - 1 ||
                    h.top >= -a ||
                    h.bottom >= -a
                      ? (0, eA.flushSync)(() => o(!0))
                      : (0, eA.flushSync)(() => o(!1))),
                  r &&
                    (r.current = await el(
                      nI({ ...v, y: b }, m.offsetHeight),
                      c,
                    )),
                  { y: b }
                );
              },
            });
            function nB(e, t) {
              let { open: n, elements: r } = e,
                {
                  enabled: o = !0,
                  overflowRef: i,
                  scrollRef: u,
                  onChange: a,
                } = t,
                s = tn(a),
                c = l.useRef(!1),
                d = l.useRef(null),
                f = l.useRef(null);
              return (
                l.useEffect(() => {
                  if (!o) return;
                  function e(e) {
                    if (e.ctrlKey || !t || null == i.current) return;
                    let n = e.deltaY,
                      r = i.current.top >= -0.5,
                      o = i.current.bottom >= -0.5,
                      l = t.scrollHeight - t.clientHeight,
                      u = n < 0 ? -1 : 1,
                      a = n < 0 ? "max" : "min";
                    !(t.scrollHeight <= t.clientHeight) &&
                      ((!r && n > 0) || (!o && n < 0)
                        ? (e.preventDefault(),
                          (0, eA.flushSync)(() => {
                            s((e) => e + Math[a](n, l * u));
                          }))
                        : /firefox/i.test(k()) && (t.scrollTop += n));
                  }
                  let t = (null == u ? void 0 : u.current) || r.floating;
                  if (n && t)
                    return (
                      t.addEventListener("wheel", e),
                      requestAnimationFrame(() => {
                        (d.current = t.scrollTop),
                          null != i.current && (f.current = { ...i.current });
                      }),
                      () => {
                        (d.current = null),
                          (f.current = null),
                          t.removeEventListener("wheel", e);
                      }
                    );
                }, [o, n, r.floating, i, u, s]),
                l.useMemo(
                  () =>
                    o
                      ? {
                          floating: {
                            onKeyDown() {
                              c.current = !0;
                            },
                            onWheel() {
                              c.current = !1;
                            },
                            onPointerMove() {
                              c.current = !1;
                            },
                            onScroll() {
                              let e =
                                (null == u ? void 0 : u.current) || r.floating;
                              if (i.current && e && c.current) {
                                if (null !== d.current) {
                                  let t = e.scrollTop - d.current;
                                  ((i.current.bottom < -0.5 && t < -1) ||
                                    (i.current.top < -0.5 && t > 1)) &&
                                    (0, eA.flushSync)(() => s((e) => e + t));
                                }
                                requestAnimationFrame(() => {
                                  d.current = e.scrollTop;
                                });
                              }
                            },
                          },
                        }
                      : {},
                  [o, i, r.floating, u, s],
                )
              );
            }
            function nD(e, t) {
              let [n, r] = e,
                o = !1,
                i = t.length;
              for (let e = 0, l = i - 1; e < i; l = e++) {
                let [i, u] = t[e] || [0, 0],
                  [a, s] = t[l] || [0, 0];
                u >= r != s >= r &&
                  n <= ((a - i) * (r - u)) / (s - u) + i &&
                  (o = !o);
              }
              return o;
            }
            function nF(e) {
              let t;
              void 0 === e && (e = {});
              let {
                  buffer: n = 0.5,
                  blockPointerEvents: r = !1,
                  requireIntent: o = !0,
                } = e,
                i = !1,
                l = null,
                u = null,
                a = performance.now(),
                s = (e) => {
                  let {
                    x: r,
                    y: s,
                    placement: c,
                    elements: f,
                    onClose: p,
                    nodeId: v,
                    tree: m,
                  } = e;
                  return function (e) {
                    function g() {
                      clearTimeout(t), p();
                    }
                    if (
                      (clearTimeout(t),
                      !f.domReference ||
                        !f.floating ||
                        null == c ||
                        null == r ||
                        null == s)
                    )
                      return;
                    let { clientX: h, clientY: y } = e,
                      b = [h, y],
                      x = I(e),
                      w = "mouseleave" === e.type,
                      E = R(f.floating, x),
                      _ = R(f.domReference, x),
                      C = f.domReference.getBoundingClientRect(),
                      k = f.floating.getBoundingClientRect(),
                      S = c.split("-")[0],
                      O = r > k.right - k.width / 2,
                      L = s > k.bottom - k.height / 2,
                      T =
                        b[0] >= C.x &&
                        b[0] <= C.x + C.width &&
                        b[1] >= C.y &&
                        b[1] <= C.y + C.height,
                      N = k.width > C.width,
                      P = k.height > C.height,
                      M = (N ? C : k).left,
                      A = (N ? C : k).right,
                      j = (P ? C : k).top,
                      B = (P ? C : k).bottom;
                    if (E && ((i = !0), !w)) return;
                    if ((_ && (i = !1), _ && !w)) {
                      i = !0;
                      return;
                    }
                    if (
                      (w &&
                        d(e.relatedTarget) &&
                        R(f.floating, e.relatedTarget)) ||
                      (m &&
                        tq(m.nodesRef.current, v).some((e) => {
                          let { context: t } = e;
                          return null == t ? void 0 : t.open;
                        }))
                    )
                      return;
                    if (
                      ("top" === S && s >= C.bottom - 1) ||
                      ("bottom" === S && s <= C.top + 1) ||
                      ("left" === S && r >= C.right - 1) ||
                      ("right" === S && r <= C.left + 1)
                    )
                      return g();
                    let D = [];
                    switch (S) {
                      case "top":
                        D = [
                          [M, C.top + 1],
                          [M, k.bottom - 1],
                          [A, k.bottom - 1],
                          [A, C.top + 1],
                        ];
                        break;
                      case "bottom":
                        D = [
                          [M, k.top + 1],
                          [M, C.bottom - 1],
                          [A, C.bottom - 1],
                          [A, k.top + 1],
                        ];
                        break;
                      case "left":
                        D = [
                          [k.right - 1, B],
                          [k.right - 1, j],
                          [C.left + 1, j],
                          [C.left + 1, B],
                        ];
                        break;
                      case "right":
                        D = [
                          [C.right - 1, B],
                          [C.right - 1, j],
                          [k.left + 1, j],
                          [k.left + 1, B],
                        ];
                    }
                    if (!nD([h, y], D)) {
                      if (i && !T) return g();
                      if (!w && o) {
                        let t = (function (e, t) {
                          let n = performance.now(),
                            r = n - a;
                          if (null === l || null === u || 0 === r)
                            return (l = e), (u = t), (a = n), null;
                          let o = e - l,
                            i = t - u;
                          return (
                            (l = e),
                            (u = t),
                            (a = n),
                            Math.sqrt(o * o + i * i) / r
                          );
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return g();
                      }
                      nD(
                        [h, y],
                        (function (e) {
                          let [t, r] = e;
                          switch (S) {
                            case "top": {
                              let e = [
                                [
                                  k.left,
                                  O ? k.bottom - n : N ? k.bottom - n : k.top,
                                ],
                                [
                                  k.right,
                                  O ? (N ? k.bottom - n : k.top) : k.bottom - n,
                                ],
                              ];
                              return [
                                [
                                  N ? t + n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                [
                                  N ? t - n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                ...e,
                              ];
                            }
                            case "bottom": {
                              let e = [
                                [
                                  k.left,
                                  O ? k.top + n : N ? k.top + n : k.bottom,
                                ],
                                [
                                  k.right,
                                  O ? (N ? k.top + n : k.bottom) : k.top + n,
                                ],
                              ];
                              return [
                                [
                                  N ? t + n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                [
                                  N ? t - n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                ...e,
                              ];
                            }
                            case "left":
                              return [
                                [
                                  L ? k.right - n : P ? k.right - n : k.left,
                                  k.top,
                                ],
                                [
                                  L ? (P ? k.right - n : k.left) : k.right - n,
                                  k.bottom,
                                ],
                                [
                                  t + n + 1,
                                  P ? r + n / 2 : L ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t + n + 1,
                                  P ? r - n / 2 : L ? r + 4 * n : r - 4 * n,
                                ],
                              ];
                            case "right": {
                              let e = [
                                [
                                  L ? k.left + n : P ? k.left + n : k.right,
                                  k.top,
                                ],
                                [
                                  L ? (P ? k.left + n : k.right) : k.left + n,
                                  k.bottom,
                                ],
                              ];
                              return [
                                [
                                  t - n,
                                  P ? r + n / 2 : L ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t - n,
                                  P ? r - n / 2 : L ? r + 4 * n : r - 4 * n,
                                ],
                                ...e,
                              ];
                            }
                          }
                        })([r, s]),
                      )
                        ? !i && o && (t = window.setTimeout(g, 40))
                        : g();
                    }
                  };
                };
              return (s.__options = { blockPointerEvents: r }), s;
            }
          },
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                      else for (n in t) t[n] && (o && (o += " "), (o += n));
                    }
                    return o;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => o });
            let o = r;
          },
          4965: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = { overlay: "ZSjQrniulol6xKOq2Bou" };
          },
          5371: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = { root: "dJZf0Flxzx7PR15g7zqM" };
          },
          6169: (e, t, n) => {
            n.r(t),
              n.d(t, {
                DOWN: () => u,
                LEFT: () => o,
                RIGHT: () => i,
                UP: () => l,
                useSwipeable: () => p,
              });
            var r = n(810);
            let o = "Left",
              i = "Right",
              l = "Up",
              u = "Down",
              a = {
                delta: 10,
                preventScrollOnSwipe: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0,
                swipeDuration: 1 / 0,
                touchEventOptions: { passive: !0 },
              },
              s = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0],
              },
              c = "mousemove",
              d = "mouseup";
            function f(e, t) {
              if (0 === t) return e;
              let n = (Math.PI / 180) * t;
              return [
                e[0] * Math.cos(n) + e[1] * Math.sin(n),
                e[1] * Math.cos(n) - e[0] * Math.sin(n),
              ];
            }
            function p(e) {
              var t, n, p;
              let v;
              let { trackMouse: m } = e,
                g = r.useRef(Object.assign({}, s)),
                h = r.useRef(Object.assign({}, a)),
                y = r.useRef(Object.assign({}, h.current));
              for (v in ((y.current = Object.assign({}, h.current)),
              (h.current = Object.assign(Object.assign({}, a), e)),
              a))
                void 0 === h.current[v] && (h.current[v] = a[v]);
              let [b, x] = r.useMemo(
                () =>
                  (function (e, t) {
                    let n = (t) => {
                        let n = "touches" in t;
                        (n && t.touches.length > 1) ||
                          e((e, o) => {
                            o.trackMouse &&
                              !n &&
                              (document.addEventListener(c, r),
                              document.addEventListener(d, m));
                            let { clientX: i, clientY: l } = n
                                ? t.touches[0]
                                : t,
                              u = f([i, l], o.rotationAngle);
                            return (
                              o.onTouchStartOrOnMouseDown &&
                                o.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), s),
                                {
                                  initial: u.slice(),
                                  xy: u,
                                  start: t.timeStamp || 0,
                                },
                              )
                            );
                          });
                      },
                      r = (t) => {
                        e((e, n) => {
                          let r = "touches" in t;
                          if (r && t.touches.length > 1) return e;
                          if (t.timeStamp - e.start > n.swipeDuration)
                            return e.swiping
                              ? Object.assign(Object.assign({}, e), {
                                  swiping: !1,
                                })
                              : e;
                          let { clientX: s, clientY: c } = r ? t.touches[0] : t,
                            [d, p] = f([s, c], n.rotationAngle),
                            v = d - e.xy[0],
                            m = p - e.xy[1],
                            g = Math.abs(v),
                            h = Math.abs(m),
                            y = (t.timeStamp || 0) - e.start,
                            b = g > h ? (v > 0 ? i : o) : m > 0 ? u : l,
                            x =
                              "number" == typeof n.delta
                                ? n.delta
                                : n.delta[b.toLowerCase()] || a.delta;
                          if (g < x && h < x && !e.swiping) return e;
                          let w = {
                            absX: g,
                            absY: h,
                            deltaX: v,
                            deltaY: m,
                            dir: b,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: Math.sqrt(g * g + h * h) / (y || 1),
                            vxvy: [v / (y || 1), m / (y || 1)],
                          };
                          w.first && n.onSwipeStart && n.onSwipeStart(w),
                            n.onSwiping && n.onSwiping(w);
                          let E = !1;
                          return (
                            (n.onSwiping ||
                              n.onSwiped ||
                              n["onSwiped".concat(b)]) &&
                              (E = !0),
                            E &&
                              n.preventScrollOnSwipe &&
                              n.trackTouch &&
                              t.cancelable &&
                              t.preventDefault(),
                            Object.assign(Object.assign({}, e), {
                              first: !1,
                              eventData: w,
                              swiping: !0,
                            })
                          );
                        });
                      },
                      p = (t) => {
                        e((e, n) => {
                          let r;
                          if (e.swiping && e.eventData) {
                            if (t.timeStamp - e.start < n.swipeDuration) {
                              (r = Object.assign(
                                Object.assign({}, e.eventData),
                                { event: t },
                              )),
                                n.onSwiped && n.onSwiped(r);
                              let o = n["onSwiped".concat(r.dir)];
                              o && o(r);
                            }
                          } else n.onTap && n.onTap({ event: t });
                          return (
                            n.onTouchEndOrOnMouseUp &&
                              n.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), s),
                              { eventData: r },
                            )
                          );
                        });
                      },
                      v = () => {
                        document.removeEventListener(c, r),
                          document.removeEventListener(d, m);
                      },
                      m = (e) => {
                        v(), p(e);
                      },
                      g = (e, t) => {
                        let o = () => {};
                        if (e && e.addEventListener) {
                          let i = Object.assign(
                              Object.assign({}, a.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            l = [
                              ["touchstart", n, i],
                              [
                                "touchmove",
                                r,
                                Object.assign(
                                  Object.assign({}, i),
                                  t.preventScrollOnSwipe ? { passive: !1 } : {},
                                ),
                              ],
                              ["touchend", p, i],
                            ];
                          l.forEach((t) => {
                            let [n, r, o] = t;
                            return e.addEventListener(n, r, o);
                          }),
                            (o = () =>
                              l.forEach((t) => {
                                let [n, r] = t;
                                return e.removeEventListener(n, r);
                              }));
                        }
                        return o;
                      },
                      h = {
                        ref: (t) => {
                          null !== t &&
                            e((e, n) => {
                              if (e.el === t) return e;
                              let r = {};
                              return (
                                e.el &&
                                  e.el !== t &&
                                  e.cleanUpTouch &&
                                  (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                                n.trackTouch && t && (r.cleanUpTouch = g(t, n)),
                                Object.assign(
                                  Object.assign(Object.assign({}, e), {
                                    el: t,
                                  }),
                                  r,
                                )
                              );
                            });
                        },
                      };
                    return t.trackMouse && (h.onMouseDown = n), [h, g];
                  })((e) => (g.current = e(g.current, h.current)), {
                    trackMouse: m,
                  }),
                [m],
              );
              return (
                (g.current =
                  ((t = g.current),
                  (n = h.current),
                  (p = y.current),
                  n.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe ||
                        n.touchEventOptions.passive !==
                          p.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: x(t.el, n),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: x(t.el, n),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                b
              );
            }
          },
          6161: (e, t, n) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(810),
              o = Symbol.for("react.element"),
              i = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              u =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              a = { key: !0, ref: !0, __self: !0, __source: !0 };
            function s(e, t, n) {
              var r,
                i = {},
                s = null,
                c = null;
              for (r in (void 0 !== n && (s = "" + n),
              void 0 !== t.key && (s = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                l.call(t, r) && !a.hasOwnProperty(r) && (i[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === i[r] && (i[r] = t[r]);
              return {
                $$typeof: o,
                type: e,
                key: s,
                ref: c,
                props: i,
                _owner: u.current,
              };
            }
            (t.Fragment = i), (t.jsx = s), (t.jsxs = s);
          },
          9541: (e, t, n) => {
            e.exports = n(6161);
          },
          6198: (e, t, n) => {
            var r, o;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable = void 0);
            let i = n(810),
              l = n(6169);
            ((o = r || (r = {})).TOP = "top"),
              (o.BOTTOM = "bottom"),
              (o.RIGHT = "right"),
              (o.LEFT = "left");
            let u = (e) => {
                switch (e) {
                  case "top":
                  case "top-end":
                  case "top-start":
                    return r.TOP;
                  case "right":
                  case "right-end":
                  case "right-start":
                    return r.RIGHT;
                  case "left":
                  case "left-end":
                  case "left-start":
                    return r.LEFT;
                  default:
                    return r.BOTTOM;
                }
              },
              a = (e) => {
                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                requestAnimationFrame(() => {
                  t.current &&
                    ((t.current.style.willChange = "transform"),
                    (t.current.style.transform =
                      i === r.TOP || i === r.BOTTOM
                        ? "translateY(".concat(n || 0, "px)")
                        : "translateX(".concat(o || 0, "px)")));
                });
              },
              s = (e) => {
                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                switch (i) {
                  case r.TOP:
                    n <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                    break;
                  case r.RIGHT:
                    o >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                    break;
                  case r.LEFT:
                    o <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                    break;
                  default:
                    n >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                }
              },
              c = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              d = (e) => {
                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                switch (i) {
                  case r.TOP:
                    return (
                      t.current && n < 0 && t.current.offsetHeight / n >= -2
                    );
                  case r.RIGHT:
                    return t.current && o > 0 && t.current.offsetWidth / o <= 2;
                  case r.LEFT:
                    return (
                      t.current && o < 0 && t.current.offsetWidth / o >= -2
                    );
                  default:
                    return (
                      t.current && n > 0 && t.current.offsetHeight / n <= 2
                    );
                }
              };
            t.usePopoverSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: n = {},
                  onClose: r,
                  disableSwipe: o,
                  placement: a,
                } = e,
                f = (0, i.useMemo)(() => u(a), [a]),
                p = (0, i.useCallback)(() => {
                  r && (c(t), r());
                }, [r, t]),
                v = (0, i.useCallback)(
                  (e) => {
                    o ||
                      s({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: f,
                      });
                  },
                  [o, t, f],
                ),
                m = (0, i.useCallback)(
                  (e) => {
                    !o &&
                      (d({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: f,
                      })
                        ? r && (c(t), r())
                        : c(t));
                  },
                  [o, t, f, r],
                );
              return {
                handlers: (0, l.useSwipeable)({
                  onSwiped: m,
                  onSwiping: v,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...n,
                }),
                onCloseCallback: p,
              };
            };
          },
          9430: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Popover = void 0);
            let o = n(9541),
              i = n(5881),
              l = n(810),
              u = n(6011),
              a = n(6198),
              s = n(5853),
              c = r(n(4965));
            t.Popover = (e) => {
              let {
                  children: t,
                  offsetOptions: n,
                  strategy: r,
                  placement: d,
                  isMobile: f,
                  visuallyHiddenDismiss: p,
                  positionElement: v,
                  transform: m,
                  initialOpen: g = !1,
                  open: h,
                  onOpenChange: y,
                  disableFloatingStyles: b = !1,
                  overlayClassName: x,
                  transition: w,
                  style: E,
                  returnFocus: _,
                  isNested: R = !1,
                  onShow: C,
                  customRoleProps: k,
                  portalNode: S,
                } = e,
                [O, L] = (0, l.useState)(g),
                [T, N] = (0, l.useState)(null),
                P = (0, l.useRef)([]),
                M = (0, l.useRef)([]),
                A = (0, u.useListItem)(),
                I = null != h ? h : O,
                j = null != y ? y : L,
                [B, D] = t,
                F = (0, l.useCallback)(() => {
                  j(!1);
                }, [j]),
                V = (0, l.useId)(),
                W = (0, l.useId)(),
                {
                  refs: U,
                  floatingStyles: H,
                  context: z,
                } = (0, u.useFloating)({
                  strategy: r,
                  placement: d,
                  open: I,
                  onOpenChange: j,
                  middleware: [(0, u.offset)(n), (0, u.flip)(), (0, u.shift)()],
                  whileElementsMounted: u.autoUpdate,
                  transform: m,
                }),
                G = (0, u.useTypeahead)(z, {
                  listRef: M,
                  onMatch: I ? N : void 0,
                  activeIndex: T,
                }),
                Y = (0, u.useListNavigation)(z, {
                  listRef: P,
                  activeIndex: T,
                  nested: R,
                  onNavigate: N,
                }),
                K = (0, u.useFloatingTree)(),
                Z = (0, u.useFloatingNodeId)(),
                X = (0, u.useFloatingParentNodeId)();
              (0, l.useEffect)(() => {
                if (!K) return;
                let e = () => {
                    j(!1);
                  },
                  t = (e) => {
                    e.nodeId !== Z && e.parentId === X && j(!1);
                  };
                return (
                  K.events.on("click", e),
                  K.events.on("menuopen", t),
                  () => {
                    K.events.off("click", e), K.events.off("menuopen", t);
                  }
                );
              }, [K, Z, X, j]),
                (0, l.useEffect)(() => {
                  I && (null == C || C());
                }, [C, I]),
                (0, l.useEffect)(() => {
                  I &&
                    K &&
                    K.events.emit("menuopen", { parentId: X, nodeId: Z });
                }, [K, I, Z, X]),
                (0, l.useLayoutEffect)(() => {
                  v && U.setPositionReference(v);
                }, [U, v]);
              let { handlers: q } = (0, a.usePopoverSwipeable)({
                  ref: U.floating,
                  onClose: F,
                  placement: d,
                  disableSwipe: !f,
                  swipeableProps: { preventScrollOnSwipe: !0 },
                }),
                $ = (0, u.useMergeRefs)([
                  U.setFloating,
                  null == q ? void 0 : q.ref,
                ]),
                J = (0, u.useRole)(z, k),
                Q = (0, u.useDismiss)(z, { referencePress: !0 }),
                ee = (0, u.useClick)(z, { toggle: !R, ignoreMouse: R }),
                et = (0, u.useHover)(z, {
                  enabled: R,
                  handleClose: (0, u.safePolygon)({ blockPointerEvents: !0 }),
                }),
                en = (0, l.useCallback)((e) => {
                  e.stopPropagation();
                }, []),
                {
                  getReferenceProps: er,
                  getFloatingProps: eo,
                  getItemProps: ei,
                } = (0, u.useInteractions)([J, Q, ee, et, Y, G]),
                { isMounted: el, styles: eu } = (0, u.useTransitionStyles)(
                  z,
                  w,
                ),
                ea = (0, u.useMergeRefs)([U.setReference, A.ref]),
                es =
                  B &&
                  (0, l.cloneElement)(B, {
                    ref: ea,
                    ...er({ onClick: B.props.onClick }),
                    key: V,
                  }),
                ec = {
                  ref: $,
                  style: (0, l.useMemo)(
                    () =>
                      f
                        ? {
                            ...(b ? {} : H),
                            ...E,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: "auto",
                            transform: "none",
                          }
                        : { ...(b ? {} : H), ...E },
                    [f, b, H, E],
                  ),
                  ...eo(),
                  onMouseDown: null == q ? void 0 : q.onMouseDown,
                  children: (0, l.cloneElement)(D.props.children, {
                    onClose: F,
                    style: eu,
                    key: W,
                  }),
                },
                ed = (0, l.cloneElement)(D, ec),
                ef = (0, l.useMemo)(
                  () => ({
                    activeIndex: T,
                    setActiveIndex: N,
                    getItemProps: ei,
                    isOpen: I,
                  }),
                  [T, ei, I],
                ),
                ep = R ? -1 : 0;
              return (0, o.jsxs)(s.PopoverContext.Provider, {
                value: ef,
                children: [
                  es,
                  (0, o.jsx)(u.FloatingList, {
                    elementsRef: P,
                    children:
                      el &&
                      (0, o.jsxs)(u.FloatingPortal, {
                        root: S,
                        children: [
                          (0, o.jsx)(u.FloatingOverlay, {
                            className: (0, i.clsx)(c.default.overlay, x),
                            onClick: en,
                            lockScroll: !0,
                          }),
                          (0, o.jsx)(u.FloatingFocusManager, {
                            context: z,
                            returnFocus: _,
                            initialFocus: ep,
                            visuallyHiddenDismiss: p,
                            children: ed,
                          }),
                        ],
                      }),
                  }),
                ],
              });
            };
          },
          1688: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.PopoverContentComponent = void 0);
            let o = n(9541),
              i = n(810),
              l = n(5881),
              u = r(n(5371));
            (t.PopoverContentComponent = (e) => {
              let { className: t, children: n, forwardRef: r, ...i } = e;
              return (0, o.jsx)("div", {
                className: (0, l.clsx)(u.default.root, t),
                ref: r,
                ...i,
                children: n,
              });
            }),
              (t.PopoverContent = (0, i.forwardRef)((e, n) =>
                (0, o.jsx)(t.PopoverContentComponent, { forwardRef: n, ...e }),
              ));
          },
          5853: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContext = void 0);
            let r = n(810);
            t.PopoverContext = (0, r.createContext)({
              getItemProps: () => ({}),
              activeIndex: null,
              setActiveIndex: () => {},
              isOpen: !1,
            });
          },
          810: (e) => {
            e.exports = c;
          },
        },
        b = {};
      function x(e) {
        var t = b[e];
        if (void 0 !== t) return t.exports;
        var n = (b[e] = { exports: {} });
        return y[e].call(n.exports, n, n.exports, x), n.exports;
      }
      (x.d = (e, t) => {
        for (var n in t)
          x.o(t, n) &&
            !x.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (x.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (x.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var w = {};
      Object.defineProperty(w, "__esModule", { value: !0 }),
        (w.PopoverContent = w.Popover = void 0),
        (r = x(9430)),
        Object.defineProperty(w, "Popover", {
          enumerable: !0,
          get: function () {
            return r.Popover;
          },
        }),
        (o = x(1688)),
        Object.defineProperty(w, "PopoverContent", {
          enumerable: !0,
          get: function () {
            return o.PopoverContent;
          },
        });
      var E = w.Popover,
        _ = w.PopoverContent;
      w.__esModule;
      var R = n(5773),
        C = n(2570),
        k = n(63394);
      let S = (e) =>
          !!e &&
          e.some((e) => {
            let [t] = (null == e ? void 0 : e.split(":")) || [];
            return e === k.sH || (t && k.kF.includes(t));
          }),
        O = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            [t, n] = (0, s.useState)(e),
            { contentRef: r } = (0, k.$Y)();
          return (
            (0, s.useEffect)(() => {
              let e = new ResizeObserver((e) => {
                let [r] = e || [];
                r && r.contentRect.height !== t && n(r.contentRect.height);
              });
              return (
                r && e.observe(r),
                () => {
                  e.disconnect();
                }
              );
            }, [t, r]),
            { contentHeight: t }
          );
        };
      var L = n(60836),
        T = n(16636),
        N = n(1673),
        P = n.n(N);
      let M = (e) => {
        let { title: t, children: n, restrictionsClassName: r } = e;
        return (0, u.jsxs)("section", {
          className: P().root,
          children: [
            (0, u.jsx)(C.Caption, {
              variant: "span",
              type: "text",
              size: "m",
              weight: "medium",
              "aria-hidden": !0,
              children: t,
            }),
            (0, u.jsx)(T.y, {
              children: (0, u.jsx)(C.Heading, { variant: "h4", children: t }),
            }),
            (0, u.jsx)("div", {
              className: (0, L.W)(P().restrictions, r),
              children: n,
            }),
          ],
        });
      };
      var A = n(86939);
      let I = (e) => {
        var t, n, r;
        let { seed: o, title: i, isStation: l } = e,
          { vibe: u } = (0, k.oR)(),
          { applySetting: a } = (0, k.Qh)({
            seeds:
              null !==
                (r =
                  null === (t = u.meta) || void 0 === t ? void 0 : t.seeds) &&
              void 0 !== r
                ? r
                : [],
            pageIdForFrom: k.Rh.HOME,
            blockIdForFrom: k.BE.RUP_MAIN_RADIO,
          }),
          { formatMessage: c } = (0, d.Z)(),
          f = !!(null === (n = u.meta) || void 0 === n
            ? void 0
            : n.seeds.includes(o)),
          p = u.applyingSetting === o,
          v = (0, s.useMemo)(
            () =>
              f
                ? "".concat(c({ id: "vibe-actions.remove" }), " ").concat(i)
                : "".concat(c({ id: "vibe-actions.apply" }), " ").concat(i),
            [f, i, c],
          );
        return {
          isApplying: p,
          isSelected: f,
          ariaLabel: v,
          ariaPressed: f,
          onClickHandler: (0, s.useCallback)(async () => {
            u.setApplyingSetting(o), await a(o, l), u.setApplyingSetting();
          }, [a, l, o, u]),
        };
      };
      var j = n(29715),
        B = n.n(j);
      let D = (0, a.Pi)((e) => {
        let { item: t } = e,
          { vibe: n } = (0, k.oR)(),
          r = (0, s.useRef)(null),
          {
            isApplying: o,
            isSelected: i,
            ariaPressed: l,
            onClickHandler: a,
          } = I({ seed: t.seed, title: t.title, isStation: !0 }),
          c = (0, s.useCallback)(
            (e) => {
              n.isLoading ||
                (r.current && (0, v.m)(e, B().ripple, r.current), a());
            },
            [a, n.isLoading],
          );
        return (0, u.jsxs)(m.z, {
          radius: "xxxl",
          className: (0, L.W)(B().button, B().textButton, {
            [B().button_selected]: i,
            [B().button_applying]: o,
            [B().specialButton]: t.specialContext,
          }),
          onClick: c,
          "aria-disabled": n.isLoading,
          "aria-pressed": l,
          withRipple: !1,
          children: [
            t.specialContext &&
              (0, u.jsx)(A.Image, {
                className: B().specialImage,
                src: t.specialContextImage,
                size: 100,
                fit: "cover",
                withAvatarReplace: !0,
              }),
            (0, u.jsx)(C.Caption, {
              variant: "span",
              type: "controls",
              size: "m",
              weight: "medium",
              className: B().title,
              children: t.title,
            }),
            (0, u.jsx)("div", { className: B().rippleContainer, ref: r }),
          ],
        });
      });
      ((i = l || (l = {})).DIVERSITY = "diversity"),
        (i.MOOD_ENERGY = "moodEnergy"),
        (i.LANGUAGE = "language");
      let F = (0, a.Pi)((e) => {
        let { type: t, restrictionValue: n } = e,
          { vibe: r } = (0, k.oR)(),
          o = (0, s.useRef)(null),
          {
            isApplying: i,
            isSelected: a,
            ariaPressed: c,
            onClickHandler: d,
          } = I({ seed: n.seed, title: n.title }),
          f = (0, s.useCallback)(
            (e) => {
              r.isLoading ||
                (o.current && (0, v.m)(e, B().ripple, o.current), d());
            },
            [d, r.isLoading],
          ),
          p = (0, s.useMemo)(
            () =>
              (0, u.jsx)(C.Caption, {
                variant: "span",
                type: "controls",
                size: "m",
                weight: "medium",
                className: B().title,
                children: n.title,
              }),
            [n.title],
          );
        switch (t) {
          case l.DIVERSITY:
            return (0, u.jsxs)(m.z, {
              className: (0, L.W)(B().button, B().diversityButton, {
                [B().button_selected]: a,
                [B().button_applying]: i,
              }),
              radius: "xl",
              "aria-disabled": r.isLoading,
              "aria-pressed": c,
              onClick: f,
              withRipple: !1,
              children: [
                (0, u.jsx)(A.Image, {
                  "aria-hidden": !0,
                  src: n.imageUrl,
                  fit: "contain",
                  width: 40,
                  height: 40,
                  withAvatarReplace: !0,
                }),
                p,
                (0, u.jsx)("div", { className: B().rippleContainer, ref: o }),
              ],
            });
          case l.MOOD_ENERGY:
            return (0, u.jsxs)("div", {
              className: B().moodEnergy,
              children: [
                (0, u.jsx)(m.z, {
                  variant: "text",
                  className: (0, L.W)(B().button, B().moodEnergyButton, {
                    [B().button_selected]: a,
                    [B().button_applying]: i,
                  }),
                  radius: "round",
                  onClick: f,
                  withRipple: !1,
                  "aria-disabled": r.isLoading,
                  "aria-pressed": c,
                  "aria-label": n.title,
                  children: (0, u.jsx)(A.Image, {
                    src: n.imageUrl,
                    fit: "contain",
                    width: 52,
                    height: 52,
                    "aria-hidden": !0,
                    withAvatarReplace: !0,
                  }),
                }),
                (0, u.jsx)("span", { "aria-hidden": !0, children: p }),
              ],
            });
          case l.LANGUAGE:
            return (0, u.jsxs)(m.z, {
              radius: "xxxl",
              className: (0, L.W)(B().button, B().textButton, {
                [B().button_selected]: a,
                [B().button_applying]: i,
              }),
              onClick: f,
              withRipple: !1,
              "aria-disabled": r.isLoading,
              "aria-pressed": c,
              children: [
                p,
                (0, u.jsx)("div", { className: B().rippleContainer, ref: o }),
              ],
            });
          default:
            return null;
        }
      });
      var V = n(33562),
        W = n.n(V);
      let U = {
          duration: 300,
          initial: { transform: "translateX(5%)", opacity: 0 },
          open: { transform: "translateX(0)", opacity: 1 },
          close: { transform: "translateX(5%)", opacity: 0 },
        },
        H = (0, a.Pi)(() => {
          var e, t, n, r;
          let { formatMessage: o } = (0, d.Z)(),
            { vibe: i, vibeSettings: l, settings: a } = (0, k.oR)(),
            { pageId: c } = (0, k.lV)(),
            { blockIdForFrom: h } = (0, k.qY)(),
            y = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            { resetSettings: x } = (0, k.Qh)({
              seeds:
                null !==
                  (r =
                    null === (e = i.meta) || void 0 === e ? void 0 : e.seeds) &&
                void 0 !== r
                  ? r
                  : [],
              pageIdForFrom: c,
              blockIdForFrom: h,
            }),
            { contentRef: w } = (0, k.$Y)(),
            { contentHeight: L } = O(0),
            [T, N] = (0, s.useState)(!1);
          l.loadingState === k.Gu.IDLE && (0, s.use)(l.getData());
          let P = (0, s.useCallback)(() => {
              N(!1);
            }, [N]),
            A = a.layout === k.t8.Mobile,
            I = (0, s.useMemo)(
              () =>
                A
                  ? { height: "90vh" }
                  : w
                    ? {
                        insetInlineEnd: 20,
                        insetBlockStart: w.offsetTop + 7,
                        height: L - 16,
                      }
                    : {},
              [L, w, A],
            );
          (0, s.useEffect)(
            () => () => {
              l.reset();
            },
            [l],
          );
          let j = !!(i.isLoading || i.isMyVibe),
            B = (0, s.useCallback)(
              (e) => {
                if (!i.isLoading) {
                  var t;
                  y.current && (0, v.m)(e, W().ripple, y.current),
                    x(),
                    null === (t = b.current) || void 0 === t || t.focus();
                }
              },
              [x, i.isLoading],
            ),
            V = (0, s.useMemo)(() => {
              var e, t;
              if (S(null === (e = i.meta) || void 0 === e ? void 0 : e.seeds))
                return (
                  null === (t = i.meta) || void 0 === t ? void 0 : t.context
                )
                  ? (0, u.jsx)(m.z, {
                      className: W().toggleSettingsButton,
                      size: "m",
                      radius: "round",
                      icon: (0, u.jsx)(g.J, { variant: "filter", size: "xs" }),
                      "aria-label": o({
                        id: "vibe-actions.aria-label-settings",
                      }),
                      ...(0, p.BA)(p.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                    })
                  : (0, u.jsx)(m.z, {
                      className: W().toggleSettingsButton,
                      size: "default",
                      radius: "xxxl",
                      icon: (0, u.jsx)(g.J, { variant: "filter", size: "xxs" }),
                      "aria-label": o({
                        id: "vibe-actions.aria-label-settings",
                      }),
                      ...(0, p.BA)(p.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                      children: (0, u.jsx)(C.Caption, {
                        variant: "span",
                        type: "controls",
                        size: "m",
                        weight: "medium",
                        children: (0, u.jsx)(f.Z, {
                          id: "interface-actions.configure-my-vibe",
                        }),
                      }),
                    });
            }, [
              o,
              null === (t = i.meta) || void 0 === t ? void 0 : t.context,
              null === (n = i.meta) || void 0 === n ? void 0 : n.seeds,
            ]);
          return (0, u.jsxs)(E, {
            placement: "bottom",
            isMobile: A,
            strategy: "fixed",
            transform: !1,
            positionElement: w,
            disableFloatingStyles: !A,
            open: T,
            onOpenChange: N,
            style: I,
            overlayClassName: W().overlay,
            transition: U,
            children: [
              V,
              (0, u.jsx)(_, {
                className: W().popover,
                children: (0, u.jsxs)("div", {
                  className: W().root,
                  children: [
                    (0, u.jsxs)("div", {
                      className: W().header,
                      children: [
                        (0, u.jsx)(C.Heading, {
                          variant: "h3",
                          size: "s",
                          weight: "bold",
                          children: (0, u.jsx)(f.Z, {
                            id: "interface-actions.my-vibe-settings",
                          }),
                        }),
                        (0, u.jsxs)("div", {
                          className: W().actions,
                          children: [
                            (0, u.jsx)(R.u, {
                              offsetOptions: 4,
                              placement: "left",
                              text: o({
                                id: "interface-actions.reset-my-vibe-settings",
                              }),
                              children: (0, u.jsx)(m.z, {
                                variant: "outline",
                                radius: "round",
                                size: "xxxs",
                                icon: (0, u.jsx)(g.J, {
                                  variant: "reset",
                                  size: "xxxs",
                                }),
                                onClick: B,
                                disabled: !!i.isMyVibe,
                                "aria-disabled": j,
                                "aria-label": o({
                                  id: "interface-actions.reset-my-vibe-settings",
                                }),
                                ref: y,
                              }),
                            }),
                            (0, u.jsx)(m.z, {
                              radius: "round",
                              color: "secondary",
                              size: "xxs",
                              icon: (0, u.jsx)(g.J, {
                                variant: "close",
                                size: "xxs",
                              }),
                              onClick: P,
                              "aria-label": o({
                                id: "interface-actions.close-my-vibe-settings",
                              }),
                              ref: b,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className: W().settings,
                      children: [
                        l.contextItems.length > 0 &&
                          (0, u.jsx)(M, {
                            title: o({
                              id: "interface-actions.my-vibe-context-settings",
                            }),
                            restrictionsClassName: W().contextItems,
                            children: l.contextItems.map((e) =>
                              (0, u.jsx)(D, { item: e }, e.seed),
                            ),
                          }),
                        l.diversity &&
                          (0, u.jsx)(M, {
                            title: l.diversity.title,
                            restrictionsClassName: W().diversity,
                            children: l.diversity.values.map((e) => {
                              var t;
                              return (0, u.jsx)(
                                F,
                                {
                                  type:
                                    null === (t = l.diversity) || void 0 === t
                                      ? void 0
                                      : t.type,
                                  restrictionValue: e,
                                },
                                e.value,
                              );
                            }),
                          }),
                        l.moodEnergy &&
                          (0, u.jsx)(M, {
                            title: l.moodEnergy.title,
                            restrictionsClassName: W().moodEnergy,
                            children: l.moodEnergy.values.map((e) => {
                              var t;
                              return (0, u.jsx)(
                                F,
                                {
                                  type:
                                    null === (t = l.moodEnergy) || void 0 === t
                                      ? void 0
                                      : t.type,
                                  restrictionValue: e,
                                },
                                e.value,
                              );
                            }),
                          }),
                        l.language &&
                          (0, u.jsx)(M, {
                            title: l.language.title,
                            restrictionsClassName: W().contextItems,
                            children: l.language.values.map((e) => {
                              var t;
                              return (0, u.jsx)(
                                F,
                                {
                                  type:
                                    null === (t = l.language) || void 0 === t
                                      ? void 0
                                      : t.type,
                                  restrictionValue: e,
                                },
                                e.value,
                              );
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        });
      var z = n(42288);
      let G = (e) => {
          let { type: t, tag: n } = e.id;
          return {
            title: e.name,
            seed: "".concat(t, ":").concat(n),
            specialContext: e.specialContext,
            specialContextImage: e.specialContextImage,
          };
        },
        Y = (e) => ({
          value: e.value,
          title: e.name,
          seed: e.serializedSeed,
          imageUrl: e.imageUrl,
        }),
        K = (e, t) => {
          let n = [];
          return (
            t.possibleValues.forEach((e) => {
              e.unspecified || n.push(Y(e));
            }),
            { type: e, title: t.name, values: (0, z.pj)(n) }
          );
        },
        Z = z.V5.model("ContextItem", {
          title: z.V5.string,
          seed: z.V5.string,
          specialContext: z.V5.boolean,
          specialContextImage: z.V5.optional(z.V5.string, ""),
        }),
        X = z.V5.model("RestrictonValue", {
          value: z.V5.string,
          title: z.V5.string,
          seed: z.V5.string,
          imageUrl: z.V5.maybe(z.V5.string),
        }),
        q = z.V5.model("Restricton", {
          type: z.V5.enumeration(Object.values(l)),
          title: z.V5.string,
          values: z.V5.array(X),
        }),
        $ = z.V5.model("VibeSettings", {
          loadingState: z.V5.enumeration(Object.values(k.Gu)),
          contextItems: z.V5.array(Z),
          diversity: z.V5.maybeNull(q),
          moodEnergy: z.V5.maybeNull(q),
          language: z.V5.maybeNull(q),
        }).actions((e) => ({
          getData: (0, z.ls)(function* (t) {
            let { rotorResource: n, modelActionsLogger: r } = (0, z.dU)(e);
            if (e.loadingState !== k.Gu.PENDING)
              try {
                var o, i, u, a;
                e.loadingState = k.Gu.PENDING;
                let r = yield n.waveSettings(t);
                (null == r
                  ? void 0
                  : null === (o = r.settingRestrictions) || void 0 === o
                    ? void 0
                    : o.diversity) &&
                  (e.diversity = K(
                    l.DIVERSITY,
                    r.settingRestrictions.diversity,
                  )),
                  (null == r
                    ? void 0
                    : null === (i = r.settingRestrictions) || void 0 === i
                      ? void 0
                      : i.moodEnergy) &&
                    (e.moodEnergy = K(
                      l.MOOD_ENERGY,
                      r.settingRestrictions.moodEnergy,
                    )),
                  (null == r
                    ? void 0
                    : null === (u = r.settingRestrictions) || void 0 === u
                      ? void 0
                      : u.language) &&
                    (e.language = K(
                      l.LANGUAGE,
                      r.settingRestrictions.language,
                    ));
                let s =
                  Array.isArray(null == r ? void 0 : r.blocks) &&
                  (null == r
                    ? void 0
                    : null === (a = r.blocks) || void 0 === a
                      ? void 0
                      : a.find(
                          (e) => (null == e ? void 0 : e.type) === "contexts",
                        ));
                s &&
                  Array.isArray(s.items) &&
                  (e.contextItems = (0, z.pj)(s.items.map(G))),
                  e.loadingState !== k.Gu.IDLE &&
                    (e.loadingState = k.Gu.RESOLVE);
              } catch (t) {
                r.error(t),
                  e.loadingState !== k.Gu.IDLE &&
                    (e.loadingState = k.Gu.REJECT);
              }
          }),
          reset() {
            (e.loadingState = k.Gu.IDLE),
              (e.contextItems = (0, z.pj)([])),
              (e.diversity = null),
              (e.moodEnergy = null),
              (e.language = null);
          },
        }));
    },
    58101: function (e, t, n) {
      "use strict";
      n.d(t, {
        MainPage: function () {
          return E;
        },
      });
      var r = n(9753),
        o = n(9544),
        i = n(98639),
        l = n(80542),
        u = n(23881),
        a = n(69869),
        s = n(39513),
        c = n(41055),
        d = n(5773),
        f = n(2570),
        p = n(28326),
        v = n(68106),
        m = n(92324),
        g = n(78918),
        h = n(5293),
        y = n(63394),
        b = n(67868),
        x = n(60966),
        w = n.n(x);
      let E = (0, o.Pi)(() => {
        let {
            main: e,
            user: t,
            experiments: n,
            modals: { releaseNotesModal: o },
          } = (0, y.oR)(),
          { formatMessage: x } = (0, l.Z)(),
          E = (0, y.bo)(),
          [_, R] = (0, h.zU)(),
          [C, k] = (0, h.zU)();
        e.landing.loadingState === y.Gu.IDLE &&
          (0, i.use)(
            e.landing.getSkeleton(
              { id: a.jB.WEB_MAIN, showWizard: t.settings.showWizard },
              { preloadBlocks: 2 },
            ),
          ),
          (0, i.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, i.useEffect)(() => {
            (0, g.KZ)();
          }, []),
          (0, y.NO)(e.landing.loadingState === y.Gu.RESOLVE);
        let S = n.checkExperiment(y.pe.WebNextDisableVibe, "on"),
          O = (0, i.useMemo)(
            () => (S ? { "margin-block-start": "1vh" } : {}),
            [S],
          ),
          L = (0, i.useMemo)(
            () =>
              (0, r.jsxs)(d.u, {
                placement: "right",
                offsetOptions: 4,
                children: [
                  (0, r.jsx)(s.z, {
                    color: "secondary",
                    radius: "xl",
                    "aria-label": "Beta ".concat(
                      x({ id: "desktop.app-version" }, { version: E }),
                    ),
                    className: w().beta,
                    onClick: o.open,
                    children: (0, r.jsx)(f.Caption, {
                      variant: "div",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      children: "Beta",
                    }),
                  }),
                  (0, r.jsx)(d._v, { children: E }),
                ],
              }),
            [x, o.open, E],
          );
        return (0, r.jsx)(y.Lh, {
          pageId: y.Rh.HOME,
          children: (0, r.jsx)(h.I7, {
            scrollElement: _,
            headerElement: C,
            children: (0, r.jsxs)(c.t, {
              className: w().root,
              containerClassName: w().content,
              ref: R,
              ...(0, u.BA)(u.Br.main.MAIN_PAGE),
              children: [
                L,
                !S &&
                  (0, r.jsx)(y.J, {
                    blockIdForFrom: y.BE.RUP_MAIN_RADIO,
                    blockId: y.aU.RUP,
                    blockType: y.aU.RUP,
                    blockPosX: 0,
                    blockPosY: 0,
                    objectsCount: 0,
                    children: (0, r.jsx)(m.w, { className: w().vibe }),
                  }),
                (0, r.jsx)("div", { className: w().header, ref: k }),
                (0, r.jsx)(p.Od, {
                  landing: e.landing,
                  errorComponent: (0, r.jsx)(v.D, {
                    className: w().error,
                    withBackwardControl: !1,
                  }),
                  containerClassName: w().landing,
                  headerClassName: w().header,
                  containerStyle: O,
                }),
                (0, r.jsx)(b.$_, { className: w().footer }),
              ],
            }),
          }),
        });
      });
    },
    92324: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return L;
        },
        w: function () {
          return k;
        },
      });
      var r = n(9753),
        o = n(60836),
        i = n(9544),
        l = n(98639),
        u = n(23881),
        a = n(54050),
        s = n(63394),
        c = n(80542),
        d = n(31014),
        f = n(39513),
        p = n(28852),
        v = n(60299),
        m = n.n(v);
      let g = (0, i.Pi)((e) => {
        let { isPlaying: t, onClick: n, className: i } = e,
          { vibe: a } = (0, s.oR)(),
          { formatMessage: v } = (0, c.Z)(),
          g = t ? "pauseVibe" : "playVibe",
          h = t
            ? u.QM.vibe.MY_VIBE_PLAY_BUTTON_PLAYING
            : u.QM.vibe.MY_VIBE_PLAY_BUTTON_NOT_PLAYING,
          y = (0, l.useMemo)(
            () =>
              t
                ? v({ id: "vibe-actions.aria-label-pause" })
                : v({ id: "vibe-actions.aria-label-play" }),
            [v, t],
          ),
          b = (0, l.useCallback)(
            (e) => {
              a.isLoading || null == n || n(),
                e.stopPropagation(),
                e.preventDefault();
            },
            [n, a.isLoading],
          );
        return (0, r.jsx)(f.z, {
          className: (0, o.W)(
            m().root,
            { [m().root_isLoading]: a.isLoading },
            i,
          ),
          withRipple: !1,
          withHover: !1,
          onClick: b,
          variant: "text",
          "aria-disabled": a.isLoading,
          "aria-label": y,
          icon: (0, r.jsx)(p.J, {
            size: "s",
            className: (0, o.W)(m().icon, m()["icon_".concat(g)]),
            variant: g,
          }),
          ...(0, u.BA)(h),
          children: (0, r.jsx)(d.Z, { id: "entity-names.my-vibe" }),
        });
      });
      var h = n(52527),
        y = n.n(h),
        b = n(2570),
        x = n(25672),
        w = n(40029),
        E = n(67868),
        _ = n(70705),
        R = n.n(_);
      let C = (0, i.Pi)((e) => {
          var t;
          let { context: n, onResetClick: i, className: a } = e,
            { vibe: d, settings: v } = (0, s.oR)(),
            { formatMessage: m } = (0, c.Z)(),
            g = (0, w.BV)(d.meta),
            h = v.layout === s.t8.Mobile,
            y = n && !h;
          return (0, r.jsxs)("div", {
            className: (0, o.W)(R().root, a),
            children: [
              y &&
                (0, r.jsx)(E.RT, {
                  size: "m",
                  iconSize: "xs",
                  withScaleAnimation: !1,
                  isPinned:
                    null === (t = d.meta) || void 0 === t ? void 0 : t.isPinned,
                  onClick: g,
                  className: R().pinButton,
                }),
              (0, r.jsx)(l.Suspense, { children: (0, r.jsx)(x.Pk, {}) }),
              n &&
                (0, r.jsxs)("div", {
                  className: (0, o.W)(R().context),
                  ...(0, u.BA)(u.QM.vibe.VIBE_CONTEXT),
                  children: [
                    (0, r.jsx)(b.Caption, {
                      variant: "span",
                      type: "controls",
                      size: "m",
                      weight: "medium",
                      lineClamp: 1,
                      children: n,
                    }),
                    (0, r.jsx)(f.z, {
                      className: R().resetButton,
                      variant: "text",
                      radius: "round",
                      withRipple: !1,
                      icon: (0, r.jsx)(p.J, { variant: "close", size: "xxs" }),
                      onClick: i,
                      "aria-label": ""
                        .concat(m({ id: "vibe-actions.reset-settings" }), " ")
                        .concat(n),
                      ...(0, u.BA)(u.QM.vibe.RESET_VIBE_CONTEXT_BUTTON),
                    }),
                  ],
                }),
            ],
          });
        }),
        k = (0, i.Pi)((e) => {
          var t, n, i;
          let { className: c } = e,
            { vibe: d, experiments: f } = (0, s.oR)(),
            { pageId: p } = (0, s.lV)(),
            { blockIdForFrom: v } = (0, s.qY)(),
            {
              isVibeContext: m,
              isPlaying: h,
              togglePlay: b,
              resetSettings: x,
            } = (0, s.Qh)({
              seeds:
                null !==
                  (i =
                    null === (t = d.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== i
                  ? i
                  : [],
              pageIdForFrom: p,
              blockIdForFrom: v,
            }),
            w = f.checkExperiment(s.pe.WebNextDisableVibeSettings, "on");
          d.getLastLoadingState === s.Gu.IDLE && (0, l.use)(d.getLastVibe());
          let E = (0, l.useCallback)(() => {
            m ? x() : d.vibeResetLoadingState !== s.Gu.PENDING && d.vibeReset();
          }, [m, d, x]);
          return (
            (0, l.useEffect)(
              () => () => {
                d.reset();
              },
              [d],
            ),
            (0, r.jsxs)("div", {
              className: (0, o.W)(y().root, c),
              ...(0, u.BA)(u.QM.vibe.VIBE_BLOCK),
              children: [
                (0, r.jsx)(a.iX, { className: y().vibeAnimation }),
                (0, r.jsxs)("div", {
                  className: y().controls,
                  children: [
                    (0, r.jsx)(g, { isPlaying: h, onClick: b }),
                    !w &&
                      (0, r.jsx)(C, {
                        className: y().settingsButton,
                        context:
                          null === (n = d.meta) || void 0 === n
                            ? void 0
                            : n.context,
                        onResetClick: E,
                      }),
                  ],
                }),
              ],
            })
          );
        });
      var S = n(42288),
        O = n(69869);
      let L = S.V5.model("VibeActions", {
        meta: S.V5.maybeNull(w.KW),
        applyingSetting: S.V5.maybeNull(S.V5.string),
        isLoading: S.V5.boolean,
        getLastLoadingState: S.V5.enumeration(Object.values(s.Gu)),
        vibeResetLoadingState: S.V5.enumeration(Object.values(s.Gu)),
      })
        .views((e) => ({
          get isMyVibe() {
            return (
              e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === s.sH
            );
          },
        }))
        .actions((e) => ({
          getLastVibe: (0, S.ls)(function* () {
            let { rotorResource: t, modelActionsLogger: n } = (0, S.dU)(e);
            if (e.getLastLoadingState !== s.Gu.PENDING)
              try {
                e.getLastLoadingState = s.Gu.PENDING;
                let n = yield t.waveLast();
                (e.meta = (0, w.xF)(n)), (e.getLastLoadingState = s.Gu.RESOLVE);
              } catch (t) {
                n.error(t), (e.getLastLoadingState = s.Gu.REJECT);
              }
          }),
          vibeReset: (0, S.ls)(function* () {
            let { rotorResource: t, modelActionsLogger: n } = (0, S.dU)(e);
            if (e.vibeResetLoadingState !== s.Gu.PENDING)
              try {
                (e.vibeResetLoadingState = s.Gu.PENDING),
                  (yield t.waveLastReset()) === O.NE.OK &&
                    (e.meta = (0, w.xF)({
                      name: "",
                      seeds: [s.sH],
                      stationId: s.sH,
                      idForFrom: s.sH,
                    })),
                  (e.vibeResetLoadingState = s.Gu.RESOLVE);
              } catch (t) {
                n.error(t), (e.vibeResetLoadingState = s.Gu.REJECT);
              }
          }),
          setApplyingSetting(t) {
            t ? (e.applyingSetting = (0, S.pj)(t)) : (e.applyingSetting = null);
          },
          setIsLoading(t) {
            e.isLoading = t;
          },
          setVibe(t) {
            e.meta = (0, w.xF)(t);
          },
          reset() {
            (e.meta = null),
              (e.vibeResetLoadingState = s.Gu.IDLE),
              (e.getLastLoadingState = s.Gu.IDLE);
          },
        }));
    },
    8544: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    6582: function (e) {
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
    84814: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    1673: function (e) {
      e.exports = {
        root: "RestrictionBlock_root__P_g9o",
        restrictions: "RestrictionBlock_restrictions__BhR_r",
      };
    },
    29715: function (e) {
      e.exports = {
        button: "RestrictionButton_button__eLMkU",
        button_selected: "RestrictionButton_button_selected__LHD20",
        button_applying: "RestrictionButton_button_applying___ik5f",
        "applying-setting": "RestrictionButton_applying-setting__utqyc",
        diversityButton: "RestrictionButton_diversityButton__uclSi",
        moodEnergy: "RestrictionButton_moodEnergy__q_I4y",
        moodEnergyButton: "RestrictionButton_moodEnergyButton__yKkaS",
        textButton: "RestrictionButton_textButton__HC_AE",
        title: "RestrictionButton_title__UZn0O",
        specialButton: "RestrictionButton_specialButton__Di6B9",
        specialImage: "RestrictionButton_specialImage__0E3x2",
        rippleContainer: "RestrictionButton_rippleContainer__xPANO",
        ripple: "RestrictionButton_ripple__Rsu8b",
      };
    },
    33562: function (e) {
      e.exports = {
        root: "VibeSettingsBlock_root__t8Hp_",
        popover: "VibeSettingsBlock_popover__ogu17",
        overlay: "VibeSettingsBlock_overlay__5jAS5",
        toggleSettingsButton: "VibeSettingsBlock_toggleSettingsButton__g9rTZ",
        header: "VibeSettingsBlock_header__Ww2RA",
        actions: "VibeSettingsBlock_actions__JEc14",
        settings: "VibeSettingsBlock_settings__0Kluc",
        diversity: "VibeSettingsBlock_diversity__tU1OY",
        moodEnergy: "VibeSettingsBlock_moodEnergy__OJ0wF",
        contextItems: "VibeSettingsBlock_contextItems__kTvUX",
        ripple: "VibeSettingsBlock_ripple__jaJ8q",
      };
    },
    60966: function (e) {
      e.exports = {
        content: "MainPage_content__kskSM",
        root: "MainPage_root__STXqc",
        container: "MainPage_container__CB86l",
        vibe: "MainPage_vibe__XEBbh",
        landing: "MainPage_landing___FGNm",
        header: "MainPage_header__lPh0v",
        beta: "MainPage_beta__y32vb",
        footer: "MainPage_footer__2rGy2",
        error: "MainPage_error__u_UCm",
      };
    },
    60299: function (e) {
      e.exports = {
        root: "PlayButton_root__nYKdN",
        root_isLoading: "PlayButton_root_isLoading__925Sa",
        "applying-setting": "PlayButton_applying-setting__3nbT9",
        icon: "PlayButton_icon__t_THQ",
        icon_pauseVibe: "PlayButton_icon_pauseVibe__Ogg_U",
        icon_playVibe: "PlayButton_icon_playVibe__BKPRh",
      };
    },
    52527: function (e) {
      e.exports = {
        root: "VibeBlock_root__z7LtR",
        vibeAnimation: "VibeBlock_vibeAnimation__XVEE6",
        controls: "VibeBlock_controls__BpDFL",
        settingsButton: "VibeBlock_settingsButton__GeMtO",
      };
    },
    70705: function (e) {
      e.exports = {
        root: "VibeContext_root__dbiNv",
        context: "VibeContext_context__Z_82k",
        pinButton: "VibeContext_pinButton__b6SNF",
        resetButton: "VibeContext_resetButton__9KK4S",
      };
    },
  },
]);
