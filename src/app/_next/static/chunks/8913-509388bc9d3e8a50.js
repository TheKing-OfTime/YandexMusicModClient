(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8913],
  {
    69783: function (e, a, l) {
      "use strict";
      l.d(a, {
        i: function () {
          return v;
        },
      });
      var r,
        u,
        t = l(65067),
        i = {
          5881: (e, a, l) => {
            function r() {
              for (var e, a, l = 0, r = ""; l < arguments.length; )
                (e = arguments[l++]) &&
                  (a = (function e(a) {
                    var l,
                      r,
                      u = "";
                    if ("string" == typeof a || "number" == typeof a) u += a;
                    else if ("object" == typeof a) {
                      if (Array.isArray(a))
                        for (l = 0; l < a.length; l++)
                          a[l] && (r = e(a[l])) && (u && (u += " "), (u += r));
                      else for (l in a) a[l] && (u && (u += " "), (u += l));
                    }
                    return u;
                  })(e)) &&
                  (r && (r += " "), (r += a));
              return r;
            }
            l.r(a), l.d(a, { clsx: () => r, default: () => u });
            let u = r;
          },
          4525: (e, a, l) => {
            l.r(a), l.d(a, { default: () => r });
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
          6161: (e, a, l) => {
            var r = l(810),
              u = Symbol.for("react.element"),
              t = Symbol.for("react.fragment"),
              i = Object.prototype.hasOwnProperty,
              s =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              n = { key: !0, ref: !0, __self: !0, __source: !0 };
            function o(e, a, l) {
              var r,
                t = {},
                o = null,
                v = null;
              for (r in (void 0 !== l && (o = "" + l),
              void 0 !== a.key && (o = "" + a.key),
              void 0 !== a.ref && (v = a.ref),
              a))
                i.call(a, r) && !n.hasOwnProperty(r) && (t[r] = a[r]);
              if (e && e.defaultProps)
                for (r in (a = e.defaultProps))
                  void 0 === t[r] && (t[r] = a[r]);
              return {
                $$typeof: u,
                type: e,
                key: o,
                ref: v,
                props: t,
                _owner: s.current,
              };
            }
            (a.Fragment = t), (a.jsx = o), (a.jsxs = o);
          },
          9541: (e, a, l) => {
            e.exports = l(6161);
          },
          2342: (e, a) => {
            Object.defineProperty(a, "__esModule", { value: !0 }),
              (a.ThumbVariant = a.DEFAULT_MAX_VALUE = a.SliderMode = void 0),
              (a.SliderMode = { NORMAL: "normal", DEFERRED: "deferred" }),
              (a.DEFAULT_MAX_VALUE = 100),
              (a.ThumbVariant = {
                HOVER: "hover",
                NEVER: "never",
                ALWAYS: "always",
              });
          },
          7886: function (e, a, l) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(a, "__esModule", { value: !0 }),
              (a.Slider = void 0);
            let u = l(9541),
              t = l(5881),
              i = l(810),
              s = l(2342),
              n = r(l(4525)),
              o = (e) => {
                let {
                    forwardRef: a,
                    className: l,
                    value: r,
                    secondaryValue: o = s.DEFAULT_MAX_VALUE,
                    maxValue: v = s.DEFAULT_MAX_VALUE,
                    thumbSize: d = "l",
                    trackSize: _ = "s",
                    mode: c = s.SliderMode.NORMAL,
                    onChange: y,
                    showThumbVariant: k = s.ThumbVariant.HOVER,
                    ...E
                  } = e,
                  [p, m] = (0, i.useState)(null != r ? r : 0),
                  [b, f] = (0, i.useState)(!1),
                  [q, S] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                  b || m(r);
                }, [r, b]),
                  (0, i.useEffect)(() => {
                    !b && q && c === s.SliderMode.DEFERRED && (y(p, !0), S(!1));
                  }, [c, b, y, p, q]);
                let z = (0, i.useCallback)(
                    (e) => {
                      let a = Number(e.target.value);
                      m(a),
                        S(!0),
                        "normal" === c ? (y(a, !0), S(!1)) : y(a, !1);
                    },
                    [m, y, c],
                  ),
                  A = (0, i.useCallback)(
                    (e) => {
                      let a = !1,
                        l = !1;
                      e.stopPropagation(),
                        e.nativeEvent instanceof window.MouseEvent
                          ? ((a = 0 === e.nativeEvent.button),
                            (l = "mousedown" === e.nativeEvent.type))
                          : ((a =
                              1 === e.nativeEvent.touches.length ||
                              "touchend" === e.nativeEvent.type),
                            (l = "touchstart" === e.nativeEvent.type)),
                        a && f(l);
                    },
                    [f],
                  ),
                  O = (0, i.useCallback)(() => {
                    f(!1);
                  }, [f]),
                  C = (0, i.useMemo)(() => {
                    let e = (100 * Math.min(p, v)) / v,
                      a = (100 * Math.min(o, v)) / v;
                    return {
                      backgroundSize: "".concat(e, "% 100%"),
                      "--seek-before-width": "".concat(e, "%"),
                      "--buffered-width": "".concat(a, "%"),
                    };
                  }, [p, o, v]);
                return (0, u.jsx)("input", {
                  ref: a,
                  className: (0, t.clsx)(
                    n.default.root,
                    {
                      [n.default["root_thumbSize_".concat(d)]]: d,
                      [n.default["root_trackSize_".concat(_)]]: _,
                      [n.default["root_".concat(k, "Thumb")]]: k,
                    },
                    l,
                  ),
                  type: "range",
                  max: v,
                  value: p,
                  style: C,
                  onTouchStart: A,
                  onTouchEnd: A,
                  onMouseDown: A,
                  onMouseUp: A,
                  onMouseOut: O,
                  onBlur: O,
                  onChange: z,
                  ...E,
                });
              };
            a.Slider = (0, i.forwardRef)((e, a) =>
              (0, u.jsx)(o, { forwardRef: a, ...e }),
            );
          },
          810: (e) => {
            e.exports = u || (u = l.t(t, 2));
          },
        },
        s = {};
      function n(e) {
        var a = s[e];
        if (void 0 !== a) return a.exports;
        var l = (s[e] = { exports: {} });
        return i[e].call(l.exports, l, l.exports, n), l.exports;
      }
      (n.d = (e, a) => {
        for (var l in a)
          n.o(a, l) &&
            !n.o(e, l) &&
            Object.defineProperty(e, l, { enumerable: !0, get: a[l] });
      }),
        (n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
        (n.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var o = {};
      Object.defineProperty(o, "X", { value: !0 }),
        (o.i = void 0),
        (r = n(7886)),
        Object.defineProperty(o, "i", {
          enumerable: !0,
          get: function () {
            return r.Slider;
          },
        });
      var v = o.i;
      o.X;
    },
    88913: function (e, a, l) {
      "use strict";
      l.d(a, {
        Gv: function () {
          return Z;
        },
        gp: function () {
          return s;
        },
        Qk: function () {
          return G;
        },
        wi: function () {
          return E;
        },
        ji: function () {
          return n;
        },
      });
      var r,
        u,
        t = l(25534),
        i = l(65067);
      let s = (0, i.createContext)(null),
        n = () => {
          let e = (0, i.useContext)(s);
          if (!e)
            throw new t.y(
              "Equalizer cannot be null, please add a context provider",
              { code: "E_CONTEXT_EQUALIZER_NULL" },
            );
          return e;
        };
      var o = l(37285),
        v = l(22874);
      ((r = u || (u = {})).CUSTOM = "CUSTOM"),
        (r.DEFAULT = "DEFAULT"),
        (r.CLASSICAL = "CLASSICAL"),
        (r.CLUB = "CLUB"),
        (r.DANCE = "DANCE"),
        (r.BASS_BOOST = "BASS_BOOST"),
        (r.BASS_AND_TREBLE_BOOST = "BASS_AND_TREBLE_BOOST"),
        (r.TREBLE_BOOST = "TREBLE_BOOST"),
        (r.SPEAKERS = "SPEAKERS"),
        (r.LARGE_HALL = "LARGE_HALL"),
        (r.CONCERT = "CONCERT"),
        (r.PARTY = "PARTY"),
        (r.POP = "POP"),
        (r.REGGAE = "REGGAE"),
        (r.ROCK = "ROCK"),
        (r.SKA = "SKA"),
        (r.SOFT = "SOFT"),
        (r.SOFT_ROCK = "SOFT_ROCK"),
        (r.TECHNO = "TECHNO");
      let d = {
        [u.CUSTOM]: {
          id: u.CUSTOM,
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
        [u.DEFAULT]: {
          id: u.DEFAULT,
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
        [u.CLASSICAL]: {
          id: u.CLASSICAL,
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
        [u.CLUB]: {
          id: u.CLUB,
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
        [u.DANCE]: {
          id: u.DANCE,
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
        [u.BASS_BOOST]: {
          id: u.BASS_BOOST,
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
        [u.BASS_AND_TREBLE_BOOST]: {
          id: u.BASS_AND_TREBLE_BOOST,
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
        [u.TREBLE_BOOST]: {
          id: u.TREBLE_BOOST,
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
        [u.SPEAKERS]: {
          id: u.SPEAKERS,
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
        [u.LARGE_HALL]: {
          id: u.LARGE_HALL,
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
        [u.CONCERT]: {
          id: u.CONCERT,
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
        [u.PARTY]: {
          id: u.PARTY,
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
        [u.POP]: {
          id: u.POP,
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
        [u.REGGAE]: {
          id: u.REGGAE,
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
        [u.ROCK]: {
          id: u.ROCK,
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
        [u.SKA]: {
          id: u.SKA,
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
        [u.SOFT]: {
          id: u.SOFT,
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
        [u.SOFT_ROCK]: {
          id: u.SOFT_ROCK,
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
        [u.TECHNO]: {
          id: u.TECHNO,
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
      var _ = l(13534),
        c = l(40892);
      let y = v.V5.model("EqualizerFrequency", {
          key: v.V5.number,
          value: v.V5.number,
        }),
        k = v.V5.model("EqualizerPreset", {
          id: v.V5.enumeration(Object.values(u)),
          preamp: v.V5.number,
          frequencies: v.V5.array(y),
        }).actions((e) => ({
          setPreamp(a) {
            e.preamp = a;
          },
          setAmp(a, l) {
            e.frequencies.forEach((e) => {
              e.key === a && (e.value = l);
            });
          },
        })),
        E = v.V5.model("Equalizer", {
          modal: c.KL,
          isAvailable: v.V5.optional(v.V5.boolean, !1),
          isEnabled: v.V5.boolean,
          currentPreset: v.V5.optional(k, d[u.DEFAULT]),
          customPreset: v.V5.optional(k, d[u.CUSTOM]),
        }).actions((e) => ({
          setIsAvailable(a) {
            e.isAvailable = a;
          },
          setEnabled(a) {
            let { localStorage: l } = (0, v.dU)(e);
            e.isEnabled = a;
            let r = l.get(_.BUb.EqualizerConfig);
            l.set(_.BUb.EqualizerConfig, { ...r, isEnabled: a, version: "6" });
          },
          loadPresets() {
            let { localStorage: a } = (0, v.dU)(e),
              l = a.get(_.BUb.EqualizerConfig);
            if (
              ((null == l ? void 0 : l.version) !== "6" &&
                (a.remove(_.BUb.EqualizerConfig), (l = null)),
              l &&
                ((e.isEnabled = l.isEnabled),
                l.customPreset && (e.customPreset = (0, v.pj)(l.customPreset)),
                l.lastPresetId))
            ) {
              if (l.lastPresetId === u.CUSTOM) {
                e.currentPreset = (0, v.d9)(e.customPreset);
                return;
              }
              let a = d[l.lastPresetId];
              e.currentPreset = k.create(a);
            }
          },
          changeCurrentPreset(a) {
            let { localStorage: l } = (0, v.dU)(e),
              r = l.get(_.BUb.EqualizerConfig);
            if (
              (l.set(_.BUb.EqualizerConfig, {
                ...r,
                lastPresetId: a,
                version: "6",
              }),
              a === u.CUSTOM)
            ) {
              e.currentPreset = (0, v.d9)(e.customPreset);
              return;
            }
            let t = d[a];
            e.currentPreset = k.create(t);
          },
          changePreamp(a) {
            let { localStorage: l } = (0, v.dU)(e),
              r = (0, v.vM)(e.currentPreset);
            (e.customPreset = (0, v.pj)({ ...r, id: u.CUSTOM })),
              e.customPreset.setPreamp(a),
              (e.currentPreset = (0, v.d9)(e.customPreset));
            let t = l.get(_.BUb.EqualizerConfig);
            l.set(_.BUb.EqualizerConfig, {
              ...t,
              customPreset: (0, o.ZN)(e.customPreset),
              lastPresetId: u.CUSTOM,
              version: "6",
            });
          },
          changeAmp(a, l) {
            let { localStorage: r } = (0, v.dU)(e),
              t = (0, v.vM)(e.currentPreset);
            (e.customPreset = (0, v.pj)({ ...t, id: u.CUSTOM })),
              e.customPreset.setAmp(a, l),
              (e.currentPreset = (0, v.d9)(e.customPreset));
            let i = r.get(_.BUb.EqualizerConfig);
            r.set(_.BUb.EqualizerConfig, {
              ...i,
              customPreset: (0, o.ZN)(e.customPreset),
              lastPresetId: u.CUSTOM,
              version: "6",
            });
          },
        }));
      var p = l(75441),
        m = l(32358),
        b = l(62569),
        f = l(9317),
        q = l(64451),
        S = l(35846),
        z = l(85790),
        A = l(17392);
      let O = (e, a) =>
        e < 1e3
          ? e.toString()
          : a(
              { id: "equalizer.frequency-label" },
              { value: (e / 1e3).toFixed(0) },
            );
      var C = l(62762),
        x = l.n(C),
        T = l(15937),
        P = l(68208),
        R = l(37629),
        h = l(69756),
        L = l(51754),
        B = l.n(L);
      let N = {
          [u.DEFAULT]: (0, p.jsx)(T.Z, { id: "equalizer.default-preset" }),
          [u.CUSTOM]: (0, p.jsx)(T.Z, { id: "equalizer.custom-preset" }),
          [u.CLASSICAL]: (0, p.jsx)(T.Z, { id: "equalizer.classical-preset" }),
          [u.CLUB]: (0, p.jsx)(T.Z, { id: "equalizer.club-preset" }),
          [u.DANCE]: (0, p.jsx)(T.Z, { id: "equalizer.dance-preset" }),
          [u.BASS_BOOST]: (0, p.jsx)(T.Z, {
            id: "equalizer.bass-boost-preset",
          }),
          [u.BASS_AND_TREBLE_BOOST]: (0, p.jsx)(T.Z, {
            id: "equalizer.bass-and-treble-boost-preset",
          }),
          [u.TREBLE_BOOST]: (0, p.jsx)(T.Z, {
            id: "equalizer.treble-boost-preset",
          }),
          [u.SPEAKERS]: (0, p.jsx)(T.Z, { id: "equalizer.speakers-preset" }),
          [u.LARGE_HALL]: (0, p.jsx)(T.Z, {
            id: "equalizer.large-hall-preset",
          }),
          [u.CONCERT]: (0, p.jsx)(T.Z, { id: "equalizer.concert-preset" }),
          [u.PARTY]: (0, p.jsx)(T.Z, { id: "equalizer.party-preset" }),
          [u.POP]: (0, p.jsx)(T.Z, { id: "equalizer.pop-preset" }),
          [u.REGGAE]: (0, p.jsx)(T.Z, { id: "equalizer.reggae-preset" }),
          [u.ROCK]: (0, p.jsx)(T.Z, { id: "equalizer.rock-preset" }),
          [u.SKA]: (0, p.jsx)(T.Z, { id: "equalizer.ska-preset" }),
          [u.SOFT]: (0, p.jsx)(T.Z, { id: "equalizer.soft-preset" }),
          [u.SOFT_ROCK]: (0, p.jsx)(T.Z, { id: "equalizer.soft-rock-preset" }),
          [u.TECHNO]: (0, p.jsx)(T.Z, { id: "equalizer.techno-preset" }),
        },
        j = (0, b.Pi)((e) => {
          let { isDisabled: a } = e,
            l = n(),
            r = (0, i.useCallback)(
              (e) => {
                l.changeCurrentPreset(e.id);
              },
              [l],
            );
          return (0, p.jsx)(R.Lt, {
            isDisabled: a,
            className: B().root,
            onSelect: r,
            reference: (0, p.jsxs)(P.Button, {
              radius: "xxxl",
              className: (0, m.W)(B().button, { [B().button_disabled]: a }),
              ...(0, S.BA)(S.bG.equalizer.EQUALIZER_PRESETS_BUTTON),
              children: [
                (0, p.jsx)(A.Caption, {
                  className: B().buttonText,
                  variant: "span",
                  size: "s",
                  weight: "medium",
                  children: N[l.currentPreset.id],
                }),
                (0, p.jsx)(h.Icon, {
                  className: B().buttonIcon,
                  size: "xxs",
                  variant: "arrowDown",
                }),
              ],
            }),
            placement: "top",
            offsetOptions: -40,
            defaultValue: l.currentPreset.id,
            containerClassName: B().container,
            ...(0, S.BA)(S.bG.equalizer.EQUALIZER_PRESETS_DROPDOWN),
            children: Object.values(u).map((e) =>
              (0, p.jsx)(R.Wx, { id: e, label: N[e] }, e),
            ),
          });
        });
      var U = l(69783),
        g = l(13970),
        D = l.n(g);
      let I = (e) => {
          let {
            minValue: a,
            maxValue: l,
            className: r,
            label: u,
            isDisabled: t,
            onChange: i,
            value: s,
            ...n
          } = e;
          return (0, p.jsxs)("div", {
            className: (0, m.W)(D().root, r),
            ...(0, S.BA)(S.bG.equalizer.EQUALIZER_SLIDER_CONTAINER),
            children: [
              (0, p.jsxs)("div", {
                className: D().container,
                children: [
                  (0, p.jsx)("div", { className: D().serif }),
                  (0, p.jsx)(U.i, {
                    disabled: t,
                    className: (0, m.W)(D().slider, D().important),
                    thumbSize: "m",
                    trackSize: "xxs",
                    onChange: i,
                    value: s,
                    showThumbVariant: "always",
                    step: 0.1,
                    min: a,
                    max: l,
                    ...n,
                  }),
                ],
              }),
              (0, p.jsx)(A.Caption, {
                "aria-hidden": !0,
                className: (0, m.W)(D().label, { [D().label_disabled]: t }),
                variant: "div",
                weight: "normal",
                size: "xs",
                children: u,
              }),
            ],
          });
        },
        M = {
          enter: x().equalizer_enter,
          enterActive: x().equalizer_enter_active,
          exit: x().equalizer_exit,
          exitActive: x().equalizer_exit_active,
        },
        w = (e) => Math.round(10 * e) / 10,
        Z = (0, b.Pi)((e) => {
          let { title: a, className: l, isExpanded: r, isDisabled: u } = e,
            t = (0, i.useRef)(null),
            { formatMessage: s } = (0, f.Z)(),
            o = n(),
            v = o.isEnabled
              ? s({ id: "equalizer.disable-equalizer" })
              : s({ id: "equalizer.enable-equalizer" }),
            d = (0, i.useCallback)(
              (e) => {
                o.setEnabled(e);
              },
              [o],
            ),
            _ = (0, i.useCallback)(
              (e) => (a) => {
                o.changeAmp(e, a);
              },
              [o],
            ),
            c = (0, i.useCallback)(
              (e) => {
                o.changePreamp(e);
              },
              [o],
            );
          return (0, p.jsxs)("div", {
            className: (0, m.W)(x().root, l),
            ...(0, S.BA)(S.bG.equalizer.EQUALIZER_CONTAINER),
            children: [
              (0, p.jsxs)("div", {
                className: x().header,
                children: [
                  (0, p.jsx)(A.Caption, {
                    className: x().title,
                    variant: "span",
                    size: "l",
                    weight: "medium",
                    ...(0, S.BA)(S.bG.equalizer.EQUALIZER_TITLE),
                    children: a,
                  }),
                  (0, p.jsx)(z.Z, {
                    "aria-label": v,
                    isChecked: o.isEnabled,
                    onChange: d,
                    ...(0, S.BA)(S.bG.equalizer.EQUALIZER_TOGGLE),
                  }),
                ],
              }),
              (0, p.jsx)(q.Z, {
                in: r,
                nodeRef: t,
                timeout: 200,
                unmountOnExit: !0,
                classNames: M,
                children: (0, p.jsxs)("div", {
                  ref: t,
                  className: (0, m.W)(x().equalizer, {
                    [x().equalizer_disabled]: u,
                  }),
                  ...(0, S.BA)(S.bG.equalizer.EQUALIZER_FREQUENCIES_CONTAINER),
                  children: [
                    (0, p.jsxs)("div", {
                      className: x().container,
                      children: [
                        (0, p.jsxs)("div", {
                          className: x().preamp,
                          children: [
                            (0, p.jsx)(I, {
                              isDisabled: u,
                              minValue: 0.5,
                              maxValue: 1.5,
                              value: o.currentPreset.preamp,
                              onChange: c,
                              label: s({ id: "equalizer.preamp-level" }),
                              "aria-label": s({
                                id: "equalizer.slider-preamp-label",
                              }),
                              ...(0, S.BA)(
                                S.bG.equalizer.EQUALIZER_PREAMP_SLIDER,
                              ),
                            }),
                            (0, p.jsxs)("div", {
                              className: x().labels,
                              "aria-hidden": !0,
                              children: [
                                (0, p.jsx)(A.Caption, {
                                  className: x().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: s(
                                    { id: "equalizer.amp-label" },
                                    { value: 12 },
                                  ),
                                }),
                                (0, p.jsx)(A.Caption, {
                                  className: x().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: s(
                                    { id: "equalizer.amp-label" },
                                    { value: 0 },
                                  ),
                                }),
                                (0, p.jsx)(A.Caption, {
                                  className: x().label,
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
                        (0, p.jsx)("div", {
                          className: x().frequencies,
                          children: o.currentPreset.frequencies.map((e) => {
                            let a = O(e.key, s),
                              l = w(e.value);
                            return (0, p.jsx)(
                              I,
                              {
                                isDisabled: u,
                                minValue: -12,
                                maxValue: 12,
                                value: e.value,
                                label: a,
                                onChange: _(e.key),
                                "aria-label": s(
                                  { id: "equalizer.slider-frequency-label" },
                                  { label: a, value: l },
                                ),
                                ...(0, S.BA)(
                                  S.bG.equalizer.EQUALIZER_FREQUENCY_SLIDER,
                                ),
                              },
                              a,
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, p.jsx)(j, { isDisabled: u }),
                  ],
                }),
              }),
            ],
          });
        });
      var V = l(59506);
      let G = (0, b.Pi)(() => {
        let { formatMessage: e } = (0, f.Z)(),
          a = n();
        return (0, p.jsx)(V.u, {
          className: x().modal,
          headerClassName: x().modalHeader,
          contentClassName: x().modalContent,
          title: e({ id: "equalizer.title" }),
          open: a.modal.isOpened,
          onOpenChange: a.modal.onOpenChange,
          onClose: a.modal.close,
          size: "fitContent",
          placement: "center",
          overlayColor: "full",
          labelClose: e({ id: "interface-actions.close" }),
          closeButtonProps: (0, S.BA)(
            S.bG.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON,
          ),
          ...(0, S.BA)(S.bG.equalizer.EQUALIZER_MODAL),
          children: (0, p.jsx)(Z, {
            title: e({ id: "equalizer.enable" }),
            isExpanded: !0,
            isDisabled: !a.isEnabled,
          }),
        });
      });
    },
    62762: function (e) {
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
    51754: function (e) {
      e.exports = {
        root: "EqualizerPresets_root__b2gp7",
        buttonIcon: "EqualizerPresets_buttonIcon__DgPG8",
        buttonText: "EqualizerPresets_buttonText__cy2_S",
        button: "EqualizerPresets_button__D8s_l",
        button_disabled: "EqualizerPresets_button_disabled__BcN1s",
        container: "EqualizerPresets_container__ABVY8",
      };
    },
    13970: function (e) {
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
  },
]);
