(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7660],
  {
    41450: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return Z;
        },
        F: function () {
          return d;
        },
      });
      var i,
        r,
        o = n(65067),
        a = n(13534);
      let s = (e) => ({ serviceSessionId: e.serviceSessionId }),
        l = (e) => {
          let {
            target: t,
            serviceSessionId: n,
            offersBatchId: i,
            offersPositionIds: r,
          } = e;
          return {
            serviceSessionId: n,
            target: t,
            offersBatchId: i,
            offersPositionIds: r,
          };
        },
        u = function (e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            { frontSessionStart: n, loadOffersResulted: i } = (0, a.E_I)(t);
          (0, o.useEffect)(() => {
            e.loadingState !== a.Gui.RESOLVE ||
              e.isFrontSessionStartSent ||
              (n(s(e)), e.toggleIsFrontSessionStartSentTrue());
          }, [e, e.loadingState, e.isFrontSessionStartSent, n]),
            (0, o.useEffect)(() => {
              e.loadingState !== a.Gui.RESOLVE ||
                e.isLoadOffersResultSent ||
                (i(l(e)), e.toggleIsLoadOffersResultSentTrue());
            }, [e, e.loadingState, e.isLoadOffersResultSent, i]);
        },
        d = function (e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = arguments.length > 4 ? arguments[4] : void 0,
            { user: s, offers: l } = (0, a.oR4)(),
            d = l[e],
            {
              payment: { environment: c },
            } = (0, a.uK4)().get(a.U5t);
          return (
            (0, o.useEffect)(() => {
              if (t && d.isNeededToLoad) {
                let e = "production" === c ? s.account.data.uid : void 0;
                d.getData({
                  uid: e,
                  communicationId: n,
                  campaignId: i,
                  customTarget: r,
                });
              }
            }, [t, d, n, i, r, d.isNeededToLoad, c, s]),
            u(d, t),
            d
          );
        };
      var c = n(22874),
        f = n(40892),
        m = n(48464);
      let p = {
          INTRO_PLAN: m.f.IntroPlan,
          INTRO_UNTIL_PLAN: m.f.IntroUntilPlan,
          TRIAL_PLAN: m.f.TrialPlan,
          TRIAL_UNTIL_PLAN: m.f.TrialUntilPlan,
        },
        v = (e) => {
          let { repetitionCount: t, typename: n, ...i } = e;
          return {
            ...(Number.isFinite(t) ? { repeatCount: t } : {}),
            ...i,
            typename: p[n] || n,
          };
        },
        g = (e) => {
          let { tariffOffer: t, optionOffers: n } = e;
          return {
            ...e,
            silentInvoiceAvailable: !!e.silentInvoiceAvailable,
            structureType: e.structureType,
            tariffOffer: t
              ? {
                  ...t,
                  offerVendorType: t.offerVendorType,
                  plans: t.plans.map(v),
                }
              : void 0,
            optionOffers:
              null == n
                ? void 0
                : n.map((e) => ({ ...e, plans: (e.plans || []).map(v) })),
          };
        };
      var b = n(52670);
      let S = (e) => {
          let { customTexts: t = {}, ...n } = e;
          return {
            ...n,
            customTexts: Object.entries(t).reduce((e, t) => {
              let [n, i] = t;
              return (e[(0, b.Z)(n)] = i), e;
            }, {}),
          };
        },
        x = (e) => (0, c.pj)(e),
        V = (e) => {
          let { plans: t, ...n } = e;
          return (0, c.pj)({ ...n, plans: t.map(x) });
        },
        _ = (e) => {
          let { option: t, ...n } = e;
          return (0, c.pj)({ ...V(n), option: t });
        },
        y = (e) => {
          if (!e) return null;
          let { tariff: t, ...n } = e;
          return (0, c.pj)({ ...V(n), tariff: t });
        },
        h = (e) => {
          let {
            positionId: t,
            silentInvoiceAvailable: n,
            structureType: i,
            tariffOffer: r,
            optionOffers: o,
          } = e;
          return (0, c.pj)({
            positionId: t,
            silentInvoiceAvailable: n,
            structureType: i,
            tariffOffer: y(r),
            optionsOffers: o.map(_),
          });
        },
        T = (e) => {
          let {
            analyticData: t,
            catalogCompositeOffer: n,
            offerTexts: i,
            target: r,
            requestedFeatures: o,
            position: a,
            oneClickAvailable: s,
            place: l,
            purchaseToken: u,
          } = e;
          return (0, c.pj)({
            analyticData: t,
            catalogCompositeOffer: h(g(n)),
            offerTexts: S(i),
            target: r,
            requestedFeatures: o,
            position: a,
            oneClickAvailable: s,
            place: l,
            purchaseToken: u,
          });
        },
        C = (e) => {
          let {
            sessionId: t,
            result: n,
            offerConfigId: i,
            mlRequestId: r,
            page: o,
            language: a,
          } = e;
          return (0, c.pj)({
            sessionId: t,
            page: o,
            offers: n.map(T),
            mlRequestId: r,
            offerConfigId: i,
            language: a,
          });
        },
        N = (e) => {
          let { eventSessionId: t, batchPositionId: n, offers: i } = e;
          return (0, c.pj)({
            eventSessionId: t,
            batchPositionId: n,
            offers: i.map(h),
          });
        },
        O = c.V5.model({
          batchId: c.V5.string,
          positionId: c.V5.string,
          placeId: c.V5.maybe(c.V5.string),
        }),
        I = c.V5.model({
          buttonText: c.V5.maybe(c.V5.string),
          buttonAdditionalText: c.V5.maybe(c.V5.string),
          buttonTextA11y: c.V5.maybe(c.V5.string),
          oneClickDisclaimerText: c.V5.maybe(c.V5.string),
          oneClickDisclaimerTextA11y: c.V5.maybe(c.V5.string),
        }),
        P = c.V5.model({
          subscriptionName: c.V5.string,
          buttonText: c.V5.string,
          buttonTextWithDetails: c.V5.string,
          combinedIntroductoryText: c.V5.string,
          combinedPriceText: c.V5.string,
          combinedFullOfferText: c.V5.string,
          priceInMonth: c.V5.string,
          customTexts: I,
        });
      ((i = r || (r = {})).COMPOSITE = "COMPOSITE"),
        (i.OPTION = "OPTION"),
        (i.TARIFF = "TARIFF");
      let R = c.V5.model({ amount: c.V5.number, currency: c.V5.string }),
        E = c.V5.model({
          typename: c.V5.literal(m.f.IntroPlan),
          period: c.V5.string,
          price: R,
          repeatCount: c.V5.maybe(c.V5.number),
        }),
        j = c.V5.model({
          typename: c.V5.literal(m.f.IntroUntilPlan),
          price: R,
          until: c.V5.string,
        }),
        B = c.V5.model({
          typename: c.V5.literal(m.f.TrialPlan),
          period: c.V5.string,
        }),
        k = c.V5.model({
          typename: c.V5.literal(m.f.TrialUntilPlan),
          until: c.V5.string,
        }),
        A = c.V5.union(E, j, B, k),
        L = c.V5.model({ name: c.V5.string }),
        w = c.V5.model({
          additionText: c.V5.string,
          description: c.V5.string,
          name: c.V5.string,
          text: c.V5.string,
          title: c.V5.string,
          plans: c.V5.array(A),
          commonPeriod: c.V5.string,
          commonPrice: R,
        }),
        M = w.props({ option: L }),
        U = w.props({ tariff: L }),
        z = c.V5.model({
          positionId: c.V5.string,
          silentInvoiceAvailable: c.V5.boolean,
          structureType: c.V5.enumeration(Object.values(r)),
          tariffOffer: c.V5.maybeNull(U),
          optionsOffers: c.V5.array(M),
        }),
        D = c.V5.model({
          analyticData: O,
          catalogCompositeOffer: z,
          offerTexts: P,
          target: c.V5.string,
          requestedFeatures: c.V5.maybe(c.V5.array(c.V5.string)),
          position: c.V5.number,
          oneClickAvailable: c.V5.maybe(c.V5.boolean),
          place: c.V5.maybe(c.V5.string),
          purchaseToken: c.V5.maybe(c.V5.string),
        }),
        F = c.V5.model({
          sessionId: c.V5.maybeNull(c.V5.string),
          page: c.V5.maybeNull(c.V5.string),
          offers: c.V5.array(D),
          mlRequestId: c.V5.maybeNull(c.V5.string),
          offerConfigId: c.V5.maybeNull(c.V5.number),
          language: c.V5.string,
        }),
        q = c.V5.model({
          eventSessionId: c.V5.string,
          batchPositionId: c.V5.string,
          offers: c.V5.array(z),
        }),
        W = c.V5.compose(
          c.V5.model({
            isFrontSessionStartSent: c.V5.maybe(c.V5.boolean),
            isLoadOffersResultSent: c.V5.maybe(c.V5.boolean),
            data: c.V5.maybeNull(q),
            acqData: c.V5.maybeNull(F),
          }),
          f.fu,
        )
          .views((e) => {
            let t = {
              get isShimmerVisible() {
                return e.isNeededToLoad || e.isLoading || e.isRejected;
              },
              get isShimmerActive() {
                return e.isLoading;
              },
              get target() {
                var n;
                return (
                  (null === (n = t.acqOffer) || void 0 === n
                    ? void 0
                    : n.target) || "music"
                );
              },
              get page() {
                return "music_paywall_screen";
              },
              get places() {
                return [];
              },
              get features() {
                return;
              },
              get offerPosition() {
                return 0;
              },
              get acqOffer() {
                var i;
                return null === (i = e.acqData) || void 0 === i
                  ? void 0
                  : i.offers[t.offerPosition];
              },
              get place() {
                var r;
                return null === (r = t.acqOffer) || void 0 === r
                  ? void 0
                  : r.place;
              },
              get offer() {
                var o, a;
                return (
                  (null === (o = t.acqOffer) || void 0 === o
                    ? void 0
                    : o.catalogCompositeOffer) ||
                  (null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.offers[t.offerPosition])
                );
              },
              get offersPositionId() {
                var s, l;
                return (
                  (null === (s = t.acqOffer) || void 0 === s
                    ? void 0
                    : s.analyticData.positionId) ||
                  (null === (l = t.offer) || void 0 === l
                    ? void 0
                    : l.positionId) ||
                  ""
                );
              },
              get tariffOffer() {
                var u;
                return null === (u = t.offer) || void 0 === u
                  ? void 0
                  : u.tariffOffer;
              },
              get customTexts() {
                var d, c;
                return null === (c = t.acqOffer) || void 0 === c
                  ? void 0
                  : null === (d = c.offerTexts) || void 0 === d
                    ? void 0
                    : d.customTexts;
              },
              get mainText() {
                var f, m;
                return (
                  (null === (f = t.customTexts) || void 0 === f
                    ? void 0
                    : f.buttonText) ||
                  (null === (m = t.tariffOffer) || void 0 === m
                    ? void 0
                    : m.text)
                );
              },
              get mainTextA11y() {
                var p;
                return null === (p = t.customTexts) || void 0 === p
                  ? void 0
                  : p.buttonTextA11y;
              },
              get additionText() {
                var v, g;
                return (
                  (null === (v = t.customTexts) || void 0 === v
                    ? void 0
                    : v.buttonAdditionalText) ||
                  (null === (g = t.tariffOffer) || void 0 === g
                    ? void 0
                    : g.additionText)
                );
              },
              get serviceSessionId() {
                var b, S;
                return (
                  (null === (b = e.acqData) || void 0 === b
                    ? void 0
                    : b.sessionId) ||
                  (null === (S = e.data) || void 0 === S
                    ? void 0
                    : S.eventSessionId) ||
                  ""
                );
              },
              get offersBatchId() {
                var x, V;
                return (
                  (null === (x = t.acqOffer) || void 0 === x
                    ? void 0
                    : x.analyticData.batchId) ||
                  (null === (V = e.data) || void 0 === V
                    ? void 0
                    : V.batchPositionId) ||
                  ""
                );
              },
              get offersPositionIds() {
                var _, y;
                return (
                  (null === (_ = e.acqData) || void 0 === _
                    ? void 0
                    : _.offers.map((e) => e.analyticData.positionId)) ||
                  (null === (y = e.data) || void 0 === y
                    ? void 0
                    : y.offers.map((e) => e.positionId)) ||
                  []
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            toggleIsFrontSessionStartSentTrue() {
              e.isFrontSessionStartSent = !0;
            },
            toggleIsLoadOffersResultSentTrue() {
              e.isLoadOffersResultSent = !0;
            },
            getData: (0, c.ls)(function* (t) {
              let n,
                {
                  uid: i,
                  communicationId: r,
                  campaignId: o,
                  customTarget: s,
                } = t,
                {
                  acqOffers: l,
                  offersResource: u,
                  modelActionsLogger: d,
                } = (0, c.dU)(e),
                { experiments: f } = (0, c.yj)(e),
                m = f.getEnabledFlags(),
                p = f.checkExperiment(a.peG.WebNextPlusAcqToolkit, "on");
              if (e.loadingState !== a.Gui.PENDING) {
                (e.isFrontSessionStartSent = !1),
                  (e.isLoadOffersResultSent = !1);
                try {
                  if (((e.loadingState = a.Gui.PENDING), p)) {
                    let t = {};
                    r && (t.communication_id = r),
                      o && (t.campaign_id = o),
                      (n = yield l.getOffers(e.page, e.places, {
                        expFlags: m,
                        customProperties: t,
                      })),
                      (e.acqData = C(n));
                  } else
                    (n = yield u.getCompositeOffers({
                      uid: i,
                      target: s || e.target,
                      features: e.features,
                    })),
                      (e.data = N(n));
                  e.loadingState = a.Gui.RESOLVE;
                } catch (t) {
                  (e.loadingState = a.Gui.REJECT), d.error(t);
                }
              }
            }),
          })),
        G = W.named("MusicOffers"),
        K = W.props({ customTarget: c.V5.maybeNull(c.V5.string) })
          .views((e) => ({
            get target() {
              var t;
              if (e.customTarget) return e.customTarget;
              return (
                (null === (t = e.acqOffer) || void 0 === t
                  ? void 0
                  : t.target) || "music"
              );
            },
          }))
          .actions((e) => ({
            setCustomTarget: (t) => {
              e.customTarget = t;
            },
          }))
          .named("PaywallOffers"),
        Z = c.V5.model("Offers", { music: G, paywall: K });
    },
    99951: function (e, t, n) {
      "use strict";
      n.d(t, {
        Qw: function () {
          return _;
        },
        _$: function () {
          return d;
        },
        c8: function () {
          return r;
        },
        tP: function () {
          return s;
        },
      });
      var i,
        r,
        o = n(65067),
        a = n(13534);
      let s = (e) => {
        let {
            target: t,
            tariffOfferName: n,
            serviceSessionId: i = "",
            isEnabled: r = !0,
          } = e,
          {
            paymentWidgetModal: {
              modal: s,
              setTarget: l,
              setTariffOfferName: u,
              setServiceSessionId: d,
            },
          } = (0, a.oR4)();
        return {
          open: (0, o.useCallback)(() => {
            r && (l(t), d(i), n && u(n), s.open());
          }, [u, l, d, t, n, i, s, r]),
          isOpened: s.isOpened,
        };
      };
      var l = n(22874),
        u = n(40892);
      ((i = r || (r = {})).IDLE = "idle"),
        (i.SUCCESS = "success"),
        (i.ERROR = "error");
      let d = l.V5.model({
        modal: u.KL,
        target: l.V5.string,
        tariffOfferName: l.V5.string,
        serviceSessionId: l.V5.string,
        status: l.V5.enumeration(Object.values(r)),
      })
        .views((e) => ({
          get isSuccess() {
            return e.status === r.SUCCESS;
          },
          get isError() {
            return e.status === r.ERROR;
          },
        }))
        .actions((e) => ({
          setTarget(t) {
            e.target = t;
          },
          setTariffOfferName(t) {
            e.tariffOfferName = t;
          },
          setServiceSessionId(t) {
            e.serviceSessionId = t;
          },
          setStatus(t) {
            e.status = t;
          },
          reset() {
            (e.target = ""),
              (e.tariffOfferName = ""),
              (e.serviceSessionId = ""),
              (e.status = r.IDLE);
          },
          onModalOpenChange(t) {
            e.modal.onOpenChange(t),
              e.status === r.SUCCESS && window.location.reload();
          },
        }));
      var c = n(75441),
        f = n(32358),
        m = n(62569),
        p = n(35846),
        v = n(55188),
        g = n(59506);
      let b = null,
        S = (e) => {
          let {
              className: t,
              target: n,
              serviceSessionId: i,
              tariffOfferName: r,
              onLoad: s,
              onSuccess: l,
              onError: u,
              onClose: d,
            } = e,
            f = (0, o.useRef)(null),
            { theme: m } = (0, a.FgM)(),
            { pwTools: p } = (0, a.N7D)(),
            v = (0, o.useCallback)(
              (e) => {
                "purchase_data" === e.type && (null == l || l());
              },
              [l],
            ),
            g = (0, o.useCallback)(() => {
              null == u || u();
            }, [u]),
            S = (0, o.useCallback)(() => {
              null == d || d();
            }, [d]),
            x = (0, o.useCallback)(
              (e) => {
                "loaded" === e.data.status && (null == s || s());
              },
              [s],
            ),
            V = (0, o.useCallback)(async () => {
              if (!p || !f.current) return;
              let {
                lang: e,
                mode: t,
                platform: o,
                widgetServiceName: s,
                authMethod: l,
              } = p.options;
              if (!b)
                try {
                  b = await p.loadManager();
                } catch (e) {
                  S();
                  return;
                }
              b.send({
                type: "init",
                options: {
                  lang: e,
                  mode: t,
                  platform: o,
                  widgetServiceName: s,
                  authMethod: l,
                  usePlusHost: !0,
                  theme: m,
                  onSuccess: v,
                  onError: g,
                  onReport: x,
                  onClose: S,
                },
              });
              let u = {
                  target: n,
                  eventSessionId: i,
                  tariffOfferName: r,
                  targetNode: f.current,
                  isTarifficator: !0,
                },
                d = (0, a.Phe)(a.wxR.CLID);
              null !== d && (u.clid = d), b.send({ type: "open", options: u });
            }, [m, p, n, r, i, v, g, x, S]);
          return (
            (0, o.useEffect)(
              () => (
                V(),
                () => {
                  null == b || b.send({ type: "close" });
                }
              ),
              [V],
            ),
            (0, c.jsx)("div", { className: t, ref: f })
          );
        };
      var x = n(66641),
        V = n.n(x);
      let _ = (0, m.Pi)(() => {
        let { paymentWidgetModal: e, advert: t } = (0, a.oR4)(),
          { state: n, toggleTrue: i } = (0, v.O)(!1),
          s = (0, a.SB9)();
        (0, o.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        );
        let l = (0, o.useCallback)(() => {
            e.setStatus(r.SUCCESS), s.track({ label: "WCvtCKnr84oYEPnRuvUo" });
          }, [e, s]),
          u = (0, o.useCallback)(() => {
            e.modal.close(), e.isSuccess && window.location.reload(), e.reset();
          }, [e]),
          d = (0, o.useCallback)(() => {
            e.setStatus(r.ERROR);
          }, [e]);
        return (0, c.jsx)(g.u, {
          open: e.modal.isOpened,
          size: "fitContent",
          placement: "center",
          showHeader: !1,
          withAnimation: !1,
          className: (0, f.W)(V().root, {
            [V().root_loaded]: n,
            [V().root_level_up]: t.isAdvertShown,
          }),
          ...(0, p.BA)(p.FK.paymentWidget.PAYMENT_WIDGET),
          contentClassName: V().content,
          overlayColor: "full",
          onOpenChange: e.onModalOpenChange,
          children: (0, c.jsx)(S, {
            className: V().widget,
            target: e.target,
            serviceSessionId: e.serviceSessionId,
            tariffOfferName: e.tariffOfferName,
            onLoad: i,
            onSuccess: l,
            onError: d,
            onClose: u,
          }),
        });
      });
    },
    87660: function (e, t, n) {
      "use strict";
      n.d(t, {
        z$: function () {
          return O;
        },
        CS: function () {
          return h;
        },
        Cv: function () {
          return k;
        },
        xU: function () {
          return f;
        },
        Pz: function () {
          return m;
        },
      });
      var i = n(98730),
        r = n(65067),
        o = n(48464),
        a = n(41450),
        s = n(99951),
        l = n(13534);
      let u = (e) => {
        let { onClick: t, offerElement: n, isEnabled: i } = e,
          { element: o } = n || {};
        (0, r.useEffect)(() => {
          if (o && i)
            return (
              o.addEventListener("click", t),
              () => o.removeEventListener("click", t)
            );
        }, [o, t, i]);
      };
      var d = n(20184);
      let c = (e) => {
          var t;
          let { onShow: n, offerElement: i, isEnabled: o = !0 } = e,
            a = (0, r.useRef)(null),
            { element: s, intersectionPropertyId: l } = i || {},
            u = (0, r.useMemo)(() => (s ? ((a.current = s), [a]) : []), [s]),
            { isIntersecting: c } =
              null !==
                (t = (0, d.S1)(u, { preflightCheck: !1 }, !s || !o)[
                  null != l ? l : ""
                ]) && void 0 !== t
                ? t
                : {};
          (0, r.useEffect)(() => {
            c && n();
          }, [c, n]);
        },
        f = (e) => {
          let {
              storeName: t,
              communicationId: n,
              campaignId: d,
              customTarget: f,
              offerElement: m,
              isEnabled: p = !0,
            } = e,
            v = (0, i.useRouter)(),
            {
              mainText: g,
              mainTextA11y: b,
              additionText: S,
              isShimmerVisible: x,
              isShimmerActive: V,
              target: _,
              tariffOffer: y,
              serviceSessionId: h,
              offerPosition: T,
              offersBatchId: C,
              offersPositionId: N,
              page: O,
              place: I,
            } = (0, a.F)(t, p, n, d, f),
            { open: P, isOpened: R } = (0, s.tP)({
              target: _,
              serviceSessionId: h,
              tariffOfferName: null == y ? void 0 : y.name,
              isEnabled: p,
            }),
            { offersShown: E, offersClicked: j } = (0, l.E_I)(p),
            B = (0, r.useCallback)(() => {
              p &&
                E({
                  serviceSessionId: h,
                  offersBatchId: C,
                  offersPositionId: N,
                  position: T,
                  page: O,
                  place: I,
                });
            }, [p, E, h, C, N, T, O, I]),
            k = (0, r.useCallback)(() => {
              p &&
                j({
                  serviceSessionId: h,
                  offersBatchId: C,
                  offersPositionId: N,
                  page: O,
                  place: I,
                  offerPosition: T,
                });
            }, [p, j, h, C, N, O, I, T]);
          c({ offerElement: m, isEnabled: p, onShow: B }),
            u({ offerElement: m, isEnabled: p, onClick: k });
          let A = (0, l.uK4)(),
            L = (0, r.useCallback)(() => {
              let e = A.get(l.xit),
                t = A.get(l.ArX);
              e.authorizationUrl &&
                (t.set(l.BUb.Offer, {
                  target: _,
                  serviceSessionId: h,
                  tariffOfferName: null == y ? void 0 : y.name,
                }),
                v.push(e.authorizationUrl));
            }, [A, v, _, h, y]);
          return {
            mainText: g,
            mainTextA11y: b,
            additionText: S,
            isShimmerVisible: x,
            isShimmerActive: V,
            trialPlanPeriod: (0, r.useMemo)(() => {
              var e, t, n, i;
              if (
                (null == y
                  ? void 0
                  : null === (t = y.plans) || void 0 === t
                    ? void 0
                    : null === (e = t[0]) || void 0 === e
                      ? void 0
                      : e.typename) === o.f.TrialPlan
              )
                return null == y
                  ? void 0
                  : null === (i = y.plans) || void 0 === i
                    ? void 0
                    : null === (n = i[0]) || void 0 === n
                      ? void 0
                      : n.period;
            }, [y]),
            openPaymentWidgetModal: P,
            offersShown: B,
            offersClicked: k,
            saveOfferAndAuthorize: L,
            isPaymentWidgetModalOpened: R,
          };
        },
        m = () => ({
          target: (0, l.Phe)("target"),
          communicationId: (0, l.Phe)("communication_id"),
          campaignId: (0, l.Phe)("campaign_id"),
        });
      var p = n(75441),
        v = n(62569),
        g = n(15937),
        b = n(93093),
        S = n(68208),
        x = n(59506),
        V = n(17392),
        _ = n(28676);
      let y = (e) => {
          let {
              className: t,
              mainTextClassName: n,
              additionTextClassName: i,
              onClick: o,
              isShimmerActive: a,
              isShimmerVisible: s,
              mainText: l,
              ariaLabel: u,
              additionText: d,
              forwardRef: c,
              ...f
            } = e,
            m = (0, r.useCallback)(
              (e) => {
                e.stopPropagation(), e.preventDefault(), null == o || o();
              },
              [o],
            );
          return s
            ? (0, p.jsx)(_.Shimmer, {
                className: t,
                isActive: a,
                radius: "xxxl",
              })
            : (0, p.jsxs)(S.Button, {
                ref: c,
                className: t,
                isBlock: !0,
                color: "plus",
                variant: "default",
                size: "l",
                radius: "xxxl",
                onClick: m,
                "aria-label": u,
                ...f,
                children: [
                  (0, p.jsx)(V.Caption, {
                    className: n,
                    variant: "div",
                    size: "l",
                    lineClamp: 1,
                    children: l,
                  }),
                  (0, p.jsx)(V.Caption, {
                    className: i,
                    variant: "div",
                    size: "xs",
                    lineClamp: 1,
                    children: d,
                  }),
                ],
              });
        },
        h = (0, r.forwardRef)((e, t) => (0, p.jsx)(y, { forwardRef: t, ...e }));
      var T = n(65265),
        C = n.n(T);
      let N = "buy-subscription-modal",
        O = (0, v.Pi)((e) => {
          let { modal: t } = e,
            n = (0, r.useRef)(null),
            o = (0, i.useRouter)(),
            a = (0, l.uK4)().get(l.xit),
            {
              openPaymentWidgetModal: s,
              isShimmerActive: u,
              isShimmerVisible: d,
              mainText: c,
              mainTextA11y: m,
              additionText: v,
              saveOfferAndAuthorize: _,
            } = f({
              storeName: "music",
              offerElement: { element: n.current, intersectionPropertyId: N },
            }),
            { user: y } = (0, l.oR4)(),
            T = (0, b.W)(() => {
              if ((t.close(), !y.isAuthorized)) {
                _();
                return;
              }
              s();
            }),
            O = (0, b.W)(() => {
              t.close(), a.authorizationUrl && o.push(a.authorizationUrl);
            });
          return (0, p.jsxs)(x.u, {
            className: C().root,
            headerClassName: C().header,
            contentClassName: C().content,
            size: "fitContent",
            placement: "default",
            open: t.isOpened,
            onOpenChange: t.onOpenChange,
            onClose: t.close,
            lockScroll: !0,
            children: [
              (0, p.jsx)(V.Caption, {
                className: C().heading,
                variant: "div",
                weight: "bold",
                children: (0, p.jsx)(g.Z, {
                  id: "buy-subscription.listen-without-restrictions",
                  values: { nbsp: "\xa0" },
                }),
              }),
              (0, p.jsxs)("div", {
                className: C().buttons,
                children: [
                  (0, p.jsx)(h, {
                    ref: n,
                    "data-intersection-property-id": N,
                    mainText: c,
                    ariaLabel: m,
                    additionText: v,
                    isShimmerActive: u,
                    isShimmerVisible: d,
                    onClick: T,
                    className: C().button,
                    mainTextClassName: C().buttonMainText,
                    additionTextClassName: C().buttonAdditionText,
                  }),
                  (0, p.jsx)(S.Button, {
                    onClick: O,
                    className: C().button,
                    isBlock: !0,
                    color: "secondary",
                    variant: "default",
                    size: "l",
                    radius: "xxxl",
                    children: (0, p.jsx)(V.Caption, {
                      className: C().buttonMainText,
                      variant: "span",
                      weight: "bold",
                      children: (0, p.jsx)(g.Z, {
                        id: "buy-subscription.already-in-plus",
                        values: { nbsp: "\xa0" },
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        });
      var I = n(9317),
        P = n(26669),
        R = n(14218),
        E = n(7086),
        j = n.n(E);
      let B = "PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID",
        k = (0, v.Pi)((e) => {
          let { ...t } = e,
            { user: n, experiments: i } = (0, l.oR4)(),
            [r, o] = (0, P.z)(),
            { formatMessage: a } = (0, I.Z)(),
            {
              mainText: s,
              isShimmerVisible: u,
              isShimmerActive: d,
              openPaymentWidgetModal: c,
              saveOfferAndAuthorize: m,
            } = f({
              storeName: "music",
              offerElement: { element: r, intersectionPropertyId: B },
            }),
            v = (0, R.V)(() =>
              !s &&
              i.checkExperiment(
                l.peG.WebNextUnauthorizedSubscriptionButton,
                "on",
              )
                ? a({ id: "authorization.start-button" })
                : s,
            ),
            g = (0, b.W)(() => {
              if (!n.isAuthorized) {
                m();
                return;
              }
              c();
            });
          return u
            ? (0, p.jsx)(_.Shimmer, {
                className: j().plusButtonShimmer,
                isActive: d,
                radius: "xxxl",
              })
            : (0, p.jsx)(S.Button, {
                className: j().root,
                isBlock: !0,
                radius: "xxxl",
                size: "m",
                color: "plus",
                onClick: g,
                ref: o,
                "data-intersection-property-id": B,
                ...t,
                children: (0, p.jsx)(V.Caption, {
                  variant: "div",
                  size: "s",
                  lineClamp: 2,
                  children: v,
                }),
              });
        });
      var A = n(69756),
        L = n(97141),
        w = n(87685),
        M = n.n(w);
      let U = "buy-subscription-button",
        z = (0, v.Pi)(() => {
          let e = (0, r.useRef)(null),
            { showBuySubscriptionModal: t } = (0, l.vLf)(),
            {
              mainText: n,
              mainTextA11y: i,
              isShimmerVisible: o,
              isShimmerActive: a,
            } = f({
              storeName: "music",
              offerElement: { element: e.current, intersectionPropertyId: U },
            }),
            s = (0, R.V)(() =>
              o
                ? (0, p.jsx)(L.AH, {
                    className: M().titleShimmerContainer,
                    isActive: a,
                    textClassName: M().titleShimmer,
                  })
                : (0, p.jsx)(V.Caption, {
                    className: M().title,
                    variant: "span",
                    size: "m",
                    weight: "bold",
                    "aria-label": i,
                    children: n,
                  }),
            );
          return (0, p.jsxs)("div", {
            ref: e,
            className: M().root,
            "data-intersection-property-id": U,
            children: [
              (0, p.jsxs)("div", {
                className: M().info,
                children: [
                  (0, p.jsxs)("div", {
                    className: M().titleContainer,
                    children: [
                      (0, p.jsx)(A.Icon, {
                        className: M().icon,
                        "aria-hidden": !0,
                        variant: "plusColor",
                      }),
                      s,
                    ],
                  }),
                  (0, p.jsx)(V.Caption, {
                    className: M().subtitle,
                    variant: "span",
                    size: "xs",
                    weight: "normal",
                    children: (0, p.jsx)(g.Z, {
                      id: "buy-subscription.music-and-films-and-other",
                    }),
                  }),
                ],
              }),
              (0, p.jsx)(S.Button, {
                color: "plus",
                variant: "default",
                size: "m",
                radius: "xxxl",
                onClick: t,
                children: (0, p.jsx)(V.Caption, {
                  className: M().buttonText,
                  variant: "span",
                  size: "m",
                  weight: "normal",
                  children: (0, p.jsx)(g.Z, {
                    id: "buy-subscription.activate",
                  }),
                }),
              }),
            ],
          });
        });
      (0, v.Pi)((e) => {
        let { children: t } = e,
          {
            paymentWidgetModal: n,
            modals: { buySubscriptionModal: i },
          } = (0, l.oR4)(),
          {
            shouldShowBuySubscriptionModal: o,
            showBuySubscriptionModal: a,
            hideBuySubscriptionModal: s,
          } = (0, l.vLf)();
        return ((0, r.useEffect)(() => {
          if (o) {
            if (n.modal.isOpened) {
              s();
              return;
            }
            a();
          }
        }, [s, n.modal.isOpened, o, a]),
        o)
          ? (0, p.jsxs)(p.Fragment, {
              children: [t, (0, p.jsx)(z, {}), (0, p.jsx)(O, { modal: i })],
            })
          : t;
      });
    },
    66641: function (e) {
      e.exports = {
        root: "PaymentWidgetModal_root__I6Hrp",
        root_loaded: "PaymentWidgetModal_root_loaded__Rzltj",
        root_level_up: "PaymentWidgetModal_root_level_up__pj52G",
        content: "PaymentWidgetModal_content__ifRry",
        widget: "PaymentWidgetModal_widget__cu_gr",
      };
    },
    87685: function (e) {
      e.exports = {
        root: "BuySubscriptionButton_root__BdquR",
        info: "BuySubscriptionButton_info__qBinu",
        subtitle: "BuySubscriptionButton_subtitle__Ni4VS",
        title: "BuySubscriptionButton_title__RG_OU",
        buttonText: "BuySubscriptionButton_buttonText__cmJMC",
        titleContainer: "BuySubscriptionButton_titleContainer__h7Lmt",
        titleShimmer: "BuySubscriptionButton_titleShimmer___hnah",
        titleShimmerContainer:
          "BuySubscriptionButton_titleShimmerContainer__Wv82r",
        icon: "BuySubscriptionButton_icon__0oNi_",
      };
    },
    65265: function (e) {
      e.exports = {
        root: "BuySubscriptionModal_root__5LvlX",
        content: "BuySubscriptionModal_content__v06Ju",
        heading: "BuySubscriptionModal_heading__07nBE",
        buttons: "BuySubscriptionModal_buttons__wSCRP",
        button: "BuySubscriptionModal_button__8m6Dx",
        buttonMainText: "BuySubscriptionModal_buttonMainText__pyjEc",
        buttonAdditionText: "BuySubscriptionModal_buttonAdditionText__rdKJn",
        header: "BuySubscriptionModal_header__ho5hr",
      };
    },
    7086: function (e) {
      e.exports = {
        root: "PlusNavbarButton_root__kdY04",
        plusButtonShimmer: "PlusNavbarButton_plusButtonShimmer__6t1go",
      };
    },
    48464: function (e, t, n) {
      "use strict";
      var i, r;
      n.d(t, {
        f: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).IntroPlan = "IntroPlan"),
        (r.IntroUntilPlan = "IntroUntilPlan"),
        (r.TrialPlan = "TrialPlan"),
        (r.TrialUntilPlan = "TrialUntilPlan");
    },
  },
]);
