"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6706],
    {
        29318: (e, t, n) => {
            function r(e) {
                for (
                    var t = arguments.length,
                        n = Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r];
                throw Error(
                    "number" == typeof e
                        ? "[MobX] minified error nr: " +
                              e +
                              (n.length ? " " + n.map(String).join(",") : "") +
                              ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
                        : "[MobX] " + e,
                );
            }
            n.d(t, {
                EW: () => eL,
                Es: () => nf,
                Fq: () => nc,
                Gn: () => t5,
                HO: () => tZ,
                MN: () => en,
                Mr: () => nC,
                OB: () => nw,
                XI: () => tA,
                Zc: () => tq,
                _t: () => tS,
                go: () => nV,
                hZ: () =>
                    function e(t, n, i) {
                        if (2 == arguments.length && !np(t)) {
                            to();
                            var o = n;
                            try {
                                for (var a in o) e(t, a, o[a]);
                            } finally {
                                ta();
                            }
                            return;
                        }
                        nw(t)
                            ? t[Q].set_(n, i)
                            : n_(t)
                              ? t.set(n, i)
                              : np(t)
                                ? t.add(n)
                                : nc(t)
                                  ? ("number" != typeof n &&
                                        (n = parseInt(n, 10)),
                                    n < 0 && r("Invalid index: '" + n + "'"),
                                    to(),
                                    n >= t.length && (t.length = n + 1),
                                    (t[n] = i),
                                    ta())
                                  : r(8);
                    },
                jK: () => tC,
                jO: () => tF,
                lB: () => tY,
                mJ: () => tP,
                n8: () => tX,
                pA: () => tG,
                qT: () => tc,
                sG: () => tn,
                sH: () => eV,
                yl: () => tR,
                z7: () => tQ,
                zu: () => tz,
            });
            var i,
                o,
                a,
                s,
                u,
                c,
                l,
                h,
                f,
                _,
                v = {};
            function d() {
                return "undefined" != typeof globalThis
                    ? globalThis
                    : "undefined" != typeof window
                      ? window
                      : void 0 !== n.g
                        ? n.g
                        : "undefined" != typeof self
                          ? self
                          : v;
            }
            var p = Object.assign,
                b = Object.getOwnPropertyDescriptor,
                g = Object.defineProperty,
                y = Object.prototype,
                m = [];
            Object.freeze(m);
            var O = {};
            Object.freeze(O);
            var A = "undefined" != typeof Proxy,
                w = Object.toString();
            function S() {
                A || r("Proxy not available");
            }
            function j(e) {
                var t = !1;
                return function () {
                    if (!t) return (t = !0), e.apply(this, arguments);
                };
            }
            var E = function () {};
            function x(e) {
                return "function" == typeof e;
            }
            function k(e) {
                switch (typeof e) {
                    case "string":
                    case "symbol":
                    case "number":
                        return !0;
                }
                return !1;
            }
            function P(e) {
                return null !== e && "object" == typeof e;
            }
            function T(e) {
                if (!P(e)) return !1;
                var t = Object.getPrototypeOf(e);
                if (null == t) return !0;
                var n =
                    Object.hasOwnProperty.call(t, "constructor") &&
                    t.constructor;
                return "function" == typeof n && n.toString() === w;
            }
            function N(e) {
                var t = null == e ? void 0 : e.constructor;
                return (
                    !!t &&
                    ("GeneratorFunction" === t.name ||
                        "GeneratorFunction" === t.displayName)
                );
            }
            function V(e, t, n) {
                g(e, t, {
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                    value: n,
                });
            }
            function C(e, t, n) {
                g(e, t, {
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                    value: n,
                });
            }
            function R(e, t) {
                var n = "isMobX" + e;
                return (
                    (t.prototype[n] = !0),
                    function (e) {
                        return P(e) && !0 === e[n];
                    }
                );
            }
            function D(e) {
                return e instanceof Map;
            }
            function L(e) {
                return e instanceof Set;
            }
            var B = void 0 !== Object.getOwnPropertySymbols,
                M =
                    "undefined" != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : B
                          ? function (e) {
                                return Object.getOwnPropertyNames(e).concat(
                                    Object.getOwnPropertySymbols(e),
                                );
                            }
                          : Object.getOwnPropertyNames;
            function I(e) {
                return null === e ? null : "object" == typeof e ? "" + e : e;
            }
            function U(e, t) {
                return y.hasOwnProperty.call(e, t);
            }
            var K =
                Object.getOwnPropertyDescriptors ||
                function (e) {
                    var t = {};
                    return (
                        M(e).forEach(function (n) {
                            t[n] = b(e, n);
                        }),
                        t
                    );
                };
            function G(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(
                            e,
                            (function (e) {
                                var t = (function (e, t) {
                                    if ("object" != typeof e || null === e)
                                        return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var r = n.call(e, t || "default");
                                        if ("object" != typeof r) return r;
                                        throw TypeError(
                                            "@@toPrimitive must return a primitive value.",
                                        );
                                    }
                                    return ("string" === t ? String : Number)(
                                        e,
                                    );
                                })(e, "string");
                                return "symbol" == typeof t ? t : String(t);
                            })(r.key),
                            r,
                        );
                }
            }
            function q(e, t, n) {
                return (
                    t && G(e.prototype, t),
                    n && G(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                );
            }
            function H() {
                return (H = Object.assign
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
            function W(e, t) {
                (e.prototype = Object.create(t.prototype)),
                    (e.prototype.constructor = e),
                    z(e, t);
            }
            function z(e, t) {
                return (z = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return (e.__proto__ = t), e;
                      })(e, t);
            }
            function F(e) {
                if (void 0 === e)
                    throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return e;
            }
            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function Y(e, t) {
                var n =
                    ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return X(e, void 0);
                            var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            if (
                                ("Object" === n &&
                                    e.constructor &&
                                    (n = e.constructor.name),
                                "Map" === n || "Set" === n)
                            )
                                return Array.from(e);
                            if (
                                "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n,
                                )
                            )
                                return X(e, void 0);
                        }
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0;
                    return function () {
                        return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                    };
                }
                throw TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var J = Symbol("mobx-stored-annotations");
            function Z(e) {
                return Object.assign(function (t, n) {
                    $(t, n, e);
                }, e);
            }
            function $(e, t, n) {
                U(e, J) || V(e, J, H({}, e[J])),
                    "override" !== n.annotationType_ && (e[J][t] = n);
            }
            var Q = Symbol("mobx administration"),
                ee = (function () {
                    function e(e) {
                        void 0 === e && (e = "Atom"),
                            (this.name_ = void 0),
                            (this.isPendingUnobservation_ = !1),
                            (this.isBeingObserved_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = u.NOT_TRACKING_),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            (this.name_ = e);
                    }
                    var t = e.prototype;
                    return (
                        (t.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.reportObserved = function () {
                            return ts(this);
                        }),
                        (t.reportChanged = function () {
                            to(),
                                tu(this),
                                (tt.stateVersion =
                                    tt.stateVersion < Number.MAX_SAFE_INTEGER
                                        ? tt.stateVersion + 1
                                        : Number.MIN_SAFE_INTEGER),
                                ta();
                        }),
                        (t.toString = function () {
                            return this.name_;
                        }),
                        e
                    );
                })(),
                et = R("Atom", ee);
            function en(e, t, n) {
                void 0 === t && (t = E), void 0 === n && (n = E);
                var r = new ee(e);
                return (
                    t !== E && tN("onBO", r, t, void 0), n !== E && tT(r, n), r
                );
            }
            var er = {
                structural: function (e, t) {
                    return nL(e, t);
                },
                default: function (e, t) {
                    return Object.is
                        ? Object.is(e, t)
                        : e === t
                          ? 0 !== e || 1 / e == 1 / t
                          : e != e && t != t;
                },
            };
            function ei(e, t, n) {
                if (tH(e)) return e;
                if (Array.isArray(e)) return eV.array(e, { name: n });
                if (T(e)) return eV.object(e, void 0, { name: n });
                if (D(e)) return eV.map(e, { name: n });
                if (L(e)) return eV.set(e, { name: n });
                if ("function" == typeof e && !tj(e) && !tK(e))
                    if (N(e)) return tI(e);
                    else return tw(n, e);
                return e;
            }
            function eo(e) {
                return e;
            }
            function ea(e, t) {
                return {
                    annotationType_: e,
                    options_: t,
                    make_: es,
                    extend_: eu,
                };
            }
            function es(e, t, n, r) {
                if (null != (i = this.options_) && i.bound)
                    return +(null !== this.extend_(e, t, n, !1));
                if (r === e.target_)
                    return 2 * (null !== this.extend_(e, t, n, !1));
                if (tj(n.value)) return 1;
                var i,
                    o = ec(e, this, t, n, !1);
                return g(r, t, o), 2;
            }
            function eu(e, t, n, r) {
                var i = ec(e, this, t, n);
                return e.defineProperty_(t, i, r);
            }
            function ec(e, t, n, r, i) {
                void 0 === i && (i = tt.safeDescriptors),
                    t.annotationType_,
                    r.value;
                var o,
                    a,
                    s,
                    u,
                    c,
                    l,
                    h,
                    f,
                    _ = r.value;
                return (
                    null != (o = t.options_) &&
                        o.bound &&
                        (_ = _.bind(null != (f = e.proxy_) ? f : e.target_)),
                    {
                        value: eK(
                            null !=
                                (a = null == (s = t.options_) ? void 0 : s.name)
                                ? a
                                : n.toString(),
                            _,
                            null !=
                                (u =
                                    null == (c = t.options_)
                                        ? void 0
                                        : c.autoAction) && u,
                            null != (l = t.options_) && l.bound
                                ? null != (h = e.proxy_)
                                    ? h
                                    : e.target_
                                : void 0,
                        ),
                        configurable: !i || e.isPlainObject_,
                        enumerable: !1,
                        writable: !i,
                    }
                );
            }
            function el(e, t) {
                return {
                    annotationType_: e,
                    options_: t,
                    make_: eh,
                    extend_: ef,
                };
            }
            function eh(e, t, n, r) {
                if (r === e.target_)
                    return 2 * (null !== this.extend_(e, t, n, !1));
                if (
                    null != (i = this.options_) &&
                    i.bound &&
                    (!U(e.target_, t) || !tK(e.target_[t])) &&
                    null === this.extend_(e, t, n, !1)
                )
                    return 0;
                if (tK(n.value)) return 1;
                var i,
                    o = e_(e, this, t, n, !1, !1);
                return g(r, t, o), 2;
            }
            function ef(e, t, n, r) {
                var i,
                    o = e_(
                        e,
                        this,
                        t,
                        n,
                        null == (i = this.options_) ? void 0 : i.bound,
                    );
                return e.defineProperty_(t, o, r);
            }
            function e_(e, t, n, r, i, o) {
                void 0 === o && (o = tt.safeDescriptors),
                    t.annotationType_,
                    r.value;
                var a,
                    s = r.value;
                return (
                    tK(s) || (s = tI(s)),
                    i &&
                        ((s = s.bind(
                            null != (a = e.proxy_) ? a : e.target_,
                        )).isMobXFlow = !0),
                    {
                        value: s,
                        configurable: !o || e.isPlainObject_,
                        enumerable: !1,
                        writable: !o,
                    }
                );
            }
            function ev(e, t) {
                return {
                    annotationType_: e,
                    options_: t,
                    make_: ed,
                    extend_: ep,
                };
            }
            function ed(e, t, n) {
                return +(null !== this.extend_(e, t, n, !1));
            }
            function ep(e, t, n, r) {
                var i, o;
                return (
                    (i = this),
                    (o = n),
                    i.annotationType_,
                    o.get,
                    e.defineComputedProperty_(
                        t,
                        H({}, this.options_, { get: n.get, set: n.set }),
                        r,
                    )
                );
            }
            function eb(e, t) {
                return {
                    annotationType_: e,
                    options_: t,
                    make_: eg,
                    extend_: ey,
                };
            }
            function eg(e, t, n) {
                return +(null !== this.extend_(e, t, n, !1));
            }
            function ey(e, t, n, r) {
                var i, o, a;
                return (
                    (a = this),
                    a.annotationType_,
                    e.defineObservableProperty_(
                        t,
                        n.value,
                        null !=
                            (i =
                                null == (o = this.options_)
                                    ? void 0
                                    : o.enhancer)
                            ? i
                            : ei,
                        r,
                    )
                );
            }
            var em = eO();
            function eO(e) {
                return {
                    annotationType_: "true",
                    options_: e,
                    make_: eA,
                    extend_: ew,
                };
            }
            function eA(e, t, n, r) {
                if (n.get) return eL.make_(e, t, n, r);
                if (n.set) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        c = eK(t.toString(), n.set);
                    return r === e.target_
                        ? 2 *
                              (null !==
                                  e.defineProperty_(t, {
                                      configurable:
                                          !tt.safeDescriptors ||
                                          e.isPlainObject_,
                                      set: c,
                                  }))
                        : (g(r, t, { configurable: !0, set: c }), 2);
                }
                if (r !== e.target_ && "function" == typeof n.value)
                    return N(n.value)
                        ? (null != (s = this.options_) && s.autoBind
                              ? tI.bound
                              : tI
                          ).make_(e, t, n, r)
                        : (null != (a = this.options_) && a.autoBind
                              ? tw.bound
                              : tw
                          ).make_(e, t, n, r);
                var l =
                    (null == (i = this.options_) ? void 0 : i.deep) === !1
                        ? eV.ref
                        : eV;
                return (
                    "function" == typeof n.value &&
                        null != (o = this.options_) &&
                        o.autoBind &&
                        (n.value = n.value.bind(
                            null != (u = e.proxy_) ? u : e.target_,
                        )),
                    l.make_(e, t, n, r)
                );
            }
            function ew(e, t, n, r) {
                var i, o, a;
                return n.get
                    ? eL.extend_(e, t, n, r)
                    : n.set
                      ? e.defineProperty_(
                            t,
                            {
                                configurable:
                                    !tt.safeDescriptors || e.isPlainObject_,
                                set: eK(t.toString(), n.set),
                            },
                            r,
                        )
                      : ("function" == typeof n.value &&
                            null != (i = this.options_) &&
                            i.autoBind &&
                            (n.value = n.value.bind(
                                null != (a = e.proxy_) ? a : e.target_,
                            )),
                        ((null == (o = this.options_) ? void 0 : o.deep) === !1
                            ? eV.ref
                            : eV
                        ).extend_(e, t, n, r));
            }
            var eS = {
                deep: !0,
                name: void 0,
                defaultDecorator: void 0,
                proxy: !0,
            };
            Object.freeze(eS);
            var ej = eb("observable"),
                eE = eb("observable.ref", { enhancer: eo }),
                ex = eb("observable.shallow", {
                    enhancer: function (e, t, n) {
                        return null == e || nw(e) || nc(e) || n_(e) || np(e)
                            ? e
                            : Array.isArray(e)
                              ? eV.array(e, { name: n, deep: !1 })
                              : T(e)
                                ? eV.object(e, void 0, { name: n, deep: !1 })
                                : D(e)
                                  ? eV.map(e, { name: n, deep: !1 })
                                  : L(e)
                                    ? eV.set(e, { name: n, deep: !1 })
                                    : void 0;
                    },
                }),
                ek = eb("observable.struct", {
                    enhancer: function (e, t) {
                        return nL(e, t) ? t : e;
                    },
                }),
                eP = Z(ej);
            function eT(e) {
                var t, n, r;
                return !0 === e.deep
                    ? ei
                    : !1 === e.deep
                      ? eo
                      : (t = e.defaultDecorator) &&
                          null !=
                              (n =
                                  null == (r = t.options_)
                                      ? void 0
                                      : r.enhancer)
                        ? n
                        : ei;
            }
            function eN(e, t, n) {
                return k(t)
                    ? void $(e, t, ej)
                    : tH(e)
                      ? e
                      : T(e)
                        ? eV.object(e, t, n)
                        : Array.isArray(e)
                          ? eV.array(e, t)
                          : D(e)
                            ? eV.map(e, t)
                            : L(e)
                              ? eV.set(e, t)
                              : "object" == typeof e && null !== e
                                ? e
                                : eV.box(e, t);
            }
            p(eN, eP);
            var eV = p(eN, {
                    box: function (e, t) {
                        var n = t || eS;
                        return new ez(e, eT(n), n.name, !0, n.equals);
                    },
                    array: function (e, t) {
                        var n = t || eS;
                        return (
                            !1 === tt.useProxies || !1 === n.proxy
                                ? function (e, t, n) {
                                      return new nP(e, t, n);
                                  }
                                : function (e, t, n, r) {
                                      void 0 === n && (n = "ObservableArray"),
                                          void 0 === r && (r = !1),
                                          S();
                                      var i = new nn(n, t, r, !1);
                                      C(i.values_, Q, i);
                                      var o = new Proxy(i.values_, nt);
                                      if (((i.proxy_ = o), e && e.length)) {
                                          var a = eH(!0);
                                          i.spliceWithArray_(0, 0, e), eW(a);
                                      }
                                      return o;
                                  }
                        )(e, eT(n), n.name);
                    },
                    map: function (e, t) {
                        var n = t || eS;
                        return new nf(e, eT(n), n.name);
                    },
                    set: function (e, t) {
                        var n = t || eS;
                        return new nd(e, eT(n), n.name);
                    },
                    object: function (e, t, n) {
                        var r, i, o, a;
                        return (function (e, t, n, r) {
                            var i = K(t),
                                o = nm(e, void 0)[Q];
                            to();
                            try {
                                M(i).forEach(function (e) {
                                    o.extend_(e, i[e], !n || !(e in n) || n[e]);
                                });
                            } finally {
                                ta();
                            }
                            return e;
                        })(
                            !1 === tt.useProxies ||
                                (null == n ? void 0 : n.proxy) === !1
                                ? nm({}, n)
                                : ((r = {}),
                                  (i = n),
                                  S(),
                                  null != (a = (o = (r = nm(r, i))[Q]).proxy_)
                                      ? a
                                      : (o.proxy_ = new Proxy(r, t1))),
                            e,
                            t,
                        );
                    },
                    ref: Z(eE),
                    shallow: Z(ex),
                    deep: eP,
                    struct: Z(ek),
                }),
                eC = "computed",
                eR = ev(eC),
                eD = ev("computed.struct", { equals: er.structural }),
                eL = function (e, t) {
                    if (k(t)) return $(e, t, eR);
                    if (T(e)) return Z(ev(eC, e));
                    var n = T(t) ? t : {};
                    return (
                        (n.get = e),
                        n.name || (n.name = e.name || ""),
                        new eX(n)
                    );
                };
            Object.assign(eL, eR), (eL.struct = Z(eD));
            var eB = 0,
                eM = 1,
                eI =
                    null !=
                        (i =
                            null == (o = b(function () {}, "name"))
                                ? void 0
                                : o.configurable) && i,
                eU = {
                    value: "action",
                    configurable: !0,
                    writable: !1,
                    enumerable: !1,
                };
            function eK(e, t, n, r) {
                function i() {
                    return eG(e, n, t, r || this, arguments);
                }
                return (
                    void 0 === n && (n = !1),
                    (i.isMobxAction = !0),
                    eI && ((eU.value = e), g(i, "name", eU)),
                    i
                );
            }
            function eG(e, t, n, i, o) {
                var a,
                    s,
                    u,
                    c,
                    l,
                    h,
                    f =
                        ((a = t),
                        (s = tt.trackingDerivation),
                        (u = !a || !s),
                        to(),
                        (c = tt.allowStateChanges),
                        u && (e3(), (c = eH(!0))),
                        (eB = (l = {
                            runAsAction_: u,
                            prevDerivation_: s,
                            prevAllowStateChanges_: c,
                            prevAllowStateReads_: e8(!0),
                            notifySpy_: !1,
                            startTime_: 0,
                            actionId_: eM++,
                            parentActionId_: eB,
                        }).actionId_),
                        l);
                try {
                    return n.apply(i, o);
                } catch (e) {
                    throw ((f.error_ = e), e);
                } finally {
                    eB !== (h = f).actionId_ && r(30),
                        (eB = h.parentActionId_),
                        void 0 !== h.error_ && (tt.suppressReactionErrors = !0),
                        eW(h.prevAllowStateChanges_),
                        e7(h.prevAllowStateReads_),
                        ta(),
                        h.runAsAction_ && e6(h.prevDerivation_),
                        (tt.suppressReactionErrors = !1);
                }
            }
            function eq(e, t) {
                var n = eH(e);
                try {
                    return t();
                } finally {
                    eW(n);
                }
            }
            function eH(e) {
                var t = tt.allowStateChanges;
                return (tt.allowStateChanges = e), t;
            }
            function eW(e) {
                tt.allowStateChanges = e;
            }
            a = Symbol.toPrimitive;
            var ez = (function (e) {
                    function t(t, n, r, i, o) {
                        var a;
                        return (
                            void 0 === r && (r = "ObservableValue"),
                            void 0 === i && (i = !0),
                            void 0 === o && (o = er.default),
                            ((a = e.call(this, r) || this).enhancer = void 0),
                            (a.name_ = void 0),
                            (a.equals = void 0),
                            (a.hasUnreportedChange_ = !1),
                            (a.interceptors_ = void 0),
                            (a.changeListeners_ = void 0),
                            (a.value_ = void 0),
                            (a.dehancer = void 0),
                            (a.enhancer = n),
                            (a.name_ = r),
                            (a.equals = o),
                            (a.value_ = n(t, void 0, r)),
                            a
                        );
                    }
                    W(t, e);
                    var n = t.prototype;
                    return (
                        (n.dehanceValue = function (e) {
                            return void 0 !== this.dehancer
                                ? this.dehancer(e)
                                : e;
                        }),
                        (n.set = function (e) {
                            this.value_,
                                (e = this.prepareNewValue_(e)) !==
                                    tt.UNCHANGED && this.setNewValue_(e);
                        }),
                        (n.prepareNewValue_ = function (e) {
                            if ((eQ(this), t2(this))) {
                                var t = t6(this, {
                                    object: this,
                                    type: ne,
                                    newValue: e,
                                });
                                if (!t) return tt.UNCHANGED;
                                e = t.newValue;
                            }
                            return (
                                (e = this.enhancer(e, this.value_, this.name_)),
                                this.equals(this.value_, e) ? tt.UNCHANGED : e
                            );
                        }),
                        (n.setNewValue_ = function (e) {
                            var t = this.value_;
                            (this.value_ = e),
                                this.reportChanged(),
                                t8(this) &&
                                    t4(this, {
                                        type: ne,
                                        object: this,
                                        newValue: e,
                                        oldValue: t,
                                    });
                        }),
                        (n.get = function () {
                            return (
                                this.reportObserved(),
                                this.dehanceValue(this.value_)
                            );
                        }),
                        (n.intercept_ = function (e) {
                            return t3(this, e);
                        }),
                        (n.observe_ = function (e, t) {
                            return (
                                t &&
                                    e({
                                        observableKind: "value",
                                        debugObjectName: this.name_,
                                        object: this,
                                        type: ne,
                                        newValue: this.value_,
                                        oldValue: void 0,
                                    }),
                                t7(this, e)
                            );
                        }),
                        (n.raw = function () {
                            return this.value_;
                        }),
                        (n.toJSON = function () {
                            return this.get();
                        }),
                        (n.toString = function () {
                            return this.name_ + "[" + this.value_ + "]";
                        }),
                        (n.valueOf = function () {
                            return I(this.get());
                        }),
                        (n[a] = function () {
                            return this.valueOf();
                        }),
                        t
                    );
                })(ee),
                eF = R("ObservableValue", ez);
            s = Symbol.toPrimitive;
            var eX = (function () {
                    function e(e) {
                        (this.dependenciesState_ = u.NOT_TRACKING_),
                            (this.observing_ = []),
                            (this.newObserving_ = null),
                            (this.isBeingObserved_ = !1),
                            (this.isPendingUnobservation_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = u.UP_TO_DATE_),
                            (this.unboundDepsCount_ = 0),
                            (this.value_ = new eJ(null)),
                            (this.name_ = void 0),
                            (this.triggeredBy_ = void 0),
                            (this.isComputing_ = !1),
                            (this.isRunningSetter_ = !1),
                            (this.derivation = void 0),
                            (this.setter_ = void 0),
                            (this.isTracing_ = c.NONE),
                            (this.scope_ = void 0),
                            (this.equals_ = void 0),
                            (this.requiresReaction_ = void 0),
                            (this.keepAlive_ = void 0),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            e.get || r(31),
                            (this.derivation = e.get),
                            (this.name_ = e.name || "ComputedValue"),
                            e.set &&
                                (this.setter_ = eK(
                                    "ComputedValue-setter",
                                    e.set,
                                )),
                            (this.equals_ =
                                e.equals ||
                                (e.compareStructural || e.struct
                                    ? er.structural
                                    : er.default)),
                            (this.scope_ = e.context),
                            (this.requiresReaction_ = e.requiresReaction),
                            (this.keepAlive_ = !!e.keepAlive);
                    }
                    var t = e.prototype;
                    return (
                        (t.onBecomeStale_ = function () {
                            var e;
                            (e = this),
                                e.lowestObserverState_ === u.UP_TO_DATE_ &&
                                    ((e.lowestObserverState_ =
                                        u.POSSIBLY_STALE_),
                                    e.observers_.forEach(function (e) {
                                        e.dependenciesState_ ===
                                            u.UP_TO_DATE_ &&
                                            ((e.dependenciesState_ =
                                                u.POSSIBLY_STALE_),
                                            e.onBecomeStale_());
                                    }));
                        }),
                        (t.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.get = function () {
                            if (
                                (this.isComputing_ &&
                                    r(32, this.name_, this.derivation),
                                0 !== tt.inBatch ||
                                    0 !== this.observers_.size ||
                                    this.keepAlive_)
                            ) {
                                if ((ts(this), e$(this))) {
                                    var e,
                                        t = tt.trackingContext;
                                    this.keepAlive_ &&
                                        !t &&
                                        (tt.trackingContext = this),
                                        this.trackAndCompute() &&
                                            ((e = this),
                                            e.lowestObserverState_ !==
                                                u.STALE_ &&
                                                ((e.lowestObserverState_ =
                                                    u.STALE_),
                                                e.observers_.forEach(
                                                    function (t) {
                                                        t.dependenciesState_ ===
                                                        u.POSSIBLY_STALE_
                                                            ? (t.dependenciesState_ =
                                                                  u.STALE_)
                                                            : t.dependenciesState_ ===
                                                                  u.UP_TO_DATE_ &&
                                                              (e.lowestObserverState_ =
                                                                  u.UP_TO_DATE_);
                                                    },
                                                ))),
                                        (tt.trackingContext = t);
                                }
                            } else
                                e$(this) &&
                                    (this.warnAboutUntrackedRead_(),
                                    to(),
                                    (this.value_ = this.computeValue_(!1)),
                                    ta());
                            var n = this.value_;
                            if (eZ(n)) throw n.cause;
                            return n;
                        }),
                        (t.set = function (e) {
                            if (this.setter_) {
                                this.isRunningSetter_ && r(33, this.name_),
                                    (this.isRunningSetter_ = !0);
                                try {
                                    this.setter_.call(this.scope_, e);
                                } finally {
                                    this.isRunningSetter_ = !1;
                                }
                            } else r(34, this.name_);
                        }),
                        (t.trackAndCompute = function () {
                            var e = this.value_,
                                t = this.dependenciesState_ === u.NOT_TRACKING_,
                                n = this.computeValue_(!0),
                                r = t || eZ(e) || eZ(n) || !this.equals_(e, n);
                            return r && (this.value_ = n), r;
                        }),
                        (t.computeValue_ = function (e) {
                            this.isComputing_ = !0;
                            var t,
                                n = eH(!1);
                            if (e) t = e0(this, this.derivation, this.scope_);
                            else if (!0 === tt.disableErrorBoundaries)
                                t = this.derivation.call(this.scope_);
                            else
                                try {
                                    t = this.derivation.call(this.scope_);
                                } catch (e) {
                                    t = new eJ(e);
                                }
                            return eW(n), (this.isComputing_ = !1), t;
                        }),
                        (t.suspend_ = function () {
                            this.keepAlive_ ||
                                (e1(this), (this.value_ = void 0));
                        }),
                        (t.observe_ = function (e, t) {
                            var n = this,
                                r = !0,
                                i = void 0;
                            return tE(function () {
                                var o = n.get();
                                if (!r || t) {
                                    var a = e3();
                                    e({
                                        observableKind: "computed",
                                        debugObjectName: n.name_,
                                        type: ne,
                                        object: n,
                                        newValue: o,
                                        oldValue: i,
                                    }),
                                        e6(a);
                                }
                                (r = !1), (i = o);
                            });
                        }),
                        (t.warnAboutUntrackedRead_ = function () {}),
                        (t.toString = function () {
                            return (
                                this.name_ +
                                "[" +
                                this.derivation.toString() +
                                "]"
                            );
                        }),
                        (t.valueOf = function () {
                            return I(this.get());
                        }),
                        (t[s] = function () {
                            return this.valueOf();
                        }),
                        e
                    );
                })(),
                eY = R("ComputedValue", eX);
            !(function (e) {
                (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
                    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
                    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
                    (e[(e.STALE_ = 2)] = "STALE_");
            })(u || (u = {})),
                (function (e) {
                    (e[(e.NONE = 0)] = "NONE"),
                        (e[(e.LOG = 1)] = "LOG"),
                        (e[(e.BREAK = 2)] = "BREAK");
                })(c || (c = {}));
            var eJ = function (e) {
                (this.cause = void 0), (this.cause = e);
            };
            function eZ(e) {
                return e instanceof eJ;
            }
            function e$(e) {
                switch (e.dependenciesState_) {
                    case u.UP_TO_DATE_:
                        return !1;
                    case u.NOT_TRACKING_:
                    case u.STALE_:
                        return !0;
                    case u.POSSIBLY_STALE_:
                        for (
                            var t = e8(!0),
                                n = e3(),
                                r = e.observing_,
                                i = r.length,
                                o = 0;
                            o < i;
                            o++
                        ) {
                            var a = r[o];
                            if (eY(a)) {
                                if (tt.disableErrorBoundaries) a.get();
                                else
                                    try {
                                        a.get();
                                    } catch (e) {
                                        return e6(n), e7(t), !0;
                                    }
                                if (e.dependenciesState_ === u.STALE_)
                                    return e6(n), e7(t), !0;
                            }
                        }
                        return e4(e), e6(n), e7(t), !1;
                }
            }
            function eQ(e) {}
            function e0(e, t, n) {
                var r,
                    i = e8(!0);
                e4(e),
                    (e.newObserving_ = Array(e.observing_.length + 100)),
                    (e.unboundDepsCount_ = 0),
                    (e.runId_ = ++tt.runId);
                var o = tt.trackingDerivation;
                if (
                    ((tt.trackingDerivation = e),
                    tt.inBatch++,
                    !0 === tt.disableErrorBoundaries)
                )
                    r = t.call(n);
                else
                    try {
                        r = t.call(n);
                    } catch (e) {
                        r = new eJ(e);
                    }
                return (
                    tt.inBatch--,
                    (tt.trackingDerivation = o),
                    (function (e) {
                        for (
                            var t = e.observing_,
                                n = (e.observing_ = e.newObserving_),
                                r = u.UP_TO_DATE_,
                                i = 0,
                                o = e.unboundDepsCount_,
                                a = 0;
                            a < o;
                            a++
                        ) {
                            var s = n[a];
                            0 === s.diffValue_ &&
                                ((s.diffValue_ = 1),
                                i !== a && (n[i] = s),
                                i++),
                                s.dependenciesState_ > r &&
                                    (r = s.dependenciesState_);
                        }
                        for (
                            n.length = i, e.newObserving_ = null, o = t.length;
                            o--;

                        ) {
                            var c = t[o];
                            0 === c.diffValue_ && tr(c, e), (c.diffValue_ = 0);
                        }
                        for (; i--; ) {
                            var l,
                                h,
                                f = n[i];
                            1 === f.diffValue_ &&
                                ((f.diffValue_ = 0),
                                (l = f),
                                (h = e),
                                l.observers_.add(h),
                                l.lowestObserverState_ > h.dependenciesState_ &&
                                    (l.lowestObserverState_ =
                                        h.dependenciesState_));
                        }
                        r !== u.UP_TO_DATE_ &&
                            ((e.dependenciesState_ = r), e.onBecomeStale_());
                    })(e),
                    e7(i),
                    r
                );
            }
            function e1(e) {
                var t = e.observing_;
                e.observing_ = [];
                for (var n = t.length; n--; ) tr(t[n], e);
                e.dependenciesState_ = u.NOT_TRACKING_;
            }
            function e2(e) {
                var t = e3();
                try {
                    return e();
                } finally {
                    e6(t);
                }
            }
            function e3() {
                var e = tt.trackingDerivation;
                return (tt.trackingDerivation = null), e;
            }
            function e6(e) {
                tt.trackingDerivation = e;
            }
            function e8(e) {
                var t = tt.allowStateReads;
                return (tt.allowStateReads = e), t;
            }
            function e7(e) {
                tt.allowStateReads = e;
            }
            function e4(e) {
                if (e.dependenciesState_ !== u.UP_TO_DATE_) {
                    e.dependenciesState_ = u.UP_TO_DATE_;
                    for (var t = e.observing_, n = t.length; n--; )
                        t[n].lowestObserverState_ = u.UP_TO_DATE_;
                }
            }
            var e5 = function () {
                    (this.version = 6),
                        (this.UNCHANGED = {}),
                        (this.trackingDerivation = null),
                        (this.trackingContext = null),
                        (this.runId = 0),
                        (this.mobxGuid = 0),
                        (this.inBatch = 0),
                        (this.pendingUnobservations = []),
                        (this.pendingReactions = []),
                        (this.isRunningReactions = !1),
                        (this.allowStateChanges = !1),
                        (this.allowStateReads = !0),
                        (this.enforceActions = !0),
                        (this.spyListeners = []),
                        (this.globalReactionErrorHandlers = []),
                        (this.computedRequiresReaction = !1),
                        (this.reactionRequiresObservable = !1),
                        (this.observableRequiresReaction = !1),
                        (this.disableErrorBoundaries = !1),
                        (this.suppressReactionErrors = !1),
                        (this.useProxies = !0),
                        (this.verifyProxies = !1),
                        (this.safeDescriptors = !0),
                        (this.stateVersion = Number.MIN_SAFE_INTEGER);
                },
                e9 = !0,
                te = !1,
                tt = (function () {
                    var e = d();
                    return (e.__mobxInstanceCount > 0 &&
                        !e.__mobxGlobals &&
                        (e9 = !1),
                    e.__mobxGlobals &&
                        e.__mobxGlobals.version !== new e5().version &&
                        (e9 = !1),
                    e9)
                        ? e.__mobxGlobals
                            ? ((e.__mobxInstanceCount += 1),
                              e.__mobxGlobals.UNCHANGED ||
                                  (e.__mobxGlobals.UNCHANGED = {}),
                              e.__mobxGlobals)
                            : ((e.__mobxInstanceCount = 1),
                              (e.__mobxGlobals = new e5()))
                        : (setTimeout(function () {
                              te || r(35);
                          }, 1),
                          new e5());
                })();
            function tn() {
                return tt;
            }
            function tr(e, t) {
                e.observers_.delete(t), 0 === e.observers_.size && ti(e);
            }
            function ti(e) {
                !1 === e.isPendingUnobservation_ &&
                    ((e.isPendingUnobservation_ = !0),
                    tt.pendingUnobservations.push(e));
            }
            function to() {
                tt.inBatch++;
            }
            function ta() {
                if (0 == --tt.inBatch) {
                    th();
                    for (
                        var e = tt.pendingUnobservations, t = 0;
                        t < e.length;
                        t++
                    ) {
                        var n = e[t];
                        (n.isPendingUnobservation_ = !1),
                            0 === n.observers_.size &&
                                (n.isBeingObserved_ &&
                                    ((n.isBeingObserved_ = !1), n.onBUO()),
                                n instanceof eX && n.suspend_());
                    }
                    tt.pendingUnobservations = [];
                }
            }
            function ts(e) {
                var t = tt.trackingDerivation;
                return null !== t
                    ? (t.runId_ !== e.lastAccessedBy_ &&
                          ((e.lastAccessedBy_ = t.runId_),
                          (t.newObserving_[t.unboundDepsCount_++] = e),
                          !e.isBeingObserved_ &&
                              tt.trackingContext &&
                              ((e.isBeingObserved_ = !0), e.onBO())),
                      e.isBeingObserved_)
                    : (0 === e.observers_.size && tt.inBatch > 0 && ti(e), !1);
            }
            function tu(e) {
                e.lowestObserverState_ !== u.STALE_ &&
                    ((e.lowestObserverState_ = u.STALE_),
                    e.observers_.forEach(function (e) {
                        e.dependenciesState_ === u.UP_TO_DATE_ &&
                            e.onBecomeStale_(),
                            (e.dependenciesState_ = u.STALE_);
                    }));
            }
            var tc = (function () {
                    function e(e, t, n, r) {
                        void 0 === e && (e = "Reaction"),
                            (this.name_ = void 0),
                            (this.onInvalidate_ = void 0),
                            (this.errorHandler_ = void 0),
                            (this.requiresObservable_ = void 0),
                            (this.observing_ = []),
                            (this.newObserving_ = []),
                            (this.dependenciesState_ = u.NOT_TRACKING_),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.unboundDepsCount_ = 0),
                            (this.isDisposed_ = !1),
                            (this.isScheduled_ = !1),
                            (this.isTrackPending_ = !1),
                            (this.isRunning_ = !1),
                            (this.isTracing_ = c.NONE),
                            (this.name_ = e),
                            (this.onInvalidate_ = t),
                            (this.errorHandler_ = n),
                            (this.requiresObservable_ = r);
                    }
                    var t = e.prototype;
                    return (
                        (t.onBecomeStale_ = function () {
                            this.schedule_();
                        }),
                        (t.schedule_ = function () {
                            this.isScheduled_ ||
                                ((this.isScheduled_ = !0),
                                tt.pendingReactions.push(this),
                                th());
                        }),
                        (t.isScheduled = function () {
                            return this.isScheduled_;
                        }),
                        (t.runReaction_ = function () {
                            if (!this.isDisposed_) {
                                to(), (this.isScheduled_ = !1);
                                var e = tt.trackingContext;
                                if (((tt.trackingContext = this), e$(this))) {
                                    this.isTrackPending_ = !0;
                                    try {
                                        this.onInvalidate_();
                                    } catch (e) {
                                        this.reportExceptionInDerivation_(e);
                                    }
                                }
                                (tt.trackingContext = e), ta();
                            }
                        }),
                        (t.track = function (e) {
                            if (!this.isDisposed_) {
                                to(), (this.isRunning_ = !0);
                                var t = tt.trackingContext;
                                tt.trackingContext = this;
                                var n = e0(this, e, void 0);
                                (tt.trackingContext = t),
                                    (this.isRunning_ = !1),
                                    (this.isTrackPending_ = !1),
                                    this.isDisposed_ && e1(this),
                                    eZ(n) &&
                                        this.reportExceptionInDerivation_(
                                            n.cause,
                                        ),
                                    ta();
                            }
                        }),
                        (t.reportExceptionInDerivation_ = function (e) {
                            var t = this;
                            if (this.errorHandler_)
                                return void this.errorHandler_(e, this);
                            if (tt.disableErrorBoundaries) throw e;
                            tt.suppressReactionErrors ||
                                console.error(
                                    "[mobx] uncaught error in '" + this + "'",
                                    e,
                                ),
                                tt.globalReactionErrorHandlers.forEach(
                                    function (n) {
                                        return n(e, t);
                                    },
                                );
                        }),
                        (t.dispose = function () {
                            !this.isDisposed_ &&
                                ((this.isDisposed_ = !0),
                                this.isRunning_ || (to(), e1(this), ta()));
                        }),
                        (t.getDisposer_ = function () {
                            var e = this.dispose.bind(this);
                            return (e[Q] = this), e;
                        }),
                        (t.toString = function () {
                            return "Reaction[" + this.name_ + "]";
                        }),
                        (t.trace = function (e) {
                            void 0 === e && (e = !1);
                        }),
                        e
                    );
                })(),
                tl = function (e) {
                    return e();
                };
            function th() {
                tt.inBatch > 0 || tt.isRunningReactions || tl(tf);
            }
            function tf() {
                tt.isRunningReactions = !0;
                for (var e = tt.pendingReactions, t = 0; e.length > 0; ) {
                    100 == ++t &&
                        (console.error("[mobx] cycle in reaction: " + e[0]),
                        e.splice(0));
                    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
                        n[r].runReaction_();
                }
                tt.isRunningReactions = !1;
            }
            var t_ = R("Reaction", tc),
                tv = "action",
                td = "autoAction",
                tp = "<unnamed action>",
                tb = ea(tv),
                tg = ea("action.bound", { bound: !0 }),
                ty = ea(td, { autoAction: !0 }),
                tm = ea("autoAction.bound", { autoAction: !0, bound: !0 });
            function tO(e) {
                return function (t, n) {
                    return x(t)
                        ? eK(t.name || tp, t, e)
                        : x(n)
                          ? eK(t, n, e)
                          : k(n)
                            ? $(t, n, e ? ty : tb)
                            : k(t)
                              ? Z(ea(e ? td : tv, { name: t, autoAction: e }))
                              : void 0;
                };
            }
            var tA = tO(!1);
            Object.assign(tA, tb);
            var tw = tO(!0);
            function tS(e) {
                return eG(e.name || tp, !1, e, this, void 0);
            }
            function tj(e) {
                return x(e) && !0 === e.isMobxAction;
            }
            function tE(e, t) {
                void 0 === t && (t = O);
                var n,
                    r,
                    i,
                    o =
                        null != (n = null == (r = t) ? void 0 : r.name)
                            ? n
                            : "Autorun";
                if (t.scheduler || t.delay) {
                    var a = tk(t),
                        s = !1;
                    i = new tc(
                        o,
                        function () {
                            s ||
                                ((s = !0),
                                a(function () {
                                    (s = !1), i.isDisposed_ || i.track(u);
                                }));
                        },
                        t.onError,
                        t.requiresObservable,
                    );
                } else
                    i = new tc(
                        o,
                        function () {
                            this.track(u);
                        },
                        t.onError,
                        t.requiresObservable,
                    );
                function u() {
                    e(i);
                }
                return i.schedule_(), i.getDisposer_();
            }
            Object.assign(tw, ty), (tA.bound = Z(tg)), (tw.bound = Z(tm));
            var tx = function (e) {
                return e();
            };
            function tk(e) {
                return e.scheduler
                    ? e.scheduler
                    : e.delay
                      ? function (t) {
                            return setTimeout(t, e.delay);
                        }
                      : tx;
            }
            function tP(e, t, n) {
                void 0 === n && (n = O);
                var r,
                    i,
                    o,
                    a,
                    s,
                    u = null != (o = n.name) ? o : "Reaction",
                    c = tA(
                        u,
                        n.onError
                            ? ((r = n.onError),
                              (i = t),
                              function () {
                                  try {
                                      return i.apply(this, arguments);
                                  } catch (e) {
                                      r.call(this, e);
                                  }
                              })
                            : t,
                    ),
                    l = !n.scheduler && !n.delay,
                    h = tk(n),
                    f = !0,
                    _ = !1,
                    v = n.compareStructural
                        ? er.structural
                        : n.equals || er.default,
                    d = new tc(
                        u,
                        function () {
                            f || l ? p() : _ || ((_ = !0), h(p));
                        },
                        n.onError,
                        n.requiresObservable,
                    );
                function p() {
                    if (((_ = !1), !d.isDisposed_)) {
                        var t = !1;
                        d.track(function () {
                            var n = eq(!1, function () {
                                return e(d);
                            });
                            (t = f || !v(a, n)), (s = a), (a = n);
                        }),
                            f && n.fireImmediately
                                ? c(a, s, d)
                                : !f && t && c(a, s, d),
                            (f = !1);
                    }
                }
                return d.schedule_(), d.getDisposer_();
            }
            function tT(e, t, n) {
                return tN("onBUO", e, t, n);
            }
            function tN(e, t, n, r) {
                var i = "function" == typeof r ? nV(t, n) : nV(t),
                    o = x(r) ? r : n,
                    a = e + "L";
                return (
                    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
                    function () {
                        var e = i[a];
                        e && (e.delete(o), 0 === e.size && delete i[a]);
                    }
                );
            }
            var tV = "always";
            function tC(e) {
                !0 === e.isolateGlobalState &&
                    (function () {
                        if (
                            ((tt.pendingReactions.length ||
                                tt.inBatch ||
                                tt.isRunningReactions) &&
                                r(36),
                            (te = !0),
                            e9)
                        ) {
                            var e = d();
                            0 == --e.__mobxInstanceCount &&
                                (e.__mobxGlobals = void 0),
                                (tt = new e5());
                        }
                    })();
                var t,
                    n,
                    i = e.useProxies,
                    o = e.enforceActions;
                if (
                    (void 0 !== i &&
                        (tt.useProxies =
                            i === tV ||
                            ("never" !== i && "undefined" != typeof Proxy)),
                    "ifavailable" === i && (tt.verifyProxies = !0),
                    void 0 !== o)
                ) {
                    var a = o === tV ? tV : "observed" === o;
                    (tt.enforceActions = a),
                        (tt.allowStateChanges = !0 !== a && a !== tV);
                }
                [
                    "computedRequiresReaction",
                    "reactionRequiresObservable",
                    "observableRequiresReaction",
                    "disableErrorBoundaries",
                    "safeDescriptors",
                ].forEach(function (t) {
                    t in e && (tt[t] = !!e[t]);
                }),
                    (tt.allowStateReads = !tt.observableRequiresReaction),
                    e.reactionScheduler &&
                        ((t = e.reactionScheduler),
                        (n = tl),
                        (tl = function (e) {
                            return t(function () {
                                return n(e);
                            });
                        }));
            }
            function tR(e, t) {
                return (function e(t) {
                    var n = { name: t.name_ };
                    return (
                        t.observing_ &&
                            t.observing_.length > 0 &&
                            (n.dependencies = Array.from(
                                new Set(t.observing_),
                            ).map(e)),
                        n
                    );
                })(nV(e, t));
            }
            var tD = 0;
            function tL() {
                this.message = "FLOW_CANCELLED";
            }
            tL.prototype = Object.create(Error.prototype);
            var tB = el("flow"),
                tM = el("flow.bound", { bound: !0 }),
                tI = Object.assign(function (e, t) {
                    if (k(t)) return $(e, t, tB);
                    var n = e.name || "<unnamed flow>",
                        r = function () {
                            var t,
                                r = arguments,
                                i = ++tD,
                                o = tA(
                                    n + " - runid: " + i + " - init",
                                    e,
                                ).apply(this, r),
                                a = void 0,
                                s = new Promise(function (e, r) {
                                    var s = 0;
                                    function u(e) {
                                        var t;
                                        a = void 0;
                                        try {
                                            t = tA(
                                                n +
                                                    " - runid: " +
                                                    i +
                                                    " - yield " +
                                                    s++,
                                                o.next,
                                            ).call(o, e);
                                        } catch (e) {
                                            return r(e);
                                        }
                                        l(t);
                                    }
                                    function c(e) {
                                        var t;
                                        a = void 0;
                                        try {
                                            t = tA(
                                                n +
                                                    " - runid: " +
                                                    i +
                                                    " - yield " +
                                                    s++,
                                                o.throw,
                                            ).call(o, e);
                                        } catch (e) {
                                            return r(e);
                                        }
                                        l(t);
                                    }
                                    function l(t) {
                                        return x(null == t ? void 0 : t.then)
                                            ? void t.then(l, r)
                                            : t.done
                                              ? e(t.value)
                                              : (a = Promise.resolve(
                                                    t.value,
                                                )).then(u, c);
                                    }
                                    (t = r), u(void 0);
                                });
                            return (
                                (s.cancel = tA(
                                    n + " - runid: " + i + " - cancel",
                                    function () {
                                        try {
                                            a && tU(a);
                                            var e = o.return(void 0),
                                                n = Promise.resolve(e.value);
                                            n.then(E, E), tU(n), t(new tL());
                                        } catch (e) {
                                            t(e);
                                        }
                                    },
                                )),
                                s
                            );
                        };
                    return (r.isMobXFlow = !0), r;
                }, tB);
            function tU(e) {
                x(e.cancel) && e.cancel();
            }
            function tK(e) {
                return (null == e ? void 0 : e.isMobXFlow) === !0;
            }
            function tG(e, t, n) {
                var r;
                return (
                    n_(e) || nc(e) || eF(e)
                        ? (r = nC(e))
                        : nw(e) && (r = nC(e, t)),
                    (r.dehancer = "function" == typeof t ? t : n),
                    function () {
                        r.dehancer = void 0;
                    }
                );
            }
            function tq(e, t, n) {
                var r, i, o, a, s;
                return x(n)
                    ? ((r = e), (i = t), (o = n), nC(r, i).intercept_(o))
                    : ((a = e), (s = t), nC(a).intercept_(s));
            }
            function tH(e) {
                return !!e && (nw(e) || !!e[Q] || et(e) || t_(e) || eY(e));
            }
            function tW(e) {
                return nw(e)
                    ? e[Q].keys_()
                    : n_(e) || np(e)
                      ? Array.from(e.keys())
                      : nc(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void r(5);
            }
            function tz(e) {
                return nw(e)
                    ? tW(e).map(function (t) {
                          return e[t];
                      })
                    : n_(e)
                      ? tW(e).map(function (t) {
                            return e.get(t);
                        })
                      : np(e)
                        ? Array.from(e.values())
                        : nc(e)
                          ? e.slice()
                          : void r(6);
            }
            function tF(e) {
                return nw(e)
                    ? tW(e).map(function (t) {
                          return [t, e[t]];
                      })
                    : n_(e)
                      ? tW(e).map(function (t) {
                            return [t, e.get(t)];
                        })
                      : np(e)
                        ? Array.from(e.entries())
                        : nc(e)
                          ? e.map(function (e, t) {
                                return [t, e];
                            })
                          : void r(7);
            }
            function tX(e, t, n) {
                if (nw(e)) return e[Q].defineProperty_(t, n);
                r(39);
            }
            function tY(e, t, n, r) {
                var i, o, a, s, u, c, l;
                return x(n)
                    ? ((i = e),
                      (o = t),
                      (a = n),
                      (s = r),
                      nC(i, o).observe_(a, s))
                    : ((u = e), (c = t), (l = n), nC(u).observe_(c, l));
            }
            function tJ(e, t, n) {
                return e.set(t, n), n;
            }
            function tZ(e, t) {
                return (function e(t, n) {
                    if (
                        null == t ||
                        "object" != typeof t ||
                        t instanceof Date ||
                        !tH(t)
                    )
                        return t;
                    if (eF(t) || eY(t)) return e(t.get(), n);
                    if (n.has(t)) return n.get(t);
                    if (nc(t)) {
                        var i = tJ(n, t, Array(t.length));
                        return (
                            t.forEach(function (t, r) {
                                i[r] = e(t, n);
                            }),
                            i
                        );
                    }
                    if (np(t)) {
                        var o = tJ(n, t, new Set());
                        return (
                            t.forEach(function (t) {
                                o.add(e(t, n));
                            }),
                            o
                        );
                    }
                    if (n_(t)) {
                        var a = tJ(n, t, new Map());
                        return (
                            t.forEach(function (t, r) {
                                a.set(r, e(t, n));
                            }),
                            a
                        );
                    }
                    var s = tJ(n, t, {});
                    return (
                        (function (e) {
                            if (nw(e)) return e[Q].ownKeys_();
                            r(38);
                        })(t).forEach(function (r) {
                            y.propertyIsEnumerable.call(t, r) &&
                                (s[r] = e(t[r], n));
                        }),
                        s
                    );
                })(e, new Map());
            }
            function t$(e, t) {
                void 0 === t && (t = void 0), to();
                try {
                    return e.apply(t);
                } finally {
                    ta();
                }
            }
            function tQ(e, t, n) {
                return 1 == arguments.length || (t && "object" == typeof t)
                    ? (function (e, t) {
                          if (null != t && null != (n = t.signal) && n.aborted)
                              return Object.assign(
                                  Promise.reject(Error("WHEN_ABORTED")),
                                  {
                                      cancel: function () {
                                          return null;
                                      },
                                  },
                              );
                          var n,
                              r,
                              i,
                              o = new Promise(function (n, o) {
                                  var a,
                                      s = t0(e, n, H({}, t, { onError: o }));
                                  (r = function () {
                                      s(), o(Error("WHEN_CANCELLED"));
                                  }),
                                      (i = function () {
                                          s(), o(Error("WHEN_ABORTED"));
                                      }),
                                      null == t ||
                                          null == (a = t.signal) ||
                                          null == a.addEventListener ||
                                          a.addEventListener("abort", i);
                              }).finally(function () {
                                  var e;
                                  return null == t ||
                                      null == (e = t.signal) ||
                                      null == e.removeEventListener
                                      ? void 0
                                      : e.removeEventListener("abort", i);
                              });
                          return (o.cancel = r), o;
                      })(e, t)
                    : t0(e, t, n || {});
            }
            function t0(e, t, n) {
                if ("number" == typeof n.timeout) {
                    var r,
                        i = Error("WHEN_TIMEOUT");
                    r = setTimeout(function () {
                        if (!a[Q].isDisposed_)
                            if ((a(), n.onError)) n.onError(i);
                            else throw i;
                    }, n.timeout);
                }
                n.name = "When";
                var o = eK("When-effect", t),
                    a = tE(function (t) {
                        eq(!1, e) && (t.dispose(), r && clearTimeout(r), o());
                    }, n);
                return a;
            }
            tI.bound = Z(tM);
            var t1 = {
                has: function (e, t) {
                    return e[Q].has_(t);
                },
                get: function (e, t) {
                    return e[Q].get_(t);
                },
                set: function (e, t, n) {
                    var r;
                    return !!k(t) && (null == (r = e[Q].set_(t, n, !0)) || r);
                },
                deleteProperty: function (e, t) {
                    var n;
                    return !!k(t) && (null == (n = e[Q].delete_(t, !0)) || n);
                },
                defineProperty: function (e, t, n) {
                    var r;
                    return null == (r = e[Q].defineProperty_(t, n)) || r;
                },
                ownKeys: function (e) {
                    return e[Q].ownKeys_();
                },
                preventExtensions: function (e) {
                    r(13);
                },
            };
            function t2(e) {
                return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
            }
            function t3(e, t) {
                var n = e.interceptors_ || (e.interceptors_ = []);
                return (
                    n.push(t),
                    j(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function t6(e, t) {
                var n = e3();
                try {
                    for (
                        var i = [].concat(e.interceptors_ || []),
                            o = 0,
                            a = i.length;
                        o < a && ((t = i[o](t)) && !t.type && r(14), t);
                        o++
                    );
                    return t;
                } finally {
                    e6(n);
                }
            }
            function t8(e) {
                return (
                    void 0 !== e.changeListeners_ &&
                    e.changeListeners_.length > 0
                );
            }
            function t7(e, t) {
                var n = e.changeListeners_ || (e.changeListeners_ = []);
                return (
                    n.push(t),
                    j(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function t4(e, t) {
                var n = e3(),
                    r = e.changeListeners_;
                if (r) {
                    r = r.slice();
                    for (var i = 0, o = r.length; i < o; i++) r[i](t);
                    e6(n);
                }
            }
            function t5(e, t, n) {
                var r = nm(e, n)[Q];
                to();
                try {
                    null != t || (U(e, J) || V(e, J, H({}, e[J])), (t = e[J])),
                        M(t).forEach(function (e) {
                            return r.make_(e, t[e]);
                        });
                } finally {
                    ta();
                }
                return e;
            }
            var t9 = "splice",
                ne = "update",
                nt = {
                    get: function (e, t) {
                        var n = e[Q];
                        return t === Q
                            ? n
                            : "length" === t
                              ? n.getArrayLength_()
                              : "string" != typeof t || isNaN(t)
                                ? U(nr, t)
                                    ? nr[t]
                                    : e[t]
                                : n.get_(parseInt(t));
                    },
                    set: function (e, t, n) {
                        var r = e[Q];
                        return (
                            "length" === t && r.setArrayLength_(n),
                            "symbol" == typeof t || isNaN(t)
                                ? (e[t] = n)
                                : r.set_(parseInt(t), n),
                            !0
                        );
                    },
                    preventExtensions: function () {
                        r(15);
                    },
                },
                nn = (function () {
                    function e(e, t, n, r) {
                        void 0 === e && (e = "ObservableArray"),
                            (this.owned_ = void 0),
                            (this.legacyMode_ = void 0),
                            (this.atom_ = void 0),
                            (this.values_ = []),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.enhancer_ = void 0),
                            (this.dehancer = void 0),
                            (this.proxy_ = void 0),
                            (this.lastKnownLength_ = 0),
                            (this.owned_ = n),
                            (this.legacyMode_ = r),
                            (this.atom_ = new ee(e)),
                            (this.enhancer_ = function (e, n) {
                                return t(e, n, "ObservableArray[..]");
                            });
                    }
                    var t = e.prototype;
                    return (
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer
                                ? this.dehancer(e)
                                : e;
                        }),
                        (t.dehanceValues_ = function (e) {
                            return void 0 !== this.dehancer && e.length > 0
                                ? e.map(this.dehancer)
                                : e;
                        }),
                        (t.intercept_ = function (e) {
                            return t3(this, e);
                        }),
                        (t.observe_ = function (e, t) {
                            return (
                                void 0 === t && (t = !1),
                                t &&
                                    e({
                                        observableKind: "array",
                                        object: this.proxy_,
                                        debugObjectName: this.atom_.name_,
                                        type: "splice",
                                        index: 0,
                                        added: this.values_.slice(),
                                        addedCount: this.values_.length,
                                        removed: [],
                                        removedCount: 0,
                                    }),
                                t7(this, e)
                            );
                        }),
                        (t.getArrayLength_ = function () {
                            return (
                                this.atom_.reportObserved(), this.values_.length
                            );
                        }),
                        (t.setArrayLength_ = function (e) {
                            ("number" != typeof e || isNaN(e) || e < 0) &&
                                r("Out of range: " + e);
                            var t = this.values_.length;
                            if (e !== t)
                                if (e > t) {
                                    for (
                                        var n = Array(e - t), i = 0;
                                        i < e - t;
                                        i++
                                    )
                                        n[i] = void 0;
                                    this.spliceWithArray_(t, 0, n);
                                } else this.spliceWithArray_(e, t - e);
                        }),
                        (t.updateArrayLength_ = function (e, t) {
                            e !== this.lastKnownLength_ && r(16),
                                (this.lastKnownLength_ += t),
                                this.legacyMode_ && t > 0 && nN(e + t + 1);
                        }),
                        (t.spliceWithArray_ = function (e, t, n) {
                            var r = this;
                            this.atom_;
                            var i = this.values_.length;
                            if (
                                (void 0 === e
                                    ? (e = 0)
                                    : e > i
                                      ? (e = i)
                                      : e < 0 && (e = Math.max(0, i + e)),
                                (t =
                                    1 == arguments.length
                                        ? i - e
                                        : null == t
                                          ? 0
                                          : Math.max(0, Math.min(t, i - e))),
                                void 0 === n && (n = m),
                                t2(this))
                            ) {
                                var o = t6(this, {
                                    object: this.proxy_,
                                    type: t9,
                                    index: e,
                                    removedCount: t,
                                    added: n,
                                });
                                if (!o) return m;
                                (t = o.removedCount), (n = o.added);
                            }
                            if (
                                ((n =
                                    0 === n.length
                                        ? n
                                        : n.map(function (e) {
                                              return r.enhancer_(e, void 0);
                                          })),
                                this.legacyMode_)
                            ) {
                                var a = n.length - t;
                                this.updateArrayLength_(i, a);
                            }
                            var s = this.spliceItemsIntoValues_(e, t, n);
                            return (
                                (0 !== t || 0 !== n.length) &&
                                    this.notifyArraySplice_(e, n, s),
                                this.dehanceValues_(s)
                            );
                        }),
                        (t.spliceItemsIntoValues_ = function (e, t, n) {
                            if (n.length < 1e4) {
                                var r;
                                return (r = this.values_).splice.apply(
                                    r,
                                    [e, t].concat(n),
                                );
                            }
                            var i = this.values_.slice(e, e + t),
                                o = this.values_.slice(e + t);
                            this.values_.length += n.length - t;
                            for (var a = 0; a < n.length; a++)
                                this.values_[e + a] = n[a];
                            for (var s = 0; s < o.length; s++)
                                this.values_[e + n.length + s] = o[s];
                            return i;
                        }),
                        (t.notifyArrayChildUpdate_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = t8(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: "array",
                                              object: this.proxy_,
                                              type: ne,
                                              debugObjectName: this.atom_.name_,
                                              index: e,
                                              newValue: t,
                                              oldValue: n,
                                          }
                                        : null;
                            this.atom_.reportChanged(), i && t4(this, o);
                        }),
                        (t.notifyArraySplice_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = t8(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: "array",
                                              object: this.proxy_,
                                              debugObjectName: this.atom_.name_,
                                              type: t9,
                                              index: e,
                                              removed: n,
                                              added: t,
                                              removedCount: n.length,
                                              addedCount: t.length,
                                          }
                                        : null;
                            this.atom_.reportChanged(), i && t4(this, o);
                        }),
                        (t.get_ = function (e) {
                            return this.legacyMode_ && e >= this.values_.length
                                ? void console.warn(
                                      "[mobx] Out of bounds read: " + e,
                                  )
                                : (this.atom_.reportObserved(),
                                  this.dehanceValue_(this.values_[e]));
                        }),
                        (t.set_ = function (e, t) {
                            var n = this.values_;
                            if (
                                (this.legacyMode_ &&
                                    e > n.length &&
                                    r(17, e, n.length),
                                e < n.length)
                            ) {
                                this.atom_;
                                var i = n[e];
                                if (t2(this)) {
                                    var o = t6(this, {
                                        type: ne,
                                        object: this.proxy_,
                                        index: e,
                                        newValue: t,
                                    });
                                    if (!o) return;
                                    t = o.newValue;
                                }
                                (t = this.enhancer_(t, i)) !== i &&
                                    ((n[e] = t),
                                    this.notifyArrayChildUpdate_(e, t, i));
                            } else {
                                for (
                                    var a = Array(e + 1 - n.length), s = 0;
                                    s < a.length - 1;
                                    s++
                                )
                                    a[s] = void 0;
                                (a[a.length - 1] = t),
                                    this.spliceWithArray_(n.length, 0, a);
                            }
                        }),
                        e
                    );
                })(),
                nr = {
                    clear: function () {
                        return this.splice(0);
                    },
                    replace: function (e) {
                        var t = this[Q];
                        return t.spliceWithArray_(0, t.values_.length, e);
                    },
                    toJSON: function () {
                        return this.slice();
                    },
                    splice: function (e, t) {
                        for (
                            var n = arguments.length,
                                r = Array(n > 2 ? n - 2 : 0),
                                i = 2;
                            i < n;
                            i++
                        )
                            r[i - 2] = arguments[i];
                        var o = this[Q];
                        switch (arguments.length) {
                            case 0:
                                return [];
                            case 1:
                                return o.spliceWithArray_(e);
                            case 2:
                                return o.spliceWithArray_(e, t);
                        }
                        return o.spliceWithArray_(e, t, r);
                    },
                    spliceWithArray: function (e, t, n) {
                        return this[Q].spliceWithArray_(e, t, n);
                    },
                    push: function () {
                        for (
                            var e = this[Q],
                                t = arguments.length,
                                n = Array(t),
                                r = 0;
                            r < t;
                            r++
                        )
                            n[r] = arguments[r];
                        return (
                            e.spliceWithArray_(e.values_.length, 0, n),
                            e.values_.length
                        );
                    },
                    pop: function () {
                        return this.splice(
                            Math.max(this[Q].values_.length - 1, 0),
                            1,
                        )[0];
                    },
                    shift: function () {
                        return this.splice(0, 1)[0];
                    },
                    unshift: function () {
                        for (
                            var e = this[Q],
                                t = arguments.length,
                                n = Array(t),
                                r = 0;
                            r < t;
                            r++
                        )
                            n[r] = arguments[r];
                        return e.spliceWithArray_(0, 0, n), e.values_.length;
                    },
                    reverse: function () {
                        return (
                            tt.trackingDerivation && r(37, "reverse"),
                            this.replace(this.slice().reverse()),
                            this
                        );
                    },
                    sort: function () {
                        tt.trackingDerivation && r(37, "sort");
                        var e = this.slice();
                        return (
                            e.sort.apply(e, arguments), this.replace(e), this
                        );
                    },
                    remove: function (e) {
                        var t = this[Q],
                            n = t.dehanceValues_(t.values_).indexOf(e);
                        return n > -1 && (this.splice(n, 1), !0);
                    },
                };
            function ni(e, t) {
                "function" == typeof Array.prototype[e] && (nr[e] = t(e));
            }
            function no(e) {
                return function () {
                    var t = this[Q];
                    t.atom_.reportObserved();
                    var n = t.dehanceValues_(t.values_);
                    return n[e].apply(n, arguments);
                };
            }
            function na(e) {
                return function (t, n) {
                    var r = this,
                        i = this[Q];
                    return (
                        i.atom_.reportObserved(),
                        i.dehanceValues_(i.values_)[e](function (e, i) {
                            return t.call(n, e, i, r);
                        })
                    );
                };
            }
            function ns(e) {
                return function () {
                    var t = this,
                        n = this[Q];
                    n.atom_.reportObserved();
                    var r = n.dehanceValues_(n.values_),
                        i = arguments[0];
                    return (
                        (arguments[0] = function (e, n, r) {
                            return i(e, n, r, t);
                        }),
                        r[e].apply(r, arguments)
                    );
                };
            }
            ni("concat", no),
                ni("flat", no),
                ni("includes", no),
                ni("indexOf", no),
                ni("join", no),
                ni("lastIndexOf", no),
                ni("slice", no),
                ni("toString", no),
                ni("toLocaleString", no),
                ni("every", na),
                ni("filter", na),
                ni("find", na),
                ni("findIndex", na),
                ni("flatMap", na),
                ni("forEach", na),
                ni("map", na),
                ni("some", na),
                ni("reduce", ns),
                ni("reduceRight", ns);
            var nu = R("ObservableArrayAdministration", nn);
            function nc(e) {
                return P(e) && nu(e[Q]);
            }
            var nl = {},
                nh = "delete";
            (l = Symbol.iterator), (h = Symbol.toStringTag);
            var nf = (function () {
                    function e(e, t, n) {
                        var i = this;
                        void 0 === t && (t = ei),
                            void 0 === n && (n = "ObservableMap"),
                            (this.enhancer_ = void 0),
                            (this.name_ = void 0),
                            (this[Q] = nl),
                            (this.data_ = void 0),
                            (this.hasMap_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = t),
                            (this.name_ = n),
                            x(Map) || r(18),
                            (this.keysAtom_ = en("ObservableMap.keys()")),
                            (this.data_ = new Map()),
                            (this.hasMap_ = new Map()),
                            eq(!0, function () {
                                i.merge(e);
                            });
                    }
                    var t = e.prototype;
                    return (
                        (t.has_ = function (e) {
                            return this.data_.has(e);
                        }),
                        (t.has = function (e) {
                            var t = this;
                            if (!tt.trackingDerivation) return this.has_(e);
                            var n = this.hasMap_.get(e);
                            if (!n) {
                                var r = (n = new ez(
                                    this.has_(e),
                                    eo,
                                    "ObservableMap.key?",
                                    !1,
                                ));
                                this.hasMap_.set(e, r),
                                    tT(r, function () {
                                        return t.hasMap_.delete(e);
                                    });
                            }
                            return n.get();
                        }),
                        (t.set = function (e, t) {
                            var n = this.has_(e);
                            if (t2(this)) {
                                var r = t6(this, {
                                    type: n ? ne : "add",
                                    object: this,
                                    newValue: t,
                                    name: e,
                                });
                                if (!r) return this;
                                t = r.newValue;
                            }
                            return (
                                n
                                    ? this.updateValue_(e, t)
                                    : this.addValue_(e, t),
                                this
                            );
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if (
                                (eQ(this.keysAtom_),
                                t2(this) &&
                                    !t6(this, {
                                        type: nh,
                                        object: this,
                                        name: e,
                                    }))
                            )
                                return !1;
                            if (this.has_(e)) {
                                var n = t8(this),
                                    r = n
                                        ? {
                                              observableKind: "map",
                                              debugObjectName: this.name_,
                                              type: nh,
                                              object: this,
                                              oldValue:
                                                  this.data_.get(e).value_,
                                              name: e,
                                          }
                                        : null;
                                return (
                                    t$(function () {
                                        var n;
                                        t.keysAtom_.reportChanged(),
                                            null == (n = t.hasMap_.get(e)) ||
                                                n.setNewValue_(!1),
                                            t.data_.get(e).setNewValue_(void 0),
                                            t.data_.delete(e);
                                    }),
                                    n && t4(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.updateValue_ = function (e, t) {
                            var n = this.data_.get(e);
                            if ((t = n.prepareNewValue_(t)) !== tt.UNCHANGED) {
                                var r = t8(this),
                                    i = r
                                        ? {
                                              observableKind: "map",
                                              debugObjectName: this.name_,
                                              type: ne,
                                              object: this,
                                              oldValue: n.value_,
                                              name: e,
                                              newValue: t,
                                          }
                                        : null;
                                n.setNewValue_(t), r && t4(this, i);
                            }
                        }),
                        (t.addValue_ = function (e, t) {
                            var n = this;
                            this.keysAtom_,
                                t$(function () {
                                    var r,
                                        i = new ez(
                                            t,
                                            n.enhancer_,
                                            "ObservableMap.key",
                                            !1,
                                        );
                                    n.data_.set(e, i),
                                        (t = i.value_),
                                        null == (r = n.hasMap_.get(e)) ||
                                            r.setNewValue_(!0),
                                        n.keysAtom_.reportChanged();
                                });
                            var r = t8(this),
                                i = r
                                    ? {
                                          observableKind: "map",
                                          debugObjectName: this.name_,
                                          type: "add",
                                          object: this,
                                          name: e,
                                          newValue: t,
                                      }
                                    : null;
                            r && t4(this, i);
                        }),
                        (t.get = function (e) {
                            return this.has(e)
                                ? this.dehanceValue_(this.data_.get(e).get())
                                : this.dehanceValue_(void 0);
                        }),
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer
                                ? this.dehancer(e)
                                : e;
                        }),
                        (t.keys = function () {
                            return (
                                this.keysAtom_.reportObserved(),
                                this.data_.keys()
                            );
                        }),
                        (t.values = function () {
                            var e = this,
                                t = this.keys();
                            return nM({
                                next: function () {
                                    var n = t.next(),
                                        r = n.done,
                                        i = n.value;
                                    return {
                                        done: r,
                                        value: r ? void 0 : e.get(i),
                                    };
                                },
                            });
                        }),
                        (t.entries = function () {
                            var e = this,
                                t = this.keys();
                            return nM({
                                next: function () {
                                    var n = t.next(),
                                        r = n.done,
                                        i = n.value;
                                    return {
                                        done: r,
                                        value: r ? void 0 : [i, e.get(i)],
                                    };
                                },
                            });
                        }),
                        (t[l] = function () {
                            return this.entries();
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = Y(this); !(n = r()).done; ) {
                                var i = n.value,
                                    o = i[0],
                                    a = i[1];
                                e.call(t, a, o, this);
                            }
                        }),
                        (t.merge = function (e) {
                            var t = this;
                            return (
                                n_(e) && (e = new Map(e)),
                                t$(function () {
                                    T(e)
                                        ? (function (e) {
                                              var t = Object.keys(e);
                                              if (!B) return t;
                                              var n =
                                                  Object.getOwnPropertySymbols(
                                                      e,
                                                  );
                                              return n.length
                                                  ? [].concat(
                                                        t,
                                                        n.filter(function (t) {
                                                            return y.propertyIsEnumerable.call(
                                                                e,
                                                                t,
                                                            );
                                                        }),
                                                    )
                                                  : t;
                                          })(e).forEach(function (n) {
                                              return t.set(n, e[n]);
                                          })
                                        : Array.isArray(e)
                                          ? e.forEach(function (e) {
                                                var n = e[0],
                                                    r = e[1];
                                                return t.set(n, r);
                                            })
                                          : D(e)
                                            ? (e.constructor !== Map &&
                                                  r(19, e),
                                              e.forEach(function (e, n) {
                                                  return t.set(n, e);
                                              }))
                                            : null != e && r(20, e);
                                }),
                                this
                            );
                        }),
                        (t.clear = function () {
                            var e = this;
                            t$(function () {
                                e2(function () {
                                    for (
                                        var t, n = Y(e.keys());
                                        !(t = n()).done;

                                    ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                t$(function () {
                                    for (
                                        var n,
                                            i = (function (e) {
                                                if (D(e) || n_(e)) return e;
                                                if (Array.isArray(e))
                                                    return new Map(e);
                                                if (!T(e)) return r(21, e);
                                                var t = new Map();
                                                for (var n in e) t.set(n, e[n]);
                                                return t;
                                            })(e),
                                            o = new Map(),
                                            a = !1,
                                            s = Y(t.data_.keys());
                                        !(n = s()).done;

                                    ) {
                                        var u = n.value;
                                        if (!i.has(u))
                                            if (t.delete(u)) a = !0;
                                            else {
                                                var c = t.data_.get(u);
                                                o.set(u, c);
                                            }
                                    }
                                    for (
                                        var l, h = Y(i.entries());
                                        !(l = h()).done;

                                    ) {
                                        var f = l.value,
                                            _ = f[0],
                                            v = f[1],
                                            d = t.data_.has(_);
                                        if ((t.set(_, v), t.data_.has(_))) {
                                            var p = t.data_.get(_);
                                            o.set(_, p), d || (a = !0);
                                        }
                                    }
                                    if (!a)
                                        if (t.data_.size !== o.size)
                                            t.keysAtom_.reportChanged();
                                        else
                                            for (
                                                var b = t.data_.keys(),
                                                    g = o.keys(),
                                                    y = b.next(),
                                                    m = g.next();
                                                !y.done;

                                            ) {
                                                if (y.value !== m.value) {
                                                    t.keysAtom_.reportChanged();
                                                    break;
                                                }
                                                (y = b.next()), (m = g.next());
                                            }
                                    t.data_ = o;
                                }),
                                this
                            );
                        }),
                        (t.toString = function () {
                            return "[object ObservableMap]";
                        }),
                        (t.toJSON = function () {
                            return Array.from(this);
                        }),
                        (t.observe_ = function (e, t) {
                            return t7(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return t3(this, e);
                        }),
                        q(e, [
                            {
                                key: "size",
                                get: function () {
                                    return (
                                        this.keysAtom_.reportObserved(),
                                        this.data_.size
                                    );
                                },
                            },
                            {
                                key: h,
                                get: function () {
                                    return "Map";
                                },
                            },
                        ]),
                        e
                    );
                })(),
                n_ = R("ObservableMap", nf),
                nv = {};
            (f = Symbol.iterator), (_ = Symbol.toStringTag);
            var nd = (function () {
                    function e(e, t, n) {
                        void 0 === t && (t = ei),
                            void 0 === n && (n = "ObservableSet"),
                            (this.name_ = void 0),
                            (this[Q] = nv),
                            (this.data_ = new Set()),
                            (this.atom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = void 0),
                            (this.name_ = n),
                            x(Set) || r(22),
                            (this.atom_ = en(this.name_)),
                            (this.enhancer_ = function (e, r) {
                                return t(e, r, n);
                            }),
                            e && this.replace(e);
                    }
                    var t = e.prototype;
                    return (
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer
                                ? this.dehancer(e)
                                : e;
                        }),
                        (t.clear = function () {
                            var e = this;
                            t$(function () {
                                e2(function () {
                                    for (
                                        var t, n = Y(e.data_.values());
                                        !(t = n()).done;

                                    ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = Y(this); !(n = r()).done; ) {
                                var i = n.value;
                                e.call(t, i, i, this);
                            }
                        }),
                        (t.add = function (e) {
                            var t = this;
                            if (
                                (eQ(this.atom_),
                                t2(this) &&
                                    !t6(this, {
                                        type: "add",
                                        object: this,
                                        newValue: e,
                                    }))
                            )
                                return this;
                            if (!this.has(e)) {
                                t$(function () {
                                    t.data_.add(t.enhancer_(e, void 0)),
                                        t.atom_.reportChanged();
                                });
                                var n = t8(this),
                                    r = n
                                        ? {
                                              observableKind: "set",
                                              debugObjectName: this.name_,
                                              type: "add",
                                              object: this,
                                              newValue: e,
                                          }
                                        : null;
                                n && t4(this, r);
                            }
                            return this;
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if (
                                t2(this) &&
                                !t6(this, {
                                    type: nh,
                                    object: this,
                                    oldValue: e,
                                })
                            )
                                return !1;
                            if (this.has(e)) {
                                var n = t8(this),
                                    r = n
                                        ? {
                                              observableKind: "set",
                                              debugObjectName: this.name_,
                                              type: nh,
                                              object: this,
                                              oldValue: e,
                                          }
                                        : null;
                                return (
                                    t$(function () {
                                        t.atom_.reportChanged(),
                                            t.data_.delete(e);
                                    }),
                                    n && t4(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.has = function (e) {
                            return (
                                this.atom_.reportObserved(),
                                this.data_.has(this.dehanceValue_(e))
                            );
                        }),
                        (t.entries = function () {
                            var e = 0,
                                t = Array.from(this.keys()),
                                n = Array.from(this.values());
                            return nM({
                                next: function () {
                                    var r = e;
                                    return (
                                        (e += 1),
                                        r < n.length
                                            ? { value: [t[r], n[r]], done: !1 }
                                            : { done: !0 }
                                    );
                                },
                            });
                        }),
                        (t.keys = function () {
                            return this.values();
                        }),
                        (t.values = function () {
                            this.atom_.reportObserved();
                            var e = this,
                                t = 0,
                                n = Array.from(this.data_.values());
                            return nM({
                                next: function () {
                                    return t < n.length
                                        ? {
                                              value: e.dehanceValue_(n[t++]),
                                              done: !1,
                                          }
                                        : { done: !0 };
                                },
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                np(e) && (e = new Set(e)),
                                t$(function () {
                                    Array.isArray(e)
                                        ? (t.clear(),
                                          e.forEach(function (e) {
                                              return t.add(e);
                                          }))
                                        : L(e)
                                          ? (t.clear(),
                                            e.forEach(function (e) {
                                                return t.add(e);
                                            }))
                                          : null != e &&
                                            r(
                                                "Cannot initialize set from " +
                                                    e,
                                            );
                                }),
                                this
                            );
                        }),
                        (t.observe_ = function (e, t) {
                            return t7(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return t3(this, e);
                        }),
                        (t.toJSON = function () {
                            return Array.from(this);
                        }),
                        (t.toString = function () {
                            return "[object ObservableSet]";
                        }),
                        (t[f] = function () {
                            return this.values();
                        }),
                        q(e, [
                            {
                                key: "size",
                                get: function () {
                                    return (
                                        this.atom_.reportObserved(),
                                        this.data_.size
                                    );
                                },
                            },
                            {
                                key: _,
                                get: function () {
                                    return "Set";
                                },
                            },
                        ]),
                        e
                    );
                })(),
                np = R("ObservableSet", nd),
                nb = Object.create(null),
                ng = "remove",
                ny = (function () {
                    function e(e, t, n, r) {
                        void 0 === t && (t = new Map()),
                            void 0 === r && (r = em),
                            (this.target_ = void 0),
                            (this.values_ = void 0),
                            (this.name_ = void 0),
                            (this.defaultAnnotation_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.proxy_ = void 0),
                            (this.isPlainObject_ = void 0),
                            (this.appliedAnnotations_ = void 0),
                            (this.pendingKeys_ = void 0),
                            (this.target_ = e),
                            (this.values_ = t),
                            (this.name_ = n),
                            (this.defaultAnnotation_ = r),
                            (this.keysAtom_ = new ee("ObservableObject.keys")),
                            (this.isPlainObject_ = T(this.target_));
                    }
                    var t = e.prototype;
                    return (
                        (t.getObservablePropValue_ = function (e) {
                            return this.values_.get(e).get();
                        }),
                        (t.setObservablePropValue_ = function (e, t) {
                            var n = this.values_.get(e);
                            if (n instanceof eX) return n.set(t), !0;
                            if (t2(this)) {
                                var r = t6(this, {
                                    type: ne,
                                    object: this.proxy_ || this.target_,
                                    name: e,
                                    newValue: t,
                                });
                                if (!r) return null;
                                t = r.newValue;
                            }
                            if ((t = n.prepareNewValue_(t)) !== tt.UNCHANGED) {
                                var i = t8(this),
                                    o = i
                                        ? {
                                              type: ne,
                                              observableKind: "object",
                                              debugObjectName: this.name_,
                                              object:
                                                  this.proxy_ || this.target_,
                                              oldValue: n.value_,
                                              name: e,
                                              newValue: t,
                                          }
                                        : null;
                                n.setNewValue_(t), i && t4(this, o);
                            }
                            return !0;
                        }),
                        (t.get_ = function (e) {
                            return (
                                tt.trackingDerivation &&
                                    !U(this.target_, e) &&
                                    this.has_(e),
                                this.target_[e]
                            );
                        }),
                        (t.set_ = function (e, t, n) {
                            return (void 0 === n && (n = !1),
                            U(this.target_, e))
                                ? this.values_.has(e)
                                    ? this.setObservablePropValue_(e, t)
                                    : n
                                      ? Reflect.set(this.target_, e, t)
                                      : ((this.target_[e] = t), !0)
                                : this.extend_(
                                      e,
                                      {
                                          value: t,
                                          enumerable: !0,
                                          writable: !0,
                                          configurable: !0,
                                      },
                                      this.defaultAnnotation_,
                                      n,
                                  );
                        }),
                        (t.has_ = function (e) {
                            if (!tt.trackingDerivation)
                                return e in this.target_;
                            this.pendingKeys_ ||
                                (this.pendingKeys_ = new Map());
                            var t = this.pendingKeys_.get(e);
                            return (
                                t ||
                                    ((t = new ez(
                                        e in this.target_,
                                        eo,
                                        "ObservableObject.key?",
                                        !1,
                                    )),
                                    this.pendingKeys_.set(e, t)),
                                t.get()
                            );
                        }),
                        (t.make_ = function (e, t) {
                            if (
                                (!0 === t && (t = this.defaultAnnotation_),
                                !1 !== t)
                            ) {
                                if ((nj(this, t, e), !(e in this.target_))) {
                                    var n;
                                    if (null != (n = this.target_[J]) && n[e])
                                        return;
                                    r(
                                        1,
                                        t.annotationType_,
                                        this.name_ + "." + e.toString(),
                                    );
                                }
                                for (var i = this.target_; i && i !== y; ) {
                                    var o = b(i, e);
                                    if (o) {
                                        var a = t.make_(this, e, o, i);
                                        if (0 === a) return;
                                        if (1 === a) break;
                                    }
                                    i = Object.getPrototypeOf(i);
                                }
                                nS(this, t, e);
                            }
                        }),
                        (t.extend_ = function (e, t, n, r) {
                            if (
                                (void 0 === r && (r = !1),
                                !0 === n && (n = this.defaultAnnotation_),
                                !1 === n)
                            )
                                return this.defineProperty_(e, t, r);
                            var i = n.extend_(this, e, t, r);
                            return i && nS(this, n, e), i;
                        }),
                        (t.defineProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                to();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (t2(this)) {
                                    var i = t6(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: "add",
                                        newValue: t.value,
                                    });
                                    if (!i) return null;
                                    var o = i.newValue;
                                    t.value !== o &&
                                        (t = H({}, t, { value: o }));
                                }
                                if (n) {
                                    if (
                                        !Reflect.defineProperty(
                                            this.target_,
                                            e,
                                            t,
                                        )
                                    )
                                        return !1;
                                } else g(this.target_, e, t);
                                this.notifyPropertyAddition_(e, t.value);
                            } finally {
                                ta();
                            }
                            return !0;
                        }),
                        (t.defineObservableProperty_ = function (e, t, n, r) {
                            void 0 === r && (r = !1);
                            try {
                                to();
                                var i = this.delete_(e);
                                if (!i) return i;
                                if (t2(this)) {
                                    var o = t6(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: "add",
                                        newValue: t,
                                    });
                                    if (!o) return null;
                                    t = o.newValue;
                                }
                                var a = nA(e),
                                    s = {
                                        configurable:
                                            !tt.safeDescriptors ||
                                            this.isPlainObject_,
                                        enumerable: !0,
                                        get: a.get,
                                        set: a.set,
                                    };
                                if (r) {
                                    if (
                                        !Reflect.defineProperty(
                                            this.target_,
                                            e,
                                            s,
                                        )
                                    )
                                        return !1;
                                } else g(this.target_, e, s);
                                var u = new ez(
                                    t,
                                    n,
                                    "ObservableObject.key",
                                    !1,
                                );
                                this.values_.set(e, u),
                                    this.notifyPropertyAddition_(e, u.value_);
                            } finally {
                                ta();
                            }
                            return !0;
                        }),
                        (t.defineComputedProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                to();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (
                                    t2(this) &&
                                    !t6(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: "add",
                                        newValue: void 0,
                                    })
                                )
                                    return null;
                                t.name || (t.name = "ObservableObject.key"),
                                    (t.context = this.proxy_ || this.target_);
                                var i = nA(e),
                                    o = {
                                        configurable:
                                            !tt.safeDescriptors ||
                                            this.isPlainObject_,
                                        enumerable: !1,
                                        get: i.get,
                                        set: i.set,
                                    };
                                if (n) {
                                    if (
                                        !Reflect.defineProperty(
                                            this.target_,
                                            e,
                                            o,
                                        )
                                    )
                                        return !1;
                                } else g(this.target_, e, o);
                                this.values_.set(e, new eX(t)),
                                    this.notifyPropertyAddition_(e, void 0);
                            } finally {
                                ta();
                            }
                            return !0;
                        }),
                        (t.delete_ = function (e, t) {
                            if ((void 0 === t && (t = !1), !U(this.target_, e)))
                                return !0;
                            if (
                                t2(this) &&
                                !t6(this, {
                                    object: this.proxy_ || this.target_,
                                    name: e,
                                    type: ng,
                                })
                            )
                                return null;
                            try {
                                to();
                                var n,
                                    r,
                                    i,
                                    o = t8(this),
                                    a = this.values_.get(e),
                                    s = void 0;
                                if (
                                    (!a &&
                                        (o || 0) &&
                                        (s =
                                            null == (i = b(this.target_, e))
                                                ? void 0
                                                : i.value),
                                    t)
                                ) {
                                    if (
                                        !Reflect.deleteProperty(this.target_, e)
                                    )
                                        return !1;
                                } else delete this.target_[e];
                                if (
                                    (a &&
                                        (this.values_.delete(e),
                                        a instanceof ez && (s = a.value_),
                                        tu(a)),
                                    this.keysAtom_.reportChanged(),
                                    null == (n = this.pendingKeys_) ||
                                        null == (r = n.get(e)) ||
                                        r.set(e in this.target_),
                                    o || 0)
                                ) {
                                    var u = {
                                        type: ng,
                                        observableKind: "object",
                                        object: this.proxy_ || this.target_,
                                        debugObjectName: this.name_,
                                        oldValue: s,
                                        name: e,
                                    };
                                    o && t4(this, u);
                                }
                            } finally {
                                ta();
                            }
                            return !0;
                        }),
                        (t.observe_ = function (e, t) {
                            return t7(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return t3(this, e);
                        }),
                        (t.notifyPropertyAddition_ = function (e, t) {
                            var n,
                                r,
                                i = t8(this);
                            if (i) {
                                var o = i
                                    ? {
                                          type: "add",
                                          observableKind: "object",
                                          debugObjectName: this.name_,
                                          object: this.proxy_ || this.target_,
                                          name: e,
                                          newValue: t,
                                      }
                                    : null;
                                i && t4(this, o);
                            }
                            null == (n = this.pendingKeys_) ||
                                null == (r = n.get(e)) ||
                                r.set(!0),
                                this.keysAtom_.reportChanged();
                        }),
                        (t.ownKeys_ = function () {
                            return (
                                this.keysAtom_.reportObserved(), M(this.target_)
                            );
                        }),
                        (t.keys_ = function () {
                            return (
                                this.keysAtom_.reportObserved(),
                                Object.keys(this.target_)
                            );
                        }),
                        e
                    );
                })();
            function nm(e, t) {
                if (U(e, Q)) return e;
                var n,
                    r,
                    i =
                        null != (r = null == t ? void 0 : t.name)
                            ? r
                            : "ObservableObject",
                    o = new ny(
                        e,
                        new Map(),
                        String(i),
                        t
                            ? null != (n = t.defaultDecorator)
                                ? n
                                : eO(t)
                            : void 0,
                    );
                return V(e, Q, o), e;
            }
            var nO = R("ObservableObjectAdministration", ny);
            function nA(e) {
                return (
                    nb[e] ||
                    (nb[e] = {
                        get: function () {
                            return this[Q].getObservablePropValue_(e);
                        },
                        set: function (t) {
                            return this[Q].setObservablePropValue_(e, t);
                        },
                    })
                );
            }
            function nw(e) {
                return !!P(e) && nO(e[Q]);
            }
            function nS(e, t, n) {
                var r;
                null == (r = e.target_[J]) || delete r[n];
            }
            function nj(e, t, n) {}
            var nE = nT(0),
                nx = 0,
                nk = function () {};
            !(function (e, t) {
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(e.prototype, t)
                    : void 0 !== e.prototype.__proto__
                      ? (e.prototype.__proto__ = t)
                      : (e.prototype = t);
            })(nk, Array.prototype);
            var nP = (function (e, t, n) {
                function r(t, n, r, i) {
                    void 0 === r && (r = "ObservableArray"),
                        void 0 === i && (i = !1);
                    var o = e.call(this) || this,
                        a = new nn(r, n, i, !0);
                    if (((a.proxy_ = F(o)), C(F(o), Q, a), t && t.length)) {
                        var s = eH(!0);
                        o.spliceWithArray(0, 0, t), eW(s);
                    }
                    return Object.defineProperty(F(o), "0", nE), o;
                }
                W(r, e);
                var i = r.prototype;
                return (
                    (i.concat = function () {
                        this[Q].atom_.reportObserved();
                        for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                        )
                            t[n] = arguments[n];
                        return Array.prototype.concat.apply(
                            this.slice(),
                            t.map(function (e) {
                                return nc(e) ? e.slice() : e;
                            }),
                        );
                    }),
                    (i[n] = function () {
                        var e = this,
                            t = 0;
                        return nM({
                            next: function () {
                                return t < e.length
                                    ? { value: e[t++], done: !1 }
                                    : { done: !0, value: void 0 };
                            },
                        });
                    }),
                    q(r, [
                        {
                            key: "length",
                            get: function () {
                                return this[Q].getArrayLength_();
                            },
                            set: function (e) {
                                this[Q].setArrayLength_(e);
                            },
                        },
                        {
                            key: t,
                            get: function () {
                                return "Array";
                            },
                        },
                    ]),
                    r
                );
            })(nk, Symbol.toStringTag, Symbol.iterator);
            function nT(e) {
                return {
                    enumerable: !1,
                    configurable: !0,
                    get: function () {
                        return this[Q].get_(e);
                    },
                    set: function (t) {
                        this[Q].set_(e, t);
                    },
                };
            }
            function nN(e) {
                if (e > nx) {
                    for (var t, n = nx; n < e + 100; n++)
                        (t = n), g(nP.prototype, "" + t, nT(t));
                    nx = e;
                }
            }
            function nV(e, t) {
                if ("object" == typeof e && null !== e) {
                    if (nc(e)) return void 0 !== t && r(23), e[Q].atom_;
                    if (np(e)) return e.atom_;
                    if (n_(e)) {
                        if (void 0 === t) return e.keysAtom_;
                        var n = e.data_.get(t) || e.hasMap_.get(t);
                        return n || r(25, t, nR(e)), n;
                    }
                    if (nw(e)) {
                        if (!t) return r(26);
                        var i = e[Q].values_.get(t);
                        return i || r(27, t, nR(e)), i;
                    }
                    if (et(e) || eY(e) || t_(e)) return e;
                } else if (x(e) && t_(e[Q])) return e[Q];
                r(28);
            }
            function nC(e, t) {
                return (e || r(29), void 0 !== t)
                    ? nC(nV(e, t))
                    : et(e) || eY(e) || t_(e) || n_(e) || np(e)
                      ? e
                      : e[Q]
                        ? e[Q]
                        : void r(24, e);
            }
            function nR(e, t) {
                var n;
                if (void 0 !== t) n = nV(e, t);
                else {
                    if (tj(e)) return e.name;
                    n = nw(e) || n_(e) || np(e) ? nC(e) : nV(e);
                }
                return n.name_;
            }
            Object.entries(nr).forEach(function (e) {
                var t = e[0],
                    n = e[1];
                "concat" !== t && V(nP.prototype, t, n);
            }),
                nN(1e3);
            var nD = y.toString;
            function nL(e, t, n) {
                return (
                    void 0 === n && (n = -1),
                    (function e(t, n, r, i, o) {
                        if (t === n) return 0 !== t || 1 / t == 1 / n;
                        if (null == t || null == n) return !1;
                        if (t != t) return n != n;
                        var a = typeof t;
                        if (
                            "function" !== a &&
                            "object" !== a &&
                            "object" != typeof n
                        )
                            return !1;
                        var s = nD.call(t);
                        if (s !== nD.call(n)) return !1;
                        switch (s) {
                            case "[object RegExp]":
                            case "[object String]":
                                return "" + t == "" + n;
                            case "[object Number]":
                                if (+t != +t) return +n != +n;
                                return 0 == +t ? 1 / t == 1 / n : +t == +n;
                            case "[object Date]":
                            case "[object Boolean]":
                                return +t == +n;
                            case "[object Symbol]":
                                return (
                                    "undefined" != typeof Symbol &&
                                    Symbol.valueOf.call(t) ===
                                        Symbol.valueOf.call(n)
                                );
                            case "[object Map]":
                            case "[object Set]":
                                r >= 0 && r++;
                        }
                        (t = nB(t)), (n = nB(n));
                        var u = "[object Array]" === s;
                        if (!u) {
                            if ("object" != typeof t || "object" != typeof n)
                                return !1;
                            var c = t.constructor,
                                l = n.constructor;
                            if (
                                c !== l &&
                                !(
                                    x(c) &&
                                    c instanceof c &&
                                    x(l) &&
                                    l instanceof l
                                ) &&
                                "constructor" in t &&
                                "constructor" in n
                            )
                                return !1;
                        }
                        if (0 === r) return !1;
                        r < 0 && (r = -1), (o = o || []);
                        for (var h = (i = i || []).length; h--; )
                            if (i[h] === t) return o[h] === n;
                        if ((i.push(t), o.push(n), u)) {
                            if ((h = t.length) !== n.length) return !1;
                            for (; h--; )
                                if (!e(t[h], n[h], r - 1, i, o)) return !1;
                        } else {
                            var f,
                                _ = Object.keys(t);
                            if (((h = _.length), Object.keys(n).length !== h))
                                return !1;
                            for (; h--; )
                                if (
                                    !(
                                        U(n, (f = _[h])) &&
                                        e(t[f], n[f], r - 1, i, o)
                                    )
                                )
                                    return !1;
                        }
                        return i.pop(), o.pop(), !0;
                    })(e, t, n)
                );
            }
            function nB(e) {
                return nc(e)
                    ? e.slice()
                    : D(e) || n_(e) || L(e) || np(e)
                      ? Array.from(e.entries())
                      : e;
            }
            function nM(e) {
                return (e[Symbol.iterator] = nI), e;
            }
            function nI() {
                return this;
            }
            ["Symbol", "Map", "Set"].forEach(function (e) {
                void 0 === d()[e] &&
                    r(
                        "MobX requires global '" +
                            e +
                            "' to be available or polyfilled",
                    );
            }),
                "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
                    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                        spy: function (e) {
                            return (
                                console.warn(
                                    "[mobx.spy] Is a no-op in production builds",
                                ),
                                function () {}
                            );
                        },
                        extras: { getDebugName: nR },
                        $mobx: Q,
                    });
        },
    },
]);
