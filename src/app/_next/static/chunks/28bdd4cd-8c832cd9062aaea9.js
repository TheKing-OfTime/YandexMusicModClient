"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7873],
  {
    37285: function (e, t, n) {
      function r(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
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
        Ei: function () {
          return nf;
        },
        Fl: function () {
          return eU;
        },
        Gf: function () {
          return tB;
        },
        LO: function () {
          return eL;
        },
        N7: function () {
          return tQ;
        },
        Nv: function () {
          return tH;
        },
        Pb: function () {
          return nx;
        },
        Su: function () {
          return tz;
        },
        U5: function () {
          return tV;
        },
        VO: function () {
          return tY;
        },
        ZN: function () {
          return t0;
        },
        _x: function () {
          return t$;
        },
        aD: function () {
          return tj;
        },
        cp: function () {
          return ea;
        },
        gx: function () {
          return t2;
        },
        jQ: function () {
          return tL;
        },
        kS: function () {
          return nD;
        },
        le: function () {
          return tf;
        },
        pu: function () {
          return to;
        },
        qh: function () {
          return tJ;
        },
        qp: function () {
          return nR;
        },
        rC: function () {
          return nt;
        },
        t8: function () {
          return function e(t, n, i) {
            if (2 == arguments.length && !ny(t)) {
              tu();
              var o = n;
              try {
                for (var a in o) e(t, a, o[a]);
              } finally {
                tc();
              }
              return;
            }
            nx(t)
              ? t[er].set_(n, i)
              : np(t)
                ? t.set(n, i)
                : ny(t)
                  ? t.add(n)
                  : nf(t)
                    ? ("number" != typeof n && (n = parseInt(n, 10)),
                      n < 0 && r("Invalid index: '" + n + "'"),
                      tu(),
                      n >= t.length && (t.length = n + 1),
                      (t[n] = i),
                      tc())
                    : r(8);
          };
        },
        vB: function () {
          return tE;
        },
        vP: function () {
          return nd;
        },
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
        v,
        d,
        p,
        b,
        g = {};
      function y() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
                ? self
                : g;
      }
      var m = Object.assign,
        O = Object.getOwnPropertyDescriptor,
        A = Object.defineProperty,
        w = Object.prototype,
        S = [];
      Object.freeze(S);
      var j = {};
      Object.freeze(j);
      var x = "undefined" != typeof Proxy,
        E = Object.toString();
      function k() {
        x || r("Proxy not available");
      }
      function P(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var N = function () {};
      function T(e) {
        return "function" == typeof e;
      }
      function V(e) {
        switch (typeof e) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function C(e) {
        return null !== e && "object" == typeof e;
      }
      function R(e) {
        if (!C(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n.toString() === E;
      }
      function D(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function L(e, t, n) {
        A(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
      }
      function B(e, t, n) {
        A(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
      }
      function I(e, t) {
        var n = "isMobX" + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return C(e) && !0 === e[n];
          }
        );
      }
      function M(e) {
        return e instanceof Map;
      }
      function U(e) {
        return e instanceof Set;
      }
      var K = void 0 !== Object.getOwnPropertySymbols,
        G =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : K
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e),
                  );
                }
              : Object.getOwnPropertyNames;
      function q(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function W(e, t) {
        return w.hasOwnProperty.call(e, t);
      }
      var H =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            G(e).forEach(function (n) {
              t[n] = O(e, n);
            }),
            t
          );
        };
      function z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var n = e[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == typeof t ? t : String(t);
              })(r.key),
              r,
            );
        }
      }
      function F(e, t, n) {
        return (
          t && z(e.prototype, t),
          n && z(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function X() {
        return (X = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function Y(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          J(e, t);
      }
      function J(e, t) {
        return (J = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function $(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function Q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Z(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Q(e, void 0);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Q(e, void 0);
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      var ee = Symbol("mobx-stored-annotations");
      function et(e) {
        return Object.assign(function (t, n) {
          en(t, n, e);
        }, e);
      }
      function en(e, t, n) {
        W(e, ee) || L(e, ee, X({}, e[ee])),
          "override" === n.annotationType_ || (e[ee][t] = n);
      }
      var er = Symbol("mobx administration"),
        ei = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation_ = !1),
              (this.isBeingObserved_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = f.NOT_TRACKING_),
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
              return tl(this);
            }),
            (t.reportChanged = function () {
              tu(),
                th(this),
                (ti.stateVersion =
                  ti.stateVersion < Number.MAX_SAFE_INTEGER
                    ? ti.stateVersion + 1
                    : Number.MIN_SAFE_INTEGER),
                tc();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        eo = I("Atom", ei);
      function ea(e, t, n) {
        void 0 === t && (t = N), void 0 === n && (n = N);
        var r = new ei(e);
        return t !== N && tR("onBO", r, t, void 0), n !== N && tC(r, n), r;
      }
      var es = {
        structural: function (e, t) {
          return nI(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
              ? 0 !== e || 1 / e == 1 / t
              : e != e && t != t;
        },
      };
      function eu(e, t, n) {
        return tF(e)
          ? e
          : Array.isArray(e)
            ? eL.array(e, { name: n })
            : R(e)
              ? eL.object(e, void 0, { name: n })
              : M(e)
                ? eL.map(e, { name: n })
                : U(e)
                  ? eL.set(e, { name: n })
                  : "function" != typeof e || tk(e) || tW(e)
                    ? e
                    : D(e)
                      ? tG(e)
                      : tx(n, e);
      }
      function ec(e) {
        return e;
      }
      function el(e, t) {
        return { annotationType_: e, options_: t, make_: eh, extend_: ef };
      }
      function eh(e, t, n, r) {
        if (null != (i = this.options_) && i.bound)
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (tk(n.value)) return 1;
        var i,
          o = e_(e, this, t, n, !1);
        return A(r, t, o), 2;
      }
      function ef(e, t, n, r) {
        var i = e_(e, this, t, n);
        return e.defineProperty_(t, i, r);
      }
      function e_(e, t, n, r, i) {
        void 0 === i && (i = ti.safeDescriptors), t.annotationType_, r.value;
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
            value: eH(
              null != (a = null == (s = t.options_) ? void 0 : s.name)
                ? a
                : n.toString(),
              _,
              null != (u = null == (c = t.options_) ? void 0 : c.autoAction) &&
                u,
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
      function ev(e, t) {
        return { annotationType_: e, options_: t, make_: ed, extend_: ep };
      }
      function ed(e, t, n, r) {
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (
          null != (i = this.options_) &&
          i.bound &&
          (!W(e.target_, t) || !tW(e.target_[t])) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (tW(n.value)) return 1;
        var i,
          o = eb(e, this, t, n, !1, !1);
        return A(r, t, o), 2;
      }
      function ep(e, t, n, r) {
        var i,
          o = eb(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
        return e.defineProperty_(t, o, r);
      }
      function eb(e, t, n, r, i, o) {
        void 0 === o && (o = ti.safeDescriptors), t.annotationType_, r.value;
        var a,
          s = r.value;
        return (
          tW(s) || (s = tG(s)),
          i &&
            ((s = s.bind(null != (a = e.proxy_) ? a : e.target_)).isMobXFlow =
              !0),
          {
            value: s,
            configurable: !o || e.isPlainObject_,
            enumerable: !1,
            writable: !o,
          }
        );
      }
      function eg(e, t) {
        return { annotationType_: e, options_: t, make_: ey, extend_: em };
      }
      function ey(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function em(e, t, n, r) {
        return (
          this.annotationType_,
          n.get,
          e.defineComputedProperty_(
            t,
            X({}, this.options_, { get: n.get, set: n.set }),
            r,
          )
        );
      }
      function eO(e, t) {
        return { annotationType_: e, options_: t, make_: eA, extend_: ew };
      }
      function eA(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function ew(e, t, n, r) {
        var i, o;
        return (
          this.annotationType_,
          e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer)
              ? i
              : eu,
            r,
          )
        );
      }
      var eS = ej();
      function ej(e) {
        return { annotationType_: "true", options_: e, make_: ex, extend_: eE };
      }
      function ex(e, t, n, r) {
        if (n.get) return eU.make_(e, t, n, r);
        if (n.set) {
          var i,
            o,
            a,
            s,
            u,
            c = eH(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !ti.safeDescriptors || e.isPlainObject_,
                set: c,
              })
              ? 0
              : 2
            : (A(r, t, { configurable: !0, set: c }), 2);
        }
        if (r !== e.target_ && "function" == typeof n.value)
          return D(n.value)
            ? (null != (s = this.options_) && s.autoBind ? tG.bound : tG).make_(
                e,
                t,
                n,
                r,
              )
            : (null != (a = this.options_) && a.autoBind ? tx.bound : tx).make_(
                e,
                t,
                n,
                r,
              );
        var l =
          (null == (i = this.options_) ? void 0 : i.deep) === !1 ? eL.ref : eL;
        return (
          "function" == typeof n.value &&
            null != (o = this.options_) &&
            o.autoBind &&
            (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_)),
          l.make_(e, t, n, r)
        );
      }
      function eE(e, t, n, r) {
        var i, o, a;
        return n.get
          ? eU.extend_(e, t, n, r)
          : n.set
            ? e.defineProperty_(
                t,
                {
                  configurable: !ti.safeDescriptors || e.isPlainObject_,
                  set: eH(t.toString(), n.set),
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
                ? eL.ref
                : eL
              ).extend_(e, t, n, r));
      }
      var ek = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      Object.freeze(ek);
      var eP = eO("observable"),
        eN = eO("observable.ref", { enhancer: ec }),
        eT = eO("observable.shallow", {
          enhancer: function (e, t, n) {
            return null == e || nx(e) || nf(e) || np(e) || ny(e)
              ? e
              : Array.isArray(e)
                ? eL.array(e, { name: n, deep: !1 })
                : R(e)
                  ? eL.object(e, void 0, { name: n, deep: !1 })
                  : M(e)
                    ? eL.map(e, { name: n, deep: !1 })
                    : U(e)
                      ? eL.set(e, { name: n, deep: !1 })
                      : void 0;
          },
        }),
        eV = eO("observable.struct", {
          enhancer: function (e, t) {
            return nI(e, t) ? t : e;
          },
        }),
        eC = et(eP);
      function eR(e) {
        var t, n, r;
        return !0 === e.deep
          ? eu
          : !1 === e.deep
            ? ec
            : (t = e.defaultDecorator) &&
                null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
              ? n
              : eu;
      }
      function eD(e, t, n) {
        if (V(t)) {
          en(e, t, eP);
          return;
        }
        return tF(e)
          ? e
          : R(e)
            ? eL.object(e, t, n)
            : Array.isArray(e)
              ? eL.array(e, t)
              : M(e)
                ? eL.map(e, t)
                : U(e)
                  ? eL.set(e, t)
                  : "object" == typeof e && null !== e
                    ? e
                    : eL.box(e, t);
      }
      m(eD, eC);
      var eL = m(eD, {
          box: function (e, t) {
            var n = t || ek;
            return new eJ(e, eR(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = t || ek;
            return (
              !1 === ti.useProxies || !1 === n.proxy
                ? function (e, t, n) {
                    return new nT(e, t, n);
                  }
                : function (e, t, n, r) {
                    void 0 === n && (n = "ObservableArray"),
                      void 0 === r && (r = !1),
                      k();
                    var i = new no(n, t, r, !1);
                    B(i.values_, er, i);
                    var o = new Proxy(i.values_, ni);
                    if (((i.proxy_ = o), e && e.length)) {
                      var a = eX(!0);
                      i.spliceWithArray_(0, 0, e), eY(a);
                    }
                    return o;
                  }
            )(e, eR(n), n.name);
          },
          map: function (e, t) {
            var n = t || ek;
            return new nd(e, eR(n), n.name);
          },
          set: function (e, t) {
            var n = t || ek;
            return new ng(e, eR(n), n.name);
          },
          object: function (e, t, n) {
            var r, i, o;
            return (function (e, t, n, r) {
              var i = H(t),
                o = nw(e, void 0)[er];
              tu();
              try {
                G(i).forEach(function (e) {
                  o.extend_(e, i[e], !n || !(e in n) || n[e]);
                });
              } finally {
                tc();
              }
              return e;
            })(
              !1 === ti.useProxies || (null == n ? void 0 : n.proxy) === !1
                ? nw({}, n)
                : ((r = {}),
                  k(),
                  null != (o = (i = (r = nw(r, n))[er]).proxy_)
                    ? o
                    : (i.proxy_ = new Proxy(r, t7))),
              e,
              t,
            );
          },
          ref: et(eN),
          shallow: et(eT),
          deep: eC,
          struct: et(eV),
        }),
        eB = "computed",
        eI = eg(eB),
        eM = eg("computed.struct", { equals: es.structural }),
        eU = function (e, t) {
          if (V(t)) return en(e, t, eI);
          if (R(e)) return et(eg(eB, e));
          var n = R(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ""), new eQ(n);
        };
      Object.assign(eU, eI), (eU.struct = et(eM));
      var eK = 0,
        eG = 1,
        eq =
          null !=
            (u =
              null == (c = O(function () {}, "name"))
                ? void 0
                : c.configurable) && u,
        eW = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function eH(e, t, n, r) {
        function i() {
          return ez(e, n, t, r || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (i.isMobxAction = !0),
          eq && ((eW.value = e), A(i, "name", eW)),
          i
        );
      }
      function ez(e, t, n, i, o) {
        var a,
          s,
          u,
          c,
          l =
            ((a = ti.trackingDerivation),
            (s = !t || !a),
            tu(),
            (u = ti.allowStateChanges),
            s && (e5(), (u = eX(!0))),
            (eK = (c = {
              runAsAction_: s,
              prevDerivation_: a,
              prevAllowStateChanges_: u,
              prevAllowStateReads_: e4(!0),
              notifySpy_: !1,
              startTime_: 0,
              actionId_: eG++,
              parentActionId_: eK,
            }).actionId_),
            c);
        try {
          return n.apply(i, o);
        } catch (e) {
          throw ((l.error_ = e), e);
        } finally {
          eK !== l.actionId_ && r(30),
            (eK = l.parentActionId_),
            void 0 !== l.error_ && (ti.suppressReactionErrors = !0),
            eY(l.prevAllowStateChanges_),
            e9(l.prevAllowStateReads_),
            tc(),
            l.runAsAction_ && e6(l.prevDerivation_),
            (ti.suppressReactionErrors = !1);
        }
      }
      function eF(e, t) {
        var n = eX(e);
        try {
          return t();
        } finally {
          eY(n);
        }
      }
      function eX(e) {
        var t = ti.allowStateChanges;
        return (ti.allowStateChanges = e), t;
      }
      function eY(e) {
        ti.allowStateChanges = e;
      }
      l = Symbol.toPrimitive;
      var eJ = (function (e) {
          function t(t, n, r, i, o) {
            var a;
            return (
              void 0 === r && (r = "ObservableValue"),
              void 0 === i && (i = !0),
              void 0 === o && (o = es.default),
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
          Y(t, e);
          var n = t.prototype;
          return (
            (n.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
              this.value_,
                (e = this.prepareNewValue_(e)) !== ti.UNCHANGED &&
                  this.setNewValue_(e);
            }),
            (n.prepareNewValue_ = function (e) {
              if (t8(this)) {
                var t = t6(this, { object: this, type: nr, newValue: e });
                if (!t) return ti.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value_, this.name_)),
                this.equals(this.value_, e) ? ti.UNCHANGED : e
              );
            }),
            (n.setNewValue_ = function (e) {
              var t = this.value_;
              (this.value_ = e),
                this.reportChanged(),
                t4(this) &&
                  ne(this, {
                    type: nr,
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (n.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (n.intercept_ = function (e) {
              return t5(this, e);
            }),
            (n.observe_ = function (e, t) {
              return (
                t &&
                  e({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: nr,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                t9(this, e)
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
              return q(this.get());
            }),
            (n[l] = function () {
              return this.valueOf();
            }),
            t
          );
        })(ei),
        e$ = I("ObservableValue", eJ);
      h = Symbol.toPrimitive;
      var eQ = (function () {
          function e(e) {
            (this.dependenciesState_ = f.NOT_TRACKING_),
              (this.observing_ = []),
              (this.newObserving_ = null),
              (this.isBeingObserved_ = !1),
              (this.isPendingUnobservation_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = f.UP_TO_DATE_),
              (this.unboundDepsCount_ = 0),
              (this.value_ = new e0(null)),
              (this.name_ = void 0),
              (this.triggeredBy_ = void 0),
              (this.isComputing_ = !1),
              (this.isRunningSetter_ = !1),
              (this.derivation = void 0),
              (this.setter_ = void 0),
              (this.isTracing_ = _.NONE),
              (this.scope_ = void 0),
              (this.equals_ = void 0),
              (this.requiresReaction_ = void 0),
              (this.keepAlive_ = void 0),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              e.get || r(31),
              (this.derivation = e.get),
              (this.name_ = e.name || "ComputedValue"),
              e.set && (this.setter_ = eH("ComputedValue-setter", e.set)),
              (this.equals_ =
                e.equals ||
                (e.compareStructural || e.struct ? es.structural : es.default)),
              (this.scope_ = e.context),
              (this.requiresReaction_ = e.requiresReaction),
              (this.keepAlive_ = !!e.keepAlive);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function () {
              this.lowestObserverState_ === f.UP_TO_DATE_ &&
                ((this.lowestObserverState_ = f.POSSIBLY_STALE_),
                this.observers_.forEach(function (e) {
                  e.dependenciesState_ === f.UP_TO_DATE_ &&
                    ((e.dependenciesState_ = f.POSSIBLY_STALE_),
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
                (this.isComputing_ && r(32, this.name_, this.derivation),
                0 !== ti.inBatch ||
                  0 !== this.observers_.size ||
                  this.keepAlive_)
              ) {
                if ((tl(this), e2(this))) {
                  var e,
                    t = ti.trackingContext;
                  this.keepAlive_ && !t && (ti.trackingContext = this),
                    this.trackAndCompute() &&
                      ((e = this),
                      e.lowestObserverState_ !== f.STALE_ &&
                        ((e.lowestObserverState_ = f.STALE_),
                        e.observers_.forEach(function (t) {
                          t.dependenciesState_ === f.POSSIBLY_STALE_
                            ? (t.dependenciesState_ = f.STALE_)
                            : t.dependenciesState_ === f.UP_TO_DATE_ &&
                              (e.lowestObserverState_ = f.UP_TO_DATE_);
                        }))),
                    (ti.trackingContext = t);
                }
              } else
                e2(this) &&
                  (this.warnAboutUntrackedRead_(),
                  tu(),
                  (this.value_ = this.computeValue_(!1)),
                  tc());
              var n = this.value_;
              if (e1(n)) throw n.cause;
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
                t = this.dependenciesState_ === f.NOT_TRACKING_,
                n = this.computeValue_(!0),
                r = t || e1(e) || e1(n) || !this.equals_(e, n);
              return r && (this.value_ = n), r;
            }),
            (t.computeValue_ = function (e) {
              this.isComputing_ = !0;
              var t,
                n = eX(!1);
              if (e) t = e3(this, this.derivation, this.scope_);
              else if (!0 === ti.disableErrorBoundaries)
                t = this.derivation.call(this.scope_);
              else
                try {
                  t = this.derivation.call(this.scope_);
                } catch (e) {
                  t = new e0(e);
                }
              return eY(n), (this.isComputing_ = !1), t;
            }),
            (t.suspend_ = function () {
              this.keepAlive_ || (e7(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
              var n = this,
                r = !0,
                i = void 0;
              return tP(function () {
                var o = n.get();
                if (!r || t) {
                  var a = e5();
                  e({
                    observableKind: "computed",
                    debugObjectName: n.name_,
                    type: nr,
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
              return this.name_ + "[" + this.derivation.toString() + "]";
            }),
            (t.valueOf = function () {
              return q(this.get());
            }),
            (t[h] = function () {
              return this.valueOf();
            }),
            e
          );
        })(),
        eZ = I("ComputedValue", eQ);
      ((i = f || (f = {}))[(i.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
        (i[(i.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
        (i[(i.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
        (i[(i.STALE_ = 2)] = "STALE_"),
        ((o = _ || (_ = {}))[(o.NONE = 0)] = "NONE"),
        (o[(o.LOG = 1)] = "LOG"),
        (o[(o.BREAK = 2)] = "BREAK");
      var e0 = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function e1(e) {
        return e instanceof e0;
      }
      function e2(e) {
        switch (e.dependenciesState_) {
          case f.UP_TO_DATE_:
            return !1;
          case f.NOT_TRACKING_:
          case f.STALE_:
            return !0;
          case f.POSSIBLY_STALE_:
            for (
              var t = e4(!0), n = e5(), r = e.observing_, i = r.length, o = 0;
              o < i;
              o++
            ) {
              var a = r[o];
              if (eZ(a)) {
                if (ti.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return e6(n), e9(t), !0;
                  }
                if (e.dependenciesState_ === f.STALE_) return e6(n), e9(t), !0;
              }
            }
            return te(e), e6(n), e9(t), !1;
        }
      }
      function e3(e, t, n) {
        var r,
          i = e4(!0);
        te(e),
          (e.newObserving_ = Array(e.observing_.length + 100)),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++ti.runId);
        var o = ti.trackingDerivation;
        if (
          ((ti.trackingDerivation = e),
          ti.inBatch++,
          !0 === ti.disableErrorBoundaries)
        )
          r = t.call(n);
        else
          try {
            r = t.call(n);
          } catch (e) {
            r = new e0(e);
          }
        return (
          ti.inBatch--,
          (ti.trackingDerivation = o),
          (function (e) {
            for (
              var t = e.observing_,
                n = (e.observing_ = e.newObserving_),
                r = f.UP_TO_DATE_,
                i = 0,
                o = e.unboundDepsCount_,
                a = 0;
              a < o;
              a++
            ) {
              var s = n[a];
              0 === s.diffValue_ &&
                ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                s.dependenciesState_ > r && (r = s.dependenciesState_);
            }
            for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
              var u = t[o];
              0 === u.diffValue_ && ta(u, e), (u.diffValue_ = 0);
            }
            for (; i--; ) {
              var c = n[i];
              1 === c.diffValue_ &&
                ((c.diffValue_ = 0),
                c.observers_.add(e),
                c.lowestObserverState_ > e.dependenciesState_ &&
                  (c.lowestObserverState_ = e.dependenciesState_));
            }
            r !== f.UP_TO_DATE_ &&
              ((e.dependenciesState_ = r), e.onBecomeStale_());
          })(e),
          e9(i),
          r
        );
      }
      function e7(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--; ) ta(t[n], e);
        e.dependenciesState_ = f.NOT_TRACKING_;
      }
      function e8(e) {
        var t = e5();
        try {
          return e();
        } finally {
          e6(t);
        }
      }
      function e5() {
        var e = ti.trackingDerivation;
        return (ti.trackingDerivation = null), e;
      }
      function e6(e) {
        ti.trackingDerivation = e;
      }
      function e4(e) {
        var t = ti.allowStateReads;
        return (ti.allowStateReads = e), t;
      }
      function e9(e) {
        ti.allowStateReads = e;
      }
      function te(e) {
        if (e.dependenciesState_ !== f.UP_TO_DATE_) {
          e.dependenciesState_ = f.UP_TO_DATE_;
          for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = f.UP_TO_DATE_;
        }
      }
      var tt = function () {
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
        tn = !0,
        tr = !1,
        ti = ((a = y()).__mobxInstanceCount > 0 &&
          !a.__mobxGlobals &&
          (tn = !1),
        a.__mobxGlobals &&
          a.__mobxGlobals.version !== new tt().version &&
          (tn = !1),
        tn)
          ? a.__mobxGlobals
            ? ((a.__mobxInstanceCount += 1),
              a.__mobxGlobals.UNCHANGED || (a.__mobxGlobals.UNCHANGED = {}),
              a.__mobxGlobals)
            : ((a.__mobxInstanceCount = 1), (a.__mobxGlobals = new tt()))
          : (setTimeout(function () {
              tr || r(35);
            }, 1),
            new tt());
      function to() {
        return ti;
      }
      function ta(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && ts(e);
      }
      function ts(e) {
        !1 === e.isPendingUnobservation_ &&
          ((e.isPendingUnobservation_ = !0), ti.pendingUnobservations.push(e));
      }
      function tu() {
        ti.inBatch++;
      }
      function tc() {
        if (0 == --ti.inBatch) {
          tv();
          for (var e = ti.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation_ = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                n instanceof eQ && n.suspend_());
          }
          ti.pendingUnobservations = [];
        }
      }
      function tl(e) {
        var t = ti.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ &&
                ti.trackingContext &&
                ((e.isBeingObserved_ = !0), e.onBO())),
            e.isBeingObserved_)
          : (0 === e.observers_.size && ti.inBatch > 0 && ts(e), !1);
      }
      function th(e) {
        e.lowestObserverState_ !== f.STALE_ &&
          ((e.lowestObserverState_ = f.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === f.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = f.STALE_);
          }));
      }
      var tf = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "Reaction"),
              (this.name_ = void 0),
              (this.onInvalidate_ = void 0),
              (this.errorHandler_ = void 0),
              (this.requiresObservable_ = void 0),
              (this.observing_ = []),
              (this.newObserving_ = []),
              (this.dependenciesState_ = f.NOT_TRACKING_),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.unboundDepsCount_ = 0),
              (this.isDisposed_ = !1),
              (this.isScheduled_ = !1),
              (this.isTrackPending_ = !1),
              (this.isRunning_ = !1),
              (this.isTracing_ = _.NONE),
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
                ti.pendingReactions.push(this),
                tv());
            }),
            (t.isScheduled = function () {
              return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
              if (!this.isDisposed_) {
                tu(), (this.isScheduled_ = !1);
                var e = ti.trackingContext;
                if (((ti.trackingContext = this), e2(this))) {
                  this.isTrackPending_ = !0;
                  try {
                    this.onInvalidate_();
                  } catch (e) {
                    this.reportExceptionInDerivation_(e);
                  }
                }
                (ti.trackingContext = e), tc();
              }
            }),
            (t.track = function (e) {
              if (!this.isDisposed_) {
                tu(), (this.isRunning_ = !0);
                var t = ti.trackingContext;
                ti.trackingContext = this;
                var n = e3(this, e, void 0);
                (ti.trackingContext = t),
                  (this.isRunning_ = !1),
                  (this.isTrackPending_ = !1),
                  this.isDisposed_ && e7(this),
                  e1(n) && this.reportExceptionInDerivation_(n.cause),
                  tc();
              }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
              var t = this;
              if (this.errorHandler_) {
                this.errorHandler_(e, this);
                return;
              }
              if (ti.disableErrorBoundaries) throw e;
              ti.suppressReactionErrors ||
                console.error("[mobx] uncaught error in '" + this + "'", e),
                ti.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }),
            (t.dispose = function () {
              this.isDisposed_ ||
                ((this.isDisposed_ = !0),
                this.isRunning_ || (tu(), e7(this), tc()));
            }),
            (t.getDisposer_ = function () {
              var e = this.dispose.bind(this);
              return (e[er] = this), e;
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
        t_ = function (e) {
          return e();
        };
      function tv() {
        ti.inBatch > 0 || ti.isRunningReactions || t_(td);
      }
      function td() {
        ti.isRunningReactions = !0;
        for (var e = ti.pendingReactions, t = 0; e.length > 0; ) {
          100 == ++t &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_();
        }
        ti.isRunningReactions = !1;
      }
      var tp = I("Reaction", tf),
        tb = "action",
        tg = "autoAction",
        ty = "<unnamed action>",
        tm = el(tb),
        tO = el("action.bound", { bound: !0 }),
        tA = el(tg, { autoAction: !0 }),
        tw = el("autoAction.bound", { autoAction: !0, bound: !0 });
      function tS(e) {
        return function (t, n) {
          return T(t)
            ? eH(t.name || ty, t, e)
            : T(n)
              ? eH(t, n, e)
              : V(n)
                ? en(t, n, e ? tA : tm)
                : V(t)
                  ? et(el(e ? tg : tb, { name: t, autoAction: e }))
                  : void 0;
        };
      }
      var tj = tS(!1);
      Object.assign(tj, tm);
      var tx = tS(!0);
      function tE(e) {
        return ez(e.name || ty, !1, e, this, void 0);
      }
      function tk(e) {
        return T(e) && !0 === e.isMobxAction;
      }
      function tP(e, t) {
        void 0 === t && (t = j);
        var n,
          r,
          i,
          o = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
        if (t.scheduler || t.delay) {
          var a = tT(t),
            s = !1;
          i = new tf(
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
          i = new tf(
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
      Object.assign(tx, tA), (tj.bound = et(tO)), (tx.bound = et(tw));
      var tN = function (e) {
        return e();
      };
      function tT(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : tN;
      }
      function tV(e, t, n) {
        void 0 === n && (n = j);
        var r,
          i,
          o,
          a,
          s = null != (i = n.name) ? i : "Reaction",
          u = tj(
            s,
            n.onError
              ? ((r = n.onError),
                function () {
                  try {
                    return t.apply(this, arguments);
                  } catch (e) {
                    r.call(this, e);
                  }
                })
              : t,
          ),
          c = !n.scheduler && !n.delay,
          l = tT(n),
          h = !0,
          f = !1,
          _ = n.compareStructural ? es.structural : n.equals || es.default,
          v = new tf(
            s,
            function () {
              h || c ? d() : f || ((f = !0), l(d));
            },
            n.onError,
            n.requiresObservable,
          );
        function d() {
          if (((f = !1), !v.isDisposed_)) {
            var t = !1;
            v.track(function () {
              var n = eF(!1, function () {
                return e(v);
              });
              (t = h || !_(o, n)), (a = o), (o = n);
            }),
              h && n.fireImmediately ? u(o, a, v) : !h && t && u(o, a, v),
              (h = !1);
          }
        }
        return v.schedule_(), v.getDisposer_();
      }
      function tC(e, t, n) {
        return tR("onBUO", e, t, n);
      }
      function tR(e, t, n, r) {
        var i = "function" == typeof r ? nR(t, n) : nR(t),
          o = T(r) ? r : n,
          a = e + "L";
        return (
          i[a] ? i[a].add(o) : (i[a] = new Set([o])),
          function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
          }
        );
      }
      var tD = "always";
      function tL(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((ti.pendingReactions.length ||
                ti.inBatch ||
                ti.isRunningReactions) &&
                r(36),
              (tr = !0),
              tn)
            ) {
              var e = y();
              0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (ti = new tt());
            }
          })();
        var t,
          n,
          i = e.useProxies,
          o = e.enforceActions;
        if (
          (void 0 !== i &&
            (ti.useProxies =
              i === tD || ("never" !== i && "undefined" != typeof Proxy)),
          "ifavailable" === i && (ti.verifyProxies = !0),
          void 0 !== o)
        ) {
          var a = o === tD ? tD : "observed" === o;
          (ti.enforceActions = a),
            (ti.allowStateChanges = !0 !== a && a !== tD);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (ti[t] = !!e[t]);
        }),
          (ti.allowStateReads = !ti.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = t_),
            (t_ = function (e) {
              return t(function () {
                return n(e);
              });
            }));
      }
      function tB(e, t) {
        return (function e(t) {
          var n = { name: t.name_ };
          return (
            t.observing_ &&
              t.observing_.length > 0 &&
              (n.dependencies = Array.from(new Set(t.observing_)).map(e)),
            n
          );
        })(nR(e, t));
      }
      var tI = 0;
      function tM() {
        this.message = "FLOW_CANCELLED";
      }
      tM.prototype = Object.create(Error.prototype);
      var tU = ev("flow"),
        tK = ev("flow.bound", { bound: !0 }),
        tG = Object.assign(function (e, t) {
          if (V(t)) return en(e, t, tU);
          var n = e.name || "<unnamed flow>",
            r = function () {
              var t,
                r = arguments,
                i = ++tI,
                o = tj(n + " - runid: " + i + " - init", e).apply(this, r),
                a = void 0,
                s = new Promise(function (e, r) {
                  var s = 0;
                  function u(e) {
                    var t;
                    a = void 0;
                    try {
                      t = tj(
                        n + " - runid: " + i + " - yield " + s++,
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
                      t = tj(
                        n + " - runid: " + i + " - yield " + s++,
                        o.throw,
                      ).call(o, e);
                    } catch (e) {
                      return r(e);
                    }
                    l(t);
                  }
                  function l(t) {
                    if (T(null == t ? void 0 : t.then)) {
                      t.then(l, r);
                      return;
                    }
                    return t.done
                      ? e(t.value)
                      : (a = Promise.resolve(t.value)).then(u, c);
                  }
                  (t = r), u(void 0);
                });
              return (
                (s.cancel = tj(n + " - runid: " + i + " - cancel", function () {
                  try {
                    a && tq(a);
                    var e = o.return(void 0),
                      n = Promise.resolve(e.value);
                    n.then(N, N), tq(n), t(new tM());
                  } catch (e) {
                    t(e);
                  }
                })),
                s
              );
            };
          return (r.isMobXFlow = !0), r;
        }, tU);
      function tq(e) {
        T(e.cancel) && e.cancel();
      }
      function tW(e) {
        return (null == e ? void 0 : e.isMobXFlow) === !0;
      }
      function tH(e, t, n) {
        var r;
        return (
          np(e) || nf(e) || e$(e) ? (r = nD(e)) : nx(e) && (r = nD(e, t)),
          (r.dehancer = "function" == typeof t ? t : n),
          function () {
            r.dehancer = void 0;
          }
        );
      }
      function tz(e, t, n) {
        return T(n) ? nD(e, t).intercept_(n) : nD(e).intercept_(t);
      }
      function tF(e) {
        return !!e && (nx(e) || !!e[er] || eo(e) || tp(e) || eZ(e));
      }
      function tX(e) {
        return nx(e)
          ? e[er].keys_()
          : np(e) || ny(e)
            ? Array.from(e.keys())
            : nf(e)
              ? e.map(function (e, t) {
                  return t;
                })
              : void r(5);
      }
      function tY(e) {
        return nx(e)
          ? tX(e).map(function (t) {
              return e[t];
            })
          : np(e)
            ? tX(e).map(function (t) {
                return e.get(t);
              })
            : ny(e)
              ? Array.from(e.values())
              : nf(e)
                ? e.slice()
                : void r(6);
      }
      function tJ(e) {
        return nx(e)
          ? tX(e).map(function (t) {
              return [t, e[t]];
            })
          : np(e)
            ? tX(e).map(function (t) {
                return [t, e.get(t)];
              })
            : ny(e)
              ? Array.from(e.entries())
              : nf(e)
                ? e.map(function (e, t) {
                    return [t, e];
                  })
                : void r(7);
      }
      function t$(e, t, n) {
        if (nx(e)) return e[er].defineProperty_(t, n);
        r(39);
      }
      function tQ(e, t, n, r) {
        return T(n) ? nD(e, t).observe_(n, r) : nD(e).observe_(t, n);
      }
      function tZ(e, t, n) {
        return e.set(t, n), n;
      }
      function t0(e, t) {
        return (function e(t, n) {
          if (null == t || "object" != typeof t || t instanceof Date || !tF(t))
            return t;
          if (e$(t) || eZ(t)) return e(t.get(), n);
          if (n.has(t)) return n.get(t);
          if (nf(t)) {
            var i = tZ(n, t, Array(t.length));
            return (
              t.forEach(function (t, r) {
                i[r] = e(t, n);
              }),
              i
            );
          }
          if (ny(t)) {
            var o = tZ(n, t, new Set());
            return (
              t.forEach(function (t) {
                o.add(e(t, n));
              }),
              o
            );
          }
          if (np(t)) {
            var a = tZ(n, t, new Map());
            return (
              t.forEach(function (t, r) {
                a.set(r, e(t, n));
              }),
              a
            );
          }
          var s = tZ(n, t, {});
          return (
            (function (e) {
              if (nx(e)) return e[er].ownKeys_();
              r(38);
            })(t).forEach(function (r) {
              w.propertyIsEnumerable.call(t, r) && (s[r] = e(t[r], n));
            }),
            s
          );
        })(e, new Map());
      }
      function t1(e, t) {
        void 0 === t && (t = void 0), tu();
        try {
          return e.apply(t);
        } finally {
          tc();
        }
      }
      function t2(e, t, n) {
        return 1 == arguments.length || (t && "object" == typeof t)
          ? (function (e, t) {
              if (null != t && null != (n = t.signal) && n.aborted)
                return Object.assign(Promise.reject(Error("WHEN_ABORTED")), {
                  cancel: function () {
                    return null;
                  },
                });
              var n,
                r,
                i,
                o = new Promise(function (n, o) {
                  var a,
                    s = t3(e, n, X({}, t, { onError: o }));
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
                  return null == t
                    ? void 0
                    : null == (e = t.signal)
                      ? void 0
                      : null == e.removeEventListener
                        ? void 0
                        : e.removeEventListener("abort", i);
                });
              return (o.cancel = r), o;
            })(e, t)
          : t3(e, t, n || {});
      }
      function t3(e, t, n) {
        if ("number" == typeof n.timeout) {
          var r,
            i = Error("WHEN_TIMEOUT");
          r = setTimeout(function () {
            if (!a[er].isDisposed_) {
              if ((a(), n.onError)) n.onError(i);
              else throw i;
            }
          }, n.timeout);
        }
        n.name = "When";
        var o = eH("When-effect", t),
          a = tP(function (t) {
            eF(!1, e) && (t.dispose(), r && clearTimeout(r), o());
          }, n);
        return a;
      }
      tG.bound = et(tK);
      var t7 = {
        has: function (e, t) {
          return e[er].has_(t);
        },
        get: function (e, t) {
          return e[er].get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!V(t) && (null == (r = e[er].set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!V(t) && (null == (n = e[er].delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = e[er].defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return e[er].ownKeys_();
        },
        preventExtensions: function (e) {
          r(13);
        },
      };
      function t8(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function t5(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          P(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function t6(e, t) {
        var n = e5();
        try {
          for (
            var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
            o < a && ((t = i[o](t)) && !t.type && r(14), t);
            o++
          );
          return t;
        } finally {
          e6(n);
        }
      }
      function t4(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function t9(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          P(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function ne(e, t) {
        var n = e5(),
          r = e.changeListeners_;
        if (r) {
          r = r.slice();
          for (var i = 0, o = r.length; i < o; i++) r[i](t);
          e6(n);
        }
      }
      function nt(e, t, n) {
        var r = nw(e, n)[er];
        tu();
        try {
          null != t || (W(e, ee) || L(e, ee, X({}, e[ee])), (t = e[ee])),
            G(t).forEach(function (e) {
              return r.make_(e, t[e]);
            });
        } finally {
          tc();
        }
        return e;
      }
      var nn = "splice",
        nr = "update",
        ni = {
          get: function (e, t) {
            var n = e[er];
            return t === er
              ? n
              : "length" === t
                ? n.getArrayLength_()
                : "string" != typeof t || isNaN(t)
                  ? W(na, t)
                    ? na[t]
                    : e[t]
                  : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[er];
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
        no = (function () {
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
              (this.atom_ = new ei(e)),
              (this.enhancer_ = function (e, n) {
                return t(e, n, "ObservableArray[..]");
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return t5(this, e);
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
                t9(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ("number" != typeof e || isNaN(e) || e < 0) &&
                r("Out of range: " + e);
              var t = this.values_.length;
              if (e !== t) {
                if (e > t) {
                  for (var n = Array(e - t), i = 0; i < e - t; i++)
                    n[i] = void 0;
                  this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
              }
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && r(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && nC(e + t + 1);
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
                void 0 === n && (n = S),
                t8(this))
              ) {
                var o = t6(this, {
                  object: this.proxy_,
                  type: nn,
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!o) return S;
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
                (0 !== t || 0 !== n.length) && this.notifyArraySplice_(e, n, s),
                this.dehanceValues_(s)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
              if (n.length < 1e4) {
                var r;
                return (r = this.values_).splice.apply(r, [e, t].concat(n));
              }
              var i = this.values_.slice(e, e + t),
                o = this.values_.slice(e + t);
              this.values_.length += n.length - t;
              for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
              for (var s = 0; s < o.length; s++)
                this.values_[e + n.length + s] = o[s];
              return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = t4(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: nr,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), i && ne(this, o);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = t4(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: nn,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), i && ne(this, o);
            }),
            (t.get_ = function (e) {
              if (this.legacyMode_ && e >= this.values_.length) {
                console.warn("[mobx] Out of bounds read: " + e);
                return;
              }
              return (
                this.atom_.reportObserved(), this.dehanceValue_(this.values_[e])
              );
            }),
            (t.set_ = function (e, t) {
              var n = this.values_;
              if (
                (this.legacyMode_ && e > n.length && r(17, e, n.length),
                e < n.length)
              ) {
                this.atom_;
                var i = n[e];
                if (t8(this)) {
                  var o = t6(this, {
                    type: nr,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!o) return;
                  t = o.newValue;
                }
                (t = this.enhancer_(t, i)) !== i &&
                  ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
              } else {
                for (
                  var a = Array(e + 1 - n.length), s = 0;
                  s < a.length - 1;
                  s++
                )
                  a[s] = void 0;
                (a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a);
              }
            }),
            e
          );
        })(),
        na = {
          clear: function () {
            return this.splice(0);
          },
          replace: function (e) {
            var t = this[er];
            return t.spliceWithArray_(0, t.values_.length, e);
          },
          toJSON: function () {
            return this.slice();
          },
          splice: function (e, t) {
            for (
              var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
              i < n;
              i++
            )
              r[i - 2] = arguments[i];
            var o = this[er];
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
            return this[er].spliceWithArray_(e, t, n);
          },
          push: function () {
            for (
              var e = this[er], t = arguments.length, n = Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
          },
          pop: function () {
            return this.splice(Math.max(this[er].values_.length - 1, 0), 1)[0];
          },
          shift: function () {
            return this.splice(0, 1)[0];
          },
          unshift: function () {
            for (
              var e = this[er], t = arguments.length, n = Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            return e.spliceWithArray_(0, 0, n), e.values_.length;
          },
          reverse: function () {
            return (
              ti.trackingDerivation && r(37, "reverse"),
              this.replace(this.slice().reverse()),
              this
            );
          },
          sort: function () {
            ti.trackingDerivation && r(37, "sort");
            var e = this.slice();
            return e.sort.apply(e, arguments), this.replace(e), this;
          },
          remove: function (e) {
            var t = this[er],
              n = t.dehanceValues_(t.values_).indexOf(e);
            return n > -1 && (this.splice(n, 1), !0);
          },
        };
      function ns(e, t) {
        "function" == typeof Array.prototype[e] && (na[e] = t(e));
      }
      function nu(e) {
        return function () {
          var t = this[er];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function nc(e) {
        return function (t, n) {
          var r = this,
            i = this[er];
          return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
              return t.call(n, e, i, r);
            })
          );
        };
      }
      function nl(e) {
        return function () {
          var t = this,
            n = this[er];
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
      ns("concat", nu),
        ns("flat", nu),
        ns("includes", nu),
        ns("indexOf", nu),
        ns("join", nu),
        ns("lastIndexOf", nu),
        ns("slice", nu),
        ns("toString", nu),
        ns("toLocaleString", nu),
        ns("every", nc),
        ns("filter", nc),
        ns("find", nc),
        ns("findIndex", nc),
        ns("flatMap", nc),
        ns("forEach", nc),
        ns("map", nc),
        ns("some", nc),
        ns("reduce", nl),
        ns("reduceRight", nl);
      var nh = I("ObservableArrayAdministration", no);
      function nf(e) {
        return C(e) && nh(e[er]);
      }
      var n_ = {},
        nv = "delete";
      (v = Symbol.iterator), (d = Symbol.toStringTag);
      var nd = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = eu),
              void 0 === n && (n = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[er] = n_),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              T(Map) || r(18),
              (this.keysAtom_ = ea("ObservableMap.keys()")),
              (this.data_ = new Map()),
              (this.hasMap_ = new Map()),
              eF(!0, function () {
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
              if (!ti.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new eJ(
                  this.has_(e),
                  ec,
                  "ObservableMap.key?",
                  !1,
                ));
                this.hasMap_.set(e, r),
                  tC(r, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (t8(this)) {
                var r = t6(this, {
                  type: n ? nr : "add",
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                (this.keysAtom_,
                t8(this) && !t6(this, { type: nv, object: this, name: e }))
              )
                return !1;
              if (this.has_(e)) {
                var n = t4(this),
                  r = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: nv,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  t1(function () {
                    var n;
                    t.keysAtom_.reportChanged(),
                      null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  n && ne(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if ((t = n.prepareNewValue_(t)) !== ti.UNCHANGED) {
                var r = t4(this),
                  i = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: nr,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                n.setNewValue_(t), r && ne(this, i);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              this.keysAtom_,
                t1(function () {
                  var r,
                    i = new eJ(t, n.enhancer_, "ObservableMap.key", !1);
                  n.data_.set(e, i),
                    (t = i.value_),
                    null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                    n.keysAtom_.reportChanged();
                });
              var r = t4(this),
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
              r && ne(this, i);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return nU({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : e.get(i) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return nU({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : [i, e.get(i)] };
                },
              });
            }),
            (t[v] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var n, r = Z(this); !(n = r()).done; ) {
                var i = n.value,
                  o = i[0],
                  a = i[1];
                e.call(t, a, o, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                np(e) && (e = new Map(e)),
                t1(function () {
                  R(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!K) return t;
                        var n = Object.getOwnPropertySymbols(e);
                        return n.length
                          ? [].concat(
                              t,
                              n.filter(function (t) {
                                return w.propertyIsEnumerable.call(e, t);
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
                      : M(e)
                        ? (e.constructor !== Map && r(19, e),
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
              t1(function () {
                e8(function () {
                  for (var t, n = Z(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                t1(function () {
                  for (
                    var n,
                      i = (function (e) {
                        if (M(e) || np(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if (!R(e)) return r(21, e);
                        var t = new Map();
                        for (var n in e) t.set(n, e[n]);
                        return t;
                      })(e),
                      o = new Map(),
                      a = !1,
                      s = Z(t.data_.keys());
                    !(n = s()).done;

                  ) {
                    var u = n.value;
                    if (!i.has(u)) {
                      if (t.delete(u)) a = !0;
                      else {
                        var c = t.data_.get(u);
                        o.set(u, c);
                      }
                    }
                  }
                  for (var l, h = Z(i.entries()); !(l = h()).done; ) {
                    var f = l.value,
                      _ = f[0],
                      v = f[1],
                      d = t.data_.has(_);
                    if ((t.set(_, v), t.data_.has(_))) {
                      var p = t.data_.get(_);
                      o.set(_, p), d || (a = !0);
                    }
                  }
                  if (!a) {
                    if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
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
              return t9(this, e);
            }),
            (t.intercept_ = function (e) {
              return t5(this, e);
            }),
            F(e, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: d,
                get: function () {
                  return "Map";
                },
              },
            ]),
            e
          );
        })(),
        np = I("ObservableMap", nd),
        nb = {};
      (p = Symbol.iterator), (b = Symbol.toStringTag);
      var ng = (function () {
          function e(e, t, n) {
            void 0 === t && (t = eu),
              void 0 === n && (n = "ObservableSet"),
              (this.name_ = void 0),
              (this[er] = nb),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = n),
              T(Set) || r(22),
              (this.atom_ = ea(this.name_)),
              (this.enhancer_ = function (e, r) {
                return t(e, r, n);
              }),
              e && this.replace(e);
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              t1(function () {
                e8(function () {
                  for (var t, n = Z(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = Z(this); !(n = r()).done; ) {
                var i = n.value;
                e.call(t, i, i, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if (
                (this.atom_,
                t8(this) &&
                  !t6(this, { type: "add", object: this, newValue: e }))
              )
                return this;
              if (!this.has(e)) {
                t1(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = t4(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: "add",
                        object: this,
                        newValue: e,
                      }
                    : null;
                n && ne(this, r);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                t8(this) &&
                !t6(this, { type: nv, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var n = t4(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: nv,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  t1(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  n && ne(this, r),
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
              return nU({
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
              return nU({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                ny(e) && (e = new Set(e)),
                t1(function () {
                  Array.isArray(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : U(e)
                      ? (t.clear(),
                        e.forEach(function (e) {
                          return t.add(e);
                        }))
                      : null != e && r("Cannot initialize set from " + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return t9(this, e);
            }),
            (t.intercept_ = function (e) {
              return t5(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return "[object ObservableSet]";
            }),
            (t[p] = function () {
              return this.values();
            }),
            F(e, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: b,
                get: function () {
                  return "Set";
                },
              },
            ]),
            e
          );
        })(),
        ny = I("ObservableSet", ng),
        nm = Object.create(null),
        nO = "remove",
        nA = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              void 0 === r && (r = eS),
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
              (this.keysAtom_ = new ei("ObservableObject.keys")),
              (this.isPlainObject_ = R(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof eQ) return n.set(t), !0;
              if (t8(this)) {
                var r = t6(this, {
                  type: nr,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if ((t = n.prepareNewValue_(t)) !== ti.UNCHANGED) {
                var i = t4(this),
                  o = i
                    ? {
                        type: nr,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                n.setNewValue_(t), i && ne(this, o);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                ti.trackingDerivation && !W(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, n) {
              return (void 0 === n && (n = !1), W(this.target_, e))
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
              if (!ti.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new eJ(
                    e in this.target_,
                    ec,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if (!(e in this.target_)) {
                  var n;
                  if (null != (n = this.target_[ee]) && n[e]) return;
                  r(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for (var i = this.target_; i && i !== w; ) {
                  var o = O(i, e);
                  if (o) {
                    var a = t.make_(this, e, o, i);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  i = Object.getPrototypeOf(i);
                }
                nE(this, t, e);
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
              return i && nE(this, n, e), i;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                tu();
                var r = this.delete_(e);
                if (!r) return r;
                if (t8(this)) {
                  var i = t6(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: "add",
                    newValue: t.value,
                  });
                  if (!i) return null;
                  var o = i.newValue;
                  t.value !== o && (t = X({}, t, { value: o }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else A(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                tc();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1);
              try {
                tu();
                var i = this.delete_(e);
                if (!i) return i;
                if (t8(this)) {
                  var o = t6(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: "add",
                    newValue: t,
                  });
                  if (!o) return null;
                  t = o.newValue;
                }
                var a = nj(e),
                  s = {
                    configurable: !ti.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else A(this.target_, e, s);
                var u = new eJ(t, n, "ObservableObject.key", !1);
                this.values_.set(e, u),
                  this.notifyPropertyAddition_(e, u.value_);
              } finally {
                tc();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                tu();
                var r = this.delete_(e);
                if (!r) return r;
                if (
                  t8(this) &&
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
                var i = nj(e),
                  o = {
                    configurable: !ti.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: i.get,
                    set: i.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else A(this.target_, e, o);
                this.values_.set(e, new eQ(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                tc();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if ((void 0 === t && (t = !1), !W(this.target_, e))) return !0;
              if (
                t8(this) &&
                !t6(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: nO,
                })
              )
                return null;
              try {
                tu();
                var n,
                  r,
                  i,
                  o = t4(this),
                  a = this.values_.get(e),
                  s = void 0;
                if (
                  (!a &&
                    o &&
                    (s = null == (i = O(this.target_, e)) ? void 0 : i.value),
                  t)
                ) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (a &&
                    (this.values_.delete(e),
                    a instanceof eJ && (s = a.value_),
                    th(a)),
                  this.keysAtom_.reportChanged(),
                  null == (n = this.pendingKeys_) ||
                    null == (r = n.get(e)) ||
                    r.set(e in this.target_),
                  o)
                ) {
                  var u = {
                    type: nO,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: s,
                    name: e,
                  };
                  o && ne(this, u);
                }
              } finally {
                tc();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return t9(this, e);
            }),
            (t.intercept_ = function (e) {
              return t5(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r,
                i = t4(this);
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
                i && ne(this, o);
              }
              null == (n = this.pendingKeys_) ||
                null == (r = n.get(e)) ||
                r.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), G(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function nw(e, t) {
        if (W(e, er)) return e;
        var n,
          r,
          i =
            null != (r = null == t ? void 0 : t.name) ? r : "ObservableObject",
          o = new nA(
            e,
            new Map(),
            String(i),
            t ? (null != (n = t.defaultDecorator) ? n : ej(t)) : void 0,
          );
        return L(e, er, o), e;
      }
      var nS = I("ObservableObjectAdministration", nA);
      function nj(e) {
        return (
          nm[e] ||
          (nm[e] = {
            get: function () {
              return this[er].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[er].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function nx(e) {
        return !!C(e) && nS(e[er]);
      }
      function nE(e, t, n) {
        var r;
        null == (r = e.target_[ee]) || delete r[n];
      }
      var nk = nV(0),
        nP = 0,
        nN = function () {};
      (s = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(nN.prototype, s)
          : void 0 !== nN.prototype.__proto__
            ? (nN.prototype.__proto__ = s)
            : (nN.prototype = s);
      var nT = (function (e, t, n) {
        function r(t, n, r, i) {
          void 0 === r && (r = "ObservableArray"),
            void 0 === i && (i = !1),
            (o = e.call(this) || this);
          var o,
            a = new no(r, n, i, !0);
          if (((a.proxy_ = $(o)), B($(o), er, a), t && t.length)) {
            var s = eX(!0);
            o.spliceWithArray(0, 0, t), eY(s);
          }
          return Object.defineProperty($(o), "0", nk), o;
        }
        Y(r, e);
        var i = r.prototype;
        return (
          (i.concat = function () {
            this[er].atom_.reportObserved();
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return nf(e) ? e.slice() : e;
              }),
            );
          }),
          (i[n] = function () {
            var e = this,
              t = 0;
            return nU({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          F(r, [
            {
              key: "length",
              get: function () {
                return this[er].getArrayLength_();
              },
              set: function (e) {
                this[er].setArrayLength_(e);
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
      })(nN, Symbol.toStringTag, Symbol.iterator);
      function nV(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[er].get_(e);
          },
          set: function (t) {
            this[er].set_(e, t);
          },
        };
      }
      function nC(e) {
        if (e > nP) {
          for (var t, n = nP; n < e + 100; n++)
            (t = n), A(nT.prototype, "" + t, nV(t));
          nP = e;
        }
      }
      function nR(e, t) {
        if ("object" == typeof e && null !== e) {
          if (nf(e)) return void 0 !== t && r(23), e[er].atom_;
          if (ny(e)) return e.atom_;
          if (np(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || r(25, t, nL(e)), n;
          }
          if (nx(e)) {
            if (!t) return r(26);
            var i = e[er].values_.get(t);
            return i || r(27, t, nL(e)), i;
          }
          if (eo(e) || eZ(e) || tp(e)) return e;
        } else if (T(e) && tp(e[er])) return e[er];
        r(28);
      }
      function nD(e, t) {
        return (e || r(29), void 0 !== t)
          ? nD(nR(e, t))
          : eo(e) || eZ(e) || tp(e) || np(e) || ny(e)
            ? e
            : e[er]
              ? e[er]
              : void r(24, e);
      }
      function nL(e, t) {
        var n;
        if (void 0 !== t) n = nR(e, t);
        else {
          if (tk(e)) return e.name;
          n = nx(e) || np(e) || ny(e) ? nD(e) : nR(e);
        }
        return n.name_;
      }
      Object.entries(na).forEach(function (e) {
        var t = e[0],
          n = e[1];
        "concat" !== t && L(nT.prototype, t, n);
      }),
        nC(1e3);
      var nB = w.toString;
      function nI(e, t, n) {
        return (
          void 0 === n && (n = -1),
          (function e(t, n, r, i, o) {
            if (t === n) return 0 !== t || 1 / t == 1 / n;
            if (null == t || null == n) return !1;
            if (t != t) return n != n;
            var a = typeof t;
            if ("function" !== a && "object" !== a && "object" != typeof n)
              return !1;
            var s = nB.call(t);
            if (s !== nB.call(n)) return !1;
            switch (s) {
              case "[object RegExp]":
              case "[object String]":
                return "" + t == "" + n;
              case "[object Number]":
                if (+t != +t) return +n != +n;
                return 0 == +t ? 1 / +t == 1 / n : +t == +n;
              case "[object Date]":
              case "[object Boolean]":
                return +t == +n;
              case "[object Symbol]":
                return (
                  "undefined" != typeof Symbol &&
                  Symbol.valueOf.call(t) === Symbol.valueOf.call(n)
                );
              case "[object Map]":
              case "[object Set]":
                r >= 0 && r++;
            }
            (t = nM(t)), (n = nM(n));
            var u = "[object Array]" === s;
            if (!u) {
              if ("object" != typeof t || "object" != typeof n) return !1;
              var c = t.constructor,
                l = n.constructor;
              if (
                c !== l &&
                !(T(c) && c instanceof c && T(l) && l instanceof l) &&
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
              for (; h--; ) if (!e(t[h], n[h], r - 1, i, o)) return !1;
            } else {
              var f,
                _ = Object.keys(t);
              if (((h = _.length), Object.keys(n).length !== h)) return !1;
              for (; h--; )
                if (!(W(n, (f = _[h])) && e(t[f], n[f], r - 1, i, o)))
                  return !1;
            }
            return i.pop(), o.pop(), !0;
          })(e, t, n)
        );
      }
      function nM(e) {
        return nf(e)
          ? e.slice()
          : M(e) || np(e) || U(e) || ny(e)
            ? Array.from(e.entries())
            : e;
      }
      function nU(e) {
        return (e[Symbol.iterator] = nK), e;
      }
      function nK() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (e) {
        void 0 === y()[e] &&
          r("MobX requires global '" + e + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
              return (
                console.warn("[mobx.spy] Is a no-op in production builds"),
                function () {}
              );
            },
            extras: { getDebugName: nL },
            $mobx: er,
          });
    },
  },
]);
