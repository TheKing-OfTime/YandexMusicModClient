!(function (n, i) {
  if (((n.Ya = n.Ya || {}), Ya.Rum))
    throw new Error("Rum: interface is already defined");
  var e = n.performance,
    t =
      (e && e.timing && e.timing.navigationStart) ||
      Ya.startPageLoad ||
      +new Date(),
    a = n.requestAnimationFrame,
    r = (Ya.Rum = {
      enabled: !!e,
      vsStart: document.visibilityState,
      vsChanged: !1,
      _defTimes: [],
      _defRes: [],
      _deltaMarks: {},
      _markListeners: {},
      _settings: {},
      _vars: {},
      init: function (n, i) {
        (r._settings = n), (r._vars = i);
      },
      getTime:
        e && e.now
          ? function () {
              return e.now();
            }
          : Date.now
            ? function () {
                return Date.now() - t;
              }
            : function () {
                return new Date() - t;
              },
      time: function (n) {
        r._deltaMarks[n] = [r.getTime()];
      },
      timeEnd: function (n, i) {
        var e = r._deltaMarks[n];
        e && 0 !== e.length && e.push(r.getTime(), i);
      },
      sendTimeMark: function (n, i, e, t) {
        void 0 === i && (i = r.getTime()),
          r._defTimes.push([n, i, t]),
          r.mark(n, i);
      },
      sendDelta: function (n, i, e, t) {
        var a,
          s = r._deltaMarks;
        s[n] ||
          void 0 === i ||
          ((a = t && t.originalEndTime ? t.originalEndTime : r.getTime()),
          (s[n] = [a - i, a, e]));
      },
      sendResTiming: function (n, i) {
        r._defRes.push([n, i]);
      },
      sendRaf: function (n) {
        var i = r.getSetting("forcePaintTimeSending");
        if (a && (i || !r.isVisibilityChanged())) {
          var e = "2616." + n;
          a(function () {
            (!i && r.isVisibilityChanged()) ||
              (r.getSetting("sendFirstRaf") && r.sendTimeMark(e + ".205"),
              a(function () {
                (!i && r.isVisibilityChanged()) || r.sendTimeMark(e + ".1928");
              }));
          });
        }
      },
      isVisibilityChanged: function () {
        return r.vsStart && ("visible" !== r.vsStart || r.vsChanged);
      },
      mark:
        e && e.mark
          ? function (n, i) {
              e.mark(n + (i ? ": " + i : ""));
            }
          : function () {},
      getSetting: function (n) {
        var i = r._settings[n];
        return null === i ? null : i || "";
      },
      on: function (n, i) {
        "function" == typeof i &&
          (r._markListeners[n] = r._markListeners[n] || []).push(i);
      },
      sendTrafficData: function () {},
      finalizeLayoutShiftScore: function () {},
      finalizeLargestContentfulPaint: function () {},
      getLCPAdditionalParams: function () {},
    });
  document.addEventListener &&
    document.addEventListener("visibilitychange", function n() {
      (Ya.Rum.vsChanged = !0),
        document.removeEventListener("visibilitychange", n);
    });
})(window);

!(function () {
  var e,
    t = [];
  function n() {
    var n = Ya.Rum.getSetting("clck"),
      i = t.join("\r\n");
    if (
      ((t = []),
      (e = null),
      n &&
        !(
          navigator.sendBeacon &&
          Ya.Rum.getSetting("beacon") &&
          navigator.sendBeacon(n, i)
        ))
    ) {
      var a = new XMLHttpRequest();
      a.open("POST", n), a.send(i);
    }
  }
  Ya.Rum.send = function (i, a, o, s, g, u, r) {
    clearTimeout(e);
    var m = Ya.Rum.getSetting("slots"),
      c = Ya.Rum.getSetting("experiments"),
      v = [
        "/reqid=" + Ya.Rum.getSetting("reqid"),
        r ? "/" + r.join("/") : "",
        a ? "/path=" + a : "",
        g ? "/events=" + g : "",
        m ? "/slots=" + m.join(";") : "",
        c ? "/experiments=" + c.join(";") : "",
        o ? "/vars=" + o : "",
        "/cts=" + new Date().getTime(),
        "/*",
      ];
    t.push(v.join("")), t.length < 42 ? (e = setTimeout(n, 15)) : n();
  };
})();

!(function () {
  if (window.PerformanceLongTaskTiming) {
    var e = function (e, n) {
        return (
          (e = e.concat(n)).length > 300 && (e = e.slice(e.length - 300)), e
        );
      },
      n = (Ya.Rum._tti = {
        events: [],
        eventsAfterTTI: [],
        fired: !1,
        observer: new PerformanceObserver(function (r) {
          var t = r.getEntries();
          (n.events = e(n.events, t)),
            n.fired && (n.eventsAfterTTI = e(n.eventsAfterTTI, t));
        }),
      });
    n.observer.observe({ entryTypes: ["longtask"] });
  }
})();

Ya.Rum.observeDOMNode = window.IntersectionObserver
  ? function (e, i, n) {
      var t = this,
        o = Ya.Rum.getSetting("forcePaintTimeSending");
      !(function r() {
        if (o || !t.isVisibilityChanged()) {
          var s = "string" == typeof i ? document.querySelector(i) : i;
          s
            ? new IntersectionObserver(function (i, n) {
                (!o && t.isVisibilityChanged()) ||
                  (Ya.Rum.sendTimeMark(e), n.unobserve(s));
              }, n).observe(s)
            : setTimeout(r, 100);
        }
      })();
    }
  : function () {};

!(function (e) {
  var a = window.requestAnimationFrame,
    t = console;
  if (!e) throw new Error("Rum: interface is not included");
  if (e.enabled) {
    e.sendAnimationSpeed = function (t, i, r) {
      if (a) {
        var n = [],
          s = e.getTime(),
          o = e.getTime();
        !(function d() {
          a(function () {
            var a = e.getTime();
            n.push(a - o),
              (o = a),
              a - s < i
                ? d()
                : (e.sendDelta(
                    t + ".avg",
                    (function (e) {
                      for (var a = e.length, t = 0, i = 0; i < a; i++)
                        t += e[i];
                      return t / a;
                    })(n),
                    r,
                  ),
                  e.sendDelta(
                    t + ".mdn",
                    (function (e) {
                      var a = e.sort(function (e, a) {
                          return e - a;
                        }),
                        t = e.length >> 1;
                      return a.length % 2 ? a[t] : (a[t - 1] + a[t]) / 2;
                    })(n),
                    r,
                  ));
          });
        })();
      }
    };
    var i = {},
      r = {};
    e.spa = {
      makeSpaSubPage: function (a, t, n, s, o) {
        (t = t || {
          finishDataLoadingMetric: !0,
          startDataRenderingMetric: !0,
          finishDataRenderingMetric: !0,
        }),
          (n = n || !1),
          (s = s || !1) &&
            (e.sendTrafficData(),
            e.finalizeLayoutShiftScore(),
            e.finalizeLargestContentfulPaint());
        var d = e.makeSubPage((n ? "block" : "page") + "." + a);
        return (
          o &&
            Object.keys(o).forEach(function (e) {
              d[e] = o[e];
            }),
          (r[a] = { spaMetricsOptions: t }),
          (i[a] = d),
          d
        );
      },
      startStubRendering: function (s, o) {
        o = !1 !== o;
        var d = i[s],
          g = r[s];
        if (d && g)
          if (g.stubRenderingStartTime)
            t.error(
              "startStubRendering have been called repeatedly for subpage " +
                s +
                ".",
            );
          else {
            var u = e.getTime();
            (g.stubRenderingStartTime = u),
              g.spaMetricsOptions &&
                g.spaMetricsOptions.startStubRenderingMetric &&
                e.sendDelta("stub.render.start", u - Number(d[689.2322]), d),
              o &&
                a &&
                a(function () {
                  n(s);
                });
          }
        else t.error("No subpage " + s + ".");
      },
      finishStubRendering: n,
      startDataLoading: function (a) {
        var n = i[a],
          s = r[a];
        if (n && s)
          if (s.dataLoadingStartTime)
            t.error(
              "startDataLoading have been called repeatedly for subpage " +
                a +
                ".",
            );
          else {
            var o = e.getTime();
            (s.dataLoadingStartTime = o),
              s.spaMetricsOptions &&
                s.spaMetricsOptions.startDataLoadingMetric &&
                e.sendDelta("data.load.start", o - Number(n[689.2322]), n);
          }
        else t.error("No subpage " + a + ".");
      },
      finishDataLoading: function (a, n) {
        n = n || !1;
        var s = i[a],
          o = r[a];
        if (s && o)
          if (o.dataLoadingFinishTime)
            t.error(
              "finishDataLoading have been called repeatedly for subpage " +
                a +
                ".",
            );
          else {
            var d = e.getTime();
            (o.dataLoadingFinishTime = d),
              !o.dataLoadingStartTime &&
                o.spaMetricsOptions &&
                o.spaMetricsOptions.startDataLoadingMetric &&
                t.error("No dataLoadingStartTime for subpage " + a + "."),
              o.spaMetricsOptions &&
                o.spaMetricsOptions.finishDataLoadingMetric &&
                e.sendDelta(
                  "data.load.finish." + (n ? "cache" : "network"),
                  d - (o.dataLoadingStartTime || Number(s[689.2322])),
                  s,
                );
          }
        else t.error("No subpage " + a + ".");
      },
      startDataRendering: function (n, o, d, g) {
        (o = o || ""), (d = !1 !== d), (g = "number" == typeof g ? g : 1e3);
        var u = i[n],
          p = r[n];
        if (u && p)
          if (p.dataLoadingFinishTime)
            if (p.dataRenderingStartTime)
              t.error(
                "startDataRendering have been called repeatedly for subpage " +
                  n +
                  ".",
              );
            else {
              var f = e.getTime();
              (p.dataRenderingStartTime = f),
                p.spaMetricsOptions &&
                  p.spaMetricsOptions.startDataRenderingMetric &&
                  e.sendDelta(
                    "data.render.start" + (o ? "." + o : ""),
                    f - p.dataLoadingFinishTime,
                    u,
                  ),
                d &&
                  a &&
                  a(function () {
                    s(n, o, g);
                  });
            }
          else t.error("No dataLoadingFinishTime for subpage " + n + ".");
        else t.error("No subpage " + n + ".");
      },
      finishDataRendering: s,
      getLastSpaSubPage: function (e) {
        return i[e] || (t.error("No subpage " + e + "."), null);
      },
      setLogger: function (e) {
        t = e;
      },
    };
  }
  function n(a) {
    var n = i[a],
      s = r[a];
    if (n && s)
      if (s.stubRenderingFinishTime)
        t.error(
          "finishStubRendering have been called repeatedly for subpage " +
            a +
            ".",
        );
      else {
        var o = e.getTime();
        (s.stubRenderingFinishTime = o),
          !s.stubRenderingStartTime &&
            s.spaMetricsOptions &&
            s.spaMetricsOptions.startStubRenderingMetric &&
            t.error("No stubRenderingStartTime for subpage " + a + "."),
          s.spaMetricsOptions &&
            s.spaMetricsOptions.finishStubRenderingMetric &&
            e.sendDelta(
              "stub.render.finish",
              o - (s.stubRenderingStartTime || Number(n[689.2322])),
              n,
            );
      }
    else t.error("No subpage " + a + ".");
  }
  function s(a, n, s) {
    (n = n || ""), (s = "number" == typeof s ? s : 1e3);
    var o = i[a],
      d = r[a];
    if (o && d)
      if (d.dataRenderingStartTime)
        if (d.dataRenderingFinishTime)
          t.error(
            "finishDataRendering have been called repeatedly for subpage " +
              a +
              ".",
          );
        else {
          var g = e.getTime();
          (d.dataRenderingFinishTime = g),
            d.spaMetricsOptions &&
              d.spaMetricsOptions.finishDataRenderingMetric &&
              e.sendDelta(
                "data.render.finish" + (n ? "." + n : ""),
                g - d.dataRenderingStartTime,
                o,
              ),
            d.spaMetricsOptions &&
              d.spaMetricsOptions.animationSpeedMetric &&
              e.sendAnimationSpeed &&
              e.sendAnimationSpeed(
                "data.render" + (n ? "." + n : "") + ".animation",
                s,
                o,
              );
        }
      else t.error("No dataRenderingStartTime for subpage " + a + ".");
    else t.error("No subpage " + a + ".");
  }
})(Ya.Rum);

function initRum({
  environment,
  heroElement,
  page,
  platform,
  project,
  regionId,
  requestId,
  rumId,
  sendClientUa,
  service,
  testIds,
  version,
}) {
  const slots = testIds?.join("','");
  Ya.Rum.init(
    {
      beacon: !!navigator.sendBeacon,
      clck: "https://yandex.ru/clck/click",
      ...(slots ? { slots } : {}),
      reqid: `'${requestId}'`,
      sendClientUa: sendClientUa,
    },
    {
      rum_id: `'${rumId}'`,
      "-region": `'${regionId}'`,
      "-project": `'${project}'`,
      ...(platform ? { "-platform": `'${platform}'` } : {}),
      ...(service ? { "-service": `'${service}'` } : {}),
      "-env": `'${environment}'`,
      "-page": `'${page}'`,
      "-version": `'${version}'`,
    },
  );
  !(function (e, n) {
    if (!e) throw new Error("Rum: interface is not included");
    if (!e.enabled)
      return (
        (e.getSetting = function () {
          return "";
        }),
        (e.getVarsList = function () {
          return [];
        }),
        void (e.getResourceTimings =
          e.pushConnectionTypeTo =
          e.pushTimingTo =
          e.normalize =
          e.sendCounter =
          e.sendDelta =
          e.sendTimeMark =
          e.sendResTiming =
          e.sendTiming =
          e.sendTTI =
          e.makeSubPage =
          e.sendHeroElement =
          e.onReady =
          e.onQuietWindow =
            function () {})
      );
    (e.getVarsList = function () {
      var n = e._vars;
      return Object.keys(n).map(function (e) {
        return e + "=" + encodeURIComponent(n[e]).replace(/\*/g, "%2A");
      });
    }),
      (e.setVars = function (n) {
        Object.keys(n).forEach(function (t) {
          e._vars[t] = n[t];
        }),
          M(),
          I();
      });
    var t,
      i,
      r = "690.1033",
      o = "690.2096.207",
      a = "690.2096.2877",
      s = "690.2096.2892",
      c = "690.2096.2044",
      u = "690.2096.361",
      d = "690.2096.4004",
      f = 3,
      l = 3e3,
      v = {
        connectEnd: 2116,
        connectStart: 2114,
        decodedBodySize: 2886,
        domComplete: 2124,
        domContentLoadedEventEnd: 2131,
        domContentLoadedEventStart: 2123,
        domInteractive: 2770,
        domLoading: 2769,
        domainLookupEnd: 2113,
        domainLookupStart: 2112,
        duration: 2136,
        encodedBodySize: 2887,
        entryType: 2888,
        fetchStart: 2111,
        initiatorType: 2889,
        loadEventEnd: 2126,
        loadEventStart: 2125,
        nextHopProtocol: 2890,
        redirectCount: 1385,
        redirectEnd: 2110,
        redirectStart: 2109,
        requestStart: 2117,
        responseEnd: 2120,
        responseStart: 2119,
        secureConnectionStart: 2115,
        startTime: 2322,
        transferSize: 2323,
        type: 76,
        unloadEventEnd: 2128,
        unloadEventStart: 2127,
        workerStart: 2137,
      },
      g = { visible: 1, hidden: 2, prerender: 3 },
      m = {
        bluetooth: 2064,
        cellular: 2065,
        ethernet: 2066,
        none: 1229,
        wifi: 2067,
        wimax: 2068,
        other: 861,
        unknown: 836,
        0: 836,
        1: 2066,
        2: 2067,
        3: 2070,
        4: 2071,
        5: 2768,
      },
      p = { "first-paint": 2793, "first-contentful-paint": 2794 },
      h = Object.keys(p).length,
      y = e.getTime,
      T = window.PerformanceObserver,
      E = window.performance || {},
      S = E.timing || {},
      b = E.navigation || {},
      C = navigator.connection,
      k = {},
      L = {},
      w = e._deltaMarks,
      R = document.createElement("link"),
      j = document.createElement("a"),
      x = "function" == typeof E.getEntriesByType,
      _ = S.navigationStart;
    function M() {
      (t = e.getVarsList()),
        e.getSetting("sendClientUa") &&
          t.push("1042=" + encodeURIComponent(navigator.userAgent));
    }
    function I() {
      i = t.concat(["143.2129=" + _]);
    }
    function O(e) {
      function n() {
        removeEventListener("DOMContentLoaded", n),
          removeEventListener("load", n),
          e();
      }
      "loading" === document.readyState
        ? (addEventListener("DOMContentLoaded", n), addEventListener("load", n))
        : e();
    }
    function z() {
      var n;
      e.getSetting("disableOnLoadTasks") ||
        (removeEventListener("load", z),
        (n = e.getSetting("periodicStatsIntervalMs")) ||
          null === n ||
          (n = 15e3),
        n && (V = setInterval(Q, n)),
        addEventListener("beforeunload", Q),
        (function () {
          if (T) {
            q(E.getEntriesByType("navigation")),
              q(E.getEntriesByType("resource"));
            try {
              new T(function (e) {
                q(e.getEntries());
              }).observe({ entryTypes: ["resource", "navigation"] });
            } catch (e) {}
            e._periodicTasks.push(J);
          }
        })(),
        (function () {
          if (T)
            try {
              new T(function (e, n) {
                var t = e.getEntries()[0];
                if (t) {
                  var i = t.processingStart,
                    r = {
                      duration: t.duration,
                      js: t.processingEnd - i,
                      name: t.name,
                    };
                  t.target && (r.target = K(t.target)),
                    A("first-input", i - t.startTime, r),
                    n.disconnect();
                }
              }).observe({ type: "first-input", buffered: !0 });
            } catch (e) {}
        })(),
        (function () {
          if (x) {
            var e = E.getEntriesByType("navigation")[0];
            if (e) {
              var n = [];
              me(n, e), fe(n);
              var i = E.getEntriesByName("yndxNavigationSource")[0];
              i && n.push("2091.186=" + i.value), he(s, t.concat(n));
            }
          }
        })(),
        (function () {
          if (T) {
            var n = e.getSetting("clsWindowGap")
                ? e.getSetting("clsWindowGap")
                : 1 / 0,
              t = e.getSetting("clsWindowSize")
                ? e.getSetting("clsWindowSize")
                : 1 / 0,
              i = new T(function (e) {
                var i = e.getEntries();
                null == $ && ($ = 0);
                for (var r = 0; r < i.length; r++) {
                  var o = i[r];
                  o.hadRecentInput ||
                    (Z &&
                    o.startTime - X[X.length - 1].startTime < n &&
                    o.startTime - X[0].startTime < t
                      ? ((Z += o.value), X.push(o))
                      : (ne(), (Z = o.value), (X = [o])));
                }
                ne();
              });
            try {
              i.observe({ type: "layout-shift", buffered: !0 });
            } catch (e) {}
            addEventListener("visibilitychange", function e() {
              if ("hidden" === document.visibilityState) {
                removeEventListener("visibilitychange", e);
                try {
                  "function" == typeof i.takeRecords && i.takeRecords(),
                    i.disconnect();
                } catch (e) {}
                te();
              }
            }),
              addEventListener("beforeunload", te);
          }
        })(),
        (function () {
          if (
            T &&
            (e.getSetting("forcePaintTimeSending") || !e.isVisibilityChanged())
          ) {
            var n = new T(function (e) {
              for (var n = e.getEntries(), t = 0; t < n.length; t++) {
                var i = n[t];
                (ie = i.renderTime || i.loadTime), (re = i);
              }
              oe || (U("largest-loading-elem-paint", ie), (oe = !0));
            });
            try {
              n.observe({ type: "largest-contentful-paint", buffered: !0 });
            } catch (e) {}
            addEventListener("visibilitychange", function e() {
              if ("hidden" === document.visibilityState) {
                removeEventListener("visibilitychange", e);
                try {
                  "function" == typeof n.takeRecords && n.takeRecords(),
                    n.disconnect();
                } catch (e) {}
                ae();
              }
            }),
              addEventListener("beforeunload", ae);
          }
        })());
    }
    function B() {
      var n = S.domContentLoadedEventStart,
        i = S.domContentLoadedEventEnd;
      if (0 !== n || 0 !== i) {
        var o = 0 === S.responseStart ? _ : S.responseStart,
          a = 0 === S.domainLookupStart ? _ : S.domainLookupStart,
          s = t.concat([
            "2129=" + _,
            "1036=" + (a - _),
            "1037=" + (S.domainLookupEnd - S.domainLookupStart),
            "1038=" + (S.connectEnd - S.connectStart),
            S.secureConnectionStart &&
              "1383=" + (S.connectEnd - S.secureConnectionStart),
            "1039=" + (S.responseStart - S.connectEnd),
            "1040=" + (S.responseEnd - o),
            "1040.906=" + (S.responseEnd - a),
            "1310.2084=" + (S.domLoading - o),
            "1310.2085=" + (S.domInteractive - o),
            "1310.1309=" + (i - n),
            "1310.1007=" + (n - o),
            navigator.deviceMemory && "3140=" + navigator.deviceMemory,
            navigator.hardwareConcurrency &&
              "3141=" + navigator.hardwareConcurrency,
          ]);
        Object.keys(v).forEach(function (e) {
          e in S && S[e] && s.push(v[e] + "=" + pe(S[e], _));
        }),
          e.vsStart
            ? (s.push("1484=" + (g[e.vsStart] || 2771)),
              e.vsChanged && s.push("1484.719=1"))
            : s.push("1484=" + g.visible),
          b &&
            (b.redirectCount && s.push("1384.1385=" + b.redirectCount),
            (1 !== b.type && 2 !== b.type) || s.push("770.76=" + b.type)),
          fe(s),
          he(r, s);
      } else setTimeout(B, 50);
    }
    M(),
      I(),
      (e.ajaxStart = 0),
      (e.ajaxComplete = 0),
      O(function () {
        _ &&
          setTimeout(function () {
            (e.sendTimeMark = U),
              (e.sendResTiming = H),
              (e.sendTiming = G),
              (e.timeEnd = D);
            for (var n = e._defRes; n.length; ) {
              var t = n.shift();
              H(t[0], t[1]);
            }
            for (var i = e._defTimes; i.length; ) {
              var r = i.shift();
              U(r[0], r[1], !1, r[2]);
            }
            Object.keys(w).forEach(function (e) {
              A(e);
            }),
              B(),
              (function n() {
                if (
                  x &&
                  (e.getSetting("forcePaintTimeSending") ||
                    !e.isVisibilityChanged())
                ) {
                  for (
                    var t = E.getEntriesByType("paint"), i = 0;
                    i < t.length;
                    i++
                  ) {
                    var r = t[i],
                      o = p[r.name];
                    o &&
                      !P[r.name] &&
                      ((P[r.name] = !0), N++, U("1926." + o, r.startTime));
                  }
                  if (N < h)
                    try {
                      new T(function (e, t) {
                        n(), t && t.disconnect();
                      }).observe({ entryTypes: ["paint"] });
                    } catch (e) {}
                }
              })(),
              e.getSetting("sendAutoElementTiming") && se(),
              window.addEventListener("pageshow", ce),
              ue(),
              "complete" === document.readyState
                ? z()
                : addEventListener("load", z);
          }, 0);
      }),
      (e._getCommonVars = function () {
        return t;
      });
    var V,
      P = {},
      N = 0;
    function U(t, i, r, a) {
      i === n && (i = y()), (r !== n && !0 !== r) || e.mark(t, i);
      var s = ge(t);
      if ((s.push("207=" + pe(i)), W(s, a))) {
        he(o, s), (k[t] = k[t] || []), k[t].push(i);
        var c = e._markListeners[t];
        c &&
          c.length &&
          c.forEach(function (e) {
            e(i);
          });
      }
    }
    function W(e, t) {
      if (t) {
        if (t.isCanceled && t.isCanceled()) return !1;
        var i = e.reduce(function (e, n, t) {
          return "string" == typeof n && (e[n.split("=")[0]] = t), e;
        }, {});
        Object.keys(t).forEach(function (r) {
          if ("function" != typeof t[r]) {
            var o = i[r],
              a = r + "=" + t[r];
            o === n ? e.push(a) : (e[o] = a);
          }
        });
      }
      return !0;
    }
    function D(e, n) {
      var t = w[e];
      t && 0 !== t.length && (t.push(y(), n), A(e));
    }
    function A(t, i, r, o) {
      var s,
        c,
        u,
        d = w[t];
      if (
        (void 0 !== i
          ? (s =
              (c = o && o.originalEndTime ? o.originalEndTime : e.getTime()) -
              i)
          : d && ((s = d[0]), (c = d[1]), (u = d[2])),
        s !== n && c !== n)
      ) {
        var f = ge(t);
        f.push("207.2154=" + pe(s), "207.1428=" + pe(c), "2877=" + pe(c - s)),
          W(f, r) && W(f, u) && (he(a, f), delete w[t]);
      }
    }
    function H(e, n) {
      le(n, function (t) {
        t && G(e, t[t.length - 1], n);
      });
    }
    function G(n, t, i) {
      var r = ge(n);
      e.getSetting("sendUrlInResTiming") &&
        r.push("13=" + encodeURIComponent(i)),
        me(r, t),
        he(c, r);
    }
    function Q() {
      var n = !1;
      e._periodicTasks.forEach(function (e) {
        e() && (n = !0);
      }),
        n || clearInterval(V);
    }
    (e.getTimeMarks = function () {
      return k;
    }),
      (e._periodicTasks = []);
    var Y = 0;
    function q(e) {
      if (e && e.length)
        for (var n = L, t = 0; t < e.length; t++) {
          var i = F(e[t]);
          if (i) {
            var r = i.domain + "-" + i.extension,
              o = (n[r] = n[r] || { count: 0, size: 0 });
            o.count++, (o.size += i.size);
          }
        }
    }
    function F(e) {
      var n = e.transferSize;
      if (null != n) {
        j.href = e.name;
        var t = j.pathname;
        if (0 !== t.indexOf("/clck")) {
          var i = t.lastIndexOf("."),
            r = "";
          return (
            -1 !== i &&
              t.lastIndexOf("/") < i &&
              t.length - i <= 5 &&
              (r = t.slice(i + 1)),
            { size: n, domain: j.hostname, extension: r }
          );
        }
      }
    }
    function J() {
      var n = e.getSetting("maxTrafficCounters") || 250;
      if (Y >= n) return !1;
      for (var i = Object.keys(L), r = "", o = 0; o < i.length; o++) {
        var a = i[o],
          s = L[a];
        r += encodeURIComponent(a) + "!" + s.count + "!" + s.size + ";";
      }
      if (r.length) {
        Y++;
        var c = t.concat(["d=" + r, "t=" + pe(y())]);
        he(u, c);
      }
      return (L = {}), Y < n;
    }
    function K(e) {
      if (!e) return "";
      var t = (e.tagName || "").toLowerCase(),
        i =
          e.className && e.className.baseVal !== n
            ? e.className.baseVal
            : e.className;
      return t + (i ? (" " + i).replace(/\s+/g, ".") : "");
    }
    var X,
      Z,
      $ =
        ("layout-shift",
        Boolean(
          T &&
            T.supportedEntryTypes &&
            -1 !== T.supportedEntryTypes.indexOf("layout-shift"),
        )
          ? 0
          : null),
      ee = null;
    function ne() {
      Z > $ && (($ = Z), (ee = X));
    }
    function te() {
      if (null != $) {
        var i = ["s=" + Math.round(1e6 * $) / 1e6];
        if (e.getSetting("logClsTarget")) {
          var r = (function (e) {
            var n = null;
            if (!e) return null;
            var t = null;
            return (
              (n = e.reduce(function (e, n) {
                return e && e.value > n.value ? e : n;
              })) &&
                n.sources &&
                n.sources.length &&
                (t =
                  n.sources.find(function (e) {
                    return e.node && 1 === e.node.nodeType;
                  }) || n.sources[0]),
              t && K(t.node)
            );
          })(ee);
          i.push("target=" + r);
        }
        he(d, t.concat(i)), ($ = null), (Z = n), (X = n);
      }
    }
    var ie = null,
      re = null,
      oe = !1;
    function ae() {
      if (null != ie) {
        var n = e.getLCPAdditionalParams(re);
        U("largest-contentful-paint", ie, !1, n), (ie = null), (re = null);
      }
    }
    var se = T
      ? function () {
          if (e.getSetting("forcePaintTimeSending") || !e.isVisibilityChanged())
            try {
              new T(function (e) {
                for (var n = e.getEntries(), t = 0; t < n.length; t++) {
                  var i = n[t];
                  U("element-timing." + i.identifier, i.startTime);
                }
              }).observe({ type: "element", buffered: !0 });
            } catch (e) {}
        }
      : function () {};
    function ce(e) {
      e.persisted && U("bfcache");
    }
    function ue(n, t, i) {
      if (e._tti) {
        var r = y();
        de(function (o) {
          var a = { 2796.2797: ve(e._tti.events || [], t), 689.2322: pe(r) };
          i &&
            Object.keys(i).forEach(function (e) {
              a[e] = i[e];
            }),
            U(n || "2795", o, !0, a),
            (e._tti.fired = !0);
        }, t);
      }
    }
    function de(n, t) {
      e._tti &&
        (t || (t = y()),
        (function i() {
          var r,
            o = t,
            a = y(),
            s = e._tti.events || [],
            c = s.length;
          0 !== c &&
            ((r = s[c - 1]),
            (o = Math.max(o, Math.floor(r.startTime + r.duration)))),
            a - o >= l ? n(o) : setTimeout(i, 1e3);
        })());
    }
    function fe(e) {
      C &&
        e.push(
          "2437=" + (m[C.type] || 2771),
          C.downlinkMax !== n && "2439=" + C.downlinkMax,
          C.effectiveType && "2870=" + C.effectiveType,
          C.rtt !== n && "rtt=" + C.rtt,
          C.downlink !== n && "dwl=" + C.downlink,
        );
    }
    function le(e, n) {
      if (!x) return n(null);
      R.href = e;
      var t = R.href,
        i = 0,
        r = 100;
      setTimeout(function e() {
        var o = E.getEntriesByName(t);
        if (o.length) return n(o);
        i++ < f ? (setTimeout(e, r), (r += r)) : n(null);
      }, 0);
    }
    function ve(e, n) {
      return (
        (e = e || []),
        (n = n || 0),
        e
          .filter(function (e) {
            return e.startTime - n >= -50;
          })
          .map(function (e) {
            var n = e.name
                ? e.name
                    .split("-")
                    .map(function (e) {
                      return e[0];
                    })
                    .join("")
                : "u",
              t = Math.floor(e.startTime);
            return n + "-" + t + "-" + Math.floor(t + e.duration);
          })
          .join(".")
      );
    }
    function ge(n) {
      return i.concat([
        "1701=" + n,
        e.ajaxStart && "1201.2154=" + pe(e.ajaxStart),
        e.ajaxComplete && "1201.2052=" + pe(e.ajaxComplete),
      ]);
    }
    function me(e, n) {
      Object.keys(v).forEach(function (t) {
        if (t in n) {
          var i = n[t];
          (i || 0 === i) && e.push(v[t] + "=" + pe(i));
        }
      });
    }
    function pe(e, n) {
      return "string" == typeof e
        ? encodeURIComponent(e)
        : Math.round(1e3 * (e - (n || 0))) / 1e3;
    }
    function he(n, t) {
      var i = encodeURIComponent(window.YaStaticRegion || "unknown");
      t.push("-cdn=" + i);
      var r = t.filter(Boolean).join(",");
      e.send(null, n, r);
    }
    (e.sendTTI = ue),
      (e.sendHeroElement = function (e) {
        U("2876", e);
      }),
      (e._subpages = {}),
      (e.makeSubPage = function (n, t) {
        var i = e._subpages[n];
        e._subpages[n] = void 0 === i ? (i = 0) : ++i;
        var r = !1;
        return {
          689.2322: pe(void 0 !== t ? t : y()),
          2924: n,
          2925: i,
          isCanceled: function () {
            return r;
          },
          cancel: function () {
            r = !0;
          },
        };
      }),
      (e._getLongtasksStringValue = ve),
      (e.getResourceTimings = le),
      (e.pushConnectionTypeTo = fe),
      (e.pushTimingTo = me),
      (e.normalize = pe),
      (e.sendCounter = he),
      (e.sendDelta = A),
      (e.sendTrafficData = J),
      (e.finalizeLayoutShiftScore = te),
      (e.finalizeLargestContentfulPaint = ae),
      (e.onReady = O),
      (e.onQuietWindow = de),
      (e.getSelector = K),
      (e.sendBFCacheTimeMark = ce);
  })(Ya.Rum);

  Ya.Rum.observeDOMNode("2876", heroElement);
}
