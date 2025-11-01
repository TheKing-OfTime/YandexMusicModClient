(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7508],
    {
        1876: () => {},
        2184: () => {},
        7553: (e, t, r) => {
            "use strict";
            t.H = void 0;
            var n = r(7144),
                a = r(66268),
                o = r(64006),
                c = n.__importStar(r(89732));
            t.H = function (e) {
                var t = e.enabled,
                    r = e.containerRef,
                    n = (0, a.useRef)(null),
                    i = (0, a.useRef)(!1);
                (0, o.useIsomorphicLayoutEffect)(function () {
                    var e = r ? r.current : null;
                    n.current !== e &&
                        (t && i.current && (c.unlock(n.current), c.lock(e)),
                        (n.current = e));
                }),
                    (0, o.useIsomorphicLayoutEffect)(
                        function () {
                            if (t)
                                return (
                                    (i.current = !0),
                                    c.lock(n.current),
                                    function () {
                                        (i.current = !1), c.unlock(n.current);
                                    }
                                );
                        },
                        [t],
                    );
            };
        },
        7555: (e, t, r) => {
            "use strict";
            r.d(t, { O: () => n });
            var n =
                "undefined" != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement;
        },
        21789: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = r(7144);
            n.__exportStar(r(99647), t),
                n.__exportStar(r(58752), t),
                n.__exportStar(r(83520), t),
                n.__exportStar(r(89192), t),
                n.__exportStar(r(55831), t),
                n.__exportStar(r(45590), t);
        },
        26656: (e, t, r) => {
            "use strict";
            r.d(t, { l: () => s });
            var n = r(66268),
                a = r(77798),
                o = r(7553);
            r(57544);
            var c = (0, a.cn)("UserID", "CloseButton"),
                i = function (e) {
                    var t = e.onClick,
                        r = e.colorScheme;
                    return n.createElement(
                        "button",
                        {
                            className: c({ colorScheme: r }),
                            onClick: t,
                            "aria-label": "Закрыть",
                            tabIndex: 1,
                        },
                        n.createElement(
                            "svg",
                            {
                                width: 24,
                                height: 24,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                focusable: "false",
                                "aria-hidden": "true",
                            },
                            n.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",
                                fill: "currentColor",
                            }),
                        ),
                    );
                };
            r(41210);
            var l = (0, a.cn)("UserWidget", "Dialog"),
                s = (0, n.forwardRef)(function (e, t) {
                    var r,
                        a,
                        c = e.visible,
                        s = e.loading,
                        u = e.colorScheme,
                        d = e.platform,
                        f = e.onClose,
                        v = e.className;
                    return (
                        (0, o.H)({ enabled: c && "touch" === d }),
                        (r = { onScroll: f }),
                        ((a = (0, n.useRef)(r)).current = r),
                        (0, n.useEffect)(function () {
                            var e = function () {
                                var e, t;
                                null == (t = (e = a.current).onScroll) ||
                                    t.call(e);
                            };
                            if (a.current.onScroll)
                                return (
                                    document.addEventListener("scroll", e),
                                    function () {
                                        document.removeEventListener(
                                            "scroll",
                                            e,
                                        );
                                    }
                                );
                        }, []),
                        n.createElement(
                            "div",
                            {
                                role: "dialog",
                                "aria-busy": s,
                                "aria-modal": "true",
                                className: l(
                                    "Dialog",
                                    {
                                        visible: c,
                                        loading: s,
                                        colorScheme: u,
                                        platform: d,
                                    },
                                    [v],
                                ),
                                ref: t,
                            },
                            s &&
                                n.createElement(i, {
                                    colorScheme: u,
                                    onClick: f,
                                }),
                            e.children,
                        )
                    );
                });
        },
        27828: () => {},
        39235: (e, t, r) => {
            "use strict";
            r.d(t, { E: () => a });
            var n = r(66268),
                a = r(7555).O ? n.useLayoutEffect : n.useEffect;
        },
        41210: () => {},
        44389: (e, t, r) => {
            "use strict";
            r.d(t, { B: () => i });
            var n = r(7144),
                a = r(66268),
                o = r(79246),
                c = r(55558);
            function i(e, t) {
                var r,
                    i = function (r) {
                        var i = r.onOpen,
                            l = r.onClose,
                            s = (0, n.__read)((0, a.useState)(!1), 2),
                            u = s[0],
                            d = s[1],
                            f = (0, a.useCallback)(
                                function () {
                                    d(!0), null == i || i();
                                },
                                [d, i],
                            ),
                            v = (0, a.useCallback)(
                                function () {
                                    d(!1), null == l || l();
                                },
                                [d, l],
                            ),
                            m = (0, c.w)(
                                (0, n.__assign)((0, n.__assign)({}, r), {
                                    visible: u,
                                    onOpen: f,
                                    onClose: v,
                                }),
                            ),
                            h = m.avatarProps,
                            p = m.contentProps,
                            g = m.dialogProps;
                        return a.createElement(
                            e,
                            (0, n.__assign)({}, r, h),
                            r.children,
                            a.createElement(
                                t,
                                (0, n.__assign)({}, g, { onClose: v }),
                                a.createElement(o.U, (0, n.__assign)({}, p)),
                            ),
                        );
                    };
                return (
                    (i.displayName =
                        "'withUserID(" +
                        (null != (r = e.displayName) ? r : e) +
                        ")'"),
                    i
                );
            }
        },
        45590: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { withUserID: () => n.B });
            var n = r(44389);
        },
        52283: (e, t, r) => {
            "use strict";
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(32975);
        },
        55558: (e, t, r) => {
            "use strict";
            r.d(t, { w: () => I });
            var n,
                a,
                o = r(7144),
                c = r(66268),
                i = r(84991),
                l = r(39235),
                s = [],
                u = null,
                d = null;
            function f() {
                return s[s.length - 1];
            }
            function v(e, t, r) {
                var n,
                    a,
                    o = f();
                o &&
                    o.onClose &&
                    (!r || r === o.closeStrategy) &&
                    (("click" === t &&
                        ((n = o.refs),
                        (a = e.target),
                        n.some(function (e) {
                            return (
                                e.current instanceof HTMLElement &&
                                e.current.contains(a)
                            );
                        }))) ||
                        o.onClose({ nativeEvent: e, source: t }));
            }
            function m(e) {
                var t = e.key;
                ("Escape" === t || "Esc" === t) && v(e, "esc");
            }
            function h(e) {
                (u = e.target), (d = f()), v(e, "click", "pressdown");
            }
            function p(e) {
                var t = u;
                u = null;
                var r = d;
                (d = null),
                    e.button > 0 ||
                        r !== f() ||
                        (t === e.target && v(e, "click", "pressup"));
            }
            var g = Object.freeze({
                    count: function () {
                        return s.length;
                    },
                    addOverlay: function (e) {
                        0 === s.length &&
                            (document.addEventListener("keyup", m),
                            document.addEventListener("pointerdown", h, !0),
                            document.addEventListener("click", p, !0)),
                            s.push(e);
                    },
                    removeOverlay: function (e) {
                        s.splice(s.indexOf(e), 1),
                            0 === s.length &&
                                (document.removeEventListener("keyup", m),
                                document.removeEventListener(
                                    "pointerdown",
                                    h,
                                    !0,
                                ),
                                document.removeEventListener("click", p, !0));
                    },
                    getTopOverlayOptions: f,
                }),
                w = Date.now(),
                C = "undefined" != typeof performance ? performance : null;
            (null == (n = null == C ? void 0 : C.timing)
                ? void 0
                : n.navigationStart) &&
                (w =
                    null ==
                    (a = null == performance ? void 0 : performance.timing)
                        ? void 0
                        : a.navigationStart);
            var y =
                    C && "function" == typeof C.now
                        ? function () {
                              return C.now();
                          }
                        : "function" == typeof Date.now
                          ? function () {
                                return Date.now() - w;
                            }
                          : function () {
                                return new Date().getTime() - w;
                            },
                E = "undefined" != typeof window,
                b = function () {
                    return (
                        window.innerHeight ||
                        document.documentElement.clientHeight ||
                        document.body.clientHeight
                    );
                },
                _ = function (e) {
                    var t = e.enabled,
                        r = e.onHeightChange,
                        n = (0, o.__read)((0, c.useState)(E ? b() : void 0), 2),
                        a = n[0],
                        i = n[1],
                        s = (0, c.useCallback)(
                            function () {
                                var e = b();
                                a !== e && (i(b()), r(e));
                            },
                            [a, r],
                        );
                    (0, l.E)(
                        function () {
                            if (t)
                                return (
                                    window.addEventListener("resize", s),
                                    function () {
                                        window.removeEventListener("resize", s);
                                    }
                                );
                        },
                        [s, t],
                    );
                },
                S = function (e) {
                    var t = e.touchBreakpointWidth,
                        r = void 0 === t ? 520 : t,
                        n = e.platform,
                        a = void 0 === n ? "auto" : n,
                        i = (0, o.__read)((0, c.useState)(), 2),
                        s = i[0],
                        u = i[1];
                    return (
                        (0, c.useEffect)(
                            function () {
                                if ("auto" !== a) return void u(a);
                                E &&
                                    u(
                                        window.matchMedia(
                                            "(max-width: " + r + "px)",
                                        ).matches
                                            ? "touch"
                                            : "desktop",
                                    );
                            },
                            [r, a],
                        ),
                        (0, l.E)(
                            function () {
                                if (E && "auto" === a) {
                                    var e = window.matchMedia(
                                        "(max-width: " + r + "px)",
                                    );
                                    return (
                                        t(e),
                                        e.addEventListener
                                            ? e.addEventListener("change", t)
                                            : e.addListener(t),
                                        function () {
                                            e.removeEventListener
                                                ? e.removeEventListener(
                                                      "change",
                                                      t,
                                                  )
                                                : e.removeListener(t);
                                        }
                                    );
                                }
                                function t(e) {
                                    e.matches ? u("touch") : u("desktop");
                                }
                            },
                            [s, u, r],
                        ),
                        s
                    );
                },
                k = ["tr", "am", "ge"],
                L = ["il"];
            function I(e) {
                var t,
                    r,
                    n,
                    a,
                    s,
                    u,
                    d,
                    f,
                    v,
                    m,
                    h,
                    p,
                    w,
                    C,
                    I,
                    P = e.avatarRef,
                    R = e.avatarSize,
                    x = void 0 === R ? [42, 22] : R,
                    D = e.colorScheme,
                    U = void 0 === D ? "light" : D,
                    M = e.dialogClassName,
                    O = e.dialogRef,
                    N = e.dir,
                    T = void 0 === N ? "ltr" : N,
                    B = e.env,
                    H = void 0 === B ? "prod" : B,
                    W = e.essentialRef,
                    j = e.features,
                    Y = e.fetchUserData,
                    A = e.host,
                    X = e.iframeRef,
                    z = e.lang,
                    K = e.onClose,
                    V = e.onLoad,
                    J = e.onMenuItemClick,
                    Z = e.onOpen,
                    q = e.onThemeChange,
                    F = e.onLocaleChange,
                    $ = e.platform,
                    G = e.preload,
                    Q = void 0 !== G && G,
                    ee = e.project,
                    et = e.queryParams,
                    er = e.dynamicParams,
                    en = e.retpath,
                    ea = e.rpcHandlers,
                    eo = e.theme,
                    ec = e.tld,
                    ei = e.touchBreakpointWidth,
                    el = e.userData,
                    es = e.visible,
                    eu = void 0 !== es && es,
                    ed = (0, c.useRef)({}),
                    ef = (0, c.useRef)(null),
                    ev = (0, c.useRef)(null),
                    em = (0, c.useRef)(null),
                    eh =
                        ((t = void 0 === ec ? "ru" : ec),
                        (0, c.useMemo)(
                            function () {
                                return k.includes(t)
                                    ? "com." + t
                                    : L.includes(t)
                                      ? "co." + t
                                      : t;
                            },
                            [t],
                        ));
                (0, i.N)(ef, P || (0, c.createRef)()),
                    (ev = null != O ? O : ev),
                    (em = null != X ? X : em);
                var ep = (0, o.__read)((0, c.useState)(!0), 2),
                    eg = ep[0],
                    ew = ep[1],
                    eC = (0, c.useMemo)(
                        function () {
                            return E ? en || location.href : en;
                        },
                        [en],
                    ),
                    ey = (0, o.__read)((0, c.useState)(Q), 2),
                    eE = ey[0],
                    eb = ey[1],
                    e_ = (0, c.useRef)({
                        colorScheme: U,
                        theme: eo,
                        retpath: eC,
                    }),
                    eS = (0, c.useMemo)(
                        function () {
                            if (A) return "https://" + A;
                            if ("prod_yateam" === H)
                                return "https://user-id.yandex-team.ru";
                            if (E) {
                                var e = new URL(location.href).searchParams.get(
                                    "user_id_host",
                                );
                                if (e) return "https://" + e;
                            }
                            return "https://yandex." + eh;
                        },
                        [A, eh, H],
                    ),
                    ek = (0, c.useMemo)(
                        function () {
                            eE ||
                                (e_.current.colorScheme === U &&
                                    e_.current.theme === eo &&
                                    e_.current.retpath === eC) ||
                                (e_.current = {
                                    colorScheme: U,
                                    theme: eo,
                                    retpath: eC,
                                });
                            var e = new URL("user-id", eS);
                            if (
                                (e_.current.retpath &&
                                    e.searchParams.set(
                                        "encodedRetpath",
                                        encodeURIComponent(e_.current.retpath),
                                    ),
                                e_.current.colorScheme &&
                                    e.searchParams.set(
                                        "colorScheme",
                                        e_.current.colorScheme,
                                    ),
                                e_.current.theme &&
                                    e.searchParams.set(
                                        "theme",
                                        e_.current.theme,
                                    ),
                                z && e.searchParams.set("l10n", z),
                                Array.isArray(j))
                            ) {
                                var t = j.join(",");
                                e.searchParams.set("exp_flags", t);
                            }
                            for (var r in (ee &&
                                e.searchParams.set("project", ee),
                            H && e.searchParams.set("env", H),
                            e.searchParams.set("dir", T),
                            et))
                                e.searchParams.set(r, et[r]);
                            for (var r in er) e.searchParams.set(r, er[r]);
                            return e.toString();
                        },
                        [eS, j, ee, et, er, U, eo, eC, eE, H, T, z],
                    );
                (0, c.useEffect)(
                    function () {
                        !eE && (Q || Y) && eb(!0);
                    },
                    [eE, Q, Y],
                );
                var eL = S({ platform: $, touchBreakpointWidth: ei }),
                    eI = (0, c.useCallback)(
                        function () {
                            eE || eb(!0);
                        },
                        [eE],
                    ),
                    eP = (0, c.useMemo)(
                        function () {
                            return null === x
                                ? null
                                : "number" == typeof x
                                  ? x
                                  : "touch" === eL
                                    ? x[1]
                                    : x[0];
                        },
                        [eL, x],
                    ),
                    eR = (0, c.useCallback)(
                        function () {
                            var e;
                            null == (e = ef.current) || e.focus(),
                                null == K || K();
                        },
                        [K],
                    ),
                    ex = (0, o.__read)((0, c.useState)(), 2),
                    eD = ex[0],
                    eU = ex[1],
                    eM = (0, o.__read)((0, c.useState)(el), 2),
                    eO = eM[0],
                    eN = eM[1];
                (0, c.useEffect)(
                    function () {
                        eN(el);
                    },
                    [el],
                );
                var eT = (0, c.useCallback)(
                    function (e) {
                        if (E) {
                            if ("desktop" === eL) return void eU(e);
                            eU(b());
                        }
                    },
                    [eL],
                );
                _({ enabled: "touch" === eL, onHeightChange: eT });
                var eB = (0, c.useRef)(),
                    eH = ((n = (r = {
                        loading: eg,
                        iframeRef: em,
                        origin: eS,
                        rpcHandler: (0, c.useCallback)(
                            function (e, t) {
                                var r;
                                switch (e.methodCall) {
                                    case "onInit":
                                        Y && eN(e.params[0]), null == V || V();
                                        break;
                                    case "onDataLoad":
                                        var n = ed.current;
                                        if (
                                            "number" == typeof n.start &&
                                            "number" != typeof n.end &&
                                            eB.current
                                        ) {
                                            n.end = y();
                                            var a = n.end - n.start;
                                            eB.current({
                                                methodCall:
                                                    "onSendTimeToInteractive",
                                                params: [{ delta: a }],
                                            });
                                        }
                                    case "updateUserHeight":
                                        eT(e.params[0].height), ew(!1);
                                        break;
                                    case "ITEM_CLICK":
                                        var c = e.params[0];
                                        null == J ||
                                            J(c.item, c, { onClose: eR });
                                        break;
                                    case "closeUserID":
                                        null == eR || eR();
                                        break;
                                    case "updateTheme":
                                        var i = e.params[0].theme;
                                        null == q || q(i);
                                        break;
                                    case "updateLocale":
                                        var l = e.params[0].locale;
                                        null == F || F(l);
                                        break;
                                    default:
                                        if (
                                            !(null == ea
                                                ? void 0
                                                : ea[e.methodCall])
                                        )
                                            return;
                                        Promise.resolve(
                                            null ==
                                                (r =
                                                    null == ea
                                                        ? void 0
                                                        : ea[e.methodCall])
                                                ? void 0
                                                : r.call.apply(
                                                      r,
                                                      (0, o.__spread)(
                                                          [ea],
                                                          e.params,
                                                      ),
                                                  ),
                                        ).then(t);
                                }
                            },
                            [ea, J, eR, q, F, eT, eN, Y, V],
                        ),
                    }).loading),
                    (a = r.iframeRef),
                    (s = r.origin),
                    (u = r.rpcHandler),
                    (d = (0, c.useRef)([])),
                    (f = (0, c.useCallback)(
                        function (e) {
                            var t,
                                r,
                                o = JSON.stringify(e);
                            n
                                ? d.current.push(o)
                                : null ==
                                      (r =
                                          null == (t = a.current)
                                              ? void 0
                                              : t.contentWindow) ||
                                  r.postMessage(o, "*");
                        },
                        [n, a],
                    )),
                    (v = (0, c.useCallback)(
                        function (e) {
                            var t;
                            if (e.origin === s) {
                                try {
                                    t = JSON.parse(e.data);
                                } catch (e) {
                                    return;
                                }
                                t.methodCall &&
                                    (null == u ||
                                        u((0, o.__assign)({}, t), function (e) {
                                            var r;
                                            f({
                                                returnCall: !0,
                                                params: [e],
                                                resultCallbackIndex:
                                                    (null ==
                                                    (r = t.resultCallbackIndex)
                                                        ? void 0
                                                        : r.__callbackId) || -1,
                                            });
                                        }));
                            }
                        },
                        [s, u, f],
                    )),
                    (0, c.useEffect)(
                        function () {
                            return (
                                window.addEventListener("message", v),
                                function () {
                                    window.removeEventListener("message", v);
                                }
                            );
                        },
                        [v],
                    ),
                    (0, c.useEffect)(
                        function () {
                            a &&
                                !n &&
                                0 !== d.current.length &&
                                (d.current.forEach(function (e) {
                                    var t, r;
                                    null ==
                                        (r =
                                            null == (t = a.current)
                                                ? void 0
                                                : t.contentWindow) ||
                                        r.postMessage(e, "*");
                                }),
                                (d.current = []));
                        },
                        [n, a],
                    ),
                    { sendMessage: f }).sendMessage;
                (eB.current = eH),
                    (0, c.useEffect)(
                        function () {
                            eH({
                                methodCall: "updateRetpath",
                                params: [{ retpath: eC }],
                            });
                        },
                        [eC, eH],
                    ),
                    (0, c.useEffect)(
                        function () {
                            eH({
                                methodCall: "onParamsChange",
                                params: [(0, o.__assign)({}, er)],
                            });
                        },
                        [er, eH],
                    ),
                    (0, c.useEffect)(
                        function () {
                            eH({
                                methodCall: "updateTheme",
                                params: [{ colorScheme: U, theme: eo }],
                            });
                        },
                        [U, eH, eo],
                    );
                var eW = (0, c.useCallback)(
                        function (e) {
                            eH({
                                methodCall: "focusFirst",
                                params: [{ fromKeyboard: e }],
                            });
                        },
                        [eH],
                    ),
                    ej = (0, c.useCallback)(
                        function () {
                            eu
                                ? (eW(!0), eR())
                                : (eE || eb(!0), eW(!1), null == Z || Z());
                        },
                        [eW, Z, eE, eu, eR],
                    );
                (h = (m = {
                    visible: eu,
                    onClose: eR,
                    essentialRefs: (0, c.useMemo)(
                        function () {
                            var e = [ev, ef];
                            return W && e.push(W), e;
                        },
                        [ev, ef, W],
                    ),
                }).visible),
                    (p = m.onClose),
                    (w = m.essentialRefs),
                    (C = m.unsafe_strategy),
                    ((I = (0, c.useRef)({
                        onClose: p,
                        refs: w,
                        closeStrategy: void 0 === C ? "pressdown" : C,
                    })).current.onClose = p),
                    (I.current.refs = w),
                    (0, c.useEffect)(
                        function () {
                            if (h) {
                                var e = I.current;
                                return (
                                    g.addOverlay(e),
                                    function () {
                                        g.removeOverlay(e);
                                    }
                                );
                            }
                        },
                        [h],
                    ),
                    (0, l.E)(
                        function () {
                            var e;
                            eu &&
                                (null != (e = ed.current).start ||
                                    (e.start = y()));
                        },
                        [eu],
                    );
                var eY = {
                        colorScheme: U,
                        height: eD,
                        loading: eg,
                        preload: eE,
                        ref: em,
                        src: ek,
                        width: "desktop" === eL ? 320 : "100%",
                    },
                    eA = {
                        className: M,
                        colorScheme: U,
                        platform: eL,
                        ref: ev,
                        visible: eu,
                        onClose: eR,
                        loading: eg,
                    };
                return {
                    avatarProps: {
                        avatarSize: eP,
                        env: H,
                        onClick: ej,
                        onPointerEnter: eI,
                        platform: eL,
                        ref: ef,
                        retpath: eC,
                        userData: eO,
                        visible: eu,
                        tld: eh,
                    },
                    contentProps: eY,
                    dialogProps: eA,
                };
            }
        },
        55831: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { useUserID: () => n.w });
            var n = r(55558);
        },
        57544: () => {},
        58752: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { Dialog: () => n.l });
            var n = r(26656);
        },
        60717: (e, t) => {
            "use strict";
            t.cn = (function (e) {
                function t(t, a, o, c) {
                    var i = a ? r + t + e.e + a : r + t,
                        l = i;
                    if (o) {
                        var s = " " + l + e.m;
                        for (var u in o)
                            if (o.hasOwnProperty(u)) {
                                var d = o[u];
                                !0 === d
                                    ? (l += s + u)
                                    : d && (l += s + u + n + d);
                            }
                    }
                    if (void 0 !== c)
                        for (var f = 0, v = c.length; f < v; f++) {
                            var m = c[f];
                            if (m && "string" == typeof m.valueOf())
                                for (
                                    var h = m.valueOf().split(" "), p = 0;
                                    p < h.length;
                                    p++
                                ) {
                                    var g = h[p];
                                    g !== i && (l += " " + g);
                                }
                        }
                    return l;
                }
                var r = e.n || "",
                    n = e.v || e.m;
                return function (e, r) {
                    return function (n, a, o) {
                        return "string" == typeof n
                            ? Array.isArray(a)
                                ? t(e, n, void 0, a)
                                : t(e, n, a, o)
                            : t(e, r, n, a);
                    };
                };
            })({ e: "-", m: "_" });
        },
        64006: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { useIsomorphicLayoutEffect: () => n.E });
            var n = r(39235);
        },
        68228: () => {},
        77798: (e, t, r) => {
            "use strict";
            e.exports = r(60717);
        },
        79246: (e, t, r) => {
            "use strict";
            r.d(t, { K: () => o, U: () => c });
            var n = r(66268),
                a = r(77798);
            r(27828);
            var o = (0, a.cn)("UserWidget", "Content"),
                c = n.forwardRef(function (e, t) {
                    var r = e.loading,
                        a = e.preload,
                        c = e.height,
                        i = e.colorScheme,
                        l = e.className,
                        s = e.src,
                        u = e.width;
                    return n.createElement(
                        "div",
                        { className: o({ loading: r, colorScheme: i }, [l]) },
                        a &&
                            n.createElement("iframe", {
                                className: "UserWidget-Iframe",
                                ref: t,
                                width: u,
                                src: s,
                                height: r ? 300 : c,
                            }),
                        r &&
                            n.createElement("div", {
                                className: "UserWidget-Spin",
                            }),
                    );
                });
        },
        81382: (e, t, r) => {
            "use strict";
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "PreloadChunks", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(33008),
                r(17229),
                r(6077),
                r(74964);
        },
        83520: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
        84991: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => a });
            var n = r(66268);
            function a(e, t) {
                (0, n.useImperativeHandle)(t, function () {
                    return e.current;
                });
            }
        },
        89192: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { User: () => m, UserBase: () => f });
            var n = r(66268),
                a = r(77798),
                o = r(84991),
                c = r(7144),
                i = function (e, t, r) {
                    return (void 0 === t && (t = "0/0-0"), "prod_yateam" === e)
                        ? "https://center.yandex-team.ru/api/v1/user/" +
                              ("0/0-0" === t ? "404" : t) +
                              "/avatar/" +
                              (r ? "85" : "42") +
                              ".jpg"
                        : ("test" !== e
                              ? "https://avatars.mds.yandex.net"
                              : "https://avatars.mdst.yandex.net") +
                              "/get-yapic/" +
                              t +
                              "/" +
                              (r ? "islands-retina-middle" : "islands-middle");
                };
            r(68228);
            var l = (0, a.cn)("UserID", "Avatar"),
                s = function (e) {
                    var t,
                        r,
                        a,
                        o,
                        s = e.env,
                        u = e.avatarId,
                        d = e.plus,
                        f = e.child,
                        v = e.colorScheme,
                        m = e.className,
                        h = (0, c.__read)((0, n.useState)(!1), 2),
                        p = h[0],
                        g = h[1],
                        w =
                            ((r = (t = { avatarId: u, env: s }).env),
                            (a = t.avatarId),
                            {
                                src: (o = (0, n.useMemo)(
                                    function () {
                                        return i(r, a, !1);
                                    },
                                    [r, a],
                                )),
                                srcSet:
                                    o +
                                    " 1x, " +
                                    (0, n.useMemo)(
                                        function () {
                                            return i(r, a, !0);
                                        },
                                        [r, a],
                                    ) +
                                    " 2x",
                            }),
                        C = w.src,
                        y = w.srcSet,
                        E = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(
                            function () {
                                var e = E.current;
                                window &&
                                    f &&
                                    e &&
                                    g(e.getBoundingClientRect().width <= 36);
                            },
                            [f, E],
                        ),
                        n.createElement(
                            "div",
                            {
                                className: l(
                                    {
                                        child: f,
                                        plus: d,
                                        small: p,
                                        dark: "dark" === v,
                                    },
                                    [m],
                                ),
                                ref: E,
                            },
                            n.createElement("img", {
                                src: C,
                                className: "UserID-Avatar-Image",
                                srcSet: y,
                            }),
                            f &&
                                n.createElement(
                                    "svg",
                                    {
                                        className: "UserID-Avatar-ChildStroke",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 300 300",
                                    },
                                    n.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M165.9 37.9822L166.068 38.0049C166.221 38.0257 166.442 38.0562 166.726 38.0968C167.295 38.1778 168.118 38.2987 169.162 38.4618C171.249 38.7878 174.224 39.283 177.813 39.9651C184.975 41.3261 194.666 43.4461 204.678 46.4778C214.632 49.492 225.211 53.4982 233.986 58.7338C242.568 63.8543 250.611 70.8545 253.512 80.3646C262.231 108.946 272.638 153.705 267.746 188.864C263.821 217.084 243.295 239.946 214.374 255.633C185.337 271.383 152.717 277.077 132.993 274.341C113.268 271.605 83.4377 257.247 59.8001 234.191C36.2561 211.225 22.7482 183.642 26.674 155.422C33.0239 109.778 55.8032 71.8059 70.7041 51.2431C76.2121 43.6422 85.9125 39.8089 95.3615 37.7283C105.121 35.5793 116.278 34.95 126.593 35.003C136.965 35.0564 146.789 35.8036 153.998 36.5322C157.61 36.8972 160.584 37.2595 162.664 37.5319C163.704 37.6681 164.522 37.782 165.085 37.8627C165.367 37.903 165.585 37.9351 165.736 37.9575L165.9 37.9822ZM210.975 249.385C238.745 234.322 257.19 213.071 260.694 187.886C265.355 154.381 255.388 110.913 246.701 82.4364C238.203 54.5778 164.895 45.0216 164.895 45.0216C164.895 45.0216 92.1316 33.8026 76.4727 55.4113C61.8934 75.5303 39.8488 112.394 33.7267 156.401C30.2229 181.586 42.1687 207.053 64.7756 229.104C87.5594 251.328 116.05 264.812 133.973 267.298C151.895 269.784 182.987 264.566 210.975 249.385Z",
                                    }),
                                ),
                        )
                    );
                };
            (s.displayName = "UserIDAvatar"), r(1876);
            var u = function (e) {
                var t = e.children,
                    r = e.fetchMail,
                    a = e.tld,
                    o = e.showCounter,
                    i = e.counterVariant,
                    l = void 0 === i ? "number" : i,
                    s = e.colorScheme,
                    u = (0, c.__read)((0, n.useState)(0), 2),
                    d = u[0],
                    f = u[1];
                (0, n.useEffect)(
                    function () {
                        r &&
                            o &&
                            fetch(
                                "https://mail.yandex." +
                                    a +
                                    "/api/v2/userid/counters?silent",
                                { credentials: "include" },
                            )
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    return f(e.counters.unread);
                                })
                                .catch(function (e) {});
                    },
                    [a, r, o],
                );
                var v = r && d > 0 ? Math.min(d, 99) : void 0,
                    m = !!(r && v && d > v),
                    h = v && o ? "" + v + (m ? "+" : "") : null,
                    p = r || o,
                    g = [
                        "UserID-Badge-Dot",
                        "UserID-Badge-Dot_colorScheme_" + s,
                        "UserID-Badge-Dot_variant_" + l,
                    ].join(" ");
                return n.createElement(
                    "div",
                    { className: "UserID-Badge" },
                    t,
                    p &&
                        n.createElement(
                            "div",
                            { className: g },
                            "number" === l && h,
                        ),
                );
            };
            (u.displayName = "UserIDBadge"), r(2184);
            var d = (0, a.cn)("UserID", "Wrapper"),
                f = (0, n.forwardRef)(function (e, t) {
                    var r = e.tld,
                        a = e.tabIndex,
                        c = e.children,
                        i = e.env,
                        l = e.colorScheme,
                        f = e.userData,
                        v = e.onClick,
                        m = e.onPointerEnter,
                        h = e.className,
                        p = e.fetchMail,
                        g = e.showCounter,
                        w = e.counterVariant,
                        C = e.visible,
                        y = e.ariaLabel,
                        E = e.avatarSize,
                        b = e.platform,
                        _ = e.beforeAvatar,
                        S = e.afterAvatar,
                        k = f || {},
                        L = k.child,
                        I = k.plus,
                        P = k.avatarId,
                        R = (0, n.useRef)(null);
                    return (
                        (0, o.N)(R, t),
                        n.createElement(
                            "div",
                            {
                                className: d(
                                    { child: L, plus: I, default: !I },
                                    [h],
                                ),
                                style:
                                    null !== E
                                        ? { "--user-id-size": (E || 42) + "px" }
                                        : void 0,
                            },
                            n.createElement(
                                "button",
                                {
                                    "aria-expanded": C,
                                    "aria-haspopup": !0,
                                    "aria-label": y || "Ваш профиль",
                                    className: "UserID-Account",
                                    ref: R,
                                    role: "button",
                                    tabIndex: void 0 === a ? 0 : a,
                                    onClick: v,
                                    onPointerEnter: m,
                                },
                                _,
                                n.createElement(
                                    u,
                                    {
                                        fetchMail: p && "test" !== i,
                                        counterVariant: w,
                                        tld: void 0 === r ? "ru" : r,
                                        colorScheme: l,
                                        showCounter:
                                            "touch" !== b && (p || !0 === g),
                                    },
                                    n.createElement(s, {
                                        env: i,
                                        avatarId: P,
                                        plus: I,
                                        child: L,
                                        colorScheme: l,
                                    }),
                                ),
                                S,
                            ),
                            c,
                        )
                    );
                });
            f.displayName = "UserBase";
            var v = r(26656),
                m = (0, r(44389).B)(f, v.l);
        },
        89732: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { lock: () => g, unlock: () => w });
            var n,
                a = r(7555);
            function o(e) {
                return (
                    "undefined" != typeof window &&
                    null != window.navigator &&
                    e.test(window.navigator.userAgent)
                );
            }
            function c() {
                return (
                    o(/iphone|ipod|ipad/i) ||
                    (o(/macintosh/i) && navigator.maxTouchPoints > 1)
                );
            }
            function i(e, t) {
                var r = {};
                for (var n in t) t.hasOwnProperty(n) && (r[n] = e.style[n]);
                for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n]);
                return r;
            }
            function l(e) {
                return e === document.body || e === document.documentElement;
            }
            var s = Math.random().toString(36).slice(2),
                u = "__scrollLockState$".concat(s),
                d = !(function () {
                    var e = !1;
                    if (!a.O) return !1;
                    try {
                        var t = function () {
                            return null;
                        };
                        window.addEventListener("testPassive", t, {
                            get passive() {
                                e = !0;
                                return;
                            },
                        }),
                            window.removeEventListener("testPassive", t);
                    } catch (e) {}
                    return e;
                })()
                    ? void 0
                    : { passive: !1 },
                f = {
                    count: 0,
                    lastX: 0,
                    lastY: 0,
                    scrollable: null,
                    scrollX: 0,
                    scrollY: 0,
                };
            function v(e) {
                1 === e.changedTouches.length &&
                    ((f.scrollable = (function (e) {
                        for (
                            var t;
                            e &&
                            ((t = getComputedStyle(e)),
                            !/(auto|scroll)/.test(
                                t.overflow + t.overflowX + t.overflowY,
                            ));

                        )
                            e = e.parentElement;
                        return e || document.documentElement;
                    })(e.target)),
                    l(f.scrollable) ||
                        ((f.lastX = e.changedTouches[0].pageX),
                        (f.lastY = e.changedTouches[0].pageY)));
            }
            function m(e) {
                var t = f.scrollable,
                    r = f.lastX,
                    n = f.lastY;
                if (!(e.changedTouches.length > 1)) {
                    if (!t || l(t)) return void e.preventDefault();
                    var a = e.changedTouches[0].pageX,
                        o = e.changedTouches[0].pageY,
                        c = Math.abs(n - o) > Math.abs(r - a),
                        i = t.scrollTop,
                        s = t.scrollHeight - t.clientHeight,
                        u = t.scrollLeft,
                        d = t.scrollWidth - t.clientWidth,
                        v = !c && ((u <= 0 && a > r) || (u >= d && a < r));
                    ((c && ((i <= 0 && o > n) || (i >= s && o < n))) || v) &&
                        e.preventDefault(),
                        (f.lastX = a),
                        (f.lastY = o);
                }
            }
            function h() {
                f.scrollable && (f.scrollable = null);
            }
            function p(e) {
                return e || document.body;
            }
            function g(e) {
                if (a.O) {
                    var t = p(e);
                    !(function (e) {
                        var t = e[u];
                        if (t) return t.count++;
                        var r = (function (e) {
                                var t,
                                    r =
                                        l(e) &&
                                        window.innerWidth -
                                            document.documentElement
                                                .clientWidth >
                                            0,
                                    a = e.scrollHeight > e.clientHeight;
                                if (
                                    r ||
                                    a ||
                                    ((t = getComputedStyle(e).overflowY),
                                    /scroll/.test(t))
                                ) {
                                    if ("undefined" == typeof document)
                                        return 0;
                                    if (void 0 === n) {
                                        var o = document.createElement("div");
                                        (o.style.width = "100%"),
                                            (o.style.height = "200px");
                                        var c = document.createElement("div");
                                        (c.style.position = "absolute"),
                                            (c.style.top = "0"),
                                            (c.style.left = "0"),
                                            (c.style.pointerEvents = "none"),
                                            (c.style.visibility = "hidden"),
                                            (c.style.width = "200px"),
                                            (c.style.height = "150px"),
                                            (c.style.overflow = "hidden"),
                                            c.appendChild(o),
                                            document.body.appendChild(c);
                                        var i = o.offsetWidth;
                                        c.style.overflow = "scroll";
                                        var s = o.offsetWidth;
                                        i === s && (s = c.clientWidth),
                                            document.body.removeChild(c),
                                            (n = i - s);
                                    }
                                    return n;
                                }
                                return 0;
                            })(e),
                            a = parseInt(
                                getComputedStyle(e).getPropertyValue(
                                    "padding-right",
                                ),
                                10,
                            ),
                            o = i(e, {
                                paddingRight: "".concat(a + r, "px"),
                                overflow: "hidden",
                                overflowX: "hidden",
                                overflowY: "hidden",
                            });
                        e[u] = { initialStyle: o, count: 1 };
                    })(t),
                        c() &&
                            l(t) &&
                            (f.count++,
                            1 === f.count &&
                                ((f.scrollX = window.pageXOffset),
                                (f.scrollY = window.pageYOffset),
                                document.addEventListener("touchstart", v, d),
                                document.addEventListener("touchmove", m, d),
                                document.addEventListener("touchend", h, d)));
                }
            }
            function w(e) {
                if (a.O) {
                    var t = p(e),
                        r = t[u];
                    r &&
                        (r.count--, 0 === r.count) &&
                        (i(t, r.initialStyle), delete t[u]),
                        c() &&
                            l(t) &&
                            0 !== f.count &&
                            (f.count--,
                            0 === f.count &&
                                (document.removeEventListener("touchstart", v),
                                document.removeEventListener("touchmove", m),
                                document.removeEventListener("touchend", h),
                                window.scrollTo(f.scrollX, f.scrollY)));
                }
            }
        },
        99647: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { Content: () => n.U, cnUserID: () => n.K });
            var n = r(79246);
        },
    },
]);
