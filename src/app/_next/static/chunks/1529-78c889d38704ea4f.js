(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1529, 5191],
  {
    71230: function (e, t, a) {
      "use strict";
      a.d(t, {
        i: function () {
          return d;
        },
      });
      var i,
        r,
        n = a(98639),
        o = {
          5881: (e, t, a) => {
            function i() {
              for (var e, t, a = 0, i = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      i,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (r && (r += " "), (r += i));
                      else for (a in t) t[a] && (r && (r += " "), (r += a));
                    }
                    return r;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => r });
            let r = i;
          },
          5264: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "JkKcxRVvjK7lcakkEliC",
              root_alwaysThumb: "cOKDtLfDZAuPXftfS2WM",
              root_trackSize_xs: "IB_XOYAyYPK4aszY9R1F",
              root_trackSize_s: "SHvrm0VRiLVwGqJJjNO8",
              root_thumbSize_xs: "BlvJwKLYTicnbJ3Qyuou",
              root_neverThumb: "dDJBVBTkzY5zY7vtSbyr",
              root_thumbSize_s: "qpvIbN4_hF6CqK0bjCq7",
              root_thumbSize_m: "P8_ABi1YnAOS8p8EY87f",
            };
          },
          6161: (e, t, a) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var i = a(810),
              r = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              l =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, a) {
              var i,
                n = {},
                c = null,
                d = null;
              for (i in (void 0 !== a && (c = "" + a),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                o.call(t, i) && !s.hasOwnProperty(i) && (n[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === n[i] && (n[i] = t[i]);
              return {
                $$typeof: r,
                type: e,
                key: c,
                ref: d,
                props: n,
                _owner: l.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
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
          7886: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Slider = void 0);
            let r = a(9541),
              n = a(5881),
              o = a(810),
              l = a(2342),
              s = i(a(5264)),
              c = (e) => {
                let {
                    forwardRef: t,
                    className: a,
                    value: i,
                    secondaryValue: c = l.DEFAULT_MAX_VALUE,
                    maxValue: d = l.DEFAULT_MAX_VALUE,
                    thumbSize: u = "m",
                    trackSize: m = "s",
                    mode: _ = l.SliderMode.NORMAL,
                    onChange: p,
                    showThumbVariant: v = l.ThumbVariant.HOVER,
                    ...h
                  } = e,
                  [y, x] = (0, o.useState)(null != i ? i : 0),
                  [f, g] = (0, o.useState)(!1),
                  [b, C] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                  f || x(i);
                }, [i, f]),
                  (0, o.useEffect)(() => {
                    !f && b && _ === l.SliderMode.DEFERRED && (p(y, !0), C(!1));
                  }, [_, f, p, y, b]);
                let N = (0, o.useCallback)(
                    (e) => {
                      let t = Number(e.target.value);
                      x(t),
                        C(!0),
                        "normal" === _ ? (p(t, !0), C(!1)) : p(t, !1);
                    },
                    [x, p, _],
                  ),
                  j = (0, o.useCallback)(
                    (e) => {
                      let t = !1,
                        a = !1;
                      e.nativeEvent instanceof window.MouseEvent
                        ? ((t = 0 === e.nativeEvent.button),
                          (a = "mousedown" === e.nativeEvent.type))
                        : ((t =
                            1 === e.nativeEvent.touches.length ||
                            "touchend" === e.nativeEvent.type),
                          (a = "touchstart" === e.nativeEvent.type)),
                        t && g(a);
                    },
                    [g],
                  ),
                  w = (0, o.useCallback)(() => {
                    g(!1);
                  }, [g]),
                  S = (0, o.useMemo)(() => {
                    let e = (100 * Math.min(y, d)) / d,
                      t = (100 * Math.min(c, d)) / d;
                    return {
                      backgroundSize: "".concat(e, "% 100%"),
                      "--seek-before-width": "".concat(e, "%"),
                      "--buffered-width": "".concat(t, "%"),
                    };
                  }, [y, c, d]);
                return (0, r.jsx)("input", {
                  ref: t,
                  className: (0, n.clsx)(
                    s.default.root,
                    {
                      [s.default["root_thumbSize_".concat(u)]]: u,
                      [s.default["root_trackSize_".concat(m)]]: m,
                      [s.default["root_".concat(v, "Thumb")]]: v,
                    },
                    a,
                  ),
                  type: "range",
                  max: d,
                  value: y,
                  style: S,
                  onTouchStart: j,
                  onTouchEnd: j,
                  onMouseDown: j,
                  onMouseUp: j,
                  onMouseOut: w,
                  onBlur: w,
                  onChange: N,
                  ...h,
                });
              };
            t.Slider = (0, o.forwardRef)((e, t) =>
              (0, r.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = r || (r = a.t(n, 2));
          },
        },
        l = {};
      function s(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var a = (l[e] = { exports: {} });
        return o[e].call(a.exports, a, a.exports, s), a.exports;
      }
      (s.d = (e, t) => {
        for (var a in t)
          s.o(t, a) &&
            !s.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "X", { value: !0 }),
        (c.i = void 0),
        (i = s(7886)),
        Object.defineProperty(c, "i", {
          enumerable: !0,
          get: function () {
            return i.Slider;
          },
        });
      var d = c.i;
      c.X;
    },
    56570: function (e, t, a) {
      "use strict";
      a.d(t, {
        Bm: function () {
          return w;
        },
        ag: function () {
          return k;
        },
        MC: function () {
          return l;
        },
      });
      var i = a(42288);
      let r = (e) => {
          let { id: t, type: a, value: r } = e;
          return (0, i.pj)({
            id: t || null,
            type: a || null,
            value: r || null,
          });
        },
        n = (e) => {
          let { text: t, textColor: a, color: n, action: o } = e;
          return (0, i.pj)({
            text: t || null,
            textColor: a || null,
            color: n || null,
            action: o && r(o),
          });
        },
        o = (e) => {
          let {
            bgUrl: t,
            bgColor: a,
            title: r,
            text: o,
            titleColor: l,
            textColor: s,
            imageUrl: c,
            buttons: d,
          } = e;
          return (0, i.pj)({
            bgUrl: t || null,
            bgColor: a || null,
            title: r || null,
            text: o || null,
            titleColor: l || null,
            textColor: s || null,
            imageUrl: c || null,
            buttons: d.filter((e) => e.text).map(n),
          });
        },
        l = (e) =>
          (0, i.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: o(e.div),
          });
      var s = a(9753),
        c = a(60836),
        d = a(9544),
        u = a(98639),
        m = a(80542),
        _ = a(86939),
        p = a(2570),
        v = a(21585);
      let h = i.V5.model("CommunicationButtonAction", {
          id: i.V5.maybeNull(i.V5.string),
          type: i.V5.maybeNull(i.V5.enumeration(Object.values(v.sy))),
          value: i.V5.maybeNull(i.V5.string),
        }),
        y = i.V5.model("CommunicationButton", {
          text: i.V5.maybeNull(i.V5.string),
          color: i.V5.maybeNull(i.V5.enumeration(Object.values(v.rp))),
          action: i.V5.maybeNull(h),
          textColor: i.V5.maybeNull(i.V5.string),
        });
      var x = a(39513),
        f = a(63394),
        g = a(91147),
        b = a.n(g);
      let C = (0, d.Pi)((e) => {
        let { anchorId: t, screenId: a, button: i, buttonSize: r, hide: n } = e,
          { communication: o } = (0, f.oR)(),
          l = (0, u.useMemo)(() => {
            if (i.action && i.action.type === v.sy.LINK) return i.action.value;
          }, [i]),
          d = (0, f.s0)(l),
          m = (0, u.useCallback)(() => {
            if (i.action)
              switch (
                (t && a && i.action.id && o.action(t, a, i.action.id),
                i.action.type)
              ) {
                case v.sy.LINK:
                  i.action.value && d();
                  return;
                case v.sy.CLOSE:
                  null == n || n();
                  return;
              }
          }, [t, a, o, i.action, n, d]),
          _ = (0, u.useMemo)(() => {
            if (i.textColor) return { color: i.textColor };
          }, [i.textColor]);
        return (0, s.jsx)(x.z, {
          className: (0, c.W)(b().root, b()["root_".concat(i.color)]),
          role: l ? "link" : "button",
          color: i.color ? i.color : void 0,
          radius: "xxxl",
          onClick: m,
          size: r,
          children: (0, s.jsx)(p.Caption, {
            className: b().text,
            variant: "div",
            type: "text",
            size: "m",
            style: _,
            children: i.text,
          }),
        });
      });
      var N = a(82487),
        j = a.n(N);
      let w = (0, d.Pi)((e) => {
          var t, a, i, r;
          let { className: n, barBellow: o } = e,
            { formatMessage: l } = (0, m.Z)(),
            d = (0, u.useMemo)(() => {
              let e = { title: {}, text: {}, bg: {} };
              if (!o.barBellowItem) return e;
              let {
                titleColor: t,
                textColor: a,
                bgColor: i,
                bgUrl: r,
              } = o.barBellowItem.content;
              return (
                t && (e.title.color = t),
                a && (e.text.color = a),
                i && (e.bg.backgroundColor = i),
                r &&
                  (e.bg.backgroundImage = 'url("'.concat(
                    o.barBellowItem.content.bgUrl,
                    '")',
                  )),
                e
              );
            }, [o]),
            v = (0, u.useMemo)(() => {
              var e;
              return null === (e = o.barBellowItem) || void 0 === e
                ? void 0
                : e.content.buttons.map((e) => {
                    var t, a;
                    return (0, s.jsx)(
                      C,
                      {
                        anchorId:
                          null === (t = o.barBellowItem) || void 0 === t
                            ? void 0
                            : t.anchorId,
                        screenId:
                          null === (a = o.barBellowItem) || void 0 === a
                            ? void 0
                            : a.screenId,
                        button: e,
                        buttonSize: "l",
                        hide: o.hide,
                      },
                      e.text,
                    );
                  });
            }, [o]),
            h = (0, u.useCallback)(
              (e) => {
                e.animationName.includes("show")
                  ? o.setAnimationAlreadyBeenShown()
                  : e.animationName.includes("hide") &&
                    o.setAnimationAlreadyBeenHidden();
              },
              [o],
            ),
            y = (0, u.useCallback)(
              (e) => {
                e.animationName.includes("show") &&
                  o.setAnimationAlreadyBeenStarted();
              },
              [o],
            );
          return (0, s.jsxs)("section", {
            className: (0, c.W)(
              j().root,
              {
                [j().root_hidden]: !o.isVisible && !o.hideWithAnimation,
                [j().root_show]: o.showWithAnimation,
                [j().root_hide]: o.hideWithAnimation,
              },
              n,
            ),
            style: d.bg,
            onAnimationStart: y,
            onAnimationEnd: h,
            "aria-label": l({ id: "bar-bellow.section-name" }),
            children: [
              (null === (t = o.barBellowItem) || void 0 === t
                ? void 0
                : t.content.imageUrl) &&
                (0, s.jsx)(_.Image, {
                  className: j().image,
                  "aria-hidden": !0,
                  src:
                    null === (a = o.barBellowItem) || void 0 === a
                      ? void 0
                      : a.content.imageUrl,
                  fit: "contain",
                  withAvatarReplace: !0,
                  withAspectRatio: !0,
                }),
              (0, s.jsxs)("div", {
                className: j().content,
                children: [
                  (null === (i = o.barBellowItem) || void 0 === i
                    ? void 0
                    : i.content.title) &&
                    (0, s.jsx)(p.Caption, {
                      className: j().title,
                      variant: "div",
                      type: "text",
                      size: "m",
                      weight: "medium",
                      style: d.title,
                      lineClamp: 2,
                      role: "heading",
                      "aria-level": 3,
                      children: o.barBellowItem.content.title,
                    }),
                  (null === (r = o.barBellowItem) || void 0 === r
                    ? void 0
                    : r.content.text) &&
                    (0, s.jsx)(p.Caption, {
                      variant: "div",
                      type: "text",
                      size: "xs",
                      weight: "normal",
                      style: d.text,
                      lineClamp: 2,
                      role: "heading",
                      "aria-level": 4,
                      children: o.barBellowItem.content.text,
                    }),
                ],
              }),
              (0, s.jsx)("div", { className: j().buttons, children: v }),
            ],
          });
        }),
        S = i.V5.model("BarBellowContent", {
          bgUrl: i.V5.maybeNull(i.V5.string),
          bgColor: i.V5.maybeNull(i.V5.string),
          imageUrl: i.V5.maybeNull(i.V5.string),
          title: i.V5.maybeNull(i.V5.string),
          titleColor: i.V5.maybeNull(i.V5.string),
          text: i.V5.maybeNull(i.V5.string),
          textColor: i.V5.maybeNull(i.V5.string),
          buttons: i.V5.array(y),
        }),
        P = i.V5.model("BarBellow", {
          anchorId: i.V5.enumeration(Object.values(v.o1)),
          screenId: i.V5.string,
          content: S,
        }),
        k = i.V5.model("BarBellowMain", {
          anchorId: i.V5.maybe(i.V5.string),
          isVisible: i.V5.maybe(i.V5.boolean),
          hasAnimationAlreadyBeenShown: i.V5.maybe(i.V5.boolean),
          hasAnimationAlreadyBeenHidden: i.V5.maybe(i.V5.boolean),
          hasAnimationAlreadyBeenStarted: i.V5.maybe(i.V5.boolean),
          list: i.V5.array(P),
        })
          .views((e) => ({
            get barBellowItem() {
              return e.list.find((t) => t.anchorId === e.anchorId);
            },
            get showWithAnimation() {
              return !e.hasAnimationAlreadyBeenShown && e.isVisible;
            },
            get hideWithAnimation() {
              return (
                e.hasAnimationAlreadyBeenShown &&
                !e.hasAnimationAlreadyBeenHidden &&
                !e.isVisible
              );
            },
          }))
          .actions((e) => ({
            setAnchorId(t) {
              e.anchorId = t;
            },
            show() {
              e.isVisible = !0;
            },
            hide() {
              e.isVisible = !1;
            },
            setAnimationAlreadyBeenShown() {
              e.hasAnimationAlreadyBeenShown = !0;
            },
            setAnimationAlreadyBeenHidden() {
              e.hasAnimationAlreadyBeenHidden = !0;
            },
            setAnimationAlreadyBeenStarted() {
              e.hasAnimationAlreadyBeenStarted = !0;
            },
          }));
    },
    29569: function (e, t, a) {
      "use strict";
      a.d(t, {
        F: function () {
          return h;
        },
        K: function () {
          return _;
        },
      });
      var i = a(9753),
        r = a(60836),
        n = a(9544),
        o = a(98639),
        l = a(80542),
        s = a(23881),
        c = a(39513),
        d = a(28852),
        u = a(71230),
        m = a(63394);
      let _ = () => {
        let e = (0, m.uK)().get(m.V0),
          t = (0, m.R$)();
        return (0, o.useCallback)(
          async (a) => {
            if (0 !== a)
              e.set(m.BU.YmPlayerPrevVolume, a),
                await (null == t ? void 0 : t.setVolume(0)),
                e.set(m.BU.YmPlayerVolume, 0);
            else {
              var i;
              let a =
                null !== (i = e.get(m.BU.YmPlayerPrevVolume)) && void 0 !== i
                  ? i
                  : 1;
              e.remove(m.BU.YmPlayerPrevVolume),
                await (null == t ? void 0 : t.setVolume(a)),
                e.set(m.BU.YmPlayerVolume, a);
            }
          },
          [t, e],
        );
      };
      var p = a(95904),
        v = a.n(p);
      let h = (0, n.Pi)((e) => {
        var t, a;
        let { className: n } = e,
          { formatMessage: p } = (0, l.Z)(),
          h = (0, m.uK)(),
          y = (0, m.R$)(),
          { sonataState: x } = (0, m.oR)(),
          f = _(),
          g = h.get(m.V0),
          b =
            null !==
              (a =
                null !== (t = g.get(m.BU.YmPlayerVolume)) && void 0 !== t
                  ? t
                  : x.volume) && void 0 !== a
              ? a
              : 1,
          C = (0, o.useCallback)(
            (e) => {
              null == y || y.setVolume(e), g.set(m.BU.YmPlayerVolume, e);
            },
            [y, g],
          ),
          N = (0, o.useCallback)(async () => {
            await f(x.volume);
          }, [f, x.volume]),
          j = p(
            0 === x.volume
              ? { id: "player-actions.volume-on" }
              : { id: "player-actions.volume-off" },
          );
        return (0, i.jsxs)("div", {
          className: (0, r.W)(v().root, n),
          children: [
            (0, i.jsx)(c.z, {
              radius: "round",
              size: "xxxs",
              variant: "text",
              withRipple: !1,
              onClick: N,
              "aria-label": j,
              icon: (0, i.jsx)(d.J, {
                size: "xs",
                className: v().icon,
                variant: 0 === b ? "volumeOff" : "volume",
              }),
              className: v().button,
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            (0, i.jsx)(u.i, {
              thumbSize: "s",
              trackSize: "s",
              value: b,
              maxValue: 1,
              step: 0.01,
              onChange: C,
              "aria-label": p({ id: "player-actions.volume-control" }),
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_SLIDER),
            }),
          ],
        });
      });
    },
    75191: function (e, t, a) {
      "use strict";
      a.d(t, {
        s$: function () {
          return g;
        },
        $Z: function () {
          return j.RepeatButton;
        },
        P4: function () {
          return N.ShuffleButton;
        },
        WP: function () {
          return i.SonataControls;
        },
        ps: function () {
          return b;
        },
        RN: function () {
          return C;
        },
        B5: function () {
          return v;
        },
      });
      var i = a(78457);
      a(18143), a(80128);
      var r = a(24244),
        n = a(42288),
        o = a(84338),
        l = a(62434),
        s = a(87181),
        c = a(30742),
        d = a(31841),
        u = a(38360),
        m = a(33589),
        _ = a(8957),
        p = a(63394);
      let v = (e) => {
          var t, a, i;
          switch (e.data.type) {
            case d.A4.Generative: {
              let a = e.data.meta,
                i = (0, p.Us)(null == a ? void 0 : a.derivedColors);
              return (0, n.pj)({
                id: String(a.id),
                coverUri: a.imageUrl,
                title: null !== (t = a.title) && void 0 !== t ? t : "",
                isAvailable: !0,
                isRemoved: !1,
                averageColor: i,
              });
            }
            case c.RX.Unloaded:
              return null;
            default: {
              let t = e.data.meta,
                r =
                  null === (a = t.artists) || void 0 === a
                    ? void 0
                    : a.map(m.d),
                o =
                  null === (i = t.albums) || void 0 === i ? void 0 : i.map(u.N);
              return (0, n.pj)({ ...(0, _.Ni)(t), artists: r, albums: o });
            }
          }
        },
        h = n.V5.model("UnloadedEntityMeta", {
          id: n.V5.union(n.V5.number, n.V5.string),
          albumId: n.V5.maybe(n.V5.union(n.V5.number, n.V5.string)),
        }),
        y = n.V5.model("UnloadedEntityData", {
          meta: h,
          type: n.V5.literal(c.RX.Unloaded),
        });
      var x = a(21585),
        f = a(94342);
      let g = _.yp
          .props({
            artists: n.V5.array(m.Go),
            albums: n.V5.array(u.KX),
            chart: n.V5.maybe(f.BH),
          })
          .views((e) => ({
            get idWithContext() {
              return e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id;
            },
            get artistsNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
            get mainAlbum() {
              var a, i;
              return null !==
                (i = null === (a = e.albums) || void 0 === a ? void 0 : a[0]) &&
                void 0 !== i
                ? i
                : null;
            },
            get index() {
              var r, n, o;
              return null !==
                (o =
                  null === (n = e.albums[0]) || void 0 === n
                    ? void 0
                    : null === (r = n.trackPosition) || void 0 === r
                      ? void 0
                      : r.index) && void 0 !== o
                ? o
                : null;
            },
            get isPodcast() {
              var l;
              return (
                e.isTrackPodcast ||
                (null === (l = this.mainAlbum) || void 0 === l
                  ? void 0
                  : l.isPodcast)
              );
            },
            get isAudiobook() {
              return e.type === x.Vc.AUDIOBOOK;
            },
            get isNonMusic() {
              return this.isPodcast || this.isAudiobook;
            },
          })),
        b = n.V5.model("SonataState", {
          contextType: n.V5.maybeNull(n.V5.enumeration(Object.values(o.Ak))),
          contextId: n.V5.maybeNull(n.V5.string),
          entityMeta: n.V5.maybeNull(g),
          unloadedEntitiesData: n.V5.maybe(n.V5.array(y)),
          status: n.V5.enumeration(Object.values(c.Xz)),
          canMoveForward: n.V5.boolean,
          canMoveBackward: n.V5.boolean,
          canSpeed: n.V5.boolean,
          repeatMode: n.V5.enumeration(Object.values(s.zq)),
          canChangeRepeatMode: n.V5.boolean,
          volume: n.V5.maybe(n.V5.number),
          speed: n.V5.maybe(n.V5.number),
          canShuffle: n.V5.boolean,
          shuffle: n.V5.boolean,
          currentlyPlayingTrackIndex: n.V5.maybe(n.V5.number),
          quality: n.V5.enumeration(Object.values(l.nJ)),
        })
          .views((e) => ({
            get unloadedEntitiesDataFromModels() {
              return (0, r.ZN)(e.unloadedEntitiesData);
            },
            get isGenerativeContext() {
              return e.contextType === o.Ak.Generative;
            },
          }))
          .actions((e) => ({
            setContextId: (t) => {
              e.contextId = String(t);
            },
            setContextType: (t) => {
              e.contextType = t;
            },
            setEntityMeta: (t) => {
              t && t.data.meta && (e.entityMeta = v(t));
            },
            setUnloadedEntitiesData: (t) => {
              t && (e.unloadedEntitiesData = (0, n.pj)(t));
            },
            resetUnloadedEntitiesData: () => {
              e.unloadedEntitiesData = void 0;
            },
            setStatus: (t) => {
              e.status = t;
            },
            setCanMoveForward: (t) => {
              e.canMoveForward = t;
            },
            setCanMoveBackward: (t) => {
              e.canMoveBackward = t;
            },
            setVolume: (t) => {
              e.volume = t;
            },
            setCanSpeed: (t) => {
              e.canSpeed = t;
            },
            setSpeed: (t) => {
              e.speed = t;
            },
            setRepeatMode: (t) => {
              e.repeatMode = t;
            },
            setCanChangeRepeatMode: (t) => {
              e.canChangeRepeatMode = t;
            },
            setCanShuffle: (t) => {
              e.canShuffle = t;
            },
            setShuffle: (t) => {
              e.shuffle = t;
            },
            setCurrentlyPlayingTrackIndex: (t) => {
              e.currentlyPlayingTrackIndex = t;
            },
            setQuality: (t) => {
              e.quality = t;
            },
          })),
        C = (e, t) => ({ type: c.RX.Unloaded, meta: { id: e, albumId: t } });
      var N = a(94975),
        j = a(99331);
    },
    51952: function (e, t, a) {
      "use strict";
      a.d(t, {
        wp: function () {
          return eG;
        },
        Lc: function () {
          return e2;
        },
      });
      var i,
        r,
        n,
        o,
        l,
        s,
        c,
        d,
        u,
        m,
        _,
        p,
        v,
        h = a(9753),
        y = a(60836),
        x = a(9544),
        f = a(98639),
        g = a.t(f, 2),
        b = a(23881),
        C = a(63394),
        N = a(23897);
      let j = () => {
        let [e, t] = (0, f.useState)(!1),
          a = (0, f.useMemo)(
            () =>
              (0, N.Z)(
                () => {
                  t(window.innerWidth < 1024);
                },
                100,
                { trailing: !1 },
              ),
            [t],
          );
        return (
          (0, f.useEffect)(
            () => (
              window.addEventListener("resize", a),
              a(),
              () => {
                window.removeEventListener("resize", a);
              }
            ),
            [a],
          ),
          e && !1
        );
      };
      var w = a(31695),
        S = a.n(w),
        P = a(80542),
        k = a(31014),
        E = a(37117),
        M = a(39513),
        L = a(28852),
        A = a(29901),
        I = {
          5881: (e, t, a) => {
            function i() {
              for (var e, t, a = 0, i = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      i,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (r && (r += " "), (r += i));
                      else for (a in t) t[a] && (r && (r += " "), (r += a));
                    }
                    return r;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => r });
            let r = i;
          },
          2329: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          9948: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          8850: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "Bp1d3U6W8Nrbqi3MRQS_",
              root_direction_vertical: "hYfgO_Y8c4rrQsZJWTDZ",
              ripple: "UiZ4QyGEVzfvZ3QfQqqA",
              root_direction_horizontal: "X_Lr5kqrhzMO6kX8v92s",
              root_collapsed: "Q3gGGaIXiJ_oQTiVZBfl",
              root_variant_main: "H4trq_Zx2d9qOnQgxmxr",
              root_animate: "Kr9rXeXGlqHee2euqH0u",
              animation_width: "k8zKIZRDy6LmoaIcEpo8",
              item: "A4bDkbQHkwWNGqxO9qhW",
              item_selected: "mAd9pgMkWVX5ktCgYINQ",
              item_direction_vertical: "Xx9Tg5ugzg1pkf8Zh421",
              item_direction_horizontal: "fQVXazc9HwT3NQ8dywCh",
              iconContainer: "zpkgiiHgDpbBThy6gavq",
              textContainer: "ZrkG6gNYcr4h3hfkhyT1",
              textContainer_selected: "xENlRAFvRskKnt8LUObC",
              textContainer_direction_horizontal: "xE5fIMRnjd8oSm5BOhpI",
            };
          },
          6161: (e, t, a) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var i = a(810),
              r = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              l =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, a) {
              var i,
                n = {},
                c = null,
                d = null;
              for (i in (void 0 !== a && (c = "" + a),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                o.call(t, i) && !s.hasOwnProperty(i) && (n[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === n[i] && (n[i] = t[i]);
              return {
                $$typeof: r,
                type: e,
                key: c,
                ref: d,
                props: n,
                _owner: l.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          9440: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let a = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
            t.createAvatarUrl = (e, t, i) => {
              let r;
              return (
                (r =
                  "orig" === t
                    ? "orig"
                    : i
                      ? "m".concat(t, "x").concat(t)
                      : "".concat(t, "x").concat(t)),
                a(e.replace("%%", r))
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, a) {
                let i = null != a ? a : e.currentTarget,
                  r = document.createElement("span"),
                  n = Math.max(i.clientWidth, i.clientHeight),
                  o = n / 2,
                  l = i.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(l.width / 2)
                      : e.clientX - l.left,
                  c =
                    0 === e.clientY
                      ? Math.round(l.height / 2)
                      : e.clientY - l.top;
                (r.style.width = "".concat(n, "px")),
                  (r.style.height = "".concat(n, "px")),
                  (r.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - o, "px")),
                  (r.style.top = "".concat(c - o, "px")),
                  r.classList.add(t);
                let d = i.getElementsByClassName(t)[0];
                d && d.remove(), i.insertBefore(r, i.firstChild);
              });
          },
          8216: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var i = a(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return i.createRipple;
              },
            });
            var r = a(9440);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return r.createAvatarUrl;
              },
            });
          },
          19: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Navigation = void 0);
            let r = a(9541),
              n = a(5881),
              o = a(7786),
              l = i(a(2329));
            t.Navigation = function (e) {
              let {
                className: t,
                children: a,
                collapsed: i = !1,
                direction: s = "vertical",
                ...c
              } = e;
              return (0, r.jsx)(o.NavigationProvider, {
                collapsed: i,
                direction: s,
                children: (0, r.jsx)("nav", {
                  className: (0, n.clsx)(
                    l.default.root,
                    l.default["root_direction_".concat(s)],
                    { [l.default.root_collapsed]: i },
                    t,
                  ),
                  "aria-label": c["aria-label"],
                  ...c,
                  children: a,
                }),
              });
            };
          },
          7786: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationProvider = t.NavigationContext = void 0);
            let i = a(9541),
              r = a(810);
            (t.NavigationContext = (0, r.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = (e) => {
                let { collapsed: a, direction: n, children: o } = e,
                  l = (0, r.useMemo)(
                    () => ({ collapsed: a, direction: n }),
                    [a, n],
                  );
                return (0, i.jsx)(t.NavigationContext.Provider, {
                  value: l,
                  children: o,
                });
              });
          },
          8106: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationGroup = void 0);
            let r = a(9541),
              n = a(810),
              o = a(5881),
              l = a(7786),
              s = i(a(9948));
            t.NavigationGroup = function (e) {
              let { className: t, children: a, ...i } = e,
                c = (0, n.createRef)(),
                { direction: d } = (0, n.useContext)(l.NavigationContext);
              return (0, r.jsx)("ol", {
                ref: c,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default["root_direction_".concat(d)],
                  t,
                ),
                ...i,
                children: a,
              });
            };
          },
          3506: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationItem = t.NavigationItemComponent = void 0);
            let r = a(9541),
              n = a(810),
              o = a(5881),
              l = a(7786),
              s = a(8216),
              c = i(a(8850));
            function d(e) {
              let {
                  className: t = "",
                  forwardRef: a,
                  children: i,
                  selected: d = !1,
                  shownAnimation: u,
                  withRipple: m = !1,
                  variant: _ = "default",
                  ...p
                } = e,
                { collapsed: v, direction: h } = (0, n.useContext)(
                  l.NavigationContext,
                ),
                y = (0, n.useCallback)(
                  (e) => {
                    m && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [m],
                ),
                [x, f] = n.Children.toArray(i.props.children),
                g = (0, n.useMemo)(
                  () =>
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("div", {
                          className: c.default.iconContainer,
                          children: x,
                        }),
                        (0, r.jsx)("div", {
                          className: (0, o.clsx)(
                            c.default.textContainer,
                            c.default["textContainer_direction_".concat(h)],
                            { [c.default.textContainer_selected]: d },
                          ),
                          children: f,
                        }),
                      ],
                    }),
                  [x, h, d, f],
                ),
                b = (0, n.cloneElement)(i, {
                  className: (0, o.clsx)(
                    c.default.item,
                    c.default["item_direction_".concat(h)],
                    {
                      [c.default.item_selected]: d,
                      [c.default["item_collapsed_".concat(h)]]: v,
                    },
                    i.props.className,
                  ),
                  children: g,
                });
              return (0, r.jsx)("li", {
                ref: a,
                className: (0, o.clsx)(
                  c.default.root,
                  c.default["root_direction_".concat(h)],
                  c.default["root_variant_".concat(_)],
                  {
                    [c.default.root_animate]: u,
                    [c.default.root_collapsed]: v,
                  },
                  t,
                ),
                "aria-current": !!d && "page",
                onClick: y,
                ...p,
                children: b,
              });
            }
            (t.NavigationItemComponent = d),
              (t.NavigationItem = (0, n.forwardRef)((e, t) =>
                (0, r.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = g;
          },
        },
        B = {};
      function V(e) {
        var t = B[e];
        if (void 0 !== t) return t.exports;
        var a = (B[e] = { exports: {} });
        return I[e].call(a.exports, a, a.exports, V), a.exports;
      }
      (V.d = (e, t) => {
        for (var a in t)
          V.o(t, a) &&
            !V.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (V.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (V.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var R = {};
      Object.defineProperty(R, "X$", { value: !0 }),
        (R.Dx = R.KB = R.W_ = void 0),
        (i = V(19)),
        Object.defineProperty(R, "W_", {
          enumerable: !0,
          get: function () {
            return i.Navigation;
          },
        }),
        (r = V(8106)),
        Object.defineProperty(R, "KB", {
          enumerable: !0,
          get: function () {
            return r.NavigationGroup;
          },
        }),
        (n = V(3506)),
        Object.defineProperty(R, "Dx", {
          enumerable: !0,
          get: function () {
            return n.NavigationItem;
          },
        });
      var T = R.W_,
        D = R.KB,
        O = R.Dx;
      R.X$;
      var z = a(5773),
        U = a(2570),
        F = a(54050),
        W = a(2959),
        Q = a(67868);
      let q = (e) => {
        let { padding: t, placement: a } = e;
        return {
          shiftOptions: { padding: t },
          offsetOptions: t,
          flipOptions: { fallbackAxisSideDirection: "start", padding: t },
          placement: a,
        };
      };
      var G = a(1263),
        Z = a(21585),
        H = a(86939),
        J = a(12404),
        K = a(38360),
        Y = a(98342),
        X = a(64638),
        $ = a.n(X);
      let ee = (e) => {
          let { children: t, entityUrl: a, ariaLabel: i } = e;
          return a
            ? (0, h.jsx)(Q.rU, {
                href: a,
                "aria-label": i,
                className: $().link,
                children: t,
              })
            : t;
        },
        et = (e) => {
          let {
              className: t,
              cover: a,
              title: i,
              subtitle: r,
              contextMenu: n,
              isCollapsed: o,
              withCollapseAnimation: l,
              entityUrl: s,
              onDoubleClick: c,
              forwardRef: d,
              ariaLabel: u,
            } = e,
            m = (0, f.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == c || c()
                  : e.target instanceof HTMLElement &&
                    "IMG" !== e.target.tagName &&
                    (0, Y.m)(e, $().ripple);
              },
              [c],
            );
          return (0, h.jsxs)(Q.Md, {
            ref: d,
            onClick: m,
            className: (0, y.W)($().root, { [$().root_withoutLink]: !s }, t),
            role: "listitem",
            children: [
              (0, h.jsxs)(ee, {
                entityUrl: s,
                ariaLabel: u,
                children: [
                  (0, h.jsx)("div", { className: $().cover, children: a }),
                  (0, h.jsx)("div", {
                    className: $().meta,
                    children: (0, h.jsxs)("div", {
                      className: (0, y.W)($().info, {
                        [$().info_collapsed]: o,
                        [$().info_animated]: l,
                      }),
                      children: [
                        (0, h.jsx)(U.Caption, {
                          "aria-hidden": !0,
                          className: $().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: i,
                        }),
                        (0, h.jsx)(U.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: r,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, h.jsx)("div", {
                className: (0, y.W)($().contextMenu, {
                  [$().contextMenu_hidden]: o,
                }),
                children: n,
              }),
            ],
          });
        },
        ea = (0, f.forwardRef)((e, t) =>
          (0, h.jsx)(et, { forwardRef: t, ...e }),
        ),
        ei = (0, f.createContext)(null);
      var er = a(64318),
        en = a.n(er),
        eo = a(385);
      let el = (e) => {
          let { onPinClick: t, isPinned: a } = e,
            { isCollapsed: i } = (0, f.useContext)(ei) || {},
            { formatMessage: r } = (0, P.Z)(),
            [n, o] = (0, f.useState)(!1),
            l = (0, f.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, C.ZP)(n),
            (0, h.jsx)(eo.v2, {
              reference: (0, h.jsx)(M.z, {
                className: (0, y.W)(en().contextMenu, {
                  [en().contextMenu_visible]: n,
                }),
                onClick: l,
                withRipple: !1,
                variant: "text",
                "aria-label": r({ id: "interface-actions.context-menu" }),
                icon: (0, h.jsx)(L.J, { size: "xxs", variant: "more" }),
                tabIndex: i ? -1 : 0,
                "aria-hidden": i,
              }),
              offsetOptions: 10,
              open: n,
              returnFocus: !1,
              onOpenChange: o,
              children: (0, h.jsx)(Q.Zd, { onClick: t, isPinned: a }),
            })
          );
        },
        es = (e) => {
          var t;
          let { className: a, album: i, forwardRef: r, tooltipOptions: n } = e,
            { formatMessage: o } = (0, P.Z)(),
            { isCollapsed: l, withCollapseAnimation: s } =
              null !== (t = (0, f.useContext)(ei)) && void 0 !== t ? t : {},
            c = (0, K.BV)(i),
            d = (0, K.H0)(i.type),
            u = (0, f.useMemo)(
              () =>
                (0, h.jsx)(J.Paper, {
                  className: en().cover,
                  radius: "xs",
                  children: (0, h.jsxs)(z.u, {
                    ...n,
                    enabled: l,
                    children: [
                      (0, h.jsx)(H.Image, {
                        className: en().image,
                        "aria-hidden": !0,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(z._v, {
                        className: en().tooltip,
                        children: (0, h.jsx)(U.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: i.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [i.coverUri, i.title, l, n],
            );
          return (0, h.jsx)(ea, {
            ref: r,
            ariaLabel: o(
              { id: "entity-names.album-name" },
              { albumName: i.title },
            ),
            className: (0, y.W)(en().root, a),
            title: i.title,
            entityUrl: i.url,
            subtitle: d,
            cover: u,
            isCollapsed: !!l,
            withCollapseAnimation: !!s,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: c,
              isPinned: i.isPinned,
            }),
          });
        },
        ec = (0, f.forwardRef)((e, t) =>
          (0, h.jsx)(es, { forwardRef: t, ...e }),
        );
      var ed = a(33589);
      let eu = (e) => {
          var t;
          let { className: a, artist: i, forwardRef: r, tooltipOptions: n } = e,
            { formatMessage: o } = (0, P.Z)(),
            { isCollapsed: l, withCollapseAnimation: s } =
              null !== (t = (0, f.useContext)(ei)) && void 0 !== t ? t : {},
            c = (0, ed.BV)(i),
            d = (0, f.useMemo)(
              () =>
                (0, h.jsx)(J.Paper, {
                  className: en().cover,
                  radius: "round",
                  children: (0, h.jsxs)(z.u, {
                    ...n,
                    enabled: l,
                    children: [
                      (0, h.jsx)(H.Image, {
                        className: en().image,
                        "aria-hidden": !0,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(z._v, {
                        className: en().tooltip,
                        children: (0, h.jsx)(U.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: i.name,
                        }),
                      }),
                    ],
                  }),
                }),
              [i.coverUri, i.name, l, n],
            );
          return (0, h.jsx)(ea, {
            ref: r,
            ariaLabel: o(
              { id: "entity-names.artist-name" },
              { artistName: i.name },
            ),
            className: (0, y.W)(en().root, a),
            title: i.name,
            entityUrl: i.url,
            subtitle: (0, h.jsx)(k.Z, { id: "entity-names.artist" }),
            cover: d,
            isCollapsed: !!l,
            withCollapseAnimation: !!s,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: c,
              isPinned: i.isPinned,
            }),
          });
        },
        em = (0, f.forwardRef)((e, t) =>
          (0, h.jsx)(eu, { forwardRef: t, ...e }),
        );
      var e_ = a(12090);
      let ep = (e) => {
          var t;
          let {
              className: a,
              playlist: i,
              forwardRef: r,
              tooltipOptions: n,
            } = e,
            { formatMessage: o } = (0, P.Z)(),
            { isCollapsed: l, withCollapseAnimation: s } =
              null !== (t = (0, f.useContext)(ei)) && void 0 !== t ? t : {},
            c = (0, e_.BV)(i),
            d = (0, f.useMemo)(
              () =>
                (0, h.jsx)(J.Paper, {
                  className: en().cover,
                  radius: "xs",
                  children: (0, h.jsxs)(z.u, {
                    ...n,
                    enabled: l,
                    children: [
                      (0, h.jsx)(H.Image, {
                        "aria-hidden": !0,
                        className: en().image,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(z._v, {
                        className: en().tooltip,
                        children: (0, h.jsx)(U.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: i.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [l, i.coverUri, i.title, n],
            );
          return (0, h.jsx)(ea, {
            ref: r,
            ariaLabel: o(
              { id: "entity-names.playlist-name" },
              { playlistName: i.title },
            ),
            className: (0, y.W)(en().root, a),
            title: i.title,
            entityUrl: i.url,
            subtitle: (0, h.jsx)(k.Z, { id: "entity-names.playlist" }),
            cover: d,
            isCollapsed: !!l,
            withCollapseAnimation: !!s,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: c,
              isPinned: i.isPinned,
            }),
          });
        },
        ev = (0, f.forwardRef)((e, t) =>
          (0, h.jsx)(ep, { forwardRef: t, ...e }),
        );
      var eh = a(40029);
      let ey = (0, x.Pi)((e) => {
          var t, a;
          let { className: i, vibe: r, forwardRef: n, tooltipOptions: o } = e,
            l = (0, f.useId)(),
            { formatMessage: s } = (0, P.Z)(),
            { isCollapsed: c, withCollapseAnimation: d } =
              null !== (a = (0, f.useContext)(ei)) && void 0 !== a ? a : {},
            [u, m] = (0, f.useState)(!1),
            _ = (0, eh.BV)(r),
            {
              isPlaying: p,
              togglePlay: v,
              isCurrent: x,
            } = (0, C.Qh)({
              seeds: r.seeds,
              pageIdForFrom: C.Rh.SIDEBAR,
              blockIdForFrom: C.aU.RADIO,
            }),
            g = (0, f.useCallback)(() => {
              m(!0),
                v().finally(() => {
                  m(!1);
                });
            }, [v]),
            b = (0, f.useMemo)(
              () =>
                (0, h.jsx)(U.Caption, {
                  id: l,
                  variant: "span",
                  "aria-label": s(
                    { id: "entity-names.vibe-name" },
                    { vibeName: r.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: r.title,
                }),
              [s, l, r.title],
            ),
            N = (0, f.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = r.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, h.jsxs)(z.u, {
                ...o,
                enabled: c,
                children: [
                  (0, h.jsx)("div", {
                    style: t,
                    className: en().animation,
                    children: (0, h.jsx)(Q.Df, {
                      isCurrent: x,
                      isPlaying: p,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: g,
                      title: r.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: l,
                    }),
                  }),
                  (0, h.jsx)(z._v, {
                    className: en().tooltip,
                    children: (0, h.jsx)(U.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: r.title,
                    }),
                  }),
                ],
              });
            }, [
              g,
              c,
              x,
              u,
              p,
              l,
              o,
              null === (t = r.colors) || void 0 === t ? void 0 : t.average,
              r.title,
            ]);
          return (0, h.jsx)(ea, {
            ref: n,
            onDoubleClick: v,
            className: (0, y.W)(en().root, i),
            isCollapsed: !!c,
            contextMenu: (0, h.jsx)(el, {
              onPinClick: _,
              isPinned: r.isPinned,
            }),
            withCollapseAnimation: !!d,
            title: b,
            subtitle: (0, h.jsx)(k.Z, { id: "entity-names.my-vibe" }),
            cover: N,
          });
        }),
        ex = (0, f.forwardRef)((e, t) =>
          (0, h.jsx)(ey, { forwardRef: t, ...e }),
        );
      var ef = a(8519),
        eg = a.n(ef);
      let eb = q({ placement: "right", padding: 20 }),
        eC = (0, x.Pi)((e) => {
          var t, a;
          let { className: i, withCollapseAnimation: r, isCollapsed: n } = e,
            { formatMessage: o } = (0, P.Z)(),
            { pinsCollection: l } = (0, C.oR)(),
            s =
              null === (t = l.items) || void 0 === t
                ? void 0
                : t.map(() => (0, f.createRef)()),
            c = (0, f.useMemo)(
              () => ({
                enter: eg().pin_enter,
                enterActive: eg().pin_enter_active,
                exit: eg().pin_exit,
                exitActive: eg().pin_exit_active,
              }),
              [],
            ),
            d = (0, f.useMemo)(
              () => ({ withCollapseAnimation: r, isCollapsed: n }),
              [n, r],
            );
          return (0, h.jsx)(ei.Provider, {
            value: d,
            children: (0, h.jsx)("div", {
              className: (0, y.W)(eg().root, i),
              children: (0, h.jsx)("div", {
                role: "list",
                "aria-label": o({ id: "navigation.pins-list" }),
                className: eg().content,
                children: (0, h.jsx)(G.Z, {
                  component: null,
                  children:
                    null === (a = l.items) || void 0 === a
                      ? void 0
                      : a.map((e, t) => {
                          switch (e.type) {
                            case Z.Qm.ALBUM:
                              return (0, h.jsx)(
                                E.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, h.jsx)(ec, {
                                    tooltipOptions: eb,
                                    ref: null == s ? void 0 : s[t],
                                    album: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Z.Qm.ARTIST:
                              return (0, h.jsx)(
                                E.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, h.jsx)(em, {
                                    tooltipOptions: eb,
                                    ref: null == s ? void 0 : s[t],
                                    artist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Z.Qm.PLAYLIST:
                              return (0, h.jsx)(
                                E.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, h.jsx)(ev, {
                                    tooltipOptions: eb,
                                    ref: null == s ? void 0 : s[t],
                                    playlist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case Z.Qm.WAVE:
                              return (0, h.jsx)(
                                E.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, h.jsx)(ex, {
                                    tooltipOptions: eb,
                                    ref: null == s ? void 0 : s[t],
                                    vibe: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                          }
                        }),
                }),
              }),
            }),
          });
        });
      var eN = a(84691);
      function ej() {
        return (ej = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ew = function (e) {
          return eN.createElement(
            "svg",
            ej(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            eN.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              eN.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                o ||
                  (o = eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                l ||
                  (l = eN.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                s ||
                  (s = eN.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                eN.createElement(
                  "mask",
                  {
                    id: "mask0_2521_25547",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: 33,
                    y: 0,
                    width: 25,
                    height: 24,
                  },
                  c ||
                    (c = eN.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                d ||
                  (d = eN.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                u ||
                  (u = eN.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    eN.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    eN.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            m ||
              (m = eN.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                eN.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                eN.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            _ ||
              (_ = eN.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            p ||
              (p = eN.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            v ||
              (v = eN.createElement(
                "defs",
                null,
                eN.createElement(
                  "radialGradient",
                  {
                    id: "paint0_radial_2521_25547",
                    cx: 0,
                    cy: 0,
                    r: 1,
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(40.7002 3.59937) rotate(45) scale(23.7588)",
                  },
                  eN.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  eN.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                eN.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  eN.createElement("stop", { stopColor: "#FF5C4D" }),
                  eN.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  eN.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  eN.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  eN.createElement("rect", {
                    x: 17.0005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        eS = a(77314),
        eP = a.n(eS);
      let ek = (e) => {
          let { className: t, forwardRef: a } = e,
            { formatMessage: i } = (0, P.Z)();
          return (0, h.jsxs)("section", {
            className: (0, y.W)(eP().root, t),
            ref: a,
            "aria-label": i({ id: "plusbar.subscription-activation" }),
            children: [
              (0, h.jsx)(ew, { className: eP().logos, "aria-hidden": "true" }),
              (0, h.jsx)(U.Caption, {
                className: eP().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, h.jsx)(k.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, h.jsx)(U.Caption, {
                className: eP().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, h.jsx)(k.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, h.jsxs)("div", {
                className: eP().buttons,
                children: [
                  (0, h.jsx)(M.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    color: "plus",
                    children: "30 дней бесплатно",
                  }),
                  (0, h.jsx)(M.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    children: (0, h.jsx)(k.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        eE = (0, f.forwardRef)((e, t) =>
          (0, h.jsx)(ek, { forwardRef: t, ...e }),
        );
      var eM = a(3065),
        eL = a.n(eM),
        eA = a(24776),
        eI = a.n(eA);
      let eB = q({ placement: "right", padding: 8 }),
        eV = (e) => {
          let { className: t, isCollapsed: a, withCollapseAnimation: i } = e;
          return (0, h.jsxs)(z.u, {
            ...eB,
            enabled: !0,
            children: [
              (0, h.jsxs)("div", {
                className: (0, y.W)(eI().root, t),
                children: [
                  (0, h.jsx)(U.Caption, {
                    className: eI().nda,
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    children: (0, h.jsx)(k.Z, { id: "entity-names.nda" }),
                  }),
                  (0, h.jsx)(U.Caption, {
                    className: (0, y.W)(eI().text, {
                      [eI().text_collapsed]: a,
                      [eI().text_animated]: i,
                    }),
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    lineClamp: 1,
                    children: (0, h.jsx)(k.Z, {
                      id: "warning-messages.only-for-staff",
                    }),
                  }),
                ],
              }),
              (0, h.jsx)(z._v, {
                className: eI().tooltipContent,
                children: (0, h.jsx)(k.Z, {
                  id: "warning-messages.do-not-take-screenshots",
                }),
              }),
            ],
          });
        },
        eR = {
          exit: eL().plusButtonContainer_exit,
          exitActive: eL().plusButtonContainer_exit_active,
          enter: eL().plusButtonContainer_enter,
          enterActive: eL().plusButtonContainer_enter_active,
        },
        eT = {
          exit: eL().plusBar_exit,
          exitActive: eL().plusBar_exit_active,
          enter: eL().plusBar_enter,
          enterActive: eL().plusBar_enter_active,
        },
        eD = q({ placement: "right", padding: 8 }),
        eO = (0, x.Pi)((e) => {
          let {
              className: t,
              collapsed: a,
              shownAnimation: i,
              handleClick: r,
            } = e,
            n = j(),
            o = (0, C.hJ)(),
            { formatMessage: l } = (0, P.Z)(),
            { language: s } = (0, C.ZS)(),
            { user: c, experiments: d } = (0, C.oR)(),
            u = (0, f.useMemo)(
              () =>
                c.collectionHue
                  ? { "--logo-color": (0, F.Cx)(c.collectionHue) }
                  : null,
              [c.collectionHue],
            ),
            m = (0, f.useMemo)(
              () =>
                a
                  ? l({ id: "sidebar.uncollapse" })
                  : l({ id: "sidebar.collapse" }),
              [a, l],
            ),
            _ = (0, f.useMemo)(
              () => ({
                search: l({ id: "navigation.search" }),
                main: l({ id: "navigation.page-main" }),
                collection: l({ id: "navigation.page-collection" }),
                non_music: l({ id: "entity-names.podcasts" }),
              }),
              [l],
            ),
            p = (0, f.useMemo)(
              () =>
                (0, h.jsx)(
                  D,
                  {
                    children: (0, C.sQ)(d).map((e) =>
                      (0, h.jsx)(
                        O,
                        {
                          selected: o(e.path),
                          shownAnimation: i,
                          variant: "main",
                          children: (0, h.jsxs)(Q.rU, {
                            href: e.path,
                            children: [
                              (0, h.jsxs)(z.u, {
                                ...eD,
                                enabled: a,
                                children: [
                                  (0, h.jsx)(L.J, {
                                    variant: o(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, h.jsx)(z._v, {
                                    children: (0, h.jsx)(U.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: _[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, h.jsx)(U.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, y.W)({
                                  [eL().title_animate]: i,
                                  [eL().title_collapsed]: a,
                                }),
                                children: _[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  },
                  "main",
                ),
              [o, a, d, d.loadingState, i, _],
            ),
            v = (0, f.useMemo)(
              () =>
                n
                  ? null
                  : (0, f.createElement)(z.u, {
                      ...eD,
                      key: "collapseTooltip",
                      children: [
                        (0, h.jsx)(M.z, {
                          className: (0, y.W)(
                            eL().collapseButton,
                            eL().important,
                          ),
                          "aria-label": m,
                          radius: "round",
                          color: "secondary",
                          size: "s",
                          icon: (0, h.jsx)(L.J, {
                            variant: a ? "uncollapse" : "collapse",
                            size: "xs",
                          }),
                          onClick: r,
                        }),
                        (0, h.jsx)(z._v, {
                          className: (0, y.W)({
                            [eL().collapseButtonTooltip_hidden]: !a,
                          }),
                          children: m,
                        }),
                      ],
                    }),
              [a, m, r, n],
            ),
            x = (0, f.useRef)(null),
            g = (0, f.useMemo)(
              () =>
                (0, h.jsx)(E.Z, {
                  nodeRef: x,
                  in: a,
                  timeout: 150,
                  classNames: eR,
                  unmountOnExit: !0,
                  children: (0, h.jsx)("div", {
                    className: eL().plusButtonContainer,
                    ref: x,
                    children: (0, h.jsxs)(z.u, {
                      ...eD,
                      enabled: a,
                      children: [
                        (0, h.jsx)(M.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, h.jsx)(L.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, y.W)(eL().button, eL().important),
                          "aria-label": l({
                            id: "plusbar.subscription-activation",
                          }),
                        }),
                        (0, h.jsx)(z._v, {
                          children: (0, h.jsx)(U.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, h.jsx)(k.Z, {
                              id: "plusbar.subscription-activation",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              [a, l],
            ),
            b = (0, f.useRef)(null),
            N = (0, f.useMemo)(
              () =>
                (0, h.jsx)(E.Z, {
                  nodeRef: b,
                  in: !a,
                  timeout: 150,
                  classNames: eT,
                  unmountOnExit: !0,
                  children: (0, h.jsx)(eE, {
                    className: eL().plusBar,
                    forwardRef: b,
                  }),
                }),
              [a],
            );
          return (0, h.jsxs)("div", {
            className: (0, y.W)(eL().root, t),
            children: [
              (0, h.jsx)(Q.rU, {
                href: "/",
                className: eL().logoLink,
                children: (0, h.jsx)(A.TR, {
                  style: u,
                  className: (0, y.W)(eL().logo),
                  collapsed: a,
                  shownAnimation: i,
                  collapsedButton: v,
                  lang: "ru" !== s ? A.o0.EN : A.o0.RU,
                }),
              }),
              d.checkExperiment(C.pe.WebNextNDABadge, "on") &&
                (0, h.jsx)(eV, {
                  className: eL().ndaBadge,
                  isCollapsed: a,
                  withCollapseAnimation: !!i,
                }),
              (0, h.jsx)(T, {
                className: eL().navigation,
                collapsed: a,
                "aria-label": l({ id: "navigation.main-menu" }),
                children: p,
              }),
              (0, h.jsx)(eC, {
                isCollapsed: a,
                withCollapseAnimation: !!i,
                className: eL().pinsList,
              }),
              !c.hasPlus &&
                (0, h.jsxs)("div", { className: eL().plus, children: [N, g] }),
              (0, h.jsx)(f.Suspense, {
                children: (0, h.jsx)("div", {
                  className: eL().user,
                  children: (0, h.jsx)(W.Iw, {
                    metaClassName: (0, y.W)(eL().userMeta, {
                      [eL().userMeta_animate]: i,
                      [eL().userMeta_collapsed]: a,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var ez = a(73061),
        eU = a.n(ez),
        eF = a(14825),
        eW = a.n(eF);
      let eQ = (e) => {
          let { className: t } = e;
          return (0, h.jsxs)("div", {
            className: (0, y.W)(eW().root, t),
            children: [
              (0, h.jsx)(U.Caption, {
                className: eW().nda,
                variant: "span",
                size: "m",
                weight: "medium",
                children: (0, h.jsx)(k.Z, { id: "entity-names.nda" }),
              }),
              (0, h.jsx)(U.Caption, {
                className: eW().text,
                variant: "span",
                size: "m",
                weight: "normal",
                lineClamp: 1,
                children: (0, h.jsx)(k.Z, {
                  id: "warning-messages.only-for-staff",
                }),
              }),
            ],
          });
        },
        eq = (0, x.Pi)((e) => {
          let { className: t } = e,
            a = (0, C.hJ)(),
            { experiments: i } = (0, C.oR)(),
            { formatMessage: r } = (0, P.Z)(),
            n = r({ id: "navigation.main-menu" }),
            o = (0, f.useMemo)(
              () => ({
                search: r({ id: "navigation.search" }),
                main: r({ id: "navigation.page-main" }),
                collection: r({ id: "navigation.page-collection" }),
              }),
              [r],
            );
          return (0, h.jsxs)("div", {
            className: (0, y.W)(eU().root, t),
            children: [
              i.checkExperiment(C.pe.WebNextNDABadge, "on") &&
                (0, h.jsx)(eQ, { className: eU().ndaBadge }),
              (0, h.jsx)(T, {
                collapsed: !0,
                direction: "horizontal",
                "aria-label": n,
                children: (0, h.jsx)(D, {
                  children: (0, h.jsxs)(h.Fragment, {
                    children: [
                      (0, C.sQ)(i).map((e) =>
                        (0, h.jsx)(
                          O,
                          {
                            selected: a(e.path),
                            children: (0, h.jsxs)(Q.rU, {
                              href: e.path,
                              children: [
                                (0, h.jsx)(L.J, {
                                  variant: a(e.path) ? e.iconSelected : e.icon,
                                  size: "m",
                                }),
                                (0, h.jsx)(U.Caption, {
                                  variant: "span",
                                  type: "controls",
                                  size: "m",
                                  weight: "medium",
                                  lineClamp: 1,
                                  children: o[e.id],
                                }),
                              ],
                            }),
                          },
                          e.id,
                        ),
                      ),
                      (0, h.jsx)(O, {
                        children: (0, h.jsx)(W.Iw, {
                          className: eU().user,
                          variant: "mobile",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }),
        eG = (0, x.Pi)((e) => {
          let { className: t } = e,
            a = (0, C.uK)().get(C.V0),
            i = j(),
            { settings: r } = (0, C.oR)(),
            [n, o] = (0, f.useState)(a.get(C.BU.NavbarCollapsed) || !1),
            [l, s] = (0, f.useState)(!1),
            c = (0, f.useMemo)(
              () => (r.layout === C.t8.Mobile ? eq : eO),
              [r.layout],
            ),
            d = (0, f.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  a.set(C.BU.NavbarCollapsed, !n, { expires: 180 }),
                  o(!n),
                  s(!0);
              },
              [n, a],
            );
          return (0, h.jsx)("aside", {
            className: (0, y.W)(S().root, { [S().root_collapsed]: n || i }, t),
            ...(0, b.BA)(b.QM.navbar.NAVBAR),
            children: (0, h.jsx)(c, {
              handleClick: d,
              collapsed: n || i,
              shownAnimation: l,
            }),
          });
        });
      var eZ = a(42288);
      let eH = eZ.V5.model("PinAlbumItemModel", {
          type: eZ.V5.literal(Z.Qm.ALBUM),
          data: K.KX,
        }),
        eJ = eZ.V5.model("PinArtistItemModel", {
          type: eZ.V5.literal(Z.Qm.ARTIST),
          data: ed.Go,
        }),
        eK = eZ.V5.model("PinPlaylistItemModel", {
          type: eZ.V5.literal(Z.Qm.PLAYLIST),
          data: e_.Cd,
        }),
        eY = eZ.V5.model("PinVibeItemModel", {
          type: eZ.V5.literal(Z.Qm.WAVE),
          data: eh.KW,
        }),
        eX = eZ.V5.union(eH, eJ, eK, eY),
        e$ = (e) => "object" == typeof e && e && "type" in e;
      var e0 = a(93490),
        e1 = a(31579);
      let e5 = (e) => {
          switch (e.type) {
            case Z.Qm.WAVE:
              return (0, eZ.pj)({ type: Z.Qm.WAVE, data: (0, eh.FF)(e.data) });
            case Z.Qm.PLAYLIST:
              return (0, eZ.pj)({
                type: Z.Qm.PLAYLIST,
                data: (0, e1.RE)({ playlist: e.data }),
              });
            case Z.Qm.ARTIST:
              return (0, eZ.pj)({
                type: Z.Qm.ARTIST,
                data: (0, ed.tR)(e.data),
              });
            case Z.Qm.ALBUM:
              return (0, eZ.pj)({
                type: Z.Qm.ALBUM,
                data: (0, e0.cO)({ album: e.data }),
              });
          }
        },
        e2 = eZ.V5.model("Pins", {
          loadingState: eZ.V5.enumeration(Object.values(C.Gu)),
          items: eZ.V5.maybeNull(eZ.V5.array(eX)),
          index: eZ.V5.map(eZ.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var a;
                (e.items = (0, eZ.pj)(
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var a, i, r, n;
                if (
                  (null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.length) === 30
                ) {
                  let t =
                    null === (n = e.items) || void 0 === n ? void 0 : n.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (i = e.items) || void 0 === i || i.unshift(e5(t));
                let o =
                  null === (r = e.items) || void 0 === r ? void 0 : r.at(0);
                o && e.index.set(o.data.pinId, !0);
              },
              getData: (0, eZ.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: a } = (0, eZ.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    var i;
                    e.loadingState = C.Gu.PENDING;
                    let a = yield t.getPins();
                    (e.items = (0, eZ.pj)(a.pins.map(e5))),
                      null === (i = e.items) ||
                        void 0 === i ||
                        i.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = C.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = C.Gu.REJECT), a.error(t);
                  }
              }),
              toggleAlbumPin: (0, eZ.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: n } = (0, eZ.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(i))
                      return (n = yield r.unpinAlbum(a)), t.deletePin(i), n;
                    return (n = yield r.pinAlbum(a)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eZ.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: n } = (0, eZ.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(i))
                      return (n = yield r.unpinArtist(a)), t.deletePin(i), n;
                    return (n = yield r.pinArtist(a)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eZ.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: n } = (0, eZ.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(i))
                      return (n = yield r.unpinPlaylist(a)), t.deletePin(i), n;
                    return (
                      (n = yield r.pinPlaylist(a)), e$(n) && t.addPin(n), n
                    );
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eZ.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: n } = (0, eZ.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(i))
                      return (n = yield r.unpinWave(a)), t.deletePin(i), n;
                    return (n = yield r.pinWave(a)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    91973: function (e, t, a) {
      "use strict";
      a.d(t, {
        Rt: function () {
          return e2;
        },
        Oe: function () {
          return tn;
        },
        ev: function () {
          return ei;
        },
      });
      var i,
        r,
        n = a(9753),
        o = a(60836),
        l = a(9544),
        s = a(98639),
        c = a(8957),
        d = a(63394),
        u = a(12683),
        m = a.n(u),
        _ = a(80542),
        p = a(31014),
        v = a(23881),
        h = a(84338),
        y = a(39513),
        x = a(28852),
        f = a(12404),
        g = a(16636),
        b = a(5773),
        C = a(2570),
        N = a(71230),
        j = a(33060),
        w = a.n(j),
        S = a(58163),
        P = a.n(S);
      let k = (e) => {
          let { value: t, variant: a, className: i } = e;
          return (0, n.jsx)(C.Caption, {
            className: (0, o.W)(P().root, P()["root_".concat(a)], i),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            children: t,
          });
        },
        E = (e) => {
          let {
              className: t,
              sliderClassName: a,
              disabled: i,
              isFullscreen: r,
              isMobile: l,
              showThumbVariant: c,
              withTimecode: u = !0,
            } = e,
            m = (0, d.R$)(),
            p = (r || !l) && u,
            h = (0, s.useRef)(!1),
            [y, x] = (0, s.useState)(0),
            [f, g] = (0, s.useState)(0),
            [b, C] = (0, s.useState)(0),
            { formatMessage: j } = (0, _.Z)(),
            S = (0, s.useCallback)(
              (e, t) => {
                (h.current = !t), t ? null == m || m.setProgress(e) : x(e);
              },
              [m],
            );
          return (
            (0, s.useEffect)(() => {
              let e =
                null == m
                  ? void 0
                  : m.state.playerState.progress.onChange(() => {
                      let e = m.state.playerState.progress.value;
                      e.duration === 1 / 0
                        ? (g(0), x(0), C(0))
                        : (g(e.duration),
                          x((t) => (h.current ? t : e.position)),
                          C(e.loaded));
                    });
              return () => {
                null == e || e();
              };
            }, [m]),
            (0, n.jsxs)("div", {
              className: (0, o.W)(
                w().root,
                {
                  [w().root_fullscreen]: r,
                  [w().root_mobile]: l,
                  [w().root_withTimecode]: u,
                },
                t,
              ),
              children: [
                p &&
                  (0, n.jsx)(k, {
                    value: (0, d.gf)(Math.round(y), Math.round(f)),
                    variant: "start",
                    className: w().timecode,
                  }),
                (0, n.jsx)(N.i, {
                  className: (0, o.W)(
                    w().slider,
                    {
                      [w()["slider_thumbSize_".concat(r || l ? "xs" : "m")]]:
                        !0,
                    },
                    a,
                  ),
                  disabled: i,
                  thumbSize: r || l ? "xs" : "s",
                  trackSize: r || l ? "xs" : "s",
                  value: Math.round(y),
                  mode: "deferred",
                  secondaryValue: Math.round(b),
                  maxValue: 0 === f ? void 0 : Math.round(f),
                  onChange: S,
                  "aria-label": j({ id: "player-actions.timecode-control" }),
                  showThumbVariant: c,
                  ...(0, v.BA)(v.bG.changeTimecode.TIMECODE_SLIDER),
                }),
                p &&
                  (0, n.jsx)(k, {
                    value: (0, d.gf)(Math.round(f), Math.round(f)),
                    variant: "end",
                    className: w().timecode,
                  }),
              ],
            })
          );
        };
      var M = a(29569),
        L = a(75191),
        A = a(23472),
        I = a(67868),
        B = a(62434);
      let V = {
        [B.nJ.HQ_PLUS]: "HQ+",
        [B.nJ.HQ]: "HQ",
        [B.nJ.NQ]: "NQ",
        [B.nJ.LQ]: "LQ",
        [B.nJ.PREVIEW]: "PREVIEW",
      };
      var R = a(43056),
        T = a.n(R);
      let D = (e) => {
          let { className: t, ariaLabel: a, onClick: i, forwardRef: r } = e;
          return (0, n.jsx)("div", {
            ref: r,
            className: (0, o.W)(T().root, t),
            children: (0, n.jsx)(y.z, {
              className: T().button,
              radius: "round",
              size: "s",
              color: "secondary",
              withRipple: !1,
              "aria-label": a,
              icon: (0, n.jsx)(x.J, { variant: "fullscreen", size: "xs" }),
              onClick: i,
            }),
          });
        },
        O = (0, s.forwardRef)((e, t) => (0, n.jsx)(D, { forwardRef: t, ...e }));
      var z = a(385),
        U = a(98776),
        F = a.n(U);
      let W = (e) => {
        let { closeToast: t, onOpenQualitySettingsMenu: a, message: i } = e,
          { formatMessage: r } = (0, _.Z)(),
          o = (0, s.useCallback)(() => {
            a(), null == t || t();
          }, [t, a]),
          l = (0, s.useMemo)(
            () =>
              (0, n.jsxs)("div", {
                className: F().message,
                children: [
                  (0, n.jsx)(C.Caption, {
                    variant: "div",
                    size: "m",
                    children: i,
                  }),
                  (0, n.jsx)(y.z, {
                    className: F().changeButton,
                    onClick: o,
                    variant: "text",
                    withRipple: !1,
                    "aria-label": r({ id: "interface-actions.change" }),
                    children: (0, n.jsx)(C.Caption, {
                      variant: "div",
                      size: "m",
                      children: (0, n.jsx)(p.Z, {
                        id: "interface-actions.change",
                      }),
                    }),
                  }),
                ],
              }),
            [r, o, i],
          );
        return (0, n.jsx)(I.Yj, {
          closeToast: t,
          cover: (0, n.jsx)(x.J, {
            className: F().icon,
            size: "xs",
            variant: "settings",
          }),
          message: l,
        });
      };
      var Q = a(55676),
        q = a.n(Q);
      let G = {
          duration: 300,
          initial: { transform: "translateY(5%)", opacity: 0 },
          open: { transform: "translateY(0)", opacity: 1 },
          close: { transform: "translateY(5%)", opacity: 0 },
        },
        Z = [
          {
            type: B.nJ.HQ_PLUS,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-hq-plus" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: q().item_type,
                  children: ["• ", V[B.nJ.HQ_PLUS]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq-plus",
          },
          {
            type: B.nJ.HQ,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-hq" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: q().item_type,
                  children: ["• ", V[B.nJ.HQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq",
          },
          {
            type: B.nJ.NQ,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-nq" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: q().item_type,
                  children: ["• ", V[B.nJ.NQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-nq",
          },
        ],
        H = {
          [B.nJ.HQ_PLUS]: (0, n.jsx)(p.Z, {
            id: "player-actions.hq-plus-description",
          }),
          [B.nJ.HQ]: (0, n.jsx)(p.Z, { id: "player-actions.hq-description" }),
          [B.nJ.NQ]: (0, n.jsx)(p.Z, { id: "player-actions.nq-description" }),
          [B.nJ.LQ]: (0, n.jsx)(p.Z, { id: "player-actions.nq-description" }),
        },
        J = (0, l.Pi)((e) => {
          let {
            reference: t,
            onOpenChange: a,
            open: i,
            placement: r,
            returnFocus: l,
            isNewQualityEnabled: c,
          } = e;
          (0, d.ZP)(i);
          let { formatMessage: u } = (0, _.Z)(),
            { contentRef: m } = (0, d.$Y)(),
            { notify: v } = (0, d.d$)(),
            h = (0, d.uK)().get(d.V0),
            { sonataState: f, user: g } = (0, d.oR)(),
            b = (0, d.Sc)(),
            N = (0, s.useRef)(null),
            j = c
              ? u({ id: "player-actions.audio-quality-nda" })
              : u({ id: "player-actions.audio-quality" }),
            w = (0, s.useCallback)(() => {
              null == a || a(!0);
            }, [a]),
            S = (0, s.useCallback)(() => {
              null == a || a(!1);
            }, [a]),
            P = (0, s.useCallback)(
              (e) => {
                f.setQuality(e),
                  null == b || b.setQuality(e),
                  h.set(d.BU.YmPlayerQuality, e);
              },
              [b, f, h],
            ),
            k = (0, s.useCallback)(
              (e) => {
                let t = u({ id: e }).toLowerCase();
                return (0, n.jsx)(p.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [u],
            ),
            E = (0, s.useCallback)(
              (e, t) => () => {
                if (f.quality === e) return;
                P(e);
                let a = k(t);
                v((0, n.jsx)(W, { onOpenQualitySettingsMenu: w, message: a }), {
                  containerId: d.W$.INFO,
                });
              },
              [k, w, v, f.quality, P],
            ),
            M = (0, s.useMemo)(() => {
              let e = !g.hasPlus;
              return Z.map((t) => {
                let { type: a, text: i, qualityMessageId: r } = t;
                if (!c && a === B.nJ.HQ_PLUS) return null;
                let l =
                    a === f.quality
                      ? (0, n.jsx)(x.J, { variant: "check" })
                      : null,
                  s = a === f.quality;
                return (
                  ((f.quality === B.nJ.NQ && a === B.nJ.LQ) ||
                    (f.quality === B.nJ.LQ && a === B.nJ.NQ)) &&
                    ((s = !0), (l = (0, n.jsx)(x.J, { variant: "check" }))),
                  (0, n.jsxs)(
                    z.sN,
                    {
                      isBlock: !0,
                      disabled: e,
                      className: (0, o.W)(q().item, { [q().expandedItem]: c }),
                      iconPosition: "right",
                      icon: l,
                      onClick: E(a, r),
                      role: "option",
                      "aria-selected": s,
                      children: [
                        c &&
                          (0, n.jsxs)("span", {
                            className: q().itemWrapper,
                            children: [
                              (0, n.jsx)("span", {
                                className: q().item_option,
                                children: i,
                              }),
                              (0, n.jsx)("span", {
                                className: (0, o.W)(
                                  q().item_option,
                                  q().itemSubTitle,
                                ),
                                children: H[a],
                              }),
                            ],
                          }),
                        !c &&
                          (0, n.jsx)("span", {
                            className: q().item_option,
                            children: i,
                          }),
                      ],
                    },
                    a,
                  )
                );
              });
            }, [E, f.quality, g.hasPlus, c]),
            L = (0, s.useMemo)(
              () =>
                c
                  ? {
                      className: q().root,
                      popoverContentClassName: q().popoverContent,
                      disableFloatingStyles: !0,
                      portalNode: m,
                      transform: !1,
                      transition: G,
                    }
                  : { offsetOptions: 10 },
              [m, c],
            );
          return (0, n.jsxs)(z.v2, {
            reference: t,
            placement: r,
            open: i,
            onOpenChange: a,
            returnFocus: l,
            role: "listbox",
            strategy: "absolute",
            ...L,
            children: [
              (0, n.jsxs)(C.Heading, {
                className: (0, o.W)(q().header, {
                  [q().headerWithCloseButton]: c,
                }),
                variant: "h4",
                size: "xs",
                weight: "bold",
                children: [
                  j,
                  c &&
                    (0, n.jsx)(y.z, {
                      ref: N,
                      radius: "round",
                      color: "secondary",
                      size: "xxs",
                      icon: (0, n.jsx)(x.J, { variant: "close", size: "xxs" }),
                      onClick: S,
                      "aria-label": u({
                        id: "interface-actions.close-quality-settings",
                      }),
                    }),
                ],
              }),
              M,
            ],
          });
        });
      var K = a(66846),
        Y = a.n(K);
      let X = "player-region",
        $ = (0, l.Pi)((e) => {
          let { className: t, entityMeta: a, onLikeClick: i } = e,
            {
              user: r,
              sonataState: l,
              experiments: c,
              fullscreenPlayer: u,
            } = (0, d.oR)(),
            { theme: m } = (0, d.Fg)(),
            [N, j] = (0, s.useState)(!1),
            [w, S] = (0, s.useState)(!1),
            { formatMessage: P } = (0, _.Z)(),
            k = (0, d.uK)().get(d.V0),
            B = l.contextType === h.Ak.Generative,
            R = !B,
            T = c.checkExperiment(d.pe.WebNextPodcastPage, "on"),
            D = true,
            z = k.get(d.BU.YmPlayerQuality),
            U = z ? V[z] : null,
            F = r.isAuthorized && !B,
            W = true && !(null == a ? void 0 : a.isNonMusic),
            Q = (0, d.RV)(),
            q = l.canSpeed && Q && T && (null == a ? void 0 : a.isNonMusic),
            G = (0, s.useMemo)(
              () => ({
                "--player-average-color-background": (0, A.Er)(
                  m,
                  null == a ? void 0 : a.averageColor,
                ),
              }),
              [null == a ? void 0 : a.averageColor, m],
            ),
            Z = (0, s.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            H = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION"].includes(t.tagName);
                a && R && i && u.showFullscreenPlayerModal();
              },
              [a, u, R],
            ),
            K = (0, s.useMemo)(() => {
              if (null == a ? void 0 : a.isNonMusic) return null;
              let e = ""
                .concat(P({ id: "interface-actions.open-sync-lyrics" }), " ")
                .concat(P({ id: "warning-messages.can-break-accessibility" }));
              return W
                ? (0, n.jsx)(y.z, {
                    radius: "round",
                    size: "xxxs",
                    variant: "text",
                    disabled: !(null == a ? void 0 : a.hasSyncLyrics),
                    withRipple: !1,
                    "aria-label": e,
                    icon: (0, n.jsx)(x.J, { variant: "lyrics", size: "xs" }),
                    onClick: u.showSyncLyricsModal,
                  })
                : (0, n.jsx)(I.wx, {
                    title: P({ id: "entity-names.sync-lyrics" }),
                    description: P({ id: "future-feature.message" }),
                    children: (0, n.jsx)(y.z, {
                      radius: "round",
                      size: "xxxs",
                      variant: "text",
                      disabled: !0,
                      withRipple: !1,
                      "aria-label": e,
                      icon: (0, n.jsx)(x.J, { variant: "lyrics", size: "xs" }),
                    }),
                  });
            }, [
              W,
              null == a ? void 0 : a.hasSyncLyrics,
              P,
              u.showSyncLyricsModal,
              null == a ? void 0 : a.isNonMusic,
            ]);
          return (0, n.jsxs)("section", {
            style: G,
            className: (0, o.W)(Y().root, { [Y().root_disabled]: !a }, t),
            onDoubleClick: H,
            "aria-labelledby": X,
            ...(0, v.BA)(v.QM.player.PLAYERBAR_DESKTOP),
            children: [
              (0, n.jsx)(g.y, {
                children: (0, n.jsx)(C.Heading, {
                  variant: "h3",
                  id: X,
                  children: (0, n.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              (0, n.jsxs)("div", {
                className: Y().info,
                children: [
                  (0, n.jsx)("div", {
                    className: Y().infoCard,
                    children:
                      a &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)(f.Paper, {
                            radius: "s",
                            className: Y().coverContainer,
                            children: [
                              (0, n.jsx)(I.BE, {
                                className: Y().cover,
                                src: a.coverUri,
                                size: 100,
                                fit: "cover",
                                withAvatarReplace: !0,
                              }),
                              R &&
                                (0, n.jsxs)(b.u, {
                                  placement: "top",
                                  offsetOptions: 4,
                                  children: [
                                    (0, n.jsx)(O, {
                                      ariaLabel: P({
                                        id: "player-actions.fullscreen",
                                      }),
                                      onClick: u.showFullscreenPlayerModal,
                                    }),
                                    (0, n.jsx)(b._v, {
                                      children: (0, n.jsx)(p.Z, {
                                        id: "player-actions.fullscreen",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: Y().description,
                            children: (null == a ? void 0 : a.isPodcast)
                              ? (0, n.jsx)(A.wT, {
                                  track: a,
                                  withDate: !1,
                                  withSecondaryColor: !0,
                                  withExplicitMark: !0,
                                  withPodcastName: !0,
                                })
                              : (0, n.jsx)(A.ko, {
                                  track: a,
                                  withSecondaryColor: !0,
                                  withExplicitMark: !0,
                                  withAlbumLink: !0,
                                }),
                          }),
                        ],
                      }),
                  }),
                  (0, n.jsx)("div", {
                    className: Y().infoButtons,
                    onDoubleClick: Z,
                    children:
                      a &&
                      F &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(I.dJ, {
                            className: Y().likeButton,
                            isLiked: a.isLiked,
                            onClick: i,
                            iconSize: "xs",
                          }),
                          (0, n.jsx)(A.hz, {
                            track: a,
                            placement: "top",
                            open: N,
                            onOpenChange: j,
                            reference: (0, n.jsx)(y.z, {
                              size: "s",
                              variant: "text",
                              withRipple: !1,
                              radius: "round",
                              "aria-label": P({
                                id: "interface-actions.context-menu",
                              }),
                              icon: (0, n.jsx)(x.J, {
                                size: "xs",
                                variant: "more",
                              }),
                            }),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: Y().sonata,
                children: [
                  (0, n.jsx)(L.WP, { isMobile: !1, entityMeta: a }),
                  !l.isGenerativeContext &&
                    (0, n.jsx)(E, {
                      disabled: !a,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: Y().meta,
                children: [
                  !l.isGenerativeContext &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        q && (0, n.jsx)(I.t5, { iconSize: "l" }),
                        K,
                        (0, n.jsx)(I.wx, {
                          title: P({ id: "player-actions.history" }),
                          description: P({ id: "future-feature.message" }),
                          children: (0, n.jsx)(y.z, {
                            radius: "round",
                            size: "xxxs",
                            variant: "text",
                            disabled: !0,
                            withRipple: !1,
                            "aria-label": P({ id: "player-actions.history" }),
                            icon: (0, n.jsx)(x.J, {
                              variant: "queue",
                              size: "xs",
                            }),
                          }),
                        }),
                        (0, n.jsx)(J, {
                          placement: "bottom",
                          open: w,
                          isNewQualityEnabled: D,
                          onOpenChange: S,
                          reference: (0, n.jsx)(y.z, {
                            className: (0, o.W)({ [Y().settingsButton]: D }),
                            radius: "round",
                            size: "xxxs",
                            variant: "text",
                            withRipple: !1,
                            "aria-label": P({
                              id: "player-actions.audio-quality",
                            }),
                            icon: D
                              ? null
                              : (0, n.jsx)(x.J, {
                                  variant: "settings",
                                  size: "xs",
                                }),
                            ...(0, v.BA)(v.QM.player.SOUND_QUALITY_BUTTON),
                            children: D ? U : null,
                          }),
                        }),
                      ],
                    }),
                  (0, n.jsx)(M.F, {}),
                ],
              }),
            ],
          });
        });
      var ee = a(83249),
        et = a.n(ee);
      let ea = (0, l.Pi)((e) => {
          var t;
          let { className: a, entityMeta: i, onLikeClick: r } = e,
            { user: l, sonataState: c, fullscreenPlayer: u } = (0, d.oR)(),
            { theme: m } = (0, d.Fg)(),
            _ = c.contextType === h.Ak.Generative,
            v = l.isAuthorized && !_,
            y =
              (null == i ? void 0 : i.isTrackPodcast) ||
              (null == i
                ? void 0
                : null === (t = i.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            x = (0, s.useMemo)(
              () => ({
                "--player-average-color-background": (0, A.Er)(
                  m,
                  null == i ? void 0 : i.averageColor,
                ),
              }),
              [null == i ? void 0 : i.averageColor, m],
            ),
            b = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  a =
                    t instanceof Element &&
                    ["DIV", "SECTION", "IMG"].includes(t.tagName);
                i && a && u.showFullscreenPlayerModal();
              },
              [i, u],
            );
          return (0, n.jsxs)("section", {
            style: x,
            className: (0, o.W)(et().root, a),
            onClick: b,
            children: [
              (0, n.jsx)(g.y, {
                children: (0, n.jsx)(C.Heading, {
                  variant: "h3",
                  id: "player-region",
                  children: (0, n.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              !c.isGenerativeContext &&
                (0, n.jsx)(E, {
                  className: et().progressBar,
                  sliderClassName: et().progressBar,
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !i,
                }),
              (0, n.jsxs)("div", {
                className: et().info,
                children: [
                  i
                    ? (0, n.jsxs)("div", {
                        className: et().infoCard,
                        children: [
                          (0, n.jsx)(f.Paper, {
                            radius: "s",
                            className: et().coverContainer,
                            children: (0, n.jsx)(I.BE, {
                              className: et().cover,
                              src: i.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: et().description,
                            children: y
                              ? (0, n.jsx)(A.wT, {
                                  track: i,
                                  withDate: !1,
                                  withSecondaryColor: !0,
                                  withExplicitMark: !0,
                                  withPodcastName: !0,
                                })
                              : (0, n.jsx)(A.ko, {
                                  track: i,
                                  withSecondaryColor: !0,
                                  withExplicitMark: !0,
                                  withAlbumLink: !0,
                                }),
                          }),
                        ],
                      })
                    : (0, n.jsx)("div", { className: et().infoCard }),
                  (0, n.jsxs)("div", {
                    className: et().infoButtons,
                    children: [
                      i &&
                        v &&
                        (0, n.jsx)(I.dJ, { isLiked: i.isLiked, onClick: r }),
                      (0, n.jsx)(L.WP, { isMobile: !0, entityMeta: i }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        ei = (0, l.Pi)((e) => {
          let { className: t } = e,
            { settings: a, sonataState: i } = (0, d.oR)(),
            r = (0, d.XU)(),
            l = (0, c.SB)(i.entityMeta),
            u = (0, c.KX)(i.entityMeta);
          (0, s.useEffect)(() => {
            if (!i.isGenerativeContext)
              return (
                null == r || r.addShortcutsListener(d.yx.LIKE, l),
                null == r || r.addShortcutsListener(d.yx.DISLIKE, u),
                () => {
                  null == r || r.removeShortcutsListener(d.yx.LIKE),
                    null == r || r.removeShortcutsListener(d.yx.DISLIKE);
                }
              );
          }, [u, l, r, i.isGenerativeContext]);
          let _ = (0, s.useMemo)(
            () => (a.layout === d.t8.Mobile ? ea : $),
            [a.layout],
          );
          return (0, n.jsx)(_, {
            onLikeClick: l,
            entityMeta: i.entityMeta,
            className: (0, o.W)(t, m().root),
          });
        });
      var er = a(23897),
        en = a(89352),
        eo = a(69863),
        el = a(80615),
        es = a.n(el),
        ec = a(63341),
        ed = a.n(ec);
      let eu = (0, l.Pi)((e) => {
        var t;
        let { className: a } = e,
          { formatMessage: i } = (0, _.Z)(),
          { sonataState: r, fullscreenPlayer: l } = (0, d.oR)(),
          c = (0, s.useCallback)(
            (e) => {
              e.stopPropagation(), l.syncLyrics.setInvisible();
            },
            [l],
          ),
          u = (0, s.useMemo)(
            () =>
              r.entityMeta
                ? (0, n.jsx)(A.ko, {
                    track: r.entityMeta,
                    withExplicitMark: !0,
                    withSecondaryColor: !0,
                    withAlbumLink: !0,
                    captionSize: "l",
                    explicitSize: "s",
                    withAllArtistsTitle: !0,
                  })
                : null,
            [r.entityMeta],
          );
        return (0, n.jsx)("div", {
          className: (0, o.W)(ed().root, a),
          children: (0, n.jsxs)("div", {
            className: ed().card,
            children: [
              (0, n.jsxs)("div", {
                className: ed().coverContainer,
                children: [
                  (0, n.jsx)(I.BE, {
                    className: ed().cover,
                    src:
                      null === (t = r.entityMeta) || void 0 === t
                        ? void 0
                        : t.coverUri,
                    size: 100,
                    fit: "cover",
                    withAvatarReplace: !0,
                  }),
                  (0, n.jsx)(O, {
                    className: ed().button,
                    ariaLabel: i({ id: "interface-actions.hide-sync-lyrics" }),
                    onClick: c,
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: ed().info,
                children: [
                  u,
                  (0, n.jsx)(E, {
                    className: ed().slider,
                    disabled: !u,
                    isMobile: !1,
                    isFullscreen: !1,
                    withTimecode: !1,
                  }),
                ],
              }),
            ],
          }),
        });
      });
      var em = a(68466),
        e_ = a.n(em);
      let ep = (e) => (e + 1) * 0.275,
        ev = (e) => {
          let { className: t, icon: a } = e,
            i = (0, s.useCallback)(
              (e) => {
                let t = {
                  animationDelay: "".concat(ep(e), "s"),
                  animationDuration: "".concat(1.1, "s, ").concat(1.1, "s"),
                };
                return a
                  ? (0, s.cloneElement)(a, {
                      className: (0, o.W)(e_().element, e_().element_withIcon),
                      key: e,
                      style: t,
                    })
                  : (0, n.jsx)(
                      "div",
                      {
                        className: (0, o.W)(
                          e_().element,
                          e_().element_withDefaultElement,
                        ),
                        style: t,
                      },
                      e,
                    );
              },
              [a],
            );
          return (0, n.jsx)("div", {
            className: (0, o.W)(e_().root, t),
            children: Array.from({ length: 4 }, (e, t) => i(t)),
          });
        };
      var eh = a(75015),
        ey = a(45131);
      ((i = r || (r = {})).INTRO = "intro"),
        (i.PREPARE = "prepare"),
        (i.PLAYING = "playing"),
        (i.OUTRO = "outro");
      let ex = (e) => {
          let { delay: t, initialState: a, throttleTimeout: i } = e,
            r = (0, s.useRef)(null),
            [n, o] = (0, s.useState)(!!a),
            l = (0, s.useMemo)(
              () =>
                (0, er.Z)(
                  () => {
                    o(!a),
                      r.current && window.clearTimeout(r.current),
                      (r.current = window.setTimeout(() => {
                        o(!!a);
                      }, t));
                  },
                  i,
                  { trailing: !1 },
                ),
              [t, a, i],
            ),
            c = (0, s.useCallback)(() => {
              o(!!a), r.current && window.clearTimeout(r.current);
            }, [a]);
          return (
            (0, s.useEffect)(
              () => () => {
                r.current && window.clearTimeout(r.current);
              },
              [],
            ),
            { state: n, handleDelayedToggle: l, reset: c }
          );
        },
        ef = () => {
          var e;
          let t = (0, d.R$)(),
            [a, i] = (0, s.useState)(
              null !==
                (e =
                  null == t
                    ? void 0
                    : t.state.playerState.progress.value.position) &&
                void 0 !== e
                ? e
                : 0,
            ),
            r = (0, s.useCallback)((e) => {
              i(e);
            }, []);
          return (
            (0, s.useEffect)(() => {
              let e =
                null == t
                  ? void 0
                  : t.state.playerState.progress.onChange(() => {
                      i(t.state.playerState.progress.value.position);
                    });
              return () => {
                null == e || e();
              };
            }, [t]),
            { progressPosition: a, setProgressPosition: r }
          );
        };
      var eg = a(30742);
      let eb = (e) => {
          let { onSetProgressEventChange: t } = e,
            a = (0, d.R$)();
          (0, s.useEffect)(() => {
            let e =
              null == a
                ? void 0
                : a.state.playerState.event.onChange((e) => {
                    e === eg.KX.SET_PROGRESS && t();
                  });
            return () => {
              null == e || e();
            };
          }, [t, a]);
        },
        eC = (e) => {
          let { position: t } = e,
            {
              fullscreenPlayer: { syncLyrics: a },
            } = (0, d.oR)();
          return {
            state: (0, s.useMemo)(() => {
              let { startSec: e, endSec: i } = a;
              return e && e >= 3 && e - t > 0 && e - t <= 3
                ? r.PREPARE
                : e && e > t
                  ? r.INTRO
                  : i && t > i
                    ? r.OUTRO
                    : r.PLAYING;
            }, [t, a]),
          };
        };
      var eN = a(83627),
        ej = a.n(eN);
      let ew = (0, l.Pi)(() => {
        var e, t, a;
        let { formatMessage: i } = (0, _.Z)(),
          {
            fullscreenPlayer: { syncLyrics: r },
          } = (0, d.oR)();
        return (0, n.jsxs)("footer", {
          className: ej().root,
          children: [
            r.hasWriters &&
              (0, n.jsx)(C.Caption, {
                className: ej().writers,
                variant: "div",
                size: "l",
                weight: "medium",
                children: i(
                  { id: "entity-names.authors" },
                  {
                    authors:
                      null === (e = r.writers) || void 0 === e
                        ? void 0
                        : e.join(", "),
                  },
                ),
              }),
            (null === (t = r.major) || void 0 === t ? void 0 : t.name) &&
              (0, n.jsx)(C.Caption, {
                className: ej().major,
                variant: "div",
                size: "l",
                weight: "medium",
                children: i(
                  { id: "entity-names.source" },
                  {
                    source:
                      null === (a = r.major) || void 0 === a ? void 0 : a.name,
                  },
                ),
              }),
          ],
        });
      });
      var eS = a(73390),
        eP = a.n(eS);
      let ek = (e) => {
        let { className: t, text: a } = e;
        return (0, n.jsx)("span", {
          className: (0, o.W)(eP().root, t),
          children: a,
        });
      };
      var eE = a(77920),
        eM = a.n(eE);
      let eL = (e) => {
          let t = (0, s.useRef)(0),
            {
              fullscreenPlayer: { syncLyrics: a },
              sonataState: { contextId: i, contextType: r },
            } = (0, d.oR)();
          (0, s.useEffect)(() => {
            !a.hasLyricsViewed &&
              null !== e &&
              "visible" === document.visibilityState &&
              (t.current++,
              t.current >= 2 && a.sendViews({ contextId: i, contextType: r }));
          }, [e, i, r, a]);
        },
        eA = (0, l.Pi)((e) => {
          var t, a;
          let {
              state: i,
              progressPosition: l,
              shouldShowScrolledLyrics: c,
              setProgressPosition: u,
            } = e,
            m = (0, d.R$)(),
            _ = (0, ey.oc)(),
            {
              fullscreenPlayer: { syncLyrics: p },
            } = (0, d.oR)(),
            v = (0, s.useCallback)(
              (e) => () => {
                c &&
                  (u(e + 0.01),
                  null == m ||
                    m.setProgress(e + 0.01).catch(() => {
                      u(l);
                    }));
              },
              [l, u, c, m],
            ),
            h = p.getActiveLineIndex(l);
          return (
            eL(h),
            (0, s.useEffect)(() => {
              if (!c) {
                if (
                  ((i === r.INTRO || i === r.PREPARE) && _.slideTo(0),
                  i === r.OUTRO)
                ) {
                  var e;
                  _.slideTo(
                    Number(
                      null === (e = p.lines) || void 0 === e
                        ? void 0
                        : e.length,
                    ),
                  );
                }
                null !== h && _.slideTo(h + 1);
              }
            }, [
              h,
              c,
              i,
              _,
              null === (t = p.lines) || void 0 === t ? void 0 : t.length,
            ]),
            null === (a = p.lines) || void 0 === a
              ? void 0
              : a.map((e, t) => {
                  var a;
                  return (0, n.jsx)(
                    ey.o5,
                    {
                      onClick: v(e.fromSec),
                      className: (0, o.W)(eM().line, {
                        [eM().line_last]:
                          t ===
                            Number(
                              null === (a = p.lines) || void 0 === a
                                ? void 0
                                : a.length,
                            ) -
                              1 && !c,
                        [eM().line_active]: t === h && !c,
                      }),
                      children: (0, n.jsx)(ek, { text: e.text }),
                    },
                    e.key,
                  );
                })
          );
        });
      eA.displayName = "SwiperSlide";
      let eI = { forceToAxis: !0 },
        eB = (0, l.Pi)(() => {
          let {
              fullscreenPlayer: { syncLyrics: e },
              settings: t,
            } = (0, d.oR)(),
            { progressPosition: a, setProgressPosition: i } = ef(),
            { state: l } = eC({ position: a }),
            {
              state: c,
              handleDelayedToggle: u,
              reset: m,
            } = ex({ delay: 3e3, throttleTimeout: 300 }),
            {
              state: _,
              handleDelayedToggle: p,
              reset: v,
            } = ex({ delay: 3e3, throttleTimeout: 300 }),
            h = t.layout === d.t8.Mobile,
            y = (0, s.useCallback)(() => {
              _ || u();
            }, [u, _]),
            x = (0, s.useCallback)(() => {
              c && m(), p();
            }, [p, m, c]),
            f = (0, s.useCallback)(
              (e) => {
                switch (e.code) {
                  case d.Dt.KEY_L:
                  case d.Dt.KEY_J:
                  case d.Dt.ARROW_LEFT:
                  case d.Dt.ARROW_RIGHT:
                    u();
                }
              },
              [u],
            ),
            g = (0, s.useMemo)(
              () =>
                l === r.PREPARE ? Math.ceil(Number(e.startSec) - a) : null,
              [a, l, e.startSec],
            ),
            b = (0, s.useMemo)(
              () =>
                l === r.PREPARE
                  ? (0, n.jsx)(ek, { className: eM().counterLine, text: g })
                  : l === r.INTRO
                    ? (0, n.jsx)(ev, {})
                    : null,
              [g, l],
            );
          return (
            eb({ onSetProgressEventChange: v }),
            (0, s.useEffect)(
              () => (
                window.addEventListener("keydown", f),
                () => {
                  window.removeEventListener("keydown", f);
                }
              ),
              [f],
            ),
            (0, s.useEffect)(
              () => (
                window.addEventListener("mousemove", y),
                () => {
                  window.addEventListener("mousemove", y);
                }
              ),
              [y],
            ),
            (0, n.jsxs)(ey.tq, {
              className: (0, o.W)(eM().root, {
                [eM()["root_".concat(l)]]: !_,
                [eM().root_withVisibleUpperLyrics]: c,
                [eM().root_withVisibleScrolledLyrics]: _,
              }),
              modules: [eh.Gk, eh.Rv],
              slidesPerView: "auto",
              spaceBetween: 32,
              direction: "vertical",
              mousewheel: eI,
              freeMode: !0,
              onScroll: x,
              onTouchMove: h ? x : void 0,
              allowTouchMove: h,
              children: [
                (0, n.jsx)(ey.o5, { className: eM().counter, children: b }),
                (0, n.jsx)(eA, {
                  setProgressPosition: i,
                  shouldShowScrolledLyrics: _,
                  state: l,
                  progressPosition: a,
                }),
                (0, n.jsx)(ey.o5, {
                  className: eM().footer,
                  children: (0, n.jsx)(ew, {}),
                }),
              ],
            })
          );
        }),
        eV = (0, l.Pi)(() => {
          let {
            sonataState: { entityMeta: e },
            fullscreenPlayer: { syncLyrics: t },
          } = (0, d.oR)();
          (0, s.useEffect)(() => {
            t.currentTrackId !== (null == e ? void 0 : e.id) &&
              t.getData(null == e ? void 0 : e.id);
          }, [null == e ? void 0 : e.id, t]);
          let a = (0, s.useMemo)(
            () =>
              t.isLoaded
                ? (0, n.jsx)(eB, {})
                : ((t.isRejected || t.hasInvalidLyrics) && t.setInvisible(),
                  (0, n.jsx)(ev, { className: es().loader })),
            [t.isLoaded, t.isRejected, t.hasInvalidLyrics, t.setInvisible],
          );
          return (0, n.jsxs)("div", {
            className: es().root,
            children: [
              (0, n.jsx)("div", { className: es().content, children: a }),
              (0, n.jsx)(eu, { className: es().card }),
            ],
          });
        });
      var eR = a(67175),
        eT = a.n(eR),
        eD = a(87908),
        eO = a(15882),
        ez = a.n(eO);
      let eU = (0, l.Pi)((e) => {
          var t;
          let { className: a, children: i } = e,
            { sonataState: r } = (0, d.oR)();
          return (0, n.jsxs)(f.Paper, {
            radius: "m",
            className: (0, o.W)(ez().root, a),
            children: [
              (0, n.jsx)(I.BE, {
                className: ez().cover,
                src:
                  null === (t = r.entityMeta) || void 0 === t
                    ? void 0
                    : t.coverUri,
                size: 400,
                fit: "cover",
                withAvatarReplace: !0,
              }),
              i,
            ],
          });
        }),
        eF = (0, l.Pi)((e) => {
          var t, a;
          let {
              className: i,
              isContextMenuVisible: r,
              setIsContextMenuVisible: l,
            } = e,
            { formatMessage: u } = (0, _.Z)(),
            {
              sonataState: { entityMeta: m },
              user: p,
            } = (0, d.oR)(),
            v =
              (null == m ? void 0 : m.isTrackPodcast) ||
              (null == m
                ? void 0
                : null === (t = m.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            h = (0, eD.Op)(null == m ? void 0 : m.artists),
            f = (0, c.SB)(m),
            g = (0, s.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            b = (0, s.useMemo)(
              () =>
                m
                  ? v
                    ? (0, n.jsx)(A.wT, {
                        className: eT().trackMeta,
                        titleContainerClassName: eT().titleContainer,
                        track: m,
                        withExplicitMark: !0,
                        withSecondaryColor: !0,
                        withDate: !1,
                        captionSize: "l",
                        explicitSize: "s",
                        withPodcastName: !0,
                      })
                    : (0, n.jsx)(A.ko, {
                        className: eT().trackMeta,
                        titleContainerClassName: eT().titleContainer,
                        track: m,
                        withExplicitMark: !0,
                        withSecondaryColor: !0,
                        withAlbumLink: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAllArtistsTitle: !0,
                      })
                  : null,
              [m, h, null == m ? void 0 : m.id, v],
            ),
            C = (0, s.useMemo)(() => {
              if (
                p.isAuthorized &&
                !(null == m ? void 0 : m.isRemoved) &&
                (null == m ? void 0 : m.isAvailable)
              )
                return (0, n.jsx)(A.hz, {
                  track: m,
                  open: r,
                  onOpenChange: l,
                  placement: "left",
                  reference: (0, n.jsx)(y.z, {
                    onClick: g,
                    size: "l",
                    withRipple: !1,
                    radius: "round",
                    className: (0, o.W)(eT().menuButton, {
                      [eT().menuButton_active]: r,
                    }),
                    "aria-label": u({ id: "interface-actions.context-menu" }),
                    icon: (0, n.jsx)(x.J, { variant: "more", size: "m" }),
                  }),
                });
            }, [m, u, g, r, l, p.isAuthorized]);
          return (0, n.jsx)("div", {
            className: (0, o.W)(eT().content, i),
            children: (0, n.jsxs)("div", {
              className: eT().trackContainer,
              children: [
                (0, n.jsx)(eU, {
                  className: eT().cover,
                  children: (0, n.jsxs)("div", {
                    className: (0, o.W)(eT().controls, {
                      [eT().controls_active]: r,
                    }),
                    children: [
                      (0, n.jsx)(L.WP, {
                        className: eT().buttonsBlock,
                        isMobile: !1,
                        entityMeta: m,
                        isFullscreen: !0,
                      }),
                      C,
                      (0, n.jsx)(I.dJ, {
                        className: eT().likeButton,
                        isLiked: null == m ? void 0 : m.isLiked,
                        onClick: f,
                        iconSize: "m",
                        size: "l",
                        variant: "default",
                        color: "secondary",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className: (0, o.W)(eT().trackInfo, {
                    [eT().trackInfo_withArtist]:
                      null == m
                        ? void 0
                        : null === (a = m.artists) || void 0 === a
                          ? void 0
                          : a.length,
                    [eT().trackInfo_withPodcast]: v,
                  }),
                  children: b,
                }),
                (0, n.jsx)("div", {
                  className: eT().timelineWrapper,
                  children: (0, n.jsx)(E, {
                    className: eT().timeline,
                    sliderClassName: eT().timelineSlider,
                    disabled: !m,
                    isMobile: !1,
                    isFullscreen: !1,
                  }),
                }),
              ],
            }),
          });
        }),
        eW = (0, l.Pi)(() => {
          let { formatMessage: e } = (0, _.Z)(),
            { theme: t } = (0, d.Fg)(),
            [a, i] = (0, s.useState)(!1),
            {
              modals: { trackModal: r },
              sonataState: { entityMeta: l },
              fullscreenPlayer: c,
            } = (0, d.oR)(),
            u =
              (null == l ? void 0 : l.hasSyncLyrics) && c.syncLyrics.isVisible,
            m = (0, s.useMemo)(
              () => ({
                "--player-average-color-background": (0, A.Er)(
                  t,
                  null == l ? void 0 : l.averageColor,
                ),
              }),
              [null == l ? void 0 : l.averageColor, t],
            ),
            p = (0, s.useMemo)(
              () =>
                u
                  ? (0, n.jsx)(eV, {})
                  : (0, n.jsx)(eF, {
                      setIsContextMenuVisible: i,
                      isContextMenuVisible: a,
                    }),
              [a, u],
            );
          return (0, n.jsxs)(en.u, {
            className: (0, o.W)(eT().root, eT().important),
            open: c.modal.isOpened,
            onOpenChange: a || r.isOpened ? void 0 : c.modal.onOpenChange,
            onClose: c.modal.close,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: m,
            contentClassName: (0, o.W)(eT().modalContent, {
              [eT().modalContent_withSyncLyrics]: u,
            }),
            closeOnOutsidePress: !1,
            children: [
              p,
              (0, n.jsx)("header", {
                className: eT().header,
                children: (0, n.jsx)(y.z, {
                  className: eT().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "s",
                  icon: (0, n.jsx)(x.J, { variant: "arrowDown", size: "xs" }),
                  onClick: c.modal.close,
                  "aria-label": e({ id: "interface-actions.close" }),
                }),
              }),
              (0, n.jsx)(eo.P, {
                className: eT().notification,
                enableMultiContainer: !0,
                containerId: d.W$.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, n.jsx)(eo.P, {
                className: eT().notification,
                enableMultiContainer: !0,
                containerId: d.W$.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var eQ = a(9410),
        eq = a.n(eQ),
        eG = a(9349),
        eZ = a.n(eG);
      let eH = (e) => {
        let { children: t, className: a } = e,
          i = (0, d.R$)(),
          { fullscreenPlayer: r } = (0, d.oR)(),
          { formatMessage: l } = (0, _.Z)(),
          c = (0, s.useRef)(""),
          u = (0, s.useCallback)(
            (e) => {
              e.stopPropagation(), r.modal.isOpened && r.modal.close();
            },
            [r],
          ),
          m = (0, s.useMemo)(() => {
            if (i) {
              let t = i.state.queueState.currentEntity.value,
                a = null == t ? void 0 : t.context.data;
              switch (null == a ? void 0 : a.type) {
                case "vibe":
                  var e;
                  return null == a
                    ? void 0
                    : null === (e = a.meta.session) || void 0 === e
                      ? void 0
                      : e.wave.name;
                case "album":
                  return (
                    (c.current = "/album/".concat(
                      null == a ? void 0 : a.meta.id,
                    )),
                    l(
                      { id: "playing-now.album" },
                      { title: null == a ? void 0 : a.meta.title },
                    )
                  );
                case "playlist":
                  return (
                    (c.current = "/playlist/".concat(
                      null == a ? void 0 : a.meta.playlistUuid,
                    )),
                    l(
                      { id: "playing-now.playlist" },
                      { title: null == a ? void 0 : a.meta.title },
                    )
                  );
              }
            }
            return null;
          }, [i, l]);
        return (0, n.jsxs)("div", {
          className: (0, o.W)(eZ().root, a),
          children: [
            !!m &&
              (0, n.jsxs)("div", {
                className: eZ().textBlock,
                children: [
                  (0, n.jsx)(C.Caption, {
                    variant: "span",
                    size: "s",
                    weight: "normal",
                    className: eZ().subTitle,
                    children: (0, n.jsx)(p.Z, { id: "playing-now.common" }),
                  }),
                  c.current
                    ? (0, n.jsx)(I.rU, {
                        href: c.current,
                        target: "_self",
                        onClick: u,
                        className: eZ().link,
                        children: (0, n.jsx)(C.Caption, {
                          variant: "span",
                          size: "m",
                          className: eZ().title,
                          lineClamp: 1,
                          children: m,
                        }),
                      })
                    : (0, n.jsx)(C.Caption, {
                        variant: "span",
                        size: "m",
                        className: eZ().title,
                        lineClamp: 1,
                        children: m,
                      }),
                ],
              }),
            t,
          ],
        });
      };
      var eJ = a(92930),
        eK = a.n(eJ);
      let eY = (0, l.Pi)((e) => {
        var t;
        let { className: a } = e,
          { sonataState: i } = (0, d.oR)(),
          r = i.entityMeta,
          l =
            (null == r ? void 0 : r.isTrackPodcast) ||
            (null == r
              ? void 0
              : null === (t = r.mainAlbum) || void 0 === t
                ? void 0
                : t.isPodcast);
        return (0, n.jsxs)("div", {
          className: (0, o.W)(eK().root, a),
          children: [
            (0, n.jsxs)("div", {
              className: eK().infoBlock,
              children: [
                (0, n.jsx)(f.Paper, {
                  radius: "m",
                  className: eK().coverWrapper,
                  children: (0, n.jsx)(I.BE, {
                    className: eK().cover,
                    src: null == r ? void 0 : r.coverUri,
                    size: 400,
                    fit: "cover",
                    withAvatarReplace: !0,
                  }),
                }),
                r &&
                  (0, n.jsx)("div", {
                    className: eK().trackInfo,
                    children: l
                      ? (0, n.jsx)(A.wT, {
                          textClassName: eK().metaText,
                          track: r,
                          withExplicitMark: !0,
                          withSecondaryColor: !0,
                          withDate: !1,
                          captionSize: "l",
                          explicitSize: "s",
                          withPodcastName: !0,
                        })
                      : (0, n.jsx)(A.ko, {
                          textClassName: eK().metaText,
                          track: r,
                          withExplicitMark: !0,
                          withSecondaryColor: !0,
                          withAlbumLink: !0,
                          captionSize: "l",
                          explicitSize: "s",
                          withAllArtistsTitle: !0,
                        }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              className: eK().timeline,
              children: (0, n.jsx)(E, {
                disabled: !r,
                isMobile: !0,
                isFullscreen: !0,
                showThumbVariant: "always",
              }),
            }),
            (0, n.jsx)("div", {
              children: (0, n.jsx)(L.WP, {
                className: eK().buttonsBlock,
                isMobile: !0,
                entityMeta: r,
                isFullscreen: !0,
              }),
            }),
          ],
        });
      });
      var eX = a(99256),
        e$ = a.n(eX);
      let e0 = (0, l.Pi)((e) => {
          let { className: t } = e,
            { sonataState: a } = (0, d.oR)(),
            { formatMessage: i } = (0, _.Z)(),
            r = null === a.entityMeta;
          return (0, n.jsxs)("div", {
            className: (0, o.W)(e$().root, t),
            children: [
              (r || a.canChangeRepeatMode) &&
                (0, n.jsx)(L.$Z, {
                  isDisabled: r,
                  repeatMode: a.repeatMode,
                  variant: "text",
                }),
              (0, n.jsx)(I.wx, {
                title: i({ id: "player-actions.lyrics" }),
                description: i({ id: "future-feature.message" }),
                children: (0, n.jsx)(y.z, {
                  radius: "round",
                  size: "xxxs",
                  variant: "text",
                  disabled: !0,
                  withRipple: !1,
                  "aria-label": i({ id: "player-actions.lyrics" }),
                  icon: (0, n.jsx)(x.J, { variant: "lyrics", size: "xs" }),
                }),
              }),
              (r || a.canShuffle) &&
                (0, n.jsx)(L.P4, {
                  isDisabled: r,
                  shuffle: a.shuffle,
                  variant: "text",
                }),
            ],
          });
        }),
        e1 = (0, l.Pi)((e) => {
          let { mode: t = "track" } = e,
            { theme: a } = (0, d.Fg)(),
            { formatMessage: i } = (0, _.Z)(),
            { sonataState: r, fullscreenPlayer: l } = (0, d.oR)(),
            c = r.entityMeta,
            u = (0, s.useMemo)(
              () => ({
                "--player-average-color-background": (0, A.Er)(
                  a,
                  null == c ? void 0 : c.averageColor,
                ),
              }),
              [null == c ? void 0 : c.averageColor, a],
            ),
            m = (0, s.useMemo)(
              () => ("track" === t ? (0, n.jsx)(eY, {}) : null),
              [t],
            ),
            p = (0, s.useMemo)(
              () => ("track" === t ? (0, n.jsx)(e0, {}) : null),
              [t],
            );
          return (0, n.jsxs)(en.u, {
            className: (0, o.W)(eq().root, eq().important),
            open: l.modal.isOpened,
            onOpenChange: l.modal.onOpenChange,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: u,
            contentClassName: eq().modalContent,
            children: [
              (0, n.jsxs)("header", {
                className: eq().header,
                children: [
                  (0, n.jsx)(y.z, {
                    radius: "round",
                    color: "secondary",
                    size: "s",
                    variant: "text",
                    icon: (0, n.jsx)(x.J, { variant: "arrowDown", size: "xs" }),
                    onClick: l.modal.close,
                    "aria-label": i({ id: "interface-actions.close" }),
                  }),
                  (0, n.jsx)(eH, {
                    className: eq().headerCenter,
                    children: (0, n.jsx)(I.wx, {
                      title: i({ id: "player-actions.cast" }),
                      description: i({ id: "future-feature.message" }),
                      children: (0, n.jsx)(y.z, {
                        className: eq().castButton,
                        radius: "round",
                        size: "s",
                        variant: "text",
                        disabled: !0,
                        withRipple: !1,
                        "aria-label": i({ id: "player-actions.cast" }),
                        icon: (0, n.jsx)(x.J, { variant: "cast", size: "xs" }),
                      }),
                    }),
                  }),
                  (0, n.jsx)(I.wx, {
                    title: i({ id: "player-actions.history" }),
                    description: i({ id: "future-feature.message" }),
                    children: (0, n.jsx)(y.z, {
                      radius: "round",
                      size: "s",
                      variant: "text",
                      disabled: !0,
                      withRipple: !1,
                      "aria-label": i({ id: "player-actions.history" }),
                      icon: (0, n.jsx)(x.J, { variant: "queue", size: "xs" }),
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: eq().wrapper,
                children: [
                  (0, n.jsx)("div", { className: eq().content, children: m }),
                  (0, n.jsx)("div", {
                    className: eq().footerContainer,
                    children: p,
                  }),
                ],
              }),
            ],
          });
        }),
        e5 = (e) => {
          {
            let t = e === d.t8.Mobile,
              a = window.screen.availHeight || window.innerHeight;
            return (!t && a < 450) || t;
          }
        },
        e2 = (0, l.Pi)(() => {
          let { settings: e } = (0, d.oR)(),
            t = e.layout === d.t8.Mobile,
            [a, i] = (0, s.useState)(t),
            r = (0, s.useMemo)(
              () =>
                (0, er.Z)(
                  () => {
                    i(e5(e.layout));
                  },
                  100,
                  { trailing: !1 },
                ),
              [e.layout, i],
            );
          return (
            (0, s.useEffect)(
              () => (
                i(e5(e.layout)),
                window.addEventListener("resize", r),
                () => {
                  window.removeEventListener("resize", r);
                }
              ),
              [r, e.layout],
            ),
            a ? (0, n.jsx)(e1, {}) : (0, n.jsx)(eW, {})
          );
        });
      var e3 = a(42288),
        e4 = a(3429),
        e8 = a(21585),
        e9 = a(38009);
      let e6 = (e) => {
        let t = Math.floor(Date.now() / 1e3),
          a = "".concat(e).concat(t);
        return {
          sign: (0, e9.createHmac)("sha256", (0, d.Sq)())
            .update(a)
            .digest("base64"),
          timeStamp: t,
          trackId: e,
          format: e8.yG.LRC,
        };
      };
      var e7 = a(31391),
        te = a.n(e7);
      let tt = (e) => {
          try {
            return (te()(e).scripts || []).map((e) => {
              let { start: t, end: a, text: i } = e;
              return (0, e3.pj)({ text: i.trim(), fromSec: t, toSec: a });
            });
          } catch (e) {
            return [];
          }
        },
        ta = e3.V5.model("SyncLyricsLine", {
          text: e3.V5.string,
          fromSec: e3.V5.number,
          toSec: e3.V5.number,
        }).views((e) => ({
          get key() {
            return "".concat(e.fromSec, ":").concat(e.toSec);
          },
        })),
        ti = e3.V5.model("SyncLyrics", {
          isVisible: e3.V5.optional(e3.V5.boolean, !1),
          loadingState: e3.V5.enumeration(Object.values(d.Gu)),
          lines: e3.V5.maybeNull(e3.V5.array(ta)),
          major: e3.V5.maybeNull(c.bP),
          writers: e3.V5.maybeNull(e3.V5.array(e3.V5.string)),
          lyricId: e3.V5.maybeNull(e3.V5.number),
          externalLyricId: e3.V5.maybeNull(e3.V5.string),
          currentTrackId: e3.V5.maybeNull(
            e3.V5.union(e3.V5.string, e3.V5.number),
          ),
          hasLyricsViewed: e3.V5.optional(e3.V5.boolean, !1),
        })
          .views((e) => ({
            get isLoaded() {
              return e.loadingState === d.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === d.Gu.REJECT;
            },
            get startSec() {
              var t;
              let a = null === (t = e.lines) || void 0 === t ? void 0 : t.at(0);
              return null == a ? void 0 : a.fromSec;
            },
            get endSec() {
              var a;
              let t =
                null === (a = e.lines) || void 0 === a ? void 0 : a.at(-1);
              return null == t ? void 0 : t.toSec;
            },
            get hasWriters() {
              var i;
              return !!(
                e.writers &&
                (null === (i = e.writers) || void 0 === i ? void 0 : i.length) >
                  0
              );
            },
            get hasInvalidLyrics() {
              var r;
              return !!(
                e.loadingState === d.Gu.RESOLVE &&
                (null === (r = e.lines) || void 0 === r ? void 0 : r.length) ===
                  0
              );
            },
          }))
          .actions((e) => {
            let t = {
              setVisible() {
                e.isVisible = !0;
              },
              setInvisible() {
                e.isVisible = !1;
              },
              getActiveLineIndex: (t) => {
                if (
                  (e.startSec && t < e.startSec) ||
                  (e.endSec && t > e.endSec)
                )
                  return null;
                let a = (e.lines || []).findIndex(
                  (e) => t >= e.fromSec && e.toSec >= t,
                );
                return a >= 0 ? a : null;
              },
              getData: (0, e3.ls)(function* (a) {
                let { tracksResource: i, modelActionsLogger: r } = (0, e3.dU)(
                  e,
                );
                if (a)
                  try {
                    e.loadingState = d.Gu.PENDING;
                    let {
                      downloadUrl: r,
                      major: n,
                      externalLyricId: o,
                      lyricId: l,
                      writers: s,
                    } = yield i.getLyrics(e6(a));
                    (e.major = (0, c.jp)(n)),
                      (e.externalLyricId = o),
                      (e.lyricId = l),
                      (e.writers = (0, e3.pj)(s)),
                      (e.currentTrackId = a),
                      (e.hasLyricsViewed = !1),
                      yield t.downloadSyncLyrics(r),
                      (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = d.Gu.REJECT), r.error(t);
                  }
              }),
              downloadSyncLyrics: (0, e3.ls)(function* (t) {
                let { tracksResource: a } = (0, e3.dU)(e),
                  i = yield a.getLyricsText(t);
                e.lines = (0, e3.pj)(tt(i));
              }),
              sendViews: (0, e3.ls)(function* (t) {
                let { contextId: a, contextType: i } = t,
                  { lyricViewsResource: r, modelActionsLogger: n } = (0, e3.dU)(
                    e,
                  );
                if (e.loadingState === d.Gu.RESOLVE)
                  try {
                    if (
                      !e.major ||
                      !e.lyricId ||
                      !e.externalLyricId ||
                      !e.currentTrackId
                    )
                      return;
                    yield r.sendViews({
                      lyricViews: [
                        {
                          id: (0, e4.Z)(),
                          trackId: e.currentTrackId,
                          majorId: e.major.id,
                          lyricId: e.lyricId,
                          externalLyricId: e.externalLyricId,
                          lyricFormat: e8.yG.LRC,
                          albumId: i === h.Ak.Album && a ? a : void 0,
                          playlistId: i === h.Ak.Playlist && a ? a : void 0,
                        },
                      ],
                    }),
                      (e.hasLyricsViewed = !0);
                  } catch (e) {
                    n.error(e);
                  }
              }),
            };
            return t;
          });
      var tr = a(58421);
      let tn = e3.V5.model("FullscreenPlayer", {
        syncLyrics: ti,
        modal: tr.KL,
      }).actions((e) => ({
        showFullscreenPlayerModal() {
          e.syncLyrics.setInvisible(), e.modal.open();
        },
        showSyncLyricsModal() {
          e.syncLyrics.setVisible(), e.modal.open();
        },
      }));
    },
    3507: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return er;
        },
        L: function () {
          return C;
        },
      });
      var i,
        r,
        n = a(42288),
        o = a(10542),
        l = a(63394),
        s = a(58421),
        c = a(33589);
      let d = (e, t) => {
          var a, i;
          let r = null == t ? void 0 : t.map(c.tR);
          return (0, n.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (a = e.cover) || void 0 === a ? void 0 : a.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
            albumArtists: r,
          });
        },
        u = (e) => {
          var t, a;
          return (0, n.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
          });
        },
        m = (e) => {
          var t, a;
          return (0, n.pj)({
            id: "".concat(e.uid, ":").concat(e.kind),
            uuid: e.playlistUuid,
            title: e.title,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
          });
        },
        _ = (e) => {
          var t;
          return (0, n.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: e.coverUri,
            averageColor:
              null === (t = e.derivedColors) || void 0 === t
                ? void 0
                : t.average,
          });
        };
      var p = a(23472);
      let v = (e, t) => {
        let a = (0, p.Vt)(e, t);
        if (null == t ? void 0 : t.albumId) {
          var i, r;
          let e = a.albums.find((e) => String(e.id) === String(t.albumId));
          return {
            ...a,
            isBest:
              null == e
                ? void 0
                : null === (i = e.bestAlbumTracks) || void 0 === i
                  ? void 0
                  : i.includes(Number(a.id)),
            positionInAlbum:
              null == e
                ? void 0
                : null === (r = e.trackPosition) || void 0 === r
                  ? void 0
                  : r.index,
          };
        }
        return (0, n.pj)({ ...a });
      };
      ((i = r || (r = {})).ALBUM = "album"),
        (i.ARTIST = "artist"),
        (i.PLAYLIST = "playlist"),
        (i.TRACK = "track");
      let h = n.V5.model("TrailerMeta", {
        id: n.V5.string,
        title: n.V5.maybe(n.V5.string),
        uuid: n.V5.maybe(n.V5.string),
        coverUri: n.V5.maybe(n.V5.string),
        averageColor: n.V5.maybe(n.V5.string),
        albumArtists: n.V5.maybe(n.V5.array(c.Go)),
      }).views((e) => ({
        getUrl(t) {
          switch (t) {
            case r.ALBUM:
              return "/album/".concat(e.id);
            case r.ARTIST:
              return "/artist/".concat(e.id);
            case r.PLAYLIST:
              return "/playlist/".concat(e.uuid);
            case r.TRACK:
              return;
          }
        },
      }));
      var y = a(84338),
        x = a(30742),
        f = a(75191);
      let g = n.V5.model("TrailerState", {
          contextType: n.V5.maybeNull(n.V5.enumeration(Object.values(y.Ak))),
          contextId: n.V5.maybeNull(n.V5.string),
          entityMeta: n.V5.maybeNull(f.s$),
          status: n.V5.enumeration(Object.values(x.Xz)),
        }).actions((e) => ({
          setContextId: (t) => {
            e.contextId = String(t);
          },
          setContextType: (t) => {
            e.contextType = t;
          },
          setEntityMeta: (t) => {
            t && t.data.meta && (e.entityMeta = (0, f.B5)(t));
          },
          setStatus: (t) => {
            e.status = t;
          },
        })),
        b = p.le
          .props({
            isBest: n.V5.maybe(n.V5.boolean),
            positionInAlbum: n.V5.maybe(n.V5.number),
          })
          .named("TrailerTrack"),
        C = n.V5.model("Trailer", {
          loadingState: n.V5.enumeration(Object.values(l.Gu)),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          modal: s.KL,
          variant: n.V5.maybeNull(n.V5.enumeration(Object.values(r))),
          tracks: n.V5.maybeNull(n.V5.array(b)),
          meta: n.V5.maybeNull(h),
          state: g,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gu.IDLE || e.loadingState === l.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === l.Gu.REJECT;
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === l.Gu.RESOLVE &&
                  (null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i = e.errorStatusCode === o.CN.NOT_FOUND;
              return a || i;
            },
          }))
          .actions((e) => {
            let t = {
              openArtistTrailer(a) {
                t.reset(),
                  (e.variant = r.ARTIST),
                  e.modal.open(),
                  t.getArtistTrailer({ artistId: a });
              },
              openAlbumTrailer(a) {
                t.reset(),
                  (e.variant = r.ALBUM),
                  e.modal.open(),
                  t.getAlbumTrailer({ albumId: a });
              },
              openPlaylistTrailer(a, i) {
                t.reset(),
                  (e.variant = r.PLAYLIST),
                  e.modal.open(),
                  t.getPlaylistTrailer({ userId: String(a), playlistKind: i });
              },
              openTrackTrailer(a) {
                t.reset(),
                  (e.variant = r.TRACK),
                  e.modal.open(),
                  t.getTrackTrailer({ trackId: a });
              },
              getArtistTrailer: (0, n.ls)(function* (a) {
                let { artistsResource: i } = (0, n.dU)(e);
                if (e.loadingState !== l.Gu.PENDING)
                  try {
                    e.loadingState = l.Gu.PENDING;
                    let { artist: t, trailer: r } = yield i.getTrailer(a);
                    r.tracks &&
                      (e.tracks = (0, n.pj)(
                        r.tracks.map((e) => v(e, { isSmartPreview: !0 })),
                      )),
                      t && (e.meta = u(t)),
                      (e.loadingState = l.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, n.ls)(function* (a) {
                let { albumResource: i } = (0, n.dU)(e);
                if (e.loadingState !== l.Gu.PENDING)
                  try {
                    e.loadingState = l.Gu.PENDING;
                    let {
                      album: t,
                      artists: r,
                      trailer: o,
                    } = yield i.getTrailer(a);
                    o.tracks &&
                      (e.tracks = (0, n.pj)(
                        o.tracks.map((e) =>
                          v(e, { isSmartPreview: !0, albumId: t.id }),
                        ),
                      )),
                      t && (e.meta = d(t, r)),
                      (e.loadingState = l.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, n.ls)(function* (a) {
                let { usersResource: i } = (0, n.dU)(e);
                if (e.loadingState !== l.Gu.PENDING)
                  try {
                    e.loadingState = l.Gu.PENDING;
                    let { playlist: t, trailer: r } =
                      yield i.getPlaylistTrailer(a);
                    r.tracks &&
                      (e.tracks = (0, n.pj)(
                        r.tracks.map((e) => v(e, { isSmartPreview: !0 })),
                      )),
                      t && (e.meta = m(t)),
                      (e.loadingState = l.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, n.ls)(function* (a) {
                let { tracksResource: i } = (0, n.dU)(e);
                if (e.loadingState !== l.Gu.PENDING)
                  try {
                    e.loadingState = l.Gu.PENDING;
                    let { track: t } = yield i.getTrailer(a);
                    t &&
                      ((e.tracks = (0, n.pj)([v(t, { isSmartPreview: !0 })])),
                      (e.meta = _(t))),
                      (e.loadingState = l.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { modelActionsLogger: a } = (0, n.dU)(e);
                a.error(t),
                  t instanceof o.du &&
                    (t.statusCode === o.CN.NOT_FOUND ||
                      t.statusCode === o.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = o.CN.NOT_FOUND),
                  e.loadingState !== l.Gu.IDLE &&
                    (e.loadingState = l.Gu.REJECT);
              },
              reset() {
                (e.loadingState = l.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.variant = null),
                  (e.tracks = null),
                  (e.meta = null);
              },
            };
            return t;
          });
      var N = a(9753),
        j = a(9544),
        w = a(98639),
        S = a(80542),
        P = a(39513),
        k = a(28852),
        E = a(89352),
        M = a(60836),
        L = a(67868);
      let A = (e) => {
        let { variant: t, id: a, from: i, uuid: n } = e;
        switch (t) {
          case r.ALBUM:
            return { type: y.Ak.Album, trailer: !0, meta: { id: a }, from: i };
          case r.ARTIST:
            return { type: y.Ak.Artist, trailer: !0, meta: { id: a }, from: i };
          case r.PLAYLIST:
            return {
              type: y.Ak.Playlist,
              trailer: !0,
              meta: { id: String(a), uuid: n },
              from: i,
            };
          case r.TRACK:
            return {
              type: y.Ak.Various,
              trailer: !0,
              meta: { id: a },
              from: i,
            };
        }
      };
      var I = a(31014),
        B = a(90679),
        V = a(82705),
        R = a.n(V);
      let T = (e) => {
          let { isActive: t, className: a, withNavigateButton: i } = e;
          return (0, N.jsxs)("div", {
            className: (0, M.W)(R().root, a),
            children: [
              (0, N.jsx)(B.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: R().playButtonShimmer,
              }),
              i &&
                (0, N.jsx)(B.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: R().linkButtonShimmer,
                }),
            ],
          });
        },
        D = (0, j.Pi)((e) => {
          let {
              variant: t,
              withNavigateButton: a,
              isShimmerVisible: i,
              isShimmerActive: r,
              meta: n,
              className: o,
            } = e,
            s = (0, l.s0)(null == n ? void 0 : n.getUrl(t)),
            c = (0, w.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: (0, M.W)(R().root, o),
                  children: [
                    (0, N.jsx)(P.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, N.jsx)(k.J, { variant: "play", size: "xxxs" }),
                      className: R().button,
                      children: (0, N.jsx)(I.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    a &&
                      (0, N.jsx)(P.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: s,
                        className: R().button,
                        children: (0, N.jsx)(I.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [o, s, a],
            );
          return i
            ? T({ isActive: r, withNavigateButton: a, className: o })
            : c;
        });
      var O = a(86939),
        z = a(12404),
        U = a(2570),
        F = a(65094),
        W = a.n(F);
      let Q = {
          [r.ALBUM]: (0, N.jsx)(I.Z, { id: "trailer.title-album" }),
          [r.ARTIST]: (0, N.jsx)(I.Z, { id: "trailer.title-artist" }),
          [r.PLAYLIST]: (0, N.jsx)(I.Z, { id: "trailer.title-playlist" }),
          [r.TRACK]: (0, N.jsx)(I.Z, { id: "trailer.title-track" }),
        },
        q = (e, t) =>
          (0, N.jsx)("div", {
            className: W().coverContainer,
            children: (0, N.jsx)(B.Shimmer, {
              isActive: e,
              radius: t,
              className: W().cover,
            }),
          }),
        G = (e) =>
          (0, N.jsxs)("div", {
            className: W().textContainer,
            children: [
              (0, N.jsx)("div", {
                className: W().shimmerContainer,
                children: (0, N.jsx)(B.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: W().titleShimmer,
                }),
              }),
              (0, N.jsx)("div", {
                className: W().shimmerContainer,
                children: (0, N.jsx)(B.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: W().descriptionShimmer,
                }),
              }),
            ],
          }),
        Z = (0, j.Pi)((e) => {
          let {
              meta: t,
              variant: a,
              isShimmerVisible: i,
              isShimmerActive: n,
              className: o,
            } = e,
            s = a === r.ARTIST ? "round" : "s",
            { togglePlay: c, isPlaying: d } = (0, l.bA)({
              playContextParams: {
                contextData: A({
                  variant: a,
                  id: Number(null == t ? void 0 : t.id),
                  from: "test",
                  uuid: null == t ? void 0 : t.uuid,
                }),
                loadContextMeta: !0,
              },
            }),
            u = (0, w.useMemo)(() => {
              let e = {
                "--icon-background-color": null == t ? void 0 : t.averageColor,
              };
              return (0, N.jsxs)("div", {
                className: W().coverContainer,
                children: [
                  (0, N.jsx)(z.Paper, {
                    radius: s,
                    className: W().cover,
                    withShadow: !0,
                    children: (0, N.jsx)(O.Image, {
                      "aria-hidden": !0,
                      src: null == t ? void 0 : t.coverUri,
                      size: 100,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, N.jsx)("div", {
                    className: W().iconContainer,
                    style: e,
                    children: (0, N.jsx)(k.J, {
                      variant: "trailer",
                      size: "xs",
                      className: W().icon,
                    }),
                  }),
                ],
              });
            }, [
              s,
              null == t ? void 0 : t.averageColor,
              null == t ? void 0 : t.coverUri,
            ]),
            m = (0, w.useMemo)(() => {
              let e = null == t ? void 0 : t.getUrl(a);
              return e
                ? (0, N.jsx)(L.rU, {
                    href: e,
                    className: W().link,
                    children: (0, N.jsx)(U.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: W().text,
                      children: null == t ? void 0 : t.title,
                    }),
                  })
                : (0, N.jsx)(U.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: W().text,
                    children: null == t ? void 0 : t.title,
                  });
            }, [t, a]),
            _ = (0, w.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: W().textContainer,
                  children: [
                    (0, N.jsx)(U.Caption, {
                      variant: "span",
                      type: "controls",
                      className: (0, M.W)(W().text, W().title),
                      lineClamp: 1,
                      children: Q[a],
                    }),
                    m,
                  ],
                }),
              [m, a],
            );
          return (0, N.jsxs)("div", {
            className: (0, M.W)(W().root, o),
            children: [
              i ? q(n, s) : u,
              i ? G(n) : _,
              !i &&
                (0, N.jsx)(L.JM, {
                  className: W().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: d,
                  iconClassName: W().playButtonIcon,
                  onClick: c,
                }),
            ],
          });
        }),
        H = (e) => {
          var t;
          let a = (0, l.R$)(),
            {
              trailer: { state: i },
            } = (0, l.oR)(),
            [r, n] = (0, w.useState)(0),
            o =
              (null === (t = i.entityMeta) || void 0 === t ? void 0 : t.id) ===
              e;
          return (
            (0, w.useEffect)(() => {
              let e =
                null == a
                  ? void 0
                  : a
                      .getState(l.ji.TRAILER)
                      .playerState.progress.onChange(() => {
                        let e = a.getState(l.ji.TRAILER).playerState,
                          t = e.progress.value;
                        o || n(0),
                          e.status.value === x.Xz.PLAYING &&
                            o &&
                            n((t.position / t.duration) * 100);
                      });
              return () => {
                null == e || e();
              };
            }, [o, a]),
            { isActive: o, progress: r }
          );
        };
      var J = a(80684),
        K = a.n(J);
      let Y = (0, j.Pi)((e) => {
        let { variant: t, track: a, playContextParams: i } = e,
          {
            trailer: { meta: n },
          } = (0, l.oR)(),
          o = t === r.ALBUM ? p.dn : p.fY,
          { isActive: s, progress: c } = H(a.id),
          d = (0, w.useMemo)(
            () => ({ "--track-progress": "".concat(c || 0, "%") }),
            [c],
          );
        return (0, N.jsx)("div", {
          className: (0, M.W)(K().root, { [K().root_active]: s }),
          style: d,
          children: (0, N.jsx)(o, {
            position: a.positionInAlbum,
            withLightning: !!(null == a ? void 0 : a.isBest),
            track: a,
            playContextParams: i,
            albumArtists: null == n ? void 0 : n.albumArtists,
          }),
        });
      });
      var X = a(55560),
        $ = a.n(X);
      let ee = (e, t) => {
          let a = t === r.ALBUM ? l.Lx.ALBUM : l.Lx.PLAYLIST;
          return Array.from({ length: t === r.TRACK ? 1 : 5 }, (t, i) =>
            (0, N.jsx)(
              "div",
              {
                className: $().trackContainer,
                children: (0, N.jsx)(L.DX, {
                  isActive: e,
                  className: (0, M.W)($().trackShimmer, {
                    [$().albumShimmer]: a === l.Lx.ALBUM,
                  }),
                  variant: a,
                }),
              },
              i,
            ),
          );
        },
        et = (0, j.Pi)((e) => {
          let { variant: t } = e,
            { trailer: a } = (0, l.oR)(),
            { isLoading: i, isRejected: r, tracks: n, meta: o } = a,
            s = (0, w.useRef)(!0),
            { togglePlay: c } = (0, l.bA)({
              playContextParams: {
                contextData: A({
                  variant: t,
                  id: Number(null == o ? void 0 : o.id),
                  from: "test",
                  uuid: null == o ? void 0 : o.uuid,
                }),
                queueParams: { index: 0 },
                loadContextMeta: !0,
              },
            }),
            d = i || r;
          (0, w.useEffect)(() => {
            (null == o ? void 0 : o.id) && s.current && (c(), (s.current = !1));
          }, [null == o ? void 0 : o.id, c]);
          let u = (0, w.useCallback)(
              (e) => ({
                contextData: A({
                  variant: t,
                  id: Number(null == o ? void 0 : o.id),
                  from: "test",
                  uuid: null == o ? void 0 : o.uuid,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [null == o ? void 0 : o.id, null == o ? void 0 : o.uuid, t],
            ),
            m = (0, w.useMemo)(
              () =>
                d
                  ? ee(i, t)
                  : null == n
                    ? void 0
                    : n.map((e, a) =>
                        (0, N.jsx)(
                          Y,
                          { variant: t, track: e, playContextParams: u(a) },
                          e.id,
                        ),
                      ),
              [u, i, d, n, t],
            );
          return (0, N.jsxs)("div", {
            className: $().root,
            children: [
              (0, N.jsx)(Z, {
                isShimmerVisible: d,
                isShimmerActive: i,
                variant: t,
                className: $().header,
                meta: o,
              }),
              m,
              (0, N.jsx)(D, {
                isShimmerVisible: d,
                isShimmerActive: i,
                variant: t,
                withNavigateButton: !0,
                className: $().footer,
              }),
            ],
          });
        });
      var ea = a(17601),
        ei = a.n(ea);
      let er = (0, j.Pi)(() => {
        let { settings: e, trailer: t } = (0, l.oR)(),
          a = (0, l.R$)(),
          { contentRef: i } = (0, l.$Y)(),
          { formatMessage: r } = (0, S.Z)(),
          n = e.layout === l.t8.Mobile;
        (0, w.useEffect)(() => {
          let e =
              null == a
                ? void 0
                : a
                    .getState(l.ji.TRAILER)
                    .queueState.currentEntity.onChange(async (e) => {
                      var i;
                      await a.stop(l.ji.TRAILER);
                      let r = null == e ? void 0 : e.context.data.type,
                        n = null == e ? void 0 : e.context.data.meta.id;
                      t.state.setEntityMeta(
                        null !== (i = null == e ? void 0 : e.entity) &&
                          void 0 !== i
                          ? i
                          : null,
                      ),
                        r && t.state.setContextType(r),
                        n && t.state.setContextId(n);
                    }),
            i =
              null == a
                ? void 0
                : a.getState(l.ji.TRAILER).playerState.status.onChange((e) => {
                    e && t.state.setStatus(e);
                  });
          return () => {
            null == e || e(), null == i || i();
          };
        }, [a, t.state]);
        let o = (0, w.useCallback)(() => {
            null == a || a.stop(l.ji.TRAILER), t.modal.close();
          }, [a, t.modal]),
          s = (0, w.useCallback)(
            (e) => {
              e || null == a || a.stop(l.ji.TRAILER), t.modal.onOpenChange(e);
            },
            [a, t.modal],
          );
        return (0, N.jsxs)(E.u, {
          size: "fitContent",
          placement: n ? "default" : "right",
          open: t.modal.isOpened,
          onOpenChange: s,
          onClose: o,
          className: ei().root,
          contentClassName: ei().modalContent,
          overlayClassName: ei().overlay,
          portalNode: n ? null : i,
          showHeader: !1,
          children: [
            (0, N.jsx)("div", {
              className: ei().header,
              children: (0, N.jsx)(P.z, {
                radius: "round",
                color: "secondary",
                size: "xxs",
                icon: (0, N.jsx)(k.J, { variant: "close", size: "xxs" }),
                onClick: o,
                "aria-label": r({
                  id: "interface-actions.close-my-vibe-settings",
                }),
              }),
            }),
            t.variant && (0, N.jsx)(et, { variant: t.variant }),
          ],
        });
      });
    },
    91147: function (e) {
      e.exports = {
        root_primary: "CommunicationButton_root_primary__rrmax",
        root_plus: "CommunicationButton_root_plus__d48MV",
        root_secondary: "CommunicationButton_root_secondary__YQujH",
        text: "CommunicationButton_text__kObnq",
      };
    },
    82487: function (e) {
      e.exports = {
        root: "BarBellow_root__uOAHP",
        root_hidden: "BarBellow_root_hidden__Z_De9",
        root_show: "BarBellow_root_show__3lfs4",
        show: "BarBellow_show__AeK4q",
        root_hide: "BarBellow_root_hide__cbYCD",
        hide: "BarBellow_hide__aZr6q",
        image: "BarBellow_image__XBhXF",
        content: "BarBellow_content__StYWl",
        title: "BarBellow_title__zdsvJ",
        buttons: "BarBellow_buttons__JvPzt",
      };
    },
    33060: function (e) {
      e.exports = {
        timecode: "ChangeTimecode_timecode__UScFt",
        root: "ChangeTimecode_root__QxEw_",
        root_withTimecode: "ChangeTimecode_root_withTimecode__eJhYI",
        root_mobile: "ChangeTimecode_root_mobile__SzOdx",
        root_fullscreen: "ChangeTimecode_root_fullscreen__FA6r0",
        slider: "ChangeTimecode_slider__P4qmT",
      };
    },
    58163: function (e) {
      e.exports = {
        root: "Timecode_root__TLT75",
        root_start: "Timecode_root_start__pHG5N",
        root_end: "Timecode_root_end__LLQsh",
      };
    },
    95904: function (e) {
      e.exports = {
        root: "ChangeVolume_root__HDxtA",
        icon: "ChangeVolume_icon__5Zv2a",
        button: "ChangeVolume_button__4HLEr",
      };
    },
    31695: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    3065: function (e) {
      e.exports = {
        root: "NavbarDesktop_root__scYzp",
        button: "NavbarDesktop_button__x_Ik1",
        important: "NavbarDesktop_important__fRfE5",
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        navigation: "NavbarDesktop_navigation__dLUGW",
        logoLink: "NavbarDesktop_logoLink__KR0Dk",
        logo: "NavbarDesktop_logo__Z4jGx",
        collapseButtonTooltip_hidden:
          "NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ",
        title: "NavbarDesktop_title__OrnHN",
        title_animate: "NavbarDesktop_title_animate__XLxaQ",
        animation_show: "NavbarDesktop_animation_show__pRFj9",
        title_collapsed: "NavbarDesktop_title_collapsed__IH9Bc",
        animation_hide: "NavbarDesktop_animation_hide__8VxPs",
        pinsList: "NavbarDesktop_pinsList___jXIM",
        plus: "NavbarDesktop_plus__etQJm",
        plusButtonContainer: "NavbarDesktop_plusButtonContainer__C7Wf5",
        plusButtonContainer_enter:
          "NavbarDesktop_plusButtonContainer_enter__VRwh3",
        plusButtonContainer_enter_active:
          "NavbarDesktop_plusButtonContainer_enter_active__4fkf5",
        plusButtonContainer_exit:
          "NavbarDesktop_plusButtonContainer_exit__jtA7i",
        plusButtonContainer_exit_active:
          "NavbarDesktop_plusButtonContainer_exit_active__CYCui",
        plusBar: "NavbarDesktop_plusBar__E6cfw",
        plusBar_enter: "NavbarDesktop_plusBar_enter__om_ax",
        plusBar_enter_active: "NavbarDesktop_plusBar_enter_active__2VFPS",
        animation_show_scale: "NavbarDesktop_animation_show_scale___HzwE",
        plusBar_exit: "NavbarDesktop_plusBar_exit__bgdAw",
        plusBar_exit_active: "NavbarDesktop_plusBar_exit_active__s_9sz",
        animation_hide_scale: "NavbarDesktop_animation_hide_scale__mzAvb",
        user: "NavbarDesktop_user__dzbuH",
        userMeta_animate: "NavbarDesktop_userMeta_animate__3KkeR",
        userMeta_collapsed: "NavbarDesktop_userMeta_collapsed__rTdFz",
        ndaBadge: "NavbarDesktop_ndaBadge__moML6",
      };
    },
    24776: function (e) {
      e.exports = {
        text: "NavbarDesktopNDABadge_text__Yp1FL",
        text_collapsed: "NavbarDesktopNDABadge_text_collapsed__wwW9d",
        text_animated: "NavbarDesktopNDABadge_text_animated__d1ktb",
        show: "NavbarDesktopNDABadge_show__NeziW",
        hide: "NavbarDesktopNDABadge_hide__nQ832",
        root: "NavbarDesktopNDABadge_root__jgcw2",
        nda: "NavbarDesktopNDABadge_nda__0rdWY",
        tooltipContent: "NavbarDesktopNDABadge_tooltipContent__CmQZ_",
      };
    },
    73061: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
        ndaBadge: "NavbarMobile_ndaBadge__QNk7h",
      };
    },
    14825: function (e) {
      e.exports = {
        root: "NavbarMobileNDABadge_root__4SoLG",
        nda: "NavbarMobileNDABadge_nda__0SDFn",
        text: "NavbarMobileNDABadge_text__e_Iz4",
      };
    },
    64638: function (e) {
      e.exports = {
        root: "Pin_root__UyplT",
        ripple: "Pin_ripple__Vzpzs",
        link: "Pin_link__nz6I7",
        root_withoutLink: "Pin_root_withoutLink__fr1XH",
        info: "Pin_info__x_7Zx",
        info_collapsed: "Pin_info_collapsed__bF9ac",
        info_animated: "Pin_info_animated__AQQZk",
        show: "Pin_show__xSkOa",
        hide: "Pin_hide__RCc9X",
        meta: "Pin_meta__MzX_7",
        contextMenu: "Pin_contextMenu__WGmhp",
        contextMenu_hidden: "Pin_contextMenu_hidden__xksGY",
        title: "Pin_title__Jw5WW",
        subtitle: "Pin_subtitle__rb8Gq",
        cover: "Pin_cover__7ofYY",
        cover_withAnimation: "Pin_cover_withAnimation__2Z2n6",
        show_and_scale: "Pin_show_and_scale__VdNfj",
      };
    },
    64318: function (e) {
      e.exports = {
        contextMenu: "PinItem_contextMenu__VwiFp",
        contextMenu_visible: "PinItem_contextMenu_visible__Zgwkh",
        root: "PinItem_root__WSoCn",
        image: "PinItem_image__Ow56U",
        animation: "PinItem_animation__syCWX",
        cover: "PinItem_cover__9TcjE",
        tooltip: "PinItem_tooltip__BGwBw",
      };
    },
    8519: function (e) {
      e.exports = {
        root: "PinsList_root__LN_2Z",
        content: "PinsList_content__9RG7s",
        pin_enter: "PinsList_pin_enter__2p2_6",
        pin_enter_active: "PinsList_pin_enter_active__eNGlc",
        "enter-fade": "PinsList_enter-fade__G_QY8",
        "enter-move": "PinsList_enter-move__DSAXH",
        pin_exit: "PinsList_pin_exit__y_gcM",
        pin_exit_active: "PinsList_pin_exit_active__rF5Je",
        "exit-fade": "PinsList_exit-fade__M6fYX",
        "exit-move": "PinsList_exit-move__Jtgi0",
      };
    },
    77314: function (e) {
      e.exports = {
        root: "PlusBar_root__yN9SZ",
        logos: "PlusBar_logos__8Gvj7",
        addition: "PlusBar_addition__npwOZ",
        title: "PlusBar_title__SwzSx",
        buttons: "PlusBar_buttons__QqSS4",
      };
    },
    67175: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktop_root___8vo1",
        important: "FullscreenPlayerDesktop_important__dGfiL",
        header: "FullscreenPlayerDesktop_header__OBhzq",
        modalContent: "FullscreenPlayerDesktop_modalContent__Zs_LC",
        modalContent_withSyncLyrics:
          "FullscreenPlayerDesktop_modalContent_withSyncLyrics__nSywl",
        content: "FullscreenPlayerDesktop_content__bl_7V",
        trackInfo: "FullscreenPlayerDesktop_trackInfo__Px1Ta",
        trackInfo_withArtist:
          "FullscreenPlayerDesktop_trackInfo_withArtist__aRsBD",
        trackInfo_withPodcast:
          "FullscreenPlayerDesktop_trackInfo_withPodcast__pgpJq",
        trackMeta: "FullscreenPlayerDesktop_trackMeta__NydsU",
        trackContainer: "FullscreenPlayerDesktop_trackContainer__99XuP",
        text: "FullscreenPlayerDesktop_text__ck8aB",
        trackLink: "FullscreenPlayerDesktop_trackLink__CfsHQ",
        notification: "FullscreenPlayerDesktop_notification__luD_J",
        timelineWrapper: "FullscreenPlayerDesktop_timelineWrapper__g_oV_",
        timeline: "FullscreenPlayerDesktop_timeline__4Z6DH",
        timelineSlider: "FullscreenPlayerDesktop_timelineSlider__MTUqo",
        buttonsBlock: "FullscreenPlayerDesktop_buttonsBlock__9Kgva",
        likeButton: "FullscreenPlayerDesktop_likeButton__sv1hI",
        menuButton: "FullscreenPlayerDesktop_menuButton__0kKtl",
        likeButton_active: "FullscreenPlayerDesktop_likeButton_active__Zp8M_",
        menuButton_active: "FullscreenPlayerDesktop_menuButton_active__mq9sY",
        controls: "FullscreenPlayerDesktop_controls__57AQi",
        controls_active: "FullscreenPlayerDesktop_controls_active__HZWN_",
        titleContainer: "FullscreenPlayerDesktop_titleContainer__rVpIZ",
        closeButton: "FullscreenPlayerDesktop_closeButton__MQ64s",
        cover: "FullscreenPlayerDesktop_cover__VVsjV",
      };
    },
    43056: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopButton_root__qGgoC",
        button: "FullscreenPlayerDesktopButton_button__7NEl6",
      };
    },
    15882: function (e) {
      e.exports = {
        root: "FullscreenPoster_root__kLwjb",
        cover: "FullscreenPoster_cover__WWgNX",
      };
    },
    9410: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobile_root__Sqyh0",
        important: "FullscreenPlayerMobile_important__1lAN3",
        header: "FullscreenPlayerMobile_header__8KH28",
        headerCenter: "FullscreenPlayerMobile_headerCenter___EqSP",
        modalContent: "FullscreenPlayerMobile_modalContent__m2cbB",
        content: "FullscreenPlayerMobile_content__E0L3Y",
        castButton: "FullscreenPlayerMobile_castButton__3ZgER",
        footerContainer: "FullscreenPlayerMobile_footerContainer__aupK1",
        wrapper: "FullscreenPlayerMobile_wrapper__mPRFg",
      };
    },
    9349: function (e) {
      e.exports = {
        root: "PlayingNow_root__0lQa8",
        textBlock: "PlayingNow_textBlock___CfRh",
        title: "PlayingNow_title__82csz",
        subTitle: "PlayingNow_subTitle__JNJfh",
        link: "PlayingNow_link__4gLK9",
      };
    },
    92930: function (e) {
      e.exports = {
        root: "TrackModeContent_root__Sz0nW",
        infoBlock: "TrackModeContent_infoBlock__i4oxs",
        coverWrapper: "TrackModeContent_coverWrapper__aalzh",
        cover: "TrackModeContent_cover__FChz6",
        trackInfo: "TrackModeContent_trackInfo__Z_iNa",
        metaText: "TrackModeContent_metaText__UY6Pk",
        timeline: "TrackModeContent_timeline__auga_",
      };
    },
    99256: function (e) {
      e.exports = { root: "TrackModeFooter_root__hz1LW" };
    },
    98776: function (e) {
      e.exports = {
        message: "NotificationChangeQuality_message__coCvn",
        changeButton: "NotificationChangeQuality_changeButton__Hzc3y",
        icon: "NotificationChangeQuality_icon__bOfQO",
      };
    },
    12683: function (e) {
      e.exports = { root: "PlayerBar_root__cXUnU" };
    },
    66846: function (e) {
      e.exports = {
        root: "PlayerBarDesktop_root__d2Hwi",
        info: "PlayerBarDesktop_info__56v53",
        infoCard: "PlayerBarDesktop_infoCard__tnLS6",
        coverContainer: "PlayerBarDesktop_coverContainer__2Z5nQ",
        cover: "PlayerBarDesktop_cover__IYLwR",
        description: "PlayerBarDesktop_description__eQ_tA",
        artists: "PlayerBarDesktop_artists__N5vpf",
        artistLink: "PlayerBarDesktop_artistLink__Btgdq",
        infoButtons: "PlayerBarDesktop_infoButtons__iSpa_",
        sonata: "PlayerBarDesktop_sonata__sJHY_",
        meta: "PlayerBarDesktop_meta__6sm58",
        settingsButton: "PlayerBarDesktop_settingsButton__jLkVn",
        dislikeButton: "PlayerBarDesktop_dislikeButton__XwMir",
        likeButton: "PlayerBarDesktop_likeButton__LKH4K",
      };
    },
    83249: function (e) {
      e.exports = {
        root: "PlayerBarMobile_root__cdKy_",
        progressBar: "PlayerBarMobile_progressBar___DmH8",
        info: "PlayerBarMobile_info__WmdhZ",
        infoCard: "PlayerBarMobile_infoCard__DCATu",
        coverContainer: "PlayerBarMobile_coverContainer__a3JDF",
        cover: "PlayerBarMobile_cover__pnJd1",
        description: "PlayerBarMobile_description__IxQ9L",
        artists: "PlayerBarMobile_artists__XVSBV",
        artistLink: "PlayerBarMobile_artistLink__pieMq",
        infoButtons: "PlayerBarMobile_infoButtons__JXxfv",
      };
    },
    55676: function (e) {
      e.exports = {
        root: "QualitySettingsContextMenu_root__fW5GK",
        popoverContent: "QualitySettingsContextMenu_popoverContent__I6gtY",
        header: "QualitySettingsContextMenu_header__YGH7p",
        headerWithCloseButton:
          "QualitySettingsContextMenu_headerWithCloseButton__vsXrW",
        itemWrapper: "QualitySettingsContextMenu_itemWrapper__VOgWT",
        item: "QualitySettingsContextMenu_item__JevQS",
        item_option: "QualitySettingsContextMenu_item_option__SSxha",
        item_type: "QualitySettingsContextMenu_item_type__LmiAl",
        expandedItem: "QualitySettingsContextMenu_expandedItem__m6M8x",
        itemSubTitle: "QualitySettingsContextMenu_itemSubTitle__YGtQk",
      };
    },
    80615: function (e) {
      e.exports = {
        root: "SyncLyrics_root__6KZg4",
        content: "SyncLyrics_content__lbkWP",
        loader: "SyncLyrics_loader__EBvr_",
        card: "SyncLyrics_card___SVTH",
      };
    },
    63341: function (e) {
      e.exports = {
        root: "SyncLyricsCard_root__92qn_",
        button: "SyncLyricsCard_button__cpsBh",
        card: "SyncLyricsCard_card__6NmKa",
        icon: "SyncLyricsCard_icon__5ETca",
        coverContainer: "SyncLyricsCard_coverContainer__KctWs",
        cover: "SyncLyricsCard_cover__j3v0a",
        slider: "SyncLyricsCard_slider__GwydX",
        info: "SyncLyricsCard_info__wXcIl",
      };
    },
    83627: function (e) {
      e.exports = {
        root: "SyncLyricsFooter_root__STCKQ",
        major: "SyncLyricsFooter_major__QMZmT",
        writers: "SyncLyricsFooter_writers__c7zhj",
      };
    },
    73390: function (e) {
      e.exports = { root: "SyncLyricsLine_root__r62BN" };
    },
    68466: function (e) {
      e.exports = {
        root: "SyncLyricsLoader_root__I2hTe",
        element: "SyncLyricsLoader_element___Luwv",
        pulse: "SyncLyricsLoader_pulse__5AqRf",
        "change-opacity": "SyncLyricsLoader_change-opacity__vscya",
        element_withIcon: "SyncLyricsLoader_element_withIcon__iiSBo",
        element_withDefaultElement:
          "SyncLyricsLoader_element_withDefaultElement__WmP80",
      };
    },
    77920: function (e) {
      e.exports = {
        line: "SyncLyricsScroller_line__Vh6WN",
        counter: "SyncLyricsScroller_counter__B2E7K",
        counterLine: "SyncLyricsScroller_counterLine__NpBT4",
        footer: "SyncLyricsScroller_footer__a2J0g",
        root: "SyncLyricsScroller_root__amiLm",
        root_withVisibleUpperLyrics:
          "SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO",
        root_withVisibleScrolledLyrics:
          "SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE",
        root_intro: "SyncLyricsScroller_root_intro__13gls",
        root_outro: "SyncLyricsScroller_root_outro__XlDH5",
        line_last: "SyncLyricsScroller_line_last__liS_1",
        root_prepare: "SyncLyricsScroller_root_prepare__h0Gf1",
        line_active: "SyncLyricsScroller_line_active__6lLvH",
      };
    },
    55560: function (e) {
      e.exports = {
        root: "Trailer_root__c8eG3",
        header: "Trailer_header__FBFMi",
        trackShimmer: "Trailer_trackShimmer__qmCN3",
        albumShimmer: "Trailer_albumShimmer__8RxuC",
        footer: "Trailer_footer__POMTS",
      };
    },
    82705: function (e) {
      e.exports = {
        root: "TrailerFooter_root__LKXby",
        playButtonShimmer: "TrailerFooter_playButtonShimmer__5QwPi",
        linkButtonShimmer: "TrailerFooter_linkButtonShimmer__ZV1s1",
      };
    },
    65094: function (e) {
      e.exports = {
        root: "TrailerHeader_root__n8XkZ",
        coverContainer: "TrailerHeader_coverContainer__4R_jG",
        cover: "TrailerHeader_cover__G6BRb",
        iconContainer: "TrailerHeader_iconContainer__QXR64",
        icon: "TrailerHeader_icon__5T0JT",
        textContainer: "TrailerHeader_textContainer__LR03v",
        text: "TrailerHeader_text__BWMLw",
        link: "TrailerHeader_link__kObd5",
        title: "TrailerHeader_title__GuIe0",
        playButton: "TrailerHeader_playButton__MGmhZ",
        playButtonIcon: "TrailerHeader_playButtonIcon__JFbl_",
        shimmerContainer: "TrailerHeader_shimmerContainer__cOsas",
        titleShimmer: "TrailerHeader_titleShimmer__KKn7b",
        descriptionShimmer: "TrailerHeader_descriptionShimmer__WOlY5",
      };
    },
    17601: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        modalContent: "TrailerModal_modalContent__ZSNFe",
        overlay: "TrailerModal_overlay__D9vRl",
        header: "TrailerModal_header__0h1zj",
      };
    },
    80684: function (e) {
      e.exports = {
        root: "TrailerTrack_root__0UIP4",
        root_active: "TrailerTrack_root_active__F_8Iw",
      };
    },
    62434: function (e, t, a) {
      "use strict";
      a.d(t, {
        Tb: function () {
          return m;
        },
        nJ: function () {
          return n;
        },
        sd: function () {
          return b;
        },
        $J: function () {
          return N;
        },
        Ez: function () {
          return S;
        },
      });
      var i,
        r,
        n,
        o,
        l = a(8655),
        s = a(21585);
      async function c(e) {
        let { secretKey: t, data: a } = e,
          i = new TextEncoder(),
          r = i.encode(t);
        return crypto.subtle
          .importKey(
            "raw",
            r,
            { name: "HMAC", hash: { name: "SHA-256" } },
            !0,
            ["sign", "verify"],
          )
          .then(async (e) => {
            let t = i.encode(a);
            return crypto.subtle
              .sign("HMAC", e, t)
              .then((e) =>
                btoa(String.fromCharCode(...new Uint8Array(e))).slice(0, -1),
              );
          });
      }
      function d() {
        return Math.floor(Date.now() / 1e3);
      }
      var u = a(37810);
      class m extends u.y {
        constructor(
          e,
          { code: t = "E_DOWNLOADINFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "DownloadInfoMediaProviderException"),
            Object.setPrototypeOf(this, m.prototype);
        }
      }
      let _ = {
        lossless: [{ codec: s.V9.FLAC, bitrateInKbps: 0 }],
        hq: [{ codec: s.V9.MP3, bitrateInKbps: 320 }],
        nq: [
          { codec: s.V9.AAC, bitrateInKbps: 128 },
          { codec: s.V9.MP3, bitrateInKbps: 192 },
        ],
        lq: [
          { codec: s.V9.AAC, bitrateInKbps: 128 },
          { codec: s.V9.MP3, bitrateInKbps: 192 },
        ],
        preview: [{ codec: s.V9.MP3, bitrateInKbps: 128 }],
        smart_preview: [{ codec: s.V9.MP3, bitrateInKbps: 128 }],
      };
      class p {
        getMediaSource(e) {
          return new Promise((t, a) => {
            let {
                entity: {
                  data: {
                    meta: { id: i },
                  },
                },
              } = e,
              r = d();
            c({ secretKey: this.secretKey, data: "".concat(r).concat(i) })
              .then((e) => {
                this.resource
                  .getStorageData({
                    trackId: String(i),
                    sign: e,
                    tsInSeconds: r,
                    canUseStreaming: !1,
                    direct: !1,
                    requireMp3Link: !1,
                    isAliceRequester: !1,
                    preview:
                      this.mediaConfigController.qualityConfig.preview.value,
                  })
                  .then((e) => {
                    let r = (function (e, t) {
                      if (t.preview.value && e[0]) return e[0];
                      let a = e.find((e) =>
                          _.lossless.find((t) => e.codec === t.codec),
                        ),
                        i = e.find((e) =>
                          _.hq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        ),
                        r = e.find((e) =>
                          _.nq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        );
                      return t.lossless.value && a
                        ? a
                        : t.hq.value && i
                          ? i
                          : (t.lq.value || t.nq.value) && r
                            ? r
                            : null;
                    })(e, this.mediaConfigController.qualityConfig);
                    null !== r
                      ? this.resource
                          .getSrcData({ storageUrl: r.downloadInfoUrl })
                          .then((e) => {
                            try {
                              let a = (function (e) {
                                let {
                                    srcData: t,
                                    secretKey: a,
                                    trackId: i,
                                  } = e,
                                  r = (function (e, t) {
                                    let a, i, r, n, o, l, s, c, d;
                                    let u = String.fromCharCode;
                                    function m(e, t) {
                                      return (e << t) | (e >>> (32 - t));
                                    }
                                    function _(e, t) {
                                      let a, i, r, n, o;
                                      return ((r = 2147483648 & e),
                                      (n = 2147483648 & t),
                                      (a = 1073741824 & e),
                                      (i = 1073741824 & t),
                                      (o = (1073741823 & e) + (1073741823 & t)),
                                      a & i)
                                        ? 2147483648 ^ o ^ r ^ n
                                        : a | i
                                          ? 1073741824 & o
                                            ? 3221225472 ^ o ^ r ^ n
                                            : 1073741824 ^ o ^ r ^ n
                                          : o ^ r ^ n;
                                    }
                                    function p(e, t, a, i, r, n, o) {
                                      return (
                                        (e = _(
                                          e,
                                          _(_((t & a) | (~t & i), r), o),
                                        )),
                                        _(m(e, n), t)
                                      );
                                    }
                                    function v(e, t, a, i, r, n, o) {
                                      return (
                                        (e = _(
                                          e,
                                          _(_((t & i) | (a & ~i), r), o),
                                        )),
                                        _(m(e, n), t)
                                      );
                                    }
                                    function h(e, t, a, i, r, n, o) {
                                      return (
                                        (e = _(e, _(_(t ^ a ^ i, r), o))),
                                        _(m(e, n), t)
                                      );
                                    }
                                    function y(e, t, a, i, r, n, o) {
                                      return (
                                        (e = _(e, _(_(a ^ (t | ~i), r), o))),
                                        _(m(e, n), t)
                                      );
                                    }
                                    function x(e) {
                                      let t = "",
                                        a = "",
                                        i,
                                        r;
                                      for (r = 0; r <= 3; r++)
                                        (i = (e >>> (8 * r)) & 255),
                                          (t += (a = "0".concat(
                                            i.toString(16),
                                          )).substr(a.length - 2, 2));
                                      return t;
                                    }
                                    let f = [];
                                    for (
                                      a = 0,
                                        f = (function (e) {
                                          let t;
                                          let a = e.length,
                                            i = a + 8,
                                            r = ((i - (i % 64)) / 64 + 1) * 16,
                                            n = Array(r - 1),
                                            o = 0,
                                            l = 0;
                                          for (; l < a; )
                                            (t = (l - (l % 4)) / 4),
                                              (o = (l % 4) * 8),
                                              (n[t] =
                                                n[t] | (e.charCodeAt(l) << o)),
                                              l++;
                                          return (
                                            (t = (l - (l % 4)) / 4),
                                            (o = (l % 4) * 8),
                                            (n[t] = n[t] | (128 << o)),
                                            (n[r - 2] = a << 3),
                                            (n[r - 1] = a >>> 29),
                                            n
                                          );
                                        })(
                                          (e = (function (e) {
                                            e = t + e.replace(/\r\n/g, "\n");
                                            let a = "";
                                            for (let t = 0; t < e.length; t++) {
                                              let i = e.charCodeAt(t);
                                              i < 128
                                                ? (a += u(i))
                                                : i > 127 && i < 2048
                                                  ? (a +=
                                                      u((i >> 6) | 192) +
                                                      u((63 & i) | 128))
                                                  : (a +=
                                                      u((i >> 12) | 224) +
                                                      u(((i >> 6) & 63) | 128) +
                                                      u((63 & i) | 128));
                                            }
                                            return a;
                                          })(e)),
                                        ),
                                        l = 1732584193,
                                        s = 4023233417,
                                        c = 2562383102,
                                        d = 271733878;
                                      a < f.length;
                                      a += 16
                                    )
                                      (i = l),
                                        (r = s),
                                        (n = c),
                                        (o = d),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 0],
                                          7,
                                          3614090360,
                                        )),
                                        (d = p(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 1],
                                          12,
                                          3905402710,
                                        )),
                                        (c = p(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 2],
                                          17,
                                          606105819,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 3],
                                          22,
                                          3250441966,
                                        )),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 4],
                                          7,
                                          4118548399,
                                        )),
                                        (d = p(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 5],
                                          12,
                                          1200080426,
                                        )),
                                        (c = p(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 6],
                                          17,
                                          2821735955,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 7],
                                          22,
                                          4249261313,
                                        )),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 8],
                                          7,
                                          1770035416,
                                        )),
                                        (d = p(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 9],
                                          12,
                                          2336552879,
                                        )),
                                        (c = p(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 10],
                                          17,
                                          4294925233,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 11],
                                          22,
                                          2304563134,
                                        )),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 12],
                                          7,
                                          1804603682,
                                        )),
                                        (d = p(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 13],
                                          12,
                                          4254626195,
                                        )),
                                        (c = p(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 14],
                                          17,
                                          2792965006,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 15],
                                          22,
                                          1236535329,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 1],
                                          5,
                                          4129170786,
                                        )),
                                        (d = v(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 6],
                                          9,
                                          3225465664,
                                        )),
                                        (c = v(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 11],
                                          14,
                                          643717713,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 0],
                                          20,
                                          3921069994,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 5],
                                          5,
                                          3593408605,
                                        )),
                                        (d = v(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 10],
                                          9,
                                          38016083,
                                        )),
                                        (c = v(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 15],
                                          14,
                                          3634488961,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 4],
                                          20,
                                          3889429448,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 9],
                                          5,
                                          568446438,
                                        )),
                                        (d = v(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 14],
                                          9,
                                          3275163606,
                                        )),
                                        (c = v(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 3],
                                          14,
                                          4107603335,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 8],
                                          20,
                                          1163531501,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 13],
                                          5,
                                          2850285829,
                                        )),
                                        (d = v(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 2],
                                          9,
                                          4243563512,
                                        )),
                                        (c = v(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 7],
                                          14,
                                          1735328473,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 12],
                                          20,
                                          2368359562,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 5],
                                          4,
                                          4294588738,
                                        )),
                                        (d = h(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 8],
                                          11,
                                          2272392833,
                                        )),
                                        (c = h(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 11],
                                          16,
                                          1839030562,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 14],
                                          23,
                                          4259657740,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 1],
                                          4,
                                          2763975236,
                                        )),
                                        (d = h(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 4],
                                          11,
                                          1272893353,
                                        )),
                                        (c = h(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 7],
                                          16,
                                          4139469664,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 10],
                                          23,
                                          3200236656,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 13],
                                          4,
                                          681279174,
                                        )),
                                        (d = h(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 0],
                                          11,
                                          3936430074,
                                        )),
                                        (c = h(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 3],
                                          16,
                                          3572445317,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 6],
                                          23,
                                          76029189,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 9],
                                          4,
                                          3654602809,
                                        )),
                                        (d = h(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 12],
                                          11,
                                          3873151461,
                                        )),
                                        (c = h(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 15],
                                          16,
                                          530742520,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 2],
                                          23,
                                          3299628645,
                                        )),
                                        (l = y(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 0],
                                          6,
                                          4096336452,
                                        )),
                                        (d = y(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 7],
                                          10,
                                          1126891415,
                                        )),
                                        (c = y(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 14],
                                          15,
                                          2878612391,
                                        )),
                                        (s = y(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 5],
                                          21,
                                          4237533241,
                                        )),
                                        (l = y(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 12],
                                          6,
                                          1700485571,
                                        )),
                                        (d = y(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 3],
                                          10,
                                          2399980690,
                                        )),
                                        (c = y(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 10],
                                          15,
                                          4293915773,
                                        )),
                                        (s = y(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 1],
                                          21,
                                          2240044497,
                                        )),
                                        (l = y(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 8],
                                          6,
                                          1873313359,
                                        )),
                                        (d = y(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 15],
                                          10,
                                          4264355552,
                                        )),
                                        (c = y(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 6],
                                          15,
                                          2734768916,
                                        )),
                                        (s = y(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 13],
                                          21,
                                          1309151649,
                                        )),
                                        (l = y(
                                          l,
                                          s,
                                          c,
                                          d,
                                          f[a + 4],
                                          6,
                                          4149444226,
                                        )),
                                        (d = y(
                                          d,
                                          l,
                                          s,
                                          c,
                                          f[a + 11],
                                          10,
                                          3174756917,
                                        )),
                                        (c = y(
                                          c,
                                          d,
                                          l,
                                          s,
                                          f[a + 2],
                                          15,
                                          718787259,
                                        )),
                                        (s = y(
                                          s,
                                          c,
                                          d,
                                          l,
                                          f[a + 9],
                                          21,
                                          3951481745,
                                        )),
                                        (l = _(l, i)),
                                        (s = _(s, r)),
                                        (c = _(c, n)),
                                        (d = _(d, o));
                                    return (
                                      x(l) +
                                      x(s) +
                                      x(c) +
                                      x(d)
                                    ).toLowerCase();
                                  })(t.path.substr(1) + t.s, a),
                                  n = "/get-mp3/"
                                    .concat(r, "/")
                                    .concat(t.ts)
                                    .concat(t.path, "?track-id=")
                                    .concat(i, "&play=false");
                                return "https://".concat(t.host).concat(n);
                              })({
                                trackId: i,
                                srcData: e,
                                secretKey: this.secretKey,
                              });
                              t(a);
                            } catch (t) {
                              let e = t;
                              t instanceof Error &&
                                (e = {
                                  name: t.name,
                                  message: t.message,
                                  stack: t.stack,
                                  cause: t.cause,
                                }),
                                a(
                                  new m("Failed to create src link", {
                                    code: "E_CREATE_SRC_LINK",
                                    cause: e,
                                    data: { trackId: i },
                                  }),
                                );
                            }
                          })
                          .catch((e) => {
                            a(
                              new m("Failed to get src data", {
                                code: "E_GET_SRC_DATA",
                                cause: e,
                                data: { trackId: i },
                              }),
                            );
                          })
                      : a(
                          new m("No storage url for entity", {
                            code: "E_NO_STORAGE_URL",
                          }),
                        );
                  })
                  .catch((e) => {
                    a(
                      new m("Failed to get storage data", {
                        code: "E_GET_STORAGE_DATA",
                        cause: e,
                        data: { trackId: i },
                      }),
                    );
                  });
              })
              .catch((e) => {
                let t = e;
                e instanceof Error &&
                  (t = {
                    name: e.name,
                    message: e.message,
                    stack: e.stack,
                    cause: e.cause,
                  }),
                  a(
                    new m("Failed to create sign", {
                      code: "E_CREATE_SIGN",
                      cause: t,
                      data: { trackId: i },
                    }),
                  );
              });
          });
        }
        constructor(e) {
          (0, l._)(this, "secretKey", void 0),
            (0, l._)(this, "resource", void 0),
            (0, l._)(this, "mediaConfigController", void 0);
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: i,
            mediaConfigController: r,
          } = e;
          (this.resource = new s.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            overembed: a.overembed,
            externalDomain: a.externalDomain,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          })),
            (this.mediaConfigController = r),
            (this.secretKey = i);
        }
      }
      var v = a(31841);
      ((i = n || (n = {})).HQ_PLUS = "hqPlus"),
        (i.HQ = "hq"),
        (i.NQ = "nq"),
        (i.LQ = "lq"),
        (i.PREVIEW = "preview");
      class h extends u.y {
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "GetFileInfoMediaProviderException"),
            Object.setPrototypeOf(this, h.prototype);
        }
      }
      let y = [s.V9.FLAC, s.V9.AAC, s.V9.HEAAC, s.V9.MP3];
      class x {
        getMediaSource(e) {
          let t = d(),
            a = (function (e, t, a) {
              if ((0, v.YM)(t)) return s.nJ.SMART_PREVIEW;
              let i = a ? s.nJ.LQ : s.nJ.NQ;
              switch (e) {
                case n.HQ_PLUS:
                  i = s.nJ.LOSSLESS;
                  break;
                case n.HQ:
                  i = a ? s.nJ.NQ : s.nJ.HQ;
                  break;
                case n.NQ:
                case n.LQ:
                  i = a ? s.nJ.LQ : s.nJ.NQ;
                  break;
                case n.PREVIEW:
                  i = s.nJ.PREVIEW;
              }
              return i;
            })(
              this.mediaConfigController.quality.value,
              e.entity,
              this.variables.useNewCorrespondenceBetweenQualityParams,
            ),
            i = y.join(""),
            r = ""
              .concat(t)
              .concat(e.entity.data.meta.id)
              .concat(a)
              .concat(i)
              .concat(this.transport);
          return new Promise((n, o) => {
            c({ data: r, secretKey: this.secretKey })
              .then((r) =>
                this.resource
                  .getFileInfo({
                    tsInSeconds: t,
                    trackId: e.entity.data.meta.id,
                    quality: a,
                    codecs: y,
                    transports: [this.transport],
                    sign: r,
                  })
                  .then((t) => {
                    var a;
                    if (
                      !(null === (a = t.downloadInfo.urls) || void 0 === a
                        ? void 0
                        : a[0])
                    )
                      throw Error("An empty array of URLs has been received");
                    (e.entity.mediaSource = t), n(t.downloadInfo.urls[0]);
                  })
                  .catch((t) => {
                    let r = t;
                    t instanceof Error &&
                      (r = {
                        name: t.name,
                        message: t.message,
                        stack: t.stack,
                        cause: t.cause,
                      }),
                      o(
                        new h("An empty array of URLs has been received", {
                          code: "E_EMPTY_URLS",
                          cause: r,
                          data: {
                            trackId: e.entity.data.meta.id,
                            quality: a,
                            codecs: i,
                          },
                        }),
                      );
                  }),
              )
              .catch((t) => {
                let r = t;
                t instanceof Error &&
                  (r = {
                    name: t.name,
                    message: t.message,
                    stack: t.stack,
                    cause: t.cause,
                  }),
                  o(
                    new h("Failed to create sign", {
                      code: "E_CREATE_SIGN",
                      cause: r,
                      data: {
                        trackId: e.entity.data.meta.id,
                        quality: a,
                        codecs: i,
                      },
                    }),
                  );
              });
          });
        }
        constructor(e) {
          (0, l._)(this, "secretKey", void 0),
            (0, l._)(this, "resource", void 0),
            (0, l._)(this, "mediaConfigController", void 0),
            (0, l._)(this, "transport", void 0),
            (0, l._)(this, "variables", void 0);
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: i,
            mediaConfigController: r,
            transport: n,
            variables: o,
          } = e;
          (this.resource = new s.dF(t, {
            params: a.params,
            gateway: a.gateway,
          })),
            (this.secretKey = i),
            (this.mediaConfigController = r),
            (this.transport = n),
            (this.variables = o);
        }
      }
      class f extends u.y {
        constructor(e, { code: t = "E_YAMUSIC_ENTITY_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "YaMusicEntityProviderException"),
            Object.setPrototypeOf(this, f.prototype);
        }
      }
      var g = a(84338);
      class b {
        async loadEntities(e) {
          let t = e.map((e) => {
            let { context: t, entity: a } = e;
            return (0, g.m3)(t)
              ? "".concat(a.data.meta.id, ":").concat(t.data.meta.id)
              : (0, g.KT)(t) && "albumId" in a.data.meta && a.data.meta.albumId
                ? "".concat(a.data.meta.id, ":").concat(a.data.meta.albumId)
                : a.data.meta.id;
          });
          return this.resource
            .getTracksMeta({ trackIds: t, withProgress: !0 })
            .then((e) => {
              let t = [];
              for (let a of e) t.push({ type: v.A4.Unknown, meta: a });
              return t;
            })
            .catch((e) => {
              throw new f("Failed to get entities meta", { cause: e });
            });
        }
        constructor(e) {
          (0, l._)(this, "resource", void 0);
          let { httpClient: t, config: a } = e;
          this.resource = new s.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          });
        }
      }
      var C = a(80789);
      class N {
        setQuality(e) {
          switch (e) {
            case n.HQ_PLUS:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = n.HQ_PLUS);
              break;
            case n.HQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = n.HQ);
              break;
            case n.NQ:
            case n.LQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = n.NQ);
              break;
            case n.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = n.PREVIEW);
          }
        }
        constructor(e) {
          (0, l._)(this, "qualityConfig", {
            lossless: new C.wi(!1),
            hq: new C.wi(!0),
            nq: new C.wi(!0),
            lq: new C.wi(!0),
            preview: new C.wi(!0),
            smart_preview: new C.wi(!1),
          }),
            (0, l._)(this, "quality", new C.wi(n.HQ)),
            this.setQuality(e);
        }
      }
      ((r = o || (o = {})).DOWNLOAD_INFO_PROVIDER = "downloadInfoProvider"),
        (r.GET_FILE_INFO_PROVIDER = "getFileInfoProvider");
      class j extends u.y {
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "GenerativeMediaProviderException"),
            Object.setPrototypeOf(this, j.prototype);
        }
      }
      class w {
        async getMediaSource(e) {
          return (0, v.OX)(e.entity)
            ? this.getGenerativeSrc(e.entity.data)
            : new Promise((e, t) => {
                t(
                  new j("Provided entity is not generative entity", {
                    code: "E_NOT_GENERATIVE_NETITY",
                  }),
                );
              });
        }
        async getGenerativeSrc(e) {
          return new Promise((t, a) => {
            var i;
            (null === (i = e.meta.stream) || void 0 === i ? void 0 : i.url)
              ? t(e.meta.stream.url)
              : a(
                  new j("Failed to create generative src link", {
                    code: "E_CREATE_GENERATIVE_SRC_LINK",
                  }),
                );
          });
        }
      }
      class S {
        async getMediaSource(e) {
          return (0, v.OX)(e.entity)
            ? this.generativeProvider.getMediaSource(e)
            : (this.variables.switchToStrmWithoutEncrypt
                ? this.getFileInfoProvider
                : this.downloadInfoProvider
              ).getMediaSource(e);
        }
        constructor(e) {
          (0, l._)(this, "generativeProvider", new w()),
            (0, l._)(this, "downloadInfoProvider", void 0),
            (0, l._)(this, "getFileInfoProvider", void 0),
            (0, l._)(this, "variables", void 0),
            (this.variables = e.variables || {}),
            (this.downloadInfoProvider = new p(e.downloadInfoProviderParams)),
            (this.getFileInfoProvider = new x(e.getFileInfoProviderParams));
        }
      }
    },
  },
]);
