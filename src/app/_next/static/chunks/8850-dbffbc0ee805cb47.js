(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8850],
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
        r = i(95695);
      let n = a.V5.model("CommunicationButtonAction", {
          id: a.V5.maybeNull(a.V5.string),
          type: a.V5.maybeNull(a.V5.enumeration(Object.values(r.sy))),
          value: a.V5.maybeNull(a.V5.string),
        }),
        l = a.V5.model("CommunicationButton", {
          text: a.V5.maybeNull(a.V5.string),
          color: a.V5.maybeNull(a.V5.enumeration(Object.values(r.rp))),
          action: a.V5.maybeNull(n),
          textColor: a.V5.maybeNull(a.V5.string),
        });
      var o = i(9753),
        s = i(60836),
        c = i(9544),
        d = i(98639),
        u = i(39513),
        m = i(2570),
        _ = i(38527),
        p = i(91147),
        v = i.n(p);
      let y = (0, c.Pi)((e) => {
          var t;
          let {
              anchorId: i,
              screenId: a,
              button: n,
              buttonSize: l,
              buttonClassName: c,
              textClassName: p,
              hide: y,
            } = e,
            { communication: x } = (0, _.oR4)(),
            h =
              ((null === (t = n.action) || void 0 === t ? void 0 : t.type) ===
                r.sy.LINK &&
                n.action.value) ||
              "",
            { isExternalLink: C } = (0, _.zBm)(h),
            b = (0, _.s0h)(h),
            g = (0, d.useCallback)(() => {
              if (n.action)
                switch (
                  (i && a && n.action.id && x.action(i, a, n.action.id),
                  n.action.type)
                ) {
                  case r.sy.LINK:
                    n.action.value && b(), C || null == y || y();
                    return;
                  case r.sy.CLOSE:
                    null == y || y();
                    return;
                }
            }, [i, a, x, n.action, y, b, C]),
            f = (0, d.useMemo)(() => {
              if (n.textColor) return { color: n.textColor };
            }, [n.textColor]);
          return (0, o.jsx)(u.z, {
            className: (0, s.W)(v().root, v()["root_".concat(n.color)], c),
            role: h ? "link" : "button",
            color: n.color ? n.color : void 0,
            radius: "xxxl",
            onClick: g,
            size: l,
            children: (0, o.jsx)(m.Caption, {
              className: (0, s.W)(v().text, p),
              variant: "div",
              type: "text",
              size: "m",
              style: f,
              children: n.text,
            }),
          });
        }),
        x = (e) => {
          let { id: t, type: i, value: r } = e;
          return (0, a.pj)({
            id: t || null,
            type: i || null,
            value: r || null,
          });
        },
        h = (e) => {
          let { text: t, textColor: i, color: r, action: n } = e;
          return (0, a.pj)({
            text: t || null,
            textColor: i || null,
            color: r || null,
            action: n && x(n),
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
        r = i(49686);
      let n = (e) => {
          let {
            bgUrl: t,
            bgColor: i,
            title: n,
            text: l,
            titleColor: o,
            textColor: s,
            imageUrl: c,
            buttons: d,
          } = e;
          return (0, a.pj)({
            bgUrl: t || null,
            bgColor: i || null,
            title: n || null,
            text: l || null,
            titleColor: o || null,
            textColor: s || null,
            imageUrl: c || null,
            buttons: d.filter((e) => e.text).map(r.XX),
          });
        },
        l = (e) =>
          (0, a.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: n(e.div),
          });
      var o = i(9753),
        s = i(60836),
        c = i(9544),
        d = i(98639),
        u = i(80542),
        m = i(86939),
        _ = i(2570),
        p = i(4688),
        v = i.n(p);
      let y = (0, c.Pi)((e) => {
        var t, i, a, n;
        let { className: l, barBelow: c } = e,
          { formatMessage: p } = (0, u.Z)(),
          y = (0, d.useMemo)(() => {
            let e = { title: {}, text: {}, bg: {} };
            if (!c.barBelowItem) return e;
            let {
              titleColor: t,
              textColor: i,
              bgColor: a,
              bgUrl: r,
            } = c.barBelowItem.content;
            return (
              t && (e.title.color = t),
              i && (e.text.color = i),
              a && (e.bg.backgroundColor = a),
              r &&
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
                    r.kI,
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
              (0, o.jsx)(m.Image, {
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
                  (0, o.jsx)(_.Heading, {
                    className: v().title,
                    variant: "h3",
                    style: y.title,
                    lineClamp: 2,
                    children: c.barBelowItem.content.title,
                  }),
                (null === (n = c.barBelowItem) || void 0 === n
                  ? void 0
                  : n.content.text) &&
                  (0, o.jsx)(_.Heading, {
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
      var x = i(95695);
      let h = a.V5.model("BarBelowContent", {
          bgUrl: a.V5.maybeNull(a.V5.string),
          bgColor: a.V5.maybeNull(a.V5.string),
          imageUrl: a.V5.maybeNull(a.V5.string),
          title: a.V5.maybeNull(a.V5.string),
          titleColor: a.V5.maybeNull(a.V5.string),
          text: a.V5.maybeNull(a.V5.string),
          textColor: a.V5.maybeNull(a.V5.string),
          buttons: a.V5.array(r.HD),
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
          return _;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(23881),
        c = i(39513),
        d = i(28852),
        u = i(71230),
        m = i(38527);
      let _ = () => {
        let e = (0, m.uK4)().get(m.V0J),
          t = (0, m.R$C)();
        return (0, l.useCallback)(
          async (i) => {
            if (0 !== i)
              e.set(m.BUb.YmPlayerPrevVolume, i),
                await (null == t ? void 0 : t.setVolume(0)),
                e.set(m.BUb.YmPlayerVolume, 0);
            else {
              var a;
              let i =
                null !== (a = e.get(m.BUb.YmPlayerPrevVolume)) && void 0 !== a
                  ? a
                  : 1;
              e.remove(m.BUb.YmPlayerPrevVolume),
                await (null == t ? void 0 : t.setVolume(i)),
                e.set(m.BUb.YmPlayerVolume, i);
            }
          },
          [t, e],
        );
      };
      var p = i(95904),
        v = i.n(p);
      let y = (0, n.Pi)((e) => {
        var t, i;
        let { className: n } = e,
          { formatMessage: p } = (0, o.Z)(),
          y = (0, m.uK4)(),
          x = (0, m.R$C)(),
          { sonataState: h } = (0, m.oR4)(),
          C = _(),
          b = y.get(m.V0J),
          g =
            null !==
              (i =
                null !== (t = b.get(m.BUb.YmPlayerVolume)) && void 0 !== t
                  ? t
                  : h.volume) && void 0 !== i
              ? i
              : 1,
          f = (0, l.useCallback)(
            (e) => {
              null == x || x.setVolume(e), b.set(m.BUb.YmPlayerVolume, e);
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
          className: (0, r.W)(v().root, n),
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
                variant: 0 === g ? "volumeOff" : "volume",
              }),
              className: v().button,
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            (0, a.jsx)(u.i, {
              thumbSize: "s",
              trackSize: "s",
              value: g,
              maxValue: 1,
              step: 0.01,
              onChange: f,
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
          return f;
        },
        QZ: function () {
          return S;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(86939),
        c = i(89352),
        d = i(2570),
        u = i(49686),
        m = i(38527),
        _ = i(3084),
        p = i(29177),
        v = i.n(p);
      let y = (0, n.Pi)((e) => {
        var t, i, n;
        let { modal: p } = e,
          { formatMessage: y } = (0, o.Z)(),
          { communication: x } = (0, m.oR4)(),
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
              titleColor: r,
              textColor: n,
              disclaimerColor: l,
            } = p.modalItem.content;
            return (
              t && (e.bg["--bg-url"] = 'url("'.concat(t, '")')),
              i && (e.bg["--bg-url-large"] = 'url("'.concat(i, '")')),
              a && (e.bg.backgroundColor = a),
              r && (e.title.color = r),
              n && (e.text.color = n),
              l && (e.disclaimer.color = l),
              e
            );
          }, [p]),
          g = (0, l.useCallback)(() => {
            p.modalItem &&
              p.modalItem.content.closeActionId &&
              x.action(
                p.modalItem.anchorId,
                p.modalItem.screenId,
                p.modalItem.content.closeActionId,
              ),
              p.close();
          }, [p, x]),
          f = (0, l.useMemo)(() => {
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
              (0, m.g78)(p.modalItem.content.disclaimer, _.rU, {
                className: v().disclaimerLink,
                style: b.disclaimer,
                target: "_blank",
              })
            );
          }, [p, b]);
        return (0, a.jsx)(c.u, {
          style: b.bg,
          className: (0, r.W)(
            v().root,
            h ? v().root_modal : v().root_fullscreen,
          ),
          headerClassName: v().modalHeader,
          contentClassName: v().modalContent,
          header:
            f &&
            (0, a.jsx)("div", {
              className: (0, r.W)(v().imageWrapper, v().imageWrapper_header),
              children: f,
            }),
          open: p.isOpened,
          onOpenChange: p.onOpenChange,
          onClose: g,
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
                  f &&
                    (0, a.jsx)("div", {
                      className: (0, r.W)(
                        v().imageWrapper,
                        v().imageWrapper_content,
                      ),
                      children: f,
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
                  (null === (n = p.modalItem) || void 0 === n
                    ? void 0
                    : n.content.text) &&
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
        h = i(95695),
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
        g = x.V5.model("CommunicationModal", {
          anchorId: x.V5.enumeration(Object.values(h.o1)),
          screenId: x.V5.string,
          content: b,
        }),
        f = C.K.props({
          anchorId: x.V5.maybe(x.V5.enumeration(Object.values(h.o1))),
          list: x.V5.array(g),
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
      var N = i(45919);
      let j = (e) => {
          let {
            isModal: t,
            closeActionId: i,
            bgUrl: a,
            bgUrlLarge: r,
            bgColor: n,
            logoUrl: l,
            title: o,
            text: s,
            titleColor: c,
            textColor: d,
            buttons: m,
            disclaimer: _,
            disclaimerColor: p,
          } = e;
          return (0, x.pj)({
            isModal: (0, N.sw)(t),
            closeActionId: i || null,
            bgUrl: a || null,
            bgUrlLarge: r || null,
            bgColor: n || null,
            logoUrl: l || null,
            title: o || null,
            text: s || null,
            titleColor: c || null,
            textColor: d || null,
            buttons: m.filter((e) => e.text).map(u.XX),
            disclaimer: _ || null,
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
        r,
        n,
        l,
        o,
        s,
        c,
        d,
        u,
        m,
        _,
        p,
        v,
        y = i(9753),
        x = i(60836),
        h = i(9544),
        C = i(98639),
        b = i.t(C, 2),
        g = i(23881),
        f = i(38527),
        N = i(23897);
      let j = () => {
        let [e, t] = (0, C.useState)(!1),
          { sideBannerRef: i } = (0, f.$Y6)(),
          a = (0, C.useMemo)(
            () =>
              (0, N.Z)(
                () => {
                  let e = (null == i ? void 0 : i.clientWidth) ? 1920 : 1024;
                  t(window.innerWidth < e);
                },
                100,
                { trailing: !1 },
              ),
            [t, i],
          );
        return (
          (0, C.useEffect)(
            () => (
              window.addEventListener("resize", a),
              a(),
              () => {
                window.removeEventListener("resize", a);
              }
            ),
            [a],
          ),
          e && !1
        );
      };
      var S = i(31695),
        L = i.n(S),
        A = i(80542),
        w = i(31014),
        k = i(37117),
        P = i(39513),
        M = i(28852),
        I = i(29901),
        T = {
          5881: (e, t, i) => {
            function a() {
              for (var e, t, i = 0, a = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      a,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (a = e(t[i])) && (r && (r += " "), (r += a));
                      else for (i in t) t[i] && (r && (r += " "), (r += i));
                    }
                    return r;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            i.r(t), i.d(t, { clsx: () => a, default: () => r });
            let r = a;
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
              r = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                n = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                l.call(t, a) && !s.hasOwnProperty(a) && (n[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === n[a] && (n[a] = t[a]);
              return {
                $$typeof: r,
                type: e,
                key: c,
                ref: d,
                props: n,
                _owner: o.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
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
              let r;
              return (
                (r =
                  "orig" === t
                    ? "orig"
                    : a
                      ? "m".concat(t, "x").concat(t)
                      : "".concat(t, "x").concat(t)),
                i(e.replace("%%", r))
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, i) {
                let a = null != i ? i : e.currentTarget,
                  r = document.createElement("span"),
                  n = Math.max(a.clientWidth, a.clientHeight),
                  l = n / 2,
                  o = a.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(o.width / 2)
                      : e.clientX - o.left,
                  c =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (r.style.width = "".concat(n, "px")),
                  (r.style.height = "".concat(n, "px")),
                  (r.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - l, "px")),
                  (r.style.top = "".concat(c - l, "px")),
                  r.classList.add(t);
                let d = a.getElementsByClassName(t)[0];
                d && d.remove(), a.insertBefore(r, a.firstChild);
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
            var r = i(9440);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return r.createAvatarUrl;
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
            let r = i(9541),
              n = i(5881),
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
              return (0, r.jsx)(l.NavigationProvider, {
                collapsed: a,
                direction: s,
                children: (0, r.jsx)("nav", {
                  className: (0, n.clsx)(
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
              r = i(810);
            (t.NavigationContext = (0, r.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = (e) => {
                let { collapsed: i, direction: n, children: l } = e,
                  o = (0, r.useMemo)(
                    () => ({ collapsed: i, direction: n }),
                    [i, n],
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
            let r = i(9541),
              n = i(810),
              l = i(5881),
              o = i(7786),
              s = a(i(9948));
            t.NavigationGroup = function (e) {
              let { className: t, children: i, ...a } = e,
                c = (0, n.createRef)(),
                { direction: d } = (0, n.useContext)(o.NavigationContext);
              return (0, r.jsx)("ol", {
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
            let r = i(9541),
              n = i(810),
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
                  withRipple: m = !1,
                  variant: _ = "default",
                  ...p
                } = e,
                { collapsed: v, direction: y } = (0, n.useContext)(
                  o.NavigationContext,
                ),
                x = (0, n.useCallback)(
                  (e) => {
                    m && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [m],
                ),
                [h, C] = n.Children.toArray(a.props.children),
                b = (0, n.useMemo)(
                  () =>
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("div", {
                          className: c.default.iconContainer,
                          children: h,
                        }),
                        (0, r.jsx)("div", {
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
                g = (0, n.cloneElement)(a, {
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
              return (0, r.jsx)("li", {
                ref: i,
                className: (0, l.clsx)(
                  c.default.root,
                  c.default["root_direction_".concat(y)],
                  c.default["root_variant_".concat(_)],
                  {
                    [c.default.root_animate]: u,
                    [c.default.root_collapsed]: v,
                  },
                  t,
                ),
                "aria-current": !!d && "page",
                onClick: x,
                ...p,
                children: g,
              });
            }
            (t.NavigationItemComponent = d),
              (t.NavigationItem = (0, n.forwardRef)((e, t) =>
                (0, r.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = b;
          },
        },
        E = {};
      function R(e) {
        var t = E[e];
        if (void 0 !== t) return t.exports;
        var i = (E[e] = { exports: {} });
        return T[e].call(i.exports, i, i.exports, R), i.exports;
      }
      (R.d = (e, t) => {
        for (var i in t)
          R.o(t, i) &&
            !R.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (R.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (R.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var B = {};
      Object.defineProperty(B, "X$", { value: !0 }),
        (B.Dx = B.KB = B.W_ = void 0),
        (a = R(19)),
        Object.defineProperty(B, "W_", {
          enumerable: !0,
          get: function () {
            return a.Navigation;
          },
        }),
        (r = R(8106)),
        Object.defineProperty(B, "KB", {
          enumerable: !0,
          get: function () {
            return r.NavigationGroup;
          },
        }),
        (n = R(3506)),
        Object.defineProperty(B, "Dx", {
          enumerable: !0,
          get: function () {
            return n.NavigationItem;
          },
        });
      var V = B.W_,
        z = B.KB,
        D = B.Dx;
      B.X$;
      var O = i(5773),
        W = i(2570),
        F = i(27097),
        G = i(2959),
        U = i(3084);
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
        Y = i(95695),
        H = i(86939),
        J = i(12404),
        q = i(38360),
        K = i(98342),
        X = i(64638),
        $ = i.n(X);
      let ee = (e) => {
          let { children: t, entityUrl: i, ariaLabel: a } = e;
          return i
            ? (0, y.jsx)(U.rU, {
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
              subtitle: r,
              contextMenu: n,
              isCollapsed: l,
              withCollapseAnimation: o,
              entityUrl: s,
              onDoubleClick: c,
              forwardRef: d,
              ariaLabel: u,
            } = e,
            m = (0, C.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == c || c()
                  : e.target instanceof HTMLElement &&
                    "IMG" !== e.target.tagName &&
                    (0, K.m)(e, $().ripple);
              },
              [c],
            );
          return (0, y.jsxs)(U.Md, {
            ref: d,
            onClick: m,
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
                        (0, y.jsx)(W.Caption, {
                          "aria-hidden": !0,
                          className: $().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: a,
                        }),
                        (0, y.jsx)(W.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: r,
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
                children: n,
              }),
            ],
          });
        },
        ei = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(et, { forwardRef: t, ...e }),
        ),
        ea = (0, C.createContext)(null);
      var er = i(64318),
        en = i.n(er),
        el = i(385);
      let eo = (e) => {
          let { onPinClick: t, isPinned: i } = e,
            { isCollapsed: a } = (0, C.useContext)(ea) || {},
            [r, n] = (0, C.useState)(!1),
            l = (0, C.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, f.ZP4)(r),
            (0, y.jsx)(el.v2, {
              className: (0, x.W)(en().contextMenu, {
                [en().contextMenu_visible]: r,
              }),
              onClick: l,
              icon: (0, y.jsx)(M.J, { size: "xxs", variant: "more" }),
              tabIndex: a ? -1 : 0,
              "aria-hidden": a,
              variant: "text",
              offsetOptions: 10,
              open: r,
              onOpenChange: n,
              children: (0, y.jsx)(U.Zd, { onClick: t, isPinned: i }),
            })
          );
        },
        es = (e) => {
          var t;
          let { className: i, album: a, forwardRef: r, tooltipOptions: n } = e,
            { formatMessage: l } = (0, A.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, q.BV)(a),
            d = (0, q.H0)(a.type),
            u = (0, C.useMemo)(
              () =>
                (0, y.jsx)(J.Paper, {
                  className: en().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(O.u, {
                    ...n,
                    enabled: o,
                    children: [
                      (0, y.jsx)(H.Image, {
                        className: en().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(O._v, {
                        className: en().tooltip,
                        children: (0, y.jsx)(W.Caption, {
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
              [a.coverUri, a.title, o, n],
            );
          return (0, y.jsx)(ei, {
            ref: r,
            ariaLabel: l(
              { id: "entity-names.album-name" },
              { albumName: a.title },
            ),
            className: (0, x.W)(en().root, i),
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
          let { className: i, artist: a, forwardRef: r, tooltipOptions: n } = e,
            { formatMessage: l } = (0, A.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, ed.BV)(a),
            d = (0, C.useMemo)(
              () =>
                (0, y.jsx)(J.Paper, {
                  className: en().cover,
                  radius: "round",
                  children: (0, y.jsxs)(O.u, {
                    ...n,
                    enabled: o,
                    children: [
                      (0, y.jsx)(H.Image, {
                        className: en().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(O._v, {
                        className: en().tooltip,
                        children: (0, y.jsx)(W.Caption, {
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
              [a.coverUri, a.name, o, n],
            );
          return (0, y.jsx)(ei, {
            ref: r,
            ariaLabel: l(
              { id: "entity-names.artist-name" },
              { artistName: a.name },
            ),
            className: (0, x.W)(en().root, i),
            title: a.name,
            entityUrl: a.url,
            subtitle: (0, y.jsx)(w.Z, { id: "entity-names.artist" }),
            cover: d,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
          });
        },
        em = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(eu, { forwardRef: t, ...e }),
        );
      var e_ = i(10668);
      let ep = (e) => {
          var t;
          let {
              className: i,
              playlist: a,
              forwardRef: r,
              tooltipOptions: n,
            } = e,
            { formatMessage: l } = (0, A.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, e_.BV)(a),
            d = (0, C.useMemo)(
              () =>
                (0, y.jsx)(J.Paper, {
                  className: en().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(O.u, {
                    ...n,
                    enabled: o,
                    children: [
                      (0, y.jsx)(H.Image, {
                        "aria-hidden": !0,
                        className: en().image,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(O._v, {
                        className: en().tooltip,
                        children: (0, y.jsx)(W.Caption, {
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
              [o, a.coverUri, a.title, n],
            );
          return (0, y.jsx)(ei, {
            ref: r,
            ariaLabel: l(
              { id: "entity-names.playlist-name" },
              { playlistName: a.title },
            ),
            className: (0, x.W)(en().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: (0, y.jsx)(w.Z, { id: "entity-names.playlist" }),
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
          let { className: a, vibe: r, forwardRef: n, tooltipOptions: l } = e,
            o = (0, C.useId)(),
            { formatMessage: s } = (0, A.Z)(),
            { isCollapsed: c, withCollapseAnimation: d } =
              null !== (i = (0, C.useContext)(ea)) && void 0 !== i ? i : {},
            [u, m] = (0, C.useState)(!1),
            _ = (0, ey.BV)(r),
            {
              isPlaying: p,
              togglePlay: v,
              isCurrent: h,
            } = (0, f.QhE)({
              seeds: r.seeds,
              pageIdForFrom: f.Rhz.SIDEBAR,
              blockIdForFrom: f.aUg.RADIO,
            }),
            b = (0, C.useCallback)(() => {
              m(!0),
                v().finally(() => {
                  m(!1);
                });
            }, [v]),
            g = (0, C.useMemo)(
              () =>
                (0, y.jsx)(W.Caption, {
                  id: o,
                  variant: "span",
                  "aria-label": s(
                    { id: "entity-names.vibe-name" },
                    { vibeName: r.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: r.title,
                }),
              [s, o, r.title],
            ),
            N = (0, C.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = r.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, y.jsxs)(O.u, {
                ...l,
                enabled: c,
                children: [
                  (0, y.jsx)("div", {
                    style: t,
                    className: en().animation,
                    children: (0, y.jsx)(U.Df, {
                      isCurrent: h,
                      isPlaying: p,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: b,
                      title: r.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: o,
                    }),
                  }),
                  (0, y.jsx)(O._v, {
                    className: en().tooltip,
                    children: (0, y.jsx)(W.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: r.title,
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
              null === (t = r.colors) || void 0 === t ? void 0 : t.average,
              r.title,
            ]);
          return (0, y.jsx)(ei, {
            ref: n,
            onDoubleClick: v,
            className: (0, x.W)(en().root, a),
            isCollapsed: !!c,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: _,
              isPinned: r.isPinned,
            }),
            withCollapseAnimation: !!d,
            title: g,
            subtitle: (0, y.jsx)(w.Z, { id: "entity-names.my-vibe" }),
            cover: N,
          });
        }),
        eh = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(ex, { forwardRef: t, ...e }),
        );
      var eC = i(8519),
        eb = i.n(eC);
      let eg = Q({ placement: "right", padding: 20 }),
        ef = (0, h.Pi)((e) => {
          var t, i;
          let { className: a, withCollapseAnimation: r, isCollapsed: n } = e,
            { formatMessage: l } = (0, A.Z)(),
            { pinsCollection: o } = (0, f.oR4)(),
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
              () => ({ withCollapseAnimation: r, isCollapsed: n }),
              [n, r],
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
                            case Y.Qm.ALBUM:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ec, {
                                    tooltipOptions: eg,
                                    ref: null == s ? void 0 : s[t],
                                    album: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Y.Qm.ARTIST:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(em, {
                                    tooltipOptions: eg,
                                    ref: null == s ? void 0 : s[t],
                                    artist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Y.Qm.PLAYLIST:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ev, {
                                    tooltipOptions: eg,
                                    ref: null == s ? void 0 : s[t],
                                    playlist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Y.Qm.WAVE:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(eh, {
                                    tooltipOptions: eg,
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
            m ||
              (m = eN.createElement(
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
            _ ||
              (_ = eN.createElement("path", {
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
        eL = i(77314),
        eA = i.n(eL);
      let ew = (e) => {
          let { className: t, forwardRef: i } = e,
            {
              modals: { paywallModal: a },
            } = (0, f.oR4)(),
            { formatMessage: r } = (0, A.Z)();
          return (0, y.jsxs)("section", {
            className: (0, x.W)(eA().root, t),
            ref: i,
            "aria-label": r({ id: "plusbar.subscription-activation" }),
            children: [
              (0, y.jsx)(eS, { className: eA().logos, "aria-hidden": "true" }),
              (0, y.jsx)(W.Caption, {
                className: eA().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(w.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsx)(W.Caption, {
                className: eA().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, y.jsx)(w.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsxs)("div", {
                className: eA().buttons,
                children: [
                  (0, y.jsx)(P.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    color: "plus",
                    children: "30 дней бесплатно",
                  }),
                  (0, y.jsx)(P.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    onClick: a.open,
                    children: (0, y.jsx)(w.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ek = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(ew, { forwardRef: t, ...e }),
        );
      var eP = i(3065),
        eM = i.n(eP),
        eI = i(24776),
        eT = i.n(eI);
      let eE = Q({ placement: "right", padding: 8 }),
        eR = (e) => {
          let { className: t, isCollapsed: i, withCollapseAnimation: a } = e;
          return (0, y.jsxs)(O.u, {
            ...eE,
            enabled: !0,
            children: [
              (0, y.jsxs)("div", {
                className: (0, x.W)(eT().root, t),
                children: [
                  (0, y.jsx)(W.Caption, {
                    className: eT().nda,
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    children: (0, y.jsx)(w.Z, { id: "entity-names.nda" }),
                  }),
                  (0, y.jsx)(W.Caption, {
                    className: (0, x.W)(eT().text, {
                      [eT().text_collapsed]: i,
                      [eT().text_animated]: a,
                    }),
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    lineClamp: 1,
                    children: (0, y.jsx)(w.Z, {
                      id: "warning-messages.only-for-staff",
                    }),
                  }),
                ],
              }),
              (0, y.jsx)(O._v, {
                className: eT().tooltipContent,
                children: (0, y.jsx)(w.Z, {
                  id: "warning-messages.do-not-take-screenshots",
                }),
              }),
            ],
          });
        },
        eB = {
          exit: eM().plusButtonContainer_exit,
          exitActive: eM().plusButtonContainer_exit_active,
          enter: eM().plusButtonContainer_enter,
          enterActive: eM().plusButtonContainer_enter_active,
        },
        eV = {
          exit: eM().plusBar_exit,
          exitActive: eM().plusBar_exit_active,
          enter: eM().plusBar_enter,
          enterActive: eM().plusBar_enter_active,
        },
        ez = Q({ placement: "right", padding: 8 }),
        eD = (0, h.Pi)((e) => {
          let {
              className: t,
              collapsed: i,
              shownAnimation: a,
              handleClick: r,
            } = e,
            n = j(),
            l = (0, f.hJm)(),
            { formatMessage: o } = (0, A.Z)(),
            { language: s } = (0, f.ZSk)(),
            {
              user: c,
              experiments: d,
              modals: { paywallModal: u },
            } = (0, f.oR4)(),
            m = (0, f.V$B)(d),
            _ = (0, C.useMemo)(
              () =>
                c.collectionHue
                  ? { "--logo-color": (0, F.C)(c.collectionHue) }
                  : null,
              [c.collectionHue],
            ),
            p = (0, C.useMemo)(
              () =>
                i
                  ? o({ id: "sidebar.uncollapse" })
                  : o({ id: "sidebar.collapse" }),
              [i, o],
            ),
            v = (0, C.useMemo)(
              () => ({
                search: o({ id: "navigation.search" }),
                main: o({ id: "navigation.page-main" }),
                collection: o({ id: "navigation.page-collection" }),
                non_music: o({ id: "entity-names.podcasts" }),
              }),
              [o],
            ),
            h = (0, C.useMemo)(
              () =>
                (0, y.jsx)(
                  z,
                  {
                    children: m.map((e) =>
                      (0, y.jsx)(
                        D,
                        {
                          selected: l(e.path),
                          shownAnimation: a,
                          variant: "main",
                          children: (0, y.jsxs)(U.rU, {
                            href: e.path,
                            children: [
                              (0, y.jsxs)(O.u, {
                                ...ez,
                                enabled: i,
                                children: [
                                  (0, y.jsx)(M.J, {
                                    variant: l(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, y.jsx)(O._v, {
                                    children: (0, y.jsx)(W.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: v[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsx)(W.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, x.W)({
                                  [eM().title_animate]: a,
                                  [eM().title_collapsed]: i,
                                }),
                                children: v[e.id],
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
              [l, i, d, d.loadingState, a, v],
            ),
            b = (0, C.useMemo)(
              () =>
                n
                  ? null
                  : (0, C.createElement)(O.u, {
                      ...ez,
                      key: "collapseTooltip",
                      enabled: i,
                      isFocusEnabled: !1,
                      children: [
                        (0, y.jsx)(P.z, {
                          className: eM().collapseButton,
                          "aria-label": p,
                          radius: "round",
                          color: "secondary",
                          size: "xs",
                          icon: (0, y.jsx)(M.J, {
                            variant: i ? "arrowRight" : "arrowLeft",
                            size: "xxs",
                          }),
                          onClick: r,
                        }),
                        (0, y.jsx)(O._v, {
                          className: (0, x.W)({
                            [eM().collapseButtonTooltip_hidden]: !i,
                          }),
                          children: p,
                        }),
                      ],
                    }),
              [i, p, r, n],
            ),
            g = (0, C.useRef)(null),
            N = (0, C.useMemo)(
              () =>
                (0, y.jsx)(k.Z, {
                  nodeRef: g,
                  in: i,
                  timeout: 150,
                  classNames: eB,
                  unmountOnExit: !0,
                  children: (0, y.jsx)("div", {
                    className: eM().plusButtonContainer,
                    ref: g,
                    children: (0, y.jsxs)(O.u, {
                      ...ez,
                      enabled: i,
                      children: [
                        (0, y.jsx)(P.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, y.jsx)(M.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, x.W)(eM().button, eM().important),
                          "aria-label": o({
                            id: "plusbar.subscription-activation",
                          }),
                          onClick: u.open,
                        }),
                        (0, y.jsx)(O._v, {
                          children: (0, y.jsx)(W.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, y.jsx)(w.Z, {
                              id: "plusbar.subscription-activation",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              [i, o, u.open],
            ),
            S = (0, C.useRef)(null),
            L = (0, C.useMemo)(
              () =>
                (0, y.jsx)(k.Z, {
                  nodeRef: S,
                  in: !i,
                  timeout: 150,
                  classNames: eV,
                  unmountOnExit: !0,
                  children: (0, y.jsx)(ek, {
                    className: eM().plusBar,
                    forwardRef: S,
                  }),
                }),
              [i],
            );
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eM().root, t),
            children: [
              (0, y.jsxs)("div", {
                className: eM().logoWrapper,
                children: [
                  (0, y.jsx)(U.rU, {
                    href: "/",
                    className: eM().logoLink,
                    "aria-label": o({ id: "navigation.page-main" }),
                    children: (0, y.jsx)(I.TR, {
                      style: _,
                      className: (0, x.W)(eM().logo),
                      collapsed: i,
                      shownAnimation: a,
                      lang: "ru" !== s ? I.o0.EN : I.o0.RU,
                    }),
                  }),
                  b,
                ],
              }),
              d.checkExperiment(f.peG.WebNextNDABadge, "on") &&
                (0, y.jsx)(eR, {
                  className: eM().ndaBadge,
                  isCollapsed: i,
                  withCollapseAnimation: !!a,
                }),
              (0, y.jsx)(V, {
                className: eM().navigation,
                collapsed: i,
                "aria-label": o({ id: "navigation.main-menu" }),
                children: h,
              }),
              (0, y.jsx)(ef, {
                isCollapsed: i,
                withCollapseAnimation: !!a,
                className: eM().pinsList,
              }),
              !c.hasPlus &&
                (0, y.jsxs)("div", { className: eM().plus, children: [L, N] }),
              (0, y.jsx)(C.Suspense, {
                children: (0, y.jsx)("div", {
                  className: eM().user,
                  children: (0, y.jsx)(G.Iw, {
                    metaClassName: (0, x.W)(eM().userMeta, {
                      [eM().userMeta_animate]: a,
                      [eM().userMeta_collapsed]: i,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var eO = i(73061),
        eW = i.n(eO),
        eF = i(14825),
        eG = i.n(eF);
      let eU = (e) => {
          let { className: t } = e;
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eG().root, t),
            children: [
              (0, y.jsx)(W.Caption, {
                className: eG().nda,
                variant: "span",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(w.Z, { id: "entity-names.nda" }),
              }),
              (0, y.jsx)(W.Caption, {
                className: eG().text,
                variant: "span",
                size: "m",
                weight: "normal",
                lineClamp: 1,
                children: (0, y.jsx)(w.Z, {
                  id: "warning-messages.only-for-staff",
                }),
              }),
            ],
          });
        },
        eQ = (0, h.Pi)((e) => {
          let { className: t } = e,
            i = (0, f.hJm)(),
            { experiments: a } = (0, f.oR4)(),
            { formatMessage: r } = (0, A.Z)(),
            n = (0, f.V$B)(a),
            l = r({ id: "navigation.main-menu" }),
            o = (0, C.useMemo)(
              () => ({
                search: r({ id: "navigation.search" }),
                main: r({ id: "navigation.page-main" }),
                collection: r({ id: "navigation.page-collection" }),
              }),
              [r],
            );
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eW().root, t),
            children: [
              a.checkExperiment(f.peG.WebNextNDABadge, "on") &&
                (0, y.jsx)(eU, { className: eW().ndaBadge }),
              (0, y.jsx)(V, {
                collapsed: !0,
                direction: "horizontal",
                "aria-label": l,
                children: (0, y.jsx)(z, {
                  children: (0, y.jsxs)(y.Fragment, {
                    children: [
                      n.map((e) =>
                        (0, y.jsx)(
                          D,
                          {
                            selected: i(e.path),
                            children: (0, y.jsxs)(U.rU, {
                              href: e.path,
                              children: [
                                (0, y.jsx)(M.J, {
                                  variant: i(e.path) ? e.iconSelected : e.icon,
                                  size: "m",
                                }),
                                (0, y.jsx)(W.Caption, {
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
                      (0, y.jsx)(D, {
                        children: (0, y.jsx)(G.Iw, {
                          className: eW().user,
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
            i = (0, f.uK4)().get(f.V0J),
            a = j(),
            { settings: r } = (0, f.oR4)(),
            [n, l] = (0, C.useState)(i.get(f.BUb.NavbarCollapsed) || !1),
            [o, s] = (0, C.useState)(!1),
            c = (0, C.useMemo)(
              () => (r.layout === f.t8m.Mobile ? eQ : eD),
              [r.layout],
            ),
            d = (0, C.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(f.BUb.NavbarCollapsed, !n, { expires: 180 }),
                  l(!n),
                  s(!0);
              },
              [n, i],
            );
          return (0, y.jsx)("aside", {
            className: (0, x.W)(L().root, { [L().root_collapsed]: n || a }, t),
            ...(0, g.BA)(g.QM.navbar.NAVBAR),
            children: (0, y.jsx)(c, {
              handleClick: d,
              collapsed: n || a,
              shownAnimation: o,
            }),
          });
        });
      var eY = i(42288);
      let eH = eY.V5.model("PinAlbumItemModel", {
          type: eY.V5.literal(Y.Qm.ALBUM),
          data: q.KX,
        }),
        eJ = eY.V5.model("PinArtistItemModel", {
          type: eY.V5.literal(Y.Qm.ARTIST),
          data: ed.Go,
        }),
        eq = eY.V5.model("PinPlaylistItemModel", {
          type: eY.V5.literal(Y.Qm.PLAYLIST),
          data: e_.Cd,
        }),
        eK = eY.V5.model("PinVibeItemModel", {
          type: eY.V5.literal(Y.Qm.WAVE),
          data: ey.KW,
        }),
        eX = eY.V5.union(eH, eJ, eq, eK),
        e$ = (e) => "object" == typeof e && e && "type" in e;
      var e0 = i(93490),
        e1 = i(73276);
      let e5 = (e) => {
          switch (e.type) {
            case Y.Qm.WAVE:
              return (0, eY.pj)({ type: Y.Qm.WAVE, data: (0, ey.FF)(e.data) });
            case Y.Qm.PLAYLIST:
              return (0, eY.pj)({
                type: Y.Qm.PLAYLIST,
                data: (0, e1.RE)({ playlist: e.data }),
              });
            case Y.Qm.ARTIST:
              return (0, eY.pj)({
                type: Y.Qm.ARTIST,
                data: (0, ed.tR)({ artist: e.data }),
              });
            case Y.Qm.ALBUM:
              return (0, eY.pj)({
                type: Y.Qm.ALBUM,
                data: (0, e0.cO)({ album: e.data }),
              });
          }
        },
        e2 = eY.V5.model("Pins", {
          loadingState: eY.V5.enumeration(Object.values(f.Gui)),
          items: eY.V5.maybeNull(eY.V5.array(eX)),
          index: eY.V5.map(eY.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var i;
                (e.items = (0, eY.pj)(
                  null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var i, a, r, n;
                if (
                  (null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.length) === 30
                ) {
                  let t =
                    null === (n = e.items) || void 0 === n ? void 0 : n.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (a = e.items) || void 0 === a || a.unshift(e5(t));
                let l =
                  null === (r = e.items) || void 0 === r ? void 0 : r.at(0);
                l && e.index.set(l.data.pinId, !0);
              },
              getData: (0, eY.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: i } = (0, eY.dU)(e);
                if (e.loadingState !== f.Gui.PENDING)
                  try {
                    var a;
                    e.loadingState = f.Gui.PENDING;
                    let i = yield t.getPins();
                    (e.items = (0, eY.pj)(i.pins.map(e5))),
                      null === (a = e.items) ||
                        void 0 === a ||
                        a.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = f.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = f.Gui.REJECT), i.error(t);
                  }
              }),
              toggleAlbumPin: (0, eY.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eY.dU)(e);
                if (e.loadingState !== f.Gui.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinAlbum(i)), t.deletePin(a), n;
                    return (n = yield r.pinAlbum(i)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eY.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eY.dU)(e);
                if (e.loadingState !== f.Gui.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinArtist(i)), t.deletePin(a), n;
                    return (n = yield r.pinArtist(i)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eY.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eY.dU)(e);
                if (e.loadingState !== f.Gui.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinPlaylist(i)), t.deletePin(a), n;
                    return (
                      (n = yield r.pinPlaylist(i)), e$(n) && t.addPin(n), n
                    );
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eY.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eY.dU)(e);
                if (e.loadingState !== f.Gui.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinWave(i)), t.deletePin(a), n;
                    return (n = yield r.pinWave(i)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
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
          return tm;
        },
        ev: function () {
          return el;
        },
      });
      var a,
        r,
        n = i(9753),
        l = i(60836),
        o = i(9544),
        s = i(98639),
        c = i(78604),
        d = i(38527),
        u = i(12683),
        m = i.n(u),
        _ = i(80542),
        p = i(31014),
        v = i(23881),
        y = i(84338),
        x = i(39513),
        h = i(28852),
        C = i(12404),
        b = i(16636),
        g = i(5773),
        f = i(2570),
        N = i(71230),
        j = i(33060),
        S = i.n(j),
        L = i(58163),
        A = i.n(L);
      let w = (e) => {
          let { value: t, variant: i, className: a } = e,
            r =
              "start" === i
                ? v.bG.changeTimecode.TIMECODE_TIME_START
                : v.bG.changeTimecode.TIMECODE_TIME_END;
          return (0, n.jsx)(f.Caption, {
            className: (0, l.W)(A().root, A()["root_".concat(i)], a),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            ...(0, v.BA)(r),
            children: t,
          });
        },
        k = (e) => {
          let {
              className: t,
              sliderClassName: i,
              disabled: a,
              isFullscreen: r,
              isMobile: o,
              showThumbVariant: c,
              withTimecode: u = !0,
            } = e,
            m = (0, d.R$C)(),
            p = (r || !o) && u,
            y = (0, s.useRef)(!1),
            [x, h] = (0, s.useState)(0),
            [C, b] = (0, s.useState)(0),
            [g, f] = (0, s.useState)(0),
            { formatMessage: j } = (0, _.Z)(),
            L = (0, s.useCallback)(
              (e, t) => {
                (y.current = !t), t ? null == m || m.setProgress(e) : h(e);
              },
              [m],
            );
          return (
            (0, s.useEffect)(() => {
              let e =
                null == m
                  ? void 0
                  : m.state.playerState.progress.onChange(() => {
                      let e = m.state.playerState.progress.value;
                      e.duration === 1 / 0
                        ? (b(0), h(0), f(0))
                        : (b(e.duration),
                          h((t) => (y.current ? t : e.position)),
                          f(e.loaded));
                    });
              return () => {
                null == e || e();
              };
            }, [m]),
            (0, n.jsxs)("div", {
              className: (0, l.W)(
                S().root,
                {
                  [S().root_fullscreen]: r,
                  [S().root_mobile]: o,
                  [S().root_withTimecode]: u,
                },
                t,
              ),
              ...(0, v.BA)(v.bG.changeTimecode.TIMECODE_WRAPPER),
              children: [
                p &&
                  (0, n.jsx)(w, {
                    value: (0, d.gf)(Math.round(x), Math.round(C)),
                    variant: "start",
                    className: S().timecode,
                  }),
                (0, n.jsx)(N.i, {
                  className: (0, l.W)(
                    S().slider,
                    {
                      [S()["slider_thumbSize_".concat(r || o ? "xs" : "m")]]:
                        !0,
                    },
                    i,
                  ),
                  disabled: a,
                  thumbSize: r || o ? "xs" : "s",
                  trackSize: r || o ? "xs" : "s",
                  value: Math.round(x),
                  mode: "deferred",
                  secondaryValue: Math.round(g),
                  maxValue: 0 === C ? void 0 : Math.round(C),
                  onChange: L,
                  "aria-label": j({ id: "player-actions.timecode-control" }),
                  showThumbVariant: c,
                  ...(0, v.BA)(v.bG.changeTimecode.TIMECODE_SLIDER),
                }),
                p &&
                  (0, n.jsx)(w, {
                    value: (0, d.gf)(Math.round(C), Math.round(C)),
                    variant: "end",
                    className: S().timecode,
                  }),
              ],
            })
          );
        };
      var P = i(29569),
        M = i(75191),
        I = i(44023),
        T = i(3084),
        E = i(43056),
        R = i.n(E);
      let B = (e) => {
          let { className: t, ariaLabel: i, onClick: a, forwardRef: r } = e;
          return (0, n.jsx)("div", {
            ref: r,
            className: (0, l.W)(R().root, t),
            children: (0, n.jsx)(x.z, {
              className: R().button,
              radius: "round",
              size: "s",
              color: "secondary",
              withRipple: !1,
              "aria-label": i,
              icon: (0, n.jsx)(h.J, { variant: "fullscreen", size: "xs" }),
              onClick: a,
              ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_BUTTON),
            }),
          });
        },
        V = (0, s.forwardRef)((e, t) => (0, n.jsx)(B, { forwardRef: t, ...e }));
      var z = i(76894),
        D = i(385),
        O = i(3752);
      let W = {
        [z.nJ.HQ_PLUS]: "HQ+",
        [z.nJ.HQ]: "HQ",
        [z.nJ.NQ]: "NQ",
        [z.nJ.LQ]: "LQ",
        [z.nJ.PREVIEW]: "PREVIEW",
      };
      var F = i(98776),
        G = i.n(F);
      let U = (e) => {
        let { closeToast: t, onOpenQualitySettingsMenu: i, message: a } = e,
          { formatMessage: r } = (0, _.Z)(),
          l = (0, s.useCallback)(() => {
            i(), null == t || t();
          }, [t, i]),
          o = (0, s.useMemo)(
            () =>
              (0, n.jsxs)("div", {
                className: G().message,
                children: [
                  (0, n.jsx)(f.Caption, {
                    variant: "div",
                    size: "m",
                    children: a,
                  }),
                  (0, n.jsx)(x.z, {
                    className: G().changeButton,
                    onClick: l,
                    variant: "text",
                    withRipple: !1,
                    "aria-label": r({ id: "interface-actions.change" }),
                    children: (0, n.jsx)(f.Caption, {
                      variant: "div",
                      size: "m",
                      children: (0, n.jsx)(p.Z, {
                        id: "interface-actions.change",
                      }),
                    }),
                  }),
                ],
              }),
            [r, l, a],
          );
        return (0, n.jsx)(T.Yj, {
          closeToast: t,
          cover: (0, n.jsx)(h.J, {
            className: G().icon,
            size: "xs",
            variant: "settings",
          }),
          message: o,
        });
      };
      var Q = i(55676),
        Z = i.n(Q);
      let Y = {
          duration: 300,
          initial: { transform: "translateY(5%)", opacity: 0 },
          open: { transform: "translateY(0)", opacity: 1 },
          close: { transform: "translateY(5%)", opacity: 0 },
        },
        H = [
          {
            type: z.nJ.HQ_PLUS,
            text: (0, n.jsx)(p.Z, {
              id: "player-actions.audio-quality-maximum",
            }),
            qualityMessageId: "player-actions.audio-quality-maximum",
          },
          {
            type: z.nJ.HQ,
            text: (0, n.jsx)(p.Z, {
              id: "player-actions.audio-quality-optimal",
            }),
            qualityMessageId: "player-actions.audio-quality-optimal",
          },
          {
            type: z.nJ.NQ,
            text: (0, n.jsx)(p.Z, {
              id: "player-actions.audio-quality-economical",
            }),
            qualityMessageId: "player-actions.audio-quality-economical",
          },
        ],
        J = [
          {
            type: z.nJ.HQ,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-hq" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: Z().item_type,
                  children: ["• ", W[z.nJ.HQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq",
          },
          {
            type: z.nJ.NQ,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-nq" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: Z().item_type,
                  children: ["• ", W[z.nJ.NQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-nq",
          },
        ],
        q = {
          [z.nJ.HQ_PLUS]: (0, n.jsx)(p.Z, {
            id: "player-actions.audio-quality-maximum-description",
          }),
          [z.nJ.HQ]: (0, n.jsx)(p.Z, {
            id: "player-actions.audio-quality-optimal-description",
          }),
          [z.nJ.NQ]: (0, n.jsx)(p.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
          [z.nJ.LQ]: (0, n.jsx)(p.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
        },
        K = (e) => (0, n.jsxs)(n.Fragment, { children: ["[NDA] ", e] }),
        X = (0, o.Pi)((e) => {
          let {
            onOpenChange: t,
            open: i,
            placement: a,
            size: r,
            referenceClassName: o,
            icon: c,
            referenceLabel: u,
          } = e;
          (0, d.ZP4)(i);
          let m = (0, s.useId)(),
            { formatMessage: y } = (0, _.Z)(),
            { contentRef: C } = (0, d.$Y6)(),
            { notify: b } = (0, d.d$W)(),
            g = (0, d.uK4)().get(d.V0J),
            {
              sonataState: N,
              user: j,
              equalizer: S,
              experiments: L,
              settings: A,
            } = (0, d.oR4)(),
            w = A.layout === d.t8m.Mobile,
            k = (0, d.SqQ)(),
            P = (0, s.useRef)(null),
            M = L.checkExperiment(d.peG.WebNextEqualizer, "on"),
            I = L.checkExperiment(d.peG.WebNextEnableNewQuality, "on"),
            T = L.checkExperiment(d.peG.WebNextEnableNewQuality, "prod"),
            E = I || T,
            R = (0, s.useMemo)(() => {
              let e = y({ id: "player-actions.audio-quality" });
              return I && !T && (e = K(e)), e;
            }, [y, I, T]),
            B = (0, s.useCallback)(() => {
              null == t || t(!0);
            }, [t]),
            V = (0, s.useCallback)(() => {
              null == t || t(!1);
            }, [t]),
            W = (0, s.useCallback)(
              (e) => {
                N.setQuality(e),
                  null == k || k.setQuality(e),
                  g.set(d.BUb.YmPlayerQuality, e);
              },
              [k, N, g],
            ),
            F = (0, s.useCallback)(
              (e) => {
                let t = y({ id: e }).toLowerCase();
                return (0, n.jsx)(p.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [y],
            ),
            G = (0, s.useCallback)(
              (e, t) => () => {
                if (N.quality === e) return;
                W(e);
                let i = F(t);
                b((0, n.jsx)(U, { onOpenQualitySettingsMenu: B, message: i }), {
                  containerId: d.W$x.INFO,
                });
              },
              [F, B, b, N.quality, W],
            ),
            Q = (0, s.useMemo)(
              () => (T ? H : I ? H.map((e) => ({ ...e, text: K(e.text) })) : J),
              [I, T],
            ),
            X = (0, s.useMemo)(() => {
              let e = !j.hasPlus;
              return Q.map((t) => {
                let { type: i, text: a, qualityMessageId: r } = t,
                  o =
                    i === N.quality
                      ? (0, n.jsx)(h.J, { variant: "check" })
                      : null,
                  s = i === N.quality;
                return (
                  ((N.quality === z.nJ.NQ && i === z.nJ.LQ) ||
                    (N.quality === z.nJ.LQ && i === z.nJ.NQ)) &&
                    ((s = !0), (o = (0, n.jsx)(h.J, { variant: "check" }))),
                  (0, n.jsxs)(
                    D.sN,
                    {
                      isBlock: !0,
                      disabled: e,
                      className: (0, l.W)(Z().item, { [Z().expandedItem]: E }),
                      iconPosition: "right",
                      icon: o,
                      onClick: G(i, r),
                      role: "option",
                      "aria-selected": s,
                      children: [
                        E &&
                          (0, n.jsxs)("span", {
                            className: Z().itemWrapper,
                            children: [
                              (0, n.jsx)("span", {
                                className: Z().item_option,
                                children: a,
                              }),
                              (0, n.jsx)("span", {
                                className: (0, l.W)(
                                  Z().item_option,
                                  Z().itemSubTitle,
                                ),
                                children: q[i],
                              }),
                            ],
                          }),
                        !E &&
                          (0, n.jsx)("span", {
                            className: Z().item_option,
                            children: a,
                          }),
                      ],
                    },
                    i,
                  )
                );
              });
            }, [G, N.quality, j.hasPlus, E, Q]),
            $ = (0, s.useMemo)(
              () =>
                E
                  ? {
                      listClassName: (0, l.W)(
                        Z().root,
                        Z().root_withNewQuality,
                        { [Z().root_withEqualizer]: M },
                      ),
                      disableFloatingStyles: !0,
                      portalNode: w ? null : C,
                      transform: !1,
                      transition: Y,
                    }
                  : {
                      offsetOptions: 10,
                      className: (0, l.W)(Z().root, {
                        [Z().root_withEqualizer]: M,
                      }),
                    },
              [C, E, M, w],
            ),
            ee = (0, s.useMemo)(() => {
              if (M && !w)
                return (0, n.jsx)(
                  O.Gv,
                  {
                    isExpanded: S.isEnabled,
                    isDisabled: !1,
                    className: (0, l.W)(Z().equalizer, {
                      [Z().equalizer_withNewQuality]: E,
                    }),
                    title: y({ id: "equalizer.title" }),
                  },
                  m,
                );
            }, [S.isEnabled, m, y, E, M, w]);
          return (0, n.jsxs)(D.v2, {
            className: o,
            size: r,
            icon: c,
            placement: a,
            open: i,
            onOpenChange: t,
            ariaLabel: y({ id: "player-actions.audio-quality" }),
            footer: ee,
            label: u,
            variant: "text",
            ...$,
            containerProps: (0, v.BA)(
              v.QM.player.QUALITY_SETTINGS_CONTEXT_MENU,
            ),
            isMobile: w,
            ...(0, v.BA)(v.QM.player.SOUND_QUALITY_BUTTON),
            children: [
              !w &&
                (0, n.jsxs)(f.Heading, {
                  className: (0, l.W)(Z().header, {
                    [Z().headerWithCloseButton]: E,
                  }),
                  variant: "h4",
                  size: "xs",
                  weight: "bold",
                  children: [
                    R,
                    E &&
                      (0, n.jsx)(x.z, {
                        ref: P,
                        radius: "round",
                        color: "secondary",
                        size: "xxs",
                        icon: (0, n.jsx)(h.J, {
                          variant: "close",
                          size: "xxs",
                        }),
                        onClick: V,
                        "aria-label": y({
                          id: "interface-actions.close-quality-settings",
                        }),
                      }),
                  ],
                }),
              X,
            ],
          });
        });
      var $ = i(66846),
        ee = i.n($);
      let et = "player-region",
        ei = (0, o.Pi)((e) => {
          var t;
          let { className: i, entityMeta: a, onLikeClick: r, onDislikeClick: onDislikeClick, } = e,
            {
              user: o,
              sonataState: c,
              fullscreenPlayer: u,
              experiments: m,
            } = (0, d.oR4)(),
            [N, j] = (0, s.useState)(!1),
            [S, L] = (0, s.useState)(!1),
            { formatMessage: A } = (0, _.Z)(),
            w = c.contextType === y.Ak.Generative,
            E = !w,
            R = o.isAuthorized && !w,
            B = (0, d.RVp)(),
            z = c.canSpeed && B && (null == a ? void 0 : a.isNonMusic),
            D =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            O = null == a ? void 0 : a.isTrackAudiobook,
            W = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == a ? void 0 : a.averageColor,
              }),
              [null == a ? void 0 : a.averageColor],
            ),
            F = (0, s.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            G = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION"].includes(t.tagName);
                a && E && i && u.showFullscreenPlayerModal();
              },
              [a, u, E],
            ),
            U = (0, s.useMemo)(() => {
              if (null == a ? void 0 : a.isNonMusic) return null;
              let e = ""
                .concat(A({ id: "interface-actions.open-sync-lyrics" }), " ")
                .concat(A({ id: "warning-messages.can-break-accessibility" }));
              return (0, n.jsx)(x.z, {
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled: !(null == a ? void 0 : a.hasSyncLyrics),
                "aria-hidden": !(null == a ? void 0 : a.hasSyncLyrics),
                withRipple: !1,
                "aria-label": e,
                icon: (0, n.jsx)(h.J, { variant: "syncLyrics", size: "xs" }),
                onClick: u.showSyncLyricsModal,
              });
            }, [
              null == a ? void 0 : a.hasSyncLyrics,
              A,
              u.showSyncLyricsModal,
              null == a ? void 0 : a.isNonMusic,
            ]),
            Q = (0, s.useMemo)(
              () =>
                m.checkExperiment(d.peG.WebNextPlayQueue, "on")
                  ? (0, n.jsx)(x.z, {
                      radius: "round",
                      size: "xxxs",
                      variant: "text",
                      disabled: !a,
                      withRipple: !1,
                      "aria-label": A({ id: "play-queue.title" }),
                      icon: (0, n.jsx)(h.J, {
                        variant: "playQueue",
                        size: "xs",
                      }),
                      ...(0, v.BA)(
                        v.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                      ),
                    })
                  : (0, n.jsx)(T.wx, {
                      title: A({ id: "play-queue.title" }),
                      description: A({ id: "future-feature.message" }),
                      children: (0, n.jsx)(x.z, {
                        radius: "round",
                        size: "xxxs",
                        variant: "text",
                        disabled: !0,
                        "aria-hidden": !0,
                        withRipple: !1,
                        icon: (0, n.jsx)(h.J, {
                          variant: "playQueue",
                          size: "xs",
                        }),
                        ...(0, v.BA)(
                          v.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                        ),
                      }),
                    }),
              [a, m, A],
            ),
            Z = (0, s.useMemo)(
              () =>
                a
                  ? O
                    ? (0, n.jsx)(I.MG, {
                        track: a,
                        withAuthor: !0,
                        withBookLink: !0,
                        withSecondaryColor: !0,
                      })
                    : D
                      ? (0, n.jsx)(I.wT, {
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, n.jsx)(I.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                        })
                  : null,
              [a, D, O],
            );
          return (0, n.jsxs)("section", {
            style: W,
            className: (0, l.W)(ee().root, { [ee().root_disabled]: !a }, i),
            onDoubleClick: G,
            "aria-labelledby": et,
            ...(0, v.BA)(v.QM.player.PLAYERBAR_DESKTOP),
            children: [
              (0, n.jsx)(b.y, {
                children: (0, n.jsx)(f.Heading, {
                  variant: "h3",
                  id: et,
                  children: (0, n.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              (0, n.jsxs)("div", {
                className: ee().info,
                children: [
                  (0, n.jsx)("div", {
                    className: ee().infoCard,
                    children:
                      a &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)(C.Paper, {
                            radius: "s",
                            className: ee().coverContainer,
                            children: [
                              (0, n.jsx)(T.BE, {
                                className: ee().cover,
                                src: a.coverUri,
                                size: 100,
                                fit: "cover",
                                withAvatarReplace: !0,
                              }),
                              E &&
                                (0, n.jsxs)(g.u, {
                                  placement: "top",
                                  offsetOptions: 4,
                                  children: [
                                    (0, n.jsx)(V, {
                                      ariaLabel: A({
                                        id: "player-actions.fullscreen",
                                      }),
                                      onClick: u.showFullscreenPlayerModal,
                                    }),
                                    (0, n.jsx)(g._v, {
                                      children: (0, n.jsx)(p.Z, {
                                        id: "player-actions.fullscreen",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: ee().description,
                            children: Z,
                          }),
                        ],
                      }),
                  }),
                  (0, n.jsx)("div", {
                    className: ee().infoButtons,
                    onDoubleClick: F,
                    children:
                      a &&
                      R &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(T.Q1, {
                            className: ee().dislikeButton,
                            isLiked: a.isDisliked,
                            onClick: onDislikeClick,
                            iconSize: "xs",
                          }),
                          (0, n.jsx)(T.dJ, {
                            className: ee().likeButton,
                            isLiked: a.isLiked,
                            onClick: r,
                            iconSize: "xs",
                          }),
                          (0, n.jsx)(I.hz, {
                            track: a,
                            placement: "top",
                            open: N,
                            onOpenChange: j,
                            icon: (0, n.jsx)(h.J, {
                              size: "xs",
                              variant: "more",
                            }),
                            size: "s",
                            ...(0, v.BA)(
                              v.QM.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                            ),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: ee().sonata,
                children: [
                  (0, n.jsx)(M.WP, { isMobile: !1, entityMeta: a }),
                  !c.isGenerativeContext &&
                    (0, n.jsx)(k, {
                      disabled: !a,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: ee().meta,
                children: [
                  !c.isGenerativeContext &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        z && (0, n.jsx)(T.t5, { iconSize: "l" }),
                        U,
                        Q,
                        (0, n.jsx)(X, {
                          placement: "bottom",
                          open: S,
                          onOpenChange: L,
                          icon: (0, n.jsx)(h.J, {
                            variant: "settings",
                            size: "xs",
                          }),
                          size: "xxxs",
                          referenceClassName: ee().settingsButton,
                        }),
                      ],
                    }),
                  (0, n.jsx)(P.F, {}),
                ],
              }),
            ],
          });
        });
      var ea = i(83249),
        er = i.n(ea);
      let en = (0, o.Pi)((e) => {
          var t;
          let { className: i, entityMeta: a, onLikeClick: r } = e,
            { user: o, sonataState: c, fullscreenPlayer: u } = (0, d.oR4)(),
            m = c.contextType === y.Ak.Generative,
            _ = o.isAuthorized && !m,
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
            g = (0, s.useCallback)(
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
                    ? (0, n.jsx)(I.MG, {
                        track: a,
                        withAuthor: !0,
                        withBookLink: !0,
                        withSecondaryColor: !0,
                      })
                    : v
                      ? (0, n.jsx)(I.wT, {
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, n.jsx)(I.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                        })
                  : null,
              [a, v, x],
            );
          return (0, n.jsxs)("section", {
            style: h,
            className: (0, l.W)(er().root, i),
            onClick: g,
            children: [
              (0, n.jsx)(b.y, {
                children: (0, n.jsx)(f.Heading, {
                  variant: "h3",
                  id: "player-region",
                  children: (0, n.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              !c.isGenerativeContext &&
                (0, n.jsx)(k, {
                  className: er().progressBar,
                  sliderClassName: er().progressBar,
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !a,
                }),
              (0, n.jsxs)("div", {
                className: er().info,
                children: [
                  a
                    ? (0, n.jsxs)("div", {
                        className: er().infoCard,
                        children: [
                          (0, n.jsx)(C.Paper, {
                            radius: "s",
                            className: er().coverContainer,
                            children: (0, n.jsx)(T.BE, {
                              className: er().cover,
                              src: a.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: er().description,
                            children: N,
                          }),
                        ],
                      })
                    : (0, n.jsx)("div", { className: er().infoCard }),
                  (0, n.jsxs)("div", {
                    className: er().infoButtons,
                    children: [
                      a &&
                        _ &&
                        (0, n.jsx)(T.dJ, { isLiked: a.isLiked, onClick: r }),
                      (0, n.jsx)(M.WP, { isMobile: !0, entityMeta: a }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        el = (0, o.Pi)((e) => {
          let { className: t } = e,
            { settings: i, sonataState: a } = (0, d.oR4)(),
            r = (0, d.XUT)(),
            o = (0, c.SB)(a.entityMeta),
            u = (0, c.KX)(a.entityMeta);
          (0, s.useEffect)(() => {
            if (!a.isGenerativeContext)
              return (
                null == r || r.addShortcutsListener(d.Pwk.MAIN, d.yxF.LIKE, o),
                null == r ||
                  r.addShortcutsListener(d.Pwk.MAIN, d.yxF.DISLIKE, u),
                () => {
                  null == r ||
                    r.removeShortcutsListener(d.Pwk.MAIN, d.yxF.LIKE),
                    null == r ||
                      r.removeShortcutsListener(d.Pwk.MAIN, d.yxF.DISLIKE);
                }
              );
          }, [u, o, r, a.isGenerativeContext]);
          let _ = (0, s.useMemo)(
            () => (i.layout === d.t8m.Mobile ? en : ei),
            [i.layout],
          );
          return (0, n.jsx)(_, {
            onLikeClick: o,
            onDislikeClick: u,
            entityMeta: a.entityMeta,
            className: (0, l.W)(t, m().root),
          });
        });
      var eo = i(23897),
        es = i(89352),
        ec = i(69863),
        ed = i(67175),
        eu = i.n(ed);
      let em = (e) => {
        let { delay: t, initialState: i, throttleTimeout: a } = e,
          r = (0, s.useRef)(null),
          [n, l] = (0, s.useState)(!!i),
          o = (0, s.useMemo)(
            () =>
              (0, eo.Z)(
                () => {
                  l(!i),
                    r.current && window.clearTimeout(r.current),
                    (r.current = window.setTimeout(() => {
                      l(!!i);
                    }, t));
                },
                a,
                { trailing: !1 },
              ),
            [t, i, a],
          ),
          c = (0, s.useCallback)(() => {
            l(!!i), r.current && window.clearTimeout(r.current);
          }, [i]);
        return (
          (0, s.useEffect)(
            () => () => {
              r.current && window.clearTimeout(r.current);
            },
            [],
          ),
          { state: n, handleDelayedToggle: o, reset: c }
        );
      };
      var e_ = i(37117);
      let ep = (0, s.createContext)({}),
        ev = () => (0, s.useContext)(ep);
      var ey = i(80615),
        ex = i.n(ey),
        eh = i(68466),
        eC = i.n(eh);
      let eb = (e) => (e + 1) * 0.275,
        eg = (e) => {
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
                  : (0, n.jsx)(
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
          return (0, n.jsx)("div", {
            className: (0, l.W)(eC().root, t),
            children: Array.from({ length: 4 }, (e, t) => a(t)),
          });
        };
      var ef = i(75015),
        eN = i(45131);
      ((a = r || (r = {})).INTRO = "intro"),
        (a.PREPARE = "prepare"),
        (a.PLAYING = "playing"),
        (a.OUTRO = "outro");
      let ej = () => {
        var e;
        let t = (0, d.R$C)(),
          [i, a] = (0, s.useState)(
            null !==
              (e =
                null == t
                  ? void 0
                  : t.state.playerState.progress.value.position) && void 0 !== e
              ? e
              : 0,
          ),
          r = (0, s.useCallback)((e) => {
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
          { progressPosition: i, setProgressPosition: r }
        );
      };
      var eS = i(15419);
      let eL = (e) => {
          let { onSetProgressEventChange: t } = e,
            i = (0, d.R$C)();
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
        eA = (e) => {
          let { position: t } = e,
            {
              fullscreenPlayer: { syncLyrics: i },
            } = (0, d.oR4)();
          return {
            state: (0, s.useMemo)(() => {
              let { startSec: e, endSec: a } = i;
              return e && e >= 3 && e - t > 0 && e - t <= 3
                ? r.PREPARE
                : e && e > t
                  ? r.INTRO
                  : a && t > a
                    ? r.OUTRO
                    : r.PLAYING;
            }, [t, i]),
          };
        };
      var ew = i(83627),
        ek = i.n(ew);
      let eP = (0, o.Pi)(() => {
        var e, t, i;
        let { formatMessage: a } = (0, _.Z)(),
          {
            fullscreenPlayer: { syncLyrics: r },
          } = (0, d.oR4)();
        return (0, n.jsxs)("footer", {
          className: ek().root,
          children: [
            r.hasWriters &&
              (0, n.jsx)(f.Caption, {
                className: ek().writers,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.authors" },
                  {
                    authors:
                      null === (e = r.writers) || void 0 === e
                        ? void 0
                        : e.join(", "),
                  },
                ),
              }),
            (null === (t = r.major) || void 0 === t ? void 0 : t.name) &&
              (0, n.jsx)(f.Caption, {
                className: ek().major,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.source" },
                  {
                    source:
                      null === (i = r.major) || void 0 === i ? void 0 : i.name,
                  },
                ),
              }),
          ],
        });
      });
      var eM = i(73390),
        eI = i.n(eM);
      let eT = (e) => {
        let { className: t, text: i } = e;
        return (0, n.jsx)("span", {
          className: (0, l.W)(eI().root, t),
          children: i,
        });
      };
      var eE = i(77920),
        eR = i.n(eE);
      let eB = (e) => {
          let t = (0, s.useRef)(0),
            {
              fullscreenPlayer: { syncLyrics: i },
              sonataState: { contextId: a, contextType: r },
            } = (0, d.oR4)();
          (0, s.useEffect)(() => {
            !i.hasLyricsViewed &&
              null !== e &&
              "visible" === document.visibilityState &&
              (t.current++,
              t.current >= 2 && i.sendViews({ contextId: a, contextType: r }));
          }, [e, a, r, i]);
        },
        eV = (0, o.Pi)((e) => {
          var t, i;
          let {
              state: a,
              progressPosition: o,
              shouldShowScrolledLyrics: c,
              setProgressPosition: u,
            } = e,
            m = (0, d.R$C)(),
            _ = (0, eN.oc)(),
            {
              fullscreenPlayer: { syncLyrics: p },
            } = (0, d.oR4)(),
            v = (0, s.useCallback)(
              (e) => (t) => {
                c &&
                  (t.stopPropagation(),
                  u(e + 0.01),
                  null == m ||
                    m.setProgress(e + 0.01).catch(() => {
                      u(o);
                    }));
              },
              [o, u, c, m],
            ),
            y = p.getActiveLineIndex(o);
          return (
            eB(y),
            (0, s.useEffect)(() => {
              if (!c) {
                if (
                  ((a === r.INTRO || a === r.PREPARE) && _.slideTo(0),
                  a === r.OUTRO)
                ) {
                  var e;
                  _.slideTo(
                    Number(
                      null === (e = p.lines) || void 0 === e
                        ? void 0
                        : e.length,
                    ),
                  );
                }
                null !== y && _.slideTo(y + 1);
              }
            }, [
              y,
              c,
              a,
              _,
              null === (t = p.lines) || void 0 === t ? void 0 : t.length,
            ]),
            null === (i = p.lines) || void 0 === i
              ? void 0
              : i.map((e, t) => {
                  var i;
                  return (0, n.jsx)(
                    eN.o5,
                    {
                      onClickCapture: v(e.fromSec),
                      className: (0, l.W)(eR().line, {
                        [eR().line_last]:
                          t ===
                            Number(
                              null === (i = p.lines) || void 0 === i
                                ? void 0
                                : i.length,
                            ) -
                              1 && !c,
                        [eR().line_active]: t === y && !c,
                      }),
                      children: (0, n.jsx)(eT, { text: e.text }),
                    },
                    e.key,
                  );
                })
          );
        });
      eV.displayName = "SwiperSlide";
      let ez = { forceToAxis: !0 },
        eD = (0, o.Pi)(() => {
          let {
              fullscreenPlayer: { syncLyrics: e },
              settings: t,
            } = (0, d.oR4)(),
            { progressPosition: i, setProgressPosition: a } = ej(),
            { state: o } = eA({ position: i }),
            {
              scrollerClassName: c,
              footerClassName: u,
              counterClassName: m,
            } = ev(),
            {
              state: _,
              handleDelayedToggle: p,
              reset: v,
            } = em({ delay: 3e3, throttleTimeout: 300 }),
            {
              state: y,
              handleDelayedToggle: x,
              reset: h,
            } = em({ delay: 3e3, throttleTimeout: 300 }),
            C = t.layout === d.t8m.Mobile,
            b = (0, s.useCallback)(() => {
              y || p();
            }, [p, y]),
            g = (0, s.useCallback)(() => {
              _ && v(), x();
            }, [x, v, _]),
            f = (0, s.useCallback)(
              (e) => {
                switch (e.code) {
                  case d.DtV.KEY_L:
                  case d.DtV.KEY_J:
                  case d.DtV.ARROW_LEFT:
                  case d.DtV.ARROW_RIGHT:
                    p();
                }
              },
              [p],
            ),
            N = (0, s.useMemo)(
              () =>
                o === r.PREPARE ? Math.ceil(Number(e.startSec) - i) : null,
              [i, o, e.startSec],
            ),
            j = (0, s.useMemo)(
              () =>
                o === r.PREPARE
                  ? (0, n.jsx)(eT, { className: eR().counterLine, text: N })
                  : o === r.INTRO
                    ? (0, n.jsx)(eg, {})
                    : null,
              [N, o],
            );
          return (
            eL({ onSetProgressEventChange: h }),
            (0, s.useEffect)(
              () => (
                window.addEventListener("keydown", f),
                () => {
                  window.removeEventListener("keydown", f);
                }
              ),
              [f],
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
            (0, n.jsxs)(eN.tq, {
              className: (0, l.W)(
                eR().root,
                {
                  [eR()["root_".concat(o)]]: !y,
                  [eR().root_withVisibleUpperLyrics]: _,
                  [eR().root_withVisibleScrolledLyrics]: y,
                },
                c,
              ),
              modules: [ef.Gk, ef.Rv],
              slidesPerView: "auto",
              spaceBetween: 32,
              direction: "vertical",
              mousewheel: ez,
              freeMode: !0,
              onScroll: g,
              onTouchMove: C ? g : void 0,
              allowTouchMove: C,
              children: [
                (0, n.jsx)(eN.o5, {
                  className: (0, l.W)(eR().counter, m),
                  children: j,
                }),
                (0, n.jsx)(eV, {
                  setProgressPosition: a,
                  shouldShowScrolledLyrics: y,
                  state: o,
                  progressPosition: i,
                }),
                (0, n.jsx)(eN.o5, {
                  className: u,
                  children: (0, n.jsx)(eP, {}),
                }),
              ],
            })
          );
        }),
        eO = {
          enter: ex().root_enter,
          enterActive: ex().root_enter_active,
          exit: ex().root_exit,
          exitActive: ex().root_exit_active,
        },
        eW = (0, o.Pi)((e) => {
          let {
              className: t,
              shouldShowSyncLyrics: i,
              counterClassName: a,
              footerClassName: r,
              scrollerClassName: o,
              contentClassName: c,
              loaderClassName: u,
            } = e,
            m = (0, s.useRef)(null),
            {
              sonataState: { entityMeta: _ },
              fullscreenPlayer: { syncLyrics: p },
            } = (0, d.oR4)();
          (0, s.useEffect)(() => {
            p.currentTrackId !== (null == _ ? void 0 : _.id) &&
              i &&
              p.getData(null == _ ? void 0 : _.id);
          }, [null == _ ? void 0 : _.id, i, p]);
          let v = (0, s.useMemo)(
              () =>
                p.isLoaded
                  ? (0, n.jsx)(eD, {})
                  : ((p.isRejected || p.hasInvalidLyrics || !i) &&
                      p.setInvisible(),
                    (0, n.jsx)(eg, { className: u })),
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
                footerClassName: r,
              }),
              [a, r, o],
            );
          return (0, n.jsx)(ep.Provider, {
            value: y,
            children: (0, n.jsx)(e_.Z, {
              in: i,
              nodeRef: m,
              timeout: 200,
              unmountOnExit: !0,
              classNames: eO,
              children: (0, n.jsx)("div", {
                ref: m,
                className: (0, l.W)(ex().root, t),
                children: (0, n.jsx)("div", {
                  className: (0, l.W)(ex().content, c),
                  children: v,
                }),
              }),
            }),
          });
        });
      var eF = i(63341),
        eG = i.n(eF);
      let eU = (0, o.Pi)((e) => {
        let { className: t } = e,
          { sonataState: i } = (0, d.oR4)(),
          a = (0, s.useMemo)(
            () =>
              i.entityMeta
                ? (0, n.jsx)(I.ko, {
                    className: eG().meta,
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
        return (0, n.jsxs)("div", {
          className: (0, l.W)(eG().root, t),
          children: [
            a,
            (0, n.jsx)(k, {
              className: eG().slider,
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
      let eY = (e) => {
        let {
            shouldShowSyncLyricsControls: t,
            isContextMenuVisible: i,
            setIsContextMenuVisible: a,
          } = e,
          { formatMessage: r } = (0, _.Z)(),
          {
            fullscreenPlayer: o,
            sonataState: { entityMeta: u },
            user: m,
          } = (0, d.oR4)(),
          { state: p, handleDelayedToggle: y } = em({
            delay: 1500,
            throttleTimeout: 300,
          }),
          x = (0, c.SB)(u),
          C = (0, s.useCallback)(
            (e) => {
              e.stopPropagation(), o.syncLyrics.setInvisible();
            },
            [o],
          ),
          b = (0, s.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          g = (0, s.useMemo)(() => {
            if (
              m.isAuthorized &&
              !(null == u ? void 0 : u.isRemoved) &&
              (null == u ? void 0 : u.isAvailable)
            )
              return (0, n.jsx)(I.hz, {
                track: u,
                open: i,
                onOpenChange: a,
                placement: "left",
                icon: (0, n.jsx)(h.J, { variant: "more", size: "m" }),
                className: (0, l.W)(eZ().menuButton, {
                  [eZ().menuButton_active]: i,
                }),
                wrapperClassName: eZ().menuWrapper,
                onClick: b,
                size: "l",
                ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
              });
          }, [u, b, i, a, m.isAuthorized]);
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
          ? (0, n.jsx)(V, {
              className: (0, l.W)(eZ().fullscreenPlayerButton, {
                [eZ().fullscreenPlayerButton_visible]: p,
              }),
              ariaLabel: r({ id: "interface-actions.hide-sync-lyrics" }),
              onClick: C,
            })
          : (0, n.jsxs)("div", {
              className: (0, l.W)(eZ().root, { [eZ().root_visible]: i }),
              children: [
                (0, n.jsx)(M.WP, {
                  className: eZ().sonataControls,
                  isMobile: !1,
                  entityMeta: u,
                  isFullscreen: !0,
                }),
                g,
                (0, n.jsx)(T.dJ, {
                  className: eZ().likeButton,
                  isLiked: null == u ? void 0 : u.isLiked,
                  onClick: x,
                  iconSize: "m",
                  size: "l",
                  variant: "default",
                  color: "secondary",
                }),
              ],
            });
      };
      var eH = i(10751),
        eJ = i.n(eH);
      let eq = (e) => {
          let { className: t, children: i, coverUri: a } = e;
          return (0, n.jsxs)(C.Paper, {
            radius: "m",
            className: (0, l.W)(eJ().root, t),
            children: [
              (0, n.jsx)(T.BE, {
                className: eJ().cover,
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
            { state: r, handleDelayedToggle: o } = em({
              delay: 150,
              throttleTimeout: 100,
            }),
            {
              sonataState: { entityMeta: c },
              fullscreenPlayer: u,
            } = (0, d.oR4)(),
            m =
              (null == c ? void 0 : c.isTrackPodcast) ||
              (null == c
                ? void 0
                : null === (t = c.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            _ = null == c ? void 0 : c.isTrackAudiobook,
            p =
              !!(null == c ? void 0 : c.hasSyncLyrics) &&
              u.syncLyrics.isVisible,
            v = (0, s.useMemo)(
              () =>
                c
                  ? _
                    ? (0, n.jsx)(I.MG, {
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
                    : m
                      ? (0, n.jsx)(I.wT, {
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
                      : (0, n.jsx)(I.ko, {
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
              [c, null == c ? void 0 : c.id, m, _],
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
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(eq, {
                  className: (0, l.W)(eu().poster, eu().important, {
                    [eu().poster_withDisabledInsetTransition]: r,
                    [eu().poster_withSyncLyricsAnimation]: p,
                  }),
                  coverUri: null == c ? void 0 : c.coverUri,
                  children: (0, n.jsx)(eY, {
                    setIsContextMenuVisible: a,
                    isContextMenuVisible: i,
                    shouldShowSyncLyricsControls: p,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: eu().info,
                  children: [
                    v,
                    (0, n.jsx)(k, {
                      className: eu().sliderContainer,
                      sliderClassName: eu().slider,
                      disabled: !c,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                  ],
                }),
                (0, n.jsx)(eW, {
                  className: eu().syncLyrics,
                  loaderClassName: eu().syncLyricsLoader,
                  contentClassName: eu().syncLyricsContent,
                  shouldShowSyncLyrics: p,
                  scrollerClassName: eu().syncLyricsScroller,
                  counterClassName: eu().syncLyricsCounter,
                  footerClassName: eu().syncLyricsFooter,
                }),
                (0, n.jsx)(eU, {
                  className: (0, l.W)(eu().syncLyricsCard, {
                    [eu().syncLyricsCard_withAnimation]: p,
                  }),
                }),
              ],
            })
          );
        }),
        eX = (0, o.Pi)(() => {
          let { formatMessage: e } = (0, _.Z)(),
            [t, i] = (0, s.useState)(!1),
            {
              currentTrackInfo: { modal: a },
              sonataState: { entityMeta: r },
              fullscreenPlayer: o,
            } = (0, d.oR4)(),
            c = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == r ? void 0 : r.averageColor,
              }),
              [null == r ? void 0 : r.averageColor],
            );
          return (0, n.jsxs)(es.u, {
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
              (0, n.jsx)("header", {
                className: eu().header,
                children: (0, n.jsx)(x.z, {
                  className: eu().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "s",
                  icon: (0, n.jsx)(h.J, { variant: "arrowDown", size: "xs" }),
                  onClick: o.modal.close,
                  "aria-label": e({ id: "interface-actions.close" }),
                  ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                }),
              }),
              (0, n.jsx)(eK, {
                setIsContextMenuVisible: i,
                isContextMenuVisible: t,
              }),
              (0, n.jsx)(ec.Notification, {
                className: eu().notification,
                enableMultiContainer: !0,
                containerId: d.W$x.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, n.jsx)(ec.Notification, {
                className: eu().notification,
                enableMultiContainer: !0,
                containerId: d.W$x.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var e$ = i(9410),
        e0 = i.n(e$);
      let e1 = (0, o.Pi)((e) => {
        var t, i, a, r;
        let { className: o, onSyncLyricsButtonClick: c } = e,
          { sonataState: u, fullscreenPlayer: m } = (0, d.oR4)(),
          { formatMessage: p } = (0, _.Z)(),
          [v, y] = (0, s.useState)(!1),
          C = null === u.entityMeta,
          b =
            (null === (t = u.entityMeta) || void 0 === t
              ? void 0
              : t.isNonMusic) ||
            (null === (a = u.entityMeta) || void 0 === a
              ? void 0
              : null === (i = a.mainAlbum) || void 0 === i
                ? void 0
                : i.isNonMusic),
          g = (0, s.useMemo)(() => {
            var e;
            if (b) return;
            let t = ""
              .concat(p({ id: "interface-actions.open-sync-lyrics" }), " ")
              .concat(p({ id: "warning-messages.can-break-accessibility" }));
            return (0, n.jsx)(x.z, {
              className: (0, l.W)(e0().syncLyricsButton, {
                [e0().syncLyricsButton_active]: m.syncLyrics.isVisible,
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
              icon: (0, n.jsx)(h.J, { variant: "syncLyrics", size: "xs" }),
              onClick: c,
            });
          }, [
            p,
            m.syncLyrics.isVisible,
            c,
            b,
            null === (r = u.entityMeta) || void 0 === r
              ? void 0
              : r.hasSyncLyrics,
          ]);
        return (0, n.jsx)("div", {
          className: (0, l.W)(e0().footer, o),
          children: (0, n.jsxs)("div", {
            className: e0().footerContainer,
            children: [
              (C || u.canChangeRepeatMode) &&
                (0, n.jsx)(M.$Z, {
                  isDisabled: C,
                  repeatMode: u.repeatMode,
                  variant: "text",
                }),
              (0, n.jsx)(X, {
                open: v,
                onOpenChange: y,
                icon: (0, n.jsx)(h.J, { variant: "settings", size: "xs" }),
                size: "xxxs",
              }),
              g,
              (C || u.canShuffle) &&
                (0, n.jsx)(M.P4, {
                  isDisabled: C,
                  shuffle: u.shuffle,
                  variant: "text",
                }),
            ],
          }),
        });
      });
      var e5 = i(18806),
        e2 = i.n(e5);
      let e4 = {
          enter: e2().coverWrapper_enter,
          enterActive: e2().coverWrapper_enter_active,
          exit: e2().coverWrapper_exit,
          exitActive: e2().coverWrapper_exit_active,
        },
        e3 = (0, o.Pi)((e) => {
          var t;
          let { className: i } = e,
            a = (0, s.useRef)(null),
            [r, o] = (0, s.useState)(!1),
            {
              state: c,
              handleDelayedToggle: u,
              reset: m,
            } = em({ delay: 7e3, throttleTimeout: 0 }),
            {
              fullscreenPlayer: _,
              sonataState: { entityMeta: p },
              user: y,
            } = (0, d.oR4)(),
            x =
              (null == p ? void 0 : p.isTrackPodcast) ||
              (null == p
                ? void 0
                : null === (t = p.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            b = null == p ? void 0 : p.isTrackAudiobook,
            g =
              !!(null == p ? void 0 : p.hasSyncLyrics) &&
              _.syncLyrics.isVisible,
            f = c || !g,
            N = (0, s.useCallback)(() => {
              g && (c ? m() : u());
            }, [u, c, g, m]),
            j = (0, s.useCallback)(() => {
              g && c && u();
            }, [u, c, g]),
            S = (0, s.useCallback)(() => {
              !(window.innerWidth > 480) &&
                (null == p ? void 0 : p.hasSyncLyrics) &&
                (_.syncLyrics.isVisible
                  ? _.syncLyrics.setInvisible()
                  : _.syncLyrics.setVisible());
            }, [null == p ? void 0 : p.hasSyncLyrics, _.syncLyrics]),
            L = (0, s.useMemo)(
              () =>
                (0, eo.Z)(() => {
                  window.innerWidth > 480 && _.syncLyrics.setInvisible();
                }, 100),
              [_.syncLyrics],
            ),
            A = (0, s.useMemo)(
              () =>
                p
                  ? b
                    ? (0, n.jsx)(I.MG, {
                        textClassName: e2().metaText,
                        track: p,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !0,
                      })
                    : x
                      ? (0, n.jsx)(I.wT, {
                          textClassName: e2().metaText,
                          track: p,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                        })
                      : (0, n.jsx)(I.ko, {
                          textClassName: e2().metaText,
                          track: p,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                        })
                  : void 0,
              [p, x, b],
            );
          return (
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", L),
                () => {
                  window.removeEventListener("resize", L);
                }
              ),
              [L],
            ),
            (0, s.useLayoutEffect)(() => {
              L();
            }, [L]),
            (0, s.useLayoutEffect)(() => {
              g && u();
            }, [g, u]),
            (0, n.jsxs)("div", {
              onTouchEnd: j,
              className: (0, l.W)(e2().root, i),
              children: [
                (0, n.jsx)("div", {
                  className: e2().content,
                  children: (0, n.jsxs)("div", {
                    className: e2().wrapper,
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, l.W)(e2().infoBlock, {
                          [e2().infoBlock_withExpandedSyncLyrics]: !c && g,
                        }),
                        children: [
                          (0, n.jsxs)("div", {
                            onClick: N,
                            className: e2().coverContainer,
                            children: [
                              (0, n.jsx)(eW, {
                                className: e2().syncLyrics,
                                scrollerClassName: e2().syncLyricsScroller,
                                contentClassName: e2().syncLyricsContent,
                                loaderClassName: e2().syncLyricsLoader,
                                footerClassName: e2().syncLyricsFooter,
                                counterClassName: e2().syncLyricsCounter,
                                shouldShowSyncLyrics: g,
                              }),
                              (0, n.jsx)(e_.Z, {
                                in: !g,
                                nodeRef: a,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: e4,
                                children: (0, n.jsx)(C.Paper, {
                                  ref: a,
                                  radius: "m",
                                  className: e2().coverWrapper,
                                  children: (0, n.jsx)(T.BE, {
                                    className: e2().cover,
                                    src: null == p ? void 0 : p.coverUri,
                                    size: 400,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: e2().trackInfo,
                            children: [
                              !c &&
                                g &&
                                (0, n.jsx)(C.Paper, {
                                  className: e2().trackInfoCoverContainer,
                                  radius: "xs",
                                  children: (0, n.jsx)(T.BE, {
                                    className: e2().trackInfoCover,
                                    src: null == p ? void 0 : p.coverUri,
                                    size: 200,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              (0, n.jsxs)("div", {
                                className: e2().metaContainer,
                                children: [
                                  A,
                                  y.isAuthorized &&
                                    !(null == p ? void 0 : p.isRemoved) &&
                                    (null == p ? void 0 : p.isAvailable) &&
                                    (0, n.jsx)(I.hz, {
                                      className: (0, l.W)(e2().contextMenu, {
                                        [e2().contextMenu_visible]: r,
                                      }),
                                      track: p,
                                      open: r,
                                      onOpenChange: o,
                                      placement: "bottom",
                                      isFullscreenMobile: !0,
                                      size: "xs",
                                      icon: (0, n.jsx)(h.J, {
                                        variant: "more",
                                        size: "xxs",
                                      }),
                                      ...(0, v.BA)(
                                        v.QM.player
                                          .FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f &&
                        (0, n.jsx)(k, {
                          className: e2().timeline,
                          disabled: !p,
                          isMobile: !0,
                          isFullscreen: !0,
                          showThumbVariant: "always",
                        }),
                      f &&
                        (0, n.jsx)(M.WP, {
                          className: e2().buttonsBlock,
                          isMobile: !0,
                          entityMeta: p,
                          isFullscreen: !0,
                        }),
                    ],
                  }),
                }),
                f && (0, n.jsx)(e1, { onSyncLyricsButtonClick: S }),
              ],
            })
          );
        });
      var e8 = i(9349),
        e9 = i.n(e8);
      let e6 = (e) => {
          let { children: t, className: i } = e,
            a = (0, d.R$C)(),
            { fullscreenPlayer: r } = (0, d.oR4)(),
            { formatMessage: o } = (0, _.Z)(),
            c = (0, s.useRef)(""),
            u = (0, s.useCallback)(
              (e) => {
                e.stopPropagation(), r.modal.isOpened && r.modal.close();
              },
              [r],
            ),
            m = (0, s.useMemo)(() => {
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
          return (0, n.jsxs)("div", {
            className: (0, l.W)(e9().root, i),
            children: [
              !!m &&
                (0, n.jsxs)("div", {
                  className: e9().textBlock,
                  children: [
                    (0, n.jsx)(f.Caption, {
                      variant: "span",
                      size: "s",
                      weight: "normal",
                      className: e9().subTitle,
                      children: (0, n.jsx)(p.Z, { id: "playing-now.common" }),
                    }),
                    c.current
                      ? (0, n.jsx)(T.rU, {
                          href: c.current,
                          target: "_self",
                          onClick: u,
                          className: e9().link,
                          children: (0, n.jsx)(f.Caption, {
                            variant: "span",
                            size: "m",
                            className: e9().title,
                            lineClamp: 1,
                            children: m,
                          }),
                        })
                      : (0, n.jsx)(f.Caption, {
                          variant: "span",
                          size: "m",
                          className: e9().title,
                          lineClamp: 1,
                          children: m,
                        }),
                  ],
                }),
              t,
            ],
          });
        },
        e7 = (0, o.Pi)(() => {
          let { formatMessage: e } = (0, _.Z)(),
            { fullscreenPlayer: t, experiments: i } = (0, d.oR4)(),
            a = (0, s.useMemo)(
              () =>
                i.checkExperiment(d.peG.WebNextPlayQueue, "on")
                  ? (0, n.jsx)(x.z, {
                      radius: "round",
                      size: "s",
                      variant: "text",
                      withRipple: !1,
                      "aria-label": e({ id: "play-queue.title" }),
                      icon: (0, n.jsx)(h.J, {
                        variant: "playQueue",
                        size: "xs",
                      }),
                    })
                  : (0, n.jsx)(T.wx, {
                      title: e({ id: "play-queue.title" }),
                      description: e({ id: "future-feature.message" }),
                      children: (0, n.jsx)(x.z, {
                        radius: "round",
                        size: "s",
                        variant: "text",
                        disabled: !0,
                        withRipple: !1,
                        "aria-hidden": !0,
                        icon: (0, n.jsx)(h.J, {
                          variant: "playQueue",
                          size: "xs",
                        }),
                      }),
                    }),
              [i, e],
            );
          return (0, n.jsxs)("header", {
            className: e0().header,
            children: [
              (0, n.jsx)(x.z, {
                radius: "round",
                color: "secondary",
                size: "s",
                variant: "text",
                icon: (0, n.jsx)(h.J, { variant: "arrowDown", size: "xs" }),
                onClick: t.modal.close,
                "aria-label": e({ id: "interface-actions.close" }),
              }),
              (0, n.jsx)(e6, {
                className: e0().headerCenter,
                children: (0, n.jsx)(T.wx, {
                  title: e({ id: "player-actions.cast" }),
                  description: e({ id: "future-feature.message" }),
                  children: (0, n.jsx)(x.z, {
                    className: e0().castButton,
                    radius: "round",
                    size: "s",
                    variant: "text",
                    disabled: !0,
                    withRipple: !1,
                    "aria-label": e({ id: "player-actions.cast" }),
                    icon: (0, n.jsx)(h.J, { variant: "cast", size: "xs" }),
                  }),
                }),
              }),
              a,
            ],
          });
        }),
        te = (0, o.Pi)(() => {
          let {
              sonataState: { entityMeta: e },
              fullscreenPlayer: t,
            } = (0, d.oR4)(),
            i = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == e ? void 0 : e.averageColor,
              }),
              [null == e ? void 0 : e.averageColor],
            );
          return (0, n.jsxs)(es.u, {
            className: (0, l.W)(e0().root, e0().important),
            open: t.modal.isOpened,
            onOpenChange: t.modal.onOpenChange,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: i,
            contentClassName: e0().modalContent,
            children: [
              (0, n.jsx)(e7, {}),
              (0, n.jsx)(e3, {}),
              (0, n.jsx)(ec.Notification, {
                className: e0().notification,
                enableMultiContainer: !0,
                containerId: d.W$x.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, n.jsx)(ec.Notification, {
                className: e0().notification,
                enableMultiContainer: !0,
                containerId: d.W$x.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        }),
        tt = (e) => {
          {
            let t = e === d.t8m.Mobile,
              i = window.screen.availHeight || window.innerHeight;
            return (!t && i < 450) || t;
          }
        },
        ti = (0, o.Pi)(() => {
          let { settings: e } = (0, d.oR4)(),
            t = e.layout === d.t8m.Mobile,
            [i, a] = (0, s.useState)(t),
            r = (0, s.useMemo)(
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
                window.addEventListener("resize", r),
                () => {
                  window.removeEventListener("resize", r);
                }
              ),
              [r, e.layout],
            ),
            i ? (0, n.jsx)(te, {}) : (0, n.jsx)(eX, {})
          );
        });
      var ta = i(42288),
        tr = i(3429),
        tn = i(95695),
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
          loadingState: ta.V5.enumeration(Object.values(d.Gui)),
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
              return e.loadingState === d.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === d.Gui.REJECT;
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
              var r;
              return !!(
                e.loadingState === d.Gui.RESOLVE &&
                (null === (r = e.lines) || void 0 === r ? void 0 : r.length) ===
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
                let { tracksResource: a, modelActionsLogger: r } = (0, ta.dU)(
                  e,
                );
                if (i)
                  try {
                    e.loadingState = d.Gui.PENDING;
                    let {
                      downloadUrl: r,
                      major: n,
                      externalLyricId: l,
                      lyricId: o,
                      writers: s,
                    } = yield a.getLyrics((0, I.o)(i, tn.yG.LRC));
                    (e.major = (0, c.jp)(n)),
                      (e.externalLyricId = l),
                      (e.lyricId = o),
                      (e.writers = (0, ta.pj)(s)),
                      (e.currentTrackId = i),
                      (e.hasLyricsViewed = !1),
                      yield t.downloadSyncLyrics(r),
                      (e.loadingState = d.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = d.Gui.REJECT), r.error(t);
                  }
              }),
              downloadSyncLyrics: (0, ta.ls)(function* (t) {
                let { tracksResource: i } = (0, ta.dU)(e),
                  a = yield i.getLyricsText(t);
                e.lines = (0, ta.pj)(ts(a));
              }),
              sendViews: (0, ta.ls)(function* (t) {
                let { contextId: i, contextType: a } = t,
                  { lyricViewsResource: r, modelActionsLogger: n } = (0, ta.dU)(
                    e,
                  );
                if (e.loadingState === d.Gui.RESOLVE)
                  try {
                    if (
                      !e.major ||
                      !e.lyricId ||
                      !e.externalLyricId ||
                      !e.currentTrackId
                    )
                      return;
                    yield r.sendViews({
                      lyricViews: [
                        {
                          id: (0, tr.Z)(),
                          trackId: e.currentTrackId,
                          majorId: e.major.id,
                          lyricId: e.lyricId,
                          externalLyricId: e.externalLyricId,
                          lyricFormat: tn.yG.LRC,
                          albumId: a === y.Ak.Album && i ? i : void 0,
                          playlistId: a === y.Ak.Playlist && i ? i : void 0,
                        },
                      ],
                    }),
                      (e.hasLyricsViewed = !0);
                  } catch (e) {
                    n.error(e);
                  }
              }),
            };
            return t;
          });
      var tu = i(395);
      let tm = ta.V5.model("FullscreenPlayer", {
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
    68478: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return eg;
        },
        L: function () {
          return f;
        },
      });
      var a,
        r,
        n = i(42288),
        l = i(10542),
        o = i(84338),
        s = i(15419),
        c = i(38527),
        d = i(395),
        u = i(33589);
      let m = (e, t) => {
          var i, a;
          let r = null == t ? void 0 : t.map((e) => (0, u.tR)({ artist: e }));
          return (0, n.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
            albumArtists: r,
            albumType: e.albumType,
          });
        },
        _ = (e) => {
          var t, i;
          return (0, n.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        p = (e) => {
          var t, i;
          return (0, n.pj)({
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
          return (0, n.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: e.coverUri,
            averageColor:
              null === (t = e.derivedColors) || void 0 === t
                ? void 0
                : t.average,
          });
        };
      var y = i(44023);
      let x = (e, t) => {
        let i = (0, y.Vt)(e, t);
        if (null == t ? void 0 : t.albumId) {
          var a, r;
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
                : null === (r = e.trackPosition) || void 0 === r
                  ? void 0
                  : r.index,
          };
        }
        return (0, n.pj)({ ...i });
      };
      ((a = r || (r = {})).ALBUM = "album"),
        (a.ARTIST = "artist"),
        (a.PLAYLIST = "playlist"),
        (a.TRACK = "track");
      let h = n.V5.model("TrailerMeta", {
        id: n.V5.string,
        title: n.V5.maybe(n.V5.string),
        uuid: n.V5.maybe(n.V5.string),
        coverUri: n.V5.maybe(n.V5.string),
        averageColor: n.V5.maybe(n.V5.string),
        albumArtists: n.V5.maybe(n.V5.array(u.Go)),
        albumType: n.V5.maybe(n.V5.string),
      }).views((e) => ({
        getUrl(t) {
          switch (t) {
            case r.ALBUM:
              return "/album/".concat(e.id);
            case r.ARTIST:
              return "/artist/".concat(e.id);
            case r.PLAYLIST:
              return "/playlists/".concat(e.uuid);
            case r.TRACK:
              return;
          }
        },
      }));
      var C = i(75191);
      let b = n.V5.model("TrailerState", {
          contextType: n.V5.maybeNull(n.V5.enumeration(Object.values(o.Ak))),
          contextId: n.V5.maybeNull(n.V5.string),
          entityMeta: n.V5.maybeNull(C.s$),
          status: n.V5.enumeration(Object.values(s.Xz)),
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
        g = y.le
          .props({
            isBest: n.V5.maybe(n.V5.boolean),
            positionInAlbum: n.V5.maybe(n.V5.number),
          })
          .named("TrailerTrack"),
        f = n.V5.model("Trailer", {
          id: n.V5.maybeNull(n.V5.string),
          loadingState: n.V5.enumeration(Object.values(c.Gui)),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          modal: d.KL,
          variant: n.V5.maybeNull(n.V5.enumeration(Object.values(r))),
          tracks: n.V5.maybeNull(n.V5.array(g)),
          meta: n.V5.maybeNull(h),
          state: b,
          withAnimation: n.V5.boolean,
          shouldAutoStartPlaying: n.V5.boolean,
          sonataStatusBeforeTrailerStart: n.V5.enumeration(Object.values(s.Xz)),
          isManuallyPaused: n.V5.boolean,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === c.Gui.IDLE ||
                e.loadingState === c.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === c.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === c.Gui.REJECT;
            },
            get isNotFound() {
              var t;
              let i =
                  e.loadingState === c.Gui.RESOLVE &&
                  (null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                a = e.errorStatusCode === l.CN.NOT_FOUND;
              return i || a;
            },
            get objectId() {
              return "".concat(e.variant, ":").concat(e.id);
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
              isTrailerActive: (t, i) =>
                !!e.modal.isOpened && e.variant === t && e.id === i,
              openArtistTrailer(i) {
                let { sonataState: a } = (0, n.yj)(e);
                t.isTrailerActive(r.ARTIST, i) ||
                  (t.reset(),
                  (e.variant = r.ARTIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getArtistTrailer(i));
              },
              openAlbumTrailer(i) {
                let { sonataState: a } = (0, n.yj)(e);
                t.isTrailerActive(r.ALBUM, String(i)) ||
                  (t.reset(),
                  (e.variant = r.ALBUM),
                  (e.id = String(i)),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getAlbumTrailer(i));
              },
              openPlaylistTrailer(i) {
                let { sonataState: a } = (0, n.yj)(e);
                t.isTrailerActive(r.PLAYLIST, i) ||
                  (t.reset(),
                  (e.variant = r.PLAYLIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getPlaylistTrailer(i));
              },
              openTrackTrailer(i) {
                let { sonataState: a } = (0, n.yj)(e);
                t.isTrailerActive(r.TRACK, i) ||
                  (t.reset(),
                  (e.variant = r.TRACK),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getTrackTrailer(i));
              },
              getArtistTrailer: (0, n.ls)(function* (i) {
                let { artistsResource: a } = (0, n.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { artist: t, trailer: r } = yield a.getTrailer({
                      artistId: i,
                    });
                    r.tracks &&
                      (e.tracks = (0, n.pj)(
                        r.tracks.map((e) => x(e, { isSmartPreview: !0 })),
                      )),
                      t && (e.meta = _(t)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, n.ls)(function* (i) {
                let { albumResource: a } = (0, n.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let {
                      album: t,
                      artists: r,
                      trailer: l,
                    } = yield a.getTrailer({ albumId: i });
                    l.tracks &&
                      (e.tracks = (0, n.pj)(
                        l.tracks.map((e) =>
                          x(e, { isSmartPreview: !0, albumId: t.id }),
                        ),
                      )),
                      t && (e.meta = m(t, r)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, n.ls)(function* (i) {
                let { usersResource: a } = (0, n.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { uid: t, kind: r } = (0, o.bo)(i);
                    if (!t || !r) {
                      e.loadingState = c.Gui.REJECT;
                      return;
                    }
                    let { playlist: l, trailer: s } =
                      yield a.getPlaylistTrailer({
                        userId: t,
                        playlistKind: Number(r),
                      });
                    s.tracks &&
                      (e.tracks = (0, n.pj)(
                        s.tracks.map((e) => x(e, { isSmartPreview: !0 })),
                      )),
                      l && (e.meta = p(l)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, n.ls)(function* (i) {
                let { tracksResource: a } = (0, n.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { track: t } = yield a.getTrailer({ trackId: i });
                    t &&
                      ((e.tracks = (0, n.pj)([x(t, { isSmartPreview: !0 })])),
                      (e.meta = v(t))),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { modelActionsLogger: i } = (0, n.dU)(e);
                i.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== c.Gui.IDLE &&
                    (e.loadingState = c.Gui.REJECT);
              },
              reset() {
                (e.loadingState = c.Gui.IDLE),
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
        L = i(80542),
        A = i(23881),
        w = i(39513),
        k = i(28852),
        P = i(89352),
        M = i(18375);
      let I = () => {
        let e = (0, c.z$f)(),
          t = (0, c.wLl)(),
          { hash: i } = (0, c.RQn)(),
          { pageId: a } = (0, c.lVB)();
        return (0, S.useCallback)(
          (r) => {
            if (!e || !a) return;
            let n = {
                hash: i,
                pageId: c.x3Y[a],
                mainObjectType: M.OB.Trailer,
                mainObjectId: r,
              },
              l = (0, c.KOr)({ params: n, logger: t, context: I.name });
            l && (0, M.IA)(e.evgenInstance, l);
          },
          [e, i, t, a],
        );
      };
      var T = i(78604);
      let E = () => {
        let { trailer: e } = (0, c.oR4)(),
          t = (0, c.R$C)(),
          i = (0, c.XUT)(),
          a = (0, T.SB)(e.state.entityMeta),
          r = (0, T.KX)(e.state.entityMeta);
        (0, S.useEffect)(() => {
          e.modal.isOpened
            ? (null == i || i.disable(c.Pwk.MAIN),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.TOGGLE_MUTE),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.INCREASE_VOLUME),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.DECREASE_VOLUME),
              null == i || i.enable(c.Pwk.TRAILER))
            : (null == i || i.disable(c.Pwk.TRAILER),
              null == i || i.enable(c.Pwk.MAIN));
        }, [i, e.modal.isOpened]),
          (0, S.useEffect)(
            () => (
              null == i ||
                i.addShortcutsListener(c.Pwk.TRAILER, c.yxF.TOGGLE_PLAY, () => {
                  null == t || t.togglePause(c.jiA.TRAILER);
                }),
              null == i || i.addShortcutsListener(c.Pwk.TRAILER, c.yxF.LIKE, a),
              null == i ||
                i.addShortcutsListener(c.Pwk.TRAILER, c.yxF.DISLIKE, r),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.MOVE_FORWARD,
                  async () => {
                    var e;
                    (null == t
                      ? void 0
                      : null ===
                            (e = t.getState(c.jiA.TRAILER).currentContext
                              .value) || void 0 === e
                        ? void 0
                        : e.availableActions.moveForward.value) &&
                      (await (null == t
                        ? void 0
                        : t.moveForward(c.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.MOVE_BACKWARD,
                  async () => {
                    var e;
                    (null == t
                      ? void 0
                      : null ===
                            (e = t.getState(c.jiA.TRAILER).currentContext
                              .value) || void 0 === e
                        ? void 0
                        : e.availableActions.moveBackward.value) &&
                      (await (null == t
                        ? void 0
                        : t.moveBackward(c.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.SLIDE_FORWARD,
                  async () => {
                    (null == t
                      ? void 0
                      : t.getState(c.jiA.TRAILER).playerState.progress.value
                          .duration) &&
                      (await (null == t
                        ? void 0
                        : t.slideForward(1, c.jiA.TRAILER)));
                  },
                ),
              null == i ||
                i.addShortcutsListener(
                  c.Pwk.TRAILER,
                  c.yxF.SLIDE_BACKWARD,
                  async () => {
                    (null == t
                      ? void 0
                      : t.getState(c.jiA.TRAILER).playerState.progress.value
                          .duration) &&
                      (await (null == t
                        ? void 0
                        : t.slideBackward(1, c.jiA.TRAILER)));
                  },
                ),
              () => {
                null == i ||
                  i.removeShortcutsListener(c.Pwk.TRAILER, c.yxF.TOGGLE_PLAY),
                  null == i ||
                    i.removeShortcutsListener(c.Pwk.TRAILER, c.yxF.LIKE),
                  null == i ||
                    i.removeShortcutsListener(c.Pwk.TRAILER, c.yxF.DISLIKE),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.MOVE_FORWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.MOVE_BACKWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.SLIDE_FORWARD,
                    ),
                  null == i ||
                    i.removeShortcutsListener(
                      c.Pwk.TRAILER,
                      c.yxF.SLIDE_BACKWARD,
                    );
              }
            ),
            [r, a, i, t],
          );
      };
      var R = i(60836),
        B = i(3084);
      let V = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (r) => {
              if (!e || !a) return;
              let n = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: M.OB.Trailer,
                  mainObjectId: r,
                },
                l = (0, c.KOr)({ params: n, logger: t, context: V.name });
              l && (0, M.a5)(e.evgenInstance, l);
            },
            [e, i, t, a],
          );
        },
        z = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (r) => {
              if (!e || !a) return;
              let n = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: M.OB.Trailer,
                  mainObjectId: r,
                },
                l = (0, c.KOr)({ params: n, logger: t, context: z.name });
              l && (0, M.$M)(e.evgenInstance, l);
            },
            [e, i, t, a],
          );
        },
        D = (e) => {
          let { variant: t, id: i, from: a, uuid: n } = e;
          switch (t) {
            case r.ALBUM:
              return {
                type: o.Ak.Album,
                trailer: !0,
                meta: { id: Number(i) },
                from: a,
              };
            case r.ARTIST:
              return {
                type: o.Ak.Artist,
                trailer: !0,
                meta: { id: String(i) },
                from: a,
              };
            case r.PLAYLIST:
              return {
                type: o.Ak.Playlist,
                trailer: !0,
                meta: { id: String(i), uuid: n },
                from: a,
              };
            case r.TRACK:
              return {
                type: o.Ak.Various,
                trailer: !0,
                meta: { id: String(i) },
                from: a,
              };
          }
        };
      var O = i(31014),
        W = i(2570),
        F = i(49025),
        G = i.n(F);
      let U = (0, j.Pi)(() => {
          let { trailer: e } = (0, c.oR4)(),
            { variant: t, id: i } = e,
            a = (0, S.useCallback)(() => {
              if (t && i)
                switch (t) {
                  case r.ALBUM:
                    e.getAlbumTrailer(Number(i));
                    break;
                  case r.ARTIST:
                    e.getArtistTrailer(i);
                    break;
                  case r.PLAYLIST:
                    e.getPlaylistTrailer(i);
                    break;
                  case r.TRACK:
                    e.getTrackTrailer(i);
                }
            }, [i, e, t]);
          return (0, N.jsxs)("div", {
            className: G().root,
            children: [
              (0, N.jsxs)("div", {
                className: G().textContainer,
                children: [
                  (0, N.jsx)(W.Heading, {
                    variant: "h2",
                    className: G().title,
                    size: "xs",
                    weight: "bold",
                    children: (0, N.jsx)(O.Z, {
                      id: "error-messages.something-went-wrong",
                    }),
                  }),
                  (0, N.jsx)(W.Caption, {
                    className: G().description,
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, N.jsx)(O.Z, {
                      id: "trailer.something-went-wrong-description",
                    }),
                  }),
                ],
              }),
              (0, N.jsx)(w.z, {
                onClick: a,
                color: "secondary",
                size: "default",
                radius: "xxxl",
                children: (0, N.jsx)(W.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, N.jsx)(O.Z, { id: "page-error.reload" }),
                }),
              }),
            ],
          });
        }),
        Q = () =>
          (0, N.jsx)("div", {
            className: G().root,
            children: (0, N.jsxs)("div", {
              className: G().textContainer,
              children: [
                (0, N.jsx)(W.Heading, {
                  variant: "h2",
                  className: G().title,
                  size: "xs",
                  weight: "bold",
                  children: (0, N.jsx)(O.Z, { id: "trailer.not-found-title" }),
                }),
                (0, N.jsx)(W.Caption, {
                  className: G().description,
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: (0, N.jsx)(O.Z, {
                    id: "trailer.not-found-description",
                  }),
                }),
              ],
            }),
          });
      var Z = i(90679);
      let Y = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (r, n) => {
              if (!e || !a) return;
              let l = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: r,
                  mainObjectId: n,
                },
                o = (0, c.KOr)({ params: l, logger: t, context: Y.name });
              o && (0, M.$M)(e.evgenInstance, o);
            },
            [e, i, t, a],
          );
        },
        H = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (r, n) => {
              if (!e || !a) return;
              let l = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: M.OB.Trailer,
                  mainObjectId: r,
                  from: M.qU.TrailerScreen,
                  to: c.x3Y[n],
                },
                o = (0, c.KOr)({ params: l, logger: t, context: H.name });
              o && (0, M.H1)(e.evgenInstance, o);
            },
            [e, i, t, a],
          );
        },
        J = (e) => {
          let { variant: t, id: i, from: a, uuid: n } = e;
          switch (t) {
            case r.ALBUM:
              return { type: o.Ak.Album, meta: { id: Number(i) }, from: a };
            case r.ARTIST:
              return { type: o.Ak.Artist, meta: { id: String(i) }, from: a };
            case r.PLAYLIST:
              return {
                type: o.Ak.Playlist,
                meta: { id: String(i), uuid: n },
                from: a,
              };
            case r.TRACK:
              return { type: o.Ak.Various, meta: { id: String(i) }, from: a };
          }
        },
        q = {
          [r.ALBUM]: M.OB.Album,
          [r.ARTIST]: M.OB.Artist,
          [r.PLAYLIST]: M.OB.Playlist,
          [r.TRACK]: M.OB.Track,
        },
        K = {
          [r.ALBUM]: c.Rhz.ALBUM,
          [r.ARTIST]: c.Rhz.ARTIST,
          [r.PLAYLIST]: c.Rhz.PLAYLIST,
        },
        X = (e) => {
          let {
            trailer: { meta: t },
            artist: i,
            album: a,
            playlist: n,
          } = (0, c.oR4)();
          switch (e) {
            case r.ALBUM:
              return a.id === Number(null == t ? void 0 : t.id);
            case r.ARTIST:
              return i.id === (null == t ? void 0 : t.id);
            case r.PLAYLIST:
              return n.uuid === (null == t ? void 0 : t.uuid);
            case r.TRACK:
              return !1;
          }
        };
      var $ = i(82705),
        ee = i.n($);
      let et = (e) => {
          let { isActive: t, className: i, isCurrentEntityPage: a } = e;
          return (0, N.jsxs)("div", {
            className: (0, R.W)(ee().root, i),
            children: [
              (0, N.jsx)(Z.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: ee().playButtonShimmer,
              }),
              a &&
                (0, N.jsx)(Z.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: ee().linkButtonShimmer,
                }),
            ],
          });
        },
        ei = (0, j.Pi)((e) => {
          var t;
          let {
              variant: i,
              isShimmerVisible: a,
              isShimmerActive: n,
              className: l,
            } = e,
            {
              trailer: { state: o, meta: d, modal: u, objectId: m },
            } = (0, c.oR4)(),
            _ = (0, c.R$C)(),
            p = (0, c.x5)({ pageId: i, blockId: c.aUg.TRAILER }),
            v = H(),
            y = I(),
            x = Y(),
            h = (0, c.s0h)(null == d ? void 0 : d.getUrl(i)),
            C = (0, S.useCallback)(() => {
              h();
              let e = K[i];
              e && v(m, e);
            }, [h, m, v, i]),
            b = X(i),
            g = !b && i !== r.TRACK,
            f = (0, S.useCallback)(() => {
              var e;
              null == _ || _.stop(c.jiA.TRAILER), u.close(), y(m), g && C();
              let t =
                  o.status === s.Xz.PLAYING
                    ? {
                        entityId:
                          null === (e = o.entityMeta) || void 0 === e
                            ? void 0
                            : e.id,
                      }
                    : { index: 0 },
                a = J({
                  variant: i,
                  id: null == d ? void 0 : d.id,
                  uuid: null == d ? void 0 : d.uuid,
                  from: p,
                });
              null == _ ||
                _.playContext({ contextData: a, queueParams: t }).then(() => {
                  (null == d ? void 0 : d.id) && x(q[i], d.id);
                });
            }, [
              p,
              C,
              g,
              null == d ? void 0 : d.id,
              null == d ? void 0 : d.uuid,
              u,
              m,
              y,
              x,
              _,
              null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
              o.status,
              i,
            ]),
            j = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: (0, R.W)(ee().root, l),
                  children: [
                    (0, N.jsx)(w.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, N.jsx)(k.J, { variant: "play", size: "xxxs" }),
                      className: ee().button,
                      onClick: f,
                      ...(0, A.BA)(
                        A.QM.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                      ),
                      children: (0, N.jsx)(O.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    g &&
                      (0, N.jsx)(w.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: C,
                        className: ee().button,
                        ...(0, A.BA)(
                          A.QM.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                        ),
                        children: (0, N.jsx)(O.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [l, f, C, g],
            );
          return a
            ? et({ isActive: n, isCurrentEntityPage: b, className: l })
            : j;
        });
      var ea = i(95695),
        er = i(86939),
        en = i(12404),
        el = i(65094),
        eo = i.n(el);
      let es = (e, t) =>
          (0, N.jsx)("div", {
            className: eo().coverContainer,
            children: (0, N.jsx)(Z.Shimmer, {
              isActive: e,
              radius: t,
              className: eo().cover,
            }),
          }),
        ec = (e) =>
          (0, N.jsxs)("div", {
            className: eo().textContainer,
            children: [
              (0, N.jsx)("div", {
                className: eo().shimmerContainer,
                children: (0, N.jsx)(Z.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: eo().titleShimmer,
                }),
              }),
              (0, N.jsx)("div", {
                className: eo().shimmerContainer,
                children: (0, N.jsx)(Z.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: eo().descriptionShimmer,
                }),
              }),
            ],
          }),
        ed = (0, j.Pi)((e) => {
          let {
              variant: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              className: n,
            } = e,
            {
              trailer: { meta: l, objectId: o },
            } = (0, c.oR4)(),
            s = (0, c.x5)({ pageId: t, blockId: c.aUg.TRAILER }),
            d = H(),
            u = t === r.ARTIST ? "round" : "s",
            { togglePlay: m, isPlaying: _ } = (0, c.bA$)({
              playContextParams: {
                contextData: D({
                  variant: t,
                  id: null == l ? void 0 : l.id,
                  uuid: null == l ? void 0 : l.uuid,
                  from: s,
                }),
                loadContextMeta: !0,
              },
            }),
            p = (0, S.useCallback)(() => {
              let e = K[t];
              e && d(o, e);
            }, [o, d, t]),
            v = (0, S.useMemo)(() => {
              let e = {
                "--icon-background-color": null == l ? void 0 : l.averageColor,
              };
              return (0, N.jsxs)("div", {
                className: eo().coverContainer,
                ...(0, A.BA)(A.QM.trailer.TRAILER_COVER),
                children: [
                  (0, N.jsx)(en.Paper, {
                    radius: u,
                    className: eo().cover,
                    withShadow: !0,
                    children: (0, N.jsx)(er.Image, {
                      "aria-hidden": !0,
                      src: null == l ? void 0 : l.coverUri,
                      size: 100,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, N.jsx)("div", {
                    className: eo().iconContainer,
                    style: e,
                    children: (0, N.jsx)(k.J, {
                      variant: "trailer",
                      size: "xs",
                      className: eo().icon,
                    }),
                  }),
                ],
              });
            }, [
              u,
              null == l ? void 0 : l.averageColor,
              null == l ? void 0 : l.coverUri,
            ]),
            y = (0, S.useMemo)(() => {
              switch (t) {
                case r.ALBUM:
                  if ((null == l ? void 0 : l.albumType) === ea.VZ.SINGLE)
                    return (0, N.jsx)(O.Z, { id: "trailer.title-single" });
                  return (0, N.jsx)(O.Z, { id: "trailer.title-album" });
                case r.ARTIST:
                  return (0, N.jsx)(O.Z, { id: "trailer.title-artist" });
                case r.PLAYLIST:
                  return (0, N.jsx)(O.Z, { id: "trailer.title-playlist" });
                case r.TRACK:
                  return (0, N.jsx)(O.Z, { id: "trailer.title-track" });
              }
            }, [null == l ? void 0 : l.albumType, t]),
            x = (0, S.useMemo)(() => {
              let e = null == l ? void 0 : l.getUrl(t);
              return e
                ? (0, N.jsx)(B.rU, {
                    href: e,
                    className: eo().link,
                    onClick: p,
                    ...(0, A.BA)(A.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: (0, N.jsx)(W.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: eo().text,
                      children: null == l ? void 0 : l.title,
                    }),
                  })
                : (0, N.jsx)(W.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: eo().text,
                    ...(0, A.BA)(A.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: null == l ? void 0 : l.title,
                  });
            }, [p, l, t]),
            h = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: eo().textContainer,
                  children: [
                    (0, N.jsx)(W.Heading, {
                      variant: "h1",
                      className: (0, R.W)(eo().text, eo().title),
                      lineClamp: 1,
                      ...(0, A.BA)(A.QM.trailer.TRAILER_MODAL_TITLE),
                      children: y,
                    }),
                    x,
                  ],
                }),
              [x, y],
            );
          return (0, N.jsxs)("div", {
            className: (0, R.W)(eo().root, n),
            ...(0, A.BA)(A.QM.trailer.TRAILER_HEADER),
            children: [
              i ? es(a, u) : v,
              i ? ec(a) : h,
              !i &&
                (0, N.jsx)(B.JM, {
                  className: eo().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: _,
                  iconClassName: eo().playButtonIcon,
                  onClick: m,
                }),
            ],
          });
        }),
        eu = (e) => {
          var t;
          let i = (0, c.R$C)(),
            {
              trailer: { state: a },
            } = (0, c.oR4)(),
            [r, n] = (0, S.useState)(0),
            l =
              (null === (t = a.entityMeta) || void 0 === t ? void 0 : t.id) ===
              e;
          return (
            (0, S.useEffect)(() => {
              let e =
                null == i
                  ? void 0
                  : i
                      .getState(c.jiA.TRAILER)
                      .playerState.progress.onChange(() => {
                        let e = i.getState(c.jiA.TRAILER).playerState,
                          t = e.progress.value;
                        l || n(0),
                          e.status.value === s.Xz.PLAYING &&
                            l &&
                            n((t.position / t.duration) * 100);
                      });
              return () => {
                null == e || e();
              };
            }, [l, i]),
            { isActive: l, progress: r }
          );
        };
      var em = i(80684),
        e_ = i.n(em);
      let ep = (0, j.Pi)((e) => {
        let { variant: t, track: i, playContextParams: a } = e,
          {
            trailer: { meta: n },
          } = (0, c.oR4)(),
          l = t === r.ALBUM ? y.dn : y.fY,
          { isActive: o, progress: s } = eu(i.id),
          d = (0, S.useMemo)(
            () => ({ "--track-progress": "".concat(s || 0, "%") }),
            [s],
          );
        return (0, N.jsx)("div", {
          className: (0, R.W)(e_().root, { [e_().root_active]: o }),
          style: d,
          children: (0, N.jsx)(l, {
            position: i.positionInAlbum,
            withLightning: !!(null == i ? void 0 : i.isBest),
            track: i,
            playContextParams: a,
            albumArtists: null == n ? void 0 : n.albumArtists,
          }),
        });
      });
      var ev = i(55560),
        ey = i.n(ev);
      let ex = (e, t) => {
          let i = t === r.ALBUM ? c.Lxt.ALBUM : c.Lxt.PLAYLIST;
          return Array.from({ length: t === r.TRACK ? 1 : 5 }, (t, a) =>
            (0, N.jsx)(
              "div",
              {
                className: ey().trackContainer,
                children: (0, N.jsx)(B.DX, {
                  isActive: e,
                  className: (0, R.W)(ey().trackShimmer, {
                    [ey().albumShimmer]: i === c.Lxt.ALBUM,
                  }),
                  variant: i,
                }),
              },
              a,
            ),
          );
        },
        eh = (0, j.Pi)((e) => {
          let { variant: t } = e,
            { trailer: i } = (0, c.oR4)(),
            {
              isLoading: a,
              isRejected: r,
              tracks: n,
              meta: l,
              state: o,
              shouldAutoStartPlaying: s,
              setShouldAutoStartPlaying: d,
              isNotFound: u,
              modal: m,
            } = i,
            _ = (0, c.R$C)(),
            p = (0, c.x5)({ pageId: t, blockId: c.aUg.TRAILER }),
            v = V(),
            y = z(),
            x = a || r;
          (0, S.useEffect)(() => {
            m.isOpened &&
              (null == l ? void 0 : l.id) &&
              s &&
              (v(i.objectId),
              null == _ ||
                _.playContext(
                  {
                    contextData: D({
                      variant: t,
                      id: null == l ? void 0 : l.id,
                      uuid: null == l ? void 0 : l.uuid,
                      from: p,
                    }),
                    queueParams: { index: 0 },
                    loadContextMeta: !0,
                  },
                  c.jiA.TRAILER,
                ).then(() => {
                  y(i.objectId);
                }),
              d(!1));
          }, [
            p,
            null == l ? void 0 : l.id,
            null == l ? void 0 : l.uuid,
            m.isOpened,
            v,
            y,
            d,
            s,
            _,
            o.status,
            i.objectId,
            t,
          ]);
          let h = (0, S.useCallback)(
              (e) => ({
                contextData: D({
                  variant: t,
                  id: null == l ? void 0 : l.id,
                  uuid: null == l ? void 0 : l.uuid,
                  from: p,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [p, null == l ? void 0 : l.id, null == l ? void 0 : l.uuid, t],
            ),
            C = (0, S.useMemo)(
              () =>
                x
                  ? ex(a, t)
                  : null == n
                    ? void 0
                    : n.map((e, i) =>
                        (0, N.jsx)(
                          ep,
                          { variant: t, track: e, playContextParams: h(i) },
                          e.id,
                        ),
                      ),
              [h, a, x, n, t],
            );
          return r
            ? u
              ? (0, N.jsx)(Q, {})
              : (0, N.jsx)(U, {})
            : (0, N.jsxs)("div", {
                className: ey().root,
                children: [
                  (0, N.jsx)(ed, {
                    isShimmerVisible: x,
                    isShimmerActive: a,
                    variant: t,
                    className: ey().header,
                  }),
                  C,
                  (0, N.jsx)(ei, {
                    isShimmerVisible: x,
                    isShimmerActive: a,
                    variant: t,
                    className: ey().footer,
                  }),
                ],
              });
        });
      var eC = i(17601),
        eb = i.n(eC);
      let eg = (0, j.Pi)(() => {
        let { settings: e, trailer: t, sonataState: i } = (0, c.oR4)(),
          a = (0, c.R$C)(),
          { contentRef: r } = (0, c.$Y6)(),
          { formatMessage: n } = (0, L.Z)(),
          l = I();
        E();
        let o = e.layout === c.t8m.Mobile;
        (0, S.useEffect)(() => {
          let e =
              null == a
                ? void 0
                : a
                    .getState(c.jiA.TRAILER)
                    .queueState.currentEntity.onChange((e) => {
                      var i;
                      let a = null == e ? void 0 : e.context.data.type,
                        r = null == e ? void 0 : e.context.data.meta.id;
                      t.state.setEntityMeta(
                        null !== (i = null == e ? void 0 : e.entity) &&
                          void 0 !== i
                          ? i
                          : null,
                      ),
                        a && t.state.setContextType(a),
                        r && t.state.setContextId(r);
                    }),
            i =
              null == a
                ? void 0
                : a.getState(c.jiA.TRAILER).playerState.status.onChange((e) => {
                    e && t.state.setStatus(e);
                  }),
            r =
              null == a
                ? void 0
                : a.state.playerState.volume.onChange(() => {
                    let e = a.state.playerState.volume.value;
                    "number" == typeof e && a.setVolume(e, c.jiA.TRAILER);
                  });
          return () => {
            null == e || e(), null == i || i(), null == r || r();
          };
        }, [a, t.state]);
        let d = (0, S.useCallback)(() => {
            null == a || a.stop(c.jiA.TRAILER),
              t.sonataStatusBeforeTrailerStart !== s.Xz.PLAYING ||
                t.isManuallyPaused ||
                null == a ||
                a.resume(),
              t.setAnimationState(!0),
              t.modal.close(),
              l(t.objectId);
          }, [l, a, t]),
          u = (0, S.useCallback)(
            (e) => {
              t.modal.onOpenChange(e), e || d();
            },
            [d, t.modal],
          );
        return (
          (0, S.useEffect)(() => {
            t.modal.isOpened &&
              t.isLoaded &&
              (i.status === s.Xz.PLAYING && d(), t.setAnimationState(!1));
          }, [d, i.status, t, t.modal.isOpened]),
          (0, N.jsxs)(P.u, {
            size: "fitContent",
            placement: o ? "default" : "right",
            open: t.modal.isOpened,
            onOpenChange: u,
            onClose: d,
            className: eb().root,
            contentClassName: eb().modalContent,
            portalNode: o ? null : r,
            showHeader: !1,
            withOverlay: !1,
            closeOnOutsidePress: !1,
            withAnimation: t.withAnimation,
            containerProps: (0, A.BA)(A.QM.trailer.TRAILER_MODAL),
            children: [
              (0, N.jsx)("div", {
                className: eb().header,
                children: (0, N.jsx)(w.z, {
                  radius: "round",
                  color: "secondary",
                  size: "xxs",
                  icon: (0, N.jsx)(k.J, { variant: "close", size: "xxs" }),
                  onClick: d,
                  "aria-label": n({ id: "trailer.close" }),
                  ...(0, A.BA)(A.QM.trailer.TRAILER_CLOSE_BUTTON),
                }),
              }),
              t.variant && (0, N.jsx)(eh, { variant: t.variant }),
            ],
          })
        );
      });
    },
    52852: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return S;
        },
        k: function () {
          return E;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(31014),
        c = i(23881),
        d = i(39513),
        u = i(89352),
        m = i(14102),
        _ = i(2570),
        p = i(38527),
        v = i(3084),
        y = i(27491),
        x = i(28852),
        h = i(12404),
        C = { src: "/_next/static/media/artist.c49b2bfa.png" },
        b = i(78719),
        g = i.n(b);
      let f = (0, n.Pi)((e) => {
        let { className: t, artist: i } = e,
          { ref: n, intersectionPropertyId: o } = (0, p.VfV)(),
          { likeArtist: s, isArtistLiked: u } = (0, p.oR4)().wizard,
          { id: m, name: b, coverUri: f } = i,
          N = (0, l.useCallback)(() => {
            s(m);
          }, [s, m]),
          j = u(m),
          S = (0, l.useMemo)(
            () =>
              (0, a.jsx)(h.Paper, {
                className: g().cover,
                radius: "round",
                ...(0, c.BA)(c.QM.wizard.ARTIST_CARD),
                children: (0, a.jsxs)(d.z, {
                  radius: "round",
                  className: g().coverBlock,
                  variant: "default",
                  onClick: N,
                  withRipple: !1,
                  withHover: !1,
                  "aria-pressed": j,
                  "aria-label": b,
                  children: [
                    (0, a.jsx)(v.BE, {
                      className: g().image,
                      src: f || C.src,
                      fit: "cover",
                      alt: b,
                      withAvatarReplace: !!f,
                      "aria-hidden": !0,
                    }),
                    (0, a.jsx)("div", {
                      className: (0, r.W)(g().like),
                      children: (0, a.jsx)(x.J, {
                        variant: "likedVariant",
                        size: "s",
                        className: g().icon,
                      }),
                    }),
                  ],
                }),
              }),
            [j, f, b, N],
          );
        return (0, a.jsx)(y.m7, {
          ref: n,
          className: (0, r.W)(g().root, { [g().root_selected]: j }, t),
          textPosition: "center",
          title: (0, a.jsx)(_.Caption, {
            "aria-hidden": !0,
            className: g().name,
            variant: "div",
            type: "entity",
            size: "l",
            weight: "medium",
            lineClamp: 2,
            children: b,
          }),
          "data-intersection-property-id": o,
          view: S,
          ...(0, c.BA)(c.bG.artist.ARTIST_ITEM),
        });
      });
      var N = i(82388),
        j = i.n(N);
      let S = (0, n.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          { wizard: t, settings: i } = (0, p.oR4)(),
          { notify: n } = (0, p.d$W)(),
          y = i.layout === p.t8m.Mobile,
          x = i.platform === p.t4T.WINDOWS,
          [h, C] = (0, p.zU3)(),
          b = (0, m.useTabsState)(0),
          g = (0, l.useMemo)(
            () => (e) => {
              var i;
              if (!b.onTabChange || e === b.value) return;
              b.onTabChange(e);
              let a =
                null === (i = t.genres[e]) || void 0 === i ? void 0 : i.id;
              t.setFilter(a), null == h || h.scrollTo({ top: 0 });
            },
            [t, b, h],
          ),
          N = (0, l.useMemo)(() => {
            switch (t.selectedArtistsCounter) {
              case 0:
                return e({ id: "wizard.button-tune" });
              case 1:
                return e({ id: "wizard.button-little-more" });
              case 2:
                return e({ id: "wizard.button-one-more" });
              default:
                return e({ id: "wizard.button-done" });
            }
          }, [t.selectedArtistsCounter, e]),
          S = (0, l.useMemo)(
            () =>
              (0, a.jsx)(v.no, {
                className: j().tabCarousel,
                ...b,
                onTabChange: g,
                isShimmerVisible: t.loadingState === p.Gui.PENDING,
                shimmer: (0, a.jsx)(v.tS, {
                  isActive: !0,
                  className: j().tabCarousel,
                  shimmerClassName: j().tabShimmer,
                  count: y ? 2 : 3,
                }),
                children: t.genres.map((e, t) =>
                  (0, a.jsx)(
                    v.OK,
                    {
                      className: (0, r.W)(j().filter, j().important, {
                        [j().filter_selected]: t === b.value,
                      }),
                      titleClassName: j().tabTitle,
                      title: e.title,
                      value: t,
                    },
                    t,
                  ),
                ),
              }),
            [t.genres, b, g, t.loadingState, y],
          ),
          L = (0, l.useCallback)(() => {
            t.getArtists(60);
          }, [t]);
        (0, l.useEffect)(() => {
          t.filter && L();
        }, [t.filter, L]);
        let A = (0, l.useCallback)(async () => {
          await t.getGenres(), L();
        }, [t, L]);
        (0, l.useEffect)(() => {
          t.modal.isOpened && A();
        }, [t, t.modal.isOpened, A]),
          (0, l.useEffect)(() => {
            t.loadingState === p.Gui.REJECT &&
              (t.modal.close(),
              n(
                (0, a.jsx)(v.Q, {
                  error: e({ id: "error-messages.error-load-wizard" }),
                }),
                { containerId: p.W$x.ERROR },
              ));
          }, [t, t.getGenres, t.loadingState, e, n]);
        let w = (0, l.useMemo)(
            () =>
              (0, a.jsx)(_.Heading, {
                className: j().title,
                weight: "bold",
                variant: "h1",
                size: "l",
                children: (0, a.jsx)(s.Z, { id: "wizard.modal-title" }),
              }),
            [],
          ),
          k = (0, l.useCallback)(() => {
            t.finish(), t.modal.close();
          }, [t]);
        return (0, a.jsxs)(u.u, {
          className: (0, r.W)(j().root, { [j().root_withWindows]: x }),
          headerClassName: j().modalHeader,
          contentClassName: j().modalContent,
          open: t.modal.isOpened,
          onOpenChange: t.modal.onOpenChange,
          onClose: k,
          size: "fullscreen",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          ...(0, c.BA)(c.QM.wizard.WIZARD_MODAL),
          header: y && w,
          children: [
            (0, a.jsxs)("div", {
              className: j().wrapper,
              children: [
                !y && w,
                (0, a.jsx)(_.Caption, {
                  className: j().text,
                  variant: "div",
                  size: "l",
                  weight: "normal",
                  children: (0, a.jsx)(s.Z, { id: "wizard.modal-text" }),
                }),
                (0, a.jsx)(d.z, {
                  className: j().button,
                  size: y ? "m" : "l",
                  iconPosition: "right",
                  radius: "xxxl",
                  color: "primary",
                  onClick: k,
                  disabled: t.selectedArtistsCounter < 3,
                  children: (0, a.jsx)(_.Caption, {
                    variant: "div",
                    size: "m",
                    weight: "medium",
                    children: N,
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: j().mainContainer,
              children: [
                (0, a.jsx)("div", {
                  className: (0, r.W)(j().carousel),
                  children: (0, a.jsx)(v.J3, {
                    carouselElement: S,
                    buttonSize: "l",
                  }),
                }),
                (0, a.jsx)(v.Wv, {
                  withFooter: !1,
                  className: (0, r.W)(j().scrollContainer, j().important),
                  itemContentCallback: (i) => {
                    let r = t.artistsByGenre[i];
                    if (!r) {
                      let t = e(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: e({ id: "entity-names.artist" }) },
                      );
                      return (0, a.jsx)(v.hi, {
                        "aria-label": t,
                        round: !0,
                        centered: !0,
                      });
                    }
                    return (0, a.jsx)(f, { artist: r }, r.id);
                  },
                  data: t.artistsByGenre,
                  endReached: L,
                  listClassName: j().content,
                  itemClassName: j().item,
                  pageSize: 60,
                  handleRef: C,
                }),
              ],
            }),
          ],
        });
      });
      var L = i(42288),
        A = i(33589),
        w = i(395),
        k = i(24244);
      let P = (e) => {
          let t = new Map();
          return (
            e.map((e) => {
              t.set(e.id, {
                loadingState: p.Gui.IDLE,
                artists: [],
                showedArtists: [],
              });
            }),
            k.LO.map(t)
          );
        },
        M = (e) => e.map((e) => ({ id: e.id, title: e.title })),
        I = (e) => {
          let {
              id: t,
              likedArtists: i,
              unlikedArtists: a,
              savedLikedArtists: r,
            } = e,
            n = {};
          if (i.includes(t))
            return (n.likedArtists = i.filter((e) => e !== t)), n;
          let l = r.includes(t),
            o = a.includes(t);
          return (
            ((n.unlikedArtists = a.filter((e) => e !== t)), l && !o)
              ? n.unlikedArtists.push(t)
              : (n.likedArtists = [...i, t]),
            n
          );
        },
        T = L.V5.model("WizardGenre", { id: L.V5.string, title: L.V5.string }),
        E = L.V5.model("Wizard", {
          loadingState: L.V5.enumeration(Object.values(p.Gui)),
          modal: w.KL,
          genres: L.V5.array(T),
          artistsByGenres: L.V5.maybe(L.V5.frozen()),
          savedLikedArtists: L.V5.array(L.V5.string),
          likedArtists: L.V5.array(L.V5.string),
          unlikedArtists: L.V5.array(L.V5.string),
          filter: L.V5.maybe(L.V5.string),
        })
          .views((e) => ({
            get genreItem() {
              var t;
              return null === (t = e.artistsByGenres) || void 0 === t
                ? void 0
                : t.get(e.filter);
            },
            get artistsByGenre() {
              var i;
              return (
                (null === (i = this.genreItem) || void 0 === i
                  ? void 0
                  : i.artists) || []
              );
            },
            get selectedArtistsCounter() {
              return (
                e.likedArtists.length +
                e.savedLikedArtists.length -
                e.unlikedArtists.length
              );
            },
            isArtistLiked: (t) =>
              !e.unlikedArtists.includes(t) &&
              (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
          }))
          .actions((e) => ({
            likeArtist: (t) => {
              let {
                  likedArtists: i,
                  unlikedArtists: a,
                  savedLikedArtists: r,
                } = e,
                n = I({
                  id: t,
                  likedArtists: i,
                  unlikedArtists: a,
                  savedLikedArtists: r,
                });
              n.likedArtists && (e.likedArtists = (0, L.pj)(n.likedArtists)),
                n.unlikedArtists &&
                  (e.unlikedArtists = (0, L.pj)(n.unlikedArtists));
            },
            setFilter: (t) => {
              e.filter = t;
            },
            getGenres: (0, L.ls)(function* () {
              let { feedResource: t, modelActionsLogger: i } = (0, L.dU)(e);
              if (
                e.loadingState !== p.Gui.PENDING &&
                e.loadingState !== p.Gui.RESOLVE
              )
                try {
                  var a;
                  e.loadingState = p.Gui.PENDING;
                  let { genres: i } = yield t.getWizardGenres();
                  if (((e.genres = (0, L.pj)(M(i))), !i.length))
                    throw Error("The wizard's genre array is empty");
                  (e.filter =
                    null === (a = i[0]) || void 0 === a ? void 0 : a.id),
                    (e.artistsByGenres = (0, L.pj)(P(i))),
                    e.loadingState !== p.Gui.IDLE &&
                      (e.loadingState = p.Gui.RESOLVE);
                } catch (t) {
                  i.error(t),
                    e.loadingState !== p.Gui.IDLE &&
                      (e.loadingState = p.Gui.REJECT);
                }
            }),
            getArtists: (0, L.ls)(function* (t) {
              let { feedResource: i, modelActionsLogger: a } = (0, L.dU)(e);
              if (e.loadingState !== p.Gui.RESOLVE || !e.filter) return;
              let r = e.artistsByGenres.get(e.filter);
              if (r.loadingState !== p.Gui.PENDING)
                try {
                  r.loadingState = p.Gui.PENDING;
                  let { artists: a, likedArtists: n = [] } =
                      yield i.getWizardArtistsByGenre({
                        genre: e.filter,
                        showedArtists: r.showedArtists,
                        likedArtists: e.likedArtists,
                        unlikedArtists: e.unlikedArtists,
                        countOfNewArtists: t,
                      }),
                    l = a.map((e) => (0, A.tR)({ artist: e })),
                    o = a.map((e) => e.id);
                  e.artistsByGenres.set(e.filter, {
                    artists: [...r.artists, ...l],
                    showedArtists: [...r.showedArtists, ...o],
                    loadingState: p.Gui.RESOLVE,
                  }),
                    (e.savedLikedArtists = (0, L.pj)(n.map((e) => String(e)))),
                    (e.likedArtists = (0, L.pj)([])),
                    (e.unlikedArtists = (0, L.pj)([]));
                } catch (e) {
                  a.error(e), (r.loadingState = p.Gui.REJECT);
                }
            }),
            finish: (0, L.ls)(function* () {
              let { feedResource: t, modelActionsLogger: i } = (0, L.dU)(e);
              if (e.filter)
                try {
                  yield t.finishWizard({
                    genre: e.filter,
                    likedArtists: e.likedArtists,
                    unlikedArtists: e.unlikedArtists,
                  });
                } catch (e) {
                  i.error(e);
                }
            }),
          }));
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
        menuWrapper: "FullscreenPlayerDesktopControls_menuWrapper__ifxNx",
        likeButton: "FullscreenPlayerDesktopControls_likeButton__vpJ7S",
        menuButton: "FullscreenPlayerDesktopControls_menuButton__R4cXl",
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
        notification: "FullscreenPlayerMobile_notification__V1cxP",
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
        metaContainer: "FullscreenPlayerMobileContent_metaContainer__B2vTr",
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
    78719: function (e) {
      e.exports = {
        coverBlock: "ArtistCard_coverBlock__YCSus",
        like: "ArtistCard_like__jmlKc",
        root: "ArtistCard_root__F4RfA",
        root_selected: "ArtistCard_root_selected__9Djbq",
        cover: "ArtistCard_cover__RSTvK",
        image: "ArtistCard_image__Uab5w",
        name: "ArtistCard_name__IF9yZ",
        icon: "ArtistCard_icon__PjbJI",
      };
    },
    82388: function (e) {
      e.exports = {
        content: "WizardModal_content__mLcxg",
        modalHeader: "WizardModal_modalHeader__BbNjx",
        root: "WizardModal_root__mrF2y",
        root_withWindows: "WizardModal_root_withWindows__WKbNp",
        modalContent: "WizardModal_modalContent__OifZs",
        wrapper: "WizardModal_wrapper__2_8ft",
        title: "WizardModal_title__fPGJr",
        text: "WizardModal_text__ntEON",
        button: "WizardModal_button__e8bCS",
        mainContainer: "WizardModal_mainContainer__fbjpt",
        carousel: "WizardModal_carousel__uVcYS",
        scrollContainer: "WizardModal_scrollContainer__tDrP6",
        important: "WizardModal_important__7uymQ",
        tabCarousel: "WizardModal_tabCarousel__AclIV",
        tabShimmer: "WizardModal_tabShimmer__36Qc7",
        tabTitle: "WizardModal_tabTitle__7ZAaF",
        filter: "WizardModal_filter__o2wpn",
        filter_selected: "WizardModal_filter_selected__qdlMf",
        item: "WizardModal_item__wUHVg",
      };
    },
  },
]);
