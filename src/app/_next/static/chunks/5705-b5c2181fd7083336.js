(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5705],
  {
    90063: function (t, e, i) {
      Promise.resolve().then(i.t.bind(i, 74498, 23)),
        Promise.resolve().then(i.bind(i, 66807)),
        Promise.resolve().then(i.bind(i, 15898));
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
        v = i(17392),
        g = i(98375),
        f = i(84722),
        S = i(48530),
        _ = i(55188),
        x = i(9350),
        V = i(13534),
        b = i(57938),
        E = i.n(b);
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
      var w = i(84638),
        I = i(43398),
        N = i(59091),
        y = i(62942),
        R = i.n(y);
      let F = (t) => {
        var e;
        let { slide: i, isVisible: a } = t,
          o = (0, V.R$C)(),
          { from: l } = (0, V.MhG)({
            pageId: V.Rhz.TRAILER_OF_THE_YEAR,
            blockId: V.aUg.DEFAULT,
          }),
          { isActive: u } = (0, S.c6)();
        (0, V.PKp)(a);
        let d =
            null == o
              ? void 0
              : o.getState(V.jiA.TRAILER).queueState.entityList.value,
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
                : o.getState(V.jiA.TRAILER).playerState.status.value) !==
                g.FY.PLAYING),
          p =
            h &&
            (null == o
              ? void 0
              : null === (e = o.getState(V.jiA.TRAILER).currentContext.value) ||
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
                V.jiA.TRAILER,
              );
              return;
            }
            h &&
              (null == o ||
                o.playContext(
                  {
                    contextData: {
                      type: w.A.Various,
                      overrideContextType: I.Z.Other,
                      trailer: !0,
                      meta: { id: i.id },
                      from: l,
                    },
                    queueParams: { index: 0 },
                    entitiesData: i.entitiesData,
                    loadContextMeta: !1,
                  },
                  V.jiA.TRAILER,
                ));
          }, [l, h, p, i.entitiesData, i.id, o]),
          (0, n.jsx)(N.Paper, {
            className: (0, s.W)(R().root, { [R().root_isActive]: u }),
            radius: "l",
            tabIndex: 0,
            children: (0, n.jsx)(x.qU, { slide: i, isActive: u }),
          })
        );
      };
      var k = i(99719),
        j = i.n(k);
      let C = (0, a.Pi)((t) => {
        let { items: e } = t,
          {
            settings: { isMobile: i },
            slides: a,
          } = (0, V.oR4)(),
          { formatMessage: o } = (0, l.Z)(),
          { state: u, toggleTrue: d } = (0, _.O)(!1),
          c = (0, S.oc)(),
          [h, p] = (0, r.useState)(!0),
          [m, v] = (0, r.useState)(!1);
        (0, r.useEffect)(
          () => (
            d(),
            () => {
              null == c || c.slideTo(0), a.setActiveSlide(0);
            }
          ),
          [d, c, a],
        );
        let g = (0, r.useCallback)(
          (t) => {
            p(t.isBeginning), v(t.isEnd), a.setActiveSlide(t.activeIndex);
          },
          [a],
        );
        return (0, n.jsx)("div", {
          className: (0, s.W)(j().root, { [j().root_visible]: u }),
          children: (0, n.jsxs)(S.tq, {
            direction: "vertical",
            centeredSlides: !i,
            slidesPerView: "auto",
            spaceBetween: 16,
            className: j().container,
            keyboard: { enabled: !0 },
            modules: [f.N1, f.s5, f.Gk],
            onActiveIndexChange: g,
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
                    children: (0, n.jsx)(V.zAR, {
                      slidesType: (0, x.GF)(a.consumer),
                      slideId: t.id,
                      slidesCount: e.length,
                      slidePos: i + 1,
                      videoId: t.background.videoUrl,
                      artistId: a.artistId,
                      children: (0, n.jsx)(F, {
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
      var P = i(60575),
        T = i.n(P);
      function L(t, e) {
        return (t === V.Gui.RESOLVE || t === V.Gui.REJECT) && 0 === e.length;
      }
      let D = (0, a.Pi)((t) => {
        var e;
        let { slidesConsumer: i, artistId: a, podcastId: f } = t,
          { formatMessage: S } = (0, l.Z)(),
          {
            slides: _,
            experiments: b,
            sonataState: E,
            settings: A,
          } = (0, V.oR4)(),
          w = (0, V.R$C)(),
          I = b.checkExperiment(V.peG.WebNextPlayerBarBackgroundProgress, "on"),
          N =
            !(null === (e = A.browserInfo) || void 0 === e
              ? void 0
              : e.isMobile) || !A.browserInfo.isTouch,
          y = null == w ? void 0 : w.getState(V.jiA.TRAILER),
          R = (0, c.W)((t) => {
            I
              ? null == w || w.setExponentVolume(t, V.jiA.TRAILER)
              : null == w || w.setVolume(t, V.jiA.TRAILER);
          });
        (0, r.useEffect)(() => {
          R(1), _.setIsMuted(!1);
        }, [R, _, w]);
        let { moveBack: F } = (0, V.hL6)("/");
        (0, r.useEffect)(
          () => () => {
            _.resetUser(),
              _.resetArtist(),
              _.resetPodcast(),
              null == w || w.pause(V.jiA.TRAILER);
          },
          [_, w],
        ),
          b.checkExperiment(V.peG.WebNextRewind2024, "on") || (0, o.notFound)(),
          (0, V.bXU)((0, x.GF)(i)),
          (0, V.IOz)({
            isLoaded:
              _.userSlidesLoadingState === V.Gui.RESOLVE ||
              _.artistSlidesLoadingState === V.Gui.RESOLVE ||
              _.podcastSlidesLoadingState === V.Gui.RESOLVE,
            slidesType: (0, x.GF)(i),
          }),
          (0, r.useEffect)(() => {
            E.status === g.FY.PLAYING && (null == w || w.togglePause());
          }, [w, E.status]);
        let k = (0, r.useMemo)(() => {
          switch (i) {
            case x.R2.USER:
              return _.userItems;
            case x.R2.ARTIST:
              return _.artistItems;
            case x.R2.PODCAST:
              return _.podcastItems;
          }
        }, [_.artistItems, _.podcastItems, _.userItems, i]);
        (0, r.useEffect)(() => {
          if (b.checkExperiment(V.peG.WebNextRewind2024, "on"))
            switch (i) {
              case x.R2.USER:
                L(_.userSlidesLoadingState, k) && (0, o.notFound)();
                break;
              case x.R2.ARTIST:
                L(_.artistSlidesLoadingState, k) && (0, o.notFound)();
                break;
              case x.R2.PODCAST:
                L(_.podcastSlidesLoadingState, k) && (0, o.notFound)();
            }
          else (0, o.notFound)();
        }, [
          b,
          k,
          k.length,
          _.artistSlidesLoadingState,
          _.podcastSlidesLoadingState,
          _.userSlidesLoadingState,
          i,
        ]),
          (0, V.ZP4)(!0);
        let j = (0, r.useMemo)(() => {
            var t;
            let e;
            let i =
              null === (t = k[_.activeSlide]) || void 0 === t
                ? void 0
                : t.slideColor;
            if (i) {
              let { r: t, g: n, b: s } = (0, V.oo7)(i);
              e = "rgba(".concat(t, ", ").concat(n, ", ").concat(s, ", 0.5)");
            }
            return {
              "--card-color-enabled_variant": i,
              "--card-color-enabled": e,
              "--logo-color": i,
            };
          }, [k, _.activeSlide]),
          P = (0, r.useCallback)(() => {
            _.toggleMute(),
              0 !==
              (I
                ? null == y
                  ? void 0
                  : y.playerState.exponentVolume.value
                : null == y
                  ? void 0
                  : y.playerState.volume.value)
                ? R(0)
                : R(1);
          }, [
            I,
            R,
            _,
            null == y ? void 0 : y.playerState.exponentVolume.value,
            null == y ? void 0 : y.playerState.volume.value,
          ]),
          D = _.isMuted ? "volumeOff" : "volume",
          B = S(
            _.isMuted
              ? { id: "player-actions.volume-off" }
              : { id: "player-actions.volume-on" },
          );
        switch (i) {
          case x.R2.USER:
            _.userSlidesLoadingState === V.Gui.IDLE &&
              (0, r.use)(_.getUserSlides());
            break;
          case x.R2.ARTIST:
            a &&
              _.artistSlidesLoadingState === V.Gui.IDLE &&
              (0, r.use)(_.getArtistSlides({ artistId: a }));
            break;
          case x.R2.PODCAST:
            f &&
              _.podcastSlidesLoadingState === V.Gui.IDLE &&
              (0, r.use)(_.getPodcastSlides({ podcastId: Number(f) }));
        }
        return (0, n.jsxs)("div", {
          className: T().root,
          style: j,
          ...(0, d.BA)(d.Br.slides.SLIDES_PAGE),
          children: [
            (0, n.jsx)(m.y, {
              children: (0, n.jsx)(v.Heading, {
                variant: "h1",
                children: (0, n.jsx)(u.Z, { id: "page.results-of-the-year" }),
              }),
            }),
            (0, n.jsxs)("header", {
              className: T().header,
              children: [
                (null == k ? void 0 : k.length) > 0 &&
                  (0, n.jsxs)("div", {
                    className: T().slidesResult,
                    children: [
                      (0, n.jsx)(v.Caption, {
                        variant: "span",
                        className: T().counterActiveItem,
                        type: "text",
                        size: "l",
                        weight: "medium",
                        children: Number(_.activeSlide) + 1,
                      }),
                      (0, n.jsx)(v.Caption, {
                        variant: "span",
                        type: "text",
                        size: "l",
                        weight: "medium",
                        className: T().counterItem,
                        children: "/",
                      }),
                      (0, n.jsx)(v.Caption, {
                        variant: "span",
                        type: "text",
                        size: "l",
                        weight: "medium",
                        className: T().counterItem,
                        children: null == k ? void 0 : k.length,
                      }),
                    ],
                  }),
                N &&
                  (0, n.jsx)(h.Button, {
                    "aria-label": B,
                    variant: "text",
                    radius: "round",
                    size: "xxxs",
                    icon: (0, n.jsx)(p.Icon, {
                      size: "xs",
                      className: T().icon,
                      variant: D,
                    }),
                    onClick: P,
                    className: (0, s.W)(T().button, T().volumeButton),
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
                  onClick: F,
                  className: (0, s.W)(T().button, T().desktopBackButton),
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
                  onClick: F,
                  className: (0, s.W)(T().button, T().mobileBackButton),
                  role: "link",
                }),
              ],
            }),
            (0, n.jsx)(C, { items: k }),
          ],
        });
      });
    },
    15898: function (t, e, i) {
      "use strict";
      i.d(e, {
        NotFound: function () {
          return m;
        },
      });
      var n = i(75441),
        s = i(32358),
        a = i(62569),
        o = i(15937),
        r = i(68208),
        l = i(69756),
        u = i(17392),
        d = i(13534),
        c = i(97141),
        h = i(35129),
        p = i.n(h);
      let m = (0, a.Pi)((t) => {
        let { className: e } = t,
          { contentRef: i } = (0, d.$Y6)(),
          a = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, n.jsxs)("div", {
            className: (0, s.W)(p().root, { [p().root_desktop]: !i }, e),
            children: [
              (0, n.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: p().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: p().content,
                children: [
                  (0, n.jsx)(l.Icon, {
                    className: p().icon,
                    variant: "musicLogo",
                  }),
                  (0, n.jsx)(u.Heading, {
                    className: (0, s.W)(p().title, p().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(u.Caption, {
                    className: (0, s.W)(p().text, p().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(r.Button, {
                    onClick: a,
                    className: p().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, n.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, n.jsx)(o.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
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
]);
