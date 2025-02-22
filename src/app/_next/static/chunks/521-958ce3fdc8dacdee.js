(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    66055: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return c;
        },
      });
      var n,
        a,
        o = r(91207),
        l = {
          5881: (e, t, r) => {
            function n() {
              for (var e, t, r = 0, n = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      n,
                      a = "";
                    if ("string" == typeof t || "number" == typeof t) a += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (n = e(t[r])) && (a && (a += " "), (a += n));
                      else for (r in t) t[r] && (a && (a += " "), (a += r));
                    }
                    return a;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            }
            r.r(t), r.d(t, { clsx: () => n, default: () => a });
            let a = n;
          },
          5264: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
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
          6161: (e, t, r) => {
            var n = r(810),
              a = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              i =
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, r) {
              var n,
                o = {},
                u = null,
                c = null;
              for (n in (void 0 !== r && (u = "" + r),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                l.call(t, n) && !s.hasOwnProperty(n) && (o[n] = t[n]);
              if (e && e.defaultProps)
                for (n in (t = e.defaultProps))
                  void 0 === o[n] && (o[n] = t[n]);
              return {
                $$typeof: a,
                type: e,
                key: u,
                ref: c,
                props: o,
                _owner: i.current,
              };
            }
            (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
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
          7886: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Slider = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = r(2342),
              s = n(r(5264)),
              u = (e) => {
                let {
                    forwardRef: t,
                    className: r,
                    value: n,
                    secondaryValue: u = i.DEFAULT_MAX_VALUE,
                    maxValue: c = i.DEFAULT_MAX_VALUE,
                    thumbSize: d = "l",
                    trackSize: f = "s",
                    mode: p = i.SliderMode.NORMAL,
                    onChange: v,
                    showThumbVariant: m = i.ThumbVariant.HOVER,
                    ...x
                  } = e,
                  [y, g] = (0, l.useState)(null != n ? n : 0),
                  [_, k] = (0, l.useState)(!1),
                  [E, b] = (0, l.useState)(!1);
                (0, l.useEffect)(() => {
                  _ || g(n);
                }, [n, _]),
                  (0, l.useEffect)(() => {
                    !_ && E && p === i.SliderMode.DEFERRED && (v(y, !0), b(!1));
                  }, [p, _, v, y, E]);
                let h = (0, l.useCallback)(
                    (e) => {
                      let t = Number(e.target.value);
                      g(t),
                        b(!0),
                        "normal" === p ? (v(t, !0), b(!1)) : v(t, !1);
                    },
                    [g, v, p],
                  ),
                  w = (0, l.useCallback)(
                    (e) => {
                      let t = !1,
                        r = !1;
                      e.stopPropagation(),
                        e.nativeEvent instanceof window.MouseEvent
                          ? ((t = 0 === e.nativeEvent.button),
                            (r = "mousedown" === e.nativeEvent.type))
                          : ((t =
                              1 === e.nativeEvent.touches.length ||
                              "touchend" === e.nativeEvent.type),
                            (r = "touchstart" === e.nativeEvent.type)),
                        t && k(r);
                    },
                    [k],
                  ),
                  O = (0, l.useCallback)(() => {
                    k(!1);
                  }, [k]),
                  R = (0, l.useMemo)(() => {
                    let e = (100 * Math.min(y, c)) / c,
                      t = (100 * Math.min(u, c)) / c;
                    return {
                      backgroundSize: "".concat(e, "% 100%"),
                      "--seek-before-width": "".concat(e, "%"),
                      "--buffered-width": "".concat(t, "%"),
                    };
                  }, [y, u, c]);
                return (0, a.jsx)("input", {
                  ref: t,
                  className: (0, o.clsx)(
                    s.default.root,
                    {
                      [s.default["root_thumbSize_".concat(d)]]: d,
                      [s.default["root_trackSize_".concat(f)]]: f,
                      [s.default["root_".concat(m, "Thumb")]]: m,
                    },
                    r,
                  ),
                  type: "range",
                  max: c,
                  value: y,
                  style: R,
                  onTouchStart: w,
                  onTouchEnd: w,
                  onMouseDown: w,
                  onMouseUp: w,
                  onMouseOut: O,
                  onBlur: O,
                  onChange: h,
                  ...x,
                });
              };
            t.Slider = (0, l.forwardRef)((e, t) =>
              (0, a.jsx)(u, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = a || (a = r.t(o, 2));
          },
        },
        i = {};
      function s(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var r = (i[e] = { exports: {} });
        return l[e].call(r.exports, r, r.exports, s), r.exports;
      }
      (s.d = (e, t) => {
        for (var r in t)
          s.o(t, r) &&
            !s.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (n = s(7886)),
        Object.defineProperty(u, "i", {
          enumerable: !0,
          get: function () {
            return n.Slider;
          },
        });
      var c = u.i;
      u.X;
    },
    60521: function (e, t, r) {
      "use strict";
      r.d(t, {
        Gv: function () {
          return J;
        },
        gp: function () {
          return c;
        },
        Qk: function () {
          return ee;
        },
        wi: function () {
          return _;
        },
        ji: function () {
          return d;
        },
      });
      var n,
        a,
        o,
        l,
        i = r(46393),
        s = r(91207),
        u = r.t(s, 2);
      let c = (0, s.createContext)(null),
        d = () => {
          let e = (0, s.useContext)(c);
          if (!e)
            throw new i.y(
              "Equalizer cannot be null, please add a context provider",
              { code: "E_CONTEXT_EQUALIZER_NULL" },
            );
          return e;
        };
      var f = r(79491),
        p = r(2685);
      ((n = l || (l = {})).CUSTOM = "CUSTOM"),
        (n.DEFAULT = "DEFAULT"),
        (n.CLASSICAL = "CLASSICAL"),
        (n.CLUB = "CLUB"),
        (n.DANCE = "DANCE"),
        (n.BASS_BOOST = "BASS_BOOST"),
        (n.BASS_AND_TREBLE_BOOST = "BASS_AND_TREBLE_BOOST"),
        (n.TREBLE_BOOST = "TREBLE_BOOST"),
        (n.SPEAKERS = "SPEAKERS"),
        (n.LARGE_HALL = "LARGE_HALL"),
        (n.CONCERT = "CONCERT"),
        (n.PARTY = "PARTY"),
        (n.POP = "POP"),
        (n.REGGAE = "REGGAE"),
        (n.ROCK = "ROCK"),
        (n.SKA = "SKA"),
        (n.SOFT = "SOFT"),
        (n.SOFT_ROCK = "SOFT_ROCK"),
        (n.TECHNO = "TECHNO");
      let v = {
        [l.CUSTOM]: {
          id: l.CUSTOM,
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
        [l.DEFAULT]: {
          id: l.DEFAULT,
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
        [l.CLASSICAL]: {
          id: l.CLASSICAL,
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
        [l.CLUB]: {
          id: l.CLUB,
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
        [l.DANCE]: {
          id: l.DANCE,
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
        [l.BASS_BOOST]: {
          id: l.BASS_BOOST,
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
        [l.BASS_AND_TREBLE_BOOST]: {
          id: l.BASS_AND_TREBLE_BOOST,
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
        [l.TREBLE_BOOST]: {
          id: l.TREBLE_BOOST,
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
        [l.SPEAKERS]: {
          id: l.SPEAKERS,
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
        [l.LARGE_HALL]: {
          id: l.LARGE_HALL,
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
        [l.CONCERT]: {
          id: l.CONCERT,
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
        [l.PARTY]: {
          id: l.PARTY,
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
        [l.POP]: {
          id: l.POP,
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
        [l.REGGAE]: {
          id: l.REGGAE,
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
        [l.ROCK]: {
          id: l.ROCK,
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
        [l.SKA]: {
          id: l.SKA,
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
        [l.SOFT]: {
          id: l.SOFT,
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
        [l.SOFT_ROCK]: {
          id: l.SOFT_ROCK,
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
        [l.TECHNO]: {
          id: l.TECHNO,
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
      var m = r(58997),
        x = r(91694);
      let y = p.V5.model("EqualizerFrequency", {
          key: p.V5.number,
          value: p.V5.number,
        }),
        g = p.V5.model("EqualizerPreset", {
          id: p.V5.enumeration(Object.values(l)),
          preamp: p.V5.number,
          frequencies: p.V5.array(y),
        }).actions((e) => ({
          setPreamp(t) {
            e.preamp = t;
          },
          setAmp(t, r) {
            e.frequencies.forEach((e) => {
              e.key === t && (e.value = r);
            });
          },
        })),
        _ = p.V5.model("Equalizer", {
          modal: x.KL,
          isEnabled: p.V5.boolean,
          currentPreset: p.V5.optional(g, v[l.DEFAULT]),
          customPreset: p.V5.optional(g, v[l.CUSTOM]),
        }).actions((e) => ({
          setEnabled(t) {
            let { localStorage: r } = (0, p.dU)(e);
            e.isEnabled = t;
            let n = r.get(m.BUb.EqualizerConfig);
            r.set(m.BUb.EqualizerConfig, { ...n, isEnabled: t, version: "6" });
          },
          loadPresets() {
            let { localStorage: t } = (0, p.dU)(e),
              r = t.get(m.BUb.EqualizerConfig);
            if (
              ((null == r ? void 0 : r.version) !== "6" &&
                (t.remove(m.BUb.EqualizerConfig), (r = null)),
              r &&
                ((e.isEnabled = r.isEnabled),
                r.customPreset && (e.customPreset = (0, p.pj)(r.customPreset)),
                r.lastPresetId))
            ) {
              if (r.lastPresetId === l.CUSTOM) {
                e.currentPreset = (0, p.d9)(e.customPreset);
                return;
              }
              let t = v[r.lastPresetId];
              e.currentPreset = g.create(t);
            }
          },
          changeCurrentPreset(t) {
            let { localStorage: r } = (0, p.dU)(e),
              n = r.get(m.BUb.EqualizerConfig);
            if (
              (r.set(m.BUb.EqualizerConfig, {
                ...n,
                lastPresetId: t,
                version: "6",
              }),
              t === l.CUSTOM)
            ) {
              e.currentPreset = (0, p.d9)(e.customPreset);
              return;
            }
            let a = v[t];
            e.currentPreset = g.create(a);
          },
          changePreamp(t) {
            let { localStorage: r } = (0, p.dU)(e),
              n = (0, p.vM)(e.currentPreset);
            (e.customPreset = (0, p.pj)({ ...n, id: l.CUSTOM })),
              e.customPreset.setPreamp(t),
              (e.currentPreset = (0, p.d9)(e.customPreset));
            let a = r.get(m.BUb.EqualizerConfig);
            r.set(m.BUb.EqualizerConfig, {
              ...a,
              customPreset: (0, f.ZN)(e.customPreset),
              lastPresetId: l.CUSTOM,
              version: "6",
            });
          },
          changeAmp(t, r) {
            let { localStorage: n } = (0, p.dU)(e),
              a = (0, p.vM)(e.currentPreset);
            (e.customPreset = (0, p.pj)({ ...a, id: l.CUSTOM })),
              e.customPreset.setAmp(t, r),
              (e.currentPreset = (0, p.d9)(e.customPreset));
            let o = n.get(m.BUb.EqualizerConfig);
            n.set(m.BUb.EqualizerConfig, {
              ...o,
              customPreset: (0, f.ZN)(e.customPreset),
              lastPresetId: l.CUSTOM,
              version: "6",
            });
          },
        }));
      var k = r(65301),
        E = r(9695),
        b = r(96233),
        h = r(37184),
        w = r(8046),
        O = r(55975),
        R = r(32427),
        j = r(81437);
      let C = (e, t) =>
        e < 1e3
          ? e.toString()
          : t(
              { id: "equalizer.frequency-label" },
              { value: (e / 1e3).toFixed(0) },
            );
      var S = r(60033),
        P = r.n(S),
        T = r(44729),
        L = r(78372),
        M = r(53749),
        A = r(80766),
        z = {
          5881: (e, t, r) => {
            function n() {
              for (var e, t, r = 0, n = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      n,
                      a = "";
                    if ("string" == typeof t || "number" == typeof t) a += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (n = e(t[r])) && (a && (a += " "), (a += n));
                      else for (r in t) t[r] && (a && (a += " "), (a += r));
                    }
                    return a;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            }
            r.r(t), r.d(t, { clsx: () => n, default: () => a });
            let a = n;
          },
          8635: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
              contentContainer: "JjlbHZ4FaP9EAcR_1DxF",
              contentContainer_block: "iOlzvyUREgDkthkrx7Sf",
              flexIcon: "WsKeF73pWotx9W1tWdYY",
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
              root_withActiveSpinner: "nAGvO87rLs15SJgft6Hh",
              block: "BbCxxIjBGupN28bq2lSP",
              icon: "J9wTKytjOWG73QMoN5WP",
              icon_position_left: "elJfazUBui03YWZgHCbW",
              icon_position_right: "RBoEbyJKP5rEtLsXM1ji",
              icon_withButtonSize: "cE17_kCWJgx8kzQEkeVr",
              spinnerContainer: "STbBDGqYjUEcLuNvhu9w",
            };
          },
          7519: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
              root: "B4n8OdxhLWJhLyFqsefx",
              swipeIcon: "vuZQkmZ17j2PrMjlV_Xe",
              button: "p4iG7Cp_CDu1zdXubsSc",
              container: "XrtoMzIRQNFtCya4Uj_Y",
              container_mobile: "d_Dy0pjtAUkecSvJ4OkW",
              textContainer: "arHH121CVMJ1HftqBKkg",
            };
          },
          4019: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
              root: "moy62QJwl9MPl3EIySFq",
              button: "yX_R7bYjE0ELIFl0wvrT",
              icon: "Hit8edYVZ8_ejMJMo5G9",
              buttonText: "BnPanQExuLk6q6xa2NbF",
            };
          },
          5929: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
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
          4965: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = { overlay: "ZSjQrniulol6xKOq2Bou" };
          },
          4779: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = { root: "TYgwct6DZLAMvvFaBZ7z" };
          },
          5371: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = { root: "dJZf0Flxzx7PR15g7zqM" };
          },
          390: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
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
          8544: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
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
          2524: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          1173: (e, t, r) => {
            r.r(t), r.d(t, { RemoveScroll: () => G });
            var n,
              a,
              o,
              l,
              i,
              s,
              u,
              c = function () {
                return (c =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                      for (var a in (t = arguments[r]))
                        Object.prototype.hasOwnProperty.call(t, a) &&
                          (e[a] = t[a]);
                    return e;
                  }).apply(this, arguments);
              };
            function d(e, t) {
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
                  var a = 0, n = Object.getOwnPropertySymbols(e);
                  a < n.length;
                  a++
                )
                  0 > t.indexOf(n[a]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                    (r[n[a]] = e[n[a]]);
              return r;
            }
            "function" == typeof SuppressedError && SuppressedError;
            var f = r(810),
              p = "right-scroll-bar-position",
              v = "width-before-scroll-bar";
            function m(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var x = f.useLayoutEffect,
              y = new WeakMap(),
              g =
                (void 0 === a && (a = {}),
                ((void 0 === o &&
                  (o = function (e) {
                    return e;
                  }),
                (l = []),
                (i = !1),
                (s = {
                  read: function () {
                    if (i)
                      throw Error(
                        "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
                      );
                    return l.length ? l[l.length - 1] : null;
                  },
                  useMedium: function (e) {
                    var t = o(e, i);
                    return (
                      l.push(t),
                      function () {
                        l = l.filter(function (e) {
                          return e !== t;
                        });
                      }
                    );
                  },
                  assignSyncMedium: function (e) {
                    for (i = !0; l.length; ) {
                      var t = l;
                      (l = []), t.forEach(e);
                    }
                    l = {
                      push: function (t) {
                        return e(t);
                      },
                      filter: function () {
                        return l;
                      },
                    };
                  },
                  assignMedium: function (e) {
                    i = !0;
                    var t = [];
                    if (l.length) {
                      var r = l;
                      (l = []), r.forEach(e), (t = l);
                    }
                    var n = function () {
                        var r = t;
                        (t = []), r.forEach(e);
                      },
                      a = function () {
                        return Promise.resolve().then(n);
                      };
                    a(),
                      (l = {
                        push: function (e) {
                          t.push(e), a();
                        },
                        filter: function (e) {
                          return (t = t.filter(e)), l;
                        },
                      });
                  },
                })).options = c({ async: !0, ssr: !1 }, a)),
                s),
              _ = function () {},
              k = f.forwardRef(function (e, t) {
                var r,
                  n,
                  a,
                  o,
                  l = f.useRef(null),
                  i = f.useState({
                    onScrollCapture: _,
                    onWheelCapture: _,
                    onTouchMoveCapture: _,
                  }),
                  s = i[0],
                  u = i[1],
                  p = e.forwardProps,
                  v = e.children,
                  k = e.className,
                  E = e.removeScrollBar,
                  b = e.enabled,
                  h = e.shards,
                  w = e.sideCar,
                  O = e.noIsolation,
                  R = e.inert,
                  j = e.allowPinchZoom,
                  C = e.as,
                  S = e.gapMode,
                  P = d(e, [
                    "forwardProps",
                    "children",
                    "className",
                    "removeScrollBar",
                    "enabled",
                    "shards",
                    "sideCar",
                    "noIsolation",
                    "inert",
                    "allowPinchZoom",
                    "as",
                    "gapMode",
                  ]),
                  T =
                    ((r = [l, t]),
                    (n = function (e) {
                      return r.forEach(function (t) {
                        return m(t, e);
                      });
                    }),
                    ((a = (0, f.useState)(function () {
                      return {
                        value: null,
                        callback: n,
                        facade: {
                          get current() {
                            return a.value;
                          },
                          set current(value) {
                            var e = a.value;
                            e !== value &&
                              ((a.value = value), a.callback(value, e));
                          },
                        },
                      };
                    })[0]).callback = n),
                    (o = a.facade),
                    x(
                      function () {
                        var e = y.get(o);
                        if (e) {
                          var t = new Set(e),
                            n = new Set(r),
                            a = o.current;
                          t.forEach(function (e) {
                            n.has(e) || m(e, null);
                          }),
                            n.forEach(function (e) {
                              t.has(e) || m(e, a);
                            });
                        }
                        y.set(o, r);
                      },
                      [r],
                    ),
                    o),
                  L = c(c({}, P), s);
                return f.createElement(
                  f.Fragment,
                  null,
                  b &&
                    f.createElement(w, {
                      sideCar: g,
                      removeScrollBar: E,
                      shards: h,
                      noIsolation: O,
                      inert: R,
                      setCallbacks: u,
                      allowPinchZoom: !!j,
                      lockRef: l,
                      gapMode: S,
                    }),
                  p
                    ? f.cloneElement(
                        f.Children.only(v),
                        c(c({}, L), { ref: T }),
                      )
                    : f.createElement(
                        void 0 === C ? "div" : C,
                        c({}, L, { className: k, ref: T }),
                        v,
                      ),
                );
              });
            (k.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
              (k.classNames = { fullWidth: v, zeroRight: p });
            var E = function (e) {
              var t = e.sideCar,
                r = d(e, ["sideCar"]);
              if (!t)
                throw Error(
                  "Sidecar: please provide `sideCar` property to import the right car",
                );
              var n = t.read();
              if (!n) throw Error("Sidecar medium not found");
              return f.createElement(n, c({}, r));
            };
            E.isSideCarExport = !0;
            var b = function () {
                var e = 0,
                  t = null;
                return {
                  add: function (a) {
                    if (
                      0 == e &&
                      (t = (function () {
                        if (!document) return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = n || r.nc;
                        return t && e.setAttribute("nonce", t), e;
                      })())
                    ) {
                      var o, l;
                      (o = t).styleSheet
                        ? (o.styleSheet.cssText = a)
                        : o.appendChild(document.createTextNode(a)),
                        (l = t),
                        (
                          document.head ||
                          document.getElementsByTagName("head")[0]
                        ).appendChild(l);
                    }
                    e++;
                  },
                  remove: function () {
                    --e ||
                      !t ||
                      (t.parentNode && t.parentNode.removeChild(t), (t = null));
                  },
                };
              },
              h = function () {
                var e = b();
                return function (t, r) {
                  f.useEffect(
                    function () {
                      return (
                        e.add(t),
                        function () {
                          e.remove();
                        }
                      );
                    },
                    [t && r],
                  );
                };
              },
              w = function () {
                var e = h();
                return function (t) {
                  return e(t.styles, t.dynamic), null;
                };
              },
              O = function (e) {
                return parseInt(e || "", 10) || 0;
              },
              R = function (e) {
                var t = window.getComputedStyle(document.body),
                  r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                  n = t["padding" === e ? "paddingTop" : "marginTop"],
                  a = t["padding" === e ? "paddingRight" : "marginRight"];
                return [O(r), O(n), O(a)];
              },
              j = function (e) {
                void 0 === e && (e = "margin");
                var t = R(e),
                  r = document.documentElement.clientWidth,
                  n = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, n - r + t[2] - t[0]),
                };
              },
              C = w(),
              S = "data-scroll-locked",
              P = function (e, t, r, n) {
                var a = e.left,
                  o = e.top,
                  l = e.right,
                  i = e.gap;
                return (
                  void 0 === r && (r = "margin"),
                  "\n  ."
                    .concat(
                      "with-scroll-bars-hidden",
                      " {\n   overflow: hidden ",
                    )
                    .concat(n, ";\n   padding-right: ")
                    .concat(i, "px ")
                    .concat(n, ";\n  }\n  body[")
                    .concat(S, "] {\n    overflow: hidden ")
                    .concat(n, ";\n    overscroll-behavior: contain;\n    ")
                    .concat(
                      [
                        t && "position: relative ".concat(n, ";"),
                        "margin" === r &&
                          "\n    padding-left: "
                            .concat(a, "px;\n    padding-top: ")
                            .concat(o, "px;\n    padding-right: ")
                            .concat(
                              l,
                              "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                            )
                            .concat(i, "px ")
                            .concat(n, ";\n    "),
                        "padding" === r &&
                          "padding-right: ".concat(i, "px ").concat(n, ";"),
                      ]
                        .filter(Boolean)
                        .join(""),
                      "\n  }\n  \n  .",
                    )
                    .concat(p, " {\n    right: ")
                    .concat(i, "px ")
                    .concat(n, ";\n  }\n  \n  .")
                    .concat(v, " {\n    margin-right: ")
                    .concat(i, "px ")
                    .concat(n, ";\n  }\n  \n  .")
                    .concat(p, " .")
                    .concat(p, " {\n    right: 0 ")
                    .concat(n, ";\n  }\n  \n  .")
                    .concat(v, " .")
                    .concat(v, " {\n    margin-right: 0 ")
                    .concat(n, ";\n  }\n  \n  body[")
                    .concat(S, "] {\n    ")
                    .concat("--removed-body-scroll-bar-size", ": ")
                    .concat(i, "px;\n  }\n")
                );
              },
              T = function () {
                var e = parseInt(document.body.getAttribute(S) || "0", 10);
                return isFinite(e) ? e : 0;
              },
              L = function () {
                f.useEffect(function () {
                  return (
                    document.body.setAttribute(S, (T() + 1).toString()),
                    function () {
                      var e = T() - 1;
                      e <= 0
                        ? document.body.removeAttribute(S)
                        : document.body.setAttribute(S, e.toString());
                    }
                  );
                }, []);
              },
              M = function (e) {
                var t = e.noRelative,
                  r = e.noImportant,
                  n = e.gapMode,
                  a = void 0 === n ? "margin" : n;
                L();
                var o = f.useMemo(
                  function () {
                    return j(a);
                  },
                  [a],
                );
                return f.createElement(C, {
                  styles: P(o, !t, a, r ? "" : "!important"),
                });
              },
              A = !1;
            try {
              var z = Object.defineProperty({}, "passive", {
                get: function () {
                  return (A = !0), !0;
                },
              });
              window.addEventListener("test", z, z),
                window.removeEventListener("test", z, z);
            } catch (e) {
              A = !1;
            }
            var H = !!A && { passive: !1 },
              q = function (e, t) {
                if (!(e instanceof Element)) return !1;
                var r = window.getComputedStyle(e);
                return (
                  "hidden" !== r[t] &&
                  !(
                    r.overflowY === r.overflowX &&
                    "TEXTAREA" !== e.tagName &&
                    "visible" === r[t]
                  )
                );
              },
              N = function (e, t) {
                var r = t.ownerDocument,
                  n = t;
                do {
                  if (
                    ("undefined" != typeof ShadowRoot &&
                      n instanceof ShadowRoot &&
                      (n = n.host),
                    B(e, n))
                  ) {
                    var a = D(e, n);
                    if (a[1] > a[2]) return !0;
                  }
                  n = n.parentNode;
                } while (n && n !== r.body);
                return !1;
              },
              B = function (e, t) {
                return "v" === e ? q(t, "overflowY") : q(t, "overflowX");
              },
              D = function (e, t) {
                return "v" === e
                  ? [t.scrollTop, t.scrollHeight, t.clientHeight]
                  : [t.scrollLeft, t.scrollWidth, t.clientWidth];
              },
              U = function (e, t, r, n, a) {
                var o,
                  l =
                    ((o = window.getComputedStyle(t).direction),
                    "h" === e && "rtl" === o ? -1 : 1),
                  i = l * n,
                  s = r.target,
                  u = t.contains(s),
                  c = !1,
                  d = i > 0,
                  f = 0,
                  p = 0;
                do {
                  var v = D(e, s),
                    m = v[0],
                    x = v[1] - v[2] - l * m;
                  (m || x) && B(e, s) && ((f += x), (p += m)),
                    s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
                } while (
                  (!u && s !== document.body) ||
                  (u && (t.contains(s) || t === s))
                );
                return (
                  d && ((a && 1 > Math.abs(f)) || (!a && i > f))
                    ? (c = !0)
                    : !d &&
                      ((a && 1 > Math.abs(p)) || (!a && -i > p)) &&
                      (c = !0),
                  c
                );
              },
              I = function (e) {
                return "changedTouches" in e
                  ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
                  : [0, 0];
              },
              F = function (e) {
                return [e.deltaX, e.deltaY];
              },
              Z = function (e) {
                return e && "current" in e ? e.current : e;
              },
              V = 0,
              W = [];
            let Y =
              ((u = function (e) {
                var t = f.useRef([]),
                  r = f.useRef([0, 0]),
                  n = f.useRef(),
                  a = f.useState(V++)[0],
                  o = f.useState(w)[0],
                  l = f.useRef(e);
                f.useEffect(
                  function () {
                    l.current = e;
                  },
                  [e],
                ),
                  f.useEffect(
                    function () {
                      if (e.inert) {
                        document.body.classList.add(
                          "block-interactivity-".concat(a),
                        );
                        var t = (function (e, t, r) {
                          if (r || 2 == arguments.length)
                            for (var n, a = 0, o = t.length; a < o; a++)
                              (!n && a in t) ||
                                (n || (n = Array.prototype.slice.call(t, 0, a)),
                                (n[a] = t[a]));
                          return e.concat(n || Array.prototype.slice.call(t));
                        })(
                          [e.lockRef.current],
                          (e.shards || []).map(Z),
                          !0,
                        ).filter(Boolean);
                        return (
                          t.forEach(function (e) {
                            return e.classList.add(
                              "allow-interactivity-".concat(a),
                            );
                          }),
                          function () {
                            document.body.classList.remove(
                              "block-interactivity-".concat(a),
                            ),
                              t.forEach(function (e) {
                                return e.classList.remove(
                                  "allow-interactivity-".concat(a),
                                );
                              });
                          }
                        );
                      }
                    },
                    [e.inert, e.lockRef.current, e.shards],
                  );
                var i = f.useCallback(function (e, t) {
                    if (
                      ("touches" in e && 2 === e.touches.length) ||
                      ("wheel" === e.type && e.ctrlKey)
                    )
                      return !l.current.allowPinchZoom;
                    var a,
                      o = I(e),
                      i = r.current,
                      s = "deltaX" in e ? e.deltaX : i[0] - o[0],
                      u = "deltaY" in e ? e.deltaY : i[1] - o[1],
                      c = e.target,
                      d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                    if ("touches" in e && "h" === d && "range" === c.type)
                      return !1;
                    var f = N(d, c);
                    if (!f) return !0;
                    if (
                      (f
                        ? (a = d)
                        : ((a = "v" === d ? "h" : "v"), (f = N(d, c))),
                      !f)
                    )
                      return !1;
                    if (
                      (!n.current &&
                        "changedTouches" in e &&
                        (s || u) &&
                        (n.current = a),
                      !a)
                    )
                      return !0;
                    var p = n.current || a;
                    return U(p, t, e, "h" === p ? s : u, !0);
                  }, []),
                  s = f.useCallback(function (e) {
                    if (W.length && W[W.length - 1] === o) {
                      var r = "deltaY" in e ? F(e) : I(e),
                        n = t.current.filter(function (t) {
                          var n;
                          return (
                            t.name === e.type &&
                            (t.target === e.target ||
                              e.target === t.shadowParent) &&
                            (n = t.delta)[0] === r[0] &&
                            n[1] === r[1]
                          );
                        })[0];
                      if (n && n.should) {
                        e.cancelable && e.preventDefault();
                        return;
                      }
                      if (!n) {
                        var a = (l.current.shards || [])
                          .map(Z)
                          .filter(Boolean)
                          .filter(function (t) {
                            return t.contains(e.target);
                          });
                        (a.length > 0 ? i(e, a[0]) : !l.current.noIsolation) &&
                          e.cancelable &&
                          e.preventDefault();
                      }
                    }
                  }, []),
                  u = f.useCallback(function (e, r, n, a) {
                    var o = {
                      name: e,
                      delta: r,
                      target: n,
                      should: a,
                      shadowParent: (function (e) {
                        for (var t = null; null !== e; )
                          e instanceof ShadowRoot &&
                            ((t = e.host), (e = e.host)),
                            (e = e.parentNode);
                        return t;
                      })(n),
                    };
                    t.current.push(o),
                      setTimeout(function () {
                        t.current = t.current.filter(function (e) {
                          return e !== o;
                        });
                      }, 1);
                  }, []),
                  c = f.useCallback(function (e) {
                    (r.current = I(e)), (n.current = void 0);
                  }, []),
                  d = f.useCallback(function (t) {
                    u(t.type, F(t), t.target, i(t, e.lockRef.current));
                  }, []),
                  p = f.useCallback(function (t) {
                    u(t.type, I(t), t.target, i(t, e.lockRef.current));
                  }, []);
                f.useEffect(function () {
                  return (
                    W.push(o),
                    e.setCallbacks({
                      onScrollCapture: d,
                      onWheelCapture: d,
                      onTouchMoveCapture: p,
                    }),
                    document.addEventListener("wheel", s, H),
                    document.addEventListener("touchmove", s, H),
                    document.addEventListener("touchstart", c, H),
                    function () {
                      (W = W.filter(function (e) {
                        return e !== o;
                      })),
                        document.removeEventListener("wheel", s, H),
                        document.removeEventListener("touchmove", s, H),
                        document.removeEventListener("touchstart", c, H);
                    }
                  );
                }, []);
                var v = e.removeScrollBar,
                  m = e.inert;
                return f.createElement(
                  f.Fragment,
                  null,
                  m
                    ? f.createElement(o, {
                        styles: "\n  .block-interactivity-"
                          .concat(
                            a,
                            " {pointer-events: none;}\n  .allow-interactivity-",
                          )
                          .concat(a, " {pointer-events: all;}\n"),
                      })
                    : null,
                  v ? f.createElement(M, { gapMode: e.gapMode }) : null,
                );
              }),
              g.useMedium(u),
              E);
            var K = f.forwardRef(function (e, t) {
              return f.createElement(k, c({}, e, { ref: t, sideCar: Y }));
            });
            K.classNames = k.classNames;
            let G = K;
          },
          6169: (e, t, r) => {
            r.r(t),
              r.d(t, {
                DOWN: () => i,
                LEFT: () => a,
                RIGHT: () => o,
                UP: () => l,
                useSwipeable: () => p,
              });
            var n = r(810);
            let a = "Left",
              o = "Right",
              l = "Up",
              i = "Down",
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
              let r = (Math.PI / 180) * t;
              return [
                e[0] * Math.cos(r) + e[1] * Math.sin(r),
                e[1] * Math.cos(r) - e[0] * Math.sin(r),
              ];
            }
            function p(e) {
              var t, r, p;
              let v;
              let { trackMouse: m } = e,
                x = n.useRef(Object.assign({}, u)),
                y = n.useRef(Object.assign({}, s)),
                g = n.useRef(Object.assign({}, y.current));
              for (v in ((g.current = Object.assign({}, y.current)),
              (y.current = Object.assign(Object.assign({}, s), e)),
              s))
                void 0 === y.current[v] && (y.current[v] = s[v]);
              let [_, k] = n.useMemo(
                () =>
                  (function (e, t) {
                    let r = (t) => {
                        let r = "touches" in t;
                        (r && t.touches.length > 1) ||
                          e((e, a) => {
                            a.trackMouse &&
                              !r &&
                              (document.addEventListener(c, n),
                              document.addEventListener(d, m));
                            let { clientX: o, clientY: l } = r
                                ? t.touches[0]
                                : t,
                              i = f([o, l], a.rotationAngle);
                            return (
                              a.onTouchStartOrOnMouseDown &&
                                a.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), u),
                                {
                                  initial: i.slice(),
                                  xy: i,
                                  start: t.timeStamp || 0,
                                },
                              )
                            );
                          });
                      },
                      n = (t) => {
                        e((e, r) => {
                          let n = "touches" in t;
                          if (n && t.touches.length > 1) return e;
                          if (t.timeStamp - e.start > r.swipeDuration)
                            return e.swiping
                              ? Object.assign(Object.assign({}, e), {
                                  swiping: !1,
                                })
                              : e;
                          let { clientX: u, clientY: c } = n ? t.touches[0] : t,
                            [d, p] = f([u, c], r.rotationAngle),
                            v = d - e.xy[0],
                            m = p - e.xy[1],
                            x = Math.abs(v),
                            y = Math.abs(m),
                            g = (t.timeStamp || 0) - e.start,
                            _ = x > y ? (v > 0 ? o : a) : m > 0 ? i : l,
                            k =
                              "number" == typeof r.delta
                                ? r.delta
                                : r.delta[_.toLowerCase()] || s.delta;
                          if (x < k && y < k && !e.swiping) return e;
                          let E = {
                            absX: x,
                            absY: y,
                            deltaX: v,
                            deltaY: m,
                            dir: _,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: Math.sqrt(x * x + y * y) / (g || 1),
                            vxvy: [v / (g || 1), m / (g || 1)],
                          };
                          E.first && r.onSwipeStart && r.onSwipeStart(E),
                            r.onSwiping && r.onSwiping(E);
                          let b = !1;
                          return (
                            (r.onSwiping ||
                              r.onSwiped ||
                              r["onSwiped".concat(_)]) &&
                              (b = !0),
                            b &&
                              r.preventScrollOnSwipe &&
                              r.trackTouch &&
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
                        e((e, r) => {
                          let n;
                          if (e.swiping && e.eventData) {
                            if (t.timeStamp - e.start < r.swipeDuration) {
                              (n = Object.assign(
                                Object.assign({}, e.eventData),
                                { event: t },
                              )),
                                r.onSwiped && r.onSwiped(n);
                              let a = r["onSwiped".concat(n.dir)];
                              a && a(n);
                            }
                          } else r.onTap && r.onTap({ event: t });
                          return (
                            r.onTouchEndOrOnMouseUp &&
                              r.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), u),
                              { eventData: n },
                            )
                          );
                        });
                      },
                      v = () => {
                        document.removeEventListener(c, n),
                          document.removeEventListener(d, m);
                      },
                      m = (e) => {
                        v(), p(e);
                      },
                      x = (e, t) => {
                        let a = () => {};
                        if (e && e.addEventListener) {
                          let o = Object.assign(
                              Object.assign({}, s.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            l = [
                              ["touchstart", r, o],
                              [
                                "touchmove",
                                n,
                                Object.assign(
                                  Object.assign({}, o),
                                  t.preventScrollOnSwipe ? { passive: !1 } : {},
                                ),
                              ],
                              ["touchend", p, o],
                            ];
                          l.forEach((t) => {
                            let [r, n, a] = t;
                            return e.addEventListener(r, n, a);
                          }),
                            (a = () =>
                              l.forEach((t) => {
                                let [r, n] = t;
                                return e.removeEventListener(r, n);
                              }));
                        }
                        return a;
                      },
                      y = {
                        ref: (t) => {
                          null !== t &&
                            e((e, r) => {
                              if (e.el === t) return e;
                              let n = {};
                              return (
                                e.el &&
                                  e.el !== t &&
                                  e.cleanUpTouch &&
                                  (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                r.trackTouch && t && (n.cleanUpTouch = x(t, r)),
                                Object.assign(
                                  Object.assign(Object.assign({}, e), {
                                    el: t,
                                  }),
                                  n,
                                )
                              );
                            });
                        },
                      };
                    return t.trackMouse && (y.onMouseDown = r), [y, x];
                  })((e) => (x.current = e(x.current, y.current)), {
                    trackMouse: m,
                  }),
                [m],
              );
              return (
                (x.current =
                  ((t = x.current),
                  (r = y.current),
                  (p = g.current),
                  r.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? r.preventScrollOnSwipe !== p.preventScrollOnSwipe ||
                        r.touchEventOptions.passive !==
                          p.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: k(t.el, r),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: k(t.el, r),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                _
              );
            }
          },
          6161: (e, t, r) => {
            var n = r(810),
              a = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              i =
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, r) {
              var n,
                o = {},
                u = null,
                c = null;
              for (n in (void 0 !== r && (u = "" + r),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                l.call(t, n) && !s.hasOwnProperty(n) && (o[n] = t[n]);
              if (e && e.defaultProps)
                for (n in (t = e.defaultProps))
                  void 0 === o[n] && (o[n] = t[n]);
              return {
                $$typeof: a,
                type: e,
                key: u,
                ref: c,
                props: o,
                _owner: i.current,
              };
            }
            (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          5695: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "add", xlinkHref: "#add" }),
              ]);
            });
          },
          9800: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "addToPlaylist",
                  xlinkHref: "#addToPlaylist",
                }),
              ]);
            });
          },
          2751: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "adult", xlinkHref: "#adult" }),
              ]);
            });
          },
          383: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "album", xlinkHref: "#album" }),
              ]);
            });
          },
          758: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "arrowDown",
                  xlinkHref: "#arrowDown",
                }),
              ]);
            });
          },
          9466: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "arrowLeft",
                  xlinkHref: "#arrowLeft",
                }),
              ]);
            });
          },
          9032: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "arrowRight",
                  xlinkHref: "#arrowRight",
                }),
              ]);
            });
          },
          7294: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "artist", xlinkHref: "#artist" }),
              ]);
            });
          },
          8409: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "attention",
                  xlinkHref: "#attention",
                }),
              ]);
            });
          },
          2571: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "booksLogo",
                  xlinkHref: "#booksLogo",
                }),
              ]);
            });
          },
          1478: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "bucket", xlinkHref: "#bucket" }),
              ]);
            });
          },
          849: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "cast", xlinkHref: "#cast" }),
              ]);
            });
          },
          3781: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "chain", xlinkHref: "#chain" }),
              ]);
            });
          },
          5951: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "chartDown",
                  xlinkHref: "#chartDown",
                }),
              ]);
            });
          },
          7203: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "chartNew",
                  xlinkHref: "#chartNew",
                }),
              ]);
            });
          },
          8688: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "chartSame",
                  xlinkHref: "#chartSame",
                }),
              ]);
            });
          },
          4653: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "chartUp",
                  xlinkHref: "#chartUp",
                }),
              ]);
            });
          },
          2966: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "check", xlinkHref: "#check" }),
              ]);
            });
          },
          8520: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "clip", xlinkHref: "#clip" }),
              ]);
            });
          },
          5849: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "close", xlinkHref: "#close" }),
              ]);
            });
          },
          6293: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "code", xlinkHref: "#code" }),
              ]);
            });
          },
          5972: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "collections",
                  xlinkHref: "#collections",
                }),
              ]);
            });
          },
          6631: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "collections_selected",
                  xlinkHref: "#collections_selected",
                }),
              ]);
            });
          },
          2703: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "dislike",
                  xlinkHref: "#dislike",
                }),
              ]);
            });
          },
          3514: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "disliked",
                  xlinkHref: "#disliked",
                }),
              ]);
            });
          },
          957: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "donation",
                  xlinkHref: "#donation",
                }),
              ]);
            });
          },
          3683: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "download",
                  xlinkHref: "#download",
                }),
              ]);
            });
          },
          258: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "downloaded",
                  xlinkHref: "#downloaded",
                }),
              ]);
            });
          },
          3342: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "dragDots",
                  xlinkHref: "#dragDots",
                }),
              ]);
            });
          },
          4439: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "edit", xlinkHref: "#edit" }),
              ]);
            });
          },
          7969: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "exclamation",
                  xlinkHref: "#exclamation",
                }),
              ]);
            });
          },
          7431: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "explicit",
                  xlinkHref: "#explicit",
                }),
              ]);
            });
          },
          6609: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "eye_crossed",
                  xlinkHref: "#eye_crossed",
                }),
              ]);
            });
          },
          2900: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "filter", xlinkHref: "#filter" }),
              ]);
            });
          },
          7299: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "fullscreen",
                  xlinkHref: "#fullscreen",
                }),
              ]);
            });
          },
          2272: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "history",
                  xlinkHref: "#history",
                }),
              ]);
            });
          },
          533: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "home", xlinkHref: "#home" }),
              ]);
            });
          },
          8005: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "home_selected",
                  xlinkHref: "#home_selected",
                }),
              ]);
            });
          },
          3687: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "info", xlinkHref: "#info" }),
              ]);
            });
          },
          7261: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "kids", xlinkHref: "#kids" }),
              ]);
            });
          },
          899: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "kids_selected",
                  xlinkHref: "#kids_selected",
                }),
              ]);
            });
          },
          2646: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "kinopoiskEn",
                  xlinkHref: "#kinopoiskEn",
                }),
              ]);
            });
          },
          3171: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "kinopoiskRu",
                  xlinkHref: "#kinopoiskRu",
                }),
              ]);
            });
          },
          5494: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "lightning",
                  xlinkHref: "#lightning",
                }),
              ]);
            });
          },
          6334: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "like", xlinkHref: "#like" }),
              ]);
            });
          },
          4973: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "likeVariant",
                  xlinkHref: "#likeVariant",
                }),
              ]);
            });
          },
          9165: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "liked", xlinkHref: "#liked" }),
              ]);
            });
          },
          1936: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "likedVariant",
                  xlinkHref: "#likedVariant",
                }),
              ]);
            });
          },
          5517: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "link", xlinkHref: "#link" }),
              ]);
            });
          },
          5061: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "listen", xlinkHref: "#listen" }),
              ]);
            });
          },
          7358: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "liteVersion",
                  xlinkHref: "#liteVersion",
                }),
              ]);
            });
          },
          6685: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "lock", xlinkHref: "#lock" }),
              ]);
            });
          },
          8274: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "lyrics", xlinkHref: "#lyrics" }),
              ]);
            });
          },
          6104: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "macos", xlinkHref: "#macos" }),
              ]);
            });
          },
          6094: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "menuArrow",
                  xlinkHref: "#menuArrow",
                }),
              ]);
            });
          },
          3974: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "more", xlinkHref: "#more" }),
              ]);
            });
          },
          2502: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "musicLogo",
                  xlinkHref: "#musicLogo",
                }),
              ]);
            });
          },
          1754: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "musicLogoCenterEn",
                  xlinkHref: "#musicLogoCenterEn",
                }),
              ]);
            });
          },
          6615: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "musicLogoCenterRu",
                  xlinkHref: "#musicLogoCenterRu",
                }),
              ]);
            });
          },
          7942: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "musicLogoLeftEn",
                  xlinkHref: "#musicLogoLeftEn",
                }),
              ]);
            });
          },
          1498: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "musicLogoLeftRu",
                  xlinkHref: "#musicLogoLeftRu",
                }),
              ]);
            });
          },
          9473: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "next", xlinkHref: "#next" }),
              ]);
            });
          },
          5985: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "non_music",
                  xlinkHref: "#non_music",
                }),
              ]);
            });
          },
          8749: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "note", xlinkHref: "#note" }),
              ]);
            });
          },
          6953: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "offline",
                  xlinkHref: "#offline",
                }),
              ]);
            });
          },
          4947: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "pause", xlinkHref: "#pause" }),
              ]);
            });
          },
          243: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "pauseVibe",
                  xlinkHref: "#pauseVibe",
                }),
              ]);
            });
          },
          1687: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "pause_filled",
                  xlinkHref: "#pause_filled",
                }),
              ]);
            });
          },
          2761: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "pencil", xlinkHref: "#pencil" }),
              ]);
            });
          },
          6504: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "picture",
                  xlinkHref: "#picture",
                }),
              ]);
            });
          },
          9817: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "pin", xlinkHref: "#pin" }),
              ]);
            });
          },
          6515: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "pin_filled",
                  xlinkHref: "#pin_filled",
                }),
              ]);
            });
          },
          7471: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "play", xlinkHref: "#play" }),
              ]);
            });
          },
          3133: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "playLast",
                  xlinkHref: "#playLast",
                }),
              ]);
            });
          },
          1514: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "playNext",
                  xlinkHref: "#playNext",
                }),
              ]);
            });
          },
          5801: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "playQueue",
                  xlinkHref: "#playQueue",
                }),
              ]);
            });
          },
          6684: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "playVibe",
                  xlinkHref: "#playVibe",
                }),
              ]);
            });
          },
          9319: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "play_filled",
                  xlinkHref: "#play_filled",
                }),
              ]);
            });
          },
          8602: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "playlist",
                  xlinkHref: "#playlist",
                }),
              ]);
            });
          },
          8861: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "plus", xlinkHref: "#plus" }),
              ]);
            });
          },
          6809: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "plusBadge",
                  xlinkHref: "#plusBadge",
                }),
              ]);
            });
          },
          5266: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "plusColor",
                  xlinkHref: "#plusColor",
                }),
              ]);
            });
          },
          1179: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "plusOutlined",
                  xlinkHref: "#plusOutlined",
                }),
              ]);
            });
          },
          6532: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "podcasts",
                  xlinkHref: "#podcasts",
                }),
              ]);
            });
          },
          7918: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "previous",
                  xlinkHref: "#previous",
                }),
              ]);
            });
          },
          7692: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "repeat", xlinkHref: "#repeat" }),
              ]);
            });
          },
          7881: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "repeat_one",
                  xlinkHref: "#repeat_one",
                }),
              ]);
            });
          },
          2339: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "reset", xlinkHref: "#reset" }),
              ]);
            });
          },
          68: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "rewindBackwards",
                  xlinkHref: "#rewindBackwards",
                }),
              ]);
            });
          },
          3594: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "rewindForward",
                  xlinkHref: "#rewindForward",
                }),
              ]);
            });
          },
          7954: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "search", xlinkHref: "#search" }),
              ]);
            });
          },
          6178: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "search_selected",
                  xlinkHref: "#search_selected",
                }),
              ]);
            });
          },
          200: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "settings",
                  xlinkHref: "#settings",
                }),
              ]);
            });
          },
          9109: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "share", xlinkHref: "#share" }),
              ]);
            });
          },
          4521: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "shuffle",
                  xlinkHref: "#shuffle",
                }),
              ]);
            });
          },
          3013: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1_25x",
                  xlinkHref: "#speed_1_25x",
                }),
              ]);
            });
          },
          6751: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1_25x_centered",
                  xlinkHref: "#speed_1_25x_centered",
                }),
              ]);
            });
          },
          1937: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1_5x",
                  xlinkHref: "#speed_1_5x",
                }),
              ]);
            });
          },
          9425: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1_5x_centered",
                  xlinkHref: "#speed_1_5x_centered",
                }),
              ]);
            });
          },
          4576: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1_75x",
                  xlinkHref: "#speed_1_75x",
                }),
              ]);
            });
          },
          6235: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1_75x_centered",
                  xlinkHref: "#speed_1_75x_centered",
                }),
              ]);
            });
          },
          7163: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1x",
                  xlinkHref: "#speed_1x",
                }),
              ]);
            });
          },
          3615: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_1x_centered",
                  xlinkHref: "#speed_1x_centered",
                }),
              ]);
            });
          },
          4717: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_2x",
                  xlinkHref: "#speed_2x",
                }),
              ]);
            });
          },
          1293: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "speed_2x_centered",
                  xlinkHref: "#speed_2x_centered",
                }),
              ]);
            });
          },
          9298: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "syncLyrics",
                  xlinkHref: "#syncLyrics",
                }),
              ]);
            });
          },
          6539: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "trailer",
                  xlinkHref: "#trailer",
                }),
              ]);
            });
          },
          6029: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "unavailable",
                  xlinkHref: "#unavailable",
                }),
              ]);
            });
          },
          5312: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "unpin", xlinkHref: "#unpin" }),
              ]);
            });
          },
          2859: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "upload", xlinkHref: "#upload" }),
              ]);
            });
          },
          3993: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "users", xlinkHref: "#users" }),
              ]);
            });
          },
          5730: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "vibe", xlinkHref: "#vibe" }),
              ]);
            });
          },
          631: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", { key: "volume", xlinkHref: "#volume" }),
              ]);
            });
          },
          4689: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "volumeOff",
                  xlinkHref: "#volumeOff",
                }),
              ]);
            });
          },
          6206: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "windows",
                  xlinkHref: "#windows",
                }),
              ]);
            });
          },
          9481: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "yandexBooksEn",
                  xlinkHref: "#yandexBooksEn",
                }),
              ]);
            });
          },
          7364: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "yandexBooksRu",
                  xlinkHref: "#yandexBooksRu",
                }),
              ]);
            });
          },
          8577: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "yandexPayEn",
                  xlinkHref: "#yandexPayEn",
                }),
              ]);
            });
          },
          5760: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "yandexPayRu",
                  xlinkHref: "#yandexPayRu",
                }),
              ]);
            });
          },
          5667: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "yandexPlusEn",
                  xlinkHref: "#yandexPlusEn",
                }),
              ]);
            });
          },
          2639: (e, t, r) => {
            var n = r(810);
            e.exports = n.forwardRef(function (e, t) {
              return n.createElement("svg", Object.assign({}, e, { ref: t }), [
                n.createElement("use", {
                  key: "yandexPlusRu",
                  xlinkHref: "#yandexPlusRu",
                }),
              ]);
            });
          },
          9110: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useCallbackRef =
                t.useDebouncedToggle =
                t.useResize =
                t.useIsomorphicEffect =
                t.useForceUpdateRef =
                t.useElementOffsetY =
                t.getElementNameByDataAttribute =
                t.createIntersectionObserver =
                t.useIntersectionObserver =
                t.useKeyboardNavigation =
                t.useScroll =
                t.useForwardRef =
                  void 0);
            var n = r(245);
            Object.defineProperty(t, "useForwardRef", {
              enumerable: !0,
              get: function () {
                return n.useForwardRef;
              },
            });
            var a = r(2067);
            Object.defineProperty(t, "useScroll", {
              enumerable: !0,
              get: function () {
                return a.useScroll;
              },
            });
            var o = r(5188);
            Object.defineProperty(t, "useKeyboardNavigation", {
              enumerable: !0,
              get: function () {
                return o.useKeyboardNavigation;
              },
            });
            var l = r(5663);
            Object.defineProperty(t, "useIntersectionObserver", {
              enumerable: !0,
              get: function () {
                return l.useIntersectionObserver;
              },
            }),
              Object.defineProperty(t, "createIntersectionObserver", {
                enumerable: !0,
                get: function () {
                  return l.createIntersectionObserver;
                },
              }),
              Object.defineProperty(t, "getElementNameByDataAttribute", {
                enumerable: !0,
                get: function () {
                  return l.getElementNameByDataAttribute;
                },
              });
            var i = r(2101);
            Object.defineProperty(t, "useElementOffsetY", {
              enumerable: !0,
              get: function () {
                return i.useElementOffsetY;
              },
            });
            var s = r(2767);
            Object.defineProperty(t, "useForceUpdateRef", {
              enumerable: !0,
              get: function () {
                return s.useForceUpdateRef;
              },
            });
            var u = r(9019);
            Object.defineProperty(t, "useIsomorphicEffect", {
              enumerable: !0,
              get: function () {
                return u.useIsomorphicEffect;
              },
            });
            var c = r(2947);
            Object.defineProperty(t, "useResize", {
              enumerable: !0,
              get: function () {
                return c.useResize;
              },
            });
            var d = r(6699);
            Object.defineProperty(t, "useDebouncedToggle", {
              enumerable: !0,
              get: function () {
                return d.useDebouncedToggle;
              },
            });
            var f = r(8691);
            Object.defineProperty(t, "useCallbackRef", {
              enumerable: !0,
              get: function () {
                return f.useCallbackRef;
              },
            });
          },
          8691: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useCallbackRef = void 0);
            let n = r(810);
            t.useCallbackRef = function (e) {
              let t = (0, n.useRef)({
                stableFn: function () {
                  for (
                    var e = arguments.length, r = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return t.current.callback(...r);
                },
                callback: e,
              });
              return (
                (0, n.useInsertionEffect)(() => {
                  t.current.callback = e;
                }),
                t.current.stableFn
              );
            };
          },
          1381: (e, t, r) => {
            var n, a;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
            let o = r(810),
              l = r(6169);
            ((a = n || (t.SwipeablePlacement = n = {})).TOP = "top"),
              (a.BOTTOM = "bottom"),
              (a.RIGHT = "right"),
              (a.LEFT = "left");
            let i = (e) => {
                let { ref: t, deltaY: r, deltaX: a, placement: o } = e;
                requestAnimationFrame(() => {
                  t.current &&
                    ((t.current.style.willChange = "transform"),
                    (t.current.style.transform =
                      o === n.TOP || o === n.BOTTOM
                        ? "translateY(".concat(r || 0, "px)")
                        : "translateX(".concat(a || 0, "px)")));
                });
              },
              s = (e) => {
                let { ref: t, deltaY: r, deltaX: a, placement: o } = e;
                switch (o) {
                  case n.TOP:
                    r <= 0 && i({ ref: t, deltaY: r, deltaX: a, placement: o });
                    break;
                  case n.RIGHT:
                    a >= 0 && i({ ref: t, deltaY: r, deltaX: a, placement: o });
                    break;
                  case n.LEFT:
                    a <= 0 && i({ ref: t, deltaY: r, deltaX: a, placement: o });
                    break;
                  default:
                    r >= 0 && i({ ref: t, deltaY: r, deltaX: a, placement: o });
                }
              },
              u = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              c = (e) => {
                let { ref: t, deltaY: r, deltaX: a, placement: o } = e;
                switch (o) {
                  case n.TOP:
                    return (
                      t.current && r < 0 && t.current.offsetHeight / r >= -2
                    );
                  case n.RIGHT:
                    return t.current && a > 0 && t.current.offsetWidth / a <= 2;
                  case n.LEFT:
                    return (
                      t.current && a < 0 && t.current.offsetWidth / a >= -2
                    );
                  default:
                    return (
                      t.current && r > 0 && t.current.offsetHeight / r <= 2
                    );
                }
              };
            t.useComponentSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: r = {},
                  onClose: n,
                  disableSwipe: a,
                  placement: i,
                } = e,
                d = (0, o.useCallback)(() => {
                  n && (u(t), n());
                }, [n, t]),
                f = (0, o.useCallback)(
                  (e) => {
                    a ||
                      s({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: i,
                      });
                  },
                  [a, t, i],
                ),
                p = (0, o.useCallback)(
                  (e) => {
                    !a &&
                      (c({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: i,
                      })
                        ? n && (u(t), n())
                        : u(t));
                  },
                  [a, t, i, n],
                );
              return {
                handlers: (0, l.useSwipeable)({
                  onSwiped: p,
                  onSwiping: f,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...r,
                }),
                onCloseCallback: d,
              };
            };
          },
          6699: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let n = r(352),
              a = r(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: r, throttleTimeout: o } = e,
                l = (0, a.useRef)(null),
                [i, s] = (0, a.useState)(!!r),
                u = (0, a.useMemo)(
                  () =>
                    (0, n.throttle)(() => {
                      s(!r),
                        l.current && window.clearTimeout(l.current),
                        (l.current = window.setTimeout(() => {
                          s(!!r);
                        }, t));
                    }, o),
                  [t, r, o],
                ),
                c = (0, a.useCallback)(() => {
                  s(!!r), l.current && window.clearTimeout(l.current);
                }, [r]);
              return (
                (0, a.useEffect)(
                  () => () => {
                    l.current && window.clearTimeout(l.current);
                  },
                  [],
                ),
                { state: i, handleDebouncedToggle: u, reset: c }
              );
            };
          },
          2101: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useElementOffsetY = void 0);
            let n = r(810),
              a = r(2067),
              o = r(2767);
            t.useElementOffsetY = (e) => {
              let [t, r] = (0, o.useForceUpdateRef)(),
                [l, i] = (0, n.useState)(),
                s = (0, n.useCallback)(() => {
                  let e = null == t ? void 0 : t.getBoundingClientRect();
                  e && i(e.y);
                }, [t]);
              return (
                (0, n.useLayoutEffect)(s),
                (0, a.useScroll)({ onScroll: s, elementRef: e }),
                { forceUpdateRefCallback: r, offsetY: l }
              );
            };
          },
          2767: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForceUpdateRef = void 0);
            let n = r(810);
            t.useForceUpdateRef = () => {
              let [e, t] = (0, n.useState)(null);
              return [
                e,
                (0, n.useCallback)((e) => {
                  t((t) => (t !== e ? e : t));
                }, []),
              ];
            };
          },
          245: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForwardRef = void 0);
            let n = r(810);
            t.useForwardRef = function (e, t) {
              let r = (0, n.useRef)(t);
              return (
                (0, n.useEffect)(() => {
                  e &&
                    ("function" == typeof e
                      ? e(r.current)
                      : (e.current = r.current));
                }, [e]),
                r
              );
            };
          },
          5663: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIntersectionObserver =
                t.createIntersectionObserver =
                t.getElementNameByDataAttribute =
                t.isInViewportNow =
                t.defaultOptions =
                  void 0);
            let n = r(810),
              { innerWidth: a = 0, innerHeight: o = 0 } = window;
            function l(e) {
              let {
                top: t,
                right: r,
                bottom: n,
                left: l,
              } = e.getBoundingClientRect();
              return (
                ((t >= 0 && t <= o) || (n >= 0 && n <= o)) &&
                ((l >= 0 && l <= a) || (r >= 0 && r <= a))
              );
            }
            function i(e) {
              var t, r;
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "data-intersection-property-id";
              return null !==
                (r =
                  null == e
                    ? void 0
                    : null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, n)) && void 0 !== r
                ? r
                : e.attributes[0];
            }
            function s(e, t) {
              let r = new IntersectionObserver((t) => {
                t.forEach((t) => {
                  e(t, r);
                });
              }, t);
              return r;
            }
            (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
              (t.isInViewportNow = l),
              (t.getElementNameByDataAttribute = i),
              (t.createIntersectionObserver = s),
              (t.useIntersectionObserver = function (e, r, a) {
                let [
                    { freezeOnceVisible: o, preflightCheck: u, ...c },
                    d = !1,
                  ] =
                    "boolean" == typeof r || void 0 === r
                      ? [t.defaultOptions, r]
                      : [{ ...t.defaultOptions, ...r }, a],
                  [f, p] = (0, n.useState)({}),
                  v = (0, n.useMemo)(
                    () =>
                      d
                        ? null
                        : s((e) => {
                            let t = i(e.target);
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
                    [d],
                  );
                return (
                  (0, n.useLayoutEffect)(
                    () => (
                      v &&
                        !d &&
                        e.forEach((e) => {
                          if (e.current) {
                            let t = !1;
                            if (u && (t = l(e.current))) {
                              let t = i(e.current);
                              p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                            }
                            t || v.observe(e.current);
                          }
                        }),
                      () => {
                        v && v.disconnect();
                      }
                    ),
                    [d, v, e.length],
                  ),
                  f
                );
              });
          },
          9019: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIsomorphicEffect = void 0);
            let n = r(810);
            t.useIsomorphicEffect =
              "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
          },
          5188: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useKeyboardNavigation = void 0);
            let n = r(810);
            function a(e, t) {
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
                  navigationItemsSelector: r,
                  activeAttributeName: o = "aria-selected",
                } = t,
                l = (0, n.useCallback)(
                  (t) => {
                    let n = a(e, r);
                    if (!n.length) return;
                    let o = t.target,
                      l = n.indexOf(o);
                    if (-1 === l) return;
                    let [i] = n,
                      s = n.at(-1),
                      u = null;
                    switch (t.key) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        u = n[l - 1] || s;
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        u = n[l + 1] || i;
                        break;
                      case "Home":
                        u = i;
                        break;
                      case "End":
                        u = s;
                    }
                    null !== u && (u.focus(), t.preventDefault());
                  },
                  [r, e],
                );
              (0, n.useEffect)(() => {
                let t = e.current;
                return (
                  null == t || t.addEventListener("keydown", l),
                  () =>
                    null == t ? void 0 : t.removeEventListener("keydown", l)
                );
              }, [e, l]),
                (0, n.useEffect)(() => {
                  a(e, r).forEach((e) => {
                    e.hasAttribute(o) &&
                      ("true" === e.getAttribute(o)
                        ? (e.tabIndex = 0)
                        : (e.tabIndex = -1));
                  });
                });
            };
          },
          4395: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable = void 0);
            let n = r(810),
              a = r(1381);
            t.usePopoverSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: r = {},
                  onClose: o,
                  disableSwipe: l,
                  placement: i,
                } = e,
                s = (0, n.useMemo)(() => {
                  switch (i) {
                    case "top":
                    case "top-end":
                    case "top-start":
                      return a.SwipeablePlacement.TOP;
                    case "right":
                    case "right-end":
                    case "right-start":
                      return a.SwipeablePlacement.RIGHT;
                    case "left":
                    case "left-end":
                    case "left-start":
                      return a.SwipeablePlacement.LEFT;
                    default:
                      return a.SwipeablePlacement.BOTTOM;
                  }
                }, [i]);
              return (0, a.useComponentSwipeable)({
                ref: t,
                swipeableProps: r,
                onClose: o,
                disableSwipe: l,
                placement: s,
              });
            };
          },
          2947: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useResize = void 0);
            let n = r(810),
              a = r(361);
            t.useResize = (e, t) => {
              (0, n.useEffect)(() => {
                let r = (0, a.getElementFromRefOrElement)(t);
                if (null === r) return;
                let n = null != r ? r : document.documentElement,
                  o = new ResizeObserver(e);
                return o.observe(n), () => o.disconnect();
              }, [t, e]);
            };
          },
          2067: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let n = r(810),
              a = r(361),
              o = r(6699);
            t.useScroll = (e) => {
              let { onScroll: t, listenIsScrolling: r, elementRef: l } = e,
                { state: i, handleDebouncedToggle: s } = (0,
                o.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                u = (0, n.useCallback)(() => {
                  r && s(), null == t || t();
                }, [r, s, t]);
              return (
                (0, n.useEffect)(() => {
                  let e = (0, a.getElementFromRefOrElement)(l);
                  if (null === e) return;
                  let t = null != e ? e : window,
                    r = { capture: !0, passive: !0 };
                  return (
                    t.addEventListener("scroll", u, r),
                    () => t.removeEventListener("scroll", u, r)
                  );
                }, [l, u]),
                i
              );
            };
          },
          4601: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useToggle = void 0);
            let n = r(810);
            t.useToggle = (e) => {
              let [t, r] = (0, n.useState)(e);
              (0, n.useEffect)(() => {
                r(e);
              }, [e]);
              let a = (0, n.useCallback)(() => {
                  r((e) => !e);
                }, []),
                o = (0, n.useCallback)(() => {
                  r(!0);
                }, []),
                l = (0, n.useCallback)(() => {
                  r(!1);
                }, []);
              return {
                state: t,
                toggle: a,
                setState: r,
                toggleTrue: o,
                toggleFalse: l,
              };
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, r) {
                let n = null != r ? r : e.currentTarget,
                  a = document.createElement("span"),
                  o = Math.max(n.clientWidth, n.clientHeight),
                  l = o / 2,
                  i = n.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(i.width / 2)
                      : e.clientX - i.left,
                  u =
                    0 === e.clientY
                      ? Math.round(i.height / 2)
                      : e.clientY - i.top;
                (a.style.width = "".concat(o, "px")),
                  (a.style.height = "".concat(o, "px")),
                  (a.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - l, "px")),
                  (a.style.top = "".concat(u - l, "px")),
                  a.classList.add(t);
                let c = n.getElementsByClassName(t)[0];
                c && c.remove(), n.insertBefore(a, n.firstChild);
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
          8216: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = t.createRipple = void 0);
            var n = r(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return n.createRipple;
              },
            });
            var a = r(361);
            Object.defineProperty(t, "getElementFromRefOrElement", {
              enumerable: !0,
              get: function () {
                return a.getElementFromRefOrElement;
              },
            });
          },
          8119: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            let a = r(9541),
              o = r(810),
              l = r(5881),
              i = r(8216),
              s = n(r(8635)),
              u = (e) => {
                let {
                    forwardRef: t,
                    isBlock: r,
                    iconPosition: n = "left",
                    children: u,
                    className: c,
                    color: d = "secondary",
                    flexIcon: f,
                    icon: p,
                    spinner: v,
                    role: m,
                    onClick: x,
                    radius: y = "m",
                    size: g,
                    type: _ = "button",
                    variant: k = "default",
                    withRipple: E = !0,
                    withHover: b = !0,
                    withBorder: h = !1,
                    disabled: w,
                    iconClassName: O,
                    contentContainerClassName: R,
                    ...j
                  } = e,
                  C = (0, o.useId)(),
                  S = !o.Children.toArray(u).filter(Boolean).length,
                  P = "left" === n,
                  T = null,
                  L = (0, o.isValidElement)(v);
                if (p) {
                  var M, A;
                  T = (0, o.cloneElement)(p, {
                    className: (0, l.clsx)(
                      s.default.icon,
                      {
                        [s.default["icon_position_".concat(n)]]: n && !S,
                        [s.default.icon_withButtonSize]: !(null ===
                          (M = p.props) || void 0 === M
                          ? void 0
                          : M.size),
                      },
                      null === (A = p.props) || void 0 === A
                        ? void 0
                        : A.className,
                      O,
                    ),
                    key: C,
                  });
                }
                let z = (0, o.useMemo)(
                    () =>
                      L
                        ? (0, a.jsx)("div", {
                            className: s.default.spinnerContainer,
                            children: v,
                          })
                        : null,
                    [L, v],
                  ),
                  H = (0, o.useCallback)(
                    (e) => {
                      L ||
                        (E && (0, i.createRipple)(e, s.default.ripple),
                        null == x || x(e));
                    },
                    [L, x, E],
                  );
                return (0, a.jsx)("button", {
                  ref: t,
                  className: (0, l.clsx)(
                    s.default.root,
                    s.default["root_".concat(d, "_").concat(k)],
                    s.default["root_radius_".concat(y)],
                    s.default.root_size,
                    {
                      [s.default["root_".concat(d, "_withHover_").concat(k)]]:
                        b && !w && !L,
                      [s.default["root_size_".concat(g)]]: g,
                      [s.default.root_withoutBorder]: !h,
                      [s.default.root_withActiveSpinner]: L,
                      [s.default.block]: r,
                      [s.default.flexIcon]: f,
                      [s.default.iconOnly]: S,
                      [s.default.root_icon_left]: p && !S && P,
                      [s.default.root_icon_right]: p && !S && !P,
                    },
                    c,
                  ),
                  type: _,
                  role: m,
                  onClick: H,
                  ...j,
                  disabled: w,
                  "aria-live": L ? "polite" : "off",
                  "aria-busy": L,
                  children:
                    p || L
                      ? (0, a.jsxs)("span", {
                          className: (0, l.clsx)(
                            s.default.contentContainer,
                            { [s.default.contentContainer_block]: r },
                            R,
                          ),
                          children: [p && P && T, !S && u, p && !P && T, z],
                        })
                      : u,
                });
              };
            t.Button = (0, o.forwardRef)((e, t) =>
              (0, a.jsx)(u, { forwardRef: t, ...e }),
            );
          },
          5928: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            var n = r(8119);
            Object.defineProperty(t, "Button", {
              enumerable: !0,
              get: function () {
                return n.Button;
              },
            });
          },
          8324: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Dropdown = t.DropdownComponent = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = r(5062),
              s = r(1688),
              u = n(r(7519));
            (t.DropdownComponent = (e) => {
              let {
                  reference: t,
                  onSelect: r,
                  onIconActiveState: n,
                  offsetOptions: c = 8,
                  defaultValue: d,
                  placement: f,
                  header: p,
                  isDisabled: v = !1,
                  footer: m,
                  isMobile: x = !1,
                  children: y,
                  forwardRef: g,
                  className: _,
                  containerClassName: k,
                  ...E
                } = e,
                b = (0, l.useId)(),
                [h, w] = (0, l.useState)(!1),
                [O, R] = (0, l.useState)(d);
              (0, l.useEffect)(() => {
                R(d);
              }, [d]);
              let j = (0, l.useCallback)(() => {
                  v || (w(!h), null == n || n(!h));
                }, [v, h, n]),
                C = (0, l.useCallback)(
                  (e) => {
                    R(e.id), r(e), w(!1), null == n || n(!1);
                  },
                  [r, n],
                );
              return (0, a.jsxs)(i.Popover, {
                open: h,
                onOpenChange: j,
                placement: f,
                offsetOptions: c,
                isMobile: x,
                customRoleProps: { role: "menu" },
                "aria-labelledby": b,
                children: [
                  (0, l.cloneElement)(t, {
                    id: b,
                    onClick: j,
                    disabled: v,
                    variant: "text",
                    withHover: !1,
                    color: "primary",
                    className: (0, o.clsx)(u.default.button, t.props.className),
                  }),
                  (0, a.jsx)(s.PopoverContent, {
                    children: (0, a.jsxs)("div", {
                      className: (0, o.clsx)(u.default.root, _),
                      ...E,
                      children: [
                        x &&
                          (0, a.jsx)("div", { className: u.default.swipeIcon }),
                        (0, a.jsxs)("ul", {
                          ref: g,
                          className: (0, o.clsx)(
                            u.default.container,
                            { [u.default.container_mobile]: x },
                            k,
                          ),
                          children: [
                            p &&
                              (0, a.jsx)("div", {
                                className: u.default.textContainer,
                                children: p,
                              }),
                            l.Children.map(y, (e) =>
                              (0, l.cloneElement)(e, {
                                key: e.props.id,
                                onClick: () => C(e.props),
                                isSelected: O === e.props.id,
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
              (t.Dropdown = (0, l.forwardRef)((e, r) =>
                (0, a.jsx)(t.DropdownComponent, { forwardRef: r, ...e }),
              ));
          },
          1057: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Option = t.OptionComponent = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = r(1964),
              s = r(5928),
              u = r(7066),
              c = r(2582),
              d = n(r(4019));
            (t.OptionComponent = (e) => {
              let {
                  id: t,
                  label: r,
                  isSelected: n = !1,
                  className: l,
                  forwardRef: f,
                  ...p
                } = e,
                v = (0, i.useListItem)(),
                m = (0, i.useMergeRefs)([v.ref, f]);
              return (0, a.jsx)("li", {
                className: d.default.root,
                children: (0, a.jsxs)(s.Button, {
                  className: (0, o.clsx)(d.default.button, l),
                  ref: m,
                  id: t,
                  variant: "text",
                  color: "primary",
                  withHover: !1,
                  role: "menuitem",
                  "aria-selected": n,
                  ...p,
                  children: [
                    (0, a.jsx)(c.Caption, {
                      variant: "span",
                      className: d.default.buttonText,
                      children: r,
                    }),
                    n && (0, a.jsx)(u.Icon, { size: "xxs", variant: "check" }),
                  ],
                }),
              });
            }),
              (t.Option = (0, l.forwardRef)((e, r) => {
                let { children: n, ...o } = e;
                return (0, a.jsx)(t.OptionComponent, {
                  forwardRef: r,
                  ...o,
                  children: n,
                });
              }));
          },
          5189: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = t.IconComponent = void 0);
            let a = r(9541),
              o = r(810),
              l = r(5881),
              i = r(5151),
              s = r(4905),
              u = n(r(5929));
            (t.IconComponent = (e) => {
              let {
                  "aria-label": t,
                  className: r,
                  focusable: n = !1,
                  variant: o,
                  size: c,
                  forwardRef: d,
                  ...f
                } = e,
                p = i.iconsCollection[o];
              return (0, a.jsx)(p, {
                className: (0, l.clsx)(
                  u.default.root,
                  r,
                  u.default["root_size_".concat(c)],
                ),
                focusable: n,
                "aria-label": t,
                ...f,
                "aria-hidden": !t,
                ref: d,
                style: { ...(f.style || {}), padding: s.paddings[o] },
              });
            }),
              (t.Icon = (0, o.forwardRef)((e, r) =>
                (0, a.jsx)(t.IconComponent, { forwardRef: r, ...e }),
              ));
          },
          5151: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.iconsCollection = void 0);
            let a = n(r(5695)),
              o = n(r(9800)),
              l = n(r(2751)),
              i = n(r(383)),
              s = n(r(758)),
              u = n(r(9466)),
              c = n(r(9032)),
              d = n(r(7294)),
              f = n(r(8409)),
              p = n(r(2571)),
              v = n(r(1478)),
              m = n(r(849)),
              x = n(r(3781)),
              y = n(r(5951)),
              g = n(r(7203)),
              _ = n(r(8688)),
              k = n(r(4653)),
              E = n(r(2966)),
              b = n(r(6293)),
              h = n(r(5849)),
              w = n(r(8520)),
              O = n(r(6631)),
              R = n(r(5972)),
              j = n(r(2703)),
              C = n(r(3514)),
              S = n(r(3342)),
              P = n(r(957)),
              T = n(r(3683)),
              L = n(r(258)),
              M = n(r(4439)),
              A = n(r(7969)),
              z = n(r(7431)),
              H = n(r(6609)),
              q = n(r(2900)),
              N = n(r(7299)),
              B = n(r(3687)),
              D = n(r(2272)),
              U = n(r(8005)),
              I = n(r(533)),
              F = n(r(7261)),
              Z = n(r(899)),
              V = n(r(2646)),
              W = n(r(3171)),
              Y = n(r(5494)),
              K = n(r(6334)),
              G = n(r(9165)),
              Q = n(r(1936)),
              X = n(r(4973)),
              J = n(r(5517)),
              $ = n(r(7358)),
              ee = n(r(5061)),
              et = n(r(6685)),
              er = n(r(8274)),
              en = n(r(6104)),
              ea = n(r(6094)),
              eo = n(r(3974)),
              el = n(r(2502)),
              ei = n(r(1754)),
              es = n(r(6615)),
              eu = n(r(7942)),
              ec = n(r(1498)),
              ed = n(r(9473)),
              ef = n(r(5985)),
              ep = n(r(8749)),
              ev = n(r(6953)),
              em = n(r(1687)),
              ex = n(r(4947)),
              ey = n(r(243)),
              eg = n(r(2761)),
              e_ = n(r(6504)),
              ek = n(r(6515)),
              eE = n(r(9817)),
              eb = n(r(9319)),
              eh = n(r(7471)),
              ew = n(r(3133)),
              eO = n(r(8602)),
              eR = n(r(1514)),
              ej = n(r(5801)),
              eC = n(r(6684)),
              eS = n(r(8861)),
              eP = n(r(5266)),
              eT = n(r(6809)),
              eL = n(r(1179)),
              eM = n(r(6532)),
              eA = n(r(7918)),
              ez = n(r(7881)),
              eH = n(r(7692)),
              eq = n(r(2339)),
              eN = n(r(68)),
              eB = n(r(3594)),
              eD = n(r(7954)),
              eU = n(r(6178)),
              eI = n(r(200)),
              eF = n(r(9109)),
              eZ = n(r(4521)),
              eV = n(r(7163)),
              eW = n(r(3013)),
              eY = n(r(1937)),
              eK = n(r(4576)),
              eG = n(r(4717)),
              eQ = n(r(3615)),
              eX = n(r(6751)),
              eJ = n(r(9425)),
              e$ = n(r(6235)),
              e0 = n(r(1293)),
              e1 = n(r(9298)),
              e5 = n(r(6539)),
              e3 = n(r(6029)),
              e8 = n(r(5312)),
              e2 = n(r(2859)),
              e6 = n(r(3993)),
              e4 = n(r(5730)),
              e7 = n(r(631)),
              e9 = n(r(4689)),
              te = n(r(6206)),
              tt = n(r(5667)),
              tr = n(r(2639)),
              tn = n(r(8577)),
              ta = n(r(5760)),
              to = n(r(9481)),
              tl = n(r(7364));
            t.iconsCollection = {
              add: a.default,
              addToPlaylist: o.default,
              adult: l.default,
              album: i.default,
              arrowDown: s.default,
              arrowLeft: u.default,
              arrowRight: c.default,
              artist: d.default,
              attention: f.default,
              booksLogo: p.default,
              bucket: v.default,
              cast: m.default,
              chain: x.default,
              chartDown: y.default,
              chartNew: g.default,
              chartSame: _.default,
              chartUp: k.default,
              check: E.default,
              code: b.default,
              close: h.default,
              clip: w.default,
              collections_selected: O.default,
              collections: R.default,
              dislike: j.default,
              disliked: C.default,
              dragDots: S.default,
              donation: P.default,
              download: T.default,
              downloaded: L.default,
              edit: M.default,
              exclamation: A.default,
              explicit: z.default,
              eye_crossed: H.default,
              filter: q.default,
              fullscreen: N.default,
              history: D.default,
              home_selected: U.default,
              home: I.default,
              info: B.default,
              kids: F.default,
              kids_selected: Z.default,
              kinopoiskEn: V.default,
              kinopoiskRu: W.default,
              lightning: Y.default,
              like: K.default,
              liked: G.default,
              likedVariant: Q.default,
              likeVariant: X.default,
              link: J.default,
              liteVersion: $.default,
              listen: ee.default,
              lock: et.default,
              lyrics: er.default,
              macos: en.default,
              menuArrow: ea.default,
              more: eo.default,
              musicLogo: el.default,
              musicLogoCenterEn: ei.default,
              musicLogoCenterRu: es.default,
              musicLogoLeftEn: eu.default,
              musicLogoLeftRu: ec.default,
              next: ed.default,
              non_music: ef.default,
              note: ep.default,
              offline: ev.default,
              pause_filled: em.default,
              pause: ex.default,
              pauseVibe: ey.default,
              pencil: eg.default,
              picture: e_.default,
              pin_filled: ek.default,
              pin: eE.default,
              play_filled: eb.default,
              play: eh.default,
              playLast: ew.default,
              playlist: eO.default,
              playNext: eR.default,
              playQueue: ej.default,
              playVibe: eC.default,
              plus: eS.default,
              plusColor: eP.default,
              plusBadge: eT.default,
              plusOutlined: eL.default,
              podcasts: eM.default,
              previous: eA.default,
              repeat_one: ez.default,
              repeat: eH.default,
              reset: eq.default,
              rewindBackwards: eN.default,
              rewindForward: eB.default,
              search: eD.default,
              search_selected: eU.default,
              settings: eI.default,
              share: eF.default,
              shuffle: eZ.default,
              speed_1x: eV.default,
              speed_1_25x: eW.default,
              speed_1_5x: eY.default,
              speed_1_75x: eK.default,
              speed_2x: eG.default,
              speed_1x_centered: eQ.default,
              speed_1_25x_centered: eX.default,
              speed_1_5x_centered: eJ.default,
              speed_1_75x_centered: e$.default,
              speed_2x_centered: e0.default,
              syncLyrics: e1.default,
              trailer: e5.default,
              unavailable: e3.default,
              unpin: e8.default,
              upload: e2.default,
              users: e6.default,
              vibe: e4.default,
              volume: e7.default,
              volumeOff: e9.default,
              windows: te.default,
              yandexPlusEn: tt.default,
              yandexPlusRu: tr.default,
              yandexPayRu: ta.default,
              yandexPayEn: tn.default,
              yandexBooksRu: tl.default,
              yandexBooksEn: to.default,
            };
          },
          7066: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = void 0);
            var n = r(5189);
            Object.defineProperty(t, "Icon", {
              enumerable: !0,
              get: function () {
                return n.Icon;
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
                chartNew: "var(--ym-icon-padding, 0 2px)",
                chartSame: "var(--ym-icon-padding, 8px 5px 9px 6px)",
                chartUp: "var(--ym-icon-padding, 6px 4px 6px 5px)",
                check: "var(--ym-icon-padding, 4px 0 4px 4px)",
                code: "var(--ym-icon-padding, 2px)",
                close: "var(--ym-icon-padding, 6px)",
                clip: "var(--ym-icon-padding)",
                collections_selected: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                collections: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                dislike: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                disliked: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                dragDots: "var(--ym-icon-padding)",
                donation: "var(--ym-icon-padding, 0px 1px 0px 0px)",
                download: "var(--ym-icon-padding, 2px 4px)",
                downloaded: "var(--ym-icon-padding, 4px)",
                edit: "var(--ym-icon-padding)",
                exclamation: "var(--ym-icon-padding)",
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
                liteVersion: "var(--ym-icon-padding, 4px 5px 4px 4px)",
                listen: "var(--ym-icon-padding, 3px 0 3px 2px)",
                lock: "var(--ym-icon-padding, 2px)",
                lyrics: "var(--ym-icon-padding, 3px 2px)",
                macos: "var(--ym-icon-padding)",
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
                offline: "var(--ym-icon-padding, 2px 7px 5px 7px)",
                pause_filled: "var(--ym-icon-padding)",
                pause: "var(--ym-icon-padding, 4px 6px)",
                pauseVibe: "var(--ym-icon-padding, 2px 4px 4px 8px)",
                pencil: "var(--ym-icon-padding, 4px)",
                picture: "var(--ym-icon-padding)",
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
                upload: "var(--ym-icon-padding, 2px 4px)",
                users: "var(--ym-icon-padding, 0)",
                vibe: "var(--ym-icon-padding)",
                volume: "var(--ym-icon-padding, 4px 2px 3px 2px)",
                volumeOff: "var(--ym-icon-padding, 2.8px 2px 1.8px 2px)",
                windows: "var(--ym-icon-padding)",
                yandexPlusEn: "var(--ym-icon-padding, 0)",
                yandexPlusRu: "var(--ym-icon-padding, 0)",
                yandexPayEn: "var(--ym-icon-padding, 0)",
                yandexPayRu: "var(--ym-icon-padding, 0)",
                yandexBooksEn: "var(--ym-icon-padding, 0)",
                yandexBooksRu: "var(--ym-icon-padding, 0)",
              });
          },
          9430: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Popover = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = r(1964),
              s = r(1173),
              u = r(4395),
              c = r(5853),
              d = r(7601),
              f = n(r(4965));
            t.Popover = (e) => {
              let {
                  children: t,
                  offsetOptions: r,
                  strategy: n,
                  placement: p,
                  isMobile: v,
                  visuallyHiddenDismiss: m,
                  positionElement: x,
                  transform: y,
                  initialOpen: g = !1,
                  open: _,
                  onOpenChange: k,
                  disableFloatingStyles: E = !1,
                  overlayClassName: b,
                  transition: h,
                  style: w,
                  returnFocus: O,
                  isNested: R = !1,
                  onShow: j,
                  customRoleProps: C,
                  portalNode: S,
                  isEnabled: P = !0,
                  arrowProps: T,
                  lockScroll: L = !0,
                } = e,
                [M, A] = (0, l.useState)(g),
                [z, H] = (0, l.useState)(null),
                q = (0, l.useRef)([]),
                N = (0, l.useRef)([]),
                B = (0, l.useRef)(null),
                D = (0, i.useListItem)(),
                U = null != _ ? _ : M,
                I = null != k ? k : A,
                [F, Z] = t,
                V = (0, l.useCallback)(() => {
                  I(!1);
                }, [I]),
                W = (0, l.useId)(),
                Y = (0, l.useId)(),
                {
                  refs: K,
                  floatingStyles: G,
                  context: Q,
                } = (0, i.useFloating)({
                  strategy: n,
                  placement: p,
                  open: U,
                  onOpenChange: I,
                  middleware: [
                    (0, i.offset)(r),
                    (0, i.flip)(),
                    (0, i.shift)(),
                    (0, i.arrow)({ element: B }),
                    (0, i.hide)(),
                  ],
                  whileElementsMounted: i.autoUpdate,
                  transform: y,
                }),
                X = (0, i.useTypeahead)(Q, {
                  listRef: N,
                  onMatch: U ? H : void 0,
                  activeIndex: z,
                }),
                J = (0, i.useListNavigation)(Q, {
                  listRef: q,
                  activeIndex: z,
                  nested: R,
                  onNavigate: H,
                }),
                $ = (0, i.useFloatingTree)(),
                ee = (0, i.useFloatingNodeId)(),
                et = (0, i.useFloatingParentNodeId)();
              (0, l.useEffect)(() => {
                if (!$) return;
                let e = () => {
                    I(!1);
                  },
                  t = (e) => {
                    e.nodeId !== ee && e.parentId === et && I(!1);
                  };
                return (
                  $.events.on("click", e),
                  $.events.on("menuopen", t),
                  () => {
                    $.events.off("click", e), $.events.off("menuopen", t);
                  }
                );
              }, [$, ee, et, I]),
                (0, l.useEffect)(() => {
                  U && (null == j || j());
                }, [j, U]),
                (0, l.useEffect)(() => {
                  U &&
                    $ &&
                    $.events.emit("menuopen", { parentId: et, nodeId: ee });
                }, [$, U, ee, et]),
                (0, l.useLayoutEffect)(() => {
                  x && K.setPositionReference(x);
                }, [K, x]);
              let { handlers: er } = (0, u.usePopoverSwipeable)({
                  ref: K.floating,
                  onClose: V,
                  placement: p,
                  disableSwipe: !v,
                  swipeableProps: { preventScrollOnSwipe: !0 },
                }),
                en = (0, i.useMergeRefs)([
                  K.setFloating,
                  null == er ? void 0 : er.ref,
                ]),
                ea = (0, i.useRole)(Q, C),
                eo = (0, i.useDismiss)(Q, { referencePress: !0 }),
                el = (0, i.useClick)(Q, {
                  enabled: P,
                  toggle: !R,
                  ignoreMouse: R,
                }),
                ei = (0, i.useHover)(Q, {
                  enabled: R && P,
                  handleClose: (0, i.safePolygon)({ blockPointerEvents: !0 }),
                }),
                es = (0, l.useCallback)((e) => {
                  e.stopPropagation();
                }, []),
                {
                  getReferenceProps: eu,
                  getFloatingProps: ec,
                  getItemProps: ed,
                } = (0, i.useInteractions)([ea, eo, el, ei, J, X]),
                { isMounted: ef, styles: ep } = (0, i.useTransitionStyles)(
                  Q,
                  h,
                ),
                ev = (0, i.useMergeRefs)([K.setReference, D.ref]),
                em =
                  F &&
                  (0, l.cloneElement)(F, {
                    ref: ev,
                    ...eu({ onClick: F.props.onClick }),
                    key: W,
                  }),
                ex = (0, l.useMemo)(
                  () =>
                    v
                      ? {
                          ...(E ? {} : G),
                          ...w,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          top: "auto",
                          transform: "none",
                        }
                      : { ...(E ? {} : G), ...w },
                  [v, E, G, w],
                ),
                ey = (0, l.useMemo)(() => {
                  if (null == T ? void 0 : T.isEnabled)
                    return (0, a.jsx)(d.PopoverArrow, {
                      ref: B,
                      context: Q,
                      ...T,
                    });
                }, [T, Q]),
                eg = {
                  ref: en,
                  style: { ...ex, ...ep },
                  ...ec(),
                  onMouseDown: null == er ? void 0 : er.onMouseDown,
                  arrow: ey,
                  children: (0, l.cloneElement)(Z.props.children, {
                    onClose: V,
                    key: Y,
                  }),
                },
                e_ = (0, l.cloneElement)(Z, eg),
                ek = (0, l.useMemo)(
                  () => ({
                    activeIndex: z,
                    setActiveIndex: H,
                    getItemProps: ed,
                    isOpen: U,
                  }),
                  [z, ed, U],
                ),
                eE = R ? -1 : 0;
              return (0, a.jsxs)(c.PopoverContext.Provider, {
                value: ek,
                children: [
                  em,
                  (0, a.jsx)(i.FloatingList, {
                    elementsRef: q,
                    children:
                      ef &&
                      (0, a.jsxs)(i.FloatingPortal, {
                        root: S,
                        children: [
                          (0, a.jsx)(i.FloatingOverlay, {
                            className: (0, o.clsx)(f.default.overlay, b),
                            onClick: es,
                          }),
                          (0, a.jsx)(i.FloatingFocusManager, {
                            context: Q,
                            returnFocus: O,
                            initialFocus: eE,
                            visuallyHiddenDismiss: m,
                            children: (0, a.jsx)(s.RemoveScroll, {
                              enabled: L && U,
                              children: e_,
                            }),
                          }),
                        ],
                      }),
                  }),
                ],
              });
            };
          },
          7601: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverArrow = t.PopoverArrowComponent = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = r(9110),
              s = r(4601),
              u = n(r(4779)),
              c = {
                top: "",
                left: "rotate(-90deg)",
                bottom: "rotate(180deg)",
                right: "rotate(90deg)",
              };
            (t.PopoverArrowComponent = (e) => {
              let {
                  forwardRef: t,
                  className: r,
                  context: n,
                  width: l = 14,
                  height: d = 7,
                  tipRadius: f = 0,
                  customClipPath: p,
                  staticOffset: v,
                  style: { transform: m, ...x } = {},
                  isEnabled: y,
                  ...g
                } = e,
                {
                  placement: _,
                  elements: { floating: k },
                  middlewareData: { arrow: E },
                } = n,
                { state: b, toggleTrue: h } = (0, s.useToggle)(!1);
              if (
                ((0, i.useIsomorphicEffect)(() => {
                  k && "rtl" === getComputedStyle(k).direction && h();
                }, [k, h]),
                !k || !y)
              )
                return null;
              let w = (l / 2) * (-(f / 8) + 1),
                O = ((d / 2) * f) / 4,
                [R, j] = _.split("-"),
                C = v && "end" === j ? "right" : "left";
              v && b && (C = "end" === j ? "left" : "right");
              let S = (null == E ? void 0 : E.x) ? v || E.x : "",
                P = (null == E ? void 0 : E.y) ? v || E.y : "",
                T = c[R],
                L =
                  p ||
                  '"M0,0' +
                    " H".concat(l) +
                    " L".concat(l - w, ",").concat(d - O) +
                    " Q"
                      .concat(l / 2, ",")
                      .concat(d, " ")
                      .concat(w, ",")
                      .concat(d - O) +
                    ' Z"',
                M = {
                  [C]: S,
                  [v && "end" === j ? "bottom" : "top"]: P,
                  [R]: "100%",
                  transform: "".concat(T).concat(null != m ? m : ""),
                  "--arrow-width": "".concat(l, "px"),
                  "--arrow-clip-path": L,
                  ...x,
                };
              return (0, a.jsx)("div", {
                ...g,
                className: (0, o.clsx)(u.default.root, r),
                ref: t,
                style: M,
              });
            }),
              (t.PopoverArrow = (0, l.forwardRef)((e, r) =>
                (0, a.jsx)(t.PopoverArrowComponent, { forwardRef: r, ...e }),
              ));
          },
          1688: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.PopoverContentComponent = void 0);
            let a = r(9541),
              o = r(810),
              l = r(5881),
              i = n(r(5371));
            (t.PopoverContentComponent = (e) => {
              let {
                className: t,
                children: r,
                forwardRef: n,
                arrow: s,
                ...u
              } = e;
              return (0, a.jsxs)("div", {
                className: (0, l.clsx)(i.default.root, t),
                ref: n,
                ...u,
                children: [r, (0, o.isValidElement)(s) && s],
              });
            }),
              (t.PopoverContent = (0, o.forwardRef)((e, r) =>
                (0, a.jsx)(t.PopoverContentComponent, { forwardRef: r, ...e }),
              ));
          },
          5853: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContext = void 0);
            let n = r(810);
            t.PopoverContext = (0, n.createContext)({
              getItemProps: () => ({}),
              activeIndex: null,
              setActiveIndex: () => {},
              isOpen: !1,
            });
          },
          5062: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.Popover = void 0);
            var n = r(9430);
            Object.defineProperty(t, "Popover", {
              enumerable: !0,
              get: function () {
                return n.Popover;
              },
            });
            var a = r(1688);
            Object.defineProperty(t, "PopoverContent", {
              enumerable: !0,
              get: function () {
                return a.PopoverContent;
              },
            });
          },
          7743: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = r(4721),
              s = n(r(390));
            (t.CaptionComponent = (e) => {
              let {
                forwardRef: t,
                variant: r,
                type: n = "text",
                size: l = "s",
                className: u,
                children: c,
                weight: d = "medium",
                ...f
              } = e;
              return (0, a.jsx)(i.Typography, {
                variant: r,
                ref: t,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default["root_".concat(n, "_").concat(l)],
                  s.default["root_weight_".concat(d)],
                  u,
                ),
                ...f,
                children: c,
              });
            }),
              (t.Caption = (0, l.forwardRef)((e, r) =>
                (0, a.jsx)(t.CaptionComponent, { forwardRef: r, ...e }),
              ));
          },
          404: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = r(4721),
              s = n(r(8544));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: r,
                weight: n = "bold",
                size: l = "s",
                className: u,
                children: c,
                ...d
              } = e;
              return (0, a.jsx)(i.Typography, {
                variant: r,
                ref: t,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default["root_size_".concat(l)],
                  s.default["root_weight_".concat(n)],
                  u,
                ),
                ...d,
                children: c,
              });
            }),
              (t.Heading = (0, l.forwardRef)((e, r) =>
                (0, a.jsx)(t.HeadingComponent, { forwardRef: r, ...e }),
              ));
          },
          4721: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let a = r(9541),
              o = r(5881),
              l = r(810),
              i = n(r(2524));
            function s(e) {
              let {
                  forwardRef: t,
                  style: r,
                  className: n,
                  children: l,
                  variant: s,
                  lineClamp: u,
                  ...c
                } = e,
                d = u && "string" == typeof l ? l : void 0;
              return (0, a.jsx)(s, {
                style: { ...r, WebkitLineClamp: u },
                ref: t,
                title: d,
                className: (0, o.clsx)(
                  i.default.root,
                  {
                    [i.default.root_clamp]: u && u > 0,
                    [i.default.root_clamp_oneline]: u && 1 === u,
                    [i.default.root_clamp_multiline]: u && u > 1,
                  },
                  n,
                ),
                ...c,
                children: l,
              });
            }
            (t.TypographyComponent = s),
              (t.Typography = (0, l.forwardRef)((e, t) =>
                (0, a.jsx)(s, { forwardRef: t, ...e }),
              ));
          },
          2582: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.Caption = void 0);
            var n = r(7743);
            Object.defineProperty(t, "Caption", {
              enumerable: !0,
              get: function () {
                return n.Caption;
              },
            });
            var a = r(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return a.Heading;
              },
            });
          },
          1964: (e) => {
            e.exports = M;
          },
          352: (e) => {
            e.exports = A;
          },
          810: (e) => {
            e.exports = u;
          },
        },
        H = {};
      function q(e) {
        var t = H[e];
        if (void 0 !== t) return t.exports;
        var r = (H[e] = { exports: {} });
        return z[e].call(r.exports, r, r.exports, q), r.exports;
      }
      (q.d = (e, t) => {
        for (var r in t)
          q.o(t, r) &&
            !q.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (q.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (q.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (q.nc = void 0);
      var N = {};
      Object.defineProperty(N, "X$", { value: !0 }),
        (N.Wx = N.Lt = void 0),
        (a = q(8324)),
        Object.defineProperty(N, "Lt", {
          enumerable: !0,
          get: function () {
            return a.Dropdown;
          },
        }),
        (o = q(1057)),
        Object.defineProperty(N, "Wx", {
          enumerable: !0,
          get: function () {
            return o.Option;
          },
        });
      var B = N.Lt,
        D = N.Wx;
      N.X$;
      var U = r(82036),
        I = r(12506),
        F = r.n(I);
      let Z = {
          [l.DEFAULT]: (0, k.jsx)(T.Z, { id: "equalizer.default-preset" }),
          [l.CUSTOM]: (0, k.jsx)(T.Z, { id: "equalizer.custom-preset" }),
          [l.CLASSICAL]: (0, k.jsx)(T.Z, { id: "equalizer.classical-preset" }),
          [l.CLUB]: (0, k.jsx)(T.Z, { id: "equalizer.club-preset" }),
          [l.DANCE]: (0, k.jsx)(T.Z, { id: "equalizer.dance-preset" }),
          [l.BASS_BOOST]: (0, k.jsx)(T.Z, {
            id: "equalizer.bass-boost-preset",
          }),
          [l.BASS_AND_TREBLE_BOOST]: (0, k.jsx)(T.Z, {
            id: "equalizer.bass-and-treble-boost-preset",
          }),
          [l.TREBLE_BOOST]: (0, k.jsx)(T.Z, {
            id: "equalizer.treble-boost-preset",
          }),
          [l.SPEAKERS]: (0, k.jsx)(T.Z, { id: "equalizer.speakers-preset" }),
          [l.LARGE_HALL]: (0, k.jsx)(T.Z, {
            id: "equalizer.large-hall-preset",
          }),
          [l.CONCERT]: (0, k.jsx)(T.Z, { id: "equalizer.concert-preset" }),
          [l.PARTY]: (0, k.jsx)(T.Z, { id: "equalizer.party-preset" }),
          [l.POP]: (0, k.jsx)(T.Z, { id: "equalizer.pop-preset" }),
          [l.REGGAE]: (0, k.jsx)(T.Z, { id: "equalizer.reggae-preset" }),
          [l.ROCK]: (0, k.jsx)(T.Z, { id: "equalizer.rock-preset" }),
          [l.SKA]: (0, k.jsx)(T.Z, { id: "equalizer.ska-preset" }),
          [l.SOFT]: (0, k.jsx)(T.Z, { id: "equalizer.soft-preset" }),
          [l.SOFT_ROCK]: (0, k.jsx)(T.Z, { id: "equalizer.soft-rock-preset" }),
          [l.TECHNO]: (0, k.jsx)(T.Z, { id: "equalizer.techno-preset" }),
        },
        V = (0, b.Pi)((e) => {
          let { isDisabled: t } = e,
            r = d(),
            n = (0, s.useCallback)(
              (e) => {
                r.changeCurrentPreset(e.id);
              },
              [r],
            );
          return (0, k.jsx)(B, {
            isDisabled: t,
            className: F().root,
            onSelect: n,
            reference: (0, k.jsxs)(L.z, {
              radius: "xxxl",
              className: (0, E.W)(F().button, { [F().button_disabled]: t }),
              ...(0, O.BA)(O.bG.equalizer.EQUALIZER_PRESETS_BUTTON),
              children: [
                (0, k.jsx)(j.Caption, {
                  className: F().buttonText,
                  variant: "span",
                  size: "s",
                  weight: "medium",
                  children: Z[r.currentPreset.id],
                }),
                (0, k.jsx)(U.Icon, {
                  className: F().buttonIcon,
                  size: "xxs",
                  variant: "arrowDown",
                }),
              ],
            }),
            placement: "top",
            offsetOptions: -40,
            defaultValue: r.currentPreset.id,
            containerClassName: F().container,
            ...(0, O.BA)(O.bG.equalizer.EQUALIZER_PRESETS_DROPDOWN),
            children: Object.values(l).map((e) =>
              (0, k.jsx)(D, { id: e, label: Z[e] }, e),
            ),
          });
        });
      var W = r(66055),
        Y = r(41435),
        Tooltip = r(29778),
        K = r.n(Y);
      let G = (e) => {
          let {
            minValue: t,
            maxValue: r,
            className: n,
            label: a,
            isDisabled: o,
            onChange: l,
            value: i,
            ...s
          } = e;
          return (0, k.jsxs)("div", {
            className: (0, E.W)(K().root, n),
            ...(0, O.BA)(O.bG.equalizer.EQUALIZER_SLIDER_CONTAINER),
            children: [
              (0, k.jsxs)("div", {
                className: K().container,
                children: [
                  (0, k.jsx)("div", { className: K().serif }),
                  (0, k.jsx)(W.i, {
                    disabled: o,
                    className: (0, E.W)(K().slider, K().important),
                    thumbSize: "m",
                    trackSize: "xxs",
                    onChange: l,
                    value: i,
                    showThumbVariant: "always",
                    step: 0.1,
                    min: t,
                    max: r,
                    ...s,
                  }),
                ],
              }),
              (0, k.jsx)(j.Caption, {
                "aria-hidden": !0,
                className: (0, E.W)(K().label, { [K().label_disabled]: o }),
                variant: "div",
                weight: "normal",
                size: "xs",
                children: a,
              }),
            ],
          });
        },
        Q = {
          enter: P().equalizer_enter,
          enterActive: P().equalizer_enter_active,
          exit: P().equalizer_exit,
          exitActive: P().equalizer_exit_active,
        },
        X = (e) => Math.round(10 * e) / 10,
        J = (0, b.Pi)((e) => {
          let { title: t, className: r, isExpanded: n, isDisabled: a } = e,
            o = (0, s.useRef)(null),
            { formatMessage: l } = (0, h.Z)(),
            i = d(),
            u = i.isEnabled
              ? l({ id: "equalizer.disable-equalizer" })
              : l({ id: "equalizer.enable-equalizer" }),
            c = (0, s.useCallback)(
              (e) => {
                i.setEnabled(e);
              },
              [i],
            ),
            f = (0, s.useCallback)(
              (e) => (t) => {
                i.changeAmp(e, t);
              },
              [i],
            ),
            p = (0, s.useCallback)(
              (e) => {
                i.changePreamp(e);
              },
              [i],
            );
          return (0, k.jsxs)("div", {
            className: (0, E.W)(P().root, r),
            ...(0, O.BA)(O.bG.equalizer.EQUALIZER_CONTAINER),
            children: [
              (0, k.jsxs)("div", {
                className: P().header,
                children: [
                  (0, k.jsx)(j.Caption, {
                    className: P().title,
                    variant: "span",
                    size: "l",
                    weight: "medium",
                    ...(0, O.BA)(O.bG.equalizer.EQUALIZER_TITLE),
                    children: t,
                  }),
                  (0, k.jsx)(R.Z, {
                    "aria-label": u,
                    isChecked: i.isEnabled,
                    onChange: c,
                    ...(0, O.BA)(O.bG.equalizer.EQUALIZER_TOGGLE),
                  }),
                ],
              }),
              (0, k.jsx)(w.Z, {
                in: n,
                nodeRef: o,
                timeout: 200,
                unmountOnExit: !0,
                classNames: Q,
                children: (0, k.jsxs)("div", {
                  ref: o,
                  className: (0, E.W)(P().equalizer, {
                    [P().equalizer_disabled]: a,
                  }),
                  ...(0, O.BA)(O.bG.equalizer.EQUALIZER_FREQUENCIES_CONTAINER),
                  children: [
                    (0, k.jsxs)("div", {
                      className: P().container,
                      children: [
                        (0, k.jsxs)("div", {
                          className: P().preamp,
                          children: [
                            (0, k.jsx)(Tooltip.wx, {
                              title: `${i.currentPreset.preamp ?? 0} dB`,
                              children: (0, k.jsxs)("div", {
                                children: (0, k.jsx)(G, {
                                  isDisabled: a,
                                  minValue: 0.5,
                                  maxValue: 1.5,
                                  value: i.currentPreset.preamp,
                                  onChange: p,
                                  label: l({ id: "equalizer.preamp-level" }),
                                  "aria-label": l({
                                    id: "equalizer.slider-preamp-label",
                                  }),
                                  ...(0, O.BA)(
                                    O.bG.equalizer.EQUALIZER_PREAMP_SLIDER,
                                  ),
                                }),
                              }),
                            }),
                            (0, k.jsxs)("div", {
                              className: P().labels,
                              "aria-hidden": !0,
                              children: [
                                (0, k.jsx)(j.Caption, {
                                  className: P().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: l(
                                    { id: "equalizer.amp-label" },
                                    { value: 12 },
                                  ),
                                }),
                                (0, k.jsx)(j.Caption, {
                                  className: P().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: l(
                                    { id: "equalizer.amp-label" },
                                    { value: 0 },
                                  ),
                                }),
                                (0, k.jsx)(j.Caption, {
                                  className: P().label,
                                  variant: "div",
                                  weight: "normal",
                                  size: "xs",
                                  children: l(
                                    { id: "equalizer.amp-label" },
                                    { value: -12 },
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsx)("div", {
                          className: P().frequencies,
                          children: i.currentPreset.frequencies.map((e) => {
                            let t = C(e.key, l),
                              r = X(e.value);
                            return (0, k.jsx)(Tooltip.wx, {
                              title: `${r ?? 0} dB`,
                              children: (0, k.jsxs)("div", {
                                children: (0, k.jsx)(
                                  G,
                                  {
                                    isDisabled: a,
                                    minValue: -12,
                                    maxValue: 12,
                                    value: e.value,
                                    label: t,
                                    onChange: f(e.key),
                                    "aria-label": l(
                                      {
                                        id: "equalizer.slider-frequency-label",
                                      },
                                      { label: t, value: r },
                                    ),
                                    ...(0, O.BA)(
                                      O.bG.equalizer.EQUALIZER_FREQUENCY_SLIDER,
                                    ),
                                  },
                                  t,
                                ),
                              }),
                            });
                          }),
                        }),
                      ],
                    }),
                    (0, k.jsx)(V, { isDisabled: a }),
                  ],
                }),
              }),
            ],
          });
        });
      var $ = r(14386);
      let ee = (0, b.Pi)(() => {
        let { formatMessage: e } = (0, h.Z)(),
          t = d();
        return (0, k.jsx)($.u, {
          className: P().modal,
          headerClassName: P().modalHeader,
          contentClassName: P().modalContent,
          title: e({ id: "equalizer.title" }),
          open: t.modal.isOpened,
          onOpenChange: t.modal.onOpenChange,
          onClose: t.modal.close,
          size: "fitContent",
          placement: "center",
          overlayColor: "full",
          labelClose: e({ id: "interface-actions.close" }),
          closeButtonProps: (0, O.BA)(
            O.bG.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON,
          ),
          ...(0, O.BA)(O.bG.equalizer.EQUALIZER_MODAL),
          children: (0, k.jsx)(J, {
            title: e({ id: "equalizer.enable" }),
            isExpanded: !0,
            isDisabled: !t.isEnabled,
          }),
        });
      });
    },
    60033: function (e) {
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
    12506: function (e) {
      e.exports = {
        root: "EqualizerPresets_root__b2gp7",
        buttonIcon: "EqualizerPresets_buttonIcon__DgPG8",
        buttonText: "EqualizerPresets_buttonText__cy2_S",
        button: "EqualizerPresets_button__D8s_l",
        button_disabled: "EqualizerPresets_button_disabled__BcN1s",
        container: "EqualizerPresets_container__ABVY8",
      };
    },
    41435: function (e) {
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
