(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9718],
    {
        1217: (e, t, a) => {
            "use strict";
            a.d(t, { ConcertsBlock: () => C });
            var r = a(33008),
                n = a(85896),
                i = a(84798),
                s = a(66268),
                o = a(93967),
                l = a(95567),
                c = a(18740),
                d = a(16763),
                m = a(94917),
                u = a.n(m);
            let _ = (e) => {
                    let {
                            artistId: t,
                            forwardRef: a,
                            isLoading: m,
                            title: _,
                            viewAllActionLink: C,
                            children: h,
                            className: v,
                            containerClassName: g,
                            headerClassName: p,
                            itemClassName: x,
                            headingVariant: f,
                            ...b
                        } = e,
                        N = (0, s.useId)(),
                        k = (0, s.useRef)(null),
                        w = (0, d.m)({ artistId: t }),
                        j = (0, s.useCallback)(() => {
                            w(o.H2.ArtistConcertsScreen);
                        }, [w]),
                        y = (0, s.useMemo)(
                            () =>
                                (0, i.A)(h, 2)
                                    .slice(0, 4)
                                    .map((e, t) =>
                                        (0, r.jsx)(
                                            "div",
                                            {
                                                className: u().concertsColumn,
                                                children: e,
                                            },
                                            t,
                                        ),
                                    ),
                            [h],
                        );
                    return (0, r.jsxs)("section", {
                        ref: a,
                        className: (0, n.$)(u().root, v),
                        ...b,
                        children: [
                            (0, r.jsx)(c.Tw, {
                                className: p,
                                labeledForId: N,
                                title: _,
                                viewAllActionLink: C,
                                onViewAllAction: j,
                                controls: (0, r.jsx)(c.X9, {
                                    className: u().controls,
                                    carouselRef: k,
                                }),
                                headingVariant: f,
                            }),
                            (0, r.jsx)(l.Carousel, {
                                itemClassName: (0, n.$)(
                                    u().item,
                                    {
                                        [u().item_singleColumn]:
                                            2 >= s.Children.count(h),
                                    },
                                    x,
                                ),
                                className: (0, n.$)(g, {
                                    [u().preventScroll]: m,
                                }),
                                ref: k,
                                "aria-labelledby": N,
                                children: m
                                    ? Array.from({ length: 2 }, (e, t) =>
                                          (0, r.jsx)(
                                              "div",
                                              {
                                                  className: u().concertsColumn,
                                                  children: (0, c.Tb)(2),
                                              },
                                              t,
                                          ),
                                      )
                                    : y,
                            }),
                        ],
                    });
                },
                C = (0, s.forwardRef)((e, t) =>
                    (0, r.jsx)(_, { forwardRef: t, ...e }),
                );
        },
        5858: (e, t, a) => {
            "use strict";
            a.d(t, { t: () => n });
            var r = a(41028);
            let n = (e) => (0, r.wg)(e);
        },
        6204: (e, t, a) => {
            "use strict";
            a.d(t, { SearchMeta: () => c });
            var r = a(33008),
                n = a(97531),
                i = a(66268),
                s = a(77868),
                o = a(88012),
                l = a.n(o);
            let c = (0, n.PA)((e) => {
                let { id: t, concert: a } = e,
                    n = [],
                    o = (0, r.jsx)(s.Caption, {
                        variant: "span",
                        size: "m",
                        weight: "medium",
                        "aria-hidden": !0,
                        children: "•",
                    });
                return (
                    (null == a ? void 0 : a.city) &&
                        n.push(
                            (0, r.jsx)(s.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                children: a.city,
                            }),
                        ),
                    (null == a ? void 0 : a.contentRating) &&
                        n.push(
                            o,
                            (0, r.jsx)(s.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                children: a.contentRating,
                            }),
                        ),
                    (0, r.jsxs)("div", {
                        className: l().root,
                        id: t,
                        children: [
                            (0, r.jsx)(s.Caption, {
                                variant: "div",
                                size: "m",
                                weight: "medium",
                                className: l().city,
                                lineClamp: 1,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, r.jsx)("div", {
                                className: l().info,
                                children: n.map((e, t) =>
                                    (0, i.cloneElement)(e, { key: t }),
                                ),
                            }),
                        ],
                    })
                );
            });
        },
        10395: (e, t, a) => {
            "use strict";
            a.d(t, { J: () => n });
            var r = a(79169);
            let n = (e) => {
                let { h: t, s: a, l: n } = (0, r.g8k)(e);
                return "hsl("
                    .concat(t, ", ")
                    .concat(a, "%, ")
                    .concat(n <= 55 ? n + 20 : n - 20, "%)");
            };
        },
        13031: (e, t, a) => {
            "use strict";
            a.d(t, { useSendEventOnDonationNavigated: () => o });
            var r = a(93967),
                n = a(48551),
                i = a(42213),
                s = a(79169);
            let o = () => {
                let { hash: e } = (0, n.gf)(),
                    t = (0, s.UlF)(),
                    a = (0, n.st)(),
                    { pageId: o } = (0, s.$au)(),
                    {
                        blockId: l,
                        blockType: c,
                        blockPosX: d,
                        blockPosY: m,
                    } = (0, s.N8n)(),
                    {
                        objectType: u,
                        objectId: _,
                        objectPosX: C,
                        objectPosY: h,
                        objectsCount: v,
                        mainObjectId: g,
                        mainObjectType: p,
                    } = (0, s.Jfv)();
                return (0, i.c)((n, i) => {
                    if (!a || !o) return;
                    let x = s.Wft[o];
                    if (!x) return;
                    let f = {
                        to: n,
                        objectType: u,
                        objectId: _,
                        objectPosX: C,
                        objectPosY: h,
                        hash: e,
                        pageId: x,
                        mainObjectType: p,
                        mainObjectId: g,
                        entityType: c,
                        entityId: l,
                        entityPosX: d,
                        entityPosY: m,
                        objectsCount: v,
                        from: x,
                    };
                    i && (f.deepLink = i);
                    let b = (0, r.Fx)({
                        params: f,
                        logger: t,
                        context: "useSendEventOnDonationNavigated",
                    });
                    b && (0, r.QS)(a.evgenInstance, b);
                });
            };
        },
        14952: (e, t, a) => {
            "use strict";
            a.d(t, { OverviewBlock: () => k });
            var r = a(33008),
                n = a(85896),
                i = a(97531),
                s = a(66268),
                o = a.t(s, 2),
                l = a(18064),
                c = a(93225),
                d = {
                    4601: (e, t, a) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useToggle = void 0);
                        let r = a(810);
                        t.useToggle = (e) => {
                            let [t, a] = (0, r.useState)(e);
                            (0, r.useEffect)(() => {
                                a(e);
                            }, [e]);
                            let n = (0, r.useCallback)(() => {
                                    a((e) => !e);
                                }, []),
                                i = (0, r.useCallback)(() => {
                                    a(!0);
                                }, []),
                                s = (0, r.useCallback)(() => {
                                    a(!1);
                                }, []);
                            return {
                                state: t,
                                toggle: n,
                                setState: a,
                                toggleTrue: i,
                                toggleFalse: s,
                            };
                        };
                    },
                    352: (e) => {
                        e.exports = c;
                    },
                    810: (e) => {
                        e.exports = o;
                    },
                },
                m = {};
            function u(e) {
                var t = m[e];
                if (void 0 !== t) return t.exports;
                var a = (m[e] = { exports: {} });
                return d[e](a, a.exports, u), a.exports;
            }
            var _ = {};
            (() => {
                Object.defineProperty(_, "__esModule", { value: !0 }),
                    (_.useTruncate = void 0);
                let e = u(352),
                    t = u(810),
                    a = u(4601);
                _.useTruncate = (r) => {
                    let [n, i] = (0, t.useState)(0),
                        {
                            state: s,
                            toggleTrue: o,
                            toggleFalse: l,
                        } = (0, a.useToggle)(!1),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    let { offsetHeight: e, scrollHeight: t } =
                                        (null == r ? void 0 : r.current) || {};
                                    e && t && n < t ? o() : l();
                                }, 100),
                            [n, r, l, o],
                        );
                    return (
                        (0, t.useEffect)(() => {
                            var e, t;
                            !n &&
                                (null == (e = r.current)
                                    ? void 0
                                    : e.offsetHeight) &&
                                i(
                                    null == (t = r.current)
                                        ? void 0
                                        : t.offsetHeight,
                                );
                        }, [n, r]),
                        (0, t.useEffect)(
                            () => (
                                c(),
                                window.addEventListener("resize", c),
                                () => {
                                    window.removeEventListener("resize", c);
                                }
                            ),
                            [c],
                        ),
                        { isTruncated: s }
                    );
                };
            })(),
                _.__esModule;
            var C = _.useTruncate,
                h = a(44189),
                v = a(77868),
                g = a(79169),
                p = a(37850),
                x = a.n(p),
                f = a(73827),
                b = a(51704);
            let N = (0, i.PA)((e) => {
                    let {
                            message: t,
                            title: a,
                            className: i,
                            credits: s,
                            messageClassName: o,
                        } = e,
                        {
                            modals: { overviewModal: c },
                            settings: { isMobile: d },
                        } = (0, g.Pjs)(),
                        { formatMessage: m } = (0, f.A)(),
                        { contentRef: u } = (0, g.gKY)();
                    return (0, r.jsxs)(b.a, {
                        title: a,
                        titleProps: (0, l.Am)(
                            l.Kq.overview.OVERVIEW_MODAL_TITLE,
                        ),
                        className: (0, n.$)(x().modal, i),
                        contentClassName: x().modalContent,
                        overlayClassName: x().modalOverlay,
                        headerClassName: (0, n.$)(x().modalHeader, {
                            [x().modalHeader_withTitle]: a,
                        }),
                        size: "fitContent",
                        placement: d ? "default" : "right",
                        open: c.isOpened,
                        onOpenChange: c.onOpenChange,
                        onClose: c.close,
                        portalNode: d ? null : u,
                        isMobile: d,
                        labelClose: m({ id: "interface-actions.close" }),
                        containerProps: (0, l.Am)(l.Kq.overview.OVERVIEW_MODAL),
                        closeButtonProps: (0, l.Am)(
                            l.Kq.overview.OVERVIEW_MODAL_CLOSE_BUTTON,
                        ),
                        children: [
                            (0, r.jsx)(v.Caption, {
                                ...(0, l.Am)(
                                    l.Kq.overview.OVERVIEW_MODAL_MESSAGE,
                                ),
                                className: (0, n.$)(x().message, o),
                                size: "l",
                                variant: "div",
                                children: t,
                            }),
                            s,
                        ],
                    });
                }),
                k = (0, i.PA)((e) => {
                    let {
                            meta: t,
                            buttonClassName: a,
                            modalClassName: i,
                            creditsModal: o,
                            messageClassName: c,
                            messageModalClassName: d,
                            textButton: m,
                            withShowButton: u,
                        } = e,
                        _ = (0, s.useRef)(null),
                        {
                            modals: { overviewModal: p },
                        } = (0, g.Pjs)(),
                        { isTruncated: f } = C(_),
                        b = (f && t.isExpandable) || u;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(v.Caption, {
                                ref: _,
                                className: (0, n.$)(x().message, c),
                                size: "m",
                                variant: "div",
                                lineClamp: t.visibleLinesCount,
                                ...(0, l.Am)(l.Kq.overview.OVERVIEW_MESSAGE),
                                children: t.message,
                            }),
                            b &&
                                t.message &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(h.Button, {
                                            className: (0, n.$)(x().button, a),
                                            onClick: p.open,
                                            radius: "xs",
                                            variant: "text",
                                            color: "secondary",
                                            withRipple: !1,
                                            ...(0, l.Am)(
                                                l.Kq.overview
                                                    .OVERVIEW_FURTHER_BUTTON,
                                            ),
                                            children: (0, r.jsx)(v.Caption, {
                                                size: "m",
                                                variant: "span",
                                                children: m,
                                            }),
                                        }),
                                        (0, r.jsx)(N, {
                                            message: t.message,
                                            title: t.title,
                                            className: i,
                                            credits: o,
                                            messageClassName: d,
                                        }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        15321: (e) => {
            e.exports = {
                root: "ConcertCard_root__fcR9B",
                ripple: "ConcertCard_ripple__PW4xI",
                date: "ConcertCard_date__ECoa3",
                dateColor: "ConcertCard_dateColor__muPRD",
                button: "ConcertCard_button__GQxNL",
            };
        },
        16763: (e, t, a) => {
            "use strict";
            a.d(t, { m: () => o });
            var r = a(66268),
                n = a(93967),
                i = a(48551),
                s = a(79169);
            let o = (e) => {
                let { artistId: t, viewUuid: a } = e,
                    o = (0, i.st)(),
                    { hash: l } = (0, i.gf)(),
                    { pageId: c } = (0, s.$au)(),
                    {
                        objectsCount: d,
                        objectType: m,
                        objectId: u,
                        objectPosX: _,
                        objectPosY: C,
                        objectPos: h,
                    } = (0, s.Jfv)(),
                    v = (0, s.NKK)(),
                    g = (0, s.UlF)(),
                    p = (0, r.useCallback)(
                        (e) => {
                            let a = (0, n.Fx)({
                                params: {
                                    hash: l,
                                    artistId: t,
                                    objectsCount: d,
                                    objectType: m,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: C,
                                    to: e,
                                },
                                logger: g,
                                context: "useSendEventOnConcertNavigated",
                            });
                            o && a && (0, n.U6)(o.evgenInstance, a);
                        },
                        [o, t, l, g, u, _, C, m, d],
                    ),
                    x = (0, r.useCallback)(
                        (e) => {
                            let r = (0, n.Fx)({
                                params: {
                                    hash: l,
                                    artistId: t,
                                    viewUuid: a,
                                    objectId: u,
                                    objectPos: h,
                                    to: e,
                                },
                                logger: g,
                                context: "useSendEventOnConcertNavigated",
                            });
                            o && r && a && (0, n.mh)(o.evgenInstance, r);
                        },
                        [o, t, l, g, u, h, a],
                    );
                return (0, r.useCallback)(
                    (e) => {
                        if (o && c && s.xKB.includes(c))
                            switch (c) {
                                case s._Q$.ARTIST:
                                    p(e);
                                    break;
                                case s._Q$.ARTIST_CONCERTS:
                                    x(e);
                                    break;
                                case s._Q$.SEARCH:
                                    v({ to: n.QT.ConcertPurchaseScreen });
                            }
                    },
                    [o, c, v, x, p],
                );
            };
        },
        19911: (e, t, a) => {
            "use strict";
            a.d(t, { DonationButton: () => u });
            var r = a(33008),
                n = a(97531),
                i = a(66268),
                s = a(73827),
                o = a(30293),
                l = a(18064),
                c = a(44189),
                d = a(78016);
            let m = (0, n.PA)((e) => {
                    let {
                            onClick: t,
                            className: a,
                            size: n = "s",
                            iconSize: i = "xxs",
                            forwardRef: m,
                            ...u
                        } = e,
                        { formatMessage: _ } = (0, s.A)();
                    return (0, r.jsx)(c.Button, {
                        ref: m,
                        size: n,
                        variant: "default",
                        radius: "round",
                        color: "secondary",
                        onClick: t,
                        className: a,
                        "aria-label": _({ id: "donation.button-text" }),
                        icon: (0, r.jsx)(d.Icon, { size: i, variant: "ruble" }),
                        ...(0, o.getDataAttrFromProps)(u),
                        ...(0, l.Am)(l.S7.DONATION_BUTTON),
                    });
                }),
                u = (0, i.forwardRef)((e, t) =>
                    (0, r.jsx)(m, { forwardRef: t, ...e }),
                );
        },
        22397: (e, t, a) => {
            "use strict";
            a.d(t, { ConcertDate: () => m });
            var r = a(33008),
                n = a(85896),
                i = a(73827),
                s = a(18064),
                o = a(77868),
                l = a(79169),
                c = a(40817),
                d = a.n(c);
            let m = (e) => {
                let {
                        datetime: t,
                        className: a,
                        monthClassName: c,
                        dayClassName: m,
                        weekdayClassName: u,
                        withWeekday: _ = !0,
                        ...C
                    } = e,
                    { formatDate: h } = (0, i.A)(),
                    v = (0, l.mkF)(t);
                return (0, r.jsxs)("div", {
                    className: (0, n.$)(d().root, a),
                    "aria-label": h(t, (0, l.sDH)()),
                    ...C,
                    ...(0, s.Am)(s.OA.concert.CONCERT_DATE),
                    children: [
                        (0, r.jsx)(o.Caption, {
                            variant: "div",
                            size: "xs",
                            weight: "bold",
                            className: (0, n.$)(d().month, c),
                            children: v,
                        }),
                        (0, r.jsx)(o.Caption, {
                            variant: "div",
                            className: (0, n.$)(d().day, m),
                            children: h(t, (0, l.Uw7)()),
                        }),
                        _ &&
                            (0, r.jsx)(o.Caption, {
                                variant: "div",
                                size: "xs",
                                weight: "bold",
                                className: (0, n.$)(d().weekday, u),
                                children: h(t, { weekday: "short" }),
                            }),
                    ],
                });
            };
        },
        22445: (e) => {
            e.exports = {
                root: "ConcertImage_root__gZpOa",
                root_withMask: "ConcertImage_root_withMask__1ayfK",
                image: "ConcertImage_image__xtZCZ",
                day: "ConcertImage_day__c90Ih",
                month: "ConcertImage_month__Ic5k5",
                date: "ConcertImage_date__aH1IR",
                weekday: "ConcertImage_weekday__kXeo3",
                important: "ConcertImage_important__0o7jF",
            };
        },
        23923: (e, t, a) => {
            "use strict";
            a.d(t, { DonationCard: () => g });
            var r = a(33008),
                n = a(85896),
                i = a(66268),
                s = a(73827),
                o = a(96560),
                l = a(30293),
                c = a(44189),
                d = a(78016),
                m = a(54487),
                u = a(77868),
                _ = a(18740),
                C = a(78569),
                h = a.n(C);
            let v = (e) => {
                    let {
                            artist: t,
                            goal: a,
                            onNavigateToArtist: i,
                            onNavigateToDonation: C,
                            forwardRef: v,
                            ...g
                        } = e,
                        { formatMessage: p } = (0, s.A)();
                    return (0, r.jsxs)("div", {
                        ref: v,
                        className: (0, n.$)(h().root, h().donation),
                        ...(0, l.getDataAttrFromProps)(g),
                        children: [
                            (0, r.jsx)(m.Paper, {
                                radius: "round",
                                className: h().cover,
                                children: (0, r.jsx)(_.N_, {
                                    href: t.url,
                                    onClick: i,
                                    "aria-label": p(
                                        { id: "entity-names.artist-name" },
                                        { artistName: t.name },
                                    ),
                                    children: (0, r.jsx)(_.BW, {
                                        className: h().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: "cover",
                                        withAvatarReplace: !0,
                                        "aria-hidden": !0,
                                    }),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: h().container,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: h().text,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                variant: "span",
                                                size: "xs",
                                                weight: "bold",
                                                lineClamp: 2,
                                                className: h().artist,
                                                children: t.name,
                                            }),
                                            (0, r.jsx)(u.Caption, {
                                                variant: "span",
                                                type: "text",
                                                size: "l",
                                                weight: "medium",
                                                lineClamp: 2,
                                                className: h().goal,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(c.Button, {
                                        role: "link",
                                        size: "s",
                                        color: "secondary",
                                        onClick: C,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, r.jsx)(d.Icon, {
                                                variant: "ruble",
                                                size: "xxxs",
                                            }),
                                            (0, r.jsx)(u.Caption, {
                                                type: "text",
                                                size: "m",
                                                weight: "medium",
                                                variant: "span",
                                                children: (0, r.jsx)(o.A, {
                                                    id: "donation.support-button",
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                g = (0, i.forwardRef)((e, t) =>
                    (0, r.jsx)(v, { forwardRef: t, ...e }),
                );
        },
        26369: (e) => {
            e.exports = {
                root: "DonationCarousel_root__Uejjw",
                controls: "DonationCarousel_controls__anVvP",
                item: "DonationCarousel_item__89_B6",
                important: "DonationCarousel_important__Y52Es",
            };
        },
        37075: (e) => {
            e.exports = {
                root: "AfishaWidget_root__Fu9a6",
                content: "AfishaWidget_content__YFmbs",
                widget: "AfishaWidget_widget__ZdvqS",
            };
        },
        37850: (e) => {
            e.exports = {
                message: "OverviewBlock_message__f41Rq",
                modal: "OverviewBlock_modal__Jxiv2",
                modalHeader: "OverviewBlock_modalHeader__nerV2",
                modalHeader_withTitle:
                    "OverviewBlock_modalHeader_withTitle__gjKhp",
                modalContent: "OverviewBlock_modalContent__fw4fH",
                button: "OverviewBlock_button__k7t4c",
                modalOverlay: "OverviewBlock_modalOverlay__1dp_D",
            };
        },
        40765: (e, t, a) => {
            "use strict";
            a.d(t, { ConcertCardWithImage: () => k });
            var r = a(33008),
                n = a(97531),
                i = a(96560),
                s = a(93967),
                o = a(18064),
                l = a(42213),
                c = a(42314),
                d = a(45415),
                m = a(44189),
                u = a(93134),
                _ = a(77868),
                C = a(79169),
                h = a(83992),
                v = a(74571),
                g = a(44872),
                p = a(47487),
                x = a(77017),
                f = a.n(x),
                b = (function (e) {
                    return (e.SPACE = "Space"), (e.ENTER = "Enter"), e;
                })(b || {});
            let N = " • ",
                k = (0, n.PA)((e) => {
                    var t, a, n;
                    let {
                            concert: x,
                            withMask: b = !0,
                            withPriceButton: k,
                        } = e,
                        {
                            state: w,
                            toggleTrue: j,
                            toggleFalse: y,
                        } = (0, d.e)(!1),
                        { ref: A, intersectionPropertyId: I } = (0, C.nMI)(),
                        { experiments: T } = (0, C.Pjs)(),
                        E = T.checkExperiment(C.zal.WebNextConcertPage, "on"),
                        R = (0, C.NKK)(),
                        O = (0, h.useGetPriceText)(),
                        { href: D } = (0, C.uvd)("/concert/:concertId", {
                            params: { concertId: x.id },
                        }),
                        S = (0, C.ZpR)(D),
                        K = O(x),
                        P = (0, l.c)((e) => {
                            R({ to: s.QT.ConcertPurchaseScreen }),
                                j(),
                                null == e || e.stopPropagation();
                        }),
                        B = (0, l.c)((e) => {
                            if (!E) return void P(e);
                            S(e);
                        }),
                        W = (0, l.c)((e) => {
                            ("Space" === e.code || "Enter" === e.code) &&
                                (e.preventDefault(), B());
                        }),
                        z = (0, l.c)((e) => {
                            E && (P(e), e.preventDefault());
                        }),
                        F = (0, l.c)((e) => {
                            let t = [];
                            return (
                                x.city && t.push(x.city),
                                x.place && t.push(x.place),
                                t.join(e)
                            );
                        }),
                        $ = (0, c.L)(() => {
                            if (
                                x.isCashbackExperimentEnabled &&
                                x.cashbackTitle
                            )
                                return (0, r.jsx)(g.m, {
                                    className: f().cashback,
                                    titleClassName: f().cashbackTitle,
                                    title: x.cashbackTitle,
                                });
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: f().root,
                                role: "button",
                                tabIndex: 0,
                                onClick: B,
                                onKeyDown: W,
                                ref: A,
                                "data-intersection-property-id": I,
                                ...(0, o.Am)(o.OA.concert.CONCERT_CARD),
                                children: [
                                    (0, r.jsx)(u.q, {
                                        children: (0, r.jsx)(_.Caption, {
                                            variant: "div",
                                            children: (0, r.jsx)(i.A, {
                                                id: "entity-names.concert",
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: f().cover,
                                        children: (0, r.jsx)(p.ConcertImage, {
                                            datetime: x.datetime,
                                            coverColor:
                                                null == (t = x.cover)
                                                    ? void 0
                                                    : t.color,
                                            uri:
                                                null == (a = x.cover)
                                                    ? void 0
                                                    : a.uri,
                                            withMask: b,
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: f().meta,
                                        children: [
                                            (0, r.jsx)(_.Caption, {
                                                variant: "span",
                                                type: "controls",
                                                size: "l",
                                                weight: "medium",
                                                lineClamp: 1,
                                                className: f().title,
                                                ...(0, o.Am)(
                                                    o.OA.concert
                                                        .CONCERT_CARD_TITLE,
                                                ),
                                                children: x.title,
                                            }),
                                            (0, r.jsxs)(_.Caption, {
                                                variant: "span",
                                                type: "controls",
                                                weight: "medium",
                                                className: f().info,
                                                children: [
                                                    (0, r.jsx)(_.Caption, {
                                                        variant: "span",
                                                        type: "controls",
                                                        weight: "medium",
                                                        lineClamp: 1,
                                                        className: f().location,
                                                        "aria-label": F(" "),
                                                        ...(0, o.Am)(
                                                            o.OA.concert
                                                                .CONCERT_CARD_LOCATION,
                                                        ),
                                                        children: F(N),
                                                    }),
                                                    (0, r.jsx)(_.Caption, {
                                                        "aria-hidden": !0,
                                                        className:
                                                            f().separator,
                                                        variant: "span",
                                                        type: "controls",
                                                        weight: "medium",
                                                        children: N,
                                                    }),
                                                    (0, r.jsx)(_.Caption, {
                                                        variant: "span",
                                                        type: "controls",
                                                        weight: "medium",
                                                        className: f().rating,
                                                        ...(0, o.Am)(
                                                            o.OA.concert
                                                                .CONCERT_CARD_CONTENT_RATING,
                                                        ),
                                                        children:
                                                            x.contentRating,
                                                    }),
                                                ],
                                            }),
                                            $,
                                        ],
                                    }),
                                    (null == (n = x.price)
                                        ? void 0
                                        : n.value) &&
                                        (0, r.jsx)(u.q, {
                                            children: (0, r.jsx)(_.Caption, {
                                                variant: "div",
                                                children: K,
                                            }),
                                        }),
                                    k &&
                                        (0, r.jsx)(m.Button, {
                                            "aria-hidden": !0,
                                            tabIndex: -1,
                                            radius: "xxxl",
                                            className: f().button,
                                            size: "default",
                                            variant: "default",
                                            color: "primary",
                                            onClick: z,
                                            children: K,
                                        }),
                                ],
                            }),
                            (0, r.jsx)(v.AfishaWidget, {
                                dataSessionId: x.dataSessionId,
                                isOpened: w,
                                onOpen: j,
                                onClose: y,
                            }),
                        ],
                    });
                });
        },
        40817: (e) => {
            e.exports = {
                root: "ConcertDate_root__xnVG1",
                month: "ConcertDate_month__ti5Na",
                day: "ConcertDate_day__YibpP",
                weekday: "ConcertDate_weekday__fBZXo",
            };
        },
        44872: (e, t, a) => {
            "use strict";
            a.d(t, { m: () => c });
            var r = a(33008),
                n = a(85896),
                i = a(78016),
                s = a(77868),
                o = a(89396),
                l = a.n(o);
            let c = (e) => {
                let { title: t, className: a, titleClassName: o } = e;
                return (0, r.jsxs)("div", {
                    className: (0, n.$)(l().root, a),
                    children: [
                        (0, r.jsx)(i.Icon, {
                            "aria-hidden": !0,
                            className: l().icon,
                            variant: "plus",
                        }),
                        (0, r.jsx)(s.Caption, {
                            variant: "span",
                            type: "text",
                            size: "m",
                            weight: "medium",
                            lineClamp: 1,
                            className: (0, n.$)(l().title, o),
                            children: t,
                        }),
                    ],
                });
            };
        },
        47487: (e, t, a) => {
            "use strict";
            a.d(t, { ConcertImage: () => h });
            var r = a(33008),
                n = a(85896),
                i = a(97531),
                s = a(42314),
                o = a(52756),
                l = a(79169),
                c = a(30293);
            let d = (e) =>
                (0, c.httpsReplacer)(e.replace("%%", "960x690_noncrop"));
            var m = a(10395),
                u = a(22397),
                _ = a(22445),
                C = a.n(_);
            let h = (0, i.PA)((e) => {
                let { uri: t, withMask: a, datetime: i, coverColor: c } = e,
                    { experiments: _ } = (0, l.Pjs)(),
                    h =
                        _.checkExperiment(
                            l.zal.NewConcertsTicketRedesign,
                            "on",
                        ) && a,
                    v = (0, s.L)(() => {
                        if (c)
                            return {
                                "--concert-image-date-background": (0, m.J)(c),
                            };
                    });
                return (0, r.jsxs)("div", {
                    className: (0, n.$)(C().root, { [C().root_withMask]: h }),
                    style: v,
                    children: [
                        (0, r.jsx)(o.Image, {
                            className: C().image,
                            fit: "cover",
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: d,
                            "aria-hidden": !0,
                        }),
                        i &&
                            (0, r.jsx)(u.ConcertDate, {
                                dayClassName: C().day,
                                weekdayClassName: (0, n.$)(
                                    C().weekday,
                                    C().important,
                                ),
                                monthClassName: C().month,
                                className: C().date,
                                datetime: i,
                            }),
                    ],
                });
            });
        },
        51551: (e, t, a) => {
            "use strict";
            a.d(t, {
                hW: () => C.AfishaWidget,
                ZH: () => g.ArtistMeta,
                mi: () => h.m,
                VN: () => v.ConcertCard,
                Qb: () => x.ConcertCardWithImage,
                LY: () => w,
                dE: () => j.ConcertDate,
                Wt: () => y.ConcertImage,
                aR: () => _,
                BD: () => A.ConcertsBlock,
                wP: () => p.SearchMeta,
                oP: () => o,
                ho: () => l,
                Yi: () => c.useGetPriceText,
            });
            var r = a(41028);
            let n = /[+-]\d{2}:?\d{2}/,
                i = (e) => (null == e ? void 0 : e.replace(n, "")),
                s = (e) => {
                    if (e) return { value: e.value, currency: e.currency };
                },
                o = (e) => {
                    var t, a;
                    return (0, r.wg)({
                        id: e.id,
                        dataSessionId:
                            null != (a = e["data-session-id"]) ? a : "",
                        datetime: e.datetime && i(e.datetime),
                        city: e.city,
                        place: e.place,
                        contentRating: e.contentRating,
                        price: s(e.minPrice),
                        cashbackTitle:
                            null == (t = e.cashback) ? void 0 : t.title,
                        title: e.concertTitle,
                    });
                },
                l = (e, t) => {
                    var a;
                    let { uri: n, color: o } = e.cover || {};
                    return (0, r.wg)({
                        id: e.id,
                        title: e.concertTitle,
                        city: e.city,
                        place: e.place,
                        datetime: e.datetime && i(e.datetime),
                        contentRating: e.contentRating,
                        dataSessionId: e.dataSessionId,
                        cover: { uri: n, color: o },
                        rank: e.rank,
                        cashbackTitle:
                            null == (a = e.cashback) ? void 0 : a.title,
                        price: s(t),
                    });
                };
            a(10395);
            var c = a(83992),
                d = a(79169),
                m = a(59615);
            let u = r.gK.model("Price", {
                    value: r.gK.number,
                    currency: r.gK.string,
                }),
                _ = r.gK
                    .model("Concert", {
                        id: r.gK.string,
                        dataSessionId: r.gK.maybe(r.gK.string),
                        datetime: r.gK.maybe(r.gK.string),
                        city: r.gK.maybe(r.gK.string),
                        place: r.gK.maybe(r.gK.string),
                        contentRating: r.gK.maybe(r.gK.string),
                        price: r.gK.maybe(u),
                        cashbackTitle: r.gK.maybe(r.gK.string),
                        title: r.gK.maybe(r.gK.string),
                        cover: r.gK.maybe(m.$B),
                        rank: r.gK.maybe(r.gK.number),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, r.Zn)(e);
                            return t.checkExperiment(
                                d.zal.WebNextConcertsCashback,
                                "on",
                            );
                        },
                    }))
                    .actions((e) => ({
                        getKey: (t) => "".concat(t, "_").concat(e.id),
                    }));
            var C = a(74571),
                h = a(44872),
                v = a(84218),
                g = a(60153),
                p = a(6204),
                x = a(40765),
                f = a(33008),
                b = a(91342),
                N = a(77017),
                k = a.n(N);
            let w = (e) => {
                let { isActive: t, withPriceButton: a } = e;
                return (0, f.jsxs)("div", {
                    className: k().root,
                    children: [
                        (0, f.jsx)(b.Shimmer, {
                            radius: "m",
                            className: k().shimmerCover,
                            isActive: t,
                        }),
                        (0, f.jsx)("div", {
                            className: k().meta,
                            children: (0, f.jsx)(b.Shimmer, {
                                isActive: t,
                                radius: "xxxl",
                                className: k().shimmerTitle,
                            }),
                        }),
                        a &&
                            (0, f.jsx)(b.Shimmer, {
                                isActive: t,
                                radius: "xxxl",
                                className: k().shimmerButton,
                            }),
                    ],
                });
            };
            var j = a(22397),
                y = a(47487),
                A = a(1217);
        },
        53706: (e, t, a) => {
            "use strict";
            a.d(t, {
                vK: () => C.DonationButton,
                Xx: () => h.DonationCard,
                x0: () => v.DonationCarousel,
                kZ: () => k,
                eG: () => _,
                GT: () => o,
                Q$: () => u,
                cg: () => r.useSendEventOnDonationNavigated,
                CC: () => n.useSendEventOnDonationShowedOrHidden,
            });
            var r = a(13031),
                n = a(70139),
                i = a(41028),
                s = a(70879);
            let o = (e) => {
                let { url: t, artist: a, goal: r } = e;
                return (0, i.wg)({
                    url: t,
                    goal: r,
                    artist: (0, s.as)({ artist: a }),
                });
            };
            var l = a(17846),
                c = a(66268),
                d = a(79169);
            let m = {
                    [d.Sxu.Light]: "yandex_music",
                    [d.Sxu.Dark]: "yandex_music_dark",
                },
                u = () => {
                    let e = (0, l.useSearchParams)(),
                        { theme: t } = (0, d.DPo)();
                    return (0, c.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let r = new URLSearchParams(e);
                            return r.set("wl", m[t]), (0, d.Cvn)(a, r);
                        },
                        [t, e],
                    );
                },
                _ = i.gK.model("Donation", {
                    url: i.gK.string,
                    artist: s.PK,
                    goal: i.gK.maybe(i.gK.string),
                });
            var C = a(19911),
                h = a(23923),
                v = a(76595),
                g = a(33008),
                p = a(85896),
                x = a(91342),
                f = a(78569),
                b = a.n(f);
            let N = (e) => {
                    let { isActive: t } = e;
                    return (0, g.jsxs)("div", {
                        className: (0, p.$)(b().shimmer, b().donation),
                        children: [
                            (0, g.jsx)(x.Shimmer, {
                                isActive: t,
                                radius: "round",
                                className: b().shimmerCover,
                            }),
                            (0, g.jsxs)("div", {
                                className: b().shimmerContainer,
                                children: [
                                    (0, g.jsxs)("div", {
                                        className: b().shimmerText,
                                        children: [
                                            (0, g.jsx)(x.Shimmer, {
                                                isActive: t,
                                                radius: "xxxl",
                                                className: b().shimmerArtist,
                                            }),
                                            (0, g.jsx)(x.Shimmer, {
                                                isActive: t,
                                                radius: "xxxl",
                                                className: b().shimmerGoal,
                                            }),
                                        ],
                                    }),
                                    (0, g.jsx)(x.Shimmer, {
                                        isActive: t,
                                        radius: "xxxl",
                                        className: b().shimmerButton,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                k = (e) =>
                    Array.from({ length: 10 }, (t, a) =>
                        (0, g.jsx)(N, { isActive: e }, a),
                    );
        },
        60153: (e, t, a) => {
            "use strict";
            a.d(t, { ArtistMeta: () => u });
            var r = a(33008),
                n = a(97531),
                i = a(66268),
                s = a(73827),
                o = a(77868),
                l = a(79169),
                c = a(44872),
                d = a(88012),
                m = a.n(d);
            let u = (0, n.PA)((e) => {
                let { id: t, concert: a } = e,
                    { formatDate: n } = (0, s.A)(),
                    d = [],
                    u = (0, r.jsx)(o.Caption, {
                        variant: "span",
                        size: "m",
                        weight: "medium",
                        "aria-hidden": !0,
                        children: "•",
                    });
                return (
                    (null == a ? void 0 : a.place) &&
                        d.push(
                            (0, r.jsx)(o.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                children: a.place,
                            }),
                        ),
                    (null == a ? void 0 : a.datetime) &&
                        d.push(
                            u,
                            (0, r.jsx)(o.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                children: n(a.datetime, (0, l.fS8)()),
                            }),
                        ),
                    (null == a ? void 0 : a.contentRating) &&
                        d.push(
                            u,
                            (0, r.jsx)(o.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                children: a.contentRating,
                            }),
                        ),
                    (0, r.jsxs)("div", {
                        className: m().root,
                        id: t,
                        children: [
                            (0, r.jsx)(o.Caption, {
                                variant: "div",
                                size: "m",
                                weight: "medium",
                                className: m().city,
                                lineClamp: 1,
                                children: null == a ? void 0 : a.city,
                            }),
                            (0, r.jsx)("div", {
                                className: m().info,
                                children: d.map((e, t) =>
                                    (0, i.cloneElement)(e, { key: t }),
                                ),
                            }),
                            (null == a
                                ? void 0
                                : a.isCashbackExperimentEnabled) &&
                                (null == a ? void 0 : a.cashbackTitle) &&
                                (0, r.jsx)(c.m, {
                                    className: m().cashback,
                                    title: a.cashbackTitle,
                                }),
                        ],
                    })
                );
            });
        },
        65255: (e, t, a) => {
            "use strict";
            a.d(t, { kv: () => i, Fn: () => s.OverviewBlock, tm: () => r.t });
            var r = a(5858),
                n = a(41028);
            let i = n.gK.model("BaseOverview", {
                title: n.gK.maybe(n.gK.string),
                message: n.gK.maybe(n.gK.string),
                isExpandable: n.gK.optional(n.gK.boolean, !0),
                visibleLinesCount: n.gK.optional(n.gK.number, 3),
            });
            var s = a(14952);
        },
        70139: (e, t, a) => {
            "use strict";
            a.d(t, { useSendEventOnDonationShowedOrHidden: () => o });
            var r = a(93967),
                n = a(48551),
                i = a(42213),
                s = a(79169);
            let o = () => {
                let { hash: e } = (0, n.gf)(),
                    t = (0, s.UlF)(),
                    a = (0, n.st)(),
                    { pageId: o } = (0, s.$au)(),
                    {
                        blockId: l,
                        blockType: c,
                        blockPosX: d,
                        blockPosY: m,
                    } = (0, s.N8n)(),
                    {
                        objectType: u,
                        objectId: _,
                        objectPosX: C,
                        objectPosY: h,
                        objectsCount: v,
                        mainObjectId: g,
                        mainObjectType: p,
                    } = (0, s.Jfv)();
                return (0, i.c)((n, i) => {
                    if (!a || !o) return;
                    let x = s.Wft[o];
                    if (!x) return;
                    let f = (0, r.Fx)({
                        params: {
                            objectType: u,
                            objectId: _,
                            objectPosX: C,
                            objectPosY: h,
                            hash: e,
                            pageId: x,
                            mainObjectType: p,
                            mainObjectId: g,
                            entityType: c,
                            entityId: l,
                            entityPosX: d,
                            entityPosY: m,
                            objectsCount: v,
                            viewUuid: i,
                        },
                        logger: t,
                        context: "useSendEventOnDonationShowedOrHidden",
                    });
                    f &&
                        (n
                            ? (0, r.Pf)(a.evgenInstance, f)
                            : (0, r.nv)(a.evgenInstance, f));
                });
            };
        },
        74571: (e, t, a) => {
            "use strict";
            a.d(t, { AfishaWidget: () => u });
            var r = a(33008),
                n = a(66268),
                i = a(73827),
                s = a(44189),
                o = a(51704),
                l = a(93134),
                c = a(79169),
                d = a(37075),
                m = a.n(d);
            let u = (e) => {
                let {
                        dataSessionId: t,
                        isOpened: a,
                        onOpen: d,
                        onClose: u,
                    } = e,
                    _ = (0, c.NFA)().get(c.twC),
                    { formatMessage: C } = (0, i.A)(),
                    h = (0, n.useCallback)(
                        (e) => {
                            e.origin === _.afisha.host &&
                                "close" === e.data.type &&
                                u();
                        },
                        [u, _.afisha.host],
                    );
                (0, n.useEffect)(
                    () => (
                        window.addEventListener("message", h),
                        () => {
                            window.removeEventListener("message", h);
                        }
                    ),
                    [h],
                );
                let v = (0, n.useCallback)(
                        (e) => {
                            e ? d() : u();
                        },
                        [u, d],
                    ),
                    g = ""
                        .concat(_.afisha.host, "/w/sessions/")
                        .concat(t, "?clientKey=")
                        .concat(_.afisha.clientId);
                return (0, r.jsxs)(o.a, {
                    size: "fitContent",
                    placement: "center",
                    open: a,
                    onOpenChange: v,
                    onClose: u,
                    showHeader: !1,
                    className: m().widget,
                    contentClassName: m().content,
                    overlayColor: "full",
                    children: [
                        (0, r.jsx)(l.q, {
                            children: (0, r.jsx)(s.Button, {
                                "aria-label": C({
                                    id: "interface-actions.close",
                                }),
                                onClick: u,
                            }),
                        }),
                        (0, r.jsx)("iframe", {
                            src: g,
                            className: m().root,
                            referrerPolicy: "no-referrer",
                            sandbox:
                                "allow-forms allow-modals allow-popups allow-scripts allow-same-origin",
                            allow: "clipboard-read clipboard-write",
                        }),
                    ],
                });
            };
        },
        76595: (e, t, a) => {
            "use strict";
            a.d(t, { DonationCarousel: () => u });
            var r = a(33008),
                n = a(85896),
                i = a(66268),
                s = a(30293),
                o = a(95567),
                l = a(18740),
                c = a(26369),
                d = a.n(c);
            let m = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: c,
                            containerClassName: m,
                            headingVariant: u,
                            title: _,
                            viewAllActionLink: C,
                            description: h,
                            children: v,
                            ...g
                        } = e,
                        p = (0, i.useId)(),
                        x = (0, i.useRef)(null);
                    return (0, r.jsxs)("section", {
                        ref: a,
                        className: (0, n.$)(d().root, t),
                        ...(0, s.getDataAttrFromProps)(g),
                        children: [
                            (0, r.jsx)(l.Tw, {
                                className: c,
                                labeledForId: p,
                                title: _,
                                description: h,
                                viewAllActionLink: C,
                                controls: (0, r.jsx)(l.X9, {
                                    className: d().controls,
                                    carouselRef: x,
                                }),
                                headingVariant: u,
                                withDescription: !!h,
                            }),
                            (0, r.jsx)(o.Carousel, {
                                ref: x,
                                itemClassName: (0, n.$)(
                                    d().item,
                                    d().important,
                                ),
                                className: m,
                                "aria-labelledby": p,
                                children: v,
                            }),
                        ],
                    });
                },
                u = (0, i.forwardRef)((e, t) =>
                    (0, r.jsx)(m, { forwardRef: t, ...e }),
                );
        },
        77017: (e) => {
            e.exports = {
                root: "ConcertCardWithImage_root__NHF59",
                cover: "ConcertCardWithImage_cover__3V2fk",
                meta: "ConcertCardWithImage_meta__mhsYf",
                info: "ConcertCardWithImage_info__9VjYG",
                location: "ConcertCardWithImage_location__2mcwY",
                rating: "ConcertCardWithImage_rating__dL4_q",
                separator: "ConcertCardWithImage_separator__WhzW4",
                cashbackTitle: "ConcertCardWithImage_cashbackTitle__lfr7z",
                cashback: "ConcertCardWithImage_cashback__sNa2M",
                title: "ConcertCardWithImage_title__nPyZ6",
                shimmerCover: "ConcertCardWithImage_shimmerCover___X6xn",
                shimmerTitle: "ConcertCardWithImage_shimmerTitle__YgaQa",
                button: "ConcertCardWithImage_button__osv22",
                shimmerButton: "ConcertCardWithImage_shimmerButton__JZEFY",
            };
        },
        78569: (e) => {
            e.exports = {
                root: "DonationCard_root__81nc5",
                donation: "DonationCard_donation__SlArJ",
                cover: "DonationCard_cover__Mqb3g",
                image: "DonationCard_image__xABTn",
                container: "DonationCard_container__1xkqs",
                text: "DonationCard_text__mdeXx",
                artist: "DonationCard_artist__xq4Jw",
                goal: "DonationCard_goal__6BdcG",
                label: "DonationCard_label__T_hDw",
                shimmer: "DonationCard_shimmer__cMO7r",
                shimmerContainer: "DonationCard_shimmerContainer__9ZH20",
                shimmerText: "DonationCard_shimmerText__TrtjR",
                shimmerCover: "DonationCard_shimmerCover__U6Rwp",
                shimmerArtist: "DonationCard_shimmerArtist__jRQCV",
                shimmerGoal: "DonationCard_shimmerGoal__UGSTd",
                shimmerButton: "DonationCard_shimmerButton__LYfOm",
            };
        },
        83992: (e, t, a) => {
            "use strict";
            a.d(t, { useGetPriceText: () => i });
            var r = a(73827),
                n = a(42213);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, r.A)();
                return (0, n.c)((a) => {
                    var r, n;
                    return (null == (r = a.price) ? void 0 : r.value)
                        ? e(
                              { id: "payment.min-price" },
                              {
                                  value: t(a.price.value, {
                                      style: "currency",
                                      currency:
                                          null == (n = a.price)
                                              ? void 0
                                              : n.currency,
                                      maximumFractionDigits: 0,
                                  }),
                              },
                          )
                        : e({ id: "payment.buy" });
                });
            };
        },
        84218: (e, t, a) => {
            "use strict";
            a.d(t, { ConcertCard: () => b });
            var r = a(33008),
                n = a(85896),
                i = a(97531),
                s = a(66268),
                o = a(93967),
                l = a(42213),
                c = a(45415),
                d = a(88485),
                m = a(44189),
                u = a(54487),
                _ = a(79169),
                C = a(16763),
                h = a(48551),
                v = a(83992),
                g = a(74571),
                p = a(22397),
                x = a(15321),
                f = a.n(x);
            let b = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: i,
                        viewUuid: x,
                        radius: b = "l",
                        className: N,
                        shouldSendAnalyticsOnHide: k,
                    } = e,
                    { state: w, toggleTrue: j, toggleFalse: y } = (0, c.e)(!1),
                    { experiments: A } = (0, _.Pjs)(),
                    I = A.checkExperiment(_.zal.WebNextConcertPage, "on"),
                    { href: T } = (0, _.uvd)("/concert/:concertId", {
                        params: { concertId: a.id },
                    }),
                    E = (0, _.ZpR)(T),
                    R = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            r = (0, h.st)(),
                            { hash: n } = (0, h.gf)(),
                            { pageId: i } = (0, _.$au)(),
                            {
                                objectsCount: l,
                                objectType: c,
                                objectId: d,
                                objectPosX: m,
                                objectPosY: u,
                                objectPos: C,
                            } = (0, _.Jfv)(),
                            v = (0, _.UlF)(),
                            g = (0, s.useCallback)(() => {
                                let e = (0, o.Fx)({
                                    params: {
                                        hash: n,
                                        artistId: t,
                                        objectsCount: l,
                                        objectType: c,
                                        objectId: d,
                                        objectPosX: m,
                                        objectPosY: u,
                                    },
                                    logger: v,
                                    context: "useSendEventOnConcertShowed",
                                });
                                r && e && (0, o.HB)(r.evgenInstance, e);
                            }, [r, t, n, v, d, m, u, c, l]),
                            p = (0, s.useCallback)(() => {
                                let e = (0, o.Fx)({
                                    params: {
                                        hash: n,
                                        artistId: t,
                                        viewUuid: a,
                                        objectId: d,
                                        objectPos: C,
                                    },
                                    logger: v,
                                    context: "useSendEventOnConcertShowed",
                                });
                                r && e && a && (0, o.Z4)(r.evgenInstance, e);
                            }, [r, t, n, v, d, C, a]);
                        return (0, s.useCallback)(() => {
                            if (r && i && _.xKB.includes(i))
                                switch (i) {
                                    case _._Q$.ARTIST:
                                    case _._Q$.CONCERT:
                                        g();
                                        break;
                                    case _._Q$.ARTIST_CONCERTS:
                                        p();
                                }
                        }, [r, i, p, g]);
                    })({ artistId: t, viewUuid: x }),
                    O = (0, C.m)({ artistId: t, viewUuid: x }),
                    { ref: D, intersectionPropertyId: S } = (0, _.nMI)({
                        callback: null !== t ? R : void 0,
                        singleEvent: !k,
                    }),
                    K = (0, s.useId)(),
                    P = (0, s.useId)(),
                    B = (0, v.useGetPriceText)()(a),
                    W = (0, l.c)((e) => {
                        (0, d.P)(e, f().ripple), I && E(e);
                    }),
                    z = (0, l.c)((e) => {
                        j(),
                            O(o.H2.ConcertPurchaseScreen),
                            e.stopPropagation(),
                            e.preventDefault();
                    });
                return (0, r.jsxs)(u.Paper, {
                    radius: b,
                    className: (0, n.$)(f().root, N),
                    ref: D,
                    "data-intersection-property-id": S,
                    onClick: W,
                    children: [
                        a.datetime &&
                            (0, r.jsx)(p.ConcertDate, {
                                datetime: a.datetime,
                                id: K,
                                className: f().date,
                                dayClassName: f().dateColor,
                                monthClassName: f().dateColor,
                            }),
                        (0, s.cloneElement)(i, { id: P, concert: a }),
                        a.dataSessionId &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(m.Button, {
                                        color: "primary",
                                        radius: "xxxl",
                                        className: f().button,
                                        "aria-describedby": ""
                                            .concat(K, " ")
                                            .concat(P),
                                        "aria-label": B,
                                        onClick: z,
                                        children: B,
                                    }),
                                    (0, r.jsx)(g.AfishaWidget, {
                                        dataSessionId: a.dataSessionId,
                                        isOpened: w,
                                        onOpen: j,
                                        onClose: y,
                                    }),
                                ],
                            }),
                    ],
                });
            });
        },
        88012: (e) => {
            e.exports = {
                root: "ConcertMeta_root__CkKU3",
                city: "ConcertMeta_city__ngDq2",
                info: "ConcertMeta_info__czKlU",
                cashback: "ConcertMeta_cashback__fkZfk",
            };
        },
        89396: (e) => {
            e.exports = {
                root: "CashbackBadge_root__hStMF",
                icon: "CashbackBadge_icon__RJ6qe",
                title: "CashbackBadge_title__neGD7",
            };
        },
        94917: (e) => {
            e.exports = {
                root: "ConcertsBlock_root__d_1G3",
                controls: "ConcertsBlock_controls__oULxu",
                item: "ConcertsBlock_item__jMAX9",
                item_singleColumn: "ConcertsBlock_item_singleColumn__p8ilp",
                preventScroll: "ConcertsBlock_preventScroll__YeeZH",
                concertsColumn: "ConcertsBlock_concertsColumn__2M2t_",
            };
        },
    },
]);
