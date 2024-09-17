(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5028],
  {
    71230: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return c;
        },
      });
      var r,
        a,
        o = n(98639),
        i = {
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      a = "";
                    if ("string" == typeof t || "number" == typeof t) a += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                      else for (n in t) t[n] && (a && (a += " "), (a += n));
                    }
                    return a;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => a });
            let a = r;
          },
          5264: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root: "JkKcxRVvjK7lcakkEliC",
              root_alwaysThumb: "cOKDtLfDZAuPXftfS2WM",
              root_trackSize_xxs: "d6VuG0HnwpGO47uPjPeb",
              root_trackSize_xs: "IB_XOYAyYPK4aszY9R1F",
              root_trackSize_s: "SHvrm0VRiLVwGqJJjNO8",
              root_thumbSize_xs: "BlvJwKLYTicnbJ3Qyuou",
              root_neverThumb: "dDJBVBTkzY5zY7vtSbyr",
              root_thumbSize_s: "qpvIbN4_hF6CqK0bjCq7",
              root_thumbSize_m: "P8_ABi1YnAOS8p8EY87f",
              root_thumbSize_l: "D21lBltSEiwHAaG39z6x",
            };
          },
          6161: (e, t, n) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(810),
              a = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              i = Object.prototype.hasOwnProperty,
              l =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, n) {
              var r,
                o = {},
                u = null,
                c = null;
              for (r in (void 0 !== n && (u = "" + n),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: a,
                type: e,
                key: u,
                ref: c,
                props: o,
                _owner: l.current,
              };
            }
            (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
          },
          9541: (e, t, n) => {
            e.exports = n(6161);
          },
          2342: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ThumbVariant = t.DEFAULT_MAX_VALUE = t.SliderMode = void 0),
              (t.SliderMode = { NORMAL: "normal", DEFERRED: "deferred" }),
              (t.DEFAULT_MAX_VALUE = 100),
              (t.ThumbVariant = {
                HOVER: "hover",
                NEVER: "never",
                ALWAYS: "always",
              });
          },
          7886: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Slider = void 0);
            let a = n(9541),
              o = n(5881),
              i = n(810),
              l = n(2342),
              s = r(n(5264)),
              u = (e) => {
                let {
                    forwardRef: t,
                    className: n,
                    value: r,
                    secondaryValue: u = l.DEFAULT_MAX_VALUE,
                    maxValue: c = l.DEFAULT_MAX_VALUE,
                    thumbSize: d = "l",
                    trackSize: f = "s",
                    mode: p = l.SliderMode.NORMAL,
                    onChange: v,
                    showThumbVariant: m = l.ThumbVariant.HOVER,
                    ...y
                  } = e,
                  [h, g] = (0, i.useState)(null != r ? r : 0),
                  [x, b] = (0, i.useState)(!1),
                  [E, _] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                  x || g(r);
                }, [r, x]),
                  (0, i.useEffect)(() => {
                    !x && E && p === l.SliderMode.DEFERRED && (v(h, !0), _(!1));
                  }, [p, x, v, h, E]);
                let k = (0, i.useCallback)(
                    (e) => {
                      let t = Number(e.target.value);
                      g(t),
                        _(!0),
                        "normal" === p ? (v(t, !0), _(!1)) : v(t, !1);
                    },
                    [g, v, p],
                  ),
                  w = (0, i.useCallback)(
                    (e) => {
                      let t = !1,
                        n = !1;
                      e.stopPropagation(),
                        e.nativeEvent instanceof window.MouseEvent
                          ? ((t = 0 === e.nativeEvent.button),
                            (n = "mousedown" === e.nativeEvent.type))
                          : ((t =
                              1 === e.nativeEvent.touches.length ||
                              "touchend" === e.nativeEvent.type),
                            (n = "touchstart" === e.nativeEvent.type)),
                        t && b(n);
                    },
                    [b],
                  ),
                  P = (0, i.useCallback)(() => {
                    b(!1);
                  }, [b]),
                  S = (0, i.useMemo)(() => {
                    let e = (100 * Math.min(h, c)) / c,
                      t = (100 * Math.min(u, c)) / c;
                    return {
                      backgroundSize: "".concat(e, "% 100%"),
                      "--seek-before-width": "".concat(e, "%"),
                      "--buffered-width": "".concat(t, "%"),
                    };
                  }, [h, u, c]);
                return (0, a.jsx)("input", {
                  ref: t,
                  className: (0, o.clsx)(
                    s.default.root,
                    {
                      [s.default["root_thumbSize_".concat(d)]]: d,
                      [s.default["root_trackSize_".concat(f)]]: f,
                      [s.default["root_".concat(m, "Thumb")]]: m,
                    },
                    n,
                  ),
                  type: "range",
                  max: c,
                  value: h,
                  style: S,
                  onTouchStart: w,
                  onTouchEnd: w,
                  onMouseDown: w,
                  onMouseUp: w,
                  onMouseOut: P,
                  onBlur: P,
                  onChange: k,
                  ...y,
                });
              };
            t.Slider = (0, i.forwardRef)((e, t) =>
              (0, a.jsx)(u, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = a || (a = n.t(o, 2));
          },
        },
        l = {};
      function s(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var n = (l[e] = { exports: {} });
        return i[e].call(n.exports, n, n.exports, s), n.exports;
      }
      (s.d = (e, t) => {
        for (var n in t)
          s.o(t, n) &&
            !s.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var u = {};
      Object.defineProperty(u, "X", { value: !0 }),
        (u.i = void 0),
        (r = s(7886)),
        Object.defineProperty(u, "i", {
          enumerable: !0,
          get: function () {
            return r.Slider;
          },
        });
      var c = u.i;
      u.X;
    },
    45028: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gv: function () {
          return K;
        },
        Qk: function () {
          return V;
        },
        wi: function () {
          return d;
        },
      });
      var r,
        a,
        o = n(42288),
        i = n(5763),
        l = n(34152),
        s = n(395);
      let u = o.V5.model("EqualizerFrequency", {
          key: o.V5.number,
          value: o.V5.number,
        }),
        c = o.V5.model("EqualizerPreset", {
          id: o.V5.enumeration(Object.values(i.Y)),
          preamp: o.V5.number,
          frequencies: o.V5.array(u),
        }),
        d = o.V5.model("Equalizer", {
          modal: s.KL,
          isEnabled: o.V5.optional(o.V5.boolean, !1),
          presets: o.V5.map(c),
          currentPresetId: o.V5.optional(o.V5.string, i.Y.DEFAULT),
          presetVersion: o.V5.optional(o.V5.number, 0),
        })
          .actions((e) => {
            let t = {
              setEnabled(t) {
                let { localStorage: n } = (0, o.dU)(e);
                e.isEnabled = t;
                let r = n.get(l.BUb.EqualizerConfig);
                n.set(l.BUb.EqualizerConfig, {
                  ...r,
                  isEnabled: t,
                  version: "5",
                });
              },
              loadPresets() {
                let { localStorage: t } = (0, o.dU)(e);
                e.presets = (0, o.pj)(i.wQ);
                let n = t.get(l.BUb.EqualizerConfig);
                (null == n ? void 0 : n.version) !== "5" &&
                  (t.remove(l.BUb.EqualizerConfig), (n = null)),
                  n &&
                    ((e.isEnabled = n.isEnabled),
                    n.customPreset &&
                      e.presets.set(i.Y.CUSTOM, (0, o.pj)(n.customPreset)),
                    n.lastPresetId && (e.currentPresetId = n.lastPresetId));
              },
              changePreset(t) {
                let { localStorage: n } = (0, o.dU)(e);
                e.currentPresetId = t;
                let r = n.get(l.BUb.EqualizerConfig);
                n.set(l.BUb.EqualizerConfig, {
                  ...r,
                  lastPresetId: t,
                  version: "5",
                });
              },
              changePreamp(n) {
                let { localStorage: r } = (0, o.dU)(e),
                  a = e.presets.get(e.currentPresetId);
                if (!a) return;
                let s = { ...(0, o.vM)(a), id: i.Y.CUSTOM, preamp: n };
                e.presets.set(i.Y.CUSTOM, (0, o.pj)(s)),
                  (e.presetVersion = Math.random()),
                  t.changePreset(s.id);
                let u = r.get(l.BUb.EqualizerConfig);
                r.set(l.BUb.EqualizerConfig, {
                  ...u,
                  customPreset: s,
                  version: "5",
                });
              },
              changeAmp(n, r, a) {
                let { localStorage: s } = (0, o.dU)(e),
                  u = e.presets.get(e.currentPresetId);
                if (!u) return;
                let c = (0, o.vM)(u),
                  d = c.frequencies.slice();
                d.splice(a, 1, { key: n, value: r });
                let f = { ...c, id: i.Y.CUSTOM, frequencies: d };
                e.presets.set(i.Y.CUSTOM, (0, o.pj)(f)),
                  (e.presetVersion = Math.random()),
                  t.changePreset(f.id);
                let p = s.get(l.BUb.EqualizerConfig);
                s.set(l.BUb.EqualizerConfig, {
                  ...p,
                  customPreset: f,
                  version: "5",
                });
              },
            };
            return t;
          })
          .views((e) => ({
            get currentPreset() {
              return e.presets.get(e.currentPresetId);
            },
            get currentPreampValue() {
              let t = e.presets.get(e.currentPresetId);
              if (!t) return 0;
              return t.preamp;
            },
          }));
      var f = n(9753),
        p = n(60836),
        v = n(9544),
        m = n(98639),
        y = n.t(m, 2),
        h = n(80542),
        g = n(37117),
        x = n(23881),
        b = n(34065),
        E = n(2570);
      let _ = (e, t) =>
        e < 1e3
          ? e.toString()
          : t(
              { id: "equalizer.frequency-label" },
              { value: (e / 1e3).toFixed(0) },
            );
      var k = n(10855),
        w = n.n(k),
        P = n(31014),
        S = n(39513),
        R = n(773),
        O = {
          6011: (e, t, n) => {
            let r;
            n.r(t),
              n.d(t, {
                Composite: () => tP,
                CompositeItem: () => tS,
                FloatingArrow: () => tL,
                FloatingDelayGroup: () => tW,
                FloatingFocusManager: () => ns,
                FloatingList: () => tg,
                FloatingNode: () => tB,
                FloatingOverlay: () => nc,
                FloatingPortal: () => no,
                FloatingTree: () => tH,
                arrow: () => eM,
                autoPlacement: () => es,
                autoUpdate: () => eL,
                computePosition: () => ej,
                detectOverflow: () => ei,
                flip: () => eu,
                getOverflowAncestors: () => E,
                hide: () => ef,
                inline: () => ev,
                inner: () => nN,
                limitShift: () => eg,
                offset: () => ey,
                platform: () => eC,
                safePolygon: () => nB,
                shift: () => eh,
                size: () => ex,
                useClick: () => nf,
                useClientPoint: () => nv,
                useDelayGroup: () => tZ,
                useDelayGroupContext: () => tG,
                useDismiss: () => ng,
                useFloating: () => nx,
                useFloatingNodeId: () => tq,
                useFloatingParentNodeId: () => tN,
                useFloatingPortalNode: () => na,
                useFloatingTree: () => tD,
                useFocus: () => nb,
                useHover: () => tY,
                useId: () => tC,
                useInnerOffset: () => nD,
                useInteractions: () => n_,
                useListItem: () => tx,
                useListNavigation: () => nO,
                useMergeRefs: () => te,
                useRole: () => nA,
                useTransitionStatus: () => nL,
                useTransitionStyles: () => nj,
                useTypeahead: () => nI,
              });
            var a,
              o,
              i = n(810);
            function l(e) {
              return c(e) ? (e.nodeName || "").toLowerCase() : "#document";
            }
            function s(e) {
              var t;
              return (
                (null == e
                  ? void 0
                  : null == (t = e.ownerDocument)
                    ? void 0
                    : t.defaultView) || window
              );
            }
            function u(e) {
              var t;
              return null ==
                (t = (c(e) ? e.ownerDocument : e.document) || window.document)
                ? void 0
                : t.documentElement;
            }
            function c(e) {
              return e instanceof Node || e instanceof s(e).Node;
            }
            function d(e) {
              return e instanceof Element || e instanceof s(e).Element;
            }
            function f(e) {
              return e instanceof HTMLElement || e instanceof s(e).HTMLElement;
            }
            function p(e) {
              return (
                "undefined" != typeof ShadowRoot &&
                (e instanceof ShadowRoot || e instanceof s(e).ShadowRoot)
              );
            }
            function v(e) {
              let {
                overflow: t,
                overflowX: n,
                overflowY: r,
                display: a,
              } = g(e);
              return (
                /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
                !["inline", "contents"].includes(a)
              );
            }
            function m(e) {
              let t = y(),
                n = g(e);
              return (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                (!!n.containerType && "normal" !== n.containerType) ||
                (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
                (!t && !!n.filter && "none" !== n.filter) ||
                ["transform", "perspective", "filter"].some((e) =>
                  (n.willChange || "").includes(e),
                ) ||
                ["paint", "layout", "strict", "content"].some((e) =>
                  (n.contain || "").includes(e),
                )
              );
            }
            function y() {
              return (
                "undefined" != typeof CSS &&
                !!CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")
              );
            }
            function h(e) {
              return ["html", "body", "#document"].includes(l(e));
            }
            function g(e) {
              return s(e).getComputedStyle(e);
            }
            function x(e) {
              return d(e)
                ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
            }
            function b(e) {
              if ("html" === l(e)) return e;
              let t =
                e.assignedSlot || e.parentNode || (p(e) && e.host) || u(e);
              return p(t) ? t.host : t;
            }
            function E(e, t, n) {
              var r;
              void 0 === t && (t = []), void 0 === n && (n = !0);
              let a = (function e(t) {
                  let n = b(t);
                  return h(n)
                    ? t.ownerDocument
                      ? t.ownerDocument.body
                      : t.body
                    : f(n) && v(n)
                      ? n
                      : e(n);
                })(e),
                o = a === (null == (r = e.ownerDocument) ? void 0 : r.body),
                i = s(a);
              return o
                ? t.concat(
                    i,
                    i.visualViewport || [],
                    v(a) ? a : [],
                    i.frameElement && n ? E(i.frameElement) : [],
                  )
                : t.concat(a, E(a, [], n));
            }
            function _(e) {
              let t = e.activeElement;
              for (
                ;
                (null == (n = t)
                  ? void 0
                  : null == (r = n.shadowRoot)
                    ? void 0
                    : r.activeElement) != null;

              ) {
                var n, r;
                t = t.shadowRoot.activeElement;
              }
              return t;
            }
            function k(e, t) {
              if (!e || !t) return !1;
              let n = t.getRootNode && t.getRootNode();
              if (e.contains(t)) return !0;
              if (n && p(n)) {
                let n = t;
                for (; n; ) {
                  if (e === n) return !0;
                  n = n.parentNode || n.host;
                }
              }
              return !1;
            }
            function w() {
              let e = navigator.userAgentData;
              return null != e && e.platform ? e.platform : navigator.platform;
            }
            function P() {
              let e = navigator.userAgentData;
              return e && Array.isArray(e.brands)
                ? e.brands
                    .map((e) => {
                      let { brand: t, version: n } = e;
                      return t + "/" + n;
                    })
                    .join(" ")
                : navigator.userAgent;
            }
            function S(e) {
              return (
                (0 === e.mozInputSource && !!e.isTrusted) ||
                (T() && e.pointerType
                  ? "click" === e.type && 1 === e.buttons
                  : 0 === e.detail && !e.pointerType)
              );
            }
            function O(e) {
              return (
                (!T() && 0 === e.width && 0 === e.height) ||
                (1 === e.width &&
                  1 === e.height &&
                  0 === e.pressure &&
                  0 === e.detail &&
                  "mouse" === e.pointerType) ||
                (e.width < 1 &&
                  e.height < 1 &&
                  0 === e.pressure &&
                  0 === e.detail)
              );
            }
            function A() {
              return /apple/i.test(navigator.vendor);
            }
            function T() {
              let e = /android/i;
              return e.test(w()) || e.test(P());
            }
            function C() {
              return (
                w().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
              );
            }
            function L(e, t) {
              let n = ["mouse", "pen"];
              return t || n.push("", void 0), n.includes(e);
            }
            function j(e) {
              return (null == e ? void 0 : e.ownerDocument) || document;
            }
            function I(e, t) {
              return (
                null != t &&
                ("composedPath" in e
                  ? e.composedPath().includes(t)
                  : null != e.target && t.contains(e.target))
              );
            }
            function M(e) {
              return "composedPath" in e ? e.composedPath()[0] : e.target;
            }
            function N(e) {
              return (
                f(e) &&
                e.matches(
                  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
                )
              );
            }
            function D(e) {
              e.preventDefault(), e.stopPropagation();
            }
            let q = ["top", "right", "bottom", "left"],
              B = q.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
              H = Math.min,
              z = Math.max,
              F = Math.round,
              U = Math.floor,
              K = (e) => ({ x: e, y: e }),
              Y = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
              },
              V = { start: "end", end: "start" };
            function G(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function W(e) {
              return e.split("-")[0];
            }
            function Z(e) {
              return e.split("-")[1];
            }
            function X(e) {
              return "x" === e ? "y" : "x";
            }
            function Q(e) {
              return "y" === e ? "height" : "width";
            }
            function J(e) {
              return ["top", "bottom"].includes(W(e)) ? "y" : "x";
            }
            function $(e, t, n) {
              void 0 === n && (n = !1);
              let r = Z(e),
                a = X(J(e)),
                o = Q(a),
                i =
                  "x" === a
                    ? r === (n ? "end" : "start")
                      ? "right"
                      : "left"
                    : "start" === r
                      ? "bottom"
                      : "top";
              return t.reference[o] > t.floating[o] && (i = et(i)), [i, et(i)];
            }
            function ee(e) {
              return e.replace(/start|end/g, (e) => V[e]);
            }
            function et(e) {
              return e.replace(/left|right|bottom|top/g, (e) => Y[e]);
            }
            function en(e) {
              return "number" != typeof e
                ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
                : { top: e, right: e, bottom: e, left: e };
            }
            function er(e) {
              return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height,
              };
            }
            function ea(e, t, n) {
              let r,
                { reference: a, floating: o } = e,
                i = J(t),
                l = X(J(t)),
                s = Q(l),
                u = W(t),
                c = "y" === i,
                d = a.x + a.width / 2 - o.width / 2,
                f = a.y + a.height / 2 - o.height / 2,
                p = a[s] / 2 - o[s] / 2;
              switch (u) {
                case "top":
                  r = { x: d, y: a.y - o.height };
                  break;
                case "bottom":
                  r = { x: d, y: a.y + a.height };
                  break;
                case "right":
                  r = { x: a.x + a.width, y: f };
                  break;
                case "left":
                  r = { x: a.x - o.width, y: f };
                  break;
                default:
                  r = { x: a.x, y: a.y };
              }
              switch (Z(t)) {
                case "start":
                  r[l] -= p * (n && c ? -1 : 1);
                  break;
                case "end":
                  r[l] += p * (n && c ? -1 : 1);
              }
              return r;
            }
            let eo = async (e, t, n) => {
              let {
                  placement: r = "bottom",
                  strategy: a = "absolute",
                  middleware: o = [],
                  platform: i,
                } = n,
                l = o.filter(Boolean),
                s = await (null == i.isRTL ? void 0 : i.isRTL(t)),
                u = await i.getElementRects({
                  reference: e,
                  floating: t,
                  strategy: a,
                }),
                { x: c, y: d } = ea(u, r, s),
                f = r,
                p = {},
                v = 0;
              for (let n = 0; n < l.length; n++) {
                let { name: o, fn: m } = l[n],
                  {
                    x: y,
                    y: h,
                    data: g,
                    reset: x,
                  } = await m({
                    x: c,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: a,
                    middlewareData: p,
                    rects: u,
                    platform: i,
                    elements: { reference: e, floating: t },
                  });
                if (
                  ((c = null != y ? y : c),
                  (d = null != h ? h : d),
                  (p = { ...p, [o]: { ...p[o], ...g } }),
                  x && v <= 50)
                ) {
                  v++,
                    "object" == typeof x &&
                      (x.placement && (f = x.placement),
                      x.rects &&
                        (u =
                          !0 === x.rects
                            ? await i.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: a,
                              })
                            : x.rects),
                      ({ x: c, y: d } = ea(u, f, s))),
                    (n = -1);
                  continue;
                }
              }
              return {
                x: c,
                y: d,
                placement: f,
                strategy: a,
                middlewareData: p,
              };
            };
            async function ei(e, t) {
              var n;
              void 0 === t && (t = {});
              let {
                  x: r,
                  y: a,
                  platform: o,
                  rects: i,
                  elements: l,
                  strategy: s,
                } = e,
                {
                  boundary: u = "clippingAncestors",
                  rootBoundary: c = "viewport",
                  elementContext: d = "floating",
                  altBoundary: f = !1,
                  padding: p = 0,
                } = G(t, e),
                v = en(p),
                m = l[f ? ("floating" === d ? "reference" : "floating") : d],
                y = er(
                  await o.getClippingRect({
                    element:
                      null ==
                        (n = await (null == o.isElement
                          ? void 0
                          : o.isElement(m))) || n
                        ? m
                        : m.contextElement ||
                          (await (null == o.getDocumentElement
                            ? void 0
                            : o.getDocumentElement(l.floating))),
                    boundary: u,
                    rootBoundary: c,
                    strategy: s,
                  }),
                ),
                h =
                  "floating" === d
                    ? { ...i.floating, x: r, y: a }
                    : i.reference,
                g = await (null == o.getOffsetParent
                  ? void 0
                  : o.getOffsetParent(l.floating)),
                x = ((await (null == o.isElement ? void 0 : o.isElement(g))) &&
                  (await (null == o.getScale ? void 0 : o.getScale(g)))) || {
                  x: 1,
                  y: 1,
                },
                b = er(
                  o.convertOffsetParentRelativeRectToViewportRelativeRect
                    ? await o.convertOffsetParentRelativeRectToViewportRelativeRect(
                        { rect: h, offsetParent: g, strategy: s },
                      )
                    : h,
                );
              return {
                top: (y.top - b.top + v.top) / x.y,
                bottom: (b.bottom - y.bottom + v.bottom) / x.y,
                left: (y.left - b.left + v.left) / x.x,
                right: (b.right - y.right + v.right) / x.x,
              };
            }
            let el = (e) => ({
                name: "arrow",
                options: e,
                async fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: a,
                      rects: o,
                      platform: i,
                      elements: l,
                      middlewareData: s,
                    } = t,
                    { element: u, padding: c = 0 } = G(e, t) || {};
                  if (null == u) return {};
                  let d = en(c),
                    f = { x: n, y: r },
                    p = X(J(a)),
                    v = Q(p),
                    m = await i.getDimensions(u),
                    y = "y" === p,
                    h = y ? "clientHeight" : "clientWidth",
                    g = o.reference[v] + o.reference[p] - f[p] - o.floating[v],
                    x = f[p] - o.reference[p],
                    b = await (null == i.getOffsetParent
                      ? void 0
                      : i.getOffsetParent(u)),
                    E = b ? b[h] : 0;
                  (E &&
                    (await (null == i.isElement ? void 0 : i.isElement(b)))) ||
                    (E = l.floating[h] || o.floating[v]);
                  let _ = E / 2 - m[v] / 2 - 1,
                    k = H(d[y ? "top" : "left"], _),
                    w = H(d[y ? "bottom" : "right"], _),
                    P = E - m[v] - w,
                    S = E / 2 - m[v] / 2 + (g / 2 - x / 2),
                    R = z(k, H(S, P)),
                    O =
                      !s.arrow &&
                      null != Z(a) &&
                      S != R &&
                      o.reference[v] / 2 - (S < k ? k : w) - m[v] / 2 < 0,
                    A = O ? (S < k ? S - k : S - P) : 0;
                  return {
                    [p]: f[p] + A,
                    data: {
                      [p]: R,
                      centerOffset: S - R - A,
                      ...(O && { alignmentOffset: A }),
                    },
                    reset: O,
                  };
                },
              }),
              es = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "autoPlacement",
                    options: e,
                    async fn(t) {
                      var n, r, a, o;
                      let {
                          rects: i,
                          middlewareData: l,
                          placement: s,
                          platform: u,
                          elements: c,
                        } = t,
                        {
                          crossAxis: d = !1,
                          alignment: f,
                          allowedPlacements: p = B,
                          autoAlignment: v = !0,
                          ...m
                        } = G(e, t),
                        y =
                          void 0 !== f || p === B
                            ? ((o = f || null)
                                ? [
                                    ...p.filter((e) => Z(e) === o),
                                    ...p.filter((e) => Z(e) !== o),
                                  ]
                                : p.filter((e) => W(e) === e)
                              ).filter(
                                (e) => !o || Z(e) === o || (!!v && ee(e) !== e),
                              )
                            : p,
                        h = await ei(t, m),
                        g =
                          (null == (n = l.autoPlacement) ? void 0 : n.index) ||
                          0,
                        x = y[g];
                      if (null == x) return {};
                      let b = $(
                        x,
                        i,
                        await (null == u.isRTL ? void 0 : u.isRTL(c.floating)),
                      );
                      if (s !== x) return { reset: { placement: y[0] } };
                      let E = [h[W(x)], h[b[0]], h[b[1]]],
                        _ = [
                          ...((null == (r = l.autoPlacement)
                            ? void 0
                            : r.overflows) || []),
                          { placement: x, overflows: E },
                        ],
                        k = y[g + 1];
                      if (k)
                        return {
                          data: { index: g + 1, overflows: _ },
                          reset: { placement: k },
                        };
                      let w = _.map((e) => {
                          let t = Z(e.placement);
                          return [
                            e.placement,
                            t && d
                              ? e.overflows
                                  .slice(0, 2)
                                  .reduce((e, t) => e + t, 0)
                              : e.overflows[0],
                            e.overflows,
                          ];
                        }).sort((e, t) => e[1] - t[1]),
                        P =
                          (null ==
                          (a = w.filter((e) =>
                            e[2].slice(0, Z(e[0]) ? 2 : 3).every((e) => e <= 0),
                          )[0])
                            ? void 0
                            : a[0]) || w[0][0];
                      return P !== s
                        ? {
                            data: { index: g + 1, overflows: _ },
                            reset: { placement: P },
                          }
                        : {};
                    },
                  }
                );
              },
              eu = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "flip",
                    options: e,
                    async fn(t) {
                      var n, r, a, o, i;
                      let {
                          placement: l,
                          middlewareData: s,
                          rects: u,
                          initialPlacement: c,
                          platform: d,
                          elements: f,
                        } = t,
                        {
                          mainAxis: p = !0,
                          crossAxis: v = !0,
                          fallbackPlacements: m,
                          fallbackStrategy: y = "bestFit",
                          fallbackAxisSideDirection: h = "none",
                          flipAlignment: g = !0,
                          ...x
                        } = G(e, t);
                      if (null != (n = s.arrow) && n.alignmentOffset) return {};
                      let b = W(l),
                        E = W(c) === c,
                        _ = await (null == d.isRTL
                          ? void 0
                          : d.isRTL(f.floating)),
                        k =
                          m ||
                          (E || !g
                            ? [et(c)]
                            : (function (e) {
                                let t = et(e);
                                return [ee(e), t, ee(t)];
                              })(c));
                      m ||
                        "none" === h ||
                        k.push(
                          ...(function (e, t, n, r) {
                            let a = Z(e),
                              o = (function (e, t, n) {
                                let r = ["left", "right"],
                                  a = ["right", "left"];
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    if (n) return t ? a : r;
                                    return t ? r : a;
                                  case "left":
                                  case "right":
                                    return t
                                      ? ["top", "bottom"]
                                      : ["bottom", "top"];
                                  default:
                                    return [];
                                }
                              })(W(e), "start" === n, r);
                            return (
                              a &&
                                ((o = o.map((e) => e + "-" + a)),
                                t && (o = o.concat(o.map(ee)))),
                              o
                            );
                          })(c, g, h, _),
                        );
                      let w = [c, ...k],
                        P = await ei(t, x),
                        S = [],
                        R = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                      if ((p && S.push(P[b]), v)) {
                        let e = $(l, u, _);
                        S.push(P[e[0]], P[e[1]]);
                      }
                      if (
                        ((R = [...R, { placement: l, overflows: S }]),
                        !S.every((e) => e <= 0))
                      ) {
                        let e =
                            ((null == (a = s.flip) ? void 0 : a.index) || 0) +
                            1,
                          t = w[e];
                        if (t)
                          return {
                            data: { index: e, overflows: R },
                            reset: { placement: t },
                          };
                        let n =
                          null ==
                          (o = R.filter((e) => e.overflows[0] <= 0).sort(
                            (e, t) => e.overflows[1] - t.overflows[1],
                          )[0])
                            ? void 0
                            : o.placement;
                        if (!n)
                          switch (y) {
                            case "bestFit": {
                              let e =
                                null ==
                                (i = R.map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0),
                                ]).sort((e, t) => e[1] - t[1])[0])
                                  ? void 0
                                  : i[0];
                              e && (n = e);
                              break;
                            }
                            case "initialPlacement":
                              n = c;
                          }
                        if (l !== n) return { reset: { placement: n } };
                      }
                      return {};
                    },
                  }
                );
              };
            function ec(e, t) {
              return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width,
              };
            }
            function ed(e) {
              return q.some((t) => e[t] >= 0);
            }
            let ef = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    let { rects: n } = t,
                      { strategy: r = "referenceHidden", ...a } = G(e, t);
                    switch (r) {
                      case "referenceHidden": {
                        let e = ec(
                          await ei(t, { ...a, elementContext: "reference" }),
                          n.reference,
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: ed(e),
                          },
                        };
                      }
                      case "escaped": {
                        let e = ec(
                          await ei(t, { ...a, altBoundary: !0 }),
                          n.floating,
                        );
                        return { data: { escapedOffsets: e, escaped: ed(e) } };
                      }
                      default:
                        return {};
                    }
                  },
                }
              );
            };
            function ep(e) {
              let t = H(...e.map((e) => e.left)),
                n = H(...e.map((e) => e.top));
              return {
                x: t,
                y: n,
                width: z(...e.map((e) => e.right)) - t,
                height: z(...e.map((e) => e.bottom)) - n,
              };
            }
            let ev = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "inline",
                  options: e,
                  async fn(t) {
                    let {
                        placement: n,
                        elements: r,
                        rects: a,
                        platform: o,
                        strategy: i,
                      } = t,
                      { padding: l = 2, x: s, y: u } = G(e, t),
                      c = Array.from(
                        (await (null == o.getClientRects
                          ? void 0
                          : o.getClientRects(r.reference))) || [],
                      ),
                      d = (function (e) {
                        let t = e.slice().sort((e, t) => e.y - t.y),
                          n = [],
                          r = null;
                        for (let e = 0; e < t.length; e++) {
                          let a = t[e];
                          !r || a.y - r.y > r.height / 2
                            ? n.push([a])
                            : n[n.length - 1].push(a),
                            (r = a);
                        }
                        return n.map((e) => er(ep(e)));
                      })(c),
                      f = er(ep(c)),
                      p = en(l),
                      v = await o.getElementRects({
                        reference: {
                          getBoundingClientRect: function () {
                            if (
                              2 === d.length &&
                              d[0].left > d[1].right &&
                              null != s &&
                              null != u
                            )
                              return (
                                d.find(
                                  (e) =>
                                    s > e.left - p.left &&
                                    s < e.right + p.right &&
                                    u > e.top - p.top &&
                                    u < e.bottom + p.bottom,
                                ) || f
                              );
                            if (d.length >= 2) {
                              if ("y" === J(n)) {
                                let e = d[0],
                                  t = d[d.length - 1],
                                  r = "top" === W(n),
                                  a = e.top,
                                  o = t.bottom,
                                  i = r ? e.left : t.left,
                                  l = r ? e.right : t.right;
                                return {
                                  top: a,
                                  bottom: o,
                                  left: i,
                                  right: l,
                                  width: l - i,
                                  height: o - a,
                                  x: i,
                                  y: a,
                                };
                              }
                              let e = "left" === W(n),
                                t = z(...d.map((e) => e.right)),
                                r = H(...d.map((e) => e.left)),
                                a = d.filter((n) =>
                                  e ? n.left === r : n.right === t,
                                ),
                                o = a[0].top,
                                i = a[a.length - 1].bottom;
                              return {
                                top: o,
                                bottom: i,
                                left: r,
                                right: t,
                                width: t - r,
                                height: i - o,
                                x: r,
                                y: o,
                              };
                            }
                            return f;
                          },
                        },
                        floating: r.floating,
                        strategy: i,
                      });
                    return a.reference.x !== v.reference.x ||
                      a.reference.y !== v.reference.y ||
                      a.reference.width !== v.reference.width ||
                      a.reference.height !== v.reference.height
                      ? { reset: { rects: v } }
                      : {};
                  },
                }
              );
            };
            async function em(e, t) {
              let { placement: n, platform: r, elements: a } = e,
                o = await (null == r.isRTL ? void 0 : r.isRTL(a.floating)),
                i = W(n),
                l = Z(n),
                s = "y" === J(n),
                u = ["left", "top"].includes(i) ? -1 : 1,
                c = o && s ? -1 : 1,
                d = G(t, e),
                {
                  mainAxis: f,
                  crossAxis: p,
                  alignmentAxis: v,
                } = "number" == typeof d
                  ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                  : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
              return (
                l && "number" == typeof v && (p = "end" === l ? -1 * v : v),
                s ? { x: p * c, y: f * u } : { x: f * u, y: p * c }
              );
            }
            let ey = function (e) {
                return (
                  void 0 === e && (e = 0),
                  {
                    name: "offset",
                    options: e,
                    async fn(t) {
                      let { x: n, y: r } = t,
                        a = await em(t, e);
                      return { x: n + a.x, y: r + a.y, data: a };
                    },
                  }
                );
              },
              eh = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "shift",
                    options: e,
                    async fn(t) {
                      let { x: n, y: r, placement: a } = t,
                        {
                          mainAxis: o = !0,
                          crossAxis: i = !1,
                          limiter: l = {
                            fn: (e) => {
                              let { x: t, y: n } = e;
                              return { x: t, y: n };
                            },
                          },
                          ...s
                        } = G(e, t),
                        u = { x: n, y: r },
                        c = await ei(t, s),
                        d = J(W(a)),
                        f = X(d),
                        p = u[f],
                        v = u[d];
                      if (o) {
                        let e = "y" === f ? "top" : "left",
                          t = "y" === f ? "bottom" : "right",
                          n = p + c[e],
                          r = p - c[t];
                        p = z(n, H(p, r));
                      }
                      if (i) {
                        let e = "y" === d ? "top" : "left",
                          t = "y" === d ? "bottom" : "right",
                          n = v + c[e],
                          r = v - c[t];
                        v = z(n, H(v, r));
                      }
                      let m = l.fn({ ...t, [f]: p, [d]: v });
                      return { ...m, data: { x: m.x - n, y: m.y - r } };
                    },
                  }
                );
              },
              eg = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    options: e,
                    fn(t) {
                      let {
                          x: n,
                          y: r,
                          placement: a,
                          rects: o,
                          middlewareData: i,
                        } = t,
                        {
                          offset: l = 0,
                          mainAxis: s = !0,
                          crossAxis: u = !0,
                        } = G(e, t),
                        c = { x: n, y: r },
                        d = J(a),
                        f = X(d),
                        p = c[f],
                        v = c[d],
                        m = G(l, t),
                        y =
                          "number" == typeof m
                            ? { mainAxis: m, crossAxis: 0 }
                            : { mainAxis: 0, crossAxis: 0, ...m };
                      if (s) {
                        let e = "y" === f ? "height" : "width",
                          t = o.reference[f] - o.floating[e] + y.mainAxis,
                          n = o.reference[f] + o.reference[e] - y.mainAxis;
                        p < t ? (p = t) : p > n && (p = n);
                      }
                      if (u) {
                        var h, g;
                        let e = "y" === f ? "width" : "height",
                          t = ["top", "left"].includes(W(a)),
                          n =
                            o.reference[d] -
                            o.floating[e] +
                            ((t && (null == (h = i.offset) ? void 0 : h[d])) ||
                              0) +
                            (t ? 0 : y.crossAxis),
                          r =
                            o.reference[d] +
                            o.reference[e] +
                            (t
                              ? 0
                              : (null == (g = i.offset) ? void 0 : g[d]) || 0) -
                            (t ? y.crossAxis : 0);
                        v < n ? (v = n) : v > r && (v = r);
                      }
                      return { [f]: p, [d]: v };
                    },
                  }
                );
              },
              ex = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "size",
                    options: e,
                    async fn(t) {
                      let n, r;
                      let {
                          placement: a,
                          rects: o,
                          platform: i,
                          elements: l,
                        } = t,
                        { apply: s = () => {}, ...u } = G(e, t),
                        c = await ei(t, u),
                        d = W(a),
                        f = Z(a),
                        p = "y" === J(a),
                        { width: v, height: m } = o.floating;
                      "top" === d || "bottom" === d
                        ? ((n = d),
                          (r =
                            f ===
                            ((await (null == i.isRTL
                              ? void 0
                              : i.isRTL(l.floating)))
                              ? "start"
                              : "end")
                              ? "left"
                              : "right"))
                        : ((r = d), (n = "end" === f ? "top" : "bottom"));
                      let y = m - c[n],
                        h = v - c[r],
                        g = !t.middlewareData.shift,
                        x = y,
                        b = h;
                      if (p) {
                        let e = v - c.left - c.right;
                        b = f || g ? H(h, e) : e;
                      } else {
                        let e = m - c.top - c.bottom;
                        x = f || g ? H(y, e) : e;
                      }
                      if (g && !f) {
                        let e = z(c.left, 0),
                          t = z(c.right, 0),
                          n = z(c.top, 0),
                          r = z(c.bottom, 0);
                        p
                          ? (b =
                              v -
                              2 *
                                (0 !== e || 0 !== t
                                  ? e + t
                                  : z(c.left, c.right)))
                          : (x =
                              m -
                              2 *
                                (0 !== n || 0 !== r
                                  ? n + r
                                  : z(c.top, c.bottom)));
                      }
                      await s({ ...t, availableWidth: b, availableHeight: x });
                      let E = await i.getDimensions(l.floating);
                      return v !== E.width || m !== E.height
                        ? { reset: { rects: !0 } }
                        : {};
                    },
                  }
                );
              };
            function eb(e) {
              let t = g(e),
                n = parseFloat(t.width) || 0,
                r = parseFloat(t.height) || 0,
                a = f(e),
                o = a ? e.offsetWidth : n,
                i = a ? e.offsetHeight : r,
                l = F(n) !== o || F(r) !== i;
              return l && ((n = o), (r = i)), { width: n, height: r, $: l };
            }
            function eE(e) {
              return d(e) ? e : e.contextElement;
            }
            function e_(e) {
              let t = eE(e);
              if (!f(t)) return K(1);
              let n = t.getBoundingClientRect(),
                { width: r, height: a, $: o } = eb(t),
                i = (o ? F(n.width) : n.width) / r,
                l = (o ? F(n.height) : n.height) / a;
              return (
                (i && Number.isFinite(i)) || (i = 1),
                (l && Number.isFinite(l)) || (l = 1),
                { x: i, y: l }
              );
            }
            let ek = K(0);
            function ew(e) {
              let t = s(e);
              return y() && t.visualViewport
                ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop,
                  }
                : ek;
            }
            function eP(e, t, n, r) {
              var a;
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let o = e.getBoundingClientRect(),
                i = eE(e),
                l = K(1);
              t && (r ? d(r) && (l = e_(r)) : (l = e_(e)));
              let u = (void 0 === (a = n) && (a = !1),
                r && (!a || r === s(i)) && a)
                  ? ew(i)
                  : K(0),
                c = (o.left + u.x) / l.x,
                f = (o.top + u.y) / l.y,
                p = o.width / l.x,
                v = o.height / l.y;
              if (i) {
                let e = s(i),
                  t = r && d(r) ? s(r) : r,
                  n = e.frameElement;
                for (; n && r && t !== e; ) {
                  let e = e_(n),
                    t = n.getBoundingClientRect(),
                    r = g(n),
                    a =
                      t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    o = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                  (c *= e.x),
                    (f *= e.y),
                    (p *= e.x),
                    (v *= e.y),
                    (c += a),
                    (f += o),
                    (n = s(n).frameElement);
                }
              }
              return er({ width: p, height: v, x: c, y: f });
            }
            function eS(e) {
              return eP(u(e)).left + x(e).scrollLeft;
            }
            function eR(e, t, n) {
              let r;
              if ("viewport" === t)
                r = (function (e, t) {
                  let n = s(e),
                    r = u(e),
                    a = n.visualViewport,
                    o = r.clientWidth,
                    i = r.clientHeight,
                    l = 0,
                    c = 0;
                  if (a) {
                    (o = a.width), (i = a.height);
                    let e = y();
                    (!e || (e && "fixed" === t)) &&
                      ((l = a.offsetLeft), (c = a.offsetTop));
                  }
                  return { width: o, height: i, x: l, y: c };
                })(e, n);
              else if ("document" === t)
                r = (function (e) {
                  let t = u(e),
                    n = x(e),
                    r = e.ownerDocument.body,
                    a = z(
                      t.scrollWidth,
                      t.clientWidth,
                      r.scrollWidth,
                      r.clientWidth,
                    ),
                    o = z(
                      t.scrollHeight,
                      t.clientHeight,
                      r.scrollHeight,
                      r.clientHeight,
                    ),
                    i = -n.scrollLeft + eS(e),
                    l = -n.scrollTop;
                  return (
                    "rtl" === g(r).direction &&
                      (i += z(t.clientWidth, r.clientWidth) - a),
                    { width: a, height: o, x: i, y: l }
                  );
                })(u(e));
              else if (d(t))
                r = (function (e, t) {
                  let n = eP(e, !0, "fixed" === t),
                    r = n.top + e.clientTop,
                    a = n.left + e.clientLeft,
                    o = f(e) ? e_(e) : K(1),
                    i = e.clientWidth * o.x;
                  return {
                    width: i,
                    height: e.clientHeight * o.y,
                    x: a * o.x,
                    y: r * o.y,
                  };
                })(t, n);
              else {
                let n = ew(e);
                r = { ...t, x: t.x - n.x, y: t.y - n.y };
              }
              return er(r);
            }
            function eO(e, t) {
              return f(e) && "fixed" !== g(e).position
                ? t
                  ? t(e)
                  : e.offsetParent
                : null;
            }
            function eA(e, t) {
              let n = s(e);
              if (!f(e)) return n;
              let r = eO(e, t);
              for (
                ;
                r &&
                ["table", "td", "th"].includes(l(r)) &&
                "static" === g(r).position;

              )
                r = eO(r, t);
              return r &&
                ("html" === l(r) ||
                  ("body" === l(r) && "static" === g(r).position && !m(r)))
                ? n
                : r ||
                    (function (e) {
                      let t = b(e);
                      for (; f(t) && !h(t); ) {
                        if (m(t)) return t;
                        t = b(t);
                      }
                      return null;
                    })(e) ||
                    n;
            }
            let eT = async function (e) {
                let { reference: t, floating: n, strategy: r } = e,
                  a = this.getOffsetParent || eA,
                  o = this.getDimensions;
                return {
                  reference: (function (e, t, n) {
                    let r = f(t),
                      a = u(t),
                      o = "fixed" === n,
                      i = eP(e, !0, o, t),
                      s = { scrollLeft: 0, scrollTop: 0 },
                      c = K(0);
                    if (r || (!r && !o)) {
                      if ((("body" !== l(t) || v(a)) && (s = x(t)), r)) {
                        let e = eP(t, !0, o, t);
                        (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                      } else a && (c.x = eS(a));
                    }
                    return {
                      x: i.left + s.scrollLeft - c.x,
                      y: i.top + s.scrollTop - c.y,
                      width: i.width,
                      height: i.height,
                    };
                  })(t, await a(n), r),
                  floating: { x: 0, y: 0, ...(await o(n)) },
                };
              },
              eC = {
                convertOffsetParentRelativeRectToViewportRelativeRect:
                  function (e) {
                    let { rect: t, offsetParent: n, strategy: r } = e,
                      a = f(n),
                      o = u(n);
                    if (n === o) return t;
                    let i = { scrollLeft: 0, scrollTop: 0 },
                      s = K(1),
                      c = K(0);
                    if (
                      (a || (!a && "fixed" !== r)) &&
                      (("body" !== l(n) || v(o)) && (i = x(n)), f(n))
                    ) {
                      let e = eP(n);
                      (s = e_(n)),
                        (c.x = e.x + n.clientLeft),
                        (c.y = e.y + n.clientTop);
                    }
                    return {
                      width: t.width * s.x,
                      height: t.height * s.y,
                      x: t.x * s.x - i.scrollLeft * s.x + c.x,
                      y: t.y * s.y - i.scrollTop * s.y + c.y,
                    };
                  },
                getDocumentElement: u,
                getClippingRect: function (e) {
                  let {
                      element: t,
                      boundary: n,
                      rootBoundary: r,
                      strategy: a,
                    } = e,
                    o = [
                      ...("clippingAncestors" === n
                        ? (function (e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = E(e, [], !1).filter(
                                (e) => d(e) && "body" !== l(e),
                              ),
                              a = null,
                              o = "fixed" === g(e).position,
                              i = o ? b(e) : e;
                            for (; d(i) && !h(i); ) {
                              let t = g(i),
                                n = m(i);
                              n || "fixed" !== t.position || (a = null),
                                (
                                  o
                                    ? !n && !a
                                    : (!n &&
                                        "static" === t.position &&
                                        !!a &&
                                        ["absolute", "fixed"].includes(
                                          a.position,
                                        )) ||
                                      (v(i) &&
                                        !n &&
                                        (function e(t, n) {
                                          let r = b(t);
                                          return (
                                            !(r === n || !d(r) || h(r)) &&
                                            ("fixed" === g(r).position ||
                                              e(r, n))
                                          );
                                        })(e, i))
                                )
                                  ? (r = r.filter((e) => e !== i))
                                  : (a = t),
                                (i = b(i));
                            }
                            return t.set(e, r), r;
                          })(t, this._c)
                        : [].concat(n)),
                      r,
                    ],
                    i = o[0],
                    s = o.reduce(
                      (e, n) => {
                        let r = eR(t, n, a);
                        return (
                          (e.top = z(r.top, e.top)),
                          (e.right = H(r.right, e.right)),
                          (e.bottom = H(r.bottom, e.bottom)),
                          (e.left = z(r.left, e.left)),
                          e
                        );
                      },
                      eR(t, i, a),
                    );
                  return {
                    width: s.right - s.left,
                    height: s.bottom - s.top,
                    x: s.left,
                    y: s.top,
                  };
                },
                getOffsetParent: eA,
                getElementRects: eT,
                getClientRects: function (e) {
                  return Array.from(e.getClientRects());
                },
                getDimensions: function (e) {
                  return eb(e);
                },
                getScale: e_,
                isElement: d,
                isRTL: function (e) {
                  return "rtl" === g(e).direction;
                },
              };
            function eL(e, t, n, r) {
              let a;
              void 0 === r && (r = {});
              let {
                  ancestorScroll: o = !0,
                  ancestorResize: i = !0,
                  elementResize: l = "function" == typeof ResizeObserver,
                  layoutShift: s = "function" == typeof IntersectionObserver,
                  animationFrame: c = !1,
                } = r,
                d = eE(e),
                f = o || i ? [...(d ? E(d) : []), ...E(t)] : [];
              f.forEach((e) => {
                o && e.addEventListener("scroll", n, { passive: !0 }),
                  i && e.addEventListener("resize", n);
              });
              let p =
                  d && s
                    ? (function (e, t) {
                        let n,
                          r = null,
                          a = u(e);
                        function o() {
                          clearTimeout(n), r && r.disconnect(), (r = null);
                        }
                        return (
                          !(function i(l, s) {
                            void 0 === l && (l = !1),
                              void 0 === s && (s = 1),
                              o();
                            let {
                              left: u,
                              top: c,
                              width: d,
                              height: f,
                            } = e.getBoundingClientRect();
                            if ((l || t(), !d || !f)) return;
                            let p = U(c),
                              v = U(a.clientWidth - (u + d)),
                              m = {
                                rootMargin:
                                  -p +
                                  "px " +
                                  -v +
                                  "px " +
                                  -U(a.clientHeight - (c + f)) +
                                  "px " +
                                  -U(u) +
                                  "px",
                                threshold: z(0, H(1, s)) || 1,
                              },
                              y = !0;
                            function h(e) {
                              let t = e[0].intersectionRatio;
                              if (t !== s) {
                                if (!y) return i();
                                t
                                  ? i(!1, t)
                                  : (n = setTimeout(() => {
                                      i(!1, 1e-7);
                                    }, 100));
                              }
                              y = !1;
                            }
                            try {
                              r = new IntersectionObserver(h, {
                                ...m,
                                root: a.ownerDocument,
                              });
                            } catch (e) {
                              r = new IntersectionObserver(h, m);
                            }
                            r.observe(e);
                          })(!0),
                          o
                        );
                      })(d, n)
                    : null,
                v = -1,
                m = null;
              l &&
                ((m = new ResizeObserver((e) => {
                  let [r] = e;
                  r &&
                    r.target === d &&
                    m &&
                    (m.unobserve(t),
                    cancelAnimationFrame(v),
                    (v = requestAnimationFrame(() => {
                      m && m.observe(t);
                    }))),
                    n();
                })),
                d && !c && m.observe(d),
                m.observe(t));
              let y = c ? eP(e) : null;
              return (
                c &&
                  (function t() {
                    let r = eP(e);
                    y &&
                      (r.x !== y.x ||
                        r.y !== y.y ||
                        r.width !== y.width ||
                        r.height !== y.height) &&
                      n(),
                      (y = r),
                      (a = requestAnimationFrame(t));
                  })(),
                n(),
                () => {
                  f.forEach((e) => {
                    o && e.removeEventListener("scroll", n),
                      i && e.removeEventListener("resize", n);
                  }),
                    p && p(),
                    m && m.disconnect(),
                    (m = null),
                    c && cancelAnimationFrame(a);
                }
              );
            }
            let ej = (e, t, n) => {
                let r = new Map(),
                  a = { platform: eC, ...n },
                  o = { ...a.platform, _c: r };
                return eo(e, t, { ...a, platform: o });
              },
              eI =
                ((a = {
                  createPortal: () => R.createPortal,
                  flushSync: () => R.flushSync,
                }),
                (o = {}),
                n.d(o, a),
                o),
              eM = (e) => ({
                name: "arrow",
                options: e,
                fn(t) {
                  let { element: n, padding: r } =
                    "function" == typeof e ? e(t) : e;
                  if (n && {}.hasOwnProperty.call(n, "current")) {
                    if (null != n.current)
                      return el({ element: n.current, padding: r }).fn(t);
                  } else if (n) return el({ element: n, padding: r }).fn(t);
                  return {};
                },
              });
            var eN =
              "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
            function eD(e, t) {
              let n, r, a;
              if (e === t) return !0;
              if (typeof e != typeof t) return !1;
              if ("function" == typeof e && e.toString() === t.toString())
                return !0;
              if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                  if ((n = e.length) != t.length) return !1;
                  for (r = n; 0 != r--; ) if (!eD(e[r], t[r])) return !1;
                  return !0;
                }
                if ((n = (a = Object.keys(e)).length) !== Object.keys(t).length)
                  return !1;
                for (r = n; 0 != r--; )
                  if (!{}.hasOwnProperty.call(t, a[r])) return !1;
                for (r = n; 0 != r--; ) {
                  let n = a[r];
                  if (("_owner" !== n || !e.$$typeof) && !eD(e[n], t[n]))
                    return !1;
                }
                return !0;
              }
              return e != e && t != t;
            }
            function eq(e) {
              return (
                (e.ownerDocument.defaultView || window).devicePixelRatio || 1
              );
            }
            function eB(e, t) {
              let n = eq(e);
              return Math.round(t * n) / n;
            }
            function eH(e) {
              let t = i.useRef(e);
              return (
                eN(() => {
                  t.current = e;
                }),
                t
              );
            }
            var ez =
                'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
              eF = "undefined" == typeof Element,
              eU = eF
                ? function () {}
                : Element.prototype.matches ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector,
              eK =
                !eF && Element.prototype.getRootNode
                  ? function (e) {
                      var t;
                      return null == e
                        ? void 0
                        : null === (t = e.getRootNode) || void 0 === t
                          ? void 0
                          : t.call(e);
                    }
                  : function (e) {
                      return null == e ? void 0 : e.ownerDocument;
                    },
              eY = function e(t, n) {
                void 0 === n && (n = !0);
                var r,
                  a =
                    null == t
                      ? void 0
                      : null === (r = t.getAttribute) || void 0 === r
                        ? void 0
                        : r.call(t, "inert");
                return "" === a || "true" === a || (n && t && e(t.parentNode));
              },
              eV = function (e) {
                var t,
                  n =
                    null == e
                      ? void 0
                      : null === (t = e.getAttribute) || void 0 === t
                        ? void 0
                        : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              },
              eG = function (e, t, n) {
                if (eY(e)) return [];
                var r = Array.prototype.slice.apply(e.querySelectorAll(ez));
                return t && eU.call(e, ez) && r.unshift(e), (r = r.filter(n));
              },
              eW = function e(t, n, r) {
                for (var a = [], o = Array.from(t); o.length; ) {
                  var i = o.shift();
                  if (!eY(i, !1)) {
                    if ("SLOT" === i.tagName) {
                      var l = i.assignedElements(),
                        s = e(l.length ? l : i.children, !0, r);
                      r.flatten
                        ? a.push.apply(a, s)
                        : a.push({ scopeParent: i, candidates: s });
                    } else {
                      eU.call(i, ez) &&
                        r.filter(i) &&
                        (n || !t.includes(i)) &&
                        a.push(i);
                      var u =
                          i.shadowRoot ||
                          ("function" == typeof r.getShadowRoot &&
                            r.getShadowRoot(i)),
                        c =
                          !eY(u, !1) &&
                          (!r.shadowRootFilter || r.shadowRootFilter(i));
                      if (u && c) {
                        var d = e(!0 === u ? i.children : u.children, !0, r);
                        r.flatten
                          ? a.push.apply(a, d)
                          : a.push({ scopeParent: i, candidates: d });
                      } else o.unshift.apply(o, i.children);
                    }
                  }
                }
                return a;
              },
              eZ = function (e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
              },
              eX = function (e) {
                if (!e) throw Error("No node provided");
                return e.tabIndex < 0 &&
                  (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || eV(e)) &&
                  !eZ(e)
                  ? 0
                  : e.tabIndex;
              },
              eQ = function (e, t) {
                var n = eX(e);
                return n < 0 && t && !eZ(e) ? 0 : n;
              },
              eJ = function (e, t) {
                return e.tabIndex === t.tabIndex
                  ? e.documentOrder - t.documentOrder
                  : e.tabIndex - t.tabIndex;
              },
              e$ = function (e) {
                return "INPUT" === e.tagName;
              },
              e0 = function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              },
              e1 = function (e) {
                if (!e.name) return !0;
                var t,
                  n = e.form || eK(e),
                  r = function (e) {
                    return n.querySelectorAll(
                      'input[type="radio"][name="' + e + '"]',
                    );
                  };
                if (
                  void 0 !== window.CSS &&
                  "function" == typeof window.CSS.escape
                )
                  t = r(window.CSS.escape(e.name));
                else
                  try {
                    t = r(e.name);
                  } catch (e) {
                    return (
                      console.error(
                        "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                        e.message,
                      ),
                      !1
                    );
                  }
                var a = e0(t, e.form);
                return !a || a === e;
              },
              e3 = function (e) {
                var t,
                  n,
                  r,
                  a,
                  o,
                  i,
                  l,
                  s = e && eK(e),
                  u = null === (t = s) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (s && s !== e)
                  for (
                    c = !!(
                      (null !== (n = u) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(u)) ||
                      (null != e &&
                        null !== (a = e.ownerDocument) &&
                        void 0 !== a &&
                        a.contains(e))
                    );
                    !c && u;

                  )
                    c = !!(
                      null !==
                        (i = u =
                          null === (o = s = eK(u)) || void 0 === o
                            ? void 0
                            : o.host) &&
                      void 0 !== i &&
                      null !== (l = i.ownerDocument) &&
                      void 0 !== l &&
                      l.contains(u)
                    );
                return c;
              },
              e2 = function (e) {
                var t = e.getBoundingClientRect(),
                  n = t.width,
                  r = t.height;
                return 0 === n && 0 === r;
              },
              e8 = function (e, t) {
                var n = t.displayCheck,
                  r = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var a = eU.call(e, "details>summary:first-of-type")
                  ? e.parentElement
                  : e;
                if (eU.call(a, "details:not([open]) *")) return !0;
                if (n && "full" !== n && "legacy-full" !== n) {
                  if ("non-zero-area" === n) return e2(e);
                } else {
                  if ("function" == typeof r) {
                    for (var o = e; e; ) {
                      var i = e.parentElement,
                        l = eK(e);
                      if (i && !i.shadowRoot && !0 === r(i)) return e2(e);
                      e = e.assignedSlot
                        ? e.assignedSlot
                        : i || l === e.ownerDocument
                          ? i
                          : l.host;
                    }
                    e = o;
                  }
                  if (e3(e)) return !e.getClientRects().length;
                  if ("legacy-full" !== n) return !0;
                }
                return !1;
              },
              e5 = function (e) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                  for (var t = e.parentElement; t; ) {
                    if ("FIELDSET" === t.tagName && t.disabled) {
                      for (var n = 0; n < t.children.length; n++) {
                        var r = t.children.item(n);
                        if ("LEGEND" === r.tagName)
                          return (
                            !!eU.call(t, "fieldset[disabled] *") ||
                            !r.contains(e)
                          );
                      }
                      return !0;
                    }
                    t = t.parentElement;
                  }
                return !1;
              },
              e4 = function (e, t) {
                var n, r, a;
                return (
                  !(
                    (e$((n = t)) && "radio" === n.type && !e1(n)) ||
                    0 > eX(t)
                  ) &&
                  ((r = e),
                  !(
                    (a = t).disabled ||
                    eY(a) ||
                    (e$(a) && "hidden" === a.type) ||
                    e8(a, r) ||
                    ("DETAILS" === a.tagName &&
                      Array.prototype.slice
                        .apply(a.children)
                        .some(function (e) {
                          return "SUMMARY" === e.tagName;
                        })) ||
                    e5(a)
                  ))
                );
              },
              e6 = function (e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!isNaN(t) || t >= 0;
              },
              e7 = function e(t) {
                var n = [],
                  r = [];
                return (
                  t.forEach(function (t, a) {
                    var o = !!t.scopeParent,
                      i = o ? t.scopeParent : t,
                      l = eQ(i, o),
                      s = o ? e(t.candidates) : i;
                    0 === l
                      ? o
                        ? n.push.apply(n, s)
                        : n.push(i)
                      : r.push({
                          documentOrder: a,
                          tabIndex: l,
                          item: t,
                          isScope: o,
                          content: s,
                        });
                  }),
                  r
                    .sort(eJ)
                    .reduce(function (e, t) {
                      return (
                        t.isScope
                          ? e.push.apply(e, t.content)
                          : e.push(t.content),
                        e
                      );
                    }, [])
                    .concat(n)
                );
              },
              e9 = function (e, t) {
                return e7(
                  (t = t || {}).getShadowRoot
                    ? eW([e], t.includeContainer, {
                        filter: e4.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: e6,
                      })
                    : eG(e, t.includeContainer, e4.bind(null, t)),
                );
              };
            function te(e) {
              return i.useMemo(
                () =>
                  e.every((e) => null == e)
                    ? null
                    : (t) => {
                        e.forEach((e) => {
                          "function" == typeof e
                            ? e(t)
                            : null != e && (e.current = t);
                        });
                      },
                e,
              );
            }
            let tt = i["useInsertionEffect".toString()] || ((e) => e());
            function tn(e) {
              let t = i.useRef(() => {});
              return (
                tt(() => {
                  t.current = e;
                }),
                i.useCallback(function () {
                  for (
                    var e = arguments.length, n = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  return null == t.current ? void 0 : t.current(...n);
                }, [])
              );
            }
            let tr = "ArrowUp",
              ta = "ArrowDown",
              to = "ArrowLeft",
              ti = "ArrowRight";
            function tl(e, t, n) {
              return Math.floor(e / t) !== n;
            }
            function ts(e, t) {
              return t < 0 || t >= e.current.length;
            }
            function tu(e, t) {
              return td(e, { disabledIndices: t });
            }
            function tc(e, t) {
              return td(e, {
                decrement: !0,
                startingIndex: e.current.length,
                disabledIndices: t,
              });
            }
            function td(e, t) {
              let {
                  startingIndex: n = -1,
                  decrement: r = !1,
                  disabledIndices: a,
                  amount: o = 1,
                } = void 0 === t ? {} : t,
                i = e.current,
                l = n;
              do {
                var s, u;
                l += r ? -o : o;
              } while (
                l >= 0 &&
                l <= i.length - 1 &&
                (a
                  ? a.includes(l)
                  : null == i[l] ||
                    (null == (s = i[l])
                      ? void 0
                      : s.hasAttribute("disabled")) ||
                    (null == (u = i[l])
                      ? void 0
                      : u.getAttribute("aria-disabled")) === "true")
              );
              return l;
            }
            function tf(e, t) {
              let {
                  event: n,
                  orientation: r,
                  loop: a,
                  cols: o,
                  disabledIndices: i,
                  minIndex: l,
                  maxIndex: s,
                  prevIndex: u,
                  stopEvent: c = !1,
                } = t,
                d = u;
              if (n.key === tr) {
                if ((c && D(n), -1 === u)) d = s;
                else if (
                  ((d = td(e, {
                    startingIndex: d,
                    amount: o,
                    decrement: !0,
                    disabledIndices: i,
                  })),
                  a && (u - o < l || d < 0))
                ) {
                  let e = u % o,
                    t = s % o,
                    n = s - (t - e);
                  d = t === e ? s : t > e ? n : n - o;
                }
                ts(e, d) && (d = u);
              }
              if (
                (n.key === ta &&
                  (c && D(n),
                  -1 === u
                    ? (d = l)
                    : ((d = td(e, {
                        startingIndex: u,
                        amount: o,
                        disabledIndices: i,
                      })),
                      a &&
                        u + o > s &&
                        (d = td(e, {
                          startingIndex: (u % o) - o,
                          amount: o,
                          disabledIndices: i,
                        }))),
                  ts(e, d) && (d = u)),
                "both" === r)
              ) {
                let t = U(u / o);
                n.key === ti &&
                  (c && D(n),
                  u % o != o - 1
                    ? ((d = td(e, { startingIndex: u, disabledIndices: i })),
                      a &&
                        tl(d, o, t) &&
                        (d = td(e, {
                          startingIndex: u - (u % o) - 1,
                          disabledIndices: i,
                        })))
                    : a &&
                      (d = td(e, {
                        startingIndex: u - (u % o) - 1,
                        disabledIndices: i,
                      })),
                  tl(d, o, t) && (d = u)),
                  n.key === to &&
                    (c && D(n),
                    u % o != 0
                      ? ((d = td(e, {
                          startingIndex: u,
                          disabledIndices: i,
                          decrement: !0,
                        })),
                        a &&
                          tl(d, o, t) &&
                          (d = td(e, {
                            startingIndex: u + (o - (u % o)),
                            decrement: !0,
                            disabledIndices: i,
                          })))
                      : a &&
                        (d = td(e, {
                          startingIndex: u + (o - (u % o)),
                          decrement: !0,
                          disabledIndices: i,
                        })),
                    tl(d, o, t) && (d = u));
                let r = U(s / o) === t;
                ts(e, d) &&
                  (d =
                    a && r
                      ? n.key === to
                        ? s
                        : td(e, {
                            startingIndex: u - (u % o) - 1,
                            disabledIndices: i,
                          })
                      : u);
              }
              return d;
            }
            let tp = 0;
            function tv(e, t) {
              void 0 === t && (t = {});
              let {
                preventScroll: n = !1,
                cancelPrevious: r = !0,
                sync: a = !1,
              } = t;
              r && cancelAnimationFrame(tp);
              let o = () =>
                null == e ? void 0 : e.focus({ preventScroll: n });
              a ? o() : (tp = requestAnimationFrame(o));
            }
            var tm =
              "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
            function ty(e, t) {
              let n = e.compareDocumentPosition(t);
              return n & Node.DOCUMENT_POSITION_FOLLOWING ||
                n & Node.DOCUMENT_POSITION_CONTAINED_BY
                ? -1
                : n & Node.DOCUMENT_POSITION_PRECEDING ||
                    n & Node.DOCUMENT_POSITION_CONTAINS
                  ? 1
                  : 0;
            }
            let th = i.createContext({
              register: () => {},
              unregister: () => {},
              map: new Map(),
              elementsRef: { current: [] },
            });
            function tg(e) {
              let { children: t, elementsRef: n, labelsRef: r } = e,
                [a, o] = i.useState(() => new Map()),
                l = i.useCallback((e) => {
                  o((t) => new Map(t).set(e, null));
                }, []),
                s = i.useCallback((e) => {
                  o((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
                }, []);
              return (
                tm(() => {
                  let e = new Map(a);
                  Array.from(e.keys())
                    .sort(ty)
                    .forEach((t, n) => {
                      e.set(t, n);
                    }),
                    !(function (e, t) {
                      if (e.size !== t.size) return !1;
                      for (let [n, r] of e.entries())
                        if (r !== t.get(n)) return !1;
                      return !0;
                    })(a, e) && o(e);
                }, [a]),
                i.createElement(
                  th.Provider,
                  {
                    value: i.useMemo(
                      () => ({
                        register: l,
                        unregister: s,
                        map: a,
                        elementsRef: n,
                        labelsRef: r,
                      }),
                      [l, s, a, n, r],
                    ),
                  },
                  t,
                )
              );
            }
            function tx(e) {
              let { label: t } = void 0 === e ? {} : e,
                [n, r] = i.useState(null),
                a = i.useRef(null),
                {
                  register: o,
                  unregister: l,
                  map: s,
                  elementsRef: u,
                  labelsRef: c,
                } = i.useContext(th),
                d = i.useCallback(
                  (e) => {
                    if (
                      ((a.current = e), null !== n && ((u.current[n] = e), c))
                    ) {
                      var r;
                      let a = void 0 !== t;
                      c.current[n] = a
                        ? t
                        : null != (r = null == e ? void 0 : e.textContent)
                          ? r
                          : null;
                    }
                  },
                  [n, u, c, t],
                );
              return (
                tm(() => {
                  let e = a.current;
                  if (e)
                    return (
                      o(e),
                      () => {
                        l(e);
                      }
                    );
                }, [o, l]),
                tm(() => {
                  let e = a.current ? s.get(a.current) : null;
                  null != e && r(e);
                }, [s]),
                i.useMemo(() => ({ ref: d, index: null == n ? -1 : n }), [n, d])
              );
            }
            function tb(e, t) {
              return "function" == typeof e
                ? e(t)
                : e
                  ? i.cloneElement(e, t)
                  : i.createElement("div", t);
            }
            let tE = i.createContext({ activeIndex: 0, onNavigate: () => {} }),
              t_ = [to, ti],
              tk = [tr, ta],
              tw = [...t_, ...tk],
              tP = i.forwardRef(function (e, t) {
                let {
                    render: n,
                    orientation: r = "both",
                    loop: a = !0,
                    cols: o = 1,
                    disabledIndices: l,
                    activeIndex: s,
                    onNavigate: u,
                    ...c
                  } = e,
                  [d, f] = i.useState(0),
                  p = null != s ? s : d,
                  v = tn(null != u ? u : f),
                  m = i.useRef([]),
                  y = n && "function" != typeof n ? n.props : {},
                  h = i.useMemo(
                    () => ({ activeIndex: p, onNavigate: v }),
                    [p, v],
                  ),
                  g = o > 1,
                  x = {
                    ...c,
                    ...y,
                    ref: t,
                    "aria-orientation": "both" === r ? void 0 : r,
                    onKeyDown(e) {
                      null == c.onKeyDown || c.onKeyDown(e),
                        null == y.onKeyDown || y.onKeyDown(e),
                        (function (e) {
                          if (!tw.includes(e.key)) return;
                          let t = tu(m, l),
                            n = tc(m, l),
                            i = p;
                          g &&
                            (i = tf(m, {
                              event: e,
                              orientation: r,
                              loop: a,
                              cols: o,
                              disabledIndices: l,
                              minIndex: t,
                              maxIndex: n,
                              prevIndex: p,
                            }));
                          let s = {
                              horizontal: [ti],
                              vertical: [ta],
                              both: [ti, ta],
                            }[r],
                            u = {
                              horizontal: [to],
                              vertical: [tr],
                              both: [to, tr],
                            }[r],
                            c = g
                              ? tw
                              : { horizontal: t_, vertical: tk, both: tw }[r];
                          i === p &&
                            [...s, ...u].includes(e.key) &&
                            (i =
                              a && i === n && s.includes(e.key)
                                ? t
                                : a && i === t && u.includes(e.key)
                                  ? n
                                  : td(m, {
                                      startingIndex: i,
                                      decrement: u.includes(e.key),
                                      disabledIndices: l,
                                    })),
                            i === p ||
                              ts(m, i) ||
                              (e.stopPropagation(),
                              c.includes(e.key) && e.preventDefault(),
                              v(i),
                              queueMicrotask(() => {
                                tv(m.current[i]);
                              }));
                        })(e);
                    },
                  };
                return i.createElement(
                  tE.Provider,
                  { value: h },
                  i.createElement(tg, { elementsRef: m }, tb(n, x)),
                );
              }),
              tS = i.forwardRef(function (e, t) {
                let { render: n, ...r } = e,
                  a = n && "function" != typeof n ? n.props : {},
                  { activeIndex: o, onNavigate: l } = i.useContext(tE),
                  { ref: s, index: u } = tx(),
                  c = te([s, t, a.ref]),
                  d = o === u;
                return tb(n, {
                  ...r,
                  ...a,
                  ref: c,
                  tabIndex: d ? 0 : -1,
                  "data-active": d ? "" : void 0,
                  onFocus(e) {
                    null == r.onFocus || r.onFocus(e),
                      null == a.onFocus || a.onFocus(e),
                      l(u);
                  },
                });
              });
            function tR() {
              return (tR = Object.assign
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
            let tO = !1,
              tA = 0,
              tT = () => "floating-ui-" + tA++,
              tC =
                i["useId".toString()] ||
                function () {
                  let [e, t] = i.useState(() => (tO ? tT() : void 0));
                  return (
                    tm(() => {
                      null == e && t(tT());
                    }, []),
                    i.useEffect(() => {
                      tO || (tO = !0);
                    }, []),
                    e
                  );
                },
              tL = i.forwardRef(function (e, t) {
                let {
                    context: {
                      placement: n,
                      elements: { floating: r },
                      middlewareData: { arrow: a },
                    },
                    width: o = 14,
                    height: l = 7,
                    tipRadius: s = 0,
                    strokeWidth: u = 0,
                    staticOffset: c,
                    stroke: d,
                    d: f,
                    style: { transform: p, ...v } = {},
                    ...m
                  } = e,
                  y = tC();
                if (!r) return null;
                let h = (u *= 2) / 2,
                  g = (o / 2) * (-(s / 8) + 1),
                  x = ((l / 2) * s) / 4,
                  [b, E] = n.split("-"),
                  _ = eC.isRTL(r),
                  k = !!f,
                  w = "top" === b || "bottom" === b,
                  P = c && "end" === E ? "bottom" : "top",
                  S = c && "end" === E ? "right" : "left";
                c && _ && (S = "end" === E ? "left" : "right");
                let R = (null == a ? void 0 : a.x) != null ? c || a.x : "",
                  O = (null == a ? void 0 : a.y) != null ? c || a.y : "",
                  A =
                    f ||
                    "M0,0 H" +
                      o +
                      " L" +
                      (o - g) +
                      "," +
                      (l - x) +
                      (" Q" + o / 2 + "," + l + " ") +
                      g +
                      "," +
                      (l - x) +
                      " Z",
                  T = {
                    top: k ? "rotate(180deg)" : "",
                    left: k ? "rotate(90deg)" : "rotate(-90deg)",
                    bottom: k ? "" : "rotate(180deg)",
                    right: k ? "rotate(-90deg)" : "rotate(90deg)",
                  }[b];
                return i.createElement(
                  "svg",
                  tR({}, m, {
                    "aria-hidden": !0,
                    ref: t,
                    width: k ? o : o + u,
                    height: o,
                    viewBox: "0 0 " + o + " " + (l > o ? l : o),
                    style: {
                      position: "absolute",
                      pointerEvents: "none",
                      [S]: R,
                      [P]: O,
                      [b]: w || k ? "100%" : "calc(100% - " + u / 2 + "px)",
                      transform: "" + T + (null != p ? p : ""),
                      ...v,
                    },
                  }),
                  u > 0 &&
                    i.createElement("path", {
                      clipPath: "url(#" + y + ")",
                      fill: "none",
                      stroke: d,
                      strokeWidth: u + (f ? 0 : 1),
                      d: A,
                    }),
                  i.createElement("path", {
                    stroke: u && !f ? m.fill : "none",
                    d: A,
                  }),
                  i.createElement(
                    "clipPath",
                    { id: y },
                    i.createElement("rect", {
                      x: -h,
                      y: h * (k ? -1 : 1),
                      width: o + u,
                      height: o,
                    }),
                  ),
                );
              });
            function tj() {
              let e = new Map();
              return {
                emit(t, n) {
                  var r;
                  null == (r = e.get(t)) || r.forEach((e) => e(n));
                },
                on(t, n) {
                  e.set(t, [...(e.get(t) || []), n]);
                },
                off(t, n) {
                  var r;
                  e.set(
                    t,
                    (null == (r = e.get(t))
                      ? void 0
                      : r.filter((e) => e !== n)) || [],
                  );
                },
              };
            }
            let tI = i.createContext(null),
              tM = i.createContext(null),
              tN = () => {
                var e;
                return (null == (e = i.useContext(tI)) ? void 0 : e.id) || null;
              },
              tD = () => i.useContext(tM);
            function tq(e) {
              let t = tC(),
                n = tD(),
                r = tN(),
                a = e || r;
              return (
                tm(() => {
                  let e = { id: t, parentId: a };
                  return (
                    null == n || n.addNode(e),
                    () => {
                      null == n || n.removeNode(e);
                    }
                  );
                }, [n, t, a]),
                t
              );
            }
            function tB(e) {
              let { children: t, id: n } = e,
                r = tN();
              return i.createElement(
                tI.Provider,
                { value: i.useMemo(() => ({ id: n, parentId: r }), [n, r]) },
                t,
              );
            }
            function tH(e) {
              let { children: t } = e,
                n = i.useRef([]),
                r = i.useCallback((e) => {
                  n.current = [...n.current, e];
                }, []),
                a = i.useCallback((e) => {
                  n.current = n.current.filter((t) => t !== e);
                }, []),
                o = i.useState(() => tj())[0];
              return i.createElement(
                tM.Provider,
                {
                  value: i.useMemo(
                    () => ({
                      nodesRef: n,
                      addNode: r,
                      removeNode: a,
                      events: o,
                    }),
                    [n, r, a, o],
                  ),
                },
                t,
              );
            }
            function tz(e) {
              return "data-floating-ui-" + e;
            }
            function tF(e) {
              let t = (0, i.useRef)(e);
              return (
                tm(() => {
                  t.current = e;
                }),
                t
              );
            }
            let tU = tz("safe-polygon");
            function tK(e, t, n) {
              return n && !L(n)
                ? 0
                : "number" == typeof e
                  ? e
                  : null == e
                    ? void 0
                    : e[t];
            }
            function tY(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: a,
                  events: o,
                  elements: { domReference: l, floating: s },
                  refs: u,
                } = e,
                {
                  enabled: c = !0,
                  delay: f = 0,
                  handleClose: p = null,
                  mouseOnly: v = !1,
                  restMs: m = 0,
                  move: y = !0,
                } = t,
                h = tD(),
                g = tN(),
                x = tF(p),
                b = tF(f),
                E = i.useRef(),
                _ = i.useRef(),
                w = i.useRef(),
                P = i.useRef(),
                S = i.useRef(!0),
                R = i.useRef(!1),
                O = i.useRef(() => {}),
                A = i.useCallback(() => {
                  var e;
                  let t = null == (e = a.current.openEvent) ? void 0 : e.type;
                  return (
                    (null == t ? void 0 : t.includes("mouse")) &&
                    "mousedown" !== t
                  );
                }, [a]);
              i.useEffect(() => {
                if (c)
                  return (
                    o.on("dismiss", e),
                    () => {
                      o.off("dismiss", e);
                    }
                  );
                function e() {
                  clearTimeout(_.current),
                    clearTimeout(P.current),
                    (S.current = !0);
                }
              }, [c, o]),
                i.useEffect(() => {
                  if (!c || !x.current || !n) return;
                  function e(e) {
                    A() && r(!1, e);
                  }
                  let t = j(s).documentElement;
                  return (
                    t.addEventListener("mouseleave", e),
                    () => {
                      t.removeEventListener("mouseleave", e);
                    }
                  );
                }, [s, n, r, c, x, a, A]);
              let T = i.useCallback(
                  function (e, t) {
                    void 0 === t && (t = !0);
                    let n = tK(b.current, "close", E.current);
                    n && !w.current
                      ? (clearTimeout(_.current),
                        (_.current = setTimeout(() => r(!1, e), n)))
                      : t && (clearTimeout(_.current), r(!1, e));
                  },
                  [b, r],
                ),
                C = i.useCallback(() => {
                  O.current(), (w.current = void 0);
                }, []),
                I = i.useCallback(() => {
                  if (R.current) {
                    let e = j(u.floating.current).body;
                    (e.style.pointerEvents = ""),
                      e.removeAttribute(tU),
                      (R.current = !1);
                  }
                }, [u]);
              return (
                i.useEffect(() => {
                  if (c && d(l))
                    return (
                      n && l.addEventListener("mouseleave", u),
                      null == s || s.addEventListener("mouseleave", u),
                      y && l.addEventListener("mousemove", o, { once: !0 }),
                      l.addEventListener("mouseenter", o),
                      l.addEventListener("mouseleave", i),
                      () => {
                        n && l.removeEventListener("mouseleave", u),
                          null == s || s.removeEventListener("mouseleave", u),
                          y && l.removeEventListener("mousemove", o),
                          l.removeEventListener("mouseenter", o),
                          l.removeEventListener("mouseleave", i);
                      }
                    );
                  function t() {
                    return (
                      !!a.current.openEvent &&
                      ["click", "mousedown"].includes(a.current.openEvent.type)
                    );
                  }
                  function o(e) {
                    if (
                      (clearTimeout(_.current),
                      (S.current = !1),
                      (v && !L(E.current)) ||
                        (m > 0 && 0 === tK(b.current, "open")))
                    )
                      return;
                    let t = tK(b.current, "open", E.current);
                    t
                      ? (_.current = setTimeout(() => {
                          r(!0, e);
                        }, t))
                      : r(!0, e);
                  }
                  function i(r) {
                    if (t()) return;
                    O.current();
                    let a = j(s);
                    if ((clearTimeout(P.current), x.current)) {
                      n || clearTimeout(_.current),
                        (w.current = x.current({
                          ...e,
                          tree: h,
                          x: r.clientX,
                          y: r.clientY,
                          onClose() {
                            I(), C(), T(r);
                          },
                        }));
                      let t = w.current;
                      a.addEventListener("mousemove", t),
                        (O.current = () => {
                          a.removeEventListener("mousemove", t);
                        });
                      return;
                    }
                    ("touch" === E.current && k(s, r.relatedTarget)) || T(r);
                  }
                  function u(n) {
                    t() ||
                      null == x.current ||
                      x.current({
                        ...e,
                        tree: h,
                        x: n.clientX,
                        y: n.clientY,
                        onClose() {
                          I(), C(), T(n);
                        },
                      })(n);
                  }
                }, [l, s, c, e, v, m, y, T, C, I, r, n, h, b, x, a]),
                tm(() => {
                  var e, t, r;
                  if (
                    c &&
                    n &&
                    null != (e = x.current) &&
                    e.__options.blockPointerEvents &&
                    A()
                  ) {
                    let e = j(s).body;
                    if (
                      (e.setAttribute(tU, ""),
                      (e.style.pointerEvents = "none"),
                      (R.current = !0),
                      d(l) && s)
                    ) {
                      let e =
                        null == h
                          ? void 0
                          : null ==
                              (t = h.nodesRef.current.find((e) => e.id === g))
                            ? void 0
                            : null == (r = t.context)
                              ? void 0
                              : r.elements.floating;
                      return (
                        e && (e.style.pointerEvents = ""),
                        (l.style.pointerEvents = "auto"),
                        (s.style.pointerEvents = "auto"),
                        () => {
                          (l.style.pointerEvents = ""),
                            (s.style.pointerEvents = "");
                        }
                      );
                    }
                  }
                }, [c, n, g, s, l, h, x, a, A]),
                tm(() => {
                  n || ((E.current = void 0), C(), I());
                }, [n, C, I]),
                i.useEffect(
                  () => () => {
                    C(), clearTimeout(_.current), clearTimeout(P.current), I();
                  },
                  [c, l, C, I],
                ),
                i.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    E.current = e.pointerType;
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove(e) {
                        n ||
                          0 === m ||
                          (clearTimeout(P.current),
                          (P.current = setTimeout(() => {
                            S.current || r(!0, e.nativeEvent);
                          }, m)));
                      },
                    },
                    floating: {
                      onMouseEnter() {
                        clearTimeout(_.current);
                      },
                      onMouseLeave(e) {
                        o.emit("dismiss", {
                          type: "mouseLeave",
                          data: { returnFocus: !1 },
                        }),
                          T(e.nativeEvent, !1);
                      },
                    },
                  };
                }, [o, c, m, n, r, T])
              );
            }
            let tV = i.createContext({
                delay: 0,
                initialDelay: 0,
                timeoutMs: 0,
                currentId: null,
                setCurrentId: () => {},
                setState: () => {},
                isInstantPhase: !1,
              }),
              tG = () => i.useContext(tV),
              tW = (e) => {
                let { children: t, delay: n, timeoutMs: r = 0 } = e,
                  [a, o] = i.useReducer((e, t) => ({ ...e, ...t }), {
                    delay: n,
                    timeoutMs: r,
                    initialDelay: n,
                    currentId: null,
                    isInstantPhase: !1,
                  }),
                  l = i.useRef(null),
                  s = i.useCallback((e) => {
                    o({ currentId: e });
                  }, []);
                return (
                  tm(() => {
                    a.currentId
                      ? null === l.current
                        ? (l.current = a.currentId)
                        : o({ isInstantPhase: !0 })
                      : (o({ isInstantPhase: !1 }), (l.current = null));
                  }, [a.currentId]),
                  i.createElement(
                    tV.Provider,
                    {
                      value: i.useMemo(
                        () => ({ ...a, setState: o, setCurrentId: s }),
                        [a, o, s],
                      ),
                    },
                    t,
                  )
                );
              },
              tZ = (e, t) => {
                let { open: n, onOpenChange: r } = e,
                  { id: a } = t,
                  {
                    currentId: o,
                    setCurrentId: i,
                    initialDelay: l,
                    setState: s,
                    timeoutMs: u,
                  } = tG();
                tm(() => {
                  o &&
                    (s({ delay: { open: 1, close: tK(l, "close") } }),
                    o !== a && r(!1));
                }, [a, r, s, o, l]),
                  tm(() => {
                    function e() {
                      r(!1), s({ delay: l, currentId: null });
                    }
                    if (!n && o === a) {
                      if (u) {
                        let t = window.setTimeout(e, u);
                        return () => {
                          clearTimeout(t);
                        };
                      }
                      e();
                    }
                  }, [n, s, o, a, r, l, u]),
                  tm(() => {
                    n && i(a);
                  }, [n, i, a]);
              };
            function tX(e, t) {
              let n = e.filter((e) => {
                  var n;
                  return (
                    e.parentId === t &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                }),
                r = n;
              for (; r.length; )
                (r = e.filter((e) => {
                  var t;
                  return null == (t = r)
                    ? void 0
                    : t.some((t) => {
                        var n;
                        return (
                          e.parentId === t.id &&
                          (null == (n = e.context) ? void 0 : n.open)
                        );
                      });
                })),
                  (n = n.concat(r));
              return n;
            }
            let tQ = new WeakMap(),
              tJ = new WeakSet(),
              t$ = {},
              t0 = 0,
              t1 = () =>
                "undefined" != typeof HTMLElement &&
                "inert" in HTMLElement.prototype,
              t3 = (e) => e && (e.host || t3(e.parentNode)),
              t2 = (e, t) =>
                t
                  .map((t) => {
                    if (e.contains(t)) return t;
                    let n = t3(t);
                    return e.contains(n) ? n : null;
                  })
                  .filter((e) => null != e);
            function t8(e, t, n) {
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let r = j(e[0]).body;
              return (function (e, t, n, r) {
                let a = "data-floating-ui-inert",
                  o = r ? "inert" : n ? "aria-hidden" : null,
                  i = t2(t, e),
                  l = new Set(),
                  s = new Set(i),
                  u = [];
                t$[a] || (t$[a] = new WeakMap());
                let c = t$[a];
                return (
                  i.forEach(function e(t) {
                    !(!t || l.has(t)) &&
                      (l.add(t), t.parentNode && e(t.parentNode));
                  }),
                  (function e(t) {
                    !t ||
                      s.has(t) ||
                      Array.prototype.forEach.call(t.children, (t) => {
                        if (l.has(t)) e(t);
                        else {
                          let e = o ? t.getAttribute(o) : null,
                            n = null !== e && "false" !== e,
                            r = (tQ.get(t) || 0) + 1,
                            i = (c.get(t) || 0) + 1;
                          tQ.set(t, r),
                            c.set(t, i),
                            u.push(t),
                            1 === r && n && tJ.add(t),
                            1 === i && t.setAttribute(a, ""),
                            !n && o && t.setAttribute(o, "true");
                        }
                      });
                  })(t),
                  l.clear(),
                  t0++,
                  () => {
                    u.forEach((e) => {
                      let t = (tQ.get(e) || 0) - 1,
                        n = (c.get(e) || 0) - 1;
                      tQ.set(e, t),
                        c.set(e, n),
                        t ||
                          (!tJ.has(e) && o && e.removeAttribute(o),
                          tJ.delete(e)),
                        n || e.removeAttribute(a);
                    }),
                      --t0 ||
                        ((tQ = new WeakMap()),
                        (tQ = new WeakMap()),
                        (tJ = new WeakSet()),
                        (t$ = {}));
                  }
                );
              })(
                e.concat(Array.from(r.querySelectorAll("[aria-live]"))),
                r,
                t,
                n,
              );
            }
            let t5 = () => ({
              getShadowRoot: !0,
              displayCheck:
                "function" == typeof ResizeObserver &&
                ResizeObserver.toString().includes("[native code]")
                  ? "full"
                  : "none",
            });
            function t4(e, t) {
              let n = e9(e, t5());
              "prev" === t && n.reverse();
              let r = n.indexOf(_(j(e)));
              return n.slice(r + 1)[0];
            }
            function t6() {
              return t4(document.body, "next");
            }
            function t7() {
              return t4(document.body, "prev");
            }
            function t9(e, t) {
              let n = t || e.currentTarget,
                r = e.relatedTarget;
              return !r || !k(n, r);
            }
            let ne = {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "fixed",
              whiteSpace: "nowrap",
              width: "1px",
              top: 0,
              left: 0,
            };
            function nt(e) {
              "Tab" === e.key && (e.target, clearTimeout(r));
            }
            let nn = i.forwardRef(function (e, t) {
                let [n, r] = i.useState();
                tm(
                  () => (
                    A() && r("button"),
                    document.addEventListener("keydown", nt),
                    () => {
                      document.removeEventListener("keydown", nt);
                    }
                  ),
                  [],
                );
                let a = {
                  ref: t,
                  tabIndex: 0,
                  role: n,
                  "aria-hidden": !n || void 0,
                  [tz("focus-guard")]: "",
                  style: ne,
                };
                return i.createElement("span", tR({}, e, a));
              }),
              nr = i.createContext(null);
            function na(e) {
              let { id: t, root: n } = void 0 === e ? {} : e,
                [r, a] = i.useState(null),
                o = tC(),
                l = ni(),
                s = i.useMemo(
                  () => ({ id: t, root: n, portalContext: l, uniqueId: o }),
                  [t, n, l, o],
                ),
                u = i.useRef();
              return (
                tm(
                  () => () => {
                    null == r || r.remove();
                  },
                  [r, s],
                ),
                tm(() => {
                  if (u.current === s) return;
                  u.current = s;
                  let { id: e, root: t, portalContext: n, uniqueId: r } = s,
                    o = e ? document.getElementById(e) : null,
                    i = tz("portal");
                  if (o) {
                    let e = document.createElement("div");
                    (e.id = r), e.setAttribute(i, ""), o.appendChild(e), a(e);
                  } else {
                    let o = t || (null == n ? void 0 : n.portalNode);
                    o && !d(o) && (o = o.current), (o = o || document.body);
                    let l = null;
                    e &&
                      (((l = document.createElement("div")).id = e),
                      o.appendChild(l));
                    let s = document.createElement("div");
                    (s.id = r),
                      s.setAttribute(i, ""),
                      (o = l || o).appendChild(s),
                      a(s);
                  }
                }, [s]),
                r
              );
            }
            function no(e) {
              let {
                  children: t,
                  id: n,
                  root: r = null,
                  preserveTabOrder: a = !0,
                } = e,
                o = na({ id: n, root: r }),
                [l, s] = i.useState(null),
                u = i.useRef(null),
                c = i.useRef(null),
                d = i.useRef(null),
                f = i.useRef(null),
                p = !!l && !l.modal && l.open && a && !!(r || o);
              return (
                i.useEffect(() => {
                  if (o && a && (null == l || !l.modal))
                    return (
                      o.addEventListener("focusin", e, !0),
                      o.addEventListener("focusout", e, !0),
                      () => {
                        o.removeEventListener("focusin", e, !0),
                          o.removeEventListener("focusout", e, !0);
                      }
                    );
                  function e(e) {
                    o &&
                      t9(e) &&
                      ("focusin" === e.type
                        ? function (e) {
                            e.querySelectorAll("[data-tabindex]").forEach(
                              (e) => {
                                let t = e.dataset.tabindex;
                                delete e.dataset.tabindex,
                                  t
                                    ? e.setAttribute("tabindex", t)
                                    : e.removeAttribute("tabindex");
                              },
                            );
                          }
                        : function (e) {
                            e9(e, t5()).forEach((e) => {
                              (e.dataset.tabindex =
                                e.getAttribute("tabindex") || ""),
                                e.setAttribute("tabindex", "-1");
                            });
                          })(o);
                  }
                }, [o, a, null == l ? void 0 : l.modal]),
                i.createElement(
                  nr.Provider,
                  {
                    value: i.useMemo(
                      () => ({
                        preserveTabOrder: a,
                        beforeOutsideRef: u,
                        afterOutsideRef: c,
                        beforeInsideRef: d,
                        afterInsideRef: f,
                        portalNode: o,
                        setFocusManagerState: s,
                      }),
                      [a, o],
                    ),
                  },
                  p &&
                    o &&
                    i.createElement(nn, {
                      "data-type": "outside",
                      ref: u,
                      onFocus: (e) => {
                        if (t9(e, o)) {
                          var t;
                          null == (t = d.current) || t.focus();
                        } else {
                          let e =
                            t7() ||
                            (null == l ? void 0 : l.refs.domReference.current);
                          null == e || e.focus();
                        }
                      },
                    }),
                  p &&
                    o &&
                    i.createElement("span", { "aria-owns": o.id, style: ne }),
                  o && (0, eI.createPortal)(t, o),
                  p &&
                    o &&
                    i.createElement(nn, {
                      "data-type": "outside",
                      ref: c,
                      onFocus: (e) => {
                        if (t9(e, o)) {
                          var t;
                          null == (t = f.current) || t.focus();
                        } else {
                          let t =
                            t6() ||
                            (null == l ? void 0 : l.refs.domReference.current);
                          null == t || t.focus(),
                            (null == l ? void 0 : l.closeOnFocusOut) &&
                              (null == l || l.onOpenChange(!1, e.nativeEvent));
                        }
                      },
                    }),
                )
              );
            }
            let ni = () => i.useContext(nr),
              nl = i.forwardRef(function (e, t) {
                return i.createElement(
                  "button",
                  tR({}, e, {
                    type: "button",
                    ref: t,
                    tabIndex: -1,
                    style: ne,
                  }),
                );
              });
            function ns(e) {
              let {
                  context: t,
                  children: n,
                  disabled: r = !1,
                  order: a = ["content"],
                  guards: o = !0,
                  initialFocus: l = 0,
                  returnFocus: s = !0,
                  modal: u = !0,
                  visuallyHiddenDismiss: c = !1,
                  closeOnFocusOut: d = !0,
                } = e,
                {
                  open: p,
                  refs: v,
                  nodeId: m,
                  onOpenChange: y,
                  events: h,
                  dataRef: g,
                  elements: { domReference: x, floating: b },
                } = t,
                E = "number" == typeof l && l < 0,
                w =
                  (null == x ? void 0 : x.getAttribute("role")) ===
                    "combobox" &&
                  N(x) &&
                  E,
                P = !w && u,
                S = !t1() || o,
                R = tF(a),
                O = tF(l),
                A = tF(s),
                T = tD(),
                C = ni(),
                L = i.useRef(null),
                I = i.useRef(null),
                q = i.useRef(!1),
                B = i.useRef(null),
                H = i.useRef(!1),
                z = null != C,
                F = i.useCallback(
                  function (e) {
                    return void 0 === e && (e = b), e ? e9(e, t5()) : [];
                  },
                  [b],
                ),
                U = i.useCallback(
                  (e) => {
                    let t = F(e);
                    return R.current
                      .map((e) =>
                        x && "reference" === e
                          ? x
                          : b && "floating" === e
                            ? b
                            : t,
                      )
                      .filter(Boolean)
                      .flat();
                  },
                  [x, b, R, F],
                );
              function K(e) {
                return !r && c && P
                  ? i.createElement(
                      nl,
                      {
                        ref: "start" === e ? L : I,
                        onClick: (e) => y(!1, e.nativeEvent),
                      },
                      "string" == typeof c ? c : "Dismiss",
                    )
                  : null;
              }
              i.useEffect(() => {
                if (r || !P) return;
                function e(e) {
                  if ("Tab" === e.key) {
                    k(b, _(j(b))) && 0 === F().length && !w && D(e);
                    let t = U(),
                      n = M(e);
                    "reference" === R.current[0] &&
                      n === x &&
                      (D(e), e.shiftKey ? tv(t[t.length - 1]) : tv(t[1])),
                      "floating" === R.current[1] &&
                        n === b &&
                        e.shiftKey &&
                        (D(e), tv(t[0]));
                  }
                }
                let t = j(b);
                return (
                  t.addEventListener("keydown", e),
                  () => {
                    t.removeEventListener("keydown", e);
                  }
                );
              }, [r, x, b, P, R, v, w, F, U]),
                i.useEffect(() => {
                  if (!r && d && b && f(x))
                    return (
                      x.addEventListener("focusout", t),
                      x.addEventListener("pointerdown", e),
                      P || b.addEventListener("focusout", t),
                      () => {
                        x.removeEventListener("focusout", t),
                          x.removeEventListener("pointerdown", e),
                          P || b.removeEventListener("focusout", t);
                      }
                    );
                  function e() {
                    (H.current = !0),
                      setTimeout(() => {
                        H.current = !1;
                      });
                  }
                  function t(e) {
                    let t = e.relatedTarget;
                    queueMicrotask(() => {
                      let n = !(
                        k(x, t) ||
                        k(b, t) ||
                        k(t, b) ||
                        k(null == C ? void 0 : C.portalNode, t) ||
                        (null != t && t.hasAttribute(tz("focus-guard"))) ||
                        (T &&
                          (tX(T.nodesRef.current, m).find((e) => {
                            var n, r;
                            return (
                              k(
                                null == (n = e.context)
                                  ? void 0
                                  : n.elements.floating,
                                t,
                              ) ||
                              k(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.domReference,
                                t,
                              )
                            );
                          }) ||
                            (function (e, t) {
                              var n;
                              let r = [],
                                a =
                                  null == (n = e.find((e) => e.id === t))
                                    ? void 0
                                    : n.parentId;
                              for (; a; ) {
                                let t = e.find((e) => e.id === a);
                                (a = null == t ? void 0 : t.parentId),
                                  t && (r = r.concat(t));
                              }
                              return r;
                            })(T.nodesRef.current, m).find((e) => {
                              var n, r;
                              return (
                                (null == (n = e.context)
                                  ? void 0
                                  : n.elements.floating) === t ||
                                (null == (r = e.context)
                                  ? void 0
                                  : r.elements.domReference) === t
                              );
                            })))
                      );
                      t &&
                        n &&
                        !H.current &&
                        t !== B.current &&
                        ((q.current = !0), y(!1, e));
                    });
                  }
                }, [r, x, b, P, m, T, C, y, d]),
                i.useEffect(() => {
                  var e;
                  if (r) return;
                  let t = Array.from(
                    (null == C
                      ? void 0
                      : null == (e = C.portalNode)
                        ? void 0
                        : e.querySelectorAll("[" + tz("portal") + "]")) || [],
                  );
                  if (b) {
                    let e = [
                        b,
                        ...t,
                        L.current,
                        I.current,
                        R.current.includes("reference") || w ? x : null,
                      ].filter((e) => null != e),
                      n = u || w ? t8(e, S, !S) : t8(e);
                    return () => {
                      n();
                    };
                  }
                }, [r, x, b, u, R, C, w, S]),
                tm(() => {
                  if (r || !b) return;
                  let e = _(j(b));
                  queueMicrotask(() => {
                    let t = U(b),
                      n = O.current,
                      r = ("number" == typeof n ? t[n] : n.current) || b,
                      a = k(b, e);
                    E || a || !p || tv(r, { preventScroll: r === b });
                  });
                }, [r, p, b, E, U, O]),
                tm(() => {
                  if (r || !b) return;
                  let e = !1,
                    t = j(b),
                    n = _(t),
                    a = g.current;
                  function o(t) {
                    if (
                      ("escapeKey" === t.type &&
                        v.domReference.current &&
                        (B.current = v.domReference.current),
                      ["referencePress", "escapeKey"].includes(t.type))
                    )
                      return;
                    let n = t.data.returnFocus;
                    "object" == typeof n
                      ? ((q.current = !1), (e = n.preventScroll))
                      : (q.current = !n);
                  }
                  return (
                    (B.current = n),
                    h.on("dismiss", o),
                    () => {
                      h.off("dismiss", o);
                      let n = _(t);
                      (k(b, n) ||
                        (T &&
                          tX(T.nodesRef.current, m).some((e) => {
                            var t;
                            return k(
                              null == (t = e.context)
                                ? void 0
                                : t.elements.floating,
                              n,
                            );
                          })) ||
                        (a.openEvent &&
                          ["click", "mousedown"].includes(a.openEvent.type))) &&
                        v.domReference.current &&
                        (B.current = v.domReference.current),
                        A.current &&
                          f(B.current) &&
                          !q.current &&
                          tv(B.current, {
                            cancelPrevious: !1,
                            preventScroll: e,
                          });
                    }
                  );
                }, [r, b, A, g, v, h, T, m]),
                tm(() => {
                  if (!r && C)
                    return (
                      C.setFocusManagerState({
                        modal: P,
                        closeOnFocusOut: d,
                        open: p,
                        onOpenChange: y,
                        refs: v,
                      }),
                      () => {
                        C.setFocusManagerState(null);
                      }
                    );
                }, [r, C, P, p, y, v, d]),
                tm(() => {
                  if (r || !b || "function" != typeof MutationObserver || E)
                    return;
                  let e = () => {
                    let e = b.getAttribute("tabindex");
                    R.current.includes("floating") ||
                    (_(j(b)) !== v.domReference.current && 0 === F().length)
                      ? "0" !== e && b.setAttribute("tabindex", "0")
                      : "-1" !== e && b.setAttribute("tabindex", "-1");
                  };
                  e();
                  let t = new MutationObserver(e);
                  return (
                    t.observe(b, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    }),
                    () => {
                      t.disconnect();
                    }
                  );
                }, [r, b, v, R, F, E]);
              let Y = !r && S && (z || P);
              return i.createElement(
                i.Fragment,
                null,
                Y &&
                  i.createElement(nn, {
                    "data-type": "inside",
                    ref: null == C ? void 0 : C.beforeInsideRef,
                    onFocus: (e) => {
                      if (P) {
                        let e = U();
                        tv("reference" === a[0] ? e[0] : e[e.length - 1]);
                      } else if (
                        null != C &&
                        C.preserveTabOrder &&
                        C.portalNode
                      ) {
                        if (((q.current = !1), t9(e, C.portalNode))) {
                          let e = t6() || x;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = C.beforeOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
                !w && K("start"),
                n,
                K("end"),
                Y &&
                  i.createElement(nn, {
                    "data-type": "inside",
                    ref: null == C ? void 0 : C.afterInsideRef,
                    onFocus: (e) => {
                      if (P) tv(U()[0]);
                      else if (
                        null != C &&
                        C.preserveTabOrder &&
                        C.portalNode
                      ) {
                        if ((d && (q.current = !0), t9(e, C.portalNode))) {
                          let e = t7() || x;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = C.afterOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
              );
            }
            let nu = new Set(),
              nc = i.forwardRef(function (e, t) {
                let { lockScroll: n = !1, ...r } = e,
                  a = tC();
                return (
                  tm(() => {
                    if (!n) return;
                    nu.add(a);
                    let e = /iP(hone|ad|od)|iOS/.test(w()),
                      t = document.body.style,
                      r =
                        Math.round(
                          document.documentElement.getBoundingClientRect().left,
                        ) + document.documentElement.scrollLeft
                          ? "paddingLeft"
                          : "paddingRight",
                      o =
                        window.innerWidth -
                        document.documentElement.clientWidth,
                      i = t.left ? parseFloat(t.left) : window.pageXOffset,
                      l = t.top ? parseFloat(t.top) : window.pageYOffset;
                    if (((t.overflow = "hidden"), o && (t[r] = o + "px"), e)) {
                      var s, u;
                      let e =
                        (null == (s = window.visualViewport)
                          ? void 0
                          : s.offsetLeft) || 0;
                      Object.assign(t, {
                        position: "fixed",
                        top:
                          -(
                            l -
                            Math.floor(
                              (null == (u = window.visualViewport)
                                ? void 0
                                : u.offsetTop) || 0,
                            )
                          ) + "px",
                        left: -(i - Math.floor(e)) + "px",
                        right: "0",
                      });
                    }
                    return () => {
                      nu.delete(a),
                        0 === nu.size &&
                          (Object.assign(t, { overflow: "", [r]: "" }),
                          e &&
                            (Object.assign(t, {
                              position: "",
                              top: "",
                              left: "",
                              right: "",
                            }),
                            window.scrollTo(i, l)));
                    };
                  }, [a, n]),
                  i.createElement(
                    "div",
                    tR({ ref: t }, r, {
                      style: {
                        position: "fixed",
                        overflow: "auto",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...r.style,
                      },
                    }),
                  )
                );
              });
            function nd(e) {
              return f(e.target) && "BUTTON" === e.target.tagName;
            }
            function nf(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: a,
                  elements: { domReference: o },
                } = e,
                {
                  enabled: l = !0,
                  event: s = "click",
                  toggle: u = !0,
                  ignoreMouse: c = !1,
                  keyboardHandlers: d = !0,
                } = t,
                f = i.useRef(),
                p = i.useRef(!1);
              return i.useMemo(
                () =>
                  l
                    ? {
                        reference: {
                          onPointerDown(e) {
                            f.current = e.pointerType;
                          },
                          onMouseDown(e) {
                            0 !== e.button ||
                              (L(f.current, !0) && c) ||
                              "click" === s ||
                              (n &&
                              u &&
                              (!a.current.openEvent ||
                                "mousedown" === a.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : (e.preventDefault(), r(!0, e.nativeEvent)));
                          },
                          onClick(e) {
                            if ("mousedown" === s && f.current) {
                              f.current = void 0;
                              return;
                            }
                            (L(f.current, !0) && c) ||
                              (n &&
                              u &&
                              (!a.current.openEvent ||
                                "click" === a.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                          onKeyDown(e) {
                            (f.current = void 0),
                              e.defaultPrevented ||
                                !d ||
                                nd(e) ||
                                (" " !== e.key ||
                                  N(o) ||
                                  (e.preventDefault(), (p.current = !0)),
                                "Enter" === e.key &&
                                  (n && u
                                    ? r(!1, e.nativeEvent)
                                    : r(!0, e.nativeEvent)));
                          },
                          onKeyUp(e) {
                            !(e.defaultPrevented || !d || nd(e) || N(o)) &&
                              " " === e.key &&
                              p.current &&
                              ((p.current = !1),
                              n && u
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                        },
                      }
                    : {},
                [l, a, s, c, d, o, u, n, r],
              );
            }
            function np(e) {
              return null != e && null != e.clientX;
            }
            function nv(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  refs: r,
                  dataRef: a,
                  elements: { floating: o },
                } = e,
                {
                  enabled: l = !0,
                  axis: u = "both",
                  x: c = null,
                  y: d = null,
                } = t,
                f = i.useRef(!1),
                p = i.useRef(null),
                [v, m] = i.useState(),
                [y, h] = i.useState([]),
                g = tn((e, t) => {
                  if (!f.current) {
                    var n, o;
                    let i, l, s;
                    (!a.current.openEvent || np(a.current.openEvent)) &&
                      r.setPositionReference(
                        ((n = r.domReference),
                        (o = {
                          x: e,
                          y: t,
                          axis: u,
                          dataRef: a,
                          pointerType: v,
                        }),
                        (i = null),
                        (l = null),
                        (s = !1),
                        {
                          contextElement: n.current || void 0,
                          getBoundingClientRect() {
                            var e, t;
                            let r = (null == (e = n.current)
                                ? void 0
                                : e.getBoundingClientRect()) || {
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0,
                              },
                              a = "x" === o.axis || "both" === o.axis,
                              u = "y" === o.axis || "both" === o.axis,
                              c =
                                ["mouseenter", "mousemove"].includes(
                                  (null == (t = o.dataRef.current.openEvent)
                                    ? void 0
                                    : t.type) || "",
                                ) && "touch" !== o.pointerType,
                              d = r.width,
                              f = r.height,
                              p = r.x,
                              v = r.y;
                            return (
                              null == i && o.x && a && (i = r.x - o.x),
                              null == l && o.y && u && (l = r.y - o.y),
                              (p -= i || 0),
                              (v -= l || 0),
                              (d = 0),
                              (f = 0),
                              !s || c
                                ? ((d = "y" === o.axis ? r.width : 0),
                                  (f = "x" === o.axis ? r.height : 0),
                                  (p = a && null != o.x ? o.x : p),
                                  (v = u && null != o.y ? o.y : v))
                                : s &&
                                  !c &&
                                  ((f = "x" === o.axis ? r.height : f),
                                  (d = "y" === o.axis ? r.width : d)),
                              (s = !0),
                              {
                                width: d,
                                height: f,
                                x: p,
                                y: v,
                                top: v,
                                right: p + d,
                                bottom: v + f,
                                left: p,
                              }
                            );
                          },
                        }),
                      );
                  }
                }),
                x = tn((e) => {
                  null != c ||
                    null != d ||
                    (n ? p.current || h([]) : g(e.clientX, e.clientY));
                }),
                b = L(v) ? o : n,
                E = i.useCallback(() => {
                  if (!b || !l || null != c || null != d) return;
                  let e = s(r.floating.current);
                  function t(n) {
                    let a = M(n);
                    k(r.floating.current, a)
                      ? (e.removeEventListener("mousemove", t),
                        (p.current = null))
                      : g(n.clientX, n.clientY);
                  }
                  if (!a.current.openEvent || np(a.current.openEvent)) {
                    e.addEventListener("mousemove", t);
                    let n = () => {
                      e.removeEventListener("mousemove", t), (p.current = null);
                    };
                    return (p.current = n), n;
                  }
                  r.setPositionReference(r.domReference.current);
                }, [a, l, b, r, g, c, d]);
              return (
                i.useEffect(() => E(), [E, y]),
                i.useEffect(() => {
                  l && !o && (f.current = !1);
                }, [l, o]),
                i.useEffect(() => {
                  !l && n && (f.current = !0);
                }, [l, n]),
                tm(() => {
                  l && (null != c || null != d) && ((f.current = !1), g(c, d));
                }, [l, c, d, g]),
                i.useMemo(() => {
                  if (!l) return {};
                  function e(e) {
                    let { pointerType: t } = e;
                    m(t);
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove: x,
                      onMouseEnter: x,
                    },
                  };
                }, [l, x])
              );
            }
            let nm = {
                pointerdown: "onPointerDown",
                mousedown: "onMouseDown",
                click: "onClick",
              },
              ny = {
                pointerdown: "onPointerDownCapture",
                mousedown: "onMouseDownCapture",
                click: "onClickCapture",
              },
              nh = (e) => {
                var t, n;
                return {
                  escapeKey:
                    "boolean" == typeof e
                      ? e
                      : null != (t = null == e ? void 0 : e.escapeKey) && t,
                  outsidePress:
                    "boolean" == typeof e
                      ? e
                      : null == (n = null == e ? void 0 : e.outsidePress) || n,
                };
              };
            function ng(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  events: a,
                  nodeId: o,
                  elements: { reference: l, domReference: s, floating: u },
                  dataRef: c,
                } = e,
                {
                  enabled: p = !0,
                  escapeKey: v = !0,
                  outsidePress: m = !0,
                  outsidePressEvent: y = "pointerdown",
                  referencePress: x = !1,
                  referencePressEvent: _ = "pointerdown",
                  ancestorScroll: w = !1,
                  bubbles: P,
                  capture: R,
                } = t,
                A = tD(),
                T = null != tN(),
                C = tn("function" == typeof m ? m : () => !1),
                L = "function" == typeof m ? C : m,
                N = i.useRef(!1),
                D = i.useRef(!1),
                { escapeKey: q, outsidePress: B } = nh(P),
                { escapeKey: H, outsidePress: z } = nh(R),
                F = tn((e) => {
                  if (!n || !p || !v || "Escape" !== e.key) return;
                  let t = A ? tX(A.nodesRef.current, o) : [];
                  if (!q && (e.stopPropagation(), t.length > 0)) {
                    let e = !0;
                    if (
                      (t.forEach((t) => {
                        var n;
                        if (
                          null != (n = t.context) &&
                          n.open &&
                          !t.context.dataRef.current.__escapeKeyBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  a.emit("dismiss", {
                    type: "escapeKey",
                    data: { returnFocus: { preventScroll: !1 } },
                  }),
                    r(!1, "nativeEvent" in e ? e.nativeEvent : e);
                }),
                U = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    F(e),
                      null == (t = M(e)) || t.removeEventListener("keydown", n);
                  };
                  null == (t = M(e)) || t.addEventListener("keydown", n);
                }),
                K = tn((e) => {
                  let t = N.current;
                  N.current = !1;
                  let n = D.current;
                  if (
                    ((D.current = !1),
                    ("click" === y && n) ||
                      t ||
                      ("function" == typeof L && !L(e)))
                  )
                    return;
                  let i = M(e),
                    l = "[" + tz("inert") + "]",
                    c = j(u).querySelectorAll(l),
                    p = d(i) ? i : null;
                  for (; p && !h(p); ) {
                    let e = b(p);
                    if (e !== j(u).body && d(e)) p = e;
                    else break;
                  }
                  if (
                    c.length &&
                    d(i) &&
                    !i.matches("html,body") &&
                    !k(i, u) &&
                    Array.from(c).every((e) => !k(p, e))
                  )
                    return;
                  if (f(i) && u) {
                    let t = i.clientWidth > 0 && i.scrollWidth > i.clientWidth,
                      n = i.clientHeight > 0 && i.scrollHeight > i.clientHeight,
                      r = n && e.offsetX > i.clientWidth;
                    if (
                      (n &&
                        "rtl" === g(i).direction &&
                        (r = e.offsetX <= i.offsetWidth - i.clientWidth),
                      r || (t && e.offsetY > i.clientHeight))
                    )
                      return;
                  }
                  let v =
                    A &&
                    tX(A.nodesRef.current, o).some((t) => {
                      var n;
                      return I(
                        e,
                        null == (n = t.context) ? void 0 : n.elements.floating,
                      );
                    });
                  if (I(e, u) || I(e, s) || v) return;
                  let m = A ? tX(A.nodesRef.current, o) : [];
                  if (m.length > 0) {
                    let e = !0;
                    if (
                      (m.forEach((t) => {
                        var n;
                        if (
                          null != (n = t.context) &&
                          n.open &&
                          !t.context.dataRef.current.__outsidePressBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  a.emit("dismiss", {
                    type: "outsidePress",
                    data: {
                      returnFocus: T ? { preventScroll: !0 } : S(e) || O(e),
                    },
                  }),
                    r(!1, e);
                }),
                Y = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    K(e), null == (t = M(e)) || t.removeEventListener(y, n);
                  };
                  null == (t = M(e)) || t.addEventListener(y, n);
                });
              return (
                i.useEffect(() => {
                  if (!n || !p) return;
                  function e(e) {
                    r(!1, e);
                  }
                  (c.current.__escapeKeyBubbles = q),
                    (c.current.__outsidePressBubbles = B);
                  let t = j(u);
                  v && t.addEventListener("keydown", H ? U : F, H),
                    L && t.addEventListener(y, z ? Y : K, z);
                  let a = [];
                  return (
                    w &&
                      (d(s) && (a = E(s)),
                      d(u) && (a = a.concat(E(u))),
                      !d(l) &&
                        l &&
                        l.contextElement &&
                        (a = a.concat(E(l.contextElement)))),
                    (a = a.filter((e) => {
                      var n;
                      return (
                        e !==
                        (null == (n = t.defaultView)
                          ? void 0
                          : n.visualViewport)
                      );
                    })).forEach((t) => {
                      t.addEventListener("scroll", e, { passive: !0 });
                    }),
                    () => {
                      v && t.removeEventListener("keydown", H ? U : F, H),
                        L && t.removeEventListener(y, z ? Y : K, z),
                        a.forEach((t) => {
                          t.removeEventListener("scroll", e);
                        });
                    }
                  );
                }, [c, u, s, l, v, L, y, n, r, w, p, q, B, F, H, U, K, z, Y]),
                i.useEffect(() => {
                  N.current = !1;
                }, [L, y]),
                i.useMemo(
                  () =>
                    p
                      ? {
                          reference: {
                            onKeyDown: F,
                            [nm[_]]: (e) => {
                              x &&
                                (a.emit("dismiss", {
                                  type: "referencePress",
                                  data: { returnFocus: !1 },
                                }),
                                r(!1, e.nativeEvent));
                            },
                          },
                          floating: {
                            onKeyDown: F,
                            onMouseDown() {
                              D.current = !0;
                            },
                            onMouseUp() {
                              D.current = !0;
                            },
                            [ny[y]]: () => {
                              N.current = !0;
                            },
                          },
                        }
                      : {},
                  [p, a, x, y, _, r, F],
                )
              );
            }
            function nx(e) {
              var t;
              void 0 === e && (e = {});
              let { open: n = !1, onOpenChange: r, nodeId: a } = e,
                [o, l] = i.useState(null),
                s = (null == (t = e.elements) ? void 0 : t.reference) || o,
                u = (function (e) {
                  void 0 === e && (e = {});
                  let {
                      placement: t = "bottom",
                      strategy: n = "absolute",
                      middleware: r = [],
                      platform: a,
                      elements: { reference: o, floating: l } = {},
                      transform: s = !0,
                      whileElementsMounted: u,
                      open: c,
                    } = e,
                    [d, f] = i.useState({
                      x: 0,
                      y: 0,
                      strategy: n,
                      placement: t,
                      middlewareData: {},
                      isPositioned: !1,
                    }),
                    [p, v] = i.useState(r);
                  eD(p, r) || v(r);
                  let [m, y] = i.useState(null),
                    [h, g] = i.useState(null),
                    x = i.useCallback(
                      (e) => {
                        e != k.current && ((k.current = e), y(e));
                      },
                      [y],
                    ),
                    b = i.useCallback(
                      (e) => {
                        e !== w.current && ((w.current = e), g(e));
                      },
                      [g],
                    ),
                    E = o || m,
                    _ = l || h,
                    k = i.useRef(null),
                    w = i.useRef(null),
                    P = i.useRef(d),
                    S = eH(u),
                    R = eH(a),
                    O = i.useCallback(() => {
                      if (!k.current || !w.current) return;
                      let e = { placement: t, strategy: n, middleware: p };
                      R.current && (e.platform = R.current),
                        ej(k.current, w.current, e).then((e) => {
                          let t = { ...e, isPositioned: !0 };
                          A.current &&
                            !eD(P.current, t) &&
                            ((P.current = t),
                            eI.flushSync(() => {
                              f(t);
                            }));
                        });
                    }, [p, t, n, R]);
                  eN(() => {
                    !1 === c &&
                      P.current.isPositioned &&
                      ((P.current.isPositioned = !1),
                      f((e) => ({ ...e, isPositioned: !1 })));
                  }, [c]);
                  let A = i.useRef(!1);
                  eN(
                    () => (
                      (A.current = !0),
                      () => {
                        A.current = !1;
                      }
                    ),
                    [],
                  ),
                    eN(() => {
                      if (
                        (E && (k.current = E), _ && (w.current = _), E && _)
                      ) {
                        if (S.current) return S.current(E, _, O);
                        O();
                      }
                    }, [E, _, O, S]);
                  let T = i.useMemo(
                      () => ({
                        reference: k,
                        floating: w,
                        setReference: x,
                        setFloating: b,
                      }),
                      [x, b],
                    ),
                    C = i.useMemo(
                      () => ({ reference: E, floating: _ }),
                      [E, _],
                    ),
                    L = i.useMemo(() => {
                      let e = { position: n, left: 0, top: 0 };
                      if (!C.floating) return e;
                      let t = eB(C.floating, d.x),
                        r = eB(C.floating, d.y);
                      return s
                        ? {
                            ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...(eq(C.floating) >= 1.5 && {
                              willChange: "transform",
                            }),
                          }
                        : { position: n, left: t, top: r };
                    }, [n, s, C.floating, d.x, d.y]);
                  return i.useMemo(
                    () => ({
                      ...d,
                      update: O,
                      refs: T,
                      elements: C,
                      floatingStyles: L,
                    }),
                    [d, O, T, C, L],
                  );
                })(e),
                c = tD(),
                f = tn((e, t) => {
                  e && (v.current.openEvent = t), null == r || r(e, t);
                }),
                p = i.useRef(null),
                v = i.useRef({}),
                m = i.useState(() => tj())[0],
                y = tC(),
                h = i.useCallback(
                  (e) => {
                    let t = d(e)
                      ? {
                          getBoundingClientRect: () =>
                            e.getBoundingClientRect(),
                          contextElement: e,
                        }
                      : e;
                    u.refs.setReference(t);
                  },
                  [u.refs],
                ),
                g = i.useCallback(
                  (e) => {
                    (d(e) || null === e) && ((p.current = e), l(e)),
                      (d(u.refs.reference.current) ||
                        null === u.refs.reference.current ||
                        (null !== e && !d(e))) &&
                        u.refs.setReference(e);
                  },
                  [u.refs],
                ),
                x = i.useMemo(
                  () => ({
                    ...u.refs,
                    setReference: g,
                    setPositionReference: h,
                    domReference: p,
                  }),
                  [u.refs, g, h],
                ),
                b = i.useMemo(
                  () => ({ ...u.elements, domReference: s }),
                  [u.elements, s],
                ),
                E = i.useMemo(
                  () => ({
                    ...u,
                    refs: x,
                    elements: b,
                    dataRef: v,
                    nodeId: a,
                    floatingId: y,
                    events: m,
                    open: n,
                    onOpenChange: f,
                  }),
                  [u, a, y, m, n, f, x, b],
                );
              return (
                tm(() => {
                  let e =
                    null == c
                      ? void 0
                      : c.nodesRef.current.find((e) => e.id === a);
                  e && (e.context = E);
                }),
                i.useMemo(
                  () => ({ ...u, context: E, refs: x, elements: b }),
                  [u, x, b, E],
                )
              );
            }
            function nb(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  events: a,
                  refs: o,
                  elements: { floating: l, domReference: u },
                } = e,
                { enabled: c = !0, visibleOnly: p = !0 } = t,
                v = i.useRef(!1),
                m = i.useRef(),
                y = i.useRef(!0);
              return (
                i.useEffect(() => {
                  if (!c) return;
                  let e = s(u);
                  function t() {
                    !n && f(u) && u === _(j(u)) && (v.current = !0);
                  }
                  function r() {
                    y.current = !0;
                  }
                  return (
                    e.addEventListener("blur", t),
                    e.addEventListener("keydown", r, !0),
                    () => {
                      e.removeEventListener("blur", t),
                        e.removeEventListener("keydown", r, !0);
                    }
                  );
                }, [l, u, n, c]),
                i.useEffect(() => {
                  if (c)
                    return (
                      a.on("dismiss", e),
                      () => {
                        a.off("dismiss", e);
                      }
                    );
                  function e(e) {
                    ("referencePress" === e.type || "escapeKey" === e.type) &&
                      (v.current = !0);
                  }
                }, [a, c]),
                i.useEffect(
                  () => () => {
                    clearTimeout(m.current);
                  },
                  [],
                ),
                i.useMemo(
                  () =>
                    c
                      ? {
                          reference: {
                            onPointerDown(e) {
                              O(e.nativeEvent) || (y.current = !1);
                            },
                            onMouseLeave() {
                              v.current = !1;
                            },
                            onFocus(e) {
                              if (v.current) return;
                              let t = M(e.nativeEvent);
                              if (p && d(t))
                                try {
                                  if (A() && C()) throw Error();
                                  if (!t.matches(":focus-visible")) return;
                                } catch (e) {
                                  if (!y.current && !N(t)) return;
                                }
                              r(!0, e.nativeEvent);
                            },
                            onBlur(e) {
                              v.current = !1;
                              let t = e.relatedTarget,
                                n =
                                  d(t) &&
                                  t.hasAttribute(tz("focus-guard")) &&
                                  "outside" === t.getAttribute("data-type");
                              m.current = window.setTimeout(() => {
                                let a = _(u ? u.ownerDocument : document);
                                if (t || a !== u) {
                                  if (k(o.floating.current, t) || k(u, t) || n)
                                    return;
                                  r(!1, e.nativeEvent);
                                }
                              });
                            },
                          },
                        }
                      : {},
                  [c, p, u, o, r],
                )
              );
            }
            function nE(e, t, n) {
              let r = new Map();
              return {
                ...("floating" === n && { tabIndex: -1 }),
                ...e,
                ...t
                  .map((e) => (e ? e[n] : null))
                  .concat(e)
                  .reduce(
                    (e, t) => (
                      t &&
                        Object.entries(t).forEach((t) => {
                          let [n, a] = t;
                          if (0 === n.indexOf("on")) {
                            if (
                              (r.has(n) || r.set(n, []), "function" == typeof a)
                            ) {
                              var o;
                              null == (o = r.get(n)) || o.push(a),
                                (e[n] = function () {
                                  for (
                                    var e,
                                      t = arguments.length,
                                      a = Array(t),
                                      o = 0;
                                    o < t;
                                    o++
                                  )
                                    a[o] = arguments[o];
                                  return null == (e = r.get(n))
                                    ? void 0
                                    : e
                                        .map((e) => e(...a))
                                        .find((e) => void 0 !== e);
                                });
                            }
                          } else e[n] = a;
                        }),
                      e
                    ),
                    {},
                  ),
              };
            }
            function n_(e) {
              void 0 === e && (e = []);
              let t = e,
                n = i.useCallback((t) => nE(t, e, "reference"), t),
                r = i.useCallback((t) => nE(t, e, "floating"), t),
                a = i.useCallback(
                  (t) => nE(t, e, "item"),
                  e.map((e) => (null == e ? void 0 : e.item)),
                );
              return i.useMemo(
                () => ({
                  getReferenceProps: n,
                  getFloatingProps: r,
                  getItemProps: a,
                }),
                [n, r, a],
              );
            }
            let nk = !1;
            function nw(e, t, n) {
              switch (e) {
                case "vertical":
                  return t;
                case "horizontal":
                  return n;
                default:
                  return t || n;
              }
            }
            function nP(e, t) {
              return nw(t, e === tr || e === ta, e === to || e === ti);
            }
            function nS(e, t, n) {
              return (
                nw(t, e === ta, n ? e === to : e === ti) ||
                "Enter" === e ||
                " " == e ||
                "" === e
              );
            }
            function nR(e, t, n) {
              return nw(t, n ? e === ti : e === to, e === tr);
            }
            function nO(e, t) {
              let {
                  open: n,
                  onOpenChange: r,
                  refs: a,
                  elements: { domReference: o, floating: l },
                } = e,
                {
                  listRef: s,
                  activeIndex: u,
                  onNavigate: c = () => {},
                  enabled: d = !0,
                  selectedIndex: p = null,
                  allowEscape: v = !1,
                  loop: m = !1,
                  nested: y = !1,
                  rtl: h = !1,
                  virtual: g = !1,
                  focusItemOnOpen: x = "auto",
                  focusItemOnHover: b = !0,
                  openOnArrowKeyDown: E = !0,
                  disabledIndices: w,
                  orientation: P = "vertical",
                  cols: R = 1,
                  scrollItemIntoView: T = !0,
                  virtualItemRef: L,
                } = t,
                I = tN(),
                M = tD(),
                N = tn(c),
                q = i.useRef(x),
                B = i.useRef(null != p ? p : -1),
                H = i.useRef(null),
                z = i.useRef(!0),
                F = i.useRef(N),
                U = i.useRef(!!l),
                K = i.useRef(!1),
                Y = i.useRef(!1),
                V = tF(w),
                G = tF(n),
                W = tF(T),
                [Z, X] = i.useState(),
                [Q, J] = i.useState(),
                $ = tn(function (e, t, n) {
                  void 0 === n && (n = !1);
                  let r = e.current[t.current];
                  r &&
                    (g
                      ? (X(r.id),
                        null == M || M.events.emit("virtualfocus", r),
                        L && (L.current = r))
                      : tv(r, {
                          preventScroll: !0,
                          sync: !!(C() && A()) && (nk || K.current),
                        }),
                    requestAnimationFrame(() => {
                      let e = W.current;
                      e &&
                        r &&
                        (n || !z.current) &&
                        (null == r.scrollIntoView ||
                          r.scrollIntoView(
                            "boolean" == typeof e
                              ? { block: "nearest", inline: "nearest" }
                              : e,
                          ));
                    }));
                });
              tm(() => {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (nk = !0), !1;
                  },
                });
              }, []),
                tm(() => {
                  d &&
                    (n && l
                      ? q.current && null != p && ((Y.current = !0), N(p))
                      : U.current && ((B.current = -1), F.current(null)));
                }, [d, n, l, p, N]),
                tm(() => {
                  if (d && n && l) {
                    if (null == u) {
                      if (
                        ((K.current = !1),
                        null == p &&
                          (U.current && ((B.current = -1), $(s, B)),
                          !U.current &&
                            q.current &&
                            (null != H.current ||
                              (!0 === q.current && null == H.current))))
                      ) {
                        let e = 0,
                          t = () => {
                            null == s.current[0]
                              ? (e < 2 &&
                                  (e ? requestAnimationFrame : queueMicrotask)(
                                    t,
                                  ),
                                e++)
                              : ((B.current =
                                  null == H.current || nS(H.current, P, h) || y
                                    ? tu(s, V.current)
                                    : tc(s, V.current)),
                                (H.current = null),
                                N(B.current));
                          };
                        t();
                      }
                    } else
                      ts(s, u) ||
                        ((B.current = u), $(s, B, Y.current), (Y.current = !1));
                  }
                }, [d, n, l, u, p, y, s, P, h, N, $, V]),
                tm(() => {
                  var e, t;
                  if (!d || l || !M || g || !U.current) return;
                  let n = M.nodesRef.current,
                    r =
                      null == (e = n.find((e) => e.id === I))
                        ? void 0
                        : null == (t = e.context)
                          ? void 0
                          : t.elements.floating,
                    a = _(j(l)),
                    o = n.some(
                      (e) => e.context && k(e.context.elements.floating, a),
                    );
                  r && !o && z.current && r.focus({ preventScroll: !0 });
                }, [d, l, M, I, g]),
                tm(() => {
                  if (d && M && g && !I)
                    return (
                      M.events.on("virtualfocus", e),
                      () => {
                        M.events.off("virtualfocus", e);
                      }
                    );
                  function e(e) {
                    J(e.id), L && (L.current = e);
                  }
                }, [d, M, g, I, L]),
                tm(() => {
                  (F.current = N), (U.current = !!l);
                }),
                tm(() => {
                  n || (H.current = null);
                }, [n]);
              let ee = null != u,
                et = i.useMemo(() => {
                  function e(e) {
                    if (!n) return;
                    let t = s.current.indexOf(e);
                    -1 !== t && N(t);
                  }
                  return {
                    onFocus(t) {
                      let { currentTarget: n } = t;
                      e(n);
                    },
                    onClick: (e) => {
                      let { currentTarget: t } = e;
                      return t.focus({ preventScroll: !0 });
                    },
                    ...(b && {
                      onMouseMove(t) {
                        let { currentTarget: n } = t;
                        e(n);
                      },
                      onPointerLeave(e) {
                        let { pointerType: t } = e;
                        z.current &&
                          "touch" !== t &&
                          ((B.current = -1),
                          $(s, B),
                          N(null),
                          g || tv(a.floating.current, { preventScroll: !0 }));
                      },
                    }),
                  };
                }, [n, a, $, b, s, N, g]);
              return i.useMemo(() => {
                if (!d) return {};
                let e = V.current;
                function t(t) {
                  if (
                    ((z.current = !1),
                    (K.current = !0),
                    !G.current && t.currentTarget === a.floating.current)
                  )
                    return;
                  if (y && nR(t.key, P, h)) {
                    D(t), r(!1, t.nativeEvent), f(o) && !g && o.focus();
                    return;
                  }
                  let i = B.current,
                    l = tu(s, e),
                    u = tc(s, e);
                  if (
                    ("Home" === t.key && (D(t), (B.current = l), N(B.current)),
                    "End" === t.key && (D(t), (B.current = u), N(B.current)),
                    (!(R > 1) ||
                      ((B.current = tf(s, {
                        event: t,
                        orientation: P,
                        loop: m,
                        cols: R,
                        disabledIndices: e,
                        minIndex: l,
                        maxIndex: u,
                        prevIndex: B.current,
                        stopEvent: !0,
                      })),
                      N(B.current),
                      "both" !== P)) &&
                      nP(t.key, P))
                  ) {
                    if (
                      (D(t),
                      n &&
                        !g &&
                        _(t.currentTarget.ownerDocument) === t.currentTarget)
                    ) {
                      (B.current = nS(t.key, P, h) ? l : u), N(B.current);
                      return;
                    }
                    nS(t.key, P, h)
                      ? m
                        ? (B.current =
                            i >= u
                              ? v && i !== s.current.length
                                ? -1
                                : l
                              : td(s, { startingIndex: i, disabledIndices: e }))
                        : (B.current = Math.min(
                            u,
                            td(s, { startingIndex: i, disabledIndices: e }),
                          ))
                      : m
                        ? (B.current =
                            i <= l
                              ? v && -1 !== i
                                ? s.current.length
                                : u
                              : td(s, {
                                  startingIndex: i,
                                  decrement: !0,
                                  disabledIndices: e,
                                }))
                        : (B.current = Math.max(
                            l,
                            td(s, {
                              startingIndex: i,
                              decrement: !0,
                              disabledIndices: e,
                            }),
                          )),
                      ts(s, B.current) ? N(null) : N(B.current);
                  }
                }
                function i(e) {
                  "auto" === x && S(e.nativeEvent) && (q.current = !0);
                }
                let l = g && n && ee && { "aria-activedescendant": Q || Z },
                  u = s.current.find((e) => (null == e ? void 0 : e.id) === Z);
                return {
                  reference: {
                    ...l,
                    onKeyDown(a) {
                      var o, i, l, c, d, f;
                      z.current = !1;
                      let v = 0 === a.key.indexOf("Arrow"),
                        m =
                          ((o = a.key),
                          nw(P, h ? o === to : o === ti, o === ta)),
                        x = nR(a.key, P, h),
                        b = nP(a.key, P),
                        _ =
                          (y ? m : b) ||
                          "Enter" === a.key ||
                          "" === a.key.trim();
                      if (g && n) {
                        let e, n;
                        let r =
                            null == M
                              ? void 0
                              : M.nodesRef.current.find(
                                  (e) => null == e.parentId,
                                ),
                          o =
                            M && r
                              ? ((i = M.nodesRef.current),
                                (l = r.id),
                                (n = -1),
                                !(function t(r, a) {
                                  a > n && ((e = r), (n = a)),
                                    tX(i, r).forEach((e) => {
                                      t(e.id, a + 1);
                                    });
                                })(l, 0),
                                i.find((t) => t.id === e))
                              : null;
                        if (v && o && L) {
                          let e = new KeyboardEvent("keydown", {
                            key: a.key,
                            bubbles: !0,
                          });
                          if (m || x) {
                            let t =
                                (null == (c = o.context)
                                  ? void 0
                                  : c.elements.domReference) ===
                                a.currentTarget,
                              n =
                                x && !t
                                  ? null == (d = o.context)
                                    ? void 0
                                    : d.elements.domReference
                                  : m
                                    ? u
                                    : null;
                            n && (D(a), n.dispatchEvent(e), J(void 0));
                          }
                          if (
                            b &&
                            o.context &&
                            o.context.open &&
                            o.parentId &&
                            a.currentTarget !== o.context.elements.domReference
                          ) {
                            D(a),
                              null == (f = o.context.elements.domReference) ||
                                f.dispatchEvent(e);
                            return;
                          }
                        }
                        return t(a);
                      }
                      if (n || E || !v) {
                        if ((_ && (H.current = y && b ? null : a.key), y)) {
                          m &&
                            (D(a),
                            n
                              ? ((B.current = tu(s, e)), N(B.current))
                              : r(!0, a.nativeEvent));
                          return;
                        }
                        b &&
                          (null != p && (B.current = p),
                          D(a),
                          !n && E ? r(!0, a.nativeEvent) : t(a),
                          n && N(B.current));
                      }
                    },
                    onFocus() {
                      n && N(null);
                    },
                    onPointerDown: function (e) {
                      (q.current = x),
                        "auto" === x && O(e.nativeEvent) && (q.current = !0);
                    },
                    onMouseDown: i,
                    onClick: i,
                  },
                  floating: {
                    "aria-orientation": "both" === P ? void 0 : P,
                    ...l,
                    onKeyDown: t,
                    onPointerMove() {
                      z.current = !0;
                    },
                  },
                  item: et,
                };
              }, [
                o,
                a,
                Z,
                Q,
                V,
                G,
                s,
                d,
                P,
                h,
                g,
                n,
                ee,
                y,
                p,
                E,
                v,
                R,
                m,
                x,
                N,
                r,
                et,
                M,
                L,
              ]);
            }
            function nA(e, t) {
              void 0 === t && (t = {});
              let { open: n, floatingId: r } = e,
                { enabled: a = !0, role: o = "dialog" } = t,
                l = tC();
              return i.useMemo(() => {
                let e = { id: r, role: o };
                return a
                  ? "tooltip" === o
                    ? {
                        reference: { "aria-describedby": n ? r : void 0 },
                        floating: e,
                      }
                    : {
                        reference: {
                          "aria-expanded": n ? "true" : "false",
                          "aria-haspopup": "alertdialog" === o ? "dialog" : o,
                          "aria-controls": n ? r : void 0,
                          ...("listbox" === o && { role: "combobox" }),
                          ...("menu" === o && { id: l }),
                        },
                        floating: {
                          ...e,
                          ...("menu" === o && { "aria-labelledby": l }),
                        },
                      }
                  : {};
              }, [a, o, n, r, l]);
            }
            let nT = (e) =>
              e.replace(
                /[A-Z]+(?![a-z])|[A-Z]/g,
                (e, t) => (t ? "-" : "") + e.toLowerCase(),
              );
            function nC(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function nL(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  elements: { floating: r },
                } = e,
                { duration: a = 250 } = t,
                o = ("number" == typeof a ? a : a.close) || 0,
                [l, s] = i.useState(!1),
                [u, c] = i.useState("unmounted"),
                d = (function (e, t) {
                  let [n, r] = i.useState(e);
                  return (
                    e && !n && r(!0),
                    i.useEffect(() => {
                      if (!e) {
                        let e = setTimeout(() => r(!1), t);
                        return () => clearTimeout(e);
                      }
                    }, [e, t]),
                    n
                  );
                })(n, o);
              return (
                tm(() => {
                  l && !d && c("unmounted");
                }, [l, d]),
                tm(() => {
                  if (r) {
                    if (n) {
                      c("initial");
                      let e = requestAnimationFrame(() => {
                        c("open");
                      });
                      return () => {
                        cancelAnimationFrame(e);
                      };
                    }
                    s(!0), c("close");
                  }
                }, [n, r]),
                { isMounted: d, status: u }
              );
            }
            function nj(e, t) {
              void 0 === t && (t = {});
              let {
                  initial: n = { opacity: 0 },
                  open: r,
                  close: a,
                  common: o,
                  duration: l = 250,
                } = t,
                s = e.placement,
                u = s.split("-")[0],
                c = i.useMemo(() => ({ side: u, placement: s }), [u, s]),
                d = "number" == typeof l,
                f = (d ? l : l.open) || 0,
                p = (d ? l : l.close) || 0,
                [v, m] = i.useState(() => ({ ...nC(o, c), ...nC(n, c) })),
                { isMounted: y, status: h } = nL(e, { duration: l }),
                g = tF(n),
                x = tF(r),
                b = tF(a),
                E = tF(o);
              return (
                tm(() => {
                  let e = nC(g.current, c),
                    t = nC(b.current, c),
                    n = nC(E.current, c),
                    r =
                      nC(x.current, c) ||
                      Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
                  if (
                    ("initial" === h &&
                      m((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...n,
                        ...e,
                      })),
                    "open" === h &&
                      m({
                        transitionProperty: Object.keys(r).map(nT).join(","),
                        transitionDuration: f + "ms",
                        ...n,
                        ...r,
                      }),
                    "close" === h)
                  ) {
                    let r = t || e;
                    m({
                      transitionProperty: Object.keys(r).map(nT).join(","),
                      transitionDuration: p + "ms",
                      ...n,
                      ...r,
                    });
                  }
                }, [p, b, g, x, E, f, h, c]),
                { isMounted: y, styles: v }
              );
            }
            function nI(e, t) {
              var n;
              let { open: r, dataRef: a } = e,
                {
                  listRef: o,
                  activeIndex: l,
                  onMatch: s,
                  onTypingChange: u,
                  enabled: c = !0,
                  findMatch: d = null,
                  resetMs: f = 750,
                  ignoreKeys: p = [],
                  selectedIndex: v = null,
                } = t,
                m = i.useRef(),
                y = i.useRef(""),
                h = i.useRef(null != (n = null != v ? v : l) ? n : -1),
                g = i.useRef(null),
                x = tn(s),
                b = tn(u),
                E = tF(d),
                _ = tF(p);
              return (
                tm(() => {
                  r &&
                    (clearTimeout(m.current),
                    (g.current = null),
                    (y.current = ""));
                }, [r]),
                tm(() => {
                  if (r && "" === y.current) {
                    var e;
                    h.current = null != (e = null != v ? v : l) ? e : -1;
                  }
                }, [r, v, l]),
                i.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    e
                      ? a.current.typing || ((a.current.typing = e), b(e))
                      : a.current.typing && ((a.current.typing = e), b(e));
                  }
                  function t(e, t, n) {
                    let r = E.current
                      ? E.current(t, n)
                      : t.find(
                          (e) =>
                            (null == e
                              ? void 0
                              : e
                                  .toLocaleLowerCase()
                                  .indexOf(n.toLocaleLowerCase())) === 0,
                        );
                    return r ? e.indexOf(r) : -1;
                  }
                  function n(n) {
                    let a = o.current;
                    if (
                      (y.current.length > 0 &&
                        " " !== y.current[0] &&
                        (-1 === t(a, a, y.current)
                          ? e(!1)
                          : " " === n.key && D(n)),
                      null == a ||
                        _.current.includes(n.key) ||
                        1 !== n.key.length ||
                        n.ctrlKey ||
                        n.metaKey ||
                        n.altKey)
                    )
                      return;
                    r && " " !== n.key && (D(n), e(!0)),
                      a.every((e) => {
                        var t, n;
                        return (
                          !e ||
                          (null == (t = e[0])
                            ? void 0
                            : t.toLocaleLowerCase()) !==
                            (null == (n = e[1])
                              ? void 0
                              : n.toLocaleLowerCase())
                        );
                      }) &&
                        y.current === n.key &&
                        ((y.current = ""), (h.current = g.current)),
                      (y.current += n.key),
                      clearTimeout(m.current),
                      (m.current = setTimeout(() => {
                        (y.current = ""), (h.current = g.current), e(!1);
                      }, f));
                    let i = h.current,
                      l = t(
                        a,
                        [...a.slice((i || 0) + 1), ...a.slice(0, (i || 0) + 1)],
                        y.current,
                      );
                    -1 !== l
                      ? (x(l), (g.current = l))
                      : " " !== n.key && ((y.current = ""), e(!1));
                  }
                  return {
                    reference: { onKeyDown: n },
                    floating: {
                      onKeyDown: n,
                      onKeyUp(t) {
                        " " === t.key && e(!1);
                      },
                    },
                  };
                }, [c, r, a, o, f, _, E, x, b])
              );
            }
            function nM(e, t) {
              return {
                ...e,
                rects: {
                  ...e.rects,
                  floating: { ...e.rects.floating, height: t },
                },
              };
            }
            let nN = (e) => ({
              name: "inner",
              options: e,
              async fn(t) {
                let {
                    listRef: n,
                    overflowRef: r,
                    onFallbackChange: a,
                    offset: o = 0,
                    index: i = 0,
                    minItemsVisible: l = 4,
                    referenceOverflowThreshold: s = 0,
                    scrollRef: u,
                    ...c
                  } = e,
                  {
                    rects: d,
                    elements: { floating: f },
                  } = t,
                  p = n.current[i];
                if (!p) return {};
                let v = {
                    ...t,
                    ...(await ey(
                      -p.offsetTop -
                        f.clientTop -
                        d.reference.height / 2 -
                        p.offsetHeight / 2 -
                        o,
                    ).fn(t)),
                  },
                  m = (null == u ? void 0 : u.current) || f,
                  y = await ei(nM(v, m.scrollHeight), c),
                  h = await ei(v, { ...c, elementContext: "reference" }),
                  g = Math.max(0, y.top),
                  x = v.y + g,
                  b = Math.max(0, m.scrollHeight - g - Math.max(0, y.bottom));
                return (
                  (m.style.maxHeight = b + "px"),
                  (m.scrollTop = g),
                  a &&
                    (m.offsetHeight <
                      p.offsetHeight * Math.min(l, n.current.length - 1) - 1 ||
                    h.top >= -s ||
                    h.bottom >= -s
                      ? (0, eI.flushSync)(() => a(!0))
                      : (0, eI.flushSync)(() => a(!1))),
                  r &&
                    (r.current = await ei(
                      nM({ ...v, y: x }, m.offsetHeight),
                      c,
                    )),
                  { y: x }
                );
              },
            });
            function nD(e, t) {
              let { open: n, elements: r } = e,
                {
                  enabled: a = !0,
                  overflowRef: o,
                  scrollRef: l,
                  onChange: s,
                } = t,
                u = tn(s),
                c = i.useRef(!1),
                d = i.useRef(null),
                f = i.useRef(null);
              return (
                i.useEffect(() => {
                  if (!a) return;
                  function e(e) {
                    if (e.ctrlKey || !t || null == o.current) return;
                    let n = e.deltaY,
                      r = o.current.top >= -0.5,
                      a = o.current.bottom >= -0.5,
                      i = t.scrollHeight - t.clientHeight,
                      l = n < 0 ? -1 : 1,
                      s = n < 0 ? "max" : "min";
                    !(t.scrollHeight <= t.clientHeight) &&
                      ((!r && n > 0) || (!a && n < 0)
                        ? (e.preventDefault(),
                          (0, eI.flushSync)(() => {
                            u((e) => e + Math[s](n, i * l));
                          }))
                        : /firefox/i.test(P()) && (t.scrollTop += n));
                  }
                  let t = (null == l ? void 0 : l.current) || r.floating;
                  if (n && t)
                    return (
                      t.addEventListener("wheel", e),
                      requestAnimationFrame(() => {
                        (d.current = t.scrollTop),
                          null != o.current && (f.current = { ...o.current });
                      }),
                      () => {
                        (d.current = null),
                          (f.current = null),
                          t.removeEventListener("wheel", e);
                      }
                    );
                }, [a, n, r.floating, o, l, u]),
                i.useMemo(
                  () =>
                    a
                      ? {
                          floating: {
                            onKeyDown() {
                              c.current = !0;
                            },
                            onWheel() {
                              c.current = !1;
                            },
                            onPointerMove() {
                              c.current = !1;
                            },
                            onScroll() {
                              let e =
                                (null == l ? void 0 : l.current) || r.floating;
                              if (o.current && e && c.current) {
                                if (null !== d.current) {
                                  let t = e.scrollTop - d.current;
                                  ((o.current.bottom < -0.5 && t < -1) ||
                                    (o.current.top < -0.5 && t > 1)) &&
                                    (0, eI.flushSync)(() => u((e) => e + t));
                                }
                                requestAnimationFrame(() => {
                                  d.current = e.scrollTop;
                                });
                              }
                            },
                          },
                        }
                      : {},
                  [a, o, r.floating, l, u],
                )
              );
            }
            function nq(e, t) {
              let [n, r] = e,
                a = !1,
                o = t.length;
              for (let e = 0, i = o - 1; e < o; i = e++) {
                let [o, l] = t[e] || [0, 0],
                  [s, u] = t[i] || [0, 0];
                l >= r != u >= r &&
                  n <= ((s - o) * (r - l)) / (u - l) + o &&
                  (a = !a);
              }
              return a;
            }
            function nB(e) {
              let t;
              void 0 === e && (e = {});
              let {
                  buffer: n = 0.5,
                  blockPointerEvents: r = !1,
                  requireIntent: a = !0,
                } = e,
                o = !1,
                i = null,
                l = null,
                s = performance.now(),
                u = (e) => {
                  let {
                    x: r,
                    y: u,
                    placement: c,
                    elements: f,
                    onClose: p,
                    nodeId: v,
                    tree: m,
                  } = e;
                  return function (e) {
                    function y() {
                      clearTimeout(t), p();
                    }
                    if (
                      (clearTimeout(t),
                      !f.domReference ||
                        !f.floating ||
                        null == c ||
                        null == r ||
                        null == u)
                    )
                      return;
                    let { clientX: h, clientY: g } = e,
                      x = [h, g],
                      b = M(e),
                      E = "mouseleave" === e.type,
                      _ = k(f.floating, b),
                      w = k(f.domReference, b),
                      P = f.domReference.getBoundingClientRect(),
                      S = f.floating.getBoundingClientRect(),
                      R = c.split("-")[0],
                      O = r > S.right - S.width / 2,
                      A = u > S.bottom - S.height / 2,
                      T =
                        x[0] >= P.x &&
                        x[0] <= P.x + P.width &&
                        x[1] >= P.y &&
                        x[1] <= P.y + P.height,
                      C = S.width > P.width,
                      L = S.height > P.height,
                      j = (C ? P : S).left,
                      I = (C ? P : S).right,
                      N = (L ? P : S).top,
                      D = (L ? P : S).bottom;
                    if (_ && ((o = !0), !E)) return;
                    if ((w && (o = !1), w && !E)) {
                      o = !0;
                      return;
                    }
                    if (
                      (E &&
                        d(e.relatedTarget) &&
                        k(f.floating, e.relatedTarget)) ||
                      (m &&
                        tX(m.nodesRef.current, v).some((e) => {
                          let { context: t } = e;
                          return null == t ? void 0 : t.open;
                        }))
                    )
                      return;
                    if (
                      ("top" === R && u >= P.bottom - 1) ||
                      ("bottom" === R && u <= P.top + 1) ||
                      ("left" === R && r >= P.right - 1) ||
                      ("right" === R && r <= P.left + 1)
                    )
                      return y();
                    let q = [];
                    switch (R) {
                      case "top":
                        q = [
                          [j, P.top + 1],
                          [j, S.bottom - 1],
                          [I, S.bottom - 1],
                          [I, P.top + 1],
                        ];
                        break;
                      case "bottom":
                        q = [
                          [j, S.top + 1],
                          [j, P.bottom - 1],
                          [I, P.bottom - 1],
                          [I, S.top + 1],
                        ];
                        break;
                      case "left":
                        q = [
                          [S.right - 1, D],
                          [S.right - 1, N],
                          [P.left + 1, N],
                          [P.left + 1, D],
                        ];
                        break;
                      case "right":
                        q = [
                          [P.right - 1, D],
                          [P.right - 1, N],
                          [S.left + 1, N],
                          [S.left + 1, D],
                        ];
                    }
                    if (!nq([h, g], q)) {
                      if (o && !T) return y();
                      if (!E && a) {
                        let t = (function (e, t) {
                          let n = performance.now(),
                            r = n - s;
                          if (null === i || null === l || 0 === r)
                            return (i = e), (l = t), (s = n), null;
                          let a = e - i,
                            o = t - l;
                          return (
                            (i = e),
                            (l = t),
                            (s = n),
                            Math.sqrt(a * a + o * o) / r
                          );
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return y();
                      }
                      nq(
                        [h, g],
                        (function (e) {
                          let [t, r] = e;
                          switch (R) {
                            case "top": {
                              let e = [
                                [
                                  S.left,
                                  O ? S.bottom - n : C ? S.bottom - n : S.top,
                                ],
                                [
                                  S.right,
                                  O ? (C ? S.bottom - n : S.top) : S.bottom - n,
                                ],
                              ];
                              return [
                                [
                                  C ? t + n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                [
                                  C ? t - n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                ...e,
                              ];
                            }
                            case "bottom": {
                              let e = [
                                [
                                  S.left,
                                  O ? S.top + n : C ? S.top + n : S.bottom,
                                ],
                                [
                                  S.right,
                                  O ? (C ? S.top + n : S.bottom) : S.top + n,
                                ],
                              ];
                              return [
                                [
                                  C ? t + n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                [
                                  C ? t - n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                ...e,
                              ];
                            }
                            case "left":
                              return [
                                [
                                  A ? S.right - n : L ? S.right - n : S.left,
                                  S.top,
                                ],
                                [
                                  A ? (L ? S.right - n : S.left) : S.right - n,
                                  S.bottom,
                                ],
                                [
                                  t + n + 1,
                                  L ? r + n / 2 : A ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t + n + 1,
                                  L ? r - n / 2 : A ? r + 4 * n : r - 4 * n,
                                ],
                              ];
                            case "right": {
                              let e = [
                                [
                                  A ? S.left + n : L ? S.left + n : S.right,
                                  S.top,
                                ],
                                [
                                  A ? (L ? S.left + n : S.right) : S.left + n,
                                  S.bottom,
                                ],
                              ];
                              return [
                                [
                                  t - n,
                                  L ? r + n / 2 : A ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t - n,
                                  L ? r - n / 2 : A ? r + 4 * n : r - 4 * n,
                                ],
                                ...e,
                              ];
                            }
                          }
                        })([r, u]),
                      )
                        ? !o && a && (t = window.setTimeout(y, 40))
                        : y();
                    }
                  };
                };
              return (u.__options = { blockPointerEvents: r }), u;
            }
          },
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      a = "";
                    if ("string" == typeof t || "number" == typeof t) a += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                      else for (n in t) t[n] && (a && (a += " "), (a += n));
                    }
                    return a;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => a });
            let a = r;
          },
          8635: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root: "cpeagBA1_PblpJn8Xgtv",
              root_withoutBorder: "qU2apWBO1yyEK0lZ3lPO",
              root_radius_xs: "MmZbSs387gu2qrJ1lDWd",
              root_radius_s: "mlcrraysn7mW6xrBXSBF",
              root_radius_m: "dgV08FKVLZKFsucuiryn",
              root_radius_l: "S97_5dtzhpxo_amtfYRg",
              root_radius_xl: "nNBJnDHRlyLTniWosJhk",
              root_radius_xxxl: "zIMibMuH7wcqUoW7KH1B",
              root_radius_round: "uwk3hfWzB2VT7kE13SQk",
              root_size: "IlG7b1K0AD7E7AMx6F5p",
              root_size_default: "C_QGmfTz6UFX93vfPt6Z",
              root_size_xxxs: "eQt33MLDiQ6DRSuLaYEp",
              root_size_xxs: "oR11LfCBVqMbUJiAgknd",
              root_size_xs: "j1jXIVckFgZECecFzZMe",
              root_size_s: "WtFdWDF44egSVM_YiMUX",
              root_size_m: "Y2uqxoU7xa_AZ8FUCVOW",
              root_size_l: "SGYcNjvjmMsXeEVGUV2Z",
              root_icon_left: "kc5CjvU5hT9KEj0iTt3C",
              root_icon_right: "et24Jf7pT_X9Fvc7TznR",
              root_primary: "fXlFz1qMkliFUWOkHo8T",
              root_primary_default: "_eTRQi5ADZCUvUKMZqJU",
              ripple: "spMT3NcRD9Yb0ntNaNct",
              root_primary_outline: "fCUSh2B0Ye9kEvceE8zc",
              root_primary_text: "qlPp6CSQQEMVZPqtqLiQ",
              root_primary_withHover: "KZF6_4K1p_Y_GMIAxaAn",
              root_primary_withHover_default: "rWukOKAJh5Ga7JuIp62L",
              root_primary_withHover_outline: "fdwWCJKgUqml5wNqrRcN",
              root_primary_withHover_text: "IgYbZLnYjW0nMahgpkus",
              root_secondary: "_T4p_w41oaq6L4sztSdw",
              root_secondary_default: "iJVAJMgccD4vj4E4o068",
              root_secondary_outline: "pnM3iSP9keZOELI2oohr",
              root_secondary_text: "UDMYhpDjiAFT3xUx268O",
              root_secondary_withHover: "qUbrkhZIOVrvM0roV1QF",
              root_secondary_withHover_default: "nHWc2sto1C6Gm0Dpw_l0",
              root_secondary_withHover_outline: "i5WuBm5mfG0mflk_1jH_",
              root_secondary_withHover_text: "HbaqudSqu7Q3mv3zMPGr",
              root_plus: "ixLRsIJ2FvXO2k04n_QY",
              root_plus_default: "yRHwHzEGfDgRXGzYJqw2",
              root_plus_outline: "e777irPFmyQFFrURLF_U",
              root_plus_text: "vRqDhvmt3gt8TFp45_Zw",
              root_plus_withHover: "TZif6q3I2RwBEYXwK_iA",
              root_plus_withHover_default: "k3DhvmzpnM_Fb9oFdE4q",
              root_plus_withHover_outline: "RiDWYwGIxqbrUPR699DM",
              root_plus_withHover_text: "hC_mMCzWjkTn2j9xZzGc",
              root_accent: "jqD2jMT6n7F0WKyqwMsn",
              root_accent_default: "bDp0r9MtoYECZ8ObMoCh",
              root_accent_outline: "rXNyGp8NBAw2MUjACZNj",
              root_accent_text: "hmV4ERaXWAJc4uPLZL30",
              root_accent_withHover: "uKuxXu1N4TP5cWaEK5Ke",
              root_accent_withHover_default: "t_hequUaUgAMhFuxizLb",
              root_accent_withHover_outline: "Oy9sPFTxNTo1_E29U4aF",
              root_accent_withHover_text: "LcKRSd3DLoh7k60Oqox8",
              block: "BbCxxIjBGupN28bq2lSP",
              iconContainer: "NfB1qSw6DnoSwTr9I5mE",
              iconContainer_block: "cM0M40YHieFFCTYRgOZa",
              flexIcon: "WsKeF73pWotx9W1tWdYY",
              icon: "J9wTKytjOWG73QMoN5WP",
              icon_position_left: "elJfazUBui03YWZgHCbW",
              icon_position_right: "RBoEbyJKP5rEtLsXM1ji",
              icon_withButtonSize: "cE17_kCWJgx8kzQEkeVr",
            };
          },
          7519: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root: "B4n8OdxhLWJhLyFqsefx",
              swipeIcon: "vuZQkmZ17j2PrMjlV_Xe",
              button: "p4iG7Cp_CDu1zdXubsSc",
              container: "XrtoMzIRQNFtCya4Uj_Y",
              container_mobile: "d_Dy0pjtAUkecSvJ4OkW",
              textContainer: "arHH121CVMJ1HftqBKkg",
            };
          },
          4019: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root: "moy62QJwl9MPl3EIySFq",
              button: "yX_R7bYjE0ELIFl0wvrT",
              icon: "Hit8edYVZ8_ejMJMo5G9",
              buttonText: "BnPanQExuLk6q6xa2NbF",
            };
          },
          5929: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root_size_xxxs: "Rkdd2vKC_3xa1eUdRdHP",
              root_size_xxs: "l3tE1hAMmBj2aoPPwU08",
              root_size_xs: "UwnL5AJBMMAp6NwMDdZk",
              root_size_s: "DzJFnuf7XgdkFh28JAsM",
              root_size_m: "o_v2ds2BaqtzAsRuCVjw",
              root_size_l: "YjRa1ZjM_lXFlrfS7jcu",
              root_size_xl: "Seq0GowcqQmiA9LdLP_g",
              root_size_xxl: "mfy69_BvBIamD0e22rCQ",
            };
          },
          4965: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = { overlay: "ZSjQrniulol6xKOq2Bou" };
          },
          5371: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = { root: "dJZf0Flxzx7PR15g7zqM" };
          },
          390: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root_controls_xxs: "tRaaBpDMg9Qu8v6gKjtn",
              root_entity_xxs: "M9zvtlcpLUVn6DKdcHhj",
              root_text_xxs: "ln0PYYwDmFnfYxCDJsFU",
              root_controls_xs: "n5AeWEsJC3_AYXcbK4Lt",
              root_entity_xs: "__hrMKGmNbw54T54IUyh",
              root_text_xs: "SehSa7OyRpC2nzYTVb2Q",
              root_controls_s: "_oBLf5gprWsKjCw4Ce58",
              root_entity_s: "mxSPe5xpZnie9gpIqacd",
              root_text_s: "Ai2iRN9elHpk_u5splD6",
              root_controls_m: "tk7ahHRDYXJMMB879KUA",
              root_entity_m: "Z_WIr2W8JU4MPQek3hgR",
              root_text_m: "g3qWNP6xl__7qxNmtrvd",
              root_controls_l: "grvxapJE3vGArOKDWf6n",
              root_entity_l: "Esj5A1UeSi4xV4tZ839D",
              root_text_l: "V3WU123oO65AxsprotU9",
              root_weight_normal: "ZYV27jeWd30QDXu4GhaH",
              root_weight_medium: "_3_Mxw7Si7j2g4kWjlpR",
              root_weight_bold: "Vi7Rd0SZWqD17F0872TB",
            };
          },
          8544: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root_size_xs: "qJJ288377iHlWN_RXeEE",
              root_size_s: "_sd8Q9d_Ttn0Ufe4ISWS",
              root_size_m: "Ctk8dbecq31Qh7isOJPQ",
              root_size_l: "M_Djh6ppIkCO3A2k_BTA",
              root_size_xl: "dtxlzGQMPAbM2MEndXWX",
              root_size_xxl: "IUb9XLplTAoZqne9rNUL",
              root_size_xxxl: "ZYZamUwql_rfFR4RpI2B",
              root_size_xxxxl: "ZBZyxow5njdq8z5dnRPY",
              root_size_xxxxxl: "WdvQQNwdDNCdRSwRkAtT",
              root_weight_bold: "nSU6fV9y80WrZEfafvww",
              root_weight_black: "KBeGPPK4DinQzAP41Y_N",
            };
          },
          2524: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6169: (e, t, n) => {
            n.r(t),
              n.d(t, {
                DOWN: () => l,
                LEFT: () => a,
                RIGHT: () => o,
                UP: () => i,
                useSwipeable: () => p,
              });
            var r = n(810);
            let a = "Left",
              o = "Right",
              i = "Up",
              l = "Down",
              s = {
                delta: 10,
                preventScrollOnSwipe: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0,
                swipeDuration: 1 / 0,
                touchEventOptions: { passive: !0 },
              },
              u = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0],
              },
              c = "mousemove",
              d = "mouseup";
            function f(e, t) {
              if (0 === t) return e;
              let n = (Math.PI / 180) * t;
              return [
                e[0] * Math.cos(n) + e[1] * Math.sin(n),
                e[1] * Math.cos(n) - e[0] * Math.sin(n),
              ];
            }
            function p(e) {
              var t, n, p;
              let v;
              let { trackMouse: m } = e,
                y = r.useRef(Object.assign({}, u)),
                h = r.useRef(Object.assign({}, s)),
                g = r.useRef(Object.assign({}, h.current));
              for (v in ((g.current = Object.assign({}, h.current)),
              (h.current = Object.assign(Object.assign({}, s), e)),
              s))
                void 0 === h.current[v] && (h.current[v] = s[v]);
              let [x, b] = r.useMemo(
                () =>
                  (function (e, t) {
                    let n = (t) => {
                        let n = "touches" in t;
                        (n && t.touches.length > 1) ||
                          e((e, a) => {
                            a.trackMouse &&
                              !n &&
                              (document.addEventListener(c, r),
                              document.addEventListener(d, m));
                            let { clientX: o, clientY: i } = n
                                ? t.touches[0]
                                : t,
                              l = f([o, i], a.rotationAngle);
                            return (
                              a.onTouchStartOrOnMouseDown &&
                                a.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), u),
                                {
                                  initial: l.slice(),
                                  xy: l,
                                  start: t.timeStamp || 0,
                                },
                              )
                            );
                          });
                      },
                      r = (t) => {
                        e((e, n) => {
                          let r = "touches" in t;
                          if (r && t.touches.length > 1) return e;
                          if (t.timeStamp - e.start > n.swipeDuration)
                            return e.swiping
                              ? Object.assign(Object.assign({}, e), {
                                  swiping: !1,
                                })
                              : e;
                          let { clientX: u, clientY: c } = r ? t.touches[0] : t,
                            [d, p] = f([u, c], n.rotationAngle),
                            v = d - e.xy[0],
                            m = p - e.xy[1],
                            y = Math.abs(v),
                            h = Math.abs(m),
                            g = (t.timeStamp || 0) - e.start,
                            x = y > h ? (v > 0 ? o : a) : m > 0 ? l : i,
                            b =
                              "number" == typeof n.delta
                                ? n.delta
                                : n.delta[x.toLowerCase()] || s.delta;
                          if (y < b && h < b && !e.swiping) return e;
                          let E = {
                            absX: y,
                            absY: h,
                            deltaX: v,
                            deltaY: m,
                            dir: x,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: Math.sqrt(y * y + h * h) / (g || 1),
                            vxvy: [v / (g || 1), m / (g || 1)],
                          };
                          E.first && n.onSwipeStart && n.onSwipeStart(E),
                            n.onSwiping && n.onSwiping(E);
                          let _ = !1;
                          return (
                            (n.onSwiping ||
                              n.onSwiped ||
                              n["onSwiped".concat(x)]) &&
                              (_ = !0),
                            _ &&
                              n.preventScrollOnSwipe &&
                              n.trackTouch &&
                              t.cancelable &&
                              t.preventDefault(),
                            Object.assign(Object.assign({}, e), {
                              first: !1,
                              eventData: E,
                              swiping: !0,
                            })
                          );
                        });
                      },
                      p = (t) => {
                        e((e, n) => {
                          let r;
                          if (e.swiping && e.eventData) {
                            if (t.timeStamp - e.start < n.swipeDuration) {
                              (r = Object.assign(
                                Object.assign({}, e.eventData),
                                { event: t },
                              )),
                                n.onSwiped && n.onSwiped(r);
                              let a = n["onSwiped".concat(r.dir)];
                              a && a(r);
                            }
                          } else n.onTap && n.onTap({ event: t });
                          return (
                            n.onTouchEndOrOnMouseUp &&
                              n.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), u),
                              { eventData: r },
                            )
                          );
                        });
                      },
                      v = () => {
                        document.removeEventListener(c, r),
                          document.removeEventListener(d, m);
                      },
                      m = (e) => {
                        v(), p(e);
                      },
                      y = (e, t) => {
                        let a = () => {};
                        if (e && e.addEventListener) {
                          let o = Object.assign(
                              Object.assign({}, s.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            i = [
                              ["touchstart", n, o],
                              [
                                "touchmove",
                                r,
                                Object.assign(
                                  Object.assign({}, o),
                                  t.preventScrollOnSwipe ? { passive: !1 } : {},
                                ),
                              ],
                              ["touchend", p, o],
                            ];
                          i.forEach((t) => {
                            let [n, r, a] = t;
                            return e.addEventListener(n, r, a);
                          }),
                            (a = () =>
                              i.forEach((t) => {
                                let [n, r] = t;
                                return e.removeEventListener(n, r);
                              }));
                        }
                        return a;
                      },
                      h = {
                        ref: (t) => {
                          null !== t &&
                            e((e, n) => {
                              if (e.el === t) return e;
                              let r = {};
                              return (
                                e.el &&
                                  e.el !== t &&
                                  e.cleanUpTouch &&
                                  (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                                n.trackTouch && t && (r.cleanUpTouch = y(t, n)),
                                Object.assign(
                                  Object.assign(Object.assign({}, e), {
                                    el: t,
                                  }),
                                  r,
                                )
                              );
                            });
                        },
                      };
                    return t.trackMouse && (h.onMouseDown = n), [h, y];
                  })((e) => (y.current = e(y.current, h.current)), {
                    trackMouse: m,
                  }),
                [m],
              );
              return (
                (y.current =
                  ((t = y.current),
                  (n = h.current),
                  (p = g.current),
                  n.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe ||
                        n.touchEventOptions.passive !==
                          p.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: b(t.el, n),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: b(t.el, n),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                x
              );
            }
          },
          6161: (e, t, n) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(810),
              a = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              i = Object.prototype.hasOwnProperty,
              l =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, n) {
              var r,
                o = {},
                u = null,
                c = null;
              for (r in (void 0 !== n && (u = "" + n),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: a,
                type: e,
                key: u,
                ref: c,
                props: o,
                _owner: l.current,
              };
            }
            (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
          },
          9541: (e, t, n) => {
            e.exports = n(6161);
          },
          5695: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "add", xlinkHref: "#add" }),
              ]);
            });
          },
          9800: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "addToPlaylist",
                  xlinkHref: "#addToPlaylist",
                }),
              ]);
            });
          },
          2751: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "adult", xlinkHref: "#adult" }),
              ]);
            });
          },
          383: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "album", xlinkHref: "#album" }),
              ]);
            });
          },
          758: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowDown",
                  xlinkHref: "#arrowDown",
                }),
              ]);
            });
          },
          9466: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowLeft",
                  xlinkHref: "#arrowLeft",
                }),
              ]);
            });
          },
          9032: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowRight",
                  xlinkHref: "#arrowRight",
                }),
              ]);
            });
          },
          7294: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "artist", xlinkHref: "#artist" }),
              ]);
            });
          },
          8409: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "attention",
                  xlinkHref: "#attention",
                }),
              ]);
            });
          },
          8557: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "bookmateLogo",
                  xlinkHref: "#bookmateLogo",
                }),
              ]);
            });
          },
          1478: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "bucket", xlinkHref: "#bucket" }),
              ]);
            });
          },
          849: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "cast", xlinkHref: "#cast" }),
              ]);
            });
          },
          3781: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "chain", xlinkHref: "#chain" }),
              ]);
            });
          },
          5951: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartDown",
                  xlinkHref: "#chartDown",
                }),
              ]);
            });
          },
          7203: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartNew",
                  xlinkHref: "#chartNew",
                }),
              ]);
            });
          },
          8688: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartSame",
                  xlinkHref: "#chartSame",
                }),
              ]);
            });
          },
          4653: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartUp",
                  xlinkHref: "#chartUp",
                }),
              ]);
            });
          },
          2966: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "check", xlinkHref: "#check" }),
              ]);
            });
          },
          5849: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "close", xlinkHref: "#close" }),
              ]);
            });
          },
          5972: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "collections",
                  xlinkHref: "#collections",
                }),
              ]);
            });
          },
          6631: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "collections_selected",
                  xlinkHref: "#collections_selected",
                }),
              ]);
            });
          },
          2703: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "dislike",
                  xlinkHref: "#dislike",
                }),
              ]);
            });
          },
          3514: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "disliked",
                  xlinkHref: "#disliked",
                }),
              ]);
            });
          },
          957: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "donation",
                  xlinkHref: "#donation",
                }),
              ]);
            });
          },
          3342: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "dragDots",
                  xlinkHref: "#dragDots",
                }),
              ]);
            });
          },
          7431: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "explicit",
                  xlinkHref: "#explicit",
                }),
              ]);
            });
          },
          6609: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "eye_crossed",
                  xlinkHref: "#eye_crossed",
                }),
              ]);
            });
          },
          2900: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "filter", xlinkHref: "#filter" }),
              ]);
            });
          },
          7299: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "fullscreen",
                  xlinkHref: "#fullscreen",
                }),
              ]);
            });
          },
          2272: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "history",
                  xlinkHref: "#history",
                }),
              ]);
            });
          },
          533: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "home", xlinkHref: "#home" }),
              ]);
            });
          },
          8005: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "home_selected",
                  xlinkHref: "#home_selected",
                }),
              ]);
            });
          },
          3687: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "info", xlinkHref: "#info" }),
              ]);
            });
          },
          7261: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "kids", xlinkHref: "#kids" }),
              ]);
            });
          },
          2646: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "kinopoiskEn",
                  xlinkHref: "#kinopoiskEn",
                }),
              ]);
            });
          },
          3171: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "kinopoiskRu",
                  xlinkHref: "#kinopoiskRu",
                }),
              ]);
            });
          },
          5494: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "lightning",
                  xlinkHref: "#lightning",
                }),
              ]);
            });
          },
          6334: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "like", xlinkHref: "#like" }),
              ]);
            });
          },
          4973: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "likeVariant",
                  xlinkHref: "#likeVariant",
                }),
              ]);
            });
          },
          9165: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "liked", xlinkHref: "#liked" }),
              ]);
            });
          },
          1936: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "likedVariant",
                  xlinkHref: "#likedVariant",
                }),
              ]);
            });
          },
          5517: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "link", xlinkHref: "#link" }),
              ]);
            });
          },
          6685: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "lock", xlinkHref: "#lock" }),
              ]);
            });
          },
          8274: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "lyrics", xlinkHref: "#lyrics" }),
              ]);
            });
          },
          6094: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "menuArrow",
                  xlinkHref: "#menuArrow",
                }),
              ]);
            });
          },
          3974: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "more", xlinkHref: "#more" }),
              ]);
            });
          },
          2502: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogo",
                  xlinkHref: "#musicLogo",
                }),
              ]);
            });
          },
          1754: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoCenterEn",
                  xlinkHref: "#musicLogoCenterEn",
                }),
              ]);
            });
          },
          6615: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoCenterRu",
                  xlinkHref: "#musicLogoCenterRu",
                }),
              ]);
            });
          },
          7942: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoLeftEn",
                  xlinkHref: "#musicLogoLeftEn",
                }),
              ]);
            });
          },
          1498: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoLeftRu",
                  xlinkHref: "#musicLogoLeftRu",
                }),
              ]);
            });
          },
          9473: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "next", xlinkHref: "#next" }),
              ]);
            });
          },
          5985: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "non_music",
                  xlinkHref: "#non_music",
                }),
              ]);
            });
          },
          8749: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "note", xlinkHref: "#note" }),
              ]);
            });
          },
          4947: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "pause", xlinkHref: "#pause" }),
              ]);
            });
          },
          243: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pauseVibe",
                  xlinkHref: "#pauseVibe",
                }),
              ]);
            });
          },
          1687: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_filled",
                  xlinkHref: "#pause_filled",
                }),
              ]);
            });
          },
          2761: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "pencil", xlinkHref: "#pencil" }),
              ]);
            });
          },
          9817: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "pin", xlinkHref: "#pin" }),
              ]);
            });
          },
          6515: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pin_filled",
                  xlinkHref: "#pin_filled",
                }),
              ]);
            });
          },
          7471: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "play", xlinkHref: "#play" }),
              ]);
            });
          },
          3133: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playLast",
                  xlinkHref: "#playLast",
                }),
              ]);
            });
          },
          1514: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playNext",
                  xlinkHref: "#playNext",
                }),
              ]);
            });
          },
          5801: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playQueue",
                  xlinkHref: "#playQueue",
                }),
              ]);
            });
          },
          6684: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playVibe",
                  xlinkHref: "#playVibe",
                }),
              ]);
            });
          },
          9319: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_filled",
                  xlinkHref: "#play_filled",
                }),
              ]);
            });
          },
          8602: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playlist",
                  xlinkHref: "#playlist",
                }),
              ]);
            });
          },
          8861: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "plus", xlinkHref: "#plus" }),
              ]);
            });
          },
          6809: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "plusBadge",
                  xlinkHref: "#plusBadge",
                }),
              ]);
            });
          },
          1179: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "plusOutlined",
                  xlinkHref: "#plusOutlined",
                }),
              ]);
            });
          },
          6532: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "podcasts",
                  xlinkHref: "#podcasts",
                }),
              ]);
            });
          },
          7918: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "previous",
                  xlinkHref: "#previous",
                }),
              ]);
            });
          },
          7692: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "repeat", xlinkHref: "#repeat" }),
              ]);
            });
          },
          7881: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "repeat_one",
                  xlinkHref: "#repeat_one",
                }),
              ]);
            });
          },
          2339: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "reset", xlinkHref: "#reset" }),
              ]);
            });
          },
          7954: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "search", xlinkHref: "#search" }),
              ]);
            });
          },
          6178: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "search_selected",
                  xlinkHref: "#search_selected",
                }),
              ]);
            });
          },
          200: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "settings",
                  xlinkHref: "#settings",
                }),
              ]);
            });
          },
          9109: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "share", xlinkHref: "#share" }),
              ]);
            });
          },
          4521: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "shuffle",
                  xlinkHref: "#shuffle",
                }),
              ]);
            });
          },
          3013: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_25x",
                  xlinkHref: "#speed_1_25x",
                }),
              ]);
            });
          },
          1937: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_5x",
                  xlinkHref: "#speed_1_5x",
                }),
              ]);
            });
          },
          4576: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_75x",
                  xlinkHref: "#speed_1_75x",
                }),
              ]);
            });
          },
          7163: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1x",
                  xlinkHref: "#speed_1x",
                }),
              ]);
            });
          },
          4717: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_2x",
                  xlinkHref: "#speed_2x",
                }),
              ]);
            });
          },
          9298: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "syncLyrics",
                  xlinkHref: "#syncLyrics",
                }),
              ]);
            });
          },
          6539: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "trailer",
                  xlinkHref: "#trailer",
                }),
              ]);
            });
          },
          6029: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "unavailable",
                  xlinkHref: "#unavailable",
                }),
              ]);
            });
          },
          5312: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "unpin", xlinkHref: "#unpin" }),
              ]);
            });
          },
          3993: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "users", xlinkHref: "#users" }),
              ]);
            });
          },
          5730: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "vibe", xlinkHref: "#vibe" }),
              ]);
            });
          },
          631: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "volume", xlinkHref: "#volume" }),
              ]);
            });
          },
          4689: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "volumeOff",
                  xlinkHref: "#volumeOff",
                }),
              ]);
            });
          },
          5667: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPlusEn",
                  xlinkHref: "#yandexPlusEn",
                }),
              ]);
            });
          },
          2639: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPlusRu",
                  xlinkHref: "#yandexPlusRu",
                }),
              ]);
            });
          },
          6198: (e, t, n) => {
            var r, a;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable = void 0);
            let o = n(810),
              i = n(6169);
            ((a = r || (r = {})).TOP = "top"),
              (a.BOTTOM = "bottom"),
              (a.RIGHT = "right"),
              (a.LEFT = "left");
            let l = (e) => {
                switch (e) {
                  case "top":
                  case "top-end":
                  case "top-start":
                    return r.TOP;
                  case "right":
                  case "right-end":
                  case "right-start":
                    return r.RIGHT;
                  case "left":
                  case "left-end":
                  case "left-start":
                    return r.LEFT;
                  default:
                    return r.BOTTOM;
                }
              },
              s = (e) => {
                let { ref: t, deltaY: n, deltaX: a, placement: o } = e;
                requestAnimationFrame(() => {
                  t.current &&
                    ((t.current.style.willChange = "transform"),
                    (t.current.style.transform =
                      o === r.TOP || o === r.BOTTOM
                        ? "translateY(".concat(n || 0, "px)")
                        : "translateX(".concat(a || 0, "px)")));
                });
              },
              u = (e) => {
                let { ref: t, deltaY: n, deltaX: a, placement: o } = e;
                switch (o) {
                  case r.TOP:
                    n <= 0 && s({ ref: t, deltaY: n, deltaX: a, placement: o });
                    break;
                  case r.RIGHT:
                    a >= 0 && s({ ref: t, deltaY: n, deltaX: a, placement: o });
                    break;
                  case r.LEFT:
                    a <= 0 && s({ ref: t, deltaY: n, deltaX: a, placement: o });
                    break;
                  default:
                    n >= 0 && s({ ref: t, deltaY: n, deltaX: a, placement: o });
                }
              },
              c = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              d = (e) => {
                let { ref: t, deltaY: n, deltaX: a, placement: o } = e;
                switch (o) {
                  case r.TOP:
                    return (
                      t.current && n < 0 && t.current.offsetHeight / n >= -2
                    );
                  case r.RIGHT:
                    return t.current && a > 0 && t.current.offsetWidth / a <= 2;
                  case r.LEFT:
                    return (
                      t.current && a < 0 && t.current.offsetWidth / a >= -2
                    );
                  default:
                    return (
                      t.current && n > 0 && t.current.offsetHeight / n <= 2
                    );
                }
              };
            t.usePopoverSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: n = {},
                  onClose: r,
                  disableSwipe: a,
                  placement: s,
                } = e,
                f = (0, o.useMemo)(() => l(s), [s]),
                p = (0, o.useCallback)(() => {
                  r && (c(t), r());
                }, [r, t]),
                v = (0, o.useCallback)(
                  (e) => {
                    a ||
                      u({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: f,
                      });
                  },
                  [a, t, f],
                ),
                m = (0, o.useCallback)(
                  (e) => {
                    !a &&
                      (d({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: f,
                      })
                        ? r && (c(t), r())
                        : c(t));
                  },
                  [a, t, f, r],
                );
              return {
                handlers: (0, i.useSwipeable)({
                  onSwiped: m,
                  onSwiping: v,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...n,
                }),
                onCloseCallback: p,
              };
            };
          },
          9440: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let n = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
            t.createAvatarUrl = (e, t, r) => {
              let a;
              return (
                (a =
                  "orig" === t
                    ? "orig"
                    : r
                      ? "m".concat(t, "x").concat(t)
                      : "".concat(t, "x").concat(t)),
                n(e.replace("%%", a))
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, n) {
                let r = null != n ? n : e.currentTarget,
                  a = document.createElement("span"),
                  o = Math.max(r.clientWidth, r.clientHeight),
                  i = o / 2,
                  l = r.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(l.width / 2)
                      : e.clientX - l.left,
                  u =
                    0 === e.clientY
                      ? Math.round(l.height / 2)
                      : e.clientY - l.top;
                (a.style.width = "".concat(o, "px")),
                  (a.style.height = "".concat(o, "px")),
                  (a.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - i, "px")),
                  (a.style.top = "".concat(u - i, "px")),
                  a.classList.add(t);
                let c = r.getElementsByClassName(t)[0];
                c && c.remove(), r.insertBefore(a, r.firstChild);
              });
          },
          8216: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var r = n(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return r.createRipple;
              },
            });
            var a = n(9440);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return a.createAvatarUrl;
              },
            });
          },
          8119: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            let a = n(9541),
              o = n(810),
              i = n(5881),
              l = n(8216),
              s = r(n(8635)),
              u = (e) => {
                let {
                    forwardRef: t,
                    isBlock: n,
                    iconPosition: r = "left",
                    children: u,
                    className: c,
                    color: d = "secondary",
                    flexIcon: f,
                    icon: p,
                    role: v,
                    onClick: m,
                    radius: y = "m",
                    size: h,
                    type: g = "button",
                    variant: x = "default",
                    withRipple: b = !0,
                    withHover: E = !0,
                    withBorder: _ = !1,
                    disabled: k,
                    iconClassName: w,
                    iconContainerClassName: P,
                    ...S
                  } = e,
                  R = (0, o.useId)(),
                  O = !o.Children.toArray(u).filter(Boolean).length,
                  A = "left" === r,
                  T = null;
                if (p) {
                  var C, L;
                  T = (0, o.cloneElement)(p, {
                    className: (0, i.clsx)(
                      s.default.icon,
                      {
                        [s.default["icon_position_".concat(r)]]: r && !O,
                        [s.default.icon_withButtonSize]: !(null ===
                          (C = p.props) || void 0 === C
                          ? void 0
                          : C.size),
                      },
                      null === (L = p.props) || void 0 === L
                        ? void 0
                        : L.className,
                      w,
                    ),
                    key: R,
                  });
                }
                let j = (0, o.useCallback)(
                  (e) => {
                    b && (0, l.createRipple)(e, s.default.ripple),
                      null == m || m(e);
                  },
                  [m, b],
                );
                return (0, a.jsx)("button", {
                  ref: t,
                  className: (0, i.clsx)(
                    s.default.root,
                    s.default["root_".concat(d, "_").concat(x)],
                    s.default["root_radius_".concat(y)],
                    s.default.root_size,
                    {
                      [s.default["root_".concat(d, "_withHover_").concat(x)]]:
                        E && !k,
                      [s.default["root_size_".concat(h)]]: h,
                      [s.default.root_withoutBorder]: !_,
                      [s.default.block]: n,
                      [s.default.flexIcon]: f,
                      [s.default.iconOnly]: O,
                      [s.default.root_icon_left]: p && !O && A,
                      [s.default.root_icon_right]: p && !O && !A,
                    },
                    c,
                  ),
                  type: g,
                  role: v,
                  onClick: j,
                  ...S,
                  disabled: k,
                  children: p
                    ? (0, a.jsxs)("span", {
                        className: (0, i.clsx)(
                          s.default.iconContainer,
                          { [s.default.iconContainer_block]: n },
                          P,
                        ),
                        children: [A && T, !O && u, !A && T],
                      })
                    : u,
                });
              };
            t.Button = (0, o.forwardRef)((e, t) =>
              (0, a.jsx)(u, { forwardRef: t, ...e }),
            );
          },
          5928: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            var r = n(8119);
            Object.defineProperty(t, "Button", {
              enumerable: !0,
              get: function () {
                return r.Button;
              },
            });
          },
          8324: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Dropdown = t.DropdownComponent = void 0);
            let a = n(9541),
              o = n(5881),
              i = n(810),
              l = n(5062),
              s = n(1688),
              u = r(n(7519));
            (t.DropdownComponent = (e) => {
              let {
                  reference: t,
                  onSelect: n,
                  onIconActiveState: r,
                  offsetOptions: c = 8,
                  defaultValue: d,
                  placement: f,
                  header: p,
                  isDisabled: v = !1,
                  footer: m,
                  isMobile: y = !1,
                  children: h,
                  forwardRef: g,
                  className: x,
                  containerClassName: b,
                  ...E
                } = e,
                _ = (0, i.useId)(),
                [k, w] = (0, i.useState)(!1),
                [P, S] = (0, i.useState)(d);
              (0, i.useEffect)(() => {
                S(d);
              }, [d]);
              let R = (0, i.useCallback)(() => {
                  v || (w(!k), null == r || r(!k));
                }, [v, k, r]),
                O = (0, i.useCallback)(
                  (e) => {
                    S(e.id), n(e), w(!1), null == r || r(!1);
                  },
                  [n, r],
                );
              return (0, a.jsxs)(l.Popover, {
                open: k,
                onOpenChange: R,
                placement: f,
                offsetOptions: c,
                isMobile: y,
                customRoleProps: { role: "menu" },
                "aria-labelledby": _,
                children: [
                  (0, i.cloneElement)(t, {
                    id: _,
                    onClick: R,
                    disabled: v,
                    variant: "text",
                    withHover: !1,
                    color: "primary",
                    className: (0, o.clsx)(u.default.button, t.props.className),
                  }),
                  (0, a.jsx)(s.PopoverContent, {
                    children: (0, a.jsxs)("div", {
                      className: (0, o.clsx)(u.default.root, x),
                      ...E,
                      children: [
                        y &&
                          (0, a.jsx)("div", { className: u.default.swipeIcon }),
                        (0, a.jsxs)("ul", {
                          ref: g,
                          className: (0, o.clsx)(
                            u.default.container,
                            { [u.default.container_mobile]: y },
                            b,
                          ),
                          children: [
                            p &&
                              (0, a.jsx)("div", {
                                className: u.default.textContainer,
                                children: p,
                              }),
                            i.Children.map(h, (e) =>
                              (0, i.cloneElement)(e, {
                                key: e.props.id,
                                onClick: () => O(e.props),
                                isSelected: P === e.props.id,
                              }),
                            ),
                            m &&
                              (0, a.jsx)("div", {
                                className: u.default.textContainer,
                                children: m,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
            }),
              (t.Dropdown = (0, i.forwardRef)((e, n) =>
                (0, a.jsx)(t.DropdownComponent, { forwardRef: n, ...e }),
              ));
          },
          1057: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Option = t.OptionComponent = void 0);
            let a = n(9541),
              o = n(5881),
              i = n(810),
              l = n(6011),
              s = n(5928),
              u = n(7066),
              c = n(2582),
              d = r(n(4019));
            (t.OptionComponent = (e) => {
              let {
                  id: t,
                  label: n,
                  isSelected: r = !1,
                  className: i,
                  forwardRef: f,
                  ...p
                } = e,
                v = (0, l.useListItem)(),
                m = (0, l.useMergeRefs)([v.ref, f]);
              return (0, a.jsx)("li", {
                className: d.default.root,
                children: (0, a.jsxs)(s.Button, {
                  className: (0, o.clsx)(d.default.button, i),
                  ref: m,
                  id: t,
                  variant: "text",
                  color: "primary",
                  withHover: !1,
                  role: "menuitem",
                  "aria-selected": r,
                  ...p,
                  children: [
                    (0, a.jsx)(c.Caption, {
                      variant: "span",
                      className: d.default.buttonText,
                      children: n,
                    }),
                    r && (0, a.jsx)(u.Icon, { size: "xxs", variant: "check" }),
                  ],
                }),
              });
            }),
              (t.Option = (0, i.forwardRef)((e, n) => {
                let { children: r, ...o } = e;
                return (0, a.jsx)(t.OptionComponent, {
                  forwardRef: n,
                  ...o,
                  children: r,
                });
              }));
          },
          5189: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = t.IconComponent = void 0);
            let a = n(9541),
              o = n(810),
              i = n(5881),
              l = n(5151),
              s = n(4905),
              u = r(n(5929));
            (t.IconComponent = (e) => {
              let {
                  "aria-label": t,
                  className: n,
                  focusable: r = !1,
                  variant: o,
                  size: c,
                  forwardRef: d,
                  ...f
                } = e,
                p = l.iconsCollection[o];
              return (0, a.jsx)(p, {
                className: (0, i.clsx)(
                  u.default.root,
                  n,
                  u.default["root_size_".concat(c)],
                ),
                focusable: r,
                "aria-label": t,
                ...f,
                "aria-hidden": !t,
                ref: d,
                style: { ...(f.style || {}), padding: s.paddings[o] },
              });
            }),
              (t.Icon = (0, o.forwardRef)((e, n) =>
                (0, a.jsx)(t.IconComponent, { forwardRef: n, ...e }),
              ));
          },
          5151: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.iconsCollection = void 0);
            let a = r(n(5695)),
              o = r(n(9800)),
              i = r(n(2751)),
              l = r(n(383)),
              s = r(n(758)),
              u = r(n(9466)),
              c = r(n(9032)),
              d = r(n(7294)),
              f = r(n(8409)),
              p = r(n(8557)),
              v = r(n(1478)),
              m = r(n(849)),
              y = r(n(3781)),
              h = r(n(5951)),
              g = r(n(7203)),
              x = r(n(8688)),
              b = r(n(4653)),
              E = r(n(2966)),
              _ = r(n(5849)),
              k = r(n(6631)),
              w = r(n(5972)),
              P = r(n(2703)),
              S = r(n(3514)),
              R = r(n(3342)),
              O = r(n(957)),
              A = r(n(7431)),
              T = r(n(6609)),
              C = r(n(2900)),
              L = r(n(7299)),
              j = r(n(3687)),
              I = r(n(2272)),
              M = r(n(8005)),
              N = r(n(533)),
              D = r(n(7261)),
              q = r(n(2646)),
              B = r(n(3171)),
              H = r(n(5494)),
              z = r(n(6334)),
              F = r(n(9165)),
              U = r(n(1936)),
              K = r(n(4973)),
              Y = r(n(5517)),
              V = r(n(6685)),
              G = r(n(8274)),
              W = r(n(6094)),
              Z = r(n(3974)),
              X = r(n(2502)),
              Q = r(n(1754)),
              J = r(n(6615)),
              $ = r(n(7942)),
              ee = r(n(1498)),
              et = r(n(9473)),
              en = r(n(5985)),
              er = r(n(8749)),
              ea = r(n(1687)),
              eo = r(n(4947)),
              ei = r(n(243)),
              el = r(n(2761)),
              es = r(n(6515)),
              eu = r(n(9817)),
              ec = r(n(9319)),
              ed = r(n(7471)),
              ef = r(n(3133)),
              ep = r(n(8602)),
              ev = r(n(1514)),
              em = r(n(5801)),
              ey = r(n(6684)),
              eh = r(n(8861)),
              eg = r(n(6809)),
              ex = r(n(1179)),
              eb = r(n(6532)),
              eE = r(n(7918)),
              e_ = r(n(7881)),
              ek = r(n(7692)),
              ew = r(n(2339)),
              eP = r(n(7954)),
              eS = r(n(6178)),
              eR = r(n(200)),
              eO = r(n(9109)),
              eA = r(n(4521)),
              eT = r(n(7163)),
              eC = r(n(3013)),
              eL = r(n(1937)),
              ej = r(n(4576)),
              eI = r(n(4717)),
              eM = r(n(9298)),
              eN = r(n(6539)),
              eD = r(n(6029)),
              eq = r(n(5312)),
              eB = r(n(3993)),
              eH = r(n(5730)),
              ez = r(n(631)),
              eF = r(n(4689)),
              eU = r(n(5667)),
              eK = r(n(2639));
            t.iconsCollection = {
              add: a.default,
              addToPlaylist: o.default,
              adult: i.default,
              album: l.default,
              arrowDown: s.default,
              arrowLeft: u.default,
              arrowRight: c.default,
              artist: d.default,
              attention: f.default,
              bookmateLogo: p.default,
              bucket: v.default,
              cast: m.default,
              chain: y.default,
              chartDown: h.default,
              chartNew: g.default,
              chartSame: x.default,
              chartUp: b.default,
              check: E.default,
              close: _.default,
              collections_selected: k.default,
              collections: w.default,
              dislike: P.default,
              disliked: S.default,
              dragDots: R.default,
              donation: O.default,
              explicit: A.default,
              eye_crossed: T.default,
              filter: C.default,
              fullscreen: L.default,
              history: I.default,
              home_selected: M.default,
              home: N.default,
              info: j.default,
              kids: D.default,
              kinopoiskEn: q.default,
              kinopoiskRu: B.default,
              lightning: H.default,
              like: z.default,
              liked: F.default,
              likedVariant: U.default,
              likeVariant: K.default,
              link: Y.default,
              lock: V.default,
              lyrics: G.default,
              menuArrow: W.default,
              more: Z.default,
              musicLogo: X.default,
              musicLogoCenterEn: Q.default,
              musicLogoCenterRu: J.default,
              musicLogoLeftEn: $.default,
              musicLogoLeftRu: ee.default,
              next: et.default,
              non_music: en.default,
              note: er.default,
              pause_filled: ea.default,
              pause: eo.default,
              pauseVibe: ei.default,
              pencil: el.default,
              pin_filled: es.default,
              pin: eu.default,
              play_filled: ec.default,
              play: ed.default,
              playLast: ef.default,
              playlist: ep.default,
              playNext: ev.default,
              playQueue: em.default,
              playVibe: ey.default,
              plus: eh.default,
              plusBadge: eg.default,
              plusOutlined: ex.default,
              podcasts: eb.default,
              previous: eE.default,
              repeat_one: e_.default,
              repeat: ek.default,
              reset: ew.default,
              search: eP.default,
              search_selected: eS.default,
              settings: eR.default,
              share: eO.default,
              shuffle: eA.default,
              speed_1x: eT.default,
              speed_1_25x: eC.default,
              speed_1_5x: eL.default,
              speed_1_75x: ej.default,
              speed_2x: eI.default,
              syncLyrics: eM.default,
              trailer: eN.default,
              unavailable: eD.default,
              unpin: eq.default,
              users: eB.default,
              vibe: eH.default,
              volume: ez.default,
              volumeOff: eF.default,
              yandexPlusEn: eU.default,
              yandexPlusRu: eK.default,
            };
          },
          7066: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = void 0);
            var r = n(5189);
            Object.defineProperty(t, "Icon", {
              enumerable: !0,
              get: function () {
                return r.Icon;
              },
            });
          },
          4905: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.paddings = void 0),
              (t.paddings = {
                add: "var(--ym-icon-padding, 2px)",
                addToPlaylist: "var(--ym-icon-padding, 2px, 2px, 2px, 2px)",
                adult: "var(--ym-icon-padding)",
                album: "var(--ym-icon-padding, 1px)",
                arrowDown: "var(--ym-icon-padding, 8px 4px 5px)",
                arrowLeft: "var(--ym-icon-padding, 5px 8px 4px 6px)",
                arrowRight: "var(--ym-icon-padding, 5px 7px 4px 7px)",
                artist: "var(--ym-icon-padding, 1px 0)",
                attention: "var(--ym-icon-padding, 2px)",
                bookmateLogo: "var(--ym-icon-padding)",
                bucket: "var(--ym-icon-padding, 1px)",
                cast: "var(--ym-icon-padding, 3px 1px 2px 1px)",
                chain: "var(--ym-icon-padding, 2px)",
                chartDown: "var(--ym-icon-padding, 7px 4px 6px 4px)",
                chartNew: "var(--ym-icon-padding)",
                chartSame: "var(--ym-icon-padding, 8px 5px 9px 6px)",
                chartUp: "var(--ym-icon-padding, 6px 4px 6px 5px)",
                check: "var(--ym-icon-padding, 4px 0 4px 4px)",
                close: "var(--ym-icon-padding, 6px)",
                collections_selected: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                collections: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                dislike: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                disliked: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                dragDots: "var(--ym-icon-padding)",
                donation: "var(--ym-icon-padding, 0px 1px 0px 0px)",
                explicit: "var(--ym-icon-padding)",
                eye_crossed: "var(--ym-icon-padding, 2px 1px 2px 2px)",
                filter: "var(--ym-icon-padding, 6px 4px 6px 4px)",
                fullscreen: "var(--ym-icon-padding, 4px)",
                history: "var(--ym-icon-padding, 2px)",
                home_selected: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                home: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                info: "var(--ym-icon-padding)",
                kids: "var(--ym-icon-padding, 6px)",
                kinopoiskEn: "var(--ym-icon-padding)",
                kinopoiskRu: "var(--ym-icon-padding)",
                lightning: "var(--ym-icon-padding, 3px 6px 3px 6px)",
                like: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                liked: "var(--ym-icon-padding, 2px 1px 2px 2px)",
                likedVariant: "var(--ym-icon-padding, 5px 6px 6px 0)",
                likeVariant: "var(--ym-icon-padding, 5px 6px 6px 0)",
                link: "var(--ym-icon-padding)",
                lock: "var(--ym-icon-padding, 2px)",
                lyrics: "var(--ym-icon-padding, 3px 2px)",
                menuArrow: "var(--ym-icon-padding, 5px 7px 4px 7px)",
                more: "var(--ym-icon-padding, 8px 2px 8px 1px)",
                musicLogo: "var(--ym-icon-padding, 0)",
                musicLogoCenterEn: "var(--ym-icon-padding, 0)",
                musicLogoCenterRu: "var(--ym-icon-padding, 0)",
                musicLogoLeftEn: "var(--ym-icon-padding, 0)",
                musicLogoLeftRu: "var(--ym-icon-padding, 0)",
                next: "var(--ym-icon-padding, 4px)",
                non_music: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                note: "var(--ym-icon-padding, 4px 7px 2px 5px)",
                pause_filled: "var(--ym-icon-padding)",
                pause: "var(--ym-icon-padding, 4px 6px)",
                pauseVibe: "var(--ym-icon-padding, 2px 4px 4px 8px)",
                pencil: "var(--ym-icon-padding, 4px)",
                pin_filled: "var(--ym-icon-padding, 2px 3px)",
                pin: "var(--ym-icon-padding, 2px 3px)",
                play_filled: "var(--ym-icon-padding)",
                play: "var(--ym-icon-padding, 3px 2px 3px 7px)",
                playLast: "var(--ym-icon-padding, 2px 3px 2px 3px)",
                playlist: "var(--ym-icon-padding, 2px)",
                playNext: "var(--ym-icon-padding, 2px 3px 2px 3px)",
                playQueue: "var(--ym-icon-padding, 5px 3px)",
                playVibe: "var(--ym-icon-padding, 0px 0px 1px 7px)",
                plus: "var(--ym-icon-padding, 3px)",
                plusBadge: "var(--ym-icon-padding)",
                plusOutlined: "var(--ym-icon-padding, 4px 4px 4px 5px)",
                podcasts: "var(--ym-icon-padding, 6px)",
                previous: "var(--ym-icon-padding, 4px)",
                repeat_one: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                repeat: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                reset: "var(--ym-icon-padding, 2px)",
                search: "var(--ym-icon-padding, 5px)",
                search_selected: "var(--ym-icon-padding, 5px)",
                settings: "var(--ym-icon-padding, 2px)",
                share: "var(--ym-icon-padding, 2px 1px 2px 1px)",
                shuffle: "var(--ym-icon-padding, 3px 1px 3px 2px)",
                speed_1x: "var(--ym-icon-padding)",
                speed_1_25x: "var(--ym-icon-padding)",
                speed_1_5x: "var(--ym-icon-padding)",
                speed_1_75x: "var(--ym-icon-padding)",
                speed_2x: "var(--ym-icon-padding)",
                syncLyrics: "var(--ym-icon-padding, 3px 2px 4px 2px)",
                trailer: "var(--ym-icon-padding, 2px 1px)",
                unavailable: "var(--ym-icon-padding, 2px)",
                unpin: "var(--ym-icon-padding, 2px 3px)",
                users: "var(--ym-icon-padding, 0)",
                vibe: "var(--ym-icon-padding, 1px 1px 2px 1px)",
                volume: "var(--ym-icon-padding, 4px 2px 3px 2px)",
                volumeOff: "var(--ym-icon-padding, 2.8px 2px 1.8px 2px)",
                yandexPlusEn: "var(--ym-icon-padding, 0)",
                yandexPlusRu: "var(--ym-icon-padding, 0)",
              });
          },
          9430: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Popover = void 0);
            let a = n(9541),
              o = n(5881),
              i = n(810),
              l = n(6011),
              s = n(6198),
              u = n(5853),
              c = r(n(4965));
            t.Popover = (e) => {
              let {
                  children: t,
                  offsetOptions: n,
                  strategy: r,
                  placement: d,
                  isMobile: f,
                  visuallyHiddenDismiss: p,
                  positionElement: v,
                  transform: m,
                  initialOpen: y = !1,
                  open: h,
                  onOpenChange: g,
                  disableFloatingStyles: x = !1,
                  overlayClassName: b,
                  transition: E,
                  style: _,
                  returnFocus: k,
                  isNested: w = !1,
                  onShow: P,
                  customRoleProps: S,
                  portalNode: R,
                } = e,
                [O, A] = (0, i.useState)(y),
                [T, C] = (0, i.useState)(null),
                L = (0, i.useRef)([]),
                j = (0, i.useRef)([]),
                I = (0, l.useListItem)(),
                M = null != h ? h : O,
                N = null != g ? g : A,
                [D, q] = t,
                B = (0, i.useCallback)(() => {
                  N(!1);
                }, [N]),
                H = (0, i.useId)(),
                z = (0, i.useId)(),
                {
                  refs: F,
                  floatingStyles: U,
                  context: K,
                } = (0, l.useFloating)({
                  strategy: r,
                  placement: d,
                  open: M,
                  onOpenChange: N,
                  middleware: [(0, l.offset)(n), (0, l.flip)(), (0, l.shift)()],
                  whileElementsMounted: l.autoUpdate,
                  transform: m,
                }),
                Y = (0, l.useTypeahead)(K, {
                  listRef: j,
                  onMatch: M ? C : void 0,
                  activeIndex: T,
                }),
                V = (0, l.useListNavigation)(K, {
                  listRef: L,
                  activeIndex: T,
                  nested: w,
                  onNavigate: C,
                }),
                G = (0, l.useFloatingTree)(),
                W = (0, l.useFloatingNodeId)(),
                Z = (0, l.useFloatingParentNodeId)();
              (0, i.useEffect)(() => {
                if (!G) return;
                let e = () => {
                    N(!1);
                  },
                  t = (e) => {
                    e.nodeId !== W && e.parentId === Z && N(!1);
                  };
                return (
                  G.events.on("click", e),
                  G.events.on("menuopen", t),
                  () => {
                    G.events.off("click", e), G.events.off("menuopen", t);
                  }
                );
              }, [G, W, Z, N]),
                (0, i.useEffect)(() => {
                  M && (null == P || P());
                }, [P, M]),
                (0, i.useEffect)(() => {
                  M &&
                    G &&
                    G.events.emit("menuopen", { parentId: Z, nodeId: W });
                }, [G, M, W, Z]),
                (0, i.useLayoutEffect)(() => {
                  v && F.setPositionReference(v);
                }, [F, v]);
              let { handlers: X } = (0, s.usePopoverSwipeable)({
                  ref: F.floating,
                  onClose: B,
                  placement: d,
                  disableSwipe: !f,
                  swipeableProps: { preventScrollOnSwipe: !0 },
                }),
                Q = (0, l.useMergeRefs)([
                  F.setFloating,
                  null == X ? void 0 : X.ref,
                ]),
                J = (0, l.useRole)(K, S),
                $ = (0, l.useDismiss)(K, { referencePress: !0 }),
                ee = (0, l.useClick)(K, { toggle: !w, ignoreMouse: w }),
                et = (0, l.useHover)(K, {
                  enabled: w,
                  handleClose: (0, l.safePolygon)({ blockPointerEvents: !0 }),
                }),
                en = (0, i.useCallback)((e) => {
                  e.stopPropagation();
                }, []),
                {
                  getReferenceProps: er,
                  getFloatingProps: ea,
                  getItemProps: eo,
                } = (0, l.useInteractions)([J, $, ee, et, V, Y]),
                { isMounted: ei, styles: el } = (0, l.useTransitionStyles)(
                  K,
                  E,
                ),
                es = (0, l.useMergeRefs)([F.setReference, I.ref]),
                eu =
                  D &&
                  (0, i.cloneElement)(D, {
                    ref: es,
                    ...er({ onClick: D.props.onClick }),
                    key: H,
                  }),
                ec = {
                  ref: Q,
                  style: (0, i.useMemo)(
                    () =>
                      f
                        ? {
                            ...(x ? {} : U),
                            ..._,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: "auto",
                            transform: "none",
                          }
                        : { ...(x ? {} : U), ..._ },
                    [f, x, U, _],
                  ),
                  ...ea(),
                  onMouseDown: null == X ? void 0 : X.onMouseDown,
                  children: (0, i.cloneElement)(q.props.children, {
                    onClose: B,
                    style: el,
                    key: z,
                  }),
                },
                ed = (0, i.cloneElement)(q, ec),
                ef = (0, i.useMemo)(
                  () => ({
                    activeIndex: T,
                    setActiveIndex: C,
                    getItemProps: eo,
                    isOpen: M,
                  }),
                  [T, eo, M],
                ),
                ep = w ? -1 : 0;
              return (0, a.jsxs)(u.PopoverContext.Provider, {
                value: ef,
                children: [
                  eu,
                  (0, a.jsx)(l.FloatingList, {
                    elementsRef: L,
                    children:
                      ei &&
                      (0, a.jsxs)(l.FloatingPortal, {
                        root: R,
                        children: [
                          (0, a.jsx)(l.FloatingOverlay, {
                            className: (0, o.clsx)(c.default.overlay, b),
                            onClick: en,
                            lockScroll: !0,
                          }),
                          (0, a.jsx)(l.FloatingFocusManager, {
                            context: K,
                            returnFocus: k,
                            initialFocus: ep,
                            visuallyHiddenDismiss: p,
                            children: ed,
                          }),
                        ],
                      }),
                  }),
                ],
              });
            };
          },
          1688: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.PopoverContentComponent = void 0);
            let a = n(9541),
              o = n(810),
              i = n(5881),
              l = r(n(5371));
            (t.PopoverContentComponent = (e) => {
              let { className: t, children: n, forwardRef: r, ...o } = e;
              return (0, a.jsx)("div", {
                className: (0, i.clsx)(l.default.root, t),
                ref: r,
                ...o,
                children: n,
              });
            }),
              (t.PopoverContent = (0, o.forwardRef)((e, n) =>
                (0, a.jsx)(t.PopoverContentComponent, { forwardRef: n, ...e }),
              ));
          },
          5853: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContext = void 0);
            let r = n(810);
            t.PopoverContext = (0, r.createContext)({
              getItemProps: () => ({}),
              activeIndex: null,
              setActiveIndex: () => {},
              isOpen: !1,
            });
          },
          5062: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.Popover = void 0);
            var r = n(9430);
            Object.defineProperty(t, "Popover", {
              enumerable: !0,
              get: function () {
                return r.Popover;
              },
            });
            var a = n(1688);
            Object.defineProperty(t, "PopoverContent", {
              enumerable: !0,
              get: function () {
                return a.PopoverContent;
              },
            });
          },
          7743: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let a = n(9541),
              o = n(5881),
              i = n(810),
              l = n(4721),
              s = r(n(390));
            function u(e) {
              let {
                forwardRef: t,
                variant: n,
                type: r = "text",
                size: i = "s",
                className: u,
                children: c,
                weight: d = "medium",
                ...f
              } = e;
              return (0, a.jsx)(l.Typography, {
                variant: n,
                ref: t,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default["root_".concat(r, "_").concat(i)],
                  s.default["root_weight_".concat(d)],
                  u,
                ),
                ...f,
                children: c,
              });
            }
            (t.CaptionComponent = u),
              (t.Caption = (0, i.forwardRef)((e, t) =>
                (0, a.jsx)(u, { forwardRef: t, ...e }),
              ));
          },
          404: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let a = n(9541),
              o = n(5881),
              i = n(810),
              l = n(4721),
              s = r(n(8544));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: n,
                weight: r = "bold",
                size: i = "s",
                className: u,
                children: c,
                ...d
              } = e;
              return (0, a.jsx)(l.Typography, {
                variant: n,
                ref: t,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default["root_size_".concat(i)],
                  s.default["root_weight_".concat(r)],
                  u,
                ),
                ...d,
                children: c,
              });
            }),
              (t.Heading = (0, i.forwardRef)((e, n) =>
                (0, a.jsx)(t.HeadingComponent, { forwardRef: n, ...e }),
              ));
          },
          4721: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let a = n(9541),
              o = n(5881),
              i = n(810),
              l = r(n(2524));
            function s(e) {
              let {
                  forwardRef: t,
                  style: n,
                  className: r,
                  children: i,
                  variant: s,
                  lineClamp: u,
                  ...c
                } = e,
                d = u && "string" == typeof i ? i : void 0;
              return (0, a.jsx)(s, {
                style: { ...n, WebkitLineClamp: u },
                ref: t,
                title: d,
                className: (0, o.clsx)(
                  l.default.root,
                  {
                    [l.default.root_clamp]: u && u > 0,
                    [l.default.root_clamp_oneline]: u && 1 === u,
                    [l.default.root_clamp_multiline]: u && u > 1,
                  },
                  r,
                ),
                ...c,
                children: i,
              });
            }
            (t.TypographyComponent = s),
              (t.Typography = (0, i.forwardRef)((e, t) =>
                (0, a.jsx)(s, { forwardRef: t, ...e }),
              ));
          },
          2582: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.Caption = void 0);
            var r = n(7743);
            Object.defineProperty(t, "Caption", {
              enumerable: !0,
              get: function () {
                return r.Caption;
              },
            });
            var a = n(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return a.Heading;
              },
            });
          },
          810: (e) => {
            e.exports = y;
          },
        },
        A = {};
      function T(e) {
        var t = A[e];
        if (void 0 !== t) return t.exports;
        var n = (A[e] = { exports: {} });
        return O[e].call(n.exports, n, n.exports, T), n.exports;
      }
      (T.d = (e, t) => {
        for (var n in t)
          T.o(t, n) &&
            !T.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (T.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (T.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var C = {};
      Object.defineProperty(C, "X$", { value: !0 }),
        (C.Wx = C.Lt = void 0),
        (r = T(8324)),
        Object.defineProperty(C, "Lt", {
          enumerable: !0,
          get: function () {
            return r.Dropdown;
          },
        }),
        (a = T(1057)),
        Object.defineProperty(C, "Wx", {
          enumerable: !0,
          get: function () {
            return a.Option;
          },
        });
      var L = C.Lt,
        j = C.Wx;
      C.X$;
      var I = n(28852),
        M = n(77036),
        N = n.n(M);
      let D = {
          [i.Y.DEFAULT]: (0, f.jsx)(P.Z, { id: "equalizer.default-preset" }),
          [i.Y.CUSTOM]: (0, f.jsx)(P.Z, { id: "equalizer.custom-preset" }),
          [i.Y.CLASSICAL]: (0, f.jsx)(P.Z, {
            id: "equalizer.classical-preset",
          }),
          [i.Y.CLUB]: (0, f.jsx)(P.Z, { id: "equalizer.club-preset" }),
          [i.Y.DANCE]: (0, f.jsx)(P.Z, { id: "equalizer.dance-preset" }),
          [i.Y.BASS_BOOST]: (0, f.jsx)(P.Z, {
            id: "equalizer.bass-boost-preset",
          }),
          [i.Y.BASS_AND_TREBLE_BOOST]: (0, f.jsx)(P.Z, {
            id: "equalizer.bass-and-treble-boost-preset",
          }),
          [i.Y.TREBLE_BOOST]: (0, f.jsx)(P.Z, {
            id: "equalizer.treble-boost-preset",
          }),
          [i.Y.SPEAKERS]: (0, f.jsx)(P.Z, { id: "equalizer.speakers-preset" }),
          [i.Y.LARGE_HALL]: (0, f.jsx)(P.Z, {
            id: "equalizer.large-hall-preset",
          }),
          [i.Y.CONCERT]: (0, f.jsx)(P.Z, { id: "equalizer.concert-preset" }),
          [i.Y.PARTY]: (0, f.jsx)(P.Z, { id: "equalizer.party-preset" }),
          [i.Y.POP]: (0, f.jsx)(P.Z, { id: "equalizer.pop-preset" }),
          [i.Y.REGGAE]: (0, f.jsx)(P.Z, { id: "equalizer.reggae-preset" }),
          [i.Y.ROCK]: (0, f.jsx)(P.Z, { id: "equalizer.rock-preset" }),
          [i.Y.SKA]: (0, f.jsx)(P.Z, { id: "equalizer.ska-preset" }),
          [i.Y.SOFT]: (0, f.jsx)(P.Z, { id: "equalizer.soft-preset" }),
          [i.Y.SOFT_ROCK]: (0, f.jsx)(P.Z, {
            id: "equalizer.soft-rock-preset",
          }),
          [i.Y.TECHNO]: (0, f.jsx)(P.Z, { id: "equalizer.techno-preset" }),
        },
        q = (0, v.Pi)((e) => {
          let { isDisabled: t } = e,
            { equalizer: n } = (0, l.oR4)(),
            r = (0, m.useCallback)(
              (e) => {
                let t = n.presets.get(e.id);
                t && n.changePreset(t.id);
              },
              [n],
            );
          return (0, f.jsx)(L, {
            isDisabled: t,
            className: N().root,
            onSelect: r,
            reference: (0, f.jsxs)(S.z, {
              radius: "xxxl",
              className: (0, p.W)(N().button, { [N().button_disabled]: t }),
              ...(0, x.BA)(x.bG.equalizer.EQUALIZER_PRESETS_BUTTON),
              children: [
                (0, f.jsx)(E.Caption, {
                  className: N().buttonText,
                  variant: "span",
                  size: "s",
                  weight: "medium",
                  children: D[n.currentPresetId],
                }),
                (0, f.jsx)(I.J, {
                  className: N().buttonIcon,
                  size: "xxs",
                  variant: "arrowDown",
                }),
              ],
            }),
            placement: "top",
            offsetOptions: -40,
            defaultValue: n.currentPresetId,
            containerClassName: N().container,
            ...(0, x.BA)(x.bG.equalizer.EQUALIZER_PRESETS_DROPDOWN),
            children: [...n.presets.values()].map((e) =>
              (0, f.jsx)(j, { id: e.id, label: D[e.id] }, e.id),
            ),
          });
        });
      var B = n(71230),
        H = n(16054),
        z = n.n(H);
      let F = (e) => {
          let {
            minValue: t,
            maxValue: n,
            className: r,
            label: a,
            isDisabled: o,
            onChange: i,
            value: l,
            ...s
          } = e;
          return (0, f.jsxs)("div", {
            className: (0, p.W)(z().root, r),
            ...(0, x.BA)(x.bG.equalizer.EQUALIZER_SLIDER_CONTAINER),
            children: [
              (0, f.jsxs)("div", {
                className: z().container,
                children: [
                  (0, f.jsx)("div", { className: z().serif }),
                  (0, f.jsx)(B.i, {
                    disabled: o,
                    className: (0, p.W)(z().slider, z().important),
                    thumbSize: "m",
                    trackSize: "xxs",
                    onChange: i,
                    value: l,
                    showThumbVariant: "always",
                    step: 0.1,
                    min: t,
                    max: n,
                    ...s,
                  }),
                ],
              }),
              (0, f.jsx)(E.Caption, {
                "aria-hidden": !0,
                className: (0, p.W)(z().label, { [z().label_disabled]: o }),
                variant: "div",
                weight: "normal",
                size: "xs",
                children: a,
              }),
            ],
          });
        },
        U = {
          enter: w().equalizer_enter,
          enterActive: w().equalizer_enter_active,
          exit: w().equalizer_exit,
          exitActive: w().equalizer_exit_active,
        },
        K = (0, v.Pi)((e) => {
          var t;
          let { title: n, className: r, isExpanded: a, isDisabled: o } = e,
            i = (0, m.useRef)(null),
            { formatMessage: s } = (0, h.Z)(),
            { equalizer: u } = (0, l.oR4)(),
            c = u.isEnabled
              ? s({ id: "equalizer.disable-equalizer" })
              : s({ id: "equalizer.enable-equalizer" }),
            d = (0, m.useCallback)(
              (e) => {
                u.setEnabled(e);
              },
              [u],
            ),
            v = (0, m.useCallback)(
              (e, t) => (n) => {
                u.changeAmp(e, n, t);
              },
              [u],
            ),
            y = (0, m.useCallback)(
              (e) => {
                u.changePreamp(e);
              },
              [u],
            ),
            k = (0, m.useCallback)((e) => Math.round(10 * e) / 10, []);
          return (0, f.jsxs)("div", {
            className: (0, p.W)(w().root, r),
            ...(0, x.BA)(x.bG.equalizer.EQUALIZER_CONTAINER),
            children: [
              (0, f.jsxs)("div", {
                className: w().header,
                children: [
                  (0, f.jsx)(E.Caption, {
                    className: w().title,
                    variant: "span",
                    size: "l",
                    weight: "medium",
                    ...(0, x.BA)(x.bG.equalizer.EQUALIZER_TITLE),
                    children: n,
                  }),
                  (0, f.jsx)(b.Z, {
                    "aria-label": c,
                    isChecked: u.isEnabled,
                    onChange: d,
                    ...(0, x.BA)(x.bG.equalizer.EQUALIZER_TOGGLE),
                  }),
                ],
              }),
              (0, f.jsx)(g.Z, {
                in: a,
                nodeRef: i,
                timeout: 200,
                unmountOnExit: !0,
                classNames: U,
                children: (0, f.jsxs)("div", {
                  ref: i,
                  className: (0, p.W)(w().equalizer, {
                    [w().equalizer_disabled]: o,
                  }),
                  ...(0, x.BA)(x.bG.equalizer.EQUALIZER_FREQUENCIES_CONTAINER),
                  children: [
                    (0, f.jsxs)("div", {
                      className: w().container,
                      children: [
                        (0, f.jsxs)("div", {
                          className: w().preamp,
                          children: [
                            (0, f.jsx)(F, {
                              isDisabled: o,
                              minValue: 0.5,
                              maxValue: 1.5,
                              value: u.currentPreampValue,
                              onChange: y,
                              label: s({ id: "equalizer.preamp-level" }),
                              "aria-label": s({
                                id: "equalizer.slider-preamp-label",
                              }),
                              ...(0, x.BA)(
                                x.bG.equalizer.EQUALIZER_PREAMP_SLIDER,
                              ),
                            }),
                            (0, f.jsxs)("div", {
                              className: w().labels,
                              "aria-hidden": !0,
                              children: [
                                (0, f.jsx)(E.Caption, {
                                  className: w().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: s(
                                    { id: "equalizer.amp-label" },
                                    { value: 12 },
                                  ),
                                }),
                                (0, f.jsx)(E.Caption, {
                                  className: w().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: s(
                                    { id: "equalizer.amp-label" },
                                    { value: 0 },
                                  ),
                                }),
                                (0, f.jsx)(E.Caption, {
                                  className: w().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: s(
                                    { id: "equalizer.amp-label" },
                                    { value: -12 },
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, f.jsx)("div", {
                          className: w().frequencies,
                          children:
                            null === (t = u.currentPreset) || void 0 === t
                              ? void 0
                              : t.frequencies.map((e, t) => {
                                  let n = _(e.key, s),
                                    r = k(e.value);
                                  return (0, f.jsx)(
                                    F,
                                    {
                                      isDisabled: o,
                                      minValue: -12,
                                      maxValue: 12,
                                      value: e.value,
                                      label: n,
                                      onChange: v(e.key, t),
                                      "aria-label": s(
                                        {
                                          id: "equalizer.slider-frequency-label",
                                        },
                                        { label: n, value: r },
                                      ),
                                      ...(0, x.BA)(
                                        x.bG.equalizer
                                          .EQUALIZER_FREQUENCY_SLIDER,
                                      ),
                                    },
                                    n,
                                  );
                                }),
                        }),
                      ],
                    }),
                    (0, f.jsx)(q, { isDisabled: o }),
                  ],
                }),
              }),
            ],
          });
        });
      var Y = n(89352);
      let V = (0, v.Pi)(() => {
        let { formatMessage: e } = (0, h.Z)(),
          { equalizer: t } = (0, l.oR4)();
        return (0, f.jsx)(Y.u, {
          className: w().modal,
          headerClassName: w().modalHeader,
          contentClassName: w().modalContent,
          title: e({ id: "equalizer.title" }),
          open: t.modal.isOpened,
          onOpenChange: t.modal.onOpenChange,
          onClose: t.modal.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          closeButtonProps: (0, x.BA)(
            x.bG.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON,
          ),
          ...(0, x.BA)(x.bG.equalizer.EQUALIZER_MODAL),
          children: (0, f.jsx)(K, {
            title: e({ id: "equalizer.enable" }),
            isExpanded: !0,
            isDisabled: !t.isEnabled,
          }),
        });
      });
    },
    10855: function (e) {
      e.exports = {
        header: "Equalizer_header__oL2Ii",
        modal: "Equalizer_modal__yW0lz",
        modalHeader: "Equalizer_modalHeader__BaeWi",
        modalContent: "Equalizer_modalContent__xbClm",
        title: "Equalizer_title__oP3e2",
        frequencies: "Equalizer_frequencies__M9bt3",
        label: "Equalizer_label__cAYfh",
        equalizer: "Equalizer_equalizer__M9Utp",
        equalizer_disabled: "Equalizer_equalizer_disabled__NciRX",
        equalizer_enter: "Equalizer_equalizer_enter___0_xp",
        equalizer_enter_active: "Equalizer_equalizer_enter_active__hRAgb",
        "enter-collapse": "Equalizer_enter-collapse__Ypuhz",
        equalizer_exit: "Equalizer_equalizer_exit__wroQI",
        equalizer_exit_active: "Equalizer_equalizer_exit_active__68Faq",
        "exit-collapse": "Equalizer_exit-collapse____a2I",
        preamp: "Equalizer_preamp__hfuqj",
        container: "Equalizer_container__wK7dV",
        labels: "Equalizer_labels__rE8Hc",
      };
    },
    77036: function (e) {
      e.exports = {
        root: "EqualizerPresets_root__b2gp7",
        buttonIcon: "EqualizerPresets_buttonIcon__DgPG8",
        buttonText: "EqualizerPresets_buttonText__cy2_S",
        button: "EqualizerPresets_button__D8s_l",
        button_disabled: "EqualizerPresets_button_disabled__BcN1s",
        container: "EqualizerPresets_container__ABVY8",
      };
    },
    16054: function (e) {
      e.exports = {
        root: "EqualizerSlider_root__oyr_3",
        container: "EqualizerSlider_container__J9Te7",
        slider: "EqualizerSlider_slider__YC0_X",
        important: "EqualizerSlider_important____ilL",
        serif: "EqualizerSlider_serif__CJgYC",
        label: "EqualizerSlider_label__4wtBj",
        label_disabled: "EqualizerSlider_label_disabled___26v5",
      };
    },
    5763: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cy: function () {
          return w;
        },
        l0: function () {
          return eb;
        },
        MD: function () {
          return L;
        },
        Y$: function () {
          return e_;
        },
        Y: function () {
          return x;
        },
        kf: function () {
          return ey;
        },
        CO: function () {
          return em;
        },
        bo: function () {
          return eP;
        },
        V2: function () {
          return ef;
        },
        sD: function () {
          return eE;
        },
        CM: function () {
          return I;
        },
        vv: function () {
          return eS;
        },
        bQ: function () {
          return eL;
        },
        wQ: function () {
          return eA;
        },
      });
      var r,
        a,
        o,
        i,
        l,
        s,
        u,
        c,
        d,
        f,
        p,
        v,
        m,
        y,
        h,
        g,
        x,
        b,
        E,
        _,
        k = n(76740);
      class w {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.afterContextSet.tap("ApplyContextPlugin", () => {
            let e = n.state.currentContext.value;
            e && e instanceof k.$n && e.apply({ hooks: t, playback: n });
          });
        }
      }
      var P = n(84338);
      let S = null;
      function R(e) {
        let t = e.state.queueState.index.value,
          n = e.state.queueState.order.value,
          r = e.state.currentContext.value,
          a = void 0 !== n[t - 1];
        r && (r.availableActions.moveBackward.value = a),
          null !== S && (S(), (S = null)),
          0 !== t ||
            (0, P.Q7)(r) ||
            (S = e.state.playerState.progress.onChange((e) => {
              r &&
                (r.availableActions.moveBackward.value =
                  !!e && e.position > k.lz);
            }));
      }
      var O = n(40193);
      function A(e) {
        let { value: t } = e.state.currentContext,
          { value: n } = e.state.queueState.currentEntity;
        if (void 0 !== t && void 0 !== n) {
          let { meta: r } = n.entity.data;
          (0, P.xA)(t) ||
          (0, P.Q7)(t) ||
          ("type" in r && r.type && O.UE.includes(r.type))
            ? ((t.availableActions.repeat.value = !1),
              (t.availableActions.shuffle.value = !1),
              e.state.queueState.repeat.value !== k.zq.NONE &&
                e.setRepeatMode(k.zq.NONE),
              e.state.queueState.shuffle.value && e.toggleShuffle())
            : ((t.availableActions.repeat.value = !0),
              (t.availableActions.shuffle.value = !0));
        }
      }
      let T = (e) => {
        let t =
          "albums" in e &&
          e.albums &&
          e.albums.length > 0 &&
          e.albums[0] &&
          e.albums[0].type === O.VZ.PODCAST;
        return !!(("type" in e && e.type && O.UE.includes(e.type)) || t);
      };
      function C(e) {
        let { value: t } = e.state.currentContext,
          { value: n } = e.state.queueState.currentEntity;
        if (void 0 !== t && void 0 !== n) {
          let { meta: e } = n.entity.data,
            r = T(e);
          t.availableActions.speed.value = !!r;
        }
      }
      class L {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.afterContextSet.tap("AvailableActionsPlugin", () => {
            A(n), C(n);
          }),
            t.beforeMediaStartPlaying.tap("AvailableActionsPlugin", () => {
              A(n), C(n);
            }),
            n.state.queueState.entityList.onChange(() => {
              R(n);
            }),
            n.state.queueState.index.onChange(() => {
              R(n);
            });
        }
      }
      var j = n(63665);
      class I {
        apply(e) {
          let { playback: t, hooks: n } = e;
          t.state.playerState.event.onChange(() => {
            let { currentEntity: e } = t.state.queueState;
            if (e.value)
              switch (t.state.playerState.event.value) {
                case k.KX.PAUSED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.NOT_PLAYING,
                    reason: "event-".concat(k.KX.PAUSED),
                  });
                  break;
                case k.KX.STALLED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.NOT_PLAYING,
                    reason: "event-".concat(k.KX.STALLED),
                  });
                  break;
                case k.KX.PLAYING:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.PLAYING,
                    reason: "event-".concat(k.KX.PLAYING),
                  });
                  break;
                case k.KX.MEDIA_ELEMENT_ERROR:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.NOT_PLAYING,
                    reason: "event-".concat(k.KX.MEDIA_ELEMENT_ERROR),
                  });
              }
          }),
            n.beforeEntityPlayingProcessStart.tapPromise(
              "TotalPlayedTimePlugin",
              () => {
                let { currentEntity: e } = t.state.queueState;
                return (
                  e.value && e.value.entity.clearTimeStagesOfPlayback(),
                  Promise.resolve()
                );
              },
            ),
            n.afterMediaStartPlaying.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.PLAYING,
                    reason: "hook-afterMediaStartPlaying",
                  }),
                Promise.resolve()
              );
            }),
            n.afterMediaEndPlaying.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.NOT_PLAYING,
                    reason: "hook-afterMediaEndPlaying",
                  }),
                Promise.resolve()
              );
            }),
            n.beforeEntityChange.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.NOT_PLAYING,
                    reason: "hook-beforeEntityChange",
                  }),
                Promise.resolve()
              );
            }),
            n.beforeContextSet.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: j.EE.NOT_PLAYING,
                    reason: "hook-beforeContextSet",
                  }),
                Promise.resolve()
              );
            });
        }
      }
      var M = n(8655),
        N = n(23897),
        D = n(76894);
      function q() {
        return new Date().toISOString();
      }
      function B(e) {
        var t, n, r, a;
        let o;
        let {
            contextEntityPair: i,
            totalPlayedSeconds: l,
            endPositionSeconds: s,
            type: u,
            maxPlayerStage: c,
          } = e,
          { entity: d, context: f } = i,
          p = String(d.data.meta.id),
          v = (function (e) {
            let t;
            if ("albums" in e.data.meta) {
              let {
                data: {
                  meta: { albums: n },
                },
              } = e;
              if (n) {
                let e = n[0];
                e && (t = String(e.id));
              }
            }
            return t;
          })(d),
          m = 0;
        (0, j.YM)(d)
          ? "smartPreviewParams" in d.data.meta &&
            (null === (t = d.data.meta.smartPreviewParams) || void 0 === t
              ? void 0
              : t.durationMs) &&
            (m =
              (null === (n = d.data.meta.smartPreviewParams) || void 0 === n
                ? void 0
                : n.durationMs) / 1e3)
          : "durationMs" in d.data.meta &&
            d.data.meta.durationMs &&
            (m = d.data.meta.durationMs / 1e3);
        let y = l,
          h = s;
        0.5 > Math.abs(m - l) && (y = m),
          0.5 > Math.abs(m - s) && (h = m),
          (o = (0, P.Q7)(f)
            ? {
                generativeStreamId: String(
                  null === (r = f.data.meta.stream) || void 0 === r
                    ? void 0
                    : r.id,
                ),
              }
            : { trackId: p });
        let g = {
          playId: d.playId,
          timestamp: q(),
          totalPlayedSeconds: y,
          endPositionSeconds: h,
          trackLengthSeconds: m,
          albumId: v,
          from: f.from,
          context: f.data.type,
          contextItem: String(f.data.meta.id),
          addTracksToPlayerTime: d.addTracksToPlayerTime,
          audioAuto: "none",
          audioOutputName: "Динамик",
          audioOutputType: "Speaker",
          maxPlayerStage: c,
          ...o,
        };
        if (
          ((0, P.xA)(f) &&
            f.data.meta.session &&
            ((g.radioSessionId = f.data.meta.session.radioSessionId),
            (g.context = "radio"),
            (g.contextItem = f.data.meta.session.wave.stationId)),
          (0, P.KT)(f) &&
            ((g.playlistId = ""
              .concat(f.data.meta.uid, ":")
              .concat(f.data.meta.kind)),
            (g.contextItem = ""
              .concat(f.data.meta.uid, ":")
              .concat(f.data.meta.kind))),
          (0, P.dt)(f))
        ) {
          let e = [P.Zc.Search, P.Zc.Other],
            t =
              null !== (a = f.data.overrideContextType) && void 0 !== a
                ? a
                : P.Zc.Other;
          (g.context = t), e.includes(t) && (g.contextItem = null);
        }
        return (0, j.YM)(d) && (g.smartPreview = !0), { type: u, data: g };
      }
      ((r = p || (p = {})).START = "start"),
        (r.END = "end"),
        (r.PLAYING = "playing");
      var H = n(41928),
        z = n(46416),
        F = n(74944),
        U = n(5646),
        K = n(41262);
      let Y = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "playId" in e &&
            "totalPlayedSeconds" in e
          ),
        V = (e) => {
          let t = [
            e.find((e) => 0 === e.totalPlayedSeconds),
            (0, F.Z)(e, "totalPlayedSeconds"),
          ];
          return (0, U.Z)(t.filter(Y), "totalPlayedSeconds");
        },
        G = (e) => {
          let t = (0, z.Z)((0, H.Z)(e, "playId"), V);
          return (0, K.Z)(t);
        };
      var W = n(37810);
      class Z extends W.y {
        constructor(e, { code: t = "E_PLAYS", ...n } = {}) {
          super(e, { code: t, ...n }),
            (0, M._)(this, "name", "PlaysException"),
            Object.setPrototypeOf(this, Z.prototype);
        }
      }
      var X = n(29348);
      class Q {
        get delete() {
          var e;
          return null === (e = this.cursor.delete) || void 0 === e
            ? void 0
            : e.bind(this.cursor);
        }
        get update() {
          var e;
          return null === (e = this.cursor.update) || void 0 === e
            ? void 0
            : e.bind(this.cursor);
        }
        [Symbol.asyncIterator]() {
          return this.cursor[Symbol.asyncIterator]();
        }
        constructor(e) {
          Object.defineProperty(this, "cursor", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
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
            (this.direction = e.direction),
            (this.request = e.request),
            (this.primaryKey = e.primaryKey),
            (this.key = e.key),
            (this.advance = e.advance.bind(e)),
            (this.continue = e.continue.bind(e)),
            (this.continuePrimaryKey = e.continuePrimaryKey.bind(e));
        }
      }
      class J extends Q {
        [Symbol.asyncIterator]() {
          return this.cursor[Symbol.asyncIterator]();
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "cursor", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            }),
            Object.defineProperty(this, "value", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.value = e.value);
        }
      }
      var $ = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(i, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      class ee {
        get(e) {
          return $(this, void 0, void 0, function* () {
            return this.index.get(e);
          });
        }
        getAll(e, t) {
          return $(this, void 0, void 0, function* () {
            return this.index.getAll(e, t);
          });
        }
        getAllKeys(e, t) {
          return $(this, void 0, void 0, function* () {
            return this.index.getAllKeys(e, t);
          });
        }
        getKey(e) {
          return $(this, void 0, void 0, function* () {
            return this.index.getKey(e);
          });
        }
        count(e) {
          return $(this, void 0, void 0, function* () {
            return this.index.count(e);
          });
        }
        openCursor(e, t) {
          return $(this, void 0, void 0, function* () {
            let n = yield this.index.openCursor(e, t);
            return n && new J(n);
          });
        }
        openKeyCursor(e, t) {
          return $(this, void 0, void 0, function* () {
            let n = yield this.index.openKeyCursor(e, t);
            return n && new Q(n);
          });
        }
        [Symbol.asyncIterator]() {
          return this.index[Symbol.asyncIterator]();
        }
        iterate(e, t) {
          return this.index.iterate(e, t);
        }
        constructor(e) {
          Object.defineProperty(this, "index", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
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
            (this.keyPath = e.keyPath),
            (this.multiEntry = e.multiEntry),
            (this.name = e.name),
            (this.unique = e.unique);
        }
      }
      var et = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(i, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      class en {
        get indexNames() {
          return this.objectStore.indexNames;
        }
        get put() {
          var e;
          return null === (e = this.objectStore.put) || void 0 === e
            ? void 0
            : e.bind(this.objectStore);
        }
        get add() {
          var e;
          return null === (e = this.objectStore.add) || void 0 === e
            ? void 0
            : e.bind(this.objectStore);
        }
        get clear() {
          var e;
          return null === (e = this.objectStore.clear) || void 0 === e
            ? void 0
            : e.bind(this.objectStore);
        }
        get delete() {
          var e;
          return null === (e = this.objectStore.delete) || void 0 === e
            ? void 0
            : e.bind(this.objectStore);
        }
        createIndex(e, t, n) {
          return this.objectStore.createIndex
            ? new ee(this.objectStore.createIndex(e, t, n))
            : null;
        }
        deleteIndex(e) {
          return this.objectStore.deleteIndex(e);
        }
        count(e) {
          return et(this, void 0, void 0, function* () {
            return this.objectStore.count(e);
          });
        }
        get(e) {
          return et(this, void 0, void 0, function* () {
            return this.objectStore.get(e);
          });
        }
        getAll(e, t) {
          return et(this, void 0, void 0, function* () {
            return this.objectStore.getAll(e, t);
          });
        }
        getAllKeys(e, t) {
          return et(this, void 0, void 0, function* () {
            return this.objectStore.getAllKeys(e, t);
          });
        }
        getKey(e) {
          return et(this, void 0, void 0, function* () {
            return this.objectStore.getKey(e);
          });
        }
        index(e) {
          return new ee(this.objectStore.index(e));
        }
        openKeyCursor(e, t) {
          return et(this, void 0, void 0, function* () {
            let n = yield this.objectStore.openKeyCursor(e, t);
            return n && new Q(n);
          });
        }
        openCursor(e, t) {
          return et(this, void 0, void 0, function* () {
            let n = yield this.objectStore.openCursor(e, t);
            return n && new J(n);
          });
        }
        iterate(e, t) {
          return this.objectStore.iterate(e, t);
        }
        [Symbol.asyncIterator]() {
          return this.objectStore[Symbol.asyncIterator]();
        }
        constructor(e) {
          Object.defineProperty(this, "objectStore", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
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
            (this.autoIncrement = e.autoIncrement),
            (this.keyPath = e.keyPath),
            (this.name = e.name);
        }
      }
      class er {
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
        objectStore(e) {
          return new en(this.transaction.objectStore(e));
        }
        addEventListener(e, t, n) {
          return this.transaction.addEventListener(e, t, n);
        }
        removeEventListener(e, t, n) {
          return this.transaction.removeEventListener(e, t, n);
        }
        set onabort(e) {
          this.transaction.onabort = e;
        }
        set onerror(e) {
          this.transaction.onerror = e;
        }
        set oncomplete(e) {
          this.transaction.oncomplete = e;
        }
        dispatchEvent(e) {
          return this.transaction.dispatchEvent(e);
        }
        constructor(e) {
          Object.defineProperty(this, "transaction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
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
            (this.durability = e.durability),
            (this.mode = e.mode),
            (this.objectStoreNames = e.objectStoreNames);
        }
      }
      var ea = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(i, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      class eo {
        get objectStoreNames() {
          return this.database.objectStoreNames;
        }
        transaction(e, t, n) {
          return new er(this.database.transaction(e, t, n));
        }
        createObjectStore(e, t) {
          return new en(this.database.createObjectStore(e, t));
        }
        deleteObjectStore(e) {
          return this.database.deleteObjectStore(e);
        }
        get(e, t) {
          return ea(this, void 0, void 0, function* () {
            return this.database.get(e, t);
          });
        }
        getAll(e, t, n) {
          return ea(this, void 0, void 0, function* () {
            return this.database.getAll(e, t, n);
          });
        }
        add(e, t, n) {
          return ea(this, void 0, void 0, function* () {
            return this.database.add(e, t, n);
          });
        }
        put(e, t, n) {
          return ea(this, void 0, void 0, function* () {
            return this.database.put(e, t, n);
          });
        }
        delete(e, t) {
          return ea(this, void 0, void 0, function* () {
            return this.database.delete(e, t);
          });
        }
        clear(e) {
          return ea(this, void 0, void 0, function* () {
            return this.database.clear(e);
          });
        }
        count(e, t) {
          return ea(this, void 0, void 0, function* () {
            return this.database.count(e, t);
          });
        }
        getKey(e, t) {
          return ea(this, void 0, void 0, function* () {
            return this.database.getKey(e, t);
          });
        }
        getAllKeys(e, t, n) {
          return ea(this, void 0, void 0, function* () {
            return this.database.getAllKeys(e, t, n);
          });
        }
        countFromIndex(e, t, n) {
          return ea(this, void 0, void 0, function* () {
            return this.database.countFromIndex(e, t, n);
          });
        }
        getFromIndex(e, t, n) {
          return ea(this, void 0, void 0, function* () {
            return this.database.getFromIndex(e, t, n);
          });
        }
        getAllFromIndex(e, t, n, r) {
          return ea(this, void 0, void 0, function* () {
            return this.database.getAllFromIndex(e, t, n, r);
          });
        }
        getAllKeysFromIndex(e, t, n, r) {
          return ea(this, void 0, void 0, function* () {
            return this.database.getAllKeysFromIndex(e, t, n, r);
          });
        }
        getKeyFromIndex(e, t, n) {
          return ea(this, void 0, void 0, function* () {
            return this.database.getKeyFromIndex(e, t, n);
          });
        }
        addEventListener(e, t, n) {
          this.database.addEventListener(e, t, n);
        }
        removeEventListener(e, t, n) {
          this.database.removeEventListener(e, t, n);
        }
        set onabort(e) {
          this.database.onabort = e;
        }
        set onclose(e) {
          this.database.onclose = e;
        }
        set onerror(e) {
          this.database.onerror = e;
        }
        set onversionchange(e) {
          this.database.onversionchange = e;
        }
        close() {
          return this.database.close();
        }
        dispatchEvent(e) {
          return this.database.dispatchEvent(e);
        }
        constructor(e) {
          Object.defineProperty(this, "database", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
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
            (this.version = e.version),
            (this.name = e.name);
        }
      }
      var ei = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(i, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      class el {
        openDB(e) {
          let {
            onBlocked: t,
            onBlocking: n,
            onTerminated: r,
            onUpgrade: a,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          return ei(this, void 0, void 0, function* () {
            let o = yield (0, X.X3)(this.name, e, {
              blocked: t,
              blocking: n,
              terminated: r,
              upgrade: (e, t, n, r, o) => {
                let i = new eo(e);
                null == a || a(i, t, n, new er(r), o);
              },
            });
            return new eo(o);
          });
        }
        deleteDB(e) {
          let { onBlocked: t } = e;
          return ei(this, void 0, void 0, function* () {
            yield (0, X.Lj)(this.name, { blocked: t });
          });
        }
        constructor(e) {
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        }
      }
      let es = "playsHeartBeats";
      class eu extends W.y {
        constructor(e, { code: t = "E_PLAYS_IDB_STORE", ...n } = {}) {
          super(e, { code: t, ...n }),
            (0, M._)(this, "name", "PlaysStoreException"),
            Object.setPrototypeOf(this, eu.prototype);
        }
      }
      let ec = () => "".concat("music_plays", "_").concat("1.0.0");
      class ed {
        setErrorHandler(e) {
          this.errorHandler = e;
        }
        storePlaysData(e) {
          return this.executeTransaction((t) => t.put(es, e)).catch((e) => {
            this.logError("Saving Play Error", e);
          });
        }
        getStoredPlaysData() {
          return this.executeTransaction((e) => e.getAll(es), {
            defaultValue: [],
          }).catch((e) => (this.logError("Error getting Plays", e), []));
        }
        deleteAllByPlayId(e) {
          let t = (e) =>
            e ? e.delete().then(() => e.continue().then(t)) : Promise.resolve();
          return this.getCursorByPlayId(e)
            .then(t)
            .catch((e) => {
              this.logError("Error deleting Plays", e);
            });
        }
        onBlockedHandler() {
          this.closeConnection(this.idb).then(() => {
            this.idb = this.openIdb({
              onBlocked: () => {
                this.closeConnection(this.idb).then(() => {
                  this.setIsNotAvailable();
                });
              },
              onTerminated: () => this.onTerminatedHandler(),
            });
          });
        }
        onTerminatedHandler() {
          this.idb = this.openIdb({
            onBlocked: () => this.onBlockedHandler(),
            onTerminated: () => this.setIsNotAvailable(),
          });
        }
        openIdb(e) {
          return new el(this.idbName).openDB(1, {
            onBlocked: (t, n, r) => {
              var a;
              this.logError("Connection has been blocked"),
                null == e ||
                  null === (a = e.onBlocked) ||
                  void 0 === a ||
                  a.call(e, t, n, r);
            },
            onTerminated: () => {
              var t;
              this.logError("Storage has been terminated"),
                null == e ||
                  null === (t = e.onTerminated) ||
                  void 0 === t ||
                  t.call(e);
            },
            onUpgrade: (e) => {
              let t = e.createObjectStore(es, {
                keyPath: "id",
                autoIncrement: !0,
              });
              t.createIndex("playId", "playId", { unique: !1 }),
                t.createIndex("trackId", "trackId", { unique: !1 });
            },
          });
        }
        setIsNotAvailable() {
          this.idbIsNotAvailable = !0;
        }
        closeConnection(e) {
          return e
            .then((e) => {
              e && e.close();
            })
            .catch((e) => {
              this.logError("Error while try to close connection", e);
            });
        }
        getCursorByPlayId(e) {
          return this.executeTransaction(
            (t) =>
              t
                .transaction([es], "readwrite")
                .objectStore(es)
                .index("playId")
                .openCursor(e),
            { defaultValue: null },
          );
        }
        executeTransaction(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.idbIsNotAvailable
            ? Promise.resolve(null == t ? void 0 : t.defaultValue)
            : this.idb.then((n) =>
                n ? e(n) : Promise.resolve(null == t ? void 0 : t.defaultValue),
              );
        }
        logError(e, t) {
          var n;
          let r = "[IndexedDB]["
            .concat(this.idbName, ".")
            .concat(es, "]: ")
            .concat(e);
          null === (n = this.errorHandler) ||
            void 0 === n ||
            n.call(this, new eu(r, { data: { originalError: String(t) } }));
        }
        constructor() {
          (0, M._)(this, "idb", void 0),
            (0, M._)(this, "errorHandler", void 0),
            (0, M._)(this, "idbIsNotAvailable", !1),
            (0, M._)(this, "idbName", ec()),
            (this.idb = this.openIdb({
              onBlocked: () => this.onBlockedHandler(),
              onTerminated: () => this.onTerminatedHandler(),
            }).catch((e) => {
              this.logError("Open storage error", e);
            }));
        }
      }
      class ef {
        apply(e) {
          let { hooks: t, playback: n } = e;
          this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
            this.playsStore.setErrorHandler((e) => {
              t.afterError.promise(e);
            }),
            n.state.playerState.event.onChange(() => {
              let { currentEntity: e } = n.state.queueState;
              e.value &&
                n.state.playerState.event.value === k.KX.PLAYING &&
                this.changePlayerStageByPlayId({
                  playId: e.value.entity.playId,
                  stage: O.KZ.PLAY,
                });
            });
          let r = (0, N.Z)(
            () => {
              let e = n.state.queueState.currentEntity.value;
              if (!e || (0, P.Q7)(e.context)) return;
              let t = B({
                type: p.PLAYING,
                contextEntityPair: e,
                totalPlayedSeconds: e.entity.totalPlayedSeconds,
                endPositionSeconds: n.state.playerState.progress.value.position,
                maxPlayerStage: O.KZ.PLAY,
              });
              this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
                t.data.totalPlayedSeconds > 0 &&
                this.playsStore.storePlaysData(t.data);
            },
            this.storePlaysProgressIntervalMs,
            { trailing: !1 },
          );
          this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
            n.state.playerState.progress.onChange(r),
            t.beforeEntityPlayingProcessStart.tapPromise(
              "PlaysPlugin",
              () => (this.sendStartEntityPlay(n, t), Promise.resolve()),
            ),
            t.afterMediaEndPlaying.tapPromise("PlaysPlugin", () => {
              let {
                index: { value: e },
                entityList: { value: r },
                repeat: { value: a },
              } = n.state.queueState;
              return (
                (e === r.length - 1 || a === k.zq.ONE) &&
                  this.sendEndEntityPlay(n, t),
                Promise.resolve()
              );
            }),
            t.afterError.tapPromise(
              "PlaysPlugin",
              (e) => (
                (e instanceof D.Tb || e instanceof k.YR) &&
                  this.sendEndEntityPlay(n, t),
                Promise.resolve()
              ),
            ),
            t.beforeContextSet.tapPromise("PlaysPlugin", () =>
              this.sendCurrentEntityEndPlay(n, t),
            ),
            t.beforeEntityChange.tapPromise("PlaysPlugin", () =>
              this.sendCurrentEntityEndPlay(n, t),
            );
        }
        isLocalStoredPlaysDataEnabled(e) {
          var t;
          return !!(
            e &&
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableLocalStoredPlaysData)
          );
        }
        setPlaysDataForSending(e) {
          e.forEach((e) => {
            let { playId: t } = e;
            this.sendingInProgressForPlayId.set(t);
          });
        }
        clearSendedPlaysData(e) {
          e.forEach((e) => {
            let { playId: t } = e;
            this.sendingInProgressForPlayId.has(t) &&
              this.sendingInProgressForPlayId.delete(t);
          });
        }
        filterPlaysForSending(e) {
          return G(
            e.filter((e) => {
              let { playId: t } = e;
              return !this.sendingInProgressForPlayId.has(t);
            }),
          );
        }
        sendPlaysData(e) {
          let t = Promise.resolve([]);
          return (
            this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
              (t = this.playsStore.getStoredPlaysData()),
            t
              .then((t) => {
                let n = this.filterPlaysForSending([...t, e]);
                return (this.setPlaysDataForSending(n), n.length)
                  ? this.playsResource
                      .sendPlays({ clientNow: q(), plays: n })
                      .then((t) => {
                        this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
                          ("ok" === t
                            ? Promise.all(
                                n.map((e) => {
                                  let { playId: t } = e;
                                  this.isLocalStoredPlaysDataEnabled(
                                    this.playsStore,
                                  ) && this.playsStore.deleteAllByPlayId(t);
                                }),
                              )
                            : this.playsStore.storePlaysData(e));
                      })
                      .finally(() => {
                        this.clearSendedPlaysData(n);
                      })
                  : Promise.resolve();
              })
              .catch((t) => {
                if (this.isLocalStoredPlaysDataEnabled(this.playsStore))
                  this.playsStore.storePlaysData(e).then(() => {
                    throw t;
                  });
                else throw t;
              })
          );
        }
        sendCurrentEntityEndPlay(e, t) {
          if (
            e.state.queueState.currentEntity.value &&
            e.state.currentContext.value
          ) {
            if ((0, P.xA)(e.state.currentContext.value))
              return this.sendEndEntityPlay(e, t);
            this.sendEndEntityPlay(e, t);
          }
          return Promise.resolve();
        }
        sendStartEntityPlay(e, t) {
          let n = e.state.queueState.currentEntity.value;
          try {
            if (n) {
              n.entity.addTracksToPlayerTime = ""
                .concat(Math.random().toString().slice(2), "-")
                .concat(Math.ceil(Number(new Date()) / 1e3));
              let r = B({
                type: p.START,
                contextEntityPair: n,
                totalPlayedSeconds: 0,
                endPositionSeconds: 0,
              });
              if (
                (r.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new Z("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: n.entity.timeStagesOfPlayback,
                        contextId: n.context.data.meta.id,
                        entityId: n.entity.data.meta.id,
                        totalPlayedSeconds: r.data.totalPlayedSeconds,
                        trackLengthSeconds: r.data.trackLengthSeconds,
                        playId: r.data.playId,
                        isOnStart: !0,
                        entityListLength:
                          e.state.queueState.entityList.value.length,
                        index: e.state.queueState.index.value,
                        repeat: e.state.queueState.repeat.value,
                      },
                    }),
                  ),
                !this.variables.disableSendPlaysOnTrackStart)
              )
                return this.sendPlaysData(r.data).catch((e) => {
                  let r = "",
                    a = "";
                  n &&
                    ((r = n.context.data.meta.id), (a = n.entity.data.meta.id)),
                    t.afterError.promise(
                      new Z("Error while sending plays", {
                        cause: e,
                        data: { contextId: r, entityId: a },
                      }),
                    );
                });
            }
          } catch (a) {
            let e = "",
              r = "";
            n && ((e = n.context.data.meta.id), (r = n.entity.data.meta.id)),
              t.afterError.promise(
                new Z("Error while sending plays", {
                  cause: a,
                  data: { contextId: e, entityId: r },
                }),
              );
          }
          return Promise.resolve();
        }
        sendEndEntityPlay(e, t) {
          let n = e.state.queueState.currentEntity.value;
          try {
            if (n && !(0, P.Q7)(n.context)) {
              let r;
              let { entity: a } = n,
                o = n.entity.totalPlayedSeconds,
                i =
                  this.playerStageByEntitiesPlayId.get(a.playId) ||
                  O.KZ.PREPARE;
              return (
                (r =
                  0 === o
                    ? B({
                        type: p.END,
                        contextEntityPair: n,
                        totalPlayedSeconds: 0.1,
                        endPositionSeconds: 0.1,
                        maxPlayerStage: i,
                      })
                    : B({
                        type: p.END,
                        contextEntityPair: n,
                        totalPlayedSeconds: o,
                        endPositionSeconds:
                          e.state.playerState.progress.value.position,
                        maxPlayerStage: i,
                      })),
                this.playerStageByEntitiesPlayId.delete(r.data.playId),
                r.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new Z("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: n.entity.timeStagesOfPlayback,
                        contextId: n.context.data.meta.id,
                        entityId: n.entity.data.meta.id,
                        totalPlayedSeconds: r.data.totalPlayedSeconds,
                        trackLengthSeconds: r.data.trackLengthSeconds,
                        playId: r.data.playId,
                        isOnStart: !1,
                        entityListLength:
                          e.state.queueState.entityList.value.length,
                        index: e.state.queueState.index.value,
                        repeat: e.state.queueState.repeat.value,
                      },
                    }),
                  ),
                this.sendPlaysData(r.data).catch((e) => {
                  let r = "",
                    a = "";
                  n &&
                    ((r = n.context.data.meta.id), (a = n.entity.data.meta.id)),
                    t.afterError.promise(
                      new Z("Error while sending plays", {
                        cause: e,
                        data: { contextId: r, entityId: a },
                      }),
                    );
                })
              );
            }
          } catch (a) {
            let e = "",
              r = "";
            n && ((e = n.context.data.meta.id), (r = n.entity.data.meta.id)),
              t.afterError.promise(
                new Z("Error while sending plays", {
                  cause: a,
                  data: { contextId: e, entityId: r },
                }),
              );
          }
          return Promise.resolve();
        }
        changePlayerStageByPlayId(e) {
          let { playId: t, stage: n } = e;
          this.playerStageByEntitiesPlayId.set(t, n);
        }
        constructor(e) {
          var t;
          (0, M._)(this, "playerStageByEntitiesPlayId", new Map()),
            (0, M._)(this, "sendingInProgressForPlayId", new Map()),
            (0, M._)(this, "playsResource", void 0),
            (0, M._)(this, "playsStore", void 0),
            (0, M._)(this, "variables", void 0),
            (0, M._)(this, "storePlaysProgressIntervalMs", void 0);
          let { httpClient: n, playsResourceConfig: r, variables: a } = e;
          (this.playsResource = new O.ol(n, r)),
            (this.variables = a || {}),
            (this.storePlaysProgressIntervalMs =
              e.storePlaysProgressIntervalMs || 1e4),
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableLocalStoredPlaysData) && (this.playsStore = new ed());
        }
      }
      ((a = v || (v = {})).PLAY = "play"),
        (a.PAUSE = "pause"),
        (a.NEXT = "nexttrack"),
        (a.PREV = "previoustrack"),
        (a.SEEK = "seekto"),
        (a.STOP = "stop");
      let ep = [40, 50, 80, 100, 200, 300, 400],
        ev = [v.PLAY, v.PAUSE, v.STOP, v.SEEK];
      class em {
        isSupported() {
          return (
            "mediaSession" in window.navigator && "MediaMetadata" in window
          );
        }
        handleMediaActionEvents(e, t) {
          let { action: n } = e;
          switch (n) {
            case v.PLAY:
              t.resume();
              break;
            case v.PAUSE:
            case v.STOP:
              t.pause();
              break;
            case v.NEXT:
              t.moveForward();
              break;
            case v.PREV:
              t.moveBackward();
              break;
            case v.SEEK: {
              var r;
              if (
                (0, j.OX)(
                  null === (r = t.state.queueState.currentEntity.value) ||
                    void 0 === r
                    ? void 0
                    : r.entity,
                )
              )
                return;
              let { seekTime: n } = e;
              n && t.setProgress(n);
            }
          }
        }
        prepareMetadata(e) {
          let t, n;
          let r = { title: e.title };
          if ("artists" in e) {
            let t = (e.artists || []).map((e) => e.name).join(", ");
            r.artist = t;
          }
          if ("albums" in e) {
            var a, o;
            let t =
              null === (o = e.albums) || void 0 === o
                ? void 0
                : null === (a = o[0]) || void 0 === a
                  ? void 0
                  : a.title;
            r.album = t;
          }
          return (
            "coverUri" in e && (t = e.coverUri),
            "imageUrl" in e && (t = e.imageUrl),
            t &&
              (n = ep.map((e) => {
                let n = "".concat(e, "x").concat(e);
                return (
                  "Safari" === this.browserName &&
                    (n = "".concat(2 * e, "x").concat(2 * e)),
                  {
                    sizes: n,
                    src: "https://".concat(t.replace("%%", n)),
                    type: "image/jpg",
                  }
                );
              })),
            (r.artwork = n),
            r
          );
        }
        updateMetadata(e) {
          if (!e) return;
          let t = this.prepareMetadata(e);
          window.navigator.mediaSession.metadata = new MediaMetadata(t);
        }
        handlePlayerEvents(e) {
          let t, n;
          e.state.playerState.event.onChange(() => {
            if (e.state.playerState.event.value === k.KX.UPDATING_PROGRESS) {
              var t, n;
              this.updateMetadata(
                null === (t = e.state.queueState.currentEntity.value) ||
                  void 0 === t
                  ? void 0
                  : t.entity.data.meta,
              ),
                (0, j.OX)(
                  null === (n = e.state.queueState.currentEntity.value) ||
                    void 0 === n
                    ? void 0
                    : n.entity,
                )
                  ? navigator.mediaSession.setPositionState({
                      duration: 0,
                      position: 0,
                    })
                  : navigator.mediaSession.setPositionState(),
                ev.forEach((t) => {
                  try {
                    window.navigator.mediaSession.setActionHandler(t, (t) =>
                      this.handleMediaActionEvents(t, e),
                    );
                  } catch (e) {
                    console.log(
                      'The media session action "'.concat(
                        t,
                        '" is not supported yet.',
                      ),
                    );
                  }
                });
            }
          }),
            e.state.currentContext.onChange(() => {
              var r, a;
              null == t || t(),
                null == n || n(),
                (t =
                  null === (r = e.state.currentContext.value) || void 0 === r
                    ? void 0
                    : r.availableActions.moveBackward.onChange(() => {
                        var t, n;
                        let r =
                          null !==
                            (n =
                              null === (t = e.state.currentContext.value) ||
                              void 0 === t
                                ? void 0
                                : t.availableActions.moveBackward.value) &&
                          void 0 !== n &&
                          n;
                        window.navigator.mediaSession.setActionHandler(
                          v.PREV,
                          r ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      })),
                (n =
                  null === (a = e.state.currentContext.value) || void 0 === a
                    ? void 0
                    : a.availableActions.moveForward.onChange(() => {
                        var t, n;
                        let r =
                          null !==
                            (n =
                              null === (t = e.state.currentContext.value) ||
                              void 0 === t
                                ? void 0
                                : t.availableActions.moveForward.value) &&
                          void 0 !== n &&
                          n;
                        window.navigator.mediaSession.setActionHandler(
                          v.NEXT,
                          r ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      }));
            });
        }
        apply(e) {
          let { playback: t } = e;
          this.isSupported() && this.handlePlayerEvents(t);
        }
        constructor({ browserName: e, browserVersion: t }) {
          (0, M._)(this, "browserName", void 0),
            (0, M._)(this, "browserVersion", void 0),
            (this.browserName = e),
            (this.browserVersion = t);
        }
      }
      class ey {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.afterError.tapPromise("LoggerPlugin", (e) => {
            let t;
            let r = n.state.queueState.currentEntity.value
              ? n.state.queueState.currentEntity.value.entity.mediaSource
              : null;
            return (
              ((t =
                e instanceof W.y
                  ? e
                  : new W.y("Error in Sonata player", {
                      code: "E_SONATA",
                      cause: e,
                    })).name = "[Sonata] ".concat(t.name)),
              this.logger.error(t, {
                ...t.data,
                ...(r || {}),
                code: t.code,
                cause: t.cause,
                stack: t.stack,
              }),
              Promise.resolve()
            );
          });
        }
        constructor(e) {
          (0, M._)(this, "logger", void 0);
          let { logger: t } = e;
          this.logger = t;
        }
      }
      let eh = [P.Ak.Album, P.Ak.Artist, P.Ak.Playlist, P.Ak.Various],
        eg = (e, t) => {
          var n;
          let r =
            null === (n = e.state.currentContext.value) || void 0 === n
              ? void 0
              : n.data;
          if (!r) return "";
          let a = r.type,
            o = e.state.queueState.entityList.value.length || 0;
          return (
            a === P.Ak.Various && 1 === o && (a = "track"),
            r.type === P.Ak.Various &&
              r.overrideContextType &&
              (a = r.overrideContextType),
            "".concat(t, "-radio-").concat(a, "-autoflow")
          );
        },
        ex = (e) => {
          var t, n, r, a;
          let o =
            null === (t = e.state.currentContext.value) || void 0 === t
              ? void 0
              : t.data;
          if (o) {
            if (o.type === P.Ak.Album) return ["album:".concat(o.meta.id)];
            if (o.type === P.Ak.Artist) return ["artist:".concat(o.meta.id)];
            if (
              o.type === P.Ak.Playlist &&
              (null === (n = o.meta.owner) || void 0 === n ? void 0 : n.uid) &&
              o.meta.kind
            )
              return [
                "playlist:"
                  .concat(
                    null === (r = o.meta.owner) || void 0 === r
                      ? void 0
                      : r.uid,
                    "_",
                  )
                  .concat(o.meta.kind),
              ];
            if (o.type === P.Ak.Various) {
              if (o.overrideAutoflowSeeds) return o.overrideAutoflowSeeds;
              let t =
                null === (a = e.state.queueState.currentEntity.value) ||
                void 0 === a
                  ? void 0
                  : a.entity.data.meta.id;
              return ["track:".concat(t)];
            }
          }
        };
      class eb {
        apply(e) {
          let { playback: t, hooks: n } = e;
          n.afterContextEnd.tapPromise("AutoflowPlugin", () => {
            var e;
            let n =
              null === (e = t.state.currentContext.value) || void 0 === e
                ? void 0
                : e.data.type;
            return (
              n && eh.includes(n) && this.playAutoflow(t), Promise.resolve()
            );
          });
        }
        playAutoflow(e) {
          var t;
          let n =
              null === (t = e.state.currentContext.value) || void 0 === t
                ? void 0
                : t.data.type,
            r = ex(e);
          if (!(n && r)) return;
          let a = this.factory.createContext({
            data: {
              type: P.Ak.Vibe,
              meta: { id: P.Ak.Vibe },
              seeds: r,
              from: eg(e, this.platform),
              includeTracksInResponse: !0,
            },
          });
          e.playContext({ context: a, loadContextMeta: !0 });
        }
        constructor({ platform: e, factory: t }) {
          (0, M._)(this, "platform", void 0),
            (0, M._)(this, "factory", void 0),
            (this.platform = e),
            (this.factory = t);
        }
      }
      class eE {
        apply(e) {
          let { playback: t, hooks: n } = e;
          this.quality.onChange(() => {
            t.state.playerState.status.value !== k.Xz.IDLE &&
              t.reloadEntity().catch((e) => {
                n.afterError.promise(e);
              });
          });
        }
        constructor(e) {
          (0, M._)(this, "quality", void 0), (this.quality = e);
        }
      }
      class e_ {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.beforeEntityChange.tapPromise("ContinuePlayingPlugin", () => {
            let { position: e, duration: t } = this.getTimingsFromPlayback(n);
            return new Promise((r) => {
              e !== t && this.checkBeforeProgressSync(n), r();
            });
          }),
            n.state.playerState.status.onChange((e) => {
              (e === k.Xz.PAUSED || e === k.Xz.STOPPED) &&
                (this.clearTimeout(), this.checkBeforeProgressSync(n)),
                e === k.Xz.PLAYING &&
                  this.shouldSendProgressSync(n) &&
                  this.setTimeout(n);
            });
        }
        checkBeforeProgressSync(e) {
          var t;
          if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
          let { position: n, duration: r } = this.getTimingsFromPlayback(e),
            a =
              null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
                ? void 0
                : t.entity.data.meta.id;
          Number.isFinite(r) &&
            Number.isFinite(n) &&
            r &&
            n &&
            a &&
            (this.sendProgressSync({ duration: r, position: n, trackId: a }),
            e.state.playerState.status.value === k.Xz.PLAYING &&
              this.setTimeout(e));
        }
        sendProgressSync(e) {
          let t = new Date().toISOString(),
            { duration: n, position: r, trackId: a } = e;
          this.streamsResource.progressSync({
            lastSyncTimestamp: t,
            trackStreams: [
              {
                trackId: a,
                positionSec: r,
                trackLengthSec: n,
                finished: r === n,
                timestamp: t,
              },
            ],
          });
        }
        shouldSendProgressSync(e) {
          var t;
          let n =
            null === (t = e.state.queueState.currentEntity.value) ||
            void 0 === t
              ? void 0
              : t.entity.data.meta;
          return !!(n && "rememberPosition" in n && n.rememberPosition);
        }
        setTimeout(e) {
          this.clearTimeout(),
            (this.timeoutId = window.setTimeout(() => {
              this.checkBeforeProgressSync(e);
            }, 3e4));
        }
        clearTimeout() {
          window.clearTimeout(this.timeoutId);
        }
        getTimingsFromPlayback(e) {
          return {
            duration: Math.floor(e.state.playerState.progress.value.duration),
            position: Math.floor(e.state.playerState.progress.value.position),
          };
        }
        constructor(e) {
          (0, M._)(this, "streamsResource", void 0),
            (0, M._)(this, "timeoutId", 0);
          let { httpClient: t, streamsResourceConfig: n } = e;
          this.streamsResource = new O.hd(t, n);
        }
      }
      ((o = m || (m = {})).WANT_PLAY_TRACK = "WANT_PLAY_TRACK"),
        (o.TRACK_IS_PLAYING = "TRACK_IS_PLAYING"),
        (o.TRACK_ERROR_PREPARE = "TRACK_ERROR_PREPARE"),
        (o.TRACK_ERROR_INITIAL_BUFFERING = "TRACK_ERROR_INITIAL_BUFFERING"),
        (o.TRACK_ERROR_PLAYING = "TRACK_ERROR_PLAYING"),
        ((i = y || (y = {})).NETWORK = "NETWORK"),
        (i.OTHER = "OTHER");
      var ek = n(10542);
      ((l = h || (h = {})).BAD_RESPONSE_4XX = "BAD_RESPONSE_4XX"),
        (l.BAD_RESPONSE_5XX = "BAD_RESPONSE_5XX"),
        (l.OTHER = "OTHER");
      class ew {
        wantPlayTrack(e) {
          let t = String(e.data.meta.id),
            n = Math.trunc(performance.now()),
            r = {
              name: m.WANT_PLAY_TRACK,
              data: { trackId: t, uuid: e.playId },
            };
          return (
            this.wantPlayTracksEvents.set(e.playId, { time: n, event: r }), r
          );
        }
        trackError(e, t) {
          let n = null;
          return (
            e instanceof D.Pg
              ? (n = {
                  name: m.TRACK_ERROR_PREPARE,
                  data: {
                    trackId: String(t.data.meta.id),
                    uuid: t.playId,
                    type: e.code === D.gE.E_GET_MEDIA_SRC ? y.NETWORK : y.OTHER,
                    subType: (function (e) {
                      let t = h.OTHER;
                      if (e.cause instanceof ek.du)
                        switch (String(e.cause.statusCode)[0]) {
                          case "4":
                            t = h.BAD_RESPONSE_4XX;
                            break;
                          case "5":
                            t = h.BAD_RESPONSE_5XX;
                        }
                      return t;
                    })(e),
                    name: e.name,
                    code: e.code,
                  },
                })
              : e instanceof k.YR && e.code === k.Bq.PLAY
                ? (n = {
                    name: m.TRACK_ERROR_INITIAL_BUFFERING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
                      ...(e.cause instanceof DOMException
                        ? {
                            causeCode: e.cause.code,
                            causeMessage: e.cause.message,
                            causeName: e.cause.name,
                          }
                        : {
                            causeCode: -1,
                            causeMessage: "Unknown error message",
                            causeName: "Unknown error name",
                          }),
                    },
                  })
                : e instanceof k.YR &&
                  e.code === k.Bq.MEDIA_ELEMENT_ERROR &&
                  (n = {
                    name: m.TRACK_ERROR_PLAYING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
                      ...(e.cause instanceof MediaError
                        ? {
                            causeCode: e.cause.code,
                            causeMessage: e.cause.message,
                          }
                        : { causeCode: -1, causeMessage: "Unknown cause" }),
                    },
                  }),
            this.wantPlayTracksEvents.has(t.playId) &&
              this.wantPlayTracksEvents.delete(t.playId),
            n
          );
        }
        trackIsPlaying(e) {
          var t, n, r;
          let a = String(e.data.meta.id),
            o =
              this.wantPlayTracksEvents.has(e.playId) &&
              (null === (t = this.wantPlayTracksEvents.get(e.playId)) ||
              void 0 === t
                ? void 0
                : t.time),
            i = null;
          return (
            "number" == typeof o &&
              ((i = {
                name: m.TRACK_IS_PLAYING,
                data: {
                  trackId: a,
                  time: Math.trunc(performance.now() - o),
                  uuid: e.playId,
                  codec:
                    null === (n = e.mediaSource) || void 0 === n
                      ? void 0
                      : n.downloadInfo.codec,
                  bitrate:
                    null === (r = e.mediaSource) || void 0 === r
                      ? void 0
                      : r.downloadInfo.bitrate,
                },
              }),
              this.wantPlayTracksEvents.delete(e.playId)),
            i
          );
        }
        constructor() {
          (0, M._)(this, "wantPlayTracksEvents", new Map());
        }
      }
      class eP {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.beforeEntityPlayingProcessStart.tapPromise("MetricsPlugin", () => {
            let e = n.state.queueState.currentEntity.value;
            return (
              e && this.metricsEventsStore.wantPlayTrack(e.entity),
              Promise.resolve()
            );
          }),
            t.afterError.tapPromise("PlaysPlugin", (e) => {
              let t = n.state.queueState.currentEntity.value;
              return (
                t && this.metricsEventsStore.trackError(e, t.entity),
                Promise.resolve()
              );
            }),
            t.afterMediaStartPlaying.tapPromise("PlaysPlugin", () => {
              let e = n.state.queueState.currentEntity.value;
              return (
                e && this.metricsEventsStore.trackIsPlaying(e.entity),
                Promise.resolve()
              );
            });
        }
        constructor() {
          (0, M._)(this, "metricsEventsStore", void 0),
            (this.metricsEventsStore = new ew());
        }
      }
      class eS {
        apply() {
          this.trailerPlayback.hooks.afterContextEnd.tapPromise(
            "TrailerPlugin",
            () => (
              this.trailerPlayback.restartContext({ playAfterRestart: !1 }),
              Promise.resolve()
            ),
          ),
            this.trailerPlayback.hooks.afterMediaPause.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPaused(), Promise.resolve()),
            ),
            this.trailerPlayback.hooks.afterMediaStartPlaying.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPlaying(), Promise.resolve()),
            ),
            this.trailerPlayback.hooks.afterMediaResume.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPlaying(), Promise.resolve()),
            );
        }
        constructor({
          onTrailerPaused: e,
          onTrailerPlaying: t,
          playbackController: n,
          trailerPlaybackParams: r,
        }) {
          if (
            ((0, M._)(this, "onTrailerPaused", void 0),
            (0, M._)(this, "onTrailerPlaying", void 0),
            (0, M._)(this, "trailerPlayback", void 0),
            (this.onTrailerPaused = e),
            (this.onTrailerPlaying = t),
            n.createPlayback(r.id, {
              factory: r.factory,
              entityProvider: r.entityProvider,
              mediaProvider: r.mediaProvider,
              playbackConfig: r.playbackConfig,
              audioCore: r.audioCore,
            }),
            (this.trailerPlayback = n.getPlayback(r.id)),
            r.plugins)
          )
            for (let e of r.plugins)
              e.apply({
                playback: this.trailerPlayback,
                hooks: this.trailerPlayback.hooks,
              });
        }
      }
      class eR {
          /**
           * Normalize a dB value in the [0;1] range
           */
          _normalizedB(value) {
              const isLinear = true,
                  boost = isLinear ? 1 / (window.VIBE_ANIMATION_LINEAR_DEBOOST ?? 1) : 1,
                  clamp = (val, min, max) =>
                      val <= min ? min : val >= max ? max : val,
                  dBToLinear = (val) => 10 ** (val / 20);

              let maxValue = 255,
                  minValue = 0;

              if (!isLinear) {
                  maxValue = dBToLinear(maxValue);
                  minValue = dBToLinear(minValue);
                  value = dBToLinear(value) ** boost;
              }

              return clamp(
                  (value - minValue) / (maxValue - minValue) ** boost,
                  0,
                  1,
              );
          }
          getAverageFrequencies(e) {
          var t, i;
          let { low: r, high: o } = e,
              a = Math.floor( r * this.analyserNode.fftSize / this.audioContext.sampleRate ),
              n = Math.floor( o * this.analyserNode.fftSize / this.audioContext.sampleRate );
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let l = 0,
            s = 0;
            for (let e = a; e <= n; e++) {
                l += this._normalizedB(this.spectrum[e]);
              s++;
            }
          return l / s;
        }
        constructor(e, t, n) {
          var r, a;
          (0, M._)(this, "audioContext", void 0),
            (0, M._)(this, "analyserNode", void 0),
            (0, M._)(this, "bufferLength", 0),
            (0, M._)(this, "spectrum", new Uint8Array()),
            (this.audioContext = e),
            (this.analyserNode = e.createAnalyser()),
            (this.analyserNode.fftSize =
              null !== (r = null == n ? void 0 : n.fftSize) && void 0 !== r
                ? r
                : 2048),
            (this.analyserNode.smoothingTimeConstant =
              null !== (a = null == n ? void 0 : n.smoothingTimeConstant) &&
              void 0 !== a
                ? a
                : 0.4),
            t.connect(this.analyserNode),
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength));
        }
      }
      ((s = g || (g = {})).SUSPENDED = "suspended"),
        (s.RUNNING = "running"),
        (s.CLOSED = "closed"),
        ((u = x || (x = {})).CUSTOM = "CUSTOM"),
        (u.DEFAULT = "DEFAULT"),
        (u.CLASSICAL = "CLASSICAL"),
        (u.CLUB = "CLUB"),
        (u.DANCE = "DANCE"),
        (u.BASS_BOOST = "BASS_BOOST"),
        (u.BASS_AND_TREBLE_BOOST = "BASS_AND_TREBLE_BOOST"),
        (u.TREBLE_BOOST = "TREBLE_BOOST"),
        (u.SPEAKERS = "SPEAKERS"),
        (u.LARGE_HALL = "LARGE_HALL"),
        (u.CONCERT = "CONCERT"),
        (u.PARTY = "PARTY"),
        (u.POP = "POP"),
        (u.REGGAE = "REGGAE"),
        (u.ROCK = "ROCK"),
        (u.SKA = "SKA"),
        (u.SOFT = "SOFT"),
        (u.SOFT_ROCK = "SOFT_ROCK"),
        (u.TECHNO = "TECHNO"),
        ((c = b || (b = {})).IDLE = "IDLE"),
        (c.ENABLED = "ENABLED"),
        (c.DISABLED = "DISABLED"),
        ((d = E || (E = {})).HIGHSHELF = "highshelf"),
        (d.PEAKING = "peaking"),
        (d.LOWSHELF = "lowshelf");
      class eO {
        get lastBand() {
          return this.bands[this.bands.length - 1];
        }
        createBand(e, t, n) {
          let r = this.audioContext.createBiquadFilter();
          return (
            (r.type = e),
            (r.frequency.value = t),
            (r.Q.value = 1),
            n && r.gain.setValueAtTime(n, this.audioContext.currentTime + 0.3),
            r
          );
        }
        createBandsByFrequencies(e) {
          return e.map((t, n) => {
            let { key: r, value: a } = t;
            return this.createBand(this.getBiquadFilterType(n, e.length), r, a);
          });
        }
        connectBandsBetween(e) {
          let t = this.preamp;
          return (
            e.forEach((e) => {
              t.connect(e), (t = e);
            }),
            e
          );
        }
        getBiquadFilterType(e, t) {
          return 0 === e ? E.LOWSHELF : e === t - 1 ? E.HIGHSHELF : E.PEAKING;
        }
        updateBands(e, t) {
          e.forEach((e, n) => {
            let r = t[n];
            r &&
              e.gain.setValueAtTime(
                r.value,
                this.audioContext.currentTime + 0.3,
              );
          });
        }
        setPreamp(e) {
          this.preamp.gain.linearRampToValueAtTime(
            e,
            this.audioContext.currentTime + 0.3,
          );
        }
        enable() {
          this.state !== b.ENABLED &&
            (this.sourceNode.disconnect(),
            (this.state = b.ENABLED),
            this.sourceNode.connect(this.preamp),
            this.lastBand &&
              this.lastBand.connect(this.audioContext.destination));
        }
        disable() {
          this.state !== b.DISABLED &&
            (this.sourceNode.disconnect(),
            this.lastBand && this.lastBand.disconnect(),
            (this.state = b.DISABLED),
            this.sourceNode.connect(this.audioContext.destination));
        }
        applyPreset(e) {
          this.setPreamp(e.preamp),
            0 === this.bands.length
              ? (this.bands = this.connectBandsBetween(
                  this.createBandsByFrequencies(e.frequencies),
                ))
              : this.updateBands(this.bands, e.frequencies);
        }
        constructor(e, t, n) {
          (0, M._)(this, "audioContext", void 0),
            (0, M._)(this, "sourceNode", void 0),
            (0, M._)(this, "preamp", void 0),
            (0, M._)(this, "state", b.DISABLED),
            (0, M._)(this, "bands", []),
            (this.audioContext = e),
            (this.sourceNode = t),
            (this.preamp = this.audioContext.createGain()),
            (null == n ? void 0 : n.preset) && this.applyPreset(n.preset);
        }
      }
      let eA = {
        [x.CUSTOM]: {
          id: x.CUSTOM,
          preamp: 1,
          frequencies: [
            { key: 60, value: 0 },
            { key: 170, value: 0 },
            { key: 310, value: 0 },
            { key: 600, value: 0 },
            { key: 1e3, value: 0 },
            { key: 3e3, value: 0 },
            { key: 6e3, value: 0 },
            { key: 12e3, value: 0 },
            { key: 14e3, value: 0 },
            { key: 16e3, value: 0 },
          ],
        },
        [x.DEFAULT]: {
          id: x.DEFAULT,
          preamp: 1,
          frequencies: [
            { key: 60, value: 0 },
            { key: 170, value: 0 },
            { key: 310, value: 0 },
            { key: 600, value: 0 },
            { key: 1e3, value: 0 },
            { key: 3e3, value: 0 },
            { key: 6e3, value: 0 },
            { key: 12e3, value: 0 },
            { key: 14e3, value: 0 },
            { key: 16e3, value: 0 },
          ],
        },
        [x.CLASSICAL]: {
          id: x.CLASSICAL,
          preamp: 1,
          frequencies: [
            { key: 60, value: 0.5714 },
            { key: 170, value: 0.5714 },
            { key: 310, value: 0.5714 },
            { key: 600, value: 0.5714 },
            { key: 1e3, value: 0.5714 },
            { key: 3e3, value: 0.5714 },
            { key: 6e3, value: -4.381 },
            { key: 12e3, value: -4.381 },
            { key: 14e3, value: -4.381 },
            { key: 16e3, value: -5.9048 },
          ],
        },
        [x.CLUB]: {
          id: x.CLUB,
          preamp: 1,
          frequencies: [
            { key: 60, value: 0.5714 },
            { key: 170, value: 0.5714 },
            { key: 310, value: 2.4762 },
            { key: 600, value: 4 },
            { key: 1e3, value: 4 },
            { key: 3e3, value: 4 },
            { key: 6e3, value: 2.4762 },
            { key: 12e3, value: 0.5714 },
            { key: 14e3, value: 0.5714 },
            { key: 16e3, value: 0.5714 },
          ],
        },
        [x.DANCE]: {
          id: x.DANCE,
          preamp: 1,
          frequencies: [
            { key: 60, value: 6.2857 },
            { key: 170, value: 4.7619 },
            { key: 310, value: 1.7143 },
            { key: 600, value: 0.1905 },
            { key: 1e3, value: 0.1905 },
            { key: 3e3, value: -3.619 },
            { key: 6e3, value: -4.381 },
            { key: 12e3, value: -4.381 },
            { key: 14e3, value: 0.1905 },
            { key: 16e3, value: 0.1905 },
          ],
        },
        [x.SPEAKERS]: {
          id: x.SPEAKERS,
          preamp: 1,
          frequencies: [
            { key: 60, value: 3.2381 },
            { key: 170, value: 7.0476 },
            { key: 310, value: 3.619 },
            { key: 600, value: -2.0952 },
            { key: 1e3, value: -1.3333 },
            { key: 3e3, value: 1.3333 },
            { key: 6e3, value: 3.2381 },
            { key: 12e3, value: 6.2857 },
            { key: 14e3, value: 8.1905 },
            { key: 16e3, value: 9.3333 },
          ],
        },
        [x.LARGE_HALL]: {
          id: x.LARGE_HALL,
          preamp: 1,
          frequencies: [
            { key: 60, value: 6.6667 },
            { key: 170, value: 6.6667 },
            { key: 310, value: 4 },
            { key: 600, value: 4 },
            { key: 1e3, value: 0.5714 },
            { key: 3e3, value: -2.8571 },
            { key: 6e3, value: -2.8571 },
            { key: 12e3, value: -2.8571 },
            { key: 14e3, value: 0.5714 },
            { key: 16e3, value: 0.5714 },
          ],
        },
        [x.PARTY]: {
          id: x.PARTY,
          preamp: 1,
          frequencies: [
            { key: 60, value: 4.7619 },
            { key: 170, value: 4.7619 },
            { key: 310, value: 0.5714 },
            { key: 600, value: 0.5714 },
            { key: 1e3, value: 0.5714 },
            { key: 3e3, value: 0.5714 },
            { key: 6e3, value: 0.5714 },
            { key: 12e3, value: 0.5714 },
            { key: 14e3, value: 4.7619 },
            { key: 16e3, value: 4.7619 },
          ],
        },
        [x.POP]: {
          id: x.POP,
          preamp: 1,
          frequencies: [
            { key: 60, value: -0.9524 },
            { key: 170, value: 3.2381 },
            { key: 310, value: 4.7619 },
            { key: 600, value: 5.1429 },
            { key: 1e3, value: 3.619 },
            { key: 3e3, value: -0.5714 },
            { key: 6e3, value: -1.3333 },
            { key: 12e3, value: -1.3333 },
            { key: 14e3, value: -0.9524 },
            { key: 16e3, value: -0.9524 },
          ],
        },
        [x.REGGAE]: {
          id: x.REGGAE,
          preamp: 1,
          frequencies: [
            { key: 60, value: 0.5714 },
            { key: 170, value: 0.5714 },
            { key: 310, value: -0.1905 },
            { key: 600, value: -3.619 },
            { key: 1e3, value: 0.5714 },
            { key: 3e3, value: 4.381 },
            { key: 6e3, value: 4.381 },
            { key: 12e3, value: 0.5714 },
            { key: 14e3, value: 0.5714 },
            { key: 16e3, value: 0.5714 },
          ],
        },
        [x.ROCK]: {
          id: x.ROCK,
          preamp: 1,
          frequencies: [
            { key: 60, value: 5.1429 },
            { key: 170, value: 3.2381 },
            { key: 310, value: -3.2381 },
            { key: 600, value: -4.7619 },
            { key: 1e3, value: -2.0952 },
            { key: 3e3, value: 2.8571 },
            { key: 6e3, value: 5.9048 },
            { key: 12e3, value: 7.0476 },
            { key: 14e3, value: 7.0476 },
            { key: 16e3, value: 7.0476 },
          ],
        },
        [x.SOFT]: {
          id: x.SOFT,
          preamp: 1,
          frequencies: [
            { key: 60, value: 3.2381 },
            { key: 170, value: 1.3333 },
            { key: 310, value: -0.5714 },
            { key: 600, value: -1.3333 },
            { key: 1e3, value: -0.5714 },
            { key: 3e3, value: 2.8571 },
            { key: 6e3, value: 5.5238 },
            { key: 12e3, value: 6.2857 },
            { key: 14e3, value: 7.0476 },
            { key: 16e3, value: 7.8095 },
          ],
        },
        [x.SKA]: {
          id: x.SKA,
          preamp: 1,
          frequencies: [
            { key: 60, value: -1.3333 },
            { key: 170, value: -2.8571 },
            { key: 310, value: -2.4762 },
            { key: 600, value: -0.1905 },
            { key: 1e3, value: 2.8571 },
            { key: 3e3, value: 4 },
            { key: 6e3, value: 5.9048 },
            { key: 12e3, value: 6.2857 },
            { key: 14e3, value: 7.0476 },
            { key: 16e3, value: 6.2857 },
          ],
        },
        [x.BASS_BOOST]: {
          id: x.BASS_BOOST,
          preamp: 1,
          frequencies: [
            { key: 60, value: 6.2857 },
            { key: 170, value: 6.2857 },
            { key: 310, value: 6.2857 },
            { key: 600, value: 4 },
            { key: 1e3, value: 1.3333 },
            { key: 3e3, value: -2.4762 },
            { key: 6e3, value: -5.1429 },
            { key: 12e3, value: -6.2857 },
            { key: 14e3, value: -6.6667 },
            { key: 16e3, value: -6.6667 },
          ],
        },
        [x.SOFT_ROCK]: {
          id: x.SOFT_ROCK,
          preamp: 1,
          frequencies: [
            { key: 60, value: 2.8571 },
            { key: 170, value: 2.8571 },
            { key: 310, value: 1.7143 },
            { key: 600, value: -0.1905 },
            { key: 1e3, value: -2.4762 },
            { key: 3e3, value: -3.2381 },
            { key: 6e3, value: -2.0952 },
            { key: 12e3, value: -0.1905 },
            { key: 14e3, value: 2.0952 },
            { key: 16e3, value: 5.9048 },
          ],
        },
        [x.TREBLE_BOOST]: {
          id: x.TREBLE_BOOST,
          preamp: 1,
          frequencies: [
            { key: 60, value: -5.9048 },
            { key: 170, value: -5.9048 },
            { key: 310, value: -5.9048 },
            { key: 600, value: -2.4762 },
            { key: 1e3, value: 2.0952 },
            { key: 3e3, value: 7.0476 },
            { key: 6e3, value: 10.0952 },
            { key: 12e3, value: 10.0952 },
            { key: 14e3, value: 10.0952 },
            { key: 16e3, value: 10.8571 },
          ],
        },
        [x.BASS_AND_TREBLE_BOOST]: {
          id: x.BASS_AND_TREBLE_BOOST,
          preamp: 1,
          frequencies: [
            { key: 60, value: 4.7619 },
            { key: 170, value: 4 },
            { key: 310, value: 0.5714 },
            { key: 600, value: -4.381 },
            { key: 1e3, value: -2.8571 },
            { key: 3e3, value: 1.3333 },
            { key: 6e3, value: 5.5238 },
            { key: 12e3, value: 7.0476 },
            { key: 14e3, value: 7.8095 },
            { key: 16e3, value: 7.8095 },
          ],
        },
        [x.TECHNO]: {
          id: x.TECHNO,
          preamp: 1,
          frequencies: [
            { key: 60, value: 5.1429 },
            { key: 170, value: 4 },
            { key: 310, value: 0.5714 },
            { key: 600, value: -3.2381 },
            { key: 1e3, value: -2.8571 },
            { key: 3e3, value: 0.5714 },
            { key: 6e3, value: 5.1429 },
            { key: 12e3, value: 6.2857 },
            { key: 14e3, value: 6.2857 },
            { key: 16e3, value: 5.9048 },
          ],
        },
        [x.CONCERT]: {
          id: x.CONCERT,
          preamp: 1,
          frequencies: [
            { key: 60, value: -2.8571 },
            { key: 170, value: 0.5714 },
            { key: 310, value: 2.8571 },
            { key: 600, value: 3.619 },
            { key: 1e3, value: 4 },
            { key: 3e3, value: 4 },
            { key: 6e3, value: 2.8571 },
            { key: 12e3, value: 2.0952 },
            { key: 14e3, value: 2.0952 },
            { key: 16e3, value: 1.7143 },
          ],
        },
      };
      ((f = _ || (_ = {})).IDLE = "IDLE"),
        (f.ENABLED = "ENABLED"),
        (f.DISABLED = "DISABLED");
      let eT = 1e3 / 60;
      class eC {
        updateGain() {
          if (this.state !== _.ENABLED) return;
          let e = this.audioElement.currentTime,
            t = e >= this.inStart && e <= this.inStop,
            n = e >= this.outStart && e <= this.outStop;
          if (t) {
            let t = this.getFadeInVolume(e);
            this.gainNode.gain.setValueAtTime(t, this.audioContext.currentTime);
          }
          if (n) {
            let t = this.getFadeOutVolume(e);
            this.gainNode.gain.setValueAtTime(t, this.audioContext.currentTime);
          }
          e > this.inStop &&
            e < this.outStart &&
            this.gainNode.gain.setValueAtTime(1, this.audioContext.currentTime),
            e > this.outStop &&
              this.gainNode.gain.setValueAtTime(
                0,
                this.audioContext.currentTime,
              );
        }
        getFadeInVolume(e) {
          return Math.min(e / (this.inStop - this.inStart), 1);
        }
        getFadeOutVolume(e) {
          let t = this.outStop - this.outStart;
          return Math.max(1 - (e - this.outStart) / t, 0);
        }
        enable() {
          (this.state = _.ENABLED),
            this.intervalId ||
              (this.intervalId = setInterval(this.updateGain.bind(this), eT));
        }
        disable() {
          (this.state = _.DISABLED),
            this.intervalId &&
              (clearInterval(this.intervalId), (this.intervalId = null));
        }
        apply(e) {
          if (!e) {
            this.disable(), (this.gainNode.gain.value = 1);
            return;
          }
          this.gainNode.gain.value = 0;
          let { inStart: t, inStop: n, outStart: r, outStop: a } = e;
          (this.inStart = t),
            (this.inStop = n),
            (this.outStart = r),
            (this.outStop = a),
            this.enable();
        }
        constructor(e, t, n) {
          (0, M._)(this, "audioElement", void 0),
            (0, M._)(this, "audioContext", void 0),
            (0, M._)(this, "sourceNode", void 0),
            (0, M._)(this, "gainNode", void 0),
            (0, M._)(this, "state", _.IDLE),
            (0, M._)(this, "inStart", 0),
            (0, M._)(this, "inStop", 0),
            (0, M._)(this, "outStart", 0),
            (0, M._)(this, "outStop", 0),
            (0, M._)(this, "intervalId", null),
            (this.audioElement = e),
            (this.audioContext = t),
            (this.sourceNode = n),
            (this.gainNode = t.createGain()),
            this.sourceNode.connect(this.gainNode),
            this.gainNode.connect(this.audioContext.destination);
        }
      }
      class eL {
        get isAudioContextRequired() {
          return (
            !!this.options.useEqualizer ||
            !!this.options.useAnalyser ||
            !!this.options.useFade
          );
        }
        checkAndResumeAudioContext() {
          var e;
          let t = () => {
            var e;
            null === (e = this.audioContext) ||
              void 0 === e ||
              e.resume().then(() => {
                document.body.removeEventListener("touchend", t, !0),
                  document.body.removeEventListener("click", t, !0),
                  document.body.removeEventListener("keydown", t, !0);
              });
          };
          (null === (e = this.audioContext) || void 0 === e
            ? void 0
            : e.state) === g.SUSPENDED &&
            (document.body.addEventListener("touchend", t, !0),
            document.body.addEventListener("click", t, !0),
            document.body.addEventListener("keydown", t, !0));
        }
        initializeContext(e) {
          if (((this.audioElement = e), this.isAudioContextRequired)) {
            if (
              ((this.audioContext = new AudioContext()),
              (this.sourceNode = this.audioContext.createMediaElementSource(
                this.audioElement,
              )),
              this.checkAndResumeAudioContext(),
              this.options.useAnalyser)
            ) {
              let e =
                "object" == typeof this.options.useAnalyser
                  ? this.options.useAnalyser
                  : void 0;
              this.analyser = new eR(this.audioContext, this.sourceNode, e);
            }
            if (this.options.useEqualizer) {
              let e =
                "object" == typeof this.options.useEqualizer
                  ? this.options.useEqualizer
                  : void 0;
              this.equalizer = new eO(this.audioContext, this.sourceNode, e);
            }
            this.options.useFade &&
              (this.fade = new eC(e, this.audioContext, this.sourceNode));
          }
        }
        apply(e) {
          let { hooks: t, playback: n } = e;
          this.audioElement || this.initializeContext(e.playback.source),
            n.state.playerState.event.onChange(() => {
              if (this.fade)
                switch (n.state.playerState.event.value) {
                  case k.KX.PLAYING:
                    this.fade.enable();
                    break;
                  case k.KX.PAUSED:
                  case k.KX.STOP:
                    this.fade.disable();
                }
            }),
            t.beforeMediaStartPlaying.tapPromise("WebAudioPlugin", () => {
              var e, t;
              let r;
              let { currentEntity: a } = n.state.queueState,
                o = null === (e = a.value) || void 0 === e ? void 0 : e.entity;
              return (
                (0, j.YM)(o) &&
                  (r =
                    null === (t = o.data.meta.smartPreviewParams) ||
                    void 0 === t
                      ? void 0
                      : t.fade),
                (0, j.OV)(o) && (r = o.data.meta.fade),
                this.fade && this.fade.apply(r),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, M._)(this, "options", void 0),
            (0, M._)(this, "audioElement", void 0),
            (0, M._)(this, "audioContext", void 0),
            (0, M._)(this, "sourceNode", void 0),
            (0, M._)(this, "analyser", void 0),
            (0, M._)(this, "equalizer", void 0),
            (0, M._)(this, "fade", void 0),
            (this.options = e);
        }
      }
    },
  },
]);
