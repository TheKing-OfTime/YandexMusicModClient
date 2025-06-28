(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8737],
  {
    78129: function (e, t, s) {
      "use strict";
      s.d(t, {
        tB: function () {
          return k;
        },
        T_: function () {
          return _;
        },
        Iw: function () {
          return F;
        },
      });
      var r,
        a,
        n,
        i = s(22874),
        l = s(40892);
      let o = i.V5.model({
          uid: i.V5.maybe(i.V5.number),
          hasPlus: i.V5.maybe(i.V5.boolean),
          login: i.V5.maybe(i.V5.string),
          avatarId: i.V5.maybe(i.V5.string),
          isChild: i.V5.maybe(i.V5.boolean),
          publicId: i.V5.maybe(i.V5.string),
          publicName: i.V5.maybe(i.V5.string),
          userSessionRegionIso: i.V5.maybe(i.V5.string),
          geoRegionIso: i.V5.maybe(i.V5.string),
        }),
        c = i.V5.compose(i.V5.model("Account", { data: o }), l.fu);
      var x = s(13534);
      let d = (e) =>
          (0, i.pj)({
            uid: e.uid,
            login: e.login,
            avatarId: e.avatarId,
            hasPlus: e.hasPlus,
            publicId: e.publicId,
            publicName: e.publicName,
            isChild: e.isChild,
            userSessionRegionIso: e.userSessionRegionIso,
            geoRegionIso: e.geoRegionIso,
          }),
        u = (e) =>
          (0, i.pj)({
            loadingState: x.Gui.RESOLVE,
            showWizard: !e.wizardIsPassed,
            userCollectionHue: e.userCollectionHue,
            isChildModeEnabled: !!e.childModEnabled,
          }),
        f = i.V5.compose(
          i.V5.model("Settings", {
            showWizard: i.V5.optional(i.V5.boolean, !0),
            userCollectionHue: i.V5.maybe(i.V5.number),
            isChildModeEnabled: i.V5.optional(i.V5.boolean, !1),
          }),
          l.fu,
        ),
        _ = i.V5.model("User", {
          account: c,
          settings: f,
          userCollectionHue: i.V5.maybe(i.V5.number),
        })
          .views((e) => ({
            get isAuthorized() {
              return !!e.account.data.uid;
            },
            get hasPlus() {
              return !!e.account.data.hasPlus;
            },
            get isChild() {
              return !!e.account.data.isChild;
            },
            get puid() {
              return e.account.data.uid;
            },
            get collectionHue() {
              return e.userCollectionHue || e.settings.userCollectionHue;
            },
          }))
          .actions((e) => ({
            getAbout: (0, i.ls)(function* (t) {
              let {
                accountResource: s,
                modelActionsLogger: r,
                containerStorage: a,
              } = (0, i.dU)(e);
              if (!e.account.isLoading)
                try {
                  e.account.loadingState = x.Gui.PENDING;
                  let r = t;
                  r || (r = yield s.about()),
                    a.set(x.BUb.YmUid, r.uid),
                    (e.account.data = d(r)),
                    (e.account.loadingState = x.Gui.RESOLVE);
                } catch (t) {
                  r.error(t), (e.account.loadingState = x.Gui.REJECT);
                }
            }),
            getSettings: (0, i.ls)(function* () {
              let { accountResource: t, modelActionsLogger: s } = (0, i.dU)(e);
              if (e.settings.loadingState !== x.Gui.PENDING)
                try {
                  e.settings.loadingState = x.Gui.PENDING;
                  let s = yield t.settings();
                  e.settings = u(s);
                } catch (t) {
                  s.error(t),
                    (e.settings.showWizard = !1),
                    (e.settings.loadingState = x.Gui.REJECT);
                }
            }),
            setSettings: (0, i.ls)(function* (t) {
              let { isChildModeEnabled: s } = t,
                { accountResource: r, modelActionsLogger: a } = (0, i.dU)(e);
              try {
                e.settings.isChildModeEnabled = s;
                let t = yield r.settings({ childModEnabled: s });
                if (((e.settings = u(t)), t.childModEnabled !== s))
                  return x.SLo.ERROR;
                return x.SLo.OK;
              } catch (e) {
                return a.error(e), x.SLo.ERROR;
              }
            }),
            setUnauthorized: () => {
              e.account.loadingState = x.Gui.RESOLVE;
            },
            setUserCollectionHue: (t) => {
              e.userCollectionHue = t;
            },
          }));
      var m = s(75441),
        p = s(32358),
        g = s(39054),
        v = s(97812),
        y = s.n(v);
      let k = (e) => {
        let {
          className: t,
          hasPlus: s,
          avatarSrc: r = "/_next/static/media/avatar.e9a40453.png",
          ...a
        } = e;
        return (0, m.jsx)("div", {
          className: (0, p.W)(y().root, { [y().root_withPlus]: s }, t),
          ...a,
          children: (0, m.jsx)(g.Image, {
            src: r,
            fit: "cover",
            className: y().avatar,
          }),
        });
      };
      var b = s(80384),
        E = s(62569),
        w = s(65067),
        j = s.t(w, 2),
        h = s(15937),
        R = s(63660),
        O = s(93093),
        S = {
          5881: (e, t, s) => {
            function r() {
              for (var e, t, s = 0, r = ""; s < arguments.length; )
                (e = arguments[s++]) &&
                  (t = (function e(t) {
                    var s,
                      r,
                      a = "";
                    if ("string" == typeof t || "number" == typeof t) a += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (s = 0; s < t.length; s++)
                          t[s] && (r = e(t[s])) && (a && (a += " "), (a += r));
                      else for (s in t) t[s] && (a && (a += " "), (a += s));
                    }
                    return a;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            s.r(t), s.d(t, { clsx: () => r, default: () => a });
            let a = r;
          },
          2964: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
            let r = {
              root_size_xxxs: "Rkdd2vKC_3xa1eUdRdHP",
              root_size_xxs: "l3tE1hAMmBj2aoPPwU08",
              root_size_xs: "UwnL5AJBMMAp6NwMDdZk",
              root_size_s: "DzJFnuf7XgdkFh28JAsM",
              root_size_m: "o_v2ds2BaqtzAsRuCVjw",
              root_size_l: "YjRa1ZjM_lXFlrfS7jcu",
              root_size_xl: "Seq0GowcqQmiA9LdLP_g",
              root_size_xxl: "mfy69_BvBIamD0e22rCQ",
              root_size_xxxl: "JY1OniQewgW9iHgfllZS",
            };
          },
          1684: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
            let r = {
              root: "mdbxU6IWInQTsVjwnapn",
              text: "Cl_DNqTqaeGRXa9FZpOO",
              icon: "WMUZ6rmDKcZuPFMkQwf6",
            };
          },
          3641: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
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
          5153: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
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
          5818: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
            let r = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6161: (e, t, s) => {
            var r = s(810),
              a = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              i = Object.prototype.hasOwnProperty,
              l =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              o = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, s) {
              var r,
                n = {},
                c = null,
                x = null;
              for (r in (void 0 !== s && (c = "" + s),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (x = t.ref),
              t))
                i.call(t, r) && !o.hasOwnProperty(r) && (n[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === n[r] && (n[r] = t[r]);
              return {
                $$typeof: a,
                type: e,
                key: c,
                ref: x,
                props: n,
                _owner: l.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, s) => {
            e.exports = s(6161);
          },
          8442: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "addToPlaylist_xxs",
                  xlinkHref: "/icons/sprite.svg#addToPlaylist_xxs",
                }),
              ]);
            });
          },
          6644: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "add_l",
                  xlinkHref: "/icons/sprite.svg#add_l",
                }),
              ]);
            });
          },
          7319: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "add_xxs",
                  xlinkHref: "/icons/sprite.svg#add_xxs",
                }),
              ]);
            });
          },
          9351: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "adult_s",
                  xlinkHref: "/icons/sprite.svg#adult_s",
                }),
              ]);
            });
          },
          7171: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "adult_xs",
                  xlinkHref: "/icons/sprite.svg#adult_xs",
                }),
              ]);
            });
          },
          2586: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "adult_xxs",
                  xlinkHref: "/icons/sprite.svg#adult_xxs",
                }),
              ]);
            });
          },
          4656: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "adult_xxxs",
                  xlinkHref: "/icons/sprite.svg#adult_xxxs",
                }),
              ]);
            });
          },
          996: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "album_l",
                  xlinkHref: "/icons/sprite.svg#album_l",
                }),
              ]);
            });
          },
          2092: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "album_s",
                  xlinkHref: "/icons/sprite.svg#album_s",
                }),
              ]);
            });
          },
          6304: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "album_xl",
                  xlinkHref: "/icons/sprite.svg#album_xl",
                }),
              ]);
            });
          },
          9030: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "album_xs",
                  xlinkHref: "/icons/sprite.svg#album_xs",
                }),
              ]);
            });
          },
          5822: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "album_xxs",
                  xlinkHref: "/icons/sprite.svg#album_xxs",
                }),
              ]);
            });
          },
          9422: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowDown_xs",
                  xlinkHref: "/icons/sprite.svg#arrowDown_xs",
                }),
              ]);
            });
          },
          5272: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowDown_xxs",
                  xlinkHref: "/icons/sprite.svg#arrowDown_xxs",
                }),
              ]);
            });
          },
          1491: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowLeft_xs",
                  xlinkHref: "/icons/sprite.svg#arrowLeft_xs",
                }),
              ]);
            });
          },
          4860: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowLeft_xxs",
                  xlinkHref: "/icons/sprite.svg#arrowLeft_xxs",
                }),
              ]);
            });
          },
          2337: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowRight_xs",
                  xlinkHref: "/icons/sprite.svg#arrowRight_xs",
                }),
              ]);
            });
          },
          8711: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowRight_xxs",
                  xlinkHref: "/icons/sprite.svg#arrowRight_xxs",
                }),
              ]);
            });
          },
          8170: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "arrowRight_xxxs",
                  xlinkHref: "/icons/sprite.svg#arrowRight_xxxs",
                }),
              ]);
            });
          },
          8109: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "artist_xxs",
                  xlinkHref: "/icons/sprite.svg#artist_xxs",
                }),
              ]);
            });
          },
          7341: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "attention_xxl",
                  xlinkHref: "/icons/sprite.svg#attention_xxl",
                }),
              ]);
            });
          },
          2435: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "attention_xxxl",
                  xlinkHref: "/icons/sprite.svg#attention_xxxl",
                }),
              ]);
            });
          },
          3918: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "bandlink",
                  xlinkHref: "/icons/sprite.svg#bandlink",
                }),
              ]);
            });
          },
          2571: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "booksLogo",
                  xlinkHref: "/icons/sprite.svg#booksLogo",
                }),
              ]);
            });
          },
          4904: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "bucket_xxs",
                  xlinkHref: "/icons/sprite.svg#bucket_xxs",
                }),
              ]);
            });
          },
          9202: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "cast_xs",
                  xlinkHref: "/icons/sprite.svg#cast_xs",
                }),
              ]);
            });
          },
          130: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chain_xs",
                  xlinkHref: "/icons/sprite.svg#chain_xs",
                }),
              ]);
            });
          },
          5971: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chain_xxs",
                  xlinkHref: "/icons/sprite.svg#chain_xxs",
                }),
              ]);
            });
          },
          3331: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartDown_xxs",
                  xlinkHref: "/icons/sprite.svg#chartDown_xxs",
                }),
              ]);
            });
          },
          9783: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartNew_xxs",
                  xlinkHref: "/icons/sprite.svg#chartNew_xxs",
                }),
              ]);
            });
          },
          8184: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartSame_xxs",
                  xlinkHref: "/icons/sprite.svg#chartSame_xxs",
                }),
              ]);
            });
          },
          4926: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "chartUp_xxs",
                  xlinkHref: "/icons/sprite.svg#chartUp_xxs",
                }),
              ]);
            });
          },
          9505: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "check_xxl",
                  xlinkHref: "/icons/sprite.svg#check_xxl",
                }),
              ]);
            });
          },
          3176: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "check_xxs",
                  xlinkHref: "/icons/sprite.svg#check_xxs",
                }),
              ]);
            });
          },
          5565: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "check_xxxs",
                  xlinkHref: "/icons/sprite.svg#check_xxxs",
                }),
              ]);
            });
          },
          9040: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "clip_xl",
                  xlinkHref: "/icons/sprite.svg#clip_xl",
                }),
              ]);
            });
          },
          4789: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "clip_xxs",
                  xlinkHref: "/icons/sprite.svg#clip_xxs",
                }),
              ]);
            });
          },
          7923: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "close_xs",
                  xlinkHref: "/icons/sprite.svg#close_xs",
                }),
              ]);
            });
          },
          8151: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "close_xxs",
                  xlinkHref: "/icons/sprite.svg#close_xxs",
                }),
              ]);
            });
          },
          8127: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "close_xxxs",
                  xlinkHref: "/icons/sprite.svg#close_xxxs",
                }),
              ]);
            });
          },
          8690: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "code_xxs",
                  xlinkHref: "/icons/sprite.svg#code_xxs",
                }),
              ]);
            });
          },
          3076: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "collections_m",
                  xlinkHref: "/icons/sprite.svg#collections_m",
                }),
              ]);
            });
          },
          2495: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "collections_selected_m",
                  xlinkHref: "/icons/sprite.svg#collections_selected_m",
                }),
              ]);
            });
          },
          1524: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "crown_xxs",
                  xlinkHref: "/icons/sprite.svg#crown_xxs",
                }),
              ]);
            });
          },
          1162: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "dislike_s",
                  xlinkHref: "/icons/sprite.svg#dislike_s",
                }),
              ]);
            });
          },
          3654: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "dislike_xs",
                  xlinkHref: "/icons/sprite.svg#dislike_xs",
                }),
              ]);
            });
          },
          2361: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "dislike_xxs",
                  xlinkHref: "/icons/sprite.svg#dislike_xxs",
                }),
              ]);
            });
          },
          6837: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "disliked_s",
                  xlinkHref: "/icons/sprite.svg#disliked_s",
                }),
              ]);
            });
          },
          6507: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "disliked_xs",
                  xlinkHref: "/icons/sprite.svg#disliked_xs",
                }),
              ]);
            });
          },
          3972: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "disliked_xxs",
                  xlinkHref: "/icons/sprite.svg#disliked_xxs",
                }),
              ]);
            });
          },
          8993: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "donation_xxxs",
                  xlinkHref: "/icons/sprite.svg#donation_xxxs",
                }),
              ]);
            });
          },
          7031: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "download_l",
                  xlinkHref: "/icons/sprite.svg#download_l",
                }),
              ]);
            });
          },
          9330: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "download_xxs",
                  xlinkHref: "/icons/sprite.svg#download_xxs",
                }),
              ]);
            });
          },
          7346: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "downloaded_xxs",
                  xlinkHref: "/icons/sprite.svg#downloaded_xxs",
                }),
              ]);
            });
          },
          2604: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "dragDots_xxs",
                  xlinkHref: "/icons/sprite.svg#dragDots_xxs",
                }),
              ]);
            });
          },
          6894: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "edit_xxs",
                  xlinkHref: "/icons/sprite.svg#edit_xxs",
                }),
              ]);
            });
          },
          2024: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "exclamation_s",
                  xlinkHref: "/icons/sprite.svg#exclamation_s",
                }),
              ]);
            });
          },
          3193: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "exclamation_xs",
                  xlinkHref: "/icons/sprite.svg#exclamation_xs",
                }),
              ]);
            });
          },
          6391: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "exclamation_xxs",
                  xlinkHref: "/icons/sprite.svg#exclamation_xxs",
                }),
              ]);
            });
          },
          2933: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "exclamation_xxxs",
                  xlinkHref: "/icons/sprite.svg#exclamation_xxxs",
                }),
              ]);
            });
          },
          776: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "explicit_s",
                  xlinkHref: "/icons/sprite.svg#explicit_s",
                }),
              ]);
            });
          },
          30: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "explicit_xs",
                  xlinkHref: "/icons/sprite.svg#explicit_xs",
                }),
              ]);
            });
          },
          9369: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "explicit_xxs",
                  xlinkHref: "/icons/sprite.svg#explicit_xxs",
                }),
              ]);
            });
          },
          1334: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "explicit_xxxs",
                  xlinkHref: "/icons/sprite.svg#explicit_xxxs",
                }),
              ]);
            });
          },
          226: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "eye_crossed_xxs",
                  xlinkHref: "/icons/sprite.svg#eye_crossed_xxs",
                }),
              ]);
            });
          },
          7802: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "filter_xs",
                  xlinkHref: "/icons/sprite.svg#filter_xs",
                }),
              ]);
            });
          },
          8130: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "filter_xxs",
                  xlinkHref: "/icons/sprite.svg#filter_xxs",
                }),
              ]);
            });
          },
          3738: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "fullscreen_xs",
                  xlinkHref: "/icons/sprite.svg#fullscreen_xs",
                }),
              ]);
            });
          },
          2161: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "googlePlay",
                  xlinkHref: "/icons/sprite.svg#googlePlay",
                }),
              ]);
            });
          },
          9509: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "history_m",
                  xlinkHref: "/icons/sprite.svg#history_m",
                }),
              ]);
            });
          },
          8987: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "home_m",
                  xlinkHref: "/icons/sprite.svg#home_m",
                }),
              ]);
            });
          },
          190: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "home_selected_m",
                  xlinkHref: "/icons/sprite.svg#home_selected_m",
                }),
              ]);
            });
          },
          5304: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "huaweiAppGallery",
                  xlinkHref: "/icons/sprite.svg#huaweiAppGallery",
                }),
              ]);
            });
          },
          5270: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "info_xxs",
                  xlinkHref: "/icons/sprite.svg#info_xxs",
                }),
              ]);
            });
          },
          843: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "kids_m",
                  xlinkHref: "/icons/sprite.svg#kids_m",
                }),
              ]);
            });
          },
          5122: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "kids_selected_m",
                  xlinkHref: "/icons/sprite.svg#kids_selected_m",
                }),
              ]);
            });
          },
          2646: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "kinopoiskEn",
                  xlinkHref: "/icons/sprite.svg#kinopoiskEn",
                }),
              ]);
            });
          },
          7500: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "kinopoiskRu",
                  xlinkHref: "/icons/sprite.svg#kinopoiskRu",
                }),
              ]);
            });
          },
          3560: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "lightning_xxs",
                  xlinkHref: "/icons/sprite.svg#lightning_xxs",
                }),
              ]);
            });
          },
          9838: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "likeVariant_xxs",
                  xlinkHref: "/icons/sprite.svg#likeVariant_xxs",
                }),
              ]);
            });
          },
          4793: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "like_l",
                  xlinkHref: "/icons/sprite.svg#like_l",
                }),
              ]);
            });
          },
          7405: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "like_m",
                  xlinkHref: "/icons/sprite.svg#like_m",
                }),
              ]);
            });
          },
          2340: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "like_xs",
                  xlinkHref: "/icons/sprite.svg#like_xs",
                }),
              ]);
            });
          },
          7513: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "like_xxs",
                  xlinkHref: "/icons/sprite.svg#like_xxs",
                }),
              ]);
            });
          },
          5720: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "likedVariant_s",
                  xlinkHref: "/icons/sprite.svg#likedVariant_s",
                }),
              ]);
            });
          },
          7399: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "likedVariant_xxs",
                  xlinkHref: "/icons/sprite.svg#likedVariant_xxs",
                }),
              ]);
            });
          },
          820: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "liked_m",
                  xlinkHref: "/icons/sprite.svg#liked_m",
                }),
              ]);
            });
          },
          2125: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "liked_xs",
                  xlinkHref: "/icons/sprite.svg#liked_xs",
                }),
              ]);
            });
          },
          9104: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "liked_xxs",
                  xlinkHref: "/icons/sprite.svg#liked_xxs",
                }),
              ]);
            });
          },
          5849: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "link_xxs",
                  xlinkHref: "/icons/sprite.svg#link_xxs",
                }),
              ]);
            });
          },
          1426: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "listen_xxxs",
                  xlinkHref: "/icons/sprite.svg#listen_xxxs",
                }),
              ]);
            });
          },
          4014: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "liteVersion_xs",
                  xlinkHref: "/icons/sprite.svg#liteVersion_xs",
                }),
              ]);
            });
          },
          5443: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "lock_m",
                  xlinkHref: "/icons/sprite.svg#lock_m",
                }),
              ]);
            });
          },
          896: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "lock_xs",
                  xlinkHref: "/icons/sprite.svg#lock_xs",
                }),
              ]);
            });
          },
          3613: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "lock_xxs",
                  xlinkHref: "/icons/sprite.svg#lock_xxs",
                }),
              ]);
            });
          },
          9372: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "lyrics_xxs",
                  xlinkHref: "/icons/sprite.svg#lyrics_xxs",
                }),
              ]);
            });
          },
          6104: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "macos",
                  xlinkHref: "/icons/sprite.svg#macos",
                }),
              ]);
            });
          },
          3709: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "macos_xxs",
                  xlinkHref: "/icons/sprite.svg#macos_xxs",
                }),
              ]);
            });
          },
          3685: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "menuArrow_xxs",
                  xlinkHref: "/icons/sprite.svg#menuArrow_xxs",
                }),
              ]);
            });
          },
          8782: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "more_m",
                  xlinkHref: "/icons/sprite.svg#more_m",
                }),
              ]);
            });
          },
          1829: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "more_xs",
                  xlinkHref: "/icons/sprite.svg#more_xs",
                }),
              ]);
            });
          },
          3302: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "more_xxs",
                  xlinkHref: "/icons/sprite.svg#more_xxs",
                }),
              ]);
            });
          },
          2502: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogo",
                  xlinkHref: "/icons/sprite.svg#musicLogo",
                }),
              ]);
            });
          },
          1754: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoCenterEn",
                  xlinkHref: "/icons/sprite.svg#musicLogoCenterEn",
                }),
              ]);
            });
          },
          6615: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoCenterRu",
                  xlinkHref: "/icons/sprite.svg#musicLogoCenterRu",
                }),
              ]);
            });
          },
          7942: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoLeftEn",
                  xlinkHref: "/icons/sprite.svg#musicLogoLeftEn",
                }),
              ]);
            });
          },
          1498: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "musicLogoLeftRu",
                  xlinkHref: "/icons/sprite.svg#musicLogoLeftRu",
                }),
              ]);
            });
          },
          1084: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "next_xs",
                  xlinkHref: "/icons/sprite.svg#next_xs",
                }),
              ]);
            });
          },
          4483: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "next_xxl",
                  xlinkHref: "/icons/sprite.svg#next_xxl",
                }),
              ]);
            });
          },
          811: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "next_xxs",
                  xlinkHref: "/icons/sprite.svg#next_xxs",
                }),
              ]);
            });
          },
          7252: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "non_music_m",
                  xlinkHref: "/icons/sprite.svg#non_music_m",
                }),
              ]);
            });
          },
          3013: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "non_music_selected_m",
                  xlinkHref: "/icons/sprite.svg#non_music_selected_m",
                }),
              ]);
            });
          },
          2774: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "note_s",
                  xlinkHref: "/icons/sprite.svg#note_s",
                }),
              ]);
            });
          },
          4298: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "note_xl",
                  xlinkHref: "/icons/sprite.svg#note_xl",
                }),
              ]);
            });
          },
          4254: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "note_xs",
                  xlinkHref: "/icons/sprite.svg#note_xs",
                }),
              ]);
            });
          },
          8499: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "offline_xxl",
                  xlinkHref: "/icons/sprite.svg#offline_xxl",
                }),
              ]);
            });
          },
          4997: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pauseVibe_s",
                  xlinkHref: "/icons/sprite.svg#pauseVibe_s",
                }),
              ]);
            });
          },
          7076: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_filled_l",
                  xlinkHref: "/icons/sprite.svg#pause_filled_l",
                }),
              ]);
            });
          },
          3792: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_filled_m",
                  xlinkHref: "/icons/sprite.svg#pause_filled_m",
                }),
              ]);
            });
          },
          5132: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_filled_xl",
                  xlinkHref: "/icons/sprite.svg#pause_filled_xl",
                }),
              ]);
            });
          },
          8131: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_filled_xs",
                  xlinkHref: "/icons/sprite.svg#pause_filled_xs",
                }),
              ]);
            });
          },
          6544: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_filled_xxl",
                  xlinkHref: "/icons/sprite.svg#pause_filled_xxl",
                }),
              ]);
            });
          },
          5346: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_m",
                  xlinkHref: "/icons/sprite.svg#pause_m",
                }),
              ]);
            });
          },
          792: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_xs",
                  xlinkHref: "/icons/sprite.svg#pause_xs",
                }),
              ]);
            });
          },
          6122: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pause_xxs",
                  xlinkHref: "/icons/sprite.svg#pause_xxs",
                }),
              ]);
            });
          },
          5386: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pencil_xxs",
                  xlinkHref: "/icons/sprite.svg#pencil_xxs",
                }),
              ]);
            });
          },
          3146: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "picture_s",
                  xlinkHref: "/icons/sprite.svg#picture_s",
                }),
              ]);
            });
          },
          8868: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "picture_xl",
                  xlinkHref: "/icons/sprite.svg#picture_xl",
                }),
              ]);
            });
          },
          1125: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "picture_xs",
                  xlinkHref: "/icons/sprite.svg#picture_xs",
                }),
              ]);
            });
          },
          976: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pin_filled_xs",
                  xlinkHref: "/icons/sprite.svg#pin_filled_xs",
                }),
              ]);
            });
          },
          9434: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pin_filled_xxs",
                  xlinkHref: "/icons/sprite.svg#pin_filled_xxs",
                }),
              ]);
            });
          },
          9288: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pin_xs",
                  xlinkHref: "/icons/sprite.svg#pin_xs",
                }),
              ]);
            });
          },
          3201: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "pin_xxs",
                  xlinkHref: "/icons/sprite.svg#pin_xxs",
                }),
              ]);
            });
          },
          8112: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playLast_xxs",
                  xlinkHref: "/icons/sprite.svg#playLast_xxs",
                }),
              ]);
            });
          },
          8044: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playNext_xxs",
                  xlinkHref: "/icons/sprite.svg#playNext_xxs",
                }),
              ]);
            });
          },
          8303: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playQueue_m",
                  xlinkHref: "/icons/sprite.svg#playQueue_m",
                }),
              ]);
            });
          },
          9863: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playQueue_xs",
                  xlinkHref: "/icons/sprite.svg#playQueue_xs",
                }),
              ]);
            });
          },
          2084: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playVibe_s",
                  xlinkHref: "/icons/sprite.svg#playVibe_s",
                }),
              ]);
            });
          },
          8582: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_filled_l",
                  xlinkHref: "/icons/sprite.svg#play_filled_l",
                }),
              ]);
            });
          },
          4777: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_filled_m",
                  xlinkHref: "/icons/sprite.svg#play_filled_m",
                }),
              ]);
            });
          },
          8779: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_filled_xl",
                  xlinkHref: "/icons/sprite.svg#play_filled_xl",
                }),
              ]);
            });
          },
          1945: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_filled_xs",
                  xlinkHref: "/icons/sprite.svg#play_filled_xs",
                }),
              ]);
            });
          },
          7402: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_filled_xxl",
                  xlinkHref: "/icons/sprite.svg#play_filled_xxl",
                }),
              ]);
            });
          },
          1351: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_m",
                  xlinkHref: "/icons/sprite.svg#play_m",
                }),
              ]);
            });
          },
          1874: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_xs",
                  xlinkHref: "/icons/sprite.svg#play_xs",
                }),
              ]);
            });
          },
          2026: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_xxs",
                  xlinkHref: "/icons/sprite.svg#play_xxs",
                }),
              ]);
            });
          },
          5378: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "play_xxxs",
                  xlinkHref: "/icons/sprite.svg#play_xxxs",
                }),
              ]);
            });
          },
          3751: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playlist_s",
                  xlinkHref: "/icons/sprite.svg#playlist_s",
                }),
              ]);
            });
          },
          8503: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playlist_xl",
                  xlinkHref: "/icons/sprite.svg#playlist_xl",
                }),
              ]);
            });
          },
          1580: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "playlist_xs",
                  xlinkHref: "/icons/sprite.svg#playlist_xs",
                }),
              ]);
            });
          },
          8861: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "plus",
                  xlinkHref: "/icons/sprite.svg#plus",
                }),
              ]);
            });
          },
          6809: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "plusBadge",
                  xlinkHref: "/icons/sprite.svg#plusBadge",
                }),
              ]);
            });
          },
          5266: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "plusColor",
                  xlinkHref: "/icons/sprite.svg#plusColor",
                }),
              ]);
            });
          },
          1179: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "plusOutlined",
                  xlinkHref: "/icons/sprite.svg#plusOutlined",
                }),
              ]);
            });
          },
          2754: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "podcasts_xxs",
                  xlinkHref: "/icons/sprite.svg#podcasts_xxs",
                }),
              ]);
            });
          },
          4091: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "previous_xs",
                  xlinkHref: "/icons/sprite.svg#previous_xs",
                }),
              ]);
            });
          },
          1427: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "previous_xxl",
                  xlinkHref: "/icons/sprite.svg#previous_xxl",
                }),
              ]);
            });
          },
          5251: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "previous_xxs",
                  xlinkHref: "/icons/sprite.svg#previous_xxs",
                }),
              ]);
            });
          },
          895: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "repeat_one_xs",
                  xlinkHref: "/icons/sprite.svg#repeat_one_xs",
                }),
              ]);
            });
          },
          5632: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "repeat_one_xxs",
                  xlinkHref: "/icons/sprite.svg#repeat_one_xxs",
                }),
              ]);
            });
          },
          8090: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "repeat_xs",
                  xlinkHref: "/icons/sprite.svg#repeat_xs",
                }),
              ]);
            });
          },
          9370: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "repeat_xxs",
                  xlinkHref: "/icons/sprite.svg#repeat_xxs",
                }),
              ]);
            });
          },
          1001: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "reset_xxs",
                  xlinkHref: "/icons/sprite.svg#reset_xxs",
                }),
              ]);
            });
          },
          6579: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "reset_xxxs",
                  xlinkHref: "/icons/sprite.svg#reset_xxxs",
                }),
              ]);
            });
          },
          5910: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "rewindBackwards_xs",
                  xlinkHref: "/icons/sprite.svg#rewindBackwards_xs",
                }),
              ]);
            });
          },
          893: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "rewindBackwards_xxs",
                  xlinkHref: "/icons/sprite.svg#rewindBackwards_xxs",
                }),
              ]);
            });
          },
          4892: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "rewindForward_xs",
                  xlinkHref: "/icons/sprite.svg#rewindForward_xs",
                }),
              ]);
            });
          },
          6331: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "rewindForward_xxs",
                  xlinkHref: "/icons/sprite.svg#rewindForward_xxs",
                }),
              ]);
            });
          },
          9876: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "ruble_xxs",
                  xlinkHref: "/icons/sprite.svg#ruble_xxs",
                }),
              ]);
            });
          },
          3935: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "ruble_xxxs",
                  xlinkHref: "/icons/sprite.svg#ruble_xxxs",
                }),
              ]);
            });
          },
          7643: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "search_l",
                  xlinkHref: "/icons/sprite.svg#search_l",
                }),
              ]);
            });
          },
          8235: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "search_m",
                  xlinkHref: "/icons/sprite.svg#search_m",
                }),
              ]);
            });
          },
          8915: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "search_selected_m",
                  xlinkHref: "/icons/sprite.svg#search_selected_m",
                }),
              ]);
            });
          },
          3366: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "search_xs",
                  xlinkHref: "/icons/sprite.svg#search_xs",
                }),
              ]);
            });
          },
          7934: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "search_xxl",
                  xlinkHref: "/icons/sprite.svg#search_xxl",
                }),
              ]);
            });
          },
          5034: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "settings_xs",
                  xlinkHref: "/icons/sprite.svg#settings_xs",
                }),
              ]);
            });
          },
          1758: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "settings_xxs",
                  xlinkHref: "/icons/sprite.svg#settings_xxs",
                }),
              ]);
            });
          },
          7196: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "share_xxs",
                  xlinkHref: "/icons/sprite.svg#share_xxs",
                }),
              ]);
            });
          },
          5792: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "shuffle_xs",
                  xlinkHref: "/icons/sprite.svg#shuffle_xs",
                }),
              ]);
            });
          },
          7951: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "shuffle_xxs",
                  xlinkHref: "/icons/sprite.svg#shuffle_xxs",
                }),
              ]);
            });
          },
          9545: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "site_xs",
                  xlinkHref: "/icons/sprite.svg#site_xs",
                }),
              ]);
            });
          },
          2037: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_25x_centered_m",
                  xlinkHref: "/icons/sprite.svg#speed_1_25x_centered_m",
                }),
              ]);
            });
          },
          3362: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_25x_centered_xs",
                  xlinkHref: "/icons/sprite.svg#speed_1_25x_centered_xs",
                }),
              ]);
            });
          },
          9846: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_25x_l",
                  xlinkHref: "/icons/sprite.svg#speed_1_25x_l",
                }),
              ]);
            });
          },
          5197: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_5x_centered_m",
                  xlinkHref: "/icons/sprite.svg#speed_1_5x_centered_m",
                }),
              ]);
            });
          },
          1079: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_5x_centered_xs",
                  xlinkHref: "/icons/sprite.svg#speed_1_5x_centered_xs",
                }),
              ]);
            });
          },
          6275: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_5x_l",
                  xlinkHref: "/icons/sprite.svg#speed_1_5x_l",
                }),
              ]);
            });
          },
          7026: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_75x_centered_m",
                  xlinkHref: "/icons/sprite.svg#speed_1_75x_centered_m",
                }),
              ]);
            });
          },
          8994: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_75x_centered_xs",
                  xlinkHref: "/icons/sprite.svg#speed_1_75x_centered_xs",
                }),
              ]);
            });
          },
          3702: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1_75x_l",
                  xlinkHref: "/icons/sprite.svg#speed_1_75x_l",
                }),
              ]);
            });
          },
          8664: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1x_centered_m",
                  xlinkHref: "/icons/sprite.svg#speed_1x_centered_m",
                }),
              ]);
            });
          },
          51: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1x_centered_xs",
                  xlinkHref: "/icons/sprite.svg#speed_1x_centered_xs",
                }),
              ]);
            });
          },
          8550: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_1x_l",
                  xlinkHref: "/icons/sprite.svg#speed_1x_l",
                }),
              ]);
            });
          },
          8619: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_2x_centered_m",
                  xlinkHref: "/icons/sprite.svg#speed_2x_centered_m",
                }),
              ]);
            });
          },
          5218: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_2x_centered_xs",
                  xlinkHref: "/icons/sprite.svg#speed_2x_centered_xs",
                }),
              ]);
            });
          },
          857: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "speed_2x_l",
                  xlinkHref: "/icons/sprite.svg#speed_2x_l",
                }),
              ]);
            });
          },
          6130: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "syncLyrics_m",
                  xlinkHref: "/icons/sprite.svg#syncLyrics_m",
                }),
              ]);
            });
          },
          3049: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "syncLyrics_xs",
                  xlinkHref: "/icons/sprite.svg#syncLyrics_xs",
                }),
              ]);
            });
          },
          126: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "syncLyrics_xxs",
                  xlinkHref: "/icons/sprite.svg#syncLyrics_xxs",
                }),
              ]);
            });
          },
          380: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "trailer_xs",
                  xlinkHref: "/icons/sprite.svg#trailer_xs",
                }),
              ]);
            });
          },
          3112: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "trailer_xxs",
                  xlinkHref: "/icons/sprite.svg#trailer_xxs",
                }),
              ]);
            });
          },
          1045: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "unavailable_xl",
                  xlinkHref: "/icons/sprite.svg#unavailable_xl",
                }),
              ]);
            });
          },
          2834: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "unavailable_xs",
                  xlinkHref: "/icons/sprite.svg#unavailable_xs",
                }),
              ]);
            });
          },
          8819: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "unpin_xxs",
                  xlinkHref: "/icons/sprite.svg#unpin_xxs",
                }),
              ]);
            });
          },
          8772: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "upload_xxs",
                  xlinkHref: "/icons/sprite.svg#upload_xxs",
                }),
              ]);
            });
          },
          3522: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "users_xxxs",
                  xlinkHref: "/icons/sprite.svg#users_xxxs",
                }),
              ]);
            });
          },
          5695: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "vibe_xxs",
                  xlinkHref: "/icons/sprite.svg#vibe_xxs",
                }),
              ]);
            });
          },
          6174: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "volumeOff_xs",
                  xlinkHref: "/icons/sprite.svg#volumeOff_xs",
                }),
              ]);
            });
          },
          540: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "volume_xs",
                  xlinkHref: "/icons/sprite.svg#volume_xs",
                }),
              ]);
            });
          },
          6206: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "windows",
                  xlinkHref: "/icons/sprite.svg#windows",
                }),
              ]);
            });
          },
          7185: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "windows_xs",
                  xlinkHref: "/icons/sprite.svg#windows_xs",
                }),
              ]);
            });
          },
          9481: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexBooksEn",
                  xlinkHref: "/icons/sprite.svg#yandexBooksEn",
                }),
              ]);
            });
          },
          7364: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexBooksRu",
                  xlinkHref: "/icons/sprite.svg#yandexBooksRu",
                }),
              ]);
            });
          },
          8577: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPayEn",
                  xlinkHref: "/icons/sprite.svg#yandexPayEn",
                }),
              ]);
            });
          },
          5760: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPayRu",
                  xlinkHref: "/icons/sprite.svg#yandexPayRu",
                }),
              ]);
            });
          },
          5667: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPlusEn",
                  xlinkHref: "/icons/sprite.svg#yandexPlusEn",
                }),
              ]);
            });
          },
          2639: (e, t, s) => {
            var r = s(810);
            e.exports = r.forwardRef(function (e, t) {
              return r.createElement("svg", Object.assign({}, e, { ref: t }), [
                r.createElement("use", {
                  key: "yandexPlusRu",
                  xlinkHref: "/icons/sprite.svg#yandexPlusRu",
                }),
              ]);
            });
          },
          5189: function (e, t, s) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = t.IconComponent = void 0);
            let a = s(9541),
              n = s(810),
              i = s(5881),
              l = s(5151),
              o = r(s(2964));
            (t.IconComponent = (e) => {
              let {
                  "aria-label": t,
                  className: s,
                  focusable: r = !1,
                  variant: n,
                  size: c,
                  forwardRef: x,
                  ...d
                } = e,
                u = c ? "".concat(n, "_").concat(c) : n,
                f = l.iconsCollection[u];
              return f
                ? (0, a.jsx)(f, {
                    className: (0, i.clsx)(
                      o.default.root,
                      s,
                      o.default["root_size_".concat(c)],
                    ),
                    focusable: r,
                    "aria-label": t,
                    ...d,
                    "aria-hidden": !t,
                    ref: x,
                  })
                : null;
            }),
              (t.Icon = (0, n.forwardRef)((e, s) =>
                (0, a.jsx)(t.IconComponent, { forwardRef: s, ...e }),
              ));
          },
          5151: function (e, t, s) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.iconsCollection = t.iconsCollectionBySize = void 0);
            let a = r(s(4656)),
              n = r(s(8170)),
              i = r(s(5565)),
              l = r(s(8127)),
              o = r(s(8993)),
              c = r(s(2933)),
              x = r(s(1334)),
              d = r(s(1426)),
              u = r(s(5378)),
              f = r(s(6579)),
              _ = r(s(3935)),
              m = r(s(3522)),
              p = r(s(7319)),
              g = r(s(8442)),
              v = r(s(2586)),
              y = r(s(5822)),
              k = r(s(5272)),
              b = r(s(4860)),
              E = r(s(8711)),
              w = r(s(8109)),
              j = r(s(4904)),
              h = r(s(5971)),
              R = r(s(3331)),
              O = r(s(9783)),
              S = r(s(8184)),
              C = r(s(4926)),
              N = r(s(3176)),
              H = r(s(4789)),
              L = r(s(8151)),
              A = r(s(8690)),
              P = r(s(1524)),
              M = r(s(2361)),
              I = r(s(3972)),
              B = r(s(9330)),
              T = r(s(7346)),
              D = r(s(2604)),
              U = r(s(6894)),
              Z = r(s(6391)),
              W = r(s(9369)),
              F = r(s(226)),
              Y = r(s(8130)),
              Q = r(s(5270)),
              V = r(s(3560)),
              z = r(s(7513)),
              q = r(s(9838)),
              K = r(s(9104)),
              G = r(s(7399)),
              J = r(s(5849)),
              X = r(s(3613)),
              $ = r(s(9372)),
              ee = r(s(3709)),
              et = r(s(3685)),
              es = r(s(3302)),
              er = r(s(811)),
              ea = r(s(6122)),
              en = r(s(5386)),
              ei = r(s(3201)),
              el = r(s(9434)),
              eo = r(s(2026)),
              ec = r(s(8112)),
              ex = r(s(8044)),
              ed = r(s(2754)),
              eu = r(s(5251)),
              ef = r(s(9370)),
              e_ = r(s(5632)),
              em = r(s(1001)),
              ep = r(s(893)),
              eg = r(s(6331)),
              ev = r(s(9876)),
              ey = r(s(1758)),
              ek = r(s(7196)),
              eb = r(s(7951)),
              eE = r(s(126)),
              ew = r(s(3112)),
              ej = r(s(8819)),
              eh = r(s(8772)),
              eR = r(s(5695)),
              eO = r(s(7171)),
              eS = r(s(9030)),
              eC = r(s(9422)),
              eN = r(s(1491)),
              eH = r(s(2337)),
              eL = r(s(9202)),
              eA = r(s(130)),
              eP = r(s(7923)),
              eM = r(s(3654)),
              eI = r(s(6507)),
              eB = r(s(3193)),
              eT = r(s(30)),
              eD = r(s(7802)),
              eU = r(s(3738)),
              eZ = r(s(2340)),
              eW = r(s(2125)),
              eF = r(s(4014)),
              eY = r(s(896)),
              eQ = r(s(1829)),
              eV = r(s(1084)),
              ez = r(s(4254)),
              eq = r(s(792)),
              eK = r(s(8131)),
              eG = r(s(1125)),
              eJ = r(s(9288)),
              eX = r(s(976)),
              e$ = r(s(1874)),
              e0 = r(s(9863)),
              e1 = r(s(1945)),
              e4 = r(s(1580)),
              e8 = r(s(4091)),
              e2 = r(s(8090)),
              e6 = r(s(895)),
              e5 = r(s(5910)),
              e3 = r(s(4892)),
              e9 = r(s(3366)),
              e7 = r(s(5034)),
              te = r(s(5792)),
              tt = r(s(9545)),
              ts = r(s(3362)),
              tr = r(s(1079)),
              ta = r(s(8994)),
              tn = r(s(51)),
              ti = r(s(5218)),
              tl = r(s(3049)),
              to = r(s(380)),
              tc = r(s(2834)),
              tx = r(s(540)),
              td = r(s(6174)),
              tu = r(s(7185)),
              tf = r(s(9351)),
              t_ = r(s(2092)),
              tm = r(s(1162)),
              tp = r(s(6837)),
              tg = r(s(2024)),
              tv = r(s(776)),
              ty = r(s(5720)),
              tk = r(s(2774)),
              tb = r(s(4997)),
              tE = r(s(3146)),
              tw = r(s(2084)),
              tj = r(s(3751)),
              th = r(s(3076)),
              tR = r(s(2495)),
              tO = r(s(9509)),
              tS = r(s(8987)),
              tC = r(s(190)),
              tN = r(s(843)),
              tH = r(s(5122)),
              tL = r(s(7405)),
              tA = r(s(820)),
              tP = r(s(5443)),
              tM = r(s(8782)),
              tI = r(s(7252)),
              tB = r(s(3013)),
              tT = r(s(5346)),
              tD = r(s(3792)),
              tU = r(s(1351)),
              tZ = r(s(8303)),
              tW = r(s(4777)),
              tF = r(s(8235)),
              tY = r(s(8915)),
              tQ = r(s(2037)),
              tV = r(s(5197)),
              tz = r(s(7026)),
              tq = r(s(8664)),
              tK = r(s(8619)),
              tG = r(s(6130)),
              tJ = r(s(6644)),
              tX = r(s(996)),
              t$ = r(s(7031)),
              t0 = r(s(4793)),
              t1 = r(s(7076)),
              t4 = r(s(8582)),
              t8 = r(s(7643)),
              t2 = r(s(9846)),
              t6 = r(s(6275)),
              t5 = r(s(3702)),
              t3 = r(s(8550)),
              t9 = r(s(857)),
              t7 = r(s(6304)),
              se = r(s(9040)),
              st = r(s(4298)),
              ss = r(s(5132)),
              sr = r(s(8868)),
              sa = r(s(8779)),
              sn = r(s(8503)),
              si = r(s(1045)),
              sl = r(s(7341)),
              so = r(s(9505)),
              sc = r(s(4483)),
              sx = r(s(8499)),
              sd = r(s(6544)),
              su = r(s(7402)),
              sf = r(s(1427)),
              s_ = r(s(7934)),
              sm = r(s(2435)),
              sp = r(s(3918)),
              sg = r(s(2571)),
              sv = r(s(2161)),
              sy = r(s(5304)),
              sk = r(s(2646)),
              sb = r(s(7500)),
              sE = r(s(6104)),
              sw = r(s(2502)),
              sj = r(s(1754)),
              sh = r(s(6615)),
              sR = r(s(7942)),
              sO = r(s(1498)),
              sS = r(s(8861)),
              sC = r(s(6809)),
              sN = r(s(5266)),
              sH = r(s(1179)),
              sL = r(s(6206)),
              sA = r(s(9481)),
              sP = r(s(7364)),
              sM = r(s(8577)),
              sI = r(s(5760)),
              sB = r(s(5667)),
              sT = r(s(2639));
            (t.iconsCollectionBySize = {
              xxxs: [
                "adult",
                "arrowRight",
                "check",
                "close",
                "donation",
                "exclamation",
                "explicit",
                "listen",
                "play",
                "reset",
                "ruble",
                "users",
              ],
              xxs: [
                "add",
                "addToPlaylist",
                "adult",
                "album",
                "arrowDown",
                "arrowLeft",
                "arrowRight",
                "artist",
                "bucket",
                "chain",
                "chartDown",
                "chartNew",
                "chartSame",
                "chartUp",
                "check",
                "clip",
                "close",
                "code",
                "crown",
                "dislike",
                "disliked",
                "download",
                "downloaded",
                "dragDots",
                "edit",
                "exclamation",
                "explicit",
                "eye_crossed",
                "filter",
                "info",
                "lightning",
                "like",
                "likeVariant",
                "liked",
                "likedVariant",
                "link",
                "lock",
                "lyrics",
                "macos",
                "menuArrow",
                "more",
                "next",
                "pause",
                "pencil",
                "pin",
                "pin_filled",
                "play",
                "playLast",
                "playNext",
                "podcasts",
                "previous",
                "repeat",
                "repeat_one",
                "reset",
                "rewindBackwards",
                "rewindForward",
                "ruble",
                "settings",
                "share",
                "shuffle",
                "syncLyrics",
                "trailer",
                "unpin",
                "upload",
                "vibe",
              ],
              xs: [
                "adult",
                "album",
                "arrowDown",
                "arrowLeft",
                "arrowRight",
                "cast",
                "chain",
                "close",
                "dislike",
                "disliked",
                "exclamation",
                "explicit",
                "filter",
                "fullscreen",
                "like",
                "liked",
                "liteVersion",
                "lock",
                "more",
                "next",
                "note",
                "pause",
                "pause_filled",
                "picture",
                "pin",
                "pin_filled",
                "play",
                "playQueue",
                "play_filled",
                "playlist",
                "previous",
                "repeat",
                "repeat_one",
                "rewindBackwards",
                "rewindForward",
                "search",
                "settings",
                "shuffle",
                "site",
                "speed_1_25x_centered",
                "speed_1_5x_centered",
                "speed_1_75x_centered",
                "speed_1x_centered",
                "speed_2x_centered",
                "syncLyrics",
                "trailer",
                "unavailable",
                "volume",
                "volumeOff",
                "windows",
              ],
              s: [
                "adult",
                "album",
                "dislike",
                "disliked",
                "exclamation",
                "explicit",
                "likedVariant",
                "note",
                "pauseVibe",
                "picture",
                "playVibe",
                "playlist",
              ],
              m: [
                "collections",
                "collections_selected",
                "history",
                "home",
                "home_selected",
                "kids",
                "kids_selected",
                "like",
                "liked",
                "lock",
                "more",
                "non_music",
                "non_music_selected",
                "pause",
                "pause_filled",
                "play",
                "playQueue",
                "play_filled",
                "search",
                "search_selected",
                "speed_1_25x_centered",
                "speed_1_5x_centered",
                "speed_1_75x_centered",
                "speed_1x_centered",
                "speed_2x_centered",
                "syncLyrics",
              ],
              l: [
                "add",
                "album",
                "download",
                "like",
                "pause_filled",
                "play_filled",
                "search",
                "speed_1_25x",
                "speed_1_5x",
                "speed_1_75x",
                "speed_1x",
                "speed_2x",
              ],
              xl: [
                "album",
                "clip",
                "note",
                "pause_filled",
                "picture",
                "play_filled",
                "playlist",
                "unavailable",
              ],
              xxl: [
                "attention",
                "check",
                "next",
                "offline",
                "pause_filled",
                "play_filled",
                "previous",
                "search",
              ],
              xxxl: ["attention"],
              "": [
                "bandlink",
                "booksLogo",
                "googlePlay",
                "huaweiAppGallery",
                "kinopoiskEn",
                "kinopoiskRu",
                "macos",
                "musicLogo",
                "musicLogoCenterEn",
                "musicLogoCenterRu",
                "musicLogoLeftEn",
                "musicLogoLeftRu",
                "plus",
                "plusBadge",
                "plusColor",
                "plusOutlined",
                "windows",
                "yandexBooksEn",
                "yandexBooksRu",
                "yandexPayEn",
                "yandexPayRu",
                "yandexPlusEn",
                "yandexPlusRu",
              ],
            }),
              (t.iconsCollection = {
                adult_xxxs: a.default,
                arrowRight_xxxs: n.default,
                check_xxxs: i.default,
                close_xxxs: l.default,
                donation_xxxs: o.default,
                exclamation_xxxs: c.default,
                explicit_xxxs: x.default,
                listen_xxxs: d.default,
                play_xxxs: u.default,
                reset_xxxs: f.default,
                ruble_xxxs: _.default,
                users_xxxs: m.default,
                add_xxs: p.default,
                addToPlaylist_xxs: g.default,
                adult_xxs: v.default,
                album_xxs: y.default,
                arrowDown_xxs: k.default,
                arrowLeft_xxs: b.default,
                arrowRight_xxs: E.default,
                artist_xxs: w.default,
                bucket_xxs: j.default,
                chain_xxs: h.default,
                chartDown_xxs: R.default,
                chartNew_xxs: O.default,
                chartSame_xxs: S.default,
                chartUp_xxs: C.default,
                check_xxs: N.default,
                clip_xxs: H.default,
                close_xxs: L.default,
                code_xxs: A.default,
                crown_xxs: P.default,
                dislike_xxs: M.default,
                disliked_xxs: I.default,
                download_xxs: B.default,
                downloaded_xxs: T.default,
                dragDots_xxs: D.default,
                edit_xxs: U.default,
                exclamation_xxs: Z.default,
                explicit_xxs: W.default,
                eye_crossed_xxs: F.default,
                filter_xxs: Y.default,
                info_xxs: Q.default,
                lightning_xxs: V.default,
                like_xxs: z.default,
                likeVariant_xxs: q.default,
                liked_xxs: K.default,
                likedVariant_xxs: G.default,
                link_xxs: J.default,
                lock_xxs: X.default,
                lyrics_xxs: $.default,
                macos_xxs: ee.default,
                menuArrow_xxs: et.default,
                more_xxs: es.default,
                next_xxs: er.default,
                pause_xxs: ea.default,
                pencil_xxs: en.default,
                pin_xxs: ei.default,
                pin_filled_xxs: el.default,
                play_xxs: eo.default,
                playLast_xxs: ec.default,
                playNext_xxs: ex.default,
                podcasts_xxs: ed.default,
                previous_xxs: eu.default,
                repeat_xxs: ef.default,
                repeat_one_xxs: e_.default,
                reset_xxs: em.default,
                rewindBackwards_xxs: ep.default,
                rewindForward_xxs: eg.default,
                ruble_xxs: ev.default,
                settings_xxs: ey.default,
                share_xxs: ek.default,
                shuffle_xxs: eb.default,
                syncLyrics_xxs: eE.default,
                trailer_xxs: ew.default,
                unpin_xxs: ej.default,
                upload_xxs: eh.default,
                vibe_xxs: eR.default,
                adult_xs: eO.default,
                album_xs: eS.default,
                arrowDown_xs: eC.default,
                arrowLeft_xs: eN.default,
                arrowRight_xs: eH.default,
                cast_xs: eL.default,
                chain_xs: eA.default,
                close_xs: eP.default,
                dislike_xs: eM.default,
                disliked_xs: eI.default,
                exclamation_xs: eB.default,
                explicit_xs: eT.default,
                filter_xs: eD.default,
                fullscreen_xs: eU.default,
                like_xs: eZ.default,
                liked_xs: eW.default,
                liteVersion_xs: eF.default,
                lock_xs: eY.default,
                more_xs: eQ.default,
                next_xs: eV.default,
                note_xs: ez.default,
                pause_xs: eq.default,
                pause_filled_xs: eK.default,
                picture_xs: eG.default,
                pin_xs: eJ.default,
                pin_filled_xs: eX.default,
                play_xs: e$.default,
                playQueue_xs: e0.default,
                play_filled_xs: e1.default,
                playlist_xs: e4.default,
                previous_xs: e8.default,
                repeat_xs: e2.default,
                repeat_one_xs: e6.default,
                rewindBackwards_xs: e5.default,
                rewindForward_xs: e3.default,
                search_xs: e9.default,
                settings_xs: e7.default,
                shuffle_xs: te.default,
                site_xs: tt.default,
                speed_1_25x_centered_xs: ts.default,
                speed_1_5x_centered_xs: tr.default,
                speed_1_75x_centered_xs: ta.default,
                speed_1x_centered_xs: tn.default,
                speed_2x_centered_xs: ti.default,
                syncLyrics_xs: tl.default,
                trailer_xs: to.default,
                unavailable_xs: tc.default,
                volume_xs: tx.default,
                volumeOff_xs: td.default,
                windows_xs: tu.default,
                adult_s: tf.default,
                album_s: t_.default,
                dislike_s: tm.default,
                disliked_s: tp.default,
                exclamation_s: tg.default,
                explicit_s: tv.default,
                likedVariant_s: ty.default,
                note_s: tk.default,
                pauseVibe_s: tb.default,
                picture_s: tE.default,
                playVibe_s: tw.default,
                playlist_s: tj.default,
                collections_m: th.default,
                collections_selected_m: tR.default,
                history_m: tO.default,
                home_m: tS.default,
                home_selected_m: tC.default,
                kids_m: tN.default,
                kids_selected_m: tH.default,
                like_m: tL.default,
                liked_m: tA.default,
                lock_m: tP.default,
                more_m: tM.default,
                non_music_m: tI.default,
                non_music_selected_m: tB.default,
                pause_m: tT.default,
                pause_filled_m: tD.default,
                play_m: tU.default,
                playQueue_m: tZ.default,
                play_filled_m: tW.default,
                search_m: tF.default,
                search_selected_m: tY.default,
                speed_1_25x_centered_m: tQ.default,
                speed_1_5x_centered_m: tV.default,
                speed_1_75x_centered_m: tz.default,
                speed_1x_centered_m: tq.default,
                speed_2x_centered_m: tK.default,
                syncLyrics_m: tG.default,
                add_l: tJ.default,
                album_l: tX.default,
                download_l: t$.default,
                like_l: t0.default,
                pause_filled_l: t1.default,
                play_filled_l: t4.default,
                search_l: t8.default,
                speed_1_25x_l: t2.default,
                speed_1_5x_l: t6.default,
                speed_1_75x_l: t5.default,
                speed_1x_l: t3.default,
                speed_2x_l: t9.default,
                album_xl: t7.default,
                clip_xl: se.default,
                note_xl: st.default,
                pause_filled_xl: ss.default,
                picture_xl: sr.default,
                play_filled_xl: sa.default,
                playlist_xl: sn.default,
                unavailable_xl: si.default,
                attention_xxl: sl.default,
                check_xxl: so.default,
                next_xxl: sc.default,
                offline_xxl: sx.default,
                pause_filled_xxl: sd.default,
                play_filled_xxl: su.default,
                previous_xxl: sf.default,
                search_xxl: s_.default,
                attention_xxxl: sm.default,
                bandlink: sp.default,
                booksLogo: sg.default,
                googlePlay: sv.default,
                huaweiAppGallery: sy.default,
                kinopoiskEn: sk.default,
                kinopoiskRu: sb.default,
                macos: sE.default,
                musicLogo: sw.default,
                musicLogoCenterEn: sj.default,
                musicLogoCenterRu: sh.default,
                musicLogoLeftEn: sR.default,
                musicLogoLeftRu: sO.default,
                plus: sS.default,
                plusBadge: sC.default,
                plusColor: sN.default,
                plusOutlined: sH.default,
                windows: sL.default,
                yandexBooksEn: sA.default,
                yandexBooksRu: sP.default,
                yandexPayEn: sM.default,
                yandexPayRu: sI.default,
                yandexPlusEn: sB.default,
                yandexPlusRu: sT.default,
              });
          },
          7066: (e, t, s) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = void 0);
            var r = s(5189);
            Object.defineProperty(t, "Icon", {
              enumerable: !0,
              get: function () {
                return r.Icon;
              },
            });
          },
          1093: function (e, t, s) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PlusBadge = void 0);
            let a = s(9541),
              n = s(5881),
              i = s(2582),
              l = s(7066),
              o = r(s(1684));
            t.PlusBadge = (e) => {
              let { className: t, children: s } = e;
              return (0, a.jsxs)("div", {
                className: (0, n.clsx)(o.default.root, t),
                children: [
                  (0, a.jsx)(l.Icon, {
                    variant: "plus",
                    className: o.default.icon,
                  }),
                  (0, a.jsx)(i.Caption, {
                    variant: "div",
                    type: "controls",
                    weight: "medium",
                    size: "m",
                    className: o.default.text,
                    children: s,
                  }),
                ],
              });
            };
          },
          7743: function (e, t, s) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let a = s(9541),
              n = s(5881),
              i = s(810),
              l = s(4721),
              o = r(s(3641));
            (t.CaptionComponent = (e) => {
              let {
                forwardRef: t,
                variant: s,
                type: r = "text",
                size: i = "s",
                className: c,
                children: x,
                weight: d = "medium",
                ...u
              } = e;
              return (0, a.jsx)(l.Typography, {
                variant: s,
                ref: t,
                className: (0, n.clsx)(
                  o.default.root,
                  o.default["root_".concat(r, "_").concat(i)],
                  o.default["root_weight_".concat(d)],
                  c,
                ),
                ...u,
                children: x,
              });
            }),
              (t.Caption = (0, i.forwardRef)((e, s) =>
                (0, a.jsx)(t.CaptionComponent, { forwardRef: s, ...e }),
              ));
          },
          404: function (e, t, s) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let a = s(9541),
              n = s(5881),
              i = s(810),
              l = s(4721),
              o = r(s(5153));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: s,
                weight: r = "bold",
                size: i = "s",
                className: c,
                children: x,
                ...d
              } = e;
              return (0, a.jsx)(l.Typography, {
                variant: s,
                ref: t,
                className: (0, n.clsx)(
                  o.default.root,
                  o.default["root_size_".concat(i)],
                  o.default["root_weight_".concat(r)],
                  c,
                ),
                ...d,
                children: x,
              });
            }),
              (t.Heading = (0, i.forwardRef)((e, s) =>
                (0, a.jsx)(t.HeadingComponent, { forwardRef: s, ...e }),
              ));
          },
          4721: function (e, t, s) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let a = s(9541),
              n = s(5881),
              i = s(810),
              l = r(s(5818));
            function o(e) {
              let {
                  forwardRef: t,
                  style: s,
                  className: r,
                  children: i,
                  variant: o,
                  lineClamp: c,
                  ...x
                } = e,
                d = c && "string" == typeof i ? i : void 0;
              return (0, a.jsx)(o, {
                style: { ...s, WebkitLineClamp: c },
                ref: t,
                title: d,
                className: (0, n.clsx)(
                  l.default.root,
                  {
                    [l.default.root_clamp]: c && c > 0,
                    [l.default.root_clamp_oneline]: c && 1 === c,
                    [l.default.root_clamp_multiline]: c && c > 1,
                  },
                  r,
                ),
                ...x,
                children: i,
              });
            }
            (t.TypographyComponent = o),
              (t.Typography = (0, i.forwardRef)((e, t) =>
                (0, a.jsx)(o, { forwardRef: t, ...e }),
              ));
          },
          2582: (e, t, s) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.Caption = void 0);
            var r = s(7743);
            Object.defineProperty(t, "Caption", {
              enumerable: !0,
              get: function () {
                return r.Caption;
              },
            });
            var a = s(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return a.Heading;
              },
            });
          },
          810: (e) => {
            e.exports = j;
          },
        },
        C = {};
      function N(e) {
        var t = C[e];
        if (void 0 !== t) return t.exports;
        var s = (C[e] = { exports: {} });
        return S[e].call(s.exports, s, s.exports, N), s.exports;
      }
      (N.d = (e, t) => {
        for (var s in t)
          N.o(t, s) &&
            !N.o(e, s) &&
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
      }),
        (N.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (N.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var H = {};
      Object.defineProperty(H, "X", { value: !0 }),
        (H.R = void 0),
        (r = N(1093)),
        Object.defineProperty(H, "R", {
          enumerable: !0,
          get: function () {
            return r.PlusBadge;
          },
        });
      var L = H.R;
      H.X;
      var A = s(17392),
        P = s(19684),
        M = s(97141);
      ((a = n || (n = {})).SETTINGS = "settings"),
        (a.LOGOUT = "logout"),
        (a.ACCOUNT_ACTION = "account-action");
      var I = s(69756),
        B = s(27376),
        T = s(27169),
        D = s.n(T);
      let U = (0, E.Pi)(() => {
        let { user: e } = (0, x.oR4)(),
          t = (0, x.s0h)("/settings");
        return (0, m.jsx)(B.v2, {
          placement: "top",
          offsetOptions: 10,
          variant: "text",
          withRipple: !1,
          className: D().button,
          label: (0, m.jsx)(k, { className: D().button, hasPlus: e.hasPlus }),
          children: (0, m.jsx)(B.sN, {
            icon: (0, m.jsx)(I.Icon, { variant: "settings", size: "xxs" }),
            onClick: t,
            children: (0, m.jsx)(h.Z, { id: "page.settings" }),
          }),
        });
      });
      var Z = s(65102),
        W = s.n(Z);
      let F = (0, E.Pi)((e) => {
        var t;
        let {
            className: s,
            variant: r = "desktop",
            withMeta: a,
            metaClassName: i,
            usernameClassName: l,
            userIdClassName: o,
          } = e,
          {
            user: c,
            location: d,
            experiments: u,
            settings: f,
            slam: _,
          } = (0, x.oR4)(),
          { theme: g, setTheme: v } = (0, x.FgM)(),
          y = (0, x.uK4)(),
          k = (0, P.s)(),
          E = y.get(x.V0J),
          j = y.get(x.U5t),
          { getThemeFromStorage: S, setThemeToStorage: C } = (0, x.YeQ)(E),
          [N, H] = (0, w.useState)(() => {
            var e;
            return null !== (e = S()) && void 0 !== e ? e : x.rLu;
          }),
          {
            oldWebHost: I,
            passportCredentials: { origin: B },
          } = j,
          T = (0, x.yyu)(I),
          D = (0, w.useRef)(null),
          [Z, F] = (0, w.useState)(0),
          Y = (0, x.s0h)("/settings"),
          { language: Q, setLanguage: V, availableLanguages: z } = (0, x.ZSk)(),
          q = u.checkExperiment(x.peG.WebNextLanguageSwitcher, "on"),
          K = u.checkExperiment(x.peG.WebForceNext, "oldnew_button"),
          G = u.checkExperiment(x.peG.WebForceNext, "force_oldnew_button"),
          J =
            u.checkExperiment(x.peG.WebPreferredDesign, "new") ||
            u.checkExperiment(x.peG.WebPreferredDesign, "oldnew") ||
            K ||
            G,
          X = (0, R.stringifyJSONSafely)({ entrypoint: "web_desktop" }),
          $ = (0, w.useMemo)(() => {
            switch (f.platform) {
              case x.t4T.WINDOWS:
                return "windows_music";
              case x.t4T.MACOS:
                return "mac_music";
              case x.t4T.LINUX:
                return "linux_music";
              default:
                return "";
            }
          }, [f.platform]);
        (0, w.useEffect)(() => {
          q ||
            (E.set(x.BUb.EnableChangingLanguage, "off"),
            E.remove(x.BUb.SavedUserLanguage));
        }, [E, q]);
        let ee = (0, O.W)((e) => {
            H(e), e === x.rLu ? v((0, x.vn0)()) : v(e), C(e);
          }),
          et = (0, w.useCallback)(
            (e) => {
              E.set(x.BUb.EnableChangingLanguage, "on"), V(e);
            },
            [V, E],
          ),
          es = (0, w.useCallback)(() => {}, [
            y,
            !0,
            G,
            K,
            k,
            T,
            null === (t = f.browserInfo) || void 0 === t ? void 0 : t.version,
          ]),
          er = (0, w.useCallback)(
            (e, t, s) => {
              e === n.SETTINGS && (null == s || s.onClose(), Y()),
                (e === n.LOGOUT || e === n.ACCOUNT_ACTION) &&
                  E.remove(x.BUb.YmUid);
            },
            [Y, E],
          ),
          ea = (0, w.useCallback)(() => {
            var e;
            F(
              document.documentElement.clientHeight -
                ((null === (e = D.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect().top) || 0),
            );
          }, [F]),
          en = (0, w.useMemo)(
            () => ({ "--user-top-distance": "".concat(Z, "px") }),
            [Z],
          ),
          ei = (0, w.useMemo)(() => {
            if (_.networkStatus.isOffline || _.isOfflineModeEnabled)
              return (0, m.jsx)(U, {});
            let e = void 0 !== c.puid ? String(c.puid) : "";
            return (0, m.jsx)(b.User, {
              className: (0, p.W)(W().userId, o),
              platform: "desktop" === r ? "desktop" : "touch",
              userData: { plus: c.hasPlus, avatarId: c.account.data.avatarId },
              onLocaleChange: et,
              project: "music",
              queryParams: {
                uid: e,
                "music.locales": q ? z.join() : "",
                l10n: Q,
                "music.showSettings": c.isAuthorized ? "1" : "0",
                "music.chatContext": X,
                "music.chatUtmSource": $,
                "music.showBackToOldDesign": "0",
                target: "_blank",
                origin: B,
              },
              env: "prod",
              avatarSize: "desktop" === r ? 34 : 26,
              dialogClassName: (0, p.W)(W().dialog, W()["dialog_".concat(r)]),
              retpath: d.href,
              onMenuItemClick: er,
              rpcHandlers: { setOldDesign: es },
              tld: d.tld,
              preload: !0,
              onOpen: ea,
              theme: N,
              colorScheme: null != g ? g : void 0,
              onThemeChange: ee,
            });
          }, [
            z,
            X,
            $,
            ea,
            et,
            es,
            ee,
            !0,
            Q,
            d.href,
            d.tld,
            er,
            B,
            _.isOfflineModeEnabled,
            _.networkStatus.isOffline,
            g,
            c.account.data.avatarId,
            c.hasPlus,
            c.isAuthorized,
            c.puid,
            o,
            r,
            q,
            J,
            N,
          ]);
        return (0, m.jsxs)("div", {
          className: (0, p.W)(W().root, s),
          ref: D,
          style: en,
          children: [
            ei,
            a &&
              (0, m.jsxs)("div", {
                className: (0, p.W)(W().meta, i),
                children: [
                  (0, m.jsx)(A.Caption, {
                    variant: "div",
                    type: "controls",
                    size: "m",
                    weight: "medium",
                    className: (0, p.W)(W().userName, l),
                    lineClamp: 1,
                    children: c.account.data.publicName || c.account.data.login,
                  }),
                  c.hasPlus &&
                    (0, m.jsx)(M.rU, {
                      href: "https://plus.yandex.".concat(d.tld, "/"),
                      target: "_blank",
                      className: W().plusLink,
                      children: (0, m.jsx)(L, {
                        children: (0, m.jsx)(h.Z, { id: "sidebar.plus-badge" }),
                      }),
                    }),
                ],
              }),
          ],
        });
      });
    },
    91851: function (e, t, s) {
      "use strict";
      s.d(t, {
        f1: function () {
          return tS;
        },
        x5: function () {
          return tA;
        },
        $h: function () {
          return b;
        },
      });
      var r,
        a,
        n,
        i,
        l,
        o,
        c,
        x,
        d,
        u,
        f,
        _,
        m,
        p,
        g,
        v,
        y = s(22874),
        k = s(40892);
      let b = y.V5.model({ modal: k.KL }).actions((e) => ({
        openModal() {
          e.modal.open();
        },
      }));
      var E = s(75441),
        w = s(32358),
        j = s(62569),
        h = s(65067),
        R = s(35846),
        O = s(29088),
        S = s(13534);
      ((r = a || (a = {})).RU = "ru"), (r.BY = "by"), (r.OTHER = "other");
      let C = { [S.HTA.RU]: a.RU, [S.HTA.BY]: a.BY },
        N = (e) => (e && C[e]) || a.OTHER;
      var H = s(68837),
        L = s.n(H),
        A = s(92653),
        P = s.n(A),
        M = s(15937),
        I = s(97141);
      let B = (e) => {
          let { className: t, faqProps: s } = e,
            { location: r } = (0, S.oR4)(),
            a = {
              nbsp: "\xa0",
              steps: (0, E.jsxs)("ul", {
                className: I.DF.list,
                children: [
                  (0, E.jsx)("li", {
                    className: I.DF.listITem,
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.faq-answer-cancel-until-end-step-1",
                      values: {
                        link: (0, E.jsx)(I.rU, {
                          className: I.DF.link,
                          href: "http://plus.yandex.".concat(r.tld, "/my"),
                          target: "_blank",
                          children: (0, E.jsx)(M.Z, {
                            id: "paywall.faq-answer-cancel-until-end-step-1-link",
                          }),
                        }),
                      },
                    }),
                  }),
                  (0, E.jsx)("li", {
                    className: I.DF.listITem,
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.faq-answer-cancel-until-end-step-2",
                      values: { nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
            };
          return (0, E.jsxs)(I.dm, {
            className: t,
            ...s,
            ...(0, R.BA)(R.QM.paywall.PAYWALL_FAQ_SECTION),
            children: [
              (0, E.jsx)(I.Um, {
                question: (0, E.jsx)(I.dg, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-question-without-card-binding",
                  }),
                }),
                answer: (0, E.jsx)(I.sB, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-answer-without-card-binding",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                questionDataTestId: (0, R.BA)(
                  R.QM.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_QUESTION,
                ),
                answerDataTestId: (0, R.BA)(
                  R.QM.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_ANSWER,
                ),
              }),
              (0, E.jsx)(I.Um, {
                question: (0, E.jsx)(I.dg, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-question-afraid-forget-cancel",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, E.jsx)(I.sB, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-answer-afraid-forget-cancel",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                questionDataTestId: (0, R.BA)(
                  R.QM.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_QUESTION,
                ),
                answerDataTestId: (0, R.BA)(
                  R.QM.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_ANSWER,
                ),
              }),
              (0, E.jsx)(I.Um, {
                question: (0, E.jsx)(I.dg, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-question-cancel-until-end",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, E.jsx)(I.sB, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-answer-cancel-until-end",
                    values: a,
                  }),
                }),
                questionDataTestId: (0, R.BA)(
                  R.QM.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_QUESTION,
                ),
                answerDataTestId: (0, R.BA)(
                  R.QM.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_ANSWER,
                ),
              }),
              (0, E.jsx)(I.Um, {
                question: (0, E.jsx)(I.dg, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-question-where-else-subscribe",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, E.jsx)(I.sB, {
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.faq-answer-where-else-subscribe",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                questionDataTestId: (0, R.BA)(
                  R.QM.paywall
                    .PAYWALL_FAQ_ITEM_DONT_WANT_INPUT_CREDENTIALS_QUESTION,
                ),
                answerDataTestId: (0, R.BA)(
                  R.QM.paywall
                    .PAYWALL_FAQ_ITEM_DONT_WANT_INPUT_CREDENTIALS_ANSWER,
                ),
              }),
            ],
          });
        },
        T = (0, j.Pi)(() => {
          let { location: e } = (0, S.oR4)();
          return (0, E.jsx)(I.KV, {
            ageRestriction: "0+",
            links: [
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/yandex_plus_conditions/",
                ),
                text: (0, E.jsx)(M.Z, {
                  id: "paywall-footer.subscription-terms-link",
                }),
                testId: R.QM.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_SUB,
              },
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/yandex_plus_privilege_list",
                ),
                text: (0, E.jsx)(M.Z, {
                  id: "paywall-footer.privileges-terms-link",
                }),
                testId: R.QM.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PRIVILEGE,
              },
              {
                href: "https://yandex.".concat(e.tld, "/legal/plus_loyalty/"),
                text: (0, E.jsx)(M.Z, {
                  id: "paywall-footer.cashback-terms-link",
                }),
                testId: R.QM.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_CASHBACK,
              },
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/plus_generalrules/",
                ),
                text: (0, E.jsx)(M.Z, {
                  id: "paywall-footer.promotion-terms-link",
                }),
                testId: R.QM.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PROMO,
              },
              {
                href: "https://yandex.".concat(e.tld, "/support/plus"),
                text: (0, E.jsx)(M.Z, { id: "paywall-footer.support-link" }),
                testId: R.QM.paywall.PAYWALL_FOOTER_ITEM_SUPPORT,
              },
            ],
          });
        });
      var D = s(69756),
        U = s(67126),
        Z = s(17392),
        W = s(39054),
        F = s(17973),
        Y = s.n(F);
      let Q = (e) => {
        let {
          variant: t = "horizontal",
          className: s,
          text: r,
          imageAlign: a = "center",
          imageSrc: n,
          image2xSrc: i,
          ...l
        } = e;
        return (0, E.jsxs)("div", {
          className: (0, w.W)(Y().root, Y()["root_".concat(t)], s),
          ...(0, S.tEg)(l),
          children: [
            (0, E.jsx)("div", {
              className: Y().textContainer,
              children: (0, E.jsx)(Z.Heading, {
                variant: "h3",
                size: "xl",
                className: Y().text,
                children: r,
              }),
            }),
            (0, E.jsx)("div", {
              className: (0, w.W)(
                Y().imageContainer,
                Y()["imageContainer_align_".concat(a)],
              ),
              children: (0, E.jsx)(W.Image, {
                className: Y().image,
                src: n,
                srcSet: i ? "".concat(i, " 2x") : void 0,
                fit: "horizontal" === t ? "cover" : "none",
                "aria-hidden": !0,
              }),
            }),
          ],
        });
      };
      var V = s(3857),
        z = s.n(V);
      let q = (e) => {
        let {
          id: t,
          className: s,
          contentClassName: r,
          heading: a,
          content: n,
          ...i
        } = e;
        return (0, E.jsxs)("section", {
          className: (0, w.W)(z().root, s),
          id: t,
          ...(0, S.tEg)(i),
          children: [
            (0, E.jsx)("div", { className: z().headingContainer, children: a }),
            (0, E.jsx)("div", {
              className: (0, w.W)(z().contentContainer, r),
              children: n,
            }),
          ],
        });
      };
      var K = s(90004),
        G = s.n(K);
      let J = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig",
          [a.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig",
        },
        X = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig",
          [a.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig",
        },
        $ = (e) => {
          let { className: t, variant: s = a.RU } = e,
            r = (0, S.Eu6)();
          return (0, E.jsx)(q, {
            className: t,
            contentClassName: G()["content_".concat(s)],
            heading: (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(D.Icon, {
                  variant: "kinopoisk".concat(r),
                  className: G()["logo_".concat(r.toLocaleLowerCase())],
                }),
                (0, E.jsx)(U.y, {
                  children: (0, E.jsx)(Z.Heading, {
                    variant: "h2",
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.kinopoisk-part-title",
                    }),
                  }),
                }),
              ],
            }),
            content: (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(Q, {
                  className: G().card1,
                  variant: "vertical",
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.kinopoisk-part-benefit-movies",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: J[s],
                  image2xSrc: X[s],
                  ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_CHOOSE_FILM),
                }),
                (0, E.jsx)(Q, {
                  className: G().card2,
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.kinopoisk-part-benefit-exclusive",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig",
                  ...(0, R.BA)(
                    R.QM.paywall.PAYWALL_SECTION_CARD_WATCH_EXCLUSIVES,
                  ),
                }),
                s === a.RU &&
                  (0, E.jsx)(Q, {
                    className: G().card3,
                    text: (0, E.jsx)(M.Z, {
                      id: "paywall.kinopoisk-part-benefit-sport",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                    imageSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig",
                    image2xSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig",
                    ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_WATCH_SPORT),
                  }),
                (0, E.jsx)(Q, {
                  className: G().card4,
                  variant: "vertical",
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.kinopoisk-part-benefit-channels",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageAlign: "right",
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig",
                  ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_MANY_CHANNELS),
                }),
              ],
            }),
            ...(0, R.BA)(R.QM.paywall.PAYWALL_KINOPOISK_SECTION),
          });
        };
      var ee = s(18489),
        et = s(77559),
        es = s.n(et);
      let er = "content-anchor",
        ea = (e) => {
          let {
            className: t,
            shouldShowLabel: s = !0,
            anchorId: r = er,
            children: a,
          } = e;
          return (0, E.jsxs)(ee.r, {
            className: (0, w.W)(es().root, t),
            href: "#".concat(r),
            role: "button",
            children: [
              (0, E.jsx)("div", { className: es().content, children: a }),
              s &&
                (0, E.jsx)(Z.Caption, {
                  variant: "span",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.more-info",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              (0, E.jsx)(D.Icon, { variant: "arrowDown", size: "xs" }),
            ],
          });
        };
      var en = s(34875),
        ei = s.n(en);
      let el = (e) => {
        let { className: t, variant: s = a.RU } = e,
          r = (0, S.Eu6)(),
          n = (0, h.useMemo)(
            () =>
              s === a.RU
                ? (0, E.jsx)(M.Z, {
                    id: "paywall.music-part-benefit-books",
                    values: { br: "\n", nbsp: "\xa0" },
                  })
                : (0, E.jsx)(M.Z, {
                    id: "paywall.music-part-benefit-books-alternative",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
            [s],
          );
        return (0, E.jsx)(q, {
          id: er,
          className: t,
          contentClassName: ei().content,
          heading: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(D.Icon, {
                variant: "musicLogoCenter".concat(r),
                className: ei()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, E.jsx)(U.y, {
                children: (0, E.jsx)(Z.Heading, {
                  variant: "h2",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.music-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(Q, {
                className: ei().card,
                variant: "vertical",
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-recommendations",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig",
                ...(0, R.BA)(
                  R.QM.paywall.PAYWALL_SECTION_CARD_FIND_INTERESTING,
                ),
              }),
              (0, E.jsx)(Q, {
                className: ei().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-many-devices",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig",
                ...(0, R.BA)(
                  R.QM.paywall.PAYWALL_SECTION_CARD_SMART_RECOMENDATIONS,
                ),
              }),
              (0, E.jsx)(Q, {
                className: ei().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-without-internet",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/69699/img.6703f9237733220b25bd3744/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.6703f91a37dd1d4ade86c11a/orig",
                ...(0, R.BA)(
                  R.QM.paywall.PAYWALL_SECTION_CARD_LISTEN_WITHOUT_INTERNET,
                ),
              }),
              (0, E.jsx)(Q, {
                className: ei().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-playlists",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig",
                ...(0, R.BA)(
                  R.QM.paywall.PAYWALL_SECTION_CARD_MAKE_COLLECTIONS,
                ),
              }),
              (0, E.jsx)(Q, {
                className: ei().card,
                variant: "vertical",
                text: n,
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig",
                ...(0, R.BA)(
                  R.QM.paywall.PAYWALL_SECTION_CARD_LISTEN_AUDIOBOKS,
                ),
              }),
            ],
          }),
          ...(0, R.BA)(R.QM.paywall.PAYWALL_MUSIC_SECTION),
        });
      };
      var eo = s(91911),
        ec = s.n(eo);
      let ex = (e) => {
        let { className: t, variant: s = a.RU } = e,
          r = (0, S.Eu6)();
        return (0, E.jsx)(q, {
          className: t,
          contentClassName: ec()["content_".concat(s)],
          heading: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(D.Icon, {
                variant: "yandexPlus".concat(r),
                className: ec()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, E.jsx)(U.y, {
                children: (0, E.jsx)(Z.Heading, {
                  variant: "h2",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.plus-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(Q, {
                className: ec().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.plus-part-benefit-family",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES),
              }),
              (0, E.jsx)(Q, {
                className: ec().card,
                variant: "vertical",
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.plus-part-benefit-devices",
                  values: { br: "\n" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f29c21b8a7ae33ed006e72/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f292cc89f5b04b855a8040/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES),
              }),
              s === a.RU &&
                (0, E.jsxs)(E.Fragment, {
                  children: [
                    (0, E.jsx)(Q, {
                      className: ec().card,
                      variant: "vertical",
                      text: (0, E.jsx)(M.Z, {
                        id: "paywall.plus-part-benefit-daily",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageAlign: "right",
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564b99e1c4f13bd035c4c/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564d59e1c4f13bd035c4e/orig",
                      ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_DO_DAILY),
                    }),
                    (0, E.jsx)(Q, {
                      className: ec().card,
                      text: (0, E.jsx)(M.Z, {
                        id: "paywall.plus-part-benefit-plus-city",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564f79e1c4f13bd035c50/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/28592/img.667565109e1c4f13bd035c52/orig",
                      ...(0, R.BA)(
                        R.QM.paywall.PAYWALL_SECTION_CARD_PLAY_PLUS_CITY,
                      ),
                    }),
                  ],
                }),
            ],
          }),
          ...(0, R.BA)(R.QM.paywall.PAYWALL_PLUS_SECTION),
        });
      };
      var ed = s(98730),
        eu = s(10393),
        ef = s(64451),
        e_ = s(20184),
        em = s(68208),
        ep = s(87660),
        eg = s(53382),
        ev = s.n(eg);
      let ey = {
          exit: ev().stickyContainer_exit,
          exitActive: ev().stickyContainer_exit_active,
          enter: ev().stickyContainer_enter,
          enterActive: ev().stickyContainer_enter_active,
        },
        ek = "buy-subscription-button",
        eb = (0, j.Pi)((e) => {
          var t;
          let { className: s, terms: r, shouldShowFixed: a } = e,
            n = (0, h.useRef)(null),
            { user: i } = (0, S.oR4)(),
            { target: l, communicationId: o, campaignId: c } = (0, ep.Pz)(),
            x = "/pay" === (0, ed.usePathname)(),
            {
              mainText: d,
              mainTextA11y: u,
              additionText: f,
              openPaymentWidgetModal: _,
              saveOfferAndAuthorize: m,
            } = (0, ep.xU)({
              storeName: "paywall",
              communicationId: (x && o) || "",
              campaignId: (x && c) || "",
              customTarget: (x && l) || "",
              offerElement: { element: n.current, intersectionPropertyId: ek },
            }),
            p = (0, h.useRef)(null),
            [g, v] = (0, h.useState)(),
            [y, k] = (0, h.useState)(!1),
            { isIntersecting: b } =
              null !== (t = (0, e_.S1)([n], { preflightCheck: !1 }, !a)[ek]) &&
              void 0 !== t
                ? t
                : {},
            j = (0, h.useCallback)(() => {
              if (!i.isAuthorized) {
                m();
                return;
              }
              _();
            }, [i.isAuthorized, _, m]);
          (0, h.useEffect)(() => {
            if (!b) {
              var e;
              v(
                null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.closest("[data-buy-subscription-block-portal]"),
              );
            }
          }, [b]),
            (0, h.useEffect)(() => {
              a &&
                setTimeout(() => {
                  k(!0);
                }, 300);
            }, [a, k]);
          let O = a && g,
            C = !!(O && !b && y);
          return (0, E.jsxs)("div", {
            className: (0, w.W)(ev().root, s),
            children: [
              (0, E.jsxs)(em.Button, {
                isBlock: !0,
                radius: "xxxl",
                size: "l",
                color: "plus",
                className: ev().button,
                ref: n,
                "data-intersection-property-id": ek,
                onClick: j,
                "aria-label": u,
                ...(0, R.BA)(R.QM.paywall.PAYWALL_OFFER_BUTTON),
                children: [
                  (0, E.jsx)(Z.Caption, {
                    className: ev().text_main,
                    variant: "div",
                    size: "l",
                    children: d,
                  }),
                  f &&
                    (0, E.jsx)(Z.Caption, {
                      className: ev().text_addition,
                      variant: "div",
                      size: "m",
                      children: f,
                    }),
                ],
              }),
              r &&
                (0, E.jsx)(Z.Caption, {
                  className: ev().text_secondary,
                  variant: "div",
                  size: "s",
                  weight: "normal",
                  children: r,
                }),
              O &&
                (0, eu.createPortal)(
                  (0, E.jsx)(ef.Z, {
                    in: C,
                    nodeRef: p,
                    timeout: 300,
                    classNames: ey,
                    unmountOnExit: !0,
                    children: (0, E.jsx)("div", {
                      className: ev().stickyContainer,
                      "aria-hidden": !0,
                      ref: p,
                      children: (0, E.jsx)(eb, {}),
                    }),
                  }),
                  g,
                ),
            ],
          });
        });
      var eE = s(61876),
        ew = s.n(eE);
      let ej = (e) => {
        let { className: t } = e;
        return (0, E.jsx)("section", {
          className: (0, w.W)(ew().root, t),
          children: (0, E.jsx)("div", {
            className: ew().wrapper,
            children: (0, E.jsxs)("div", {
              className: ew().content,
              children: [
                (0, E.jsx)(Z.Heading, {
                  variant: "h1",
                  size: "xxl",
                  className: ew().title,
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.music-on-many-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, E.jsx)(Z.Caption, {
                  variant: "div",
                  size: "l",
                  weight: "normal",
                  className: ew().label,
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.recommendations-on-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, E.jsx)(eb, {
                  className: ew().buySubscriptionBlock,
                  shouldShowFixed: !0,
                }),
              ],
            }),
          }),
        });
      };
      var eh = s(32373),
        eR = s.n(eh);
      let eO = () =>
        (0, E.jsxs)(E.Fragment, {
          children: [
            (0, E.jsx)(ej, { className: eR().topSection }),
            (0, E.jsx)(el, { className: L().section, variant: a.BY }),
            (0, E.jsx)($, { className: L().section, variant: a.BY }),
            (0, E.jsx)(ex, { className: L().section, variant: a.BY }),
            (0, E.jsx)(B, { className: L().section_faq }),
            (0, E.jsx)(T, {}),
          ],
        });
      var eS = s(46909),
        eC = s.n(eS);
      let eN = (e) => {
        let { className: t, text: s, imageSrc: r, image2xSrc: a } = e;
        return (0, E.jsxs)("div", {
          className: (0, w.W)(eC().root, t),
          children: [
            (0, E.jsx)(W.Image, {
              className: eC().image,
              src: r,
              srcSet: a ? "".concat(a, " 2x") : void 0,
              fit: "cover",
              "aria-hidden": !0,
            }),
            (0, E.jsx)(Z.Caption, {
              className: eC().text,
              variant: "span",
              size: "l",
              weight: "medium",
              children: s,
            }),
          ],
        });
      };
      var eH = s(16336),
        eL = s.n(eH);
      let eA = (e) => {
        let {
          id: t,
          className: s,
          contentClassName: r,
          heading: a,
          content: n,
        } = e;
        return (0, E.jsxs)("section", {
          className: (0, w.W)(eL().root, s),
          id: t,
          children: [
            (0, E.jsx)("div", {
              className: eL().headingContainer,
              children: a,
            }),
            (0, E.jsx)("div", {
              className: (0, w.W)(eL().contentContainer, r),
              children: n,
            }),
          ],
        });
      };
      var eP = s(83607),
        eM = s.n(eP);
      let eI = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig",
          [a.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig",
        },
        eB = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig",
          [a.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig",
        },
        eT = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig",
          [a.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig",
        },
        eD = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig",
          [a.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig",
        },
        eU = (e) => {
          let { className: t, variant: s = a.RU } = e,
            r = (0, S.Eu6)();
          return (0, E.jsx)(eA, {
            className: t,
            contentClassName: eM()["content_".concat(s)],
            heading: (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(D.Icon, {
                  variant: "kinopoisk".concat(r),
                  className: eM()["logo_".concat(r.toLocaleLowerCase())],
                }),
                (0, E.jsx)(U.y, {
                  children: (0, E.jsx)(Z.Heading, {
                    variant: "h2",
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.kinopoisk-part-title",
                    }),
                  }),
                }),
              ],
            }),
            content: (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(eN, {
                  className: eM().card1,
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.kinopoisk-part-benefit-movies",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: eI[s],
                  image2xSrc: eB[s],
                }),
                (0, E.jsx)(eN, {
                  className: eM().card2,
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.kinopoisk-part-benefit-exclusive",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig",
                }),
                s === a.RU &&
                  (0, E.jsx)(eN, {
                    className: eM().card3,
                    text: (0, E.jsx)(M.Z, {
                      id: "paywall.kinopoisk-part-benefit-sport",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                    imageSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig",
                    image2xSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig",
                  }),
                (0, E.jsx)(eN, {
                  className: (0, w.W)(eM().card4, eM()["card4_".concat(s)]),
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.kinopoisk-part-benefit-channels",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: eT[s],
                  image2xSrc: eD[s],
                }),
              ],
            }),
          });
        };
      var eZ = s(74854),
        eW = s.n(eZ);
      let eF = (e) => {
        let { className: t, variant: s = a.RU } = e,
          r = (0, S.Eu6)(),
          n = (0, h.useMemo)(
            () =>
              s === a.RU
                ? (0, E.jsx)(M.Z, {
                    id: "paywall.music-part-benefit-books",
                    values: { br: "\n", nbsp: "\xa0" },
                  })
                : (0, E.jsx)(M.Z, {
                    id: "paywall.music-part-benefit-books-alternative",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
            [s],
          );
        return (0, E.jsx)(eA, {
          id: er,
          className: t,
          contentClassName: eW().content,
          heading: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(D.Icon, {
                variant: "musicLogoCenter".concat(r),
                className: eW()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, E.jsx)(U.y, {
                children: (0, E.jsx)(Z.Heading, {
                  variant: "h2",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.music-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(eN, {
                className: eW().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-recommendations",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig",
              }),
              (0, E.jsx)(eN, {
                className: eW().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-many-devices",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig",
              }),
              (0, E.jsx)(eN, {
                className: eW().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-playlists",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig",
              }),
              (0, E.jsx)(eN, {
                className: eW().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.music-part-benefit-without-internet-mobile",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig",
              }),
              (0, E.jsx)(eN, {
                className: eW().card,
                text: n,
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig",
              }),
            ],
          }),
        });
      };
      var eY = s(90858),
        eQ = s.n(eY);
      let eV = (e) => {
        let { className: t, variant: s = a.RU } = e,
          r = (0, S.Eu6)();
        return (0, E.jsx)(eA, {
          className: t,
          contentClassName: eQ()["content_".concat(s)],
          heading: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(D.Icon, {
                variant: "yandexPlus".concat(r),
                className: eQ()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, E.jsx)(U.y, {
                children: (0, E.jsx)(Z.Heading, {
                  variant: "h2",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.plus-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(eN, {
                className: eQ().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.plus-part-benefit-family",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig",
              }),
              (0, E.jsx)(eN, {
                className: eQ().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.plus-part-benefit-devices",
                  values: { br: "\n" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.67cade4deeed590a0d455116/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.67cade4beeed590a0d455115/orig",
              }),
              s === a.RU &&
                (0, E.jsxs)(E.Fragment, {
                  children: [
                    (0, E.jsx)(eN, {
                      className: eQ().card,
                      text: (0, E.jsx)(M.Z, {
                        id: "paywall.plus-part-benefit-daily",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/69699/img.66756747fda47e2147b8b480/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/49997/img.667567622f9df61336292f10/orig",
                    }),
                    (0, E.jsx)(eN, {
                      className: eQ().card,
                      text: (0, E.jsx)(M.Z, {
                        id: "paywall.plus-part-benefit-plus-city",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667567a4cc842022e134a7d2/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/2413828/img.667567bdcc842022e134a7d8/orig",
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      var ez = s(50591),
        eq = s.n(ez);
      let eK = (e) => {
        let { className: t, moreInfoLinkProps: s } = e;
        return (0, E.jsxs)("section", {
          className: (0, w.W)(eq().root, t),
          children: [
            (0, E.jsx)("div", { className: eq().image }),
            (0, E.jsxs)("div", {
              className: eq().content,
              children: [
                (0, E.jsx)(Z.Heading, {
                  className: eq().title,
                  variant: "h1",
                  size: "xl",
                  weight: "bold",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.music-on-many-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, E.jsx)(Z.Caption, {
                  variant: "div",
                  size: "l",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.recommendations-on-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, E.jsx)(eb, {
                  className: eq().buySubscriptionBlock,
                  shouldShowFixed: !0,
                }),
                (0, E.jsx)(ea, {
                  ...s,
                  className: (0, w.W)(
                    eq().moreInfoLink,
                    null == s ? void 0 : s.className,
                  ),
                }),
              ],
            }),
          ],
        });
      };
      var eG = s(68556),
        eJ = s.n(eG);
      let eX = () =>
          (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(eK, { className: eJ().topSection }),
              (0, E.jsx)(eF, { className: L().section, variant: a.BY }),
              (0, E.jsx)(eU, { className: L().section, variant: a.BY }),
              (0, E.jsx)(eV, { className: L().section, variant: a.BY }),
              (0, E.jsx)(B, { className: L().section_faq }),
              (0, E.jsx)(T, {}),
            ],
          }),
        e$ = (0, j.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, S.oR4)();
          return (0, E.jsx)("div", {
            className: P().root,
            children: e ? (0, E.jsx)(eX, {}) : (0, E.jsx)(eO, {}),
          });
        });
      var e0 = s(42348),
        e1 = s.n(e0);
      let e4 = () =>
        (0, E.jsxs)("div", {
          className: e1().root,
          children: [
            (0, E.jsx)(ej, { className: e1().topSection }),
            (0, E.jsx)(B, { className: L().section_faq }),
            (0, E.jsx)(T, {}),
          ],
        });
      var e8 = s(73524),
        e2 = s.n(e8);
      let e6 = () =>
          (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(eK, {
                className: e2().topSection,
                moreInfoLinkProps: { shouldShowLabel: !1 },
              }),
              (0, E.jsx)(B, { faqProps: { id: er } }),
              (0, E.jsx)(T, {}),
            ],
          }),
        e5 = (0, j.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, S.oR4)();
          return e ? (0, E.jsx)(e6, {}) : (0, E.jsx)(e4, {});
        });
      var e3 = s(14323),
        e9 = s.n(e3),
        e7 = s(75138),
        te = s.n(e7);
      let tt = (e) => {
        let { className: t, variant: s = a.RU } = e,
          r = (0, S.Eu6)();
        return (0, E.jsx)(q, {
          className: t,
          contentClassName: te()["content_".concat(s)],
          heading: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(D.Icon, {
                variant: "yandexBooks".concat(r),
                className: te()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, E.jsx)(U.y, {
                children: (0, E.jsx)(Z.Heading, {
                  variant: "h2",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.books-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(Q, {
                className: te().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-app-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a86148a2e22ffc42b885/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66f6a83a98264a4b59f3a744/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_READ_IN_APP),
              }),
              (0, E.jsx)(Q, {
                className: te().card,
                variant: "vertical",
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-follow-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6a89798264a4b59f3a749/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a890ed792c3f4a135a74/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_FIND_NEWS),
              }),
              (0, E.jsx)(Q, {
                className: te().card,
                variant: "vertical",
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-download-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a8c8caf72c4bc9eaea8c/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8bf4e6e980968aa844d/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_DOWNLOAD_BOOKS),
              }),
              (0, E.jsx)(Q, {
                className: te().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-speed-desktop",
                  values: { br: "\n" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8f4ed792c3f4a135a7d/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f6a8edcaf72c4bc9eaea8e/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_CHOOSE_PASE),
              }),
            ],
          }),
          ...(0, R.BA)(R.QM.paywall.PAYWALL_BOOKS_SECTION),
        });
      };
      var ts = s(99523),
        tr = s.n(ts);
      let ta = (e) => {
        let { className: t, variant: s = a.RU } = e,
          r = (0, S.Eu6)();
        return (0, E.jsx)(q, {
          className: t,
          contentClassName: tr()["content_".concat(s)],
          heading: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(D.Icon, {
                variant: "yandexPay".concat(r),
                className: tr()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, E.jsx)(U.y, {
                children: (0, E.jsx)(Z.Heading, {
                  variant: "h2",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.pay-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(Q, {
                className: tr().card,
                variant: "vertical",
                imageAlign: "right",
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.pay-part-benefit-cashback-desktop",
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2ace39790390af575a7d9/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2ace69790390af575a7da/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_GET_CASHBACK),
              }),
              (0, E.jsx)(Q, {
                className: tr().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.pay-part-benefit-card-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2aed69790390af575a7e3/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f2aec6eea0c64638348ca2/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_PAY_CARD),
              }),
              (0, E.jsx)(Q, {
                className: tr().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.pay-part-benefit-split-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2af64eea0c64638348cb2/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28592/img.66f2af4eb8a7ae33ed006ff4/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_DIVIDE_PAYMENT),
              }),
              (0, E.jsx)(Q, {
                className: tr().card,
                variant: "vertical",
                imageAlign: "right",
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.pay-part-benefit-save-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f2afb7e24668103f2e689e/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f2afaa9790390af575a7e7/orig",
                ...(0, R.BA)(R.QM.paywall.PAYWALL_SECTION_CARD_TAKE_SAVES),
              }),
            ],
          }),
          ...(0, R.BA)(R.QM.paywall.PAYWALL_PAY_SECTION),
        });
      };
      var tn = s(88017);
      function ti() {
        return (ti = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}).hasOwnProperty.call(s, r) && (e[r] = s[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var tl = function (e) {
        return tn.createElement(
          "svg",
          ti(
            {
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
            },
            e,
          ),
          n ||
            (n = tn.createElement("rect", {
              y: 0.5,
              width: 64,
              height: 64,
              rx: 32,
              fill: "#000",
            })),
          i ||
            (i = tn.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M38.6 38.021c-1.707 2.845-4.355 4.098-7.14 4.098-5.566 0-9.713-3.894-9.713-9.738v-.289c0-.275.012-.528.03-.793l24.002.037v-18.4L31.44 23.23 17.177 12.904V50.77H45.78V42.12c-2.77-.01-5.29-1.264-7.18-4.098Z",
              fill: "#fff",
            })),
          l ||
            (l = tn.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.462 38.946c2.804 0 4.52-1.442 4.747-4.69h-10.19c.447 2.925 2.716 4.69 5.443 4.69ZM40.993 34.256h10.311c-.446 2.925-2.84 4.69-5.567 4.69-2.803 0-4.519-1.442-4.744-4.69Z",
              fill: "#fff",
            })),
        );
      };
      function to() {
        return (to = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}).hasOwnProperty.call(s, r) && (e[r] = s[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var tc = function (e) {
        return tn.createElement(
          "svg",
          to(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
              fill: "none",
            },
            e,
          ),
          tn.createElement(
            "g",
            { clipPath: "url(#clip0_4165_10094)" },
            o ||
              (o = tn.createElement("rect", {
                y: 0.5,
                width: 64,
                height: 64,
                rx: 32,
                fill: "white",
              })),
            c ||
              (c = tn.createElement("path", {
                d: "M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z",
                fill: "#FCCA00",
              })),
            x ||
              (x = tn.createElement("path", {
                d: "M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z",
                fill: "#FC3F1D",
              })),
            tn.createElement(
              "mask",
              {
                id: "mask0_4165_10094",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: 0,
                y: 0,
                width: 64,
                height: 65,
              },
              d ||
                (d = tn.createElement("ellipse", {
                  cx: 32,
                  cy: 32.5,
                  rx: 32,
                  ry: 32,
                  fill: "white",
                })),
            ),
            u ||
              (u = tn.createElement("g", { mask: "url(#mask0_4165_10094)" })),
            f ||
              (f = tn.createElement(
                "g",
                { clipPath: "url(#clip1_4165_10094)" },
                tn.createElement("rect", {
                  width: 63.9999,
                  height: 63.9999,
                  transform: "translate(0 0.5)",
                  fill: "black",
                }),
                tn.createElement("path", {
                  d: "M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z",
                  fill: "url(#paint0_radial_4165_10094)",
                }),
              )),
          ),
          _ ||
            (_ = tn.createElement(
              "defs",
              null,
              tn.createElement(
                "radialGradient",
                {
                  id: "paint0_radial_4165_10094",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(19.2 10.0984) rotate(45) scale(63.3567 63.3567)",
                },
                tn.createElement("stop", { offset: 0.5, stopColor: "#FF5500" }),
                tn.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
              ),
              tn.createElement(
                "clipPath",
                { id: "clip0_4165_10094" },
                tn.createElement("rect", {
                  y: 0.5,
                  width: 64,
                  height: 64,
                  rx: 32,
                  fill: "white",
                }),
              ),
              tn.createElement(
                "clipPath",
                { id: "clip1_4165_10094" },
                tn.createElement("rect", {
                  width: 63.9999,
                  height: 63.9999,
                  fill: "white",
                  transform: "translate(0 0.5)",
                }),
              ),
            )),
        );
      };
      function tx() {
        return (tx = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}).hasOwnProperty.call(s, r) && (e[r] = s[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var td = function (e) {
        return tn.createElement(
          "svg",
          tx(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
              fill: "none",
            },
            e,
          ),
          m ||
            (m = tn.createElement("path", {
              d: "M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z",
              fill: "black",
            })),
          p ||
            (p = tn.createElement("path", {
              d: "M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z",
              fill: "#FED42B",
            })),
        );
      };
      function tu() {
        return (tu = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s)
                  ({}).hasOwnProperty.call(s, r) && (e[r] = s[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var tf = function (e) {
          return tn.createElement(
            "svg",
            tu(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 64 65",
                fill: "none",
              },
              e,
            ),
            g ||
              (g = tn.createElement(
                "g",
                { clipPath: "url(#clip0_4032_54517)" },
                tn.createElement("rect", {
                  y: 0.5,
                  width: 64,
                  height: 64,
                  rx: 32,
                  fill: "white",
                }),
                tn.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z",
                  fill: "url(#paint0_linear_4032_54517)",
                }),
              )),
            v ||
              (v = tn.createElement(
                "defs",
                null,
                tn.createElement(
                  "linearGradient",
                  {
                    id: "paint0_linear_4032_54517",
                    x1: -0.000000253254,
                    y1: 28.2333,
                    x2: 64,
                    y2: 28.2333,
                    gradientUnits: "userSpaceOnUse",
                  },
                  tn.createElement("stop", { stopColor: "#FF5C4D" }),
                  tn.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  tn.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                tn.createElement(
                  "clipPath",
                  { id: "clip0_4032_54517" },
                  tn.createElement("rect", {
                    y: 0.5,
                    width: 64,
                    height: 64,
                    rx: 32,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        t_ = s(67443),
        tm = s.n(t_);
      let tp = () =>
          (0, E.jsxs)("ul", {
            className: tm().services,
            children: [
              (0, E.jsxs)("li", {
                className: tm().service,
                children: [
                  (0, E.jsx)(td, {
                    className: tm().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, E.jsx)(Z.Heading, {
                    variant: "h2",
                    size: "m",
                    className: tm().serviceLabel,
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.plus-benefit-music",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, E.jsxs)("li", {
                className: tm().service,
                children: [
                  (0, E.jsx)(tc, {
                    className: tm().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, E.jsx)(Z.Heading, {
                    variant: "h2",
                    size: "m",
                    className: tm().serviceLabel,
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.plus-benefit-kinopoisk",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, E.jsxs)("li", {
                className: tm().service,
                children: [
                  (0, E.jsx)(tl, {
                    className: tm().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, E.jsx)(Z.Heading, {
                    variant: "h2",
                    size: "m",
                    className: tm().serviceLabel,
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.plus-benefit-books",
                      values: { br: "\n" },
                    }),
                  }),
                ],
              }),
              (0, E.jsxs)("li", {
                className: tm().service,
                children: [
                  (0, E.jsx)(tf, {
                    className: tm().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, E.jsx)(Z.Heading, {
                    variant: "h2",
                    size: "m",
                    className: tm().serviceLabel,
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.plus-benefit-cashback",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
            ],
          }),
        tg = (e) => {
          let { className: t } = e,
            {
              settings: { browserInfo: s },
            } = (0, S.oR4)(),
            r = (0, S.Eu6)(),
            a = "/pay" === (0, ed.usePathname)() && !s.isTouch;
          return (0, E.jsxs)("section", {
            className: (0, w.W)(tm().root, t),
            ...(0, R.BA)(R.QM.paywall.PAYWALL_TOP_SECTION),
            children: [
              (0, E.jsxs)("div", {
                className: tm().main,
                children: [
                  (0, E.jsx)(D.Icon, {
                    variant: "yandexPlus".concat(r),
                    className: (0, w.W)(
                      tm().logo,
                      tm()["logo_".concat(r.toLowerCase())],
                    ),
                  }),
                  (0, E.jsx)(Z.Heading, {
                    variant: "h1",
                    size: "xxxl",
                    weight: "bold",
                    className: tm().title,
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.open-plus-benefits",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                  (0, E.jsx)(tp, {}),
                  (0, E.jsx)(eb, {
                    className: tm().buySubscriptionBlock,
                    shouldShowFixed: !0,
                  }),
                  a &&
                    (0, E.jsx)(ee.r, {
                      className: tm().goHomeLink,
                      href: "/",
                      children: (0, E.jsx)(Z.Caption, {
                        variant: "span",
                        size: "m",
                        weight: "medium",
                        children: (0, E.jsx)(M.Z, { id: "navigation.go-home" }),
                      }),
                    }),
                ],
              }),
              (0, E.jsx)(ea, {
                ...(0, R.BA)(R.QM.paywall.PAYWALL_MORE_INFO_LINK),
                children: (0, E.jsx)(W.Image, {
                  src: "https://avatars.mds.yandex.net/get-music-misc/2419084/img.67efe27cc9b2085251cda06d/orig",
                  srcSet:
                    "https://avatars.mds.yandex.net/get-music-misc/2419084/img.67efe27cc9b2085251cda06e/orig",
                  fit: "contain",
                  className: tm().moreInfoChildren,
                  "aria-hidden": !0,
                  ...(0, R.BA)(R.QM.paywall.PAYWALL_MORE_INFO_LINK),
                }),
              }),
            ],
          });
        },
        tv = () =>
          (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(tg, {}),
              (0, E.jsx)(el, { className: L().section }),
              (0, E.jsx)($, { className: L().section }),
              (0, E.jsx)(tt, { className: L().section }),
              (0, E.jsx)(ta, { className: L().section }),
              (0, E.jsx)(ex, { className: L().section }),
              (0, E.jsx)(B, { className: L().section_faq }),
              (0, E.jsx)(T, {}),
            ],
          });
      var ty = s(98366),
        tk = s.n(ty);
      let tb = (e) => {
        let { className: t, variant: s = a.RU } = e,
          r = (0, S.Eu6)();
        return (0, E.jsx)(eA, {
          className: t,
          contentClassName: tk()["content_".concat(s)],
          heading: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(D.Icon, {
                variant: "yandexBooks".concat(r),
                className: tk()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, E.jsx)(U.y, {
                children: (0, E.jsx)(Z.Heading, {
                  variant: "h2",
                  children: (0, E.jsx)(M.Z, {
                    id: "paywall.books-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(eN, {
                className: tk().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-switch-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac74caf72c4bc9eaeaa3/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66f6ac6dcaf72c4bc9eaeaa1/orig",
              }),
              (0, E.jsx)(eN, {
                className: tk().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-read-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6ac99ed792c3f4a135afd/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28592/img.66f6ac924e6e980968aa8463/orig",
              }),
              (0, E.jsx)(eN, {
                className: tk().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-download-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6aca698264a4b59f3a7be/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac9fcaf72c4bc9eaeaab/orig",
              }),
              (0, E.jsx)(eN, {
                className: tk().card,
                text: (0, E.jsx)(M.Z, {
                  id: "paywall.books-part-benefit-speed-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac8ccaf72c4bc9eaeaa9/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac8348a2e22ffc42b923/orig",
              }),
            ],
          }),
        });
      };
      var tE = s(69888),
        tw = s.n(tE);
      let tj = (e) => {
          let { className: t, variant: s = a.RU } = e,
            r = (0, S.Eu6)();
          return (0, E.jsx)(eA, {
            className: t,
            contentClassName: tw()["content_".concat(s)],
            heading: (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(D.Icon, {
                  variant: "yandexPay".concat(r),
                  className: tw()["logo_".concat(r.toLocaleLowerCase())],
                }),
                (0, E.jsx)(U.y, {
                  children: (0, E.jsx)(Z.Heading, {
                    variant: "h2",
                    children: (0, E.jsx)(M.Z, {
                      id: "paywall.pay-part-title",
                      values: { nbsp: "\xa0" },
                    }),
                  }),
                }),
              ],
            }),
            content: (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(eN, {
                  className: tw().card,
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.pay-part-benefit-cashback-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.66f40cdd04aef147641ea0c6/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66f407fa8b154b444e5fa993/orig",
                }),
                (0, E.jsx)(eN, {
                  className: tw().card,
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.pay-part-benefit-card-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66f678ce1d3e3f703308e7f7/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.66f678b68d7da81c86b85286/orig",
                }),
                (0, E.jsx)(eN, {
                  className: tw().card,
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.pay-part-benefit-split-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f4106f04202b0283a10cbb/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/34161/img.66f410678b154b444e5fa9d7/orig",
                }),
                (0, E.jsx)(eN, {
                  className: tw().card,
                  text: (0, E.jsx)(M.Z, {
                    id: "paywall.pay-part-benefit-save-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f411b221428b6d37711b87/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f411aa21428b6d37711b85/orig",
                }),
              ],
            }),
          });
        },
        th = () =>
          (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(tg, {}),
              (0, E.jsx)(eF, { className: L().section }),
              (0, E.jsx)(eU, { className: L().section }),
              (0, E.jsx)(tb, { className: L().section }),
              (0, E.jsx)(tj, { className: L().section }),
              (0, E.jsx)(eV, { className: L().section }),
              (0, E.jsx)(B, { className: L().section_faq }),
              (0, E.jsx)(T, {}),
            ],
          }),
        tR = (0, j.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, S.oR4)();
          return (0, E.jsx)("div", {
            className: e9().root,
            children: e ? (0, E.jsx)(th, {}) : (0, E.jsx)(tv, {}),
          });
        }),
        tO = {
          [a.RU]: (0, E.jsx)(tR, {}),
          [a.BY]: (0, E.jsx)(e$, {}),
          [a.OTHER]: (0, E.jsx)(e5, {}),
        },
        tS = (0, j.Pi)((e) => {
          let { useOverlayScroll: t = !0 } = e,
            { user: s } = (0, S.oR4)(),
            r = (0, h.useMemo)(
              () =>
                (0, E.jsx)("div", {
                  "data-buy-subscription-block-portal": !0,
                  className: L().root,
                  ...(0, R.BA)(R.QM.paywall.PAYWALL),
                  children: tO[N(s.account.data.geoRegionIso)],
                }),
              [s.account.data.geoRegionIso],
            );
          return t
            ? (0, E.jsx)(O.S, {
                className: (0, w.W)(L().overlayScroll, {
                  [L().overlayScroll_desktop]: !0,
                }),
                children: r,
              })
            : r;
        });
      var tC = s(9317),
        tN = s(59506),
        tH = s(68122),
        tL = s.n(tH);
      let tA = (0, j.Pi)(() => {
        let {
            paywall: { modal: e },
          } = (0, S.oR4)(),
          { formatMessage: t } = (0, tC.Z)(),
          s = (0, S.R$C)();
        return (
          (0, h.useEffect)(() => {
            e.isOpened && (null == s || s.pause());
          }, [e.isOpened, s, !0]),
          (0, E.jsxs)(tN.u, {
            open: e.isOpened,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            onClose: e.close,
            onOpenChange: e.onOpenChange,
            closeOnOutsidePress: !1,
            className: tL().root,
            contentClassName: tL().content,
            overlayColor: "full",
            ...(0, R.BA)(R.QM.paywallModal.PAYWALL_MODAL),
            children: [
              (0, E.jsx)("header", {
                className: tL().header,
                children: (0, E.jsx)(em.Button, {
                  radius: "round",
                  color: "secondary",
                  size: "xxs",
                  icon: (0, E.jsx)(D.Icon, { variant: "close", size: "xxs" }),
                  className: tL().closeButton,
                  onClick: e.close,
                  "aria-label": t({ id: "interface-actions.close" }),
                  ...(0, R.BA)(R.QM.paywallModal.PAYWALL_MODAL_CLOSE_BUTTON),
                }),
              }),
              (0, E.jsx)(tS, {}),
            ],
          })
        );
      });
    },
    27169: function (e) {
      e.exports = { button: "OfflineUserProfile_button__OJntz" };
    },
    97812: function (e) {
      e.exports = {
        root: "UserIcon_root__X0jg9",
        root_withPlus: "UserIcon_root_withPlus__pRhgW",
        avatar: "UserIcon_avatar__6_6av",
      };
    },
    65102: function (e) {
      e.exports = {
        root: "UserProfile_root__vFuOj",
        userId: "UserProfile_userId__Jb6Ix",
        dialog: "UserProfile_dialog__kQ8sz",
        dialog_desktop: "UserProfile_dialog_desktop__0p006",
        meta: "UserProfile_meta___okny",
        plusLink: "UserProfile_plusLink__NhVsU",
        userName: "UserProfile_userName__PTRuJ",
      };
    },
    75138: function (e) {
      e.exports = {
        content_ru: "BooksSectionDesktop_content_ru__Yauyu",
        content_by: "BooksSectionDesktop_content_by___eqCQ",
        card: "BooksSectionDesktop_card__blMRo",
        logo_ru: "BooksSectionDesktop_logo_ru__SRY4d",
        logo_en: "BooksSectionDesktop_logo_en__Szpr_",
      };
    },
    98366: function (e) {
      e.exports = {
        content_ru: "BooksSectionMobile_content_ru__xiiQh",
        content_by: "BooksSectionMobile_content_by__t_UNK",
        card: "BooksSectionMobile_card__t6bb7",
        logo_ru: "BooksSectionMobile_logo_ru__cnYJJ",
        logo_en: "BooksSectionMobile_logo_en__wcgiD",
      };
    },
    53382: function (e) {
      e.exports = {
        root: "BuySubscriptionBlock_root__vcGLK",
        text_main: "BuySubscriptionBlock_text_main__fU5RA",
        text_addition: "BuySubscriptionBlock_text_addition__bbHYT",
        text_secondary: "BuySubscriptionBlock_text_secondary__ZT9ke",
        button: "BuySubscriptionBlock_button__EqUAg",
        stickyContainer: "BuySubscriptionBlock_stickyContainer__yA50y",
        stickyContainer_enter:
          "BuySubscriptionBlock_stickyContainer_enter__50hEo",
        stickyContainer_enter_active:
          "BuySubscriptionBlock_stickyContainer_enter_active__4vFVC",
        "animation-show": "BuySubscriptionBlock_animation-show__xlvuU",
        stickyContainer_exit:
          "BuySubscriptionBlock_stickyContainer_exit__9Axef",
        stickyContainer_exit_active:
          "BuySubscriptionBlock_stickyContainer_exit_active__HjXVn",
        "animation-hide": "BuySubscriptionBlock_animation-hide__gnUki",
      };
    },
    90004: function (e) {
      e.exports = {
        content_ru: "KinopoiskSectionDesktop_content_ru__gILD5",
        content_by: "KinopoiskSectionDesktop_content_by__31QvZ",
        card1: "KinopoiskSectionDesktop_card1__nlqOH",
        card2: "KinopoiskSectionDesktop_card2__ZMW4Z",
        card3: "KinopoiskSectionDesktop_card3__n9_1i",
        card4: "KinopoiskSectionDesktop_card4__TpOZ7",
        logo_ru: "KinopoiskSectionDesktop_logo_ru__f6OLB",
        logo_en: "KinopoiskSectionDesktop_logo_en__2oXnD",
      };
    },
    83607: function (e) {
      e.exports = {
        content_ru: "KinopoiskSectionMobile_content_ru__CCtkX",
        content_by: "KinopoiskSectionMobile_content_by__XjQaB",
        card1: "KinopoiskSectionMobile_card1__JCIyK",
        card2: "KinopoiskSectionMobile_card2__jTtnr",
        card3: "KinopoiskSectionMobile_card3__wTJCh",
        card4: "KinopoiskSectionMobile_card4__wi_RO",
        card4_by: "KinopoiskSectionMobile_card4_by__8ehWE",
        logo_ru: "KinopoiskSectionMobile_logo_ru__8alc5",
        logo_en: "KinopoiskSectionMobile_logo_en__A673z",
      };
    },
    17973: function (e) {
      e.exports = {
        root: "MainCardDesktop_root__qa00U",
        root_horizontal: "MainCardDesktop_root_horizontal__Fy_E0",
        textContainer: "MainCardDesktop_textContainer__mzWGu",
        imageContainer: "MainCardDesktop_imageContainer__81MQy",
        image: "MainCardDesktop_image__nUJz3",
        root_vertical: "MainCardDesktop_root_vertical__KGeJ2",
        imageContainer_align_center:
          "MainCardDesktop_imageContainer_align_center__kEU_O",
        imageContainer_align_right:
          "MainCardDesktop_imageContainer_align_right__T12Qo",
        text: "MainCardDesktop_text__omw7l",
      };
    },
    46909: function (e) {
      e.exports = {
        root: "MainCardMobile_root__AXTwk",
        image: "MainCardMobile_image__DZHrE",
        text: "MainCardMobile_text__rli4d",
      };
    },
    3857: function (e) {
      e.exports = {
        root: "MainSectionDesktop_root__MjgTL",
        headingContainer: "MainSectionDesktop_headingContainer__IaoRT",
        contentContainer: "MainSectionDesktop_contentContainer__L4OlR",
      };
    },
    16336: function (e) {
      e.exports = {
        root: "MainSectionMobile_root__l2R5l",
        headingContainer: "MainSectionMobile_headingContainer__6mJvx",
        contentContainer: "MainSectionMobile_contentContainer__vmaD5",
      };
    },
    77559: function (e) {
      e.exports = {
        root: "MoreInfoLink_root___TgXc",
        content: "MoreInfoLink_content__Rjqj_",
      };
    },
    34875: function (e) {
      e.exports = {
        content: "MusicSectionDesktop_content__uCWAp",
        card: "MusicSectionDesktop_card__YurZs",
        logo_ru: "MusicSectionDesktop_logo_ru__Tiwfx",
        logo_en: "MusicSectionDesktop_logo_en__dbYCi",
      };
    },
    74854: function (e) {
      e.exports = {
        content: "MusicSectionMobile_content__lAARM",
        card: "MusicSectionMobile_card__f5Xnr",
        logo_ru: "MusicSectionMobile_logo_ru__itG4j",
        logo_en: "MusicSectionMobile_logo_en__Tv2yd",
      };
    },
    99523: function (e) {
      e.exports = {
        content_ru: "PaySectionDesktop_content_ru__cR8My",
        content_by: "PaySectionDesktop_content_by__Fwlsi",
        card: "PaySectionDesktop_card__ivLUK",
        logo_ru: "PaySectionDesktop_logo_ru__A_QJS",
        logo_en: "PaySectionDesktop_logo_en__hRe0d",
      };
    },
    69888: function (e) {
      e.exports = {
        content_ru: "PaySectionMobile_content_ru__BMMo8",
        content_by: "PaySectionMobile_content_by__MY5lW",
        card: "PaySectionMobile_card__7M173",
        logo_ru: "PaySectionMobile_logo_ru__G7Bw4",
        logo_en: "PaySectionMobile_logo_en__pRLH8",
      };
    },
    68837: function (e) {
      e.exports = {
        root: "Paywall_root__XE_NC",
        section: "Paywall_section__Y30nd",
        section_faq: "Paywall_section_faq__43qaB",
        overlayScroll_desktop: "Paywall_overlayScroll_desktop__P46WF",
      };
    },
    92653: function (e) {
      e.exports = { root: "PaywallBY_root__XMtUB" };
    },
    32373: function (e) {
      e.exports = { topSection: "PaywallBYDesktop_topSection__AS3Pv" };
    },
    68556: function (e) {
      e.exports = { topSection: "PaywallBYMobile_topSection__sQ_sw" };
    },
    42348: function (e) {
      e.exports = {
        root: "PaywallOtherDesktop_root__c19Ht",
        topSection: "PaywallOtherDesktop_topSection__d1CVV",
      };
    },
    73524: function (e) {
      e.exports = { topSection: "PaywallOtherMobile_topSection__Pscnw" };
    },
    14323: function (e) {
      e.exports = { root: "PaywallRU_root__X8j2f" };
    },
    67443: function (e) {
      e.exports = {
        root: "TopSectionRU_root__DP9u2",
        main: "TopSectionRU_main__PbltM",
        logo: "TopSectionRU_logo__LgT8M",
        moreInfoChildren: "TopSectionRU_moreInfoChildren__d82Ha",
        title: "TopSectionRU_title__csPE2",
        services: "TopSectionRU_services__cmjFp",
        service: "TopSectionRU_service__Q0dCS",
        serviceLogo: "TopSectionRU_serviceLogo___Xpo_",
        serviceLabel: "TopSectionRU_serviceLabel__Q3O8n",
        buySubscriptionBlock: "TopSectionRU_buySubscriptionBlock__VBGT5",
        goHomeLink: "TopSectionRU_goHomeLink__zWv2w",
      };
    },
    91911: function (e) {
      e.exports = {
        content_ru: "PlusSectionDesktop_content_ru__85q1P",
        content_by: "PlusSectionDesktop_content_by__UBg10",
        card: "PlusSectionDesktop_card__h8LmR",
        logo_ru: "PlusSectionDesktop_logo_ru__G2AkZ",
        logo_en: "PlusSectionDesktop_logo_en__gn4qE",
      };
    },
    90858: function (e) {
      e.exports = {
        content_ru: "PlusSectionMobile_content_ru__OvJV0",
        content_by: "PlusSectionMobile_content_by__d5iGm",
        card: "PlusSectionMobile_card__QbwGe",
        logo_ru: "PlusSectionMobile_logo_ru___FFew",
        logo_en: "PlusSectionMobile_logo_en__u_HSO",
      };
    },
    61876: function (e) {
      e.exports = {
        root: "TopSectionDesktop_root__lDNkV",
        wrapper: "TopSectionDesktop_wrapper__sEPZr",
        content: "TopSectionDesktop_content__356Uk",
        title: "TopSectionDesktop_title__JFo6R",
        label: "TopSectionDesktop_label__JmilG",
        buySubscriptionBlock: "TopSectionDesktop_buySubscriptionBlock__dhv3Z",
      };
    },
    50591: function (e) {
      e.exports = {
        root: "TopSectionMobile_root__bl_XJ",
        image: "TopSectionMobile_image__t_hCH",
        content: "TopSectionMobile_content__sqstr",
        title: "TopSectionMobile_title__O_Zx0",
        buySubscriptionBlock: "TopSectionMobile_buySubscriptionBlock__NSVnY",
        moreInfoLink: "TopSectionMobile_moreInfoLink__zjcOO",
      };
    },
    68122: function (e) {
      e.exports = {
        root: "PaywallModal_root__HIYOy",
        header: "PaywallModal_header__3oCYF",
        closeButton: "PaywallModal_closeButton__rkLNM",
        content: "PaywallModal_content__mVxnz",
      };
    },
  },
]);
