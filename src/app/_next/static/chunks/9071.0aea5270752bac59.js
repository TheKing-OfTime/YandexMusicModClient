(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9071],
  {
    32431: function (t, e, i) {
      var s = {
        "./default.ts": [92799, 2799],
        "./development.ts": [92879, 2879],
        "./production.ts": [25072, 5072],
        "./qa.ts": [15346, 5346],
        "./retryPolicyConfigs/musicExternalApiRetryPolicyConfig.ts": [42596],
        "./retryPolicyConfigs/musicExternalApiRetryPolicyServerConfig.ts": [
          9021, 5878,
        ],
        "./stress.ts": [10135, 135],
        "./types/ConfigVariables.ts": [21099, 1099],
        "./types/ConfigVariablesMainPlayback.ts": [99533, 9533],
        "./types/ConfigVariablesPayment.ts": [82461, 2461],
        "./types/ConfigVariablesPlayer.ts": [96313, 6313],
        "./types/ConfigVariablesResource.ts": [28846, 8846],
        "./types/ConfigVariablesTelemetry.ts": [37744, 7744],
        "./types/ConfigVariablesTrailerPlayback.ts": [59328, 9328],
        "./types/ConfigVariablesVHMediaProvider.ts": [41455, 1455],
        "./utils/getAfishaClientId.ts": [84041, 4041],
        "./utils/getConfig.ts": [23265],
      };
      function r(t) {
        if (!i.o(s, t))
          return Promise.resolve().then(function () {
            var e = Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = s[t],
          r = e[0];
        return Promise.all(e.slice(1).map(i.e)).then(function () {
          return i(r);
        });
      }
      (r.keys = function () {
        return Object.keys(s);
      }),
        (r.id = 32431),
        (t.exports = r);
    },
    42596: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return s;
        },
      });
      let s = {
        statusCodes: {
          408: { retryPolicy: "constant-backoff", attempts: [2e3, 5e3] },
          429: { retryPolicy: "constant-backoff", attempts: [2e3, 5e3] },
          500: { retryPolicy: "constant-backoff", attempts: [1e3, 3e3] },
          502: { retryPolicy: "constant-backoff", attempts: [1e3, 3e3] },
          503: { retryPolicy: "constant-backoff", attempts: [1e3, 3e3] },
          504: { retryPolicy: "constant-backoff", attempts: [2e3, 5e3] },
          NON_HTTP_ERROR: {
            retryPolicy: "constant-backoff",
            attempts: [1e3, 1e3],
          },
          TIMEOUT: { retryPolicy: "constant-backoff", attempts: [500] },
        },
        totalRequestsLimit: 3,
      };
    },
    23265: function (t, e, i) {
      "use strict";
      async function s(t) {
        let { config: e } = await i(32431)("./".concat(t, ".ts"));
        return e();
      }
      i.d(e, {
        i: function () {
          return s;
        },
      });
    },
    57186: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return r;
        },
      });
      var s = i(42596);
      let r = (t) => async (e) => {
        let i = await t.post(e.url, {
          body: e.body,
          headers: e.headers,
          signal: e.signal,
          credentials: e.credentials,
          retry: { config: s.c },
        });
        return await i.json();
      };
    },
    47343: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return r;
        },
      });
      var s = i(77282);
      let r = (t) => {
        t.headers.has("x-request-id") ||
          t.headers.set("x-request-id", (0, s.Z)());
      };
    },
    60044: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return a;
        },
      });
      var s = i(77282),
        r = i(9835);
      let o = (t) =>
          "object" == typeof t &&
          null !== t &&
          "response" in t &&
          "request" in t,
        a = (t, e) => {
          let { cause: i } = t;
          if (o(i) || (0, r.W)(i)) {
            var a;
            let t =
              (null === (a = i.request.options) || void 0 === a
                ? void 0
                : a.headers) || i.request.originalRequestHeaders;
            if (t instanceof Headers) {
              t.set("x-retry-count", String(e));
              let [i] = (t.get("x-request-id") || (0, s.Z)()).split(".");
              t.set("x-request-id", "".concat(i, ".").concat(e));
            }
          }
        };
    },
    75712: function (t, e, i) {
      "use strict";
      i.d(e, {
        n: function () {
          return r;
        },
      });
      var s = i(24473);
      let r = (t) => {
        let e = t.resources.musicExternalApi.timeouts;
        return (
          (t.resources.musicExternalApi.defaultTimeout = s.YJ),
          (t.resources.musicExternalApi.timeouts = (0, s.Bz)(e, [
            { type: "override", value: s.YJ, conditionFn: (t) => t < s.YJ },
          ])),
          t
        );
      };
    },
    46622: function (t, e, i) {
      "use strict";
      i.d(e, {
        o: function () {
          return r;
        },
      });
      var s = i(27198);
      class r {
        getStore() {
          return this.store;
        }
        constructor(t) {
          (0, s._)(this, "store", void 0), (this.store = t);
        }
      }
    },
    58205: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return r;
        },
      });
      var s = i(62726);
      let r = (t) =>
        class extends t {
          error(t, e) {
            !(t instanceof s.eY) &&
              (t instanceof Error || "string" == typeof t) &&
              super.error(t, e);
          }
          constructor(t) {
            super(t);
          }
        };
    },
    50888: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return o;
        },
        D: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(9835);
      let o = [
        "request.headers.cookie",
        "request.headers.x-ya-service-ticket",
        "request.headers.x-ya-user-ticket",
        "request.headers.authorization",
        "request.headers.content-security-policy",
        "response.headers.set-cookie",
        "response.headers.x-ya-service-ticket",
        "response.headers.x-ya-user-ticket",
        "response.headers.x-ya-balancer-service-ticket",
        "response.headers.x-balancer-tvm-service-ticket",
        "response.headers.content-security-policy",
      ];
      class a {
        getHeaders(t) {
          return t instanceof Headers ? Object.fromEntries(t.entries()) : t;
        }
        getUrl(t) {
          return new URL(t || "https://unknown");
        }
        constructor(t) {
          (0, s._)(this, "logger", void 0),
            (0, s._)(this, "beforeRequestHook", void 0),
            (0, s._)(this, "beforeRetryHook", void 0),
            (0, s._)(this, "afterResponseHook", void 0),
            (0, s._)(this, "beforeErrorHook", void 0),
            (this.logger = t),
            (this.beforeRequestHook = (t) => {
              let e = this.getUrl(t.url);
              this.logger.info(
                "[Resource] Request started "
                  .concat(t.method, " ")
                  .concat(e.origin, " ")
                  .concat(e.pathname)
                  .concat(e.search),
                {
                  request: {
                    method: t.method,
                    url: t.url,
                    headers: this.getHeaders(t.headers),
                    body: t.json,
                  },
                },
              );
            }),
            (this.beforeRetryHook = (t, e) => {
              let i = t.cause;
              if ((0, r.W)(i)) {
                var s, o, a, n, l, c, u, d, h, g, f, p, m, y;
                let r = {
                  error: {
                    name: t.name,
                    message: t.message,
                    code: t.code,
                    data: t.data,
                    stack: t.stack,
                  },
                  request: {
                    method:
                      (null === (s = i.request) || void 0 === s
                        ? void 0
                        : s.method) ||
                      (null === (o = i.options) || void 0 === o
                        ? void 0
                        : o.method),
                    url:
                      (null === (a = i.request) || void 0 === a
                        ? void 0
                        : a.url) ||
                      (null === (n = i.options) || void 0 === n
                        ? void 0
                        : n.url),
                    headers: this.getHeaders(
                      (null === (l = i.request) || void 0 === l
                        ? void 0
                        : l.headers) ||
                        (null === (c = i.options) || void 0 === c
                          ? void 0
                          : c.headers),
                    ),
                    body:
                      (null === (u = i.request) || void 0 === u
                        ? void 0
                        : u.json) ||
                      (null === (d = i.options) || void 0 === d
                        ? void 0
                        : d.json),
                    retries: e,
                  },
                };
                void 0 !== i.response &&
                  (r.response = {
                    statusCode: i.response.statusCode,
                    headers: this.getHeaders(i.response.headers),
                    time:
                      null === (y = i.response.timings) || void 0 === y
                        ? void 0
                        : null === (m = y.phases) || void 0 === m
                          ? void 0
                          : m.total,
                  });
                let v = this.getUrl(
                  (null === (h = i.request) || void 0 === h ? void 0 : h.url) ||
                    (null === (g = i.options) || void 0 === g ? void 0 : g.url),
                );
                this.logger.warn(
                  "[Resource] Retry request "
                    .concat(
                      (null === (f = i.request) || void 0 === f
                        ? void 0
                        : f.method) ||
                        (null === (p = i.options) || void 0 === p
                          ? void 0
                          : p.method),
                      " ",
                    )
                    .concat(v.origin, " ")
                    .concat(v.pathname)
                    .concat(v.search),
                  r,
                );
              } else
                this.logger.warn("[Resource] Retry request (unknown)", {
                  error: {
                    name: t.name,
                    message: t.message,
                    code: t.code,
                    data: t.data,
                    stack: t.stack,
                  },
                });
            }),
            (this.afterResponseHook = (t) => {
              if (
                (t.statusCode || t.status) >= 200 &&
                299 >= (t.statusCode || t.status)
              ) {
                var e, i;
                let s = this.getUrl(t.url);
                this.logger.info(
                  "[Resource] Request resolved "
                    .concat(t.statusCode, " ")
                    .concat(t.request.method, " ")
                    .concat(s.origin, " ")
                    .concat(s.pathname)
                    .concat(s.search),
                  {
                    request: {
                      method: t.request.method,
                      url: t.url,
                      headers: this.getHeaders(t.request.headers),
                      body: t.request.body,
                    },
                    response: {
                      statusCode: t.statusCode || t.status,
                      headers: this.getHeaders(t.headers),
                      time:
                        null === (i = t.timings) || void 0 === i
                          ? void 0
                          : null === (e = i.phases) || void 0 === e
                            ? void 0
                            : e.total,
                    },
                  },
                );
              }
              return t;
            }),
            (this.beforeErrorHook = (t) => {
              let e = t.cause;
              if ((0, r.W)(e)) {
                var i, s, o, a, n, l, c, u, d, h, g, f, p, m;
                let r = {
                  error: {
                    name: t.name,
                    message: t.message,
                    code: t.code,
                    data: t.data,
                    stack: t.stack,
                  },
                  request: {
                    method:
                      (null === (i = e.request) || void 0 === i
                        ? void 0
                        : i.method) ||
                      (null === (s = e.options) || void 0 === s
                        ? void 0
                        : s.method),
                    url:
                      (null === (o = e.request) || void 0 === o
                        ? void 0
                        : o.url) ||
                      (null === (a = e.options) || void 0 === a
                        ? void 0
                        : a.url),
                    headers: this.getHeaders(
                      (null === (n = e.request) || void 0 === n
                        ? void 0
                        : n.headers) ||
                        (null === (l = e.options) || void 0 === l
                          ? void 0
                          : l.headers),
                    ),
                    body:
                      (null === (c = e.request) || void 0 === c
                        ? void 0
                        : c.json) ||
                      (null === (u = e.options) || void 0 === u
                        ? void 0
                        : u.json),
                  },
                };
                void 0 !== e.response &&
                  (r.response = {
                    statusCode: e.response.statusCode || e.response.status,
                    headers: this.getHeaders(e.response.headers),
                    time:
                      null === (m = e.response.timings) || void 0 === m
                        ? void 0
                        : null === (p = m.phases) || void 0 === p
                          ? void 0
                          : p.total,
                  });
                let y = this.getUrl(
                  (null === (d = e.request) || void 0 === d ? void 0 : d.url) ||
                    (null === (h = e.options) || void 0 === h ? void 0 : h.url),
                );
                this.logger.error(
                  "[Resource] Request failed "
                    .concat(
                      (null === (g = e.request) || void 0 === g
                        ? void 0
                        : g.method) ||
                        (null === (f = e.options) || void 0 === f
                          ? void 0
                          : f.method),
                      " ",
                    )
                    .concat(y.origin, " ")
                    .concat(y.pathname)
                    .concat(y.search, ", reason: ")
                    .concat(t.name),
                  r,
                );
              } else
                this.logger.error(
                  "[Resource] Request failed (unknown), reason: ".concat(
                    t.name,
                  ),
                  {
                    error: {
                      name: t.name,
                      message: t.message,
                      code: t.code,
                      data: t.data,
                      stack: t.stack,
                    },
                  },
                );
              return t;
            });
        }
      }
    },
    9835: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return s;
        },
      });
      let s = (t) =>
        "object" == typeof t &&
        null !== t &&
        "request" in t &&
        null !== t.request;
    },
    44990: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return r;
        },
      });
      var s = i(27198);
      class r {
        setPassportUid(t) {
          let e = this.executionContext.getStore();
          void 0 !== e && (e.puid = t), (this.passportUid = t);
        }
        getPassportUid() {
          return this.passportUid;
        }
        constructor(t) {
          (0, s._)(this, "executionContext", void 0),
            (0, s._)(this, "passportUid", void 0),
            (this.executionContext = t);
        }
      }
    },
    3749: function (t, e, i) {
      "use strict";
      i.d(e, {
        s1: function () {
          return l;
        },
        d5: function () {
          return u;
        },
        ri: function () {
          return c;
        },
      });
      var s = i(27198),
        r = i(25534);
      class o extends r.y {
        constructor(
          t = "Internal error",
          { code: e = "E_CONTAINER", ...i } = {},
        ) {
          super(t, { code: e, ...i }),
            (0, s._)(this, "name", "ContainerException"),
            Object.setPrototypeOf(this, o.prototype);
        }
      }
      class a extends o {
        constructor(t) {
          super(
            "A binding with the name '".concat(
              t.toString(),
              "' already exists in the container",
            ),
            { code: "E_CONTAINER_ALREADY_EXISTS" },
          ),
            (0, s._)(this, "name", "AlreadyExistsContainerException"),
            Object.setPrototypeOf(this, a.prototype);
        }
      }
      class n extends o {
        constructor(t) {
          super(
            "No entry with the name '".concat(
              t.toString(),
              "' was found in the container",
            ),
            { code: "E_CONTAINER_NOT_FOUND" },
          ),
            (0, s._)(this, "name", "NotFoundContainerException"),
            Object.setPrototypeOf(this, n.prototype);
        }
      }
      class l {
        register(t, e) {
          if (this.has(t)) throw new a(t);
          return (this.bindings = { ...this.bindings, [t]: e }), this;
        }
        registerMany(t) {
          for (let e in t) if (this.has(e)) throw new a(e);
          return (this.bindings = { ...this.bindings, ...t }), this;
        }
        get(t) {
          if (this.shared.has(t)) return this.shared.get(t);
          let e = this.bindings[t];
          if (void 0 === e) throw new n(t);
          let i = this.create(e);
          return e.isShared && this.shared.set(t, i), i;
        }
        has(t) {
          return t in this.bindings;
        }
        create(t) {
          return t.creator(this);
        }
        constructor() {
          (0, s._)(this, "bindings", {}), (0, s._)(this, "shared", new Map());
        }
      }
      function c(t) {
        return { type: "singleton", creator: t, isShared: !0 };
      }
      function u(t) {
        return { type: "factory", creator: t, isShared: !1 };
      }
    },
    30386: function (t, e, i) {
      "use strict";
      i.d(e, {
        w: function () {
          return y;
        },
      });
      var s = i(27198),
        r = i(44628),
        o = i(21937),
        a = i(29096),
        n = i(470),
        l = i(98151),
        c = i(40918);
      let u = (t) =>
          Object.keys(t.statusCodes)
            .filter((t) => !isNaN(Number(t)))
            .map((t) => parseInt(t, 10)),
        d = (t) =>
          (null == t ? void 0 : t.code) === "ETIMEDOUT"
            ? "TIMEOUT"
            : (t.response && (t.response.status || t.response.statusCode)) ||
              "NON_HTTP_ERROR",
        h = { retryLimit: 0, retryDelay: 0 },
        g = (t) => {
          let {
            retryAttempt: e,
            error: i,
            retryAfter: s,
            retryPolicyConfig: r,
          } = t;
          if (!r) return h;
          if (s)
            return r.totalRequestsLimit > e
              ? { retryLimit: r.totalRequestsLimit, retryDelay: s }
              : h;
          if (r.statusCodes[i]) {
            var o;
            let t = r.statusCodes[i];
            if (
              (null == t
                ? void 0
                : null === (o = t.attempts) || void 0 === o
                  ? void 0
                  : o.length) &&
              t.attempts.length >= e
            )
              return {
                retryLimit: t.attempts.length + 1,
                retryDelay: t.attempts[e - 1] || 1,
              };
          }
          return h;
        },
        f = async (t) => new Promise((e) => setTimeout(e, t)),
        p = async (t) => {
          var e, i;
          let {
            options: s,
            error: r,
            retryAttempt: o,
            clientRetryConfig: a,
          } = t;
          if (
            null == r
              ? void 0
              : null === (i = r.response) || void 0 === i
                ? void 0
                : null === (e = i.headers) || void 0 === e
                  ? void 0
                  : e.get("Retry-After")
          )
            return;
          let n = g({
            error: d(r),
            retryAttempt: o,
            retryPolicyConfig: null == a ? void 0 : a.config,
          });
          (s.retry.limit = n.retryLimit), await f(n.retryDelay);
        },
        m = [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE",
          "HEAD",
          "get",
          "post",
          "put",
          "patch",
          "delete",
          "head",
        ];
      class y {
        async get(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.request(t, { ...e, method: "GET" });
        }
        async post(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.request(t, { ...e, method: "POST" });
        }
        async put(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.request(t, { ...e, method: "PUT" });
        }
        async patch(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.request(t, { ...e, method: "PATCH" });
        }
        async delete(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.request(t, { ...e, method: "DELETE" });
        }
        async head(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.request(t, { ...e, method: "HEAD" });
        }
        async request(t, e) {
          let i, s;
          try {
            let s = Date.now(),
              r = await this.client(t, this.optionsConverter(e)),
              o = Date.now() - s;
            return (i = this.responseConverter(r, e, {
              start: s,
              response: o,
            }));
          } catch (t) {
            if (t instanceof r.B) throw this.errorConverter(t);
            if (((s = t), t instanceof o.W))
              throw (
                (this.afterTimeoutHooks.forEach((e) => {
                  e(this.errorConverter(t));
                }),
                this.errorConverter(t))
              );
            throw t;
          } finally {
            this.requestDoneHooks.forEach((r) => {
              r({ url: t, options: e, response: i, error: s });
            });
          }
        }
        optionsConverter(t) {
          let {
              prefixUrl: e,
              method: i,
              searchParams: s,
              headers: r,
              json: o,
              hooks: a,
              retry: n,
              timeout: l,
              body: c,
              credentials: d,
              signal: h,
              excludeHeaders: g,
            } = t,
            f = {};
          if (
            (void 0 !== d && (f.credentials = d),
            void 0 !== e && (f.prefixUrl = e),
            void 0 !== i && (f.method = i),
            void 0 !== r)
          ) {
            var y;
            f.headers = {
              ...r,
              "user-agent":
                null !== (y = r["user-agent"]) && void 0 !== y
                  ? y
                  : r["User-Agent"],
            };
          }
          if (
            (void 0 !== s && (f.searchParams = s),
            void 0 !== o && (f.json = o),
            "number" == typeof l && (f.timeout = l),
            void 0 !== c && (f.body = c),
            void 0 !== h && (f.signal = h),
            (null == n ? void 0 : n.config) &&
              ((f.retry = {
                limit: n.config.totalRequestsLimit,
                backoffLimit: 1,
                statusCodes: u(n.config),
                methods: m,
              }),
              (f.hooks = f.hooks || {}),
              (f.hooks.beforeRetry = f.hooks.beforeRetry || []),
              f.hooks.beforeRetry.push(async (t) => {
                await p({
                  request: t.request,
                  options: t.options,
                  error: t.error,
                  retryAttempt: t.retryCount,
                  clientRetryConfig: n,
                });
              })),
            a)
          ) {
            let t;
            let {
              beforeRequest: e,
              beforeRetry: i,
              beforeError: s,
              afterResponse: r,
            } = a;
            void 0 === f.hooks && (f.hooks = {}),
              Array.isArray(e) &&
                (f.hooks.beforeRequest = e.map((e) => async (i, s) => {
                  t = Date.now();
                  let r = {
                    ...this.normalizeOptions(i, s),
                    headers: i.headers,
                  };
                  await e(r);
                })),
              Array.isArray(i) &&
                ((f.hooks.beforeRetry = f.hooks.beforeRetry || []),
                (f.hooks.beforeRetry = f.hooks.beforeRetry.concat(
                  i.map((t) => async (e) => {
                    let { request: i, options: s, error: r, retryCount: o } = e;
                    await t(this.errorConverter(r, i, s), o);
                  }),
                ))),
              Array.isArray(s) &&
                (f.hooks.beforeError = s.map(
                  (t) => async (e) => (await t(this.errorConverter(e)), e),
                )),
              Array.isArray(r) &&
                (f.hooks.afterResponse = r.map((e) => async (i, s, r) => {
                  let o = this.normalizeOptions(i, s),
                    a = Date.now();
                  return (
                    await e(
                      this.responseConverter(r, o, { start: t, response: a }),
                    ),
                    r
                  );
                }));
          }
          return (
            void 0 !== g &&
              (void 0 === f.hooks && (f.hooks = {}),
              void 0 === f.hooks.beforeRequest && (f.hooks.beforeRequest = []),
              f.hooks.beforeRequest.push((t) => {
                if (g) for (let e of g) t.headers.has(e) && t.headers.delete(e);
              })),
            f
          );
        }
        responseConverter(t, e, i) {
          return {
            headers: Object.fromEntries(t.headers.entries()),
            statusCode: t.status,
            statusMessage: t.statusText,
            url: t.url,
            json: t.json.bind(t),
            text: t.text.bind(t),
            arrayBuffer: t.arrayBuffer.bind(t),
            timings: i,
            clone: () => this.responseConverter(t.clone(), e, i),
            request: {
              prefixUrl: e.prefixUrl,
              headers: e.headers,
              searchParams: e.searchParams,
              method: e.method,
            },
          };
        }
        normalizeOptions(t, e) {
          let i = new URL(t.url);
          return {
            headers: this.normalizeHeaders(e.headers),
            searchParams: new URLSearchParams(i.search),
            json: t.json,
            url: t.url,
            method: this.convertMethod(e.method),
            timeout: void 0,
          };
        }
        normalizeHeaders(t) {
          return void 0 === t
            ? {}
            : t instanceof Headers
              ? Object.fromEntries(t.entries())
              : Array.isArray(t)
                ? Object.fromEntries(t)
                : t;
        }
        errorConverter(t, e, i) {
          if (t instanceof r.B || t instanceof o.W)
            return new c.d(t.message, {
              statusCode:
                t instanceof o.W ? n.C.REQUEST_TIMEOUT : t.response.status,
              cause: t,
            });
          let s = null;
          return (
            e &&
              i &&
              (s = {
                headers: null == i ? void 0 : i.headers,
                originalRequestHeaders: e.headers,
                url: null == e ? void 0 : e.url,
                method: null == e ? void 0 : e.method,
              }),
            new l.e(t.message, { cause: { error: t, request: s } })
          );
        }
        convertMethod(t) {
          return void 0 !== t && m.includes(t) ? t.toUpperCase() : "GET";
        }
        convertMethods(t) {
          let e = new Set();
          return (
            t.forEach((t) => {
              m.includes(t) && e.add(t.toUpperCase());
            }),
            [...e]
          );
        }
        constructor(t = {}) {
          var e, i, r, o;
          (0, s._)(this, "client", void 0),
            (0, s._)(this, "afterTimeoutHooks", []),
            (0, s._)(this, "requestDoneHooks", []),
            (this.client = a.ZP.create(this.optionsConverter(t))),
            (this.afterTimeoutHooks =
              null !==
                (r =
                  null === (e = t.hooks) || void 0 === e
                    ? void 0
                    : e.afterTimeout) && void 0 !== r
                ? r
                : []),
            (this.requestDoneHooks =
              null !==
                (o =
                  null === (i = t.hooks) || void 0 === i
                    ? void 0
                    : i.onRequestDone) && void 0 !== o
                ? o
                : []);
        }
      }
    },
    40918: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(98151);
      class o extends r.e {
        constructor(t, e) {
          super(t, {
            code: "E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE",
            cause: e.cause,
          }),
            (0, s._)(this, "name", "HttpErrorException"),
            (0, s._)(this, "statusCode", void 0),
            (this.statusCode = e.statusCode),
            Object.setPrototypeOf(this, o.prototype);
        }
      }
    },
    98151: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(25534);
      class o extends r.y {
        constructor(
          t = "Http Client error",
          { code: e = "E_HTTP_CLIENT", ...i } = {},
        ) {
          super(t, { code: e, ...i }),
            (0, s._)(this, "name", "HttpException"),
            Object.setPrototypeOf(this, o.prototype);
        }
      }
    },
    62726: function (t, e, i) {
      "use strict";
      i.d(e, {
        CN: function () {
          return s.C;
        },
        du: function () {
          return o.d;
        },
        eY: function () {
          return r.e;
        },
      });
      var s = i(470),
        r = i(98151),
        o = i(40918);
    },
    470: function (t, e, i) {
      "use strict";
      var s, r;
      i.d(e, {
        C: function () {
          return s;
        },
      }),
        ((r = s || (s = {}))[(r.NOT_FOUND = 404)] = "NOT_FOUND"),
        (r[(r.BAD_REQUEST = 400)] = "BAD_REQUEST"),
        (r[(r.REQUEST_TIMEOUT = 408)] = "REQUEST_TIMEOUT"),
        (r[(r.PRECONDITION_FAILED = 412)] = "PRECONDITION_FAILED"),
        (r[(r.TEAPOT = 418)] = "TEAPOT");
    },
    32550: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return c;
        },
      });
      var s = i(27198),
        r = i(97053),
        o = i(47877),
        a = i(15717),
        n = i(23172);
      let l = () => "SECRET";
      class c {
        formatMessage(t, e) {
          let i,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = String(e instanceof Error && e.stack ? e.stack : e),
            l = (0, n.Z)({ ...this.additionalData, ...s });
          return (Object.keys(l).length && (i = this.obfuscateData(l)), o)
            ? "".concat(a, " ").concat(r(i))
            : [a, i];
        }
        obfuscateData(t) {
          var e;
          if (
            null === (e = this.secureFields) || void 0 === e ? void 0 : e.length
          )
            for (let e of this.secureFields)
              void 0 !== (0, o.Z)(t, e) && (0, a.Z)(t, e, l());
          return t;
        }
        constructor({ additionalData: t, maxLogLevel: e, secureFields: i }) {
          (0, s._)(this, "maxLogLevel", void 0),
            (0, s._)(this, "secureFields", void 0),
            (0, s._)(this, "additionalData", void 0),
            (this.maxLogLevel = e),
            (this.secureFields = i),
            (this.additionalData = t);
        }
      }
    },
    83254: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(29928),
        o = i(32550);
      class a extends o.P {
        info(t, e) {
          this.maxLogLevel >= r.B.INFO && this.logToConsole(r.B.INFO, t, e);
        }
        debug(t, e) {
          this.maxLogLevel >= r.B.DEBUG && this.logToConsole(r.B.DEBUG, t, e);
        }
        trace(t, e) {
          this.maxLogLevel >= r.B.TRACE && this.logToConsole(r.B.TRACE, t, e);
        }
        warn(t, e) {
          this.maxLogLevel >= r.B.WARNING &&
            this.logToConsole(r.B.WARNING, t, e),
            this.sendToErrorBooster(r.B.WARNING, t, e);
        }
        error(t, e) {
          this.maxLogLevel >= r.B.ERROR && this.logToConsole(r.B.ERROR, t, e),
            this.sendToErrorBooster(r.B.ERROR, t, e);
        }
        log(t, e) {
          this.logToConsole(r.B.INFO, t, e);
        }
        logToConsole(t, e, i) {
          if (this.disableLogToConsole) return;
          let s = r.v[t];
          console[s](...this.formatMessage(t, e, i));
        }
        sendToErrorBooster(t, e, i) {
          window.Ya.Rum.logError({
            message: e,
            level: t,
            additional: {
              data: i
                ? this.obfuscateData({ ...this.additionalData, ...i })
                : {},
            },
          });
        }
        constructor(t) {
          super(t),
            (0, s._)(this, "disableLogToConsole", void 0),
            (this.disableLogToConsole = t.disableLogToConsole);
        }
      }
    },
    76877: function (t, e, i) {
      "use strict";
      i.d(e, {
        B$: function () {
          return s.B;
        },
      });
      var s = i(29928);
      i(32550);
    },
    29928: function (t, e, i) {
      "use strict";
      var s, r;
      i.d(e, {
        B: function () {
          return s;
        },
        v: function () {
          return o;
        },
      }),
        ((r = s || (s = {}))[(r.ERROR = 10)] = "ERROR"),
        (r[(r.WARNING = 20)] = "WARNING"),
        (r[(r.INFO = 30)] = "INFO"),
        (r[(r.DEBUG = 40)] = "DEBUG"),
        (r[(r.TRACE = 50)] = "TRACE");
      let o = {
        [s.ERROR]: "error",
        [s.WARNING]: "warn",
        [s.INFO]: "info",
        [s.DEBUG]: "debug",
        [s.TRACE]: "trace",
      };
    },
    98221: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(8356);
      class a extends o.c {
        async saveAds(t, e) {
          var i;
          return (
            await this.httpClient.post("ads/save-ads", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.saveAds,
              searchParams: (0, r.f)({
                from: t.from,
                trackId: t.trackId,
                type: t.type,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    21322: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getAfterTrack(t, e) {
          var i;
          return (
            await this.httpClient.get("after-track", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                from: t.from,
                types: t.types,
                nextTrackId: t.nextTrackId,
                prevTrackId: t.prevTrackId,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getAfterTrack,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    98632: function (t, e, i) {
      "use strict";
      i.d(e, {
        S: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(8356);
      class a extends o.c {
        async getAlbumWithRichTracks(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "albums/".concat(t.albumId, "/with-tracks"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getAlbumWithRichTracks,
                searchParams: (0, r.f)({
                  resumeStream: t.resumeStream,
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-order": t.sortOrder,
                  richTracks: !0,
                  withListeningFinished: !0,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getAlbumWithTracksIds(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "albums/".concat(t.albumId, "/with-tracks"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getAlbumWithTracksIds,
                searchParams: (0, r.f)({
                  resumeStream: t.resumeStream,
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-order": t.sortOrder,
                  richTracks: !1,
                  withListeningFinished: !0,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getDisclaimer(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "albums/".concat(t.albumId, "/disclaimer"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getDisclaimer,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getTrailer(t, e) {
          var i;
          return (
            await this.httpClient.get("albums/".concat(t.albumId, "/trailer"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getTrailer,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getRelatedContent(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "albums/".concat(t.albumId, "/related-content"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getRelatedContent,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getAlbums(t, e) {
          var i;
          return (
            await this.httpClient.get("albums", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              searchParams: (0, r.f)({ albumIds: t.albumIds.join(",") }),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getAlbums,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    19023: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(8356);
      class a extends o.c {
        async getArtistTracks(t, e) {
          var i, s, o;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/tracks"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, r.f)({
                  "sort-by":
                    null === (i = t.sort) || void 0 === i ? void 0 : i.sortBy,
                  "sort-order":
                    null === (s = t.sort) || void 0 === s
                      ? void 0
                      : s.sortOrder,
                  page: t.page,
                  pageSize: t.pageSize,
                }),
                timeout:
                  null === (o = this.config.timeouts) || void 0 === o
                    ? void 0
                    : o.getArtistTracks,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getArtistTrackIds(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/track-ids"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                searchParams: (0, r.f)({ page: t.page, pageSize: t.pageSize }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getArtistTrackIds,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getSafeDirectAlbums(t, e) {
          var i, s, o;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/safe-direct-albums"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, r.f)({
                  "sort-by":
                    null === (i = t.sort) || void 0 === i ? void 0 : i.sortBy,
                  "sort-order":
                    null === (s = t.sort) || void 0 === s
                      ? void 0
                      : s.sortOrder,
                  limit: t.limit,
                }),
                timeout:
                  null === (o = this.config.timeouts) || void 0 === o
                    ? void 0
                    : o.getSafeDirectAlbums,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getBriefInfo(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/brief-info"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, r.f)({
                  popularTracksCount: t.popularTracksCount,
                  useClipDataFormat: t.useClipDataFormat,
                  discographyBlockEnabled: t.discographyBlockEnabled,
                  fetchPlaylistLikesCounts: t.fetchPlaylistLikesCounts,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getBriefInfo,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getAboutArtist(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/about-artist"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getAboutArtist,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getSimilarArtists(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/similar"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getSimilarArtists,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getDiscographyAlbums(t, e) {
          var i, s;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/discography-albums"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, r.f)({
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-by":
                    null === (i = t.sort) || void 0 === i ? void 0 : i.sortBy,
                  "sort-order":
                    null === (s = t.sort) || void 0 === s
                      ? void 0
                      : s.sortOrder,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getDirectAlbums(t, e) {
          var i, s;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/direct-albums"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, r.f)({
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-by":
                    null === (i = t.sort) || void 0 === i ? void 0 : i.sortBy,
                  "sort-order":
                    null === (s = t.sort) || void 0 === s
                      ? void 0
                      : s.sortOrder,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getAlsoAlbums(t, e) {
          var i, s;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/also-albums"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, r.f)({
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-by":
                    null === (i = t.sort) || void 0 === i ? void 0 : i.sortBy,
                  "sort-order":
                    null === (s = t.sort) || void 0 === s
                      ? void 0
                      : s.sortOrder,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getConcerts(t, e) {
          var i;
          let s = await this.httpClient.get(
            "artists/".concat(t.artistId, "/concerts"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams({
                ...t,
                common: { ...t, withoutInvocationInfo: !1 },
              }),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getConcerts,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()).result;
        }
        async getFamiliarYouInfo(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/familiar-you/info"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getFamiliarYouInfo,
                searchParams: (0, r.f)({
                  withWaveInfo: t.withWaveInfo,
                  withCollectionInfo: t.withCollectionInfo,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getFamiliarYou(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/familiar-you"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getFamiliarYou,
                searchParams: (0, r.f)({
                  waveTracksLimit: t.waveTracksLimit,
                  collectionTracksLimit: t.collectionTracksLimit,
                  collectionAlbumsLimit: t.collectionAlbumsLimit,
                  withIds: t.withIds,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getDisclaimer(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/disclaimer"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getDisclaimer,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getTrailer(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/trailer"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getTrailer,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getInfo(t, e) {
          var i;
          return (
            await this.httpClient.get("artists/".concat(t.artistId, "/info"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getInfo,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getSkeleton(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/skeletons/").concat(t.skeletonId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getSkeleton,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getClips(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "artists/".concat(t.artistId, "/blocks/artist-clips"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getClips,
                searchParams: (0, r.f)({ page: t.page, pageSize: t.pageSize }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    31842: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getAvailabilityTracks(t, e) {
          var i;
          return (
            await this.httpClient.post("availability/tracks", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getAvailabilityTracks,
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({ trackIds: t.trackIds }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    75281: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getChartPodcasts(t, e) {
          return (
            await this.httpClient.get("chart/podcasts", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getChartPodcastsCategory(t, e) {
          return (
            await this.httpClient.get(
              "chart/podcasts/category/".concat(t.categoryId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    27688: function (t, e, i) {
      "use strict";
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getSkeleton(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "children-landing/category/".concat(t.categoryId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getSkeleton,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getEditorialPlaylist(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "children-landing/editorial/playlist/".concat(t.id),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getEditorialPlaylist,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getEditorialAlbum(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "children-landing/editorial/album/".concat(t.id),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getEditorialAlbum,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    79818: function (t, e, i) {
      "use strict";
      i.d(e, {
        V: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(8356);
      class a extends o.c {
        async getClip(t, e) {
          var i;
          return (
            await this.httpClient.get("clips", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getClip,
              searchParams: (0, r.f)({ clipIds: t.clipIds.join(",") }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getCredits(t, e) {
          var i;
          return (
            await this.httpClient.get("clips/".concat(t.clipId, "/credits"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getCredits,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getDisclaimer(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "clips/".concat(t.clipId, "/disclaimer"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getDisclaimer,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getClipsWillLike(t, e) {
          var i;
          return (
            await this.httpClient.get("clips/will/like", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getClipsWillLike,
              searchParams: (0, r.f)({ page: t.page, pageSize: t.pageSize }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    73728: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(13384);
      class a extends r.c {
        async sync(t, e) {
          var i;
          return (
            await this.httpClient.post("collection/sync", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.sync,
              json: (0, o.c)({
                likedAlbums: t.likedAlbums,
                likedArtists: t.likedArtists,
                likedClips: t.likedClips,
                likedTracks: t.likedTracks,
                presavedAlbums: t.presavedAlbums,
                ownPlaylists: t.ownPlaylists,
                likedPlaylists: t.likedPlaylists,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    73403: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getDisclaimers(t, e) {
          var i;
          let s = await this.httpClient.get("disclaimers", {
            prefixUrl: this.config.prefixUrl,
            headers: this.createRequestHeadersFromParams(t),
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (i = this.config.timeouts) || void 0 === i
                ? void 0
                : i.getDisclaimers,
            signal: null == e ? void 0 : e.signal,
          });
          return await s.json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    33614: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getAlbumDonations(t, e) {
          var i;
          let s = await this.httpClient.get(
            "donation/album/".concat(t.albumId),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getAlbumDonations,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return await s.json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    98090: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getTriggers(t, e) {
          return (
            await this.httpClient.post("dynamic-pages/trigger/polling", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              json: { anchorIds: t.anchorIds },
              retry: this.getRetryPolicyConfig(),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getTrigger(t, e) {
          return (
            await this.httpClient.get(
              "dynamic-pages/trigger/polling/".concat(t.anchorId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async shown(t, e) {
          await this.httpClient.post("dynamic-pages/trigger/shown", {
            prefixUrl: this.config.prefixUrl,
            headers: this.createRequestHeadersFromParams(t),
            json: { anchorIds: t.anchorIds, screenId: t.screenId },
            retry: this.getRetryPolicyConfig(),
            signal: null == e ? void 0 : e.signal,
          });
        }
        async action(t, e) {
          await this.httpClient.post("dynamic-pages/trigger/action", {
            prefixUrl: this.config.prefixUrl,
            headers: this.createRequestHeadersFromParams(t),
            json: {
              anchorIds: t.anchorIds,
              screenId: t.screenId,
              actionId: t.actionId,
            },
            retry: this.getRetryPolicyConfig(),
            signal: null == e ? void 0 : e.signal,
          });
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    18759: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getInviteInfo(t) {
          var e;
          return (
            await this.httpClient.get(
              "account/family/invite-info/".concat(t.inviteId, "/"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                timeout:
                  null === (e = this.config.timeouts) || void 0 === e
                    ? void 0
                    : e.getInviteInfo,
                retry: this.getRetryPolicyConfig(),
              },
            )
          ).json();
        }
        async acceptInvite(t) {
          var e;
          await this.httpClient.post(
            "account/family/accept-invite/".concat(t.inviteId),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.acceptInvite,
              retry: this.getRetryPolicyConfig(),
            },
          );
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    61871: function (t, e, i) {
      "use strict";
      i.d(e, {
        l: function () {
          return n;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498),
        a = i(13384);
      class n extends r.c {
        async getPromotionsById(t, e) {
          var i;
          return (
            await this.httpClient.get("feed/promotions/".concat(t.promoId), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({ checkContent: t.checkContent }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getPromotionsById,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getWizardGenres(t, e) {
          var i;
          return (
            await this.httpClient.get("feed/wizard2-new/get-genres", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getWizardGenres,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getWizardArtistsByGenre(t, e) {
          var i;
          let s = (0, a.c)({
            genre: t.genre,
            showedArtists: t.showedArtists,
            likedArtists: t.likedArtists,
            unlikedArtists: t.unlikedArtists,
            countOfNewArtists: t.countOfNewArtists,
          });
          return (
            await this.httpClient.post(
              "feed/wizard2-new/get-artists-by-genre",
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getWizardArtistsByGenre,
                json: s,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async finishWizard(t, e) {
          var i;
          let s = (0, a.c)({
            genre: t.genre,
            likedArtists: t.likedArtists,
            unlikedArtists: t.unlikedArtists,
          });
          await this.httpClient.post("feed/wizard2-new/finish", {
            prefixUrl: this.config.prefixUrl,
            headers: this.createRequestHeadersFromParams(t),
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (i = this.config.timeouts) || void 0 === i
                ? void 0
                : i.finishWizard,
            json: s,
            signal: null == e ? void 0 : e.signal,
          });
        }
        async infiniteFeed(t, e) {
          var i;
          return (
            await this.httpClient.get("infinite-feed", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.infiniteFeed,
              searchParams: (0, o.f)({
                batchNumber: t.batchNumber,
                landingType: t.landingType,
                supportedBlocks: "generic",
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    41680: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(13384),
        o = i(8356);
      class a extends o.c {
        async getTracksFilters(t, e) {
          var i;
          let s = (0, r.c)({ trackIds: t.trackIds });
          return (
            await this.httpClient.post("filters/tracks", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getTracksFilters,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getFilterName(t, e) {
          var i;
          return (
            await this.httpClient.get("filters/".concat(t.filterId), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getFilterName,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    34300: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(8356);
      class a extends o.c {
        async getData(t, e) {
          var i;
          return (
            await this.httpClient.get("labels/".concat(t.labelId), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getData,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getAlbums(t, e) {
          var i;
          return (
            await this.httpClient.get("labels/".concat(t.labelId, "/albums"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getAlbums,
              signal: null == e ? void 0 : e.signal,
              searchParams: (0, r.f)({
                page: t.page,
                pageSize: t.pageSize,
                sortBy: t.sortBy,
                sortOrder: t.sortOrder,
              }),
            })
          ).json();
        }
        async getArtists(t, e) {
          var i;
          return (
            await this.httpClient.get("labels/".concat(t.labelId, "/artists"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getArtists,
              signal: null == e ? void 0 : e.signal,
              searchParams: (0, r.f)({ page: t.page, pageSize: t.pageSize }),
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    22262: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(8356);
      class a extends o.c {
        async getCollectionKidsTracksLiked(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "landing-blocks/collection/kids/tracks-liked",
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getCollectionKidsTracksLiked,
                searchParams: (0, r.f)({ page: t.page, pageSize: t.pageSize }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getCollectionKidsPlaylistsLiked(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "landing-blocks/collection/kids/playlists-liked",
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getCollectionKidsPlaylistsLiked,
                searchParams: (0, r.f)({ page: t.page, pageSize: t.pageSize }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getCollectionKidsAlbumsLiked(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "landing-blocks/collection/kids/albums-liked",
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getCollectionKidsAlbumsLiked,
                searchParams: (0, r.f)({ page: t.page, pageSize: t.pageSize }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    33289: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getMetatags(t, e) {
          var i;
          return (
            await this.httpClient.get("landing3/metatags", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getMetatags,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getChart(t, e) {
          var i;
          return (
            await this.httpClient.get("landing3/chart", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getChart,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    45150: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getAllIds(t, e) {
          var i;
          return (
            await this.httpClient.get("library/all-ids", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getAllIds,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    31467: function (t, e, i) {
      "use strict";
      i.d(e, {
        k: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(8356);
      class a extends o.c {
        async getUploadUrl(t, e) {
          var i;
          return (
            await this.httpClient.post("loader/upload-url", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, r.f)({
                uid: t.uid,
                "playlist-id": t.playlistId,
                visibility: t.visibility,
                path: t.path,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getUploadUrl,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    26731: function (t, e, i) {
      "use strict";
      i.d(e, {
        A: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(13384);
      class a extends r.c {
        async sendViews(t, e) {
          var i;
          let s = (0, o.c)({ lyricViews: t.lyricViews });
          await this.httpClient.post("lyric-views", {
            prefixUrl: this.config.prefixUrl,
            headers: this.createRequestHeadersFromParams(t),
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (i = this.config.timeouts) || void 0 === i
                ? void 0
                : i.sendViews,
            json: s,
            signal: null == e ? void 0 : e.signal,
          });
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    67600: function (t, e, i) {
      "use strict";
      i.d(e, {
        k: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getMetatagById(t, e) {
          var i;
          return (
            await this.httpClient.get("metatags/".concat(t.id), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                tracksCount: t.tracksCount,
                artistsCount: t.artistsCount,
                composersCount: t.composersCount,
                albumsCount: t.albumsCount,
                promotionsCount: t.promotionsCount,
                featuresCount: t.featuresCount,
                playlistsCount: t.playlistsCount,
                concertsCount: t.concertsCount,
                tracksSortBy: t.tracksSortBy,
                albumsSortBy: t.albumsSortBy,
                withLikesCount: t.withLikesCount,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getMetatagById,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getMetatagAlbums(t, e) {
          return (
            await this.httpClient.get("metatags/".concat(t.id, "/albums"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                period: t.period,
                sortBy: t.sortBy,
                offset: t.offset,
                limit: t.limit,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getMetatagArtists(t, e) {
          return (
            await this.httpClient.get("metatags/".concat(t.id, "/artists"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                period: t.period,
                sortBy: t.sortBy,
                offset: t.offset,
                limit: t.limit,
                tracksPerArtist: t.tracksPerArtist,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getMetatagPlaylists(t, e) {
          return (
            await this.httpClient.get("metatags/".concat(t.id, "/playlists"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                sortBy: t.sortBy,
                offset: t.offset,
                limit: t.limit,
                withLikesCount: t.withLikesCount,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    90920: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return n;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498),
        a = i(13384);
      class n extends r.c {
        async getMusicHistory(t, e) {
          return (
            await this.httpClient.get("music-history", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({ fullModelsCount: t.fullModelsCount }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getMusicHistoryItems(t, e) {
          return (
            await this.httpClient.post("music-history/items", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              json: (0, a.c)({ items: t.items }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    31183: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getShelfRecentlyPlayed(t, e) {
          var i;
          return (
            await this.httpClient.get("non-music/bookshelf/recently-played", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getShelfRecentlyPlayed,
              signal: null == e ? void 0 : e.signal,
              searchParams: (0, o.f)({
                page: null == t ? void 0 : t.page,
                pageSize: null == t ? void 0 : t.pageSize,
              }),
            })
          ).json();
        }
        async getShelfLiked(t, e) {
          var i;
          return (
            await this.httpClient.get("non-music/bookshelf/liked", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getShelfLiked,
              signal: null == e ? void 0 : e.signal,
              searchParams: (0, o.f)({
                page: null == t ? void 0 : t.page,
                pageSize: null == t ? void 0 : t.pageSize,
              }),
            })
          ).json();
        }
        async getPlaylists(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "non-music/editorial/playlist/".concat(t.categoryId, "/"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPlaylists,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getNewEpisodes(t, e) {
          var i;
          return (
            await this.httpClient.get("non-music/new-episodes", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getShelfRecentlyPlayed,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getEditorialAlbums(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "non-music/editorial/album/".concat(t.id),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getEditorialAlbums,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getCategory(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "non-music/category/".concat(t.categoryId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getShelfRecentlyPlayed,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getCategoryAlbums(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "non-music/category/".concat(t.id, "/albums"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getCategoryAlbums,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    54629: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getCompositeOffers(t, e) {
          var i, s;
          let r =
            (null === (i = t.common) || void 0 === i ? void 0 : i.language) ||
            this.config.params.common.language;
          return (
            await this.httpClient.get("proxy/plus-cg-api/offers/composite", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              searchParams: (0, o.f)({
                uid: t.uid,
                target: t.target,
                features: t.features,
                language: r,
              }),
              timeout:
                null === (s = this.config.timeouts) || void 0 === s
                  ? void 0
                  : s.getCompositeOffers,
              retry: this.getRetryPolicyConfig(),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    58261: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getTopArtists(t, e) {
          var i;
          return (
            await this.httpClient.get("personal/top/artists/month", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getTopArtists,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    97533: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(13384);
      class a extends r.c {
        async pinAlbum(t, e) {
          var i;
          let s = (0, o.c)({ id: t.id });
          return (
            await this.httpClient.put("pin/album", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.pinAlbum,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async unpinAlbum(t, e) {
          var i;
          let s = (0, o.c)({ id: t.id });
          return (
            await this.httpClient.delete("pin/album", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unpinAlbum,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async pinPlaylist(t, e) {
          var i;
          let s = (0, o.c)({ uid: t.uid, kind: t.kind });
          return (
            await this.httpClient.put("pin/playlist", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.pinPlaylist,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async unpinPlaylist(t, e) {
          var i;
          let s = (0, o.c)({ uid: t.uid, kind: t.kind });
          return (
            await this.httpClient.delete("pin/playlist", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unpinPlaylist,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async pinArtist(t, e) {
          var i;
          let s = (0, o.c)({ id: t.id });
          return (
            await this.httpClient.put("pin/artist", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.pinArtist,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async unpinArtist(t, e) {
          var i;
          let s = (0, o.c)({ id: t.id });
          return (
            await this.httpClient.delete("pin/artist", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unpinArtist,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async pinWave(t, e) {
          var i;
          let s = (0, o.c)({ seeds: t.seeds });
          return (
            await this.httpClient.put("pin/wave", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.pinWave,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async unpinWave(t, e) {
          var i;
          let s = (0, o.c)({ seeds: t.seeds });
          return (
            await this.httpClient.delete("pin/wave", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unpinWave,
              json: s,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    20918: function (t, e, i) {
      "use strict";
      i.d(e, {
        I: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getPins(t, e) {
          var i;
          return (
            await this.httpClient.get("pins", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getPins,
              retry: this.getRetryPolicyConfig(),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    99566: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getPlaylist(t, e) {
          var i;
          return (
            await this.httpClient.get("playlist/".concat(t.playlistUuid), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                resumeStream: t.resumeStream,
                richTracks: t.richTracks,
                trackPlayCounts: t.trackPlayCounts,
                withSimilarsLikesCount: t.withSimilarsLikesCount,
                page: t.page,
                pageSize: t.pageSize,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getPlaylist,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    95303: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getPlaylists(t, e) {
          return (
            await this.httpClient.get("playlists", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                resumeStream: t.resumeStream,
                page: t.page,
                pageSize: t.pageSize,
                playlistIds: t.playlistIds,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getPlaylistPersonal(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "playlists/personal/".concat(t.playlistId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPlaylistPersonal,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    18594: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async uploadFile(t, e) {
          var i;
          return (
            await this.httpClient.post(t.url, {
              prefixUrl: this.config.prefixUrl,
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.uploadFile,
              body: t.formData,
              signal: null == e ? void 0 : e.signal,
              excludeHeaders: ["x-request-id", "x-retry-count"],
            })
          ).json();
        }
        async reportForAlbumPromo(t, e) {
          var i;
          await this.httpClient.get(t, {
            prefixUrl: this.config.prefixUrl,
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (i = this.config.timeouts) || void 0 === i
                ? void 0
                : i.reportForAlbumPromo,
            signal: null == e ? void 0 : e.signal,
            excludeHeaders: ["x-request-id", "x-retry-count"],
          });
        }
        async getLyricsText(t, e) {
          var i;
          return (
            await this.httpClient.get(t, {
              prefixUrl: this.config.prefixUrl,
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getLyricsText,
              signal: null == e ? void 0 : e.signal,
              excludeHeaders: ["x-request-id", "x-retry-count"],
            })
          ).text();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    18304: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getPromoAlbumInfo(t, e) {
          var i;
          let s = await this.httpClient.get("promo/albums/".concat(t.albumId), {
            prefixUrl: this.config.prefixUrl,
            headers: this.createRequestHeadersFromParams(t),
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (i = this.config.timeouts) || void 0 === i
                ? void 0
                : i.getPromoAlbumInfo,
            signal: null == e ? void 0 : e.signal,
          });
          return await s.json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    3599: function (t, e, i) {
      "use strict";
      i.d(e, {
        S: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getRedAlerts(t, e) {
          var i, s;
          let r =
            (null === (i = t.common) || void 0 === i ? void 0 : i.language) ||
            this.config.params.common.language;
          return (
            await this.httpClient.get("proxy/plus-red-alert/v1/alerts", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              searchParams: (0, o.f)({
                service: t.service,
                client: t.client,
                platform: t.platform,
                countryId: t.countryId,
                language: r,
              }),
              timeout:
                null === (s = this.config.timeouts) || void 0 === s
                  ? void 0
                  : s.getRedAlerts,
              retry: this.getRetryPolicyConfig(),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    74779: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return n;
        },
      });
      var s = i(27198),
        r = i(49498),
        o = i(13384),
        a = i(8356);
      class n extends a.c {
        async getStationInfo(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "rotor/station/".concat(t.stationId, "/info"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getStationInfo,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async sessionNew(t, e) {
          var i;
          let s = (0, o.c)({
            seeds: t.seeds,
            queue: t.queue,
            includeTracksInResponse: t.includeTracksInResponse,
            trackToStartFrom: t.trackToStartFrom,
            clientRemoteType: t.clientRemoteType,
            incognito: t.incognito,
            child: t.child,
            allowExplicit: t.allowExplicit,
            aliceExperiments: t.aliceExperiments,
            djData: t.djData,
            useIchwill: t.useIchwill,
            includeWaveModel: t.includeWaveModel,
            interactive: t.interactive,
          });
          return (
            await this.httpClient.post("rotor/session/new", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              json: s,
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.sessionNew,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async sessionClone(t, e) {
          var i;
          let s = (0, o.c)({
            seeds: t.seeds,
            queue: t.queue,
            includeTracksInResponse: t.includeTracksInResponse,
            trackToStartFrom: t.trackToStartFrom,
            clientRemoteType: t.clientRemoteType,
            incognito: t.incognito,
            child: t.child,
            allowExplicit: t.allowExplicit,
            aliceExperiments: t.aliceExperiments,
            djData: t.djData,
            useIchwill: t.useIchwill,
            includeWaveModel: t.includeWaveModel,
            interactive: t.interactive,
          });
          return (
            await this.httpClient.post(
              "rotor/session/".concat(t.radioSessionId, "/clone"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                json: s,
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.sessionNew,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async sessionTracks(t, e) {
          var i;
          let s = (0, o.c)({
            queue: t.queue,
            aliceExperiments: t.aliceExperiments,
            djData: t.djData,
            useIchwill: t.useIchwill,
            feedbacks: t.feedbacks,
          });
          return (
            await this.httpClient.post(
              "rotor/session/".concat(t.radioSessionId, "/tracks"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                json: s,
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.sessionTracks,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async sessionFeedback(t, e) {
          var i;
          let s = (0, o.c)({
            event: t.feedback.event,
            batchId: t.feedback.batchId,
            from: t.feedback.from,
          });
          return (
            await this.httpClient.post(
              "rotor/session/".concat(t.radioSessionId, "/feedback/"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                json: s,
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.sessionFeedback,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async waveLast(t, e) {
          var i;
          return (
            await this.httpClient.get("rotor/wave/last", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.waveLast,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async waveSettings(t, e) {
          var i;
          return (
            await this.httpClient.get("rotor/wave/settings", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, r.f)({ seeds: null == t ? void 0 : t.seeds }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.waveSettings,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async waveLastReset(t, e) {
          var i;
          return (
            await this.httpClient.post("rotor/wave/last/reset", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.waveLastReset,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getGenerativeInfo(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "rotor/station/".concat(t.stationId, "/stream"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getGenerativeInfo,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async stationFeedback(t, e) {
          return (
            await this.httpClient.post(
              "rotor/station/".concat(t.stationId, "/feedback"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                json: (0, o.c)({ type: t.type, timestamp: t.timestamp }),
                searchParams: (0, r.f)({ streamId: t.streamId }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async combinedLanding(t, e) {
          var i;
          return (
            await this.httpClient.post("rotor/combined/session/landing", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.combinedLanding,
              json: (0, o.c)({
                supportedTypes: t.supportedTypes,
                child: t.child,
                allowExplicit: t.allowExplicit,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async combinedSessionNew(t, e) {
          var i;
          return (
            await this.httpClient.post("rotor/combined/session/new", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.combinedSessionNew,
              json: (0, o.c)({
                supportedTypes: t.supportedTypes,
                child: t.child,
                allowExplicit: t.allowExplicit,
                queue: t.queue,
              }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async combinedSessionNext(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "rotor/combined/session/".concat(t.sessionid, "/next"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.combinedSessionNext,
                json: (0, o.c)({ queue: t.queue }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async stationsDashboard(t, e) {
          var i;
          return (
            await this.httpClient.get("rotor/stations/dashboard", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.stationsDashboard,
              searchParams: (0, r.f)({ limit: t.limit }),
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    31250: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getTrackIds(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "search-playlist/".concat(t.uid, "/").concat(t.kind),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, o.f)({ part: t.part }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getTrackIds,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    35866: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return n;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(13384),
        a = i(49498);
      class n extends r.c {
        async getInstantMixedSearch(t, e) {
          var i;
          return (
            await this.httpClient.get("search/instant/mixed", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({
                text: t.text,
                type: t.type,
                page: t.page,
                filter: t.filter,
                pageSize: t.pageSize,
                nocorrect: t.nocorrent,
                onlyCounters: t.onlyCounters,
                withLikesCount: t.withLikesCount,
                from: t.from,
                inputType: t.inputType,
                vocalTypes: t.vocalTypes,
                releaseYears: t.releaseYears,
                epochs: t.epochs,
                moods: t.moods,
                activities: t.activities,
                genres: t.genres,
                lyricsLanguages: t.lyricsLanguages,
                moodScoresFrom: t.moodScoresFrom,
                moodScoresTo: t.moodScoresTo,
                activityScoresFrom: t.activityScoresFrom,
                activityScoresTo: t.activityScoresTo,
                withBestResults: t.withBestResults,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getInstantMixedSearch,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async sendFeedback(t, e) {
          var i;
          let s = (0, o.c)({
            blockType: t.blockType,
            entityId: t.entityId,
            timestamp: t.timestamp,
            blockPosition: t.blockPosition,
            position: t.position,
            searchRequestId: t.searchRequestId,
            query: t.query,
            page: t.page,
            clickType: t.clickType,
            clientNow: t.clientNow,
            absolutePosition: t.absoluteBlockPosition,
            clientSearchContext: t.clientSearchContext,
            searchType: t.searchType,
          });
          return (
            await this.httpClient.post("search/feedback", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              json: s,
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.sendFeedback,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    91798: function (t, e, i) {
      "use strict";
      i.d(e, {
        t: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getUserSlides(t, e) {
          var i;
          return (
            await this.httpClient.get("rewind/slides/user", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getUserSlides,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getArtistSlides(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "rewind/slides/artist/".concat(t.artistId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getArtistSlides,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getPodcastSlides(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "rewind/slides/podcast/".concat(t.podcastId),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPodcastSlides,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    77597: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return o;
        },
      });
      var s = i(27198),
        r = i(8356);
      class o extends r.c {
        async getPlaylistIds(t, e) {
          var i;
          return (
            await this.httpClient.get("tags/".concat(t.id, "/playlist-ids"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getPlaylistIds,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    62713: function (t, e, i) {
      "use strict";
      i.d(e, {
        X: function () {
          return n;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(13384),
        a = i(49498);
      class n extends r.c {
        async log(t) {
          var e;
          await this.httpClient.post("log", {
            prefixUrl: this.config.prefixUrl,
            json: (0, o.c)(t.payload),
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (e = this.config.timeouts) || void 0 === e
                ? void 0
                : e.log,
            excludeHeaders: ["x-request-id", "x-retry-count", "x-retpath-y"],
            searchParams: (0, a.f)(t.urlParams),
          });
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    56950: function (t, e, i) {
      "use strict";
      i.d(e, {
        O: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getTopByGenre(t, e) {
          var i;
          return (
            await this.httpClient.get("top/".concat(t.category), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({
                genre: t.genre,
                period: t.period,
                page: t.page,
                pageSize: t.pageSize,
                popularTracksPerArtist: t.popularTracksPerArtist,
                chartRegion: t.chartRegion,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getTopByGenre,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    66984: function (t, e, i) {
      "use strict";
      i.d(e, {
        H: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async getStorageData(t, e) {
          var i;
          let {
            formatFlags: s,
            direct: r,
            preview: a,
            canUseStreaming: n,
            tsInSeconds: l,
            sign: c,
            debug: u,
            isAliceRequester: d,
            requireMp3Link: h,
          } = t;
          return (
            await this.httpClient.get(
              "tracks/".concat(t.trackId, "/download-info"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, o.f)({
                  formatFlags: s,
                  debug: u,
                  preview: a,
                  direct: r,
                  isAliceRequester: d,
                  requireMp3Link: h,
                  canUseStreaming: n,
                  ts: l,
                  sign: c,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getStorageData,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getTracksMeta(t, e) {
          var i;
          return (
            await this.httpClient.post("tracks", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              body: (function (t) {
                let e = new FormData();
                return (
                  Object.getOwnPropertyNames(t).forEach((i) => {
                    let s = t[i];
                    ("number" == typeof s ||
                      "string" == typeof s ||
                      "boolean" == typeof s) &&
                      e.append(i, String(s)),
                      Array.isArray(s) &&
                        s.forEach((t) => {
                          ("number" == typeof t || "string" == typeof t) &&
                            e.append(i, String(t));
                        });
                  }),
                  e
                );
              })({
                trackIds: t.trackIds,
                removeDuplicates: t.removeDuplicates || !1,
                withProgress: t.withProgress,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getTracksMeta,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getFullInfoTrack(t, e) {
          var i;
          let s = t.albumId
            ? "".concat(t.trackId, ":").concat(t.albumId)
            : t.trackId;
          return (
            await this.httpClient.get("tracks/".concat(s, "/full-info"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getFullInfoTrack,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getFullDescriptionTrack(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "tracks/".concat(t.trackId, "/supplement"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getFullDescriptionTrack,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getCredits(t, e) {
          var i;
          return (
            await this.httpClient.get("tracks/".concat(t.trackId, "/credits"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getCredits,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getDisclaimer(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "tracks/".concat(t.trackId, "/disclaimer"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getDisclaimer,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getTrailer(t, e) {
          var i;
          return (
            await this.httpClient.get("tracks/".concat(t.trackId, "/trailer"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getTrailer,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getLyrics(t, e) {
          var i;
          return (
            await this.httpClient.get("tracks/".concat(t.trackId, "/lyrics"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              searchParams: (0, o.f)({
                sign: t.sign,
                timeStamp: t.timeStamp,
                format: t.format,
              }),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getLyrics,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    83936: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return a;
        },
      });
      var s = i(27198),
        r = i(8356),
        o = i(13384);
      class a extends r.c {
        async changeTrack(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "ugc/tracks/".concat(t.trackId, "/change"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                json: (0, o.c)({ artist: t.artist, title: t.title }),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.changeTrack,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    83052: function (t, e, i) {
      "use strict";
      i.d(e, {
        V: function () {
          return l;
        },
      });
      var s = i(27198),
        r = i(89143),
        o = i(66610),
        a = i(49498),
        n = i(8356);
      class l extends n.c {
        async getLikedAlbums(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/likes/albums/page"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  rich: !0,
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-by": t.sortBy,
                  "sort-order": t.sortOrder,
                  metaType: t.metaType,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getLikedAlbums,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getLikedArtists(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/likes/artists/page"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-by": t.sortBy,
                  "sort-order": t.sortOrder,
                  withTimestamps: t.withTimestamps,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getLikedArtists,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getDislikedArtists(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/dislikes/artists"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  "sort-by": t.sortBy,
                  "sort-order": t.sortOrder,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getDislikedArtists,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getLikedPlaylists(t, e) {
          var i;
          let s = await this.httpClient.get(
              "users/".concat(t.userId, "/likes/playlists"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams({
                  ...t,
                  common: { ...t.common, withoutInvocationInfo: !1 },
                }),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-by": t.sortBy,
                  "sort-order": t.sortOrder,
                  playlistMetaType: t.playlistMetaType,
                  withTracks: t.withTracks,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getLikedPlaylists,
                signal: null == e ? void 0 : e.signal,
              },
            ),
            r = await s.json();
          return { likedPlaylists: r.result, pager: r.pager };
        }
        async getPlaylistsKinds(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/playlists/list/kinds"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                searchParams: (0, a.f)({
                  addPlaylistWithLikes: t.addPlaylistWithLikes,
                }),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPlaylistsKinds,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async createPlaylist(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "users/".concat(t.userId, "/playlists/create"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.createPlaylist,
                searchParams: (0, a.f)({
                  visibility: t.visibility,
                  title: t.title,
                  description: t.description,
                }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getPlaylistsByKinds(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "users/".concat(t.userId, "/playlists"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  kinds: t.kinds,
                  withLikesCount: t.withLikesCount,
                  withTracks: t.withTracks,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPlaylistsByKinds,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getCreatedPlaylists(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/playlists/list"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  page: t.page,
                  pageSize: t.pageSize,
                  "sort-by": t.sortBy,
                  "sort-order": t.sortOrder,
                  withLikesCount: t.withLikesCount,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getCreatedPlaylists,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getPlaylistWithRichTracks(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/playlists/").concat(t.playlistKind),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  resumeStream: t.resumeStream,
                  trackMetaType: t.trackMetaType,
                  page: t.page,
                  pageSize: t.pageSize,
                  trackPlayCounts: t.trackPlayCounts,
                  withSimilarsLikesCount: t.withSimilarsLikesCount,
                  richTracks: !0,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPlaylistWithRichTracks,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async changePlaylistTitle(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "users/"
                .concat(t.userId, "/playlists/")
                .concat(t.playlistKind, "/name"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({ value: t.title }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.changePlaylistTitle,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async deletePlaylist(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "users/"
                .concat(t.userId, "/playlists/")
                .concat(t.playlistKind, "/delete"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.deletePlaylist,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async changePlaylistDescription(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "users/"
                .concat(t.userId, "/playlists/")
                .concat(t.playlistKind, "/description"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({ value: t.description }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.changePlaylistDescription,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getPlaylistWithTracksIds(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/playlists/").concat(t.playlistKind),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  resumeStream: t.resumeStream,
                  trackMetaType: t.trackMetaType,
                  page: t.page,
                  pageSize: t.pageSize,
                  trackPlayCounts: t.trackPlayCounts,
                  withSimilarsLikesCount: t.withSimilarsLikesCount,
                  richTracks: !1,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPlaylistWithTracksIds,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async likeTrack(t, e) {
          var i;
          let s = await this.httpClient.post(
              "users/".concat(t.userId, "/likes/tracks/add"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({ "track-id": t.entityId }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.likeTrack,
                signal: null == e ? void 0 : e.signal,
              },
            ),
            o = await s.json();
          return (null == o ? void 0 : o.revision) ? r.B.OK : r.B.ERROR;
        }
        async unlikeTrack(t, e) {
          var i;
          let s = await this.httpClient.post(
              "users/"
                .concat(t.userId, "/likes/tracks/")
                .concat(t.entityId, "/remove"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.unlikeTrack,
                signal: null == e ? void 0 : e.signal,
              },
            ),
            o = await s.json();
          return (null == o ? void 0 : o.revision) ? r.B.OK : r.B.ERROR;
        }
        async getDislikedTracks(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/dislikes/tracks"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getDislikedTracks,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async dislikeTrack(t, e) {
          var i;
          let s = await this.httpClient.post(
              "users/".concat(t.userId, "/dislikes/tracks/add"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({ "track-id": t.entityId }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.dislikeTrack,
                signal: null == e ? void 0 : e.signal,
              },
            ),
            o = await s.json();
          return (null == o ? void 0 : o.revision) ? r.B.OK : r.B.ERROR;
        }
        async undislikeTrack(t, e) {
          var i;
          let s = await this.httpClient.post(
              "users/"
                .concat(t.userId, "/dislikes/tracks/")
                .concat(t.entityId, "/remove"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.undislikeTrack,
                signal: null == e ? void 0 : e.signal,
              },
            ),
            o = await s.json();
          return (null == o ? void 0 : o.revision) ? r.B.OK : r.B.ERROR;
        }
        async likeArtist(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/".concat(t.userId, "/likes/artists/add"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({ "artist-id": t.entityId }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.likeArtist,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async unlikeArtist(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/"
              .concat(t.userId, "/likes/artists/")
              .concat(t.entityId, "/remove"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unlikeArtist,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async dislikeArtist(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/".concat(t.userId, "/dislikes/artists/add"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({ "artist-id": t.entityId }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.dislikeArtist,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async undislikeArtist(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/"
              .concat(t.userId, "/dislikes/artists/")
              .concat(t.entityId, "/remove"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.undislikeArtist,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async likeAlbum(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/".concat(t.userId, "/likes/albums/add"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({ "album-id": t.entityId }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.likeAlbum,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async unlikeAlbum(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/"
              .concat(t.userId, "/likes/albums/")
              .concat(t.entityId, "/remove"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unlikeAlbum,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async likePlaylist(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/".concat(t.userId, "/likes/playlists/add"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({
                "owner-uid": t.ownerId,
                kind: t.kindId,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.likePlaylist,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async unlikePlaylist(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/"
              .concat(t.userId, "/likes/playlists/")
              .concat(t.ownerId, "-")
              .concat(t.kindId, "/remove"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unlikePlaylist,
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === r.B.OK ? r.B.OK : r.B.ERROR;
        }
        async getLikedClips(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/likes/clips"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({ page: t.page, pageSize: t.pageSize }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getLikedClips,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async likeClip(t, e) {
          var i;
          await this.httpClient.post(
            "users/".concat(t.userId, "/likes/clips/add"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({ "clip-id": t.entityId }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.likeClip,
              signal: null == e ? void 0 : e.signal,
            },
          );
        }
        async unlikeClip(t, e) {
          var i;
          await this.httpClient.post(
            "users/"
              .concat(t.userId, "/likes/clips/")
              .concat(t.entityId, "/remove"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.unlikeClip,
              signal: null == e ? void 0 : e.signal,
            },
          );
        }
        async presaveAlbum(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/".concat(t.userId, "/presaves/add"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.presaveAlbum,
              searchParams: (0, a.f)({
                albumId: t.albumId,
                likeAfterRelease: t.likeAfterRelease,
              }),
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === o.Z.OK ? o.Z.OK : o.Z.ERROR;
        }
        async removePresaveAlbum(t, e) {
          var i;
          let s = await this.httpClient.post(
            "users/".concat(t.userId, "/presaves/remove"),
            {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.removePresaveAlbum,
              searchParams: (0, a.f)({ albumId: t.albumId }),
              signal: null == e ? void 0 : e.signal,
            },
          );
          return (await s.json()) === o.Z.OK ? o.Z.OK : o.Z.ERROR;
        }
        async getPresaves(t, e) {
          var i;
          return (
            await this.httpClient.get("users/".concat(t.userId, "/presaves"), {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(t),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a.f)({
                includeReleased: t.includeReleased,
                includeUpcoming: t.includeUpcoming,
              }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.getPresaves,
              signal: null == e ? void 0 : e.signal,
            })
          ).json();
        }
        async getSearchHistory(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/search-history"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({
                  clientSearchContext: t.clientSearchContext,
                  contentType: t.contentType,
                  supportedTypes: t.supportedTypes,
                }),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getSearchHistory,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async clearSearchHistory(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/".concat(t.userId, "/search-history/clear"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.clearSearchHistory,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async changePlaylistRelative(t, e) {
          return (
            await this.httpClient.post(
              "users/"
                .concat(t.userId, "/playlists/")
                .concat(t.playlistKind, "/change-relative"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                searchParams: (0, a.f)({ diff: t.diff, revision: t.revision }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async uploadPlaylistCover(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "users/"
                .concat(t.userId, "/playlists/")
                .concat(t.playlistKind, "/cover/upload"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                body: t.formData,
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.uploadPlaylistCover,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async getPlaylistTrailer(t, e) {
          var i;
          return (
            await this.httpClient.get(
              "users/"
                .concat(t.userId, "/playlists/")
                .concat(t.playlistKind, "/trailer"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.getPlaylistTrailer,
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        async togglePlaylistVisibility(t, e) {
          var i;
          return (
            await this.httpClient.post(
              "users/"
                .concat(t.userId, "/playlists/")
                .concat(t.playlistKind, "/visibility"),
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(t),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.createPlaylist,
                searchParams: (0, a.f)({ value: t.visibility }),
                signal: null == e ? void 0 : e.signal,
              },
            )
          ).json();
        }
        constructor(t, e) {
          super(t, e),
            (0, s._)(this, "httpClient", void 0),
            (0, s._)(this, "config", void 0),
            (this.httpClient = t),
            (this.config = e);
        }
      }
    },
    89143: function (t, e, i) {
      "use strict";
      var s, r;
      i.d(e, {
        B: function () {
          return s;
        },
      }),
        ((r = s || (s = {})).OK = "ok"),
        (r.ERROR = "error");
    },
    66610: function (t, e, i) {
      "use strict";
      var s, r;
      i.d(e, {
        Z: function () {
          return s;
        },
      }),
        ((r = s || (s = {})).OK = "ok"),
        (r.ERROR = "error");
    },
    13384: function (t, e, i) {
      "use strict";
      function s(t) {
        let e = {};
        return (
          Object.getOwnPropertyNames(t)
            .filter((e) => void 0 !== t[e] && null !== t[e])
            .map((i) => {
              e[i] = t[i];
            }),
          e
        );
      }
      i.d(e, {
        c: function () {
          return s;
        },
      });
    },
    15186: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      let s = (t) => String(t).split(":"),
        r = (t, e) => (e ? [t, e].join(":") : t);
    },
    24473: function (t, e, i) {
      "use strict";
      i.d(e, {
        YJ: function () {
          return r;
        },
        ys: function () {
          return s;
        },
        mZ: function () {
          return c;
        },
        Bz: function () {
          return l;
        },
      });
      let s = 2e3,
        r = 1e4;
      var o = i(23172),
        a = i(47877),
        n = i(15717);
      let l = (t, e) => {
          let i = (0, o.Z)(t);
          return (
            Object.values(i).forEach((t) => {
              t &&
                Object.keys(t).forEach((i) => {
                  let s = e.reduce(
                    (t, e) => {
                      let { type: i, value: s, conditionFn: r = () => !0 } = e;
                      if (!r(t)) return t;
                      switch (i) {
                        case "sum":
                          return t + s;
                        case "multiply":
                          return t * s;
                        case "devide":
                          return t / s;
                        case "override":
                          return s;
                        default:
                          return t;
                      }
                    },
                    (0, a.Z)(t, [i]),
                  );
                  (0, n.Z)(t, [i], s);
                });
            }),
            i
          );
        },
        c = l(
          {
            redAlertResource: { getRedAlerts: s },
            rotorResource: {
              getStationInfo: 180,
              sessionNew: s,
              sessionTracks: s,
              sessionFeedback: 450,
              waveLast: 170,
              waveSettings: 180,
              waveLastReset: 30,
            },
            adsResource: { saveAds: 200 },
            accountResource: {
              experiments: 130,
              experimentsDetails: 600,
              settings: 190,
              about: 600,
            },
            albumsResource: {
              getAlbumWithTracksIds: 1500,
              getAlbumWithRichTracks: s,
              getDisclaimer: 150,
              getTrailer: s,
              getRelatedContent: 1e3,
              getAlbums: 1e3,
            },
            artistsResource: {
              getArtistTracks: 650,
              getArtistTrackIds: 310,
              getSafeDirectAlbums: 210,
              getBriefInfo: 600,
              getSimilarArtists: 90,
              getConcerts: 100,
              getFamiliarYouInfo: s,
              getFamiliarYou: 500,
              getDisclaimer: 150,
              getTrailer: s,
              getInfo: s,
              getSkeleton: s,
              getAboutArtist: s,
              getClips: s,
            },
            availabilityResource: { getAvailabilityTracks: 500 },
            clipsResource: {
              getClip: 2e3,
              getCredits: 200,
              getDisclaimer: s,
              getClipsWillLike: s,
            },
            chartResource: {
              getChartPodcasts: 2e3,
              getChartPodcastsCategory: 800,
            },
            dynamicPagesResource: {
              getTriggers: 3e3,
              getTrigger: 3e3,
              shown: 3e3,
              action: 3e3,
            },
            filtersResource: { getTracksFilters: s, getFilterName: s },
            libraryResource: { getAllIds: 260 },
            searchResource: { getInstantMixedSearch: 1e3, sendFeedback: 170 },
            searchPlaylistResource: { getTrackIds: 2e3 },
            siteMapResource: { link: s },
            slidesResource: {
              getUserSlides: 500,
              getArtistSlides: 500,
              getPodcastSlides: 500,
            },
            topResource: { getTopByGenre: 1e3 },
            tracksResource: {
              getStorageData: 140,
              getTracksMeta: 2700,
              getDisclaimer: 150,
              getFullInfoTrack: 600,
              getFullDescriptionTrack: 300,
              getCredits: 400,
              getLyrics: 80,
              getTrailer: s,
            },
            usersResource: {
              getLikedAlbums: 250,
              getLikedArtists: 250,
              getDislikedArtists: 200,
              getLikedPlaylists: 480,
              getPlaylistsKinds: 800,
              createPlaylist: 500,
              getPlaylistsByKinds: 800,
              getCreatedPlaylists: 670,
              changePlaylistTitle: s,
              changePlaylistDescription: s,
              uploadPlaylistCover: s,
              deletePlaylist: s,
              getPlaylistTrailer: s,
              getPlaylistWithTracksIds: 1e3,
              getPlaylistWithRichTracks: 1500,
              getSearchHistory: 220,
              clearSearchHistory: 60,
              getDislikedTracks: 1e3,
              likeTrack: 300,
              unlikeTrack: 60,
              likeArtist: 230,
              unlikeArtist: 120,
              likeAlbum: 120,
              unlikeAlbum: 70,
              likePlaylist: 120,
              unlikePlaylist: 90,
              getLikedClips: s,
              likeClip: 2e3,
              unlikeClip: 2e3,
              dislikeArtist: 40,
              undislikeArtist: 400,
              dislikeTrack: 140,
              undislikeTrack: 300,
              getPresaves: 300,
              presaveAlbum: 200,
              removePresaveAlbum: 300,
            },
            personalResource: { getTopArtists: s },
            playlistResource: { getPlaylist: 1e3 },
            playlistsResource: { getPlaylists: s, getPlaylistPersonal: 1e3 },
            landingResource: { getSkeleton: 5e3, getBlock: s },
            landingBlocksResource: {
              getCollectionKidsTracksLiked: s,
              getCollectionKidsPlaylistsLiked: s,
              getCollectionKidsAlbumsLiked: s,
            },
            landing3Resource: { getMetatags: s, getChart: s },
            loaderResource: { getUploadUrl: s },
            metatagsResource: { getMetatagById: s },
            pinResource: {
              pinAlbum: s,
              unpinAlbum: s,
              pinPlaylist: s,
              unpinPlaylist: s,
              pinArtist: s,
              unpinArtist: s,
              pinWave: s,
              unpinWave: s,
            },
            pinsResource: { getPins: s },
            getFileInfoResource: { getFileInfo: s, getByteRange: s },
            tagResource: { getPlaylistIds: s },
            feedResource: {
              getPromotionsById: s,
              getWizardGenres: 1e3,
              getWizardArtistsByGenre: 1e3,
              finishWizard: 1e3,
            },
            musicHistoryResource: {
              getMusicHistory: s,
              getMusicHistoryItems: s,
            },
            streamsResource: {
              progressSync: 150,
              markAlbumFinished: 150,
              markAlbumUnfinished: 150,
              markFinished: 350,
              markUnfinished: 150,
            },
            lyricViewsResource: { sendViews: 140 },
            nonMusicResource: {
              getShelfRecentlyPlayed: 500,
              getShelfLiked: 1e3,
              getPlaylists: 200,
              getNewEpisodes: 1e3,
              getEditorialAlbums: 200,
              getCategory: 2e3,
              getCategoryAlbums: 200,
            },
            donationResource: { getAlbumDonations: s },
            prefixlessResource: {
              uploadFile: 4e5,
              reportForAlbumPromo: s,
              getLyricsText: s,
            },
            offersResource: { getCompositeOffers: s },
            afterTrackResource: { getAfterTrack: s },
            ugcResource: { changeTrack: 200 },
            collectionResource: { sync: 1e3 },
            disclaimersResource: { getDisclaimers: s },
            familyResource: { getInviteInfo: s, acceptInvite: s },
            childrenLandingResource: {
              getSkeleton: 1e3,
              getEditorialPlaylist: 200,
              getEditorialAlbum: 200,
            },
            promoResource: { getPromoAlbumInfo: s },
            telemetryResouce: { log: s },
            labelsResource: { getData: s, getAlbums: s, getArtists: s },
          },
          [
            { type: "override", value: 200, conditionFn: (t) => t < 200 },
            { type: "multiply", value: 1.5, conditionFn: (t) => t >= 1e3 },
            { type: "multiply", value: 2, conditionFn: (t) => t < 1e3 },
            { type: "sum", value: 200 },
          ],
        );
    },
  },
]);
