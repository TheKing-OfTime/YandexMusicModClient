(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [63],
  {
    97898: function (e, t, n) {
      "use strict";
      n.d(t, {
        Lt: function () {
          return d;
        },
        Wx: function () {
          return p;
        },
      });
      var r,
        i,
        o,
        a = n(773),
        l = n(98639);
      e = n.hmd(e);
      var u = {
          6011: (e, t, n) => {
            let r;
            n.r(t),
              n.d(t, {
                Composite: () => tO,
                CompositeItem: () => tS,
                FloatingArrow: () => tT,
                FloatingDelayGroup: () => tG,
                FloatingFocusManager: () => nu,
                FloatingList: () => tg,
                FloatingNode: () => tB,
                FloatingOverlay: () => nc,
                FloatingPortal: () => no,
                FloatingTree: () => tz,
                arrow: () => eN,
                autoPlacement: () => eu,
                autoUpdate: () => eT,
                computePosition: () => eI,
                detectOverflow: () => ea,
                flip: () => es,
                getOverflowAncestors: () => x,
                hide: () => ed,
                inline: () => ev,
                inner: () => nD,
                limitShift: () => eg,
                offset: () => ey,
                platform: () => eC,
                safePolygon: () => nB,
                shift: () => em,
                size: () => eb,
                useClick: () => nd,
                useClientPoint: () => nv,
                useDelayGroup: () => tZ,
                useDelayGroupContext: () => tK,
                useDismiss: () => ng,
                useFloating: () => nb,
                useFloatingNodeId: () => tq,
                useFloatingParentNodeId: () => tD,
                useFloatingPortalNode: () => ni,
                useFloatingTree: () => tM,
                useFocus: () => n_,
                useHover: () => tV,
                useId: () => tC,
                useInnerOffset: () => nM,
                useInteractions: () => nx,
                useListItem: () => tb,
                useListNavigation: () => nR,
                useMergeRefs: () => te,
                useRole: () => nj,
                useTransitionStatus: () => nT,
                useTransitionStyles: () => nI,
                useTypeahead: () => nL,
              });
            var i,
              o,
              l = n(810);
            function u(e) {
              return f(e) ? (e.nodeName || "").toLowerCase() : "#document";
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
            function c(e) {
              var t;
              return null ==
                (t = (f(e) ? e.ownerDocument : e.document) || window.document)
                ? void 0
                : t.documentElement;
            }
            function f(e) {
              return e instanceof Node || e instanceof s(e).Node;
            }
            function d(e) {
              return e instanceof Element || e instanceof s(e).Element;
            }
            function p(e) {
              return e instanceof HTMLElement || e instanceof s(e).HTMLElement;
            }
            function v(e) {
              return (
                "undefined" != typeof ShadowRoot &&
                (e instanceof ShadowRoot || e instanceof s(e).ShadowRoot)
              );
            }
            function h(e) {
              let {
                overflow: t,
                overflowX: n,
                overflowY: r,
                display: i,
              } = b(e);
              return (
                /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
                !["inline", "contents"].includes(i)
              );
            }
            function y(e) {
              let t = m(),
                n = b(e);
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
            function m() {
              return (
                "undefined" != typeof CSS &&
                !!CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")
              );
            }
            function g(e) {
              return ["html", "body", "#document"].includes(u(e));
            }
            function b(e) {
              return s(e).getComputedStyle(e);
            }
            function _(e) {
              return d(e)
                ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
            }
            function E(e) {
              if ("html" === u(e)) return e;
              let t =
                e.assignedSlot || e.parentNode || (v(e) && e.host) || c(e);
              return v(t) ? t.host : t;
            }
            function x(e, t, n) {
              var r;
              void 0 === t && (t = []), void 0 === n && (n = !0);
              let i = (function e(t) {
                  let n = E(t);
                  return g(n)
                    ? t.ownerDocument
                      ? t.ownerDocument.body
                      : t.body
                    : p(n) && h(n)
                      ? n
                      : e(n);
                })(e),
                o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
                a = s(i);
              return o
                ? t.concat(
                    a,
                    a.visualViewport || [],
                    h(i) ? i : [],
                    a.frameElement && n ? x(a.frameElement) : [],
                  )
                : t.concat(i, x(i, [], n));
            }
            function w(e) {
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
              if (n && v(n)) {
                let n = t;
                for (; n; ) {
                  if (e === n) return !0;
                  n = n.parentNode || n.host;
                }
              }
              return !1;
            }
            function O() {
              let e = navigator.userAgentData;
              return null != e && e.platform ? e.platform : navigator.platform;
            }
            function S() {
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
            function P(e) {
              return (
                (0 === e.mozInputSource && !!e.isTrusted) ||
                (A() && e.pointerType
                  ? "click" === e.type && 1 === e.buttons
                  : 0 === e.detail && !e.pointerType)
              );
            }
            function R(e) {
              return (
                (!A() && 0 === e.width && 0 === e.height) ||
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
            function j() {
              return /apple/i.test(navigator.vendor);
            }
            function A() {
              let e = /android/i;
              return e.test(O()) || e.test(S());
            }
            function C() {
              return (
                O().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
              );
            }
            function T(e, t) {
              let n = ["mouse", "pen"];
              return t || n.push("", void 0), n.includes(e);
            }
            function I(e) {
              return (null == e ? void 0 : e.ownerDocument) || document;
            }
            function L(e, t) {
              return (
                null != t &&
                ("composedPath" in e
                  ? e.composedPath().includes(t)
                  : null != e.target && t.contains(e.target))
              );
            }
            function N(e) {
              return "composedPath" in e ? e.composedPath()[0] : e.target;
            }
            function D(e) {
              return (
                p(e) &&
                e.matches(
                  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
                )
              );
            }
            function M(e) {
              e.preventDefault(), e.stopPropagation();
            }
            let q = ["top", "right", "bottom", "left"],
              B = q.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
              z = Math.min,
              F = Math.max,
              H = Math.round,
              U = Math.floor,
              W = (e) => ({ x: e, y: e }),
              V = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
              },
              Y = { start: "end", end: "start" };
            function K(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function G(e) {
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
              return ["top", "bottom"].includes(G(e)) ? "y" : "x";
            }
            function $(e, t, n) {
              void 0 === n && (n = !1);
              let r = Z(e),
                i = X(J(e)),
                o = Q(i),
                a =
                  "x" === i
                    ? r === (n ? "end" : "start")
                      ? "right"
                      : "left"
                    : "start" === r
                      ? "bottom"
                      : "top";
              return t.reference[o] > t.floating[o] && (a = et(a)), [a, et(a)];
            }
            function ee(e) {
              return e.replace(/start|end/g, (e) => Y[e]);
            }
            function et(e) {
              return e.replace(/left|right|bottom|top/g, (e) => V[e]);
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
            function ei(e, t, n) {
              let r,
                { reference: i, floating: o } = e,
                a = J(t),
                l = X(J(t)),
                u = Q(l),
                s = G(t),
                c = "y" === a,
                f = i.x + i.width / 2 - o.width / 2,
                d = i.y + i.height / 2 - o.height / 2,
                p = i[u] / 2 - o[u] / 2;
              switch (s) {
                case "top":
                  r = { x: f, y: i.y - o.height };
                  break;
                case "bottom":
                  r = { x: f, y: i.y + i.height };
                  break;
                case "right":
                  r = { x: i.x + i.width, y: d };
                  break;
                case "left":
                  r = { x: i.x - o.width, y: d };
                  break;
                default:
                  r = { x: i.x, y: i.y };
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
                  strategy: i = "absolute",
                  middleware: o = [],
                  platform: a,
                } = n,
                l = o.filter(Boolean),
                u = await (null == a.isRTL ? void 0 : a.isRTL(t)),
                s = await a.getElementRects({
                  reference: e,
                  floating: t,
                  strategy: i,
                }),
                { x: c, y: f } = ei(s, r, u),
                d = r,
                p = {},
                v = 0;
              for (let n = 0; n < l.length; n++) {
                let { name: o, fn: h } = l[n],
                  {
                    x: y,
                    y: m,
                    data: g,
                    reset: b,
                  } = await h({
                    x: c,
                    y: f,
                    initialPlacement: r,
                    placement: d,
                    strategy: i,
                    middlewareData: p,
                    rects: s,
                    platform: a,
                    elements: { reference: e, floating: t },
                  });
                if (
                  ((c = null != y ? y : c),
                  (f = null != m ? m : f),
                  (p = { ...p, [o]: { ...p[o], ...g } }),
                  b && v <= 50)
                ) {
                  v++,
                    "object" == typeof b &&
                      (b.placement && (d = b.placement),
                      b.rects &&
                        (s =
                          !0 === b.rects
                            ? await a.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: i,
                              })
                            : b.rects),
                      ({ x: c, y: f } = ei(s, d, u))),
                    (n = -1);
                  continue;
                }
              }
              return {
                x: c,
                y: f,
                placement: d,
                strategy: i,
                middlewareData: p,
              };
            };
            async function ea(e, t) {
              var n;
              void 0 === t && (t = {});
              let {
                  x: r,
                  y: i,
                  platform: o,
                  rects: a,
                  elements: l,
                  strategy: u,
                } = e,
                {
                  boundary: s = "clippingAncestors",
                  rootBoundary: c = "viewport",
                  elementContext: f = "floating",
                  altBoundary: d = !1,
                  padding: p = 0,
                } = K(t, e),
                v = en(p),
                h = l[d ? ("floating" === f ? "reference" : "floating") : f],
                y = er(
                  await o.getClippingRect({
                    element:
                      null ==
                        (n = await (null == o.isElement
                          ? void 0
                          : o.isElement(h))) || n
                        ? h
                        : h.contextElement ||
                          (await (null == o.getDocumentElement
                            ? void 0
                            : o.getDocumentElement(l.floating))),
                    boundary: s,
                    rootBoundary: c,
                    strategy: u,
                  }),
                ),
                m =
                  "floating" === f
                    ? { ...a.floating, x: r, y: i }
                    : a.reference,
                g = await (null == o.getOffsetParent
                  ? void 0
                  : o.getOffsetParent(l.floating)),
                b = ((await (null == o.isElement ? void 0 : o.isElement(g))) &&
                  (await (null == o.getScale ? void 0 : o.getScale(g)))) || {
                  x: 1,
                  y: 1,
                },
                _ = er(
                  o.convertOffsetParentRelativeRectToViewportRelativeRect
                    ? await o.convertOffsetParentRelativeRectToViewportRelativeRect(
                        { rect: m, offsetParent: g, strategy: u },
                      )
                    : m,
                );
              return {
                top: (y.top - _.top + v.top) / b.y,
                bottom: (_.bottom - y.bottom + v.bottom) / b.y,
                left: (y.left - _.left + v.left) / b.x,
                right: (_.right - y.right + v.right) / b.x,
              };
            }
            let el = (e) => ({
                name: "arrow",
                options: e,
                async fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: i,
                      rects: o,
                      platform: a,
                      elements: l,
                      middlewareData: u,
                    } = t,
                    { element: s, padding: c = 0 } = K(e, t) || {};
                  if (null == s) return {};
                  let f = en(c),
                    d = { x: n, y: r },
                    p = X(J(i)),
                    v = Q(p),
                    h = await a.getDimensions(s),
                    y = "y" === p,
                    m = y ? "clientHeight" : "clientWidth",
                    g = o.reference[v] + o.reference[p] - d[p] - o.floating[v],
                    b = d[p] - o.reference[p],
                    _ = await (null == a.getOffsetParent
                      ? void 0
                      : a.getOffsetParent(s)),
                    E = _ ? _[m] : 0;
                  (E &&
                    (await (null == a.isElement ? void 0 : a.isElement(_)))) ||
                    (E = l.floating[m] || o.floating[v]);
                  let x = E / 2 - h[v] / 2 - 1,
                    w = z(f[y ? "top" : "left"], x),
                    k = z(f[y ? "bottom" : "right"], x),
                    O = E - h[v] - k,
                    S = E / 2 - h[v] / 2 + (g / 2 - b / 2),
                    P = F(w, z(S, O)),
                    R =
                      !u.arrow &&
                      null != Z(i) &&
                      S != P &&
                      o.reference[v] / 2 - (S < w ? w : k) - h[v] / 2 < 0,
                    j = R ? (S < w ? S - w : S - O) : 0;
                  return {
                    [p]: d[p] + j,
                    data: {
                      [p]: P,
                      centerOffset: S - P - j,
                      ...(R && { alignmentOffset: j }),
                    },
                    reset: R,
                  };
                },
              }),
              eu = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "autoPlacement",
                    options: e,
                    async fn(t) {
                      var n, r, i, o;
                      let {
                          rects: a,
                          middlewareData: l,
                          placement: u,
                          platform: s,
                          elements: c,
                        } = t,
                        {
                          crossAxis: f = !1,
                          alignment: d,
                          allowedPlacements: p = B,
                          autoAlignment: v = !0,
                          ...h
                        } = K(e, t),
                        y =
                          void 0 !== d || p === B
                            ? ((o = d || null)
                                ? [
                                    ...p.filter((e) => Z(e) === o),
                                    ...p.filter((e) => Z(e) !== o),
                                  ]
                                : p.filter((e) => G(e) === e)
                              ).filter(
                                (e) => !o || Z(e) === o || (!!v && ee(e) !== e),
                              )
                            : p,
                        m = await ea(t, h),
                        g =
                          (null == (n = l.autoPlacement) ? void 0 : n.index) ||
                          0,
                        b = y[g];
                      if (null == b) return {};
                      let _ = $(
                        b,
                        a,
                        await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                      );
                      if (u !== b) return { reset: { placement: y[0] } };
                      let E = [m[G(b)], m[_[0]], m[_[1]]],
                        x = [
                          ...((null == (r = l.autoPlacement)
                            ? void 0
                            : r.overflows) || []),
                          { placement: b, overflows: E },
                        ],
                        w = y[g + 1];
                      if (w)
                        return {
                          data: { index: g + 1, overflows: x },
                          reset: { placement: w },
                        };
                      let k = x
                          .map((e) => {
                            let t = Z(e.placement);
                            return [
                              e.placement,
                              t && f
                                ? e.overflows
                                    .slice(0, 2)
                                    .reduce((e, t) => e + t, 0)
                                : e.overflows[0],
                              e.overflows,
                            ];
                          })
                          .sort((e, t) => e[1] - t[1]),
                        O =
                          (null ==
                          (i = k.filter((e) =>
                            e[2].slice(0, Z(e[0]) ? 2 : 3).every((e) => e <= 0),
                          )[0])
                            ? void 0
                            : i[0]) || k[0][0];
                      return O !== u
                        ? {
                            data: { index: g + 1, overflows: x },
                            reset: { placement: O },
                          }
                        : {};
                    },
                  }
                );
              },
              es = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "flip",
                    options: e,
                    async fn(t) {
                      var n, r, i, o, a;
                      let {
                          placement: l,
                          middlewareData: u,
                          rects: s,
                          initialPlacement: c,
                          platform: f,
                          elements: d,
                        } = t,
                        {
                          mainAxis: p = !0,
                          crossAxis: v = !0,
                          fallbackPlacements: h,
                          fallbackStrategy: y = "bestFit",
                          fallbackAxisSideDirection: m = "none",
                          flipAlignment: g = !0,
                          ...b
                        } = K(e, t);
                      if (null != (n = u.arrow) && n.alignmentOffset) return {};
                      let _ = G(l),
                        E = G(c) === c,
                        x = await (null == f.isRTL
                          ? void 0
                          : f.isRTL(d.floating)),
                        w =
                          h ||
                          (E || !g
                            ? [et(c)]
                            : (function (e) {
                                let t = et(e);
                                return [ee(e), t, ee(t)];
                              })(c));
                      h ||
                        "none" === m ||
                        w.push(
                          ...(function (e, t, n, r) {
                            let i = Z(e),
                              o = (function (e, t, n) {
                                let r = ["left", "right"],
                                  i = ["right", "left"];
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    if (n) return t ? i : r;
                                    return t ? r : i;
                                  case "left":
                                  case "right":
                                    return t
                                      ? ["top", "bottom"]
                                      : ["bottom", "top"];
                                  default:
                                    return [];
                                }
                              })(G(e), "start" === n, r);
                            return (
                              i &&
                                ((o = o.map((e) => e + "-" + i)),
                                t && (o = o.concat(o.map(ee)))),
                              o
                            );
                          })(c, g, m, x),
                        );
                      let k = [c, ...w],
                        O = await ea(t, b),
                        S = [],
                        P = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                      if ((p && S.push(O[_]), v)) {
                        let e = $(l, s, x);
                        S.push(O[e[0]], O[e[1]]);
                      }
                      if (
                        ((P = [...P, { placement: l, overflows: S }]),
                        !S.every((e) => e <= 0))
                      ) {
                        let e =
                            ((null == (i = u.flip) ? void 0 : i.index) || 0) +
                            1,
                          t = k[e];
                        if (t)
                          return {
                            data: { index: e, overflows: P },
                            reset: { placement: t },
                          };
                        let n =
                          null ==
                          (o = P.filter((e) => e.overflows[0] <= 0).sort(
                            (e, t) => e.overflows[1] - t.overflows[1],
                          )[0])
                            ? void 0
                            : o.placement;
                        if (!n)
                          switch (y) {
                            case "bestFit": {
                              let e =
                                null ==
                                (a = P.map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0),
                                ]).sort((e, t) => e[1] - t[1])[0])
                                  ? void 0
                                  : a[0];
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
            function ef(e) {
              return q.some((t) => e[t] >= 0);
            }
            let ed = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    let { rects: n } = t,
                      { strategy: r = "referenceHidden", ...i } = K(e, t);
                    switch (r) {
                      case "referenceHidden": {
                        let e = ec(
                          await ea(t, { ...i, elementContext: "reference" }),
                          n.reference,
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: ef(e),
                          },
                        };
                      }
                      case "escaped": {
                        let e = ec(
                          await ea(t, { ...i, altBoundary: !0 }),
                          n.floating,
                        );
                        return { data: { escapedOffsets: e, escaped: ef(e) } };
                      }
                      default:
                        return {};
                    }
                  },
                }
              );
            };
            function ep(e) {
              let t = z(...e.map((e) => e.left)),
                n = z(...e.map((e) => e.top));
              return {
                x: t,
                y: n,
                width: F(...e.map((e) => e.right)) - t,
                height: F(...e.map((e) => e.bottom)) - n,
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
                        rects: i,
                        platform: o,
                        strategy: a,
                      } = t,
                      { padding: l = 2, x: u, y: s } = K(e, t),
                      c = Array.from(
                        (await (null == o.getClientRects
                          ? void 0
                          : o.getClientRects(r.reference))) || [],
                      ),
                      f = (function (e) {
                        let t = e.slice().sort((e, t) => e.y - t.y),
                          n = [],
                          r = null;
                        for (let e = 0; e < t.length; e++) {
                          let i = t[e];
                          !r || i.y - r.y > r.height / 2
                            ? n.push([i])
                            : n[n.length - 1].push(i),
                            (r = i);
                        }
                        return n.map((e) => er(ep(e)));
                      })(c),
                      d = er(ep(c)),
                      p = en(l),
                      v = await o.getElementRects({
                        reference: {
                          getBoundingClientRect: function () {
                            if (
                              2 === f.length &&
                              f[0].left > f[1].right &&
                              null != u &&
                              null != s
                            )
                              return (
                                f.find(
                                  (e) =>
                                    u > e.left - p.left &&
                                    u < e.right + p.right &&
                                    s > e.top - p.top &&
                                    s < e.bottom + p.bottom,
                                ) || d
                              );
                            if (f.length >= 2) {
                              if ("y" === J(n)) {
                                let e = f[0],
                                  t = f[f.length - 1],
                                  r = "top" === G(n),
                                  i = e.top,
                                  o = t.bottom,
                                  a = r ? e.left : t.left,
                                  l = r ? e.right : t.right;
                                return {
                                  top: i,
                                  bottom: o,
                                  left: a,
                                  right: l,
                                  width: l - a,
                                  height: o - i,
                                  x: a,
                                  y: i,
                                };
                              }
                              let e = "left" === G(n),
                                t = F(...f.map((e) => e.right)),
                                r = z(...f.map((e) => e.left)),
                                i = f.filter((n) =>
                                  e ? n.left === r : n.right === t,
                                ),
                                o = i[0].top,
                                a = i[i.length - 1].bottom;
                              return {
                                top: o,
                                bottom: a,
                                left: r,
                                right: t,
                                width: t - r,
                                height: a - o,
                                x: r,
                                y: o,
                              };
                            }
                            return d;
                          },
                        },
                        floating: r.floating,
                        strategy: a,
                      });
                    return i.reference.x !== v.reference.x ||
                      i.reference.y !== v.reference.y ||
                      i.reference.width !== v.reference.width ||
                      i.reference.height !== v.reference.height
                      ? { reset: { rects: v } }
                      : {};
                  },
                }
              );
            };
            async function eh(e, t) {
              let { placement: n, platform: r, elements: i } = e,
                o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)),
                a = G(n),
                l = Z(n),
                u = "y" === J(n),
                s = ["left", "top"].includes(a) ? -1 : 1,
                c = o && u ? -1 : 1,
                f = K(t, e),
                {
                  mainAxis: d,
                  crossAxis: p,
                  alignmentAxis: v,
                } = "number" == typeof f
                  ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
                  : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
              return (
                l && "number" == typeof v && (p = "end" === l ? -1 * v : v),
                u ? { x: p * c, y: d * s } : { x: d * s, y: p * c }
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
                        i = await eh(t, e);
                      return { x: n + i.x, y: r + i.y, data: i };
                    },
                  }
                );
              },
              em = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "shift",
                    options: e,
                    async fn(t) {
                      let { x: n, y: r, placement: i } = t,
                        {
                          mainAxis: o = !0,
                          crossAxis: a = !1,
                          limiter: l = {
                            fn: (e) => {
                              let { x: t, y: n } = e;
                              return { x: t, y: n };
                            },
                          },
                          ...u
                        } = K(e, t),
                        s = { x: n, y: r },
                        c = await ea(t, u),
                        f = J(G(i)),
                        d = X(f),
                        p = s[d],
                        v = s[f];
                      if (o) {
                        let e = "y" === d ? "top" : "left",
                          t = "y" === d ? "bottom" : "right",
                          n = p + c[e],
                          r = p - c[t];
                        p = F(n, z(p, r));
                      }
                      if (a) {
                        let e = "y" === f ? "top" : "left",
                          t = "y" === f ? "bottom" : "right",
                          n = v + c[e],
                          r = v - c[t];
                        v = F(n, z(v, r));
                      }
                      let h = l.fn({ ...t, [d]: p, [f]: v });
                      return { ...h, data: { x: h.x - n, y: h.y - r } };
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
                          placement: i,
                          rects: o,
                          middlewareData: a,
                        } = t,
                        {
                          offset: l = 0,
                          mainAxis: u = !0,
                          crossAxis: s = !0,
                        } = K(e, t),
                        c = { x: n, y: r },
                        f = J(i),
                        d = X(f),
                        p = c[d],
                        v = c[f],
                        h = K(l, t),
                        y =
                          "number" == typeof h
                            ? { mainAxis: h, crossAxis: 0 }
                            : { mainAxis: 0, crossAxis: 0, ...h };
                      if (u) {
                        let e = "y" === d ? "height" : "width",
                          t = o.reference[d] - o.floating[e] + y.mainAxis,
                          n = o.reference[d] + o.reference[e] - y.mainAxis;
                        p < t ? (p = t) : p > n && (p = n);
                      }
                      if (s) {
                        var m, g;
                        let e = "y" === d ? "width" : "height",
                          t = ["top", "left"].includes(G(i)),
                          n =
                            o.reference[f] -
                            o.floating[e] +
                            ((t && (null == (m = a.offset) ? void 0 : m[f])) ||
                              0) +
                            (t ? 0 : y.crossAxis),
                          r =
                            o.reference[f] +
                            o.reference[e] +
                            (t
                              ? 0
                              : (null == (g = a.offset) ? void 0 : g[f]) || 0) -
                            (t ? y.crossAxis : 0);
                        v < n ? (v = n) : v > r && (v = r);
                      }
                      return { [d]: p, [f]: v };
                    },
                  }
                );
              },
              eb = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "size",
                    options: e,
                    async fn(t) {
                      let n, r;
                      let {
                          placement: i,
                          rects: o,
                          platform: a,
                          elements: l,
                        } = t,
                        { apply: u = () => {}, ...s } = K(e, t),
                        c = await ea(t, s),
                        f = G(i),
                        d = Z(i),
                        p = "y" === J(i),
                        { width: v, height: h } = o.floating;
                      "top" === f || "bottom" === f
                        ? ((n = f),
                          (r =
                            d ===
                            ((await (null == a.isRTL
                              ? void 0
                              : a.isRTL(l.floating)))
                              ? "start"
                              : "end")
                              ? "left"
                              : "right"))
                        : ((r = f), (n = "end" === d ? "top" : "bottom"));
                      let y = h - c[n],
                        m = v - c[r],
                        g = !t.middlewareData.shift,
                        b = y,
                        _ = m;
                      if (p) {
                        let e = v - c.left - c.right;
                        _ = d || g ? z(m, e) : e;
                      } else {
                        let e = h - c.top - c.bottom;
                        b = d || g ? z(y, e) : e;
                      }
                      if (g && !d) {
                        let e = F(c.left, 0),
                          t = F(c.right, 0),
                          n = F(c.top, 0),
                          r = F(c.bottom, 0);
                        p
                          ? (_ =
                              v -
                              2 *
                                (0 !== e || 0 !== t
                                  ? e + t
                                  : F(c.left, c.right)))
                          : (b =
                              h -
                              2 *
                                (0 !== n || 0 !== r
                                  ? n + r
                                  : F(c.top, c.bottom)));
                      }
                      await u({ ...t, availableWidth: _, availableHeight: b });
                      let E = await a.getDimensions(l.floating);
                      return v !== E.width || h !== E.height
                        ? { reset: { rects: !0 } }
                        : {};
                    },
                  }
                );
              };
            function e_(e) {
              let t = b(e),
                n = parseFloat(t.width) || 0,
                r = parseFloat(t.height) || 0,
                i = p(e),
                o = i ? e.offsetWidth : n,
                a = i ? e.offsetHeight : r,
                l = H(n) !== o || H(r) !== a;
              return l && ((n = o), (r = a)), { width: n, height: r, $: l };
            }
            function eE(e) {
              return d(e) ? e : e.contextElement;
            }
            function ex(e) {
              let t = eE(e);
              if (!p(t)) return W(1);
              let n = t.getBoundingClientRect(),
                { width: r, height: i, $: o } = e_(t),
                a = (o ? H(n.width) : n.width) / r,
                l = (o ? H(n.height) : n.height) / i;
              return (
                (a && Number.isFinite(a)) || (a = 1),
                (l && Number.isFinite(l)) || (l = 1),
                { x: a, y: l }
              );
            }
            let ew = W(0);
            function ek(e) {
              let t = s(e);
              return m() && t.visualViewport
                ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop,
                  }
                : ew;
            }
            function eO(e, t, n, r) {
              var i;
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let o = e.getBoundingClientRect(),
                a = eE(e),
                l = W(1);
              t && (r ? d(r) && (l = ex(r)) : (l = ex(e)));
              let u = (void 0 === (i = n) && (i = !1),
                r && (!i || r === s(a)) && i)
                  ? ek(a)
                  : W(0),
                c = (o.left + u.x) / l.x,
                f = (o.top + u.y) / l.y,
                p = o.width / l.x,
                v = o.height / l.y;
              if (a) {
                let e = s(a),
                  t = r && d(r) ? s(r) : r,
                  n = e.frameElement;
                for (; n && r && t !== e; ) {
                  let e = ex(n),
                    t = n.getBoundingClientRect(),
                    r = b(n),
                    i =
                      t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    o = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                  (c *= e.x),
                    (f *= e.y),
                    (p *= e.x),
                    (v *= e.y),
                    (c += i),
                    (f += o),
                    (n = s(n).frameElement);
                }
              }
              return er({ width: p, height: v, x: c, y: f });
            }
            function eS(e) {
              return eO(c(e)).left + _(e).scrollLeft;
            }
            function eP(e, t, n) {
              let r;
              if ("viewport" === t)
                r = (function (e, t) {
                  let n = s(e),
                    r = c(e),
                    i = n.visualViewport,
                    o = r.clientWidth,
                    a = r.clientHeight,
                    l = 0,
                    u = 0;
                  if (i) {
                    (o = i.width), (a = i.height);
                    let e = m();
                    (!e || (e && "fixed" === t)) &&
                      ((l = i.offsetLeft), (u = i.offsetTop));
                  }
                  return { width: o, height: a, x: l, y: u };
                })(e, n);
              else if ("document" === t)
                r = (function (e) {
                  let t = c(e),
                    n = _(e),
                    r = e.ownerDocument.body,
                    i = F(
                      t.scrollWidth,
                      t.clientWidth,
                      r.scrollWidth,
                      r.clientWidth,
                    ),
                    o = F(
                      t.scrollHeight,
                      t.clientHeight,
                      r.scrollHeight,
                      r.clientHeight,
                    ),
                    a = -n.scrollLeft + eS(e),
                    l = -n.scrollTop;
                  return (
                    "rtl" === b(r).direction &&
                      (a += F(t.clientWidth, r.clientWidth) - i),
                    { width: i, height: o, x: a, y: l }
                  );
                })(c(e));
              else if (d(t))
                r = (function (e, t) {
                  let n = eO(e, !0, "fixed" === t),
                    r = n.top + e.clientTop,
                    i = n.left + e.clientLeft,
                    o = p(e) ? ex(e) : W(1),
                    a = e.clientWidth * o.x;
                  return {
                    width: a,
                    height: e.clientHeight * o.y,
                    x: i * o.x,
                    y: r * o.y,
                  };
                })(t, n);
              else {
                let n = ek(e);
                r = { ...t, x: t.x - n.x, y: t.y - n.y };
              }
              return er(r);
            }
            function eR(e, t) {
              return p(e) && "fixed" !== b(e).position
                ? t
                  ? t(e)
                  : e.offsetParent
                : null;
            }
            function ej(e, t) {
              let n = s(e);
              if (!p(e)) return n;
              let r = eR(e, t);
              for (
                ;
                r &&
                ["table", "td", "th"].includes(u(r)) &&
                "static" === b(r).position;

              )
                r = eR(r, t);
              return r &&
                ("html" === u(r) ||
                  ("body" === u(r) && "static" === b(r).position && !y(r)))
                ? n
                : r ||
                    (function (e) {
                      let t = E(e);
                      for (; p(t) && !g(t); ) {
                        if (y(t)) return t;
                        t = E(t);
                      }
                      return null;
                    })(e) ||
                    n;
            }
            let eA = async function (e) {
                let { reference: t, floating: n, strategy: r } = e,
                  i = this.getOffsetParent || ej,
                  o = this.getDimensions;
                return {
                  reference: (function (e, t, n) {
                    let r = p(t),
                      i = c(t),
                      o = "fixed" === n,
                      a = eO(e, !0, o, t),
                      l = { scrollLeft: 0, scrollTop: 0 },
                      s = W(0);
                    if (r || (!r && !o)) {
                      if ((("body" !== u(t) || h(i)) && (l = _(t)), r)) {
                        let e = eO(t, !0, o, t);
                        (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                      } else i && (s.x = eS(i));
                    }
                    return {
                      x: a.left + l.scrollLeft - s.x,
                      y: a.top + l.scrollTop - s.y,
                      width: a.width,
                      height: a.height,
                    };
                  })(t, await i(n), r),
                  floating: { x: 0, y: 0, ...(await o(n)) },
                };
              },
              eC = {
                convertOffsetParentRelativeRectToViewportRelativeRect:
                  function (e) {
                    let { rect: t, offsetParent: n, strategy: r } = e,
                      i = p(n),
                      o = c(n);
                    if (n === o) return t;
                    let a = { scrollLeft: 0, scrollTop: 0 },
                      l = W(1),
                      s = W(0);
                    if (
                      (i || (!i && "fixed" !== r)) &&
                      (("body" !== u(n) || h(o)) && (a = _(n)), p(n))
                    ) {
                      let e = eO(n);
                      (l = ex(n)),
                        (s.x = e.x + n.clientLeft),
                        (s.y = e.y + n.clientTop);
                    }
                    return {
                      width: t.width * l.x,
                      height: t.height * l.y,
                      x: t.x * l.x - a.scrollLeft * l.x + s.x,
                      y: t.y * l.y - a.scrollTop * l.y + s.y,
                    };
                  },
                getDocumentElement: c,
                getClippingRect: function (e) {
                  let {
                      element: t,
                      boundary: n,
                      rootBoundary: r,
                      strategy: i,
                    } = e,
                    o = [
                      ...("clippingAncestors" === n
                        ? (function (e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = x(e, [], !1).filter(
                                (e) => d(e) && "body" !== u(e),
                              ),
                              i = null,
                              o = "fixed" === b(e).position,
                              a = o ? E(e) : e;
                            for (; d(a) && !g(a); ) {
                              let t = b(a),
                                n = y(a);
                              n || "fixed" !== t.position || (i = null),
                                (
                                  o
                                    ? !n && !i
                                    : (!n &&
                                        "static" === t.position &&
                                        !!i &&
                                        ["absolute", "fixed"].includes(
                                          i.position,
                                        )) ||
                                      (h(a) &&
                                        !n &&
                                        (function e(t, n) {
                                          let r = E(t);
                                          return (
                                            !(r === n || !d(r) || g(r)) &&
                                            ("fixed" === b(r).position ||
                                              e(r, n))
                                          );
                                        })(e, a))
                                )
                                  ? (r = r.filter((e) => e !== a))
                                  : (i = t),
                                (a = E(a));
                            }
                            return t.set(e, r), r;
                          })(t, this._c)
                        : [].concat(n)),
                      r,
                    ],
                    a = o[0],
                    l = o.reduce(
                      (e, n) => {
                        let r = eP(t, n, i);
                        return (
                          (e.top = F(r.top, e.top)),
                          (e.right = z(r.right, e.right)),
                          (e.bottom = z(r.bottom, e.bottom)),
                          (e.left = F(r.left, e.left)),
                          e
                        );
                      },
                      eP(t, a, i),
                    );
                  return {
                    width: l.right - l.left,
                    height: l.bottom - l.top,
                    x: l.left,
                    y: l.top,
                  };
                },
                getOffsetParent: ej,
                getElementRects: eA,
                getClientRects: function (e) {
                  return Array.from(e.getClientRects());
                },
                getDimensions: function (e) {
                  return e_(e);
                },
                getScale: ex,
                isElement: d,
                isRTL: function (e) {
                  return "rtl" === b(e).direction;
                },
              };
            function eT(e, t, n, r) {
              let i;
              void 0 === r && (r = {});
              let {
                  ancestorScroll: o = !0,
                  ancestorResize: a = !0,
                  elementResize: l = "function" == typeof ResizeObserver,
                  layoutShift: u = "function" == typeof IntersectionObserver,
                  animationFrame: s = !1,
                } = r,
                f = eE(e),
                d = o || a ? [...(f ? x(f) : []), ...x(t)] : [];
              d.forEach((e) => {
                o && e.addEventListener("scroll", n, { passive: !0 }),
                  a && e.addEventListener("resize", n);
              });
              let p =
                  f && u
                    ? (function (e, t) {
                        let n,
                          r = null,
                          i = c(e);
                        function o() {
                          clearTimeout(n), r && r.disconnect(), (r = null);
                        }
                        return (
                          !(function a(l, u) {
                            void 0 === l && (l = !1),
                              void 0 === u && (u = 1),
                              o();
                            let {
                              left: s,
                              top: c,
                              width: f,
                              height: d,
                            } = e.getBoundingClientRect();
                            if ((l || t(), !f || !d)) return;
                            let p = U(c),
                              v = U(i.clientWidth - (s + f)),
                              h = {
                                rootMargin:
                                  -p +
                                  "px " +
                                  -v +
                                  "px " +
                                  -U(i.clientHeight - (c + d)) +
                                  "px " +
                                  -U(s) +
                                  "px",
                                threshold: F(0, z(1, u)) || 1,
                              },
                              y = !0;
                            function m(e) {
                              let t = e[0].intersectionRatio;
                              if (t !== u) {
                                if (!y) return a();
                                t
                                  ? a(!1, t)
                                  : (n = setTimeout(() => {
                                      a(!1, 1e-7);
                                    }, 100));
                              }
                              y = !1;
                            }
                            try {
                              r = new IntersectionObserver(m, {
                                ...h,
                                root: i.ownerDocument,
                              });
                            } catch (e) {
                              r = new IntersectionObserver(m, h);
                            }
                            r.observe(e);
                          })(!0),
                          o
                        );
                      })(f, n)
                    : null,
                v = -1,
                h = null;
              l &&
                ((h = new ResizeObserver((e) => {
                  let [r] = e;
                  r &&
                    r.target === f &&
                    h &&
                    (h.unobserve(t),
                    cancelAnimationFrame(v),
                    (v = requestAnimationFrame(() => {
                      h && h.observe(t);
                    }))),
                    n();
                })),
                f && !s && h.observe(f),
                h.observe(t));
              let y = s ? eO(e) : null;
              return (
                s &&
                  (function t() {
                    let r = eO(e);
                    y &&
                      (r.x !== y.x ||
                        r.y !== y.y ||
                        r.width !== y.width ||
                        r.height !== y.height) &&
                      n(),
                      (y = r),
                      (i = requestAnimationFrame(t));
                  })(),
                n(),
                () => {
                  d.forEach((e) => {
                    o && e.removeEventListener("scroll", n),
                      a && e.removeEventListener("resize", n);
                  }),
                    p && p(),
                    h && h.disconnect(),
                    (h = null),
                    s && cancelAnimationFrame(i);
                }
              );
            }
            let eI = (e, t, n) => {
                let r = new Map(),
                  i = { platform: eC, ...n },
                  o = { ...i.platform, _c: r };
                return eo(e, t, { ...i, platform: o });
              },
              eL =
                ((i = {
                  createPortal: () => a.createPortal,
                  flushSync: () => a.flushSync,
                }),
                (o = {}),
                n.d(o, i),
                o),
              eN = (e) => ({
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
            var eD =
              "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
            function eM(e, t) {
              let n, r, i;
              if (e === t) return !0;
              if (typeof e != typeof t) return !1;
              if ("function" == typeof e && e.toString() === t.toString())
                return !0;
              if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                  if ((n = e.length) != t.length) return !1;
                  for (r = n; 0 != r--; ) if (!eM(e[r], t[r])) return !1;
                  return !0;
                }
                if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length)
                  return !1;
                for (r = n; 0 != r--; )
                  if (!{}.hasOwnProperty.call(t, i[r])) return !1;
                for (r = n; 0 != r--; ) {
                  let n = i[r];
                  if (("_owner" !== n || !e.$$typeof) && !eM(e[n], t[n]))
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
            function ez(e) {
              let t = l.useRef(e);
              return (
                eD(() => {
                  t.current = e;
                }),
                t
              );
            }
            var eF =
                'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
              eH = "undefined" == typeof Element,
              eU = eH
                ? function () {}
                : Element.prototype.matches ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector,
              eW =
                !eH && Element.prototype.getRootNode
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
              eV = function e(t, n) {
                void 0 === n && (n = !0);
                var r,
                  i =
                    null == t
                      ? void 0
                      : null === (r = t.getAttribute) || void 0 === r
                        ? void 0
                        : r.call(t, "inert");
                return "" === i || "true" === i || (n && t && e(t.parentNode));
              },
              eY = function (e) {
                var t,
                  n =
                    null == e
                      ? void 0
                      : null === (t = e.getAttribute) || void 0 === t
                        ? void 0
                        : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              },
              eK = function (e, t, n) {
                if (eV(e)) return [];
                var r = Array.prototype.slice.apply(e.querySelectorAll(eF));
                return t && eU.call(e, eF) && r.unshift(e), (r = r.filter(n));
              },
              eG = function e(t, n, r) {
                for (var i = [], o = Array.from(t); o.length; ) {
                  var a = o.shift();
                  if (!eV(a, !1)) {
                    if ("SLOT" === a.tagName) {
                      var l = a.assignedElements(),
                        u = e(l.length ? l : a.children, !0, r);
                      r.flatten
                        ? i.push.apply(i, u)
                        : i.push({ scopeParent: a, candidates: u });
                    } else {
                      eU.call(a, eF) &&
                        r.filter(a) &&
                        (n || !t.includes(a)) &&
                        i.push(a);
                      var s =
                          a.shadowRoot ||
                          ("function" == typeof r.getShadowRoot &&
                            r.getShadowRoot(a)),
                        c =
                          !eV(s, !1) &&
                          (!r.shadowRootFilter || r.shadowRootFilter(a));
                      if (s && c) {
                        var f = e(!0 === s ? a.children : s.children, !0, r);
                        r.flatten
                          ? i.push.apply(i, f)
                          : i.push({ scopeParent: a, candidates: f });
                      } else o.unshift.apply(o, a.children);
                    }
                  }
                }
                return i;
              },
              eZ = function (e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
              },
              eX = function (e) {
                if (!e) throw Error("No node provided");
                return e.tabIndex < 0 &&
                  (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || eY(e)) &&
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
                  n = e.form || eW(e),
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
                var i = e0(t, e.form);
                return !i || i === e;
              },
              e2 = function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  l,
                  u = e && eW(e),
                  s = null === (t = u) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (u && u !== e)
                  for (
                    c = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (i = e.ownerDocument) &&
                        void 0 !== i &&
                        i.contains(e))
                    );
                    !c && s;

                  )
                    c = !!(
                      null !==
                        (a = s =
                          null === (o = u = eW(s)) || void 0 === o
                            ? void 0
                            : o.host) &&
                      void 0 !== a &&
                      null !== (l = a.ownerDocument) &&
                      void 0 !== l &&
                      l.contains(s)
                    );
                return c;
              },
              e3 = function (e) {
                var t = e.getBoundingClientRect(),
                  n = t.width,
                  r = t.height;
                return 0 === n && 0 === r;
              },
              e5 = function (e, t) {
                var n = t.displayCheck,
                  r = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var i = eU.call(e, "details>summary:first-of-type")
                  ? e.parentElement
                  : e;
                if (eU.call(i, "details:not([open]) *")) return !0;
                if (n && "full" !== n && "legacy-full" !== n) {
                  if ("non-zero-area" === n) return e3(e);
                } else {
                  if ("function" == typeof r) {
                    for (var o = e; e; ) {
                      var a = e.parentElement,
                        l = eW(e);
                      if (a && !a.shadowRoot && !0 === r(a)) return e3(e);
                      e = e.assignedSlot
                        ? e.assignedSlot
                        : a || l === e.ownerDocument
                          ? a
                          : l.host;
                    }
                    e = o;
                  }
                  if (e2(e)) return !e.getClientRects().length;
                  if ("legacy-full" !== n) return !0;
                }
                return !1;
              },
              e8 = function (e) {
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
                var n, r, i;
                return (
                  !(
                    (e$((n = t)) && "radio" === n.type && !e1(n)) ||
                    0 > eX(t)
                  ) &&
                  ((r = e),
                  !(
                    (i = t).disabled ||
                    eV(i) ||
                    (e$(i) && "hidden" === i.type) ||
                    e5(i, r) ||
                    ("DETAILS" === i.tagName &&
                      Array.prototype.slice
                        .apply(i.children)
                        .some(function (e) {
                          return "SUMMARY" === e.tagName;
                        })) ||
                    e8(i)
                  ))
                );
              },
              e6 = function (e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!isNaN(t) || t >= 0;
              },
              e9 = function e(t) {
                var n = [],
                  r = [];
                return (
                  t.forEach(function (t, i) {
                    var o = !!t.scopeParent,
                      a = o ? t.scopeParent : t,
                      l = eQ(a, o),
                      u = o ? e(t.candidates) : a;
                    0 === l
                      ? o
                        ? n.push.apply(n, u)
                        : n.push(a)
                      : r.push({
                          documentOrder: i,
                          tabIndex: l,
                          item: t,
                          isScope: o,
                          content: u,
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
              e7 = function (e, t) {
                return e9(
                  (t = t || {}).getShadowRoot
                    ? eG([e], t.includeContainer, {
                        filter: e4.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: e6,
                      })
                    : eK(e, t.includeContainer, e4.bind(null, t)),
                );
              };
            function te(e) {
              return l.useMemo(
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
            let tt = l["useInsertionEffect".toString()] || ((e) => e());
            function tn(e) {
              let t = l.useRef(() => {});
              return (
                tt(() => {
                  t.current = e;
                }),
                l.useCallback(function () {
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
              ti = "ArrowDown",
              to = "ArrowLeft",
              ta = "ArrowRight";
            function tl(e, t, n) {
              return Math.floor(e / t) !== n;
            }
            function tu(e, t) {
              return t < 0 || t >= e.current.length;
            }
            function ts(e, t) {
              return tf(e, { disabledIndices: t });
            }
            function tc(e, t) {
              return tf(e, {
                decrement: !0,
                startingIndex: e.current.length,
                disabledIndices: t,
              });
            }
            function tf(e, t) {
              let {
                  startingIndex: n = -1,
                  decrement: r = !1,
                  disabledIndices: i,
                  amount: o = 1,
                } = void 0 === t ? {} : t,
                a = e.current,
                l = n;
              do {
                var u, s;
                l += r ? -o : o;
              } while (
                l >= 0 &&
                l <= a.length - 1 &&
                (i
                  ? i.includes(l)
                  : null == a[l] ||
                    (null == (u = a[l])
                      ? void 0
                      : u.hasAttribute("disabled")) ||
                    (null == (s = a[l])
                      ? void 0
                      : s.getAttribute("aria-disabled")) === "true")
              );
              return l;
            }
            function td(e, t) {
              let {
                  event: n,
                  orientation: r,
                  loop: i,
                  cols: o,
                  disabledIndices: a,
                  minIndex: l,
                  maxIndex: u,
                  prevIndex: s,
                  stopEvent: c = !1,
                } = t,
                f = s;
              if (n.key === tr) {
                if ((c && M(n), -1 === s)) f = u;
                else if (
                  ((f = tf(e, {
                    startingIndex: f,
                    amount: o,
                    decrement: !0,
                    disabledIndices: a,
                  })),
                  i && (s - o < l || f < 0))
                ) {
                  let e = s % o,
                    t = u % o,
                    n = u - (t - e);
                  f = t === e ? u : t > e ? n : n - o;
                }
                tu(e, f) && (f = s);
              }
              if (
                (n.key === ti &&
                  (c && M(n),
                  -1 === s
                    ? (f = l)
                    : ((f = tf(e, {
                        startingIndex: s,
                        amount: o,
                        disabledIndices: a,
                      })),
                      i &&
                        s + o > u &&
                        (f = tf(e, {
                          startingIndex: (s % o) - o,
                          amount: o,
                          disabledIndices: a,
                        }))),
                  tu(e, f) && (f = s)),
                "both" === r)
              ) {
                let t = U(s / o);
                n.key === ta &&
                  (c && M(n),
                  s % o != o - 1
                    ? ((f = tf(e, { startingIndex: s, disabledIndices: a })),
                      i &&
                        tl(f, o, t) &&
                        (f = tf(e, {
                          startingIndex: s - (s % o) - 1,
                          disabledIndices: a,
                        })))
                    : i &&
                      (f = tf(e, {
                        startingIndex: s - (s % o) - 1,
                        disabledIndices: a,
                      })),
                  tl(f, o, t) && (f = s)),
                  n.key === to &&
                    (c && M(n),
                    s % o != 0
                      ? ((f = tf(e, {
                          startingIndex: s,
                          disabledIndices: a,
                          decrement: !0,
                        })),
                        i &&
                          tl(f, o, t) &&
                          (f = tf(e, {
                            startingIndex: s + (o - (s % o)),
                            decrement: !0,
                            disabledIndices: a,
                          })))
                      : i &&
                        (f = tf(e, {
                          startingIndex: s + (o - (s % o)),
                          decrement: !0,
                          disabledIndices: a,
                        })),
                    tl(f, o, t) && (f = s));
                let r = U(u / o) === t;
                tu(e, f) &&
                  (f =
                    i && r
                      ? n.key === to
                        ? u
                        : tf(e, {
                            startingIndex: s - (s % o) - 1,
                            disabledIndices: a,
                          })
                      : s);
              }
              return f;
            }
            let tp = 0;
            function tv(e, t) {
              void 0 === t && (t = {});
              let {
                preventScroll: n = !1,
                cancelPrevious: r = !0,
                sync: i = !1,
              } = t;
              r && cancelAnimationFrame(tp);
              let o = () =>
                null == e ? void 0 : e.focus({ preventScroll: n });
              i ? o() : (tp = requestAnimationFrame(o));
            }
            var th =
              "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
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
            let tm = l.createContext({
              register: () => {},
              unregister: () => {},
              map: new Map(),
              elementsRef: { current: [] },
            });
            function tg(e) {
              let { children: t, elementsRef: n, labelsRef: r } = e,
                [i, o] = l.useState(() => new Map()),
                a = l.useCallback((e) => {
                  o((t) => new Map(t).set(e, null));
                }, []),
                u = l.useCallback((e) => {
                  o((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
                }, []);
              return (
                th(() => {
                  let e = new Map(i);
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
                    })(i, e) && o(e);
                }, [i]),
                l.createElement(
                  tm.Provider,
                  {
                    value: l.useMemo(
                      () => ({
                        register: a,
                        unregister: u,
                        map: i,
                        elementsRef: n,
                        labelsRef: r,
                      }),
                      [a, u, i, n, r],
                    ),
                  },
                  t,
                )
              );
            }
            function tb(e) {
              let { label: t } = void 0 === e ? {} : e,
                [n, r] = l.useState(null),
                i = l.useRef(null),
                {
                  register: o,
                  unregister: a,
                  map: u,
                  elementsRef: s,
                  labelsRef: c,
                } = l.useContext(tm),
                f = l.useCallback(
                  (e) => {
                    if (
                      ((i.current = e), null !== n && ((s.current[n] = e), c))
                    ) {
                      var r;
                      let i = void 0 !== t;
                      c.current[n] = i
                        ? t
                        : null != (r = null == e ? void 0 : e.textContent)
                          ? r
                          : null;
                    }
                  },
                  [n, s, c, t],
                );
              return (
                th(() => {
                  let e = i.current;
                  if (e)
                    return (
                      o(e),
                      () => {
                        a(e);
                      }
                    );
                }, [o, a]),
                th(() => {
                  let e = i.current ? u.get(i.current) : null;
                  null != e && r(e);
                }, [u]),
                l.useMemo(() => ({ ref: f, index: null == n ? -1 : n }), [n, f])
              );
            }
            function t_(e, t) {
              return "function" == typeof e
                ? e(t)
                : e
                  ? l.cloneElement(e, t)
                  : l.createElement("div", t);
            }
            let tE = l.createContext({ activeIndex: 0, onNavigate: () => {} }),
              tx = [to, ta],
              tw = [tr, ti],
              tk = [...tx, ...tw],
              tO = l.forwardRef(function (e, t) {
                let {
                    render: n,
                    orientation: r = "both",
                    loop: i = !0,
                    cols: o = 1,
                    disabledIndices: a,
                    activeIndex: u,
                    onNavigate: s,
                    ...c
                  } = e,
                  [f, d] = l.useState(0),
                  p = null != u ? u : f,
                  v = tn(null != s ? s : d),
                  h = l.useRef([]),
                  y = n && "function" != typeof n ? n.props : {},
                  m = l.useMemo(
                    () => ({ activeIndex: p, onNavigate: v }),
                    [p, v],
                  ),
                  g = o > 1,
                  b = {
                    ...c,
                    ...y,
                    ref: t,
                    "aria-orientation": "both" === r ? void 0 : r,
                    onKeyDown(e) {
                      null == c.onKeyDown || c.onKeyDown(e),
                        null == y.onKeyDown || y.onKeyDown(e),
                        (function (e) {
                          if (!tk.includes(e.key)) return;
                          let t = ts(h, a),
                            n = tc(h, a),
                            l = p;
                          g &&
                            (l = td(h, {
                              event: e,
                              orientation: r,
                              loop: i,
                              cols: o,
                              disabledIndices: a,
                              minIndex: t,
                              maxIndex: n,
                              prevIndex: p,
                            }));
                          let u = {
                              horizontal: [ta],
                              vertical: [ti],
                              both: [ta, ti],
                            }[r],
                            s = {
                              horizontal: [to],
                              vertical: [tr],
                              both: [to, tr],
                            }[r],
                            c = g
                              ? tk
                              : { horizontal: tx, vertical: tw, both: tk }[r];
                          l === p &&
                            [...u, ...s].includes(e.key) &&
                            (l =
                              i && l === n && u.includes(e.key)
                                ? t
                                : i && l === t && s.includes(e.key)
                                  ? n
                                  : tf(h, {
                                      startingIndex: l,
                                      decrement: s.includes(e.key),
                                      disabledIndices: a,
                                    })),
                            l === p ||
                              tu(h, l) ||
                              (e.stopPropagation(),
                              c.includes(e.key) && e.preventDefault(),
                              v(l),
                              queueMicrotask(() => {
                                tv(h.current[l]);
                              }));
                        })(e);
                    },
                  };
                return l.createElement(
                  tE.Provider,
                  { value: m },
                  l.createElement(tg, { elementsRef: h }, t_(n, b)),
                );
              }),
              tS = l.forwardRef(function (e, t) {
                let { render: n, ...r } = e,
                  i = n && "function" != typeof n ? n.props : {},
                  { activeIndex: o, onNavigate: a } = l.useContext(tE),
                  { ref: u, index: s } = tb(),
                  c = te([u, t, i.ref]),
                  f = o === s;
                return t_(n, {
                  ...r,
                  ...i,
                  ref: c,
                  tabIndex: f ? 0 : -1,
                  "data-active": f ? "" : void 0,
                  onFocus(e) {
                    null == r.onFocus || r.onFocus(e),
                      null == i.onFocus || i.onFocus(e),
                      a(s);
                  },
                });
              });
            function tP() {
              return (tP = Object.assign
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
            let tR = !1,
              tj = 0,
              tA = () => "floating-ui-" + tj++,
              tC =
                l["useId".toString()] ||
                function () {
                  let [e, t] = l.useState(() => (tR ? tA() : void 0));
                  return (
                    th(() => {
                      null == e && t(tA());
                    }, []),
                    l.useEffect(() => {
                      tR || (tR = !0);
                    }, []),
                    e
                  );
                },
              tT = l.forwardRef(function (e, t) {
                let {
                    context: {
                      placement: n,
                      elements: { floating: r },
                      middlewareData: { arrow: i },
                    },
                    width: o = 14,
                    height: a = 7,
                    tipRadius: u = 0,
                    strokeWidth: s = 0,
                    staticOffset: c,
                    stroke: f,
                    d,
                    style: { transform: p, ...v } = {},
                    ...h
                  } = e,
                  y = tC();
                if (!r) return null;
                let m = (s *= 2) / 2,
                  g = (o / 2) * (-(u / 8) + 1),
                  b = ((a / 2) * u) / 4,
                  [_, E] = n.split("-"),
                  x = eC.isRTL(r),
                  w = !!d,
                  k = "top" === _ || "bottom" === _,
                  O = c && "end" === E ? "bottom" : "top",
                  S = c && "end" === E ? "right" : "left";
                c && x && (S = "end" === E ? "left" : "right");
                let P = (null == i ? void 0 : i.x) != null ? c || i.x : "",
                  R = (null == i ? void 0 : i.y) != null ? c || i.y : "",
                  j =
                    d ||
                    "M0,0 H" +
                      o +
                      " L" +
                      (o - g) +
                      "," +
                      (a - b) +
                      (" Q" + o / 2 + "," + a + " ") +
                      g +
                      "," +
                      (a - b) +
                      " Z",
                  A = {
                    top: w ? "rotate(180deg)" : "",
                    left: w ? "rotate(90deg)" : "rotate(-90deg)",
                    bottom: w ? "" : "rotate(180deg)",
                    right: w ? "rotate(-90deg)" : "rotate(90deg)",
                  }[_];
                return l.createElement(
                  "svg",
                  tP({}, h, {
                    "aria-hidden": !0,
                    ref: t,
                    width: w ? o : o + s,
                    height: o,
                    viewBox: "0 0 " + o + " " + (a > o ? a : o),
                    style: {
                      position: "absolute",
                      pointerEvents: "none",
                      [S]: P,
                      [O]: R,
                      [_]: k || w ? "100%" : "calc(100% - " + s / 2 + "px)",
                      transform: "" + A + (null != p ? p : ""),
                      ...v,
                    },
                  }),
                  s > 0 &&
                    l.createElement("path", {
                      clipPath: "url(#" + y + ")",
                      fill: "none",
                      stroke: f,
                      strokeWidth: s + (d ? 0 : 1),
                      d: j,
                    }),
                  l.createElement("path", {
                    stroke: s && !d ? h.fill : "none",
                    d: j,
                  }),
                  l.createElement(
                    "clipPath",
                    { id: y },
                    l.createElement("rect", {
                      x: -m,
                      y: m * (w ? -1 : 1),
                      width: o + s,
                      height: o,
                    }),
                  ),
                );
              });
            function tI() {
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
            let tL = l.createContext(null),
              tN = l.createContext(null),
              tD = () => {
                var e;
                return (null == (e = l.useContext(tL)) ? void 0 : e.id) || null;
              },
              tM = () => l.useContext(tN);
            function tq(e) {
              let t = tC(),
                n = tM(),
                r = tD(),
                i = e || r;
              return (
                th(() => {
                  let e = { id: t, parentId: i };
                  return (
                    null == n || n.addNode(e),
                    () => {
                      null == n || n.removeNode(e);
                    }
                  );
                }, [n, t, i]),
                t
              );
            }
            function tB(e) {
              let { children: t, id: n } = e,
                r = tD();
              return l.createElement(
                tL.Provider,
                { value: l.useMemo(() => ({ id: n, parentId: r }), [n, r]) },
                t,
              );
            }
            function tz(e) {
              let { children: t } = e,
                n = l.useRef([]),
                r = l.useCallback((e) => {
                  n.current = [...n.current, e];
                }, []),
                i = l.useCallback((e) => {
                  n.current = n.current.filter((t) => t !== e);
                }, []),
                o = l.useState(() => tI())[0];
              return l.createElement(
                tN.Provider,
                {
                  value: l.useMemo(
                    () => ({
                      nodesRef: n,
                      addNode: r,
                      removeNode: i,
                      events: o,
                    }),
                    [n, r, i, o],
                  ),
                },
                t,
              );
            }
            function tF(e) {
              return "data-floating-ui-" + e;
            }
            function tH(e) {
              let t = (0, l.useRef)(e);
              return (
                th(() => {
                  t.current = e;
                }),
                t
              );
            }
            let tU = tF("safe-polygon");
            function tW(e, t, n) {
              return n && !T(n)
                ? 0
                : "number" == typeof e
                  ? e
                  : null == e
                    ? void 0
                    : e[t];
            }
            function tV(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: i,
                  events: o,
                  elements: { domReference: a, floating: u },
                  refs: s,
                } = e,
                {
                  enabled: c = !0,
                  delay: f = 0,
                  handleClose: p = null,
                  mouseOnly: v = !1,
                  restMs: h = 0,
                  move: y = !0,
                } = t,
                m = tM(),
                g = tD(),
                b = tH(p),
                _ = tH(f),
                E = l.useRef(),
                x = l.useRef(),
                w = l.useRef(),
                O = l.useRef(),
                S = l.useRef(!0),
                P = l.useRef(!1),
                R = l.useRef(() => {}),
                j = l.useCallback(() => {
                  var e;
                  let t = null == (e = i.current.openEvent) ? void 0 : e.type;
                  return (
                    (null == t ? void 0 : t.includes("mouse")) &&
                    "mousedown" !== t
                  );
                }, [i]);
              l.useEffect(() => {
                if (c)
                  return (
                    o.on("dismiss", e),
                    () => {
                      o.off("dismiss", e);
                    }
                  );
                function e() {
                  clearTimeout(x.current),
                    clearTimeout(O.current),
                    (S.current = !0);
                }
              }, [c, o]),
                l.useEffect(() => {
                  if (!c || !b.current || !n) return;
                  function e(e) {
                    j() && r(!1, e);
                  }
                  let t = I(u).documentElement;
                  return (
                    t.addEventListener("mouseleave", e),
                    () => {
                      t.removeEventListener("mouseleave", e);
                    }
                  );
                }, [u, n, r, c, b, i, j]);
              let A = l.useCallback(
                  function (e, t) {
                    void 0 === t && (t = !0);
                    let n = tW(_.current, "close", E.current);
                    n && !w.current
                      ? (clearTimeout(x.current),
                        (x.current = setTimeout(() => r(!1, e), n)))
                      : t && (clearTimeout(x.current), r(!1, e));
                  },
                  [_, r],
                ),
                C = l.useCallback(() => {
                  R.current(), (w.current = void 0);
                }, []),
                L = l.useCallback(() => {
                  if (P.current) {
                    let e = I(s.floating.current).body;
                    (e.style.pointerEvents = ""),
                      e.removeAttribute(tU),
                      (P.current = !1);
                  }
                }, [s]);
              return (
                l.useEffect(() => {
                  if (c && d(a))
                    return (
                      n && a.addEventListener("mouseleave", s),
                      null == u || u.addEventListener("mouseleave", s),
                      y && a.addEventListener("mousemove", o, { once: !0 }),
                      a.addEventListener("mouseenter", o),
                      a.addEventListener("mouseleave", l),
                      () => {
                        n && a.removeEventListener("mouseleave", s),
                          null == u || u.removeEventListener("mouseleave", s),
                          y && a.removeEventListener("mousemove", o),
                          a.removeEventListener("mouseenter", o),
                          a.removeEventListener("mouseleave", l);
                      }
                    );
                  function t() {
                    return (
                      !!i.current.openEvent &&
                      ["click", "mousedown"].includes(i.current.openEvent.type)
                    );
                  }
                  function o(e) {
                    if (
                      (clearTimeout(x.current),
                      (S.current = !1),
                      (v && !T(E.current)) ||
                        (h > 0 && 0 === tW(_.current, "open")))
                    )
                      return;
                    let t = tW(_.current, "open", E.current);
                    t
                      ? (x.current = setTimeout(() => {
                          r(!0, e);
                        }, t))
                      : r(!0, e);
                  }
                  function l(r) {
                    if (t()) return;
                    R.current();
                    let i = I(u);
                    if ((clearTimeout(O.current), b.current)) {
                      n || clearTimeout(x.current),
                        (w.current = b.current({
                          ...e,
                          tree: m,
                          x: r.clientX,
                          y: r.clientY,
                          onClose() {
                            L(), C(), A(r);
                          },
                        }));
                      let t = w.current;
                      i.addEventListener("mousemove", t),
                        (R.current = () => {
                          i.removeEventListener("mousemove", t);
                        });
                      return;
                    }
                    ("touch" === E.current && k(u, r.relatedTarget)) || A(r);
                  }
                  function s(n) {
                    t() ||
                      null == b.current ||
                      b.current({
                        ...e,
                        tree: m,
                        x: n.clientX,
                        y: n.clientY,
                        onClose() {
                          L(), C(), A(n);
                        },
                      })(n);
                  }
                }, [a, u, c, e, v, h, y, A, C, L, r, n, m, _, b, i]),
                th(() => {
                  var e, t, r;
                  if (
                    c &&
                    n &&
                    null != (e = b.current) &&
                    e.__options.blockPointerEvents &&
                    j()
                  ) {
                    let e = I(u).body;
                    if (
                      (e.setAttribute(tU, ""),
                      (e.style.pointerEvents = "none"),
                      (P.current = !0),
                      d(a) && u)
                    ) {
                      let e =
                        null == m
                          ? void 0
                          : null ==
                              (t = m.nodesRef.current.find((e) => e.id === g))
                            ? void 0
                            : null == (r = t.context)
                              ? void 0
                              : r.elements.floating;
                      return (
                        e && (e.style.pointerEvents = ""),
                        (a.style.pointerEvents = "auto"),
                        (u.style.pointerEvents = "auto"),
                        () => {
                          (a.style.pointerEvents = ""),
                            (u.style.pointerEvents = "");
                        }
                      );
                    }
                  }
                }, [c, n, g, u, a, m, b, i, j]),
                th(() => {
                  n || ((E.current = void 0), C(), L());
                }, [n, C, L]),
                l.useEffect(
                  () => () => {
                    C(), clearTimeout(x.current), clearTimeout(O.current), L();
                  },
                  [c, a, C, L],
                ),
                l.useMemo(() => {
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
                          0 === h ||
                          (clearTimeout(O.current),
                          (O.current = setTimeout(() => {
                            S.current || r(!0, e.nativeEvent);
                          }, h)));
                      },
                    },
                    floating: {
                      onMouseEnter() {
                        clearTimeout(x.current);
                      },
                      onMouseLeave(e) {
                        o.emit("dismiss", {
                          type: "mouseLeave",
                          data: { returnFocus: !1 },
                        }),
                          A(e.nativeEvent, !1);
                      },
                    },
                  };
                }, [o, c, h, n, r, A])
              );
            }
            let tY = l.createContext({
                delay: 0,
                initialDelay: 0,
                timeoutMs: 0,
                currentId: null,
                setCurrentId: () => {},
                setState: () => {},
                isInstantPhase: !1,
              }),
              tK = () => l.useContext(tY),
              tG = (e) => {
                let { children: t, delay: n, timeoutMs: r = 0 } = e,
                  [i, o] = l.useReducer((e, t) => ({ ...e, ...t }), {
                    delay: n,
                    timeoutMs: r,
                    initialDelay: n,
                    currentId: null,
                    isInstantPhase: !1,
                  }),
                  a = l.useRef(null),
                  u = l.useCallback((e) => {
                    o({ currentId: e });
                  }, []);
                return (
                  th(() => {
                    i.currentId
                      ? null === a.current
                        ? (a.current = i.currentId)
                        : o({ isInstantPhase: !0 })
                      : (o({ isInstantPhase: !1 }), (a.current = null));
                  }, [i.currentId]),
                  l.createElement(
                    tY.Provider,
                    {
                      value: l.useMemo(
                        () => ({ ...i, setState: o, setCurrentId: u }),
                        [i, o, u],
                      ),
                    },
                    t,
                  )
                );
              },
              tZ = (e, t) => {
                let { open: n, onOpenChange: r } = e,
                  { id: i } = t,
                  {
                    currentId: o,
                    setCurrentId: a,
                    initialDelay: l,
                    setState: u,
                    timeoutMs: s,
                  } = tK();
                th(() => {
                  o &&
                    (u({ delay: { open: 1, close: tW(l, "close") } }),
                    o !== i && r(!1));
                }, [i, r, u, o, l]),
                  th(() => {
                    function e() {
                      r(!1), u({ delay: l, currentId: null });
                    }
                    if (!n && o === i) {
                      if (s) {
                        let t = window.setTimeout(e, s);
                        return () => {
                          clearTimeout(t);
                        };
                      }
                      e();
                    }
                  }, [n, u, o, i, r, l, s]),
                  th(() => {
                    n && a(i);
                  }, [n, a, i]);
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
              t2 = (e) => e && (e.host || t2(e.parentNode)),
              t3 = (e, t) =>
                t
                  .map((t) => {
                    if (e.contains(t)) return t;
                    let n = t2(t);
                    return e.contains(n) ? n : null;
                  })
                  .filter((e) => null != e);
            function t5(e, t, n) {
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let r = I(e[0]).body;
              return (function (e, t, n, r) {
                let i = "data-floating-ui-inert",
                  o = r ? "inert" : n ? "aria-hidden" : null,
                  a = t3(t, e),
                  l = new Set(),
                  u = new Set(a),
                  s = [];
                t$[i] || (t$[i] = new WeakMap());
                let c = t$[i];
                return (
                  a.forEach(function e(t) {
                    !(!t || l.has(t)) &&
                      (l.add(t), t.parentNode && e(t.parentNode));
                  }),
                  (function e(t) {
                    !t ||
                      u.has(t) ||
                      Array.prototype.forEach.call(t.children, (t) => {
                        if (l.has(t)) e(t);
                        else {
                          let e = o ? t.getAttribute(o) : null,
                            n = null !== e && "false" !== e,
                            r = (tQ.get(t) || 0) + 1,
                            a = (c.get(t) || 0) + 1;
                          tQ.set(t, r),
                            c.set(t, a),
                            s.push(t),
                            1 === r && n && tJ.add(t),
                            1 === a && t.setAttribute(i, ""),
                            !n && o && t.setAttribute(o, "true");
                        }
                      });
                  })(t),
                  l.clear(),
                  t0++,
                  () => {
                    s.forEach((e) => {
                      let t = (tQ.get(e) || 0) - 1,
                        n = (c.get(e) || 0) - 1;
                      tQ.set(e, t),
                        c.set(e, n),
                        t ||
                          (!tJ.has(e) && o && e.removeAttribute(o),
                          tJ.delete(e)),
                        n || e.removeAttribute(i);
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
            let t8 = () => ({
              getShadowRoot: !0,
              displayCheck:
                "function" == typeof ResizeObserver &&
                ResizeObserver.toString().includes("[native code]")
                  ? "full"
                  : "none",
            });
            function t4(e, t) {
              let n = e7(e, t8());
              "prev" === t && n.reverse();
              let r = n.indexOf(w(I(e)));
              return n.slice(r + 1)[0];
            }
            function t6() {
              return t4(document.body, "next");
            }
            function t9() {
              return t4(document.body, "prev");
            }
            function t7(e, t) {
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
            let nn = l.forwardRef(function (e, t) {
                let [n, r] = l.useState();
                th(
                  () => (
                    j() && r("button"),
                    document.addEventListener("keydown", nt),
                    () => {
                      document.removeEventListener("keydown", nt);
                    }
                  ),
                  [],
                );
                let i = {
                  ref: t,
                  tabIndex: 0,
                  role: n,
                  "aria-hidden": !n || void 0,
                  [tF("focus-guard")]: "",
                  style: ne,
                };
                return l.createElement("span", tP({}, e, i));
              }),
              nr = l.createContext(null);
            function ni(e) {
              let { id: t, root: n } = void 0 === e ? {} : e,
                [r, i] = l.useState(null),
                o = tC(),
                a = na(),
                u = l.useMemo(
                  () => ({ id: t, root: n, portalContext: a, uniqueId: o }),
                  [t, n, a, o],
                ),
                s = l.useRef();
              return (
                th(
                  () => () => {
                    null == r || r.remove();
                  },
                  [r, u],
                ),
                th(() => {
                  if (s.current === u) return;
                  s.current = u;
                  let { id: e, root: t, portalContext: n, uniqueId: r } = u,
                    o = e ? document.getElementById(e) : null,
                    a = tF("portal");
                  if (o) {
                    let e = document.createElement("div");
                    (e.id = r), e.setAttribute(a, ""), o.appendChild(e), i(e);
                  } else {
                    let o = t || (null == n ? void 0 : n.portalNode);
                    o && !d(o) && (o = o.current), (o = o || document.body);
                    let l = null;
                    e &&
                      (((l = document.createElement("div")).id = e),
                      o.appendChild(l));
                    let u = document.createElement("div");
                    (u.id = r),
                      u.setAttribute(a, ""),
                      (o = l || o).appendChild(u),
                      i(u);
                  }
                }, [u]),
                r
              );
            }
            function no(e) {
              let {
                  children: t,
                  id: n,
                  root: r = null,
                  preserveTabOrder: i = !0,
                } = e,
                o = ni({ id: n, root: r }),
                [a, u] = l.useState(null),
                s = l.useRef(null),
                c = l.useRef(null),
                f = l.useRef(null),
                d = l.useRef(null),
                p = !!a && !a.modal && a.open && i && !!(r || o);
              return (
                l.useEffect(() => {
                  if (o && i && (null == a || !a.modal))
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
                      t7(e) &&
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
                            e7(e, t8()).forEach((e) => {
                              (e.dataset.tabindex =
                                e.getAttribute("tabindex") || ""),
                                e.setAttribute("tabindex", "-1");
                            });
                          })(o);
                  }
                }, [o, i, null == a ? void 0 : a.modal]),
                l.createElement(
                  nr.Provider,
                  {
                    value: l.useMemo(
                      () => ({
                        preserveTabOrder: i,
                        beforeOutsideRef: s,
                        afterOutsideRef: c,
                        beforeInsideRef: f,
                        afterInsideRef: d,
                        portalNode: o,
                        setFocusManagerState: u,
                      }),
                      [i, o],
                    ),
                  },
                  p &&
                    o &&
                    l.createElement(nn, {
                      "data-type": "outside",
                      ref: s,
                      onFocus: (e) => {
                        if (t7(e, o)) {
                          var t;
                          null == (t = f.current) || t.focus();
                        } else {
                          let e =
                            t9() ||
                            (null == a ? void 0 : a.refs.domReference.current);
                          null == e || e.focus();
                        }
                      },
                    }),
                  p &&
                    o &&
                    l.createElement("span", { "aria-owns": o.id, style: ne }),
                  o && (0, eL.createPortal)(t, o),
                  p &&
                    o &&
                    l.createElement(nn, {
                      "data-type": "outside",
                      ref: c,
                      onFocus: (e) => {
                        if (t7(e, o)) {
                          var t;
                          null == (t = d.current) || t.focus();
                        } else {
                          let t =
                            t6() ||
                            (null == a ? void 0 : a.refs.domReference.current);
                          null == t || t.focus(),
                            (null == a ? void 0 : a.closeOnFocusOut) &&
                              (null == a || a.onOpenChange(!1, e.nativeEvent));
                        }
                      },
                    }),
                )
              );
            }
            let na = () => l.useContext(nr),
              nl = l.forwardRef(function (e, t) {
                return l.createElement(
                  "button",
                  tP({}, e, {
                    type: "button",
                    ref: t,
                    tabIndex: -1,
                    style: ne,
                  }),
                );
              });
            function nu(e) {
              let {
                  context: t,
                  children: n,
                  disabled: r = !1,
                  order: i = ["content"],
                  guards: o = !0,
                  initialFocus: a = 0,
                  returnFocus: u = !0,
                  modal: s = !0,
                  visuallyHiddenDismiss: c = !1,
                  closeOnFocusOut: f = !0,
                } = e,
                {
                  open: d,
                  refs: v,
                  nodeId: h,
                  onOpenChange: y,
                  events: m,
                  dataRef: g,
                  elements: { domReference: b, floating: _ },
                } = t,
                E = "number" == typeof a && a < 0,
                x =
                  (null == b ? void 0 : b.getAttribute("role")) ===
                    "combobox" &&
                  D(b) &&
                  E,
                O = !x && s,
                S = !t1() || o,
                P = tH(i),
                R = tH(a),
                j = tH(u),
                A = tM(),
                C = na(),
                T = l.useRef(null),
                L = l.useRef(null),
                q = l.useRef(!1),
                B = l.useRef(null),
                z = l.useRef(!1),
                F = null != C,
                H = l.useCallback(
                  function (e) {
                    return void 0 === e && (e = _), e ? e7(e, t8()) : [];
                  },
                  [_],
                ),
                U = l.useCallback(
                  (e) => {
                    let t = H(e);
                    return P.current
                      .map((e) =>
                        b && "reference" === e
                          ? b
                          : _ && "floating" === e
                            ? _
                            : t,
                      )
                      .filter(Boolean)
                      .flat();
                  },
                  [b, _, P, H],
                );
              function W(e) {
                return !r && c && O
                  ? l.createElement(
                      nl,
                      {
                        ref: "start" === e ? T : L,
                        onClick: (e) => y(!1, e.nativeEvent),
                      },
                      "string" == typeof c ? c : "Dismiss",
                    )
                  : null;
              }
              l.useEffect(() => {
                if (r || !O) return;
                function e(e) {
                  if ("Tab" === e.key) {
                    k(_, w(I(_))) && 0 === H().length && !x && M(e);
                    let t = U(),
                      n = N(e);
                    "reference" === P.current[0] &&
                      n === b &&
                      (M(e), e.shiftKey ? tv(t[t.length - 1]) : tv(t[1])),
                      "floating" === P.current[1] &&
                        n === _ &&
                        e.shiftKey &&
                        (M(e), tv(t[0]));
                  }
                }
                let t = I(_);
                return (
                  t.addEventListener("keydown", e),
                  () => {
                    t.removeEventListener("keydown", e);
                  }
                );
              }, [r, b, _, O, P, v, x, H, U]),
                l.useEffect(() => {
                  if (!r && f && _ && p(b))
                    return (
                      b.addEventListener("focusout", t),
                      b.addEventListener("pointerdown", e),
                      O || _.addEventListener("focusout", t),
                      () => {
                        b.removeEventListener("focusout", t),
                          b.removeEventListener("pointerdown", e),
                          O || _.removeEventListener("focusout", t);
                      }
                    );
                  function e() {
                    (z.current = !0),
                      setTimeout(() => {
                        z.current = !1;
                      });
                  }
                  function t(e) {
                    let t = e.relatedTarget;
                    queueMicrotask(() => {
                      let n = !(
                        k(b, t) ||
                        k(_, t) ||
                        k(t, _) ||
                        k(null == C ? void 0 : C.portalNode, t) ||
                        (null != t && t.hasAttribute(tF("focus-guard"))) ||
                        (A &&
                          (tX(A.nodesRef.current, h).find((e) => {
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
                                i =
                                  null == (n = e.find((e) => e.id === t))
                                    ? void 0
                                    : n.parentId;
                              for (; i; ) {
                                let t = e.find((e) => e.id === i);
                                (i = null == t ? void 0 : t.parentId),
                                  t && (r = r.concat(t));
                              }
                              return r;
                            })(A.nodesRef.current, h).find((e) => {
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
                        !z.current &&
                        t !== B.current &&
                        ((q.current = !0), y(!1, e));
                    });
                  }
                }, [r, b, _, O, h, A, C, y, f]),
                l.useEffect(() => {
                  var e;
                  if (r) return;
                  let t = Array.from(
                    (null == C
                      ? void 0
                      : null == (e = C.portalNode)
                        ? void 0
                        : e.querySelectorAll("[" + tF("portal") + "]")) || [],
                  );
                  if (_) {
                    let e = [
                        _,
                        ...t,
                        T.current,
                        L.current,
                        P.current.includes("reference") || x ? b : null,
                      ].filter((e) => null != e),
                      n = s || x ? t5(e, S, !S) : t5(e);
                    return () => {
                      n();
                    };
                  }
                }, [r, b, _, s, P, C, x, S]),
                th(() => {
                  if (r || !_) return;
                  let e = w(I(_));
                  queueMicrotask(() => {
                    let t = U(_),
                      n = R.current,
                      r = ("number" == typeof n ? t[n] : n.current) || _,
                      i = k(_, e);
                    E || i || !d || tv(r, { preventScroll: r === _ });
                  });
                }, [r, d, _, E, U, R]),
                th(() => {
                  if (r || !_) return;
                  let e = !1,
                    t = I(_),
                    n = w(t),
                    i = g.current;
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
                    m.on("dismiss", o),
                    () => {
                      m.off("dismiss", o);
                      let n = w(t);
                      (k(_, n) ||
                        (A &&
                          tX(A.nodesRef.current, h).some((e) => {
                            var t;
                            return k(
                              null == (t = e.context)
                                ? void 0
                                : t.elements.floating,
                              n,
                            );
                          })) ||
                        (i.openEvent &&
                          ["click", "mousedown"].includes(i.openEvent.type))) &&
                        v.domReference.current &&
                        (B.current = v.domReference.current),
                        j.current &&
                          p(B.current) &&
                          !q.current &&
                          tv(B.current, {
                            cancelPrevious: !1,
                            preventScroll: e,
                          });
                    }
                  );
                }, [r, _, j, g, v, m, A, h]),
                th(() => {
                  if (!r && C)
                    return (
                      C.setFocusManagerState({
                        modal: O,
                        closeOnFocusOut: f,
                        open: d,
                        onOpenChange: y,
                        refs: v,
                      }),
                      () => {
                        C.setFocusManagerState(null);
                      }
                    );
                }, [r, C, O, d, y, v, f]),
                th(() => {
                  if (r || !_ || "function" != typeof MutationObserver || E)
                    return;
                  let e = () => {
                    let e = _.getAttribute("tabindex");
                    P.current.includes("floating") ||
                    (w(I(_)) !== v.domReference.current && 0 === H().length)
                      ? "0" !== e && _.setAttribute("tabindex", "0")
                      : "-1" !== e && _.setAttribute("tabindex", "-1");
                  };
                  e();
                  let t = new MutationObserver(e);
                  return (
                    t.observe(_, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    }),
                    () => {
                      t.disconnect();
                    }
                  );
                }, [r, _, v, P, H, E]);
              let V = !r && S && (F || O);
              return l.createElement(
                l.Fragment,
                null,
                V &&
                  l.createElement(nn, {
                    "data-type": "inside",
                    ref: null == C ? void 0 : C.beforeInsideRef,
                    onFocus: (e) => {
                      if (O) {
                        let e = U();
                        tv("reference" === i[0] ? e[0] : e[e.length - 1]);
                      } else if (
                        null != C &&
                        C.preserveTabOrder &&
                        C.portalNode
                      ) {
                        if (((q.current = !1), t7(e, C.portalNode))) {
                          let e = t6() || b;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = C.beforeOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
                !x && W("start"),
                n,
                W("end"),
                V &&
                  l.createElement(nn, {
                    "data-type": "inside",
                    ref: null == C ? void 0 : C.afterInsideRef,
                    onFocus: (e) => {
                      if (O) tv(U()[0]);
                      else if (
                        null != C &&
                        C.preserveTabOrder &&
                        C.portalNode
                      ) {
                        if ((f && (q.current = !0), t7(e, C.portalNode))) {
                          let e = t9() || b;
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
            let ns = new Set(),
              nc = l.forwardRef(function (e, t) {
                let { lockScroll: n = !1, ...r } = e,
                  i = tC();
                return (
                  th(() => {
                    if (!n) return;
                    ns.add(i);
                    let e = /iP(hone|ad|od)|iOS/.test(O()),
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
                      a = t.left ? parseFloat(t.left) : window.pageXOffset,
                      l = t.top ? parseFloat(t.top) : window.pageYOffset;
                    if (((t.overflow = "hidden"), o && (t[r] = o + "px"), e)) {
                      var u, s;
                      let e =
                        (null == (u = window.visualViewport)
                          ? void 0
                          : u.offsetLeft) || 0;
                      Object.assign(t, {
                        position: "fixed",
                        top:
                          -(
                            l -
                            Math.floor(
                              (null == (s = window.visualViewport)
                                ? void 0
                                : s.offsetTop) || 0,
                            )
                          ) + "px",
                        left: -(a - Math.floor(e)) + "px",
                        right: "0",
                      });
                    }
                    return () => {
                      ns.delete(i),
                        0 === ns.size &&
                          (Object.assign(t, { overflow: "", [r]: "" }),
                          e &&
                            (Object.assign(t, {
                              position: "",
                              top: "",
                              left: "",
                              right: "",
                            }),
                            window.scrollTo(a, l)));
                    };
                  }, [i, n]),
                  l.createElement(
                    "div",
                    tP({ ref: t }, r, {
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
            function nf(e) {
              return p(e.target) && "BUTTON" === e.target.tagName;
            }
            function nd(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: i,
                  elements: { domReference: o },
                } = e,
                {
                  enabled: a = !0,
                  event: u = "click",
                  toggle: s = !0,
                  ignoreMouse: c = !1,
                  keyboardHandlers: f = !0,
                } = t,
                d = l.useRef(),
                p = l.useRef(!1);
              return l.useMemo(
                () =>
                  a
                    ? {
                        reference: {
                          onPointerDown(e) {
                            d.current = e.pointerType;
                          },
                          onMouseDown(e) {
                            0 !== e.button ||
                              (T(d.current, !0) && c) ||
                              "click" === u ||
                              (n &&
                              s &&
                              (!i.current.openEvent ||
                                "mousedown" === i.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : (e.preventDefault(), r(!0, e.nativeEvent)));
                          },
                          onClick(e) {
                            if ("mousedown" === u && d.current) {
                              d.current = void 0;
                              return;
                            }
                            (T(d.current, !0) && c) ||
                              (n &&
                              s &&
                              (!i.current.openEvent ||
                                "click" === i.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                          onKeyDown(e) {
                            (d.current = void 0),
                              e.defaultPrevented ||
                                !f ||
                                nf(e) ||
                                (" " !== e.key ||
                                  D(o) ||
                                  (e.preventDefault(), (p.current = !0)),
                                "Enter" === e.key &&
                                  (n && s
                                    ? r(!1, e.nativeEvent)
                                    : r(!0, e.nativeEvent)));
                          },
                          onKeyUp(e) {
                            !(e.defaultPrevented || !f || nf(e) || D(o)) &&
                              " " === e.key &&
                              p.current &&
                              ((p.current = !1),
                              n && s
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                        },
                      }
                    : {},
                [a, i, u, c, f, o, s, n, r],
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
                  dataRef: i,
                  elements: { floating: o },
                } = e,
                {
                  enabled: a = !0,
                  axis: u = "both",
                  x: c = null,
                  y: f = null,
                } = t,
                d = l.useRef(!1),
                p = l.useRef(null),
                [v, h] = l.useState(),
                [y, m] = l.useState([]),
                g = tn((e, t) => {
                  if (!d.current) {
                    var n, o;
                    let a, l, s;
                    (!i.current.openEvent || np(i.current.openEvent)) &&
                      r.setPositionReference(
                        ((n = r.domReference),
                        (o = {
                          x: e,
                          y: t,
                          axis: u,
                          dataRef: i,
                          pointerType: v,
                        }),
                        (a = null),
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
                              i = "x" === o.axis || "both" === o.axis,
                              u = "y" === o.axis || "both" === o.axis,
                              c =
                                ["mouseenter", "mousemove"].includes(
                                  (null == (t = o.dataRef.current.openEvent)
                                    ? void 0
                                    : t.type) || "",
                                ) && "touch" !== o.pointerType,
                              f = r.width,
                              d = r.height,
                              p = r.x,
                              v = r.y;
                            return (
                              null == a && o.x && i && (a = r.x - o.x),
                              null == l && o.y && u && (l = r.y - o.y),
                              (p -= a || 0),
                              (v -= l || 0),
                              (f = 0),
                              (d = 0),
                              !s || c
                                ? ((f = "y" === o.axis ? r.width : 0),
                                  (d = "x" === o.axis ? r.height : 0),
                                  (p = i && null != o.x ? o.x : p),
                                  (v = u && null != o.y ? o.y : v))
                                : s &&
                                  !c &&
                                  ((d = "x" === o.axis ? r.height : d),
                                  (f = "y" === o.axis ? r.width : f)),
                              (s = !0),
                              {
                                width: f,
                                height: d,
                                x: p,
                                y: v,
                                top: v,
                                right: p + f,
                                bottom: v + d,
                                left: p,
                              }
                            );
                          },
                        }),
                      );
                  }
                }),
                b = tn((e) => {
                  null != c ||
                    null != f ||
                    (n ? p.current || m([]) : g(e.clientX, e.clientY));
                }),
                _ = T(v) ? o : n,
                E = l.useCallback(() => {
                  if (!_ || !a || null != c || null != f) return;
                  let e = s(r.floating.current);
                  function t(n) {
                    let i = N(n);
                    k(r.floating.current, i)
                      ? (e.removeEventListener("mousemove", t),
                        (p.current = null))
                      : g(n.clientX, n.clientY);
                  }
                  if (!i.current.openEvent || np(i.current.openEvent)) {
                    e.addEventListener("mousemove", t);
                    let n = () => {
                      e.removeEventListener("mousemove", t), (p.current = null);
                    };
                    return (p.current = n), n;
                  }
                  r.setPositionReference(r.domReference.current);
                }, [i, a, _, r, g, c, f]);
              return (
                l.useEffect(() => E(), [E, y]),
                l.useEffect(() => {
                  a && !o && (d.current = !1);
                }, [a, o]),
                l.useEffect(() => {
                  !a && n && (d.current = !0);
                }, [a, n]),
                th(() => {
                  a && (null != c || null != f) && ((d.current = !1), g(c, f));
                }, [a, c, f, g]),
                l.useMemo(() => {
                  if (!a) return {};
                  function e(e) {
                    let { pointerType: t } = e;
                    h(t);
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove: b,
                      onMouseEnter: b,
                    },
                  };
                }, [a, b])
              );
            }
            let nh = {
                pointerdown: "onPointerDown",
                mousedown: "onMouseDown",
                click: "onClick",
              },
              ny = {
                pointerdown: "onPointerDownCapture",
                mousedown: "onMouseDownCapture",
                click: "onClickCapture",
              },
              nm = (e) => {
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
                  events: i,
                  nodeId: o,
                  elements: { reference: a, domReference: u, floating: s },
                  dataRef: c,
                } = e,
                {
                  enabled: f = !0,
                  escapeKey: v = !0,
                  outsidePress: h = !0,
                  outsidePressEvent: y = "pointerdown",
                  referencePress: m = !1,
                  referencePressEvent: _ = "pointerdown",
                  ancestorScroll: w = !1,
                  bubbles: O,
                  capture: S,
                } = t,
                j = tM(),
                A = null != tD(),
                C = tn("function" == typeof h ? h : () => !1),
                T = "function" == typeof h ? C : h,
                D = l.useRef(!1),
                M = l.useRef(!1),
                { escapeKey: q, outsidePress: B } = nm(O),
                { escapeKey: z, outsidePress: F } = nm(S),
                H = tn((e) => {
                  if (!n || !f || !v || "Escape" !== e.key) return;
                  let t = j ? tX(j.nodesRef.current, o) : [];
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
                  i.emit("dismiss", {
                    type: "escapeKey",
                    data: { returnFocus: { preventScroll: !1 } },
                  }),
                    r(!1, "nativeEvent" in e ? e.nativeEvent : e);
                }),
                U = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    H(e),
                      null == (t = N(e)) || t.removeEventListener("keydown", n);
                  };
                  null == (t = N(e)) || t.addEventListener("keydown", n);
                }),
                W = tn((e) => {
                  let t = D.current;
                  D.current = !1;
                  let n = M.current;
                  if (
                    ((M.current = !1),
                    ("click" === y && n) ||
                      t ||
                      ("function" == typeof T && !T(e)))
                  )
                    return;
                  let a = N(e),
                    l = "[" + tF("inert") + "]",
                    c = I(s).querySelectorAll(l),
                    f = d(a) ? a : null;
                  for (; f && !g(f); ) {
                    let e = E(f);
                    if (e !== I(s).body && d(e)) f = e;
                    else break;
                  }
                  if (
                    c.length &&
                    d(a) &&
                    !a.matches("html,body") &&
                    !k(a, s) &&
                    Array.from(c).every((e) => !k(f, e))
                  )
                    return;
                  if (p(a) && s) {
                    let t = a.clientWidth > 0 && a.scrollWidth > a.clientWidth,
                      n = a.clientHeight > 0 && a.scrollHeight > a.clientHeight,
                      r = n && e.offsetX > a.clientWidth;
                    if (
                      (n &&
                        "rtl" === b(a).direction &&
                        (r = e.offsetX <= a.offsetWidth - a.clientWidth),
                      r || (t && e.offsetY > a.clientHeight))
                    )
                      return;
                  }
                  let v =
                    j &&
                    tX(j.nodesRef.current, o).some((t) => {
                      var n;
                      return L(
                        e,
                        null == (n = t.context) ? void 0 : n.elements.floating,
                      );
                    });
                  if (L(e, s) || L(e, u) || v) return;
                  let h = j ? tX(j.nodesRef.current, o) : [];
                  if (h.length > 0) {
                    let e = !0;
                    if (
                      (h.forEach((t) => {
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
                  i.emit("dismiss", {
                    type: "outsidePress",
                    data: {
                      returnFocus: A ? { preventScroll: !0 } : P(e) || R(e),
                    },
                  }),
                    r(!1, e);
                }),
                V = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    W(e), null == (t = N(e)) || t.removeEventListener(y, n);
                  };
                  null == (t = N(e)) || t.addEventListener(y, n);
                });
              return (
                l.useEffect(() => {
                  if (!n || !f) return;
                  function e(e) {
                    r(!1, e);
                  }
                  (c.current.__escapeKeyBubbles = q),
                    (c.current.__outsidePressBubbles = B);
                  let t = I(s);
                  v && t.addEventListener("keydown", z ? U : H, z),
                    T && t.addEventListener(y, F ? V : W, F);
                  let i = [];
                  return (
                    w &&
                      (d(u) && (i = x(u)),
                      d(s) && (i = i.concat(x(s))),
                      !d(a) &&
                        a &&
                        a.contextElement &&
                        (i = i.concat(x(a.contextElement)))),
                    (i = i.filter((e) => {
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
                      v && t.removeEventListener("keydown", z ? U : H, z),
                        T && t.removeEventListener(y, F ? V : W, F),
                        i.forEach((t) => {
                          t.removeEventListener("scroll", e);
                        });
                    }
                  );
                }, [c, s, u, a, v, T, y, n, r, w, f, q, B, H, z, U, W, F, V]),
                l.useEffect(() => {
                  D.current = !1;
                }, [T, y]),
                l.useMemo(
                  () =>
                    f
                      ? {
                          reference: {
                            onKeyDown: H,
                            [nh[_]]: (e) => {
                              m &&
                                (i.emit("dismiss", {
                                  type: "referencePress",
                                  data: { returnFocus: !1 },
                                }),
                                r(!1, e.nativeEvent));
                            },
                          },
                          floating: {
                            onKeyDown: H,
                            onMouseDown() {
                              M.current = !0;
                            },
                            onMouseUp() {
                              M.current = !0;
                            },
                            [ny[y]]: () => {
                              D.current = !0;
                            },
                          },
                        }
                      : {},
                  [f, i, m, y, _, r, H],
                )
              );
            }
            function nb(e) {
              var t;
              void 0 === e && (e = {});
              let { open: n = !1, onOpenChange: r, nodeId: i } = e,
                [o, a] = l.useState(null),
                u = (null == (t = e.elements) ? void 0 : t.reference) || o,
                s = (function (e) {
                  void 0 === e && (e = {});
                  let {
                      placement: t = "bottom",
                      strategy: n = "absolute",
                      middleware: r = [],
                      platform: i,
                      elements: { reference: o, floating: a } = {},
                      transform: u = !0,
                      whileElementsMounted: s,
                      open: c,
                    } = e,
                    [f, d] = l.useState({
                      x: 0,
                      y: 0,
                      strategy: n,
                      placement: t,
                      middlewareData: {},
                      isPositioned: !1,
                    }),
                    [p, v] = l.useState(r);
                  eM(p, r) || v(r);
                  let [h, y] = l.useState(null),
                    [m, g] = l.useState(null),
                    b = l.useCallback(
                      (e) => {
                        e != w.current && ((w.current = e), y(e));
                      },
                      [y],
                    ),
                    _ = l.useCallback(
                      (e) => {
                        e !== k.current && ((k.current = e), g(e));
                      },
                      [g],
                    ),
                    E = o || h,
                    x = a || m,
                    w = l.useRef(null),
                    k = l.useRef(null),
                    O = l.useRef(f),
                    S = ez(s),
                    P = ez(i),
                    R = l.useCallback(() => {
                      if (!w.current || !k.current) return;
                      let e = { placement: t, strategy: n, middleware: p };
                      P.current && (e.platform = P.current),
                        eI(w.current, k.current, e).then((e) => {
                          let t = { ...e, isPositioned: !0 };
                          j.current &&
                            !eM(O.current, t) &&
                            ((O.current = t),
                            eL.flushSync(() => {
                              d(t);
                            }));
                        });
                    }, [p, t, n, P]);
                  eD(() => {
                    !1 === c &&
                      O.current.isPositioned &&
                      ((O.current.isPositioned = !1),
                      d((e) => ({ ...e, isPositioned: !1 })));
                  }, [c]);
                  let j = l.useRef(!1);
                  eD(
                    () => (
                      (j.current = !0),
                      () => {
                        j.current = !1;
                      }
                    ),
                    [],
                  ),
                    eD(() => {
                      if (
                        (E && (w.current = E), x && (k.current = x), E && x)
                      ) {
                        if (S.current) return S.current(E, x, R);
                        R();
                      }
                    }, [E, x, R, S]);
                  let A = l.useMemo(
                      () => ({
                        reference: w,
                        floating: k,
                        setReference: b,
                        setFloating: _,
                      }),
                      [b, _],
                    ),
                    C = l.useMemo(
                      () => ({ reference: E, floating: x }),
                      [E, x],
                    ),
                    T = l.useMemo(() => {
                      let e = { position: n, left: 0, top: 0 };
                      if (!C.floating) return e;
                      let t = eB(C.floating, f.x),
                        r = eB(C.floating, f.y);
                      return u
                        ? {
                            ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...(eq(C.floating) >= 1.5 && {
                              willChange: "transform",
                            }),
                          }
                        : { position: n, left: t, top: r };
                    }, [n, u, C.floating, f.x, f.y]);
                  return l.useMemo(
                    () => ({
                      ...f,
                      update: R,
                      refs: A,
                      elements: C,
                      floatingStyles: T,
                    }),
                    [f, R, A, C, T],
                  );
                })(e),
                c = tM(),
                f = tn((e, t) => {
                  e && (v.current.openEvent = t), null == r || r(e, t);
                }),
                p = l.useRef(null),
                v = l.useRef({}),
                h = l.useState(() => tI())[0],
                y = tC(),
                m = l.useCallback(
                  (e) => {
                    let t = d(e)
                      ? {
                          getBoundingClientRect: () =>
                            e.getBoundingClientRect(),
                          contextElement: e,
                        }
                      : e;
                    s.refs.setReference(t);
                  },
                  [s.refs],
                ),
                g = l.useCallback(
                  (e) => {
                    (d(e) || null === e) && ((p.current = e), a(e)),
                      (d(s.refs.reference.current) ||
                        null === s.refs.reference.current ||
                        (null !== e && !d(e))) &&
                        s.refs.setReference(e);
                  },
                  [s.refs],
                ),
                b = l.useMemo(
                  () => ({
                    ...s.refs,
                    setReference: g,
                    setPositionReference: m,
                    domReference: p,
                  }),
                  [s.refs, g, m],
                ),
                _ = l.useMemo(
                  () => ({ ...s.elements, domReference: u }),
                  [s.elements, u],
                ),
                E = l.useMemo(
                  () => ({
                    ...s,
                    refs: b,
                    elements: _,
                    dataRef: v,
                    nodeId: i,
                    floatingId: y,
                    events: h,
                    open: n,
                    onOpenChange: f,
                  }),
                  [s, i, y, h, n, f, b, _],
                );
              return (
                th(() => {
                  let e =
                    null == c
                      ? void 0
                      : c.nodesRef.current.find((e) => e.id === i);
                  e && (e.context = E);
                }),
                l.useMemo(
                  () => ({ ...s, context: E, refs: b, elements: _ }),
                  [s, b, _, E],
                )
              );
            }
            function n_(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  events: i,
                  refs: o,
                  elements: { floating: a, domReference: u },
                } = e,
                { enabled: c = !0, visibleOnly: f = !0 } = t,
                v = l.useRef(!1),
                h = l.useRef(),
                y = l.useRef(!0);
              return (
                l.useEffect(() => {
                  if (!c) return;
                  let e = s(u);
                  function t() {
                    !n && p(u) && u === w(I(u)) && (v.current = !0);
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
                }, [a, u, n, c]),
                l.useEffect(() => {
                  if (c)
                    return (
                      i.on("dismiss", e),
                      () => {
                        i.off("dismiss", e);
                      }
                    );
                  function e(e) {
                    ("referencePress" === e.type || "escapeKey" === e.type) &&
                      (v.current = !0);
                  }
                }, [i, c]),
                l.useEffect(
                  () => () => {
                    clearTimeout(h.current);
                  },
                  [],
                ),
                l.useMemo(
                  () =>
                    c
                      ? {
                          reference: {
                            onPointerDown(e) {
                              R(e.nativeEvent) || (y.current = !1);
                            },
                            onMouseLeave() {
                              v.current = !1;
                            },
                            onFocus(e) {
                              if (v.current) return;
                              let t = N(e.nativeEvent);
                              if (f && d(t))
                                try {
                                  if (j() && C()) throw Error();
                                  if (!t.matches(":focus-visible")) return;
                                } catch (e) {
                                  if (!y.current && !D(t)) return;
                                }
                              r(!0, e.nativeEvent);
                            },
                            onBlur(e) {
                              v.current = !1;
                              let t = e.relatedTarget,
                                n =
                                  d(t) &&
                                  t.hasAttribute(tF("focus-guard")) &&
                                  "outside" === t.getAttribute("data-type");
                              h.current = window.setTimeout(() => {
                                let i = w(u ? u.ownerDocument : document);
                                if (t || i !== u) {
                                  if (k(o.floating.current, t) || k(u, t) || n)
                                    return;
                                  r(!1, e.nativeEvent);
                                }
                              });
                            },
                          },
                        }
                      : {},
                  [c, f, u, o, r],
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
                          let [n, i] = t;
                          if (0 === n.indexOf("on")) {
                            if (
                              (r.has(n) || r.set(n, []), "function" == typeof i)
                            ) {
                              var o;
                              null == (o = r.get(n)) || o.push(i),
                                (e[n] = function () {
                                  for (
                                    var e,
                                      t = arguments.length,
                                      i = Array(t),
                                      o = 0;
                                    o < t;
                                    o++
                                  )
                                    i[o] = arguments[o];
                                  return null == (e = r.get(n))
                                    ? void 0
                                    : e
                                        .map((e) => e(...i))
                                        .find((e) => void 0 !== e);
                                });
                            }
                          } else e[n] = i;
                        }),
                      e
                    ),
                    {},
                  ),
              };
            }
            function nx(e) {
              void 0 === e && (e = []);
              let t = e,
                n = l.useCallback((t) => nE(t, e, "reference"), t),
                r = l.useCallback((t) => nE(t, e, "floating"), t),
                i = l.useCallback(
                  (t) => nE(t, e, "item"),
                  e.map((e) => (null == e ? void 0 : e.item)),
                );
              return l.useMemo(
                () => ({
                  getReferenceProps: n,
                  getFloatingProps: r,
                  getItemProps: i,
                }),
                [n, r, i],
              );
            }
            let nw = !1;
            function nk(e, t, n) {
              switch (e) {
                case "vertical":
                  return t;
                case "horizontal":
                  return n;
                default:
                  return t || n;
              }
            }
            function nO(e, t) {
              return nk(t, e === tr || e === ti, e === to || e === ta);
            }
            function nS(e, t, n) {
              return (
                nk(t, e === ti, n ? e === to : e === ta) ||
                "Enter" === e ||
                " " == e ||
                "" === e
              );
            }
            function nP(e, t, n) {
              return nk(t, n ? e === ta : e === to, e === tr);
            }
            function nR(e, t) {
              let {
                  open: n,
                  onOpenChange: r,
                  refs: i,
                  elements: { domReference: o, floating: a },
                } = e,
                {
                  listRef: u,
                  activeIndex: s,
                  onNavigate: c = () => {},
                  enabled: f = !0,
                  selectedIndex: d = null,
                  allowEscape: v = !1,
                  loop: h = !1,
                  nested: y = !1,
                  rtl: m = !1,
                  virtual: g = !1,
                  focusItemOnOpen: b = "auto",
                  focusItemOnHover: _ = !0,
                  openOnArrowKeyDown: E = !0,
                  disabledIndices: x,
                  orientation: O = "vertical",
                  cols: S = 1,
                  scrollItemIntoView: A = !0,
                  virtualItemRef: T,
                } = t,
                L = tD(),
                N = tM(),
                D = tn(c),
                q = l.useRef(b),
                B = l.useRef(null != d ? d : -1),
                z = l.useRef(null),
                F = l.useRef(!0),
                H = l.useRef(D),
                U = l.useRef(!!a),
                W = l.useRef(!1),
                V = l.useRef(!1),
                Y = tH(x),
                K = tH(n),
                G = tH(A),
                [Z, X] = l.useState(),
                [Q, J] = l.useState(),
                $ = tn(function (e, t, n) {
                  void 0 === n && (n = !1);
                  let r = e.current[t.current];
                  r &&
                    (g
                      ? (X(r.id),
                        null == N || N.events.emit("virtualfocus", r),
                        T && (T.current = r))
                      : tv(r, {
                          preventScroll: !0,
                          sync: !!(C() && j()) && (nw || W.current),
                        }),
                    requestAnimationFrame(() => {
                      let e = G.current;
                      e &&
                        r &&
                        (n || !F.current) &&
                        (null == r.scrollIntoView ||
                          r.scrollIntoView(
                            "boolean" == typeof e
                              ? { block: "nearest", inline: "nearest" }
                              : e,
                          ));
                    }));
                });
              th(() => {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (nw = !0), !1;
                  },
                });
              }, []),
                th(() => {
                  f &&
                    (n && a
                      ? q.current && null != d && ((V.current = !0), D(d))
                      : U.current && ((B.current = -1), H.current(null)));
                }, [f, n, a, d, D]),
                th(() => {
                  if (f && n && a) {
                    if (null == s) {
                      if (
                        ((W.current = !1),
                        null == d &&
                          (U.current && ((B.current = -1), $(u, B)),
                          !U.current &&
                            q.current &&
                            (null != z.current ||
                              (!0 === q.current && null == z.current))))
                      ) {
                        let e = 0,
                          t = () => {
                            null == u.current[0]
                              ? (e < 2 &&
                                  (e ? requestAnimationFrame : queueMicrotask)(
                                    t,
                                  ),
                                e++)
                              : ((B.current =
                                  null == z.current || nS(z.current, O, m) || y
                                    ? ts(u, Y.current)
                                    : tc(u, Y.current)),
                                (z.current = null),
                                D(B.current));
                          };
                        t();
                      }
                    } else
                      tu(u, s) ||
                        ((B.current = s), $(u, B, V.current), (V.current = !1));
                  }
                }, [f, n, a, s, d, y, u, O, m, D, $, Y]),
                th(() => {
                  var e, t;
                  if (!f || a || !N || g || !U.current) return;
                  let n = N.nodesRef.current,
                    r =
                      null == (e = n.find((e) => e.id === L))
                        ? void 0
                        : null == (t = e.context)
                          ? void 0
                          : t.elements.floating,
                    i = w(I(a)),
                    o = n.some(
                      (e) => e.context && k(e.context.elements.floating, i),
                    );
                  r && !o && F.current && r.focus({ preventScroll: !0 });
                }, [f, a, N, L, g]),
                th(() => {
                  if (f && N && g && !L)
                    return (
                      N.events.on("virtualfocus", e),
                      () => {
                        N.events.off("virtualfocus", e);
                      }
                    );
                  function e(e) {
                    J(e.id), T && (T.current = e);
                  }
                }, [f, N, g, L, T]),
                th(() => {
                  (H.current = D), (U.current = !!a);
                }),
                th(() => {
                  n || (z.current = null);
                }, [n]);
              let ee = null != s,
                et = l.useMemo(() => {
                  function e(e) {
                    if (!n) return;
                    let t = u.current.indexOf(e);
                    -1 !== t && D(t);
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
                    ...(_ && {
                      onMouseMove(t) {
                        let { currentTarget: n } = t;
                        e(n);
                      },
                      onPointerLeave(e) {
                        let { pointerType: t } = e;
                        F.current &&
                          "touch" !== t &&
                          ((B.current = -1),
                          $(u, B),
                          D(null),
                          g || tv(i.floating.current, { preventScroll: !0 }));
                      },
                    }),
                  };
                }, [n, i, $, _, u, D, g]);
              return l.useMemo(() => {
                if (!f) return {};
                let e = Y.current;
                function t(t) {
                  if (
                    ((F.current = !1),
                    (W.current = !0),
                    !K.current && t.currentTarget === i.floating.current)
                  )
                    return;
                  if (y && nP(t.key, O, m)) {
                    M(t), r(!1, t.nativeEvent), p(o) && !g && o.focus();
                    return;
                  }
                  let a = B.current,
                    l = ts(u, e),
                    s = tc(u, e);
                  if (
                    ("Home" === t.key && (M(t), (B.current = l), D(B.current)),
                    "End" === t.key && (M(t), (B.current = s), D(B.current)),
                    (!(S > 1) ||
                      ((B.current = td(u, {
                        event: t,
                        orientation: O,
                        loop: h,
                        cols: S,
                        disabledIndices: e,
                        minIndex: l,
                        maxIndex: s,
                        prevIndex: B.current,
                        stopEvent: !0,
                      })),
                      D(B.current),
                      "both" !== O)) &&
                      nO(t.key, O))
                  ) {
                    if (
                      (M(t),
                      n &&
                        !g &&
                        w(t.currentTarget.ownerDocument) === t.currentTarget)
                    ) {
                      (B.current = nS(t.key, O, m) ? l : s), D(B.current);
                      return;
                    }
                    nS(t.key, O, m)
                      ? h
                        ? (B.current =
                            a >= s
                              ? v && a !== u.current.length
                                ? -1
                                : l
                              : tf(u, { startingIndex: a, disabledIndices: e }))
                        : (B.current = Math.min(
                            s,
                            tf(u, { startingIndex: a, disabledIndices: e }),
                          ))
                      : h
                        ? (B.current =
                            a <= l
                              ? v && -1 !== a
                                ? u.current.length
                                : s
                              : tf(u, {
                                  startingIndex: a,
                                  decrement: !0,
                                  disabledIndices: e,
                                }))
                        : (B.current = Math.max(
                            l,
                            tf(u, {
                              startingIndex: a,
                              decrement: !0,
                              disabledIndices: e,
                            }),
                          )),
                      tu(u, B.current) ? D(null) : D(B.current);
                  }
                }
                function a(e) {
                  "auto" === b && P(e.nativeEvent) && (q.current = !0);
                }
                let l = g && n && ee && { "aria-activedescendant": Q || Z },
                  s = u.current.find((e) => (null == e ? void 0 : e.id) === Z);
                return {
                  reference: {
                    ...l,
                    onKeyDown(i) {
                      var o, a, l, c, f, p;
                      F.current = !1;
                      let v = 0 === i.key.indexOf("Arrow"),
                        h =
                          ((o = i.key),
                          nk(O, m ? o === to : o === ta, o === ti)),
                        b = nP(i.key, O, m),
                        _ = nO(i.key, O),
                        x =
                          (y ? h : _) ||
                          "Enter" === i.key ||
                          "" === i.key.trim();
                      if (g && n) {
                        let e, n;
                        let r =
                            null == N
                              ? void 0
                              : N.nodesRef.current.find(
                                  (e) => null == e.parentId,
                                ),
                          o =
                            N && r
                              ? ((a = N.nodesRef.current),
                                (l = r.id),
                                (n = -1),
                                !(function t(r, i) {
                                  i > n && ((e = r), (n = i)),
                                    tX(a, r).forEach((e) => {
                                      t(e.id, i + 1);
                                    });
                                })(l, 0),
                                a.find((t) => t.id === e))
                              : null;
                        if (v && o && T) {
                          let e = new KeyboardEvent("keydown", {
                            key: i.key,
                            bubbles: !0,
                          });
                          if (h || b) {
                            let t =
                                (null == (c = o.context)
                                  ? void 0
                                  : c.elements.domReference) ===
                                i.currentTarget,
                              n =
                                b && !t
                                  ? null == (f = o.context)
                                    ? void 0
                                    : f.elements.domReference
                                  : h
                                    ? s
                                    : null;
                            n && (M(i), n.dispatchEvent(e), J(void 0));
                          }
                          if (
                            _ &&
                            o.context &&
                            o.context.open &&
                            o.parentId &&
                            i.currentTarget !== o.context.elements.domReference
                          ) {
                            M(i),
                              null == (p = o.context.elements.domReference) ||
                                p.dispatchEvent(e);
                            return;
                          }
                        }
                        return t(i);
                      }
                      if (n || E || !v) {
                        if ((x && (z.current = y && _ ? null : i.key), y)) {
                          h &&
                            (M(i),
                            n
                              ? ((B.current = ts(u, e)), D(B.current))
                              : r(!0, i.nativeEvent));
                          return;
                        }
                        _ &&
                          (null != d && (B.current = d),
                          M(i),
                          !n && E ? r(!0, i.nativeEvent) : t(i),
                          n && D(B.current));
                      }
                    },
                    onFocus() {
                      n && D(null);
                    },
                    onPointerDown: function (e) {
                      (q.current = b),
                        "auto" === b && R(e.nativeEvent) && (q.current = !0);
                    },
                    onMouseDown: a,
                    onClick: a,
                  },
                  floating: {
                    "aria-orientation": "both" === O ? void 0 : O,
                    ...l,
                    onKeyDown: t,
                    onPointerMove() {
                      F.current = !0;
                    },
                  },
                  item: et,
                };
              }, [
                o,
                i,
                Z,
                Q,
                Y,
                K,
                u,
                f,
                O,
                m,
                g,
                n,
                ee,
                y,
                d,
                E,
                v,
                S,
                h,
                b,
                D,
                r,
                et,
                N,
                T,
              ]);
            }
            function nj(e, t) {
              void 0 === t && (t = {});
              let { open: n, floatingId: r } = e,
                { enabled: i = !0, role: o = "dialog" } = t,
                a = tC();
              return l.useMemo(() => {
                let e = { id: r, role: o };
                return i
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
                          ...("menu" === o && { id: a }),
                        },
                        floating: {
                          ...e,
                          ...("menu" === o && { "aria-labelledby": a }),
                        },
                      }
                  : {};
              }, [i, o, n, r, a]);
            }
            let nA = (e) =>
              e.replace(
                /[A-Z]+(?![a-z])|[A-Z]/g,
                (e, t) => (t ? "-" : "") + e.toLowerCase(),
              );
            function nC(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function nT(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  elements: { floating: r },
                } = e,
                { duration: i = 250 } = t,
                o = ("number" == typeof i ? i : i.close) || 0,
                [a, u] = l.useState(!1),
                [s, c] = l.useState("unmounted"),
                f = (function (e, t) {
                  let [n, r] = l.useState(e);
                  return (
                    e && !n && r(!0),
                    l.useEffect(() => {
                      if (!e) {
                        let e = setTimeout(() => r(!1), t);
                        return () => clearTimeout(e);
                      }
                    }, [e, t]),
                    n
                  );
                })(n, o);
              return (
                th(() => {
                  a && !f && c("unmounted");
                }, [a, f]),
                th(() => {
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
                    u(!0), c("close");
                  }
                }, [n, r]),
                { isMounted: f, status: s }
              );
            }
            function nI(e, t) {
              void 0 === t && (t = {});
              let {
                  initial: n = { opacity: 0 },
                  open: r,
                  close: i,
                  common: o,
                  duration: a = 250,
                } = t,
                u = e.placement,
                s = u.split("-")[0],
                c = l.useMemo(() => ({ side: s, placement: u }), [s, u]),
                f = "number" == typeof a,
                d = (f ? a : a.open) || 0,
                p = (f ? a : a.close) || 0,
                [v, h] = l.useState(() => ({ ...nC(o, c), ...nC(n, c) })),
                { isMounted: y, status: m } = nT(e, { duration: a }),
                g = tH(n),
                b = tH(r),
                _ = tH(i),
                E = tH(o);
              return (
                th(() => {
                  let e = nC(g.current, c),
                    t = nC(_.current, c),
                    n = nC(E.current, c),
                    r =
                      nC(b.current, c) ||
                      Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
                  if (
                    ("initial" === m &&
                      h((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...n,
                        ...e,
                      })),
                    "open" === m &&
                      h({
                        transitionProperty: Object.keys(r).map(nA).join(","),
                        transitionDuration: d + "ms",
                        ...n,
                        ...r,
                      }),
                    "close" === m)
                  ) {
                    let r = t || e;
                    h({
                      transitionProperty: Object.keys(r).map(nA).join(","),
                      transitionDuration: p + "ms",
                      ...n,
                      ...r,
                    });
                  }
                }, [p, _, g, b, E, d, m, c]),
                { isMounted: y, styles: v }
              );
            }
            function nL(e, t) {
              var n;
              let { open: r, dataRef: i } = e,
                {
                  listRef: o,
                  activeIndex: a,
                  onMatch: u,
                  onTypingChange: s,
                  enabled: c = !0,
                  findMatch: f = null,
                  resetMs: d = 750,
                  ignoreKeys: p = [],
                  selectedIndex: v = null,
                } = t,
                h = l.useRef(),
                y = l.useRef(""),
                m = l.useRef(null != (n = null != v ? v : a) ? n : -1),
                g = l.useRef(null),
                b = tn(u),
                _ = tn(s),
                E = tH(f),
                x = tH(p);
              return (
                th(() => {
                  r &&
                    (clearTimeout(h.current),
                    (g.current = null),
                    (y.current = ""));
                }, [r]),
                th(() => {
                  if (r && "" === y.current) {
                    var e;
                    m.current = null != (e = null != v ? v : a) ? e : -1;
                  }
                }, [r, v, a]),
                l.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    e
                      ? i.current.typing || ((i.current.typing = e), _(e))
                      : i.current.typing && ((i.current.typing = e), _(e));
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
                    let i = o.current;
                    if (
                      (y.current.length > 0 &&
                        " " !== y.current[0] &&
                        (-1 === t(i, i, y.current)
                          ? e(!1)
                          : " " === n.key && M(n)),
                      null == i ||
                        x.current.includes(n.key) ||
                        1 !== n.key.length ||
                        n.ctrlKey ||
                        n.metaKey ||
                        n.altKey)
                    )
                      return;
                    r && " " !== n.key && (M(n), e(!0)),
                      i.every((e) => {
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
                        ((y.current = ""), (m.current = g.current)),
                      (y.current += n.key),
                      clearTimeout(h.current),
                      (h.current = setTimeout(() => {
                        (y.current = ""), (m.current = g.current), e(!1);
                      }, d));
                    let a = m.current,
                      l = t(
                        i,
                        [...i.slice((a || 0) + 1), ...i.slice(0, (a || 0) + 1)],
                        y.current,
                      );
                    -1 !== l
                      ? (b(l), (g.current = l))
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
                }, [c, r, i, o, d, x, E, b, _])
              );
            }
            function nN(e, t) {
              return {
                ...e,
                rects: {
                  ...e.rects,
                  floating: { ...e.rects.floating, height: t },
                },
              };
            }
            let nD = (e) => ({
              name: "inner",
              options: e,
              async fn(t) {
                let {
                    listRef: n,
                    overflowRef: r,
                    onFallbackChange: i,
                    offset: o = 0,
                    index: a = 0,
                    minItemsVisible: l = 4,
                    referenceOverflowThreshold: u = 0,
                    scrollRef: s,
                    ...c
                  } = e,
                  {
                    rects: f,
                    elements: { floating: d },
                  } = t,
                  p = n.current[a];
                if (!p) return {};
                let v = {
                    ...t,
                    ...(await ey(
                      -p.offsetTop -
                        d.clientTop -
                        f.reference.height / 2 -
                        p.offsetHeight / 2 -
                        o,
                    ).fn(t)),
                  },
                  h = (null == s ? void 0 : s.current) || d,
                  y = await ea(nN(v, h.scrollHeight), c),
                  m = await ea(v, { ...c, elementContext: "reference" }),
                  g = Math.max(0, y.top),
                  b = v.y + g,
                  _ = Math.max(0, h.scrollHeight - g - Math.max(0, y.bottom));
                return (
                  (h.style.maxHeight = _ + "px"),
                  (h.scrollTop = g),
                  i &&
                    (h.offsetHeight <
                      p.offsetHeight * Math.min(l, n.current.length - 1) - 1 ||
                    m.top >= -u ||
                    m.bottom >= -u
                      ? (0, eL.flushSync)(() => i(!0))
                      : (0, eL.flushSync)(() => i(!1))),
                  r &&
                    (r.current = await ea(
                      nN({ ...v, y: b }, h.offsetHeight),
                      c,
                    )),
                  { y: b }
                );
              },
            });
            function nM(e, t) {
              let { open: n, elements: r } = e,
                {
                  enabled: i = !0,
                  overflowRef: o,
                  scrollRef: a,
                  onChange: u,
                } = t,
                s = tn(u),
                c = l.useRef(!1),
                f = l.useRef(null),
                d = l.useRef(null);
              return (
                l.useEffect(() => {
                  if (!i) return;
                  function e(e) {
                    if (e.ctrlKey || !t || null == o.current) return;
                    let n = e.deltaY,
                      r = o.current.top >= -0.5,
                      i = o.current.bottom >= -0.5,
                      a = t.scrollHeight - t.clientHeight,
                      l = n < 0 ? -1 : 1,
                      u = n < 0 ? "max" : "min";
                    !(t.scrollHeight <= t.clientHeight) &&
                      ((!r && n > 0) || (!i && n < 0)
                        ? (e.preventDefault(),
                          (0, eL.flushSync)(() => {
                            s((e) => e + Math[u](n, a * l));
                          }))
                        : /firefox/i.test(S()) && (t.scrollTop += n));
                  }
                  let t = (null == a ? void 0 : a.current) || r.floating;
                  if (n && t)
                    return (
                      t.addEventListener("wheel", e),
                      requestAnimationFrame(() => {
                        (f.current = t.scrollTop),
                          null != o.current && (d.current = { ...o.current });
                      }),
                      () => {
                        (f.current = null),
                          (d.current = null),
                          t.removeEventListener("wheel", e);
                      }
                    );
                }, [i, n, r.floating, o, a, s]),
                l.useMemo(
                  () =>
                    i
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
                                (null == a ? void 0 : a.current) || r.floating;
                              if (o.current && e && c.current) {
                                if (null !== f.current) {
                                  let t = e.scrollTop - f.current;
                                  ((o.current.bottom < -0.5 && t < -1) ||
                                    (o.current.top < -0.5 && t > 1)) &&
                                    (0, eL.flushSync)(() => s((e) => e + t));
                                }
                                requestAnimationFrame(() => {
                                  f.current = e.scrollTop;
                                });
                              }
                            },
                          },
                        }
                      : {},
                  [i, o, r.floating, a, s],
                )
              );
            }
            function nq(e, t) {
              let [n, r] = e,
                i = !1,
                o = t.length;
              for (let e = 0, a = o - 1; e < o; a = e++) {
                let [o, l] = t[e] || [0, 0],
                  [u, s] = t[a] || [0, 0];
                l >= r != s >= r &&
                  n <= ((u - o) * (r - l)) / (s - l) + o &&
                  (i = !i);
              }
              return i;
            }
            function nB(e) {
              let t;
              void 0 === e && (e = {});
              let {
                  buffer: n = 0.5,
                  blockPointerEvents: r = !1,
                  requireIntent: i = !0,
                } = e,
                o = !1,
                a = null,
                l = null,
                u = performance.now(),
                s = (e) => {
                  let {
                    x: r,
                    y: s,
                    placement: c,
                    elements: f,
                    onClose: p,
                    nodeId: v,
                    tree: h,
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
                        null == s)
                    )
                      return;
                    let { clientX: m, clientY: g } = e,
                      b = [m, g],
                      _ = N(e),
                      E = "mouseleave" === e.type,
                      x = k(f.floating, _),
                      w = k(f.domReference, _),
                      O = f.domReference.getBoundingClientRect(),
                      S = f.floating.getBoundingClientRect(),
                      P = c.split("-")[0],
                      R = r > S.right - S.width / 2,
                      j = s > S.bottom - S.height / 2,
                      A =
                        b[0] >= O.x &&
                        b[0] <= O.x + O.width &&
                        b[1] >= O.y &&
                        b[1] <= O.y + O.height,
                      C = S.width > O.width,
                      T = S.height > O.height,
                      I = (C ? O : S).left,
                      L = (C ? O : S).right,
                      D = (T ? O : S).top,
                      M = (T ? O : S).bottom;
                    if (x && ((o = !0), !E)) return;
                    if ((w && (o = !1), w && !E)) {
                      o = !0;
                      return;
                    }
                    if (
                      (E &&
                        d(e.relatedTarget) &&
                        k(f.floating, e.relatedTarget)) ||
                      (h &&
                        tX(h.nodesRef.current, v).some((e) => {
                          let { context: t } = e;
                          return null == t ? void 0 : t.open;
                        }))
                    )
                      return;
                    if (
                      ("top" === P && s >= O.bottom - 1) ||
                      ("bottom" === P && s <= O.top + 1) ||
                      ("left" === P && r >= O.right - 1) ||
                      ("right" === P && r <= O.left + 1)
                    )
                      return y();
                    let q = [];
                    switch (P) {
                      case "top":
                        q = [
                          [I, O.top + 1],
                          [I, S.bottom - 1],
                          [L, S.bottom - 1],
                          [L, O.top + 1],
                        ];
                        break;
                      case "bottom":
                        q = [
                          [I, S.top + 1],
                          [I, O.bottom - 1],
                          [L, O.bottom - 1],
                          [L, S.top + 1],
                        ];
                        break;
                      case "left":
                        q = [
                          [S.right - 1, M],
                          [S.right - 1, D],
                          [O.left + 1, D],
                          [O.left + 1, M],
                        ];
                        break;
                      case "right":
                        q = [
                          [O.right - 1, M],
                          [O.right - 1, D],
                          [S.left + 1, D],
                          [S.left + 1, M],
                        ];
                    }
                    if (!nq([m, g], q)) {
                      if (o && !A) return y();
                      if (!E && i) {
                        let t = (function (e, t) {
                          let n = performance.now(),
                            r = n - u;
                          if (null === a || null === l || 0 === r)
                            return (a = e), (l = t), (u = n), null;
                          let i = e - a,
                            o = t - l;
                          return (
                            (a = e),
                            (l = t),
                            (u = n),
                            Math.sqrt(i * i + o * o) / r
                          );
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return y();
                      }
                      nq(
                        [m, g],
                        (function (e) {
                          let [t, r] = e;
                          switch (P) {
                            case "top": {
                              let e = [
                                [
                                  S.left,
                                  R ? S.bottom - n : C ? S.bottom - n : S.top,
                                ],
                                [
                                  S.right,
                                  R ? (C ? S.bottom - n : S.top) : S.bottom - n,
                                ],
                              ];
                              return [
                                [
                                  C ? t + n / 2 : R ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                [
                                  C ? t - n / 2 : R ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                ...e,
                              ];
                            }
                            case "bottom": {
                              let e = [
                                [
                                  S.left,
                                  R ? S.top + n : C ? S.top + n : S.bottom,
                                ],
                                [
                                  S.right,
                                  R ? (C ? S.top + n : S.bottom) : S.top + n,
                                ],
                              ];
                              return [
                                [
                                  C ? t + n / 2 : R ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                [
                                  C ? t - n / 2 : R ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                ...e,
                              ];
                            }
                            case "left":
                              return [
                                [
                                  j ? S.right - n : T ? S.right - n : S.left,
                                  S.top,
                                ],
                                [
                                  j ? (T ? S.right - n : S.left) : S.right - n,
                                  S.bottom,
                                ],
                                [
                                  t + n + 1,
                                  T ? r + n / 2 : j ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t + n + 1,
                                  T ? r - n / 2 : j ? r + 4 * n : r - 4 * n,
                                ],
                              ];
                            case "right": {
                              let e = [
                                [
                                  j ? S.left + n : T ? S.left + n : S.right,
                                  S.top,
                                ],
                                [
                                  j ? (T ? S.left + n : S.right) : S.left + n,
                                  S.bottom,
                                ],
                              ];
                              return [
                                [
                                  t - n,
                                  T ? r + n / 2 : j ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t - n,
                                  T ? r - n / 2 : j ? r + 4 * n : r - 4 * n,
                                ],
                                ...e,
                              ];
                            }
                          }
                        })([r, s]),
                      )
                        ? !o && i && (t = window.setTimeout(y, 40))
                        : y();
                    }
                  };
                };
              return (s.__options = { blockPointerEvents: r }), s;
            }
          },
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                      else for (n in t) t[n] && (i && (i += " "), (i += n));
                    }
                    return i;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => i });
            let i = r;
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
          4779: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = { root: "TYgwct6DZLAMvvFaBZ7z" };
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
                LEFT: () => i,
                RIGHT: () => o,
                UP: () => a,
                useSwipeable: () => p,
              });
            var r = n(810);
            let i = "Left",
              o = "Right",
              a = "Up",
              l = "Down",
              u = {
                delta: 10,
                preventScrollOnSwipe: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0,
                swipeDuration: 1 / 0,
                touchEventOptions: { passive: !0 },
              },
              s = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0],
              },
              c = "mousemove",
              f = "mouseup";
            function d(e, t) {
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
              let { trackMouse: h } = e,
                y = r.useRef(Object.assign({}, s)),
                m = r.useRef(Object.assign({}, u)),
                g = r.useRef(Object.assign({}, m.current));
              for (v in ((g.current = Object.assign({}, m.current)),
              (m.current = Object.assign(Object.assign({}, u), e)),
              u))
                void 0 === m.current[v] && (m.current[v] = u[v]);
              let [b, _] = r.useMemo(
                () =>
                  (function (e, t) {
                    let n = (t) => {
                        let n = "touches" in t;
                        (n && t.touches.length > 1) ||
                          e((e, i) => {
                            i.trackMouse &&
                              !n &&
                              (document.addEventListener(c, r),
                              document.addEventListener(f, h));
                            let { clientX: o, clientY: a } = n
                                ? t.touches[0]
                                : t,
                              l = d([o, a], i.rotationAngle);
                            return (
                              i.onTouchStartOrOnMouseDown &&
                                i.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), s),
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
                          let { clientX: s, clientY: c } = r ? t.touches[0] : t,
                            [f, p] = d([s, c], n.rotationAngle),
                            v = f - e.xy[0],
                            h = p - e.xy[1],
                            y = Math.abs(v),
                            m = Math.abs(h),
                            g = (t.timeStamp || 0) - e.start,
                            b = y > m ? (v > 0 ? o : i) : h > 0 ? l : a,
                            _ =
                              "number" == typeof n.delta
                                ? n.delta
                                : n.delta[b.toLowerCase()] || u.delta;
                          if (y < _ && m < _ && !e.swiping) return e;
                          let E = {
                            absX: y,
                            absY: m,
                            deltaX: v,
                            deltaY: h,
                            dir: b,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: Math.sqrt(y * y + m * m) / (g || 1),
                            vxvy: [v / (g || 1), h / (g || 1)],
                          };
                          E.first && n.onSwipeStart && n.onSwipeStart(E),
                            n.onSwiping && n.onSwiping(E);
                          let x = !1;
                          return (
                            (n.onSwiping ||
                              n.onSwiped ||
                              n["onSwiped".concat(b)]) &&
                              (x = !0),
                            x &&
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
                              let i = n["onSwiped".concat(r.dir)];
                              i && i(r);
                            }
                          } else n.onTap && n.onTap({ event: t });
                          return (
                            n.onTouchEndOrOnMouseUp &&
                              n.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), s),
                              { eventData: r },
                            )
                          );
                        });
                      },
                      v = () => {
                        document.removeEventListener(c, r),
                          document.removeEventListener(f, h);
                      },
                      h = (e) => {
                        v(), p(e);
                      },
                      y = (e, t) => {
                        let i = () => {};
                        if (e && e.addEventListener) {
                          let o = Object.assign(
                              Object.assign({}, u.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            a = [
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
                          a.forEach((t) => {
                            let [n, r, i] = t;
                            return e.addEventListener(n, r, i);
                          }),
                            (i = () =>
                              a.forEach((t) => {
                                let [n, r] = t;
                                return e.removeEventListener(n, r);
                              }));
                        }
                        return i;
                      },
                      m = {
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
                    return t.trackMouse && (m.onMouseDown = n), [m, y];
                  })((e) => (y.current = e(y.current, m.current)), {
                    trackMouse: h,
                  }),
                [h],
              );
              return (
                (y.current =
                  ((t = y.current),
                  (n = m.current),
                  (p = g.current),
                  n.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe ||
                        n.touchEventOptions.passive !==
                          p.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: _(t.el, n),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: _(t.el, n),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                b
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
              i = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              a = Object.prototype.hasOwnProperty,
              l =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              u = { key: !0, ref: !0, __self: !0, __source: !0 };
            function s(e, t, n) {
              var r,
                o = {},
                s = null,
                c = null;
              for (r in (void 0 !== n && (s = "" + n),
              void 0 !== t.key && (s = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                a.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: i,
                type: e,
                key: s,
                ref: c,
                props: o,
                _owner: l.current,
              };
            }
            (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
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
          2571: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "booksLogo",
                  xlinkHref: "#booksLogo",
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
          4439: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", { key: "edit", xlinkHref: "#edit" }),
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
          899: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "kids_selected",
                  xlinkHref: "#kids_selected",
                }),
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
          5266: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "plusColor",
                  xlinkHref: "#plusColor",
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
          68: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "rewindBackwards",
                  xlinkHref: "#rewindBackwards",
                }),
              ]);
            });
          },
          3594: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "rewindForward",
                  xlinkHref: "#rewindForward",
                }),
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
          6751: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_25x_centered",
                  xlinkHref: "#speed_1_25x_centered",
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
          9425: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_5x_centered",
                  xlinkHref: "#speed_1_5x_centered",
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
          6235: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_75x_centered",
                  xlinkHref: "#speed_1_75x_centered",
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
          3615: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1x_centered",
                  xlinkHref: "#speed_1x_centered",
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
          1293: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_2x_centered",
                  xlinkHref: "#speed_2x_centered",
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
          9481: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexBooksEn",
                  xlinkHref: "#yandexBooksEn",
                }),
              ]);
            });
          },
          7364: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexBooksRu",
                  xlinkHref: "#yandexBooksRu",
                }),
              ]);
            });
          },
          8577: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPayEn",
                  xlinkHref: "#yandexPayEn",
                }),
              ]);
            });
          },
          5760: (e, t, n) => {
            var r = n(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPayRu",
                  xlinkHref: "#yandexPayRu",
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
          9110: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle =
                t.useResize =
                t.useIsomorphicEffect =
                t.useElementOffsetY =
                t.getElementNameByDataAttribute =
                t.createIntersectionObserver =
                t.useIntersectionObserver =
                t.useKeyboardNavigation =
                t.useScroll =
                t.useForwardRef =
                  void 0);
            var r = n(245);
            Object.defineProperty(t, "useForwardRef", {
              enumerable: !0,
              get: function () {
                return r.useForwardRef;
              },
            });
            var i = n(2067);
            Object.defineProperty(t, "useScroll", {
              enumerable: !0,
              get: function () {
                return i.useScroll;
              },
            });
            var o = n(5188);
            Object.defineProperty(t, "useKeyboardNavigation", {
              enumerable: !0,
              get: function () {
                return o.useKeyboardNavigation;
              },
            });
            var a = n(5663);
            Object.defineProperty(t, "useIntersectionObserver", {
              enumerable: !0,
              get: function () {
                return a.useIntersectionObserver;
              },
            }),
              Object.defineProperty(t, "createIntersectionObserver", {
                enumerable: !0,
                get: function () {
                  return a.createIntersectionObserver;
                },
              }),
              Object.defineProperty(t, "getElementNameByDataAttribute", {
                enumerable: !0,
                get: function () {
                  return a.getElementNameByDataAttribute;
                },
              });
            var l = n(2101);
            Object.defineProperty(t, "useElementOffsetY", {
              enumerable: !0,
              get: function () {
                return l.useElementOffsetY;
              },
            });
            var u = n(9019);
            Object.defineProperty(t, "useIsomorphicEffect", {
              enumerable: !0,
              get: function () {
                return u.useIsomorphicEffect;
              },
            });
            var s = n(2947);
            Object.defineProperty(t, "useResize", {
              enumerable: !0,
              get: function () {
                return s.useResize;
              },
            });
            var c = n(6699);
            Object.defineProperty(t, "useDebouncedToggle", {
              enumerable: !0,
              get: function () {
                return c.useDebouncedToggle;
              },
            });
          },
          6699: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let r = n(1075),
              i = n(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: n, throttleTimeout: o } = e,
                a = (0, i.useRef)(null),
                [l, u] = (0, i.useState)(!!n),
                s = (0, i.useMemo)(
                  () =>
                    (0, r.throttle)(() => {
                      u(!n),
                        a.current && window.clearTimeout(a.current),
                        (a.current = window.setTimeout(() => {
                          u(!!n);
                        }, t));
                    }, o),
                  [t, n, o],
                ),
                c = (0, i.useCallback)(() => {
                  u(!!n), a.current && window.clearTimeout(a.current);
                }, [n]);
              return (
                (0, i.useEffect)(
                  () => () => {
                    a.current && window.clearTimeout(a.current);
                  },
                  [],
                ),
                { state: l, handleDebouncedToggle: s, reset: c }
              );
            };
          },
          2101: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useElementOffsetY = void 0);
            let r = n(810),
              i = n(2067);
            t.useElementOffsetY = (e) => {
              let t = (0, r.useRef)(null),
                [n, o] = (0, r.useState)(),
                a = (0, r.useCallback)(() => {
                  var e;
                  let n =
                    null === (e = t.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect();
                  n && o(n.y);
                }, []);
              return (
                (0, r.useLayoutEffect)(a),
                (0, i.useScroll)({ onScroll: a, elementRef: e }),
                { ref: t, offsetY: n }
              );
            };
          },
          245: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForwardRef = void 0);
            let r = n(810);
            t.useForwardRef = function (e, t) {
              let n = (0, r.useRef)(t);
              return (
                (0, r.useEffect)(() => {
                  e &&
                    ("function" == typeof e
                      ? e(n.current)
                      : (e.current = n.current));
                }, [e]),
                n
              );
            };
          },
          5663: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIntersectionObserver =
                t.createIntersectionObserver =
                t.getElementNameByDataAttribute =
                t.isInViewportNow =
                t.defaultOptions =
                  void 0);
            let r = n(810),
              { innerWidth: i = 0, innerHeight: o = 0 } = window;
            function a(e) {
              let {
                top: t,
                right: n,
                bottom: r,
                left: a,
              } = e.getBoundingClientRect();
              return (
                ((t >= 0 && t <= o) || (r >= 0 && r <= o)) &&
                ((a >= 0 && a <= i) || (n >= 0 && n <= i))
              );
            }
            function l(e) {
              var t, n;
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "data-intersection-property-id";
              return null !==
                (n =
                  null == e
                    ? void 0
                    : null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, r)) && void 0 !== n
                ? n
                : e.attributes[0];
            }
            function u(e, t) {
              let n = new IntersectionObserver((t) => {
                t.forEach((t) => {
                  e(t, n);
                });
              }, t);
              return n;
            }
            (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
              (t.isInViewportNow = a),
              (t.getElementNameByDataAttribute = l),
              (t.createIntersectionObserver = u),
              (t.useIntersectionObserver = function (e, n, i) {
                let [
                    { freezeOnceVisible: o, preflightCheck: s, ...c },
                    f = !1,
                  ] =
                    "boolean" == typeof n || void 0 === n
                      ? [t.defaultOptions, n]
                      : [{ ...t.defaultOptions, ...n }, i],
                  [d, p] = (0, r.useState)({}),
                  v = (0, r.useMemo)(
                    () =>
                      f
                        ? null
                        : u((e) => {
                            let t = l(e.target);
                            t &&
                              v &&
                              (e.isIntersecting
                                ? p((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !0 },
                                  }))
                                : p((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !1 },
                                  })),
                              o &&
                                v &&
                                e.isIntersecting &&
                                v.unobserve(e.target));
                          }, c),
                    [f],
                  );
                return (
                  (0, r.useLayoutEffect)(
                    () => (
                      v &&
                        !f &&
                        e.forEach((e) => {
                          if (e.current) {
                            let t = !1;
                            if (s && (t = a(e.current))) {
                              let t = l(e.current);
                              p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                            }
                            t || v.observe(e.current);
                          }
                        }),
                      () => {
                        v && v.disconnect();
                      }
                    ),
                    [f, v],
                  ),
                  d
                );
              });
          },
          9019: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIsomorphicEffect = void 0);
            let r = n(810);
            t.useIsomorphicEffect =
              "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
          },
          5188: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useKeyboardNavigation = void 0);
            let r = n(810);
            function i(e, t) {
              return e.current
                ? Array.from(
                    t ? e.current.querySelectorAll(t) : e.current.children,
                  )
                : [];
            }
            t.useKeyboardNavigation = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                {
                  navigationItemsSelector: n,
                  activeAttributeName: o = "aria-selected",
                } = t,
                a = (0, r.useCallback)(
                  (t) => {
                    let r = i(e, n);
                    if (!r.length) return;
                    let o = t.target,
                      a = r.indexOf(o);
                    if (-1 === a) return;
                    let [l] = r,
                      u = r.at(-1),
                      s = null;
                    switch (t.key) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        s = r[a - 1] || u;
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        s = r[a + 1] || l;
                        break;
                      case "Home":
                        s = l;
                        break;
                      case "End":
                        s = u;
                    }
                    null !== s && (s.focus(), t.preventDefault());
                  },
                  [n, e],
                );
              (0, r.useEffect)(() => {
                let t = e.current;
                return (
                  null == t || t.addEventListener("keydown", a),
                  () =>
                    null == t ? void 0 : t.removeEventListener("keydown", a)
                );
              }, [e, a]),
                (0, r.useEffect)(() => {
                  i(e, n).forEach((e) => {
                    e.hasAttribute(o) &&
                      ("true" === e.getAttribute(o)
                        ? (e.tabIndex = 0)
                        : (e.tabIndex = -1));
                  });
                });
            };
          },
          6198: (e, t, n) => {
            var r, i;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable = void 0);
            let o = n(810),
              a = n(6169);
            ((i = r || (r = {})).TOP = "top"),
              (i.BOTTOM = "bottom"),
              (i.RIGHT = "right"),
              (i.LEFT = "left");
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
              u = (e) => {
                let { ref: t, deltaY: n, deltaX: i, placement: o } = e;
                requestAnimationFrame(() => {
                  t.current &&
                    ((t.current.style.willChange = "transform"),
                    (t.current.style.transform =
                      o === r.TOP || o === r.BOTTOM
                        ? "translateY(".concat(n || 0, "px)")
                        : "translateX(".concat(i || 0, "px)")));
                });
              },
              s = (e) => {
                let { ref: t, deltaY: n, deltaX: i, placement: o } = e;
                switch (o) {
                  case r.TOP:
                    n <= 0 && u({ ref: t, deltaY: n, deltaX: i, placement: o });
                    break;
                  case r.RIGHT:
                    i >= 0 && u({ ref: t, deltaY: n, deltaX: i, placement: o });
                    break;
                  case r.LEFT:
                    i <= 0 && u({ ref: t, deltaY: n, deltaX: i, placement: o });
                    break;
                  default:
                    n >= 0 && u({ ref: t, deltaY: n, deltaX: i, placement: o });
                }
              },
              c = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              f = (e) => {
                let { ref: t, deltaY: n, deltaX: i, placement: o } = e;
                switch (o) {
                  case r.TOP:
                    return (
                      t.current && n < 0 && t.current.offsetHeight / n >= -2
                    );
                  case r.RIGHT:
                    return t.current && i > 0 && t.current.offsetWidth / i <= 2;
                  case r.LEFT:
                    return (
                      t.current && i < 0 && t.current.offsetWidth / i >= -2
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
                  disableSwipe: i,
                  placement: u,
                } = e,
                d = (0, o.useMemo)(() => l(u), [u]),
                p = (0, o.useCallback)(() => {
                  r && (c(t), r());
                }, [r, t]),
                v = (0, o.useCallback)(
                  (e) => {
                    i ||
                      s({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: d,
                      });
                  },
                  [i, t, d],
                ),
                h = (0, o.useCallback)(
                  (e) => {
                    !i &&
                      (f({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: d,
                      })
                        ? r && (c(t), r())
                        : c(t));
                  },
                  [i, t, d, r],
                );
              return {
                handlers: (0, a.useSwipeable)({
                  onSwiped: h,
                  onSwiping: v,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...n,
                }),
                onCloseCallback: p,
              };
            };
          },
          2947: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useResize = void 0);
            let r = n(810),
              i = n(361);
            t.useResize = (e, t) => {
              (0, r.useEffect)(() => {
                let n = (0, i.getElementFromRefOrElement)(t);
                if (null === n) return;
                let r = null != n ? n : document.documentElement,
                  o = new ResizeObserver(e);
                return o.observe(r), () => o.disconnect();
              }, [t, e]);
            };
          },
          2067: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let r = n(810),
              i = n(361),
              o = n(6699);
            t.useScroll = (e) => {
              let { onScroll: t, listenIsScrolling: n, elementRef: a } = e,
                { state: l, handleDebouncedToggle: u } = (0,
                o.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                s = (0, r.useCallback)(() => {
                  n && u(), null == t || t();
                }, [n, u, t]);
              return (
                (0, r.useEffect)(() => {
                  let e = (0, i.getElementFromRefOrElement)(a);
                  if (null === e) return;
                  let t = null != e ? e : window,
                    n = { capture: !0, passive: !0 };
                  return (
                    t.addEventListener("scroll", s, n),
                    () => t.removeEventListener("scroll", s, n)
                  );
                }, [a, s]),
                l
              );
            };
          },
          4601: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useToggle = void 0);
            let r = n(810);
            t.useToggle = (e) => {
              let [t, n] = (0, r.useState)(e),
                i = (0, r.useCallback)(() => {
                  n((e) => !e);
                }, []),
                o = (0, r.useCallback)(() => {
                  n(!0);
                }, []),
                a = (0, r.useCallback)(() => {
                  n(!1);
                }, []);
              return {
                state: t,
                toggle: i,
                setState: n,
                toggleTrue: o,
                toggleFalse: a,
              };
            };
          },
          9440: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [
                30, 50, 80, 100, 200, 300, 400, 600, 800, 1e3,
              ]);
            let n = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
            t.createAvatarUrl = (e, t, r) => {
              let i;
              return (
                (i =
                  "orig" === t
                    ? "orig"
                    : r
                      ? "m".concat(t, "x").concat(t)
                      : "".concat(t, "x").concat(t)),
                n(e.replace("%%", i))
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, n) {
                let r = null != n ? n : e.currentTarget,
                  i = document.createElement("span"),
                  o = Math.max(r.clientWidth, r.clientHeight),
                  a = o / 2,
                  l = r.getBoundingClientRect(),
                  u =
                    0 === e.clientX
                      ? Math.round(l.width / 2)
                      : e.clientX - l.left,
                  s =
                    0 === e.clientY
                      ? Math.round(l.height / 2)
                      : e.clientY - l.top;
                (i.style.width = "".concat(o, "px")),
                  (i.style.height = "".concat(o, "px")),
                  (i.style.left =
                    0 === e.clientX ? "0px" : "".concat(u - a, "px")),
                  (i.style.top = "".concat(s - a, "px")),
                  i.classList.add(t);
                let c = r.getElementsByClassName(t)[0];
                c && c.remove(), r.insertBefore(i, r.firstChild);
              });
          },
          361: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = void 0),
              (t.getElementFromRefOrElement = (e) =>
                void 0 === e
                  ? void 0
                  : null === e || e instanceof HTMLElement
                    ? e
                    : null === e.current || e.current instanceof HTMLElement
                      ? e.current
                      : void 0);
          },
          8216: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement =
                t.createAvatarUrl =
                t.createRipple =
                  void 0);
            var r = n(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return r.createRipple;
              },
            });
            var i = n(9440);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return i.createAvatarUrl;
              },
            });
            var o = n(361);
            Object.defineProperty(t, "getElementFromRefOrElement", {
              enumerable: !0,
              get: function () {
                return o.getElementFromRefOrElement;
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
            let i = n(9541),
              o = n(810),
              a = n(5881),
              l = n(8216),
              u = r(n(8635)),
              s = (e) => {
                let {
                    forwardRef: t,
                    isBlock: n,
                    iconPosition: r = "left",
                    children: s,
                    className: c,
                    color: f = "secondary",
                    flexIcon: d,
                    icon: p,
                    role: v,
                    onClick: h,
                    radius: y = "m",
                    size: m,
                    type: g = "button",
                    variant: b = "default",
                    withRipple: _ = !0,
                    withHover: E = !0,
                    withBorder: x = !1,
                    disabled: w,
                    iconClassName: k,
                    iconContainerClassName: O,
                    ...S
                  } = e,
                  P = (0, o.useId)(),
                  R = !o.Children.toArray(s).filter(Boolean).length,
                  j = "left" === r,
                  A = null;
                if (p) {
                  var C, T;
                  A = (0, o.cloneElement)(p, {
                    className: (0, a.clsx)(
                      u.default.icon,
                      {
                        [u.default["icon_position_".concat(r)]]: r && !R,
                        [u.default.icon_withButtonSize]: !(null ===
                          (C = p.props) || void 0 === C
                          ? void 0
                          : C.size),
                      },
                      null === (T = p.props) || void 0 === T
                        ? void 0
                        : T.className,
                      k,
                    ),
                    key: P,
                  });
                }
                let I = (0, o.useCallback)(
                  (e) => {
                    _ && (0, l.createRipple)(e, u.default.ripple),
                      null == h || h(e);
                  },
                  [h, _],
                );
                return (0, i.jsx)("button", {
                  ref: t,
                  className: (0, a.clsx)(
                    u.default.root,
                    u.default["root_".concat(f, "_").concat(b)],
                    u.default["root_radius_".concat(y)],
                    u.default.root_size,
                    {
                      [u.default["root_".concat(f, "_withHover_").concat(b)]]:
                        E && !w,
                      [u.default["root_size_".concat(m)]]: m,
                      [u.default.root_withoutBorder]: !x,
                      [u.default.block]: n,
                      [u.default.flexIcon]: d,
                      [u.default.iconOnly]: R,
                      [u.default.root_icon_left]: p && !R && j,
                      [u.default.root_icon_right]: p && !R && !j,
                    },
                    c,
                  ),
                  type: g,
                  role: v,
                  onClick: I,
                  ...S,
                  disabled: w,
                  children: p
                    ? (0, i.jsxs)("span", {
                        className: (0, a.clsx)(
                          u.default.iconContainer,
                          { [u.default.iconContainer_block]: n },
                          O,
                        ),
                        children: [j && A, !R && s, !j && A],
                      })
                    : s,
                });
              };
            t.Button = (0, o.forwardRef)((e, t) =>
              (0, i.jsx)(s, { forwardRef: t, ...e }),
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
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = n(5062),
              u = n(1688),
              s = r(n(7519));
            (t.DropdownComponent = (e) => {
              let {
                  reference: t,
                  onSelect: n,
                  onIconActiveState: r,
                  offsetOptions: c = 8,
                  defaultValue: f,
                  placement: d,
                  header: p,
                  isDisabled: v = !1,
                  footer: h,
                  isMobile: y = !1,
                  children: m,
                  forwardRef: g,
                  className: b,
                  containerClassName: _,
                  ...E
                } = e,
                x = (0, a.useId)(),
                [w, k] = (0, a.useState)(!1),
                [O, S] = (0, a.useState)(f);
              (0, a.useEffect)(() => {
                S(f);
              }, [f]);
              let P = (0, a.useCallback)(() => {
                  v || (k(!w), null == r || r(!w));
                }, [v, w, r]),
                R = (0, a.useCallback)(
                  (e) => {
                    S(e.id), n(e), k(!1), null == r || r(!1);
                  },
                  [n, r],
                );
              return (0, i.jsxs)(l.Popover, {
                open: w,
                onOpenChange: P,
                placement: d,
                offsetOptions: c,
                isMobile: y,
                customRoleProps: { role: "menu" },
                "aria-labelledby": x,
                children: [
                  (0, a.cloneElement)(t, {
                    id: x,
                    onClick: P,
                    disabled: v,
                    variant: "text",
                    withHover: !1,
                    color: "primary",
                    className: (0, o.clsx)(s.default.button, t.props.className),
                  }),
                  (0, i.jsx)(u.PopoverContent, {
                    children: (0, i.jsxs)("div", {
                      className: (0, o.clsx)(s.default.root, b),
                      ...E,
                      children: [
                        y &&
                          (0, i.jsx)("div", { className: s.default.swipeIcon }),
                        (0, i.jsxs)("ul", {
                          ref: g,
                          className: (0, o.clsx)(
                            s.default.container,
                            { [s.default.container_mobile]: y },
                            _,
                          ),
                          children: [
                            p &&
                              (0, i.jsx)("div", {
                                className: s.default.textContainer,
                                children: p,
                              }),
                            a.Children.map(m, (e) =>
                              (0, a.cloneElement)(e, {
                                key: e.props.id,
                                onClick: () => R(e.props),
                                isSelected: O === e.props.id,
                              }),
                            ),
                            h &&
                              (0, i.jsx)("div", {
                                className: s.default.textContainer,
                                children: h,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
            }),
              (t.Dropdown = (0, a.forwardRef)((e, n) =>
                (0, i.jsx)(t.DropdownComponent, { forwardRef: n, ...e }),
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
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = n(6011),
              u = n(5928),
              s = n(7066),
              c = n(2582),
              f = r(n(4019));
            (t.OptionComponent = (e) => {
              let {
                  id: t,
                  label: n,
                  isSelected: r = !1,
                  className: a,
                  forwardRef: d,
                  ...p
                } = e,
                v = (0, l.useListItem)(),
                h = (0, l.useMergeRefs)([v.ref, d]);
              return (0, i.jsx)("li", {
                className: f.default.root,
                children: (0, i.jsxs)(u.Button, {
                  className: (0, o.clsx)(f.default.button, a),
                  ref: h,
                  id: t,
                  variant: "text",
                  color: "primary",
                  withHover: !1,
                  role: "menuitem",
                  "aria-selected": r,
                  ...p,
                  children: [
                    (0, i.jsx)(c.Caption, {
                      variant: "span",
                      className: f.default.buttonText,
                      children: n,
                    }),
                    r && (0, i.jsx)(s.Icon, { size: "xxs", variant: "check" }),
                  ],
                }),
              });
            }),
              (t.Option = (0, a.forwardRef)((e, n) => {
                let { children: r, ...o } = e;
                return (0, i.jsx)(t.OptionComponent, {
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
            let i = n(9541),
              o = n(810),
              a = n(5881),
              l = n(5151),
              u = n(4905),
              s = r(n(5929));
            (t.IconComponent = (e) => {
              let {
                  "aria-label": t,
                  className: n,
                  focusable: r = !1,
                  variant: o,
                  size: c,
                  forwardRef: f,
                  ...d
                } = e,
                p = l.iconsCollection[o];
              return (0, i.jsx)(p, {
                className: (0, a.clsx)(
                  s.default.root,
                  n,
                  s.default["root_size_".concat(c)],
                ),
                focusable: r,
                "aria-label": t,
                ...d,
                "aria-hidden": !t,
                ref: f,
                style: { ...(d.style || {}), padding: u.paddings[o] },
              });
            }),
              (t.Icon = (0, o.forwardRef)((e, n) =>
                (0, i.jsx)(t.IconComponent, { forwardRef: n, ...e }),
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
            let i = r(n(5695)),
              o = r(n(9800)),
              a = r(n(2751)),
              l = r(n(383)),
              u = r(n(758)),
              s = r(n(9466)),
              c = r(n(9032)),
              f = r(n(7294)),
              d = r(n(8409)),
              p = r(n(2571)),
              v = r(n(1478)),
              h = r(n(849)),
              y = r(n(3781)),
              m = r(n(5951)),
              g = r(n(7203)),
              b = r(n(8688)),
              _ = r(n(4653)),
              E = r(n(2966)),
              x = r(n(5849)),
              w = r(n(6631)),
              k = r(n(5972)),
              O = r(n(2703)),
              S = r(n(3514)),
              P = r(n(3342)),
              R = r(n(957)),
              j = r(n(4439)),
              A = r(n(7431)),
              C = r(n(6609)),
              T = r(n(2900)),
              I = r(n(7299)),
              L = r(n(3687)),
              N = r(n(2272)),
              D = r(n(8005)),
              M = r(n(533)),
              q = r(n(7261)),
              B = r(n(899)),
              z = r(n(2646)),
              F = r(n(3171)),
              H = r(n(5494)),
              U = r(n(6334)),
              W = r(n(9165)),
              V = r(n(1936)),
              Y = r(n(4973)),
              K = r(n(5517)),
              G = r(n(6685)),
              Z = r(n(8274)),
              X = r(n(6094)),
              Q = r(n(3974)),
              J = r(n(2502)),
              $ = r(n(1754)),
              ee = r(n(6615)),
              et = r(n(7942)),
              en = r(n(1498)),
              er = r(n(9473)),
              ei = r(n(5985)),
              eo = r(n(8749)),
              ea = r(n(1687)),
              el = r(n(4947)),
              eu = r(n(243)),
              es = r(n(2761)),
              ec = r(n(6515)),
              ef = r(n(9817)),
              ed = r(n(9319)),
              ep = r(n(7471)),
              ev = r(n(3133)),
              eh = r(n(8602)),
              ey = r(n(1514)),
              em = r(n(5801)),
              eg = r(n(6684)),
              eb = r(n(8861)),
              e_ = r(n(5266)),
              eE = r(n(6809)),
              ex = r(n(1179)),
              ew = r(n(6532)),
              ek = r(n(7918)),
              eO = r(n(7881)),
              eS = r(n(7692)),
              eP = r(n(2339)),
              eR = r(n(68)),
              ej = r(n(3594)),
              eA = r(n(7954)),
              eC = r(n(6178)),
              eT = r(n(200)),
              eI = r(n(9109)),
              eL = r(n(4521)),
              eN = r(n(7163)),
              eD = r(n(3013)),
              eM = r(n(1937)),
              eq = r(n(4576)),
              eB = r(n(4717)),
              ez = r(n(3615)),
              eF = r(n(6751)),
              eH = r(n(9425)),
              eU = r(n(6235)),
              eW = r(n(1293)),
              eV = r(n(9298)),
              eY = r(n(6539)),
              eK = r(n(6029)),
              eG = r(n(5312)),
              eZ = r(n(3993)),
              eX = r(n(5730)),
              eQ = r(n(631)),
              eJ = r(n(4689)),
              e$ = r(n(5667)),
              e0 = r(n(2639)),
              e1 = r(n(8577)),
              e2 = r(n(5760)),
              e3 = r(n(9481)),
              e5 = r(n(7364));
            t.iconsCollection = {
              add: i.default,
              addToPlaylist: o.default,
              adult: a.default,
              album: l.default,
              arrowDown: u.default,
              arrowLeft: s.default,
              arrowRight: c.default,
              artist: f.default,
              attention: d.default,
              booksLogo: p.default,
              bucket: v.default,
              cast: h.default,
              chain: y.default,
              chartDown: m.default,
              chartNew: g.default,
              chartSame: b.default,
              chartUp: _.default,
              check: E.default,
              close: x.default,
              collections_selected: w.default,
              collections: k.default,
              dislike: O.default,
              disliked: S.default,
              dragDots: P.default,
              donation: R.default,
              edit: j.default,
              explicit: A.default,
              eye_crossed: C.default,
              filter: T.default,
              fullscreen: I.default,
              history: N.default,
              home_selected: D.default,
              home: M.default,
              info: L.default,
              kids: q.default,
              kids_selected: B.default,
              kinopoiskEn: z.default,
              kinopoiskRu: F.default,
              lightning: H.default,
              like: U.default,
              liked: W.default,
              likedVariant: V.default,
              likeVariant: Y.default,
              link: K.default,
              lock: G.default,
              lyrics: Z.default,
              menuArrow: X.default,
              more: Q.default,
              musicLogo: J.default,
              musicLogoCenterEn: $.default,
              musicLogoCenterRu: ee.default,
              musicLogoLeftEn: et.default,
              musicLogoLeftRu: en.default,
              next: er.default,
              non_music: ei.default,
              note: eo.default,
              pause_filled: ea.default,
              pause: el.default,
              pauseVibe: eu.default,
              pencil: es.default,
              pin_filled: ec.default,
              pin: ef.default,
              play_filled: ed.default,
              play: ep.default,
              playLast: ev.default,
              playlist: eh.default,
              playNext: ey.default,
              playQueue: em.default,
              playVibe: eg.default,
              plus: eb.default,
              plusColor: e_.default,
              plusBadge: eE.default,
              plusOutlined: ex.default,
              podcasts: ew.default,
              previous: ek.default,
              repeat_one: eO.default,
              repeat: eS.default,
              reset: eP.default,
              rewindBackwards: eR.default,
              rewindForward: ej.default,
              search: eA.default,
              search_selected: eC.default,
              settings: eT.default,
              share: eI.default,
              shuffle: eL.default,
              speed_1x: eN.default,
              speed_1_25x: eD.default,
              speed_1_5x: eM.default,
              speed_1_75x: eq.default,
              speed_2x: eB.default,
              speed_1x_centered: ez.default,
              speed_1_25x_centered: eF.default,
              speed_1_5x_centered: eH.default,
              speed_1_75x_centered: eU.default,
              speed_2x_centered: eW.default,
              syncLyrics: eV.default,
              trailer: eY.default,
              unavailable: eK.default,
              unpin: eG.default,
              users: eZ.default,
              vibe: eX.default,
              volume: eQ.default,
              volumeOff: eJ.default,
              yandexPlusEn: e$.default,
              yandexPlusRu: e0.default,
              yandexPayRu: e2.default,
              yandexPayEn: e1.default,
              yandexBooksRu: e5.default,
              yandexBooksEn: e3.default,
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
                booksLogo: "var(--ym-icon-padding)",
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
                edit: "var(--ym-icon-padding)",
                explicit: "var(--ym-icon-padding)",
                eye_crossed: "var(--ym-icon-padding, 2px 1px 2px 2px)",
                filter: "var(--ym-icon-padding, 6px 4px 6px 4px)",
                fullscreen: "var(--ym-icon-padding, 4px)",
                history: "var(--ym-icon-padding, 2px)",
                home_selected: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                home: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                info: "var(--ym-icon-padding)",
                kids: "var(--ym-icon-padding, 4px 3px)",
                kids_selected: "var(--ym-icon-padding, 4px 3px)",
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
                plusColor: "var(--ym-icon-padding)",
                plusBadge: "var(--ym-icon-padding)",
                plusOutlined: "var(--ym-icon-padding, 4px 4px 4px 5px)",
                podcasts: "var(--ym-icon-padding, 6px)",
                previous: "var(--ym-icon-padding, 4px)",
                repeat_one: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                repeat: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                reset: "var(--ym-icon-padding, 2px)",
                rewindBackwards: "var(--ym-icon-padding)",
                rewindForward: "var(--ym-icon-padding)",
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
                speed_1x_centered: "var(--ym-icon-padding)",
                speed_1_25x_centered: "var(--ym-icon-padding)",
                speed_1_5x_centered: "var(--ym-icon-padding)",
                speed_1_75x_centered: "var(--ym-icon-padding)",
                speed_2x_centered: "var(--ym-icon-padding)",
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
                yandexPayEn: "var(--ym-icon-padding, 0)",
                yandexPayRu: "var(--ym-icon-padding, 0)",
                yandexBooksEn: "var(--ym-icon-padding, 0)",
                yandexBooksRu: "var(--ym-icon-padding, 0)",
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
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = n(6011),
              u = n(6198),
              s = n(5853),
              c = n(7601),
              f = r(n(4965));
            t.Popover = (e) => {
              let {
                  children: t,
                  offsetOptions: n,
                  strategy: r,
                  placement: d,
                  isMobile: p,
                  visuallyHiddenDismiss: v,
                  positionElement: h,
                  transform: y,
                  initialOpen: m = !1,
                  open: g,
                  onOpenChange: b,
                  disableFloatingStyles: _ = !1,
                  overlayClassName: E,
                  transition: x,
                  style: w,
                  returnFocus: k,
                  isNested: O = !1,
                  onShow: S,
                  customRoleProps: P,
                  portalNode: R,
                  isEnabled: j = !0,
                  arrowProps: A,
                } = e,
                [C, T] = (0, a.useState)(m),
                [I, L] = (0, a.useState)(null),
                N = (0, a.useRef)([]),
                D = (0, a.useRef)([]),
                M = (0, a.useRef)(null),
                q = (0, l.useListItem)(),
                B = null != g ? g : C,
                z = null != b ? b : T,
                [F, H] = t,
                U = (0, a.useCallback)(() => {
                  z(!1);
                }, [z]),
                W = (0, a.useId)(),
                V = (0, a.useId)(),
                {
                  refs: Y,
                  floatingStyles: K,
                  context: G,
                } = (0, l.useFloating)({
                  strategy: r,
                  placement: d,
                  open: B,
                  onOpenChange: z,
                  middleware: [
                    (0, l.offset)(n),
                    (0, l.flip)(),
                    (0, l.shift)(),
                    (0, l.arrow)({ element: M }),
                    (0, l.hide)(),
                  ],
                  whileElementsMounted: l.autoUpdate,
                  transform: y,
                }),
                Z = (0, l.useTypeahead)(G, {
                  listRef: D,
                  onMatch: B ? L : void 0,
                  activeIndex: I,
                }),
                X = (0, l.useListNavigation)(G, {
                  listRef: N,
                  activeIndex: I,
                  nested: O,
                  onNavigate: L,
                }),
                Q = (0, l.useFloatingTree)(),
                J = (0, l.useFloatingNodeId)(),
                $ = (0, l.useFloatingParentNodeId)();
              (0, a.useEffect)(() => {
                if (!Q) return;
                let e = () => {
                    z(!1);
                  },
                  t = (e) => {
                    e.nodeId !== J && e.parentId === $ && z(!1);
                  };
                return (
                  Q.events.on("click", e),
                  Q.events.on("menuopen", t),
                  () => {
                    Q.events.off("click", e), Q.events.off("menuopen", t);
                  }
                );
              }, [Q, J, $, z]),
                (0, a.useEffect)(() => {
                  B && (null == S || S());
                }, [S, B]),
                (0, a.useEffect)(() => {
                  B &&
                    Q &&
                    Q.events.emit("menuopen", { parentId: $, nodeId: J });
                }, [Q, B, J, $]),
                (0, a.useLayoutEffect)(() => {
                  h && Y.setPositionReference(h);
                }, [Y, h]);
              let { handlers: ee } = (0, u.usePopoverSwipeable)({
                  ref: Y.floating,
                  onClose: U,
                  placement: d,
                  disableSwipe: !p,
                  swipeableProps: { preventScrollOnSwipe: !0 },
                }),
                et = (0, l.useMergeRefs)([
                  Y.setFloating,
                  null == ee ? void 0 : ee.ref,
                ]),
                en = (0, l.useRole)(G, P),
                er = (0, l.useDismiss)(G, { referencePress: !0 }),
                ei = (0, l.useClick)(G, {
                  enabled: j,
                  toggle: !O,
                  ignoreMouse: O,
                }),
                eo = (0, l.useHover)(G, {
                  enabled: O && j,
                  handleClose: (0, l.safePolygon)({ blockPointerEvents: !0 }),
                }),
                ea = (0, a.useCallback)((e) => {
                  e.stopPropagation();
                }, []),
                {
                  getReferenceProps: el,
                  getFloatingProps: eu,
                  getItemProps: es,
                } = (0, l.useInteractions)([en, er, ei, eo, X, Z]),
                { isMounted: ec, styles: ef } = (0, l.useTransitionStyles)(
                  G,
                  x,
                ),
                ed = (0, l.useMergeRefs)([Y.setReference, q.ref]),
                ep =
                  F &&
                  (0, a.cloneElement)(F, {
                    ref: ed,
                    ...el({ onClick: F.props.onClick }),
                    key: W,
                  }),
                ev = (0, a.useMemo)(
                  () =>
                    p
                      ? {
                          ...(_ ? {} : K),
                          ...w,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          top: "auto",
                          transform: "none",
                        }
                      : { ...(_ ? {} : K), ...w },
                  [p, _, K, w],
                ),
                eh = (0, a.useMemo)(() => {
                  if (null == A ? void 0 : A.isEnabled)
                    return (0, i.jsx)(c.PopoverArrow, {
                      ref: M,
                      context: G,
                      ...A,
                    });
                }, [A, G]),
                ey = {
                  ref: et,
                  style: { ...ev, ...ef },
                  ...eu(),
                  onMouseDown: null == ee ? void 0 : ee.onMouseDown,
                  arrow: eh,
                  children: (0, a.cloneElement)(H.props.children, {
                    onClose: U,
                    key: V,
                  }),
                },
                em = (0, a.cloneElement)(H, ey),
                eg = (0, a.useMemo)(
                  () => ({
                    activeIndex: I,
                    setActiveIndex: L,
                    getItemProps: es,
                    isOpen: B,
                  }),
                  [I, es, B],
                ),
                eb = O ? -1 : 0;
              return (0, i.jsxs)(s.PopoverContext.Provider, {
                value: eg,
                children: [
                  ep,
                  (0, i.jsx)(l.FloatingList, {
                    elementsRef: N,
                    children:
                      ec &&
                      (0, i.jsxs)(l.FloatingPortal, {
                        root: R,
                        children: [
                          (0, i.jsx)(l.FloatingOverlay, {
                            className: (0, o.clsx)(f.default.overlay, E),
                            onClick: ea,
                            lockScroll: !0,
                          }),
                          (0, i.jsx)(l.FloatingFocusManager, {
                            context: G,
                            returnFocus: k,
                            initialFocus: eb,
                            visuallyHiddenDismiss: v,
                            children: em,
                          }),
                        ],
                      }),
                  }),
                ],
              });
            };
          },
          7601: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverArrow = t.PopoverArrowComponent = void 0);
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = n(9110),
              u = n(4601),
              s = r(n(4779)),
              c = {
                top: "",
                left: "rotate(-90deg)",
                bottom: "rotate(180deg)",
                right: "rotate(90deg)",
              };
            (t.PopoverArrowComponent = (e) => {
              let {
                  forwardRef: t,
                  className: n,
                  context: r,
                  width: a = 14,
                  height: f = 7,
                  tipRadius: d = 0,
                  customClipPath: p,
                  staticOffset: v,
                  style: { transform: h, ...y } = {},
                  isEnabled: m,
                  ...g
                } = e,
                {
                  placement: b,
                  elements: { floating: _ },
                  middlewareData: { arrow: E },
                } = r,
                { state: x, toggleTrue: w } = (0, u.useToggle)(!1);
              if (
                ((0, l.useIsomorphicEffect)(() => {
                  _ && "rtl" === getComputedStyle(_).direction && w();
                }, [_, w]),
                !_ || !m)
              )
                return null;
              let k = (a / 2) * (-(d / 8) + 1),
                O = ((f / 2) * d) / 4,
                [S, P] = b.split("-"),
                R = v && "end" === P ? "right" : "left";
              v && x && (R = "end" === P ? "left" : "right");
              let j = (null == E ? void 0 : E.x) ? v || E.x : "",
                A = (null == E ? void 0 : E.y) ? v || E.y : "",
                C = c[S],
                T =
                  p ||
                  '"M0,0' +
                    " H".concat(a) +
                    " L".concat(a - k, ",").concat(f - O) +
                    " Q"
                      .concat(a / 2, ",")
                      .concat(f, " ")
                      .concat(k, ",")
                      .concat(f - O) +
                    ' Z"',
                I = {
                  [R]: j,
                  [v && "end" === P ? "bottom" : "top"]: A,
                  [S]: "100%",
                  transform: "".concat(C).concat(null != h ? h : ""),
                  "--arrow-width": "".concat(a, "px"),
                  "--arrow-clip-path": T,
                  ...y,
                };
              return (0, i.jsx)("div", {
                ...g,
                className: (0, o.clsx)(s.default.root, n),
                ref: t,
                style: I,
              });
            }),
              (t.PopoverArrow = (0, a.forwardRef)((e, n) =>
                (0, i.jsx)(t.PopoverArrowComponent, { forwardRef: n, ...e }),
              ));
          },
          1688: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.PopoverContentComponent = void 0);
            let i = n(9541),
              o = n(810),
              a = n(5881),
              l = r(n(5371));
            (t.PopoverContentComponent = (e) => {
              let {
                className: t,
                children: n,
                forwardRef: r,
                arrow: u,
                ...s
              } = e;
              return (0, i.jsxs)("div", {
                className: (0, a.clsx)(l.default.root, t),
                ref: r,
                ...s,
                children: [n, (0, o.isValidElement)(u) && u],
              });
            }),
              (t.PopoverContent = (0, o.forwardRef)((e, n) =>
                (0, i.jsx)(t.PopoverContentComponent, { forwardRef: n, ...e }),
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
            var i = n(1688);
            Object.defineProperty(t, "PopoverContent", {
              enumerable: !0,
              get: function () {
                return i.PopoverContent;
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
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = n(4721),
              u = r(n(390));
            function s(e) {
              let {
                forwardRef: t,
                variant: n,
                type: r = "text",
                size: a = "s",
                className: s,
                children: c,
                weight: f = "medium",
                ...d
              } = e;
              return (0, i.jsx)(l.Typography, {
                variant: n,
                ref: t,
                className: (0, o.clsx)(
                  u.default.root,
                  u.default["root_".concat(r, "_").concat(a)],
                  u.default["root_weight_".concat(f)],
                  s,
                ),
                ...d,
                children: c,
              });
            }
            (t.CaptionComponent = s),
              (t.Caption = (0, a.forwardRef)((e, t) =>
                (0, i.jsx)(s, { forwardRef: t, ...e }),
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
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = n(4721),
              u = r(n(8544));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: n,
                weight: r = "bold",
                size: a = "s",
                className: s,
                children: c,
                ...f
              } = e;
              return (0, i.jsx)(l.Typography, {
                variant: n,
                ref: t,
                className: (0, o.clsx)(
                  u.default.root,
                  u.default["root_size_".concat(a)],
                  u.default["root_weight_".concat(r)],
                  s,
                ),
                ...f,
                children: c,
              });
            }),
              (t.Heading = (0, a.forwardRef)((e, n) =>
                (0, i.jsx)(t.HeadingComponent, { forwardRef: n, ...e }),
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
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = r(n(2524));
            function u(e) {
              let {
                  forwardRef: t,
                  style: n,
                  className: r,
                  children: a,
                  variant: u,
                  lineClamp: s,
                  ...c
                } = e,
                f = s && "string" == typeof a ? a : void 0;
              return (0, i.jsx)(u, {
                style: { ...n, WebkitLineClamp: s },
                ref: t,
                title: f,
                className: (0, o.clsx)(
                  l.default.root,
                  {
                    [l.default.root_clamp]: s && s > 0,
                    [l.default.root_clamp_oneline]: s && 1 === s,
                    [l.default.root_clamp_multiline]: s && s > 1,
                  },
                  r,
                ),
                ...c,
                children: a,
              });
            }
            (t.TypographyComponent = u),
              (t.Typography = (0, a.forwardRef)((e, t) =>
                (0, i.jsx)(u, { forwardRef: t, ...e }),
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
            var i = n(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return i.Heading;
              },
            });
          },
          810: (e) => {
            e.exports = o || (o = n.t(l, 2));
          },
          1075: (t, r, i) => {
            i.r(r),
              i.d(r, {
                add: () => T,
                after: () => K,
                ary: () => to,
                assign: () => tK,
                assignIn: () => tJ,
                assignInWith: () => t$,
                assignWith: () => t0,
                at: () => nw,
                attempt: () => nC,
                before: () => nT,
                bind: () => nL,
                bindAll: () => nN,
                bindKey: () => nM,
                camelCase: () => rw,
                capitalize: () => n1,
                castArray: () => rk,
                ceil: () => rR,
                chain: () => rj,
                chunk: () => rT,
                clamp: () => rL,
                clone: () => iO,
                cloneDeep: () => iS,
                cloneDeepWith: () => iP,
                cloneWith: () => iR,
                commit: () => ij,
                compact: () => iA,
                concat: () => iC,
                cond: () => i6,
                conforms: () => oe,
                conformsTo: () => ot,
                constant: () => eH,
                countBy: () => of,
                create: () => od,
                curry: () => ov,
                curryRight: () => oy,
                debounce: () => o_,
                deburr: () => n6,
                default: () => fX,
                defaultTo: () => oE,
                defaults: () => ok,
                defaultsDeep: () => oI,
                defer: () => oN,
                delay: () => oD,
                difference: () => oB,
                differenceBy: () => oF,
                differenceWith: () => oH,
                divide: () => oU,
                drop: () => oW,
                dropRight: () => oV,
                dropRightWhile: () => oK,
                dropWhile: () => oG,
                each: () => oX,
                eachRight: () => o1,
                endsWith: () => o2,
                entries: () => o8,
                entriesIn: () => o4,
                eq: () => tl,
                escape: () => ae,
                escapeRegExp: () => ar,
                every: () => aa,
                extend: () => tJ,
                extendWith: () => t$,
                fill: () => as,
                filter: () => af,
                find: () => ah,
                findIndex: () => av,
                findKey: () => am,
                findLast: () => aE,
                findLastIndex: () => a_,
                findLastKey: () => ax,
                first: () => aw,
                flatMap: () => aS,
                flatMapDeep: () => aR,
                flatMapDepth: () => aj,
                flatten: () => nE,
                flattenDeep: () => aC,
                flattenDepth: () => aT,
                flip: () => aI,
                floor: () => aL,
                flow: () => aD,
                flowRight: () => aM,
                forEach: () => oX,
                forEachRight: () => o1,
                forIn: () => aq,
                forInRight: () => aB,
                forOwn: () => az,
                forOwnRight: () => aF,
                fromPairs: () => aH,
                functions: () => aW,
                functionsIn: () => aV,
                get: () => nh,
                groupBy: () => aK,
                gt: () => aX,
                gte: () => aQ,
                has: () => a0,
                hasIn: () => i2,
                head: () => aw,
                identity: () => G,
                inRange: () => a3,
                includes: () => a9,
                indexOf: () => le,
                initial: () => lt,
                intersection: () => lo,
                intersectionBy: () => la,
                intersectionWith: () => ll,
                invert: () => lc,
                invertBy: () => lv,
                invoke: () => lm,
                invokeMap: () => lg,
                isArguments: () => tO,
                isArray: () => S,
                isArrayBuffer: () => l_,
                isArrayLike: () => th,
                isArrayLikeObject: () => oS,
                isBoolean: () => lE,
                isBuffer: () => tA,
                isDate: () => lw,
                isElement: () => lk,
                isEmpty: () => lS,
                isEqual: () => lP,
                isEqualWith: () => lR,
                isError: () => nA,
                isFinite: () => lA,
                isFunction: () => Z,
                isInteger: () => lC,
                isLength: () => tv,
                isMap: () => im,
                isMatch: () => lT,
                isMatchWith: () => lI,
                isNaN: () => lN,
                isNative: () => lM,
                isNil: () => lq,
                isNull: () => lB,
                isNumber: () => lL,
                isObject: () => M,
                isObjectLike: () => E,
                isPlainObject: () => nj,
                isRegExp: () => lF,
                isSafeInteger: () => lH,
                isSet: () => ib,
                isString: () => a5,
                isSymbol: () => x,
                isTypedArray: () => tq,
                isUndefined: () => lU,
                isWeakMap: () => lW,
                isWeakSet: () => lV,
                iteratee: () => lY,
                join: () => lG,
                kebabCase: () => lZ,
                keyBy: () => lX,
                keys: () => tV,
                keysIn: () => tQ,
                last: () => oz,
                lastIndexOf: () => l0,
                lodash: () => eT,
                lowerCase: () => l1,
                lowerFirst: () => l2,
                lt: () => l5,
                lte: () => l8,
                map: () => aO,
                mapKeys: () => l4,
                mapValues: () => l6,
                matches: () => l9,
                matchesProperty: () => l7,
                max: () => ut,
                maxBy: () => un,
                mean: () => ua,
                meanBy: () => ul,
                memoize: () => na,
                merge: () => uu,
                mergeWith: () => oT,
                method: () => us,
                methodOf: () => uc,
                min: () => uf,
                minBy: () => ud,
                mixin: () => up,
                multiply: () => uv,
                negate: () => uh,
                next: () => ub,
                noop: () => ex,
                now: () => om,
                nth: () => uE,
                nthArg: () => ux,
                omit: () => uO,
                omitBy: () => uj,
                once: () => uA,
                orderBy: () => uN,
                over: () => uM,
                overArgs: () => uB,
                overEvery: () => uz,
                overSome: () => uF,
                pad: () => u6,
                padEnd: () => u9,
                padStart: () => u7,
                parseInt: () => sn,
                partial: () => si,
                partialRight: () => sa,
                partition: () => sl,
                pick: () => su,
                pickBy: () => uR,
                plant: () => ss,
                property: () => i8,
                propertyOf: () => sc,
                pull: () => sh,
                pullAll: () => sv,
                pullAllBy: () => sy,
                pullAllWith: () => sm,
                pullAt: () => s_,
                random: () => sP,
                range: () => sT,
                rangeRight: () => sI,
                rearg: () => sL,
                reduce: () => sD,
                reduceRight: () => sq,
                reject: () => sB,
                remove: () => sz,
                repeat: () => sF,
                replace: () => sH,
                rest: () => sU,
                result: () => sW,
                reverse: () => sY,
                round: () => sK,
                sample: () => sZ,
                sampleSize: () => sJ,
                set: () => s$,
                setWith: () => s0,
                shuffle: () => s1,
                size: () => s2,
                slice: () => s3,
                snakeCase: () => s5,
                some: () => s4,
                sortBy: () => s6,
                sortedIndex: () => cn,
                sortedIndexBy: () => cr,
                sortedIndexOf: () => ci,
                sortedLastIndex: () => co,
                sortedLastIndexBy: () => ca,
                sortedLastIndexOf: () => cl,
                sortedUniq: () => cs,
                sortedUniqBy: () => cc,
                split: () => cf,
                spread: () => cp,
                startCase: () => cv,
                startsWith: () => ch,
                stubArray: () => rU,
                stubFalse: () => tS,
                stubObject: () => cy,
                stubString: () => cm,
                stubTrue: () => cg,
                subtract: () => cb,
                sum: () => c_,
                sumBy: () => cE,
                tail: () => cx,
                take: () => cw,
                takeRight: () => ck,
                takeRightWhile: () => cO,
                takeWhile: () => cS,
                tap: () => cP,
                template: () => cU,
                templateSettings: () => cL,
                throttle: () => cW,
                thru: () => cV,
                times: () => cK,
                toArray: () => ug,
                toFinite: () => V,
                toInteger: () => Y,
                toIterator: () => cG,
                toJSON: () => cX,
                toLength: () => al,
                toLower: () => cQ,
                toNumber: () => U,
                toPairs: () => o8,
                toPairsIn: () => o4,
                toPath: () => cJ,
                toPlainObject: () => oR,
                toSafeInteger: () => c$,
                toString: () => nc,
                toUpper: () => c0,
                transform: () => c1,
                trim: () => c5,
                trimEnd: () => c8,
                trimStart: () => c6,
                truncate: () => c7,
                unary: () => fe,
                unescape: () => fi,
                union: () => fl,
                unionBy: () => fu,
                unionWith: () => fs,
                uniq: () => fc,
                uniqBy: () => ff,
                uniqWith: () => fd,
                uniqueId: () => fv,
                unset: () => fh,
                unzip: () => fm,
                unzipWith: () => fg,
                update: () => f_,
                updateWith: () => fE,
                upperCase: () => fx,
                upperFirst: () => n0,
                value: () => cX,
                valueOf: () => cX,
                values: () => a4,
                valuesIn: () => fw,
                without: () => fk,
                words: () => r_,
                wrap: () => fO,
                wrapperAt: () => fS,
                wrapperChain: () => fP,
                wrapperCommit: () => ij,
                wrapperLodash: () => eT,
                wrapperNext: () => ub,
                wrapperPlant: () => ss,
                wrapperReverse: () => fR,
                wrapperToIterator: () => cG,
                wrapperValue: () => cX,
                xor: () => fA,
                xorBy: () => fC,
                xorWith: () => fT,
                zip: () => fI,
                zipObject: () => fN,
                zipObjectDeep: () => fD,
                zipWith: () => fM,
              });
            var o,
              a,
              l,
              u,
              s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
              c =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              f = s || c || Function("return this")(),
              d = f.Symbol,
              p = Object.prototype,
              v = p.hasOwnProperty,
              h = p.toString,
              y = d ? d.toStringTag : void 0;
            let m = function (e) {
              var t = v.call(e, y),
                n = e[y];
              try {
                e[y] = void 0;
                var r = !0;
              } catch (e) {}
              var i = h.call(e);
              return r && (t ? (e[y] = n) : delete e[y]), i;
            };
            var g = Object.prototype.toString,
              b = d ? d.toStringTag : void 0;
            let _ = function (e) {
                return null == e
                  ? void 0 === e
                    ? "[object Undefined]"
                    : "[object Null]"
                  : b && b in Object(e)
                    ? m(e)
                    : g.call(e);
              },
              E = function (e) {
                return null != e && "object" == typeof e;
              },
              x = function (e) {
                return (
                  "symbol" == typeof e || (E(e) && "[object Symbol]" == _(e))
                );
              };
            var w = 0 / 0;
            let k = function (e) {
                return "number" == typeof e ? e : x(e) ? w : +e;
              },
              O = function (e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length, i = Array(r);
                  ++n < r;

                )
                  i[n] = t(e[n], n, e);
                return i;
              },
              S = Array.isArray;
            var P = 1 / 0,
              R = d ? d.prototype : void 0,
              j = R ? R.toString : void 0;
            let A = function e(t) {
                if ("string" == typeof t) return t;
                if (S(t)) return O(t, e) + "";
                if (x(t)) return j ? j.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -P ? "-0" : n;
              },
              C = function (e, t) {
                return function (n, r) {
                  var i;
                  if (void 0 === n && void 0 === r) return t;
                  if ((void 0 !== n && (i = n), void 0 !== r)) {
                    if (void 0 === i) return r;
                    "string" == typeof n || "string" == typeof r
                      ? ((n = A(n)), (r = A(r)))
                      : ((n = k(n)), (r = k(r))),
                      (i = e(n, r));
                  }
                  return i;
                };
              },
              T = C(function (e, t) {
                return e + t;
              }, 0);
            var I = /\s/;
            let L = function (e) {
              for (var t = e.length; t-- && I.test(e.charAt(t)); );
              return t;
            };
            var N = /^\s+/;
            let D = function (e) {
                return e ? e.slice(0, L(e) + 1).replace(N, "") : e;
              },
              M = function (e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              };
            var q = 0 / 0,
              B = /^[-+]0x[0-9a-f]+$/i,
              z = /^0b[01]+$/i,
              F = /^0o[0-7]+$/i,
              H = parseInt;
            let U = function (e) {
              if ("number" == typeof e) return e;
              if (x(e)) return q;
              if (M(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = M(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = D(e);
              var n = z.test(e);
              return n || F.test(e)
                ? H(e.slice(2), n ? 2 : 8)
                : B.test(e)
                  ? q
                  : +e;
            };
            var W = 1 / 0;
            let V = function (e) {
                return e
                  ? (e = U(e)) === W || e === -W
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                      ? e
                      : 0
                  : 0 === e
                    ? e
                    : 0;
              },
              Y = function (e) {
                var t = V(e),
                  n = t % 1;
                return t == t ? (n ? t - n : t) : 0;
              },
              K = function (e, t) {
                if ("function" != typeof t)
                  throw TypeError("Expected a function");
                return (
                  (e = Y(e)),
                  function () {
                    if (--e < 1) return t.apply(this, arguments);
                  }
                );
              },
              G = function (e) {
                return e;
              },
              Z = function (e) {
                if (!M(e)) return !1;
                var t = _(e);
                return (
                  "[object Function]" == t ||
                  "[object GeneratorFunction]" == t ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              };
            var X = f["__core-js_shared__"],
              Q = (o = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + o
                : "",
              J = Function.prototype.toString;
            let $ = function (e) {
              if (null != e) {
                try {
                  return J.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            };
            var ee = /^\[object .+?Constructor\]$/,
              et = Object.prototype,
              en = Function.prototype.toString,
              er = et.hasOwnProperty,
              ei = RegExp(
                "^" +
                  en
                    .call(er)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?",
                    ) +
                  "$",
              );
            let eo = function (e) {
                return (
                  !!M(e) && (!Q || !(Q in e)) && (Z(e) ? ei : ee).test($(e))
                );
              },
              ea = function (e, t) {
                var n = null == e ? void 0 : e[t];
                return eo(n) ? n : void 0;
              };
            var el = ea(f, "WeakMap"),
              eu = el && new el(),
              es = eu
                ? function (e, t) {
                    return eu.set(e, t), e;
                  }
                : G,
              ec = Object.create,
              ef = (function () {
                function e() {}
                return function (t) {
                  if (!M(t)) return {};
                  if (ec) return ec(t);
                  e.prototype = t;
                  var n = new e();
                  return (e.prototype = void 0), n;
                };
              })();
            let ed = function (e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var n = ef(e.prototype),
                    r = e.apply(n, t);
                  return M(r) ? r : n;
                };
              },
              ep = function (e, t, n) {
                var r = 1 & t,
                  i = ed(e);
                return function t() {
                  return (
                    this && this !== f && this instanceof t ? i : e
                  ).apply(r ? n : this, arguments);
                };
              },
              ev = function (e, t, n) {
                switch (n.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, n[0]);
                  case 2:
                    return e.call(t, n[0], n[1]);
                  case 3:
                    return e.call(t, n[0], n[1], n[2]);
                }
                return e.apply(t, n);
              };
            var eh = Math.max;
            let ey = function (e, t, n, r) {
              for (
                var i = -1,
                  o = e.length,
                  a = n.length,
                  l = -1,
                  u = t.length,
                  s = eh(o - a, 0),
                  c = Array(u + s),
                  f = !r;
                ++l < u;

              )
                c[l] = t[l];
              for (; ++i < a; ) (f || i < o) && (c[n[i]] = e[i]);
              for (; s--; ) c[l++] = e[i++];
              return c;
            };
            var em = Math.max;
            let eg = function (e, t, n, r) {
                for (
                  var i = -1,
                    o = e.length,
                    a = -1,
                    l = n.length,
                    u = -1,
                    s = t.length,
                    c = em(o - l, 0),
                    f = Array(c + s),
                    d = !r;
                  ++i < c;

                )
                  f[i] = e[i];
                for (var p = i; ++u < s; ) f[p + u] = t[u];
                for (; ++a < l; ) (d || i < o) && (f[p + n[a]] = e[i++]);
                return f;
              },
              eb = function (e, t) {
                for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                return r;
              },
              e_ = function () {};
            function eE(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = 4294967295),
                (this.__views__ = []);
            }
            (eE.prototype = ef(e_.prototype)), (eE.prototype.constructor = eE);
            let ex = function () {};
            var ew = eu
              ? function (e) {
                  return eu.get(e);
                }
              : ex;
            let ek = {};
            var eO = Object.prototype.hasOwnProperty;
            let eS = function (e) {
              for (
                var t = e.name + "",
                  n = ek[t],
                  r = eO.call(ek, t) ? n.length : 0;
                r--;

              ) {
                var i = n[r],
                  o = i.func;
                if (null == o || o == e) return i.name;
              }
              return t;
            };
            function eP(e, t) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = void 0);
            }
            (eP.prototype = ef(e_.prototype)), (eP.prototype.constructor = eP);
            let eR = function (e, t) {
                var n = -1,
                  r = e.length;
                for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
                return t;
              },
              ej = function (e) {
                if (e instanceof eE) return e.clone();
                var t = new eP(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = eR(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              };
            var eA = Object.prototype.hasOwnProperty;
            function eC(e) {
              if (E(e) && !S(e) && !(e instanceof eE)) {
                if (e instanceof eP) return e;
                if (eA.call(e, "__wrapped__")) return ej(e);
              }
              return new eP(e);
            }
            (eC.prototype = e_.prototype), (eC.prototype.constructor = eC);
            let eT = eC,
              eI = function (e) {
                var t = eS(e),
                  n = eT[t];
                if ("function" != typeof n || !(t in eE.prototype)) return !1;
                if (e === n) return !0;
                var r = ew(n);
                return !!r && e === r[0];
              };
            var eL = Date.now;
            let eN = function (e) {
              var t = 0,
                n = 0;
              return function () {
                var r = eL(),
                  i = 16 - (r - n);
                if (((n = r), i > 0)) {
                  if (++t >= 800) return arguments[0];
                } else t = 0;
                return e.apply(void 0, arguments);
              };
            };
            var eD = eN(es),
              eM = /\{\n\/\* \[wrapped with (.+)\] \*/,
              eq = /,? & /;
            let eB = function (e) {
              var t = e.match(eM);
              return t ? t[1].split(eq) : [];
            };
            var ez = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            let eF = function (e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return (
                  (t[r] = (n > 1 ? "& " : "") + t[r]),
                  (t = t.join(n > 2 ? ", " : " ")),
                  e.replace(ez, "{\n/* [wrapped with " + t + "] */\n")
                );
              },
              eH = function (e) {
                return function () {
                  return e;
                };
              };
            var eU = (function () {
                try {
                  var e = ea(Object, "defineProperty");
                  return e({}, "", {}), e;
                } catch (e) {}
              })(),
              eW = eN(
                eU
                  ? function (e, t) {
                      return eU(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: eH(t),
                        writable: !0,
                      });
                    }
                  : G,
              );
            let eV = function (e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length;
                  ++n < r && !1 !== t(e[n], n, e);

                );
                return e;
              },
              eY = function (e, t, n, r) {
                for (
                  var i = e.length, o = n + (r ? 1 : -1);
                  r ? o-- : ++o < i;

                )
                  if (t(e[o], o, e)) return o;
                return -1;
              },
              eK = function (e) {
                return e != e;
              },
              eG = function (e, t, n) {
                for (var r = n - 1, i = e.length; ++r < i; )
                  if (e[r] === t) return r;
                return -1;
              },
              eZ = function (e, t, n) {
                return t == t ? eG(e, t, n) : eY(e, eK, n);
              },
              eX = function (e, t) {
                return !!(null == e ? 0 : e.length) && eZ(e, t, 0) > -1;
              };
            var eQ = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ];
            let eJ = function (e, t, n) {
                var r,
                  i = t + "";
                return eW(
                  e,
                  eF(
                    i,
                    ((r = eB(i)),
                    eV(eQ, function (e) {
                      var t = "_." + e[0];
                      n & e[1] && !eX(r, t) && r.push(t);
                    }),
                    r.sort()),
                  ),
                );
              },
              e$ = function (e, t, n, r, i, o, a, l, u, s) {
                var c = 8 & t;
                (t |= c ? 32 : 64), 4 & (t &= ~(c ? 64 : 32)) || (t &= -4);
                var f = [
                    e,
                    t,
                    i,
                    c ? o : void 0,
                    c ? a : void 0,
                    c ? void 0 : o,
                    c ? void 0 : a,
                    l,
                    u,
                    s,
                  ],
                  d = n.apply(void 0, f);
                return eI(e) && eD(d, f), (d.placeholder = r), eJ(d, e, t);
              },
              e0 = function (e) {
                return e.placeholder;
              };
            var e1 = /^(?:0|[1-9]\d*)$/;
            let e2 = function (e, t) {
              var n = typeof e;
              return (
                !!(t = null == t ? 9007199254740991 : t) &&
                ("number" == n || ("symbol" != n && e1.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            };
            var e3 = Math.min;
            let e5 = function (e, t) {
              for (var n = e.length, r = e3(t.length, n), i = eR(e); r--; ) {
                var o = t[r];
                e[r] = e2(o, n) ? i[o] : void 0;
              }
              return e;
            };
            var e8 = "__lodash_placeholder__";
            let e4 = function (e, t) {
                for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                  var a = e[n];
                  (a === t || a === e8) && ((e[n] = e8), (o[i++] = n));
                }
                return o;
              },
              e6 = function e(t, n, r, i, o, a, l, u, s, c) {
                var d = 128 & n,
                  p = 1 & n,
                  v = 2 & n,
                  h = 24 & n,
                  y = 512 & n,
                  m = v ? void 0 : ed(t);
                return function g() {
                  for (var b = arguments.length, _ = Array(b), E = b; E--; )
                    _[E] = arguments[E];
                  if (h)
                    var x = e0(g),
                      w = eb(_, x);
                  if (
                    (i && (_ = ey(_, i, o, h)),
                    a && (_ = eg(_, a, l, h)),
                    (b -= w),
                    h && b < c)
                  ) {
                    var k = e4(_, x);
                    return e$(t, n, e, g.placeholder, r, _, k, u, s, c - b);
                  }
                  var O = p ? r : this,
                    S = v ? O[t] : t;
                  return (
                    (b = _.length),
                    u ? (_ = e5(_, u)) : y && b > 1 && _.reverse(),
                    d && s < b && (_.length = s),
                    this && this !== f && this instanceof g && (S = m || ed(S)),
                    S.apply(O, _)
                  );
                };
              },
              e9 = function (e, t, n) {
                var r = ed(e);
                return function i() {
                  for (
                    var o = arguments.length, a = Array(o), l = o, u = e0(i);
                    l--;

                  )
                    a[l] = arguments[l];
                  var s = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : e4(a, u);
                  return (o -= s.length) < n
                    ? e$(
                        e,
                        t,
                        e6,
                        i.placeholder,
                        void 0,
                        a,
                        s,
                        void 0,
                        void 0,
                        n - o,
                      )
                    : ev(
                        this && this !== f && this instanceof i ? r : e,
                        this,
                        a,
                      );
                };
              },
              e7 = function (e, t, n, r) {
                var i = 1 & t,
                  o = ed(e);
                return function t() {
                  for (
                    var a = -1,
                      l = arguments.length,
                      u = -1,
                      s = r.length,
                      c = Array(s + l),
                      d = this && this !== f && this instanceof t ? o : e;
                    ++u < s;

                  )
                    c[u] = r[u];
                  for (; l--; ) c[u++] = arguments[++a];
                  return ev(d, i ? n : this, c);
                };
              };
            var te = "__lodash_placeholder__",
              tt = Math.min;
            let tn = function (e, t) {
              var n = e[1],
                r = t[1],
                i = n | r,
                o = i < 131,
                a =
                  (128 == r && 8 == n) ||
                  (128 == r && 256 == n && e[7].length <= t[8]) ||
                  (384 == r && t[7].length <= t[8] && 8 == n);
              if (!(o || a)) return e;
              1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
              var l = t[3];
              if (l) {
                var u = e[3];
                (e[3] = u ? ey(u, l, t[4]) : l),
                  (e[4] = u ? e4(e[3], te) : t[4]);
              }
              return (
                (l = t[5]) &&
                  ((u = e[5]),
                  (e[5] = u ? eg(u, l, t[6]) : l),
                  (e[6] = u ? e4(e[5], te) : t[6])),
                (l = t[7]) && (e[7] = l),
                128 & r && (e[8] = null == e[8] ? t[8] : tt(e[8], t[8])),
                null == e[9] && (e[9] = t[9]),
                (e[0] = t[0]),
                (e[1] = i),
                e
              );
            };
            var tr = Math.max;
            let ti = function (e, t, n, r, i, o, a, l) {
                var u = 2 & t;
                if (!u && "function" != typeof e)
                  throw TypeError("Expected a function");
                var s = r ? r.length : 0;
                if (
                  (s || ((t &= -97), (r = i = void 0)),
                  (a = void 0 === a ? a : tr(Y(a), 0)),
                  (l = void 0 === l ? l : Y(l)),
                  (s -= i ? i.length : 0),
                  64 & t)
                ) {
                  var c = r,
                    f = i;
                  r = i = void 0;
                }
                var d = u ? void 0 : ew(e),
                  p = [e, t, n, r, i, c, f, o, a, l];
                if (
                  (d && tn(p, d),
                  (e = p[0]),
                  (t = p[1]),
                  (n = p[2]),
                  (r = p[3]),
                  (i = p[4]),
                  (l = p[9] =
                    void 0 === p[9] ? (u ? 0 : e.length) : tr(p[9] - s, 0)) ||
                    !(24 & t) ||
                    (t &= -25),
                  t && 1 != t)
                )
                  v =
                    8 == t || 16 == t
                      ? e9(e, t, l)
                      : (32 != t && 33 != t) || i.length
                        ? e6.apply(void 0, p)
                        : e7(e, t, n, r);
                else var v = ep(e, t, n);
                return eJ((d ? es : eD)(v, p), e, t);
              },
              to = function (e, t, n) {
                return (
                  (t = n ? void 0 : t),
                  (t = e && null == t ? e.length : t),
                  ti(e, 128, void 0, void 0, void 0, void 0, t)
                );
              },
              ta = function (e, t, n) {
                "__proto__" == t && eU
                  ? eU(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (e[t] = n);
              },
              tl = function (e, t) {
                return e === t || (e != e && t != t);
              };
            var tu = Object.prototype.hasOwnProperty;
            let ts = function (e, t, n) {
                var r = e[t];
                (tu.call(e, t) && tl(r, n) && (void 0 !== n || t in e)) ||
                  ta(e, t, n);
              },
              tc = function (e, t, n, r) {
                var i = !n;
                n || (n = {});
                for (var o = -1, a = t.length; ++o < a; ) {
                  var l = t[o],
                    u = r ? r(n[l], e[l], l, n, e) : void 0;
                  void 0 === u && (u = e[l]), i ? ta(n, l, u) : ts(n, l, u);
                }
                return n;
              };
            var tf = Math.max;
            let td = function (e, t, n) {
                return (
                  (t = tf(void 0 === t ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var r = arguments,
                        i = -1,
                        o = tf(r.length - t, 0),
                        a = Array(o);
                      ++i < o;

                    )
                      a[i] = r[t + i];
                    i = -1;
                    for (var l = Array(t + 1); ++i < t; ) l[i] = r[i];
                    return (l[t] = n(a)), ev(e, this, l);
                  }
                );
              },
              tp = function (e, t) {
                return eW(td(e, t, G), e + "");
              },
              tv = function (e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              },
              th = function (e) {
                return null != e && tv(e.length) && !Z(e);
              },
              ty = function (e, t, n) {
                if (!M(n)) return !1;
                var r = typeof t;
                return (
                  ("number" == r
                    ? !!(th(n) && e2(t, n.length))
                    : "string" == r && t in n) && tl(n[t], e)
                );
              },
              tm = function (e) {
                return tp(function (t, n) {
                  var r = -1,
                    i = n.length,
                    o = i > 1 ? n[i - 1] : void 0,
                    a = i > 2 ? n[2] : void 0;
                  for (
                    o =
                      e.length > 3 && "function" == typeof o
                        ? (i--, o)
                        : void 0,
                      a &&
                        ty(n[0], n[1], a) &&
                        ((o = i < 3 ? void 0 : o), (i = 1)),
                      t = Object(t);
                    ++r < i;

                  ) {
                    var l = n[r];
                    l && e(t, l, r, o);
                  }
                  return t;
                });
              };
            var tg = Object.prototype;
            let tb = function (e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || tg);
              },
              t_ = function (e, t) {
                for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                return r;
              },
              tE = function (e) {
                return E(e) && "[object Arguments]" == _(e);
              };
            var tx = Object.prototype,
              tw = tx.hasOwnProperty,
              tk = tx.propertyIsEnumerable;
            let tO = tE(
                (function () {
                  return arguments;
                })(),
              )
                ? tE
                : function (e) {
                    return (
                      E(e) && tw.call(e, "callee") && !tk.call(e, "callee")
                    );
                  },
              tS = function () {
                return !1;
              };
            var tP =
                "object" == typeof exports &&
                exports &&
                !exports.nodeType &&
                exports,
              tR = tP && e && !e.nodeType && e,
              tj = tR && tR.exports === tP ? f.Buffer : void 0;
            let tA = (tj ? tj.isBuffer : void 0) || tS;
            var tC = {};
            (tC["[object Float32Array]"] =
              tC["[object Float64Array]"] =
              tC["[object Int8Array]"] =
              tC["[object Int16Array]"] =
              tC["[object Int32Array]"] =
              tC["[object Uint8Array]"] =
              tC["[object Uint8ClampedArray]"] =
              tC["[object Uint16Array]"] =
              tC["[object Uint32Array]"] =
                !0),
              (tC["[object Arguments]"] =
                tC["[object Array]"] =
                tC["[object ArrayBuffer]"] =
                tC["[object Boolean]"] =
                tC["[object DataView]"] =
                tC["[object Date]"] =
                tC["[object Error]"] =
                tC["[object Function]"] =
                tC["[object Map]"] =
                tC["[object Number]"] =
                tC["[object Object]"] =
                tC["[object RegExp]"] =
                tC["[object Set]"] =
                tC["[object String]"] =
                tC["[object WeakMap]"] =
                  !1);
            let tT = function (e) {
              return function (t) {
                return e(t);
              };
            };
            var tI =
                "object" == typeof exports &&
                exports &&
                !exports.nodeType &&
                exports,
              tL = tI && e && !e.nodeType && e,
              tN = tL && tL.exports === tI && s.process,
              tD = (function () {
                try {
                  var e = tL && tL.require && tL.require("util").types;
                  if (e) return e;
                  return tN && tN.binding && tN.binding("util");
                } catch (e) {}
              })(),
              tM = tD && tD.isTypedArray;
            let tq = tM
              ? tT(tM)
              : function (e) {
                  return E(e) && tv(e.length) && !!tC[_(e)];
                };
            var tB = Object.prototype.hasOwnProperty;
            let tz = function (e, t) {
                var n = S(e),
                  r = !n && tO(e),
                  i = !n && !r && tA(e),
                  o = !n && !r && !i && tq(e),
                  a = n || r || i || o,
                  l = a ? t_(e.length, String) : [],
                  u = l.length;
                for (var s in e)
                  (t || tB.call(e, s)) &&
                    !(
                      a &&
                      ("length" == s ||
                        (i && ("offset" == s || "parent" == s)) ||
                        (o &&
                          ("buffer" == s ||
                            "byteLength" == s ||
                            "byteOffset" == s)) ||
                        e2(s, u))
                    ) &&
                    l.push(s);
                return l;
              },
              tF = function (e, t) {
                return function (n) {
                  return e(t(n));
                };
              };
            var tH = tF(Object.keys, Object),
              tU = Object.prototype.hasOwnProperty;
            let tW = function (e) {
                if (!tb(e)) return tH(e);
                var t = [];
                for (var n in Object(e))
                  tU.call(e, n) && "constructor" != n && t.push(n);
                return t;
              },
              tV = function (e) {
                return th(e) ? tz(e) : tW(e);
              };
            var tY = Object.prototype.hasOwnProperty;
            let tK = tm(function (e, t) {
                if (tb(t) || th(t)) {
                  tc(t, tV(t), e);
                  return;
                }
                for (var n in t) tY.call(t, n) && ts(e, n, t[n]);
              }),
              tG = function (e) {
                var t = [];
                if (null != e) for (var n in Object(e)) t.push(n);
                return t;
              };
            var tZ = Object.prototype.hasOwnProperty;
            let tX = function (e) {
                if (!M(e)) return tG(e);
                var t = tb(e),
                  n = [];
                for (var r in e)
                  ("constructor" == r && (t || !tZ.call(e, r))) || n.push(r);
                return n;
              },
              tQ = function (e) {
                return th(e) ? tz(e, !0) : tX(e);
              },
              tJ = tm(function (e, t) {
                tc(t, tQ(t), e);
              }),
              t$ = tm(function (e, t, n, r) {
                tc(t, tQ(t), e, r);
              }),
              t0 = tm(function (e, t, n, r) {
                tc(t, tV(t), e, r);
              });
            var t1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              t2 = /^\w*$/;
            let t3 = function (e, t) {
              if (S(e)) return !1;
              var n = typeof e;
              return (
                !!(
                  "number" == n ||
                  "symbol" == n ||
                  "boolean" == n ||
                  null == e ||
                  x(e)
                ) ||
                t2.test(e) ||
                !t1.test(e) ||
                (null != t && e in Object(t))
              );
            };
            var t5 = ea(Object, "create"),
              t8 = Object.prototype.hasOwnProperty,
              t4 = Object.prototype.hasOwnProperty;
            function t6(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            (t6.prototype.clear = function () {
              (this.__data__ = t5 ? t5(null) : {}), (this.size = 0);
            }),
              (t6.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }),
              (t6.prototype.get = function (e) {
                var t = this.__data__;
                if (t5) {
                  var n = t[e];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return t8.call(t, e) ? t[e] : void 0;
              }),
              (t6.prototype.has = function (e) {
                var t = this.__data__;
                return t5 ? void 0 !== t[e] : t4.call(t, e);
              }),
              (t6.prototype.set = function (e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = t5 && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              });
            let t9 = function (e, t) {
              for (var n = e.length; n--; ) if (tl(e[n][0], t)) return n;
              return -1;
            };
            var t7 = Array.prototype.splice;
            function ne(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            (ne.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
              (ne.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t9(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : t7.call(t, n, 1),
                  --this.size,
                  !0)
                );
              }),
              (ne.prototype.get = function (e) {
                var t = this.__data__,
                  n = t9(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (ne.prototype.has = function (e) {
                return t9(this.__data__, e) > -1;
              }),
              (ne.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = t9(n, e);
                return (
                  r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                );
              });
            var nt = ea(f, "Map");
            let nn = function (e) {
                var t = typeof e;
                return "string" == t ||
                  "number" == t ||
                  "symbol" == t ||
                  "boolean" == t
                  ? "__proto__" !== e
                  : null === e;
              },
              nr = function (e, t) {
                var n = e.__data__;
                return nn(t)
                  ? n["string" == typeof t ? "string" : "hash"]
                  : n.map;
              };
            function ni(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function no(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw TypeError("Expected a function");
              var n = function () {
                var r = arguments,
                  i = t ? t.apply(this, r) : r[0],
                  o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
              };
              return (n.cache = new (no.Cache || ni)()), n;
            }
            (ni.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new t6(),
                  map: new (nt || ne)(),
                  string: new t6(),
                });
            }),
              (ni.prototype.delete = function (e) {
                var t = nr(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              }),
              (ni.prototype.get = function (e) {
                return nr(this, e).get(e);
              }),
              (ni.prototype.has = function (e) {
                return nr(this, e).has(e);
              }),
              (ni.prototype.set = function (e, t) {
                var n = nr(this, e),
                  r = n.size;
                return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
              }),
              (no.Cache = ni);
            let na = no;
            var nl =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              nu = /\\(\\)?/g,
              ns =
                ((l = (a = na(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(nl, function (e, n, r, i) {
                        t.push(r ? i.replace(nu, "$1") : n || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === l.size && l.clear(), e;
                  },
                )).cache),
                a);
            let nc = function (e) {
                return null == e ? "" : A(e);
              },
              nf = function (e, t) {
                return S(e) ? e : t3(e, t) ? [e] : ns(nc(e));
              };
            var nd = 1 / 0;
            let np = function (e) {
                if ("string" == typeof e || x(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -nd ? "-0" : t;
              },
              nv = function (e, t) {
                t = nf(t, e);
                for (var n = 0, r = t.length; null != e && n < r; )
                  e = e[np(t[n++])];
                return n && n == r ? e : void 0;
              },
              nh = function (e, t, n) {
                var r = null == e ? void 0 : nv(e, t);
                return void 0 === r ? n : r;
              },
              ny = function (e, t) {
                for (
                  var n = -1, r = t.length, i = Array(r), o = null == e;
                  ++n < r;

                )
                  i[n] = o ? void 0 : nh(e, t[n]);
                return i;
              },
              nm = function (e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r; )
                  e[i + n] = t[n];
                return e;
              };
            var ng = d ? d.isConcatSpreadable : void 0;
            let nb = function (e) {
                return S(e) || tO(e) || !!(ng && e && e[ng]);
              },
              n_ = function e(t, n, r, i, o) {
                var a = -1,
                  l = t.length;
                for (r || (r = nb), o || (o = []); ++a < l; ) {
                  var u = t[a];
                  n > 0 && r(u)
                    ? n > 1
                      ? e(u, n - 1, r, i, o)
                      : nm(o, u)
                    : i || (o[o.length] = u);
                }
                return o;
              },
              nE = function (e) {
                return (null == e ? 0 : e.length) ? n_(e, 1) : [];
              },
              nx = function (e) {
                return eW(td(e, void 0, nE), e + "");
              },
              nw = nx(ny);
            var nk = tF(Object.getPrototypeOf, Object),
              nO = Object.prototype,
              nS = Function.prototype.toString,
              nP = nO.hasOwnProperty,
              nR = nS.call(Object);
            let nj = function (e) {
                if (!E(e) || "[object Object]" != _(e)) return !1;
                var t = nk(e);
                if (null === t) return !0;
                var n = nP.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof n && n instanceof n && nS.call(n) == nR
                );
              },
              nA = function (e) {
                if (!E(e)) return !1;
                var t = _(e);
                return (
                  "[object Error]" == t ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !nj(e))
                );
              },
              nC = tp(function (e, t) {
                try {
                  return ev(e, void 0, t);
                } catch (e) {
                  return nA(e) ? e : Error(e);
                }
              }),
              nT = function (e, t) {
                var n;
                if ("function" != typeof t)
                  throw TypeError("Expected a function");
                return (
                  (e = Y(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = void 0),
                      n
                    );
                  }
                );
              };
            var nI = tp(function (e, t, n) {
              var r = 1;
              if (n.length) {
                var i = e4(n, e0(nI));
                r |= 32;
              }
              return ti(e, r, t, n, i);
            });
            nI.placeholder = {};
            let nL = nI,
              nN = nx(function (e, t) {
                return (
                  eV(t, function (t) {
                    ta(e, (t = np(t)), nL(e[t], e));
                  }),
                  e
                );
              });
            var nD = tp(function (e, t, n) {
              var r = 3;
              if (n.length) {
                var i = e4(n, e0(nD));
                r |= 32;
              }
              return ti(t, r, e, n, i);
            });
            nD.placeholder = {};
            let nM = nD,
              nq = function (e, t, n) {
                var r = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (n = n > i ? i : n) < 0 && (n += i),
                  (i = t > n ? 0 : (n - t) >>> 0),
                  (t >>>= 0);
                for (var o = Array(i); ++r < i; ) o[r] = e[r + t];
                return o;
              },
              nB = function (e, t, n) {
                var r = e.length;
                return (
                  (n = void 0 === n ? r : n), !t && n >= r ? e : nq(e, t, n)
                );
              };
            var nz = RegExp(
              "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
            );
            let nF = function (e) {
              return nz.test(e);
            };
            var nH = "\ud800-\udfff",
              nU = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
              nW = "\ud83c[\udffb-\udfff]",
              nV = "[^" + nH + "]",
              nY = "(?:\ud83c[\udde6-\uddff]){2}",
              nK = "[\ud800-\udbff][\udc00-\udfff]",
              nG = "(?:" + nU + "|" + nW + ")?",
              nZ = "[\\ufe0e\\ufe0f]?",
              nX =
                "(?:\\u200d(?:" + [nV, nY, nK].join("|") + ")" + nZ + nG + ")*",
              nQ = RegExp(
                nW +
                  "(?=" +
                  nW +
                  ")|(?:" +
                  [nV + nU + "?", nU, nY, nK, "[" + nH + "]"].join("|") +
                  ")" +
                  (nZ + nG + nX),
                "g",
              );
            let nJ = function (e) {
                return nF(e) ? e.match(nQ) || [] : e.split("");
              },
              n$ = function (e) {
                return function (t) {
                  var n = nF((t = nc(t))) ? nJ(t) : void 0,
                    r = n ? n[0] : t.charAt(0),
                    i = n ? nB(n, 1).join("") : t.slice(1);
                  return r[e]() + i;
                };
              },
              n0 = n$("toUpperCase"),
              n1 = function (e) {
                return n0(nc(e).toLowerCase());
              },
              n2 = function (e, t, n, r) {
                var i = -1,
                  o = null == e ? 0 : e.length;
                for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
                return n;
              },
              n3 = function (e) {
                return function (t) {
                  return null == e ? void 0 : e[t];
                };
              };
            var n5 = n3({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              n8 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              n4 = RegExp(
                "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                "g",
              );
            let n6 = function (e) {
              return (e = nc(e)) && e.replace(n8, n5).replace(n4, "");
            };
            var n9 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              n7 =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              re = "\ud800-\udfff",
              rt = "\\u2700-\\u27bf",
              rn = "a-z\\xdf-\\xf6\\xf8-\\xff",
              rr = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              ri =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              ro = "['’]",
              ra = "[" + ri + "]",
              rl = "[" + rn + "]",
              ru = "[^" + re + ri + "\\d+" + rt + rn + rr + "]",
              rs = "(?:\ud83c[\udde6-\uddff]){2}",
              rc = "[\ud800-\udbff][\udc00-\udfff]",
              rf = "[" + rr + "]",
              rd = "(?:" + rl + "|" + ru + ")",
              rp = "(?:" + ro + "(?:d|ll|m|re|s|t|ve))?",
              rv = "(?:" + ro + "(?:D|LL|M|RE|S|T|VE))?",
              rh =
                "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
              ry = "[\\ufe0e\\ufe0f]?",
              rm =
                "(?:\\u200d(?:" +
                ["[^" + re + "]", rs, rc].join("|") +
                ")" +
                ry +
                rh +
                ")*",
              rg =
                "(?:" +
                ["[" + rt + "]", rs, rc].join("|") +
                ")" +
                (ry + rh + rm),
              rb = RegExp(
                [
                  rf +
                    "?" +
                    rl +
                    "+" +
                    rp +
                    "(?=" +
                    [ra, rf, "$"].join("|") +
                    ")",
                  "(?:" +
                    rf +
                    "|" +
                    ru +
                    ")+" +
                    rv +
                    "(?=" +
                    [ra, rf + rd, "$"].join("|") +
                    ")",
                  rf + "?" + rd + "+" + rp,
                  rf + "+" + rv,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  "\\d+",
                  rg,
                ].join("|"),
                "g",
              );
            let r_ = function (e, t, n) {
              if (((e = nc(e)), void 0 === (t = n ? void 0 : t))) {
                var r;
                return ((r = e), n7.test(r))
                  ? e.match(rb) || []
                  : e.match(n9) || [];
              }
              return e.match(t) || [];
            };
            var rE = RegExp("['’]", "g");
            let rx = function (e) {
                return function (t) {
                  return n2(r_(n6(t).replace(rE, "")), e, "");
                };
              },
              rw = rx(function (e, t, n) {
                return (t = t.toLowerCase()), e + (n ? n1(t) : t);
              }),
              rk = function () {
                if (!arguments.length) return [];
                var e = arguments[0];
                return S(e) ? e : [e];
              };
            var rO = f.isFinite,
              rS = Math.min;
            let rP = function (e) {
                var t = Math[e];
                return function (e, n) {
                  if (
                    ((e = U(e)), (n = null == n ? 0 : rS(Y(n), 292)) && rO(e))
                  ) {
                    var r = (nc(e) + "e").split("e");
                    return +(
                      (r = (nc(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                        "e",
                      ))[0] +
                      "e" +
                      (+r[1] - n)
                    );
                  }
                  return t(e);
                };
              },
              rR = rP("ceil"),
              rj = function (e) {
                var t = eT(e);
                return (t.__chain__ = !0), t;
              };
            var rA = Math.ceil,
              rC = Math.max;
            let rT = function (e, t, n) {
                t = (n ? ty(e, t, n) : void 0 === t) ? 1 : rC(Y(t), 0);
                var r = null == e ? 0 : e.length;
                if (!r || t < 1) return [];
                for (var i = 0, o = 0, a = Array(rA(r / t)); i < r; )
                  a[o++] = nq(e, i, (i += t));
                return a;
              },
              rI = function (e, t, n) {
                return (
                  e == e &&
                    (void 0 !== n && (e = e <= n ? e : n),
                    void 0 !== t && (e = e >= t ? e : t)),
                  e
                );
              },
              rL = function (e, t, n) {
                return (
                  void 0 === n && ((n = t), (t = void 0)),
                  void 0 !== n && (n = (n = U(n)) == n ? n : 0),
                  void 0 !== t && (t = (t = U(t)) == t ? t : 0),
                  rI(U(e), t, n)
                );
              };
            function rN(e) {
              var t = (this.__data__ = new ne(e));
              this.size = t.size;
            }
            (rN.prototype.clear = function () {
              (this.__data__ = new ne()), (this.size = 0);
            }),
              (rN.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t.delete(e);
                return (this.size = t.size), n;
              }),
              (rN.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (rN.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (rN.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof ne) {
                  var r = n.__data__;
                  if (!nt || r.length < 199)
                    return r.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new ni(r);
                }
                return n.set(e, t), (this.size = n.size), this;
              });
            let rD = function (e, t) {
              return e && tc(t, tV(t), e);
            };
            var rM =
                "object" == typeof exports &&
                exports &&
                !exports.nodeType &&
                exports,
              rq = rM && e && !e.nodeType && e,
              rB = rq && rq.exports === rM ? f.Buffer : void 0,
              rz = rB ? rB.allocUnsafe : void 0;
            let rF = function (e, t) {
                if (t) return e.slice();
                var n = e.length,
                  r = rz ? rz(n) : new e.constructor(n);
                return e.copy(r), r;
              },
              rH = function (e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
                  ++n < r;

                ) {
                  var a = e[n];
                  t(a, n, e) && (o[i++] = a);
                }
                return o;
              },
              rU = function () {
                return [];
              };
            var rW = Object.prototype.propertyIsEnumerable,
              rV = Object.getOwnPropertySymbols,
              rY = rV
                ? function (e) {
                    return null == e
                      ? []
                      : rH(rV((e = Object(e))), function (t) {
                          return rW.call(e, t);
                        });
                  }
                : rU,
              rK = Object.getOwnPropertySymbols
                ? function (e) {
                    for (var t = []; e; ) nm(t, rY(e)), (e = nk(e));
                    return t;
                  }
                : rU;
            let rG = function (e, t, n) {
                var r = t(e);
                return S(e) ? r : nm(r, n(e));
              },
              rZ = function (e) {
                return rG(e, tV, rY);
              },
              rX = function (e) {
                return rG(e, tQ, rK);
              };
            var rQ = ea(f, "DataView"),
              rJ = ea(f, "Promise"),
              r$ = ea(f, "Set"),
              r0 = "[object Map]",
              r1 = "[object Promise]",
              r2 = "[object Set]",
              r3 = "[object WeakMap]",
              r5 = "[object DataView]",
              r8 = $(rQ),
              r4 = $(nt),
              r6 = $(rJ),
              r9 = $(r$),
              r7 = $(el),
              ie = _;
            ((rQ && ie(new rQ(new ArrayBuffer(1))) != r5) ||
              (nt && ie(new nt()) != r0) ||
              (rJ && ie(rJ.resolve()) != r1) ||
              (r$ && ie(new r$()) != r2) ||
              (el && ie(new el()) != r3)) &&
              (ie = function (e) {
                var t = _(e),
                  n = "[object Object]" == t ? e.constructor : void 0,
                  r = n ? $(n) : "";
                if (r)
                  switch (r) {
                    case r8:
                      return r5;
                    case r4:
                      return r0;
                    case r6:
                      return r1;
                    case r9:
                      return r2;
                    case r7:
                      return r3;
                  }
                return t;
              });
            let it = ie;
            var ir = Object.prototype.hasOwnProperty;
            let ii = function (e) {
              var t = e.length,
                n = new e.constructor(t);
              return (
                t &&
                  "string" == typeof e[0] &&
                  ir.call(e, "index") &&
                  ((n.index = e.index), (n.input = e.input)),
                n
              );
            };
            var io = f.Uint8Array;
            let ia = function (e) {
                var t = new e.constructor(e.byteLength);
                return new io(t).set(new io(e)), t;
              },
              il = function (e, t) {
                var n = t ? ia(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength);
              };
            var iu = /\w*$/;
            let is = function (e) {
              var t = new e.constructor(e.source, iu.exec(e));
              return (t.lastIndex = e.lastIndex), t;
            };
            var ic = d ? d.prototype : void 0,
              id = ic ? ic.valueOf : void 0;
            let ip = function (e, t) {
                var n = t ? ia(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length);
              },
              iv = function (e, t, n) {
                var r = e.constructor;
                switch (t) {
                  case "[object ArrayBuffer]":
                    return ia(e);
                  case "[object Boolean]":
                  case "[object Date]":
                    return new r(+e);
                  case "[object DataView]":
                    return il(e, n);
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return ip(e, n);
                  case "[object Map]":
                  case "[object Set]":
                    return new r();
                  case "[object Number]":
                  case "[object String]":
                    return new r(e);
                  case "[object RegExp]":
                    return is(e);
                  case "[object Symbol]":
                    return id ? Object(id.call(e)) : {};
                }
              },
              ih = function (e) {
                return "function" != typeof e.constructor || tb(e)
                  ? {}
                  : ef(nk(e));
              };
            var iy = tD && tD.isMap;
            let im = iy
              ? tT(iy)
              : function (e) {
                  return E(e) && "[object Map]" == it(e);
                };
            var ig = tD && tD.isSet;
            let ib = ig
              ? tT(ig)
              : function (e) {
                  return E(e) && "[object Set]" == it(e);
                };
            var i_ = "[object Arguments]",
              iE = "[object Function]",
              ix = "[object Object]",
              iw = {};
            (iw[i_] =
              iw["[object Array]"] =
              iw["[object ArrayBuffer]"] =
              iw["[object DataView]"] =
              iw["[object Boolean]"] =
              iw["[object Date]"] =
              iw["[object Float32Array]"] =
              iw["[object Float64Array]"] =
              iw["[object Int8Array]"] =
              iw["[object Int16Array]"] =
              iw["[object Int32Array]"] =
              iw["[object Map]"] =
              iw["[object Number]"] =
              iw[ix] =
              iw["[object RegExp]"] =
              iw["[object Set]"] =
              iw["[object String]"] =
              iw["[object Symbol]"] =
              iw["[object Uint8Array]"] =
              iw["[object Uint8ClampedArray]"] =
              iw["[object Uint16Array]"] =
              iw["[object Uint32Array]"] =
                !0),
              (iw["[object Error]"] = iw[iE] = iw["[object WeakMap]"] = !1);
            let ik = function e(t, n, r, i, o, a) {
                var l,
                  u = 1 & n,
                  s = 2 & n,
                  c = 4 & n;
                if ((r && (l = o ? r(t, i, o, a) : r(t)), void 0 !== l))
                  return l;
                if (!M(t)) return t;
                var f = S(t);
                if (f) {
                  if (((l = ii(t)), !u)) return eR(t, l);
                } else {
                  var d,
                    p,
                    v,
                    h = it(t),
                    y = h == iE || "[object GeneratorFunction]" == h;
                  if (tA(t)) return rF(t, u);
                  if (h == ix || h == i_ || (y && !o)) {
                    if (((l = s || y ? {} : ih(t)), !u))
                      return s
                        ? ((p = (d = l) && tc(t, tQ(t), d)), tc(t, rK(t), p))
                        : ((v = rD(l, t)), tc(t, rY(t), v));
                  } else {
                    if (!iw[h]) return o ? t : {};
                    l = iv(t, h, u);
                  }
                }
                a || (a = new rN());
                var m = a.get(t);
                if (m) return m;
                a.set(t, l),
                  ib(t)
                    ? t.forEach(function (i) {
                        l.add(e(i, n, r, i, t, a));
                      })
                    : im(t) &&
                      t.forEach(function (i, o) {
                        l.set(o, e(i, n, r, o, t, a));
                      });
                var g = c ? (s ? rX : rZ) : s ? tQ : tV,
                  b = f ? void 0 : g(t);
                return (
                  eV(b || t, function (i, o) {
                    b && (i = t[(o = i)]), ts(l, o, e(i, n, r, o, t, a));
                  }),
                  l
                );
              },
              iO = function (e) {
                return ik(e, 4);
              },
              iS = function (e) {
                return ik(e, 5);
              },
              iP = function (e, t) {
                return ik(e, 5, (t = "function" == typeof t ? t : void 0));
              },
              iR = function (e, t) {
                return ik(e, 4, (t = "function" == typeof t ? t : void 0));
              },
              ij = function () {
                return new eP(this.value(), this.__chain__);
              },
              iA = function (e) {
                for (
                  var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                  ++t < n;

                ) {
                  var o = e[t];
                  o && (i[r++] = o);
                }
                return i;
              },
              iC = function () {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], r = e; r--; )
                  t[r - 1] = arguments[r];
                return nm(S(n) ? eR(n) : [n], n_(t, 1));
              };
            function iT(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new ni(); ++t < n; ) this.add(e[t]);
            }
            (iT.prototype.add = iT.prototype.push =
              function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              }),
              (iT.prototype.has = function (e) {
                return this.__data__.has(e);
              });
            let iI = function (e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                  if (t(e[n], n, e)) return !0;
                return !1;
              },
              iL = function (e, t) {
                return e.has(t);
              },
              iN = function (e, t, n, r, i, o) {
                var a = 1 & n,
                  l = e.length,
                  u = t.length;
                if (l != u && !(a && u > l)) return !1;
                var s = o.get(e),
                  c = o.get(t);
                if (s && c) return s == t && c == e;
                var f = -1,
                  d = !0,
                  p = 2 & n ? new iT() : void 0;
                for (o.set(e, t), o.set(t, e); ++f < l; ) {
                  var v = e[f],
                    h = t[f];
                  if (r) var y = a ? r(h, v, f, t, e, o) : r(v, h, f, e, t, o);
                  if (void 0 !== y) {
                    if (y) continue;
                    d = !1;
                    break;
                  }
                  if (p) {
                    if (
                      !iI(t, function (e, t) {
                        if (!iL(p, t) && (v === e || i(v, e, n, r, o)))
                          return p.push(t);
                      })
                    ) {
                      d = !1;
                      break;
                    }
                  } else if (!(v === h || i(v, h, n, r, o))) {
                    d = !1;
                    break;
                  }
                }
                return o.delete(e), o.delete(t), d;
              },
              iD = function (e) {
                var t = -1,
                  n = Array(e.size);
                return (
                  e.forEach(function (e, r) {
                    n[++t] = [r, e];
                  }),
                  n
                );
              },
              iM = function (e) {
                var t = -1,
                  n = Array(e.size);
                return (
                  e.forEach(function (e) {
                    n[++t] = e;
                  }),
                  n
                );
              };
            var iq = d ? d.prototype : void 0,
              iB = iq ? iq.valueOf : void 0;
            let iz = function (e, t, n, r, i, o, a) {
              switch (n) {
                case "[object DataView]":
                  if (
                    e.byteLength != t.byteLength ||
                    e.byteOffset != t.byteOffset
                  )
                    break;
                  (e = e.buffer), (t = t.buffer);
                case "[object ArrayBuffer]":
                  if (e.byteLength != t.byteLength || !o(new io(e), new io(t)))
                    break;
                  return !0;
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return tl(+e, +t);
                case "[object Error]":
                  return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                  return e == t + "";
                case "[object Map]":
                  var l = iD;
                case "[object Set]":
                  var u = 1 & r;
                  if ((l || (l = iM), e.size != t.size && !u)) break;
                  var s = a.get(e);
                  if (s) return s == t;
                  (r |= 2), a.set(e, t);
                  var c = iN(l(e), l(t), r, i, o, a);
                  return a.delete(e), c;
                case "[object Symbol]":
                  if (iB) return iB.call(e) == iB.call(t);
              }
              return !1;
            };
            var iF = Object.prototype.hasOwnProperty;
            let iH = function (e, t, n, r, i, o) {
              var a = 1 & n,
                l = rZ(e),
                u = l.length;
              if (u != rZ(t).length && !a) return !1;
              for (var s = u; s--; ) {
                var c = l[s];
                if (!(a ? c in t : iF.call(t, c))) return !1;
              }
              var f = o.get(e),
                d = o.get(t);
              if (f && d) return f == t && d == e;
              var p = !0;
              o.set(e, t), o.set(t, e);
              for (var v = a; ++s < u; ) {
                var h = e[(c = l[s])],
                  y = t[c];
                if (r) var m = a ? r(y, h, c, t, e, o) : r(h, y, c, e, t, o);
                if (!(void 0 === m ? h === y || i(h, y, n, r, o) : m)) {
                  p = !1;
                  break;
                }
                v || (v = "constructor" == c);
              }
              if (p && !v) {
                var g = e.constructor,
                  b = t.constructor;
                g != b &&
                  "constructor" in e &&
                  "constructor" in t &&
                  !(
                    "function" == typeof g &&
                    g instanceof g &&
                    "function" == typeof b &&
                    b instanceof b
                  ) &&
                  (p = !1);
              }
              return o.delete(e), o.delete(t), p;
            };
            var iU = "[object Arguments]",
              iW = "[object Array]",
              iV = "[object Object]",
              iY = Object.prototype.hasOwnProperty;
            let iK = function (e, t, n, r, i, o) {
                var a = S(e),
                  l = S(t),
                  u = a ? iW : it(e),
                  s = l ? iW : it(t);
                (u = u == iU ? iV : u), (s = s == iU ? iV : s);
                var c = u == iV,
                  f = s == iV,
                  d = u == s;
                if (d && tA(e)) {
                  if (!tA(t)) return !1;
                  (a = !0), (c = !1);
                }
                if (d && !c)
                  return (
                    o || (o = new rN()),
                    a || tq(e) ? iN(e, t, n, r, i, o) : iz(e, t, u, n, r, i, o)
                  );
                if (!(1 & n)) {
                  var p = c && iY.call(e, "__wrapped__"),
                    v = f && iY.call(t, "__wrapped__");
                  if (p || v) {
                    var h = p ? e.value() : e,
                      y = v ? t.value() : t;
                    return o || (o = new rN()), i(h, y, n, r, o);
                  }
                }
                return !!d && (o || (o = new rN()), iH(e, t, n, r, i, o));
              },
              iG = function e(t, n, r, i, o) {
                return (
                  t === n ||
                  (null != t && null != n && (E(t) || E(n))
                    ? iK(t, n, r, i, e, o)
                    : t != t && n != n)
                );
              },
              iZ = function (e, t, n, r) {
                var i = n.length,
                  o = i,
                  a = !r;
                if (null == e) return !o;
                for (e = Object(e); i--; ) {
                  var l = n[i];
                  if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
                }
                for (; ++i < o; ) {
                  var u = (l = n[i])[0],
                    s = e[u],
                    c = l[1];
                  if (a && l[2]) {
                    if (void 0 === s && !(u in e)) return !1;
                  } else {
                    var f = new rN();
                    if (r) var d = r(s, c, u, e, t, f);
                    if (!(void 0 === d ? iG(c, s, 3, r, f) : d)) return !1;
                  }
                }
                return !0;
              },
              iX = function (e) {
                return e == e && !M(e);
              },
              iQ = function (e) {
                for (var t = tV(e), n = t.length; n--; ) {
                  var r = t[n],
                    i = e[r];
                  t[n] = [r, i, iX(i)];
                }
                return t;
              },
              iJ = function (e, t) {
                return function (n) {
                  return (
                    null != n && n[e] === t && (void 0 !== t || e in Object(n))
                  );
                };
              },
              i$ = function (e) {
                var t = iQ(e);
                return 1 == t.length && t[0][2]
                  ? iJ(t[0][0], t[0][1])
                  : function (n) {
                      return n === e || iZ(n, e, t);
                    };
              },
              i0 = function (e, t) {
                return null != e && t in Object(e);
              },
              i1 = function (e, t, n) {
                t = nf(t, e);
                for (var r = -1, i = t.length, o = !1; ++r < i; ) {
                  var a = np(t[r]);
                  if (!(o = null != e && n(e, a))) break;
                  e = e[a];
                }
                return o || ++r != i
                  ? o
                  : !!(i = null == e ? 0 : e.length) &&
                      tv(i) &&
                      e2(a, i) &&
                      (S(e) || tO(e));
              },
              i2 = function (e, t) {
                return null != e && i1(e, t, i0);
              },
              i3 = function (e, t) {
                return t3(e) && iX(t)
                  ? iJ(np(e), t)
                  : function (n) {
                      var r = nh(n, e);
                      return void 0 === r && r === t ? i2(n, e) : iG(t, r, 3);
                    };
              },
              i5 = function (e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              },
              i8 = function (e) {
                return t3(e)
                  ? i5(np(e))
                  : function (t) {
                      return nv(t, e);
                    };
              },
              i4 = function (e) {
                return "function" == typeof e
                  ? e
                  : null == e
                    ? G
                    : "object" == typeof e
                      ? S(e)
                        ? i3(e[0], e[1])
                        : i$(e)
                      : i8(e);
              },
              i6 = function (e) {
                var t = null == e ? 0 : e.length;
                return (
                  (e = t
                    ? O(e, function (e) {
                        if ("function" != typeof e[1])
                          throw TypeError("Expected a function");
                        return [i4(e[0]), e[1]];
                      })
                    : []),
                  tp(function (n) {
                    for (var r = -1; ++r < t; ) {
                      var i = e[r];
                      if (ev(i[0], this, n)) return ev(i[1], this, n);
                    }
                  })
                );
              },
              i9 = function (e, t, n) {
                var r = n.length;
                if (null == e) return !r;
                for (e = Object(e); r--; ) {
                  var i = n[r],
                    o = t[i],
                    a = e[i];
                  if ((void 0 === a && !(i in e)) || !o(a)) return !1;
                }
                return !0;
              },
              i7 = function (e) {
                var t = tV(e);
                return function (n) {
                  return i9(n, e, t);
                };
              },
              oe = function (e) {
                return i7(ik(e, 1));
              },
              ot = function (e, t) {
                return null == t || i9(e, t, tV(t));
              },
              on = function (e, t, n, r) {
                for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                  var a = e[i];
                  t(r, a, n(a), e);
                }
                return r;
              },
              or = function (e) {
                return function (t, n, r) {
                  for (
                    var i = -1, o = Object(t), a = r(t), l = a.length;
                    l--;

                  ) {
                    var u = a[e ? l : ++i];
                    if (!1 === n(o[u], u, o)) break;
                  }
                  return t;
                };
              };
            var oi = or();
            let oo = function (e, t) {
                return e && oi(e, t, tV);
              },
              oa = function (e, t) {
                return function (n, r) {
                  if (null == n) return n;
                  if (!th(n)) return e(n, r);
                  for (
                    var i = n.length, o = t ? i : -1, a = Object(n);
                    (t ? o-- : ++o < i) && !1 !== r(a[o], o, a);

                  );
                  return n;
                };
              };
            var ol = oa(oo);
            let ou = function (e, t, n, r) {
                return (
                  ol(e, function (e, i, o) {
                    t(r, e, n(e), o);
                  }),
                  r
                );
              },
              os = function (e, t) {
                return function (n, r) {
                  var i = S(n) ? on : ou,
                    o = t ? t() : {};
                  return i(n, e, i4(r, 2), o);
                };
              };
            var oc = Object.prototype.hasOwnProperty;
            let of = os(function (e, t, n) {
                oc.call(e, n) ? ++e[n] : ta(e, n, 1);
              }),
              od = function (e, t) {
                var n = ef(e);
                return null == t ? n : rD(n, t);
              };
            function op(e, t, n) {
              var r = ti(
                e,
                8,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (t = n ? void 0 : t),
              );
              return (r.placeholder = op.placeholder), r;
            }
            op.placeholder = {};
            let ov = op;
            function oh(e, t, n) {
              var r = ti(
                e,
                16,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (t = n ? void 0 : t),
              );
              return (r.placeholder = oh.placeholder), r;
            }
            oh.placeholder = {};
            let oy = oh,
              om = function () {
                return f.Date.now();
              };
            var og = Math.max,
              ob = Math.min;
            let o_ = function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  l,
                  u,
                  s = 0,
                  c = !1,
                  f = !1,
                  d = !0;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                function p(t) {
                  var n = r,
                    o = i;
                  return (r = i = void 0), (s = t), (a = e.apply(o, n));
                }
                function v(e) {
                  var n = e - u,
                    r = e - s;
                  return void 0 === u || n >= t || n < 0 || (f && r >= o);
                }
                function h() {
                  var e,
                    n,
                    r,
                    i = om();
                  if (v(i)) return y(i);
                  l = setTimeout(
                    h,
                    ((e = i - u),
                    (n = i - s),
                    (r = t - e),
                    f ? ob(r, o - n) : r),
                  );
                }
                function y(e) {
                  return ((l = void 0), d && r) ? p(e) : ((r = i = void 0), a);
                }
                function m() {
                  var e,
                    n = om(),
                    o = v(n);
                  if (((r = arguments), (i = this), (u = n), o)) {
                    if (void 0 === l)
                      return (s = e = u), (l = setTimeout(h, t)), c ? p(e) : a;
                    if (f) return clearTimeout(l), (l = setTimeout(h, t)), p(u);
                  }
                  return void 0 === l && (l = setTimeout(h, t)), a;
                }
                return (
                  (t = U(t) || 0),
                  M(n) &&
                    ((c = !!n.leading),
                    (o = (f = "maxWait" in n) ? og(U(n.maxWait) || 0, t) : o),
                    (d = "trailing" in n ? !!n.trailing : d)),
                  (m.cancel = function () {
                    void 0 !== l && clearTimeout(l),
                      (s = 0),
                      (r = u = i = l = void 0);
                  }),
                  (m.flush = function () {
                    return void 0 === l ? a : y(om());
                  }),
                  m
                );
              },
              oE = function (e, t) {
                return null == e || e != e ? t : e;
              };
            var ox = Object.prototype,
              ow = ox.hasOwnProperty;
            let ok = tp(function (e, t) {
                e = Object(e);
                var n = -1,
                  r = t.length,
                  i = r > 2 ? t[2] : void 0;
                for (i && ty(t[0], t[1], i) && (r = 1); ++n < r; )
                  for (
                    var o = t[n], a = tQ(o), l = -1, u = a.length;
                    ++l < u;

                  ) {
                    var s = a[l],
                      c = e[s];
                    (void 0 === c || (tl(c, ox[s]) && !ow.call(e, s))) &&
                      (e[s] = o[s]);
                  }
                return e;
              }),
              oO = function (e, t, n) {
                ((void 0 === n || tl(e[t], n)) && (void 0 !== n || t in e)) ||
                  ta(e, t, n);
              },
              oS = function (e) {
                return E(e) && th(e);
              },
              oP = function (e, t) {
                if (
                  ("constructor" !== t || "function" != typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              },
              oR = function (e) {
                return tc(e, tQ(e));
              },
              oj = function (e, t, n, r, i, o, a) {
                var l = oP(e, n),
                  u = oP(t, n),
                  s = a.get(u);
                if (s) {
                  oO(e, n, s);
                  return;
                }
                var c = o ? o(l, u, n + "", e, t, a) : void 0,
                  f = void 0 === c;
                if (f) {
                  var d = S(u),
                    p = !d && tA(u),
                    v = !d && !p && tq(u);
                  (c = u),
                    d || p || v
                      ? S(l)
                        ? (c = l)
                        : oS(l)
                          ? (c = eR(l))
                          : p
                            ? ((f = !1), (c = rF(u, !0)))
                            : v
                              ? ((f = !1), (c = ip(u, !0)))
                              : (c = [])
                      : nj(u) || tO(u)
                        ? ((c = l),
                          tO(l) ? (c = oR(l)) : (!M(l) || Z(l)) && (c = ih(u)))
                        : (f = !1);
                }
                f && (a.set(u, c), i(c, u, r, o, a), a.delete(u)), oO(e, n, c);
              },
              oA = function e(t, n, r, i, o) {
                t !== n &&
                  oi(
                    n,
                    function (a, l) {
                      if ((o || (o = new rN()), M(a))) oj(t, n, l, r, e, i, o);
                      else {
                        var u = i ? i(oP(t, l), a, l + "", t, n, o) : void 0;
                        void 0 === u && (u = a), oO(t, l, u);
                      }
                    },
                    tQ,
                  );
              },
              oC = function e(t, n, r, i, o, a) {
                return (
                  M(t) &&
                    M(n) &&
                    (a.set(n, t), oA(t, n, void 0, e, a), a.delete(n)),
                  t
                );
              },
              oT = tm(function (e, t, n, r) {
                oA(e, t, n, r);
              }),
              oI = tp(function (e) {
                return e.push(void 0, oC), ev(oT, void 0, e);
              }),
              oL = function (e, t, n) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return setTimeout(function () {
                  e.apply(void 0, n);
                }, t);
              },
              oN = tp(function (e, t) {
                return oL(e, 1, t);
              }),
              oD = tp(function (e, t, n) {
                return oL(e, U(t) || 0, n);
              }),
              oM = function (e, t, n) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                  if (n(t, e[r])) return !0;
                return !1;
              },
              oq = function (e, t, n, r) {
                var i = -1,
                  o = eX,
                  a = !0,
                  l = e.length,
                  u = [],
                  s = t.length;
                if (!l) return u;
                n && (t = O(t, tT(n))),
                  r
                    ? ((o = oM), (a = !1))
                    : t.length >= 200 && ((o = iL), (a = !1), (t = new iT(t)));
                e: for (; ++i < l; ) {
                  var c = e[i],
                    f = null == n ? c : n(c);
                  if (((c = r || 0 !== c ? c : 0), a && f == f)) {
                    for (var d = s; d--; ) if (t[d] === f) continue e;
                    u.push(c);
                  } else o(t, f, r) || u.push(c);
                }
                return u;
              },
              oB = tp(function (e, t) {
                return oS(e) ? oq(e, n_(t, 1, oS, !0)) : [];
              }),
              oz = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0;
              },
              oF = tp(function (e, t) {
                var n = oz(t);
                return (
                  oS(n) && (n = void 0),
                  oS(e) ? oq(e, n_(t, 1, oS, !0), i4(n, 2)) : []
                );
              }),
              oH = tp(function (e, t) {
                var n = oz(t);
                return (
                  oS(n) && (n = void 0),
                  oS(e) ? oq(e, n_(t, 1, oS, !0), void 0, n) : []
                );
              }),
              oU = C(function (e, t) {
                return e / t;
              }, 1),
              oW = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? nq(e, (t = n || void 0 === t ? 1 : Y(t)) < 0 ? 0 : t, r)
                  : [];
              },
              oV = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? nq(
                      e,
                      0,
                      (t = r - (t = n || void 0 === t ? 1 : Y(t))) < 0 ? 0 : t,
                    )
                  : [];
              },
              oY = function (e, t, n, r) {
                for (
                  var i = e.length, o = r ? i : -1;
                  (r ? o-- : ++o < i) && t(e[o], o, e);

                );
                return n
                  ? nq(e, r ? 0 : o, r ? o + 1 : i)
                  : nq(e, r ? o + 1 : 0, r ? i : o);
              },
              oK = function (e, t) {
                return e && e.length ? oY(e, i4(t, 3), !0, !0) : [];
              },
              oG = function (e, t) {
                return e && e.length ? oY(e, i4(t, 3), !0) : [];
              },
              oZ = function (e) {
                return "function" == typeof e ? e : G;
              },
              oX = function (e, t) {
                return (S(e) ? eV : ol)(e, oZ(t));
              },
              oQ = function (e, t) {
                for (
                  var n = null == e ? 0 : e.length;
                  n-- && !1 !== t(e[n], n, e);

                );
                return e;
              };
            var oJ = or(!0);
            let o$ = function (e, t) {
              return e && oJ(e, t, tV);
            };
            var o0 = oa(o$, !0);
            let o1 = function (e, t) {
                return (S(e) ? oQ : o0)(e, oZ(t));
              },
              o2 = function (e, t, n) {
                (e = nc(e)), (t = A(t));
                var r = e.length,
                  i = (n = void 0 === n ? r : rI(Y(n), 0, r));
                return (n -= t.length) >= 0 && e.slice(n, i) == t;
              },
              o3 = function (e) {
                var t = -1,
                  n = Array(e.size);
                return (
                  e.forEach(function (e) {
                    n[++t] = [e, e];
                  }),
                  n
                );
              },
              o5 = function (e) {
                return function (t) {
                  var n = it(t);
                  return "[object Map]" == n
                    ? iD(t)
                    : "[object Set]" == n
                      ? o3(t)
                      : O(e(t), function (e) {
                          return [e, t[e]];
                        });
                };
              },
              o8 = o5(tV),
              o4 = o5(tQ);
            var o6 = n3({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              }),
              o9 = /[&<>"']/g,
              o7 = RegExp(o9.source);
            let ae = function (e) {
              return (e = nc(e)) && o7.test(e) ? e.replace(o9, o6) : e;
            };
            var at = /[\\^$.*+?()[\]{}|]/g,
              an = RegExp(at.source);
            let ar = function (e) {
                return (e = nc(e)) && an.test(e) ? e.replace(at, "\\$&") : e;
              },
              ai = function (e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                  if (!t(e[n], n, e)) return !1;
                return !0;
              },
              ao = function (e, t) {
                var n = !0;
                return (
                  ol(e, function (e, r, i) {
                    return (n = !!t(e, r, i));
                  }),
                  n
                );
              },
              aa = function (e, t, n) {
                var r = S(e) ? ai : ao;
                return n && ty(e, t, n) && (t = void 0), r(e, i4(t, 3));
              },
              al = function (e) {
                return e ? rI(Y(e), 0, 4294967295) : 0;
              },
              au = function (e, t, n, r) {
                var i = e.length;
                for (
                  (n = Y(n)) < 0 && (n = -n > i ? 0 : i + n),
                    (r = void 0 === r || r > i ? i : Y(r)) < 0 && (r += i),
                    r = n > r ? 0 : al(r);
                  n < r;

                )
                  e[n++] = t;
                return e;
              },
              as = function (e, t, n, r) {
                var i = null == e ? 0 : e.length;
                return i
                  ? (n &&
                      "number" != typeof n &&
                      ty(e, t, n) &&
                      ((n = 0), (r = i)),
                    au(e, t, n, r))
                  : [];
              },
              ac = function (e, t) {
                var n = [];
                return (
                  ol(e, function (e, r, i) {
                    t(e, r, i) && n.push(e);
                  }),
                  n
                );
              },
              af = function (e, t) {
                return (S(e) ? rH : ac)(e, i4(t, 3));
              },
              ad = function (e) {
                return function (t, n, r) {
                  var i = Object(t);
                  if (!th(t)) {
                    var o = i4(n, 3);
                    (t = tV(t)),
                      (n = function (e) {
                        return o(i[e], e, i);
                      });
                  }
                  var a = e(t, n, r);
                  return a > -1 ? i[o ? t[a] : a] : void 0;
                };
              };
            var ap = Math.max;
            let av = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = null == n ? 0 : Y(n);
                return i < 0 && (i = ap(r + i, 0)), eY(e, i4(t, 3), i);
              },
              ah = ad(av),
              ay = function (e, t, n) {
                var r;
                return (
                  n(e, function (e, n, i) {
                    if (t(e, n, i)) return (r = n), !1;
                  }),
                  r
                );
              },
              am = function (e, t) {
                return ay(e, i4(t, 3), oo);
              };
            var ag = Math.max,
              ab = Math.min;
            let a_ = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = r - 1;
                return (
                  void 0 !== n &&
                    ((i = Y(n)), (i = n < 0 ? ag(r + i, 0) : ab(i, r - 1))),
                  eY(e, i4(t, 3), i, !0)
                );
              },
              aE = ad(a_),
              ax = function (e, t) {
                return ay(e, i4(t, 3), o$);
              },
              aw = function (e) {
                return e && e.length ? e[0] : void 0;
              },
              ak = function (e, t) {
                var n = -1,
                  r = th(e) ? Array(e.length) : [];
                return (
                  ol(e, function (e, i, o) {
                    r[++n] = t(e, i, o);
                  }),
                  r
                );
              },
              aO = function (e, t) {
                return (S(e) ? O : ak)(e, i4(t, 3));
              },
              aS = function (e, t) {
                return n_(aO(e, t), 1);
              };
            var aP = 1 / 0;
            let aR = function (e, t) {
                return n_(aO(e, t), aP);
              },
              aj = function (e, t, n) {
                return (n = void 0 === n ? 1 : Y(n)), n_(aO(e, t), n);
              };
            var aA = 1 / 0;
            let aC = function (e) {
                return (null == e ? 0 : e.length) ? n_(e, aA) : [];
              },
              aT = function (e, t) {
                return (null == e ? 0 : e.length)
                  ? n_(e, (t = void 0 === t ? 1 : Y(t)))
                  : [];
              },
              aI = function (e) {
                return ti(e, 512);
              },
              aL = rP("floor"),
              aN = function (e) {
                return nx(function (t) {
                  var n = t.length,
                    r = n,
                    i = eP.prototype.thru;
                  for (e && t.reverse(); r--; ) {
                    var o = t[r];
                    if ("function" != typeof o)
                      throw TypeError("Expected a function");
                    if (i && !a && "wrapper" == eS(o)) var a = new eP([], !0);
                  }
                  for (r = a ? r : n; ++r < n; ) {
                    var l = eS((o = t[r])),
                      u = "wrapper" == l ? ew(o) : void 0;
                    a =
                      u && eI(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9]
                        ? a[eS(u[0])].apply(a, u[3])
                        : 1 == o.length && eI(o)
                          ? a[l]()
                          : a.thru(o);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (a && 1 == e.length && S(r)) return a.plant(r).value();
                    for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; )
                      o = t[i].call(this, o);
                    return o;
                  };
                });
              },
              aD = aN(),
              aM = aN(!0),
              aq = function (e, t) {
                return null == e ? e : oi(e, oZ(t), tQ);
              },
              aB = function (e, t) {
                return null == e ? e : oJ(e, oZ(t), tQ);
              },
              az = function (e, t) {
                return e && oo(e, oZ(t));
              },
              aF = function (e, t) {
                return e && o$(e, oZ(t));
              },
              aH = function (e) {
                for (
                  var t = -1, n = null == e ? 0 : e.length, r = {};
                  ++t < n;

                ) {
                  var i = e[t];
                  r[i[0]] = i[1];
                }
                return r;
              },
              aU = function (e, t) {
                return rH(t, function (t) {
                  return Z(e[t]);
                });
              },
              aW = function (e) {
                return null == e ? [] : aU(e, tV(e));
              },
              aV = function (e) {
                return null == e ? [] : aU(e, tQ(e));
              };
            var aY = Object.prototype.hasOwnProperty;
            let aK = os(function (e, t, n) {
                aY.call(e, n) ? e[n].push(t) : ta(e, n, [t]);
              }),
              aG = function (e, t) {
                return e > t;
              },
              aZ = function (e) {
                return function (t, n) {
                  return (
                    ("string" == typeof t && "string" == typeof n) ||
                      ((t = U(t)), (n = U(n))),
                    e(t, n)
                  );
                };
              },
              aX = aZ(aG),
              aQ = aZ(function (e, t) {
                return e >= t;
              });
            var aJ = Object.prototype.hasOwnProperty;
            let a$ = function (e, t) {
                return null != e && aJ.call(e, t);
              },
              a0 = function (e, t) {
                return null != e && i1(e, t, a$);
              };
            var a1 = Math.max,
              a2 = Math.min;
            let a3 = function (e, t, n) {
                var r, i, o;
                return (
                  (t = V(t)),
                  void 0 === n ? ((n = t), (t = 0)) : (n = V(n)),
                  (r = e = U(e)) >= a2((i = t), (o = n)) && r < a1(i, o)
                );
              },
              a5 = function (e) {
                return (
                  "string" == typeof e ||
                  (!S(e) && E(e) && "[object String]" == _(e))
                );
              },
              a8 = function (e, t) {
                return O(t, function (t) {
                  return e[t];
                });
              },
              a4 = function (e) {
                return null == e ? [] : a8(e, tV(e));
              };
            var a6 = Math.max;
            let a9 = function (e, t, n, r) {
              (e = th(e) ? e : a4(e)), (n = n && !r ? Y(n) : 0);
              var i = e.length;
              return (
                n < 0 && (n = a6(i + n, 0)),
                a5(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && eZ(e, t, n) > -1
              );
            };
            var a7 = Math.max;
            let le = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = null == n ? 0 : Y(n);
                return i < 0 && (i = a7(r + i, 0)), eZ(e, t, i);
              },
              lt = function (e) {
                return (null == e ? 0 : e.length) ? nq(e, 0, -1) : [];
              };
            var ln = Math.min;
            let lr = function (e, t, n) {
                for (
                  var r = n ? oM : eX,
                    i = e[0].length,
                    o = e.length,
                    a = o,
                    l = Array(o),
                    u = 1 / 0,
                    s = [];
                  a--;

                ) {
                  var c = e[a];
                  a && t && (c = O(c, tT(t))),
                    (u = ln(c.length, u)),
                    (l[a] =
                      !n && (t || (i >= 120 && c.length >= 120))
                        ? new iT(a && c)
                        : void 0);
                }
                c = e[0];
                var f = -1,
                  d = l[0];
                e: for (; ++f < i && s.length < u; ) {
                  var p = c[f],
                    v = t ? t(p) : p;
                  if (
                    ((p = n || 0 !== p ? p : 0), !(d ? iL(d, v) : r(s, v, n)))
                  ) {
                    for (a = o; --a; ) {
                      var h = l[a];
                      if (!(h ? iL(h, v) : r(e[a], v, n))) continue e;
                    }
                    d && d.push(v), s.push(p);
                  }
                }
                return s;
              },
              li = function (e) {
                return oS(e) ? e : [];
              },
              lo = tp(function (e) {
                var t = O(e, li);
                return t.length && t[0] === e[0] ? lr(t) : [];
              }),
              la = tp(function (e) {
                var t = oz(e),
                  n = O(e, li);
                return (
                  t === oz(n) ? (t = void 0) : n.pop(),
                  n.length && n[0] === e[0] ? lr(n, i4(t, 2)) : []
                );
              }),
              ll = tp(function (e) {
                var t = oz(e),
                  n = O(e, li);
                return (
                  (t = "function" == typeof t ? t : void 0) && n.pop(),
                  n.length && n[0] === e[0] ? lr(n, void 0, t) : []
                );
              }),
              lu = function (e, t) {
                return function (n, r) {
                  var i, o;
                  return (
                    (i = t(r)),
                    (o = {}),
                    oo(n, function (t, n, r) {
                      e(o, i(t), n, r);
                    }),
                    o
                  );
                };
              };
            var ls = Object.prototype.toString;
            let lc = lu(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = ls.call(t)),
                (e[t] = n);
            }, eH(G));
            var lf = Object.prototype,
              ld = lf.hasOwnProperty,
              lp = lf.toString;
            let lv = lu(function (e, t, n) {
                null != t &&
                  "function" != typeof t.toString &&
                  (t = lp.call(t)),
                  ld.call(e, t) ? e[t].push(n) : (e[t] = [n]);
              }, i4),
              lh = function (e, t) {
                return t.length < 2 ? e : nv(e, nq(t, 0, -1));
              },
              ly = function (e, t, n) {
                t = nf(t, e);
                var r = null == (e = lh(e, t)) ? e : e[np(oz(t))];
                return null == r ? void 0 : ev(r, e, n);
              },
              lm = tp(ly),
              lg = tp(function (e, t, n) {
                var r = -1,
                  i = "function" == typeof t,
                  o = th(e) ? Array(e.length) : [];
                return (
                  ol(e, function (e) {
                    o[++r] = i ? ev(t, e, n) : ly(e, t, n);
                  }),
                  o
                );
              });
            var lb = tD && tD.isArrayBuffer;
            let l_ = lb
                ? tT(lb)
                : function (e) {
                    return E(e) && "[object ArrayBuffer]" == _(e);
                  },
              lE = function (e) {
                return (
                  !0 === e || !1 === e || (E(e) && "[object Boolean]" == _(e))
                );
              };
            var lx = tD && tD.isDate;
            let lw = lx
                ? tT(lx)
                : function (e) {
                    return E(e) && "[object Date]" == _(e);
                  },
              lk = function (e) {
                return E(e) && 1 === e.nodeType && !nj(e);
              };
            var lO = Object.prototype.hasOwnProperty;
            let lS = function (e) {
                if (null == e) return !0;
                if (
                  th(e) &&
                  (S(e) ||
                    "string" == typeof e ||
                    "function" == typeof e.splice ||
                    tA(e) ||
                    tq(e) ||
                    tO(e))
                )
                  return !e.length;
                var t = it(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (tb(e)) return !tW(e).length;
                for (var n in e) if (lO.call(e, n)) return !1;
                return !0;
              },
              lP = function (e, t) {
                return iG(e, t);
              },
              lR = function (e, t, n) {
                var r = (n = "function" == typeof n ? n : void 0)
                  ? n(e, t)
                  : void 0;
                return void 0 === r ? iG(e, t, void 0, n) : !!r;
              };
            var lj = f.isFinite;
            let lA = function (e) {
                return "number" == typeof e && lj(e);
              },
              lC = function (e) {
                return "number" == typeof e && e == Y(e);
              },
              lT = function (e, t) {
                return e === t || iZ(e, t, iQ(t));
              },
              lI = function (e, t, n) {
                return (
                  (n = "function" == typeof n ? n : void 0), iZ(e, t, iQ(t), n)
                );
              },
              lL = function (e) {
                return (
                  "number" == typeof e || (E(e) && "[object Number]" == _(e))
                );
              },
              lN = function (e) {
                return lL(e) && e != +e;
              };
            var lD = X ? Z : tS;
            let lM = function (e) {
                if (lD(e))
                  throw Error(
                    "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                  );
                return eo(e);
              },
              lq = function (e) {
                return null == e;
              },
              lB = function (e) {
                return null === e;
              };
            var lz = tD && tD.isRegExp;
            let lF = lz
                ? tT(lz)
                : function (e) {
                    return E(e) && "[object RegExp]" == _(e);
                  },
              lH = function (e) {
                return lC(e) && e >= -9007199254740991 && e <= 9007199254740991;
              },
              lU = function (e) {
                return void 0 === e;
              },
              lW = function (e) {
                return E(e) && "[object WeakMap]" == it(e);
              },
              lV = function (e) {
                return E(e) && "[object WeakSet]" == _(e);
              },
              lY = function (e) {
                return i4("function" == typeof e ? e : ik(e, 1));
              };
            var lK = Array.prototype.join;
            let lG = function (e, t) {
                return null == e ? "" : lK.call(e, t);
              },
              lZ = rx(function (e, t, n) {
                return e + (n ? "-" : "") + t.toLowerCase();
              }),
              lX = os(function (e, t, n) {
                ta(e, n, t);
              }),
              lQ = function (e, t, n) {
                for (var r = n + 1; r-- && e[r] !== t; );
                return r;
              };
            var lJ = Math.max,
              l$ = Math.min;
            let l0 = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = r;
                return (
                  void 0 !== n &&
                    (i = (i = Y(n)) < 0 ? lJ(r + i, 0) : l$(i, r - 1)),
                  t == t ? lQ(e, t, i) : eY(e, eK, i, !0)
                );
              },
              l1 = rx(function (e, t, n) {
                return e + (n ? " " : "") + t.toLowerCase();
              }),
              l2 = n$("toLowerCase"),
              l3 = function (e, t) {
                return e < t;
              },
              l5 = aZ(l3),
              l8 = aZ(function (e, t) {
                return e <= t;
              }),
              l4 = function (e, t) {
                var n = {};
                return (
                  (t = i4(t, 3)),
                  oo(e, function (e, r, i) {
                    ta(n, t(e, r, i), e);
                  }),
                  n
                );
              },
              l6 = function (e, t) {
                var n = {};
                return (
                  (t = i4(t, 3)),
                  oo(e, function (e, r, i) {
                    ta(n, r, t(e, r, i));
                  }),
                  n
                );
              },
              l9 = function (e) {
                return i$(ik(e, 1));
              },
              l7 = function (e, t) {
                return i3(e, ik(t, 1));
              },
              ue = function (e, t, n) {
                for (var r = -1, i = e.length; ++r < i; ) {
                  var o = e[r],
                    a = t(o);
                  if (null != a && (void 0 === l ? a == a && !x(a) : n(a, l)))
                    var l = a,
                      u = o;
                }
                return u;
              },
              ut = function (e) {
                return e && e.length ? ue(e, G, aG) : void 0;
              },
              un = function (e, t) {
                return e && e.length ? ue(e, i4(t, 2), aG) : void 0;
              },
              ur = function (e, t) {
                for (var n, r = -1, i = e.length; ++r < i; ) {
                  var o = t(e[r]);
                  void 0 !== o && (n = void 0 === n ? o : n + o);
                }
                return n;
              };
            var ui = 0 / 0;
            let uo = function (e, t) {
                var n = null == e ? 0 : e.length;
                return n ? ur(e, t) / n : ui;
              },
              ua = function (e) {
                return uo(e, G);
              },
              ul = function (e, t) {
                return uo(e, i4(t, 2));
              },
              uu = tm(function (e, t, n) {
                oA(e, t, n);
              }),
              us = tp(function (e, t) {
                return function (n) {
                  return ly(n, e, t);
                };
              }),
              uc = tp(function (e, t) {
                return function (n) {
                  return ly(e, n, t);
                };
              }),
              uf = function (e) {
                return e && e.length ? ue(e, G, l3) : void 0;
              },
              ud = function (e, t) {
                return e && e.length ? ue(e, i4(t, 2), l3) : void 0;
              },
              up = function (e, t, n) {
                var r = tV(t),
                  i = aU(t, r),
                  o = !(M(n) && "chain" in n) || !!n.chain,
                  a = Z(e);
                return (
                  eV(i, function (n) {
                    var r = t[n];
                    (e[n] = r),
                      a &&
                        (e.prototype[n] = function () {
                          var t = this.__chain__;
                          if (o || t) {
                            var n = e(this.__wrapped__);
                            return (
                              (n.__actions__ = eR(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (n.__chain__ = t),
                              n
                            );
                          }
                          return r.apply(e, nm([this.value()], arguments));
                        });
                  }),
                  e
                );
              },
              uv = C(function (e, t) {
                return e * t;
              }, 1),
              uh = function (e) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              },
              uy = function (e) {
                for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                return n;
              };
            var um = d ? d.iterator : void 0;
            let ug = function (e) {
                if (!e) return [];
                if (th(e)) return a5(e) ? nJ(e) : eR(e);
                if (um && e[um]) return uy(e[um]());
                var t = it(e);
                return (
                  "[object Map]" == t ? iD : "[object Set]" == t ? iM : a4
                )(e);
              },
              ub = function () {
                void 0 === this.__values__ &&
                  (this.__values__ = ug(this.value()));
                var e = this.__index__ >= this.__values__.length,
                  t = e ? void 0 : this.__values__[this.__index__++];
                return { done: e, value: t };
              },
              u_ = function (e, t) {
                var n = e.length;
                if (n) return e2((t += t < 0 ? n : 0), n) ? e[t] : void 0;
              },
              uE = function (e, t) {
                return e && e.length ? u_(e, Y(t)) : void 0;
              },
              ux = function (e) {
                return (
                  (e = Y(e)),
                  tp(function (t) {
                    return u_(t, e);
                  })
                );
              },
              uw = function (e, t) {
                return (
                  (t = nf(t, e)), null == (e = lh(e, t)) || delete e[np(oz(t))]
                );
              },
              uk = function (e) {
                return nj(e) ? void 0 : e;
              },
              uO = nx(function (e, t) {
                var n = {};
                if (null == e) return n;
                var r = !1;
                (t = O(t, function (t) {
                  return (t = nf(t, e)), r || (r = t.length > 1), t;
                })),
                  tc(e, rX(e), n),
                  r && (n = ik(n, 7, uk));
                for (var i = t.length; i--; ) uw(n, t[i]);
                return n;
              }),
              uS = function (e, t, n, r) {
                if (!M(e)) return e;
                t = nf(t, e);
                for (
                  var i = -1, o = t.length, a = o - 1, l = e;
                  null != l && ++i < o;

                ) {
                  var u = np(t[i]),
                    s = n;
                  if (
                    "__proto__" === u ||
                    "constructor" === u ||
                    "prototype" === u
                  )
                    break;
                  if (i != a) {
                    var c = l[u];
                    void 0 === (s = r ? r(c, u, l) : void 0) &&
                      (s = M(c) ? c : e2(t[i + 1]) ? [] : {});
                  }
                  ts(l, u, s), (l = l[u]);
                }
                return e;
              },
              uP = function (e, t, n) {
                for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                  var a = t[r],
                    l = nv(e, a);
                  n(l, a) && uS(o, nf(a, e), l);
                }
                return o;
              },
              uR = function (e, t) {
                if (null == e) return {};
                var n = O(rX(e), function (e) {
                  return [e];
                });
                return (
                  (t = i4(t)),
                  uP(e, n, function (e, n) {
                    return t(e, n[0]);
                  })
                );
              },
              uj = function (e, t) {
                return uR(e, uh(i4(t)));
              },
              uA = function (e) {
                return nT(2, e);
              },
              uC = function (e, t) {
                var n = e.length;
                for (e.sort(t); n--; ) e[n] = e[n].value;
                return e;
              },
              uT = function (e, t) {
                if (e !== t) {
                  var n = void 0 !== e,
                    r = null === e,
                    i = e == e,
                    o = x(e),
                    a = void 0 !== t,
                    l = null === t,
                    u = t == t,
                    s = x(t);
                  if (
                    (!l && !s && !o && e > t) ||
                    (o && a && u && !l && !s) ||
                    (r && a && u) ||
                    (!n && u) ||
                    !i
                  )
                    return 1;
                  if (
                    (!r && !o && !s && e < t) ||
                    (s && n && i && !r && !o) ||
                    (l && n && i) ||
                    (!a && i) ||
                    !u
                  )
                    return -1;
                }
                return 0;
              },
              uI = function (e, t, n) {
                for (
                  var r = -1,
                    i = e.criteria,
                    o = t.criteria,
                    a = i.length,
                    l = n.length;
                  ++r < a;

                ) {
                  var u = uT(i[r], o[r]);
                  if (u) {
                    if (r >= l) return u;
                    return u * ("desc" == n[r] ? -1 : 1);
                  }
                }
                return e.index - t.index;
              },
              uL = function (e, t, n) {
                t = t.length
                  ? O(t, function (e) {
                      return S(e)
                        ? function (t) {
                            return nv(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [G];
                var r = -1;
                return (
                  (t = O(t, tT(i4))),
                  uC(
                    ak(e, function (e, n, i) {
                      return {
                        criteria: O(t, function (t) {
                          return t(e);
                        }),
                        index: ++r,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return uI(e, t, n);
                    },
                  )
                );
              },
              uN = function (e, t, n, r) {
                return null == e
                  ? []
                  : (S(t) || (t = null == t ? [] : [t]),
                    S((n = r ? void 0 : n)) || (n = null == n ? [] : [n]),
                    uL(e, t, n));
              },
              uD = function (e) {
                return nx(function (t) {
                  return (
                    (t = O(t, tT(i4))),
                    tp(function (n) {
                      var r = this;
                      return e(t, function (e) {
                        return ev(e, r, n);
                      });
                    })
                  );
                });
              },
              uM = uD(O);
            var uq = Math.min;
            let uB = tp(function (e, t) {
                var n = (t =
                  1 == t.length && S(t[0])
                    ? O(t[0], tT(i4))
                    : O(n_(t, 1), tT(i4))).length;
                return tp(function (r) {
                  for (var i = -1, o = uq(r.length, n); ++i < o; )
                    r[i] = t[i].call(this, r[i]);
                  return ev(e, this, r);
                });
              }),
              uz = uD(ai),
              uF = uD(iI);
            var uH = Math.floor;
            let uU = function (e, t) {
              var n = "";
              if (!e || t < 1 || t > 9007199254740991) return n;
              do t % 2 && (n += e), (t = uH(t / 2)) && (e += e);
              while (t);
              return n;
            };
            var uW = i5("length"),
              uV = "\ud800-\udfff",
              uY = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
              uK = "\ud83c[\udffb-\udfff]",
              uG = "[^" + uV + "]",
              uZ = "(?:\ud83c[\udde6-\uddff]){2}",
              uX = "[\ud800-\udbff][\udc00-\udfff]",
              uQ = "(?:" + uY + "|" + uK + ")?",
              uJ = "[\\ufe0e\\ufe0f]?",
              u$ =
                "(?:\\u200d(?:" + [uG, uZ, uX].join("|") + ")" + uJ + uQ + ")*",
              u0 = RegExp(
                uK +
                  "(?=" +
                  uK +
                  ")|(?:" +
                  [uG + uY + "?", uY, uZ, uX, "[" + uV + "]"].join("|") +
                  ")" +
                  (uJ + uQ + u$),
                "g",
              );
            let u1 = function (e) {
                for (var t = (u0.lastIndex = 0); u0.test(e); ) ++t;
                return t;
              },
              u2 = function (e) {
                return nF(e) ? u1(e) : uW(e);
              };
            var u3 = Math.ceil;
            let u5 = function (e, t) {
              var n = (t = void 0 === t ? " " : A(t)).length;
              if (n < 2) return n ? uU(t, e) : t;
              var r = uU(t, u3(e / u2(t)));
              return nF(t) ? nB(nJ(r), 0, e).join("") : r.slice(0, e);
            };
            var u8 = Math.ceil,
              u4 = Math.floor;
            let u6 = function (e, t, n) {
                e = nc(e);
                var r = (t = Y(t)) ? u2(e) : 0;
                if (!t || r >= t) return e;
                var i = (t - r) / 2;
                return u5(u4(i), n) + e + u5(u8(i), n);
              },
              u9 = function (e, t, n) {
                e = nc(e);
                var r = (t = Y(t)) ? u2(e) : 0;
                return t && r < t ? e + u5(t - r, n) : e;
              },
              u7 = function (e, t, n) {
                e = nc(e);
                var r = (t = Y(t)) ? u2(e) : 0;
                return t && r < t ? u5(t - r, n) + e : e;
              };
            var se = /^\s+/,
              st = f.parseInt;
            let sn = function (e, t, n) {
              return (
                n || null == t ? (t = 0) : t && (t = +t),
                st(nc(e).replace(se, ""), t || 0)
              );
            };
            var sr = tp(function (e, t) {
              var n = e4(t, e0(sr));
              return ti(e, 32, void 0, t, n);
            });
            sr.placeholder = {};
            let si = sr;
            var so = tp(function (e, t) {
              var n = e4(t, e0(so));
              return ti(e, 64, void 0, t, n);
            });
            so.placeholder = {};
            let sa = so,
              sl = os(
                function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                },
                function () {
                  return [[], []];
                },
              ),
              su = nx(function (e, t) {
                return null == e
                  ? {}
                  : uP(e, t, function (t, n) {
                      return i2(e, n);
                    });
              }),
              ss = function (e) {
                for (var t, n = this; n instanceof e_; ) {
                  var r = ej(n);
                  (r.__index__ = 0),
                    (r.__values__ = void 0),
                    t ? (i.__wrapped__ = r) : (t = r);
                  var i = r;
                  n = n.__wrapped__;
                }
                return (i.__wrapped__ = e), t;
              },
              sc = function (e) {
                return function (t) {
                  return null == e ? void 0 : nv(e, t);
                };
              },
              sf = function (e, t, n, r) {
                for (var i = n - 1, o = e.length; ++i < o; )
                  if (r(e[i], t)) return i;
                return -1;
              };
            var sd = Array.prototype.splice;
            let sp = function (e, t, n, r) {
                var i = r ? sf : eZ,
                  o = -1,
                  a = t.length,
                  l = e;
                for (e === t && (t = eR(t)), n && (l = O(e, tT(n))); ++o < a; )
                  for (
                    var u = 0, s = t[o], c = n ? n(s) : s;
                    (u = i(l, c, u, r)) > -1;

                  )
                    l !== e && sd.call(l, u, 1), sd.call(e, u, 1);
                return e;
              },
              sv = function (e, t) {
                return e && e.length && t && t.length ? sp(e, t) : e;
              },
              sh = tp(sv),
              sy = function (e, t, n) {
                return e && e.length && t && t.length ? sp(e, t, i4(n, 2)) : e;
              },
              sm = function (e, t, n) {
                return e && e.length && t && t.length ? sp(e, t, void 0, n) : e;
              };
            var sg = Array.prototype.splice;
            let sb = function (e, t) {
                for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                  var i = t[n];
                  if (n == r || i !== o) {
                    var o = i;
                    e2(i) ? sg.call(e, i, 1) : uw(e, i);
                  }
                }
                return e;
              },
              s_ = nx(function (e, t) {
                var n = null == e ? 0 : e.length,
                  r = ny(e, t);
                return (
                  sb(
                    e,
                    O(t, function (e) {
                      return e2(e, n) ? +e : e;
                    }).sort(uT),
                  ),
                  r
                );
              });
            var sE = Math.floor,
              sx = Math.random;
            let sw = function (e, t) {
              return e + sE(sx() * (t - e + 1));
            };
            var sk = parseFloat,
              sO = Math.min,
              sS = Math.random;
            let sP = function (e, t, n) {
              if (
                (n && "boolean" != typeof n && ty(e, t, n) && (t = n = void 0),
                void 0 === n &&
                  ("boolean" == typeof t
                    ? ((n = t), (t = void 0))
                    : "boolean" == typeof e && ((n = e), (e = void 0))),
                void 0 === e && void 0 === t
                  ? ((e = 0), (t = 1))
                  : ((e = V(e)),
                    void 0 === t ? ((t = e), (e = 0)) : (t = V(t))),
                e > t)
              ) {
                var r = e;
                (e = t), (t = r);
              }
              if (n || e % 1 || t % 1) {
                var i = sS();
                return sO(
                  e + i * (t - e + sk("1e-" + ((i + "").length - 1))),
                  t,
                );
              }
              return sw(e, t);
            };
            var sR = Math.ceil,
              sj = Math.max;
            let sA = function (e, t, n, r) {
                for (
                  var i = -1, o = sj(sR((t - e) / (n || 1)), 0), a = Array(o);
                  o--;

                )
                  (a[r ? o : ++i] = e), (e += n);
                return a;
              },
              sC = function (e) {
                return function (t, n, r) {
                  return (
                    r &&
                      "number" != typeof r &&
                      ty(t, n, r) &&
                      (n = r = void 0),
                    (t = V(t)),
                    void 0 === n ? ((n = t), (t = 0)) : (n = V(n)),
                    (r = void 0 === r ? (t < n ? 1 : -1) : V(r)),
                    sA(t, n, r, e)
                  );
                };
              },
              sT = sC(),
              sI = sC(!0),
              sL = nx(function (e, t) {
                return ti(e, 256, void 0, void 0, void 0, t);
              }),
              sN = function (e, t, n, r, i) {
                return (
                  i(e, function (e, i, o) {
                    n = r ? ((r = !1), e) : t(n, e, i, o);
                  }),
                  n
                );
              },
              sD = function (e, t, n) {
                var r = S(e) ? n2 : sN,
                  i = arguments.length < 3;
                return r(e, i4(t, 4), n, i, ol);
              },
              sM = function (e, t, n, r) {
                var i = null == e ? 0 : e.length;
                for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
                return n;
              },
              sq = function (e, t, n) {
                var r = S(e) ? sM : sN,
                  i = arguments.length < 3;
                return r(e, i4(t, 4), n, i, o0);
              },
              sB = function (e, t) {
                return (S(e) ? rH : ac)(e, uh(i4(t, 3)));
              },
              sz = function (e, t) {
                var n = [];
                if (!(e && e.length)) return n;
                var r = -1,
                  i = [],
                  o = e.length;
                for (t = i4(t, 3); ++r < o; ) {
                  var a = e[r];
                  t(a, r, e) && (n.push(a), i.push(r));
                }
                return sb(e, i), n;
              },
              sF = function (e, t, n) {
                return (
                  (t = (n ? ty(e, t, n) : void 0 === t) ? 1 : Y(t)),
                  uU(nc(e), t)
                );
              },
              sH = function () {
                var e = arguments,
                  t = nc(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2]);
              },
              sU = function (e, t) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return tp(e, (t = void 0 === t ? t : Y(t)));
              },
              sW = function (e, t, n) {
                t = nf(t, e);
                var r = -1,
                  i = t.length;
                for (i || ((i = 1), (e = void 0)); ++r < i; ) {
                  var o = null == e ? void 0 : e[np(t[r])];
                  void 0 === o && ((r = i), (o = n)),
                    (e = Z(o) ? o.call(e) : o);
                }
                return e;
              };
            var sV = Array.prototype.reverse;
            let sY = function (e) {
                return null == e ? e : sV.call(e);
              },
              sK = rP("round"),
              sG = function (e) {
                var t = e.length;
                return t ? e[sw(0, t - 1)] : void 0;
              },
              sZ = function (e) {
                return (
                  S(e)
                    ? sG
                    : function (e) {
                        return sG(a4(e));
                      }
                )(e);
              },
              sX = function (e, t) {
                var n = -1,
                  r = e.length,
                  i = r - 1;
                for (t = void 0 === t ? r : t; ++n < t; ) {
                  var o = sw(n, i),
                    a = e[o];
                  (e[o] = e[n]), (e[n] = a);
                }
                return (e.length = t), e;
              },
              sQ = function (e, t) {
                var n = a4(e);
                return sX(n, rI(t, 0, n.length));
              },
              sJ = function (e, t, n) {
                return (
                  (t = (n ? ty(e, t, n) : void 0 === t) ? 1 : Y(t)),
                  (S(e)
                    ? function (e, t) {
                        return sX(eR(e), rI(t, 0, e.length));
                      }
                    : sQ)(e, t)
                );
              },
              s$ = function (e, t, n) {
                return null == e ? e : uS(e, t, n);
              },
              s0 = function (e, t, n, r) {
                return (
                  (r = "function" == typeof r ? r : void 0),
                  null == e ? e : uS(e, t, n, r)
                );
              },
              s1 = function (e) {
                return (
                  S(e)
                    ? function (e) {
                        return sX(eR(e));
                      }
                    : function (e) {
                        return sX(a4(e));
                      }
                )(e);
              },
              s2 = function (e) {
                if (null == e) return 0;
                if (th(e)) return a5(e) ? u2(e) : e.length;
                var t = it(e);
                return "[object Map]" == t || "[object Set]" == t
                  ? e.size
                  : tW(e).length;
              },
              s3 = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? (n && "number" != typeof n && ty(e, t, n)
                      ? ((t = 0), (n = r))
                      : ((t = null == t ? 0 : Y(t)),
                        (n = void 0 === n ? r : Y(n))),
                    nq(e, t, n))
                  : [];
              },
              s5 = rx(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase();
              }),
              s8 = function (e, t) {
                var n;
                return (
                  ol(e, function (e, r, i) {
                    return !(n = t(e, r, i));
                  }),
                  !!n
                );
              },
              s4 = function (e, t, n) {
                var r = S(e) ? iI : s8;
                return n && ty(e, t, n) && (t = void 0), r(e, i4(t, 3));
              },
              s6 = tp(function (e, t) {
                if (null == e) return [];
                var n = t.length;
                return (
                  n > 1 && ty(e, t[0], t[1])
                    ? (t = [])
                    : n > 2 && ty(t[0], t[1], t[2]) && (t = [t[0]]),
                  uL(e, n_(t, 1), [])
                );
              });
            var s9 = Math.floor,
              s7 = Math.min;
            let ce = function (e, t, n, r) {
                var i = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                for (
                  var a = (t = n(t)) != t,
                    l = null === t,
                    u = x(t),
                    s = void 0 === t;
                  i < o;

                ) {
                  var c = s9((i + o) / 2),
                    f = n(e[c]),
                    d = void 0 !== f,
                    p = null === f,
                    v = f == f,
                    h = x(f);
                  if (a) var y = r || v;
                  else
                    y = s
                      ? v && (r || d)
                      : l
                        ? v && d && (r || !p)
                        : u
                          ? v && d && !p && (r || !h)
                          : !p && !h && (r ? f <= t : f < t);
                  y ? (i = c + 1) : (o = c);
                }
                return s7(o, 4294967294);
              },
              ct = function (e, t, n) {
                var r = 0,
                  i = null == e ? r : e.length;
                if ("number" == typeof t && t == t && i <= 2147483647) {
                  for (; r < i; ) {
                    var o = (r + i) >>> 1,
                      a = e[o];
                    null !== a && !x(a) && (n ? a <= t : a < t)
                      ? (r = o + 1)
                      : (i = o);
                  }
                  return i;
                }
                return ce(e, t, G, n);
              },
              cn = function (e, t) {
                return ct(e, t);
              },
              cr = function (e, t, n) {
                return ce(e, t, i4(n, 2));
              },
              ci = function (e, t) {
                var n = null == e ? 0 : e.length;
                if (n) {
                  var r = ct(e, t);
                  if (r < n && tl(e[r], t)) return r;
                }
                return -1;
              },
              co = function (e, t) {
                return ct(e, t, !0);
              },
              ca = function (e, t, n) {
                return ce(e, t, i4(n, 2), !0);
              },
              cl = function (e, t) {
                if (null == e ? 0 : e.length) {
                  var n = ct(e, t, !0) - 1;
                  if (tl(e[n], t)) return n;
                }
                return -1;
              },
              cu = function (e, t) {
                for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                  var a = e[n],
                    l = t ? t(a) : a;
                  if (!n || !tl(l, u)) {
                    var u = l;
                    o[i++] = 0 === a ? 0 : a;
                  }
                }
                return o;
              },
              cs = function (e) {
                return e && e.length ? cu(e) : [];
              },
              cc = function (e, t) {
                return e && e.length ? cu(e, i4(t, 2)) : [];
              },
              cf = function (e, t, n) {
                return (n &&
                  "number" != typeof n &&
                  ty(e, t, n) &&
                  (t = n = void 0),
                (n = void 0 === n ? 4294967295 : n >>> 0))
                  ? (e = nc(e)) &&
                    ("string" == typeof t || (null != t && !lF(t))) &&
                    !(t = A(t)) &&
                    nF(e)
                    ? nB(nJ(e), 0, n)
                    : e.split(t, n)
                  : [];
              };
            var cd = Math.max;
            let cp = function (e, t) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return (
                  (t = null == t ? 0 : cd(Y(t), 0)),
                  tp(function (n) {
                    var r = n[t],
                      i = nB(n, 0, t);
                    return r && nm(i, r), ev(e, this, i);
                  })
                );
              },
              cv = rx(function (e, t, n) {
                return e + (n ? " " : "") + n0(t);
              }),
              ch = function (e, t, n) {
                return (
                  (e = nc(e)),
                  (n = null == n ? 0 : rI(Y(n), 0, e.length)),
                  (t = A(t)),
                  e.slice(n, n + t.length) == t
                );
              },
              cy = function () {
                return {};
              },
              cm = function () {
                return "";
              },
              cg = function () {
                return !0;
              },
              cb = C(function (e, t) {
                return e - t;
              }, 0),
              c_ = function (e) {
                return e && e.length ? ur(e, G) : 0;
              },
              cE = function (e, t) {
                return e && e.length ? ur(e, i4(t, 2)) : 0;
              },
              cx = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? nq(e, 1, t) : [];
              },
              cw = function (e, t, n) {
                return e && e.length
                  ? nq(e, 0, (t = n || void 0 === t ? 1 : Y(t)) < 0 ? 0 : t)
                  : [];
              },
              ck = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? nq(
                      e,
                      (t = r - (t = n || void 0 === t ? 1 : Y(t))) < 0 ? 0 : t,
                      r,
                    )
                  : [];
              },
              cO = function (e, t) {
                return e && e.length ? oY(e, i4(t, 3), !1, !0) : [];
              },
              cS = function (e, t) {
                return e && e.length ? oY(e, i4(t, 3)) : [];
              },
              cP = function (e, t) {
                return t(e), e;
              };
            var cR = Object.prototype,
              cj = cR.hasOwnProperty;
            let cA = function (e, t, n, r) {
              return void 0 === e || (tl(e, cR[n]) && !cj.call(r, n)) ? t : e;
            };
            var cC = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            };
            let cT = function (e) {
                return "\\" + cC[e];
              },
              cI = /<%=([\s\S]+?)%>/g,
              cL = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: cI,
                variable: "",
                imports: { _: { escape: ae } },
              };
            var cN = /\b__p \+= '';/g,
              cD = /\b(__p \+=) '' \+/g,
              cM = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              cq = /[()=,{}\[\]\/\s]/,
              cB = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              cz = /($^)/,
              cF = /['\n\r\u2028\u2029\\]/g,
              cH = Object.prototype.hasOwnProperty;
            let cU = function (e, t, n) {
                var r = cL.imports._.templateSettings || cL;
                n && ty(e, t, n) && (t = void 0),
                  (e = nc(e)),
                  (t = t$({}, t, r, cA));
                var i,
                  o,
                  a = t$({}, t.imports, r.imports, cA),
                  l = tV(a),
                  u = a8(a, l),
                  s = 0,
                  c = t.interpolate || cz,
                  f = "__p += '",
                  d = RegExp(
                    (t.escape || cz).source +
                      "|" +
                      c.source +
                      "|" +
                      (c === cI ? cB : cz).source +
                      "|" +
                      (t.evaluate || cz).source +
                      "|$",
                    "g",
                  ),
                  p = cH.call(t, "sourceURL")
                    ? "//# sourceURL=" +
                      (t.sourceURL + "").replace(/\s/g, " ") +
                      "\n"
                    : "";
                e.replace(d, function (t, n, r, a, l, u) {
                  return (
                    r || (r = a),
                    (f += e.slice(s, u).replace(cF, cT)),
                    n && ((i = !0), (f += "' +\n__e(" + n + ") +\n'")),
                    l && ((o = !0), (f += "';\n" + l + ";\n__p += '")),
                    r &&
                      (f +=
                        "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    (s = u + t.length),
                    t
                  );
                }),
                  (f += "';\n");
                var v = cH.call(t, "variable") && t.variable;
                if (v) {
                  if (cq.test(v))
                    throw Error(
                      "Invalid `variable` option passed into `_.template`",
                    );
                } else f = "with (obj) {\n" + f + "\n}\n";
                (f = (o ? f.replace(cN, "") : f)
                  .replace(cD, "$1")
                  .replace(cM, "$1;")),
                  (f =
                    "function(" +
                    (v || "obj") +
                    ") {\n" +
                    (v ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (i ? ", __e = _.escape" : "") +
                    (o
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ";\n") +
                    f +
                    "return __p\n}");
                var h = nC(function () {
                  return Function(l, p + "return " + f).apply(void 0, u);
                });
                if (((h.source = f), nA(h))) throw h;
                return h;
              },
              cW = function (e, t, n) {
                var r = !0,
                  i = !0;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return (
                  M(n) &&
                    ((r = "leading" in n ? !!n.leading : r),
                    (i = "trailing" in n ? !!n.trailing : i)),
                  o_(e, t, { leading: r, maxWait: t, trailing: i })
                );
              },
              cV = function (e, t) {
                return t(e);
              };
            var cY = Math.min;
            let cK = function (e, t) {
                if ((e = Y(e)) < 1 || e > 9007199254740991) return [];
                var n = 4294967295,
                  r = cY(e, 4294967295);
                (t = oZ(t)), (e -= 4294967295);
                for (var i = t_(r, t); ++n < e; ) t(n);
                return i;
              },
              cG = function () {
                return this;
              },
              cZ = function (e, t) {
                var n = e;
                return (
                  n instanceof eE && (n = n.value()),
                  n2(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, nm([e], t.args));
                    },
                    n,
                  )
                );
              },
              cX = function () {
                return cZ(this.__wrapped__, this.__actions__);
              },
              cQ = function (e) {
                return nc(e).toLowerCase();
              },
              cJ = function (e) {
                return S(e) ? O(e, np) : x(e) ? [e] : eR(ns(nc(e)));
              },
              c$ = function (e) {
                return e
                  ? rI(Y(e), -9007199254740991, 9007199254740991)
                  : 0 === e
                    ? e
                    : 0;
              },
              c0 = function (e) {
                return nc(e).toUpperCase();
              },
              c1 = function (e, t, n) {
                var r = S(e),
                  i = r || tA(e) || tq(e);
                if (((t = i4(t, 4)), null == n)) {
                  var o = e && e.constructor;
                  n = i ? (r ? new o() : []) : M(e) && Z(o) ? ef(nk(e)) : {};
                }
                return (
                  (i ? eV : oo)(e, function (e, r, i) {
                    return t(n, e, r, i);
                  }),
                  n
                );
              },
              c2 = function (e, t) {
                for (var n = e.length; n-- && eZ(t, e[n], 0) > -1; );
                return n;
              },
              c3 = function (e, t) {
                for (
                  var n = -1, r = e.length;
                  ++n < r && eZ(t, e[n], 0) > -1;

                );
                return n;
              },
              c5 = function (e, t, n) {
                if ((e = nc(e)) && (n || void 0 === t)) return D(e);
                if (!e || !(t = A(t))) return e;
                var r = nJ(e),
                  i = nJ(t),
                  o = c3(r, i),
                  a = c2(r, i) + 1;
                return nB(r, o, a).join("");
              },
              c8 = function (e, t, n) {
                if ((e = nc(e)) && (n || void 0 === t))
                  return e.slice(0, L(e) + 1);
                if (!e || !(t = A(t))) return e;
                var r = nJ(e),
                  i = c2(r, nJ(t)) + 1;
                return nB(r, 0, i).join("");
              };
            var c4 = /^\s+/;
            let c6 = function (e, t, n) {
              if ((e = nc(e)) && (n || void 0 === t)) return e.replace(c4, "");
              if (!e || !(t = A(t))) return e;
              var r = nJ(e),
                i = c3(r, nJ(t));
              return nB(r, i).join("");
            };
            var c9 = /\w*$/;
            let c7 = function (e, t) {
                var n = 30,
                  r = "...";
                if (M(t)) {
                  var i = "separator" in t ? t.separator : i;
                  (n = "length" in t ? Y(t.length) : n),
                    (r = "omission" in t ? A(t.omission) : r);
                }
                var o = (e = nc(e)).length;
                if (nF(e)) {
                  var a = nJ(e);
                  o = a.length;
                }
                if (n >= o) return e;
                var l = n - u2(r);
                if (l < 1) return r;
                var u = a ? nB(a, 0, l).join("") : e.slice(0, l);
                if (void 0 === i) return u + r;
                if ((a && (l += u.length - l), lF(i))) {
                  if (e.slice(l).search(i)) {
                    var s,
                      c = u;
                    for (
                      i.global || (i = RegExp(i.source, nc(c9.exec(i)) + "g")),
                        i.lastIndex = 0;
                      (s = i.exec(c));

                    )
                      var f = s.index;
                    u = u.slice(0, void 0 === f ? l : f);
                  }
                } else if (e.indexOf(A(i), l) != l) {
                  var d = u.lastIndexOf(i);
                  d > -1 && (u = u.slice(0, d));
                }
                return u + r;
              },
              fe = function (e) {
                return to(e, 1);
              };
            var ft = n3({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
              }),
              fn = /&(?:amp|lt|gt|quot|#39);/g,
              fr = RegExp(fn.source);
            let fi = function (e) {
              return (e = nc(e)) && fr.test(e) ? e.replace(fn, ft) : e;
            };
            var fo =
              r$ && 1 / iM(new r$([, -0]))[1] == 1 / 0
                ? function (e) {
                    return new r$(e);
                  }
                : ex;
            let fa = function (e, t, n) {
                var r = -1,
                  i = eX,
                  o = e.length,
                  a = !0,
                  l = [],
                  u = l;
                if (n) (a = !1), (i = oM);
                else if (o >= 200) {
                  var s = t ? null : fo(e);
                  if (s) return iM(s);
                  (a = !1), (i = iL), (u = new iT());
                } else u = t ? [] : l;
                e: for (; ++r < o; ) {
                  var c = e[r],
                    f = t ? t(c) : c;
                  if (((c = n || 0 !== c ? c : 0), a && f == f)) {
                    for (var d = u.length; d--; ) if (u[d] === f) continue e;
                    t && u.push(f), l.push(c);
                  } else i(u, f, n) || (u !== l && u.push(f), l.push(c));
                }
                return l;
              },
              fl = tp(function (e) {
                return fa(n_(e, 1, oS, !0));
              }),
              fu = tp(function (e) {
                var t = oz(e);
                return oS(t) && (t = void 0), fa(n_(e, 1, oS, !0), i4(t, 2));
              }),
              fs = tp(function (e) {
                var t = oz(e);
                return (
                  (t = "function" == typeof t ? t : void 0),
                  fa(n_(e, 1, oS, !0), void 0, t)
                );
              }),
              fc = function (e) {
                return e && e.length ? fa(e) : [];
              },
              ff = function (e, t) {
                return e && e.length ? fa(e, i4(t, 2)) : [];
              },
              fd = function (e, t) {
                return (
                  (t = "function" == typeof t ? t : void 0),
                  e && e.length ? fa(e, void 0, t) : []
                );
              };
            var fp = 0;
            let fv = function (e) {
                var t = ++fp;
                return nc(e) + t;
              },
              fh = function (e, t) {
                return null == e || uw(e, t);
              };
            var fy = Math.max;
            let fm = function (e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = rH(e, function (e) {
                    if (oS(e)) return (t = fy(e.length, t)), !0;
                  })),
                  t_(t, function (t) {
                    return O(e, i5(t));
                  })
                );
              },
              fg = function (e, t) {
                if (!(e && e.length)) return [];
                var n = fm(e);
                return null == t
                  ? n
                  : O(n, function (e) {
                      return ev(t, void 0, e);
                    });
              },
              fb = function (e, t, n, r) {
                return uS(e, t, n(nv(e, t)), r);
              },
              f_ = function (e, t, n) {
                return null == e ? e : fb(e, t, oZ(n));
              },
              fE = function (e, t, n, r) {
                return (
                  (r = "function" == typeof r ? r : void 0),
                  null == e ? e : fb(e, t, oZ(n), r)
                );
              },
              fx = rx(function (e, t, n) {
                return e + (n ? " " : "") + t.toUpperCase();
              }),
              fw = function (e) {
                return null == e ? [] : a8(e, tQ(e));
              },
              fk = tp(function (e, t) {
                return oS(e) ? oq(e, t) : [];
              }),
              fO = function (e, t) {
                return si(oZ(t), e);
              },
              fS = nx(function (e) {
                var t = e.length,
                  n = t ? e[0] : 0,
                  r = this.__wrapped__,
                  i = function (t) {
                    return ny(t, e);
                  };
                return !(t > 1) &&
                  !this.__actions__.length &&
                  r instanceof eE &&
                  e2(n)
                  ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                      func: cV,
                      args: [i],
                      thisArg: void 0,
                    }),
                    new eP(r, this.__chain__).thru(function (e) {
                      return t && !e.length && e.push(void 0), e;
                    }))
                  : this.thru(i);
              }),
              fP = function () {
                return rj(this);
              },
              fR = function () {
                var e = this.__wrapped__;
                if (e instanceof eE) {
                  var t = e;
                  return (
                    this.__actions__.length && (t = new eE(this)),
                    (t = t.reverse()).__actions__.push({
                      func: cV,
                      args: [sY],
                      thisArg: void 0,
                    }),
                    new eP(t, this.__chain__)
                  );
                }
                return this.thru(sY);
              },
              fj = function (e, t, n) {
                var r = e.length;
                if (r < 2) return r ? fa(e[0]) : [];
                for (var i = -1, o = Array(r); ++i < r; )
                  for (var a = e[i], l = -1; ++l < r; )
                    l != i && (o[i] = oq(o[i] || a, e[l], t, n));
                return fa(n_(o, 1), t, n);
              },
              fA = tp(function (e) {
                return fj(rH(e, oS));
              }),
              fC = tp(function (e) {
                var t = oz(e);
                return oS(t) && (t = void 0), fj(rH(e, oS), i4(t, 2));
              }),
              fT = tp(function (e) {
                var t = oz(e);
                return (
                  (t = "function" == typeof t ? t : void 0),
                  fj(rH(e, oS), void 0, t)
                );
              }),
              fI = tp(fm),
              fL = function (e, t, n) {
                for (
                  var r = -1, i = e.length, o = t.length, a = {};
                  ++r < i;

                ) {
                  var l = r < o ? t[r] : void 0;
                  n(a, e[r], l);
                }
                return a;
              },
              fN = function (e, t) {
                return fL(e || [], t || [], ts);
              },
              fD = function (e, t) {
                return fL(e || [], t || [], uS);
              },
              fM = tp(function (e) {
                var t = e.length,
                  n = t > 1 ? e[t - 1] : void 0;
                return (
                  (n = "function" == typeof n ? (e.pop(), n) : void 0), fg(e, n)
                );
              }),
              fq = {
                castArray: rk,
                clone: iO,
                cloneDeep: iS,
                cloneDeepWith: iP,
                cloneWith: iR,
                conformsTo: ot,
                eq: tl,
                gt: aX,
                gte: aQ,
                isArguments: tO,
                isArrayBuffer: l_,
                isArrayLike: th,
                isArrayLikeObject: oS,
                isBoolean: lE,
                isBuffer: tA,
                isDate: lw,
                isElement: lk,
                isEmpty: lS,
                isEqual: lP,
                isEqualWith: lR,
                isError: nA,
                isFinite: lA,
                isFunction: Z,
                isInteger: lC,
                isLength: tv,
                isMap: im,
                isMatch: lT,
                isMatchWith: lI,
                isNaN: lN,
                isNative: lM,
                isNil: lq,
                isNull: lB,
                isNumber: lL,
                isObjectLike: E,
                isPlainObject: nj,
                isRegExp: lF,
                isSafeInteger: lH,
                isSet: ib,
                isString: a5,
                isSymbol: x,
                isTypedArray: tq,
                isUndefined: lU,
                isWeakMap: lW,
                isWeakSet: lV,
                lt: l5,
                lte: l8,
                toArray: ug,
                toFinite: V,
                toLength: al,
                toNumber: U,
                toPlainObject: oR,
                toSafeInteger: c$,
              },
              fB = {
                at: fS,
                chain: rj,
                commit: ij,
                next: ub,
                plant: ss,
                reverse: fR,
                tap: cP,
                toIterator: cG,
                value: cX,
                wrapperChain: fP,
              };
            var fz = Math.max,
              fF = Math.min;
            let fH = function (e, t, n) {
              for (var r = -1, i = n.length; ++r < i; ) {
                var o = n[r],
                  a = o.size;
                switch (o.type) {
                  case "drop":
                    e += a;
                    break;
                  case "dropRight":
                    t -= a;
                    break;
                  case "take":
                    t = fF(t, e + a);
                    break;
                  case "takeRight":
                    e = fz(e, t - a);
                }
              }
              return { start: e, end: t };
            };
            var fU = Math.min,
              fW = Array.prototype,
              fV = Object.prototype.hasOwnProperty,
              fY = d ? d.iterator : void 0,
              fK = Math.max,
              fG = Math.min,
              fZ = function (e, t, n) {
                if (null == n) {
                  var r = M(t),
                    i = r && tV(t),
                    o = i && i.length && aU(t, i);
                  (o ? o.length : r) || ((n = t), (t = e), (e = this));
                }
                return up(e, t, n);
              };
            (eT.after = K),
              (eT.ary = to),
              (eT.assign = tK),
              (eT.assignIn = tJ),
              (eT.assignInWith = t$),
              (eT.assignWith = t0),
              (eT.at = nw),
              (eT.before = nT),
              (eT.bind = nL),
              (eT.bindAll = nN),
              (eT.bindKey = nM),
              (eT.castArray = fq.castArray),
              (eT.chain = fB.chain),
              (eT.chunk = rT),
              (eT.compact = iA),
              (eT.concat = iC),
              (eT.cond = i6),
              (eT.conforms = oe),
              (eT.constant = eH),
              (eT.countBy = of),
              (eT.create = od),
              (eT.curry = ov),
              (eT.curryRight = oy),
              (eT.debounce = o_),
              (eT.defaults = ok),
              (eT.defaultsDeep = oI),
              (eT.defer = oN),
              (eT.delay = oD),
              (eT.difference = oB),
              (eT.differenceBy = oF),
              (eT.differenceWith = oH),
              (eT.drop = oW),
              (eT.dropRight = oV),
              (eT.dropRightWhile = oK),
              (eT.dropWhile = oG),
              (eT.fill = as),
              (eT.filter = af),
              (eT.flatMap = aS),
              (eT.flatMapDeep = aR),
              (eT.flatMapDepth = aj),
              (eT.flatten = nE),
              (eT.flattenDeep = aC),
              (eT.flattenDepth = aT),
              (eT.flip = aI),
              (eT.flow = aD),
              (eT.flowRight = aM),
              (eT.fromPairs = aH),
              (eT.functions = aW),
              (eT.functionsIn = aV),
              (eT.groupBy = aK),
              (eT.initial = lt),
              (eT.intersection = lo),
              (eT.intersectionBy = la),
              (eT.intersectionWith = ll),
              (eT.invert = lc),
              (eT.invertBy = lv),
              (eT.invokeMap = lg),
              (eT.iteratee = lY),
              (eT.keyBy = lX),
              (eT.keys = tV),
              (eT.keysIn = tQ),
              (eT.map = aO),
              (eT.mapKeys = l4),
              (eT.mapValues = l6),
              (eT.matches = l9),
              (eT.matchesProperty = l7),
              (eT.memoize = na),
              (eT.merge = uu),
              (eT.mergeWith = oT),
              (eT.method = us),
              (eT.methodOf = uc),
              (eT.mixin = fZ),
              (eT.negate = uh),
              (eT.nthArg = ux),
              (eT.omit = uO),
              (eT.omitBy = uj),
              (eT.once = uA),
              (eT.orderBy = uN),
              (eT.over = uM),
              (eT.overArgs = uB),
              (eT.overEvery = uz),
              (eT.overSome = uF),
              (eT.partial = si),
              (eT.partialRight = sa),
              (eT.partition = sl),
              (eT.pick = su),
              (eT.pickBy = uR),
              (eT.property = i8),
              (eT.propertyOf = sc),
              (eT.pull = sh),
              (eT.pullAll = sv),
              (eT.pullAllBy = sy),
              (eT.pullAllWith = sm),
              (eT.pullAt = s_),
              (eT.range = sT),
              (eT.rangeRight = sI),
              (eT.rearg = sL),
              (eT.reject = sB),
              (eT.remove = sz),
              (eT.rest = sU),
              (eT.reverse = sY),
              (eT.sampleSize = sJ),
              (eT.set = s$),
              (eT.setWith = s0),
              (eT.shuffle = s1),
              (eT.slice = s3),
              (eT.sortBy = s6),
              (eT.sortedUniq = cs),
              (eT.sortedUniqBy = cc),
              (eT.split = cf),
              (eT.spread = cp),
              (eT.tail = cx),
              (eT.take = cw),
              (eT.takeRight = ck),
              (eT.takeRightWhile = cO),
              (eT.takeWhile = cS),
              (eT.tap = fB.tap),
              (eT.throttle = cW),
              (eT.thru = cV),
              (eT.toArray = fq.toArray),
              (eT.toPairs = o8),
              (eT.toPairsIn = o4),
              (eT.toPath = cJ),
              (eT.toPlainObject = fq.toPlainObject),
              (eT.transform = c1),
              (eT.unary = fe),
              (eT.union = fl),
              (eT.unionBy = fu),
              (eT.unionWith = fs),
              (eT.uniq = fc),
              (eT.uniqBy = ff),
              (eT.uniqWith = fd),
              (eT.unset = fh),
              (eT.unzip = fm),
              (eT.unzipWith = fg),
              (eT.update = f_),
              (eT.updateWith = fE),
              (eT.values = a4),
              (eT.valuesIn = fw),
              (eT.without = fk),
              (eT.words = r_),
              (eT.wrap = fO),
              (eT.xor = fA),
              (eT.xorBy = fC),
              (eT.xorWith = fT),
              (eT.zip = fI),
              (eT.zipObject = fN),
              (eT.zipObjectDeep = fD),
              (eT.zipWith = fM),
              (eT.entries = o8),
              (eT.entriesIn = o4),
              (eT.extend = tJ),
              (eT.extendWith = t$),
              fZ(eT, eT),
              (eT.add = T),
              (eT.attempt = nC),
              (eT.camelCase = rw),
              (eT.capitalize = n1),
              (eT.ceil = rR),
              (eT.clamp = rL),
              (eT.clone = fq.clone),
              (eT.cloneDeep = fq.cloneDeep),
              (eT.cloneDeepWith = fq.cloneDeepWith),
              (eT.cloneWith = fq.cloneWith),
              (eT.conformsTo = fq.conformsTo),
              (eT.deburr = n6),
              (eT.defaultTo = oE),
              (eT.divide = oU),
              (eT.endsWith = o2),
              (eT.eq = fq.eq),
              (eT.escape = ae),
              (eT.escapeRegExp = ar),
              (eT.every = aa),
              (eT.find = ah),
              (eT.findIndex = av),
              (eT.findKey = am),
              (eT.findLast = aE),
              (eT.findLastIndex = a_),
              (eT.findLastKey = ax),
              (eT.floor = aL),
              (eT.forEach = oX),
              (eT.forEachRight = o1),
              (eT.forIn = aq),
              (eT.forInRight = aB),
              (eT.forOwn = az),
              (eT.forOwnRight = aF),
              (eT.get = nh),
              (eT.gt = fq.gt),
              (eT.gte = fq.gte),
              (eT.has = a0),
              (eT.hasIn = i2),
              (eT.head = aw),
              (eT.identity = G),
              (eT.includes = a9),
              (eT.indexOf = le),
              (eT.inRange = a3),
              (eT.invoke = lm),
              (eT.isArguments = fq.isArguments),
              (eT.isArray = S),
              (eT.isArrayBuffer = fq.isArrayBuffer),
              (eT.isArrayLike = fq.isArrayLike),
              (eT.isArrayLikeObject = fq.isArrayLikeObject),
              (eT.isBoolean = fq.isBoolean),
              (eT.isBuffer = fq.isBuffer),
              (eT.isDate = fq.isDate),
              (eT.isElement = fq.isElement),
              (eT.isEmpty = fq.isEmpty),
              (eT.isEqual = fq.isEqual),
              (eT.isEqualWith = fq.isEqualWith),
              (eT.isError = fq.isError),
              (eT.isFinite = fq.isFinite),
              (eT.isFunction = fq.isFunction),
              (eT.isInteger = fq.isInteger),
              (eT.isLength = fq.isLength),
              (eT.isMap = fq.isMap),
              (eT.isMatch = fq.isMatch),
              (eT.isMatchWith = fq.isMatchWith),
              (eT.isNaN = fq.isNaN),
              (eT.isNative = fq.isNative),
              (eT.isNil = fq.isNil),
              (eT.isNull = fq.isNull),
              (eT.isNumber = fq.isNumber),
              (eT.isObject = M),
              (eT.isObjectLike = fq.isObjectLike),
              (eT.isPlainObject = fq.isPlainObject),
              (eT.isRegExp = fq.isRegExp),
              (eT.isSafeInteger = fq.isSafeInteger),
              (eT.isSet = fq.isSet),
              (eT.isString = fq.isString),
              (eT.isSymbol = fq.isSymbol),
              (eT.isTypedArray = fq.isTypedArray),
              (eT.isUndefined = fq.isUndefined),
              (eT.isWeakMap = fq.isWeakMap),
              (eT.isWeakSet = fq.isWeakSet),
              (eT.join = lG),
              (eT.kebabCase = lZ),
              (eT.last = oz),
              (eT.lastIndexOf = l0),
              (eT.lowerCase = l1),
              (eT.lowerFirst = l2),
              (eT.lt = fq.lt),
              (eT.lte = fq.lte),
              (eT.max = ut),
              (eT.maxBy = un),
              (eT.mean = ua),
              (eT.meanBy = ul),
              (eT.min = uf),
              (eT.minBy = ud),
              (eT.stubArray = rU),
              (eT.stubFalse = tS),
              (eT.stubObject = cy),
              (eT.stubString = cm),
              (eT.stubTrue = cg),
              (eT.multiply = uv),
              (eT.nth = uE),
              (eT.noop = ex),
              (eT.now = om),
              (eT.pad = u6),
              (eT.padEnd = u9),
              (eT.padStart = u7),
              (eT.parseInt = sn),
              (eT.random = sP),
              (eT.reduce = sD),
              (eT.reduceRight = sq),
              (eT.repeat = sF),
              (eT.replace = sH),
              (eT.result = sW),
              (eT.round = sK),
              (eT.sample = sZ),
              (eT.size = s2),
              (eT.snakeCase = s5),
              (eT.some = s4),
              (eT.sortedIndex = cn),
              (eT.sortedIndexBy = cr),
              (eT.sortedIndexOf = ci),
              (eT.sortedLastIndex = co),
              (eT.sortedLastIndexBy = ca),
              (eT.sortedLastIndexOf = cl),
              (eT.startCase = cv),
              (eT.startsWith = ch),
              (eT.subtract = cb),
              (eT.sum = c_),
              (eT.sumBy = cE),
              (eT.template = cU),
              (eT.times = cK),
              (eT.toFinite = fq.toFinite),
              (eT.toInteger = Y),
              (eT.toLength = fq.toLength),
              (eT.toLower = cQ),
              (eT.toNumber = fq.toNumber),
              (eT.toSafeInteger = fq.toSafeInteger),
              (eT.toString = fq.toString),
              (eT.toUpper = c0),
              (eT.trim = c5),
              (eT.trimEnd = c8),
              (eT.trimStart = c6),
              (eT.truncate = c7),
              (eT.unescape = fi),
              (eT.uniqueId = fv),
              (eT.upperCase = fx),
              (eT.upperFirst = n0),
              (eT.each = oX),
              (eT.eachRight = o1),
              (eT.first = aw),
              fZ(
                eT,
                ((u = {}),
                oo(eT, function (e, t) {
                  fV.call(eT.prototype, t) || (u[t] = e);
                }),
                u),
                { chain: !1 },
              ),
              (eT.VERSION = "4.17.21"),
              ((eT.templateSettings = cL).imports._ = eT),
              eV(
                [
                  "bind",
                  "bindKey",
                  "curry",
                  "curryRight",
                  "partial",
                  "partialRight",
                ],
                function (e) {
                  eT[e].placeholder = eT;
                },
              ),
              eV(["drop", "take"], function (e, t) {
                (eE.prototype[e] = function (n) {
                  n = void 0 === n ? 1 : fK(Y(n), 0);
                  var r = this.__filtered__ && !t ? new eE(this) : this.clone();
                  return (
                    r.__filtered__
                      ? (r.__takeCount__ = fG(n, r.__takeCount__))
                      : r.__views__.push({
                          size: fG(n, 4294967295),
                          type: e + (r.__dir__ < 0 ? "Right" : ""),
                        }),
                    r
                  );
                }),
                  (eE.prototype[e + "Right"] = function (t) {
                    return this.reverse()[e](t).reverse();
                  });
              }),
              eV(["filter", "map", "takeWhile"], function (e, t) {
                var n = t + 1,
                  r = 1 == n || 3 == n;
                eE.prototype[e] = function (e) {
                  var t = this.clone();
                  return (
                    t.__iteratees__.push({ iteratee: i4(e, 3), type: n }),
                    (t.__filtered__ = t.__filtered__ || r),
                    t
                  );
                };
              }),
              eV(["head", "last"], function (e, t) {
                var n = "take" + (t ? "Right" : "");
                eE.prototype[e] = function () {
                  return this[n](1).value()[0];
                };
              }),
              eV(["initial", "tail"], function (e, t) {
                var n = "drop" + (t ? "" : "Right");
                eE.prototype[e] = function () {
                  return this.__filtered__ ? new eE(this) : this[n](1);
                };
              }),
              (eE.prototype.compact = function () {
                return this.filter(G);
              }),
              (eE.prototype.find = function (e) {
                return this.filter(e).head();
              }),
              (eE.prototype.findLast = function (e) {
                return this.reverse().find(e);
              }),
              (eE.prototype.invokeMap = tp(function (e, t) {
                return "function" == typeof e
                  ? new eE(this)
                  : this.map(function (n) {
                      return ly(n, e, t);
                    });
              })),
              (eE.prototype.reject = function (e) {
                return this.filter(uh(i4(e)));
              }),
              (eE.prototype.slice = function (e, t) {
                e = Y(e);
                var n = this;
                return n.__filtered__ && (e > 0 || t < 0)
                  ? new eE(n)
                  : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                    void 0 !== t &&
                      (n = (t = Y(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                    n);
              }),
              (eE.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse();
              }),
              (eE.prototype.toArray = function () {
                return this.take(4294967295);
              }),
              oo(eE.prototype, function (e, t) {
                var n = /^(?:filter|find|map|reject)|While$/.test(t),
                  r = /^(?:head|last)$/.test(t),
                  i = eT[r ? "take" + ("last" == t ? "Right" : "") : t],
                  o = r || /^find/.test(t);
                i &&
                  (eT.prototype[t] = function () {
                    var t = this.__wrapped__,
                      a = r ? [1] : arguments,
                      l = t instanceof eE,
                      u = a[0],
                      s = l || S(t),
                      c = function (e) {
                        var t = i.apply(eT, nm([e], a));
                        return r && f ? t[0] : t;
                      };
                    s &&
                      n &&
                      "function" == typeof u &&
                      1 != u.length &&
                      (l = s = !1);
                    var f = this.__chain__,
                      d = !!this.__actions__.length,
                      p = o && !f,
                      v = l && !d;
                    if (!o && s) {
                      t = v ? t : new eE(this);
                      var h = e.apply(t, a);
                      return (
                        h.__actions__.push({
                          func: cV,
                          args: [c],
                          thisArg: void 0,
                        }),
                        new eP(h, f)
                      );
                    }
                    return p && v
                      ? e.apply(this, a)
                      : ((h = this.thru(c)),
                        p ? (r ? h.value()[0] : h.value()) : h);
                  });
              }),
              eV(
                ["pop", "push", "shift", "sort", "splice", "unshift"],
                function (e) {
                  var t = fW[e],
                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    r = /^(?:pop|shift)$/.test(e);
                  eT.prototype[e] = function () {
                    var e = arguments;
                    if (r && !this.__chain__) {
                      var i = this.value();
                      return t.apply(S(i) ? i : [], e);
                    }
                    return this[n](function (n) {
                      return t.apply(S(n) ? n : [], e);
                    });
                  };
                },
              ),
              oo(eE.prototype, function (e, t) {
                var n = eT[t];
                if (n) {
                  var r = n.name + "";
                  fV.call(ek, r) || (ek[r] = []),
                    ek[r].push({ name: t, func: n });
                }
              }),
              (ek[e6(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
              (eE.prototype.clone = function () {
                var e = new eE(this.__wrapped__);
                return (
                  (e.__actions__ = eR(this.__actions__)),
                  (e.__dir__ = this.__dir__),
                  (e.__filtered__ = this.__filtered__),
                  (e.__iteratees__ = eR(this.__iteratees__)),
                  (e.__takeCount__ = this.__takeCount__),
                  (e.__views__ = eR(this.__views__)),
                  e
                );
              }),
              (eE.prototype.reverse = function () {
                if (this.__filtered__) {
                  var e = new eE(this);
                  (e.__dir__ = -1), (e.__filtered__ = !0);
                } else (e = this.clone()), (e.__dir__ *= -1);
                return e;
              }),
              (eE.prototype.value = function () {
                var e = this.__wrapped__.value(),
                  t = this.__dir__,
                  n = S(e),
                  r = t < 0,
                  i = n ? e.length : 0,
                  o = fH(0, i, this.__views__),
                  a = o.start,
                  l = o.end,
                  u = l - a,
                  s = r ? l : a - 1,
                  c = this.__iteratees__,
                  f = c.length,
                  d = 0,
                  p = fU(u, this.__takeCount__);
                if (!n || (!r && i == u && p == u))
                  return cZ(e, this.__actions__);
                var v = [];
                e: for (; u-- && d < p; ) {
                  for (var h = -1, y = e[(s += t)]; ++h < f; ) {
                    var m = c[h],
                      g = m.iteratee,
                      b = m.type,
                      _ = g(y);
                    if (2 == b) y = _;
                    else if (!_) {
                      if (1 == b) continue e;
                      break e;
                    }
                  }
                  v[d++] = y;
                }
                return v;
              }),
              (eT.prototype.at = fB.at),
              (eT.prototype.chain = fB.wrapperChain),
              (eT.prototype.commit = fB.commit),
              (eT.prototype.next = fB.next),
              (eT.prototype.plant = fB.plant),
              (eT.prototype.reverse = fB.reverse),
              (eT.prototype.toJSON =
                eT.prototype.valueOf =
                eT.prototype.value =
                  fB.value),
              (eT.prototype.first = eT.prototype.head),
              fY && (eT.prototype[fY] = fB.toIterator);
            let fX = eT; /**
             * @license
             * Lodash (Custom Build) <https://lodash.com/>
             * Build: `lodash modularize exports="es" -o ./`
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
          },
        },
        s = {};
      function c(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var n = (s[e] = { exports: {} });
        return u[e].call(n.exports, n, n.exports, c), n.exports;
      }
      (c.d = (e, t) => {
        for (var n in t)
          c.o(t, n) &&
            !c.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var f = {};
      Object.defineProperty(f, "X$", { value: !0 }),
        (f.Wx = f.Lt = void 0),
        (r = c(8324)),
        Object.defineProperty(f, "Lt", {
          enumerable: !0,
          get: function () {
            return r.Dropdown;
          },
        }),
        (i = c(1057)),
        Object.defineProperty(f, "Wx", {
          enumerable: !0,
          get: function () {
            return i.Option;
          },
        });
      var d = f.Lt,
        p = f.Wx;
      f.X$;
    },
    71230: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return c;
        },
      });
      var r,
        i,
        o = n(98639),
        a = {
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                      else for (n in t) t[n] && (i && (i += " "), (i += n));
                    }
                    return i;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => i });
            let i = r;
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
              i = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              a = Object.prototype.hasOwnProperty,
              l =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              u = { key: !0, ref: !0, __self: !0, __source: !0 };
            function s(e, t, n) {
              var r,
                o = {},
                s = null,
                c = null;
              for (r in (void 0 !== n && (s = "" + n),
              void 0 !== t.key && (s = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                a.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: i,
                type: e,
                key: s,
                ref: c,
                props: o,
                _owner: l.current,
              };
            }
            (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
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
            let i = n(9541),
              o = n(5881),
              a = n(810),
              l = n(2342),
              u = r(n(5264)),
              s = (e) => {
                let {
                    forwardRef: t,
                    className: n,
                    value: r,
                    secondaryValue: s = l.DEFAULT_MAX_VALUE,
                    maxValue: c = l.DEFAULT_MAX_VALUE,
                    thumbSize: f = "l",
                    trackSize: d = "s",
                    mode: p = l.SliderMode.NORMAL,
                    onChange: v,
                    showThumbVariant: h = l.ThumbVariant.HOVER,
                    ...y
                  } = e,
                  [m, g] = (0, a.useState)(null != r ? r : 0),
                  [b, _] = (0, a.useState)(!1),
                  [E, x] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                  b || g(r);
                }, [r, b]),
                  (0, a.useEffect)(() => {
                    !b && E && p === l.SliderMode.DEFERRED && (v(m, !0), x(!1));
                  }, [p, b, v, m, E]);
                let w = (0, a.useCallback)(
                    (e) => {
                      let t = Number(e.target.value);
                      g(t),
                        x(!0),
                        "normal" === p ? (v(t, !0), x(!1)) : v(t, !1);
                    },
                    [g, v, p],
                  ),
                  k = (0, a.useCallback)(
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
                        t && _(n);
                    },
                    [_],
                  ),
                  O = (0, a.useCallback)(() => {
                    _(!1);
                  }, [_]),
                  S = (0, a.useMemo)(() => {
                    let e = (100 * Math.min(m, c)) / c,
                      t = (100 * Math.min(s, c)) / c;
                    return {
                      backgroundSize: "".concat(e, "% 100%"),
                      "--seek-before-width": "".concat(e, "%"),
                      "--buffered-width": "".concat(t, "%"),
                    };
                  }, [m, s, c]);
                return (0, i.jsx)("input", {
                  ref: t,
                  className: (0, o.clsx)(
                    u.default.root,
                    {
                      [u.default["root_thumbSize_".concat(f)]]: f,
                      [u.default["root_trackSize_".concat(d)]]: d,
                      [u.default["root_".concat(h, "Thumb")]]: h,
                    },
                    n,
                  ),
                  type: "range",
                  max: c,
                  value: m,
                  style: S,
                  onTouchStart: k,
                  onTouchEnd: k,
                  onMouseDown: k,
                  onMouseUp: k,
                  onMouseOut: O,
                  onBlur: O,
                  onChange: w,
                  ...y,
                });
              };
            t.Slider = (0, a.forwardRef)((e, t) =>
              (0, i.jsx)(s, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = i || (i = n.t(o, 2));
          },
        },
        l = {};
      function u(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var n = (l[e] = { exports: {} });
        return a[e].call(n.exports, n, n.exports, u), n.exports;
      }
      (u.d = (e, t) => {
        for (var n in t)
          u.o(t, n) &&
            !u.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (u.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var s = {};
      Object.defineProperty(s, "X", { value: !0 }),
        (s.i = void 0),
        (r = u(7886)),
        Object.defineProperty(s, "i", {
          enumerable: !0,
          get: function () {
            return r.Slider;
          },
        });
      var c = s.i;
      s.X;
    },
    10063: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gv: function () {
          return N;
        },
        Qk: function () {
          return M;
        },
        wi: function () {
          return s;
        },
      });
      var r = n(42288),
        i = n(13432),
        o = n(76873),
        a = n(68133);
      let l = r.V5.model("EqualizerFrequency", {
          key: r.V5.number,
          value: r.V5.number,
        }),
        u = r.V5.model("EqualizerPreset", {
          id: r.V5.enumeration(Object.values(i.Y)),
          preamp: r.V5.number,
          frequencies: r.V5.array(l),
        }),
        s = r.V5.model("Equalizer", {
          modal: a.KL,
          isEnabled: r.V5.optional(r.V5.boolean, !1),
          presets: r.V5.map(u),
          currentPresetId: r.V5.optional(r.V5.string, i.Y.DEFAULT),
          presetVersion: r.V5.optional(r.V5.number, 0),
        })
          .actions((e) => {
            let t = {
              setEnabled(t) {
                let { localStorage: n } = (0, r.dU)(e);
                e.isEnabled = t;
                let i = n.get(o.BUb.EqualizerConfig);
                n.set(o.BUb.EqualizerConfig, {
                  ...i,
                  isEnabled: t,
                  version: "5",
                });
              },
              loadPresets() {
                let { localStorage: t } = (0, r.dU)(e);
                e.presets = (0, r.pj)(i.wQ);
                let n = t.get(o.BUb.EqualizerConfig);
                (null == n ? void 0 : n.version) !== "5" &&
                  (t.remove(o.BUb.EqualizerConfig), (n = null)),
                  n &&
                    ((e.isEnabled = n.isEnabled),
                    n.customPreset &&
                      e.presets.set(i.Y.CUSTOM, (0, r.pj)(n.customPreset)),
                    n.lastPresetId && (e.currentPresetId = n.lastPresetId));
              },
              changePreset(t) {
                let { localStorage: n } = (0, r.dU)(e);
                e.currentPresetId = t;
                let i = n.get(o.BUb.EqualizerConfig);
                n.set(o.BUb.EqualizerConfig, {
                  ...i,
                  lastPresetId: t,
                  version: "5",
                });
              },
              changePreamp(n) {
                let { localStorage: a } = (0, r.dU)(e),
                  l = e.presets.get(e.currentPresetId);
                if (!l) return;
                let u = { ...(0, r.vM)(l), id: i.Y.CUSTOM, preamp: n };
                e.presets.set(i.Y.CUSTOM, (0, r.pj)(u)),
                  (e.presetVersion = Math.random()),
                  t.changePreset(u.id);
                let s = a.get(o.BUb.EqualizerConfig);
                a.set(o.BUb.EqualizerConfig, {
                  ...s,
                  customPreset: u,
                  version: "5",
                });
              },
              changeAmp(n, a, l) {
                let { localStorage: u } = (0, r.dU)(e),
                  s = e.presets.get(e.currentPresetId);
                if (!s) return;
                let c = (0, r.vM)(s),
                  f = c.frequencies.slice();
                f.splice(l, 1, { key: n, value: a });
                let d = { ...c, id: i.Y.CUSTOM, frequencies: f };
                e.presets.set(i.Y.CUSTOM, (0, r.pj)(d)),
                  (e.presetVersion = Math.random()),
                  t.changePreset(d.id);
                let p = u.get(o.BUb.EqualizerConfig);
                u.set(o.BUb.EqualizerConfig, {
                  ...p,
                  customPreset: d,
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
      var c = n(9753),
        f = n(60836),
        d = n(9544),
        p = n(98639),
        v = n(80542),
        h = n(37117),
        y = n(23881),
        m = n(34065),
        g = n(2570);
      let b = (e, t) =>
        e < 1e3
          ? e.toString()
          : t(
              { id: "equalizer.frequency-label" },
              { value: (e / 1e3).toFixed(0) },
            );
      var _ = n(10855),
        E = n.n(_),
        x = n(31014),
        w = n(39513),
        k = n(97898),
        O = n(28852),
        S = n(77036),
        P = n.n(S);
      let R = {
          [i.Y.DEFAULT]: (0, c.jsx)(x.Z, { id: "equalizer.default-preset" }),
          [i.Y.CUSTOM]: (0, c.jsx)(x.Z, { id: "equalizer.custom-preset" }),
          [i.Y.CLASSICAL]: (0, c.jsx)(x.Z, {
            id: "equalizer.classical-preset",
          }),
          [i.Y.CLUB]: (0, c.jsx)(x.Z, { id: "equalizer.club-preset" }),
          [i.Y.DANCE]: (0, c.jsx)(x.Z, { id: "equalizer.dance-preset" }),
          [i.Y.BASS_BOOST]: (0, c.jsx)(x.Z, {
            id: "equalizer.bass-boost-preset",
          }),
          [i.Y.BASS_AND_TREBLE_BOOST]: (0, c.jsx)(x.Z, {
            id: "equalizer.bass-and-treble-boost-preset",
          }),
          [i.Y.TREBLE_BOOST]: (0, c.jsx)(x.Z, {
            id: "equalizer.treble-boost-preset",
          }),
          [i.Y.SPEAKERS]: (0, c.jsx)(x.Z, { id: "equalizer.speakers-preset" }),
          [i.Y.LARGE_HALL]: (0, c.jsx)(x.Z, {
            id: "equalizer.large-hall-preset",
          }),
          [i.Y.CONCERT]: (0, c.jsx)(x.Z, { id: "equalizer.concert-preset" }),
          [i.Y.PARTY]: (0, c.jsx)(x.Z, { id: "equalizer.party-preset" }),
          [i.Y.POP]: (0, c.jsx)(x.Z, { id: "equalizer.pop-preset" }),
          [i.Y.REGGAE]: (0, c.jsx)(x.Z, { id: "equalizer.reggae-preset" }),
          [i.Y.ROCK]: (0, c.jsx)(x.Z, { id: "equalizer.rock-preset" }),
          [i.Y.SKA]: (0, c.jsx)(x.Z, { id: "equalizer.ska-preset" }),
          [i.Y.SOFT]: (0, c.jsx)(x.Z, { id: "equalizer.soft-preset" }),
          [i.Y.SOFT_ROCK]: (0, c.jsx)(x.Z, {
            id: "equalizer.soft-rock-preset",
          }),
          [i.Y.TECHNO]: (0, c.jsx)(x.Z, { id: "equalizer.techno-preset" }),
        },
        j = (0, d.Pi)((e) => {
          let { isDisabled: t } = e,
            { equalizer: n } = (0, o.oR4)(),
            r = (0, p.useCallback)(
              (e) => {
                let t = n.presets.get(e.id);
                t && n.changePreset(t.id);
              },
              [n],
            );
          return (0, c.jsx)(k.Lt, {
            isDisabled: t,
            className: P().root,
            onSelect: r,
            reference: (0, c.jsxs)(w.z, {
              radius: "xxxl",
              className: (0, f.W)(P().button, { [P().button_disabled]: t }),
              ...(0, y.BA)(y.bG.equalizer.EQUALIZER_PRESETS_BUTTON),
              children: [
                (0, c.jsx)(g.Caption, {
                  className: P().buttonText,
                  variant: "span",
                  size: "s",
                  weight: "medium",
                  children: R[n.currentPresetId],
                }),
                (0, c.jsx)(O.Icon, {
                  className: P().buttonIcon,
                  size: "xxs",
                  variant: "arrowDown",
                }),
              ],
            }),
            placement: "top",
            offsetOptions: -40,
            defaultValue: n.currentPresetId,
            containerClassName: P().container,
            ...(0, y.BA)(y.bG.equalizer.EQUALIZER_PRESETS_DROPDOWN),
            children: [...n.presets.values()].map((e) =>
              (0, c.jsx)(k.Wx, { id: e.id, label: R[e.id] }, e.id),
            ),
          });
        });
      var A = n(71230),
        C = n(16054),
        T = n.n(C);
      let I = (e) => {
          let {
            minValue: t,
            maxValue: n,
            className: r,
            label: i,
            isDisabled: o,
            onChange: a,
            value: l,
            ...u
          } = e;
          return (0, c.jsxs)("div", {
            className: (0, f.W)(T().root, r),
            ...(0, y.BA)(y.bG.equalizer.EQUALIZER_SLIDER_CONTAINER),
            children: [
              (0, c.jsxs)("div", {
                className: T().container,
                children: [
                  (0, c.jsx)("div", { className: T().serif }),
                  (0, c.jsx)(A.i, {
                    disabled: o,
                    className: (0, f.W)(T().slider, T().important),
                    thumbSize: "m",
                    trackSize: "xxs",
                    onChange: a,
                    value: l,
                    showThumbVariant: "always",
                    step: 0.1,
                    min: t,
                    max: n,
                    ...u,
                  }),
                ],
              }),
              (0, c.jsx)(g.Caption, {
                "aria-hidden": !0,
                className: (0, f.W)(T().label, { [T().label_disabled]: o }),
                variant: "div",
                weight: "normal",
                size: "xs",
                children: i,
              }),
            ],
          });
        },
        L = {
          enter: E().equalizer_enter,
          enterActive: E().equalizer_enter_active,
          exit: E().equalizer_exit,
          exitActive: E().equalizer_exit_active,
        },
        N = (0, d.Pi)((e) => {
          var t;
          let { title: n, className: r, isExpanded: i, isDisabled: a } = e,
            l = (0, p.useRef)(null),
            { formatMessage: u } = (0, v.Z)(),
            { equalizer: s } = (0, o.oR4)(),
            d = s.isEnabled
              ? u({ id: "equalizer.disable-equalizer" })
              : u({ id: "equalizer.enable-equalizer" }),
            _ = (0, p.useCallback)(
              (e) => {
                s.setEnabled(e);
              },
              [s],
            ),
            x = (0, p.useCallback)(
              (e, t) => (n) => {
                s.changeAmp(e, n, t);
              },
              [s],
            ),
            w = (0, p.useCallback)(
              (e) => {
                s.changePreamp(e);
              },
              [s],
            ),
            k = (0, p.useCallback)((e) => Math.round(10 * e) / 10, []);
          return (0, c.jsxs)("div", {
            className: (0, f.W)(E().root, r),
            ...(0, y.BA)(y.bG.equalizer.EQUALIZER_CONTAINER),
            children: [
              (0, c.jsxs)("div", {
                className: E().header,
                children: [
                  (0, c.jsx)(g.Caption, {
                    className: E().title,
                    variant: "span",
                    size: "l",
                    weight: "medium",
                    ...(0, y.BA)(y.bG.equalizer.EQUALIZER_TITLE),
                    children: n,
                  }),
                  (0, c.jsx)(m.Z, {
                    "aria-label": d,
                    isChecked: s.isEnabled,
                    onChange: _,
                    ...(0, y.BA)(y.bG.equalizer.EQUALIZER_TOGGLE),
                  }),
                ],
              }),
              (0, c.jsx)(h.Z, {
                in: i,
                nodeRef: l,
                timeout: 200,
                unmountOnExit: !0,
                classNames: L,
                children: (0, c.jsxs)("div", {
                  ref: l,
                  className: (0, f.W)(E().equalizer, {
                    [E().equalizer_disabled]: a,
                  }),
                  ...(0, y.BA)(y.bG.equalizer.EQUALIZER_FREQUENCIES_CONTAINER),
                  children: [
                    (0, c.jsxs)("div", {
                      className: E().container,
                      children: [
                        (0, c.jsxs)("div", {
                          className: E().preamp,
                          children: [
                            (0, c.jsx)(I, {
                              isDisabled: a,
                              minValue: 0.5,
                              maxValue: 1.5,
                              value: s.currentPreampValue,
                              onChange: w,
                              label: u({ id: "equalizer.preamp-level" }),
                              "aria-label": u({
                                id: "equalizer.slider-preamp-label",
                              }),
                              ...(0, y.BA)(
                                y.bG.equalizer.EQUALIZER_PREAMP_SLIDER,
                              ),
                            }),
                            (0, c.jsxs)("div", {
                              className: E().labels,
                              "aria-hidden": !0,
                              children: [
                                (0, c.jsx)(g.Caption, {
                                  className: E().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: u(
                                    { id: "equalizer.amp-label" },
                                    { value: 12 },
                                  ),
                                }),
                                (0, c.jsx)(g.Caption, {
                                  className: E().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: u(
                                    { id: "equalizer.amp-label" },
                                    { value: 0 },
                                  ),
                                }),
                                (0, c.jsx)(g.Caption, {
                                  className: E().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: u(
                                    { id: "equalizer.amp-label" },
                                    { value: -12 },
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsx)("div", {
                          className: E().frequencies,
                          children:
                            null === (t = s.currentPreset) || void 0 === t
                              ? void 0
                              : t.frequencies.map((e, t) => {
                                  let n = b(e.key, u),
                                    r = k(e.value);
                                  return (0, c.jsx)(
                                    I,
                                    {
                                      isDisabled: a,
                                      minValue: -12,
                                      maxValue: 12,
                                      value: e.value,
                                      label: n,
                                      onChange: x(e.key, t),
                                      "aria-label": u(
                                        {
                                          id: "equalizer.slider-frequency-label",
                                        },
                                        { label: n, value: r },
                                      ),
                                      ...(0, y.BA)(
                                        y.bG.equalizer
                                          .EQUALIZER_FREQUENCY_SLIDER,
                                      ),
                                    },
                                    n,
                                  );
                                }),
                        }),
                      ],
                    }),
                    (0, c.jsx)(j, { isDisabled: a }),
                  ],
                }),
              }),
            ],
          });
        });
      var D = n(89352);
      let M = (0, d.Pi)(() => {
        let { formatMessage: e } = (0, v.Z)(),
          { equalizer: t } = (0, o.oR4)();
        return (0, c.jsx)(D.u, {
          className: E().modal,
          headerClassName: E().modalHeader,
          contentClassName: E().modalContent,
          title: e({ id: "equalizer.title" }),
          open: t.modal.isOpened,
          onOpenChange: t.modal.onOpenChange,
          onClose: t.modal.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          closeButtonProps: (0, y.BA)(
            y.bG.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON,
          ),
          ...(0, y.BA)(y.bG.equalizer.EQUALIZER_MODAL),
          children: (0, c.jsx)(N, {
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
    88812: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return v;
        },
      });
      var r = n(29348);
      class i {
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
      class o extends i {
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
      var a = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      };
      class l {
        get(e) {
          return a(this, void 0, void 0, function* () {
            return this.index.get(e);
          });
        }
        getAll(e, t) {
          return a(this, void 0, void 0, function* () {
            return this.index.getAll(e, t);
          });
        }
        getAllKeys(e, t) {
          return a(this, void 0, void 0, function* () {
            return this.index.getAllKeys(e, t);
          });
        }
        getKey(e) {
          return a(this, void 0, void 0, function* () {
            return this.index.getKey(e);
          });
        }
        count(e) {
          return a(this, void 0, void 0, function* () {
            return this.index.count(e);
          });
        }
        openCursor(e, t) {
          return a(this, void 0, void 0, function* () {
            let n = yield this.index.openCursor(e, t);
            return n && new o(n);
          });
        }
        openKeyCursor(e, t) {
          return a(this, void 0, void 0, function* () {
            let n = yield this.index.openKeyCursor(e, t);
            return n && new i(n);
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
      var u = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      };
      class s {
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
            ? new l(this.objectStore.createIndex(e, t, n))
            : null;
        }
        deleteIndex(e) {
          return this.objectStore.deleteIndex(e);
        }
        count(e) {
          return u(this, void 0, void 0, function* () {
            return this.objectStore.count(e);
          });
        }
        get(e) {
          return u(this, void 0, void 0, function* () {
            return this.objectStore.get(e);
          });
        }
        getAll(e, t) {
          return u(this, void 0, void 0, function* () {
            return this.objectStore.getAll(e, t);
          });
        }
        getAllKeys(e, t) {
          return u(this, void 0, void 0, function* () {
            return this.objectStore.getAllKeys(e, t);
          });
        }
        getKey(e) {
          return u(this, void 0, void 0, function* () {
            return this.objectStore.getKey(e);
          });
        }
        index(e) {
          return new l(this.objectStore.index(e));
        }
        openKeyCursor(e, t) {
          return u(this, void 0, void 0, function* () {
            let n = yield this.objectStore.openKeyCursor(e, t);
            return n && new i(n);
          });
        }
        openCursor(e, t) {
          return u(this, void 0, void 0, function* () {
            let n = yield this.objectStore.openCursor(e, t);
            return n && new o(n);
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
      class c {
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
          return new s(this.transaction.objectStore(e));
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
      var f = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      };
      class d {
        get objectStoreNames() {
          return this.database.objectStoreNames;
        }
        transaction(e, t, n) {
          return new c(this.database.transaction(e, t, n));
        }
        createObjectStore(e, t) {
          return new s(this.database.createObjectStore(e, t));
        }
        deleteObjectStore(e) {
          return this.database.deleteObjectStore(e);
        }
        get(e, t) {
          return f(this, void 0, void 0, function* () {
            return this.database.get(e, t);
          });
        }
        getAll(e, t, n) {
          return f(this, void 0, void 0, function* () {
            return this.database.getAll(e, t, n);
          });
        }
        add(e, t, n) {
          return f(this, void 0, void 0, function* () {
            return this.database.add(e, t, n);
          });
        }
        put(e, t, n) {
          return f(this, void 0, void 0, function* () {
            return this.database.put(e, t, n);
          });
        }
        delete(e, t) {
          return f(this, void 0, void 0, function* () {
            return this.database.delete(e, t);
          });
        }
        clear(e) {
          return f(this, void 0, void 0, function* () {
            return this.database.clear(e);
          });
        }
        count(e, t) {
          return f(this, void 0, void 0, function* () {
            return this.database.count(e, t);
          });
        }
        getKey(e, t) {
          return f(this, void 0, void 0, function* () {
            return this.database.getKey(e, t);
          });
        }
        getAllKeys(e, t, n) {
          return f(this, void 0, void 0, function* () {
            return this.database.getAllKeys(e, t, n);
          });
        }
        countFromIndex(e, t, n) {
          return f(this, void 0, void 0, function* () {
            return this.database.countFromIndex(e, t, n);
          });
        }
        getFromIndex(e, t, n) {
          return f(this, void 0, void 0, function* () {
            return this.database.getFromIndex(e, t, n);
          });
        }
        getAllFromIndex(e, t, n, r) {
          return f(this, void 0, void 0, function* () {
            return this.database.getAllFromIndex(e, t, n, r);
          });
        }
        getAllKeysFromIndex(e, t, n, r) {
          return f(this, void 0, void 0, function* () {
            return this.database.getAllKeysFromIndex(e, t, n, r);
          });
        }
        getKeyFromIndex(e, t, n) {
          return f(this, void 0, void 0, function* () {
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
      var p = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      };
      class v {
        openDB(e) {
          let {
            onBlocked: t,
            onBlocking: n,
            onTerminated: i,
            onUpgrade: o,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          return p(this, void 0, void 0, function* () {
            let a = yield (0, r.X3)(this.name, e, {
              blocked: t,
              blocking: n,
              terminated: i,
              upgrade: (e, t, n, r, i) => {
                let a = new d(e);
                null == o || o(a, t, n, new c(r), i);
              },
            });
            return new d(a);
          });
        }
        deleteDB(e) {
          let { onBlocked: t } = e;
          return p(this, void 0, void 0, function* () {
            yield (0, r.Lj)(this.name, { blocked: t });
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
    },
    13432: function (e, t, n) {
      "use strict";
      n.d(t, {
        cv: function () {
          return tO;
        },
        Cy: function () {
          return D;
        },
        l0: function () {
          return eE;
        },
        MD: function () {
          return W;
        },
        Y$: function () {
          return ew;
        },
        Y: function () {
          return S;
        },
        kf: function () {
          return em;
        },
        CO: function () {
          return ey;
        },
        bo: function () {
          return eS;
        },
        V2: function () {
          return ep;
        },
        sD: function () {
          return ex;
        },
        CM: function () {
          return Y;
        },
        vv: function () {
          return eP;
        },
        bQ: function () {
          return eI;
        },
        Lb: function () {
          return tk;
        },
        wQ: function () {
          return eA;
        },
      });
      var r,
        i,
        o,
        a,
        l,
        u,
        s,
        c,
        f,
        d,
        p,
        v,
        h,
        y,
        m,
        g,
        b,
        _,
        E,
        x,
        w,
        k,
        O,
        S,
        P,
        R,
        j,
        A,
        C,
        T,
        I,
        L,
        N = n(76740);
      class D {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.afterContextSet.tap("ApplyContextPlugin", () => {
            let e = n.state.currentContext.value;
            e && e instanceof N.$n && e.apply({ hooks: t, playback: n });
          });
        }
      }
      var M = n(84338);
      let q = null;
      function B(e) {
        let t = e.state.queueState.index.value,
          n = e.state.queueState.order.value,
          r = e.state.currentContext.value,
          i = void 0 !== n[t - 1];
        r && (r.availableActions.moveBackward.value = i),
          null !== q && (q(), (q = null)),
          0 !== t ||
            (0, M.Q7)(r) ||
            (q = e.state.playerState.progress.onChange((e) => {
              r &&
                (r.availableActions.moveBackward.value =
                  !!e && e.position > N.lz);
            }));
      }
      var z = n(31490);
      function F(e) {
        let { value: t } = e.state.currentContext,
          { value: n } = e.state.queueState.currentEntity;
        if (void 0 !== t && void 0 !== n) {
          let { meta: r } = n.entity.data;
          (0, M.xA)(t) ||
          (0, M.Q7)(t) ||
          ("type" in r && r.type && z.UE.includes(r.type))
            ? ((t.availableActions.repeat.value = !1),
              (t.availableActions.shuffle.value = !1),
              e.state.queueState.repeat.value !== N.zq.NONE &&
                e.setRepeatMode(N.zq.NONE),
              e.state.queueState.shuffle.value && e.toggleShuffle())
            : ((t.availableActions.repeat.value = !0),
              (t.availableActions.shuffle.value = !0));
        }
      }
      let H = (e) => {
        let t =
          "albums" in e &&
          e.albums &&
          e.albums.length > 0 &&
          e.albums[0] &&
          e.albums[0].type === z.VZ.PODCAST;
        return !!(("type" in e && e.type && z.UE.includes(e.type)) || t);
      };
      function U(e) {
        let { value: t } = e.state.currentContext,
          { value: n } = e.state.queueState.currentEntity;
        if (void 0 !== t && void 0 !== n) {
          let { meta: e } = n.entity.data,
            r = H(e);
          t.availableActions.speed.value = !!r;
        }
      }
      class W {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.afterContextSet.tap("AvailableActionsPlugin", () => {
            F(n), U(n);
          }),
            t.beforeMediaStartPlaying.tap("AvailableActionsPlugin", () => {
              F(n), U(n);
            }),
            n.state.queueState.entityList.onChange(() => {
              B(n);
            }),
            n.state.queueState.index.onChange(() => {
              B(n);
            });
        }
      }
      var V = n(63665);
      class Y {
        apply(e) {
          let { playback: t, hooks: n } = e;
          t.state.playerState.event.onChange(() => {
            let { currentEntity: e } = t.state.queueState;
            if (e.value)
              switch (t.state.playerState.event.value) {
                case N.KX.PAUSED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: V.EE.NOT_PLAYING,
                    reason: "event-".concat(N.KX.PAUSED),
                  });
                  break;
                case N.KX.STALLED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: V.EE.NOT_PLAYING,
                    reason: "event-".concat(N.KX.STALLED),
                  });
                  break;
                case N.KX.PLAYING:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: V.EE.PLAYING,
                    reason: "event-".concat(N.KX.PLAYING),
                  });
                  break;
                case N.KX.MEDIA_ELEMENT_ERROR:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: V.EE.NOT_PLAYING,
                    reason: "event-".concat(N.KX.MEDIA_ELEMENT_ERROR),
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
                    stage: V.EE.PLAYING,
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
                    stage: V.EE.NOT_PLAYING,
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
                    stage: V.EE.NOT_PLAYING,
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
                    stage: V.EE.NOT_PLAYING,
                    reason: "hook-beforeContextSet",
                  }),
                Promise.resolve()
              );
            });
        }
      }
      var K = n(8655),
        G = n(23897),
        Z = n(38977);
      function X() {
        return new Date().toISOString();
      }
      function Q(e) {
        var t, n, r, i, o, a;
        let l;
        let {
            contextEntityPair: u,
            totalPlayedSeconds: s,
            endPositionSeconds: c,
            type: f,
            maxPlayerStage: d,
            seek: p,
            pause: v,
            startTimestamp: h,
          } = e,
          { entity: y, context: m } = u,
          g = String(y.data.meta.id),
          b = (function (e) {
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
          })(y),
          _ =
            (null === (t = y.data.additional) || void 0 === t
              ? void 0
              : t.from) || m.from,
          E =
            (null === (n = y.data.additional) || void 0 === n
              ? void 0
              : n.utmLink) ||
            m.utmLink ||
            {},
          x = 0;
        (0, V.YM)(y)
          ? "smartPreviewParams" in y.data.meta &&
            (null === (r = y.data.meta.smartPreviewParams) || void 0 === r
              ? void 0
              : r.durationMs) &&
            (x =
              (null === (i = y.data.meta.smartPreviewParams) || void 0 === i
                ? void 0
                : i.durationMs) / 1e3)
          : "durationMs" in y.data.meta &&
            y.data.meta.durationMs &&
            (x = y.data.meta.durationMs / 1e3);
        let w = s,
          k = c;
        0.5 > Math.abs(x - s) && (w = x),
          0.5 > Math.abs(x - c) && (k = x),
          (l = (0, M.Q7)(m)
            ? {
                generativeStreamId: String(
                  null === (o = m.data.meta.stream) || void 0 === o
                    ? void 0
                    : o.id,
                ),
              }
            : { trackId: g });
        let O = {
          playId: y.playId,
          timestamp: X(),
          totalPlayedSeconds: w,
          endPositionSeconds: k,
          trackLengthSeconds: x,
          albumId: b,
          from: _,
          context: m.data.type,
          contextItem: String(m.data.meta.id),
          addTracksToPlayerTime: y.addTracksToPlayerTime,
          audioAuto: "none",
          audioOutputName: "Динамик",
          audioOutputType: "Speaker",
          maxPlayerStage: d,
          seek: p,
          pause: v,
          startTimestamp: h,
          ...E,
          ...l,
        };
        if (
          ((0, M.xA)(m) &&
            m.data.meta.session &&
            ((O.radioSessionId = m.data.meta.session.radioSessionId),
            (O.context = "radio"),
            (O.contextItem = m.data.meta.session.wave.stationId)),
          (0, M.KT)(m) &&
            ((O.playlistId = ""
              .concat(m.data.meta.uid, ":")
              .concat(m.data.meta.kind)),
            (O.contextItem = ""
              .concat(m.data.meta.uid, ":")
              .concat(m.data.meta.kind))),
          (0, M.dt)(m))
        ) {
          let e = [M.Zc.Search, M.Zc.Other],
            t =
              null !== (a = m.data.overrideContextType) && void 0 !== a
                ? a
                : M.Zc.Other;
          (O.context = t), e.includes(t) && (O.contextItem = null);
        }
        return (0, V.YM)(y) && (O.smartPreview = !0), { type: f, data: O };
      }
      ((r = _ || (_ = {})).START = "start"),
        (r.END = "end"),
        (r.PLAYING = "playing");
      var J = n(41928),
        $ = n(46416),
        ee = n(74944),
        et = n(13391),
        en = n(41262);
      let er = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "playId" in e &&
            "totalPlayedSeconds" in e
          ),
        ei = (e) => {
          let t = [
            e.find((e) => 0 === e.totalPlayedSeconds),
            (0, ee.Z)(e, "totalPlayedSeconds"),
          ];
          return (0, et.Z)(t.filter(er), "totalPlayedSeconds");
        },
        eo = (e) => {
          let t = (0, $.Z)((0, J.Z)(e, "playId"), ei);
          return (0, en.Z)(t);
        };
      var ea = n(37810);
      class el extends ea.y {
        constructor(e, { code: t = "E_PLAYS", ...n } = {}) {
          super(e, { code: t, ...n }),
            (0, K._)(this, "name", "PlaysException"),
            Object.setPrototypeOf(this, el.prototype);
        }
      }
      var eu = n(88812);
      let es = "playsHeartBeats";
      class ec extends ea.y {
        constructor(e, { code: t = "E_PLAYS_IDB_STORE", ...n } = {}) {
          super(e, { code: t, ...n }),
            (0, K._)(this, "name", "PlaysStoreException"),
            Object.setPrototypeOf(this, ec.prototype);
        }
      }
      let ef = () => "".concat("music_plays", "_").concat("1.0.0");
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
          return new eu.r(this.idbName).openDB(1, {
            onBlocked: (t, n, r) => {
              var i;
              this.logError("Connection has been blocked"),
                null == e ||
                  null === (i = e.onBlocked) ||
                  void 0 === i ||
                  i.call(e, t, n, r);
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
            n.call(this, new ec(r, { data: { originalError: String(t) } }));
        }
        constructor() {
          (0, K._)(this, "idb", void 0),
            (0, K._)(this, "errorHandler", void 0),
            (0, K._)(this, "idbIsNotAvailable", !1),
            (0, K._)(this, "idbName", ef()),
            (this.idb = this.openIdb({
              onBlocked: () => this.onBlockedHandler(),
              onTerminated: () => this.onTerminatedHandler(),
            }).catch((e) => {
              this.logError("Open storage error", e);
            }));
        }
      }
      class ep {
        apply(e) {
          let { hooks: t, playback: n } = e;
          this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
            this.playsStore.setErrorHandler((e) => {
              t.afterError.promise(e);
            }),
            n.state.playerState.event.onChange(() => {
              let { currentEntity: e } = n.state.queueState;
              if (e.value)
                switch (n.state.playerState.event.value) {
                  case N.KX.PLAYING:
                    this.changeDynamicPlaysDataByPlayId({
                      playId: e.value.entity.playId,
                      dynamicData: { maxPlayerStage: z.KZ.PLAY },
                    });
                    break;
                  case N.KX.PAUSED:
                    Math.abs(
                      n.state.playerState.progress.value.position -
                        n.state.playerState.progress.value.duration,
                    ) > 0.2 &&
                      this.changeDynamicPlaysDataByPlayId({
                        playId: e.value.entity.playId,
                        dynamicData: { pause: !0 },
                      });
                    break;
                  case N.KX.SET_PROGRESS:
                    this.changeDynamicPlaysDataByPlayId({
                      playId: e.value.entity.playId,
                      dynamicData: { seek: !0 },
                    });
                }
            });
          let r = (0, G.Z)(
            () => {
              let e = n.state.queueState.currentEntity.value;
              if (!e || (0, M.Q7)(e.context)) return;
              let t = this.getDynamicPlaysDataByPlayId(e.entity.playId),
                r = Q({
                  type: _.PLAYING,
                  contextEntityPair: e,
                  totalPlayedSeconds: e.entity.totalPlayedSeconds,
                  endPositionSeconds:
                    n.state.playerState.progress.value.position,
                  ...t,
                });
              this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
                r.data.totalPlayedSeconds > 0 &&
                this.playsStore.storePlaysData(r.data);
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
            t.beforeMediaStartPlaying.tapPromise("PlaysPlugin", () => {
              let { currentEntity: e } = n.state.queueState;
              if (e.value) {
                var t;
                let n = e.value.entity.playId;
                (null === (t = this.dynamicPlaysDataByEntitiesPlayId.get(n)) ||
                void 0 === t
                  ? void 0
                  : t.startTimestamp) ||
                  this.changeDynamicPlaysDataByPlayId({
                    playId: n,
                    dynamicData: { startTimestamp: Date.now() },
                  });
              }
              return Promise.resolve();
            }),
            t.afterMediaEndPlaying.tapPromise("PlaysPlugin", () => {
              let {
                index: { value: e },
                entityList: { value: r },
                repeat: { value: i },
              } = n.state.queueState;
              return (
                (e === r.length - 1 || i === N.zq.ONE) &&
                  this.sendEndEntityPlay(n, t),
                Promise.resolve()
              );
            }),
            t.afterError.tapPromise(
              "PlaysPlugin",
              (e) => (
                (e instanceof Z.Tb || e instanceof N.YR) &&
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
          return eo(
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
                      .sendPlays({ clientNow: X(), plays: n })
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
            if ((0, M.xA)(e.state.currentContext.value))
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
              let { seek: r, pause: i } = this.getDynamicPlaysDataByPlayId(
                  n.entity.playId,
                ),
                o = Q({
                  type: _.START,
                  contextEntityPair: n,
                  totalPlayedSeconds: 0,
                  endPositionSeconds: 0,
                  seek: r,
                  pause: i,
                });
              if (
                (o.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new el("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: n.entity.timeStagesOfPlayback,
                        contextId: n.context.data.meta.id,
                        entityId: n.entity.data.meta.id,
                        totalPlayedSeconds: o.data.totalPlayedSeconds,
                        trackLengthSeconds: o.data.trackLengthSeconds,
                        playId: o.data.playId,
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
                return this.sendPlaysData(o.data).catch((e) => {
                  let r = "",
                    i = "";
                  n &&
                    ((r = n.context.data.meta.id), (i = n.entity.data.meta.id)),
                    t.afterError.promise(
                      new el("Error while sending plays", {
                        cause: e,
                        data: { contextId: r, entityId: i },
                      }),
                    );
                });
            }
          } catch (i) {
            let e = "",
              r = "";
            n && ((e = n.context.data.meta.id), (r = n.entity.data.meta.id)),
              t.afterError.promise(
                new el("Error while sending plays", {
                  cause: i,
                  data: { contextId: e, entityId: r },
                }),
              );
          }
          return Promise.resolve();
        }
        sendEndEntityPlay(e, t) {
          let n = e.state.queueState.currentEntity.value;
          try {
            if (n && !(0, M.Q7)(n.context)) {
              let r;
              let { entity: i } = n,
                o = n.entity.totalPlayedSeconds,
                a = this.getDynamicPlaysDataByPlayId(i.playId);
              return (
                (r =
                  0 === o
                    ? Q({
                        type: _.END,
                        contextEntityPair: n,
                        totalPlayedSeconds: 0.1,
                        endPositionSeconds: 0.1,
                        ...a,
                      })
                    : Q({
                        type: _.END,
                        contextEntityPair: n,
                        totalPlayedSeconds: o,
                        endPositionSeconds:
                          e.state.playerState.progress.value.position,
                        ...a,
                      })),
                this.dynamicPlaysDataByEntitiesPlayId.delete(r.data.playId),
                r.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new el("Plays error. Too big play time", {
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
                    i = "";
                  n &&
                    ((r = n.context.data.meta.id), (i = n.entity.data.meta.id)),
                    t.afterError.promise(
                      new el("Error while sending plays", {
                        cause: e,
                        data: { contextId: r, entityId: i },
                      }),
                    );
                })
              );
            }
          } catch (i) {
            let e = "",
              r = "";
            n && ((e = n.context.data.meta.id), (r = n.entity.data.meta.id)),
              t.afterError.promise(
                new el("Error while sending plays", {
                  cause: i,
                  data: { contextId: e, entityId: r },
                }),
              );
          }
          return Promise.resolve();
        }
        changeDynamicPlaysDataByPlayId(e) {
          let { playId: t, dynamicData: n } = e,
            r = this.dynamicPlaysDataByEntitiesPlayId.get(t);
          this.dynamicPlaysDataByEntitiesPlayId.set(t, {
            ...(null != r ? r : {}),
            ...(null != n ? n : {}),
          });
        }
        getDynamicPlaysDataByPlayId(e) {
          var t, n, r;
          let i = this.dynamicPlaysDataByEntitiesPlayId.get(e);
          return {
            seek:
              null !== (t = null == i ? void 0 : i.seek) && void 0 !== t && t,
            pause:
              null !== (n = null == i ? void 0 : i.pause) && void 0 !== n && n,
            maxPlayerStage:
              null !== (r = null == i ? void 0 : i.maxPlayerStage) &&
              void 0 !== r
                ? r
                : z.KZ.PREPARE,
            startTimestamp: null == i ? void 0 : i.startTimestamp,
          };
        }
        constructor(e) {
          var t;
          (0, K._)(this, "dynamicPlaysDataByEntitiesPlayId", new Map()),
            (0, K._)(this, "sendingInProgressForPlayId", new Map()),
            (0, K._)(this, "playsResource", void 0),
            (0, K._)(this, "playsStore", void 0),
            (0, K._)(this, "variables", void 0),
            (0, K._)(this, "storePlaysProgressIntervalMs", void 0);
          let { httpClient: n, playsResourceConfig: r, variables: i } = e;
          (this.playsResource = new z.ol(n, r)),
            (this.variables = i || {}),
            (this.storePlaysProgressIntervalMs =
              e.storePlaysProgressIntervalMs || 1e4),
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableLocalStoredPlaysData) && (this.playsStore = new ed());
        }
      }
      ((i = E || (E = {})).PLAY = "play"),
        (i.PAUSE = "pause"),
        (i.NEXT = "nexttrack"),
        (i.PREV = "previoustrack"),
        (i.SEEK = "seekto"),
        (i.STOP = "stop");
      let ev = [40, 50, 80, 100, 200, 300, 400],
        eh = [E.PLAY, E.PAUSE, E.STOP, E.SEEK];
      class ey {
        isSupported() {
          return (
            "mediaSession" in window.navigator && "MediaMetadata" in window
          );
        }
        handleMediaActionEvents(e, t) {
          let { action: n } = e;
          switch (n) {
            case E.PLAY:
              t.resume();
              break;
            case E.PAUSE:
            case E.STOP:
              t.pause();
              break;
            case E.NEXT:
              t.moveForward();
              break;
            case E.PREV:
              t.moveBackward();
              break;
            case E.SEEK: {
              var r;
              if (
                (0, V.OX)(
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
            var i, o;
            let t =
              null === (o = e.albums) || void 0 === o
                ? void 0
                : null === (i = o[0]) || void 0 === i
                  ? void 0
                  : i.title;
            r.album = t;
          }
          return (
            "coverUri" in e && (t = e.coverUri),
            "imageUrl" in e && (t = e.imageUrl),
            t &&
              (n = ev.map((e) => {
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
            if (e.state.playerState.event.value === N.KX.UPDATING_PROGRESS) {
              var t, n;
              this.updateMetadata(
                null === (t = e.state.queueState.currentEntity.value) ||
                  void 0 === t
                  ? void 0
                  : t.entity.data.meta,
              ),
                (0, V.OX)(
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
                eh.forEach((t) => {
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
              var r, i;
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
                          E.PREV,
                          r ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      })),
                (n =
                  null === (i = e.state.currentContext.value) || void 0 === i
                    ? void 0
                    : i.availableActions.moveForward.onChange(() => {
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
                          E.NEXT,
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
          (0, K._)(this, "browserName", void 0),
            (0, K._)(this, "browserVersion", void 0),
            (this.browserName = e),
            (this.browserVersion = t);
        }
      }
      class em {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.afterError.tapPromise("LoggerPlugin", (e) => {
            let t;
            let r = n.state.queueState.currentEntity.value
              ? n.state.queueState.currentEntity.value.entity.mediaSource
              : null;
            return (
              ((t =
                e instanceof ea.y
                  ? e
                  : new ea.y("Error in Sonata player", {
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
          (0, K._)(this, "logger", void 0);
          let { logger: t } = e;
          this.logger = t;
        }
      }
      let eg = [M.Ak.Album, M.Ak.Artist, M.Ak.Playlist, M.Ak.Various],
        eb = (e, t, n) => {
          var r;
          let i =
            null === (r = t.state.currentContext.value) || void 0 === r
              ? void 0
              : r.data;
          if (!i) return "";
          let o = e,
            a = t.state.queueState.entityList.value.length || 0;
          return (
            o === M.Ak.Various && 1 === a && (o = "track"),
            e === M.Ak.Various &&
              "overrideContextType" in i &&
              i.overrideContextType &&
              (o = i.overrideContextType),
            "".concat(n, "-radio-").concat(o, "-autoflow")
          );
        },
        e_ = (e, t) => {
          var n, r, i, o;
          let a =
            null === (n = t.state.currentContext.value) || void 0 === n
              ? void 0
              : n.data;
          if (a) {
            if (e === M.Ak.Album) return ["album:".concat(a.meta.id)];
            if (e === M.Ak.Artist) return ["artist:".concat(a.meta.id)];
            if (
              e === M.Ak.Playlist &&
              "owner" in a.meta &&
              (null === (r = a.meta.owner) || void 0 === r ? void 0 : r.uid) &&
              "kind" in a.meta &&
              a.meta.kind
            )
              return [
                "playlist:"
                  .concat(
                    null === (i = a.meta.owner) || void 0 === i
                      ? void 0
                      : i.uid,
                    "_",
                  )
                  .concat(a.meta.kind),
              ];
            if (e === M.Ak.Various) {
              if ("overrideAutoflowSeeds" in a && a.overrideAutoflowSeeds)
                return a.overrideAutoflowSeeds;
              let e =
                null === (o = t.state.queueState.currentEntity.value) ||
                void 0 === o
                  ? void 0
                  : o.entity.data.meta.id;
              return ["track:".concat(e)];
            }
          }
        };
      class eE {
        apply(e) {
          let { playback: t, hooks: n } = e;
          n.afterContextEnd.tapPromise("AutoflowPlugin", () => {
            var e, n, r;
            let i =
              null === (e = t.state.currentContext.value) || void 0 === e
                ? void 0
                : e.data.type;
            return (
              (null === (n = t.state.currentContext.value) || void 0 === n
                ? void 0
                : n.data) &&
                "enableVariousAutoFlow" in t.state.currentContext.value.data &&
                (null === (r = t.state.currentContext.value) || void 0 === r
                  ? void 0
                  : r.data.enableVariousAutoFlow) &&
                (i = M.Ak.Various),
              i && eg.includes(i) && this.playAutoflow(t),
              Promise.resolve()
            );
          });
        }
        playAutoflow(e) {
          var t, n, r;
          let i =
            null === (t = e.state.currentContext.value) || void 0 === t
              ? void 0
              : t.data.type;
          (null === (n = e.state.currentContext.value) || void 0 === n
            ? void 0
            : n.data) &&
            "enableVariousAutoFlow" in e.state.currentContext.value.data &&
            (null === (r = e.state.currentContext.value) || void 0 === r
              ? void 0
              : r.data.enableVariousAutoFlow) &&
            (i = M.Ak.Various);
          let o = e_(i, e),
            a = e.state.currentContext.value,
            l = Object.create(null != a ? a : null);
          if (!(i && o)) return;
          let u = this.factory.createContext({
            data: {
              type: M.Ak.Vibe,
              meta: { id: (0, M.$k)(o) },
              seeds: o,
              from: eb(i, e, this.platform),
              includeTracksInResponse: !0,
              parentContext: l,
            },
          });
          e.playContext({ context: u, loadContextMeta: !0 });
        }
        constructor({ platform: e, factory: t }) {
          (0, K._)(this, "platform", void 0),
            (0, K._)(this, "factory", void 0),
            (this.platform = e),
            (this.factory = t);
        }
      }
      class ex {
        apply(e) {
          let { playback: t, hooks: n } = e;
          this.quality.onChange(() => {
            t.state.playerState.status.value !== N.Xz.IDLE &&
              t.reloadEntity().catch((e) => {
                n.afterError.promise(e);
              });
          });
        }
        constructor(e) {
          (0, K._)(this, "quality", void 0), (this.quality = e);
        }
      }
      class ew {
        apply(e) {
          let { hooks: t, playback: n } = e;
          t.beforeEntityChange.tapPromise("ContinuePlayingPlugin", () => {
            let { position: e, duration: t } = this.getTimingsFromPlayback(n);
            return new Promise((r) => {
              e !== t && this.checkBeforeProgressSync(n), r();
            });
          }),
            n.state.playerState.status.onChange((e) => {
              (e === N.Xz.PAUSED || e === N.Xz.STOPPED) &&
                (this.clearTimeout(), this.checkBeforeProgressSync(n)),
                e === N.Xz.PLAYING &&
                  this.shouldSendProgressSync(n) &&
                  this.setTimeout(n);
            }),
            n.state.playerState.event.onChange(() => {
              if (n.state.playerState.event.value === N.KX.SET_PROGRESS) {
                let e = n.state.queueState.currentEntity.value,
                  t = n.state.playerState.progress.value.position;
                if (!e) return;
                let { entity: r } = e;
                (0, V.nc)(r.data.meta) &&
                  r.data.meta.rememberPosition &&
                  (r.lastSeekPosition = t);
              }
            }),
            n.state.queueState.currentEntity.onChange(() => {
              let e = n.state.queueState.currentEntity.value;
              if (!e) return;
              let { entity: t } = e;
              if (
                (0, V.nc)(t.data.meta) &&
                t.data.meta.rememberPosition &&
                (0, V.R0)(t.data.meta)
              ) {
                let { endPositionSec: e } = t.data.meta.streamProgress;
                t.everFinished
                  ? (t.startPosition = e)
                  : (t.startPosition = Number.isFinite(t.lastSeekPosition)
                      ? t.lastSeekPosition
                      : e);
              }
            });
        }
        checkBeforeProgressSync(e) {
          var t;
          if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
          let { position: n, duration: r } = this.getTimingsFromPlayback(e),
            i =
              null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
                ? void 0
                : t.entity.data.meta.id;
          Number.isFinite(r) &&
            Number.isFinite(n) &&
            r &&
            n &&
            i &&
            (this.sendProgressSync({ duration: r, position: n, trackId: i }),
            e.state.playerState.status.value === N.Xz.PLAYING &&
              this.setTimeout(e));
        }
        sendProgressSync(e) {
          let t = new Date().toISOString(),
            { duration: n, position: r, trackId: i } = e;
          this.streamsResource.progressSync({
            lastSyncTimestamp: t,
            trackStreams: [
              {
                trackId: i,
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
          (0, K._)(this, "streamsResource", void 0),
            (0, K._)(this, "timeoutId", 0);
          let { httpClient: t, streamsResourceConfig: n } = e;
          this.streamsResource = new z.hd(t, n);
        }
      }
      ((o = x || (x = {})).WANT_PLAY_TRACK = "WANT_PLAY_TRACK"),
        (o.TRACK_IS_PLAYING = "TRACK_IS_PLAYING"),
        (o.TRACK_ERROR_PREPARE = "TRACK_ERROR_PREPARE"),
        (o.TRACK_ERROR_INITIAL_BUFFERING = "TRACK_ERROR_INITIAL_BUFFERING"),
        (o.TRACK_ERROR_PLAYING = "TRACK_ERROR_PLAYING"),
        ((a = w || (w = {})).NETWORK = "NETWORK"),
        (a.OTHER = "OTHER");
      var ek = n(60991);
      ((l = k || (k = {})).BAD_RESPONSE_4XX = "BAD_RESPONSE_4XX"),
        (l.BAD_RESPONSE_5XX = "BAD_RESPONSE_5XX"),
        (l.OTHER = "OTHER");
      class eO {
        logEvent(e) {
          let { event: t, eventName: n } = e;
          this.enableDebugMode &&
            (t
              ? (console.group(
                  "".concat(null != n ? n : "Untitled Log Metrics Event Info"),
                ),
                console.table(t.data),
                console.group("Raw event"),
                console.dir(t),
                console.groupEnd(),
                console.groupEnd())
              : console.error("Event in logEvent method not provided"));
        }
        wantPlayTrack(e) {
          let t = String(e.data.meta.id),
            n = Math.trunc(performance.now()),
            r = {
              name: x.WANT_PLAY_TRACK,
              data: {
                trackId: t,
                uuid: e.playId,
                expectedQuality: this.mediaConfigController.quality.value,
              },
            };
          return (
            this.wantPlayTracksEvents.set(e.playId, { time: n, event: r }),
            this.logEvent({ event: r, eventName: null == r ? void 0 : r.name }),
            r
          );
        }
        trackError(e, t) {
          let n = null;
          return (
            e instanceof Z.Pg
              ? (n = {
                  name: x.TRACK_ERROR_PREPARE,
                  data: {
                    trackId: String(t.data.meta.id),
                    uuid: t.playId,
                    type: e.code === Z.gE.E_GET_MEDIA_SRC ? w.NETWORK : w.OTHER,
                    subType: (function (e) {
                      let t = k.OTHER;
                      if (e.cause instanceof ek.du)
                        switch (String(e.cause.statusCode)[0]) {
                          case "4":
                            t = k.BAD_RESPONSE_4XX;
                            break;
                          case "5":
                            t = k.BAD_RESPONSE_5XX;
                        }
                      return t;
                    })(e),
                    name: e.name,
                    code: e.code,
                  },
                })
              : e instanceof N.YR && e.code === N.Bq.PLAY
                ? (n = {
                    name: x.TRACK_ERROR_INITIAL_BUFFERING,
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
                : e instanceof N.YR &&
                  e.code === N.Bq.MEDIA_ELEMENT_ERROR &&
                  (n = {
                    name: x.TRACK_ERROR_PLAYING,
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
            this.logEvent({ event: n, eventName: null == n ? void 0 : n.name }),
            n
          );
        }
        trackIsPlaying(e) {
          var t, n, r;
          let i = String(e.data.meta.id),
            o =
              this.wantPlayTracksEvents.has(e.playId) &&
              (null === (t = this.wantPlayTracksEvents.get(e.playId)) ||
              void 0 === t
                ? void 0
                : t.time),
            a = null;
          return (
            "number" == typeof o &&
              ((a = {
                name: x.TRACK_IS_PLAYING,
                data: {
                  trackId: i,
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
            this.logEvent({ event: a, eventName: null == a ? void 0 : a.name }),
            a
          );
        }
        constructor(e) {
          var t;
          (0, K._)(this, "mediaConfigController", void 0),
            (0, K._)(this, "wantPlayTracksEvents", new Map()),
            (0, K._)(this, "enableDebugMode", void 0),
            (this.enableDebugMode =
              null === (t = e.variables) || void 0 === t
                ? void 0
                : t.enableDebugMode),
            (this.mediaConfigController = e.mediaConfigController);
        }
      }
      class eS {
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
        constructor(e) {
          (0, K._)(this, "metricsEventsStore", void 0),
            (this.metricsEventsStore = new eO(e));
        }
      }
      class eP {
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
            ((0, K._)(this, "onTrailerPaused", void 0),
            (0, K._)(this, "onTrailerPlaying", void 0),
            (0, K._)(this, "trailerPlayback", void 0),
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
        getAverageFrequencies(e) {
          var t, n;
          let { low: r, high: i } = e,
            o = Math.floor(
              r / (this.audioContext.sampleRate / this.bufferLength),
            ),
            a = Math.floor(
              i / (this.audioContext.sampleRate / this.bufferLength),
            );
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let l = 0,
            u = 0;
          for (let e = o; e <= a; e++)
            (l +=
              (null !== (n = this.spectrum[e]) && void 0 !== n ? n : 0) / 256),
              u++;
          return l / u;
        }
        constructor(e, t, n) {
          var r, i;
          (0, K._)(this, "audioContext", void 0),
            (0, K._)(this, "analyserNode", void 0),
            (0, K._)(this, "bufferLength", 0),
            (0, K._)(this, "spectrum", new Uint8Array()),
            (this.audioContext = e),
            (this.analyserNode = e.createAnalyser()),
            (this.analyserNode.fftSize =
              null !== (r = null == n ? void 0 : n.fftSize) && void 0 !== r
                ? r
                : 1024),
            (this.analyserNode.smoothingTimeConstant =
              null !== (i = null == n ? void 0 : n.smoothingTimeConstant) &&
              void 0 !== i
                ? i
                : 0.4),
            t.connect(this.analyserNode),
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength));
        }
      }
      ((u = O || (O = {})).SUSPENDED = "suspended"),
        (u.RUNNING = "running"),
        (u.CLOSED = "closed"),
        ((s = S || (S = {})).CUSTOM = "CUSTOM"),
        (s.DEFAULT = "DEFAULT"),
        (s.CLASSICAL = "CLASSICAL"),
        (s.CLUB = "CLUB"),
        (s.DANCE = "DANCE"),
        (s.BASS_BOOST = "BASS_BOOST"),
        (s.BASS_AND_TREBLE_BOOST = "BASS_AND_TREBLE_BOOST"),
        (s.TREBLE_BOOST = "TREBLE_BOOST"),
        (s.SPEAKERS = "SPEAKERS"),
        (s.LARGE_HALL = "LARGE_HALL"),
        (s.CONCERT = "CONCERT"),
        (s.PARTY = "PARTY"),
        (s.POP = "POP"),
        (s.REGGAE = "REGGAE"),
        (s.ROCK = "ROCK"),
        (s.SKA = "SKA"),
        (s.SOFT = "SOFT"),
        (s.SOFT_ROCK = "SOFT_ROCK"),
        (s.TECHNO = "TECHNO"),
        ((c = P || (P = {})).IDLE = "IDLE"),
        (c.ENABLED = "ENABLED"),
        (c.DISABLED = "DISABLED"),
        ((f = R || (R = {})).HIGHSHELF = "highshelf"),
        (f.PEAKING = "peaking"),
        (f.LOWSHELF = "lowshelf");
      class ej {
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
            let { key: r, value: i } = t;
            return this.createBand(this.getBiquadFilterType(n, e.length), r, i);
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
          return 0 === e ? R.LOWSHELF : e === t - 1 ? R.HIGHSHELF : R.PEAKING;
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
          this.state !== P.ENABLED &&
            (this.sourceNode.disconnect(),
            (this.state = P.ENABLED),
            this.sourceNode.connect(this.preamp),
            this.lastBand &&
              this.lastBand.connect(this.audioContext.destination));
        }
        disable() {
          this.state !== P.DISABLED &&
            (this.sourceNode.disconnect(),
            this.lastBand && this.lastBand.disconnect(),
            (this.state = P.DISABLED),
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
          (0, K._)(this, "audioContext", void 0),
            (0, K._)(this, "sourceNode", void 0),
            (0, K._)(this, "preamp", void 0),
            (0, K._)(this, "state", P.DISABLED),
            (0, K._)(this, "bands", []),
            (this.audioContext = e),
            (this.sourceNode = t),
            (this.preamp = this.audioContext.createGain()),
            (null == n ? void 0 : n.preset) && this.applyPreset(n.preset);
        }
      }
      let eA = {
        [S.CUSTOM]: {
          id: S.CUSTOM,
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
        [S.DEFAULT]: {
          id: S.DEFAULT,
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
        [S.CLASSICAL]: {
          id: S.CLASSICAL,
          preamp: 1,
          frequencies: [
            { key: 60, value: -0.5 },
            { key: 170, value: -0.5 },
            { key: 310, value: -0.5 },
            { key: 600, value: -0.5 },
            { key: 1e3, value: -0.5 },
            { key: 3e3, value: -0.5 },
            { key: 6e3, value: -3.5 },
            { key: 12e3, value: -3.5 },
            { key: 14e3, value: -3.5 },
            { key: 16e3, value: -4.5 },
          ],
        },
        [S.CLUB]: {
          id: S.CLUB,
          preamp: 1,
          frequencies: [
            { key: 60, value: -0.5 },
            { key: 170, value: -0.5 },
            { key: 310, value: 4 },
            { key: 600, value: 2.5 },
            { key: 1e3, value: 2.5 },
            { key: 3e3, value: 2.5 },
            { key: 6e3, value: 1.5 },
            { key: 12e3, value: -0.5 },
            { key: 14e3, value: -0.5 },
            { key: 16e3, value: -0.5 },
          ],
        },
        [S.DANCE]: {
          id: S.DANCE,
          preamp: 1,
          frequencies: [
            { key: 60, value: 4.5 },
            { key: 170, value: 3.5 },
            { key: 310, value: 1 },
            { key: 600, value: -0.5 },
            { key: 1e3, value: -0.5 },
            { key: 3e3, value: -2.5 },
            { key: 6e3, value: -3.5 },
            { key: 12e3, value: -3.5 },
            { key: 14e3, value: -0.5 },
            { key: 16e3, value: -0.5 },
          ],
        },
        [S.BASS_BOOST]: {
          id: S.BASS_BOOST,
          preamp: 1,
          frequencies: [
            { key: 60, value: 4 },
            { key: 170, value: 4.5 },
            { key: 310, value: 4.5 },
            { key: 600, value: 2.5 },
            { key: 1e3, value: 0.5 },
            { key: 3e3, value: -2 },
            { key: 6e3, value: -4 },
            { key: 12e3, value: -5 },
            { key: 14e3, value: -5.5 },
            { key: 16e3, value: -5.5 },
          ],
        },
        [S.BASS_AND_TREBLE_BOOST]: {
          id: S.BASS_AND_TREBLE_BOOST,
          preamp: 1,
          frequencies: [
            { key: 60, value: 3.5 },
            { key: 170, value: 2.5 },
            { key: 310, value: -0.5 },
            { key: 600, value: -3.5 },
            { key: 1e3, value: -2 },
            { key: 3e3, value: 0.5 },
            { key: 6e3, value: 4 },
            { key: 12e3, value: 5.5 },
            { key: 14e3, value: 6 },
            { key: 16e3, value: 6 },
          ],
        },
        [S.TREBLE_BOOST]: {
          id: S.TREBLE_BOOST,
          preamp: 1,
          frequencies: [
            { key: 60, value: -4.5 },
            { key: 170, value: -4.5 },
            { key: 310, value: -4.5 },
            { key: 600, value: -2 },
            { key: 1e3, value: 1 },
            { key: 3e3, value: 5.5 },
            { key: 6e3, value: 8 },
            { key: 12e3, value: 8 },
            { key: 14e3, value: 8 },
            { key: 16e3, value: 8 },
          ],
        },
        [S.SPEAKERS]: {
          id: S.SPEAKERS,
          preamp: 1,
          frequencies: [
            { key: 60, value: 2 },
            { key: 170, value: 5.5 },
            { key: 310, value: 2.5 },
            { key: 600, value: -1.5 },
            { key: 1e3, value: -1 },
            { key: 3e3, value: 0.5 },
            { key: 6e3, value: 2 },
            { key: 12e3, value: 4.5 },
            { key: 14e3, value: 6 },
            { key: 16e3, value: 7 },
          ],
        },
        [S.LARGE_HALL]: {
          id: S.LARGE_HALL,
          preamp: 1,
          frequencies: [
            { key: 60, value: 5 },
            { key: 170, value: 5 },
            { key: 310, value: 2.5 },
            { key: 600, value: 2.5 },
            { key: 1e3, value: -0.5 },
            { key: 3e3, value: -2 },
            { key: 6e3, value: -2 },
            { key: 12e3, value: -2 },
            { key: 14e3, value: -0.5 },
            { key: 16e3, value: -0.5 },
          ],
        },
        [S.CONCERT]: {
          id: S.CONCERT,
          preamp: 1,
          frequencies: [
            { key: 60, value: -2 },
            { key: 170, value: -0.5 },
            { key: 310, value: 2 },
            { key: 600, value: 2.5 },
            { key: 1e3, value: 2.5 },
            { key: 3e3, value: 2.5 },
            { key: 6e3, value: 2 },
            { key: 12e3, value: 1 },
            { key: 14e3, value: 1 },
            { key: 16e3, value: 1 },
          ],
        },
        [S.PARTY]: {
          id: S.PARTY,
          preamp: 1,
          frequencies: [
            { key: 60, value: 3.5 },
            { key: 170, value: 3.5 },
            { key: 310, value: -0.5 },
            { key: 600, value: -0.5 },
            { key: 1e3, value: -0.5 },
            { key: 3e3, value: -0.5 },
            { key: 6e3, value: -0.5 },
            { key: 12e3, value: -0.5 },
            { key: 14e3, value: 3.5 },
            { key: 16e3, value: 3.5 },
          ],
        },
        [S.POP]: {
          id: S.POP,
          preamp: 1,
          frequencies: [
            { key: 60, value: -0.5 },
            { key: 170, value: 2 },
            { key: 310, value: 3.5 },
            { key: 600, value: 4 },
            { key: 1e3, value: 2.5 },
            { key: 3e3, value: -0.5 },
            { key: 6e3, value: -1 },
            { key: 12e3, value: -1 },
            { key: 14e3, value: -0.5 },
            { key: 16e3, value: -0.5 },
          ],
        },
        [S.REGGAE]: {
          id: S.REGGAE,
          preamp: 1,
          frequencies: [
            { key: 60, value: -0.5 },
            { key: 170, value: -0.5 },
            { key: 310, value: -0.5 },
            { key: 600, value: -2.5 },
            { key: 1e3, value: -0.5 },
            { key: 3e3, value: 3 },
            { key: 6e3, value: 3 },
            { key: 12e3, value: -0.5 },
            { key: 14e3, value: -0.5 },
            { key: 16e3, value: -0.5 },
          ],
        },
        [S.ROCK]: {
          id: S.ROCK,
          preamp: 1,
          frequencies: [
            { key: 60, value: 4 },
            { key: 170, value: 2 },
            { key: 310, value: -2.5 },
            { key: 600, value: -4 },
            { key: 1e3, value: -1.5 },
            { key: 3e3, value: 2 },
            { key: 6e3, value: 4 },
            { key: 12e3, value: 5.5 },
            { key: 14e3, value: 5.5 },
            { key: 16e3, value: 5.5 },
          ],
        },
        [S.SKA]: {
          id: S.SKA,
          preamp: 1,
          frequencies: [
            { key: 60, value: -1 },
            { key: 170, value: -2 },
            { key: 310, value: -2 },
            { key: 600, value: -0.5 },
            { key: 1e3, value: 2 },
            { key: 3e3, value: 2.5 },
            { key: 6e3, value: 4 },
            { key: 12e3, value: 4.5 },
            { key: 14e3, value: 5.5 },
            { key: 16e3, value: 4.5 },
          ],
        },
        [S.SOFT]: {
          id: S.SOFT,
          preamp: 1,
          frequencies: [
            { key: 60, value: 2 },
            { key: 170, value: 0.5 },
            { key: 310, value: -0.5 },
            { key: 600, value: -1 },
            { key: 1e3, value: -0.5 },
            { key: 3e3, value: 2 },
            { key: 6e3, value: 4 },
            { key: 12e3, value: 4.5 },
            { key: 14e3, value: 5.5 },
            { key: 16e3, value: 6 },
          ],
        },
        [S.SOFT_ROCK]: {
          id: S.SOFT_ROCK,
          preamp: 1,
          frequencies: [
            { key: 60, value: 2 },
            { key: 170, value: 2 },
            { key: 310, value: 1 },
            { key: 600, value: -0.5 },
            { key: 1e3, value: -2 },
            { key: 3e3, value: -2.5 },
            { key: 6e3, value: -1.5 },
            { key: 12e3, value: -0.5 },
            { key: 14e3, value: 1 },
            { key: 16e3, value: 4 },
          ],
        },
        [S.TECHNO]: {
          id: S.TECHNO,
          preamp: 1,
          frequencies: [
            { key: 60, value: 4 },
            { key: 170, value: 2.5 },
            { key: 310, value: -0.5 },
            { key: 600, value: -2.5 },
            { key: 1e3, value: -2 },
            { key: 3e3, value: -0.5 },
            { key: 6e3, value: 4 },
            { key: 12e3, value: 4.5 },
            { key: 14e3, value: 4.5 },
            { key: 16e3, value: 4 },
          ],
        },
      };
      ((d = j || (j = {})).IDLE = "IDLE"),
        (d.ENABLED = "ENABLED"),
        (d.DISABLED = "DISABLED");
      let eC = 1e3 / 60;
      class eT {
        updateGain() {
          if (this.state !== j.ENABLED) return;
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
          (this.state = j.ENABLED),
            this.intervalId ||
              (this.intervalId = setInterval(this.updateGain.bind(this), eC));
        }
        disable() {
          (this.state = j.DISABLED),
            this.intervalId &&
              (clearInterval(this.intervalId), (this.intervalId = null));
        }
        apply(e) {
          if (!e) {
            this.disable(), (this.gainNode.gain.value = 1);
            return;
          }
          this.gainNode.gain.value = 0;
          let { inStart: t, inStop: n, outStart: r, outStop: i } = e;
          (this.inStart = t),
            (this.inStop = n),
            (this.outStart = r),
            (this.outStop = i),
            this.enable();
        }
        constructor(e, t, n) {
          (0, K._)(this, "audioElement", void 0),
            (0, K._)(this, "audioContext", void 0),
            (0, K._)(this, "sourceNode", void 0),
            (0, K._)(this, "gainNode", void 0),
            (0, K._)(this, "state", j.IDLE),
            (0, K._)(this, "inStart", 0),
            (0, K._)(this, "inStop", 0),
            (0, K._)(this, "outStart", 0),
            (0, K._)(this, "outStop", 0),
            (0, K._)(this, "intervalId", null),
            (this.audioElement = e),
            (this.audioContext = t),
            (this.sourceNode = n),
            (this.gainNode = t.createGain()),
            this.sourceNode.connect(this.gainNode),
            this.gainNode.connect(this.audioContext.destination);
        }
      }
      class eI {
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
            : e.state) === O.SUSPENDED &&
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
              this.equalizer = new ej(this.audioContext, this.sourceNode, e);
            }
            this.options.useFade &&
              (this.fade = new eT(e, this.audioContext, this.sourceNode));
          }
        }
        apply(e) {
          let { hooks: t, playback: n } = e;
          this.audioElement || this.initializeContext(e.playback.source),
            n.state.playerState.event.onChange(() => {
              if (this.fade)
                switch (n.state.playerState.event.value) {
                  case N.KX.PLAYING:
                    this.fade.enable();
                    break;
                  case N.KX.PAUSED:
                  case N.KX.STOP:
                    this.fade.disable();
                }
            }),
            t.beforeMediaStartPlaying.tapPromise("WebAudioPlugin", () => {
              var e, t;
              let r;
              let { currentEntity: i } = n.state.queueState,
                o = null === (e = i.value) || void 0 === e ? void 0 : e.entity;
              return (
                (0, V.YM)(o) &&
                  (r =
                    null === (t = o.data.meta.smartPreviewParams) ||
                    void 0 === t
                      ? void 0
                      : t.fade),
                (0, V.OV)(o) && (r = o.data.meta.fade),
                this.fade && this.fade.apply(r),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, K._)(this, "options", void 0),
            (0, K._)(this, "audioElement", void 0),
            (0, K._)(this, "audioContext", void 0),
            (0, K._)(this, "sourceNode", void 0),
            (0, K._)(this, "analyser", void 0),
            (0, K._)(this, "equalizer", void 0),
            (0, K._)(this, "fade", void 0),
            (this.options = e);
        }
      }
      var eL = n(3429),
        eN = { WEB: "WEB", ANDROID: "ANDROID", IOS: "IOS", WEB_TV: "WEB_TV" },
        eD = { NONE: "NONE", ONE: "ONE", ALL: "ALL" },
        eM = { DO_NOT_INTERCEPT_BY_DEFAULT: "DO_NOT_INTERCEPT_BY_DEFAULT" },
        eq = "BASED_ON_ENTITY_BY_DEFAULT",
        eB = {
          ARTIST: "ARTIST",
          PLAYLIST: "PLAYLIST",
          ALBUM: "ALBUM",
          RADIO: "RADIO",
          VARIOUS: "VARIOUS",
          GENERATIVE: "GENERATIVE",
        },
        ez = function (e, t) {
          return {
            device_id: e,
            version: Math.floor(0x7fffffffffffffff * Math.random()) + 0,
            timestamp_ms: void 0 !== t ? t : Date.now(),
          };
        };
      function eF(e) {
        var t = ez(e, 0);
        return {
          player_state: {
            player_queue: {
              current_playable_index: -1,
              entity_id: "",
              entity_type: eB.VARIOUS,
              playable_list: [],
              options: { repeat_mode: eD.NONE },
              shuffle_optional: null,
              entity_context: eq,
              version: t,
              from_optional: "",
              initial_entity_optional: null,
              adding_options_optional: null,
              queue: null,
            },
            status: {
              duration_ms: 0,
              paused: !0,
              playback_speed: 1,
              progress_ms: 0,
              version: t,
            },
            player_queue_inject_optional: null,
          },
          devices: [],
          active_device_id_optional: "",
        };
      }
      function eH(e) {
        return JSON.parse(JSON.stringify(e));
      }
      function eU(e, t, n) {
        return (
          void 0 === e && (e = !1),
          !!e || !t || !n || Number(t.timestamp_ms) < Number(n.timestamp_ms)
        );
      }
      function eW(e) {
        var t = e.active_device_id_optional;
        return e.devices.find(function (e) {
          return e.info.device_id === t;
        });
      }
      var eV = (function () {
        function e(e) {
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "prevState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "diff", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "options", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "diffCalculators", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "lastRemoteDeviceChangingState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "lastRemoteDeviceChangingStateTS", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            (this.options = e),
            (this.state = eF(e.device.device_id)),
            (this.prevState = eF(e.device.device_id)),
            (this.diffCalculators = {
              active_device_id_optional:
                this.calculateActiveDeviceDiff.bind(this),
              devices: this.calculateDevicesDiff.bind(this),
              player_state: {
                player_queue: {
                  entity_id: this.calculateEntityIdDiff.bind(this),
                  entity_type: this.calculateEntityTypeDiff.bind(this),
                  entity_context: function () {},
                  current_playable_index:
                    this.calculateCurrentPlayableIndexDiff.bind(this),
                  playable_list: this.calculatePlayableListDiff.bind(this),
                  options: { repeat_mode: this.calculateRepeatDiff.bind(this) },
                  version: function () {},
                  shuffle_optional: this.calculcateShuffleDiff.bind(this),
                  from_optional: function () {},
                  initial_entity_optional: function () {},
                  adding_options_optional: function () {},
                  queue: function () {},
                },
                status: {
                  progress_ms: this.calculateProgressMsDiff.bind(this),
                  duration_ms: function () {},
                  paused: this.calculatePausedDiff.bind(this),
                  playback_speed: this.calculateSpeedDiff.bind(this),
                  version: function () {},
                },
                player_queue_inject_optional: function () {},
              },
            });
        }
        return (
          Object.defineProperty(e.prototype, "setState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) &&
                  (this.state[t] = e[t]);
            },
          }),
          Object.defineProperty(e.prototype, "getState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return eH(this.state);
            },
          }),
          Object.defineProperty(e.prototype, "clearPrevState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.options.device.device_id;
              this.prevState = eF(e);
            },
          }),
          Object.defineProperty(e.prototype, "getPrevState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return eH(this.prevState);
            },
          }),
          Object.defineProperty(e.prototype, "calculateDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = [this.diffCalculators];
              this.diff = {};
              var n = this.options,
                r = n.diffWhileActiveOnly,
                i = n.device.device_id;
              try {
                var o = e.newState.active_device_id_optional,
                  a = e.skipDeviceActivityCheck,
                  l = e.isSetNewState,
                  u = this.state.active_device_id_optional;
                if (!(void 0 !== a && a) && r && i !== u && i !== o)
                  this.calculateActiveDeviceDiff(e);
                else {
                  for (; t.length > 0; )
                    for (
                      var s = t.pop(), c = 0, f = Object.keys(s);
                      c < f.length;
                      c++
                    ) {
                      var d = s[f[c]];
                      "function" == typeof d ? d(e) : t.push(d);
                    }
                  var p = Object.keys(this.diff);
                  if ((void 0 === l || l) && p.length) {
                    var v = eH(this.state);
                    p.forEach(function (t) {
                      v[t] = e.newState[t];
                    }),
                      (this.prevState = eH(this.state)),
                      (this.state = v);
                  }
                }
                return eH(this.diff);
              } catch (e) {
                return {};
              }
            },
          }),
          Object.defineProperty(e.prototype, "calculateActiveDeviceDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.active_device_id_optional,
                n = this.state.active_device_id_optional;
              void 0 !== t &&
                t !== n &&
                (this.diff.active_device_id_optional = t);
            },
          }),
          Object.defineProperty(e.prototype, "calculateDevicesDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState,
                n = e.skipVersionCompare,
                r = (function (e, t, n) {
                  if (!t || !n || t.info.device_id !== n.info.device_id)
                    return { isVolumeChanged: !1, isNewVersion: !1 };
                  var r = t.volume_info,
                    i = n.volume_info,
                    o = eU(e, r.version, i.version);
                  return {
                    isVolumeChanged:
                      r.volume !== i.volume &&
                      Math.abs(i.volume - r.volume) > 0.02,
                    isNewVersion: o,
                  };
                })(void 0 !== n && n, eW(this.state), eW(t)),
                i = r.isVolumeChanged,
                o = r.isNewVersion,
                a = (function (e, t) {
                  var n = { isAnyoneConnectionChanged: !1 };
                  if (e.length < t.length)
                    for (
                      var r = function (t) {
                          e.find(function (e) {
                            return e.info.device_id === t.info.device_id;
                          }) ||
                            (n = {
                              isAnyoneConnectionChanged: !0,
                              changedConnectionStatusDevice: t,
                            });
                        },
                        i = 0;
                      i < t.length;
                      i++
                    ) {
                      var o = t[i];
                      r(o);
                    }
                  else if (e.length === t.length)
                    for (
                      var a = function (t) {
                          var r = e.find(function (e) {
                            return e.info.device_id === t.info.device_id;
                          });
                          r &&
                            r.is_offline !== t.is_offline &&
                            (n = {
                              isAnyoneConnectionChanged: !0,
                              changedConnectionStatusDevice: t,
                            });
                        },
                        l = 0;
                      l < t.length;
                      l++
                    ) {
                      var o = t[l];
                      a(o);
                    }
                  return n;
                })(this.state.devices, t.devices).isAnyoneConnectionChanged;
              ((i && o) || a) && (this.diff.devices = t.devices);
            },
          }),
          Object.defineProperty(e.prototype, "calculateEntityIdDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                n = e.skipVersionCompare,
                r = t.entity_id,
                i = t.version,
                o = this.state.player_state.player_queue,
                a = o.entity_id;
              eU(void 0 !== n && n, o.version, i) &&
                a !== r &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.entity_id = r));
            },
          }),
          Object.defineProperty(e.prototype, "calculateEntityTypeDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                n = t.entity_type,
                r = t.version,
                i = e.skipVersionCompare,
                o = this.state.player_state.player_queue,
                a = o.entity_type;
              eU(void 0 !== i && i, o.version, r) &&
                a !== n &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.entity_type = n));
            },
          }),
          Object.defineProperty(
            e.prototype,
            "calculateCurrentPlayableIndexDiff",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  n = e.skipVersionCompare,
                  r = t.entity_id,
                  i = t.current_playable_index,
                  o = t.version,
                  a = this.state.player_state.player_queue,
                  l = a.entity_id,
                  u = a.current_playable_index;
                eU(void 0 !== n && n, a.version, o) &&
                  l === r &&
                  u !== i &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue.current_playable_index =
                      i));
              },
            },
          ),
          Object.defineProperty(e.prototype, "calculatePlayableListDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                n = e.skipVersionCompare,
                r = t.playable_list,
                i = t.version,
                o = this.state.player_state.player_queue,
                a = o.playable_list,
                l = eU(void 0 !== n && n, o.version, i),
                u = (function (e, t) {
                  var n, r;
                  if (e.length > 0 && t.length > 0 && e.length === t.length) {
                    for (var i = e.length, o = 0; o < i; o++)
                      if (
                        t[o] &&
                        (null === (n = e[o]) || void 0 === n
                          ? void 0
                          : n.playable_id) !==
                          (null === (r = t[o]) || void 0 === r
                            ? void 0
                            : r.playable_id)
                      )
                        return !1;
                    return !0;
                  }
                  return !1;
                })(a, r);
              l &&
                !u &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.playable_list = r));
            },
          }),
          Object.defineProperty(e.prototype, "calculcateShuffleDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                n = t.shuffle_optional,
                r = t.version,
                i = e.skipVersionCompare,
                o = this.state.player_state.player_queue,
                a = o.shuffle_optional,
                l = eU(void 0 !== i && i, o.version, r),
                u = (function (e, t) {
                  if (!e && !t) return !0;
                  if (
                    e &&
                    t &&
                    e.playable_indices.length === t.playable_indices.length
                  ) {
                    for (var n = !0, r = 0; r <= e.playable_indices.length; r++)
                      if (e.playable_indices[r] !== t.playable_indices[r]) {
                        n = !1;
                        break;
                      }
                    return n;
                  }
                  return !1;
                })(a, n);
              l &&
                !u &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (n
                    ? (this.diff.player_state.player_queue.shuffle_optional = n)
                    : (this.diff.player_state.player_queue.shuffle_optional = {
                        playable_indices: [],
                      })));
            },
          }),
          Object.defineProperty(e.prototype, "calculateRepeatDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                n = t.options,
                r = t.version,
                i = e.skipVersionCompare,
                o = n.repeat_mode,
                a = this.state.player_state.player_queue,
                l = a.options,
                u = a.version,
                s = l.repeat_mode;
              eU(void 0 !== i && i, u, r) &&
                s !== o &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.options = n));
            },
          }),
          Object.defineProperty(e.prototype, "calculateProgressMsDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t,
                n,
                r = e.newState.player_state.status,
                i = e.skipVersionCompare,
                o = r.progress_ms,
                a = r.version,
                l = this.state.player_state.status,
                u = l.progress_ms,
                s = eU(void 0 !== i && i, l.version, a),
                c =
                  (t = Number(o)) !== (n = Number(u)) &&
                  (n < 1500 || Math.abs(t - n) > 1e3);
              s &&
                c &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.progress_ms = o));
            },
          }),
          Object.defineProperty(e.prototype, "calculateSpeedDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.status,
                n = t.playback_speed,
                r = t.version,
                i = e.skipVersionCompare,
                o = this.state.player_state.status,
                a = o.playback_speed;
              eU(void 0 !== i && i, o.version, r) &&
                a !== n &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.playback_speed = n));
            },
          }),
          Object.defineProperty(e.prototype, "calculatePausedDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.status,
                n = e.skipVersionCompare,
                r = t.paused,
                i = t.version,
                o = this.state.player_state.status,
                a = o.paused;
              eU(void 0 !== n && n, o.version, i) &&
                a !== r &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.paused = r));
            },
          }),
          Object.defineProperty(e.prototype, "initPlayerState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              this.diff.player_state || (this.diff.player_state = {}),
                e &&
                  !this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue = {}),
                t &&
                  !this.diff.player_state.status &&
                  (this.diff.player_state.status = {});
            },
          }),
          Object.defineProperty(
            e.prototype,
            "updateLastRemoteDeviceChangingState",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t,
                  n = e.player_state,
                  r = n.player_queue.version,
                  i = n.status.version,
                  o = e.devices,
                  a = e.active_device_id_optional,
                  l = this.options.device.device_id,
                  u = [r, i],
                  s = o.find(function (e) {
                    return e.info.device_id === a;
                  });
                void 0 !== s && u.push(s.volume_info.version);
                var c = u
                  .filter(function (e) {
                    return 0 !== Number(null == e ? void 0 : e.timestamp_ms);
                  })
                  .filter(function (e) {
                    return (
                      o.find(function (t) {
                        return (
                          t.info.device_id ===
                          (null == e ? void 0 : e.device_id)
                        );
                      }) && (null == e ? void 0 : e.device_id) !== l
                    );
                  });
                if (c.length > 0) {
                  var f = c.sort(function (e, t) {
                      return (
                        Number(null == t ? void 0 : t.timestamp_ms) -
                        Number(null == e ? void 0 : e.timestamp_ms)
                      );
                    })[0],
                    d = o.find(function (e) {
                      return (
                        e.info.device_id === (null == f ? void 0 : f.device_id)
                      );
                    });
                  this.lastRemoteDeviceChangingState &&
                    d &&
                    this.lastRemoteDeviceChangingState.info.device_id ===
                      d.info.device_id &&
                    !this.lastRemoteDeviceChangingState.is_offline &&
                    d.is_offline &&
                    (this.lastRemoteDeviceChangingState = eH(d)),
                    ((void 0 === this.lastRemoteDeviceChangingState && d) ||
                      (this.lastRemoteDeviceChangingState &&
                        d &&
                        this.lastRemoteDeviceChangingState.info.device_id !==
                          d.info.device_id) ||
                      (this.lastRemoteDeviceChangingState &&
                        d &&
                        this.lastRemoteDeviceChangingState.info.device_id ===
                          d.info.device_id &&
                        this.lastRemoteDeviceChangingState.is_offline &&
                        !d.is_offline &&
                        !this.diff.devices)) &&
                      f &&
                      ((this.lastRemoteDeviceChangingState = eH(d)),
                      (this.lastRemoteDeviceChangingStateTS = Number(
                        f.timestamp_ms,
                      )),
                      (t = {
                        device: eH(d),
                        timestampMs: Number(f.timestamp_ms),
                      }));
                }
                return t;
              },
            },
          ),
          Object.defineProperty(
            e.prototype,
            "getLastRemoteDeviceChangingState",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return {
                  device: this.lastRemoteDeviceChangingState,
                  timestampMs: this.lastRemoteDeviceChangingStateTS,
                };
              },
            },
          ),
          Object.defineProperty(e.prototype, "getOnlineRemoteDevices", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.state,
                t = e.devices,
                n = e.active_device_id_optional;
              return t.filter(function (e) {
                var t = [eN.ANDROID, eN.IOS, eN.WEB].includes(e.info.type);
                return !e.is_offline && e.info.device_id !== n && t;
              });
            },
          }),
          e
        );
      })();
      ((p = A || (A = {})).PRODUCTION = "ynison.music.yandex.ru"),
        (p.QA = "qa.ynison.music.yandex.ru"),
        ((v = C || (C = {})).CONNECTING = "CONNECTING"),
        (v.CONNECTED = "CONNECTED"),
        (v.DISCONNECTED = "DISCONNECTED"),
        (v.WAITING_FOR_RECONNECT = "WAITING_FOR_RECONNECT"),
        (v.READY_TO_RECONNECT = "READY_TO_RECONNECT"),
        ((h = T || (T = {})).RECIEVE_MESSAGE = "RECIEVE_MESSAGE"),
        (h.REDIRECTOR_ERROR = "REDIRECTOR_ERROR"),
        (h.HUB_ERROR = "HUB_ERROR");
      var eY = n(53352);
      ((y = I || (I = {})).ynisonBackoffMillis = "ynison-backoff-millis"),
        (y.ynisonErrorCode = "ynison-error-code"),
        (y.ynisonGoAwayForSeconds = "ynison-go-away-for-seconds");
      var eK = n(9626),
        eG =
          ((m = function (e, t) {
            return (m =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = e;
            }
            m(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        eZ = function () {
          return (eZ =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        eX = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, r = Object.getOwnPropertySymbols(e);
              i < r.length;
              i++
            )
              0 > t.indexOf(r[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          return n;
        },
        eQ = (function (e) {
          function t(n, r) {
            void 0 === r && (r = {});
            var i = this,
              o = r.code,
              a = eX(r, ["code"]);
            return (
              Object.defineProperty(
                (i =
                  e.call(
                    this,
                    n,
                    eZ({ code: void 0 === o ? "E_HUB_EXCEPTION" : o }, a),
                  ) || this),
                "name",
                {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: "HubException",
                },
              ),
              Object.setPrototypeOf(i, t.prototype),
              i
            );
          }
          return eG(t, e), t;
        })(eK.y),
        eJ = n(88125),
        e$ = function (e) {
          Object.defineProperty(this, "redirectorResponse", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "connectionState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.redirectorResponse = new eJ.wi(e.redirectorResponse)),
            (this.connectionState = new eJ.wi(e.connectionState));
        },
        e0 =
          ((g = function (e, t) {
            return (g =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = e;
            }
            g(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        e1 = function () {
          return (e1 =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        e2 = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, r = Object.getOwnPropertySymbols(e);
              i < r.length;
              i++
            )
              0 > t.indexOf(r[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          return n;
        },
        e3 = (function (e) {
          function t(n, r) {
            void 0 === r && (r = {});
            var i = this,
              o = r.code,
              a = e2(r, ["code"]);
            return (
              Object.defineProperty(
                (i =
                  e.call(
                    this,
                    n,
                    e1(
                      { code: void 0 === o ? "E_REDIRECTOR_EXCEPTION" : o },
                      a,
                    ),
                  ) || this),
                "name",
                {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: "RedirectorException",
                },
              ),
              Object.setPrototypeOf(i, t.prototype),
              i
            );
          }
          return e0(t, e), t;
        })(eK.y);
      function e5(e) {
        var t;
        switch (e) {
          case eN.WEB:
            t = 1;
            break;
          case eN.WEB_TV:
            t = 5;
            break;
          default:
            t = 1;
        }
        return t;
      }
      function e8(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      ((b = L || (L = {})).ynisonDeviceId = "Ynison-Device-Id"),
        (b.ynisonRedirectTicket = "Ynison-Redirect-Ticket"),
        (b.ynisonSessionId = "Ynison-Session-Id"),
        (b.ynisonDeviceInfo = "Ynison-Device-Info");
      var e4 = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(l) {
            return function (u) {
              return (function (l) {
                if (n) throw TypeError("Generator is already executing.");
                for (; o && ((o = 0), l[0] && (a = 0)), a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & l[0]
                            ? r.return
                            : l[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                        !(i = i.call(r, l[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                      case 0:
                      case 1:
                        i = l;
                        break;
                      case 4:
                        return a.label++, { value: l[1], done: !1 };
                      case 5:
                        a.label++, (r = l[1]), (l = [0]);
                        continue;
                      case 7:
                        (l = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === l[0] || 2 === l[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === l[0] &&
                          (!i || (l[1] > i[0] && l[1] < i[3]))
                        ) {
                          a.label = l[1];
                          break;
                        }
                        if (6 === l[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = l);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(l);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    l = t.call(e, a);
                  } catch (e) {
                    (l = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              })([l, u]);
            };
          }
        },
        e6 = (function () {
          function e(e) {
            Object.defineProperty(this, "device", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "connectionConfig", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.device = e.device),
              (this.connectionConfig = e.connectionConfig);
          }
          return (
            Object.defineProperty(e.prototype, "getHub", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t, n, r, i;
                return (
                  (t = this),
                  (n = void 0),
                  (r = void 0),
                  (i = function () {
                    var t = this;
                    return e4(this, function (n) {
                      return [
                        2,
                        new Promise(function (n, r) {
                          var i,
                            o,
                            a,
                            l,
                            u,
                            s,
                            c = e.oauth,
                            f =
                              ((a = (i = t.device).device_id),
                              (l = i.app_name),
                              (u = i.app_version),
                              (s = e5(i.type)),
                              ((o = {})[L.ynisonDeviceId] = a),
                              (o[L.ynisonDeviceInfo] = JSON.stringify({
                                app_name: l,
                                app_version: u,
                                type: s,
                              })),
                              o);
                          c && (f.authorization = "OAuth ".concat(c));
                          var d = new WebSocket(
                              Object.values(t.connectionConfig).join(""),
                              [
                                "Bearer",
                                "v2",
                                encodeURIComponent(JSON.stringify(f)),
                              ],
                            ),
                            p = function (e) {
                              try {
                                var t = JSON.parse(e.data);
                                "error" in t
                                  ? (d.close(),
                                    r(
                                      new e3("Error message from redirector", {
                                        data: { redirectorResponse: t.error },
                                      }),
                                    ))
                                  : (d.close(), n(t));
                              } catch (e) {
                                new e3(
                                  "Error while processing message from redirector",
                                  {
                                    data: { redirectorResponse: {} },
                                    cause: e8(e),
                                  },
                                );
                              }
                            },
                            v = function () {
                              r(
                                new e3("Error in connection to redirector", {
                                  data: { redirectorResponse: {} },
                                }),
                              );
                            },
                            h = function () {
                              d.removeEventListener("message", p),
                                d.removeEventListener("error", v),
                                d.removeEventListener("close", h);
                            };
                          d.addEventListener("message", p),
                            d.addEventListener("error", v),
                            d.addEventListener("close", h);
                        }),
                      ];
                    });
                  }),
                  new (r || (r = Promise))(function (e, o) {
                    function a(e) {
                      try {
                        u(i.next(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function l(e) {
                      try {
                        u(i.throw(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function u(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value) instanceof r
                            ? n
                            : new r(function (e) {
                                e(n);
                              })
                          ).then(a, l);
                    }
                    u((i = i.apply(t, n || [])).next());
                  })
                );
              },
            }),
            e
          );
        })(),
        e9 = function () {
          return (e9 =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        e7 = function (e, t) {
          var n = (0, eL.Z)(),
            r = e9(e9({}, e), { rid: n });
          if (t) {
            var i = t.player_action_timestamp_ms,
              o = void 0 === i ? Date.now() : i,
              a = t.activity_interception_type,
              l = void 0 === a ? eM.DO_NOT_INTERCEPT_BY_DEFAULT : a;
            (r.player_action_timestamp_ms = o),
              (r.activity_interception_type = l);
          } else
            (r.player_action_timestamp_ms = Date.now()),
              (r.activity_interception_type = eM.DO_NOT_INTERCEPT_BY_DEFAULT);
          return r;
        },
        te = function () {
          return (te =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        tt = (function () {
          function e(e) {
            var t = this;
            Object.defineProperty(this, "connectorConfig", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "socket", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "emitter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new eY.TinyEmitter(),
              }),
              Object.defineProperty(this, "redirectorSocket", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "reconnectTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "reconnectAttempts", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new e$({
                  redirectorResponse: null,
                  connectionState: C.DISCONNECTED,
                }),
              }),
              (this.connectorConfig = e.config),
              (this.redirectorSocket = new e6({
                device: this.connectorConfig.device,
                connectionConfig:
                  this.connectorConfig.redirectorConnectionConfig,
              })),
              this.state.connectionState.onChange(function () {
                t.state.connectionState.value === C.DISCONNECTED &&
                  t.socket &&
                  (t.socket.close(), (t.socket = null));
              });
          }
          return (
            Object.defineProperty(e.prototype, "config", {
              get: function () {
                return eH(this.connectorConfig);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "updateFullState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var n = te({}, e);
                (n.player_state.player_queue.version = ez(
                  this.connectorConfig.device.device_id,
                  0,
                )),
                  (n.player_state.status.version = ez(
                    this.connectorConfig.device.device_id,
                    0,
                  ));
                var r = e7(
                  { update_full_state: n },
                  te({ player_action_timestamp_ms: 0 }, t),
                );
                this.sendRequest(r);
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayingStatus", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var n = te({}, e);
                n.playing_status.version = ez(
                  this.connectorConfig.device.device_id,
                );
                var r = e7({ update_playing_status: n }, t);
                this.sendRequest(r);
              },
            }),
            Object.defineProperty(e.prototype, "updateActiveDevice", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var n = e7({ update_active_device: e }, t);
                this.sendRequest(n);
              },
            }),
            Object.defineProperty(e.prototype, "updateSessionParams", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var n = e7({ update_session_params: e }, t);
                this.sendRequest(n);
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayerState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var n = te({}, e);
                (n.player_state.player_queue.version = ez(
                  this.connectorConfig.device.device_id,
                )),
                  (n.player_state.status.version = ez(
                    this.connectorConfig.device.device_id,
                  ));
                var r = e7({ update_player_state: n }, t);
                this.sendRequest(r);
              },
            }),
            Object.defineProperty(e.prototype, "updateVolumeInfo", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var n = te({}, e);
                n.volume_info.version = ez(
                  this.connectorConfig.device.device_id,
                );
                var r = e7({ update_volume_info: n }, t);
                this.sendRequest(r);
              },
            }),
            Object.defineProperty(e.prototype, "connect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this,
                  n = e.oauth,
                  r = void 0 === n ? null : n;
                "string" == typeof r && (this.connectorConfig.oauth = r),
                  [C.DISCONNECTED, C.READY_TO_RECONNECT].includes(
                    this.state.connectionState.value,
                  ) &&
                    ((this.state.connectionState.value = C.CONNECTING),
                    this.redirectorSocket
                      .getHub({ oauth: this.connectorConfig.oauth })
                      .then(function (e) {
                        (t.state.redirectorResponse.value = e),
                          t.connectToHub();
                      })
                      .catch(function (e) {
                        if (
                          ((t.state.connectionState.value = C.DISCONNECTED),
                          !(
                            16 === e.data.redirectorResponse.grpc_code &&
                            401 === e.data.redirectorResponse.http_code
                          ) &&
                            t.reconnectAttempts <
                              t.connectorConfig.reconnectAttemptsLimit)
                        ) {
                          var n =
                            e.data.redirectorResponse.extra_headers &&
                            e.data.redirectorResponse.extra_headers[
                              I.ynisonGoAwayForSeconds
                            ]
                              ? 1e3 *
                                Number(
                                  e.data.redirectorResponse.extra_headers[
                                    I.ynisonGoAwayForSeconds
                                  ],
                                )
                              : t.connectorConfig.defaultReconnectTimeoutMS;
                          t.reconnect({ timeout: n });
                        } else
                          (t.reconnectAttempts = 0),
                            t.emitter.emit(T.REDIRECTOR_ERROR, e);
                      }));
              },
            }),
            Object.defineProperty(e.prototype, "disconnect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.reconnectTimeout &&
                  (clearTimeout(this.reconnectTimeout),
                  (this.reconnectTimeout = null)),
                  (this.reconnectAttempts = 0),
                  (this.state.connectionState.value = C.DISCONNECTED);
              },
            }),
            Object.defineProperty(e.prototype, "on", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.emitter.on(e, t);
              },
            }),
            Object.defineProperty(e.prototype, "off", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.emitter.off(e, t);
              },
            }),
            Object.defineProperty(e.prototype, "connectToHub", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this,
                  t = this.connectorConfig,
                  n = t.oauth,
                  r = t.device,
                  i = this.connectorConfig.hubConnectionConfig,
                  o = i.protocol,
                  a = i.path;
                if (this.state.redirectorResponse.value) {
                  var l,
                    u,
                    s,
                    c,
                    f,
                    d,
                    p,
                    v,
                    h,
                    y = this.state.redirectorResponse.value.host,
                    m =
                      ((l = this.state.redirectorResponse.value),
                      (s = r.type),
                      (c = r.app_name),
                      (f = r.app_version),
                      (d = r.device_id),
                      (p = l.session_id),
                      (v = l.redirect_ticket),
                      (h = e5(s)),
                      ((u = {})[L.ynisonDeviceId] = d),
                      (u[L.ynisonRedirectTicket] = v),
                      (u[L.ynisonSessionId] = p),
                      (u[L.ynisonDeviceInfo] = JSON.stringify({
                        app_name: c,
                        app_version: f,
                        type: h,
                      })),
                      u);
                  n && (m.authorization = "OAuth ".concat(n));
                  var g = "".concat(o).concat(y).concat(a),
                    b = ["Bearer", "v2", encodeURIComponent(JSON.stringify(m))];
                  (this.socket = new WebSocket(g, b)),
                    this.socket.addEventListener("message", function (t) {
                      e.onRecieveMessage(t);
                    }),
                    this.socket.addEventListener("error", function () {
                      (e.state.connectionState.value = C.DISCONNECTED),
                        e.reconnectAttempts <
                        e.connectorConfig.reconnectAttemptsLimit
                          ? e.reconnect()
                          : ((e.reconnectAttempts = 0),
                            e.emitter.emit(
                              T.HUB_ERROR,
                              new eQ("Error in connection to hub", {
                                data: {
                                  redirectorResponse: e.state.redirectorResponse
                                    .value
                                    ? e.state.redirectorResponse.value
                                    : {},
                                  hubResponse: {},
                                },
                              }),
                            ));
                    }),
                    this.socket.addEventListener("open", function () {
                      e.state.connectionState.value = C.CONNECTED;
                    });
                }
              },
            }),
            Object.defineProperty(e.prototype, "reconnect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                void 0 === e && (e = {});
                var n = e.timeout,
                  r =
                    void 0 === n
                      ? this.connectorConfig.defaultReconnectTimeoutMS
                      : n;
                this.state.connectionState.value === C.DISCONNECTED &&
                  ((this.reconnectAttempts += 1),
                  (this.reconnectTimeout = setTimeout(function () {
                    (t.state.connectionState.value = C.READY_TO_RECONNECT),
                      t.connect({});
                  }, r)),
                  (this.state.connectionState.value = C.WAITING_FOR_RECONNECT));
              },
            }),
            Object.defineProperty(e.prototype, "onRecieveMessage", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                try {
                  var t = JSON.parse(e.data);
                  if ("error" in t) {
                    if (
                      ((this.state.connectionState.value = C.DISCONNECTED),
                      this.reconnectAttempts <
                        this.connectorConfig.reconnectAttemptsLimit)
                    ) {
                      var n = t.error.details[I.ynisonGoAwayForSeconds]
                        ? 1e3 *
                          Number(t.error.details[I.ynisonGoAwayForSeconds])
                        : this.connectorConfig.defaultReconnectTimeoutMS;
                      this.reconnect({ timeout: n });
                    } else
                      (this.reconnectAttempts = 0),
                        this.emitter.emit(
                          T.HUB_ERROR,
                          new eQ("Error message from hub", {
                            data: {
                              redirectorResponse: this.state.redirectorResponse
                                .value
                                ? this.state.redirectorResponse.value
                                : {},
                              hubResponse: t.error,
                            },
                          }),
                        );
                  } else
                    (this.reconnectAttempts = 0),
                      this.emitter.emit(T.RECIEVE_MESSAGE, { rawData: t });
                } catch (e) {
                  this.emitter.emit(
                    T.HUB_ERROR,
                    new eQ("Error while processing message from hub", {
                      data: {
                        redirectorResponse: this.state.redirectorResponse.value
                          ? this.state.redirectorResponse.value
                          : {},
                        hubResponse: {},
                      },
                      cause: e8(e),
                    }),
                  );
                }
              },
            }),
            Object.defineProperty(e.prototype, "sendRequest", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                null !== this.socket &&
                  this.state.connectionState.value === C.CONNECTED &&
                  this.socket.send(JSON.stringify(e));
              },
            }),
            e
          );
        })(),
        tn = n(31436);
      let tr = {
          player_state: {
            player_queue: {
              current_playable_index: -1,
              entity_id: "",
              entity_type: eB.VARIOUS,
              playable_list: [],
              options: { repeat_mode: eD.NONE },
              shuffle_optional: null,
              entity_context: eq,
              version: ez("", 0),
              from_optional: null,
              initial_entity_optional: null,
              adding_options_optional: null,
              queue: null,
            },
            status: {
              duration_ms: 0,
              paused: !0,
              playback_speed: 1,
              progress_ms: 0,
              version: ez("", 0),
            },
            player_queue_inject_optional: null,
          },
          devices: [],
          active_device_id_optional: "",
        },
        ti = (e) => (0, tn.Z)(tr, e);
      class to extends ea.y {
        constructor(e, { code: t = "E_YNISON", ...n } = {}) {
          super(e, { code: t, ...n }),
            (0, K._)(this, "name", "YnisonException"),
            Object.setPrototypeOf(this, to.prototype);
        }
      }
      let ta = (e, t) => {
          let n = t && "object" == typeof t && "cause" in t && t.cause,
            r = (t && "object" == typeof t && "data" in t && t.data) || {};
          return new to("[YnisonException] ".concat(e), {
            cause: n,
            data: { ...r, originalError: t || "" },
          });
        },
        tl = (e, t) => ({
          player_state: t,
          device: {
            volume: 1,
            capabilities: {
              can_be_player: !0,
              can_be_remote_controller: !1,
              volume_granularity: 16,
            },
            info: e,
            volume_info: { volume: 0, version: null },
            is_shadow: !0,
          },
          is_currently_active: !1,
          sync_state_from_eov_optional: null,
        });
      class tu {
        push(e) {
          this.callbacks.push(e);
        }
        exec() {
          let e = [];
          for (let t of this.callbacks)
            if (0 === e.length) e.push(t());
            else {
              let n = e[e.length - 1].then(t);
              e.push(n);
            }
          return Promise.allSettled(e).then(() => Promise.resolve());
        }
        constructor() {
          (0, K._)(this, "callbacks", []);
        }
      }
      let ts = (e) => {
          switch (e) {
            case eD.ONE:
              return N.zq.ONE;
            case eD.ALL:
              return N.zq.CONTEXT;
            default:
              return N.zq.NONE;
          }
        },
        tc = (e) => {
          switch (e) {
            case N.zq.ONE:
              return eD.ONE;
            case N.zq.CONTEXT:
              return eD.ALL;
            default:
              return eD.NONE;
          }
        },
        tf = (e) => {
          var t, n, r, i;
          let o =
              (null === (n = e.player_state) || void 0 === n
                ? void 0
                : null === (t = n.player_queue) || void 0 === t
                  ? void 0
                  : t.current_playable_index) || 0,
            a = ((null === (i = e.player_state) || void 0 === i
              ? void 0
              : null === (r = i.player_queue) || void 0 === r
                ? void 0
                : r.playable_list) || [])[o];
          return a ? { entityId: a.playable_id } : { index: 0 };
        },
        td = (e) => ({ type: N.RX.Unloaded, meta: { id: e.playable_id } }),
        tp = (e) =>
          e
            .filter((e) => {
              let { playable_type: t, playable_id: n } = e;
              return "TRACK" === t && n;
            })
            .map(td),
        tv = (e) => {
          var t, n;
          let r =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = (null == r ? void 0 : r.playable_list) || [];
          return (
            r.from_optional ||
            (null === (n = i[0]) || void 0 === n ? void 0 : n.from) ||
            "embedded-radio"
          );
        },
        th = (e) => {
          var t;
          let n =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            r = null == n ? void 0 : n.entity_id;
          return "string" != typeof r
            ? null
            : { type: M.Ak.Album, from: tv(e), meta: { id: r } };
        },
        ty = (e) => {
          var t;
          let n =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            r = null == n ? void 0 : n.entity_id;
          return "string" != typeof r
            ? null
            : { type: M.Ak.Artist, from: tv(e), meta: { id: r } };
        },
        tm = (e) => {
          var t, n;
          let r =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            [i, o] =
              (null == r
                ? void 0
                : null === (n = r.entity_id) || void 0 === n
                  ? void 0
                  : n.split(" ")) || [];
          return i
            ? {
                type: M.Ak.Generative,
                from: tv(e),
                meta: { id: i, stream: o ? { id: i, url: o } : void 0 },
              }
            : null;
        },
        tg = (e) => "number" == typeof e && !Number.isNaN(e),
        tb = (e) => {
          var t;
          let n =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            r = null == n ? void 0 : n.entity_id,
            i = (null == n ? void 0 : n.playable_list) || [],
            o = tv(e);
          if ("string" != typeof r || !i.length) return null;
          let [a, l] = r.split(":").map((e) => Number(e));
          return tg(a) && tg(l)
            ? {
                type: M.Ak.Playlist,
                from: o,
                meta: { id: r, kind: l, owner: { uid: a } },
              }
            : { type: M.Ak.Various, from: o, meta: { id: r } };
        },
        t_ = (e) => {
          var t, n, r, i;
          let o =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            a = (null == o ? void 0 : o.playable_list) || [],
            l =
              null ===
                (i =
                  a[
                    null === (r = e.player_state) || void 0 === r
                      ? void 0
                      : null === (n = r.player_queue) || void 0 === n
                        ? void 0
                        : n.current_playable_index
                  ]) || void 0 === i
                ? void 0
                : i.playable_id;
          return l && a.length
            ? { type: M.Ak.Various, from: tv(e), meta: { id: l } }
            : null;
        },
        tE = (e) => {
          var t;
          let n =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            r = null == n ? void 0 : n.entity_id;
          return "string" != typeof r
            ? null
            : {
                type: M.Ak.Vibe,
                from: tv(e),
                seeds: r.split(","),
                includeTracksInResponse: !0,
                meta: { id: r },
              };
        },
        tx = (e) => {
          var t;
          let n =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            r = null == n ? void 0 : n.entity_type;
          if (!r) return null;
          switch (r) {
            case eB.ALBUM:
              return th(e);
            case eB.ARTIST:
              return ty(e);
            case eB.PLAYLIST:
              return tb(e);
            case eB.RADIO:
              return tE(e);
            case eB.GENERATIVE:
              return tm(e);
            case eB.VARIOUS:
              return t_(e);
            default:
              return null;
          }
        };
      class tw {
        applyYnisonDiff(e, t) {
          var n, r, i, o, a, l, u;
          let s = new tu();
          return (
            (null === (r = t.player_state) || void 0 === r
              ? void 0
              : null === (n = r.player_queue) || void 0 === n
                ? void 0
                : n.entity_id) && s.push(() => this.changeContext(e)),
            (null === (o = t.player_state) || void 0 === o
              ? void 0
              : null === (i = o.player_queue) || void 0 === i
                ? void 0
                : i.shuffle_optional) && s.push(() => this.changeShuffle(t)),
            (null === (l = t.player_state) || void 0 === l
              ? void 0
              : null === (a = l.player_queue) || void 0 === a
                ? void 0
                : a.options) && s.push(() => this.changeOptions(t)),
            (null === (u = t.player_state) || void 0 === u
              ? void 0
              : u.status) && s.push(() => this.changeStatus(t)),
            s.exec()
          );
        }
        changeOptions(e) {
          var t, n, r;
          let i = ts(
            null === (r = e.player_state) || void 0 === r
              ? void 0
              : null === (n = r.player_queue) || void 0 === n
                ? void 0
                : null === (t = n.options) || void 0 === t
                  ? void 0
                  : t.repeat_mode,
          );
          return this.playback.setRepeatMode(i), Promise.resolve();
        }
        changeShuffle(e) {
          var t, n;
          let r =
              null === (n = e.player_state) || void 0 === n
                ? void 0
                : null === (t = n.player_queue) || void 0 === t
                  ? void 0
                  : t.shuffle_optional,
            i = !!(
              r &&
              Array.isArray(r.playable_indices) &&
              r.playable_indices.length
            );
          return this.playback.setShuffle(i), Promise.resolve();
        }
        changeStatus(e) {
          var t, n, r, i;
          let o = new tu(),
            a = Number(
              null === (n = e.player_state) || void 0 === n
                ? void 0
                : null === (t = n.status) || void 0 === t
                  ? void 0
                  : t.playback_speed,
            ),
            l =
              Number(
                null === (i = e.player_state) || void 0 === i
                  ? void 0
                  : null === (r = i.status) || void 0 === r
                    ? void 0
                    : r.progress_ms,
              ) / 1e3;
          return (
            Number.isNaN(a) ||
              o.push(() =>
                this.playback.setSpeed(a).then(() => Promise.resolve()),
              ),
            Number.isNaN(l) ||
              o.push(() => {
                if (
                  this.playback.state.playerState.status.value === N.Xz.PLAYING
                )
                  return this.playback
                    .setProgress(l)
                    .then(() => Promise.resolve());
                let {
                  currentEntity: { value: e },
                } = this.playback.state.queueState;
                return e && (e.entity.startPosition = l), Promise.resolve();
              }),
            o.exec()
          );
        }
        changeContext(e) {
          let t = this.getContextParams(e);
          return t
            ? this.playback.setContext(t).catch((e) => {
                this.playback.hooks.afterError.promise(
                  ta("PlaybackSetContextError", e),
                );
              })
            : Promise.resolve();
        }
        getContextParams(e) {
          try {
            var t, n;
            let r = tx(e);
            if (!r) return null;
            let i = this.factory.createContext({ data: r }),
              o =
                null === (n = e.player_state) || void 0 === n
                  ? void 0
                  : null === (t = n.player_queue) || void 0 === t
                    ? void 0
                    : t.playable_list,
              a = Array.isArray(o) && o.length ? tp(o) : void 0,
              l = i.data.type !== M.Ak.Various,
              u = tf(e);
            return {
              context: i,
              entitiesData: a,
              loadContextMeta: l,
              queueParams: u,
            };
          } catch (e) {
            return (
              this.playback.hooks.afterError.promise(
                ta("GetContextParamsError", e),
              ),
              null
            );
          }
        }
        constructor(e, t) {
          (0, K._)(this, "factory", void 0),
            (0, K._)(this, "playback", void 0),
            (this.factory = e),
            (this.playback = t);
        }
      }
      class tk {
        apply(e) {
          var t, n, r, i, o;
          if (!this.variables.enableYnisonConnection) return;
          let { playback: a, hooks: l } = e,
            u = this.onMessageRecieved.bind(this),
            s = (e) => {
              l.afterError.promise(ta("RedirectorException", e));
            },
            c = (e) => {
              l.afterError.promise(ta("HubException", e));
            };
          (this.playbackController = new tw(this.factory, a)),
            null === (t = this.ynisonConnector) ||
              void 0 === t ||
              t.state.connectionState.onChange((e) => {
                e === C.CONNECTED && this.onConnected(this.getEmptyState(a));
              }),
            null === (n = this.ynisonConnector) ||
              void 0 === n ||
              n.on(T.RECIEVE_MESSAGE, u),
            null === (r = this.ynisonConnector) ||
              void 0 === r ||
              r.on(T.REDIRECTOR_ERROR, s),
            null === (i = this.ynisonConnector) ||
              void 0 === i ||
              i.on(T.HUB_ERROR, c),
            (this.ynisonUnsubscribe = () => {
              var e, t, n;
              null === (e = this.ynisonConnector) ||
                void 0 === e ||
                e.off(T.RECIEVE_MESSAGE, u),
                null === (t = this.ynisonConnector) ||
                  void 0 === t ||
                  t.off(T.REDIRECTOR_ERROR, s),
                null === (n = this.ynisonConnector) ||
                  void 0 === n ||
                  n.off(T.HUB_ERROR, c);
            }),
            l.beforeEntityChange.tapPromise("YnisonPlugin", () => {
              let {
                currentEntity: { value: e },
              } = a.state.queueState;
              return e && (e.entity.startPosition = null), Promise.resolve();
            }),
            null === (o = this.ynisonConnector) ||
              void 0 === o ||
              o.connect({});
        }
        ynisonDisconnect() {
          var e, t;
          null === (e = this.ynisonUnsubscribe) || void 0 === e || e.call(this),
            null === (t = this.ynisonConnector) ||
              void 0 === t ||
              t.disconnect();
        }
        onMessageRecieved(e) {
          this.ynisonDisconnect(), this.applyYnisonDiff(e.rawData);
        }
        onConnected(e) {
          var t;
          this.ynisonStateController.setState(e);
          let n = this.ynisonStateController.getState().player_state;
          null === (t = this.ynisonConnector) ||
            void 0 === t ||
            t.updateFullState(tl(this.deviceConfig, n));
        }
        getEmptyState(e) {
          let t = e.state.queueState.shuffle.value;
          return ti({
            player_state: {
              player_queue: {
                options: { repeat_mode: tc(e.state.queueState.repeat.value) },
                ...(t ? { shuffle_optional: { playable_indices: [] } } : {}),
              },
            },
          });
        }
        applyYnisonDiff(e) {
          var t;
          let n = this.ynisonStateController.calculateDiff({ newState: e }),
            r = this.ynisonStateController.getState();
          null === (t = this.playbackController) ||
            void 0 === t ||
            t.applyYnisonDiff(r, n);
        }
        constructor({
          factory: e,
          deviceConfig: t,
          connectionConfig: n,
          variables: r,
        }) {
          (0, K._)(this, "ynisonConnector", void 0),
            (0, K._)(this, "ynisonStateController", void 0),
            (0, K._)(this, "factory", void 0),
            (0, K._)(this, "deviceConfig", void 0),
            (0, K._)(this, "variables", void 0),
            (0, K._)(this, "playbackController", void 0),
            (0, K._)(this, "ynisonUnsubscribe", void 0),
            (this.factory = e),
            (this.variables = r),
            (this.deviceConfig = {
              app_name: t.appName,
              app_version: t.appVersion,
              title: t.title,
              device_id: (0, eL.Z)(),
              type: eN.WEB,
            }),
            (this.ynisonStateController = new eV({
              device: this.deviceConfig,
              diffWhileActiveOnly: !1,
            })),
            this.variables.enableYnisonConnection &&
              (this.ynisonConnector = new tt({
                config: {
                  device: this.deviceConfig,
                  oauth: null,
                  redirectorConnectionConfig: {
                    protocol: "wss://",
                    host: n.ynisonHost,
                    path: n.redirectorPath,
                  },
                  hubConnectionConfig: {
                    protocol: "wss://",
                    path: n.hubConnectioPath,
                  },
                  defaultReconnectTimeoutMS: n.reconnectTimeout,
                  reconnectAttemptsLimit: n.reconnectAttempts,
                },
              }));
        }
      }
      class tO {
        apply(e) {
          let { playback: t, hooks: n } = e;
          n.beforeEntityChange.tapPromise(
            "AdvertPlugin",
            () =>
              new Promise((e) => {
                let {
                  state: {
                    currentContext: n,
                    queueState: {
                      index: { value: r },
                      order: { value: i },
                      entityList: { value: o },
                    },
                  },
                } = t;
                if (void 0 !== n.value) {
                  let a = i[r + 1],
                    l = a ? o[a] : void 0,
                    u = l ? String(l.entity.data.meta.id) : void 0,
                    s = i[r - 1],
                    c = s ? o[s] : void 0,
                    f = c ? String(c.entity.data.meta.id) : void 0;
                  this.afterTrackResource
                    .getAfterTrack({
                      contextItem: String(n.value.data.meta.id),
                      from: n.value.from,
                      types: z.ki.AD,
                      nextTrackId: u,
                      prevTrackId: f,
                    })
                    .then((n) => {
                      "ad" in n && this.advertModule
                        ? (t.pause(),
                          this.advertModule.playAdvert(n).finally(e))
                        : e();
                    });
                } else e();
              }),
          );
        }
        constructor(e) {
          (0, K._)(this, "advertModule", void 0),
            (0, K._)(this, "afterTrackResource", void 0);
          let {
            httpClient: t,
            afterTrackResourceConfig: n,
            advertModule: r,
          } = e;
          (this.afterTrackResource = new z.Eb(t, n)), (this.advertModule = r);
        }
      }
    },
  },
]);
