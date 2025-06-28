"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7138],
  {
    22874: function (e, t, r) {
      r.d(t, {
        V5: function () {
          return tC;
        },
        Xx: function () {
          return A;
        },
        d9: function () {
          return C;
        },
        dU: function () {
          return x;
        },
        fh: function () {
          return D;
        },
        ls: function () {
          return eF;
        },
        ob: function () {
          return V;
        },
        og: function () {
          return N;
        },
        pj: function () {
          return k;
        },
        vM: function () {
          return T;
        },
        yj: function () {
          return E;
        },
      });
      var n,
        i,
        a,
        o,
        u,
        l,
        c,
        s,
        p,
        f,
        b,
        h,
        d,
        y,
        v = r(37285),
        g = r(21535);
      ((n = c || (c = {})).afterCreate = "afterCreate"),
        (n.afterAttach = "afterAttach"),
        (n.afterCreationFinalization = "afterCreationFinalization"),
        (n.beforeDetach = "beforeDetach"),
        (n.beforeDestroy = "beforeDestroy");
      var m = function (e, t) {
        return (m =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function w(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " +
              String(t) +
              " is not a constructor or null",
          );
        function r() {
          this.constructor = e;
        }
        m(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var P = function () {
        return (P =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function O(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function j(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          a = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
            o.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function _(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, a = t.length; i < a; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function S(e) {
        return ep(e).type;
      }
      function I(e, t) {
        ep(e).applyPatches(ej(t));
      }
      function A(e, t) {
        return ep(e).applySnapshot(t);
      }
      function T(e, t) {
        void 0 === t && (t = !0);
        var r = ep(e);
        return t
          ? r.snapshot
          : (function (e) {
              return e;
            })(r.type.getSnapshot(r, !1));
      }
      function E(e) {
        return ep(e).root.storedValue;
      }
      function C(e, t) {
        void 0 === t && (t = !0);
        var r = ep(e);
        return r.type.create(
          r.snapshot,
          !0 === t ? r.root.environment : !1 === t ? void 0 : t,
        );
      }
      function N(e) {
        return ep(e).detach(), e;
      }
      function V(e) {
        var t = ep(e);
        t.isRoot ? t.die() : t.parent.removeChild(t.subpath);
      }
      function D(e) {
        return ep(e).observableIsAlive;
      }
      function x(e) {
        var t = ep(e),
          r = t.root.environment;
        if (!r)
          throw new em(
            "Failed to find the environment of ".concat(t, " ").concat(t.path),
          );
        return r;
      }
      function k(e) {
        return e;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var z = (function () {
          function e(e, t, r, n) {
            Object.defineProperty(this, "type", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            }),
              Object.defineProperty(this, "environment", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              }),
              Object.defineProperty(this, "_escapedSubpath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_subpath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_subpathUponDeath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_pathUponDeath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "storedValue", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "aliveAtom", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d.INITIALIZING,
              }),
              Object.defineProperty(this, "_hookSubscribers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_parent", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "pathAtom", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.environment = n),
              this.baseSetParent(t, r);
          }
          return (
            Object.defineProperty(e.prototype, "subpath", {
              get: function () {
                return this._subpath;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "subpathUponDeath", {
              get: function () {
                return this._subpathUponDeath;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "pathUponDeath", {
              get: function () {
                return this._pathUponDeath;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.type.getValue(this);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "state", {
              get: function () {
                return this._state;
              },
              set: function (e) {
                var t = this.isAlive;
                this._state = e;
                var r = this.isAlive;
                this.aliveAtom && t !== r && this.aliveAtom.reportChanged();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "fireInternalHook", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this._hookSubscribers && this._hookSubscribers.emit(e, this, e);
              },
            }),
            Object.defineProperty(e.prototype, "registerHook", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return (
                  this._hookSubscribers || (this._hookSubscribers = new eV()),
                  this._hookSubscribers.register(e, t)
                );
              },
            }),
            Object.defineProperty(e.prototype, "parent", {
              get: function () {
                return this._parent;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "getReconciliationType", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.type;
              },
            }),
            Object.defineProperty(e.prototype, "baseSetParent", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                (this._parent = e),
                  (this._subpath = t),
                  (this._escapedSubpath = void 0),
                  this.pathAtom && this.pathAtom.reportChanged();
              },
            }),
            Object.defineProperty(e.prototype, "path", {
              get: function () {
                return this.getEscapedPath(!0);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "getEscapedPath", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return (e &&
                  (this.pathAtom || (this.pathAtom = (0, v.cp)("path")),
                  this.pathAtom.reportObserved()),
                this.parent)
                  ? (void 0 === this._escapedSubpath &&
                      (this._escapedSubpath = this._subpath
                        ? eL(this._subpath)
                        : ""),
                    this.parent.getEscapedPath(e) + "/" + this._escapedSubpath)
                  : "";
              },
            }),
            Object.defineProperty(e.prototype, "isRoot", {
              get: function () {
                return null === this.parent;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isAlive", {
              get: function () {
                return this.state !== d.DEAD;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isDetaching", {
              get: function () {
                return this.state === d.DETACHING;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "observableIsAlive", {
              get: function () {
                return (
                  this.aliveAtom || (this.aliveAtom = (0, v.cp)("alive")),
                  this.aliveAtom.reportObserved(),
                  this.isAlive
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "baseFinalizeCreation", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (this.state === d.CREATED) {
                  if (this.parent) {
                    if (this.parent.state !== d.FINALIZED) return;
                    this.fireHook(c.afterAttach);
                  }
                  (this.state = d.FINALIZED), e && e();
                }
              },
            }),
            Object.defineProperty(e.prototype, "baseFinalizeDeath", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this._hookSubscribers && this._hookSubscribers.clearAll(),
                  (this._subpathUponDeath = this._subpath),
                  (this._pathUponDeath = this.getEscapedPath(!1)),
                  this.baseSetParent(null, ""),
                  (this.state = d.DEAD);
              },
            }),
            Object.defineProperty(e.prototype, "baseAboutToDie", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.fireHook(c.beforeDestroy);
              },
            }),
            e
          );
        })(),
        R = (function (e) {
          function t(t, r, n, i, a) {
            var o = e.call(this, t, r, n, i) || this;
            try {
              o.storedValue = t.createNewInstance(a);
            } catch (e) {
              throw ((o.state = d.DEAD), e);
            }
            return (o.state = d.CREATED), o.finalizeCreation(), o;
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "root", {
              get: function () {
                if (!this.parent)
                  throw new em("This scalar node is not part of a tree");
                return this.parent.root;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "setParent", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this.parent !== e,
                  n = this.subpath !== t;
                (r || n) &&
                  ((this.environment = void 0),
                  this.baseSetParent(this.parent, t));
              },
            }),
            Object.defineProperty(t.prototype, "snapshot", {
              get: function () {
                return (function (e) {
                  return e;
                })(this.getSnapshot());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.type.getSnapshot(this);
              },
            }),
            Object.defineProperty(t.prototype, "toString", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e =
                  (this.isAlive ? this.path : this.pathUponDeath) || "<root>";
                return ""
                  .concat(this.type.name, "@")
                  .concat(e)
                  .concat(this.isAlive ? "" : " [dead]");
              },
            }),
            Object.defineProperty(t.prototype, "die", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.isAlive &&
                  this.state !== d.DETACHING &&
                  (this.aboutToDie(), this.finalizeDeath());
              },
            }),
            Object.defineProperty(t.prototype, "finalizeCreation", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.baseFinalizeCreation();
              },
            }),
            Object.defineProperty(t.prototype, "aboutToDie", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.baseAboutToDie();
              },
            }),
            Object.defineProperty(t.prototype, "finalizeDeath", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.baseFinalizeDeath();
              },
            }),
            Object.defineProperty(t.prototype, "fireHook", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.fireInternalHook(e);
              },
            }),
            t
          );
        })(z);
      R.prototype.die = (0, v.aD)(R.prototype.die);
      var F = 1;
      ((i = s || (s = {}))[(i.UNINITIALIZED = 0)] = "UNINITIALIZED"),
        (i[(i.CREATING = 1)] = "CREATING"),
        (i[(i.CREATED = 2)] = "CREATED"),
        ((a = p || (p = {})).Dispose = "dispose"),
        (a.Patch = "patch"),
        (a.Snapshot = "snapshot");
      var L = {
          onError: function (e) {
            throw e;
          },
        },
        H = (function (e) {
          function t(t, r, n, i, a) {
            var o = e.call(this, t, r, n, i) || this;
            if (
              (Object.defineProperty(o, "nodeId", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: ++F,
              }),
              Object.defineProperty(o, "identifierAttribute", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "identifier", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "unnormalizedIdentifier", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "identifierCache", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "isProtectionEnabled", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(o, "middlewares", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "hasSnapshotPostProcessor", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(o, "_applyPatches", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "_applySnapshot", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "_autoUnbox", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(o, "_isRunningAction", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(o, "_hasSnapshotReaction", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(o, "_observableInstanceState", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s.UNINITIALIZED,
              }),
              Object.defineProperty(o, "_childNodes", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "_initialSnapshot", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "_cachedInitialSnapshot", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "_cachedInitialSnapshotCreated", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(o, "_snapshotComputed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "_snapshotUponDeath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(o, "_internalEvents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (o._snapshotComputed = (0, v.Fl)(function () {
                return (function (e) {
                  return e;
                })(o.getSnapshot());
              })),
              (o.unbox = o.unbox.bind(o)),
              (o._initialSnapshot = (function (e) {
                return e;
              })(a)),
              (o.identifierAttribute = t.identifierAttribute),
              r || (o.identifierCache = new eo()),
              (o._childNodes = t.initializeChildNodes(o, o._initialSnapshot)),
              (o.identifier = null),
              (o.unnormalizedIdentifier = null),
              o.identifierAttribute && o._initialSnapshot)
            ) {
              var u = o._initialSnapshot[o.identifierAttribute];
              if (void 0 === u) {
                var l = o._childNodes[o.identifierAttribute];
                l && (u = l.value);
              }
              if ("string" != typeof u && "number" != typeof u)
                throw new em(
                  "Instance identifier '"
                    .concat(o.identifierAttribute, "' for type '")
                    .concat(o.type.name, "' must be a string or a number"),
                );
              (o.identifier = "" + u), (o.unnormalizedIdentifier = u);
            }
            return (
              r
                ? r.root.identifierCache.addNodeToCache(o)
                : o.identifierCache.addNodeToCache(o),
              o
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "applyPatches", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.createObservableInstanceIfNeeded(), this._applyPatches(e);
              },
            }),
            Object.defineProperty(t.prototype, "applySnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.createObservableInstanceIfNeeded(), this._applySnapshot(e);
              },
            }),
            Object.defineProperty(
              t.prototype,
              "createObservableInstanceIfNeeded",
              {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  void 0 === e && (e = !0),
                    this._observableInstanceState === s.UNINITIALIZED &&
                      this.createObservableInstance(e);
                },
              },
            ),
            Object.defineProperty(t.prototype, "createObservableInstance", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                void 0 === e && (e = !0),
                  (this._observableInstanceState = s.CREATING);
                for (
                  var t, r, n, i, a = [], o = this.parent;
                  o && o._observableInstanceState === s.UNINITIALIZED;

                )
                  a.unshift(o), (o = o.parent);
                try {
                  for (var u = O(a), l = u.next(); !l.done; l = u.next()) {
                    var p = l.value;
                    p.createObservableInstanceIfNeeded(!1);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    l && !l.done && (r = u.return) && r.call(u);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                var f = this.type;
                try {
                  (this.storedValue = f.createNewInstance(this._childNodes)),
                    this.preboot(),
                    (this._isRunningAction = !0),
                    f.finalizeNewInstance(this, this.storedValue);
                } catch (e) {
                  throw ((this.state = d.DEAD), e);
                } finally {
                  this._isRunningAction = !1;
                }
                if (
                  ((this._observableInstanceState = s.CREATED),
                  this._snapshotComputed.trackAndCompute(),
                  this.isRoot && this._addSnapshotReaction(),
                  (this._childNodes = ev),
                  (this.state = d.CREATED),
                  e)
                ) {
                  this.fireHook(c.afterCreate), this.finalizeCreation();
                  try {
                    for (
                      var b = O(a.reverse()), h = b.next();
                      !h.done;
                      h = b.next()
                    ) {
                      var p = h.value;
                      p.fireHook(c.afterCreate), p.finalizeCreation();
                    }
                  } catch (e) {
                    n = { error: e };
                  } finally {
                    try {
                      h && !h.done && (i = b.return) && i.call(b);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }
              },
            }),
            Object.defineProperty(t.prototype, "root", {
              get: function () {
                var e = this.parent;
                return e ? e.root : this;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "clearParent", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (this.parent) {
                  this.fireHook(c.beforeDetach);
                  var e = this.state;
                  this.state = d.DETACHING;
                  var t = this.root,
                    r = t.environment,
                    n = t.identifierCache.splitCache(this);
                  try {
                    this.parent.removeChild(this.subpath),
                      this.baseSetParent(null, ""),
                      (this.environment = r),
                      (this.identifierCache = n);
                  } finally {
                    this.state = e;
                  }
                }
              },
            }),
            Object.defineProperty(t.prototype, "setParent", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = e !== this.parent,
                  n = t !== this.subpath;
                (r || n) &&
                  (r
                    ? ((this.environment = void 0),
                      e.root.identifierCache.mergeCache(this),
                      this.baseSetParent(e, t),
                      this.fireHook(c.afterAttach))
                    : n && this.baseSetParent(this.parent, t));
              },
            }),
            Object.defineProperty(t.prototype, "fireHook", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                this.fireInternalHook(e);
                var r =
                  this.storedValue &&
                  "object" == typeof this.storedValue &&
                  this.storedValue[e];
                "function" == typeof r &&
                  (v.vB
                    ? (0, v.vB)(function () {
                        r.apply(t.storedValue);
                      })
                    : r.apply(this.storedValue));
              },
            }),
            Object.defineProperty(t.prototype, "snapshot", {
              get: function () {
                return (
                  this.hasSnapshotPostProcessor &&
                    this.createObservableInstanceIfNeeded(),
                  this._snapshotComputed.get()
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.isAlive
                  ? this._observableInstanceState === s.CREATED
                    ? this._getActualSnapshot()
                    : this._getCachedInitialSnapshot()
                  : this._snapshotUponDeath;
              },
            }),
            Object.defineProperty(t.prototype, "_getActualSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.type.getSnapshot(this);
              },
            }),
            Object.defineProperty(t.prototype, "_getCachedInitialSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (!this._cachedInitialSnapshotCreated) {
                  var e = this.type,
                    t = this._childNodes,
                    r = this._initialSnapshot;
                  (this._cachedInitialSnapshot = e.processInitialSnapshot(
                    t,
                    r,
                  )),
                    (this._cachedInitialSnapshotCreated = !0);
                }
                return this._cachedInitialSnapshot;
              },
            }),
            Object.defineProperty(t.prototype, "isRunningAction", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return (
                  !!this._isRunningAction ||
                  (!this.isRoot && this.parent.isRunningAction())
                );
              },
            }),
            Object.defineProperty(t.prototype, "assertAlive", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                !this.isAlive &&
                  (function (e) {
                    console.warn(Error("[mobx-state-tree] ".concat(e)));
                  })(this._getAssertAliveError(e));
              },
            }),
            Object.defineProperty(t.prototype, "_getAssertAliveError", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this.getEscapedPath(!1) || this.pathUponDeath || "",
                  r = (e.subpath && eL(e.subpath)) || "",
                  n = e.actionContext || h;
                n &&
                  "action" !== n.type &&
                  n.parentActionEvent &&
                  (n = n.parentActionEvent);
                var i = "";
                if (n && null != n.name) {
                  var a = (n && n.context && ep(n.context).path) || t;
                  i = "".concat(a, ".").concat(n.name, "()");
                }
                return "You are trying to read or write to an object that is no longer part of a state tree. (Object type: '"
                  .concat(this.type.name, "', Path upon death: '")
                  .concat(t, "', Subpath: '")
                  .concat(r, "', Action: '")
                  .concat(
                    i,
                    "'). Either detach nodes first, or don't use objects after removing / replacing them in the tree.",
                  );
              },
            }),
            Object.defineProperty(t.prototype, "getChildNode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.assertAlive({ subpath: e }), (this._autoUnbox = !1);
                try {
                  return this._observableInstanceState === s.CREATED
                    ? this.type.getChildNode(this, e)
                    : this._childNodes[e];
                } finally {
                  this._autoUnbox = !0;
                }
              },
            }),
            Object.defineProperty(t.prototype, "getChildren", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.assertAlive(ev), (this._autoUnbox = !1);
                try {
                  return this._observableInstanceState === s.CREATED
                    ? this.type.getChildren(this)
                    : eh(this._childNodes);
                } finally {
                  this._autoUnbox = !0;
                }
              },
            }),
            Object.defineProperty(t.prototype, "getChildType", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this.type.getChildType(e);
              },
            }),
            Object.defineProperty(t.prototype, "isProtected", {
              get: function () {
                return this.root.isProtectionEnabled;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "assertWritable", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (
                  (this.assertAlive(e),
                  !this.isRunningAction() && this.isProtected)
                )
                  throw new em(
                    "Cannot modify '".concat(
                      this,
                      "', the object is protected and can only be modified by using an action.",
                    ),
                  );
              },
            }),
            Object.defineProperty(t.prototype, "removeChild", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.type.removeChild(this, e);
              },
            }),
            Object.defineProperty(t.prototype, "unbox", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return e
                  ? (this.assertAlive({
                      subpath: e.subpath || e.subpathUponDeath,
                    }),
                    this._autoUnbox ? e.value : e)
                  : e;
              },
            }),
            Object.defineProperty(t.prototype, "toString", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e =
                    (this.isAlive ? this.path : this.pathUponDeath) || "<root>",
                  t = this.identifier
                    ? "(id: ".concat(this.identifier, ")")
                    : "";
                return ""
                  .concat(this.type.name, "@")
                  .concat(e)
                  .concat(t)
                  .concat(this.isAlive ? "" : " [dead]");
              },
            }),
            Object.defineProperty(t.prototype, "finalizeCreation", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this;
                this.baseFinalizeCreation(function () {
                  var t, r;
                  try {
                    for (
                      var n = O(e.getChildren()), i = n.next();
                      !i.done;
                      i = n.next()
                    )
                      i.value.finalizeCreation();
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      i && !i.done && (r = n.return) && r.call(n);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  e.fireInternalHook(c.afterCreationFinalization);
                });
              },
            }),
            Object.defineProperty(t.prototype, "detach", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (!this.isAlive)
                  throw new em("Error while detaching, node is not alive.");
                this.clearParent();
              },
            }),
            Object.defineProperty(t.prototype, "preboot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this;
                (this._applyPatches = q(
                  this.storedValue,
                  "@APPLY_PATCHES",
                  function (t) {
                    t.forEach(function (t) {
                      if (!t.path) {
                        e.type.applySnapshot(e, t.value);
                        return;
                      }
                      var r = (function (e) {
                        var t = e.split("/").map(eH);
                        if (
                          !(
                            "" === e ||
                            "." === e ||
                            ".." === e ||
                            ex(e, "/") ||
                            ex(e, "./") ||
                            ex(e, "../")
                          )
                        )
                          throw new em(
                            "a json path must be either rooted, empty or relative, but got '".concat(
                              e,
                              "'",
                            ),
                          );
                        return "" === t[0] && t.shift(), t;
                      })(t.path);
                      (function (e, t, r) {
                        void 0 === r && (r = !0);
                        var n = e;
                        try {
                          for (var i = 0; i < t.length; i++) {
                            var a = t[i];
                            if (".." === a) {
                              if ((n = n.parent)) continue;
                            } else if ("." === a) continue;
                            else if (n) {
                              if (n instanceof R) {
                                var o = n.value;
                                ec(o) && (n = ep(o));
                              }
                              if (
                                n instanceof H &&
                                n.getChildType(a) &&
                                (n = n.getChildNode(a))
                              )
                                continue;
                            }
                            throw new em(
                              "Could not resolve '"
                                .concat(a, "' in path '")
                                .concat(
                                  eM(t.slice(0, i)) || "/",
                                  "' while resolving '",
                                )
                                .concat(eM(t), "'"),
                            );
                          }
                        } catch (e) {
                          if (!r) return;
                          throw e;
                        }
                        return n;
                      })(e, r.slice(0, -1)).applyPatchLocally(
                        r[r.length - 1],
                        t,
                      );
                    });
                  },
                )),
                  (this._applySnapshot = q(
                    this.storedValue,
                    "@APPLY_SNAPSHOT",
                    function (t) {
                      if (t !== e.snapshot) return e.type.applySnapshot(e, t);
                    },
                  )),
                  eC(this.storedValue, "$treenode", this),
                  eC(this.storedValue, "toJSON", eb);
              },
            }),
            Object.defineProperty(t.prototype, "die", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.isAlive &&
                  this.state !== d.DETACHING &&
                  (this.aboutToDie(), this.finalizeDeath());
              },
            }),
            Object.defineProperty(t.prototype, "aboutToDie", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this._observableInstanceState !== s.UNINITIALIZED &&
                  (this.getChildren().forEach(function (e) {
                    e.aboutToDie();
                  }),
                  this.baseAboutToDie(),
                  this._internalEventsEmit(p.Dispose),
                  this._internalEventsClear(p.Dispose));
              },
            }),
            Object.defineProperty(t.prototype, "finalizeDeath", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.getChildren().forEach(function (e) {
                  e.finalizeDeath();
                }),
                  this.root.identifierCache.notifyDied(this);
                var e = this.snapshot;
                (this._snapshotUponDeath = e),
                  this._internalEventsClearAll(),
                  this.baseFinalizeDeath();
              },
            }),
            Object.defineProperty(t.prototype, "onSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return (
                  this._addSnapshotReaction(),
                  this._internalEventsRegister(p.Snapshot, e)
                );
              },
            }),
            Object.defineProperty(t.prototype, "emitSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this._internalEventsEmit(p.Snapshot, e);
              },
            }),
            Object.defineProperty(t.prototype, "onPatch", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this._internalEventsRegister(p.Patch, e);
              },
            }),
            Object.defineProperty(t.prototype, "emitPatch", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (this._internalEventsHasSubscribers(p.Patch)) {
                  var r =
                      t.path.substr(this.path.length) +
                      (e.path ? "/" + e.path : ""),
                    n = j(
                      (function (e) {
                        if (!("oldValue" in e))
                          throw new em(
                            "Patches without `oldValue` field cannot be inversed",
                          );
                        return [
                          (function (e) {
                            switch (e.op) {
                              case "add":
                                return {
                                  op: "add",
                                  path: e.path,
                                  value: e.value,
                                };
                              case "remove":
                                return { op: "remove", path: e.path };
                              case "replace":
                                return {
                                  op: "replace",
                                  path: e.path,
                                  value: e.value,
                                };
                            }
                          })(e),
                          (function (e) {
                            switch (e.op) {
                              case "add":
                                return { op: "remove", path: e.path };
                              case "remove":
                                return {
                                  op: "add",
                                  path: e.path,
                                  value: e.oldValue,
                                };
                              case "replace":
                                return {
                                  op: "replace",
                                  path: e.path,
                                  value: e.oldValue,
                                };
                            }
                          })(e),
                        ];
                      })(
                        (function (e) {
                          for (var t = [], r = 1; r < arguments.length; r++)
                            t[r - 1] = arguments[r];
                          for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            for (var a in i) e[a] = i[a];
                          }
                          return e;
                        })({}, e, { path: r }),
                      ),
                      2,
                    ),
                    i = n[0],
                    a = n[1];
                  this._internalEventsEmit(p.Patch, i, a);
                }
                this.parent && this.parent.emitPatch(e, t);
              },
            }),
            Object.defineProperty(t.prototype, "hasDisposer", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this._internalEventsHas(p.Dispose, e);
              },
            }),
            Object.defineProperty(t.prototype, "addDisposer", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (!this.hasDisposer(e)) {
                  this._internalEventsRegister(p.Dispose, e, !0);
                  return;
                }
                throw new em(
                  "cannot add a disposer when it is already registered for execution",
                );
              },
            }),
            Object.defineProperty(t.prototype, "removeDisposer", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (!this._internalEventsHas(p.Dispose, e))
                  throw new em(
                    "cannot remove a disposer which was never registered for execution",
                  );
                this._internalEventsUnregister(p.Dispose, e);
              },
            }),
            Object.defineProperty(t.prototype, "removeMiddleware", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (this.middlewares) {
                  var t = this.middlewares.indexOf(e);
                  t >= 0 && this.middlewares.splice(t, 1);
                }
              },
            }),
            Object.defineProperty(t.prototype, "addMiddleWare", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this;
                void 0 === t && (t = !0);
                var n = { handler: e, includeHooks: t };
                return (
                  this.middlewares
                    ? this.middlewares.push(n)
                    : (this.middlewares = [n]),
                  function () {
                    r.removeMiddleware(n);
                  }
                );
              },
            }),
            Object.defineProperty(t.prototype, "applyPatchLocally", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.assertWritable({ subpath: e }),
                  this.createObservableInstanceIfNeeded(),
                  this.type.applyPatchLocally(this, e, t);
              },
            }),
            Object.defineProperty(t.prototype, "_addSnapshotReaction", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this;
                if (!this._hasSnapshotReaction) {
                  var t = (0, v.U5)(
                    function () {
                      return e.snapshot;
                    },
                    function (t) {
                      return e.emitSnapshot(t);
                    },
                    L,
                  );
                  this.addDisposer(t), (this._hasSnapshotReaction = !0);
                }
              },
            }),
            Object.defineProperty(
              t.prototype,
              "_internalEventsHasSubscribers",
              {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  return (
                    !!this._internalEvents &&
                    this._internalEvents.hasSubscribers(e)
                  );
                },
              },
            ),
            Object.defineProperty(t.prototype, "_internalEventsRegister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r) {
                return (
                  void 0 === r && (r = !1),
                  this._internalEvents || (this._internalEvents = new eV()),
                  this._internalEvents.register(e, t, r)
                );
              },
            }),
            Object.defineProperty(t.prototype, "_internalEventsHas", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return !!this._internalEvents && this._internalEvents.has(e, t);
              },
            }),
            Object.defineProperty(t.prototype, "_internalEventsUnregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this._internalEvents && this._internalEvents.unregister(e, t);
              },
            }),
            Object.defineProperty(t.prototype, "_internalEventsEmit", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                for (var t, r = [], n = 1; n < arguments.length; n++)
                  r[n - 1] = arguments[n];
                this._internalEvents &&
                  (t = this._internalEvents).emit.apply(t, _([e], j(r), !1));
              },
            }),
            Object.defineProperty(t.prototype, "_internalEventsClear", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this._internalEvents && this._internalEvents.clear(e);
              },
            }),
            Object.defineProperty(t.prototype, "_internalEventsClearAll", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this._internalEvents && this._internalEvents.clearAll();
              },
            }),
            t
          );
        })(z);
      (H.prototype.createObservableInstance = (0, v.aD)(
        H.prototype.createObservableInstance,
      )),
        (H.prototype.detach = (0, v.aD)(H.prototype.detach)),
        (H.prototype.die = (0, v.aD)(H.prototype.die)),
        ((o = b || (b = {}))[(o.String = 1)] = "String"),
        (o[(o.Number = 2)] = "Number"),
        (o[(o.Boolean = 4)] = "Boolean"),
        (o[(o.Date = 8)] = "Date"),
        (o[(o.Literal = 16)] = "Literal"),
        (o[(o.Array = 32)] = "Array"),
        (o[(o.Map = 64)] = "Map"),
        (o[(o.Object = 128)] = "Object"),
        (o[(o.Frozen = 256)] = "Frozen"),
        (o[(o.Optional = 512)] = "Optional"),
        (o[(o.Reference = 1024)] = "Reference"),
        (o[(o.Identifier = 2048)] = "Identifier"),
        (o[(o.Late = 4096)] = "Late"),
        (o[(o.Refinement = 8192)] = "Refinement"),
        (o[(o.Union = 16384)] = "Union"),
        (o[(o.Null = 32768)] = "Null"),
        (o[(o.Undefined = 65536)] = "Undefined"),
        (o[(o.Integer = 131072)] = "Integer"),
        (o[(o.Custom = 262144)] = "Custom"),
        (o[(o.SnapshotProcessor = 524288)] = "SnapshotProcessor"),
        (o[(o.Lazy = 1048576)] = "Lazy"),
        (o[(o.Finite = 2097152)] = "Finite"),
        (o[(o.Float = 4194304)] = "Float");
      var M = "cannotDetermine",
        U = Symbol("$type"),
        W = (function () {
          function e(e) {
            Object.defineProperty(this, f, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "C", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "S", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "T", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "N", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "isType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.name = e);
          }
          return (
            Object.defineProperty(e.prototype, "create", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return ei(this, e), this.instantiate(null, "", t, e).value;
              },
            }),
            Object.defineProperty(e.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                throw new em("unimplemented method");
              },
            }),
            Object.defineProperty(e.prototype, "isAssignableFrom", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return e === this;
              },
            }),
            Object.defineProperty(e.prototype, "validate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (ef(e)) {
                  var r,
                    n = ep((r = e)).type;
                  return this.isAssignableFrom(n) ? ey : er(t, e);
                }
                return this.isValidSnapshot(e, t);
              },
            }),
            Object.defineProperty(e.prototype, "is", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return (
                  0 === this.validate(e, [{ path: "", type: this }]).length
                );
              },
            }),
            Object.defineProperty(e.prototype, "Type", {
              get: function () {
                throw new em(
                  "Factory.Type should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.Type`",
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "TypeWithoutSTN", {
              get: function () {
                throw new em(
                  "Factory.TypeWithoutSTN should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.TypeWithoutSTN`",
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "SnapshotType", {
              get: function () {
                throw new em(
                  "Factory.SnapshotType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.SnapshotType`",
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "CreationType", {
              get: function () {
                throw new em(
                  "Factory.CreationType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.CreationType`",
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      (f = U), (W.prototype.create = (0, v.aD)(W.prototype.create));
      var Z = (function (e) {
        function t(t) {
          var r = e.call(this, t) || this;
          return (
            Object.defineProperty(r, "identifierAttribute", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            r
          );
        }
        return (
          w(t, e),
          Object.defineProperty(t.prototype, "create", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (t, r) {
              return (
                void 0 === t && (t = this.getDefaultSnapshot()),
                e.prototype.create.call(this, t, r)
              );
            },
          }),
          Object.defineProperty(t.prototype, "getValue", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return e.createObservableInstanceIfNeeded(), e.storedValue;
            },
          }),
          Object.defineProperty(t.prototype, "isMatchingSnapshotId", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return (
                !e.identifierAttribute ||
                e.identifier === "" + t[e.identifierAttribute]
              );
            },
          }),
          Object.defineProperty(t.prototype, "tryToReconcileNode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return (
                !e.isDetaching &&
                (!!(e.snapshot === t || (ec(t) && ep(t) === e)) ||
                  (!!(
                    e.type === this &&
                    eS(t) &&
                    !ec(t) &&
                    this.isMatchingSnapshotId(e, t)
                  ) &&
                    (e.applySnapshot(t), !0)))
              );
            },
          }),
          Object.defineProperty(t.prototype, "reconcile", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, r, n) {
              if (this.tryToReconcileNode(e, t)) return e.setParent(r, n), e;
              if ((e.die(), ec(t) && this.isAssignableFrom(ep((i = t)).type))) {
                var i,
                  a = ep(t);
                return a.setParent(r, n), a;
              }
              return this.instantiate(r, n, void 0, t);
            },
          }),
          Object.defineProperty(t.prototype, "getSubTypes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return null;
            },
          }),
          t
        );
      })(W);
      Z.prototype.create = (0, v.aD)(Z.prototype.create);
      var $ = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          w(t, e),
          Object.defineProperty(t.prototype, "createNewInstance", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return e;
            },
          }),
          Object.defineProperty(t.prototype, "getValue", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return e.storedValue;
            },
          }),
          Object.defineProperty(t.prototype, "getSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return e.storedValue;
            },
          }),
          Object.defineProperty(t.prototype, "reconcile", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, r, n) {
              if (!e.isDetaching && e.type === this && e.storedValue === t)
                return e;
              var i = this.instantiate(r, n, void 0, t);
              return e.die(), i;
            },
          }),
          Object.defineProperty(t.prototype, "getSubTypes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return null;
            },
          }),
          t
        );
      })(W);
      function G(e) {
        return "object" == typeof e && e && !0 === e.isType;
      }
      function Y(e, t) {}
      !(function () {
        function e(e, t) {
          Object.defineProperty(this, "hooks", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "call", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            }),
            Object.defineProperty(this, "flowsPending", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "running", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            e && e.onStart(t);
        }
        Object.defineProperty(e.prototype, "finish", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (e) {
            this.running &&
              ((this.running = !1),
              this.hooks && this.hooks.onFinish(this.call, e));
          },
        }),
          Object.defineProperty(e.prototype, "incFlowsPending", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              this.flowsPending++;
            },
          }),
          Object.defineProperty(e.prototype, "decFlowsPending", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              this.flowsPending--;
            },
          }),
          Object.defineProperty(e.prototype, "hasFlowsPending", {
            get: function () {
              return this.flowsPending > 0;
            },
            enumerable: !1,
            configurable: !0,
          });
      })();
      var B = 1;
      function J(e, t) {
        var r = ep(e.context);
        "action" === e.type && r.assertAlive({ actionContext: e });
        var n = r._isRunningAction;
        r._isRunningAction = !0;
        var i = h;
        h = e;
        try {
          return (function (e, t, r) {
            var n = new X(e, r);
            if (n.isEmpty) return (0, v.aD)(r).apply(null, t.args);
            var i = null;
            return (function e(t) {
              var a,
                o = n.getNextMiddleware(),
                u = o && o.handler;
              if (!u) return (0, v.aD)(r).apply(null, t.args);
              if (!o.includeHooks && c[t.name]) return e(t);
              var l = !1,
                s = !1;
              u(
                t,
                function (t, r) {
                  (l = !0), (i = e(t)), r && (i = r(i));
                },
                function (e) {
                  (s = !0), (i = e);
                },
              );
              return i;
            })(t);
          })(r, e, t);
        } finally {
          (h = i), (r._isRunningAction = n);
        }
      }
      function K(e) {
        if (e) return "action" === e.type ? e : e.parentActionEvent;
      }
      function q(e, t, r) {
        var n = function () {
          var n = B++,
            i = h,
            a = K(i);
          return J(
            {
              type: "action",
              name: t,
              id: n,
              args: eD(arguments),
              context: e,
              tree: E(e),
              rootId: i ? i.rootId : n,
              parentId: i ? i.id : 0,
              allParentIds: i
                ? _(_([], j(i.allParentIds), !1), [i.id], !1)
                : [],
              parentEvent: i,
              parentActionEvent: a,
            },
            r,
          );
        };
        return (n._isMSTAction = !0), (n._isFlowAction = r._isFlowAction), n;
      }
      var X = (function () {
        function e(e, t) {
          Object.defineProperty(this, "arrayIndex", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
            Object.defineProperty(this, "inArrayIndex", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "middlewares", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            t.$mst_middleware && this.middlewares.push(t.$mst_middleware);
          for (var r = e; r; )
            r.middlewares && this.middlewares.push(r.middlewares),
              (r = r.parent);
        }
        return (
          Object.defineProperty(e.prototype, "isEmpty", {
            get: function () {
              return this.middlewares.length <= 0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "getNextMiddleware", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.middlewares[this.arrayIndex];
              if (e)
                return (
                  e[this.inArrayIndex++] ||
                  (this.arrayIndex++,
                  (this.inArrayIndex = 0),
                  this.getNextMiddleware())
                );
            },
          }),
          e
        );
      })();
      function Q(e) {
        return "function" == typeof e
          ? "<function".concat(e.name ? " " + e.name : "", ">")
          : ec(e)
            ? "<".concat(e, ">")
            : "`".concat(
                (function (e) {
                  try {
                    return JSON.stringify(e);
                  } catch (e) {
                    return "<Unserializable: ".concat(e, ">");
                  }
                })(e),
                "`",
              );
      }
      function ee(e) {
        var t = e.value,
          r = e.context[e.context.length - 1].type,
          n = e.context
            .map(function (e) {
              return e.path;
            })
            .filter(function (e) {
              return e.length > 0;
            })
            .join("/"),
          i = n.length > 0 ? 'at path "/'.concat(n, '" ') : "",
          a = ec(t)
            ? "value of type ".concat(ep(t).type.name, ":")
            : eI(t)
              ? "value"
              : "snapshot",
          o = r && ec(t) && r.is(ep(t).snapshot);
        return (
          ""
            .concat(i)
            .concat(a, " ")
            .concat(Q(t), " is not assignable ")
            .concat(r ? "to type: `".concat(r.name, "`") : "") +
          (e.message ? " (".concat(e.message, ")") : "") +
          (r
            ? (G(r) &&
                (r.flags &
                  (b.String | b.Number | b.Integer | b.Boolean | b.Date)) >
                  0) ||
              eI(t)
              ? "."
              : ", expected an instance of `"
                  .concat(r.name, "` or a snapshot like `")
                  .concat(r.describe(), "` instead.") +
                (o
                  ? " (Note that a snapshot of the provided value is compatible with the targeted type)"
                  : "")
            : ".")
        );
      }
      function et(e, t, r) {
        return e.concat([{ path: t, type: r }]);
      }
      function er(e, t, r) {
        return [{ context: e, value: t, message: r }];
      }
      function en(e) {
        return e.reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
      function ei(e, t) {
        void 0 !== g &&
          g.env &&
          "true" === g.env.ENABLE_TYPE_CHECK &&
          (function (e, t) {
            var r = e.validate(t, [{ path: "", type: e }]);
            if (r.length > 0)
              throw new em(
                (function (e, t, r) {
                  var n;
                  if (0 !== r.length)
                    return (
                      "Error while converting "
                        .concat(
                          (n = Q(t)).length < 280
                            ? n
                            : ""
                                .concat(n.substring(0, 272), "......")
                                .concat(n.substring(n.length - 8)),
                          " to `",
                        )
                        .concat(e.name, "`:\n\n    ") + r.map(ee).join("\n    ")
                    );
                })(e, t, r),
              );
          })(e, t);
      }
      var ea = 0,
        eo = (function () {
          function e() {
            Object.defineProperty(this, "cacheId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ea++,
            }),
              Object.defineProperty(this, "cache", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: v.LO.map(),
              }),
              Object.defineProperty(this, "lastCacheModificationPerId", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: v.LO.map(),
              });
          }
          return (
            Object.defineProperty(
              e.prototype,
              "updateLastCacheModificationPerId",
              {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = this.lastCacheModificationPerId.get(e);
                  this.lastCacheModificationPerId.set(
                    e,
                    void 0 === t ? 1 : t + 1,
                  );
                },
              },
            ),
            Object.defineProperty(
              e.prototype,
              "getLastCacheModificationPerId",
              {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = this.lastCacheModificationPerId.get(e) || 0;
                  return "".concat(this.cacheId, "-").concat(t);
                },
              },
            ),
            Object.defineProperty(e.prototype, "addNodeToCache", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if ((void 0 === t && (t = !0), e.identifierAttribute)) {
                  var r = e.identifier;
                  this.cache.has(r) || this.cache.set(r, v.LO.array([], eg));
                  var n = this.cache.get(r);
                  if (-1 !== n.indexOf(e)) throw new em("Already registered");
                  n.push(e), t && this.updateLastCacheModificationPerId(r);
                }
              },
            }),
            Object.defineProperty(e.prototype, "mergeCache", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                (0, v.VO)(e.identifierCache.cache).forEach(function (e) {
                  return e.forEach(function (e) {
                    t.addNodeToCache(e);
                  });
                });
              },
            }),
            Object.defineProperty(e.prototype, "notifyDied", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (e.identifierAttribute) {
                  var t = e.identifier,
                    r = this.cache.get(t);
                  r &&
                    (r.remove(e),
                    r.length || this.cache.delete(t),
                    this.updateLastCacheModificationPerId(e.identifier));
                }
              },
            }),
            Object.defineProperty(e.prototype, "splitCache", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t) {
                var r = this,
                  n = new e(),
                  i = t.path + "/";
                return (
                  (0, v.qh)(this.cache).forEach(function (e) {
                    for (
                      var a = j(e, 2),
                        o = a[0],
                        u = a[1],
                        l = !1,
                        c = u.length - 1;
                      c >= 0;
                      c--
                    ) {
                      var s = u[c];
                      (s === t || 0 === s.path.indexOf(i)) &&
                        (n.addNodeToCache(s, !1),
                        u.splice(c, 1),
                        u.length || r.cache.delete(o),
                        (l = !0));
                    }
                    l && r.updateLastCacheModificationPerId(o);
                  }),
                  n
                );
              },
            }),
            Object.defineProperty(e.prototype, "has", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this.cache.get(t);
                return (
                  !!r &&
                  r.some(function (t) {
                    return e.isAssignableFrom(t.type);
                  })
                );
              },
            }),
            Object.defineProperty(e.prototype, "resolve", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this.cache.get(t);
                if (!r) return null;
                var n = r.filter(function (t) {
                  return e.isAssignableFrom(t.type);
                });
                switch (n.length) {
                  case 0:
                    return null;
                  case 1:
                    return n[0];
                  default:
                    throw new em(
                      "Cannot resolve a reference to type '"
                        .concat(e.name, "' with id: '")
                        .concat(
                          t,
                          "' unambigously, there are multiple candidates: ",
                        )
                        .concat(
                          n
                            .map(function (e) {
                              return e.path;
                            })
                            .join(", "),
                        ),
                    );
                }
              },
            }),
            e
          );
        })();
      function eu(e, t, r, n, i) {
        var a = ef(i);
        if (a) {
          if (a.parent)
            throw new em(
              "Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '"
                .concat(t ? t.path : "", "/")
                .concat(r, "', but it lives already at '")
                .concat(a.path, "'"),
            );
          return t && a.setParent(t, r), a;
        }
        return new H(e, t, r, n, i);
      }
      function el(e, t, r, n, i) {
        return new R(e, t, r, n, i);
      }
      function ec(e) {
        return !!(e && e.$treenode);
      }
      function es(e, t) {}
      function ep(e) {
        if (!ec(e)) throw new em("Value ".concat(e, " is no MST Node"));
        return e.$treenode;
      }
      function ef(e) {
        return (e && e.$treenode) || null;
      }
      function eb() {
        return ep(this).snapshot;
      }
      function eh(e) {
        if (!e) return ey;
        var t = Object.keys(e);
        if (!t.length) return ey;
        var r = Array(t.length);
        return (
          t.forEach(function (t, n) {
            r[n] = e[t];
          }),
          r
        );
      }
      ((u = d || (d = {}))[(u.INITIALIZING = 0)] = "INITIALIZING"),
        (u[(u.CREATED = 1)] = "CREATED"),
        (u[(u.FINALIZED = 2)] = "FINALIZED"),
        (u[(u.DETACHING = 3)] = "DETACHING"),
        (u[(u.DEAD = 4)] = "DEAD");
      var ed = Object.toString(),
        ey = Object.freeze([]),
        ev = Object.freeze({}),
        eg = (0, v.pu)().useProxies ? { deep: !1 } : { deep: !1, proxy: !1 };
      Object.freeze(eg);
      var em = (function (e) {
        function t(t) {
          return (
            void 0 === t && (t = "Illegal state"),
            e.call(this, "[mobx-state-tree] ".concat(t)) || this
          );
        }
        return w(t, e), t;
      })(Error);
      function ew(e) {
        return e;
      }
      var eP = Number.isInteger;
      function eO(e) {
        return Array.isArray(e) || (0, v.Ei)(e);
      }
      function ej(e) {
        return e ? (eO(e) ? e : [e]) : ey;
      }
      function e_(e) {
        if (null === e || "object" != typeof e) return !1;
        var t,
          r = Object.getPrototypeOf(e);
        return (
          null == r ||
          (null === (t = r.constructor) || void 0 === t
            ? void 0
            : t.toString()) === ed
        );
      }
      function eS(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          !(e instanceof Date) &&
          !(e instanceof RegExp)
        );
      }
      function eI(e, t) {
        return (
          void 0 === t && (t = !0),
          null == e ||
            "string" == typeof e ||
            "number" == typeof e ||
            "boolean" == typeof e ||
            (t && e instanceof Date)
        );
      }
      function eA(e) {
        return e;
      }
      function eT(e) {
        return e;
      }
      function eE(e) {
        return "function" != typeof e;
      }
      function eC(e, t, r) {
        var n, i, a;
        (n = e),
          (i = t),
          (a = { enumerable: !1, writable: !1, configurable: !0, value: r }),
          (0, v.Pb)(n) ? (0, v._x)(n, i, a) : Object.defineProperty(n, i, a);
      }
      var eN = (function () {
          function e() {
            Object.defineProperty(this, "handlers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            });
          }
          return (
            Object.defineProperty(e.prototype, "hasSubscribers", {
              get: function () {
                return this.handlers.length > 0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this;
                return (
                  void 0 === t && (t = !1),
                  t ? this.handlers.unshift(e) : this.handlers.push(e),
                  function () {
                    r.unregister(e);
                  }
                );
              },
            }),
            Object.defineProperty(e.prototype, "has", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this.handlers.indexOf(e) >= 0;
              },
            }),
            Object.defineProperty(e.prototype, "unregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this.handlers.indexOf(e);
                t >= 0 && this.handlers.splice(t, 1);
              },
            }),
            Object.defineProperty(e.prototype, "clear", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.handlers.length = 0;
              },
            }),
            Object.defineProperty(e.prototype, "emit", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this.handlers.slice().forEach(function (t) {
                  return t.apply(void 0, _([], j(e), !1));
                });
              },
            }),
            e
          );
        })(),
        eV = (function () {
          function e() {
            Object.defineProperty(this, "eventHandlers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
          }
          return (
            Object.defineProperty(e.prototype, "hasSubscribers", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this.eventHandlers && this.eventHandlers[e];
                return !!t && t.hasSubscribers;
              },
            }),
            Object.defineProperty(e.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r) {
                void 0 === r && (r = !1),
                  this.eventHandlers || (this.eventHandlers = {});
                var n = this.eventHandlers[e];
                return (
                  n || (n = this.eventHandlers[e] = new eN()), n.register(t, r)
                );
              },
            }),
            Object.defineProperty(e.prototype, "has", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this.eventHandlers && this.eventHandlers[e];
                return !!r && r.has(t);
              },
            }),
            Object.defineProperty(e.prototype, "unregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this.eventHandlers && this.eventHandlers[e];
                r && r.unregister(t);
              },
            }),
            Object.defineProperty(e.prototype, "clear", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.eventHandlers && delete this.eventHandlers[e];
              },
            }),
            Object.defineProperty(e.prototype, "clearAll", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.eventHandlers = void 0;
              },
            }),
            Object.defineProperty(e.prototype, "emit", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
                var n = this.eventHandlers && this.eventHandlers[e];
                n && n.emit.apply(n, _([], j(t), !1));
              },
            }),
            e
          );
        })();
      function eD(e) {
        for (var t = Array(e.length), r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      function ex(e, t) {
        return 0 === e.indexOf(t);
      }
      function ek(e, t) {}
      function ez(e, t, r) {
        void 0 === r && (r = !0);
      }
      function eR(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : "function" == typeof setImmediate
            ? setImmediate(e)
            : setTimeout(e, 1);
      }
      function eF(e) {
        var t, r;
        return (
          (t = e.name),
          ((r = function () {
            var n = B++,
              i = h;
            if (!i)
              throw new em("a mst flow must always have a parent context");
            var a = K(i);
            if (!a)
              throw new em(
                "a mst flow must always have a parent action context",
              );
            var o = {
                name: t,
                id: n,
                tree: i.tree,
                context: i.context,
                parentId: i.id,
                allParentIds: _(_([], j(i.allParentIds), !1), [i.id], !1),
                rootId: i.rootId,
                parentEvent: i,
                parentActionEvent: a,
              },
              u = arguments;
            function l(e, t, n) {
              return (
                (e.$mst_middleware = r.$mst_middleware),
                J(P(P({}, o), { type: t, args: [n] }), e)
              );
            }
            return new Promise(function (t, n) {
              var i,
                a = function () {
                  (i = e.apply(null, arguments)), c(void 0);
                };
              function c(e) {
                var t;
                try {
                  var r = l(
                    function (e) {
                      t = i.next(e);
                    },
                    "flow_resume",
                    e,
                  );
                  r instanceof Error && (t = i.throw(r));
                } catch (e) {
                  eR(function () {
                    l(
                      function (t) {
                        n(e);
                      },
                      "flow_throw",
                      e,
                    );
                  });
                  return;
                }
                p(t);
              }
              function s(e) {
                var t;
                try {
                  l(
                    function (e) {
                      t = i.throw(e);
                    },
                    "flow_resume_error",
                    e,
                  );
                } catch (e) {
                  eR(function () {
                    l(
                      function (t) {
                        n(e);
                      },
                      "flow_throw",
                      e,
                    );
                  });
                  return;
                }
                p(t);
              }
              function p(e) {
                if (e.done) {
                  eR(function () {
                    l(
                      function (e) {
                        t(e);
                      },
                      "flow_return",
                      e.value,
                    );
                  });
                  return;
                }
                if (!e.value || "function" != typeof e.value.then)
                  throw new em(
                    "Only promises can be yielded to `async`, got: " + e,
                  );
                return e.value.then(c, s);
              }
              (a.$mst_middleware = r.$mst_middleware),
                J(P(P({}, o), { type: "flow_spawn", args: eD(u) }), a);
            });
          })._isFlowAction = !0),
          r
        );
      }
      function eL(e) {
        return !0 == ("number" == typeof e)
          ? "" + e
          : -1 === e.indexOf("/") && -1 === e.indexOf("~")
            ? e
            : e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function eH(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      function eM(e) {
        if (0 === e.length) return "";
        var t = function (e) {
          return e.map(eL).join("/");
        };
        return "." === e[0] || ".." === e[0] ? t(e) : "/" + t(e);
      }
      var eU = Symbol("$preProcessorFailed"),
        eW = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, n || t.name) || this;
            return (
              Object.defineProperty(i, "_subtype", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(i, "_processors", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              i
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "flags", {
              get: function () {
                return this._subtype.flags | b.SnapshotProcessor;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return "snapshotProcessor(".concat(
                  this._subtype.describe(),
                  ")",
                );
              },
            }),
            Object.defineProperty(t.prototype, "preProcessSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this._processors.preProcessor
                  ? this._processors.preProcessor.call(null, e)
                  : e;
              },
            }),
            Object.defineProperty(t.prototype, "preProcessSnapshotSafe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                try {
                  return this.preProcessSnapshot(e);
                } catch (e) {
                  return eU;
                }
              },
            }),
            Object.defineProperty(t.prototype, "postProcessSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return this._processors.postProcessor
                  ? this._processors.postProcessor.call(null, e, t.storedValue)
                  : e;
              },
            }),
            Object.defineProperty(t.prototype, "_fixNode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t,
                  r = this;
                (function (e, t) {
                  for (var r, n, i = [], a = 2; a < arguments.length; a++)
                    i[a - 2] = arguments[a];
                  try {
                    for (var o = O(i), u = o.next(); !u.done; u = o.next()) {
                      var l = u.value;
                      e[l] = t[l].bind(t);
                    }
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      u && !u.done && (n = o.return) && n.call(o);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                })(e.type, this, "create"),
                  e instanceof H &&
                    (e.hasSnapshotPostProcessor =
                      !!this._processors.postProcessor);
                var n = e.getSnapshot;
                (e.getSnapshot = function () {
                  return r.postProcessSnapshot(n.call(e), e);
                }),
                  (G((t = this._subtype)) && (t.flags & b.Union) > 0) ||
                    (e.getReconciliationType = function () {
                      return r;
                    });
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = ec(n) ? n : this.preProcessSnapshot(n),
                  a = this._subtype.instantiate(e, t, r, i);
                return this._fixNode(a), a;
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = this._subtype.reconcile(
                  e,
                  ec(t) ? t : this.preProcessSnapshot(t),
                  r,
                  n,
                );
                return i !== e && this._fixNode(i), i;
              },
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                void 0 === t && (t = !0);
                var r = this._subtype.getSnapshot(e);
                return t ? this.postProcessSnapshot(r, e) : r;
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this.preProcessSnapshotSafe(e);
                return r === eU
                  ? er(t, e, "Failed to preprocess value")
                  : this._subtype.validate(r, t);
              },
            }),
            Object.defineProperty(t.prototype, "getSubTypes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this._subtype;
              },
            }),
            Object.defineProperty(t.prototype, "is", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = G(e)
                  ? this._subtype
                  : ec(e)
                    ? e
                    : this.preProcessSnapshotSafe(e);
                return (
                  t !== eU &&
                  0 ===
                    this._subtype.validate(t, [
                      { path: "", type: this._subtype },
                    ]).length
                );
              },
            }),
            Object.defineProperty(t.prototype, "isAssignableFrom", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this._subtype.isAssignableFrom(e);
              },
            }),
            Object.defineProperty(t.prototype, "isMatchingSnapshotId", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (!(this._subtype instanceof Z)) return !1;
                var r = this.preProcessSnapshot(t);
                return this._subtype.isMatchingSnapshotId(e, r);
              },
            }),
            t
          );
        })(W),
        eZ =
          "Map.put can only be used to store complex values that have an identifier type attribute";
      ((l = y || (y = {}))[(l.UNKNOWN = 0)] = "UNKNOWN"),
        (l[(l.YES = 1)] = "YES"),
        (l[(l.NO = 2)] = "NO");
      var e$ = (function (e) {
          function t(t, r) {
            return e.call(this, t, v.LO.ref.enhancer, r) || this;
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "get", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t) {
                return e.prototype.get.call(this, "" + t);
              },
            }),
            Object.defineProperty(t.prototype, "has", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t) {
                return e.prototype.has.call(this, "" + t);
              },
            }),
            Object.defineProperty(t.prototype, "delete", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t) {
                return e.prototype.delete.call(this, "" + t);
              },
            }),
            Object.defineProperty(t.prototype, "set", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t, r) {
                return e.prototype.set.call(this, "" + t, r);
              },
            }),
            Object.defineProperty(t.prototype, "put", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (!e)
                  throw new em("Map.put cannot be used to set empty values");
                if (ec(e)) {
                  var t = ep(e);
                  if (null === t.identifier) throw new em(eZ);
                  return this.set(t.identifier, e), e;
                }
                if (eS(e)) {
                  var r = ep(this),
                    n = r.type;
                  if (n.identifierMode !== y.YES) throw new em(eZ);
                  var i = e[n.mapIdentifierAttribute];
                  if (!tT(i)) {
                    var a = this.put(n.getChildType().create(e, r.environment));
                    return this.put(T(a));
                  }
                  var o = "" + i;
                  return this.set(o, e), this.get(o);
                }
                throw new em(
                  "Map.put can only be used to store complex values",
                );
              },
            }),
            t
          );
        })(v.vP),
        eG = (function (e) {
          function t(t, r, n) {
            void 0 === n && (n = []);
            var i = e.call(this, t) || this;
            return (
              Object.defineProperty(i, "_subType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(i, "identifierMode", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y.UNKNOWN,
              }),
              Object.defineProperty(i, "mapIdentifierAttribute", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(i, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Map,
              }),
              Object.defineProperty(i, "hookInitializers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              i._determineIdentifierMode(),
              (i.hookInitializers = n),
              i
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "hooks", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var r =
                  this.hookInitializers.length > 0
                    ? this.hookInitializers.concat(e)
                    : [e];
                return new t(this.name, this._subType, r);
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return this._determineIdentifierMode(), eu(this, e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "_determineIdentifierMode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (this.identifierMode === y.UNKNOWN) {
                  var e = [];
                  if (
                    (function e(t, r) {
                      var n,
                        i,
                        a = t.getSubTypes();
                      if (a === M) return !1;
                      if (a) {
                        var o = ej(a);
                        try {
                          for (
                            var u = O(o), l = u.next();
                            !l.done;
                            l = u.next()
                          ) {
                            var c = l.value;
                            if (!e(c, r)) return !1;
                          }
                        } catch (e) {
                          n = { error: e };
                        } finally {
                          try {
                            l && !l.done && (i = u.return) && i.call(u);
                          } finally {
                            if (n) throw n.error;
                          }
                        }
                      }
                      return t instanceof e1 && r.push(t), !0;
                    })(this._subType, e)
                  ) {
                    var t = e.reduce(
                      function (e, t) {
                        if (!t.identifierAttribute) return e;
                        if (e && e !== t.identifierAttribute)
                          throw new em(
                            "The objects in a map should all have the same identifier attribute, expected '"
                              .concat(e, "', but child of type '")
                              .concat(t.name, "' declared attribute '")
                              .concat(t.identifierAttribute, "' as identifier"),
                          );
                        return t.identifierAttribute;
                      },
                      void 0,
                    );
                    t
                      ? ((this.identifierMode = y.YES),
                        (this.mapIdentifierAttribute = t))
                      : (this.identifierMode = y.NO);
                  }
                }
              },
            }),
            Object.defineProperty(t.prototype, "initializeChildNodes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                void 0 === t && (t = {});
                var r = e.type._subType,
                  n = {};
                return (
                  Object.keys(t).forEach(function (i) {
                    n[i] = r.instantiate(e, i, void 0, t[i]);
                  }),
                  n
                );
              },
            }),
            Object.defineProperty(t.prototype, "createNewInstance", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return new e$(e, this.name);
              },
            }),
            Object.defineProperty(t.prototype, "finalizeNewInstance", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                (0, v.Nv)(t, e.unbox),
                  e.type.hookInitializers.forEach(function (e) {
                    var r = e(t);
                    Object.keys(r).forEach(function (e) {
                      var n = r[e],
                        i = q(t, e, n);
                      eC(t, e, i);
                    });
                  }),
                  (0, v.Su)(t, this.willChange),
                  (0, v.N7)(t, this.didChange);
              },
            }),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.name;
              },
            }),
            Object.defineProperty(t.prototype, "getChildren", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return (0, v.VO)(e.storedValue);
              },
            }),
            Object.defineProperty(t.prototype, "getChildNode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = e.storedValue.get("" + t);
                if (!r) throw new em("Not a child " + t);
                return r;
              },
            }),
            Object.defineProperty(t.prototype, "willChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = ep(e.object),
                  r = e.name;
                t.assertWritable({ subpath: r });
                var n = t.type,
                  i = n._subType;
                switch (e.type) {
                  case "update":
                    var a = e.newValue;
                    if (a === e.object.get(r)) return null;
                    ei(i, a),
                      (e.newValue = i.reconcile(
                        t.getChildNode(r),
                        e.newValue,
                        t,
                        r,
                      )),
                      n.processIdentifier(r, e.newValue);
                    break;
                  case "add":
                    ei(i, e.newValue),
                      (e.newValue = i.instantiate(t, r, void 0, e.newValue)),
                      n.processIdentifier(r, e.newValue);
                }
                return e;
              },
            }),
            Object.defineProperty(t.prototype, "processIdentifier", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (this.identifierMode === y.YES && t instanceof H) {
                  var r = t.identifier;
                  if (r !== e)
                    throw new em(
                      "A map of objects containing an identifier should always store the object under their own identifier. Trying to store key '"
                        .concat(r, "', but expected: '")
                        .concat(e, "'"),
                    );
                }
              },
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = {};
                return (
                  e.getChildren().forEach(function (e) {
                    t[e.subpath] = e.snapshot;
                  }),
                  t
                );
              },
            }),
            Object.defineProperty(t.prototype, "processInitialSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function (r) {
                    t[r] = e[r].getSnapshot();
                  }),
                  t
                );
              },
            }),
            Object.defineProperty(t.prototype, "didChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = ep(e.object);
                switch (e.type) {
                  case "update":
                    return void t.emitPatch(
                      {
                        op: "replace",
                        path: eL(e.name),
                        value: e.newValue.snapshot,
                        oldValue: e.oldValue ? e.oldValue.snapshot : void 0,
                      },
                      t,
                    );
                  case "add":
                    return void t.emitPatch(
                      {
                        op: "add",
                        path: eL(e.name),
                        value: e.newValue.snapshot,
                        oldValue: void 0,
                      },
                      t,
                    );
                  case "delete":
                    var r = e.oldValue.snapshot;
                    return (
                      e.oldValue.die(),
                      void t.emitPatch(
                        { op: "remove", path: eL(e.name), oldValue: r },
                        t,
                      )
                    );
                }
              },
            }),
            Object.defineProperty(t.prototype, "applyPatchLocally", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r) {
                var n = e.storedValue;
                switch (r.op) {
                  case "add":
                  case "replace":
                    n.set(t, r.value);
                    break;
                  case "remove":
                    n.delete(t);
                }
              },
            }),
            Object.defineProperty(t.prototype, "applySnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                ei(this, t);
                var r = e.storedValue,
                  n = {};
                if (
                  (Array.from(r.keys()).forEach(function (e) {
                    n[e] = !1;
                  }),
                  t)
                )
                  for (var i in t) r.set(i, t[i]), (n["" + i] = !0);
                Object.keys(n).forEach(function (e) {
                  !1 === n[e] && r.delete(e);
                });
              },
            }),
            Object.defineProperty(t.prototype, "getChildType", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this._subType;
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this;
                return e_(e)
                  ? en(
                      Object.keys(e).map(function (n) {
                        return r._subType.validate(e[n], et(t, n, r._subType));
                      }),
                    )
                  : er(t, e, "Value is not a plain object");
              },
            }),
            Object.defineProperty(t.prototype, "getDefaultSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return ev;
              },
            }),
            Object.defineProperty(t.prototype, "removeChild", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                e.storedValue.delete(t);
              },
            }),
            t
          );
        })(Z);
      eG.prototype.applySnapshot = (0, v.aD)(eG.prototype.applySnapshot);
      var eY = (function (e) {
        function t(t, r, n) {
          void 0 === n && (n = []);
          var i = e.call(this, t) || this;
          return (
            Object.defineProperty(i, "_subType", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            }),
            Object.defineProperty(i, "flags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: b.Array,
            }),
            Object.defineProperty(i, "hookInitializers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            (i.hookInitializers = n),
            i
          );
        }
        return (
          w(t, e),
          Object.defineProperty(t.prototype, "hooks", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var r =
                this.hookInitializers.length > 0
                  ? this.hookInitializers.concat(e)
                  : [e];
              return new t(this.name, this._subType, r);
            },
          }),
          Object.defineProperty(t.prototype, "instantiate", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, r, n) {
              return eu(this, e, t, r, n);
            },
          }),
          Object.defineProperty(t.prototype, "initializeChildNodes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              void 0 === t && (t = []);
              var r = e.type._subType,
                n = {};
              return (
                t.forEach(function (t, i) {
                  var a = "" + i;
                  n[a] = r.instantiate(e, a, void 0, t);
                }),
                n
              );
            },
          }),
          Object.defineProperty(t.prototype, "createNewInstance", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = P(P({}, eg), { name: this.name });
              return v.LO.array(eh(e), t);
            },
          }),
          Object.defineProperty(t.prototype, "finalizeNewInstance", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              ((0, v.kS)(t).dehancer = e.unbox),
                e.type.hookInitializers.forEach(function (e) {
                  var r = e(t);
                  Object.keys(r).forEach(function (e) {
                    var n = r[e],
                      i = q(t, e, n);
                    eC(t, e, i);
                  });
                }),
                (0, v.Su)(t, this.willChange),
                (0, v.N7)(t, this.didChange);
            },
          }),
          Object.defineProperty(t.prototype, "describe", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return this.name;
            },
          }),
          Object.defineProperty(t.prototype, "getChildren", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return e.storedValue.slice();
            },
          }),
          Object.defineProperty(t.prototype, "getChildNode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              var r = Number(t);
              if (r < e.storedValue.length) return e.storedValue[r];
              throw new em("Not a child: " + t);
            },
          }),
          Object.defineProperty(t.prototype, "willChange", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = ep(e.object);
              t.assertWritable({ subpath: "" + e.index });
              var r = t.type._subType,
                n = t.getChildren();
              switch (e.type) {
                case "update":
                  if (e.newValue === e.object[e.index]) return null;
                  var i = eB(t, r, [n[e.index]], [e.newValue], [e.index]);
                  if (!i) return null;
                  e.newValue = i[0];
                  break;
                case "splice":
                  var a = e.index,
                    o = e.removedCount,
                    u = e.added,
                    l = eB(
                      t,
                      r,
                      n.slice(a, a + o),
                      u,
                      u.map(function (e, t) {
                        return a + t;
                      }),
                    );
                  if (!l) return null;
                  e.added = l;
                  for (var c = a + o; c < n.length; c++)
                    n[c].setParent(t, "" + (c + u.length - o));
              }
              return e;
            },
          }),
          Object.defineProperty(t.prototype, "getSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return e.getChildren().map(function (e) {
                return e.snapshot;
              });
            },
          }),
          Object.defineProperty(t.prototype, "processInitialSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = [];
              return (
                Object.keys(e).forEach(function (r) {
                  t.push(e[r].getSnapshot());
                }),
                t
              );
            },
          }),
          Object.defineProperty(t.prototype, "didChange", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = ep(e.object);
              switch (e.type) {
                case "update":
                  return void t.emitPatch(
                    {
                      op: "replace",
                      path: "" + e.index,
                      value: e.newValue.snapshot,
                      oldValue: e.oldValue ? e.oldValue.snapshot : void 0,
                    },
                    t,
                  );
                case "splice":
                  if (e.removedCount && e.addedCount === e.object.length)
                    return void t.emitPatch(
                      {
                        op: "replace",
                        path: "",
                        value: t.snapshot,
                        oldValue: e.removed.map(function (e) {
                          return e.snapshot;
                        }),
                      },
                      t,
                    );
                  for (var r = e.removedCount - 1; r >= 0; r--)
                    t.emitPatch(
                      {
                        op: "remove",
                        path: "" + (e.index + r),
                        oldValue: e.removed[r].snapshot,
                      },
                      t,
                    );
                  for (var r = 0; r < e.addedCount; r++)
                    t.emitPatch(
                      {
                        op: "add",
                        path: "" + (e.index + r),
                        value: e.added[r].snapshot,
                        oldValue: void 0,
                      },
                      t,
                    );
                  return;
              }
            },
          }),
          Object.defineProperty(t.prototype, "applyPatchLocally", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, r) {
              var n = e.storedValue,
                i = "-" === t ? n.length : Number(t);
              switch (r.op) {
                case "replace":
                  n[i] = r.value;
                  break;
                case "add":
                  n.splice(i, 0, r.value);
                  break;
                case "remove":
                  n.splice(i, 1);
              }
            },
          }),
          Object.defineProperty(t.prototype, "applySnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              ei(this, t), e.storedValue.replace(t);
            },
          }),
          Object.defineProperty(t.prototype, "getChildType", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return this._subType;
            },
          }),
          Object.defineProperty(t.prototype, "isValidSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              var r = this;
              return eO(e)
                ? en(
                    e.map(function (e, n) {
                      return r._subType.validate(e, et(t, "" + n, r._subType));
                    }),
                  )
                : er(t, e, "Value is not an array");
            },
          }),
          Object.defineProperty(t.prototype, "getDefaultSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return ey;
            },
          }),
          Object.defineProperty(t.prototype, "removeChild", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              e.storedValue.splice(Number(t), 1);
            },
          }),
          t
        );
      })(Z);
      function eB(e, t, r, n, i) {
        for (var a = !0, o = 0; ; o++) {
          var u,
            l = o <= n.length - 1,
            c = r[o],
            s = l ? n[o] : void 0,
            p = "" + i[o];
          if (
            (((u = s) instanceof R || u instanceof H) && (s = s.storedValue),
            c || l)
          ) {
            if (l) {
              if (c) {
                if (eK(c, s)) r[o] = eJ(t, e, p, s, c);
                else {
                  for (var f = void 0, b = o; b < r.length; b++)
                    if (eK(r[b], s)) {
                      f = r.splice(b, 1)[0];
                      break;
                    }
                  a = !1;
                  var h = eJ(t, e, p, s, f);
                  r.splice(o, 0, h);
                }
              } else {
                if (ec(s) && ep(s).parent === e)
                  throw new em(
                    "Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '"
                      .concat(e.path, "/")
                      .concat(p, "', but it lives already at '")
                      .concat(ep(s).path, "'"),
                  );
                a = !1;
                var h = eJ(t, e, p, s);
                r.splice(o, 0, h);
              }
            } else
              (a = !1),
                r.splice(o, 1),
                c instanceof H && c.createObservableInstanceIfNeeded(),
                c.die(),
                o--;
          } else break;
        }
        return a ? null : r;
      }
      function eJ(e, t, r, n, i) {
        ei(e, n);
        var a = (function () {
          if (ec(n)) {
            var a = ep(n);
            if ((a.assertAlive(ev), null !== a.parent && a.parent === t))
              return a.setParent(t, r), a;
          }
          return i ? e.reconcile(i, n, t, r) : e.instantiate(t, r, void 0, n);
        })();
        return (
          i &&
            i !== a &&
            (i instanceof H && i.createObservableInstanceIfNeeded(), i.die()),
          a
        );
      }
      function eK(e, t) {
        if (!e.isAlive) return !1;
        if (ec(t)) {
          var r = ep(t);
          return r.isAlive && r === e;
        }
        if (e.snapshot === t) return !0;
        if (!(e instanceof H)) return !1;
        var n = e.getReconciliationType();
        return (
          null !== e.identifier &&
          e.identifierAttribute &&
          e_(t) &&
          n.is(t) &&
          n.isMatchingSnapshotId(e, t)
        );
      }
      eY.prototype.applySnapshot = (0, v.aD)(eY.prototype.applySnapshot);
      var eq = "preProcessSnapshot",
        eX = "postProcessSnapshot";
      function eQ() {
        return ep(this).toString();
      }
      var e0 = { name: "AnonymousModel", properties: {}, initializers: ey },
        e1 = (function (e) {
          function t(t) {
            var r,
              n,
              i,
              a = e.call(this, t.name || e0.name) || this;
            return (
              Object.defineProperty(a, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Object,
              }),
              Object.defineProperty(a, "initializers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(a, "properties", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(a, "preProcessor", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(a, "postProcessor", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(a, "propertyNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(a, "named", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  return a.cloneAndEnhance({ name: e });
                },
              }),
              Object.defineProperty(a, "props", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  return a.cloneAndEnhance({ properties: e });
                },
              }),
              Object.defineProperty(a, "preProcessSnapshot", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = a.preProcessor;
                  return t
                    ? a.cloneAndEnhance({
                        preProcessor: function (r) {
                          return t(e(r));
                        },
                      })
                    : a.cloneAndEnhance({ preProcessor: e });
                },
              }),
              Object.defineProperty(a, "postProcessSnapshot", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = a.postProcessor;
                  return t
                    ? a.cloneAndEnhance({
                        postProcessor: function (r) {
                          return e(t(r));
                        },
                      })
                    : a.cloneAndEnhance({ postProcessor: e });
                },
              }),
              Object.assign(a, e0, t),
              (a.properties =
                ((n = Object.keys((r = a.properties))),
                (i = new Set()),
                n.forEach(function (e) {
                  if (i.has(e))
                    throw new em(
                      "".concat(
                        e,
                        " is declared twice in the model. Model should not contain the same keys",
                      ),
                    );
                  i.add(e);
                }),
                n.reduce(
                  function (e, t) {
                    if (t in c)
                      throw new em(
                        "Hook '".concat(
                          t,
                          "' was defined as property. Hooks should be defined as part of the actions",
                        ),
                      );
                    var n = Object.getOwnPropertyDescriptor(r, t);
                    if ("get" in n)
                      throw new em(
                        "Getters are not supported as properties. Please use views instead",
                      );
                    var i = n.value;
                    if (null == i)
                      throw new em(
                        "The default value of an attribute cannot be null or undefined as the type cannot be inferred. Did you mean `types.maybe(someType)`?",
                      );
                    if (eI(i))
                      e[t] = tl(
                        (function (e) {
                          switch (typeof e) {
                            case "string":
                              return e4;
                            case "number":
                              return e8;
                            case "boolean":
                              return e6;
                            case "object":
                              if (e instanceof Date) return tt;
                          }
                          throw new em(
                            "Cannot determine primitive type from value " + e,
                          );
                        })(i),
                        i,
                      );
                    else if (i instanceof eG) e[t] = tl(i, {});
                    else if (i instanceof eY) e[t] = tl(i, []);
                    else if (G(i));
                    else
                      throw new em(
                        "Invalid type definition for property '"
                          .concat(
                            t,
                            "', cannot infer a type from a value like '",
                          )
                          .concat(i, "' (")
                          .concat(typeof i, ")"),
                      );
                    return e;
                  },
                  P({}, r),
                ))),
              a.properties,
              (a.propertyNames = Object.keys(a.properties)),
              (a.identifierAttribute = a._getIdentifierAttribute()),
              a
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "_getIdentifierAttribute", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = void 0;
                return (
                  this.forAllProps(function (t, r) {
                    if (r.flags & b.Identifier) {
                      if (e)
                        throw new em(
                          "Cannot define property '"
                            .concat(t, "' as object identifier, property '")
                            .concat(
                              e,
                              "' is already defined as identifier property",
                            ),
                        );
                      e = t;
                    }
                  }),
                  e
                );
              },
            }),
            Object.defineProperty(t.prototype, "cloneAndEnhance", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return new t({
                  name: e.name || this.name,
                  properties: Object.assign({}, this.properties, e.properties),
                  initializers: this.initializers.concat(e.initializers || []),
                  preProcessor: e.preProcessor || this.preProcessor,
                  postProcessor: e.postProcessor || this.postProcessor,
                });
              },
            }),
            Object.defineProperty(t.prototype, "actions", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                return this.cloneAndEnhance({
                  initializers: [
                    function (r) {
                      return t.instantiateActions(r, e(r)), r;
                    },
                  ],
                });
              },
            }),
            Object.defineProperty(t.prototype, "instantiateActions", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this;
                if (!e_(t))
                  throw new em(
                    "actions initializer should return a plain object containing actions",
                  );
                Object.getOwnPropertyNames(t).forEach(function (n) {
                  if (n in r.properties)
                    throw new em(
                      "'".concat(
                        n,
                        "' is a property and cannot be declared as an action",
                      ),
                    );
                  if (n === eq)
                    throw new em(
                      "Cannot define action '".concat(
                        eq,
                        "', it should be defined using 'type.preProcessSnapshot(fn)' instead",
                      ),
                    );
                  if (n === eX)
                    throw new em(
                      "Cannot define action '".concat(
                        eX,
                        "', it should be defined using 'type.postProcessSnapshot(fn)' instead",
                      ),
                    );
                  var i = t[n],
                    a = e[n];
                  if (n in c && a) {
                    var o = i;
                    i = function () {
                      a.apply(null, arguments), o.apply(null, arguments);
                    };
                  }
                  var u = i.$mst_middleware,
                    l = i.bind(t);
                  (l._isFlowAction = i._isFlowAction || !1),
                    (l.$mst_middleware = u);
                  var s = q(e, n, l);
                  (t[n] = s), eC(e, n, s);
                });
              },
            }),
            Object.defineProperty(t.prototype, "volatile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                if ("function" != typeof e)
                  throw new em(
                    "You passed an ".concat(
                      typeof e,
                      " to volatile state as an argument, when function is expected",
                    ),
                  );
                return this.cloneAndEnhance({
                  initializers: [
                    function (r) {
                      return t.instantiateVolatileState(r, e(r)), r;
                    },
                  ],
                });
              },
            }),
            Object.defineProperty(t.prototype, "instantiateVolatileState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this;
                if (!e_(t))
                  throw new em(
                    "volatile state initializer should return a plain object containing state",
                  );
                Object.getOwnPropertyNames(t).forEach(function (n) {
                  if (n in r.properties)
                    throw new em(
                      "'".concat(
                        n,
                        "' is a property and cannot be declared as volatile state",
                      ),
                    );
                  (0, v.t8)(e, n, t[n]);
                });
              },
            }),
            Object.defineProperty(t.prototype, "extend", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                return this.cloneAndEnhance({
                  initializers: [
                    function (r) {
                      var n = e(r),
                        i = n.actions,
                        a = n.views,
                        o = n.state,
                        u = (function (e, t) {
                          var r = {};
                          for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) &&
                              0 > t.indexOf(n) &&
                              (r[n] = e[n]);
                          if (
                            null != e &&
                            "function" == typeof Object.getOwnPropertySymbols
                          )
                            for (
                              var i = 0, n = Object.getOwnPropertySymbols(e);
                              i < n.length;
                              i++
                            )
                              0 > t.indexOf(n[i]) &&
                                Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  n[i],
                                ) &&
                                (r[n[i]] = e[n[i]]);
                          return r;
                        })(n, ["actions", "views", "state"]);
                      for (var l in u)
                        throw new em(
                          "The `extend` function should return an object with a subset of the fields 'actions', 'views' and 'state'. Found invalid key '".concat(
                            l,
                            "'",
                          ),
                        );
                      return (
                        o && t.instantiateVolatileState(r, o),
                        a && t.instantiateViews(r, a),
                        i && t.instantiateActions(r, i),
                        r
                      );
                    },
                  ],
                });
              },
            }),
            Object.defineProperty(t.prototype, "views", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                return this.cloneAndEnhance({
                  initializers: [
                    function (r) {
                      return t.instantiateViews(r, e(r)), r;
                    },
                  ],
                });
              },
            }),
            Object.defineProperty(t.prototype, "instantiateViews", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this;
                if (!e_(t))
                  throw new em(
                    "views initializer should return a plain object containing views",
                  );
                Object.getOwnPropertyNames(t).forEach(function (n) {
                  if (n in r.properties)
                    throw new em(
                      "'".concat(
                        n,
                        "' is a property and cannot be declared as a view",
                      ),
                    );
                  var i,
                    a = Object.getOwnPropertyDescriptor(t, n);
                  if ("get" in a)
                    (0, v._x)(e, n, a), (0, v.rC)(e, (((i = {})[n] = v.Fl), i));
                  else if ("function" == typeof a.value) eC(e, n, a.value);
                  else
                    throw new em(
                      "A view member should either be a function or getter based property",
                    );
                });
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return eu(
                  this,
                  e,
                  t,
                  r,
                  ec(n) ? n : this.applySnapshotPreProcessor(n),
                );
              },
            }),
            Object.defineProperty(t.prototype, "initializeChildNodes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                void 0 === t && (t = {});
                var r = e.type,
                  n = {};
                return (
                  r.forAllProps(function (r, i) {
                    n[r] = i.instantiate(e, r, void 0, t[r]);
                  }),
                  n
                );
              },
            }),
            Object.defineProperty(t.prototype, "createNewInstance", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = P(P({}, eg), { name: this.name });
                return v.LO.object(e, ev, t);
              },
            }),
            Object.defineProperty(t.prototype, "finalizeNewInstance", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                eC(t, "toString", eQ),
                  this.forAllProps(function (r) {
                    (0, v.Nv)(t, r, e.unbox);
                  }),
                  this.initializers.reduce(function (e, t) {
                    return t(e);
                  }, t),
                  (0, v.Su)(t, this.willChange),
                  (0, v.N7)(t, this.didChange);
              },
            }),
            Object.defineProperty(t.prototype, "willChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = ep(e.object),
                  r = e.name;
                t.assertWritable({ subpath: r });
                var n = t.type.properties[r];
                return (
                  n &&
                    (ei(n, e.newValue),
                    (e.newValue = n.reconcile(
                      t.getChildNode(r),
                      e.newValue,
                      t,
                      r,
                    ))),
                  e
                );
              },
            }),
            Object.defineProperty(t.prototype, "didChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = ep(e.object);
                if (t.type.properties[e.name]) {
                  var r = e.oldValue ? e.oldValue.snapshot : void 0;
                  t.emitPatch(
                    {
                      op: "replace",
                      path: eL(e.name),
                      value: e.newValue.snapshot,
                      oldValue: r,
                    },
                    t,
                  );
                }
              },
            }),
            Object.defineProperty(t.prototype, "getChildren", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this,
                  r = [];
                return (
                  this.forAllProps(function (n) {
                    r.push(t.getChildNode(e, n));
                  }),
                  r
                );
              },
            }),
            Object.defineProperty(t.prototype, "getChildNode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (!(t in this.properties))
                  throw new em("Not a value property: " + t);
                var r,
                  n = (0, v.kS)(e.storedValue, t),
                  i = null === (r = n.raw) || void 0 === r ? void 0 : r.call(n);
                if (!i) throw new em("Node not available for property " + t);
                return i;
              },
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this;
                void 0 === t && (t = !0);
                var n = {};
                return (this.forAllProps(function (t, i) {
                  (0, v.qp)(e.storedValue, t).reportObserved(),
                    (n[t] = r.getChildNode(e, t).snapshot);
                }),
                t)
                  ? this.applySnapshotPostProcessor(n)
                  : n;
              },
            }),
            Object.defineProperty(t.prototype, "processInitialSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function (r) {
                    t[r] = e[r].getSnapshot();
                  }),
                  this.applySnapshotPostProcessor(t)
                );
              },
            }),
            Object.defineProperty(t.prototype, "applyPatchLocally", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r) {
                if (!("replace" === r.op || "add" === r.op))
                  throw new em(
                    "object does not support operation ".concat(r.op),
                  );
                e.storedValue[t] = r.value;
              },
            }),
            Object.defineProperty(t.prototype, "applySnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                ei(this, t);
                var r = this.applySnapshotPreProcessor(t);
                this.forAllProps(function (t) {
                  e.storedValue[t] = r[t];
                });
              },
            }),
            Object.defineProperty(t.prototype, "applySnapshotPreProcessor", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this.preProcessor;
                return t ? t.call(null, e) : e;
              },
            }),
            Object.defineProperty(t.prototype, "applySnapshotPostProcessor", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this.postProcessor;
                return t ? t.call(null, e) : e;
              },
            }),
            Object.defineProperty(t.prototype, "getChildType", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return ez(e, 1), this.properties[e];
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this,
                  n = this.applySnapshotPreProcessor(e);
                return e_(n)
                  ? en(
                      this.propertyNames.map(function (e) {
                        return r.properties[e].validate(
                          n[e],
                          et(t, e, r.properties[e]),
                        );
                      }),
                    )
                  : er(t, n, "Value is not a plain object");
              },
            }),
            Object.defineProperty(t.prototype, "forAllProps", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                this.propertyNames.forEach(function (r) {
                  return e(r, t.properties[r]);
                });
              },
            }),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this;
                return (
                  "{ " +
                  this.propertyNames
                    .map(function (t) {
                      return t + ": " + e.properties[t].describe();
                    })
                    .join("; ") +
                  " }"
                );
              },
            }),
            Object.defineProperty(t.prototype, "getDefaultSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return ev;
              },
            }),
            Object.defineProperty(t.prototype, "removeChild", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                e.storedValue[t] = void 0;
              },
            }),
            t
          );
        })(Z);
      e1.prototype.applySnapshot = (0, v.aD)(e1.prototype.applySnapshot);
      var e2 = (function (e) {
          function t(t, r, n, i) {
            void 0 === i && (i = ew);
            var a = e.call(this, t) || this;
            return (
              Object.defineProperty(a, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(a, "checker", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              }),
              Object.defineProperty(a, "initializer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              (a.flags = r),
              a
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.name;
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return el(this, e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "createNewInstance", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this.initializer(e);
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (eI(e) && this.checker(e)) return ey;
                var r =
                  "Date" === this.name
                    ? "Date or a unix milliseconds timestamp"
                    : this.name;
                return er(t, e, "Value is not a ".concat(r));
              },
            }),
            t
          );
        })($),
        e4 = new e2("string", b.String, function (e) {
          return "string" == typeof e;
        }),
        e8 = new e2("number", b.Number, function (e) {
          return "number" == typeof e;
        }),
        e5 = new e2("integer", b.Integer, function (e) {
          return eP(e);
        }),
        e7 = new e2("float", b.Float, function (e) {
          return Number(e) === e && e % 1 != 0;
        }),
        e3 = new e2("finite", b.Finite, function (e) {
          return Number.isFinite(e);
        }),
        e6 = new e2("boolean", b.Boolean, function (e) {
          return "boolean" == typeof e;
        }),
        e9 = new e2("null", b.Null, function (e) {
          return null === e;
        }),
        te = new e2("undefined", b.Undefined, function (e) {
          return void 0 === e;
        }),
        tt = new e2(
          "Date",
          b.Date,
          function (e) {
            return "number" == typeof e || e instanceof Date;
          },
          function (e) {
            return e instanceof Date ? e : new Date(e);
          },
        );
      tt.getSnapshot = function (e) {
        return e.storedValue.getTime();
      };
      var tr = (function (e) {
        function t(t) {
          var r = e.call(this, JSON.stringify(t)) || this;
          return (
            Object.defineProperty(r, "value", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(r, "flags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: b.Literal,
            }),
            (r.value = t),
            r
          );
        }
        return (
          w(t, e),
          Object.defineProperty(t.prototype, "instantiate", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, r, n) {
              return el(this, e, t, r, n);
            },
          }),
          Object.defineProperty(t.prototype, "describe", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return JSON.stringify(this.value);
            },
          }),
          Object.defineProperty(t.prototype, "isValidSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return eI(e) && e === this.value
                ? ey
                : er(
                    t,
                    e,
                    "Value is not a literal ".concat(
                      JSON.stringify(this.value),
                    ),
                  );
            },
          }),
          t
        );
      })($);
      function tn(e) {
        return new tr(e);
      }
      var ti = (function (e) {
          function t(t, r, n, i) {
            var a = e.call(this, t) || this;
            return (
              Object.defineProperty(a, "_subtype", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(a, "_predicate", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              }),
              Object.defineProperty(a, "_message", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              a
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "flags", {
              get: function () {
                return this._subtype.flags | b.Refinement;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.name;
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return this._subtype.instantiate(e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "isAssignableFrom", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this._subtype.isAssignableFrom(e);
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this._subtype.validate(e, t);
                if (r.length > 0) return r;
                var n = ec(e) ? ep(e).snapshot : e;
                return this._predicate(n) ? ey : er(t, e, this._message(e));
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return this._subtype.reconcile(e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "getSubTypes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this._subtype;
              },
            }),
            t
          );
        })(W),
        ta = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return (
              Object.defineProperty(i, "_types", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(i, "_dispatcher", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(i, "_eager", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              (n = P({ eager: !0, dispatcher: void 0 }, n)),
              (i._dispatcher = n.dispatcher),
              n.eager || (i._eager = !1),
              i
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "flags", {
              get: function () {
                var e = b.Union;
                return (
                  this._types.forEach(function (t) {
                    e |= t.flags;
                  }),
                  e
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isAssignableFrom", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this._types.some(function (t) {
                  return t.isAssignableFrom(e);
                });
              },
            }),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return (
                  "(" +
                  this._types
                    .map(function (e) {
                      return e.describe();
                    })
                    .join(" | ") +
                  ")"
                );
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = this.determineType(n, void 0);
                if (!i)
                  throw new em("No matching type for union " + this.describe());
                return i.instantiate(e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = this.determineType(t, e.getReconciliationType());
                if (!i)
                  throw new em("No matching type for union " + this.describe());
                return i.reconcile(e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "determineType", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return this._dispatcher
                  ? this._dispatcher(e)
                  : t
                    ? t.is(e)
                      ? t
                      : this._types
                          .filter(function (e) {
                            return e !== t;
                          })
                          .find(function (t) {
                            return t.is(e);
                          })
                    : this._types.find(function (t) {
                        return t.is(e);
                      });
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (this._dispatcher) return this._dispatcher(e).validate(e, t);
                for (var r = [], n = 0, i = 0; i < this._types.length; i++) {
                  var a = this._types[i].validate(e, t);
                  if (0 === a.length) {
                    if (this._eager) return ey;
                    n++;
                  } else r.push(a);
                }
                return 1 === n
                  ? ey
                  : er(t, e, "No type is applicable for the union").concat(
                      en(r),
                    );
              },
            }),
            Object.defineProperty(t.prototype, "getSubTypes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this._types;
              },
            }),
            t
          );
        })(W);
      function to(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        var n = G(e) ? void 0 : e,
          i = G(e) ? _([e], j(t), !1) : t;
        return new ta(
          "(" +
            i
              .map(function (e) {
                return e.name;
              })
              .join(" | ") +
            ")",
          i,
          n,
        );
      }
      var tu = (function (e) {
        function t(t, r, n) {
          var i = e.call(this, t.name) || this;
          return (
            Object.defineProperty(i, "_subtype", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            }),
            Object.defineProperty(i, "_defaultValue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            }),
            Object.defineProperty(i, "optionalValues", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            }),
            i
          );
        }
        return (
          w(t, e),
          Object.defineProperty(t.prototype, "flags", {
            get: function () {
              return this._subtype.flags | b.Optional;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "describe", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return this._subtype.describe() + "?";
            },
          }),
          Object.defineProperty(t.prototype, "instantiate", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, r, n) {
              if (this.optionalValues.indexOf(n) >= 0) {
                var i = this.getDefaultInstanceOrSnapshot();
                return this._subtype.instantiate(e, t, r, i);
              }
              return this._subtype.instantiate(e, t, r, n);
            },
          }),
          Object.defineProperty(t.prototype, "reconcile", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, r, n) {
              return this._subtype.reconcile(
                e,
                0 > this.optionalValues.indexOf(t) && this._subtype.is(t)
                  ? t
                  : this.getDefaultInstanceOrSnapshot(),
                r,
                n,
              );
            },
          }),
          Object.defineProperty(t.prototype, "getDefaultInstanceOrSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e =
                "function" == typeof this._defaultValue
                  ? this._defaultValue()
                  : this._defaultValue;
              return "function" == typeof this._defaultValue && ei(this, e), e;
            },
          }),
          Object.defineProperty(t.prototype, "isValidSnapshot", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return this.optionalValues.indexOf(e) >= 0
                ? ey
                : this._subtype.validate(e, t);
            },
          }),
          Object.defineProperty(t.prototype, "isAssignableFrom", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this._subtype.isAssignableFrom(e);
            },
          }),
          Object.defineProperty(t.prototype, "getSubTypes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return this._subtype;
            },
          }),
          t
        );
      })(W);
      function tl(e, t, r) {
        return (
          !(function (e, t) {
            if ("function" != typeof t && ec(t))
              throw new em(
                "default value cannot be an instance, pass a snapshot or a function that creates an instance/snapshot instead",
              );
          })(e, t),
          new tu(e, t, r || tc)
        );
      }
      var tc = [void 0],
        ts = tl(te, void 0),
        tp = tl(e9, null);
      function tf(e) {
        return to(e, ts);
      }
      var tb = (function (e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return (
              Object.defineProperty(n, "_definition", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(n, "_subType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              n
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "flags", {
              get: function () {
                return (this._subType ? this._subType.flags : 0) | b.Late;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "getSubType", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (!this._subType) {
                  var t = void 0;
                  try {
                    t = this._definition();
                  } catch (e) {
                    if (e instanceof ReferenceError) t = void 0;
                    else throw e;
                  }
                  if (e && void 0 === t)
                    throw new em(
                      "Late type seems to be used too early, the definition (still) returns undefined",
                    );
                  t && (this._subType = t);
                }
                return this._subType;
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return this.getSubType(!0).instantiate(e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return this.getSubType(!0).reconcile(e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.getSubType(!1);
                return e ? e.name : "<uknown late type>";
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this.getSubType(!1);
                return r ? r.validate(e, t) : ey;
              },
            }),
            Object.defineProperty(t.prototype, "isAssignableFrom", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this.getSubType(!1);
                return !!t && t.isAssignableFrom(e);
              },
            }),
            Object.defineProperty(t.prototype, "getSubTypes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.getSubType(!1) || M;
              },
            }),
            t
          );
        })(W),
        th = (function (e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return (
              Object.defineProperty(n, "options", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(n, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Lazy,
              }),
              Object.defineProperty(n, "loadedType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(n, "pendingNodeList", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: v.LO.array(),
              }),
              (0, v.gx)(
                function () {
                  return (
                    n.pendingNodeList.length > 0 &&
                    n.pendingNodeList.some(function (e) {
                      return (
                        e.isAlive &&
                        n.options.shouldLoadPredicate(
                          e.parent ? e.parent.value : null,
                        )
                      );
                    })
                  );
                },
                function () {
                  n.options.loadType().then(
                    (0, v.aD)(function (e) {
                      (n.loadedType = e),
                        n.pendingNodeList.forEach(function (e) {
                          e.parent &&
                            n.loadedType &&
                            e.parent.applyPatches([
                              {
                                op: "replace",
                                path: "/".concat(e.subpath),
                                value: e.snapshot,
                              },
                            ]);
                        });
                    }),
                  );
                },
              ),
              n
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return "<lazy ".concat(this.name, ">");
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = this;
                if (this.loadedType)
                  return this.loadedType.instantiate(e, t, r, n);
                var a = el(this, e, t, r, n);
                return (
                  this.pendingNodeList.push(a),
                  (0, v.gx)(
                    function () {
                      return !a.isAlive;
                    },
                    function () {
                      return i.pendingNodeList.splice(
                        i.pendingNodeList.indexOf(a),
                        1,
                      );
                    },
                  ),
                  a
                );
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return this.loadedType
                  ? this.loadedType.validate(e, t)
                  : eE(e)
                    ? ey
                    : er(t, e, "Value is not serializable and cannot be lazy");
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t, r, n, i) {
                return this.loadedType
                  ? (t.die(),
                    this.loadedType.instantiate(n, i, n.environment, r))
                  : e.prototype.reconcile.call(this, t, r, n, i);
              },
            }),
            t
          );
        })($),
        td = (function (e) {
          function t(t) {
            var r =
              e.call(this, t ? "frozen(".concat(t.name, ")") : "frozen") ||
              this;
            return (
              Object.defineProperty(r, "subType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(r, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Frozen,
              }),
              r
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return "<any immutable value>";
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                return el(this, e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return eE(e)
                  ? this.subType
                    ? this.subType.validate(e, t)
                    : ey
                  : er(t, e, "Value is not serializable and cannot be frozen");
              },
            }),
            t
          );
        })($),
        ty = new td(),
        tv = (function () {
          function e(e, t) {
            if (
              (Object.defineProperty(this, "targetType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "identifier", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "node", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "resolvedReference", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              tT(e))
            )
              this.identifier = e;
            else if (ec(e)) {
              var r = ep(e);
              if (!r.identifierAttribute)
                throw new em(
                  "Can only store references with a defined identifier attribute.",
                );
              var n = r.unnormalizedIdentifier;
              if (null == n)
                throw new em(
                  "Can only store references to tree nodes with a defined identifier.",
                );
              this.identifier = n;
            } else
              throw new em(
                "Can only store references to tree nodes or identifiers, got: '".concat(
                  e,
                  "'",
                ),
              );
          }
          return (
            Object.defineProperty(e.prototype, "updateResolvedReference", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = "" + this.identifier,
                  r = e.root,
                  n = r.identifierCache.getLastCacheModificationPerId(t);
                if (
                  !this.resolvedReference ||
                  this.resolvedReference.lastCacheModification !== n
                ) {
                  var i = this.targetType,
                    a = r.identifierCache.resolve(i, t);
                  if (!a)
                    throw new tg(
                      "[mobx-state-tree] Failed to resolve reference '"
                        .concat(this.identifier, "' to type '")
                        .concat(this.targetType.name, "' (from node: ")
                        .concat(e.path, ")"),
                    );
                  this.resolvedReference = {
                    node: a,
                    lastCacheModification: n,
                  };
                }
              },
            }),
            Object.defineProperty(e.prototype, "resolvedValue", {
              get: function () {
                return (
                  this.updateResolvedReference(this.node),
                  this.resolvedReference.node.value
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        tg = (function (e) {
          function t(r) {
            var n = e.call(this, r) || this;
            return Object.setPrototypeOf(n, t.prototype), n;
          }
          return w(t, e), t;
        })(Error),
        tm = (function (e) {
          function t(t, r) {
            var n = e.call(this, "reference(".concat(t.name, ")")) || this;
            return (
              Object.defineProperty(n, "targetType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(n, "onInvalidated", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(n, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Reference,
              }),
              n
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.name;
              },
            }),
            Object.defineProperty(t.prototype, "isAssignableFrom", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this.targetType.isAssignableFrom(e);
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return tT(e)
                  ? ey
                  : er(
                      t,
                      e,
                      "Value is not a valid identifier, which is a string or a number",
                    );
              },
            }),
            Object.defineProperty(t.prototype, "fireInvalidated", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = t.parent;
                if (i && i.isAlive) {
                  var a = i.storedValue;
                  a &&
                    this.onInvalidated({
                      cause: e,
                      parent: a,
                      invalidTarget: n ? n.storedValue : void 0,
                      invalidId: r,
                      replaceRef: function (e) {
                        I(t.root.storedValue, {
                          op: "replace",
                          value: e,
                          path: t.path,
                        });
                      },
                      removeRef: function () {
                        var e;
                        G((e = i.type)) && (e.flags & b.Object) > 0
                          ? this.replaceRef(void 0)
                          : I(t.root.storedValue, {
                              op: "remove",
                              path: t.path,
                            });
                      },
                    });
                }
              },
            }),
            Object.defineProperty(t.prototype, "addTargetNodeWatcher", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = this,
                  n = this.getValue(e);
                if (n) {
                  var i = ep(n),
                    a = function (n, a) {
                      var o = (function (e) {
                        switch (e) {
                          case c.beforeDestroy:
                            return "destroy";
                          case c.beforeDetach:
                            return "detach";
                          default:
                            return;
                        }
                      })(a);
                      o && r.fireInvalidated(o, e, t, i);
                    },
                    o = i.registerHook(c.beforeDetach, a),
                    u = i.registerHook(c.beforeDestroy, a);
                  return function () {
                    o(), u();
                  };
                }
              },
            }),
            Object.defineProperty(
              t.prototype,
              "watchTargetNodeForInvalidations",
              {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e, t, r) {
                  var n,
                    i = this;
                  if (this.onInvalidated) {
                    e.registerHook(c.beforeDestroy, function () {
                      n && n();
                    });
                    var a = function (a) {
                      n && n();
                      var o = e.parent,
                        u = o && o.storedValue;
                      o &&
                        o.isAlive &&
                        u &&
                        ((
                          r
                            ? !!r.get(t, u)
                            : e.root.identifierCache.has(i.targetType, "" + t)
                        )
                          ? (n = i.addTargetNodeWatcher(e, t))
                          : a ||
                            i.fireInvalidated(
                              "invalidSnapshotReference",
                              e,
                              t,
                              null,
                            ));
                    };
                    e.state === d.FINALIZED
                      ? a(!0)
                      : (e.isRoot ||
                          e.root.registerHook(
                            c.afterCreationFinalization,
                            function () {
                              e.parent &&
                                e.parent.createObservableInstanceIfNeeded();
                            },
                          ),
                        e.registerHook(c.afterAttach, function () {
                          a(!1);
                        }));
                  }
                },
              },
            ),
            t
          );
        })($),
        tw = (function (e) {
          function t(t, r) {
            return e.call(this, t, r) || this;
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "getValue", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (e.isAlive) return e.storedValue.resolvedValue;
              },
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return e.storedValue.identifier;
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = ec(n) ? ep(n).identifier : n,
                  a = new tv(n, this.targetType),
                  o = el(this, e, t, r, a);
                return (
                  (a.node = o),
                  this.watchTargetNodeForInvalidations(o, i, void 0),
                  o
                );
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                if (!e.isDetaching && e.type === this) {
                  var i = ec(t),
                    a = e.storedValue;
                  if (
                    (!i && a.identifier === t) ||
                    (i && a.resolvedValue === t)
                  )
                    return e.setParent(r, n), e;
                }
                var o = this.instantiate(r, n, void 0, t);
                return e.die(), o;
              },
            }),
            t
          );
        })(tm),
        tP = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, t, n) || this;
            return (
              Object.defineProperty(i, "options", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              i
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "getValue", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                if (e.isAlive)
                  return this.options.get(
                    e.storedValue,
                    e.parent ? e.parent.storedValue : null,
                  );
              },
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return e.storedValue;
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = ec(n)
                    ? this.options.set(n, e ? e.storedValue : null)
                    : n,
                  a = el(this, e, t, r, i);
                return (
                  this.watchTargetNodeForInvalidations(a, i, this.options), a
                );
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = ec(t)
                  ? this.options.set(t, e ? e.storedValue : null)
                  : t;
                if (!e.isDetaching && e.type === this && e.storedValue === i)
                  return e.setParent(r, n), e;
                var a = this.instantiate(r, n, void 0, i);
                return e.die(), a;
              },
            }),
            t
          );
        })(tm);
      function tO(e, t) {
        var r = t || void 0,
          n = t ? t.onInvalidated : void 0;
        return r && (r.get || r.set)
          ? new tP(e, { get: r.get, set: r.set }, n)
          : new tw(e, n);
      }
      var tj = (function (e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return (
              Object.defineProperty(n, "validType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(n, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Identifier,
              }),
              n
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                if (!e || !(e.type instanceof e1))
                  throw new em(
                    "Identifier types can only be instantiated as direct child of a model type",
                  );
                return el(this, e, t, r, n);
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                if (e.storedValue !== t)
                  throw new em(
                    "Tried to change identifier from '"
                      .concat(e.storedValue, "' to '")
                      .concat(t, "'. Changing identifiers is not allowed."),
                  );
                return e.setParent(r, n), e;
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return typeof e !== this.validType
                  ? er(
                      t,
                      e,
                      "Value is not a valid "
                        .concat(this.describe(), ", expected a ")
                        .concat(this.validType),
                    )
                  : ey;
              },
            }),
            t
          );
        })($),
        t_ = (function (e) {
          function t() {
            var t = e.call(this, "identifier", "string") || this;
            return (
              Object.defineProperty(t, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Identifier,
              }),
              t
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return "identifier";
              },
            }),
            t
          );
        })(tj),
        tS = (function (e) {
          function t() {
            return e.call(this, "identifierNumber", "number") || this;
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return e.storedValue;
              },
            }),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return "identifierNumber";
              },
            }),
            t
          );
        })(tj),
        tI = new t_(),
        tA = new tS();
      function tT(e) {
        return "string" == typeof e || "number" == typeof e;
      }
      var tE = (function (e) {
          function t(t) {
            var r = e.call(this, t.name) || this;
            return (
              Object.defineProperty(r, "options", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(r, "flags", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b.Custom,
              }),
              r
            );
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "describe", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return this.name;
              },
            }),
            Object.defineProperty(t.prototype, "isValidSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (this.options.isTargetType(e)) return ey;
                var r = this.options.getValidationMessage(e);
                return r
                  ? er(
                      t,
                      e,
                      "Invalid value for type '"
                        .concat(this.name, "': ")
                        .concat(r),
                    )
                  : ey;
              },
            }),
            Object.defineProperty(t.prototype, "getSnapshot", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this.options.toSnapshot(e.storedValue);
              },
            }),
            Object.defineProperty(t.prototype, "instantiate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = this.options.isTargetType(n)
                  ? n
                  : this.options.fromSnapshot(n, e && e.root.environment);
                return el(this, e, t, r, i);
              },
            }),
            Object.defineProperty(t.prototype, "reconcile", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r, n) {
                var i = !this.options.isTargetType(t);
                if (
                  !e.isDetaching &&
                  e.type === this &&
                  (i ? t === e.snapshot : t === e.storedValue)
                )
                  return e.setParent(r, n), e;
                var a = i
                    ? this.options.fromSnapshot(t, r.root.environment)
                    : t,
                  o = this.instantiate(r, n, void 0, a);
                return e.die(), o;
              },
            }),
            t
          );
        })($),
        tC = {
          enumeration: function (e, t) {
            var r = to.apply(
              void 0,
              _(
                [],
                j(
                  ("string" == typeof e ? t : e).map(function (e) {
                    return tn("" + e);
                  }),
                ),
                !1,
              ),
            );
            return "string" == typeof e && (r.name = e), r;
          },
          model: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return new e1({
              name: "string" == typeof e[0] ? e.shift() : "AnonymousModel",
              properties: e.shift() || {},
            });
          },
          compose: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = "string" == typeof e[0],
              n = r ? e[0] : "AnonymousModel";
            return (
              r && e.shift(),
              e
                .reduce(function (e, t) {
                  return e.cloneAndEnhance({
                    name: e.name + "_" + t.name,
                    properties: t.properties,
                    initializers: t.initializers,
                    preProcessor: function (r) {
                      return t.applySnapshotPreProcessor(
                        e.applySnapshotPreProcessor(r),
                      );
                    },
                    postProcessor: function (r) {
                      return t.applySnapshotPostProcessor(
                        e.applySnapshotPostProcessor(r),
                      );
                    },
                  });
                })
                .named(n)
            );
          },
          custom: function (e) {
            return new tE(e);
          },
          reference: tO,
          safeReference: function (e, t) {
            var r = tO(
              e,
              P(P({}, t), {
                onInvalidated: function (e) {
                  t && t.onInvalidated && t.onInvalidated(e), e.removeRef();
                },
              }),
            );
            return t && !1 === t.acceptsUndefined ? r : tf(r);
          },
          union: to,
          optional: tl,
          literal: tn,
          maybe: tf,
          maybeNull: function (e) {
            return to(e, tp);
          },
          refinement: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r =
                "string" == typeof e[0]
                  ? e.shift()
                  : G(e[0])
                    ? e[0].name
                    : null,
              n = e[0],
              i = e[1],
              a = e[2]
                ? e[2]
                : function (e) {
                    return "Value does not respect the refinement predicate";
                  };
            return ez(r, 1), new ti(r, n, i, a);
          },
          string: e4,
          boolean: e6,
          number: e8,
          integer: e5,
          float: e7,
          finite: e3,
          Date: tt,
          map: function (e) {
            return new eG("Map<string, ".concat(e.name, ">"), e);
          },
          array: function (e) {
            return new eY("".concat(e.name, "[]"), e);
          },
          frozen: function (e) {
            return 0 == arguments.length ? ty : G(e) ? new td(e) : tl(ty, e);
          },
          identifier: tI,
          identifierNumber: tA,
          late: function (e, t) {
            return new tb(
              "string" == typeof e ? e : "late(".concat(e.toString(), ")"),
              "string" == typeof e ? t : e,
            );
          },
          lazy: function (e, t) {
            return new th(e, t);
          },
          undefined: te,
          null: e9,
          snapshotProcessor: function (e, t, r) {
            return new eW(e, t, r);
          },
        };
    },
  },
]);
