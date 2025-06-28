(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3954],
  {
    98167: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 31354));
    },
    31663: function (t, e, i) {
      "use strict";
      i.d(e, {
        I: function () {
          return s;
        },
      });
      var n = function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var s in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
              return t;
            }).apply(this, arguments);
        },
        s = (function () {
          function t(t, e, i) {
            var s = this;
            (this.endVal = e),
              (this.options = i),
              (this.version = "2.8.1"),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1,
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ""),
              (this.startVal = 0),
              (this.paused = !0),
              (this.once = !1),
              (this.count = function (t) {
                s.startTime || (s.startTime = t);
                var e = t - s.startTime;
                (s.remaining = s.duration - e),
                  s.useEasing
                    ? s.countDown
                      ? (s.frameVal =
                          s.startVal -
                          s.easingFn(e, 0, s.startVal - s.endVal, s.duration))
                      : (s.frameVal = s.easingFn(
                          e,
                          s.startVal,
                          s.endVal - s.startVal,
                          s.duration,
                        ))
                    : (s.frameVal =
                        s.startVal +
                        (s.endVal - s.startVal) * (e / s.duration));
                var i = s.countDown
                  ? s.frameVal < s.endVal
                  : s.frameVal > s.endVal;
                (s.frameVal = i ? s.endVal : s.frameVal),
                  (s.frameVal = Number(
                    s.frameVal.toFixed(s.options.decimalPlaces),
                  )),
                  s.printValue(s.frameVal),
                  e < s.duration
                    ? (s.rAF = requestAnimationFrame(s.count))
                    : null !== s.finalEndVal
                      ? s.update(s.finalEndVal)
                      : s.options.onCompleteCallback &&
                        s.options.onCompleteCallback();
              }),
              (this.formatNumber = function (t) {
                var e,
                  i,
                  n,
                  a = (Math.abs(t).toFixed(s.options.decimalPlaces) + "").split(
                    ".",
                  );
                if (
                  ((e = a[0]),
                  (i = a.length > 1 ? s.options.decimal + a[1] : ""),
                  s.options.useGrouping)
                ) {
                  n = "";
                  for (var o = 3, r = 0, l = 0, u = e.length; l < u; ++l)
                    s.options.useIndianSeparators &&
                      4 === l &&
                      ((o = 2), (r = 1)),
                      0 !== l && r % o == 0 && (n = s.options.separator + n),
                      r++,
                      (n = e[u - l - 1] + n);
                  e = n;
                }
                return (
                  s.options.numerals &&
                    s.options.numerals.length &&
                    ((e = e.replace(/[0-9]/g, function (t) {
                      return s.options.numerals[+t];
                    })),
                    (i = i.replace(/[0-9]/g, function (t) {
                      return s.options.numerals[+t];
                    }))),
                  (t < 0 ? "-" : "") +
                    s.options.prefix +
                    e +
                    i +
                    s.options.suffix
                );
              }),
              (this.easeOutExpo = function (t, e, i, n) {
                return (i * (1 - Math.pow(2, (-10 * t) / n)) * 1024) / 1023 + e;
              }),
              (this.options = n(n({}, this.defaults), i)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(e)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces,
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              "" === this.options.separator && (this.options.useGrouping = !1),
              (this.el = "string" == typeof t ? document.getElementById(t) : t),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = "[CountUp] target is null or undefined"),
              "undefined" != typeof window &&
                this.options.enableScrollSpy &&
                (this.error
                  ? console.error(this.error, t)
                  : ((window.onScrollFns = window.onScrollFns || []),
                    window.onScrollFns.push(function () {
                      return s.handleScroll(s);
                    }),
                    (window.onscroll = function () {
                      window.onScrollFns.forEach(function (t) {
                        return t();
                      });
                    }),
                    this.handleScroll(this)));
          }
          return (
            (t.prototype.handleScroll = function (t) {
              if (t && window && !t.once) {
                var e = window.innerHeight + window.scrollY,
                  i = t.el.getBoundingClientRect(),
                  n = i.top + window.pageYOffset,
                  s = i.top + i.height + window.pageYOffset;
                s < e && s > window.scrollY && t.paused
                  ? ((t.paused = !1),
                    setTimeout(function () {
                      return t.start();
                    }, t.options.scrollSpyDelay),
                    t.options.scrollSpyOnce && (t.once = !0))
                  : (window.scrollY > s || n > e) && !t.paused && t.reset();
              }
            }),
            (t.prototype.determineDirectionAndSmartEasing = function () {
              var t = this.finalEndVal ? this.finalEndVal : this.endVal;
              if (
                ((this.countDown = this.startVal > t),
                Math.abs(t - this.startVal) >
                  this.options.smartEasingThreshold && this.options.useEasing)
              ) {
                this.finalEndVal = t;
                var e = this.countDown ? 1 : -1;
                (this.endVal = t + e * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = t), (this.finalEndVal = null);
              null !== this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (t.prototype.start = function (t) {
              this.error ||
                (this.options.onStartCallback && this.options.onStartCallback(),
                t && (this.options.onCompleteCallback = t),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (t.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (t.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (t.prototype.update = function (t) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(t)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  null == this.finalEndVal && this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (t.prototype.printValue = function (t) {
              var e;
              if (this.el) {
                var i = this.formattingFn(t);
                (
                  null === (e = this.options.plugin) || void 0 === e
                    ? void 0
                    : e.render
                )
                  ? this.options.plugin.render(this.el, i)
                  : "INPUT" === this.el.tagName
                    ? (this.el.value = i)
                    : "text" === this.el.tagName || "tspan" === this.el.tagName
                      ? (this.el.textContent = i)
                      : (this.el.innerHTML = i);
              }
            }),
            (t.prototype.ensureNumber = function (t) {
              return "number" == typeof t && !isNaN(t);
            }),
            (t.prototype.validateValue = function (t) {
              var e = Number(t);
              return this.ensureNumber(e)
                ? e
                : ((this.error =
                    "[CountUp] invalid start or end value: ".concat(t)),
                  null);
            }),
            (t.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            t
          );
        })();
    },
    34139: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = i(54937);
      i(75441), i(65067);
      let s = n._(i(36196));
      function a(t, e) {
        var i;
        let n = {
          loading: (t) => {
            let { error: e, isLoading: i, pastDelay: n } = t;
            return null;
          },
        };
        "function" == typeof t && (n.loader = t);
        let a = { ...n, ...e };
        return (0, s.default)({
          ...a,
          modules: null == (i = a.loadableGenerated) ? void 0 : i.modules,
        });
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    36196: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = i(75441),
        s = i(65067),
        a = i(75603),
        o = i(758);
      function r(t) {
        return { default: t && "default" in t ? t.default : t };
      }
      let l = {
          loader: () => Promise.resolve(r(() => null)),
          loading: null,
          ssr: !0,
        },
        u = function (t) {
          let e = { ...l, ...t },
            i = (0, s.lazy)(() => e.loader().then(r)),
            u = e.loading;
          function d(t) {
            let r = u
                ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = e.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, n.jsx)(o.PreloadCss, { moduleIds: e.modules })
                        : null,
                      (0, n.jsx)(i, { ...t }),
                    ],
                  })
                : (0, n.jsx)(a.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(i, { ...t }),
                  });
            return (0, n.jsx)(s.Suspense, { fallback: r, children: l });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    31354: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i(75441),
        s = i(98730),
        a = i(25061),
        o = i(41078),
        r = i(9350);
      e.default = () => {
        let t = (0, s.useSearchParams)().get("podcastId");
        return (
          t || (0, s.notFound)(),
          (0, n.jsx)(a.m6, {
            withRedirectToMainPage: !1,
            children: (0, n.jsx)(o.M, {
              slidesConsumer: r.R2.PODCAST,
              podcastId: t,
            }),
          })
        );
      };
    },
    25061: function (t, e, i) {
      "use strict";
      i.d(e, {
        m6: function () {
          return n.WithAuth;
        },
      });
      var n = i(71777);
      i(38743), i(76655), i(34346), i(54541), i(81623);
      var s = i(34139);
      i.n(s)().default(
        async () => Promise.all([i.e(9876), i.e(1249)]).then(i.bind(i, 81249)),
        { ssr: !1 },
      );
    },
    41078: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return n.SlidesPage;
        },
      }),
        i(75441),
        i(35551),
        i(74498);
      var n = i(66807);
    },
    66807: function (t, e, i) {
      "use strict";
      i.d(e, {
        SlidesPage: function () {
          return D;
        },
      });
      var n = i(75441),
        s = i(32358),
        a = i(62569),
        o = i(98730),
        r = i(65067),
        l = i(9317),
        u = i(15937),
        d = i(35846),
        c = i(93093),
        h = i(68208),
        p = i(69756),
        m = i(67126),
        f = i(17392),
        v = i(98375),
        g = i(84722),
        S = i(48530),
        x = i(55188),
        _ = i(9350),
        b = i(13534),
        V = i(57938),
        E = i.n(V);
      let A = (t) => {
        let { isFirstSlide: e, isLastSlide: i, style: s } = t,
          a = (0, S.oc)(),
          { formatMessage: o } = (0, l.Z)(),
          u = (0, r.useCallback)(() => {
            a.slidePrev();
          }, [a]),
          d = (0, r.useCallback)(() => {
            a.slideNext();
          }, [a]);
        return (0, n.jsxs)("div", {
          className: E().root,
          style: s,
          children: [
            (0, n.jsx)(h.Button, {
              variant: "outline",
              iconClassName: E().top,
              size: "m",
              radius: "round",
              onClick: u,
              disabled: e,
              icon: (0, n.jsx)(p.Icon, { variant: "arrowDown" }, "prevIcon"),
              withRipple: !1,
              "aria-label": o({ id: "slider.prev-slide" }),
              className: E().control,
            }),
            (0, n.jsx)(h.Button, {
              variant: "outline",
              size: "m",
              radius: "round",
              onClick: d,
              disabled: i,
              icon: (0, n.jsx)(p.Icon, { variant: "arrowDown" }, "nextIcon"),
              withRipple: !1,
              "aria-label": o({ id: "slider.next-slide" }),
              className: E().control,
            }),
          ],
        });
      };
      var y = i(84638),
        I = i(43398),
        w = i(59091),
        R = i(62942),
        j = i.n(R);
      let P = (t) => {
        var e;
        let { slide: i, isVisible: a } = t,
          o = (0, b.R$C)(),
          { from: l } = (0, b.MhG)({
            pageId: b.Rhz.TRAILER_OF_THE_YEAR,
            blockId: b.aUg.DEFAULT,
          }),
          { isActive: u } = (0, S.c6)();
        (0, b.PKp)(a);
        let d =
            null == o
              ? void 0
              : o.getState(b.jiA.TRAILER).queueState.entityList.value,
          c = (0, r.useMemo)(
            () =>
              i.entitiesData &&
              d &&
              i.entitiesData.every((t, e) => {
                var i;
                return (
                  t.meta.id ===
                  (null === (i = d[e]) || void 0 === i
                    ? void 0
                    : i.entity.data.meta.id)
                );
              }),
            [i.entitiesData, d],
          ),
          h =
            a &&
            i.hasTrailer &&
            (!c ||
              (null == o
                ? void 0
                : o.getState(b.jiA.TRAILER).playerState.status.value) !==
                v.FY.PLAYING),
          p =
            h &&
            (null == o
              ? void 0
              : null === (e = o.getState(b.jiA.TRAILER).currentContext.value) ||
                  void 0 === e
                ? void 0
                : e.data.meta.id) === i.id;
        return (
          (0, r.useEffect)(() => {
            if (p) {
              o.restartContext(
                {
                  playAfterRestart: !0,
                  queueParams: { index: 0 },
                  entitiesData: i.entitiesData,
                },
                b.jiA.TRAILER,
              );
              return;
            }
            h &&
              (null == o ||
                o.playContext(
                  {
                    contextData: {
                      type: y.A.Various,
                      overrideContextType: I.Z.Other,
                      trailer: !0,
                      meta: { id: i.id },
                      from: l,
                    },
                    queueParams: { index: 0 },
                    entitiesData: i.entitiesData,
                    loadContextMeta: !1,
                  },
                  b.jiA.TRAILER,
                ));
          }, [l, h, p, i.entitiesData, i.id, o]),
          (0, n.jsx)(w.Paper, {
            className: (0, s.W)(j().root, { [j().root_isActive]: u }),
            radius: "l",
            tabIndex: 0,
            children: (0, n.jsx)(_.qU, { slide: i, isActive: u }),
          })
        );
      };
      var C = i(99719),
        k = i.n(C);
      let F = (0, a.Pi)((t) => {
        let { items: e } = t,
          {
            settings: { isMobile: i },
            slides: a,
          } = (0, b.oR4)(),
          { formatMessage: o } = (0, l.Z)(),
          { state: u, toggleTrue: d } = (0, x.O)(!1),
          c = (0, S.oc)(),
          [h, p] = (0, r.useState)(!0),
          [m, f] = (0, r.useState)(!1);
        (0, r.useEffect)(
          () => (
            d(),
            () => {
              null == c || c.slideTo(0), a.setActiveSlide(0);
            }
          ),
          [d, c, a],
        );
        let v = (0, r.useCallback)(
          (t) => {
            p(t.isBeginning), f(t.isEnd), a.setActiveSlide(t.activeIndex);
          },
          [a],
        );
        return (0, n.jsx)("div", {
          className: (0, s.W)(k().root, { [k().root_visible]: u }),
          children: (0, n.jsxs)(S.tq, {
            direction: "vertical",
            centeredSlides: !i,
            slidesPerView: "auto",
            spaceBetween: 16,
            className: k().container,
            keyboard: { enabled: !0 },
            modules: [g.N1, g.s5, g.Gk],
            onActiveIndexChange: v,
            a11y: {
              enabled: !0,
              containerMessage: o({ id: "page.results-of-the-year" }),
            },
            mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
            children: [
              e.map((t, i) =>
                (0, n.jsx)(
                  S.o5,
                  {
                    children: (0, n.jsx)(b.zAR, {
                      slidesType: (0, _.GF)(a.consumer),
                      slideId: t.id,
                      slidesCount: e.length,
                      slidePos: i + 1,
                      videoId: t.background.videoUrl,
                      artistId: a.artistId,
                      children: (0, n.jsx)(P, {
                        isVisible: a.activeSlide === i,
                        slide: t,
                      }),
                    }),
                  },
                  t.id,
                ),
              ),
              (0, n.jsx)(A, { isFirstSlide: h, isLastSlide: m }),
            ],
          }),
        });
      });
      var T = i(60575),
        N = i.n(T);
      function L(t, e) {
        return (t === b.Gui.RESOLVE || t === b.Gui.REJECT) && 0 === e.length;
      }
      let D = (0, a.Pi)((t) => {
        var e;
        let { slidesConsumer: i, artistId: a, podcastId: g } = t,
          { formatMessage: S } = (0, l.Z)(),
          {
            slides: x,
            experiments: V,
            sonataState: E,
            settings: A,
          } = (0, b.oR4)(),
          y = (0, b.R$C)(),
          I = V.checkExperiment(b.peG.WebNextPlayerBarBackgroundProgress, "on"),
          w =
            !(null === (e = A.browserInfo) || void 0 === e
              ? void 0
              : e.isMobile) || !A.browserInfo.isTouch,
          R = null == y ? void 0 : y.getState(b.jiA.TRAILER),
          j = (0, c.W)((t) => {
            I
              ? null == y || y.setExponentVolume(t, b.jiA.TRAILER)
              : null == y || y.setVolume(t, b.jiA.TRAILER);
          });
        (0, r.useEffect)(() => {
          j(1), x.setIsMuted(!1);
        }, [j, x, y]);
        let { moveBack: P } = (0, b.hL6)("/");
        (0, r.useEffect)(
          () => () => {
            x.resetUser(),
              x.resetArtist(),
              x.resetPodcast(),
              null == y || y.pause(b.jiA.TRAILER);
          },
          [x, y],
        ),
          V.checkExperiment(b.peG.WebNextRewind2024, "on") || (0, o.notFound)(),
          (0, b.bXU)((0, _.GF)(i)),
          (0, b.IOz)({
            isLoaded:
              x.userSlidesLoadingState === b.Gui.RESOLVE ||
              x.artistSlidesLoadingState === b.Gui.RESOLVE ||
              x.podcastSlidesLoadingState === b.Gui.RESOLVE,
            slidesType: (0, _.GF)(i),
          }),
          (0, r.useEffect)(() => {
            E.status === v.FY.PLAYING && (null == y || y.togglePause());
          }, [y, E.status]);
        let C = (0, r.useMemo)(() => {
          switch (i) {
            case _.R2.USER:
              return x.userItems;
            case _.R2.ARTIST:
              return x.artistItems;
            case _.R2.PODCAST:
              return x.podcastItems;
          }
        }, [x.artistItems, x.podcastItems, x.userItems, i]);
        (0, r.useEffect)(() => {
          if (V.checkExperiment(b.peG.WebNextRewind2024, "on"))
            switch (i) {
              case _.R2.USER:
                L(x.userSlidesLoadingState, C) && (0, o.notFound)();
                break;
              case _.R2.ARTIST:
                L(x.artistSlidesLoadingState, C) && (0, o.notFound)();
                break;
              case _.R2.PODCAST:
                L(x.podcastSlidesLoadingState, C) && (0, o.notFound)();
            }
          else (0, o.notFound)();
        }, [
          V,
          C,
          C.length,
          x.artistSlidesLoadingState,
          x.podcastSlidesLoadingState,
          x.userSlidesLoadingState,
          i,
        ]),
          (0, b.ZP4)(!0);
        let k = (0, r.useMemo)(() => {
            var t;
            let e;
            let i =
              null === (t = C[x.activeSlide]) || void 0 === t
                ? void 0
                : t.slideColor;
            if (i) {
              let { r: t, g: n, b: s } = (0, b.oo7)(i);
              e = "rgba(".concat(t, ", ").concat(n, ", ").concat(s, ", 0.5)");
            }
            return {
              "--card-color-enabled_variant": i,
              "--card-color-enabled": e,
              "--logo-color": i,
            };
          }, [C, x.activeSlide]),
          T = (0, r.useCallback)(() => {
            x.toggleMute(),
              0 !==
              (I
                ? null == R
                  ? void 0
                  : R.playerState.exponentVolume.value
                : null == R
                  ? void 0
                  : R.playerState.volume.value)
                ? j(0)
                : j(1);
          }, [
            I,
            j,
            x,
            null == R ? void 0 : R.playerState.exponentVolume.value,
            null == R ? void 0 : R.playerState.volume.value,
          ]),
          D = x.isMuted ? "volumeOff" : "volume",
          B = S(
            x.isMuted
              ? { id: "player-actions.volume-off" }
              : { id: "player-actions.volume-on" },
          );
        switch (i) {
          case _.R2.USER:
            x.userSlidesLoadingState === b.Gui.IDLE &&
              (0, r.use)(x.getUserSlides());
            break;
          case _.R2.ARTIST:
            a &&
              x.artistSlidesLoadingState === b.Gui.IDLE &&
              (0, r.use)(x.getArtistSlides({ artistId: a }));
            break;
          case _.R2.PODCAST:
            g &&
              x.podcastSlidesLoadingState === b.Gui.IDLE &&
              (0, r.use)(x.getPodcastSlides({ podcastId: Number(g) }));
        }
        return (0, n.jsxs)("div", {
          className: N().root,
          style: k,
          ...(0, d.BA)(d.Br.slides.SLIDES_PAGE),
          children: [
            (0, n.jsx)(m.y, {
              children: (0, n.jsx)(f.Heading, {
                variant: "h1",
                children: (0, n.jsx)(u.Z, { id: "page.results-of-the-year" }),
              }),
            }),
            (0, n.jsxs)("header", {
              className: N().header,
              children: [
                (null == C ? void 0 : C.length) > 0 &&
                  (0, n.jsxs)("div", {
                    className: N().slidesResult,
                    children: [
                      (0, n.jsx)(f.Caption, {
                        variant: "span",
                        className: N().counterActiveItem,
                        type: "text",
                        size: "l",
                        weight: "medium",
                        children: Number(x.activeSlide) + 1,
                      }),
                      (0, n.jsx)(f.Caption, {
                        variant: "span",
                        type: "text",
                        size: "l",
                        weight: "medium",
                        className: N().counterItem,
                        children: "/",
                      }),
                      (0, n.jsx)(f.Caption, {
                        variant: "span",
                        type: "text",
                        size: "l",
                        weight: "medium",
                        className: N().counterItem,
                        children: null == C ? void 0 : C.length,
                      }),
                    ],
                  }),
                w &&
                  (0, n.jsx)(h.Button, {
                    "aria-label": B,
                    variant: "text",
                    radius: "round",
                    size: "xxxs",
                    icon: (0, n.jsx)(p.Icon, {
                      size: "xs",
                      className: N().icon,
                      variant: D,
                    }),
                    onClick: T,
                    className: (0, s.W)(N().button, N().volumeButton),
                    withRipple: !1,
                  }),
                (0, n.jsx)(h.Button, {
                  "aria-label": S({ id: "navigation.go-back" }),
                  radius: "round",
                  size: "xs",
                  icon: (0, n.jsx)(
                    p.Icon,
                    { size: "xs", variant: "close" },
                    "handleBackIcon",
                  ),
                  onClick: P,
                  className: (0, s.W)(N().button, N().desktopBackButton),
                  role: "link",
                }),
                (0, n.jsx)(h.Button, {
                  variant: "text",
                  "aria-label": S({ id: "navigation.go-back" }),
                  radius: "round",
                  size: "xs",
                  icon: (0, n.jsx)(
                    p.Icon,
                    { size: "xs", variant: "arrowLeft" },
                    "handleBackIcon",
                  ),
                  onClick: P,
                  className: (0, s.W)(N().button, N().mobileBackButton),
                  role: "link",
                }),
              ],
            }),
            (0, n.jsx)(F, { items: C }),
          ],
        });
      });
    },
    35551: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = i(15898);
    },
    74498: function (t) {
      t.exports = {
        root: "SlidesNotFoundPage_root__bmv9K",
        important: "SlidesNotFoundPage_important__VELWc",
      };
    },
    60575: function (t) {
      t.exports = {
        root: "SlidesPage_root__URM_B",
        header: "SlidesPage_header__pnBx9",
        slidesResult: "SlidesPage_slidesResult__neqIE",
        counterActiveItem: "SlidesPage_counterActiveItem__Y_K9I",
        counterItem: "SlidesPage_counterItem__3CqZW",
        button: "SlidesPage_button__s9V8y",
        volumeButton: "SlidesPage_volumeButton__HfFCM",
        desktopBackButton: "SlidesPage_desktopBackButton__ae1Uj",
        mobileBackButton: "SlidesPage_mobileBackButton__MwOgB",
      };
    },
    57938: function (t) {
      t.exports = {
        root: "SliderControls_root__v_ofj",
        control: "SliderControls_control__E3joM",
        top: "SliderControls_top__HN5gZ",
      };
    },
    62942: function (t) {
      t.exports = {
        root: "Slide_root__x5JEM",
        root_isActive: "Slide_root_isActive__CKUSv",
      };
    },
    99719: function (t) {
      t.exports = {
        root: "Slider_root__T7EOX",
        root_visible: "Slider_root_visible__b3Kqx",
        fade: "Slider_fade__V7FGV",
        container: "Slider_container__tZ0VH",
      };
    },
    43398: function (t, e, i) {
      "use strict";
      var n, s;
      i.d(e, {
        Z: function () {
          return n;
        },
      }),
        ((s = n || (n = {})).Album = "album"),
        (s.Artist = "artist"),
        (s.Playlist = "playlist"),
        (s.Radio = "radio"),
        (s.Other = "other"),
        (s.Search = "search");
    },
    81046: function (t, e, i) {
      "use strict";
      var n, s;
      i.d(e, {
        A: function () {
          return n;
        },
      }),
        ((s = n || (n = {})).Music = "music"),
        (s.VibeTrack = "vibeTrack"),
        (s.Generative = "generative"),
        (s.Unknown = "unknown"),
        (s.SmartPreview = "smartPreview"),
        (s.Clip = "clip");
    },
  },
  function (t) {
    t.O(
      0,
      [
        5970, 9876, 8580, 3806, 8563, 2532, 6947, 909, 826, 7138, 5453, 7873,
        9282, 317, 7627, 1084, 7141, 892, 7294, 9088, 7660, 8737, 5941, 9350,
        7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 98167));
      },
    ),
      (_N_E = t.O());
  },
]);
