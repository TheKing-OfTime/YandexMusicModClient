(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3358],
    {
        10757: (e, s, o) => {
            "use strict";
            o.d(s, { usePlayerAction: () => i });
            var n = o(66268),
                t = o(79169),
                feedbackApi = o(61744);
            const sendPlayerStateDefault = (ve) => {
                let desktopEvents;
                const previousTrack =
                    (ve.state.queueState.index.value ?? 0) - 1 >= 0
                        ? ve.state.queueState?.entityList.value?.[
                        ve.state.queueState.index.value - 1
                            ]?.entity?.entityData?.meta
                        : undefined;
                const nextTrack =
                    (ve.state.queueState.index.value ?? 0) + 1 >= 0
                        ? ve.state.queueState?.entityList.value?.[
                        ve.state.queueState.index.value + 1
                            ]?.entity?.entityData?.meta
                        : undefined;

                null === (desktopEvents = window.desktopEvents) ||
                void 0 === desktopEvents ||
                desktopEvents.send(t.EE.PLAYER_STATE, {
                    status: ve.state.playerState.status.value,
                    isPlaying: ve.state.playerState.status.value === "playing",
                    canMoveForward:
                    ve.state.currentContext.value?.availableActions.moveForward.value,
                    canMoveBackward:
                    ve.state.currentContext.value?.availableActions.moveBackward
                        .value,
                    track:
                    ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                    progress: ve.state.playerState.progress.value?.position,
                    availableActions: {
                        moveBackward:
                        ve.state.currentContext.value?.availableActions.moveBackward
                            .value,
                        moveForward:
                        ve.state.currentContext.value?.availableActions.moveForward
                            .value,
                        repeat:
                        ve.state.currentContext.value?.availableActions.repeat.value,
                        shuffle:
                        ve.state.currentContext.value?.availableActions.shuffle.value,
                        speed:
                        ve.state.currentContext.value?.availableActions.speed.value,
                    },
                    actionsStore: {
                        repeat: ve.state.queueState.repeat.value,
                        shuffle: ve.state.queueState.shuffle.value,
                        isLiked:
                            ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                ve.state.queueState.currentEntity.value?.entity.entityData
                                    .meta.id,
                            ),
                        isDisliked:
                            ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                ve.state.queueState.currentEntity.value?.entity.entityData
                                    .meta.id,
                            ),
                    },
                    previousTrack,
                    nextTrack,
                    volume: ve.state.playerState.exponentVolume.value,
                });
            };
                var r = (function (e) {
                    return (
                        (e.PLAY = "PLAY"),
                        (e.PAUSE = "PAUSE"),
                        (e.MOVE_BACKWARD = "MOVE_BACKWARD"),
                        (e.MOVE_FORWARD = "MOVE_FORWARD"),
                        e
                    );
                })(r || {});
            let i = (e) => {
                let { sonataState: sonataState } = (0, t.Pjs)(),
                    onLikeClick = (0, feedbackApi.KX)(sonataState.entityMeta),
                    onDislikeClick = (0, feedbackApi.mW)(sonataState.entityMeta);
                let s = (0, n.useCallback)(
                    (s, o, value, nonce = 1) => {
                        if (window.playerActionEventDedupeNonce === nonce) return;
                        if (nonce) window.playerActionEventDedupeNonce = nonce;
                        switch (o) {
                            case 'PLAY':
                            case 'PAUSE':
                            case 'TOGGLE_PLAY':
                                null == e || e.togglePause();
                                break;
                            case 'MOVE_BACKWARD':
                                null == e || e.moveBackward();
                                break;
                            case 'MOVE_FORWARD':
                                null == e || e.moveForward();
                                break;
                            case 'REPEAT_NONE':
                                null == e || e.setRepeatMode('none');
                                break;
                            case 'REPEAT_CONTEXT':
                                null == e || e.setRepeatMode('context');
                                break;
                            case 'REPEAT_ONE':
                                null == e || e.setRepeatMode('one');
                                break;
                            case 'TOGGLE_REPEAT':
                                let nextMode = 'none';
                                switch (e?.state?.queueState?.repeat?.value) {
                                    case 'none':
                                        nextMode = e?.state?.currentContext?.value?.contextData?.type === 'vibe' ? 'one' : 'context';
                                        break;
                                    case 'context':
                                        nextMode = 'one';
                                        break;
                                    case 'one':
                                    default:
                                        nextMode = 'none';
                                        break;
                                }
                                null == e || e.setRepeatMode(nextMode);
                                break;
                            case 'TOGGLE_SHUFFLE':
                                null == e || e.toggleShuffle();
                                break;
                            case 'TOGGLE_LIKE':
                            case 'LIKE':
                            case 'LIKE_NONE':
                                null == e || onLikeClick?.(sonataState.entityMeta, o);
                                sendPlayerStateDefault?.(e);
                                break;
                            case 'DISLIKE':
                            case 'DISLIKE_NONE':
                            case 'TOGGLE_DISLIKE':
                                null == e || onDislikeClick?.(sonataState.entityMeta, o);
                                sendPlayerStateDefault?.(e);
                                break;
                            case 'SET_VOLUME':
                                null == e || e.setExponentVolume(Math.min(Math.max(value, 0), 100));
                                break;
                            case 'SET_PROGRESS':
                                null == e || e.setProgress(Math.max(value, 0));
                                break;
                        }
                    },
                    [e],
                );
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) ||
                            e.on(t.EE.PLAYER_ACTION, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.off(t.EE.PLAYER_ACTION, s);
                        }
                    );
                }, [s]);
            };
        },
        11693: (e) => {
            e.exports = {
                root: "NotificationUpdate_root__hpSQi",
                important: "NotificationUpdate_important___0WHj",
                text: "NotificationUpdate_text__YylYD",
                button: "NotificationUpdate_button__F3O16",
                message: "NotificationUpdate_message__rLYpW",
            };
        },
        12965: (e, s, o) => {
            "use strict";
            o.d(s, { useRefreshApplicationData: () => i });
            var n = o(66268),
                t = o(43836),
                r = o(79169);
            let i = () => {
                let {
                        library: e,
                        collection: s,
                        experiments: o,
                        main: i,
                        user: l,
                    } = (0, r.Pjs)(),
                    d = (0, n.useCallback)(() => {
                        o.getData(),
                            e.getData(),
                            i.landing.isLoaded &&
                                i.landing.getSkeleton(
                                    {
                                        id: t.p.WEB_MAIN,
                                        showWizard: l.settings.showWizard,
                                    },
                                    { preloadBlocksCount: 2 },
                                ),
                            s.landing.isLoaded &&
                                s.landing.getSkeleton(
                                    {
                                        id: t.p.WEB_COLLECTION,
                                        showWizard: l.settings.showWizard,
                                    },
                                    { preloadBlocksCount: 2 },
                                );
                    }, [s.landing, o, e, i.landing, l.settings.showWizard]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) ||
                            e.on(r.EE.REFRESH_APPLICATION_DATA, d),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.off(r.EE.REFRESH_APPLICATION_DATA, d);
                        }
                    );
                }, [d]);
            };
        },
        18275: (e, s, o) => {
            "use strict";
            o.d(s, { useProbabilityBucket: () => i });
            var n = o(66268),
                t = o(49444),
                r = o(79169);
            let i = () => {
                let e = (0, t.j)(),
                    s = (0, n.useCallback)(
                        (s, o) => {
                            o && e.count(o, "probabilityBucket");
                        },
                        [e],
                    );
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) ||
                            e.on(r.EE.PROBABILITY_BUCKET, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.off(r.EE.PROBABILITY_BUCKET, s);
                        }
                    );
                }, [s]);
            };
        },
        26271: (e) => {
            e.exports = {
                root: "NotFound_root__47ZX6",
                root_desktop: "NotFound_root_desktop___QqSb",
                navigation: "NotFound_navigation__q8rIW",
                content: "NotFound_content__3kry_",
                icon: "NotFound_icon___Wa9y",
                title: "NotFound_title__akG_o",
                important: "NotFound_important__z1LWl",
                text: "NotFound_text__oxDZv",
                button: "NotFound_button__jF4uH",
            };
        },
        27618: (e, s, o) => {
            "use strict";
            o.d(s, { NotFound: () => c });
            var n = o(33008),
                t = o(85896),
                r = o(97531),
                i = o(96560),
                l = o(44189),
                d = o(78016),
                a = o(77868),
                v = o(79169),
                h = o(18740),
                m = o(66268),
                b = o(26271),
                P = o.n(b);
            let c = (0, r.PA)((e) => {
                let {
                        className: s,
                        title: o,
                        description: r,
                        iconVariant: b = "musicLogo",
                        iconClassName: c,
                        iconSize: u,
                    } = e,
                    { contentRef: _ } = (0, v.gKY)(),
                    E = (0, v.ZpR)(v.Zyd.main.href);
                (0, v.LZB)();
                let { handleNavigateToMain: C } = (0, v.D5F)(E);
                return (
                    (0, v.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, v.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, n.jsxs)("div", {
                        className: (0, t.$)(
                            P().root,
                            { [P().root_desktop]: !_ },
                            s,
                        ),
                        children: [
                            (0, n.jsx)(h.Lh, {
                                withBackwardFallback: "/",
                                className: P().navigation,
                                withForwardControl: !1,
                            }),
                            (0, n.jsxs)("div", {
                                className: P().content,
                                children: [
                                    (0, n.jsx)(d.Icon, {
                                        className: (0, t.$)(P().icon, c),
                                        variant: b,
                                        size: u,
                                    }),
                                    (0, n.jsx)(a.Heading, {
                                        className: (0, t.$)(
                                            P().title,
                                            P().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            o ||
                                            (0, n.jsx)(i.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, n.jsx)(a.Caption, {
                                        className: (0, t.$)(
                                            P().text,
                                            P().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            r ||
                                            (0, n.jsx)(i.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, n.jsx)(l.Button, {
                                        onClick: C,
                                        className: P().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, n.jsx)(a.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, n.jsx)(i.A, {
                                                id: "navigation.page-main",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        30075: (e) => {
            e.exports = {
                root: "TitleBar_root__QjdOZ",
                button: "TitleBar_button__9MptL",
                button_withSecondaryColor:
                    "TitleBar_button_withSecondaryColor__oIkuo",
                icon: "TitleBar_icon__8Wji9",
                icon_withSecondaryColor:
                    "TitleBar_icon_withSecondaryColor__vuw6G",
                closeButton: "TitleBar_closeButton__Epxh7",
            };
        },
        34875: (e, s, o) => {
            "use strict";
            o.d(s, { useApplicationDeeplinks: () => d });
            var n = o(17846),
                t = o(66268),
                r = o(42213),
                i = o(79169);
            let l = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let s = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!s) return e;
                            let o = s[1],
                                n = s[2] || "";
                            if (!o) return e;
                            let t = new URLSearchParams(
                                n.startsWith("?") ? n.substring(1) : "",
                            );
                            return t.set("tab", o), "/?".concat(t.toString());
                        },
                    ],
                    [/^\/home$/, () => i.Zyd.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/history$/, () => i.Zyd.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let s = new URLSearchParams(e.split("?")[1]);
                            s.set(i.K3F.DEEPLINK, i.vEM.PLAY_VIBE);
                            let o = new URLSearchParams(window.location.search),
                                n = (0, i.$cg)(o, s);
                            return "landing" === s.get(i.K3F.SCREEN)
                                ? "/?".concat(n.toString())
                                : ""
                                      .concat(window.location.pathname, "?")
                                      .concat(n.toString());
                        },
                    ],
                ],
                d = () => {
                    let e = (0, n.useRouter)(),
                        s = (0, r.c)((s, o) => {
                            for (let [s, n] of l)
                                if (s.test(o)) return void e.push(n(o));
                            let { href: n } = (0, i.uvd)(
                                null != o ? o : i.Zyd.main.href,
                            );
                            e.push(n);
                        });
                    (0, t.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) ||
                                e.on(i.EE.OPEN_DEEPLINK, s),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) ||
                                    e.off(i.EE.OPEN_DEEPLINK, s);
                            }
                        );
                    }, [s]);
                };
        },
        38467: (e, s, o) => {
            "use strict";
            o.d(s, { LO: () => r, N5: () => i, vZ: () => t, toggleMiniPlayer: () => toggleMiniPlayer });
            var n = o(79169);
            let t = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_MINIMIZE);
                },
                r = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_MAXIMIZE);
                },
                i = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_CLOSE);
                },
                toggleMiniPlayer = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.TOGGLE_MINIPLAYER);
                };
        },
        41121: (e, s, o) => {
            "use strict";
            o.d(s, { ClientConfigInitializer: () => n }), o(33008);
            let n = (e) => {
                let { env: s, nonce: o } = e;
                return null;
            };
        },
        44312: (e, s, o) => {
            "use strict";
            o.d(s, { useApplicationUpdate: () => P });
            var n = o(33008),
                t = o(66268),
                r = o(73827),
                i = o(79169),
                l = o(85896),
                d = o(44189),
                a = o(77868),
                v = o(18740),
                h = o(11693),
                m = o.n(h);
            let b = (e) => {
                    let { version: s, formatMessage: o, closeToast: r } = e,
                        h = (0, t.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.send(i.EE.INSTALL_UPDATE),
                                null == r || r();
                        }, [r]),
                        b = (0, t.useMemo)(
                            () =>
                                (0, n.jsxs)("div", {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(a.Caption, {
                                            className: m().text,
                                            variant: "div",
                                            type: "controls",
                                            size: "m",
                                            children: o(
                                                {
                                                    id: "desktop.on-update-available",
                                                },
                                                { version: s },
                                            ),
                                        }),
                                        (0, n.jsx)(d.Button, {
                                            className: m().button,
                                            onClick: h,
                                            variant: "default",
                                            color: "secondary",
                                            size: "xs",
                                            radius: "xxxl",
                                            children: (0, n.jsx)(a.Caption, {
                                                variant: "div",
                                                type: "controls",
                                                size: "m",
                                                children: o({
                                                    id: "desktop.update",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            [o, h, s],
                        );
                    return (0, n.jsx)(v.$W, {
                        className: (0, l.$)(m().root, m().important),
                        message: b,
                    });
                },
                modUpdateToast = (e) => {
                    let { version: s, formatMessage: o, closeToast: r } = e,
                        [getProgress, setProgress] = (0, t.useState)(-1),
                        h = (0, t.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.send(i.EE.INSTALL_MOD_UPDATE),
                                null == r || r();
                        }, [r]),
                        callInstallModUpdate = (0, t.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.send(i.EE.DOWNLOAD_MOD_UPDATE);
                        }, []),
                        formattedMessages = (progressValue) => {
                            let message = o({ id: "offline.download" });
                            if (progressValue < 0) {
                                message = o({ id: "offline.download" });
                            } else if (
                                progressValue >= 0 &&
                                progressValue <= 100
                            ) {
                                message = "Скачивание…";
                            } else if (progressValue > 100) {
                                message = "Установить";
                            }
                            return message;
                        },
                        b = (0, t.useMemo)(
                            () =>
                                (0, n.jsxs)("div", {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(a.Caption, {
                                            className: m().text,
                                            variant: "div",
                                            type: "controls",
                                            size: "m",
                                            children: o(
                                                {
                                                    id: "desktop.on-mod-update-available",
                                                },
                                                { version: s },
                                            ),
                                        }),
                                        (0, n.jsx)(d.Button, {
                                            className: m().button,
                                            onClick:
                                                getProgress <= 100
                                                    ? callInstallModUpdate
                                                    : h,
                                            variant: "default",
                                            color: "secondary",
                                            size: "xs",
                                            radius: "xxxl",
                                            disabled:
                                                getProgress <= 100 &&
                                                getProgress >= 0,
                                            children: (0, n.jsx)(a.Caption, {
                                                variant: "div",
                                                type: "controls",
                                                size: "m",
                                                children:
                                                    formattedMessages(
                                                        getProgress,
                                                    ),
                                            }),
                                        }),
                                    ],
                                }),
                            [o, h, s, getProgress],
                        ),
                        progressBarUpdate = (0, t.useCallback)(
                            (
                                event,
                                elementType,
                                progress,
                                dedupeTimestamp = 0,
                            ) => {
                                if (elementType !== "modUpdateToast") return;

                                if (
                                    window.dedupeNonces &&
                                    window.dedupeNonces[elementType] ===
                                        dedupeTimestamp
                                )
                                    return;
                                if (!window.dedupeNonces)
                                    window.dedupeNonces = {};
                                if (dedupeTimestamp)
                                    window.dedupeNonces[elementType] =
                                        dedupeTimestamp;
                                setProgress(progress);
                            },
                            [setProgress],
                        );

                    return (
                        (0, t.useEffect)(() => {
                            var e;
                            return (
                                null === (e = window.desktopEvents) ||
                                    void 0 === e ||
                                    e.on(
                                        i.EE.PROGRESS_BAR_CHANGE,
                                        progressBarUpdate,
                                    ),
                                () => {
                                    var e;
                                    null === (e = window.desktopEvents) ||
                                        void 0 === e ||
                                        e.off(
                                            i.EE.PROGRESS_BAR_CHANGE,
                                            progressBarUpdate,
                                        );
                                }
                            );
                        }, [progressBarUpdate]),
                            (0, t.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(i.EE.MOD_UPDATE_AVAILABLE, ()=>{r()}),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(i.EE.MOD_UPDATE_AVAILABLE, ()=>{r()});
                                        }
                                );
                            }, [r]),
                        (0, n.jsx)(v.$W, {
                            className: (0, l.$)(m().root, m().important),
                            message: b,
                            children: [
                                (0, n.jsx)("div", {
                                    className: "qaIScXjx1qyXuaIHXQIo",
                                    style: {
                                        overflow: "hidden",
                                        left: '0',
                                        top: '0',
                                        position: "absolute",
                                        width: getProgress + '%',
                                        height: '100%',
                                        "background-color": "rgb(255 255 255)",
                                        opacity: getProgress <= 100 ? 0.1 : 0,
                                        "z-index": 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s ease-in-out',
                                    },
                                }),
                            ],
                        })
                    );
                },
                toastWithProgress = (e) => {
                    let {   closeToast: closeToast,
                            toastID,
                            message,
                            buttonLabel,
                            onButtonClick,
                            disabled = false,
                            dismissOnButtonClick = false
                        } = e,
                        [getProgress, setProgress] = (0, t.useState)(-1),
                        [statusLabel, setStatusLabel] = (0, t.useState)('Ожидание...'),


                        onClick = (0, t.useCallback)(
                            () => {
                                onButtonClick?.();
                                dismissOnButtonClick && closeToast?.();
                            },
                            [dismissOnButtonClick, onButtonClick, closeToast]),




                        notifyBody = (0, t.useMemo)(
                            () =>
                                (0, n.jsxs)("div", {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(a.Caption, {
                                            className: m().text,
                                            variant: "div",
                                            type: "controls",
                                            size: "m",
                                            children: message.replace('#s', statusLabel),
                                        }),
                                        buttonLabel && (0, n.jsx)(d.Button, {
                                            className: m().button,
                                            onClick: onClick,
                                            variant: "default",
                                            color: "secondary",
                                            size: "xs",
                                            radius: "xxxl",
                                            disabled: disabled,
                                            children: (0, n.jsx)(a.Caption, {
                                                variant: "div",
                                                type: "controls",
                                                size: "m",
                                                children: buttonLabel,
                                            }),
                                        }),
                                    ],
                                }),
                            [disabled, buttonLabel, message, onClick, statusLabel],
                        ),
                        progressBarUpdate = (0, t.useCallback)(
                            (
                                event,
                                elementType,
                                progress,
                                dedupeTimestamp = 0,
                                label = undefined,
                            ) => {
                                if (elementType !== toastID) return;

                                if (
                                    window.dedupeNonces &&
                                    window.dedupeNonces[elementType] ===
                                        dedupeTimestamp
                                )
                                    return;
                                if (!window.dedupeNonces)
                                    window.dedupeNonces = {};
                                if (dedupeTimestamp)
                                    window.dedupeNonces[elementType] =
                                        dedupeTimestamp;
                                setProgress(progress);
                                if (label) setStatusLabel(label);
                            },
                            [setProgress, setStatusLabel],
                        ),
                        onBasicToastDismiss = (0, t.useCallback)(
                            (event, closeToastID, dedupeTimestamp = 0) => {
                                if (window[`onBasicToastDismiss${toastID}`] === dedupeTimestamp) return;
                                if (dedupeTimestamp) window[`onBasicToastDismiss${toastID}`] = dedupeTimestamp;

                                if (closeToastID === toastID) {
                                    closeToast?.();
                                }

                            },
                            [closeToast],
                        );

                    return (
                        (0, t.useEffect)(() => {
                            var e;
                            return (
                                null === (e = window.desktopEvents) ||
                                    void 0 === e ||
                                    e.on(
                                        i.EE.PROGRESS_BAR_CHANGE,
                                        progressBarUpdate,
                                    ),
                                () => {
                                    var e;
                                    null === (e = window.desktopEvents) ||
                                        void 0 === e ||
                                        e.off(
                                            i.EE.PROGRESS_BAR_CHANGE,
                                            progressBarUpdate,
                                        );
                                }
                            );
                        }, [progressBarUpdate]),
                            (0, t.useEffect)(() => {
                                var e;
                                return (
                                    null === (e = window.desktopEvents) ||
                                    void 0 === e ||
                                    e.on(
                                        i.EE.BASIC_TOAST_DISMISS,
                                        onBasicToastDismiss,
                                    ),
                                        () => {
                                            var e;
                                            null === (e = window.desktopEvents) ||
                                            void 0 === e ||
                                            e.off(
                                                i.EE.BASIC_TOAST_DISMISS,
                                                onBasicToastDismiss,
                                            );
                                        }
                                );
                            }, [onBasicToastDismiss]),
                        (0, n.jsx)(v.$W, {
                            className: (0, l.$)(m().root, m().important),
                            message: notifyBody,
                            children: [
                                (0, n.jsx)("div", {
                                    className: "qaIScXjx1qyXuaIHXQIo",
                                    style: {
                                        overflow: "hidden",
                                        left: '0',
                                        top: '0',
                                        position: "absolute",
                                        width: getProgress + '%',
                                        height: '100%',
                                        "background-color": "rgb(255 255 255)",
                                        opacity: getProgress <= 100 ? 0.1 : 0,
                                        "z-index": 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                P = () => {
                    let { formatMessage: e } = (0, r.A)(),
                        { notify: s } = (0, i.lkh)(),
                        { notify: modUpdateNotify, dismiss: modUpdateDismiss } =
                            (0, i.lkh)(),
                        { notify: gpuStallNotify, dismiss: gpuStallDismiss } =
                            (0, i.lkh)(),
                        { notify: basicToastNotify } =
                            (0, i.lkh)(),
                        o = (0, t.useRef)(""),
                        l = (0, t.useCallback)(
                            (t, r) => {
                                o.current !== r &&
                                    ((o.current = r),
                                    s(
                                        (0, n.jsx)(b, {
                                            formatMessage: e,
                                            version: r,
                                        }),
                                        { containerId: i.uQT.IMPORTANT },
                                    ));
                            },
                            [e, o, s],
                        ),
                        modUpdateCallback = (0, t.useCallback)(
                            (a, s, newVersion, dedupeTimestamp = 0) => {
                                if (
                                    window.modUpdateAvailableEventDedupeNonce === dedupeTimestamp
                                )
                                    return;
                                if (dedupeTimestamp)
                                    window.modUpdateAvailableEventDedupeNonce = dedupeTimestamp;
                                modUpdateNotify((0, n.jsx)(modUpdateToast, { formatMessage: e, version: `${s} -> ${newVersion}`, closeToast: modUpdateDismiss }), {
                                    containerId: i.uQT.IMPORTANT,
                                });
                            },
                            [e, modUpdateNotify, modUpdateDismiss],
                        ),
                        onGPUStallFixClick = (0, t.useCallback)(() => {
                            window.desktopEvents?.send(i.lkh.APPLICATION_RESTART);
                        }, []),
                        onGPUStall = (0, t.useCallback)(
                            (event, reason='GPU_STALL', dedupeTimestamp = 0) => {
                                if (
                                    window.onGPUStallEventDedupeNonce === dedupeTimestamp
                                )
                                    return;
                                if (dedupeTimestamp)
                                    window.onGPUStallEventDedupeNonce = dedupeTimestamp;
                                gpuStallNotify((0, n.jsx)(toastWithProgress, { toastID:'GPU_STALL', message:`Аппаратное ускорение отключилось: ${reason}`, buttonLabel: 'Исправить', onButtonClick:onGPUStallFixClick }), {
                                    containerId: i.uQT.IMPORTANT,
                                });
                            },
                            [gpuStallNotify, gpuStallDismiss],
                        ),
                        onBasicToastCreate = (0, t.useCallback)(
                            (event, toastID, message, dismissable, dedupeTimestamp = 0) => {
                                if (window[`onBasicToastCreate${toastID}`] === dedupeTimestamp) return;
                                if (dedupeTimestamp) window[`onBasicToastCreate${toastID}`] = dedupeTimestamp;
                                basicToastNotify((0, n.jsx)(toastWithProgress, {
                                    toastID: toastID,
                                    message: message,
                                    buttonLabel: dismissable ? dismissable : undefined,
                                    dismissOnButtonClick: !!dismissable,
                                }), {
                                    containerId: i.uQT.IMPORTANT,
                                });
                            },
                            [basicToastNotify],
                        );
                    (0, t.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) ||
                            e.on(i.EE.BASIC_TOAST_CREATE, onBasicToastCreate),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) ||
                                    e.off(i.EE.BASIC_TOAST_CREATE, onBasicToastCreate);
                                }
                        );
                    }, [modUpdateCallback]);
                    (0, t.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) ||
                            e.on(i.EE.MOD_UPDATE_AVAILABLE, modUpdateCallback),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) ||
                                    e.off(i.EE.MOD_UPDATE_AVAILABLE, modUpdateCallback);
                                }
                        );
                    }, [modUpdateCallback]);
                    (0, t.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) ||
                            e.on(i.EE.GPU_STALL, onGPUStall),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) ||
                                    e.off(i.EE.GPU_STALL, onGPUStall);
                                }
                        );
                    }, [onGPUStall]);
                    (0, t.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) ||
                                e.on(i.EE.UPDATE_AVAILABLE, l),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) ||
                                    e.off(i.EE.UPDATE_AVAILABLE, l);
                            }
                        );
                    }, [l]);
                };
        },
        51998: (e, s, o) => {
            "use strict";
            o.d(s, { useReleaseNotes: () => r });
            var n = o(66268),
                t = o(79169);
            let r = () => {
                let [e, s] = (0, n.useState)(!1),
                    {
                        releaseNotes: {
                            setTranslationsReleaseNotes: o,
                            isReady: r,
                            modal: i,
                            setSortedDescReleaseNotesKeys: l,
                        },
                    } = (0, t.Pjs)(),
                    d = (0, n.useCallback)(
                        (e, n) => {
                            let {
                                needToShowReleaseNotes: t,
                                sortedDescReleaseNotesKeys: r,
                                translationsReleaseNotes: i,
                            } = n;
                            o(i), l(r), t && s(!0);
                        },
                        [l, o],
                    );
                (0, n.useEffect)(() => {
                    e && r && (i.open(), s(!1));
                }, [r, i, e]),
                    (0, n.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) ||
                                e.on(t.EE.LOAD_RELEASE_NOTES, d),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) ||
                                    e.off(t.EE.LOAD_RELEASE_NOTES, d);
                            }
                        );
                    }, [d]);
            };
        },
        58290: (e, s, o) => {
            "use strict";
            o.d(s, { useSendPlayerState: () => l });
            var n = o(66268),
                t = o(42213),
                r = o(53555),
                i = o(79169);
            let l = (e) => {
                let { sonata: s } = e,
                    o = (0, t.c)((e) => {
                        var s;
                        let {
                            isPlaying: o,
                            canMoveBackward: n,
                            canMoveForward: t,
                        } = e;
                        null == (s = window.desktopEvents) ||
                            s.send(i.EE.PLAYER_STATE, {
                                isPlaying: o,
                                canMoveBackward: n,
                                canMoveForward: t,
                                status: e.status,
                                track: e.track,
                                progress: e.progress,
                                availableActions: e.availableActions,
                                actionsStore: e.actionsStore,
                                previousTrack: e.previousTrack,
                                nextTrack: e.nextTrack,
                                volume: e.volume,
                            });
                    }),
                    sendPlayerStateDefault = (ve) => {

                        const previousTrack = ((ve.state.queueState.index.value ?? 0) - 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value-1]]?.entity?.entityData?.meta : undefined;
                        const nextTrack = ((ve.state.queueState.index.value ?? 0) + 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value+1]]?.entity?.entityData?.meta : undefined;

                        o({
                            status: ve.state.playerState.status.value,
                            isPlaying: ve.state.playerState.status.value === r.MT.PLAYING,
                            canMoveForward:
                            ve.state.currentContext.value?.availableActions.moveForward
                                .value,
                            canMoveBackward:
                            ve.state.currentContext.value?.availableActions.moveBackward
                                .value,
                            track:
                            ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                            progress: ve.state.playerState.progress.value?.position,
                            availableActions: {
                                moveBackward:
                                ve.state.currentContext.value?.availableActions.moveBackward
                                    .value,
                                moveForward:
                                ve.state.currentContext.value?.availableActions.moveForward
                                    .value,
                                repeat:
                                ve.state.currentContext.value?.availableActions.repeat.value,
                                shuffle:
                                ve.state.currentContext.value?.availableActions.shuffle.value,
                                speed:
                                ve.state.currentContext.value?.availableActions.speed.value,
                            },
                            actionsStore: {
                                repeat: ve.state.queueState.repeat.value,
                                shuffle: ve.state.queueState.shuffle.value,
                                isLiked:
                                    ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                        ve.state.queueState.currentEntity.value?.entity.entityData
                                            .meta.id,
                                    ),
                                isDisliked:
                                    ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                        ve.state.queueState.currentEntity.value?.entity.entityData
                                            .meta.id,
                                    ),
                            },
                            previousTrack: previousTrack,
                            nextTrack: nextTrack,
                            volume: ve.state.playerState.exponentVolume.value,
                        });
                    },
                    sendPlayerStatePlaying = (ve) => {

                        const previousTrack = ((ve.state.queueState.index.value ?? 0) - 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value-1]]?.entity?.entityData?.meta : undefined;
                        const nextTrack = ((ve.state.queueState.index.value ?? 0) + 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value+1]]?.entity?.entityData?.meta : undefined;

                        o({
                            status: r.MT.PLAYING,
                            isPlaying: true,
                            canMoveForward:
                            ve.state.currentContext.value?.availableActions.moveForward
                                .value,
                            canMoveBackward:
                            ve.state.currentContext.value?.availableActions.moveBackward
                                .value,
                            track:
                            ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                            progress: ve.state.playerState.progress.value?.position,
                            availableActions: {
                                moveBackward:
                                ve.state.currentContext.value?.availableActions.moveBackward
                                    .value,
                                moveForward:
                                ve.state.currentContext.value?.availableActions.moveForward
                                    .value,
                                repeat:
                                ve.state.currentContext.value?.availableActions.repeat.value,
                                shuffle:
                                ve.state.currentContext.value?.availableActions.shuffle.value,
                                speed:
                                ve.state.currentContext.value?.availableActions.speed.value,
                            },
                            actionsStore: {
                                repeat: ve.state.queueState.repeat.value,
                                shuffle: ve.state.queueState.shuffle.value,
                                isLiked:
                                    ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                        ve.state.queueState.currentEntity.value?.entity.entityData
                                            .meta.id,
                                    ),
                                isDisliked:
                                    ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                        ve.state.queueState.currentEntity.value?.entity.entityData
                                            .meta.id,
                                    ),
                            },
                            previousTrack: previousTrack,
                            nextTrack: nextTrack,
                            volume: ve.state.playerState.exponentVolume.value,
                        });
                    };
                (0, n.useEffect)(() => {
                    let e,
                        n,
                        t =
                            null == s
                                ? void 0
                                : s.state.playerState.status.onChange((e) => {
                                      e && sendPlayerStateDefault(s);
                                  }),
                        onEntityChange =
                            s?.state.queueState.currentEntity.onChange((e) => {
                                e && sendPlayerStatePlaying(s);
                            }),
                        seekTracker =
                            s?.state.playerState.event.onChange((e) => {
                                if (
                                    s.state.playerState.event.value === r.Iu.SET_PROGRESS
                                ) {
                                    sendPlayerStateDefault(s);
                                }
                            }),
                        queueStateEntityListTracker =
                            s?.state.queueState.entityList.onChange((e) => {
                                sendPlayerStateDefault(s);
                            }),
                        onRepeatAvailableChange =
                            s?.state.currentContext.value?.availableActions.repeat?.onChange((e) => {
                                sendPlayerStateDefault(s);
                            }),
                        onShuffleAvailableChange =
                            s?.state.currentContext.value?.availableActions.shuffle?.onChange((e) => {
                                sendPlayerStateDefault(s);
                            }),
                        onRepeatChange =
                            s?.state.queueState.repeat?.onChange((e) => {
                                sendPlayerStateDefault(s);
                            }),
                        onShuffleChange =
                            s?.state.queueState.shuffle?.onChange((e) => {
                                sendPlayerStateDefault(s);
                            }),
                        onVolumeChange = s?.state.playerState.exponentVolume?.onChange((e) => {
                            sendPlayerStateDefault(s);
                        }),
                        i =
                            null == s
                                ? void 0
                                : s.state.currentContext.onChange(() => {
                                      var t, r;
                                      null == e || e(),
                                          null == n || n(),
                                          (e =
                                              null == s ||
                                              null ==
                                                  (t =
                                                      s.state.currentContext
                                                          .value)
                                                  ? void 0
                                                  : t.availableActions.moveBackward.onChange(
                                                        (e) => {
                                                            sendPlayerStateDefault(s);
                                                        },
                                                    )),
                                          (n =
                                              null == s ||
                                              null ==
                                                  (r =
                                                      s.state.currentContext
                                                          .value)
                                                  ? void 0
                                                  : r.availableActions.moveForward.onChange(
                                                        (e) => {
                                                            sendPlayerStateDefault(s);
                                                        },
                                                    ));
                                  });
                    return () => {
                        null == t || t(),
                            null == i || i(),
                            null == onEntityChange || onEntityChange(),
                            null == seekTracker || seekTracker(),
                            null == queueStateEntityListTracker || queueStateEntityListTracker(),
                            null == onRepeatAvailableChange || onRepeatAvailableChange(),
                            null == onShuffleAvailableChange || onShuffleAvailableChange(),
                            null == onRepeatChange || onRepeatChange(),
                            null == onShuffleChange || onShuffleChange(),
                            null == onVolumeChange || onVolumeChange(),
                            null == n || n(),
                            null == n || n();
                    };
                }, [
                    o,
                    null == s ? void 0 : s.state.currentContext,
                    null == s ? void 0 : s.state.playerState.status,
                ]);
            };
        },
        64951: (e) => {
            e.exports = {
                root: "ReleaseNotesModal_root__RSw1p",
                modalHeader: "ReleaseNotesModal_modalHeader__gp9SA",
                modalContent: "ReleaseNotesModal_modalContent__g8OTu",
                scrollableContent: "ReleaseNotesModal_scrollableContent__zGdbH",
                important: "ReleaseNotesModal_important__u8yP4",
                notes: "ReleaseNotesModal_notes__bVAoa",
                date: "ReleaseNotesModal_date__s3_ux",
                description: "ReleaseNotesModal_description__B_yLI",
                paragraph: "ReleaseNotesModal_paragraph___laDJ",
                note: "ReleaseNotesModal_note__S9E6z",
                version: "ReleaseNotesModal_version__4Mcd5",
                item: "ReleaseNotesModal_item___CYml",
                code: "ReleaseNotesModal_code__Yv3QD",
            };
        },
        76555: (e, s, o) => {
            Promise.resolve().then(o.bind(o, 52756)),
                Promise.resolve().then(o.bind(o, 41458)),
                Promise.resolve().then(o.bind(o, 80922)),
                Promise.resolve().then(o.bind(o, 54487)),
                Promise.resolve().then(o.bind(o, 91342)),
                Promise.resolve().then(o.bind(o, 21741)),
                Promise.resolve().then(o.bind(o, 77868)),
                Promise.resolve().then(o.t.bind(o, 98258, 23)),
                Promise.resolve().then(o.bind(o, 93813)),
                Promise.resolve().then(o.bind(o, 41121)),
                Promise.resolve().then(o.bind(o, 79145)),
                Promise.resolve().then(o.bind(o, 16967)),
                Promise.resolve().then(o.bind(o, 22745)),
                Promise.resolve().then(o.bind(o, 69326)),
                Promise.resolve().then(o.bind(o, 54388)),
                Promise.resolve().then(o.bind(o, 15734)),
                Promise.resolve().then(o.bind(o, 25757)),
                Promise.resolve().then(o.t.bind(o, 72321, 23)),
                Promise.resolve().then(o.bind(o, 7091)),
                Promise.resolve().then(o.bind(o, 38298)),
                Promise.resolve().then(o.bind(o, 8957)),
                Promise.resolve().then(o.bind(o, 97926)),
                Promise.resolve().then(o.bind(o, 59745)),
                Promise.resolve().then(o.bind(o, 61334)),
                Promise.resolve().then(o.bind(o, 79242)),
                Promise.resolve().then(o.bind(o, 99010)),
                Promise.resolve().then(o.bind(o, 33727)),
                Promise.resolve().then(o.bind(o, 27742)),
                Promise.resolve().then(o.bind(o, 9332)),
                Promise.resolve().then(o.bind(o, 97097)),
                Promise.resolve().then(o.bind(o, 21934)),
                Promise.resolve().then(o.bind(o, 69132)),
                Promise.resolve().then(o.bind(o, 86631)),
                Promise.resolve().then(o.bind(o, 58427)),
                Promise.resolve().then(o.bind(o, 94269)),
                Promise.resolve().then(o.bind(o, 62289)),
                Promise.resolve().then(o.bind(o, 71016)),
                Promise.resolve().then(o.bind(o, 31679)),
                Promise.resolve().then(o.bind(o, 46595)),
                Promise.resolve().then(o.bind(o, 33951)),
                Promise.resolve().then(o.bind(o, 80593)),
                Promise.resolve().then(o.bind(o, 13807)),
                Promise.resolve().then(o.bind(o, 72455)),
                Promise.resolve().then(o.bind(o, 64399)),
                Promise.resolve().then(o.bind(o, 81417)),
                Promise.resolve().then(o.bind(o, 22721)),
                Promise.resolve().then(o.bind(o, 49358)),
                Promise.resolve().then(o.bind(o, 80651)),
                Promise.resolve().then(o.bind(o, 70559)),
                Promise.resolve().then(o.bind(o, 23460)),
                Promise.resolve().then(o.bind(o, 26557)),
                Promise.resolve().then(o.bind(o, 37259)),
                Promise.resolve().then(o.bind(o, 30206)),
                Promise.resolve().then(o.bind(o, 78724)),
                Promise.resolve().then(o.bind(o, 97004)),
                Promise.resolve().then(o.bind(o, 33647)),
                Promise.resolve().then(o.bind(o, 68555)),
                Promise.resolve().then(o.bind(o, 73258)),
                Promise.resolve().then(o.bind(o, 8910)),
                Promise.resolve().then(o.bind(o, 39500)),
                Promise.resolve().then(o.bind(o, 31978)),
                Promise.resolve().then(o.bind(o, 12005)),
                Promise.resolve().then(o.bind(o, 12327)),
                Promise.resolve().then(o.bind(o, 71562)),
                Promise.resolve().then(o.bind(o, 39900)),
                Promise.resolve().then(o.bind(o, 62565)),
                Promise.resolve().then(o.bind(o, 83641)),
                Promise.resolve().then(o.bind(o, 88081)),
                Promise.resolve().then(o.bind(o, 60862)),
                Promise.resolve().then(o.bind(o, 2294)),
                Promise.resolve().then(o.bind(o, 65297)),
                Promise.resolve().then(o.bind(o, 23197)),
                Promise.resolve().then(o.bind(o, 86943)),
                Promise.resolve().then(o.bind(o, 27575)),
                Promise.resolve().then(o.bind(o, 45019)),
                Promise.resolve().then(o.bind(o, 76808)),
                Promise.resolve().then(o.bind(o, 84651)),
                Promise.resolve().then(o.bind(o, 18674)),
                Promise.resolve().then(o.bind(o, 65930)),
                Promise.resolve().then(o.bind(o, 45576)),
                Promise.resolve().then(o.bind(o, 75142)),
                Promise.resolve().then(o.bind(o, 46791)),
                Promise.resolve().then(o.bind(o, 22851)),
                Promise.resolve().then(o.bind(o, 11959)),
                Promise.resolve().then(o.bind(o, 72775)),
                Promise.resolve().then(o.bind(o, 53350)),
                Promise.resolve().then(o.bind(o, 41170)),
                Promise.resolve().then(o.bind(o, 63838)),
                Promise.resolve().then(o.bind(o, 58977)),
                Promise.resolve().then(o.bind(o, 76801)),
                Promise.resolve().then(o.bind(o, 59544)),
                Promise.resolve().then(o.bind(o, 72925)),
                Promise.resolve().then(o.bind(o, 11960)),
                Promise.resolve().then(o.bind(o, 51229)),
                Promise.resolve().then(o.bind(o, 38592)),
                Promise.resolve().then(o.bind(o, 9586)),
                Promise.resolve().then(o.bind(o, 69458)),
                Promise.resolve().then(o.bind(o, 29418)),
                Promise.resolve().then(o.bind(o, 98200)),
                Promise.resolve().then(o.bind(o, 12170)),
                Promise.resolve().then(o.bind(o, 60722)),
                Promise.resolve().then(o.bind(o, 83958)),
                Promise.resolve().then(o.bind(o, 67190)),
                Promise.resolve().then(o.bind(o, 56770)),
                Promise.resolve().then(o.bind(o, 26836)),
                Promise.resolve().then(o.bind(o, 94954)),
                Promise.resolve().then(o.bind(o, 66423)),
                Promise.resolve().then(o.bind(o, 31014)),
                Promise.resolve().then(o.bind(o, 46532)),
                Promise.resolve().then(o.bind(o, 40706)),
                Promise.resolve().then(o.bind(o, 6726)),
                Promise.resolve().then(o.bind(o, 56973)),
                Promise.resolve().then(o.bind(o, 92998)),
                Promise.resolve().then(o.bind(o, 93214)),
                Promise.resolve().then(o.bind(o, 76084)),
                Promise.resolve().then(o.bind(o, 80677)),
                Promise.resolve().then(o.bind(o, 33247)),
                Promise.resolve().then(o.bind(o, 34610)),
                Promise.resolve().then(o.bind(o, 45789)),
                Promise.resolve().then(o.bind(o, 89711)),
                Promise.resolve().then(o.bind(o, 25154)),
                Promise.resolve().then(o.bind(o, 28159)),
                Promise.resolve().then(o.bind(o, 13050)),
                Promise.resolve().then(o.bind(o, 79400)),
                Promise.resolve().then(o.bind(o, 30039)),
                Promise.resolve().then(o.bind(o, 71228)),
                Promise.resolve().then(o.bind(o, 2054)),
                Promise.resolve().then(o.bind(o, 16561)),
                Promise.resolve().then(o.bind(o, 78419)),
                Promise.resolve().then(o.bind(o, 25486)),
                Promise.resolve().then(o.bind(o, 35217)),
                Promise.resolve().then(o.bind(o, 26595)),
                Promise.resolve().then(o.bind(o, 78221)),
                Promise.resolve().then(o.bind(o, 32772)),
                Promise.resolve().then(o.bind(o, 70065)),
                Promise.resolve().then(o.bind(o, 60374)),
                Promise.resolve().then(o.bind(o, 4520)),
                Promise.resolve().then(o.bind(o, 28558)),
                Promise.resolve().then(o.bind(o, 21509)),
                Promise.resolve().then(o.bind(o, 52224)),
                Promise.resolve().then(o.bind(o, 25379)),
                Promise.resolve().then(o.bind(o, 97053)),
                Promise.resolve().then(o.bind(o, 70106)),
                Promise.resolve().then(o.bind(o, 83192)),
                Promise.resolve().then(o.bind(o, 49562)),
                Promise.resolve().then(o.bind(o, 95007)),
                Promise.resolve().then(o.bind(o, 86067)),
                Promise.resolve().then(o.bind(o, 67556)),
                Promise.resolve().then(o.bind(o, 5572)),
                Promise.resolve().then(o.bind(o, 85598)),
                Promise.resolve().then(o.bind(o, 34302)),
                Promise.resolve().then(o.bind(o, 77887)),
                Promise.resolve().then(o.bind(o, 22682)),
                Promise.resolve().then(o.bind(o, 48684)),
                Promise.resolve().then(o.bind(o, 35123)),
                Promise.resolve().then(o.bind(o, 87884)),
                Promise.resolve().then(o.bind(o, 95068)),
                Promise.resolve().then(o.bind(o, 73011)),
                Promise.resolve().then(o.bind(o, 75706)),
                Promise.resolve().then(o.bind(o, 59618)),
                Promise.resolve().then(o.bind(o, 3886)),
                Promise.resolve().then(o.bind(o, 43634)),
                Promise.resolve().then(o.bind(o, 34200)),
                Promise.resolve().then(o.bind(o, 1627)),
                Promise.resolve().then(o.bind(o, 41460)),
                Promise.resolve().then(o.bind(o, 25680)),
                Promise.resolve().then(o.t.bind(o, 90930, 23)),
                Promise.resolve().then(o.t.bind(o, 4275, 23)),
                Promise.resolve().then(o.t.bind(o, 46282, 23)),
                Promise.resolve().then(o.t.bind(o, 46578, 23)),
                Promise.resolve().then(o.bind(o, 54793)),
                Promise.resolve().then(o.bind(o, 35111)),
                Promise.resolve().then(o.bind(o, 6735)),
                Promise.resolve().then(o.bind(o, 98205)),
                Promise.resolve().then(o.bind(o, 65276)),
                Promise.resolve().then(o.bind(o, 41507)),
                Promise.resolve().then(o.bind(o, 24984)),
                Promise.resolve().then(o.bind(o, 70504)),
                Promise.resolve().then(o.bind(o, 23845)),
                Promise.resolve().then(o.bind(o, 8110)),
                Promise.resolve().then(o.bind(o, 81416)),
                Promise.resolve().then(o.bind(o, 6925)),
                Promise.resolve().then(o.bind(o, 75618)),
                Promise.resolve().then(o.bind(o, 83894)),
                Promise.resolve().then(o.bind(o, 42589)),
                Promise.resolve().then(o.bind(o, 56106)),
                Promise.resolve().then(o.bind(o, 92796)),
                Promise.resolve().then(o.bind(o, 80858)),
                Promise.resolve().then(o.bind(o, 32850)),
                Promise.resolve().then(o.bind(o, 90242)),
                Promise.resolve().then(o.bind(o, 4112)),
                Promise.resolve().then(o.bind(o, 73756)),
                Promise.resolve().then(o.bind(o, 25474)),
                Promise.resolve().then(o.bind(o, 85878)),
                Promise.resolve().then(o.bind(o, 44156)),
                Promise.resolve().then(o.t.bind(o, 43794, 23)),
                Promise.resolve().then(o.bind(o, 75958)),
                Promise.resolve().then(o.bind(o, 12183)),
                Promise.resolve().then(o.bind(o, 89913)),
                Promise.resolve().then(o.bind(o, 57323)),
                Promise.resolve().then(o.bind(o, 97698)),
                Promise.resolve().then(o.bind(o, 67342)),
                Promise.resolve().then(o.bind(o, 64960)),
                Promise.resolve().then(o.bind(o, 51838)),
                Promise.resolve().then(o.bind(o, 81304)),
                Promise.resolve().then(o.t.bind(o, 36230, 23)),
                Promise.resolve().then(o.t.bind(o, 13654, 23)),
                Promise.resolve().then(o.bind(o, 38742)),
                Promise.resolve().then(o.bind(o, 12332)),
                Promise.resolve().then(o.bind(o, 47676)),
                Promise.resolve().then(o.bind(o, 12952)),
                Promise.resolve().then(o.bind(o, 76532)),
                Promise.resolve().then(o.bind(o, 28395)),
                Promise.resolve().then(o.bind(o, 69614)),
                Promise.resolve().then(o.bind(o, 55487)),
                Promise.resolve().then(o.bind(o, 65710)),
                Promise.resolve().then(o.bind(o, 91442)),
                Promise.resolve().then(o.bind(o, 69332)),
                Promise.resolve().then(o.bind(o, 60951)),
                Promise.resolve().then(o.bind(o, 95045)),
                Promise.resolve().then(o.bind(o, 4367)),
                Promise.resolve().then(o.bind(o, 15336)),
                Promise.resolve().then(o.bind(o, 2097)),
                Promise.resolve().then(o.bind(o, 55675)),
                Promise.resolve().then(o.bind(o, 86134)),
                Promise.resolve().then(o.bind(o, 49120)),
                Promise.resolve().then(o.bind(o, 26078)),
                Promise.resolve().then(o.bind(o, 3218)),
                Promise.resolve().then(o.bind(o, 82658)),
                Promise.resolve().then(o.bind(o, 2406)),
                Promise.resolve().then(o.t.bind(o, 85802, 23)),
                Promise.resolve().then(o.t.bind(o, 17343, 23)),
                Promise.resolve().then(o.t.bind(o, 64504, 23)),
                Promise.resolve().then(o.t.bind(o, 57090, 23)),
                Promise.resolve().then(o.t.bind(o, 21542, 23)),
                Promise.resolve().then(o.bind(o, 49247)),
                Promise.resolve().then(o.bind(o, 8681)),
                Promise.resolve().then(o.bind(o, 69594)),
                Promise.resolve().then(o.bind(o, 86722)),
                Promise.resolve().then(o.bind(o, 77104)),
                Promise.resolve().then(o.t.bind(o, 60658, 23)),
                Promise.resolve().then(o.t.bind(o, 90358, 23)),
                Promise.resolve().then(o.bind(o, 73682)),
                Promise.resolve().then(o.t.bind(o, 31448, 23)),
                Promise.resolve().then(o.bind(o, 62066)),
                Promise.resolve().then(o.bind(o, 61258)),
                Promise.resolve().then(o.bind(o, 41035)),
                Promise.resolve().then(o.bind(o, 28160)),
                Promise.resolve().then(o.bind(o, 31922)),
                Promise.resolve().then(o.bind(o, 51886)),
                Promise.resolve().then(o.bind(o, 43701)),
                Promise.resolve().then(o.bind(o, 45228)),
                Promise.resolve().then(o.bind(o, 30236));
        },
        76865: (e, s, o) => {
            "use strict";
            o.d(s, { useLaunch: () => i });
            var n = o(66268),
                t = o(49444),
                r = o(79169);
            let i = () => {
                let e = (0, t.j)(),
                    s = (0, n.useCallback)(() => {
                        let s = (0, r.HFS)();
                        s && e.count(s, "installsCount");
                    }, [e]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) ||
                            e.on(r.EE.FIRST_LAUNCH, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.off(r.EE.FIRST_LAUNCH, s);
                        }
                    );
                }, [s]);
            };
        },
        77575: (e, s, o) => {
            "use strict";
            o.d(s, {
                qw: () => w.ReleaseNotesModal,
                _o: () => p,
                cq: () => N.TitleBar,
                CA: () => n,
                M4: () => r,
                _E: () => i,
                LD: () => l.useApplicationDeeplinks,
                P4: () => d.useApplicationUpdate,
                Fn: () => a.useLaunch,
                H: () => v.usePlayerAction,
                t4: () => h.useProbabilityBucket,
                bk: () => m.useRefreshApplicationData,
                eP: () => b.useRefreshRepositoryMeta,
                sb: () => P.useRefreshTracksAvailability,
                sq: () => c.useReleaseNotes,
                OM: () => u.useSendPlayerState,
                sendDownloadTrack: () => sendDownloadTrack,
                sendDownloadCurrentTrack: () => sendDownloadCurrentTrack,
                sendDownloadTracks: () => sendDownloadTracks,
                sendYnisonState: () => sendYnisonState,
                migrationModal: () => w.migrationModal,
            });
            let n = () => {
                document.addEventListener("auxclick", (e) =>
                    e.preventDefault(),
                ),
                    document.addEventListener("click", (e) => {
                        (e.ctrlKey || e.metaKey || e.shiftKey) &&
                            e.preventDefault();
                    });
            };
            var t = o(79169);
            let r = (e) => {
                    var s;
                    null == (s = window.desktopEvents) ||
                        s.send(t.EE.APPLICATION_READY, e);
                },
                sendDownloadTrack = (trackId, trackName) => {
                    var s;
                    null === (s = window.desktopEvents) ||
                        void 0 === s ||
                        s.send(t.EE.DOWNLOAD_TRACK, trackId, trackName);
                },
                sendDownloadCurrentTrack = (trackId) => {
                    var s;
                    null === (s = window.desktopEvents) ||
                        void 0 === s ||
                        s.send(t.EE.DOWNLOAD_CURRENT_TRACK, trackId);
                },
                sendDownloadTracks = (trackIds, dirType, dirName) => {
                    var s;
                    null === (s = window.desktopEvents) ||
                        void 0 === s ||
                        s.send(t.EE.DOWNLOAD_TRACKS, trackIds, dirType, dirName);
                },
                sendYnisonState = (e) => {
                    var s;
                    null === (s = window.desktopEvents) ||
                        void 0 === s ||
                        s.send(t.EE.YNISON_STATE, {
                            rawData: e.rawData,
                        });
                },
                i = (e) => {
                    let s = e === t.Sxu.Light ? "#FFFFFF" : "#000000";
                    window.desktopEvents.send(t.EE.APPLICATION_THEME, s);
                };
            o(38467);
            var l = o(34875),
                d = o(44312),
                a = o(76865),
                v = o(10757),
                h = o(18275),
                m = o(12965),
                b = o(92296),
                P = o(88886),
                c = o(51998),
                u = o(58290),
                _ = o(41028),
                E = o(59615);
            let C = _.gK.model("TranslationsModel", { data: _.gK.frozen() }),
                p = _.gK
                    .model("ReleaseNotes", {
                        modal: E.qt,
                        translations: _.gK.maybeNull(C),
                        sortedDescReleaseNotesKeys: _.gK.maybeNull(
                            _.gK.array(_.gK.string),
                        ),
                    })
                    .views((e) => ({
                        get isReady() {
                            var s;
                            return !!(
                                (null == (s = e.translations)
                                    ? void 0
                                    : s.data) &&
                                "object" == typeof e.translations.data &&
                                Object.keys(e.translations.data).length > 0
                            );
                        },
                    }))
                    .actions((e) => ({
                        setSortedDescReleaseNotesKeys: (s) => {
                            e.sortedDescReleaseNotesKeys = (0, _.wg)(s);
                        },
                        setTranslationsReleaseNotes: (s) => {
                            s && (e.translations = C.create({ data: s }));
                        },
                    }));
            var w = o(98185),
                N = o(81785);
        },
        81785: (e, s, o) => {
            "use strict";
            o.d(s, { TitleBar: () => b });
            var n = o(33008),
                t = o(85896),
                r = o(97531),
                i = o(66268),
                l = o(73827),
                d = o(79169),
                a = o(38467),
                v = o(30075),
                h = o.n(v);
            let m = (e) => {
                    let {
                        children: s,
                        className: o,
                        onClick: r,
                        ariaLabel: i,
                        withSecondaryColor: l,
                    } = e;
                    return (0, n.jsx)("button", {
                        type: "button",
                        className: (0, t.$)(
                            h().button,
                            { [h().button_withSecondaryColor]: l },
                            o,
                        ),
                        onClick: r,
                        "aria-label": i,
                        children: s,
                    });
                },
                b = (0, r.PA)((e) => {
                    let { withSecondaryColor: s } = e,
                        { settings: o } = (0, d.Pjs)(),
                        r = o.isWindowsApplication || o.isLinuxApplication,
                        { formatMessage: v } = (0, l.A)(),
                        onMiniPlayerToggle = (0, i.useCallback)(() => {
                            (0, a.toggleMiniPlayer)();
                        }, []),
                        b = (0, i.useCallback)(() => {
                            (0, a.vZ)();
                        }, []),
                        P = (0, i.useCallback)(() => {
                            (0, a.LO)();
                        }, []),
                        c = (0, i.useCallback)(() => {
                            (0, a.N5)();
                        }, []);
                    return (0, n.jsx)('div', {
                        className: h().root,
                        onDoubleClick: P,
                        children:
                            r &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(m, {
                                        onClick: onMiniPlayerToggle,
                                        ariaLabel: 'miniplayer',
                                        withSecondaryColor: s,
                                        children: (0, n.jsx)('svg', {
                                            width: '12',
                                            height: '12',
                                            viewBox: '0 0 12 12',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, t.$)(h().icon, {
                                                [h().icon_withSecondaryColor]: s,
                                            }),
                                            children: [
                                                (0, n.jsx)('path', {
                                                    d: 'M1.49805 11C1.42969 11 1.36458 10.987 1.30273 10.961C1.24414 10.935 1.19206 10.8992 1.14648 10.8537C1.10091 10.8081 1.0651 10.7561 1.03906 10.6976C1.01302 10.6358 1 10.5707 1 10.5024C1 10.4341 1.01302 10.3707 1.03906 10.3122C1.0651 10.2504 1.10091 10.1967 1.14648 10.1512C1.19206 10.1024 1.24414 10.065 1.30273 10.039C1.36458 10.013 1.42969 10 1.49805 10H10.502C10.5703 10 10.6338 10.013 10.6924 10.039C10.7542 10.065 10.8079 10.1024 10.8535 10.1512C10.8991 10.1967 10.9349 10.2504 10.9609 10.3122C10.987 10.3707 11 10.4341 11 10.5024C11 10.5707 10.987 10.6358 10.9609 10.6976C10.9349 10.7561 10.8991 10.8081 10.8535 10.8537C10.8079 10.8992 10.7542 10.935 10.6924 10.961C10.6338 10.987 10.5703 11 10.502 11H1.49805Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M1.24902 2C1.21484 2 1.18229 1.98699 1.15137 1.96098C1.12207 1.93496 1.09603 1.89919 1.07324 1.85366C1.05046 1.80813 1.03255 1.7561 1.01953 1.69756C1.00651 1.63577 1 1.57073 1 1.50244C1 1.43415 1.00651 1.37073 1.01953 1.31219C1.03255 1.25041 1.05046 1.19675 1.07324 1.15122C1.09603 1.10244 1.12207 1.06504 1.15137 1.03902C1.18229 1.01301 1.21484 1 1.24902 1H5.75098C5.78516 1 5.81689 1.01301 5.84619 1.03902C5.87711 1.06504 5.90397 1.10244 5.92676 1.15122C5.94955 1.19675 5.96745 1.25041 5.98047 1.31219C5.99349 1.37073 6 1.43415 6 1.50244C6 1.57073 5.99349 1.63577 5.98047 1.69756C5.96745 1.7561 5.94955 1.80813 5.92676 1.85366C5.90397 1.89919 5.87711 1.93496 5.84619 1.96098C5.81689 1.98699 5.78516 2 5.75098 2H1.24902Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M10 6.24902C10 6.21484 10.013 6.18229 10.039 6.15137C10.065 6.12207 10.1008 6.09603 10.1463 6.07324C10.1919 6.05046 10.2439 6.03255 10.3024 6.01953C10.3642 6.00651 10.4293 6 10.4976 6C10.5659 6 10.6293 6.00651 10.6878 6.01953C10.7496 6.03255 10.8033 6.05046 10.8488 6.07324C10.8976 6.09603 10.935 6.12207 10.961 6.15137C10.987 6.18229 11 6.21484 11 6.24902L11 10.751C11 10.7852 10.987 10.8169 10.961 10.8462C10.935 10.8771 10.8976 10.904 10.8488 10.9268C10.8033 10.9495 10.7496 10.9675 10.6878 10.9805C10.6293 10.9935 10.5659 11 10.4976 11C10.4293 11 10.3642 10.9935 10.3024 10.9805C10.2439 10.9675 10.1919 10.9495 10.1463 10.9268C10.1008 10.904 10.065 10.8771 10.039 10.8462C10.013 10.8169 10 10.7852 10 10.751L10 6.24902Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M9.85698 1.4045C9.89078 1.37069 9.93219 1.34771 9.98121 1.33556C10.0286 1.32502 10.0797 1.3246 10.1345 1.33432C10.1893 1.34404 10.2439 1.3632 10.2982 1.3918C10.3549 1.4227 10.4074 1.46234 10.4558 1.51072C10.5042 1.55911 10.5427 1.61048 10.5713 1.66483C10.6022 1.72148 10.6225 1.77721 10.6322 1.832C10.6442 1.8891 10.645 1.94135 10.6344 1.98876C10.6223 2.03778 10.5993 2.07919 10.5655 2.11299L6.11287 6.56559C6.07907 6.5994 6.03846 6.62158 5.99105 6.63212C5.94203 6.64427 5.88898 6.64434 5.83188 6.63231C5.77708 6.62259 5.72136 6.60228 5.6647 6.57139C5.61035 6.54279 5.55899 6.5043 5.5106 6.45591C5.46222 6.40753 5.42257 6.35501 5.39167 6.29835C5.36308 6.244 5.34392 6.18943 5.3342 6.13464C5.32448 6.07984 5.3257 6.02794 5.33785 5.97892C5.3484 5.93151 5.37057 5.8909 5.40438 5.8571L9.85698 1.4045Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M10 1.19922C10 1.17188 10.013 1.14583 10.039 1.12109C10.065 1.09766 10.1008 1.07682 10.1463 1.05859C10.1919 1.04036 10.2439 1.02604 10.3024 1.01562C10.3642 1.00521 10.4293 1 10.4976 1C10.5659 1 10.6293 1.00521 10.6878 1.01562C10.7496 1.02604 10.8033 1.04036 10.8488 1.05859C10.8976 1.07682 10.935 1.09766 10.961 1.12109C10.987 1.14583 11 1.17188 11 1.19922L11 4.80078C11 4.82812 10.987 4.85352 10.961 4.87695C10.935 4.90169 10.8976 4.92318 10.8488 4.94141C10.8033 4.95964 10.7496 4.97396 10.6878 4.98438C10.6293 4.99479 10.5659 5 10.4976 5C10.4293 5 10.3642 4.99479 10.3024 4.98438C10.2439 4.97396 10.1919 4.95964 10.1463 4.94141C10.1008 4.92318 10.065 4.90169 10.039 4.87695C10.013 4.85352 10 4.82812 10 4.80078L10 1.19922Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M10.8008 1C10.8281 1 10.8542 1.01301 10.8789 1.03902C10.9023 1.06504 10.9232 1.10081 10.9414 1.14634C10.9596 1.19187 10.974 1.2439 10.9844 1.30244C10.9948 1.36423 11 1.42927 11 1.49756C11 1.56585 10.9948 1.62927 10.9844 1.68781C10.974 1.74959 10.9596 1.80325 10.9414 1.84878C10.9232 1.89756 10.9023 1.93496 10.8789 1.96098C10.8542 1.98699 10.8281 2 10.8008 2L7.19922 2C7.17188 2 7.14648 1.98699 7.12305 1.96098C7.09831 1.93496 7.07682 1.89756 7.05859 1.84878C7.04036 1.80325 7.02604 1.74959 7.01562 1.68781C7.00521 1.62927 7 1.56585 7 1.49756C7 1.42927 7.00521 1.36423 7.01562 1.30244C7.02604 1.2439 7.04036 1.19187 7.05859 1.14634C7.07682 1.10081 7.09831 1.06504 7.12305 1.03902C7.14648 1.01301 7.17188 1 7.19922 1L10.8008 1Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M1 1.49805C1 1.42969 1.01301 1.36458 1.03902 1.30273C1.06504 1.24414 1.10081 1.19206 1.14634 1.14648C1.19187 1.10091 1.2439 1.0651 1.30244 1.03906C1.36423 1.01302 1.42927 1 1.49756 1C1.56585 1 1.62927 1.01302 1.68781 1.03906C1.74959 1.0651 1.80325 1.10091 1.84878 1.14648C1.89756 1.19206 1.93496 1.24414 1.96098 1.30273C1.98699 1.36458 2 1.42969 2 1.49805L2 10.502C2 10.5703 1.98699 10.6338 1.96098 10.6924C1.93496 10.7542 1.89756 10.8079 1.84878 10.8535C1.80325 10.8991 1.74959 10.9349 1.68781 10.9609C1.62927 10.987 1.56585 11 1.49756 11C1.42927 11 1.36423 10.987 1.30244 10.9609C1.2439 10.9349 1.19187 10.8991 1.14634 10.8535C1.10081 10.8079 1.06504 10.7542 1.03902 10.6924C1.01301 10.6338 1 10.5703 1 10.502L1 1.49805Z',
                                                    fill: 'currentColor',
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, n.jsx)(m, {
                                        onClick: b,
                                        ariaLabel: v({
                                            id: 'windows-menu.roll-up',
                                        }),
                                        withSecondaryColor: s,
                                        children: (0, n.jsx)('svg', {
                                            width: '10',
                                            height: '1',
                                            viewBox: '0 0 10 1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, t.$)(h().icon, {
                                                [h().icon_withSecondaryColor]: s,
                                            }),
                                            children: (0, n.jsx)('path', {
                                                d: 'M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)(m, {
                                        onClick: P,
                                        ariaLabel: v({
                                            id: 'windows-menu.unwrap',
                                        }),
                                        withSecondaryColor: s,
                                        children: (0, n.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, t.$)(h().icon, {
                                                [h().icon_withSecondaryColor]: s,
                                            }),
                                            children: (0, n.jsx)('path', {
                                                d: 'M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)(m, {
                                        className: h().closeButton,
                                        onClick: c,
                                        ariaLabel: v({
                                            id: 'windows-menu.close',
                                        }),
                                        children: (0, n.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, t.$)(h().icon, {
                                                [h().icon_withSecondaryColor]: s,
                                            }),
                                            children: (0, n.jsx)('path', {
                                                d: 'M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                    });
                });
        },
        88886: (e, s, o) => {
            "use strict";
            o.d(s, { useRefreshTracksAvailability: () => r });
            var n = o(66268),
                t = o(79169);
            let r = () => {
                let e = (0, t.jRO)(),
                    s = (0, n.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController
                                .refreshTracksAvailability()
                                .then(() => {
                                    var e;
                                    null == (e = window.desktopEvents) ||
                                        e.send(
                                            t.EE.TRACKS_AVAILABILITY_UPDATED,
                                        );
                                });
                    }, [e.tracksController]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) ||
                            e.on(t.EE.REFRESH_TRACKS_AVAILABILITY, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.off(t.EE.REFRESH_TRACKS_AVAILABILITY, s);
                        }
                    );
                }, [s]);
            };
        },
        92296: (e, s, o) => {
            "use strict";
            o.d(s, { useRefreshRepositoryMeta: () => r });
            var n = o(66268),
                t = o(79169);
            let r = () => {
                let e = (0, t.jRO)(),
                    s = (0, n.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksMeta().then(() => {
                                var e;
                                null == (e = window.desktopEvents) ||
                                    e.send(t.EE.REPOSITORY_META_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) ||
                            e.on(t.EE.REFRESH_REPOSITORY_META, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) ||
                                e.off(t.EE.REFRESH_REPOSITORY_META, s);
                        }
                    );
                }, [s]);
            };
        },
        98185: (e, s, o) => {
            "use strict";
            o.d(s, { ReleaseNotesModal: () => u, migrationModal: () => migrationModal });
            var n = o(33008),
                t = o(85896),
                r = o(97531),
                i = o(73827),
                l = o(43576),
                d = o(96560),
                a = o(51704),
                v = o(57747),
                h = o(77868),
                m = o(79169),
                b = o(64951),
                P = o.n(b);
            let c = {
                    ul: (e) =>
                        (0, n.jsx)("ul", {
                            className: P().description,
                            children: e,
                        }),
                    li: (e) =>
                        (0, n.jsx)("li", { className: P().item, children: e }),
                    code: (e) =>
                        (0, n.jsx)("code", {
                            className: P().code,
                            children: e,
                        }),
                    date: (e) =>
                        (0, n.jsx)("span", {
                            className: P().date,
                            children: e,
                        }),
                    p: (e) =>
                        (0, n.jsx)("p", {
                            className: P().paragraph,
                            children: e,
                        }),
                    br: (0, n.jsx)("br", {}),
                },
                u = (0, r.PA)(() => {
                    let {
                            releaseNotes: {
                                translations: e,
                                sortedDescReleaseNotesKeys: s,
                                modal: o,
                            },
                        } = (0, m.Pjs)(),
                        { formatMessage: r } = (0, i.A)(),
                        { language: b, defaultLanguage: u } = (0, m.h6b)(),
                        _ = (0, m.Crf)();
                    return (0, n.jsx)(a.a, {
                        title: r({ id: "desktop.release-notes-modal-title" }),
                        open: o.isOpened,
                        onOpenChange: o.onOpenChange,
                        onClose: o.close,
                        size: "fitContent",
                        placement: "center",
                        overlayColor: "full",
                        labelClose: r({ id: "interface-actions.close" }),
                        className: P().root,
                        headerClassName: P().modalHeader,
                        contentClassName: P().modalContent,
                        children: (0, n.jsx)(l.A, {
                            onError: _,
                            defaultLocale: u,
                            locale: b,
                            messages: null == e ? void 0 : e.data,
                            children: (0, n.jsx)(v.N, {
                                className: (0, t.$)(
                                    P().scrollableContent,
                                    P().important,
                                ),
                                containerClassName: (0, t.$)(
                                    P().notes,
                                    P().important,
                                ),
                                children:
                                    null == s
                                        ? void 0
                                        : s.map((e) =>
                                              (0, n.jsxs)(
                                                  "div",
                                                  {
                                                      className: P().note,
                                                      children: [
                                                          (0, n.jsx)(
                                                              h.Heading,
                                                              {
                                                                  variant: "h4",
                                                                  className: (0,
                                                                  t.$)(
                                                                      P()
                                                                          .version,
                                                                      P()
                                                                          .important,
                                                                  ),
                                                                  children: (0,
                                                                  m.Grs)(e),
                                                              },
                                                          ),
                                                          (0, n.jsx)(d.A, {
                                                              id: e,
                                                              values: c,
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              ),
                                          ),
                            }),
                        }),
                    });
                }),
            migrationModal = (0, r.PA)(() => {
                let {
                        migrationNote: { modal: o },
                    } = (0, m.Pjs)(),
                    { formatMessage: l } = (0, i.A)();
                return (0, n.jsx)(a.a, {
                    title: 'Важное объявление',
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    closeOnOutsidePress: false,
                    onClose: o.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    closeButtonProps: { style: { display: 'none' }},
                    className: 'MergeNoteModal_root',
                    headerClassName: P().modalHeader,
                    contentClassName: 'MergeNoteModal_modalContent',
                    children: (0, n.jsx)('div', {
                        className: (0, a.$)(P().scrollableContent, P().important),
                        children: [
                            (0, n.jsx)('img', { alt: 'Баннер',
                                style: {
                                    display: 'block',
                                    width: '100%',
                                    borderRadius: '10px',
                                },
                                src: 'https://pulsesync.dev/images/openGraphImage.png'
                            }),
                            (0, n.jsx)('div', {
                                style: {
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    marginTop: '20px',
                                },
                                children: [
                                    (0, n.jsx)('span', { children: 'Слияние YMMC и PulseSync!', style: { fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', color: 'white', alignSelf: 'center' } }),
                                    (0, n.jsx)('span', { children: 'После около одного года параллельной разработки я решил объединить два проекта в один. Что это меняет?', style: { marginBottom: '10px', color: 'white' }}),
                                    (0, n.jsx)('span', { children: 'Я присоединяюсь к команде PulseSync.', style: { marginBottom: '5px', color: 'white' }}),
                                    (0, n.jsx)('span', { children: 'Поддержка YMMC с этого момента прекращается.', style: { marginBottom: '5px', color: 'white' }}),
                                    (0, n.jsx)('span', { children: 'Все возможности YMMC уже доступны в PulseSync. И не только!', style: { color: 'white' }}),
                                    (0, n.jsx)('span', { children: 'Например в PulseSync реализована система аддонов. Которая позволяет расширять функционал стандартного мод клиента.', style: { marginBottom: '10px' }}),
                                    (0, n.jsx)('span', { children: ['Подробности слияния можно прочитать тут: ', (0, n.jsx)('a', { children: 'https://pulsesync.dev/blog/merging-with-ymmc', href: 'https://pulsesync.dev/blog/merging-with-ymmc', target:"_blank", rel:"noreferrer noopener", className: 'buOTZq_TKQOVyjMLrXvB MergeNoteModal_link' })], style: { marginBottom: '10px', color: 'white' }}),
                                    (0, n.jsx)('span', { children: 'Вы можете:', style: { fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', color: 'white', alignSelf: 'center' }}),
                                    (0, n.jsx)('span', { children: 'Перейти на PulseSync автоматически', style: {  fontWeight: 'bold', fontSize: '18px', color: 'white', alignSelf: 'center' }}),
                                    (0, n.jsx)('span', { children: 'или', style: { alignSelf: 'center' }}),
                                    (0, n.jsx)('span', { children: 'Отключить все обновления в YMMC', style: { fontWeight: 'bold', fontSize: '18px', marginBottom: '5px', color: 'white', alignSelf: 'center' }}),
                                    (0, n.jsx)('span', { children: 'И продолжить использовать его пока инфраструктура ЯМ сильно не изменится.', style: { marginBottom: '10px', color: 'white' }}),
                                ]
                            }),
                        ],
                    }),
                });
            });
        },
        98258: () => {},
    },
    (e) => {
        e.O(
            0,
            [
                3645, 9876, 7098, 8282, 9712, 5271, 6071, 7309, 8712, 2866,
                9765, 6451, 8004, 9284, 7509, 1709, 4397, 2621, 952, 9775, 9323,
                9814, 9149, 8065, 594, 7313, 1020, 8400, 8387, 9750, 7245, 5952,
                1917, 1311, 7764, 6706, 2089, 2140, 996, 4236, 6728, 7508, 9152,
                5675, 9837, 9169, 8740, 9615, 3588, 2732, 1744, 4204, 7747,
                4078, 9718, 4760, 8747, 5765, 2898, 508, 3984, 3477, 7111, 5897,
                3663, 939, 5958, 682, 3761, 7443, 2561, 5971, 8096, 7410, 5613,
                5767, 4691, 6659, 5936, 8941, 1799, 9902, 5598, 7358,
            ],
            () => e((e.s = 76555)),
        ),
            (_N_E = e.O());
    },
]);
