(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3477],
    {
        1673: (e) => {
            e.exports = {
                root: "PlusNavbarButton_root__kdY04",
                plusButtonShimmer: "PlusNavbarButton_plusButtonShimmer__6t1go",
            };
        },
        3981: (e) => {
            e.exports = {
                root: "PaywallModal_root__HIYOy",
                header: "PaywallModal_header__3oCYF",
                closeButton: "PaywallModal_closeButton__rkLNM",
                content: "PaywallModal_content__mVxnz",
            };
        },
        10129: (e) => {
            e.exports = {
                root: "Paywall_root__XE_NC",
                section: "Paywall_section__Y30nd",
                section_faq: "Paywall_section_faq__43qaB",
                overlayScroll_desktop: "Paywall_overlayScroll_desktop__P46WF",
            };
        },
        10876: (e) => {
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
        23212: (e) => {
            e.exports = {
                content_ru: "BooksSectionMobile_content_ru__xiiQh",
                content_by: "BooksSectionMobile_content_by__t_UNK",
                card: "BooksSectionMobile_card__t6bb7",
                logo_ru: "BooksSectionMobile_logo_ru__cnYJJ",
                logo_en: "BooksSectionMobile_logo_en__wcgiD",
            };
        },
        27379: (e) => {
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
        28959: (e) => {
            e.exports = {
                content: "MusicSectionMobile_content__lAARM",
                card: "MusicSectionMobile_card__f5Xnr",
                logo_ru: "MusicSectionMobile_logo_ru__itG4j",
                logo_en: "MusicSectionMobile_logo_en__Tv2yd",
            };
        },
        34944: (e, t, s) => {
            "use strict";
            s.d(t, { ny: () => g, Fv: () => u, YS: () => F });
            var r = s(41028),
                a = s(59615);
            let n = r.gK.model({
                    uid: r.gK.maybe(r.gK.number),
                    hasPlus: r.gK.maybe(r.gK.boolean),
                    login: r.gK.maybe(r.gK.string),
                    avatarId: r.gK.maybe(r.gK.string),
                    isChild: r.gK.maybe(r.gK.boolean),
                    publicId: r.gK.maybe(r.gK.string),
                    publicName: r.gK.maybe(r.gK.string),
                    userSessionRegionIso: r.gK.maybe(r.gK.string),
                    geoRegionIso: r.gK.maybe(r.gK.string),
                    serviceAvailable: r.gK.maybe(r.gK.boolean),
                }),
                i = r.gK.compose(r.gK.model("Account", { data: n }), a.XT);
            var l = s(79169);
            let o = (e) =>
                    (0, r.wg)({
                        loadingState: l.GuX.RESOLVE,
                        showWizard: !e.wizardIsPassed,
                        userCollectionHue: e.userCollectionHue,
                        isChildModeEnabled: !!e.childModEnabled,
                    }),
                c = r.gK.compose(
                    r.gK.model("Settings", {
                        showWizard: r.gK.optional(r.gK.boolean, !0),
                        userCollectionHue: r.gK.maybe(r.gK.number),
                        isChildModeEnabled: r.gK.optional(r.gK.boolean, !1),
                    }),
                    a.XT,
                ),
                u = r.gK
                    .model("User", {
                        account: i,
                        settings: c,
                        userCollectionHue: r.gK.maybe(r.gK.number),
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
                            return (
                                e.userCollectionHue ||
                                e.settings.userCollectionHue
                            );
                        },
                        get isServiceAvailable() {
                            var t;
                            return (
                                null == (t = e.account.data.serviceAvailable) ||
                                t
                            );
                        },
                        get advertRole() {
                            if (!this.isAuthorized) return l.Zxe.UNAUTHORIZED;
                            if (this.hasPlus) return l.Zxe.PLUS;
                            return l.Zxe.NON_PLUS;
                        },
                    }))
                    .actions((e) => ({
                        getAbout: (0, r.L3)(function* (t) {
                            let {
                                accountResource: s,
                                modelActionsLogger: a,
                                containerStorage: n,
                            } = (0, r._$)(e);
                            if (!e.account.isLoading)
                                try {
                                    let a;
                                    e.account.loadingState = l.GuX.PENDING;
                                    let i = t;
                                    i || (i = yield s.about()),
                                        n.set(l.cYZ.YmUid, i.uid),
                                        (e.account.data =
                                            ((a = i),
                                            (0, r.wg)({
                                                uid: a.uid,
                                                login: a.login,
                                                avatarId: a.avatarId,
                                                hasPlus: a.hasPlus,
                                                publicId: a.publicId,
                                                publicName: a.publicName,
                                                isChild: a.isChild,
                                                userSessionRegionIso:
                                                    a.userSessionRegionIso,
                                                geoRegionIso: a.geoRegionIso,
                                                serviceAvailable:
                                                    a.serviceAvailable,
                                            }))),
                                        (e.account.loadingState =
                                            l.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t),
                                        (e.account.loadingState = l.GuX.REJECT);
                                }
                        }),
                        getSettings: (0, r.L3)(function* () {
                            let { accountResource: t, modelActionsLogger: s } =
                                (0, r._$)(e);
                            if (e.settings.loadingState !== l.GuX.PENDING)
                                try {
                                    e.settings.loadingState = l.GuX.PENDING;
                                    let s = yield t.settings();
                                    e.settings = o(s);
                                } catch (t) {
                                    s.error(t),
                                        (e.settings.showWizard = !1),
                                        (e.settings.loadingState =
                                            l.GuX.REJECT);
                                }
                        }),
                        setSettings: (0, r.L3)(function* (t) {
                            let { isChildModeEnabled: s } = t,
                                { accountResource: a, modelActionsLogger: n } =
                                    (0, r._$)(e);
                            try {
                                e.settings.isChildModeEnabled = s;
                                let t = yield a.settings({
                                    childModEnabled: s,
                                });
                                if (
                                    ((e.settings = o(t)),
                                    t.childModEnabled !== s)
                                )
                                    return l.FlZ.ERROR;
                                return l.FlZ.OK;
                            } catch (e) {
                                return n.error(e), l.FlZ.ERROR;
                            }
                        }),
                        setUnauthorized: () => {
                            e.account.loadingState = l.GuX.RESOLVE;
                        },
                        setUserCollectionHue: (t) => {
                            e.userCollectionHue = t;
                        },
                    }));
            var d = s(33008),
                x = s(85896),
                f = s(52756);
            let _ = { src: "/_next/static/media/avatar.e9a40453.png" };
            var m = s(72680),
                p = s.n(m);
            let g = (e) => {
                let {
                    className: t,
                    hasPlus: s,
                    avatarSrc: r = _.src,
                    ...a
                } = e;
                return (0, d.jsx)("div", {
                    className: (0, x.$)(
                        p().root,
                        { [p().root_withPlus]: s },
                        t,
                    ),
                    ...a,
                    children: (0, d.jsx)(f.Image, {
                        src: r,
                        fit: "cover",
                        className: p().avatar,
                    }),
                });
            };
            var v = s(21789),
                b = s(97531),
                k = s(66268),
                y = s.t(k, 2),
                E = s(96560),
                h = s(30293),
                j = s(42213),
                w = {
                    5881: (e, t, s) => {
                        function r() {
                            for (
                                var e, t, s = 0, r = "";
                                s < arguments.length;

                            )
                                (e = arguments[s++]) &&
                                    (t = (function e(t) {
                                        var s,
                                            r,
                                            a = "";
                                        if (
                                            "string" == typeof t ||
                                            "number" == typeof t
                                        )
                                            a += t;
                                        else if ("object" == typeof t)
                                            if (Array.isArray(t))
                                                for (s = 0; s < t.length; s++)
                                                    t[s] &&
                                                        (r = e(t[s])) &&
                                                        (a && (a += " "),
                                                        (a += r));
                                            else
                                                for (s in t)
                                                    t[s] &&
                                                        (a && (a += " "),
                                                        (a += s));
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
                    7327: (e, t) => {
                        var s = Symbol.for("react.transitional.element");
                        function r(e, t, r) {
                            var a = null;
                            if (
                                (void 0 !== r && (a = "" + r),
                                void 0 !== t.key && (a = "" + t.key),
                                "key" in t)
                            )
                                for (var n in ((r = {}), t))
                                    "key" !== n && (r[n] = t[n]);
                            else r = t;
                            return {
                                $$typeof: s,
                                type: e,
                                key: a,
                                ref: void 0 !== (t = r.ref) ? t : null,
                                props: r,
                            };
                        }
                        (t.Fragment = Symbol.for("react.fragment")),
                            (t.jsx = r),
                            (t.jsxs = r);
                    },
                    1082: (e, t, s) => {
                        e.exports = s(7327);
                    },
                    8442: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "addToPlaylist_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#addToPlaylist_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    6644: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "add_l",
                                        xlinkHref: "/icons/sprite.svg#add_l",
                                    }),
                                ],
                            );
                        });
                    },
                    7319: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "add_xxs",
                                        xlinkHref: "/icons/sprite.svg#add_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9351: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "adult_s",
                                        xlinkHref: "/icons/sprite.svg#adult_s",
                                    }),
                                ],
                            );
                        });
                    },
                    7171: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "adult_xs",
                                        xlinkHref: "/icons/sprite.svg#adult_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    2586: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "adult_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#adult_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    4656: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "adult_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#adult_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    996: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "album_l",
                                        xlinkHref: "/icons/sprite.svg#album_l",
                                    }),
                                ],
                            );
                        });
                    },
                    2092: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "album_s",
                                        xlinkHref: "/icons/sprite.svg#album_s",
                                    }),
                                ],
                            );
                        });
                    },
                    6304: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "album_xl",
                                        xlinkHref: "/icons/sprite.svg#album_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    9030: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "album_xs",
                                        xlinkHref: "/icons/sprite.svg#album_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    5822: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "album_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#album_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9422: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "arrowDown_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#arrowDown_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    5272: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "arrowDown_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#arrowDown_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    1491: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "arrowLeft_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#arrowLeft_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    4860: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "arrowLeft_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#arrowLeft_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    2337: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "arrowRight_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#arrowRight_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    8711: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "arrowRight_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#arrowRight_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8170: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "arrowRight_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#arrowRight_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8109: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "artist_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#artist_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7341: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "attention_xxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#attention_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    2435: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "attention_xxxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#attention_xxxl",
                                    }),
                                ],
                            );
                        });
                    },
                    3918: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "bandlink",
                                        xlinkHref: "/icons/sprite.svg#bandlink",
                                    }),
                                ],
                            );
                        });
                    },
                    2571: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "booksLogo",
                                        xlinkHref:
                                            "/icons/sprite.svg#booksLogo",
                                    }),
                                ],
                            );
                        });
                    },
                    4904: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "bucket_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#bucket_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9202: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "cast_xs",
                                        xlinkHref: "/icons/sprite.svg#cast_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    130: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "chain_xs",
                                        xlinkHref: "/icons/sprite.svg#chain_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    5971: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "chain_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#chain_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3331: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "chartDown_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#chartDown_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9783: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "chartNew_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#chartNew_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8184: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "chartSame_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#chartSame_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    4926: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "chartUp_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#chartUp_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9505: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "check_xxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#check_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    3176: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "check_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#check_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5565: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "check_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#check_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9040: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "clip_xl",
                                        xlinkHref: "/icons/sprite.svg#clip_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    4789: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "clip_xxs",
                                        xlinkHref: "/icons/sprite.svg#clip_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7923: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "close_xs",
                                        xlinkHref: "/icons/sprite.svg#close_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    8151: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "close_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#close_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8127: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "close_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#close_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8690: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "code_xxs",
                                        xlinkHref: "/icons/sprite.svg#code_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3076: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "collections_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#collections_m",
                                    }),
                                ],
                            );
                        });
                    },
                    2495: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "collections_selected_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#collections_selected_m",
                                    }),
                                ],
                            );
                        });
                    },
                    1524: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "crown_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#crown_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    1162: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "dislike_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#dislike_s",
                                    }),
                                ],
                            );
                        });
                    },
                    3654: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "dislike_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#dislike_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    2361: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "dislike_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#dislike_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    6837: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "disliked_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#disliked_s",
                                    }),
                                ],
                            );
                        });
                    },
                    6507: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "disliked_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#disliked_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    3972: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "disliked_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#disliked_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8993: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "donation_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#donation_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7031: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "download_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#download_l",
                                    }),
                                ],
                            );
                        });
                    },
                    9330: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "download_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#download_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7346: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "downloaded_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#downloaded_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    2604: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "dragDots_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#dragDots_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    6894: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "edit_xxs",
                                        xlinkHref: "/icons/sprite.svg#edit_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    2024: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "exclamation_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#exclamation_s",
                                    }),
                                ],
                            );
                        });
                    },
                    3193: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "exclamation_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#exclamation_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    6391: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "exclamation_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#exclamation_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    2933: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "exclamation_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#exclamation_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    776: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "explicit_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#explicit_s",
                                    }),
                                ],
                            );
                        });
                    },
                    30: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "explicit_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#explicit_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    9369: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "explicit_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#explicit_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    1334: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "explicit_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#explicit_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    226: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "eye_crossed_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#eye_crossed_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7802: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "filter_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#filter_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    8130: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "filter_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#filter_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3738: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "fullscreen_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#fullscreen_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    2161: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "googlePlay",
                                        xlinkHref:
                                            "/icons/sprite.svg#googlePlay",
                                    }),
                                ],
                            );
                        });
                    },
                    9509: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "history_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#history_m",
                                    }),
                                ],
                            );
                        });
                    },
                    8987: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "home_m",
                                        xlinkHref: "/icons/sprite.svg#home_m",
                                    }),
                                ],
                            );
                        });
                    },
                    190: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "home_selected_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#home_selected_m",
                                    }),
                                ],
                            );
                        });
                    },
                    5304: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "huaweiAppGallery",
                                        xlinkHref:
                                            "/icons/sprite.svg#huaweiAppGallery",
                                    }),
                                ],
                            );
                        });
                    },
                    5270: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "info_xxs",
                                        xlinkHref: "/icons/sprite.svg#info_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    843: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "kids_m",
                                        xlinkHref: "/icons/sprite.svg#kids_m",
                                    }),
                                ],
                            );
                        });
                    },
                    5122: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "kids_selected_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#kids_selected_m",
                                    }),
                                ],
                            );
                        });
                    },
                    2646: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "kinopoiskEn",
                                        xlinkHref:
                                            "/icons/sprite.svg#kinopoiskEn",
                                    }),
                                ],
                            );
                        });
                    },
                    7500: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "kinopoiskRu",
                                        xlinkHref:
                                            "/icons/sprite.svg#kinopoiskRu",
                                    }),
                                ],
                            );
                        });
                    },
                    3560: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "lightning_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#lightning_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9838: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "likeVariant_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#likeVariant_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    4793: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "like_l",
                                        xlinkHref: "/icons/sprite.svg#like_l",
                                    }),
                                ],
                            );
                        });
                    },
                    7405: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "like_m",
                                        xlinkHref: "/icons/sprite.svg#like_m",
                                    }),
                                ],
                            );
                        });
                    },
                    2340: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "like_xs",
                                        xlinkHref: "/icons/sprite.svg#like_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    7513: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "like_xxs",
                                        xlinkHref: "/icons/sprite.svg#like_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5720: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "likedVariant_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#likedVariant_s",
                                    }),
                                ],
                            );
                        });
                    },
                    7399: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "likedVariant_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#likedVariant_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    820: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "liked_m",
                                        xlinkHref: "/icons/sprite.svg#liked_m",
                                    }),
                                ],
                            );
                        });
                    },
                    2125: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "liked_xs",
                                        xlinkHref: "/icons/sprite.svg#liked_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    9104: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "liked_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#liked_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5849: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "link_xxs",
                                        xlinkHref: "/icons/sprite.svg#link_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    1426: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "listen_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#listen_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    4014: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "liteVersion_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#liteVersion_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    5443: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "lock_m",
                                        xlinkHref: "/icons/sprite.svg#lock_m",
                                    }),
                                ],
                            );
                        });
                    },
                    896: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "lock_xs",
                                        xlinkHref: "/icons/sprite.svg#lock_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    3613: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "lock_xxs",
                                        xlinkHref: "/icons/sprite.svg#lock_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9372: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "lyrics_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#lyrics_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    6104: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "macos",
                                        xlinkHref: "/icons/sprite.svg#macos",
                                    }),
                                ],
                            );
                        });
                    },
                    3709: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "macos_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#macos_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3685: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "menuArrow_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#menuArrow_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8782: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "more_m",
                                        xlinkHref: "/icons/sprite.svg#more_m",
                                    }),
                                ],
                            );
                        });
                    },
                    1829: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "more_xs",
                                        xlinkHref: "/icons/sprite.svg#more_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    3302: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "more_xxs",
                                        xlinkHref: "/icons/sprite.svg#more_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    2502: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "musicLogo",
                                        xlinkHref:
                                            "/icons/sprite.svg#musicLogo",
                                    }),
                                ],
                            );
                        });
                    },
                    1754: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "musicLogoCenterEn",
                                        xlinkHref:
                                            "/icons/sprite.svg#musicLogoCenterEn",
                                    }),
                                ],
                            );
                        });
                    },
                    6615: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "musicLogoCenterRu",
                                        xlinkHref:
                                            "/icons/sprite.svg#musicLogoCenterRu",
                                    }),
                                ],
                            );
                        });
                    },
                    7942: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "musicLogoLeftEn",
                                        xlinkHref:
                                            "/icons/sprite.svg#musicLogoLeftEn",
                                    }),
                                ],
                            );
                        });
                    },
                    1498: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "musicLogoLeftRu",
                                        xlinkHref:
                                            "/icons/sprite.svg#musicLogoLeftRu",
                                    }),
                                ],
                            );
                        });
                    },
                    1084: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "next_xs",
                                        xlinkHref: "/icons/sprite.svg#next_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    4483: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "next_xxl",
                                        xlinkHref: "/icons/sprite.svg#next_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    811: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "next_xxs",
                                        xlinkHref: "/icons/sprite.svg#next_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7252: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "non_music_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#non_music_m",
                                    }),
                                ],
                            );
                        });
                    },
                    3013: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "non_music_selected_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#non_music_selected_m",
                                    }),
                                ],
                            );
                        });
                    },
                    2774: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "note_s",
                                        xlinkHref: "/icons/sprite.svg#note_s",
                                    }),
                                ],
                            );
                        });
                    },
                    4298: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "note_xl",
                                        xlinkHref: "/icons/sprite.svg#note_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    4254: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "note_xs",
                                        xlinkHref: "/icons/sprite.svg#note_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    8499: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "offline_xxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#offline_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    4997: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pauseVibe_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#pauseVibe_s",
                                    }),
                                ],
                            );
                        });
                    },
                    7076: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_filled_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#pause_filled_l",
                                    }),
                                ],
                            );
                        });
                    },
                    3792: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_filled_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#pause_filled_m",
                                    }),
                                ],
                            );
                        });
                    },
                    5132: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_filled_xl",
                                        xlinkHref:
                                            "/icons/sprite.svg#pause_filled_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    8131: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_filled_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#pause_filled_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    6544: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_filled_xxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#pause_filled_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    5346: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_m",
                                        xlinkHref: "/icons/sprite.svg#pause_m",
                                    }),
                                ],
                            );
                        });
                    },
                    792: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_xs",
                                        xlinkHref: "/icons/sprite.svg#pause_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    6122: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pause_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#pause_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5386: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pencil_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#pencil_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3146: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "picture_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#picture_s",
                                    }),
                                ],
                            );
                        });
                    },
                    8868: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "picture_xl",
                                        xlinkHref:
                                            "/icons/sprite.svg#picture_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    1125: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "picture_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#picture_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    976: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pin_filled_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#pin_filled_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    9434: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pin_filled_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#pin_filled_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9288: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pin_xs",
                                        xlinkHref: "/icons/sprite.svg#pin_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    3201: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "pin_xxs",
                                        xlinkHref: "/icons/sprite.svg#pin_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8112: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playLast_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#playLast_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8044: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playNext_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#playNext_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8303: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playQueue_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#playQueue_m",
                                    }),
                                ],
                            );
                        });
                    },
                    9863: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playQueue_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#playQueue_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    2084: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playVibe_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#playVibe_s",
                                    }),
                                ],
                            );
                        });
                    },
                    8582: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_filled_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#play_filled_l",
                                    }),
                                ],
                            );
                        });
                    },
                    4777: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_filled_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#play_filled_m",
                                    }),
                                ],
                            );
                        });
                    },
                    8779: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_filled_xl",
                                        xlinkHref:
                                            "/icons/sprite.svg#play_filled_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    1945: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_filled_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#play_filled_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    7402: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_filled_xxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#play_filled_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    1351: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_m",
                                        xlinkHref: "/icons/sprite.svg#play_m",
                                    }),
                                ],
                            );
                        });
                    },
                    1874: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_xs",
                                        xlinkHref: "/icons/sprite.svg#play_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    2026: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_xxs",
                                        xlinkHref: "/icons/sprite.svg#play_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5378: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "play_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#play_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3751: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playlist_s",
                                        xlinkHref:
                                            "/icons/sprite.svg#playlist_s",
                                    }),
                                ],
                            );
                        });
                    },
                    8503: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playlist_xl",
                                        xlinkHref:
                                            "/icons/sprite.svg#playlist_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    1580: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "playlist_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#playlist_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    8861: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "plus",
                                        xlinkHref: "/icons/sprite.svg#plus",
                                    }),
                                ],
                            );
                        });
                    },
                    6809: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "plusBadge",
                                        xlinkHref:
                                            "/icons/sprite.svg#plusBadge",
                                    }),
                                ],
                            );
                        });
                    },
                    5266: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "plusColor",
                                        xlinkHref:
                                            "/icons/sprite.svg#plusColor",
                                    }),
                                ],
                            );
                        });
                    },
                    1179: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "plusOutlined",
                                        xlinkHref:
                                            "/icons/sprite.svg#plusOutlined",
                                    }),
                                ],
                            );
                        });
                    },
                    735: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "plusOutlined_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#plusOutlined_m",
                                    }),
                                ],
                            );
                        });
                    },
                    2754: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "podcasts_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#podcasts_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    4091: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "previous_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#previous_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    1427: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "previous_xxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#previous_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    5251: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "previous_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#previous_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    895: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "repeat_one_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#repeat_one_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    5632: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "repeat_one_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#repeat_one_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8090: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "repeat_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#repeat_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    9370: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "repeat_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#repeat_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    1001: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "reset_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#reset_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    6579: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "reset_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#reset_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5910: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "rewindBackwards_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#rewindBackwards_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    893: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "rewindBackwards_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#rewindBackwards_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    4892: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "rewindForward_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#rewindForward_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    6331: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "rewindForward_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#rewindForward_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    2176: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "ruble_m",
                                        xlinkHref: "/icons/sprite.svg#ruble_m",
                                    }),
                                ],
                            );
                        });
                    },
                    9876: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "ruble_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#ruble_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3935: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "ruble_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#ruble_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7643: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "search_l",
                                        xlinkHref: "/icons/sprite.svg#search_l",
                                    }),
                                ],
                            );
                        });
                    },
                    8235: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "search_m",
                                        xlinkHref: "/icons/sprite.svg#search_m",
                                    }),
                                ],
                            );
                        });
                    },
                    8915: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "search_selected_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#search_selected_m",
                                    }),
                                ],
                            );
                        });
                    },
                    3366: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "search_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#search_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    7934: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "search_xxl",
                                        xlinkHref:
                                            "/icons/sprite.svg#search_xxl",
                                    }),
                                ],
                            );
                        });
                    },
                    5034: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "settings_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#settings_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    1758: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "settings_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#settings_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    7196: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "share_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#share_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5792: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "shuffle_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#shuffle_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    7951: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "shuffle_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#shuffle_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    9545: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "site_xs",
                                        xlinkHref: "/icons/sprite.svg#site_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    2037: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_25x_centered_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_25x_centered_m",
                                    }),
                                ],
                            );
                        });
                    },
                    3362: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_25x_centered_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_25x_centered_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    9846: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_25x_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_25x_l",
                                    }),
                                ],
                            );
                        });
                    },
                    5197: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_5x_centered_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_5x_centered_m",
                                    }),
                                ],
                            );
                        });
                    },
                    1079: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_5x_centered_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_5x_centered_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    6275: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_5x_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_5x_l",
                                    }),
                                ],
                            );
                        });
                    },
                    7026: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_75x_centered_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_75x_centered_m",
                                    }),
                                ],
                            );
                        });
                    },
                    8994: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_75x_centered_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_75x_centered_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    3702: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1_75x_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1_75x_l",
                                    }),
                                ],
                            );
                        });
                    },
                    8664: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1x_centered_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1x_centered_m",
                                    }),
                                ],
                            );
                        });
                    },
                    51: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1x_centered_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1x_centered_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    8550: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_1x_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_1x_l",
                                    }),
                                ],
                            );
                        });
                    },
                    8619: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_2x_centered_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_2x_centered_m",
                                    }),
                                ],
                            );
                        });
                    },
                    5218: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_2x_centered_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_2x_centered_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    857: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "speed_2x_l",
                                        xlinkHref:
                                            "/icons/sprite.svg#speed_2x_l",
                                    }),
                                ],
                            );
                        });
                    },
                    6130: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "syncLyrics_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#syncLyrics_m",
                                    }),
                                ],
                            );
                        });
                    },
                    3049: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "syncLyrics_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#syncLyrics_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    126: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "syncLyrics_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#syncLyrics_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    6210: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "ticket_m",
                                        xlinkHref: "/icons/sprite.svg#ticket_m",
                                    }),
                                ],
                            );
                        });
                    },
                    5596: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "ticket_selected_m",
                                        xlinkHref:
                                            "/icons/sprite.svg#ticket_selected_m",
                                    }),
                                ],
                            );
                        });
                    },
                    380: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "trailer_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#trailer_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    3112: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "trailer_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#trailer_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    1045: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "unavailable_xl",
                                        xlinkHref:
                                            "/icons/sprite.svg#unavailable_xl",
                                    }),
                                ],
                            );
                        });
                    },
                    2834: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "unavailable_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#unavailable_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    8819: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "unpin_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#unpin_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    8772: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "upload_xxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#upload_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    3522: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "users_xxxs",
                                        xlinkHref:
                                            "/icons/sprite.svg#users_xxxs",
                                    }),
                                ],
                            );
                        });
                    },
                    5695: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "vibe_xxs",
                                        xlinkHref: "/icons/sprite.svg#vibe_xxs",
                                    }),
                                ],
                            );
                        });
                    },
                    6174: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "volumeOff_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#volumeOff_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    540: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "volume_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#volume_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    6206: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "windows",
                                        xlinkHref: "/icons/sprite.svg#windows",
                                    }),
                                ],
                            );
                        });
                    },
                    7185: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "windows_xs",
                                        xlinkHref:
                                            "/icons/sprite.svg#windows_xs",
                                    }),
                                ],
                            );
                        });
                    },
                    9481: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "yandexBooksEn",
                                        xlinkHref:
                                            "/icons/sprite.svg#yandexBooksEn",
                                    }),
                                ],
                            );
                        });
                    },
                    7364: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "yandexBooksRu",
                                        xlinkHref:
                                            "/icons/sprite.svg#yandexBooksRu",
                                    }),
                                ],
                            );
                        });
                    },
                    8577: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "yandexPayEn",
                                        xlinkHref:
                                            "/icons/sprite.svg#yandexPayEn",
                                    }),
                                ],
                            );
                        });
                    },
                    5760: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "yandexPayRu",
                                        xlinkHref:
                                            "/icons/sprite.svg#yandexPayRu",
                                    }),
                                ],
                            );
                        });
                    },
                    5667: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "yandexPlusEn",
                                        xlinkHref:
                                            "/icons/sprite.svg#yandexPlusEn",
                                    }),
                                ],
                            );
                        });
                    },
                    2639: (e, t, s) => {
                        var r = s(810);
                        e.exports = r.forwardRef(function (e, t) {
                            return r.createElement(
                                "svg",
                                Object.assign({}, e, { ref: t }),
                                [
                                    r.createElement("use", {
                                        key: "yandexPlusRu",
                                        xlinkHref:
                                            "/icons/sprite.svg#yandexPlusRu",
                                    }),
                                ],
                            );
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
                        let a = s(1082),
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
                                    forwardRef: u,
                                    ...d
                                } = e,
                                x = c ? "".concat(n, "_").concat(c) : n,
                                f = l.iconsCollection[x];
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
                                      ref: u,
                                  })
                                : null;
                        }),
                            (t.Icon = (0, n.forwardRef)((e, s) =>
                                (0, a.jsx)(t.IconComponent, {
                                    forwardRef: s,
                                    ...e,
                                }),
                            ));
                    },
                    5151: function (e, t, s) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.iconsCollection = t.iconsCollectionBySize =
                                void 0);
                        let a = r(s(4656)),
                            n = r(s(8170)),
                            i = r(s(5565)),
                            l = r(s(8127)),
                            o = r(s(8993)),
                            c = r(s(2933)),
                            u = r(s(1334)),
                            d = r(s(1426)),
                            x = r(s(5378)),
                            f = r(s(6579)),
                            _ = r(s(3935)),
                            m = r(s(3522)),
                            p = r(s(7319)),
                            g = r(s(8442)),
                            v = r(s(2586)),
                            b = r(s(5822)),
                            k = r(s(5272)),
                            y = r(s(4860)),
                            E = r(s(8711)),
                            h = r(s(8109)),
                            j = r(s(4904)),
                            w = r(s(5971)),
                            O = r(s(3331)),
                            R = r(s(9783)),
                            S = r(s(8184)),
                            C = r(s(4926)),
                            A = r(s(3176)),
                            N = r(s(4789)),
                            H = r(s(8151)),
                            L = r(s(8690)),
                            P = r(s(1524)),
                            B = r(s(2361)),
                            T = r(s(3972)),
                            I = r(s(9330)),
                            D = r(s(7346)),
                            M = r(s(2604)),
                            U = r(s(6894)),
                            F = r(s(6391)),
                            W = r(s(9369)),
                            z = r(s(226)),
                            Y = r(s(8130)),
                            q = r(s(5270)),
                            V = r(s(3560)),
                            K = r(s(7513)),
                            Z = r(s(9838)),
                            Q = r(s(9104)),
                            G = r(s(7399)),
                            X = r(s(5849)),
                            J = r(s(3613)),
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
                            eu = r(s(8044)),
                            ed = r(s(2754)),
                            ex = r(s(5251)),
                            ef = r(s(9370)),
                            e_ = r(s(5632)),
                            em = r(s(1001)),
                            ep = r(s(893)),
                            eg = r(s(6331)),
                            ev = r(s(9876)),
                            eb = r(s(1758)),
                            ek = r(s(7196)),
                            ey = r(s(7951)),
                            eE = r(s(126)),
                            eh = r(s(3112)),
                            ej = r(s(8819)),
                            ew = r(s(8772)),
                            eO = r(s(5695)),
                            eR = r(s(7171)),
                            eS = r(s(9030)),
                            eC = r(s(9422)),
                            eA = r(s(1491)),
                            eN = r(s(2337)),
                            eH = r(s(9202)),
                            eL = r(s(130)),
                            eP = r(s(7923)),
                            eB = r(s(3654)),
                            eT = r(s(6507)),
                            eI = r(s(3193)),
                            eD = r(s(30)),
                            eM = r(s(7802)),
                            eU = r(s(3738)),
                            eF = r(s(2340)),
                            eW = r(s(2125)),
                            ez = r(s(4014)),
                            eY = r(s(896)),
                            eq = r(s(1829)),
                            eV = r(s(1084)),
                            eK = r(s(4254)),
                            eZ = r(s(792)),
                            eQ = r(s(8131)),
                            eG = r(s(1125)),
                            eX = r(s(9288)),
                            eJ = r(s(976)),
                            e$ = r(s(1874)),
                            e0 = r(s(9863)),
                            e1 = r(s(1945)),
                            e8 = r(s(1580)),
                            e4 = r(s(4091)),
                            e6 = r(s(8090)),
                            e2 = r(s(895)),
                            e3 = r(s(5910)),
                            e5 = r(s(4892)),
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
                            tu = r(s(540)),
                            td = r(s(6174)),
                            tx = r(s(7185)),
                            tf = r(s(9351)),
                            t_ = r(s(2092)),
                            tm = r(s(1162)),
                            tp = r(s(6837)),
                            tg = r(s(2024)),
                            tv = r(s(776)),
                            tb = r(s(5720)),
                            tk = r(s(2774)),
                            ty = r(s(4997)),
                            tE = r(s(3146)),
                            th = r(s(2084)),
                            tj = r(s(3751)),
                            tw = r(s(3076)),
                            tO = r(s(2495)),
                            tR = r(s(9509)),
                            tS = r(s(8987)),
                            tC = r(s(190)),
                            tA = r(s(843)),
                            tN = r(s(5122)),
                            tH = r(s(7405)),
                            tL = r(s(820)),
                            tP = r(s(5443)),
                            tB = r(s(8782)),
                            tT = r(s(7252)),
                            tI = r(s(3013)),
                            tD = r(s(5346)),
                            tM = r(s(3792)),
                            tU = r(s(1351)),
                            tF = r(s(8303)),
                            tW = r(s(4777)),
                            tz = r(s(735)),
                            tY = r(s(2176)),
                            tq = r(s(8235)),
                            tV = r(s(8915)),
                            tK = r(s(2037)),
                            tZ = r(s(5197)),
                            tQ = r(s(7026)),
                            tG = r(s(8664)),
                            tX = r(s(8619)),
                            tJ = r(s(6130)),
                            t$ = r(s(6210)),
                            t0 = r(s(5596)),
                            t1 = r(s(6644)),
                            t8 = r(s(996)),
                            t4 = r(s(7031)),
                            t6 = r(s(4793)),
                            t2 = r(s(7076)),
                            t3 = r(s(8582)),
                            t5 = r(s(7643)),
                            t9 = r(s(9846)),
                            t7 = r(s(6275)),
                            se = r(s(3702)),
                            st = r(s(8550)),
                            ss = r(s(857)),
                            sr = r(s(6304)),
                            sa = r(s(9040)),
                            sn = r(s(4298)),
                            si = r(s(5132)),
                            sl = r(s(8868)),
                            so = r(s(8779)),
                            sc = r(s(8503)),
                            su = r(s(1045)),
                            sd = r(s(7341)),
                            sx = r(s(9505)),
                            sf = r(s(4483)),
                            s_ = r(s(8499)),
                            sm = r(s(6544)),
                            sp = r(s(7402)),
                            sg = r(s(1427)),
                            sv = r(s(7934)),
                            sb = r(s(2435)),
                            sk = r(s(3918)),
                            sy = r(s(2571)),
                            sE = r(s(2161)),
                            sh = r(s(5304)),
                            sj = r(s(2646)),
                            sw = r(s(7500)),
                            sO = r(s(6104)),
                            sR = r(s(2502)),
                            sS = r(s(1754)),
                            sC = r(s(6615)),
                            sA = r(s(7942)),
                            sN = r(s(1498)),
                            sH = r(s(8861)),
                            sL = r(s(6809)),
                            sP = r(s(5266)),
                            sB = r(s(1179)),
                            sT = r(s(6206)),
                            sI = r(s(9481)),
                            sD = r(s(7364)),
                            sM = r(s(8577)),
                            sU = r(s(5760)),
                            sF = r(s(5667)),
                            sW = r(s(2639));
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
                                "plusOutlined",
                                "ruble",
                                "search",
                                "search_selected",
                                "speed_1_25x_centered",
                                "speed_1_5x_centered",
                                "speed_1_75x_centered",
                                "speed_1x_centered",
                                "speed_2x_centered",
                                "syncLyrics",
                                "ticket",
                                "ticket_selected",
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
                                explicit_xxxs: u.default,
                                listen_xxxs: d.default,
                                play_xxxs: x.default,
                                reset_xxxs: f.default,
                                ruble_xxxs: _.default,
                                users_xxxs: m.default,
                                add_xxs: p.default,
                                addToPlaylist_xxs: g.default,
                                adult_xxs: v.default,
                                album_xxs: b.default,
                                arrowDown_xxs: k.default,
                                arrowLeft_xxs: y.default,
                                arrowRight_xxs: E.default,
                                artist_xxs: h.default,
                                bucket_xxs: j.default,
                                chain_xxs: w.default,
                                chartDown_xxs: O.default,
                                chartNew_xxs: R.default,
                                chartSame_xxs: S.default,
                                chartUp_xxs: C.default,
                                check_xxs: A.default,
                                clip_xxs: N.default,
                                close_xxs: H.default,
                                code_xxs: L.default,
                                crown_xxs: P.default,
                                dislike_xxs: B.default,
                                disliked_xxs: T.default,
                                download_xxs: I.default,
                                downloaded_xxs: D.default,
                                dragDots_xxs: M.default,
                                edit_xxs: U.default,
                                exclamation_xxs: F.default,
                                explicit_xxs: W.default,
                                eye_crossed_xxs: z.default,
                                filter_xxs: Y.default,
                                info_xxs: q.default,
                                lightning_xxs: V.default,
                                like_xxs: K.default,
                                likeVariant_xxs: Z.default,
                                liked_xxs: Q.default,
                                likedVariant_xxs: G.default,
                                link_xxs: X.default,
                                lock_xxs: J.default,
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
                                playNext_xxs: eu.default,
                                podcasts_xxs: ed.default,
                                previous_xxs: ex.default,
                                repeat_xxs: ef.default,
                                repeat_one_xxs: e_.default,
                                reset_xxs: em.default,
                                rewindBackwards_xxs: ep.default,
                                rewindForward_xxs: eg.default,
                                ruble_xxs: ev.default,
                                settings_xxs: eb.default,
                                share_xxs: ek.default,
                                shuffle_xxs: ey.default,
                                syncLyrics_xxs: eE.default,
                                trailer_xxs: eh.default,
                                unpin_xxs: ej.default,
                                upload_xxs: ew.default,
                                vibe_xxs: eO.default,
                                adult_xs: eR.default,
                                album_xs: eS.default,
                                arrowDown_xs: eC.default,
                                arrowLeft_xs: eA.default,
                                arrowRight_xs: eN.default,
                                cast_xs: eH.default,
                                chain_xs: eL.default,
                                close_xs: eP.default,
                                dislike_xs: eB.default,
                                disliked_xs: eT.default,
                                exclamation_xs: eI.default,
                                explicit_xs: eD.default,
                                filter_xs: eM.default,
                                fullscreen_xs: eU.default,
                                like_xs: eF.default,
                                liked_xs: eW.default,
                                liteVersion_xs: ez.default,
                                lock_xs: eY.default,
                                more_xs: eq.default,
                                next_xs: eV.default,
                                note_xs: eK.default,
                                pause_xs: eZ.default,
                                pause_filled_xs: eQ.default,
                                picture_xs: eG.default,
                                pin_xs: eX.default,
                                pin_filled_xs: eJ.default,
                                play_xs: e$.default,
                                playQueue_xs: e0.default,
                                play_filled_xs: e1.default,
                                playlist_xs: e8.default,
                                previous_xs: e4.default,
                                repeat_xs: e6.default,
                                repeat_one_xs: e2.default,
                                rewindBackwards_xs: e3.default,
                                rewindForward_xs: e5.default,
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
                                volume_xs: tu.default,
                                volumeOff_xs: td.default,
                                windows_xs: tx.default,
                                adult_s: tf.default,
                                album_s: t_.default,
                                dislike_s: tm.default,
                                disliked_s: tp.default,
                                exclamation_s: tg.default,
                                explicit_s: tv.default,
                                likedVariant_s: tb.default,
                                note_s: tk.default,
                                pauseVibe_s: ty.default,
                                picture_s: tE.default,
                                playVibe_s: th.default,
                                playlist_s: tj.default,
                                collections_m: tw.default,
                                collections_selected_m: tO.default,
                                history_m: tR.default,
                                home_m: tS.default,
                                home_selected_m: tC.default,
                                kids_m: tA.default,
                                kids_selected_m: tN.default,
                                like_m: tH.default,
                                liked_m: tL.default,
                                lock_m: tP.default,
                                more_m: tB.default,
                                non_music_m: tT.default,
                                non_music_selected_m: tI.default,
                                pause_m: tD.default,
                                pause_filled_m: tM.default,
                                play_m: tU.default,
                                playQueue_m: tF.default,
                                play_filled_m: tW.default,
                                plusOutlined_m: tz.default,
                                ruble_m: tY.default,
                                search_m: tq.default,
                                search_selected_m: tV.default,
                                speed_1_25x_centered_m: tK.default,
                                speed_1_5x_centered_m: tZ.default,
                                speed_1_75x_centered_m: tQ.default,
                                speed_1x_centered_m: tG.default,
                                speed_2x_centered_m: tX.default,
                                syncLyrics_m: tJ.default,
                                ticket_m: t$.default,
                                ticket_selected_m: t0.default,
                                add_l: t1.default,
                                album_l: t8.default,
                                download_l: t4.default,
                                like_l: t6.default,
                                pause_filled_l: t2.default,
                                play_filled_l: t3.default,
                                search_l: t5.default,
                                speed_1_25x_l: t9.default,
                                speed_1_5x_l: t7.default,
                                speed_1_75x_l: se.default,
                                speed_1x_l: st.default,
                                speed_2x_l: ss.default,
                                album_xl: sr.default,
                                clip_xl: sa.default,
                                note_xl: sn.default,
                                pause_filled_xl: si.default,
                                picture_xl: sl.default,
                                play_filled_xl: so.default,
                                playlist_xl: sc.default,
                                unavailable_xl: su.default,
                                attention_xxl: sd.default,
                                check_xxl: sx.default,
                                next_xxl: sf.default,
                                offline_xxl: s_.default,
                                pause_filled_xxl: sm.default,
                                play_filled_xxl: sp.default,
                                previous_xxl: sg.default,
                                search_xxl: sv.default,
                                attention_xxxl: sb.default,
                                bandlink: sk.default,
                                booksLogo: sy.default,
                                googlePlay: sE.default,
                                huaweiAppGallery: sh.default,
                                kinopoiskEn: sj.default,
                                kinopoiskRu: sw.default,
                                macos: sO.default,
                                musicLogo: sR.default,
                                musicLogoCenterEn: sS.default,
                                musicLogoCenterRu: sC.default,
                                musicLogoLeftEn: sA.default,
                                musicLogoLeftRu: sN.default,
                                plus: sH.default,
                                plusBadge: sL.default,
                                plusColor: sP.default,
                                plusOutlined: sB.default,
                                windows: sT.default,
                                yandexBooksEn: sI.default,
                                yandexBooksRu: sD.default,
                                yandexPayEn: sM.default,
                                yandexPayRu: sU.default,
                                yandexPlusEn: sF.default,
                                yandexPlusRu: sW.default,
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
                        let a = s(1082),
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
                        let a = s(1082),
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
                                children: u,
                                weight: d = "medium",
                                ...x
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
                                ...x,
                                children: u,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, s) =>
                                (0, a.jsx)(t.CaptionComponent, {
                                    forwardRef: s,
                                    ...e,
                                }),
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
                        let a = s(1082),
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
                                children: u,
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
                                children: u,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, s) =>
                                (0, a.jsx)(t.HeadingComponent, {
                                    forwardRef: s,
                                    ...e,
                                }),
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
                        let a = s(1082),
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
                                    ...u
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
                                        [l.default.root_clamp_oneline]:
                                            c && 1 === c,
                                        [l.default.root_clamp_multiline]:
                                            c && c > 1,
                                    },
                                    r,
                                ),
                                ...u,
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
                        e.exports = y;
                    },
                },
                O = {};
            function R(e) {
                var t = O[e];
                if (void 0 !== t) return t.exports;
                var s = (O[e] = { exports: {} });
                return w[e].call(s.exports, s, s.exports, R), s.exports;
            }
            (R.d = (e, t) => {
                for (var s in t)
                    R.o(t, s) &&
                        !R.o(e, s) &&
                        Object.defineProperty(e, s, {
                            enumerable: !0,
                            get: t[s],
                        });
            }),
                (R.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (R.r = (e) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                });
            var S = {};
            (() => {
                Object.defineProperty(S, "X", { value: !0 }), (S.R = void 0);
                var e = R(1093);
                Object.defineProperty(S, "R", {
                    enumerable: !0,
                    get: function () {
                        return e.PlusBadge;
                    },
                });
            })();
            var C = S.R;
            S.X;
            var A = s(77868),
                N = s(49444),
                H = s(18740),
                L = (function (e) {
                    return (
                        (e.SETTINGS = "settings"),
                        (e.LOGOUT = "logout"),
                        (e.ACCOUNT_ACTION = "account-action"),
                        e
                    );
                })({}),
                P = s(78016),
                B = s(66098),
                T = s(46658),
                I = s.n(T);
            let D = (0, b.PA)(() => {
                let { user: e } = (0, l.Pjs)(),
                    t = (0, l.ZpR)(l.Zyd.settings.href);
                return (0, d.jsx)(B.W1, {
                    placement: "top",
                    offsetOptions: 10,
                    variant: "text",
                    withRipple: !1,
                    className: I().button,
                    label: (0, d.jsx)(g, {
                        className: I().button,
                        hasPlus: e.hasPlus,
                    }),
                    children: (0, d.jsx)(B.Dr, {
                        icon: (0, d.jsx)(P.Icon, {
                            variant: "settings",
                            size: "xxs",
                        }),
                        onClick: t,
                        children: (0, d.jsx)(E.A, { id: "page.settings" }),
                    }),
                });
            });
            var M = s(77270),
                U = s.n(M);
            let F = (0, b.PA)((e) => {
                var t;
                let {
                        className: s,
                        variant: r = "desktop",
                        withMeta: a,
                        metaClassName: n,
                        usernameClassName: i,
                        userIdClassName: o,
                    } = e,
                    {
                        user: c,
                        location: u,
                        experiments: f,
                        settings: _,
                        slam: m,
                    } = (0, l.Pjs)(),
                    { theme: p, setTheme: g } = (0, l.DPo)(),
                    b = (0, l.NFA)(),
                    y = (0, N.j)(),
                    w = b.get(l.ooW),
                    O = b.get(l.twC),
                    { getThemeFromStorage: R, setThemeToStorage: S } = (0,
                    l.QDo)(w),
                    [P, B] = (0, k.useState)(() => {
                        var e;
                        return null != (e = R()) ? e : l.W3W;
                    }),
                    {
                        oldWebHost: T,
                        passportCredentials: { origin: I },
                    } = O,
                    M = (0, l._lF)(T),
                    F = (0, k.useRef)(null),
                    [W, z] = (0, k.useState)(0),
                    Y = (0, l.ZpR)(l.Zyd.settings.href),
                    {
                        language: q,
                        setLanguage: V,
                        availableLanguages: K,
                    } = (0, l.h6b)(),
                    Z = f.checkExperiment(l.zal.WebForceNext, "oldnew_button"),
                    Q = f.checkExperiment(
                        l.zal.WebForceNext,
                        "force_oldnew_button",
                    ),
                    G =
                        f.checkExperiment(l.zal.WebPreferredDesign, "new") ||
                        f.checkExperiment(l.zal.WebPreferredDesign, "oldnew") ||
                        Z ||
                        Q,
                    X = (0, h.stringifyJSONSafely)({
                        entrypoint: "web_desktop",
                    }),
                    J = (0, k.useMemo)(() => {
                        switch (_.platform) {
                            case l.ODD.WINDOWS:
                                return "windows_music";
                            case l.ODD.MACOS:
                                return "mac_music";
                            case l.ODD.LINUX:
                                return "linux_music";
                            default:
                                return "";
                        }
                    }, [_.platform]),
                    $ = (0, j.c)((e) => {
                        B(e), e === l.W3W ? g((0, l.VDQ)()) : g(e), S(e);
                    }),
                    ee = (0, k.useCallback)(
                        (e) => {
                            V(e);
                        },
                        [V],
                    ),
                    et = (0, k.useCallback)(() => {}, [
                        b,
                        !0,
                        Q,
                        Z,
                        y,
                        M,
                        null == (t = _.browserInfo) ? void 0 : t.version,
                    ]),
                    es = (0, k.useCallback)(
                        (e, t, s) => {
                            e === L.SETTINGS && (null == s || s.onClose(), Y()),
                                (e === L.LOGOUT || e === L.ACCOUNT_ACTION) &&
                                    w.remove(l.cYZ.YmUid);
                        },
                        [Y, w],
                    ),
                    er = (0, k.useCallback)(() => {
                        var e;
                        z(
                            document.documentElement.clientHeight -
                                ((null == (e = F.current)
                                    ? void 0
                                    : e.getBoundingClientRect().top) || 0),
                        );
                    }, [z]),
                    ea = (0, k.useMemo)(
                        () => ({ "--user-top-distance": "".concat(W, "px") }),
                        [W],
                    ),
                    en = (0, k.useMemo)(() => {
                        if (m.networkStatus.isOffline || m.isOfflineModeEnabled)
                            return (0, d.jsx)(D, {});
                        let e = void 0 !== c.puid ? String(c.puid) : "";
                        return (0, d.jsx)(v.User, {
                            className: (0, x.$)(U().userId, o),
                            platform: "desktop" === r ? "desktop" : "touch",
                            userData: {
                                plus: c.hasPlus,
                                avatarId: c.account.data.avatarId,
                            },
                            onLocaleChange: ee,
                            project: "music",
                            queryParams: {
                                uid: e,
                                "music.locales": K.join(),
                                l10n: q,
                                "music.showSettings": c.isAuthorized
                                    ? "1"
                                    : "0",
                                "music.chatContext": X,
                                "music.chatUtmSource": J,
                                "music.showBackToOldDesign": "0",
                                target: "_blank",
                                origin: I,
                            },
                            env: "prod",
                            avatarSize: "desktop" === r ? 34 : 26,
                            dialogClassName: (0, x.$)(
                                U().dialog,
                                U()["dialog_".concat(r)],
                            ),
                            retpath: u.href,
                            onMenuItemClick: es,
                            rpcHandlers: { setOldDesign: et },
                            tld: u.tld,
                            preload: !0,
                            onOpen: er,
                            theme: P,
                            colorScheme: null != p ? p : void 0,
                            onThemeChange: $,
                        });
                    }, [
                        K,
                        X,
                        J,
                        er,
                        ee,
                        et,
                        $,
                        !0,
                        q,
                        u.href,
                        u.tld,
                        es,
                        I,
                        m.isOfflineModeEnabled,
                        m.networkStatus.isOffline,
                        p,
                        c.account.data.avatarId,
                        c.hasPlus,
                        c.isAuthorized,
                        c.puid,
                        o,
                        r,
                        G,
                        P,
                    ]);
                return (0, d.jsxs)("div", {
                    className: (0, x.$)(U().root, s),
                    ref: F,
                    style: ea,
                    children: [
                        en,
                        a &&
                            (0, d.jsxs)("div", {
                                className: (0, x.$)(U().meta, n),
                                children: [
                                    (0, d.jsx)(A.Caption, {
                                        variant: "div",
                                        type: "controls",
                                        size: "m",
                                        weight: "medium",
                                        className: (0, x.$)(U().userName, i),
                                        lineClamp: 1,
                                        children:
                                            c.account.data.publicName ||
                                            c.account.data.login,
                                    }),
                                    c.hasPlus &&
                                        (0, d.jsx)(H.N_, {
                                            href: "https://plus.yandex.".concat(
                                                u.tld,
                                                "/",
                                            ),
                                            target: "_blank",
                                            className: U().plusLink,
                                            children: (0, d.jsx)(C, {
                                                children: (0, d.jsx)(E.A, {
                                                    id: "sidebar.plus-badge",
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                    ],
                });
            });
        },
        35930: (e) => {
            e.exports = { root: "PaywallRU_root__X8j2f" };
        },
        36014: (e) => {
            e.exports = { topSection: "PaywallBYDesktop_topSection__AS3Pv" };
        },
        36361: (e) => {
            e.exports = {
                content: "MusicSectionDesktop_content__uCWAp",
                card: "MusicSectionDesktop_card__YurZs",
                logo_ru: "MusicSectionDesktop_logo_ru__Tiwfx",
                logo_en: "MusicSectionDesktop_logo_en__dbYCi",
            };
        },
        44748: (e, t, s) => {
            "use strict";
            s.d(t, { pU: () => tj, cw: () => tC, Sz: () => b });
            var r,
                a,
                n,
                i,
                l,
                o,
                c,
                u,
                d,
                x,
                f,
                _,
                m,
                p,
                g = s(41028),
                v = s(59615);
            let b = g.gK.model({ modal: v.qt }).actions((e) => ({
                openModal() {
                    e.modal.open();
                },
                closeModal() {
                    let { desktopPaywall: t } = (0, g.Zn)(e);
                    t.startCrackdownTimeout(), e.modal.close();
                },
                onOpenChange(t) {
                    if (!t) {
                        let { desktopPaywall: t } = (0, g.Zn)(e);
                        t.startCrackdownTimeout();
                    }
                    e.modal.onOpenChange(t);
                },
            }));
            var k = s(33008),
                y = s(85896),
                E = s(97531),
                h = s(66268),
                j = s(18064),
                w = s(42314),
                O = s(53984),
                R = s(79169),
                S = (function (e) {
                    return (e.RU = "ru"), (e.BY = "by"), (e.OTHER = "other"), e;
                })({});
            let C = { [R.ij5.RU]: S.RU, [R.ij5.BY]: S.BY };
            var A = s(10129),
                N = s.n(A),
                H = s(51154),
                L = s.n(H),
                P = s(96560),
                B = s(18740);
            let T = (e) => {
                    let { className: t, faqProps: s, variant: r } = e,
                        { location: a } = (0, R.Pjs)(),
                        n = {
                            cancelUntilEndQuestion: (0, k.jsx)(P.A, {
                                id: "paywall.faq-question-cancel-until-end-other-countries",
                                values: { nbsp: " " },
                            }),
                            cancelUntilEndStep1Link: (0, k.jsx)(P.A, {
                                id: "paywall.faq-answer-cancel-until-end-step-1-link-other-countries",
                            }),
                            cancelUntilEndStep2: (0, k.jsx)(P.A, {
                                id: "paywall.faq-answer-cancel-until-end-step-2-other-countries",
                                values: { nbsp: " " },
                            }),
                            afraidForgetCancel: (0, k.jsx)(P.A, {
                                id: "paywall.faq-question-afraid-forget-cancel-other-countries",
                                values: { nbsp: " " },
                            }),
                            whereElseSubscribe: (0, k.jsx)(P.A, {
                                id: "paywall.faq-question-where-else-subscribe-other-countries",
                                values: { nbsp: " " },
                            }),
                        };
                    r === S.RU &&
                        ((n.cancelUntilEndQuestion = (0, k.jsx)(P.A, {
                            id: "paywall.faq-question-cancel-until-end",
                            values: { nbsp: " " },
                        })),
                        (n.cancelUntilEndStep1Link = (0, k.jsx)(P.A, {
                            id: "paywall.faq-answer-cancel-until-end-step-1-link",
                        })),
                        (n.cancelUntilEndStep2 = (0, k.jsx)(P.A, {
                            id: "paywall.faq-answer-cancel-until-end-step-2",
                            values: { nbsp: " " },
                        })),
                        (n.afraidForgetCancel = (0, k.jsx)(P.A, {
                            id: "paywall.faq-question-afraid-forget-cancel",
                            values: { nbsp: " " },
                        })),
                        (n.whereElseSubscribe = (0, k.jsx)(P.A, {
                            id: "paywall.faq-question-where-else-subscribe",
                            values: { nbsp: " " },
                        })));
                    let i = {
                        nbsp: "\xa0",
                        steps: (0, k.jsxs)("ul", {
                            className: B.VN.list,
                            children: [
                                (0, k.jsx)("li", {
                                    className: B.VN.listITem,
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.faq-answer-cancel-until-end-step-1",
                                        values: {
                                            link: (0, k.jsx)(B.N_, {
                                                className: B.VN.link,
                                                href: "http://plus.yandex.".concat(
                                                    a.tld,
                                                    "/my",
                                                ),
                                                target: "_blank",
                                                children:
                                                    n.cancelUntilEndStep1Link,
                                            }),
                                        },
                                    }),
                                }),
                                (0, k.jsx)("li", {
                                    className: B.VN.listITem,
                                    children: n.cancelUntilEndStep2,
                                }),
                            ],
                        }),
                    };
                    return (0, k.jsxs)(B.Bh, {
                        className: t,
                        ...s,
                        ...(0, j.Am)(j.e8.paywall.PAYWALL_FAQ_SECTION),
                        children: [
                            (0, k.jsx)(B.ot, {
                                question: (0, k.jsx)(B.nI, {
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.faq-question-without-card-binding",
                                    }),
                                }),
                                answer: (0, k.jsx)(B.L9, {
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.faq-answer-without-card-binding",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                                questionDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_DEMO_PERIOD_QUESTION,
                                ),
                                answerDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_DEMO_PERIOD_ANSWER,
                                ),
                            }),
                            (0, k.jsx)(B.ot, {
                                question: (0, k.jsx)(B.nI, {
                                    children: n.afraidForgetCancel,
                                }),
                                answer: (0, k.jsx)(B.L9, {
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.faq-answer-afraid-forget-cancel",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                                questionDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_QUESTION,
                                ),
                                answerDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_ANSWER,
                                ),
                            }),
                            (0, k.jsx)(B.ot, {
                                question: (0, k.jsx)(B.nI, {
                                    children: n.cancelUntilEndQuestion,
                                }),
                                answer: (0, k.jsx)(B.L9, {
                                    children:
                                        r === S.RU
                                            ? (0, k.jsx)(P.A, {
                                                  id: "paywall.faq-answer-cancel-until-end",
                                                  values: i,
                                              })
                                            : (0, k.jsx)(P.A, {
                                                  id: "paywall.faq-answer-cancel-until-end-other-countries",
                                                  values: i,
                                              }),
                                }),
                                questionDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_QUESTION,
                                ),
                                answerDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_ANSWER,
                                ),
                            }),
                            (0, k.jsx)(B.ot, {
                                question: (0, k.jsx)(B.nI, {
                                    children: n.whereElseSubscribe,
                                }),
                                answer: (0, k.jsx)(B.L9, {
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.faq-answer-where-else-subscribe",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                                questionDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_DONT_WANT_INPUT_CREDENTIALS_QUESTION,
                                ),
                                answerDataTestId: (0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_FAQ_ITEM_DONT_WANT_INPUT_CREDENTIALS_ANSWER,
                                ),
                            }),
                        ],
                    });
                },
                I = (0, E.PA)((e) => {
                    let { variant: t } = e,
                        { location: s } = (0, R.Pjs)(),
                        r =
                            t === S.RU
                                ? (0, k.jsx)(P.A, {
                                      id: "paywall-footer.subscription-terms-link",
                                  })
                                : (0, k.jsx)(P.A, {
                                      id: "paywall-footer.subscription-terms-link-other-countries",
                                  });
                    return (0, k.jsx)(B.c, {
                        ageRestriction: "0+",
                        links: [
                            {
                                href: "https://yandex.".concat(
                                    s.tld,
                                    "/legal/yandex_plus_conditions/",
                                ),
                                text: r,
                                testId: j.e8.paywall
                                    .PAYWALL_FOOTER_ITEM_CONDITIONS_SUB,
                            },
                            {
                                href: "https://yandex.".concat(
                                    s.tld,
                                    "/legal/yandex_plus_privilege_list",
                                ),
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall-footer.privileges-terms-link",
                                }),
                                testId: j.e8.paywall
                                    .PAYWALL_FOOTER_ITEM_CONDITIONS_PRIVILEGE,
                            },
                            {
                                href: "https://yandex.".concat(
                                    s.tld,
                                    "/legal/plus_loyalty/",
                                ),
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall-footer.cashback-terms-link",
                                }),
                                testId: j.e8.paywall
                                    .PAYWALL_FOOTER_ITEM_CONDITIONS_CASHBACK,
                            },
                            {
                                href: "https://yandex.".concat(
                                    s.tld,
                                    "/legal/plus_generalrules/",
                                ),
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall-footer.promotion-terms-link",
                                }),
                                testId: j.e8.paywall
                                    .PAYWALL_FOOTER_ITEM_CONDITIONS_PROMO,
                            },
                            {
                                href: "https://yandex.".concat(
                                    s.tld,
                                    "/support/plus",
                                ),
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall-footer.support-link",
                                }),
                                testId: j.e8.paywall
                                    .PAYWALL_FOOTER_ITEM_SUPPORT,
                            },
                        ],
                    });
                });
            var D = s(78016),
                M = s(93134),
                U = s(77868),
                F = s(30293),
                W = s(52756),
                z = s(47862),
                Y = s.n(z);
            let q = (e) => {
                let {
                    variant: t = "horizontal",
                    className: s,
                    text: r,
                    imageAlign: a = "center",
                    imageSrc: n,
                    image2xSrc: i,
                    ...l
                } = e;
                return (0, k.jsxs)("div", {
                    className: (0, y.$)(Y().root, Y()["root_".concat(t)], s),
                    ...(0, F.getDataAttrFromProps)(l),
                    children: [
                        (0, k.jsx)("div", {
                            className: Y().textContainer,
                            children: (0, k.jsx)(U.Heading, {
                                variant: "h3",
                                size: "xl",
                                className: Y().text,
                                children: r,
                            }),
                        }),
                        (0, k.jsx)("div", {
                            className: (0, y.$)(
                                Y().imageContainer,
                                Y()["imageContainer_align_".concat(a)],
                            ),
                            children: (0, k.jsx)(W.Image, {
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
            var V = s(78289),
                K = s.n(V);
            let Z = (e) => {
                let {
                    id: t,
                    className: s,
                    contentClassName: r,
                    heading: a,
                    content: n,
                    ...i
                } = e;
                return (0, k.jsxs)("section", {
                    className: (0, y.$)(K().root, s),
                    id: t,
                    ...(0, F.getDataAttrFromProps)(i),
                    children: [
                        (0, k.jsx)("div", {
                            className: K().headingContainer,
                            children: a,
                        }),
                        (0, k.jsx)("div", {
                            className: (0, y.$)(K().contentContainer, r),
                            children: n,
                        }),
                    ],
                });
            };
            var Q = s(83445),
                G = s.n(Q);
            let X = {
                    [S.RU]: "https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig",
                    [S.BY]: "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig",
                },
                J = {
                    [S.RU]: "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig",
                    [S.BY]: "https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig",
                },
                $ = (e) => {
                    let { className: t, variant: s = S.RU } = e,
                        r = (0, R.jjz)();
                    return (0, k.jsx)(Z, {
                        className: t,
                        contentClassName: G()["content_".concat(s)],
                        heading: (0, k.jsxs)(k.Fragment, {
                            children: [
                                (0, k.jsx)(D.Icon, {
                                    variant: "kinopoisk".concat(r),
                                    className:
                                        G()[
                                            "logo_".concat(
                                                r.toLocaleLowerCase(),
                                            )
                                        ],
                                }),
                                (0, k.jsx)(M.q, {
                                    children: (0, k.jsx)(U.Heading, {
                                        variant: "h2",
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.kinopoisk-part-title",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, k.jsxs)(k.Fragment, {
                            children: [
                                (0, k.jsx)(q, {
                                    className: G().card1,
                                    variant: "vertical",
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.kinopoisk-part-benefit-movies",
                                        values: { br: "\n", nbsp: "\xa0" },
                                    }),
                                    imageSrc: X[s],
                                    image2xSrc: J[s],
                                    ...(0, j.Am)(
                                        j.e8.paywall
                                            .PAYWALL_SECTION_CARD_CHOOSE_FILM,
                                    ),
                                }),
                                (0, k.jsx)(q, {
                                    className: G().card2,
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.kinopoisk-part-benefit-exclusive",
                                        values: { br: "\n", nbsp: "\xa0" },
                                    }),
                                    imageSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig",
                                    image2xSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig",
                                    ...(0, j.Am)(
                                        j.e8.paywall
                                            .PAYWALL_SECTION_CARD_WATCH_EXCLUSIVES,
                                    ),
                                }),
                                s === S.RU &&
                                    (0, k.jsx)(q, {
                                        className: G().card3,
                                        text: (0, k.jsx)(P.A, {
                                            id: "paywall.kinopoisk-part-benefit-sport",
                                            values: { br: "\n", nbsp: "\xa0" },
                                        }),
                                        imageSrc:
                                            "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig",
                                        image2xSrc:
                                            "https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig",
                                        ...(0, j.Am)(
                                            j.e8.paywall
                                                .PAYWALL_SECTION_CARD_WATCH_SPORT,
                                        ),
                                    }),
                                (0, k.jsx)(q, {
                                    className: G().card4,
                                    variant: "vertical",
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.kinopoisk-part-benefit-channels",
                                        values: { br: "\n", nbsp: "\xa0" },
                                    }),
                                    imageAlign: "right",
                                    imageSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig",
                                    image2xSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig",
                                    ...(0, j.Am)(
                                        j.e8.paywall
                                            .PAYWALL_SECTION_CARD_MANY_CHANNELS,
                                    ),
                                }),
                            ],
                        }),
                        ...(0, j.Am)(j.e8.paywall.PAYWALL_KINOPOISK_SECTION),
                    });
                };
            var ee = s(78257),
                et = s(84162),
                es = s.n(et);
            let er = "content-anchor",
                ea = (e) => {
                    let {
                        className: t,
                        shouldShowLabel: s = !0,
                        anchorId: r = er,
                        children: a,
                    } = e;
                    return (0, k.jsxs)(ee.N, {
                        className: (0, y.$)(es().root, t),
                        href: "#".concat(r),
                        role: "button",
                        children: [
                            (0, k.jsx)("div", {
                                className: es().content,
                                children: a,
                            }),
                            s &&
                                (0, k.jsx)(U.Caption, {
                                    variant: "span",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.more-info",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                            (0, k.jsx)(D.Icon, {
                                variant: "arrowDown",
                                size: "xs",
                            }),
                        ],
                    });
                };
            var en = s(36361),
                ei = s.n(en);
            let el = (e) => {
                let { className: t, variant: s = S.RU } = e,
                    r = (0, R.jjz)(),
                    a = (0, h.useMemo)(
                        () =>
                            s === S.RU
                                ? (0, k.jsx)(P.A, {
                                      id: "paywall.music-part-benefit-books",
                                      values: { br: "\n", nbsp: "\xa0" },
                                  })
                                : (0, k.jsx)(P.A, {
                                      id: "paywall.music-part-benefit-books-alternative",
                                      values: { br: "\n", nbsp: "\xa0" },
                                  }),
                        [s],
                    );
                return (0, k.jsx)(Z, {
                    id: er,
                    className: t,
                    contentClassName: ei().content,
                    heading: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(D.Icon, {
                                variant: "musicLogoCenter".concat(r),
                                className:
                                    ei()["logo_".concat(r.toLocaleLowerCase())],
                            }),
                            (0, k.jsx)(M.q, {
                                children: (0, k.jsx)(U.Heading, {
                                    variant: "h2",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.music-part-title",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                            }),
                        ],
                    }),
                    content: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(q, {
                                className: ei().card,
                                variant: "vertical",
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-recommendations",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_FIND_INTERESTING,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: ei().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-many-devices",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_SMART_RECOMENDATIONS,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: ei().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-without-internet",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/69699/img.6703f9237733220b25bd3744/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/2406661/img.6703f91a37dd1d4ade86c11a/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_LISTEN_WITHOUT_INTERNET,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: ei().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-playlists",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_MAKE_COLLECTIONS,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: ei().card,
                                variant: "vertical",
                                text: a,
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_LISTEN_AUDIOBOKS,
                                ),
                            }),
                        ],
                    }),
                    ...(0, j.Am)(j.e8.paywall.PAYWALL_MUSIC_SECTION),
                });
            };
            var eo = s(73958),
                ec = s.n(eo);
            let eu = (e) => {
                let { className: t, variant: s = S.RU } = e,
                    r = (0, R.jjz)();
                return (0, k.jsx)(Z, {
                    className: t,
                    contentClassName: ec()["content_".concat(s)],
                    heading: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(D.Icon, {
                                variant: "yandexPlus".concat(r),
                                className:
                                    ec()["logo_".concat(r.toLocaleLowerCase())],
                            }),
                            (0, k.jsx)(M.q, {
                                children: (0, k.jsx)(U.Heading, {
                                    variant: "h2",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.plus-part-title",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                            }),
                        ],
                    }),
                    content: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(q, {
                                className: ec().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.plus-part-benefit-family",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_ADD_CLOSES,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: ec().card,
                                variant: "vertical",
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.plus-part-benefit-devices",
                                    values: { br: "\n" },
                                }),
                                imageAlign: "right",
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f29c21b8a7ae33ed006e72/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f292cc89f5b04b855a8040/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_ADD_CLOSES,
                                ),
                            }),
                            s === S.RU &&
                                (0, k.jsxs)(k.Fragment, {
                                    children: [
                                        (0, k.jsx)(q, {
                                            className: ec().card,
                                            variant: "vertical",
                                            text: (0, k.jsx)(P.A, {
                                                id: "paywall.plus-part-spend-points",
                                                values: {
                                                    br: "\n",
                                                    nbsp: "\xa0",
                                                },
                                            }),
                                            imageAlign: "right",
                                            imageSrc:
                                                "https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcc48f03fb5a1cf861dd/orig",
                                            image2xSrc:
                                                "https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcd66fc33b70f1711a33/orig",
                                            ...(0, j.Am)(
                                                j.e8.paywall
                                                    .PAYWALL_SECTION_CARD_SPEND_POINTS,
                                            ),
                                        }),
                                        (0, k.jsx)(q, {
                                            className: ec().card,
                                            text: (0, k.jsx)(P.A, {
                                                id: "paywall.plus-part-benefit-options",
                                                values: {
                                                    br: "\n",
                                                    nbsp: "\xa0",
                                                },
                                            }),
                                            imageSrc:
                                                "https://avatars.mds.yandex.net/get-music-misc/49997/img.68eebd405566813399938420/orig",
                                            image2xSrc:
                                                "https://avatars.mds.yandex.net/get-music-misc/69699/img.68eebd498f03fb5a1cf861df/orig",
                                            ...(0, j.Am)(
                                                j.e8.paywall
                                                    .PAYWALL_SECTION_CARD_BENEFIT_OPTIONS,
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    ...(0, j.Am)(j.e8.paywall.PAYWALL_PLUS_SECTION),
                });
            };
            var ed = s(17846),
                ex = s(17229),
                ef = s(95273),
                e_ = s(32436),
                em = s(44189),
                ep = s(83153),
                eg = s(10876),
                ev = s.n(eg);
            let eb = {
                    exit: ev().stickyContainer_exit,
                    exitActive: ev().stickyContainer_exit_active,
                    enter: ev().stickyContainer_enter,
                    enterActive: ev().stickyContainer_enter_active,
                },
                ek = "buy-subscription-button",
                ey = (0, E.PA)((e) => {
                    var t, s;
                    let { className: r, shouldShowFixed: a, place: n } = e,
                        i = (0, h.useRef)(null),
                        { user: l } = (0, R.Pjs)(),
                        o = null == (t = (0, R.jwr)().places) ? void 0 : t[0],
                        {
                            target: c,
                            communicationId: u,
                            campaignId: d,
                        } = (0, ep.pr)(),
                        x = (0, ed.usePathname)() === R.Zyd.pay.href,
                        {
                            oneClickDisclaimerText: f,
                            oneClickAvailable: _,
                            oneClickDisclaimerTextA11y: m,
                            mainText: p,
                            mainTextA11y: g,
                            additionText: v,
                            openPaymentWidgetModal: b,
                            saveOfferAndAuthorize: E,
                        } = (0, R.DpZ)({
                            storeName: "music",
                            place: n || o,
                            communicationId: (x && u) || "",
                            campaignId: (x && d) || "",
                            customTarget: (x && c) || "",
                            offerElement: {
                                element: i.current,
                                intersectionPropertyId: ek,
                            },
                        }),
                        w = (0, h.useRef)(null),
                        [O, S] = (0, h.useState)(),
                        [C, A] = (0, h.useState)(!1),
                        { isIntersecting: N } =
                            null !=
                            (s = (0, e_.BL)([i], { preflightCheck: !1 }, !a)[
                                ek
                            ])
                                ? s
                                : {},
                        H = (0, h.useCallback)(() => {
                            if (!l.isAuthorized) return void E();
                            b();
                        }, [l.isAuthorized, b, E]);
                    (0, h.useEffect)(() => {
                        if (!N) {
                            var e;
                            S(
                                null == (e = i.current)
                                    ? void 0
                                    : e.closest(
                                          "[data-buy-subscription-block-portal]",
                                      ),
                            );
                        }
                    }, [N]),
                        (0, h.useEffect)(() => {
                            a &&
                                setTimeout(() => {
                                    A(!0);
                                }, 300);
                        }, [a, A]);
                    let L = a && O && p,
                        P = !!(L && !N && C);
                    return (0, k.jsxs)("div", {
                        className: (0, y.$)(ev().root, r),
                        children: [
                            (0, k.jsxs)(em.Button, {
                                isBlock: !0,
                                radius: "xxxl",
                                size: "l",
                                color: "plus",
                                className: ev().button,
                                ref: i,
                                "data-intersection-property-id": ek,
                                onClick: H,
                                "aria-label": g,
                                ...(0, j.Am)(j.e8.paywall.PAYWALL_OFFER_BUTTON),
                                children: [
                                    (0, k.jsx)(U.Caption, {
                                        className: ev().text_main,
                                        variant: "div",
                                        size: "l",
                                        children: p,
                                    }),
                                    v &&
                                        (0, k.jsx)(U.Caption, {
                                            className: ev().text_addition,
                                            variant: "div",
                                            size: "m",
                                            children: v,
                                        }),
                                ],
                            }),
                            _ &&
                                (0, k.jsx)(U.Caption, {
                                    className: ev().text_secondary,
                                    variant: "div",
                                    size: "s",
                                    weight: "normal",
                                    "aria-label": m,
                                    children: f,
                                }),
                            L &&
                                (0, ex.createPortal)(
                                    (0, k.jsx)(ef.A, {
                                        in: P,
                                        nodeRef: w,
                                        timeout: 300,
                                        classNames: eb,
                                        unmountOnExit: !0,
                                        children: (0, k.jsx)("div", {
                                            className: ev().stickyContainer,
                                            "aria-hidden": !0,
                                            ref: w,
                                            children: (0, k.jsx)(ey, {
                                                place: R.RBW.BOTTOM_BUTTON,
                                            }),
                                        }),
                                    }),
                                    O,
                                ),
                        ],
                    });
                });
            ey.displayName = "BuySubscriptionBlock";
            var eE = s(50641),
                eh = s.n(eE);
            let ej = (e) => {
                let { className: t } = e;
                return (0, k.jsx)("section", {
                    className: (0, y.$)(eh().root, t),
                    children: (0, k.jsx)("div", {
                        className: eh().wrapper,
                        children: (0, k.jsxs)("div", {
                            className: eh().content,
                            children: [
                                (0, k.jsx)(U.Heading, {
                                    variant: "h1",
                                    size: "xxl",
                                    className: eh().title,
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.music-on-many-devices",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                                (0, k.jsx)(U.Caption, {
                                    variant: "div",
                                    size: "l",
                                    weight: "normal",
                                    className: eh().label,
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.recommendations-on-devices",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                                (0, k.jsx)(ey, {
                                    className: eh().buySubscriptionBlock,
                                    shouldShowFixed: !0,
                                }),
                            ],
                        }),
                    }),
                });
            };
            var ew = s(36014),
                eO = s.n(ew);
            let eR = () =>
                (0, k.jsxs)(k.Fragment, {
                    children: [
                        (0, k.jsx)(ej, { className: eO().topSection }),
                        (0, k.jsx)(el, {
                            className: N().section,
                            variant: S.BY,
                        }),
                        (0, k.jsx)($, {
                            className: N().section,
                            variant: S.BY,
                        }),
                        (0, k.jsx)(eu, {
                            className: N().section,
                            variant: S.BY,
                        }),
                        (0, k.jsx)(T, { className: N().section_faq }),
                        (0, k.jsx)(I, {}),
                    ],
                });
            var eS = s(58006),
                eC = s.n(eS);
            let eA = (e) => {
                let { className: t, text: s, imageSrc: r, image2xSrc: a } = e;
                return (0, k.jsxs)("div", {
                    className: (0, y.$)(eC().root, t),
                    children: [
                        (0, k.jsx)(W.Image, {
                            className: eC().image,
                            src: r,
                            srcSet: a ? "".concat(a, " 2x") : void 0,
                            fit: "cover",
                            "aria-hidden": !0,
                        }),
                        (0, k.jsx)(U.Caption, {
                            className: eC().text,
                            variant: "span",
                            size: "l",
                            weight: "medium",
                            children: s,
                        }),
                    ],
                });
            };
            var eN = s(78447),
                eH = s.n(eN);
            let eL = (e) => {
                let {
                    id: t,
                    className: s,
                    contentClassName: r,
                    heading: a,
                    content: n,
                } = e;
                return (0, k.jsxs)("section", {
                    className: (0, y.$)(eH().root, s),
                    id: t,
                    children: [
                        (0, k.jsx)("div", {
                            className: eH().headingContainer,
                            children: a,
                        }),
                        (0, k.jsx)("div", {
                            className: (0, y.$)(eH().contentContainer, r),
                            children: n,
                        }),
                    ],
                });
            };
            var eP = s(27379),
                eB = s.n(eP);
            let eT = {
                    [S.RU]: "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig",
                    [S.BY]: "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig",
                },
                eI = {
                    [S.RU]: "https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig",
                    [S.BY]: "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig",
                },
                eD = {
                    [S.RU]: "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig",
                    [S.BY]: "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig",
                },
                eM = {
                    [S.RU]: "https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig",
                    [S.BY]: "https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig",
                },
                eU = (e) => {
                    let { className: t, variant: s = S.RU } = e,
                        r = (0, R.jjz)();
                    return (0, k.jsx)(eL, {
                        className: t,
                        contentClassName: eB()["content_".concat(s)],
                        heading: (0, k.jsxs)(k.Fragment, {
                            children: [
                                (0, k.jsx)(D.Icon, {
                                    variant: "kinopoisk".concat(r),
                                    className:
                                        eB()[
                                            "logo_".concat(
                                                r.toLocaleLowerCase(),
                                            )
                                        ],
                                }),
                                (0, k.jsx)(M.q, {
                                    children: (0, k.jsx)(U.Heading, {
                                        variant: "h2",
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.kinopoisk-part-title",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, k.jsxs)(k.Fragment, {
                            children: [
                                (0, k.jsx)(eA, {
                                    className: eB().card1,
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.kinopoisk-part-benefit-movies",
                                        values: { br: "\n", nbsp: "\xa0" },
                                    }),
                                    imageSrc: eT[s],
                                    image2xSrc: eI[s],
                                }),
                                (0, k.jsx)(eA, {
                                    className: eB().card2,
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.kinopoisk-part-benefit-exclusive",
                                        values: { br: "\n", nbsp: "\xa0" },
                                    }),
                                    imageSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig",
                                    image2xSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig",
                                }),
                                s === S.RU &&
                                    (0, k.jsx)(eA, {
                                        className: eB().card3,
                                        text: (0, k.jsx)(P.A, {
                                            id: "paywall.kinopoisk-part-benefit-sport",
                                            values: { br: "\n", nbsp: "\xa0" },
                                        }),
                                        imageSrc:
                                            "https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig",
                                        image2xSrc:
                                            "https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig",
                                    }),
                                (0, k.jsx)(eA, {
                                    className: (0, y.$)(
                                        eB().card4,
                                        eB()["card4_".concat(s)],
                                    ),
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.kinopoisk-part-benefit-channels",
                                        values: { br: "\n", nbsp: "\xa0" },
                                    }),
                                    imageSrc: eD[s],
                                    image2xSrc: eM[s],
                                }),
                            ],
                        }),
                    });
                };
            var eF = s(28959),
                eW = s.n(eF);
            let ez = (e) => {
                let { className: t, variant: s = S.RU } = e,
                    r = (0, R.jjz)(),
                    a = (0, h.useMemo)(
                        () =>
                            s === S.RU
                                ? (0, k.jsx)(P.A, {
                                      id: "paywall.music-part-benefit-books",
                                      values: { br: "\n", nbsp: "\xa0" },
                                  })
                                : (0, k.jsx)(P.A, {
                                      id: "paywall.music-part-benefit-books-alternative",
                                      values: { br: "\n", nbsp: "\xa0" },
                                  }),
                        [s],
                    );
                return (0, k.jsx)(eL, {
                    id: er,
                    className: t,
                    contentClassName: eW().content,
                    heading: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(D.Icon, {
                                variant: "musicLogoCenter".concat(r),
                                className:
                                    eW()["logo_".concat(r.toLocaleLowerCase())],
                            }),
                            (0, k.jsx)(M.q, {
                                children: (0, k.jsx)(U.Heading, {
                                    variant: "h2",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.music-part-title",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                            }),
                        ],
                    }),
                    content: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(eA, {
                                className: eW().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-recommendations",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig",
                            }),
                            (0, k.jsx)(eA, {
                                className: eW().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-many-devices",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig",
                            }),
                            (0, k.jsx)(eA, {
                                className: eW().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-playlists",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig",
                            }),
                            (0, k.jsx)(eA, {
                                className: eW().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.music-part-benefit-without-internet-mobile",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig",
                            }),
                            (0, k.jsx)(eA, {
                                className: eW().card,
                                text: a,
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig",
                            }),
                        ],
                    }),
                });
            };
            var eY = s(73353),
                eq = s.n(eY);
            let eV = (e) => {
                let { className: t, variant: s = S.RU } = e,
                    r = (0, R.jjz)();
                return (0, k.jsx)(eL, {
                    className: t,
                    contentClassName: eq()["content_".concat(s)],
                    heading: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(D.Icon, {
                                variant: "yandexPlus".concat(r),
                                className:
                                    eq()["logo_".concat(r.toLocaleLowerCase())],
                            }),
                            (0, k.jsx)(M.q, {
                                children: (0, k.jsx)(U.Heading, {
                                    variant: "h2",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.plus-part-title",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                            }),
                        ],
                    }),
                    content: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(eA, {
                                className: eq().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.plus-part-benefit-family",
                                    values: { br: "\n", nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig",
                            }),
                            (0, k.jsx)(eA, {
                                className: eq().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.plus-part-benefit-devices",
                                    values: { br: "\n" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/34161/img.67cade4deeed590a0d455116/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.67cade4beeed590a0d455115/orig",
                            }),
                        ],
                    }),
                });
            };
            var eK = s(74287),
                eZ = s.n(eK);
            let eQ = (e) => {
                let { className: t, moreInfoLinkProps: s } = e;
                return (0, k.jsxs)("section", {
                    className: (0, y.$)(eZ().root, t),
                    children: [
                        (0, k.jsx)("div", { className: eZ().image }),
                        (0, k.jsxs)("div", {
                            className: eZ().content,
                            children: [
                                (0, k.jsx)(U.Heading, {
                                    className: eZ().title,
                                    variant: "h1",
                                    size: "xl",
                                    weight: "bold",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.music-on-many-devices",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                                (0, k.jsx)(U.Caption, {
                                    variant: "div",
                                    size: "l",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.recommendations-on-devices",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                                (0, k.jsx)(ey, {
                                    className: eZ().buySubscriptionBlock,
                                    shouldShowFixed: !0,
                                }),
                                (0, k.jsx)(ea, {
                                    ...s,
                                    className: (0, y.$)(
                                        eZ().moreInfoLink,
                                        null == s ? void 0 : s.className,
                                    ),
                                }),
                            ],
                        }),
                    ],
                });
            };
            var eG = s(60166),
                eX = s.n(eG);
            let eJ = () =>
                    (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(eQ, { className: eX().topSection }),
                            (0, k.jsx)(ez, {
                                className: N().section,
                                variant: S.BY,
                            }),
                            (0, k.jsx)(eU, {
                                className: N().section,
                                variant: S.BY,
                            }),
                            (0, k.jsx)(eV, {
                                className: N().section,
                                variant: S.BY,
                            }),
                            (0, k.jsx)(T, { className: N().section_faq }),
                            (0, k.jsx)(I, {}),
                        ],
                    }),
                e$ = (0, E.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, R.Pjs)();
                    return (0, k.jsx)("div", {
                        className: L().root,
                        children: e ? (0, k.jsx)(eJ, {}) : (0, k.jsx)(eR, {}),
                    });
                });
            var e0 = s(90975),
                e1 = s.n(e0);
            let e8 = () =>
                (0, k.jsxs)("div", {
                    className: e1().root,
                    children: [
                        (0, k.jsx)(ej, { className: e1().topSection }),
                        (0, k.jsx)(T, { className: N().section_faq }),
                        (0, k.jsx)(I, {}),
                    ],
                });
            var e4 = s(96285),
                e6 = s.n(e4);
            let e2 = () =>
                    (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(eQ, {
                                className: e6().topSection,
                                moreInfoLinkProps: { shouldShowLabel: !1 },
                            }),
                            (0, k.jsx)(T, { faqProps: { id: er } }),
                            (0, k.jsx)(I, {}),
                        ],
                    }),
                e3 = (0, E.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, R.Pjs)();
                    return e ? (0, k.jsx)(e2, {}) : (0, k.jsx)(e8, {});
                });
            var e5 = s(35930),
                e9 = s.n(e5),
                e7 = s(97756),
                te = s.n(e7);
            let tt = (e) => {
                let { className: t, variant: s = S.RU } = e,
                    r = (0, R.jjz)();
                return (0, k.jsx)(Z, {
                    className: t,
                    contentClassName: te()["content_".concat(s)],
                    heading: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(D.Icon, {
                                variant: "yandexBooks".concat(r),
                                className:
                                    te()["logo_".concat(r.toLocaleLowerCase())],
                            }),
                            (0, k.jsx)(M.q, {
                                children: (0, k.jsx)(U.Heading, {
                                    variant: "h2",
                                    children: (0, k.jsx)(P.A, {
                                        id: "paywall.books-part-title",
                                        values: { nbsp: "\xa0" },
                                    }),
                                }),
                            }),
                        ],
                    }),
                    content: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(q, {
                                className: te().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.books-part-benefit-app-desktop",
                                    values: { nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cb364560d354cb53936/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.68c02ce6cccb5e758b864480/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_READ_IN_APP,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: te().card,
                                variant: "vertical",
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.books-part-benefit-follow-desktop",
                                    values: { nbsp: "\xa0" },
                                }),
                                imageAlign: "right",
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6a89798264a4b59f3a749/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a890ed792c3f4a135a74/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall.PAYWALL_SECTION_CARD_FIND_NEWS,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: te().card,
                                variant: "vertical",
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.books-part-benefit-download-desktop",
                                    values: { nbsp: "\xa0" },
                                }),
                                imageAlign: "right",
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a8c8caf72c4bc9eaea8c/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8bf4e6e980968aa844d/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_DOWNLOAD_BOOKS,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: te().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.books-part-benefit-speed-desktop",
                                    values: { br: "\n" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.68c02cbc9daf1b03347faca5/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cdccccb5e758b86447e/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_CHOOSE_PASE,
                                ),
                            }),
                        ],
                    }),
                    ...(0, j.Am)(j.e8.paywall.PAYWALL_BOOKS_SECTION),
                });
            };
            var ts = s(45104),
                tr = s.n(ts);
            let ta = (e) => {
                let { className: t, variant: s = S.RU } = e;
                return (0, k.jsx)(Z, {
                    className: t,
                    contentClassName: tr()["content_".concat(s)],
                    heading: (0, k.jsx)(U.Heading, {
                        variant: "h2",
                        className: tr().title,
                        children: (0, k.jsx)(P.A, {
                            id: "paywall.other-services-part-title",
                            values: { nbsp: "\xa0" },
                        }),
                    }),
                    content: (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(q, {
                                className: tr().card,
                                variant: "vertical",
                                imageAlign: "right",
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.other-services-part-benefit-maps",
                                    values: { nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec5170c5fe5082085b079/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec52e94053d016bcd7bf3/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall.PAYWALL_SECTION_CARD_MAPS,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: tr().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.other-services-part-benefit-your-plus",
                                    values: { nbsp: "\xa0" },
                                }),
                                imageAlign: "right",
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5408fcfeb05fbb439ec/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec547b510f9053778b2d0/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall.PAYWALL_SECTION_CARD_YOUR_PLUS,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: tr().card,
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.pay-part-benefit-split-desktop",
                                    values: { nbsp: "\xa0" },
                                }),
                                imageAlign: "right",
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5516fc33b70f1711a3a/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec558b510f9053778b2d2/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_DIVIDE_PAYMENT,
                                ),
                            }),
                            (0, k.jsx)(q, {
                                className: tr().card,
                                variant: "vertical",
                                imageAlign: "right",
                                text: (0, k.jsx)(P.A, {
                                    id: "paywall.other-services-part-save",
                                    values: { nbsp: "\xa0" },
                                }),
                                imageSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec565d57d6359e4120722/orig",
                                image2xSrc:
                                    "https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec56e6fc33b70f1711a3c/orig",
                                ...(0, j.Am)(
                                    j.e8.paywall
                                        .PAYWALL_SECTION_CARD_TAKE_SAVES,
                                ),
                            }),
                        ],
                    }),
                    ...(0, j.Am)(j.e8.paywall.PAYWALL_OTHER_SERVICES_SECTION),
                });
            };
            function tn() {
                return (tn = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var s = arguments[t];
                              for (var r in s)
                                  ({}).hasOwnProperty.call(s, r) &&
                                      (e[r] = s[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let ti = function (e) {
                return h.createElement(
                    "svg",
                    tn(
                        {
                            width: 64,
                            height: 64,
                            viewBox: "0 0 64 64",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        e,
                    ),
                    h.createElement(
                        "mask",
                        {
                            id: "mask0_1016_316950",
                            style: { maskType: "alpha" },
                            maskUnits: "userSpaceOnUse",
                            x: -1,
                            y: 0,
                            width: 65,
                            height: 64,
                        },
                        r ||
                            (r = h.createElement("circle", {
                                cx: 31.6934,
                                cy: 32,
                                r: 32,
                                fill: "#D9D9D9",
                            })),
                    ),
                    a ||
                        (a = h.createElement(
                            "g",
                            { mask: "url(#mask0_1016_316950)" },
                            h.createElement("path", {
                                d: "M17.9864 0V29.0933L0 16V0H17.9864Z",
                                fill: "url(#paint0_linear_1016_316950)",
                            }),
                            h.createElement("path", {
                                d: "M58.2771 0L36.0641 16.04L17.9844 29.0933V0H58.2771Z",
                                fill: "url(#paint1_linear_1016_316950)",
                            }),
                            h.createElement("path", {
                                d: "M63.9993 0V31.88L36.0664 39.36V16.04L58.2794 0H63.9993Z",
                                fill: "url(#paint2_linear_1016_316950)",
                            }),
                            h.createElement("path", {
                                d: "M63.9993 31.8789V60.5189L36.0664 53.0389V39.3589L63.9993 31.8789Z",
                                fill: "url(#paint3_linear_1016_316950)",
                            }),
                            h.createElement("path", {
                                d: "M63.9993 60.5191V63.9991H36.0664V53.0391L63.9993 60.5191Z",
                                fill: "url(#paint4_linear_1016_316950)",
                            }),
                            h.createElement("path", {
                                d: "M36.0661 16.04V64H0V16L17.9864 29.0933L36.0661 16.04Z",
                                fill: "#FFDAEA",
                            }),
                            h.createElement("path", {
                                d: "M27.0129 47.8395C24.8663 51.4394 21.5197 53.0261 18.013 53.0261C10.9998 53.0261 5.75991 48.0928 5.75991 40.6796C5.75991 40.6796 5.77324 39.6396 5.79991 39.3063L36.0661 39.3463V16.04L17.9864 29.0931L0 16V63.9992H36.0661V53.0394C32.5728 53.0261 29.3995 51.4394 27.0129 47.8528V47.8395ZM18.013 49.0128C21.5463 49.0128 23.7063 47.1862 23.9996 43.0662H11.1598C11.7198 46.7728 14.5864 49.0128 18.0264 49.0128H18.013ZM30.0262 43.0662H43.026C42.466 46.7728 39.4394 49.0128 35.9994 49.0128C32.5595 49.0128 30.3062 47.1862 30.0128 43.0662H30.0262Z",
                                fill: "#4D0000",
                            }),
                        )),
                    n ||
                        (n = h.createElement(
                            "defs",
                            null,
                            h.createElement(
                                "linearGradient",
                                {
                                    id: "paint0_linear_1016_316950",
                                    x1: 8.99319,
                                    y1: 29.0933,
                                    x2: 8.99319,
                                    y2: -2.64766,
                                    gradientUnits: "userSpaceOnUse",
                                },
                                h.createElement("stop", {
                                    stopColor: "#FFDAEA",
                                }),
                                h.createElement("stop", {
                                    offset: 0.6,
                                    stopColor: "#FFB56F",
                                }),
                                h.createElement("stop", {
                                    offset: 0.9,
                                    stopColor: "#FF5D5D",
                                }),
                            ),
                            h.createElement(
                                "linearGradient",
                                {
                                    id: "paint1_linear_1016_316950",
                                    x1: 38.1307,
                                    y1: 29.0933,
                                    x2: 38.1307,
                                    y2: 0,
                                    gradientUnits: "userSpaceOnUse",
                                },
                                h.createElement("stop", {
                                    stopColor: "#FFDAEA",
                                }),
                                h.createElement("stop", {
                                    offset: 0.4,
                                    stopColor: "#FFB56F",
                                }),
                                h.createElement("stop", {
                                    offset: 0.9,
                                    stopColor: "#FF5D5D",
                                }),
                            ),
                            h.createElement(
                                "linearGradient",
                                {
                                    id: "paint2_linear_1016_316950",
                                    x1: 36.0664,
                                    y1: 19.68,
                                    x2: 63.9993,
                                    y2: 19.68,
                                    gradientUnits: "userSpaceOnUse",
                                },
                                h.createElement("stop", {
                                    stopColor: "#FFDAEA",
                                }),
                                h.createElement("stop", {
                                    offset: 0.4,
                                    stopColor: "#FFB56F",
                                }),
                                h.createElement("stop", {
                                    offset: 0.9,
                                    stopColor: "#FF5D5D",
                                }),
                            ),
                            h.createElement(
                                "linearGradient",
                                {
                                    id: "paint3_linear_1016_316950",
                                    x1: 36.0664,
                                    y1: 46.1989,
                                    x2: 67.0254,
                                    y2: 46.1989,
                                    gradientUnits: "userSpaceOnUse",
                                },
                                h.createElement("stop", {
                                    stopColor: "#FFDAEA",
                                }),
                                h.createElement("stop", {
                                    offset: 0.6,
                                    stopColor: "#FFB56F",
                                }),
                                h.createElement("stop", {
                                    offset: 0.9,
                                    stopColor: "#FF5D5D",
                                }),
                            ),
                            h.createElement(
                                "linearGradient",
                                {
                                    id: "paint4_linear_1016_316950",
                                    x1: 36.0664,
                                    y1: 58.5191,
                                    x2: 63.9993,
                                    y2: 58.5191,
                                    gradientUnits: "userSpaceOnUse",
                                },
                                h.createElement("stop", {
                                    stopColor: "#FFDAEA",
                                }),
                                h.createElement("stop", {
                                    offset: 0.4,
                                    stopColor: "#FFB56F",
                                }),
                                h.createElement("stop", {
                                    offset: 0.9,
                                    stopColor: "#FF5D5D",
                                }),
                            ),
                        )),
                );
            };
            function tl() {
                return (tl = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var s = arguments[t];
                              for (var r in s)
                                  ({}).hasOwnProperty.call(s, r) &&
                                      (e[r] = s[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let to = function (e) {
                return h.createElement(
                    "svg",
                    tl(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 64 65",
                            fill: "none",
                        },
                        e,
                    ),
                    h.createElement(
                        "g",
                        { clipPath: "url(#clip0_4165_10094)" },
                        i ||
                            (i = h.createElement("rect", {
                                y: 0.5,
                                width: 64,
                                height: 64,
                                rx: 32,
                                fill: "white",
                            })),
                        l ||
                            (l = h.createElement("path", {
                                d: "M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z",
                                fill: "#FCCA00",
                            })),
                        o ||
                            (o = h.createElement("path", {
                                d: "M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z",
                                fill: "#FC3F1D",
                            })),
                        h.createElement(
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
                            c ||
                                (c = h.createElement("ellipse", {
                                    cx: 32,
                                    cy: 32.5,
                                    rx: 32,
                                    ry: 32,
                                    fill: "white",
                                })),
                        ),
                        u ||
                            (u = h.createElement("g", {
                                mask: "url(#mask0_4165_10094)",
                            })),
                        d ||
                            (d = h.createElement(
                                "g",
                                { clipPath: "url(#clip1_4165_10094)" },
                                h.createElement("rect", {
                                    width: 63.9999,
                                    height: 63.9999,
                                    transform: "translate(0 0.5)",
                                    fill: "black",
                                }),
                                h.createElement("path", {
                                    d: "M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z",
                                    fill: "url(#paint0_radial_4165_10094)",
                                }),
                            )),
                    ),
                    x ||
                        (x = h.createElement(
                            "defs",
                            null,
                            h.createElement(
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
                                h.createElement("stop", {
                                    offset: 0.5,
                                    stopColor: "#FF5500",
                                }),
                                h.createElement("stop", {
                                    offset: 1,
                                    stopColor: "#BBFF00",
                                }),
                            ),
                            h.createElement(
                                "clipPath",
                                { id: "clip0_4165_10094" },
                                h.createElement("rect", {
                                    y: 0.5,
                                    width: 64,
                                    height: 64,
                                    rx: 32,
                                    fill: "white",
                                }),
                            ),
                            h.createElement(
                                "clipPath",
                                { id: "clip1_4165_10094" },
                                h.createElement("rect", {
                                    width: 63.9999,
                                    height: 63.9999,
                                    fill: "white",
                                    transform: "translate(0 0.5)",
                                }),
                            ),
                        )),
                );
            };
            function tc() {
                return (tc = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var s = arguments[t];
                              for (var r in s)
                                  ({}).hasOwnProperty.call(s, r) &&
                                      (e[r] = s[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let tu = function (e) {
                return h.createElement(
                    "svg",
                    tc(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 64 65",
                            fill: "none",
                        },
                        e,
                    ),
                    f ||
                        (f = h.createElement("path", {
                            d: "M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z",
                            fill: "black",
                        })),
                    _ ||
                        (_ = h.createElement("path", {
                            d: "M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z",
                            fill: "#FED42B",
                        })),
                );
            };
            function td() {
                return (td = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var s = arguments[t];
                              for (var r in s)
                                  ({}).hasOwnProperty.call(s, r) &&
                                      (e[r] = s[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let tx = function (e) {
                return h.createElement(
                    "svg",
                    td(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 64 65",
                            fill: "none",
                        },
                        e,
                    ),
                    m ||
                        (m = h.createElement(
                            "g",
                            { clipPath: "url(#clip0_4032_54517)" },
                            h.createElement("rect", {
                                y: 0.5,
                                width: 64,
                                height: 64,
                                rx: 32,
                                fill: "white",
                            }),
                            h.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z",
                                fill: "url(#paint0_linear_4032_54517)",
                            }),
                        )),
                    p ||
                        (p = h.createElement(
                            "defs",
                            null,
                            h.createElement(
                                "linearGradient",
                                {
                                    id: "paint0_linear_4032_54517",
                                    x1: -253254e-12,
                                    y1: 28.2333,
                                    x2: 64,
                                    y2: 28.2333,
                                    gradientUnits: "userSpaceOnUse",
                                },
                                h.createElement("stop", {
                                    stopColor: "#FF5C4D",
                                }),
                                h.createElement("stop", {
                                    offset: 0.4,
                                    stopColor: "#EB469F",
                                }),
                                h.createElement("stop", {
                                    offset: 1,
                                    stopColor: "#8341EF",
                                }),
                            ),
                            h.createElement(
                                "clipPath",
                                { id: "clip0_4032_54517" },
                                h.createElement("rect", {
                                    y: 0.5,
                                    width: 64,
                                    height: 64,
                                    rx: 32,
                                    fill: "white",
                                }),
                            ),
                        )),
                );
            };
            var tf = s(92682),
                t_ = s.n(tf);
            let tm = () =>
                    (0, k.jsxs)("ul", {
                        className: t_().services,
                        children: [
                            (0, k.jsxs)("li", {
                                className: t_().service,
                                children: [
                                    (0, k.jsx)(tu, {
                                        className: t_().serviceLogo,
                                        "aria-hidden": !0,
                                    }),
                                    (0, k.jsx)(U.Heading, {
                                        variant: "h2",
                                        size: "m",
                                        className: t_().serviceLabel,
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.plus-benefit-music",
                                            values: { br: "\n", nbsp: "\xa0" },
                                        }),
                                    }),
                                ],
                            }),
                            (0, k.jsxs)("li", {
                                className: t_().service,
                                children: [
                                    (0, k.jsx)(to, {
                                        className: t_().serviceLogo,
                                        "aria-hidden": !0,
                                    }),
                                    (0, k.jsx)(U.Heading, {
                                        variant: "h2",
                                        size: "m",
                                        className: t_().serviceLabel,
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.plus-benefit-kinopoisk",
                                            values: { br: "\n", nbsp: "\xa0" },
                                        }),
                                    }),
                                ],
                            }),
                            (0, k.jsxs)("li", {
                                className: t_().service,
                                children: [
                                    (0, k.jsx)(ti, {
                                        className: t_().serviceLogo,
                                        "aria-hidden": !0,
                                    }),
                                    (0, k.jsx)(U.Heading, {
                                        variant: "h2",
                                        size: "m",
                                        className: t_().serviceLabel,
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.plus-benefit-books",
                                            values: { br: "\n" },
                                        }),
                                    }),
                                ],
                            }),
                            (0, k.jsxs)("li", {
                                className: t_().service,
                                children: [
                                    (0, k.jsx)(tx, {
                                        className: t_().serviceLogo,
                                        "aria-hidden": !0,
                                    }),
                                    (0, k.jsx)(U.Heading, {
                                        variant: "h2",
                                        size: "m",
                                        className: t_().serviceLabel,
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.plus-benefit-cashback",
                                            values: { br: "\n", nbsp: "\xa0" },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                tp = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: s },
                        } = (0, R.Pjs)(),
                        r = (0, R.jjz)(),
                        a =
                            (0, ed.usePathname)() === R.Zyd.pay.href &&
                            !s.isTouch;
                    return (0, k.jsxs)("section", {
                        className: (0, y.$)(t_().root, t),
                        ...(0, j.Am)(j.e8.paywall.PAYWALL_TOP_SECTION),
                        children: [
                            (0, k.jsxs)("div", {
                                className: t_().main,
                                children: [
                                    (0, k.jsx)(D.Icon, {
                                        variant: "yandexPlus".concat(r),
                                        className: (0, y.$)(
                                            t_().logo,
                                            t_()[
                                                "logo_".concat(r.toLowerCase())
                                            ],
                                        ),
                                    }),
                                    (0, k.jsx)(U.Heading, {
                                        variant: "h1",
                                        size: "xxxl",
                                        weight: "bold",
                                        className: t_().title,
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.open-plus-benefits",
                                            values: { br: "\n", nbsp: "\xa0" },
                                        }),
                                    }),
                                    (0, k.jsx)(tm, {}),
                                    (0, k.jsx)(ey, {
                                        className: t_().buySubscriptionBlock,
                                        shouldShowFixed: !0,
                                    }),
                                    a &&
                                        (0, k.jsx)(ee.N, {
                                            className: t_().goHomeLink,
                                            href: "/",
                                            children: (0, k.jsx)(U.Caption, {
                                                variant: "span",
                                                size: "m",
                                                weight: "medium",
                                                children: (0, k.jsx)(P.A, {
                                                    id: "navigation.go-home",
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, k.jsx)(ea, {
                                ...(0, j.Am)(
                                    j.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                ),
                                children: (0, k.jsx)(W.Image, {
                                    src: "https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig",
                                    srcSet: "https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig",
                                    fit: "contain",
                                    className: t_().moreInfoChildren,
                                    "aria-hidden": !0,
                                    ...(0, j.Am)(
                                        j.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                    ),
                                }),
                            }),
                        ],
                    });
                },
                tg = () =>
                    (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(tp, {}),
                            (0, k.jsx)(el, { className: N().section }),
                            (0, k.jsx)($, { className: N().section }),
                            (0, k.jsx)(tt, { className: N().section }),
                            (0, k.jsx)(eu, { className: N().section }),
                            (0, k.jsx)(ta, { className: N().section }),
                            (0, k.jsx)(T, {
                                className: N().section_faq,
                                variant: S.RU,
                            }),
                            (0, k.jsx)(I, { variant: S.RU }),
                        ],
                    });
            var tv = s(23212),
                tb = s.n(tv);
            let tk = (e) => {
                    let { className: t, variant: s = S.RU } = e,
                        r = (0, R.jjz)();
                    return (0, k.jsx)(eL, {
                        className: t,
                        contentClassName: tb()["content_".concat(s)],
                        heading: (0, k.jsxs)(k.Fragment, {
                            children: [
                                (0, k.jsx)(D.Icon, {
                                    variant: "yandexBooks".concat(r),
                                    className:
                                        tb()[
                                            "logo_".concat(
                                                r.toLocaleLowerCase(),
                                            )
                                        ],
                                }),
                                (0, k.jsx)(M.q, {
                                    children: (0, k.jsx)(U.Heading, {
                                        variant: "h2",
                                        children: (0, k.jsx)(P.A, {
                                            id: "paywall.books-part-title",
                                            values: { nbsp: "\xa0" },
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, k.jsxs)(k.Fragment, {
                            children: [
                                (0, k.jsx)(eA, {
                                    className: tb().card,
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.books-part-benefit-switch-mobile",
                                        values: { nbsp: "\xa0" },
                                    }),
                                    imageSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/69699/img.68c0128ad8f3372f64a885b4/orig",
                                    image2xSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/28052/img.68c012b2fbed8f7a98fb1441/orig",
                                }),
                                (0, k.jsx)(eA, {
                                    className: tb().card,
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.books-part-benefit-read-mobile",
                                        values: { nbsp: "\xa0" },
                                    }),
                                    imageSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6ac99ed792c3f4a135afd/orig",
                                    image2xSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/28592/img.66f6ac924e6e980968aa8463/orig",
                                }),
                                (0, k.jsx)(eA, {
                                    className: tb().card,
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.books-part-benefit-download-mobile",
                                        values: { nbsp: "\xa0" },
                                    }),
                                    imageSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6aca698264a4b59f3a7be/orig",
                                    image2xSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac9fcaf72c4bc9eaeaab/orig",
                                }),
                                (0, k.jsx)(eA, {
                                    className: tb().card,
                                    text: (0, k.jsx)(P.A, {
                                        id: "paywall.books-part-benefit-speed-mobile",
                                        values: { nbsp: "\xa0" },
                                    }),
                                    imageSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/30221/img.68c01296fbed8f7a98fb143c/orig",
                                    image2xSrc:
                                        "https://avatars.mds.yandex.net/get-music-misc/70850/img.68c012bbd8f3372f64a885b9/orig",
                                }),
                            ],
                        }),
                    });
                },
                ty = () =>
                    (0, k.jsxs)(k.Fragment, {
                        children: [
                            (0, k.jsx)(tp, {}),
                            (0, k.jsx)(ez, { className: N().section }),
                            (0, k.jsx)(eU, { className: N().section }),
                            (0, k.jsx)(tk, { className: N().section }),
                            (0, k.jsx)(eV, { className: N().section }),
                            (0, k.jsx)(T, {
                                className: N().section_faq,
                                variant: S.RU,
                            }),
                            (0, k.jsx)(I, { variant: S.RU }),
                        ],
                    }),
                tE = (0, E.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, R.Pjs)();
                    return (0, k.jsx)("div", {
                        className: e9().root,
                        children: e ? (0, k.jsx)(ty, {}) : (0, k.jsx)(tg, {}),
                    });
                }),
                th = {
                    [S.RU]: (0, k.jsx)(tE, {}),
                    [S.BY]: (0, k.jsx)(e$, {}),
                    [S.OTHER]: (0, k.jsx)(e3, {}),
                },
                tj = (0, E.PA)((e) => {
                    let { useOverlayScroll: t = !0 } = e,
                        { user: s } = (0, R.Pjs)(),
                        r = (0, R.jwr)(),
                        a = (0, w.L)(() =>
                            (0, k.jsx)("div", {
                                "data-buy-subscription-block-portal": !0,
                                className: N().root,
                                ...(0, j.Am)(j.e8.paywall.PAYWALL),
                                children:
                                    th[
                                        ((e) => (e && C[e]) || S.OTHER)(
                                            s.account.data.geoRegionIso,
                                        )
                                    ],
                            }),
                        ),
                        n = (0, h.useMemo)(
                            () =>
                                r.isContextDefined
                                    ? a
                                    : (0, k.jsx)(R.rtM, {
                                          page: R.l7W.MUSIC_PAYWALL_SCREEN,
                                          places: [
                                              R.RBW.BLOCK_1,
                                              R.RBW.BOTTOM_BUTTON,
                                          ],
                                          children: a,
                                      }),
                            [r.isContextDefined, a],
                        );
                    return t
                        ? (0, k.jsx)(O.C, {
                              className: (0, y.$)(N().overlayScroll, {
                                  [N().overlayScroll_desktop]: !0,
                              }),
                              children: n,
                          })
                        : n;
                });
            var tw = s(73827),
                tO = s(51704),
                tR = s(3981),
                tS = s.n(tR);
            let tC = (0, E.PA)(() => {
                let { paywall: e } = (0, R.Pjs)(),
                    { formatMessage: t } = (0, tw.A)(),
                    s = (0, R.eGp)();
                return (
                    (0, h.useEffect)(() => {
                        e.modal.isOpened && (null == s || s.pause());
                    }, [e.modal.isOpened, s, !0]),
                    (0, k.jsxs)(tO.a, {
                        open: e.modal.isOpened,
                        size: "fullscreen",
                        placement: "center",
                        showHeader: !1,
                        onClose: e.closeModal,
                        onOpenChange: e.onOpenChange,
                        closeOnOutsidePress: !1,
                        className: tS().root,
                        contentClassName: tS().content,
                        overlayColor: "full",
                        ...(0, j.Am)(j.e8.paywallModal.PAYWALL_MODAL),
                        children: [
                            (0, k.jsx)("header", {
                                className: tS().header,
                                children: (0, k.jsx)(em.Button, {
                                    radius: "round",
                                    color: "secondary",
                                    size: "xxs",
                                    icon: (0, k.jsx)(D.Icon, {
                                        variant: "close",
                                        size: "xxs",
                                    }),
                                    className: tS().closeButton,
                                    onClick: e.closeModal,
                                    "aria-label": t({
                                        id: "interface-actions.close",
                                    }),
                                    ...(0, j.Am)(
                                        j.e8.paywallModal
                                            .PAYWALL_MODAL_CLOSE_BUTTON,
                                    ),
                                }),
                            }),
                            (0, k.jsx)(tj, {}),
                        ],
                    })
                );
            });
        },
        45104: (e) => {
            e.exports = {
                title: "OtherServicesSectionDesktop_title__TmiIR",
                content_ru: "OtherServicesSectionDesktop_content_ru__tShm1",
                content_by: "OtherServicesSectionDesktop_content_by__GAt4T",
                card: "OtherServicesSectionDesktop_card__HqmGz",
                logo_ru: "OtherServicesSectionDesktop_logo_ru__tox8Q",
                logo_en: "OtherServicesSectionDesktop_logo_en__xuJro",
            };
        },
        46658: (e) => {
            e.exports = { button: "OfflineUserProfile_button__OJntz" };
        },
        47862: (e) => {
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
        50641: (e) => {
            e.exports = {
                root: "TopSectionDesktop_root__lDNkV",
                wrapper: "TopSectionDesktop_wrapper__sEPZr",
                content: "TopSectionDesktop_content__356Uk",
                title: "TopSectionDesktop_title__JFo6R",
                label: "TopSectionDesktop_label__JmilG",
                buySubscriptionBlock:
                    "TopSectionDesktop_buySubscriptionBlock__dhv3Z",
            };
        },
        50846: (e) => {
            e.exports = {
                buttonWithPlayerBar:
                    "WithBuySubscriptionModal_buttonWithPlayerBar__p7or7",
            };
        },
        51154: (e) => {
            e.exports = { root: "PaywallBY_root__XMtUB" };
        },
        53333: (e) => {
            e.exports = {
                root: "BuySubscriptionModal_root__5LvlX",
                content: "BuySubscriptionModal_content__v06Ju",
                heading: "BuySubscriptionModal_heading__07nBE",
                buttons: "BuySubscriptionModal_buttons__wSCRP",
                button: "BuySubscriptionModal_button__8m6Dx",
                buttonMainText: "BuySubscriptionModal_buttonMainText__pyjEc",
                buttonAdditionText:
                    "BuySubscriptionModal_buttonAdditionText__rdKJn",
                header: "BuySubscriptionModal_header__ho5hr",
            };
        },
        58006: (e) => {
            e.exports = {
                root: "MainCardMobile_root__AXTwk",
                image: "MainCardMobile_image__DZHrE",
                text: "MainCardMobile_text__rli4d",
            };
        },
        60166: (e) => {
            e.exports = { topSection: "PaywallBYMobile_topSection__sQ_sw" };
        },
        72680: (e) => {
            e.exports = {
                root: "UserIcon_root__X0jg9",
                root_withPlus: "UserIcon_root_withPlus__pRhgW",
                avatar: "UserIcon_avatar__6_6av",
            };
        },
        73353: (e) => {
            e.exports = {
                content_ru: "PlusSectionMobile_content_ru__OvJV0",
                content_by: "PlusSectionMobile_content_by__d5iGm",
                card: "PlusSectionMobile_card__QbwGe",
                logo_ru: "PlusSectionMobile_logo_ru___FFew",
                logo_en: "PlusSectionMobile_logo_en__u_HSO",
            };
        },
        73958: (e) => {
            e.exports = {
                content_ru: "PlusSectionDesktop_content_ru__85q1P",
                content_by: "PlusSectionDesktop_content_by__UBg10",
                card: "PlusSectionDesktop_card__h8LmR",
                logo_ru: "PlusSectionDesktop_logo_ru__G2AkZ",
                logo_en: "PlusSectionDesktop_logo_en__gn4qE",
            };
        },
        74287: (e) => {
            e.exports = {
                root: "TopSectionMobile_root__bl_XJ",
                image: "TopSectionMobile_image__t_hCH",
                content: "TopSectionMobile_content__sqstr",
                title: "TopSectionMobile_title__O_Zx0",
                buySubscriptionBlock:
                    "TopSectionMobile_buySubscriptionBlock__NSVnY",
                moreInfoLink: "TopSectionMobile_moreInfoLink__zjcOO",
            };
        },
        77270: (e) => {
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
        78289: (e) => {
            e.exports = {
                root: "MainSectionDesktop_root__MjgTL",
                headingContainer: "MainSectionDesktop_headingContainer__IaoRT",
                contentContainer: "MainSectionDesktop_contentContainer__L4OlR",
            };
        },
        78447: (e) => {
            e.exports = {
                root: "MainSectionMobile_root__l2R5l",
                headingContainer: "MainSectionMobile_headingContainer__6mJvx",
                contentContainer: "MainSectionMobile_contentContainer__vmaD5",
            };
        },
        83153: (e, t, s) => {
            "use strict";
            s.d(t, { BZ: () => R, FB: () => H, pr: () => n });
            var r = s(79169);
            let a = {
                    TARGET: "target",
                    COMMUNICATION_ID: "communication_id",
                    CAMPAIGN_ID: "campaign_id",
                },
                n = () => {
                    let e = (0, r.qne)(a.TARGET);
                    return {
                        target: e,
                        communicationId: (0, r.qne)(a.COMMUNICATION_ID),
                        campaignId: (0, r.qne)(a.CAMPAIGN_ID),
                    };
                };
            var i = s(33008),
                l = s(85896),
                o = s(97531),
                c = s(73827),
                u = s(96560),
                d = s(42213),
                x = s(44612),
                f = s(44189),
                _ = s(52756),
                m = s(91342),
                p = s(77868);
            let g = { src: "/_next/static/media/logos.fdba38dc.png" };
            var v = s(88419),
                b = s.n(v);
            let k = "BUY_SUBSCRIPTION_BANNER_BUTTON_INTERSECTION_PROPERTY_ID";
            (0, o.PA)((e) => {
                let { className: t } = e,
                    {
                        user: s,
                        paywall: { modal: a },
                    } = (0, r.Pjs)(),
                    [n, o] = (0, x.d)(),
                    { formatMessage: v } = (0, c.A)(),
                    {
                        mainText: y,
                        isShimmerVisible: E,
                        isShimmerActive: h,
                        openPaymentWidgetModal: j,
                        saveOfferAndAuthorize: w,
                    } = (0, r.DpZ)({
                        storeName: "music",
                        offerElement: { element: n, intersectionPropertyId: k },
                        place: r.RBW.BANNER_BUTTON,
                    }),
                    O = (0, d.c)(() => {
                        if (!s.isAuthorized) return void w();
                        j();
                    });
                return (0, i.jsxs)("section", {
                    className: (0, l.$)(b().root, t),
                    "aria-label": v({ id: "plusbar.subscription-activation" }),
                    "data-intersection-property-id":
                        "BUY_SUBSCRIPTION_BANNER_INTERSECTION_PROPERTY_ID",
                    children: [
                        (0, i.jsx)(_.Image, {
                            fit: "contain",
                            src: g.src,
                            className: b().logos,
                        }),
                        (0, i.jsx)(p.Heading, {
                            variant: "div",
                            size: "m",
                            weight: "bold",
                            className: b().title,
                            children: (0, i.jsx)(u.A, {
                                id: "buy-subscription.get-more-discoveries",
                                values: { nbsp: "\xa0" },
                            }),
                        }),
                        E &&
                            (0, i.jsx)(m.Shimmer, {
                                className: b().plusButtonShimmer,
                                isActive: h,
                                radius: "xxxl",
                            }),
                        !E &&
                            (0, i.jsx)(f.Button, {
                                className: b().plusButton,
                                isBlock: !0,
                                radius: "xxxl",
                                size: "m",
                                color: "plus",
                                onClick: O,
                                ref: o,
                                "data-intersection-property-id": k,
                                children: (0, i.jsx)(p.Caption, {
                                    variant: "div",
                                    size: "s",
                                    lineClamp: 2,
                                    children: y,
                                }),
                            }),
                        (0, i.jsx)(f.Button, {
                            className: b().button,
                            isBlock: !0,
                            radius: "xxxl",
                            size: "m",
                            variant: "text",
                            color: "primary",
                            withRipple: !1,
                            onClick: a.open,
                            children: (0, i.jsx)(u.A, {
                                id: "interface-actions.more-details",
                            }),
                        }),
                    ],
                });
            });
            var y = s(17846),
                E = s(51704),
                h = s(18740),
                j = s(53333),
                w = s.n(j);
            let O = "buy-subscription-modal",
                R = (0, o.PA)((e) => {
                    let { modal: t } = e,
                        s = (0, y.useRouter)(),
                        a = (0, r.NFA)().get(r.QGx),
                        [n, l] = (0, x.d)(),
                        {
                            openPaymentWidgetModal: o,
                            isShimmerActive: c,
                            isShimmerVisible: _,
                            mainText: m,
                            mainTextA11y: g,
                            additionText: v,
                            saveOfferAndAuthorize: b,
                        } = (0, r.DpZ)({
                            storeName: "music",
                            offerElement: {
                                element: n,
                                intersectionPropertyId: O,
                            },
                        }),
                        { user: k } = (0, r.Pjs)(),
                        j = (0, d.c)(() => {
                            if ((t.close(), !k.isAuthorized)) return void b();
                            o();
                        }),
                        R = (0, d.c)(() => {
                            t.close(),
                                a.authorizationUrl &&
                                    s.push(a.authorizationUrl);
                        });
                    return (0, i.jsxs)(E.a, {
                        className: w().root,
                        headerClassName: w().header,
                        contentClassName: w().content,
                        size: "fitContent",
                        placement: "default",
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        lockScroll: !0,
                        children: [
                            (0, i.jsx)(p.Caption, {
                                className: w().heading,
                                variant: "div",
                                weight: "bold",
                                children: (0, i.jsx)(u.A, {
                                    id: "buy-subscription.listen-without-restrictions",
                                    values: { nbsp: "\xa0" },
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: w().buttons,
                                children: [
                                    (0, i.jsx)(h.b4, {
                                        ref: l,
                                        "data-intersection-property-id": O,
                                        mainText: m,
                                        ariaLabel: g,
                                        additionText: v,
                                        isShimmerActive: c,
                                        isShimmerVisible: _,
                                        onClick: j,
                                        className: w().button,
                                        mainTextClassName: w().buttonMainText,
                                        additionTextClassName:
                                            w().buttonAdditionText,
                                    }),
                                    (0, i.jsx)(f.Button, {
                                        onClick: R,
                                        className: w().button,
                                        isBlock: !0,
                                        color: "secondary",
                                        variant: "default",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, i.jsx)(p.Caption, {
                                            className: w().buttonMainText,
                                            variant: "span",
                                            weight: "bold",
                                            children: (0, i.jsx)(u.A, {
                                                id: "buy-subscription.already-in-plus",
                                                values: { nbsp: "\xa0" },
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            R.displayName = "BuySubscriptionModal";
            var S = s(42314),
                C = s(1673),
                A = s.n(C);
            let N = "PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID",
                H = (0, o.PA)((e) => {
                    let { shouldFetchOffers: t, ...s } = e,
                        { user: a, experiments: n } = (0, r.Pjs)(),
                        [l, o] = (0, x.d)(),
                        { formatMessage: u } = (0, c.A)(),
                        {
                            mainText: _,
                            isShimmerVisible: g,
                            isShimmerActive: v,
                            openPaymentWidgetModal: b,
                            saveOfferAndAuthorize: k,
                        } = (0, r.DpZ)({
                            storeName: "music",
                            isEnabled: t,
                            offerElement: {
                                element: l,
                                intersectionPropertyId: N,
                            },
                        }),
                        y = (0, S.L)(() =>
                            !_ &&
                            n.checkExperiment(
                                r.zal.WebNextUnauthorizedSubscriptionButton,
                                "on",
                            )
                                ? u({ id: "authorization.start-button" })
                                : _,
                        ),
                        E = (0, d.c)(() => {
                            if (!a.isAuthorized) return void k();
                            b();
                        });
                    return g
                        ? (0, i.jsx)(m.Shimmer, {
                              className: A().plusButtonShimmer,
                              isActive: v,
                              radius: "xxxl",
                          })
                        : (0, i.jsx)(f.Button, {
                              className: A().root,
                              isBlock: !0,
                              radius: "xxxl",
                              size: "m",
                              color: "plus",
                              onClick: E,
                              ref: o,
                              "data-intersection-property-id": N,
                              ...s,
                              children: (0, i.jsx)(p.Caption, {
                                  variant: "div",
                                  size: "s",
                                  lineClamp: 2,
                                  children: y,
                              }),
                          });
                });
            H.displayName = "PlusNavbarButton";
            var L = s(66268),
                P = s(78016),
                B = s(92335),
                T = s.n(B);
            let I = "buy-subscription-button",
                D = (0, o.PA)((e) => {
                    let { className: t } = e,
                        s = (0, L.useRef)(null),
                        { showBuySubscriptionModal: a } = (0, r.qBP)(),
                        {
                            mainText: n,
                            mainTextA11y: o,
                            isShimmerVisible: c,
                            isShimmerActive: d,
                        } = (0, r.DpZ)({
                            storeName: "music",
                            isEnabled: !1,
                            offerElement: {
                                element: s.current,
                                intersectionPropertyId: I,
                            },
                        }),
                        x = (0, S.L)(() =>
                            c
                                ? (0, i.jsx)(h.nN, {
                                      className: T().titleShimmerContainer,
                                      isActive: d,
                                      textClassName: T().titleShimmer,
                                  })
                                : (0, i.jsx)(p.Caption, {
                                      className: T().title,
                                      variant: "span",
                                      size: "m",
                                      weight: "bold",
                                      "aria-label": o,
                                      children: n,
                                  }),
                        );
                    return (0, i.jsxs)("div", {
                        ref: s,
                        className: (0, l.$)(T().root, t),
                        "data-intersection-property-id": I,
                        children: [
                            (0, i.jsxs)("div", {
                                className: T().info,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: T().titleContainer,
                                        children: [
                                            (0, i.jsx)(P.Icon, {
                                                className: T().icon,
                                                "aria-hidden": !0,
                                                variant: "plusColor",
                                            }),
                                            x,
                                        ],
                                    }),
                                    (0, i.jsx)(p.Caption, {
                                        className: T().subtitle,
                                        variant: "span",
                                        size: "xs",
                                        weight: "normal",
                                        children: (0, i.jsx)(u.A, {
                                            id: "buy-subscription.music-and-films-and-other",
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(f.Button, {
                                color: "plus",
                                variant: "default",
                                size: "m",
                                radius: "xxxl",
                                onClick: a,
                                children: (0, i.jsx)(p.Caption, {
                                    className: T().buttonText,
                                    variant: "span",
                                    size: "m",
                                    weight: "normal",
                                    children: (0, i.jsx)(u.A, {
                                        id: "buy-subscription.activate",
                                    }),
                                }),
                            }),
                        ],
                    });
                });
            var M = s(50846),
                U = s.n(M);
            (0, o.PA)((e) => {
                var t;
                let { children: s } = e,
                    {
                        paymentWidgetModal: a,
                        modals: { buySubscriptionModal: n },
                        album: o,
                        albumCPA: { isPlusCPAPlayerBarEnabled: c },
                        settings: { isMobile: u, browserInfo: d },
                    } = (0, r.Pjs)(),
                    {
                        shouldShowBuySubscriptionModal: x,
                        showBuySubscriptionModal: f,
                        hideBuySubscriptionModal: _,
                    } = (0, r.qBP)(),
                    m = c(o.id, null == (t = o.meta) ? void 0 : t.isNonMusic),
                    p = null == d ? void 0 : d.isTouch,
                    g = u || (p && !m);
                return ((0, L.useEffect)(() => {
                    if (x && !m) {
                        if (a.modal.isOpened) return void _();
                        f();
                    }
                }, [_, a.modal.isOpened, x, f, m]),
                x && g)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              s,
                              (0, i.jsxs)(r.rtM, {
                                  page: r.l7W.MOBILE_POPUP,
                                  places: [r.RBW.TOP_BUTTON],
                                  shouldFetchOffers: x,
                                  children: [
                                      (0, i.jsx)(D, {
                                          className: (0, l.$)({
                                              [U().buttonWithPlayerBar]: m,
                                          }),
                                      }),
                                      (0, i.jsx)(R, { modal: n }),
                                  ],
                              }),
                          ],
                      })
                    : s;
            });
        },
        83445: (e) => {
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
        84162: (e) => {
            e.exports = {
                root: "MoreInfoLink_root___TgXc",
                content: "MoreInfoLink_content__Rjqj_",
            };
        },
        88419: (e) => {
            e.exports = {
                root: "BuySubscriptionBanner_root__y2M_5",
                logos: "BuySubscriptionBanner_logos__LHOzM",
                title: "BuySubscriptionBanner_title___sWo0",
                plusButton: "BuySubscriptionBanner_plusButton__UwULz",
                plusButtonShimmer:
                    "BuySubscriptionBanner_plusButtonShimmer__nS7im",
            };
        },
        90975: (e) => {
            e.exports = {
                root: "PaywallOtherDesktop_root__c19Ht",
                topSection: "PaywallOtherDesktop_topSection__d1CVV",
            };
        },
        92335: (e) => {
            e.exports = {
                root: "BuySubscriptionButton_root__BdquR",
                root_hidden: "BuySubscriptionButton_root_hidden__oMe3p",
                info: "BuySubscriptionButton_info__qBinu",
                subtitle: "BuySubscriptionButton_subtitle__Ni4VS",
                title: "BuySubscriptionButton_title__RG_OU",
                buttonText: "BuySubscriptionButton_buttonText__cmJMC",
                titleContainer: "BuySubscriptionButton_titleContainer__h7Lmt",
                titleShimmer: "BuySubscriptionButton_titleShimmer___hnah",
                titleShimmerContainer:
                    "BuySubscriptionButton_titleShimmerContainer__Wv82r",
                icon: "BuySubscriptionButton_icon__0oNi_",
            };
        },
        92682: (e) => {
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
                buySubscriptionBlock:
                    "TopSectionRU_buySubscriptionBlock__VBGT5",
                goHomeLink: "TopSectionRU_goHomeLink__zWv2w",
            };
        },
        96285: (e) => {
            e.exports = { topSection: "PaywallOtherMobile_topSection__Pscnw" };
        },
        97756: (e) => {
            e.exports = {
                content_ru: "BooksSectionDesktop_content_ru__Yauyu",
                content_by: "BooksSectionDesktop_content_by___eqCQ",
                card: "BooksSectionDesktop_card__blMRo",
                logo_ru: "BooksSectionDesktop_logo_ru__SRY4d",
                logo_en: "BooksSectionDesktop_logo_en__Szpr_",
            };
        },
    },
]);
