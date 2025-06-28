!(function (n) {
  if (!n.Ya || !Ya.Rum) throw new Error("Rum: interface is not defined");
  var e = Ya.Rum;
  e.getSetting = function (n) {
    var t = e._settings[n];
    return null === t ? null : t || "";
  };
})("undefined" != typeof self ? self : window);

!(function (e, r) {
  var n = {
      client: ["690.2354", 1e3, 100, 0],
      uncaught: ["690.2361", 100, 10, 0],
      external: ["690.2854", 100, 10, 0],
      script: ["690.2609", 100, 10, 0],
    },
    t = {};
  (r.ERROR_LEVEL = {
    INFO: "info",
    DEBUG: "debug",
    WARN: "warn",
    ERROR: "error",
    FATAL: "fatal",
  }),
    (r._errorSettings = {
      clck: "https://yandex.ru/clck/click",
      beacon: !0,
      project: "unknown",
      page: "",
      env: "",
      experiments: [],
      additional: {},
      platform: "",
      region: "",
      dc: "",
      host: "",
      service: "",
      level: "",
      version: "",
      yandexuid: "",
      loggedin: !1,
      coordinates_gp: "",
      referrer: !0,
      preventError: !1,
      unhandledRejection: !1,
      traceUnhandledRejection: !1,
      uncaughtException: !0,
      debug: !1,
      limits: {},
      silent: {},
      filters: {},
      pageMaxAge: 864e6,
      initTimestamp: +new Date(),
    });
  var o = !1;
  function a(e, r) {
    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n]);
    return e;
  }
  function i(e) {
    return (
      "boolean" == typeof e && (e = +e), "number" == typeof e ? e + "" : null
    );
  }
  (r.initErrors = function (n) {
    var t = a(r._errorSettings, n);
    o ||
      (t.uncaughtException &&
        (function () {
          var n = r._errorSettings;
          if (e.addEventListener)
            e.addEventListener("error", s),
              n.resourceFails && e.addEventListener("error", l, !0),
              "Promise" in e &&
                n.unhandledRejection &&
                e.addEventListener("unhandledrejection", function (e) {
                  var n,
                    t,
                    o = e.reason,
                    a = {};
                  o &&
                    (o.stack && o.message
                      ? ((n = o.message), (t = o.stack))
                      : ((n = String(o)),
                        (t = r._parseTraceablePromiseStack(e.promise)),
                        "[object Event]" === n
                          ? (n = "event.type: " + o.type)
                          : "[object Object]" === n && (a.unhandledObject = o)),
                    o.target && o.target.src && (a.src = o.target.src),
                    s({
                      message: "Unhandled rejection: " + n,
                      stack: t,
                      additional: a,
                    }));
                });
          else {
            var t = e.onerror;
            e.onerror = function (e, r, n, o, a) {
              s({
                error: a || new Error(e || "Empty error"),
                message: e,
                lineno: n,
                colno: o,
                filename: r,
              }),
                t && t.apply(this, arguments);
            };
          }
        })(),
      t.unhandledRejection &&
        t.traceUnhandledRejection &&
        r._traceUnhandledRejection &&
        r._traceUnhandledRejection(),
      (o = !0));
  }),
    (r.updateErrors = function (e) {
      a(r._errorSettings, e);
    }),
    (r.updateAdditional = function (e) {
      r._errorSettings.additional = a(r._errorSettings.additional || {}, e);
    }),
    (r._handleError = function (e, o, i) {
      var s,
        l,
        c = r._errorSettings;
      if ((c.preventError && e.preventDefault && e.preventDefault(), o))
        (s = e), (l = "client");
      else {
        (s = r._normalizeError(e)), (l = s.type);
        var d = c.onError;
        "function" == typeof d && d(s);
        var u = c.transform;
        if (("function" == typeof u && (s = u(s)), !s)) return;
        s.settings && (i = s.settings);
      }
      var g = +new Date(),
        f = c.initTimestamp,
        p = c.pageMaxAge;
      if (!(-1 !== p && f && f + p < g)) {
        var m = n[l][1];
        "number" == typeof c.limits[l] && (m = c.limits[l]);
        var v = n[l][2];
        "number" == typeof c.silent[l] && (v = c.silent[l]);
        var h = n[l][3];
        if (h < m || -1 === m) {
          s.path = n[l][0];
          var E = r._getErrorData(
              s,
              {
                silent: h < v || -1 === v ? "no" : "yes",
                isCustom: Boolean(o),
              },
              a(a({}, c), i),
            ),
            _ = function (e) {
              (t[s.message] = !1), r._sendError(e.path, e.vars), n[l][3]++;
            }.bind(this, E);
          if (void 0 === c.throttleSend) _();
          else {
            if (t[s.message]) return;
            (t[s.message] = !0), setTimeout(_, c.throttleSend);
          }
        }
      }
    }),
    (r._getReferrer = function (r) {
      var n = r.referrer,
        t = typeof n;
      return "function" === t
        ? n()
        : "string" === t && n
          ? n
          : !1 !== n && e.location
            ? e.location.href
            : void 0;
    }),
    (r.getErrorSetting = function (e) {
      return r._errorSettings[e];
    }),
    (r._buildExperiments = function (e) {
      return e instanceof Array ? e.join(";") : "";
    }),
    (r._buildAdditional = function (e, r) {
      var n = "";
      try {
        var t = a(a({}, e), r);
        0 !== Object.keys(t).length && (n = JSON.stringify(t));
      } catch (e) {}
      return n;
    }),
    (r._getErrorData = function (n, t, o) {
      t = t || {};
      var a = r._buildExperiments(o.experiments),
        s = r._buildAdditional(o.additional, n.additional),
        l = {
          "-stack": n.stack,
          "-url": n.file,
          "-line": n.line,
          "-col": n.col,
          "-block": n.block,
          "-method": n.method,
          "-msg": n.message,
          "-env": o.env,
          "-external": n.external,
          "-externalCustom": n.externalCustom,
          "-project": o.project,
          "-service": n.service || o.service,
          "-page": n.page || o.page,
          "-platform": o.platform,
          "-level": n.level,
          "-experiments": a,
          "-version": o.version,
          "-region": o.region,
          "-dc": o.dc,
          "-host": o.host,
          "-yandexuid": o.yandexuid,
          "-loggedin": o.loggedin,
          "-coordinates_gp": n.coordinates_gp || o.coordinates_gp,
          "-referrer": r._getReferrer(o),
          "-source": n.source,
          "-sourceMethod": n.sourceMethod,
          "-type": t.isCustom ? n.type : "",
          "-additional": s,
          "-adb": i(Ya.blocker) || i(o.blocker),
          "-cdn": e.YaStaticRegion,
          "-ua": navigator.userAgent,
          "-silent": t.silent,
          "-ts": +new Date(),
          "-init-ts": o.initTimestamp,
        };
      return (
        o.debug &&
          e.console &&
          console[console[n.level] ? n.level : "error"](
            "[error-counter] " + n.message,
            l,
            n.stack,
          ),
        { path: n.path, vars: l }
      );
    }),
    (r._baseNormalizeError = function (e) {
      var r = (e = e || {}).error,
        n = e.filename || e.fileName || "",
        t = (r && r.stack) || e.stack || "",
        o = e.message || "",
        a = (r && r.additional) || e.additional;
      return {
        file: n,
        line: e.lineno || e.lineNumber,
        col: e.colno || e.colNumber,
        stack: t,
        message: o,
        additional: a,
      };
    }),
    (r._normalizeError = function (e) {
      var n = r._baseNormalizeError(e),
        t = "uncaught",
        o = r._isExternalError(n.file, n.message, n.stack),
        a = "",
        i = "";
      return (
        o.hasExternal
          ? ((t = "external"), (a = o.common), (i = o.custom))
          : /^Script error\.?$/.test(n.message) && (t = "script"),
        (n.external = a),
        (n.externalCustom = i),
        (n.type = t),
        n
      );
    }),
    (r._createVarsString = function (e) {
      var r = [];
      for (var n in e)
        e.hasOwnProperty(n) &&
          (e[n] || 0 === e[n]) &&
          r.push(n + "=" + encodeURIComponent(e[n]).replace(/\*/g, "%2A"));
      return r.join(",");
    }),
    (r._sendError = function (e, n) {
      r.send(null, e, r._createVarsString(n), null, null, null, null);
    });
  var s = function (e) {
      r._handleError(e, !1);
    },
    l = function (e) {
      var n = e.target;
      if (n) {
        var t = n.srcset || n.src;
        if ((t || (t = n.href), t)) {
          var o = n.tagName || "UNKNOWN";
          r.logError({ message: o + " load error", additional: { src: t } });
        }
      }
    };
  r._parseTraceablePromiseStack = function () {};
})("undefined" != typeof self ? self : window, Ya.Rum);

!(function (e) {
  var r = {
    url: {
      0: /(miscellaneous|extension)_bindings/,
      1: /^chrome:/,
      2: /kaspersky-labs\.com\//,
      3: /^(?:moz|chrome|safari)-extension:\/\//,
      4: /^file:/,
      5: /^resource:\/\//,
      6: /webnetc\.top/,
      7: /local\.adguard\.com/,
    },
    message: {
      0: /__adgRemoveDirect/,
      1: /Content Security Policy/,
      2: /vid_mate_check/,
      3: /ucapi/,
      4: /Access is denied/i,
      5: /^Uncaught SecurityError/i,
      6: /__ybro/,
      7: /__show__deepen/,
      8: /ntp is not defined/,
      9: /Cannot set property 'install' of undefined/,
      10: /NS_ERROR/,
      11: /Error loading script/,
      12: /^TypeError: undefined is not a function$/,
      13: /__firefox__\.(?:favicons|metadata|reader|searchQueryForField|searchLoginField)/,
    },
    stack: {
      0: /(?:moz|chrome|safari)-extension:\/\//,
      1: /adguard.*\.user\.js/i,
    },
  };
  function n(e, r) {
    if (e && r) {
      var n = [];
      for (var o in r)
        if (r.hasOwnProperty(o)) {
          var i = r[o];
          "string" == typeof i && (i = new RegExp(i)),
            i instanceof RegExp && i.test(e) && n.push(o);
        }
      return n.join("_");
    }
  }
  function o(e, o) {
    var i,
      a = [];
    for (var t in r)
      r.hasOwnProperty(t) && (i = n(e[t], o[t])) && a.push(t + "~" + i);
    return a.join(";");
  }
  e._isExternalError = function (n, i, a) {
    var t = e._errorSettings.filters || {},
      s = {
        url: (n || "") + "",
        message: (i || "") + "",
        stack: (a || "") + "",
      },
      c = o(s, r),
      u = o(s, t);
    return { common: c, custom: u, hasExternal: !(!c && !u) };
  };
})(Ya.Rum);

!(function () {
  "use strict";
  var e;
  (e = Ya.Rum).logError = function (r, o, s) {
    (r = r || {}),
      ("string" != typeof o && void 0 !== o) ||
        ((o = new Error(o)).justCreated = !0);
    var a = r.message || "",
      t = e._baseNormalizeError(o);
    t.message && !r.ignoreErrorMessage && (a && (a += "; "), (a += t.message)),
      (t.message = a || "Empty error");
    for (
      var g = [
          "service",
          "source",
          "type",
          "block",
          "additional",
          "level",
          "page",
          "method",
          "sourceMethod",
          "coordinates_gp",
        ],
        i = 0;
      i < g.length;
      i++
    ) {
      var n = g[i];
      r[n] ? (t[n] = r[n]) : o && o[n] && (t[n] = o[n]);
    }
    e._handleError(t, !0, s);
  };
})();

function initErrorBooster({
  project,
  page,
  regionId,
  platform,
  environment,
  version,
  unhandledRejection,
  uncaughtException,
  resourceFails,
}) {
  Ya.Rum.initErrors({
    project: `'${project}'`,
    page: `'${page}'`,
    region: `'${regionId}'`,
    ...(platform ? { "-platform": `'${platform}'` } : {}),
    env: `'${environment}'`,
    version: `'${version}'`,
    unhandledRejection,
    uncaughtException,
    resourceFails,
  });
}
