(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [202],
    {
        4585: (t, e, i) => {
            "use strict";
            i.d(e, { T: () => a });
            var s = function () {
                    return (s =
                        Object.assign ||
                        function (t) {
                            for (var e, i = 1, s = arguments.length; i < s; i++)
                                for (var a in (e = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        a,
                                    ) && (t[a] = e[a]);
                            return t;
                        }).apply(this, arguments);
                },
                a = (function () {
                    function t(t, e, i) {
                        var a = this;
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
                                a.startTime || (a.startTime = t);
                                var e = t - a.startTime;
                                (a.remaining = a.duration - e),
                                    a.useEasing
                                        ? a.countDown
                                            ? (a.frameVal =
                                                  a.startVal -
                                                  a.easingFn(
                                                      e,
                                                      0,
                                                      a.startVal - a.endVal,
                                                      a.duration,
                                                  ))
                                            : (a.frameVal = a.easingFn(
                                                  e,
                                                  a.startVal,
                                                  a.endVal - a.startVal,
                                                  a.duration,
                                              ))
                                        : (a.frameVal =
                                              a.startVal +
                                              (a.endVal - a.startVal) *
                                                  (e / a.duration));
                                var i = a.countDown
                                    ? a.frameVal < a.endVal
                                    : a.frameVal > a.endVal;
                                (a.frameVal = i ? a.endVal : a.frameVal),
                                    (a.frameVal = Number(
                                        a.frameVal.toFixed(
                                            a.options.decimalPlaces,
                                        ),
                                    )),
                                    a.printValue(a.frameVal),
                                    e < a.duration
                                        ? (a.rAF = requestAnimationFrame(
                                              a.count,
                                          ))
                                        : null !== a.finalEndVal
                                          ? a.update(a.finalEndVal)
                                          : a.options.onCompleteCallback &&
                                            a.options.onCompleteCallback();
                            }),
                            (this.formatNumber = function (t) {
                                var e,
                                    i,
                                    s,
                                    n = (
                                        Math.abs(t).toFixed(
                                            a.options.decimalPlaces,
                                        ) + ""
                                    ).split(".");
                                if (
                                    ((e = n[0]),
                                    (i =
                                        n.length > 1
                                            ? a.options.decimal + n[1]
                                            : ""),
                                    a.options.useGrouping)
                                ) {
                                    s = "";
                                    for (
                                        var o = 3, r = 0, l = 0, d = e.length;
                                        l < d;
                                        ++l
                                    )
                                        a.options.useIndianSeparators &&
                                            4 === l &&
                                            ((o = 2), (r = 1)),
                                            0 !== l &&
                                                r % o == 0 &&
                                                (s = a.options.separator + s),
                                            r++,
                                            (s = e[d - l - 1] + s);
                                    e = s;
                                }
                                return (
                                    a.options.numerals &&
                                        a.options.numerals.length &&
                                        ((e = e.replace(/[0-9]/g, function (t) {
                                            return a.options.numerals[+t];
                                        })),
                                        (i = i.replace(/[0-9]/g, function (t) {
                                            return a.options.numerals[+t];
                                        }))),
                                    (t < 0 ? "-" : "") +
                                        a.options.prefix +
                                        e +
                                        i +
                                        a.options.suffix
                                );
                            }),
                            (this.easeOutExpo = function (t, e, i, s) {
                                return (
                                    (i *
                                        (1 - Math.pow(2, (-10 * t) / s)) *
                                        1024) /
                                        1023 +
                                    e
                                );
                            }),
                            (this.options = s(s({}, this.defaults), i)),
                            (this.formattingFn = this.options.formattingFn
                                ? this.options.formattingFn
                                : this.formatNumber),
                            (this.easingFn = this.options.easingFn
                                ? this.options.easingFn
                                : this.easeOutExpo),
                            (this.startVal = this.validateValue(
                                this.options.startVal,
                            )),
                            (this.frameVal = this.startVal),
                            (this.endVal = this.validateValue(e)),
                            (this.options.decimalPlaces = Math.max(
                                this.options.decimalPlaces,
                            )),
                            this.resetDuration(),
                            (this.options.separator = String(
                                this.options.separator,
                            )),
                            (this.useEasing = this.options.useEasing),
                            "" === this.options.separator &&
                                (this.options.useGrouping = !1),
                            (this.el =
                                "string" == typeof t
                                    ? document.getElementById(t)
                                    : t),
                            this.el
                                ? this.printValue(this.startVal)
                                : (this.error =
                                      "[CountUp] target is null or undefined"),
                            "undefined" != typeof window &&
                                this.options.enableScrollSpy &&
                                (this.error
                                    ? console.error(this.error, t)
                                    : ((window.onScrollFns =
                                          window.onScrollFns || []),
                                      window.onScrollFns.push(function () {
                                          return a.handleScroll(a);
                                      }),
                                      (window.onscroll = function () {
                                          window.onScrollFns.forEach(
                                              function (t) {
                                                  return t();
                                              },
                                          );
                                      }),
                                      this.handleScroll(this)));
                    }
                    return (
                        (t.prototype.handleScroll = function (t) {
                            if (t && window && !t.once) {
                                var e = window.innerHeight + window.scrollY,
                                    i = t.el.getBoundingClientRect(),
                                    s = i.top + window.pageYOffset,
                                    a = i.top + i.height + window.pageYOffset;
                                a < e && a > window.scrollY && t.paused
                                    ? ((t.paused = !1),
                                      setTimeout(function () {
                                          return t.start();
                                      }, t.options.scrollSpyDelay),
                                      t.options.scrollSpyOnce && (t.once = !0))
                                    : (window.scrollY > a || s > e) &&
                                      !t.paused &&
                                      t.reset();
                            }
                        }),
                        (t.prototype.determineDirectionAndSmartEasing =
                            function () {
                                var t = this.finalEndVal
                                    ? this.finalEndVal
                                    : this.endVal;
                                if (
                                    ((this.countDown = this.startVal > t),
                                    Math.abs(t - this.startVal) >
                                        this.options.smartEasingThreshold &&
                                        this.options.useEasing)
                                ) {
                                    this.finalEndVal = t;
                                    var e = this.countDown ? 1 : -1;
                                    (this.endVal =
                                        t + e * this.options.smartEasingAmount),
                                        (this.duration = this.duration / 2);
                                } else
                                    (this.endVal = t),
                                        (this.finalEndVal = null);
                                null !== this.finalEndVal
                                    ? (this.useEasing = !1)
                                    : (this.useEasing = this.options.useEasing);
                            }),
                        (t.prototype.start = function (t) {
                            this.error ||
                                (this.options.onStartCallback &&
                                    this.options.onStartCallback(),
                                t && (this.options.onCompleteCallback = t),
                                this.duration > 0
                                    ? (this.determineDirectionAndSmartEasing(),
                                      (this.paused = !1),
                                      (this.rAF = requestAnimationFrame(
                                          this.count,
                                      )))
                                    : this.printValue(this.endVal));
                        }),
                        (t.prototype.pauseResume = function () {
                            this.paused
                                ? ((this.startTime = null),
                                  (this.duration = this.remaining),
                                  (this.startVal = this.frameVal),
                                  this.determineDirectionAndSmartEasing(),
                                  (this.rAF = requestAnimationFrame(
                                      this.count,
                                  )))
                                : cancelAnimationFrame(this.rAF),
                                (this.paused = !this.paused);
                        }),
                        (t.prototype.reset = function () {
                            cancelAnimationFrame(this.rAF),
                                (this.paused = !0),
                                this.resetDuration(),
                                (this.startVal = this.validateValue(
                                    this.options.startVal,
                                )),
                                (this.frameVal = this.startVal),
                                this.printValue(this.startVal);
                        }),
                        (t.prototype.update = function (t) {
                            cancelAnimationFrame(this.rAF),
                                (this.startTime = null),
                                (this.endVal = this.validateValue(t)),
                                this.endVal !== this.frameVal &&
                                    ((this.startVal = this.frameVal),
                                    null == this.finalEndVal &&
                                        this.resetDuration(),
                                    (this.finalEndVal = null),
                                    this.determineDirectionAndSmartEasing(),
                                    (this.rAF = requestAnimationFrame(
                                        this.count,
                                    )));
                        }),
                        (t.prototype.printValue = function (t) {
                            var e;
                            if (this.el) {
                                var i = this.formattingFn(t);
                                (
                                    null == (e = this.options.plugin)
                                        ? void 0
                                        : e.render
                                )
                                    ? this.options.plugin.render(this.el, i)
                                    : "INPUT" === this.el.tagName
                                      ? (this.el.value = i)
                                      : "text" === this.el.tagName ||
                                          "tspan" === this.el.tagName
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
                                      "[CountUp] invalid start or end value: ".concat(
                                          t,
                                      )),
                                  null);
                        }),
                        (t.prototype.resetDuration = function () {
                            (this.startTime = null),
                                (this.duration =
                                    1e3 * Number(this.options.duration)),
                                (this.remaining = this.duration);
                        }),
                        t
                    );
                })();
        },
        26271: (t) => {
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
        27618: (t, e, i) => {
            "use strict";
            i.d(e, { NotFound: () => g });
            var s = i(33008),
                a = i(85896),
                n = i(97531),
                o = i(96560),
                r = i(44189),
                l = i(78016),
                d = i(77868),
                u = i(79169),
                c = i(18740),
                h = i(66268),
                p = i(26271),
                m = i.n(p);
            let g = (0, n.PA)((t) => {
                let {
                        className: e,
                        title: i,
                        description: n,
                        iconVariant: p = "musicLogo",
                        iconClassName: g,
                        iconSize: v,
                    } = t,
                    { contentRef: _ } = (0, u.gKY)(),
                    f = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: S } = (0, u.D5F)(f);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, u.Pjs)();
                        (0, h.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, s.jsxs)("div", {
                        className: (0, a.$)(
                            m().root,
                            { [m().root_desktop]: !_ },
                            e,
                        ),
                        children: [
                            (0, s.jsx)(c.Lh, {
                                withBackwardFallback: "/",
                                className: m().navigation,
                                withForwardControl: !1,
                            }),
                            (0, s.jsxs)("div", {
                                className: m().content,
                                children: [
                                    (0, s.jsx)(l.Icon, {
                                        className: (0, a.$)(m().icon, g),
                                        variant: p,
                                        size: v,
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, a.$)(
                                            m().title,
                                            m().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            i ||
                                            (0, s.jsx)(o.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, a.$)(
                                            m().text,
                                            m().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            n ||
                                            (0, s.jsx)(o.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, s.jsx)(r.Button, {
                                        onClick: S,
                                        className: m().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, s.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, s.jsx)(o.A, {
                                                id: "navigation.page-main",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        32048: (t, e, i) => {
            Promise.resolve().then(i.t.bind(i, 96798, 23)),
                Promise.resolve().then(i.bind(i, 91396)),
                Promise.resolve().then(i.bind(i, 27618));
        },
        34965: (t) => {
            t.exports = {
                root: "SliderControls_root__v_ofj",
                control: "SliderControls_control__E3joM",
                top: "SliderControls_top__HN5gZ",
            };
        },
        40178: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, { b: () => s }),
                (function (t) {
                    (t.Album = "album"),
                        (t.Artist = "artist"),
                        (t.Playlist = "playlist"),
                        (t.Radio = "fm_radio"),
                        (t.Other = "other"),
                        (t.Search = "search");
                })(s || (s = {}));
        },
        67220: (t) => {
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
        70272: (t) => {
            t.exports = {
                root: "Slide_root__x5JEM",
                root_isActive: "Slide_root_isActive__CKUSv",
            };
        },
        75305: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, { R: () => s }),
                (function (t) {
                    (t.Music = "music"),
                        (t.DownloadedMusic = "downloadedMusic"),
                        (t.VibeTrack = "vibeTrack"),
                        (t.Generative = "generative"),
                        (t.Unknown = "unknown"),
                        (t.SmartPreview = "smartPreview"),
                        (t.Clip = "clip"),
                        (t.Radio = "fm_radio");
                })(s || (s = {}));
        },
        90720: (t) => {
            t.exports = {
                root: "Slider_root__T7EOX",
                root_visible: "Slider_root_visible__b3Kqx",
                fade: "Slider_fade__V7FGV",
                container: "Slider_container__tZ0VH",
            };
        },
        91396: (t, e, i) => {
            "use strict";
            i.d(e, { SlidesPage: () => D });
            var s = i(33008),
                a = i(85896),
                n = i(97531),
                o = i(17846),
                r = i(66268),
                l = i(73827),
                d = i(96560),
                u = i(18064),
                c = i(42213),
                h = i(44189),
                p = i(78016),
                m = i(93134),
                g = i(77868),
                v = i(53555),
                _ = i(19391),
                f = i(8461),
                S = i(45415),
                x = i(65958),
                V = i(79169),
                b = i(34965),
                E = i.n(b);
            let A = (t) => {
                let { isFirstSlide: e, isLastSlide: i, style: a } = t,
                    n = (0, f.Mn)(),
                    { formatMessage: o } = (0, l.A)(),
                    d = (0, r.useCallback)(() => {
                        n.slidePrev();
                    }, [n]),
                    u = (0, r.useCallback)(() => {
                        n.slideNext();
                    }, [n]);
                return (0, s.jsxs)("div", {
                    className: E().root,
                    style: a,
                    children: [
                        (0, s.jsx)(h.Button, {
                            variant: "outline",
                            iconClassName: E().top,
                            size: "m",
                            radius: "round",
                            onClick: d,
                            disabled: e,
                            icon: (0, s.jsx)(
                                p.Icon,
                                { variant: "arrowDown", size: "xxs" },
                                "prevIcon",
                            ),
                            withRipple: !1,
                            "aria-label": o({ id: "slider.prev-slide" }),
                            className: E().control,
                        }),
                        (0, s.jsx)(h.Button, {
                            variant: "outline",
                            size: "m",
                            radius: "round",
                            onClick: u,
                            disabled: i,
                            icon: (0, s.jsx)(
                                p.Icon,
                                { variant: "arrowDown", size: "xxs" },
                                "nextIcon",
                            ),
                            withRipple: !1,
                            "aria-label": o({ id: "slider.next-slide" }),
                            className: E().control,
                        }),
                    ],
                });
            };
            var I = i(48509),
                w = i(40178),
                N = i(54487),
                y = i(70272),
                F = i.n(y);
            let k = (t) => {
                var e;
                let { slide: i, isVisible: n } = t,
                    o = (0, V.eGp)(),
                    { from: l } = (0, V.fyy)({
                        pageId: V._Q$.TRAILER_OF_THE_YEAR,
                        blockId: V.UfI.DEFAULT,
                    }),
                    { isActive: d } = (0, f.JO)();
                (0, V.GWZ)(n);
                let u =
                        null == o
                            ? void 0
                            : o.getState(V.V_r.TRAILER).queueState.entityList
                                  .value,
                    c = (0, r.useMemo)(
                        () =>
                            i.entitiesData &&
                            u &&
                            i.entitiesData.every((t, e) => {
                                var i;
                                return (
                                    t.meta.id ===
                                    (null == (i = u[e])
                                        ? void 0
                                        : i.entity.data.meta.id)
                                );
                            }),
                        [i.entitiesData, u],
                    ),
                    h =
                        n &&
                        i.hasTrailer &&
                        (!c ||
                            (null == o
                                ? void 0
                                : o.getState(V.V_r.TRAILER).playerState.status
                                      .value) !== v.MT.PLAYING),
                    p =
                        h &&
                        (null == o ||
                        null ==
                            (e = o.getState(V.V_r.TRAILER).currentContext.value)
                            ? void 0
                            : e.data.meta.id) === i.id;
                return (
                    (0, r.useEffect)(() => {
                        if (p)
                            return void o.restartContext(
                                {
                                    playAfterRestart: !0,
                                    queueParams: { index: 0 },
                                    entitiesData: i.entitiesData,
                                },
                                V.V_r.TRAILER,
                            );
                        h &&
                            (null == o ||
                                o.playContext(
                                    {
                                        contextData: {
                                            type: I.K.Various,
                                            overrideContextType: w.b.Other,
                                            trailer: !0,
                                            meta: { id: i.id },
                                            from: l,
                                        },
                                        queueParams: { index: 0 },
                                        entitiesData: i.entitiesData,
                                        loadContextMeta: !1,
                                    },
                                    V.V_r.TRAILER,
                                ));
                    }, [l, h, p, i.entitiesData, i.id, o]),
                    (0, s.jsx)(N.Paper, {
                        className: (0, a.$)(F().root, {
                            [F().root_isActive]: d,
                        }),
                        radius: "l",
                        tabIndex: 0,
                        children: (0, s.jsx)(x.AR, { slide: i, isActive: d }),
                    })
                );
            };
            var C = i(90720),
                j = i.n(C);
            let P = (0, n.PA)((t) => {
                let { items: e } = t,
                    {
                        settings: { isMobile: i },
                        slides: n,
                    } = (0, V.Pjs)(),
                    { formatMessage: o } = (0, l.A)(),
                    { state: d, toggleTrue: u } = (0, S.e)(!1),
                    c = (0, f.Mn)(),
                    [h, p] = (0, r.useState)(!0),
                    [m, g] = (0, r.useState)(!1);
                (0, r.useEffect)(
                    () => (
                        u(),
                        () => {
                            null == c || c.slideTo(0), n.setActiveSlide(0);
                        }
                    ),
                    [u, c, n],
                );
                let v = (0, r.useCallback)(
                    (t) => {
                        p(t.isBeginning),
                            g(t.isEnd),
                            n.setActiveSlide(t.activeIndex);
                    },
                    [n],
                );
                return (0, s.jsx)("div", {
                    className: (0, a.$)(j().root, { [j().root_visible]: d }),
                    children: (0, s.jsxs)(f.RC, {
                        direction: "vertical",
                        centeredSlides: !i,
                        slidesPerView: "auto",
                        spaceBetween: 16,
                        className: j().container,
                        keyboard: { enabled: !0 },
                        modules: [_.s3, _.Jq, _.FJ],
                        onActiveIndexChange: v,
                        a11y: {
                            enabled: !0,
                            containerMessage: o({
                                id: "page.results-of-the-year",
                            }),
                        },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            e.map((t, i) =>
                                (0, s.jsx)(
                                    f.qr,
                                    {
                                        children: (0, s.jsx)(V.Rau, {
                                            slidesType: (0, x.tS)(n.consumer),
                                            slideId: t.id,
                                            slidesCount: e.length,
                                            slidePos: i + 1,
                                            videoId: t.background.videoUrl,
                                            artistId: n.artistId,
                                            children: (0, s.jsx)(k, {
                                                isVisible: n.activeSlide === i,
                                                slide: t,
                                            }),
                                        }),
                                    },
                                    t.id,
                                ),
                            ),
                            (0, s.jsx)(A, { isFirstSlide: h, isLastSlide: m }),
                        ],
                    }),
                });
            });
            var T = i(67220),
                R = i.n(T);
            function L(t, e) {
                return (
                    (t === V.GuX.RESOLVE || t === V.GuX.REJECT) &&
                    0 === e.length
                );
            }
            let D = (0, n.PA)((t) => {
                var e;
                let {
                        slidesConsumer: i,
                        artistId: n,
                        podcastId: _,
                        campaignId: f,
                    } = t,
                    { formatMessage: S } = (0, l.A)(),
                    {
                        slides: b,
                        experiments: E,
                        sonataState: A,
                        settings: I,
                    } = (0, V.Pjs)(),
                    w = (0, V.eGp)(),
                    N =
                        E.checkExperiment(V.zal.WebNextRewind2024, "on") ||
                        E.checkExperiment(V.zal.WebNextMusicBirthday2025, "on"),
                    y =
                        !(null == (e = I.browserInfo) ? void 0 : e.isMobile) ||
                        !I.browserInfo.isTouch,
                    F = null == w ? void 0 : w.getState(V.V_r.TRAILER),
                    k = (0, c.c)((t) => {
                        null == w || w.setExponentVolume(t, V.V_r.TRAILER);
                    });
                (0, r.useEffect)(() => {
                    k(1), b.setIsMuted(!1);
                }, [k, b, w]);
                let { moveBack: C } = (0, V.JD0)(V.Zyd.main.href);
                (0, r.useEffect)(
                    () => () => {
                        b.resetUser(),
                            b.resetArtist(),
                            b.resetPodcast(),
                            b.resetSpecial(),
                            null == w || w.pause(V.V_r.TRAILER);
                    },
                    [b, w],
                ),
                    N || (0, o.notFound)(),
                    (0, V.gnQ)((0, x.tS)(i)),
                    (0, V.Ocn)({
                        isLoaded: b.isLoaded,
                        slidesType: (0, x.tS)(i),
                    }),
                    (0, r.useEffect)(() => {
                        A.status === v.MT.PLAYING &&
                            (null == w || w.togglePause());
                    }, [w, A.status]);
                let j = (0, r.useMemo)(() => {
                    switch (i) {
                        case x.z6.USER:
                            return b.userItems;
                        case x.z6.ARTIST:
                            return b.artistItems;
                        case x.z6.PODCAST:
                            return b.podcastItems;
                        case x.z6.SPECIAL:
                            return b.specialItems;
                    }
                }, [
                    b.artistItems,
                    b.podcastItems,
                    b.specialItems,
                    b.userItems,
                    i,
                ]);
                (0, r.useEffect)(() => {
                    if (N)
                        switch (i) {
                            case x.z6.USER:
                                L(b.userSlidesLoadingState, j) &&
                                    (0, o.notFound)();
                                break;
                            case x.z6.ARTIST:
                                L(b.artistSlidesLoadingState, j) &&
                                    (0, o.notFound)();
                                break;
                            case x.z6.PODCAST:
                                L(b.podcastSlidesLoadingState, j) &&
                                    (0, o.notFound)();
                                break;
                            case x.z6.SPECIAL:
                                L(b.specialSlidesLoadingState, j) &&
                                    (0, o.notFound)();
                        }
                    else (0, o.notFound)();
                }, [
                    E,
                    N,
                    j,
                    j.length,
                    b.artistSlidesLoadingState,
                    b.podcastSlidesLoadingState,
                    b.userSlidesLoadingState,
                    b.specialSlidesLoadingState,
                    i,
                ]),
                    (0, V.NBO)(!0);
                let T = (0, r.useMemo)(() => {
                        var t;
                        let e,
                            i =
                                null == (t = j[b.activeSlide])
                                    ? void 0
                                    : t.slideColor;
                        if (i) {
                            let { r: t, g: s, b: a } = (0, V.E2N)(i);
                            e = "rgba("
                                .concat(t, ", ")
                                .concat(s, ", ")
                                .concat(a, ", 0.5)");
                        }
                        return {
                            "--card-color-enabled_variant": i,
                            "--card-color-enabled": e,
                            "--logo-color": i,
                        };
                    }, [j, j.length, b.activeSlide]),
                    D = (0, r.useCallback)(() => {
                        b.toggleMute(),
                            (null == F
                                ? void 0
                                : F.playerState.exponentVolume.value) !== 0
                                ? k(0)
                                : k(1);
                    }, [
                        k,
                        b,
                        null == F ? void 0 : F.playerState.exponentVolume.value,
                    ]),
                    B = b.isMuted ? "volumeOff" : "volume",
                    z = S(
                        b.isMuted
                            ? { id: "player-actions.volume-off" }
                            : { id: "player-actions.volume-on" },
                    );
                switch (i) {
                    case x.z6.USER:
                        b.userSlidesLoadingState === V.GuX.IDLE &&
                            (0, r.use)(b.getUserSlides());
                        break;
                    case x.z6.ARTIST:
                        n &&
                            b.artistSlidesLoadingState === V.GuX.IDLE &&
                            (0, r.use)(b.getArtistSlides({ artistId: n }));
                        break;
                    case x.z6.PODCAST:
                        _ &&
                            b.podcastSlidesLoadingState === V.GuX.IDLE &&
                            (0, r.use)(
                                b.getPodcastSlides({ podcastId: Number(_) }),
                            );
                        break;
                    case x.z6.SPECIAL:
                        f &&
                            b.specialSlidesLoadingState === V.GuX.IDLE &&
                            (0, r.use)(b.getSpecialSlides({ campaignId: f }));
                }
                return (0, s.jsxs)("div", {
                    className: R().root,
                    style: T,
                    ...(0, u.Am)(u.Xk.slides.SLIDES_PAGE),
                    children: [
                        (0, s.jsx)(m.q, {
                            children: (0, s.jsx)(g.Heading, {
                                variant: "h1",
                                children: (0, s.jsx)(d.A, {
                                    id: "page.results-of-the-year",
                                }),
                            }),
                        }),
                        (0, s.jsxs)("header", {
                            className: R().header,
                            children: [
                                (null == j ? void 0 : j.length) > 0 &&
                                    (0, s.jsxs)("div", {
                                        className: R().slidesResult,
                                        children: [
                                            (0, s.jsx)(g.Caption, {
                                                variant: "span",
                                                className:
                                                    R().counterActiveItem,
                                                type: "text",
                                                size: "l",
                                                weight: "medium",
                                                children:
                                                    Number(b.activeSlide) + 1,
                                            }),
                                            (0, s.jsx)(g.Caption, {
                                                variant: "span",
                                                type: "text",
                                                size: "l",
                                                weight: "medium",
                                                className: R().counterItem,
                                                children: "/",
                                            }),
                                            (0, s.jsx)(g.Caption, {
                                                variant: "span",
                                                type: "text",
                                                size: "l",
                                                weight: "medium",
                                                className: R().counterItem,
                                                children:
                                                    null == j
                                                        ? void 0
                                                        : j.length,
                                            }),
                                        ],
                                    }),
                                y &&
                                    (0, s.jsx)(h.Button, {
                                        "aria-label": z,
                                        variant: "text",
                                        radius: "round",
                                        size: "xxxs",
                                        icon: (0, s.jsx)(p.Icon, {
                                            size: "xs",
                                            className: R().icon,
                                            variant: B,
                                        }),
                                        onClick: D,
                                        className: (0, a.$)(
                                            R().button,
                                            R().volumeButton,
                                        ),
                                        withRipple: !1,
                                    }),
                                (0, s.jsx)(h.Button, {
                                    "aria-label": S({
                                        id: "navigation.go-back",
                                    }),
                                    radius: "round",
                                    size: "xs",
                                    icon: (0, s.jsx)(
                                        p.Icon,
                                        { size: "xs", variant: "close" },
                                        "handleBackIcon",
                                    ),
                                    onClick: C,
                                    className: (0, a.$)(
                                        R().button,
                                        R().desktopBackButton,
                                    ),
                                    role: "link",
                                }),
                                (0, s.jsx)(h.Button, {
                                    variant: "text",
                                    "aria-label": S({
                                        id: "navigation.go-back",
                                    }),
                                    radius: "round",
                                    size: "xs",
                                    icon: (0, s.jsx)(
                                        p.Icon,
                                        { size: "xs", variant: "arrowLeft" },
                                        "handleBackIcon",
                                    ),
                                    onClick: C,
                                    className: (0, a.$)(
                                        R().button,
                                        R().mobileBackButton,
                                    ),
                                    role: "link",
                                }),
                            ],
                        }),
                        (0, s.jsx)(P, { items: j }),
                    ],
                });
            });
        },
        96798: (t) => {
            t.exports = {
                root: "SlidesNotFoundPage_root__bmv9K",
                important: "SlidesNotFoundPage_important__VELWc",
            };
        },
    },
]);
