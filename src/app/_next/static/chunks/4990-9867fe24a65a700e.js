"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4990],
  {
    24100: function (t, e, r) {
      r.d(e, {
        r: function () {
          return g;
        },
      });
      var i = r(11617);
      class a {
        get delete() {
          var t;
          return null === (t = this.cursor.delete) || void 0 === t
            ? void 0
            : t.bind(this.cursor);
        }
        get update() {
          var t;
          return null === (t = this.cursor.update) || void 0 === t
            ? void 0
            : t.bind(this.cursor);
        }
        [Symbol.asyncIterator]() {
          return this.cursor[Symbol.asyncIterator]();
        }
        constructor(t) {
          Object.defineProperty(this, "cursor", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          }),
            Object.defineProperty(this, "key", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "direction", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "request", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "primaryKey", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "advance", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "continue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "continuePrimaryKey", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.direction = t.direction),
            (this.request = t.request),
            (this.primaryKey = t.primaryKey),
            (this.key = t.key),
            (this.advance = t.advance.bind(t)),
            (this.continue = t.continue.bind(t)),
            (this.continuePrimaryKey = t.continuePrimaryKey.bind(t));
        }
      }
      class o extends a {
        [Symbol.asyncIterator]() {
          return this.cursor[Symbol.asyncIterator]();
        }
        constructor(t) {
          super(t),
            Object.defineProperty(this, "cursor", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            }),
            Object.defineProperty(this, "value", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.value = t.value);
        }
      }
      var n = function (t, e, r, i) {
        return new (r || (r = Promise))(function (a, o) {
          function n(t) {
            try {
              c(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? a(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(n, s);
          }
          c((i = i.apply(t, e || [])).next());
        });
      };
      class s {
        get(t) {
          return n(this, void 0, void 0, function* () {
            return this.index.get(t);
          });
        }
        getAll(t, e) {
          return n(this, void 0, void 0, function* () {
            return this.index.getAll(t, e);
          });
        }
        getAllKeys(t, e) {
          return n(this, void 0, void 0, function* () {
            return this.index.getAllKeys(t, e);
          });
        }
        getKey(t) {
          return n(this, void 0, void 0, function* () {
            return this.index.getKey(t);
          });
        }
        count(t) {
          return n(this, void 0, void 0, function* () {
            return this.index.count(t);
          });
        }
        openCursor(t, e) {
          return n(this, void 0, void 0, function* () {
            let r = yield this.index.openCursor(t, e);
            return r && new o(r);
          });
        }
        openKeyCursor(t, e) {
          return n(this, void 0, void 0, function* () {
            let r = yield this.index.openKeyCursor(t, e);
            return r && new a(r);
          });
        }
        [Symbol.asyncIterator]() {
          return this.index[Symbol.asyncIterator]();
        }
        iterate(t, e) {
          return this.index.iterate(t, e);
        }
        constructor(t) {
          Object.defineProperty(this, "index", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          }),
            Object.defineProperty(this, "keyPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "multiEntry", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "unique", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.keyPath = t.keyPath),
            (this.multiEntry = t.multiEntry),
            (this.name = t.name),
            (this.unique = t.unique);
        }
      }
      var c = function (t, e, r, i) {
        return new (r || (r = Promise))(function (a, o) {
          function n(t) {
            try {
              c(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? a(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(n, s);
          }
          c((i = i.apply(t, e || [])).next());
        });
      };
      class l {
        get indexNames() {
          return this.objectStore.indexNames;
        }
        get put() {
          var t;
          return null === (t = this.objectStore.put) || void 0 === t
            ? void 0
            : t.bind(this.objectStore);
        }
        get add() {
          var t;
          return null === (t = this.objectStore.add) || void 0 === t
            ? void 0
            : t.bind(this.objectStore);
        }
        get clear() {
          var t;
          return null === (t = this.objectStore.clear) || void 0 === t
            ? void 0
            : t.bind(this.objectStore);
        }
        get delete() {
          var t;
          return null === (t = this.objectStore.delete) || void 0 === t
            ? void 0
            : t.bind(this.objectStore);
        }
        createIndex(t, e, r) {
          return this.objectStore.createIndex
            ? new s(this.objectStore.createIndex(t, e, r))
            : null;
        }
        deleteIndex(t) {
          return this.objectStore.deleteIndex(t);
        }
        count(t) {
          return c(this, void 0, void 0, function* () {
            return this.objectStore.count(t);
          });
        }
        get(t) {
          return c(this, void 0, void 0, function* () {
            return this.objectStore.get(t);
          });
        }
        getAll(t, e) {
          return c(this, void 0, void 0, function* () {
            return this.objectStore.getAll(t, e);
          });
        }
        getAllKeys(t, e) {
          return c(this, void 0, void 0, function* () {
            return this.objectStore.getAllKeys(t, e);
          });
        }
        getKey(t) {
          return c(this, void 0, void 0, function* () {
            return this.objectStore.getKey(t);
          });
        }
        index(t) {
          return new s(this.objectStore.index(t));
        }
        openKeyCursor(t, e) {
          return c(this, void 0, void 0, function* () {
            let r = yield this.objectStore.openKeyCursor(t, e);
            return r && new a(r);
          });
        }
        openCursor(t, e) {
          return c(this, void 0, void 0, function* () {
            let r = yield this.objectStore.openCursor(t, e);
            return r && new o(r);
          });
        }
        iterate(t, e) {
          return this.objectStore.iterate(t, e);
        }
        [Symbol.asyncIterator]() {
          return this.objectStore[Symbol.asyncIterator]();
        }
        constructor(t) {
          Object.defineProperty(this, "objectStore", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          }),
            Object.defineProperty(this, "autoIncrement", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "keyPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.autoIncrement = t.autoIncrement),
            (this.keyPath = t.keyPath),
            (this.name = t.name);
        }
      }
      class d {
        get error() {
          return this.transaction.error;
        }
        get done() {
          return this.transaction.done;
        }
        abort() {
          return this.transaction.abort();
        }
        commit() {
          return this.transaction.commit();
        }
        objectStore(t) {
          return new l(this.transaction.objectStore(t));
        }
        addEventListener(t, e, r) {
          return this.transaction.addEventListener(t, e, r);
        }
        removeEventListener(t, e, r) {
          return this.transaction.removeEventListener(t, e, r);
        }
        set onabort(t) {
          this.transaction.onabort = t;
        }
        set onerror(t) {
          this.transaction.onerror = t;
        }
        set oncomplete(t) {
          this.transaction.oncomplete = t;
        }
        dispatchEvent(t) {
          return this.transaction.dispatchEvent(t);
        }
        constructor(t) {
          Object.defineProperty(this, "transaction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          }),
            Object.defineProperty(this, "durability", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "mode", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "objectStoreNames", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.durability = t.durability),
            (this.mode = t.mode),
            (this.objectStoreNames = t.objectStoreNames);
        }
      }
      var u = function (t, e, r, i) {
        return new (r || (r = Promise))(function (a, o) {
          function n(t) {
            try {
              c(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? a(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(n, s);
          }
          c((i = i.apply(t, e || [])).next());
        });
      };
      class h {
        get objectStoreNames() {
          return this.database.objectStoreNames;
        }
        transaction(t, e, r) {
          return new d(this.database.transaction(t, e, r));
        }
        createObjectStore(t, e) {
          return new l(this.database.createObjectStore(t, e));
        }
        deleteObjectStore(t) {
          return this.database.deleteObjectStore(t);
        }
        get(t, e) {
          return u(this, void 0, void 0, function* () {
            return this.database.get(t, e);
          });
        }
        getAll(t, e, r) {
          return u(this, void 0, void 0, function* () {
            return this.database.getAll(t, e, r);
          });
        }
        add(t, e, r) {
          return u(this, void 0, void 0, function* () {
            return this.database.add(t, e, r);
          });
        }
        put(t, e, r) {
          return u(this, void 0, void 0, function* () {
            return this.database.put(t, e, r);
          });
        }
        delete(t, e) {
          return u(this, void 0, void 0, function* () {
            return this.database.delete(t, e);
          });
        }
        clear(t) {
          return u(this, void 0, void 0, function* () {
            return this.database.clear(t);
          });
        }
        count(t, e) {
          return u(this, void 0, void 0, function* () {
            return this.database.count(t, e);
          });
        }
        getKey(t, e) {
          return u(this, void 0, void 0, function* () {
            return this.database.getKey(t, e);
          });
        }
        getAllKeys(t, e, r) {
          return u(this, void 0, void 0, function* () {
            return this.database.getAllKeys(t, e, r);
          });
        }
        countFromIndex(t, e, r) {
          return u(this, void 0, void 0, function* () {
            return this.database.countFromIndex(t, e, r);
          });
        }
        getFromIndex(t, e, r) {
          return u(this, void 0, void 0, function* () {
            return this.database.getFromIndex(t, e, r);
          });
        }
        getAllFromIndex(t, e, r, i) {
          return u(this, void 0, void 0, function* () {
            return this.database.getAllFromIndex(t, e, r, i);
          });
        }
        getAllKeysFromIndex(t, e, r, i) {
          return u(this, void 0, void 0, function* () {
            return this.database.getAllKeysFromIndex(t, e, r, i);
          });
        }
        getKeyFromIndex(t, e, r) {
          return u(this, void 0, void 0, function* () {
            return this.database.getKeyFromIndex(t, e, r);
          });
        }
        addEventListener(t, e, r) {
          this.database.addEventListener(t, e, r);
        }
        removeEventListener(t, e, r) {
          this.database.removeEventListener(t, e, r);
        }
        set onabort(t) {
          this.database.onabort = t;
        }
        set onclose(t) {
          this.database.onclose = t;
        }
        set onerror(t) {
          this.database.onerror = t;
        }
        set onversionchange(t) {
          this.database.onversionchange = t;
        }
        close() {
          return this.database.close();
        }
        dispatchEvent(t) {
          return this.database.dispatchEvent(t);
        }
        constructor(t) {
          Object.defineProperty(this, "database", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.version = t.version),
            (this.name = t.name);
        }
      }
      var v = function (t, e, r, i) {
        return new (r || (r = Promise))(function (a, o) {
          function n(t) {
            try {
              c(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? a(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(n, s);
          }
          c((i = i.apply(t, e || [])).next());
        });
      };
      class g {
        openDB(t) {
          let {
            onBlocked: e,
            onBlocking: r,
            onTerminated: a,
            onUpgrade: o,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          return v(this, void 0, void 0, function* () {
            let n = yield (0, i.X3)(this.name, t, {
              blocked: e,
              blocking: r,
              terminated: a,
              upgrade: (t, e, r, i, a) => {
                let n = new h(t);
                null == o || o(n, e, r, new d(i), a);
              },
            });
            return new h(n);
          });
        }
        deleteDB(t) {
          let { onBlocked: e } = t;
          return v(this, void 0, void 0, function* () {
            yield (0, i.Lj)(this.name, { blocked: e });
          });
        }
        constructor(t) {
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        }
      }
    },
    8356: function (t, e, r) {
      r.d(e, {
        c: function () {
          return o;
        },
      });
      var i = r(27198);
      class a {
        constructor(t) {
          (0, i._)(this, "httpClient", void 0), (this.httpClient = t);
        }
      }
      class o extends a {
        createRequestHeadersFromParams(t) {
          var e, r, i, a, o, n, s, c, l, d, u, h, v, g, y, p, m;
          let f =
              (null == t
                ? void 0
                : null === (e = t.common) || void 0 === e
                  ? void 0
                  : e.oauth) || this.config.params.common.oauth,
            w =
              (null == t
                ? void 0
                : null === (r = t.common) || void 0 === r
                  ? void 0
                  : r.client) || this.config.params.common.client,
            b =
              (null == t
                ? void 0
                : null === (i = t.common) || void 0 === i
                  ? void 0
                  : i.language) || this.config.params.common.language,
            E =
              (null == t
                ? void 0
                : null === (a = t.common) || void 0 === a
                  ? void 0
                  : a.device) || this.config.params.common.device,
            k =
              (null == t
                ? void 0
                : null === (o = t.common) || void 0 === o
                  ? void 0
                  : o.multiAuthUserId) ||
              this.config.params.common.multiAuthUserId,
            C =
              (null == t
                ? void 0
                : null === (s = t.common) || void 0 === s
                  ? void 0
                  : null === (n = s.blackbox) || void 0 === n
                    ? void 0
                    : n.userTicket) ||
              (null === (c = this.config.params.common.blackbox) || void 0 === c
                ? void 0
                : c.userTicket),
            T =
              (null == t
                ? void 0
                : null === (d = t.common) || void 0 === d
                  ? void 0
                  : null === (l = d.tvm) || void 0 === l
                    ? void 0
                    : l.serviceTicket) ||
              (null === (u = this.config.params.common.tvm) || void 0 === u
                ? void 0
                : u.serviceTicket),
            I =
              null ===
                (m =
                  null == t
                    ? void 0
                    : null === (h = t.common) || void 0 === h
                      ? void 0
                      : h.withoutInvocationInfo) ||
              void 0 === m ||
              m,
            R =
              this.config.params.common.icookie ||
              this.config.params.common.icookie,
            S =
              (null == t
                ? void 0
                : null === (v = t.common) || void 0 === v
                  ? void 0
                  : v.requestId) || this.config.params.common.requestId,
            A =
              (null == t
                ? void 0
                : null === (g = t.common) || void 0 === g
                  ? void 0
                  : g.clientIp) || this.config.params.common.clientIp,
            _ =
              (null == t
                ? void 0
                : null === (y = t.common) || void 0 === y
                  ? void 0
                  : y.tracestate) || this.config.params.common.tracestate,
            D =
              (null == t
                ? void 0
                : null === (p = t.common) || void 0 === p
                  ? void 0
                  : p.traceparent) || this.config.params.common.traceparent,
            x = {
              authorization: void 0 !== f ? "OAuth ".concat(f) : void 0,
              "x-yandex-music-client": w,
              "accept-language": b,
              "x-yandex-music-device": E,
              "x-yandex-music-multi-auth-user-id":
                void 0 !== k ? String(k) : void 0,
            };
          return (
            void 0 !== C && (x["x-ya-user-ticket"] = C),
            void 0 !== T && (x["x-ya-service-ticket"] = T),
            I && (x["x-yandex-music-without-invocation-info"] = "1"),
            void 0 !== R && (x["x-yandex-icookie"] = R),
            void 0 !== S && (x["x-request-id"] = S),
            void 0 !== A && (x["x-forwarded-for-y"] = A),
            void 0 !== _ && (x.tracestate = _),
            void 0 !== D && (x.traceparent = D),
            x
          );
        }
        getRetryPolicyConfig() {
          return { config: this.config.retryPolicyConfig };
        }
        constructor(t, e) {
          super(t),
            (0, i._)(this, "httpClient", void 0),
            (0, i._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    91894: function (t, e, r) {
      r.d(e, {
        R: function () {
          return n;
        },
      });
      var i = r(27198),
        a = r(8356),
        o = r(49498);
      class n extends a.c {
        async experiments(t, e) {
          var r;
          return (
            await this.httpClient.get("account/experiments", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.experiments,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async experimentsDetails(t, e) {
          var r;
          return (
            await this.httpClient.get("account/experiments/details", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.experimentsDetails,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async settings(t, e) {
          var r;
          return (
            await this.httpClient.post("account/settings", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.settings,
              searchParams: (0, o.f)({
                childModEnabled: null == t ? void 0 : t.childModEnabled,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async about(t, e) {
          var r;
          return (
            await this.httpClient.get("account/about", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.about,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, i._)(this, "httpClient", void 0),
            (0, i._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    61271: function (t, e, r) {
      r.d(e, {
        d: function () {
          return n;
        },
      });
      var i = r(27198),
        a = r(49498),
        o = r(8356);
      class n extends o.c {
        async getFileInfo(t, e) {
          var r, i;
          let o = await this.httpClient.get("get-file-info", {
            prefixUrl: this.config.prefixUrl,
            headers: this.createRequestHeadersFromParams(t),
            retry: this.getRetryPolicyConfig(),
            searchParams: (0, a.f)({
              ts: t.tsInSeconds,
              trackId: t.trackId,
              quality: t.quality,
              codecs: t.codecs.join(","),
              transports: t.transports.join(","),
              sign: t.sign,
              fromPromoLanding: t.fromPromoLanding,
            }),
            timeout:
              null === (r = this.config.timeouts) || void 0 === r
                ? void 0
                : r.getFileInfo,
            signal: null == e ? void 0 : e.signal,
          });
          return {
            ...(await o.json()),
            responseTime:
              null === (i = o.timings) || void 0 === i ? void 0 : i.response,
            url: o.url,
          };
        }
        async getFileInfoBatch(t, e) {
          var r;
          return (
            await this.httpClient.get("get-file-info/batch", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({
                ts: t.tsInSeconds,
                trackIds: t.trackIds,
                quality: t.quality,
                codecs: t.codecs.join(","),
                transports: t.transports.join(","),
                sign: t.sign,
                fromPromoLanding: t.fromPromoLanding,
              }),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.getFileInfo,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getByteRange(t, e) {
          var r;
          let i = await this.httpClient.get(t.srcUrl, {
            headers: { Range: "bytes=".concat(t.start, "-").concat(t.end) },
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (r = this.config.timeouts) || void 0 === r
                ? void 0
                : r.getByteRange,
            signal: null == e ? void 0 : e.signal,
            excludeHeaders: ["x-request-id", "x-retry-count"],
          });
          return {
            data: await i.arrayBuffer(),
            contentLength: Number(i.headers["content-length"]),
            contentRange: i.headers["content-range"],
          };
        }
        constructor(t, e) {
          super(t, e),
            (0, i._)(this, "httpClient", void 0),
            (0, i._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    25091: function (t, e, r) {
      r.d(e, {
        F: function () {
          return d;
        },
      });
      var i = r(27198),
        a = r(71011),
        o = r(8356),
        n = r(49498);
      let s = (t, e, r) => {
        let { uri: i, count: a, countWeb: o, ...s } = e,
          c = t + i,
          l = (0, n.f)(s);
        o && l.append(r ? "limit" : "count", String(o));
        let d = l.toString();
        return d ? "".concat(c, "?").concat(d) : c;
      };
      var c = r(25534);
      class l extends c.y {
        constructor(t = "Landing resource error", e = {}) {
          super(t, e),
            (0, i._)(this, "name", "LandingResourceException"),
            Object.setPrototypeOf(this, l.prototype);
        }
      }
      class d extends o.c {
        async getSkeleton(t, e) {
          var r;
          return (
            await this.httpClient.get("landing/skeleton/".concat(t.id), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, n.f)({ showWizard: t.showWizard }),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.getSkeleton,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getBlock(t, e) {
          var r;
          if (!(null == t ? void 0 : t.source))
            throw new l("Landing block source is not defined");
          let i = t.type === a.g.CHART_TRACKS,
            o = s(this.config.prefixUrl, t.source, i);
          return (
            await this.httpClient.get(o, {
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.getBlock,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getBlockEntities(t, e) {
          return (
            await this.httpClient.get(
              "landing/block/".concat(t.blockId, "/entities"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, n.f)({ page: t.page, pageSize: t.pageSize }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, i._)(this, "httpClient", void 0),
            (0, i._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    49498: function (t, e, r) {
      r.d(e, {
        f: function () {
          return i;
        },
      });
      let i = (t) => {
        let e = {};
        return (
          Object.getOwnPropertyNames(t)
            .filter((e) => void 0 !== t[e] && null !== t[e])
            .map((r) => {
              e[r] = String(t[r]);
            }),
          new URLSearchParams(e)
        );
      };
    },
    85392: function (t, e, r) {
      r.d(e, {
        I: function () {
          return i;
        },
        U: function () {
          return a;
        },
      });
      let i = () => Math.floor(Date.now() / 1e3),
        a = async (t) => {
          let { secretKey: e, data: r } = t,
            i = new TextEncoder(),
            a = i.encode(e);
          return crypto.subtle
            .importKey(
              "raw",
              a,
              { name: "HMAC", hash: { name: "SHA-256" } },
              !0,
              ["sign", "verify"],
            )
            .then(async (t) => {
              let e = i.encode(r);
              return crypto.subtle
                .sign("HMAC", t, e)
                .then((t) =>
                  btoa(String.fromCharCode(...new Uint8Array(t))).slice(0, -1),
                );
            });
        };
    },
    66924: function (t, e, r) {
      var i, a;
      r.d(e, {
        n: function () {
          return i;
        },
      }),
        ((a = i || (i = {})).LOSSLESS = "lossless"),
        (a.HQ = "hq"),
        (a.NQ = "nq"),
        (a.LQ = "lq"),
        (a.PREVIEW = "preview"),
        (a.SMART_PREVIEW = "smart_preview");
    },
    34990: function (t, e, r) {
      r.d(e, {
        a4: function () {
          return tD;
        },
        sp: function () {
          return tM;
        },
        ON: function () {
          return tV;
        },
        kf: function () {
          return K;
        },
        aT: function () {
          return v;
        },
        DW: function () {
          return tB;
        },
        Jc: function () {
          return u;
        },
        Jt: function () {
          return tA;
        },
        tY: function () {
          return g;
        },
        St: function () {
          return tO;
        },
        Db: function () {
          return tq;
        },
      });
      var i,
        a,
        o,
        n,
        s,
        c,
        l,
        d,
        u,
        h,
        v,
        g,
        y = r(27198);
      ((i = l || (l = {})).TRACK_META_RECEIVED = "track_meta_received"),
        (i.TRACK_DECRYPT_KEY_RECEIVED = "track_decrypt_key_received"),
        (i.CHUNK_MEDIA_FILE_RECEIVED = "chunk_media_file_received"),
        (i.MEDIA_FILE_RECEIVED = "media_file_received"),
        (i.ARTIST_IMAGE_RECEIVED = "artist_image_received"),
        (i.TRACK_IMAGE_RECEIVED = "track_image_received"),
        (i.TRACK_DOWNLOAD_FINISHED = "track_download_finished"),
        (i.TRACK_DOWNLOAD_STOPPED = "track_download_stopped"),
        (i.TRACK_DOWNLOAD_FAILED = "track_download_failed");
      var p = r(25534);
      class m extends p.y {
        constructor(t, { code: e = "E_ARTISTS_CONTROLLER", ...r } = {}) {
          super("".concat("[ArtistsController]", " ").concat(t), {
            code: e,
            ...r,
          }),
            (0, y._)(this, "name", "ArtistsControllerException"),
            Object.setPrototypeOf(this, m.prototype);
        }
      }
      let f = (t) => "images/artists/".concat(t);
      var w = r(15186);
      class b {
        async getArtist(t) {
          var e, r, i;
          let a = await (null ===
            (e = this.repositoryContainer.artistsRepository) || void 0 === e
            ? void 0
            : e.get(t));
          if (!a) return null;
          let o = {
              available: !0,
              decomposed: [],
              hasPromotions: !1,
              ogImage: "",
              genres: [],
              ticketsAvailable: !1,
              links: [],
              ratings: { week: 0, month: 0, day: 0 },
              counts: {
                tracks: 0,
                directAlbums: 0,
                alsoAlbums: 0,
                alsoTracks: 0,
              },
              ...a,
            },
            n = f(t);
          if (
            await (null === (r = this.repositoryContainer.fileStorage) ||
            void 0 === r
              ? void 0
              : r.isFileExists(n))
          ) {
            let t = await (null ===
              (i = this.repositoryContainer.fileStorage) || void 0 === i
              ? void 0
              : i.createFileURL(n));
            o.cover && t && (o.cover.uri = t);
          }
          return o;
        }
        async getArtistTrackIdsByUser(t) {
          var e, r;
          return Promise.all([
            null === (e = this.repositoryContainer.usersTracksRepository) ||
            void 0 === e
              ? void 0
              : e.getTracksByUid(this.userConfig.uid),
            null === (r = this.repositoryContainer.artistsTracksRepository) ||
            void 0 === r
              ? void 0
              : r.getTracksByArtistId(t),
          ])
            .then((t) => {
              let [e, r] = t;
              if (!e || !r) return [];
              let i = r.reduce((t, e) => ((t[e.trackId] = !0), t), {});
              return e.filter((t) => {
                let [e] = (0, w.f)(t);
                return e && i[e];
              });
            })
            .catch(() => []);
        }
        constructor({ repositoryContainer: t, userConfig: e }) {
          (0, y._)(this, "repositoryContainer", void 0),
            (0, y._)(this, "userConfig", void 0),
            (this.repositoryContainer = t),
            (this.userConfig = e);
        }
      }
      class E {
        async getArtist(t) {
          try {
            return await this.artistManager.getArtist(t);
          } catch (e) {
            return (
              this.hooks.afterError.promise(
                new m("Failed to get artist", { cause: e, data: { id: t } }),
              ),
              null
            );
          }
        }
        async getArtistTrackIdsByUser(t) {
          return await this.artistManager.getArtistTrackIdsByUser(t);
        }
        onArtistImageReceived(t, e) {
          var r;
          let i = f(t);
          null === (r = this.repositoryContainer.fileStorage) ||
            void 0 === r ||
            r.writeFile(i, e).catch((t) => {
              this.hooks.afterError.promise(
                new m("Failed to write artist image", {
                  cause: t,
                  data: { path: i },
                }),
              );
            });
        }
        constructor(t) {
          (0, y._)(this, "artistManager", void 0),
            (0, y._)(this, "repositoryContainer", void 0),
            (0, y._)(this, "userConfig", void 0),
            (0, y._)(this, "downloader", void 0),
            (0, y._)(this, "hooks", void 0),
            (this.repositoryContainer = t.repositoryContainer),
            (this.userConfig = t.userConfig),
            (this.downloader = t.downloader),
            (this.hooks = t.hooks),
            (this.artistManager = new b({
              repositoryContainer: this.repositoryContainer,
              userConfig: this.userConfig,
            })),
            this.downloader.events.on(
              l.ARTIST_IMAGE_RECEIVED,
              this.onArtistImageReceived.bind(this),
            );
        }
      }
      var k = r(66743),
        C = r(62726),
        T = r(24100);
      ((a = d || (d = {})).RESPONSE_CACHE = "response_cache"),
        (a.TRACKS = "tracks"),
        (a.ALBUMS = "albums"),
        (a.ALBUMS_TRACKS = "albums_tracks"),
        (a.ARTISTS = "artists"),
        (a.ARTISTS_TRACKS = "artists_tracks"),
        (a.USERS = "users"),
        (a.USERS_TRACKS = "users_tracks");
      let I = {
          name: d.ALBUMS,
          version: 1,
          restrictions: { attemptsCount: 3, count: 100 },
        },
        R = {
          name: d.ALBUMS_TRACKS,
          version: 1,
          restrictions: { attemptsCount: 3 },
        },
        S = {
          name: d.ARTISTS,
          version: 1,
          restrictions: { attemptsCount: 3, count: 100 },
        },
        A = {
          name: d.ARTISTS_TRACKS,
          version: 1,
          restrictions: { attemptsCount: 3 },
        },
        _ = {
          name: d.RESPONSE_CACHE,
          version: 1,
          restrictions: { attemptsCount: 3, count: 100 },
        };
      ((o = u || (u = {}))[(o.LOW = 1)] = "LOW"),
        (o[(o.MEDIUM = 2)] = "MEDIUM"),
        (o[(o.HIGH = 3)] = "HIGH");
      let D = {
          name: d.TRACKS,
          version: 1,
          restrictions: { attemptsCount: 3, count: 100 },
        },
        x = {
          name: d.USERS,
          version: 1,
          restrictions: { attemptsCount: 3, count: 100 },
        };
      ((n = h || (h = {})).TRACK = "track"), (n.ENTITY = "entity");
      let O = {
        name: d.USERS_TRACKS,
        version: 1,
        restrictions: { attemptsCount: 3 },
      };
      class P extends p.y {
        constructor(t, { code: e = "E_CACHE_CONTROLLER", ...r } = {}) {
          super("".concat("[CacheController]", " ").concat(t), {
            code: e,
            ...r,
          }),
            (0, y._)(this, "name", "CacheControllerException"),
            Object.setPrototypeOf(this, P.prototype);
        }
      }
      let F = [C.CN.REQUEST_TIMEOUT, C.CN.TEAPOT];
      class j {
        get shouldGetCache() {
          return (
            "number" == typeof this.variables.uid && this.variables.isOffline
          );
        }
        getRequestId(t) {
          return (0, k.createHash)("sha256")
            .update(JSON.stringify(t))
            .digest("hex");
        }
        async get(t, e) {
          if ("number" == typeof this.variables.uid)
            try {
              let r = await this.responseCacheRepository.get(
                this.variables.uid,
                t,
                e,
              );
              if (r) return r.response;
            } catch (e) {
              throw new P("Cache not found", {
                cause: e,
                data: { requestId: t, uid: this.variables.uid },
              });
            }
          throw new P("Cache not found", {
            data: { requestId: t, uid: String(this.variables.uid) },
          });
        }
        put(t) {
          let { requestId: e, response: r, uid: i, priority: a } = t,
            o = null != i ? i : this.variables.uid;
          "number" == typeof o &&
            this.responseCacheRepository.put({
              uid: o,
              requestId: e,
              priority: null != a ? a : u.LOW,
              response: r,
            });
        }
        async handleError(t, e, r) {
          if (!(t instanceof C.du) || F.includes(t.statusCode))
            return this.get(e, r);
          throw t;
        }
        constructor(t) {
          (0, y._)(this, "responseCacheRepository", void 0),
            (0, y._)(this, "variables", void 0),
            (this.responseCacheRepository = t.responseCacheRepository),
            (this.variables = t.variables);
        }
      }
      var L = r(8395);
      let N = (t) => (e) => e.id !== t || (e.stop(), !1);
      class U {
        injectTask(t) {
          this.queue.push(t), this.startNextDownload();
        }
        removeTask(t) {
          this.removeTaskFromQueue(t), this.removeTaskFromActiveDownloads(t);
        }
        startTask(t) {
          this.activeTasks.push(t),
            t.start().finally(() => {
              this.removeTaskFromActiveDownloads(t.id),
                this.startNextDownload();
            });
        }
        startNextDownload() {
          let t = this.activeTasks.length,
            e = this.variables.maxConcurrentDownloads - t;
          e > 0 &&
            this.queue.length > 0 &&
            this.queue.splice(0, e).forEach(this.startTask.bind(this));
        }
        removeTaskFromQueue(t) {
          this.queue = this.queue.filter(N(t));
        }
        removeTaskFromActiveDownloads(t) {
          this.activeTasks = this.activeTasks.filter(N(t));
        }
        constructor(t) {
          (0, y._)(this, "variables", void 0),
            (0, y._)(this, "events", new L.Q()),
            (0, y._)(this, "queue", []),
            (0, y._)(this, "activeTasks", []),
            (this.variables = t.variables);
        }
      }
      class K {
        apply(t) {
          let { hooks: e } = t;
          e.afterError.tapPromise("LoggerPlugin", async (t) => {
            let e;
            return (
              (e =
                t instanceof p.y
                  ? t
                  : new p.y("Error in Slam", { code: "E_SLAM", cause: t }))
                .cause instanceof Error && delete e.cause.stack,
              this.logger.error("[Slam] ".concat(e.message), {
                ...e.data,
                code: e.code,
                cause: e.cause,
              }),
              Promise.resolve()
            );
          });
        }
        constructor(t) {
          (0, y._)(this, "logger", void 0);
          let { logger: e } = t;
          this.logger = e;
        }
      }
      let M = { afterError: new (r(61279).AsyncSeriesHook)(["error"]) },
        B = () =>
          "undefined" == typeof navigator
            ? { isOffline: !1 }
            : { isOffline: !navigator.onLine };
      class q {
        updateStatus(t) {
          (this.status = B()), t(this.status);
        }
        subscribe(t) {
          this.updateStatus(t),
            window.addEventListener("online", this.updateStatus.bind(this, t)),
            window.addEventListener("offline", this.updateStatus.bind(this, t));
        }
        unsubscribe(t) {
          window.removeEventListener("online", this.updateStatus.bind(this, t)),
            window.removeEventListener(
              "offline",
              this.updateStatus.bind(this, t),
            );
        }
        constructor() {
          (0, y._)(this, "status", B());
        }
      }
      class H {
        download(t) {
          t.forEach((t) => {
            this.tracksController.download(t);
          });
        }
        stopDownload(t) {
          t.forEach((t) => {
            this.tracksController.stopDownload(t);
          });
        }
        delete(t) {
          t.forEach((t) => {
            this.tracksController.deleteTrack(t);
          });
        }
        constructor(t) {
          (0, y._)(this, "tracksController", void 0),
            (this.tracksController = t.tracksController);
        }
      }
      class W extends p.y {
        constructor(t, { code: e = "E_FILE_STORAGE", ...r } = {}) {
          super("".concat("[FileStorage]", " ").concat(t), { code: e, ...r }),
            (0, y._)(this, "name", "FileStorageException"),
            Object.setPrototypeOf(this, W.prototype);
        }
      }
      class G {
        async getRootDir() {
          try {
            let t = await this.rootDir;
            if (!this.isAvailable || !t)
              throw this.generateError("FileStorage is not available");
            return t;
          } catch (t) {
            throw this.generateError("FileStorage is not available", t);
          }
        }
        parsePath(t) {
          let e = t.split("/"),
            r = e.pop();
          if (!r) throw this.generateError("Invalid file path");
          return { name: r, dir: e.join("/") };
        }
        async getDirectoryRecursive(t, e, r) {
          let i = e.shift();
          if (!i) return t;
          let a = await t.getDirectoryHandle(i, r);
          return this.getDirectoryRecursive(a, e, r);
        }
        async getDirectory(t, e) {
          let r = t.split("/"),
            i = await this.getRootDir();
          return this.getDirectoryRecursive(i, r, e);
        }
        async getFile(t, e) {
          let { name: r, dir: i } = this.parsePath(t);
          return (await this.getDirectory(i, e)).getFileHandle(r, e);
        }
        async isFileExists(t) {
          try {
            return await this.getFile(t), !0;
          } catch (t) {
            return !1;
          }
        }
        async writeFile(t, e) {
          try {
            let r = await this.getFile(t, { create: !0 }),
              i = await r.createWritable();
            await i.write(e), await i.close();
          } catch (e) {
            throw this.generateError("Error when trying to write file", e, {
              path: t,
            });
          }
        }
        async readFile(t) {
          try {
            let e = await this.getFile(t);
            return await e.getFile();
          } catch (e) {
            throw this.generateError("Error when trying to read file", e, {
              path: t,
            });
          }
        }
        async deleteFile(t, e) {
          try {
            if (!(await this.isFileExists(t))) return;
            let { name: r, dir: i } = this.parsePath(t),
              a = await this.getDirectory(i);
            return await a.removeEntry(r, e);
          } catch (e) {
            throw this.generateError("Error when trying to delete file", e, {
              path: t,
            });
          }
        }
        async createFileURL(t) {
          try {
            let e = await this.getFile(t),
              r = await e.getFile();
            return URL.createObjectURL(r);
          } catch (e) {
            throw this.generateError(
              "Error when trying to create file URL",
              e,
              { path: t },
            );
          }
        }
        async getEstimate() {
          var t, e;
          return (
            null === (e = window.navigator) || void 0 === e
              ? void 0
              : null === (t = e.storage) || void 0 === t
                ? void 0
                : t.estimate
          )
            ? window.navigator.storage.estimate().catch(() => ({}))
            : {};
        }
        generateError(t, e, r) {
          return new W(t, {
            cause: e instanceof Error ? e.message : String(e),
            data: { errorMeta: { estimate: this.estimate }, ...r },
          });
        }
        constructor() {
          (0, y._)(this, "rootDir", void 0),
            (0, y._)(this, "isAvailable", !0),
            (0, y._)(this, "estimate", {}),
            (this.rootDir = window.navigator.storage.getDirectory()),
            this.getEstimate().then((t) => {
              this.estimate = t;
            });
        }
      }
      class V extends p.y {
        constructor(t, { code: e = "E_IDB_REPOSITORY", ...r } = {}) {
          super("".concat("[IndexedDB]", " ").concat(t), { code: e, ...r }),
            (0, y._)(this, "name", "IdbRepositoryException"),
            Object.setPrototypeOf(this, V.prototype);
        }
      }
      class z {
        async clearAll() {
          return this.executeTransaction(async (t) =>
            t.clear(this.config.name),
          );
        }
        async executeTransaction(t) {
          let e = await this.idb;
          if (!this.isIdbAvailable || !e)
            throw this.generateError("IdbRepository is not available");
          return t(e);
        }
        async count() {
          return this.executeTransaction(async (t) =>
            t.count(this.config.name),
          );
        }
        async openIdb() {
          return new T.r(
            "".concat("music_slam", "_").concat(this.config.name),
          ).openDB(this.config.version, {
            onBlocked: (t, e, r) => {
              var i, a;
              this.onError(),
                null === (a = this.handlers) ||
                  void 0 === a ||
                  null === (i = a.onBlocked) ||
                  void 0 === i ||
                  i.call(a, t, e, r);
            },
            onBlocking: (t, e, r) => {
              var i, a;
              this.onError(),
                null === (a = this.handlers) ||
                  void 0 === a ||
                  null === (i = a.onBlocking) ||
                  void 0 === i ||
                  i.call(a, t, e, r);
            },
            onTerminated: () => {
              var t, e;
              this.onError(),
                null === (e = this.handlers) ||
                  void 0 === e ||
                  null === (t = e.onTerminated) ||
                  void 0 === t ||
                  t.call(e);
            },
            onUpgrade: (t, e, r, i, a) => {
              var o, n;
              null === (n = this.handlers) ||
                void 0 === n ||
                null === (o = n.onUpgrade) ||
                void 0 === o ||
                o.call(n, t, e, r, i, a);
            },
          });
        }
        onError() {
          this.closeConnection().finally(() => {
            this.attemptsConnection < this.config.restrictions.attemptsCount
              ? (this.attemptsConnection++, (this.idb = this.openIdb()))
              : (this.isIdbAvailable = !1);
          });
        }
        async closeConnection() {
          let t = await this.idb;
          t && t.close();
        }
        async getEstimate() {
          var t, e;
          return (
            null === (e = window.navigator) || void 0 === e
              ? void 0
              : null === (t = e.storage) || void 0 === t
                ? void 0
                : t.estimate
          )
            ? window.navigator.storage.estimate().catch(() => ({}))
            : {};
        }
        generateError(t, e, r) {
          return new V(t, {
            cause: e instanceof Error ? e.message : String(e),
            data: {
              errorMeta: {
                repository: {
                  name: String(this.config.name),
                  version: this.config.version,
                },
                estimate: this.estimate,
              },
              ...r,
            },
          });
        }
        constructor({ config: t, handlers: e }) {
          (0, y._)(this, "idb", void 0),
            (0, y._)(this, "config", void 0),
            (0, y._)(this, "handlers", void 0),
            (0, y._)(this, "attemptsConnection", 0),
            (0, y._)(this, "isIdbAvailable", !0),
            (0, y._)(this, "estimate", {}),
            (this.config = t),
            (this.handlers = e),
            (this.idb = this.openIdb()),
            this.getEstimate().then((t) => {
              this.estimate = t;
            });
        }
      }
      class Y extends z {
        async put(t) {
          return this.executeTransaction(async (e) => {
            var r;
            let i = await e.get(I.name, String(t.id)),
              a = Date.now(),
              o =
                null !== (r = null == i ? void 0 : i.createdAt) && void 0 !== r
                  ? r
                  : a;
            return e.put(
              I.name,
              { meta: t, updatedAt: a, createdAt: o },
              String(t.id),
            );
          }).catch((e) => {
            throw this.generateError("Error when trying to put data", e, {
              albumId: t.id,
            });
          });
        }
        async get(t) {
          return this.executeTransaction(async (e) => {
            var r;
            let i = await e.get(I.name, t);
            return null !== (r = null == i ? void 0 : i.meta) && void 0 !== r
              ? r
              : null;
          }).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              albumId: t,
            });
          });
        }
        async delete(t) {
          return this.executeTransaction(async (e) =>
            e.delete(I.name, t),
          ).catch((e) => {
            throw this.generateError("Error when trying to delete data", e, {
              albumId: t,
            });
          });
        }
        constructor() {
          super({
            config: I,
            handlers: {
              onUpgrade: (t) => {
                t.createObjectStore(I.name);
              },
            },
          });
        }
      }
      let Q = "albumId",
        J = "trackId",
        Z = (t, e) => "".concat(t, ":").concat(e);
      class X extends z {
        async put(t, e) {
          return this.executeTransaction(async (r) =>
            r.put(R.name, { trackId: t, albumId: e }, Z(t, e)),
          ).catch((r) => {
            throw this.generateError("Error when trying to put data", r, {
              trackId: t,
              albumId: e,
            });
          });
        }
        async get(t, e) {
          return this.executeTransaction(async (r) => {
            let i = await r.get(R.name, Z(t, e));
            return null != i ? i : null;
          }).catch((r) => {
            throw this.generateError("Error when trying to get data", r, {
              trackId: t,
              albumId: e,
            });
          });
        }
        async getTracksByAlbumId(t) {
          return this.executeTransaction(async (e) =>
            (await e.getAllFromIndex(R.name, Q, t)).map((t) => t.trackId),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              albumId: t,
            });
          });
        }
        async getAlbumsByTrackId(t) {
          return this.executeTransaction(async (e) =>
            (await e.getAllFromIndex(R.name, J, t)).map((t) => t.albumId),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              trackId: t,
            });
          });
        }
        async delete(t, e) {
          return this.executeTransaction(async (r) =>
            r.delete(R.name, Z(t, e)),
          ).catch((r) => {
            throw this.generateError("Error when trying to delete data", r, {
              trackId: t,
              albumId: e,
            });
          });
        }
        async getCountByAlbum(t) {
          return this.executeTransaction(async (e) =>
            e.countFromIndex(R.name, Q, t),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              albumId: t,
            });
          });
        }
        constructor() {
          super({
            config: R,
            handlers: {
              onUpgrade: (t) => {
                let e = t.createObjectStore(R.name);
                e.createIndex(Q, "albumId"), e.createIndex(J, "trackId");
              },
            },
          });
        }
      }
      class $ extends z {
        async put(t) {
          return this.executeTransaction(async (e) => {
            var r;
            let i = await e.get(S.name, String(t.id)),
              a = Date.now(),
              o =
                null !== (r = null == i ? void 0 : i.createdAt) && void 0 !== r
                  ? r
                  : a;
            return e.put(
              S.name,
              { meta: t, updatedAt: a, createdAt: o },
              String(t.id),
            );
          }).catch((e) => {
            throw this.generateError("Error when trying to put data", e, {
              artistId: t.id,
            });
          });
        }
        async get(t) {
          return this.executeTransaction(async (e) => {
            var r;
            let i = await e.get(S.name, t);
            return null !== (r = null == i ? void 0 : i.meta) && void 0 !== r
              ? r
              : null;
          }).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              artistId: t,
            });
          });
        }
        async delete(t) {
          return this.executeTransaction(async (e) =>
            e.delete(S.name, t),
          ).catch((e) => {
            throw this.generateError("Error when trying to delete data", e, {
              artistId: t,
            });
          });
        }
        constructor() {
          super({
            config: S,
            handlers: {
              onUpgrade: (t) => {
                t.createObjectStore(S.name);
              },
            },
          });
        }
      }
      let tt = "artistId",
        te = "trackId",
        tr = (t, e) => "".concat(t, ":").concat(e);
      class ti extends z {
        async put(t) {
          let { trackId: e, artistId: r } = t;
          return this.executeTransaction(async (i) =>
            i.put(A.name, t, tr(e, r)),
          ).catch((t) => {
            throw this.generateError("Error when trying to put data", t, {
              artistId: r,
              trackId: e,
            });
          });
        }
        async get(t, e) {
          return this.executeTransaction(async (r) => {
            let i = await r.get(A.name, tr(t, e));
            return null != i ? i : null;
          }).catch((r) => {
            throw this.generateError("Error when trying to get data", r, {
              trackId: t,
              artistId: e,
            });
          });
        }
        async getArtistsByTrackId(t) {
          return this.executeTransaction(async (e) =>
            (await e.getAllFromIndex(A.name, te, t)).sort(
              (t, e) => t.artistIndex - e.artistIndex,
            ),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              trackId: t,
            });
          });
        }
        async getTracksByArtistId(t) {
          return this.executeTransaction(async (e) =>
            (await e.getAllFromIndex(A.name, tt, t)).sort(
              (t, e) => t.artistIndex - e.artistIndex,
            ),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              artistId: t,
            });
          });
        }
        async delete(t, e) {
          return this.executeTransaction(async (r) =>
            r.delete(A.name, tr(t, e)),
          ).catch((r) => {
            throw this.generateError("Error when trying to delete data", r, {
              artistId: e,
              trackId: t,
            });
          });
        }
        async getCountByArtist(t) {
          return this.executeTransaction(async (e) =>
            e.countFromIndex(A.name, tt, t),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              artistId: t,
            });
          });
        }
        constructor() {
          super({
            config: A,
            handlers: {
              onUpgrade: (t) => {
                let e = t.createObjectStore(A.name);
                e.createIndex(te, "trackId"), e.createIndex(tt, "artistId");
              },
            },
          });
        }
      }
      let ta = "priority_updatedAt",
        to = (t, e) => "".concat(t, ":").concat(e);
      class tn extends z {
        async put(t) {
          let { uid: e, requestId: r } = t;
          return this.executeTransaction(async (i) => {
            var a;
            let o = await this.get(e, r),
              n = Date.now(),
              s =
                null !== (a = null == o ? void 0 : o.createdAt) && void 0 !== a
                  ? a
                  : n,
              c = { ...t, updatedAt: n, createdAt: s },
              l = await i.count(_.name);
            return (
              o ||
                l < Number(_.restrictions.count) ||
                (await this.deleteResponseByLowPriority()),
              i.put(_.name, c, to(e, r))
            );
          }).catch((t) => {
            throw this.generateError("Error when trying to put data", t, {
              uid: e,
              requestId: r,
            });
          });
        }
        async get(t, e, r) {
          let i = await this.getResponse(t, e);
          return i && r && Date.now() - i.updatedAt > r
            ? (await this.delete(t, e), null)
            : null != i
              ? i
              : null;
        }
        async getResponse(t, e) {
          return this.executeTransaction(async (r) => {
            let i = to(t, e),
              a = await r.get(_.name, i);
            return null != a ? a : null;
          }).catch((r) => {
            throw this.generateError("Error when trying to get data", r, {
              uid: t,
              requestId: e,
            });
          });
        }
        async delete(t, e) {
          return this.executeTransaction(async (r) =>
            r.delete(_.name, to(t, e)),
          ).catch((r) => {
            throw this.generateError("Error when trying to delete data", r, {
              uid: t,
              requestId: e,
            });
          });
        }
        async deleteResponseByLowPriority() {
          return this.executeTransaction(async (t) => {
            let e = t
                .transaction([_.name], "readwrite")
                .objectStore(_.name)
                .index(ta),
              r = await e.openCursor();
            return null == r ? void 0 : r.delete();
          }).catch((t) => {
            throw this.generateError("Error when trying to delete data", t);
          });
        }
        constructor() {
          super({
            config: _,
            handlers: {
              onUpgrade: (t) => {
                t.createObjectStore(_.name).createIndex(ta, [
                  "priority",
                  "updatedAt",
                ]);
              },
            },
          });
        }
      }
      class ts extends z {
        async put(t) {
          return this.executeTransaction(async (e) => {
            var r;
            let i = await e.get(D.name, t.id),
              a = Date.now(),
              o =
                null !== (r = null == i ? void 0 : i.createdAt) && void 0 !== r
                  ? r
                  : a;
            return e.put(
              D.name,
              { ...i, meta: t, updatedAt: a, createdAt: o },
              t.id,
            );
          }).catch((e) => {
            throw this.generateError("Error when trying to put data", e, {
              trackId: t.id,
            });
          });
        }
        async get(t) {
          return this.executeTransaction(async (e) => {
            let r = await e.get(D.name, t);
            return null != r ? r : null;
          }).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              trackId: t,
            });
          });
        }
        async getAllIds() {
          return this.executeTransaction(async (t) =>
            t.getAllKeys(D.name),
          ).catch((t) => {
            throw this.generateError("Error when trying to get data", t);
          });
        }
        async putDecryptKey(t, e) {
          return this.executeTransaction(async (r) => {
            var i;
            let a = await r.get(D.name, t);
            if (!a) throw new V("Track not found");
            let o = Date.now(),
              n =
                null !== (i = null == a ? void 0 : a.createdAt) && void 0 !== i
                  ? i
                  : o;
            return r.put(
              D.name,
              { meta: a.meta, decryptKey: e, updatedAt: o, createdAt: n },
              t,
            );
          }).catch((e) => {
            throw this.generateError("Error when trying to put data", e, {
              trackId: t,
            });
          });
        }
        async putTrackAvailable(t, e) {
          return this.executeTransaction(async (r) => {
            var i;
            let a = await r.get(D.name, t);
            if (!a) throw new V("Track not found");
            let o = Date.now(),
              n =
                null !== (i = null == a ? void 0 : a.createdAt) && void 0 !== i
                  ? i
                  : o,
              { meta: s } = a;
            return r.put(
              D.name,
              {
                ...a,
                meta: { ...s, available: e },
                updatedAt: o,
                createdAt: n,
              },
              t,
            );
          }).catch((e) => {
            throw this.generateError("Error when trying to put data", e, {
              trackId: t,
            });
          });
        }
        async getDecryptKey(t) {
          return this.executeTransaction(async (e) => {
            var r;
            let i = await e.get(D.name, t);
            return null !== (r = null == i ? void 0 : i.decryptKey) &&
              void 0 !== r
              ? r
              : null;
          }).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              trackId: t,
            });
          });
        }
        async delete(t) {
          return this.executeTransaction(async (e) =>
            e.delete(D.name, t),
          ).catch((e) => {
            throw this.generateError("Error when trying to delete data", e, {
              trackId: t,
            });
          });
        }
        constructor() {
          super({
            config: D,
            handlers: {
              onUpgrade: (t) => {
                t.createObjectStore(D.name);
              },
            },
          });
        }
      }
      class tc extends z {
        async put(t) {
          return this.executeTransaction(async (e) => {
            var r;
            let i = await e.get(x.name, t.uid),
              a = Date.now(),
              o =
                null !== (r = null == i ? void 0 : i.createdAt) && void 0 !== r
                  ? r
                  : a;
            return e.put(x.name, { ...t, updatedAt: a, createdAt: o }, t.uid);
          }).catch((e) => {
            throw this.generateError("Error when trying to put data", e, {
              uid: t.uid,
            });
          });
        }
        async get(t) {
          return this.executeTransaction(async (e) => {
            let r = await e.get(x.name, t);
            return null != r ? r : null;
          }).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              uid: t,
            });
          });
        }
        async delete(t) {
          return this.executeTransaction(async (e) =>
            e.delete(x.name, t),
          ).catch((e) => {
            throw this.generateError("Error when trying to delete data", e, {
              uid: t,
            });
          });
        }
        constructor() {
          super({
            config: x,
            handlers: {
              onUpgrade: (t) => {
                t.createObjectStore(x.name);
              },
            },
          });
        }
      }
      let tl = "trackId",
        td = (t, e) => "".concat(t, ":").concat(e);
      class tu extends z {
        async put(t) {
          let { uid: e, trackId: r } = t;
          return this.executeTransaction(async (i) => {
            var a;
            let o = td(e, r),
              n = await i.get(O.name, o),
              s = Date.now(),
              c =
                null !== (a = null == n ? void 0 : n.createdAt) && void 0 !== a
                  ? a
                  : s;
            return i.put(O.name, { ...t, updatedAt: s, createdAt: c }, o);
          }).catch((t) => {
            throw this.generateError("Error when trying to put data", t, {
              uid: e,
              trackId: r,
            });
          });
        }
        async get(t, e) {
          return this.executeTransaction(async (r) => {
            let i = await r.get(O.name, td(t, e));
            return null != i ? i : null;
          }).catch((r) => {
            throw this.generateError("Error when trying to get data", r, {
              uid: t,
              trackId: e,
            });
          });
        }
        async getTracksByUid(t) {
          return this.executeTransaction(async (e) =>
            (await e.getAllFromIndex(O.name, "uid", t))
              .sort((t, e) => e.createdAt - t.createdAt)
              .map((t) => {
                let { trackId: e, albumId: r } = t;
                return String((0, w.i)(e, r));
              }),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              uid: t,
            });
          });
        }
        async delete(t, e) {
          return this.executeTransaction(async (r) =>
            r.delete(O.name, td(t, e)),
          ).catch((r) => {
            throw this.generateError("Error when trying to delete data", r, {
              uid: t,
              trackId: e,
            });
          });
        }
        async getCountByTrackId(t) {
          return this.executeTransaction(async (e) =>
            e.countFromIndex(O.name, tl, t),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              trackId: t,
            });
          });
        }
        async getCountByUid(t) {
          return this.executeTransaction(async (e) =>
            e.countFromIndex(O.name, "uid", t),
          ).catch((e) => {
            throw this.generateError("Error when trying to get data", e, {
              uid: t,
            });
          });
        }
        constructor() {
          super({
            config: O,
            handlers: {
              onUpgrade: (t) => {
                let e = t.createObjectStore(O.name);
                e.createIndex("uid", "uid"), e.createIndex(tl, "trackId");
              },
            },
          });
        }
      }
      let th = (t) => {
        let {
            useFileStorage: e,
            useResponseCacheStorage: r,
            useEntitiesStorage: i,
          } = t,
          a = {};
        return (
          e && (a.fileStorage = new G()),
          r && (a.responseCacheRepository = new tn()),
          i &&
            ((a.albumsRepository = new Y()),
            (a.albumsTracksRepository = new X()),
            (a.artistsRepository = new $()),
            (a.artistsTracksRepository = new ti()),
            (a.tracksRepository = new ts()),
            (a.usersRepository = new tc()),
            (a.usersTracksRepository = new tu())),
          a
        );
      };
      var tv = r(3664),
        tg = r(63660),
        ty = r(85392),
        tp = r(23439);
      class tm extends p.y {
        constructor(t, { code: e = "E_DOWNLOADER", ...r } = {}) {
          super("".concat("[Downloader]", " ").concat(t), { code: e, ...r }),
            (0, y._)(this, "name", "DownloaderException"),
            Object.setPrototypeOf(this, tm.prototype);
        }
      }
      class tf {
        async getFileInfo(t, e) {
          let r = (0, ty.I)(),
            i = this.variables.codecs.join(""),
            a = ""
              .concat(r)
              .concat(t)
              .concat(e)
              .concat(i)
              .concat(this.transport),
            o = await (0, ty.U)({ secretKey: this.secretKey, data: a });
          return this.getFileInfoResource.getFileInfo({
            tsInSeconds: r,
            trackId: t,
            quality: e,
            codecs: this.variables.codecs,
            transports: [this.transport],
            sign: o,
          });
        }
        async getImage(t, e) {
          try {
            let r = (0, tg.createAvatarUrl)(t, this.variables.coverSize, !1),
              i = await fetch(r, { cache: "no-store" }),
              a = await i.blob();
            e(a);
          } catch (e) {
            this.hooks.afterError.promise(
              new tm("Error when downloading image", {
                cause: String(e),
                data: { src: t },
              }),
            );
          }
        }
        async start() {
          try {
            var t;
            let [e] = await this.tracksResource.getTracksMeta({
              trackIds: [this.id],
            });
            if (!e || !e.available) {
              this.handleDownloadError(
                "Track is not defined or is not available",
              );
              return;
            }
            let r = String(e.id);
            this.events.emit(l.TRACK_META_RECEIVED, e),
              e.coverUri &&
                this.getImage(e.coverUri, (t) => {
                  this.events.emit(l.TRACK_IMAGE_RECEIVED, this.id, t);
                }),
              null === (t = e.artists) ||
                void 0 === t ||
                t.forEach((t) => {
                  var e;
                  (null === (e = t.cover) || void 0 === e ? void 0 : e.uri) &&
                    this.getImage(t.cover.uri, (e) => {
                      this.events.emit(l.ARTIST_IMAGE_RECEIVED, t.id, e);
                    });
                });
            let { downloadInfo: i } = await this.getFileInfo(
              r,
              this.variables.quality,
            );
            if ("error" in i || i.transport !== tp.J.ENCRAW) {
              this.handleDownloadError(
                "Erorr in download info or transport is not encraw",
              );
              return;
            }
            this.events.emit(l.TRACK_DECRYPT_KEY_RECEIVED, r, i.key);
            let a = null,
              o = 0,
              n = [],
              s = i.urls[0];
            if (!s) {
              this.handleDownloadError("Src is not defined");
              return;
            }
            let c = async () => {
              if (this.isStopped) return;
              let t = 0;
              null === a || o + this.variables.chunkSize < a
                ? (t = o + this.variables.chunkSize - 1)
                : o + this.variables.chunkSize >= a && (t = a);
              let {
                contentLength: e,
                data: r,
                contentRange: i,
              } = await this.getFileInfoResource.getByteRange({
                srcUrl: s,
                start: o,
                end: t,
              });
              (o += e),
                (a = Number(i.split("/")[1])),
                n.push(r),
                this.events.emit(
                  l.CHUNK_MEDIA_FILE_RECEIVED,
                  this.id,
                  Math.floor((o / a) * 100),
                ),
                null !== a && o < a && (await c());
            };
            await c(),
              o === a
                ? (this.events.emit(
                    l.MEDIA_FILE_RECEIVED,
                    this.id,
                    new Blob(n),
                  ),
                  this.events.emit(l.TRACK_DOWNLOAD_FINISHED, this.id))
                : this.events.emit(l.TRACK_DOWNLOAD_STOPPED, this.id);
          } catch (t) {
            this.handleDownloadError(String(t));
          }
        }
        stop() {
          this.isStopped = !0;
        }
        handleDownloadError(t) {
          this.hooks.afterError.promise(
            new tm("Error when downloading track", {
              cause: t,
              data: { id: this.id },
            }),
          ),
            this.events.emit(l.TRACK_DOWNLOAD_FAILED, this.id);
        }
        constructor(t, e) {
          (0, y._)(this, "id", void 0),
            (0, y._)(this, "isStopped", !1),
            (0, y._)(this, "tracksResource", void 0),
            (0, y._)(this, "getFileInfoResource", void 0),
            (0, y._)(this, "secretKey", void 0),
            (0, y._)(this, "transport", void 0),
            (0, y._)(this, "variables", void 0),
            (0, y._)(this, "hooks", void 0),
            (0, y._)(this, "events", new L.Q()),
            (this.id = t),
            (this.tracksResource = e.tracksResource),
            (this.getFileInfoResource = e.getFileInfoResource),
            (this.secretKey = e.secretKey),
            (this.transport = e.transport),
            (this.variables = e.variables),
            (this.events = e.events),
            (this.hooks = e.hooks);
        }
      }
      ((s = v || (v = {})).IDLE = "IDLE"),
        (s.DOWNLOADING = "DOWNLOADING"),
        (s.DOWNLOADED = "DOWNLOADED"),
        (s.DOWNLOAD_FAILED = "DOWNLOAD_FAILED"),
        (s.REMOVING = "REMOVING");
      class tw extends p.y {
        constructor(t, { code: e = "E_TRACKS_CONTROLLER", ...r } = {}) {
          super("".concat("[TracksController]", " ").concat(t), {
            code: e,
            ...r,
          }),
            (0, y._)(this, "name", "TracksControllerException"),
            Object.setPrototypeOf(this, tw.prototype);
        }
      }
      let tb = (t) => "images/tracks/".concat(t),
        tE = (t) => "tracks/".concat(t);
      var tk = r(96710);
      let tC = (t) => "object" == typeof t && "id" in t;
      class tT {
        async putTrackArtists(t) {
          let e = 0;
          if (!t.artists) return Promise.resolve();
          let r = [];
          return (
            t.artists.forEach((i) => {
              let { decomposed: a, ...o } = i;
              r.push({
                artistMeta: o,
                artistTrack: {
                  artistId: String(i.id),
                  trackId: String(t.id),
                  artistIndex: e,
                },
              }),
                e++;
              let n = "";
              a &&
                a.length > 0 &&
                a.forEach((i) => {
                  if ("string" == typeof i) {
                    n = i;
                    return;
                  }
                  r.push({
                    artistMeta: i,
                    artistTrack: {
                      artistId: String(i.id),
                      trackId: String(t.id),
                      artistIndex: e,
                      decomposed: !0,
                      prefix: n,
                    },
                  }),
                    e++,
                    (n = "");
                });
            }),
            Promise.all(
              r.map(async (t) => {
                var e, r;
                let { artistMeta: i, artistTrack: a } = t;
                return Promise.all([
                  null === (e = this.repositoryContainer.artistsRepository) ||
                  void 0 === e
                    ? void 0
                    : e.put(i),
                  null ===
                    (r = this.repositoryContainer.artistsTracksRepository) ||
                  void 0 === r
                    ? void 0
                    : r.put(a),
                ]);
              }),
            )
          );
        }
        async putTrackAlbums(t) {
          return t.albums
            ? Promise.all(
                t.albums.map(async (e) => {
                  var r, i;
                  let { artists: a, ...o } = e;
                  return Promise.all([
                    null === (r = this.repositoryContainer.albumsRepository) ||
                    void 0 === r
                      ? void 0
                      : r.put(o),
                    null ===
                      (i = this.repositoryContainer.albumsTracksRepository) ||
                    void 0 === i
                      ? void 0
                      : i.put(String(t.id), String(o.id)),
                  ]);
                }),
              )
            : Promise.resolve();
        }
        async getTrackArtists(t) {
          var e;
          let r;
          let i = await (null ===
            (e = this.repositoryContainer.artistsTracksRepository) ||
          void 0 === e
            ? void 0
            : e.getArtistsByTrackId(t));
          if (!(null == i ? void 0 : i.length)) return [];
          let a = await Promise.all(
              i.map(async (t) => {
                var e;
                let { artistId: r } = t;
                return null ===
                  (e = this.repositoryContainer.artistsRepository) ||
                  void 0 === e
                  ? void 0
                  : e.get(r);
              }),
            ),
            o = [];
          return (
            i.forEach((t, e) => {
              let { decomposed: i, prefix: n } = t,
                s = a[e];
              if (s) {
                if (!i && tC(s)) {
                  (r = s), o.push(s);
                  return;
                }
                r &&
                  (void 0 === r.decomposed && (r.decomposed = []),
                  n && r.decomposed.push(n),
                  r.decomposed.push(s));
              }
            }),
            o
          );
        }
        async getTrackAlbums(t, e) {
          var r, i;
          let a = [];
          if (e) {
            let t = await (null ===
              (r = this.repositoryContainer.albumsRepository) || void 0 === r
              ? void 0
              : r.get(e));
            t && a.push({ ...t, artists: [] });
          } else {
            let e = await (null ===
              (i = this.repositoryContainer.albumsTracksRepository) ||
            void 0 === i
              ? void 0
              : i.getAlbumsByTrackId(t));
            if (!(null == e ? void 0 : e.length)) return a;
            (
              await Promise.all(
                e.map(async (t) =>
                  this.repositoryContainer.albumsRepository
                    ? this.repositoryContainer.albumsRepository.get(t)
                    : null,
                ),
              )
            ).forEach((t) => {
              t && a.push({ ...t, artists: [] });
            });
          }
          return a;
        }
        async deleteTrackArtists(t) {
          var e;
          let r = await (null ===
            (e = this.repositoryContainer.artistsTracksRepository) ||
          void 0 === e
            ? void 0
            : e.getArtistsByTrackId(t));
          return (null == r ? void 0 : r.length)
            ? Promise.all(
                r.map(async (e) => {
                  var r, i, a, o;
                  let { artistId: n } = e;
                  return (await (null ===
                    (r = this.repositoryContainer.artistsTracksRepository) ||
                  void 0 === r
                    ? void 0
                    : r.delete(t, n)),
                  0 ===
                    (await (null ===
                      (i = this.repositoryContainer.artistsTracksRepository) ||
                    void 0 === i
                      ? void 0
                      : i.getCountByArtist(n))))
                    ? Promise.all([
                        null === (a = this.repositoryContainer.fileStorage) ||
                        void 0 === a
                          ? void 0
                          : a.deleteFile(f(n)),
                        null ===
                          (o = this.repositoryContainer.artistsRepository) ||
                        void 0 === o
                          ? void 0
                          : o.delete(n),
                      ])
                    : Promise.resolve();
                }),
              )
            : Promise.resolve();
        }
        async deleteTrackAlbums(t) {
          var e;
          let r = await (null ===
            (e = this.repositoryContainer.albumsTracksRepository) ||
          void 0 === e
            ? void 0
            : e.getAlbumsByTrackId(t));
          return (null == r ? void 0 : r.length)
            ? Promise.all(
                r.map(async (e) => {
                  var r, i, a;
                  return (await (null ===
                    (r = this.repositoryContainer.albumsTracksRepository) ||
                  void 0 === r
                    ? void 0
                    : r.delete(t, e)),
                  0 ===
                    (await (null ===
                      (i = this.repositoryContainer.albumsTracksRepository) ||
                    void 0 === i
                      ? void 0
                      : i.getCountByAlbum(e))))
                    ? null ===
                        (a = this.repositoryContainer.albumsRepository) ||
                      void 0 === a
                      ? void 0
                      : a.delete(e)
                    : Promise.resolve();
                }),
              )
            : Promise.resolve();
        }
        async saveTrack(t) {
          var e;
          let r = (0, tk.Z)(t);
          return (
            delete r.albums,
            delete r.artists,
            Promise.all([
              null === (e = this.repositoryContainer.tracksRepository) ||
              void 0 === e
                ? void 0
                : e.put(r),
              this.putTrackAlbums(t),
              this.putTrackArtists(t),
            ])
          );
        }
        async getTrack(t) {
          var e, r;
          let [i, a] = (0, w.f)(t);
          if (!i) return null;
          let o = await (null ===
            (e = this.repositoryContainer.tracksRepository) || void 0 === e
            ? void 0
            : e.get(i));
          if (!o) return null;
          let n = o.meta;
          return (
            n.coverUri &&
              (n.coverUri = await (null ===
                (r = this.repositoryContainer.fileStorage) || void 0 === r
                ? void 0
                : r.createFileURL(tb(t)))),
            (n.albums = await this.getTrackAlbums(String(n.id), a)),
            (n.artists = await this.getTrackArtists(String(n.id))),
            n
          );
        }
        async deleteTrack(t, e) {
          var r, i, a;
          return Promise.all([
            null === (r = this.repositoryContainer.fileStorage) || void 0 === r
              ? void 0
              : r.deleteFile(tE(t)),
            null === (i = this.repositoryContainer.fileStorage) || void 0 === i
              ? void 0
              : i.deleteFile(tb(String((0, w.i)(t, e)))),
            null === (a = this.repositoryContainer.tracksRepository) ||
            void 0 === a
              ? void 0
              : a.delete(t),
            this.deleteTrackAlbums(t),
            this.deleteTrackArtists(t),
          ]);
        }
        constructor({ repositoryContainer: t }) {
          (0, y._)(this, "repositoryContainer", void 0),
            (this.repositoryContainer = t);
        }
      }
      ((c = g || (g = {})).TRACK_CHANGED = "track_changed"),
        (c.STATE_CHANGED = "state_changed");
      let tI = [v.IDLE, v.DOWNLOAD_FAILED],
        tR = [v.IDLE, v.DOWNLOADING];
      class tS {
        async initTracksState() {
          try {
            var t;
            let e = await (null ===
              (t = this.repositoryContainer.usersTracksRepository) ||
            void 0 === t
              ? void 0
              : t.getTracksByUid(this.userConfig.uid));
            (null == e ? void 0 : e.length) &&
              (this.state = e.reduce((t, e) => {
                let [r] = (0, w.f)(e);
                return r && (t[r] = { loadingState: v.DOWNLOADED }), t;
              }, {})),
              this.events.emit(g.STATE_CHANGED, this.state);
          } catch (t) {
            this.hooks.afterError.promise(
              new tw("Failed to init tracks state", { cause: t }),
            );
          }
        }
        async clearAll() {
          try {
            var t;
            let e = await (null ===
              (t = this.repositoryContainer.usersTracksRepository) ||
            void 0 === t
              ? void 0
              : t.getTracksByUid(this.userConfig.uid));
            null == e ||
              e.forEach((t) => {
                this.deleteTrack(t);
              }),
              (this.state = {}),
              this.events.emit(g.STATE_CHANGED, this.state);
          } catch (t) {
            this.hooks.afterError.promise(
              new tw("Failed to clear all tracks", { cause: t }),
            );
          }
        }
        async validateTracks() {
          try {
            var t;
            let e = await (null ===
              (t = this.repositoryContainer.tracksRepository) || void 0 === t
              ? void 0
              : t.getAllIds());
            e &&
              e.forEach(async (t) => {
                var e;
                let r = String(t),
                  i = await (null ===
                    (e = this.repositoryContainer.usersTracksRepository) ||
                  void 0 === e
                    ? void 0
                    : e.getCountByTrackId(r));
                0 === i && this.deleteTrack(r);
              });
          } catch (t) {
            this.hooks.afterError.promise(
              new tw("Failed to validate tracks", { cause: t }),
            );
          }
        }
        download(t) {
          var e;
          let [r] = (0, w.f)(t);
          if (!r) return;
          let i =
            null === (e = this.state[r]) || void 0 === e
              ? void 0
              : e.loadingState;
          (!this.state[r] || (i && tI.includes(i))) &&
            this.downloader.injectTask(
              new tf(String(t), this.trackDownloadTaskParams),
            );
        }
        stopDownload(t) {
          var e;
          let [r] = (0, w.f)(t);
          if (!r) return;
          let i =
            null === (e = this.state[r]) || void 0 === e
              ? void 0
              : e.loadingState;
          (!this.state[r] || (i && tR.includes(i))) &&
            (this.changeState(r, { loadingState: v.IDLE }),
            this.downloader.removeTask(String(t)));
        }
        async getTracks(t) {
          let e = t;
          if (!t) {
            var r;
            e = await (null ===
              (r = this.repositoryContainer.usersTracksRepository) ||
            void 0 === r
              ? void 0
              : r.getTracksByUid(this.userConfig.uid));
          }
          return e
            ? (
                await Promise.all(
                  null == e ? void 0 : e.map(async (t) => this.getTrack(t)),
                )
              ).filter((t) => null !== t)
            : [];
        }
        async getTracksCount() {
          var t;
          let e = await (null ===
            (t = this.repositoryContainer.usersTracksRepository) || void 0 === t
            ? void 0
            : t.getCountByUid(this.userConfig.uid));
          return null != e ? e : 0;
        }
        async getTrack(t) {
          try {
            return await this.trackManager.getTrack(t);
          } catch (e) {
            return (
              this.hooks.afterError.promise(
                new tw("Failed to get track", { cause: e, data: { id: t } }),
              ),
              null
            );
          }
        }
        async deleteTrack(t) {
          try {
            var e, r;
            let [i, a] = (0, w.f)(t);
            if (!i) return;
            this.changeState(i, { loadingState: v.REMOVING }),
              await (null ===
                (e = this.repositoryContainer.usersTracksRepository) ||
              void 0 === e
                ? void 0
                : e.delete(this.userConfig.uid, i));
            let o = await (null ===
              (r = this.repositoryContainer.usersTracksRepository) ||
            void 0 === r
              ? void 0
              : r.getCountByTrackId(i));
            if (0 !== o) return;
            await this.trackManager.deleteTrack(i, a),
              this.changeState(i, { loadingState: v.IDLE });
          } catch (e) {
            this.hooks.afterError.promise(
              new tw("Failed to delete track", { cause: e, data: { id: t } }),
            );
          }
        }
        async refreshTracksAvailability() {
          try {
            var t;
            let e = await (null ===
              (t = this.repositoryContainer.usersTracksRepository) ||
            void 0 === t
              ? void 0
              : t.getTracksByUid(this.userConfig.uid));
            if (!e) return;
            let r = async (t) => {
                (
                  await this.availabilityResource.getAvailabilityTracks({
                    trackIds: t,
                  })
                ).availabilities.forEach((t) => {
                  let { trackId: e, available: r } = t,
                    [i] = (0, w.f)(e);
                  if (i) {
                    var a;
                    null === (a = this.repositoryContainer.tracksRepository) ||
                      void 0 === a ||
                      a.putTrackAvailable(i, r);
                  }
                });
              },
              i = (0, tv.Z)(e, this.variables.requestTrackChunkSize);
            Promise.all(i.map(r));
          } catch (t) {
            this.hooks.afterError.promise(
              new tw("Failed to refresh tracks availability", { cause: t }),
            );
          }
        }
        async refreshTracksMeta() {
          try {
            var t;
            let e = await (null ===
              (t = this.repositoryContainer.usersTracksRepository) ||
            void 0 === t
              ? void 0
              : t.getTracksByUid(this.userConfig.uid));
            if (!e) return;
            let r = async (t) => {
                (
                  await this.tracksResource.getTracksMeta({ trackIds: t })
                ).forEach(this.updateTrackMeta.bind(this));
              },
              i = (0, tv.Z)(e, this.variables.requestTrackChunkSize);
            Promise.all(i.map(r));
          } catch (t) {
            this.hooks.afterError.promise(
              new tw("Failed to refresh tracks meta", { cause: t }),
            );
          }
        }
        async updateTrackMeta(t) {
          try {
            var e, r, i;
            let a = await (null ===
              (e = this.repositoryContainer.usersTracksRepository) ||
            void 0 === e
              ? void 0
              : e.get(this.userConfig.uid, String(t.id)));
            if (!a) return;
            let o =
              null === (i = t.albums) || void 0 === i
                ? void 0
                : null === (r = i[0]) || void 0 === r
                  ? void 0
                  : r.id;
            if (
              (void 0 === a.albumId && void 0 === o) ||
              a.albumId === String(o)
            ) {
              await this.trackManager.deleteTrackArtists(String(t.id)),
                this.trackManager.saveTrack(t);
              return;
            }
            await this.deleteTrack(String((0, w.i)(a.trackId, a.albumId))),
              this.download(String((0, w.i)(t.id, o)));
          } catch (e) {
            this.hooks.afterError.promise(
              new tw("Failed to update track meta", {
                cause: e,
                data: { id: t.id },
              }),
            );
          }
        }
        onTrackMetaReceived(t) {
          this.changeState(String(t.id), { loadingState: v.DOWNLOADING }),
            this.trackManager.saveTrack(t);
        }
        onTrackDownloadFinished(t) {
          var e;
          let [r, i] = (0, w.f)(t);
          r &&
            (null === (e = this.repositoryContainer.usersTracksRepository) ||
              void 0 === e ||
              e.put({
                uid: this.userConfig.uid,
                downloadSource: h.TRACK,
                trackId: r,
                albumId: i,
              }),
            this.changeState(r, { loadingState: v.DOWNLOADED }));
        }
        onTrackDownloadStopped(t) {
          let [e] = (0, w.f)(t);
          e &&
            (this.deleteTrack(t),
            this.changeState(e, { loadingState: v.IDLE }));
        }
        onTrackDecryptKeyReceived(t, e) {
          var r;
          null === (r = this.repositoryContainer.tracksRepository) ||
            void 0 === r ||
            r.putDecryptKey(t, e);
        }
        onTrackDownloadFailed(t) {
          let [e] = (0, w.f)(t);
          e &&
            (this.deleteTrack(t),
            this.changeState(e, { loadingState: v.DOWNLOAD_FAILED }));
        }
        onTrackImageReceived(t, e) {
          var r;
          let i = tb(t);
          null === (r = this.repositoryContainer.fileStorage) ||
            void 0 === r ||
            r.writeFile(i, e).catch((e) => {
              this.hooks.afterError.promise(
                new tw("Failed to write track image", {
                  cause: e,
                  data: { path: i },
                }),
              ),
                this.stopDownload(t),
                this.onTrackDownloadFailed(t);
            });
        }
        onChunkMediaFileReceived(t, e) {
          var r;
          let [i] = (0, w.f)(t);
          i &&
            (null === (r = this.state[i]) || void 0 === r
              ? void 0
              : r.loadingState) !== v.IDLE &&
            this.changeState(i, { loadingState: v.DOWNLOADING, progress: e });
        }
        onMediaFileReceived(t, e) {
          var r, i;
          let [a] = (0, w.f)(t);
          if (
            !a ||
            (null === (r = this.state[a]) || void 0 === r
              ? void 0
              : r.loadingState) === v.IDLE
          )
            return;
          let o = tE(a);
          null === (i = this.repositoryContainer.fileStorage) ||
            void 0 === i ||
            i.writeFile(o, e).catch((e) => {
              this.hooks.afterError.promise(
                new tw("Failed to write media file", {
                  cause: e,
                  data: { path: o },
                }),
              ),
                this.stopDownload(t),
                this.onTrackDownloadFailed(t);
            });
        }
        changeState(t, e) {
          (this.state[t] = e),
            this.events.emit(g.TRACK_CHANGED, { trackId: t, state: e });
        }
        constructor(t) {
          (0, y._)(this, "userConfig", void 0),
            (0, y._)(this, "downloader", void 0),
            (0, y._)(this, "repositoryContainer", void 0),
            (0, y._)(this, "trackManager", void 0),
            (0, y._)(this, "trackDownloadTaskParams", void 0),
            (0, y._)(this, "availabilityResource", void 0),
            (0, y._)(this, "tracksResource", void 0),
            (0, y._)(this, "variables", void 0),
            (0, y._)(this, "hooks", void 0),
            (0, y._)(this, "state", {}),
            (0, y._)(this, "events", new L.Q()),
            (this.userConfig = t.userConfig),
            (this.downloader = t.downloader),
            (this.repositoryContainer = t.repositoryContainer),
            (this.trackDownloadTaskParams = t.trackDownloadTaskParams),
            (this.availabilityResource = t.availabilityResource),
            (this.tracksResource = t.tracksResource),
            (this.variables = t.variables),
            (this.hooks = t.hooks),
            (this.trackManager = new tT({
              repositoryContainer: this.repositoryContainer,
            })),
            this.validateTracks(),
            this.downloader.events.on(
              l.TRACK_META_RECEIVED,
              this.onTrackMetaReceived.bind(this),
            ),
            this.downloader.events.on(
              l.TRACK_DECRYPT_KEY_RECEIVED,
              this.onTrackDecryptKeyReceived.bind(this),
            ),
            this.downloader.events.on(
              l.CHUNK_MEDIA_FILE_RECEIVED,
              this.onChunkMediaFileReceived.bind(this),
            ),
            this.downloader.events.on(
              l.TRACK_IMAGE_RECEIVED,
              this.onTrackImageReceived.bind(this),
            ),
            this.downloader.events.on(
              l.TRACK_DOWNLOAD_FINISHED,
              this.onTrackDownloadFinished.bind(this),
            ),
            this.downloader.events.on(
              l.TRACK_DOWNLOAD_STOPPED,
              this.onTrackDownloadStopped.bind(this),
            ),
            this.downloader.events.on(
              l.TRACK_DOWNLOAD_FAILED,
              this.onTrackDownloadFailed.bind(this),
            ),
            this.downloader.events.on(
              l.MEDIA_FILE_RECEIVED,
              this.onMediaFileReceived.bind(this),
            );
        }
      }
      class tA {
        init(t) {
          var e;
          let { userConfig: r } = t;
          (this.userConfig = r),
            null === (e = this.repositoryContainer.usersRepository) ||
              void 0 === e ||
              e.put({ uid: r.uid });
        }
        createDownloader(t) {
          this.downloader || (this.downloader = new U(t));
        }
        createTracksController(t) {
          this.tracksController || (this.tracksController = new tS(t));
        }
        createArtistsController(t) {
          this.artistsController || (this.artistsController = new E(t));
        }
        createPlaylistsController(t) {
          this.playlistsController || (this.playlistsController = new H(t));
        }
        createCacheController(t) {
          this.cacheController || (this.cacheController = new j(t));
        }
        async clearAll() {
          var t;
          return Promise.all([
            null === (t = this.tracksController) || void 0 === t
              ? void 0
              : t.clearAll(),
          ]);
        }
        constructor({ config: t, plugins: e }) {
          (0, y._)(this, "hooks", M),
            (0, y._)(this, "network", new q()),
            (0, y._)(this, "repositoryContainer", void 0),
            (0, y._)(this, "config", void 0),
            (0, y._)(this, "userConfig", null),
            (0, y._)(this, "cacheController", null),
            (0, y._)(this, "downloader", null),
            (0, y._)(this, "tracksController", null),
            (0, y._)(this, "artistsController", null),
            (0, y._)(this, "playlistsController", null),
            (this.config = t),
            (this.repositoryContainer = th(this.config)),
            null == e || e.forEach((t) => t.apply({ hooks: this.hooks }));
        }
      }
      var t_ = r(91894);
      class tD extends t_.R {
        async about(t, e) {
          let r = this.cacheController.getRequestId({
            resourceName: t_.R.constructor.name,
            methodName: this.about.name,
            args: [t],
          });
          if (this.cacheController.shouldGetCache)
            return this.cacheController.get(r, 6048e5);
          try {
            let i = await super.about(t, e);
            return (
              this.cacheController.put({
                requestId: r,
                response: i,
                uid: i.uid,
                priority: u.MEDIUM,
              }),
              i
            );
          } catch (t) {
            return this.cacheController.handleError(t, r, 6048e5);
          }
        }
        async settings(t, e) {
          let r = this.cacheController.getRequestId({
            resourceName: t_.R.constructor.name,
            methodName: this.settings.name,
            args: [t],
          });
          if (this.cacheController.shouldGetCache)
            return this.cacheController.get(r, 6048e5);
          try {
            let i = await super.settings(t, e);
            return (
              this.cacheController.put({
                requestId: r,
                response: i,
                priority: u.MEDIUM,
              }),
              i
            );
          } catch (t) {
            return this.cacheController.handleError(t, r, 6048e5);
          }
        }
        async experiments(t, e) {
          let r = this.cacheController.getRequestId({
            resourceName: t_.R.constructor.name,
            methodName: this.experiments.name,
            args: [t],
          });
          if (this.cacheController.shouldGetCache)
            return this.cacheController.get(r, 6048e5);
          try {
            let i = await super.experiments(t, e);
            return (
              this.cacheController.put({
                requestId: r,
                response: i,
                priority: u.MEDIUM,
              }),
              i
            );
          } catch (t) {
            return this.cacheController.handleError(t, r, 6048e5);
          }
        }
        async experimentsDetails(t, e) {
          let r = this.cacheController.getRequestId({
            resourceName: t_.R.constructor.name,
            methodName: this.experimentsDetails.name,
            args: [t],
          });
          if (this.cacheController.shouldGetCache)
            return this.cacheController.get(r, 6048e5);
          try {
            let i = await super.experimentsDetails(t, e);
            return (
              this.cacheController.put({
                requestId: r,
                response: i,
                priority: u.MEDIUM,
              }),
              i
            );
          } catch (t) {
            return this.cacheController.handleError(t, r, 6048e5);
          }
        }
        constructor(t, e, r) {
          super(t, e),
            (0, y._)(this, "httpClient", void 0),
            (0, y._)(this, "config", void 0),
            (0, y._)(this, "cacheController", void 0),
            (this.httpClient = t),
            (this.config = e),
            (this.cacheController = r.cacheController);
        }
      }
      let tx = (t, e) => {
          var r, i, a, o;
          let n = null === (r = t.overrides) || void 0 === r ? void 0 : r[e];
          return {
            enabled:
              null !== (i = null == n ? void 0 : n.enabled) && void 0 !== i
                ? i
                : t.enabled,
            ttl:
              null !== (a = null == n ? void 0 : n.ttl) && void 0 !== a
                ? a
                : t.ttl,
            priority:
              null !== (o = null == n ? void 0 : n.priority) && void 0 !== o
                ? o
                : t.priority,
          };
        },
        tO = (t) => {
          let { resource: e, cacheController: r, config: i } = t;
          return new Proxy(e, {
            get(t, e) {
              let a = t[e],
                { enabled: o, ttl: n, priority: s } = tx(i, e);
              return "function" == typeof a && o
                ? async function () {
                    for (
                      var o = arguments.length, c = Array(o), l = 0;
                      l < o;
                      l++
                    )
                      c[l] = arguments[l];
                    let { resourceName: d } = i.common,
                      u = r.getRequestId({ resourceName: d, prop: e, args: c });
                    if (r.shouldGetCache) return r.get(u, n);
                    try {
                      let e = await a.apply(t, c);
                      return (
                        r.put({ requestId: u, response: e, priority: s }), e
                      );
                    } catch (t) {
                      return r.handleError(t, u, n);
                    }
                  }
                : a;
            },
          });
        };
      var tP = r(61271);
      class tF extends p.y {
        constructor(t, { code: e = "E_RESOURCE_PROXY", ...r } = {}) {
          super("".concat("[ResourceProxy]", " ").concat(t), { code: e, ...r }),
            (0, y._)(this, "name", "ResourceProxyException"),
            Object.setPrototypeOf(this, tF.prototype);
        }
      }
      var tj = r(66924);
      let tL = [tj.n.PREVIEW, tj.n.SMART_PREVIEW],
        tN = (t) =>
          new Uint8Array(t.match(/.{1,2}/g).map((t) => parseInt(t, 16))),
        tU = (t) => {
          let e = t,
            r = new Uint8Array(16);
          for (let t = 0; t < 16; ++t)
            (r[r.length - 1 - t] = 255 & e), (e >>= 8);
          return r;
        },
        tK = async (t) => {
          let { key: e, data: r, loadedBytes: i } = t,
            a = await crypto.subtle.importKey(
              "raw",
              tN(e),
              { name: "AES-CTR" },
              !1,
              ["encrypt", "decrypt"],
            ),
            o = new Uint8Array(16);
          return (
            i && (o = tU(i / 16)),
            crypto.subtle.decrypt(
              { name: "AES-CTR", counter: o, length: 128 },
              a,
              r,
            )
          );
        };
      class tM extends tP.d {
        async isTrackDownloaded(t, e) {
          if (!this.variables.uid || tL.includes(e)) return !1;
          try {
            return !!(await this.usersTracksRepository.get(
              this.variables.uid,
              t,
            ));
          } catch (e) {
            return (
              this.hooks.afterError.promise(
                new tF("Can not determine if track was downloaded", {
                  cause: e,
                  data: { trackId: t },
                }),
              ),
              !1
            );
          }
        }
        async getLocalFileDownloadInfo(t) {
          let e = await this.tracksRepository.getDecryptKey(String(t));
          if (!e) throw new tF("Decrypt key not found");
          let r = await this.fileStorage.readFile(tE(String(t))),
            i = r.slice(0, r.size),
            a = await i.arrayBuffer(),
            o = await tK({ data: a, key: e });
          return { trackId: t, urls: [URL.createObjectURL(new Blob([o]))] };
        }
        async getFileInfo(t, e) {
          if (!(await this.isTrackDownloaded(String(t.trackId), t.quality)))
            return super.getFileInfo(t, e);
          try {
            return {
              downloadInfo: await this.getLocalFileDownloadInfo(
                String(t.trackId),
              ),
            };
          } catch (r) {
            return (
              this.hooks.afterError.promise(
                new tF("Can not get a local file", {
                  cause: r,
                  data: { trackId: t.trackId },
                }),
              ),
              super.getFileInfo(t, e)
            );
          }
        }
        async getSign(t, e, r, i) {
          let a = (0, ty.I)(),
            o = t.join(","),
            n = e.join(""),
            s = "".concat(a).concat(o).concat(r).concat(n).concat(i);
          return (0, ty.U)({ secretKey: this.variables.secretKey, data: s });
        }
        async getFileInfoBatch(t, e) {
          let r = t.trackIds.split(","),
            i = await Promise.all(
              r.map(async (e) =>
                this.isTrackDownloaded.bind(this)(e, t.quality),
              ),
            ),
            a = {},
            o = [],
            n = [];
          r.forEach((t, e) => {
            (a[t] = e), i[e] ? n.push(t) : o.push(t);
          });
          let s = await Promise.allSettled(
              n.map(this.getLocalFileDownloadInfo.bind(this)),
            ),
            c = [];
          s.forEach((t, e) => {
            switch (t.status) {
              case "fulfilled": {
                let e = a[t.value.trackId];
                void 0 !== e && (c[e] = t.value);
                break;
              }
              case "rejected": {
                let t = n[e];
                t &&
                  (this.hooks.afterError.promise(
                    new tF("Can not get a local file", {
                      data: { trackId: t },
                    }),
                  ),
                  o.push(t));
              }
            }
          });
          let l = null;
          if (o.length > 0) {
            let r = t.transports[0] || tp.J.RAW,
              i = await this.getSign(o, t.codecs, t.quality, r);
            try {
              l = (
                await super.getFileInfoBatch(
                  { ...t, sign: i, trackIds: o.join(",") },
                  e,
                )
              ).downloadInfos;
            } catch (t) {
              this.hooks.afterError.promise(
                new tF("Can not get file info batch", {
                  cause: String(t),
                  data: { trackIds: o.join(",") },
                }),
              );
            }
          }
          return (
            null == l ||
              l.forEach((t) => {
                let e = a[t.trackId];
                void 0 !== e && (c[e] = t);
              }),
            { downloadInfos: c }
          );
        }
        constructor(t, e, r) {
          super(t, e),
            (0, y._)(this, "httpClient", void 0),
            (0, y._)(this, "config", void 0),
            (0, y._)(this, "fileStorage", void 0),
            (0, y._)(this, "tracksRepository", void 0),
            (0, y._)(this, "usersTracksRepository", void 0),
            (0, y._)(this, "hooks", void 0),
            (0, y._)(this, "variables", void 0),
            (this.httpClient = t),
            (this.config = e);
          let {
            fileStorage: i,
            tracksRepository: a,
            usersTracksRepository: o,
            hooks: n,
            variables: s,
          } = r;
          (this.fileStorage = i),
            (this.tracksRepository = a),
            (this.usersTracksRepository = o),
            (this.hooks = n),
            (this.variables = s);
        }
      }
      let tB = C.CN.TEAPOT,
        tq = (t, e) =>
          new Proxy(t, {
            get(t, r) {
              let i = t[r],
                { isOffline: a } = e;
              return "function" == typeof i && a
                ? function () {
                    throw new C.du("Offline mode enabled", { statusCode: tB });
                  }
                : i;
            },
          });
      var tH = r(25091),
        tW = r(71011),
        tG = r(36746);
      class tV extends tH.F {
        async getCollectionDownloadedTracks() {
          let t = { tracks: [] };
          if (!this.variables.tracksController) return t;
          try {
            return {
              tracks: await this.variables.tracksController.getTracks(),
            };
          } catch (e) {
            return (
              this.hooks.afterError.promise(
                new tF("Can not get collection downloaded tracks", {
                  cause: e,
                }),
              ),
              t
            );
          }
        }
        async getBlock(t, e) {
          return t.type === tW.g.COLLECTION_DOWNLOADED_TRACKS
            ? this.getCollectionDownloadedTracks()
            : super.getBlock(t, e);
        }
        async getSkeleton(t, e) {
          if (!this.variables.cacheController) return super.getSkeleton(t, e);
          if (t.id === tG.j.WEB_COLLECTION) {
            let r = this.variables.cacheController.getRequestId({
              resourceName: tH.F.constructor.name,
              methodName: this.getSkeleton.name,
              args: [t],
            });
            if (this.variables.cacheController.shouldGetCache)
              return this.variables.cacheController.get(r, 6048e5);
            try {
              let i = await super.getSkeleton(t, e);
              return (
                this.variables.cacheController.put({
                  requestId: r,
                  response: i,
                  priority: u.MEDIUM,
                }),
                i
              );
            } catch (t) {
              return this.variables.cacheController.handleError(t, r, 6048e5);
            }
          }
          return super.getSkeleton(t, e);
        }
        constructor(t, e, r) {
          super(t, e),
            (0, y._)(this, "httpClient", void 0),
            (0, y._)(this, "config", void 0),
            (0, y._)(this, "hooks", void 0),
            (0, y._)(this, "variables", void 0),
            (this.httpClient = t),
            (this.config = e),
            (this.hooks = r.hooks),
            (this.variables = r.variables);
        }
      }
    },
  },
]);
