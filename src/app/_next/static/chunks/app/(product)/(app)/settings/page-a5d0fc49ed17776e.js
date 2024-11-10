(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3555],
  {
    42830: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 37746));
    },
    60424: function (e, t, i) {
      "use strict";
      i.d(t, {
        I7: function () {
          return p;
        },
        b4: function () {
          return m;
        },
        at: function () {
          return o;
        },
      }),
        i(66414);
      var n = i(98639),
        s = i(76873);
      let o = (e, t) => (
        (0, s.uK4)().get(s.Xt8),
        [
          (0, n.useMemo)(() => {
            if (void 0 === t) return {};
            let i = t - 17;
            return {
              "--average-color-background": e,
              transform: "translateY(".concat(t >= 17 ? 0 : i, "px)"),
              opacity: 1,
            };
          }, [t, !1, e]),
          (0, n.useMemo)(() => ({ "--average-color-background": e }), [e]),
        ]
      );
      var l = i(9753),
        a = i(9544),
        r = i(22890),
        c = i(3084);
      let d = (e) => {
          let { element: t, scrollTop: i, isMobile: n } = e,
            s = 0.4 * t.clientHeight;
          return i + (n ? 56 : 72) >= t.offsetTop + s;
        },
        p = (0, a.Pi)((e) => {
          let {
              children: t,
              scrollElement: i,
              outerTitle: o = "",
              headerElement: a,
              headerThreshold: p,
            } = e,
            [m, u] = (0, n.useState)(o),
            [_, x] = (0, n.useState)(null),
            [h, g] = (0, n.useState)(!1),
            [j, C] = (0, n.useState)(!1),
            { settings: v } = (0, s.oR4)(),
            N = v.layout === s.t8m.Mobile;
          (0, n.useLayoutEffect)(() => {
            u(o);
          }, [o]);
          let f = (0, n.useCallback)(() => {
            if (!i) return;
            let e = null != p ? p : 10,
              t = a ? Number(a.offsetTop) - e : e;
            t < 0 && (t = 0),
              C(i.scrollTop > t),
              (null == _ ? void 0 : _.current) &&
                g(
                  d({
                    element: null == _ ? void 0 : _.current,
                    scrollTop: i.scrollTop,
                    isMobile: N,
                  }),
                );
          }, [i, p, a, _, N]);
          (0, n.useEffect)(() => {
            (i && (null == i ? void 0 : i.scrollTop) !== 0) || C(!1);
          }, [i, null == i ? void 0 : i.scrollTop]),
            (0, r.v)({ onScroll: f, elementRef: i });
          let b = (0, n.useMemo)(
            () => ({
              title: m,
              setTitle: u,
              titleElement: _,
              scrollElement: i,
              setTitleElement: x,
              isScrolledTitle: h,
              isScrolling: j,
            }),
            [m, h, _, i, j],
          );
          return (0, l.jsx)(c.pI.Provider, { value: b, children: t });
        }),
        m = (e) => {
          let { children: t, title: i, className: s } = e,
            { setTitleElement: o, setTitle: a } = (0, n.useContext)(c.pI),
            r = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              (null == r ? void 0 : r.current) && o(r), i && a(i);
            }, [r, i, o, a]),
            (0, n.useEffect)(
              () => () => {
                a("");
              },
              [a],
            ),
            (0, l.jsx)("div", { ref: r, className: s, children: t })
          );
        };
    },
    37746: function (e, t, i) {
      "use strict";
      i.d(t, {
        SettingsPage: function () {
          return U;
        },
      });
      var n = i(9753),
        s = i(9544),
        o = i(80542),
        l = i(31014),
        a = i(23881),
        r = i(41055),
        c = i(2570),
        d = i(98639),
        p = i(10063),
        m = i(76873),
        u = i(3084);
      let _ = () => {
        let e = (0, m.uK4)().get(m.U5t),
          t = (0, m.yyu)(e.oldWebHost),
          { language: i } = (0, m.ZSk)();
        return "https://".concat(t, "/newimport?lang=").concat(i);
      };
      var x = i(89352),
        h = i(62946),
        g = i.n(h);
      let j = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          {
            location: t,
            modals: { aboutAppModal: i },
          } = (0, m.oR4)(),
          s = (0, m.bop)(),
          a = (0, m.aMu)(),
          { language: r } = (0, m.ZSk)();
        return (0, n.jsxs)(x.u, {
          className: g().root,
          headerClassName: g().modalHeader,
          contentClassName: g().modalContent,
          title: e({ id: "settings.about-app" }),
          open: i.isOpened,
          onOpenChange: i.onOpenChange,
          onClose: i.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: [
            (0, n.jsxs)("ul", {
              className: g().list,
              children: [
                (0, n.jsx)("li", {
                  className: g().item,
                  children: (0, n.jsx)(u.rU, {
                    className: g().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(
                        t.tld,
                        "/support/music/performers-and-copyright-holders.html?lang=",
                      )
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, {
                        id: "footer.links-copyright-holders",
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: g().item,
                  children: (0, n.jsx)(u.rU, {
                    className: g().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(t.tld, "/legal/music_mobile_agreement?lang=")
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, { id: "footer.links-terms" }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: g().item,
                  children: (0, n.jsx)(u.rU, {
                    className: g().link,
                    target: "_blank",
                    href: "https://music.yandex."
                      .concat(t.tld, "/legal/recommendations/ru/#music?lang=")
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, {
                        id: "footer.links-recommendation-rules",
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: g().item,
                  children: (0, n.jsx)(u.rU, {
                    className: g().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(t.tld, "/support/music/index.html?lang=")
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, { id: "footer.links-help" }),
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(c.Caption, {
              className: g().explicitText,
              type: "controls",
              variant: "div",
              size: "xs",
              weight: "medium",
              dangerouslySetInnerHTML: {
                __html: e({ id: "about-app.explicit-content" }),
              },
            }),
            (0, n.jsx)(c.Caption, {
              className: g().companyText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: (0, n.jsx)(l.Z, { id: "about-app.app-name" }),
            }),
            (0, n.jsx)(c.Caption, {
              className: g().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: e({ id: "desktop.app-version-short" }, { version: s }),
            }),
            (0, n.jsx)(c.Caption, {
              className: g().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: e({ id: "desktop.app-revision" }, { revision: a }),
            }),
          ],
        });
      });
      var C = i(60836),
        v = i(39513),
        N = i(28852),
        f = i(40114),
        b = i.n(f);
      let S = (e) => {
        let {
          title: t,
          description: i,
          onClick: s,
          descriptionProps: o,
          ...l
        } = e;
        return (0, n.jsx)(v.z, {
          className: (0, C.W)(b().root, b().important),
          iconContainerClassName: b().iconContainer,
          icon: (0, n.jsx)(N.Icon, {
            className: b().icon,
            size: "xs",
            variant: "arrowRight",
          }),
          iconPosition: "right",
          onClick: s,
          isBlock: !0,
          withRipple: !1,
          withHover: !1,
          variant: "text",
          size: "xs",
          ...l,
          children: (0, n.jsxs)("div", {
            className: b().content,
            children: [
              (0, n.jsx)(c.Caption, {
                className: b().title,
                variant: "div",
                size: "l",
                weight: "bold",
                lineClamp: 1,
                children: t,
              }),
              i &&
                (0, n.jsx)(c.Caption, {
                  variant: "div",
                  type: "text",
                  size: "xs",
                  weight: "medium",
                  className: b().description,
                  ...o,
                  children: i,
                }),
            ],
          }),
        });
      };
      var k = i(72433),
        T = i.n(k);
      let I = (e) => {
        let { link: t, title: i, description: s, target: o } = e;
        return (0, n.jsxs)(u.rU, {
          className: T().root,
          containerClassName: T().container,
          textClassName: T().linkText,
          icon: (0, n.jsx)(N.Icon, {
            className: T().icon,
            size: "xs",
            variant: "arrowRight",
          }),
          iconPosition: "right",
          href: t,
          ...(o ? { target: o } : {}),
          children: [
            (0, n.jsx)(c.Caption, {
              className: T().title,
              variant: "div",
              size: "l",
              weight: "bold",
              lineClamp: 1,
              children: i,
            }),
            s &&
              (0, n.jsx)(c.Caption, {
                variant: "div",
                type: "text",
                size: "xs",
                weight: "medium",
                className: T().description,
                children: s,
              }),
          ],
        });
      };
      var y = i(34065),
        z = i(88542),
        E = i.n(z);
      let L = (e) => {
        let { title: t, onChange: i, isChecked: s } = e,
          o = (0, d.useId)();
        return (0, n.jsxs)("div", {
          className: E().root,
          children: [
            (0, n.jsx)(c.Caption, {
              className: E().title,
              id: o,
              variant: "div",
              size: "l",
              weight: "bold",
              lineClamp: 1,
              "aria-hidden": !0,
              children: t,
            }),
            (0, n.jsx)(y.Z, {
              isChecked: s,
              "aria-describedby": o,
              onChange: i,
            }),
          ],
        });
      };
      var M = i(10951),
        w = i.n(M);
      let A = (0, s.Pi)(() => {
        let {
            modals: { shortcutsModal: e },
          } = (0, m.oR4)(),
          { formatMessage: t } = (0, o.Z)(),
          i = (0, d.useMemo)(() => {
            let e = (0, n.jsx)(
              c.Caption,
              {
                className: w().text,
                variant: "div",
                type: "text",
                size: "xs",
                weight: "normal",
                children: (0, n.jsx)(l.Z, { id: "shortcuts.or" }),
              },
              "or",
            );
            return m.ed$.map((t) => {
              let { shortcutsAction: i, formattedMessage: s } = t,
                o = m.ftz[i].map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: w().button,
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "text",
                        size: "xs",
                        weight: "normal",
                        children: e,
                      }),
                    },
                    t,
                  ),
                );
              return (
                o.length > 1 && o.splice(1, 0, e),
                (0, n.jsx)(
                  "li",
                  {
                    children: (0, n.jsxs)("div", {
                      className: w().content,
                      children: [
                        (0, n.jsx)(c.Caption, {
                          className: w().text,
                          variant: "div",
                          type: "text",
                          size: "xs",
                          weight: "normal",
                          children: s,
                        }),
                        (0, n.jsx)("div", {
                          className: w().buttons,
                          children: o,
                        }),
                      ],
                    }),
                  },
                  i,
                )
              );
            });
          }, []);
        return (0, n.jsx)(x.u, {
          className: w().root,
          headerClassName: w().modalHeader,
          contentClassName: w().modalContent,
          title: t({ id: "settings.shortcuts" }),
          open: e.isOpened,
          onOpenChange: e.onOpenChange,
          onClose: e.close,
          size: "fitContent",
          placement: "center",
          labelClose: t({ id: "interface-actions.close" }),
          children: (0, n.jsx)("ul", { className: w().list, children: i }),
        });
      });
      var P = i(4343),
        B = i.n(P);
      let R = (0, s.Pi)(() => {
        let e = (0, m.bop)(),
          {
            modals: { shortcutsModal: t, aboutAppModal: i },
            equalizer: s,
            experiments: l,
            wizard: r,
            user: c,
          } = (0, m.oR4)(),
          { notify: x } = (0, m.d$W)(),
          { formatMessage: h } = (0, o.Z)(),
          g = (0, m.jpI)(),
          C = (0, m.XNW)(),
          v = _(),
          N =
            l.checkExperiment(m.peG.WebNextEqualizer, "on") &&
            (null == g ? void 0 : g.equalizer),
          f = l.checkExperiment(m.peG.WebNextKids, "on"),
          b = s.isEnabled
            ? h({ id: "equalizer.enabled" })
            : h({ id: "equalizer.disabled" }),
          k = (0, d.useMemo)(
            () => h({ id: "desktop.app-version-short" }, { version: e }),
            [!0, h, e],
          ),
          T = (0, d.useMemo)(
            () =>
              l.checkExperiment(m.peG.WebNextWizard, "on")
                ? (0, n.jsx)(S, {
                    title: h({ id: "settings.preferences" }),
                    description: h({ id: "settings.preferences-description" }),
                    onClick: r.modal.open,
                  })
                : (0, n.jsx)(I, {
                    title: h({ id: "settings.preferences" }),
                    description: h({ id: "settings.preferences-description" }),
                    link: C,
                    target: "_self",
                  }),
            [l, h, r, C, !0],
          ),
          y = (0, d.useCallback)(
            async (e) => {
              (await c.setSettings({ isChildModeEnabled: e })) ===
                m.SLo.ERROR &&
                x(
                  (0, n.jsx)(u.Q, {
                    error: h({ id: "settings.failed-to-change-child-mode" }),
                  }),
                  { containerId: m.W$x.ERROR },
                );
            },
            [c, h, x],
          ),
          onDevtoolsToggle = (0, d.useCallback)(async (e) => {
            console.log("devtools toggled. Value: ", e);
            window.nativeSettings.set("enableDevTools", e);
          }, []),
          onAutoUpdatesToggle = (0, d.useCallback)(async (e) => {
            console.log("auto updates toggled. Value: ", e);
            window.nativeSettings.set("enableAutoUpdates", e);
          }, []);
        return (0, n.jsxs)("ul", {
          className: B().root,
          ...(0, a.BA)(a.QM.settings.SETTINGS_LIST),
          children: [
            (0, n.jsx)("li", { className: B().item, children: T }),
            N &&
              (0, n.jsxs)("li", {
                className: B().item,
                children: [
                  (0, n.jsx)(S, {
                    title: h({ id: "equalizer.title" }),
                    description: b,
                    onClick: s.modal.open,
                    descriptionProps: (0, a.BA)(
                      a.QM.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION,
                    ),
                    ...(0, a.BA)(a.QM.settings.SETTINGS_EQUALIZER_BUTTON),
                  }),
                  (0, n.jsx)(p.Qk, {}),
                ],
              }),
            (0, n.jsx)("li", {
              className: B().item,
              children: (0, n.jsx)(I, {
                title: h({ id: "settings.import-media" }),
                description: h({ id: "settings.import-media-description" }),
                link: v,
              }),
            }),
            (0, n.jsxs)("li", {
              className: B().item,
              children: [
                (0, n.jsx)(S, {
                  title: h({ id: "settings.shortcuts" }),
                  onClick: t.open,
                }),
                (0, n.jsx)(A, {}),
              ],
            }),
            k &&
              (0, n.jsxs)("li", {
                className: B().item,
                children: [
                  (0, n.jsx)(S, {
                    title: h({ id: "settings.about-app" }),
                    description: k,
                    onClick: i.open,
                  }),
                  (0, n.jsx)(j, {}),
                ],
              }),
            f &&
              (0, n.jsx)("li", {
                className: B().item,
                children: (0, n.jsx)(L, {
                  title: h({ id: "settings.show-child-section" }),
                  onChange: y,
                  isChecked: c.settings.isChildModeEnabled,
                }),
              }),
            (0, n.jsx)("li", {
              className: B().item,
              children: (0, n.jsx)(L, {
                title: "Режим разработчика",
                onChange: onDevtoolsToggle,
                isChecked: window.nativeSettings.get("enableDevTools"),
              }),
            }),
            (0, n.jsx)("li", {
              className: B().item,
              children: (0, n.jsx)(L, {
                title: "Авто обновления",
                onChange: onAutoUpdatesToggle,
                isChecked: window.nativeSettings.get("enableAutoUpdates"),
              }),
            }),
          ],
        });
      });
      var Z = i(60424),
        H = i(66995),
        O = i.n(H);
      let U = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          { contentScrollRef: t, setContentScrollRef: i } = (0, m.$Y6)(),
          s = (0, m.k67)();
        return (0, n.jsxs)(Z.I7, {
          scrollElement: t,
          outerTitle: e({ id: "page.settings" }),
          children: [
            (0, n.jsx)(u.h4, {
              variant: "text",
              withForwardControl: !1,
              withBackwardControl: s.canBack,
              children: (0, n.jsx)(c.Heading, {
                variant: "h2",
                weight: "bold",
                size: "xl",
                lineClamp: 1,
                children: (0, n.jsx)(l.Z, { id: "page.settings" }),
              }),
            }),
            (0, n.jsx)(r.t, {
              ref: i,
              className: O().root,
              containerClassName: O().scrollableContainer,
              ...(0, a.BA)(a.Br.settings.SETTINGS_PAGE),
              children: (0, n.jsxs)("div", {
                className: O().container,
                children: [
                  (0, n.jsx)("div", {
                    className: O().content,
                    children: (0, n.jsx)(R, {}),
                  }),
                  (0, n.jsx)(u.$_, { className: O().footer }),
                ],
              }),
            }),
          ],
        });
      });
    },
    66995: function (e) {
      e.exports = {
        root: "SettingsPage_root__BB4lC",
        scrollableContainer: "SettingsPage_scrollableContainer__qD32i",
        container: "SettingsPage_container__bIwea",
        content: "SettingsPage_content__cR6Ra",
        footer: "SettingsPage_footer__QIqyx",
      };
    },
    62946: function (e) {
      e.exports = {
        root: "AboutAppModal_root__yBvgU",
        modalHeader: "AboutAppModal_modalHeader__q1NPj",
        modalContent: "AboutAppModal_modalContent__SHO_X",
        list: "AboutAppModal_list__HfB82",
        link: "AboutAppModal_link__i3P3P",
        explicitText: "AboutAppModal_explicitText__29HUD",
        companyText: "AboutAppModal_companyText__yroW0",
        versionText: "AboutAppModal_versionText__iFb8L",
      };
    },
    4343: function (e) {
      e.exports = {
        root: "Settings_root__FVVrn",
        item: "Settings_item__Ksa9h",
      };
    },
    40114: function (e) {
      e.exports = {
        icon: "SettingsListButtonItem_icon__WULZ1",
        root: "SettingsListButtonItem_root__3dtV2",
        important: "SettingsListButtonItem_important__AcEon",
        iconContainer: "SettingsListButtonItem_iconContainer__KECtv",
        content: "SettingsListButtonItem_content___Opuo",
        title: "SettingsListButtonItem_title__npCza",
        description: "SettingsListButtonItem_description__g8_Ba",
      };
    },
    72433: function (e) {
      e.exports = {
        icon: "SettingsListLinkItem_icon__p4P_V",
        root: "SettingsListLinkItem_root__rTPC9",
        container: "SettingsListLinkItem_container__k7bhS",
        linkText: "SettingsListLinkItem_linkText__0PHlQ",
        title: "SettingsListLinkItem_title__duJnL",
        description: "SettingsListLinkItem_description__xWeAD",
      };
    },
    88542: function (e) {
      e.exports = {
        root: "SettingsListToggleItem_root__yEEYT",
        title: "SettingsListToggleItem_title__Xz8_Q",
      };
    },
    10951: function (e) {
      e.exports = {
        root: "ShortcutsModal_root__ro7m4",
        modalHeader: "ShortcutsModal_modalHeader__IYJ9m",
        modalContent: "ShortcutsModal_modalContent__SCpYX",
        list: "ShortcutsModal_list__eS4ox",
        text: "ShortcutsModal_text__5JJ0j",
        content: "ShortcutsModal_content__Li9Ip",
        buttons: "ShortcutsModal_buttons__o_xlC",
        button: "ShortcutsModal_button__cTIee",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        6020, 2725, 2365, 7784, 616, 2498, 5453, 7873, 3617, 2371, 3084, 4702,
        2890, 1055, 63, 2171, 361, 1744,
      ],
      function () {
        return e((e.s = 42830));
      },
    ),
      (_N_E = e.O());
  },
]);
