(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5939],
    {
        6656: (e) => {
            e.exports = {
                root: 'BlockPage_root__crGK_',
                container: 'BlockPage_container__my_l0',
                content: 'BlockPage_content__4nK4D',
                title: 'BlockPage_title__sAejV',
                button: 'BlockPage_button__KoFZX',
                image: 'BlockPage_image__C02Db',
            };
        },
        7644: (e, t, o) => {
            'use strict';
            o.d(t, { A: () => s });
            let s = {
                src: '/_next/static/media/desktop.1e0910e6.webp',
                height: 1800,
                width: 2880,
                blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQCdAEOaA+wuAD+/SCh9NmVu/p31WSFlBGQJpSkM3AKDGRsZhmAAAA=',
                blurWidth: 8,
                blurHeight: 5,
            };
        },
        10757: (e, t, o) => {
            'use strict';
            o.d(t, { usePlayerAction: () => n });
            var s = o(66268),
                a = o(79169),
                feedbackApi = o(61744);
            const sendPlayerStateDefault = (ve) => {
                let desktopEvents;
                const previousTrack =
                    (ve.state.queueState.index.value ?? 0) - 1 >= 0
                        ? ve.state.queueState?.entityList.value?.[ve.state.queueState.index.value - 1]?.entity?.entityData?.meta
                        : undefined;
                const nextTrack =
                    (ve.state.queueState.index.value ?? 0) + 1 >= 0
                        ? ve.state.queueState?.entityList.value?.[ve.state.queueState.index.value + 1]?.entity?.entityData?.meta
                        : undefined;

                null === (desktopEvents = window.desktopEvents) ||
                    void 0 === desktopEvents ||
                    desktopEvents.send(a.EE.PLAYER_STATE, {
                        status: ve.state.playerState.status.value,
                        isPlaying: ve.state.playerState.status.value === 'playing',
                        canMoveForward: ve.state.currentContext.value?.availableActions.moveForward.value,
                        canMoveBackward: ve.state.currentContext.value?.availableActions.moveBackward.value,
                        track: ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                        progress: ve.state.playerState.progress.value,
                        availableActions: {
                            moveBackward: ve.state.currentContext.value?.availableActions.moveBackward.value,
                            moveForward: ve.state.currentContext.value?.availableActions.moveForward.value,
                            repeat: ve.state.currentContext.value?.availableActions.repeat.value,
                            shuffle: ve.state.currentContext.value?.availableActions.shuffle.value,
                            speed: ve.state.currentContext.value?.availableActions.speed.value,
                        },
                        actionsStore: {
                            repeat: ve.state.queueState.repeat.value,
                            shuffle: ve.state.queueState.shuffle.value,
                            isLiked: ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                ve.state.queueState.currentEntity.value?.entity.entityData.meta.id,
                            ),
                            isDisliked: ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                ve.state.queueState.currentEntity.value?.entity.entityData.meta.id,
                            ),
                        },
                        previousTrack,
                        nextTrack,
                    });
            };
            var l = (function (e) {
                return (e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'), e;
            })(l || {});
            let n = (e) => {
                let { sonataState: sonataState } = (0, a.Pjs)(),
                    onLikeClick = (0, feedbackApi.KX)(sonataState.entityMeta),
                    onDislikeClick = (0, feedbackApi.mW)(sonataState.entityMeta);
                let t = (0, s.useCallback)(
                    (t, o, value, nonce = 1) => {
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
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(a.EE.PLAYER_ACTION, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(a.EE.PLAYER_ACTION, t);
                        }
                    );
                }, [t]);
            };
        },
        11693: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        12965: (e, t, o) => {
            'use strict';
            o.d(t, { useRefreshApplicationData: () => n });
            var s = o(66268),
                a = o(43836),
                l = o(79169);
            let n = () => {
                let { library: e, collection: t, experiments: o, main: n, user: r } = (0, l.Pjs)(),
                    i = (0, s.useCallback)(() => {
                        o.getData(),
                            e.getData(),
                            n.landing.isLoaded &&
                                n.landing.getSkeleton(
                                    {
                                        id: a.p.WEB_MAIN,
                                        showWizard: r.settings.showWizard,
                                    },
                                    { preloadBlocksCount: 2 },
                                ),
                            t.landing.isLoaded &&
                                t.landing.getSkeleton(
                                    {
                                        id: a.p.WEB_COLLECTION,
                                        showWizard: r.settings.showWizard,
                                    },
                                    { preloadBlocksCount: 2 },
                                );
                    }, [t.landing, o, e, n.landing, r.settings.showWizard]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.REFRESH_APPLICATION_DATA, i),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.REFRESH_APPLICATION_DATA, i);
                        }
                    );
                }, [i]);
            };
        },
        17166: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        18275: (e, t, o) => {
            'use strict';
            o.d(t, { useProbabilityBucket: () => n });
            var s = o(66268),
                a = o(49444),
                l = o(79169);
            let n = () => {
                let e = (0, a.j)(),
                    t = (0, s.useCallback)(
                        (t, o) => {
                            o && e.count(o, 'probabilityBucket');
                        },
                        [e],
                    );
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.PROBABILITY_BUCKET, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.PROBABILITY_BUCKET, t);
                        }
                    );
                }, [t]);
            };
        },
        22818: (e, t, o) => {
            'use strict';
            o.d(t, { WithAuth: () => p });
            var s = o(33008),
                a = o(97531),
                l = o(17846),
                n = o(85896),
                r = o(96560),
                i = o(77868),
                d = o(18740),
                c = o(17166),
                u = o.n(c);
            let _ = (0, a.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(i.Heading, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(r.A, {
                                id: 'authorization.enter-title',
                            }),
                        }),
                        (0, s.jsx)(i.Caption, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(r.A, {
                                id: 'authorization.enter-text',
                            }),
                        }),
                        (0, s.jsx)(d.Hi, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var h = o(79169);
            let p = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: o } = e,
                    { user: a } = (0, h.Pjs)();
                return a.isAuthorized ? t : (o && (0, l.redirect)(h.Zyd.main.href), (0, s.jsx)(_, {}));
            });
        },
        26271: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        27618: (e, t, o) => {
            'use strict';
            o.d(t, { NotFound: () => m });
            var s = o(33008),
                a = o(85896),
                l = o(97531),
                n = o(96560),
                r = o(44189),
                i = o(78016),
                d = o(77868),
                c = o(79169),
                u = o(18740),
                _ = o(66268),
                h = o(26271),
                p = o.n(h);
            let m = (0, l.PA)((e) => {
                let { className: t, title: o, description: l, iconVariant: h = 'musicLogo', iconClassName: m, iconSize: x } = e,
                    { contentRef: C } = (0, c.gKY)(),
                    v = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: A } = (0, c.D5F)(v);
                return (
                    (0, c.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, c.Pjs)();
                        (0, _.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, a.$)(p().root, { [p().root_desktop]: !C }, t),
                        children: [
                            (0, s.jsx)(u.Lh, {
                                withBackwardFallback: '/',
                                className: p().navigation,
                                withForwardControl: !1,
                            }),
                            (0, s.jsxs)('div', {
                                className: p().content,
                                children: [
                                    (0, s.jsx)(i.Icon, {
                                        className: (0, a.$)(p().icon, m),
                                        variant: h,
                                        size: x,
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, a.$)(p().title, p().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children:
                                            o ||
                                            (0, s.jsx)(n.A, {
                                                id: 'page-error.page-does-not-exist',
                                            }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, a.$)(p().text, p().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children:
                                            l ||
                                            (0, s.jsx)(n.A, {
                                                id: 'page-error.page-does-not-exist-description',
                                            }),
                                    }),
                                    (0, s.jsx)(r.Button, {
                                        onClick: A,
                                        className: p().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(n.A, {
                                                id: 'navigation.page-main',
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
                root: 'TitleBar_root__QjdOZ',
                button: 'TitleBar_button__9MptL',
                button_withSecondaryColor: 'TitleBar_button_withSecondaryColor__oIkuo',
                icon: 'TitleBar_icon__8Wji9',
                icon_withSecondaryColor: 'TitleBar_icon_withSecondaryColor__vuw6G',
                closeButton: 'TitleBar_closeButton__Epxh7',
            };
        },
        34875: (e, t, o) => {
            'use strict';
            o.d(t, { useApplicationDeeplinks: () => i });
            var s = o(17846),
                a = o(66268),
                l = o(42213),
                n = o(79169);
            let r = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let t = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!t) return e;
                            let o = t[1],
                                s = t[2] || '';
                            if (!o) return e;
                            let a = new URLSearchParams(s.startsWith('?') ? s.substring(1) : '');
                            return a.set('tab', o), '/?'.concat(a.toString());
                        },
                    ],
                    [/^\/home$/, () => n.Zyd.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/history$/, () => n.Zyd.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let t = new URLSearchParams(e.split('?')[1]);
                            t.set(n.K3F.DEEPLINK, n.vEM.PLAY_VIBE);
                            let o = new URLSearchParams(window.location.search),
                                s = (0, n.$cg)(o, t);
                            return 'landing' === t.get(n.K3F.SCREEN) ? '/?'.concat(s.toString()) : ''.concat(window.location.pathname, '?').concat(s.toString());
                        },
                    ],
                ],
                i = () => {
                    let e = (0, s.useRouter)(),
                        t = (0, l.c)((t, o) => {
                            for (let [t, s] of r) if (t.test(o)) return void e.push(s(o));
                            let { href: s } = (0, n.uvd)(null != o ? o : n.Zyd.main.href);
                            e.push(s);
                        });
                    (0, a.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.OPEN_DEEPLINK, t),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.OPEN_DEEPLINK, t);
                            }
                        );
                    }, [t]);
                };
        },
        38467: (e, t, o) => {
            'use strict';
            o.d(t, { LO: () => l, N5: () => n, vZ: () => a, toggleMiniPlayer: () => toggleMiniPlayer });
            var s = o(79169);
            let a = () => {
                var e;
                null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_MINIMIZE);
            },
                l = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_MAXIMIZE);
                },
                n = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_CLOSE);
                },
                toggleMiniPlayer = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.TOGGLE_MINIPLAYER);
                }
        },
        44312: (e, t, o) => {
            'use strict';
            o.d(t, { useApplicationUpdate: () => p });
            var s = o(33008),
                a = o(66268),
                l = o(73827),
                n = o(79169),
                r = o(85896),
                i = o(44189),
                d = o(77868),
                c = o(18740),
                u = o(11693),
                _ = o.n(u);
            let h = (e) => {
                    let { version: t, formatMessage: o, closeToast: l } = e,
                        u = (0, a.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(n.EE.INSTALL_UPDATE), null == l || l();
                        }, [l]),
                        h = (0, a.useMemo)(
                            () =>
                                (0, s.jsxs)('div', {
                                    className: _().message,
                                    children: [
                                        (0, s.jsx)(d.Caption, {
                                            className: _().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: o(
                                                {
                                                    id: 'desktop.on-update-available',
                                                },
                                                { version: t },
                                            ),
                                        }),
                                        (0, s.jsx)(i.Button, {
                                            className: _().button,
                                            onClick: u,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(d.Caption, {
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: o({
                                                    id: 'desktop.update',
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            [o, u, t],
                        );
                    return (0, s.jsx)(c.$W, {
                        className: (0, r.$)(_().root, _().important),
                        message: h,
                    });
                },
                modUpdateToast = (e) => {
                    let { version: version, formatMessage: o, closeToast: l } = e,
                        [getProgress, setProgress] = (0, a.useState)(-1),
                        u = (0, a.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(n.EE.INSTALL_MOD_UPDATE), null == l || l();
                        }, [l]),
                        callInstallModUpdate = (0, a.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(n.EE.DOWNLOAD_MOD_UPDATE);
                        }, []),
                        formattedMessages = (progressValue) => {
                            let message = o({ id: 'offline.download' });
                            if (progressValue < 0) {
                                message = o({ id: 'offline.download' });
                            } else if (progressValue >= 0 && progressValue <= 100) {
                                message = 'Скачивание…';
                            } else if (progressValue > 100) {
                                message = 'Установить';
                            }
                            return message;
                        },
                        h = (0, a.useMemo)(
                            () =>
                                (0, s.jsxs)('div', {
                                    className: _().message,
                                    children: [
                                        (0, s.jsx)(d.Caption, {
                                            className: _().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: o(
                                                {
                                                    id: 'desktop.on-mod-update-available',
                                                },
                                                { version: version },
                                            ),
                                        }),
                                        (0, s.jsx)(i.Button, {
                                            className: _().button,
                                            onClick: getProgress <= 100 ? callInstallModUpdate : u,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: getProgress <= 100 && getProgress >= 0,
                                            children: (0, s.jsx)(d.Caption, {
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: formattedMessages(getProgress),
                                            }),
                                        }),
                                    ],
                                }),
                            [o, u, version, getProgress],
                        ),
                        progressBarUpdate = (0, a.useCallback)(
                            (event, elementType, progress, dedupeTimestamp = 0) => {
                                if (elementType !== 'modUpdateToast') return;

                                if (window.dedupeNonces && window.dedupeNonces[elementType] === dedupeTimestamp) return;
                                if (!window.dedupeNonces) window.dedupeNonces = {};
                                if (dedupeTimestamp) window.dedupeNonces[elementType] = dedupeTimestamp;
                                setProgress(progress);
                            },
                            [],
                        );
                    progressBarUpdate = (0, a.useCallback)(
                        (event, elementType, progress, dedupeTimestamp = 0) => {
                            if (elementType !== 'modUpdateToast') return;

                            if (window.dedupeNonces && window.dedupeNonces[elementType] === dedupeTimestamp) return;
                            if (!window.dedupeNonces) window.dedupeNonces = {};
                            if (dedupeTimestamp) window.dedupeNonces[elementType] = dedupeTimestamp;
                            setProgress(progress);
                        },
                        [],
                    );

                    return (
                        (0, a.useEffect)(() => {
                            var e;
                            return (
                                null === (e = window.desktopEvents) || void 0 === e || e.on(n.EE.PROGRESS_BAR_CHANGE, progressBarUpdate),
                                () => {
                                    var e;
                                    null === (e = window.desktopEvents) || void 0 === e || e.off(n.EE.PROGRESS_BAR_CHANGE, progressBarUpdate);
                                }
                            );
                        }, [progressBarUpdate]),
                            (0, a.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(n.EE.MOD_UPDATE_AVAILABLE, ()=>{l()}),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(n.EE.MOD_UPDATE_AVAILABLE, ()=>{l()});
                                        }
                                );
                            }, [l]),
                        (0, s.jsx)(c.$W, {
                            className: (0, r.$)(_().root, _().important),
                            message: h,
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: getProgress + '%',
                                        height: '100%',
                                        'background-color': 'rgb(255 255 255)',
                                        opacity: getProgress <= 100 ? 0.1 : 0,
                                        'z-index': 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                toastWithProgress = (e) => {
                    let { closeToast: closeToast, toastID, message, buttonLabel, onButtonClick, disabled = false, dismissOnButtonClick = false } = e,
                        [getProgress, setProgress] = (0, a.useState)(-1),
                        [statusLabel, setStatusLabel] = (0, a.useState)('Подготовка...'),

                        onClick = (0, a.useCallback)(
                            () => {
                                onButtonClick?.();
                                dismissOnButtonClick && closeToast?.();
                            },
                            [dismissOnButtonClick, onButtonClick, closeToast]),



                        notifyBody = (0, a.useMemo)(
                            () =>
                                (0, s.jsxs)('div', {
                                    className: _().message,
                                    children: [
                                        (0, s.jsx)(d.Caption, {
                                            className: _().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: message.replace('#s', statusLabel),
                                        }),
                                        buttonLabel && (0, s.jsx)(i.Button, {
                                            className: _().button,
                                            onClick: onClick,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: disabled,
                                            children: (0, s.jsx)(d.Caption, {
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: buttonLabel,
                                            }),
                                        }),
                                    ],
                                }),
                            [disabled, buttonLabel, message, onClick, statusLabel],
                        ),
                        progressBarUpdate = (0, a.useCallback)(
                            (event, elementType, progress, dedupeTimestamp = 0, label=undefined) => {
                                if (elementType !== toastID) return;

                                if (window.dedupeNonces && window.dedupeNonces[elementType] === dedupeTimestamp) return;
                                if (!window.dedupeNonces) window.dedupeNonces = {};
                                if (dedupeTimestamp) window.dedupeNonces[elementType] = dedupeTimestamp;
                                setProgress(progress);
                                if (label) setStatusLabel(label);
                            },
                            [setProgress, setStatusLabel],
                        ),
                    onBasicToastDismiss = (0, a.useCallback)(
                        (event, closeToastID, dedupeTimestamp = 0) => {
                            if (window[`onBasicToastDismiss${toastID}`] === dedupeTimestamp) return;
                            if (dedupeTimestamp) window[`onBasicToastDismiss${toastID}`] = dedupeTimestamp;

                            if (closeToastID === toastID) {
                                closeToast?.();
                            }

                        },
                        [closeToast]
                    );

                    return (
                        (0, a.useEffect)(() => {
                            var e;
                            return (
                                null === (e = window.desktopEvents) || void 0 === e || e.on(n.EE.PROGRESS_BAR_CHANGE, progressBarUpdate),
                                () => {
                                    var e;
                                    null === (e = window.desktopEvents) || void 0 === e || e.off(n.EE.PROGRESS_BAR_CHANGE, progressBarUpdate);
                                }
                            );
                        }, [progressBarUpdate]),
                            (0, a.useEffect)(() => {
                                var e;
                                return (
                                    null === (e = window.desktopEvents) || void 0 === e || e.on(n.EE.BASIC_TOAST_DISMISS, onBasicToastDismiss),
                                        () => {
                                            var e;
                                            null === (e = window.desktopEvents) || void 0 === e || e.off(n.EE.BASIC_TOAST_DISMISS, onBasicToastDismiss);
                                        }
                                );
                            }, [progressBarUpdate]),
                        (0, s.jsx)(c.$W, {
                            className: (0, r.$)(_().root, _().important),
                            message: notifyBody,
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: getProgress + '%',
                                        height: '100%',
                                        'background-color': 'rgb(255 255 255)',
                                        opacity: getProgress <= 100 ? 0.1 : 0,
                                        'z-index': 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                p = () => {
                    let { formatMessage: e } = (0, l.A)(),
                        { notify: t } = (0, n.lkh)(),
                        { notify: modUpdateNotify, dismiss: modUpdateDismiss } = (0, n.lkh)(),
                        { notify: gpuStallNotify, dismiss: gpuStallDismiss } = (0, n.lkh)(),
                        { notify: basicToastNotify } = (0, n.lkh)(),
                        o = (0, a.useRef)(''),
                        r = (0, a.useCallback)(
                            (a, l) => {
                                o.current !== l &&
                                    ((o.current = l),
                                    t(
                                        (0, s.jsx)(h, {
                                            formatMessage: e,
                                            version: l,
                                        }),
                                        { containerId: n.uQT.IMPORTANT },
                                    ));
                            },
                            [e, o, t],
                        ),
                        modUpdateCallback = (0, a.useCallback)(
                            (a, oldVersion, newVersion, dedupeTimestamp = 0) => {
                                if (window.modUpdateAvailableEventDedupeNonce === dedupeTimestamp) return;
                                if (dedupeTimestamp) window.modUpdateAvailableEventDedupeNonce = dedupeTimestamp;
                                modUpdateNotify((0, s.jsx)(modUpdateToast, { formatMessage: e, version: `${oldVersion} -> ${newVersion}`, closeToast: modUpdateDismiss }), {
                                    containerId: n.uQT.IMPORTANT,
                                });
                            },
                            [e, modUpdateNotify, modUpdateDismiss],
                        ),
                        onGPUStallFixClick = (0, a.useCallback)(() => {
                            window.desktopEvents?.send(n.EE.APPLICATION_RESTART);
                        }, []),
                        onGPUStall = (0, a.useCallback)(
                            (event, reason='GPU_STALL', dedupeTimestamp = 0) => {
                                if (window.onGPUStallEventDedupeNonce === dedupeTimestamp) return;
                                if (dedupeTimestamp) window.onGPUStallEventDedupeNonce = dedupeTimestamp;
                                gpuStallNotify(
                                    (0, s.jsx)(toastWithProgress, {
                                        toastID: 'GPU_STALL',
                                        message: `Аппаратное ускорение отключилось: ${reason}`,
                                        buttonLabel: 'Исправить',
                                        onButtonClick: onGPUStallFixClick,
                                    }),
                                    {
                                        containerId: n.uQT.IMPORTANT,
                                    },
                                );
                            },
                            [gpuStallNotify, gpuStallDismiss],
                        ),
                    onBasicToastCreate = (0, a.useCallback)(
                        (event, toastID, message, dismissable, dedupeTimestamp = 0) => {
                            if (window[`onBasicToastCreate${toastID}`] === dedupeTimestamp) return;
                            if (dedupeTimestamp) window[`onBasicToastCreate${toastID}`] = dedupeTimestamp;
                            basicToastNotify(
                                (0, s.jsx)(toastWithProgress, {
                                    toastID: toastID,
                                    message: message,
                                    buttonLabel: dismissable ? dismissable : undefined,
                                    dismissOnButtonClick: !!dismissable,
                                }),
                                {
                                    containerId: n.uQT.IMPORTANT,
                                },
                            );
                        },
                        [basicToastNotify],
                    );
                    (0, a.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.BASIC_TOAST_CREATE, onBasicToastCreate),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(n.EE.BASIC_TOAST_CREATE, onBasicToastCreate);
                                }
                        );
                    }, [modUpdateCallback]);
                    (0, a.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.MOD_UPDATE_AVAILABLE, modUpdateCallback),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(n.EE.MOD_UPDATE_AVAILABLE, modUpdateCallback);
                                }
                        );
                    }, [modUpdateCallback]);
                    (0, a.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.GPU_STALL, onGPUStall),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(n.EE.GPU_STALL, onGPUStall);
                                }
                        );
                    }, [onGPUStall]);
                    (0, a.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.UPDATE_AVAILABLE, r),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.UPDATE_AVAILABLE, r);
                            }
                        );
                    }, [r]);
                };
        },
        51998: (e, t, o) => {
            'use strict';
            o.d(t, { useReleaseNotes: () => l });
            var s = o(66268),
                a = o(79169);
            let l = () => {
                let [e, t] = (0, s.useState)(!1),
                    {
                        releaseNotes: { setTranslationsReleaseNotes: o, isReady: l, modal: n, setSortedDescReleaseNotesKeys: r },
                    } = (0, a.Pjs)(),
                    i = (0, s.useCallback)(
                        (e, s) => {
                            let { needToShowReleaseNotes: a, sortedDescReleaseNotesKeys: l, translationsReleaseNotes: n } = s;
                            o(n), r(l), a && t(!0);
                        },
                        [r, o],
                    );
                (0, s.useEffect)(() => {
                    e && l && (n.open(), t(!1));
                }, [l, n, e]),
                    (0, s.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(a.EE.LOAD_RELEASE_NOTES, i),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(a.EE.LOAD_RELEASE_NOTES, i);
                            }
                        );
                    }, [i]);
            };
        },
        56574: (e) => {
            e.exports = {
                paywallContainer: 'WithMobilePaywall_paywallContainer__Mk1l_',
                shimmer: 'WithMobilePaywall_shimmer__fg4QA',
            };
        },
        58290: (e, t, o) => {
            'use strict';
            o.d(t, { useSendPlayerState: () => r });
            var s = o(66268),
                a = o(42213),
                l = o(53555),
                n = o(79169);
            let r = (e) => {
                let { sonata: t } = e,
                    o = (0, a.c)((e) => {
                        var t;
                        let { isPlaying: o, canMoveBackward: s, canMoveForward: a } = e;
                        null == (t = window.desktopEvents) ||
                            t.send(n.EE.PLAYER_STATE, {
                                isPlaying: o,
                                canMoveBackward: s,
                                canMoveForward: a,
                                status: e.status,
                                track: e.track,
                                progress: e.progress,
                                availableActions: e.availableActions,
                                actionsStore: e.actionsStore,
                                previousTrack: e.previousTrack,
                                nextTrack: e.nextTrack,
                            });
                    }),
                    sendPlayerStateDefault = (ve) => {
                        const previousTrack =
                            (ve.state.queueState.index.value ?? 0) - 1 >= 0
                                ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value - 1]]?.entity?.entityData?.meta
                                : undefined;
                        const nextTrack =
                            (ve.state.queueState.index.value ?? 0) + 1 >= 0
                                ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value + 1]]?.entity?.entityData?.meta
                                : undefined;

                        o({
                            status: ve.state.playerState.status.value,
                            isPlaying: ve.state.playerState.status.value === l.MT.PLAYING,
                            canMoveForward: ve.state.currentContext.value?.availableActions.moveForward.value,
                            canMoveBackward: ve.state.currentContext.value?.availableActions.moveBackward.value,
                            track: ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                            progress: ve.state.playerState.progress.value?.position,
                            availableActions: {
                                moveBackward: ve.state.currentContext.value?.availableActions.moveBackward.value,
                                moveForward: ve.state.currentContext.value?.availableActions.moveForward.value,
                                repeat: ve.state.currentContext.value?.availableActions.repeat.value,
                                shuffle: ve.state.currentContext.value?.availableActions.shuffle.value,
                                speed: ve.state.currentContext.value?.availableActions.speed.value,
                            },
                            actionsStore: {
                                repeat: ve.state.queueState.repeat.value,
                                shuffle: ve.state.queueState.shuffle.value,
                                isLiked: ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                    ve.state.queueState.currentEntity.value?.entity.entityData.meta.id,
                                ),
                                isDisliked: ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                    ve.state.queueState.currentEntity.value?.entity.entityData.meta.id,
                                ),
                            },
                            previousTrack: previousTrack,
                            nextTrack: nextTrack,
                        });
                    },
                    sendPlayerStatePlaying = (ve) => {
                        const previousTrack =
                            (ve.state.queueState.index.value ?? 0) - 1 >= 0
                                ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value - 1]]?.entity?.entityData?.meta
                                : undefined;
                        const nextTrack =
                            (ve.state.queueState.index.value ?? 0) + 1 >= 0
                                ? ve.state.queueState?.entityList.value?.[ve.state.queueState.order.value[ve.state.queueState.index.value + 1]]?.entity?.entityData?.meta
                                : undefined;

                        o({
                            status: l.MT.PLAYING,
                            isPlaying: true,
                            canMoveForward: ve.state.currentContext.value?.availableActions.moveForward.value,
                            canMoveBackward: ve.state.currentContext.value?.availableActions.moveBackward.value,
                            track: ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                            progress: ve.state.playerState.progress.value?.position,
                            availableActions: {
                                moveBackward: ve.state.currentContext.value?.availableActions.moveBackward.value,
                                moveForward: ve.state.currentContext.value?.availableActions.moveForward.value,
                                repeat: ve.state.currentContext.value?.availableActions.repeat.value,
                                shuffle: ve.state.currentContext.value?.availableActions.shuffle.value,
                                speed: ve.state.currentContext.value?.availableActions.speed.value,
                            },
                            actionsStore: {
                                repeat: ve.state.queueState.repeat.value,
                                shuffle: ve.state.queueState.shuffle.value,
                                isLiked: ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                    ve.state.queueState.currentEntity.value?.entity.entityData.meta.id,
                                ),
                                isDisliked: ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                    ve.state.queueState.currentEntity.value?.entity.entityData.meta.id,
                                ),
                            },
                            previousTrack: previousTrack,
                            nextTrack: nextTrack,
                        });
                    };
                (0, s.useEffect)(() => {
                    let e,
                        s,
                        a =
                            null == t
                                ? void 0
                                : t.state.playerState.status.onChange((e) => {
                                      e && sendPlayerStateDefault(t);
                                  }),
                        onEntityChange = t?.state.queueState.currentEntity.onChange((e) => {
                            e && sendPlayerStatePlaying(t);
                        }),
                        seekTracker = t?.state.playerState.event.onChange((e) => {
                            if (t.state.playerState.event.value === l.Iu.SET_PROGRESS) {
                                sendPlayerStateDefault(t);
                            }
                        }),
                        queueStateEntityListTracker = t?.state.queueState.entityList.onChange((e) => {
                            sendPlayerStateDefault(t);
                        }),
                        onRepeatAvailableChange = t?.state.currentContext.value?.availableActions.repeat?.onChange((e) => {
                            sendPlayerStateDefault(t);
                        }),
                        onShuffleAvailableChange = t?.state.currentContext.value?.availableActions.shuffle?.onChange((e) => {
                            sendPlayerStateDefault(t);
                        }),
                        onRepeatChange = t?.state.queueState.repeat?.onChange((e) => {
                            sendPlayerStateDefault(t);
                        }),
                        onShuffleChange = t?.state.queueState.shuffle?.onChange((e) => {
                            sendPlayerStateDefault(t);
                        }),
                        n =
                            null == t
                                ? void 0
                                : t.state.currentContext.onChange(() => {
                                      var a, l;
                                      null == e || e(),
                                          null == s || s(),
                                          (e =
                                              null == t || null == (a = t.state.currentContext.value)
                                                  ? void 0
                                                  : a.availableActions.moveBackward.onChange((e) => {
                                                        sendPlayerStateDefault(t);
                                                    })),
                                          (s =
                                              null == t || null == (l = t.state.currentContext.value)
                                                  ? void 0
                                                  : l.availableActions.moveForward.onChange((e) => {
                                                        sendPlayerStateDefault(t);
                                                    }));
                                  });
                    return () => {
                        null == a || a(),
                            null == n || n(),
                            null == onEntityChange || onEntityChange(),
                            null == seekTracker || seekTracker(),
                            null == queueStateEntityListTracker || queueStateEntityListTracker(),
                            null == onRepeatAvailableChange || onRepeatAvailableChange(),
                            null == onShuffleAvailableChange || onShuffleAvailableChange(),
                            null == onRepeatChange || onRepeatChange(),
                            null == onShuffleChange || onShuffleChange(),
                            null == s || s(),
                            null == s || s();
                    };
                }, [o, null == t ? void 0 : t.state.currentContext, null == t ? void 0 : t.state.playerState.status]);
            };
        },
        64951: (e) => {
            e.exports = {
                root: 'ReleaseNotesModal_root__RSw1p',
                modalHeader: 'ReleaseNotesModal_modalHeader__gp9SA',
                modalContent: 'ReleaseNotesModal_modalContent__g8OTu',
                scrollableContent: 'ReleaseNotesModal_scrollableContent__zGdbH',
                important: 'ReleaseNotesModal_important__u8yP4',
                notes: 'ReleaseNotesModal_notes__bVAoa',
                date: 'ReleaseNotesModal_date__s3_ux',
                description: 'ReleaseNotesModal_description__B_yLI',
                paragraph: 'ReleaseNotesModal_paragraph___laDJ',
                note: 'ReleaseNotesModal_note__S9E6z',
                version: 'ReleaseNotesModal_version__4Mcd5',
                item: 'ReleaseNotesModal_item___CYml',
                code: 'ReleaseNotesModal_code__Yv3QD',
            };
        },
        65892: (e, t, o) => {
            'use strict';
            o.d(t, { WithMobilePaywall: () => d });
            var s = o(33008),
                a = o(97531),
                l = o(44748),
                n = o(79169),
                r = o(56574),
                i = o.n(r);
            let d = (0, a.PA)((e) => {
                var t;
                let { children: o } = e,
                    { user: a, settings: r } = (0, n.Pjs)(),
                    { isFreemium: d } = (0, n.XCI)(),
                    { setPaywallRef: c } = (0, n.gKY)();
                return (null == (t = r.browserInfo) ? void 0 : t.isTouch) && (!a.isAuthorized || d)
                    ? (0, s.jsx)('div', {
                          ref: c,
                          className: i().paywallContainer,
                          children: (0, s.jsx)(l.pU, { useOverlayScroll: !1 }),
                      })
                    : o;
            });
        },
        66764: (e, t, o) => {
            'use strict';
            o.d(t, { WithBlockChildUser: () => l });
            var s = o(97531),
                a = o(79169);
            let l = (0, s.PA)(() => {
                let e = (0, a.NFA)(),
                    { user: t } = (0, a.Pjs)(),
                    o = e.get(a.QGx);
                t.isChild && o.redirectToChildPageUrl();
            });
        },
        76865: (e, t, o) => {
            'use strict';
            o.d(t, { useLaunch: () => n });
            var s = o(66268),
                a = o(49444),
                l = o(79169);
            let n = () => {
                let e = (0, a.j)(),
                    t = (0, s.useCallback)(() => {
                        let t = (0, l.HFS)();
                        t && e.count(t, 'installsCount');
                    }, [e]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.FIRST_LAUNCH, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.FIRST_LAUNCH, t);
                        }
                    );
                }, [t]);
            };
        },
        77575: (e, t, o) => {
            'use strict';
            o.d(t, {
                qw: () => g.ReleaseNotesModal,
                _o: () => E,
                cq: () => w.TitleBar,
                CA: () => s,
                M4: () => l,
                _E: () => n,
                LD: () => r.useApplicationDeeplinks,
                P4: () => i.useApplicationUpdate,
                Fn: () => d.useLaunch,
                H: () => c.usePlayerAction,
                t4: () => u.useProbabilityBucket,
                bk: () => _.useRefreshApplicationData,
                eP: () => h.useRefreshRepositoryMeta,
                sb: () => p.useRefreshTracksAvailability,
                sq: () => m.useReleaseNotes,
                OM: () => x.useSendPlayerState,
                sendDownloadTrack: () => sendDownloadTrack,
                sendDownloadCurrentTrack: () => sendDownloadCurrentTrack,
                sendDownloadTracks: () => sendDownloadTracks,
                sendYnisonState: () => sendYnisonState,
            });
            let s = () => {
                document.addEventListener('auxclick', (e) => e.preventDefault()),
                    document.addEventListener('click', (e) => {
                        (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                    });
            };
            var a = o(79169);
            let l = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(a.EE.APPLICATION_READY, e);
                },
                sendDownloadTrack = (trackId, trackName) => {
                    var t;
                    null === (t = window.desktopEvents) || void 0 === t || t.send(a.EE.DOWNLOAD_TRACK, trackId, trackName);
                },
                sendDownloadCurrentTrack = (trackId) => {
                    var t;
                    null === (t = window.desktopEvents) || void 0 === t || t.send(a.EE.DOWNLOAD_CURRENT_TRACK, trackId);
                },
                sendDownloadTracks = (trackIds, dirType, dirName) => {
                    var t;
                    null === (t = window.desktopEvents) || void 0 === t || t.send(a.EE.DOWNLOAD_TRACKS, trackIds, dirType, dirName);
                },
                sendYnisonState = (e) => {
                    var t;
                    null === (t = window.desktopEvents) ||
                        void 0 === t ||
                        t.send(a.EE.YNISON_STATE, {
                            rawData: e.rawData,
                        });
                },
                n = (e) => {
                    let t = e === a.Sxu.Light ? '#FFFFFF' : '#000000';
                    window.desktopEvents.send(a.EE.APPLICATION_THEME, t);
                };
            o(38467);
            var r = o(34875),
                i = o(44312),
                d = o(76865),
                c = o(10757),
                u = o(18275),
                _ = o(12965),
                h = o(92296),
                p = o(88886),
                m = o(51998),
                x = o(58290),
                C = o(41028),
                v = o(59615);
            let A = C.gK.model('TranslationsModel', { data: C.gK.frozen() }),
                E = C.gK
                    .model('ReleaseNotes', {
                        modal: v.qt,
                        translations: C.gK.maybeNull(A),
                        sortedDescReleaseNotesKeys: C.gK.maybeNull(C.gK.array(C.gK.string)),
                    })
                    .views((e) => ({
                        get isReady() {
                            var t;
                            return !!(
                                (null == (t = e.translations) ? void 0 : t.data) &&
                                'object' == typeof e.translations.data &&
                                Object.keys(e.translations.data).length > 0
                            );
                        },
                    }))
                    .actions((e) => ({
                        setSortedDescReleaseNotesKeys: (t) => {
                            e.sortedDescReleaseNotesKeys = (0, C.wg)(t);
                        },
                        setTranslationsReleaseNotes: (t) => {
                            t && (e.translations = A.create({ data: t }));
                        },
                    }));
            var g = o(98185),
                w = o(81785);
        },
        80099: (e, t, o) => {
            'use strict';
            o.d(t, { WithBetaUser: () => E });
            var s = o(33008),
                a = o(97531),
                l = o(85896),
                n = o(66268),
                r = o(96560),
                i = o(18064),
                d = o(44189),
                c = o(41458),
                u = o(93134),
                _ = o(77868),
                h = o(77575),
                p = o(34944),
                m = o(79169),
                x = o(18740),
                C = o(85610),
                v = o.n(C);
            let A = (0, a.PA)((e) => {
                    let { withoutExperiment: t = !1, showLoginButton: a = !1, showUserProfile: C = !1, withOffer: A = !1 } = e,
                        E = (0, m.NFA)(),
                        {
                            settings: { isMobile: g },
                        } = (0, m.Pjs)(),
                        w = (0, m.jjz)(),
                        N = E.get(m.twC),
                        f = (0, m._lF)(N.oldWebHost),
                        k = (0, n.useMemo)(() => (g ? o(93736).A.src : o(7644).A.src), [g]),
                        b = (0, n.useCallback)(() => {
                            let e = 'https://'.concat(f, '/pay');
                            window.open(e, '_blank', 'noreferrer noopener');
                        }, [f]);
                    (0, m.Jzs)(!0);
                    let j = (0, n.useMemo)(
                            () =>
                                A
                                    ? (0, s.jsx)(_.Heading, {
                                          variant: 'h1',
                                          size: 'xl',
                                          weight: 'bold',
                                          className: v().text,
                                          children: (0, s.jsx)(r.A, {
                                              id: 'welcome-page.offer-header',
                                          }),
                                      })
                                    : t
                                      ? (0, s.jsx)(_.Heading, {
                                            variant: 'h1',
                                            size: 'xxl',
                                            weight: 'bold',
                                            className: v().text,
                                            children: (0, s.jsx)(r.A, {
                                                id: 'welcome-page.beta-header',
                                                values: {
                                                    br: (0, s.jsx)('br', {}),
                                                },
                                            }),
                                        })
                                      : (0, s.jsx)(_.Heading, {
                                            variant: 'h1',
                                            size: 'xxl',
                                            weight: 'bold',
                                            className: v().text,
                                            children: (0, s.jsx)(r.A, {
                                                id: 'welcome-page.not-auth-header',
                                                values: {
                                                    br: (0, s.jsx)('br', {}),
                                                },
                                            }),
                                        }),
                            [A, t],
                        ),
                        P = (0, n.useMemo)(
                            () =>
                                t
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(_.Caption, {
                                                  variant: 'span',
                                                  type: 'text',
                                                  size: 'l',
                                                  className: v().text,
                                                  children: (0, s.jsx)(r.A, {
                                                      id: 'welcome-page.beta-text-short',
                                                  }),
                                              }),
                                              (0, s.jsx)(u.q, {
                                                  children: (0, s.jsx)(_.Heading, {
                                                      variant: 'h2',
                                                      children: (0, s.jsx)(r.A, {
                                                          id: 'welcome-page.beta-text-short',
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : A
                                      ? (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(_.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    className: v().offerText,
                                                    children: (0, s.jsx)(r.A, {
                                                        id: 'welcome-page.offer-text',
                                                    }),
                                                }),
                                                (0, s.jsx)(u.q, {
                                                    children: (0, s.jsx)(_.Heading, {
                                                        variant: 'h2',
                                                        children: (0, s.jsx)(r.A, {
                                                            id: 'welcome-page.offer-text',
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        })
                                      : (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(_.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    className: v().text,
                                                    children: (0, s.jsx)(r.A, {
                                                        id: 'welcome-page.not-auth-text',
                                                        values: {
                                                            br: (0, s.jsx)('br', {}),
                                                        },
                                                    }),
                                                }),
                                                (0, s.jsx)(u.q, {
                                                    children: (0, s.jsx)(_.Heading, {
                                                        variant: 'h2',
                                                        children: (0, s.jsx)(r.A, {
                                                            id: 'welcome-page.not-auth-text',
                                                            values: {
                                                                br: (0, s.jsx)('br', {}),
                                                            },
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                            [A, t],
                        ),
                        R = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, s.jsx)(x.Hi, {
                                          size: 'm',
                                          className: v().loginButton,
                                      })
                                    : A
                                      ? (0, s.jsx)(d.Button, {
                                            onClick: b,
                                            className: (0, l.$)(v().offerButton, v().offerButton_important),
                                            role: 'link',
                                            color: 'plus',
                                            size: 'l',
                                            radius: 'm',
                                            withRipple: !1,
                                            children: (0, s.jsx)(r.A, {
                                                id: 'payment.offer-button',
                                            }),
                                        })
                                      : void 0,
                            [b, a, A],
                        );
                    return (
                        (0, m.NBO)(!0),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(v().root),
                            ...(0, i.Am)(i.Xk.welcome.WELCOME_PAGE),
                            children: [
                                (0, s.jsx)(h.cq, { withSecondaryColor: !0 }),
                                (0, s.jsx)('div', {
                                    className: v().logoContainer,
                                    children: (0, s.jsx)(c.Logo, {
                                        alignIcon: 'center',
                                        lang: w,
                                        className: v().logo,
                                    }),
                                }),
                                j,
                                P,
                                R,
                                (0, s.jsx)('img', {
                                    className: v().image,
                                    src: k,
                                }),
                                C &&
                                    (0, s.jsx)(p.YS, {
                                        className: v().user,
                                        withMeta: !g,
                                        variant: g ? 'mobile' : 'desktop',
                                        usernameClassName: (0, l.$)(v().username, v().important),
                                    }),
                            ],
                        })
                    );
                }),
                E = (0, a.PA)((e) => {
                    let { children: t } = e,
                        { user: o, experiments: a } = (0, m.Pjs)(),
                        { hasFreeUserAccess: l } = (0, m.XCI)();
                    if ((o.isAuthorized, o.isAuthorized))
                        return a.checkExperiment(m.zal.WebNext, 'on')
                            ? o.hasPlus || l
                                ? t
                                : (0, s.jsx)(A, {
                                      withOffer: !0,
                                      showUserProfile: !0,
                                  })
                            : (0, s.jsx)(A, {
                                  withoutExperiment: !0,
                                  showUserProfile: !0,
                              });
                    return (0, s.jsx)(A, { showLoginButton: !0 });
                });
        },
        81785: (e, t, o) => {
            'use strict';
            o.d(t, { TitleBar: () => h });
            var s = o(33008),
                a = o(85896),
                l = o(97531),
                n = o(66268),
                r = o(73827),
                i = o(79169),
                d = o(38467),
                c = o(30075),
                u = o.n(c);
            let _ = (e) => {
                    let { children: t, className: o, onClick: l, ariaLabel: n, withSecondaryColor: r } = e;
                    return (0, s.jsx)('button', {
                        type: 'button',
                        className: (0, a.$)(u().button, { [u().button_withSecondaryColor]: r }, o),
                        onClick: l,
                        'aria-label': n,
                        children: t,
                    });
                },
                h = (0, l.PA)((e) => {
                    let { withSecondaryColor: t } = e,
                        { settings: o } = (0, i.Pjs)(),
                        l = o.isWindowsApplication || o.isLinuxApplication,
                        { formatMessage: c } = (0, r.A)(),
                        onMiniPlayerToggle = (0, n.useCallback)(() => {
                            (0, d.toggleMiniPlayer)();
                        }, []),
                        h = (0, n.useCallback)(() => {
                            (0, d.vZ)();
                        }, []),
                        p = (0, n.useCallback)(() => {
                            (0, d.LO)();
                        }, []),
                        m = (0, n.useCallback)(() => {
                            (0, d.N5)();
                        }, []);
                    return (0, s.jsx)('div', {
                        className: u().root,
                        onDoubleClick: p,
                        children:
                            l &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    // (0, s.jsx)(_, {
                                    //     onClick: onMiniPlayerToggle,
                                    //     ariaLabel: 'miniplayer',
                                    //     withSecondaryColor: t,
                                    //     children: (0, s.jsx)('svg', {
                                    //         width: '12',
                                    //         height: '12',
                                    //         viewBox: '0 0 12 12',
                                    //         xmlns: 'http://www.w3.org/2000/svg',
                                    //         className: (0, a.$)(u().icon, {
                                    //             [u().icon_withSecondaryColor]: t,
                                    //         }),
                                    //         children: [
                                    //             (0, s.jsx)('path', {
                                    //                 d: 'M1.49805 11C1.42969 11 1.36458 10.987 1.30273 10.961C1.24414 10.935 1.19206 10.8992 1.14648 10.8537C1.10091 10.8081 1.0651 10.7561 1.03906 10.6976C1.01302 10.6358 1 10.5707 1 10.5024C1 10.4341 1.01302 10.3707 1.03906 10.3122C1.0651 10.2504 1.10091 10.1967 1.14648 10.1512C1.19206 10.1024 1.24414 10.065 1.30273 10.039C1.36458 10.013 1.42969 10 1.49805 10H10.502C10.5703 10 10.6338 10.013 10.6924 10.039C10.7542 10.065 10.8079 10.1024 10.8535 10.1512C10.8991 10.1967 10.9349 10.2504 10.9609 10.3122C10.987 10.3707 11 10.4341 11 10.5024C11 10.5707 10.987 10.6358 10.9609 10.6976C10.9349 10.7561 10.8991 10.8081 10.8535 10.8537C10.8079 10.8992 10.7542 10.935 10.6924 10.961C10.6338 10.987 10.5703 11 10.502 11H1.49805Z',
                                    //                 fill: 'currentColor',
                                    //             }),
                                    //             (0, s.jsx)('path', {
                                    //                 d: 'M1.24902 2C1.21484 2 1.18229 1.98699 1.15137 1.96098C1.12207 1.93496 1.09603 1.89919 1.07324 1.85366C1.05046 1.80813 1.03255 1.7561 1.01953 1.69756C1.00651 1.63577 1 1.57073 1 1.50244C1 1.43415 1.00651 1.37073 1.01953 1.31219C1.03255 1.25041 1.05046 1.19675 1.07324 1.15122C1.09603 1.10244 1.12207 1.06504 1.15137 1.03902C1.18229 1.01301 1.21484 1 1.24902 1H5.75098C5.78516 1 5.81689 1.01301 5.84619 1.03902C5.87711 1.06504 5.90397 1.10244 5.92676 1.15122C5.94955 1.19675 5.96745 1.25041 5.98047 1.31219C5.99349 1.37073 6 1.43415 6 1.50244C6 1.57073 5.99349 1.63577 5.98047 1.69756C5.96745 1.7561 5.94955 1.80813 5.92676 1.85366C5.90397 1.89919 5.87711 1.93496 5.84619 1.96098C5.81689 1.98699 5.78516 2 5.75098 2H1.24902Z',
                                    //                 fill: 'currentColor',
                                    //             }),
                                    //             (0, s.jsx)('path', {
                                    //                 d: 'M10 6.24902C10 6.21484 10.013 6.18229 10.039 6.15137C10.065 6.12207 10.1008 6.09603 10.1463 6.07324C10.1919 6.05046 10.2439 6.03255 10.3024 6.01953C10.3642 6.00651 10.4293 6 10.4976 6C10.5659 6 10.6293 6.00651 10.6878 6.01953C10.7496 6.03255 10.8033 6.05046 10.8488 6.07324C10.8976 6.09603 10.935 6.12207 10.961 6.15137C10.987 6.18229 11 6.21484 11 6.24902L11 10.751C11 10.7852 10.987 10.8169 10.961 10.8462C10.935 10.8771 10.8976 10.904 10.8488 10.9268C10.8033 10.9495 10.7496 10.9675 10.6878 10.9805C10.6293 10.9935 10.5659 11 10.4976 11C10.4293 11 10.3642 10.9935 10.3024 10.9805C10.2439 10.9675 10.1919 10.9495 10.1463 10.9268C10.1008 10.904 10.065 10.8771 10.039 10.8462C10.013 10.8169 10 10.7852 10 10.751L10 6.24902Z',
                                    //                 fill: 'currentColor',
                                    //             }),
                                    //             (0, s.jsx)('path', {
                                    //                 d: 'M9.85698 1.4045C9.89078 1.37069 9.93219 1.34771 9.98121 1.33556C10.0286 1.32502 10.0797 1.3246 10.1345 1.33432C10.1893 1.34404 10.2439 1.3632 10.2982 1.3918C10.3549 1.4227 10.4074 1.46234 10.4558 1.51072C10.5042 1.55911 10.5427 1.61048 10.5713 1.66483C10.6022 1.72148 10.6225 1.77721 10.6322 1.832C10.6442 1.8891 10.645 1.94135 10.6344 1.98876C10.6223 2.03778 10.5993 2.07919 10.5655 2.11299L6.11287 6.56559C6.07907 6.5994 6.03846 6.62158 5.99105 6.63212C5.94203 6.64427 5.88898 6.64434 5.83188 6.63231C5.77708 6.62259 5.72136 6.60228 5.6647 6.57139C5.61035 6.54279 5.55899 6.5043 5.5106 6.45591C5.46222 6.40753 5.42257 6.35501 5.39167 6.29835C5.36308 6.244 5.34392 6.18943 5.3342 6.13464C5.32448 6.07984 5.3257 6.02794 5.33785 5.97892C5.3484 5.93151 5.37057 5.8909 5.40438 5.8571L9.85698 1.4045Z',
                                    //                 fill: 'currentColor',
                                    //             }),
                                    //             (0, s.jsx)('path', {
                                    //                 d: 'M10 1.19922C10 1.17188 10.013 1.14583 10.039 1.12109C10.065 1.09766 10.1008 1.07682 10.1463 1.05859C10.1919 1.04036 10.2439 1.02604 10.3024 1.01562C10.3642 1.00521 10.4293 1 10.4976 1C10.5659 1 10.6293 1.00521 10.6878 1.01562C10.7496 1.02604 10.8033 1.04036 10.8488 1.05859C10.8976 1.07682 10.935 1.09766 10.961 1.12109C10.987 1.14583 11 1.17188 11 1.19922L11 4.80078C11 4.82812 10.987 4.85352 10.961 4.87695C10.935 4.90169 10.8976 4.92318 10.8488 4.94141C10.8033 4.95964 10.7496 4.97396 10.6878 4.98438C10.6293 4.99479 10.5659 5 10.4976 5C10.4293 5 10.3642 4.99479 10.3024 4.98438C10.2439 4.97396 10.1919 4.95964 10.1463 4.94141C10.1008 4.92318 10.065 4.90169 10.039 4.87695C10.013 4.85352 10 4.82812 10 4.80078L10 1.19922Z',
                                    //                 fill: 'currentColor',
                                    //             }),
                                    //             (0, s.jsx)('path', {
                                    //                 d: 'M10.8008 1C10.8281 1 10.8542 1.01301 10.8789 1.03902C10.9023 1.06504 10.9232 1.10081 10.9414 1.14634C10.9596 1.19187 10.974 1.2439 10.9844 1.30244C10.9948 1.36423 11 1.42927 11 1.49756C11 1.56585 10.9948 1.62927 10.9844 1.68781C10.974 1.74959 10.9596 1.80325 10.9414 1.84878C10.9232 1.89756 10.9023 1.93496 10.8789 1.96098C10.8542 1.98699 10.8281 2 10.8008 2L7.19922 2C7.17188 2 7.14648 1.98699 7.12305 1.96098C7.09831 1.93496 7.07682 1.89756 7.05859 1.84878C7.04036 1.80325 7.02604 1.74959 7.01562 1.68781C7.00521 1.62927 7 1.56585 7 1.49756C7 1.42927 7.00521 1.36423 7.01562 1.30244C7.02604 1.2439 7.04036 1.19187 7.05859 1.14634C7.07682 1.10081 7.09831 1.06504 7.12305 1.03902C7.14648 1.01301 7.17188 1 7.19922 1L10.8008 1Z',
                                    //                 fill: 'currentColor',
                                    //             }),
                                    //             (0, s.jsx)('path', {
                                    //                 d: 'M1 1.49805C1 1.42969 1.01301 1.36458 1.03902 1.30273C1.06504 1.24414 1.10081 1.19206 1.14634 1.14648C1.19187 1.10091 1.2439 1.0651 1.30244 1.03906C1.36423 1.01302 1.42927 1 1.49756 1C1.56585 1 1.62927 1.01302 1.68781 1.03906C1.74959 1.0651 1.80325 1.10091 1.84878 1.14648C1.89756 1.19206 1.93496 1.24414 1.96098 1.30273C1.98699 1.36458 2 1.42969 2 1.49805L2 10.502C2 10.5703 1.98699 10.6338 1.96098 10.6924C1.93496 10.7542 1.89756 10.8079 1.84878 10.8535C1.80325 10.8991 1.74959 10.9349 1.68781 10.9609C1.62927 10.987 1.56585 11 1.49756 11C1.42927 11 1.36423 10.987 1.30244 10.9609C1.2439 10.9349 1.19187 10.8991 1.14634 10.8535C1.10081 10.8079 1.06504 10.7542 1.03902 10.6924C1.01301 10.6338 1 10.5703 1 10.502L1 1.49805Z',
                                    //                 fill: 'currentColor',
                                    //             }),
                                    //         ],
                                    //     }),
                                    // }),
                                    (0, s.jsx)(_, {
                                        onClick: h,
                                        ariaLabel: c({
                                            id: 'windows-menu.roll-up',
                                        }),
                                        withSecondaryColor: t,
                                        children: (0, s.jsx)('svg', {
                                            width: '10',
                                            height: '1',
                                            viewBox: '0 0 10 1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, a.$)(u().icon, {
                                                [u().icon_withSecondaryColor]: t,
                                            }),
                                            children: (0, s.jsx)('path', {
                                                d: 'M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)(_, {
                                        onClick: p,
                                        ariaLabel: c({
                                            id: 'windows-menu.unwrap',
                                        }),
                                        withSecondaryColor: t,
                                        children: (0, s.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, a.$)(u().icon, {
                                                [u().icon_withSecondaryColor]: t,
                                            }),
                                            children: (0, s.jsx)('path', {
                                                d: 'M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)(_, {
                                        className: u().closeButton,
                                        onClick: m,
                                        ariaLabel: c({
                                            id: 'windows-menu.close',
                                        }),
                                        children: (0, s.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, a.$)(u().icon, {
                                                [u().icon_withSecondaryColor]: t,
                                            }),
                                            children: (0, s.jsx)('path', {
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
        85610: (e) => {
            e.exports = {
                root: 'WelcomePage_root__JK3Pb',
                image: 'WelcomePage_image__7_fpW',
                loginButton: 'WelcomePage_loginButton__AJHcG',
                secondBackground: 'WelcomePage_secondBackground__55zFI',
                offerButton: 'WelcomePage_offerButton__MRs_g',
                offerButton_important: 'WelcomePage_offerButton_important__0wf60',
                text: 'WelcomePage_text__A4aXp',
                offerText: 'WelcomePage_offerText__ZvXKN',
                logoContainer: 'WelcomePage_logoContainer__72W3y',
                logo: 'WelcomePage_logo__oMU8g',
                user: 'WelcomePage_user__WNc4W',
                username: 'WelcomePage_username__yXGsn',
                important: 'WelcomePage_important__MJxEk',
            };
        },
        87264: (e, t, o) => {
            'use strict';
            o.d(t, { WithBlockFullscreen: () => m });
            var s = o(33008),
                a = o(97531),
                l = o(17846),
                n = o(66268),
                r = o(73827),
                i = o(44189),
                d = o(77868),
                c = o(77575),
                u = o(79169),
                _ = o(6656),
                h = o.n(_);
            let p = (0, a.PA)((e) => {
                    var t, o, a, _;
                    let { isAuthorizedUser: p = !1 } = e,
                        { formatMessage: m } = (0, r.A)(),
                        x = (0, l.useRouter)(),
                        {
                            experiments: C,
                            settings: { isMobile: v },
                        } = (0, u.Pjs)(),
                        A = (0, u.NFA)().get(u.QGx),
                        E = C.getExperiment(u.zal.WebNextBlockFullscreen),
                        g = null == E || null == (t = E.value) ? void 0 : t.metadata,
                        w = (0, n.useCallback)(() => {
                            A.authorizationUrl && x.push(A.authorizationUrl);
                        }, [A.authorizationUrl, x]),
                        N = (0, n.useCallback)(() => {
                            var e;
                            let t = new URLSearchParams({
                                    origin: 'music_button-header',
                                    retpath: encodeURIComponent('https://music.yandex.ru/settings?reqid=527383194170610471317084142111361467&from-passport'),
                                }),
                                o = (null == g || null == (e = g.redirectButton) ? void 0 : e.link) || A.getAuthorizationUrlWithParams(t);
                            o && window.open(o, '_blank', 'noreferrer noopener');
                        }, [A, null == g || null == (o = g.redirectButton) ? void 0 : o.link]),
                        f = (null == g || null == (a = g.redirectButton) ? void 0 : a.text) || m({ id: 'snegir.redirect-button-text' }),
                        k = (null == g || null == (_ = g.authButton) ? void 0 : _.text) || m({ id: 'snegir.auth-button-text' }),
                        b = (0, n.useMemo)(
                            () =>
                                p
                                    ? (0, s.jsx)(i.Button, {
                                          onClick: N,
                                          className: h().button,
                                          role: 'link',
                                          color: 'primary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: f,
                                      })
                                    : (0, s.jsx)(i.Button, {
                                          onClick: w,
                                          className: h().button,
                                          role: 'link',
                                          color: 'primary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: k,
                                      }),
                            [p, w, k, N, f],
                        ),
                        j = (null == g ? void 0 : g.mainText) || m({ id: 'snegir.main-text' }, { br: '\r\n' });
                    return (0, s.jsxs)('div', {
                        className: h().root,
                        children: [
                            (0, s.jsx)(c.cq, { withSecondaryColor: !0 }),
                            (0, s.jsxs)('div', {
                                className: h().container,
                                children: [
                                    (0, s.jsxs)('div', {
                                        className: h().content,
                                        children: [
                                            (0, s.jsx)(d.Heading, {
                                                variant: 'h1',
                                                size: v ? 'xl' : 'xxl',
                                                weight: 'bold',
                                                className: h().title,
                                                children: j,
                                            }),
                                            b,
                                        ],
                                    }),
                                    (0, s.jsx)('div', { className: h().image }),
                                ],
                            }),
                        ],
                    });
                }),
                m = (0, a.PA)((e) => {
                    let { children: t } = e,
                        { experiments: o, user: a } = (0, u.Pjs)(),
                        l = o.checkExperiment(u.zal.WebNextBlockFullscreen, 'on') || !a.isServiceAvailable;
                    return ((0, u.QVD)(l), l) ? (a.isAuthorized ? (0, s.jsx)(p, { isAuthorizedUser: !0 }) : (0, s.jsx)(p, {})) : t;
                });
        },
        88886: (e, t, o) => {
            'use strict';
            o.d(t, { useRefreshTracksAvailability: () => l });
            var s = o(66268),
                a = o(79169);
            let l = () => {
                let e = (0, a.jRO)(),
                    t = (0, s.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksAvailability().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(a.EE.TRACKS_AVAILABILITY_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(a.EE.REFRESH_TRACKS_AVAILABILITY, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(a.EE.REFRESH_TRACKS_AVAILABILITY, t);
                        }
                    );
                }, [t]);
            };
        },
        90958: (e, t, o) => {
            'use strict';
            o.d(t, { WithDownloadMobileAppModal: () => n });
            var s = o(97531),
                a = o(66268),
                l = o(79169);
            let n = (0, s.PA)((e) => {
                let { children: t } = e,
                    { downloadMobileApp: o } = (0, l.Pjs)();
                return (
                    (0, a.useEffect)(() => {
                        o.shouldShow() && o.openModal();
                    }, [o]),
                    t
                );
            });
        },
        92296: (e, t, o) => {
            'use strict';
            o.d(t, { useRefreshRepositoryMeta: () => l });
            var s = o(66268),
                a = o(79169);
            let l = () => {
                let e = (0, a.jRO)(),
                    t = (0, s.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksMeta().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(a.EE.REPOSITORY_META_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(a.EE.REFRESH_REPOSITORY_META, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(a.EE.REFRESH_REPOSITORY_META, t);
                        }
                    );
                }, [t]);
            };
        },
        93736: (e, t, o) => {
            'use strict';
            o.d(t, { A: () => s });
            let s = {
                src: '/_next/static/media/mobile.3fa5bdc0.webp',
                height: 1270,
                width: 750,
                blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoFAAgAAkA4JQBOgCHh3c/IAAD+/eovkSS/bwVeZYW8gP0CqVSvDPwORMoGN02KRYOAAA==',
                blurWidth: 5,
                blurHeight: 8,
            };
        },
        98185: (e, t, o) => {
            'use strict';
            o.d(t, { ReleaseNotesModal: () => x });
            var s = o(33008),
                a = o(85896),
                l = o(97531),
                n = o(73827),
                r = o(43576),
                i = o(96560),
                d = o(51704),
                c = o(57747),
                u = o(77868),
                _ = o(79169),
                h = o(64951),
                p = o.n(h);
            let m = {
                    ul: (e) =>
                        (0, s.jsx)('ul', {
                            className: p().description,
                            children: e,
                        }),
                    li: (e) => (0, s.jsx)('li', { className: p().item, children: e }),
                    code: (e) =>
                        (0, s.jsx)('code', {
                            className: p().code,
                            children: e,
                        }),
                    date: (e) =>
                        (0, s.jsx)('span', {
                            className: p().date,
                            children: e,
                        }),
                    p: (e) =>
                        (0, s.jsx)('p', {
                            className: p().paragraph,
                            children: e,
                        }),
                    br: (0, s.jsx)('br', {}),
                },
                x = (0, l.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: t, modal: o },
                        } = (0, _.Pjs)(),
                        { formatMessage: l } = (0, n.A)(),
                        { language: h, defaultLanguage: x } = (0, _.h6b)(),
                        C = (0, _.Crf)();
                    return (0, s.jsx)(d.a, {
                        title: l({ id: 'desktop.release-notes-modal-title' }),
                        open: o.isOpened,
                        onOpenChange: o.onOpenChange,
                        onClose: o.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: l({ id: 'interface-actions.close' }),
                        className: p().root,
                        headerClassName: p().modalHeader,
                        contentClassName: p().modalContent,
                        children: (0, s.jsx)(r.A, {
                            onError: C,
                            defaultLocale: x,
                            locale: h,
                            messages: null == e ? void 0 : e.data,
                            children: (0, s.jsx)(c.N, {
                                className: (0, a.$)(p().scrollableContent, p().important),
                                containerClassName: (0, a.$)(p().notes, p().important),
                                children:
                                    null == t
                                        ? void 0
                                        : t.map((e) =>
                                              (0, s.jsxs)(
                                                  'div',
                                                  {
                                                      className: p().note,
                                                      children: [
                                                          (0, s.jsx)(u.Heading, {
                                                              variant: 'h4',
                                                              className: (0, a.$)(p().version, p().important),
                                                              children: (0, _.Grs)(e),
                                                          }),
                                                          (0, s.jsx)(i.A, {
                                                              id: e,
                                                              values: m,
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              ),
                                          ),
                            }),
                        }),
                    });
                });
        },
    },
]);
