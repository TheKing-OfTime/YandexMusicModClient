(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [788],
  {
    49686: function (e, t, i) {
      "use strict";
      i.d(t, {
        kI: function () {
          return y;
        },
        HD: function () {
          return l;
        },
        XX: function () {
          return h;
        },
      });
      var a = i(42288),
        n = i(59131);
      let r = a.V5.model("CommunicationButtonAction", {
          id: a.V5.maybeNull(a.V5.string),
          type: a.V5.maybeNull(a.V5.enumeration(Object.values(n.sy))),
          value: a.V5.maybeNull(a.V5.string),
        }),
        l = a.V5.model("CommunicationButton", {
          text: a.V5.maybeNull(a.V5.string),
          color: a.V5.maybeNull(a.V5.enumeration(Object.values(n.rp))),
          action: a.V5.maybeNull(r),
          textColor: a.V5.maybeNull(a.V5.string),
        });
      var o = i(9753),
        s = i(60836),
        c = i(9544),
        d = i(98639),
        u = i(39513),
        _ = i(2570),
        m = i(44367),
        p = i(91147),
        v = i.n(p);
      let y = (0, c.Pi)((e) => {
          var t;
          let {
              anchorId: i,
              screenId: a,
              button: r,
              buttonSize: l,
              buttonClassName: c,
              textClassName: p,
              hide: y,
            } = e,
            { communication: x } = (0, m.oR)(),
            h =
              ((null === (t = r.action) || void 0 === t ? void 0 : t.type) ===
                n.sy.LINK &&
                r.action.value) ||
              "",
            { isExternalLink: C } = (0, m.zB)(h),
            b = (0, m.s0)(h),
            f = (0, d.useCallback)(() => {
              if (r.action)
                switch (
                  (i && a && r.action.id && x.action(i, a, r.action.id),
                  r.action.type)
                ) {
                  case n.sy.LINK:
                    r.action.value && b(), C || null == y || y();
                    return;
                  case n.sy.CLOSE:
                    null == y || y();
                    return;
                }
            }, [i, a, x, r.action, y, b, C]),
            g = (0, d.useMemo)(() => {
              if (r.textColor) return { color: r.textColor };
            }, [r.textColor]);
          return (0, o.jsx)(u.z, {
            className: (0, s.W)(v().root, v()["root_".concat(r.color)], c),
            role: h ? "link" : "button",
            color: r.color ? r.color : void 0,
            radius: "xxxl",
            onClick: f,
            size: l,
            children: (0, o.jsx)(_.Caption, {
              className: (0, s.W)(v().text, p),
              variant: "div",
              type: "text",
              size: "m",
              style: g,
              children: r.text,
            }),
          });
        }),
        x = (e) => {
          let { id: t, type: i, value: n } = e;
          return (0, a.pj)({
            id: t || null,
            type: i || null,
            value: n || null,
          });
        },
        h = (e) => {
          let { text: t, textColor: i, color: n, action: r } = e;
          return (0, a.pj)({
            text: t || null,
            textColor: i || null,
            color: n || null,
            action: r && x(r),
          });
        };
    },
    80757: function (e, t, i) {
      "use strict";
      i.d(t, {
        On: function () {
          return y;
        },
        Xv: function () {
          return b;
        },
        ho: function () {
          return l;
        },
      });
      var a = i(42288),
        n = i(49686);
      let r = (e) => {
          let {
            bgUrl: t,
            bgColor: i,
            title: r,
            text: l,
            titleColor: o,
            textColor: s,
            imageUrl: c,
            buttons: d,
          } = e;
          return (0, a.pj)({
            bgUrl: t || null,
            bgColor: i || null,
            title: r || null,
            text: l || null,
            titleColor: o || null,
            textColor: s || null,
            imageUrl: c || null,
            buttons: d.filter((e) => e.text).map(n.XX),
          });
        },
        l = (e) =>
          (0, a.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: r(e.div),
          });
      var o = i(9753),
        s = i(60836),
        c = i(9544),
        d = i(98639),
        u = i(80542),
        _ = i(86939),
        m = i(2570),
        p = i(4688),
        v = i.n(p);
      let y = (0, c.Pi)((e) => {
        var t, i, a, r;
        let { className: l, barBelow: c } = e,
          { formatMessage: p } = (0, u.Z)(),
          y = (0, d.useMemo)(() => {
            let e = { title: {}, text: {}, bg: {} };
            if (!c.barBelowItem) return e;
            let {
              titleColor: t,
              textColor: i,
              bgColor: a,
              bgUrl: n,
            } = c.barBelowItem.content;
            return (
              t && (e.title.color = t),
              i && (e.text.color = i),
              a && (e.bg.backgroundColor = a),
              n &&
                (e.bg.backgroundImage = 'url("'.concat(
                  c.barBelowItem.content.bgUrl,
                  '")',
                )),
              e
            );
          }, [c]),
          x = (0, d.useMemo)(() => {
            var e;
            return null === (e = c.barBelowItem) || void 0 === e
              ? void 0
              : e.content.buttons.map((e) => {
                  var t, i;
                  return (0, o.jsx)(
                    n.kI,
                    {
                      anchorId:
                        null === (t = c.barBelowItem) || void 0 === t
                          ? void 0
                          : t.anchorId,
                      screenId:
                        null === (i = c.barBelowItem) || void 0 === i
                          ? void 0
                          : i.screenId,
                      button: e,
                      buttonSize: "l",
                      hide: c.hide,
                    },
                    e.text,
                  );
                });
          }, [c]),
          h = (0, d.useCallback)(
            (e) => {
              e.animationName.includes("show")
                ? c.setAnimationAlreadyBeenShown()
                : e.animationName.includes("hide") &&
                  c.setAnimationAlreadyBeenHidden();
            },
            [c],
          ),
          C = (0, d.useCallback)(
            (e) => {
              e.animationName.includes("show") &&
                c.setAnimationAlreadyBeenStarted();
            },
            [c],
          );
        return (0, o.jsxs)("section", {
          className: (0, s.W)(
            v().root,
            {
              [v().root_hidden]: !c.isVisible && !c.hideWithAnimation,
              [v().root_show]: c.showWithAnimation,
              [v().root_hide]: c.hideWithAnimation,
            },
            l,
          ),
          style: y.bg,
          onAnimationStart: C,
          onAnimationEnd: h,
          "aria-label": p({ id: "bar-below.section-name" }),
          children: [
            (null === (t = c.barBelowItem) || void 0 === t
              ? void 0
              : t.content.imageUrl) &&
              (0, o.jsx)(_.Image, {
                className: v().image,
                "aria-hidden": !0,
                src:
                  null === (i = c.barBelowItem) || void 0 === i
                    ? void 0
                    : i.content.imageUrl,
                fit: "contain",
                withAvatarReplace: !0,
                withAspectRatio: !0,
              }),
            (0, o.jsxs)("div", {
              className: v().content,
              children: [
                (null === (a = c.barBelowItem) || void 0 === a
                  ? void 0
                  : a.content.title) &&
                  (0, o.jsx)(m.Heading, {
                    className: v().title,
                    variant: "h3",
                    style: y.title,
                    lineClamp: 2,
                    children: c.barBelowItem.content.title,
                  }),
                (null === (r = c.barBelowItem) || void 0 === r
                  ? void 0
                  : r.content.text) &&
                  (0, o.jsx)(m.Heading, {
                    className: v().text,
                    variant: "h4",
                    size: "xs",
                    style: y.text,
                    lineClamp: 2,
                    children: c.barBelowItem.content.text,
                  }),
              ],
            }),
            (0, o.jsx)("div", { className: v().buttons, children: x }),
          ],
        });
      });
      var x = i(59131);
      let h = a.V5.model("BarBelowContent", {
          bgUrl: a.V5.maybeNull(a.V5.string),
          bgColor: a.V5.maybeNull(a.V5.string),
          imageUrl: a.V5.maybeNull(a.V5.string),
          title: a.V5.maybeNull(a.V5.string),
          titleColor: a.V5.maybeNull(a.V5.string),
          text: a.V5.maybeNull(a.V5.string),
          textColor: a.V5.maybeNull(a.V5.string),
          buttons: a.V5.array(n.HD),
        }),
        C = a.V5.model("BarBelow", {
          anchorId: a.V5.enumeration(Object.values(x.o1)),
          screenId: a.V5.string,
          content: h,
        }),
        b = a.V5.model("BarBelowMain", {
          anchorId: a.V5.maybe(a.V5.string),
          isVisible: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenShown: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenHidden: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenStarted: a.V5.maybe(a.V5.boolean),
          list: a.V5.array(C),
        })
          .views((e) => ({
            get barBelowItem() {
              return e.list.find((t) => t.anchorId === e.anchorId);
            },
            get showWithAnimation() {
              return !e.hasAnimationAlreadyBeenShown && e.isVisible;
            },
            get hideWithAnimation() {
              return (
                e.hasAnimationAlreadyBeenShown &&
                !e.hasAnimationAlreadyBeenHidden &&
                !e.isVisible
              );
            },
          }))
          .actions((e) => ({
            setAnchorId(t) {
              e.anchorId = t;
            },
            show() {
              e.isVisible = !0;
            },
            hide() {
              e.isVisible = !1;
            },
            setAnimationAlreadyBeenShown() {
              e.hasAnimationAlreadyBeenShown = !0;
            },
            setAnimationAlreadyBeenHidden() {
              e.hasAnimationAlreadyBeenHidden = !0;
            },
            setAnimationAlreadyBeenStarted() {
              e.hasAnimationAlreadyBeenStarted = !0;
            },
          }));
    },
    29569: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return y;
        },
        K: function () {
          return m;
        },
      });
      var a = i(9753),
        n = i(60836),
        r = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(23881),
        c = i(39513),
        d = i(28852),
        u = i(71230),
        _ = i(44367);
      let m = () => {
        let e = (0, _.uK)().get(_.V0),
          t = (0, _.R$)();
        return (0, l.useCallback)(
          async (i) => {
            if (0 !== i)
              e.set(_.BU.YmPlayerPrevVolume, i),
                await (null == t ? void 0 : t.setVolume(0)),
                e.set(_.BU.YmPlayerVolume, 0);
            else {
              var a;
              let i =
                null !== (a = e.get(_.BU.YmPlayerPrevVolume)) && void 0 !== a
                  ? a
                  : 1;
              e.remove(_.BU.YmPlayerPrevVolume),
                await (null == t ? void 0 : t.setVolume(i)),
                e.set(_.BU.YmPlayerVolume, i);
            }
          },
          [t, e],
        );
      };
      var p = i(95904),
        v = i.n(p);
      let y = (0, r.Pi)((e) => {
        var t, i;
        let { className: r } = e,
          { formatMessage: p } = (0, o.Z)(),
          y = (0, _.uK)(),
          x = (0, _.R$)(),
          { sonataState: h } = (0, _.oR)(),
          C = m(),
          b = y.get(_.V0),
          f =
            null !==
              (i =
                null !== (t = b.get(_.BU.YmPlayerVolume)) && void 0 !== t
                  ? t
                  : h.volume) && void 0 !== i
              ? i
              : 1,
          g = (0, l.useCallback)(
            (e) => {
              null == x || x.setVolume(e), b.set(_.BU.YmPlayerVolume, e);
            },
            [x, b],
          ),
          N = (0, l.useCallback)(async () => {
            await C(h.volume);
          }, [C, h.volume]),
          j = p(
            0 === h.volume
              ? { id: "player-actions.volume-on" }
              : { id: "player-actions.volume-off" },
          );
        return (0, a.jsxs)("div", {
          className: (0, n.W)(v().root, r),
          children: [
            (0, a.jsx)(c.z, {
              radius: "round",
              size: "xxxs",
              variant: "text",
              withRipple: !1,
              onClick: N,
              "aria-label": j,
              icon: (0, a.jsx)(d.J, {
                size: "xs",
                className: v().icon,
                variant: 0 === f ? "volumeOff" : "volume",
              }),
              className: v().button,
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            (0, a.jsx)(u.i, {
              thumbSize: "s",
              trackSize: "s",
              value: f,
              maxValue: 1,
              step: 0.01,
              onChange: g,
              "aria-label": p({ id: "player-actions.volume-control" }),
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_SLIDER),
            }),
          ],
        });
      });
    },
    69088: function (e, t, i) {
      "use strict";
      i.d(t, {
        IP: function () {
          return y;
        },
        FM: function () {
          return g;
        },
        QZ: function () {
          return S;
        },
      });
      var a = i(9753),
        n = i(60836),
        r = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(86939),
        c = i(89352),
        d = i(2570),
        u = i(49686),
        _ = i(44367),
        m = i(67868),
        p = i(29177),
        v = i.n(p);
      let y = (0, r.Pi)((e) => {
        var t, i, r;
        let { modal: p } = e,
          { formatMessage: y } = (0, o.Z)(),
          { communication: x } = (0, _.oR)(),
          h =
            null === (t = p.modalItem) || void 0 === t
              ? void 0
              : t.content.isModal,
          C = (0, l.useMemo)(() => {
            var e;
            return null === (e = p.modalItem) || void 0 === e
              ? void 0
              : e.content.buttons.map((e) => {
                  var t;
                  return (0, a.jsx)(
                    u.kI,
                    {
                      screenId:
                        null === (t = p.modalItem) || void 0 === t
                          ? void 0
                          : t.screenId,
                      anchorId: p.anchorId,
                      button: e,
                      buttonSize: "default",
                      buttonClassName: v().button,
                      textClassName: v().buttonText,
                      hide: p.close,
                    },
                    e.text,
                  );
                });
          }, [p]),
          b = (0, l.useMemo)(() => {
            let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
            if (!p.modalItem) return e;
            let {
              bgUrl: t,
              bgUrlLarge: i,
              bgColor: a,
              titleColor: n,
              textColor: r,
              disclaimerColor: l,
            } = p.modalItem.content;
            return (
              t && (e.bg["--bg-url"] = 'url("'.concat(t, '")')),
              i && (e.bg["--bg-url-large"] = 'url("'.concat(i, '")')),
              a && (e.bg.backgroundColor = a),
              n && (e.title.color = n),
              r && (e.text.color = r),
              l && (e.disclaimer.color = l),
              e
            );
          }, [p]),
          f = (0, l.useCallback)(() => {
            p.modalItem &&
              p.modalItem.content.closeActionId &&
              x.action(
                p.modalItem.anchorId,
                p.modalItem.screenId,
                p.modalItem.content.closeActionId,
              ),
              p.close();
          }, [p, x]),
          g = (0, l.useMemo)(() => {
            var e;
            if (
              null === (e = p.modalItem) || void 0 === e
                ? void 0
                : e.content.logoUrl
            )
              return (0, a.jsx)(s.Image, {
                className: v().image,
                withAvatarReplace: !0,
                withFallback: !1,
                src: p.modalItem.content.logoUrl,
                withAspectRatio: !0,
                size: 400,
                fit: "cover",
              });
          }, [p]),
          N = (0, l.useMemo)(() => {
            var e;
            return (
              (null === (e = p.modalItem) || void 0 === e
                ? void 0
                : e.content.disclaimer) &&
              (0, _.g7)(p.modalItem.content.disclaimer, m.rU, {
                className: v().disclaimerLink,
                style: b.disclaimer,
                target: "_blank",
              })
            );
          }, [p, b]);
        return (0, a.jsx)(c.u, {
          style: b.bg,
          className: (0, n.W)(
            v().root,
            h ? v().root_modal : v().root_fullscreen,
          ),
          headerClassName: v().modalHeader,
          contentClassName: v().modalContent,
          header:
            g &&
            (0, a.jsx)("div", {
              className: (0, n.W)(v().imageWrapper, v().imageWrapper_header),
              children: g,
            }),
          open: p.isOpened,
          onOpenChange: p.onOpenChange,
          onClose: f,
          closeOnOutsidePress: !1,
          size: h ? "fitContent" : "fullscreen",
          placement: "center",
          labelClose: y({ id: "interface-actions.close" }),
          children: (0, a.jsxs)("div", {
            className: v().container,
            children: [
              (0, a.jsxs)("div", {
                className: v().wrapper,
                children: [
                  g &&
                    (0, a.jsx)("div", {
                      className: (0, n.W)(
                        v().imageWrapper,
                        v().imageWrapper_content,
                      ),
                      children: g,
                    }),
                  (null === (i = p.modalItem) || void 0 === i
                    ? void 0
                    : i.content.title) &&
                    (0, a.jsx)(d.Heading, {
                      className: v().title,
                      style: b.title,
                      size: "xl",
                      weight: "black",
                      variant: "h1",
                      lineClamp: 3,
                      children: p.modalItem.content.title,
                    }),
                  (null === (r = p.modalItem) || void 0 === r
                    ? void 0
                    : r.content.text) &&
                    (0, a.jsx)(d.Heading, {
                      className: v().text,
                      style: b.text,
                      size: "xs",
                      variant: "h2",
                      lineClamp: 4,
                      children: p.modalItem.content.text,
                    }),
                  (0, a.jsx)("div", { className: v().buttons, children: C }),
                ],
              }),
              (0, a.jsx)("div", {
                className: v().disclaimerWrapper,
                children: (0, a.jsx)(d.Caption, {
                  className: v().disclaimer,
                  style: b.disclaimer,
                  type: "text",
                  variant: "div",
                  size: "xs",
                  weight: "medium",
                  children: N,
                }),
              }),
            ],
          }),
        });
      });
      var x = i(42288),
        h = i(59131),
        C = i(73490);
      let b = x.V5.model("CommunicationModalContentModel", {
          isModal: x.V5.boolean,
          closeActionId: x.V5.maybeNull(x.V5.string),
          bgUrl: x.V5.maybeNull(x.V5.string),
          bgUrlLarge: x.V5.maybeNull(x.V5.string),
          bgColor: x.V5.maybeNull(x.V5.string),
          logoUrl: x.V5.maybeNull(x.V5.string),
          title: x.V5.maybeNull(x.V5.string),
          titleColor: x.V5.maybeNull(x.V5.string),
          text: x.V5.maybeNull(x.V5.string),
          textColor: x.V5.maybeNull(x.V5.string),
          buttons: x.V5.array(u.HD),
          disclaimer: x.V5.maybeNull(x.V5.string),
          disclaimerColor: x.V5.maybeNull(x.V5.string),
        }),
        f = x.V5.model("CommunicationModal", {
          anchorId: x.V5.enumeration(Object.values(h.o1)),
          screenId: x.V5.string,
          content: b,
        }),
        g = C.K.props({
          anchorId: x.V5.maybe(x.V5.enumeration(Object.values(h.o1))),
          list: x.V5.array(f),
        })
          .views((e) => ({
            get modalItem() {
              return e.list.find((t) => t.anchorId === e.anchorId);
            },
          }))
          .actions((e) => ({
            setAnchorId(t) {
              e.anchorId = t;
            },
          }));
      var N = i(13177);
      let j = (e) => {
          let {
            isModal: t,
            closeActionId: i,
            bgUrl: a,
            bgUrlLarge: n,
            bgColor: r,
            logoUrl: l,
            title: o,
            text: s,
            titleColor: c,
            textColor: d,
            buttons: _,
            disclaimer: m,
            disclaimerColor: p,
          } = e;
          return (0, x.pj)({
            isModal: (0, N.sw)(t),
            closeActionId: i || null,
            bgUrl: a || null,
            bgUrlLarge: n || null,
            bgColor: r || null,
            logoUrl: l || null,
            title: o || null,
            text: s || null,
            titleColor: c || null,
            textColor: d || null,
            buttons: _.filter((e) => e.text).map(u.XX),
            disclaimer: m || null,
            disclaimerColor: p || null,
          });
        },
        S = (e) =>
          (0, x.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: j(e.div),
          });
    },
    51952: function (e, t, i) {
      "use strict";
      i.d(t, {
        wp: function () {
          return eZ;
        },
        Lc: function () {
          return e2;
        },
      });
      var a,
        n,
        r,
        l,
        o,
        s,
        c,
        d,
        u,
        _,
        m,
        p,
        v,
        y = i(9753),
        x = i(60836),
        h = i(9544),
        C = i(98639),
        b = i.t(C, 2),
        f = i(23881),
        g = i(44367),
        N = i(23897);
      let j = () => {
        let [e, t] = (0, C.useState)(!1),
          i = (0, C.useMemo)(
            () =>
              (0, N.Z)(
                () => {
                  t(window.innerWidth < 1024);
                },
                100,
                { trailing: !1 },
              ),
            [t],
          );
        return (
          (0, C.useEffect)(
            () => (
              window.addEventListener("resize", i),
              i(),
              () => {
                window.removeEventListener("resize", i);
              }
            ),
            [i],
          ),
          e && !1
        );
      };
      var S = i(31695),
        w = i.n(S),
        P = i(80542),
        L = i(31014),
        k = i(37117),
        M = i(39513),
        A = i(28852),
        B = i(29901),
        I = {
          5881: (e, t, i) => {
            function a() {
              for (var e, t, i = 0, a = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      a,
                      n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (a = e(t[i])) && (n && (n += " "), (n += a));
                      else for (i in t) t[i] && (n && (n += " "), (n += i));
                    }
                    return n;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            i.r(t), i.d(t, { clsx: () => a, default: () => n });
            let n = a;
          },
          2329: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          9948: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          8850: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "Bp1d3U6W8Nrbqi3MRQS_",
              root_direction_vertical: "hYfgO_Y8c4rrQsZJWTDZ",
              ripple: "UiZ4QyGEVzfvZ3QfQqqA",
              root_direction_horizontal: "X_Lr5kqrhzMO6kX8v92s",
              root_collapsed: "Q3gGGaIXiJ_oQTiVZBfl",
              root_variant_main: "H4trq_Zx2d9qOnQgxmxr",
              root_animate: "Kr9rXeXGlqHee2euqH0u",
              animation_width: "k8zKIZRDy6LmoaIcEpo8",
              item: "A4bDkbQHkwWNGqxO9qhW",
              item_selected: "mAd9pgMkWVX5ktCgYINQ",
              item_direction_vertical: "Xx9Tg5ugzg1pkf8Zh421",
              item_direction_horizontal: "fQVXazc9HwT3NQ8dywCh",
              iconContainer: "zpkgiiHgDpbBThy6gavq",
              textContainer: "ZrkG6gNYcr4h3hfkhyT1",
              textContainer_selected: "xENlRAFvRskKnt8LUObC",
              textContainer_direction_horizontal: "xE5fIMRnjd8oSm5BOhpI",
            };
          },
          6161: (e, t, i) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = i(810),
              n = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                r = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                l.call(t, a) && !s.hasOwnProperty(a) && (r[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === r[a] && (r[a] = t[a]);
              return {
                $$typeof: n,
                type: e,
                key: c,
                ref: d,
                props: r,
                _owner: o.current,
              };
            }
            (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          9440: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let i = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
            t.createAvatarUrl = (e, t, a) => {
              let n;
              return (
                (n =
                  "orig" === t
                    ? "orig"
                    : a
                      ? "m".concat(t, "x").concat(t)
                      : "".concat(t, "x").concat(t)),
                i(e.replace("%%", n))
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, i) {
                let a = null != i ? i : e.currentTarget,
                  n = document.createElement("span"),
                  r = Math.max(a.clientWidth, a.clientHeight),
                  l = r / 2,
                  o = a.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(o.width / 2)
                      : e.clientX - o.left,
                  c =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (n.style.width = "".concat(r, "px")),
                  (n.style.height = "".concat(r, "px")),
                  (n.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - l, "px")),
                  (n.style.top = "".concat(c - l, "px")),
                  n.classList.add(t);
                let d = a.getElementsByClassName(t)[0];
                d && d.remove(), a.insertBefore(n, a.firstChild);
              });
          },
          8216: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var a = i(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return a.createRipple;
              },
            });
            var n = i(9440);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return n.createAvatarUrl;
              },
            });
          },
          19: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Navigation = void 0);
            let n = i(9541),
              r = i(5881),
              l = i(7786),
              o = a(i(2329));
            t.Navigation = function (e) {
              let {
                className: t,
                children: i,
                collapsed: a = !1,
                direction: s = "vertical",
                ...c
              } = e;
              return (0, n.jsx)(l.NavigationProvider, {
                collapsed: a,
                direction: s,
                children: (0, n.jsx)("nav", {
                  className: (0, r.clsx)(
                    o.default.root,
                    o.default["root_direction_".concat(s)],
                    { [o.default.root_collapsed]: a },
                    t,
                  ),
                  "aria-label": c["aria-label"],
                  ...c,
                  children: i,
                }),
              });
            };
          },
          7786: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationProvider = t.NavigationContext = void 0);
            let a = i(9541),
              n = i(810);
            (t.NavigationContext = (0, n.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = (e) => {
                let { collapsed: i, direction: r, children: l } = e,
                  o = (0, n.useMemo)(
                    () => ({ collapsed: i, direction: r }),
                    [i, r],
                  );
                return (0, a.jsx)(t.NavigationContext.Provider, {
                  value: o,
                  children: l,
                });
              });
          },
          8106: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationGroup = void 0);
            let n = i(9541),
              r = i(810),
              l = i(5881),
              o = i(7786),
              s = a(i(9948));
            t.NavigationGroup = function (e) {
              let { className: t, children: i, ...a } = e,
                c = (0, r.createRef)(),
                { direction: d } = (0, r.useContext)(o.NavigationContext);
              return (0, n.jsx)("ol", {
                ref: c,
                className: (0, l.clsx)(
                  s.default.root,
                  s.default["root_direction_".concat(d)],
                  t,
                ),
                ...a,
                children: i,
              });
            };
          },
          3506: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationItem = t.NavigationItemComponent = void 0);
            let n = i(9541),
              r = i(810),
              l = i(5881),
              o = i(7786),
              s = i(8216),
              c = a(i(8850));
            function d(e) {
              let {
                  className: t = "",
                  forwardRef: i,
                  children: a,
                  selected: d = !1,
                  shownAnimation: u,
                  withRipple: _ = !1,
                  variant: m = "default",
                  ...p
                } = e,
                { collapsed: v, direction: y } = (0, r.useContext)(
                  o.NavigationContext,
                ),
                x = (0, r.useCallback)(
                  (e) => {
                    _ && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [_],
                ),
                [h, C] = r.Children.toArray(a.props.children),
                b = (0, r.useMemo)(
                  () =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: c.default.iconContainer,
                          children: h,
                        }),
                        (0, n.jsx)("div", {
                          className: (0, l.clsx)(
                            c.default.textContainer,
                            c.default["textContainer_direction_".concat(y)],
                            { [c.default.textContainer_selected]: d },
                          ),
                          children: C,
                        }),
                      ],
                    }),
                  [h, y, d, C],
                ),
                f = (0, r.cloneElement)(a, {
                  className: (0, l.clsx)(
                    c.default.item,
                    c.default["item_direction_".concat(y)],
                    {
                      [c.default.item_selected]: d,
                      [c.default["item_collapsed_".concat(y)]]: v,
                    },
                    a.props.className,
                  ),
                  children: b,
                });
              return (0, n.jsx)("li", {
                ref: i,
                className: (0, l.clsx)(
                  c.default.root,
                  c.default["root_direction_".concat(y)],
                  c.default["root_variant_".concat(m)],
                  {
                    [c.default.root_animate]: u,
                    [c.default.root_collapsed]: v,
                  },
                  t,
                ),
                "aria-current": !!d && "page",
                onClick: x,
                ...p,
                children: f,
              });
            }
            (t.NavigationItemComponent = d),
              (t.NavigationItem = (0, r.forwardRef)((e, t) =>
                (0, n.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = b;
          },
        },
        E = {};
      function T(e) {
        var t = E[e];
        if (void 0 !== t) return t.exports;
        var i = (E[e] = { exports: {} });
        return I[e].call(i.exports, i, i.exports, T), i.exports;
      }
      (T.d = (e, t) => {
        for (var i in t)
          T.o(t, i) &&
            !T.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (T.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (T.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var R = {};
      Object.defineProperty(R, "X$", { value: !0 }),
        (R.Dx = R.KB = R.W_ = void 0),
        (a = T(19)),
        Object.defineProperty(R, "W_", {
          enumerable: !0,
          get: function () {
            return a.Navigation;
          },
        }),
        (n = T(8106)),
        Object.defineProperty(R, "KB", {
          enumerable: !0,
          get: function () {
            return n.NavigationGroup;
          },
        }),
        (r = T(3506)),
        Object.defineProperty(R, "Dx", {
          enumerable: !0,
          get: function () {
            return r.NavigationItem;
          },
        });
      var V = R.W_,
        D = R.KB,
        z = R.Dx;
      R.X$;
      var W = i(5773),
        O = i(2570),
        F = i(27097),
        U = i(2959),
        G = i(67868);
      let Q = (e) => {
        let { padding: t, placement: i } = e;
        return {
          shiftOptions: { padding: t },
          offsetOptions: t,
          flipOptions: { fallbackAxisSideDirection: "start", padding: t },
          placement: i,
        };
      };
      var Z = i(1263),
        H = i(59131),
        q = i(86939),
        Y = i(12404),
        J = i(38360),
        K = i(98342),
        X = i(64638),
        $ = i.n(X);
      let ee = (e) => {
          let { children: t, entityUrl: i, ariaLabel: a } = e;
          return i
            ? (0, y.jsx)(G.rU, {
                href: i,
                "aria-label": a,
                className: $().link,
                children: t,
              })
            : t;
        },
        et = (e) => {
          let {
              className: t,
              cover: i,
              title: a,
              subtitle: n,
              contextMenu: r,
              isCollapsed: l,
              withCollapseAnimation: o,
              entityUrl: s,
              onDoubleClick: c,
              forwardRef: d,
              ariaLabel: u,
            } = e,
            _ = (0, C.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == c || c()
                  : e.target instanceof HTMLElement &&
                    "IMG" !== e.target.tagName &&
                    (0, K.m)(e, $().ripple);
              },
              [c],
            );
          return (0, y.jsxs)(G.Md, {
            ref: d,
            onClick: _,
            className: (0, x.W)($().root, { [$().root_withoutLink]: !s }, t),
            role: "listitem",
            children: [
              (0, y.jsxs)(ee, {
                entityUrl: s,
                ariaLabel: u,
                children: [
                  (0, y.jsx)("div", { className: $().cover, children: i }),
                  (0, y.jsx)("div", {
                    className: $().meta,
                    children: (0, y.jsxs)("div", {
                      className: (0, x.W)($().info, {
                        [$().info_collapsed]: l,
                        [$().info_animated]: o,
                      }),
                      children: [
                        (0, y.jsx)(O.Caption, {
                          "aria-hidden": !0,
                          className: $().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: a,
                        }),
                        (0, y.jsx)(O.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: n,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, y.jsx)("div", {
                className: (0, x.W)($().contextMenu, {
                  [$().contextMenu_hidden]: l,
                }),
                children: r,
              }),
            ],
          });
        },
        ei = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(et, { forwardRef: t, ...e }),
        ),
        ea = (0, C.createContext)(null);
      var en = i(64318),
        er = i.n(en),
        el = i(385);
      let eo = (e) => {
          let { onPinClick: t, isPinned: i } = e,
            { isCollapsed: a } = (0, C.useContext)(ea) || {},
            { formatMessage: n } = (0, P.Z)(),
            [r, l] = (0, C.useState)(!1),
            o = (0, C.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, g.ZP)(r),
            (0, y.jsx)(el.v2, {
              reference: (0, y.jsx)(M.z, {
                className: (0, x.W)(er().contextMenu, {
                  [er().contextMenu_visible]: r,
                }),
                onClick: o,
                withRipple: !1,
                variant: "text",
                "aria-label": n({ id: "interface-actions.context-menu" }),
                icon: (0, y.jsx)(A.J, { size: "xxs", variant: "more" }),
                tabIndex: a ? -1 : 0,
                "aria-hidden": a,
              }),
              offsetOptions: 10,
              open: r,
              returnFocus: !1,
              onOpenChange: l,
              children: (0, y.jsx)(G.Zd, { onClick: t, isPinned: i }),
            })
          );
        },
        es = (e) => {
          var t;
          let { className: i, album: a, forwardRef: n, tooltipOptions: r } = e,
            { formatMessage: l } = (0, P.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, J.BV)(a),
            d = (0, J.H0)(a.type),
            u = (0, C.useMemo)(
              () =>
                (0, y.jsx)(Y.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(W.u, {
                    ...r,
                    enabled: o,
                    children: [
                      (0, y.jsx)(q.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(W._v, {
                        className: er().tooltip,
                        children: (0, y.jsx)(O.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [a.coverUri, a.title, o, r],
            );
          return (0, y.jsx)(ei, {
            ref: n,
            ariaLabel: l(
              { id: "entity-names.album-name" },
              { albumName: a.title },
            ),
            className: (0, x.W)(er().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: d,
            cover: u,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
          });
        },
        ec = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(es, { forwardRef: t, ...e }),
        );
      var ed = i(33589);
      let eu = (e) => {
          var t;
          let { className: i, artist: a, forwardRef: n, tooltipOptions: r } = e,
            { formatMessage: l } = (0, P.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, ed.BV)(a),
            d = (0, C.useMemo)(
              () =>
                (0, y.jsx)(Y.Paper, {
                  className: er().cover,
                  radius: "round",
                  children: (0, y.jsxs)(W.u, {
                    ...r,
                    enabled: o,
                    children: [
                      (0, y.jsx)(q.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(W._v, {
                        className: er().tooltip,
                        children: (0, y.jsx)(O.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.name,
                        }),
                      }),
                    ],
                  }),
                }),
              [a.coverUri, a.name, o, r],
            );
          return (0, y.jsx)(ei, {
            ref: n,
            ariaLabel: l(
              { id: "entity-names.artist-name" },
              { artistName: a.name },
            ),
            className: (0, x.W)(er().root, i),
            title: a.name,
            entityUrl: a.url,
            subtitle: (0, y.jsx)(L.Z, { id: "entity-names.artist" }),
            cover: d,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
          });
        },
        e_ = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(eu, { forwardRef: t, ...e }),
        );
      var em = i(12090);
      let ep = (e) => {
          var t;
          let {
              className: i,
              playlist: a,
              forwardRef: n,
              tooltipOptions: r,
            } = e,
            { formatMessage: l } = (0, P.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, em.BV)(a),
            d = (0, C.useMemo)(
              () =>
                (0, y.jsx)(Y.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(W.u, {
                    ...r,
                    enabled: o,
                    children: [
                      (0, y.jsx)(q.Image, {
                        "aria-hidden": !0,
                        className: er().image,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(W._v, {
                        className: er().tooltip,
                        children: (0, y.jsx)(O.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [o, a.coverUri, a.title, r],
            );
          return (0, y.jsx)(ei, {
            ref: n,
            ariaLabel: l(
              { id: "entity-names.playlist-name" },
              { playlistName: a.title },
            ),
            className: (0, x.W)(er().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: (0, y.jsx)(L.Z, { id: "entity-names.playlist" }),
            cover: d,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
          });
        },
        ev = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(ep, { forwardRef: t, ...e }),
        );
      var ey = i(40029);
      let ex = (0, h.Pi)((e) => {
          var t, i;
          let { className: a, vibe: n, forwardRef: r, tooltipOptions: l } = e,
            o = (0, C.useId)(),
            { formatMessage: s } = (0, P.Z)(),
            { isCollapsed: c, withCollapseAnimation: d } =
              null !== (i = (0, C.useContext)(ea)) && void 0 !== i ? i : {},
            [u, _] = (0, C.useState)(!1),
            m = (0, ey.BV)(n),
            {
              isPlaying: p,
              togglePlay: v,
              isCurrent: h,
            } = (0, g.Qh)({
              seeds: n.seeds,
              pageIdForFrom: g.Rh.SIDEBAR,
              blockIdForFrom: g.aU.RADIO,
            }),
            b = (0, C.useCallback)(() => {
              _(!0),
                v().finally(() => {
                  _(!1);
                });
            }, [v]),
            f = (0, C.useMemo)(
              () =>
                (0, y.jsx)(O.Caption, {
                  id: o,
                  variant: "span",
                  "aria-label": s(
                    { id: "entity-names.vibe-name" },
                    { vibeName: n.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: n.title,
                }),
              [s, o, n.title],
            ),
            N = (0, C.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = n.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, y.jsxs)(W.u, {
                ...l,
                enabled: c,
                children: [
                  (0, y.jsx)("div", {
                    style: t,
                    className: er().animation,
                    children: (0, y.jsx)(G.Df, {
                      isCurrent: h,
                      isPlaying: p,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: b,
                      title: n.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: o,
                    }),
                  }),
                  (0, y.jsx)(W._v, {
                    className: er().tooltip,
                    children: (0, y.jsx)(O.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: n.title,
                    }),
                  }),
                ],
              });
            }, [
              b,
              c,
              h,
              u,
              p,
              o,
              l,
              null === (t = n.colors) || void 0 === t ? void 0 : t.average,
              n.title,
            ]);
          return (0, y.jsx)(ei, {
            ref: r,
            onDoubleClick: v,
            className: (0, x.W)(er().root, a),
            isCollapsed: !!c,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: m,
              isPinned: n.isPinned,
            }),
            withCollapseAnimation: !!d,
            title: f,
            subtitle: (0, y.jsx)(L.Z, { id: "entity-names.my-vibe" }),
            cover: N,
          });
        }),
        eh = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(ex, { forwardRef: t, ...e }),
        );
      var eC = i(8519),
        eb = i.n(eC);
      let ef = Q({ placement: "right", padding: 20 }),
        eg = (0, h.Pi)((e) => {
          var t, i;
          let { className: a, withCollapseAnimation: n, isCollapsed: r } = e,
            { formatMessage: l } = (0, P.Z)(),
            { pinsCollection: o } = (0, g.oR)(),
            s =
              null === (t = o.items) || void 0 === t
                ? void 0
                : t.map(() => (0, C.createRef)()),
            c = (0, C.useMemo)(
              () => ({
                enter: eb().pin_enter,
                enterActive: eb().pin_enter_active,
                exit: eb().pin_exit,
                exitActive: eb().pin_exit_active,
              }),
              [],
            ),
            d = (0, C.useMemo)(
              () => ({ withCollapseAnimation: n, isCollapsed: r }),
              [r, n],
            );
          return (0, y.jsx)(ea.Provider, {
            value: d,
            children: (0, y.jsx)("div", {
              className: (0, x.W)(eb().root, a),
              children: (0, y.jsx)("div", {
                role: "list",
                "aria-label": l({ id: "navigation.pins-list" }),
                className: eb().content,
                children: (0, y.jsx)(Z.Z, {
                  component: null,
                  children:
                    null === (i = o.items) || void 0 === i
                      ? void 0
                      : i.map((e, t) => {
                          switch (e.type) {
                            case H.Qm.ALBUM:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ec, {
                                    tooltipOptions: ef,
                                    ref: null == s ? void 0 : s[t],
                                    album: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case H.Qm.ARTIST:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(e_, {
                                    tooltipOptions: ef,
                                    ref: null == s ? void 0 : s[t],
                                    artist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case H.Qm.PLAYLIST:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ev, {
                                    tooltipOptions: ef,
                                    ref: null == s ? void 0 : s[t],
                                    playlist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case H.Qm.WAVE:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(eh, {
                                    tooltipOptions: ef,
                                    ref: null == s ? void 0 : s[t],
                                    vibe: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                          }
                        }),
                }),
              }),
            }),
          });
        });
      var eN = i(84691);
      function ej() {
        return (ej = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eS = function (e) {
          return eN.createElement(
            "svg",
            ej(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            eN.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              eN.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                l ||
                  (l = eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                o ||
                  (o = eN.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                s ||
                  (s = eN.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                eN.createElement(
                  "mask",
                  {
                    id: "mask0_2521_25547",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: 33,
                    y: 0,
                    width: 25,
                    height: 24,
                  },
                  c ||
                    (c = eN.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                d ||
                  (d = eN.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                u ||
                  (u = eN.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    eN.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    eN.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            _ ||
              (_ = eN.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                eN.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                eN.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            m ||
              (m = eN.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            p ||
              (p = eN.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            v ||
              (v = eN.createElement(
                "defs",
                null,
                eN.createElement(
                  "radialGradient",
                  {
                    id: "paint0_radial_2521_25547",
                    cx: 0,
                    cy: 0,
                    r: 1,
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(40.7002 3.59937) rotate(45) scale(23.7588)",
                  },
                  eN.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  eN.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                eN.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  eN.createElement("stop", { stopColor: "#FF5C4D" }),
                  eN.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  eN.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  eN.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  eN.createElement("rect", {
                    x: 17.0005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        ew = i(77314),
        eP = i.n(ew);
      let eL = (e) => {
          let { className: t, forwardRef: i } = e,
            { formatMessage: a } = (0, P.Z)();
          return (0, y.jsxs)("section", {
            className: (0, x.W)(eP().root, t),
            ref: i,
            "aria-label": a({ id: "plusbar.subscription-activation" }),
            children: [
              (0, y.jsx)(eS, { className: eP().logos, "aria-hidden": "true" }),
              (0, y.jsx)(O.Caption, {
                className: eP().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(L.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsx)(O.Caption, {
                className: eP().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, y.jsx)(L.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsxs)("div", {
                className: eP().buttons,
                children: [
                  (0, y.jsx)(M.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    color: "plus",
                    children: "30 дней бесплатно",
                  }),
                  (0, y.jsx)(M.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    children: (0, y.jsx)(L.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ek = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(eL, { forwardRef: t, ...e }),
        );
      var eM = i(3065),
        eA = i.n(eM),
        eB = i(24776),
        eI = i.n(eB);
      let eE = Q({ placement: "right", padding: 8 }),
        eT = (e) => {
          let { className: t, isCollapsed: i, withCollapseAnimation: a } = e;
          return (0, y.jsxs)(W.u, {
            ...eE,
            enabled: !0,
            children: [
              (0, y.jsxs)("div", {
                className: (0, x.W)(eI().root, t),
                children: [
                  (0, y.jsx)(O.Caption, {
                    className: eI().nda,
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    children: (0, y.jsx)(L.Z, { id: "entity-names.nda" }),
                  }),
                  (0, y.jsx)(O.Caption, {
                    className: (0, x.W)(eI().text, {
                      [eI().text_collapsed]: i,
                      [eI().text_animated]: a,
                    }),
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    lineClamp: 1,
                    children: (0, y.jsx)(L.Z, {
                      id: "warning-messages.only-for-staff",
                    }),
                  }),
                ],
              }),
              (0, y.jsx)(W._v, {
                className: eI().tooltipContent,
                children: (0, y.jsx)(L.Z, {
                  id: "warning-messages.do-not-take-screenshots",
                }),
              }),
            ],
          });
        },
        eR = {
          exit: eA().plusButtonContainer_exit,
          exitActive: eA().plusButtonContainer_exit_active,
          enter: eA().plusButtonContainer_enter,
          enterActive: eA().plusButtonContainer_enter_active,
        },
        eV = {
          exit: eA().plusBar_exit,
          exitActive: eA().plusBar_exit_active,
          enter: eA().plusBar_enter,
          enterActive: eA().plusBar_enter_active,
        },
        eD = Q({ placement: "right", padding: 8 }),
        ez = (0, h.Pi)((e) => {
          let {
              className: t,
              collapsed: i,
              shownAnimation: a,
              handleClick: n,
            } = e,
            r = j(),
            l = (0, g.hJ)(),
            { formatMessage: o } = (0, P.Z)(),
            { language: s } = (0, g.ZS)(),
            { user: c, experiments: d } = (0, g.oR)(),
            u = (0, g.V$)(d),
            _ = (0, C.useMemo)(
              () =>
                c.collectionHue
                  ? { "--logo-color": (0, F.C)(c.collectionHue) }
                  : null,
              [c.collectionHue],
            ),
            m = (0, C.useMemo)(
              () =>
                i
                  ? o({ id: "sidebar.uncollapse" })
                  : o({ id: "sidebar.collapse" }),
              [i, o],
            ),
            p = (0, C.useMemo)(
              () => ({
                search: o({ id: "navigation.search" }),
                main: o({ id: "navigation.page-main" }),
                collection: o({ id: "navigation.page-collection" }),
                non_music: o({ id: "entity-names.podcasts" }),
              }),
              [o],
            ),
            v = (0, C.useMemo)(
              () =>
                (0, y.jsx)(
                  D,
                  {
                    children: u.map((e) =>
                      (0, y.jsx)(
                        z,
                        {
                          selected: l(e.path),
                          shownAnimation: a,
                          variant: "main",
                          children: (0, y.jsxs)(G.rU, {
                            href: e.path,
                            children: [
                              (0, y.jsxs)(W.u, {
                                ...eD,
                                enabled: i,
                                children: [
                                  (0, y.jsx)(A.J, {
                                    variant: l(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, y.jsx)(W._v, {
                                    children: (0, y.jsx)(O.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: p[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsx)(O.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, x.W)({
                                  [eA().title_animate]: a,
                                  [eA().title_collapsed]: i,
                                }),
                                children: p[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  },
                  "main",
                ),
              [l, i, d, d.loadingState, a, p],
            ),
            h = (0, C.useMemo)(
              () =>
                r
                  ? null
                  : (0, C.createElement)(W.u, {
                      ...eD,
                      key: "collapseTooltip",
                      enabled: i,
                      isFocusEnabled: !1,
                      children: [
                        (0, y.jsx)(M.z, {
                          className: eA().collapseButton,
                          "aria-label": m,
                          radius: "round",
                          color: "secondary",
                          size: "xs",
                          icon: (0, y.jsx)(A.J, {
                            variant: i ? "arrowRight" : "arrowLeft",
                            size: "xxs",
                          }),
                          onClick: n,
                        }),
                        (0, y.jsx)(W._v, {
                          className: (0, x.W)({
                            [eA().collapseButtonTooltip_hidden]: !i,
                          }),
                          children: m,
                        }),
                      ],
                    }),
              [i, m, n, r],
            ),
            b = (0, C.useRef)(null),
            f = (0, C.useMemo)(
              () =>
                (0, y.jsx)(k.Z, {
                  nodeRef: b,
                  in: i,
                  timeout: 150,
                  classNames: eR,
                  unmountOnExit: !0,
                  children: (0, y.jsx)("div", {
                    className: eA().plusButtonContainer,
                    ref: b,
                    children: (0, y.jsxs)(W.u, {
                      ...eD,
                      enabled: i,
                      children: [
                        (0, y.jsx)(M.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, y.jsx)(A.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, x.W)(eA().button, eA().important),
                          "aria-label": o({
                            id: "plusbar.subscription-activation",
                          }),
                        }),
                        (0, y.jsx)(W._v, {
                          children: (0, y.jsx)(O.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, y.jsx)(L.Z, {
                              id: "plusbar.subscription-activation",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              [i, o],
            ),
            N = (0, C.useRef)(null),
            S = (0, C.useMemo)(
              () =>
                (0, y.jsx)(k.Z, {
                  nodeRef: N,
                  in: !i,
                  timeout: 150,
                  classNames: eV,
                  unmountOnExit: !0,
                  children: (0, y.jsx)(ek, {
                    className: eA().plusBar,
                    forwardRef: N,
                  }),
                }),
              [i],
            );
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eA().root, t),
            children: [
              (0, y.jsxs)("div", {
                className: eA().logoWrapper,
                children: [
                  (0, y.jsx)(G.rU, {
                    href: "/",
                    className: eA().logoLink,
                    "aria-label": o({ id: "navigation.page-main" }),
                    children: (0, y.jsx)(B.TR, {
                      style: _,
                      className: (0, x.W)(eA().logo),
                      collapsed: i,
                      shownAnimation: a,
                      lang: "ru" !== s ? B.o0.EN : B.o0.RU,
                    }),
                  }),
                  h,
                ],
              }),
              d.checkExperiment(g.pe.WebNextNDABadge, "on") &&
                (0, y.jsx)(eT, {
                  className: eA().ndaBadge,
                  isCollapsed: i,
                  withCollapseAnimation: !!a,
                }),
              (0, y.jsx)(V, {
                className: eA().navigation,
                collapsed: i,
                "aria-label": o({ id: "navigation.main-menu" }),
                children: v,
              }),
              (0, y.jsx)(eg, {
                isCollapsed: i,
                withCollapseAnimation: !!a,
                className: eA().pinsList,
              }),
              !c.hasPlus &&
                (0, y.jsxs)("div", { className: eA().plus, children: [S, f] }),
              (0, y.jsx)(C.Suspense, {
                children: (0, y.jsx)("div", {
                  className: eA().user,
                  children: (0, y.jsx)(U.Iw, {
                    metaClassName: (0, x.W)(eA().userMeta, {
                      [eA().userMeta_animate]: a,
                      [eA().userMeta_collapsed]: i,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var eW = i(73061),
        eO = i.n(eW),
        eF = i(14825),
        eU = i.n(eF);
      let eG = (e) => {
          let { className: t } = e;
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eU().root, t),
            children: [
              (0, y.jsx)(O.Caption, {
                className: eU().nda,
                variant: "span",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(L.Z, { id: "entity-names.nda" }),
              }),
              (0, y.jsx)(O.Caption, {
                className: eU().text,
                variant: "span",
                size: "m",
                weight: "normal",
                lineClamp: 1,
                children: (0, y.jsx)(L.Z, {
                  id: "warning-messages.only-for-staff",
                }),
              }),
            ],
          });
        },
        eQ = (0, h.Pi)((e) => {
          let { className: t } = e,
            i = (0, g.hJ)(),
            { experiments: a } = (0, g.oR)(),
            { formatMessage: n } = (0, P.Z)(),
            r = (0, g.V$)(a),
            l = n({ id: "navigation.main-menu" }),
            o = (0, C.useMemo)(
              () => ({
                search: n({ id: "navigation.search" }),
                main: n({ id: "navigation.page-main" }),
                collection: n({ id: "navigation.page-collection" }),
              }),
              [n],
            );
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eO().root, t),
            children: [
              a.checkExperiment(g.pe.WebNextNDABadge, "on") &&
                (0, y.jsx)(eG, { className: eO().ndaBadge }),
              (0, y.jsx)(V, {
                collapsed: !0,
                direction: "horizontal",
                "aria-label": l,
                children: (0, y.jsx)(D, {
                  children: (0, y.jsxs)(y.Fragment, {
                    children: [
                      r.map((e) =>
                        (0, y.jsx)(
                          z,
                          {
                            selected: i(e.path),
                            children: (0, y.jsxs)(G.rU, {
                              href: e.path,
                              children: [
                                (0, y.jsx)(A.J, {
                                  variant: i(e.path) ? e.iconSelected : e.icon,
                                  size: "m",
                                }),
                                (0, y.jsx)(O.Caption, {
                                  variant: "span",
                                  type: "controls",
                                  size: "m",
                                  weight: "medium",
                                  lineClamp: 1,
                                  children: o[e.id],
                                }),
                              ],
                            }),
                          },
                          e.id,
                        ),
                      ),
                      (0, y.jsx)(z, {
                        children: (0, y.jsx)(U.Iw, {
                          className: eO().user,
                          variant: "mobile",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }),
        eZ = (0, h.Pi)((e) => {
          let { className: t } = e,
            i = (0, g.uK)().get(g.V0),
            a = j(),
            { settings: n } = (0, g.oR)(),
            [r, l] = (0, C.useState)(i.get(g.BU.NavbarCollapsed) || !1),
            [o, s] = (0, C.useState)(!1),
            c = (0, C.useMemo)(
              () => (n.layout === g.t8.Mobile ? eQ : ez),
              [n.layout],
            ),
            d = (0, C.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(g.BU.NavbarCollapsed, !r, { expires: 180 }),
                  l(!r),
                  s(!0);
              },
              [r, i],
            );
          return (0, y.jsx)("aside", {
            className: (0, x.W)(w().root, { [w().root_collapsed]: r || a }, t),
            ...(0, f.BA)(f.QM.navbar.NAVBAR),
            children: (0, y.jsx)(c, {
              handleClick: d,
              collapsed: r || a,
              shownAnimation: o,
            }),
          });
        });
      var eH = i(42288);
      let eq = eH.V5.model("PinAlbumItemModel", {
          type: eH.V5.literal(H.Qm.ALBUM),
          data: J.KX,
        }),
        eY = eH.V5.model("PinArtistItemModel", {
          type: eH.V5.literal(H.Qm.ARTIST),
          data: ed.Go,
        }),
        eJ = eH.V5.model("PinPlaylistItemModel", {
          type: eH.V5.literal(H.Qm.PLAYLIST),
          data: em.Cd,
        }),
        eK = eH.V5.model("PinVibeItemModel", {
          type: eH.V5.literal(H.Qm.WAVE),
          data: ey.KW,
        }),
        eX = eH.V5.union(eq, eY, eJ, eK),
        e$ = (e) => "object" == typeof e && e && "type" in e;
      var e0 = i(93490),
        e1 = i(31579);
      let e5 = (e) => {
          switch (e.type) {
            case H.Qm.WAVE:
              return (0, eH.pj)({ type: H.Qm.WAVE, data: (0, ey.FF)(e.data) });
            case H.Qm.PLAYLIST:
              return (0, eH.pj)({
                type: H.Qm.PLAYLIST,
                data: (0, e1.RE)({ playlist: e.data }),
              });
            case H.Qm.ARTIST:
              return (0, eH.pj)({
                type: H.Qm.ARTIST,
                data: (0, ed.tR)(e.data),
              });
            case H.Qm.ALBUM:
              return (0, eH.pj)({
                type: H.Qm.ALBUM,
                data: (0, e0.cO)({ album: e.data }),
              });
          }
        },
        e2 = eH.V5.model("Pins", {
          loadingState: eH.V5.enumeration(Object.values(g.Gu)),
          items: eH.V5.maybeNull(eH.V5.array(eX)),
          index: eH.V5.map(eH.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var i;
                (e.items = (0, eH.pj)(
                  null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var i, a, n, r;
                if (
                  (null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.length) === 30
                ) {
                  let t =
                    null === (r = e.items) || void 0 === r ? void 0 : r.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (a = e.items) || void 0 === a || a.unshift(e5(t));
                let l =
                  null === (n = e.items) || void 0 === n ? void 0 : n.at(0);
                l && e.index.set(l.data.pinId, !0);
              },
              getData: (0, eH.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: i } = (0, eH.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    var a;
                    e.loadingState = g.Gu.PENDING;
                    let i = yield t.getPins();
                    (e.items = (0, eH.pj)(i.pins.map(e5))),
                      null === (a = e.items) ||
                        void 0 === a ||
                        a.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = g.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = g.Gu.REJECT), i.error(t);
                  }
              }),
              toggleAlbumPin: (0, eH.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eH.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinAlbum(i)), t.deletePin(a), r;
                    return (r = yield n.pinAlbum(i)), e$(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eH.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eH.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinArtist(i)), t.deletePin(a), r;
                    return (r = yield n.pinArtist(i)), e$(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eH.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eH.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinPlaylist(i)), t.deletePin(a), r;
                    return (
                      (r = yield n.pinPlaylist(i)), e$(r) && t.addPin(r), r
                    );
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eH.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eH.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinWave(i)), t.deletePin(a), r;
                    return (r = yield n.pinWave(i)), e$(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    93099: function (e, t, i) {
      "use strict";
      i.d(t, {
        Rt: function () {
          return ti;
        },
        Oe: function () {
          return t_;
        },
        ev: function () {
          return el;
        },
      });
      var a,
        n,
        r = i(9753),
        l = i(60836),
        o = i(9544),
        s = i(98639),
        c = i(77070),
        d = i(44367),
        u = i(12683),
        _ = i.n(u),
        m = i(80542),
        p = i(31014),
        v = i(23881),
        y = i(84338),
        x = i(39513),
        h = i(28852),
        C = i(12404),
        b = i(16636),
        f = i(5773),
        g = i(2570),
        N = i(71230),
        j = i(33060),
        S = i.n(j),
        w = i(58163),
        P = i.n(w);
      let L = (e) => {
          let { value: t, variant: i, className: a } = e,
            n =
              "start" === i
                ? v.bG.changeTimecode.TIMECODE_TIME_START
                : v.bG.changeTimecode.TIMECODE_TIME_END;
          return (0, r.jsx)(g.Caption, {
            className: (0, l.W)(P().root, P()["root_".concat(i)], a),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            ...(0, v.BA)(n),
            children: t,
          });
        },
        k = (e) => {
          let {
              className: t,
              sliderClassName: i,
              disabled: a,
              isFullscreen: n,
              isMobile: o,
              showThumbVariant: c,
              withTimecode: u = !0,
            } = e,
            _ = (0, d.R$)(),
            p = (n || !o) && u,
            y = (0, s.useRef)(!1),
            [x, h] = (0, s.useState)(0),
            [C, b] = (0, s.useState)(0),
            [f, g] = (0, s.useState)(0),
            { formatMessage: j } = (0, m.Z)(),
            w = (0, s.useCallback)(
              (e, t) => {
                (y.current = !t), t ? null == _ || _.setProgress(e) : h(e);
              },
              [_],
            );
          return (
            (0, s.useEffect)(() => {
              let e =
                null == _
                  ? void 0
                  : _.state.playerState.progress.onChange(() => {
                      let e = _.state.playerState.progress.value;
                      e.duration === 1 / 0
                        ? (b(0), h(0), g(0))
                        : (b(e.duration),
                          h((t) => (y.current ? t : e.position)),
                          g(e.loaded));
                    });
              return () => {
                null == e || e();
              };
            }, [_]),
            (0, r.jsxs)("div", {
              className: (0, l.W)(
                S().root,
                {
                  [S().root_fullscreen]: n,
                  [S().root_mobile]: o,
                  [S().root_withTimecode]: u,
                },
                t,
              ),
              ...(0, v.BA)(v.bG.changeTimecode.TIMECODE_WRAPPER),
              children: [
                p &&
                  (0, r.jsx)(L, {
                    value: (0, d.gf)(Math.round(x), Math.round(C)),
                    variant: "start",
                    className: S().timecode,
                  }),
                (0, r.jsx)(N.i, {
                  className: (0, l.W)(
                    S().slider,
                    {
                      [S()["slider_thumbSize_".concat(n || o ? "xs" : "m")]]:
                        !0,
                    },
                    i,
                  ),
                  disabled: a,
                  thumbSize: n || o ? "xs" : "s",
                  trackSize: n || o ? "xs" : "s",
                  value: Math.round(x),
                  mode: "deferred",
                  secondaryValue: Math.round(f),
                  maxValue: 0 === C ? void 0 : Math.round(C),
                  onChange: w,
                  "aria-label": j({ id: "player-actions.timecode-control" }),
                  showThumbVariant: c,
                  ...(0, v.BA)(v.bG.changeTimecode.TIMECODE_SLIDER),
                }),
                p &&
                  (0, r.jsx)(L, {
                    value: (0, d.gf)(Math.round(C), Math.round(C)),
                    variant: "end",
                    className: S().timecode,
                  }),
              ],
            })
          );
        };
      var M = i(29569),
        A = i(75191),
        B = i(75545),
        I = i(67868),
        E = i(43056),
        T = i.n(E);
      let R = (e) => {
          let { className: t, ariaLabel: i, onClick: a, forwardRef: n } = e;
          return (0, r.jsx)("div", {
            ref: n,
            className: (0, l.W)(T().root, t),
            children: (0, r.jsx)(x.z, {
              className: T().button,
              radius: "round",
              size: "s",
              color: "secondary",
              withRipple: !1,
              "aria-label": i,
              icon: (0, r.jsx)(h.J, { variant: "fullscreen", size: "xs" }),
              onClick: a,
              ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_BUTTON),
            }),
          });
        },
        V = (0, s.forwardRef)((e, t) => (0, r.jsx)(R, { forwardRef: t, ...e }));
      var D = i(76894),
        z = i(385),
        W = i(93673);
      let O = {
        [D.nJ.HQ_PLUS]: "HQ+",
        [D.nJ.HQ]: "HQ",
        [D.nJ.NQ]: "NQ",
        [D.nJ.LQ]: "LQ",
        [D.nJ.PREVIEW]: "PREVIEW",
      };
      var F = i(98776),
        U = i.n(F);
      let G = (e) => {
        let { closeToast: t, onOpenQualitySettingsMenu: i, message: a } = e,
          { formatMessage: n } = (0, m.Z)(),
          l = (0, s.useCallback)(() => {
            i(), null == t || t();
          }, [t, i]),
          o = (0, s.useMemo)(
            () =>
              (0, r.jsxs)("div", {
                className: U().message,
                children: [
                  (0, r.jsx)(g.Caption, {
                    variant: "div",
                    size: "m",
                    children: a,
                  }),
                  (0, r.jsx)(x.z, {
                    className: U().changeButton,
                    onClick: l,
                    variant: "text",
                    withRipple: !1,
                    "aria-label": n({ id: "interface-actions.change" }),
                    children: (0, r.jsx)(g.Caption, {
                      variant: "div",
                      size: "m",
                      children: (0, r.jsx)(p.Z, {
                        id: "interface-actions.change",
                      }),
                    }),
                  }),
                ],
              }),
            [n, l, a],
          );
        return (0, r.jsx)(I.Yj, {
          closeToast: t,
          cover: (0, r.jsx)(h.J, {
            className: U().icon,
            size: "xs",
            variant: "settings",
          }),
          message: o,
        });
      };
      var Q = i(55676),
        Z = i.n(Q);
      let H = {
          duration: 300,
          initial: { transform: "translateY(5%)", opacity: 0 },
          open: { transform: "translateY(0)", opacity: 1 },
          close: { transform: "translateY(5%)", opacity: 0 },
        },
        q = [
          {
            type: D.nJ.HQ_PLUS,
            text: (0, r.jsx)(p.Z, {
              id: "player-actions.audio-quality-maximum",
            }),
            qualityMessageId: "player-actions.audio-quality-maximum",
          },
          {
            type: D.nJ.HQ,
            text: (0, r.jsx)(p.Z, {
              id: "player-actions.audio-quality-optimal",
            }),
            qualityMessageId: "player-actions.audio-quality-optimal",
          },
          {
            type: D.nJ.NQ,
            text: (0, r.jsx)(p.Z, {
              id: "player-actions.audio-quality-economical",
            }),
            qualityMessageId: "player-actions.audio-quality-economical",
          },
        ],
        Y = [
          {
            type: D.nJ.HQ,
            text: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(p.Z, { id: "player-actions.audio-quality-hq" }),
                "\xa0",
                (0, r.jsxs)("span", {
                  className: Z().item_type,
                  children: ["• ", O[D.nJ.HQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq",
          },
          {
            type: D.nJ.NQ,
            text: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(p.Z, { id: "player-actions.audio-quality-nq" }),
                "\xa0",
                (0, r.jsxs)("span", {
                  className: Z().item_type,
                  children: ["• ", O[D.nJ.NQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-nq",
          },
        ],
        J = {
          [D.nJ.HQ_PLUS]: (0, r.jsx)(p.Z, {
            id: "player-actions.audio-quality-maximum-description",
          }),
          [D.nJ.HQ]: (0, r.jsx)(p.Z, {
            id: "player-actions.audio-quality-optimal-description",
          }),
          [D.nJ.NQ]: (0, r.jsx)(p.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
          [D.nJ.LQ]: (0, r.jsx)(p.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
        },
        K = (e) => (0, r.jsxs)(r.Fragment, { children: ["[NDA] ", e] }),
        X = (0, o.Pi)((e) => {
          let {
            reference: t,
            onOpenChange: i,
            open: a,
            placement: n,
            returnFocus: o,
          } = e;
          (0, d.ZP)(a);
          let { formatMessage: c } = (0, m.Z)(),
            { contentRef: u } = (0, d.$Y)(),
            { notify: _ } = (0, d.d$)(),
            y = (0, d.uK)().get(d.V0),
            {
              sonataState: C,
              user: b,
              equalizer: f,
              experiments: N,
            } = (0, d.oR)(),
            j = (0, d.Sc)(),
            S = (0, s.useRef)(null),
            w = N.checkExperiment(d.pe.WebNextEqualizer, "on"),
            P = N.checkExperiment(d.pe.WebNextEnableNewQuality, "on"),
            L = true,
            k = P || L,
            M = (0, s.useMemo)(() => {
              let e = c({ id: "player-actions.audio-quality" });
              return P && !L && (e = K(e)), e;
            }, [c, P, L]),
            A = (0, s.useCallback)(() => {
              null == i || i(!0);
            }, [i]),
            B = (0, s.useCallback)(() => {
              null == i || i(!1);
            }, [i]),
            I = (0, s.useCallback)(
              (e) => {
                C.setQuality(e),
                  null == j || j.setQuality(e),
                  y.set(d.BU.YmPlayerQuality, e);
              },
              [j, C, y],
            ),
            E = (0, s.useCallback)(
              (e) => {
                let t = c({ id: e }).toLowerCase();
                return (0, r.jsx)(p.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [c],
            ),
            T = (0, s.useCallback)(
              (e, t) => () => {
                if (C.quality === e) return;
                I(e);
                let i = E(t);
                _((0, r.jsx)(G, { onOpenQualitySettingsMenu: A, message: i }), {
                  containerId: d.W$.INFO,
                });
              },
              [E, A, _, C.quality, I],
            ),
            R = (0, s.useMemo)(
              () => (L ? q : P ? q.map((e) => ({ ...e, text: K(e.text) })) : Y),
              [P, L],
            ),
            V = (0, s.useMemo)(() => {
              let e = !b.hasPlus;
              return R.map((t) => {
                let { type: i, text: a, qualityMessageId: n } = t,
                  o =
                    i === C.quality
                      ? (0, r.jsx)(h.J, { variant: "check" })
                      : null,
                  s = i === C.quality;
                return (
                  ((C.quality === D.nJ.NQ && i === D.nJ.LQ) ||
                    (C.quality === D.nJ.LQ && i === D.nJ.NQ)) &&
                    ((s = !0), (o = (0, r.jsx)(h.J, { variant: "check" }))),
                  (0, r.jsxs)(
                    z.sN,
                    {
                      isBlock: !0,
                      disabled: e,
                      className: (0, l.W)(Z().item, { [Z().expandedItem]: k }),
                      iconPosition: "right",
                      icon: o,
                      onClick: T(i, n),
                      role: "option",
                      "aria-selected": s,
                      children: [
                        k &&
                          (0, r.jsxs)("span", {
                            className: Z().itemWrapper,
                            children: [
                              (0, r.jsx)("span", {
                                className: Z().item_option,
                                children: a,
                              }),
                              (0, r.jsx)("span", {
                                className: (0, l.W)(
                                  Z().item_option,
                                  Z().itemSubTitle,
                                ),
                                children: J[i],
                              }),
                            ],
                          }),
                        !k &&
                          (0, r.jsx)("span", {
                            className: Z().item_option,
                            children: a,
                          }),
                      ],
                    },
                    i,
                  )
                );
              });
            }, [T, C.quality, b.hasPlus, k, R]),
            O = (0, s.useMemo)(
              () =>
                k
                  ? {
                      className: (0, l.W)(Z().root, Z().root_withNewQuality, {
                        [Z().root_withEqualizer]: w,
                      }),
                      listClassName: Z().list,
                      popoverContentClassName: Z().popoverContent,
                      disableFloatingStyles: !0,
                      portalNode: u,
                      transform: !1,
                      transition: H,
                    }
                  : {
                      offsetOptions: 10,
                      className: (0, l.W)(Z().root, {
                        [Z().root_withEqualizer]: w,
                      }),
                    },
              [u, k, w],
            ),
            F = (0, s.useMemo)(() => {
              if (w)
                return (0, r.jsx)(W.Gv, {
                  isExpanded: f.isEnabled,
                  isDisabled: !1,
                  className: (0, l.W)(Z().equalizer, {
                    [Z().equalizer_withNewQuality]: k,
                  }),
                  title: c({ id: "equalizer.title" }),
                });
            }, [f.isEnabled, c, k, w]);
          return (0, r.jsxs)(z.v2, {
            reference: t,
            placement: n,
            open: a,
            onOpenChange: i,
            returnFocus: o,
            role: "listbox",
            strategy: "absolute",
            footer: F,
            ...O,
            containerProps: (0, v.BA)(
              v.QM.player.QUALITY_SETTINGS_CONTEXT_MENU,
            ),
            children: [
              (0, r.jsxs)(g.Heading, {
                className: (0, l.W)(Z().header, {
                  [Z().headerWithCloseButton]: k,
                }),
                variant: "h4",
                size: "xs",
                weight: "bold",
                children: [
                  M,
                  k &&
                    (0, r.jsx)(x.z, {
                      ref: S,
                      radius: "round",
                      color: "secondary",
                      size: "xxs",
                      icon: (0, r.jsx)(h.J, { variant: "close", size: "xxs" }),
                      onClick: B,
                      "aria-label": c({
                        id: "interface-actions.close-quality-settings",
                      }),
                    }),
                ],
              }),
              V,
            ],
          });
        });
      var $ = i(66846),
        ee = i.n($);
      let et = "player-region",
        ei = (0, o.Pi)((e) => {
          var t;
          let {
              className: i,
              entityMeta: a,
              onLikeClick: n,
              onDislikeClick: onDislikeClick,
            } = e,
            {
              user: o,
              sonataState: c,
              experiments: u,
              fullscreenPlayer: _,
            } = (0, d.oR)(),
            [N, j] = (0, s.useState)(!1),
            [S, w] = (0, s.useState)(!1),
            { formatMessage: P } = (0, m.Z)(),
            L = c.contextType === y.Ak.Generative,
            E = !L,
            T = u.checkExperiment(d.pe.WebNextPodcastPage, "on"),
            R = o.isAuthorized && !L,
            D = u.checkExperiment(d.pe.WebNextSyncLyrics, "on"),
            z = (0, d.RV)(),
            W = c.canSpeed && z && T && (null == a ? void 0 : a.isNonMusic),
            O =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            F = null == a ? void 0 : a.isTrackAudiobook,
            U = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == a ? void 0 : a.averageColor,
              }),
              [null == a ? void 0 : a.averageColor],
            ),
            G = (0, s.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            Q = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION"].includes(t.tagName);
                a && E && i && _.showFullscreenPlayerModal();
              },
              [a, _, E],
            ),
            Z = (0, s.useMemo)(() => {
              if (null == a ? void 0 : a.isNonMusic) return null;
              let e = ""
                .concat(P({ id: "interface-actions.open-sync-lyrics" }), " ")
                .concat(P({ id: "warning-messages.can-break-accessibility" }));
              return D
                ? (0, r.jsx)(x.z, {
                    radius: "round",
                    size: "xxxs",
                    variant: "text",
                    disabled: !(null == a ? void 0 : a.hasSyncLyrics),
                    "aria-hidden": !(null == a ? void 0 : a.hasSyncLyrics),
                    withRipple: !1,
                    "aria-label": e,
                    icon: (0, r.jsx)(h.J, {
                      variant: "syncLyrics",
                      size: "xs",
                    }),
                    onClick: _.showSyncLyricsModal,
                  })
                : (0, r.jsx)(I.wx, {
                    title: P({ id: "entity-names.sync-lyrics" }),
                    description: P({ id: "future-feature.message" }),
                    children: (0, r.jsx)(x.z, {
                      radius: "round",
                      size: "xxxs",
                      variant: "text",
                      disabled: !0,
                      "aria-hidden": !0,
                      withRipple: !1,
                      "aria-label": e,
                      icon: (0, r.jsx)(h.J, {
                        variant: "syncLyrics",
                        size: "xs",
                      }),
                      ...(0, v.BA)(
                        v.QM.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                      ),
                    }),
                  });
            }, [
              D,
              null == a ? void 0 : a.hasSyncLyrics,
              P,
              _.showSyncLyricsModal,
              null == a ? void 0 : a.isNonMusic,
            ]),
            H = (0, s.useMemo)(
              () =>
                a
                  ? F
                    ? (0, r.jsx)(B.MG, {
                        track: a,
                        withAuthor: !0,
                        withBookLink: !0,
                        withSecondaryColor: !0,
                      })
                    : O
                      ? (0, r.jsx)(B.wT, {
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, r.jsx)(B.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                        })
                  : null,
              [a, O, F],
            );
          return (0, r.jsxs)("section", {
            style: U,
            className: (0, l.W)(ee().root, { [ee().root_disabled]: !a }, i),
            onDoubleClick: Q,
            "aria-labelledby": et,
            ...(0, v.BA)(v.QM.player.PLAYERBAR_DESKTOP),
            children: [
              (0, r.jsx)(b.y, {
                children: (0, r.jsx)(g.Heading, {
                  variant: "h3",
                  id: et,
                  children: (0, r.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              (0, r.jsxs)("div", {
                className: ee().info,
                children: [
                  (0, r.jsx)("div", {
                    className: ee().infoCard,
                    children:
                      a &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsxs)(C.Paper, {
                            radius: "s",
                            className: ee().coverContainer,
                            children: [
                              (0, r.jsx)(I.BE, {
                                className: ee().cover,
                                src: a.coverUri,
                                size: 100,
                                fit: "cover",
                                withAvatarReplace: !0,
                              }),
                              E &&
                                (0, r.jsxs)(f.u, {
                                  placement: "top",
                                  offsetOptions: 4,
                                  children: [
                                    (0, r.jsx)(V, {
                                      ariaLabel: P({
                                        id: "player-actions.fullscreen",
                                      }),
                                      onClick: _.showFullscreenPlayerModal,
                                    }),
                                    (0, r.jsx)(f._v, {
                                      children: (0, r.jsx)(p.Z, {
                                        id: "player-actions.fullscreen",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: ee().description,
                            children: H,
                          }),
                        ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                    className: ee().infoButtons,
                    onDoubleClick: G,
                    children:
                      a &&
                      R &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(I.Q1, {
                            className: ee().dislikeButton,
                            isLiked: a.isDisliked,
                            onClick: onDislikeClick,
                            iconSize: "xs",
                          }),
                          (0, r.jsx)(I.dJ, {
                            className: ee().likeButton,
                            isLiked: a.isLiked,
                            onClick: n,
                            iconSize: "xs",
                          }),
                          (0, r.jsx)(B.hz, {
                            track: a,
                            placement: "top",
                            open: N,
                            onOpenChange: j,
                            reference: (0, r.jsx)(x.z, {
                              size: "s",
                              variant: "text",
                              withRipple: !1,
                              radius: "round",
                              "aria-label": P({
                                id: "interface-actions.context-menu",
                              }),
                              icon: (0, r.jsx)(h.J, {
                                size: "xs",
                                variant: "more",
                              }),
                              ...(0, v.BA)(
                                v.QM.player
                                  .PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                              ),
                            }),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: ee().sonata,
                children: [
                  (0, r.jsx)(A.WP, { isMobile: !1, entityMeta: a }),
                  !c.isGenerativeContext &&
                    (0, r.jsx)(k, {
                      disabled: !a,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: ee().meta,
                children: [
                  !c.isGenerativeContext &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        W && (0, r.jsx)(I.t5, { iconSize: "l" }),
                        Z,
                        (0, r.jsx)(I.wx, {
                          title: P({ id: "player-actions.history" }),
                          description: P({ id: "future-feature.message" }),
                          children: (0, r.jsx)(x.z, {
                            radius: "round",
                            size: "xxxs",
                            variant: "text",
                            disabled: !0,
                            "aria-hidden": !0,
                            withRipple: !1,
                            "aria-label": P({ id: "player-actions.history" }),
                            icon: (0, r.jsx)(h.J, {
                              variant: "queue",
                              size: "xs",
                            }),
                            ...(0, v.BA)(
                              v.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                            ),
                          }),
                        }),
                        (0, r.jsx)(X, {
                          placement: "bottom",
                          open: S,
                          onOpenChange: w,
                          reference: (0, r.jsx)(x.z, {
                            className: ee().settingsButton,
                            radius: "round",
                            size: "xxxs",
                            variant: "text",
                            withRipple: !1,
                            "aria-label": P({
                              id: "player-actions.audio-quality",
                            }),
                            icon: (0, r.jsx)(h.J, {
                              variant: "settings",
                              size: "xs",
                            }),
                            ...(0, v.BA)(v.QM.player.SOUND_QUALITY_BUTTON),
                          }),
                        }),
                      ],
                    }),
                  (0, r.jsx)(M.F, {}),
                ],
              }),
            ],
          });
        });
      var ea = i(83249),
        en = i.n(ea);
      let er = (0, o.Pi)((e) => {
          var t;
          let { className: i, entityMeta: a, onLikeClick: n } = e,
            { user: o, sonataState: c, fullscreenPlayer: u } = (0, d.oR)(),
            _ = c.contextType === y.Ak.Generative,
            m = o.isAuthorized && !_,
            v =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            x = null == a ? void 0 : a.isTrackAudiobook,
            h = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == a ? void 0 : a.averageColor,
              }),
              [null == a ? void 0 : a.averageColor],
            ),
            f = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION", "IMG"].includes(t.tagName);
                a && i && u.showFullscreenPlayerModal();
              },
              [a, u],
            ),
            N = (0, s.useMemo)(
              () =>
                a
                  ? x
                    ? (0, r.jsx)(B.MG, {
                        track: a,
                        withAuthor: !0,
                        withBookLink: !0,
                        withSecondaryColor: !0,
                      })
                    : v
                      ? (0, r.jsx)(B.wT, {
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, r.jsx)(B.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                        })
                  : null,
              [a, v, x],
            );
          return (0, r.jsxs)("section", {
            style: h,
            className: (0, l.W)(en().root, i),
            onClick: f,
            children: [
              (0, r.jsx)(b.y, {
                children: (0, r.jsx)(g.Heading, {
                  variant: "h3",
                  id: "player-region",
                  children: (0, r.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              !c.isGenerativeContext &&
                (0, r.jsx)(k, {
                  className: en().progressBar,
                  sliderClassName: en().progressBar,
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !a,
                }),
              (0, r.jsxs)("div", {
                className: en().info,
                children: [
                  a
                    ? (0, r.jsxs)("div", {
                        className: en().infoCard,
                        children: [
                          (0, r.jsx)(C.Paper, {
                            radius: "s",
                            className: en().coverContainer,
                            children: (0, r.jsx)(I.BE, {
                              className: en().cover,
                              src: a.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: en().description,
                            children: N,
                          }),
                        ],
                      })
                    : (0, r.jsx)("div", { className: en().infoCard }),
                  (0, r.jsxs)("div", {
                    className: en().infoButtons,
                    children: [
                      a &&
                        m &&
                        (0, r.jsx)(I.dJ, { isLiked: a.isLiked, onClick: n }),
                      (0, r.jsx)(A.WP, { isMobile: !0, entityMeta: a }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        el = (0, o.Pi)((e) => {
          let { className: t } = e,
            { settings: i, sonataState: a } = (0, d.oR)(),
            n = (0, d.XU)(),
            o = (0, c.SB)(a.entityMeta),
            u = (0, c.KX)(a.entityMeta);
          (0, s.useEffect)(() => {
            if (!a.isGenerativeContext)
              return (
                null == n || n.addShortcutsListener(d.yx.LIKE, o),
                null == n || n.addShortcutsListener(d.yx.DISLIKE, u),
                () => {
                  null == n || n.removeShortcutsListener(d.yx.LIKE),
                    null == n || n.removeShortcutsListener(d.yx.DISLIKE);
                }
              );
          }, [u, o, n, a.isGenerativeContext]);
          let m = (0, s.useMemo)(
            () => (i.layout === d.t8.Mobile ? er : ei),
            [i.layout],
          );
          return (0, r.jsx)(m, {
            onLikeClick: o,
            onDislikeClick: u,
            entityMeta: a.entityMeta,
            className: (0, l.W)(t, _().root),
          });
        });
      var eo = i(23897),
        es = i(89352),
        ec = i(69863),
        ed = i(67175),
        eu = i.n(ed);
      let e_ = (e) => {
        let { delay: t, initialState: i, throttleTimeout: a } = e,
          n = (0, s.useRef)(null),
          [r, l] = (0, s.useState)(!!i),
          o = (0, s.useMemo)(
            () =>
              (0, eo.Z)(
                () => {
                  l(!i),
                    n.current && window.clearTimeout(n.current),
                    (n.current = window.setTimeout(() => {
                      l(!!i);
                    }, t));
                },
                a,
                { trailing: !1 },
              ),
            [t, i, a],
          ),
          c = (0, s.useCallback)(() => {
            l(!!i), n.current && window.clearTimeout(n.current);
          }, [i]);
        return (
          (0, s.useEffect)(
            () => () => {
              n.current && window.clearTimeout(n.current);
            },
            [],
          ),
          { state: r, handleDelayedToggle: o, reset: c }
        );
      };
      var em = i(37117);
      let ep = (0, s.createContext)({}),
        ev = () => (0, s.useContext)(ep);
      var ey = i(80615),
        ex = i.n(ey),
        eh = i(68466),
        eC = i.n(eh);
      let eb = (e) => (e + 1) * 0.275,
        ef = (e) => {
          let { className: t, icon: i } = e,
            a = (0, s.useCallback)(
              (e) => {
                let t = {
                  animationDelay: "".concat(eb(e), "s"),
                  animationDuration: "".concat(1.1, "s, ").concat(1.1, "s"),
                };
                return i
                  ? (0, s.cloneElement)(i, {
                      className: (0, l.W)(eC().element, eC().element_withIcon),
                      key: e,
                      style: t,
                    })
                  : (0, r.jsx)(
                      "div",
                      {
                        className: (0, l.W)(
                          eC().element,
                          eC().element_withDefaultElement,
                        ),
                        style: t,
                      },
                      e,
                    );
              },
              [i],
            );
          return (0, r.jsx)("div", {
            className: (0, l.W)(eC().root, t),
            children: Array.from({ length: 4 }, (e, t) => a(t)),
          });
        };
      var eg = i(75015),
        eN = i(45131);
      ((a = n || (n = {})).INTRO = "intro"),
        (a.PREPARE = "prepare"),
        (a.PLAYING = "playing"),
        (a.OUTRO = "outro");
      let ej = () => {
        var e;
        let t = (0, d.R$)(),
          [i, a] = (0, s.useState)(
            null !==
              (e =
                null == t
                  ? void 0
                  : t.state.playerState.progress.value.position) && void 0 !== e
              ? e
              : 0,
          ),
          n = (0, s.useCallback)((e) => {
            a(e);
          }, []);
        return (
          (0, s.useEffect)(() => {
            let e =
              null == t
                ? void 0
                : t.state.playerState.progress.onChange(() => {
                    a(t.state.playerState.progress.value.position);
                  });
            return () => {
              null == e || e();
            };
          }, [t]),
          { progressPosition: i, setProgressPosition: n }
        );
      };
      var eS = i(15419);
      let ew = (e) => {
          let { onSetProgressEventChange: t } = e,
            i = (0, d.R$)();
          (0, s.useEffect)(() => {
            let e =
              null == i
                ? void 0
                : i.state.playerState.event.onChange((e) => {
                    e === eS.KX.SET_PROGRESS && t();
                  });
            return () => {
              null == e || e();
            };
          }, [t, i]);
        },
        eP = (e) => {
          let { position: t } = e,
            {
              fullscreenPlayer: { syncLyrics: i },
            } = (0, d.oR)();
          return {
            state: (0, s.useMemo)(() => {
              let { startSec: e, endSec: a } = i;
              return e && e >= 3 && e - t > 0 && e - t <= 3
                ? n.PREPARE
                : e && e > t
                  ? n.INTRO
                  : a && t > a
                    ? n.OUTRO
                    : n.PLAYING;
            }, [t, i]),
          };
        };
      var eL = i(83627),
        ek = i.n(eL);
      let eM = (0, o.Pi)(() => {
        var e, t, i;
        let { formatMessage: a } = (0, m.Z)(),
          {
            fullscreenPlayer: { syncLyrics: n },
          } = (0, d.oR)();
        return (0, r.jsxs)("footer", {
          className: ek().root,
          children: [
            n.hasWriters &&
              (0, r.jsx)(g.Caption, {
                className: ek().writers,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.authors" },
                  {
                    authors:
                      null === (e = n.writers) || void 0 === e
                        ? void 0
                        : e.join(", "),
                  },
                ),
              }),
            (null === (t = n.major) || void 0 === t ? void 0 : t.name) &&
              (0, r.jsx)(g.Caption, {
                className: ek().major,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.source" },
                  {
                    source:
                      null === (i = n.major) || void 0 === i ? void 0 : i.name,
                  },
                ),
              }),
          ],
        });
      });
      var eA = i(73390),
        eB = i.n(eA);
      let eI = (e) => {
        let { className: t, text: i } = e;
        return (0, r.jsx)("span", {
          className: (0, l.W)(eB().root, t),
          children: i,
        });
      };
      var eE = i(77920),
        eT = i.n(eE);
      let eR = (e) => {
          let t = (0, s.useRef)(0),
            {
              fullscreenPlayer: { syncLyrics: i },
              sonataState: { contextId: a, contextType: n },
            } = (0, d.oR)();
          (0, s.useEffect)(() => {
            !i.hasLyricsViewed &&
              null !== e &&
              "visible" === document.visibilityState &&
              (t.current++,
              t.current >= 2 && i.sendViews({ contextId: a, contextType: n }));
          }, [e, a, n, i]);
        },
        eV = (0, o.Pi)((e) => {
          var t, i;
          let {
              state: a,
              progressPosition: o,
              shouldShowScrolledLyrics: c,
              setProgressPosition: u,
            } = e,
            _ = (0, d.R$)(),
            m = (0, eN.oc)(),
            {
              fullscreenPlayer: { syncLyrics: p },
            } = (0, d.oR)(),
            v = (0, s.useCallback)(
              (e) => (t) => {
                c &&
                  (t.stopPropagation(),
                  u(e + 0.01),
                  null == _ ||
                    _.setProgress(e + 0.01).catch(() => {
                      u(o);
                    }));
              },
              [o, u, c, _],
            ),
            y = p.getActiveLineIndex(o);
          return (
            eR(y),
            (0, s.useEffect)(() => {
              if (!c) {
                if (
                  ((a === n.INTRO || a === n.PREPARE) && m.slideTo(0),
                  a === n.OUTRO)
                ) {
                  var e;
                  m.slideTo(
                    Number(
                      null === (e = p.lines) || void 0 === e
                        ? void 0
                        : e.length,
                    ),
                  );
                }
                null !== y && m.slideTo(y + 1);
              }
            }, [
              y,
              c,
              a,
              m,
              null === (t = p.lines) || void 0 === t ? void 0 : t.length,
            ]),
            null === (i = p.lines) || void 0 === i
              ? void 0
              : i.map((e, t) => {
                  var i;
                  return (0, r.jsx)(
                    eN.o5,
                    {
                      onClickCapture: v(e.fromSec),
                      className: (0, l.W)(eT().line, {
                        [eT().line_last]:
                          t ===
                            Number(
                              null === (i = p.lines) || void 0 === i
                                ? void 0
                                : i.length,
                            ) -
                              1 && !c,
                        [eT().line_active]: t === y && !c,
                      }),
                      children: (0, r.jsx)(eI, { text: e.text }),
                    },
                    e.key,
                  );
                })
          );
        });
      eV.displayName = "SwiperSlide";
      let eD = { forceToAxis: !0 },
        ez = (0, o.Pi)(() => {
          let {
              fullscreenPlayer: { syncLyrics: e },
              settings: t,
            } = (0, d.oR)(),
            { progressPosition: i, setProgressPosition: a } = ej(),
            { state: o } = eP({ position: i }),
            {
              scrollerClassName: c,
              footerClassName: u,
              counterClassName: _,
            } = ev(),
            {
              state: m,
              handleDelayedToggle: p,
              reset: v,
            } = e_({ delay: 3e3, throttleTimeout: 300 }),
            {
              state: y,
              handleDelayedToggle: x,
              reset: h,
            } = e_({ delay: 3e3, throttleTimeout: 300 }),
            C = t.layout === d.t8.Mobile,
            b = (0, s.useCallback)(() => {
              y || p();
            }, [p, y]),
            f = (0, s.useCallback)(() => {
              m && v(), x();
            }, [x, v, m]),
            g = (0, s.useCallback)(
              (e) => {
                switch (e.code) {
                  case d.Dt.KEY_L:
                  case d.Dt.KEY_J:
                  case d.Dt.ARROW_LEFT:
                  case d.Dt.ARROW_RIGHT:
                    p();
                }
              },
              [p],
            ),
            N = (0, s.useMemo)(
              () =>
                o === n.PREPARE ? Math.ceil(Number(e.startSec) - i) : null,
              [i, o, e.startSec],
            ),
            j = (0, s.useMemo)(
              () =>
                o === n.PREPARE
                  ? (0, r.jsx)(eI, { className: eT().counterLine, text: N })
                  : o === n.INTRO
                    ? (0, r.jsx)(ef, {})
                    : null,
              [N, o],
            );
          return (
            ew({ onSetProgressEventChange: h }),
            (0, s.useEffect)(
              () => (
                window.addEventListener("keydown", g),
                () => {
                  window.removeEventListener("keydown", g);
                }
              ),
              [g],
            ),
            (0, s.useEffect)(
              () => (
                window.addEventListener("mousemove", b),
                () => {
                  window.addEventListener("mousemove", b);
                }
              ),
              [b],
            ),
            (0, r.jsxs)(eN.tq, {
              className: (0, l.W)(
                eT().root,
                {
                  [eT()["root_".concat(o)]]: !y,
                  [eT().root_withVisibleUpperLyrics]: m,
                  [eT().root_withVisibleScrolledLyrics]: y,
                },
                c,
              ),
              modules: [eg.Gk, eg.Rv],
              slidesPerView: "auto",
              spaceBetween: 32,
              direction: "vertical",
              mousewheel: eD,
              freeMode: !0,
              onScroll: f,
              onTouchMove: C ? f : void 0,
              allowTouchMove: C,
              children: [
                (0, r.jsx)(eN.o5, {
                  className: (0, l.W)(eT().counter, _),
                  children: j,
                }),
                (0, r.jsx)(eV, {
                  setProgressPosition: a,
                  shouldShowScrolledLyrics: y,
                  state: o,
                  progressPosition: i,
                }),
                (0, r.jsx)(eN.o5, {
                  className: u,
                  children: (0, r.jsx)(eM, {}),
                }),
              ],
            })
          );
        }),
        eW = {
          enter: ex().root_enter,
          enterActive: ex().root_enter_active,
          exit: ex().root_exit,
          exitActive: ex().root_exit_active,
        },
        eO = (0, o.Pi)((e) => {
          let {
              className: t,
              shouldShowSyncLyrics: i,
              counterClassName: a,
              footerClassName: n,
              scrollerClassName: o,
              contentClassName: c,
              loaderClassName: u,
            } = e,
            _ = (0, s.useRef)(null),
            {
              sonataState: { entityMeta: m },
              fullscreenPlayer: { syncLyrics: p },
            } = (0, d.oR)();
          (0, s.useEffect)(() => {
            p.currentTrackId !== (null == m ? void 0 : m.id) &&
              i &&
              p.getData(null == m ? void 0 : m.id);
          }, [null == m ? void 0 : m.id, i, p]);
          let v = (0, s.useMemo)(
              () =>
                p.isLoaded
                  ? (0, r.jsx)(ez, {})
                  : ((p.isRejected || p.hasInvalidLyrics || !i) &&
                      p.setInvisible(),
                    (0, r.jsx)(ef, { className: u })),
              [
                p.isLoaded,
                p.isRejected,
                p.hasInvalidLyrics,
                p.setInvisible,
                i,
                u,
              ],
            ),
            y = (0, s.useMemo)(
              () => ({
                counterClassName: a,
                scrollerClassName: o,
                footerClassName: n,
              }),
              [a, n, o],
            );
          return (0, r.jsx)(ep.Provider, {
            value: y,
            children: (0, r.jsx)(em.Z, {
              in: i,
              nodeRef: _,
              timeout: 200,
              unmountOnExit: !0,
              classNames: eW,
              children: (0, r.jsx)("div", {
                ref: _,
                className: (0, l.W)(ex().root, t),
                children: (0, r.jsx)("div", {
                  className: (0, l.W)(ex().content, c),
                  children: v,
                }),
              }),
            }),
          });
        });
      var eF = i(63341),
        eU = i.n(eF);
      let eG = (0, o.Pi)((e) => {
        let { className: t } = e,
          { sonataState: i } = (0, d.oR)(),
          a = (0, s.useMemo)(
            () =>
              i.entityMeta
                ? (0, r.jsx)(B.ko, {
                    className: eU().meta,
                    track: i.entityMeta,
                    withSecondaryColor: !0,
                    withAlbumLink: !0,
                    captionSize: "l",
                    explicitSize: "s",
                    withAllArtistsTitle: !0,
                  })
                : null,
            [i.entityMeta],
          );
        return (0, r.jsxs)("div", {
          className: (0, l.W)(eU().root, t),
          children: [
            a,
            (0, r.jsx)(k, {
              className: eU().slider,
              disabled: !a,
              isMobile: !1,
              isFullscreen: !1,
              withTimecode: !1,
            }),
          ],
        });
      });
      var eQ = i(82120),
        eZ = i.n(eQ);
      let eH = (e) => {
        let {
            shouldShowSyncLyricsControls: t,
            isContextMenuVisible: i,
            setIsContextMenuVisible: a,
          } = e,
          { formatMessage: n } = (0, m.Z)(),
          {
            fullscreenPlayer: o,
            sonataState: { entityMeta: u },
            user: _,
          } = (0, d.oR)(),
          { state: p, handleDelayedToggle: y } = e_({
            delay: 1500,
            throttleTimeout: 300,
          }),
          C = (0, c.SB)(u),
          b = (0, s.useCallback)(
            (e) => {
              e.stopPropagation(), o.syncLyrics.setInvisible();
            },
            [o],
          ),
          f = (0, s.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          g = (0, s.useMemo)(() => {
            if (
              _.isAuthorized &&
              !(null == u ? void 0 : u.isRemoved) &&
              (null == u ? void 0 : u.isAvailable)
            )
              return (0, r.jsx)(B.hz, {
                track: u,
                open: i,
                onOpenChange: a,
                placement: "left",
                reference: (0, r.jsx)(x.z, {
                  className: (0, l.W)(eZ().menuButton, {
                    [eZ().menuButton_active]: i,
                  }),
                  onClick: f,
                  size: "l",
                  withRipple: !1,
                  radius: "round",
                  "aria-label": n({ id: "interface-actions.context-menu" }),
                  icon: (0, r.jsx)(h.J, { variant: "more", size: "m" }),
                  ...(0, v.BA)(
                    v.QM.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                  ),
                }),
              });
          }, [u, n, f, i, a, _.isAuthorized]);
        return ((0, s.useEffect)(
          () => (
            window.addEventListener("mousemove", y),
            () => {
              window.removeEventListener("mousemove", y);
            }
          ),
          [y],
        ),
        t)
          ? (0, r.jsx)(V, {
              className: (0, l.W)(eZ().fullscreenPlayerButton, {
                [eZ().fullscreenPlayerButton_visible]: p,
              }),
              ariaLabel: n({ id: "interface-actions.hide-sync-lyrics" }),
              onClick: b,
            })
          : (0, r.jsxs)("div", {
              className: (0, l.W)(eZ().root, { [eZ().root_visible]: i }),
              children: [
                (0, r.jsx)(A.WP, {
                  className: eZ().sonataControls,
                  isMobile: !1,
                  entityMeta: u,
                  isFullscreen: !0,
                }),
                g,
                (0, r.jsx)(I.dJ, {
                  className: eZ().likeButton,
                  isLiked: null == u ? void 0 : u.isLiked,
                  onClick: C,
                  iconSize: "m",
                  size: "l",
                  variant: "default",
                  color: "secondary",
                }),
              ],
            });
      };
      var eq = i(10751),
        eY = i.n(eq);
      let eJ = (e) => {
          let { className: t, children: i, coverUri: a } = e;
          return (0, r.jsxs)(C.Paper, {
            radius: "m",
            className: (0, l.W)(eY().root, t),
            children: [
              (0, r.jsx)(I.BE, {
                className: eY().cover,
                src: a,
                size: 400,
                fit: "cover",
                withAvatarReplace: !0,
              }),
              i,
            ],
          });
        },
        eK = (0, o.Pi)((e) => {
          var t;
          let { isContextMenuVisible: i, setIsContextMenuVisible: a } = e,
            { state: n, handleDelayedToggle: o } = e_({
              delay: 150,
              throttleTimeout: 100,
            }),
            {
              sonataState: { entityMeta: c },
              fullscreenPlayer: u,
            } = (0, d.oR)(),
            _ =
              (null == c ? void 0 : c.isTrackPodcast) ||
              (null == c
                ? void 0
                : null === (t = c.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            m = null == c ? void 0 : c.isTrackAudiobook,
            p =
              !!(null == c ? void 0 : c.hasSyncLyrics) &&
              u.syncLyrics.isVisible,
            v = (0, s.useMemo)(
              () =>
                c
                  ? m
                    ? (0, r.jsx)(B.MG, {
                        className: eu().meta,
                        titleContainerClassName: eu().title,
                        track: c,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !0,
                        textClassName: eu().podcastAuthors,
                      })
                    : _
                      ? (0, r.jsx)(B.wT, {
                          className: eu().meta,
                          titleContainerClassName: eu().title,
                          track: c,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                          textClassName: eu().podcastAuthors,
                        })
                      : (0, r.jsx)(B.ko, {
                          className: eu().meta,
                          titleContainerClassName: eu().title,
                          track: c,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                          artistsClassName: eu().artists,
                        })
                  : null,
              [c, null == c ? void 0 : c.id, _, m],
            );
          return (
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", o),
                () => {
                  window.removeEventListener("resize", o);
                }
              ),
              [o],
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(eJ, {
                  className: (0, l.W)(eu().poster, eu().important, {
                    [eu().poster_withDisabledInsetTransition]: n,
                    [eu().poster_withSyncLyricsAnimation]: p,
                  }),
                  coverUri: null == c ? void 0 : c.coverUri,
                  children: (0, r.jsx)(eH, {
                    setIsContextMenuVisible: a,
                    isContextMenuVisible: i,
                    shouldShowSyncLyricsControls: p,
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: eu().info,
                  children: [
                    v,
                    (0, r.jsx)(k, {
                      className: eu().sliderContainer,
                      sliderClassName: eu().slider,
                      disabled: !c,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                  ],
                }),
                (0, r.jsx)(eO, {
                  className: eu().syncLyrics,
                  loaderClassName: eu().syncLyricsLoader,
                  contentClassName: eu().syncLyricsContent,
                  shouldShowSyncLyrics: p,
                  scrollerClassName: eu().syncLyricsScroller,
                  counterClassName: eu().syncLyricsCounter,
                  footerClassName: eu().syncLyricsFooter,
                }),
                (0, r.jsx)(eG, {
                  className: (0, l.W)(eu().syncLyricsCard, {
                    [eu().syncLyricsCard_withAnimation]: p,
                  }),
                }),
              ],
            })
          );
        }),
        eX = (0, o.Pi)(() => {
          let { formatMessage: e } = (0, m.Z)(),
            [t, i] = (0, s.useState)(!1),
            {
              currentTrackInfo: {
                modals: { trackModal: a },
              },
              sonataState: { entityMeta: n },
              fullscreenPlayer: o,
            } = (0, d.oR)(),
            c = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == n ? void 0 : n.averageColor,
              }),
              [null == n ? void 0 : n.averageColor],
            );
          return (0, r.jsxs)(es.u, {
            className: (0, l.W)(eu().root, eu().important),
            open: o.modal.isOpened,
            onOpenChange: t || a.isOpened ? void 0 : o.modal.onOpenChange,
            onClose: o.modal.close,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: c,
            contentClassName: eu().modalContent,
            closeOnOutsidePress: !1,
            ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_MODAL),
            children: [
              (0, r.jsx)("header", {
                className: eu().header,
                children: (0, r.jsx)(x.z, {
                  className: eu().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "s",
                  icon: (0, r.jsx)(h.J, { variant: "arrowDown", size: "xs" }),
                  onClick: o.modal.close,
                  "aria-label": e({ id: "interface-actions.close" }),
                  ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                }),
              }),
              (0, r.jsx)(eK, {
                setIsContextMenuVisible: i,
                isContextMenuVisible: t,
              }),
              (0, r.jsx)(ec.Notification, {
                className: eu().notification,
                enableMultiContainer: !0,
                containerId: d.W$.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, r.jsx)(ec.Notification, {
                className: eu().notification,
                enableMultiContainer: !0,
                containerId: d.W$.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var e$ = i(9410),
        e0 = i.n(e$);
      let e1 = (0, o.Pi)((e) => {
        var t, i, a, n;
        let { className: o, onSyncLyricsButtonClick: c } = e,
          { sonataState: u, experiments: _, fullscreenPlayer: p } = (0, d.oR)(),
          { formatMessage: v } = (0, m.Z)(),
          y = null === u.entityMeta,
          C =
            (null === (t = u.entityMeta) || void 0 === t
              ? void 0
              : t.isNonMusic) ||
            (null === (a = u.entityMeta) || void 0 === a
              ? void 0
              : null === (i = a.mainAlbum) || void 0 === i
                ? void 0
                : i.isNonMusic),
          b = _.checkExperiment(d.pe.WebNextSyncLyrics, "on"),
          f = (0, s.useMemo)(() => {
            var e;
            if (C) return;
            let t = ""
              .concat(v({ id: "interface-actions.open-sync-lyrics" }), " ")
              .concat(v({ id: "warning-messages.can-break-accessibility" }));
            return (
              b ||
                (I.wx,
                v({ id: "entity-names.sync-lyrics" }),
                v({ id: "future-feature.message" }),
                x.z,
                h.J),
              (0, r.jsx)(x.z, {
                className: (0, l.W)(e0().syncLyricsButton, {
                  [e0().syncLyricsButton_active]: p.syncLyrics.isVisible,
                }),
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled: !(null === (e = u.entityMeta) || void 0 === e
                  ? void 0
                  : e.hasSyncLyrics),
                withRipple: !1,
                withHover: !1,
                "aria-label": t,
                icon: (0, r.jsx)(h.J, { variant: "syncLyrics", size: "xs" }),
                onClick: c,
              })
            );
          }, [
            b,
            v,
            p.syncLyrics.isVisible,
            c,
            C,
            null === (n = u.entityMeta) || void 0 === n
              ? void 0
              : n.hasSyncLyrics,
          ]);
        return (0, r.jsx)("div", {
          className: (0, l.W)(e0().footer, o),
          children: (0, r.jsxs)("div", {
            className: e0().footerContainer,
            children: [
              (y || u.canChangeRepeatMode) &&
                (0, r.jsx)(A.$Z, {
                  isDisabled: y,
                  repeatMode: u.repeatMode,
                  variant: "text",
                }),
              f,
              (y || u.canShuffle) &&
                (0, r.jsx)(A.P4, {
                  isDisabled: y,
                  shuffle: u.shuffle,
                  variant: "text",
                }),
            ],
          }),
        });
      });
      var e5 = i(18806),
        e2 = i.n(e5);
      let e3 = {
          enter: e2().coverWrapper_enter,
          enterActive: e2().coverWrapper_enter_active,
          exit: e2().coverWrapper_exit,
          exitActive: e2().coverWrapper_exit_active,
        },
        e4 = (0, o.Pi)((e) => {
          var t;
          let { className: i } = e,
            a = (0, s.useRef)(null),
            {
              state: n,
              handleDelayedToggle: o,
              reset: c,
            } = e_({ delay: 7e3, throttleTimeout: 0 }),
            {
              fullscreenPlayer: u,
              sonataState: { entityMeta: _ },
              experiments: m,
            } = (0, d.oR)(),
            p =
              (null == _ ? void 0 : _.isTrackPodcast) ||
              (null == _
                ? void 0
                : null === (t = _.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            v = null == _ ? void 0 : _.isTrackAudiobook,
            y =
              !!(null == _ ? void 0 : _.hasSyncLyrics) &&
              u.syncLyrics.isVisible,
            x = n || !y,
            h = (0, s.useCallback)(() => {
              y && (n ? c() : o());
            }, [o, n, y, c]),
            b = (0, s.useCallback)(() => {
              y && n && o();
            }, [o, n, y]),
            f = (0, s.useCallback)(() => {
              !(window.innerWidth > 480) &&
                (null == _ ? void 0 : _.hasSyncLyrics) &&
                m.checkExperiment(d.pe.WebNextSyncLyrics, "on") &&
                (u.syncLyrics.isVisible
                  ? u.syncLyrics.setInvisible()
                  : u.syncLyrics.setVisible());
            }, [null == _ ? void 0 : _.hasSyncLyrics, m, u.syncLyrics]),
            g = (0, s.useMemo)(
              () =>
                (0, eo.Z)(() => {
                  window.innerWidth > 480 && u.syncLyrics.setInvisible();
                }, 100),
              [u.syncLyrics],
            ),
            N = (0, s.useMemo)(
              () =>
                _
                  ? v
                    ? (0, r.jsx)(B.MG, {
                        textClassName: e2().metaText,
                        track: _,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !0,
                      })
                    : p
                      ? (0, r.jsx)(B.wT, {
                          textClassName: e2().metaText,
                          track: _,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                        })
                      : (0, r.jsx)(B.ko, {
                          textClassName: e2().metaText,
                          track: _,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                        })
                  : void 0,
              [_, p, v],
            );
          return (
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", g),
                () => {
                  window.removeEventListener("resize", g);
                }
              ),
              [g],
            ),
            (0, s.useLayoutEffect)(() => {
              g();
            }, [g]),
            (0, s.useLayoutEffect)(() => {
              y && o();
            }, [y, o]),
            (0, r.jsxs)("div", {
              onTouchEnd: b,
              className: (0, l.W)(e2().root, i),
              children: [
                (0, r.jsx)("div", {
                  className: e2().content,
                  children: (0, r.jsxs)("div", {
                    className: e2().wrapper,
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, l.W)(e2().infoBlock, {
                          [e2().infoBlock_withExpandedSyncLyrics]: !n && y,
                        }),
                        children: [
                          (0, r.jsxs)("div", {
                            onClick: h,
                            className: e2().coverContainer,
                            children: [
                              (0, r.jsx)(eO, {
                                className: e2().syncLyrics,
                                scrollerClassName: e2().syncLyricsScroller,
                                contentClassName: e2().syncLyricsContent,
                                loaderClassName: e2().syncLyricsLoader,
                                footerClassName: e2().syncLyricsFooter,
                                counterClassName: e2().syncLyricsCounter,
                                shouldShowSyncLyrics: y,
                              }),
                              (0, r.jsx)(em.Z, {
                                in: !y,
                                nodeRef: a,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: e3,
                                children: (0, r.jsx)(C.Paper, {
                                  ref: a,
                                  radius: "m",
                                  className: e2().coverWrapper,
                                  children: (0, r.jsx)(I.BE, {
                                    className: e2().cover,
                                    src: null == _ ? void 0 : _.coverUri,
                                    size: 400,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: e2().trackInfo,
                            children: [
                              !n &&
                                y &&
                                (0, r.jsx)(C.Paper, {
                                  className: e2().trackInfoCoverContainer,
                                  radius: "xs",
                                  children: (0, r.jsx)(I.BE, {
                                    className: e2().trackInfoCover,
                                    src: null == _ ? void 0 : _.coverUri,
                                    size: 200,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              N,
                            ],
                          }),
                        ],
                      }),
                      x &&
                        (0, r.jsx)(k, {
                          className: e2().timeline,
                          disabled: !_,
                          isMobile: !0,
                          isFullscreen: !0,
                          showThumbVariant: "always",
                        }),
                      x &&
                        (0, r.jsx)(A.WP, {
                          className: e2().buttonsBlock,
                          isMobile: !0,
                          entityMeta: _,
                          isFullscreen: !0,
                        }),
                    ],
                  }),
                }),
                x && (0, r.jsx)(e1, { onSyncLyricsButtonClick: f }),
              ],
            })
          );
        });
      var e8 = i(9349),
        e9 = i.n(e8);
      let e6 = (e) => {
          let { children: t, className: i } = e,
            a = (0, d.R$)(),
            { fullscreenPlayer: n } = (0, d.oR)(),
            { formatMessage: o } = (0, m.Z)(),
            c = (0, s.useRef)(""),
            u = (0, s.useCallback)(
              (e) => {
                e.stopPropagation(), n.modal.isOpened && n.modal.close();
              },
              [n],
            ),
            _ = (0, s.useMemo)(() => {
              if (a) {
                let t = a.state.queueState.currentEntity.value,
                  i = null == t ? void 0 : t.context.data;
                switch (null == i ? void 0 : i.type) {
                  case "vibe":
                    var e;
                    return null == i
                      ? void 0
                      : null === (e = i.meta.session) || void 0 === e
                        ? void 0
                        : e.wave.name;
                  case "album":
                    return (
                      (c.current = "/album/".concat(
                        null == i ? void 0 : i.meta.id,
                      )),
                      o(
                        { id: "playing-now.album" },
                        { title: null == i ? void 0 : i.meta.title },
                      )
                    );
                  case "playlist":
                    return (
                      (c.current = "/playlists/".concat(
                        null == i ? void 0 : i.meta.playlistUuid,
                      )),
                      o(
                        { id: "playing-now.playlist" },
                        { title: null == i ? void 0 : i.meta.title },
                      )
                    );
                }
              }
              return null;
            }, [a, o]);
          return (0, r.jsxs)("div", {
            className: (0, l.W)(e9().root, i),
            children: [
              !!_ &&
                (0, r.jsxs)("div", {
                  className: e9().textBlock,
                  children: [
                    (0, r.jsx)(g.Caption, {
                      variant: "span",
                      size: "s",
                      weight: "normal",
                      className: e9().subTitle,
                      children: (0, r.jsx)(p.Z, { id: "playing-now.common" }),
                    }),
                    c.current
                      ? (0, r.jsx)(I.rU, {
                          href: c.current,
                          target: "_self",
                          onClick: u,
                          className: e9().link,
                          children: (0, r.jsx)(g.Caption, {
                            variant: "span",
                            size: "m",
                            className: e9().title,
                            lineClamp: 1,
                            children: _,
                          }),
                        })
                      : (0, r.jsx)(g.Caption, {
                          variant: "span",
                          size: "m",
                          className: e9().title,
                          lineClamp: 1,
                          children: _,
                        }),
                  ],
                }),
              t,
            ],
          });
        },
        e7 = (0, o.Pi)(() => {
          let { formatMessage: e } = (0, m.Z)(),
            { fullscreenPlayer: t } = (0, d.oR)();
          return (0, r.jsxs)("header", {
            className: e0().header,
            children: [
              (0, r.jsx)(x.z, {
                radius: "round",
                color: "secondary",
                size: "s",
                variant: "text",
                icon: (0, r.jsx)(h.J, { variant: "arrowDown", size: "xs" }),
                onClick: t.modal.close,
                "aria-label": e({ id: "interface-actions.close" }),
              }),
              (0, r.jsx)(e6, {
                className: e0().headerCenter,
                children: (0, r.jsx)(I.wx, {
                  title: e({ id: "player-actions.cast" }),
                  description: e({ id: "future-feature.message" }),
                  children: (0, r.jsx)(x.z, {
                    className: e0().castButton,
                    radius: "round",
                    size: "s",
                    variant: "text",
                    disabled: !0,
                    withRipple: !1,
                    "aria-label": e({ id: "player-actions.cast" }),
                    icon: (0, r.jsx)(h.J, { variant: "cast", size: "xs" }),
                  }),
                }),
              }),
              (0, r.jsx)(I.wx, {
                title: e({ id: "player-actions.history" }),
                description: e({ id: "future-feature.message" }),
                children: (0, r.jsx)(x.z, {
                  radius: "round",
                  size: "s",
                  variant: "text",
                  disabled: !0,
                  withRipple: !1,
                  "aria-label": e({ id: "player-actions.history" }),
                  icon: (0, r.jsx)(h.J, { variant: "queue", size: "xs" }),
                }),
              }),
            ],
          });
        }),
        te = (0, o.Pi)(() => {
          let {
              sonataState: { entityMeta: e },
              fullscreenPlayer: t,
            } = (0, d.oR)(),
            i = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == e ? void 0 : e.averageColor,
              }),
              [null == e ? void 0 : e.averageColor],
            );
          return (0, r.jsxs)(es.u, {
            className: (0, l.W)(e0().root, e0().important),
            open: t.modal.isOpened,
            onOpenChange: t.modal.onOpenChange,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: i,
            contentClassName: e0().modalContent,
            children: [(0, r.jsx)(e7, {}), (0, r.jsx)(e4, {})],
          });
        }),
        tt = (e) => {
          {
            let t = e === d.t8.Mobile,
              i = window.screen.availHeight || window.innerHeight;
            return (!t && i < 450) || t;
          }
        },
        ti = (0, o.Pi)(() => {
          let { settings: e } = (0, d.oR)(),
            t = e.layout === d.t8.Mobile,
            [i, a] = (0, s.useState)(t),
            n = (0, s.useMemo)(
              () =>
                (0, eo.Z)(
                  () => {
                    a(tt(e.layout));
                  },
                  100,
                  { trailing: !1 },
                ),
              [e.layout, a],
            );
          return (
            (0, s.useEffect)(
              () => (
                a(tt(e.layout)),
                window.addEventListener("resize", n),
                () => {
                  window.removeEventListener("resize", n);
                }
              ),
              [n, e.layout],
            ),
            i ? (0, r.jsx)(te, {}) : (0, r.jsx)(eX, {})
          );
        });
      var ta = i(42288),
        tn = i(3429),
        tr = i(59131),
        tl = i(31391),
        to = i.n(tl);
      let ts = (e) => {
          try {
            return (to()(e).scripts || []).map((e) => {
              let { start: t, end: i, text: a } = e;
              return (0, ta.pj)({ text: a.trim(), fromSec: t, toSec: i });
            });
          } catch (e) {
            return [];
          }
        },
        tc = ta.V5.model("SyncLyricsLine", {
          text: ta.V5.string,
          fromSec: ta.V5.number,
          toSec: ta.V5.number,
        }).views((e) => ({
          get key() {
            return "".concat(e.fromSec, ":").concat(e.toSec);
          },
        })),
        td = ta.V5.model("SyncLyrics", {
          isVisible: ta.V5.optional(ta.V5.boolean, !1),
          loadingState: ta.V5.enumeration(Object.values(d.Gu)),
          lines: ta.V5.maybeNull(ta.V5.array(tc)),
          major: ta.V5.maybeNull(c.bP),
          writers: ta.V5.maybeNull(ta.V5.array(ta.V5.string)),
          lyricId: ta.V5.maybeNull(ta.V5.number),
          externalLyricId: ta.V5.maybeNull(ta.V5.string),
          currentTrackId: ta.V5.maybeNull(
            ta.V5.union(ta.V5.string, ta.V5.number),
          ),
          hasLyricsViewed: ta.V5.optional(ta.V5.boolean, !1),
        })
          .views((e) => ({
            get isLoaded() {
              return e.loadingState === d.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === d.Gu.REJECT;
            },
            get startSec() {
              var t;
              let i = null === (t = e.lines) || void 0 === t ? void 0 : t.at(0);
              return null == i ? void 0 : i.fromSec;
            },
            get endSec() {
              var i;
              let t =
                null === (i = e.lines) || void 0 === i ? void 0 : i.at(-1);
              return null == t ? void 0 : t.toSec;
            },
            get hasWriters() {
              var a;
              return !!(
                e.writers &&
                (null === (a = e.writers) || void 0 === a ? void 0 : a.length) >
                  0
              );
            },
            get hasInvalidLyrics() {
              var n;
              return !!(
                e.loadingState === d.Gu.RESOLVE &&
                (null === (n = e.lines) || void 0 === n ? void 0 : n.length) ===
                  0
              );
            },
          }))
          .actions((e) => {
            let t = {
              setVisible() {
                e.isVisible = !0;
              },
              setInvisible() {
                e.isVisible = !1;
              },
              getActiveLineIndex: (t) => {
                if (
                  (e.startSec && t < e.startSec) ||
                  (e.endSec && t > e.endSec)
                )
                  return null;
                let i = (e.lines || []).findIndex(
                  (e) => t >= e.fromSec && e.toSec >= t,
                );
                return i >= 0 ? i : null;
              },
              getData: (0, ta.ls)(function* (i) {
                let { tracksResource: a, modelActionsLogger: n } = (0, ta.dU)(
                  e,
                );
                if (i)
                  try {
                    e.loadingState = d.Gu.PENDING;
                    let {
                      downloadUrl: n,
                      major: r,
                      externalLyricId: l,
                      lyricId: o,
                      writers: s,
                    } = yield a.getLyrics((0, B.o)(i, tr.yG.LRC));
                    (e.major = (0, c.jp)(r)),
                      (e.externalLyricId = l),
                      (e.lyricId = o),
                      (e.writers = (0, ta.pj)(s)),
                      (e.currentTrackId = i),
                      (e.hasLyricsViewed = !1),
                      yield t.downloadSyncLyrics(n),
                      (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = d.Gu.REJECT), n.error(t);
                  }
              }),
              downloadSyncLyrics: (0, ta.ls)(function* (t) {
                let { tracksResource: i } = (0, ta.dU)(e),
                  a = yield i.getLyricsText(t);
                e.lines = (0, ta.pj)(ts(a));
              }),
              sendViews: (0, ta.ls)(function* (t) {
                let { contextId: i, contextType: a } = t,
                  { lyricViewsResource: n, modelActionsLogger: r } = (0, ta.dU)(
                    e,
                  );
                if (e.loadingState === d.Gu.RESOLVE)
                  try {
                    if (
                      !e.major ||
                      !e.lyricId ||
                      !e.externalLyricId ||
                      !e.currentTrackId
                    )
                      return;
                    yield n.sendViews({
                      lyricViews: [
                        {
                          id: (0, tn.Z)(),
                          trackId: e.currentTrackId,
                          majorId: e.major.id,
                          lyricId: e.lyricId,
                          externalLyricId: e.externalLyricId,
                          lyricFormat: tr.yG.LRC,
                          albumId: a === y.Ak.Album && i ? i : void 0,
                          playlistId: a === y.Ak.Playlist && i ? i : void 0,
                        },
                      ],
                    }),
                      (e.hasLyricsViewed = !0);
                  } catch (e) {
                    r.error(e);
                  }
              }),
            };
            return t;
          });
      var tu = i(13196);
      let t_ = ta.V5.model("FullscreenPlayer", {
        syncLyrics: td,
        modal: tu.KL,
      }).actions((e) => ({
        showFullscreenPlayerModal() {
          e.syncLyrics.setInvisible(), e.modal.open();
        },
        showSyncLyricsModal() {
          e.syncLyrics.setVisible(), e.modal.open();
        },
      }));
    },
    12581: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return ed;
        },
        L: function () {
          return g;
        },
      });
      var a,
        n,
        r = i(42288),
        l = i(10542),
        o = i(84338),
        s = i(15419),
        c = i(44367),
        d = i(13196),
        u = i(33589);
      let _ = (e, t) => {
          var i, a;
          let n = null == t ? void 0 : t.map(u.tR);
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
            albumArtists: n,
          });
        },
        m = (e) => {
          var t, i;
          return (0, r.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        p = (e) => {
          var t, i;
          return (0, r.pj)({
            id: "".concat(e.uid, ":").concat(e.kind),
            uuid: e.playlistUuid,
            title: e.title,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        v = (e) => {
          var t;
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: e.coverUri,
            averageColor:
              null === (t = e.derivedColors) || void 0 === t
                ? void 0
                : t.average,
          });
        };
      var y = i(75545);
      let x = (e, t) => {
        let i = (0, y.Vt)(e, t);
        if (null == t ? void 0 : t.albumId) {
          var a, n;
          let e = i.albums.find((e) => String(e.id) === String(t.albumId));
          return {
            ...i,
            isBest:
              null == e
                ? void 0
                : null === (a = e.bestAlbumTracks) || void 0 === a
                  ? void 0
                  : a.includes(Number(i.id)),
            positionInAlbum:
              null == e
                ? void 0
                : null === (n = e.trackPosition) || void 0 === n
                  ? void 0
                  : n.index,
          };
        }
        return (0, r.pj)({ ...i });
      };
      ((a = n || (n = {})).ALBUM = "album"),
        (a.ARTIST = "artist"),
        (a.PLAYLIST = "playlist"),
        (a.TRACK = "track");
      let h = r.V5.model("TrailerMeta", {
        id: r.V5.string,
        title: r.V5.maybe(r.V5.string),
        uuid: r.V5.maybe(r.V5.string),
        coverUri: r.V5.maybe(r.V5.string),
        averageColor: r.V5.maybe(r.V5.string),
        albumArtists: r.V5.maybe(r.V5.array(u.Go)),
      }).views((e) => ({
        getUrl(t) {
          switch (t) {
            case n.ALBUM:
              return "/album/".concat(e.id);
            case n.ARTIST:
              return "/artist/".concat(e.id);
            case n.PLAYLIST:
              return "/playlists/".concat(e.uuid);
            case n.TRACK:
              return;
          }
        },
      }));
      var C = i(75191);
      let b = r.V5.model("TrailerState", {
          contextType: r.V5.maybeNull(r.V5.enumeration(Object.values(o.Ak))),
          contextId: r.V5.maybeNull(r.V5.string),
          entityMeta: r.V5.maybeNull(C.s$),
          status: r.V5.enumeration(Object.values(s.Xz)),
        }).actions((e) => ({
          setContextId: (t) => {
            e.contextId = String(t);
          },
          setContextType: (t) => {
            e.contextType = t;
          },
          setEntityMeta: (t) => {
            t && t.data.meta && (e.entityMeta = (0, C.B5)(t));
          },
          setStatus: (t) => {
            e.status = t;
          },
        })),
        f = y.le
          .props({
            isBest: r.V5.maybe(r.V5.boolean),
            positionInAlbum: r.V5.maybe(r.V5.number),
          })
          .named("TrailerTrack"),
        g = r.V5.model("Trailer", {
          id: r.V5.maybeNull(r.V5.string),
          loadingState: r.V5.enumeration(Object.values(c.Gu)),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          modal: d.KL,
          variant: r.V5.maybeNull(r.V5.enumeration(Object.values(n))),
          tracks: r.V5.maybeNull(r.V5.array(f)),
          meta: r.V5.maybeNull(h),
          state: b,
          withAnimation: r.V5.boolean,
          shouldAutoStartPlaying: r.V5.boolean,
          sonataStatusBeforeTrailerStart: r.V5.enumeration(Object.values(s.Xz)),
          isManuallyPaused: r.V5.boolean,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === c.Gu.IDLE || e.loadingState === c.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === c.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === c.Gu.REJECT;
            },
            get isNotFound() {
              var t;
              let i =
                  e.loadingState === c.Gu.RESOLVE &&
                  (null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                a = e.errorStatusCode === l.CN.NOT_FOUND;
              return i || a;
            },
          }))
          .actions((e) => {
            let t = {
              setAnimationState(t) {
                e.withAnimation = t;
              },
              setShouldAutoStartPlaying(t) {
                e.shouldAutoStartPlaying = t;
              },
              setIsManuallyPaused(t) {
                e.isManuallyPaused = t;
              },
              openArtistTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.reset(),
                  (e.variant = n.ARTIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getArtistTrailer(i);
              },
              openAlbumTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.reset(),
                  (e.variant = n.ALBUM),
                  (e.id = String(i)),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getAlbumTrailer(i);
              },
              openPlaylistTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.reset(),
                  (e.variant = n.PLAYLIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getPlaylistTrailer(i);
              },
              openTrackTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.reset(),
                  (e.variant = n.TRACK),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getTrackTrailer(i);
              },
              getArtistTrailer: (0, r.ls)(function* (i) {
                let { artistsResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    e.loadingState = c.Gu.PENDING;
                    let { artist: t, trailer: n } = yield a.getTrailer({
                      artistId: i,
                    });
                    n.tracks &&
                      (e.tracks = (0, r.pj)(
                        n.tracks.map((e) => x(e, { isSmartPreview: !0 })),
                      )),
                      t && (e.meta = m(t)),
                      (e.loadingState = c.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, r.ls)(function* (i) {
                let { albumResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    e.loadingState = c.Gu.PENDING;
                    let {
                      album: t,
                      artists: n,
                      trailer: l,
                    } = yield a.getTrailer({ albumId: i });
                    l.tracks &&
                      (e.tracks = (0, r.pj)(
                        l.tracks.map((e) =>
                          x(e, { isSmartPreview: !0, albumId: t.id }),
                        ),
                      )),
                      t && (e.meta = _(t, n)),
                      (e.loadingState = c.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, r.ls)(function* (i) {
                let { usersResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    e.loadingState = c.Gu.PENDING;
                    let { uid: t, kind: n } = (0, o.bo)(i);
                    if (!t || !n) {
                      e.loadingState = c.Gu.REJECT;
                      return;
                    }
                    let { playlist: l, trailer: s } =
                      yield a.getPlaylistTrailer({
                        userId: t,
                        playlistKind: Number(n),
                      });
                    s.tracks &&
                      (e.tracks = (0, r.pj)(
                        s.tracks.map((e) => x(e, { isSmartPreview: !0 })),
                      )),
                      l && (e.meta = p(l)),
                      (e.loadingState = c.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, r.ls)(function* (i) {
                let { tracksResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    e.loadingState = c.Gu.PENDING;
                    let { track: t } = yield a.getTrailer({ trackId: i });
                    t &&
                      ((e.tracks = (0, r.pj)([x(t, { isSmartPreview: !0 })])),
                      (e.meta = v(t))),
                      (e.loadingState = c.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { modelActionsLogger: i } = (0, r.dU)(e);
                i.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== c.Gu.IDLE &&
                    (e.loadingState = c.Gu.REJECT);
              },
              reset() {
                (e.loadingState = c.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.variant = null),
                  (e.id = null),
                  (e.tracks = null),
                  (e.meta = null),
                  (e.withAnimation = !0),
                  (e.shouldAutoStartPlaying = !0),
                  (e.sonataStatusBeforeTrailerStart = s.Xz.IDLE),
                  (e.isManuallyPaused = !0);
              },
            };
            return t;
          });
      var N = i(9753),
        j = i(9544),
        S = i(98639),
        w = i(80542),
        P = i(39513),
        L = i(28852),
        k = i(89352),
        M = i(60836),
        A = i(67868);
      let B = (e) => {
        let { variant: t, id: i, from: a, uuid: r } = e;
        switch (t) {
          case n.ALBUM:
            return {
              type: o.Ak.Album,
              trailer: !0,
              meta: { id: Number(i) },
              from: a,
            };
          case n.ARTIST:
            return {
              type: o.Ak.Artist,
              trailer: !0,
              meta: { id: String(i) },
              from: a,
            };
          case n.PLAYLIST:
            return {
              type: o.Ak.Playlist,
              trailer: !0,
              meta: { id: String(i), uuid: r },
              from: a,
            };
          case n.TRACK:
            return {
              type: o.Ak.Various,
              trailer: !0,
              meta: { id: String(i) },
              from: a,
            };
        }
      };
      var I = i(31014),
        E = i(2570),
        T = i(49025),
        R = i.n(T);
      let V = (0, j.Pi)(() => {
          let { trailer: e } = (0, c.oR)(),
            { variant: t, id: i } = e,
            a = (0, S.useCallback)(() => {
              if (t && i)
                switch (t) {
                  case n.ALBUM:
                    e.getAlbumTrailer(Number(i));
                    break;
                  case n.ARTIST:
                    e.getArtistTrailer(i);
                    break;
                  case n.PLAYLIST:
                    e.getPlaylistTrailer(i);
                    break;
                  case n.TRACK:
                    e.getTrackTrailer(i);
                }
            }, [i, e, t]);
          return (0, N.jsxs)("div", {
            className: R().root,
            children: [
              (0, N.jsxs)("div", {
                className: R().textContainer,
                children: [
                  (0, N.jsx)(E.Heading, {
                    variant: "h2",
                    className: R().title,
                    size: "xs",
                    weight: "bold",
                    children: (0, N.jsx)(I.Z, {
                      id: "error-messages.something-went-wrong",
                    }),
                  }),
                  (0, N.jsx)(E.Caption, {
                    className: R().description,
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, N.jsx)(I.Z, {
                      id: "trailer.something-went-wrong-description",
                    }),
                  }),
                ],
              }),
              (0, N.jsx)(P.z, {
                onClick: a,
                color: "secondary",
                size: "default",
                radius: "xxxl",
                children: (0, N.jsx)(E.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, N.jsx)(I.Z, { id: "page-error.reload" }),
                }),
              }),
            ],
          });
        }),
        D = () =>
          (0, N.jsx)("div", {
            className: R().root,
            children: (0, N.jsxs)("div", {
              className: R().textContainer,
              children: [
                (0, N.jsx)(E.Heading, {
                  variant: "h2",
                  className: R().title,
                  size: "xs",
                  weight: "bold",
                  children: (0, N.jsx)(I.Z, { id: "trailer.not-found-title" }),
                }),
                (0, N.jsx)(E.Caption, {
                  className: R().description,
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: (0, N.jsx)(I.Z, {
                    id: "trailer.not-found-description",
                  }),
                }),
              ],
            }),
          });
      var z = i(90679);
      let W = (e) => {
          let { variant: t, id: i, from: a, uuid: r } = e;
          switch (t) {
            case n.ALBUM:
              return { type: o.Ak.Album, meta: { id: Number(i) }, from: a };
            case n.ARTIST:
              return { type: o.Ak.Artist, meta: { id: String(i) }, from: a };
            case n.PLAYLIST:
              return {
                type: o.Ak.Playlist,
                meta: { id: String(i), uuid: r },
                from: a,
              };
            case n.TRACK:
              return { type: o.Ak.Various, meta: { id: String(i) }, from: a };
          }
        },
        O = (e) => {
          let {
            trailer: { meta: t },
            artist: i,
            album: a,
            playlist: r,
          } = (0, c.oR)();
          switch (e) {
            case n.ALBUM:
              return a.id === Number(null == t ? void 0 : t.id);
            case n.ARTIST:
              return i.id === (null == t ? void 0 : t.id);
            case n.PLAYLIST:
              return r.uuid === (null == t ? void 0 : t.uuid);
            case n.TRACK:
              return !1;
          }
        };
      var F = i(82705),
        U = i.n(F);
      let G = (e) => {
          let { isActive: t, className: i, isCurrentEntityPage: a } = e;
          return (0, N.jsxs)("div", {
            className: (0, M.W)(U().root, i),
            children: [
              (0, N.jsx)(z.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: U().playButtonShimmer,
              }),
              a &&
                (0, N.jsx)(z.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: U().linkButtonShimmer,
                }),
            ],
          });
        },
        Q = (0, j.Pi)((e) => {
          var t;
          let {
              variant: i,
              isShimmerVisible: a,
              isShimmerActive: r,
              className: l,
            } = e,
            {
              trailer: { state: o, meta: d, modal: u },
            } = (0, c.oR)(),
            _ = (0, c.R$)(),
            m = (0, c.x5)({ pageId: i, blockId: c.aU.TRAILER }),
            p = (0, c.s0)(null == d ? void 0 : d.getUrl(i)),
            v = O(i),
            y = !v && i !== n.TRACK,
            x = (0, S.useCallback)(() => {
              null == _ || _.stop(c.ji.TRAILER), u.close(), y && p();
              let e = W({
                variant: i,
                id: null == d ? void 0 : d.id,
                uuid: null == d ? void 0 : d.uuid,
                from: m,
              });
              if (o.status === s.Xz.PLAYING) {
                var t;
                null == _ ||
                  _.playContext({
                    contextData: e,
                    queueParams: {
                      entityId:
                        null === (t = o.entityMeta) || void 0 === t
                          ? void 0
                          : t.id,
                    },
                  });
              } else
                null == _ ||
                  _.playContext({ contextData: e, queueParams: { index: 0 } });
            }, [
              m,
              p,
              y,
              null == d ? void 0 : d.id,
              null == d ? void 0 : d.uuid,
              u,
              _,
              null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
              o.status,
              i,
            ]),
            h = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: (0, M.W)(U().root, l),
                  children: [
                    (0, N.jsx)(P.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, N.jsx)(L.J, { variant: "play", size: "xxxs" }),
                      className: U().button,
                      onClick: x,
                      children: (0, N.jsx)(I.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    y &&
                      (0, N.jsx)(P.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: p,
                        className: U().button,
                        children: (0, N.jsx)(I.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [l, x, p, y],
            );
          return a
            ? G({ isActive: r, isCurrentEntityPage: v, className: l })
            : h;
        });
      var Z = i(86939),
        H = i(12404),
        q = i(65094),
        Y = i.n(q);
      let J = {
          [n.ALBUM]: (0, N.jsx)(I.Z, { id: "trailer.title-album" }),
          [n.ARTIST]: (0, N.jsx)(I.Z, { id: "trailer.title-artist" }),
          [n.PLAYLIST]: (0, N.jsx)(I.Z, { id: "trailer.title-playlist" }),
          [n.TRACK]: (0, N.jsx)(I.Z, { id: "trailer.title-track" }),
        },
        K = (e, t) =>
          (0, N.jsx)("div", {
            className: Y().coverContainer,
            children: (0, N.jsx)(z.Shimmer, {
              isActive: e,
              radius: t,
              className: Y().cover,
            }),
          }),
        X = (e) =>
          (0, N.jsxs)("div", {
            className: Y().textContainer,
            children: [
              (0, N.jsx)("div", {
                className: Y().shimmerContainer,
                children: (0, N.jsx)(z.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: Y().titleShimmer,
                }),
              }),
              (0, N.jsx)("div", {
                className: Y().shimmerContainer,
                children: (0, N.jsx)(z.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: Y().descriptionShimmer,
                }),
              }),
            ],
          }),
        $ = (0, j.Pi)((e) => {
          let {
              variant: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              className: r,
            } = e,
            {
              trailer: { meta: l },
            } = (0, c.oR)(),
            o = (0, c.x5)({ pageId: t, blockId: c.aU.TRAILER }),
            s = t === n.ARTIST ? "round" : "s",
            { togglePlay: d, isPlaying: u } = (0, c.bA)({
              playContextParams: {
                contextData: B({
                  variant: t,
                  id: null == l ? void 0 : l.id,
                  uuid: null == l ? void 0 : l.uuid,
                  from: o,
                }),
                loadContextMeta: !0,
              },
            }),
            _ = (0, S.useMemo)(() => {
              let e = {
                "--icon-background-color": null == l ? void 0 : l.averageColor,
              };
              return (0, N.jsxs)("div", {
                className: Y().coverContainer,
                children: [
                  (0, N.jsx)(H.Paper, {
                    radius: s,
                    className: Y().cover,
                    withShadow: !0,
                    children: (0, N.jsx)(Z.Image, {
                      "aria-hidden": !0,
                      src: null == l ? void 0 : l.coverUri,
                      size: 100,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, N.jsx)("div", {
                    className: Y().iconContainer,
                    style: e,
                    children: (0, N.jsx)(L.J, {
                      variant: "trailer",
                      size: "xs",
                      className: Y().icon,
                    }),
                  }),
                ],
              });
            }, [
              s,
              null == l ? void 0 : l.averageColor,
              null == l ? void 0 : l.coverUri,
            ]),
            m = (0, S.useMemo)(() => {
              let e = null == l ? void 0 : l.getUrl(t);
              return e
                ? (0, N.jsx)(A.rU, {
                    href: e,
                    className: Y().link,
                    children: (0, N.jsx)(E.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: Y().text,
                      children: null == l ? void 0 : l.title,
                    }),
                  })
                : (0, N.jsx)(E.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: Y().text,
                    children: null == l ? void 0 : l.title,
                  });
            }, [l, t]),
            p = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: Y().textContainer,
                  children: [
                    (0, N.jsx)(E.Heading, {
                      variant: "h1",
                      className: (0, M.W)(Y().text, Y().title),
                      lineClamp: 1,
                      children: J[t],
                    }),
                    m,
                  ],
                }),
              [m, t],
            );
          return (0, N.jsxs)("div", {
            className: (0, M.W)(Y().root, r),
            children: [
              i ? K(a, s) : _,
              i ? X(a) : p,
              !i &&
                (0, N.jsx)(A.JM, {
                  className: Y().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: u,
                  iconClassName: Y().playButtonIcon,
                  onClick: d,
                }),
            ],
          });
        }),
        ee = (e) => {
          var t;
          let i = (0, c.R$)(),
            {
              trailer: { state: a },
            } = (0, c.oR)(),
            [n, r] = (0, S.useState)(0),
            l =
              (null === (t = a.entityMeta) || void 0 === t ? void 0 : t.id) ===
              e;
          return (
            (0, S.useEffect)(() => {
              let e =
                null == i
                  ? void 0
                  : i
                      .getState(c.ji.TRAILER)
                      .playerState.progress.onChange(() => {
                        let e = i.getState(c.ji.TRAILER).playerState,
                          t = e.progress.value;
                        l || r(0),
                          e.status.value === s.Xz.PLAYING &&
                            l &&
                            r((t.position / t.duration) * 100);
                      });
              return () => {
                null == e || e();
              };
            }, [l, i]),
            { isActive: l, progress: n }
          );
        };
      var et = i(80684),
        ei = i.n(et);
      let ea = (0, j.Pi)((e) => {
        let { variant: t, track: i, playContextParams: a } = e,
          {
            trailer: { meta: r },
          } = (0, c.oR)(),
          l = t === n.ALBUM ? y.dn : y.fY,
          { isActive: o, progress: s } = ee(i.id),
          d = (0, S.useMemo)(
            () => ({ "--track-progress": "".concat(s || 0, "%") }),
            [s],
          );
        return (0, N.jsx)("div", {
          className: (0, M.W)(ei().root, { [ei().root_active]: o }),
          style: d,
          children: (0, N.jsx)(l, {
            position: i.positionInAlbum,
            withLightning: !!(null == i ? void 0 : i.isBest),
            track: i,
            playContextParams: a,
            albumArtists: null == r ? void 0 : r.albumArtists,
          }),
        });
      });
      var en = i(55560),
        er = i.n(en);
      let el = (e, t) => {
          let i = t === n.ALBUM ? c.Lx.ALBUM : c.Lx.PLAYLIST;
          return Array.from({ length: t === n.TRACK ? 1 : 5 }, (t, a) =>
            (0, N.jsx)(
              "div",
              {
                className: er().trackContainer,
                children: (0, N.jsx)(A.DX, {
                  isActive: e,
                  className: (0, M.W)(er().trackShimmer, {
                    [er().albumShimmer]: i === c.Lx.ALBUM,
                  }),
                  variant: i,
                }),
              },
              a,
            ),
          );
        },
        eo = (0, j.Pi)((e) => {
          let { variant: t } = e,
            { trailer: i } = (0, c.oR)(),
            {
              isLoading: a,
              isRejected: n,
              tracks: r,
              meta: l,
              state: o,
              shouldAutoStartPlaying: s,
              setShouldAutoStartPlaying: d,
              isNotFound: u,
            } = i,
            _ = (0, c.R$)(),
            m = (0, c.x5)({ pageId: t, blockId: c.aU.TRAILER }),
            p = a || n;
          (0, S.useEffect)(() => {
            (null == l ? void 0 : l.id) &&
              s &&
              (null == _ ||
                _.playContext(
                  {
                    contextData: B({
                      variant: t,
                      id: null == l ? void 0 : l.id,
                      uuid: null == l ? void 0 : l.uuid,
                      from: m,
                    }),
                    queueParams: { index: 0 },
                    loadContextMeta: !0,
                  },
                  c.ji.TRAILER,
                ),
              d(!1));
          }, [
            m,
            null == l ? void 0 : l.id,
            null == l ? void 0 : l.uuid,
            d,
            s,
            _,
            o.status,
            t,
          ]);
          let v = (0, S.useCallback)(
              (e) => ({
                contextData: B({
                  variant: t,
                  id: null == l ? void 0 : l.id,
                  uuid: null == l ? void 0 : l.uuid,
                  from: m,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [m, null == l ? void 0 : l.id, null == l ? void 0 : l.uuid, t],
            ),
            y = (0, S.useMemo)(
              () =>
                p
                  ? el(a, t)
                  : null == r
                    ? void 0
                    : r.map((e, i) =>
                        (0, N.jsx)(
                          ea,
                          { variant: t, track: e, playContextParams: v(i) },
                          e.id,
                        ),
                      ),
              [v, a, p, r, t],
            );
          return n
            ? u
              ? (0, N.jsx)(D, {})
              : (0, N.jsx)(V, {})
            : (0, N.jsxs)("div", {
                className: er().root,
                children: [
                  (0, N.jsx)($, {
                    isShimmerVisible: p,
                    isShimmerActive: a,
                    variant: t,
                    className: er().header,
                  }),
                  y,
                  (0, N.jsx)(Q, {
                    isShimmerVisible: p,
                    isShimmerActive: a,
                    variant: t,
                    className: er().footer,
                  }),
                ],
              });
        });
      var es = i(17601),
        ec = i.n(es);
      let ed = (0, j.Pi)(() => {
        let { settings: e, trailer: t, sonataState: i } = (0, c.oR)(),
          a = (0, c.R$)(),
          { contentRef: n } = (0, c.$Y)(),
          { formatMessage: r } = (0, w.Z)(),
          l = e.layout === c.t8.Mobile;
        (0, S.useEffect)(() => {
          let e =
              null == a
                ? void 0
                : a
                    .getState(c.ji.TRAILER)
                    .queueState.currentEntity.onChange((e) => {
                      var i;
                      let a = null == e ? void 0 : e.context.data.type,
                        n = null == e ? void 0 : e.context.data.meta.id;
                      t.state.setEntityMeta(
                        null !== (i = null == e ? void 0 : e.entity) &&
                          void 0 !== i
                          ? i
                          : null,
                      ),
                        a && t.state.setContextType(a),
                        n && t.state.setContextId(n);
                    }),
            i =
              null == a
                ? void 0
                : a.getState(c.ji.TRAILER).playerState.status.onChange((e) => {
                    e && t.state.setStatus(e);
                  }),
            n =
              null == a
                ? void 0
                : a.state.playerState.volume.onChange(() => {
                    let e = a.state.playerState.volume.value;
                    "number" == typeof e && a.setVolume(e, c.ji.TRAILER);
                  });
          return () => {
            null == e || e(), null == i || i(), null == n || n();
          };
        }, [a, t.state]);
        let o = (0, S.useCallback)(() => {
          null == a || a.stop(c.ji.TRAILER),
            t.sonataStatusBeforeTrailerStart !== s.Xz.PLAYING ||
              t.isManuallyPaused ||
              null == a ||
              a.resume(),
            t.setAnimationState(!0),
            t.modal.close();
        }, [a, t]);
        return (
          (0, S.useEffect)(() => {
            t.modal.isOpened &&
              t.isLoaded &&
              (i.status === s.Xz.PLAYING && o(), t.setAnimationState(!1));
          }, [o, i.status, t, t.modal.isOpened]),
          (0, N.jsxs)(k.u, {
            size: "fitContent",
            placement: l ? "default" : "right",
            open: t.modal.isOpened,
            onOpenChange: t.modal.onOpenChange,
            onClose: o,
            className: ec().root,
            contentClassName: ec().modalContent,
            portalNode: l ? null : n,
            showHeader: !1,
            withOverlay: !1,
            closeOnOutsidePress: !1,
            withAnimation: t.withAnimation,
            children: [
              (0, N.jsx)("div", {
                className: ec().header,
                children: (0, N.jsx)(P.z, {
                  radius: "round",
                  color: "secondary",
                  size: "xxs",
                  icon: (0, N.jsx)(L.J, { variant: "close", size: "xxs" }),
                  onClick: o,
                  "aria-label": r({ id: "trailer.close" }),
                }),
              }),
              t.variant && (0, N.jsx)(eo, { variant: t.variant }),
            ],
          })
        );
      });
    },
    91147: function (e) {
      e.exports = {
        root_primary: "CommunicationButton_root_primary__rrmax",
        root_plus: "CommunicationButton_root_plus__d48MV",
        root_secondary: "CommunicationButton_root_secondary__YQujH",
        text: "CommunicationButton_text__kObnq",
      };
    },
    4688: function (e) {
      e.exports = {
        root: "BarBelow_root__KFexT",
        root_hidden: "BarBelow_root_hidden__eTKvU",
        root_show: "BarBelow_root_show__yIQBX",
        show: "BarBelow_show__5GQBP",
        root_hide: "BarBelow_root_hide__d1a_5",
        hide: "BarBelow_hide__a0dwD",
        image: "BarBelow_image__GfExj",
        content: "BarBelow_content__GWWbR",
        title: "BarBelow_title__hBNPY",
        text: "BarBelow_text__tU_Rm",
        buttons: "BarBelow_buttons__XGwDQ",
      };
    },
    33060: function (e) {
      e.exports = {
        timecode: "ChangeTimecode_timecode__UScFt",
        root: "ChangeTimecode_root__QxEw_",
        root_withTimecode: "ChangeTimecode_root_withTimecode__eJhYI",
        root_mobile: "ChangeTimecode_root_mobile__SzOdx",
        root_fullscreen: "ChangeTimecode_root_fullscreen__FA6r0",
        slider: "ChangeTimecode_slider__P4qmT",
      };
    },
    58163: function (e) {
      e.exports = {
        root: "Timecode_root__TLT75",
        root_start: "Timecode_root_start__pHG5N",
        root_end: "Timecode_root_end__LLQsh",
      };
    },
    95904: function (e) {
      e.exports = {
        root: "ChangeVolume_root__HDxtA",
        icon: "ChangeVolume_icon__5Zv2a",
        button: "ChangeVolume_button__4HLEr",
      };
    },
    29177: function (e) {
      e.exports = {
        modalHeader: "CommunicationModal_modalHeader__TnzU6",
        modalContent: "CommunicationModal_modalContent__d8REH",
        container: "CommunicationModal_container__BIgb7",
        wrapper: "CommunicationModal_wrapper__SRy17",
        imageWrapper: "CommunicationModal_imageWrapper__LOr5C",
        imageWrapper_content: "CommunicationModal_imageWrapper_content__PfjQl",
        imageWrapper_header: "CommunicationModal_imageWrapper_header__8wsRZ",
        image: "CommunicationModal_image__qzXK8",
        title: "CommunicationModal_title__yvFAn",
        text: "CommunicationModal_text__gGaLU",
        buttons: "CommunicationModal_buttons__MDmp2",
        disclaimerWrapper: "CommunicationModal_disclaimerWrapper__pMRYf",
        disclaimer: "CommunicationModal_disclaimer__NJJSA",
        disclaimerLink: "CommunicationModal_disclaimerLink__8yuBO",
        root: "CommunicationModal_root__1dOYE",
        root_modal: "CommunicationModal_root_modal__u_igG",
        button: "CommunicationModal_button__qysqU",
        root_fullscreen: "CommunicationModal_root_fullscreen__41Y5Y",
        buttonText: "CommunicationModal_buttonText__2XS8u",
      };
    },
    31695: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    3065: function (e) {
      e.exports = {
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        root: "NavbarDesktop_root__scYzp",
        button: "NavbarDesktop_button__x_Ik1",
        important: "NavbarDesktop_important__fRfE5",
        logoWrapper: "NavbarDesktop_logoWrapper__89ce6",
        navigation: "NavbarDesktop_navigation__dLUGW",
        logoLink: "NavbarDesktop_logoLink__KR0Dk",
        logo: "NavbarDesktop_logo__Z4jGx",
        collapseButtonTooltip_hidden:
          "NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ",
        title: "NavbarDesktop_title__OrnHN",
        title_animate: "NavbarDesktop_title_animate__XLxaQ",
        animation_show: "NavbarDesktop_animation_show__pRFj9",
        title_collapsed: "NavbarDesktop_title_collapsed__IH9Bc",
        animation_hide: "NavbarDesktop_animation_hide__8VxPs",
        pinsList: "NavbarDesktop_pinsList___jXIM",
        plus: "NavbarDesktop_plus__etQJm",
        plusButtonContainer: "NavbarDesktop_plusButtonContainer__C7Wf5",
        plusButtonContainer_enter:
          "NavbarDesktop_plusButtonContainer_enter__VRwh3",
        plusButtonContainer_enter_active:
          "NavbarDesktop_plusButtonContainer_enter_active__4fkf5",
        plusButtonContainer_exit:
          "NavbarDesktop_plusButtonContainer_exit__jtA7i",
        plusButtonContainer_exit_active:
          "NavbarDesktop_plusButtonContainer_exit_active__CYCui",
        plusBar: "NavbarDesktop_plusBar__E6cfw",
        plusBar_enter: "NavbarDesktop_plusBar_enter__om_ax",
        plusBar_enter_active: "NavbarDesktop_plusBar_enter_active__2VFPS",
        animation_show_scale: "NavbarDesktop_animation_show_scale___HzwE",
        plusBar_exit: "NavbarDesktop_plusBar_exit__bgdAw",
        plusBar_exit_active: "NavbarDesktop_plusBar_exit_active__s_9sz",
        animation_hide_scale: "NavbarDesktop_animation_hide_scale__mzAvb",
        user: "NavbarDesktop_user__dzbuH",
        userMeta_animate: "NavbarDesktop_userMeta_animate__3KkeR",
        userMeta_collapsed: "NavbarDesktop_userMeta_collapsed__rTdFz",
        ndaBadge: "NavbarDesktop_ndaBadge__moML6",
      };
    },
    24776: function (e) {
      e.exports = {
        text: "NavbarDesktopNDABadge_text__Yp1FL",
        text_collapsed: "NavbarDesktopNDABadge_text_collapsed__wwW9d",
        text_animated: "NavbarDesktopNDABadge_text_animated__d1ktb",
        show: "NavbarDesktopNDABadge_show__NeziW",
        hide: "NavbarDesktopNDABadge_hide__nQ832",
        root: "NavbarDesktopNDABadge_root__jgcw2",
        nda: "NavbarDesktopNDABadge_nda__0rdWY",
        tooltipContent: "NavbarDesktopNDABadge_tooltipContent__CmQZ_",
      };
    },
    73061: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
        ndaBadge: "NavbarMobile_ndaBadge__QNk7h",
      };
    },
    14825: function (e) {
      e.exports = {
        root: "NavbarMobileNDABadge_root__4SoLG",
        nda: "NavbarMobileNDABadge_nda__0SDFn",
        text: "NavbarMobileNDABadge_text__e_Iz4",
      };
    },
    64638: function (e) {
      e.exports = {
        root: "Pin_root__UyplT",
        ripple: "Pin_ripple__Vzpzs",
        link: "Pin_link__nz6I7",
        root_withoutLink: "Pin_root_withoutLink__fr1XH",
        info: "Pin_info__x_7Zx",
        info_collapsed: "Pin_info_collapsed__bF9ac",
        info_animated: "Pin_info_animated__AQQZk",
        show: "Pin_show__xSkOa",
        hide: "Pin_hide__RCc9X",
        meta: "Pin_meta__MzX_7",
        contextMenu: "Pin_contextMenu__WGmhp",
        contextMenu_hidden: "Pin_contextMenu_hidden__xksGY",
        title: "Pin_title__Jw5WW",
        subtitle: "Pin_subtitle__rb8Gq",
        cover: "Pin_cover__7ofYY",
        cover_withAnimation: "Pin_cover_withAnimation__2Z2n6",
        show_and_scale: "Pin_show_and_scale__VdNfj",
      };
    },
    64318: function (e) {
      e.exports = {
        contextMenu: "PinItem_contextMenu__VwiFp",
        contextMenu_visible: "PinItem_contextMenu_visible__Zgwkh",
        root: "PinItem_root__WSoCn",
        image: "PinItem_image__Ow56U",
        animation: "PinItem_animation__syCWX",
        cover: "PinItem_cover__9TcjE",
        tooltip: "PinItem_tooltip__BGwBw",
      };
    },
    8519: function (e) {
      e.exports = {
        root: "PinsList_root__LN_2Z",
        content: "PinsList_content__9RG7s",
        pin_enter: "PinsList_pin_enter__2p2_6",
        pin_enter_active: "PinsList_pin_enter_active__eNGlc",
        "enter-fade": "PinsList_enter-fade__G_QY8",
        "enter-move": "PinsList_enter-move__DSAXH",
        pin_exit: "PinsList_pin_exit__y_gcM",
        pin_exit_active: "PinsList_pin_exit_active__rF5Je",
        "exit-fade": "PinsList_exit-fade__M6fYX",
        "exit-move": "PinsList_exit-move__Jtgi0",
      };
    },
    77314: function (e) {
      e.exports = {
        root: "PlusBar_root__yN9SZ",
        logos: "PlusBar_logos__8Gvj7",
        addition: "PlusBar_addition__npwOZ",
        title: "PlusBar_title__SwzSx",
        buttons: "PlusBar_buttons__QqSS4",
      };
    },
    67175: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktop_root___8vo1",
        important: "FullscreenPlayerDesktop_important__dGfiL",
        header: "FullscreenPlayerDesktop_header__OBhzq",
        modalContent: "FullscreenPlayerDesktop_modalContent__Zs_LC",
        notification: "FullscreenPlayerDesktop_notification__luD_J",
        closeButton: "FullscreenPlayerDesktop_closeButton__MQ64s",
        info: "FullscreenPlayerDesktop_info__W28Uk",
        artists: "FullscreenPlayerDesktop_artists__uYsKW",
        podcastAuthors: "FullscreenPlayerDesktop_podcastAuthors__20MgV",
        meta: "FullscreenPlayerDesktop_meta__1jT2G",
        title: "FullscreenPlayerDesktop_title__jCE_z",
        sliderContainer: "FullscreenPlayerDesktop_sliderContainer__dyeSe",
        slider: "FullscreenPlayerDesktop_slider__pnMep",
        poster: "FullscreenPlayerDesktop_poster__rU9SJ",
        poster_withSyncLyricsAnimation:
          "FullscreenPlayerDesktop_poster_withSyncLyricsAnimation__bPO0o",
        poster_withDisabledInsetTransition:
          "FullscreenPlayerDesktop_poster_withDisabledInsetTransition__IzMAy",
        syncLyrics: "FullscreenPlayerDesktop_syncLyrics__6emp4",
        syncLyricsContent: "FullscreenPlayerDesktop_syncLyricsContent__XfBlC",
        syncLyricsLoader: "FullscreenPlayerDesktop_syncLyricsLoader__N1I2u",
        syncLyricsCard: "FullscreenPlayerDesktop_syncLyricsCard__wsESf",
        syncLyricsCard_withAnimation:
          "FullscreenPlayerDesktop_syncLyricsCard_withAnimation__T_y0C",
        syncLyricsScroller: "FullscreenPlayerDesktop_syncLyricsScroller___rirI",
        syncLyricsFooter: "FullscreenPlayerDesktop_syncLyricsFooter__ioRt_",
        syncLyricsCounter: "FullscreenPlayerDesktop_syncLyricsCounter__zt6_S",
      };
    },
    43056: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopButton_root__qGgoC",
        button: "FullscreenPlayerDesktopButton_button__7NEl6",
      };
    },
    82120: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopControls_root__tviu4",
        root_visible: "FullscreenPlayerDesktopControls_root_visible__1b9xD",
        sonataControls: "FullscreenPlayerDesktopControls_sonataControls__9AIki",
        menuButton: "FullscreenPlayerDesktopControls_menuButton__R4cXl",
        likeButton: "FullscreenPlayerDesktopControls_likeButton__vpJ7S",
        likeButton_active:
          "FullscreenPlayerDesktopControls_likeButton_active__XltBK",
        menuButton_active:
          "FullscreenPlayerDesktopControls_menuButton_active__YZ8M8",
        fullscreenPlayerButton:
          "FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS",
        fullscreenPlayerButton_visible:
          "FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X",
      };
    },
    10751: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopPoster_root__d__YD",
        cover: "FullscreenPlayerDesktopPoster_cover__CDmhM",
      };
    },
    9410: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobile_root__Sqyh0",
        important: "FullscreenPlayerMobile_important__1lAN3",
        header: "FullscreenPlayerMobile_header__8KH28",
        headerCenter: "FullscreenPlayerMobile_headerCenter___EqSP",
        modalContent: "FullscreenPlayerMobile_modalContent__m2cbB",
        castButton: "FullscreenPlayerMobile_castButton__3ZgER",
        footer: "FullscreenPlayerMobile_footer__LRvhK",
        footerContainer: "FullscreenPlayerMobile_footerContainer__aupK1",
        syncLyricsButton_active:
          "FullscreenPlayerMobile_syncLyricsButton_active__6L4YF",
        syncLyricsButton: "FullscreenPlayerMobile_syncLyricsButton__1ui1W",
      };
    },
    18806: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobileContent_root__RITqv",
        wrapper: "FullscreenPlayerMobileContent_wrapper__JPmBe",
        syncLyrics: "FullscreenPlayerMobileContent_syncLyrics__HKUm0",
        trackInfoCoverContainer:
          "FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly",
        trackInfoCover: "FullscreenPlayerMobileContent_trackInfoCover__zsEEq",
        coverContainer: "FullscreenPlayerMobileContent_coverContainer__lTyMF",
        trackInfo: "FullscreenPlayerMobileContent_trackInfo__IPGjo",
        infoBlock: "FullscreenPlayerMobileContent_infoBlock__ZcRdn",
        infoBlock_withExpandedSyncLyrics:
          "FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX",
        coverWrapper: "FullscreenPlayerMobileContent_coverWrapper___Y6ll",
        coverWrapper_enter:
          "FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh",
        coverWrapper_enter_active:
          "FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of",
        "enter-fade": "FullscreenPlayerMobileContent_enter-fade__Q0KNn",
        coverWrapper_exit:
          "FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i",
        coverWrapper_exit_active:
          "FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE",
        "exit-fade": "FullscreenPlayerMobileContent_exit-fade__uS0jT",
        cover: "FullscreenPlayerMobileContent_cover__W6pz2",
        metaText: "FullscreenPlayerMobileContent_metaText__Fr74D",
        timeline: "FullscreenPlayerMobileContent_timeline__Pta9W",
        content: "FullscreenPlayerMobileContent_content__EAteH",
        syncLyricsContent:
          "FullscreenPlayerMobileContent_syncLyricsContent__qhWG_",
        syncLyricsLoader:
          "FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j",
        syncLyricsScroller:
          "FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL",
        syncLyricsFooter:
          "FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY",
        syncLyricsCounter:
          "FullscreenPlayerMobileContent_syncLyricsCounter___wm5g",
      };
    },
    9349: function (e) {
      e.exports = {
        root: "PlayingNow_root__0lQa8",
        textBlock: "PlayingNow_textBlock___CfRh",
        title: "PlayingNow_title__82csz",
        subTitle: "PlayingNow_subTitle__JNJfh",
        link: "PlayingNow_link__4gLK9",
      };
    },
    98776: function (e) {
      e.exports = {
        message: "NotificationChangeQuality_message__coCvn",
        changeButton: "NotificationChangeQuality_changeButton__Hzc3y",
        icon: "NotificationChangeQuality_icon__bOfQO",
      };
    },
    12683: function (e) {
      e.exports = { root: "PlayerBar_root__cXUnU" };
    },
    66846: function (e) {
      e.exports = {
        root: "PlayerBarDesktop_root__d2Hwi",
        info: "PlayerBarDesktop_info__56v53",
        infoCard: "PlayerBarDesktop_infoCard__tnLS6",
        coverContainer: "PlayerBarDesktop_coverContainer__2Z5nQ",
        cover: "PlayerBarDesktop_cover__IYLwR",
        description: "PlayerBarDesktop_description__eQ_tA",
        artists: "PlayerBarDesktop_artists__N5vpf",
        artistLink: "PlayerBarDesktop_artistLink__Btgdq",
        infoButtons: "PlayerBarDesktop_infoButtons__iSpa_",
        sonata: "PlayerBarDesktop_sonata__sJHY_",
        meta: "PlayerBarDesktop_meta__6sm58",
        settingsButton: "PlayerBarDesktop_settingsButton__jLkVn",
        dislikeButton: "PlayerBarDesktop_dislikeButton__XwMir",
        likeButton: "PlayerBarDesktop_likeButton__LKH4K",
      };
    },
    83249: function (e) {
      e.exports = {
        root: "PlayerBarMobile_root__cdKy_",
        progressBar: "PlayerBarMobile_progressBar___DmH8",
        info: "PlayerBarMobile_info__WmdhZ",
        infoCard: "PlayerBarMobile_infoCard__DCATu",
        coverContainer: "PlayerBarMobile_coverContainer__a3JDF",
        cover: "PlayerBarMobile_cover__pnJd1",
        description: "PlayerBarMobile_description__IxQ9L",
        artists: "PlayerBarMobile_artists__XVSBV",
        artistLink: "PlayerBarMobile_artistLink__pieMq",
        infoButtons: "PlayerBarMobile_infoButtons__JXxfv",
      };
    },
    55676: function (e) {
      e.exports = {
        root: "QualitySettingsContextMenu_root__fW5GK",
        root_withNewQuality:
          "QualitySettingsContextMenu_root_withNewQuality__jPTb8",
        root_withEqualizer:
          "QualitySettingsContextMenu_root_withEqualizer__GPjIg",
        popoverContent: "QualitySettingsContextMenu_popoverContent__I6gtY",
        header: "QualitySettingsContextMenu_header__YGH7p",
        list: "QualitySettingsContextMenu_list___Bt9W",
        equalizer: "QualitySettingsContextMenu_equalizer__x0aVK",
        equalizer_withNewQuality:
          "QualitySettingsContextMenu_equalizer_withNewQuality__Jgly_",
        headerWithCloseButton:
          "QualitySettingsContextMenu_headerWithCloseButton__vsXrW",
        itemWrapper: "QualitySettingsContextMenu_itemWrapper__VOgWT",
        item: "QualitySettingsContextMenu_item__JevQS",
        item_option: "QualitySettingsContextMenu_item_option__SSxha",
        item_type: "QualitySettingsContextMenu_item_type__LmiAl",
        expandedItem: "QualitySettingsContextMenu_expandedItem__m6M8x",
        itemSubTitle: "QualitySettingsContextMenu_itemSubTitle__YGtQk",
      };
    },
    80615: function (e) {
      e.exports = {
        root: "SyncLyrics_root__6KZg4",
        root_enter: "SyncLyrics_root_enter__vbksr",
        root_enter_active: "SyncLyrics_root_enter_active__QDvBg",
        "enter-fade": "SyncLyrics_enter-fade__GGjE_",
        root_exit: "SyncLyrics_root_exit__mlQvP",
        root_exit_active: "SyncLyrics_root_exit_active__J4Kai",
        "exit-fade": "SyncLyrics_exit-fade__Oy0KX",
        content: "SyncLyrics_content__lbkWP",
      };
    },
    63341: function (e) {
      e.exports = {
        root: "SyncLyricsCard_root__92qn_",
        slider: "SyncLyricsCard_slider__GwydX",
        meta: "SyncLyricsCard_meta__w6_tu",
      };
    },
    83627: function (e) {
      e.exports = {
        root: "SyncLyricsFooter_root__STCKQ",
        major: "SyncLyricsFooter_major__QMZmT",
        writers: "SyncLyricsFooter_writers__c7zhj",
      };
    },
    73390: function (e) {
      e.exports = { root: "SyncLyricsLine_root__r62BN" };
    },
    68466: function (e) {
      e.exports = {
        root: "SyncLyricsLoader_root__I2hTe",
        element: "SyncLyricsLoader_element___Luwv",
        pulse: "SyncLyricsLoader_pulse__5AqRf",
        "change-opacity": "SyncLyricsLoader_change-opacity__vscya",
        element_withIcon: "SyncLyricsLoader_element_withIcon__iiSBo",
        element_withDefaultElement:
          "SyncLyricsLoader_element_withDefaultElement__WmP80",
      };
    },
    77920: function (e) {
      e.exports = {
        line: "SyncLyricsScroller_line__Vh6WN",
        counter: "SyncLyricsScroller_counter__B2E7K",
        counterLine: "SyncLyricsScroller_counterLine__NpBT4",
        root: "SyncLyricsScroller_root__amiLm",
        root_withVisibleUpperLyrics:
          "SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO",
        root_withVisibleScrolledLyrics:
          "SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE",
        root_intro: "SyncLyricsScroller_root_intro__13gls",
        root_outro: "SyncLyricsScroller_root_outro__XlDH5",
        line_last: "SyncLyricsScroller_line_last__liS_1",
        root_prepare: "SyncLyricsScroller_root_prepare__h0Gf1",
        line_active: "SyncLyricsScroller_line_active__6lLvH",
      };
    },
    55560: function (e) {
      e.exports = {
        root: "Trailer_root__c8eG3",
        header: "Trailer_header__FBFMi",
        trackShimmer: "Trailer_trackShimmer__qmCN3",
        albumShimmer: "Trailer_albumShimmer__8RxuC",
        footer: "Trailer_footer__POMTS",
      };
    },
    49025: function (e) {
      e.exports = {
        root: "TrailerError_root__GwuKR",
        textContainer: "TrailerError_textContainer__lF7RZ",
        title: "TrailerError_title__Q52Pa",
        description: "TrailerError_description__60UJ6",
      };
    },
    82705: function (e) {
      e.exports = {
        root: "TrailerFooter_root__LKXby",
        playButtonShimmer: "TrailerFooter_playButtonShimmer__5QwPi",
        linkButtonShimmer: "TrailerFooter_linkButtonShimmer__ZV1s1",
      };
    },
    65094: function (e) {
      e.exports = {
        root: "TrailerHeader_root__n8XkZ",
        coverContainer: "TrailerHeader_coverContainer__4R_jG",
        cover: "TrailerHeader_cover__G6BRb",
        iconContainer: "TrailerHeader_iconContainer__QXR64",
        icon: "TrailerHeader_icon__5T0JT",
        textContainer: "TrailerHeader_textContainer__LR03v",
        text: "TrailerHeader_text__BWMLw",
        link: "TrailerHeader_link__kObd5",
        title: "TrailerHeader_title__GuIe0",
        playButton: "TrailerHeader_playButton__MGmhZ",
        playButtonIcon: "TrailerHeader_playButtonIcon__JFbl_",
        shimmerContainer: "TrailerHeader_shimmerContainer__cOsas",
        titleShimmer: "TrailerHeader_titleShimmer__KKn7b",
        descriptionShimmer: "TrailerHeader_descriptionShimmer__WOlY5",
      };
    },
    17601: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        modalContent: "TrailerModal_modalContent__ZSNFe",
        header: "TrailerModal_header__0h1zj",
      };
    },
    80684: function (e) {
      e.exports = {
        root: "TrailerTrack_root__0UIP4",
        root_active: "TrailerTrack_root_active__F_8Iw",
      };
    },
  },
]);
