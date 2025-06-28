(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [317],
  {
    19895: function (e, t) {
      "use strict";
      var n = (function (e) {
        function t(t, o, a, i) {
          var c = o ? n + t + e.e + o : n + t,
            u = c;
          if (a) {
            var s = " " + u + e.m;
            for (var l in a)
              if (a.hasOwnProperty(l)) {
                var d = a[l];
                !0 === d ? (u += s + l) : d && (u += s + l + r + d);
              }
          }
          if (void 0 !== i)
            for (var f = 0, v = i.length; f < v; f++) {
              var m = i[f];
              if (m && "string" == typeof m.valueOf())
                for (var h = m.valueOf().split(" "), p = 0; p < h.length; p++) {
                  var g = h[p];
                  g !== c && (u += " " + g);
                }
            }
          return u;
        }
        var n = e.n || "",
          r = e.v || e.m;
        return function (e, n) {
          return function (r, o, a) {
            return "string" == typeof r
              ? Array.isArray(o)
                ? t(e, r, void 0, o)
                : t(e, r, o, a)
              : t(e, n, r, o);
          };
        };
      })({ e: "-", m: "_" });
      t.cn = n;
    },
    68661: function (e, t, n) {
      "use strict";
      e.exports = n(19895);
    },
    83433: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return r;
        },
      });
      var r =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement;
    },
    49671: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(65067);
      function o(e, t) {
        (0, r.useImperativeHandle)(t, function () {
          return e.current;
        });
      }
    },
    36744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsomorphicLayoutEffect: function () {
            return r.L;
          },
        });
      var r = n(81239);
    },
    81239: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return o;
        },
      });
      var r = n(65067),
        o = n(83433).J ? r.useLayoutEffect : r.useEffect;
    },
    56480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          lock: function () {
            return g;
          },
          unlock: function () {
            return y;
          },
        });
      var r,
        o = n(83433);
      function a(e) {
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(window.navigator.userAgent)
        );
      }
      function i() {
        return (
          a(/iphone|ipod|ipad/i) ||
          (a(/macintosh/i) && navigator.maxTouchPoints > 1)
        );
      }
      function c(e, t) {
        var n = {};
        for (var r in t) t.hasOwnProperty(r) && (n[r] = e.style[r]);
        for (var r in t) t.hasOwnProperty(r) && (e.style[r] = t[r]);
        return n;
      }
      function u(e) {
        return e === document.body || e === document.documentElement;
      }
      var s = Math.random().toString(36).slice(2),
        l = "__scrollLockState$".concat(s),
        d = !(function () {
          var e = !1;
          if (!o.J) return !1;
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
        1 !== e.changedTouches.length ||
          ((f.scrollable = (function (e) {
            for (
              var t;
              e &&
              ((t = getComputedStyle(e)),
              !/(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY));

            )
              e = e.parentElement;
            return e || document.documentElement;
          })(e.target)),
          u(f.scrollable) ||
            ((f.lastX = e.changedTouches[0].pageX),
            (f.lastY = e.changedTouches[0].pageY)));
      }
      function m(e) {
        var t = f.scrollable,
          n = f.lastX,
          r = f.lastY;
        if (!(e.changedTouches.length > 1)) {
          if (!t || u(t)) {
            e.preventDefault();
            return;
          }
          var o = e.changedTouches[0].pageX,
            a = e.changedTouches[0].pageY,
            i = Math.abs(r - a) > Math.abs(n - o),
            c = t.scrollTop,
            s = t.scrollHeight - t.clientHeight,
            l = t.scrollLeft,
            d = t.scrollWidth - t.clientWidth,
            v = !i && ((l <= 0 && o > n) || (l >= d && o < n));
          ((i && ((c <= 0 && a > r) || (c >= s && a < r))) || v) &&
            e.preventDefault(),
            (f.lastX = o),
            (f.lastY = a);
        }
      }
      function h() {
        f.scrollable && (f.scrollable = null);
      }
      function p(e) {
        return e || document.body;
      }
      function g(e) {
        if (o.J) {
          var t = p(e);
          !(function (e) {
            var t,
              n,
              o,
              a,
              i = e[l];
            if (i) {
              i.count++;
              return;
            }
            var s =
                ((n =
                  u(e) &&
                  window.innerWidth - document.documentElement.clientWidth > 0),
                (o = e.scrollHeight > e.clientHeight),
                n ||
                o ||
                ((t = getComputedStyle(e).overflowY), /scroll/.test(t))
                  ? (function () {
                      if ("undefined" == typeof document) return 0;
                      if (void 0 === r) {
                        var e = document.createElement("div");
                        (e.style.width = "100%"), (e.style.height = "200px");
                        var t = document.createElement("div");
                        (t.style.position = "absolute"),
                          (t.style.top = "0"),
                          (t.style.left = "0"),
                          (t.style.pointerEvents = "none"),
                          (t.style.visibility = "hidden"),
                          (t.style.width = "200px"),
                          (t.style.height = "150px"),
                          (t.style.overflow = "hidden"),
                          t.appendChild(e),
                          document.body.appendChild(t);
                        var n = e.offsetWidth;
                        t.style.overflow = "scroll";
                        var o = e.offsetWidth;
                        n === o && (o = t.clientWidth),
                          document.body.removeChild(t),
                          (r = n - o);
                      }
                      return r;
                    })()
                  : 0),
              d = parseInt(
                getComputedStyle(e).getPropertyValue("padding-right"),
                10,
              );
            (a = {
              initialStyle: c(e, {
                paddingRight: "".concat(d + s, "px"),
                overflow: "hidden",
                overflowX: "hidden",
                overflowY: "hidden",
              }),
              count: 1,
            }),
              (e[l] = a);
          })(t),
            i() &&
              u(t) &&
              (f.count++,
              1 === f.count &&
                ((f.scrollX = window.pageXOffset),
                (f.scrollY = window.pageYOffset),
                document.addEventListener("touchstart", v, d),
                document.addEventListener("touchmove", m, d),
                document.addEventListener("touchend", h, d)));
        }
      }
      function y(e) {
        if (o.J) {
          var t,
            n,
            r = p(e);
          (n = (t = r)[l]) &&
            (n.count--, 0 === n.count && (c(t, n.initialStyle), delete t[l])),
            i() &&
              u(r) &&
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
    10671: function (e, t, n) {
      "use strict";
      t.t = void 0;
      var r = n(43218),
        o = n(65067),
        a = n(36744),
        i = r.__importStar(n(56480));
      t.t = function (e) {
        var t = e.enabled,
          n = e.containerRef,
          r = (0, o.useRef)(null),
          c = (0, o.useRef)(!1);
        (0, a.useIsomorphicLayoutEffect)(function () {
          var e = n ? n.current : null;
          r.current !== e &&
            (t && c.current && (i.unlock(r.current), i.lock(e)),
            (r.current = e));
        }),
          (0, a.useIsomorphicLayoutEffect)(
            function () {
              if (t)
                return (
                  (c.current = !0),
                  i.lock(r.current),
                  function () {
                    (c.current = !1), i.unlock(r.current);
                  }
                );
            },
            [t],
          );
      };
    },
    79973: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return a;
        },
        V: function () {
          return i;
        },
      });
      var r = n(65067),
        o = n(68661);
      n(13058);
      var a = (0, o.cn)("UserWidget", "Content"),
        i = r.forwardRef(function (e, t) {
          var n = e.loading,
            o = e.preload,
            i = e.height,
            c = e.colorScheme,
            u = e.className,
            s = e.src,
            l = e.width;
          return r.createElement(
            "div",
            { className: a({ loading: n, colorScheme: c }, [u]) },
            o &&
              r.createElement("iframe", {
                className: "UserWidget-Iframe",
                ref: t,
                width: l,
                src: s,
                height: n ? 300 : i,
              }),
            n && r.createElement("div", { className: "UserWidget-Spin" }),
          );
        });
    },
    22662: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Content: function () {
            return r.V;
          },
          cnUserID: function () {
            return r.L;
          },
        });
      var r = n(79973);
    },
    35696: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return s;
        },
      });
      var r = n(65067),
        o = n(68661),
        a = n(10671);
      n(28990);
      var i = (0, o.cn)("UserID", "CloseButton"),
        c = function (e) {
          var t = e.onClick,
            n = e.colorScheme;
          return r.createElement(
            "button",
            {
              className: i({ colorScheme: n }),
              onClick: t,
              "aria-label": "Закрыть",
              tabIndex: 1,
            },
            r.createElement(
              "svg",
              {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                focusable: "false",
                "aria-hidden": "true",
              },
              r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",
                fill: "currentColor",
              }),
            ),
          );
        };
      n(25081);
      var u = (0, o.cn)("UserWidget", "Dialog"),
        s = (0, r.forwardRef)(function (e, t) {
          var n,
            o,
            i = e.visible,
            s = e.loading,
            l = e.colorScheme,
            d = e.platform,
            f = e.onClose,
            v = e.className;
          return (
            (0, a.t)({ enabled: i && "touch" === d }),
            (n = { onScroll: f }),
            ((o = (0, r.useRef)(n)).current = n),
            (0, r.useEffect)(function () {
              var e = function () {
                var e, t;
                null === (t = (e = o.current).onScroll) ||
                  void 0 === t ||
                  t.call(e);
              };
              if (o.current.onScroll)
                return (
                  document.addEventListener("scroll", e),
                  function () {
                    document.removeEventListener("scroll", e);
                  }
                );
            }, []),
            r.createElement(
              "div",
              {
                role: "dialog",
                "aria-busy": s,
                "aria-modal": "true",
                className: u(
                  "Dialog",
                  { visible: i, loading: s, colorScheme: l, platform: d },
                  [v],
                ),
                ref: t,
              },
              s && r.createElement(c, { colorScheme: l, onClick: f }),
              e.children,
            )
          );
        });
    },
    73119: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Dialog: function () {
            return r.V;
          },
        });
      var r = n(35696);
    },
    33621: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          User: function () {
            return m;
          },
          UserBase: function () {
            return f;
          },
        });
      var r = n(65067),
        o = n(68661),
        a = n(49671),
        i = n(43218),
        c = function (e, t, n) {
          return (void 0 === t && (t = "0/0-0"), "prod_yateam" === e)
            ? "https://center.yandex-team.ru/api/v1/user/" +
                ("0/0-0" === t ? "404" : t) +
                "/avatar/" +
                (n ? "85" : "42") +
                ".jpg"
            : ("test" !== e
                ? "https://avatars.mds.yandex.net"
                : "https://avatars.mdst.yandex.net") +
                "/get-yapic/" +
                t +
                "/" +
                (n ? "islands-retina-middle" : "islands-middle");
        };
      n(33730);
      var u = (0, o.cn)("UserID", "Avatar"),
        s = function (e) {
          var t,
            n,
            o,
            a,
            s = e.env,
            l = e.avatarId,
            d = e.plus,
            f = e.child,
            v = e.colorScheme,
            m = e.className,
            h = (0, i.__read)((0, r.useState)(!1), 2),
            p = h[0],
            g = h[1],
            y =
              ((n = (t = { avatarId: l, env: s }).env),
              (o = t.avatarId),
              {
                src: (a = (0, r.useMemo)(
                  function () {
                    return c(n, o, !1);
                  },
                  [n, o],
                )),
                srcSet:
                  a +
                  " 1x, " +
                  (0, r.useMemo)(
                    function () {
                      return c(n, o, !0);
                    },
                    [n, o],
                  ) +
                  " 2x",
              }),
            w = y.src,
            C = y.srcSet,
            b = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(
              function () {
                var e = b.current;
                window && f && e && g(e.getBoundingClientRect().width <= 36);
              },
              [f, b],
            ),
            r.createElement(
              "div",
              {
                className: u(
                  { child: f, plus: d, small: p, dark: "dark" === v },
                  [m],
                ),
                ref: b,
              },
              r.createElement("img", {
                src: w,
                className: "UserID-Avatar-Image",
                srcSet: C,
              }),
              f &&
                r.createElement(
                  "svg",
                  {
                    className: "UserID-Avatar-ChildStroke",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 300 300",
                  },
                  r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M165.9 37.9822L166.068 38.0049C166.221 38.0257 166.442 38.0562 166.726 38.0968C167.295 38.1778 168.118 38.2987 169.162 38.4618C171.249 38.7878 174.224 39.283 177.813 39.9651C184.975 41.3261 194.666 43.4461 204.678 46.4778C214.632 49.492 225.211 53.4982 233.986 58.7338C242.568 63.8543 250.611 70.8545 253.512 80.3646C262.231 108.946 272.638 153.705 267.746 188.864C263.821 217.084 243.295 239.946 214.374 255.633C185.337 271.383 152.717 277.077 132.993 274.341C113.268 271.605 83.4377 257.247 59.8001 234.191C36.2561 211.225 22.7482 183.642 26.674 155.422C33.0239 109.778 55.8032 71.8059 70.7041 51.2431C76.2121 43.6422 85.9125 39.8089 95.3615 37.7283C105.121 35.5793 116.278 34.95 126.593 35.003C136.965 35.0564 146.789 35.8036 153.998 36.5322C157.61 36.8972 160.584 37.2595 162.664 37.5319C163.704 37.6681 164.522 37.782 165.085 37.8627C165.367 37.903 165.585 37.9351 165.736 37.9575L165.9 37.9822ZM210.975 249.385C238.745 234.322 257.19 213.071 260.694 187.886C265.355 154.381 255.388 110.913 246.701 82.4364C238.203 54.5778 164.895 45.0216 164.895 45.0216C164.895 45.0216 92.1316 33.8026 76.4727 55.4113C61.8934 75.5303 39.8488 112.394 33.7267 156.401C30.2229 181.586 42.1687 207.053 64.7756 229.104C87.5594 251.328 116.05 264.812 133.973 267.298C151.895 269.784 182.987 264.566 210.975 249.385Z",
                  }),
                ),
            )
          );
        };
      (s.displayName = "UserIDAvatar"), n(11272);
      var l = function (e) {
        var t = e.children,
          n = e.fetchMail,
          o = e.tld,
          a = e.showCounter,
          c = e.counterVariant,
          u = void 0 === c ? "number" : c,
          s = e.colorScheme,
          l = (0, i.__read)((0, r.useState)(0), 2),
          d = l[0],
          f = l[1];
        (0, r.useEffect)(
          function () {
            n &&
              a &&
              fetch(
                "https://mail.yandex." + o + "/api/v2/userid/counters?silent",
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
          [o, n, a],
        );
        var v = n && d > 0 ? Math.min(d, 99) : void 0,
          m = !!(n && v && d > v),
          h = v && a ? "" + v + (m ? "+" : "") : null,
          p = n || a,
          g = [
            "UserID-Badge-Dot",
            "UserID-Badge-Dot_colorScheme_" + s,
            "UserID-Badge-Dot_variant_" + u,
          ].join(" ");
        return r.createElement(
          "div",
          { className: "UserID-Badge" },
          t,
          p && r.createElement("div", { className: g }, "number" === u && h),
        );
      };
      (l.displayName = "UserIDBadge"), n(48972);
      var d = (0, o.cn)("UserID", "Wrapper"),
        f = (0, r.forwardRef)(function (e, t) {
          var n = e.tld,
            o = e.tabIndex,
            i = e.children,
            c = e.env,
            u = e.colorScheme,
            f = e.userData,
            v = e.onClick,
            m = e.onPointerEnter,
            h = e.className,
            p = e.fetchMail,
            g = e.showCounter,
            y = e.counterVariant,
            w = e.visible,
            C = e.ariaLabel,
            b = e.avatarSize,
            E = e.platform,
            S = e.beforeAvatar,
            _ = e.afterAvatar,
            k = f || {},
            L = k.child,
            I = k.plus,
            x = k.avatarId,
            R = (0, r.useRef)(null);
          return (
            (0, a.t)(R, t),
            r.createElement(
              "div",
              {
                className: d({ child: L, plus: I, default: !I }, [h]),
                style:
                  null !== b ? { "--user-id-size": (b || 42) + "px" } : void 0,
              },
              r.createElement(
                "button",
                {
                  "aria-expanded": w,
                  "aria-haspopup": !0,
                  "aria-label": C || "Ваш профиль",
                  className: "UserID-Account",
                  ref: R,
                  role: "button",
                  tabIndex: void 0 === o ? 0 : o,
                  onClick: v,
                  onPointerEnter: m,
                },
                S,
                r.createElement(
                  l,
                  {
                    fetchMail: p && "test" !== c,
                    counterVariant: y,
                    tld: void 0 === n ? "ru" : n,
                    colorScheme: u,
                    showCounter: "touch" !== E && (p || !0 === g),
                  },
                  r.createElement(s, {
                    env: c,
                    avatarId: x,
                    plus: I,
                    child: L,
                    colorScheme: u,
                  }),
                ),
                _,
              ),
              i,
            )
          );
        });
      f.displayName = "UserBase";
      var v = n(35696),
        m = (0, n(48698).k)(f, v.V);
    },
    84787: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUserID: function () {
            return r.C;
          },
        });
      var r = n(20760);
    },
    20760: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return I;
        },
      });
      var r,
        o,
        a = n(43218),
        i = n(65067),
        c = n(49671),
        u = n(81239),
        s = [],
        l = null,
        d = null;
      function f() {
        return s[s.length - 1];
      }
      function v(e, t, n) {
        var r,
          o,
          a = f();
        a &&
          a.onClose &&
          (!n || n === a.closeStrategy) &&
          (("click" === t &&
            ((r = a.refs),
            (o = e.target),
            r.some(function (e) {
              return e.current instanceof HTMLElement && e.current.contains(o);
            }))) ||
            a.onClose({ nativeEvent: e, source: t }));
      }
      function m(e) {
        var t = e.key;
        ("Escape" === t || "Esc" === t) && v(e, "esc");
      }
      function h(e) {
        (l = e.target), (d = f()), v(e, "click", "pressdown");
      }
      function p(e) {
        var t = l;
        l = null;
        var n = d;
        (d = null),
          e.button > 0 ||
            n !== f() ||
            t !== e.target ||
            v(e, "click", "pressup");
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
                document.removeEventListener("pointerdown", h, !0),
                document.removeEventListener("click", p, !0));
          },
          getTopOverlayOptions: f,
        }),
        y = Date.now(),
        w = "undefined" != typeof performance ? performance : null;
      (null === (r = null == w ? void 0 : w.timing) || void 0 === r
        ? void 0
        : r.navigationStart) &&
        (y =
          null === (o = null == performance ? void 0 : performance.timing) ||
          void 0 === o
            ? void 0
            : o.navigationStart);
      var C =
          w && "function" == typeof w.now
            ? function () {
                return w.now();
              }
            : "function" == typeof Date.now
              ? function () {
                  return Date.now() - y;
                }
              : function () {
                  return new Date().getTime() - y;
                },
        b = "undefined" != typeof window,
        E = function () {
          return (
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight
          );
        },
        S = function (e) {
          var t = e.enabled,
            n = e.onHeightChange,
            r = (0, a.__read)((0, i.useState)(b ? E() : void 0), 2),
            o = r[0],
            c = r[1],
            s = (0, i.useCallback)(
              function () {
                var e = E();
                o !== e && (c(E()), n(e));
              },
              [o, n],
            );
          (0, u.L)(
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
        _ = function (e) {
          var t = e.touchBreakpointWidth,
            n = void 0 === t ? 520 : t,
            r = e.platform,
            o = void 0 === r ? "auto" : r,
            c = (0, a.__read)((0, i.useState)(), 2),
            s = c[0],
            l = c[1];
          return (
            (0, i.useEffect)(
              function () {
                if ("auto" !== o) {
                  l(o);
                  return;
                }
                b &&
                  l(
                    window.matchMedia("(max-width: " + n + "px)").matches
                      ? "touch"
                      : "desktop",
                  );
              },
              [n, o],
            ),
            (0, u.L)(
              function () {
                if (b && "auto" === o) {
                  var e = window.matchMedia("(max-width: " + n + "px)");
                  return (
                    t(e),
                    e.addEventListener
                      ? e.addEventListener("change", t)
                      : e.addListener(t),
                    function () {
                      e.removeEventListener
                        ? e.removeEventListener("change", t)
                        : e.removeListener(t);
                    }
                  );
                }
                function t(e) {
                  e.matches ? l("touch") : l("desktop");
                }
              },
              [s, l, n],
            ),
            s
          );
        },
        k = ["tr", "am", "ge"],
        L = ["il"];
      function I(e) {
        var t,
          n,
          r,
          o,
          s,
          l,
          d,
          f,
          v,
          m,
          h,
          p,
          y,
          w,
          I,
          x = e.avatarRef,
          R = e.avatarSize,
          P = void 0 === R ? [42, 22] : R,
          D = e.colorScheme,
          U = void 0 === D ? "light" : D,
          M = e.dialogClassName,
          N = e.dialogRef,
          O = e.dir,
          T = void 0 === O ? "ltr" : O,
          W = e.env,
          H = void 0 === W ? "prod" : W,
          j = e.essentialRef,
          B = e.features,
          A = e.fetchUserData,
          Y = e.host,
          X = e.iframeRef,
          V = e.lang,
          z = e.onClose,
          J = e.onLoad,
          q = e.onMenuItemClick,
          F = e.onOpen,
          $ = e.onThemeChange,
          K = e.onLocaleChange,
          Z = e.platform,
          G = e.preload,
          Q = void 0 !== G && G,
          ee = e.project,
          et = e.queryParams,
          en = e.dynamicParams,
          er = e.retpath,
          eo = e.rpcHandlers,
          ea = e.theme,
          ei = e.tld,
          ec = e.touchBreakpointWidth,
          eu = e.userData,
          es = e.visible,
          el = void 0 !== es && es,
          ed = (0, i.useRef)({}),
          ef = (0, i.useRef)(null),
          ev = (0, i.useRef)(null),
          em = (0, i.useRef)(null),
          eh =
            ((t = void 0 === ei ? "ru" : ei),
            (0, i.useMemo)(
              function () {
                return k.includes(t)
                  ? "com." + t
                  : L.includes(t)
                    ? "co." + t
                    : t;
              },
              [t],
            ));
        (0, c.t)(ef, x || (0, i.createRef)()),
          (ev = null != N ? N : ev),
          (em = null != X ? X : em);
        var ep = (0, a.__read)((0, i.useState)(!0), 2),
          eg = ep[0],
          ey = ep[1],
          ew = (0, i.useMemo)(
            function () {
              return b ? er || location.href : er;
            },
            [er],
          ),
          eC = (0, a.__read)((0, i.useState)(Q), 2),
          eb = eC[0],
          eE = eC[1],
          eS = (0, i.useRef)({ colorScheme: U, theme: ea, retpath: ew }),
          e_ = (0, i.useMemo)(
            function () {
              if (Y) return "https://" + Y;
              if ("prod_yateam" === H) return "https://user-id.yandex-team.ru";
              if (b) {
                var e = new URL(location.href).searchParams.get("user_id_host");
                if (e) return "https://" + e;
              }
              return "https://yandex." + eh;
            },
            [Y, eh, H],
          ),
          ek = (0, i.useMemo)(
            function () {
              eb ||
                (eS.current.colorScheme === U &&
                  eS.current.theme === ea &&
                  eS.current.retpath === ew) ||
                (eS.current = { colorScheme: U, theme: ea, retpath: ew });
              var e = new URL("user-id", e_);
              if (
                (eS.current.retpath &&
                  e.searchParams.set(
                    "encodedRetpath",
                    encodeURIComponent(eS.current.retpath),
                  ),
                eS.current.colorScheme &&
                  e.searchParams.set("colorScheme", eS.current.colorScheme),
                eS.current.theme &&
                  e.searchParams.set("theme", eS.current.theme),
                V && e.searchParams.set("l10n", V),
                Array.isArray(B))
              ) {
                var t = B.join(",");
                e.searchParams.set("exp_flags", t);
              }
              for (var n in (ee && e.searchParams.set("project", ee),
              H && e.searchParams.set("env", H),
              e.searchParams.set("dir", T),
              et))
                e.searchParams.set(n, et[n]);
              for (var n in en) e.searchParams.set(n, en[n]);
              return e.toString();
            },
            [e_, B, ee, et, en, U, ea, ew, eb, H, T, V],
          );
        (0, i.useEffect)(
          function () {
            !eb && (Q || A) && eE(!0);
          },
          [eb, Q, A],
        );
        var eL = _({ platform: Z, touchBreakpointWidth: ec }),
          eI = (0, i.useCallback)(
            function () {
              eb || eE(!0);
            },
            [eb],
          ),
          ex = (0, i.useMemo)(
            function () {
              return null === P
                ? null
                : "number" == typeof P
                  ? P
                  : "touch" === eL
                    ? P[1]
                    : P[0];
            },
            [eL, P],
          ),
          eR = (0, i.useCallback)(
            function () {
              var e;
              null === (e = ef.current) || void 0 === e || e.focus(),
                null == z || z();
            },
            [z],
          ),
          eP = (0, a.__read)((0, i.useState)(), 2),
          eD = eP[0],
          eU = eP[1],
          eM = (0, a.__read)((0, i.useState)(eu), 2),
          eN = eM[0],
          eO = eM[1];
        (0, i.useEffect)(
          function () {
            eO(eu);
          },
          [eu],
        );
        var eT = (0, i.useCallback)(
          function (e) {
            if (b) {
              if ("desktop" === eL) {
                eU(e);
                return;
              }
              eU(E());
            }
          },
          [eL],
        );
        S({ enabled: "touch" === eL, onHeightChange: eT });
        var eW = (0, i.useRef)(),
          eH = ((r = (n = {
            loading: eg,
            iframeRef: em,
            origin: e_,
            rpcHandler: (0, i.useCallback)(
              function (e, t) {
                var n;
                switch (e.methodCall) {
                  case "onInit":
                    A && eO(e.params[0]), null == J || J();
                    break;
                  case "onDataLoad":
                    var r = ed.current;
                    if (
                      "number" == typeof r.start &&
                      "number" != typeof r.end &&
                      eW.current
                    ) {
                      r.end = C();
                      var o = r.end - r.start;
                      eW.current({
                        methodCall: "onSendTimeToInteractive",
                        params: [{ delta: o }],
                      });
                    }
                  case "updateUserHeight":
                    eT(e.params[0].height), ey(!1);
                    break;
                  case "ITEM_CLICK":
                    var i = e.params[0];
                    null == q || q(i.item, i, { onClose: eR });
                    break;
                  case "closeUserID":
                    null == eR || eR();
                    break;
                  case "updateTheme":
                    var c = e.params[0].theme;
                    null == $ || $(c);
                    break;
                  case "updateLocale":
                    var u = e.params[0].locale;
                    null == K || K(u);
                    break;
                  default:
                    if (!(null == eo ? void 0 : eo[e.methodCall])) return;
                    Promise.resolve(
                      null === (n = null == eo ? void 0 : eo[e.methodCall]) ||
                        void 0 === n
                        ? void 0
                        : n.call.apply(n, (0, a.__spread)([eo], e.params)),
                    ).then(t);
                }
              },
              [eo, q, eR, $, K, eT, eO, A, J],
            ),
          }).loading),
          (o = n.iframeRef),
          (s = n.origin),
          (l = n.rpcHandler),
          (d = (0, i.useRef)([])),
          (f = (0, i.useCallback)(
            function (e) {
              var t,
                n,
                a = JSON.stringify(e);
              r
                ? d.current.push(a)
                : null ===
                    (n =
                      null === (t = o.current) || void 0 === t
                        ? void 0
                        : t.contentWindow) ||
                  void 0 === n ||
                  n.postMessage(a, "*");
            },
            [r, o],
          )),
          (v = (0, i.useCallback)(
            function (e) {
              var t;
              if (e.origin === s) {
                try {
                  t = JSON.parse(e.data);
                } catch (e) {
                  return;
                }
                t.methodCall &&
                  (null == l ||
                    l((0, a.__assign)({}, t), function (e) {
                      var n;
                      f({
                        returnCall: !0,
                        params: [e],
                        resultCallbackIndex:
                          (null === (n = t.resultCallbackIndex) || void 0 === n
                            ? void 0
                            : n.__callbackId) || -1,
                      });
                    }));
              }
            },
            [s, l, f],
          )),
          (0, i.useEffect)(
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
          (0, i.useEffect)(
            function () {
              o &&
                !r &&
                0 !== d.current.length &&
                (d.current.forEach(function (e) {
                  var t, n;
                  null ===
                    (n =
                      null === (t = o.current) || void 0 === t
                        ? void 0
                        : t.contentWindow) ||
                    void 0 === n ||
                    n.postMessage(e, "*");
                }),
                (d.current = []));
            },
            [r, o],
          ),
          { sendMessage: f }).sendMessage;
        (eW.current = eH),
          (0, i.useEffect)(
            function () {
              eH({ methodCall: "updateRetpath", params: [{ retpath: ew }] });
            },
            [ew, eH],
          ),
          (0, i.useEffect)(
            function () {
              eH({
                methodCall: "onParamsChange",
                params: [(0, a.__assign)({}, en)],
              });
            },
            [en, eH],
          ),
          (0, i.useEffect)(
            function () {
              eH({
                methodCall: "updateTheme",
                params: [{ colorScheme: U, theme: ea }],
              });
            },
            [U, eH, ea],
          );
        var ej = (0, i.useCallback)(
            function (e) {
              eH({ methodCall: "focusFirst", params: [{ fromKeyboard: e }] });
            },
            [eH],
          ),
          eB = (0, i.useCallback)(
            function () {
              el ? (ej(!0), eR()) : (eb || eE(!0), ej(!1), null == F || F());
            },
            [ej, F, eb, el, eR],
          );
        (h = (m = {
          visible: el,
          onClose: eR,
          essentialRefs: (0, i.useMemo)(
            function () {
              var e = [ev, ef];
              return j && e.push(j), e;
            },
            [ev, ef, j],
          ),
        }).visible),
          (p = m.onClose),
          (y = m.essentialRefs),
          (w = m.unsafe_strategy),
          ((I = (0, i.useRef)({
            onClose: p,
            refs: y,
            closeStrategy: void 0 === w ? "pressdown" : w,
          })).current.onClose = p),
          (I.current.refs = y),
          (0, i.useEffect)(
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
          (0, u.L)(
            function () {
              var e, t;
              el &&
                ((null !== (e = (t = ed.current).start) && void 0 !== e) ||
                  (t.start = C()));
            },
            [el],
          );
        var eA = {
            colorScheme: U,
            height: eD,
            loading: eg,
            preload: eb,
            ref: em,
            src: ek,
            width: "desktop" === eL ? 320 : "100%",
          },
          eY = {
            className: M,
            colorScheme: U,
            platform: eL,
            ref: ev,
            visible: el,
            onClose: eR,
            loading: eg,
          };
        return {
          avatarProps: {
            avatarSize: ex,
            env: H,
            onClick: eB,
            onPointerEnter: eI,
            platform: eL,
            ref: ef,
            retpath: ew,
            userData: eN,
            visible: el,
            tld: eh,
          },
          contentProps: eA,
          dialogProps: eY,
        };
      }
    },
    51067: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          withUserID: function () {
            return r.k;
          },
        });
      var r = n(48698);
    },
    48698: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return c;
        },
      });
      var r = n(43218),
        o = n(65067),
        a = n(79973),
        i = n(20760);
      function c(e, t) {
        var n,
          c = function (n) {
            var c = n.onOpen,
              u = n.onClose,
              s = (0, r.__read)((0, o.useState)(!1), 2),
              l = s[0],
              d = s[1],
              f = (0, o.useCallback)(
                function () {
                  d(!0), null == c || c();
                },
                [d, c],
              ),
              v = (0, o.useCallback)(
                function () {
                  d(!1), null == u || u();
                },
                [d, u],
              ),
              m = (0, i.C)(
                (0, r.__assign)((0, r.__assign)({}, n), {
                  visible: l,
                  onOpen: f,
                  onClose: v,
                }),
              ),
              h = m.avatarProps,
              p = m.contentProps,
              g = m.dialogProps;
            return o.createElement(
              e,
              (0, r.__assign)({}, n, h),
              n.children,
              o.createElement(
                t,
                (0, r.__assign)({}, g, { onClose: v }),
                o.createElement(a.V, (0, r.__assign)({}, p)),
              ),
            );
          };
        return (
          (c.displayName =
            "'withUserID(" +
            (null !== (n = e.displayName) && void 0 !== n ? n : e) +
            ")'"),
          c
        );
      }
    },
    80384: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(43218);
      r.__exportStar(n(22662), t),
        r.__exportStar(n(73119), t),
        r.__exportStar(n(75925), t),
        r.__exportStar(n(33621), t),
        r.__exportStar(n(84787), t),
        r.__exportStar(n(51067), t);
    },
    75925: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    30478: function (e, t) {
      "use strict";
      var n = Symbol.for("react.element"),
        r =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        o = Object.assign,
        a = {};
      function i(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = a),
          (this.updater = n || r);
      }
      function c() {}
      function u(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = a),
          (this.updater = n || r);
      }
      (i.prototype.isReactComponent = {}),
        (i.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (i.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (c.prototype = i.prototype);
      var s = (u.prototype = new c());
      (s.constructor = u), o(s, i.prototype), (s.isPureReactComponent = !0);
      var l = Object.prototype.hasOwnProperty,
        d = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, r) {
        var o,
          a = {},
          i = null,
          c = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (c = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            l.call(t, o) && !d.hasOwnProperty(o) && (a[o] = t[o]);
        var u = arguments.length - 2;
        if (1 === u) a.children = r;
        else if (1 < u) {
          for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
          a.children = s;
        }
        if (e && e.defaultProps)
          for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o]);
        return { $$typeof: n, type: e, key: i, ref: c, props: a, _owner: null };
      };
    },
    88017: function (e, t, n) {
      "use strict";
      e.exports = n(30478);
    },
    33730: function () {},
    11272: function () {},
    28990: function () {},
    13058: function () {},
    25081: function () {},
    48972: function () {},
  },
]);
