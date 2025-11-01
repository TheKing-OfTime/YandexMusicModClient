(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3761],
    {
        1838: (e) => {
            e.exports = {
                root: 'EqualizerSlider_root__oyr_3',
                container: 'EqualizerSlider_container__J9Te7',
                slider: 'EqualizerSlider_slider__YC0_X',
                important: 'EqualizerSlider_important____ilL',
                serif: 'EqualizerSlider_serif__CJgYC',
                label: 'EqualizerSlider_label__4wtBj',
                label_disabled: 'EqualizerSlider_label_disabled___26v5',
            };
        },
        10740: (e) => {
            e.exports = {
                root: 'EqualizerPresets_root__b2gp7',
                buttonIcon: 'EqualizerPresets_buttonIcon__DgPG8',
                buttonText: 'EqualizerPresets_buttonText__cy2_S',
                button: 'EqualizerPresets_button__D8s_l',
                button_disabled: 'EqualizerPresets_button_disabled__BcN1s',
                container: 'EqualizerPresets_container__ABVY8',
            };
        },
        73427: (e) => {
            e.exports = {
                header: 'Equalizer_header__oL2Ii',
                modal: 'Equalizer_modal__yW0lz',
                modalHeader: 'Equalizer_modalHeader__BaeWi',
                modalContent: 'Equalizer_modalContent__xbClm',
                title: 'Equalizer_title__oP3e2',
                frequencies: 'Equalizer_frequencies__M9bt3',
                label: 'Equalizer_label__cAYfh',
                equalizer: 'Equalizer_equalizer__M9Utp',
                equalizer_disabled: 'Equalizer_equalizer_disabled__NciRX',
                equalizer_enter: 'Equalizer_equalizer_enter___0_xp',
                equalizer_enter_active: 'Equalizer_equalizer_enter_active__hRAgb',
                'enter-collapse': 'Equalizer_enter-collapse__Ypuhz',
                equalizer_exit: 'Equalizer_equalizer_exit__wroQI',
                equalizer_exit_active: 'Equalizer_equalizer_exit_active__68Faq',
                'exit-collapse': 'Equalizer_exit-collapse____a2I',
                preamp: 'Equalizer_preamp__hfuqj',
                container: 'Equalizer_container__wK7dV',
                labels: 'Equalizer_labels__rE8Hc',
            };
        },
        73761: (e, a, l) => {
            'use strict';
            l.d(a, {
                rk: () => D,
                iV: () => i,
                MZ: () => I,
                ML: () => k,
                Sq: () => s,
            });
            var r,
                u = l(38230),
                t = l(66268);
            let i = (0, t.createContext)(null),
                s = () => {
                    let e = (0, t.useContext)(i);
                    if (!e) throw new u.t('Equalizer cannot be null, please add a context provider', { code: 'E_CONTEXT_EQUALIZER_NULL' });
                    return e;
                };
            var n = l(29318),
                o = l(41028);
            !(function (e) {
                (e.CUSTOM = 'CUSTOM'),
                    (e.DEFAULT = 'DEFAULT'),
                    (e.CLASSICAL = 'CLASSICAL'),
                    (e.CLUB = 'CLUB'),
                    (e.DANCE = 'DANCE'),
                    (e.BASS_BOOST = 'BASS_BOOST'),
                    (e.BASS_AND_TREBLE_BOOST = 'BASS_AND_TREBLE_BOOST'),
                    (e.TREBLE_BOOST = 'TREBLE_BOOST'),
                    (e.SPEAKERS = 'SPEAKERS'),
                    (e.LARGE_HALL = 'LARGE_HALL'),
                    (e.CONCERT = 'CONCERT'),
                    (e.PARTY = 'PARTY'),
                    (e.POP = 'POP'),
                    (e.REGGAE = 'REGGAE'),
                    (e.ROCK = 'ROCK'),
                    (e.SKA = 'SKA'),
                    (e.SOFT = 'SOFT'),
                    (e.SOFT_ROCK = 'SOFT_ROCK'),
                    (e.TECHNO = 'TECHNO');
            })(r || (r = {}));
            let v = {
                [r.CUSTOM]: {
                    id: r.CUSTOM,
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
                [r.DEFAULT]: {
                    id: r.DEFAULT,
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
                [r.CLASSICAL]: {
                    id: r.CLASSICAL,
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
                [r.CLUB]: {
                    id: r.CLUB,
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
                [r.DANCE]: {
                    id: r.DANCE,
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
                [r.BASS_BOOST]: {
                    id: r.BASS_BOOST,
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
                [r.BASS_AND_TREBLE_BOOST]: {
                    id: r.BASS_AND_TREBLE_BOOST,
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
                [r.TREBLE_BOOST]: {
                    id: r.TREBLE_BOOST,
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
                [r.SPEAKERS]: {
                    id: r.SPEAKERS,
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
                [r.LARGE_HALL]: {
                    id: r.LARGE_HALL,
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
                [r.CONCERT]: {
                    id: r.CONCERT,
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
                [r.PARTY]: {
                    id: r.PARTY,
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
                [r.POP]: {
                    id: r.POP,
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
                [r.REGGAE]: {
                    id: r.REGGAE,
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
                [r.ROCK]: {
                    id: r.ROCK,
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
                [r.SKA]: {
                    id: r.SKA,
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
                [r.SOFT]: {
                    id: r.SOFT,
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
                [r.SOFT_ROCK]: {
                    id: r.SOFT_ROCK,
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
                [r.TECHNO]: {
                    id: r.TECHNO,
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
            var d = l(79169),
                c = l(59615);
            let y = o.gK.model('EqualizerFrequency', {
                    key: o.gK.number,
                    value: o.gK.number,
                }),
                _ = o.gK
                    .model('EqualizerPreset', {
                        id: o.gK.enumeration(Object.values(r)),
                        preamp: o.gK.number,
                        frequencies: o.gK.array(y),
                    })
                    .actions((e) => ({
                        setPreamp(a) {
                            e.preamp = a;
                        },
                        setAmp(a, l) {
                            e.frequencies.forEach((e) => {
                                e.key === a && (e.value = l);
                            });
                        },
                    })),
                k = o.gK
                    .model('Equalizer', {
                        modal: c.qt,
                        isAvailable: o.gK.optional(o.gK.boolean, !1),
                        isEnabled: o.gK.boolean,
                        currentPreset: o.gK.optional(_, v[r.DEFAULT]),
                        customPreset: o.gK.optional(_, v[r.CUSTOM]),
                    })
                    .actions((e) => ({
                        setIsAvailable(a) {
                            e.isAvailable = a;
                        },
                        setEnabled(a) {
                            let { localStorage: l } = (0, o._$)(e);
                            e.isEnabled = a;
                            let r = l.get(d.cYZ.EqualizerConfig);
                            l.set(d.cYZ.EqualizerConfig, {
                                ...r,
                                isEnabled: a,
                                version: '6',
                            });
                        },
                        loadPresets() {
                            let { localStorage: a } = (0, o._$)(e),
                                l = a.get(d.cYZ.EqualizerConfig);
                            if (
                                ((null == l ? void 0 : l.version) !== '6' && (a.remove(d.cYZ.EqualizerConfig), (l = null)),
                                l && ((e.isEnabled = l.isEnabled), l.customPreset && (e.customPreset = (0, o.wg)(l.customPreset)), l.lastPresetId))
                            ) {
                                if (l.lastPresetId === r.CUSTOM) {
                                    e.currentPreset = (0, o.o8)(e.customPreset);
                                    return;
                                }
                                let a = v[l.lastPresetId];
                                e.currentPreset = _.create(a);
                            }
                        },
                        changeCurrentPreset(a) {
                            let { localStorage: l } = (0, o._$)(e),
                                u = l.get(d.cYZ.EqualizerConfig);
                            if (
                                (l.set(d.cYZ.EqualizerConfig, {
                                    ...u,
                                    lastPresetId: a,
                                    version: '6',
                                }),
                                a === r.CUSTOM)
                            ) {
                                e.currentPreset = (0, o.o8)(e.customPreset);
                                return;
                            }
                            let t = v[a];
                            e.currentPreset = _.create(t);
                        },
                        changePreamp(a) {
                            let { localStorage: l } = (0, o._$)(e),
                                u = (0, o.dV)(e.currentPreset);
                            (e.customPreset = (0, o.wg)({
                                ...u,
                                id: r.CUSTOM,
                            })),
                                e.customPreset.setPreamp(a),
                                (e.currentPreset = (0, o.o8)(e.customPreset));
                            let t = l.get(d.cYZ.EqualizerConfig);
                            l.set(d.cYZ.EqualizerConfig, {
                                ...t,
                                customPreset: (0, n.HO)(e.customPreset),
                                lastPresetId: r.CUSTOM,
                                version: '6',
                            });
                        },
                        changeAmp(a, l) {
                            let { localStorage: u } = (0, o._$)(e),
                                t = (0, o.dV)(e.currentPreset);
                            (e.customPreset = (0, o.wg)({
                                ...t,
                                id: r.CUSTOM,
                            })),
                                e.customPreset.setAmp(a, l),
                                (e.currentPreset = (0, o.o8)(e.customPreset));
                            let i = u.get(d.cYZ.EqualizerConfig);
                            u.set(d.cYZ.EqualizerConfig, {
                                ...i,
                                customPreset: (0, n.HO)(e.customPreset),
                                lastPresetId: r.CUSTOM,
                                version: '6',
                            });
                        },
                    }));
            var E = l(33008),
                m = l(85896),
                p = l(97531),
                A = l(73827),
                q = l(95273),
                b = l(18064),
                S = l(76469),
                z = l(77868),
                f = l(73427),
                C = l.n(f),
                O = l(96560),
                x = l(44189),
                T = l(89492),
                P = l(78016),
                h = l(10740),
                R = l.n(h);
            let L = {
                    [r.DEFAULT]: (0, E.jsx)(O.A, {
                        id: 'equalizer.default-preset',
                    }),
                    [r.CUSTOM]: (0, E.jsx)(O.A, {
                        id: 'equalizer.custom-preset',
                    }),
                    [r.CLASSICAL]: (0, E.jsx)(O.A, {
                        id: 'equalizer.classical-preset',
                    }),
                    [r.CLUB]: (0, E.jsx)(O.A, { id: 'equalizer.club-preset' }),
                    [r.DANCE]: (0, E.jsx)(O.A, {
                        id: 'equalizer.dance-preset',
                    }),
                    [r.BASS_BOOST]: (0, E.jsx)(O.A, {
                        id: 'equalizer.bass-boost-preset',
                    }),
                    [r.BASS_AND_TREBLE_BOOST]: (0, E.jsx)(O.A, {
                        id: 'equalizer.bass-and-treble-boost-preset',
                    }),
                    [r.TREBLE_BOOST]: (0, E.jsx)(O.A, {
                        id: 'equalizer.treble-boost-preset',
                    }),
                    [r.SPEAKERS]: (0, E.jsx)(O.A, {
                        id: 'equalizer.speakers-preset',
                    }),
                    [r.LARGE_HALL]: (0, E.jsx)(O.A, {
                        id: 'equalizer.large-hall-preset',
                    }),
                    [r.CONCERT]: (0, E.jsx)(O.A, {
                        id: 'equalizer.concert-preset',
                    }),
                    [r.PARTY]: (0, E.jsx)(O.A, {
                        id: 'equalizer.party-preset',
                    }),
                    [r.POP]: (0, E.jsx)(O.A, { id: 'equalizer.pop-preset' }),
                    [r.REGGAE]: (0, E.jsx)(O.A, {
                        id: 'equalizer.reggae-preset',
                    }),
                    [r.ROCK]: (0, E.jsx)(O.A, { id: 'equalizer.rock-preset' }),
                    [r.SKA]: (0, E.jsx)(O.A, { id: 'equalizer.ska-preset' }),
                    [r.SOFT]: (0, E.jsx)(O.A, { id: 'equalizer.soft-preset' }),
                    [r.SOFT_ROCK]: (0, E.jsx)(O.A, {
                        id: 'equalizer.soft-rock-preset',
                    }),
                    [r.TECHNO]: (0, E.jsx)(O.A, {
                        id: 'equalizer.techno-preset',
                    }),
                },
                g = (0, p.PA)((e) => {
                    let { isDisabled: a } = e,
                        l = s(),
                        u = (0, t.useCallback)(
                            (e) => {
                                l.changeCurrentPreset(e.id);
                            },
                            [l],
                        );
                    return (0, E.jsx)(T.ms, {
                        isDisabled: a,
                        className: R().root,
                        onSelect: u,
                        reference: (0, E.jsxs)(x.Button, {
                            radius: 'xxxl',
                            className: (0, m.$)(R().button, {
                                [R().button_disabled]: a,
                            }),
                            ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_PRESETS_BUTTON),
                            children: [
                                (0, E.jsx)(z.Caption, {
                                    className: R().buttonText,
                                    variant: 'span',
                                    size: 's',
                                    weight: 'medium',
                                    children: L[l.currentPreset.id],
                                }),
                                (0, E.jsx)(P.Icon, {
                                    className: R().buttonIcon,
                                    size: 'xxs',
                                    variant: 'arrowDown',
                                }),
                            ],
                        }),
                        placement: 'top',
                        offsetOptions: -40,
                        defaultValue: l.currentPreset.id,
                        containerClassName: R().container,
                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_PRESETS_DROPDOWN),
                        children: Object.values(r).map((e) => (0, E.jsx)(T.c$, { id: e, label: L[e] }, e)),
                    });
                });
            var N = l(98316),
                j = l(1838),
                Tooltip = l(18740),
                B = l.n(j);
            let K = (e) => {
                    let { minValue: a, maxValue: l, className: r, label: u, isDisabled: t, onChange: i, value: s, ...n } = e;
                    return (0, E.jsxs)('div', {
                        className: (0, m.$)(B().root, r),
                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_SLIDER_CONTAINER),
                        children: [
                            (0, E.jsxs)('div', {
                                className: B().container,
                                children: [
                                    (0, E.jsx)('div', { className: B().serif }),
                                    (0, E.jsx)(N.A, {
                                        disabled: t,
                                        className: (0, m.$)(B().slider, B().important),
                                        thumbSize: 'm',
                                        trackSize: 'xxs',
                                        onChange: i,
                                        value: s,
                                        showThumbVariant: 'always',
                                        step: 0.1,
                                        min: a,
                                        max: l,
                                        ...n,
                                    }),
                                ],
                            }),
                            (0, E.jsx)(z.Caption, {
                                'aria-hidden': !0,
                                className: (0, m.$)(B().label, {
                                    [B().label_disabled]: t,
                                }),
                                variant: 'div',
                                weight: 'normal',
                                size: 'xs',
                                children: u,
                            }),
                        ],
                    });
                },
                U = {
                    enter: C().equalizer_enter,
                    enterActive: C().equalizer_enter_active,
                    exit: C().equalizer_exit,
                    exitActive: C().equalizer_exit_active,
                },
                D = (0, p.PA)((e) => {
                    let { title: a, className: l, isExpanded: r, isDisabled: u } = e,
                        i = (0, t.useRef)(null),
                        { formatMessage: n } = (0, A.A)(),
                        o = s(),
                        v = o.isEnabled ? n({ id: 'equalizer.disable-equalizer' }) : n({ id: 'equalizer.enable-equalizer' }),
                        d = (0, t.useCallback)(
                            (e) => {
                                o.setEnabled(e);
                            },
                            [o],
                        ),
                        c = (0, t.useCallback)(
                            (e) => (a) => {
                                o.changeAmp(e, a);
                            },
                            [o],
                        ),
                        y = (0, t.useCallback)(
                            (e) => {
                                o.changePreamp(e);
                            },
                            [o],
                        );
                    return (0, E.jsxs)('div', {
                        className: (0, m.$)(C().root, l),
                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_CONTAINER),
                        children: [
                            (0, E.jsxs)('div', {
                                className: C().header,
                                children: [
                                    (0, E.jsx)(z.Caption, {
                                        className: C().title,
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_TITLE),
                                        children: a,
                                    }),
                                    (0, E.jsx)(S.l, {
                                        'aria-label': v,
                                        isChecked: o.isEnabled,
                                        onChange: d,
                                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_TOGGLE),
                                    }),
                                ],
                            }),
                            (0, E.jsx)(q.A, {
                                in: r,
                                nodeRef: i,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: U,
                                children: (0, E.jsxs)('div', {
                                    ref: i,
                                    className: (0, m.$)(C().equalizer, {
                                        [C().equalizer_disabled]: u,
                                    }),
                                    ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_FREQUENCIES_CONTAINER),
                                    children: [
                                        (0, E.jsxs)('div', {
                                            className: C().container,
                                            children: [
                                                (0, E.jsxs)('div', {
                                                    className: C().preamp,
                                                    children: [
                                                        (0, E.jsx)(Tooltip.hj, {
                                                            title: `${(o.currentPreset.preamp ?? 0).toFixed(1)}`,
                                                            children: (0, E.jsxs)('div', {
                                                                onWheel: (e) => {
                                                                    const delta = (e.deltaY / 1000) * -1;
                                                                    if (!o.currentPreset.preamp) return;
                                                                    let value = (parseFloat(o.currentPreset.preamp) + parseFloat(delta)).toFixed(1);
                                                                    y(Math.min(Math.max(value, 0.5), 1.5));
                                                                },
                                                                children: (0, E.jsx)(K, {
                                                                    isDisabled: u,
                                                                    minValue: 0.5,
                                                                    maxValue: 1.5,
                                                                    value: o.currentPreset.preamp,
                                                                    onChange: y,
                                                                    label: n({
                                                                        id: 'equalizer.preamp-level',
                                                                    }),
                                                                    'aria-label': n({
                                                                        id: 'equalizer.slider-preamp-label',
                                                                    }),
                                                                    ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_PREAMP_SLIDER),
                                                                }),
                                                            }),
                                                        }),
                                                        (0, E.jsxs)('div', {
                                                            className: C().labels,
                                                            'aria-hidden': !0,
                                                            children: [
                                                                (0, E.jsx)(z.Caption, {
                                                                    className: C().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: n(
                                                                        {
                                                                            id: 'equalizer.amp-label',
                                                                        },
                                                                        {
                                                                            value: 12,
                                                                        },
                                                                    ),
                                                                }),
                                                                (0, E.jsx)(z.Caption, {
                                                                    className: C().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: n(
                                                                        {
                                                                            id: 'equalizer.amp-label',
                                                                        },
                                                                        {
                                                                            value: 0,
                                                                        },
                                                                    ),
                                                                }),
                                                                (0, E.jsx)(z.Caption, {
                                                                    className: C().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: n(
                                                                        {
                                                                            id: 'equalizer.amp-label',
                                                                        },
                                                                        {
                                                                            value: -12,
                                                                        },
                                                                    ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, E.jsx)('div', {
                                                    className: C().frequencies,
                                                    children: o.currentPreset.frequencies.map((e) => {
                                                        let a = ((e, a) =>
                                                                e < 1e3
                                                                    ? e.toString()
                                                                    : a(
                                                                          {
                                                                              id: 'equalizer.frequency-label',
                                                                          },
                                                                          {
                                                                              value: (e / 1e3).toFixed(0),
                                                                          },
                                                                      ))(e.key, n),
                                                            l = Math.round(10 * e.value) / 10;
                                                        return (0, E.jsx)(Tooltip.hj, {
                                                            title: `${(l ?? 0).toFixed(1)} dB`,
                                                            children: (0, E.jsx)('div', {
                                                                onWheel: (evt) => {
                                                                    const delta = (evt.deltaY / 1000) * -1;
                                                                    if (l === undefined) return;
                                                                    let value = (parseFloat(l) + parseFloat(delta)).toFixed(1);
                                                                    c(e.key)(Math.min(Math.max(value, -12), 12));
                                                                },
                                                                children: (0, E.jsx)(
                                                                    K,
                                                                    {
                                                                        isDisabled: u,
                                                                        minValue: -12,
                                                                        maxValue: 12,
                                                                        value: e.value,
                                                                        label: a,
                                                                        onChange: c(e.key),
                                                                        'aria-label': n(
                                                                            {
                                                                                id: 'equalizer.slider-frequency-label',
                                                                            },
                                                                            {
                                                                                label: a,
                                                                                value: l,
                                                                            },
                                                                        ),
                                                                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_FREQUENCY_SLIDER),
                                                                    },
                                                                    a,
                                                                ),
                                                            }),
                                                        });
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)(g, { isDisabled: u }),
                                    ],
                                }),
                            }),
                        ],
                    });
                });
            var M = l(51704);
            let I = (0, p.PA)(() => {
                let { formatMessage: e } = (0, A.A)(),
                    a = s();
                return (0, E.jsx)(M.a, {
                    className: C().modal,
                    headerClassName: C().modalHeader,
                    contentClassName: C().modalContent,
                    title: e({ id: 'equalizer.title' }),
                    open: a.modal.isOpened,
                    onOpenChange: a.modal.onOpenChange,
                    onClose: a.modal.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    closeButtonProps: (0, b.Am)(b.Kq.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON),
                    ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_MODAL),
                    children: (0, E.jsx)(D, {
                        title: e({ id: 'equalizer.enable' }),
                        isExpanded: !0,
                        isDisabled: !a.isEnabled,
                    }),
                });
            });
        },
        98316: (e, a, l) => {
            'use strict';
            l.d(a, { A: () => o });
            var r,
                u = l(66268),
                t = {
                    5881: (e, a, l) => {
                        function r() {
                            for (var e, a, l = 0, r = ''; l < arguments.length; )
                                (e = arguments[l++]) &&
                                    (a = (function e(a) {
                                        var l,
                                            r,
                                            u = '';
                                        if ('string' == typeof a || 'number' == typeof a) u += a;
                                        else if ('object' == typeof a)
                                            if (Array.isArray(a)) for (l = 0; l < a.length; l++) a[l] && (r = e(a[l])) && (u && (u += ' '), (u += r));
                                            else for (l in a) a[l] && (u && (u += ' '), (u += l));
                                        return u;
                                    })(e)) &&
                                    (r && (r += ' '), (r += a));
                            return r;
                        }
                        l.r(a), l.d(a, { clsx: () => r, default: () => u });
                        let u = r;
                    },
                    4525: (e, a, l) => {
                        l.r(a), l.d(a, { default: () => r });
                        let r = {
                            root: 'JkKcxRVvjK7lcakkEliC',
                            root_alwaysThumb: 'cOKDtLfDZAuPXftfS2WM',
                            root_trackSize_xxs: 'd6VuG0HnwpGO47uPjPeb',
                            root_trackSize_xs: 'IB_XOYAyYPK4aszY9R1F',
                            root_trackSize_s: 'SHvrm0VRiLVwGqJJjNO8',
                            root_thumbSize_xs: 'BlvJwKLYTicnbJ3Qyuou',
                            root_neverThumb: 'dDJBVBTkzY5zY7vtSbyr',
                            root_thumbSize_s: 'qpvIbN4_hF6CqK0bjCq7',
                            root_thumbSize_m: 'P8_ABi1YnAOS8p8EY87f',
                            root_thumbSize_l: 'D21lBltSEiwHAaG39z6x',
                        };
                    },
                    7327: (e, a) => {
                        var l = Symbol.for('react.transitional.element');
                        function r(e, a, r) {
                            var u = null;
                            if ((void 0 !== r && (u = '' + r), void 0 !== a.key && (u = '' + a.key), 'key' in a))
                                for (var t in ((r = {}), a)) 'key' !== t && (r[t] = a[t]);
                            else r = a;
                            return {
                                $$typeof: l,
                                type: e,
                                key: u,
                                ref: void 0 !== (a = r.ref) ? a : null,
                                props: r,
                            };
                        }
                        (a.Fragment = Symbol.for('react.fragment')), (a.jsx = r), (a.jsxs = r);
                    },
                    1082: (e, a, l) => {
                        e.exports = l(7327);
                    },
                    2342: (e, a) => {
                        Object.defineProperty(a, '__esModule', { value: !0 }),
                            (a.ThumbVariant = a.DEFAULT_MAX_VALUE = a.SliderMode = void 0),
                            (a.SliderMode = {
                                NORMAL: 'normal',
                                DEFERRED: 'deferred',
                            }),
                            (a.DEFAULT_MAX_VALUE = 100),
                            (a.ThumbVariant = {
                                HOVER: 'hover',
                                NEVER: 'never',
                                ALWAYS: 'always',
                            });
                    },
                    7886: function (e, a, l) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(a, '__esModule', { value: !0 }), (a.Slider = void 0);
                        let u = l(1082),
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
                                        thumbSize: d = 'l',
                                        trackSize: c = 's',
                                        mode: y = s.SliderMode.NORMAL,
                                        onChange: _,
                                        showThumbVariant: k = s.ThumbVariant.HOVER,
                                        ...E
                                    } = e,
                                    [m, p] = (0, i.useState)(null != r ? r : 0),
                                    [A, q] = (0, i.useState)(!1),
                                    [b, S] = (0, i.useState)(!1);
                                (0, i.useEffect)(() => {
                                    A || p(r);
                                }, [r, A]),
                                    (0, i.useEffect)(() => {
                                        !A && b && y === s.SliderMode.DEFERRED && (_(m, !0), S(!1));
                                    }, [y, A, _, m, b]);
                                let z = (0, i.useCallback)(
                                        (e) => {
                                            let a = Number(e.target.value);
                                            p(a), S(!0), 'normal' === y ? (_(a, !0), S(!1)) : _(a, !1);
                                        },
                                        [p, _, y],
                                    ),
                                    f = (0, i.useCallback)(
                                        (e) => {
                                            let a = !1,
                                                l = !1;
                                            e.stopPropagation(),
                                                e.nativeEvent instanceof window.MouseEvent
                                                    ? ((a = 0 === e.nativeEvent.button), (l = 'mousedown' === e.nativeEvent.type))
                                                    : ((a = 1 === e.nativeEvent.touches.length || 'touchend' === e.nativeEvent.type),
                                                      (l = 'touchstart' === e.nativeEvent.type)),
                                                a && q(l);
                                        },
                                        [q],
                                    ),
                                    C = (0, i.useCallback)(() => {
                                        q(!1);
                                    }, [q]),
                                    O = (0, i.useMemo)(() => {
                                        let e = (100 * Math.min(m, v)) / v,
                                            a = (100 * Math.min(o, v)) / v;
                                        return {
                                            backgroundSize: ''.concat(e, '% 100%'),
                                            '--seek-before-width': ''.concat(e, '%'),
                                            '--buffered-width': ''.concat(a, '%'),
                                        };
                                    }, [m, o, v]);
                                return (0, u.jsx)('input', {
                                    ref: a,
                                    className: (0, t.clsx)(
                                        n.default.root,
                                        {
                                            [n.default['root_thumbSize_'.concat(d)]]: d,
                                            [n.default['root_trackSize_'.concat(c)]]: c,
                                            [n.default['root_'.concat(k, 'Thumb')]]: k,
                                        },
                                        l,
                                    ),
                                    type: 'range',
                                    max: v,
                                    value: m,
                                    style: O,
                                    onTouchStart: f,
                                    onTouchEnd: f,
                                    onMouseDown: f,
                                    onMouseUp: f,
                                    onMouseOut: C,
                                    onBlur: C,
                                    onChange: z,
                                    ...E,
                                });
                            };
                        a.Slider = (0, i.forwardRef)((e, a) => (0, u.jsx)(o, { forwardRef: a, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = l.t(u, 2));
                    },
                },
                i = {};
            function s(e) {
                var a = i[e];
                if (void 0 !== a) return a.exports;
                var l = (i[e] = { exports: {} });
                return t[e].call(l.exports, l, l.exports, s), l.exports;
            }
            (s.d = (e, a) => {
                for (var l in a)
                    s.o(a, l) &&
                        !s.o(e, l) &&
                        Object.defineProperty(e, l, {
                            enumerable: !0,
                            get: a[l],
                        });
            }),
                (s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: 'Module',
                        }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var n = {};
            (() => {
                Object.defineProperty(n, 'X', { value: !0 }), (n.i = void 0);
                var e = s(7886);
                Object.defineProperty(n, 'i', {
                    enumerable: !0,
                    get: function () {
                        return e.Slider;
                    },
                });
            })();
            var o = n.i;
            n.X;
        },
    },
]);
