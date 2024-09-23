(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2214],
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
        n = i(40193);
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
        m = i(2570),
        _ = i(34152),
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
            { communication: x } = (0, _.oR4)(),
            h =
              ((null === (t = r.action) || void 0 === t ? void 0 : t.type) ===
                n.sy.LINK &&
                r.action.value) ||
              "",
            { isExternalLink: C } = (0, _.zBm)(h),
            f = (0, _.s0h)(h),
            b = (0, d.useCallback)(() => {
              if (r.action)
                switch (
                  (i && a && r.action.id && x.action(i, a, r.action.id),
                  r.action.type)
                ) {
                  case n.sy.LINK:
                    r.action.value && f(), C || null == y || y();
                    return;
                  case n.sy.CLOSE:
                    null == y || y();
                    return;
                }
            }, [i, a, x, r.action, y, f, C]),
            g = (0, d.useMemo)(() => {
              if (r.textColor) return { color: r.textColor };
            }, [r.textColor]);
          return (0, o.jsx)(u.z, {
            className: (0, s.W)(v().root, v()["root_".concat(r.color)], c),
            role: h ? "link" : "button",
            color: r.color ? r.color : void 0,
            radius: "xxxl",
            onClick: b,
            size: l,
            children: (0, o.jsx)(m.Caption, {
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
    57923: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return S;
        },
        F: function () {
          return k;
        },
      });
      var a = i(42288),
        n = i(34152);
      let r = (e) => (0, a.pj)(e),
        l = (e) => {
          let { plans: t, ...i } = e;
          return (0, a.pj)({ ...i, plans: t.map(r) });
        },
        o = (e) => {
          let { option: t, ...i } = e;
          return (0, a.pj)({ ...l(i), option: t });
        },
        s = (e) => {
          if (!e) return null;
          let { tariff: t, ...i } = e;
          return (0, a.pj)({ ...l(i), tariff: t });
        },
        c = (e) => {
          let {
            positionId: t,
            silentInvoiceAvailable: i,
            structureType: n,
            tariffOffer: r,
            optionOffers: l,
          } = e;
          return (0, a.pj)({
            positionId: t,
            silentInvoiceAvailable: i,
            structureType: n,
            tariffOffer: s(r),
            optionsOffers: l.map(o),
          });
        },
        d = (e) => {
          let { eventSessionId: t, batchPositionId: i, offers: n } = e;
          return (0, a.pj)({
            eventSessionId: t,
            batchPositionId: i,
            offers: n.map(c),
          });
        };
      var u = i(40193);
      let m = a.V5.model({ amount: a.V5.number, currency: a.V5.string }),
        _ = a.V5.model({
          typename: a.V5.literal(u.f5.IntroPlan),
          period: a.V5.string,
          price: m,
          repeatCount: a.V5.number,
        }),
        p = a.V5.model({
          typename: a.V5.literal(u.f5.IntroUntilPlan),
          price: m,
          until: a.V5.string,
        }),
        v = a.V5.model({
          typename: a.V5.literal(u.f5.TrialPlan),
          period: a.V5.string,
        }),
        y = a.V5.model({
          typename: a.V5.literal(u.f5.TrialUntilPlan),
          until: a.V5.string,
        }),
        x = a.V5.union(_, p, v, y),
        h = a.V5.model({ name: a.V5.string }),
        C = a.V5.model({
          additionText: a.V5.string,
          description: a.V5.string,
          name: a.V5.string,
          text: a.V5.string,
          title: a.V5.string,
          plans: a.V5.array(x),
          commonPeriod: a.V5.string,
          commonPrice: m,
        }),
        f = C.props({ option: h }),
        b = C.props({ tariff: h }),
        g = a.V5.model({
          positionId: a.V5.string,
          silentInvoiceAvailable: a.V5.boolean,
          structureType: a.V5.enumeration(Object.values(u.jA)),
          tariffOffer: a.V5.maybeNull(b),
          optionsOffers: a.V5.array(f),
        }),
        N = a.V5.model({
          eventSessionId: a.V5.maybe(a.V5.string),
          batchPositionId: a.V5.maybe(a.V5.string),
          offers: a.V5.array(g),
        }),
        j = a.V5.model({
          loadingState: a.V5.enumeration(Object.values(n.Gui)),
          data: a.V5.maybeNull(N),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === n.Gui.IDLE;
            },
            get isLoading() {
              return e.loadingState === n.Gui.PENDING;
            },
            get isLoaded() {
              return e.loadingState === n.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === n.Gui.REJECT;
            },
            get isShimmerVisible() {
              return this.isNeededToLoad || this.isLoading || this.isRejected;
            },
            get isShimmerActive() {
              return this.isLoading;
            },
            get target() {
              return "music";
            },
            get features() {
              return;
            },
            get tariffOffer() {
              var t, i;
              return null === (i = e.data) || void 0 === i
                ? void 0
                : null === (t = i.offers[0]) || void 0 === t
                  ? void 0
                  : t.tariffOffer;
            },
            get mainText() {
              var a;
              return null === (a = this.tariffOffer) || void 0 === a
                ? void 0
                : a.text;
            },
            get additionText() {
              var r;
              return null === (r = this.tariffOffer) || void 0 === r
                ? void 0
                : r.additionText;
            },
          }))
          .actions((e) => ({
            getData: (0, a.ls)(function* () {
              let { offersResource: t, modelActionsLogger: i } = (0, a.dU)(e);
              if (
                e.loadingState !== n.Gui.PENDING &&
                e.loadingState !== n.Gui.RESOLVE
              )
                try {
                  e.loadingState = n.Gui.PENDING;
                  let i = yield t.getCompositeOffers({
                      target: e.target,
                      features: e.features,
                    }),
                    a = d(i);
                  (e.data = a), (e.loadingState = n.Gui.RESOLVE);
                } catch (t) {
                  (e.loadingState = n.Gui.REJECT), i.error(t);
                }
            }),
          }))
          .named("MusicOffers"),
        S = a.V5.model("Offers", { music: j });
      var L = i(98639);
      let k = (e) => {
        let { offers: t } = (0, n.oR4)(),
          i = t[e];
        return (
          (0, L.useEffect)(() => {
            i.isNeededToLoad && i.getData();
          }, [i]),
          i
        );
      };
    },
    57900: function (e, t, i) {
      "use strict";
      i.d(t, {
        Qw: function () {
          return y;
        },
        _$: function () {
          return f;
        },
        c8: function () {
          return n;
        },
        tP: function () {
          return x;
        },
      });
      var a,
        n,
        r = i(9753),
        l = i(60836),
        o = i(9544),
        s = i(98639),
        c = i(17295),
        d = i(89352),
        u = i(34152);
      ((a = n || (n = {})).IDLE = "idle"),
        (a.SUCCESS = "success"),
        (a.ERROR = "error");
      let m = null,
        _ = (e) => {
          let {
              className: t,
              target: i,
              onLoad: a,
              onSuccess: n,
              onError: l,
              onClose: o,
            } = e,
            c = (0, s.useRef)(null),
            d = (0, u.N7D)(),
            _ = (0, s.useCallback)(() => {
              null == n || n();
            }, [n]),
            p = (0, s.useCallback)(() => {
              null == l || l();
            }, [l]),
            v = (0, s.useCallback)(() => {
              null == o || o();
            }, [o]),
            y = (0, s.useCallback)(
              (e) => {
                "loaded" === e.data.status && (null == a || a());
              },
              [a],
            ),
            x = (0, s.useCallback)(async () => {
              if (!d || !c.current) return;
              let {
                lang: e,
                mode: t,
                platform: a,
                widgetServiceName: n,
                authMethod: r,
              } = d.options;
              if (!m)
                try {
                  m = await d.loadManager();
                } catch (e) {
                  v();
                  return;
                }
              m.send({
                type: "init",
                options: {
                  lang: e,
                  mode: t,
                  platform: a,
                  widgetServiceName: n,
                  authMethod: r,
                  usePlusHost: !0,
                  onSuccess: _,
                  onError: p,
                  onReport: y,
                  onClose: v,
                },
              }),
                m.send({
                  type: "open",
                  options: {
                    target: i,
                    targetNode: c.current,
                    isTarifficator: !0,
                  },
                });
            }, [d, i, _, p, y, v]);
          return (
            (0, s.useEffect)(
              () => (
                x(),
                () => {
                  null == m || m.send({ type: "close" });
                }
              ),
              [x],
            ),
            (0, r.jsx)("div", { className: t, ref: c })
          );
        };
      var p = i(21134),
        v = i.n(p);
      let y = (0, o.Pi)(() => {
          let { state: e, toggleTrue: t } = (0, c.O)(!1),
            { paymentWidgetModal: i } = (0, u.oR4)();
          (0, s.useEffect)(
            () => () => {
              i.reset();
            },
            [i],
          );
          let a = (0, s.useCallback)(() => {
              i.setStatus(n.SUCCESS);
            }, [i]),
            o = (0, s.useCallback)(() => {
              i.modal.close(),
                i.isSuccess && window.location.reload(),
                i.reset();
            }, [i]),
            m = (0, s.useCallback)(() => {
              i.setStatus(n.ERROR);
            }, [i]);
          return (0, r.jsx)(d.u, {
            open: i.modal.isOpened,
            size: "fitContent",
            placement: "center",
            showHeader: !1,
            withAnimation: !1,
            className: (0, l.W)(v().root, { [v().root_loaded]: e }),
            contentClassName: v().content,
            children: (0, r.jsx)(_, {
              className: v().widget,
              target: i.target,
              onLoad: t,
              onSuccess: a,
              onError: m,
              onClose: o,
            }),
          });
        }),
        x = (e) => {
          let { target: t } = e,
            {
              paymentWidgetModal: { modal: i, setTarget: a },
            } = (0, u.oR4)();
          return {
            open: (0, s.useCallback)(() => {
              t && (a(t), i.open());
            }, [a, t, i]),
          };
        };
      var h = i(42288),
        C = i(73490);
      let f = h.V5.model({
        modal: C.K,
        target: h.V5.string,
        status: h.V5.enumeration(Object.values(n)),
      })
        .views((e) => ({
          get isSuccess() {
            return e.status === n.SUCCESS;
          },
          get isError() {
            return e.status === n.ERROR;
          },
        }))
        .actions((e) => ({
          setTarget(t) {
            e.target = t;
          },
          setStatus(t) {
            e.status = t;
          },
          reset() {
            (e.target = ""), (e.status = n.IDLE);
          },
        }));
    },
    80757: function (e, t, i) {
      "use strict";
      i.d(t, {
        On: function () {
          return y;
        },
        Xv: function () {
          return f;
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
        m = i(86939),
        _ = i(2570),
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
                (null === (r = c.barBelowItem) || void 0 === r
                  ? void 0
                  : r.content.text) &&
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
      var x = i(40193);
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
        f = a.V5.model("BarBelowMain", {
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
    11983: function (e, t, i) {
      "use strict";
      i.d(t, {
        x: function () {
          return n;
        },
      });
      var a = i(57923);
      let n = (e) => {
        let { storeName: t } = e;
        return { store: (0, a.F)(t) };
      };
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
        n = i(60836),
        r = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(23881),
        c = i(39513),
        d = i(28852),
        u = i(71230),
        m = i(34152);
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
      let y = (0, r.Pi)((e) => {
        var t, i;
        let { className: r } = e,
          { formatMessage: p } = (0, o.Z)(),
          y = (0, m.uK4)(),
          x = (0, m.R$C)(),
          { sonataState: h } = (0, m.oR4)(),
          C = _(),
          f = y.get(m.V0J),
          b =
            null !==
              (i =
                null !== (t = f.get(m.BUb.YmPlayerVolume)) && void 0 !== t
                  ? t
                  : h.volume) && void 0 !== i
              ? i
              : 1,
          g = (0, l.useCallback)(
            (e) => {
              null == x || x.setVolume(e), f.set(m.BUb.YmPlayerVolume, e);
            },
            [x, f],
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
                variant: 0 === b ? "volumeOff" : "volume",
              }),
              className: v().button,
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            (0, a.jsx)(u.i, {
              thumbSize: "s",
              trackSize: "s",
              value: b,
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
        m = i(34152),
        _ = i(3084),
        p = i(29177),
        v = i.n(p);
      let y = (0, r.Pi)((e) => {
        var t, i, r;
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
          f = (0, l.useMemo)(() => {
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
          b = (0, l.useCallback)(() => {
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
              (0, m.g78)(p.modalItem.content.disclaimer, _.rU, {
                className: v().disclaimerLink,
                style: f.disclaimer,
                target: "_blank",
              })
            );
          }, [p, f]);
        return (0, a.jsx)(c.u, {
          style: f.bg,
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
          onClose: b,
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
                      style: f.title,
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
                      style: f.text,
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
                  style: f.disclaimer,
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
        h = i(40193),
        C = i(73490);
      let f = x.V5.model("CommunicationModalContentModel", {
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
        b = x.V5.model("CommunicationModal", {
          anchorId: x.V5.enumeration(Object.values(h.o1)),
          screenId: x.V5.string,
          content: f,
        }),
        g = C.K.props({
          anchorId: x.V5.maybe(x.V5.enumeration(Object.values(h.o1))),
          list: x.V5.array(b),
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
            bgUrlLarge: n,
            bgColor: r,
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
            bgUrlLarge: n || null,
            bgColor: r || null,
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
          return eq;
        },
        Lc: function () {
          return e9;
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
        m,
        _,
        p,
        v,
        y = i(9753),
        x = i(60836),
        h = i(9544),
        C = i(98639),
        f = i.t(C, 2),
        b = i(23881),
        g = i(34152),
        N = i(23897);
      let j = () => {
        let [e, t] = (0, C.useState)(!1),
          { sideBannerRef: i } = (0, g.$Y6)(),
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
        k = i(80542),
        A = i(31014),
        P = i(37117),
        w = i(39513),
        T = i(28852),
        I = i(29901),
        E = {
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
                  withRipple: m = !1,
                  variant: _ = "default",
                  ...p
                } = e,
                { collapsed: v, direction: y } = (0, r.useContext)(
                  o.NavigationContext,
                ),
                x = (0, r.useCallback)(
                  (e) => {
                    m && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [m],
                ),
                [h, C] = r.Children.toArray(a.props.children),
                f = (0, r.useMemo)(
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
                b = (0, r.cloneElement)(a, {
                  className: (0, l.clsx)(
                    c.default.item,
                    c.default["item_direction_".concat(y)],
                    {
                      [c.default.item_selected]: d,
                      [c.default["item_collapsed_".concat(y)]]: v,
                    },
                    a.props.className,
                  ),
                  children: f,
                });
              return (0, n.jsx)("li", {
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
                children: b,
              });
            }
            (t.NavigationItemComponent = d),
              (t.NavigationItem = (0, r.forwardRef)((e, t) =>
                (0, n.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = f;
          },
        },
        R = {};
      function M(e) {
        var t = R[e];
        if (void 0 !== t) return t.exports;
        var i = (R[e] = { exports: {} });
        return E[e].call(i.exports, i, i.exports, M), i.exports;
      }
      (M.d = (e, t) => {
        for (var i in t)
          M.o(t, i) &&
            !M.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (M.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (M.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var B = {};
      Object.defineProperty(B, "X$", { value: !0 }),
        (B.Dx = B.KB = B.W_ = void 0),
        (a = M(19)),
        Object.defineProperty(B, "W_", {
          enumerable: !0,
          get: function () {
            return a.Navigation;
          },
        }),
        (n = M(8106)),
        Object.defineProperty(B, "KB", {
          enumerable: !0,
          get: function () {
            return n.NavigationGroup;
          },
        }),
        (r = M(3506)),
        Object.defineProperty(B, "Dx", {
          enumerable: !0,
          get: function () {
            return r.NavigationItem;
          },
        });
      var V = B.W_,
        O = B.KB,
        z = B.Dx;
      B.X$;
      var D = i(5773),
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
        Y = i(40193),
        H = i(86939),
        K = i(12404),
        q = i(40113),
        J = i(98342),
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
              subtitle: n,
              contextMenu: r,
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
                    (0, J.m)(e, $().ripple);
              },
              [c],
            );
          return (0, y.jsxs)(U.Md, {
            ref: d,
            onClick: m,
            className: (0, x.W)($().root, { [$().root_withoutLink]: !s }, t),
            role: "listitem",
            ...(0, b.BA)(b.QM.navbar.PIN_ITEM),
            children: [
              (0, y.jsxs)(ee, {
                entityUrl: s,
                ariaLabel: u,
                children: [
                  (0, y.jsx)("div", {
                    className: $().cover,
                    ...(0, b.BA)(b.QM.navbar.PIN_COVER),
                    children: i,
                  }),
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
                          ...(0, b.BA)(b.QM.navbar.PIN_TITLE),
                          children: a,
                        }),
                        (0, y.jsx)(W.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          ...(0, b.BA)(b.QM.navbar.PIN_SUBTITLE),
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
                ...(0, b.BA)(b.QM.navbar.PIN_CONTEXT_MENU_BUTTON),
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
            [n, r] = (0, C.useState)(!1),
            l = (0, C.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, g.ZP4)(n),
            (0, y.jsx)(el.v2, {
              className: (0, x.W)(er().contextMenu, {
                [er().contextMenu_visible]: n,
              }),
              onClick: l,
              icon: (0, y.jsx)(T.J, { size: "xxs", variant: "more" }),
              tabIndex: a ? -1 : 0,
              "aria-hidden": a,
              variant: "text",
              offsetOptions: 3,
              open: n,
              onOpenChange: r,
              containerProps: (0, b.BA)(b.QM.navbar.PIN_CONTEXT_MENU),
              children: (0, y.jsx)(U.Zd, { onClick: t, isPinned: i }),
            })
          );
        },
        es = (e) => {
          var t;
          let { className: i, album: a, forwardRef: n, tooltipOptions: r } = e,
            { formatMessage: l } = (0, k.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, q.BV)(a),
            d = (0, q.H0)(a.type),
            u = (0, C.useMemo)(
              () =>
                (0, y.jsx)(K.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(D.u, {
                    ...r,
                    enabled: o,
                    children: [
                      (0, y.jsx)(H.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(D._v, {
                        className: er().tooltip,
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
            { formatMessage: l } = (0, k.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, ed.BV)(a),
            d = (0, C.useMemo)(
              () =>
                (0, y.jsx)(K.Paper, {
                  className: er().cover,
                  radius: "round",
                  children: (0, y.jsxs)(D.u, {
                    ...r,
                    enabled: o,
                    children: [
                      (0, y.jsx)(H.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(D._v, {
                        className: er().tooltip,
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
            subtitle: (0, y.jsx)(A.Z, { id: "entity-names.artist" }),
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
              forwardRef: n,
              tooltipOptions: r,
            } = e,
            { formatMessage: l } = (0, k.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, C.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, e_.BV)(a),
            d = (0, C.useMemo)(
              () =>
                (0, y.jsx)(K.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(D.u, {
                    ...r,
                    enabled: o,
                    children: [
                      (0, y.jsx)(H.Image, {
                        "aria-hidden": !0,
                        className: er().image,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(D._v, {
                        className: er().tooltip,
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
            subtitle: (0, y.jsx)(A.Z, { id: "entity-names.playlist" }),
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
            { formatMessage: s } = (0, k.Z)(),
            { isCollapsed: c, withCollapseAnimation: d } =
              null !== (i = (0, C.useContext)(ea)) && void 0 !== i ? i : {},
            [u, m] = (0, C.useState)(!1),
            _ = (0, ey.BV)(n),
            {
              isPlaying: p,
              togglePlay: v,
              isCurrent: h,
            } = (0, g.QhE)({
              seeds: n.seeds,
              pageIdForFrom: g.Rhz.SIDEBAR,
              blockIdForFrom: g.aUg.RADIO,
            }),
            f = (0, C.useCallback)(() => {
              m(!0),
                v().finally(() => {
                  m(!1);
                });
            }, [v]),
            b = (0, C.useMemo)(
              () =>
                (0, y.jsx)(W.Caption, {
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
              return (0, y.jsxs)(D.u, {
                ...l,
                enabled: c,
                children: [
                  (0, y.jsx)("div", {
                    style: t,
                    className: er().animation,
                    children: (0, y.jsx)(U.Df, {
                      isCurrent: h,
                      isPlaying: p,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: f,
                      title: n.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: o,
                    }),
                  }),
                  (0, y.jsx)(D._v, {
                    className: er().tooltip,
                    children: (0, y.jsx)(W.Caption, {
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
              f,
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
              onPinClick: _,
              isPinned: n.isPinned,
            }),
            withCollapseAnimation: !!d,
            title: b,
            subtitle: (0, y.jsx)(A.Z, { id: "entity-names.my-vibe" }),
            cover: N,
          });
        }),
        eh = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(ex, { forwardRef: t, ...e }),
        );
      var eC = i(8519),
        ef = i.n(eC);
      let eb = Q({ placement: "right", padding: 20 }),
        eg = (0, h.Pi)((e) => {
          var t, i;
          let { className: a, withCollapseAnimation: n, isCollapsed: r } = e,
            { formatMessage: l } = (0, k.Z)(),
            { pinsCollection: o } = (0, g.oR4)(),
            s =
              null === (t = o.items) || void 0 === t
                ? void 0
                : t.map(() => (0, C.createRef)()),
            c = (0, C.useMemo)(
              () => ({
                enter: ef().pin_enter,
                enterActive: ef().pin_enter_active,
                exit: ef().pin_exit,
                exitActive: ef().pin_exit_active,
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
              className: (0, x.W)(ef().root, a),
              ...(0, b.BA)(b.QM.navbar.PIN_LIST),
              children: (0, y.jsx)("div", {
                role: "list",
                "aria-label": l({ id: "navigation.pins-list" }),
                className: ef().content,
                children: (0, y.jsx)(Z.Z, {
                  component: null,
                  children:
                    null === (i = o.items) || void 0 === i
                      ? void 0
                      : i.map((e, t) => {
                          switch (e.type) {
                            case Y.Qm.ALBUM:
                              return (0, y.jsx)(
                                P.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ec, {
                                    tooltipOptions: eb,
                                    ref: null == s ? void 0 : s[t],
                                    album: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Y.Qm.ARTIST:
                              return (0, y.jsx)(
                                P.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(em, {
                                    tooltipOptions: eb,
                                    ref: null == s ? void 0 : s[t],
                                    artist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Y.Qm.PLAYLIST:
                              return (0, y.jsx)(
                                P.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ev, {
                                    tooltipOptions: eb,
                                    ref: null == s ? void 0 : s[t],
                                    playlist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Y.Qm.WAVE:
                              return (0, y.jsx)(
                                P.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(eh, {
                                    tooltipOptions: eb,
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
      var eN = i(90679),
        ej = i(11983),
        eS = i(57900),
        eL = i(84691);
      function ek() {
        return (ek = Object.assign
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
      var eA = function (e) {
          return eL.createElement(
            "svg",
            ek(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            eL.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              eL.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                l ||
                  (l = eL.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                o ||
                  (o = eL.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                s ||
                  (s = eL.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                eL.createElement(
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
                    (c = eL.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                d ||
                  (d = eL.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                u ||
                  (u = eL.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    eL.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    eL.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            m ||
              (m = eL.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                eL.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                eL.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            _ ||
              (_ = eL.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            p ||
              (p = eL.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            v ||
              (v = eL.createElement(
                "defs",
                null,
                eL.createElement(
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
                  eL.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  eL.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                eL.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  eL.createElement("stop", { stopColor: "#FF5C4D" }),
                  eL.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  eL.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                eL.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  eL.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eL.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  eL.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eL.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  eL.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                eL.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  eL.createElement("rect", {
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
        eP = i(77314),
        ew = i.n(eP);
      let eT = (0, h.Pi)(() => {
          let {
              store: { mainText: e, isShimmerVisible: t, isShimmerActive: i },
            } = (0, ej.x)({ storeName: "music" }),
            { open: a } = (0, eS.tP)({ target: "music" });
          return t
            ? (0, y.jsx)(eN.Shimmer, {
                className: ew().plusButtonShimmer,
                isActive: i,
                radius: "xxxl",
              })
            : (0, y.jsx)(w.z, {
                className: ew().button,
                isBlock: !0,
                radius: "xxxl",
                size: "m",
                color: "plus",
                onClick: a,
                children: (0, y.jsx)(W.Caption, {
                  variant: "div",
                  size: "s",
                  lineClamp: 2,
                  children: e,
                }),
              });
        }),
        eI = (e) => {
          let { className: t, forwardRef: i } = e,
            {
              modals: { paywallModal: a },
            } = (0, g.oR4)(),
            { formatMessage: n } = (0, k.Z)();
          return (0, y.jsxs)("section", {
            className: (0, x.W)(ew().root, t),
            ref: i,
            "aria-label": n({ id: "plusbar.subscription-activation" }),
            children: [
              (0, y.jsx)(eA, { className: ew().logos, "aria-hidden": "true" }),
              (0, y.jsx)(W.Caption, {
                className: ew().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(A.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsx)(W.Caption, {
                className: ew().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, y.jsx)(A.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsxs)("div", {
                className: ew().buttons,
                children: [
                  (0, y.jsx)(eT, {}),
                  (0, y.jsx)(w.z, {
                    className: ew().button,
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    onClick: a.open,
                    children: (0, y.jsx)(A.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        eE = (0, C.forwardRef)((e, t) =>
          (0, y.jsx)(eI, { forwardRef: t, ...e }),
        );
      var eR = i(3065),
        eM = i.n(eR),
        eB = i(24776),
        eV = i.n(eB);
      let eO = Q({ placement: "right", padding: 8 }),
        ez = (e) => {
          let { className: t, isCollapsed: i, withCollapseAnimation: a } = e;
          return (0, y.jsxs)(D.u, {
            ...eO,
            enabled: !0,
            children: [
              (0, y.jsxs)("div", {
                className: (0, x.W)(eV().root, t),
                children: [
                  (0, y.jsx)(W.Caption, {
                    className: eV().nda,
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    children: (0, y.jsx)(A.Z, { id: "entity-names.nda" }),
                  }),
                  (0, y.jsx)(W.Caption, {
                    className: (0, x.W)(eV().text, {
                      [eV().text_collapsed]: i,
                      [eV().text_animated]: a,
                    }),
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    lineClamp: 1,
                    children: (0, y.jsx)(A.Z, {
                      id: "warning-messages.only-for-staff",
                    }),
                  }),
                ],
              }),
              (0, y.jsx)(D._v, {
                className: eV().tooltipContent,
                children: (0, y.jsx)(A.Z, {
                  id: "warning-messages.do-not-take-screenshots",
                }),
              }),
            ],
          });
        },
        eD = {
          exit: eM().plusButtonContainer_exit,
          exitActive: eM().plusButtonContainer_exit_active,
          enter: eM().plusButtonContainer_enter,
          enterActive: eM().plusButtonContainer_enter_active,
        },
        eW = {
          exit: eM().plusBar_exit,
          exitActive: eM().plusBar_exit_active,
          enter: eM().plusBar_enter,
          enterActive: eM().plusBar_enter_active,
        },
        eF = Q({ placement: "right", padding: 8 }),
        eG = (0, h.Pi)((e) => {
          let {
              className: t,
              collapsed: i,
              shownAnimation: a,
              handleClick: n,
            } = e,
            r = j(),
            l = (0, g.hJm)(),
            { formatMessage: o } = (0, k.Z)(),
            { language: s } = (0, g.ZSk)(),
            {
              user: c,
              experiments: d,
              modals: { paywallModal: u },
            } = (0, g.oR4)(),
            m = (0, g.V$B)(d),
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
                  O,
                  {
                    children: m.map((e) =>
                      (0, y.jsx)(
                        z,
                        {
                          selected: l(e.path),
                          shownAnimation: a,
                          variant: "main",
                          children: (0, y.jsxs)(U.rU, {
                            href: e.path,
                            children: [
                              (0, y.jsxs)(D.u, {
                                ...eF,
                                enabled: i,
                                children: [
                                  (0, y.jsx)(T.J, {
                                    variant: l(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, y.jsx)(D._v, {
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
            f = (0, C.useMemo)(
              () =>
                r
                  ? null
                  : (0, C.createElement)(D.u, {
                      ...eF,
                      key: "collapseTooltip",
                      enabled: i,
                      isFocusEnabled: !1,
                      children: [
                        (0, y.jsx)(w.z, {
                          className: eM().collapseButton,
                          "aria-label": p,
                          radius: "round",
                          color: "secondary",
                          size: "xs",
                          icon: (0, y.jsx)(T.J, {
                            variant: i ? "arrowRight" : "arrowLeft",
                            size: "xxs",
                          }),
                          onClick: n,
                        }),
                        (0, y.jsx)(D._v, {
                          className: (0, x.W)({
                            [eM().collapseButtonTooltip_hidden]: !i,
                          }),
                          children: p,
                        }),
                      ],
                    }),
              [i, p, n, r],
            ),
            b = (0, C.useRef)(null),
            N = (0, C.useMemo)(
              () =>
                (0, y.jsx)(P.Z, {
                  nodeRef: b,
                  in: i,
                  timeout: 150,
                  classNames: eD,
                  unmountOnExit: !0,
                  children: (0, y.jsx)("div", {
                    className: eM().plusButtonContainer,
                    ref: b,
                    children: (0, y.jsxs)(D.u, {
                      ...eF,
                      enabled: i,
                      children: [
                        (0, y.jsx)(w.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, y.jsx)(T.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, x.W)(eM().button, eM().important),
                          "aria-label": o({
                            id: "plusbar.subscription-activation",
                          }),
                          onClick: u.open,
                        }),
                        (0, y.jsx)(D._v, {
                          children: (0, y.jsx)(W.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, y.jsx)(A.Z, {
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
                (0, y.jsx)(P.Z, {
                  nodeRef: S,
                  in: !i,
                  timeout: 150,
                  classNames: eW,
                  unmountOnExit: !0,
                  children: (0, y.jsx)(eE, {
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
                  f,
                ],
              }),
              d.checkExperiment(g.peG.WebNextNDABadge, "on") &&
                (0, y.jsx)(ez, {
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
              (0, y.jsx)(eg, {
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
      var eU = i(73061),
        eQ = i.n(eU),
        eZ = i(14825),
        eY = i.n(eZ);
      let eH = (e) => {
          let { className: t } = e;
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eY().root, t),
            children: [
              (0, y.jsx)(W.Caption, {
                className: eY().nda,
                variant: "span",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(A.Z, { id: "entity-names.nda" }),
              }),
              (0, y.jsx)(W.Caption, {
                className: eY().text,
                variant: "span",
                size: "m",
                weight: "normal",
                lineClamp: 1,
                children: (0, y.jsx)(A.Z, {
                  id: "warning-messages.only-for-staff",
                }),
              }),
            ],
          });
        },
        eK = (0, h.Pi)((e) => {
          let { className: t } = e,
            i = (0, g.hJm)(),
            { experiments: a } = (0, g.oR4)(),
            { formatMessage: n } = (0, k.Z)(),
            r = (0, g.V$B)(a),
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
            className: (0, x.W)(eQ().root, t),
            children: [
              a.checkExperiment(g.peG.WebNextNDABadge, "on") &&
                (0, y.jsx)(eH, { className: eQ().ndaBadge }),
              (0, y.jsx)(V, {
                collapsed: !0,
                direction: "horizontal",
                "aria-label": l,
                children: (0, y.jsx)(O, {
                  children: (0, y.jsxs)(y.Fragment, {
                    children: [
                      r.map((e) =>
                        (0, y.jsx)(
                          z,
                          {
                            selected: i(e.path),
                            children: (0, y.jsxs)(U.rU, {
                              href: e.path,
                              children: [
                                (0, y.jsx)(T.J, {
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
                      (0, y.jsx)(z, {
                        children: (0, y.jsx)(G.Iw, {
                          className: eQ().user,
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
        eq = (0, h.Pi)((e) => {
          let { className: t } = e,
            i = (0, g.uK4)().get(g.V0J),
            a = j(),
            { settings: n } = (0, g.oR4)(),
            [r, l] = (0, C.useState)(i.get(g.BUb.NavbarCollapsed) || !1),
            [o, s] = (0, C.useState)(!1),
            c = (0, C.useMemo)(
              () => (n.layout === g.t8m.Mobile ? eK : eG),
              [n.layout],
            ),
            d = (0, C.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(g.BUb.NavbarCollapsed, !r, { expires: 180 }),
                  l(!r),
                  s(!0);
              },
              [r, i],
            );
          return (0, y.jsx)("aside", {
            className: (0, x.W)(L().root, { [L().root_collapsed]: r || a }, t),
            ...(0, b.BA)(b.QM.navbar.NAVBAR),
            children: (0, y.jsx)(c, {
              handleClick: d,
              collapsed: r || a,
              shownAnimation: o,
            }),
          });
        });
      var eJ = i(42288);
      let eX = eJ.V5.model("PinAlbumItemModel", {
          type: eJ.V5.literal(Y.Qm.ALBUM),
          data: q.KX,
        }),
        e$ = eJ.V5.model("PinArtistItemModel", {
          type: eJ.V5.literal(Y.Qm.ARTIST),
          data: ed.Go,
        }),
        e0 = eJ.V5.model("PinPlaylistItemModel", {
          type: eJ.V5.literal(Y.Qm.PLAYLIST),
          data: e_.Cd,
        }),
        e1 = eJ.V5.model("PinVibeItemModel", {
          type: eJ.V5.literal(Y.Qm.WAVE),
          data: ey.KW,
        }),
        e5 = eJ.V5.union(eX, e$, e0, e1),
        e2 = (e) => "object" == typeof e && e && "type" in e;
      var e4 = i(93490),
        e3 = i(73276);
      let e8 = (e) => {
          switch (e.type) {
            case Y.Qm.WAVE:
              return (0, eJ.pj)({ type: Y.Qm.WAVE, data: (0, ey.FF)(e.data) });
            case Y.Qm.PLAYLIST:
              return (0, eJ.pj)({
                type: Y.Qm.PLAYLIST,
                data: (0, e3.RE)({ playlist: e.data }),
              });
            case Y.Qm.ARTIST:
              return (0, eJ.pj)({
                type: Y.Qm.ARTIST,
                data: (0, ed.tR)({ artist: e.data }),
              });
            case Y.Qm.ALBUM:
              return (0, eJ.pj)({
                type: Y.Qm.ALBUM,
                data: (0, e4.cO)({ album: e.data }),
              });
          }
        },
        e9 = eJ.V5.model("Pins", {
          loadingState: eJ.V5.enumeration(Object.values(g.Gui)),
          items: eJ.V5.maybeNull(eJ.V5.array(e5)),
          index: eJ.V5.map(eJ.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var i;
                (e.items = (0, eJ.pj)(
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
                null === (a = e.items) || void 0 === a || a.unshift(e8(t));
                let l =
                  null === (n = e.items) || void 0 === n ? void 0 : n.at(0);
                l && e.index.set(l.data.pinId, !0);
              },
              getData: (0, eJ.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: i } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gui.PENDING)
                  try {
                    var a;
                    e.loadingState = g.Gui.PENDING;
                    let i = yield t.getPins();
                    (e.items = (0, eJ.pj)(i.pins.map(e8))),
                      null === (a = e.items) ||
                        void 0 === a ||
                        a.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = g.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = g.Gui.REJECT), i.error(t);
                  }
              }),
              toggleAlbumPin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gui.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinAlbum(i)), t.deletePin(a), r;
                    return (r = yield n.pinAlbum(i)), e2(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gui.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinArtist(i)), t.deletePin(a), r;
                    return (r = yield n.pinArtist(i)), e2(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gui.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinPlaylist(i)), t.deletePin(a), r;
                    return (
                      (r = yield n.pinPlaylist(i)), e2(r) && t.addPin(r), r
                    );
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: n, modelActionsLogger: r } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gui.PENDING)
                  try {
                    let r;
                    if (e.isPinned(a))
                      return (r = yield n.unpinWave(i)), t.deletePin(a), r;
                    return (r = yield n.pinWave(i)), e2(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    72152: function (e, t, i) {
      "use strict";
      i.d(t, {
        Rt: function () {
          return ty;
        },
        Oe: function () {
          return tL;
        },
        ev: function () {
          return ev;
        },
      });
      var a,
        n,
        r,
        l = i(9753),
        o = i(60836),
        s = i(9544),
        c = i(98639),
        d = i(86939),
        u = i(31014),
        m = i(39513),
        _ = i(2570),
        p = i(34152),
        v = i(75980),
        electronBridge = i(78918),
        y = i.n(v);
      let x = (0, s.Pi)((e) => {
          let { className: t, data: i, mediaContent: a } = e,
            { settings: n } = (0, p.oR4)(),
            r = n.layout === p.t8m.Mobile,
            s = (0, c.useCallback)(() => {
              window.open(i.clickThroughUrl, "_blank", "noreferrer noopener");
            }, [i.clickThroughUrl]);
          return (0, l.jsxs)("div", {
            className: (0, o.W)(y().root, t),
            children: [
              a,
              (0, l.jsxs)("div", {
                className: y().container,
                children: [
                  (0, l.jsxs)("div", {
                    className: y().info,
                    children: [
                      (0, l.jsx)(d.Image, {
                        className: y().favicon,
                        withAspectRatio: !0,
                        "aria-hidden": !0,
                        fit: "cover",
                        src: i.favicon,
                      }),
                      (0, l.jsxs)("div", {
                        className: y().text,
                        children: [
                          (0, l.jsx)(_.Caption, {
                            variant: "div",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            className: y().title,
                            lineClamp: r ? 5 : void 0,
                            children: i.adTitle,
                          }),
                          (0, l.jsx)(_.Caption, {
                            variant: "div",
                            type: "text",
                            size: "m",
                            weight: "medium",
                            className: y().subtitle,
                            children: (0, l.jsx)(u.Z, { id: "ads.ad" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: y().buttonContainer,
                    children: (0, l.jsx)(m.z, {
                      onClick: s,
                      role: "link",
                      color: "primary",
                      size: r ? "m" : "l",
                      radius: "xxxl",
                      withRipple: !0,
                      children: (0, l.jsx)(u.Z, { id: "ads.learn-more" }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        h = {
          adTitle: "Interactive Direct In Video",
          iconSrc:
            "https://avatars.mds.yandex.net/get-canvas/5212570/2a00000191379e58d2ff75dd0d32b4b3f936/optimize",
          clickThroughUrl:
            "https://yandex.ru/an/count/WYiejI_zOoVX2Ldu0UqG01FUSmI0o89WWZwVovqzs-_SUSEThz_nUiCTBfArg8WAP4jnPuwNg0hzr40A2k6qfqxd4u_QKZo8YFh13fYocTD1d84rglGgHkH9Zf1Xq77qLuTPueH0UQlIqzbUe2EgQU_koTJOYiLmhW3okOJpkO0cB1G35RsaTinXAI0hdVBOpgSzTTeK263hwTBbV94Ipt4Vmlw3rtlWca0CvCdHiy6I0RwaIbGPDYv0ye609u9e13CuM4-cmqaAYnTtyE_6gyLGh8Cw1Sxd6oRFeUpqJnr_U6vyMBGQTW9gz0tblwsEgaSlC0stIRFr42YPc0D31TKBc23bq02510d3e6s-zMMNOCZwfZi_A60umiL42ri7TAtEnCIaEysGImnfeYrGq64cb6KOr_GOSfD92sRIexPYnCmOdOOnmtnFtEmiRZ6f607JRNfICGWZVRiszMu2l_Z6oG_FC7_mZPF_lN7olJFCNpl3_BCqKveyeHit31xgzBvXy52djzwGYA0tZ_1b_uRLAER9FWbS4-81LAIsO_-D8RBO9lPU75aWTsMHMI1tPLwheqIoYy_EB9cKudKlbSI9JqnkXyJAqfWhbKhb5Qy43kmSB0RQhFnPh2j4I145XJ8P_BLgDBt3yXdX7KxMb-1e67vIdCbabVlF1ojcAI7VEowUVlg03bGw3ZBbM1RXI5qR31PgEyzHTXX5jN1esp0jOStDOzHv3_vWKCW0~2",
          favicon:
            "https://avatars.mds.yandex.net/get-canvas/5212570/2a00000191379e58d2ff75dd0d32b4b3f936/optimize",
        };
      var C = i(91853),
        f = i.n(C);
      let b = (0, s.Pi)((e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
          className: (0, o.W)(f().root, t),
          children: (0, l.jsx)(x, {
            data: h,
            mediaContent: (0, l.jsxs)("div", {
              className: f().imageContainer,
              children: [
                (0, l.jsx)(d.Image, {
                  className: f().image,
                  "aria-hidden": !0,
                  fit: "cover",
                  src: h.iconSrc,
                }),
                (0, l.jsx)(d.Image, {
                  className: f().backgroundImage,
                  "aria-hidden": !0,
                  fit: "cover",
                  src: h.iconSrc,
                }),
              ],
            }),
          }),
        });
      });
      var g = i(58852),
        N = i(12683),
        j = i.n(N),
        S = i(80542),
        L = i(23881),
        k = i(84338),
        A = i(28852),
        P = i(12404),
        w = i(16636),
        T = i(5773),
        I = i(71230),
        E = i(33060),
        R = i.n(E),
        M = i(58163),
        B = i.n(M);
      let V = (e) => {
          let { value: t, variant: i, className: a } = e,
            n =
              "start" === i
                ? L.bG.changeTimecode.TIMECODE_TIME_START
                : L.bG.changeTimecode.TIMECODE_TIME_END;
          return (0, l.jsx)(_.Caption, {
            className: (0, o.W)(B().root, B()["root_".concat(i)], a),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            ...(0, L.BA)(n),
            children: t,
          });
        },
        O = (e) => {
          let {
              className: t,
              sliderClassName: i,
              disabled: a,
              isFullscreen: n,
              isMobile: r,
              showThumbVariant: s,
              withTimecode: d = !0,
            } = e,
            u = (0, p.R$C)(),
            m = (n || !r) && d,
            _ = (0, c.useRef)(!1),
            [v, y] = (0, c.useState)(0),
            [x, h] = (0, c.useState)(0),
            [C, f] = (0, c.useState)(0),
            { formatMessage: b } = (0, S.Z)(),
            g = (0, c.useCallback)(
              (e, t) => {
                (_.current = !t), t ? null == u || u.setProgress(e) : y(e);
              },
              [u],
            );
          return (
            (0, c.useEffect)(() => {
              let e =
                null == u
                  ? void 0
                  : u.state.playerState.progress.onChange(() => {
                      let e = u.state.playerState.progress.value;
                      e.duration === 1 / 0
                        ? (h(0), y(0), f(0))
                        : (h(e.duration),
                          y((t) => (_.current ? t : e.position)),
                          f(e.loaded));
                    });
              return () => {
                null == e || e();
              };
            }, [u]),
            (0, l.jsxs)("div", {
              className: (0, o.W)(
                R().root,
                {
                  [R().root_fullscreen]: n,
                  [R().root_mobile]: r,
                  [R().root_withTimecode]: d,
                },
                t,
              ),
              ...(0, L.BA)(L.bG.changeTimecode.TIMECODE_WRAPPER),
              children: [
                m &&
                  (0, l.jsx)(V, {
                    value: (0, p.gf)(Math.round(v), Math.round(x)),
                    variant: "start",
                    className: R().timecode,
                  }),
                (0, l.jsx)(I.i, {
                  className: (0, o.W)(
                    R().slider,
                    {
                      [R()["slider_thumbSize_".concat(n || r ? "xs" : "m")]]:
                        !0,
                    },
                    i,
                  ),
                  disabled: a,
                  thumbSize: n || r ? "xs" : "s",
                  trackSize: n || r ? "xs" : "s",
                  value: Math.round(v),
                  mode: "deferred",
                  secondaryValue: Math.round(C),
                  maxValue: 0 === x ? void 0 : Math.round(x),
                  onChange: g,
                  "aria-label": b({ id: "player-actions.timecode-control" }),
                  showThumbVariant: s,
                  ...(0, L.BA)(L.bG.changeTimecode.TIMECODE_SLIDER),
                }),
                m &&
                  (0, l.jsx)(V, {
                    value: (0, p.gf)(Math.round(x), Math.round(x)),
                    variant: "end",
                    className: R().timecode,
                  }),
              ],
            })
          );
        };
      var z = i(29569),
        D = i(75191),
        W = i(44023),
        F = i(3084),
        G = i(43056),
        U = i.n(G);
      let Q = (e) => {
          let { className: t, ariaLabel: i, onClick: a, forwardRef: n } = e;
          return (0, l.jsx)("div", {
            ref: n,
            className: (0, o.W)(U().root, t),
            children: (0, l.jsx)(m.z, {
              className: U().button,
              radius: "round",
              size: "s",
              color: "secondary",
              withRipple: !1,
              "aria-label": i,
              icon: (0, l.jsx)(A.J, { variant: "fullscreen", size: "xs" }),
              onClick: a,
              ...(0, L.BA)(L.QM.player.FULLSCREEN_PLAYER_BUTTON),
            }),
          });
        },
        Z = (0, c.forwardRef)((e, t) => (0, l.jsx)(Q, { forwardRef: t, ...e }));
      var Y = i(76894),
        H = i(385),
        K = i(45028);
      let q = {
        [Y.nJ.HQ_PLUS]: "HQ+",
        [Y.nJ.HQ]: "HQ",
        [Y.nJ.NQ]: "NQ",
        [Y.nJ.LQ]: "LQ",
        [Y.nJ.PREVIEW]: "PREVIEW",
      };
      var J = i(98776),
        X = i.n(J);
      let $ = (e) => {
        let { closeToast: t, onOpenQualitySettingsMenu: i, message: a } = e,
          { formatMessage: n } = (0, S.Z)(),
          r = (0, c.useCallback)(() => {
            i(), null == t || t();
          }, [t, i]),
          o = (0, c.useMemo)(
            () =>
              (0, l.jsxs)("div", {
                className: X().message,
                children: [
                  (0, l.jsx)(_.Caption, {
                    variant: "div",
                    size: "m",
                    children: a,
                  }),
                  (0, l.jsx)(m.z, {
                    className: X().changeButton,
                    onClick: r,
                    variant: "text",
                    withRipple: !1,
                    "aria-label": n({ id: "interface-actions.change" }),
                    children: (0, l.jsx)(_.Caption, {
                      variant: "div",
                      size: "m",
                      children: (0, l.jsx)(u.Z, {
                        id: "interface-actions.change",
                      }),
                    }),
                  }),
                ],
              }),
            [n, r, a],
          );
        return (0, l.jsx)(F.Yj, {
          closeToast: t,
          cover: (0, l.jsx)(A.J, {
            className: X().icon,
            size: "xs",
            variant: "settings",
          }),
          message: o,
        });
      };
      var ee = i(55676),
        et = i.n(ee);
      let ei = {
          duration: 300,
          initial: { transform: "translateY(5%)", opacity: 0 },
          open: { transform: "translateY(0)", opacity: 1 },
          close: { transform: "translateY(5%)", opacity: 0 },
        },
        ea = [
          {
            type: Y.nJ.HQ_PLUS,
            text: (0, l.jsx)(u.Z, {
              id: "player-actions.audio-quality-maximum",
            }),
            qualityMessageId: "player-actions.audio-quality-maximum",
          },
          {
            type: Y.nJ.HQ,
            text: (0, l.jsx)(u.Z, {
              id: "player-actions.audio-quality-optimal",
            }),
            qualityMessageId: "player-actions.audio-quality-optimal",
          },
          {
            type: Y.nJ.NQ,
            text: (0, l.jsx)(u.Z, {
              id: "player-actions.audio-quality-economical",
            }),
            qualityMessageId: "player-actions.audio-quality-economical",
          },
        ],
        en = [
          {
            type: Y.nJ.HQ,
            text: (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(u.Z, { id: "player-actions.audio-quality-hq" }),
                "\xa0",
                (0, l.jsxs)("span", {
                  className: et().item_type,
                  children: ["• ", q[Y.nJ.HQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq",
          },
          {
            type: Y.nJ.NQ,
            text: (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(u.Z, { id: "player-actions.audio-quality-nq" }),
                "\xa0",
                (0, l.jsxs)("span", {
                  className: et().item_type,
                  children: ["• ", q[Y.nJ.NQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-nq",
          },
        ],
        er = {
          [Y.nJ.HQ_PLUS]: (0, l.jsx)(u.Z, {
            id: "player-actions.audio-quality-maximum-description",
          }),
          [Y.nJ.HQ]: (0, l.jsx)(u.Z, {
            id: "player-actions.audio-quality-optimal-description",
          }),
          [Y.nJ.NQ]: (0, l.jsx)(u.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
          [Y.nJ.LQ]: (0, l.jsx)(u.Z, {
            id: "player-actions.audio-quality-economical-description",
          }),
        },
        el = (e) => (0, l.jsxs)(l.Fragment, { children: ["[NDA] ", e] }),
        eo = (0, s.Pi)((e) => {
          let {
            onOpenChange: t,
            open: i,
            placement: a,
            size: n,
            referenceClassName: r,
            icon: s,
            referenceLabel: d,
          } = e;
          (0, p.ZP4)(i);
          let v = (0, c.useId)(),
            { formatMessage: y } = (0, S.Z)(),
            { contentRef: x } = (0, p.$Y6)(),
            { notify: h } = (0, p.d$W)(),
            C = (0, p.uK4)(),
            f = (0, p.jpI)(),
            b = C.get(p.V0J),
            {
              sonataState: g,
              user: N,
              equalizer: j,
              experiments: k,
              settings: P,
            } = (0, p.oR4)(),
            w = P.layout === p.t8m.Mobile,
            T = (0, p.SqQ)(),
            I = (0, c.useRef)(null),
            E =
              k.checkExperiment(p.peG.WebNextEqualizer, "on") &&
              (null == f ? void 0 : f.equalizer),
            R = k.checkExperiment(p.peG.WebNextEnableNewQuality, "on"),
            M = k.checkExperiment(p.peG.WebNextEnableNewQuality, "prod"),
            B = R || M,
            V = (0, c.useMemo)(() => {
              let e = y({ id: "player-actions.audio-quality" });
              return R && !M && (e = el(e)), e;
            }, [y, R, M]),
            O = (0, c.useCallback)(() => {
              null == t || t(!0);
            }, [t]),
            z = (0, c.useCallback)(() => {
              null == t || t(!1);
            }, [t]),
            D = (0, c.useCallback)(
              (e) => {
                g.setQuality(e),
                  null == T || T.setQuality(e),
                  b.set(p.BUb.YmPlayerQuality, e);
              },
              [T, g, b],
            ),
            W = (0, c.useCallback)(
              (e) => {
                let t = y({ id: e }).toLowerCase();
                return (0, l.jsx)(u.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [y],
            ),
            F = (0, c.useCallback)(
              (e, t) => () => {
                if (g.quality === e) return;
                D(e);
                let i = W(t);
                h((0, l.jsx)($, { onOpenQualitySettingsMenu: O, message: i }), {
                  containerId: p.W$x.INFO,
                });
              },
              [W, O, h, g.quality, D],
            ),
            G = (0, c.useMemo)(
              () =>
                M ? ea : R ? ea.map((e) => ({ ...e, text: el(e.text) })) : en,
              [R, M],
            ),
            U = (0, c.useMemo)(() => {
              let e = !N.hasPlus;
              return G.map((t) => {
                let { type: i, text: a, qualityMessageId: n } = t,
                  r =
                    i === g.quality
                      ? (0, l.jsx)(A.J, { variant: "check" })
                      : null,
                  s = i === g.quality;
                return (
                  ((g.quality === Y.nJ.NQ && i === Y.nJ.LQ) ||
                    (g.quality === Y.nJ.LQ && i === Y.nJ.NQ)) &&
                    ((s = !0), (r = (0, l.jsx)(A.J, { variant: "check" }))),
                  (0, l.jsxs)(
                    H.sN,
                    {
                      isBlock: !0,
                      disabled: e,
                      className: (0, o.W)(et().item, {
                        [et().expandedItem]: B,
                      }),
                      iconPosition: "right",
                      icon: r,
                      onClick: F(i, n),
                      role: "option",
                      "aria-selected": s,
                      children: [
                        B &&
                          (0, l.jsxs)("span", {
                            className: et().itemWrapper,
                            children: [
                              (0, l.jsx)("span", {
                                className: et().item_option,
                                children: a,
                              }),
                              (0, l.jsx)("span", {
                                className: (0, o.W)(
                                  et().item_option,
                                  et().itemSubTitle,
                                ),
                                children: er[i],
                              }),
                            ],
                          }),
                        !B &&
                          (0, l.jsx)("span", {
                            className: et().item_option,
                            children: a,
                          }),
                      ],
                    },
                    i,
                  )
                );
              });
            }, [F, g.quality, N.hasPlus, B, G]),
            Q = (0, c.useMemo)(
              () =>
                B
                  ? {
                      listClassName: (0, o.W)(
                        et().root,
                        et().root_withNewQuality,
                        { [et().root_withEqualizer]: E },
                      ),
                      disableFloatingStyles: !0,
                      portalNode: w ? null : x,
                      transform: !1,
                      transition: ei,
                    }
                  : {
                      offsetOptions: 10,
                      listClassName: (0, o.W)({ [et().root_withEqualizer]: E }),
                    },
              [x, B, E, w],
            ),
            Z = (0, c.useMemo)(() => {
              if (E && !w)
                return (0, l.jsx)(
                  K.Gv,
                  {
                    isExpanded: j.isEnabled,
                    isDisabled: !1,
                    className: (0, o.W)(et().equalizer, {
                      [et().equalizer_withNewQuality]: B,
                    }),
                    title: y({ id: "equalizer.title" }),
                  },
                  v,
                );
            }, [j.isEnabled, v, y, B, E, w]);
          return (0, l.jsxs)(H.v2, {
            wrapperClassName: r,
            size: n,
            icon: s,
            placement: a,
            open: i,
            onOpenChange: t,
            ariaLabel: y({ id: "player-actions.audio-quality" }),
            footer: Z,
            label: d,
            variant: "text",
            ...Q,
            containerProps: (0, L.BA)(
              L.QM.player.QUALITY_SETTINGS_CONTEXT_MENU,
            ),
            isMobile: w,
            ...(0, L.BA)(L.QM.player.SOUND_QUALITY_BUTTON),
            children: [
              !w &&
                (0, l.jsxs)(_.Heading, {
                  className: (0, o.W)(et().header, {
                    [et().headerWithCloseButton]: B,
                  }),
                  variant: "h4",
                  size: "xs",
                  weight: "bold",
                  children: [
                    V,
                    B &&
                      (0, l.jsx)(m.z, {
                        ref: I,
                        radius: "round",
                        color: "secondary",
                        size: "xxs",
                        icon: (0, l.jsx)(A.J, {
                          variant: "close",
                          size: "xxs",
                        }),
                        onClick: z,
                        "aria-label": y({
                          id: "interface-actions.close-quality-settings",
                        }),
                      }),
                  ],
                }),
              U,
            ],
          });
        });
      var es = i(66846),
        ec = i.n(es);
      let ed = "player-region",
        eu = (0, s.Pi)((e) => {
          var t;
          let {
              className: i,
              entityMeta: a,
              onLikeClick: n,
              onDislikeClick: onDislikeClick,
            } = e,
            {
              user: r,
              sonataState: s,
              fullscreenPlayer: d,
              experiments: v,
            } = (0, p.oR4)(),
            [y, x] = (0, c.useState)(!1),
            [h, C] = (0, c.useState)(!1),
            { formatMessage: f } = (0, S.Z)(),
            b = s.contextType === k.Ak.Generative,
            g = !b,
            N = r.isAuthorized && !b,
            j = (0, p.RVp)(),
            I = s.canSpeed && j && (null == a ? void 0 : a.isNonMusic),
            E =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            R = null == a ? void 0 : a.isTrackAudiobook,
            M = (0, c.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == a ? void 0 : a.averageColor,
              }),
              [null == a ? void 0 : a.averageColor],
            ),
            B = (0, c.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            V = (0, c.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION"].includes(t.tagName);
                a && g && i && d.showFullscreenPlayerModal();
              },
              [a, d, g],
            ),
            G = (0, c.useMemo)(() => {
              if (null == a ? void 0 : a.isNonMusic) return null;
              let e = ""
                .concat(f({ id: "interface-actions.open-sync-lyrics" }), " ")
                .concat(f({ id: "warning-messages.can-break-accessibility" }));
              return (0, l.jsx)(m.z, {
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled: !(null == a ? void 0 : a.hasSyncLyrics),
                "aria-hidden": !(null == a ? void 0 : a.hasSyncLyrics),
                withRipple: !1,
                "aria-label": e,
                icon: (0, l.jsx)(A.J, { variant: "syncLyrics", size: "xs" }),
                onClick: d.showSyncLyrics,
              });
            }, [
              null == a ? void 0 : a.hasSyncLyrics,
              f,
              d.showSyncLyrics,
              null == a ? void 0 : a.isNonMusic,
            ]),
            U = (0, c.useMemo)(
              () =>
                v.checkExperiment(p.peG.WebNextPlayQueue, "on")
                  ? (0, l.jsx)(m.z, {
                      radius: "round",
                      size: "xxxs",
                      variant: "text",
                      disabled: !a,
                      withRipple: !1,
                      "aria-label": f({ id: "play-queue.title" }),
                      icon: (0, l.jsx)(A.J, {
                        variant: "playQueue",
                        size: "xs",
                      }),
                      ...(0, L.BA)(
                        L.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                      ),
                    })
                  : (0, l.jsx)(F.wx, {
                      title: f({ id: "play-queue.title" }),
                      description: f({ id: "future-feature.message" }),
                      children: (0, l.jsx)(m.z, {
                        radius: "round",
                        size: "xxxs",
                        variant: "text",
                        disabled: !0,
                        "aria-hidden": !0,
                        withRipple: !1,
                        icon: (0, l.jsx)(A.J, {
                          variant: "playQueue",
                          size: "xs",
                        }),
                        ...(0, L.BA)(
                          L.QM.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                        ),
                      }),
                    }),
              [a, v, f],
            ),
            Q = (0, c.useMemo)(
              () =>
                a
                  ? R
                    ? (0, l.jsx)(W.MG, {
                        track: a,
                        withAuthor: !0,
                        withBookLink: !0,
                        withSecondaryColor: !0,
                      })
                    : E
                      ? (0, l.jsx)(W.wT, {
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, l.jsx)(W.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                        })
                  : null,
              [a, E, R],
            );
          const qualityMap = { lq: "LQ", nq: "NQ", hq: "HQ", lossless: "HQ+" };
          const codecMap = {
            mp3: "MP3",
            "he-aac": "HE-AAC",
            aac: "AAC",
            flac: "FLAC",
          };
          let theState = (0, p.R$C)();
          let [downloadInfo, setDownloadInfo] = (0, c.useState)(
            theState?.state?.queueState?.currentEntity?.value?.entity
              ?.mediaSource?.downloadInfo,
          );
          return (
            (0, c.useEffect)(() => {
              const timer = setTimeout(() => {
                let fDownloadInfo =
                  theState?.state?.queueState?.currentEntity?.value?.entity
                    ?.mediaSource?.downloadInfo;
                if (fDownloadInfo) {
                  setDownloadInfo(fDownloadInfo);
                }
              }, 400);
              return () => {
                null == timer || clearTimeout(timer);
              };
            }),
            (0, l.jsxs)("section", {
              style: M,
              className: (0, o.W)(ec().root, { [ec().root_disabled]: !a }, i),
              onDoubleClick: V,
              "aria-labelledby": ed,
              ...(0, L.BA)(L.QM.player.PLAYERBAR_DESKTOP),
              children: [
                (0, l.jsx)(w.y, {
                  children: (0, l.jsx)(_.Heading, {
                    variant: "h3",
                    id: ed,
                    children: (0, l.jsx)(u.Z, { id: "a11y-regions.player" }),
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: ec().info,
                  children: [
                    (0, l.jsx)("div", {
                      className: ec().infoCard,
                      children:
                        a &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsxs)(P.Paper, {
                              radius: "s",
                              className: ec().coverContainer,
                              children: [
                                (0, l.jsx)(F.BE, {
                                  className: ec().cover,
                                  src: a.coverUri,
                                  size: 100,
                                  fit: "cover",
                                  withAvatarReplace: !0,
                                }),
                                g &&
                                  (0, l.jsxs)(T.u, {
                                    placement: "top",
                                    offsetOptions: 4,
                                    children: [
                                      (0, l.jsx)(Z, {
                                        ariaLabel: f({
                                          id: "player-actions.fullscreen-button",
                                        }),
                                        onClick: d.showFullscreenPlayerModal,
                                      }),
                                      (0, l.jsx)(T._v, {
                                        children: (0, l.jsx)(u.Z, {
                                          id: "player-actions.fullscreen",
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: ec().description,
                              children: Q,
                            }),
                          ],
                        }),
                    }),
                    (0, l.jsx)("div", {
                      className: ec().infoButtons,
                      onDoubleClick: B,
                      children:
                        a &&
                        N &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            window.SHOW_DISLIKE_BUTTON
                              ? (0, l.jsx)(F.Q1, {
                                  className: ec().dislikeButton,
                                  isDisliked: a.isDisliked,
                                  onClick: onDislikeClick,
                                  iconSize: "xs",
                                })
                              : undefined,
                            (0, l.jsx)(F.dJ, {
                              className: ec().likeButton,
                              isLiked: a.isLiked,
                              onClick: n,
                              iconSize: "xs",
                            }),
                            (0, l.jsx)(W.hz, {
                              track: a,
                              placement: "top",
                              open: y,
                              onOpenChange: x,
                              icon: (0, l.jsx)(A.J, {
                                size: "xs",
                                variant: "more",
                              }),
                              size: "s",
                              ...(0, L.BA)(
                                L.QM.player
                                  .PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                              ),
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: ec().sonata,
                  children: [
                    (0, l.jsx)(D.WP, { isMobile: !1, entityMeta: a }),
                    !s.isGenerativeContext &&
                      (0, l.jsx)(O, {
                        disabled: !a,
                        isMobile: !1,
                        isFullscreen: !1,
                      }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: ec().meta,
                  children: [
                    !s.isGenerativeContext &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          I && (0, l.jsx)(F.t5, { iconSize: "l" }),
                          G,
                          U,
                          (0, l.jsx)(eo, {
                            placement: "bottom",
                            open: h,
                            onOpenChange: C,
                            icon: (0, l.jsx)(A.J, {
                              variant: "settings",
                              size: "xs",
                            }),
                            size: "xxxs",
                            referenceClassName: ec().settingsButton,
                          }),
                          (0, l.jsx)(F.wx, {
                            title: "Качество трека",
                            description:
                              downloadInfo?.bitrate !== 0
                                ? `${qualityMap[downloadInfo?.quality]}: ${codecMap[downloadInfo?.codec]} - ${downloadInfo?.bitrate}`
                                : `${qualityMap[downloadInfo?.quality]}: ${codecMap[downloadInfo?.codec]}`,
                            children: (0, l.jsxs)("div", {
                              className: ec().settingsButton,
                              onClick: () => {
                                electronBridge.sendDownloadTrack({
                                  downloadURL: downloadInfo?.url,
                                  codec: downloadInfo?.codec,
                                  trackId: downloadInfo?.trackId,
                                  track: {
                                    title: JSON.parse(JSON.stringify(a.title)),
                                    artists: JSON.parse(JSON.stringify(a.artists)),
                                    albums: JSON.parse(JSON.stringify(a.albums)),
                                    coverUri: JSON.parse(JSON.stringify(a.coverUri)),
                                  },
                                });
                              },
                              children: (0, l.jsxs)("span", {
                                className:
                                  ec().settingsButton + " NfB1qSw6DnoSwTr9I5mE",
                                style: { cursor: "pointer" },
                                children:
                                  window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK
                                    ? codecMap[downloadInfo?.codec]
                                    : qualityMap[downloadInfo?.quality],
                              }),
                            }),
                          }),
                        ],
                      }),
                    (0, l.jsx)(z.F, {}),
                  ],
                }),
              ],
            })
          );
        });
      var em = i(83249),
        e_ = i.n(em);
      let ep = (0, s.Pi)((e) => {
          var t;
          let { className: i, entityMeta: a, onLikeClick: n } = e,
            { user: r, sonataState: s, fullscreenPlayer: d } = (0, p.oR4)(),
            m = s.contextType === k.Ak.Generative,
            v = r.isAuthorized && !m,
            y =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            x = null == a ? void 0 : a.isTrackAudiobook,
            h = (0, c.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == a ? void 0 : a.averageColor,
              }),
              [null == a ? void 0 : a.averageColor],
            ),
            C = (0, c.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION", "IMG"].includes(t.tagName);
                a && i && d.showFullscreenPlayerModal();
              },
              [a, d],
            ),
            f = (0, c.useMemo)(
              () =>
                a
                  ? x
                    ? (0, l.jsx)(W.MG, {
                        track: a,
                        withAuthor: !0,
                        withBookLink: !0,
                        withSecondaryColor: !0,
                      })
                    : y
                      ? (0, l.jsx)(W.wT, {
                          track: a,
                          withDate: !1,
                          withSecondaryColor: !0,
                          withPodcastName: !0,
                        })
                      : (0, l.jsx)(W.ko, {
                          track: a,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                        })
                  : null,
              [a, y, x],
            );
          return (0, l.jsxs)("section", {
            style: h,
            className: (0, o.W)(e_().root, i),
            onClick: C,
            children: [
              (0, l.jsx)(w.y, {
                children: (0, l.jsx)(_.Heading, {
                  variant: "h3",
                  id: "player-region",
                  children: (0, l.jsx)(u.Z, { id: "a11y-regions.player" }),
                }),
              }),
              !s.isGenerativeContext &&
                (0, l.jsx)(O, {
                  className: e_().progressBar,
                  sliderClassName: e_().progressBar,
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !a,
                }),
              (0, l.jsxs)("div", {
                className: e_().info,
                children: [
                  a
                    ? (0, l.jsxs)("div", {
                        className: e_().infoCard,
                        children: [
                          (0, l.jsx)(P.Paper, {
                            radius: "s",
                            className: e_().coverContainer,
                            children: (0, l.jsx)(F.BE, {
                              className: e_().cover,
                              src: a.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: e_().description,
                            children: f,
                          }),
                        ],
                      })
                    : (0, l.jsx)("div", { className: e_().infoCard }),
                  (0, l.jsxs)("div", {
                    className: e_().infoButtons,
                    children: [
                      a &&
                        v &&
                        (0, l.jsx)(F.dJ, { isLiked: a.isLiked, onClick: n }),
                      (0, l.jsx)(D.WP, { isMobile: !0, entityMeta: a }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        ev = (0, s.Pi)((e) => {
          let { className: t } = e,
            { settings: i, sonataState: a, fullscreenPlayer: n } = (0, p.oR4)(),
            r = (0, p.XUT)(),
            [s, d] = (0, c.useState)(!1),
            u = (0, g.SB)(a.entityMeta),
            m = (0, g.KX)(a.entityMeta);
          (0, c.useEffect)(() => {
            if (!a.isGenerativeContext)
              return (
                null == r ||
                  r.addShortcutsListener(
                    p.Pwk.MAIN,
                    p.yxF.TOGGLE_FULLSCREEN_PLAYER,
                    () => {
                      if (a.entityMeta) {
                        if (n.modal.isOpened) {
                          n.modal.close();
                          return;
                        }
                        n.modal.open();
                      }
                    },
                  ),
                null == r || r.addShortcutsListener(p.Pwk.MAIN, p.yxF.LIKE, u),
                null == r ||
                  r.addShortcutsListener(p.Pwk.MAIN, p.yxF.DISLIKE, m),
                () => {
                  null == r ||
                    r.removeShortcutsListener(
                      p.Pwk.MAIN,
                      p.yxF.TOGGLE_FULLSCREEN_PLAYER,
                    ),
                    null == r ||
                      r.removeShortcutsListener(p.Pwk.MAIN, p.yxF.LIKE),
                    null == r ||
                      r.removeShortcutsListener(p.Pwk.MAIN, p.yxF.DISLIKE);
                }
              );
          }, [m, u, r, a.isGenerativeContext, n.modal, a.entityMeta]);
          let _ = (0, c.useMemo)(
            () => (i.layout === p.t8m.Mobile ? ep : eu),
            [i.layout],
          );
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(_, {
                onLikeClick: u,
                onDislikeClick: m,
                entityMeta: a.entityMeta,
                className: (0, o.W)(t, j().root),
              }),
              s && (0, l.jsx)(b, { className: j().adPopup }),
            ],
          });
        });
      var ey = i(23897),
        ex = i(89352),
        eh = i(69863),
        eC = i(67175),
        ef = i.n(eC),
        eb = i(17295);
      let eg = (e) => {
        let { delay: t, initialState: i, throttleTimeout: a } = e,
          n = (0, c.useRef)(null),
          [r, l] = (0, c.useState)(!!i),
          o = (0, c.useMemo)(
            () =>
              (0, ey.Z)(
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
          s = (0, c.useCallback)(() => {
            l(!!i), n.current && window.clearTimeout(n.current);
          }, [i]);
        return (
          (0, c.useEffect)(
            () => () => {
              n.current && window.clearTimeout(n.current);
            },
            [],
          ),
          { state: r, handleDelayedToggle: o, reset: s }
        );
      };
      var eN = i(37117);
      let ej = (0, c.createContext)({}),
        eS = () => (0, c.useContext)(ej);
      var eL = i(80615),
        ek = i.n(eL),
        eA = i(68466),
        eP = i.n(eA);
      let ew = (e) => (e + 1) * 0.275,
        eT = (0, s.Pi)((e) => {
          let { className: t, icon: i } = e,
            { sonataState: a } = (0, p.oR4)(),
            n = (0, c.useCallback)(
              (e) => {
                let t = {
                  animationDelay: "".concat(ew(e), "s"),
                  animationDuration: "".concat(1.1, "s, ").concat(1.1, "s"),
                };
                return i
                  ? (0, c.cloneElement)(i, {
                      className: (0, o.W)(eP().element, eP().element_withIcon, {
                        [eP().element_paused]: a.isPaused,
                      }),
                      key: e,
                      style: t,
                    })
                  : (0, l.jsx)(
                      "div",
                      {
                        className: (0, o.W)(
                          eP().element,
                          eP().element_withDefaultElement,
                          { [eP().element_paused]: a.isPaused },
                        ),
                        style: t,
                      },
                      e,
                    );
              },
              [i, a],
            );
          return (0, l.jsx)("div", {
            className: (0, o.W)(eP().root, t),
            children: Array.from({ length: 4 }, (e, t) => n(t)),
          });
        });
      var eI = i(75015),
        eE = i(45131);
      ((a = n || (n = {})).INTRO = "intro"),
        (a.PREPARE = "prepare"),
        (a.PLAYING = "playing"),
        (a.OUTRO = "outro");
      let eR = () => {
        var e;
        let t = (0, p.R$C)(),
          [i, a] = (0, c.useState)(
            null !==
              (e =
                null == t
                  ? void 0
                  : t.state.playerState.progress.value.position) && void 0 !== e
              ? e
              : 0,
          ),
          n = (0, c.useCallback)((e) => {
            a(e);
          }, []);
        return (
          (0, c.useEffect)(() => {
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
      var eM = i(92894);
      let eB = (e) => {
          let { onSetProgressEventChange: t } = e,
            i = (0, p.R$C)();
          (0, c.useEffect)(() => {
            let e =
              null == i
                ? void 0
                : i.state.playerState.event.onChange((e) => {
                    e === eM.KX.SET_PROGRESS && t();
                  });
            return () => {
              null == e || e();
            };
          }, [t, i]);
        },
        eV = (e) => {
          let { position: t } = e,
            {
              fullscreenPlayer: { syncLyrics: i },
            } = (0, p.oR4)();
          return {
            state: (0, c.useMemo)(() => {
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
      var eO = i(83627),
        ez = i.n(eO);
      let eD = (0, s.Pi)(() => {
        var e, t, i;
        let { formatMessage: a } = (0, S.Z)(),
          {
            fullscreenPlayer: { syncLyrics: n },
          } = (0, p.oR4)();
        return (0, l.jsxs)("footer", {
          className: ez().root,
          children: [
            n.hasWriters &&
              (0, l.jsx)(_.Caption, {
                className: ez().writers,
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
              (0, l.jsx)(_.Caption, {
                className: ez().major,
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
      var eW = i(73390),
        eF = i.n(eW);
      let eG = (e) => {
        let { className: t, text: i } = e;
        return (0, l.jsx)("span", {
          className: (0, o.W)(eF().root, t),
          children: i,
        });
      };
      var eU = i(77920),
        eQ = i.n(eU);
      let eZ = (e) => {
          let t = (0, c.useRef)(0),
            {
              fullscreenPlayer: { syncLyrics: i },
              sonataState: { contextId: a, contextType: n },
            } = (0, p.oR4)();
          (0, c.useEffect)(() => {
            !i.hasLyricsViewed &&
              null !== e &&
              "visible" === document.visibilityState &&
              (t.current++,
              t.current >= 2 && i.sendViews({ contextId: a, contextType: n }));
          }, [e, a, n, i]);
        },
        eY = (0, s.Pi)((e) => {
          var t, i;
          let {
              state: a,
              progressPosition: r,
              shouldShowScrolledLyrics: s,
              setProgressPosition: d,
            } = e,
            u = (0, p.R$C)(),
            m = (0, eE.oc)(),
            {
              fullscreenPlayer: { syncLyrics: _ },
            } = (0, p.oR4)(),
            v = (0, c.useCallback)(
              (e) => (t) => {
                s &&
                  (t.stopPropagation(),
                  d(e + 0.01),
                  null == u ||
                    u.setProgress(e + 0.01).catch(() => {
                      d(r);
                    }));
              },
              [r, d, s, u],
            ),
            y = _.getActiveLineIndex(r);
          return (
            eZ(y),
            (0, c.useEffect)(() => {
              if (!s) {
                if (
                  ((a === n.INTRO || a === n.PREPARE) && m.slideTo(0),
                  a === n.OUTRO)
                ) {
                  var e;
                  m.slideTo(
                    Number(
                      null === (e = _.lines) || void 0 === e
                        ? void 0
                        : e.length,
                    ),
                  );
                }
                null !== y && m.slideTo(y + 1);
              }
            }, [
              y,
              s,
              a,
              m,
              null === (t = _.lines) || void 0 === t ? void 0 : t.length,
            ]),
            null === (i = _.lines) || void 0 === i
              ? void 0
              : i.map((e, t) => {
                  var i;
                  return (0, l.jsx)(
                    eE.o5,
                    {
                      onClickCapture: v(e.fromSec),
                      className: (0, o.W)(eQ().line, {
                        [eQ().line_last]:
                          t ===
                            Number(
                              null === (i = _.lines) || void 0 === i
                                ? void 0
                                : i.length,
                            ) -
                              1 && !s,
                        [eQ().line_active]: t === y && !s,
                      }),
                      children: (0, l.jsx)(eG, { text: e.text }),
                    },
                    e.key,
                  );
                })
          );
        });
      eY.displayName = "SwiperSlide";
      let eH = { forceToAxis: !0 },
        eK = (0, s.Pi)(() => {
          let {
              fullscreenPlayer: { syncLyrics: e },
              settings: t,
            } = (0, p.oR4)(),
            { progressPosition: i, setProgressPosition: a } = eR(),
            { state: r } = eV({ position: i }),
            {
              scrollerClassName: s,
              footerClassName: d,
              counterClassName: u,
            } = eS(),
            {
              state: m,
              handleDelayedToggle: _,
              reset: v,
            } = eg({ delay: 3e3, throttleTimeout: 300 }),
            {
              state: y,
              handleDelayedToggle: x,
              reset: h,
            } = eg({ delay: 3e3, throttleTimeout: 300 }),
            C = t.layout === p.t8m.Mobile,
            f = (0, c.useCallback)(() => {
              y || _();
            }, [_, y]),
            b = (0, c.useCallback)(() => {
              m && v(), x();
            }, [x, v, m]),
            g = (0, c.useCallback)(
              (e) => {
                switch (e.code) {
                  case p.DtV.KEY_L:
                  case p.DtV.KEY_J:
                  case p.DtV.ARROW_LEFT:
                  case p.DtV.ARROW_RIGHT:
                    _();
                }
              },
              [_],
            ),
            N = (0, c.useMemo)(
              () =>
                r === n.PREPARE ? Math.ceil(Number(e.startSec) - i) : null,
              [i, r, e.startSec],
            ),
            j = (0, c.useMemo)(
              () =>
                r === n.PREPARE
                  ? (0, l.jsx)(eG, { className: eQ().counterLine, text: N })
                  : r === n.INTRO
                    ? (0, l.jsx)(eT, {})
                    : null,
              [N, r],
            );
          return (
            eB({ onSetProgressEventChange: h }),
            (0, c.useEffect)(
              () => (
                window.addEventListener("keydown", g),
                () => {
                  window.removeEventListener("keydown", g);
                }
              ),
              [g],
            ),
            (0, c.useEffect)(
              () => (
                window.addEventListener("mousemove", f),
                () => {
                  window.addEventListener("mousemove", f);
                }
              ),
              [f],
            ),
            (0, l.jsxs)(eE.tq, {
              className: (0, o.W)(
                eQ().root,
                {
                  [eQ()["root_".concat(r)]]: !y,
                  [eQ().root_withVisibleUpperLyrics]: m,
                  [eQ().root_withVisibleScrolledLyrics]: y,
                },
                s,
              ),
              modules: [eI.Gk, eI.Rv],
              slidesPerView: "auto",
              spaceBetween: 32,
              direction: "vertical",
              mousewheel: eH,
              freeMode: !0,
              onScroll: b,
              onTouchMove: C ? b : void 0,
              allowTouchMove: C,
              children: [
                (0, l.jsx)(eE.o5, {
                  className: (0, o.W)(eQ().counter, u),
                  children: j,
                }),
                (0, l.jsx)(eY, {
                  setProgressPosition: a,
                  shouldShowScrolledLyrics: y,
                  state: r,
                  progressPosition: i,
                }),
                (0, l.jsx)(eE.o5, {
                  className: d,
                  children: (0, l.jsx)(eD, {}),
                }),
              ],
            })
          );
        }),
        eq = {
          enter: ek().root_enter,
          enterActive: ek().root_enter_active,
          exit: ek().root_exit,
          exitActive: ek().root_exit_active,
        },
        eJ = (0, s.Pi)((e) => {
          let {
              className: t,
              shouldShowSyncLyrics: i,
              counterClassName: a,
              footerClassName: n,
              scrollerClassName: r,
              contentClassName: s,
              loaderClassName: d,
            } = e,
            u = (0, c.useRef)(null),
            {
              sonataState: { entityMeta: m },
              fullscreenPlayer: { syncLyrics: _ },
              settings: v,
            } = (0, p.oR4)(),
            y = v.layout === p.t8m.Mobile;
          (0, c.useEffect)(() => {
            _.currentTrackId !== (null == m ? void 0 : m.id) &&
              i &&
              _.getData(null == m ? void 0 : m.id);
          }, [null == m ? void 0 : m.id, i, _]);
          let x = (0, c.useMemo)(
              () =>
                _.isLoaded
                  ? (0, l.jsx)(eK, {})
                  : ((_.isRejected || _.hasInvalidLyrics || !i) &&
                      _.setInvisible(),
                    (0, l.jsx)(eT, { className: d })),
              [
                _.isLoaded,
                _.isRejected,
                _.hasInvalidLyrics,
                _.setInvisible,
                i,
                d,
              ],
            ),
            h = (0, c.useMemo)(
              () => ({
                counterClassName: a,
                scrollerClassName: r,
                footerClassName: n,
              }),
              [a, n, r],
            ),
            C = y ? u : null;
          return (0, l.jsx)(ej.Provider, {
            value: h,
            children: (0, l.jsx)(eN.Z, {
              in: i,
              nodeRef: C,
              timeout: 200,
              unmountOnExit: !0,
              classNames: eq,
              children: (0, l.jsx)("div", {
                ref: u,
                className: (0, o.W)(ek().root, t),
                children: (0, l.jsx)("div", {
                  className: (0, o.W)(ek().content, s),
                  children: x,
                }),
              }),
            }),
          });
        });
      var eX = i(57527);
      (r || (r = {})).SYNC_LYRICS = "syncLyrics";
      var e$ = i(74855),
        e0 = i.n(e$);
      let e1 = (0, s.Pi)((e) => {
          let {
              className: t,
              variant: i = "text",
              iconSize: a,
              iconClassName: n,
              withRipple: s = !1,
              size: d = "s",
              forwardRef: u,
              children: _,
              color: v,
              disabled: y = !1,
            } = e,
            { formatMessage: x } = (0, S.Z)(),
            {
              fullscreenPlayer: {
                isModeActive: h,
                hideSyncLyrics: C,
                showSyncLyrics: f,
                mode: b,
              },
            } = (0, p.oR4)(),
            g = h(r.SYNC_LYRICS),
            N = (0, c.useCallback)(() => (g ? C() : f()), [C, g, f, b]),
            {
              scaleAnimation: j,
              unscaleAnimation: k,
              handleAnimationEnd: P,
              handleClick: w,
            } = (0, eX.l)({ shouldStartFromUnscale: g, onClick: N }),
            T = ""
              .concat(x({ id: "interface-actions.open-sync-lyrics" }), " ")
              .concat(x({ id: "warning-messages.can-break-accessibility" }));
          return (0, l.jsx)(m.z, {
            className: (0, o.W)(
              e0().root,
              { [e0().animation_scaled]: j, [e0().animation_unscaled]: k },
              t,
            ),
            color: v,
            onAnimationEnd: P,
            withRipple: s,
            variant: i,
            size: d,
            radius: "xxxl",
            "aria-label": T,
            "aria-pressed": g,
            onClick: w,
            icon: (0, l.jsx)(A.J, {
              size: a,
              className: (0, o.W)(e0().icon, n, { [e0().icon_active]: g }),
              variant: "syncLyrics",
            }),
            ref: u,
            disabled: y,
            ...(0, L.BA)(L.QM.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
            children: _,
          });
        }),
        e5 = (0, c.forwardRef)((e, t) =>
          (0, l.jsx)(e1, { forwardRef: t, ...e }),
        );
      var e2 = i(82120),
        e4 = i.n(e2);
      let e3 = (e) => {
        let { isContextMenuVisible: t, setIsContextMenuVisible: i } = e,
          {
            sonataState: { entityMeta: a },
            user: n,
          } = (0, p.oR4)(),
          { handleDelayedToggle: r } = eg({
            delay: 1500,
            throttleTimeout: 300,
          }),
          s = (0, g.SB)(a),
          d = (0, c.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          u = (0, c.useMemo)(() => {
            if (
              n.isAuthorized &&
              !(null == a ? void 0 : a.isRemoved) &&
              (null == a ? void 0 : a.isAvailable)
            )
              return (0, l.jsx)(W.hz, {
                track: a,
                open: t,
                onOpenChange: i,
                placement: "left",
                icon: (0, l.jsx)(A.J, { variant: "more", size: "m" }),
                className: (0, o.W)(e4().menuButton, {
                  [e4().menuButton_active]: t,
                }),
                wrapperClassName: e4().menuWrapper,
                onClick: d,
                size: "l",
                ...(0, L.BA)(L.QM.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
              });
          }, [a, d, t, i, n.isAuthorized]),
          m = (0, c.useMemo)(() => {
            if (null == a ? void 0 : a.hasSyncLyrics)
              return (0, l.jsx)(e5, {
                className: e4().syncLyricsButton,
                iconSize: "m",
                size: "l",
                variant: "default",
                color: "secondary",
              });
          }, [null == a ? void 0 : a.hasSyncLyrics]);
        return (
          (0, c.useEffect)(
            () => (
              window.addEventListener("mousemove", r),
              () => {
                window.removeEventListener("mousemove", r);
              }
            ),
            [r],
          ),
          (0, l.jsxs)("div", {
            className: (0, o.W)(e4().root, { [e4().root_visible]: t }),
            children: [
              (0, l.jsx)(D.WP, {
                className: e4().sonataControls,
                isMobile: !1,
                entityMeta: a,
                isFullscreen: !0,
              }),
              u,
              m,
              (0, l.jsx)(F.dJ, {
                className: e4().likeButton,
                isLiked: null == a ? void 0 : a.isLiked,
                onClick: s,
                iconSize: "m",
                size: "l",
                variant: "default",
                color: "secondary",
              }),
            ],
          })
        );
      };
      var e8 = i(10751),
        e9 = i.n(e8);
      let e6 = (e) => {
        let { className: t, children: i, coverUri: a } = e;
        return (0, l.jsxs)(P.Paper, {
          radius: "m",
          className: (0, o.W)(e9().root, t),
          children: [
            (0, l.jsx)(F.BE, {
              className: e9().cover,
              src: a,
              size: 400,
              fit: "cover",
              withAvatarReplace: !0,
            }),
            i,
          ],
        });
      };
      var e7 = i(64331),
        te = i.n(e7);
      let tt = (0, s.Pi)((e) => {
          var t;
          let { isContextMenuVisible: i, setIsContextMenuVisible: a } = e,
            { state: n, handleDelayedToggle: r } = eg({
              delay: 150,
              throttleTimeout: 100,
            }),
            {
              sonataState: { entityMeta: s },
              fullscreenPlayer: d,
            } = (0, p.oR4)(),
            { state: u, toggleTrue: m } = (0, eb.O)(!1),
            _ =
              (null == s ? void 0 : s.isTrackPodcast) ||
              (null == s
                ? void 0
                : null === (t = s.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            v = null == s ? void 0 : s.isTrackAudiobook,
            y =
              !!(null == s ? void 0 : s.hasSyncLyrics) &&
              d.syncLyrics.isVisible,
            x = (0, c.useMemo)(
              () =>
                s
                  ? v
                    ? (0, l.jsx)(W.MG, {
                        className: te().meta,
                        titleContainerClassName: te().title,
                        track: s,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !0,
                        textClassName: te().podcastAuthors,
                      })
                    : _
                      ? (0, l.jsx)(W.wT, {
                          className: te().meta,
                          titleContainerClassName: te().title,
                          track: s,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                          textClassName: te().podcastAuthors,
                        })
                      : (0, l.jsx)(W.ko, {
                          className: te().meta,
                          titleContainerClassName: te().title,
                          track: s,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                          artistsClassName: te().artists,
                        })
                  : null,
              [s, null == s ? void 0 : s.id, _, v],
            );
          return (
            (0, c.useEffect)(
              () => (
                window.addEventListener("resize", r),
                () => {
                  window.removeEventListener("resize", r);
                }
              ),
              [r],
            ),
            (0, c.useEffect)(() => {
              d.isSplitMode && m();
            }, [d.isSplitMode, d.mode, m]),
            (0, c.useEffect)(
              () => () => {
                d.reset();
              },
              [d],
            ),
            (0, l.jsxs)("div", {
              className: te().root,
              children: [
                (0, l.jsxs)("div", {
                  className: (0, o.W)(te().fullscreenContent, {
                    [te().fullscreenContent_withDisabledInsetTransition]: n,
                    [te().fullscreenContent_enter]: d.isSplitMode,
                    [te().fullscreenContent_leave]: !d.isSplitMode && u,
                  }),
                  children: [
                    (0, l.jsx)(e6, {
                      className: (0, o.W)(te().poster, te().important),
                      coverUri: null == s ? void 0 : s.coverUri,
                      children: (0, l.jsx)(e3, {
                        setIsContextMenuVisible: a,
                        isContextMenuVisible: i,
                        shouldShowSyncLyricsControls: y,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: te().info,
                      children: [
                        x,
                        (0, l.jsx)(O, {
                          className: te().sliderContainer,
                          sliderClassName: te().slider,
                          disabled: !s,
                          isMobile: !1,
                          isFullscreen: !1,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: (0, o.W)(te().additionalContent, {
                    [te().additionalContent_withDisabledInsetTransition]: n,
                    [te().additionalContent_enter]: d.isSplitMode,
                    [te().additionalContent_leave]: !d.isSplitMode && u,
                  }),
                  children: (0, l.jsx)(eJ, {
                    className: te().syncLyrics,
                    loaderClassName: te().syncLyricsLoader,
                    contentClassName: te().syncLyricsContent,
                    shouldShowSyncLyrics: y,
                    scrollerClassName: te().syncLyricsScroller,
                    counterClassName: te().syncLyricsCounter,
                    footerClassName: te().syncLyricsFooter,
                  }),
                }),
              ],
            })
          );
        }),
        ti = (0, s.Pi)(() => {
          let { formatMessage: e } = (0, S.Z)(),
            [t, i] = (0, c.useState)(!1),
            {
              currentTrackInfo: { modal: a },
              sonataState: { entityMeta: n },
              fullscreenPlayer: r,
            } = (0, p.oR4)(),
            s = (0, c.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == n ? void 0 : n.averageColor,
              }),
              [null == n ? void 0 : n.averageColor],
            );
          return (0, l.jsxs)(ex.u, {
            className: (0, o.W)(ef().root, ef().important),
            open: r.modal.isOpened,
            onOpenChange: t || a.isOpened ? void 0 : r.modal.onOpenChange,
            onClose: r.modal.close,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: s,
            contentClassName: ef().modalContent,
            closeOnOutsidePress: !1,
            ...(0, L.BA)(L.QM.player.FULLSCREEN_PLAYER_MODAL),
            children: [
              (0, l.jsx)("header", {
                className: ef().header,
                children: (0, l.jsx)(m.z, {
                  className: ef().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "m",
                  icon: (0, l.jsx)(A.J, { variant: "arrowDown", size: "xs" }),
                  onClick: r.modal.close,
                  "aria-label": e({ id: "interface-actions.close" }),
                  ...(0, L.BA)(L.QM.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                }),
              }),
              (0, l.jsx)(tt, {
                setIsContextMenuVisible: i,
                isContextMenuVisible: t,
              }),
              (0, l.jsx)(eh.Notification, {
                className: ef().notification,
                enableMultiContainer: !0,
                containerId: p.W$x.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, l.jsx)(eh.Notification, {
                className: ef().notification,
                enableMultiContainer: !0,
                containerId: p.W$x.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var ta = i(9410),
        tn = i.n(ta);
      let tr = (0, s.Pi)((e) => {
        var t, i, a, n;
        let { className: r, onSyncLyricsButtonClick: s } = e,
          { sonataState: d, fullscreenPlayer: u } = (0, p.oR4)(),
          { formatMessage: _ } = (0, S.Z)(),
          [v, y] = (0, c.useState)(!1),
          x = null === d.entityMeta,
          h =
            (null === (t = d.entityMeta) || void 0 === t
              ? void 0
              : t.isNonMusic) ||
            (null === (a = d.entityMeta) || void 0 === a
              ? void 0
              : null === (i = a.mainAlbum) || void 0 === i
                ? void 0
                : i.isNonMusic),
          C = (0, c.useMemo)(() => {
            var e;
            if (h) return;
            let t = ""
              .concat(_({ id: "interface-actions.open-sync-lyrics" }), " ")
              .concat(_({ id: "warning-messages.can-break-accessibility" }));
            return (0, l.jsx)(m.z, {
              className: (0, o.W)(tn().syncLyricsButton, {
                [tn().syncLyricsButton_active]: u.syncLyrics.isVisible,
              }),
              radius: "round",
              size: "xxxs",
              variant: "text",
              disabled: !(null === (e = d.entityMeta) || void 0 === e
                ? void 0
                : e.hasSyncLyrics),
              withRipple: !1,
              withHover: !1,
              "aria-label": t,
              icon: (0, l.jsx)(A.J, { variant: "syncLyrics", size: "xs" }),
              onClick: s,
            });
          }, [
            _,
            u.syncLyrics.isVisible,
            s,
            h,
            null === (n = d.entityMeta) || void 0 === n
              ? void 0
              : n.hasSyncLyrics,
          ]);
        return (0, l.jsx)("div", {
          className: (0, o.W)(tn().footer, r),
          children: (0, l.jsxs)("div", {
            className: tn().footerContainer,
            children: [
              (x || d.canChangeRepeatMode) &&
                (0, l.jsx)(D.$Z, {
                  isDisabled: x,
                  repeatMode: d.repeatMode,
                  variant: "text",
                }),
              (0, l.jsx)(eo, {
                open: v,
                onOpenChange: y,
                icon: (0, l.jsx)(A.J, { variant: "settings", size: "xs" }),
                size: "xxxs",
              }),
              C,
              (x || d.canShuffle) &&
                (0, l.jsx)(D.P4, {
                  isDisabled: x,
                  shuffle: d.shuffle,
                  variant: "text",
                }),
            ],
          }),
        });
      });
      var tl = i(18806),
        to = i.n(tl);
      let ts = {
          enter: to().coverWrapper_enter,
          enterActive: to().coverWrapper_enter_active,
          exit: to().coverWrapper_exit,
          exitActive: to().coverWrapper_exit_active,
        },
        tc = (0, s.Pi)((e) => {
          var t;
          let { className: i } = e,
            a = (0, c.useRef)(null),
            [n, r] = (0, c.useState)(!1),
            {
              state: s,
              handleDelayedToggle: d,
              reset: u,
            } = eg({ delay: 7e3, throttleTimeout: 0 }),
            {
              fullscreenPlayer: m,
              sonataState: { entityMeta: _ },
              user: v,
            } = (0, p.oR4)(),
            y =
              (null == _ ? void 0 : _.isTrackPodcast) ||
              (null == _
                ? void 0
                : null === (t = _.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            x = null == _ ? void 0 : _.isTrackAudiobook,
            h =
              !!(null == _ ? void 0 : _.hasSyncLyrics) &&
              m.syncLyrics.isVisible,
            C = s || !h,
            f = (0, c.useCallback)(() => {
              h && (s ? u() : d());
            }, [d, s, h, u]),
            b = (0, c.useCallback)(() => {
              h && s && d();
            }, [d, s, h]),
            g = (0, c.useCallback)(() => {
              !(window.innerWidth > 480) &&
                (null == _ ? void 0 : _.hasSyncLyrics) &&
                (m.syncLyrics.isVisible
                  ? m.syncLyrics.setInvisible()
                  : m.syncLyrics.setVisible());
            }, [null == _ ? void 0 : _.hasSyncLyrics, m.syncLyrics]),
            N = (0, c.useMemo)(
              () =>
                (0, ey.Z)(() => {
                  window.innerWidth > 480 && m.syncLyrics.setInvisible();
                }, 100),
              [m.syncLyrics],
            ),
            j = (0, c.useMemo)(
              () =>
                _
                  ? x
                    ? (0, l.jsx)(W.MG, {
                        textClassName: to().metaText,
                        track: _,
                        withSecondaryColor: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAuthor: !0,
                        withBookLink: !0,
                      })
                    : y
                      ? (0, l.jsx)(W.wT, {
                          textClassName: to().metaText,
                          track: _,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                        })
                      : (0, l.jsx)(W.ko, {
                          textClassName: to().metaText,
                          track: _,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                        })
                  : void 0,
              [_, y, x],
            );
          return (
            (0, c.useEffect)(
              () => (
                window.addEventListener("resize", N),
                () => {
                  window.removeEventListener("resize", N);
                }
              ),
              [N],
            ),
            (0, c.useLayoutEffect)(() => {
              N();
            }, [N]),
            (0, c.useLayoutEffect)(() => {
              h && d();
            }, [h, d]),
            (0, l.jsxs)("div", {
              onTouchEnd: b,
              className: (0, o.W)(to().root, i),
              children: [
                (0, l.jsx)("div", {
                  className: to().content,
                  children: (0, l.jsxs)("div", {
                    className: to().wrapper,
                    children: [
                      (0, l.jsxs)("div", {
                        className: (0, o.W)(to().infoBlock, {
                          [to().infoBlock_withExpandedSyncLyrics]: !s && h,
                        }),
                        children: [
                          (0, l.jsxs)("div", {
                            onClick: f,
                            className: to().coverContainer,
                            children: [
                              (0, l.jsx)(eJ, {
                                className: to().syncLyrics,
                                scrollerClassName: to().syncLyricsScroller,
                                contentClassName: to().syncLyricsContent,
                                loaderClassName: to().syncLyricsLoader,
                                footerClassName: to().syncLyricsFooter,
                                counterClassName: to().syncLyricsCounter,
                                shouldShowSyncLyrics: h,
                              }),
                              (0, l.jsx)(eN.Z, {
                                in: !h,
                                nodeRef: a,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: ts,
                                children: (0, l.jsx)(P.Paper, {
                                  ref: a,
                                  radius: "m",
                                  className: to().coverWrapper,
                                  children: (0, l.jsx)(F.BE, {
                                    className: to().cover,
                                    src: null == _ ? void 0 : _.coverUri,
                                    size: 400,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: to().trackInfo,
                            children: [
                              !s &&
                                h &&
                                (0, l.jsx)(P.Paper, {
                                  className: to().trackInfoCoverContainer,
                                  radius: "xs",
                                  children: (0, l.jsx)(F.BE, {
                                    className: to().trackInfoCover,
                                    src: null == _ ? void 0 : _.coverUri,
                                    size: 200,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              (0, l.jsxs)("div", {
                                className: to().metaContainer,
                                children: [
                                  j,
                                  v.isAuthorized &&
                                    !(null == _ ? void 0 : _.isRemoved) &&
                                    (null == _ ? void 0 : _.isAvailable) &&
                                    (0, l.jsx)(W.hz, {
                                      className: (0, o.W)(to().contextMenu, {
                                        [to().contextMenu_visible]: n,
                                      }),
                                      track: _,
                                      open: n,
                                      onOpenChange: r,
                                      placement: "bottom",
                                      isFullscreenMobile: !0,
                                      size: "xs",
                                      icon: (0, l.jsx)(A.J, {
                                        variant: "more",
                                        size: "xxs",
                                      }),
                                      ...(0, L.BA)(
                                        L.QM.player
                                          .FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      C &&
                        (0, l.jsx)(O, {
                          className: to().timeline,
                          disabled: !_,
                          isMobile: !0,
                          isFullscreen: !0,
                          showThumbVariant: "always",
                        }),
                      C &&
                        (0, l.jsx)(D.WP, {
                          className: to().buttonsBlock,
                          isMobile: !0,
                          entityMeta: _,
                          isFullscreen: !0,
                        }),
                    ],
                  }),
                }),
                C && (0, l.jsx)(tr, { onSyncLyricsButtonClick: g }),
              ],
            })
          );
        });
      var td = i(9349),
        tu = i.n(td);
      let tm = (e) => {
          let { children: t, className: i } = e,
            a = (0, p.R$C)(),
            { fullscreenPlayer: n } = (0, p.oR4)(),
            { formatMessage: r } = (0, S.Z)(),
            s = (0, c.useRef)(""),
            d = (0, c.useCallback)(
              (e) => {
                e.stopPropagation(), n.modal.isOpened && n.modal.close();
              },
              [n],
            ),
            m = (0, c.useMemo)(() => {
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
                      (s.current = "/album/".concat(
                        null == i ? void 0 : i.meta.id,
                      )),
                      r(
                        { id: "playing-now.album" },
                        { title: null == i ? void 0 : i.meta.title },
                      )
                    );
                  case "playlist":
                    return (
                      (s.current = "/playlists/".concat(
                        null == i ? void 0 : i.meta.playlistUuid,
                      )),
                      r(
                        { id: "playing-now.playlist" },
                        { title: null == i ? void 0 : i.meta.title },
                      )
                    );
                }
              }
              return null;
            }, [a, r]);
          return (0, l.jsxs)("div", {
            className: (0, o.W)(tu().root, i),
            children: [
              !!m &&
                (0, l.jsxs)("div", {
                  className: tu().textBlock,
                  children: [
                    (0, l.jsx)(_.Caption, {
                      variant: "span",
                      size: "s",
                      weight: "normal",
                      className: tu().subTitle,
                      children: (0, l.jsx)(u.Z, { id: "playing-now.common" }),
                    }),
                    s.current
                      ? (0, l.jsx)(F.rU, {
                          href: s.current,
                          target: "_self",
                          onClick: d,
                          className: tu().link,
                          children: (0, l.jsx)(_.Caption, {
                            variant: "span",
                            size: "m",
                            className: tu().title,
                            lineClamp: 1,
                            children: m,
                          }),
                        })
                      : (0, l.jsx)(_.Caption, {
                          variant: "span",
                          size: "m",
                          className: tu().title,
                          lineClamp: 1,
                          children: m,
                        }),
                  ],
                }),
              t,
            ],
          });
        },
        t_ = (0, s.Pi)(() => {
          let { formatMessage: e } = (0, S.Z)(),
            { fullscreenPlayer: t, experiments: i } = (0, p.oR4)(),
            a = (0, c.useMemo)(
              () =>
                i.checkExperiment(p.peG.WebNextPlayQueue, "on")
                  ? (0, l.jsx)(m.z, {
                      radius: "round",
                      size: "s",
                      variant: "text",
                      withRipple: !1,
                      "aria-label": e({ id: "play-queue.title" }),
                      icon: (0, l.jsx)(A.J, {
                        variant: "playQueue",
                        size: "xs",
                      }),
                    })
                  : (0, l.jsx)(F.wx, {
                      title: e({ id: "play-queue.title" }),
                      description: e({ id: "future-feature.message" }),
                      children: (0, l.jsx)(m.z, {
                        radius: "round",
                        size: "s",
                        variant: "text",
                        disabled: !0,
                        withRipple: !1,
                        "aria-hidden": !0,
                        icon: (0, l.jsx)(A.J, {
                          variant: "playQueue",
                          size: "xs",
                        }),
                      }),
                    }),
              [i, e],
            );
          return (0, l.jsxs)("header", {
            className: tn().header,
            children: [
              (0, l.jsx)(m.z, {
                radius: "round",
                color: "secondary",
                size: "s",
                variant: "text",
                icon: (0, l.jsx)(A.J, { variant: "arrowDown", size: "xs" }),
                onClick: t.modal.close,
                "aria-label": e({ id: "interface-actions.close" }),
              }),
              (0, l.jsx)(tm, {
                className: tn().headerCenter,
                children: (0, l.jsx)(F.wx, {
                  title: e({ id: "player-actions.cast" }),
                  description: e({ id: "future-feature.message" }),
                  children: (0, l.jsx)(m.z, {
                    className: tn().castButton,
                    radius: "round",
                    size: "s",
                    variant: "text",
                    disabled: !0,
                    withRipple: !1,
                    "aria-label": e({ id: "player-actions.cast" }),
                    icon: (0, l.jsx)(A.J, { variant: "cast", size: "xs" }),
                  }),
                }),
              }),
              a,
            ],
          });
        }),
        tp = (0, s.Pi)(() => {
          let {
              sonataState: { entityMeta: e },
              fullscreenPlayer: t,
            } = (0, p.oR4)(),
            i = (0, c.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == e ? void 0 : e.averageColor,
              }),
              [null == e ? void 0 : e.averageColor],
            );
          return (0, l.jsxs)(ex.u, {
            className: (0, o.W)(tn().root, tn().important),
            open: t.modal.isOpened,
            onOpenChange: t.modal.onOpenChange,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: i,
            contentClassName: tn().modalContent,
            children: [
              (0, l.jsx)(t_, {}),
              (0, l.jsx)(tc, {}),
              (0, l.jsx)(eh.Notification, {
                className: tn().notification,
                enableMultiContainer: !0,
                containerId: p.W$x.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, l.jsx)(eh.Notification, {
                className: tn().notification,
                enableMultiContainer: !0,
                containerId: p.W$x.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        }),
        tv = (e) => {
          {
            let t = e === p.t8m.Mobile,
              i = window.screen.availHeight || window.innerHeight;
            return (!t && i < 450) || t;
          }
        },
        ty = (0, s.Pi)(() => {
          let { settings: e } = (0, p.oR4)(),
            t = e.layout === p.t8m.Mobile,
            [i, a] = (0, c.useState)(t),
            n = (0, c.useMemo)(
              () =>
                (0, ey.Z)(
                  () => {
                    a(tv(e.layout));
                  },
                  100,
                  { trailing: !1 },
                ),
              [e.layout, a],
            );
          return (
            (0, c.useEffect)(
              () => (
                a(tv(e.layout)),
                window.addEventListener("resize", n),
                () => {
                  window.removeEventListener("resize", n);
                }
              ),
              [n, e.layout],
            ),
            i ? (0, l.jsx)(tp, {}) : (0, l.jsx)(ti, {})
          );
        });
      var tx = i(42288),
        th = i(3429),
        tC = i(40193),
        tf = i(31391),
        tb = i.n(tf);
      let tg = (e) => {
          try {
            return (tb()(e).scripts || []).map((e) => {
              let { start: t, end: i, text: a } = e;
              return (0, tx.pj)({ text: a.trim(), fromSec: t, toSec: i });
            });
          } catch (e) {
            return [];
          }
        },
        tN = tx.V5.model("SyncLyricsLine", {
          text: tx.V5.string,
          fromSec: tx.V5.number,
          toSec: tx.V5.number,
        }).views((e) => ({
          get key() {
            return "".concat(e.fromSec, ":").concat(e.toSec);
          },
        })),
        tj = tx.V5.model("SyncLyrics", {
          isVisible: tx.V5.optional(tx.V5.boolean, !1),
          loadingState: tx.V5.enumeration(Object.values(p.Gui)),
          lines: tx.V5.maybeNull(tx.V5.array(tN)),
          major: tx.V5.maybeNull(g.bP),
          writers: tx.V5.maybeNull(tx.V5.array(tx.V5.string)),
          lyricId: tx.V5.maybeNull(tx.V5.number),
          externalLyricId: tx.V5.maybeNull(tx.V5.string),
          currentTrackId: tx.V5.maybeNull(
            tx.V5.union(tx.V5.string, tx.V5.number),
          ),
          hasLyricsViewed: tx.V5.optional(tx.V5.boolean, !1),
        })
          .views((e) => ({
            get isLoaded() {
              return e.loadingState === p.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === p.Gui.REJECT;
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
                e.loadingState === p.Gui.RESOLVE &&
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
              getData: (0, tx.ls)(function* (i) {
                let { tracksResource: a, modelActionsLogger: n } = (0, tx.dU)(
                  e,
                );
                if (i)
                  try {
                    e.loadingState = p.Gui.PENDING;
                    let {
                      downloadUrl: n,
                      major: r,
                      externalLyricId: l,
                      lyricId: o,
                      writers: s,
                    } = yield a.getLyrics((0, W.o)(i, tC.yG.LRC));
                    (e.major = (0, g.jp)(r)),
                      (e.externalLyricId = l),
                      (e.lyricId = o),
                      (e.writers = (0, tx.pj)(s)),
                      (e.currentTrackId = i),
                      (e.hasLyricsViewed = !1),
                      yield t.downloadSyncLyrics(n),
                      (e.loadingState = p.Gui.RESOLVE);
                  } catch (t) {
                    (e.loadingState = p.Gui.REJECT), n.error(t);
                  }
              }),
              downloadSyncLyrics: (0, tx.ls)(function* (t) {
                let { tracksResource: i } = (0, tx.dU)(e),
                  a = yield i.getLyricsText(t);
                e.lines = (0, tx.pj)(tg(a));
              }),
              sendViews: (0, tx.ls)(function* (t) {
                let { contextId: i, contextType: a } = t,
                  { lyricViewsResource: n, modelActionsLogger: r } = (0, tx.dU)(
                    e,
                  );
                if (e.loadingState === p.Gui.RESOLVE)
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
                          id: (0, th.Z)(),
                          trackId: e.currentTrackId,
                          majorId: e.major.id,
                          lyricId: e.lyricId,
                          externalLyricId: e.externalLyricId,
                          lyricFormat: tC.yG.LRC,
                          albumId: a === k.Ak.Album && i ? i : void 0,
                          playlistId: a === k.Ak.Playlist && i ? i : void 0,
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
      var tS = i(395);
      let tL = tx.V5.model("FullscreenPlayer", {
        mode: tx.V5.maybeNull(tx.V5.enumeration(Object.values(r))),
        syncLyrics: tj,
        modal: tS.KL,
      })
        .views((e) => ({
          get isSplitMode() {
            var t;
            let { sonataState: i } = (0, tx.yj)(e);
            return (
              e.mode === r.SYNC_LYRICS &&
              !!(null == i
                ? void 0
                : null === (t = i.entityMeta) || void 0 === t
                  ? void 0
                  : t.hasSyncLyrics)
            );
          },
        }))
        .actions((e) => ({
          setMode(t) {
            e.mode = t;
          },
          showFullscreenPlayerModal() {
            e.syncLyrics.setInvisible(), e.modal.open();
          },
          showSyncLyrics() {
            (e.mode = r.SYNC_LYRICS),
              e.syncLyrics.setVisible(),
              e.modal.isOpened || e.modal.open();
          },
          hideSyncLyrics() {
            (e.mode = null), e.syncLyrics.setInvisible();
          },
          isModeActive: (t) => e.mode === t,
          reset() {
            e.mode = null;
          },
        }));
    },
    47710: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return eP;
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
        s = i(92894),
        c = i(34152),
        d = i(395),
        u = i(33589);
      let m = (e, t) => {
          var i, a;
          let n = null == t ? void 0 : t.map((e) => (0, u.tR)({ artist: e }));
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
            albumArtists: n,
            albumType: e.albumType,
          });
        },
        _ = (e) => {
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
      var y = i(44023);
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
        albumType: r.V5.maybe(r.V5.string),
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
      let f = r.V5.model("TrailerState", {
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
        b = y.le
          .props({
            isBest: r.V5.maybe(r.V5.boolean),
            positionInAlbum: r.V5.maybe(r.V5.number),
          })
          .named("TrailerTrack"),
        g = r.V5.model("Trailer", {
          id: r.V5.maybeNull(r.V5.string),
          loadingState: r.V5.enumeration(Object.values(c.Gui)),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          modal: d.KL,
          variant: r.V5.maybeNull(r.V5.enumeration(Object.values(n))),
          tracks: r.V5.maybeNull(r.V5.array(b)),
          meta: r.V5.maybeNull(h),
          state: f,
          withAnimation: r.V5.boolean,
          shouldAutoStartPlaying: r.V5.boolean,
          shouldSendEventOnTracksShowed: r.V5.boolean,
          sonataStatusBeforeTrailerStart: r.V5.enumeration(Object.values(s.Xz)),
          isManuallyPaused: r.V5.boolean,
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
              setShouldSendEventOnTracksShowed(t) {
                e.shouldSendEventOnTracksShowed = t;
              },
              setIsManuallyPaused(t) {
                e.isManuallyPaused = t;
              },
              isTrailerActive: (t, i) =>
                !!e.modal.isOpened && e.variant === t && e.id === i,
              openArtistTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.ARTIST, i) ||
                  (t.reset(),
                  (e.variant = n.ARTIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getArtistTrailer(i));
              },
              openAlbumTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.ALBUM, String(i)) ||
                  (t.reset(),
                  (e.variant = n.ALBUM),
                  (e.id = String(i)),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getAlbumTrailer(i));
              },
              openPlaylistTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.PLAYLIST, i) ||
                  (t.reset(),
                  (e.variant = n.PLAYLIST),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getPlaylistTrailer(i));
              },
              openTrackTrailer(i) {
                let { sonataState: a } = (0, r.yj)(e);
                t.isTrailerActive(n.TRACK, i) ||
                  (t.reset(),
                  (e.variant = n.TRACK),
                  (e.id = i),
                  (e.sonataStatusBeforeTrailerStart = a.status),
                  e.modal.open(),
                  t.getTrackTrailer(i));
              },
              getArtistTrailer: (0, r.ls)(function* (i) {
                let { artistsResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { artist: t, trailer: n } = yield a.getTrailer({
                      artistId: i,
                    });
                    n.tracks &&
                      (e.tracks = (0, r.pj)(
                        n.tracks.map((e) => x(e, { isSmartPreview: !0 })),
                      )),
                      t && (e.meta = _(t)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, r.ls)(function* (i) {
                let { albumResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
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
                      t && (e.meta = m(t, n)),
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, r.ls)(function* (i) {
                let { usersResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { uid: t, kind: n } = (0, o.bo)(i);
                    if (!t || !n) {
                      e.loadingState = c.Gui.REJECT;
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
                      (e.loadingState = c.Gui.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, r.ls)(function* (i) {
                let { tracksResource: a } = (0, r.dU)(e);
                if (e.loadingState !== c.Gui.PENDING)
                  try {
                    e.loadingState = c.Gui.PENDING;
                    let { track: t } = yield a.getTrailer({ trackId: i });
                    t &&
                      ((e.tracks = (0, r.pj)([x(t, { isSmartPreview: !0 })])),
                      (e.meta = v(t))),
                      (e.loadingState = c.Gui.RESOLVE);
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
                  (e.shouldSendEventOnTracksShowed = !0),
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
        k = i(23881),
        A = i(39513),
        P = i(28852),
        w = i(89352),
        T = i(18375);
      let I = () => {
        let e = (0, c.z$f)(),
          t = (0, c.wLl)(),
          { hash: i } = (0, c.RQn)(),
          { pageId: a } = (0, c.lVB)();
        return (0, S.useCallback)(
          (n) => {
            if (!e || !a) return;
            let r = {
                hash: i,
                pageId: c.x3Y[a],
                mainObjectType: T.OB.Trailer,
                mainObjectId: n,
              },
              l = (0, c.KOr)({ params: r, logger: t, context: I.name });
            l && (0, T.IA)(e.evgenInstance, l);
          },
          [e, i, t, a],
        );
      };
      var E = i(58852);
      let R = () => {
        let { trailer: e } = (0, c.oR4)(),
          t = (0, c.R$C)(),
          i = (0, c.XUT)(),
          a = (0, E.SB)(e.state.entityMeta),
          n = (0, E.KX)(e.state.entityMeta);
        (0, S.useEffect)(() => {
          e.modal.isOpened
            ? (null == i || i.disable(c.Pwk.MAIN),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.TOGGLE_MUTE),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.INCREASE_VOLUME),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.DECREASE_VOLUME),
              null == i || i.enable(c.Pwk.MAIN, c.yxF.TOGGLE_FULLSCREEN_PLAYER),
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
                i.addShortcutsListener(c.Pwk.TRAILER, c.yxF.DISLIKE, n),
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
            [n, a, i, t],
          );
      };
      var M = i(60836),
        B = i(3429),
        V = i(3084);
      let O = (e) => {
          switch (e) {
            case n.ALBUM:
              return c.Rhz.ALBUM;
            case n.ARTIST:
              return c.Rhz.ARTIST;
            case n.PLAYLIST:
              return c.Rhz.PLAYLIST;
            case n.TRACK:
              return c.Rhz.TRACK;
          }
        },
        z = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n) => {
              if (!e || !a) return;
              let r = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: T.OB.Trailer,
                  mainObjectId: n,
                },
                l = (0, c.KOr)({ params: r, logger: t, context: z.name });
              l && (0, T.a5)(e.evgenInstance, l);
            },
            [e, i, t, a],
          );
        },
        D = (e) =>
          "object" == typeof e &&
          null !== e &&
          "actionType" in e &&
          "mainObjectId" in e,
        W = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n, r) => {
              if (!e || !a) return;
              let l = {
                hash: i,
                pageId: c.x3Y[a],
                mainObjectType: T.OB.Trailer,
                mainObjectId: n,
              };
              r &&
                ((l.actionType = T.Us.Pause),
                (l.userInteractionType = T.wt.Tap));
              let o = (0, c.KOr)({ params: l, logger: t, context: W.name });
              o &&
                (r && D(o)
                  ? (0, T.Oe)(e.evgenInstance, o)
                  : (0, T.$M)(e.evgenInstance, o));
            },
            [e, i, t, a],
          );
        },
        F = (e) => {
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
      var G = i(31014),
        U = i(2570),
        Q = i(49025),
        Z = i.n(Q);
      let Y = (0, j.Pi)(() => {
          let { trailer: e } = (0, c.oR4)(),
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
            className: Z().root,
            children: [
              (0, N.jsxs)("div", {
                className: Z().textContainer,
                children: [
                  (0, N.jsx)(U.Heading, {
                    variant: "h2",
                    className: Z().title,
                    size: "xs",
                    weight: "bold",
                    children: (0, N.jsx)(G.Z, {
                      id: "error-messages.something-went-wrong",
                    }),
                  }),
                  (0, N.jsx)(U.Caption, {
                    className: Z().description,
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, N.jsx)(G.Z, {
                      id: "trailer.something-went-wrong-description",
                    }),
                  }),
                ],
              }),
              (0, N.jsx)(A.z, {
                onClick: a,
                color: "secondary",
                size: "default",
                radius: "xxxl",
                children: (0, N.jsx)(U.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, N.jsx)(G.Z, { id: "page-error.reload" }),
                }),
              }),
            ],
          });
        }),
        H = () =>
          (0, N.jsx)("div", {
            className: Z().root,
            children: (0, N.jsxs)("div", {
              className: Z().textContainer,
              children: [
                (0, N.jsx)(U.Heading, {
                  variant: "h2",
                  className: Z().title,
                  size: "xs",
                  weight: "bold",
                  children: (0, N.jsx)(G.Z, { id: "trailer.not-found-title" }),
                }),
                (0, N.jsx)(U.Caption, {
                  className: Z().description,
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: (0, N.jsx)(G.Z, {
                    id: "trailer.not-found-description",
                  }),
                }),
              ],
            }),
          });
      var K = i(90679);
      let q = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n, r) => {
              if (!e || !a) return;
              let l = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: n,
                  mainObjectId: r,
                },
                o = (0, c.KOr)({ params: l, logger: t, context: q.name });
              o && (0, T.$M)(e.evgenInstance, o);
            },
            [e, i, t, a],
          );
        },
        J = () => {
          let e = (0, c.z$f)(),
            t = (0, c.wLl)(),
            { hash: i } = (0, c.RQn)(),
            { pageId: a } = (0, c.lVB)();
          return (0, S.useCallback)(
            (n, r) => {
              if (!e || !a) return;
              let l = {
                  hash: i,
                  pageId: c.x3Y[a],
                  mainObjectType: T.OB.Trailer,
                  mainObjectId: n,
                  from: T.qU.TrailerScreen,
                  to: c.x3Y[r],
                },
                o = (0, c.KOr)({ params: l, logger: t, context: J.name });
              o && (0, T.H1)(e.evgenInstance, o);
            },
            [e, i, t, a],
          );
        },
        X = (e) => {
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
        $ = {
          [n.ALBUM]: T.OB.Album,
          [n.ARTIST]: T.OB.Artist,
          [n.PLAYLIST]: T.OB.Playlist,
          [n.TRACK]: T.OB.Track,
        },
        ee = {
          [n.ALBUM]: c.Rhz.ALBUM,
          [n.ARTIST]: c.Rhz.ARTIST,
          [n.PLAYLIST]: c.Rhz.PLAYLIST,
        },
        et = (e) => {
          let {
            trailer: { meta: t },
            artist: i,
            album: a,
            playlist: r,
          } = (0, c.oR4)();
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
      var ei = i(82705),
        ea = i.n(ei);
      let en = (e) => {
          let { isActive: t, className: i, isCurrentEntityPage: a } = e;
          return (0, N.jsxs)("div", {
            className: (0, M.W)(ea().root, i),
            children: [
              (0, N.jsx)(K.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: ea().playButtonShimmer,
              }),
              a &&
                (0, N.jsx)(K.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: ea().linkButtonShimmer,
                }),
            ],
          });
        },
        er = (0, j.Pi)((e) => {
          var t;
          let {
              variant: i,
              isShimmerVisible: a,
              isShimmerActive: r,
              className: l,
            } = e,
            {
              trailer: { state: o, meta: d, modal: u, objectId: m },
            } = (0, c.oR4)(),
            _ = (0, c.R$C)(),
            p = O(i),
            { from: v } = (0, c.MhG)({ pageId: p, blockId: c.aUg.TRAILER }),
            y = J(),
            x = I(),
            h = q(),
            C = (0, c.s0h)(null == d ? void 0 : d.getUrl(i)),
            f = (0, S.useCallback)(() => {
              C();
              let e = ee[i];
              e && y(m, e);
            }, [C, m, y, i]),
            b = et(i),
            g = !b && i !== n.TRACK,
            j = (0, S.useCallback)(() => {
              var e;
              null == _ || _.stop(c.jiA.TRAILER), u.close(), x(m), g && f();
              let t =
                  o.status === s.Xz.PLAYING
                    ? {
                        entityId:
                          null === (e = o.entityMeta) || void 0 === e
                            ? void 0
                            : e.id,
                      }
                    : { index: 0 },
                a = X({
                  variant: i,
                  id: null == d ? void 0 : d.id,
                  uuid: null == d ? void 0 : d.uuid,
                  from: v,
                });
              null == _ ||
                _.playContext({ contextData: a, queueParams: t }).then(() => {
                  (null == d ? void 0 : d.id) && h($[i], d.id);
                });
            }, [
              v,
              f,
              g,
              null == d ? void 0 : d.id,
              null == d ? void 0 : d.uuid,
              u,
              m,
              x,
              h,
              _,
              null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
              o.status,
              i,
            ]),
            L = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: (0, M.W)(ea().root, l),
                  children: [
                    (0, N.jsx)(A.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, N.jsx)(P.J, { variant: "play", size: "xxxs" }),
                      className: ea().button,
                      onClick: j,
                      ...(0, k.BA)(
                        k.QM.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                      ),
                      children: (0, N.jsx)(G.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    g &&
                      (0, N.jsx)(A.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: f,
                        className: ea().button,
                        ...(0, k.BA)(
                          k.QM.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                        ),
                        children: (0, N.jsx)(G.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [l, j, f, g],
            );
          return a
            ? en({ isActive: r, isCurrentEntityPage: b, className: l })
            : L;
        });
      var el = i(40193),
        eo = i(86939),
        es = i(12404),
        ec = i(65094),
        ed = i.n(ec);
      let eu = (e, t) =>
          (0, N.jsx)("div", {
            className: ed().coverContainer,
            children: (0, N.jsx)(K.Shimmer, {
              isActive: e,
              radius: t,
              className: ed().cover,
            }),
          }),
        em = (e) =>
          (0, N.jsxs)("div", {
            className: ed().textContainer,
            children: [
              (0, N.jsx)("div", {
                className: ed().shimmerContainer,
                children: (0, N.jsx)(K.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: ed().titleShimmer,
                }),
              }),
              (0, N.jsx)("div", {
                className: ed().shimmerContainer,
                children: (0, N.jsx)(K.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: ed().descriptionShimmer,
                }),
              }),
            ],
          }),
        e_ = (0, j.Pi)((e) => {
          let {
              variant: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              className: r,
            } = e,
            {
              trailer: { meta: l, objectId: o },
            } = (0, c.oR4)(),
            s = O(t),
            { from: d } = (0, c.MhG)({ pageId: s, blockId: c.aUg.TRAILER }),
            u = J(),
            m = W(),
            _ = t === n.ARTIST ? "round" : "s",
            { togglePlay: p, isPlaying: v } = (0, c.bA$)({
              playContextParams: {
                contextData: F({
                  variant: t,
                  id: null == l ? void 0 : l.id,
                  uuid: null == l ? void 0 : l.uuid,
                  from: d,
                }),
                loadContextMeta: !0,
              },
            }),
            y = (0, S.useCallback)(() => {
              m(o, v), p();
            }, [v, o, m, p]),
            x = (0, S.useCallback)(() => {
              let e = ee[t];
              e && u(o, e);
            }, [o, u, t]),
            h = (0, S.useMemo)(() => {
              let e = {
                "--icon-background-color": null == l ? void 0 : l.averageColor,
              };
              return (0, N.jsxs)("div", {
                className: ed().coverContainer,
                ...(0, k.BA)(k.QM.trailer.TRAILER_COVER),
                children: [
                  (0, N.jsx)(es.Paper, {
                    radius: _,
                    className: ed().cover,
                    withShadow: !0,
                    children: (0, N.jsx)(eo.Image, {
                      "aria-hidden": !0,
                      src: null == l ? void 0 : l.coverUri,
                      size: 100,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, N.jsx)("div", {
                    className: ed().iconContainer,
                    style: e,
                    children: (0, N.jsx)(P.J, {
                      variant: "trailer",
                      size: "xs",
                      className: ed().icon,
                    }),
                  }),
                ],
              });
            }, [
              _,
              null == l ? void 0 : l.averageColor,
              null == l ? void 0 : l.coverUri,
            ]),
            C = (0, S.useMemo)(() => {
              switch (t) {
                case n.ALBUM:
                  if ((null == l ? void 0 : l.albumType) === el.VZ.SINGLE)
                    return (0, N.jsx)(G.Z, { id: "trailer.title-single" });
                  return (0, N.jsx)(G.Z, { id: "trailer.title-album" });
                case n.ARTIST:
                  return (0, N.jsx)(G.Z, { id: "trailer.title-artist" });
                case n.PLAYLIST:
                  return (0, N.jsx)(G.Z, { id: "trailer.title-playlist" });
                case n.TRACK:
                  return (0, N.jsx)(G.Z, { id: "trailer.title-track" });
              }
            }, [null == l ? void 0 : l.albumType, t]),
            f = (0, S.useMemo)(() => {
              let e = null == l ? void 0 : l.getUrl(t);
              return e
                ? (0, N.jsx)(V.rU, {
                    href: e,
                    className: ed().link,
                    onClick: x,
                    ...(0, k.BA)(k.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: (0, N.jsx)(U.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: ed().text,
                      children: null == l ? void 0 : l.title,
                    }),
                  })
                : (0, N.jsx)(U.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: ed().text,
                    ...(0, k.BA)(k.QM.trailer.TRAILER_ENTITY_TITLE),
                    children: null == l ? void 0 : l.title,
                  });
            }, [x, l, t]),
            b = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: ed().textContainer,
                  children: [
                    (0, N.jsx)(U.Heading, {
                      variant: "h1",
                      className: (0, M.W)(ed().text, ed().title),
                      lineClamp: 1,
                      ...(0, k.BA)(k.QM.trailer.TRAILER_MODAL_TITLE),
                      children: C,
                    }),
                    f,
                  ],
                }),
              [f, C],
            );
          return (0, N.jsxs)("div", {
            className: (0, M.W)(ed().root, r),
            ...(0, k.BA)(k.QM.trailer.TRAILER_HEADER),
            children: [
              i ? eu(a, _) : h,
              i ? em(a) : b,
              !i &&
                (0, N.jsx)(V.JM, {
                  className: ed().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: v,
                  iconClassName: ed().playButtonIcon,
                  onClick: y,
                }),
            ],
          });
        }),
        ep = (e) => {
          let t = (0, c.wLl)(),
            i = (0, c.z$f)(),
            { hash: a } = (0, c.RQn)(),
            { pageId: n } = (0, c.lVB)(),
            {
              blockType: r,
              blockId: l,
              blockPosX: o,
              blockPosY: s,
            } = (0, c.qYG)(),
            {
              objectType: d,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: p,
            } = (0, c.rKX)();
          return (0, S.useCallback)(
            (v) => {
              if (!i || !n) return;
              let y = c.x3Y[n];
              if (!y) return;
              let x = {
                hash: a,
                pageId: y,
                mainObjectType: T.OB.Trailer,
                mainObjectId: e,
                entityType: r,
                entityId: l,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: d,
                objectId: m,
                objectPosX: _,
                objectPosY: p,
                userInteractionType: T.wt.Tap,
              };
              v
                ? (x.actionType = T.Us.Dislike)
                : (x.actionType = T.Us.Undislike);
              let h = (0, c.KOr)({ params: x, logger: t, context: ep.name });
              h && (0, T.rx)(i.evgenInstance, h);
            },
            [i, l, o, s, r, a, t, e, m, _, p, d, u, n],
          );
        },
        ev = (e) => {
          let t = (0, c.wLl)(),
            i = (0, c.z$f)(),
            { hash: a } = (0, c.RQn)(),
            { pageId: n } = (0, c.lVB)(),
            {
              blockType: r,
              blockId: l,
              blockPosX: o,
              blockPosY: s,
            } = (0, c.qYG)(),
            {
              objectType: d,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: p,
            } = (0, c.rKX)();
          return (0, S.useCallback)(
            (v) => {
              if (!i || !n) return;
              let y = c.x3Y[n];
              if (!y) return;
              let x = {
                hash: a,
                pageId: y,
                mainObjectType: T.OB.Trailer,
                mainObjectId: e,
                entityType: r,
                entityId: l,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: d,
                objectId: m,
                objectPosX: _,
                objectPosY: p,
                userInteractionType: T.wt.Tap,
              };
              v ? (x.actionType = T.Us.Like) : (x.actionType = T.Us.Unlike);
              let h = (0, c.KOr)({ params: x, logger: t, context: ev.name });
              h && (0, T.rx)(i.evgenInstance, h);
            },
            [i, l, o, s, r, a, t, e, m, _, p, d, u, n],
          );
        },
        ey = (e, t) => {
          let i = (0, c.wLl)(),
            a = (0, c.z$f)(),
            { hash: n } = (0, c.RQn)(),
            { pageId: r } = (0, c.lVB)(),
            {
              blockType: l,
              blockId: o,
              blockPosX: s,
              blockPosY: d,
            } = (0, c.qYG)(),
            {
              objectType: u,
              objectsCount: m,
              objectId: _,
              objectPosX: p,
              objectPosY: v,
            } = (0, c.rKX)();
          return (0, S.useCallback)(() => {
            if (!a || !r) return;
            let y = c.x3Y[r];
            if (!y) return;
            let x = {
                hash: n,
                pageId: y,
                mainObjectType: T.OB.Trailer,
                mainObjectId: e,
                entityType: l,
                entityId: o,
                entityPosX: s,
                entityPosY: d,
                objectsCount: m,
                viewUuid: t,
                objectType: u,
                objectId: _,
                objectPosX: p,
                objectPosY: v,
              },
              h = (0, c.KOr)({ params: x, logger: i, context: ey.name });
            h && (0, T.PB)(a.evgenInstance, h);
          }, [a, o, s, d, l, n, i, e, _, p, v, u, m, r, t]);
        },
        ex = (e) =>
          "object" == typeof e &&
          null !== e &&
          "actionType" in e &&
          "mainObjectId" in e,
        eh = (e) => {
          let t = (0, c.wLl)(),
            i = (0, c.z$f)(),
            { hash: a } = (0, c.RQn)(),
            { pageId: n } = (0, c.lVB)(),
            {
              blockType: r,
              blockId: l,
              blockPosX: o,
              blockPosY: s,
            } = (0, c.qYG)(),
            {
              objectType: d,
              objectsCount: u,
              objectId: m,
              objectPosX: _,
              objectPosY: p,
            } = (0, c.rKX)();
          return (0, S.useCallback)(
            (v) => {
              if (!i || !n) return;
              let y = c.x3Y[n];
              if (!y) return;
              let x = {
                hash: a,
                pageId: y,
                mainObjectType: T.OB.Trailer,
                mainObjectId: e,
                entityType: r,
                entityId: l,
                entityPosX: o,
                entityPosY: s,
                objectsCount: u,
                objectType: d,
                objectId: m,
                objectPosX: _,
                objectPosY: p,
              };
              v ||
                ((x.actionType = T.Us.Pause),
                (x.userInteractionType = T.wt.Tap));
              let h = (0, c.KOr)({ params: x, logger: t, context: eh.name });
              h &&
                (!v && ex(h)
                  ? (0, T.rx)(i.evgenInstance, h)
                  : (0, T.yC)(i.evgenInstance, h));
            },
            [i, l, o, s, r, a, t, e, m, _, p, d, u, n],
          );
        },
        eC = (e) => {
          var t;
          let i = (0, c.R$C)(),
            {
              trailer: { state: a },
            } = (0, c.oR4)(),
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
                      .getState(c.jiA.TRAILER)
                      .playerState.progress.onChange(() => {
                        let e = i.getState(c.jiA.TRAILER).playerState,
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
      var ef = i(80684),
        eb = i.n(ef);
      let eg = (0, j.Pi)((e) => {
        let { variant: t, track: i, playContextParams: a, viewUuid: r } = e,
          {
            trailer: {
              meta: l,
              objectId: o,
              shouldSendEventOnTracksShowed: s,
              setShouldSendEventOnTracksShowed: d,
            },
          } = (0, c.oR4)(),
          u = t === n.ALBUM ? y.dn : y.fY,
          { isActive: m, progress: _ } = eC(i.id),
          p = ey(o, r),
          v = eh(o),
          x = ev(o),
          h = ep(o);
        (0, S.useEffect)(() => {
          s && (p(), d(!1));
        }, [p, d, s]);
        let C = (0, S.useMemo)(
          () => ({ "--track-progress": "".concat(_ || 0, "%") }),
          [_],
        );
        return (0, N.jsx)("div", {
          className: (0, M.W)(eb().root, { [eb().root_active]: m }),
          style: C,
          children: (0, N.jsx)(u, {
            position: i.positionInAlbum,
            withLightning: !!(null == i ? void 0 : i.isBest),
            track: i,
            playContextParams: a,
            albumArtists: null == l ? void 0 : l.albumArtists,
            onPlayClick: v,
            onLikeClick: x,
            onDislikeClick: h,
          }),
        });
      });
      var eN = i(55560),
        ej = i.n(eN);
      let eS = (e, t) => {
          let i = t === n.ALBUM ? c.Lxt.ALBUM : c.Lxt.PLAYLIST;
          return Array.from({ length: t === n.TRACK ? 1 : 5 }, (t, a) =>
            (0, N.jsx)(
              "div",
              {
                className: ej().trackContainer,
                children: (0, N.jsx)(V.DX, {
                  isActive: e,
                  className: (0, M.W)(ej().trackShimmer, {
                    [ej().albumShimmer]: i === c.Lxt.ALBUM,
                  }),
                  variant: i,
                }),
              },
              a,
            ),
          );
        },
        eL = (0, j.Pi)((e) => {
          let { variant: t } = e,
            { trailer: i } = (0, c.oR4)(),
            {
              isLoading: a,
              isRejected: n,
              tracks: r,
              meta: l,
              state: o,
              shouldAutoStartPlaying: s,
              setShouldAutoStartPlaying: d,
              isNotFound: u,
              modal: m,
            } = i,
            _ = (0, c.R$C)(),
            p = O(t),
            { from: v } = (0, c.MhG)({ pageId: p, blockId: c.aUg.TRAILER }),
            y = z(),
            x = W(),
            h = (0, S.useRef)((0, B.Z)()),
            C = a || n;
          (0, S.useEffect)(() => {
            m.isOpened &&
              (null == l ? void 0 : l.id) &&
              s &&
              (y(i.objectId),
              null == _ ||
                _.playContext(
                  {
                    contextData: F({
                      variant: t,
                      id: null == l ? void 0 : l.id,
                      uuid: null == l ? void 0 : l.uuid,
                      from: v,
                    }),
                    queueParams: { index: 0 },
                    loadContextMeta: !0,
                  },
                  c.jiA.TRAILER,
                ).then(() => {
                  x(i.objectId);
                }),
              d(!1));
          }, [
            v,
            null == l ? void 0 : l.id,
            null == l ? void 0 : l.uuid,
            m.isOpened,
            y,
            x,
            d,
            s,
            _,
            o.status,
            i.objectId,
            t,
          ]);
          let f = (0, S.useCallback)(
              (e) => ({
                contextData: F({
                  variant: t,
                  id: null == l ? void 0 : l.id,
                  uuid: null == l ? void 0 : l.uuid,
                  from: v,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [v, null == l ? void 0 : l.id, null == l ? void 0 : l.uuid, t],
            ),
            b = (0, S.useMemo)(
              () =>
                C
                  ? eS(a, t)
                  : null == r
                    ? void 0
                    : r.map((e, i) =>
                        (0, N.jsx)(
                          c.Ja5,
                          {
                            blockType: T.OB.SmartPreview,
                            blockId: e.id,
                            blockPosX: 1,
                            blockPosY: 1,
                            children: (0, N.jsx)(c.nZ5, {
                              objectType: T.OB.SmartPreview,
                              objectId: e.id,
                              objectPosX: 1,
                              objectPosY: i + 1,
                              objectsCount: r.length,
                              children: (0, N.jsx)(eg, {
                                variant: t,
                                track: e,
                                playContextParams: f(i),
                                viewUuid: h.current,
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
              [f, a, C, r, t],
            );
          return n
            ? u
              ? (0, N.jsx)(H, {})
              : (0, N.jsx)(Y, {})
            : (0, N.jsxs)("div", {
                className: ej().root,
                children: [
                  (0, N.jsx)(e_, {
                    isShimmerVisible: C,
                    isShimmerActive: a,
                    variant: t,
                    className: ej().header,
                  }),
                  b,
                  (0, N.jsx)(er, {
                    isShimmerVisible: C,
                    isShimmerActive: a,
                    variant: t,
                    className: ej().footer,
                  }),
                ],
              });
        });
      var ek = i(17601),
        eA = i.n(ek);
      let eP = (0, j.Pi)(() => {
        let {
            settings: e,
            trailer: t,
            sonataState: i,
            fullscreenPlayer: a,
          } = (0, c.oR4)(),
          n = (0, c.R$C)(),
          { contentRef: r } = (0, c.$Y6)(),
          { formatMessage: l } = (0, L.Z)(),
          o = I();
        R();
        let d = e.layout === c.t8m.Mobile;
        (0, S.useEffect)(() => {
          let e =
              null == n
                ? void 0
                : n
                    .getState(c.jiA.TRAILER)
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
              null == n
                ? void 0
                : n.getState(c.jiA.TRAILER).playerState.status.onChange((e) => {
                    e && t.state.setStatus(e);
                  }),
            a =
              null == n
                ? void 0
                : n.state.playerState.volume.onChange(() => {
                    let e = n.state.playerState.volume.value;
                    "number" == typeof e && n.setVolume(e, c.jiA.TRAILER);
                  });
          return () => {
            null == e || e(), null == i || i(), null == a || a();
          };
        }, [n, t.state]);
        let u = (0, S.useCallback)(() => {
            null == n ||
              n.stop(c.jiA.TRAILER).finally(() => {
                t.sonataStatusBeforeTrailerStart !== s.Xz.PLAYING ||
                  t.isManuallyPaused ||
                  null == n ||
                  n.resume(),
                  t.setAnimationState(!0),
                  t.modal.close(),
                  o(t.objectId);
              });
          }, [o, n, t]),
          m = (0, S.useCallback)(
            (e) => {
              t.modal.onOpenChange(e), e || u();
            },
            [u, t.modal],
          );
        return (
          (0, S.useEffect)(() => {
            t.modal.isOpened &&
              t.isLoaded &&
              (i.status === s.Xz.PLAYING && u(), t.setAnimationState(!1));
          }, [u, i.status, t, t.modal.isOpened]),
          (0, S.useEffect)(() => {
            a.modal.isOpened && t.modal.isOpened && u();
          }, [a.modal.isOpened, u, t.modal.isOpened]),
          (0, N.jsxs)(w.u, {
            size: "fitContent",
            placement: d ? "default" : "right",
            open: t.modal.isOpened,
            onOpenChange: m,
            onClose: u,
            className: eA().root,
            contentClassName: eA().modalContent,
            portalNode: d ? null : r,
            showHeader: !1,
            withOverlay: !1,
            closeOnOutsidePress: !1,
            withAnimation: t.withAnimation,
            containerProps: (0, k.BA)(k.QM.trailer.TRAILER_MODAL),
            children: [
              (0, N.jsx)("div", {
                className: eA().header,
                children: (0, N.jsx)(A.z, {
                  radius: "round",
                  color: "secondary",
                  size: "xxs",
                  icon: (0, N.jsx)(P.J, { variant: "close", size: "xxs" }),
                  onClick: u,
                  "aria-label": l({ id: "trailer.close" }),
                  ...(0, k.BA)(k.QM.trailer.TRAILER_CLOSE_BUTTON),
                }),
              }),
              t.variant && (0, N.jsx)(eL, { variant: t.variant }),
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
          return R;
        },
      });
      var a = i(9753),
        n = i(60836),
        r = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(31014),
        c = i(23881),
        d = i(39513),
        u = i(89352),
        m = i(14102),
        _ = i(2570),
        p = i(34152),
        v = i(3084),
        y = i(27491),
        x = i(28852),
        h = i(12404),
        C = { src: "/_next/static/media/artist.c49b2bfa.png" },
        f = i(78719),
        b = i.n(f);
      let g = (0, r.Pi)((e) => {
        let { className: t, artist: i } = e,
          { ref: r, intersectionPropertyId: o } = (0, p.VfV)(),
          { likeArtist: s, isArtistLiked: u } = (0, p.oR4)().wizard,
          { id: m, name: f, coverUri: g } = i,
          N = (0, l.useCallback)(() => {
            s(m);
          }, [s, m]),
          j = u(m),
          S = (0, l.useMemo)(
            () =>
              (0, a.jsx)(h.Paper, {
                className: b().cover,
                radius: "round",
                ...(0, c.BA)(c.QM.wizard.ARTIST_CARD),
                children: (0, a.jsxs)(d.z, {
                  radius: "round",
                  className: b().coverBlock,
                  variant: "default",
                  onClick: N,
                  withRipple: !1,
                  withHover: !1,
                  "aria-pressed": j,
                  "aria-label": f,
                  children: [
                    (0, a.jsx)(v.BE, {
                      className: b().image,
                      src: g || C.src,
                      fit: "cover",
                      alt: f,
                      withAvatarReplace: !!g,
                      "aria-hidden": !0,
                    }),
                    (0, a.jsx)("div", {
                      className: (0, n.W)(b().like),
                      children: (0, a.jsx)(x.J, {
                        variant: "likedVariant",
                        size: "s",
                        className: b().icon,
                      }),
                    }),
                  ],
                }),
              }),
            [j, g, f, N],
          );
        return (0, a.jsx)(y.m7, {
          ref: r,
          className: (0, n.W)(b().root, { [b().root_selected]: j }, t),
          textPosition: "center",
          title: (0, a.jsx)(_.Caption, {
            "aria-hidden": !0,
            className: b().name,
            variant: "div",
            type: "entity",
            size: "l",
            weight: "medium",
            lineClamp: 2,
            children: f,
          }),
          "data-intersection-property-id": o,
          view: S,
          ...(0, c.BA)(c.bG.artist.ARTIST_ITEM),
        });
      });
      var N = i(82388),
        j = i.n(N);
      let S = (0, r.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          { wizard: t, settings: i } = (0, p.oR4)(),
          { notify: r } = (0, p.d$W)(),
          y = i.layout === p.t8m.Mobile,
          x = i.platform === p.t4T.WINDOWS,
          [h, C] = (0, p.zU3)(),
          f = (0, m.useTabsState)(0),
          b = (0, l.useMemo)(
            () => (e) => {
              var i;
              if (!f.onTabChange || e === f.value) return;
              f.onTabChange(e);
              let a =
                null === (i = t.genres[e]) || void 0 === i ? void 0 : i.id;
              t.setFilter(a), null == h || h.scrollTo({ top: 0 });
            },
            [t, f, h],
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
                ...f,
                onTabChange: b,
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
                      className: (0, n.W)(j().filter, j().important, {
                        [j().filter_selected]: t === f.value,
                      }),
                      titleClassName: j().tabTitle,
                      title: e.title,
                      value: t,
                    },
                    t,
                  ),
                ),
              }),
            [t.genres, f, b, t.loadingState, y],
          ),
          L = (0, l.useCallback)(() => {
            t.getArtists(60);
          }, [t]);
        (0, l.useEffect)(() => {
          t.filter && L();
        }, [t.filter, L]);
        let k = (0, l.useCallback)(async () => {
          await t.getGenres(), L();
        }, [t, L]);
        (0, l.useEffect)(() => {
          t.modal.isOpened && k();
        }, [t, t.modal.isOpened, k]),
          (0, l.useEffect)(() => {
            t.loadingState === p.Gui.REJECT &&
              (t.modal.close(),
              r(
                (0, a.jsx)(v.Q, {
                  error: e({ id: "error-messages.error-load-wizard" }),
                }),
                { containerId: p.W$x.ERROR },
              ));
          }, [t, t.getGenres, t.loadingState, e, r]);
        let A = (0, l.useMemo)(
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
          P = (0, l.useCallback)(() => {
            t.finish(), t.modal.close();
          }, [t]);
        return (0, a.jsxs)(u.u, {
          className: (0, n.W)(j().root, { [j().root_withWindows]: x }),
          headerClassName: j().modalHeader,
          contentClassName: j().modalContent,
          open: t.modal.isOpened,
          onOpenChange: t.modal.onOpenChange,
          onClose: P,
          size: "fullscreen",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          ...(0, c.BA)(c.QM.wizard.WIZARD_MODAL),
          header: y && A,
          children: [
            (0, a.jsxs)("div", {
              className: j().wrapper,
              children: [
                !y && A,
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
                  onClick: P,
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
                  className: (0, n.W)(j().carousel),
                  children: (0, a.jsx)(v.J3, {
                    carouselElement: S,
                    buttonSize: "l",
                  }),
                }),
                (0, a.jsx)(v.Wv, {
                  withFooter: !1,
                  className: (0, n.W)(j().scrollContainer, j().important),
                  itemContentCallback: (i) => {
                    let n = t.artistsByGenre[i];
                    if (!n) {
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
                    return (0, a.jsx)(g, { artist: n }, n.id);
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
        k = i(33589),
        A = i(395),
        P = i(24244);
      let w = (e) => {
          let t = new Map();
          return (
            e.map((e) => {
              t.set(e.id, {
                loadingState: p.Gui.IDLE,
                artists: [],
                showedArtists: [],
              });
            }),
            P.LO.map(t)
          );
        },
        T = (e) => e.map((e) => ({ id: e.id, title: e.title })),
        I = (e) => {
          let {
              id: t,
              likedArtists: i,
              unlikedArtists: a,
              savedLikedArtists: n,
            } = e,
            r = {};
          if (i.includes(t))
            return (r.likedArtists = i.filter((e) => e !== t)), r;
          let l = n.includes(t),
            o = a.includes(t);
          return (
            ((r.unlikedArtists = a.filter((e) => e !== t)), l && !o)
              ? r.unlikedArtists.push(t)
              : (r.likedArtists = [...i, t]),
            r
          );
        },
        E = L.V5.model("WizardGenre", { id: L.V5.string, title: L.V5.string }),
        R = L.V5.model("Wizard", {
          loadingState: L.V5.enumeration(Object.values(p.Gui)),
          modal: A.KL,
          genres: L.V5.array(E),
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
                  savedLikedArtists: n,
                } = e,
                r = I({
                  id: t,
                  likedArtists: i,
                  unlikedArtists: a,
                  savedLikedArtists: n,
                });
              r.likedArtists && (e.likedArtists = (0, L.pj)(r.likedArtists)),
                r.unlikedArtists &&
                  (e.unlikedArtists = (0, L.pj)(r.unlikedArtists));
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
                  if (((e.genres = (0, L.pj)(T(i))), !i.length))
                    throw Error("The wizard's genre array is empty");
                  (e.filter =
                    null === (a = i[0]) || void 0 === a ? void 0 : a.id),
                    (e.artistsByGenres = (0, L.pj)(w(i))),
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
              let n = e.artistsByGenres.get(e.filter);
              if (n.loadingState !== p.Gui.PENDING)
                try {
                  n.loadingState = p.Gui.PENDING;
                  let { artists: a, likedArtists: r = [] } =
                      yield i.getWizardArtistsByGenre({
                        genre: e.filter,
                        showedArtists: n.showedArtists,
                        likedArtists: e.likedArtists,
                        unlikedArtists: e.unlikedArtists,
                        countOfNewArtists: t,
                      }),
                    l = a.map((e) => (0, k.tR)({ artist: e })),
                    o = a.map((e) => e.id);
                  e.artistsByGenres.set(e.filter, {
                    artists: [...n.artists, ...l],
                    showedArtists: [...n.showedArtists, ...o],
                    loadingState: p.Gui.RESOLVE,
                  }),
                    (e.savedLikedArtists = (0, L.pj)(r.map((e) => String(e)))),
                    (e.likedArtists = (0, L.pj)([])),
                    (e.unlikedArtists = (0, L.pj)([]));
                } catch (e) {
                  a.error(e), (n.loadingState = p.Gui.REJECT);
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
    75980: function (e) {
      e.exports = {
        root: "AdPopup_root__0BS6q",
        container: "AdPopup_container__Nl2aA",
        title: "AdPopup_title__u1DpB",
        subtitle: "AdPopup_subtitle__HGfSa",
        info: "AdPopup_info__EYVOy",
        favicon: "AdPopup_favicon__TEgpx",
        buttonContainer: "AdPopup_buttonContainer___y7MO",
      };
    },
    91147: function (e) {
      e.exports = {
        root_primary: "CommunicationButton_root_primary__rrmax",
        root_plus: "CommunicationButton_root_plus__d48MV",
        root_secondary: "CommunicationButton_root_secondary__YQujH",
        text: "CommunicationButton_text__kObnq",
      };
    },
    21134: function (e) {
      e.exports = {
        root: "PaymentWidgetModal_root__I6Hrp",
        root_loaded: "PaymentWidgetModal_root_loaded__Rzltj",
        content: "PaymentWidgetModal_content__ifRry",
        widget: "PaymentWidgetModal_widget__cu_gr",
      };
    },
    91853: function (e) {
      e.exports = {
        imageContainer: "AudioAd_imageContainer__S2R_2",
        image: "AudioAd_image__7KVVj",
        backgroundImage: "AudioAd_backgroundImage__OVhzZ",
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
        button: "PlusBar_button__UT3aR",
        plusButtonShimmer: "PlusBar_plusButtonShimmer__FT1vv",
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
      };
    },
    43056: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopButton_root__qGgoC",
        button: "FullscreenPlayerDesktopButton_button__7NEl6",
      };
    },
    64331: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopContent_root__tKNGK",
        fullscreenContent:
          "FullscreenPlayerDesktopContent_fullscreenContent__Nvety",
        fullscreenContent_enter:
          "FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y",
        "enter-fade-fullscreen-content":
          "FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM",
        fullscreenContent_leave:
          "FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_",
        "leave-fade-fullscreen-content":
          "FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5",
        fullscreenContent_withDisabledInsetTransition:
          "FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__",
        additionalContent:
          "FullscreenPlayerDesktopContent_additionalContent__tuuy7",
        additionalContent_enter:
          "FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC",
        "enter-fade-additional-content":
          "FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_",
        additionalContent_leave:
          "FullscreenPlayerDesktopContent_additionalContent_leave___VLeo",
        "leave-fade-additional-content":
          "FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp",
        additionalContent_withDisabledInsetTransition:
          "FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh",
        info: "FullscreenPlayerDesktopContent_info__Dq69p",
        artists: "FullscreenPlayerDesktopContent_artists__a_2G3",
        podcastAuthors: "FullscreenPlayerDesktopContent_podcastAuthors__NQS8v",
        meta: "FullscreenPlayerDesktopContent_meta__3jDTy",
        title: "FullscreenPlayerDesktopContent_title__I2JrP",
        sliderContainer:
          "FullscreenPlayerDesktopContent_sliderContainer__FtBZ7",
        slider: "FullscreenPlayerDesktopContent_slider__FJscl",
        syncLyrics: "FullscreenPlayerDesktopContent_syncLyrics__6dTfH",
        syncLyricsContent:
          "FullscreenPlayerDesktopContent_syncLyricsContent__H_enX",
        syncLyricsLoader:
          "FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9",
        syncLyricsScroller:
          "FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK",
        syncLyricsFooter:
          "FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ",
        syncLyricsCounter:
          "FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k",
      };
    },
    82120: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopControls_root__tviu4",
        root_visible: "FullscreenPlayerDesktopControls_root_visible__1b9xD",
        sonataControls: "FullscreenPlayerDesktopControls_sonataControls__9AIki",
        menuWrapper: "FullscreenPlayerDesktopControls_menuWrapper__ifxNx",
        syncLyricsButton:
          "FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g",
        likeButton: "FullscreenPlayerDesktopControls_likeButton__vpJ7S",
        menuButton: "FullscreenPlayerDesktopControls_menuButton__R4cXl",
        likeButton_active:
          "FullscreenPlayerDesktopControls_likeButton_active__XltBK",
        menuButton_active:
          "FullscreenPlayerDesktopControls_menuButton_active__YZ8M8",
        syncLyricsButton_active:
          "FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH",
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
      e.exports = {
        root: "PlayerBar_root__cXUnU",
        adPopup: "PlayerBar_adPopup__BrBC6",
      };
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
        root_withEqualizer:
          "QualitySettingsContextMenu_root_withEqualizer__GPjIg",
        root_withNewQuality:
          "QualitySettingsContextMenu_root_withNewQuality__jPTb8",
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
    74855: function (e) {
      e.exports = {
        icon: "SyncLyricsButton_icon__m0Gdk",
        icon_active: "SyncLyricsButton_icon_active__6WcWG",
        animation_scaled: "SyncLyricsButton_animation_scaled__vwsc_",
        scale: "SyncLyricsButton_scale__FGAYV",
        animation_unscaled: "SyncLyricsButton_animation_unscaled__eM1Wb",
        unscale: "SyncLyricsButton_unscale__ceLQu",
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
        element_paused: "SyncLyricsLoader_element_paused__LFpD0",
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
