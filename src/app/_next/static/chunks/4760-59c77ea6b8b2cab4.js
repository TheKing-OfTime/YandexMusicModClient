(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4760],
    {
        357: (e, t, a) => {
            "use strict";
            a.d(t, { SonataControls: () => E });
            var o = a(33008),
                n = a(85896),
                s = a(97531),
                l = a(66268),
                i = a(42213),
                r = a(79169),
                c = a(68342),
                u = a(48148),
                d = a(73904),
                p = a(5453),
                _ = a(14448),
                f = a.n(_),
                x = a(66038),
                N = a(73827),
                h = a(18064),
                v = a(44189),
                m = a(78016),
                C = a(18740),
                B = a(57526),
                M = a(67950),
                S = a(12085),
                k = a.n(S);
            let P = (0, s.PA)((e) => {
                let {
                        disabled: t,
                        isPlaying: a,
                        repeatMode: s,
                        canMoveForward: l,
                        canMoveBackward: i,
                        canRewind: c,
                        canShuffle: u,
                        onClickNext: d,
                        onClickPrev: p,
                        onRewindBackwardsClick: _,
                        onRewindForwardClick: f,
                        onClickPlayPause: x,
                        canChangeRepeatMode: S,
                        shuffle: P,
                        className: I,
                        onRepeatClick: w,
                        onShuffleClick: A,
                    } = e,
                    { formatMessage: O } = (0, N.A)(),
                    { experiments: b } = (0, r.Pjs)(),
                    E = b.checkExperiment(
                        r.zal.WebNextPlayerBarYellowButton,
                        "on",
                    );
                return (0, o.jsxs)("div", {
                    className: (0, n.$)(k().root, I),
                    children: [
                        (0, o.jsxs)("div", {
                            className: k().buttonContainer,
                            children: [
                                (t || u) &&
                                    (0, o.jsx)(M.ShuffleButton, {
                                        className: k().sonataButton,
                                        size: "s",
                                        iconSize: "xxs",
                                        color: "secondary",
                                        isDisabled: t,
                                        shuffle: P,
                                        onClick: A,
                                        ...(0, h.Am)(
                                            h.Kq.sonata.SHUFFLE_BUTTON,
                                        ),
                                    }),
                                !t &&
                                    c &&
                                    (0, o.jsx)(v.Button, {
                                        className: (0, n.$)(
                                            k().sonataButton,
                                            k().rewind,
                                        ),
                                        color: "secondary",
                                        size: "m",
                                        radius: "round",
                                        withRipple: !1,
                                        "aria-label": O({
                                            id: "player-actions.rewind-backwards",
                                        }),
                                        icon: (0, o.jsx)(m.Icon, {
                                            variant: "rewindBackwards",
                                            size: "xxs",
                                        }),
                                        onClick: _,
                                        ...(0, h.Am)(
                                            h.Kq.sonata.REWIND_BACKWARDS_BUTTON,
                                        ),
                                    }),
                            ],
                        }),
                        (0, o.jsxs)("div", {
                            className: k().sonataButtons,
                            children: [
                                (0, o.jsx)(v.Button, {
                                    className: k().sonataButton,
                                    color: "secondary",
                                    size: "m",
                                    radius: "round",
                                    disabled: !i,
                                    withRipple: !1,
                                    "aria-label": O({
                                        id: "player-actions.previous-track",
                                    }),
                                    icon: (0, o.jsx)(m.Icon, {
                                        variant: "previous",
                                        size: "xxs",
                                    }),
                                    onClick: p,
                                    ...(0, h.Am)(
                                        h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    ),
                                }),
                                (0, o.jsx)(C.DM, {
                                    className: (0, n.$)(
                                        k().sonataButton,
                                        k().sonataPlayButton,
                                    ),
                                    iconSize: "m",
                                    size: "l",
                                    radius: "round",
                                    color: "secondary",
                                    buttonVariant: "default",
                                    isPlaying: a,
                                    iconClassName: (0, n.$)(
                                        k().playPauseButtonIcon,
                                        {
                                            [k()
                                                .playPauseButtonIcon_withYellowPlayButton]:
                                                E,
                                        },
                                    ),
                                    onClick: x,
                                }),
                                (0, o.jsx)(v.Button, {
                                    className: k().sonataButton,
                                    radius: "round",
                                    size: "m",
                                    color: "secondary",
                                    disabled: !l,
                                    withRipple: !1,
                                    "aria-label": O({
                                        id: "player-actions.next-track",
                                    }),
                                    icon: (0, o.jsx)(m.Icon, {
                                        variant: "next",
                                        size: "xxs",
                                    }),
                                    onClick: d,
                                    ...(0, h.Am)(h.Kq.sonata.NEXT_TRACK_BUTTON),
                                }),
                            ],
                        }),
                        (0, o.jsxs)("div", {
                            className: k().buttonContainer,
                            children: [
                                !t &&
                                    c &&
                                    (0, o.jsx)(v.Button, {
                                        className: (0, n.$)(
                                            k().sonataButton,
                                            k().rewind,
                                        ),
                                        color: "secondary",
                                        size: "m",
                                        radius: "round",
                                        withRipple: !1,
                                        "aria-label": O({
                                            id: "player-actions.rewind-forward",
                                        }),
                                        icon: (0, o.jsx)(m.Icon, {
                                            variant: "rewindForward",
                                            size: "xxs",
                                        }),
                                        onClick: f,
                                        ...(0, h.Am)(
                                            h.Kq.sonata.REWIND_FORWARD_BUTTON,
                                        ),
                                    }),
                                (t || S) &&
                                    (0, o.jsx)(B.RepeatButton, {
                                        className: k().sonataButton,
                                        size: "s",
                                        color: "secondary",
                                        isDisabled: t,
                                        iconSize: "xxs",
                                        repeatMode: s,
                                        onClick: w,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = a(48509),
                w = a(61744),
                A = a(79665),
                O = a.n(A);
            let b = (0, s.PA)((e) => {
                    let {
                            isPlaying: t,
                            canMoveForward: a,
                            canMoveBackward: s,
                            canRewind: i,
                            onClickNext: c,
                            onClickPrev: u,
                            onRewindBackwardsClick: d,
                            onRewindForwardClick: p,
                            onClickPlayPause: _,
                            className: f,
                        } = e,
                        { formatMessage: x } = (0, N.A)(),
                        { user: B, sonataState: M } = (0, r.Pjs)(),
                        S = (0, r.zwV)(),
                        k = M.entityMeta,
                        P = M.contextType === I.K.Generative,
                        A = B.isAuthorized && !P,
                        b = (0, w.KX)(M.entityMeta),
                        E = (0, w.mW)(M.entityMeta);
                    (0, l.useEffect)(() => {
                        if (!M.isGenerativeContext)
                            return (
                                null == S ||
                                    S.addShortcutsListener(
                                        r.Mo.MAIN,
                                        r.lbr.LIKE,
                                        b,
                                    ),
                                null == S ||
                                    S.addShortcutsListener(
                                        r.Mo.MAIN,
                                        r.lbr.DISLIKE,
                                        E,
                                    ),
                                () => {
                                    null == S ||
                                        S.removeShortcutsListener(
                                            r.Mo.MAIN,
                                            r.lbr.LIKE,
                                        ),
                                        null == S ||
                                            S.removeShortcutsListener(
                                                r.Mo.MAIN,
                                                r.lbr.DISLIKE,
                                            );
                                }
                            );
                    }, [E, b, S, M.isGenerativeContext]);
                    let y = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(v.Button, {
                                          className: O().sonataButton,
                                          variant: "text",
                                          color: "secondary",
                                          size: "m",
                                          radius: "round",
                                          withRipple: !1,
                                          "aria-label": x({
                                              id: "player-actions.rewind-backwards",
                                          }),
                                          icon: (0, o.jsx)(m.Icon, {
                                              variant: "rewindBackwards",
                                              size: "xs",
                                          }),
                                          onClick: d,
                                      })
                                    : (0, o.jsx)(v.Button, {
                                          className: O().sonataButton,
                                          variant: "text",
                                          color: "secondary",
                                          size: "m",
                                          radius: "round",
                                          disabled: !s,
                                          withRipple: !1,
                                          "aria-label": x({
                                              id: "player-actions.previous-track",
                                          }),
                                          icon: (0, o.jsx)(m.Icon, {
                                              variant: "previous",
                                              size: "xs",
                                          }),
                                          onClick: u,
                                          ...(0, h.Am)(
                                              h.Kq.sonata
                                                  .MOBILE_PREVIOUS_TRACK_BUTTON,
                                          ),
                                      }),
                            [i, s, x, u, d],
                        ),
                        R = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(v.Button, {
                                          className: O().sonataButton,
                                          variant: "text",
                                          radius: "round",
                                          size: "m",
                                          color: "secondary",
                                          disabled: !a,
                                          withRipple: !1,
                                          "aria-label": x({
                                              id: "player-actions.rewind-forward",
                                          }),
                                          icon: (0, o.jsx)(m.Icon, {
                                              variant: "rewindForward",
                                              size: "xs",
                                          }),
                                          onClick: p,
                                      })
                                    : (0, o.jsx)(v.Button, {
                                          className: O().sonataButton,
                                          variant: "text",
                                          radius: "round",
                                          size: "m",
                                          color: "secondary",
                                          disabled: !a,
                                          withRipple: !1,
                                          "aria-label": x({
                                              id: "player-actions.next-track",
                                          }),
                                          icon: (0, o.jsx)(m.Icon, {
                                              variant: "next",
                                              size: "xs",
                                          }),
                                          onClick: c,
                                          ...(0, h.Am)(
                                              h.Kq.sonata
                                                  .MOBILE_NEXT_TRACK_BUTTON,
                                          ),
                                      }),
                            [i, a, x, c, p],
                        );
                    return (0, o.jsxs)("div", {
                        className: (0, n.$)(O().root, f),
                        children: [
                            (0, o.jsx)("div", {
                                className: O().buttonContainer,
                                children:
                                    k &&
                                    A &&
                                    (0, o.jsx)(C.aQ, {
                                        fallback: (0, o.jsx)(C._I, {
                                            isDisliked: k.isDisliked,
                                            iconSize: "xs",
                                            onClick: E,
                                        }),
                                    }),
                            }),
                            (0, o.jsxs)("div", {
                                className: O().sonataButtons,
                                children: [
                                    y,
                                    (0, o.jsx)(C.DM, {
                                        className: O().sonataButton,
                                        iconSize: "xxl",
                                        variant: "filled",
                                        color: "secondary",
                                        isPlaying: t,
                                        iconClassName: O().playPauseButtonIcon,
                                        onClick: _,
                                    }),
                                    R,
                                ],
                            }),
                            (0, o.jsx)("div", {
                                className: O().buttonContainer,
                                children:
                                    k &&
                                    A &&
                                    (0, o.jsx)(C.aQ, {
                                        fallback: (0, o.jsx)(C.cy, {
                                            isLiked: k.isLiked,
                                            iconSize: "xs",
                                            onClick: b,
                                            disabled: !B.isAuthorized,
                                        }),
                                    }),
                            }),
                        ],
                    });
                }),
                E = (0, s.PA)((e) => {
                    var t, a;
                    let {
                            isMobile: s,
                            entityMeta: _,
                            isFullscreen: N,
                            className: h,
                            withShuffle: v,
                            withRepeat: m,
                        } = e,
                        {
                            sonataState: C,
                            vibe: B,
                            advert: M,
                            modals: { popoverOverPlayer: S },
                            experiments: k,
                        } = (0, r.Pjs)(),
                        I = k.checkExperiment(
                            r.zal.WebNextPlayerBarYellowButton,
                            "on",
                        ),
                        w = (0, r.zwV)(),
                        A = (0, r.eGp)(),
                        { rewindBackwards: O, rewindForward: E } = (() => {
                            let {
                                    sonataState: { entityMeta: e },
                                } = (0, r.Pjs)(),
                                t = (0, r.eGp)();
                            return {
                                rewindBackwards: (0, l.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a =
                                        t.state.playerState.progress.value
                                            .position - 15;
                                    t.setProgress(a < 0 ? 0 : a);
                                }, [e, t]),
                                rewindForward: (0, l.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = e.durationMs / 1e3,
                                        o =
                                            t.state.playerState.progress.value
                                                .position + 30;
                                    t.setProgress(o < a ? o : a);
                                }, [e, t]),
                            };
                        })(),
                        y = (0, r.rs2)(),
                        R = (0, r.brA)(),
                        T =
                            (null == _ ? void 0 : _.isNonMusic) &&
                            !M.isAdvertShown,
                        j = (0, r.PT7)(),
                        { togglePlay: L } = (0, r.B0S)({
                            seeds:
                                null !=
                                (a = null == (t = B.meta) ? void 0 : t.seeds)
                                    ? a
                                    : [],
                            pageIdForFrom: r._Q$.HOME,
                            blockIdForFrom: r.hf$.RUP_MAIN_RADIO,
                            onPlayInterrupted: S.open,
                        }),
                        F = (0, l.useMemo)(
                            () =>
                                M.isAdvertShown
                                    ? M.isAdvertPlaying
                                    : c.w.includes(C.status),
                            [C.status, M.isAdvertShown, M.isAdvertPlaying],
                        ),
                        g = (0, i.c)(() => {
                            if (M.isAdvertShown) {
                                var e;
                                null == y ||
                                    null == (e = y.audioAdvertPlayback) ||
                                    e.togglePause();
                                return;
                            }
                            _ ? null == A || A.togglePause() : L();
                        }),
                        z = (0, i.c)(() => {
                            (N && j()) || (g(), R(!F));
                        }),
                        G = (0, i.c)(() => {
                            null == A || A.moveForward();
                        }),
                        D = (0, i.c)(() => {
                            null == A || A.moveBackward();
                        }),
                        U = (0, d.useOnShuffleClick)(),
                        K = (0, u.useOnRepeatClick)(),
                        V = (0, i.c)(() => {
                            K(C);
                        }),
                        Y = (0, i.c)(() => {
                            U(C);
                        });
                    (0, l.useEffect)(() => {
                        if (
                            !N &&
                            (null == w ||
                                w.addShortcutsListener(
                                    r.Mo.MAIN,
                                    r.lbr.TOGGLE_PLAY,
                                    g,
                                ),
                            !M.isAdvertShown)
                        )
                            return (
                                null == w ||
                                    w.addShortcutsListener(
                                        r.Mo.MAIN,
                                        r.lbr.TOGGLE_REPEAT,
                                        V,
                                    ),
                                null == w ||
                                    w.addShortcutsListener(
                                        r.Mo.MAIN,
                                        r.lbr.TOGGLE_SHUFFLE,
                                        Y,
                                    ),
                                () => {
                                    null == w ||
                                        w.removeShortcutsListener(
                                            r.Mo.MAIN,
                                            r.lbr.TOGGLE_PLAY,
                                        ),
                                        M.isAdvertShown ||
                                            (null == w ||
                                                w.removeShortcutsListener(
                                                    r.Mo.MAIN,
                                                    r.lbr.TOGGLE_SHUFFLE,
                                                ),
                                            null == w ||
                                                w.removeShortcutsListener(
                                                    r.Mo.MAIN,
                                                    r.lbr.TOGGLE_REPEAT,
                                                ));
                                }
                            );
                    }, [N, g, V, Y, w, M.isAdvertShown]);
                    let q = (0, l.useMemo)(
                        () => (N ? (s ? b : P) : s ? p.K : x.Z),
                        [s, N],
                    );
                    return (0, o.jsx)(q, {
                        className: (0, n.$)(h, { [f().root]: I }),
                        disabled:
                            null === C.entityMeta || (M.isAdvertShown && !s),
                        isPlaying: F || !1,
                        canMoveBackward: C.canMoveBackward && !M.isAdvertShown,
                        canMoveForward: C.canMoveForward && !M.isAdvertShown,
                        withShuffle: v,
                        withRepeat: m,
                        canShuffle: C.canShuffle,
                        shuffle: C.shuffle,
                        onClickPlayPause: z,
                        onClickNext: G,
                        onClickPrev: D,
                        canRewind: T,
                        onRewindBackwardsClick: O,
                        onRewindForwardClick: E,
                        canChangeRepeatMode: C.canChangeRepeatMode,
                        repeatMode: C.repeatMode,
                        onRepeatClick: V,
                        onShuffleClick: Y,
                    });
                });
        },
        1199: (e, t, a) => {
            "use strict";
            a.d(t, { NotificationShuffle: () => p });
            var o = a(33008),
                n = a(85896),
                s = a(66268),
                l = a(96560),
                i = a(78016),
                r = a(77868),
                c = a(18740),
                u = a(81161),
                d = a.n(u);
            let p = (e) => {
                let { shuffle: t, closeToast: a } = e,
                    u = (0, s.useMemo)(() => {
                        let e;
                        return (
                            (e = t
                                ? (0, o.jsx)(l.A, {
                                      id: "notifications-info.shuffle-enabled",
                                  })
                                : (0, o.jsx)(l.A, {
                                      id: "notifications-info.shuffle-disabled",
                                  })),
                            (0, o.jsx)(r.Caption, {
                                className: d().message,
                                variant: "div",
                                type: "controls",
                                size: "m",
                                children: e,
                            })
                        );
                    }, [t]);
                return (0, o.jsx)(c.$W, {
                    cover: (0, o.jsx)(i.Icon, {
                        className: (0, n.$)(d().icon, { [d().icon_unset]: !t }),
                        size: "xs",
                        variant: "shuffle",
                    }),
                    message: u,
                    closeToast: a,
                    coverRadius: "s",
                });
            };
        },
        5453: (e, t, a) => {
            "use strict";
            a.d(t, { K: () => s });
            var o = a(33008),
                n = a(18740);
            let s = (e) => {
                let {
                    disabled: t,
                    isPlaying: a,
                    onClickPlayPause: s,
                    className: l,
                } = e;
                return (0, o.jsx)(n.DM, {
                    className: l,
                    size: "s",
                    iconSize: "xs",
                    disabled: t,
                    isPlaying: a,
                    onClick: s,
                });
            };
        },
        12085: (e) => {
            e.exports = {
                root: "SonataFullscreenControlsDesktop_root__ZCIGk",
                sonataButtons:
                    "SonataFullscreenControlsDesktop_sonataButtons__9y89g",
                sonataButton:
                    "SonataFullscreenControlsDesktop_sonataButton__69FFc",
                sonataPlayButton:
                    "SonataFullscreenControlsDesktop_sonataPlayButton__QXEEp",
                playPauseButtonIcon:
                    "SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX",
                playPauseButtonIcon_withYellowPlayButton:
                    "SonataFullscreenControlsDesktop_playPauseButtonIcon_withYellowPlayButton__osz8_",
                buttonContainer:
                    "SonataFullscreenControlsDesktop_buttonContainer__SpXWc",
            };
        },
        13485: (e) => {
            e.exports = { root: "SonataVideoControls_root__mHglL" };
        },
        14448: (e) => {
            e.exports = { root: "SonataControls_root__w8uqu" };
        },
        25941: (e) => {
            e.exports = {
                repeatIcon_none: "RepeatButton_repeatIcon_none__2nb1J",
                repeatIcon_context: "RepeatButton_repeatIcon_context__QwVY9",
                repeatIcon_one: "RepeatButton_repeatIcon_one___mSkU",
                repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__LwHV_",
            };
        },
        26893: (e, t, a) => {
            "use strict";
            a.d(t, { useToggleMute: () => l });
            var o = a(66268),
                n = a(42213),
                s = a(79169);
            let l = () => {
                let e = (0, s.NFA)().get(s.ooW),
                    t = (0, s.eGp)(),
                    { advert: a } = (0, s.Pjs)(),
                    l = (0, s.rs2)(),
                    i = (0, n.c)(async (o) => {
                        let { sonataState: n, volume: i, playbackId: r } = o;
                        await (null == t ? void 0 : t.setExponentVolume(i, r)),
                            e.set(s.cYZ.YmPlayerVolume, i, { expires: 365 }),
                            a.isAdvertShown &&
                                (null == l ||
                                    l.audioAdvertPlayback.setExponentVolume(i),
                                n.setVolume(i));
                    });
                return (0, o.useCallback)(
                    async (t, a, o) => {
                        if (0 !== a)
                            e.set(s.cYZ.YmPlayerPrevVolume, a, {
                                expires: 365,
                            }),
                                await i({
                                    sonataState: t,
                                    volume: 0,
                                    playbackId: o,
                                });
                        else {
                            var n;
                            let a =
                                null != (n = e.get(s.cYZ.YmPlayerPrevVolume))
                                    ? n
                                    : 1;
                            e.remove(s.cYZ.YmPlayerPrevVolume),
                                await i({
                                    sonataState: t,
                                    volume: a,
                                    playbackId: o,
                                });
                        }
                    },
                    [e, i],
                );
            };
        },
        33363: (e, t, a) => {
            "use strict";
            a.d(t, { SonataVideoControls: () => _ });
            var o = a(33008),
                n = a(85896),
                s = a(97531),
                l = a(48509),
                i = a(10663),
                r = a(42213),
                c = a(79169),
                u = a(66038),
                d = a(13485),
                p = a.n(d);
            let _ = (0, s.PA)((e) => {
                let { className: t } = e,
                    { fullscreenVideoPlayer: a, experiments: s } = (0, c.Pjs)(),
                    d = s.checkExperiment(
                        c.zal.WebNextPlayerBarYellowButton,
                        "on",
                    ),
                    _ = (0, c.eGp)(),
                    { from: f } = (0, c.fyy)({
                        pageId: c._Q$.VIDEO_PLAYER,
                        contextId: a.state.contextId,
                        contextType: l.K.Various,
                    }),
                    x = (0, r.c)(() => {
                        null == _ || _.moveForward(c.V_r.CLIP);
                    }),
                    N = (0, r.c)(() => {
                        null == _ || _.moveBackward(c.V_r.CLIP);
                    }),
                    { isPlaying: h, togglePlay: v } = (0, c.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: l.K.Various,
                                meta: { id: c.H7u.VARIOUS_CLIP_CONTEXT },
                                from: f,
                            },
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: c.V_r.CLIP,
                    });
                return (0, o.jsx)(u.Z, {
                    className: (0, n.$)(t, { [p().root]: d }),
                    isPlaying: h,
                    canMoveBackward: a.state.canMoveBackward,
                    canMoveForward: a.state.canMoveForward,
                    canShuffle: !1,
                    onClickPlayPause: v,
                    onClickNext: x,
                    onClickPrev: N,
                    canChangeRepeatMode: !1,
                    shuffle: !1,
                    repeatMode: i.pM.NONE,
                });
            });
        },
        47665: (e) => {
            e.exports = {
                root: "BaseSonataControlsDesktop_root__E6wjA",
                sonataButtons: "BaseSonataControlsDesktop_sonataButtons__7vLtw",
                sonataButton: "BaseSonataControlsDesktop_sonataButton__GbwFt",
                playButtonIcon:
                    "BaseSonataControlsDesktop_playButtonIcon__TlFqv",
                buttonContainer:
                    "BaseSonataControlsDesktop_buttonContainer__EB404",
            };
        },
        48148: (e, t, a) => {
            "use strict";
            a.d(t, { useOnRepeatClick: () => r });
            var o = a(33008),
                n = a(10663),
                s = a(42213),
                l = a(79169),
                i = a(75797);
            let r = () => {
                let { notify: e } = (0, l.lkh)(),
                    { fullscreenPlayer: t } = (0, l.Pjs)(),
                    a = (0, l.eGp)();
                return (0, s.c)((s, r) => {
                    if (null === s.entityMeta || !s.canChangeRepeatMode) return;
                    let c = n.pM.NONE;
                    switch (s.repeatMode) {
                        case n.pM.NONE:
                            c = n.pM.CONTEXT;
                            break;
                        case n.pM.CONTEXT:
                            c = n.pM.ONE;
                    }
                    null == a || a.setRepeatMode(c, r),
                        e((0, o.jsx)(i.NotificationRepeat, { repeatMode: c }), {
                            containerId: t.modal.isOpened
                                ? l.uQT.FULLSCREEN_INFO
                                : l.uQT.INFO,
                        });
                });
            };
        },
        53943: (e) => {
            e.exports = {
                icon: "NotificationRepeat_icon__WCf4_",
                message: "NotificationRepeat_message__jCngy",
                icon_unset: "NotificationRepeat_icon_unset__z2fmU",
            };
        },
        57526: (e, t, a) => {
            "use strict";
            a.d(t, { RepeatButton: () => _ });
            var o = a(33008),
                n = a(85896),
                s = a(73827),
                l = a(18064),
                i = a(10663),
                r = a(42213),
                c = a(44189),
                u = a(78016),
                d = a(25941),
                p = a.n(d);
            let _ = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: d,
                        iconClassName: _,
                        size: f = "xxxs",
                        iconSize: x = "xs",
                        color: N,
                        variant: h = "default",
                        onClick: v,
                    } = e,
                    { formatMessage: m } = (0, s.A)(),
                    C = t || a !== i.pM.ONE ? "repeat" : "repeat_one",
                    B = ((e, t, a) =>
                        t(
                            e === i.pM.NONE || a
                                ? { id: "player-actions.repeat" }
                                : e === i.pM.ONE
                                  ? { id: "player-actions.repeat-one" }
                                  : { id: "player-actions.repeat-context" },
                        ))(a, m, t),
                    M = (0, r.c)((e) => {
                        null == v || v(), e.stopPropagation();
                    });
                return (0, o.jsx)(c.Button, {
                    className: d,
                    radius: "round",
                    size: f,
                    variant: h,
                    color: N,
                    disabled: t,
                    withRipple: !1,
                    "aria-hidden": t,
                    "aria-label": B,
                    "aria-pressed": !t && a !== i.pM.NONE,
                    onClick: M,
                    icon: (0, o.jsx)(u.Icon, {
                        size: x,
                        variant: C,
                        className: (0, n.$)(
                            p().repeatIcon,
                            p()["repeatIcon_".concat(a)],
                            { [p().repeatIcon_disabled]: t },
                            _,
                        ),
                    }),
                    ...(0, l.Am)(
                        ((e, t) =>
                            e === i.pM.NONE || t
                                ? l.Kq.sonata.REPEAT_BUTTON_NO_REPEAT
                                : e === i.pM.ONE
                                  ? l.Kq.sonata.REPEAT_BUTTON_REPEAT_ONE
                                  : l.Kq.sonata.REPEAT_BUTTON_REPEAT_CONTEXT)(
                            a,
                            t,
                        ),
                    ),
                });
            };
        },
        58103: (e, t, a) => {
            "use strict";
            a.d(t, { a: () => x });
            var o = a(33008),
                n = a(85896),
                s = a(97531),
                l = a(73827),
                i = a(18064),
                r = a(42213),
                c = a(44189),
                u = a(78016),
                d = a(57526),
                p = a(67950),
                _ = a(47665),
                f = a.n(_);
            let x = (0, s.PA)((e) => {
                let {
                        className: t,
                        withShuffle: a,
                        shuffle: s,
                        canMoveBackward: _,
                        canMoveForward: x,
                        onClickNext: N,
                        onClickPrev: h,
                        withRepeat: v,
                        repeatMode: m,
                        playButton: C,
                        isDisabledShuffle: B,
                        isDisabledRepeat: M,
                        onRepeatClick: S,
                        onShuffleClick: k,
                    } = e,
                    { formatMessage: P } = (0, l.A)(),
                    I = (0, r.c)(() => {
                        N();
                    }),
                    w = (0, r.c)(() => {
                        h();
                    });
                return (0, o.jsxs)("div", {
                    className: (0, n.$)(f().root, t),
                    children: [
                        a &&
                            (0, o.jsx)("div", {
                                className: f().buttonContainer,
                                children: (0, o.jsx)(p.ShuffleButton, {
                                    className: f().sonataButton,
                                    size: "xxxs",
                                    variant: "text",
                                    iconSize: "xs",
                                    isDisabled: B,
                                    shuffle: s,
                                    onClick: k,
                                    ...(0, i.Am)(i.Kq.sonata.SHUFFLE_BUTTON),
                                }),
                            }),
                        (0, o.jsxs)("div", {
                            className: f().sonataButtons,
                            children: [
                                (0, o.jsx)(c.Button, {
                                    className: f().sonataButton,
                                    variant: "text",
                                    size: "m",
                                    radius: "round",
                                    "aria-hidden": !_,
                                    disabled: !_,
                                    withRipple: !1,
                                    "aria-label": P({
                                        id: "player-actions.previous-track",
                                    }),
                                    icon: (0, o.jsx)(u.Icon, {
                                        variant: "previous",
                                        size: "xxs",
                                    }),
                                    onClick: w,
                                    ...(0, i.Am)(
                                        i.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    ),
                                }),
                                C,
                                (0, o.jsx)(c.Button, {
                                    className: f().sonataButton,
                                    radius: "round",
                                    size: "m",
                                    variant: "text",
                                    disabled: !x,
                                    "aria-hidden": !x,
                                    withRipple: !1,
                                    "aria-label": P({
                                        id: "player-actions.next-track",
                                    }),
                                    icon: (0, o.jsx)(u.Icon, {
                                        variant: "next",
                                        size: "xxs",
                                    }),
                                    onClick: I,
                                    ...(0, i.Am)(i.Kq.sonata.NEXT_TRACK_BUTTON),
                                }),
                            ],
                        }),
                        v &&
                            (0, o.jsx)("div", {
                                className: f().buttonContainer,
                                children: (0, o.jsx)(d.RepeatButton, {
                                    className: f().sonataButton,
                                    size: "xxxs",
                                    variant: "text",
                                    isDisabled: M,
                                    iconSize: "xs",
                                    repeatMode: m,
                                    onClick: S,
                                }),
                            }),
                    ],
                });
            });
        },
        61646: (e, t, a) => {
            "use strict";
            a.d(t, { PromoLandingSonataControls: () => m });
            var o = a(33008),
                n = a(97531),
                s = a(66268),
                l = a(42213),
                i = a(42314),
                r = a(79169),
                c = a(68342),
                u = a(48148),
                d = a(73904),
                p = a(5453),
                _ = a(85896),
                f = a(18740),
                x = a(58103),
                N = a(47665),
                h = a.n(N);
            let v = (0, n.PA)((e) => {
                    let {
                            className: t,
                            disabled: a,
                            isPlaying: n,
                            canChangeRepeatMode: s,
                            canMoveBackward: l,
                            canMoveForward: i,
                            canShuffle: c,
                            shuffle: u,
                            onClickNext: d,
                            onClickPlayPause: p,
                            onClickPrev: N,
                            repeatMode: v,
                            onRepeatClick: m,
                            onShuffleClick: C,
                        } = e,
                        { experiments: B } = (0, r.Pjs)(),
                        M = B.checkExperiment(
                            r.zal.WebNextPlayerBarYellowButton,
                            "on",
                        );
                    return (0, o.jsx)(x.a, {
                        onShuffleClick: C,
                        onRepeatClick: m,
                        isDisabledRepeat: !s || a,
                        isDisabledShuffle: !c || a,
                        withShuffle: a || c,
                        shuffle: u,
                        canMoveBackward: l,
                        canMoveForward: i,
                        onClickNext: d,
                        onClickPrev: N,
                        withRepeat: a || s,
                        repeatMode: v,
                        className: t,
                        playButton: (0, o.jsx)(f.DM, {
                            className: h().sonataButton,
                            iconSize: "l",
                            variant: "filled",
                            isPlaying: n,
                            iconClassName: (0, _.$)(h().playButtonIcon, {
                                [h().playButtonIcon_withYellowPlayButton]: M,
                            }),
                            onClick: p,
                        }),
                    });
                }),
                m = (0, n.PA)((e) => {
                    let { className: t, isMobile: a, entityMeta: n } = e,
                        {
                            promolanding: { state: _ },
                        } = (0, r.Pjs)(),
                        f = (0, r.eGp)(),
                        x = (0, r.brA)(),
                        N = (0, u.useOnRepeatClick)(),
                        h = (0, d.useOnShuffleClick)(),
                        m = (0, r.zwV)(),
                        C = c.w.includes(_.status),
                        B = (0, l.c)(() => {
                            n &&
                                (null == f ||
                                    f.togglePause(r.V_r.PROMO_LANDING),
                                x(!C));
                        }),
                        M = (0, l.c)(() => {
                            null == f || f.moveForward(r.V_r.PROMO_LANDING);
                        }),
                        S = (0, l.c)(() => {
                            null == f || f.moveBackward(r.V_r.PROMO_LANDING);
                        }),
                        k = (0, l.c)(() => {
                            N(_, r.V_r.PROMO_LANDING);
                        }),
                        P = (0, l.c)(() => {
                            h(_, r.V_r.PROMO_LANDING);
                        });
                    (0, s.useEffect)(
                        () => (
                            null == m ||
                                m.addShortcutsListener(
                                    r.Mo.PROMO_LANDING,
                                    r.lbr.TOGGLE_PLAY,
                                    B,
                                ),
                            null == m ||
                                m.addShortcutsListener(
                                    r.Mo.PROMO_LANDING,
                                    r.lbr.TOGGLE_REPEAT,
                                    k,
                                ),
                            null == m ||
                                m.addShortcutsListener(
                                    r.Mo.PROMO_LANDING,
                                    r.lbr.TOGGLE_SHUFFLE,
                                    P,
                                ),
                            () => {
                                null == m ||
                                    m.removeShortcutsListener(
                                        r.Mo.PROMO_LANDING,
                                        r.lbr.TOGGLE_PLAY,
                                    ),
                                    null == m ||
                                        m.removeShortcutsListener(
                                            r.Mo.PROMO_LANDING,
                                            r.lbr.TOGGLE_SHUFFLE,
                                        ),
                                    null == m ||
                                        m.removeShortcutsListener(
                                            r.Mo.PROMO_LANDING,
                                            r.lbr.TOGGLE_REPEAT,
                                        );
                            }
                        ),
                        [B, k, P, m],
                    );
                    let I = (0, i.L)(() => (a ? p.K : v));
                    return (0, o.jsx)(I, {
                        onRepeatClick: k,
                        onShuffleClick: P,
                        className: t,
                        disabled: !n,
                        isPlaying: !!C,
                        canMoveBackward: _.canMoveBackward,
                        canMoveForward: _.canMoveForward,
                        canShuffle: _.canShuffle,
                        shuffle: _.shuffle,
                        onClickPlayPause: B,
                        onClickNext: M,
                        onClickPrev: S,
                        canChangeRepeatMode: _.canChangeRepeatMode,
                        repeatMode: _.repeatMode,
                    });
                });
        },
        66038: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => N });
            var o = a(33008),
                n = a(97531),
                s = a(66268),
                l = a(42213),
                i = a(42314),
                r = a(79169),
                c = a(18740),
                u = a(48509),
                d = a(53555),
                p = a(58103),
                _ = a(47665),
                f = a.n(_);
            let x = { mainAxis: 44 },
                N = (0, n.PA)((e) => {
                    let {
                            disabled: t,
                            isPlaying: a,
                            repeatMode: n,
                            canMoveForward: _,
                            canMoveBackward: N,
                            canShuffle: h,
                            shuffle: v,
                            onClickNext: m,
                            onClickPrev: C,
                            onClickPlayPause: B,
                            canChangeRepeatMode: M,
                            className: S,
                            withShuffle: k,
                            withRepeat: P,
                            onRepeatClick: I,
                            onShuffleClick: w,
                        } = e,
                        {
                            advert: A,
                            modals: { popoverOverPlayer: O },
                            paymentWidgetModal: b,
                            user: E,
                        } = (0, r.Pjs)(),
                        { isFreemium: y, hasFreeUserAccess: R } = (0, r.XCI)();
                    (() => {
                        let {
                                sonataState: e,
                                modals: { popoverOverPlayer: t },
                                user: a,
                            } = (0, r.Pjs)(),
                            { isPassToProduct: o } = (0, r.XCI)(),
                            n = (0, r.eGp)(),
                            l = e.contextType === u.K.Generative;
                        (0, s.useEffect)(() => {
                            if ((a.isAuthorized && !o) || l) return;
                            let e =
                                null == n
                                    ? void 0
                                    : n.state.playerState.event.onChange(
                                          (e) => {
                                              e === d.Iu.PLAYING && t.open();
                                          },
                                      );
                            return () => {
                                null == e || e();
                            };
                        }, [n, t, l, o, a.isAuthorized]);
                    })();
                    let T = (0, s.useCallback)(
                            () =>
                                (0, o.jsx)(c.DM, {
                                    className: f().sonataButton,
                                    iconSize: "l",
                                    variant: "filled",
                                    isPlaying: a,
                                    iconClassName: f().playButtonIcon,
                                    onClick: B,
                                }),
                            [a, B],
                        ),
                        j = (0, l.c)((e) => {
                            e || O.close();
                        }),
                        L = (0, i.L)(() => {
                            let e = y && E.isAuthorized ? "vibe" : "fullTracks";
                            return E.isAuthorized
                                ? b.modal.isOpened
                                    ? T()
                                    : (0, o.jsx)(c.SU, {
                                          isEnabled: R,
                                          isOpened: O.isOpened,
                                          placement: "top",
                                          onOpenChange: j,
                                          offsetOptions: x,
                                          textVariant: e,
                                          renderChildren: T,
                                      })
                                : (0, o.jsx)(c.Zr, {
                                      isEnabled: !0,
                                      isOpened: O.isOpened,
                                      placement: "top",
                                      onOpenChange: j,
                                      offsetOptions: x,
                                      textVariant: e,
                                      renderChildren: T,
                                  });
                        });
                    return (0, o.jsx)(p.a, {
                        isDisabledRepeat: !M || t,
                        isDisabledShuffle: !h || t,
                        withShuffle:
                            ((t || h) &&
                                !(null == A ? void 0 : A.isAdvertShown)) ||
                            !!k,
                        shuffle: v,
                        canMoveBackward: N,
                        canMoveForward: _,
                        onClickNext: m,
                        onClickPrev: C,
                        withRepeat:
                            ((t || M) &&
                                !(null == A ? void 0 : A.isAdvertShown)) ||
                            !!P,
                        repeatMode: n,
                        className: S,
                        playButton: L,
                        onRepeatClick: I,
                        onShuffleClick: w,
                    });
                });
        },
        67950: (e, t, a) => {
            "use strict";
            a.d(t, { ShuffleButton: () => p });
            var o = a(33008),
                n = a(85896),
                s = a(73827),
                l = a(18064),
                i = a(42213),
                r = a(44189),
                c = a(78016),
                u = a(96041),
                d = a.n(u);
            let p = (e) => {
                let {
                        isDisabled: t,
                        shuffle: a,
                        className: u,
                        size: p = "xxxs",
                        variant: _ = "default",
                        iconSize: f = "xs",
                        color: x,
                        onClick: N,
                    } = e,
                    { formatMessage: h } = (0, s.A)(),
                    v = (0, i.c)((e) => {
                        null == N || N(), e.stopPropagation();
                    });
                return (0, o.jsx)(r.Button, {
                    className: u,
                    radius: "round",
                    size: p,
                    variant: _,
                    color: x,
                    withRipple: !1,
                    disabled: t,
                    "aria-label": h({ id: "player-actions.shuffle" }),
                    "aria-pressed": !t && a,
                    "aria-hidden": t,
                    icon: (0, o.jsx)(c.Icon, {
                        variant: "shuffle",
                        size: f,
                        className: (0, n.$)(d().shuffleIcon, {
                            [d().shuffleIcon_disabled]: t,
                            [d().shuffleIcon_on]: !t && a,
                            [d().shuffleIcon_off]: !t && !a,
                        }),
                    }),
                    onClick: v,
                    ...(0, l.Am)(
                        !a || t
                            ? l.Kq.sonata.SHUFFLE_BUTTON
                            : l.Kq.sonata.SHUFFLE_BUTTON_ON,
                    ),
                });
            };
        },
        68342: (e, t, a) => {
            "use strict";
            a.d(t, { w: () => n });
            var o = a(53555);
            let n = [o.MT.PLAYING, o.MT.LOADING_MEDIA_SOURCE, o.MT.BUFFERING];
        },
        73904: (e, t, a) => {
            "use strict";
            a.d(t, { useOnShuffleClick: () => i });
            var o = a(33008),
                n = a(42213),
                s = a(79169),
                l = a(1199);
            let i = () => {
                let { notify: e } = (0, s.lkh)(),
                    { fullscreenPlayer: t } = (0, s.Pjs)(),
                    a = (0, s.eGp)();
                return (0, n.c)((n, i) => {
                    null !== n.entityMeta &&
                        n.canShuffle &&
                        (null == a || a.toggleShuffle(i),
                        e(
                            (0, o.jsx)(l.NotificationShuffle, {
                                shuffle: !!(null == a
                                    ? void 0
                                    : a.getState(i).queueState.shuffle.value),
                            }),
                            {
                                containerId: t.modal.isOpened
                                    ? s.uQT.FULLSCREEN_INFO
                                    : s.uQT.INFO,
                            },
                        ));
                });
            };
        },
        75797: (e, t, a) => {
            "use strict";
            a.d(t, { NotificationRepeat: () => _ });
            var o = a(33008),
                n = a(85896),
                s = a(66268),
                l = a(96560),
                i = a(10663),
                r = a(78016),
                c = a(77868),
                u = a(18740),
                d = a(53943),
                p = a.n(d);
            let _ = (e) => {
                let { repeatMode: t, closeToast: a } = e,
                    d = t === i.pM.ONE ? "repeat_one" : "repeat",
                    _ = (0, s.useMemo)(() => {
                        let e;
                        switch (t) {
                            case i.pM.CONTEXT:
                                e = (0, o.jsx)(l.A, {
                                    id: "notifications-info.change-repeat-context",
                                });
                                break;
                            case i.pM.ONE:
                                e = (0, o.jsx)(l.A, {
                                    id: "notifications-info.change-repeat-track",
                                });
                                break;
                            case i.pM.NONE:
                            default:
                                e = (0, o.jsx)(l.A, {
                                    id: "notifications-info.change-repeat-none",
                                });
                        }
                        return (0, o.jsx)(c.Caption, {
                            className: p().message,
                            variant: "div",
                            type: "controls",
                            size: "m",
                            children: e,
                        });
                    }, [t]);
                return (0, o.jsx)(u.$W, {
                    cover: (0, o.jsx)(r.Icon, {
                        className: (0, n.$)(p().icon, {
                            [p().icon_unset]: t === i.pM.NONE,
                        }),
                        size: "xs",
                        variant: d,
                    }),
                    message: _,
                    closeToast: a,
                    coverRadius: "s",
                });
            };
        },
        79665: (e) => {
            e.exports = {
                root: "SonataFullscreenControlsMobile_root__H6MQ7",
                sonataButtons:
                    "SonataFullscreenControlsMobile_sonataButtons__hLf19",
                sonataButton:
                    "SonataFullscreenControlsMobile_sonataButton__UGQ_U",
                playPauseButtonIcon:
                    "SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU",
                buttonContainer:
                    "SonataFullscreenControlsMobile_buttonContainer__5ITqM",
            };
        },
        81161: (e) => {
            e.exports = {
                icon: "NotificationShuffle_icon__U_ape",
                message: "NotificationShuffle_message__BNxJm",
                icon_unset: "NotificationShuffle_icon_unset__y1jg_",
            };
        },
        96041: (e) => {
            e.exports = {
                shuffleIcon_off: "ShuffleButton_shuffleIcon_off___oqrr",
                shuffleIcon_on: "ShuffleButton_shuffleIcon_on__qFJqV",
                shuffleIcon_disabled:
                    "ShuffleButton_shuffleIcon_disabled__fQsOo",
            };
        },
    },
]);
